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
    "active_url": ":attribute n'est pas une URL valide.",
    "after": ":attribute doit être une date après :date.",
    "after_or_equal": ":attribute doit être une date après ou égale à :date.",
    "alpha": ":attribute ne peut contenir que des lettres.",
    "alpha_dash": ":attribute ne peut contenir que des lettres, des chiffres, des tirets et des underscores.",
    "alpha_num": ":attribute ne peut contenir que des lettres et des chiffres.",
    "array": ":attribute doit être un tableau.",
    "before": ":attribute doit être une date avant :date.",
    "before_or_equal": ":attribute doit être une date avant ou égale à :date.",
    "between": {
      "numeric": ":attribute doit être entre :min et :max.",
      "file": ":attribute doit être entre :min et :max kilo-octets.",
      "string": ":attribute doit être entre :min et :max caractères.",
      "array": ":attribute doit avoir entre :min et :max éléments."
    },
    "boolean": "Le champ :attribute doit être vrai ou faux.",
    "captcha": "Please verify that you are not a robot.",
    "confirmed": "La confirmation de :attribute ne correspond pas.",
    "date": ":attribute n'est pas une date valide.",
    "date_format": ":attribute ne correspond pas au format :format.",
    "date_equals": ":attribute doit être égal à :date.",
    "different": ":attribute et :other doivent être différents.",
    "digits": ":attribute doit avoir :digits chiffres.",
    "digits_between": ":attribute doit être entre :min et :max chiffres.",
    "dimensions": ":attribute a des dimensions d'image non valides.",
    "distinct": "Le champ :attribute a une valeur en double.",
    "email": ":attribute doit être une adresse e-mail valide.",
    "exists": ":attribute sélectionné est invalide.",
    "file": ":attribute doit être un fichier.",
    "filled": "Le champ :attribute doit avoir une valeur.",
    "gt": {
      "numeric": ":attribute doit être supérieur à :value.",
      "file": ":attribute doit être supérieur à :value kilo-octets.",
      "string": ":attribute doit être supérieur à :value caractères.",
      "array": ":attribute doit avoir plus de :value éléments."
    },
    "gte": {
      "numeric": ":attribute doit être supérieur ou égal à :value.",
      "file": ":attribute doit être supérieur ou égal à :value kilo-octets.",
      "string": ":attribute doit être supérieur ou égal à :value caractères.",
      "array": ":attribute doit avoir :value éléments ou plus."
    },
    "image": ":attribute doit être une image.",
    "in": ":attribute sélectionné est invalide.",
    "in_array": "Le champ :attribute n'existe pas dans :other.",
    "integer": ":attribute doit être un entier.",
    "ip": ":attribute doit être une adresse IP valide.",
    "ipv4": ":attribute doit être une adresse IPv4 valide.",
    "ipv6": ":attribute doit être une adresse IPv6 valide.",
    "json": ":attribute doit être une chaîne JSON valide.",
    "lt": {
      "numeric": ":attribute doit être inférieur à :value.",
      "file": ":attribute doit être inférieur à :value kilo-octets.",
      "string": ":attribute doit être inférieur à :value caractères.",
      "array": ":attribute doit avoir moins de :value éléments."
    },
    "lte": {
      "numeric": ":attribute doit être inférieur ou égal à :value.",
      "file": ":attribute doit être inférieur ou égal à :value kilo-octets.",
      "string": ":attribute doit être inférieur ou égal à :value caractères.",
      "array": ":attribute ne doit pas avoir plus de :value éléments."
    },
    "max": {
      "numeric": ":attribute ne doit pas être supérieur à :max.",
      "file": ":attribute ne doit pas dépasser :max kilo-octets.",
      "string": ":attribute ne doit pas dépasser :max caractères.",
      "array": ":attribute ne doit pas avoir plus de :max éléments."
    },
    "mimes": ":attribute doit être un fichier de type :values.",
    "mimetypes": ":attribute doit être un fichier de type :values.",
    "min": {
      "numeric": ":attribute doit être au moins :min.",
      "file": ":attribute doit être d'au moins :min kilo-octets.",
      "string": ":attribute doit comporter au moins :min caractères.",
      "array": ":attribute doit avoir au moins :min éléments."
    },
    "not_in": ":attribute sélectionné est invalide.",
    "not_regex": "Le format de :attribute est invalide.",
    "numeric": ":attribute doit être un nombre.",
    "present": "Le champ :attribute doit être présent.",
    "regex": "Le format de :attribute est invalide.",
    "required": "Le champ :attribute est obligatoire.",
    "required_if": "Le champ :attribute est requis lorsque :other est :value.",
    "required_unless": "Le champ :attribute est requis sauf si :other est dans :values.",
    "required_with": "Le champ :attribute est requis lorsque :values est présent.",
    "required_with_all": "Le champ :attribute est requis lorsque :values sont présents.",
    "required_without": "Le champ :attribute est requis lorsque :values n'est pas présent.",
    "required_without_all": "Le champ :attribute est requis lorsque aucun des :values n'est présent.",
    "same": ":attribute et :other doivent correspondre.",
    "size": {
      "numeric": ":attribute doit être :size.",
      "file": ":attribute doit être de :size kilo-octets.",
      "string": ":attribute doit être de :size caractères.",
      "array": ":attribute doit contenir :size éléments."
    },
    "string": ":attribute doit être une chaîne de caractères.",
    "timezone": ":attribute doit être une zone valide.",
    "unique": ":attribute a déjà été pris.",
    "uploaded": ":attribute n'a pas pu être téléchargé.",
    "url": "Le format de :attribute est invalide.",
    "uuid": ":attribute doit être un UUID valide.",
    "remote": "Le champ :attribute est invalide."
  }
}