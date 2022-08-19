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
      },
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
    "multiselect": {
      "multipleLabelOne": "1 optie geselecteerd",
      "multipleLabelMore": ":options opties geselecteerd",
      "noResults": "Geen opties gevonden",
      "noOptions": "Deze lijst is leeg"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": ["zo", "ma", "di", "wo", "do", "vr", "za"],
        "longhand": [
          "zondag",
          "maandag",
          "dinsdag",
          "woensdag",
          "donderdag",
          "vrijdag",
          "zaterdag",
        ],
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
          "dec",
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
          "december",
        ],
      },
      "firstDayOfWeek": 1,
      "weekAbbreviation": "wk",
      "rangeSeparator": " t/m ",
      "scrollTitle": "Scroll voor volgende / vorige",
      "toggleTitle": "Klik om te wisselen",
      "ordinal": (nth) => {
        if (nth === 1 || nth === 8 || nth >= 20) return "ste";

        return "de";
      },
    },
    "defaultMessage": "Ongeldig veld",
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
    }
  },
  "validation": {
    "accepted": ":Attribute moet geaccepteerd zijn.",
    "active_url": ":Attribute is geen geldige URL.",
    "after": ":Attribute moet een datum na :date zijn.",
    "after_or_equal": ":Attribute moet een datum na of gelijk aan :date zijn.",
    "alpha": ":Attribute mag alleen letters bevatten.",
    "alpha_dash": ":Attribute mag alleen letters, nummers, underscores (_) en streepjes (-) bevatten.",
    "alpha_num": ":Attribute mag alleen letters en nummers bevatten.",
    "array": ":Attribute moet geselecteerde elementen bevatten.",
    "before": ":Attribute moet een datum voor :date zijn.",
    "before_or_equal": ":Attribute moet een datum voor of gelijk aan :date zijn.",
    "between": {
      "numeric": ":Attribute moet tussen :min en :max zijn.",
      "file": ":Attribute moet tussen :min en :max kilobytes zijn.",
      "string": ":Attribute moet tussen :min en :max karakters zijn.",
      "array": ":Attribute moet tussen :min en :max items bevatten."
    },
    "boolean": ":Attribute moet ja of nee zijn.",
    "confirmed": ":Attribute bevestiging komt niet overeen.",
    "date": ":Attribute moet een datum bevatten.",
    "date_format": ":Attribute moet een geldig datum formaat bevatten.",
    "date_equals": ":Attribute moet een datum gelijk aan :date zijn.",
    "different": ":Attribute en :other moeten verschillend zijn.",
    "digits": ":Attribute moet bestaan uit :digits cijfers.",
    "digits_between": ":Attribute moet bestaan uit minimaal :min en maximaal :max cijfers.",
    "dimensions": ":Attribute heeft geen geldige afmetingen voor afbeeldingen.",
    "distinct": ":Attribute heeft een dubbele waarde.",
    "email": ":Attribute is geen geldig e-mailadres.",
    "exists": ":Attribute bestaat niet.",
    "file": ":Attribute moet een bestand zijn.",
    "filled": ":Attribute is verplicht.",
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
    "image": ":Attribute moet een afbeelding zijn.",
    "in": ":Attribute is ongeldig.",
    "in_array": ":Attribute bestaat niet in :other.",
    "integer": ":Attribute moet een getal zijn.",
    "ip": ":Attribute moet een geldig IP-adres zijn.",
    "ipv4": ":Attribute moet een geldig IPv4-adres zijn.",
    "ipv6": ":Attribute moet een geldig IPv6-adres zijn.",
    "json": ":Attribute moet een geldige JSON-string zijn.",
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
      "numeric": ":Attribute mag niet hoger dan :max zijn.",
      "file": ":Attribute mag niet meer dan :max kilobytes zijn.",
      "string": ":Attribute mag niet uit meer dan :max tekens bestaan.",
      "array": ":Attribute mag niet meer dan :max items bevatten."
    },
    "mimes": ":Attribute moet een bestand zijn van het bestandstype :values.",
    "mimetypes": ":Attribute moet een bestand zijn van het bestandstype :values.",
    "min": {
      "numeric": ":Attribute moet minimaal :min zijn.",
      "file": ":Attribute moet minimaal :min kilobytes zijn.",
      "string": ":Attribute moet minimaal :min tekens zijn.",
      "array": ":Attribute moet minimaal :min items bevatten."
    },
    "not_in": "Het formaat van :attribute is ongeldig.",
    "not_regex": "De :attribute formaat is ongeldig.",
    "numeric": ":Attribute moet een nummer zijn.",
    "regex": ":Attribute formaat is ongeldig.",
    "required": ":Attribute is verplicht.",
    "same": ":Attribute en :other moeten overeenkomen.",
    "size": {
      "numeric": ":Attribute moet :size zijn.",
      "file": ":Attribute moet :size kilobyte zijn.",
      "string": ":Attribute moet :size tekens zijn.",
      "array": ":Attribute moet :size items bevatten."
    },
    "string": ":Attribute moet een tekst zijn.",
    "timezone": ":Attribute moet een geldige tijdzone zijn.",
    "unique": ":Attribute is al in gebruik.",
    "url": ":Attribute moet een geldig URL zijn.",
    "uuid": ":Attribute moet een geldig UUID zijn."
  }
}