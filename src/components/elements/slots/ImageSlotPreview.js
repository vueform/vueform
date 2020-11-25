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
  init(props, context) {
    const { previewOptions } = toRefs(props)

    const elementComponent = useElementComponent(props, context)

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
      ...elementComponent,
      link,
      preview,
      uploaded,
      filename,
    }
  },
}