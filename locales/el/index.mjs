export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ Προσθήκη",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "Αρχείο",
        "dndTitle": "Μεταφόρτωση αρχείου",
        "dndDescription": "Αποθέστε το αρχείο ή κάντε κλικ εδώ για μεταφόρτωση",
        "removeConfirm": "Με την αφαίρεση του αρχείου θα διαγραφεί οριστικά. Είστε σίγουροι ότι θα συνεχίσετε;",
        "select": "Επιλογή αρχείου",
        "upload": "Μεταφόρτωσ"
      },
      "multifile": {
        "uploadButton": "Μεταφόρτωση αρχείων",
        "dndTitle": "Μεταφόρτωση αρχείων",
        "dndDescription": "Αποθέστε αρχεία ή κάντε κλικ εδώ για μεταφόρτωση"
      },
      "gallery": {
        "uploadButton": "Μεταφόρτωση εικόνων",
        "dndTitle": "Μεταφόρτωση εικόνων",
        "dndDescription": "Αποθέστε εικόνες ή κάντε κλικ εδώ για μεταφόρτωση"
      }
    },
    "steps": {
      "finish": "Ολοκλήρωση",
      "next": "Επόμενο",
      "previous": "Προηγούμενο"
    },
    "editor": {
      "acceptedMimesError": "Αποδεκτά πρωτόκολλα MIME είναι: :mimes",
      "acceptedExtensionsError": "Αποδεκτές επεκτάσεις είναι: :extensions"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": [
          "Κυ",
          "Δε",
          "Τρ",
          "Τε",
          "Πέ",
          "Πα",
          "Σά"
        ],
        "longhand": [
          "Κυριακή",
          "Δευτέρα",
          "Τρίτη",
          "Τετάρτη",
          "Πέμπτη",
          "Παρασκευή",
          "Σάββατο"
        ]
      },
      "months": {
        "shorthand": [
          "Ιαν",
          "Φεβ",
          "Μάρ",
          "Απρ",
          "Μάι",
          "Ιούν",
          "Ιούλ",
          "Αύγ",
          "Σεπ",
          "Οκτ",
          "Νοέ",
          "Δεκ"
        ],
        "longhand": [
          "Ιανουάριος",
          "Φεβρουάριος",
          "Μάρτιος",
          "Απρίλιος",
          "Μάιος",
          "Ιούνιος",
          "Ιούλιος",
          "Αύγουστος",
          "Σεπτέμβριος",
          "Οκτώβριος",
          "Νοέμβριος",
          "Δεκέμβριος"
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
      "rangeSeparator": " έως ",
      "weekAbbreviation": "Εβδ",
      "scrollTitle": "Μετακυλήστε για προσαύξηση",
      "toggleTitle": "Κάντε κλικ για αλλαγή",
      "amPM": [
        "ΠΜ",
        "ΜΜ"
      ],
      "yearAriaLabel": "χρόνος",
      "monthAriaLabel": "μήνας",
      "hourAriaLabel": "ώρα",
      "minuteAriaLabel": "λεπτό"
    },
    "dateFormats": {
      "datetimeSeconds24": "DD/MM/YYYY, HH:mm:ss a",
      "datetimeSeconds12": "DD/MM/YYYY, hh:mm:ss a",
      "datetime24": "DD/MM/YYYY, HH:mm a",
      "datetime12": "DD/MM/YYYY, hh:mm a",
      "timeSeconds24": "HH:mm:ss a",
      "timeSeconds12": "hh:mm:ss a",
      "time24": "HH:mm a",
      "time12": "hh:mm a",
      "date": "DD/MM/YYYY"
    },
    "multiselect": {
      "multipleLabelOne": "Επιλέχθηκε η 1 επιλογή",
      "multipleLabelMore": "Επιλέχθηκαν :options επιλογές",
      "noResults": "Δεν βρέθηκαν επιλογές",
      "noOptions": "Η λίστα είναι κενή"
    },
    "defaultMessage": "Μη έγκυρο πεδίο",
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
    "accepted": "Το πεδίο :attribute πρέπει να γίνει αποδεκτό.",
    "active_url": "Το πεδίο :attribute δεν είναι αποδεκτή διεύθυνση URL.",
    "after": "Το πεδίο :attribute πρέπει να είναι μία ημερομηνία μετά από :date.",
    "after_or_equal": "Το πεδίο :attribute πρέπει να είναι μία ημερομηνία ίδια ή μετά από :date.",
    "alpha": "Το πεδίο :attribute μπορεί να περιέχει μόνο γράμματα.",
    "alpha_dash": "Το πεδίο :attribute μπορεί να περιέχει μόνο γράμματα, αριθμούς, και παύλες.",
    "alpha_num": "Το πεδίο :attribute μπορεί να περιέχει μόνο γράμματα και αριθμούς.",
    "array": "Το πεδίο :attribute πρέπει να είναι ένας πίνακας.",
    "before": "Το πεδίο :attribute πρέπει να είναι μία ημερομηνία πριν από :date.",
    "before_or_equal": "Το πεδίο :attribute πρέπει να είναι μία ημερομηνία ίδια ή πριν από :date.",
    "between": {
      "numeric": "Το πεδίο :attribute πρέπει να είναι μεταξύ :min - :max.",
      "file": "Το πεδίο :attribute πρέπει να είναι μεταξύ :min - :max kilobytes.",
      "string": "Το πεδίο :attribute πρέπει να είναι μεταξύ :min - :max χαρακτήρες.",
      "array": "Το πεδίο :attribute πρέπει να έχει μεταξύ :min - :max αντικείμενα."
    },
    "boolean": "Το πεδίο :attribute πρέπει να είναι true ή false.",
    "captcha": "Please verify that you are not a robot.",
    "confirmed": "Η επιβεβαίωση του :attribute δεν ταιριάζει.",
    "date": "Το πεδίο :attribute δεν είναι έγκυρη ημερομηνία.",
    "date_format": "Το πεδίο :attribute δεν είναι της μορφής :format.",
    "date_equals": "Το στοιχείο :attribute πρέπει να είναι μια ημερομηνία, όπως η εξής :date.",
    "different": "Το πεδίο :attribute και :other πρέπει να είναι διαφορετικά.",
    "digits": "Το πεδίο :attribute πρέπει να είναι :digits ψηφία.",
    "digits_between": "Το πεδίο :attribute πρέπει να είναι μεταξύ :min και :max ψηφία.",
    "dimensions": "Το πεδίο :attribute περιέχει μη έγκυρες διαστάσεις εικόνας.",
    "distinct": "Το πεδίο :attribute περιέχει δύο φορές την ίδια τιμή.",
    "email": "Το πεδίο :attribute πρέπει να είναι μία έγκυρη διεύθυνση email.",
    "exists": "Το επιλεγμένο :attribute δεν είναι έγκυρο.",
    "file": "Το πεδίο :attribute πρέπει να είναι αρχείο.",
    "filled": "To πεδίο :attribute είναι απαραίτητο.",
    "gt": {
      "numeric": "To πεδίο :attribute πρέπει να είναι μεγαλύτερο από :value.",
      "file": "To πεδίο :attribute πρέπει να είναι μεγαλύτερο από :value kilobytes.",
      "string": "To πεδίο :attribute πρέπει να είναι μεγαλύτερο από :value χαρακτήρες.",
      "array": "To πεδίο :attribute πρέπει να έχει περισσότερα από :value αντικείμενα."
    },
    "gte": {
      "numeric": "To πεδίο :attribute πρέπει να είναι μεγαλύτερο ή ίσο από :value.",
      "file": "To πεδίο :attribute πρέπει να είναι μεγαλύτερο ή ίσο από :value kilobytes.",
      "string": "To πεδίο :attribute πρέπει να είναι μεγαλύτερο ή ίσο από :value χαρακτήρες.",
      "array": "To πεδίο :attribute πρέπει να έχει :value αντικείμενα ή περισσότερα."
    },
    "image": "Το πεδίο :attribute πρέπει να είναι εικόνα.",
    "in": "Το επιλεγμένο :attribute δεν είναι έγκυρο.",
    "in_array": "Το πεδίο :attribute δεν υπάρχει σε :other.",
    "integer": "Το πεδίο :attribute πρέπει να είναι ακέραιος.",
    "ip": "Το πεδίο :attribute πρέπει να είναι μία έγκυρη διεύθυνση IP.",
    "ipv4": "Το πεδίο :attribute πρέπει να είναι μία έγκυρη διεύθυνση IPv4.",
    "ipv6": "Το πεδίο :attribute πρέπει να είναι μία έγκυρη διεύθυνση IPv6.",
    "json": "Το πεδίο :attribute πρέπει να είναι μία έγκυρη συμβολοσειρά JSON.",
    "lt": {
      "numeric": "To πεδίο :attribute πρέπει να είναι μικρότερo από :value.",
      "file": "To πεδίο :attribute πρέπει να είναι μικρότερo από :value kilobytes.",
      "string": "To πεδίο :attribute πρέπει να είναι μικρότερo από :value χαρακτήρες.",
      "array": "To πεδίο :attribute πρέπει να έχει λιγότερα από :value αντικείμενα."
    },
    "lte": {
      "numeric": "To πεδίο :attribute πρέπει να είναι μικρότερo ή ίσο από :value.",
      "file": "To πεδίο :attribute πρέπει να είναι μικρότερo ή ίσο από  :value kilobytes.",
      "string": "To πεδίο :attribute πρέπει να είναι μικρότερo ή ίσο από  :value χαρακτήρες.",
      "array": "To πεδίο :attribute δεν πρέπει να υπερβαίνει τα :value αντικείμενα."
    },
    "max": {
      "numeric": "Το πεδίο :attribute δεν μπορεί να είναι μεγαλύτερο από :max.",
      "file": "Το πεδίο :attribute δεν μπορεί να είναι μεγαλύτερό :max kilobytes.",
      "string": "Το πεδίο :attribute δεν μπορεί να έχει περισσότερους από :max χαρακτήρες.",
      "array": "Το πεδίο :attribute δεν μπορεί να έχει περισσότερα από :max αντικείμενα."
    },
    "mimes": "Το πεδίο :attribute πρέπει να είναι αρχείο τύπου: :values.",
    "mimetypes": "Το πεδίο :attribute πρέπει να είναι αρχείο τύπου: :values.",
    "min": {
      "numeric": "Το πεδίο :attribute πρέπει να είναι τουλάχιστον :min.",
      "file": "Το πεδίο :attribute πρέπει να είναι τουλάχιστον :min kilobytes.",
      "string": "Το πεδίο :attribute πρέπει να έχει τουλάχιστον :min χαρακτήρες.",
      "array": "Το πεδίο :attribute πρέπει να έχει τουλάχιστον :min αντικείμενα."
    },
    "not_in": "Το επιλεγμένο :attribute δεν είναι αποδεκτό.",
    "not_regex": "Η μορφή του πεδίου :attribute δεν είναι αποδεκτή.",
    "numeric": "Το πεδίο :attribute πρέπει να είναι αριθμός.",
    "present": "The :attribute field must be present.",
    "regex": "Η μορφή του πεδίου :attribute δεν είναι αποδεκτή.",
    "required": "Το πεδίο :attribute είναι απαραίτητο.",
    "required_if": "The :attribute field is required when :other is :value.",
    "required_unless": "The :attribute field is required unless :other is in :values.",
    "required_with": "The :attribute field is required when :values is present.",
    "required_with_all": "The :attribute field is required when :values are present.",
    "required_without": "The :attribute field is required when :values is not present.",
    "required_without_all": "The :attribute field is required when none of :values are present.",
    "same": "Τα πεδία :attribute και :other πρέπει να είναι ίδια.",
    "size": {
      "numeric": "Το πεδίο :attribute πρέπει να είναι :size.",
      "file": "Το πεδίο :attribute πρέπει να είναι :size kilobytes.",
      "string": "Το πεδίο :attribute πρέπει να είναι :size χαρακτήρες.",
      "array": "Το πεδίο :attribute πρέπει να περιέχει :size αντικείμενα."
    },
    "string": "Το πεδίο :attribute πρέπει να είναι αλφαριθμητικό.",
    "timezone": "Το πεδίο :attribute πρέπει να είναι μία έγκυρη ζώνη ώρας.",
    "unique": "Το πεδίο :attribute έχει ήδη εκχωρηθεί.",
    "uploaded": "The :attribute failed to upload.",
    "url": "Το πεδίο :attribute δεν είναι έγκυρη διεύθυνση URL.",
    "uuid": "Το πεδίο :attribute πρέπει να είναι έγκυρο UUID.",
    "remote": "The :attribute field is invalid."
  }
}