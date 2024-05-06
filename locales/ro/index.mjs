export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ Adaugă",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "Fișier",
        "dndTitle": "Încarcă fișierul",
        "dndDescription": "Trage fișierul sau apasă aici pentru a încărca",
        "removeConfirm": "Prin eliminarea fișierului acesta va fi șters permanent. Ești sigur că vrei să continui?",
        "select": "Selectează fișierul",
        "upload": "Încarcă"
      },
      "multifile": {
        "uploadButton": "Încarcă fișiere",
        "dndTitle": "Încarcă fișiere",
        "dndDescription": "Trage fișierele sau apasă aici pentru a încărca"
      },
      "gallery": {
        "uploadButton": "Încarcă imagini",
        "dndTitle": "Încarcă imagini",
        "dndDescription": "Trage imagini sau apasă aici pentru a încărca"
      }
    },
    "steps": {
      "finish": "Finalizează",
      "next": "Următorul",
      "previous": "Anteriorul"
    },
    "editor": {
      "acceptedMimesError": "Formate acceptate: :mimes",
      "acceptedExtensionsError": "Extensii acceptate: :extensions"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": [
          "Dum",
          "Lun",
          "Mar",
          "Mie",
          "Joi",
          "Vin",
          "Sâm"
        ],
        "longhand": [
          "Duminică",
          "Luni",
          "Marți",
          "Miercuri",
          "Joi",
          "Vineri",
          "Sâmbătă"
        ]
      },
      "months": {
        "shorthand": [
          "Ian",
          "Feb",
          "Mar",
          "Apr",
          "Mai",
          "Iun",
          "Iul",
          "Aug",
          "Sep",
          "Oct",
          "Noi",
          "Dec"
        ],
        "longhand": [
          "Ianuarie",
          "Februarie",
          "Martie",
          "Aprilie",
          "Mai",
          "Iunie",
          "Iulie",
          "August",
          "Septembrie",
          "Octombrie",
          "Noiembrie",
          "Decembrie"
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
      "firstDayOfWeek": 0,
      "ordinal": function () {
        return "°";
      },
      "rangeSeparator": " la ",
      "weekAbbreviation": "Să",
      "scrollTitle": "Derulează pentru a incrementa",
      "toggleTitle": "Apasă pentru a comuta",
      "amPM": [
        "AM",
        "PM"
      ],
      "yearAriaLabel": "An",
      "monthAriaLabel": "Lună",
      "hourAriaLabel": "Oră",
      "minuteAriaLabel": "Minut"
    },
    "dateFormats": {
      "datetimeSeconds24": "YYYY-MM-DD HH:mm:ss",
      "datetimeSeconds12": "YYYY-MM-DD hh:mm:ss a",
      "datetime24": "YYYY-MM-DD HH:mm",
      "datetime12": "YYYY-MM-DD hh:mm a",
      "timeSeconds24": "HH:mm:ss",
      "timeSeconds12": "hh:mm:ss a",
      "time24": "HH:mm",
      "time12": "hh:mm a",
      "date": "YYYY-MM-DD"
    },
    "multiselect": {
      "multipleLabelOne": "1 opțiune selectată",
      "multipleLabelMore": ":options opțiuni selectate",
      "noResults": "Nu s-au găsit opțiuni",
      "noOptions": "Lista este goală"
    },
    "defaultMessage": "Câmp invalid",
    "a11y": {
      "file": {
        "description": "Apasă Backspace pentru a elimina"
      },
      "list": {
        "remove": "Buton pentru eliminare element"
      }
    }
  },
  "validation": {
    "accepted": ":attribute trebuie acceptat.",
    "active_url": ":attribute nu este un URL valid.",
    "after": ":attribute trebuie să fie o dată după :date.",
    "after_or_equal": ":attribute trebuie să fie o dată după sau egală cu :date.",
    "alpha": ":attribute poate conține doar litere.",
    "alpha_dash": ":attribute poate conține doar litere, numere, liniuțe și sublinieri.",
    "alpha_num": ":attribute poate conține doar litere și numere.",
    "array": ":attribute trebuie să fie un array.",
    "before": ":attribute trebuie să fie o dată înainte de :date.",
    "before_or_equal": ":attribute trebuie să fie o dată înainte de sau egală cu :date.",
    "between": {
      "numeric": ":attribute trebuie să fie între :min și :max.",
      "file": ":attribute trebuie să fie între :min și :max kilobyți.",
      "string": ":attribute trebuie să aibă între :min și :max caractere.",
      "array": ":attribute trebuie să aibă între :min și :max elemente."
    },
    "boolean": "Câmpul :attribute trebuie să fie adevărat sau fals.",
    "captcha": "Te rog să verifici că nu ești un robot.",
    "confirmed": "Confirmarea pentru :attribute nu se potrivește.",
    "date": ":attribute nu este o dată validă.",
    "date_format": ":attribute nu se potrivește cu formatul :format.",
    "date_equals": ":attribute trebuie să fie egală cu :date.",
    "different": ":attribute și :other trebuie să fie diferite.",
    "digits": ":attribute trebuie să aibă :digits cifre.",
    "digits_between": ":attribute trebuie să aibă între :min și :max cifre.",
    "dimensions": ":attribute are dimensiuni de imagine nevalide.",
    "distinct": "Câmpul :attribute are o valoare duplicată.",
    "email": ":attribute trebuie să fie o adresă de email validă.",
    "exists": ":attribute selectată este invalidă.",
    "file": ":attribute trebuie să fie un fișier.",
    "filled": "Câmpul :attribute trebuie să aibă o valoare.",
    "gt": {
      "numeric": ":attribute trebuie să fie mai mare decât :value.",
      "file": ":attribute trebuie să fie mai mare decât :value kilobyți.",
      "string": ":attribute trebuie să aibă mai mult de :value caractere.",
      "array": ":attribute trebuie să aibă mai mult de :value elemente."
    },
    "gte": {
      "numeric": ":attribute trebuie să fie mai mare sau egală cu :value.",
      "file": ":attribute trebuie să fie mai mare sau egală cu :value kilobyți.",
      "string": ":attribute trebuie să aibă cel puțin :value caractere.",
      "array": ":attribute trebuie să aibă :value elemente sau mai multe."
    },
    "image": ":attribute trebuie să fie o imagine.",
    "in": ":attribute selectată este invalidă.",
    "in_array": "Câmpul :attribute nu există în :other.",
    "integer": ":attribute trebuie să fie un număr întreg.",
    "ip": ":attribute trebuie să fie o adresă IP validă.",
    "ipv4": ":attribute trebuie să fie o adresă IPv4 validă.",
    "ipv6": ":attribute trebuie să fie o adresă IPv6 validă.",
    "json": ":attribute trebuie să fie un șir JSON valid.",
    "lt": {
      "numeric": ":attribute trebuie să fie mai mic decât :value.",
      "file": ":attribute trebuie să fie mai mic decât :value kilobyți.",
      "string": ":attribute trebuie să aibă mai puțin de :value caractere.",
      "array": ":attribute trebuie să aibă mai puțin de :value elemente."
    },
    "lte": {
      "numeric": ":attribute trebuie să fie mai mică sau egală cu :value.",
      "file": ":attribute trebuie să fie mai mică sau egală cu :value kilobyți.",
      "string": ":attribute trebuie să aibă cel mult :value caractere.",
      "array": ":attribute nu trebuie să aibă mai mult de :value elemente."
    },
    "max": {
      "numeric": ":attribute nu poate fi mai mare decât :max.",
      "file": ":attribute nu poate fi mai mare decât :max kilobyți.",
      "string": ":attribute nu poate avea mai mult de :max caractere.",
      "array": ":attribute nu poate avea mai mult de :max elemente."
    },
    "mimes": ":attribute trebuie să fie un fișier de tip: :values.",
    "mimetypes": ":attribute trebuie să fie un fișier de tip: :values.",
    "min": {
      "numeric": ":attribute trebuie să fie cel puțin :min.",
      "file": ":attribute trebuie să aibă cel puțin :min kilobyți.",
      "string": ":attribute trebuie să aibă cel puțin :min caractere.",
      "array": ":attribute trebuie să aibă cel puțin :min elemente."
    },
    "not_in": ":attribute selectată este invalidă.",
    "not_regex": "Formatul :attribute este invalid.",
    "numeric": ":attribute trebuie să fie un număr.",
    "present": "Câmpul :attribute trebuie să fie prezent.",
    "regex": "Formatul :attribute este invalid.",
    "required": "Câmpul :attribute este obligatoriu.",
    "required_if": "Câmpul :attribute este obligatoriu atunci când :other este :value.",
    "required_unless": "Câmpul :attribute este obligatoriu dacă :other nu este în :values.",
    "required_with": "Câmpul :attribute este obligatoriu atunci când :values este prezent.",
    "required_with_all": "Câmpul :attribute este obligatoriu atunci când :values sunt prezente.",
    "required_without": "Câmpul :attribute este obligatoriu atunci când :values nu este prezent.",
    "required_without_all": "Câmpul :attribute este obligatoriu atunci când nici unul dintre :values nu este prezent.",
    "same": ":attribute și :other trebuie să se potrivească.",
    "size": {
      "numeric": ":attribute trebuie să fie :size.",
      "file": ":attribute trebuie să aibă :size kilobyți.",
      "string": ":attribute trebuie să aibă :size caractere.",
      "array": ":attribute trebuie să conțină :size elemente."
    },
    "string": ":attribute trebuie să fie un șir de caractere.",
    "timezone": ":attribute trebuie să fie o zonă validă.",
    "unique": ":attribute a fost deja folosit.",
    "uploaded": ":attribute nu a putut fi încărcat.",
    "url": "Formatul :attribute este invalid.",
    "uuid": ":attribute trebuie să fie un UUID valid.",
    "remote": "Câmpul :attribute este invalid."
  }
}