export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ Addieren",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "File",
        "dndTitle": "File hochladen",
        "dndDescription": "File ablegen oder zum Hochladen hier klicken",
        "removeConfirm": "Durch das Entfernen Files wird diese endgültig gelöscht. Sind Sie sicher, dass Sie fortfahren?",
        "select": "File auswählen",
        "upload": "Hochladen"
      },
      "multifile": {
        "uploadButton": "Files hochladen",
        "dndTitle": "Files hochladen",
        "dndDescription": "File ablegen oder zum Hochladen hier klicken"
      },
      "gallery": {
        "uploadButton": "Bilder hochladen",
        "dndTitle": "Bilder hochladen",
        "dndDescription": "Bild ablegen oder zum Hochladen hier klicken"
      }
    },
    "steps": {
      "finish": "Beenden",
      "next": "Nächste",
      "previous": "Früher"
    },
    "editor": {
      "acceptedMimesError": "Accepted mimes are: :mimes",
      "acceptedExtensionsError": "Accepted extenions are: :extensions",
      "acceptedMimes": "Akzeptierte mimes sind: :mimes",
      "acceptedExtensions": "Akzeptierte extenions sind: :extensions"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": [
          "So",
          "Mo",
          "Di",
          "Mi",
          "Do",
          "Fr",
          "Sa"
        ],
        "longhand": [
          "Sonntag",
          "Montag",
          "Dienstag",
          "Mittwoch",
          "Donnerstag",
          "Freitag",
          "Samstag"
        ]
      },
      "months": {
        "shorthand": [
          "Jan",
          "Feb",
          "Mär",
          "Apr",
          "Mai",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Okt",
          "Nov",
          "Dez"
        ],
        "longhand": [
          "Januar",
          "Februar",
          "März",
          "April",
          "Mai",
          "Juni",
          "Juli",
          "August",
          "September",
          "Oktober",
          "November",
          "Dezember"
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
        return '';
      },
      "rangeSeparator": " bis ",
      "weekAbbreviation": "KW",
      "scrollTitle": "Zum Ändern scrollen",
      "toggleTitle": "Zum Umschalten klicken",
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
      "datetimeSeconds24": "DD.MM.YYYY HH:mm:ss",
      "datetimeSeconds12": "DD.MM.YYYY hh:mm:ss a",
      "datetime24": "DD.MM.YYYY HH:mm",
      "datetime12": "DD.MM.YYYY hh:mm a",
      "timeSeconds24": "HH:mm:ss",
      "timeSeconds12": "hh:mm:ss a",
      "time24": "HH:mm",
      "time12": "hh:mm a",
      "date": "DD.MM.YYYY"
    },
    "multiselect": {
      "multipleLabelOne": "1 option ausgewählt",
      "multipleLabelMore": ":options optionen ausgewählt",
      "noResults": "Keine Optionen gefunden",
      "noOptions": "Liste ist leer."
    },
    "defaultMessage": "Ungültiges Feld",
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
    "accepted": ":attribute muss akzeptiert werden.",
    "active_url": ":attribute ist keine gültige Internet-Adresse.",
    "after": ":attribute muss ein Datum nach :date sein.",
    "after_or_equal": ":attribute muss ein Datum nach :date oder gleich :date sein.",
    "alpha": ":attribute darf nur aus Buchstaben bestehen.",
    "alpha_dash": ":attribute darf nur aus Buchstaben, Zahlen, Binde- und Unterstrichen bestehen.",
    "alpha_num": ":attribute darf nur aus Buchstaben und Zahlen bestehen.",
    "array": ":attribute muss ein Array sein.",
    "before": ":attribute muss ein Datum vor :date sein.",
    "before_or_equal": ":attribute muss ein Datum vor :date oder gleich :date sein.",
    "between": {
      "numeric": ":attribute muss zwischen :min & :max liegen.",
      "file": ":attribute muss zwischen :min & :max Kilobytes groß sein.",
      "string": ":attribute muss zwischen :min & :max Zeichen lang sein.",
      "array": ":attribute muss zwischen :min & :max Elemente haben."
    },
    "boolean": ":attribute muss entweder true oder false sein.",
    "captcha": "Please verify that you are not a robot.",
    "confirmed": ":attribute stimmt nicht mit der Bestätigung überein.",
    "date": ":attribute muss ein gültiges Datum sein.",
    "date_format": ":attribute entspricht nicht dem gültigen Format für :format.",
    "date_equals": ":attribute muss ein Datum gleich :date sein.",
    "different": ":attribute und :other müssen sich unterscheiden.",
    "digits": ":attribute muss :digits Stellen haben.",
    "digits_between": ":attribute muss zwischen :min und :max Stellen haben.",
    "dimensions": ":attribute hat ungültige Bildabmessungen.",
    "distinct": ":attribute beinhaltet einen bereits vorhandenen Wert.",
    "email": ":attribute muss eine gültige E-Mail-Adresse sein.",
    "exists": "Der gewählte Wert für :attribute ist ungültig.",
    "file": ":attribute muss eine Datei sein.",
    "filled": ":attribute muss ausgefüllt sein.",
    "gt": {
      "numeric": ":attribute muss größer als :value sein.",
      "file": ":attribute muss größer als :value Kilobytes sein.",
      "string": ":attribute muss länger als :value Zeichen sein.",
      "array": ":attribute muss mehr als :value Elemente haben."
    },
    "gte": {
      "numeric": ":attribute muss größer oder gleich :value sein.",
      "file": ":attribute muss größer oder gleich :value Kilobytes sein.",
      "string": ":attribute muss mindestens :value Zeichen lang sein.",
      "array": ":attribute muss mindestens :value Elemente haben."
    },
    "image": ":attribute muss ein Bild sein.",
    "in": "Der gewählte Wert für :attribute ist ungültig.",
    "in_array": "Der gewählte Wert für :attribute kommt nicht in :other vor.",
    "integer": ":attribute muss eine ganze Zahl sein.",
    "ip": ":attribute muss eine gültige IP-Adresse sein.",
    "ipv4": ":attribute muss eine gültige IPv4-Adresse sein.",
    "ipv6": ":attribute muss eine gültige IPv6-Adresse sein.",
    "json": ":attribute muss ein gültiger JSON-String sein.",
    "lt": {
      "numeric": ":attribute muss kleiner als :value sein.",
      "file": ":attribute muss kleiner als :value Kilobytes sein.",
      "string": ":attribute muss kürzer als :value Zeichen sein.",
      "array": ":attribute muss weniger als :value Elemente haben."
    },
    "lte": {
      "numeric": ":attribute muss kleiner oder gleich :value sein.",
      "file": ":attribute muss kleiner oder gleich :value Kilobytes sein.",
      "string": ":attribute darf maximal :value Zeichen lang sein.",
      "array": ":attribute darf maximal :value Elemente haben."
    },
    "max": {
      "numeric": ":attribute darf maximal :max sein.",
      "file": ":attribute darf maximal :max Kilobytes groß sein.",
      "string": ":attribute darf maximal :max Zeichen haben.",
      "array": ":attribute darf maximal :max Elemente haben."
    },
    "mimes": ":attribute muss den Dateityp :values haben.",
    "mimetypes": ":attribute muss den Dateityp :values haben.",
    "min": {
      "numeric": ":attribute muss mindestens :min sein.",
      "file": ":attribute muss mindestens :min Kilobytes groß sein.",
      "string": ":attribute muss mindestens :min Zeichen lang sein.",
      "array": ":attribute muss mindestens :min Elemente haben."
    },
    "not_in": "Der gewählte Wert für :attribute ist ungültig.",
    "not_regex": ":attribute hat ein ungültiges Format.",
    "numeric": ":attribute muss eine Zahl sein.",
    "present": ":attribute muss vorhanden sein.",
    "regex": ":attribute Format ist ungültig.",
    "required": ":attribute muss ausgefüllt werden.",
    "required_if": ":attribute muss ausgefüllt werden, wenn :other den Wert :value hat.",
    "required_unless": ":attribute muss ausgefüllt werden, wenn :other nicht den Wert :values hat.",
    "required_with": ":attribute muss ausgefüllt werden, wenn :values ausgefüllt wurde.",
    "required_with_all": ":attribute muss ausgefüllt werden, wenn :values ausgefüllt wurde.",
    "required_without": ":attribute muss ausgefüllt werden, wenn :values nicht ausgefüllt wurde.",
    "required_without_all": ":attribute muss ausgefüllt werden, wenn keines der Felder :values ausgefüllt wurde.",
    "same": ":attribute und :other müssen übereinstimmen.",
    "size": {
      "numeric": ":attribute muss gleich :size sein.",
      "file": ":attribute muss :size Kilobyte groß sein.",
      "string": ":attribute muss :size Zeichen lang sein.",
      "array": ":attribute muss genau :size Elemente haben."
    },
    "string": ":attribute muss ein String sein.",
    "timezone": ":attribute muss eine gültige Zeitzone sein.",
    "unique": ":attribute ist bereits vergeben.",
    "uploaded": ":attribute konnte nicht hochgeladen werden.",
    "url": ":attribute muss eine URL sein.",
    "uuid": ":attribute muss ein UUID sein.",
    "remote": "Das Feld :attribute ist ungültig."
  }
}