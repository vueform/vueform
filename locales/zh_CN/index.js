export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ 添加",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "文件",
        "dndTitle": "上传文件",
        "dndDescription": "拖放文件或点击此处上传",
        "removeConfirm": "通过删除文件，它将被永久删除。 你确定要继续吗？",
        "select": "选择文件",
        "upload": "上传"
      },
      "multifile": {
        "uploadButton": "上传文件",
        "dndTitle": "上传文件",
        "dndDescription": "删除文件或单击此处上传"
      },
      "gallery": {
        "uploadButton": "上传图片",
        "dndTitle": "上传图片",
        "dndDescription": "删除图片或点击此处上传"
      }
    },
    "steps": {
      "finish": "结束",
      "next": "下一个",
      "previous": "以前的"
    },
    "editor": {
      "acceptedMimesError": "接受的哑剧是：:mimes",
      "acceptedExtensionsError": "接受的扩展是：:extensions"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": [
          "周日",
          "周一",
          "周二",
          "周三",
          "周四",
          "周五",
          "周六"
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
      "weekAbbreviation": "周",
      "scrollTitle": "滚动切换",
      "toggleTitle": "点击切换 12/24 小时时制",
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
      "multipleLabelOne": "已选择 1 个选项",
      "multipleLabelMore": ":options 选项已选择",
      "noResults": "未找到选项",
      "noOptions": "列表为空"
    },
    "defaultMessage": "无效字段",
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
    "accepted": "您必须接受 :attribute。",
    "active_url": ":attribute 不是一个有效的网址。",
    "after": ":attribute 必须要晚于 :date。",
    "after_or_equal": ":attribute 必须要等于 :date 或更晚。",
    "alpha": ":attribute 只能由字母组成。",
    "alpha_dash": ":attribute 只能由字母、数字、短划线(-)和下划线(_)组成。",
    "alpha_num": ":attribute 只能由字母和数字组成。",
    "array": ":attribute 必须是一个数组。",
    "before": ":attribute 必须要早于 :date。",
    "before_or_equal": ":attribute 必须要等于 :date 或更早。",
    "between": {
      "numeric": ":attribute 必须介于 :min - :max 之间。",
      "file": ":attribute 必须介于 :min - :max KB 之间。",
      "string": ":attribute 必须介于 :min - :max 个字符之间。",
      "array": ":attribute 必须只有 :min - :max 个单元。"
    },
    "boolean": ":attribute 必须为布尔值。",
    "confirmed": ":attribute 两次输入不一致。",
    "date": ":attribute 不是一个有效的日期。",
    "date_format": ":attribute 的格式必须为 :format。",
    "date_equals": ":attribute 必须要等于 :date。",
    "different": ":attribute 和 :other 必须不同。",
    "digits": ":attribute 必须是 :digits 位数字。",
    "digits_between": ":attribute 必须是介于 :min 和 :max 位的数字。",
    "dimensions": ":attribute 图片尺寸不正确。",
    "distinct": ":attribute 已经存在。",
    "email": ":attribute 不是一个合法的邮箱。",
    "exists": ":attribute 不存在。",
    "file": ":attribute 必须是文件。",
    "filled": ":attribute 不能为空。",
    "gt": {
      "numeric": ":attribute 必须大于 :value。",
      "file": ":attribute 必须大于 :value KB。",
      "string": ":attribute 必须多于 :value 个字符。",
      "array": ":attribute 必须多于 :value 个元素。"
    },
    "gte": {
      "numeric": ":attribute 必须大于或等于 :value。",
      "file": ":attribute 必须大于或等于 :value KB。",
      "string": ":attribute 必须多于或等于 :value 个字符。",
      "array": ":attribute 必须多于或等于 :value 个元素。"
    },
    "image": ":attribute 必须是图片。",
    "in": "已选的属性 :attribute 无效。",
    "in_array": ":attribute 必须在 :other 中。",
    "integer": ":attribute 必须是整数。",
    "ip": ":attribute 必须是有效的 IP 地址。",
    "ipv4": ":attribute 必须是有效的 IPv4 地址。",
    "ipv6": ":attribute 必须是有效的 IPv6 地址。",
    "json": ":attribute 必须是正确的 JSON 格式。",
    "lt": {
      "numeric": ":attribute 必须小于 :value。",
      "file": ":attribute 必须小于 :value KB。",
      "string": ":attribute 必须少于 :value 个字符。",
      "array": ":attribute 必须少于 :value 个元素。"
    },
    "lte": {
      "numeric": ":attribute 必须小于或等于 :value。",
      "file": ":attribute 必须小于或等于 :value KB。",
      "string": ":attribute 必须少于或等于 :value 个字符。",
      "array": ":attribute 必须少于或等于 :value 个元素。"
    },
    "max": {
      "numeric": ":attribute 不能大于 :max。",
      "file": ":attribute 不能大于 :max KB。",
      "string": ":attribute 不能大于 :max 个字符。",
      "array": ":attribute 最多只有 :max 个单元。"
    },
    "mimes": ":attribute 必须是一个 :values 类型的文件。",
    "mimetypes": ":attribute 必须是一个 :values 类型的文件。",
    "min": {
      "numeric": ":attribute 必须大于等于 :min。",
      "file": ":attribute 大小不能小于 :min KB。",
      "string": ":attribute 至少为 :min 个字符。",
      "array": ":attribute 至少有 :min 个单元。"
    },
    "not_in": "已选的属性 :attribute 非法。",
    "not_regex": ":attribute 的格式错误。",
    "numeric": ":attribute 必须是一个数字。",
    "present": "The :attribute field must be present.",
    "regex": ":attribute 格式不正确。",
    "required": ":attribute 不能为空。",
    "required_if": "The :attribute field is required when :other is :value.",
    "required_unless": "The :attribute field is required unless :other is in :values.",
    "required_with": "The :attribute field is required when :values is present.",
    "required_with_all": "The :attribute field is required when :values are present.",
    "required_without": "The :attribute field is required when :values is not present.",
    "required_without_all": "The :attribute field is required when none of :values are present.",
    "same": ":attribute 和 :other 必须相同。",
    "size": {
      "numeric": ":attribute 大小必须为 :size。",
      "file": ":attribute 大小必须为 :size KB。",
      "string": ":attribute 必须是 :size 个字符。",
      "array": ":attribute 必须为 :size 个单元。"
    },
    "string": ":attribute 必须是一个字符串。",
    "timezone": ":attribute 必须是一个合法的时区值。",
    "unique": ":attribute 已经存在。",
    "uploaded": "The :attribute failed to upload.",
    "url": ":attribute 格式不正确。",
    "uuid": ":attribute 必须是有效的 UUID。",
    "remote": "The :attribute field is invalid."
  }
}