import { createForm, findAllComponents } from 'test-helpers'

export default function baseElement(elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    // Computed Porps
    it('should return `genericName` when label is defined', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            label: 'Element label'
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.genericName).toBe('Element label')
    })

    it('should return `genericName` when placeholder is defined', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
            placeholder: 'Element placeholder'
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      if (el.vm.placeholder !== undefined) {
        expect(el.vm.genericName).toBe('Element placeholder')
      }
    })

    it('should return `genericName` when no placeholder nor label is defined', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.genericName).toBe('El')
    })

    it('should return false to `isFileType`, `isImageType`, `isArrayType`', () => {
      let form = createForm({
        schema: {
          el: {
            type: elementType,
          }
        }
      })

      let el = findAllComponents(form, { name: elementName }).at(0)

      expect(el.vm.isFileType).toBe(false)
      expect(el.vm.isImageType).toBe(false)
      expect(el.vm.isArrayType).toBe(false)
    })
  }
}