export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ Lägg till",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "Fil",
        "dndTitle": "Ladda upp fil",
        "dndDescription": "Släpp filen eller klicka här för att ladda upp",
        "removeConfirm": "Genom att ta bort filen kommer den att raderas permanent. Är du säker på att fortsätta?",
        "select": "Välj fil",
        "upload": "Ladda upp"
      },
      "multifile": {
        "uploadButton": "Ladda upp filer",
        "dndTitle": "Ladda upp filer",
        "dndDescription": "Släpp filerna eller klicka här för att ladda upp"
      },
      "gallery": {
        "uploadButton": "Ladda upp bilder",
        "dndTitle": "Ladda upp bilder",
        "dndDescription": "Släpp bilderna eller klicka här för att ladda upp"
      },
      "phone": {
        "ariaLabel": "Välj ett land"
      },
      "signature": {
        "type": "Skriv",
        "draw": "Rita",
        "upload": "Ladda upp",
        "font": "Välj typsnitt",
        "fontPlaceholder": "Ditt namn",
        "placeholder": "Skriv under här",
        "unsupportedFormat": "Formatet stöds inte. Godkända filändelser är: :extensions",
        "maxSizeError": "Max filstorlek är :max KB",
        "imgAlt": "Signatur",
        "imgTitle": "Signatur",
        "undo": "Ångra",
        "redo": "Gör om",
        "dnd": "Släpp en bild här eller",
        "uploadButton": "Välj bild",
        "modeSelectorAriaLabel": "Välj signaturläge",
        "fontSelectorAriaLabel": "Välj typsnitt",
        "wrapperAriaLabel": "Signaturinmatning",
        "inputAriaLabel": "Skriv din signatur här",
        "padAriaLabel": "Rita din signatur i rutan. Sök hjälp om du behöver.",
        "clearAriaLabel": "Rensa signatur",
        "colorAriaLabel": "Välj färg: "
      }
    },
    "steps": {
      "finish": "Slutför",
      "next": "Nästa",
      "previous": "Föregående"
    },
    "editor": {
      "acceptedMimesError": "Godkända MIME-typer är: :mimes",
      "acceptedExtensionsError": "Godkända filändelser är: :extensions"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": [
          "Sön",
          "Mån",
          "Tis",
          "Ons",
          "Tor",
          "Fre",
          "Lör"
        ],
        "longhand": [
          "Söndag",
          "Måndag",
          "Tisdag",
          "Onsdag",
          "Torsdag",
          "Fredag",
          "Lördag"
        ]
      },
      "months": {
        "shorthand": [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Maj",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Okt",
          "Nov",
          "Dec"
        ],
        "longhand": [
          "Januari",
          "Februari",
          "Mars",
          "April",
          "Maj",
          "Juni",
          "Juli",
          "Augusti",
          "September",
          "Oktober",
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
      "firstDayOfWeek": 0,
      "ordinal": function (nth) {
        var suffix = "e";
        if (nth === 1) suffix = "a";
        return nth + ":" + suffix;
      },
      "rangeSeparator": " till ",
      "weekAbbreviation": "Ve",
      "scrollTitle": "Scrolla för att öka",
      "toggleTitle": "Klicka för att växla",
      "amPM": [
        "AM",
        "PM"
      ],
      "yearAriaLabel": "År",
      "monthAriaLabel": "Månad",
      "hourAriaLabel": "Timme",
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
      "multipleLabelOne": "1 alternativ valt",
      "multipleLabelMore": ":options alternativ valda",
      "noResults": "Inga alternativ hittades",
      "noOptions": "Listan är tom"
    },
    "defaultMessage": "Ogiltigt fält",
    "a11y": {
      "file": {
        "description": "Tryck på Backspace för att ta bort"
      },
      "list": {
        "remove": "Ta bort objektknapp"
      }
    },
    "countries": {
      "AF": "Afghanistan",
      "AL": "Albanien",
      "DZ": "Algeriet",
      "AS": "Amerikanska Samoa",
      "AD": "Andorra",
      "AO": "Angola",
      "AI": "Anguilla",
      "AG": "Antigua & Barbuda",
      "AR": "Argentina",
      "AM": "Armenien",
      "AW": "Aruba",
      "AC": "Ascension Island",
      "AU": "Australien",
      "AT": "Österrike",
      "AZ": "Azerbajdzjan",
      "BS": "Bahamas",
      "BH": "Bahrain",
      "BD": "Bangladesh",
      "BB": "Barbados",
      "BY": "Vitryssland",
      "BE": "Belgien",
      "BZ": "Belize",
      "BJ": "Benin",
      "BM": "Bermuda",
      "BT": "Bhutan",
      "BO": "Bolivia",
      "BA": "Bosnien & Hercegovina",
      "BW": "Botswana",
      "BR": "Brasilien",
      "IO": "Brittiska Indiska Oceanen",
      "VG": "Brittiska Jungfruöarna",
      "BN": "Brunei",
      "BG": "Bulgarien",
      "BF": "Burkina Faso",
      "BI": "Burundi",
      "KH": "Kambodja",
      "CM": "Kamerun",
      "CA": "Kanada",
      "CV": "Kap Verde",
      "BQ": "Karibiska Nederländerna",
      "KY": "Caymanöarna",
      "CF": "Centralafrikanska republiken",
      "TD": "Tchad",
      "CL": "Chile",
      "CN": "Kina",
      "CO": "Colombia",
      "KM": "Komorerna",
      "CG": "Kongo - Brazzaville",
      "CD": "Kongo - Kinshasa",
      "CK": "Cooköarna",
      "CR": "Costa Rica",
      "CI": "Côte d'Ivoire",
      "HR": "Kroatien",
      "CU": "Kuba",
      "CW": "Curaçao",
      "CY": "Cypern",
      "CZ": "Tjeckien",
      "DK": "Danmark",
      "DJ": "Djibouti",
      "DM": "Dominica",
      "DO": "Dominikanska republiken",
      "EC": "Ecuador",
      "EG": "Egypten",
      "SV": "El Salvador",
      "GQ": "Ekvatorialguinea",
      "ER": "Eritrea",
      "EE": "Estland",
      "SZ": "Eswatini",
      "ET": "Etiopien",
      "FK": "Falklandsöarna (Islas Malvinas)",
      "FO": "Färöarna",
      "FJ": "Fiji",
      "FI": "Finland",
      "FR": "Frankrike",
      "GF": "Franska Guyana",
      "PF": "Franska Polynesien",
      "GA": "Gabon",
      "GM": "Gambia",
      "GE": "Georgien",
      "DE": "Tyskland",
      "GH": "Ghana",
      "GI": "Gibraltar",
      "GR": "Grekland",
      "GL": "Grönland",
      "GD": "Grenada",
      "GP": "Guadeloupe",
      "GU": "Guam",
      "GT": "Guatemala",
      "GN": "Guinea",
      "GW": "Guinea-Bissau",
      "GY": "Guyana",
      "HT": "Haiti",
      "HN": "Honduras",
      "HK": "Hongkong",
      "HU": "Ungern",
      "IS": "Island",
      "IN": "Indien",
      "ID": "Indonesien",
      "IR": "Iran",
      "IQ": "Irak",
      "IE": "Irland",
      "IL": "Israel",
      "IT": "Italien",
      "JM": "Jamaica",
      "JP": "Japan",
      "JO": "Jordanien",
      "KZ": "Kazakstan",
      "KE": "Kenya",
      "KI": "Kiribati",
      "XK": "Kosovo",
      "KW": "Kuwait",
      "KG": "Kirgizistan",
      "LA": "Laos",
      "LV": "Lettland",
      "LB": "Libanon",
      "LS": "Lesotho",
      "LR": "Liberia",
      "LY": "Libyen",
      "LI": "Liechtenstein",
      "LT": "Litauen",
      "LU": "Luxemburg",
      "MO": "Macao",
      "MG": "Madagaskar",
      "MW": "Malawi",
      "MY": "Malaysia",
      "MV": "Maldiverna",
      "ML": "Mali",
      "MT": "Malta",
      "MH": "Marshallöarna",
      "MQ": "Martinique",
      "MR": "Mauretanien",
      "MU": "Mauritius",
      "MX": "Mexiko",
      "FM": "Mikronesien",
      "MD": "Moldavien",
      "MC": "Monaco",
      "MN": "Mongoliet",
      "ME": "Montenegro",
      "MS": "Montserrat",
      "MA": "Marocko",
      "MZ": "Moçambique",
      "MM": "Myanmar (Burma)",
      "NA": "Namibia",
      "NR": "Nauru",
      "NP": "Nepal",
      "NL": "Nederländerna",
      "NC": "Nya Kaledonien",
      "NZ": "Nya Zeeland",
      "NI": "Nicaragua",
      "NE": "Niger",
      "NG": "Nigeria",
      "NU": "Niue",
      "NF": "Norfolkön",
      "KP": "Nordkorea",
      "MK": "Nordmakedonien",
      "MP": "Nordmarianerna",
      "NO": "Norge",
      "OM": "Oman",
      "PK": "Pakistan",
      "PW": "Palau",
      "PS": "Palestina",
      "PA": "Panama",
      "PG": "Papua Nya Guinea",
      "PY": "Paraguay",
      "PE": "Peru",
      "PH": "Filippinerna",
      "PL": "Polen",
      "PT": "Portugal",
      "PR": "Puerto Rico",
      "QA": "Qatar",
      "RE": "Réunion",
      "RO": "Rumänien",
      "RU": "Ryssland",
      "RW": "Rwanda",
      "WS": "Samoa",
      "SM": "San Marino",
      "ST": "São Tomé & Príncipe",
      "SA": "Saudiarabien",
      "SN": "Senegal",
      "RS": "Serbien",
      "SC": "Seychellerna",
      "SL": "Sierra Leone",
      "SG": "Singapore",
      "SX": "Sint Maarten",
      "SK": "Slovakien",
      "SI": "Slovenien",
      "SB": "Salomonöarna",
      "SO": "Somalia",
      "ZA": "Sydafrika",
      "KR": "Sydkorea",
      "SS": "Sydsudan",
      "ES": "Spanien",
      "LK": "Sri Lanka",
      "BL": "Saint-Barthélemy",
      "SH": "Sankta Helena",
      "KN": "Saint Kitts & Nevis",
      "LC": "Saint Lucia",
      "MF": "Saint-Martin",
      "PM": "Saint-Pierre & Miquelon",
      "VC": "Saint Vincent & Grenadinerna",
      "SD": "Sudan",
      "SR": "Surinam",
      "SE": "Sverige",
      "CH": "Schweiz",
      "SY": "Syrien",
      "TW": "Taiwan",
      "TJ": "Tadzjikistan",
      "TZ": "Tanzania",
      "TH": "Thailand",
      "TL": "Östtimor",
      "TG": "Togo",
      "TK": "Tokelau",
      "TO": "Tonga",
      "TT": "Trinidad & Tobago",
      "TN": "Tunisien",
      "TR": "Turkiet",
      "TM": "Turkmenistan",
      "TC": "Turks- och Caicosöarna",
      "TV": "Tuvalu",
      "VI": "Amerikanska Jungfruöarna",
      "UG": "Uganda",
      "UA": "Ukraina",
      "AE": "Förenade Arabemiraten",
      "GB": "Storbritannien",
      "US": "Förenta staterna",
      "UY": "Uruguay",
      "UZ": "Uzbekistan",
      "VU": "Vanuatu",
      "VA": "Vatikanstaten",
      "VE": "Venezuela",
      "VN": "Vietnam",
      "WF": "Wallis- och Futunaöarna",
      "YE": "Jemen",
      "ZM": "Zambia",
      "ZW": "Zimbabwe"
    }
  },
  "validation": {
    "accepted": ":attribute måste accepteras.",
    "active_url": ":attribute är inte en giltig URL.",
    "after": ":attribute måste vara ett datum efter :date.",
    "after_or_equal": ":attribute måste vara ett datum efter eller lika med :date.",
    "alpha": ":attribute får bara innehålla bokstäver.",
    "alpha_dash": ":attribute får bara innehålla bokstäver, siffror, bindestreck och understreck.",
    "alpha_num": ":attribute får bara innehålla bokstäver och siffror.",
    "array": ":attribute måste vara en array.",
    "before": ":attribute måste vara ett datum före :date.",
    "before_or_equal": ":attribute måste vara ett datum före eller lika med :date.",
    "between": {
      "numeric": ":attribute måste vara mellan :min och :max.",
      "file": ":attribute måste vara mellan :min och :max kilobytes.",
      "string": ":attribute måste vara mellan :min och :max tecken.",
      "array": ":attribute måste ha mellan :min och :max objekt."
    },
    "boolean": ":attribute fältet måste vara sant eller falskt.",
    "captcha": "Vänligen verifiera att du inte är en robot.",
    "completed": "Vänligen fyll i ett giltigt telefonnummer.",
    "confirmed": ":attribute bekräftelsen stämmer inte överens.",
    "date": ":attribute är inte ett giltigt datum.",
    "date_format": ":attribute stämmer inte överens med formatet :format.",
    "date_equals": ":attribute måste vara lika med :date.",
    "different": ":attribute och :other måste vara olika.",
    "digits": ":attribute måste vara :digits siffror.",
    "digits_between": ":attribute måste vara mellan :min och :max siffror.",
    "dimensions": ":attribute har ogiltiga bildmått.",
    "distinct": ":attribute fältet har ett dubblerat värde.",
    "email": ":attribute måste vara en giltig e-postadress.",
    "exists": "Vald :attribute är ogiltig.",
    "file": ":attribute måste vara en fil.",
    "filled": ":attribute fältet måste ha ett värde.",
    "gt": {
      "numeric": ":attribute måste vara större än :value.",
      "file": ":attribute måste vara större än :value kilobytes.",
      "string": ":attribute måste vara större än :value tecken.",
      "array": ":attribute måste ha mer än :value objekt."
    },
    "gte": {
      "numeric": ":attribute måste vara större än eller lika med :value.",
      "file": ":attribute måste vara större än eller lika med :value kilobytes.",
      "string": ":attribute måste vara större än eller lika med :value tecken.",
      "array": ":attribute måste ha :value objekt eller mer."
    },
    "image": ":attribute måste vara en bild.",
    "in": "Vald :attribute är ogiltig.",
    "in_array": ":attribute fältet existerar inte i :other.",
    "integer": ":attribute måste vara ett heltal.",
    "ip": ":attribute måste vara en giltig IP-adress.",
    "ipv4": ":attribute måste vara en giltig IPv4-adress.",
    "ipv6": ":attribute måste vara en giltig IPv6-adress.",
    "json": ":attribute måste vara en giltig JSON-sträng.",
    "lt": {
      "numeric": ":attribute måste vara mindre än :value.",
      "file": ":attribute måste vara mindre än :value kilobytes.",
      "string": ":attribute måste vara mindre än :value tecken.",
      "array": ":attribute måste ha mindre än :value objekt."
    },
    "lte": {
      "numeric": ":attribute måste vara mindre än eller lika med :value.",
      "file": ":attribute måste vara mindre än eller lika med :value kilobytes.",
      "string": ":attribute måste vara mindre än eller lika med :value tecken.",
      "array": ":attribute får inte ha mer än :value objekt."
    },
    "max": {
      "numeric": ":attribute får inte vara större än :max.",
      "file": ":attribute får inte vara större än :max kilobytes.",
      "string": ":attribute får inte vara större än :max tecken.",
      "array": ":attribute får inte ha mer än :max objekt."
    },
    "mimes": ":attribute måste vara en fil av typen: :values.",
    "mimetypes": ":attribute måste vara en fil av typen: :values.",
    "min": {
      "numeric": ":attribute måste vara minst :min.",
      "file": ":attribute måste vara minst :min kilobytes.",
      "string": ":attribute måste vara minst :min tecken.",
      "array": ":attribute måste ha minst :min objekt."
    },
    "not_in": "Vald :attribute är ogiltig.",
    "not_regex": ":attribute formatet är ogiltigt.",
    "numeric": ":attribute måste vara ett nummer.",
    "present": ":attribute fältet måste finnas.",
    "regex": ":attribute formatet är ogiltigt.",
    "required": ":attribute fältet är obligatoriskt.",
    "required_if": ":attribute fältet är obligatoriskt när :other är :value.",
    "required_unless": ":attribute fältet är obligatoriskt om inte :other är i :values.",
    "required_with": ":attribute fältet är obligatoriskt när :values finns.",
    "required_with_all": ":attribute fältet är obligatoriskt när :values finns.",
    "required_without": ":attribute fältet är obligatoriskt när :values inte finns.",
    "required_without_all": ":attribute fältet är obligatoriskt när ingen av :values finns.",
    "same": ":attribute och :other måste matcha.",
    "size": {
      "numeric": ":attribute måste vara :size.",
      "file": ":attribute måste vara :size kilobytes.",
      "string": ":attribute måste vara :size tecken.",
      "array": ":attribute måste innehålla :size objekt."
    },
    "string": ":attribute måste vara en sträng.",
    "timezone": ":attribute måste vara en giltig zon.",
    "unique": ":attribute har redan tagits.",
    "uploaded": ":attribute misslyckades att ladda upp.",
    "url": ":attribute formatet är ogiltigt.",
    "uuid": ":attribute måste vara en giltig UUID.",
    "remote": ":attribute fältet är ogiltigt."
  }
}