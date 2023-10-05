import { createForm } from 'test-helpers'
import SimulateEvents from '../helpers/SimulateEvents'
import useElementComponent from './../composables/useElementComponent'
import { h } from 'vue'

describe('ElementInfo', () => {
  useElementComponent('text', 'ElementInfo', { info: 'info', label: 'label' })

  describe('rendering', () => {
    it('should render', () => {
      let info = 'info'

      let form = createForm({
        schema: {
          el: {
            type: 'text',
            label: 'label',
            info,
          }
        }
      })

      let Info = form.findComponent({ name: 'ElementInfo' })

      expect(Info.html()).toContain(info)
    })
    
    it('should render as slot', async () => {
      
      let form = createForm({
        schema: {
          el: {
            type: 'text',
            label: 'label',
            slots: {
              info: function render() {
                return h('div', 'schema slot')
              }
            }
          }
        }
      })
      
      expect(form.findComponent({name: 'ElementInfo'}).html()).toContain('schema slot')
    })
    
    // it('should render tooltip', async () => {
    //
    //   const form = createForm({
    //     schema: {
    //       el: {
    //         type: 'text',
    //         label: 'label',
    //         info: 'something',
    //       }
    //     }
    //   })
    //
    //   const Info = form.findComponent({ name: 'ElementInfo' })
    //
    //   await Info.vm.handleMouseOver()
    //
    // })
  })
})