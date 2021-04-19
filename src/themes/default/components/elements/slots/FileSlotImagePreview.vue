<template>
  <div :class="classes.preview" v-show="visible">
    <div :class="classes.info">
      <div :class="classes.filename">

        <!-- Image && filename  -->
        <a v-if="uploaded && hasLink" :href="link" target="_blank">
          <img :src="preview" :alt="filename" :title="filename" /> 
          <span v-if="hasError" :class="classes.iconWarning"></span>
          {{ filename }}
        </a>
        <span v-else>
          <img v-show="previewLoaded" :src="preview" :alt="filename" :title="filename" />
          <span v-show="!previewLoaded" :class="classes.previewLoader"></span>
          <span v-if="hasError" :class="classes.iconWarning"></span>
          {{ filename }}
        </span>

      </div>
      
      <div class="actions">

        <!-- Status -->
        <div  v-if="uploading" :class="classes.percent">{{ progress }}%</div>

        <!-- Upload button -->
        <a href="" :class="classes.upload" v-if="canUpload" @click.prevent="upload">{{ uploadText }}</a> 

        <!-- Success -->
        <span v-if="uploaded" :class="classes.iconUploaded"></span>

        <!-- Remove -->
        <a href="" :class="classes.remove" v-if="canRemove" @click.prevent="remove"><span :class="classes.iconRemove"></span></a>

      </div>
    </div>
    <div v-if="uploading" :class="classes.progress">
      <div :class="classes.progressBar" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ImageSlotPreview',
    data() {
      return {
        defaultClasses: {
          preview: 'image-preview',
          info: 'file-info',
          filename: 'filename',
          actions: 'actions',
          percent: 'percent',
          upload: 'btn btn-primary btn-sm',
          remove: 'remove',
          progress: 'progress',
          progressBar: 'progress-bar',
          iconWarning: 'icon-warning',
          iconUploaded: 'icon-uploaded',
          iconRemove: 'icon-remove',
          previewLoader: 'preview-loader',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .image-preview {
    padding: $input-padding-y $input-padding-y;
    font-family: $input-font-family;
    @include font-size($input-font-size);
    line-height: $input-line-height;
    border: $input-border-width solid $input-border-color;
    @include border-radius($input-border-radius, 0);
    color: $input-color;
    min-height: 38px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    transition: .5s background;

    &:hover {
      background: $gray-100;

      .file-info {
        .icon-uploaded {
          display: none;
        }

        .actions {
          .percent {
            display: none;
          }

          .remove {
            display: inline-block;
          }
        }
      }
    }

    .file-info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        max-width: 120px;
        max-height: 120px;
        margin-right: $input-padding-y;
      }

      .filename {
        display: flex;
        align-items: center;

        a, a:hover, a:focus, a:active {
          color: $body-color;
        }

        a:hover {
          text-decoration: underline;
        }

        & > span, & > a {
          display: flex;
          align-items: center;
        }

        .preview-loader {
          position: relative;
          color: transparent !important;
          width: 14px;
          height: 14px;
          margin-right: $input-padding-y;

          &:after {
            content: "";
            display: inline-block;
            width: 14px;
            height: 14px;
            vertical-align: text-bottom;
            border: .25em solid;
            border-right: .25em solid transparent;
            border-radius: 50%;
            -webkit-animation: preview-spinner .75s linear infinite;
            animation: preview-spinner .75s linear infinite;
            font-size: 9px;
            position: absolute;
            left: calc(50% - 7px);
            top: calc(50% - 7px);
            color: initial;
            color: $primary;
          }
        }
      }

      .icon-warning {
        margin-right: $input-padding-y;
      }

      .actions {
        display: flex;
        align-items: center;
        padding-right: 4px;

        .percent {
          font-size: 14px;
          color: $text-muted;
        }

        .btn {
          font-size: 13px;
          padding: 2px 8px;
          font-weight: 600;
          margin-right: 5px;

          & + .remove {
            display: inline-block;
          }
        }

        .remove {
          display: none;
        }
      }
    }

    .progress {
      margin-top: $input-padding-y;
      border-radius: 0;
      height: 3px;

      .progress-bar {
        border-radius: 0;
      }
    }

    [class^="icon-"] {
      display: flex;
      width: 16px;
      height: 16px;
      align-items: center;
      justify-content: center;
      background-repeat: no-repeat;
      background-position: center center;
    }

    .icon-uploaded {
      background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='16px' height='16px' viewBox='0 0 16 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M7.99998093,0.215602346 C12.2801831,0.215602346 15.7499624,3.68538167 15.7499624,7.96558387 C15.7499624,12.2457861 12.2801831,15.7155654 7.99998093,15.7155654 C3.71977873,15.7155654 0.249999404,12.2457861 0.249999404,7.96558387 C0.249999404,3.68538167 3.71977873,0.215602346 7.99998093,0.215602346 Z M7.99998093,14.7155678 C11.748263,14.7155678 14.7499648,11.6737965 14.7499648,7.96558387 C14.7499648,4.21730179 11.708224,1.21559996 7.99998093,1.21559996 C4.25169885,1.21559996 1.24999702,4.25737127 1.24999702,7.96558387 C1.24999702,11.7138659 4.29173781,14.7155678 7.99998093,14.7155678 Z M12.4259042,6.12305896 L6.78593353,11.7178027 C6.63890019,11.8636459 6.40144348,11.8626998 6.25560032,11.7156665 L3.57192142,9.01028963 C3.42607826,8.86325629 3.4270243,8.6258301 3.57405764,8.47998694 L3.84029236,8.21588845 C3.9873257,8.07004529 4.22478241,8.07099133 4.37062557,8.21802467 L6.52610749,10.3909321 L11.6336393,5.32438533 C11.7806726,5.17854217 12.0180988,5.1794577 12.1639419,5.32649104 L12.4280404,5.59275627 C12.5739141,5.73978961 12.5729376,5.97721581 12.4259042,6.12305896 Z' id='check-circle' fill='#{str-replace(#{$success}, '#', '%23')}'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
    }

    .icon-warning {
      background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='16px' height='15px' viewBox='0 0 16 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M6.80166149,5.91064615 C6.79057982,5.72215097 6.94043603,5.5632425 7.12917154,5.5632425 L8.6207108,5.5632425 C8.80947302,5.5632425 8.95932923,5.72215097 8.94824756,5.91064615 L8.76811035,8.97313885 C8.75807009,9.14360964 8.61133811,9.28198364 8.44054689,9.28198364 L7.30936215,9.28198364 C7.13563362,9.28198364 6.99199917,9.14657365 6.98179869,8.97313885 L6.80166149,5.91064615 Z M9.02341599,10.81323 C9.02341599,11.447502 8.50925324,11.9616647 7.87498122,11.9616647 C7.24070921,11.9616647 6.72654646,11.447502 6.72654646,10.81323 C6.72654646,10.178958 7.24070921,9.66479522 7.87498122,9.66479522 C8.50925324,9.66479522 9.02341599,10.178958 9.02341599,10.81323 Z M9.01185367,0.969102913 L15.5726824,12.3448235 C16.0773924,13.2196612 15.4438414,14.3132216 14.4358367,14.3132216 L1.31396553,14.3132216 C0.304011574,14.3132216 -0.32662886,13.2180056 0.177093084,12.3448235 L6.73810878,0.969102913 C7.24305906,0.0938379711 8.50781129,0.0954401401 9.01185367,0.969102913 Z M1.45444905,12.754685 C1.39135029,12.8640598 1.47031052,13.0007248 1.59653474,13.0006981 L14.1534277,13.0006981 C14.2797053,13.0006981 14.3586389,12.864033 14.2955134,12.7546583 L8.01709362,1.87205868 C7.95394145,1.76263053 7.79602099,1.76263053 7.73286883,1.87205868 L1.45444905,12.754685 Z' id='exclamation-triangle' fill='#{str-replace(#{$danger}, '#', '%23')}'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
    }

    .icon-remove {
      background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='10px' height='11px' viewBox='0 0 10 11' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M6.06062398,5.56714637 L9.92655104,9.43307343 C10.024024,9.53057686 10.024024,9.68902375 9.92655104,9.78649666 L9.21933837,10.4937093 C9.12186546,10.5911822 8.96341857,10.5911822 8.86591514,10.4937093 L4.99998808,6.62778227 L1.13375584,10.4937093 C1.03625241,10.5911822 0.877805524,10.5911822 0.780302095,10.4937093 L0.0731199429,9.78649666 C-0.0243834868,9.68902375 -0.0243834868,9.53057686 0.0731199429,9.43307343 L3.93935218,5.56714637 L0.0731199429,1.70091413 C-0.0243834868,1.6034107 -0.0243834868,1.44496381 0.0731199429,1.34746038 L0.780637787,0.640278233 C0.878110699,0.542774803 1.03655759,0.542774803 1.13406102,0.640278233 L4.99998808,4.50651047 L8.86591514,0.640583408 C8.96341857,0.543110495 9.12186546,0.543110495 9.21933837,0.640583408 L9.92655104,1.34779608 C10.024024,1.44526899 10.024024,1.60371588 9.92655104,1.70121931 L6.06062398,5.56714637 Z' id='times' fill='#{str-replace(#{$body-color}, '#', '%23')}'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
    }
  }

  .is-removing {
    .image-preview {
      opacity: 0.6;
    }
  }

  @keyframes preview-spinner {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(1turn);
    }
  }
</style>