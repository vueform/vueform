export default {
  "addons": {
    "base": {
      "options": {
        "addons": {
          "default": "{}",
          "types": [
            "object"
          ],
          "description": "An object containing `before` and `after` properties, representing the contents of the input's before and after addons."
        }
      },
      "computed": {
        "hasAddon": {
          "types": [
            "boolean"
          ],
          "description": "Helper property used to determine internally if the element has any addons."
        }
      }
    }
  },
  "autocomplete": {
    "base": {
      "options": {
        "autocomplete": {
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "The `autocomplete` attribute of the input field."
        }
      }
    }
  },
  "autogrow": {
    "base": {
      "options": {
        "autogrow": {
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the textarea should grow."
        },
        "rows": {
          "default": "3",
          "types": [
            "number"
          ],
          "description": "The `rows` attribute of the textarea."
        }
      },
      "methods": {
        "autosize": {
          "return": "void",
          "description": "Refreshes size."
        }
      }
    },
    "multilingual": {
      "options": {
        "autogrow": {
          "default": "true",
          "types": [
            "boolean"
          ],
          "description": "Whether the textarea should grow."
        },
        "rows": {
          "default": "3",
          "types": [
            "number"
          ],
          "description": "The `rows` attribute of the textarea custom."
        }
      },
      "methods": {
        "autosize": {
          "return": "void",
          "description": "Refreshes size."
        }
      }
    }
  },
  "baseElement": {
    "base": {
      "options": {
        "type": {
          "default": "schema.type",
          "types": [
            "string"
          ],
          "description": ""
        }
      },
      "computed": {
        "isStatic": {
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "isFileType": {
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is a file."
        },
        "isImageType": {
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is an image."
        },
        "isArrayType": {
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is an array."
        },
        "el$": {
          "types": [
            "object"
          ],
          "description": ""
        }
      }
    },
    "list": {
      "computed": {
        "isArrayType": {
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is an array."
        },
        "el$": {
          "types": [
            "object"
          ],
          "description": ""
        },
        "isStatic": {
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "isFileType": {
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is a file."
        },
        "isImageType": {
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is an image."
        }
      },
      "options": {
        "type": {
          "default": "schema.type",
          "types": [
            "string"
          ],
          "description": ""
        }
      }
    },
    "file": {
      "computed": {
        "isFileType": {
          "return": "boolean",
          "description": "Determines if the element's value is a file."
        },
        "el$": {
          "types": [
            "object"
          ],
          "description": ""
        },
        "isStatic": {
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "isArrayType": {
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is an array."
        },
        "isImageType": {
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is an image."
        }
      },
      "options": {
        "type": {
          "default": "schema.type",
          "types": [
            "string"
          ],
          "description": ""
        }
      }
    },
    "image": {
      "computed": {
        "isImageType": {
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is an image."
        },
        "el$": {
          "types": [
            "object"
          ],
          "description": ""
        },
        "isStatic": {
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "isFileType": {
          "return": "boolean",
          "description": "Determines if the element's value is a file."
        },
        "isArrayType": {
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is an array."
        }
      },
      "options": {
        "type": {
          "default": "schema.type",
          "types": [
            "string"
          ],
          "description": ""
        }
      }
    },
    "static": {
      "computed": {
        "isStatic": {
          "types": [
            "boolean"
          ],
          "description": ""
        },
        "el$": {
          "types": [
            "object"
          ],
          "description": ""
        },
        "isFileType": {
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is a file."
        },
        "isArrayType": {
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is an array."
        },
        "isImageType": {
          "types": [
            "boolean"
          ],
          "description": "Determines if the element's value is an image."
        }
      },
      "options": {
        "type": {
          "default": "schema.type",
          "types": [
            "string"
          ],
          "description": ""
        }
      }
    }
  }
}