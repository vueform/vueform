export default {
  "conditions": {
    "base": {
      "computed": {
        "available": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether all element conditions are met (if any)."
        }
      }
    }
  },
  "el$": {
    "base": {
      "inject": {
        "el$": {
          "public": false,
          "description": ""
        }
      }
    }
  },
  "elementComponent": {
    "base": {
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
        },
        "mainClass": {
          "public": false,
          "description": ""
        }
      },
      "data": {
        "defaultClasses": {
          "public": false,
          "description": ""
        }
      }
    }
  },
  "elements": {
    "base": {
      "methods": {
        "component": {
          "public": false,
          "description": ""
        }
      }
    }
  },
  "events": {
    "base": {
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
        "fire": {
          "public": true,
          "returns": "any",
          "description": "Fires an event."
        }
      }
    }
  },
  "form$": {
    "base": {
      "inject": {
        "form$": {
          "public": false,
          "description": ""
        }
      }
    }
  },
  "formComponent": {
    "base": {
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
        "components": {
          "public": false,
          "description": ""
        },
        "mainClass": {
          "public": false,
          "description": ""
        }
      },
      "data": {
        "defaultClasses": {
          "public": false,
          "description": ""
        }
      }
    }
  },
  "label": {
    "base": {
      "computed": {
        "label": {
          "public": false,
          "description": ""
        },
        "isLabelComponent": {
          "public": false,
          "description": ""
        }
      }
    }
  },
  "laraform": {
    "base": {
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
      }
    }
  },
  "model": {
    "base": {
      "computed": {
        "model": {
          "public": false,
          "description": "Clone value of model container: v-model or internal data"
        },
        "isSync": {
          "public": false,
          "description": ""
        }
      },
      "data": {
        "internalData": {
          "public": false,
          "description": "If v-model is defined it is always equal to that. Otherwise used as model container."
        },
        "intermediaryValue": {
          "public": false,
          "description": ""
        }
      },
      "methods": {
        "updateModel": {
          "public": false,
          "description": ""
        }
      }
    }
  },
  "parentAssign": {
    "base": {
      "methods": {
        "assignToParent": {
          "public": false,
          "description": ""
        },
        "removeFromParent": {
          "public": false,
          "description": ""
        }
      }
    }
  },
  "theme": {
    "base": {
      "inject": {
        "theme": {
          "public": false,
          "description": ""
        }
      }
    }
  }
}