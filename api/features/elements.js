export default {
  "addons": {},
  "asyncItems": {
    "base": {
      "computed": {
        "nativeItems": {
          "public": true,
          "types": [
            "array"
          ],
          "description": "Contains select options for native select."
        }
      },
      "methods": {
        "updateItems": {
          "public": true,
          "returns": "void",
          "description": "Fetches & updates select options when using `async` options.",
          "params": {
            "shouldDisable": {
              "types": [
                "boolean"
              ],
              "required": true,
              "description": "whether the input field should be disabled while fetching options"
            }
          }
        }
      }
    }
  },
  "autogrow": {
    "base": {
      "methods": {
        "autosize": {
          "public": true,
          "returns": "void",
          "description": "Updates the height of the input based in its contents when `autogrow` is enabled."
        }
      }
    },
    "multilingual": {
      "methods": {
        "autosize": {
          "public": true,
          "returns": "void",
          "description": "Updates the height of the input based in its contents when `autogrow` is enabled."
        }
      }
    }
  },
  "baseElement": {
    "base": {
      "computed": {
        "el$": {
          "public": true,
          "types": [
            "component"
          ],
          "description": "The element's component."
        },
        "isStatic": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is static (does not have any data or validation)."
        },
        "isFileType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is a file."
        },
        "isArrayType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is an array."
        },
        "isImageType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is an image."
        },
        "isActive": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element should be visible when using `tabs` or `steps`."
        }
      },
      "data": {
        "active": {
          "public": false,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading."
        }
      },
      "methods": {
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
      }
    },
    "list": {
      "computed": {
        "el$": {
          "public": true,
          "types": [
            "component"
          ],
          "description": "The element's component."
        },
        "isStatic": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is static (does not have any data or validation)."
        },
        "isFileType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is a file."
        },
        "isArrayType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is an array."
        },
        "isImageType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is an image."
        },
        "isActive": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element should be visible when using `tabs` or `steps`."
        }
      },
      "data": {
        "active": {
          "public": false,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading."
        }
      },
      "methods": {
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
      }
    },
    "file": {
      "computed": {
        "el$": {
          "public": true,
          "types": [
            "component"
          ],
          "description": "The element's component."
        },
        "isStatic": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is static (does not have any data or validation)."
        },
        "isFileType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is a file."
        },
        "isArrayType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is an array."
        },
        "isImageType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is an image."
        },
        "isActive": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element should be visible when using `tabs` or `steps`."
        }
      },
      "data": {
        "active": {
          "public": false,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading."
        }
      },
      "methods": {
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
      }
    },
    "static": {
      "computed": {
        "el$": {
          "public": true,
          "types": [
            "component"
          ],
          "description": "The element's component."
        },
        "isStatic": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is static (does not have any data or validation)."
        },
        "isFileType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is a file."
        },
        "isArrayType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is an array."
        },
        "isImageType": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element's value is an image."
        },
        "isActive": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element should be visible when using `tabs` or `steps`."
        }
      },
      "data": {
        "active": {
          "public": false,
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading."
        }
      },
      "methods": {
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
      }
    }
  },
  "button": {
    "base": {
      "computed": {
        "isButtonLabelComponent": {
          "public": false,
          "types": [
            "boolean"
          ],
          "description": "Whether the button's label is a component."
        },
        "button": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "Attributes of the button."
        },
        "isLoading": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the button is in loading state."
        }
      },
      "methods": {
        "handleClick": {
          "public": false,
          "returns": "void",
          "description": "Handles the button's click event.",
          "params": {
            "e": {
              "types": [
                "Event"
              ],
              "required": true,
              "description": "event"
            }
          }
        }
      }
    }
  },
  "check": {
    "base": {
      "methods": {
        "check": {
          "public": true,
          "returns": "void",
          "description": "Checks one or more checkboxes.",
          "params": {
            "items": {
              "types": [
                "array",
                "string",
                "number"
              ],
              "required": true,
              "description": "value(s) to check"
            }
          }
        },
        "uncheck": {
          "public": true,
          "returns": "void",
          "description": "Unchecks one or more checkboxes.",
          "params": {
            "items": {
              "types": [
                "array",
                "string",
                "number"
              ],
              "required": true,
              "description": "value(s) to check"
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
          "description": "Unchecks all checkboxes."
        }
      }
    }
  },
  "children": {
    "base": {
      "data": {
        "children$Array": {
          "public": false,
          "default": "[children<component>]",
          "types": [
            [
              "array",
              "component"
            ]
          ],
          "description": "List of child element components."
        }
      },
      "computed": {
        "children$": {
          "public": true,
          "types": [
            [
              "object",
              "Element"
            ]
          ],
          "default": "{[name]:component}",
          "description": "Child element components."
        }
      }
    },
    "object": {
      "computed": {
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
          "default": "{[name]:component}",
          "description": "Child element components."
        }
      },
      "data": {
        "children$Array": {
          "public": false,
          "default": "[children<component>]",
          "types": [
            [
              "array",
              "component"
            ]
          ],
          "description": "List of child element components."
        }
      }
    },
    "address": {
      "data": {
        "children$Array": {
          "public": false,
          "default": "[children<component>]",
          "types": [
            [
              "array",
              "component"
            ]
          ],
          "description": "List of child element components."
        },
        "addressId": {
          "public": true,
          "default": "\"address-*\"",
          "types": [
            "string"
          ],
          "description": ""
        }
      },
      "computed": {
        "children$": {
          "public": true,
          "types": [
            [
              "object",
              "Element"
            ]
          ],
          "default": "{[name]:component}",
          "description": "Child element components."
        },
        "children": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "Schema of child elements."
        },
        "fields": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Fields of the address. By default has the following `text` type elements: `address`, `address2`, `zip`, `city`, `state`, `country`."
        }
      }
    },
    "buttons": {
      "data": {
        "children$Array": {
          "public": false,
          "default": "[children<component>]",
          "types": [
            [
              "array",
              "component"
            ]
          ],
          "description": "List of child element components."
        }
      },
      "computed": {
        "children$": {
          "public": true,
          "types": [
            [
              "object",
              "Element"
            ]
          ],
          "default": "{[name]:component}",
          "description": "Child element components."
        },
        "children": {
          "public": false,
          "types": [
            "object"
          ],
          "description": "Schema of child elements."
        }
      }
    }
  },
  "classes": {
    "base": {
      "options": {
        "classes": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Returns the final classes of the components within the element."
        }
      },
      "computed": {
        "mainClass": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
        }
      },
      "data": {
        "defaultClasses": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        }
      }
    },
    "input": {
      "options": {
        "classes": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Returns the final classes of the components within the element."
        }
      },
      "computed": {
        "mainClass": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
        }
      },
      "data": {
        "defaultClasses": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        }
      }
    },
    "list": {
      "options": {
        "classes": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Returns the final classes of the components within the element."
        }
      },
      "computed": {
        "mainClass": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
        }
      },
      "data": {
        "defaultClasses": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        }
      }
    },
    "multifile": {
      "options": {
        "classes": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Returns the final classes of the components within the element."
        }
      },
      "computed": {
        "mainClass": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
        }
      },
      "data": {
        "defaultClasses": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        }
      }
    },
    "file": {
      "options": {
        "classes": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Returns the final classes of the components within the element."
        }
      },
      "computed": {
        "mainClass": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
        }
      },
      "data": {
        "defaultClasses": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        }
      }
    },
    "button": {
      "options": {
        "classes": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Returns the final classes of the components within the element."
        }
      },
      "computed": {
        "mainClass": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
        }
      },
      "data": {
        "defaultClasses": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        }
      }
    },
    "trix": {
      "options": {
        "classes": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Returns the final classes of the components within the element."
        }
      },
      "computed": {
        "mainClass": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "Class of the element's outermost DOM. Can use Vue syntaxes (string, array, object)."
        }
      },
      "data": {
        "defaultClasses": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        }
      }
    }
  },
  "columns": {
    "base": {
      "options": {
        "columnsClasses": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Calulated column sizes and classes for the element."
        }
      }
    }
  },
  "components": {
    "base": {
      "options": {
        "components": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Returns the components to use within the element. Setting the value will overwrite components contained in the value object. Eg. `components: { ElementLabel: MyElementLabel }` will replace `ElementLabel` component for only this element."
        }
      }
    }
  },
  "controls": {
    "base": {
      "computed": {
        "hasAdd": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "hasRemove": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "hasSort": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        }
      }
    }
  },
  "data": {
    "base": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        },
        "output": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
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
        "prepare": {
          "public": false,
          "returns": "void",
          "description": ""
        }
      }
    },
    "object": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        },
        "output": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
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
        }
      }
    },
    "group": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        },
        "output": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
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
        }
      }
    },
    "list": {
      "computed": {
        "output": {
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
          "public": false,
          "description": ""
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
        "prepare": {
          "public": false,
          "returns": "void",
          "description": ""
        }
      }
    },
    "date": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        },
        "output": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
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
        "prepare": {
          "public": false,
          "returns": "void",
          "description": ""
        }
      }
    },
    "dates": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        },
        "output": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
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
        "prepare": {
          "public": false,
          "returns": "void",
          "description": ""
        }
      }
    },
    "multilingual": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        },
        "output": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
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
        "prepare": {
          "public": false,
          "returns": "void",
          "description": ""
        }
      }
    },
    "trix": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        },
        "output": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
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
        "prepare": {
          "public": false,
          "returns": "void",
          "description": ""
        }
      }
    },
    "ttrix": {
      "computed": {
        "data": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        },
        "output": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`."
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
        "prepare": {
          "public": false,
          "returns": "void",
          "description": ""
        }
      }
    }
  },
  "dateFormat": {
    "base": {
      "computed": {
        "displayDateFormat": {
          "public": false,
          "description": ""
        },
        "valueDateFormat": {
          "public": false,
          "description": ""
        },
        "loadDateFormat": {
          "public": false,
          "description": ""
        }
      }
    },
    "dates": {
      "computed": {
        "displayDateFormat": {
          "public": false,
          "description": ""
        },
        "valueDateFormat": {
          "public": false,
          "description": ""
        },
        "loadDateFormat": {
          "public": false,
          "description": ""
        }
      }
    }
  },
  "default": {
    "base": {
      "computed": {
        "defaultValue": {
          "public": true,
          "types": [
            "string",
            "number"
          ],
          "description": "The default value of the element."
        }
      }
    },
    "group": {
      "computed": {
        "defaultValue": {
          "public": true,
          "types": [
            "string",
            "number"
          ],
          "description": "The default value of the element."
        }
      }
    },
    "object": {
      "computed": {
        "defaultValue": {
          "public": true,
          "types": [
            "string",
            "number"
          ],
          "description": "The default value of the element."
        }
      }
    },
    "multilingual": {
      "options": {
        "defaultValue": {
          "public": true,
          "types": [
            "object",
            "string",
            "number"
          ],
          "description": ""
        }
      }
    }
  },
  "disabled": {
    "base": {
      "data": {
        "localDisabled": {
          "public": true,
          "types": [
            "boolean",
            "null"
          ],
          "description": ""
        }
      },
      "computed": {
        "isDisabled": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        }
      },
      "methods": {
        "disable": {
          "public": true,
          "returns": "void",
          "description": "Disabled the field."
        },
        "enable": {
          "public": true,
          "returns": "void",
          "description": "Enables the field."
        }
      }
    },
    "checkboxgroup": {
      "options": {
        "disabledItems": {
          "public": true,
          "default": "[]",
          "types": [
            "array"
          ],
          "description": "List of option keys to be disabled."
        }
      },
      "computed": {
        "isDisabled": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        }
      },
      "methods": {
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
        }
      }
    },
    "button": {
      "computed": {
        "isDisabled": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        }
      }
    }
  },
  "drop": {
    "base": {
      "computed": {
        "canDrop": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        }
      },
      "methods": {
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
        }
      }
    },
    "multifile": {
      "computed": {
        "canDrop": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        }
      },
      "methods": {
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
        }
      }
    }
  },
  "empty": {
    "base": {
      "computed": {
        "empty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has no value filled in."
        }
      }
    },
    "multilingual": {
      "computed": {
        "empty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has no value filled in."
        }
      }
    },
    "array": {
      "computed": {
        "empty": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element has no value filled in."
        }
      }
    }
  },
  "fieldId": {
    "base": {
      "computed": {
        "fieldId": {
          "public": true,
          "types": [
            "string"
          ],
          "description": ""
        }
      }
    }
  },
  "file": {
    "base": {
      "data": {
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
        "hasUploadError": {
          "public": true,
          "default": "false",
          "types": [
            "boolean"
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
        "previewLoaded": {
          "public": true,
          "default": "false",
          "types": [
            "boolean"
          ],
          "description": ""
        }
      },
      "options": {
        "fileMethods": {
          "public": true,
          "default": "config.methods.file",
          "types": [
            "object"
          ],
          "description": ""
        },
        "fileEndpoints": {
          "public": true,
          "default": "config.endpoints.file",
          "types": [
            "object"
          ],
          "description": ""
        },
        "fileUrl": {
          "public": true,
          "types": [
            "string"
          ],
          "description": ""
        }
      },
      "computed": {
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
        "preview": {
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
        }
      },
      "methods": {
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
        "prepare": {
          "public": false,
          "returns": "void",
          "description": ""
        },
        "loadPreview": {
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
        }
      }
    }
  },
  "genericName": {
    "base": {
      "computed": {
        "genericName": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "Helper property used to determine a generic name for the element."
        }
      }
    },
    "file": {
      "computed": {
        "genericName": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "Helper property used to determine a generic name for the element."
        }
      }
    }
  },
  "handleChange": {
    "base": {
      "methods": {
        "handleChange": {
          "public": false,
          "returns": "void",
          "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
        }
      }
    }
  },
  "handleError": {
    "base": {
      "methods": {
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
        }
      }
    }
  },
  "handleInput": {
    "base": {
      "methods": {
        "handleInput": {
          "public": true,
          "description": "Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed."
        }
      }
    }
  },
  "handleSelectEvents": {
    "base": {
      "methods": {
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
        }
      }
    }
  },
  "handleTag": {
    "base": {
      "methods": {
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
        }
      }
    }
  },
  "input": {
    "base": {
      "data": {
        "input": {
          "public": true,
          "types": [
            "HTMLElement"
          ],
          "description": ""
        }
      }
    }
  },
  "label": {
    "base": {
      "computed": {
        "hasLabel": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Helper property used to determine internally if a label should be rendered for the element."
        }
      }
    }
  },
  "languages": {
    "base": {
      "computed": {
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
        }
      }
    }
  },
  "layout": {
    "base": {
      "computed": {
        "elementLayout": {
          "public": true,
          "types": [
            "string",
            "object"
          ],
          "description": ""
        }
      }
    }
  },
  "location": {
    "base": {
      "data": {
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
        }
      },
      "computed": {
        "defaultOptions": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Default options for flatpickr."
        }
      },
      "options": {
        "providerOptions": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Additional options for [Google Places](https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions) or [Algolia Places](https://community.algolia.com/places/documentation.html#options) depending on the provider."
        }
      },
      "methods": {
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
        "handleLocationBlur": {
          "public": false,
          "description": ""
        },
        "initLocationService": {
          "public": true,
          "returns": "void",
          "description": "Initalizes location service."
        }
      }
    },
    "address": {
      "data": {
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
        }
      },
      "computed": {
        "defaultOptions": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Default options for flatpickr."
        }
      },
      "options": {
        "providerOptions": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Additional options for [Google Places](https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions) or [Algolia Places](https://community.algolia.com/places/documentation.html#options) depending on the provider."
        }
      },
      "methods": {
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
        }
      }
    }
  },
  "multifile": {
    "base": {
      "computed": {
        "preparing": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        }
      },
      "methods": {
        "handleChange": {
          "public": false,
          "description": ""
        },
        "handleClick": {
          "public": false,
          "description": ""
        }
      }
    }
  },
  "nullValue": {
    "base": {
      "computed": {
        "nullValue": {
          "public": false,
          "description": ""
        }
      }
    },
    "array": {
      "computed": {
        "nullValue": {
          "public": false,
          "description": ""
        }
      }
    },
    "boolean": {
      "computed": {
        "nullValue": {
          "public": false,
          "description": ""
        }
      }
    },
    "min": {
      "computed": {
        "nullValue": {
          "public": false,
          "description": ""
        }
      }
    },
    "object": {
      "computed": {
        "nullValue": {
          "public": false,
          "description": ""
        }
      }
    },
    "location": {
      "computed": {
        "nullValue": {
          "public": false,
          "description": ""
        }
      }
    },
    "address": {
      "computed": {
        "nullValue": {
          "public": false,
          "description": ""
        }
      }
    },
    "multilingual": {
      "computed": {
        "nullValue": {
          "public": false,
          "description": ""
        }
      }
    }
  },
  "options": {
    "base": {
      "options": {
        "fieldOptions": {
          "public": true,
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "Additional [options](https://github.com/vueform/toggle) for @vueform/toggle."
        }
      }
    }
  },
  "order": {
    "base": {
      "methods": {
        "refreshOrderStore": {
          "public": false,
          "returns": "void",
          "description": "Helper method used to refresh the element's value which stores the order."
        }
      },
      "computed": {
        "orderByName": {
          "public": true,
          "types": [
            "string"
          ],
          "description": ""
        }
      }
    }
  },
  "path": {
    "base": {
      "computed": {
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
        "dataPath": {
          "public": true,
          "types": [
            "string"
          ],
          "description": ""
        },
        "flat": {
          "public": false,
          "description": ""
        }
      }
    },
    "group": {
      "computed": {
        "path": {
          "public": true,
          "types": [
            "string"
          ],
          "description": "The path of the element using dot `.` syntax."
        },
        "dataPath": {
          "public": true,
          "types": [
            "string"
          ],
          "description": ""
        },
        "flat": {
          "public": false,
          "description": ""
        },
        "parent": {
          "public": false,
          "description": ""
        }
      }
    }
  },
  "prototype": {
    "base": {
      "computed": {
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
        }
      }
    },
    "multifile": {
      "computed": {
        "storeFileName": {
          "public": false,
          "description": ""
        },
        "isObject": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if the list items are objects."
        },
        "prototype": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "The schema of a child."
        }
      }
    }
  },
  "radio": {
    "base": {
      "methods": {
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
        }
      }
    }
  },
  "removing": {
    "base": {
      "data": {
        "removing": {
          "public": false,
          "description": ""
        }
      }
    }
  },
  "request": {
    "base": {
      "data": {
        "request": {
          "public": false,
          "description": ""
        },
        "axios": {
          "public": false,
          "description": ""
        }
      },
      "computed": {
        "uploading": {
          "public": false,
          "description": ""
        }
      }
    }
  },
  "select": {
    "base": {
      "methods": {
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
        }
      }
    }
  },
  "slots": {
    "base": {
      "computed": {
        "elementSlots": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
        },
        "fieldSlots": {
          "public": false,
          "description": ""
        },
        "elementSlotProps": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        }
      }
    },
    "file": {
      "computed": {
        "elementSlots": {
          "public": true,
          "types": [
            "object"
          ],
          "description": "Returns slots for the element. Setting the value as an object will merge the current slots with the provided values."
        },
        "fieldSlots": {
          "public": false,
          "description": ""
        },
        "elementSlotProps": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        }
      }
    }
  },
  "sort": {
    "base": {
      "data": {
        "list": {
          "public": true,
          "types": [
            "HTMLElement"
          ],
          "description": ""
        },
        "sortable": {
          "public": false,
          "description": ""
        }
      },
      "computed": {
        "isSortable": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        }
      },
      "methods": {
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
        "initSortable": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "destroySortable": {
          "public": true,
          "returns": "void",
          "description": ""
        }
      }
    }
  },
  "sorting": {
    "base": {
      "data": {
        "sorting": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        }
      }
    }
  },
  "static": {
    "base": {
      "computed": {
        "isHtml": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Determines if HTML content should be rendered for the element."
        }
      }
    }
  },
  "toggle": {
    "base": {
      "methods": {
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
        }
      }
    }
  },
  "trix": {
    "base": {
      "computed": {
        "trixEndpoint": {
          "public": true,
          "default": "\"...\"",
          "types": [
            "string"
          ],
          "description": "Endpoint to be called to upload attachments. Defaults to config's `config.endpoints.elements`<br>`.trix.attachment`."
        }
      },
      "data": {
        "focused": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": ""
        }
      }
    }
  },
  "validation": {
    "base": {
      "data": {
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
        }
      },
      "computed": {
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
        "validationRules": {
          "public": true,
          "types": [
            "string",
            "array"
          ],
          "description": ""
        }
      },
      "methods": {
        "validate": {
          "public": true,
          "returns": "void",
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
        }
      }
    },
    "list": {
      "data": {
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
        }
      },
      "computed": {
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
        "validationRules": {
          "public": true,
          "types": [
            "string",
            "array"
          ],
          "description": ""
        }
      },
      "methods": {
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
        "dirt": {
          "public": true,
          "returns": "void",
          "description": "Flag the element as dirty."
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
        "initValidation": {
          "public": false,
          "returns": "void",
          "description": "Initalizes validators."
        }
      }
    },
    "multilingual": {
      "data": {
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
        }
      },
      "computed": {
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
        "validationRules": {
          "public": false,
          "description": ""
        }
      },
      "methods": {
        "validate": {
          "public": true,
          "returns": "void",
          "description": ""
        },
        "validateLanguage": {
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
        }
      }
    },
    "object": {
      "data": {
        "messageBag": {
          "public": true,
          "default": "{MessageBag}",
          "types": [
            "MessageBag"
          ],
          "description": "Message bag service."
        }
      },
      "computed": {
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
        }
      },
      "methods": {
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
        }
      }
    },
    "slider": {
      "data": {
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
        }
      },
      "computed": {
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
        "validationRules": {
          "public": true,
          "types": [
            "string",
            "array"
          ],
          "description": ""
        }
      },
      "methods": {
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
        }
      }
    },
    "file": {
      "data": {
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
        }
      },
      "computed": {
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
          "description": "Whether the element is `pending`, `debouncing` or `uploading`."
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
        "validationRules": {
          "public": true,
          "types": [
            "string",
            "array"
          ],
          "description": ""
        }
      },
      "methods": {
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
        }
      }
    }
  },
  "value": {
    "base": {
      "data": {
        "initialValue": {
          "public": true,
          "types": [
            "any"
          ],
          "description": ""
        },
        "internalValue": {
          "public": true,
          "types": [
            "any"
          ],
          "description": ""
        }
      },
      "computed": {
        "value": {
          "public": true,
          "types": [
            "any"
          ],
          "description": ""
        },
        "model": {
          "public": true,
          "types": [
            "any"
          ],
          "description": ""
        }
      }
    },
    "object": {
      "data": {
        "internalValue": {
          "public": true,
          "types": [
            "any"
          ],
          "description": ""
        }
      },
      "computed": {
        "value": {
          "public": true,
          "types": [
            "any"
          ],
          "description": ""
        }
      }
    },
    "group": {
      "computed": {
        "value": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        }
      }
    },
    "multilingual": {
      "computed": {
        "value": {
          "public": true,
          "types": [
            "any"
          ],
          "description": ""
        },
        "model": {
          "public": true,
          "types": [
            "object"
          ],
          "description": ""
        }
      }
    },
    "date": {
      "computed": {
        "value": {
          "public": true,
          "types": [
            "any"
          ],
          "description": ""
        },
        "model": {
          "public": true,
          "types": [
            "Date"
          ],
          "description": ""
        }
      }
    },
    "dates": {
      "computed": {
        "value": {
          "public": true,
          "types": [
            "any"
          ],
          "description": ""
        },
        "model": {
          "public": true,
          "types": [
            "array"
          ],
          "description": ""
        }
      }
    }
  },
  "view": {
    "base": {
      "data": {
        "hidden": {
          "public": true,
          "default": "false",
          "types": [
            "boolean"
          ],
          "description": "Whether the element was hidden programmatically with `.show()` / `.hide()` methods."
        }
      },
      "computed": {
        "visible": {
          "public": true,
          "types": [
            "boolean"
          ],
          "description": "Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`."
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
        }
      }
    }
  },
  "watchValue": {}
}