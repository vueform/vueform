// import 'mutationobserver-shim'

// Workaround window.getSelection usage() in trix
// https://stackoverflow.com/questions/43677034/enzyme-jest-window-getselection-does-not-work
// window.getSelection = () => ({})

global.console = {
  ...console,
  // uncomment to ignore a specific log level
  // log: jest.fn(),
  // debug: jest.fn(),
  // info: jest.fn(),
  warn: jest.fn(),
  // error: jest.fn(),
};

// jest.spyOn(global.console, 'warn').mockImplementation(() => jest.fn());
// jest.spyOn(global.console, 'error').mockImplementation(() => jest.fn());