export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ Pridať",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "Súbor",
        "dndTitle": "Nahrajte súbor",
        "dndDescription": "Presuňte súbor alebo ho nahrajte kliknutím sem",
        "removeConfirm": "Odstránením súboru bude natrvalo odstránený. Naozaj chcete pokračovať?",
        "select": "Vyberte súbor",
        "upload": "Nahrať'"
      },
      "multifile": {
        "uploadButton": "Nahrať súbory",
        "dndTitle": "Nahrať súbory",
        "dndDescription": "Presuňte súbory alebo ich nahrajte kliknutím sem"
      },
      "gallery": {
        "uploadButton": "Nahrajte obrázky",
        "dndTitle": "Nahrajte obrázky",
        "dndDescription": "Presuňte obrázky alebo ich nahrajte kliknutím sem"
      }
    },
    "steps": {
      "finish": "Skončiť",
      "next": "Ďalšie",
      "previous": "Predchádzajúce"
    },
    "editor": {
      "acceptedMimesError": "Akceptované mimy sú: :mimes",
      "acceptedExtensionsError": "Akceptované rozšírenia sú: :extensions"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": [
          "Ned",
          "Pon",
          "Ut",
          "Str",
          "Štv",
          "Pia",
          "Sob"
        ],
        "longhand": [
          "Nedeľa",
          "Pondelok",
          "Utorok",
          "Streda",
          "Štvrtok",
          "Piatok",
          "Sobota"
        ]
      },
      "months": {
        "shorthand": [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Máj",
          "Jún",
          "Júl",
          "Aug",
          "Sep",
          "Okt",
          "Nov",
          "Dec"
        ],
        "longhand": [
          "Január",
          "Február",
          "Marec",
          "Apríl",
          "Máj",
          "Jún",
          "Júl",
          "August",
          "September",
          "Október",
          "November",
          "December"
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
        return ".";
      },
      "rangeSeparator": " do ",
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
      "datetimeSeconds24": "DD. MM. YYYY, HH:mm:ss",
      "datetimeSeconds12": "DD. MM. YYYY, hh:mm:ss a",
      "datetime24": "DD. MM. YYYY, HH:mm",
      "datetime12": "DD. MM. YYYY, hh:mm a",
      "timeSeconds24": "HH:mm:ss",
      "timeSeconds12": "hh:mm:ss a",
      "time24": "HH:mm",
      "time12": "hh:mm a",
      "date": "DD. MM. YYYY"
    },
    "multiselect": {
      "multipleLabelOne": "1 vybratá možnosť",
      "multipleLabelMore": ":options vybrané možnosti",
      "noResults": "Nenašli sa žiadne možnosti",
      "noOptions": "Zoznam je prázdny"
    },
    "defaultMessage": "Neplatné pole",
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
    "accepted": ":Attribute musí byť akceptovaný.",
    "active_url": ":Attribute má neplatnú URL adresu.",
    "after": ":Attribute musí byť dátum po :date.",
    "after_or_equal": ":Attribute musí byť dátum po alebo presne :date.",
    "alpha": ":Attribute môže obsahovať len písmená.",
    "alpha_dash": ":Attribute môže obsahovať len písmená, čísla a pomlčky.",
    "alpha_num": ":Attribute môže obsahovať len písmená, čísla.",
    "array": ":Attribute musí byť pole.",
    "before": ":Attribute musí byť dátum pred :date.",
    "before_or_equal": ":Attribute musí byť dátum pred alebo presne :date.",
    "between": {
      "numeric": ":Attribute musí mať rozsah :min - :max.",
      "file": ":Attribute musí mať rozsah :min - :max kilobajtov.",
      "string": ":Attribute musí mať rozsah :min - :max znakov.",
      "array": ":Attribute musí mať rozsah :min - :max prvkov."
    },
    "boolean": ":Attribute musí byť pravda alebo nepravda.",
    "confirmed": ":Attribute konfirmácia sa nezhoduje.",
    "date": ":Attribute má neplatný dátum.",
    "date_format": ":Attribute sa nezhoduje s formátom :format.",
    "date_equals": ":Attribute musí byť dátum rovnajúci sa :date.",
    "different": ":Attribute a :other musia byť odlišné.",
    "digits": ":Attribute musí mať :digits číslic.",
    "digits_between": ":Attribute musí mať rozsah :min až :max číslic.",
    "dimensions": ":Attribute má neplatné rozmery obrázku.",
    "distinct": ":Attribute je duplicitný.",
    "email": ":Attribute má neplatný formát.",
    "exists": "označený :attribute je neplatný.",
    "file": ":Attribute musí byť súbor.",
    "filled": ":Attribute je požadované.",
    "gt": {
      "numeric": "Hodnota :attribute musí byť väčšia ako :value.",
      "file": ":Attribute musí mať viac kilobajtov ako :value.",
      "string": ":Attribute musí mať viac znakov ako :value.",
      "array": ":Attribute musí mať viac prvkov ako :value."
    },
    "gte": {
      "numeric": "Hodnota :attribute musí byť väčšia alebo rovná ako :value.",
      "file": ":Attribute musí mať rovnaký alebo väčší počet kilobajtov ako :value.",
      "string": ":Attribute musí mať rovnaký alebo väčší počet znakov ako :value.",
      "array": ":Attribute musí mať rovnaký alebo väčší počet prvkov ako :value."
    },
    "image": ":Attribute musí byť obrázok.",
    "in": "označený :attribute je neplatný.",
    "in_array": ":Attribute sa nenachádza v :other.",
    "integer": ":Attribute musí byť celé číslo.",
    "ip": ":Attribute musí byť platná IP adresa.",
    "ipv4": ":Attribute musí byť platná IPv4 adresa.",
    "ipv6": ":Attribute musí byť platná IPv6 adresa.",
    "json": ":Attribute musí byť platný JSON reťazec.",
    "lt": {
      "numeric": "Hodnota :attribute musí byť menšia ako :value.",
      "file": ":Attribute musí mať menej kilobajtov ako :value.",
      "string": ":Attribute musí mať menej znakov ako :value.",
      "array": ":Attribute musí mať menej prvkov ako :value."
    },
    "lte": {
      "numeric": "Hodnota :attribute musí byť menšia alebo rovná ako :value.",
      "file": ":Attribute musí mať rovnaký alebo menší počet kilobajtov ako :value.",
      "string": ":Attribute musí mať rovnaký alebo menší počet znakov ako :value.",
      "array": ":Attribute musí mať rovnaký alebo menší počet prvkov ako :value."
    },
    "max": {
      "numeric": ":Attribute nemôže byť väčší ako :max.",
      "file": ":Attribute nemôže byť väčší ako :max kilobajtov.",
      "string": ":Attribute nemôže byť väčší ako :max znakov.",
      "array": ":Attribute nemôže mať viac ako :max prvkov."
    },
    "mimes": ":Attribute musí byť súbor s koncovkou: :values.",
    "mimetypes": ":Attribute musí byť súbor s koncovkou: :values.",
    "min": {
      "numeric": ":Attribute musí mať aspoň :min.",
      "file": ":Attribute musí mať aspoň :min kilobajtov.",
      "string": ":Attribute musí mať aspoň :min znakov.",
      "array": ":Attribute musí mať aspoň :min prvkov."
    },
    "not_in": "označený :attribute je neplatný.",
    "not_regex": ":Attribute má neplatný formát.",
    "numeric": ":Attribute musí byť číslo.",
    "present": "The :attribute field must be present.",
    "regex": ":Attribute má neplatný formát.",
    "required": ":Attribute je požadované.",
    "required_if": "The :attribute field is required when :other is :value.",
    "required_unless": "The :attribute field is required unless :other is in :values.",
    "required_with": "The :attribute field is required when :values is present.",
    "required_with_all": "The :attribute field is required when :values are present.",
    "required_without": "The :attribute field is required when :values is not present.",
    "required_without_all": "The :attribute field is required when none of :values are present.",
    "same": ":Attribute a :other sa musia zhodovať.",
    "size": {
      "numeric": ":Attribute musí byť :size.",
      "file": ":Attribute musí mať :size kilobajtov.",
      "string": ":Attribute musí mať :size znakov.",
      "array": ":Attribute musí obsahovať :size prvkov."
    },
    "string": ":Attribute musí byť reťazec znakov.",
    "timezone": ":Attribute musí byť platné časové pásmo.",
    "unique": ":Attribute už existuje.",
    "uploaded": "The :attribute failed to upload.",
    "url": ":Attribute musí mať formát URL.",
    "uuid": ":Attribute musí byť platné UUID.",
    "remote": "The :attribute field is invalid."
  }
}