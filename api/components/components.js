module.exports = {
  "DragAndDrop": {
    "inject": {
      "el$": {
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "description": ""
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
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "components": {
        "public": false,
        "description": ""
      },
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
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
        "description": ""
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
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
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
        "description": ""
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "ElementError": {
    "inject": {
      "el$": {
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      },
      "error": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "description": ""
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "ElementInfo": {
    "inject": {
      "el$": {
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      },
      "info": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "description": ""
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "ElementLabel": {
    "inject": {
      "el$": {
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      },
      "label": {
        "public": false,
        "description": ""
      },
      "isLabelComponent": {
        "public": false,
        "description": ""
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
        "description": ""
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "ElementLabelFloating": {
    "inject": {
      "el$": {
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      },
      "floating": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "description": ""
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
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "components": {
        "public": false,
        "description": ""
      },
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
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
        "description": ""
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
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "components": {
        "public": false,
        "description": ""
      },
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
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
        "description": ""
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "ElementLoader": {
    "inject": {
      "el$": {
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "description": ""
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "ElementMessage": {
    "inject": {
      "el$": {
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      },
      "message": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "description": ""
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "ElementText": {
    "inject": {
      "el$": {
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      },
      "content": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
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
      }
    },
    "events": {},
    "slots": {}
  },
  "FormElements": {
    "inject": {
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      },
      "schema": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "description": ""
      }
    },
    "methods": {
      "component": {
        "public": false,
        "description": ""
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "FormErrors": {
    "inject": {
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      },
      "errors": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "description": ""
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "FormLanguage": {
    "inject": {
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
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
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "description": ""
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
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
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
        "description": ""
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
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      },
      "messages": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "description": ""
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "FormStep": {
    "inject": {
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
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
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
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
        "description": ""
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
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Helper property used to store available events for the element."
      },
      "listeners": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store listeners for events."
      },
      "defaultClasses": {
        "public": false,
        "description": ""
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
            "description": "event to listen for."
          },
          "callback": {
            "types": [
              "function"
            ],
            "required": false,
            "description": "callback to run when the event is triggered. The `this` variable refers to the component the listener is set for."
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
            "description": "event to remove the listeners for."
          }
        }
      },
      "fire": {
        "public": true,
        "returns": "any",
        "description": "Fires an event."
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
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
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
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
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
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Helper property used to store available events for the element."
      },
      "listeners": {
        "public": true,
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
        "description": ""
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
            "description": "event to listen for."
          },
          "callback": {
            "types": [
              "function"
            ],
            "required": false,
            "description": "callback to run when the event is triggered. The `this` variable refers to the component the listener is set for."
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
            "description": "event to remove the listeners for."
          }
        }
      },
      "fire": {
        "public": true,
        "returns": "any",
        "description": "Fires an event."
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "FormStepsControl": {
    "inject": {
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "steps$": {
        "public": false,
        "description": ""
      },
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
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
        "public": false,
        "description": ""
      },
      "isLabelComponent": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "description": ""
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
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "description": ""
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
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
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
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "isLabelComponent": {
        "public": false,
        "description": ""
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
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Helper property used to store available events for the element."
      },
      "listeners": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store listeners for events."
      },
      "defaultClasses": {
        "public": false,
        "description": ""
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
            "description": "event to listen for."
          },
          "callback": {
            "types": [
              "function"
            ],
            "required": false,
            "description": "callback to run when the event is triggered. The `this` variable refers to the component the listener is set for."
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
            "description": "event to remove the listeners for."
          }
        }
      },
      "fire": {
        "public": true,
        "returns": "any",
        "description": "Fires an event."
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
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
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
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
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
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Helper property used to store available events for the element."
      },
      "listeners": {
        "public": true,
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
        "description": ""
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
            "description": "event to listen for."
          },
          "callback": {
            "types": [
              "function"
            ],
            "required": false,
            "description": "callback to run when the event is triggered. The `this` variable refers to the component the listener is set for."
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
            "description": "event to remove the listeners for."
          }
        }
      },
      "fire": {
        "public": true,
        "returns": "any",
        "description": "Fires an event."
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
        "description": ""
      },
      "steps$": {
        "public": false,
        "description": ""
      },
      "elements$": {
        "public": false,
        "description": ""
      },
      "validation": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Determine if the form should validate."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag that contains computed & custom errors & messages."
      },
      "selectedLanguage": {
        "public": false,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Determine if the form's data is currently being updated for external model."
      },
      "submitting": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Determine if the form is currently submitting."
      },
      "preparing": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Determine if the form is currently preparing for submission."
      },
      "updating": {
        "public": false,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Determine if the form's data is currently being updated for external model."
      },
      "events": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Helper property used to store available events for the element."
      },
      "listeners": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store listeners for events."
      },
      "internalData": {
        "public": false,
        "description": "If v-model is defined it is always equal to that. Otherwise used as model container."
      },
      "intermediaryValue": {
        "public": false,
        "description": ""
      },
      "userConfig": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "options": {
        "public": false,
        "description": ""
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The form's data excluding elements with unmet conditions and the ones which should not submit."
      },
      "output": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The form's data excluding elements with unmet conditions and the ones which should not submit."
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form has any dirty element."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form has any invalid element."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form has any debouncing element."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form has any pending element."
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
        "description": "Whether the form has any busy element or in preparing or submitting state."
      },
      "formErrors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of all errors within the form."
      },
      "formMessages": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of all errors within the form."
      },
      "isDisabled": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form is disabled."
      },
      "isLoading": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form is loading."
      },
      "shouldValidateOnChange": {
        "public": false,
        "description": ""
      },
      "shouldValidateOnStep": {
        "public": false,
        "description": ""
      },
      "hasSteps": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form has steps."
      },
      "hasTabs": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form has tabs."
      },
      "hasErrors": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form has errors."
      },
      "hasMessages": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form has messages."
      },
      "isMultilingual": {
        "public": false,
        "description": ""
      },
      "showErrors": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "showMessages": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "showLanguages": {
        "public": false,
        "description": ""
      },
      "showSteps": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "showTabs": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "showStepsControls": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "defaultClasses": {
        "public": false,
        "description": ""
      },
      "extendedClasses": {
        "public": false,
        "description": ""
      },
      "extendedComponents": {
        "public": false,
        "description": ""
      },
      "selectedTheme": {
        "public": true,
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
        "description": "The selected theme's file with local extensions."
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "model": {
        "public": false,
        "description": "Clone value of model container: v-model or internal data"
      },
      "isSync": {
        "public": false,
        "description": ""
      }
    },
    "methods": {
      "updateModel": {
        "public": false,
        "description": ""
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "Updates the element values which are contained in the data.",
        "params": {
          "data": {
            "types": [
              "object"
            ],
            "required": false,
            "description": "data to update with"
          }
        }
      },
      "load": {
        "public": true,
        "returns": "void",
        "description": "Loads data and clears any element if the element's key is not found in the `data` object. Sets all elements' `dirty` to `false`.",
        "params": {
          "data": {
            "types": [
              "object"
            ],
            "required": false,
            "description": "data to load"
          }
        }
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": "Resets the form to its default state."
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": "Resets the form to null values."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Sets all elements' `dirty` to `false`."
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": "Validates each elements within the form."
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "convertFormData": {
        "public": false,
        "description": ""
      },
      "submit": {
        "public": true,
        "returns": "void",
        "description": "Starts the submission process."
      },
      "send": {
        "public": true,
        "returns": "void",
        "description": "Transforms form data to [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object and sends it to the endpoint."
      },
      "disableValidation": {
        "public": true,
        "returns": "void",
        "description": "Disabled validation."
      },
      "enableValidation": {
        "public": true,
        "returns": "void",
        "description": "Enables validation."
      },
      "setLanguage": {
        "public": false,
        "description": ""
      },
      "handleSubmit": {
        "public": true,
        "description": "Triggered when the form is submitted. Can prevent further execution (element validation) if returns `false`."
      },
      "el$": {
        "public": true,
        "returns": "void",
        "description": "Returns an element by its path.",
        "params": {
          "path": {
            "types": [
              "string"
            ],
            "required": false,
            "description": "path of the element"
          },
          "elements": {
            "types": [
              "string"
            ],
            "required": false,
            "description": "elements$ object to look elements for (leave blank)"
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
        "description": ""
      },
      "fire": {
        "public": true,
        "returns": "any",
        "description": "Fires an event."
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
            "description": "event to listen for."
          },
          "callback": {
            "types": [
              "function"
            ],
            "required": false,
            "description": "callback to run when the event is triggered. The `this` variable refers to the component the listener is set for."
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
            "description": "event to remove the listeners for."
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
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
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
        "description": ""
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
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
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
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      },
      "isDisabled": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "description": ""
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
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
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
      "canUpload": {
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
        "description": ""
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
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
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
      "canUpload": {
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
        "description": ""
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
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
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
      "canUpload": {
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
        "description": ""
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
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "description": ""
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
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "description": ""
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "MultiselectSlotNoResults": {
    "inject": {
      "el$": {
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "description": ""
      }
    },
    "props": {},
    "events": {},
    "slots": {}
  },
  "MultiselectSlotOption": {
    "inject": {
      "el$": {
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "description": ""
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
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
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
      }
    },
    "events": {},
    "slots": {}
  },
  "MultiselectSlotTag": {
    "inject": {
      "el$": {
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "description": ""
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
        "public": false,
        "description": ""
      },
      "form$": {
        "public": false,
        "description": ""
      },
      "theme": {
        "public": false,
        "description": ""
      }
    },
    "computed": {
      "classes": {
        "public": false,
        "description": ""
      },
      "mainClass": {
        "public": false,
        "description": ""
      },
      "components": {
        "public": false,
        "description": ""
      },
      "isDisabled": {
        "public": false,
        "description": ""
      }
    },
    "data": {
      "defaultClasses": {
        "public": false,
        "description": ""
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