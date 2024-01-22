export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ Aggiungere",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "File",
        "dndTitle": "Carica file",
        "dndDescription": "Rilascia il file o clicca qui per caricarlo",
        "removeConfirm": "Rimuovendo il file verrà eliminato definitivamente. Sei sicuro di continuare?",
        "select": "Seleziona file",
        "upload": "Caricare"
      },
      "multifile": {
        "uploadButton": "Carica file",
        "dndTitle": "Carica file",
        "dndDescription": "Rilascia i file o clicca qui per caricarli"
      },
      "gallery": {
        "uploadButton": "Carica immagini",
        "dndTitle": "Carica immagini",
        "dndDescription": "Rilascia le immagini o clicca qui per caricarle"
      }
    },
    "steps": {
      "finish": "Finire",
      "next": "Prossimo",
      "previous": "Precedente"
    },
    "editor": {
      "acceptedMimesError": "I mimi accettati sono: :mimes",
      "acceptedExtensionsError": "Le estensioni accettate sono: :extensions"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": [
          "Dom",
          "Lun",
          "Mar",
          "Mer",
          "Gio",
          "Ven",
          "Sab"
        ],
        "longhand": [
          "Domenica",
          "Lunedì",
          "Martedì",
          "Mercoledì",
          "Giovedì",
          "Venerdì",
          "Sabato"
        ]
      },
      "months": {
        "shorthand": [
          "Gen",
          "Feb",
          "Mar",
          "Apr",
          "Mag",
          "Giu",
          "Lug",
          "Ago",
          "Set",
          "Ott",
          "Nov",
          "Dic"
        ],
        "longhand": [
          "Gennaio",
          "Febbraio",
          "Marzo",
          "Aprile",
          "Maggio",
          "Giugno",
          "Luglio",
          "Agosto",
          "Settembre",
          "Ottobre",
          "Novembre",
          "Dicembre"
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
        return "°";
      },
      "rangeSeparator": " al ",
      "weekAbbreviation": "Se",
      "scrollTitle": "Scrolla per aumentare",
      "toggleTitle": "Clicca per cambiare",
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
      "multipleLabelOne": "1 opzione selezionata",
      "multipleLabelMore": ":options opzioni selezionate",
      "noResults": "Nessuna opzione trovata",
      "noOptions": "L'elenco è vuoto"
    },
    "defaultMessage": "Campo non valido",
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
    "accepted": ":attribute deve essere accettato.",
    "active_url": ":attribute non è un URL valido.",
    "after": ":attribute deve essere una data successiva al :date.",
    "after_or_equal": ":attribute deve essere una data successiva o uguale al :date.",
    "alpha": ":attribute può contenere solo lettere.",
    "alpha_dash": ":attribute può contenere solo lettere, numeri e trattini.",
    "alpha_num": ":attribute può contenere solo lettere e numeri.",
    "array": ":attribute deve essere un array.",
    "before": ":attribute deve essere una data precedente al :date.",
    "before_or_equal": ":attribute deve essere una data precedente o uguale al :date.",
    "between": {
      "numeric": ":attribute deve trovarsi tra :min - :max.",
      "file": ":attribute deve trovarsi tra :min - :max kilobyte.",
      "string": ":attribute deve trovarsi tra :min - :max caratteri.",
      "array": ":attribute deve avere tra :min - :max elementi."
    },
    "boolean": "Il campo :attribute deve essere vero o falso.",
    "confirmed": "Il campo di conferma per :attribute non coincide.",
    "date": ":attribute non è una data valida.",
    "date_format": ":attribute non coincide con il formato :format.",
    "date_equals": ":attribute deve essere una data e uguale a :date.",
    "different": ":attribute e :other devono essere differenti.",
    "digits": ":attribute deve essere di :digits cifre.",
    "digits_between": ":attribute deve essere tra :min e :max cifre.",
    "dimensions": "Le dimensioni dellimmagine di :attribute non sono valide.",
    "distinct": ":attribute contiene un valore duplicato.",
    "email": ":attribute non è valido.",
    "exists": ":attribute selezionato non è valido.",
    "file": ":attribute deve essere un file.",
    "filled": "Il campo :attribute deve contenere un valore.",
    "gt": {
      "numeric": ":attribute deve essere maggiore di :value.",
      "file": ":attribute deve essere maggiore di :value kilobyte.",
      "string": ":attribute deve contenere più di :value caratteri.",
      "array": ":attribute deve contenere più di :value elementi."
    },
    "gte": {
      "numeric": ":attribute deve essere uguale o maggiore di :value.",
      "file": ":attribute deve essere uguale o maggiore di :value kilobyte.",
      "string": ":attribute deve contenere un numero di caratteri uguale o maggiore di :value.",
      "array": ":attribute deve contenere un numero di elementi uguale o maggiore di :value."
    },
    "image": ":attribute deve essere unimmagine.",
    "in": ":attribute selezionato non è valido.",
    "in_array": "Il valore del campo :attribute non esiste in :other.",
    "integer": ":attribute deve essere un numero intero.",
    "ip": ":attribute deve essere un indirizzo IP valido.",
    "ipv4": ":attribute deve essere un indirizzo IPv4 valido.",
    "ipv6": ":attribute deve essere un indirizzo IPv6 valido.",
    "json": ":attribute deve essere una stringa JSON valida.",
    "lt": {
      "numeric": ":attribute deve essere minore di :value.",
      "file": ":attribute deve essere minore di :value kilobyte.",
      "string": ":attribute deve contenere meno di :value caratteri.",
      "array": ":attribute deve contenere meno di :value elementi."
    },
    "lte": {
      "numeric": ":attribute deve essere minore o uguale a :value.",
      "file": ":attribute deve essere minore o uguale a :value kilobyte.",
      "string": ":attribute deve contenere un numero di caratteri minore o uguale a :value.",
      "array": ":attribute deve contenere un numero di elementi minore o uguale a :value."
    },
    "max": {
      "numeric": ":attribute non può essere superiore a :max.",
      "file": ":attribute non può essere superiore a :max kilobyte.",
      "string": ":attribute non può contenere più di :max caratteri.",
      "array": ":attribute non può avere più di :max elementi."
    },
    "mimes": ":attribute deve essere del tipo: :values.",
    "mimetypes": ":attribute deve essere del tipo: :values.",
    "min": {
      "numeric": ":attribute deve essere almeno :min.",
      "file": ":attribute deve essere almeno di :min kilobyte.",
      "string": ":attribute deve contenere almeno :min caratteri.",
      "array": ":attribute deve avere almeno :min elementi."
    },
    "not_in": "Il valore selezionato per :attribute non è valido.",
    "not_regex": "Il formato di :attribute non è valido.",
    "numeric": ":attribute deve essere un numero.",
    "present": "The :attribute field must be present.",
    "regex": "Il formato del campo :attribute non è valido.",
    "required": "Il campo :attribute è richiesto.",
    "required_if": "The :attribute field is required when :other is :value.",
    "required_unless": "The :attribute field is required unless :other is in :values.",
    "required_with": "The :attribute field is required when :values is present.",
    "required_with_all": "The :attribute field is required when :values are present.",
    "required_without": "The :attribute field is required when :values is not present.",
    "required_without_all": "The :attribute field is required when none of :values are present.",
    "same": ":attribute e :other devono coincidere.",
    "size": {
      "numeric": ":attribute deve essere :size.",
      "file": ":attribute deve essere :size kilobyte.",
      "string": ":attribute deve contenere :size caratteri.",
      "array": ":attribute deve contenere :size elementi."
    },
    "string": ":attribute deve essere una stringa.",
    "timezone": ":attribute deve essere una zona valida.",
    "unique": ":attribute è stato già utilizzato.",
    "uploaded": "The :attribute failed to upload.",
    "url": "Il formato del campo :attribute non è valido.",
    "uuid": ":attribute deve essere un UUID valido.",
    "remote": "The :attribute field is invalid."
  }
}