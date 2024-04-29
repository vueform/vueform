export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ Ajoutez le ficher",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "Fichier",
        "dndTitle": "Téléchargez le fichier",
        "dndDescription": "Déposez le ficher ou cliquez ici pour le télécharger.",
        "removeConfirm": "En supprimant le fichier, il sera définitivement supprimé. Êtes-vous sûr de vouloir procéder ?",
        "select": "Télécharger les fichiers.",
        "upload": "Télécharger"
      },
      "multifile": {
        "uploadButton": "Télécharger les fichiers.",
        "dndTitle": "Télécharger les fichiers.",
        "dndDescription": "Déposer les fichiers ou cliquer ici pour les télécharger. Télécharger des images."
      },
      "gallery": {
        "uploadButton": "Importer des images",
        "dndTitle": "Importer des images",
        "dndDescription": "Glisser des images ou cliquer ici pour les télécharger"
      }
    },
    "steps": {
      "finish": "Terminer",
      "next": "Suivant",
      "previous": "Précédent"
    },
    "editor": {
      "acceptedMimesError": "Les mimes acceptés sont: :mimes",
      "acceptedExtensionsError": "Les extensions acceptées sont: :extensions"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": [
          "dim",
          "lun",
          "mar",
          "mer",
          "jeu",
          "ven",
          "sam"
        ],
        "longhand": [
          "dimanche",
          "lundi",
          "mardi",
          "mercredi",
          "jeudi",
          "vendredi",
          "samedi"
        ]
      },
      "months": {
        "shorthand": [
          "janv",
          "févr",
          "mars",
          "avr",
          "mai",
          "juin",
          "juil",
          "août",
          "sept",
          "oct",
          "nov",
          "déc"
        ],
        "longhand": [
          "janvier",
          "février",
          "mars",
          "avril",
          "mai",
          "juin",
          "juillet",
          "août",
          "septembre",
          "octobre",
          "novembre",
          "décembre"
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
      "ordinal": function (nth) {
        if (nth > 1) return "";
        return "er";
      },
      "rangeSeparator": " au ",
      "weekAbbreviation": "Sem",
      "scrollTitle": "Défiler pour augmenter la valeur",
      "toggleTitle": "Cliquer pour basculer",
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
      "datetimeSeconds24": "DD/MM/YYYY, HH:mm:ss",
      "datetimeSeconds12": "DD/MM/YYYY, hh:mm:ss a",
      "datetime24": "DD/MM/YYYY, HH:mm",
      "datetime12": "DD/MM/YYYY, hh:mm a",
      "timeSeconds24": "HH:mm:ss",
      "timeSeconds12": "hh:mm:ss a",
      "time24": "HH:mm",
      "time12": "hh:mm a",
      "date": "DD/MM/YYYY"
    },
    "multiselect": {
      "multipleLabelOne": "1 option sélectionnée",
      "multipleLabelMore": ":options options sélectionnées",
      "noResults": "Aucunes options trouvées",
      "noOptions": "La liste est vide"
    },
    "defaultMessage": "Champ invalide",
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
    "accepted": ":attribute doit être accepté.",
    "active_url": ":attribute no és un URL vàlid.",
    "after": ":attribute ha de ser una data posterior a :date.",
    "after_or_equal": ":attribute ha de ser una data posterior o igual a :date.",
    "alpha": ":attribute ne peut contenir que des lettres.",
    "alpha_dash": ":attribute només pot contenir lletres, números i guions.",
    "alpha_num": ":attribute només pot contenir lletres i números.",
    "array": ":attribute ha de ser una matriu.",
    "before": ":attribute ha de ser una data anterior a :date.",
    "before_or_equal": ":attribute ha de ser una data anterior o igual a :date.",
    "between": {
      "numeric": ":attribute ha destar entre :min - :max.",
      "file": ":attribute ha de pesar entre :min - :max kilobytes.",
      "string": ":attribute ha de tenir entre :min - :max caràcters.",
      "array": ":attribute ha de tenir entre :min - :max ítems."
    },
    "boolean": "El camp :attribute ha de ser verdader o fals",
    "captcha": "Please verify that you are not a robot.",
    "confirmed": "La confirmació de :attribute no coincideix.",
    "date": ":attribute no és una data vàlida.",
    "date_format": "El camp :attribute no concorda amb el format :format.",
    "date_equals": "El :attribute ha de ser una data igual a :date.",
    "different": ":attribute i :other han de ser diferents.",
    "digits": ":attribute doit contenir :digits chiffres.",
    "digits_between": ":attribute doit être entre :min et :max chiffres.",
    "dimensions": "Les dimensions de la imatge :attribute no són vàlides.",
    "distinct": "El camp :attribute té un valor duplicat.",
    "email": ":attribute n'est pas un email valide",
    "exists": ":attribute és invàlid.",
    "file": "El camp :attribute ha de ser un arxiu.",
    "filled": "El camp :attribute és obligatori.",
    "gt": {
      "numeric": "El :attribute ha de ser superior a :value.",
      "file": "El :attribute ha de ser superior a :value kilobytes.",
      "string": "El :attribute ha de superar els :value caràcters.",
      "array": "El :attribute ha de tenir més de :value ítems."
    },
    "gte": {
      "numeric": "El :attribute ha de ser igual o superior a :value.",
      "file": "El :attribute ha de ser igual o superior a :value kilobytes.",
      "string": "El :attribute ha de ser igual o superior a :value caràcters.",
      "array": "El :attribute ha de tenir :value ítems o més."
    },
    "image": ":attribute ha de ser una imatge.",
    "in": ":attribute és invàlid",
    "in_array": "El camp :attribute no existeix dintre de :other.",
    "integer": ":attribute doit être un entier.",
    "ip": ":attribute ha de ser una adreça IP vàlida.",
    "ipv4": ":attribute ha de ser una adreça IPv4 vàlida.",
    "ipv6": ":attribute ha de ser una adreça IPv6 vàlida.",
    "json": "El camp :attribute ha de ser una cadena JSON vàlida.",
    "lt": {
      "numeric": "El :attribute ha de ser inferior a :value.",
      "file": "El :attribute ha de ser inferior a :value kilobytes.",
      "string": "El :attribute no ha de superar els :value caràcters.",
      "array": "El :attribute ha de tenir menys de :value ítems."
    },
    "lte": {
      "numeric": "El :attribute ha de ser igual o inferior a :value.",
      "file": "El :attribute ha de ser igual o inferior a :value kilobytes.",
      "string": "El :attribute ha de ser igual o inferior a :value caràcters.",
      "array": "El :attribute no ha de tenir més de :value ítems."
    },
    "max": {
      "numeric": ":attribute no pot ser més gran que :max.",
      "file": ":attribute ne peut être supérieur à :max kilobytes.",
      "string": ":attribute ne peut être supérieur à :max caractères.",
      "array": ":attribute no pot tenir més de :max ítems."
    },
    "mimes": ":attribute ha de ser un arxiu amb format: :values.",
    "mimetypes": ":attribute ha de ser un arxiu amb format: :values.",
    "min": {
      "numeric": "La taille de :attribute doit être d'au moins :min.",
      "file": "El tamany de :attribute ha de ser dalmenys :min kilobytes.",
      "string": ":attribute doit contenir au moins :min caractères.",
      "array": ":attribute ha de tenir almenys :min ítems."
    },
    "not_in": ":attribute és invàlid.",
    "not_regex": "El format de :attribute no és vàlid.",
    "numeric": ":attribute doit être une valeur numérique.",
    "present": "The :attribute field must be present.",
    "regex": "El format de :attribute és invàlid.",
    "required": "El camp :attribute és obligatori.",
    "required_if": "The :attribute field is required when :other is :value.",
    "required_unless": "The :attribute field is required unless :other is in :values.",
    "required_with": "The :attribute field is required when :values is present.",
    "required_with_all": "The :attribute field is required when :values are present.",
    "required_without": "The :attribute field is required when :values is not present.",
    "required_without_all": "The :attribute field is required when none of :values are present.",
    "same": ":attribute et :other doivent correspondre.",
    "size": {
      "numeric": "El tamany de :attribute ha de ser :size.",
      "file": "El tamany de :attribute ha de ser :size kilobytes.",
      "string": ":attribute ha de contenir :size caràcters.",
      "array": ":attribute ha de contenir :size ítems."
    },
    "string": "El camp :attribute ha de ser una cadena.",
    "timezone": "El camp :attribute ha de ser una zona vàlida.",
    "unique": ":attribute ja està registrat i no es pot repetir.",
    "uploaded": "The :attribute failed to upload.",
    "url": ":attribute no és una adreça web vàlida.",
    "uuid": "El :attribute ha de ser un indentificador únic universal (UUID) vàlid.",
    "remote": "The :attribute field is invalid."
  }
}