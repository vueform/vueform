const createPopper = function (ref, el, options) {
  const popper = {
    setOptions: (cb) => {
      let newOps = cb(options)

      popper.state.placement = newOps.placement
    },
    update: () => {},
    destroy: () => {},
    state: {
      placement: options.placement
    },
    options,
  }

  return popper
}

export {
  createPopper,
}