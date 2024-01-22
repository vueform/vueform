export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ Tilføj",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "Fil",
        "dndTitle": "Upload fil",
        "dndDescription": "Slip filen eller klik her for at uploade",
        "removeConfirm": "Ved at fjerne filen vil den blive slettet permanent. Er du sikker på at du vil fortsætte?",
        "select": "Vælg fil",
        "upload": "Upload"
      },
      "multifile": {
        "uploadButton": "Upload filer",
        "dndTitle": "Upload filer",
        "dndDescription": "Slip filer, eller klik her for at uploade"
      },
      "gallery": {
        "uploadButton": "Upload billeder",
        "dndTitle": "Upload billeder",
        "dndDescription": "Slip billeder eller klik her for at uploade"
      }
    },
    "steps": {
      "finish": "Afslut",
      "next": "Næste",
      "previous": "Tidligere"
    },
    "editor": {
      "acceptedMimesError": "Accepterede mimes er: :mimes",
      "acceptedExtensionsError": "Accepterede udvidelser er: :extensions"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": [
          "søn",
          "man",
          "tir",
          "ons",
          "tors",
          "fre",
          "lør"
        ],
        "longhand": [
          "søndag",
          "mandag",
          "tirsdag",
          "onsdag",
          "torsdag",
          "fredag",
          "lørdag"
        ]
      },
      "months": {
        "shorthand": [
          "jan",
          "feb",
          "mar",
          "apr",
          "maj",
          "jun",
          "jul",
          "aug",
          "sep",
          "okt",
          "nov",
          "dec"
        ],
        "longhand": [
          "januar",
          "februar",
          "marts",
          "april",
          "maj",
          "juni",
          "juli",
          "august",
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
      "ordinal": function () {
        return ".";
      },
      "rangeSeparator": " til ",
      "weekAbbreviation": "uge",
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
      "datetimeSeconds24": "DD.MM.YYYY HH.mm.ss",
      "datetimeSeconds12": "DD.MM.YYYY hh.mm.ss a",
      "datetime24": "DD.MM.YYYY HH.mm",
      "datetime12": "DD.MM.YYYY hh.mm a",
      "timeSeconds24": "HH.mm.ss",
      "timeSeconds12": "hh.mm.ss a",
      "time24": "HH.mm",
      "time12": "hh.mm a",
      "date": "DD.MM.YYYY"
    },
    "multiselect": {
      "multipleLabelOne": "1 indstilling valgt",
      "multipleLabelMore": ":options indstillinger valgt",
      "noResults": "Ingen indstillinger fundet",
      "noOptions": "Listen er tom"
    },
    "defaultMessage": "Ugyldigt felt",
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
    "accepted": ":attribute skal accepteres.",
    "active_url": ":attribute er ikke en gyldig URL.",
    "after": ":attribute skal være en dato efter :date.",
    "after_or_equal": ":attribute skal være en dato efter eller lig med :date.",
    "alpha": ":attribute må kun bestå af bogstaver.",
    "alpha_dash": ":attribute må kun bestå af bogstaver, tal og bindestreger.",
    "alpha_num": ":attribute må kun bestå af bogstaver og tal.",
    "array": ":attribute skal være et array.",
    "before": ":attribute skal være en dato før :date.",
    "before_or_equal": ":attribute skal være en dato før eller lig med :date.",
    "between": {
      "numeric": ":attribute skal være mellem :min og :max.",
      "file": ":attribute skal være mellem :min og :max kilobytes.",
      "string": ":attribute skal være mellem :min og :max tegn.",
      "array": ":attribute skal indeholde mellem :min og :max elementer."
    },
    "boolean": ":attribute skal være sand eller falsk.",
    "confirmed": ":attribute er ikke det samme som bekræftelsesfeltet.",
    "date": ":attribute er ikke en gyldig dato.",
    "date_format": ":attribute matcher ikke formatet :format.",
    "date_equals": ":attribute skal være en dato lig med :date.",
    "different": ":attribute og :other skal være forskellige.",
    "digits": ":attribute skal have :digits cifre.",
    "digits_between": ":attribute skal have mellem :min og :max cifre.",
    "dimensions": ":attribute har forkerte billeddimensioner.",
    "distinct": ":attribute har en duplikatværdi.",
    "email": ":attribute skal være en gyldig e-mailadresse.",
    "exists": "Valgte :attribute er ugyldig.",
    "file": ":attribute skal være en fil.",
    "filled": ":attribute skal udfyldes.",
    "gt": {
      "numeric": ":attribute skal være større end :value.",
      "file": ":attribute skal være større end :value kilobytes.",
      "string": ":attribute skal være mere end :value tegn.",
      "array": ":attribute skal være mere end :value elementer."
    },
    "gte": {
      "numeric": ":attribute skal være større end eller lig med :value.",
      "file": ":attribute skal være større end eller lig med :value kilobytes.",
      "string": ":attribute skal være mere end eller lig med :value tegn.",
      "array": ":attribute skal have :value elementer eller mere."
    },
    "image": ":attribute skal være et billede.",
    "in": "Valgte :attribute er ugyldig.",
    "in_array": ":attribute eksisterer ikke i :other.",
    "integer": ":attribute skal være et heltal.",
    "ip": ":attribute skal være en gyldig IP adresse.",
    "ipv4": ":attribute skal være en gyldig IPv4 adresse.",
    "ipv6": ":attribute skal være en gyldig IPv6 adresse.",
    "json": ":attribute skal være en gyldig JSON streng.",
    "lt": {
      "numeric": ":attribute skal være mindre end :value.",
      "file": ":attribute skal være mindre end :value kilobytes.",
      "string": ":attribute skal være mindre end :value tegn.",
      "array": ":attribute skal have mindre end :value items."
    },
    "lte": {
      "numeric": ":attribute skal være mindre eller lig med :value.",
      "file": ":attribute skal være mindre eller lig med :value kilobytes.",
      "string": ":attribute skal være mindre eller lig med :value tegn.",
      "array": ":attribute må ikke have mere end :value elementer."
    },
    "max": {
      "numeric": ":attribute må ikke være større end :max.",
      "file": ":attribute må ikke være større end :max kilobytes.",
      "string": ":attribute må ikke være mere end :max tegn.",
      "array": ":attribute må ikke indeholde mere end :max elementer."
    },
    "mimes": ":attribute skal være en fil af typen: :values.",
    "mimetypes": ":attribute skal være en fil af typen: :values.",
    "min": {
      "numeric": ":attribute skal være mindst :min.",
      "file": ":attribute skal være mindst :min kilobytes.",
      "string": ":attribute skal være mindst :min tegn.",
      "array": ":attribute skal indeholde mindst :min elementer."
    },
    "not_in": "Valgte :attribute er ugyldig.",
    "not_regex": "Formatet for :attribute er ugyldigt.",
    "numeric": ":attribute skal være et tal.",
    "present": "The :attribute field must be present.",
    "regex": ":attribute formatet er ugyldigt.",
    "required": ":attribute skal udfyldes.",
    "required_if": "The :attribute field is required when :other is :value.",
    "required_unless": "The :attribute field is required unless :other is in :values.",
    "required_with": "The :attribute field is required when :values is present.",
    "required_with_all": "The :attribute field is required when :values are present.",
    "required_without": "The :attribute field is required when :values is not present.",
    "required_without_all": "The :attribute field is required when none of :values are present.",
    "same": ":attribute og :other skal være ens.",
    "size": {
      "numeric": ":attribute skal være :size.",
      "file": ":attribute skal være :size kilobytes.",
      "string": ":attribute skal være :size tegn lang.",
      "array": ":attribute skal indeholde :size elementer."
    },
    "string": ":attribute skal være en streng.",
    "timezone": ":attribute skal være en gyldig tidszone.",
    "unique": ":attribute er allerede taget.",
    "uploaded": "The :attribute failed to upload.",
    "url": ":attribute formatet er ugyldigt.",
    "uuid": ":attribute skal være en gyldig UUID.",
    "remote": "The :attribute field is invalid."
  }
}