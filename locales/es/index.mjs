export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ Agregar",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "Archivo",
        "dndTitle": "Cargar archivo.",
        "dndDescription": "Suelte el archivo o haga clic aquí para cargar.",
        "removeConfirm": "Al eliminar el archivo, este será eliminado permanentemente. ¿Está seguro que desea continuar?",
        "select": "Seleccione Archivo",
        "upload": "Cargar"
      },
      "multifile": {
        "uploadButton": "Cargar archivos",
        "dndTitle": "Cargar archivos",
        "dndDescription": "Suelte el archivo o haga clic aquí para cargar"
      },
      "gallery": {
        "uploadButton": "Cargar imágenes.",
        "dndTitle": "Cargar imágenes.",
        "dndDescription": "Suelte las imágenes o haga clic aquí para cargar."
      }
    },
    "steps": {
      "finish": "Terminar",
      "next": "Siguiente",
      "previous": "Previo"
    },
    "editor": {
      "acceptedMimesError": "Los mimos aceptados son: :mimes",
      "acceptedExtensionsError": "Las extensiones aceptadas son: :extensions"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": [
          "Dom",
          "Lun",
          "Mar",
          "Mié",
          "Jue",
          "Vie",
          "Sáb"
        ],
        "longhand": [
          "Domingo",
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes",
          "Sábado"
        ]
      },
      "months": {
        "shorthand": [
          "Ene",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul",
          "Ago",
          "Sep",
          "Oct",
          "Nov",
          "Dic"
        ],
        "longhand": [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre"
        ]
      },
      "daysInMonth": [
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
      ],
      "firstDayOfWeek": 1,
      "ordinal": function () {
        return "º";
      },
      "rangeSeparator": " a ",
      "weekAbbreviation": "Wk",
      "scrollTitle": "Scroll to increment",
      "toggleTitle": "Click to toggle",
      "amPM": [
        "AM",
        "PM"
      ],
      "yearAriaLabel": "Year",
      "monthAriaLabel": "Month",
      "hourAriaLabel": "Hour",
      "minuteAriaLabel": "Minute"
    },
    "dateFormats": {
      "datetimeSeconds24": "DD/MM/YYYY HH:mm:ss",
      "datetimeSeconds12": "DD/MM/YYYY hh:mm:ss a",
      "datetime24": "DD/MM/YYYY HH:mm",
      "datetime12": "DD/MM/YYYY hh:mm a",
      "timeSeconds24": "HH:mm:ss",
      "timeSeconds12": "hh:mm:ss a",
      "time24": "HH:mm",
      "time12": "hh:mm a",
      "date": "DD/MM/YYYY"
    },
    "multiselect": {
      "multipleLabelOne": "1 opción seleccionada",
      "multipleLabelMore": ":options opciones seleccionadas",
      "noResults": "No se encuentran opciones",
      "noOptions": "La lista está vacía"
    },
    "defaultMessage": "Campo inválido",
    "a11y": {
      "file": {
        "description": "Press Backspace to remove"
      },
      "list": {
        "remove": "Remove item button"
      }
    }
  },
  "validation": {
    "accepted": ":attribute debe ser aceptado.",
    "active_url": ":attribute no es una URL válida.",
    "after": ":attribute debe ser una fecha posterior a :date.",
    "after_or_equal": ":attribute debe ser una fecha posterior o igual a :date.",
    "alpha": ":attribute sólo debe contener letras.",
    "alpha_dash": ":attribute sólo debe contener letras, números, guiones y guiones bajos.",
    "alpha_num": ":attribute sólo debe contener letras y números.",
    "array": ":attribute debe ser un conjunto.",
    "before": ":attribute debe ser una fecha anterior a :date.",
    "before_or_equal": ":attribute debe ser una fecha anterior o igual a :date.",
    "between": {
      "numeric": ":attribute tiene que estar entre :min - :max.",
      "file": ":attribute debe pesar entre :min - :max kilobytes.",
      "string": ":attribute tiene que tener entre :min - :max caracteres.",
      "array": ":attribute tiene que tener entre :min - :max elementos."
    },
    "boolean": "El campo :attribute debe tener un valor verdadero o falso.",
    "captcha": "Please verify that you are not a robot.",
    "confirmed": "La confirmación de :attribute no coincide.",
    "date": ":attribute no es una fecha válida.",
    "date_format": ":attribute no corresponde al formato :format.",
    "date_equals": ":attribute debe ser una fecha igual a :date.",
    "different": ":attribute y :other deben ser diferentes.",
    "digits": ":attribute debe tener :digits dígitos.",
    "digits_between": ":attribute debe tener entre :min y :max dígitos.",
    "dimensions": "Las dimensiones de la imagen :attribute no son válidas.",
    "distinct": "El campo :attribute contiene un valor duplicado.",
    "email": ":attribute no es un correo válido.",
    "exists": "El :attribute seleccionado es inválido.",
    "file": "El campo :attribute debe ser un archivo.",
    "filled": "El campo :attribute es obligatorio.",
    "gt": {
      "numeric": "El campo :attribute debe ser mayor que :value.",
      "file": "El campo :attribute debe tener más de :value kilobytes.",
      "string": "El campo :attribute debe tener más de :value caracteres.",
      "array": "El campo :attribute debe tener más de :value elementos."
    },
    "gte": {
      "numeric": "El campo :attribute debe ser como mínimo :value.",
      "file": "El campo :attribute debe tener como mínimo :value kilobytes.",
      "string": "El campo :attribute debe tener como mínimo :value caracteres.",
      "array": "El campo :attribute debe tener como mínimo :value elementos."
    },
    "image": ":attribute debe ser una imagen.",
    "in": ":attribute es inválido.",
    "in_array": "El campo :attribute no existe en :other.",
    "integer": ":attribute debe ser un número entero.",
    "ip": ":attribute debe ser una dirección IP válida.",
    "ipv4": ":attribute debe ser una dirección IPv4 válida.",
    "ipv6": ":attribute debe ser una dirección IPv6 válida.",
    "json": "El campo :attribute debe ser una cadena JSON válida.",
    "lt": {
      "numeric": "El campo :attribute debe ser menor que :value.",
      "file": "El campo :attribute debe tener menos de :value kilobytes.",
      "string": "El campo :attribute debe tener menos de :value caracteres.",
      "array": "El campo :attribute debe tener menos de :value elementos."
    },
    "lte": {
      "numeric": "El campo :attribute debe ser como máximo :value.",
      "file": "El campo :attribute debe tener como máximo :value kilobytes.",
      "string": "El campo :attribute debe tener como máximo :value caracteres.",
      "array": "El campo :attribute debe tener como máximo :value elementos."
    },
    "max": {
      "numeric": ":attribute no debe ser mayor que :max.",
      "file": ":attribute no debe ser mayor que :max kilobytes.",
      "string": ":attribute no debe ser mayor que :max caracteres.",
      "array": ":attribute no debe tener más de :max elementos."
    },
    "mimes": ":attribute debe ser un archivo con formato: :values.",
    "mimetypes": ":attribute debe ser un archivo con formato: :values.",
    "min": {
      "numeric": "El tamaño de :attribute debe ser de al menos :min.",
      "file": "El tamaño de :attribute debe ser de al menos :min kilobytes.",
      "string": ":attribute debe contener al menos :min caracteres.",
      "array": ":attribute debe tener al menos :min elementos."
    },
    "not_in": ":attribute es inválido.",
    "not_regex": "El formato del campo :attribute no es válido.",
    "numeric": ":attribute debe ser numérico.",
    "present": "The :attribute field must be present.",
    "regex": "El formato de :attribute es inválido.",
    "required": "El campo :attribute es obligatorio.",
    "required_if": "The :attribute field is required when :other is :value.",
    "required_unless": "The :attribute field is required unless :other is in :values.",
    "required_with": "The :attribute field is required when :values is present.",
    "required_with_all": "The :attribute field is required when :values are present.",
    "required_without": "The :attribute field is required when :values is not present.",
    "required_without_all": "The :attribute field is required when none of :values are present.",
    "same": ":attribute y :other deben coincidir.",
    "size": {
      "numeric": "El tamaño de :attribute debe ser :size.",
      "file": "El tamaño de :attribute debe ser :size kilobytes.",
      "string": ":attribute debe contener :size caracteres.",
      "array": ":attribute debe contener :size elementos."
    },
    "string": "El campo :attribute debe ser una cadena de caracteres.",
    "timezone": ":Attribute debe ser una zona horaria válida.",
    "unique": "El campo :attribute ya ha sido registrado.",
    "uploaded": "The :attribute failed to upload.",
    "url": ":Attribute debe ser una URL válida.",
    "uuid": "El campo :attribute debe ser un UUID válido.",
    "remote": "The :attribute field is invalid."
  }
}