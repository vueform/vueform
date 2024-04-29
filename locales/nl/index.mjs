export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ Toevoegen",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "Bestand",
        "dndTitle": "Bestand uploaden",
        "dndDescription": "Sleep het bestand of klik hier om te uploaden",
        "removeConfirm": "Door het bestand te verwijderen, wordt het permanent verwijderd. Weet u zeker dat u hiermee door wilt gaan?",
        "select": "Selecteer bestand",
        "upload": "Uploaden"
      },
      "multifile": {
        "uploadButton": "Bestanden uploaden",
        "dndTitle": "Bestanden uploaden",
        "dndDescription": "Sleep bestanden of klik hier om te uploaden"
      },
      "gallery": {
        "uploadButton": "Afbeeldingen uploaden",
        "dndTitle": "Afbeeldingen uploaden",
        "dndDescription": "Sleep afbeeldingen of klik hier om te uploaden"
      }
    },
    "steps": {
      "finish": "Voltooi",
      "next": "Volgende",
      "previous": "Vorige"
    },
    "editor": {
      "acceptedMimesError": "Geaccepteerde MIME-types zijn: :mimes",
      "acceptedExtensionsError": "Geaccepteerde extensies zijn: :extensions"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": [
          "zo",
          "ma",
          "di",
          "wo",
          "do",
          "vr",
          "za"
        ],
        "longhand": [
          "zondag",
          "maandag",
          "dinsdag",
          "woensdag",
          "donderdag",
          "vrijdag",
          "zaterdag"
        ]
      },
      "months": {
        "shorthand": [
          "jan",
          "feb",
          "mrt",
          "apr",
          "mei",
          "jun",
          "jul",
          "aug",
          "sept",
          "okt",
          "nov",
          "dec"
        ],
        "longhand": [
          "januari",
          "februari",
          "maart",
          "april",
          "mei",
          "juni",
          "juli",
          "augustus",
          "september",
          "oktober",
          "november",
          "december"
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
        if (nth === 1 || nth === 8 || nth >= 20) return "ste";
        return "de";
      },
      "rangeSeparator": " t/m ",
      "weekAbbreviation": "wk",
      "scrollTitle": "Scroll voor volgende / vorige",
      "toggleTitle": "Klik om te wisselen",
      "amPM": [
        "AM",
        "PM"
      ],
      "yearAriaLabel": "Jaar",
      "monthAriaLabel": "Maand",
      "hourAriaLabel": "Uur",
      "minuteAriaLabel": "Minuut"
    },
    "dateFormats": {
      "datetimeSeconds24": "DD-MM-YYYY HH:mm:ss",
      "datetimeSeconds12": "DD-MM-YYYY hh:mm:ss a",
      "datetime24": "DD-MM-YYYY HH:mm",
      "datetime12": "DD-MM-YYYY hh:mm a",
      "timeSeconds24": "HH:mm:ss",
      "timeSeconds12": "hh:mm:ss a",
      "time24": "HH:mm",
      "time12": "hh:mm a",
      "date": "DD-MM-YYYY"
    },
    "multiselect": {
      "multipleLabelOne": "1 optie geselecteerd",
      "multipleLabelMore": ":options opties geselecteerd",
      "noResults": "Geen opties gevonden",
      "noOptions": "Deze lijst is leeg"
    },
    "defaultMessage": "Ongeldig veld",
    "a11y": {
      "file": {
        "description": "Druk op Backspace om te verwijderen"
      },
      "list": {
        "remove": "Verwijder item knop"
      }
    }
  },
  "validation": {
    "accepted": ":attribute moet geaccepteerd zijn.",
    "active_url": ":attribute is geen geldige URL.",
    "after": ":attribute moet een datum na :date zijn.",
    "after_or_equal": ":attribute moet een datum na of gelijk aan :date zijn.",
    "alpha": ":attribute mag alleen letters bevatten.",
    "alpha_dash": ":attribute mag alleen letters, nummers, underscores (_) en streepjes (-) bevatten.",
    "alpha_num": ":attribute mag alleen letters en nummers bevatten.",
    "array": ":attribute moet geselecteerde elementen bevatten.",
    "before": ":attribute moet een datum voor :date zijn.",
    "before_or_equal": ":attribute moet een datum voor of gelijk aan :date zijn.",
    "between": {
      "numeric": ":attribute moet tussen :min en :max zijn.",
      "file": ":attribute moet tussen :min en :max kilobytes zijn.",
      "string": ":attribute moet tussen :min en :max karakters zijn.",
      "array": ":attribute moet tussen :min en :max items bevatten."
    },
    "boolean": ":attribute moet ja of nee zijn.",
    "captcha": "Please verify that you are not a robot.",
    "confirmed": ":attribute bevestiging komt niet overeen.",
    "date": ":attribute moet een datum bevatten.",
    "date_format": ":attribute moet een geldig datum formaat bevatten.",
    "date_equals": ":attribute moet een datum gelijk aan :date zijn.",
    "different": ":attribute en :other moeten verschillend zijn.",
    "digits": ":attribute moet bestaan uit :digits cijfers.",
    "digits_between": ":attribute moet bestaan uit minimaal :min en maximaal :max cijfers.",
    "dimensions": ":attribute heeft geen geldige afmetingen voor afbeeldingen.",
    "distinct": ":attribute heeft een dubbele waarde.",
    "email": ":attribute is geen geldig e-mailadres.",
    "exists": ":attribute bestaat niet.",
    "file": ":attribute moet een bestand zijn.",
    "filled": ":attribute is verplicht.",
    "gt": {
      "numeric": "De :attribute moet groter zijn dan :value.",
      "file": "De :attribute moet groter zijn dan :value kilobytes.",
      "string": "De :attribute moet meer dan :value tekens bevatten.",
      "array": "De :attribute moet meer dan :value waardes bevatten."
    },
    "gte": {
      "numeric": "De :attribute moet groter of gelijk zijn aan :value.",
      "file": "De :attribute moet groter of gelijk zijn aan :value kilobytes.",
      "string": "De :attribute moet minimaal :value tekens bevatten.",
      "array": "De :attribute moet :value waardes of meer bevatten."
    },
    "image": ":attribute moet een afbeelding zijn.",
    "in": ":attribute is ongeldig.",
    "in_array": ":attribute bestaat niet in :other.",
    "integer": ":attribute moet een getal zijn.",
    "ip": ":attribute moet een geldig IP-adres zijn.",
    "ipv4": ":attribute moet een geldig IPv4-adres zijn.",
    "ipv6": ":attribute moet een geldig IPv6-adres zijn.",
    "json": ":attribute moet een geldige JSON-string zijn.",
    "lt": {
      "numeric": "De :attribute moet kleiner zijn dan :value.",
      "file": "De :attribute moet kleiner zijn dan :value kilobytes.",
      "string": "De :attribute moet minder dan :value tekens bevatten.",
      "array": "De :attribute moet minder dan :value waardes bevatten."
    },
    "lte": {
      "numeric": "De :attribute moet kleiner of gelijk zijn aan :value.",
      "file": "De :attribute moet kleiner of gelijk zijn aan :value kilobytes.",
      "string": "De :attribute moet maximaal :value tekens bevatten.",
      "array": "De :attribute moet :value waardes of minder bevatten."
    },
    "max": {
      "numeric": ":attribute mag niet hoger dan :max zijn.",
      "file": ":attribute mag niet meer dan :max kilobytes zijn.",
      "string": ":attribute mag niet uit meer dan :max tekens bestaan.",
      "array": ":attribute mag niet meer dan :max items bevatten."
    },
    "mimes": ":attribute moet een bestand zijn van het bestandstype :values.",
    "mimetypes": ":attribute moet een bestand zijn van het bestandstype :values.",
    "min": {
      "numeric": ":attribute moet minimaal :min zijn.",
      "file": ":attribute moet minimaal :min kilobytes zijn.",
      "string": ":attribute moet minimaal :min tekens zijn.",
      "array": ":attribute moet minimaal :min items bevatten."
    },
    "not_in": "Het formaat van :attribute is ongeldig.",
    "not_regex": "De :attribute formaat is ongeldig.",
    "numeric": ":attribute moet een nummer zijn.",
    "present": "The :attribute field must be present.",
    "regex": ":attribute formaat is ongeldig.",
    "required": ":attribute is verplicht.",
    "required_if": "Het :attribute veld is verplicht als :other gelijk is aan :value.",
    "required_unless": "Het :attribute veld is verplicht tenzij :other is gelijk aan één van :values.",
    "required_with": "Het :attribute veld is verplicht als :values is geselecteerd.",
    "required_with_all": "Het :attribute veld is verplicht als :values geselecteerd zijn.",
    "required_without": "Het :attribute veld is verplicht als :values niet geselecteerd zijn.",
    "required_without_all": "Het :attribute veld is verplicht geen van :values geselecteerd zijn.",
    "same": ":attribute en :other moeten overeenkomen.",
    "size": {
      "numeric": ":attribute moet :size zijn.",
      "file": ":attribute moet :size kilobyte zijn.",
      "string": ":attribute moet :size tekens zijn.",
      "array": ":attribute moet :size items bevatten."
    },
    "string": ":attribute moet een tekst zijn.",
    "timezone": ":attribute moet een geldige tijdzone zijn.",
    "unique": ":attribute is al in gebruik.",
    "uploaded": "The :attribute failed to upload.",
    "url": ":attribute moet een geldig URL zijn.",
    "uuid": ":attribute moet een geldig UUID zijn.",
    "remote": "Het :attribute veld is ongeldig."
  }
}