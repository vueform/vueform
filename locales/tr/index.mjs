export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ Ekle",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "Dosya",
        "dndTitle": "Dosya yükleme",
        "dndDescription": "Dosyayı bırakın veya yüklemek için buraya tıklayın.",
        "removeConfirm": "Dosyayı kaldırarak kalıcı olarak silinecektir. Devam edeceğinizden emin misiniz?",
        "select": "Dosya Seç",
        "upload": "Yüklemek"
      },
      "multifile": {
        "uploadButton": "Dosyaları yükle",
        "dndTitle": "Dosyaları yükle",
        "dndDescription": "Dosyaları bırakın veya yüklemek için buraya tıklayın"
      },
      "gallery": {
        "uploadButton": "Resim yükle",
        "dndTitle": "Resim yükle",
        "dndDescription": "Resimleri bırakın veya yüklemek için buraya tıklayın"
      }
    },
    "steps": {
      "finish": "Bitiş",
      "next": "Sonraki",
      "previous": "Öncesi"
    },
    "editor": {
      "acceptedMimesError": "Kabul edilen mimler: :mimes",
      "acceptedExtensionsError": "Kabul edilen uzantılar şunlardır: :extensions"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": [
          "Paz",
          "Pzt",
          "Sal",
          "Çar",
          "Per",
          "Cum",
          "Cmt"
        ],
        "longhand": [
          "Pazar",
          "Pazartesi",
          "Salı",
          "Çarşamba",
          "Perşembe",
          "Cuma",
          "Cumartesi"
        ]
      },
      "months": {
        "shorthand": [
          "Oca",
          "Şub",
          "Mar",
          "Nis",
          "May",
          "Haz",
          "Tem",
          "Ağu",
          "Eyl",
          "Eki",
          "Kas",
          "Ara"
        ],
        "longhand": [
          "Ocak",
          "Şubat",
          "Mart",
          "Nisan",
          "Mayıs",
          "Haziran",
          "Temmuz",
          "Ağustos",
          "Eylül",
          "Ekim",
          "Kasım",
          "Aralık"
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
      "weekAbbreviation": "Hf",
      "scrollTitle": "Artırmak için kaydırın",
      "toggleTitle": "Aç/Kapa",
      "amPM": [
        "ÖÖ",
        "ÖS"
      ],
      "yearAriaLabel": "Year",
      "monthAriaLabel": "Month",
      "hourAriaLabel": "Hour",
      "minuteAriaLabel": "Minute"
    },
    "dateFormats": {
      "datetimeSeconds24": "DD.MM.YYYY HH:mm:ss",
      "datetimeSeconds12": "DD.MM.YYYY a hh:mm:ss",
      "datetime24": "DD.MM.YYYY HH:mm",
      "datetime12": "DD.MM.YYYY a hh:mm",
      "timeSeconds24": "HH:mm:ss",
      "timeSeconds12": "a hh:mm:ss",
      "time24": "HH:mm",
      "time12": "a hh:mm",
      "date": "DD.MM.YYYY"
    },
    "multiselect": {
      "multipleLabelOne": "1 seçenek seçildi",
      "multipleLabelMore": ":options seçenekleri seçildi",
      "noResults": "Seçenek bulunamadı",
      "noOptions": "Liste boş"
    },
    "defaultMessage": "Geçersiz alan",
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
    "accepted": ":attribute kabul edilmelidir.",
    "active_url": ":attribute geçerli bir URL olmalıdır.",
    "after": ":attribute mutlaka :date tarihinden sonra olmalıdır.",
    "after_or_equal": ":attribute mutlaka :date tarihinden sonra veya aynı tarihte olmalıdır.",
    "alpha": ":attribute sadece harflerden oluşmalıdır.",
    "alpha_dash": ":attribute sadece harflerden, rakamlardan ve tirelerden oluşmalıdır.",
    "alpha_num": ":attribute sadece harflerden ve rakamlardan oluşmalıdır.",
    "array": ":attribute mutlaka bir dizi olmalıdır.",
    "before": ":attribute mutlaka :date tarihinden önce olmalıdır.",
    "before_or_equal": ":attribute mutlaka :date tarihinden önce veya aynı tarihte olmalıdır.",
    "between": {
      "numeric": ":attribute mutlaka :min - :max arasında olmalıdır.",
      "file": ":attribute mutlaka :min - :max kilobayt arasında olmalıdır.",
      "string": ":attribute mutlaka :min - :max karakter arasında olmalıdır.",
      "array": ":attribute mutlaka :min - :max arasında öge içermelidir."
    },
    "boolean": ":attribute sadece doğru veya yanlış olmalıdır.",
    "confirmed": ":attribute tekrarı eşleşmiyor.",
    "date": ":attribute geçerli bir tarih değil.",
    "date_format": ":attribute mutlaka :format biçiminde olmalıdır.",
    "date_equals": ":attribute mutlaka :date ile aynı tarihte olmalıdır.",
    "different": ":attribute ile :other mutlaka birbirinden farklı olmalıdır.",
    "digits": ":attribute mutlaka :digits basamaklı olmalıdır.",
    "digits_between": ":attribute mutlaka en az :min, en fazla :max basamaklı olmalıdır.",
    "dimensions": ":attribute geçersiz resim boyutlarına sahip.",
    "distinct": ":attribute alanı yinelenen bir değere sahip.",
    "email": ":attribute mutlaka geçerli bir e-posta adresi olmalıdır.",
    "exists": "Seçili :attribute geçersiz.",
    "file": ":attribute mutlaka bir dosya olmalıdır.",
    "filled": ":attribute mutlaka doldurulmalıdır.",
    "gt": {
      "numeric": ":attribute mutlaka :value sayısından büyük olmalıdır.",
      "file": ":attribute mutlaka :value kilobayttan büyük olmalıdır.",
      "string": ":attribute mutlaka :value karakterden uzun olmalıdır.",
      "array": ":attribute mutlaka :value sayısından daha fazla öge içermelidir."
    },
    "gte": {
      "numeric": ":attribute mutlaka :value sayısından büyük veya eşit olmalıdır.",
      "file": ":attribute mutlaka :value kilobayttan büyük veya eşit olmalıdır.",
      "string": ":attribute mutlaka :value karakterden uzun veya eşit olmalıdır.",
      "array": ":attribute mutlaka :value veya daha fazla öge içermelidir."
    },
    "image": ":attribute mutlaka bir resim olmalıdır.",
    "in": "Seçili :attribute geçersiz.",
    "in_array": ":attribute :other içinde mevcut değil.",
    "integer": ":attribute mutlaka bir tam sayı olmalıdır.",
    "ip": ":attribute mutlaka geçerli bir IP adresi olmalıdır.",
    "ipv4": ":attribute mutlaka geçerli bir IPv4 adresi olmalıdır.",
    "ipv6": ":attribute mutlaka geçerli bir IPv6 adresi olmalıdır.",
    "json": ":attribute mutlaka geçerli bir JSON içeriği olmalıdır.",
    "lt": {
      "numeric": ":attribute mutlaka :value sayısından küçük olmalıdır.",
      "file": ":attribute mutlaka :value kilobayttan küçük olmalıdır.",
      "string": ":attribute mutlaka :value karakterden kısa olmalıdır.",
      "array": ":attribute mutlaka :value sayısından daha az öge içermelidir."
    },
    "lte": {
      "numeric": ":attribute mutlaka :value sayısından küçük veya eşit olmalıdır.",
      "file": ":attribute mutlaka :value kilobayttan küçük veya eşit olmalıdır.",
      "string": ":attribute mutlaka :value karakterden kısa veya eşit olmalıdır.",
      "array": ":attribute mutlaka :value veya daha az öge içermelidir."
    },
    "max": {
      "numeric": ":attribute en fazla :max olabilir.",
      "file": ":attribute en fazla :max kilobayt olabilir.",
      "string": ":attribute en fazla :max karakter olabilir.",
      "array": ":attribute en fazla :max öge içerebilir."
    },
    "mimes": ":attribute mutlaka :values biçiminde bir dosya olmalıdır.",
    "mimetypes": ":attribute mutlaka :values biçiminde bir dosya olmalıdır.",
    "min": {
      "numeric": ":attribute en az :min olabilir.",
      "file": ":attribute en az :min kilobayt olabilir.",
      "string": ":attribute en az :min karakter olabilir.",
      "array": ":attribute en az :min öge içerebilir."
    },
    "not_in": "Seçili :attribute geçersiz.",
    "not_regex": ":attribute biçimi geçersiz.",
    "numeric": ":attribute mutlaka bir sayı olmalıdır.",
    "present": "The :attribute field must be present.",
    "regex": ":attribute biçimi geçersiz.",
    "required": ":attribute mutlaka gereklidir.",
    "required_if": "The :attribute field is required when :other is :value.",
    "required_unless": "The :attribute field is required unless :other is in :values.",
    "required_with": "The :attribute field is required when :values is present.",
    "required_with_all": "The :attribute field is required when :values are present.",
    "required_without": "The :attribute field is required when :values is not present.",
    "required_without_all": "The :attribute field is required when none of :values are present.",
    "same": ":attribute ile :other aynı olmalıdır.",
    "size": {
      "numeric": ":attribute mutlaka :size olmalıdır.",
      "file": ":attribute mutlaka :size kilobayt olmalıdır.",
      "string": ":attribute mutlaka :size karakterli olmalıdır.",
      "array": ":attribute mutlaka :size ögeye sahip olmalıdır."
    },
    "string": ":attribute mutlaka bir metin olmalıdır.",
    "timezone": ":attribute mutlaka geçerli bir saat dilimi olmalıdır.",
    "unique": ":attribute zaten alınmış.",
    "uploaded": "The :attribute failed to upload.",
    "url": ":attribute biçimi geçersiz.",
    "uuid": ":attribute mutlaka geçerli bir UUID olmalıdır.",
    "remote": "The :attribute field is invalid."
  }
}