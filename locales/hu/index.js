export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ Hozzáadás",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "Fájl",
        "dndTitle": "Fájl feltöltése",
        "dndDescription": "Fájl feltöltéshez kattints ide vagy húzd ide a fájlt",
        "removeConfirm": "A fájl véglegesen törlődik. Folytatod?",
        "select": "Fájl kiválasztása",
        "upload": "Feltöltés"
      },
      "multifile": {
        "uploadButton": "Fájlok feltöltése",
        "dndTitle": "Fájlok feltöltése",
        "dndDescription": "Fájlok feltöltéshez kattints ide vagy húzd ide a fájlokat"
      },
      "gallery": {
        "uploadButton": "Képek feltöltése",
        "dndTitle": "Képek feltöltése",
        "dndDescription": "Képek feltöltéshez kattints ide vagy húzd ide a képeket"
      }
    },
    "steps": {
      "finish": "Befejezés",
      "next": "Következő",
      "previous": "Előző"
    },
    "editor": {
      "acceptedMimesError": "A következő MIME típusok engedélyezettek: :mimes",
      "acceptedExtensionsError": "A következő fájl kiterjesztések engedélyezettek: :extensions"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": [
          "V",
          "H",
          "K",
          "Sz",
          "Cs",
          "P",
          "Szo"
        ],
        "longhand": [
          "Vasárnap",
          "Hétfő",
          "Kedd",
          "Szerda",
          "Csütörtök",
          "Péntek",
          "Szombat"
        ]
      },
      "months": {
        "shorthand": [
          "Jan",
          "Feb",
          "Már",
          "Ápr",
          "Máj",
          "Jún",
          "Júl",
          "Aug",
          "Szep",
          "Okt",
          "Nov",
          "Dec"
        ],
        "longhand": [
          "Január",
          "Február",
          "Március",
          "Április",
          "Május",
          "Június",
          "Július",
          "Augusztus",
          "Szeptember",
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
      "rangeSeparator": " - ",
      "weekAbbreviation": "Hét",
      "scrollTitle": "Görgessen",
      "toggleTitle": "Kattintson a váltáshoz",
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
      "datetimeSeconds24": "YYYY. MM. DD. HH:mm:ss",
      "datetimeSeconds12": "YYYY. MM. DD. a hh:mm:ss",
      "datetime24": "YYYY. MM. DD. HH:mm",
      "datetime12": "YYYY. MM. DD. a hh:mm",
      "timeSeconds24": "HH:mm:ss",
      "timeSeconds12": "a hh:mm:ss",
      "time24": "HH:mm",
      "time12": "a hh:mm",
      "date": "YYYY. MM. DD."
    },
    "multiselect": {
      "multipleLabelOne": "1 opció van kiválasztva",
      "multipleLabelMore": ":options opció van kiválasztva",
      "noResults": "Nincs találat",
      "noOptions": "A lista üres"
    },
    "defaultMessage": "Érvénytelen mező",
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
    "accepted": "A(z) :attribute el kell legyen fogadva!",
    "active_url": "A(z) :attribute nem érvényes url!",
    "after": "A(z) :attribute :date utáni dátum kell, hogy legyen!",
    "after_or_equal": "A(z) :attribute nem lehet korábbi dátum, mint :date!",
    "alpha": "A(z) :attribute kizárólag betűket tartalmazhat!",
    "alpha_dash": "A(z) :attribute kizárólag betűket, számokat és kötőjeleket tartalmazhat!",
    "alpha_num": "A(z) :attribute kizárólag betűket és számokat tartalmazhat!",
    "array": "A(z) :attribute egy tömb kell, hogy legyen!",
    "before": "A(z) :attribute :date előtti dátum kell, hogy legyen!",
    "before_or_equal": "A(z) :attribute nem lehet későbbi dátum, mint :date!",
    "between": {
      "numeric": "A(z) :attribute :min és :max közötti szám kell, hogy legyen!",
      "file": "A(z) :attribute mérete :min és :max kilobájt között kell, hogy legyen!",
      "string": "A(z) :attribute hossza :min és :max karakter között kell, hogy legyen!",
      "array": "A(z) :attribute :min - :max közötti elemet kell, hogy tartalmazzon!"
    },
    "boolean": "A(z) :attribute mező csak true vagy false értéket kaphat!",
    "confirmed": "A(z) :attribute nem egyezik a megerősítéssel.",
    "date": "A(z) :attribute nem érvényes dátum.",
    "date_format": "A(z) :attribute nem egyezik az alábbi dátum formátummal :format!",
    "date_equals": ":attribute meg kell egyezzen a következővel: :date.",
    "different": "A(z) :attribute és :other értékei különbözőek kell, hogy legyenek!",
    "digits": "A(z) :attribute :digits számjegyű kell, hogy legyen!",
    "digits_between": "A(z) :attribute értéke :min és :max közötti számjegy lehet!",
    "dimensions": "A(z) :attribute felbontása nem megfelelő.",
    "distinct": "A(z) :attribute értékének egyedinek kell lennie!",
    "email": "A(z) :attribute nem érvényes email formátum.",
    "exists": "A kiválasztott :attribute érvénytelen.",
    "file": "A(z) :attribute fájl kell, hogy legyen!",
    "filled": "A(z) :attribute megadása kötelező!",
    "gt": {
      "numeric": "A(z) :attribute nagyobb kell, hogy legyen, mint :value!",
      "file": "A(z) :attribute mérete nagyobb kell, hogy legyen, mint :value kilobájt.",
      "string": "A(z) :attribute hosszabb kell, hogy legyen, mint :value karakter.",
      "array": "A(z) :attribute több, mint :value elemet kell, hogy tartalmazzon."
    },
    "gte": {
      "numeric": "A(z) :attribute nagyobb vagy egyenlő kell, hogy legyen, mint :value!",
      "file": "A(z) :attribute mérete nem lehet kevesebb, mint :value kilobájt.",
      "string": "A(z) :attribute hossza nem lehet kevesebb, mint :value karakter.",
      "array": "A(z) :attribute legalább :value elemet kell, hogy tartalmazzon."
    },
    "image": "A(z) :attribute képfájl kell, hogy legyen!",
    "in": "A kiválasztott :attribute érvénytelen.",
    "in_array": "A(z) :attribute értéke nem található a(z) :other értékek között.",
    "integer": "A(z) :attribute értéke szám kell, hogy legyen!",
    "ip": "A(z) :attribute érvényes IP cím kell, hogy legyen!",
    "ipv4": "A(z) :attribute érvényes IPv4 cím kell, hogy legyen!",
    "ipv6": "A(z) :attribute érvényes IPv6 cím kell, hogy legyen!",
    "json": "A(z) :attribute érvényes JSON szöveg kell, hogy legyen!",
    "lt": {
      "numeric": "A(z) :attribute kisebb kell, hogy legyen, mint :value!",
      "file": "A(z) :attribute mérete kisebb kell, hogy legyen, mint :value kilobájt.",
      "string": "A(z) :attribute rövidebb kell, hogy legyen, mint :value karakter.",
      "array": "A(z) :attribute kevesebb, mint :value elemet kell, hogy tartalmazzon."
    },
    "lte": {
      "numeric": "A(z) :attribute kisebb vagy egyenlő kell, hogy legyen, mint :value!",
      "file": "A(z) :attribute mérete nem lehet több, mint :value kilobájt.",
      "string": "A(z) :attribute hossza nem lehet több, mint :value karakter.",
      "array": "A(z) :attribute legfeljebb :value elemet kell, hogy tartalmazzon."
    },
    "max": {
      "numeric": "A(z) :attribute értéke nem lehet nagyobb, mint :max!",
      "file": "A(z) :attribute mérete nem lehet több, mint :max kilobájt.",
      "string": "A(z) :attribute hossza nem lehet több, mint :max karakter.",
      "array": "A(z) :attribute legfeljebb :max elemet kell, hogy tartalmazzon."
    },
    "mimes": "A(z) :attribute kizárólag az alábbi fájlformátumok egyike lehet: :values.",
    "mimetypes": "A(z) :attribute kizárólag az alábbi fájlformátumok egyike lehet: :values.",
    "min": {
      "numeric": "A(z) :attribute értéke nem lehet kisebb, mint :min!",
      "file": "A(z) :attribute mérete nem lehet kevesebb, mint :min kilobájt.",
      "string": "A(z) :attribute hossza nem lehet kevesebb, mint :min karakter.",
      "array": "A(z) :attribute legalább :min elemet kell, hogy tartalmazzon."
    },
    "not_in": "A(z) :attribute értéke érvénytelen.",
    "not_regex": "A(z) :attribute formátuma érvénytelen.",
    "numeric": "A(z) :attribute szám kell, hogy legyen!",
    "present": "The :attribute field must be present.",
    "regex": "A(z) :attribute formátuma érvénytelen.",
    "required": "A(z) :attribute megadása kötelező!",
    "required_if": "The :attribute field is required when :other is :value.",
    "required_unless": "The :attribute field is required unless :other is in :values.",
    "required_with": "The :attribute field is required when :values is present.",
    "required_with_all": "The :attribute field is required when :values are present.",
    "required_without": "The :attribute field is required when :values is not present.",
    "required_without_all": "The :attribute field is required when none of :values are present.",
    "same": "A(z) :attribute és :other mezőknek egyezniük kell!",
    "size": {
      "numeric": "A(z) :attribute értéke :size kell, hogy legyen!",
      "file": "A(z) :attribute mérete :size kilobájt kell, hogy legyen!",
      "string": "A(z) :attribute hossza :size karakter kell, hogy legyen!",
      "array": "A(z) :attribute :size elemet kell tartalmazzon!"
    },
    "string": "A(z) :attribute szöveg kell, hogy legyen.",
    "timezone": "A(z) :attribute nem létező időzona.",
    "unique": "A(z) :attribute már foglalt.",
    "uploaded": "The :attribute failed to upload.",
    "url": "A(z) :attribute érvénytelen link.",
    "uuid": ":attribute érvényes UUID-val kell rendelkezzen.",
    "remote": "The :attribute field is invalid."
  }
}