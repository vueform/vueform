export default class SimulateEvents
{
 
  element
  
  init = (element) =>
  {
    
    if (element) this.element = element
  }
  
  
  files = (numberOfFiles) =>
  {
    
    const f = []
    
    for(let i = 0; i < numberOfFiles; i++) {
      f.push(new File([''], `filename_${i}.jpg`))
    }
    
    return f
  }
  
  
  /**
   * @param {('drag'|'dragstart')} [dragEventType=drag] Type of event
   */
  drag = (dragEventType = 'drag') =>
  {
    
    const event = new Event(dragEventType, { bubbles: true })
    
    return this.element.dispatchEvent(event)
  }
  
  /**
   * @param {('dragend'|'dragover'|'dragenter'|'dragleave'|'drop')} [dropEventType=drop] Type of event
   * @param {number} [numberOfFiles=1] How many files to be dropped
   */
  drop = (dropEventType = 'drop', numberOfFiles = 1) =>
  {
    
    const event = new Event(dropEventType, { bubbles: true })
    
    Object.defineProperty(event, 'dataTransfer', {
      value: {
        files: this.files(numberOfFiles)
      },
      enumerable: true
    })
    
    return this.element.dispatchEvent(event)
  }
  
  /**
   * @param {('click'|'contextmenu'|'dbclick'|'mousedown'|'mouseenter'|'mouseleave'|'mousemove'|'mouseout'|'mouseover'|'mouseout')} [mouseEventType=mouseover] Type of event
   */
  mouse = (mouseEventType = 'mouseover') =>
  {
    
    const event = new Event(mouseEventType, { bubbles: true })
    
    Object.defineProperty(event, 'target', {})
    
    return this.element.$el.querySelector('button').value.dispatchEvent(event)
  }
  
  /**
   * @param {('keydown'|'keypress'|'keyup')} [keyboardEventType=keydown] Type of event
   * @param {string} [key=Enter] Keyboard key name to simulate
   * @param {boolean} [holdCtrl=false] Control is held down?
   * @param {boolean} [holdShift=false] Shift is held down?
   * @param {boolean} [holdAlt=false] Alt is held down?
   * @param {boolean} [holdMeta=false] Meta is held down?
   */
  keyboard = (keyboardEventType = 'keydown', key = 'Enter', holdCtrl = false, holdShift = false, holdAlt = false, holdMeta = false) =>
  {
  
  }
}