import { createForm } from '../helpers'
import { nextTick } from 'vue'

export const handleKeyEvents = function (elementType, elementName, options) {
  
  it('should trigger `onKeyDown` event', async () => {
  
    let onKeyDownMock = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          onKeydown: onKeyDownMock,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(onKeyDownMock).toHaveBeenCalledTimes(0)

    el.handleKeydown('a')
    
    await nextTick()

    // console.log(onKeyDownMock.mock)
    
    expect(onKeyDownMock).toHaveBeenCalledTimes(1)
    expect(onKeyDownMock).toHaveBeenCalledWith('a', el)
  })
  
  it('should trigger `onKeyUp` event', async () => {
  
    let onKeyUp = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          onKeyup: onKeyUp,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(onKeyUp).toHaveBeenCalledTimes(0)

    el.handleKeyup('b')
    
    await nextTick()

    expect(onKeyUp).toHaveBeenCalledTimes(1)
    expect(onKeyUp).toHaveBeenCalledWith('b', el)
  })
  
  it('should trigger `onKeyPress` event', async () => {
  
    let onKeyPress = jest.fn()

    let form = createForm({
      schema: {
        el: {
          type: elementType,
          auto: false,
          onKeypress: onKeyPress,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(onKeyPress).toHaveBeenCalledTimes(0)

    el.handleKeypress('c')
    
    await nextTick()

    expect(onKeyPress).toHaveBeenCalledTimes(1)
    expect(onKeyPress).toHaveBeenCalledWith('c', el)
  })
}