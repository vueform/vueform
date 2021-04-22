import mergeClasses, { mergeComponentClasses } from './../../src/utils/mergeClasses'

describe('mergeClasses', () => {
  it('should add component with classes', () => {
    let base = {
      BaseLayout: {
        container: 'a'
      }
    }
    let add = {
      BaseElement: {
        container: 'b'
      }
    }

    let classes = mergeClasses(base, add)

    expect(classes).toStrictEqual({
      BaseLayout: {
        container: 'a'
      },
      BaseElement: {
        container: 'b'
      }
    })
  })

  it('should add classes to existing component', () => {
    let base = {
      BaseLayout: {
        container: 'a'
      },
      BaseElement: {
        container: 'b'
      }
    }
    let add = {
      BaseElement: {
        wrapper: 'c'
      }
    }

    let classes = mergeClasses(base, add)

    expect(classes).toStrictEqual({
      BaseLayout: {
        container: 'a'
      },
      BaseElement: {
        container: 'b',
        wrapper: 'c'
      }
    })
  })

  it('should merge object with object', () => {
    let base = {
      BaseElement: {
        container: {a: true}
      }
    }
    let add = {
      BaseElement: {
        container: {b: true}
      }
    }

    let classes = mergeClasses(base, add)

    expect(classes).toStrictEqual({
      BaseElement: {
        container: {
          a: true,
          b: true
        }
      }
    })
  })

  it('should merge object with array', () => {
    let base = {
      BaseElement: {
        container: {a: true}
      }
    }
    let add = {
      BaseElement: {
        container: ['b', 'c']
      }
    }

    let classes = mergeClasses(base, add)

    expect(classes).toStrictEqual({
      BaseElement: {
        container: [
          {a: true},
          'b',
          'c'
        ]
      }
    })
  })

  it('should merge object with string', () => {
    let base = {
      BaseElement: {
        container: {a: true}
      }
    }
    let add = {
      BaseElement: {
        container: 'b c'
      }
    }

    let classes = mergeClasses(base, add)

    expect(classes).toStrictEqual({
      BaseElement: {
        container: {
          a: true,
          'b c': true
        }
      }
    })
  })

  it('should merge array with object', () => {
    let base = {
      BaseElement: {
        container: ['a', 'b']
      }
    }
    let add = {
      BaseElement: {
        container: {c: true}
      }
    }

    let classes = mergeClasses(base, add)

    expect(classes).toStrictEqual({
      BaseElement: {
        container: [
          'a',
          'b',
          {c: true}
        ]
      }
    })
  })

  it('should merge array with array', () => {
    let base = {
      BaseElement: {
        container: ['a', 'b']
      }
    }
    let add = {
      BaseElement: {
        container: ['c', 'd']
      }
    }

    let classes = mergeClasses(base, add)

    expect(classes).toStrictEqual({
      BaseElement: {
        container: [
          'a',
          'b',
          'c',
          'd'
        ]
      }  
    })
  })

  it('should merge array with string', () => {
    let base = {
      BaseElement: {
        container: ['a', 'b']
      }
    }
    let add = {
      BaseElement: {
        container: 'c d'
      }
    }

    let classes = mergeClasses(base, add)

    expect(classes).toStrictEqual({
      BaseElement: {
        container: [
          'a',
          'b',
          'c d',
        ]
      }
    })
  })

  it('should merge string with object', () => {
    let base = {
      BaseElement: {
        container: 'a b'
      }
    }
    let add = {
      BaseElement: {
        container: {c: true}
      }
    }

    let classes = mergeClasses(base, add)

    expect(classes).toStrictEqual({
      BaseElement: {
        container: ['a', 'b', { c: true } ]
      }
    })
  })

  it('should merge string with array', () => {
    let base = {
      BaseElement: {
        container: 'a b'
      }
    }
    let add = {
      BaseElement: {
        container: ['c', 'd']
      }
    }

    let classes = mergeClasses(base, add)

    expect(classes).toStrictEqual({
      BaseElement: {
        container: [ 'a', 'b', 'c', 'd' ]
      }
    })
  })

  it('should merge string with string', () => {
    let base = {
      BaseElement: {
        container: 'a b'
      }
    }
    let add = {
      BaseElement: {
        container: 'c d'
      }
    }

    let classes = mergeClasses(base, add)

    expect(classes).toStrictEqual({
      BaseElement: {
        container: ['a', 'b', 'c d']
      }
    })
  })

  it('should mergeComponentClasses export merge succefully', () => {
    let base = {
      container: 'a b'
    }
    let add = {
      container: 'c d'
    }

    let classes = mergeComponentClasses(base, add)

    expect(classes).toStrictEqual({
      container: ['a', 'b', 'c d']
    })
  })

  it('should not merge twice', () => {
    let base = {
      container: 'a b'
    }
    let add = {
      container: ['a', 'c d']
    }

    let classes = mergeComponentClasses(base, add)

    expect(classes).toStrictEqual({
      container: ['a', 'b', 'c d']
    })
  })
})