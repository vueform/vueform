<template>
  <div :class="classes.preview" v-show="visible">
    <div :class="classes.info">
      <div :class="classes.previewContainer">

        <!-- Image && filename  -->
        <a v-if="uploaded && hasLink" :href="link" :class="classes.previewLinkWrapper" target="_blank">
          <img :src="preview" :class="classes.previewImage" /> 
          <span v-if="hasError" :class="classes.iconWarning"></span>
          <span :class="classes.filenameLink">{{ filename }}</span>
        </a>
        <span v-else :class="classes.previewStaticWrapper">
          <img v-show="previewLoaded" :src="preview" :class="classes.previewImage" />
          <span v-if="hasError" :class="classes.iconWarning"></span>
          <span :class="classes.filenameStatic">{{ filename }}</span>
        </span>

      </div>
      
      <div :class="classes.actions">

        <!-- Status -->
        <div  v-if="uploading" :class="classes.percent">{{ progress }}%</div>

        <!-- Remove -->
        <a href="" :class="classes.remove" v-if="canRemove" @click.prevent="remove"><span :class="classes.iconRemove"></span></a>

        <!-- Upload button -->
        <a href="" :class="classes.upload" v-if="canUpload" @click.prevent="upload">{{ uploadText }}</a> 

        <!-- Success -->
        <span v-if="uploaded" :class="classes.iconUploaded"></span>

      </div>
    </div>
    <div v-if="uploading" :class="classes.progress">
      <div :class="classes.progressBar" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FileSlotImagePreview',
    data() {
      return {
        defaultClasses: {
          preview: '',
          info: '',
          previewContainer: '',
          previewImage: '',
          previewLinkWrapper: '',
          previewStaticWrapper: '',
          filename: '',
          actions: '',
          percent: '',
          upload: '',
          remove: '',
          progress: '',
          progressBar: '',
          iconWarning: '',
          iconUploaded: '',
          iconRemove: '',
        }
      }
    }
  }
</script>

<style lang="scss">

  // .file-info {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;

  //   img {
  //     max-width: 120px;
  //     max-height: 120px;
  //     margin-right: $input-padding-y;
  //   }

  //   .filename {
  //     display: flex;
  //     align-items: center;

  //     a, a:hover, a:focus, a:active {
  //       color: $body-color;
  //     }

  //     a:hover {
  //       text-decoration: underline;
  //     }

  //     & > span, & > a {
  //       display: flex;
  //       align-items: center;
  //     }

  //     .preview-loader {
  //       position: relative;
  //       color: transparent !important;
  //       width: 14px;
  //       height: 14px;
  //       margin-right: $input-padding-y;

  //       &:after {
  //         content: "";
  //         display: inline-block;
  //         width: 14px;
  //         height: 14px;
  //         vertical-align: text-bottom;
  //         border: .25em solid;
  //         border-right: .25em solid transparent;
  //         border-radius: 50%;
  //         -webkit-animation: preview-spinner .75s linear infinite;
  //         animation: preview-spinner .75s linear infinite;
  //         font-size: 9px;
  //         position: absolute;
  //         left: calc(50% - 7px);
  //         top: calc(50% - 7px);
  //         color: initial;
  //         color: $primary;
  //       }
  //     }
  //   }
  // }
</style>