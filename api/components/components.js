module.exports = {
  "DragAndDrop": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      },
      "dragging": {
        "public": true,
        "default": "falyse",
        "types": [
          "boolean"
        ],
        "description": "Whether the user is currently dragging a file over the drag and drop area."
      },
      "area": {
        "public": true,
        "default": "null",
        "types": [
          "HTMLElement"
        ],
        "description": "The DOM element of the drag and drop area."
      }
    },
    "methods": {
      "handleClick": {
        "public": false,
        "returns": "void",
        "description": "Handles `click` event."
      }
    },
    "props": {
      "title": {
        "required": true,
        "types": [
          "string"
        ]
      },
      "description": {
        "required": true,
        "types": [
          "string"
        ]
      },
      "disabled": {
        "required": false,
        "default": false,
        "types": [
          "boolean"
        ]
      }
    },
    "events": {
      "click": {
        "description": "Triggered when the drag and drop area is clicked."
      },
      "drop": {
        "description": "Triggered when a file is dropped.",
        "params": {
          "event": {
            "description": "the drop Event",
            "types": [
              "Event"
            ]
          }
        }
      }
    },
    "slots": {}
  },
  "ElementAddon": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "addon": {
        "public": true,
        "types": [
          "string",
          "component"
        ],
        "description": "The addon. If the addon is provided is a `function` this has the resolved value."
      },
      "isAddonComponent": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether addon is provided as a Vue component."
      },
      "isSlot": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether the label is provided as a slot."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "props": {
      "type": {
        "required": true,
        "types": [
          "string"
        ]
      }
    },
    "events": {},
    "slots": {
      "default": {
        "description": "Renders the content of the addon if the [`type`](#option-type) is not defined in the parent element's the `addons` option."
      }
    }
  },
  "ElementDescription": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "description": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The element's description, defined via `:description` prop."
      },
      "isSlot": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether the description is provided as a slot."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "props": {},
    "events": {},
    "slots": {
      "default": {
        "description": "Renders the content of the description if the parent element has no `description`."
      }
    }
  },
  "ElementError": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error of the element."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "ElementInfo": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "info": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The info for the element, defined via `:info` prop."
      },
      "isSlot": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether the info is provided as a slot."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "props": {},
    "events": {},
    "slots": {
      "default": {
        "description": "Renders the content of the info when the info icon is hovered, if the parent element has no `info`."
      }
    }
  },
  "ElementLabel": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "label": {
        "public": true,
        "types": [
          "string",
          "component"
        ],
        "description": "The label of the component. If the label is provided is a `function` this has the resolved value."
      },
      "isLabelComponent": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether label is provided as a Vue component."
      },
      "name": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The name of the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component's [`:forceLabels`](laraform#force-labels) option is `true`. Either way a label should be displayed."
      },
      "isSlot": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether the label is provided as a slot."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "props": {},
    "events": {},
    "slots": {
      "default": {
        "description": "Renders the content of the label if the parent element has no `label`."
      },
      "info": {
        "description": "Passes its content to [`ElementInfo`](element-info)'s `default` slot."
      }
    }
  },
  "ElementLabelFloating": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "floating": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The floating label of the element, defined via `:floating` prop."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "props": {
      "visible": {
        "required": false,
        "default": false,
        "types": [
          "boolean"
        ]
      }
    },
    "events": {},
    "slots": {}
  },
  "ElementLayout": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element should be visible."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "props": {
      "multiple": {
        "required": false,
        "default": false,
        "types": [
          "boolean"
        ]
      }
    },
    "events": {},
    "slots": {
      "field": {
        "description": "Replaces the layout's element field. This is the slot used by each element to render their content."
      },
      "label": {
        "description": "Passes its content to the [`ElementLabel`](element-label)'s `default` slot."
      },
      "info": {
        "description": "Passes its content to the [`ElementLabel`](element-label)'s `info` slot. It will only be rendered if `label` is defined as well."
      },
      "description": {
        "description": "Passes its content to the [`ElementDescription`](element-description)'s `default` slot."
      },
      "before": {
        "description": "Passes its content to the [`ElementText`](element-text)'s `default` slot with `type: \"before\"`."
      },
      "between": {
        "description": "Passes its content to the [`ElementText`](element-text)'s `default` slot with `type: \"between\"`."
      },
      "after": {
        "description": "Passes its content to the [`ElementText`](element-text)'s `default` slot with `type: \"after\"`."
      }
    }
  },
  "ElementLayoutInline": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element should be visible."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "props": {},
    "events": {},
    "slots": {
      "field": {
        "description": "Replaces the layout's element field. This is the slot used by each element to render their content."
      },
      "label": {
        "description": "Passes its content to the [`ElementLabel`](element-label)'s `default` slot."
      },
      "info": {
        "description": "Passes its content to the [`ElementLabel`](element-label)'s `info` slot. It will only be rendered if `label` is defined as well."
      },
      "description": {
        "description": "Passes its content to the [`ElementDescription`](element-description)'s `default` slot."
      },
      "before": {
        "description": "Passes its content to the [`ElementText`](element-text)'s `default` slot with `type: \"before\"`."
      },
      "between": {
        "description": "Passes its content to the [`ElementText`](element-text)'s `default` slot with `type: \"between\"`."
      },
      "after": {
        "description": "Passes its content to the [`ElementText`](element-text)'s `default` slot with `type: \"after\"`."
      }
    }
  },
  "ElementLoader": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "ElementMessage": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "message": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first message of the element."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "ElementText": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "content": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The value of the content type."
      },
      "isSlot": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether the contents are provided as a slot."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "props": {
      "type": {
        "required": true,
        "types": [
          "string"
        ]
      }
    },
    "events": {},
    "slots": {
      "default": {
        "description": "Renders the text if the parent element has no [`type`](#option-type) defined as option (`before|between|after`)."
      }
    }
  },
  "FormElements": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the form."
      },
      "schema": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The form schema."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "methods": {
      "component": {
        "public": false,
        "returns": "string",
        "description": "Transforms an element `:type` into the element's component name.",
        "params": {
          "element": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "element `:type`"
          }
        }
      }
    },
    "props": {},
    "events": {},
    "slots": {
      "default": {
        "description": "Renders the elements."
      }
    }
  },
  "FormErrors": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the form."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "Form errors including element errors and the ones added to `messageBag` manually."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "FormLanguage": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "selectedLanguage": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The ISO 639-1 code of the currently selected language (2 letters)."
      },
      "selected": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the current language is the selected one."
      },
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the form."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "methods": {
      "select": {
        "public": true,
        "description": "Select language."
      }
    },
    "props": {
      "language": {
        "required": true,
        "types": [
          "string"
        ]
      },
      "code": {
        "required": true,
        "types": [
          "string"
        ]
      }
    },
    "events": {
      "select": {
        "description": "Triggered when the language is selected by the user.",
        "params": {
          "language": {
            "description": "the selected language",
            "types": [
              "string"
            ]
          }
        }
      }
    },
    "slots": {}
  },
  "FormLanguages": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the form."
      },
      "language": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The ISO 639-1 code of the currently selected language (2 letters)."
      },
      "languages": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The available languages."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "methods": {
      "select": {
        "public": true,
        "returns": "void",
        "description": "Select a language.",
        "params": {
          "code": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "the language code to be selected"
          }
        }
      },
      "handleSelect": {
        "public": false,
        "returns": "void",
        "description": "Handles `select` event.",
        "params": {
          "code": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "the language code to be selected"
          }
        }
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "FormMessages": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the form."
      },
      "messages": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "Form messages including element messages and the ones added to `messageBag` manually."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "FormStep": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "steps$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The parent [`FormSteps`](form-steps) component."
      },
      "elements$": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The components of highest level form elements."
      },
      "children$": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The components of form elements within the step."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the step should be visible."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the step has any invalid elements."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the step has any pending elements."
      },
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the form."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no [`:conditions`](#conditions) or they are fulfilled."
      },
      "baseLabel": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The label definition of the component."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the step has any debouncing elements."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all the elements in the step has been validated."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the step has any busy elements."
      },
      "done": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the step is done (completed, validated has no invalid or pending elements)."
      },
      "step$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The step's component."
      },
      "isLabelComponent": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether label is provided as a Vue component."
      },
      "index": {
        "public": true,
        "types": [
          "number"
        ],
        "description": "Index of this step among the other steps which are not hidden by unmet conditions."
      }
    },
    "data": {
      "active": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the step is active."
      },
      "isDisabled": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the step is disabled."
      },
      "completed": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the step is completed."
      },
      "events": {
        "public": false,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Helper property used to store available events for the element."
      },
      "listeners": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store listeners for events."
      },
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      },
      "stepLabel": {
        "public": true,
        "default": "null",
        "types": [
          "string",
          "component"
        ],
        "description": "The label of the step."
      }
    },
    "methods": {
      "validate": {
        "public": true,
        "returns": "void",
        "description": "Validate all elements within the step (async)."
      },
      "activate": {
        "public": true,
        "returns": "void",
        "description": "Activate the step."
      },
      "deactivate": {
        "public": true,
        "returns": "void",
        "description": "Deactivate the step."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enable the step."
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disable the step."
      },
      "complete": {
        "public": true,
        "returns": "void",
        "description": "Complete the step."
      },
      "uncomplete": {
        "public": true,
        "returns": "void",
        "description": "Uncomplete the step."
      },
      "select": {
        "public": true,
        "returns": "void",
        "description": "Deactivate all other steps and set the current one as active."
      },
      "forwardConditions": {
        "public": false,
        "returns": "void",
        "description": "Apply conditions of the step to its elements."
      },
      "on": {
        "public": true,
        "returns": "void",
        "description": "Adds a listener for an event.",
        "params": {
          "event": {
            "types": [
              "string"
            ],
            "required": false,
            "description": "name of the event to listen for"
          },
          "callback": {
            "types": [
              "function"
            ],
            "required": false,
            "description": "callback to run when the event is triggered"
          }
        }
      },
      "off": {
        "public": true,
        "returns": "void",
        "description": "Removes all listeners for an event.",
        "params": {
          "event": {
            "types": [
              "string"
            ],
            "required": false,
            "description": "name of the event to remove"
          }
        }
      },
      "fire": {
        "public": true,
        "returns": "void",
        "description": "Fires & emits an event.",
        "params": {
          "args": {
            "types": [
              "any"
            ],
            "required": false,
            "description": "list of arguments to pass over to the event callback "
          }
        }
      }
    },
    "props": {
      "name": {
        "required": true,
        "types": [
          "string",
          "number"
        ]
      },
      "label": {
        "required": false,
        "default": null,
        "types": [
          "string",
          "object",
          "function"
        ]
      },
      "labels": {
        "required": false,
        "default": "{}",
        "types": [
          "object"
        ]
      },
      "buttons": {
        "required": false,
        "default": "{}",
        "types": [
          "object"
        ]
      },
      "elements": {
        "required": false,
        "default": "[]",
        "types": [
          "array"
        ]
      },
      "conditions": {
        "required": false,
        "default": "[]",
        "types": [
          "array"
        ]
      },
      "addClass": {
        "required": false,
        "default": null,
        "types": [
          "string",
          "array",
          "object"
        ]
      },
      "onActive": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      },
      "onInactive": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      },
      "onDisable": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      },
      "onEnable": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      }
    },
    "events": {
      "enable": {
        "description": "Triggered when the step becomes enabled."
      },
      "disable": {
        "description": "Triggered when the step becomes disabled."
      },
      "complete": {
        "description": "Triggered when the step becomes [`complete`](#property-complete)."
      }
    },
    "slots": {
      "default": {
        "description": "Replaces the label for the step.",
        "params": {
          "classes": {
            "description": "the step's [classes](#property-classes) object",
            "types": [
              "object"
            ]
          },
          "select": {
            "description": "selects the step if it is not [`disabled`](#property-disabled)",
            "types": [
              "function"
            ]
          },
          "disabled": {
            "description": "whether the step is disabled",
            "types": [
              "boolean"
            ]
          }
        }
      }
    }
  },
  "FormSteps": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "steps": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The form steps definition."
      },
      "elements$": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The components of highest level form elements."
      },
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the form."
      },
      "steps$": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The child [`FormStep`](form-step) components with indexed keys."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether there are any steps in `pending` state."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether there are any steps in `debouncing` state."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether there are any steps in `invalid` state."
      },
      "done": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all the steps are `done`."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether there are any steps in `busy` state."
      },
      "visible$": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "All the visible [`FormStep`](form-step) components."
      },
      "first$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The first visible [`FormStep`](form-step) component."
      },
      "current$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The current [`FormStep`](form-step) component."
      },
      "next$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The next visible [`FormStep`](form-step) component."
      },
      "previous$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The previous visible [`FormStep`](form-step) component."
      },
      "firstInvalid$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The first invalid & visible [`FormStep`](form-step) component."
      },
      "firstNonDone$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The first visible [`FormStep`](form-step) component which is not done yet."
      },
      "lastEnabled$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The last enabled & visible [`FormStep`](form-step) component."
      },
      "isAtLastStep": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the steps is at the last step."
      },
      "isAtFirstStep": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the steps is at the first step."
      }
    },
    "data": {
      "steps$Array": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "The child [`FormStep`](form-step) components."
      },
      "events": {
        "public": false,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Helper property used to store available events for the element."
      },
      "listeners": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store listeners for events."
      },
      "exists": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper prop used for checking if the component exists."
      },
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "methods": {
      "goTo": {
        "public": true,
        "returns": "void",
        "description": "Go to a step and enable it. Optionally enable all steps up to it.",
        "params": {
          "index": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "index of step to go to"
          },
          "enableUntil": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "whether steps should be enabled up to the selected step (default: false)"
          }
        }
      },
      "next": {
        "public": true,
        "returns": "void",
        "description": "Move to next step and enable it."
      },
      "previous": {
        "public": true,
        "returns": "void",
        "description": "Move to previous step."
      },
      "complete": {
        "public": true,
        "returns": "void",
        "description": "Mark each [`FormStep`](form-step) as complete."
      },
      "step$": {
        "public": true,
        "returns": "component",
        "description": "Returns a specific [`FormStep`](form-step) by index.",
        "params": {
          "index": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "index of the step"
          }
        }
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": "Jump back to first visible step and disable all others."
      },
      "enableAllSteps": {
        "public": true,
        "returns": "void",
        "description": "Enable all steps."
      },
      "submit": {
        "public": true,
        "returns": "void",
        "description": "Invokes the form's `submit` event. If the form has any validation errors it will jump to the first step with error."
      },
      "select": {
        "public": false,
        "returns": "void",
        "description": "Select a step.",
        "params": {
          "step$": {
            "types": [
              "component"
            ],
            "required": false,
            "description": "the [`FormStep`](form-step) component to select"
          }
        }
      },
      "enableUntil": {
        "public": true,
        "returns": "void",
        "description": "Enable steps until a certain index.",
        "params": {
          "index": {
            "types": [
              "integer"
            ],
            "required": false,
            "description": "index of the step"
          }
        }
      },
      "enableUntilCurrent": {
        "public": true,
        "returns": "void",
        "description": "Enable all steps up to the current step."
      },
      "enableUntilLastEnabled": {
        "public": true,
        "returns": "void",
        "description": "Enable all steps up to the last enabled."
      },
      "on": {
        "public": true,
        "returns": "void",
        "description": "Adds a listener for an event.",
        "params": {
          "event": {
            "types": [
              "string"
            ],
            "required": false,
            "description": "name of the event to listen for"
          },
          "callback": {
            "types": [
              "function"
            ],
            "required": false,
            "description": "callback to run when the event is triggered"
          }
        }
      },
      "off": {
        "public": true,
        "returns": "void",
        "description": "Removes all listeners for an event.",
        "params": {
          "event": {
            "types": [
              "string"
            ],
            "required": false,
            "description": "name of the event to remove"
          }
        }
      },
      "fire": {
        "public": true,
        "returns": "void",
        "description": "Fires & emits an event.",
        "params": {
          "args": {
            "types": [
              "any"
            ],
            "required": false,
            "description": "list of arguments to pass over to the event callback "
          }
        }
      }
    },
    "props": {},
    "events": {
      "select": {
        "description": "Triggered when a step becomes active.",
        "params": {
          "activeStep$": {
            "description": "the active step",
            "types": [
              "component"
            ]
          },
          "previousStep$": {
            "description": "the previously active step",
            "types": [
              "component"
            ]
          }
        }
      },
      "next": {
        "description": "Triggered when steps to the next step.",
        "params": {
          "activeStep$": {
            "description": "the active step",
            "types": [
              "component"
            ]
          }
        }
      },
      "previous": {
        "description": "Triggered when steps to the previous step.",
        "params": {
          "activeStep$": {
            "description": "the active step",
            "types": [
              "component"
            ]
          }
        }
      },
      "finish": {
        "description": "Triggered when the form finishes, before the last step becomes [`complete`](#property-complete) and the form's [`submit`](laraform#method-submit) method gets called."
      }
    },
    "slots": {
      "default": {
        "description": "Renders the form steps. Must contain a [`FormStep`](#form-step) component for each step."
      }
    }
  },
  "FormStepsControl": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "steps$": {
        "public": false,
        "description": "The [`FormSteps`](form-steps) component."
      },
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the form."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the control should be visible."
      },
      "isDisabled": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the control should be disabled."
      },
      "isLoading": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the control should be in loading state (except for previous)."
      },
      "current$": {
        "public": false,
        "description": "The currently active [`FormStep`](form-step) component."
      },
      "label": {
        "public": true,
        "types": [
          "string",
          "component"
        ],
        "description": "The label of the component. If the label is provided is a `function` this has the resolved value."
      },
      "isLabelComponent": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether label is provided as a Vue component."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "methods": {
      "previous": {
        "public": true,
        "returns": "void",
        "description": "Go to the previous form step."
      },
      "next": {
        "public": true,
        "returns": "void",
        "description": "Complete the current step and go to the next one (async). If the form's `:validateOn` prop or `config.validateOn` contains `'step'` also validate the elements within the step before moving forward (and stay if there's any error)."
      },
      "finish": {
        "public": true,
        "returns": "void",
        "description": "Complete the final step and submit the form (async)."
      },
      "handleClick": {
        "public": false,
        "returns": "void",
        "description": "Handles `click` event."
      }
    },
    "props": {
      "type": {
        "required": true,
        "types": [
          "string"
        ]
      },
      "labels": {
        "required": false,
        "default": true,
        "types": [
          "boolean"
        ]
      }
    },
    "events": {},
    "slots": {
      "default": {
        "description": "Renders the text of the control button."
      }
    }
  },
  "FormStepsControls": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the form."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "props": {
      "labels": {
        "required": false,
        "default": true,
        "types": [
          "boolean"
        ]
      }
    },
    "events": {},
    "slots": {
      "previous": {
        "description": "Renders the text of the previous button in [`FormStepsControl`](form-steps-control) component if [`labels`](#option-labels) does not contain `previous`."
      },
      "next": {
        "description": "Renders the text of the next button in [`FormStepsControl`](form-steps-control) component if [`labels`](#option-labels) does not contain `next`."
      },
      "finish": {
        "description": "Renders the text of the previous button in [`FormStepsControl`](form-steps-control) component if [`labels`](#option-labels) does not contain `finish`."
      }
    }
  },
  "FormTab": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "elements$": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The components of highest level form elements."
      },
      "index": {
        "public": true,
        "types": [
          "number"
        ],
        "description": "Index of this tab among the other tabs which are not hidden by unmet conditions."
      },
      "children$": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The components of form elements within the tab."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the tab should be visible."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the tab has any invalid elements."
      },
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the form."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no [`:conditions`](#conditions) or they are fulfilled."
      },
      "isLabelComponent": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether label is provided as a Vue component."
      },
      "tab$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The tab's component."
      }
    },
    "data": {
      "active": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the tab is active."
      },
      "events": {
        "public": false,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Helper property used to store available events for the element."
      },
      "listeners": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store listeners for events."
      },
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      },
      "tabLabel": {
        "public": true,
        "default": "null",
        "types": [
          "string",
          "component"
        ],
        "description": "The label of the tab."
      }
    },
    "methods": {
      "select": {
        "public": true,
        "returns": "void",
        "description": "Deactivate all other tabs and set the current one as active."
      },
      "activate": {
        "public": true,
        "returns": "void",
        "description": "Activate the tab."
      },
      "deactivate": {
        "public": true,
        "returns": "void",
        "description": "Deactivate the tab."
      },
      "on": {
        "public": true,
        "returns": "void",
        "description": "Adds a listener for an event.",
        "params": {
          "event": {
            "types": [
              "string"
            ],
            "required": false,
            "description": "name of the event to listen for"
          },
          "callback": {
            "types": [
              "function"
            ],
            "required": false,
            "description": "callback to run when the event is triggered"
          }
        }
      },
      "off": {
        "public": true,
        "returns": "void",
        "description": "Removes all listeners for an event.",
        "params": {
          "event": {
            "types": [
              "string"
            ],
            "required": false,
            "description": "name of the event to remove"
          }
        }
      },
      "fire": {
        "public": true,
        "returns": "void",
        "description": "Fires & emits an event.",
        "params": {
          "args": {
            "types": [
              "any"
            ],
            "required": false,
            "description": "list of arguments to pass over to the event callback "
          }
        }
      }
    },
    "props": {
      "name": {
        "required": true,
        "types": [
          "string",
          "number"
        ]
      },
      "label": {
        "required": false,
        "default": null,
        "types": [
          "string",
          "object",
          "function"
        ]
      },
      "elements": {
        "required": false,
        "default": "[]",
        "types": [
          "array"
        ]
      },
      "conditions": {
        "required": false,
        "default": "[]",
        "types": [
          "array"
        ]
      },
      "addClass": {
        "required": false,
        "default": null,
        "types": [
          "string",
          "array",
          "object"
        ]
      },
      "onActive": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      },
      "onInactive": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      }
    },
    "events": {},
    "slots": {
      "default": {
        "description": "Replaces the label for the tab.",
        "params": {
          "classes": {
            "description": "the tab's [classes](#property-classes) object",
            "types": [
              "object"
            ]
          },
          "select": {
            "description": "selects the tab",
            "types": [
              "function"
            ]
          }
        }
      }
    }
  },
  "FormTabs": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "tabs": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The form tabs definition."
      },
      "elements$": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The components of highest level form elements."
      },
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the form."
      },
      "tabs$": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The child [`FormTab`](form-tab) components with indexed keys."
      },
      "visible$": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "All the visible [`FormTab`](form-tab) components."
      },
      "current$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The current [`FormTab`](form-tab) component."
      },
      "first$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The first visible [`FormTab`](form-tab) component."
      },
      "next$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The next visible [`FormTab`](form-tab) component."
      },
      "previous$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The previous visible [`FormTab`](form-tab) component."
      }
    },
    "data": {
      "tabs$Array": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "The child [`FormTab`](form-tab) components."
      },
      "events": {
        "public": false,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Helper property used to store available events for the element."
      },
      "listeners": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store listeners for events."
      },
      "exists": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper prop used for checking if the component exists."
      },
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "methods": {
      "goTo": {
        "public": true,
        "returns": "void",
        "description": "Go to a tab.",
        "params": {
          "index": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "index of tab to go to"
          }
        }
      },
      "select": {
        "public": false,
        "returns": "void",
        "description": "Select a tab.",
        "params": {
          "tab$": {
            "types": [
              "component"
            ],
            "required": false,
            "description": "the [`FormTab`](form-tab) component to select"
          }
        }
      },
      "tab$": {
        "public": true,
        "returns": "component",
        "description": "Returns a specific [`FormTab`](form-tab) by index.",
        "params": {
          "index": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "index of the tab"
          }
        }
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": "Jump back to the first visible tab."
      },
      "on": {
        "public": true,
        "returns": "void",
        "description": "Adds a listener for an event.",
        "params": {
          "event": {
            "types": [
              "string"
            ],
            "required": false,
            "description": "name of the event to listen for"
          },
          "callback": {
            "types": [
              "function"
            ],
            "required": false,
            "description": "callback to run when the event is triggered"
          }
        }
      },
      "off": {
        "public": true,
        "returns": "void",
        "description": "Removes all listeners for an event.",
        "params": {
          "event": {
            "types": [
              "string"
            ],
            "required": false,
            "description": "name of the event to remove"
          }
        }
      },
      "fire": {
        "public": true,
        "returns": "void",
        "description": "Fires & emits an event.",
        "params": {
          "args": {
            "types": [
              "any"
            ],
            "required": false,
            "description": "list of arguments to pass over to the event callback "
          }
        }
      }
    },
    "props": {},
    "events": {
      "select": {
        "description": "Triggered when a tab becomes active.",
        "params": {
          "activeTab$": {
            "description": "the active tab",
            "types": [
              "component"
            ]
          },
          "previousTab$": {
            "description": "the previously active tab",
            "types": [
              "component"
            ]
          }
        }
      }
    },
    "slots": {
      "default": {
        "description": "Renders the form tabs. Must contain a [`FormTab`](#form-tab) component for each tab."
      }
    }
  },
  "Laraform": {
    "data": {
      "tabs$": {
        "public": false,
        "types": [
          "component"
        ],
        "description": "The FormTabs component."
      },
      "steps$": {
        "public": false,
        "types": [
          "component"
        ],
        "description": "The FormSteps component."
      },
      "elements$": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "The components of highest level form elements."
      },
      "validation": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Enables validation for the form globally."
      },
      "messageBag": {
        "public": true,
        "default": "MessageBag",
        "types": [
          "MessageBag"
        ],
        "description": "Instance of MessageBag service."
      },
      "selectedLanguage": {
        "public": true,
        "default": "config.language",
        "types": [
          "string"
        ],
        "description": "The ISO 639-1 code of the currently selected language (2 letters)."
      },
      "submitting": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the form is currently submitting."
      },
      "preparing": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the form is currently preparing the elements for submit."
      },
      "events": {
        "public": false,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Helper property used to store available events for the element."
      },
      "listeners": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store listeners for events."
      },
      "internalData": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "The internal store for the form's model."
      },
      "intermediaryValue": {
        "public": false,
        "description": ""
      },
      "userConfig": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "The configuration object of the user when using SFC mode. Basically the value of the component's `data.vueform` object."
      }
    },
    "computed": {
      "options": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "Form options merged from config, component props & the component's `data.vueform` options."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The form data including all the elements even if they have unmet conditions."
      },
      "requestData": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The form data excluding elements with `available: false`. This one gets submitted."
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form has any dirty elements."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form has any invalid elements."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form has any debouncing elements."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form has any pending elements."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether each element of the form has been validated."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form has any busy elements or [`:loading`](#loading) is `true` or in [`preparing`](#preparing) or [`submitting`](#submitting) state."
      },
      "formErrors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "Form errors including element errors and the ones added to [`messageBag`](#messagebag) manually."
      },
      "formMessages": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "Form messages including element messages and the ones added to [`messageBag`](#messagebag) manually."
      },
      "isDisabled": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether submitting the form is disabled. Returns `true` if:<br>* the form has any invalid elements and `:validateOn` contains `'change'`<br>* the form is [`busy`](#busy)<br>* manually disabled with [`:disabled`](#disabled) prop"
      },
      "isLoading": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether submitting the form is in loading state. Can be enabled with [`:loading`](#loading) prop."
      },
      "shouldValidateOnChange": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether the `:validateOn` prop or `config.validateOn` contains `'change'`."
      },
      "shouldValidateOnStep": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether the `:validateOn` prop or `config.validateOn` contains `'step'`."
      },
      "hasSteps": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether the form has any steps."
      },
      "hasTabs": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form has any tabs."
      },
      "hasErrors": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form has any errors."
      },
      "hasMessages": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form has anymessages."
      },
      "isMultilingual": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form is multilingual and should show [`FormLanguages`](form-languages) component."
      },
      "showErrors": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form should display errors above the form with [`FormErrors`](form-errors) component. Can be disabled by [`:displayErrors`](#displayerrors) or in `config.displayErrros`."
      },
      "showMessages": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form should display messages above the form with [`FormMessages`](form-messages) component. Can be disabled by [`:displayMessages`](#displaymessages) or in `config.displayMessages`."
      },
      "showLanguages": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form should show langauge selectors."
      },
      "showSteps": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form should show [`FormSteps`](form-steps) component. Returns `true` if [`:steps`](#steps) has a value."
      },
      "showTabs": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form should show [`FormTabs`](form-tabs) component. Returns `true` if [`:tabs`](#tabs) has a value."
      },
      "showStepsControls": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form should display steps controls below form with [`FormStepsControls`](form-steps-control) component when it has [`:steps`](#steps). Can be disabled by [`:stepsControls`](#stepscontrols) or in `config.stepsControls`."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the form's outermost DOM."
      },
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the form defined by theme."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The selected theme's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides. Normally we use `classes` property for this, but as Vueform component needs to have an actual [`:classes`](#classes) prop so we use this naming instead."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The selected theme's templates, extended by local overrides. Normally we use `components` property for this, but as Vueform component needs to have an actual [`:components`](#components) prop so we use this naming instead."
      },
      "extendedTheme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The selected theme, extended by local overrides. Normally we use `theme` property for this, but as Vueform component needs to have an actual [`:theme`](#theme) prop so we use this naming instead."
      },
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The form's component (self)."
      },
      "model": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The form's model, which either comes from `externalValue` or `internalData`."
      },
      "isSync": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether form data should be synced when the external value changes (when external value is used)."
      }
    },
    "methods": {
      "updateModel": {
        "public": false,
        "returns": "void",
        "description": "Updates an element's data in the form model.",
        "params": {
          "dataPath": {
            "types": [
              "string"
            ],
            "required": false,
            "description": "the `dataPath` property of the element to update"
          },
          "val": {
            "types": [
              "any"
            ],
            "required": false,
            "description": "value to update with"
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "Updates the form data. Can be used to update a single element by providing the element's `path` as second option.",
        "params": {
          "data": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "data to update with"
          },
          "path": {
            "types": [
              "object"
            ],
            "required": false,
            "description": "the `path` of the element to update (default: `null`)"
          }
        }
      },
      "load": {
        "public": true,
        "returns": "void",
        "description": "Loads data to the form using optional [`:formatLoad`](#format-load) formatter.",
        "params": {
          "value": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "the value to be loaded"
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "whether the loaded value should be formatted with [`:formatLoad`](#format-load) (default: `false`)"
          }
        }
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": "Resets the form's data to default state. Also resets all the validation state for the elements."
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": "Clears the forms data."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Sets all elements' `dirty` to `false`."
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": "Validates all elements (async)."
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Sets all element validators to default state."
      },
      "convertFormData": {
        "public": true,
        "returns": "FormData",
        "description": "Converts form data to [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData).",
        "params": {
          "data": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "the data to be converted"
          }
        }
      },
      "submit": {
        "public": true,
        "returns": "void",
        "description": "Validates and prepares elements then submits the form (async)."
      },
      "send": {
        "public": true,
        "returns": "void",
        "description": "Sends form data to [`:endpoint`](#endpoint) with the selected [`method`](#method) (async)."
      },
      "disableValidation": {
        "public": true,
        "returns": "void",
        "description": "Disabled form validation globally."
      },
      "enableValidation": {
        "public": true,
        "returns": "void",
        "description": "Enables form validation globally."
      },
      "setLanguage": {
        "public": true,
        "returns": "void",
        "description": "Sets current language when using [`:multilingual`](#multilingual).",
        "params": {
          "code": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "the language code to be selected"
          }
        }
      },
      "handleSubmit": {
        "public": true,
        "returns": "void",
        "description": "Handles `submit` event."
      },
      "el$": {
        "public": true,
        "returns": "component|null",
        "description": "Returns an element by its path.",
        "params": {
          "path": {
            "types": [
              "string"
            ],
            "required": false,
            "description": "path of the element"
          }
        }
      },
      "siblings$": {
        "public": true,
        "returns": "void",
        "description": "Returns the siblings of an element.",
        "params": {
          "path": {
            "types": [
              "string"
            ],
            "required": false,
            "description": "path of the element"
          }
        }
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Inits MessageBag service."
      },
      "fire": {
        "public": true,
        "returns": "void",
        "description": "Fires & emits an event.",
        "params": {
          "args": {
            "types": [
              "any"
            ],
            "required": false,
            "description": "list of arguments to pass over to the event callback "
          }
        }
      },
      "on": {
        "public": true,
        "returns": "void",
        "description": "Adds a listener for an event.",
        "params": {
          "event": {
            "types": [
              "string"
            ],
            "required": false,
            "description": "name of the event to listen for"
          },
          "callback": {
            "types": [
              "function"
            ],
            "required": false,
            "description": "callback to run when the event is triggered"
          }
        }
      },
      "off": {
        "public": true,
        "returns": "void",
        "description": "Removes all listeners for an event.",
        "params": {
          "event": {
            "types": [
              "string"
            ],
            "required": false,
            "description": "name of the event to remove"
          }
        }
      }
    },
    "props": {
      "value": {
        "required": false,
        "types": [
          "object"
        ]
      },
      "modelValue": {
        "required": false,
        "types": [
          "object"
        ]
      },
      "sync": {
        "required": false,
        "default": false,
        "types": [
          "boolean"
        ]
      },
      "default": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "disabled": {
        "required": false,
        "default": null,
        "types": [
          "boolean"
        ]
      },
      "loading": {
        "required": false,
        "default": null,
        "types": [
          "boolean"
        ]
      },
      "schema": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "tabs": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "steps": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "replaceClasses": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "extendClasses": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "replaceTemplates": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "messages": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "columns": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "languages": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "addClass": {
        "required": false,
        "default": null,
        "types": [
          "string",
          "array",
          "object"
        ]
      },
      "formKey": {
        "required": false,
        "default": null,
        "types": [
          "string",
          "number"
        ]
      },
      "theme": {
        "required": false,
        "default": null,
        "types": [
          "string"
        ]
      },
      "endpoint": {
        "required": false,
        "default": null,
        "types": [
          "string"
        ]
      },
      "method": {
        "required": false,
        "default": null,
        "types": [
          "string"
        ]
      },
      "formData": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ]
      },
      "language": {
        "required": false,
        "default": null,
        "types": [
          "string"
        ]
      },
      "validateOn": {
        "required": false,
        "default": null,
        "types": [
          "string"
        ]
      },
      "forceLabels": {
        "required": false,
        "default": null,
        "types": [
          "boolean"
        ]
      },
      "floatPlaceholders": {
        "required": false,
        "default": null,
        "types": [
          "boolean"
        ]
      },
      "multilingual": {
        "required": false,
        "default": null,
        "types": [
          "boolean"
        ]
      },
      "stepsControls": {
        "required": false,
        "default": true,
        "types": [
          "boolean"
        ]
      },
      "displayErrors": {
        "required": false,
        "default": null,
        "types": [
          "boolean"
        ]
      },
      "displayMessages": {
        "required": false,
        "default": null,
        "types": [
          "boolean"
        ]
      },
      "formatLoad": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ]
      },
      "formatData": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ]
      },
      "prepare": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ]
      },
      "onChange": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      },
      "onReset": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      },
      "onClear": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      },
      "onSubmit": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      },
      "onSuccess": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      },
      "onError": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      },
      "onLanguage": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      },
      "onBeforeMount": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      },
      "onMounted": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      },
      "onBeforeUpdate": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      },
      "onUpdated": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      },
      "onBeforeUnmount": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      },
      "onUnmounted": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      }
    },
    "events": {
      "input": {
        "description": "Emitted when the form's data is changed (used by `v-model` in Vue 2).",
        "params": {
          "data": {
            "description": "the form's data after the change",
            "types": [
              "object"
            ]
          }
        }
      },
      "change": {
        "description": "Triggered when the form's data is changed (intended for watching data changes).",
        "params": {
          "newData": {
            "description": "the form's data after the change",
            "types": [
              "object"
            ]
          },
          "oldData": {
            "description": "the form's data before the change",
            "types": [
              "object"
            ]
          }
        }
      },
      "reset": {
        "description": "Triggered when the form is reseted using [`reset()`](#method-reset)."
      },
      "clear": {
        "description": "Triggered when the form is cleared using [`clear()`](#method-clear)."
      },
      "submit": {
        "description": "Triggered when the form is being submitted, after validation is checked and elements are prepared.",
        "params": {
          "form$": {
            "description": "the form's component",
            "types": [
              "component"
            ]
          }
        }
      },
      "success": {
        "description": "Triggered when the server returns with 2XX response code after submitting the form.",
        "params": {
          "response": {
            "description": "the Response object",
            "types": [
              "Response"
            ]
          }
        }
      },
      "error": {
        "description": "Triggered when an error is thrown when preparing elements or submitting the form.",
        "params": {
          "state": {
            "description": "the stage the error was thrown: `\"prepare|submit\"`",
            "types": [
              "string"
            ]
          },
          "error": {
            "description": "the Error object",
            "types": [
              "Error"
            ]
          }
        }
      },
      "language": {
        "description": "Triggered when a language is selected",
        "params": {
          "language": {
            "description": "the selected language",
            "types": [
              "string"
            ]
          }
        }
      }
    },
    "slots": {
      "default": {
        "description": "Renders the elements of the form in [`FormElements`](#form-elements) component, while keeping all the other form components. Should only contain elements and custom tags."
      },
      "empty": {
        "description": "Renders the content of the form. Removes all other form components. Can contain elements or form components including steps, tabs and language selector."
      }
    }
  },
  "DatepickerWrapper": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "config": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The flatpickr configuration object. Can be extended via [`:options`](#options) with [flatpickr options](https://flatpickr.js.org/options/)."
      },
      "mode": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The current `options.mode`."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      },
      "datepicker$": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "The [flatpickr instance](https://flatpickr.js.org/instance-methods-properties-elements)."
      },
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": "The date input DOM element."
      }
    },
    "methods": {
      "update": {
        "public": false,
        "returns": "void",
        "description": "Emits `change` event.",
        "params": {
          "value": {
            "types": [
              "array",
              "Date"
            ],
            "required": true,
            "description": "the value to emit with change"
          }
        }
      }
    },
    "props": {
      "value": {
        "required": true,
        "types": [
          "any"
        ]
      },
      "options": {
        "required": true,
        "types": [
          "object"
        ]
      },
      "id": {
        "required": true,
        "types": [
          "number",
          "string"
        ]
      },
      "placeholder": {
        "required": false,
        "types": [
          "number",
          "string"
        ]
      }
    },
    "events": {},
    "slots": {}
  },
  "EditorWrapper": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      }
    },
    "data": {
      "editor$": {
        "public": true,
        "default": "null",
        "types": [
          "HTMLElement"
        ],
        "description": "The [`Editor`](https://github.com/basecamp/trix) DOM instance."
      }
    },
    "methods": {
      "update": {
        "public": true,
        "returns": "void",
        "description": "Updates the value of editor.",
        "params": {
          "value": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "the value to update with"
          }
        }
      },
      "setOption": {
        "public": true,
        "returns": "void",
        "description": "Sets an option for editor.",
        "params": {
          "key": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "the option key"
          },
          "value": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "the option value"
          }
        }
      },
      "handleChange": {
        "public": false,
        "returns": "void",
        "description": "Handles `change` event."
      },
      "handleFileAccept": {
        "public": false,
        "returns": "void",
        "description": "Handles `fileAccept` event.",
        "params": {
          "e": {
            "types": [
              "Event"
            ],
            "required": false,
            "description": "event"
          }
        }
      },
      "handleAttachmentAdd": {
        "public": false,
        "returns": "void",
        "description": "Handles `attachmentAdd` event.",
        "params": {
          "e": {
            "types": [
              "Event"
            ],
            "required": false,
            "description": "event"
          }
        }
      }
    },
    "props": {
      "value": {
        "required": false,
        "default": null,
        "types": [
          "any"
        ]
      },
      "placeholder": {
        "required": false,
        "default": null,
        "types": [
          "string",
          "number"
        ]
      },
      "name": {
        "required": false,
        "default": null,
        "types": [
          "string",
          "number"
        ]
      },
      "id": {
        "required": false,
        "default": null,
        "types": [
          "string",
          "number"
        ]
      },
      "accept": {
        "required": false,
        "default": "[]",
        "types": [
          "array"
        ]
      },
      "acceptMimes": {
        "required": false,
        "default": "[]",
        "types": [
          "array"
        ]
      },
      "endpoint": {
        "required": false,
        "default": null,
        "types": [
          "string"
        ]
      },
      "method": {
        "required": false,
        "default": "post",
        "types": [
          "string"
        ]
      },
      "disabled": {
        "required": false,
        "default": false,
        "types": [
          "boolean"
        ]
      }
    },
    "events": {
      "input": {
        "description": "Triggered when the editor's value is changed.",
        "params": {
          "value": {
            "description": "the new value of the element contained in an object: `value.target.value`",
            "types": [
              "object"
            ]
          }
        }
      },
      "alert": {
        "description": "Triggered when the user select a file/mime type that is not allowed.",
        "params": {
          "message": {
            "description": "the alert message",
            "types": [
              "string"
            ]
          }
        }
      }
    },
    "slots": {}
  },
  "CheckboxgroupCheckbox": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "isDisabled": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the checkbox should be disabled."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "props": {
      "item": {
        "required": true,
        "types": [
          "object",
          "string"
        ]
      },
      "value": {
        "required": true,
        "types": [
          "string",
          "number"
        ]
      }
    },
    "events": {},
    "slots": {}
  },
  "FilePreview": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the preview component should be visible."
      },
      "hasLink": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the file has link and should be clickable."
      },
      "hasError": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the preview has upload error."
      },
      "link": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The link for the file."
      },
      "filename": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The filename to display."
      },
      "clickable": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the file should be clickable if it is already uploaded."
      },
      "uploaded": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the temporary or final file is uploaded."
      },
      "uploading": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the file is currently uploading."
      },
      "progress": {
        "public": true,
        "types": [
          "number"
        ],
        "description": "The percentage of progress when the file is being temporarily uploaded (0-100)."
      },
      "canRemove": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the file can be removed."
      },
      "canUploadTemp": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether temporary file can be uploaded."
      },
      "uploadText": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The text for upload button. Can be changed at the locale file: `laraform.elements.file.upload`"
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "methods": {
      "upload": {
        "public": true,
        "returns": "void",
        "description": "Upload the currently selected file as temporary."
      },
      "remove": {
        "public": true,
        "returns": "void",
        "description": "Remove the file."
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "GalleryPreview": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the preview component should be visible."
      },
      "hasLink": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the file has link and should be clickable."
      },
      "hasError": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the preview has upload error."
      },
      "link": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The link for the file."
      },
      "filename": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The filename to display."
      },
      "clickable": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the file should be clickable if it is already uploaded."
      },
      "preview": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The image's preview. Equals to the `link` if the file is already uploaded and `base64` if only selected or temporarily uploaded."
      },
      "uploaded": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the temporary or final file is uploaded."
      },
      "uploading": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the file is currently uploading."
      },
      "progress": {
        "public": true,
        "types": [
          "number"
        ],
        "description": "The percentage of progress when the file is being temporarily uploaded (0-100)."
      },
      "canRemove": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the file can be removed."
      },
      "canUploadTemp": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether temporary file can be uploaded."
      },
      "uploadText": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The text for upload button. Can be changed at the locale file: `laraform.elements.file.upload`"
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "methods": {
      "upload": {
        "public": true,
        "returns": "void",
        "description": "Upload the currently selected file as temporary."
      },
      "remove": {
        "public": true,
        "returns": "void",
        "description": "Remove the file."
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "ImagePreview": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the preview component should be visible."
      },
      "hasLink": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the file has link and should be clickable."
      },
      "hasError": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the preview has upload error."
      },
      "link": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The link for the file."
      },
      "filename": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The filename to display."
      },
      "clickable": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the file should be clickable if it is already uploaded."
      },
      "preview": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The image's preview. Equals to the `link` if the file is already uploaded and `base64` if only selected or temporarily uploaded."
      },
      "uploaded": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the temporary or final file is uploaded."
      },
      "uploading": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the file is currently uploading."
      },
      "progress": {
        "public": true,
        "types": [
          "number"
        ],
        "description": "The percentage of progress when the file is being temporarily uploaded (0-100)."
      },
      "canRemove": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the file can be removed."
      },
      "canUploadTemp": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether temporary file can be uploaded."
      },
      "uploadText": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The text for upload button. Can be changed at the locale file: `laraform.elements.file.upload`"
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "methods": {
      "upload": {
        "public": true,
        "returns": "void",
        "description": "Upload the currently selected file as temporary."
      },
      "remove": {
        "public": true,
        "returns": "void",
        "description": "Remove the file."
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "RadiogroupRadio": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "The root form component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default components and classes."
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "mainClass": {
        "public": false,
        "types": [
          "string"
        ],
        "description": "The class name of the components's outermost DOM."
      },
      "templates": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "isDisabled": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the radio should be disabled."
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default classes for the component defined by theme."
      }
    },
    "props": {
      "item": {
        "required": true,
        "types": [
          "object",
          "string"
        ]
      },
      "value": {
        "required": true,
        "types": [
          "string",
          "number"
        ]
      }
    },
    "events": {},
    "slots": {}
  }
}