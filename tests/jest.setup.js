import 'mutationobserver-shim'

// Workaround window.getSelection usage() in trix
// https://stackoverflow.com/questions/43677034/enzyme-jest-window-getselection-does-not-work
window.getSelection = () => ({})

global.console = {
  ...console,
  warn: jest.fn(),
};