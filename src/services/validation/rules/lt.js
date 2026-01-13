import gt from './gt'

export default class lt extends gt {
  compare(value, otherValue) {
    let size = this.size(value)
    let otherSize = this.size(otherValue, this.other$)

    return (otherSize == 0 && size == 0) || this.size(value) < otherSize
  }
}