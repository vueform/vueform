<script>
  import FileSlotFilePreview from './../../../../blank/components/elements/slots/FileSlotFilePreview'

  export default {
    name: 'FileSlotFilePreview',
    render: FileSlotFilePreview.render,
    data() {
      return {
        defaultClasses: {
          container: 'file-preview',
          wrapper: 'file-info',
          filename: 'filename',
          filename_link: '',
          filename_static: '',
          actions: 'actions',
          percent: 'percent',
          upload: 'btn btn-primary btn-sm',
          remove: 'remove',
          progress: 'progress',
          progressBar: 'progress-bar',
          iconWarning: 'icon-warning',
          iconUploaded: 'icon-file-uploaded',
          iconFile: 'icon-file',
          iconRemove: 'icon-remove',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .file-preview {
    padding-top: calc(#{$input-padding-y} + 1px);
    font-family: $input-font-family;
    @include font-size($input-font-size);
    line-height: $input-line-height;
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

      .filename {
        display: flex;
        align-items: center;
        padding-left: 4px;

        a, a:hover, a:focus, a:active {
          color: $body-color;
        }

        a:hover {
          text-decoration: underline;
        }
      }

      .icon-warning {
        margin-right: 6px;
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
          white-space: nowrap;

          & + .remove {
            display: inline-block;
          }
        }

        .remove {
          display: none;
          margin-right: 5px;
        }
      }
    }

    .progress {
      margin-top: 10px;
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

    .icon-file {
      margin-right: 6px;
      background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='12px' height='17px' viewBox='0 0 12 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(0.000000, -3.402344)' fill='#{str-replace(#{$body-color}, '#', '%23')}'%3E%3Cpath d='M11.5593596,7.05941329 C11.840609,7.34066262 11.9999714,7.7250306 11.9999714,8.12191076 L11.9999714,18.4999988 C11.9999714,19.3281218 11.328098,19.9999952 10.499975,19.9999952 L1.49999642,19.9999952 C0.671873398,19.9999952 0,19.3281218 0,18.4999988 L0,5.5000298 C0,4.67190678 0.671873398,4.00003338 1.49999642,3.99692059 L7.87809401,3.99692059 C8.27497417,3.99692059 8.65622936,4.15628301 8.93747869,4.43753234 L11.5593596,7.05941329 Z M10.853093,7.76876219 L8.23124258,5.14691175 C8.16559943,5.08126859 8.08747461,5.03753701 7.99998093,5.01565596 L7.99998093,8.00002384 L10.9843488,8.00002384 C10.9624678,7.91253015 10.9187362,7.83440534 10.853093,7.76876219 Z M10.499975,18.9999976 C10.7749682,18.9999976 10.9999738,18.774992 10.9999738,18.4999988 L10.9999738,9.00002146 L7.74998152,9.00002146 C7.33436362,9.00002146 6.99998331,8.66564115 6.99998331,8.25002325 L6.99998331,5.00003099 L1.49999642,5.00003099 C1.22500318,5.00003099 0.999997616,5.22503656 0.999997616,5.5000298 L0.999997616,18.4999988 C0.999997616,18.774992 1.22500318,18.9999976 1.49999642,18.9999976 L10.499975,18.9999976 Z' id='file'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    .icon-file-uploaded {
      height: 17px;
      margin-right: 6px;
      background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='13px' height='17px' viewBox='0 0 13 17' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='Group-4' transform='translate(0.000000, -3.038337)' fill='#{str-replace(#{$body-color}, '#', '%23')}'%3E%3Cpath d='M11.6895476,7.06069503 C11.9320397,7.30318712 12.1288776,7.7783752 12.1288776,8.12133093 L12.1288776,18.4999988 C12.1288776,19.328427 11.4573094,19.9999952 10.6288812,19.9999952 L1.62890267,19.9999952 C0.800474473,19.9999952 0.12890625,19.328427 0.12890625,18.4999988 L0.12890625,5.5000298 C0.12890625,4.6716016 0.800474473,4.00003338 1.62890267,4.00003338 L8.00758009,4.00003338 C8.35053582,4.00003338 8.82572389,4.19687129 9.06821599,4.43936339 L11.6895476,7.06069503 Z M10.982457,7.76781614 L8.36109487,5.14645399 C8.30710941,5.09240748 8.20307523,5.0336918 8.12888718,5.0153813 L8.12888718,8.00002384 L11.1135297,8.00002384 C11.0952192,7.92583579 11.0365035,7.82180161 10.982457,7.76781614 Z M10.6288812,18.9999976 C10.9050341,18.9999976 11.12888,18.7761517 11.12888,18.4999988 L11.12888,9.00002146 L7.87888777,9.00002146 C7.46467367,9.00002146 7.12888956,8.66423735 7.12888956,8.25002325 L7.12888956,5.00003099 L1.62890267,5.00003099 C1.35274977,5.00003099 1.12890387,5.2238769 1.12890387,5.5000298 L1.12890387,18.4999988 C1.12890387,18.7761517 1.35274977,18.9999976 1.62890267,18.9999976 L10.6288812,18.9999976 Z M9.55179638,12.4078502 L5.33958719,16.5862766 C5.19270643,16.7319977 4.95558542,16.7313568 4.80949812,16.5848422 L2.70455319,14.4738548 C2.55822175,14.3270656 2.55855744,14.0894563 2.70531612,13.9430639 L2.97109308,13.6780804 C3.11788228,13.5317184 3.35549157,13.5320846 3.50182301,13.6788128 L5.07814372,15.2596501 L8.75882952,11.6085052 C8.90598493,11.46254 9.14359423,11.463486 9.28958998,11.6106415 L9.55390209,11.8771203 C9.69992835,12.0242757 9.69895179,12.261885 9.55179638,12.4078502 Z' id='file-check'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    .icon-warning {
      background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='16px' height='15px' viewBox='0 0 16 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M6.80166149,5.91064615 C6.79057982,5.72215097 6.94043603,5.5632425 7.12917154,5.5632425 L8.6207108,5.5632425 C8.80947302,5.5632425 8.95932923,5.72215097 8.94824756,5.91064615 L8.76811035,8.97313885 C8.75807009,9.14360964 8.61133811,9.28198364 8.44054689,9.28198364 L7.30936215,9.28198364 C7.13563362,9.28198364 6.99199917,9.14657365 6.98179869,8.97313885 L6.80166149,5.91064615 Z M9.02341599,10.81323 C9.02341599,11.447502 8.50925324,11.9616647 7.87498122,11.9616647 C7.24070921,11.9616647 6.72654646,11.447502 6.72654646,10.81323 C6.72654646,10.178958 7.24070921,9.66479522 7.87498122,9.66479522 C8.50925324,9.66479522 9.02341599,10.178958 9.02341599,10.81323 Z M9.01185367,0.969102913 L15.5726824,12.3448235 C16.0773924,13.2196612 15.4438414,14.3132216 14.4358367,14.3132216 L1.31396553,14.3132216 C0.304011574,14.3132216 -0.32662886,13.2180056 0.177093084,12.3448235 L6.73810878,0.969102913 C7.24305906,0.0938379711 8.50781129,0.0954401401 9.01185367,0.969102913 Z M1.45444905,12.754685 C1.39135029,12.8640598 1.47031052,13.0007248 1.59653474,13.0006981 L14.1534277,13.0006981 C14.2797053,13.0006981 14.3586389,12.864033 14.2955134,12.7546583 L8.01709362,1.87205868 C7.95394145,1.76263053 7.79602099,1.76263053 7.73286883,1.87205868 L1.45444905,12.754685 Z' id='exclamation-triangle' fill='#{str-replace(#{$danger}, '#', '%23')}'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
    }

    .icon-remove {
      background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='10px' height='11px' viewBox='0 0 10 11' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M6.06062398,5.56714637 L9.92655104,9.43307343 C10.024024,9.53057686 10.024024,9.68902375 9.92655104,9.78649666 L9.21933837,10.4937093 C9.12186546,10.5911822 8.96341857,10.5911822 8.86591514,10.4937093 L4.99998808,6.62778227 L1.13375584,10.4937093 C1.03625241,10.5911822 0.877805524,10.5911822 0.780302095,10.4937093 L0.0731199429,9.78649666 C-0.0243834868,9.68902375 -0.0243834868,9.53057686 0.0731199429,9.43307343 L3.93935218,5.56714637 L0.0731199429,1.70091413 C-0.0243834868,1.6034107 -0.0243834868,1.44496381 0.0731199429,1.34746038 L0.780637787,0.640278233 C0.878110699,0.542774803 1.03655759,0.542774803 1.13406102,0.640278233 L4.99998808,4.50651047 L8.86591514,0.640583408 C8.96341857,0.543110495 9.12186546,0.543110495 9.21933837,0.640583408 L9.92655104,1.34779608 C10.024024,1.44526899 10.024024,1.60371588 9.92655104,1.70121931 L6.06062398,5.56714637 Z' id='times' fill='#{str-replace(#{$body-color}, '#', '%23')}'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
    }
  }

  .is-removing {
    .file-preview {
      opacity: 0.6;
    }
  }
</style>