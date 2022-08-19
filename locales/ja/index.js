export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ 追加",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "ファイル",
        "dndTitle": "ファイルをアップロードする",
        "dndDescription": "ファイルをドロップするか、ここをクリックしてアップロードしてください",
        "removeConfirm": "ファイルを削除すると、永久に削除されます。続行してもよろしいですか？",
        "select": "ファイルを選択",
        "upload": "アップロード"
      },
      "multifile": {
        "uploadButton": "ファイルのアップロード",
        "dndTitle": "ファイルのアップロード",
        "dndDescription": "ファイルをドロップするか、ここをクリックしてアップロードしてください"
      },
      "gallery": {
        "uploadButton": "画像をアップロードする",
        "dndTitle": "画像をアップロードする",
        "dndDescription": "画像をドロップするか、ここをクリックしてアップロードしてください"
      },
    },
    "steps": {
      "finish": "終了",
      "next": "次へ",
      "previous": "前へ"
    },
    "editor": {
      "acceptedMimesError": "受け付けたマイムは次のとおりです：:mimes",
      "acceptedExtensionsError": "受け付けた拡張機能は次のとおりです：:extensions"
    },
    "multiselect": {
      "multipleLabelOne": "1つのオプションが選択されました",
      "multipleLabelMore": ":options オプションが選択されました",
      "noResults": "オプションが見つかりません",
      "noOptions": "リストは空です"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": ["日", "月", "火", "水", "木", "金", "土"],
        "longhand": [
          "日曜日",
          "月曜日",
          "火曜日",
          "水曜日",
          "木曜日",
          "金曜日",
          "土曜日",
        ],
      },

      "months": {
        "shorthand": [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        "longhand": [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
      },
      "rangeSeparator": " から ",
      "monthAriaLabel": "月",
      "amPM": ["午前", "午後"],
      "yearAriaLabel": "年",
      "hourAriaLabel": "時間",
      "minuteAriaLabel": "分",
    },
    "defaultMessage": "無効なフィールド",
    "dateFormats": {
      "datetimeSeconds24": "YYYY/MM/DD HH:mm:ss",
      "datetimeSeconds12": "YYYY/MM/DD ahh:mm:ss",
      "datetime24": "YYYY/MM/DD HH:mm",
      "datetime12": "YYYY/MM/DD ahh:mm",
      "timeSeconds24": "HH:mm:ss",
      "timeSeconds12": "ahh:mm:ss",
      "time24": "HH:mm",
      "time12": "ahh:mm",
      "date": "YYYY/MM/DD"
    }
  },
  "validation": {
    "accepted": ":attributeを承認してください。",
    "active_url": ":attributeは、有効なURLではありません。",
    "after": ":attributeには、:dateより後の日付を指定してください。",
    "after_or_equal": ":attributeには、:date以降の日付を指定してください。",
    "alpha": ":attributeには、アルファベッドのみ使用できます。",
    "alpha_dash": ":attributeには、英数字(A-Z,a-z,0-9)とハイフンと下線(-,_)が使用できます。",
    "alpha_num": ":attributeには、英数字(A-Z,a-z,0-9)が使用できます。",
    "array": ":attributeには、配列を指定してください。",
    "before": ":attributeには、:dateより前の日付を指定してください。",
    "before_or_equal": ":attributeには、:date以前の日付を指定してください。",
    "between": {
      "numeric": ":attributeには、:minから、:maxまでの数字を指定してください。",
      "file": ":attributeには、:min KBから:max KBまでのサイズのファイルを指定してください。",
      "string": ":attributeは、:min文字から:max文字にしてください。",
      "array": ":attributeの項目は、:min個から:max個にしてください。"
    },
    "boolean": ":attributeには、trueかfalseを指定してください。",
    "confirmed": ":attributeと:attribute確認が一致しません。",
    "date": ":attributeは、正しい日付ではありません。",
    "date_format": ":attributeの形式は、:formatと合いません。",
    "date_equals": ":attributeは:dateに等しい日付でなければなりません。",
    "different": ":attributeと:otherには、異なるものを指定してください。",
    "digits": ":attributeは、:digits桁にしてください。",
    "digits_between": ":attributeは、:min桁から:max桁にしてください。",
    "dimensions": ":attributeの画像サイズが無効です",
    "distinct": ":attributeの値が重複しています。",
    "email": ":attributeは、有効なメールアドレス形式で指定してください。",
    "exists": "選択された:attributeは、有効ではありません。",
    "file": ":attributeはファイルでなければいけません。",
    "filled": ":attributeは必須です。",
    "gt": {
      "numeric": ":attributeは、:valueより大きくなければなりません。",
      "file": ":attributeは、:value KBより大きくなければなりません。",
      "string": ":attributeは、:value文字より大きくなければなりません。",
      "array": ":attributeの項目数は、:value個より大きくなければなりません。"
    },
    "gte": {
      "numeric": ":attributeは、:value以上でなければなりません。",
      "file": ":attributeは、:value KB以上でなければなりません。",
      "string": ":attributeは、:value文字以上でなければなりません。",
      "array": ":attributeの項目数は、:value個以上でなければなりません。"
    },
    "image": ":attributeには、画像を指定してください。",
    "in": "選択された:attributeは、有効ではありません。",
    "in_array": ":attributeが:otherに存在しません。",
    "integer": ":attributeには、整数を指定してください。",
    "ip": ":attributeには、有効なIPアドレスを指定してください。",
    "ipv4": ":attributeはIPv4アドレスを指定してください。",
    "ipv6": ":attributeはIPv6アドレスを指定してください。",
    "json": ":attributeには、有効なJSON文字列を指定してください。",
    "lt": {
      "numeric": ":attributeは、:valueより小さくなければなりません。",
      "file": ":attributeは、:value KBより小さくなければなりません。",
      "string": ":attributeは、:value文字より小さくなければなりません。",
      "array": ":attributeの項目数は、:value個より小さくなければなりません。"
    },
    "lte": {
      "numeric": ":attributeは、:value以下でなければなりません。",
      "file": ":attributeは、:value KB以下でなければなりません。",
      "string": ":attributeは、:value文字以下でなければなりません。",
      "array": ":attributeの項目数は、:value個以下でなければなりません。"
    },
    "max": {
      "numeric": ":attributeには、:max以下の数字を指定してください。",
      "file": ":attributeには、:max KB以下のファイルを指定してください。",
      "string": ":attributeは、:max文字以下にしてください。",
      "array": ":attributeの項目は、:max個以下にしてください。"
    },
    "mimes": ":attributeには、:valuesタイプのファイルを指定してください。",
    "mimetypes": ":attributeには、:valuesタイプのファイルを指定してください。",
    "min": {
      "numeric": ":attributeには、:min以上の数字を指定してください。",
      "file": ":attributeには、:min KB以上のファイルを指定してください。",
      "string": ":attributeは、:min文字以上にしてください。",
      "array": ":attributeの項目は、:min個以上にしてください。"
    },
    "not_in": "選択された:attributeは、有効ではありません。",
    "not_regex": ":attributeの形式が無効です。",
    "numeric": ":attributeには、数字を指定してください。",
    "regex": ":attributeには、有効な正規表現を指定してください。",
    "required": ":attributeは、必ず指定してください。",
    "same": ":attributeと:otherが一致しません。",
    "size": {
      "numeric": ":attributeには、:sizeを指定してください。",
      "file": ":attributeには、:size KBのファイルを指定してください。",
      "string": ":attributeは、:size文字にしてください。",
      "array": ":attributeの項目は、:size個にしてください。"
    },
    "string": ":attributeには、文字を指定してください。",
    "timezone": ":attributeには、有効なタイムゾーンを指定してください。",
    "unique": "指定の:attributeは既に使用されています。",
    "url": ":attributeは、有効なURL形式で指定してください。",
    "uuid": ":attributeは、有効なUUIDでなければなりません。"
  }
}