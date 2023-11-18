export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ Menambahkan",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "Mengajukan",
        "dndTitle": "Unggah data",
        "dndDescription": "Jatuhkan file atau klik di sini untuk mengunggah",
        "removeConfirm": "Dengan menghapus file itu akan dihapus secara permanen. Apakah Anda yakin untuk melanjutkan?",
        "select": "Pilih file",
        "upload": "Mengunggah"
      },
      "multifile": {
        "uploadButton": "Unggah berkas",
        "dndTitle": "Unggah berkas",
        "dndDescription": "Jatuhkan file atau klik di sini untuk mengunggah"
      },
      "gallery": {
        "uploadButton": "Unggah gambar",
        "dndTitle": "Unggah gambar",
        "dndDescription": "Jatuhkan gambar atau klik di sini untuk mengunggah"
      }
    },
    "steps": {
      "finish": "Menyelesaikan",
      "next": "Lanjut",
      "previous": "Sebelumnya"
    },
    "editor": {
      "acceptedMimesError": "Mime yang diterima adalah: :mimes",
      "acceptedExtensionsError": "Ekstensi yang diterima adalah: :extensions"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": [
          "Min",
          "Sen",
          "Sel",
          "Rab",
          "Kam",
          "Jum",
          "Sab"
        ],
        "longhand": [
          "Minggu",
          "Senin",
          "Selasa",
          "Rabu",
          "Kamis",
          "Jumat",
          "Sabtu"
        ]
      },
      "months": {
        "shorthand": [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Mei",
          "Jun",
          "Jul",
          "Agu",
          "Sep",
          "Okt",
          "Nov",
          "Des"
        ],
        "longhand": [
          "Januari",
          "Februari",
          "Maret",
          "April",
          "Mei",
          "Juni",
          "Juli",
          "Agustus",
          "September",
          "Oktober",
          "November",
          "Desember"
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
      "rangeSeparator": " - ",
      "weekAbbreviation": "Wk",
      "scrollTitle": "Scroll to increment",
      "toggleTitle": "Click to toggle",
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
      "datetimeSeconds24": "DD/MM/YYYY HH.mm.ss",
      "datetimeSeconds12": "DD/MM/YYYY hh.mm.ss a",
      "datetime24": "DD/MM/YYYY HH.mm",
      "datetime12": "DD/MM/YYYY hh.mm a",
      "timeSeconds24": "HH.mm.ss",
      "timeSeconds12": "hh.mm.ss a",
      "time24": "HH.mm",
      "time12": "hh.mm a",
      "date": "DD/MM/YYYY"
    },
    "multiselect": {
      "multipleLabelOne": "1 opsi dipilih",
      "multipleLabelMore": ":options opsi dipilih",
      "noResults": "Tidak ada opsi yang ditemukan",
      "noOptions": "Daftarnya kosong"
    },
    "defaultMessage": "Bidang tidak valid",
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
    "accepted": ":Attribute harus diterima.",
    "active_url": ":Attribute bukan URL yang valid.",
    "after": ":Attribute harus berisi tanggal setelah :date.",
    "after_or_equal": ":Attribute harus berisi tanggal setelah atau sama dengan :date.",
    "alpha": ":Attribute hanya boleh berisi huruf.",
    "alpha_dash": ":Attribute hanya boleh berisi huruf, angka, strip, dan garis bawah.",
    "alpha_num": ":Attribute hanya boleh berisi huruf dan angka.",
    "array": ":Attribute harus berisi sebuah array.",
    "before": ":Attribute harus berisi tanggal sebelum :date.",
    "before_or_equal": ":Attribute harus berisi tanggal sebelum atau sama dengan :date.",
    "between": {
      "numeric": ":Attribute harus bernilai antara :min sampai :max.",
      "file": ":Attribute harus berukuran antara :min sampai :max kilobita.",
      "string": ":Attribute harus berisi antara :min sampai :max karakter.",
      "array": ":Attribute harus memiliki :min sampai :max anggota."
    },
    "boolean": ":Attribute harus bernilai true atau false",
    "confirmed": "Konfirmasi :attribute tidak cocok.",
    "date": ":Attribute bukan tanggal yang valid.",
    "date_format": ":Attribute tidak cocok dengan format :format.",
    "date_equals": ":Attribute harus berisi tanggal yang sama dengan :date.",
    "different": ":Attribute dan :other harus berbeda.",
    "digits": ":Attribute harus terdiri dari :digits angka.",
    "digits_between": ":Attribute harus terdiri dari :min sampai :max angka.",
    "dimensions": ":Attribute tidak memiliki dimensi gambar yang valid.",
    "distinct": ":Attribute memiliki nilai yang duplikat.",
    "email": ":Attribute harus berupa alamat surel yang valid.",
    "exists": ":Attribute yang dipilih tidak valid.",
    "file": ":Attribute harus berupa sebuah berkas.",
    "filled": ":Attribute harus memiliki nilai.",
    "gt": {
      "numeric": ":Attribute harus bernilai lebih besar dari :value.",
      "file": ":Attribute harus berukuran lebih besar dari :value kilobita.",
      "string": ":Attribute harus berisi lebih besar dari :value karakter.",
      "array": ":Attribute harus memiliki lebih dari :value anggota."
    },
    "gte": {
      "numeric": ":Attribute harus bernilai lebih besar dari atau sama dengan :value.",
      "file": ":Attribute harus berukuran lebih besar dari atau sama dengan :value kilobita.",
      "string": ":Attribute harus berisi lebih besar dari atau sama dengan :value karakter.",
      "array": ":Attribute harus terdiri dari :value anggota atau lebih."
    },
    "image": ":Attribute harus berupa gambar.",
    "in": ":Attribute yang dipilih tidak valid.",
    "in_array": ":Attribute tidak ada di dalam :other.",
    "integer": ":Attribute harus berupa bilangan bulat.",
    "ip": ":Attribute harus berupa alamat IP yang valid.",
    "ipv4": ":Attribute harus berupa alamat IPv4 yang valid.",
    "ipv6": ":Attribute harus berupa alamat IPv6 yang valid.",
    "json": ":Attribute harus berupa JSON string yang valid.",
    "lt": {
      "numeric": ":Attribute harus bernilai kurang dari :value.",
      "file": ":Attribute harus berukuran kurang dari :value kilobita.",
      "string": ":Attribute harus berisi kurang dari :value karakter.",
      "array": ":Attribute harus memiliki kurang dari :value anggota."
    },
    "lte": {
      "numeric": ":Attribute harus bernilai kurang dari atau sama dengan :value.",
      "file": ":Attribute harus berukuran kurang dari atau sama dengan :value kilobita.",
      "string": ":Attribute harus berisi kurang dari atau sama dengan :value karakter.",
      "array": ":Attribute harus tidak lebih dari :value anggota."
    },
    "max": {
      "numeric": ":Attribute maksimal bernilai :max.",
      "file": ":Attribute maksimal berukuran :max kilobita.",
      "string": ":Attribute maksimal berisi :max karakter.",
      "array": ":Attribute maksimal terdiri dari :max anggota."
    },
    "mimes": ":Attribute harus berupa berkas berjenis: :values.",
    "mimetypes": ":Attribute harus berupa berkas berjenis: :values.",
    "min": {
      "numeric": ":Attribute minimal bernilai :min.",
      "file": ":Attribute minimal berukuran :min kilobita.",
      "string": ":Attribute minimal berisi :min karakter.",
      "array": ":Attribute minimal terdiri dari :min anggota."
    },
    "not_in": ":Attribute yang dipilih tidak valid.",
    "not_regex": "Format :attribute tidak valid.",
    "numeric": ":Attribute harus berupa angka.",
    "present": "The :attribute field must be present.",
    "regex": "Format :attribute tidak valid.",
    "required": ":Attribute wajib diisi.",
    "required_if": "The :attribute field is required when :other is :value.",
    "required_unless": "The :attribute field is required unless :other is in :values.",
    "required_with": "The :attribute field is required when :values is present.",
    "required_with_all": "The :attribute field is required when :values are present.",
    "required_without": "The :attribute field is required when :values is not present.",
    "required_without_all": "The :attribute field is required when none of :values are present.",
    "same": ":Attribute dan :other harus sama.",
    "size": {
      "numeric": ":Attribute harus berukuran :size.",
      "file": ":Attribute harus berukuran :size kilobyte.",
      "string": ":Attribute harus berukuran :size karakter.",
      "array": ":Attribute harus mengandung :size anggota."
    },
    "string": ":Attribute harus berupa string.",
    "timezone": ":Attribute harus berisi zona waktu yang valid.",
    "unique": ":Attribute sudah ada sebelumnya.",
    "uploaded": "The :attribute failed to upload.",
    "url": "Format :attribute tidak valid.",
    "uuid": ":Attribute harus merupakan UUID yang valid.",
    "remote": "The :attribute field is invalid."
  }
}