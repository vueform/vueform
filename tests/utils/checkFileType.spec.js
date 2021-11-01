import _ from 'lodash'
import checkFileType from './../../src/utils/checkFileType'

window._ = _

describe('checkFileType util', () => {
  it('should check string types', async () => {
    expect(checkFileType(new File([''], 'filename.jpg'), '.jpg,.jpeg,.png')).toBe(true)
    
    expect(checkFileType(new File([''], 'filename.jpg'), '.jpeg,.png')).toBe(false)

    expect(checkFileType(new File([''], 'filename.jpg', {
      type: 'image/jpg'
    }), 'image/jpg,image/jpeg')).toBe(true)

    expect(checkFileType(new File([''], 'filename.png', {
      type: 'image/png'
    }), 'image/jpg,image/jpeg')).toBe(false)
  })
})