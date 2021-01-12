import { elementComponent, label, loading, disabled, align, isDisabled, isLoading, setLoading, disable, enable, handleClick } from './FormButton'

describe('FormButton', () => {
  let buttonType = 'button'
  let buttonComponent = 'FormButton'

  elementComponent(buttonType, buttonComponent)
  label(buttonType, buttonComponent)
  loading(buttonType, buttonComponent)
  disabled(buttonType, buttonComponent)
  align(buttonType, buttonComponent)
  isDisabled(buttonType, buttonComponent)
  isLoading(buttonType, buttonComponent)
  setLoading(buttonType, buttonComponent)
  disable(buttonType, buttonComponent)
  enable(buttonType, buttonComponent)
  handleClick(buttonType, buttonComponent)
})
