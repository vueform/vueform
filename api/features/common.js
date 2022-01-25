export default {
  "conditions": {
    "base": {
      "computed": {
        "available": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled."
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
            "component"
          ],
          "description": "The computed size of the component."
        },
        "View": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The view."
        }
      },
      "computed": {
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
          "description": "The selected theme's classes merged with element's `addClasses` and `overrideClasses` options."
        },
        "templates": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Returns the component templates used by the parent element."
        },
        "template": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The component's template."
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
          "description": "The root form's component."
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
            "component"
          ],
          "description": "The computed size of the component."
        },
        "View": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The view."
        }
      },
      "computed": {
        "classesInstance": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides."
        },
        "classes": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The selected theme's classes merged with the form's [`addClasses`](vueform#option-add-classes) and [`overrideClasses`](vueform#option-override-classes) options."
        },
        "templates": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Returns the component templates used by the form."
        },
        "template": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The component's template."
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
          "description": "The label of the component. If the label is provided as a `function` this contains the resolved value."
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
  "preview": {
    "base": {
      "computed": {
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
      }
    }
  },
  "size": {
    "base": {
      "inject": {
        "Size": {
          "public": true,
          "types": [
            "component"
          ],
          "description": "The computed size of the component."
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
          "description": "The global theme object, which contains all the default templates and classes."
        }
      }
    }
  },
  "view": {
    "base": {
      "inject": {
        "View": {
          "public": false,
          "types": [
            "string"
          ],
          "description": "The view."
        }
      }
    }
  },
  "vueform": {
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
          "description": "Enables/disables validation for the form globally."
        },
        "messageBag": {
          "public": true,
          "default": "MessageBag",
          "types": [
            "MessageBag"
          ],
          "description": "Instance of MessageBag service. It can be used to add [custom errors and messages](/docs/1.x/validating-elements#custom-errors-and-messages)."
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
          "description": "The selected theme's classes merged with [`addClasses`](#option-add-classes) and [`replaceClasses`](#option-replace-classes) options."
        },
        "templates": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The selected theme's templates, extended by local overrides. The [`replaceTemplates`](#option-replace-templates) option can be used to override templates provided by the theme."
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
          "description": "The selected theme, extended by local template and class overrides, using [`replaceTemplates`](#option-replace-templates), [`addClasses`](#option-add-classes) and [`replaceClasses`](#option-replace-classes)."
        },
        "Size": {
          "public": true,
          "returns": "string",
          "description": "The calculated size of the form. If [`size`](#option-size) is not defined `config.size` will be used."
        },
        "View": {
          "public": true,
          "returns": "object",
          "description": "The calculated view of the form."
        },
        "Views": {
          "public": true,
          "returns": "object",
          "description": "The calculated views of the form."
        },
        "form$": {
          "public": true,
          "types": [
            "component"
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
          "description": "Sends form data to [`endpoint`](#option-endpoint) with the selected [`method`](#option-method) (async)."
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
  }
}