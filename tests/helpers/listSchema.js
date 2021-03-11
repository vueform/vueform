export default function (options, i, extend) {
  let prototype = Object.assign({}, options.prototypes[i])
  let elementType = options.elementType
  let childName = options.childName
  let nullValue = options.childNulls[i]
  let isObject = i == 1
  let isFile = options.elementType === 'multifile'
  let form = {}
  let schema = {}

  _.each(extend, (data, extension) => {
    switch (extension) {
      case 'initial':
        // Return default array instead of setting initial
        // because initial is not a prop when multifile
        if (['multifile'].indexOf(elementType) !== -1) {
          let defaults = []

          for(var c = 0; c < data; c++) {
            defaults.push(nullValue)
          }

          prototype = Object.assign({}, prototype, {
            default: defaults
          })
        } else {
          prototype = Object.assign({}, prototype, {
            initial: data
          })
        }
        break

      case 'child':
        if (isObject && !isFile) {
          prototype = Object.assign({}, prototype, {
            object: {
              schema: {
                [childName]: Object.assign({}, prototype.object.schema[childName], data)
              }
            }
          })
        } else if (!isObject && !isFile) {
          prototype = Object.assign({}, prototype, {
            element: Object.assign({}, prototype.element, data)
          })
        } else {
          prototype = Object.assign({}, prototype, {
            file: Object.assign({}, prototype.file || {}, data)
          })
        }
        break

      case 'orderField':
        if (isObject && !isFile) {
          prototype = Object.assign({}, prototype, {
            object: {
              schema: Object.assign({}, prototype.object.schema, {
                order: {
                  type: 'text'
                }
              })
            }
          })
        } else if (isObject && isFile) {
          prototype = Object.assign({}, prototype, {
            fields: Object.assign({}, prototype.fields || {}, {
              order: {
                type: 'text'
              }
            })
          })
        }
        break

      case 'parent':
        prototype = Object.assign({}, prototype, data)
        break

      case 'default':
        prototype = Object.assign({}, prototype, {
          default: data
        })
        break

      case 'schema':
        schema = Object.assign({}, schema, data)
        break

      case 'form':
        form = Object.assign({}, form, data)
        break
    }
  })

  return Object.assign({}, form, {
    schema: Object.assign({}, schema, {
      el: prototype,
    })
  })
}