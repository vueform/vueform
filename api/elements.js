export default {
  "checkbox": {
    "features": [
      "baseElement",
      "classes",
      "columns",
      "components",
      "conditions",
      "data",
      "default",
      "disabled",
      "events",
      "fieldId",
      "form$",
      "genericName",
      "input",
      "label",
      "layout",
      "nullValue_boolean",
      "path",
      "slots",
      "theme",
      "toggle",
      "validation",
      "value",
      "view"
    ],
    "slots": [
      "label",
      "info",
      "description",
      "error",
      "message",
      "before",
      "between",
      "after"
    ],
    "events": [
      "change"
    ],
    "props": {
      "name": {
        "required": "true",
        "types": [
          "string",
          "number"
        ]
      },
      "inline": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "layout": {
        "required": "false",
        "types": [
          "string",
          "object",
          "boolean"
        ]
      },
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "trueValue": {
        "required": "false",
        "types": [
          "boolean",
          "string",
          "number"
        ]
      },
      "falseValue": {
        "required": "false",
        "types": [
          "boolean",
          "string",
          "number"
        ]
      },
      "addClass": {
        "required": "false",
        "types": [
          "string",
          "array",
          "object"
        ]
      },
      "overrideClasses": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "addClasses": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "columns": {
        "required": "false",
        "types": [
          "object",
          "string"
        ]
      },
      "overrideComponents": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "conditions": {
        "required": "false",
        "types": [
          "array"
        ]
      },
      "formatData": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "formatLoad": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "submit": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "string",
          "number",
          "boolean"
        ]
      },
      "description": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "id": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "info": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "label": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "before": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "between": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "after": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "slots": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "text": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "rules": {
        "required": "false",
        "types": [
          "array",
          "string",
          "object"
        ]
      },
      "messages": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "displayError": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "onChange": {
        "required": "false",
        "types": [
          "function"
        ]
      }
    }
  },
  "checkboxgroup": {
    "features": [
      "baseElement_checkboxgroup",
      "check",
      "classes",
      "columns",
      "components",
      "conditions",
      "data",
      "default",
      "disabled_checkboxgroup",
      "events",
      "fieldId",
      "form$",
      "genericName",
      "label",
      "layout",
      "nullValue_array",
      "path",
      "slots",
      "theme",
      "validation",
      "value",
      "view"
    ],
    "slots": [
      "label",
      "info",
      "description",
      "error",
      "message",
      "before",
      "between",
      "after",
      "checkbox"
    ],
    "events": [
      "change"
    ],
    "props": {
      "name": {
        "required": "true",
        "types": [
          "string",
          "number"
        ]
      },
      "inline": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "layout": {
        "required": "false",
        "types": [
          "string",
          "object",
          "boolean"
        ]
      },
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "addClass": {
        "required": "false",
        "types": [
          "string",
          "array",
          "object"
        ]
      },
      "overrideClasses": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "addClasses": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "columns": {
        "required": "false",
        "types": [
          "object",
          "string"
        ]
      },
      "overrideComponents": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "conditions": {
        "required": "false",
        "types": [
          "array"
        ]
      },
      "formatData": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "formatLoad": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "submit": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "array"
        ]
      },
      "description": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "disables": {
        "required": "false",
        "types": [
          "array"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "id": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "info": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "items": {
        "required": "false",
        "types": [
          "object",
          "array"
        ]
      },
      "label": {
        "required": "false",
        "types": [
          "string",
          "object",
          "function"
        ]
      },
      "before": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "between": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "after": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "slots": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "rules": {
        "required": "false",
        "types": [
          "array",
          "string",
          "object"
        ]
      },
      "messages": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "displayError": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "onChange": {
        "required": "false",
        "types": [
          "function"
        ]
      }
    }
  },
  "radio": {
    "features": [
      "baseElement",
      "classes",
      "columns",
      "components",
      "conditions",
      "data",
      "default",
      "disabled",
      "events",
      "fieldId",
      "form$",
      "genericName",
      "input",
      "label",
      "layout",
      "nullValue",
      "path",
      "radio",
      "slots",
      "theme",
      "validation",
      "value",
      "view"
    ],
    "slots": [
      "label",
      "info",
      "description",
      "error",
      "message",
      "before",
      "between",
      "after"
    ],
    "events": [
      "change"
    ],
    "props": {
      "name": {
        "required": "true",
        "types": [
          "string",
          "number"
        ]
      },
      "inline": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "layout": {
        "required": "false",
        "types": [
          "string",
          "object",
          "boolean"
        ]
      },
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "addClass": {
        "required": "false",
        "types": [
          "string",
          "array",
          "object"
        ]
      },
      "overrideClasses": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "addClasses": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "columns": {
        "required": "false",
        "types": [
          "object",
          "string"
        ]
      },
      "overrideComponents": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "conditions": {
        "required": "false",
        "types": [
          "array"
        ]
      },
      "formatData": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "formatLoad": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "submit": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "string",
          "number"
        ]
      },
      "description": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "id": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "info": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "label": {
        "required": "false",
        "types": [
          "string",
          "object",
          "function"
        ]
      },
      "fieldName": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "radioValue": {
        "required": "false",
        "types": [
          "boolean",
          "string",
          "number"
        ]
      },
      "before": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "between": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "after": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "slots": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "text": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "rules": {
        "required": "false",
        "types": [
          "array",
          "string",
          "object"
        ]
      },
      "messages": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "displayError": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "onChange": {
        "required": "false",
        "types": [
          "function"
        ]
      }
    }
  },
  "radiogroup": {
    "features": [
      "baseElement",
      "classes",
      "columns",
      "components",
      "conditions",
      "data",
      "default",
      "disabled_radiogroup",
      "events",
      "fieldId",
      "form$",
      "genericName",
      "label",
      "layout",
      "nullValue",
      "path",
      "slots",
      "theme",
      "validation",
      "value",
      "view"
    ],
    "slots": [
      "label",
      "info",
      "description",
      "error",
      "message",
      "before",
      "between",
      "after",
      "radio"
    ],
    "events": [
      "change"
    ],
    "props": {
      "name": {
        "required": "true",
        "types": [
          "string",
          "number"
        ]
      },
      "inline": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "layout": {
        "required": "false",
        "types": [
          "string",
          "object",
          "boolean"
        ]
      },
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "addClass": {
        "required": "false",
        "types": [
          "string",
          "array",
          "object"
        ]
      },
      "overrideClasses": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "addClasses": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "columns": {
        "required": "false",
        "types": [
          "object",
          "string"
        ]
      },
      "overrideComponents": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "conditions": {
        "required": "false",
        "types": [
          "array"
        ]
      },
      "formatData": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "formatLoad": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "submit": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "string",
          "number"
        ]
      },
      "description": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "disables": {
        "required": "false",
        "types": [
          "array"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "id": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "info": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "items": {
        "required": "false",
        "types": [
          "object",
          "array"
        ]
      },
      "label": {
        "required": "false",
        "types": [
          "string",
          "object",
          "function"
        ]
      },
      "before": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "between": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "after": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "slots": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "rules": {
        "required": "false",
        "types": [
          "array",
          "string",
          "object"
        ]
      },
      "messages": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "displayError": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "onChange": {
        "required": "false",
        "types": [
          "function"
        ]
      }
    }
  },
  "textarea": {
    "features": [
      "addons",
      "autogrow",
      "baseElement",
      "classes",
      "columns",
      "components",
      "conditions",
      "data",
      "default",
      "disabled",
      "empty",
      "events",
      "fieldId",
      "form$",
      "genericName",
      "handleInput",
      "input",
      "label",
      "layout",
      "nullValue",
      "path",
      "slots",
      "theme",
      "validation",
      "value",
      "view"
    ],
    "slots": [
      "label",
      "info",
      "description",
      "error",
      "message",
      "before",
      "between",
      "after",
      "addonBefore",
      "addonAfter"
    ],
    "events": [
      "change"
    ],
    "props": {}
  },
  "text": {
    "features": [
      "addons",
      "baseElement",
      "classes",
      "columns",
      "components",
      "conditions",
      "data",
      "default",
      "disabled",
      "empty",
      "events",
      "fieldId",
      "form$",
      "genericName",
      "handleInput",
      "input",
      "label",
      "layout",
      "nullValue",
      "path",
      "slots",
      "theme",
      "validation",
      "value",
      "view"
    ],
    "slots": [
      "label",
      "info",
      "description",
      "error",
      "message",
      "before",
      "between",
      "after",
      "addonBefore",
      "addonAfter"
    ],
    "events": [
      "change"
    ],
    "props": {
      "name": {
        "required": "true",
        "types": [
          "string",
          "number"
        ]
      },
      "inline": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "layout": {
        "required": "false",
        "types": [
          "string",
          "object",
          "boolean"
        ],
        "default": "\"ElementLayout\""
      },
      "addons": {
        "required": "false",
        "types": [
          "object"
        ],
        "default": "\"ElementLayout\""
      },
      "autocomplete": {
        "required": "false",
        "types": [
          "string",
          "number"
        ],
        "default": "\"ElementLayout\""
      },
      "type": {
        "required": "false",
        "types": [
          "string"
        ],
        "default": "\"ElementLayout\""
      },
      "addClass": {
        "required": "false",
        "types": [
          "string",
          "array",
          "object"
        ],
        "default": "\"ElementLayout\""
      },
      "overrideClasses": {
        "required": "false",
        "types": [
          "object"
        ],
        "default": "\"ElementLayout\""
      },
      "addClasses": {
        "required": "false",
        "types": [
          "object"
        ],
        "default": "\"ElementLayout\""
      },
      "columns": {
        "required": "false",
        "types": [
          "object",
          "string"
        ],
        "default": "\"ElementLayout\""
      },
      "overrideComponents": {
        "required": "false",
        "types": [
          "object"
        ],
        "default": "\"ElementLayout\""
      },
      "conditions": {
        "required": "false",
        "types": [
          "array"
        ],
        "default": "\"ElementLayout\""
      },
      "formatData": {
        "required": "false",
        "types": [
          "function"
        ],
        "default": "\"ElementLayout\""
      },
      "formatLoad": {
        "required": "false",
        "types": [
          "function"
        ],
        "default": "\"ElementLayout\""
      },
      "submit": {
        "required": "false",
        "types": [
          "boolean"
        ],
        "default": "\"ElementLayout\""
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ],
        "default": "\"ElementLayout\""
      },
      "default": {
        "required": "false",
        "types": [
          "string",
          "number"
        ],
        "default": "\"ElementLayout\""
      },
      "description": {
        "required": "false",
        "types": [
          "string"
        ],
        "default": "\"ElementLayout\""
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ],
        "default": "\"ElementLayout\""
      },
      "floating": {
        "required": "false",
        "types": [
          "string"
        ],
        "default": "\"ElementLayout\""
      },
      "id": {
        "required": "false",
        "types": [
          "string"
        ],
        "default": "\"ElementLayout\""
      },
      "info": {
        "required": "false",
        "types": [
          "string"
        ],
        "default": "\"ElementLayout\""
      },
      "inputType": {
        "required": "false",
        "types": [
          "string"
        ],
        "default": "\"ElementLayout\""
      },
      "label": {
        "required": "false",
        "types": [
          "string",
          "object",
          "function"
        ],
        "default": "\"ElementLayout\""
      },
      "placeholder": {
        "required": "false",
        "types": [
          "string"
        ],
        "default": "\"ElementLayout\""
      },
      "readonly": {
        "required": "false",
        "types": [
          "boolean"
        ],
        "default": "\"ElementLayout\""
      },
      "before": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ],
        "default": "\"ElementLayout\""
      },
      "between": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ],
        "default": "\"ElementLayout\""
      },
      "after": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ],
        "default": "\"ElementLayout\""
      },
      "slots": {
        "required": "false",
        "types": [
          "object"
        ],
        "default": "\"ElementLayout\""
      },
      "rules": {
        "required": "false",
        "types": [
          "array",
          "string",
          "object"
        ],
        "default": "\"ElementLayout\""
      },
      "messages": {
        "required": "false",
        "types": [
          "object"
        ],
        "default": "\"ElementLayout\""
      },
      "displayError": {
        "required": "false",
        "types": [
          "boolean"
        ],
        "default": "\"ElementLayout\""
      },
      "onChange": {
        "required": "false",
        "types": [
          "function"
        ],
        "default": "\"ElementLayout\""
      }
    }
  },
  "toggle": {
    "features": [
      "baseElement",
      "classes",
      "columns",
      "components",
      "conditions",
      "data",
      "default",
      "disabled",
      "events",
      "fieldId",
      "form$",
      "genericName",
      "handleChange",
      "input",
      "label",
      "layout",
      "nullValue_boolean",
      "options_toggle",
      "path",
      "slots",
      "theme",
      "toggle",
      "validation",
      "value",
      "view"
    ],
    "slots": [
      "label",
      "info",
      "description",
      "error",
      "message",
      "before",
      "between",
      "after"
    ],
    "events": [
      "change"
    ],
    "props": {
      "name": {
        "required": "true",
        "types": [
          "string",
          "number"
        ]
      },
      "inline": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "layout": {
        "required": "false",
        "types": [
          "string",
          "object",
          "boolean"
        ]
      },
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "trueValue": {
        "required": "false",
        "types": [
          "boolean",
          "string",
          "number"
        ]
      },
      "falseValue": {
        "required": "false",
        "types": [
          "boolean",
          "string",
          "number"
        ]
      },
      "addClass": {
        "required": "false",
        "types": [
          "string",
          "array",
          "object"
        ]
      },
      "overrideClasses": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "addClasses": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "columns": {
        "required": "false",
        "types": [
          "object",
          "string"
        ]
      },
      "overrideComponents": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "conditions": {
        "required": "false",
        "types": [
          "array"
        ]
      },
      "formatData": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "formatLoad": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "submit": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "string",
          "number",
          "boolean"
        ]
      },
      "description": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "id": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "info": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "label": {
        "required": "false",
        "types": [
          "string",
          "object",
          "function"
        ]
      },
      "labels": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "width": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "height": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "speed": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "colors": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "options": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "before": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "between": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "after": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "slots": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "text": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "rules": {
        "required": "false",
        "types": [
          "array",
          "string",
          "object"
        ]
      },
      "messages": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "displayError": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "onChange": {
        "required": "false",
        "types": [
          "function"
        ]
      }
    }
  },
  "trix": {
    "features": [
      "baseElement",
      "classes",
      "columns",
      "components",
      "conditions",
      "data_trix",
      "default",
      "disabled",
      "empty",
      "events",
      "fieldId",
      "form$",
      "genericName",
      "handleError",
      "handleInput",
      "input",
      "label",
      "layout",
      "nullValue",
      "path",
      "slots",
      "theme",
      "trix",
      "validation",
      "value",
      "view"
    ],
    "slots": [
      "label",
      "info",
      "description",
      "error",
      "message",
      "before",
      "between",
      "after"
    ],
    "events": [
      "change",
      "error"
    ],
    "props": {
      "name": {
        "required": "true",
        "types": [
          "string",
          "number"
        ]
      },
      "inline": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "layout": {
        "required": "false",
        "types": [
          "string",
          "object",
          "boolean"
        ]
      },
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "addClass": {
        "required": "false",
        "types": [
          "string",
          "array",
          "object"
        ]
      },
      "overrideClasses": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "addClasses": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "columns": {
        "required": "false",
        "types": [
          "object",
          "string"
        ]
      },
      "overrideComponents": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "conditions": {
        "required": "false",
        "types": [
          "array"
        ]
      },
      "formatData": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "formatLoad": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "submit": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "string",
          "number"
        ]
      },
      "description": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "id": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "info": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "label": {
        "required": "false",
        "types": [
          "string",
          "object",
          "function"
        ]
      },
      "placeholder": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "before": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "between": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "after": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "slots": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "accept": {
        "required": "false",
        "types": [
          "array"
        ]
      },
      "acceptMimes": {
        "required": "false",
        "types": [
          "array"
        ]
      },
      "endpoint": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "rules": {
        "required": "false",
        "types": [
          "array",
          "string",
          "object"
        ]
      },
      "messages": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "displayError": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "onChange": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "onError": {
        "required": "false",
        "types": [
          "function"
        ]
      }
    }
  }
}