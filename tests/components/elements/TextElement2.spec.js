import { createForm, findAllComponents } from 'test-helpers'
import { nextTick } from 'vue'

describe('Text Element Template', () => {
  // Element component
  it('should render text element', () => {
  })

  // Layout
  it('should render it in BaseElementLayout', () => {
  })

  // Field input
  it('should render an input field', () => {
  })

  // Field input options
  it('should pass configurable options to input', () => {
  })

  // Child components
  it('should render InputAddon before if it is defined', () => {
  })

  it('should not render InputAddon before if is not defined', () => {
  })

  it('should render InputAddon after if it is defined', () => {
  })

  it('should not render InputAddon after if is not defined', () => {
  })

  it('should render ElementLabelFloating if floating is defined', () => {
  })

  it('should not render ElementLabelFloating if floating is not defined', () => {
  })

  it('should pass visible "true" to ElementLabelFloating if value is empty', () => {
  })

  it('should pass visible "false" to ElementLabelFloating if value is not empty', () => {
  })

  // Events
  it('should call `handleInput` on "input"', () => {
  })

  it('should call `handleKeyup` on "keyup"', () => {
  })

  it('should call `handleKeyup` on "select"', () => {
  })
})

describe('Text Element Classes', () => {
  // Default classes
  it('should set default `input` class on `input`', () => {
  })

  it('should set default `inputContainer` class on field wrapper if it has addon', () => {
  })

  it('should not set default `inputContainer` class on field wrapper if it does not have addon', () => {
  })

  // Theme classes
  it('should `classes` in theme overwrite default classes', () => {
  })

  // Form classes
  it('should `classes` in form overwrite default classes', () => {
  })

  it('should `classes` in form overwrite theme classes', () => {
  })

  it('should `addClasses` in form add classes', () => {
  })

  // Element classes
  it('should `classes` in element overwrite default classes', () => {
  })

  it('should `classes` in element overwrite theme classes', () => {
  })

  it('should `classes` in element overwrite form classes', () => {
  })

  it('should `addClasses` in element add classes', () => {
  })

  it('should `addClasses` in both form and element add classes', () => {
  })

  // Element class
  it('should `class` in element add classes to the outer-most DOM', () => {
  })

  it('should `class` in element add classes to the outer-most DOM even if form `classes` is defined', () => {
  })

  it('should `class` in element add classes to the outer-most DOM even if element `classes` is defined', () => {
  })

  it('should `class` in element add classes to the outer-most DOM even if form `addClasses` is defined', () => {
  })

  it('should `class` in element add classes to the outer-most DOM even if element `addClasses` is defined', () => {
  })

  it('should `class` in element add classes to the outer-most DOM even if both form and element `addClasses` are defined', () => {
  })
})

describe('Text Element Slots', () => {
  // General slots
  it('should replace `field` slot from schema with SFC', () => {
  })

  it('should replace `field` slot from schema with inline component', () => {
  })

  it('should replace `field` slot from template', () => {
  })
})

describe('Text Element Options', () => {
  // Computed options
  it('should have "" as default for ``', () => {
  })

  it('should set `` from schema', () => {
  })

  it('should set `` to schema', () => {
  })
})