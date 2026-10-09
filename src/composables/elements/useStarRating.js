import { onMounted, ref, toRefs } from "vue";

let gradientNumber = 0;

const base = function (props, context, dependencies) {
  const {
    count,
    starFillSnap,
    starFillFullAt,
    roundValue,
    default: defaultValue,
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  const { update, input } = dependencies;

  // ============ DATA ============

  const fillPercentages = ref(Array.from({ length: count.value }, () => 0));
  const gradientPrefix = ref('vf-sr-gradient' + ++gradientNumber);
  const ratingComplete = ref(false);
  const swipeCoverageCheckpoint = ref(0);

  // ============ METHODS ============

  const buildRatingContext = (ev) => {
    return {
      rect: input.value.getBoundingClientRect(),
      client_x: ev.clientX || ev.changedTouches[0]?.clientX,
    };
  };

  const buildMouseLeaveRatingContext = () => {
    const rect = input.value.getBoundingClientRect();
    const { width, left } = rect;

    return {
      rect,
      client_x: swipeCoverageCheckpoint.value * width + left,
    };
  };

  const buildDefaultValueRatingContext = () => {
    const rect = input.value.getBoundingClientRect();
    const { width, left } = rect;

    let ratingValue = defaultValue.value;

    if (ratingValue > count.value) {
      ratingValue = count.value;
    }

    return {
      rect,
      client_x: ratingValue / count.value * width + left,
    };
  };

  const getSwipeCoveragePercent = (ratingContext) => {
    const { client_x } = ratingContext;
    const { rect: { width, left } } = ratingContext;

    let offsetX = client_x - left;

    if (offsetX < 0) {
      offsetX = 0;
    } else if (offsetX > width) {
      offsetX = width;
    }

    return offsetX / width;
  };

  const setStarFillPercentages = (ratingContext) => {
    const { rect: { width } } = ratingContext;

    const oneStarWidth = width / count.value;
    const oneStarWidthPercent = oneStarWidth / width;

    const coveragePercent = getSwipeCoveragePercent(ratingContext);

    let minCoveragePercent = 0;

    for (let i = 0; i < count.value; i++) {
      if (coveragePercent < minCoveragePercent) {
        fillPercentages.value[i] = 0;
        continue;
      }

      let fillPercentage = (coveragePercent - minCoveragePercent) /
        oneStarWidthPercent * 100;

      const snap = starFillSnap.value;
      const fullAt = starFillFullAt.value;

      if (snap != null && snap > 0 && snap <= 1) {
        fillPercentage = Math.ceil(fillPercentage / (snap * 100)) * snap * 100;
      } else if (fullAt != null && fillPercentage >= fullAt) {
        fillPercentage = 100;
      }

      fillPercentages.value[i] = Math.min(100, fillPercentage);

      minCoveragePercent = (i + 1) * oneStarWidthPercent;
    }
  };

  const finalizeRating = (context) => {
    swipeCoverageCheckpoint.value = getSwipeCoveragePercent(context);

    const rating = fillPercentages.value.reduce((acc, value) => acc + value, 0) / 100;

    const formatter = new Intl.NumberFormat(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: roundValue.value,
    });

    update(formatter.format(rating));
  };

  const setDefaultValueRating = () => {
    if (! defaultValue.value) {
      return;
    }

    const context = buildDefaultValueRatingContext();

    setStarFillPercentages(context);
    finalizeRating(context);
  };

  const handleMouseUp = (ev) => {
    ev.preventDefault();

    if (ratingComplete.value == true) {
      return;
    }

    const context = buildRatingContext(ev);

    setStarFillPercentages(context);
    finalizeRating(context);

    ratingComplete.value = true;
  };

  const handleMouseDown = (ev) => {
    ev.preventDefault();

    ratingComplete.value = false;
  };

  const handleMouseMove = (ev) => {
    if (ratingComplete.value == true) {
      return;
    }

    setStarFillPercentages(buildRatingContext(ev));
  };

  const handleMouseLeave = (ev) => {
    ratingComplete.value = false;

    setStarFillPercentages(buildMouseLeaveRatingContext());
  };

  // =============== HOOKS ================

  onMounted(() => {
    setDefaultValueRating();
  });

  return {
    fillPercentages,
    gradientPrefix,
    handleMouseUp,
    handleMouseDown,
    handleMouseMove,
    handleMouseLeave,
  };
};

export default base;
