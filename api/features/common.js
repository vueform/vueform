export default {
  "conditions": {
    "base": {
      "options": {
        "conditions": {
          "public": true,
          "default": "[]",
          "types": [
            "array"
          ],
          "description": "Conditions to be applied for the element."
        }
      },
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
        "form$": {
          "public": false,
          "description": ""
        },
        "el$": {
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
      }
    }
  },
  "label": {
    "base": {
      "computed": {
        "isLabelComponent": {
          "public": false,
          "description": ""
        },
        "label": {
          "public": false,
          "description": ""
        }
      }
    }
  },
  "laraform": {
    "base": {
      "methods": {
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
        "updateSchema": {
          "public": false,
          "description": ""
        },
        "handleChangeLanguage": {
          "public": true,
          "returns": "void",
          "description": "Set the language of a multilingual form.",
          "params": {
            "code": {
              "types": [
                "string"
              ],
              "required": false,
              "description": "code of language to set"
            }
          }
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
        "resortSchema": {
          "public": false,
          "description": ""
        },
        "initMessageBag": {
          "public": false,
          "description": ""
        }
      },
      "data": {
        "listeners": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Helper property used to store listeners for events."
        },
        "events": {
          "public": true,
          "default": "[]",
          "types": [
            "array"
          ],
          "description": "Helper property used to store available events for the element."
        },
        "elements$": {
          "public": false,
          "description": ""
        },
        "tabs$": {
          "public": false,
          "description": ""
        },
        "wizard$": {
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
        }
      },
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The form's data."
        },
        "filtered": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The form's data excluding elements with unmet conditions and the ones which should not submit."
        },
        "formData": {
          "public": false,
          "description": ""
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
        "hasErrors": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the form has errors."
        },
        "formMessages": {
          "public": true,
          "types": [
            "array"
          ],
          "description": "List of all errors within the form."
        },
        "hasMessages": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the form has messages."
        },
        "disabled": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the form is disabled."
        },
        "shouldValidateOnChange": {
          "public": false,
          "description": ""
        },
        "shouldValidateOnSubmit": {
          "public": false,
          "description": ""
        },
        "shouldValidateOnStep": {
          "public": false,
          "description": ""
        },
        "hasWizard": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the form has wizard."
        },
        "hasTabs": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the form has tabs."
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
        "store": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The value of external Vuex store state."
        },
        "form$": {
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