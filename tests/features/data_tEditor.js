import { createForm, testPropDefault, destroy } from 'test-helpers'
import flushPromises from 'flush-promises'
import { nextTick } from 'vue'
import { update as baseUpdate, clear as baseClear, reset as baseReset, } from './data_multilingual'

export { data, requestData } from './data_multilingual'

export const load = function (elementType, elementName, options) {
  it('should `load` data', async () => {
    let form = createForm({
      languages: {en:'English',fr:'French'},
      schema: {
        el: {
          type: elementType,
          default: 'value',
        }
      }
    })

    let el = form.vm.el$('el')

    el.load({
      en: 'value-en',
    })

    expect(el.value).toStrictEqual({
      en: 'value-en',
      fr: el.nullValue.fr
    })

    await nextTick()

    expect(el.input.editor$.value).toBe('<div>value-en</div>')

    el.load({
      en: 'value-en-2',
      fr: 'value-fr',
    })

    expect(el.value).toStrictEqual({
      en: 'value-en-2',
      fr: 'value-fr'
    })

    await nextTick()

    expect(el.input.editor$.value).toBe('<div>value-en-2</div>')
    
    // destroy(form) // teardown
  })

  it('should format data if "formatLoad" is set on `load`', async () => {
    let form = createForm({
      languages: {en:'English',fr:'French'},
      schema: {
        el: {
          type: elementType,
          default: 'value',
          formatLoad(value) {
            return {
              en: `${value.en}-formatted`,
              fr: `${value.fr}-formatted`,
            }
          }
        }
      }
    })

    let el = form.vm.el$('el')

    el.load({
      en: 'value-en',
      fr: 'value-fr',
    }, true)

    expect(el.value).toStrictEqual({
      en: 'value-en-formatted',
      fr: 'value-fr-formatted',
    })

    // destroy() // teardown
  })
}

export const update = function (elementType, elementName, options) {
  baseUpdate(elementType, elementName, options)

  it('should update editor value on `update`', async () => {
    let form = createForm({
      languages: {en:'English',fr:'French'},
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.update('value')

    await nextTick()

    expect(el.input.editor$.value).toBe('<div>value</div>')

    // destroy() // teardown
  })
}

export const reset = function (elementType, elementName, options) {
  baseUpdate(elementType, elementName, options)

  it('should update editor value on `reset`', async () => {
    let form = createForm({
      languages: {en:'English',fr:'French'},
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.update('value')

    await nextTick()

    expect(el.input.editor$.value).toBe('<div>value</div>')

    el.reset()

    await nextTick()

    expect(el.input.editor$.value).toBe('')

    // destroy() // teardown
  })
}

export const clear = function (elementType, elementName, options) {
  baseUpdate(elementType, elementName, options)

  it('should update editor value on `clear`', async () => {
    let form = createForm({
      languages: {en:'English',fr:'French'},
      schema: {
        el: {
          type: elementType,
          default: 'value',
        }
      }
    })

    let el = form.vm.el$('el')

    el.clear()

    await nextTick()

    expect(el.input.editor$.value).toBe('')

    // destroy() // teardown
  })
}

export const watchers = function (elementType, elementName, options) {
  
  it('should change language of element when from language has changed', async () => {
   
    let form = createForm({
      languages: { en:'English',fr:'French' },
      schema: {
        el: {
          type: elementType,
        }
      }
    })
    
    let el = form.vm.el$('el')
    
    expect(el.language).toBe('en')
    
    form.vm.setLanguage('fr')
    
    expect(el.language).toBe('fr')
    
    // destroy() // teardown
  })
  
}