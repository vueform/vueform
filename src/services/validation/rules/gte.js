import gt from './gt'

export default class gte extends gt {
  compare(value, otherValue) {
    let otherSize = this.size(otherValue)

    return otherSize == 0 || this.size(value) >= otherSize
  }
}