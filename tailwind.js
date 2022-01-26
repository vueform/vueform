const svgToDataUri = require('mini-svg-data-uri')
const Color = require('color')
const plugin = require('tailwindcss/plugin')

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  l       The lightness
 * @return  Array           The RGB representation
 */
const hslToRgba = function (hsl, alpha) {
  var matches = hsl.match(/hsl\(([0-9\.]+),\s?([0-9\.]+)%,\s?([0-9\.]+)%\)/)

  var h = matches[1] / 360
  var s = matches[2] / 100
  var l = matches[3] / 100

  var r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;

    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return `rgba(${Math.round(r*255)},${Math.round(g*255)},${Math.round(b*255)},${alpha})`;
}

const upperFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const vueform = plugin(({ theme, addBase, addUtilities, addVariant, e, prefix }) => {
  const rules = [
    {
      base: [
        "[type='text']",
        "[type='email']",
        "[type='url']",
        "[type='password']",
        "[type='number']",
        "[type='date']",
        "[type='datetime-local']",
        "[type='month']",
        "[type='search']",
        "[type='tel']",
        "[type='time']",
        "[type='week']",
        "[type='checkbox']",
        "[type='radio']",
        '[multiple]',
        'textarea',
        'select',
      ],
      styles: {
        appearance: 'none',
        fontSize: theme('fontSize.base'),
        lineHeight: theme('lineHeight.normal'),
        '&:focus': {
          outline: 'none',
        },
        '&::-webkit-search-decoration': {
          '-webkit-appearance': 'none',
        },
        '&::-webkit-search-cancel-button': {
          '-webkit-appearance': 'none',
        },
        '&::-webkit-search-results-button': {
          '-webkit-appearance': 'none',
        },
        '&::-webkit-search-results-decoration': {
          '-webkit-appearance': 'none',
        },
      }
    },
    {
      base: ['input::placeholder', 'textarea::placeholder'],
      styles: {
        color: theme('form.placeholderColor'),
        opacity: theme('form.placeholderOpacity'),
      },
    },
    {
      base: ['select'],
      styles: {
        'background-image': `url("${svgToDataUri(
          `<svg viewBox="0 0 320 512" fill="${theme(
            'colors.gray.500'
          )}" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>`
        )}")`,
        'background-position': `right ${theme('form.pxInput')} center`,
        'background-repeat': `no-repeat`,
        'background-size': `10px`,
        'color-adjust': `exact`,
      },
    },
    {
      base: ['[multiple]'],
      styles: {
        'background-image': 'initial',
        'background-position': 'initial',
        'background-repeat': 'unset',
        'background-size': 'initial',
        'color-adjust': 'unset',
      },
    },
    {
      base: [':root'],
      styles: {
        '--vf-ring-shadow': theme('form.ring')
          ? `0px 0px 0px ${theme('form.ringWidth')} ${Color(theme('form.primary')).alpha(theme('form.ringOpacity')).toString()}`
          : 'none',
        '--vf-ring-border-color': theme('form.ring')
          ? theme('form.primary')
          : theme('form.borderColor') + ' !important'
      }
    }
  ]
  
  addBase(rules.map((rule) => {
    return { [rule.base]: rule.styles }
  }))

  const pms = [
    'p', 'py', 'px', 'pl', 'pr', 'pt', 'pb',
    'm', 'my', 'mx', 'ml', 'mr', 'mt', 'mb',
  ]

  const sizes = ['', 'sm', 'lg']

  let plain = {}
  let withFloating = {}

  sizes.forEach((s) => {
    let suffix = s?'-'+s:''
    let size = s.toUpperCase()

    // font-size
    if (s) {
      plain[`.form-text${suffix}`] = {
        fontSize: theme(`form.fontSize${size}`)[0],
        lineHeight: theme(`form.fontSize${size}`)[1].lineHeight,
        letterSpacing: theme(`form.fontSize${size}`)[1].letterSpacing || 0,
      }
    }

    // grid
    plain[`.form-row${suffix}`] = {
      marginLeft: `calc(${theme(`form.gutter${size}`)} * -1)`,
      marginRight: `calc(${theme(`form.gutter${size}`)} * -1)`,
    }

    plain[`.form-row-group${suffix}`] = {
      marginLeft: `calc(${theme(`form.gutter${size}`)} * -0.5)`,
      marginRight: `calc(${theme(`form.gutter${size}`)} * -0.5)`,
      '& > .form-col': {
        paddingLeft: `calc(${theme(`form.gutter${size}`)} * 0.5)`,
        paddingRight: `calc(${theme(`form.gutter${size}`)} * 0.5)`,
      }
    }

    plain[`.form-col${suffix}`] = {
      paddingLeft: theme(`form.gutter${size}`),
      paddingRight: theme(`form.gutter${size}`),
    }

    // border radius
    plain[`.form-rounded${suffix}`] = {
      borderRadius: theme(`form.borderRadius${size}`),
    }

    plain[`.form-rounded-t${suffix}`] = {
      borderTopLeftRadius: theme(`form.borderRadius${size}`),
      borderTopRightRadius: theme(`form.borderRadius${size}`),
    }

    plain[`.form-rounded-r${suffix}`] = {
      borderTopRightRadius: theme(`form.borderRadius${size}`),
      borderBottomRightRadius: theme(`form.borderRadius${size}`),
    }

    plain[`.form-rounded-b${suffix}`] = {
      borderBottomLeftRadius: theme(`form.borderRadius${size}`),
      borderBottomRightRadius: theme(`form.borderRadius${size}`),
    }

    plain[`.form-rounded-l${suffix}`] = {
      borderTopLeftRadius: theme(`form.borderRadius${size}`),
      borderBottomLeftRadius: theme(`form.borderRadius${size}`),
    }

    // paddings, margins
    pms.forEach((pm) => {
      let type = pm.match(/m/) ? 'margin' : 'padding'
      let sides = ['top', 'right', 'bottom', 'left']

      if (pm.match(/y/)) {
        sides = ['top', 'bottom']
      } else if (pm.match(/x/)) {
        sides = ['left', 'right']
      } else if (pm.match(/l/)) {
        sides = ['left']
      } else if (pm.match(/r/)) {
        sides = ['right']
      } else if (pm.match(/t/)) {
        sides = ['top']
      } else if (pm.match(/b/)) {
        sides = ['bottom']
      }

      let Y = `${theme(`form.pyInput${size}`)}`
      let X = `${theme(`form.pxInput${size}`)}`
      let YBorder = `calc(${theme('form.borderWidth')} + ${theme(`form.pyInput${size}`)})`
      let XBorder = `calc(${theme('form.borderWidth')} + ${theme(`form.pxInput${size}`)})`
      let key = `.form-${pm}-input${suffix}`
      let keyBorder = `.form-${pm}-input-border${suffix}`

      plain[key] = {}
      plain[keyBorder] = {}

      if (sides.length === 4) {
        plain[key][type] = `${Y} ${X}`
        plain[keyBorder][type] = `${YBorder} ${XBorder}`
      } else {
        sides.forEach((side) => {
          plain[key][`${type}${upperFirst(side)}`] = ['top', 'bottom'].indexOf(side) !== -1 ? Y : X
          plain[keyBorder][`${type}${upperFirst(side)}`] = ['top', 'bottom'].indexOf(side) !== -1 ? YBorder : XBorder
        })
      }
    })

    plain[`.-form-mb-input${suffix}`] = {
      marginBottom: `-${theme(`form.pyInput${size}`)}`,
    }

    withFloating[`.form-p-input-floating${suffix}`] = {
      paddingLeft: theme(`form.pxInput${size}`),
      paddingRight: theme(`form.pxInput${size}`),
      paddingTop: `calc(${theme(`form.pyInput${size}`)} + (${theme(`fontSize`)['0.5xs'][0]} / 2))`,
      paddingBottom: `calc(${theme(`form.pyInput${size}`)} - (${theme(`fontSize`)['0.5xs'][0]} / 2))`,
    }

    // top, right, bottom, left
    let sides = ['top', 'right', 'bottom', 'left']
    sides.forEach((side) => {
      plain[`.form-${side}-input${suffix}`] = {
        [side]: ['top', 'bottom'].indexOf(side) !== -1
          ? theme(`form.pyInput${size}`)
          : theme(`form.pxInput${size}`)
      }
      plain[`.form-${side}-input-border${suffix}`] = {
        [side]: `calc(${theme('form.borderWidth')} + ${['top', 'bottom'].indexOf(side) !== -1
          ? theme(`form.pyInput${size}`)
          : theme(`form.pxInput${size}`)})`
      }
    })

    plain[`.form-p-button${suffix}`] = {
      padding: `${theme(`form.pyButton${size}`)} ${theme(`form.pxButton${size}`)}`
    }

    plain[`.form-pl-input-y${suffix}`] = {
      paddingLeft: theme(`form.pyInput${size}`)
    }

    // gutters
    let gutters = ['', '0.5', '2']
    sides = [
      'mt', 'mr', 'mb', 'ml',
      'top', 'right', 'bottom', 'left'
    ]

    sides.forEach((side) => {
      gutters.forEach((gutterSize) => {
        let attr = {
          mt: 'marginTop',
          mr: 'marginRight',
          mb: 'marginBottom',
          ml: 'marginLeft',
          top: 'top',
          right: 'right',
          bottom: 'bottom',
          left: 'left',
        }

        plain[`.${e(`form-${side}-${gutterSize}gutter${suffix}`)}`] = {
          [`${attr[side]}`]: `calc(${theme(`form.gutter${size}`)} * ${gutterSize||1})`
        }
        
        plain[`.${e(`-form-${side}-${gutterSize}gutter${suffix}`)}`] = {
          [`${attr[side]}`]: `calc(${theme(`form.gutter${size}`)} * (-${gutterSize||1}))`
        }
      })
    })

    plain[`.form-w-checkbox${suffix}`] = {
      width: theme(`form.checkboxSize${size}`),
    }

    plain[`.form-w-gallery${suffix}`] = {
      width: theme(`form.gallerySize${size}`),
    }

    plain[`.form-w-input-height${suffix}`] = {
      width: theme(`form.inputMinHeight${size}`),
    }

    plain[`.form-h-checkbox${suffix}`] = {
      height: theme(`form.checkboxSize${size}`),
    }

    plain[`.form-h-gallery${suffix}`] = {
      height: theme(`form.gallerySize${size}`),
    }

    plain[`.form-h-input-height${suffix}`] = {
      height: theme(`form.inputMinHeight${size}`),
    }

    plain[`.form-h-input-height-inner${suffix}`] = {
      height: `calc(${theme(`form.inputMinHeight${size}`)} - (${theme('form.borderWidth')} * 2))`,
    }

    plain[`.form-min-h-input-height${suffix}`] = {
      minHeight: theme(`form.inputMinHeight${size}`),
    }

    plain[`.form-left-input-height${suffix}`] = {
      left: theme(`form.inputMinHeight${size}`),
    }

    plain[`.form-bg-spinner-white${suffix}`] = {
      position: 'relative',
      color: 'transparent',
      '&::after': {
        content: '""',
        position: 'absolute',
        left: '50%',
        top: '50%',
        display: 'inline-block',
        width: `calc(${theme(`form.inputMinHeight${size}`)} * 0.4)`,
        height: `calc(${theme(`form.inputMinHeight${size}`)} * 0.4)`,
        marginLeft: `calc(${theme(`form.inputMinHeight${size}`)} * (-0.2))`,
        marginTop: `calc(${theme(`form.inputMinHeight${size}`)} * (-0.2))`,
        animation: 'spin 1s linear infinite',
        maskImage: theme('maskImage.form-spinner'),
        maskPosition: 'center center',
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        backgroundColor: '#FFFFFF'
      }
    }
  })

  plain = Object.assign({}, plain, {
    '.form-bg-disabled': {
      backgroundColor: theme('form.bgDisabled'),
    },
    '.form-border-b-color': {
      borderBottomColor: `${theme('form.borderColor')}`
    },
    '.form-border-primary': {
      borderColor: `${theme('form.primary')}`
    },
    '.form-text-primary': {
      color: theme('form.primary'),
    },
    '.form-text-disabled': {
      color: theme('form.colorDisabled'),
    },
    '.form-hide-empty-img': {
      '&[src=""], &[src="data:"], &:not([src])': {
        opacity: 0,
      }
    },

    // Info
    '.form-bg-info': {
      '&::before': {
        content: '""',
        maskImage: theme('maskImage.form-info'),
        maskPosition: 'center center',
        maskRepeat: 'no-repeat',
        maskSize: 'contain',
        backgroundColor: theme('colors.gray.400'),
        width: '0.875rem',
        height: '0.875rem',
        display: 'inline-block',
      }
    },

    // Steps
    '.form-step': {
      display: 'block',
      position: 'relative',
      whiteSpace: 'nowrap',
      flex: '1 1',
      textAlign: 'center',
      padding: '0 10px',
      '&:nth-child(1):before, &:nth-child(1) a:before, &:nth-child(1) a:after': { zIndex: 10 },
      '&:nth-child(2):before, &:nth-child(2) a:before, &:nth-child(2) a:after': { zIndex: 9 },
      '&:nth-child(3):before, &:nth-child(3) a:before, &:nth-child(3) a:after': { zIndex: 8 },
      '&:nth-child(4):before, &:nth-child(4) a:before, &:nth-child(4) a:after': { zIndex: 7 },
      '&:nth-child(5):before, &:nth-child(5) a:before, &:nth-child(5) a:after': { zIndex: 6 },
      '&:nth-child(6):before, &:nth-child(6) a:before, &:nth-child(6) a:after': { zIndex: 5 },
      '&:nth-child(7):before, &:nth-child(7) a:before, &:nth-child(7) a:after': { zIndex: 4 },
      '&:nth-child(8):before, &:nth-child(8) a:before, &:nth-child(8) a:after': { zIndex: 3 },
      '&:before': {
        content: '" "',
        display: 'inline-block',
        height: '4px',
        background: theme('form.primary'),
        position: 'absolute',
        top: '-12px',
        left: '-1px',
        right: '50%',
        transition: '.3s',
      },
      '&:after': {
        content: '" "',
        display: 'inline-block',
        height: '4px',
        background: theme('form.primary'),
        position: 'absolute',
        top: '-12px',
        left: '50%',
        right: '0',
        transition: '.3s',
      },
      a: {
        textDecoration: 'none !important',
        '&:hover, &:focus, &:active': {
          textDecoration: 'none !important',
        },
        '&:before': {
          content: '" "',
          display: 'inline-block',
          width: '16px',
          height: '16px',
          position: 'absolute',
          background: theme('form.primary'),
          borderRadius: '50%',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '-18px',
          zIndex: '3',
        },
        '&:after': {
          content: '" "',
          display: 'inline-block',
          width: '8px',
          height: '8px',
          position: 'absolute',
          background: '#ffffff',
          borderRadius: '50%',
          left: 'calc(50% - 4px)',
          transform: 'scale(0)',
          top: '-14px',
          zIndex: '4',
          transition: 'transform .3s ease-in-out',
        },
      },
      '&:first-of-type': {
        paddingLeft: '0',
        textAlign: 'left',
        '&:before': {
          display: 'none',
        },
        '&:after': {
          left: '0',
        },
        a: {
          '&:before': {
            left: '0',
            transform: 'none',
          },
          '&:after': {
            left: '4px',
            transform: 'scale(0)',
          },
        }
      },
      '&:last-of-type': {
        paddingRight: '0',
        textAlign: 'right',
        '&:after': {
          display: 'none',
        },
        '&:before': {
          right: '0',
        },
        a: {
          '&:before': {
            right: '0',
            left: 'auto',
            left: 'initial',
            transform: 'none',
          },
          '&:after': {
            left: 'auto',
            left: 'initial',
            transform: 'scale(0)',
            right: '4px',
          },
        },
      },
      '&.form-step-disabled': {
        '&:before': {
          background: theme('colors.gray.300'),
          left: '-100%',
        },
        a: {
          color: theme('colors.gray.500'),
          '&:before': {
            background: theme('colors.gray.300'),
          }
        },
      },
      '&.form-step-completed': {
        a: {
          '&:after': {
            maskImage: theme('maskImage.form-check-solid'),
            backgroundColor: '#FFFFFF',
            maskPosition: '0px 0px',
            maskSize: '8px 8px',
            maskRepeat: 'no-repeat',
            borderRadius: '0',
            transform: 'scale(1)',
          }
        },
      },
      '&.form-step-active': {
        a: {
          '&:after': {
            maskImage: 'none',
            background: '#ffffff',
            top: '-14px',
            transform: 'scale(1)',
            borderRadius: '50%',
          }
        },
      },
      '&.has-errors': {
        a: {
          color: theme('colors.red.500'),
          '&:before': {
            backgroundColor: theme('colors.red.500'),
          },
          '&:after': {
            maskImage: theme('maskImage.form-exclamation-solid'),
            maskSize: '8px 8px',
            maskPosition: '0px 0px',
            maskRepeat: 'no-repeat',
            backgroundColor: '#FFFFFF',
            width: '8px',
            height: '8px',
            top: '-14px',
            borderRadius: '0',
          },
        }
      },
      '&.form-step-pending': {
        a: {
          '&:after': {
            animation: '1s linear infinite step-loading',
            background: '#ffffff',
            top: '-14px',
            borderRadius: '50%',
          }
        }
      }
    },
    '@keyframes step-loading': {
      '0%': {
        transform: 'scale(0.5)'
      },
      '20%': {
        transform: 'scale(1.2)'
      },
      '100%': {
        transform: 'scale(0.5)'
      },
    },

    '.cursor-grab': {
      cursor: 'grab',
    },
    '.user-select-none': {
      userSelect: 'none',
    },

    // Slider
    '.touch-none': {
      touchAction: 'none',
    },
    '.tap-highlight-transparent': {
      '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
    },
    '.touch-callout-none': {
      '-webkit-touch-callout': 'none',
    },
    '.will-change-transform': {
      willChange: 'transform',
    },
    '.transform-origin-0': {
      transformOrigin: '0 0',
    },
    '.transform-style-flat': {
      '-webkit-transform-style': 'preserve-3d',
      transformStyle: 'flat',
    },
    '.cursor-inherit': {
      cursor: 'inherit',
    },
    '.cursor-ew-resize': {
      cursor: 'ew-resize',
    },
    [`.slider-vertical .${e('v:cursor-ns-resize')}`]: {
      cursor: 'ns-resize',
    },
    [`.slider-vertical .${e('v:arrow-right')}:before`]: {
      content: '""',
      position: 'absolute',
      right: '-10px',
      top: '50%',
      width: '0',
      height: '0',
      border: '5px solid transparent',
      borderLeftColor: 'inherit',
      transform: 'translateY(-50%)',
    },
    [`.slider-vertical .${e('v:arrow-left')}:before`]: {
      content: '""',
      position: 'absolute',
      left: '-10px',
      top: '50%',
      width: '0',
      height: '0',
      border: '5px solid transparent',
      borderRightColor: 'inherit',
      transform: 'translateY(-50%)',
    },
    [`.slider-horizontal .${e('h:arrow-bottom')}:before`]: {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      width: '0',
      height: '0',
      border: '5px solid transparent',
      borderTopColor: 'inherit',
      transform: 'translate(-50%)',
    },
    [`.slider-horizontal .${e('h:arrow-top')}:before`]: {
      content: '""',
      position: 'absolute',
      top: '-10px',
      left: '50%',
      width: '0',
      height: '0',
      border: '5px solid transparent',
      borderBottomColor: 'inherit',
      transform: 'translate(-50%)',
    },

    // Mask things
    '.mask-bg': {
      maskRepeat: 'no-repeat',
      maskPosition: 'center center',
      maskSize: 'contain',
    },
    [`.${e('mask-size-2.5')}`]: {
      maskSize: '0.625rem 0.625rem',
    },
    [`.${e('mask-size-2.8')}`]: {
      maskSize: '0.7rem 0.7rem',
    },
    [`.${e('mask-size-3')}`]: {
      maskSize: '0.75rem 0.75rem',
    },
  })

  const maskImages = theme('maskImage')

  Object.keys(maskImages).forEach((name) => {
    plain[`.mask-${name}`] = {
      maskImage: maskImages[name]
    }
  })

  const checkable = {
    '.form-bg-primary': {
      backgroundColor: `rgba(${Color(theme('form.primary')).red()},${Color(theme('form.primary')).green()},${Color(theme('form.primary')).blue()},var(--tw-bg-opacity, 1))`
    },
    '.form-border': {
      border: `${theme('form.borderWidth')} solid`
    },
    '.border-0': {
      border: theme('borderWidth.0')
    },
    '.form-border-color': {
      borderColor: `${theme('form.borderColor')}`
    },
    '.form-bg-check-white': {
      '&::after': {
        content: '""',
        maskImage: theme('maskImage.form-check'),
        maskPosition: 'center center',
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        backgroundColor: '#FFFFFF',
        display: 'block',
        width: '100%',
        height: '100%',
      }
    },
    '.form-bg-radio-white': {
      '&::after': {
        content: '""',
        maskImage: theme('maskImage.form-radio'),
        maskPosition: 'center center',
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        backgroundColor: '#FFFFFF',
        display: 'block',
        width: '100%',
        height: '100%',
      }
    },
  }

  const focusable = {
    '.form-ring': {
      boxShadow: 'var(--vf-ring-shadow)',
      borderColor: 'var(--vf-ring-border-color)',
    },
  }

  const hoverable = {
    '.form-bg-primary-darker': {
      backgroundColor: hslToRgba(Color(theme('form.primary')).darken(0.1).toString(), 'var(--tw-bg-opacity, 1)')
    },
  }

  const groupHoverable = {
    '.form-hidden': {
      display: 'none',
    },
    '.form-inline-block': {
      display: 'inline',
    },
    '.form-visible': {
      visibility: 'visible',
    },
    '.form-invisible': {
      visibility: 'hidden',
    },
  }

  const activable = {
    '.cursor-grabbing': {
      cursor: 'grabbing',
    },
  }

  const disableable = {
    '.form-bg-disabled-darker': {
      backgroundColor: Color(theme('form.bgDisabled')).darken(0.3).toString(),
    },
    '.form-border-disabled-darker': {
      borderColor: Color(theme('form.bgDisabled')).darken(0.3).toString(),
    },
  }

  const important = {
    '.form-bg-disabled-darker': {
      backgroundColor: Color(theme('form.bgDisabled')).darken(0.3).toString(),
    },
    '.form-border-b-white': {
      borderBottomColor: '#ffffff',
    },
  }

  const addonBefore = {
    '.form-rounded-l-none': { 
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    '.form-border-l-none': { 
      borderLeft: 0,
    },
  }

  const addonAfter = {
    '.form-rounded-r-none': { 
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    '.form-border-r-none': { 
      borderRight: 0,
    },
  }

  addUtilities(plain)
  addUtilities(hoverable, ['hover'])
  addUtilities(groupHoverable, ['group-hover'])
  addUtilities(checkable, ['checked'])
  addUtilities(focusable, ['focus'])
  addUtilities(activable, ['active'])
  addUtilities(disableable, ['disabled'])
  addUtilities(important, ['important'])
  addUtilities(addonBefore, ['addon-before'])
  addUtilities(addonAfter, ['addon-after'])
  addUtilities(withFloating, ['with-floating'])

  addVariant('h', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `${prefix('.slider-horizontal')} .${e(`h${separator}${className}`)}`
    })
  })

  addVariant('v', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `${prefix('.slider-vertical')} .${e(`v${separator}${className}`)}`
    })
  })

  addVariant('merge-h', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `${prefix('.slider-horizontal')} ${prefix('.slider-origin')} > .${e(`merge-h${separator}${className}`)}`
    })
  })

  addVariant('merge-v', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `${prefix('.slider-vertical')} ${prefix('.slider-origin')} > .${e(`merge-v${separator}${className}`)}`
    })
  })

  addVariant('h-txt-rtl', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `${prefix('.slider-horizontal')}${prefix('.slider-txt-rtl')} .${e(`h-txt-rtl${separator}${className}`)}`
    })
  })

  addVariant('tap', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `${prefix('.slider-state-tap')} .${e(`tap${separator}${className}`)}`
    })
  })

  addVariant('disabled', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `[disabled] .${e(`disabled${separator}${className}`)}, .${e(`disabled${separator}${className}`)}[disabled]`
    })
  })

  addVariant('hover-not-disabled', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`hover-not-disabled${separator}${className}`)}:not([disabled]):hover`
    })
  })

  addVariant('tt-focus', ({ container, separator }) => {
    container.walkRules(rule => {
      rule.selector = `${prefix('.slider-tooltip-focus')}:not(${prefix('.slider-focused')}) .${e(`tt-focus${separator}${rule.selector.slice(1)}`)}`
      rule.walkDecls(decl => {
        decl.important = true
      })
    })
  })

  addVariant('tt-focused', ({ container, separator }) => {
    container.walkRules(rule => {
      rule.selector = `${prefix('.slider-tooltip-focus')}${prefix('.slider-focused ')}.${e(`tt-focused${separator}${rule.selector.slice(1)}:not(${prefix('_____')}.slider-tooltip-hidden)`)}`
      rule.walkDecls(decl => {
        decl.important = true
      })
    })
  })

  addVariant('tt-drag', ({ container, separator }) => {
    container.walkRules(rule => {
      rule.selector = `${prefix('.slider-tooltip-drag')}:not(${prefix('.slider-state-drag')}) .${e(`tt-drag${separator}${rule.selector.slice(1)}`)}`
      rule.walkDecls(decl => {
        decl.important = true
      })
    })
  })

  addVariant('tt-dragging', ({ container, separator }) => {
    container.walkRules(rule => {
      rule.selector = `${prefix('.slider-tooltip-drag')}${prefix('.slider-state-drag')} .${e(`tt-dragging${separator}${rule.selector.slice(1)}:not(${prefix('_____')}.slider-tooltip-hidden)`)},
                        ${prefix('.slider-tooltip-drag')} ${prefix('.slider-active')} .${e(`tt-dragging${separator}${rule.selector.slice(1)}`)}`
      rule.walkDecls(decl => {
        decl.important = true
      })
    })
  })

  addVariant('important', ({ container }) => {
    container.walkRules(rule => {
      rule.selector = `.\\!${rule.selector.slice(1)}`
      rule.walkDecls(decl => {
        decl.important = true
      })
    })
  })

  addVariant('addon-before', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `${prefix('.form-addon-before')} ~ .${e(`addon-before${separator}${className}`)},
              ${prefix('.form-addon-before')} ~ div .${e(`addon-before${separator}${className}`)},
              ${prefix('.form-addon-before')} ~ span .${e(`addon-before${separator}${className}`)}`
    })
  })

  addVariant('addon-after', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `${prefix('.form-addon-after')} ~ .${e(`addon-after${separator}${className}`)},
              ${prefix('.form-addon-after')} ~ div .${e(`addon-after${separator}${className}`)},
              ${prefix('.form-addon-after')} ~ span .${e(`addon-after${separator}${className}`)}`
    })
  })

  addVariant('with-floating', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `${prefix('.label-floating')} ~ .${e(`with-floating${separator}${className}`)},
              ${prefix('.label-floating')} ~ div .${e(`with-floating${separator}${className}`)},
              ${prefix('.label-floating')} ~ span .${e(`with-floating${separator}${className}`)}`
    })
  })

  addVariant('ghost', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `${prefix('.sortable-ghost')}.${e(`ghost${separator}${className}`)}`
    })
  })
}, {
  variants: {
    extend: {
      backgroundColor: ['disabled', 'hover-not-disabled'],
      cursor: ['disabled', 'important'],
      borderColor: ['disabled'],
      height: ['h', 'v'],
      width: ['h', 'v'],
      inset: ['h', 'v', 'h-txt-rtl', 'merge-h', 'merge-v'],
      translate: ['h', 'v', 'merge-h', 'merge-v'],
      transitionProperty: ['tap'],
      transitionDuration: ['tap'],
      display: ['tt-focus', 'tt-focused', 'tt-drag', 'tt-dragging'],
      opacity: ['ghost', 'disabled'],
      pointerEvents: ['disabled'],
      borderRadius: ['important'],
      borderWidth: ['important'],
    }
  },
  theme: {
    form: (theme) => ({
      primary: theme('colors.green.500'),

      fontSizeSM: theme('fontSize.sm'),
      fontSizeLG: theme('fontSize.base'),

      gutter: theme('width.4'),
      gutterSM: theme('width.2'),
      gutterLG: theme('width.5'),
      inputMinHeight: theme('height')['9.5'],
      inputMinHeightSM: theme('height')['8.5'],
      inputMinHeightLG: theme('height')['11.5'],

      bgDisabled: theme('borderColor.gray.200'),
      colorDisabled: theme('borderColor.gray.400'),

      placeholderColor: theme('placeholderColor.gray.500'),
      placeholderOpacity: theme('placeholderOpacity.100'),
      
      borderWidth: theme('borderWidth.DEFAULT'),
      borderColor: theme('borderColor.gray.300'),
      borderRadius: theme('borderRadius.DEFAULT'),
      borderRadiusSM: theme('borderRadius.DEFAULT'),
      borderRadiusLG: theme('borderRadius.DEFAULT'),

      ring: true,
      ringWidth: theme('ringWidth.2'),
      ringOpacity: theme('ringOpacity.40'),

      pyInput: theme('padding')['1.5'],
      pyInputSM: theme('padding')['1.5'],
      pyInputLG: theme('padding')['2.5'],
      pxInput: theme('padding.3'),
      pxInputSM: theme('padding')['2'],
      pxInputLG: theme('padding')['3.5'],
      pyButton: theme('padding')['1.75'],
      pyButtonSM: theme('padding')['1.75'],
      pyButtonLG: theme('padding')['2.75'],
      pxButton: theme('padding.4'),
      pxButtonSM: theme('padding')['3'],
      pxButtonLG: theme('padding.5'),

      checkboxSize: theme('width.4'),
      checkboxSizeSM: theme('width')['3.5'],
      checkboxSizeLG: theme('width.4'),
      gallerySize: theme('width.24'),
      gallerySizeSM: theme('width.20'),
      gallerySizeLG: theme('width.28'),

      dateHeadBg: theme('colors.gray.100'),
      dateHeadColor: theme('colors.gray.700'),
    }),
    extend: {
      zIndex: {
        1: 1,
      },
      margin: {
        '0.75': '0.1875rem',
        '1\/10': '10%',
      },
      padding: {
        '1.75': '0.4375rem',
        '2.75': '0.6875rem',
      },
      width: {
        '3.5': '0.875rem',
        '4.5': '1.125rem',
        '1\/10': '10%',
      },
      height: {
        '3.5': '0.875rem',
        '4.5': '1.125rem',
        '8.5': '2.125rem',
        '9.5': '2.375rem',
        '11.5': '2.875rem',
        '0.75': '0.1875rem',
        '1\/10': '10%',
      },
      minWidth: {
        5: '1.25rem',
      },
      inset: {
        '-1.25': '-0.3125rem'
      },
      boxShadow: {
        slider: '0.5px 0.5px 2px 1px rgba(0,0,0,.32)',
        'slider-active': '0.5px 0.5px 2px 1px rgba(0,0,0,.42)',
      },
      lineHeight: {
        px: '1px',
      },
      fontSize: {
        '0.5xs': ['0.6875rem', '0.875rem'],
        '0.5sm': ['0.8125rem', '1.125rem'],
      },
      maskImage: (theme) => ({
        'form-radio': `url("${svgToDataUri(
          `<svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`,
        )}")`,
        'form-check': `url("${svgToDataUri(
          `<svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`,
        )}")`,
        'form-check-solid': `url("${svgToDataUri(
          `<svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>`,
        )}")`,
        'form-spinner': `url("${svgToDataUri(
          `<svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z"></path></svg>`,
        )}")`,
        'form-caret': `url("${svgToDataUri(
          `<svg viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>`,
        )}")`,
        'form-exclamation-solid': `url("${svgToDataUri(
          `<svg viewBox="0 0 192 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"></path></svg>`,
        )}")`,
        'form-map-marker': `url("${svgToDataUri(
          `<svg viewBox="0 0 384 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>`,
        )}")`,
        'form-remove': `url("${svgToDataUri(
          `<svg viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>`,
        )}")`,
        'form-remove-light': `url("${svgToDataUri(
          `<svg viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>`,
        )}")`,
        'form-sort-handle': `url("${svgToDataUri(
          `<svg viewBox="0 0 11 9" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z"></path></svg>`,
        )}")`,
        'form-arrows': `url("${svgToDataUri(
          `<svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M337.782 434.704l-73.297 73.782c-4.686 4.686-12.284 4.686-16.971 0l-73.296-73.782c-4.686-4.686-4.686-12.284 0-16.97l7.07-7.07c4.686-4.686 12.284-4.686 16.971 0L239 451.887h1V272H60.113v1l41.224 40.741c4.686 4.686 4.686 12.284 0 16.971l-7.071 7.07c-4.686 4.686-12.284 4.686-16.97 0L3.515 264.485c-4.686-4.686-4.686-12.284 0-16.971l73.782-73.297c4.686-4.686 12.284-4.686 16.971 0l7.071 7.071c4.686 4.686 4.686 12.284 0 16.971L60.113 239v1H240V60.113h-1l-40.741 41.224c-4.686 4.686-12.284 4.686-16.971 0l-7.07-7.071c-4.686-4.686-4.687-12.284 0-16.97l73.297-73.782c4.686-4.686 12.284-4.686 16.971 0l73.297 73.782c4.686 4.686 4.686 12.284 0 16.971l-7.071 7.071c-4.686 4.686-12.284 4.686-16.971 0L273 60.113h-1V240h179.887v-1l-41.224-40.741c-4.686-4.686-4.686-12.284 0-16.971l7.071-7.07c4.686-4.686 12.284-4.686 16.97 0l73.782 73.297c4.687 4.686 4.686 12.284 0 16.971l-73.782 73.297c-4.686 4.686-12.284 4.686-16.97 0l-7.071-7.07c-4.686-4.686-4.686-12.284 0-16.971L451.887 273v-1H272v179.887h1l40.741-41.224c4.686-4.686 12.284-4.686 16.971 0l7.07 7.071c4.686 4.685 4.686 12.283 0 16.97z"></path></svg>`,
        )}")`,
        'form-inbox-in': `url("${svgToDataUri(
          `<svg viewBox="0 0 576 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M560.8 329.8l-94.6-88.7c-2.4-2.3-6.2-2.1-8.5.3L444.1 256c-2.3 2.4-2.1 6.2.3 8.5l59.3 55.6H388.2l-32 64H219.8l-32-64H72.4l59.3-55.6c2.4-2.3 2.5-6.1.3-8.5l-13.7-14.6c-2.3-2.4-6.1-2.5-8.5-.3l-94.6 88.7c-9.7 9-15.2 21.7-15.2 35V464c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48v-99.2c0-13.3-5.5-26-15.2-35zM544 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h120l32 64h176l32-64h120c8.8 0 16 7.2 16 16v96zM416 128h-64V24c0-13.2-10.8-24-24-24h-80c-13.2 0-24 10.8-24 24v104h-64c-28.4 0-42.8 34.5-22.6 54.6l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c20-20.1 5.8-54.6-22.7-54.6zM288 288L160 160h96V32h64v128h96L288 288z"></path></svg>`,
        )}")`,
        'form-info': `url("${svgToDataUri(
          `<svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path></svg>`,
        )}")`,

        'form-trix-bold': `url("${svgToDataUri(
          `<svg viewBox="0 0 384 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z"></path></svg>`,
        )}")`,
        'form-trix-italic': `url("${svgToDataUri(
          `<svg viewBox="0 0 320 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z"></path></svg>`,
        )}")`,
        'form-trix-strike': `url("${svgToDataUri(
          `<svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-180.24 96A43 43 0 0 1 336 356.45 43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64 114.25 114.25 0 0 0-5.34-24.36z"></path></svg>`,
        )}")`,
        'form-trix-link': `url("${svgToDataUri(
          `<svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z"></path></svg>`,
        )}")`,
        'form-trix-heading': `url("${svgToDataUri(
          `<svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z"></path></svg>`,
        )}")`,
        'form-trix-quote': `url("${svgToDataUri(
          `<svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg>`,
        )}")`,
        'form-trix-code': `url("${svgToDataUri(
          `<svg viewBox="0 0 640 304" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M165.9,291.3 L209.4,244.9 C214,240 213.7,232.2 208.6,227.7 L118,148 L208.6,68.3 C213.7,63.8 214.1,56 209.4,51.1 L165.9,4.7 C161.4,-0.1 153.8,-0.4 148.9,4.2 L4.8,139.2 C-0.3,143.9 -0.3,152 4.8,156.7 L148.9,291.8 C153.8,296.4 161.4,296.2 165.9,291.3 Z M493.1,291.9 L637.2,156.8 C642.3,152.1 642.3,144 637.2,139.3 L493.1,4.1 C488.3,-0.4 480.7,-0.2 476.1,4.6 L432.6,51 C428,55.9 428.3,63.7 433.4,68.2 L524,148 L433.4,227.7 C428.3,232.2 427.9,240 432.6,244.9 L476.1,291.3 C480.6,296.2 488.2,296.4 493.1,291.9 Z"></path></svg>`,
        )}")`,
        'form-trix-ul': `url("${svgToDataUri(
          `<svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg>`,
        )}")`,
        'form-trix-ol': `url("${svgToDataUri(
          `<svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z"></path></svg>`,
        )}")`,
        'form-trix-increase-indent': `url("${svgToDataUri(
          `<svg viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M27.31 363.3l96-96a16 16 0 0 0 0-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288zm0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160zM432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>`,
        )}")`,
        'form-trix-decrease-indent': `url("${svgToDataUri(
          `<svg viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M100.682584,116.695158 L4.68258422,212.695158 C-1.56086141,218.942698 -1.56086141,229.067619 4.68258422,235.315158 L100.682584,331.315158 C110.722584,341.335158 127.992584,334.215158 127.992584,319.995158 L127.992584,127.995158 C127.992584,113.685158 110.662584,106.695158 100.682584,116.695158 Z M432,384 L16,384 C7.163444,384 1.082166e-15,391.163444 0,400 L0,432 C1.082166e-15,440.836556 7.163444,448 16,448 L432,448 C440.836556,448 448,440.836556 448,432 L448,400 C448,391.163444 440.836556,384 432,384 Z M204.83,256 C201.426459,255.997344 198.161555,257.348219 195.754887,259.754887 C193.348219,262.161555 191.997344,265.426459 192,268.83 L192,307.17 C191.997344,310.573541 193.348219,313.838445 195.754887,316.245113 C198.161555,318.651781 201.426459,320.002656 204.83,320 L435.17,320 C438.573541,320.002656 441.838445,318.651781 444.245113,316.245113 C446.651781,313.838445 448.002656,310.573541 448,307.17 L448,268.83 C448.002656,265.426459 446.651781,262.161555 444.245113,259.754887 C441.838445,257.348219 438.573541,255.997344 435.17,256 L204.83,256 Z M435.17,128 L204.83,128 C201.426459,127.997344 198.161555,129.348219 195.754887,131.754887 C193.348219,134.161555 191.997344,137.426459 192,140.83 L192,179.17 C191.997344,182.573541 193.348219,185.838445 195.754887,188.245113 C198.161555,190.651781 201.426459,192.002656 204.83,192 L435.17,192 C438.573541,192.002656 441.838445,190.651781 444.245113,188.245113 C446.651781,185.838445 448.002656,182.573541 448,179.17 L448,140.83 C448.002656,137.426459 446.651781,134.161555 444.245113,131.754887 C441.838445,129.348219 438.573541,127.997344 435.17,128 Z M432,0 L16,0 C7.163444,0 1.082166e-15,7.163444 0,16 L0,48 C1.082166e-15,56.836556 7.163444,64 16,64 L432,64 C440.836556,64 448,56.836556 448,48 L448,16 C448,7.163444 440.836556,0 432,0 Z"></path></svg>`,
        )}")`,
        'form-trix-attach': `url("${svgToDataUri(
          `<svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645 117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41 31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51 110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0 16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699 46.054-.001l189.465-189.489c25.987-25.989 25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249 39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174 739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685 4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034 58.092-152.004 58.093-210.048.041z"></path></svg>`,
        )}")`,
        'form-trix-undo': `url("${svgToDataUri(
          `<svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z"></path></svg>`,
        )}")`,
        'form-trix-redo': `url("${svgToDataUri(
          `<svg viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"></path></svg>`,
        )}")`,
      }),
    },
  },
})

module.exports = vueform
