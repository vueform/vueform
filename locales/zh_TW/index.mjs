export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ 增加文件",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "文件",
        "dndTitle": "上傳文件",
        "dndDescription": "拖曳文件或點擊此處上傳",
        "removeConfirm": "透過移除文件，它將被永久刪除。 你確定要繼續嗎？",
        "select": "選擇文件",
        "upload": "上傳"
      },
      "multifile": {
        "uploadButton": "上傳文件",
        "dndTitle": "上傳文件",
        "dndDescription": "拖曳文件或點擊此處上傳"
      },
      "gallery": {
        "uploadButton": " 上傳圖像",
        "dndTitle": " 上傳圖像",
        "dndDescription": "拖曳圖像或點擊此處上傳"
      }
    },
    "steps": {
      "finish": "完成",
      "next": "下一個",
      "previous": "上一個"
    },
    "editor": {
      "acceptedMimesError": "接受的啞劇是： :mimes",
      "acceptedExtensionsError": "接受的範圍是：:extensions"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": [
          "週日",
          "週一",
          "週二",
          "週三",
          "週四",
          "週五",
          "週六"
        ],
        "longhand": [
          "星期日",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六"
        ]
      },
      "months": {
        "shorthand": [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ],
        "longhand": [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
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
        return '';
      },
      "rangeSeparator": " 至 ",
      "weekAbbreviation": "週",
      "scrollTitle": "滾動切換",
      "toggleTitle": "點擊切換 12/24 小時時制",
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
      "datetimeSeconds24": "DD/MM/YYYY, HH:mm:ss",
      "datetimeSeconds12": "DD/MM/YYYY, hh:mm:ss a",
      "datetime24": "DD/MM/YYYY, HH:mm",
      "datetime12": "DD/MM/YYYY, hh:mm a",
      "timeSeconds24": "HH:mm:ss",
      "timeSeconds12": "hh:mm:ss a",
      "time24": "HH:mm",
      "time12": "hh:mm a",
      "date": "DD/MM/YYYY"
    },
    "multiselect": {
      "multipleLabelOne": " 已選擇 1 個選項",
      "multipleLabelMore": ":options 選項已選擇",
      "noResults": "未找到選項",
      "noOptions": "列表為空"
    },
    "defaultMessage": "無效欄位",
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
    "accepted": "必須接受 :attribute。",
    "active_url": ":attribute 並非一個有效的網址。",
    "after": ":attribute 必須要晚於 :date。",
    "after_or_equal": ":attribute 必須要等於 :date 或更晚。",
    "alpha": ":attribute 只能以字母組成。",
    "alpha_dash": ":attribute 只能以字母、數字、連接線(-)及底線(_)組成。",
    "alpha_num": ":attribute 只能以字母及數字組成。",
    "array": ":attribute 必須為陣列。",
    "before": ":attribute 必須要早於 :date。",
    "before_or_equal": ":attribute 必須要等於 :date 或更早。",
    "between": {
      "numeric": ":attribute 必須介乎 :min 至 :max 之間。",
      "file": ":attribute 必須介乎 :min 至 :max KB 之間。",
      "string": ":attribute 必須介乎 :min 至 :max 個字符之間。",
      "array": ":attribute: 必須有 :min 至 :max 個項目。"
    },
    "boolean": ":attribute 必須是布爾值。",
    "captcha": "Please verify that you are not a robot.",
    "confirmed": ":attribute 確認欄位的輸入並不相符。",
    "date": ":attribute 並非一個有效的日期。",
    "date_format": ":attribute 與 :format 格式不相符。",
    "date_equals": ":attribute 必須等於 :date。",
    "different": ":attribute 與 :other 必須不同。",
    "digits": ":attribute 必須是 :digits 位數字。",
    "digits_between": ":attribute 必須介乎 :min 至 :max 位數字。",
    "dimensions": ":attribute 圖片尺寸不正確。",
    "distinct": ":attribute 已經存在。",
    "email": ":attribute 必須是有效的電郵地址。",
    "exists": ":attribute 不存在。",
    "file": ":attribute 必須是文件。",
    "filled": ":attribute 不能留空。",
    "gt": {
      "numeric": ":attribute 必須大於 :value。",
      "file": ":attribute 必須大於 :value KB。",
      "string": ":attribute 必須多於 :value 個字符。",
      "array": ":attribute 必須多於 :value 個項目。"
    },
    "gte": {
      "numeric": ":attribute 必須大於或等於 :value。",
      "file": ":attribute 必須大於或等於 :value KB。",
      "string": ":attribute 必須多於或等於 :value 個字符。",
      "array": ":attribute 必須多於或等於 :value 個項目。"
    },
    "image": ":attribute 必須是一張圖片。",
    "in": "所揀選的 :attribute 選項無效。",
    "in_array": ":attribute 沒有在 :other 中。",
    "integer": ":attribute 必須是一個整數。",
    "ip": ":attribute 必須是一個有效的 IP 地址。",
    "ipv4": ":attribute 必須是一個有效的 IPv4 地址。",
    "ipv6": ":attribute 必須是一個有效的 IPv6 地址。",
    "json": ":attribute 必須是正確的 JSON 格式。",
    "lt": {
      "numeric": ":attribute 必須小於 :value。",
      "file": ":attribute 必須小於 :value KB。",
      "string": ":attribute 必須少於 :value 個字符。",
      "array": ":attribute 必須少於 :value 個項目。"
    },
    "lte": {
      "numeric": ":attribute 必須小於或等於 :value。",
      "file": ":attribute 必須小於或等於 :value KB。",
      "string": ":attribute 必須少於或等於 :value 個字符。",
      "array": ":attribute 必須少於或等於 :value 個項目。"
    },
    "max": {
      "numeric": ":attribute 不能大於 :max。",
      "file": ":attribute 不能大於 :max KB。",
      "string": ":attribute 不能多於 :max 個字符。",
      "array": ":attribute 不能多於 :max 個項目。"
    },
    "mimes": ":attribute 必須為 :values 的檔案。",
    "mimetypes": ":attribute 必須為 :values 的檔案。",
    "min": {
      "numeric": ":attribute 不能小於 :min。",
      "file": ":attribute 不能小於 :min KB。",
      "string": ":attribute 不能小於 :min 個字符。",
      "array": ":attribute 不能小於 :min 個項目。"
    },
    "not_in": "所揀選的 :attribute 選項無效。",
    "not_regex": ":attribute 的格式錯誤。",
    "numeric": ":attribute 必須為一個數字。",
    "present": "The :attribute field must be present.",
    "regex": ":attribute 的格式錯誤。",
    "required": ":attribute 不能留空。",
    "required_if": "The :attribute field is required when :other is :value.",
    "required_unless": "The :attribute field is required unless :other is in :values.",
    "required_with": "The :attribute field is required when :values is present.",
    "required_with_all": "The :attribute field is required when :values are present.",
    "required_without": "The :attribute field is required when :values is not present.",
    "required_without_all": "The :attribute field is required when none of :values are present.",
    "same": ":attribute 與 :other 必須相同。",
    "size": {
      "numeric": ":attribute 的大小必須是 :size。",
      "file": ":attribute 的大小必須是 :size KB。",
      "string": ":attribute 必須是 :size 個字符。",
      "array": ":attribute 必須是 :size 個單元。"
    },
    "string": ":attribute 必須是一個字符串",
    "timezone": ":attribute 必須是一個正確的時區值。",
    "unique": ":attribute 已經存在。",
    "uploaded": "The :attribute failed to upload.",
    "url": ":attribute 的格式錯誤。",
    "uuid": ":attribute 必須是有效的 UUID。",
    "remote": "The :attribute field is invalid."
  }
}