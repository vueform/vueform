export default {
  "vueform": {
    "elements": {
      "list": {
        "add": "+ Adicionar",
        "remove": "&times;"
      },
      "file": {
        "defaultName": "Ficheiro",
        "dndTitle": "Submeter ficheiro",
        "dndDescription": "Solte o ficheiro ou clique aqui para submeter",
        "removeConfirm": "Ao remover o ficheiro, este será apagado permanentemente. Tem a certeza que quer continuar?",
        "select": "Selecionar ficheiro",
        "upload": "Submeter"
      },
      "multifile": {
        "uploadButton": "Submeter ficheiros",
        "dndTitle": "Submeter ficheiros",
        "dndDescription": "Solte ficheiros ou clique aqui para submeter"
      },
      "gallery": {
        "uploadButton": "Submeter imagens",
        "dndTitle": "Submeter imagens",
        "dndDescription": "Solte imagens ou clique aqui para submeter"
      }
    },
    "steps": {
      "finish": "Terminar",
      "next": "Próximo",
      "previous": "Anterior"
    },
    "editor": {
      "acceptedMimesError": "Os mímicos aceites são: :mimes",
      "acceptedExtensionsError": "As extensões aceites são: :extensions"
    },
    "datepicker": {
      "weekdays": {
        "shorthand": [
          "Dom",
          "Seg",
          "Ter",
          "Qua",
          "Qui",
          "Sex",
          "Sáb"
        ],
        "longhand": [
          "Domingo",
          "Segunda-feira",
          "Terça-feira",
          "Quarta-feira",
          "Quinta-feira",
          "Sexta-feira",
          "Sábado"
        ]
      },
      "months": {
        "shorthand": [
          "Jan",
          "Fev",
          "Mar",
          "Abr",
          "Mai",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Out",
          "Nov",
          "Dez"
        ],
        "longhand": [
          "Janeiro",
          "Fevereiro",
          "Março",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro"
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
      "rangeSeparator": " até ",
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
      "datetimeSeconds24": "DD/MM/YYYY HH:mm:ss",
      "datetimeSeconds12": "DD/MM/YYYY hh:mm:ss a",
      "datetime24": "DD/MM/YYYY HH:mm",
      "datetime12": "DD/MM/YYYY hh:mm a",
      "timeSeconds24": "HH:mm:ss",
      "timeSeconds12": "hh:mm:ss a",
      "time24": "HH:mm",
      "time12": "hh:mm a",
      "date": "DD/MM/YYYY"
    },
    "multiselect": {
      "multipleLabelOne": "1 opção selecionada",
      "multipleLabelMore": ":options opções selecionadas",
      "noResults": "Nenhuma opção encontrada",
      "noOptions": "A lista está vazia"
    },
    "defaultMessage": "Campo inválido",
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
    "accepted": "O campo :attribute deverá ser aceite.",
    "active_url": "O campo :attribute não contém um URL válido.",
    "after": "O campo :attribute deverá conter uma data posterior a :date.",
    "after_or_equal": "O campo :attribute deverá conter uma data posterior ou igual a :date.",
    "alpha": "O campo :attribute deverá conter apenas letras.",
    "alpha_dash": "O campo :attribute deverá conter apenas letras, números e traços.",
    "alpha_num": "O campo :attribute deverá conter apenas letras e números .",
    "array": "O campo :attribute deverá conter uma coleção de elementos.",
    "before": "O campo :attribute deverá conter uma data anterior a :date.",
    "before_or_equal": "O Campo :attribute deverá conter uma data anterior ou igual a :date.",
    "between": {
      "numeric": "O campo :attribute deverá ter um valor entre :min - :max.",
      "file": "O campo :attribute deverá ter um tamanho entre :min - :max kilobytes.",
      "string": "O campo :attribute deverá conter entre :min - :max caracteres.",
      "array": "O campo :attribute deverá conter entre :min - :max elementos."
    },
    "boolean": "O campo :attribute deverá conter o valor verdadeiro ou falso.",
    "confirmed": "A confirmação para o campo :attribute não coincide.",
    "date": "O campo :attribute não contém uma data válida.",
    "date_format": "A data indicada para o campo :attribute não respeita o formato :format.",
    "date_equals": "O campo :attribute tem de ser uma data igual a :date.",
    "different": "Os campos :attribute e :other deverão conter valores diferentes.",
    "digits": "O campo :attribute deverá conter :digits caracteres.",
    "digits_between": "O campo :attribute deverá conter entre :min a :max caracteres.",
    "dimensions": "O campo :attribute deverá conter uma dimensão de imagem válida.",
    "distinct": "O campo :attribute contém um valor duplicado.",
    "email": "O campo :attribute não contém um endereço de e-mail válido.",
    "exists": "O valor selecionado para o campo :attribute é inválido.",
    "file": "O campo :attribute deverá conter um ficheiro.",
    "filled": "É obrigatória a indicação de um valor para o campo :attribute.",
    "gt": {
      "numeric": "O campo :attribute tem de ser maior do que :value.",
      "file": "O campo :attribute tem de ter mais de :value quilobytes.",
      "string": "O campo :attribute tem de ter mais de :value caracteres.",
      "array": "O campo :attribute tem de ter mais de :value itens."
    },
    "gte": {
      "numeric": "O campo :attribute tem de ser maior ou igual a :value.",
      "file": "O campo :attribute tem de ter :value quilobytes ou mais.",
      "string": "O campo :attribute tem de ter :value caracteres ou mais.",
      "array": "O campo :attribute tem de ter :value itens ou mais."
    },
    "image": "O campo :attribute deverá conter uma imagem.",
    "in": "O campo :attribute não contém um valor válido.",
    "in_array": "O campo :attribute não existe em :other.",
    "integer": "O campo :attribute deverá conter um número inteiro.",
    "ip": "O campo :attribute deverá conter um IP válido.",
    "ipv4": "O campo :attribute deverá conter um IPv4 válido.",
    "ipv6": "O campo :attribute deverá conter um IPv6 válido.",
    "json": "O campo :attribute deverá conter um texto JSON válido.",
    "lt": {
      "numeric": "O campo :attribute tem de ser inferior a :value.",
      "file": "O campo :attribute tem de ter menos de :value quilobytes.",
      "string": "O campo :attribute tem de ter menos de :value caracteres.",
      "array": "O campo :attribute tem de ter menos de :value itens."
    },
    "lte": {
      "numeric": "O campo :attribute tem de ser inferior ou igual a :value.",
      "file": "O campo :attribute tem de ter :value quilobytes ou menos.",
      "string": "O campo :attribute tem de ter :value caracteres ou menos.",
      "array": "O campo :attribute não pode ter mais de :value itens."
    },
    "max": {
      "numeric": "O campo :attribute não deverá conter um valor superior a :max.",
      "file": "O campo :attribute não deverá ter um tamanho superior a :max kilobytes.",
      "string": "O campo :attribute não deverá conter mais de :max caracteres.",
      "array": "O campo :attribute não deverá conter mais de :max elementos."
    },
    "mimes": "O campo :attribute deverá conter um ficheiro do tipo: :values.",
    "mimetypes": "O campo :attribute deverá conter um ficheiro do tipo: :values.",
    "min": {
      "numeric": "O campo :attribute deverá ter um valor superior ou igual a :min.",
      "file": "O campo :attribute deverá ter no mínimo :min kilobytes.",
      "string": "O campo :attribute deverá conter no mínimo :min caracteres.",
      "array": "O campo :attribute deverá conter no mínimo :min elementos."
    },
    "not_in": "O campo :attribute contém um valor inválido.",
    "not_regex": "O formato de :attribute não é válido",
    "numeric": "O campo :attribute deverá conter um valor numérico.",
    "present": "The :attribute field must be present.",
    "regex": "O formato do valor para o campo :attribute é inválido.",
    "required": "É obrigatória a indicação de um valor para o campo :attribute.",
    "required_if": "The :attribute field is required when :other is :value.",
    "required_unless": "The :attribute field is required unless :other is in :values.",
    "required_with": "The :attribute field is required when :values is present.",
    "required_with_all": "The :attribute field is required when :values are present.",
    "required_without": "The :attribute field is required when :values is not present.",
    "required_without_all": "The :attribute field is required when none of :values are present.",
    "same": "Os campos :attribute e :other deverão conter valores iguais.",
    "size": {
      "numeric": "O campo :attribute deverá conter o valor :size.",
      "file": "O campo :attribute deverá ter o tamanho de :size kilobytes.",
      "string": "O campo :attribute deverá conter :size caracteres.",
      "array": "O campo :attribute deverá conter :size elementos."
    },
    "string": "O campo :attribute deverá conter texto.",
    "timezone": "O campo :attribute deverá ter um fuso horário válido.",
    "unique": "O valor indicado para o campo :attribute já se encontra registado.",
    "uploaded": "The :attribute failed to upload.",
    "url": "O formato do URL indicado para o campo :attribute é inválido.",
    "uuid": ":attribute tem de ser um UUID válido.",
    "remote": "The :attribute field is invalid."
  }
}