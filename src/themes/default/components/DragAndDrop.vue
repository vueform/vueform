<script>
  import DragAndDrop from './../../blank/components/DragAndDrop'

  export default {
    name: 'DragAndDrop',
    render: DragAndDrop.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-dnd',
          container_inactive: '',
          container_active: 'is-active',
          container_enabled: '',
          container_disabled: 'is-disabled',
          icon: 'form-dnd-icon-upload',
          title: 'form-dnd-title',
          description: 'form-dnd-description',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-dnd {
    background-color: #ffffff;
    transition: .3s;
    border: var(--form-border-width) dashed var(--form-border-color);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    font-size: inherit;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    position: relative;
    transition: .3s;
    border-radius: var(--form-border-radius);

    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: var(--form-primary-light);
      opacity: 0;
    }

    &.is-disabled {
      background: var(--form-bg-disabled);
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.is-active {
      border-color: var(--form-primary);

      &:after {
        opacity: 0.2;
      }
    }
  }

  .form-dnd-icon-upload {
    display: flex;
    width: 36px;
    height: 32px;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: center center;
    background: var(--form-primary);
    mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='36px' height='32px' viewBox='0 0 36 32' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M35.0499042,20.6125054 C35.656165,21.1750041 35.9999142,21.9687644 35.9999142,22.8000002 L35.9999142,28.9999976 C35.9999142,30.6562437 34.6561674,31.9999905 32.9999213,31.9999905 L2.99999285,31.9999905 C1.3437468,31.9999905 0,30.6562437 0,28.9999976 L0,22.8000002 C0,21.9687644 0.34374918,21.1750041 0.950009942,20.6125054 L6.86247143,15.0687564 C7.01249549,14.9313056 7.24998271,14.9375311 7.39372016,15.0875552 L8.24998033,16.0000286 C8.38749221,16.1500527 8.3812056,16.3875399 8.23124258,16.5312773 L4.52501363,20.0062446 L11.7374598,20.0062446 L13.737455,24.0062351 L22.2624591,24.0062351 L24.2624544,20.0062446 L31.4811871,20.0062446 L27.7749582,16.5312773 C27.6249341,16.3875399 27.612422,16.1500527 27.7561594,16.0000286 L28.606194,15.0875552 C28.7499315,14.9375311 28.9874187,14.925019 29.1374427,15.0687564 L35.0499042,20.6125054 Z M33.9999189,28.9999976 L33.9999189,23.0000119 C33.9999189,22.4500254 33.5499078,22.0000143 32.9999213,22.0000143 L25.4999392,22.0000143 L23.499944,26.0000048 L12.4999702,26.0000048 L10.499975,22.0000143 L2.99999285,22.0000143 C2.45000637,22.0000143 1.99999523,22.4500254 1.99999523,23.0000119 L1.99999523,28.9999976 C1.99999523,29.5499841 2.45000637,29.9999952 2.99999285,29.9999952 L32.9999213,29.9999952 C33.5499078,29.9999952 33.9999189,29.5499841 33.9999189,28.9999976 Z M25.999938,8.00004768 C27.7811838,8.00004768 28.6686939,10.1562925 27.4186968,11.4125151 L19.4187159,19.4124961 C18.6374678,20.1937442 17.368733,20.1937442 16.5874849,19.4124961 L8.58750394,11.4125151 C7.32499474,10.1562925 8.22495598,8.00004768 9.99997616,8.00004768 L13.9999666,8.00004768 L13.9999666,1.50006318 C13.9999666,0.675052941 14.6749528,6.67572021e-05 15.499963,6.67572021e-05 L20.4999511,6.67572021e-05 C21.3249614,6.67572021e-05 21.9999475,0.675052941 21.9999475,1.50006318 L21.9999475,8.00004768 L25.999938,8.00004768 Z M17.9999571,18.0000238 L25.999938,10.0000429 L19.9999523,10.0000429 L19.9999523,2.00006199 L15.9999619,2.00006199 L15.9999619,10.0000429 L9.99997616,10.0000429 L17.9999571,18.0000238 Z' id='inbox-in' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  }

  .form-dnd-title {
    font-weight: 600;
    margin-top: 12px;
  }
</style>