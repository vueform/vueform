module.exports = {
  "DragAndDrop": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "VueformElement"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "The classes instance (for testing purpose)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      }
    },
    "data": {
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
    "slots": {},
    "views": []
  },
  "ElementAddon": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "VueformElement"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "The classes instance (for testing purpose)."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "addon": {
        "public": true,
        "types": [
          "string",
          "Component"
        ],
        "description": "The content of the addon. If the addon is provided ss a `function` this contains the resolved value."
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
    },
    "views": []
  },
  "ElementAddonOptions": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "el$": {
        "public": true,
        "types": [
          "VueformElement"
        ],
        "description": "The parent element's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "The classes instance (for testing purpose)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      },
      "style": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Additional `style` attribute for the dropdown (position values)."
      },
      "focused": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "The option that should be focused according to current [`search`](#property-search) term."
      }
    },
    "data": {
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
      "isOpen": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the country selector is open."
      },
      "selector": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": "The container div."
      },
      "dropdown": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": "The dropdown container div."
      },
      "left": {
        "public": true,
        "types": [
          "number",
          "undefined"
        ],
        "description": "The left position of the dropdown."
      },
      "right": {
        "public": true,
        "types": [
          "number",
          "undefined"
        ],
        "description": "The right position of the dropdown."
      },
      "top": {
        "public": true,
        "types": [
          "number",
          "undefined"
        ],
        "description": "The top position of the dropdown."
      },
      "bottom": {
        "public": true,
        "types": [
          "number",
          "undefined"
        ],
        "description": "The bottom position of the dropdown."
      },
      "search": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The current search term."
      },
      "searchTimeout": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Store for search timeout."
      },
      "hoverDisabled": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether selection on hover is disabled."
      },
      "selected": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The currently selected option."
      },
      "pointed": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The currently pointed option."
      }
    },
    "methods": {
      "on": {
        "public": true,
        "returns": "void",
        "description": "Adds a listener for an event.",
        "params": {
          "event": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "name of the event to listen for"
          },
          "callback": {
            "types": [
              "function"
            ],
            "required": true,
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
            "required": true,
            "description": "name of the event to remove"
          }
        }
      },
      "fire": {
        "public": true,
        "returns": "void",
        "description": "Fires and emits an event.",
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
      "close": {
        "public": true,
        "returns": "void",
        "description": "Closes the dropdown."
      },
      "scrollToOption": {
        "public": true,
        "returns": "void",
        "description": "Scroll the dropdown to an option.",
        "params": {
          "option": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "an option object form [`options`](#option-options)."
          }
        }
      },
      "scrollToSelected": {
        "public": true,
        "returns": "void",
        "description": "Scroll to the currently selected option (async)."
      },
      "selectOption": {
        "public": true,
        "returns": "void",
        "description": "Select an option.",
        "params": {
          "option": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "an option object form [`options`](#option-options)."
          }
        }
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": "Removes the selected option."
      },
      "handleOptionPoint": {
        "public": true,
        "returns": "void",
        "description": "Handles pointing an option (sets [`pointed`](#property-pointed)).",
        "params": {
          "option": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "an option object form [`options`](#option-options)."
          }
        }
      },
      "handleOptionClick": {
        "public": true,
        "returns": "void",
        "description": "Handle the click of an option.",
        "params": {
          "option": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "an option object form [`options`](#option-options)."
          }
        }
      },
      "handleSelectorClick": {
        "public": true,
        "returns": "void",
        "description": "Handles the click of collapsed element.",
        "params": {
          "event": {
            "types": [
              "Event"
            ],
            "required": true,
            "description": "the Event"
          }
        }
      },
      "handleSelectorKeydown": {
        "public": true,
        "returns": "void",
        "description": "Handles the keydown even of the collapsed element when focused (async.",
        "params": {
          "event": {
            "types": [
              "Event"
            ],
            "required": true,
            "description": "the Event"
          }
        }
      },
      "handleClickOutside": {
        "public": true,
        "returns": "void",
        "description": "Handles clicking outside of the dropdown once opened (closes it).",
        "params": {
          "event": {
            "types": [
              "Event"
            ],
            "required": true,
            "description": "the Event"
          }
        }
      },
      "handleKeydown": {
        "public": true,
        "returns": "void",
        "description": "Handles the keydown event when the dropdown is open.",
        "params": {
          "event": {
            "types": [
              "Event"
            ],
            "required": true,
            "description": "the Event"
          }
        }
      },
      "handleResize": {
        "public": true,
        "returns": "void",
        "description": "Handles the window resize event (closes the dropdown if open)."
      }
    },
    "props": {
      "options": {
        "required": false,
        "default": "[]",
        "types": [
          "array"
        ]
      },
      "placeholder": {
        "required": false,
        "default": "",
        "types": [
          "string",
          "number",
          "object"
        ]
      }
    },
    "events": {
      "select": {
        "description": "Triggered when an option is selected when using [`native: false`](#option-native).",
        "params": {
          "option": {
            "description": "the selected option",
            "types": [
              "object"
            ]
          },
          "el$": {
            "description": "the element's component",
            "types": [
              "component"
            ]
          }
        }
      },
      "open": {
        "description": "Triggered when the dropdown list is opened when using [`native: false`](#option-native).",
        "params": {
          "el$": {
            "description": "the element's component",
            "types": [
              "component"
            ]
          }
        }
      },
      "close": {
        "description": "Triggered when the dropdown list is closed when using [`native: false`](#option-native).",
        "params": {
          "el$": {
            "description": "the element's component",
            "types": [
              "component"
            ]
          }
        }
      }
    },
    "slots": {},
    "views": []
  },
  "ElementDescription": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "VueformElement"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "The classes instance (for testing purpose)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      },
      "description": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The element's description, defined via the element's `description` option."
      },
      "isSlot": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether the description is provided as a slot."
      },
      "id": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The `id` attribute of the container."
      }
    },
    "props": {},
    "events": {},
    "slots": {
      "default": {
        "description": "Renders the content of the description if the parent element has no `description`."
      }
    },
    "views": []
  },
  "ElementError": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "VueformElement"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "The classes instance (for testing purpose)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error of the element."
      },
      "id": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The `id` attribute of the container."
      }
    },
    "props": {},
    "events": {},
    "slots": {},
    "views": []
  },
  "ElementInfo": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "VueformElement"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "The classes instance (for testing purpose)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      },
      "info": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The info for the element, defined via the element's `info` prop."
      },
      "isSlot": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether the info is provided as a slot."
      },
      "id": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The `id` attribute of the container."
      }
    },
    "data": {
      "position": {
        "public": false,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "The position of the info."
      }
    },
    "props": {},
    "events": {},
    "slots": {
      "default": {
        "description": "Renders the content of the info when the info icon is hovered, if the parent element has no `info`."
      }
    },
    "views": []
  },
  "ElementLabel": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "VueformElement"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "The classes instance (for testing purpose)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      },
      "label": {
        "public": true,
        "types": [
          "string",
          "Component"
        ],
        "description": "The label of the component."
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
      "id": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The `id` attribute of the container."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has a `label` option, a `#label` slot or `Vueform` component's [`forceLabels`](vueform#force-labels) option is `true`."
      },
      "isSlot": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether the label is provided as a slot."
      }
    },
    "props": {},
    "events": {},
    "slots": {
      "default": {
        "description": "Renders the content of the label if the parent element has no `label`."
      },
      "info": {
        "description": "Passes its content to `ElementInfo`'s [`default`](element-info#slot-default) slot."
      }
    },
    "views": []
  },
  "ElementLabelFloating": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "VueformElement"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "The classes instance (for testing purpose)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      },
      "floating": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The floating label of the element, defined via `floating` prop."
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
    "slots": {},
    "views": []
  },
  "ElementLayout": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "VueformElement"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "The classes instance (for testing purpose)."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element should be visible."
      }
    },
    "props": {
      "multiple": {
        "required": false,
        "default": false,
        "types": [
          "boolean"
        ]
      },
      "view": {
        "required": false,
        "types": [
          "string"
        ]
      }
    },
    "events": {},
    "slots": {
      "field": {
        "description": "Replaces the layout's element field. This is the slot used by each element to render their content."
      },
      "label": {
        "description": "Passes its content to the `ElementLabel`'s [`default`](element-label#slot-default) slot."
      },
      "info": {
        "description": "Passes its content to the `ElementLabel`'s [`info`](element-info#slot-default) slot. It will only be rendered if `label` is defined as well."
      },
      "description": {
        "description": "Passes its content to the `ElementDescription`'s [`default`](element-description#slot-default) slot."
      },
      "before": {
        "description": "Passes its content to the `ElementText`'s [`default`](element-text#slot-default) slot with `type: \"before\"`."
      },
      "between": {
        "description": "Passes its content to the `ElementText`'s [`default`](element-text#slot-default) slot with `type: \"between\"`."
      },
      "after": {
        "description": "Passes its content to the `ElementText`'s [`default`](element-text#slot-default) slot with `type: \"after\"`."
      }
    },
    "views": []
  },
  "ElementLayoutInline": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "VueformElement"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "The classes instance (for testing purpose)."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element should be visible."
      }
    },
    "props": {},
    "events": {},
    "slots": {
      "field": {
        "description": "Replaces the layout's element field. This is the slot used by each element to render their content."
      },
      "label": {
        "description": "Passes its content to the `ElementLabel`'s [`default`](element-label#slot-default) slot."
      },
      "info": {
        "description": "Passes its content to the `ElementLabel`'s [`info`](element-info#slot-default) slot. It will only be rendered if `label` is defined as well."
      },
      "description": {
        "description": "Passes its content to the `ElementDescription`'s [`default`](element-description#slot-default) slot."
      },
      "before": {
        "description": "Passes its content to the `ElementText`'s [`default`](element-text#slot-default) slot with `type: \"before\"`."
      },
      "between": {
        "description": "Passes its content to the `ElementText`'s [`default`](element-text#slot-default) slot with `type: \"between\"`."
      },
      "after": {
        "description": "Passes its content to the `ElementText`'s [`default`](element-text#slot-default) slot with `type: \"after\"`."
      }
    },
    "views": []
  },
  "ElementLoader": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "VueformElement"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "The classes instance (for testing purpose)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      }
    },
    "props": {},
    "events": {},
    "slots": {},
    "views": []
  },
  "ElementMessage": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "VueformElement"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "The classes instance (for testing purpose)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      },
      "message": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first message of the element."
      }
    },
    "props": {},
    "events": {},
    "slots": {},
    "views": []
  },
  "ElementText": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "VueformElement"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "The classes instance (for testing purpose)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
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
    },
    "views": []
  },
  "FormElements": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      },
      "schema": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The form schema."
      }
    },
    "methods": {
      "component": {
        "public": false,
        "returns": "string",
        "description": "Transforms an element `type` into the element's component name.",
        "params": {
          "element": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "element `type`"
          }
        }
      }
    },
    "props": {
      "view": {
        "required": false,
        "types": [
          "string"
        ]
      }
    },
    "events": {},
    "slots": {
      "default": {
        "description": "Renders the elements."
      }
    },
    "views": []
  },
  "FormErrors": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "Form errors including element errors and the ones added to `messageBag` manually."
      }
    },
    "props": {
      "view": {
        "required": false,
        "types": [
          "string"
        ]
      }
    },
    "events": {},
    "slots": {},
    "views": []
  },
  "FormLanguage": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "selectedLanguage": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The language code of the currently selected language (2 letters)."
      },
      "selected": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the current language is the selected one."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      }
    },
    "methods": {
      "select": {
        "public": true,
        "returns": "void",
        "description": "Select the language."
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
      },
      "view": {
        "required": false,
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
    "slots": {},
    "views": []
  },
  "FormLanguages": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      },
      "language": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The language code of the currently selected language (2 letters)."
      },
      "languages": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The available languages."
      }
    },
    "methods": {
      "select": {
        "public": true,
        "returns": "void",
        "description": "Selects a language.",
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
    "props": {
      "view": {
        "required": false,
        "types": [
          "string"
        ]
      }
    },
    "events": {},
    "slots": {},
    "views": []
  },
  "FormMessages": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      },
      "messages": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "Form messages including element messages and the ones added to `messageBag` manually."
      }
    },
    "props": {
      "view": {
        "required": false,
        "types": [
          "string"
        ]
      }
    },
    "events": {},
    "slots": {},
    "views": []
  },
  "FormStep": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "steps$": {
        "public": true,
        "types": [
          "FormSteps"
        ],
        "description": "The parent [`FormSteps`](form-steps) component."
      },
      "elements$": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The form elements' components."
      },
      "isFirst": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the step is the first."
      },
      "isLast": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the step is the first."
      },
      "children$": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The elements' components in the step."
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
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled."
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
        "description": "Whether all the elements in the step were already validated at least once."
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
          "FormStep"
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
      "stepLabel": {
        "public": true,
        "default": "null",
        "types": [
          "string",
          "Component"
        ],
        "description": "The label of the step."
      },
      "conditionList": {
        "public": false,
        "types": [
          "array"
        ],
        "description": "The current conditions of the element."
      }
    },
    "methods": {
      "validate": {
        "public": true,
        "returns": "Promise",
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
      "on": {
        "public": true,
        "returns": "void",
        "description": "Adds a listener for an event.",
        "params": {
          "event": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "name of the event to listen for"
          },
          "callback": {
            "types": [
              "function"
            ],
            "required": true,
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
            "required": true,
            "description": "name of the event to remove"
          }
        }
      },
      "fire": {
        "public": true,
        "returns": "void",
        "description": "Fires and emits an event.",
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
      "addChildConditions": {
        "public": false,
        "returns": "void",
        "description": "Apply conditions of the step to its elements."
      },
      "removeChildConditions": {
        "public": false,
        "returns": "void",
        "description": "Remove conditions of the elements of the step."
      },
      "resetChildConditions": {
        "public": false,
        "returns": "void",
        "description": "Resets conditions of the elements of the step."
      },
      "updateConditions": {
        "public": false,
        "returns": "void",
        "description": "Updates element conditions after they have been changed."
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
          "array",
          "object",
          "string"
        ]
      },
      "removeClass": {
        "required": false,
        "default": null,
        "types": [
          "array",
          "object"
        ]
      },
      "replaceClass": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "overrideClass": {
        "required": false,
        "default": null,
        "types": [
          "array",
          "object",
          "string"
        ]
      },
      "view": {
        "required": false,
        "types": [
          "string"
        ]
      },
      "onActivate": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      },
      "onInactivate": {
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
      "activate": {
        "description": "Triggered when the step becomes active."
      },
      "inactivate": {
        "description": "Triggered when the step becomes inactive."
      },
      "enable": {
        "description": "Triggered when the step becomes enabled."
      },
      "disable": {
        "description": "Triggered when the step becomes disabled."
      },
      "complete": {
        "description": "Triggered when the step becomes [`completed`](#property-completed)."
      }
    },
    "slots": {
      "default": {
        "description": "Renders the label for the step."
      }
    },
    "views": []
  },
  "FormSteps": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "steps": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The object containing steps defined in [`Vueform`](vueform#option-steps)."
      },
      "elements$": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The form elements' components."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
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
        "description": "Whether there are any steps in [`pending`](form-step#property-pending) state."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether there are any steps in [`debouncing`](form-step#property-debouncing) state."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether there are any steps in [`invalid`](form-step#property-invalid) state."
      },
      "done": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all the steps are [`done`](form-step#property-done)."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether there are any steps in [`busys`](form-step#property-busys) state."
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
          "FormStep",
          "undefined"
        ],
        "description": "The first visible [`FormStep`](form-step) component."
      },
      "last$": {
        "public": true,
        "types": [
          "FormStep",
          "undefined"
        ],
        "description": "The last visible [`FormStep`](form-step) component."
      },
      "current$": {
        "public": true,
        "types": [
          "FormStep",
          "undefined"
        ],
        "description": "The current [`FormStep`](form-step) component."
      },
      "next$": {
        "public": true,
        "types": [
          "FormStep",
          "undefined"
        ],
        "description": "The next visible [`FormStep`](form-step) component."
      },
      "previous$": {
        "public": true,
        "types": [
          "FormStep",
          "undefined"
        ],
        "description": "The previous visible [`FormStep`](form-step) component."
      },
      "firstInvalid$": {
        "public": true,
        "types": [
          "FormStep",
          "undefined"
        ],
        "description": "The first invalid & visible [`FormStep`](form-step) component."
      },
      "firstNonDone$": {
        "public": true,
        "types": [
          "FormStep",
          "undefined"
        ],
        "description": "The first visible [`FormStep`](form-step) component which is not done yet."
      },
      "lastEnabled$": {
        "public": true,
        "types": [
          "FormStep",
          "undefined"
        ],
        "description": "The last enabled & visible [`FormStep`](form-step) component."
      },
      "isAtLastStep": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether is at the last step."
      },
      "isAtFirstStep": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether is at the first step."
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
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Helper prop used for checking if the component exists."
      }
    },
    "methods": {
      "goTo": {
        "public": true,
        "returns": "void",
        "description": "Go to a step and enable it. Optionally enable all steps up to it.",
        "params": {
          "name": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "name of step to go to"
          },
          "enableUntil": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "whether steps should be enabled up to the selected step (default: `false`)"
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
        "returns": "FormStep|undefined",
        "description": "Returns a specific [`FormStep`](form-step) component by index.",
        "params": {
          "name": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "name of the step"
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
        "description": "Enables all steps."
      },
      "submit": {
        "public": true,
        "returns": "Promise",
        "description": "Invokes the form's `submit` event. If the form has any validation errors it will jump to the first step with error."
      },
      "select": {
        "public": false,
        "returns": "void",
        "description": "Select a step.",
        "params": {
          "step$": {
            "types": [
              "FormStep"
            ],
            "required": true,
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
              "number"
            ],
            "required": true,
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
            "required": true,
            "description": "name of the event to listen for"
          },
          "callback": {
            "types": [
              "function"
            ],
            "required": true,
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
            "required": true,
            "description": "name of the event to remove"
          }
        }
      },
      "fire": {
        "public": true,
        "returns": "void",
        "description": "Fires and emits an event.",
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
      "view": {
        "required": false,
        "types": [
          "string"
        ]
      }
    },
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
        "description": "Triggered before moves to the next step.",
        "params": {
          "step$": {
            "description": "the next [`FormStep`](form-step) component",
            "types": [
              "component"
            ]
          }
        }
      },
      "previous": {
        "description": "Triggered before moves to the previous step.",
        "params": {
          "step$": {
            "description": "the previous [`FormStep`](form-step) component",
            "types": [
              "component"
            ]
          }
        }
      },
      "finish": {
        "description": "Triggered when finish button is clicked, before validating and submitting the form."
      }
    },
    "slots": {},
    "views": []
  },
  "FormStepsControl": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "steps$": {
        "public": false,
        "types": [
          "FormSteps"
        ],
        "description": "The [`FormSteps`](form-steps) component."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
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
        "description": "Whether the control is in loading state (except for previous)."
      },
      "current$": {
        "public": false,
        "types": [
          "FormStep"
        ],
        "description": "The currently active [`FormStep`](form-step) component."
      },
      "label": {
        "public": true,
        "types": [
          "string",
          "Component"
        ],
        "description": "The label of the component."
      },
      "isLabelComponent": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether label is provided as a Vue component."
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
        "returns": "Promise",
        "description": "Complete the current step and go to the next one (async). If the form's [`validateOn`](vueform#option-validate-on) prop or `config.validateOn` contains `'step'` also validates the elements within the step before moving forward (and stay if there's any error)."
      },
      "finish": {
        "public": true,
        "returns": "Promise",
        "description": "Complete the final step and submit the form (async)."
      },
      "handleClick": {
        "public": false,
        "returns": "void",
        "description": "Handles `click` event.",
        "params": {
          "e": {
            "types": [
              "Event"
            ],
            "required": true,
            "description": "event object"
          }
        }
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
        ],
        "private": true
      },
      "view": {
        "required": false,
        "types": [
          "string"
        ]
      }
    },
    "events": {},
    "slots": {
      "default": {
        "description": "Renders the text of the control button."
      }
    },
    "views": []
  },
  "FormStepsControls": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      }
    },
    "props": {
      "labels": {
        "required": false,
        "default": true,
        "types": [
          "boolean"
        ]
      },
      "view": {
        "required": false,
        "types": [
          "string"
        ]
      }
    },
    "events": {},
    "slots": {
      "previous": {
        "description": "Renders the text of the previous button in [`FormStepsControl`](form-steps-control) component if the current `FormStep`'s [`labels`](form-step#option-labels) does not contain `previous`. `FormStepsControls` need to have [`labels: false`](#option-labels) in order to use this slot."
      },
      "next": {
        "description": "Renders the text of the next button in [`FormStepsControl`](form-steps-control) component if the current `FormStep`'s [`labels`](form-step#option-labels) does not contain `next`. `FormStepsControls` need to have [`labels: false`](#option-labels) in order to use this slot."
      },
      "finish": {
        "description": "Renders the text of the previous button in [`FormStepsControl`](form-steps-control) component if the current `FormStep`'s [`labels`](form-step#option-labels) does not contain `finish`. `FormStepsControls` need to have [`labels: false`](#option-labels) in order to use this slot."
      }
    },
    "views": []
  },
  "FormTab": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
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
      "isFirst": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the tab is the first."
      },
      "isLast": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the tab is the first."
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
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled."
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
          "FormTab"
        ],
        "description": "The tab's component."
      },
      "tabs$": {
        "public": true,
        "types": [
          "FormTabs"
        ],
        "description": "The parent [`FormTabs`](form-tabs) component."
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
      "tabLabel": {
        "public": true,
        "default": "null",
        "types": [
          "string",
          "Component"
        ],
        "description": "The label of the tab."
      },
      "conditionList": {
        "public": false,
        "types": [
          "array"
        ],
        "description": "The current conditions of the element."
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
            "required": true,
            "description": "name of the event to listen for"
          },
          "callback": {
            "types": [
              "function"
            ],
            "required": true,
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
            "required": true,
            "description": "name of the event to remove"
          }
        }
      },
      "fire": {
        "public": true,
        "returns": "void",
        "description": "Fires and emits an event.",
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
      "addChildConditions": {
        "public": false,
        "returns": "void",
        "description": "Apply conditions of the tab to its elements."
      },
      "removeChildConditions": {
        "public": false,
        "returns": "void",
        "description": "Remove conditions of the elements of the tab."
      },
      "resetChildConditions": {
        "public": false,
        "returns": "void",
        "description": "Resets conditions of the elements of the tab."
      },
      "updateConditions": {
        "public": false,
        "returns": "void",
        "description": "Updates element conditions after they have been changed."
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
          "array",
          "object",
          "string"
        ]
      },
      "removeClass": {
        "required": false,
        "default": null,
        "types": [
          "array",
          "object"
        ]
      },
      "replaceClass": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "overrideClass": {
        "required": false,
        "default": null,
        "types": [
          "array",
          "object",
          "string"
        ]
      },
      "view": {
        "required": false,
        "types": [
          "string"
        ]
      },
      "onActivate": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      },
      "onInactivate": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ],
        "private": true
      }
    },
    "events": {
      "activate": {
        "description": "Triggered when the tab becomes active."
      },
      "inactivate": {
        "description": "Triggered when the tab becomes inactive."
      }
    },
    "slots": {
      "default": {
        "description": "Renders the label for the tab."
      }
    },
    "views": []
  },
  "FormTabs": {
    "inject": {
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
      },
      "tabs": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The object containing tabs defined in [`Vueform`](vueform#option-tabs)."
      },
      "elements$": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The form elements' components."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
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
          "FormTab"
        ],
        "description": "The current [`FormTab`](form-tab) component."
      },
      "first$": {
        "public": true,
        "types": [
          "FormTab"
        ],
        "description": "The first visible [`FormTab`](form-tab) component."
      },
      "last$": {
        "public": true,
        "types": [
          "FormTab"
        ],
        "description": "The last visible [`FormTab`](form-tab) component."
      },
      "next$": {
        "public": true,
        "types": [
          "FormTab"
        ],
        "description": "The next visible [`FormTab`](form-tab) component."
      },
      "previous$": {
        "public": true,
        "types": [
          "FormTab"
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
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Helper prop used for checking if the component exists."
      }
    },
    "methods": {
      "goTo": {
        "public": true,
        "returns": "void",
        "description": "Go to a tab.",
        "params": {
          "name": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "name of tab to go to"
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
              "FormTab"
            ],
            "required": true,
            "description": "the [`FormTab`](form-tab) component to select"
          }
        }
      },
      "tab$": {
        "public": true,
        "returns": "FormTab",
        "description": "Returns a specific [`FormTab`](form-tab) by index.",
        "params": {
          "tab": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "name of the tab"
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
            "required": true,
            "description": "name of the event to listen for"
          },
          "callback": {
            "types": [
              "function"
            ],
            "required": true,
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
            "required": true,
            "description": "name of the event to remove"
          }
        }
      },
      "fire": {
        "public": true,
        "returns": "void",
        "description": "Fires and emits an event.",
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
      "view": {
        "required": false,
        "types": [
          "string"
        ]
      }
    },
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
    "slots": {},
    "views": []
  },
  "Vueform": {
    "data": {
      "tabs$": {
        "public": true,
        "types": [
          "FormTabs"
        ],
        "description": "The [`FormTabs`](/reference/form-tabs) component."
      },
      "steps$": {
        "public": true,
        "types": [
          "FormSteps"
        ],
        "description": "The [`FormSteps`](/reference/form-steps) component."
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
        "description": "Enables/disables validation for the form globally."
      },
      "conditions": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Enables/disables conditions for the form globally."
      },
      "messageBag": {
        "public": true,
        "default": "MessageBag",
        "types": [
          "MessageBag"
        ],
        "description": "Instance of MessageBag service. It can be used to add [custom errors and messages](/docs/validating-elements#custom-errors-and-messages)."
      },
      "selectedLanguage": {
        "public": true,
        "default": "config.language",
        "types": [
          "string"
        ],
        "description": "The code of the currently selected language (eg. `en`)."
      },
      "submitting": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the async process of submitting the form is currently in progress."
      },
      "preparing": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the async process of preparing the elements for submit is currently in progress."
      },
      "cancelToken": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "The axios cancel token when a request is in progress."
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
        "types": [
          "object"
        ],
        "description": "The intermediary value."
      },
      "userConfig": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "The configuration object of the user when using SFC mode. Basically the value of the component's `data.vueform` object."
      },
      "messagesRegistered": {
        "public": false,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether FormMessages component is registered."
      },
      "errorsRegistered": {
        "public": false,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether FormErrors component is registered."
      },
      "languagesRegistered": {
        "public": false,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether FormLanguages component is registered."
      },
      "tabsRegistered": {
        "public": false,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether FormTabs component is registered."
      },
      "stepsRegistered": {
        "public": false,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether FormSteps component is registered."
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
        "description": "The form data including the data of all elements even the ones with `available: false` and `submit: false`."
      },
      "requestData": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The form data excluding elements with `available: false` and `submit: false`. This one gets submitted by default, but can be changed with [`formData`](#option-form-data)"
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form has any elements which were modified."
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
        "description": "Whether the form has any elements with active debounce process."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form has any elements with pending async validation."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether each element in the form has been validated at least once."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form has any elements with `busy: true` or the [`isLoading`](#property-is-loading), [`preparing`](#property-preparing) or [`submitting`](#property-submitting) property is `true`."
      },
      "formErrors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "Form errors including element errors and the ones added to [`messageBag`](#property-message-bag) manually."
      },
      "formMessages": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "Form messages including element messages and the ones added to [`messageBag`](#property-message-bag) manually."
      },
      "isDisabled": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether submitting the form is disabled. Returns `true` if:\\n* the form has any invalid elements and [`validateOn`](#option-validate-on) contains `change`\\n* the form is [`busy`](#property-busy)\\n* manually disabled with [`disabled`](#option-disabled) option."
      },
      "isLoading": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether loading state is triggered manually via [`loading`](#option-loading) option."
      },
      "shouldValidateOnChange": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether the `validateOn` prop or `config.validateOn` contains `'change'`."
      },
      "shouldValidateOnStep": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": "Whether the `validateOn` prop or `config.validateOn` contains `'step'`."
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
        "description": "Whether the form has any messages."
      },
      "isMultilingual": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form is multilingual and should show [`FormLanguages`](form-languages) component. Returns `true` if [`multilingual`](#option-multilingual) is enabled."
      },
      "showErrors": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form should display errors above the form with [`FormErrors`](form-errors) component. Can be disabled by [`displayErrors`](#option-display-errors) or in `config.displayErrors`."
      },
      "showMessages": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form should display messages above the form with [`FormMessages`](form-messages) component. Can be disabled by [`displayMessages`](#option-display-messages) or in `config.displayMessages`."
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
        "description": "Whether the form should show [`FormSteps`](form-steps) component. Returns `true` if [`steps`](#option-steps) has value."
      },
      "showTabs": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form should show [`FormTabs`](form-tabs) component. Returns `true` if [`tabs`](#option-tabs) has value."
      },
      "showStepsControls": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the form should display steps controls below form with [`FormStepsControls`](form-steps-control) component when it has [`steps`](#option-steps). Can be disabled with [`stepsControls`](#option-steps-controls)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The default list of templates available to the form components."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      },
      "extendedTheme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The selected theme, extended by local template and class overrides, using [`templates`](#option-replace-templates), [`addClasses`](#option-add-classes) and [`replaceClasses`](#option-replace-classes)."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The resolved default size for each element and component within the form."
      },
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for Vueform component. This one should be used to determine the component's view in class functions."
      },
      "Views": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The name of the views for the components within the form."
      },
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The form component instance (self)."
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
      },
      "tree": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "The tree representation of the form schema."
      },
      "flatTree": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "The flat tree representation of the form schema."
      },
      "translations": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The translation tags of the current locale."
      },
      "locale$": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The active locale of the form."
      }
    },
    "methods": {
      "prepareElements": {
        "public": false,
        "returns": "Promise",
        "description": "Prepares all elements to submit (async)."
      },
      "updateModel": {
        "public": false,
        "returns": "void",
        "description": "Updates an element's data in the form model.",
        "params": {
          "dataPath": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "the `dataPath` property of the element to update"
          },
          "val": {
            "types": [
              "any"
            ],
            "required": true,
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
        "returns": "Promise",
        "description": "Loads data to the form using optional [`formatLoad`](#option-format-load) formatter.",
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
            "description": "whether the loaded value should be formatted with [`formatLoad`](#option-format-load) (default: `false`)"
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
      "clearMessages": {
        "public": true,
        "returns": "void",
        "description": "Clears the manually added messages from the form's and each element's `messageBag`."
      },
      "validate": {
        "public": true,
        "returns": "Promise",
        "description": "Validates all elements (async) which weren't validated before. If [`validateOn`](#option-validate-on) does not contain `change` it will validate all elements on each call."
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
        "returns": "Promise",
        "description": "Validates and prepares elements then submits the form (async)."
      },
      "send": {
        "public": true,
        "returns": "Promise",
        "description": "Sends form data to [`endpoint`](#option-endpoint) with the selected [`method`](#option-method) (async)."
      },
      "cancel": {
        "public": true,
        "returns": "void",
        "description": "Cancels the form request in progress."
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
      "enableConditions": {
        "public": true,
        "returns": "void",
        "description": "Enables conditions globally."
      },
      "disableConditions": {
        "public": true,
        "returns": "void",
        "description": "Disables conditions globally."
      },
      "setLanguage": {
        "public": true,
        "returns": "void",
        "description": "Sets current language when using [`multilingual`](#option-multilingual).",
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
        "returns": "VueformElement|null",
        "description": "Returns an element by its path.",
        "params": {
          "path": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "path of the element"
          },
          "elements": {
            "types": [
              "object"
            ],
            "required": false,
            "description": "the object of elements to look into (defaults to elements$)"
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
            "required": true,
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
        "description": "Fires and emits an event.",
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
            "required": true,
            "description": "name of the event to listen for"
          },
          "callback": {
            "types": [
              "function"
            ],
            "required": true,
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
            "required": true,
            "description": "name of the event to remove"
          }
        }
      }
    },
    "props": {
      "schema": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "name": {
        "required": false,
        "default": null,
        "types": [
          "string"
        ],
        "private": true
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
      "stepsControls": {
        "required": false,
        "default": true,
        "types": [
          "boolean"
        ]
      },
      "validateOn": {
        "required": false,
        "default": null,
        "types": [
          "string"
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
      "messages": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "endpoint": {
        "required": false,
        "default": null,
        "types": [
          "string",
          "boolean",
          "function",
          "promise"
        ]
      },
      "method": {
        "required": false,
        "default": null,
        "types": [
          "string"
        ]
      },
      "prepare": {
        "required": false,
        "default": null,
        "types": [
          "function"
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
      "formData": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ]
      },
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
      "forceNumbers": {
        "required": false,
        "default": null,
        "types": [
          "boolean"
        ]
      },
      "formatData": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ]
      },
      "formatLoad": {
        "required": false,
        "default": null,
        "types": [
          "function"
        ]
      },
      "loading": {
        "required": false,
        "default": null,
        "types": [
          "boolean"
        ]
      },
      "disabled": {
        "required": false,
        "default": null,
        "types": [
          "boolean"
        ]
      },
      "columns": {
        "required": false,
        "default": null,
        "types": [
          "object"
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
      "size": {
        "required": false,
        "default": null,
        "types": [
          "string"
        ]
      },
      "view": {
        "required": false,
        "default": null,
        "types": [
          "string"
        ]
      },
      "views": {
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
          "object",
          "function"
        ]
      },
      "addClass": {
        "required": false,
        "default": null,
        "types": [
          "array",
          "object",
          "string",
          "function"
        ]
      },
      "removeClasses": {
        "required": false,
        "default": null,
        "types": [
          "object",
          "function"
        ]
      },
      "removeClass": {
        "required": false,
        "default": null,
        "types": [
          "array",
          "object",
          "function"
        ]
      },
      "replaceClasses": {
        "required": false,
        "default": null,
        "types": [
          "object",
          "function"
        ]
      },
      "replaceClass": {
        "required": false,
        "default": null,
        "types": [
          "object",
          "function"
        ]
      },
      "overrideClasses": {
        "required": false,
        "default": null,
        "types": [
          "object",
          "function"
        ]
      },
      "overrideClass": {
        "required": false,
        "default": null,
        "types": [
          "array",
          "object",
          "string",
          "function"
        ]
      },
      "templates": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "presets": {
        "required": false,
        "default": null,
        "types": [
          "array"
        ]
      },
      "multilingual": {
        "required": false,
        "default": null,
        "types": [
          "boolean"
        ]
      },
      "languages": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "language": {
        "required": false,
        "default": null,
        "types": [
          "string"
        ]
      },
      "locale": {
        "required": false,
        "default": null,
        "types": [
          "string"
        ]
      },
      "providers": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "useProviders": {
        "required": false,
        "default": null,
        "types": [
          "object"
        ]
      },
      "providerOptions": {
        "required": false,
        "default": null,
        "types": [
          "object"
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
      "onResponse": {
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
        "description": "Triggered when the form data is changed. (This event is used by `v-model` in Vue 2)",
        "params": {
          "value": {
            "description": "the new form value",
            "types": [
              "object"
            ]
          }
        },
        "private": true
      },
      "update:modelValue": {
        "description": "Triggered when the form data is changed. (This event is used by `v-model` in Vue 3)",
        "params": {
          "value": {
            "description": "the new form value",
            "types": [
              "object"
            ]
          }
        },
        "private": true
      },
      "change": {
        "description": "Triggered when the forms data is changed.",
        "params": {
          "newValue": {
            "description": "the new value",
            "types": [
              "string"
            ]
          },
          "oldValue": {
            "description": "the old value",
            "types": [
              "string"
            ]
          },
          "form$": {
            "description": "the form's component",
            "types": [
              "component"
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
        "description": "Triggered when the server returns 2XX response after submitting the form.",
        "params": {
          "response": {
            "description": "axios [Response](https://axios-http.com/docs/res_schema) object",
            "types": [
              "Response"
            ]
          },
          "form$": {
            "description": "the form's component",
            "types": [
              "component"
            ]
          }
        }
      },
      "error": {
        "description": "Triggered when an error is thrown when preparing elements or submitting the form.",
        "params": {
          "error": {
            "description": "the Error object",
            "types": [
              "Error"
            ]
          },
          "details": {
            "description": "additional information for the error, including `stage` property (`\"prepare|submit\"`) which indicates when the error was thrown.",
            "types": [
              "object"
            ]
          },
          "form$": {
            "description": "the form's component",
            "types": [
              "component"
            ]
          }
        }
      },
      "response": {
        "description": "Triggered when the server returns a response after submitting the form.",
        "params": {
          "response": {
            "description": "axios [Response](https://axios-http.com/docs/res_schema) object",
            "types": [
              "Response"
            ]
          },
          "form$": {
            "description": "the form's component",
            "types": [
              "component"
            ]
          }
        }
      },
      "language": {
        "description": "Triggered when a language is selected.",
        "params": {
          "language": {
            "description": "the selected language",
            "types": [
              "string"
            ]
          }
        }
      },
      "beforeCreate": {
        "description": "Triggered in beforeCreate hook.",
        "params": {
          "form$": {
            "description": "the form's component",
            "types": [
              "component"
            ]
          }
        }
      },
      "created": {
        "description": "Triggered in created hook.",
        "params": {
          "form$": {
            "description": "the form's component",
            "types": [
              "component"
            ]
          }
        }
      },
      "beforeMount": {
        "description": "Triggered in beforeMount hook.",
        "params": {
          "form$": {
            "description": "the form's component",
            "types": [
              "component"
            ]
          }
        }
      },
      "mounted": {
        "description": "Triggered in mounted hook.",
        "params": {
          "form$": {
            "description": "the form's component",
            "types": [
              "component"
            ]
          }
        }
      },
      "beforeUpdate": {
        "description": "Triggered in beforeUpdate hook.",
        "params": {
          "form$": {
            "description": "the form's component",
            "types": [
              "component"
            ]
          }
        }
      },
      "updated": {
        "description": "Triggered in updated hook.",
        "params": {
          "form$": {
            "description": "the form's component",
            "types": [
              "component"
            ]
          }
        }
      },
      "beforeUnmount": {
        "description": "Triggered in beforeUnmount (or beforeDestroy in Vue 2) hook.",
        "params": {
          "form$": {
            "description": "the form's component",
            "types": [
              "component"
            ]
          }
        }
      },
      "unmounted": {
        "description": "Triggered in unmounted (or destroyed in Vue 2) hook.",
        "params": {
          "form$": {
            "description": "the form's component",
            "types": [
              "component"
            ]
          }
        }
      }
    },
    "slots": {
      "default": {
        "description": ""
      },
      "empty": {
        "description": ""
      }
    },
    "views": []
  },
  "DatepickerWrapper": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "VueformElement"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "The classes instance (for testing purpose)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      },
      "config": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The flatpickr configuration object. Can be extended via [`options`](#options) with [flatpickr options](https://flatpickr.js.org/options/)."
      },
      "mode": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The current `options.mode`."
      },
      "locale": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The current locale object for flatpickr."
      }
    },
    "data": {
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
      },
      "init": {
        "public": false,
        "returns": "Promise",
        "description": "Initalizes the flatpickr."
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
      },
      "attrs": {
        "required": false,
        "default": "{}",
        "types": [
          "object"
        ]
      }
    },
    "events": {
      "change": {
        "description": "Triggered when the element's value is changed.",
        "params": {
          "newValue": {
            "description": "the new value",
            "types": [
              "string"
            ]
          },
          "oldValue": {
            "description": "the old value",
            "types": [
              "string"
            ]
          },
          "el$": {
            "description": "the element's component",
            "types": [
              "component"
            ]
          }
        }
      }
    },
    "slots": {},
    "views": []
  },
  "EditorWrapper": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "VueformElement"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "The classes instance (for testing purpose)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      }
    },
    "data": {
      "editor$": {
        "public": true,
        "default": "null",
        "types": [
          "HTMLElement"
        ],
        "description": "The [`Trix`](https://github.com/basecamp/trix) instance."
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
            "required": true,
            "description": "event"
          }
        }
      },
      "handleAttachmentAdd": {
        "public": false,
        "returns": "Promise",
        "description": "Handles `attachmentAdd` event.",
        "params": {
          "e": {
            "types": [
              "Event"
            ],
            "required": true,
            "description": "event"
          }
        }
      },
      "handleBlur": {
        "public": false,
        "returns": "void",
        "description": "Handles `blur` event."
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
          "string",
          "function",
          "promise"
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
      },
      "hideTools": {
        "required": false,
        "default": "[]",
        "types": [
          "array"
        ]
      },
      "attrs": {
        "required": false,
        "default": "{}",
        "types": [
          "object"
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
      },
      "error": {
        "description": "Triggered when file upload throws an error.",
        "params": {
          "error": {
            "description": "the Error object",
            "types": [
              "Error"
            ]
          }
        }
      },
      "blur": {
        "description": "Triggered when the input is blurred.",
        "params": {
          "el$": {
            "description": "the element's component",
            "types": [
              "component"
            ]
          }
        }
      }
    },
    "slots": {},
    "views": []
  },
  "CheckboxgroupCheckbox": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "VueformElement"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "The classes instance (for testing purpose)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      },
      "isDisabled": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the checkbox should be disabled."
      },
      "id": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "The `id` attribute of the input."
      },
      "name": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "The `name` attribute of the input."
      },
      "checked": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the checkbox is checked."
      }
    },
    "methods": {
      "handleKeydown": {
        "public": false,
        "returns": "void",
        "description": "Handles `keydown` event.",
        "params": {
          "e": {
            "types": [
              "Event"
            ],
            "required": true,
            "description": "event object "
          }
        }
      }
    },
    "props": {
      "item": {
        "required": true,
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "value": {
        "required": true,
        "types": [
          "string",
          "number"
        ]
      },
      "items": {
        "required": true,
        "types": [
          "object",
          "array"
        ]
      },
      "index": {
        "required": true,
        "types": [
          "number"
        ]
      },
      "attrs": {
        "required": false,
        "default": "{}",
        "types": [
          "object"
        ]
      }
    },
    "events": {},
    "slots": {},
    "views": [
      "blocks",
      "tabs"
    ]
  },
  "FilePreview": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "VueformElement"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "The classes instance (for testing purpose)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
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
        "description": "Whether the file should be clickable if it is already permantently uploaded."
      },
      "uploaded": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the temporary or permanent file is uploaded."
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
        "description": "The text for upload button. Can be also changed in the locale file: `vueform.elements.file.upload`"
      },
      "preview": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The image's preview when [`view`](#option-view) is `image` or `gallery`. Equals to the `link` if the file is already uploaded and `base64` if only selected or temporarily uploaded."
      },
      "ariaLabelledby": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The `aria-labelledby` attribute of the preview."
      },
      "ariaPlaceholder": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The `aria-placeholder` attribute of the preview."
      },
      "ariaRoledescription": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The `aria-roledescription` attribute of the preview."
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
      },
      "handleKeyup": {
        "public": false,
        "returns": "Promise",
        "description": "Handle the keyup event of the preview.",
        "params": {
          "event": {
            "types": [
              "Event"
            ],
            "required": true,
            "description": "the keyup Event"
          }
        }
      }
    },
    "props": {
      "attrs": {
        "required": false,
        "default": "{}",
        "types": [
          "object"
        ]
      }
    },
    "events": {},
    "slots": {},
    "views": [
      "image",
      "gallery"
    ]
  },
  "RadiogroupRadio": {
    "inject": {
      "el$": {
        "public": true,
        "types": [
          "VueformElement"
        ],
        "description": "The parent element's component."
      },
      "form$": {
        "public": true,
        "types": [
          "Vueform"
        ],
        "description": "The root form's component."
      },
      "Size": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The size of the component."
      },
      "theme": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The global theme object, which contains all the default templates and classes."
      }
    },
    "computed": {
      "View": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
      },
      "classesInstance": {
        "public": false,
        "types": [
          "MergeClasses"
        ],
        "description": "The classes instance (for testing purpose)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's classes."
      },
      "Templates": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "The list of templates available to the component."
      },
      "template": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The component's template."
      },
      "isDisabled": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the radio should be disabled."
      },
      "id": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "The `id` attribute of the input."
      },
      "name": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "The `name` attribute of the input."
      },
      "checked": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the radio is checked."
      }
    },
    "methods": {
      "handleKeydown": {
        "public": false,
        "returns": "void",
        "description": "Handles `keydown` event.",
        "params": {
          "e": {
            "types": [
              "Event"
            ],
            "required": true,
            "description": "event object "
          }
        }
      }
    },
    "props": {
      "item": {
        "required": true,
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "value": {
        "required": true,
        "types": [
          "string",
          "number"
        ]
      },
      "items": {
        "required": true,
        "types": [
          "object",
          "array"
        ]
      },
      "index": {
        "required": true,
        "types": [
          "number"
        ]
      },
      "attrs": {
        "required": false,
        "default": "{}",
        "types": [
          "object"
        ]
      }
    },
    "events": {},
    "slots": {},
    "views": [
      "blocks",
      "tabs"
    ]
  }
}