const fs = require('fs/promises');
const svgToDataUri = require('mini-svg-data-uri')
const Color = require('color')
const plugin = require('tailwindcss/plugin')
const isArray = require("lodash/isArray");
const map = require("lodash/map");
const isObject = require("lodash/isObject");
const kebabCase = require("lodash/kebabCase");


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
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;

        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return `rgba(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)},${alpha})`;
}

const upperFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const cssIfy = (rules, keyTransform = kebabCase) => {
    return Object.keys(rules)
        .reduce(
            (coll, key) =>
                isObject(rules[key])
                    ? `${coll}${key} { ${cssIfy(rules[key])} }`
                    : `${coll}${keyTransform(key)}: ${rules[key]};\n`, "\n"
        );
}

const buildVueformCss = () => {
    const theme = (s) => s;
    const addUtilities = (content) => {
        // content is most probably a record key => rules
        return Object.keys(content)
            .map((key) => {
              const contentParsed = cssIfy(content[key]);
              if(contentParsed === "\n") return false;
              return `${key} { ${contentParsed} }`
            })
            .filter(Boolean).join("\n");
    }
    const addVariant = (key, content) => `@custom-variant ${key} { ${content} { @slot } }`;

    const e = (s) => s.replace(/\//, '\\/').replace(/\./, '\\.');

    let pluginCss = [];

    let rules = []

    rules = [
        ...rules,
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
                fontSize: 'var(--vf-font-size)',
                lineHeight: 'var(--vf-line-height)',
                letterSpacing: 'var(--vf-letter-spacing)',
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
                color: `var(--vf-color-placeholder)`,
            },
        },
        {
            base: ['[multiple]'],
            styles: {
                'background-image': 'initial',
                'background-position': 'initial',
                'background-repeat': 'unset',
                'background-size': 'initial',
                'print-color-adjust': 'unset',
            },
        },
    ];

    rules.push({
        ['body[dir="rtl"]']: {
            '.form-bg-icon-check': {
                '&::after': {
                    left: 'auto',
                    right: 'calc(var(--vf-border-width-checkbox-l) * (-1))',
                }
            },
        }
    })

    const pms = [
        'p', 'py', 'px', 'pl', 'pr', 'pt', 'pb',
        'm', 'my', 'mx', 'ml', 'mr', 'mt', 'mb',
    ]

    const sizes = ['', 'sm', 'lg']

    let plain = {}
    let rtl = {}
    let h = {}
    let v = {}
    let mergeH = {}
    let mergeV = {}
    let withFloating = {}
    let fullWidth = {}
    let textType = {}

    sizes.forEach((s) => {
        let suffix = s ? '-' + s : ''
        let size = suffix

        // font-size
        plain[`.form-text${suffix}`] = {
            fontSize: `var(--vf-font-size${size})`,
            lineHeight: `var(--vf-line-height${size})`,
            letterSpacing: `var(--vf-letter-spacing${size})`,
        }

        plain[`.form-text-small${suffix}`] = {
            fontSize: `var(--vf-font-size-small${size})`,
            lineHeight: `var(--vf-line-height-small${size})`,
            letterSpacing: `var(--vf-letter-spacing-small${size})`,
        }

        plain[`.form-text-h1${suffix}`] = {
            fontSize: `var(--vf-font-size-h1${size})`,
            lineHeight: `var(--vf-line-height-headings${size})`,
            letterSpacing: `var(--vf-letter-spacing-headings${size})`,
        }

        plain[`.form-text-h2${suffix}`] = {
            fontSize: `var(--vf-font-size-h2${size})`,
            lineHeight: `var(--vf-line-height-headings${size})`,
            letterSpacing: `var(--vf-letter-spacing-headings${size})`,
        }

        plain[`.form-text-h3${suffix}`] = {
            fontSize: `var(--vf-font-size-h3${size})`,
            lineHeight: `var(--vf-line-height-headings${size})`,
            letterSpacing: `var(--vf-letter-spacing-headings${size})`,
        }

        plain[`.form-text-h4${suffix}`] = {
            fontSize: `var(--vf-font-size-h4${size})`,
            lineHeight: `var(--vf-line-height-headings${size})`,
            letterSpacing: `var(--vf-letter-spacing-headings${size})`,
        }

        plain[`.form-text-h1-mobile${suffix}`] = {
            fontSize: `var(--vf-font-size-h1-mobile${size})`,
            lineHeight: `var(--vf-line-height-headings${size})`,
            letterSpacing: `var(--vf-letter-spacing-headings${size})`,
        }

        plain[`.form-text-h2-mobile${suffix}`] = {
            fontSize: `var(--vf-font-size-h2-mobile${size})`,
            lineHeight: `var(--vf-line-height-headings${size})`,
            letterSpacing: `var(--vf-letter-spacing-headings${size})`,
        }

        plain[`.form-text-h3-mobile${suffix}`] = {
            fontSize: `var(--vf-font-size-h3-mobile${size})`,
            lineHeight: `var(--vf-line-height-headings${size})`,
            letterSpacing: `var(--vf-letter-spacing-headings${size})`,
        }

        plain[`.form-text-h4-mobile${suffix}`] = {
            fontSize: `var(--vf-font-size-h4-mobile${size})`,
            lineHeight: `var(--vf-line-height-headings${size})`,
            letterSpacing: `var(--vf-letter-spacing-headings${size})`,
        }

        plain[`.form-text-blockquote${suffix}`] = {
            fontSize: `var(--vf-font-size-blockquote${size})`,
            lineHeight: `var(--vf-line-height-blockquote${size})`,
            letterSpacing: `var(--vf-letter-spacing-blockquote${size})`,
        }

        // grid
        plain[`.form-gap-gutter${suffix}`] = {
            columnGap: `min(calc(100% / 12), var(--vf-gutter${size}))`,
            rowGap: `var(--vf-gutter${size})`,
        }

        plain[`.form-gap-x-gutter${suffix}`] = {
            columnGap: `min(calc(100% / 12), var(--vf-gutter${size}))`,
        }

        plain[`.form-gap-y-gutter${suffix}`] = {
            rowGap: `var(--vf-gutter${size})`,
        }

        plain[`.${(`form-gap-0.5gutter${suffix}`)}`] = {
            gap: `calc(var(--vf-gutter${size}) * 0.5)`,
        }

        plain[`.${(`form-gap-y-0.5gutter${suffix}`)}`] = {
            rowGap: `calc(var(--vf-gutter${size}) * 0.5)`,
        }

        plain[`.${(`form-gap-x-0.5gutter${suffix}`)}`] = {
            columnGap: `calc(var(--vf-gutter${size}) * 0.5)`,
        }

        // border radius
        plain[`.form-radius-input${suffix}`] = {
            borderRadius: `var(--vf-radius-input${size})`,
        }

        plain[`.form-radius-input-t${suffix}`] = {
            borderRadius: `var(--vf-radius-input${size})`,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
        }

        plain[`.form-radius-input-r${suffix}`] = {
            borderRadius: `var(--vf-radius-input${size})`,
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
        }

        plain[`.form-radius-input-b${suffix}`] = {
            borderRadius: `var(--vf-radius-input${size})`,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
        }

        plain[`.form-radius-input-l${suffix}`] = {
            borderRadius: `var(--vf-radius-input${size})`,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
        }

        plain[`.form-radius-btn${suffix}`] = {
            borderRadius: `var(--vf-radius-btn${size})`,
        }

        plain[`.form-radius-btn-t${suffix}`] = {
            borderRadius: `var(--vf-radius-btn${size})`,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
        }

        plain[`.form-radius-btn-r${suffix}`] = {
            borderRadius: `var(--vf-radius-btn${size})`,
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
        }

        plain[`.form-radius-btn-b${suffix}`] = {
            borderRadius: `var(--vf-radius-btn${size})`,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
        }

        plain[`.form-radius-btn-l${suffix}`] = {
            borderRadius: `var(--vf-radius-btn${size})`,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
        }

        plain[`.form-radius-small${suffix}`] = {
            borderRadius: `var(--vf-radius-small${size})`,
        }

        plain[`.form-radius-small-t${suffix}`] = {
            borderRadius: `var(--vf-radius-small${size})`,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
        }

        plain[`.form-radius-small-r${suffix}`] = {
            borderRadius: `var(--vf-radius-small${size})`,
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
        }

        plain[`.form-radius-small-b${suffix}`] = {
            borderRadius: `var(--vf-radius-small${size})`,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
        }

        plain[`.form-radius-small-l${suffix}`] = {
            borderRadius: `var(--vf-radius-small${size})`,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
        }

        plain[`.form-radius-large${suffix}`] = {
            borderRadius: `var(--vf-radius-large${size})`,
        }

        plain[`.form-radius-large-t${suffix}`] = {
            borderRadius: `var(--vf-radius-large${size})`,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
        }

        plain[`.form-radius-large-r${suffix}`] = {
            borderRadius: `var(--vf-radius-large${size})`,
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0,
        }

        plain[`.form-radius-large-b${suffix}`] = {
            borderRadius: `var(--vf-radius-large${size})`,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
        }

        plain[`.form-radius-large-l${suffix}`] = {
            borderRadius: `var(--vf-radius-large${size})`,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
        }

        plain[`.form-radius-input-tag${suffix}`] = {
            borderRadius: `var(--vf-radius-tag${size})`,
        }

        plain[`.form-radius-checkbox${suffix}`] = {
            borderRadius: `var(--vf-radius-checkbox${size})`,
        }

        plain[`.form-radius-slider${suffix}`] = {
            borderRadius: `var(--vf-radius-slider${size})`,
        }

        plain[`.form-radius-image${suffix}`] = {
            borderRadius: `var(--vf-radius-image${size})`,
        }

        plain[`.form-radius-gallery${suffix}`] = {
            borderRadius: `var(--vf-radius-gallery${size})`,
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

            let Y = `var(--vf-py-input${size})`
            let X = `var(--vf-px-input${size})`
            let TopBorder = `calc(var(--vf-border-width-input-t) + var(--vf-py-input${size}))`
            let BottomBorder = `calc(var(--vf-border-width-input-b) + var(--vf-py-input${size}))`
            let LeftBorder = `calc(var(--vf-border-width-input-l) + var(--vf-px-input${size}))`
            let RightBorder = `calc(var(--vf-border-width-input-r) + var(--vf-px-input${size}))`
            let key = `.form-${pm}-input${suffix}`
            let keyBorder = `.form-${pm}-input-border${suffix}`

            rtl[key] = {}
            rtl[keyBorder] = {}

            if (sides.length === 4) {
                rtl[key][type] = `${Y} ${X}`
                rtl[keyBorder][type] = `${TopBorder} ${RightBorder} ${BottomBorder} ${LeftBorder}`
            } else {
                sides.forEach((side) => {
                    rtl[key][`${type}${upperFirst(side)}`] = ['top', 'bottom'].indexOf(side) !== -1 ? Y : X

                    if (pm !== 'pt') {
                        rtl[keyBorder][`${type}${upperFirst(side)}`] = side === 'top'
                            ? TopBorder :
                            (side === 'right' ? RightBorder :
                                (side === 'bottom' ? BottomBorder : LeftBorder))
                    }
                })
            }
        })

        plain[`.form-my-slider${suffix}`] = {
            marginTop: `calc((var(--vf-line-height${size}) - var(--vf-slider-height${size})) / 2)`,
            marginBottom: `calc((var(--vf-line-height${size}) - var(--vf-slider-height${size})) / 2)`,
        }

        plain[`.form-mt-floating${suffix}`] = {
            marginTop: `var(--vf-floating-top${size})`,
        }

        plain['.form-pt-0'] = {
            paddingTop: '0px'
        }

        plain['.form-text-type'] = {
            "&.form-pt-0": {
                paddingTop: '0px'
            }
        }

        textType[`.form-pt-input-border${suffix}`] = {
            paddingTop: `calc(var(--vf-py-input${size}) + var(--vf-border-width-input-t))`,
        }

        plain[`.form-p-select-caret${suffix}`] = {
            padding: `var(--vf-py-input${size}) calc(var(--vf-px-input${size}) * 1.5 + 10px) var(--vf-py-input${size}) var(--vf-px-input${size})`,
        }

        plain[`.form-pr-select${suffix}`] = {
            paddingRight: `calc(var(--vf-px-input${size}) * 2.5 + 20px)`,
        }

        plain[`.form-pr-select-no-clear${suffix}`] = {
            paddingRight: `calc(var(--vf-px-input${size}) * 1.5 + 10px)`,
        }

        plain[`.form-pr-select-no-caret${suffix}`] = {
            paddingRight: `calc(var(--vf-px-input${size}) * 1.5 + 10px)`,
        }

        rtl[`.form-pl-select${suffix}`] = {
            paddingLeft: `calc(var(--vf-px-input${size}) * 2.5 + 20px)`,
        }

        rtl[`.form-pl-select-no-caret${suffix}`] = {
            paddingLeft: `calc(var(--vf-px-input${size}) * 1.5 + 10px)`,
        }

        rtl[`.form-pl-select-no-clear${suffix}`] = {
            paddingLeft: `calc(var(--vf-px-input${size}) * 1.5 + 10px)`,
        }

        withFloating[`.form-p-input-floating${suffix}`] = {
            paddingTop: `calc(var(--vf-py-input${size}) + (var(--vf-floating-top${size}) / 2))`,
            paddingBottom: `calc(var(--vf-py-input${size}) - (var(--vf-floating-top${size}) / 2))`,
        }

        withFloating[`.form-p-tags-floating${suffix}`] = {
            paddingLeft: `var(--vf-px-input${suffix})`,
            margin: `calc(var(--vf-space-tags${suffix}) + var(--vf-floating-top${suffix}) + 0.34375rem - 1px) 0 0`,
        }

        plain[`.${(`form-py-0.5input${suffix}`)}`] = {
            paddingBottom: `calc(var(--vf-py-input${size}) * 0.5)`,
            paddingTop: `calc(var(--vf-py-input${size}) * 0.5)`,
        }

        rtl[`.${(`form-pr-input-height${suffix}`)}`] = {
            paddingRight: `var(--vf-min-height-input${size})`,
        }

        rtl[`.${(`form-pl-input-height${suffix}`)}`] = {
            paddingLeft: `var(--vf-min-height-input${size})`,
        }

        // top, right, bottom, left
        let sides = ['top', 'right', 'bottom', 'left']
        sides.forEach((side) => {
            plain[`.form-${side}-input${suffix}`] = {
                [side]: ['top', 'bottom'].indexOf(side) !== -1
                    ? `var(--vf-py-input${size})`
                    : `var(--vf-px-input${size})`
            }
            plain[`.form-${side}-input-border${suffix}`] = {
                [side]: `calc(var(--vf-border-width-input-${side.charAt(0)}) + ${['top', 'bottom'].indexOf(side) !== -1
                    ? `var(--vf-py-input${size})`
                    : `var(--vf-px-input${size})`})`
            }
        })

        rtl[`.form-pl-tag${suffix}`] = {
            paddingLeft: `var(--vf-px-tag${size})`
        }

        rtl[`.form-pr-tag${suffix}`] = {
            paddingRight: `var(--vf-px-tag${size})`
        }

        plain[`.form-py-tag${suffix}`] = {
            paddingBottom: `var(--vf-py-tag${size})`,
            paddingTop: `var(--vf-py-tag${size})`,
        }

        plain[`.form-px-tag${suffix}`] = {
            paddingLeft: `var(--vf-px-tag${size})`,
            paddingRight: `var(--vf-px-tag${size})`,
        }

        plain[`.form-py-slider-tooltip${suffix}`] = {
            paddingBottom: `var(--vf-py-slider-tooltip${size})`,
            paddingTop: `var(--vf-py-slider-tooltip${size})`,
        }

        plain[`.form-px-slider-tooltip${suffix}`] = {
            paddingLeft: `var(--vf-px-slider-tooltip${size})`,
            paddingRight: `var(--vf-px-slider-tooltip${size})`,
        }

        plain[`.form-p-btn${suffix}`] = {
            padding: `var(--vf-py-btn${size}) var(--vf-px-btn${size})`
        }

        plain[`.form-p-btn-small${suffix}`] = {
            padding: `var(--vf-py-btn-small${size}) var(--vf-px-btn-small${size})`
        }

        plain[`.form-p-group-tabs${suffix}`] = {
            padding: `var(--vf-py-group-tabs${size}) var(--vf-px-group-tabs${size})`
        }

        plain[`.form-p-group-blocks${suffix}`] = {
            padding: `var(--vf-py-group-blocks${size}) var(--vf-px-group-blocks${size})`
        }

        rtl[`.form-pl-input-y${suffix}`] = {
            paddingLeft: `var(--vf-py-input${size})`
        }

        rtl[`.form-pr-input-y${suffix}`] = {
            paddingRight: `var(--vf-py-input${size})`
        }

        plain[`.form-pl-space-addon${suffix}`] = {
            paddingLeft: `var(--vf-space-addon${size})`
        }

        plain[`.form-pr-space-addon${suffix}`] = {
            paddingRight: `var(--vf-space-addon${size})`
        }

        plain[`.form-p-blockquote${suffix}`] = {
            padding: `var(--vf-py-blockquote${size}) var(--vf-px-blockquote${size})`
        }

        plain[`.form-py-hr`] = {
            padding: `var(--vf-py-hr) 0px`
        }

        plain[`.form-mt-checkbox${suffix}`] = {
            marginTop: `calc((var(--vf-line-height${size}) - var(--vf-checkbox-size${size})) / 2)`
        }

        plain[`.form-mr-space-checkbox${suffix}`] = {
            marginRight: `var(--vf-space-checkbox${size})`
        }

        plain[`.form-ml-space-checkbox${suffix}`] = {
            marginLeft: `var(--vf-space-checkbox${size})`
        }

        plain[`.form-mr-space-checkbox${suffix}`] = {
            marginRight: `var(--vf-space-checkbox${size})`
        }

        plain[`.form-mt-space-tags${suffix}`] = {
            marginTop: `var(--vf-space-tags${size})`
        }

        plain[`.form-mr-space-tags${suffix}`] = {
            marginRight: `var(--vf-space-tags${size})`
        }

        plain[`.form-pr-space-tags${suffix}`] = {
            paddingRight: `var(--vf-space-tags${size})`
        }

        plain[`.form-mb-space-tags${suffix}`] = {
            marginBottom: `var(--vf-space-tags${size})`
        }

        rtl[`.form-ml-space-tags${suffix}`] = {
            marginLeft: `var(--vf-space-tags${size})`
        }

        h[`.form-top-slider-handle-horizontal${suffix}`] = {
            top: `calc((var(--vf-slider-handle-size${size}) - var(--vf-slider-height${size})) / 2 * (-1))`
        }

        h[`.form-right-slider-handle-horizontal${suffix}`] = {
            right: `calc(var(--vf-slider-handle-size${size}) / 2 * (-1))`
        }

        v[`.form-bottom-slider-handle-vertical${suffix}`] = {
            bottom: `calc(var(--vf-slider-handle-size${size}) / 2 * (-1))`
        }

        v[`.form-right-slider-handle-vertical${suffix}`] = {
            right: `calc((var(--vf-slider-handle-size${size}) - var(--vf-slider-height${size})) / 2 * (-1))`
        }

        plain[`.form-bottom-slider-tooltip-top${suffix}`] = {
            bottom: `calc(var(--vf-slider-handle-size${size}) + var(--vf-slider-tooltip-distance${size}))`
        }

        plain[`.form-top-slider-tooltip-bottom${suffix}`] = {
            top: `calc(var(--vf-slider-handle-size${size}) + var(--vf-slider-tooltip-distance${size}))`
        }

        plain[`.form-right-slider-tooltip-left${suffix}`] = {
            right: `calc(var(--vf-slider-handle-size${size}) + var(--vf-slider-tooltip-distance${size}))`
        }

        plain[`.form-left-slider-tooltip-right${suffix}`] = {
            left: `calc(var(--vf-slider-handle-size${size}) + var(--vf-slider-tooltip-distance${size}))`
        }

        mergeH[`.form-bottom-slider-tooltip-top-merged${suffix}`] = {
            bottom: `calc((var(--vf-slider-handle-size${suffix}) - var(--vf-slider-height${suffix})) / 2 + var(--vf-slider-tooltip-distance${suffix}))`
        }

        mergeH[`.form-top-slider-tooltip-bottom-merged${suffix}`] = {
            top: `calc((var(--vf-slider-handle-size${suffix}) - var(--vf-slider-height${suffix})) / 2 + var(--vf-slider-height${suffix}) + var(--vf-slider-tooltip-distance${suffix}))`
        }

        mergeV[`.form-right-slider-tooltip-left-merged${suffix}`] = {
            right: `calc((var(--vf-slider-handle-size${suffix}) - var(--vf-slider-height${suffix})) / 2 + var(--vf-slider-height${suffix}) + var(--vf-slider-tooltip-distance${suffix}))`
        }

        mergeV[`.form-left-slider-tooltip-right-merged${suffix}`] = {
            left: `calc((var(--vf-slider-handle-size${suffix}) - var(--vf-slider-height${suffix})) / 2 + var(--vf-slider-tooltip-distance${suffix}))`
        }

        // gutters
        let gutters = ['', '0.5', '2']
        sides = [
            'mt', 'mr', 'mb', 'ml',
            'top', 'right', 'bottom', 'left',
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

                plain[`.${(`form-${side}-${gutterSize}gutter${suffix}`)}`] = {
                    [`${attr[side]}`]: `calc(var(--vf-gutter${size}) * ${gutterSize || 1})`
                }
            })
        })

        fullWidth[`.${(`form-pb-gutter/3${suffix}`)}`] = {
            paddingBottom: `calc(var(--vf-gutter${size}) / 3)`
        }

        plain[`.form-pr-gutter${suffix}`] = {
            paddingRight: `var(--vf-gutter${size})`,
        }

        plain[`.${(`form-p-0.5gutter${suffix}`)}`] = {
            padding: `calc(var(--vf-gutter${size}) / 2)`,
        }

        plain['.form-pr-0'] = {
            paddingRight: '0px'
        }

        plain[`.form-w-checkbox${suffix}`] = {
            width: `var(--vf-checkbox-size${size})`,
        }

        plain[`.form-w-gallery${suffix}`] = {
            width: `var(--vf-gallery-size${size})`,
        }

        plain[`.form-w-toggle${suffix}`] = {
            width: `var(--vf-toggle-width${size})`,
        }

        plain[`.form-w-toggle-label${suffix}`] = {
            width: `calc(var(--vf-toggle-width${size}) - var(--vf-toggle-height${size}))`,
        }

        plain[`.form-w-slider-vertical${suffix}`] = {
            width: `var(--vf-slider-height${size})`,
        }

        plain[`.form-w-input-height${suffix}`] = {
            width: `var(--vf-min-height-input${size})`,
        }

        plain[`.form-h-checkbox${suffix}`] = {
            height: `var(--vf-checkbox-size${size})`,
        }

        plain[`.form-h-gallery${suffix}`] = {
            height: `var(--vf-gallery-size${size})`,
        }

        plain[`.form-h-toggle${suffix}`] = {
            height: `var(--vf-toggle-height${size})`,
        }

        plain[`.form-h-slider-horizontal${suffix}`] = {
            height: `var(--vf-slider-height${size})`,
        }

        plain[`.form-h-slider-vertical${suffix}`] = {
            height: `var(--vf-slider-height-vertical${size})`,
        }

        plain[`.form-h-input${suffix}`] = {
            height: `var(--vf-min-height-input${size})`,
        }

        plain[`.form-h-input-border${suffix}`] = {
            height: `calc(var(--vf-min-height-input${size}) + var(--vf-border-width-input-t) + var(--vf-border-width-input-b))`,
        }

        plain[`.form-h-input-height${suffix}`] = {
            height: `var(--vf-min-height-input${size})`,
        }

        plain[`.form-h-input-height-inner${suffix}`] = {
            height: `calc(var(--vf-min-height-input${size}) - (var(--vf-border-width-input-t) + var(--vf-border-width-input-b)))`,
        }

        plain[`.form-min-h-input-height-inner${suffix}`] = {
            minHeight: `calc(var(--vf-min-height-input${size}) - (var(--vf-border-width-input-t) + var(--vf-border-width-input-b)))`,
        }

        plain[`.form-min-h-input-height${suffix}`] = {
            minHeight: `var(--vf-min-height-input${size})`,
        }

        plain[`.form-left-input-height${suffix}`] = {
            left: `var(--vf-min-height-input${size})`,
        }

        plain[`.form-size-toggle-handle${suffix}`] = {
            width: `var(--vf-toggle-height${size})`,
            height: `var(--vf-toggle-height${size})`,
        }

        plain[`.form-size-slider-handle${suffix}`] = {
            width: `var(--vf-slider-handle-size${size})`,
            height: `var(--vf-slider-handle-size${size})`,
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
                width: `calc(var(--vf-min-height-input${size}) * 0.4)`,
                height: `calc(var(--vf-min-height-input${size}) * 0.4)`,
                marginLeft: `calc(var(--vf-min-height-input${size}) * (-0.2))`,
                marginTop: `calc(var(--vf-min-height-input${size}) * (-0.2))`,
                animation: 'form-spin 1s linear infinite',
                maskImage: 'var (--maskImage-form-spinner)',
                maskPosition: 'center center',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                backgroundColor: '#FFFFFF'
            }
        }

        plain[`.form-bg-spinner-on-primary${suffix}`] = {
            position: 'relative',
            color: 'transparent',
            '&::after': {
                content: '""',
                position: 'absolute',
                left: '50%',
                top: '50%',
                display: 'inline-block',
                width: `calc(var(--vf-min-height-input${size}) * 0.4)`,
                height: `calc(var(--vf-min-height-input${size}) * 0.4)`,
                marginLeft: `calc(var(--vf-min-height-input${size}) * (-0.2))`,
                marginTop: `calc(var(--vf-min-height-input${size}) * (-0.2))`,
                animation: 'form-spin 1s linear infinite',
                maskImage: 'var(--maskImage.form-spinner)',
                maskPosition: 'center center',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                backgroundColor: 'var(--vf-color-on-primary)'
            }
        }

        plain[`.form-bg-spinner-btn-secondary${suffix}`] = {
            position: 'relative',
            color: 'transparent',
            '&::after': {
                content: '""',
                position: 'absolute',
                left: '50%',
                top: '50%',
                display: 'inline-block',
                width: `calc(var(--vf-min-height-input${size}) * 0.4)`,
                height: `calc(var(--vf-min-height-input${size}) * 0.4)`,
                marginLeft: `calc(var(--vf-min-height-input${size}) * (-0.2))`,
                marginTop: `calc(var(--vf-min-height-input${size}) * (-0.2))`,
                animation: 'form-spin 1s linear infinite',
                maskImage: 'var(--maskImage-form-spinner)',
                maskPosition: 'center center',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                backgroundColor: 'var(--vf-color-btn-secondary)'
            }
        }

        plain[`.slider-vertical`] = {
            [`&.${e(`v:arrow-right${suffix}`)}:before`]: {
                content: '""',
                position: 'absolute',
                right: `calc(var(--vf-slider-tooltip-arrow-size${size}) * (-2))`,
                top: '50%',
                width: '0',
                height: '0',
                border: `var(--vf-slider-tooltip-arrow-size${size}) solid transparent`,
                borderLeftColor: 'inherit',
                transform: 'translateY(-50%)',
            }
        }

        plain[`.slider-vertical`] = {
            [`&.${e(`v:arrow-left${suffix}`)}:before`]: {
                content: '""',
                position: 'absolute',
                left: `calc(var(--vf-slider-tooltip-arrow-size${size}) * (-2))`,
                top: '50%',
                width: '0',
                height: '0',
                border: `var(--vf-slider-tooltip-arrow-size${size}) solid transparent`,
                borderRightColor: 'inherit',
                transform: 'translateY(-50%)',
            }
        }

        plain[`.slider-horizontal`] = {
            [`&.${e(`h:arrow-bottom${suffix}`)}:before`]: {
                content: '""',
                position: 'absolute',
                bottom: `calc(var(--vf-slider-tooltip-arrow-size${size}) * (-2))`,
                left: '50%',
                width: '0',
                height: '0',
                border: `var(--vf-slider-tooltip-arrow-size${size}) solid transparent`,
                borderTopColor: 'inherit',
                transform: 'translate(-50%)',
            }
        }

        plain[`.slider-horizontal`] = {
            [`&.${e(`h:arrow-top${suffix}`)}:before`]: {
                content: '""',
                position: 'absolute',
                top: `calc(var(--vf-slider-tooltip-arrow-size${size}) * (-2))`,
                left: '50%',
                width: '0',
                height: '0',
                border: `var(--vf-slider-tooltip-arrow-size${size}) solid transparent`,
                borderBottomColor: 'inherit',
                transform: 'translate(-50%)',
            }
        }
    })

    plain = Object.assign({}, plain, {
        '.form-color-primary': {
            color: 'var(--vf-primary)',
        },
        '.form-color-input': {
            color: 'var(--vf-color-input)'
        },
        '.form-color-input-danger': {
            color: 'var(--vf-color-input-danger)'
        },
        '.form-color-input-success': {
            color: 'var(--vf-color-input-success)'
        },
        '.form-color-muted': {
            color: 'var(--vf-color-muted)',
        },
        '.form-color-floating': {
            color: 'var(--vf-color-floating)',
        },
        '.form-color-floating-focus': {
            color: 'var(--vf-color-floating-focus)',
        },
        '.form-color-floating-success': {
            color: 'var(--vf-color-floating-success)',
        },
        '.form-color-floating-danger': {
            color: 'var(--vf-color-floating-danger)',
        },
        '.form-color-placeholder': {
            color: 'var(--vf-color-placeholder)',
        },
        '.form-color-disabled': {
            color: 'var(--vf-color-disabled)'
        },
        '.form-color-danger': {
            color: 'var(--vf-color-danger)'
        },
        '.form-color-success': {
            color: 'var(--vf-color-success)'
        },
        '.form-color-tag': {
            color: 'var(--vf-color-tag)'
        },
        '.form-color-addon': {
            color: 'var(--vf-color-addon)'
        },
        '.form-color-date-head': {
            color: 'var(--vf-color-date-head)'
        },
        '.form-color-btn': {
            color: 'var(--vf-color-btn)'
        },
        '.form-color-btn-secondary': {
            color: 'var(--vf-color-btn-secondary)'
        },
        '.form-color-btn-danger': {
            color: 'var(--vf-color-btn-danger)'
        },
        '.form-color-table-header': {
            color: 'var(--vf-color-table-header)'
        },
        '.form-color-transparent': {
            color: 'transparent !important',
        },
        '.form-color-link': {
            color: 'var(--vf-link-color)',
        },
        '.form-contains-link': {
            a: {
                color: 'var(--vf-link-color)',
                textDecoration: 'var(--vf-link-decoration)',
            }
        },

        '.form-decoration-link': {
            textDecoration: 'var(--vf-link-decoration)',
        },

        '.form-bg-input': {
            backgroundColor: 'var(--vf-bg-input)'
        },
        '.form-bg-input-color': {
            backgroundColor: 'var(--vf-color-input)'
        },
        '.form-bg-input-success': {
            backgroundColor: 'var(--vf-bg-input-success)'
        },
        '.form-bg-input-danger': {
            backgroundColor: 'var(--vf-bg-input-danger)'
        },
        '.form-bg-checkbox': {
            backgroundColor: 'var(--vf-bg-checkbox)'
        },
        '.form-bg-checkbox-color': {
            backgroundColor: 'var(--vf-color-checkbox)'
        },
        '.form-bg-checkbox-success': {
            backgroundColor: 'var(--vf-bg-checkbox-success)'
        },
        '.form-bg-checkbox-danger': {
            backgroundColor: 'var(--vf-bg-checkbox-danger)'
        },
        '.form-bg-disabled': {
            backgroundColor: 'var(--vf-bg-disabled)'
        },
        '.form-bg-selected': {
            backgroundColor: 'var(--vf-bg-selected)'
        },
        '.form-bg-passive': {
            backgroundColor: 'var(--vf-bg-passive)'
        },
        '.form-bg-passive-color': {
            backgroundColor: 'var(--vf-color-passive)'
        },
        '.form-bg-icon': {
            backgroundColor: 'var(--vf-bg-icon)'
        },
        '.form-bg-slider-handle': {
            backgroundColor: 'var(--vf-bg-slider-handle)'
        },
        '.form-bg-toggle-handle': {
            backgroundColor: 'var(--vf-bg-toggle-handle)'
        },
        '.form-bg-danger': {
            backgroundColor: 'var(--vf-bg-danger)'
        },
        '.form-bg-danger-color': {
            backgroundColor: 'var(--vf-color-danger)'
        },
        '.form-bg-success': {
            backgroundColor: 'var(--vf-bg-success)'
        },
        '.form-bg-success-color': {
            backgroundColor: 'var(--vf-color-success)'
        },
        '.form-bg-tag': {
            backgroundColor: 'var(--vf-bg-tag)'
        },
        '.form-bg-addon': {
            backgroundColor: 'var(--vf-bg-addon)'
        },
        '.form-bg-date-head': {
            backgroundColor: 'var(--vf-bg-date-head)'
        },
        '.form-bg-btn': {
            backgroundColor: 'var(--vf-bg-btn)'
        },
        '.form-bg-btn-secondary': {
            backgroundColor: 'var(--vf-bg-btn-secondary)'
        },
        '.form-bg-btn-danger': {
            backgroundColor: 'var(--vf-bg-btn-danger)'
        },
        '.form-bg-table-header': {
            backgroundColor: 'var(--vf-bg-table-header)'
        },

        '.form-border-b-color-input': {
            borderBottomColor: 'var(--vf-border-color-input)'
        },
        '.form-border-color-input-success': {
            borderColor: 'var(--vf-border-color-input-success)'
        },
        '.form-border-color-input-danger': {
            borderColor: 'var(--vf-border-color-input-danger)'
        },
        '.form-border-color-checkbox-success': {
            borderColor: 'var(--vf-border-color-checkbox-success)'
        },
        '.form-border-color-checkbox-danger': {
            borderColor: 'var(--vf-border-color-checkbox-danger)'
        },
        '.form-border-color-danger': {
            borderColor: 'var(--vf-border-color-danger)'
        },
        '.form-border-color-success': {
            borderColor: 'var(--vf-border-color-success)'
        },
        '.form-border-color-btn': {
            borderColor: 'var(--vf-border-color-btn)'
        },
        '.form-border-color-tag': {
            borderColor: 'var(--vf-border-color-tag)'
        },
        '.form-border-color-slider-tooltip': {
            borderColor: 'var(--vf-border-color-slider-tooltip)'
        },
        '.form-border-color-btn-secondary': {
            borderColor: 'var(--vf-border-color-btn-secondary)'
        },
        '.form-border-color-btn-danger': {
            borderColor: 'var(--vf-border-color-btn-danger)'
        },
        '.form-border-color-blockquote': {
            borderColor: 'var(--vf-border-color-blockquote)'
        },
        '.form-border-color-hr': {
            borderColor: 'var(--vf-border-color-hr)'
        },
        '.form-border-color-signature-hr': {
            borderColor: 'var(--vf-border-color-signature-hr)'
        },
        '.form-border-color-table': {
            borderColor: 'var(--vf-border-color-table)'
        },

        '.form-border-width-btn': {
            borderWidth: `var(--vf-border-width-btn)`,
            borderStyle: 'solid',
        },
        '.form-border-width-toggle': {
            borderWidth: `var(--vf-border-width-toggle)`,
            borderStyle: 'solid',
        },
        '.form-border-width-tag': {
            borderWidth: `var(--vf-border-width-tag)`,
            borderStyle: 'solid',
        },
        '.form-border-width-blockquote': {
            borderLeftWidth: `var(--vf-border-width-blockquote)`,
            borderStyle: 'solid',
        },
        '.form-border-width-table': {
            borderWidth: `var(--vf-border-width-table)`,
            borderStyle: 'solid',
        },

        '.form-shadow-input': {
            boxShadow: 'var(--vf-shadow-input)',
        },
        '.form-shadow-btn': {
            boxShadow: 'var(--vf-shadow-btn)',
        },
        '.form-shadow-dropdown': {
            boxShadow: 'var(--vf-shadow-dropdown)',
        },
        '.form-shadow-handles': {
            boxShadow: 'var(--vf-shadow-handles)',
        },

        '.form-mt-tag-1': {
            marginTop: 'var(--vf-space-static-tag-1)',
        },
        '.form-mt-tag-2': {
            marginTop: 'var(--vf-space-static-tag-2)',
        },
        '.form-mt-tag-3': {
            marginTop: 'var(--vf-space-static-tag-3)',
        },

        '.form-mb-tag-1': {
            marginBottom: 'var(--vf-space-static-tag-1)',
        },
        '.form-mb-tag-2': {
            marginBottom: 'var(--vf-space-static-tag-2)',
        },
        '.form-mb-tag-3': {
            marginBottom: 'var(--vf-space-static-tag-3)',
        },
        '.reduce-by-form-mb-border-width-table': {
            marginBottom: 'calc(var(--vf-border-width-table)*-1)',
        },
        '.reduce-by-form-mr-border-width-table': {
            marginRight: 'calc(var(--vf-border-width-table)*-1)',
        },

        '.form-hide-empty-img': {
            '&:not([src])': {
                opacity: 0,
            }
        },

        '.form-hide-empty-img': {
            '&[src=""]': {
                opacity: 0,
            }
        },

        '.form-hide-empty-img': {
            '&[src="data:"]': {
                opacity: 0,
            }
        },

        '.form-autofill-default': {
            '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active': {
                '-webkit-box-shadow': '0 0 0 99px var(--vf-bg-input) inset !important',
            },
            '&:-webkit-autofill': {
                '-webkit-text-fill-color': 'var(--vf-color-input) !important',
            }
        },

        '.form-autofill-focus': {
            '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active': {
                '-webkit-box-shadow': '0 0 0 99px var(--vf-bg-input-focus) inset !important',
            },
            '&:-webkit-autofill': {
                '-webkit-text-fill-color': 'var(--vf-color-input-focus) !important',
            }
        },

        '.form-autofill-success': {
            '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active': {
                '-webkit-box-shadow': '0 0 0 99px var(--vf-bg-input-success) inset !important',
            },
            '&:-webkit-autofill': {
                '-webkit-text-fill-color': 'var(--vf-color-input-success) !important',
            }
        },

        '.form-autofill-danger': {
            '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active': {
                '-webkit-box-shadow': '0 0 0 99px var(--vf-bg-input-danger) inset !important',
            },
            '&:-webkit-autofill': {
                '-webkit-text-fill-color': 'var(--vf-color-input-danger) !important',
            }
        },

        '.form-assistive-text': {
            position: 'absolute',
            margin: '-1px',
            width: '1px',
            height: '1px',
            overflow: 'hidden',
            clip: 'rect(0 0 0 0)',
        },

        // Info
        '.form-bg-info': {
            '&::before': {
                content: '""',
                maskImage: 'var(--maskImage-form-info)',
                maskPosition: 'center center',
                maskRepeat: 'no-repeat',
                maskSize: 'contain',
                backgroundColor: 'var(--vf-bg-passive)',
                width: '0.875rem',
                height: '0.875rem',
                display: 'inline-block',
            }
        },

        // Steps
        '.form-steps': {
            width: '100%',
            position: 'relative',
            '&:before': {
                content: '" "',
                display: 'inline-block',
                background: 'var(--vf-bg-passive)',
                position: 'absolute',
                top: '0.375rem',
                left: '0.125rem',
                right: '0.125rem',
                height: '0.25rem',
            },
        },
        '.form-step': {
            display: 'block',
            position: 'relative',
            whiteSpace: 'nowrap',
            flex: '1 1',
            textAlign: 'center',
            padding: '1.25rem 0.625rem 0',
            a: {
                textDecoration: 'none !important',
                '&:hover, &:focus, &:active': {
                    textDecoration: 'none !important',
                },
                '&:before': {
                    content: '" "',
                    display: 'inline-block',
                    width: '1rem',
                    height: '1rem',
                    position: 'absolute',
                    background: 'var(--vf-primary)',
                    borderRadius: '50%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: '0px',
                },
                '&:after': {
                    content: '" "',
                    display: 'inline-block',
                    width: '0.5rem',
                    height: '0.5rem',
                    position: 'absolute',
                    background: 'var(--vf-color-on-primary)',
                    borderRadius: '50%',
                    left: 'calc(50% - 0.25rem)',
                    transform: 'scale(0)',
                    top: '0.25rem',
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
                        left: '0.25rem',
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
                        right: '0.25rem',
                    },
                },
            },
            '&.form-step-disabled': {
                '&:before': {
                    background: 'var(--vf-bg-passive)',
                    left: '-100%',
                },
                a: {
                    color: 'var(--vf-color-disabled)',
                    '&:before': {
                        background: 'var(--vf-bg-passive)',
                    }
                },
            },
            '&.form-step-completed': {
                '& + .form-step:not(.form-step-completed):before': {
                    content: '" "',
                    display: 'inline-block',
                    background: 'var(--vf-primary)',
                    position: 'absolute',
                    top: '0.375rem',
                    left: '0px',
                    right: '50%',
                    height: '0.25rem',
                },
                '& + .form-step:last-of-type:before': {
                    right: '0px',
                },
                '&:before': {
                    content: '" "',
                    display: 'inline-block',
                    background: 'var(--vf-primary)',
                    position: 'absolute',
                    top: '0.375rem',
                    left: '0px',
                    right: '0px',
                    height: '0.25rem',
                },
                a: {
                    '&:after': {
                        maskImage: 'var(--maskImage-form-check-solid)',
                        backgroundColor: 'var(--vf-color-on-primary)',
                        maskPosition: '0 0',
                        maskSize: '0.5rem 0.5rem',
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
                        background: 'var(--vf-color-on-primary)',
                        top: '0.25rem',
                        transform: 'scale(1)',
                        borderRadius: '50%',
                    }
                },
            },
            '&.form-step-has-errors': {
                a: {
                    color: 'var(--vf-bg-btn-danger)',
                    '&:before': {
                        backgroundColor: 'var(--vf-bg-btn-danger)',
                    },
                    '&:after': {
                        maskImage: 'var(--maskImage-form-exclamation-solid)',
                        maskSize: '0.5rem 0.5rem',
                        maskPosition: '0 0',
                        maskRepeat: 'no-repeat',
                        backgroundColor: 'var(--vf-color-btn-danger)',
                        width: '0.5rem',
                        height: '0.5rem',
                        top: '0.25rem',
                        borderRadius: '0',
                    },
                },
                '&.form-step-active': {
                    a: {
                        '&:after': {
                            maskImage: 'none',
                            background: 'var(--vf-color-on-primary)',
                            top: '0.25rem',
                            transform: 'scale(1)',
                            borderRadius: '50%',
                        }
                    },
                },
            },
            '&.form-step-pending': {
                a: {
                    '&:after': {
                        animation: '1s linear infinite step-loading',
                        background: 'var(--vf-color-btn-danger)',
                        top: '0.25rem',
                        borderRadius: '50%',
                    }
                }
            }
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
        '.slider-vertical': {
            [`.${e('v:cursor-ns-resize')}`]: {
                cursor: 'ns-resize',
            }
        },

        // Mask
        '.mask-bg': {
            maskRepeat: 'no-repeat',
            maskPosition: 'center center',
            maskSize: 'contain',
        },
        [`.${('mask-size-2.5')}`]: {
            maskSize: '0.625rem 0.625rem',
        },
        [`.${('mask-size-2.8')}`]: {
            maskSize: '0.7rem 0.7rem',
        },
        [`.${('mask-size-3')}`]: {
            maskSize: '0.75rem 0.75rem',
        },

        // Static
        '.form-static-tag-hr-wrapper': {
            'hr': {
                borderColor: 'inherit',
            }
        },
        '.form-static-tag-img': {
            'img': {
                display: 'inline-block',
            }
        },
    })

    const maskImages = {
        'form-radio': `url("${svgToDataUri(
            `<svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3.5"/></svg>`,
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
    };

    Object.keys(maskImages).forEach((name) => {
        plain[`.mask-${name}`] = {
            maskImage: maskImages[name]
        }
    })

    const checkable = {
        '.form-bg-primary': {
            backgroundColor: 'var(--vf-primary)'
        },

        '.form-border-width-input': {
            borderWidth: `var(--vf-border-width-input-t) var(--vf-border-width-input-r) var(--vf-border-width-input-b) var(--vf-border-width-input-l)`,
        },
        '.form-border-width-dropdown': {
            borderWidth: `var(--vf-border-width-dropdown)`,
        },
        '.form-border-width-checkbox': {
            borderWidth: `var(--vf-border-width-checkbox-t) var(--vf-border-width-checkbox-r) var(--vf-border-width-checkbox-b) var(--vf-border-width-checkbox-l)`,
        },
        '.form-border-width-radio': {
            borderWidth: `var(--vf-border-width-radio-t) var(--vf-border-width-radio-r) var(--vf-border-width-radio-b) var(--vf-border-width-radio-l)`,
        },
        '.border-0': {
            border: '0'
        },

        '.form-border-color-primary': {
            borderColor: 'var(--vf-primary)'
        },
        '.form-border-color-input': {
            borderColor: 'var(--vf-border-color-input)'
        },
        '.form-border-color-checkbox': {
            borderColor: 'var(--vf-border-color-checkbox)'
        },
        '.form-border-color-checked': {
            borderColor: `var(--vf-border-color-checked)`,
        },
        '.form-border-color-passive': {
            borderColor: 'var(--vf-border-color-passive)'
        },

        '.form-bg-icon-check': {
            '&::after': {
                content: '""',
                maskImage: 'var(--maskImage-form-check)',
                maskPosition: 'center center',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                backgroundColor: 'var(--vf-color-on-primary)',
                display: 'block',
                position: 'relative',
                width: 'calc(100% + var(--vf-border-width-checkbox-l) + var(--vf-border-width-checkbox-r))',
                height: 'calc(100% + var(--vf-border-width-checkbox-t) + var(--vf-border-width-checkbox-b))',
                left: 'calc(var(--vf-border-width-checkbox-l) * (-1))',
                top: 'calc(var(--vf-border-width-checkbox-t) * (-1))',
            }
        },
        '.form-bg-icon-radio': {
            '&::after': {
                content: '""',
                maskImage: "var(--maskImage-form-radio)",
                maskPosition: 'center center',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                backgroundColor: 'var(--vf-color-on-primary)',
                display: 'block',
                width: '100%',
                height: '100%',
            }
        },
    }

    const focusable = {
        '.form-color-input-focus': {
            color: 'var(--vf-color-input-focus)'
        },
        '.form-bg-input-focus': {
            backgroundColor: 'var(--vf-bg-input-focus)'
        },
        '.form-bg-checkbox-focus': {
            backgroundColor: 'var(--vf-bg-checkbox-focus)'
        },
        '.form-border-color-input-focus': {
            borderColor: 'var(--vf-border-color-input-focus)'
        },
        '.form-border-color-checkbox-focus': {
            borderColor: 'var(--vf-border-color-checkbox-focus)'
        },
        '.form-ring': {
            outline: 'var(--vf-ring-width) solid var(--vf-ring-color)',
        },
        '.form-shadow-input-focus': {
            boxShadow: 'var(--vf-shadow-input), var(--vf-shadow-input-focus)',
        },
        '.form-shadow-handles-focus': {
            boxShadow: 'var(--vf-shadow-handles-focus)',
        },
    }

    const hoverable = {
        '.form-color-input-hover': {
            color: 'var(--vf-color-input-hover)'
        },
        '.form-bg-primary-darker': {
            backgroundColor: 'var(--vf-primary-darker)'
        },
        '.form-bg-input-hover': {
            backgroundColor: 'var(--vf-bg-input-hover)'
        },
        '.form-bg-checkbox-hover': {
            backgroundColor: 'var(--vf-bg-checkbox-hover)'
        },
        '.form-border-color-input-hover': {
            borderColor: 'var(--vf-border-color-input-hover)'
        },
        '.form-border-color-checkbox-hover': {
            borderColor: 'var(--vf-border-color-checkbox-hover)'
        },
        '.form-shadow-input-hover': {
            boxShadow: 'var(--vf-shadow-input), var(--vf-shadow-input-hover)',
        },
        '.form-shadow-handles-hover': {
            boxShadow: 'var(--vf-shadow-handles-hover)',
        },
    }

    const formFocusable = {
        ...focusable,
    }

    const formFocusHoverable = {
        ...hoverable,
    }

    const checkedFocusable = {
        ...checkable,
    }

    const checkedHoverable = {
        ...hoverable,
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

    const infoGroupHoverable = {
        '.form-visible': {
            visibility: 'visible',
        },
    }

    const activable = {
        '.cursor-grabbing': {
            cursor: 'grabbing',
        },
    }

    const disableable = {}

    const important = {
        '.form-top-0': {
            top: '0px',
        },
        '.form-bg-transparent': {
            backgroundColor: 'transparent',
        },
        '.form-border-b-white': {
            borderBottomColor: '#ffffff',
        },
        '.form-color-on-primary': {
            color: 'var(--vf-color-on-primary)',
        },
    }

    const inInputGroup = {
        '.reduce-by-form-top-border-width-input-t': {
            top: 'calc(var(--vf-border-width-input-t) * (-1))'
        }
    }


    pluginCss.push(addUtilities(plain));
    pluginCss.push(addUtilities(hoverable));
    pluginCss.push(addUtilities(groupHoverable));
    pluginCss.push(addUtilities(checkable));
    pluginCss.push(addUtilities(focusable));
    pluginCss.push(addUtilities(formFocusable));
    pluginCss.push(addUtilities(formFocusHoverable));
    pluginCss.push(addUtilities(checkedFocusable));
    pluginCss.push(addUtilities(checkedHoverable));
    pluginCss.push(addUtilities(activable));
    pluginCss.push(addUtilities(disableable));
    pluginCss.push(addUtilities(important));
    pluginCss.push(addUtilities(withFloating));
    pluginCss.push(addUtilities(inInputGroup));
    pluginCss.push(addUtilities(h));
    pluginCss.push(addUtilities(v));
    pluginCss.push(addUtilities(mergeH));
    pluginCss.push(addUtilities(mergeV));
    pluginCss.push(addUtilities(fullWidth));
    pluginCss.push(addUtilities(textType));
    pluginCss.push(addUtilities(rtl));
    pluginCss.push(addUtilities(infoGroupHoverable));

    pluginCss.push(addVariant('h', '.slider-horizontal &'));
    pluginCss.push(addVariant('v', '.slider-vertical &'));
    pluginCss.push(addVariant('merge-h', '.slider-horizontal .slider-origin > &'));
    pluginCss.push(addVariant('merge-h', '.slider-vertical .slider-origin > &'));
    pluginCss.push(addVariant('h-txt-rtl', '.slider-horizontal.slider-txt-rtl &'));
    pluginCss.push(addVariant('tap', '.slider-state-tap &'));
    pluginCss.push(addVariant('disabled', '[disabled] &, &[disabled]'));
    pluginCss.push(addVariant('checked-focused', '&:checked:focus'));
    pluginCss.push(addVariant('checked-hover', '&:checked:hover'));
    pluginCss.push(addVariant('tt-focus', '.slider-tooltip-focus:not(.slider-focused) &'));
    pluginCss.push(addVariant('tt-focused', '.slider-tooltip-focus.slider-focused&:not(.slider-tooltip-hidden)'));
    pluginCss.push(addVariant('tt-drag', '.slider-tooltip-drag:not(.slider-state-drag) &'));
    pluginCss.push(addVariant('tt-dragging', '.slider-tooltip-drag.slider-state-drag &:not(.slider-tooltip-hidden), .slider-tooltip-drag.slider-active &'));
    pluginCss.push(addVariant('important', '&!'));

    pluginCss.push(addVariant('with-floating', '.label-floating ~ &, .label-floating ~ div &'));
    pluginCss.push(addVariant('focused', '&.form-focus, &:focus'));
    pluginCss.push(addVariant('focused-hover', '&.form-focus:hover, &:focus:hover'));

    pluginCss.push(addVariant('list-group-hover', '.form-list-group:hover > &'));
    pluginCss.push(addVariant('info-group-hover', '.form-info-group:hover > &'));
    pluginCss.push(addVariant('in-input-group', '.form-input-group &'));
    pluginCss.push(addVariant('ghost', '.sortable-ghost &'));

    pluginCss.push(addVariant('full-width', '.col-span-12 &'))
    pluginCss.push(addVariant('text-type', '.form-text-type &'))


    const formVars = {
        primary: '#07bf9b',
        primaryDarker: '#06ac8b', // defaults to 10% darker primary

        danger: 'var(--color-red-500)',
        dangerLighter: 'var(--color-red-100)',

        success: 'var(--color-green-500)',
        successLighter: 'var(--color-green-100)',

        ringColor: '#07bf9b66', // defaults to primary with `ringOpacity` alpha
        ringWidth: 'var(--ringWidth-2)',
        ringOpacity: 0.4,

        linkColor: 'var(--vf-primary)',
        linkDecoration: 'none',

        grays: {
            50: 'var(--color-gray-50)',
            100: 'var(--color-gray-100)',
            200: 'var(--color-gray-200)',
            300: 'var(--color-gray-300)',
            400: 'var(--color-gray-400)',
            500: 'var(--color-gray-500)',
            600: 'var(--color-gray-600)',
            700: 'var(--color-gray-700)',
            800: 'var(--color-gray-800)',
            900: 'var(--color-gray-900)',
        },
        darks: {
            50: '#efefef',
            100: '#dcdcdc',
            200: '#bdbdbd',
            300: '#a0a0a0',
            400: '#848484',
            500: '#737373',
            600: '#393939',
            700: '#323232',
            800: '#262626',
            900: '#191919',
        },

        fontSize: {
            base: 'var(--text-base)',
            sm: 'var(--text-sm)',
            lg: 'var(--text-base)',
        },

        smallFontSize: {
            base: 'var(--text-sm)',
            sm: 'var(--text-05sm)',
            lg: 'var(--text-sm)',
        },

        h1FontSize: {
            base: '2.125rem',
            sm: '2.125rem',
            lg: '2.125rem',
        },

        h2FontSize: {
            base: '1.875rem',
            sm: '1.875rem',
            lg: '1.875rem',
        },

        h3FontSize: {
            base: '1.5rem',
            sm: '1.5rem',
            lg: '1.5rem',
        },

        h4FontSize: {
            base: '1.25rem',
            sm: '1.25rem',
            lg: '1.25rem',
        },

        h1MobileFontSize: {
            base: '1.5rem',
            sm: '1.5rem',
            lg: '1.5rem',
        },

        h2MobileFontSize: {
            base: '1.25rem',
            sm: '1.25rem',
            lg: '1.25rem',
        },

        h3MobileFontSize: {
            base: '1.125rem',
            sm: '1.125rem',
            lg: '1.125rem',
        },

        h4MobileFontSize: {
            base: '1rem',
            sm: '1rem',
            lg: '1rem',
        },

        blockquoteFontSize: {
            base: '1rem',
            sm: '0.875rem',
            lg: '1rem',
        },

        lineHeight: {
            base: 'var(--text-base--line-height)',
            sm: 'var(--text-sm--line-height)',
            lg: 'var(--text-base--line-height)',
        },

        headingsLineHeight: {
            base: '1.2',
            sm: '1.2',
            lg: '1.2',
        },

        blockquoteLineHeight: {
            base: '1.5rem',
            sm: '1.25rem',
            lg: '1.5rem',
        },

        smallLineHeight: {
            base: 'var(--text-sm--line-height)',
            sm: 'var(--text-05sm--line-height)',
            lg: 'var(--text-sm--line-height)',
        },

        letterSpacing: {
            base: 0,
            sm: 0,
            lg: 0,
        },

        smallLetterSpacing: {
            base: 0,
            sm: 0,
            lg: 0,
        },

        headingsLetterSpacing: {
            base: 0,
            sm: 0,
            lg: 0,
        },

        blockquoteLetterSpacing: {
            base: 0,
            sm: 0,
            lg: 0,
        },

        gutter: {
            base: '--spacing(4)',
            sm: '--spacing(2)',
            lg: '--spacing(4)',
        },

        inputMinHeight: {
            base: '--spacing(9.5)',
            sm: '--spacing(8.5)',
            lg: '--spacing(11.5)',
        },

        inputPy: {
            base: '--spacing(1.5)',
            sm: '--spacing(1.5)',
            lg: '--spacing(2.5)',
        },

        inputPx: {
            base: '--spacing(3)',
            sm: '--spacing(2)',
            lg: '--spacing(3.5)',
        },

        btnPy: {
            base: '--spacing(1.5)',
            sm: '--spacing(1.5)',
            lg: '--spacing(2.5)',
        },

        btnPx: {
            base: '--spacing(3.5)',
            sm: '--spacing(3)',
            lg: '--spacing(5)',
        },

        btnSmallPy: {
            base: '--spacing(1)',
            sm: '--spacing(1)',
            lg: '--spacing(1.5)',
        },

        btnSmallPx: {
            base: '--spacing(2.5)',
            sm: '--spacing(2.5)',
            lg: '--spacing(3)',
        },

        tagPy: {
            base: '0px',
            sm: 'var(--vf-py-tag)',
            lg: 'var(--vf-py-tag)',
        },

        tagPx: {
            base: '--spacing(1.75)',
            sm: 'var(--vf-px-tag)',
            lg: 'var(--vf-px-tag)',
        },

        groupTabsPy: {
            base: 'var(--vf-py-input)',
            sm: 'var(--vf-py-input-sm)',
            lg: 'var(--vf-py-input-lg)',
        },

        groupTabsPx: {
            base: 'var(--vf-px-input)',
            sm: 'var(--vf-px-input-sm)',
            lg: 'var(--vf-px-input-lg)',
        },

        groupBlocksPy: {
            base: '--spacing(3)',
            sm: '--spacing(2.5)',
            lg: '--spacing(3.5)',
        },

        groupBlocksPx: {
            base: '--spacing(4)',
            sm: '--spacing(4)',
            lg: '--spacing(4)',
        },

        sliderTooltipPy: {
            base: '--spacing(0.5)',
            sm: '--spacing(0.25)',
            lg: '--spacing(0.75)',
        },

        sliderTooltipPx: {
            base: '--spacing(1.5)',
            sm: '--spacing(1.25)',
            lg: '--spacing(2)',
        },

        blockquotePy: {
            base: '0.25rem',
            sm: '0.25rem',
            lg: '0.25rem',
        },

        blockquotePx: {
            base: '0.75rem',
            sm: '0.75rem',
            lg: '0.75rem',
        },

        hrPy: {
            base: '0.25rem',
        },

        spaceAddon: {
            base: '0px',
            sm: 'var(--vf-space-addon)',
            lg: 'var(--vf-space-addon)',
        },

        spaceCheckbox: {
            base: '--spacing(1.5)',
            sm: 'var(--vf-space-checkbox)',
            lg: 'var(--vf-space-checkbox)',
        },

        spaceTags: {
            base: '--spacing(0.75)',
            sm: 'var(--vf-space-tags)',
            lg: 'var(--vf-space-tags)',
        },

        spaceStaticTag1: '1rem',
        spaceStaticTag2: '2rem',
        spaceStaticTag3: '3rem',

        floatingTop: {
            base: '0px',
            sm: '0px',
            lg: '--spacing(2.75)',
        },

        borderWidths: {
            input: '1px',
            dropdown: [
                'var(--vf-border-width-input-t)',
                'var(--vf-border-width-input-r)',
                'var(--vf-border-width-input-b)',
                'var(--vf-border-width-input-l)'
            ],
            checkbox: [
                'var(--vf-border-width-input-t)',
                'var(--vf-border-width-input-r)',
                'var(--vf-border-width-input-b)',
                'var(--vf-border-width-input-l)',
            ],
            radio: [
                'var(--vf-border-width-input-t)',
                'var(--vf-border-width-input-r)',
                'var(--vf-border-width-input-b)',
                'var(--vf-border-width-input-l)',
            ],
            btn: [
                'var(--vf-border-width-input-t)',
                'var(--vf-border-width-input-r)',
                'var(--vf-border-width-input-b)',
                'var(--vf-border-width-input-l)',
            ],
            toggle: '--spacing(0.5)',
            tag: '1px',
            blockquote: '3px',
            table: '1px',
        },

        inputRadius: { // can be array
            base: '--spacing(1)',
            sm: 'var(--vf-radius-input)',
            lg: 'var(--vf-radius-input)',
        },

        btnRadius: {  // can be array
            base: 'var(--vf-radius-input)',
            sm: 'var(--vf-radius-input-sm)',
            lg: 'var(--vf-radius-input-lg)',
        },

        smallRadius: {  // can be array, applies to: checkbox, tags, slider tooltips
            base: 'var(--vf-radius-input)',
            sm: 'var(--vf-radius-input-sm)',
            lg: 'var(--vf-radius-input-lg)',
        },

        largeRadius: { //  // can be array, applies to: drag and drop, checkbox & radio group blocks, textarea, native multiselect
            base: 'var(--vf-radius-input)',
            sm: 'var(--vf-radius-input-sm)',
            lg: 'var(--vf-radius-input-lg)',
        },

        tagRadius: {
            base: 'var(--vf-radius-input)',
            sm: 'var(--vf-radius-input-sm)',
            lg: 'var(--vf-radius-input-lg)',
        },

        checkboxRadius: { // can be array
            base: 'var(--vf-radius-input)',
            sm: 'var(--vf-radius-input-sm)',
            lg: 'var(--vf-radius-input-lg)',
        },

        sliderRadius: { // can be array
            base: 'var(--vf-radius-input)',
            sm: 'var(--vf-radius-input-sm)',
            lg: 'var(--vf-radius-input-lg)',
        },

        imageRadius: { // can be array
            base: 'var(--vf-radius-input)',
            sm: 'var(--vf-radius-input-sm)',
            lg: 'var(--vf-radius-input-lg)',
        },

        galleryRadius: { // can be array
            base: 'var(--vf-radius-input)',
            sm: 'var(--vf-radius-input-sm)',
            lg: 'var(--vf-radius-input-lg)',
        },

        bgColors: {
            input: '#ffffff',
            inputHover: 'var(--vf-bg-input)',
            inputFocus: 'var(--vf-bg-input)',
            inputDanger: 'var(--vf-bg-input)',
            inputSuccess: 'var(--vf-bg-input)',
            checkbox: 'var(--vf-bg-input)',
            checkboxHover: 'var(--vf-bg-checkbox)',
            checkboxFocus: 'var(--vf-bg-checkbox)',
            checkboxDanger: 'var(--vf-bg-checkbox)',
            checkboxSuccess: 'var(--vf-bg-checkbox)',
            disabled: 'var(--vf-gray-200)',
            selected: 'var(--vf-gray-100)', // Option hover, cbgroup blocks selected
            passive: 'var(--vf-gray-300)',
            icon: 'var(--vf-gray-500)',
            danger: 'var(--vf-danger-lighter)',
            success: 'var(--vf-success-lighter)',
            addon: 'transparent',
            tag: 'var(--vf-primary)',
            sliderHandle: 'var(--vf-primary)',
            toggleHandle: '#ffffff',
            dateHead: 'var(--vf-gray-100)',
            btn: 'var(--vf-primary)',
            btnDanger: 'var(--vf-danger)',
            btnSecondary: 'var(--vf-gray-200)',
            tableHeader: 'var(--vf-gray-100)',
        },

        textColors: {
            onPrimary: '#ffffff',
            input: 'var(--vf-gray-800)',
            inputHover: 'var(--vf-color-input)',
            inputFocus: 'var(--vf-color-input)',
            inputDanger: 'var(--vf-color-input)',
            inputSuccess: 'var(--vf-color-input)',
            placeholder: 'var(--vf-gray-300)',
            disabled: 'var(--vf-gray-400)',
            passive: 'var(--vf-gray-700)',
            muted: 'var(--vf-gray-500)',
            floating: 'var(--vf-color-muted)',
            floatingFocus: 'var(--vf-color-floating)',
            floatingSuccess: 'var(--vf-color-floating)',
            floatingDanger: 'var(--vf-color-floating)',
            danger: 'var(--vf-danger)',
            success: 'var(--vf-success)',
            addon: 'inherit',
            tag: 'var(--vf-color-on-primary)',
            dateHead: 'var(--vf-gray-700)',
            btn: 'var(--vf-color-on-primary)',
            btnDanger: '#ffffff',
            btnSecondary: 'var(--vf-gray-700)',
            tableHeader: 'inherit',
        },

        borderColors: {
            input: 'var(--vf-gray-300)',
            inputFocus: 'var(--vf-primary)',
            inputHover: 'var(--vf-border-color-input)',
            inputDanger: 'var(--vf-border-color-input)',
            inputSuccess: 'var(--vf-border-color-input)',
            checkbox: 'var(--vf-border-color-input)',
            checkboxFocus: 'var(--vf-primary)',
            checkboxHover: 'var(--vf-border-color-checkbox)',
            checkboxDanger: 'var(--vf-border-color-checkbox)',
            checkboxSuccess: 'var(--vf-border-color-checkbox)',
            checked: 'var(--vf-primary)', // applies to checkbox & radio
            btn: 'var(--vf-primary)',
            tag: 'var(--vf-primary)',
            sliderTooltip: 'var(--vf-primary)',
            passive: 'var(--vf-gray-300)',
            btnDanger: 'var(--vf-danger)',
            btnSecondary: 'var(--vf-gray-200)',
            blockquote: 'var(--vf-gray-300)',
            hr: 'var(--vf-gray-300)',
            signatureHr: 'var(--vf-gray-300)',
            table: 'var(--vf-gray-300)',
        },

        shadows: {
            input: '0px 0px 0px 0px rgba(0,0,0,0)',
            inputHover: 'var(--vf-shadow-input)',
            inputFocus: 'var(--vf-shadow-input)',
            handles: '0px 0px 0px 0px rgba(0,0,0,0)',
            handlesHover: 'var(--vf-shadow-input-hover)',
            handlesFocus: 'var(--vf-shadow-input-focus)',
            btn: 'var(--vf-shadow-input)',
            dropdown: 'var(--vf-shadow-input)',
        },

        bgColorsDark: {
            input: 'var(--vf-dark-800)',
            inputHover: 'var(--vf-bg-input)',
            inputFocus: 'var(--vf-bg-input)',
            inputDanger: 'var(--vf-bg-input)',
            inputSuccess: 'var(--vf-bg-input)',
            checkbox: 'var(--vf-dark-700)',
            checkboxHover: 'var(--vf-bg-checkbox)',
            checkboxFocus: 'var(--vf-bg-checkbox)',
            checkboxDanger: 'var(--vf-bg-checkbox)',
            checkboxSuccess: 'var(--vf-bg-checkbox)',
            disabled: 'var(--vf-dark-700)',
            selected: 'var(--vf-dark-700)', // Option hover, cbgroup blocks selected
            passive: 'var(--vf-dark-700)',
            icon: 'var(--vf-dark-400)',
            danger: 'var(--vf-danger-lighter)',
            success: 'var(--vf-success-lighter)',
            addon: 'transparent',
            tag: 'var(--vf-primary)',
            sliderHandle: 'var(--vf-primary)',
            toggleHandle: '#ffffff',
            dateHead: 'var(--vf-dark-700)',
            btn: 'var(--vf-primary)',
            btnDanger: 'var(--vf-danger)',
            btnSecondary: 'var(--vf-dark-700)',
            tableHeader: 'var(--vf-dark-500)',
        },

        textColorsDark: {
            onPrimary: '#ffffff',
            input: 'var(--vf-dark-100)',
            inputHover: 'var(--vf-color-input)',
            inputFocus: 'var(--vf-color-input)',
            inputDanger: 'var(--vf-color-input)',
            inputSuccess: 'var(--vf-color-input)',
            placeholder: 'var(--vf-dark-500)',
            disabled: 'var(--vf-dark-500)',
            passive: 'var(--vf-dark-900)',
            muted: 'var(--vf-dark-500)',
            floating: 'var(--vf-color-muted)',
            floatingFocus: 'var(--vf-color-floating)',
            floatingSuccess: 'var(--vf-color-floating)',
            floatingDanger: 'var(--vf-color-floating)',
            danger: 'var(--vf-danger)',
            success: 'var(--vf-success)',
            addon: 'initial',
            tag: 'var(--vf-color-on-primary)',
            dateHead: 'var(--vf-dark-200)',
            btn: 'var(--vf-color-on-primary)',
            btnDanger: '#ffffff',
            btnSecondary: 'var(--vf-dark-300)',
            tableHeader: 'inherit',
        },

        borderColorsDark: {
            input: 'var(--vf-dark-800)',
            inputFocus: 'var(--vf-primary)',
            inputHover: 'var(--vf-border-color-input)',
            inputDanger: 'var(--vf-border-color-input)',
            inputSuccess: 'var(--vf-border-color-input)',
            checkbox: 'var(--vf-border-color-input)',
            checkboxFocus: 'var(--vf-primary)',
            checkboxHover: 'var(--vf-border-color-checkbox)',
            checkboxDanger: 'var(--vf-border-color-checkbox)',
            checkboxSuccess: 'var(--vf-border-color-checkbox)',
            checked: 'var(--vf-primary)', // applies to checkbox & radio
            btn: 'var(--vf-primary)',
            tag: 'var(--vf-primary)',
            sliderTooltip: 'var(--vf-primary)',
            passive: 'var(--vf-dark-700)',
            btnDanger: 'var(--vf-danger)',
            btnSecondary: 'var(--vf-dark-700)',
            blockquote: 'var(--vf-dark-700)',
            hr: 'var(--vf-dark-700)',
            signatureHr: 'var(--vf-dark-500)',
            table: 'var(--vf-dark-400)',
        },

        shadowsDark: {
            input: '0px 0px 0px 0px rgba(0,0,0,0)',
            inputHover: 'var(--vf-shadow-input)',
            inputFocus: 'var(--vf-shadow-input)',
            handles: '0px 0px 0px 0px rgba(0,0,0,0)',
            handlesHover: 'var(--vf-shadow-input-hover)',
            handlesFocus: 'var(--vf-shadow-input-focus)',
            btn: 'var(--vf-shadow-input)',
            dropdown: 'var(--vf-shadow-input)',
        },

        checkboxSize: {
            base: '--spacing(4)',
            sm: '--spacing(3.5)',
            lg: '--spacing(4)',
        },

        gallerySize: {
            base: '--spacing(24)',
            sm: '--spacing(20)',
            lg: '--spacing(28)',
        },

        toggleWidth: {
            base: '--spacing(12)',
            sm: '--spacing(11)',
            lg: '--spacing(12)',
        },

        toggleHeight: {
            base: '--spacing(5)',
            sm: '--spacing(4)',
            lg: '--spacing(5)',
        },

        sliderHeight: {
            base: '--spacing(1.5)',
            sm: '--spacing(1.25)',
            lg: '--spacing(2)',
        },

        sliderHeightVertical: {
            base: '--spacing(80)',
            sm: 'var(--vf-slider-height-vertical)',
            lg: 'var(--vf-slider-height-vertical)',
        },

        sliderHandleSize: {
            base: '--spacing(4)',
            sm: '--spacing(3.5)',
            lg: '--spacing(5)',
        },

        sliderTooltipDistance: {
            base: '--spacing(2)',
            sm: '--spacing(1.5)',
            lg: '--spacing(2)',
        },

        sliderTooltipArrowSize: {
            base: '--spacing(1.25)',
            sm: 'var(--vf-slider-tooltip-arrow-size)',
            lg: 'var(--vf-slider-tooltip-arrow-size)',
        }
    };

    const extend = {
        zIndex: {
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            999: 999,
            1000: 1000,
        },
        margin: {
            '0.75': '0.1875rem',
            '1\/10': '10%',
        },
        padding: {
            '0.25': '0.0625rem',
            '0.75': '0.1875rem',
            '1.25': '0.3125rem',
            '1.75': '0.4375rem',
            '2.25': '0.5625rem',
            '2.75': '0.6875rem',
        },
        width: {
            '0.25': '0.0625rem',
            '0.75': '0.1875rem',
            '1.25': '0.3125rem',
            '1.75': '0.4375rem',
            '2.25': '0.5625rem',
            '2.75': '0.6875rem',
            '3.5': '0.875rem',
            '4.5': '1.125rem',
            '1\/10': '10%',
        },
        height: {
            '0.25': '0.0625rem',
            '0.75': '0.1875rem',
            '1.25': '0.3125rem',
            '1.75': '0.4375rem',
            '2.25': '0.5625rem',
            '2.75': '0.6875rem',
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
        outline: {
            zero: ['0px solid var(--vf-ring-color)', '0px']
        },
        lineHeight: {
            px: '1px',
        },
        transitionProperty: {
            input: 'box-shadow, color, background-color, border-color'
        },
        borderOpacity: {
            '15': '0.15',
        },
        fontSize: {
            '05xs': ['0.6875rem', {
                lineHeight: '0.875rem'
            }],
            '05sm': ['0.8125rem', {
                lineHeight: '1.125rem',
            }],
        },
        backgroundImage: {
            'form-flags': `url('data:image/png;base64,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')`,
        },
    };

    const parseVarsDeep = (prefix, content) => {
        if (typeof content === 'string') {
            return `${e(prefix)}: ${content};`;
        }
        return map(
            content,
            (value, key) => parseVarsDeep(`${prefix}-${key}`, value)
        ).filter(Boolean).join("\n");

    }

    const formVarsDefined = map(formVars, (value, key) => {
        return parseVarsDeep(`--form-${key}`, value);
    }).filter(Boolean).join("\n");

    const themeExtensionStrings = map(extend, (value, key) => {
        return parseVarsDeep(`--form-${key}`, value);
    }).filter(Boolean).join("\n");

    const vfBaseThemeVars = {
        '--vf-primary': 'var(--form-primary)',
        '--vf-primary-darker': 'var(--form-primaryDarker)',

        '--vf-danger': 'var(--form-danger)',
        '--vf-danger-lighter': 'var(--form-dangerLighter)',

        '--vf-success': 'var(--form-success)',
        '--vf-success-lighter': 'var(--form-successLighter)',

        '--vf-ring-color': 'var(--form-ringColor)',
        '--vf-ring-width': 'var(--form-ringWidth)',

        '--vf-link-color': 'var(--form-linkColor)',
        '--vf-link-decoration': 'var(--form-linkDecoration)',

        '--vf-gray-50': 'var(--form-grays-50)',
        '--vf-gray-100': 'var(--form-grays-100)',
        '--vf-gray-200': 'var(--form-grays-200)',
        '--vf-gray-300': 'var(--form-grays-300)',
        '--vf-gray-400': 'var(--form-grays-400)',
        '--vf-gray-500': 'var(--form-grays-500)',
        '--vf-gray-600': 'var(--form-grays-600)',
        '--vf-gray-700': 'var(--form-grays-700)',
        '--vf-gray-800': 'var(--form-grays-800)',
        '--vf-gray-900': 'var(--form-grays-900)',

        '--vf-dark-50': 'var(--form-darks-50)',
        '--vf-dark-100': 'var(--form-darks-100)',
        '--vf-dark-200': 'var(--form-darks-200)',
        '--vf-dark-300': 'var(--form-darks-300)',
        '--vf-dark-400': 'var(--form-darks-400)',
        '--vf-dark-500': 'var(--form-darks-500)',
        '--vf-dark-600': 'var(--form-darks-600)',
        '--vf-dark-700': 'var(--form-darks-700)',
        '--vf-dark-800': 'var(--form-darks-800)',
        '--vf-dark-900': 'var(--form-darks-900)',

        '--vf-font-size': 'var(--form-fontSize-base)',
        '--vf-font-size-sm': 'var(--form-fontSize-sm)',
        '--vf-font-size-lg': 'var(--form-fontSize-lg)',

        '--vf-font-size-small': 'var(--form-smallFontSize-base)',
        '--vf-font-size-small-sm': 'var(--form-smallFontSize-sm)',
        '--vf-font-size-small-lg': 'var(--form-smallFontSize-lg)',

        '--vf-font-size-h1': 'var(--form-h1FontSize-base)',
        '--vf-font-size-h1-sm': 'var(--form-h1FontSize-sm)',
        '--vf-font-size-h1-lg': 'var(--form-h1FontSize-lg)',

        '--vf-font-size-h2': 'var(--form-h2FontSize-base)',
        '--vf-font-size-h2-sm': 'var(--form-h2FontSize-sm)',
        '--vf-font-size-h2-lg': 'var(--form-h2FontSize-lg)',

        '--vf-font-size-h3': 'var(--form-h3FontSize-base)',
        '--vf-font-size-h3-sm': 'var(--form-h3FontSize-sm)',
        '--vf-font-size-h3-lg': 'var(--form-h3FontSize-lg)',

        '--vf-font-size-h4': 'var(--form-h4FontSize-base)',
        '--vf-font-size-h4-sm': 'var(--form-h4FontSize-sm)',
        '--vf-font-size-h4-lg': 'var(--form-h4FontSize-lg)',

        '--vf-font-size-h1-mobile': 'var(--form-h1MobileFontSize-base)',
        '--vf-font-size-h1-mobile-sm': 'var(--form-h1MobileFontSize-sm)',
        '--vf-font-size-h1-mobile-lg': 'var(--form-h1MobileFontSize-lg)',

        '--vf-font-size-h2-mobile': 'var(--form-h2MobileFontSize-base)',
        '--vf-font-size-h2-mobile-sm': 'var(--form-h2MobileFontSize-sm)',
        '--vf-font-size-h2-mobile-lg': 'var(--form-h2MobileFontSize-lg)',

        '--vf-font-size-h3-mobile': 'var(--form-h3MobileFontSize-base)',
        '--vf-font-size-h3-mobile-sm': 'var(--form-h3MobileFontSize-sm)',
        '--vf-font-size-h3-mobile-lg': 'var(--form-h3MobileFontSize-lg)',

        '--vf-font-size-h4-mobile': 'var(--form-h4MobileFontSize-base)',
        '--vf-font-size-h4-mobile-sm': 'var(--form-h4MobileFontSize-sm)',
        '--vf-font-size-h4-mobile-lg': 'var(--form-h4MobileFontSize-lg)',

        '--vf-line-height': 'var(--form-lineHeight-base)',
        '--vf-line-height-sm': 'var(--form-lineHeight-sm)',
        '--vf-line-height-lg': 'var(--form-lineHeight-lg)',

        '--vf-line-height-small': 'var(--form-smallLineHeight-base)',
        '--vf-line-height-small-sm': 'var(--form-smallLineHeight-sm)',
        '--vf-line-height-small-lg': 'var(--form-smallLineHeight-lg)',

        '--vf-line-height-headings': 'var(--form-headingsLineHeight-base)',
        '--vf-line-height-headings-sm': 'var(--form-headingsLineHeight-sm)',
        '--vf-line-height-headings-lg': 'var(--form-headingsLineHeight-lg)',

        '--vf-line-height-blockquote': 'var(--form-blockquoteLineHeight-base)',
        '--vf-line-height-blockquote-sm': 'var(--form-blockquoteLineHeight-sm)',
        '--vf-line-height-blockquote-lg': 'var(--form-blockquoteLineHeight-lg)',

        '--vf-letter-spacing': 'var(--form-letterSpacing-base)',
        '--vf-letter-spacing-sm': 'var(--form-letterSpacing-sm)',
        '--vf-letter-spacing-lg': 'var(--form-letterSpacing-lg)',

        '--vf-letter-spacing-small': 'var(--form-smallLetterSpacing-base)',
        '--vf-letter-spacing-small-sm': 'var(--form-smallLetterSpacing-sm)',
        '--vf-letter-spacing-small-lg': 'var(--form-smallLetterSpacing-lg)',

        '--vf-letter-spacing-headings': 'var(--form-headingsLetterSpacing-base)',
        '--vf-letter-spacing-headings-sm': 'var(--form-headingsLetterSpacing-sm)',
        '--vf-letter-spacing-headings-lg': 'var(--form-headingsLetterSpacing-lg)',

        '--vf-letter-spacing-blockquote': 'var(--form-blockquoteLetterSpacing-base)',
        '--vf-letter-spacing-blockquote-sm': 'var(--form-blockquoteLetterSpacing-sm)',
        '--vf-letter-spacing-blockquote-lg': 'var(--form-blockquoteLetterSpacing-lg)',

        '--vf-gutter': 'var(--form-gutter-base)',
        '--vf-gutter-sm': 'var(--form-gutter-sm)',
        '--vf-gutter-lg': 'var(--form-gutter-lg)',

        '--vf-min-height-input': 'var(--form-inputMinHeight-base)',
        '--vf-min-height-input-sm': 'var(--form-inputMinHeight-sm)',
        '--vf-min-height-input-lg': 'var(--form-inputMinHeight-lg)',

        '--vf-py-input': 'var(--form-inputPy-base)',
        '--vf-py-input-sm': 'var(--form-inputPy-sm)',
        '--vf-py-input-lg': 'var(--form-inputPy-lg)',

        '--vf-px-input': 'var(--form-inputPx-base)',
        '--vf-px-input-sm': 'var(--form-inputPx-sm)',
        '--vf-px-input-lg': 'var(--form-inputPx-lg)',

        '--vf-py-btn': 'var(--form-btnPy-base)',
        '--vf-py-btn-sm': 'var(--form-btnPy-sm)',
        '--vf-py-btn-lg': 'var(--form-btnPy-lg)',

        '--vf-px-btn': 'var(--form-btnPx-base)',
        '--vf-px-btn-sm': 'var(--form-btnPx-sm)',
        '--vf-px-btn-lg': 'var(--form-btnPx-lg)',

        '--vf-py-btn-small': 'var(--form-btnSmallPy-base)',
        '--vf-py-btn-small-sm': 'var(--form-btnSmallPy-sm)',
        '--vf-py-btn-small-lg': 'var(--form-btnSmallPy-lg)',

        '--vf-px-btn-small': 'var(--form-btnSmallPx-base)',
        '--vf-px-btn-small-sm': 'var(--form-btnSmallPx-sm)',
        '--vf-px-btn-small-lg': 'var(--form-btnSmallPx-lg)',

        '--vf-py-group-tabs': 'var(--form-groupTabsPy-base)',
        '--vf-py-group-tabs-sm': 'var(--form-groupTabsPy-sm)',
        '--vf-py-group-tabs-lg': 'var(--form-groupTabsPy-lg)',

        '--vf-px-group-tabs': 'var(--form-groupTabsPx-base)',
        '--vf-px-group-tabs-sm': 'var(--form-groupTabsPx-sm)',
        '--vf-px-group-tabs-lg': 'var(--form-groupTabsPx-lg)',

        '--vf-py-group-blocks': 'var(--form-groupBlocksPy-base)',
        '--vf-py-group-blocks-sm': 'var(--form-groupBlocksPy-sm)',
        '--vf-py-group-blocks-lg': 'var(--form-groupBlocksPy-lg)',

        '--vf-px-group-blocks': 'var(--form-groupBlocksPx-base)',
        '--vf-px-group-blocks-sm': 'var(--form-groupBlocksPx-sm)',
        '--vf-px-group-blocks-lg': 'var(--form-groupBlocksPx-lg)',

        '--vf-py-tag': 'var(--form-tagPy-base)',
        '--vf-py-tag-sm': 'var(--form-tagPy-sm)',
        '--vf-py-tag-lg': 'var(--form-tagPy-lg)',

        '--vf-px-tag': 'var(--form-tagPx-base)',
        '--vf-px-tag-sm': 'var(--form-tagPx-sm)',
        '--vf-px-tag-lg': 'var(--form-tagPx-lg)',

        '--vf-py-slider-tooltip': 'var(--form-sliderTooltipPy-base)',
        '--vf-py-slider-tooltip-sm': 'var(--form-sliderTooltipPy-sm)',
        '--vf-py-slider-tooltip-lg': 'var(--form-sliderTooltipPy-lg)',

        '--vf-px-slider-tooltip': 'var(--form-sliderTooltipPx-base)',
        '--vf-px-slider-tooltip-sm': 'var(--form-sliderTooltipPx-sm)',
        '--vf-px-slider-tooltip-lg': 'var(--form-sliderTooltipPx-lg)',

        '--vf-py-blockquote': 'var(--form-blockquotePy-base)',
        '--vf-py-blockquote-sm': 'var(--form-blockquotePy-sm)',
        '--vf-py-blockquote-lg': 'var(--form-blockquotePy-lg)',

        '--vf-px-blockquote': 'var(--form-blockquotePx-base)',
        '--vf-px-blockquote-sm': 'var(--form-blockquotePx-sm)',
        '--vf-px-blockquote-lg': 'var(--form-blockquotePx-lg)',

        '--vf-py-hr': 'var(--form-hrPy-base)',

        '--vf-space-addon': 'var(--form-spaceAddon-base)',
        '--vf-space-addon-sm': 'var(--form-spaceAddon-sm)',
        '--vf-space-addon-lg': 'var(--form-spaceAddon-lg)',

        '--vf-space-checkbox': 'var(--form-spaceCheckbox-base)',
        '--vf-space-checkbox-sm': 'var(--form-spaceCheckbox-sm)',
        '--vf-space-checkbox-lg': 'var(--form-spaceCheckbox-lg)',

        '--vf-space-tags': 'var(--form-spaceTags-base)',
        '--vf-space-tags-sm': 'var(--form-spaceTags-sm)',
        '--vf-space-tags-lg': 'var(--form-spaceTags-lg)',

        '--vf-space-static-tag-1': 'var(--form-spaceStaticTag1)',
        '--vf-space-static-tag-2': 'var(--form-spaceStaticTag2)',
        '--vf-space-static-tag-3': 'var(--form-spaceStaticTag3)',

        '--vf-floating-top': 'var(--form-floatingTop-base)',
        '--vf-floating-top-sm': 'var(--form-floatingTop-sm)',
        '--vf-floating-top-lg': 'var(--form-floatingTop-lg)',

        '--vf-bg-input': 'var(--form-bgColors-input)',
        '--vf-bg-input-hover': 'var(--form-bgColors-inputHover)',
        '--vf-bg-input-focus': 'var(--form-bgColors-inputFocus)',
        '--vf-bg-input-danger': 'var(--form-bgColors-inputDanger)',
        '--vf-bg-input-success': 'var(--form-bgColors-inputSuccess)',
        '--vf-bg-checkbox': 'var(--form-bgColors-checkbox)',
        '--vf-bg-checkbox-hover': 'var(--form-bgColors-checkboxHover)',
        '--vf-bg-checkbox-focus': 'var(--form-bgColors-checkboxFocus)',
        '--vf-bg-checkbox-danger': 'var(--form-bgColors-checkboxDanger)',
        '--vf-bg-checkbox-success': 'var(--form-bgColors-checkboxSuccess)',
        '--vf-bg-disabled': 'var(--form-bgColors-disabled)',
        '--vf-bg-selected': 'var(--form-bgColors-selected)',
        '--vf-bg-passive': 'var(--form-bgColors-passive)',
        '--vf-bg-icon': 'var(--form-bgColors-icon)',
        '--vf-bg-danger': 'var(--form-bgColors-danger)',
        '--vf-bg-success': 'var(--form-bgColors-success)',
        '--vf-bg-tag': 'var(--form-bgColors-tag)',
        '--vf-bg-slider-handle': 'var(--form-bgColors-sliderHandle)',
        '--vf-bg-toggle-handle': 'var(--form-bgColors-toggleHandle)',
        '--vf-bg-date-head': 'var(--form-bgColors-dateHead)',
        '--vf-bg-addon': 'var(--form-bgColors-addon)',
        '--vf-bg-btn': 'var(--form-bgColors-btn)',
        '--vf-bg-btn-danger': 'var(--form-bgColors-btnDanger)',
        '--vf-bg-btn-secondary': 'var(--form-bgColors-btnSecondary)',
        '--vf-bg-table-header': 'var(--form-bgColors-tableHeader)',

        '--vf-color-input': 'var(--form-textColors-input)',
        '--vf-color-input-hover': 'var(--form-textColors-inputHover)',
        '--vf-color-input-focus': 'var(--form-textColors-inputFocus)',
        '--vf-color-input-danger': 'var(--form-textColors-inputDanger)',
        '--vf-color-input-success': 'var(--form-textColors-inputSuccess)',
        '--vf-color-disabled': 'var(--form-textColors-disabled)',
        '--vf-color-placeholder': 'var(--form-textColors-placeholder)',
        '--vf-color-passive': 'var(--form-textColors-passive)',
        '--vf-color-muted': 'var(--form-textColors-muted)',
        '--vf-color-floating': 'var(--form-textColors-floating)',
        '--vf-color-floating-focus': 'var(--form-textColors-floatingFocus)',
        '--vf-color-floating-success': 'var(--form-textColors-floatingSuccess)',
        '--vf-color-floating-danger': 'var(--form-textColors-floatingDanger)',
        '--vf-color-on-primary': 'var(--form-textColors-onPrimary)',
        '--vf-color-danger': 'var(--form-textColors-danger)',
        '--vf-color-success': 'var(--form-textColors-success)',
        '--vf-color-tag': 'var(--form-textColors-tag)',
        '--vf-color-addon': 'var(--form-textColors-addon)',
        '--vf-color-date-head': 'var(--form-textColors-dateHead)',
        '--vf-color-btn': 'var(--form-textColors-btn)',
        '--vf-color-btn-danger': 'var(--form-textColors-btnDanger)',
        '--vf-color-btn-secondary': 'var(--form-textColors-btnSecondary)',
        '--vf-color-table-header': 'var(--form-textColors-tableHeader)',

        '--vf-border-color-input': 'var(--form-borderColors-input)',
        '--vf-border-color-input-hover': 'var(--form-borderColors-inputHover)',
        '--vf-border-color-input-focus': 'var(--form-borderColors-inputFocus)',
        '--vf-border-color-input-danger': 'var(--form-borderColors-inputDanger)',
        '--vf-border-color-input-success': 'var(--form-borderColors-inputSuccess)',
        '--vf-border-color-checkbox': 'var(--form-borderColors-checkbox)',
        '--vf-border-color-checkbox-hover': 'var(--form-borderColors-checkboxHover)',
        '--vf-border-color-checkbox-focus': 'var(--form-borderColors-checkboxFocus)',
        '--vf-border-color-checkbox-danger': 'var(--form-borderColors-checkboxDanger)',
        '--vf-border-color-checkbox-success': 'var(--form-borderColors-checkboxSuccess)',
        '--vf-border-color-checked': 'var(--form-borderColors-checked)',
        '--vf-border-color-passive': 'var(--form-borderColors-passive)',
        '--vf-border-color-slider-tooltip': 'var(--form-borderColors-sliderTooltip)',
        '--vf-border-color-tag': 'var(--form-borderColors-tag)',
        '--vf-border-color-btn': 'var(--form-borderColors-btn)',
        '--vf-border-color-btn-danger': 'var(--form-borderColors-btnDanger)',
        '--vf-border-color-btn-secondary': 'var(--form-borderColors-btnSecondary)',
        '--vf-border-color-blockquote': 'var(--form-borderColors-blockquote)',
        '--vf-border-color-hr': 'var(--form-borderColors-hr)',
        '--vf-border-color-signature-hr': 'var(--form-borderColors-signatureHr)',
        '--vf-border-color-table': 'var(--form-borderColors-table)',

        '--vf-border-width-input-t': 'var(--form-borderWidths-input)',
        '--vf-border-width-input-r': 'var(--form-borderWidths-input)',
        '--vf-border-width-input-b': 'var(--form-borderWidths-input)',
        '--vf-border-width-input-l': 'var(--form-borderWidths-input)',

        '--vf-border-width-radio-t': 'var(--form-borderWidths-radio)',
        '--vf-border-width-radio-r': 'var(--form-borderWidths-radio)',
        '--vf-border-width-radio-b': 'var(--form-borderWidths-radio)',
        '--vf-border-width-radio-l': 'var(--form-borderWidths-radio)',

        '--vf-border-width-checkbox-t': 'var(--form-borderWidths-checkbox)',
        '--vf-border-width-checkbox-r': 'var(--form-borderWidths-checkbox)',
        '--vf-border-width-checkbox-b': 'var(--form-borderWidths-checkbox)',
        '--vf-border-width-checkbox-l': 'var(--form-borderWidths-checkbox)',

        '--vf-border-width-dropdown': 'var(--form-borderWidths-dropdown)',
        '--vf-border-width-btn': 'var(--form-borderWidths-btn)',
        '--vf-border-width-toggle': 'var(--form-borderWidths-toggle)',
        '--vf-border-width-tag': 'var(--form-borderWidths-tag)',
        '--vf-border-width-blockquote': 'var(--form-borderWidths-blockquote)',
        '--vf-border-width-table': 'var(--form-borderWidths-table)',

        '--vf-shadow-input': 'var(--form-shadows-input)',
        '--vf-shadow-input-hover': 'var(--form-shadows-inputHover)',
        '--vf-shadow-input-focus': 'var(--form-shadows-inputFocus)',
        '--vf-shadow-handles': 'var(--form-shadows-handles)',
        '--vf-shadow-handles-hover': 'var(--form-shadows-handlesHover)',
        '--vf-shadow-handles-focus': 'var(--form-shadows-handlesFocus)',
        '--vf-shadow-btn': 'var(--form-shadows-btn)',
        '--vf-shadow-dropdown': 'var(--form-shadows-dropdown)',

        '--vf-radius-input': 'var(--form-inputRadius-base)',
        '--vf-radius-input-sm': 'var(--form-inputRadius-sm)',
        '--vf-radius-input-lg': 'var(--form-inputRadius-lg)',

        '--vf-radius-btn': 'var(--form-btnRadius-base)',
        '--vf-radius-btn-sm': 'var(--form-btnRadius-sm)',
        '--vf-radius-btn-lg': 'var(--form-btnRadius-base)',

        '--vf-radius-small': 'var(--form-smallRadius-base)',
        '--vf-radius-small-sm': 'var(--form-smallRadius-sm)',
        '--vf-radius-small-lg': 'var(--form-smallRadius-base)',

        '--vf-radius-large': 'var(--form-largeRadius-base)',
        '--vf-radius-large-sm': 'var(--form-largeRadius-sm)',
        '--vf-radius-large-lg': 'var(--form-largeRadius-base)',

        '--vf-radius-tag': 'var(--form-tagRadius-base)',
        '--vf-radius-tag-sm': 'var(--form-tagRadius-sm)',
        '--vf-radius-tag-lg': 'var(--form-tagRadius-base)',

        '--vf-radius-checkbox': 'var(--form-checkboxRadius-base)',
        '--vf-radius-checkbox-sm': 'var(--form-checkboxRadius-sm)',
        '--vf-radius-checkbox-lg': 'var(--form-checkboxRadius-base)',

        '--vf-radius-slider': 'var(--form-sliderRadius-base)',
        '--vf-radius-slider-sm': 'var(--form-sliderRadius-sm)',
        '--vf-radius-slider-lg': 'var(--form-sliderRadius-base)',

        '--vf-radius-image': 'var(--form-imageRadius-base)',
        '--vf-radius-image-sm': 'var(--form-imageRadius-sm)',
        '--vf-radius-image-lg': 'var(--form-imageRadius-base)',

        '--vf-radius-gallery': 'var(--form-galleryRadius-base)',
        '--vf-radius-gallery-sm': 'var(--form-galleryRadius-sm)',
        '--vf-radius-gallery-lg': 'var(--form-galleryRadius-base)',

        '--vf-checkbox-size': 'var(--form-checkboxSize-base)',
        '--vf-checkbox-size-sm': 'var(--form-checkboxSize-sm)',
        '--vf-checkbox-size-lg': 'var(--form-checkboxSize-lg)',

        '--vf-gallery-size': 'var(--form-gallerySize-base)',
        '--vf-gallery-size-sm': 'var(--form-gallerySize-sm)',
        '--vf-gallery-size-lg': 'var(--form-gallerySize-lg)',

        '--vf-toggle-width': 'var(--form-toggleWidth-base)',
        '--vf-toggle-width-sm': 'var(--form-toggleWidth-sm)',
        '--vf-toggle-width-lg': 'var(--form-toggleWidth-lg)',

        '--vf-toggle-height': 'var(--form-toggleHeight-base)',
        '--vf-toggle-height-sm': 'var(--form-toggleHeight-sm)',
        '--vf-toggle-height-lg': 'var(--form-toggleHeight-lg)',

        '--vf-slider-height': 'var(--form-sliderHeight-base)',
        '--vf-slider-height-sm': 'var(--form-sliderHeight-sm)',
        '--vf-slider-height-lg': 'var(--form-sliderHeight-lg)',

        '--vf-slider-height-vertical': 'var(--form-sliderHeightVertical-base)',
        '--vf-slider-height-vertical-sm': 'var(--form-sliderHeightVertical-sm)',
        '--vf-slider-height-vertical-lg': 'var(--form-sliderHeightVertical-lg)',

        '--vf-slider-handle-size': 'var(--form-sliderHandleSize-base)',
        '--vf-slider-handle-size-sm': 'var(--form-sliderHandleSize-sm)',
        '--vf-slider-handle-size-lg': 'var(--form-sliderHandleSize-lg)',

        '--vf-slider-tooltip-distance': 'var(--form-sliderTooltipDistance-base)',
        '--vf-slider-tooltip-distance-sm': 'var(--form-sliderTooltipDistance-sm)',
        '--vf-slider-tooltip-distance-lg': 'var(--form-sliderTooltipDistance-lg)',

        '--vf-slider-tooltip-arrow-size': 'var(--form-sliderTooltipArrowSize-base)',
        '--vf-slider-tooltip-arrow-size-sm': 'var(--form-sliderTooltipArrowSize-sm)',
        '--vf-slider-tooltip-arrow-size-lg': 'var(--form-sliderTooltipArrowSize-lg)',
    }

    const darkVars = {
        '--vf-danger': 'var(--form-danger)',
        '--vf-danger-lighter': 'var(--form-dangerLighter)',

        '--vf-success': 'var(--form-success)',
        '--vf-success-lighter': 'var(--form-successLighter)',

        '--vf-bg-input': 'var(--form-bgColorsDark-input)',
        '--vf-bg-input-hover': 'var(--form-bgColorsDark-inputHover)',
        '--vf-bg-input-focus': 'var(--form-bgColorsDark-inputFocus)',
        '--vf-bg-input-danger': 'var(--form-bgColorsDark-inputDanger)',
        '--vf-bg-input-success': 'var(--form-bgColorsDark-inputSuccess)',
        '--vf-bg-checkbox': 'var(--form-bgColorsDark-checkbox)',
        '--vf-bg-checkbox-hover': 'var(--form-bgColorsDark-checkboxHover)',
        '--vf-bg-checkbox-focus': 'var(--form-bgColorsDark-checkboxFocus)',
        '--vf-bg-checkbox-danger': 'var(--form-bgColorsDark-checkboxDanger)',
        '--vf-bg-checkbox-success': 'var(--form-bgColorsDark-checkboxSuccess)',
        '--vf-bg-disabled': 'var(--form-bgColorsDark-disabled)',
        '--vf-bg-selected': 'var(--form-bgColorsDark-selected)',
        '--vf-bg-passive': 'var(--form-bgColorsDark-passive)',
        '--vf-bg-icon': 'var(--form-bgColorsDark-icon)',
        '--vf-bg-danger': 'var(--form-bgColorsDark-danger)',
        '--vf-bg-success': 'var(--form-bgColorsDark-success)',
        '--vf-bg-tag': 'var(--form-bgColorsDark-tag)',
        '--vf-bg-slider-handle': 'var(--form-bgColorsDark-sliderHandle)',
        '--vf-bg-toggle-handle': 'var(--form-bgColorsDark-toggleHandle)',
        '--vf-bg-date-head': 'var(--form-bgColorsDark-dateHead)',
        '--vf-bg-addon': 'var(--form-bgColorsDark-addon)',
        '--vf-bg-btn': 'var(--form-bgColorsDark-btn)',
        '--vf-bg-btn-danger': 'var(--form-bgColorsDark-btnDanger)',
        '--vf-bg-btn-secondary': 'var(--form-bgColorsDark-btnSecondary)',
        '--vf-bg-table-header': 'var(--form-bgColorsDark-tableHeader)',

        '--vf-color-input': 'var(--form-textColorsDark-input)',
        '--vf-color-input-hover': 'var(--form-textColorsDark-inputHover)',
        '--vf-color-input-focus': 'var(--form-textColorsDark-inputFocus)',
        '--vf-color-input-danger': 'var(--form-textColorsDark-inputDanger)',
        '--vf-color-input-success': 'var(--form-textColorsDark-inputSuccess)',
        '--vf-color-disabled': 'var(--form-textColorsDark-disabled)',
        '--vf-color-placeholder': 'var(--form-textColorsDark-placeholder)',
        '--vf-color-passive': 'var(--form-textColorsDark-passive)',
        '--vf-color-muted': 'var(--form-textColorsDark-muted)',
        '--vf-color-floating': 'var(--form-textColorsDark-floating)',
        '--vf-color-floating-focus': 'var(--form-textColorsDark-floatingFocus)',
        '--vf-color-floating-success': 'var(--form-textColorsDark-floatingSuccess)',
        '--vf-color-floating-danger': 'var(--form-textColorsDark-floatingDanger)',
        '--vf-color-on-primary': 'var(--form-textColorsDark-onPrimary)',
        '--vf-color-danger': 'var(--form-textColorsDark-danger)',
        '--vf-color-success': 'var(--form-textColorsDark-success)',
        '--vf-color-tag': 'var(--form-textColorsDark-tag)',
        '--vf-color-addon': 'var(--form-textColorsDark-addon)',
        '--vf-color-date-head': 'var(--form-textColorsDark-dateHead)',
        '--vf-color-btn': 'var(--form-textColorsDark-btn)',
        '--vf-color-btn-danger': 'var(--form-textColorsDark-btnDanger)',
        '--vf-color-btn-secondary': 'var(--form-textColorsDark-btnSecondary)',
        '--vf-color-table-header': 'var(--form-textColorsDark-tableHeader)',

        '--vf-border-color-input': 'var(--form-borderColorsDark-input)',
        '--vf-border-color-input-hover': 'var(--form-borderColorsDark-inputHover)',
        '--vf-border-color-input-focus': 'var(--form-borderColorsDark-inputFocus)',
        '--vf-border-color-input-danger': 'var(--form-borderColorsDark-inputDanger)',
        '--vf-border-color-input-success': 'var(--form-borderColorsDark-inputSuccess)',
        '--vf-border-color-checkbox': 'var(--form-borderColorsDark-checkbox)',
        '--vf-border-color-checkbox-hover': 'var(--form-borderColorsDark-checkboxHover)',
        '--vf-border-color-checkbox-focus': 'var(--form-borderColorsDark-checkboxFocus)',
        '--vf-border-color-checkbox-danger': 'var(--form-borderColorsDark-checkboxDanger)',
        '--vf-border-color-checkbox-success': 'var(--form-borderColorsDark-checkboxSuccess)',
        '--vf-border-color-checked': 'var(--form-borderColorsDark-checked)',
        '--vf-border-color-passive': 'var(--form-borderColorsDark-passive)',
        '--vf-border-color-slider-tooltip': 'var(--form-borderColorsDark-sliderTooltip)',
        '--vf-border-color-tag': 'var(--form-borderColorsDark-tag)',
        '--vf-border-color-btn': 'var(--form-borderColorsDark-btn)',
        '--vf-border-color-btn-danger': 'var(--form-borderColorsDark-btnDanger)',
        '--vf-border-color-btn-secondary': 'var(--form-borderColorsDark-btnSecondary)',
        '--vf-border-color-blockquote': 'var(--form-borderColorsDark-blockquote)',
        '--vf-border-color-hr': 'var(--form-borderColorsDark-hr)',
        '--vf-border-color-signature-hr': 'var(--form-borderColorsDark-signatureHr)',
        '--vf-border-color-table': 'var(--form-borderColorsDark-table)',

        '--vf-shadow-input': 'var(--form-shadowsDark-input)',
        '--vf-shadow-input-hover': 'var(--form-shadowsDark-inputHover)',
        '--vf-shadow-input-focus': 'var(--form-shadowsDark-inputFocus)',
        '--vf-shadow-handles': 'var(--form-shadowsDark-handles)',
        '--vf-shadow-handles-hover': 'var(--form-shadowsDark-handlesHover)',
        '--vf-shadow-handles-focus': 'var(--form-shadowsDark-handlesFocus)',
        '--vf-shadow-btn': 'var(--form-shadowsDark-btn)',
        '--vf-shadow-dropdown': 'var(--form-shadowsDark-dropdown)',
    }

    return `
@include tailwind;

@theme {
  ${cssIfy(vfBaseThemeVars, (s)=>s)}
  
  ${formVarsDefined}
  ${themeExtensionStrings}
  
  @keyframes step-loading {
      '0%': {
        transform: 'scale(0.5)'
      }
      '20%': {
        transform: 'scale(1.2)'
      }
      '100%': {
        transform: 'scale(0.5)'
      }
    }
    
  @keyframes form-spin {
    'from': {
      transform: 'rotate(0deg)'
    }
    'to': {
      transform: 'rotate(360deg)'
    }
  }
}

@dark {
    :root{
        ${cssIfy(darkVars,(s)=>s)}
    }
}

${pluginCss.filter(Boolean).join("\n")}
`;
};

function generate() {
    const createdCss = buildVueformCss();
    return fs.writeFile(
        require('path').join(__dirname,'..', 'dist', "tailwind.v4.vueform-plugin.css"),
        createdCss
    );
}

generate().then(r => console.log("dist/tailwind.v4.vueform-plugin.css created"));