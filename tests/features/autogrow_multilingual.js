import { nextTick } from 'composition-api'
import { autosize as baseAutosize } from './autogrow'

export { autogrow } from './autogrow'

export const autosize = function (elementType, elementName, options) {
  baseAutosize(elementType, elementName, options)

  it('should `autosize` when language changes', async () => {
    let form = createForm({
      languages: {
        en: {
          label: 'English',
          code: 'en'
        },
        fr: {
          label: 'French',
          code: 'fr'
        },
      },
      schema: {
        el: {
          type: elementType,
          autogrow: true
        }
      }
    })

    let el = form.vm.el$('el')

    let updateMock = jest.fn()

    el.$laraform.services.autosize.update = updateMock

    await nextTick()

    expect(updateMock).not.toHaveBeenCalled()

    form.vm.setLanguage('fr')

    expect(updateMock).toHaveBeenCalled()
  })
}