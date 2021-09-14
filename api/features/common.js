export default {
  "conditions": {
    "base": {
      "computed": {
        "available": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has no [`:conditions`](#conditions) or they are fulfilled."
        }
      }
    }
  },
  "el$": {
    "base": {
      "inject": {
        "el$": {
          "public": true,
          "types": [
            "component"
          ],
          "description": "The parent element's component."
        }
      }
    }
  },
  "elementComponent": {
    "base": {
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
        },
        "mainClass": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The class name of the components's outermost DOM."
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
      }
    }
  },
  "elements": {
    "base": {
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
      }
    }
  },
  "events": {
    "base": {
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
      }
    }
  },
  "form$": {
    "base": {
      "inject": {
        "form$": {
          "public": true,
          "types": [
            "component"
          ],
          "description": "The root form component."
        }
      }
    }
  },
  "formComponent": {
    "base": {
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
        "components": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Returns the components used by the form."
        },
        "mainClass": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The class name of the components's outermost DOM."
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
      }
    }
  },
  "label": {
    "base": {
      "computed": {
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
      }
    }
  },
  "laraform": {
    "base": {
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
      }
    }
  },
  "model": {
    "base": {
      "computed": {
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
      "data": {
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
        }
      }
    }
  },
  "parentAssign": {
    "base": {
      "methods": {
        "assignToParent": {
          "public": false,
          "returns": "void",
          "description": "Sets the component to the parent as if `refs` were used.",
          "params": {
            "$parent": {
              "types": [
                "component"
              ],
              "required": false,
              "description": "parent component"
            },
            "assignToParent": {
              "types": [
                "function"
              ],
              "required": false,
              "description": "the assignToParent function for recursion"
            }
          }
        },
        "removeFromParent": {
          "public": false,
          "description": "Removes the component from the parent.",
          "params": {
            "$parent": {
              "types": [
                "component"
              ],
              "required": false,
              "description": "parent component"
            },
            "removeFromParent": {
              "types": [
                "function"
              ],
              "required": false,
              "description": "the removeFromParent function for recursion"
            }
          }
        }
      }
    }
  },
  "theme": {
    "base": {
      "inject": {
        "theme": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The global theme object, which contains all the default components and classes."
        }
      }
    }
  }
}