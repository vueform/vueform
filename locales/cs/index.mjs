export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ Přidat",
        "remove": "&times; Odstranit"
      },
      "file": {
        "defaultName": "Soubor",
        "dndTitle": "Nahrajte soubor",
        "dndDescription": "Přesuňte soubor nebo ho nahrajte kliknutím sem",
        "removeConfirm": "Soubor bude trvale smazán. Opravdu chcete pokračovat?",
        "select": "Vyberte soubor",
        "upload": "Nahrát"
      },
      "multifile": {
        "uploadButton": "Nahrát soubory",
        "dndTitle": "Nahrát soubory",
        "dndDescription": "Presuňte soubory nebo je nahrajte kliknutím sem"
      },
      "gallery": {
        "uploadButton": "Nahrát obrázky",
        "dndTitle": "Nahrát obrázky",
        "dndDescription": "Presuňte obrázky nebo je nahrajte kliknutím sem"
      }
    },
    "steps": {
      "finish": "Dokončit",
      "next": "Další",
      "previous": "Předcházející"
    },
    "editor": {
      "acceptedMimesError": "Akceptované mimy jsou: :mimes",
      "acceptedExtensionsError": "Akceptované rozšíření jsou: :extensions"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": [
          "Ne",
          "Po",
          "Út",
          "St",
          "Čt",
          "Pá",
          "So"
        ],
        "longhand": [
          "Neděle",
          "Pondělí",
          "Úterý",
          "Středa",
          "Čtvrtek",
          "Pátek",
          "Sobota"
        ]
      },
      "months": {
        "shorthand": [
          "Led",
          "Úno",
          "Bře",
          "Dub",
          "Kvě",
          "Čvn",
          "Čvc",
          "Srp",
          "Zář",
          "Říj",
          "Lis",
          "Pro"
        ],
        "longhand": [
          "Leden",
          "Únor",
          "Březen",
          "Duben",
          "Květen",
          "Červen",
          "Červenec",
          "Srpen",
          "Září",
          "Říjen",
          "Listopad",
          "Prosinec"
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
      "weekAbbreviation": "t.",
      "scrollTitle": "Scroll to increment",
      "toggleTitle": "Click to toggle",
      "amPM": [
        "AM",
        "PM"
      ],
      "yearAriaLabel": "Rok",
      "monthAriaLabel": "Měsíc",
      "hourAriaLabel": "Hodina",
      "minuteAriaLabel": "Minuta"
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
      "multipleLabelOne": "1 vybraná možnost",
      "multipleLabelMore": ":options vybrané možnosti",
      "noResults": "Možnosti nenalezeny.",
      "noOptions": "Seznam je prázdny"
    },
    "defaultMessage": "Neplatné pole",
    "a11y": {
      "file": {
        "description": "Zmáčkněte klávesu zpět pro smazání."
      },
      "list": {
        "remove": "Tlačítko odstranit položku"
      }
    }
  },
  "validation": {
    "accepted": ":Attribute musí být akceptovaný.",
    "active_url": ":Attribute má neplatnou URL adresu.",
    "after": ":Attribute musí být datum po :date.",
    "after_or_equal": ":Attribute musí být datum po anebo přesně :date.",
    "alpha": ":Attribute může obsahovat jen písmena.",
    "alpha_dash": ":Attribute může obsahovat jen písmena, čísla a pomlčky.",
    "alpha_num": ":Attribute může obsahovat jen písmena, čísla.",
    "array": ":Attribute musí být pole.",
    "before": ":Attribute musí být datum před :date.",
    "before_or_equal": ":Attribute musí být datum před anebo přesně :date.",
    "between": {
      "numeric": ":Attribute musí mít rozsah :min - :max.",
      "file": ":Attribute musí mít rozsah :min - :max kilobajtů.",
      "string": ":Attribute musí mít rozsah :min - :max znaků.",
      "array": ":Attribute musí mít rozsah :min - :max prvků."
    },
    "boolean": ":Attribute musí být true anebo false.",
    "confirmed": ":Attribute konfirmace se neshoduje.",
    "date": ":Attribute má neplatné datum.",
    "date_format": ":Attribute se neshoduje s formátem :format.",
    "date_equals": ":Attribute musí být datum rovnajicí se :date.",
    "different": ":Attribute a :other musí být odlišné.",
    "digits": ":Attribute musí mít :digits číslic.",
    "digits_between": ":Attribute musí mít rozsah :min až :max číslic.",
    "dimensions": ":Attribute má neplatné rozměry obrázku.",
    "distinct": ":Attribute je duplicitní.",
    "email": ":Attribute má neplatný formát.",
    "exists": "označený :attribute je neplatný.",
    "file": ":Attribute musí být soubor.",
    "filled": ":Attribute je požadovaný.",
    "gt": {
      "numeric": "Hodnota :attribute musí být větší než :value.",
      "file": ":Attribute musí mít více kilobajtů než :value.",
      "string": ":Attribute musí mít více znaků než :value.",
      "array": ":Attribute musí mít více prvků než :value."
    },
    "gte": {
      "numeric": "Hodnota :attribute musí být větší anebo rovná :value.",
      "file": ":Attribute musí mít stejný anebo větší počet kilobajtů než :value.",
      "string": ":Attribute musí mít stejný anebo větší počet znaků než :value.",
      "array": ":Attribute musí mít stejný anebo větší počet prvků než :value."
    },
    "image": ":Attribute musí být obrázek.",
    "in": "označený :attribute je neplatný.",
    "in_array": ":Attribute se nenachází v :other.",
    "integer": ":Attribute musí být celé číslo.",
    "ip": ":Attribute musí být platná IP adresa.",
    "ipv4": ":Attribute musí být platná IPv4 adresa.",
    "ipv6": ":Attribute musí být platná IPv6 adresa.",
    "json": ":Attribute musí být platný JSON objekt.",
    "lt": {
      "numeric": "Hodnota :attribute musí být menší než :value.",
      "file": ":Attribute musí mít méně kilobajtů než :value.",
      "string": ":Attribute musí mít méně znaků než :value.",
      "array": ":Attribute musí mít méně prvků než :value."
    },
    "lte": {
      "numeric": "Hodnota :attribute musí být menší anebo rovná jako :value.",
      "file": ":Attribute musí mít stejný anebo menší počet kilobajtů ; :value.",
      "string": ":Attribute musí mít stejný anebo menší počet znaků než :value.",
      "array": ":Attribute musí mít stejný anebo menší počet prvků než :value."
    },
    "max": {
      "numeric": ":Attribute nemůže být vetší než :max.",
      "file": ":Attribute nemůže být vetší než :max kilobajtů.",
      "string": ":Attribute nemůže být vetší než :max znaků.",
      "array": ":Attribute nemůže mít více jako :max prvků."
    },
    "mimes": ":Attribute musí být soubor s koncovkou: :values.",
    "mimetypes": ":Attribute musí být soubor s koncovkou: :values.",
    "min": {
      "numeric": ":Attribute musí mít alespoň :min.",
      "file": ":Attribute musí mít alespoň :min kilobajtů.",
      "string": ":Attribute musí mít alespoň :min znaků.",
      "array": ":Attribute musí mít alespoň :min prvků."
    },
    "not_in": "označený :attribute je neplatný.",
    "not_regex": ":Attribute má neplatný formát.",
    "numeric": ":Attribute musí být číslo.",
    "present": "The :attribute field must be present.",
    "regex": ":Attribute má neplatný formát.",
    "required": ":Attribute je požadovaný.",
    "required_if": ":Attribute je povinný když :other je :value.",
    "required_unless": ":Attribute je povinný jestliže :other je v :values.",
    "required_with": ":Attribute je povinný jestliže :values je přítomny.",
    "required_with_all": ":Attribute je povinný tehdy když :values jsou přítomny.",
    "required_without": ":Attribute je povinný jestliže :values nejsou přítomny.",
    "required_without_all": ":Attribute je povinný jestliže žádné z :values jsou přítomny.",
    "same": ":Attribute a :other se musí shodovat.",
    "size": {
      "numeric": ":Attribute musí být :size.",
      "file": ":Attribute musí mít :size kilobajtů.",
      "string": ":Attribute musí mít :size znaků.",
      "array": ":Attribute musí obsahovat :size prvků."
    },
    "string": ":Attribute musí být řetězec znaků.",
    "timezone": ":Attribute musí být platné časové pásmo.",
    "unique": ":Attribute už existuje.",
    "uploaded": "The :attribute failed to upload.",
    "url": ":Attribute musí mít formát URL.",
    "uuid": ":Attribute musí být platné UUID.",
    "remote": "Pole :attribute je neplatný."
  }
}