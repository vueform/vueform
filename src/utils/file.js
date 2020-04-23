const file = class LaraformFile {
  
  constructor(file) {
    this.file = file || {}

    this.base64 = null

    if (this.isImage() && file instanceof Blob) {
      this.getBase64().then((base64) => {
        this.base64 = base64
      })
    }
  }

  get preview() {
    if (this.base64) {
      return this.base64
    }

    return this.link
  }

  get displayName() {
    if (this.file.originalName) {
      return this.file.originalName
    }

    if (this.file.name) {
      return this.file.name
    }

    return 'unknown'
  }

  get name() {
    return this.file.name.substring(this.file.name.lastIndexOf('/') + 1)
  }

  get link() {
    if (!this.file.url) {
      return null
    }

    return this.file.url + '/' + this.file.name
  }

  getBase64() {
    return new Promise((resolve, reject) => {
      var reader = new FileReader()

      reader.onload = () => {
        resolve(reader.result)
      }

      reader.onerror = (error) => {
        reject(error)
      }

      reader.readAsDataURL(this.file)
    });
  }

  isImage() {
    return [
      'png', 'gif', 'bmp',
      'svg', 'jpeg', 'jpg'
    ].indexOf(this.file.name.split('.').pop()) !== -1
  }
}

export default file