export default {
  "conditions": {
    "base": {
      "data": {
        "conditionList": {
          "public": false,
          "types": [
            "array"
          ],
          "description": "The current conditions of the element."
        }
      },
      "computed": {
        "available": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled."
        }
      },
      "methods": {
        "updateConditions": {
          "public": false,
          "returns": "void",
          "description": "Updates element conditions after they have been changed."
        }
      }
    },
    "list": {
      "data": {
        "conditionList": {
          "public": false,
          "types": [
            "array"
          ],
          "description": "The current conditions of the element."
        }
      },
      "computed": {
        "available": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled."
        }
      },
      "methods": {
        "updateConditions": {
          "public": false,
          "returns": "void",
          "description": "Updates element conditions after they have been changed."
        }
      }
    },
    "object": {
      "data": {
        "conditionList": {
          "public": false,
          "types": [
            "array"
          ],
          "description": "The current conditions of the element."
        }
      },
      "computed": {
        "available": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled."
        }
      },
      "methods": {
        "updateConditions": {
          "public": false,
          "returns": "void",
          "description": "Updates element conditions after they have been changed."
        }
      }
    },
    "group": {
      "data": {
        "conditionList": {
          "public": false,
          "types": [
            "array"
          ],
          "description": "The current conditions of the element."
        }
      },
      "computed": {
        "available": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled."
        }
      },
      "methods": {
        "updateConditions": {
          "public": false,
          "returns": "void",
          "description": "Updates element conditions after they have been changed."
        }
      }
    }
  },
  "config$": {
    "base": {
      "inject": {
        "config$": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The global $vueform config object."
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
            "VueformElement"
          ],
          "description": "The parent element's component."
        }
      }
    }
  },
  "element": {
    "base": {},
    "static": {},
    "multilingual": {},
    "location": {}
  },
  "elementComponent": {
    "base": {
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
      }
    }
  },
  "form$": {
    "base": {
      "inject": {
        "form$": {
          "public": true,
          "types": [
            "Vueform"
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
          "types": [
            "object"
          ],
          "description": "The intermediary value."
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
                "VNode"
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
                "VNode"
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
        },
        "ariaLabelledby": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The `aria-labelledby` attribute of the preview."
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
      }
    }
  },
  "size": {
    "base": {
      "inject": {
        "Size": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The size of the component."
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
      "computed": {
        "View": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The name of the resolved view for the component. This one should be used to determine the component's view in class functions."
        }
      }
    }
  },
  "vueform": {
    "base": {
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
        "resolveExpression": {
          "public": true,
          "returns": "string",
          "description": "Resolves an expression.",
          "params": {
            "exp": {
              "types": [
                "string"
              ],
              "required": true,
              "description": "the expression to resolve"
            },
            "dataPath": {
              "types": [
                "string"
              ],
              "required": true,
              "description": "the dataPath of the element (required to resolve * in nested paths relative to the element)"
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
        "initExpressionService": {
          "public": false,
          "returns": "void",
          "description": "Inits Expression service."
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
      }
    }
  }
}