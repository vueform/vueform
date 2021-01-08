import { createForm, findAllComponents} from 'test-helpers'
import useElementComponent from './../composables/useElementComponent'

describe('Drag And Drop', () => {
  let form = createForm({
    schema: {
      el: {
        type: 'file',
        drop: true,
      }
    }
  })

  let Drag = findAllComponents(form, { name: 'DragAndDrop' }).at(0)

  useElementComponent('file', 'DragAndDrop', { drop: true }, {
    mergeWith: {
      [Drag.vm.mainClass]: {
        [Drag.vm.classes.active]: Drag.vm.dragging,
      }
    }
  })

  describe('rendering', () => {
    it('should render default', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'file',
            drop: true,
          }
        }
      })

      let Drag = findAllComponents(form, { name: 'DragAndDrop' }).at(0)

      expect(Drag.exists()).toBe(true)

      expect(Drag.find('.' + Drag.vm.defaultClasses.icon).exists()).toBe(true)
      expect(Drag.find('.' + Drag.vm.defaultClasses.title).html()).toContain(form.vm.__('laraform.elements.file.dndTitle'))
      expect(Drag.find('.' + Drag.vm.defaultClasses.description).html()).toContain(form.vm.__('laraform.elements.file.dndDescription'))
    })
  })
  
  describe('dragging', () => {
    it('should be false by default', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'file',
            drop: true,
          }
        }
      })

      let Drag = findAllComponents(form, { name: 'DragAndDrop' }).at(0)

      expect(Drag.vm.dragging).toBe(false)
    })
  })
  
  describe('area', () => {
    it('should be equal to container DOM', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'file',
            drop: true,
          }
        }
      })

      let Drag = findAllComponents(form, { name: 'DragAndDrop' }).at(0)

      expect(Drag.vm.area).toStrictEqual(Drag.element)
    })
  })
  
  describe('handleClick', () => {
    it('should emit click', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'file',
            drop: true,
          }
        }
      })

      let Drag = findAllComponents(form, { name: 'DragAndDrop' }).at(0)

      Drag.vm.handleClick()

      expect(Drag.emitted('click')).toBeTruthy()
    })

    it('should trigger handleClick on container DOM click', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'file',
            drop: true,
          }
        }
      })

      let Drag = findAllComponents(form, { name: 'DragAndDrop' }).at(0)

      Drag.trigger('click')

      expect(Drag.emitted('click')).toBeTruthy()
    })
  })
  
  describe('onMounted', () => {
    it('should emit drop and set dragging false on container drop event', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'file',
            drop: true,
            auto: false,
          }
        }
      })

      let el = form.vm.el$('el')
      let Drag = findAllComponents(form, { name: 'DragAndDrop' }).at(0)

      Drag.vm.dragging = true

      let file = new File([], 'filename.jpg')

      Drag.trigger('drop', {
        dataTransfer: {
          files: [file]
        }
      })

      expect(Drag.emitted('drop')).toBeTruthy()
      expect(Drag.vm.dragging).toBe(false)
      expect(el.value).toStrictEqual(file)
    })

    it('should set dragging to true on dragover', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'file',
            drop: true,
          }
        }
      })

      let Drag = findAllComponents(form, { name: 'DragAndDrop' }).at(0)

      Drag.trigger('dragover')

      expect(Drag.vm.dragging).toBe(true)

      Drag.trigger('dragover')

      expect(Drag.vm.dragging).toBe(true)
    })

    it('should set dragging to false on dragleave', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'file',
            drop: true,
          }
        }
      })

      let Drag = findAllComponents(form, { name: 'DragAndDrop' }).at(0)

      Drag.vm.dragging = true

      Drag.trigger('dragleave')

      expect(Drag.vm.dragging).toBe(false)
    })

    it('should set dragging to false on dragend', () => {
      let form = createForm({
        schema: {
          el: {
            type: 'file',
            drop: true,
          }
        }
      })

      let Drag = findAllComponents(form, { name: 'DragAndDrop' }).at(0)

      Drag.vm.dragging = true

      Drag.trigger('dragend')

      expect(Drag.vm.dragging).toBe(false)
    })
  })
})