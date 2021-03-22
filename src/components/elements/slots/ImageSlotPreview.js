import { computed, toRefs } from 'composition-api'
import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'ImageSlotPreview',
  props: {
    previewOptions: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    const {
      previewOptions
    } = toRefs(props)

    const {
      el$,
      form$,
      classes,
      mainClass,
      defaultClasses,
      components,
      theme,
    } = useElementComponent(props, context)

    const link = computed(() => {
      return previewOptions.value.link
    })

    const preview = computed(() => {
      return previewOptions.value.preview
    })

    const uploaded = computed(() => {
      return previewOptions.value.uploaded
    })

    const filename = computed(() => {
      return previewOptions.value.filename
    })

    return {
      el$,
      form$,
      classes,
      mainClass,
      defaultClasses,
      components,
      theme,
      link,
      preview,
      uploaded,
      filename,
    }
  },
}