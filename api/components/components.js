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
      "components": {
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
        "public": false,
        "description": ""
      },
      "area": {
        "public": false,
        "description": ""
      }
    },
    "methods": {
      "handleClick": {
        "public": false,
        "description": ""
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
        "description": ""
      },
      "drop": {
        "description": "",
        "params": {
          "e": {
            "description": "",
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
      "components": {
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
        "public": false,
        "description": ""
      },
      "isAddonComponent": {
        "public": false,
        "description": ""
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
    "slots": {}
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
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "description": {
        "public": false,
        "description": ""
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
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "error": {
        "public": false,
        "description": ""
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
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "info": {
        "public": false,
        "description": ""
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
      "components": {
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
        "description": "The label of the component. If the label is provided is a `function` this will always have the resolved value."
      },
      "isLabelComponent": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether label is provided as a Vue component."
      },
      "name": {
        "public": true,
        "types": [
          "string"
        ],
        "description": ""
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
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "floating": {
        "public": false,
        "description": ""
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
      "components": {
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
        "public": false,
        "description": ""
      },
      "hasLabel": {
        "public": false,
        "description": ""
      },
      "info": {
        "public": false,
        "description": ""
      },
      "before": {
        "public": false,
        "description": ""
      },
      "between": {
        "public": false,
        "description": ""
      },
      "after": {
        "public": false,
        "description": ""
      },
      "description": {
        "public": false,
        "description": ""
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
      "label": {
        "description": "Label slot"
      },
      "before": {
        "description": "Before slot"
      },
      "field": {
        "description": "Field slot"
      },
      "between": {
        "description": "Between slot"
      },
      "description": {
        "description": "Description slot"
      },
      "error": {
        "description": "Error slot"
      },
      "message": {
        "description": "Message slot"
      },
      "after": {
        "description": "After slot"
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
      "components": {
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
      "hasLabel": {
        "public": false,
        "description": ""
      },
      "visible": {
        "public": false,
        "description": ""
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
      "components": {
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
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "message": {
        "public": false,
        "description": ""
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
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "content": {
        "public": false,
        "description": ""
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
    "slots": {}
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
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the form."
      },
      "schema": {
        "public": false,
        "description": ""
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
    "slots": {}
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
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the form."
      },
      "errors": {
        "public": false,
        "description": ""
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
        "public": false,
        "description": ""
      },
      "selected": {
        "public": false,
        "description": ""
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
      "components": {
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
        "public": false,
        "description": ""
      }
    },
    "props": {
      "language": {
        "required": true,
        "types": [
          "object"
        ]
      },
      "code": {
        "required": true,
        "types": [
          "string"
        ]
      }
    },
    "events": {},
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
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the form."
      },
      "language": {
        "public": false,
        "description": ""
      },
      "languages": {
        "public": false,
        "description": ""
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
        "public": false,
        "description": ""
      },
      "handleSelect": {
        "public": false,
        "description": ""
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
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the form."
      },
      "messages": {
        "public": false,
        "description": ""
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
        "public": false,
        "description": ""
      },
      "elements$": {
        "public": false,
        "description": ""
      },
      "children$": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components of elements within the step."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines whether the step is visible."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines whether the step has any invalid elements."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines whether the step has any pending elements."
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
      "components": {
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
        "description": "Base label of step."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines whether the step has any debouncing elements."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines whether all the elements in the step has been validated."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines whether the step has any busy elements."
      },
      "done": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines whether the step is done (complete, validated has no invalid or pending elements)."
      },
      "step$": {
        "public": false,
        "description": ""
      },
      "isLabelComponent": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether label is provided as a Vue component."
      },
      "index": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "active": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Determines whether the step is active."
      },
      "disabled": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Determines whether the step is disabled."
      },
      "completed": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Determines whether the step is completed."
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
        "public": false,
        "description": ""
      }
    },
    "methods": {
      "validate": {
        "public": true,
        "returns": "void",
        "description": "Validate the elements within the step."
      },
      "activate": {
        "public": true,
        "returns": "void",
        "description": "Activates the step."
      },
      "deactivate": {
        "public": true,
        "returns": "void",
        "description": "Deactivates the step."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the step."
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disables the step."
      },
      "complete": {
        "public": true,
        "returns": "void",
        "description": "Completes the step."
      },
      "uncomplete": {
        "public": true,
        "returns": "void",
        "description": "Uncompletes the step."
      },
      "select": {
        "public": true,
        "returns": "void",
        "description": "Selects the step to become the active step."
      },
      "forwardConditions": {
        "public": false,
        "returns": "void",
        "description": "Apply conditions of the step to the elements within."
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
      "stepClass": {
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
        ]
      },
      "onInactive": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ]
      },
      "onDisable": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ]
      },
      "onEnable": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ]
      }
    },
    "events": {},
    "slots": {}
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
        "public": false,
        "description": ""
      },
      "elements$": {
        "public": false,
        "description": ""
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
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the form."
      },
      "steps$": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Object of stepsStep$ components."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines whether the steps has any pending elements."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines whether the steps has any debouncing elements."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines whether the steps has any invalid elements."
      },
      "done": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines whether all the steps are completetly filled out."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines whether the steps has any pending or debouncing elements."
      },
      "visible$": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the visible [stepsStep$](reference/frontend-steps-step) components."
      },
      "first$": {
        "public": true,
        "types": [
          [
            "component",
            "FormStep"
          ]
        ],
        "description": "Returns the first [stepsStep$](reference/frontend-steps-step) component."
      },
      "current$": {
        "public": true,
        "types": [
          [
            "component",
            "FormStep"
          ]
        ],
        "description": "Returns the current [stepsStep$](reference/frontend-steps-step) component."
      },
      "next$": {
        "public": true,
        "types": [
          [
            "component",
            "FormStep"
          ]
        ],
        "description": "Returns the next [stepsStep$](reference/frontend-steps-step) component."
      },
      "previous$": {
        "public": true,
        "types": [
          [
            "component",
            "FormStep"
          ]
        ],
        "description": "Returns the previous [stepsStep$](reference/frontend-steps-step) component."
      },
      "firstInvalid$": {
        "public": true,
        "types": [
          [
            "component",
            "FormStep"
          ]
        ],
        "description": "Returns the first invalid [stepsStep$](reference/frontend-steps-step) component."
      },
      "firstNonDone$": {
        "public": true,
        "types": [
          [
            "component",
            "FormStep"
          ]
        ],
        "description": "Returns the first [stepsStep$](reference/frontend-steps-step) component which is not done yet."
      },
      "lastEnabled$": {
        "public": true,
        "types": [
          [
            "component",
            "FormStep"
          ]
        ],
        "description": "Returns the last enabled [stepsStep$](reference/frontend-steps-step) component."
      },
      "isAtLastStep": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines whether the steps is at the last step."
      },
      "isAtFirstStep": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines whether the steps is at the first step."
      }
    },
    "data": {
      "steps$Array": {
        "public": false,
        "description": ""
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
        "public": false,
        "description": ""
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
        "description": "Moves to a step. If it is disabled, enables it.",
        "params": {
          "step": {
            "types": [
              "object"
            ],
            "required": false,
            "description": "key of step in [steps](reference/frontend-form#prop-steps)"
          },
          "enableUntil": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "whether steps should be enabled before destination step (default: false)"
          }
        }
      },
      "next": {
        "public": true,
        "returns": "void",
        "description": "Moves to next step and enables it."
      },
      "previous": {
        "public": true,
        "returns": "void",
        "description": "Moves to previous step."
      },
      "complete": {
        "public": true,
        "returns": "void",
        "description": "Marks each [stepsStep$](reference/frontend-steps-step) as complete."
      },
      "step$": {
        "public": true,
        "returns": [
          [
            "component",
            "FormStep"
          ]
        ],
        "description": "Returns a specific [stepsStep$](reference/frontend-steps-step).",
        "params": {
          "step": {
            "types": [
              "object"
            ],
            "required": false,
            "description": "key of step in [steps](reference/frontend-form#prop-steps)"
          }
        }
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": "Resets form and goes back to first step while disabling all others."
      },
      "enableAllSteps": {
        "public": true,
        "returns": "void",
        "description": "Enables all steps."
      },
      "submit": {
        "public": true,
        "returns": "void",
        "description": "Emits submit event."
      },
      "select": {
        "public": true,
        "description": "Triggered when a step is selected.",
        "params": {
          "step$": {
            "types": [
              "object"
            ],
            "required": false,
            "description": "the selected step component"
          }
        }
      },
      "enableUntil": {
        "public": false,
        "returns": "void",
        "description": "Enable steps until a certain index.",
        "params": {
          "index": {
            "types": [
              "integer"
            ],
            "required": false,
            "description": "index of step"
          }
        }
      },
      "enableUntilCurrent": {
        "public": false,
        "returns": "void",
        "description": "Enable steps until current step."
      },
      "enableUntilLastEnabled": {
        "public": false,
        "returns": "void",
        "description": "Enable steps until last enabled."
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
    "events": {},
    "slots": {}
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
        "description": ""
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
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the form."
      },
      "visible": {
        "public": false,
        "description": ""
      },
      "disabled": {
        "public": false,
        "description": ""
      },
      "loading": {
        "public": false,
        "description": ""
      },
      "current$": {
        "public": false,
        "description": ""
      },
      "label": {
        "public": true,
        "types": [
          "string",
          "component"
        ],
        "description": "The label of the component. If the label is provided is a `function` this will always have the resolved value."
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
        "public": false,
        "description": ""
      },
      "next": {
        "public": false,
        "description": ""
      },
      "finish": {
        "public": false,
        "description": ""
      },
      "handleClick": {
        "public": false,
        "description": ""
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
    "slots": {}
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
      "components": {
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
    "slots": {}
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
        "public": false,
        "description": ""
      },
      "index": {
        "public": false,
        "description": ""
      },
      "children$": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components of elements within the tab."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines whether the tab is visible."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines whether the tab has any invalid elements."
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
      "components": {
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
        "public": false,
        "description": ""
      }
    },
    "data": {
      "active": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Determines whether the tab is active."
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
        "public": false,
        "description": ""
      }
    },
    "methods": {
      "select": {
        "public": true,
        "returns": "void",
        "description": "Selects the tab to become the active tab."
      },
      "activate": {
        "public": true,
        "returns": "void",
        "description": "Activates the tab."
      },
      "deactivate": {
        "public": true,
        "returns": "void",
        "description": "Deactivates the step."
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
      "tabClass": {
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
        ]
      },
      "onInactive": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ]
      }
    },
    "events": {},
    "slots": {}
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
        "public": false,
        "description": ""
      },
      "elements$": {
        "public": false,
        "description": ""
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
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the form."
      },
      "tabs$": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Object of tab$ components."
      },
      "visible$": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the visible [tab$](reference/frontend-tab) components."
      },
      "current$": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the current [tab$](reference/frontend-tab) components."
      },
      "first$": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the first [tab$](reference/frontend-tab) components."
      },
      "next$": {
        "public": true,
        "types": [
          [
            "component",
            "FormTab"
          ]
        ],
        "description": "Returns the next [tab$](reference/frontend-tab) component."
      },
      "previous$": {
        "public": true,
        "types": [
          [
            "component",
            "FormTab"
          ]
        ],
        "description": "Returns the previous [tabs$](reference/frontend-tab) component."
      }
    },
    "data": {
      "tabs$Array": {
        "public": false,
        "description": ""
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
        "public": false,
        "description": ""
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
        "description": "Moves to a tab.",
        "params": {
          "tab": {
            "types": [
              "object"
            ],
            "required": false,
            "description": "key of tab in [tabs](reference/frontend-form#prop-tabs)"
          }
        }
      },
      "select": {
        "public": false,
        "returns": "void",
        "description": "Selects a tab.",
        "params": {
          "tab$": {
            "types": [
              "object"
            ],
            "required": false,
            "description": "selected tab component"
          }
        }
      },
      "tab$": {
        "public": true,
        "returns": [
          [
            "component",
            "FormTab"
          ]
        ],
        "description": "Returns a specific [tab$](reference/frontend-tab).",
        "params": {
          "tab": {
            "types": [
              "object"
            ],
            "required": false,
            "description": "key of tab in [tabs](reference/frontend-form#prop-tabs) object"
          }
        }
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": "Reset tabs, meaning selecting [first$](#prop-first) tab."
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
    "events": {},
    "slots": {}
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
      "output": {
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
      "extendedClasses": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The selected theme's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides. Normally we use `classes` property for this, but as Vueform component needs to have an actual [`:classes`](#classes) prop so we use this naming instead."
      },
      "extendedComponents": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The selected theme's components, extended by local overrides. Normally we use `components` property for this, but as Vueform component needs to have an actual [`:components`](#components) prop so we use this naming instead."
      },
      "selectedTheme": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The theme object of the selected theme."
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
      "overrideClasses": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "addClasses": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "components": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "elements": {
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
      "labels": {
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
        "default": null,
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
      }
    },
    "events": {},
    "slots": {}
  },
  "FlatpickrWrapper": {
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
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "config": {
        "public": false,
        "description": ""
      },
      "mode": {
        "public": false,
        "description": ""
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
      "flatpickr$": {
        "public": false,
        "description": ""
      },
      "input": {
        "public": false,
        "description": ""
      }
    },
    "methods": {
      "update": {
        "public": false,
        "description": ""
      }
    },
    "props": {
      "value": {
        "required": true,
        "types": [
          "any"
        ]
      },
      "modelValue": {
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
  "TrixWrapper": {
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
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      }
    },
    "data": {
      "trix$": {
        "public": false,
        "description": ""
      }
    },
    "methods": {
      "update": {
        "public": false,
        "description": ""
      },
      "setOption": {
        "public": false,
        "description": ""
      },
      "handleChange": {
        "public": false,
        "description": ""
      },
      "handleFileAccept": {
        "public": false,
        "description": ""
      },
      "handleAttachmentAdd": {
        "public": false,
        "description": ""
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
      "disabled": {
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
  "CheckboxgroupSlotCheckbox": {
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
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "isDisabled": {
        "public": false,
        "description": ""
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
          "any"
        ]
      },
      "value": {
        "required": true,
        "types": [
          "any"
        ]
      }
    },
    "events": {},
    "slots": {}
  },
  "FileSlotFilePreview": {
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
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "visible": {
        "public": false,
        "description": ""
      },
      "hasLink": {
        "public": false,
        "description": ""
      },
      "hasError": {
        "public": false,
        "description": ""
      },
      "link": {
        "public": false,
        "description": ""
      },
      "filename": {
        "public": false,
        "description": ""
      },
      "clickable": {
        "public": false,
        "description": ""
      },
      "uploaded": {
        "public": false,
        "description": ""
      },
      "uploading": {
        "public": false,
        "description": ""
      },
      "progress": {
        "public": false,
        "description": ""
      },
      "canRemove": {
        "public": false,
        "description": ""
      },
      "canUploadTemp": {
        "public": false,
        "description": ""
      },
      "uploadText": {
        "public": false,
        "description": ""
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
        "public": false,
        "description": ""
      },
      "remove": {
        "public": false,
        "description": ""
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "FileSlotGalleryPreview": {
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
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "visible": {
        "public": false,
        "description": ""
      },
      "hasLink": {
        "public": false,
        "description": ""
      },
      "hasError": {
        "public": false,
        "description": ""
      },
      "link": {
        "public": false,
        "description": ""
      },
      "filename": {
        "public": false,
        "description": ""
      },
      "clickable": {
        "public": false,
        "description": ""
      },
      "preview": {
        "public": false,
        "description": ""
      },
      "previewLoaded": {
        "public": false,
        "description": ""
      },
      "uploaded": {
        "public": false,
        "description": ""
      },
      "uploading": {
        "public": false,
        "description": ""
      },
      "progress": {
        "public": false,
        "description": ""
      },
      "canRemove": {
        "public": false,
        "description": ""
      },
      "canUploadTemp": {
        "public": false,
        "description": ""
      },
      "uploadText": {
        "public": false,
        "description": ""
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
        "public": false,
        "description": ""
      },
      "remove": {
        "public": false,
        "description": ""
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "FileSlotImagePreview": {
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
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "visible": {
        "public": false,
        "description": ""
      },
      "hasLink": {
        "public": false,
        "description": ""
      },
      "hasError": {
        "public": false,
        "description": ""
      },
      "link": {
        "public": false,
        "description": ""
      },
      "filename": {
        "public": false,
        "description": ""
      },
      "clickable": {
        "public": false,
        "description": ""
      },
      "preview": {
        "public": false,
        "description": ""
      },
      "previewLoaded": {
        "public": false,
        "description": ""
      },
      "uploaded": {
        "public": false,
        "description": ""
      },
      "uploading": {
        "public": false,
        "description": ""
      },
      "progress": {
        "public": false,
        "description": ""
      },
      "canRemove": {
        "public": false,
        "description": ""
      },
      "canUploadTemp": {
        "public": false,
        "description": ""
      },
      "uploadText": {
        "public": false,
        "description": ""
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
        "public": false,
        "description": ""
      },
      "remove": {
        "public": false,
        "description": ""
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "MultiselectSlotMultipleLabel": {
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
      "components": {
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
    "methods": {
      "label": {
        "public": false,
        "description": ""
      }
    },
    "props": {
      "values": {
        "required": false,
        "types": [
          "array"
        ]
      }
    },
    "events": {},
    "slots": {}
  },
  "MultiselectSlotNoOptions": {
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
      "components": {
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
  "MultiselectSlotNoResults": {
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
      "components": {
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
  "MultiselectSlotOption": {
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
      "components": {
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
    "props": {
      "option": {
        "required": true,
        "types": [
          "any"
        ]
      },
      "search": {
        "required": false,
        "types": [
          "any"
        ]
      }
    },
    "events": {},
    "slots": {}
  },
  "MultiselectSlotSingleLabel": {
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
      "components": {
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
    "props": {
      "value": {
        "required": true,
        "types": [
          "any"
        ]
      }
    },
    "events": {},
    "slots": {}
  },
  "MultiselectSlotTag": {
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
      "components": {
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
    "props": {
      "option": {
        "required": true,
        "types": [
          "any"
        ]
      },
      "handleTagRemove": {
        "required": true,
        "types": [
          "function"
        ]
      },
      "disabled": {
        "required": true,
        "types": [
          "boolean"
        ]
      }
    },
    "events": {},
    "slots": {}
  },
  "RadiogroupSlotRadio": {
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
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components used by the parent element."
      },
      "isDisabled": {
        "public": false,
        "description": ""
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
          "string",
          "number",
          "array"
        ]
      },
      "value": {
        "required": true,
        "types": [
          "object",
          "string",
          "number",
          "array"
        ]
      }
    },
    "events": {},
    "slots": {}
  }
}