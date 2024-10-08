export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ Добави",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "Файл",
        "dndTitle": "Качване на файл",
        "dndDescription": "Пуснете файла тук или кликнете, за да качите",
        "removeConfirm": "При премахване на файла, той ще бъде изтрит завинаги. Сигурни ли сте, че искате да продължите?",
        "select": "Изберете файл",
        "upload": "Качване"
      },
      "multifile": {
        "uploadButton": "Качете файлове",
        "dndTitle": "Качване на файлове",
        "dndDescription": "Пуснете файловете тук или кликнете, за да качите"
      },
      "gallery": {
        "uploadButton": "Качете изображения",
        "dndTitle": "Качване на изображения",
        "dndDescription": "Пуснете изображенията тук или кликнете, за да качите"
      },
      "phone": {
        "ariaLabel": "Изберете страна"
      },
      "signature": {
        "type": "Тип",
        "draw": "Рисувай",
        "upload": "Качване",
        "font": "Изберете шрифт",
        "fontPlaceholder": "Вашето име",
        "placeholder": "Подпишете се тук",
        "unsupportedFormat": "Неподдържан файлов формат. Приетите разширения са: :extensions",
        "maxSizeError": "Максималният размер на файла е :max KB",
        "imgAlt": "Подпис",
        "imgTitle": "Подпис",
        "undo": "Отмени",
        "redo": "Повтори",
        "dnd": "Пуснете изображението тук или",
        "uploadButton": "Изберете изображение",
        "modeSelectorAriaLabel": "Изберете режим на подпис",
        "fontSelectorAriaLabel": "Изберете шрифт",
        "wrapperAriaLabel": "Поле за подпис",
        "inputAriaLabel": "Въведете вашият подпис тук",
        "padAriaLabel": "Нарисувайте подписа си в полето. Потърсете помощ, ако е необходимо.",
        "clearAriaLabel": "Изтрийте подписа",
        "colorAriaLabel": "Изберете цвят: "
      }
    },
    "steps": {
      "finish": "Завърши",
      "next": "Напред",
      "previous": "Назад"
    },
    "editor": {
      "acceptedMimesError": "Приетите MIME типове са: :mimes",
      "acceptedExtensionsError": "Приетите разширения са: :extensions"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": [
          "Нед",
          "Пон",
          "Вто",
          "Сря",
          "Чет",
          "Пет",
          "Съб"
        ],
        "longhand": [
          "Неделя",
          "Понеделник",
          "Вторник",
          "Сряда",
          "Четвъртък",
          "Петък",
          "Събота"
        ]
      },
      "months": {
        "shorthand": [
          "Яну",
          "Фев",
          "Мар",
          "Апр",
          "Май",
          "Юни",
          "Юли",
          "Авг",
          "Сеп",
          "Окт",
          "Ное",
          "Дек"
        ],
        "longhand": [
          "Януари",
          "Февруари",
          "Март",
          "Април",
          "Май",
          "Юни",
          "Юли",
          "Август",
          "Септември",
          "Октомври",
          "Ноември",
          "Декември"
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
        var s = nth % 100;
        if (s > 3 && s < 21) return "ти";
        switch (s % 10) {
          case 1:
            return "ви";
          case 2:
            return "ри";
          case 3:
            return "ти";
          default:
            return "ти";
        }
      },
      "rangeSeparator": " до ",
      "weekAbbreviation": "Сед",
      "scrollTitle": "Превъртете за увеличение",
      "toggleTitle": "Кликнете за превключване",
      "amPM": [
        "AM",
        "PM"
      ],
      "yearAriaLabel": "Година",
      "monthAriaLabel": "Месец",
      "hourAriaLabel": "Час",
      "minuteAriaLabel": "Минута"
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
      "multipleLabelOne": "1 опция избрана",
      "multipleLabelMore": ":options опции избрани",
      "noResults": "Няма намерени опции",
      "noOptions": "Списъкът е празен"
    },
    "defaultMessage": "Невалидно поле",
    "a11y": {
      "file": {
        "description": "Натиснете Backspace за премахване"
      },
      "list": {
        "remove": "Бутон за премахване на елемент"
      }
    },
    "countries": {
      "AF": "Афганистан",
      "AL": "Албания",
      "DZ": "Алжир",
      "AS": "Американско Самоа",
      "AD": "Андора",
      "AO": "Ангола",
      "AI": "Ангуила",
      "AG": "Антигуа и Барбуда",
      "AR": "Аржентина",
      "AM": "Армения",
      "AW": "Аруба",
      "AC": "Остров Възнесение",
      "AU": "Австралия",
      "AT": "Австрия",
      "AZ": "Азербайджан",
      "BS": "Бахамски острови",
      "BH": "Бахрейн",
      "BD": "Бангладеш",
      "BB": "Барбадос",
      "BY": "Беларус",
      "BE": "Белгия",
      "BZ": "Белиз",
      "BJ": "Бенин",
      "BM": "Бермуда",
      "BT": "Бутан",
      "BO": "Боливия",
      "BA": "Босна и Херцеговина",
      "BW": "Ботсвана",
      "BR": "Бразилия",
      "IO": "Британска индоокеанска територия",
      "VG": "Британски Вирджински острови",
      "BN": "Бруней",
      "BG": "България",
      "BF": "Буркина Фасо",
      "BI": "Бурунди",
      "KH": "Камбоджа",
      "CM": "Камерун",
      "CA": "Канада",
      "CV": "Кабо Верде",
      "BQ": "Карибски Нидерландия",
      "KY": "Кайманови острови",
      "CF": "Централноафриканска република",
      "TD": "Чад",
      "CL": "Чили",
      "CN": "Китай",
      "CO": "Колумбия",
      "KM": "Комори",
      "CG": "Конго - Бразавил",
      "CD": "Конго - Киншаса",
      "CK": "Острови Кук",
      "CR": "Коста Рика",
      "CI": "Кот д'Ивоар",
      "HR": "Хърватия",
      "CU": "Куба",
      "CW": "Кюрасао",
      "CY": "Кипър",
      "CZ": "Чехия",
      "DK": "Дания",
      "DJ": "Джибути",
      "DM": "Доминика",
      "DO": "Доминиканска република",
      "EC": "Еквадор",
      "EG": "Египет",
      "SV": "Ел Салвадор",
      "GQ": "Екваториална Гвинея",
      "ER": "Еритрея",
      "EE": "Естония",
      "SZ": "Есватини",
      "ET": "Етиопия",
      "FK": "Фолкландски острови",
      "FO": "Фарьорски острови",
      "FJ": "Фиджи",
      "FI": "Финландия",
      "FR": "Франция",
      "GF": "Френска Гвиана",
      "PF": "Френска Полинезия",
      "GA": "Габон",
      "GM": "Гамбия",
      "GE": "Грузия",
      "DE": "Германия",
      "GH": "Гана",
      "GI": "Гибралтар",
      "GR": "Гърция",
      "GL": "Гренландия",
      "GD": "Гренада",
      "GP": "Гваделупа",
      "GU": "Гуам",
      "GT": "Гватемала",
      "GN": "Гвинея",
      "GW": "Гвинея-Бисау",
      "GY": "Гаяна",
      "HT": "Хаити",
      "HN": "Хондурас",
      "HK": "Хонг Конг",
      "HU": "Унгария",
      "IS": "Исландия",
      "IN": "Индия",
      "ID": "Индонезия",
      "IR": "Иран",
      "IQ": "Ирак",
      "IE": "Ирландия",
      "IL": "Израел",
      "IT": "Италия",
      "JM": "Ямайка",
      "JP": "Япония",
      "JO": "Йордания",
      "KZ": "Казахстан",
      "KE": "Кения",
      "KI": "Кирибати",
      "XK": "Косово",
      "KW": "Кувейт",
      "KG": "Киргизстан",
      "LA": "Лаос",
      "LV": "Латвия",
      "LB": "Ливан",
      "LS": "Лесото",
      "LR": "Либерия",
      "LY": "Либия",
      "LI": "Лихтенщайн",
      "LT": "Литва",
      "LU": "Люксембург",
      "MO": "Макао",
      "MG": "Мадагаскар",
      "MW": "Малави",
      "MY": "Малайзия",
      "MV": "Малдиви",
      "ML": "Мали",
      "MT": "Малта",
      "MH": "Маршалови острови",
      "MQ": "Мартиника",
      "MR": "Мавритания",
      "MU": "Мавриций",
      "MX": "Мексико",
      "FM": "Микронезия",
      "MD": "Молдова",
      "MC": "Монако",
      "MN": "Монголия",
      "ME": "Черна гора",
      "MS": "Монсерат",
      "MA": "Мароко",
      "MZ": "Мозамбик",
      "MM": "Мианмар (Бирма)",
      "NA": "Намибия",
      "NR": "Науру",
      "NP": "Непал",
      "NL": "Нидерландия",
      "NC": "Нова Каледония",
      "NZ": "Нова Зеландия",
      "NI": "Никарагуа",
      "NE": "Нигер",
      "NG": "Нигерия",
      "NU": "Ниуе",
      "NF": "Норфолк",
      "KP": "Северна Корея",
      "MK": "Северна Македония",
      "MP": "Северни Мариански острови",
      "NO": "Норвегия",
      "OM": "Оман",
      "PK": "Пакистан",
      "PW": "Палау",
      "PS": "Палестина",
      "PA": "Панама",
      "PG": "Папуа Нова Гвинея",
      "PY": "Парагвай",
      "PE": "Перу",
      "PH": "Филипини",
      "PL": "Полша",
      "PT": "Португалия",
      "PR": "Пуерто Рико",
      "QA": "Катар",
      "RE": "Реюнион",
      "RO": "Румъния",
      "RU": "Русия",
      "RW": "Руанда",
      "WS": "Самоа",
      "SM": "Сан Марино",
      "ST": "Сао Томе и Принсипи",
      "SA": "Саудитска Арабия",
      "SN": "Сенегал",
      "RS": "Сърбия",
      "SC": "Сейшели",
      "SL": "Сиера Леоне",
      "SG": "Сингапур",
      "SX": "Синт Мартен",
      "SK": "Словакия",
      "SI": "Словения",
      "SB": "Соломонови острови",
      "SO": "Сомалия",
      "ZA": "Южна Африка",
      "KR": "Южна Корея",
      "SS": "Южен Судан",
      "ES": "Испания",
      "LK": "Шри Ланка",
      "BL": "Сен Бартелеми",
      "SH": "Света Елена",
      "KN": "Сейнт Китс и Невис",
      "LC": "Сейнт Лусия",
      "MF": "Сейнт Мартин",
      "PM": "Сейнт Пиер и Микелон",
      "VC": "Сейнт Винсент и Гренадини",
      "SD": "Судан",
      "SR": "Суринам",
      "SE": "Швеция",
      "CH": "Швейцария",
      "SY": "Сирия",
      "TW": "Тайван",
      "TJ": "Таджикистан",
      "TZ": "Танзания",
      "TH": "Тайланд",
      "TL": "Тимор-Лесте",
      "TG": "Того",
      "TK": "Токелау",
      "TO": "Тонга",
      "TT": "Тринидад и Тобаго",
      "TN": "Тунис",
      "TR": "Турция",
      "TM": "Туркменистан",
      "TC": "Търкс и Кайкос",
      "TV": "Тувалу",
      "VI": "Американски Вирджински острови",
      "UG": "Уганда",
      "UA": "Украйна",
      "AE": "Обединени арабски емирства",
      "GB": "Обединено кралство",
      "US": "Съединени щати",
      "UY": "Уругвай",
      "UZ": "Узбекистан",
      "VU": "Вануату",
      "VA": "Ватикан",
      "VE": "Венесуела",
      "VN": "Виетнам",
      "WF": "Уолис и Футуна",
      "YE": "Йемен",
      "ZM": "Замбия",
      "ZW": "Зимбабве"
    }
  },
  "validation": {
    "accepted": ":attribute трябва да бъде прието.",
    "active_url": ":attribute не е валиден URL адрес.",
    "after": ":attribute трябва да бъде дата след :date.",
    "after_or_equal": ":attribute трябва да бъде дата след или равна на :date.",
    "alpha": ":attribute трябва да съдържа само букви.",
    "alpha_dash": ":attribute трябва да съдържа само букви, числа, тирета и подчертавания.",
    "alpha_num": ":attribute трябва да съдържа само букви и числа.",
    "array": ":attribute трябва да бъде масив.",
    "before": ":attribute трябва да бъде дата преди :date.",
    "before_or_equal": ":attribute трябва да бъде дата преди или равна на :date.",
    "between": {
      "numeric": ":attribute трябва да бъде между :min и :max.",
      "file": ":attribute трябва да бъде между :min и :max килобайта.",
      "string": ":attribute трябва да бъде между :min и :max символа.",
      "array": ":attribute трябва да има между :min и :max елемента."
    },
    "boolean": "Полето :attribute трябва да бъде вярно или невярно.",
    "captcha": "Моля, потвърдете, че не сте робот.",
    "completed": "Моля, попълнете валиден телефонен номер.",
    "confirmed": "Потвърждението за :attribute не съвпада.",
    "date": ":attribute не е валидна дата.",
    "date_format": ":attribute не съвпада с формата :format.",
    "date_equals": ":attribute трябва да бъде дата, равна на :date.",
    "different": ":attribute и :other трябва да бъдат различни.",
    "digits": ":attribute трябва да бъде :digits цифри.",
    "digits_between": ":attribute трябва да бъде между :min и :max цифри.",
    "dimensions": ":attribute има невалидни размери за изображение.",
    "distinct": "Полето :attribute има повтаряща се стойност.",
    "email": ":attribute трябва да бъде валиден имейл адрес.",
    "exists": "Избраният :attribute е невалиден.",
    "file": ":attribute трябва да бъде файл.",
    "filled": "Полето :attribute трябва да има стойност.",
    "gt": {
      "numeric": ":attribute трябва да бъде по-голямо от :value.",
      "file": ":attribute трябва да бъде по-голямо от :value килобайта.",
      "string": ":attribute трябва да бъде по-голямо от :value символа.",
      "array": ":attribute трябва да има повече от :value елемента."
    },
    "gte": {
      "numeric": ":attribute трябва да бъде по-голямо или равно на :value.",
      "file": ":attribute трябва да бъде по-голямо или равно на :value килобайта.",
      "string": ":attribute трябва да бъде по-голямо или равно на :value символа.",
      "array": ":attribute трябва да има :value елемента или повече."
    },
    "image": ":attribute трябва да бъде изображение.",
    "in": "Избраният :attribute е невалиден.",
    "in_array": "Полето :attribute не съществува в :other.",
    "integer": ":attribute трябва да бъде цяло число.",
    "ip": ":attribute трябва да бъде валиден IP адрес.",
    "ipv4": ":attribute трябва да бъде валиден IPv4 адрес.",
    "ipv6": ":attribute трябва да бъде валиден IPv6 адрес.",
    "json": ":attribute трябва да бъде валиден JSON низ.",
    "lt": {
      "numeric": ":attribute трябва да бъде по-малко от :value.",
      "file": ":attribute трябва да бъде по-малко от :value килобайта.",
      "string": ":attribute трябва да бъде по-малко от :value символа.",
      "array": ":attribute трябва да има по-малко от :value елемента."
    },
    "lte": {
      "numeric": ":attribute трябва да бъде по-малко или равно на :value.",
      "file": ":attribute трябва да бъде по-малко или равно на :value килобайта.",
      "string": ":attribute трябва да бъде по-малко или равно на :value символа.",
      "array": ":attribute не трябва да има повече от :value елемента."
    },
    "max": {
      "numeric": ":attribute не може да бъде по-голямо от :max.",
      "file": ":attribute не може да бъде по-голямо от :max килобайта.",
      "string": ":attribute не може да бъде по-голямо от :max символа.",
      "array": ":attribute не може да има повече от :max елемента."
    },
    "mimes": ":attribute трябва да бъде файл от тип: :values.",
    "mimetypes": ":attribute трябва да бъде файл от тип: :values.",
    "min": {
      "numeric": ":attribute трябва да бъде поне :min.",
      "file": ":attribute трябва да бъде поне :min килобайта.",
      "string": ":attribute трябва да бъде поне :min символа.",
      "array": ":attribute трябва да има поне :min елемента."
    },
    "not_in": "Избраният :attribute е невалиден.",
    "not_regex": "Форматът на :attribute е невалиден.",
    "numeric": ":attribute трябва да бъде число.",
    "present": "Полето :attribute трябва да бъде налично.",
    "regex": "Форматът на :attribute е невалиден.",
    "required": "Полето :attribute е задължително.",
    "required_if": "Полето :attribute е задължително, когато :other е :value.",
    "required_unless": "Полето :attribute е задължително, освен ако :other не е в :values.",
    "required_with": "Полето :attribute е задължително, когато :values е налично.",
    "required_with_all": "Полето :attribute е задължително, когато :values са налични.",
    "required_without": "Полето :attribute е задължително, когато :values не е налично.",
    "required_without_all": "Полето :attribute е задължително, когато нито един от :values не е наличен.",
    "same": ":attribute и :other трябва да съвпадат.",
    "size": {
      "numeric": ":attribute трябва да бъде :size.",
      "file": ":attribute трябва да бъде :size килобайта.",
      "string": ":attribute трябва да бъде :size символа.",
      "array": ":attribute трябва да съдържа :size елемента."
    },
    "string": ":attribute трябва да бъде низ.",
    "timezone": ":attribute трябва да бъде валидна зона.",
    "unique": ":attribute вече е заето.",
    "uploaded": ":attribute не бе успешно качен.",
    "url": "Форматът на :attribute е невалиден.",
    "uuid": ":attribute трябва да бъде валиден UUID.",
    "remote": "Полето :attribute е невалидно."
  }
}