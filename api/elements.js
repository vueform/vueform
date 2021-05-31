export default {
  "address": {
    "features": [
      // "baseElement",
      // "children_address",
      // "classes",
      // "columns",
      // "components",
      // "conditions",
      // "data_object",
      // "default_object",
      // "disabled",
      // "elements",
      // "events",
      // "form$",
      // "genericName",
      // "label",
      // "layout",
      // "location_address",
      // "nullValue_address",
      // "path",
      // "slots",
      // "theme",
      // "validation_object",
      "value_object",
      // "view",
      // "watchValue"
    ],
    "slots": [
      "label",
      "description",
      "message",
      "before",
      "between",
      "after"
    ],
    "events": [
      "change"
    ],
    "props": {
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "provider": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "options": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "readonly": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "required": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "embed": {
        "required": "false",
        "types": [
          "boolean"
        ]
      }
    }
  },
  "button": {
    "features": [
      "baseElement_static",
      "button",
      "classes_button",
      "columns",
      "components",
      "conditions",
      "disabled_button",
      "form$",
      "genericName",
      "label",
      "layout",
      "path",
      "slots",
      "theme",
      "view"
    ],
    "slots": [
      "label",
      "description",
      "before",
      "between",
      "after"
    ],
    "events": [],
    "props": {
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "buttonLabel": {
        "required": "false",
        "types": [
          "string",
          "object",
          "function"
        ]
      },
      "buttonType": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "buttonClass": {
        "required": "false",
        "types": [
          "string",
          "array",
          "object"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "function",
          "boolean"
        ]
      },
      "loading": {
        "required": "false",
        "types": [
          "function",
          "boolean"
        ]
      },
      "href": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "target": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "onClick": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "resets": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "submits": {
        "required": "false",
        "types": [
          "boolean"
        ]
      }
    }
  },
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
      "view",
      "watchValue"
    ],
    "slots": [
      "label",
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
      "type": {
        "required": "false",
        "types": [
          "string"
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
      "id": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "text": {
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
      "debounce": {
        "required": "false",
        "types": [
          "number"
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
      "view",
      "watchValue"
    ],
    "slots": [
      "label",
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
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "array"
        ]
      },
      "id": {
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
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "disables": {
        "required": "false",
        "types": [
          "array"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ]
      }
    }
  },
  "date": {
    "features": [
      "addons",
      "baseElement",
      "classes",
      "columns",
      "components",
      "conditions",
      "data_date",
      "dateFormat",
      "default",
      "disabled",
      "empty",
      "events",
      "fieldId",
      "form$",
      "genericName",
      "handleChange",
      "input",
      "label",
      "layout",
      "nullValue",
      "options_date",
      "path",
      "slots",
      "theme",
      "validation",
      "value_date",
      "view",
      "watchValue"
    ],
    "slots": [
      "label",
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
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "string",
          "Date"
        ]
      },
      "addons": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "floating": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "id": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "displayFormat": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "valueFormat": {
        "required": "false",
        "types": [
          "string",
          "boolean"
        ]
      },
      "loadFormat": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "date": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "time": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "seconds": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "min": {
        "required": "false",
        "types": [
          "string",
          "Date"
        ]
      },
      "max": {
        "required": "false",
        "types": [
          "string",
          "Date"
        ]
      },
      "disables": {
        "required": "false",
        "types": [
          "array"
        ]
      },
      "options": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "placeholder": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "readonly": {
        "required": "false",
        "types": [
          "boolean"
        ]
      }
    }
  },
  "dates": {
    "features": [
      "addons",
      "baseElement_dates",
      "classes",
      "columns",
      "components",
      "conditions",
      "data_dates",
      "dateFormat_dates",
      "default",
      "disabled",
      "empty",
      "events",
      "fieldId",
      "form$",
      "genericName",
      "handleChange",
      "input",
      "label",
      "layout",
      "nullValue_array",
      "options_dates",
      "path",
      "slots",
      "theme",
      "validation",
      "value_dates",
      "view",
      "watchValue"
    ],
    "slots": [
      "label",
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
      "type": {
        "required": "false",
        "types": [
          "string"
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
      "addons": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "floating": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "id": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "range": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "displayFormat": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "valueFormat": {
        "required": "false",
        "types": [
          "string",
          "boolean"
        ]
      },
      "loadFormat": {
        "required": "false",
        "types": [
          "string",
          "boolean"
        ]
      },
      "mode": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "min": {
        "required": "false",
        "types": [
          "string",
          "Date"
        ]
      },
      "max": {
        "required": "false",
        "types": [
          "string",
          "Date"
        ]
      },
      "disables": {
        "required": "false",
        "types": [
          "array"
        ]
      },
      "options": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "placeholder": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "readonly": {
        "required": "false",
        "types": [
          "boolean"
        ]
      }
    }
  },
  "file": {
    "features": [
      "baseElement_file",
      "classes_file",
      "columns",
      "components",
      "conditions",
      "data",
      "default",
      "disabled",
      "drop",
      "empty",
      "events",
      "fieldId",
      "file",
      "form$",
      "genericName_file",
      "handleError",
      "input",
      "label",
      "layout",
      "nullValue",
      "path",
      "removing",
      "request",
      "slots_file",
      "theme",
      "validation_file",
      "value",
      "view",
      "watchValue"
    ],
    "slots": [
      "label",
      "description",
      "error",
      "message",
      "before",
      "between",
      "after",
      "preview"
    ],
    "events": [
      "change",
      "remove",
      "error"
    ],
    "props": {
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "string",
          "File"
        ]
      },
      "embed": {
        "types": [
          "boolean"
        ],
        "required": "false"
      },
      "image": {
        "types": [
          "boolean"
        ],
        "required": "false"
      },
      "view": {
        "types": [
          "string"
        ],
        "required": "false"
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "drop": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "accept": {
        "required": "false",
        "types": [
          "string",
          "array"
        ]
      },
      "clickable": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "auto": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "methods": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "endpoints": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "params": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "softRemove": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "url": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "id": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "onRemove": {
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
  },
  "group": {
    "features": [
      // "baseElement",
      // "children_group",
      // "classes",
      // "columns",
      // "components",
      // "conditions",
      // "data_group",
      // "default_group",
      // "elements",
      // "events",
      // "form$",
      // "genericName",
      // "label",
      // "layout",
      // "nullValue_object",
      // "path_group",
      // "slots",
      // "theme",
      // "validation_group",
      "value_group",
      // "view",
      // "watchValue"
    ],
    "slots": [
      "label",
      "description",
      "message",
      "before",
      "between",
      "after"
    ],
    "events": [
      "change"
    ],
    "props": {
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "schema": {
        "required": "false",
        "types": [
          "object",
          "array"
        ]
      }
    }
  },
  "hidden": {
    "features": [
      "baseElement",
      "components",
      "conditions",
      "data",
      "default",
      "empty",
      "events",
      "fieldId",
      "form$",
      "genericName",
      "input",
      "nullValue",
      "path",
      "theme",
      "validation",
      "value",
      "watchValue"
    ],
    "slots": [],
    "events": [
      "change"
    ],
    "props": {
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "string",
          "number"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "id": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "meta": {
        "required": "false",
        "types": [
          "boolean"
        ]
      }
    }
  },
  "list": {
    "features": [
      // "baseElement_list",
      // "children",
      // "classes_list",
      // "columns",
      // "components",
      // "conditions",
      // "controls",
      // "data_list",
      // "default",
      // "disabled",
      // "elements",
      // "empty_array",
      // "events",
      // "form$",
      // "genericName",
      // "label",
      // "layout",
      // "nullValue_array",
      // "order",
      // "path",
      // "prototype",
      // "slots",
      // "sort",
      // "sorting",
      // "theme",
      // "validation_list",
      "value",
      // "view",
      // "watchValue"
    ],
    "slots": [
      "label",
      "description",
      "error",
      "message",
      "before",
      "between",
      "after"
    ],
    "events": [
      "change",
      "add",
      "remove",
      "sort"
    ],
    "props": {
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "array"
        ]
      },
      "initial": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "order": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "orderBy": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "storeOrder": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "sort": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "min": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "max": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "controls": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "object": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "element": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "onAdd": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "onRemove": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "onSort": {
        "required": "false",
        "types": [
          "function"
        ]
      }
    }
  },
  "location": {
    "features": [
      // "addons",
      // "baseElement",
      // "classes",
      // "columns",
      // "components",
      // "conditions",
      // "data",
      // "default",
      // "disabled",
      // "empty",
      // "events",
      // "fieldId",
      // "form$",
      // "genericName",
      // "input",
      // "label",
      // "layout",
      // "location",
      // "path",
      // "slots",
      // "theme",
      // "validation",
      "value",
      // "view",
      // "watchValue_location"
    ],
    "slots": [
      "label",
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
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "addons": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "displayKey": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "floating": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "id": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "provider": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "options": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "placeholder": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "readonly": {
        "required": "false",
        "types": [
          "boolean"
        ]
      }
    }
  },
  "multifile": {
    "features": [
      // "baseElement_list",
      // "children",
      // "classes_multifile",
      // "columns",
      // "components",
      // "conditions",
      // "data_list",
      // "default",
      // "disabled",
      // "drop_multifile",
      // "elements",
      // "empty_array",
      // "events",
      // "form$",
      // "genericName",
      // "input",
      // "label",
      // "layout",
      // "multifile",
      // "nullValue_array",
      // "order",
      // "path",
      // "prototype_multifile",
      // "slots",
      // "sort",
      // "sorting",
      // "theme",
      // "validation_list",
      "value",
      // "view",
      // "watchValue"
    ],
    "slots": [
      "label",
      "description",
      "error",
      "message",
      "before",
      "between",
      "after"
    ],
    "events": [
      "change",
      "add",
      "remove",
      "sort"
    ],
    "props": {
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "array"
        ]
      },
      "image": {
        "types": [
          "boolean"
        ],
        "required": "false"
      },
      "view": {
        "types": [
          "string"
        ],
        "required": "false"
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "initial": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "drop": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "accept": {
        "required": "false",
        "types": [
          "string",
          "array"
        ]
      },
      "order": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "orderBy": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "auto": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "file": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "storeFile": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "fields": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "sort": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "storeOrder": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "object": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "onAdd": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "onRemove": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "onSort": {
        "required": "false",
        "types": [
          "function"
        ]
      }
    }
  },
  "multiselect": {
    "features": [
      // "asyncItems",
      // "baseElement_multiselect",
      // "classes",
      // "columns",
      // "components",
      // "conditions",
      // "data",
      // "default",
      // "disabled",
      // "empty_array",
      // "events",
      // "fieldId",
      // "form$",
      // "genericName",
      // "handleSelectEvents",
      // "input",
      // "label",
      // "layout",
      // "nullValue_array",
      // "options_multiselect",
      // "path",
      // "select",
      // "slots",
      // "theme",
      // "validation",
      "value",
      // "view",
      // "watchValue"
    ],
    "slots": [
      "label",
      "description",
      "error",
      "message",
      "before",
      "between",
      "after",
      "beforelist",
      "afterlist",
      "multiplelabel",
      "noresults",
      "nooptions",
      "option"
    ],
    "events": [
      "change",
      "select",
      "deselect",
      "searchChange",
      "open",
      "close"
    ],
    "props": {
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "array"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "floating": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "id": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "items": {
        "required": "false",
        "types": [
          "object",
          "array",
          "function"
        ]
      },
      "search": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "options": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "placeholder": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "readonly": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "native": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "onSelect": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "onDeselect": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "onSearchChange": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "onOpen": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "onClose": {
        "required": "false",
        "types": [
          "function"
        ]
      }
    }
  },
  "object": {
    "features": [
      // "baseElement",
      // "children_object",
      // "classes",
      // "columns",
      // "components",
      // "conditions",
      // "data_object",
      // "default_object",
      // "elements",
      // "events",
      // "form$",
      // "genericName",
      // "label",
      // "layout",
      // "nullValue_object",
      // "path",
      // "slots",
      // "theme",
      // "validation_object",
      "value_object",
      // "view",
      // "watchValue"
    ],
    "slots": [
      "label",
      "description",
      "message",
      "before",
      "between",
      "after"
    ],
    "events": [
      "change"
    ],
    "props": {
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "schema": {
        "required": "false",
        "types": [
          "object",
          "array"
        ]
      },
      "embed": {
        "required": "false",
        "types": [
          "boolean"
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
      "view",
      "watchValue"
    ],
    "slots": [
      "label",
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
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "string",
          "number"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
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
      "text": {
        "required": "false",
        "types": [
          "string"
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
      "view",
      "watchValue"
    ],
    "slots": [
      "label",
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
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "string",
          "number"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
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
      "items": {
        "required": "false",
        "types": [
          "object",
          "array"
        ]
      }
    }
  },
  "select": {
    "features": [
      // "asyncItems",
      // "baseElement",
      // "classes",
      // "columns",
      // "components",
      // "conditions",
      // "data",
      // "default",
      // "disabled",
      // "empty",
      // "events",
      // "fieldId",
      // "form$",
      // "genericName",
      // "handleSelectEvents",
      // "input",
      // "label",
      // "layout",
      // "nullValue",
      // "options_select",
      // "path",
      // "slots",
      // "theme",
      // "validation",
      "value",
      // "view",
      // "watchValue"
    ],
    "slots": [
      "label",
      "description",
      "error",
      "message",
      "before",
      "between",
      "after",
      "beforelist",
      "afterlist",
      "singlelabel",
      "noresults",
      "nooptions",
      "option"
    ],
    "events": [
      "change",
      "select",
      "deselect",
      "searchChange",
      "open",
      "close"
    ],
    "props": {
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "string",
          "number",
          "object"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "floating": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "id": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "items": {
        "required": "false",
        "types": [
          "object",
          "array",
          "function"
        ]
      },
      "native": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "search": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "options": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "placeholder": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "readonly": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "noOptionsText": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "noResultsText": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "onSelect": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "onDeselect": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "onSearchChange": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "onOpen": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "onClose": {
        "required": "false",
        "types": [
          "function"
        ]
      }
    }
  },
  "slider": {
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
      "nullValue_min",
      "options_slider",
      "path",
      "slots",
      "theme",
      "validation_slider",
      "value",
      "view",
      "watchValue"
    ],
    "slots": [
      "label",
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
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "number",
          "array"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
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
      "min": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "max": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "step": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "tooltips": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "merge": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "format": {
        "required": "false",
        "types": [
          "object",
          "function"
        ]
      },
      "orientation": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "direction": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "height": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "options": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "readonly": {
        "required": "false",
        "types": [
          "boolean"
        ]
      }
    }
  },
  "static": {
    "features": [
      "baseElement_static",
      "classes",
      "columns",
      "components",
      "conditions",
      "events",
      "form$",
      "genericName",
      "label",
      "layout",
      "path",
      "slots",
      "static",
      "theme",
      "view"
    ],
    "slots": [
      "label",
      "description",
      "before",
      "between",
      "after"
    ],
    "events": [],
    "props": {
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "wrap": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "content": {
        "required": "false",
        "types": [
          "string",
          "object"
        ]
      }
    }
  },
  "tags": {
    "features": [
      // "asyncItems",
      // "baseElement_tags",
      // "classes",
      // "columns",
      // "components",
      // "conditions",
      // "data",
      // "default",
      // "disabled",
      // "empty_array",
      // "events",
      // "fieldId",
      // "form$",
      // "genericName",
      // "handleSelectEvents",
      // "handleTag",
      // "input",
      // "label",
      // "layout",
      // "nullValue_array",
      // "options_tags",
      // "path",
      // "select",
      // "slots",
      // "theme",
      // "validation",
      "value",
      // "view",
      // "watchValue"
    ],
    "slots": [
      "label",
      "description",
      "error",
      "message",
      "before",
      "between",
      "after",
      "beforelist",
      "afterlist",
      "noresults",
      "nooptions",
      "option",
      "tag"
    ],
    "events": [
      "change",
      "select",
      "deselect",
      "searchChange",
      "open",
      "close",
      "tag"
    ],
    "props": {
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "array"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "floating": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "id": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "items": {
        "required": "false",
        "types": [
          "object",
          "array",
          "function"
        ]
      },
      "search": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "create": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "options": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "placeholder": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "readonly": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "onSelect": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "onDeselect": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "onSearchChange": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "onOpen": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "onClose": {
        "required": "false",
        "types": [
          "function"
        ]
      },
      "onTag": {
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
      "view",
      "watchValue"
    ],
    "slots": [
      "label",
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
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "string",
          "number"
        ]
      },
      "addons": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "autogrow": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "rows": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "floating": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "id": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "placeholder": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "readonly": {
        "required": "false",
        "types": [
          "boolean"
        ]
      }
    }
  },
  "text": {
    "features": [
      // "addons",
      // "baseElement",
      // "classes",
      // "columns",
      // "components",
      // "conditions",
      // "data",
      // "default",
      // "disabled",
      // "empty",
      // "events",
      // "fieldId",
      // "form$",
      // "genericName",
      // "handleInput",
      // "input",
      // "label",
      // "layout",
      // "nullValue",
      // "path",
      // "slots",
      // "theme",
      // "validation",
      "value",
      // "view",
      // "watchValue"
    ],
    "slots": [
      "label",
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
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "string",
          "number"
        ]
      },
      "addons": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "autocomplete": {
        "required": "false",
        "types": [
          "string",
          "number"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "floating": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "id": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "inputType": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "placeholder": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "readonly": {
        "required": "false",
        "types": [
          "boolean"
        ]
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
      "view",
      "watchValue"
    ],
    "slots": [
      "label",
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
      "type": {
        "required": "false",
        "types": [
          "string"
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
      "debounce": {
        "required": "false",
        "types": [
          "number"
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
      "text": {
        "required": "false",
        "types": [
          "string"
        ]
      }
    }
  },
  "trix": {
    "features": [
      "baseElement",
      "classes_trix",
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
      "view",
      "watchValue"
    ],
    "slots": [
      "label",
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
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "string",
          "number"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
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
      "placeholder": {
        "required": "false",
        "types": [
          "string"
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
      "onError": {
        "required": "false",
        "types": [
          "function"
        ]
      }
    }
  },
  "tTextarea": {
    "features": [
      "addons",
      "autogrow_multilingual",
      "baseElement",
      "classes",
      "columns",
      "components",
      "conditions",
      "data_multilingual",
      "default_multilingual",
      "disabled",
      "empty_multilingual",
      "events",
      "fieldId",
      "form$",
      "genericName",
      "handleInput",
      "input",
      "label",
      "languages",
      "layout",
      "nullValue_multilingual",
      "path",
      "slots",
      "theme",
      "validation_multilingual",
      "value_multilingual",
      "view",
      "watchValue"
    ],
    "slots": [
      "label",
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
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "addons": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "autogrow": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "rows": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "floating": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "id": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "placeholder": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "readonly": {
        "required": "false",
        "types": [
          "boolean"
        ]
      }
    }
  },
  "tText": {
    "features": [
      "addons",
      "baseElement",
      "classes",
      "columns",
      "components",
      "conditions",
      "data_multilingual",
      "default_multilingual",
      "disabled",
      "empty_multilingual",
      "events",
      "fieldId",
      "form$",
      "genericName",
      "handleInput",
      "input",
      "label",
      "languages",
      "layout",
      "nullValue_multilingual",
      "path",
      "slots",
      "theme",
      "validation_multilingual",
      "value_multilingual",
      "view",
      "watchValue"
    ],
    "slots": [
      "label",
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
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "addons": {
        "required": "false",
        "types": [
          "object"
        ]
      },
      "autocomplete": {
        "required": "false",
        "types": [
          "string",
          "number"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
        ]
      },
      "disabled": {
        "required": "false",
        "types": [
          "boolean"
        ]
      },
      "floating": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "id": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "inputType": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "placeholder": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "readonly": {
        "required": "false",
        "types": [
          "boolean"
        ]
      }
    }
  },
  "tTrix": {
    "features": [
      "baseElement",
      "classes_trix",
      "columns",
      "components",
      "conditions",
      "data_ttrix",
      "default_multilingual",
      "disabled",
      "empty_multilingual",
      "events",
      "fieldId",
      "form$",
      "genericName",
      "handleError",
      "handleInput",
      "input",
      "label",
      "languages",
      "layout",
      "nullValue_multilingual",
      "path",
      "slots",
      "theme",
      "trix",
      "validation_multilingual",
      "value_multilingual",
      "view",
      "watchValue"
    ],
    "slots": [
      "label",
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
      "type": {
        "required": "false",
        "types": [
          "string"
        ]
      },
      "default": {
        "required": "false",
        "types": [
          "object",
          "string",
          "number"
        ]
      },
      "debounce": {
        "required": "false",
        "types": [
          "number"
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
      "placeholder": {
        "required": "false",
        "types": [
          "string"
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
      "onError": {
        "required": "false",
        "types": [
          "function"
        ]
      }
    }
  }
}