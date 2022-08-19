export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ Додати",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "Файл",
        "dndTitle": "Завантажити файл",
        "dndDescription": "Перемістіть файл або натисніть тут, щоби завантажити",
        "removeConfirm": "Файл буде видалено назавжди. Ви впевнені, що хочете продовжити?",
        "select": "Обрати файл",
        "upload": "Завантажити"
      },
      "multifile": {
        "uploadButton": "Завантажити файли",
        "dndTitle": "Завантажити файли",
        "dndDescription": "Перемістіть файли або натисніть тут, щоби завантажити"
      },
      "gallery": {
        "uploadButton": "Завантажити зображення",
        "dndTitle": "Завантажити зображення",
        "dndDescription": "Перемістіть зображення або натисніть тут, щоби завантажити"
      },
    },
    "steps": {
      "finish": "Завершити",
      "next": "Далі",
      "previous": "Попередній"
    },
    "editor": {
      "acceptedMimesError": "Допустимі MIME: :mimes",
      "acceptedExtensionsError": "Допустимі розширення: :extensions"
    },
    "multiselect": {
      "multipleLabelOne": "Вибрано 1 варіант",
      "multipleLabelMore": "Вибрано :options варіанти",
      "noResults": "Не знайдено жодних варіантів",
      "noOptions": "Перелік порожній"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        "longhand": [
          "Неділя",
          "Понеділок",
          "Вівторок",
          "Середа",
          "Четвер",
          "П'ятниця",
          "Субота",
        ],
      },
      "months": {
        "shorthand": [
          "Січ",
          "Лют",
          "Бер",
          "Кві",
          "Тра",
          "Чер",
          "Лип",
          "Сер",
          "Вер",
          "Жов",
          "Лис",
          "Гру",
        ],
        "longhand": [
          "Січень",
          "Лютий",
          "Березень",
          "Квітень",
          "Травень",
          "Червень",
          "Липень",
          "Серпень",
          "Вересень",
          "Жовтень",
          "Листопад",
          "Грудень",
        ],
      },
      "firstDayOfWeek": 1,
    },
    "defaultMessage": "Недійсне поле",
    "dateFormats": {
      "datetimeSeconds24": "DD.MM.YYYY, HH:mm:ss",
      "datetimeSeconds12": "DD.MM.YYYY, hh:mm:ss a",
      "datetime24": "DD.MM.YYYY, HH:mm",
      "datetime12": "DD.MM.YYYY, hh:mm a",
      "timeSeconds24": "HH:mm:ss",
      "timeSeconds12": "hh:mm:ss a",
      "time24": "HH:mm",
      "time12": "hh:mm a",
      "date": "DD.MM.YYYY"
    }
  },
  "validation": {
    "accepted": "Ви повинні прийняти :attribute.",
    "active_url": "Поле :attribute не є правильним URL.",
    "after": "Поле :attribute має містити дату не раніше :date.",
    "after_or_equal": "Поле :attribute має містити дату не раніше, або дорівнюватися :date.",
    "alpha": "Поле :attribute має містити лише літери.",
    "alpha_dash": "Поле :attribute має містити лише літери, цифри, тире та підкреслення.",
    "alpha_num": "Поле :attribute має містити лише літери та цифри.",
    "array": "Поле :attribute має бути масивом.",
    "before": "Поле :attribute має містити дату не пізніше :date.",
    "before_or_equal": "Поле :attribute має містити дату не пізніше, або дорівнюватися :date.",
    "between": {
      "numeric": "Поле :attribute має бути між :min та :max.",
      "file": "Розмір файлу у полі :attribute має бути не менше :min та не більше :max кілобайт.",
      "string": "Текст у полі :attribute має бути не менше :min та не більше :max символів.",
      "array": "Поле :attribute має містити від :min до :max елементів."
    },
    "boolean": "Поле :attribute повинне містити логічний тип.",
    "confirmed": "Поле :attribute не збігається з підтвердженням.",
    "date": "Поле :attribute не є датою.",
    "date_format": "Поле :attribute не відповідає формату :format.",
    "date_equals": "Поле :attribute має бути датою рівною :date.",
    "different": "Поля :attribute та :other повинні бути різними.",
    "digits": "Довжина цифрового поля :attribute повинна дорівнювати :digits.",
    "digits_between": "Довжина цифрового поля :attribute повинна бути від :min до :max.",
    "dimensions": "Поле :attribute містить неприпустимі розміри зображення.",
    "distinct": "Поле :attribute містить значення, яке дублюється.",
    "email": "Поле :attribute повинне містити коректну електронну адресу.",
    "exists": "Вибране для :attribute значення не коректне.",
    "file": "Поле :attribute має містити файл.",
    "filled": "Поле :attribute є обовязковим для заповнення.",
    "gt": {
      "numeric": "Поле :attribute має бути більше ніж :value.",
      "file": "Поле :attribute має бути більше ніж :value кілобайт.",
      "string": "Поле :attribute має бути більше ніж :value символів.",
      "array": "Поле :attribute має містити більше ніж :value елементів."
    },
    "gte": {
      "numeric": "Поле :attribute має дорівнювати чи бути більше ніж :value.",
      "file": "Поле :attribute має дорівнювати чи бути більше ніж :value кілобайт.",
      "string": "Поле :attribute має дорівнювати чи бути більше ніж :value символів.",
      "array": "Поле :attribute має містити :value чи більше елементів."
    },
    "image": "Поле :attribute має містити зображення.",
    "in": "Вибране для :attribute значення не коректне.",
    "in_array": "Значення поля :attribute не міститься в :other.",
    "integer": "Поле :attribute має містити ціле число.",
    "ip": "Поле :attribute має містити IP адресу.",
    "ipv4": "Поле :attribute має містити IPv4 адресу.",
    "ipv6": "Поле :attribute має містити IPv6 адресу.",
    "json": "Дані поля :attribute мають бути у форматі JSON.",
    "lt": {
      "numeric": "Поле :attribute має бути менше ніж :value.",
      "file": "Поле :attribute має бути менше ніж :value кілобайт.",
      "string": "Поле :attribute має бути менше ніж :value символів.",
      "array": "Поле :attribute має містити менше ніж :value items."
    },
    "lte": {
      "numeric": "Поле :attribute має дорівнювати чи бути менше ніж :value.",
      "file": "Поле :attribute має дорівнювати чи бути менше ніж :value кілобайт.",
      "string": "Поле :attribute має дорівнювати чи бути менше ніж :value символів.",
      "array": "Поле :attribute має містити не більше ніж :value елементів."
    },
    "max": {
      "numeric": "Поле :attribute має бути не більше :max.",
      "file": "Файл в полі :attribute має бути не більше :max кілобайт.",
      "string": "Текст в полі :attribute повинен мати довжину не більшу за :max.",
      "array": "Поле :attribute повинне містити не більше :max елементів."
    },
    "mimes": "Поле :attribute повинне містити файл одного з типів: :values.",
    "mimetypes": "Поле :attribute повинне містити файл одного з типів: :values.",
    "min": {
      "numeric": "Поле :attribute повинне бути не менше :min.",
      "file": "Розмір файлу у полі :attribute має бути не меншим :min кілобайт.",
      "string": "Текст у полі :attribute повинен містити не менше :min символів.",
      "array": "Поле :attribute повинне містити не менше :min елементів."
    },
    "not_in": "Вибране для :attribute значення не коректне.",
    "not_regex": "Формат поля :attribute не вірний.",
    "numeric": "Поле :attribute повинно містити число.",
    "regex": "Поле :attribute має хибний формат.",
    "required": "Поле :attribute є обовязковим для заповнення.",
    "same": "Поля :attribute та :other мають збігатися.",
    "size": {
      "numeric": "Поле :attribute має бути довжини :size.",
      "file": "Файл у полі :attribute має бути розміром :size кілобайт.",
      "string": "Текст у полі :attribute повинен містити :size символів.",
      "array": "Поле :attribute повинне містити :size елементів."
    },
    "string": "Поле :attribute повинне містити текст.",
    "timezone": "Поле :attribute повинне містити коректну часову зону.",
    "unique": "Вказане значення поля :attribute вже існує.",
    "url": "Формат поля :attribute хибний.",
    "uuid": "Поле :attribute має бути коректним UUID ідентифікатором."
  }
}