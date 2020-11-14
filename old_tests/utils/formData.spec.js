import formData from './../../src/utils/formData'

describe('Form Data Util', () => {
  it('should convert array to form data', () => {
    let FData = new FormData()

    FData.append('a[0]', 1)
    FData.append('a[1]', 2)

    let result = formData({
      a: [1,2]
    })

    expect(result).toStrictEqual(FData)
  })
})