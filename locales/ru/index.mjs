export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ Добавлять",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "Файл",
        "dndTitle": "Загрузить файл",
        "dndDescription": "Перетащите файл или нажмите здесь, чтобы загрузить",
        "removeConfirm": "При удалении файла он будет окончательно удален. Вы уверены, что продолжите?",
        "select": "Выберите файл",
        "upload": "Закачать"
      },
      "multifile": {
        "uploadButton": "Загрузка файлов",
        "dndTitle": "Загрузка файлов",
        "dndDescription": "Перетащите файлы или нажмите здесь, чтобы загрузить"
      },
      "gallery": {
        "uploadButton": "Загрузка изображений",
        "dndTitle": "Загрузка изображений",
        "dndDescription": "Перетащите изображения или нажмите здесь, чтобы загрузить"
      }
    },
    "steps": {
      "finish": "Заканчивать",
      "next": "Следующий",
      "previous": "Предыдущий"
    },
    "editor": {
      "acceptedMimesError": "Принятые мимы: :mimes",
      "acceptedExtensionsError": "Принятые исключения: :extensions"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": [
          "Вс",
          "Пн",
          "Вт",
          "Ср",
          "Чт",
          "Пт",
          "Сб"
        ],
        "longhand": [
          "Воскресенье",
          "Понедельник",
          "Вторник",
          "Среда",
          "Четверг",
          "Пятница",
          "Суббота"
        ]
      },
      "months": {
        "shorthand": [
          "Янв",
          "Фев",
          "Март",
          "Апр",
          "Май",
          "Июнь",
          "Июль",
          "Авг",
          "Сен",
          "Окт",
          "Ноя",
          "Дек"
        ],
        "longhand": [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь"
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
        return "";
      },
      "rangeSeparator": " — ",
      "weekAbbreviation": "Нед.",
      "scrollTitle": "Прокрутите для увеличения",
      "toggleTitle": "Нажмите для переключения",
      "amPM": [
        "ДП",
        "ПП"
      ],
      "yearAriaLabel": "Год",
      "monthAriaLabel": "Month",
      "hourAriaLabel": "Hour",
      "minuteAriaLabel": "Minute"
    },
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
    },
    "multiselect": {
      "multipleLabelOne": "Выбран 1 вариант",
      "multipleLabelMore": ":options выбранные параметры",
      "noResults": "Параметры не найдены",
      "noOptions": "Список пуст"
    },
    "defaultMessage": "Недопустимое поле",
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
    "accepted": "Вы должны принять :attribute.",
    "active_url": "Значение поля :attribute не является действительным URL.",
    "after": "Значение поля :attribute должно быть датой после :date.",
    "after_or_equal": "Значение поля :attribute должно быть датой после или равной :date.",
    "alpha": "Значение поля :attribute может содержать только буквы.",
    "alpha_dash": "Значение поля :attribute может содержать только буквы, цифры, дефис и нижнее подчеркивание.",
    "alpha_num": "Значение поля :attribute может содержать только буквы и цифры.",
    "array": "Значение поля :attribute должно быть массивом.",
    "before": "Значение поля :attribute должно быть датой до :date.",
    "before_or_equal": "Значение поля :attribute должно быть датой до или равной :date.",
    "between": {
      "numeric": "Значение поля :attribute должно быть между :min и :max.",
      "file": "Размер файла в поле :attribute должен быть между :min и :max Килобайт(а).",
      "string": "Количество символов в поле :attribute должно быть между :min и :max.",
      "array": "Количество элементов в поле :attribute должно быть между :min и :max."
    },
    "boolean": "Значение поля :attribute должно быть логического типа.",
    "confirmed": "Значение поля :attribute не совпадает с подтверждаемым.",
    "date": "Значение поля :attribute не является датой.",
    "date_format": "Значение поля :attribute не соответствует формату даты :format.",
    "date_equals": "Значение поля :attribute должно быть датой равной :date.",
    "different": "Значения полей :attribute и :other должны различаться.",
    "digits": "Длина значения цифрового поля :attribute должна быть :digits.",
    "digits_between": "Длина значения цифрового поля :attribute должна быть между :min и :max.",
    "dimensions": "Изображение в поле :attribute имеет недопустимые размеры.",
    "distinct": "Значения поля :attribute не должны повторяться.",
    "email": "Значение поля :attribute должно быть действительным электронным адресом.",
    "exists": "Выбранное значение для :attribute некорректно.",
    "file": "В поле :attribute должен быть указан файл.",
    "filled": "Поле :attribute обязательно для заполнения.",
    "gt": {
      "numeric": "Значение поля :attribute должно быть больше :value.",
      "file": "Размер файла в поле :attribute должен быть больше :value Килобайт(а).",
      "string": "Количество символов в поле :attribute должно быть больше :value.",
      "array": "Количество элементов в поле :attribute должно быть больше :value."
    },
    "gte": {
      "numeric": "Значение поля :attribute должно быть :value или больше.",
      "file": "Размер файла в поле :attribute должен быть :value Килобайт(а) или больше.",
      "string": "Количество символов в поле :attribute должно быть :value или больше.",
      "array": "Количество элементов в поле :attribute должно быть :value или больше."
    },
    "image": "Файл в поле :attribute должен быть изображением.",
    "in": "Выбранное значение для :attribute некорректно.",
    "in_array": "Значение поля :attribute не существует в :other.",
    "integer": "Значение поля :attribute должно быть целым числом.",
    "ip": "Значение поля :attribute должно быть действительным IP-адресом.",
    "ipv4": "Значение поля :attribute должно быть действительным IPv4-адресом.",
    "ipv6": "Значение поля :attribute должно быть действительным IPv6-адресом.",
    "json": "Значение поля :attribute должно быть JSON строкой.",
    "lt": {
      "numeric": "Значение поля :attribute должно быть меньше :value.",
      "file": "Размер файла в поле :attribute должен быть меньше :value Килобайт(а).",
      "string": "Количество символов в поле :attribute должно быть меньше :value.",
      "array": "Количество элементов в поле :attribute должно быть меньше :value."
    },
    "lte": {
      "numeric": "Значение поля :attribute должно быть :value или меньше.",
      "file": "Размер файла в поле :attribute должен быть :value Килобайт(а) или меньше.",
      "string": "Количество символов в поле :attribute должно быть :value или меньше.",
      "array": "Количество элементов в поле :attribute должно быть :value или меньше."
    },
    "max": {
      "numeric": "Значение поля :attribute не может быть больше :max.",
      "file": "Размер файла в поле :attribute не может быть больше :max Килобайт(а).",
      "string": "Количество символов в поле :attribute не может превышать :max.",
      "array": "Количество элементов в поле :attribute не может превышать :max."
    },
    "mimes": "Файл в поле :attribute должен быть одного из следующих типов: :values.",
    "mimetypes": "Файл в поле :attribute должен быть одного из следующих типов: :values.",
    "min": {
      "numeric": "Значение поля :attribute должно быть не меньше :min.",
      "file": "Размер файла в поле :attribute должен быть не меньше :min Килобайт(а).",
      "string": "Количество символов в поле :attribute должно быть не меньше :min.",
      "array": "Количество элементов в поле :attribute должно быть не меньше :min."
    },
    "not_in": "Выбранное значение для :attribute некорректно.",
    "not_regex": "Значение поля :attribute некорректно.",
    "numeric": "Значение поля :attribute должно быть числом.",
    "present": "The :attribute field must be present.",
    "regex": "Значение поля :attribute некорректно.",
    "required": "Поле :attribute обязательно для заполнения.",
    "required_if": "The :attribute field is required when :other is :value.",
    "required_unless": "The :attribute field is required unless :other is in :values.",
    "required_with": "The :attribute field is required when :values is present.",
    "required_with_all": "The :attribute field is required when :values are present.",
    "required_without": "The :attribute field is required when :values is not present.",
    "required_without_all": "The :attribute field is required when none of :values are present.",
    "same": "Значения полей :attribute и :other должны совпадать.",
    "size": {
      "numeric": "Значение поля :attribute должно быть равным :size.",
      "file": "Размер файла в поле :attribute должен быть равен :size Килобайт(а).",
      "string": "Количество символов в поле :attribute должно быть равным :size.",
      "array": "Количество элементов в поле :attribute должно быть равным :size."
    },
    "string": "Значение поля :attribute должно быть строкой.",
    "timezone": "Значение поля :attribute должно быть действительным часовым поясом.",
    "unique": "Такое значение поля :attribute уже существует.",
    "uploaded": "The :attribute failed to upload.",
    "url": "Значение поля :attribute имеет ошибочный формат URL.",
    "uuid": "Значение поля :attribute должно быть корректным UUID.",
    "remote": "The :attribute field is invalid."
  }
}