export default {
  "address": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "elements": {
        "public": false,
        "types": [
          "object"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "provider": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The Places API provider to use."
      },
      "options": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Additional options for [Google Places](https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions) or [Algolia Places](https://community.algolia.com/places/documentation.html#options) depending on the provider."
      },
      "readonly": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should be readonly."
      },
      "required": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Determines whether `required` rules should be added to address fields. Default: `false`"
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      }
    },
    "props": {},
    "data": {
      "addressId": {
        "public": true,
        "default": "\"address-*\"",
        "types": [
          "string"
        ],
        "description": ""
      },
      "children$Array": {
        "public": false,
        "types": [
          [
            "array",
            "Element"
          ]
        ],
        "description": ""
      },
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
        "description": ""
      },
      "locationService": {
        "public": true,
        "default": "null",
        "types": [
          "class"
        ],
        "description": "The location service that's initalized once the component is mounted."
      },
      "location": {
        "public": true,
        "default": "null",
        "types": [
          "class"
        ],
        "description": "The raw location object of location provider (Google/Algolia)."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "fields": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Fields of the address. By default has the following `text` type elements: `address`, `address2`, `zip`, `city`, `state`, `country`."
      },
      "children": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "Schema of child elements."
      },
      "children$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "defaultOptions": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Default options for flatpickr."
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
      },
      "component": {
        "public": false,
        "description": ""
      },
      "updateFields": {
        "public": true,
        "description": "Updates fields with address data.",
        "params": {
          "data": {
            "types": [
              "object"
            ],
            "required": false,
            "description": "an object containing address data"
          }
        }
      },
      "handleAddressChange": {
        "public": true,
        "description": "Handles location service's address change.",
        "params": {
          "data": {
            "types": [
              "object"
            ],
            "required": false,
            "description": "an object containing address data"
          },
          "raw": {
            "types": [
              "object"
            ],
            "required": false,
            "description": "an object containing raw address data (based on provider)"
          }
        }
      },
      "initLocationService": {
        "public": true,
        "returns": "void",
        "description": "Initalizes location service."
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": "Validates the element."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Cleans the element."
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Resets validators for children."
      },
      "initMessageBag": {
        "public": false,
        "description": ""
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {}
  },
  "button": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "buttonLabel": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": ""
      },
      "buttonType": {
        "public": true,
        "default": "\"button\"",
        "values": [
          "\"submit\"",
          "\"anchor\"",
          "\"button\""
        ],
        "types": [
          "string"
        ],
        "description": ""
      },
      "buttonClass": {
        "public": true,
        "default": "null",
        "types": [
          "string",
          "array",
          "object"
        ],
        "description": ""
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "function"
        ],
        "description": ""
      },
      "loading": {
        "public": true,
        "default": "false",
        "types": [
          "function"
        ],
        "description": ""
      },
      "href": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": ""
      },
      "target": {
        "public": true,
        "default": "\"_self\"",
        "types": [
          "string"
        ],
        "description": ""
      },
      "align": {
        "public": true,
        "default": "\"left\"",
        "types": [
          "string"
        ],
        "description": ""
      },
      "onClick": {
        "public": true,
        "default": "null",
        "types": [
          "function"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
        "description": ""
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "buttonComponent": {
        "public": false,
        "types": [
          [
            "component",
            "FormButton"
          ]
        ],
        "description": ""
      },
      "button": {
        "public": false,
        "types": [
          "object"
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {}
  },
  "buttons": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "buttons": {
        "public": false,
        "types": [
          "array"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      }
    },
    "props": {},
    "data": {
      "children$Array": {
        "public": false,
        "types": [
          [
            "array",
            "Element"
          ]
        ],
        "description": ""
      },
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
        "description": ""
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "children$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "children": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "Schema of child elements."
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "component": {
        "public": false,
        "returns": [
          [
            "component",
            "FormButton"
          ]
        ],
        "description": ""
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {}
  },
  "checkbox": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "trueValue": {
        "public": true,
        "default": "true",
        "types": [
          "str",
          "num",
          "bool"
        ],
        "description": "Value of the element if checkbox is *checked*."
      },
      "falseValue": {
        "public": true,
        "default": "false",
        "types": [
          "str",
          "num",
          "bool"
        ],
        "description": "Value of the element if checkbox is *unchecked*."
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "text": {
        "public": false,
        "types": [
          "string"
        ],
        "description": ""
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
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
      "handleChange": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "check": {
        "public": true,
        "returns": "void",
        "description": "Checks the checkbox.",
        "params": {
          "triggerChange": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "whether the element should trigger `change` event"
          }
        }
      },
      "uncheck": {
        "public": true,
        "returns": "void",
        "description": "Unhecks the checkbox.",
        "params": {
          "triggerChange": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "whether the element should trigger `change` event"
          }
        }
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      }
    }
  },
  "checkboxgroup": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disables": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "List of option keys to be disabled."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether all the items are *disabled*."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "items": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": ""
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "check": {
        "public": true,
        "returns": "void",
        "description": "Checks a checkbox or checkboxes.",
        "params": {
          "items": {
            "types": [
              "array",
              "string",
              "number"
            ],
            "required": true,
            "description": "key of one or more checkboxes to check."
          }
        }
      },
      "uncheck": {
        "public": true,
        "returns": "void",
        "description": "Unchecks a checkbox or checkboxes.",
        "params": {
          "items": {
            "types": [
              "array",
              "string",
              "number"
            ],
            "required": true,
            "description": "key of one or more checkboxes to uncheck."
          }
        }
      },
      "checkAll": {
        "public": true,
        "returns": "void",
        "description": "Checks all checkboxes."
      },
      "uncheckAll": {
        "public": true,
        "returns": "void",
        "description": "Checks all checkboxes."
      },
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disables an item or items.",
        "params": {
          "items": {
            "types": [
              "array",
              "string",
              "number"
            ],
            "required": true,
            "description": "Key of one or more items to disable."
          }
        }
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables an item or items.",
        "params": {
          "items": {
            "types": [
              "array",
              "string",
              "number"
            ],
            "required": true,
            "description": "Key of one or more items to enable."
          }
        }
      },
      "disableAll": {
        "public": true,
        "returns": "void",
        "description": "Disabled all items."
      },
      "enableAll": {
        "public": true,
        "returns": "void",
        "description": "Enables all items."
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
      "handleChange": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {},
      "checkbox": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      }
    }
  },
  "date": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "Date"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "floating": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The floating label of the element."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "displayFormat": {
        "public": true,
        "default": "\"locale.elements.date.displayFormat\"",
        "types": [
          "string"
        ],
        "description": "Defines how date should be formatted in the input field."
      },
      "valueFormat": {
        "public": true,
        "default": "\"YYYY-MM-DD\"",
        "types": [
          "string"
        ],
        "description": "Defines how date should be formatted in `value`. If `false` Date object will be used."
      },
      "loadFormat": {
        "public": true,
        "default": "\"YYYY-MM-DD\"",
        "types": [
          "string"
        ],
        "description": "Defines how date is formatted when using `load` or `update` method or by directly setting `value`. When using \"formatLoad\" this should be the output format of that."
      },
      "disables": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "List of dates to be disabled."
      },
      "min": {
        "public": true,
        "default": "null",
        "types": [
          "string",
          "Date"
        ],
        "description": "Earliest selectable date. Can be a string in `[loadFormat](#prop-loadFormat)` or a Date object."
      },
      "max": {
        "public": true,
        "default": "null",
        "types": [
          "string",
          "Date"
        ],
        "description": "Latest selectable date. Can be a string in `[loadFormat](#prop-loadFormat)` or a Date object."
      },
      "options": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Additional [options](https://flatpickr.js.org/options/) for flatpickr."
      },
      "placeholder": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The placeholder of the element."
      },
      "readonly": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should be readonly."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "empty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no value filled in."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "hasDate": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine the element has date."
      },
      "hasTime": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine the element has time."
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "model": {
        "public": false,
        "description": ""
      },
      "value": {
        "public": false,
        "description": ""
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
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
      "handleChange": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      }
    }
  },
  "dates": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "array"
        ],
        "description": ""
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "floating": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The floating label of the element."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "mode": {
        "public": true,
        "default": "\"single\"",
        "types": [
          "string"
        ],
        "description": "Flatpickr's mode option. Possible values: `multiple` or `range`."
      },
      "options": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Additional [options](https://flatpickr.js.org/options/) for flatpickr."
      },
      "displayFormat": {
        "public": true,
        "default": "\"locale.elements.date.displayFormat\"",
        "types": [
          "string"
        ],
        "description": "Defines how date should be formatted in the input field."
      },
      "valueFormat": {
        "public": true,
        "default": "\"YYYY-MM-DD\"",
        "types": [
          "string"
        ],
        "description": "Defines how date should be formatted in `value`. If `false` Date object will be used."
      },
      "loadFormat": {
        "public": true,
        "default": "\"YYYY-MM-DD\"",
        "types": [
          "string"
        ],
        "description": "Defines how date is formatted when using `load` or `update` method or by directly setting `value`. When using \"formatLoad\" this should be the output format of that."
      },
      "min": {
        "public": true,
        "default": "null",
        "types": [
          "string",
          "Date"
        ],
        "description": "Earliest selectable date. Can be a string in `[loadFormat](#prop-loadFormat)` or a Date object."
      },
      "max": {
        "public": true,
        "default": "null",
        "types": [
          "string",
          "Date"
        ],
        "description": "Latest selectable date. Can be a string in `[loadFormat](#prop-loadFormat)` or a Date object."
      },
      "disables": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "List of dates to be disabled."
      },
      "placeholder": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The placeholder of the element."
      },
      "readonly": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should be readonly."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "empty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no value filled in."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "hasDate": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine the element has date."
      },
      "hasTime": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine the element has time."
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "model": {
        "public": false,
        "description": ""
      },
      "value": {
        "public": false,
        "description": ""
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "array"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "array"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
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
      "handleChange": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      }
    }
  },
  "datetime": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "Date"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "floating": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The floating label of the element."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "seconds": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "hour24": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Determines if the time should use 24 hours format."
      },
      "displayFormat": {
        "public": true,
        "default": "\"from locale\"",
        "types": [
          "string"
        ],
        "description": "Defines how date should be formatted in the input field."
      },
      "valueFormat": {
        "public": true,
        "default": "\"YYYY-MM-DD\"",
        "types": [
          "string"
        ],
        "description": "Defines how date should be formatted in `value`. If `false` Date object will be used."
      },
      "loadFormat": {
        "public": true,
        "default": "\"YYYY-MM-DD\"",
        "types": [
          "string"
        ],
        "description": "Defines how date is formatted when using `load` or `update` method or by directly setting `value`."
      },
      "options": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Additional [options](https://flatpickr.js.org/options/) for flatpickr."
      },
      "min": {
        "public": true,
        "default": "null",
        "types": [
          "string",
          "Date"
        ],
        "description": "Earliest selectable date. Can be a string in `[loadFormat](#prop-loadFormat)` or a Date object."
      },
      "max": {
        "public": true,
        "default": "null",
        "types": [
          "string",
          "Date"
        ],
        "description": "Latest selectable date. Can be a string in `[loadFormat](#prop-loadFormat)` or a Date object."
      },
      "disables": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "List of dates to be disabled."
      },
      "placeholder": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The placeholder of the element."
      },
      "readonly": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should be readonly."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "empty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no value filled in."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "hasDate": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine the element has date."
      },
      "hasTime": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine the element has time."
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "model": {
        "public": false,
        "description": ""
      },
      "value": {
        "public": false,
        "description": ""
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
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
      "handleChange": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      }
    }
  },
  "file": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element. Setting the value will overwrite compoent classes. Eg. `classes: { ElementLabel: { label: 'my-label-class' } }` will replace `ElementLabel`'s `label` class with `my-label-class`."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "drop": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "accept": {
        "public": true,
        "default": "false",
        "types": [
          "string",
          "array"
        ],
        "description": ""
      },
      "clickable": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "auto": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "methods": {
        "public": true,
        "default": "config.methods.file",
        "types": [
          "object"
        ],
        "description": ""
      },
      "endpoints": {
        "public": true,
        "default": "config.endpoints.file",
        "types": [
          "object"
        ],
        "description": ""
      },
      "url": {
        "public": true,
        "types": [
          "string"
        ],
        "description": ""
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "file": {
        "public": true,
        "default": "null",
        "types": [
          "File",
          "object",
          "string"
        ],
        "description": ""
      },
      "base64": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": ""
      },
      "progress": {
        "public": true,
        "default": "0",
        "types": [
          "number"
        ],
        "description": ""
      },
      "preparing": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "removing": {
        "public": false,
        "description": ""
      },
      "request": {
        "public": false,
        "description": ""
      },
      "axios": {
        "public": false,
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "canDrop": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "empty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no value filled in."
      },
      "stage": {
        "public": true,
        "types": [
          "number"
        ],
        "description": ""
      },
      "filename": {
        "public": true,
        "types": [
          "string"
        ],
        "description": ""
      },
      "link": {
        "public": true,
        "types": [
          "string"
        ],
        "description": ""
      },
      "uploaded": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "canRemove": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "canUploadTemp": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "canSelect": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "previewOptions": {
        "public": true,
        "types": [
          "object"
        ],
        "description": ""
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "uploading": {
        "public": false,
        "description": ""
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending`, `debouncing` or `uploading`."
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "value": {
        "public": false,
        "description": ""
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
      },
      "handleDrop": {
        "public": false,
        "returns": "void",
        "description": "",
        "params": {
          "e": {
            "types": [
              "Event"
            ],
            "required": false,
            "description": ""
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
      "uploadTemp": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "remove": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "handleChange": {
        "public": false,
        "returns": "void",
        "description": "",
        "params": {
          "e": {
            "types": [
              "Event"
            ],
            "required": true,
            "description": ""
          }
        }
      },
      "handleClick": {
        "public": false,
        "returns": "void",
        "description": "Triggered when an uploader is clicked."
      },
      "handleUploadTemp": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "handleRemove": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "handleAbort": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "handleError": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the trix editor throws an error during file upload (for example not accepted file types). If no event is attached browsers default `alert()` function will be used.",
        "params": {
          "message": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "message to display."
          },
          "e": {
            "types": [
              "Event"
            ],
            "required": true,
            "description": ""
          }
        }
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": "Validates the element. File element will only validate for `min`, `max`, `between`, `size`, `mimetypes` and `mimes` rules before the temporary files are uploaded."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {},
      "progress": {},
      "preview": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      },
      "remove": {},
      "error": {}
    }
  },
  "gallery": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element. Setting the value will overwrite compoent classes. Eg. `classes: { ElementLabel: { label: 'my-label-class' } }` will replace `ElementLabel`'s `label` class with `my-label-class`."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "drop": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "accept": {
        "public": false,
        "types": [
          "string",
          "array"
        ],
        "description": ""
      },
      "order": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The default order direction of list items when data is loaded. Possible values: `null`, `'ASC'`, `'DESC'`."
      },
      "orderBy": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "When using an object list the list items will be ordered by this element's values. If `storeOrder` is defined, `orderBy` will be equal to that unless specified otherwise."
      },
      "auto": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "object": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "file": {
        "public": false,
        "types": [
          "object"
        ],
        "description": ""
      },
      "storeFile": {
        "public": false,
        "types": [
          "string"
        ],
        "description": ""
      },
      "fields": {
        "public": false,
        "types": [
          "object"
        ],
        "description": ""
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "sort": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the list items can be sorted by drag n drop."
      },
      "storeOrder": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The name of the element which should contain the order of the list item in case of an object list."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "instances": {
        "public": true,
        "types": [
          "array"
        ],
        "description": ""
      },
      "children$Array": {
        "public": false,
        "types": [
          [
            "array",
            "Element"
          ]
        ],
        "description": ""
      },
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "children$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "next": {
        "public": true,
        "types": [
          "number"
        ],
        "description": "Helper method used to retrieve the next key for a new instance."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "canDrop": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "prototype": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The schema of a child."
      },
      "isObject": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the list items are objects."
      },
      "sortable": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "validatorErrors": {
        "public": false,
        "description": ""
      },
      "childrenErrors": {
        "public": false,
        "description": ""
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The element's error."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "add": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "object",
              "array",
              "string",
              "number",
              "boolean"
            ],
            "required": false,
            "description": " "
          }
        }
      },
      "insert": {
        "public": true,
        "returns": "number",
        "description": "",
        "params": {
          "value": {
            "types": [
              "object",
              "array",
              "string",
              "number",
              "boolean"
            ],
            "required": false,
            "description": " "
          }
        }
      },
      "remove": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "index": {
            "types": [
              "number"
            ],
            "required": true,
            "description": "  "
          }
        }
      },
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "handleAdd": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "handleRemove": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user removes a list item or `.remove()` method is invoked.",
        "params": {
          "index": {
            "types": [
              "number"
            ],
            "required": true,
            "description": "Index of child to be removed."
          }
        }
      },
      "setInitialInstances": {
        "public": false,
        "returns": "void",
        "description": "Sets initial instances when the element is initalized."
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
      },
      "handleDrop": {
        "public": false,
        "returns": "void",
        "description": "",
        "params": {
          "e": {
            "types": [
              "Event"
            ],
            "required": false,
            "description": ""
          }
        }
      },
      "component": {
        "public": false,
        "description": ""
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
      "handleChange": {
        "public": false,
        "description": ""
      },
      "handleClick": {
        "public": false,
        "description": ""
      },
      "refreshOrderStore": {
        "public": false,
        "returns": "void",
        "description": "Helper method used to refresh the element's value which stores the order."
      },
      "handleSort": {
        "public": true,
        "description": "Triggered when the user changes the order of the list items.",
        "params": {
          "indexes": {
            "types": [
              "object"
            ],
            "required": false,
            "description": "an object containing `newIndex` and `oldIndex`."
          }
        }
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": "Validates the element."
      },
      "validateValidators": {
        "public": false,
        "returns": "void",
        "description": "Validates the element."
      },
      "validateChildren": {
        "public": false,
        "returns": "void",
        "description": "Validates each children."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Cleans the element."
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Resets validators for children."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      },
      "add": {},
      "remove": {},
      "sort": {}
    }
  },
  "group": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "elements": {
        "public": false,
        "types": [
          "object"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      }
    },
    "props": {},
    "data": {
      "children$Array": {
        "public": false,
        "types": [
          [
            "array",
            "Element"
          ]
        ],
        "description": ""
      },
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
        "description": ""
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "children": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "Schema of child elements."
      },
      "children$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "component": {
        "public": false,
        "description": ""
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": "Validates the element."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Cleans the element."
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Resets validators for children."
      },
      "initMessageBag": {
        "public": false,
        "description": ""
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {}
  },
  "hidden": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      }
    },
    "computed": {
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "empty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no value filled in."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      }
    },
    "inject": {
      "form$": {
        "public": false,
        "description": ""
      }
    },
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
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
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      }
    },
    "slots": {},
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      }
    }
  },
  "image": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element. Setting the value will overwrite compoent classes. Eg. `classes: { ElementLabel: { label: 'my-label-class' } }` will replace `ElementLabel`'s `label` class with `my-label-class`."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "drop": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "url": {
        "public": true,
        "types": [
          "string"
        ],
        "description": ""
      },
      "endpoints": {
        "public": true,
        "default": "config.endpoints.file",
        "types": [
          "object"
        ],
        "description": ""
      },
      "methods": {
        "public": true,
        "default": "config.methods.file",
        "types": [
          "object"
        ],
        "description": ""
      },
      "auto": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "accept": {
        "public": true,
        "default": "false",
        "types": [
          "string",
          "array"
        ],
        "description": ""
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "preparing": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "progress": {
        "public": true,
        "default": "0",
        "types": [
          "number"
        ],
        "description": ""
      },
      "base64": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": ""
      },
      "file": {
        "public": true,
        "default": "null",
        "types": [
          "File",
          "object",
          "string"
        ],
        "description": ""
      },
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "removing": {
        "public": false,
        "description": ""
      },
      "request": {
        "public": false,
        "description": ""
      },
      "axios": {
        "public": false,
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "canDrop": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "empty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no value filled in."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "canSelect": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "canUploadTemp": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "canRemove": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "uploaded": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "filename": {
        "public": true,
        "types": [
          "string"
        ],
        "description": ""
      },
      "stage": {
        "public": true,
        "types": [
          "number"
        ],
        "description": ""
      },
      "link": {
        "public": true,
        "types": [
          "string"
        ],
        "description": ""
      },
      "preview": {
        "public": true,
        "types": [
          "string"
        ],
        "description": ""
      },
      "previewOptions": {
        "public": true,
        "types": [
          "object"
        ],
        "description": ""
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "uploading": {
        "public": false,
        "description": ""
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending`, `debouncing` or `uploading`."
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "value": {
        "public": false,
        "description": ""
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
      },
      "handleDrop": {
        "public": false,
        "returns": "void",
        "description": "",
        "params": {
          "e": {
            "types": [
              "Event"
            ],
            "required": false,
            "description": ""
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
      "handleError": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the trix editor throws an error during file upload (for example not accepted file types). If no event is attached browsers default `alert()` function will be used.",
        "params": {
          "message": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "message to display."
          },
          "e": {
            "types": [
              "Event"
            ],
            "required": true,
            "description": ""
          }
        }
      },
      "handleAbort": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "handleRemove": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "handleUploadTemp": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "handleClick": {
        "public": false,
        "returns": "void",
        "description": "Triggered when an uploader is clicked."
      },
      "handleChange": {
        "public": false,
        "returns": "void",
        "description": "",
        "params": {
          "e": {
            "types": [
              "Event"
            ],
            "required": true,
            "description": ""
          }
        }
      },
      "remove": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "uploadTemp": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": "Validates the element. File element will only validate for `min`, `max`, `between`, `size`, `mimetypes` and `mimes` rules before the temporary files are uploaded."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {},
      "progress": {},
      "preview": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      },
      "remove": {},
      "error": {}
    }
  },
  "key": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      }
    },
    "computed": {
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "empty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no value filled in."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      }
    },
    "inject": {
      "form$": {
        "public": false,
        "description": ""
      }
    },
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
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
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      }
    },
    "slots": {},
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      }
    }
  },
  "list": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element. Setting the value will overwrite compoent classes. Eg. `classes: { ElementLabel: { label: 'my-label-class' } }` will replace `ElementLabel`'s `label` class with `my-label-class`."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "initial": {
        "public": true,
        "default": "1",
        "types": [
          "number"
        ],
        "description": "Initial number of child instances."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "order": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The default order direction of list items when data is loaded. Possible values: `null`, `'ASC'`, `'DESC'`."
      },
      "orderBy": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "When using an object list the list items will be ordered by this element's values. If `storeOrder` is defined, `orderBy` will be equal to that unless specified otherwise."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "sort": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the list items can be sorted by drag n drop."
      },
      "storeOrder": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The name of the element which should contain the order of the list item in case of an object list."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "instances": {
        "public": true,
        "types": [
          "array"
        ],
        "description": ""
      },
      "children$Array": {
        "public": false,
        "types": [
          [
            "array",
            "Element"
          ]
        ],
        "description": ""
      },
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "children$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "next": {
        "public": true,
        "types": [
          "number"
        ],
        "description": "Helper method used to retrieve the next key for a new instance."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "prototype": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The schema of a child."
      },
      "isObject": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the list items are objects."
      },
      "sortable": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "validatorErrors": {
        "public": false,
        "description": ""
      },
      "childrenErrors": {
        "public": false,
        "description": ""
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The element's error."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "add": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "object",
              "array",
              "string",
              "number",
              "boolean"
            ],
            "required": false,
            "description": " "
          }
        }
      },
      "insert": {
        "public": true,
        "returns": "number",
        "description": "",
        "params": {
          "value": {
            "types": [
              "object",
              "array",
              "string",
              "number",
              "boolean"
            ],
            "required": false,
            "description": " "
          }
        }
      },
      "remove": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "index": {
            "types": [
              "number"
            ],
            "required": true,
            "description": "  "
          }
        }
      },
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "handleAdd": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "handleRemove": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user removes a list item or `.remove()` method is invoked.",
        "params": {
          "index": {
            "types": [
              "number"
            ],
            "required": true,
            "description": "Index of child to be removed."
          }
        }
      },
      "setInitialInstances": {
        "public": false,
        "returns": "void",
        "description": "Sets initial instances when the element is initalized."
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
      },
      "component": {
        "public": false,
        "description": ""
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
      "refreshOrderStore": {
        "public": false,
        "returns": "void",
        "description": "Helper method used to refresh the element's value which stores the order."
      },
      "handleSort": {
        "public": true,
        "description": "Triggered when the user changes the order of the list items.",
        "params": {
          "indexes": {
            "types": [
              "object"
            ],
            "required": false,
            "description": "an object containing `newIndex` and `oldIndex`."
          }
        }
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": "Validates the element."
      },
      "validateValidators": {
        "public": false,
        "returns": "void",
        "description": "Validates the element."
      },
      "validateChildren": {
        "public": false,
        "returns": "void",
        "description": "Validates each children."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Cleans the element."
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Resets validators for children."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      },
      "add": {},
      "remove": {},
      "sort": {}
    }
  },
  "location": {
    "options": {
      "addons": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "An object containing `before` and `after` properties, representing the contents of the input's before and after addons."
      },
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "displayKey": {
        "public": true,
        "default": "\"formatted_address\"",
        "types": [
          "string"
        ],
        "description": "The name of object key which contains the address that should be displayed to the user in the input field when [`.load`](#method-load) or [`.update`](#method-load) method is used. If you are using [`loadFormat`](#option-loadFormat) it should be the key in the **formatted** object. Default: \"formatted_address\"."
      },
      "floating": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The floating label of the element."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "provider": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The Places API provider to use."
      },
      "options": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Additional options for [Google Places](https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions) or [Algolia Places](https://community.algolia.com/places/documentation.html#options) depending on the provider."
      },
      "placeholder": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The placeholder of the element."
      },
      "readonly": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should be readonly."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "locationService": {
        "public": true,
        "default": "null",
        "types": [
          "class"
        ],
        "description": "The location service that's initalized once the component is mounted."
      },
      "location": {
        "public": true,
        "default": "null",
        "types": [
          "class"
        ],
        "description": "The raw location object of location provider (Google/Algolia)."
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "hasAddon": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if the element has any addons."
      },
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "empty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no value filled in."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "defaultOptions": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Default options for flatpickr."
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "value": {
        "public": false,
        "description": ""
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
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
      "initLocationService": {
        "public": true,
        "returns": "void",
        "description": "Initalizes location service."
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      }
    }
  },
  "meta": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
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
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      }
    },
    "computed": {
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "empty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no value filled in."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      }
    },
    "inject": {
      "form$": {
        "public": false,
        "description": ""
      }
    },
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
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
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      }
    },
    "slots": {},
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      }
    }
  },
  "multifile": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element. Setting the value will overwrite compoent classes. Eg. `classes: { ElementLabel: { label: 'my-label-class' } }` will replace `ElementLabel`'s `label` class with `my-label-class`."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "drop": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "accept": {
        "public": false,
        "types": [
          "string",
          "array"
        ],
        "description": ""
      },
      "order": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The default order direction of list items when data is loaded. Possible values: `null`, `'ASC'`, `'DESC'`."
      },
      "orderBy": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "When using an object list the list items will be ordered by this element's values. If `storeOrder` is defined, `orderBy` will be equal to that unless specified otherwise."
      },
      "auto": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "object": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "file": {
        "public": false,
        "types": [
          "object"
        ],
        "description": ""
      },
      "fields": {
        "public": false,
        "types": [
          "object"
        ],
        "description": ""
      },
      "storeFile": {
        "public": false,
        "types": [
          "string"
        ],
        "description": ""
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "sort": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the list items can be sorted by drag n drop."
      },
      "storeOrder": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The name of the element which should contain the order of the list item in case of an object list."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "instances": {
        "public": true,
        "types": [
          "array"
        ],
        "description": ""
      },
      "children$Array": {
        "public": false,
        "types": [
          [
            "array",
            "Element"
          ]
        ],
        "description": ""
      },
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "children$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "next": {
        "public": true,
        "types": [
          "number"
        ],
        "description": "Helper method used to retrieve the next key for a new instance."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "canDrop": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "prototype": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "The schema of a child."
      },
      "isObject": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the list items are objects."
      },
      "sortable": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "validatorErrors": {
        "public": false,
        "description": ""
      },
      "childrenErrors": {
        "public": false,
        "description": ""
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The element's error."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "add": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "object",
              "array",
              "string",
              "number",
              "boolean"
            ],
            "required": false,
            "description": " "
          }
        }
      },
      "insert": {
        "public": true,
        "returns": "number",
        "description": "",
        "params": {
          "value": {
            "types": [
              "object",
              "array",
              "string",
              "number",
              "boolean"
            ],
            "required": false,
            "description": " "
          }
        }
      },
      "remove": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "index": {
            "types": [
              "number"
            ],
            "required": true,
            "description": "  "
          }
        }
      },
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "handleAdd": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "handleRemove": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user removes a list item or `.remove()` method is invoked.",
        "params": {
          "index": {
            "types": [
              "number"
            ],
            "required": true,
            "description": "Index of child to be removed."
          }
        }
      },
      "setInitialInstances": {
        "public": false,
        "returns": "void",
        "description": "Sets initial instances when the element is initalized."
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
      },
      "handleDrop": {
        "public": false,
        "returns": "void",
        "description": "",
        "params": {
          "e": {
            "types": [
              "Event"
            ],
            "required": false,
            "description": ""
          }
        }
      },
      "component": {
        "public": false,
        "description": ""
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
      "handleChange": {
        "public": false,
        "description": ""
      },
      "handleClick": {
        "public": false,
        "description": ""
      },
      "refreshOrderStore": {
        "public": false,
        "returns": "void",
        "description": "Helper method used to refresh the element's value which stores the order."
      },
      "handleSort": {
        "public": true,
        "description": "Triggered when the user changes the order of the list items.",
        "params": {
          "indexes": {
            "types": [
              "object"
            ],
            "required": false,
            "description": "an object containing `newIndex` and `oldIndex`."
          }
        }
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": "Validates the element."
      },
      "validateValidators": {
        "public": false,
        "returns": "void",
        "description": "Validates the element."
      },
      "validateChildren": {
        "public": false,
        "returns": "void",
        "description": "Validates each children."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Cleans the element."
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Resets validators for children."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      },
      "add": {},
      "remove": {},
      "sort": {}
    }
  },
  "multiselect": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "floating": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The floating label of the element."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "items": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": ""
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "options": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Additional [options](https://vue-multiselect.js.org/#sub-props) for the select."
      },
      "native": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Determines whether the native select should be used by default."
      },
      "search": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Determines whether the select options are searchable."
      },
      "placeholder": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The placeholder of the element."
      },
      "readonly": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should be readonly."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "empty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no value filled in."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "nativeItems": {
        "public": true,
        "types": [
          "array"
        ],
        "description": ""
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "isNative": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Determines if the native select is used."
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
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
      "handleChange": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "handleInput": {
        "public": true,
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "handleSelect": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user selects an option using non-native element.",
        "params": {
          "option": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "the selected option object."
          }
        }
      },
      "handleDeselect": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user deselects an option using non-native element. Does not trigger when an *other* element gets selected.",
        "params": {
          "option": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "the deselected option object."
          }
        }
      },
      "handleSearchChange": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user changes the search criteria using non-native element.",
        "params": {
          "searchQuery": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "the current search query."
          }
        }
      },
      "handleOpen": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the option list is opened using non-native element."
      },
      "handleClose": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the option list is closed using non-native element."
      },
      "handleTag": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user creates a tag using non-native element.",
        "params": {
          "searchQuery": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "the current search query."
          }
        }
      },
      "updateItems": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "disable": {
            "types": [
              "boolean"
            ],
            "required": true,
            "description": ""
          }
        }
      },
      "select": {
        "public": true,
        "returns": "void",
        "description": "Selects an option.",
        "params": {
          "option": {
            "types": [
              "str",
              "num"
            ],
            "required": false,
            "description": "the key of option to select."
          }
        }
      },
      "deselect": {
        "public": true,
        "returns": "void",
        "description": "Deselects an option.",
        "params": {
          "option": {
            "types": [
              "str",
              "num"
            ],
            "required": false,
            "description": "the key of option to deselect."
          }
        }
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {},
      "beforelist": {},
      "afterlist": {},
      "multiplelabel": {},
      "noresults": {},
      "nooptions": {},
      "option": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      },
      "select": {},
      "deselect": {},
      "searchChange": {},
      "open": {},
      "close": {}
    }
  },
  "object": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "elements": {
        "public": false,
        "types": [
          "object"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      }
    },
    "props": {},
    "data": {
      "children$Array": {
        "public": false,
        "types": [
          [
            "array",
            "Element"
          ]
        ],
        "description": ""
      },
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
        "description": ""
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "children": {
        "public": false,
        "types": [
          "object"
        ],
        "description": "Schema of child elements."
      },
      "children$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "component": {
        "public": false,
        "description": ""
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": "Validates the element."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Cleans the element."
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Resets validators for children."
      },
      "initMessageBag": {
        "public": false,
        "description": ""
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {}
  },
  "password": {
    "options": {
      "addons": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "An object containing `before` and `after` properties, representing the contents of the input's before and after addons."
      },
      "autocomplete": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "The `autocomplete` attribute of the input field."
      },
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "floating": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The floating label of the element."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "placeholder": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The placeholder of the element."
      },
      "readonly": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should be readonly."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "hasAddon": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if the element has any addons."
      },
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "empty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no value filled in."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "inputType": {
        "public": true,
        "types": [
          "string"
        ],
        "description": ""
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
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
      "handleInput": {
        "public": true,
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      }
    }
  },
  "radio": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "fieldName": {
        "public": true,
        "default": "\"=name\"",
        "types": [
          "string"
        ],
        "description": "Name of the input field."
      },
      "radioValue": {
        "public": true,
        "default": "\"1\"",
        "types": [
          "str",
          "num",
          "bool"
        ],
        "description": "Value of the radio button."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "text": {
        "public": false,
        "types": [
          "string"
        ],
        "description": ""
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
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
      "handleChange": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "check": {
        "public": true,
        "returns": "void",
        "description": "Checks the radio.",
        "params": {
          "triggerChange": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "whether the element should trigger `change` event"
          }
        }
      },
      "uncheck": {
        "public": true,
        "returns": "void",
        "description": "Unhecks the radio.",
        "params": {
          "triggerChange": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "whether the element should trigger `change` event"
          }
        }
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      }
    }
  },
  "radiogroup": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disables": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "List of option keys to be disabled."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether all the items are *disabled*."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "items": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": ""
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disables an item or items.",
        "params": {
          "items": {
            "types": [
              "array",
              "string",
              "number"
            ],
            "required": true,
            "description": "Key of one or more items to disable."
          }
        }
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables an item or items.",
        "params": {
          "items": {
            "types": [
              "array",
              "string",
              "number"
            ],
            "required": true,
            "description": "Key of one or more items to enable."
          }
        }
      },
      "disableAll": {
        "public": true,
        "returns": "void",
        "description": "Disabled all items."
      },
      "enableAll": {
        "public": true,
        "returns": "void",
        "description": "Enables all items."
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
      "handleChange": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {},
      "radio": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      }
    }
  },
  "select": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "floating": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The floating label of the element."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "items": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": ""
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "native": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Determines whether the native select should be used by default."
      },
      "search": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Determines whether the select options are searchable."
      },
      "options": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Additional [options](https://vue-multiselect.js.org/#sub-props) for the select."
      },
      "placeholder": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The placeholder of the element."
      },
      "readonly": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should be readonly."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "empty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no value filled in."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "nativeItems": {
        "public": true,
        "types": [
          "array"
        ],
        "description": ""
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "isNative": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Determines if the native select is used."
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "model": {
        "public": false,
        "description": ""
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
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
      "handleChange": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "handleInput": {
        "public": true,
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "handleSelect": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user selects an option using non-native element.",
        "params": {
          "option": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "the selected option object."
          }
        }
      },
      "handleDeselect": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user deselects an option using non-native element. Does not trigger when an *other* element gets selected.",
        "params": {
          "option": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "the deselected option object."
          }
        }
      },
      "handleSearchChange": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user changes the search criteria using non-native element.",
        "params": {
          "searchQuery": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "the current search query."
          }
        }
      },
      "handleOpen": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the option list is opened using non-native element."
      },
      "handleClose": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the option list is closed using non-native element."
      },
      "handleTag": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user creates a tag using non-native element.",
        "params": {
          "searchQuery": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "the current search query."
          }
        }
      },
      "updateItems": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "disable": {
            "types": [
              "boolean"
            ],
            "required": true,
            "description": ""
          }
        }
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {},
      "beforelist": {},
      "afterlist": {},
      "singlelabel": {},
      "noresults": {},
      "nooptions": {},
      "option": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      },
      "select": {},
      "deselect": {},
      "searchChange": {},
      "open": {},
      "close": {}
    }
  },
  "slider": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "min": {
        "public": false,
        "types": [
          "number"
        ],
        "description": ""
      },
      "max": {
        "public": false,
        "types": [
          "number"
        ],
        "description": ""
      },
      "step": {
        "public": false,
        "types": [
          "number"
        ],
        "description": ""
      },
      "tooltips": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "merge": {
        "public": false,
        "types": [
          "number"
        ],
        "description": ""
      },
      "format": {
        "public": false,
        "types": [
          "object",
          "function"
        ],
        "description": ""
      },
      "orientation": {
        "public": false,
        "types": [
          "string"
        ],
        "description": ""
      },
      "direction": {
        "public": false,
        "types": [
          "string"
        ],
        "description": ""
      },
      "height": {
        "public": false,
        "types": [
          "string"
        ],
        "description": ""
      },
      "options": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Additional [options](https://nightcatsama.github.io/vue-slider-component/#/api/props) for slider."
      },
      "readonly": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should be readonly."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
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
      "handleChange": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "validate": {
        "public": false,
        "description": ""
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      }
    }
  },
  "static": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "wrap": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the content should be rendered in a standard element layout."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "content": {
        "public": true,
        "types": [
          "obj",
          "str"
        ],
        "description": "Content to be rendered. Either a string, HTML or a Vue component."
      },
      "isHtml": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if HTML content should be rendered for the element."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {}
  },
  "tags": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "floating": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The floating label of the element."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "items": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": ""
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "create": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "search": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "options": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Additional [options](https://vue-multiselect.js.org/#sub-props) for the select."
      },
      "placeholder": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The placeholder of the element."
      },
      "readonly": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should be readonly."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "empty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no value filled in."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "nativeItems": {
        "public": true,
        "types": [
          "array"
        ],
        "description": ""
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "native": {
        "public": false,
        "description": ""
      },
      "isNative": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
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
      "handleInput": {
        "public": true,
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "handleSelect": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user selects an option using non-native element.",
        "params": {
          "option": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "the selected option object."
          }
        }
      },
      "handleDeselect": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user deselects an option using non-native element. Does not trigger when an *other* element gets selected.",
        "params": {
          "option": {
            "types": [
              "object"
            ],
            "required": true,
            "description": "the deselected option object."
          }
        }
      },
      "handleSearchChange": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user changes the search criteria using non-native element.",
        "params": {
          "searchQuery": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "the current search query."
          }
        }
      },
      "handleOpen": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the option list is opened using non-native element."
      },
      "handleClose": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the option list is closed using non-native element."
      },
      "handleTag": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user creates a tag. Only gets fired if [`create`](#option-create) is `true`.",
        "params": {
          "searchQuery": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "the current search query."
          }
        }
      },
      "updateItems": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "disable": {
            "types": [
              "boolean"
            ],
            "required": true,
            "description": ""
          }
        }
      },
      "select": {
        "public": true,
        "returns": "void",
        "description": "Selects an option.",
        "params": {
          "option": {
            "types": [
              "str",
              "num"
            ],
            "required": false,
            "description": "the key of option to select."
          }
        }
      },
      "deselect": {
        "public": true,
        "returns": "void",
        "description": "Deselects an option.",
        "params": {
          "option": {
            "types": [
              "str",
              "num"
            ],
            "required": false,
            "description": "the key of option to deselect."
          }
        }
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {},
      "beforelist": {},
      "afterlist": {},
      "noresults": {},
      "nooptions": {},
      "option": {},
      "tag": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      },
      "select": {},
      "deselect": {},
      "searchChange": {},
      "open": {},
      "close": {},
      "tag": {}
    }
  },
  "textarea": {
    "options": {
      "addons": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "An object containing `before` and `after` properties, representing the contents of the input's before and after addons."
      },
      "autogrow": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the textarea should grow."
      },
      "rows": {
        "public": true,
        "default": "3",
        "types": [
          "number"
        ],
        "description": "The `rows` attribute of the textarea."
      },
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "floating": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The floating label of the element."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "placeholder": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The placeholder of the element."
      },
      "readonly": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should be readonly."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "hasAddon": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if the element has any addons."
      },
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "empty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no value filled in."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "autosize": {
        "public": true,
        "returns": "void",
        "description": "Refreshes size."
      },
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
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
      "handleInput": {
        "public": true,
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      }
    }
  },
  "text": {
    "options": {
      "addons": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "An object containing `before` and `after` properties, representing the contents of the input's before and after addons."
      },
      "autocomplete": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "The `autocomplete` attribute of the input field."
      },
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "floating": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The floating label of the element."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "inputType": {
        "public": true,
        "default": "\"text\"",
        "types": [
          "string"
        ],
        "description": "The HTML type of input field (like type=\"text\")."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "placeholder": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The placeholder of the element."
      },
      "readonly": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should be readonly."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "hasAddon": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if the element has any addons."
      },
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "empty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no value filled in."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
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
      "handleInput": {
        "public": true,
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      }
    }
  },
  "time": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "Date"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "floating": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The floating label of the element."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "seconds": {
        "public": false,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "hour24": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Determines if the time should use 24 hours format."
      },
      "displayFormat": {
        "public": true,
        "default": "\"from locale\"",
        "types": [
          "string"
        ],
        "description": "Defines how date should be formatted in the input field."
      },
      "valueFormat": {
        "public": true,
        "default": "\"YYYY-MM-DD\"",
        "types": [
          "string"
        ],
        "description": "Defines how date should be formatted in `value`. If `false` Date object will be used."
      },
      "loadFormat": {
        "public": true,
        "default": "\"YYYY-MM-DD\"",
        "types": [
          "string"
        ],
        "description": "Defines how date is formatted when using `load` or `update` method or by directly setting `value`."
      },
      "options": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Additional [options](https://flatpickr.js.org/options/) for flatpickr."
      },
      "min": {
        "public": true,
        "default": "null",
        "types": [
          "string",
          "Date"
        ],
        "description": "Earliest selectable date. Can be a string in `[loadFormat](#prop-loadFormat)` or a Date object."
      },
      "max": {
        "public": true,
        "default": "null",
        "types": [
          "string",
          "Date"
        ],
        "description": "Latest selectable date. Can be a string in `[loadFormat](#prop-loadFormat)` or a Date object."
      },
      "disables": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "List of dates to be disabled."
      },
      "placeholder": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The placeholder of the element."
      },
      "readonly": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should be readonly."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "empty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no value filled in."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "hasDate": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine the element has date."
      },
      "hasTime": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine the element has time."
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "model": {
        "public": false,
        "description": ""
      },
      "value": {
        "public": false,
        "description": ""
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
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
      "handleChange": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      }
    }
  },
  "toggle": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "trueValue": {
        "public": true,
        "default": "true",
        "types": [
          "str",
          "num",
          "bool"
        ],
        "description": "Value of the element if checkbox is *checked*."
      },
      "falseValue": {
        "public": true,
        "default": "false",
        "types": [
          "str",
          "num",
          "bool"
        ],
        "description": "Value of the element if checkbox is *unchecked*."
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "labels": {
        "public": true,
        "default": "false",
        "types": [
          "object"
        ],
        "description": "Labels to be displayed for the toggle. If `false` no labels are displayed."
      },
      "width": {
        "public": false,
        "types": [
          "number"
        ],
        "description": ""
      },
      "height": {
        "public": false,
        "types": [
          "number"
        ],
        "description": ""
      },
      "speed": {
        "public": true,
        "default": "300",
        "types": [
          "number"
        ],
        "description": "The speed of toggle animation in milliseconds."
      },
      "colors": {
        "public": false,
        "types": [
          "object"
        ],
        "description": ""
      },
      "options": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Additional [options](https://github.com/vueform/toggle) for @vueform/toggle."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "text": {
        "public": false,
        "types": [
          "string"
        ],
        "description": ""
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
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
      "handleChange": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "check": {
        "public": true,
        "returns": "void",
        "description": "Checks the checkbox.",
        "params": {
          "triggerChange": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "whether the element should trigger `change` event"
          }
        }
      },
      "uncheck": {
        "public": true,
        "returns": "void",
        "description": "Unhecks the checkbox.",
        "params": {
          "triggerChange": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "whether the element should trigger `change` event"
          }
        }
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      }
    }
  },
  "trix": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "string",
          "number"
        ],
        "description": "The default value of the element."
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "placeholder": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The placeholder of the element."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "accept": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Accepted attachment extensions. Example: `['jpeg', 'png', 'gif']`."
      },
      "acceptMimes": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Accepted attachment mime types. Example: `['image/jpeg', 'image/png', 'image/gif']`."
      },
      "endpoint": {
        "public": true,
        "default": "\"...\"",
        "types": [
          "string"
        ],
        "description": "Endpoint to be called to upload attachments. Defaults to config's `config.endpoints.elements`<br>`.trix.attachment`."
      },
      "rules": {
        "public": true,
        "types": [
          "array",
          "string",
          "object"
        ],
        "description": "Returns element rules"
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element states."
      },
      "Validators": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "An array containing all the validators of the element."
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "empty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no value filled in."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "List of errors of failing rules."
      },
      "error": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The first error that should be displayed under the element."
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
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
      "handleError": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the trix editor throws an error during file upload (for example not accepted file types). If no event is attached browsers default `alert()` function will be used.",
        "params": {
          "message": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "message to display."
          },
          "e": {
            "types": [
              "Event"
            ],
            "required": true,
            "description": ""
          }
        }
      },
      "handleInput": {
        "public": true,
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initMessageBag": {
        "public": false,
        "returns": "void",
        "description": "Initalizes messageBag service."
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      },
      "error": {}
    }
  },
  "tTextarea": {
    "options": {
      "addons": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "An object containing `before` and `after` properties, representing the contents of the input's before and after addons."
      },
      "autogrow": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the textarea should grow."
      },
      "rows": {
        "public": true,
        "default": "3",
        "types": [
          "number"
        ],
        "description": "The `rows` attribute of the textarea."
      },
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "object",
          "string",
          "number"
        ],
        "description": ""
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "floating": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The floating label of the element."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "placeholder": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The placeholder of the element."
      },
      "readonly": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should be readonly."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "description": ""
      },
      "Validators": {
        "public": false,
        "description": ""
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "hasAddon": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if the element has any addons."
      },
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "empty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no value filled in."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "language": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Current language."
      },
      "languages": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "Available language codes."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "rules": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": false,
        "description": ""
      },
      "error": {
        "public": false,
        "description": ""
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "autosize": {
        "public": true,
        "returns": "void",
        "description": "Refreshes size."
      },
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
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
      "handleInput": {
        "public": true,
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "validateLanguage": {
        "public": false,
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initState": {
        "public": false,
        "description": ""
      },
      "initMessageBag": {
        "public": false,
        "description": ""
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      }
    }
  },
  "tText": {
    "options": {
      "addons": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "An object containing `before` and `after` properties, representing the contents of the input's before and after addons."
      },
      "autocomplete": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "The `autocomplete` attribute of the input field."
      },
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "object",
          "string",
          "number"
        ],
        "description": ""
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "floating": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The floating label of the element."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "inputType": {
        "public": true,
        "default": "\"text\"",
        "types": [
          "string"
        ],
        "description": "The HTML type of input field (like type=\"text\")."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "placeholder": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The placeholder of the element."
      },
      "readonly": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should be readonly."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "description": ""
      },
      "Validators": {
        "public": false,
        "description": ""
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "hasAddon": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if the element has any addons."
      },
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "empty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no value filled in."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "language": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Current language."
      },
      "languages": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "Available language codes."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "rules": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": false,
        "description": ""
      },
      "error": {
        "public": false,
        "description": ""
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
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
      "handleInput": {
        "public": true,
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "validateLanguage": {
        "public": false,
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initState": {
        "public": false,
        "description": ""
      },
      "initMessageBag": {
        "public": false,
        "description": ""
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      }
    }
  },
  "tTrix": {
    "options": {
      "type": {
        "public": true,
        "default": "schema.type",
        "types": [
          "string"
        ],
        "description": ""
      },
      "addClasses": {
        "public": true,
        "default": "{}",
        "types": [
          "object"
        ],
        "description": "Classes to be added to components within the element. Eg. `addClasses: { ElementLabel: { label: 'my-label-class' } }` will add `my-label-class` to `ElementLabel`'s `label` class list."
      },
      "class": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "classes": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the final classes of the components within the element."
      },
      "columns": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Calulated column sizes and classes for the element."
      },
      "components": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
      },
      "conditions": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Conditions to be applied for the element."
      },
      "formatData": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before gets merged with form `data`."
      },
      "formatLoad": {
        "public": true,
        "types": [
          "function"
        ],
        "description": "A function that formats data before [.load](#method-load) to the element."
      },
      "submit": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value should be submitted."
      },
      "debounce": {
        "public": true,
        "default": "null",
        "types": [
          "number"
        ],
        "description": "If provided each validators execution will be delayed by this amount of `milliseconds`. If `null` no debounce will occur."
      },
      "default": {
        "public": true,
        "types": [
          "object",
          "string",
          "number"
        ],
        "description": ""
      },
      "description": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Description of the element."
      },
      "disabled": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the field should be *disabled* for user input (API updates are possible)."
      },
      "id": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "The 'id' attribute of the field."
      },
      "info": {
        "public": true,
        "default": "null",
        "types": [
          "string"
        ],
        "description": "Info icon appears next to the element's label."
      },
      "label": {
        "public": true,
        "default": "\"\"",
        "types": [
          "string"
        ],
        "description": "Label of the element."
      },
      "placeholder": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The placeholder of the element."
      },
      "before": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear."
      },
      "between": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear."
      },
      "after": {
        "public": true,
        "types": [
          "component"
        ],
        "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear."
      },
      "slots": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
      },
      "accept": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Accepted attachment extensions. Example: `['jpeg', 'png', 'gif']`."
      },
      "acceptMimes": {
        "public": true,
        "default": "[]",
        "types": [
          "array"
        ],
        "description": "Accepted attachment mime types. Example: `['image/jpeg', 'image/png', 'image/gif']`."
      },
      "endpoint": {
        "public": true,
        "default": "\"...\"",
        "types": [
          "string"
        ],
        "description": "Endpoint to be called to upload attachments. Defaults to config's `config.endpoints.elements`<br>`.trix.attachment`."
      },
      "messages": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Overrides default validation rule [messages](validation#custom-messages)."
      },
      "displayError": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element should display it's first error, if any."
      }
    },
    "props": {},
    "data": {
      "defaultClasses": {
        "public": true,
        "types": [
          "object"
        ],
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
      "input": {
        "public": true,
        "types": [
          "HTMLElement"
        ],
        "description": ""
      },
      "state": {
        "public": false,
        "description": ""
      },
      "Validators": {
        "public": false,
        "description": ""
      },
      "messageBag": {
        "public": true,
        "default": "{MessageBag}",
        "types": [
          "MessageBag"
        ],
        "description": "Message bag service."
      },
      "currentValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element value."
      },
      "previousValue": {
        "public": true,
        "default": "null",
        "types": [
          "object"
        ],
        "description": "Helper property used to store the element previous value."
      },
      "hidden": {
        "public": true,
        "default": "false",
        "types": [
          "boolean"
        ],
        "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
      },
      "active": {
        "public": true,
        "default": "true",
        "types": [
          "boolean"
        ],
        "description": "Whether the element is hidden internally by other components, like tabs or wizard steps."
      }
    },
    "computed": {
      "isStatic": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "isFileType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is a file."
      },
      "isImageType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an image."
      },
      "isArrayType": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Determines if the element's value is an array."
      },
      "el$": {
        "public": true,
        "types": [
          [
            "object",
            "Element"
          ]
        ],
        "description": ""
      },
      "mainClass": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
      },
      "available": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether all element conditions are met (if any)."
      },
      "data": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value."
      },
      "filtered": {
        "public": true,
        "types": [
          "object"
        ],
        "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
      },
      "changed": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": ""
      },
      "empty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has no value filled in."
      },
      "genericName": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Helper property used to determine a generic name for the element."
      },
      "hasLabel": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Helper property used to determine internally if a label should be rendered for the element."
      },
      "language": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "Current language."
      },
      "languages": {
        "public": true,
        "types": [
          "array"
        ],
        "description": "Available language codes."
      },
      "layout": {
        "public": true,
        "types": [
          "component"
        ],
        "description": ""
      },
      "nullValue": {
        "public": false,
        "description": ""
      },
      "parent": {
        "public": false,
        "description": ""
      },
      "path": {
        "public": true,
        "types": [
          "string"
        ],
        "description": "The path of the element using dot `.` syntax."
      },
      "flat": {
        "public": false,
        "description": ""
      },
      "rules": {
        "public": false,
        "description": ""
      },
      "dirty": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's value has been modified by the user."
      },
      "validated": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element's input has already been validated at least once."
      },
      "invalid": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any failing rules."
      },
      "pending": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has any async rules in progress."
      },
      "debouncing": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element has an ongoing debounce."
      },
      "busy": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is `pending` or `debouncing`."
      },
      "errors": {
        "public": false,
        "description": ""
      },
      "error": {
        "public": false,
        "description": ""
      },
      "value": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "The value of the element."
      },
      "model": {
        "public": true,
        "types": [
          "any"
        ],
        "description": "Helper property used for tracking the field's value."
      },
      "visible": {
        "public": true,
        "types": [
          "boolean"
        ],
        "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
      }
    },
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
    "methods": {
      "load": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to be loaded."
          },
          "format": {
            "types": [
              "boolean"
            ],
            "required": false,
            "description": "Whether the loaded value should be formatted with `formatLoad` before applying values to the element. Default: `false`."
          }
        }
      },
      "update": {
        "public": true,
        "returns": "void",
        "description": "",
        "params": {
          "value": {
            "types": [
              "string",
              "number"
            ],
            "required": true,
            "description": "The value to update the field with."
          }
        }
      },
      "updated": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "clear": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "reset": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "prepare": {
        "public": false,
        "returns": "void",
        "description": ""
      },
      "disable": {
        "public": true,
        "returns": "void",
        "description": "Disabled the field."
      },
      "enable": {
        "public": true,
        "returns": "void",
        "description": "Enables the field."
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
      "handleError": {
        "public": false,
        "returns": "void",
        "description": "Triggered when the trix editor throws an error during file upload (for example not accepted file types). If no event is attached browsers default `alert()` function will be used.",
        "params": {
          "message": {
            "types": [
              "string"
            ],
            "required": true,
            "description": "message to display."
          },
          "e": {
            "types": [
              "Event"
            ],
            "required": true,
            "description": ""
          }
        }
      },
      "handleInput": {
        "public": true,
        "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
      },
      "validate": {
        "public": true,
        "returns": "void",
        "description": ""
      },
      "validateLanguage": {
        "public": false,
        "description": ""
      },
      "resetValidators": {
        "public": true,
        "returns": "void",
        "description": "Set the validated state to false."
      },
      "dirt": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as dirty."
      },
      "clean": {
        "public": true,
        "returns": "void",
        "description": "Flag the element as non dirty."
      },
      "initState": {
        "public": false,
        "description": ""
      },
      "initMessageBag": {
        "public": false,
        "description": ""
      },
      "initValidation": {
        "public": false,
        "returns": "void",
        "description": "Initalizes validators."
      },
      "hide": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `false`."
      },
      "show": {
        "public": true,
        "returns": "void",
        "description": "Sets the `hidden` property of the element to `true`."
      },
      "activate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `true`."
      },
      "deactivate": {
        "public": false,
        "returns": "void",
        "description": "Sets the `active` property of the element to `false`."
      }
    },
    "slots": {
      "label": {
        "description": "The label of the element"
      },
      "info": {},
      "description": {},
      "error": {},
      "message": {},
      "before": {},
      "between": {},
      "after": {}
    },
    "events": {
      "change": {
        "description": "Triggered when the element changes"
      },
      "error": {}
    }
  }
}