import { createForm, findAllComponents, testComputedOption } from 'test-helpers'

export default function addons(elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    // Computed Options
    testComputedOption(it, elementType, 'addons', {}, {
      before: '$',
      after: '%'
    })

    // Computed Props
    it('should `hasAddon` "false" if `addons` is not defined', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.hasAddon).toBe(false)
    })

    it('should `hasAddon` "true" if `addons.before` is defined', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            addons: {
              before: '$'
            }
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.hasAddon).toBe(true)
    })

    it('should `hasAddon` "true" if `addons.after` is defined', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            addons: {
              after: '%'
            }
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.hasAddon).toBe(true)
    })

    // Template
    it('should not have InputAddon if not defined', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)
      let InputAddon = findAllComponents(el, { name: 'InputAddon' })

      expect(InputAddon.length).toBe(0)
    })

    it('should render InputAddon "before" if it is defined', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            addons: {
              before: '$'
            }
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)
      let InputAddon = findAllComponents(el, { name: 'InputAddon' }).at(0)

      expect(InputAddon.vm.type).toBe('before')
    })

    it('should render InputAddon "after" if it is defined', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            addons: {
              after: '%'
            }
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)
      let InputAddon = findAllComponents(el, { name: 'InputAddon' }).at(0)

      expect(InputAddon.vm.type).toBe('after')
    })
  }
}