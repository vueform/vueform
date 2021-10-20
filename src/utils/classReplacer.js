let classify

classify = (classes) => {
  if (typeof classes === 'string') {
    return classes.split(' ')
  }
  else if (Array.isArray(classes)) {
    return classes.flatMap(c => classify(c))
  }
  else {
    return Object.keys(classes).filter(c => !!classes[c])
  }
}

export default function (map, classes) {
  const elMap = {}
  const observers = {}
  let mapped = false

  const replace = (classes) => {
        
    Object.keys(map).forEach((entry) => {
      if (map[entry].split('|').length > 1) {
        const selector = map[entry].split('|')[0];

        if (!observers[entry]) {
          observers[entry] = {}
        }

        (elMap[entry] || document.querySelectorAll(selector)).forEach((el, i) => {
          const fixClass = (target) => {
            classify(classes[entry]).forEach((c) => {
              if (c.length) el.classList[target.classList.contains(map[entry].split('|')[1].replace('.','')) ? 'add' : 'remove'](c);
            })
          }

          const handle = (evt) => {
            fixClass(evt[0].target)
            getObserver().disconnect()
            observe()
          }

          const registerObserver = () => {
            observers[entry][i] = new MutationObserver(handle)
          }

          const getObserver = () => {
            return observers[entry][i]
          }

          const observe = () => {
            getObserver().observe(el, {
              attributes: true, 
              attributeFilter: ['class'],
              childList: false, 
              characterData: false
            })
          }

          fixClass(el)

          if (getObserver()) getObserver().disconnect()

          registerObserver()
          observe()
        })
      } else {
        if (!mapped) elMap[entry] = [];

        (mapped ? elMap[entry] : document.querySelectorAll(map[entry])).forEach((el) => {
          el.className.split(' ').filter(c => ['editor-active'].indexOf(c) === -1).forEach((c) => {
            if (c.length) el.classList.remove(c);
          })

          classify(classes[entry]).forEach((c) => {
            if (c.length) el.classList.add(c)
          })

          if (!mapped) elMap[entry].push(el);
        })
      }

    })

    mapped = true
  }

  replace(classes)

  return replace
}