const svgToDataUri = require('mini-svg-data-uri')
const Color = require('color')
const plugin = require('tailwindcss/plugin')
// const fs = require('fs')
// const path = require('path')

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

const vueform = plugin((context) => {
  const { theme, addBase, addUtilities, addVariant, e } = context
  const prefix = context.matchComponents === undefined ? context.prefix : s => s
  const version = context.matchComponents === undefined ? 2 : 3

  // Testing output
  // const file = fs.readFileSync(path.resolve(__dirname, './tw.txt'))
  // fs.writeFileSync(path.resolve(__dirname, './tw.txt'), file + '\n' + version.toString() + '\n' + JSON.stringify(Object.keys(context).sort()))

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
    {
      base: [':root', '*', '::before', '::after'],
      styles: {
        '--vf-primary': theme('form.primary'),
        '--vf-primary-darker': theme('form.primaryDarker') === null
          ? hslToRgba(Color(theme('form.primary')).darken(0.1).toString(), 1)
          : theme('form.primaryDarker'),

        '--vf-danger': theme('form.danger'),
        '--vf-danger-lighter': theme('form.dangerLighter'),

        '--vf-success': theme('form.success'),
        '--vf-success-lighter': theme('form.successLighter'),

        '--vf-ring-color': theme('form.ringColor') === null ? Color(theme('form.primary')).alpha(theme('form.ringOpacity')).toString() : theme('form.ringColor'),
        '--vf-ring-width': theme('form.ringWidth'),

        '--vf-link-color': theme('form.linkColor'),
        '--vf-link-decoration': theme('form.linkDecoration'),

        '--vf-gray-50': theme('form.grays.50'),
        '--vf-gray-100': theme('form.grays.100'),
        '--vf-gray-200': theme('form.grays.200'),
        '--vf-gray-300': theme('form.grays.300'),
        '--vf-gray-400': theme('form.grays.400'),
        '--vf-gray-500': theme('form.grays.500'),
        '--vf-gray-600': theme('form.grays.600'),
        '--vf-gray-700': theme('form.grays.700'),
        '--vf-gray-800': theme('form.grays.800'),
        '--vf-gray-900': theme('form.grays.900'),

        '--vf-font-size': Array.isArray(theme('form.fontSize.base')) ? theme('form.fontSize.base')[0] : theme('form.fontSize.base'),
        '--vf-font-size-sm': Array.isArray(theme('form.fontSize.sm')) ? theme('form.fontSize.sm')[0] : theme('form.fontSize.sm'),
        '--vf-font-size-lg': Array.isArray(theme('form.fontSize.lg')) ? theme('form.fontSize.lg')[0] : theme('form.fontSize.lg'),

        '--vf-font-size-small': Array.isArray(theme('form.smallFontSize.base')) ? theme('form.smallFontSize.base')[0] : theme('form.smallFontSize.base'),
        '--vf-font-size-small-sm': Array.isArray(theme('form.smallFontSize.sm')) ? theme('form.smallFontSize.sm')[0] : theme('form.smallFontSize.sm'),
        '--vf-font-size-small-lg': Array.isArray(theme('form.smallFontSize.lg')) ? theme('form.smallFontSize.lg')[0] : theme('form.smallFontSize.lg'),

        '--vf-font-size-h1': theme('form.h1FontSize.base'),
        '--vf-font-size-h1-sm': theme('form.h1FontSize.sm'),
        '--vf-font-size-h1-lg': theme('form.h1FontSize.lg'),

        '--vf-font-size-h2': theme('form.h2FontSize.base'),
        '--vf-font-size-h2-sm': theme('form.h2FontSize.sm'),
        '--vf-font-size-h2-lg': theme('form.h2FontSize.lg'),

        '--vf-font-size-h3': theme('form.h3FontSize.base'),
        '--vf-font-size-h3-sm': theme('form.h3FontSize.sm'),
        '--vf-font-size-h3-lg': theme('form.h3FontSize.lg'),

        '--vf-font-size-h4': theme('form.h4FontSize.base'),
        '--vf-font-size-h4-sm': theme('form.h4FontSize.sm'),
        '--vf-font-size-h4-lg': theme('form.h4FontSize.lg'),

        '--vf-font-size-h1-mobile': theme('form.h1MobileFontSize.base'),
        '--vf-font-size-h1-mobile-sm': theme('form.h1MobileFontSize.sm'),
        '--vf-font-size-h1-mobile-lg': theme('form.h1MobileFontSize.lg'),

        '--vf-font-size-h2-mobile': theme('form.h2MobileFontSize.base'),
        '--vf-font-size-h2-mobile-sm': theme('form.h2MobileFontSize.sm'),
        '--vf-font-size-h2-mobile-lg': theme('form.h2MobileFontSize.lg'),

        '--vf-font-size-h3-mobile': theme('form.h3MobileFontSize.base'),
        '--vf-font-size-h3-mobile-sm': theme('form.h3MobileFontSize.sm'),
        '--vf-font-size-h3-mobile-lg': theme('form.h3MobileFontSize.lg'),

        '--vf-font-size-h4-mobile': theme('form.h4MobileFontSize.base'),
        '--vf-font-size-h4-mobile-sm': theme('form.h4MobileFontSize.sm'),
        '--vf-font-size-h4-mobile-lg': theme('form.h4MobileFontSize.lg'),

        '--vf-line-height': theme('form.lineHeight.base'),
        '--vf-line-height-sm': theme('form.lineHeight.sm'),
        '--vf-line-height-lg': theme('form.lineHeight.lg'),

        '--vf-line-height-small': theme('form.smallLineHeight.base'),
        '--vf-line-height-small-sm': theme('form.smallLineHeight.sm'),
        '--vf-line-height-small-lg': theme('form.smallLineHeight.lg'),

        '--vf-line-height-headings': theme('form.headingsLineHeight.base'),
        '--vf-line-height-headings-sm': theme('form.headingsLineHeight.sm'),
        '--vf-line-height-headings-lg': theme('form.headingsLineHeight.lg'),

        '--vf-line-height-blockquote': theme('form.blockquoteLineHeight.base'),
        '--vf-line-height-blockquote-sm': theme('form.blockquoteLineHeight.sm'),
        '--vf-line-height-blockquote-lg': theme('form.blockquoteLineHeight.lg'),

        '--vf-letter-spacing': theme('form.letterSpacing.base'),
        '--vf-letter-spacing-sm': theme('form.letterSpacing.sm'),
        '--vf-letter-spacing-lg': theme('form.letterSpacing.lg'),

        '--vf-letter-spacing-small': theme('form.smallLetterSpacing.base'),
        '--vf-letter-spacing-small-sm': theme('form.smallLetterSpacing.sm'),
        '--vf-letter-spacing-small-lg': theme('form.smallLetterSpacing.lg'),

        '--vf-letter-spacing-headings': theme('form.headingsLetterSpacing.base'),
        '--vf-letter-spacing-headings-sm': theme('form.headingsLetterSpacing.sm'),
        '--vf-letter-spacing-headings-lg': theme('form.headingsLetterSpacing.lg'),

        '--vf-letter-spacing-blockquote': theme('form.blockquoteLetterSpacing.base'),
        '--vf-letter-spacing-blockquote-sm': theme('form.blockquoteLetterSpacing.sm'),
        '--vf-letter-spacing-blockquote-lg': theme('form.blockquoteLetterSpacing.lg'),

        '--vf-gutter': theme('form.gutter.base'),
        '--vf-gutter-sm': theme('form.gutter.sm'),
        '--vf-gutter-lg': theme('form.gutter.lg'),

        '--vf-min-height-input': theme('form.inputMinHeight.base'),
        '--vf-min-height-input-sm': theme('form.inputMinHeight.sm'),
        '--vf-min-height-input-lg': theme('form.inputMinHeight.lg'),

        '--vf-py-input': theme('form.inputPy.base'),
        '--vf-py-input-sm': theme('form.inputPy.sm'),
        '--vf-py-input-lg': theme('form.inputPy.lg'),

        '--vf-px-input': theme('form.inputPx.base'),
        '--vf-px-input-sm': theme('form.inputPx.sm'),
        '--vf-px-input-lg': theme('form.inputPx.lg'),

        '--vf-py-btn': theme('form.btnPy.base'),
        '--vf-py-btn-sm': theme('form.btnPy.sm'),
        '--vf-py-btn-lg': theme('form.btnPy.lg'),

        '--vf-px-btn': theme('form.btnPx.base'),
        '--vf-px-btn-sm': theme('form.btnPx.sm'),
        '--vf-px-btn-lg': theme('form.btnPx.lg'),

        '--vf-py-btn-small': theme('form.btnSmallPy.base'),
        '--vf-py-btn-small-sm': theme('form.btnSmallPy.sm'),
        '--vf-py-btn-small-lg': theme('form.btnSmallPy.lg'),

        '--vf-px-btn-small': theme('form.btnSmallPx.base'),
        '--vf-px-btn-small-sm': theme('form.btnSmallPx.sm'),
        '--vf-px-btn-small-lg': theme('form.btnSmallPx.lg'),

        '--vf-py-group-tabs': theme('form.groupTabsPy.base'),
        '--vf-py-group-tabs-sm': theme('form.groupTabsPy.sm'),
        '--vf-py-group-tabs-lg': theme('form.groupTabsPy.lg'),

        '--vf-px-group-tabs': theme('form.groupTabsPx.base'),
        '--vf-px-group-tabs-sm': theme('form.groupTabsPx.sm'),
        '--vf-px-group-tabs-lg': theme('form.groupTabsPx.lg'),

        '--vf-py-group-blocks': theme('form.groupBlocksPy.base'),
        '--vf-py-group-blocks-sm': theme('form.groupBlocksPy.sm'),
        '--vf-py-group-blocks-lg': theme('form.groupBlocksPy.lg'),

        '--vf-px-group-blocks': theme('form.groupBlocksPx.base'),
        '--vf-px-group-blocks-sm': theme('form.groupBlocksPx.sm'),
        '--vf-px-group-blocks-lg': theme('form.groupBlocksPx.lg'),

        '--vf-py-tag': theme('form.tagPy.base'),
        '--vf-py-tag-sm': theme('form.tagPy.sm'),
        '--vf-py-tag-lg': theme('form.tagPy.lg'),

        '--vf-px-tag': theme('form.tagPx.base'),
        '--vf-px-tag-sm': theme('form.tagPx.sm'),
        '--vf-px-tag-lg': theme('form.tagPx.lg'),

        '--vf-py-slider-tooltip': theme('form.sliderTooltipPy.base'),
        '--vf-py-slider-tooltip-sm': theme('form.sliderTooltipPy.sm'),
        '--vf-py-slider-tooltip-lg': theme('form.sliderTooltipPy.lg'),

        '--vf-px-slider-tooltip': theme('form.sliderTooltipPx.base'),
        '--vf-px-slider-tooltip-sm': theme('form.sliderTooltipPx.sm'),
        '--vf-px-slider-tooltip-lg': theme('form.sliderTooltipPx.lg'),

        '--vf-py-blockquote': theme('form.blockquotePy.base'),
        '--vf-py-blockquote-sm': theme('form.blockquotePy.sm'),
        '--vf-py-blockquote-lg': theme('form.blockquotePy.lg'),

        '--vf-px-blockquote': theme('form.blockquotePx.base'),
        '--vf-px-blockquote-sm': theme('form.blockquotePx.sm'),
        '--vf-px-blockquote-lg': theme('form.blockquotePx.lg'),

        '--vf-py-hr': theme('form.hrPy.base'),

        '--vf-space-addon': theme('form.spaceAddon.base'),
        '--vf-space-addon-sm': theme('form.spaceAddon.sm'),
        '--vf-space-addon-lg': theme('form.spaceAddon.lg'),

        '--vf-space-checkbox': theme('form.spaceCheckbox.base'),
        '--vf-space-checkbox-sm': theme('form.spaceCheckbox.sm'),
        '--vf-space-checkbox-lg': theme('form.spaceCheckbox.lg'),

        '--vf-space-tags': theme('form.spaceTags.base'),
        '--vf-space-tags-sm': theme('form.spaceTags.sm'),
        '--vf-space-tags-lg': theme('form.spaceTags.lg'),

        '--vf-space-static-tag-1': theme('form.spaceStaticTag1'),
        '--vf-space-static-tag-2': theme('form.spaceStaticTag2'),
        '--vf-space-static-tag-3': theme('form.spaceStaticTag3'),

        '--vf-floating-top': theme('form.floatingTop.base'),
        '--vf-floating-top-sm': theme('form.floatingTop.sm'),
        '--vf-floating-top-lg': theme('form.floatingTop.lg'),

        '--vf-bg-input': theme('form.bgColors.input'),
        '--vf-bg-input-hover': theme('form.bgColors.inputHover'),
        '--vf-bg-input-focus': theme('form.bgColors.inputFocus'),
        '--vf-bg-input-danger': theme('form.bgColors.inputDanger'),
        '--vf-bg-input-success': theme('form.bgColors.inputSuccess'),
        '--vf-bg-disabled': theme('form.bgColors.disabled'),
        '--vf-bg-selected': theme('form.bgColors.selected'),
        '--vf-bg-passive': theme('form.bgColors.passive'),
        '--vf-bg-icon': theme('form.bgColors.icon'),
        '--vf-bg-danger': theme('form.bgColors.danger'),
        '--vf-bg-success': theme('form.bgColors.success'),
        '--vf-bg-tag': theme('form.bgColors.tag'),
        '--vf-bg-slider-handle': theme('form.bgColors.sliderHandle'),
        '--vf-bg-toggle-handle': theme('form.bgColors.toggleHandle'),
        '--vf-bg-date-head': theme('form.bgColors.dateHead'),
        '--vf-bg-addon': theme('form.bgColors.addon'),
        '--vf-bg-btn': theme('form.bgColors.btn'),
        '--vf-bg-btn-danger': theme('form.bgColors.btnDanger'),
        '--vf-bg-btn-secondary': theme('form.bgColors.btnSecondary'),

        '--vf-color-input': theme('form.textColors.input'),
        '--vf-color-input-hover': theme('form.textColors.inputHover'),
        '--vf-color-input-focus': theme('form.textColors.inputFocus'),
        '--vf-color-input-danger': theme('form.textColors.inputDanger'),
        '--vf-color-input-success': theme('form.textColors.inputSuccess'),
        '--vf-color-disabled': theme('form.textColors.disabled'),
        '--vf-color-placeholder': theme('form.textColors.placeholder'),
        '--vf-color-passive': theme('form.textColors.passive'),
        '--vf-color-muted': theme('form.textColors.muted'),
        '--vf-color-floating': theme('form.textColors.floating'),
        '--vf-color-floating-focus': theme('form.textColors.floatingFocus'),
        '--vf-color-floating-success': theme('form.textColors.floatingSuccess'),
        '--vf-color-floating-danger': theme('form.textColors.floatingDanger'),
        '--vf-color-on-primary': theme('form.textColors.onPrimary'),
        '--vf-color-danger': theme('form.textColors.danger'),
        '--vf-color-success': theme('form.textColors.success'),
        '--vf-color-tag': theme('form.textColors.tag'),
        '--vf-color-addon': theme('form.textColors.addon'),
        '--vf-color-date-head': theme('form.textColors.dateHead'),
        '--vf-color-btn': theme('form.textColors.btn'),
        '--vf-color-btn-danger': theme('form.textColors.btnDanger'),
        '--vf-color-btn-secondary': theme('form.textColors.btnSecondary'),

        '--vf-border-color-input': theme('form.borderColors.input'),
        '--vf-border-color-input-hover': theme('form.borderColors.inputHover'),
        '--vf-border-color-input-focus': theme('form.borderColors.inputFocus'),
        '--vf-border-color-input-danger': theme('form.borderColors.inputDanger'),
        '--vf-border-color-input-success': theme('form.borderColors.inputSuccess'),
        '--vf-border-color-checked': theme('form.borderColors.checked'),
        '--vf-border-color-passive': theme('form.borderColors.passive'),
        '--vf-border-color-slider-tooltip': theme('form.borderColors.sliderTooltip'),
        '--vf-border-color-tag': theme('form.borderColors.tag'),
        '--vf-border-color-btn': theme('form.borderColors.btn'),
        '--vf-border-color-btn-danger': theme('form.borderColors.btnDanger'),
        '--vf-border-color-btn-secondary': theme('form.borderColors.btnSecondary'),
        '--vf-border-color-blockquote': theme('form.borderColors.blockquote'),
        '--vf-border-color-hr': theme('form.borderColors.hr'),

        '--vf-border-width-input-t': Array.isArray(theme('form.borderWidths.input')) ? theme('form.borderWidths.input')[0] : theme('form.borderWidths.input'),
        '--vf-border-width-input-r': Array.isArray(theme('form.borderWidths.input')) ? theme('form.borderWidths.input')[1] : theme('form.borderWidths.input'),
        '--vf-border-width-input-b': Array.isArray(theme('form.borderWidths.input')) ? theme('form.borderWidths.input')[2] : theme('form.borderWidths.input'),
        '--vf-border-width-input-l': Array.isArray(theme('form.borderWidths.input')) ? theme('form.borderWidths.input')[3] : theme('form.borderWidths.input'),

        '--vf-border-width-radio-t': Array.isArray(theme('form.borderWidths.radio')) ? theme('form.borderWidths.radio')[0] : theme('form.borderWidths.radio'),
        '--vf-border-width-radio-r': Array.isArray(theme('form.borderWidths.radio')) ? theme('form.borderWidths.radio')[1] : theme('form.borderWidths.radio'),
        '--vf-border-width-radio-b': Array.isArray(theme('form.borderWidths.radio')) ? theme('form.borderWidths.radio')[2] : theme('form.borderWidths.radio'),
        '--vf-border-width-radio-l': Array.isArray(theme('form.borderWidths.radio')) ? theme('form.borderWidths.radio')[3] : theme('form.borderWidths.radio'),

        '--vf-border-width-checkbox-t': Array.isArray(theme('form.borderWidths.checkbox')) ? theme('form.borderWidths.checkbox')[0] : theme('form.borderWidths.checkbox'),
        '--vf-border-width-checkbox-r': Array.isArray(theme('form.borderWidths.checkbox')) ? theme('form.borderWidths.checkbox')[1] : theme('form.borderWidths.checkbox'),
        '--vf-border-width-checkbox-b': Array.isArray(theme('form.borderWidths.checkbox')) ? theme('form.borderWidths.checkbox')[2] : theme('form.borderWidths.checkbox'),
        '--vf-border-width-checkbox-l': Array.isArray(theme('form.borderWidths.checkbox')) ? theme('form.borderWidths.checkbox')[3] : theme('form.borderWidths.checkbox'),

        '--vf-border-width-dropdown': Array.isArray(theme('form.borderWidths.dropdown')) ? theme('form.borderWidths.dropdown').join(' ') : theme('form.borderWidths.dropdown'),
        '--vf-border-width-btn': Array.isArray(theme('form.borderWidths.btn')) ? theme('form.borderWidths.btn').join(' ') : theme('form.borderWidths.btn'),
        '--vf-border-width-toggle': Array.isArray(theme('form.borderWidths.toggle')) ? theme('form.borderWidths.toggle').join(' ') : theme('form.borderWidths.toggle'),
        '--vf-border-width-tag': Array.isArray(theme('form.borderWidths.tag')) ? theme('form.borderWidths.tag').join(' ') : theme('form.borderWidths.tag'),
        '--vf-border-width-blockquote': theme('form.borderWidths.blockquote'),

        '--vf-shadow-input': theme('form.shadows.input'),
        '--vf-shadow-input-hover': theme('form.shadows.inputHover'),
        '--vf-shadow-input-focus': theme('form.shadows.inputFocus'),
        '--vf-shadow-handles': theme('form.shadows.handles'),
        '--vf-shadow-handles-hover': theme('form.shadows.handlesHover'),
        '--vf-shadow-handles-focus': theme('form.shadows.handlesFocus'),
        '--vf-shadow-btn': theme('form.shadows.btn'),
        '--vf-shadow-dropdown': theme('form.shadows.dropdown'),
        
        '--vf-radius-input': Array.isArray(theme('form.inputRadius.base')) ? theme('form.inputRadius.base').join(' ') : theme('form.inputRadius.base'),
        '--vf-radius-input-sm': theme('form.inputRadius.sm'),
        '--vf-radius-input-lg': theme('form.inputRadius.lg'),
        
        '--vf-radius-btn': theme('form.btnRadius.base'),
        '--vf-radius-btn-sm': theme('form.btnRadius.sm'),
        '--vf-radius-btn-lg': theme('form.btnRadius.base'),

        '--vf-radius-small': theme('form.smallRadius.base'),
        '--vf-radius-small-sm': theme('form.smallRadius.sm'),
        '--vf-radius-small-lg': theme('form.smallRadius.base'),

        '--vf-radius-large': theme('form.largeRadius.base'),
        '--vf-radius-large-sm': theme('form.largeRadius.sm'),
        '--vf-radius-large-lg': theme('form.largeRadius.base'),

        '--vf-radius-tag': theme('form.tagRadius.base'),
        '--vf-radius-tag-sm': theme('form.tagRadius.sm'),
        '--vf-radius-tag-lg': theme('form.tagRadius.base'),

        '--vf-radius-checkbox': theme('form.checkboxRadius.base'),
        '--vf-radius-checkbox-sm': theme('form.checkboxRadius.sm'),
        '--vf-radius-checkbox-lg': theme('form.checkboxRadius.base'),

        '--vf-radius-slider': theme('form.sliderRadius.base'),
        '--vf-radius-slider-sm': theme('form.sliderRadius.sm'),
        '--vf-radius-slider-lg': theme('form.sliderRadius.base'),

        '--vf-radius-image': theme('form.imageRadius.base'),
        '--vf-radius-image-sm': theme('form.imageRadius.sm'),
        '--vf-radius-image-lg': theme('form.imageRadius.base'),

        '--vf-radius-gallery': theme('form.galleryRadius.base'),
        '--vf-radius-gallery-sm': theme('form.galleryRadius.sm'),
        '--vf-radius-gallery-lg': theme('form.galleryRadius.base'),

        '--vf-checkbox-size': theme('form.checkboxSize.base'),
        '--vf-checkbox-size-sm': theme('form.checkboxSize.sm'),
        '--vf-checkbox-size-lg': theme('form.checkboxSize.lg'),

        '--vf-gallery-size': theme('form.gallerySize.base'),
        '--vf-gallery-size-sm': theme('form.gallerySize.sm'),
        '--vf-gallery-size-lg': theme('form.gallerySize.lg'),

        '--vf-toggle-width': theme('form.toggleWidth.base'),
        '--vf-toggle-width-sm': theme('form.toggleWidth.sm'),
        '--vf-toggle-width-lg': theme('form.toggleWidth.lg'),

        '--vf-toggle-height': theme('form.toggleHeight.base'),
        '--vf-toggle-height-sm': theme('form.toggleHeight.sm'),
        '--vf-toggle-height-lg': theme('form.toggleHeight.lg'),

        '--vf-slider-height': theme('form.sliderHeight.base'),
        '--vf-slider-height-sm': theme('form.sliderHeight.sm'),
        '--vf-slider-height-lg': theme('form.sliderHeight.lg'),

        '--vf-slider-height-vertical': theme('form.sliderHeightVertical.base'),
        '--vf-slider-height-vertical-sm': theme('form.sliderHeightVertical.sm'),
        '--vf-slider-height-vertical-lg': theme('form.sliderHeightVertical.lg'),

        '--vf-slider-handle-size': theme('form.sliderHandleSize.base'),
        '--vf-slider-handle-size-sm': theme('form.sliderHandleSize.sm'),
        '--vf-slider-handle-size-lg': theme('form.sliderHandleSize.lg'),

        '--vf-slider-tooltip-distance': theme('form.sliderTooltipDistance.base'),
        '--vf-slider-tooltip-distance-sm': theme('form.sliderTooltipDistance.sm'),
        '--vf-slider-tooltip-distance-lg': theme('form.sliderTooltipDistance.lg'),

        '--vf-slider-tooltip-arrow-size': theme('form.sliderTooltipArrowSize.base'),
        '--vf-slider-tooltip-arrow-size-sm': theme('form.sliderTooltipArrowSize.sm'),
        '--vf-slider-tooltip-arrow-size-lg': theme('form.sliderTooltipArrowSize.lg'),
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
  let rtl = {}
  let h = {}
  let v = {}
  let mergeH = {}
  let mergeV = {}
  let withFloating = {}
  let fullWidth = {}
  let textType = {}
  let responsive = {}

  sizes.forEach((s) => {
    let suffix = s?'-'+s:''
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

    responsive[`.form-text-h1${suffix}`] = {
      fontSize: `var(--vf-font-size-h1${size})`,
      lineHeight: `var(--vf-line-height-headings${size})`,
      letterSpacing: `var(--vf-letter-spacing-headings${size})`,
    }

    responsive[`.form-text-h2${suffix}`] = {
      fontSize: `var(--vf-font-size-h2${size})`,
      lineHeight: `var(--vf-line-height-headings${size})`,
      letterSpacing: `var(--vf-letter-spacing-headings${size})`,
    }

    responsive[`.form-text-h3${suffix}`] = {
      fontSize: `var(--vf-font-size-h3${size})`,
      lineHeight: `var(--vf-line-height-headings${size})`,
      letterSpacing: `var(--vf-letter-spacing-headings${size})`,
    }

    responsive[`.form-text-h4${suffix}`] = {
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
      gap: `var(--vf-gutter${size})`,
    }

    plain[`.form-gap-x-gutter${suffix}`] = {
      columnGap: `var(--vf-gutter${size})`,
    }

    plain[`.form-gap-y-gutter${suffix}`] = {
      rowGap: `var(--vf-gutter${size})`,
    }

    plain[`.${e(`form-gap-0.5gutter${suffix}`)}`] = {
      gap: `calc(var(--vf-gutter${size}) * 0.5)`,
    }

    plain[`.${e(`form-gap-y-0.5gutter${suffix}`)}`] = {
      rowGap: `calc(var(--vf-gutter${size}) * 0.5)`,
    }

    plain[`.${e(`form-gap-x-0.5gutter${suffix}`)}`] = {
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

    plain[`.-form-mb-input${suffix}`] = {
      marginBottom: `calc(var(--vf-py-input${size}) * (-1))`,
    }

    plain['.form-pt-0'] = {
      paddingTop: '0px'
    }

    responsive['.form-pt-0'] = {
      paddingTop: '0px'
    }

    plain['.form-text-type .form-pt-0'] = {
      paddingTop: '0px'
    }

    textType[`.form-pt-input-border${suffix}`] = {
      paddingTop: `calc(var(--vf-py-input${size}) + var(--vf-border-width-input-t))`,
    }

    responsive[`.form-pt-input-border${suffix}`] = {
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

    plain[`.${e(`form-py-0.5input${suffix}`)}`] = {
      paddingBottom: `calc(var(--vf-py-input${size}) * 0.5)`,
      paddingTop: `calc(var(--vf-py-input${size}) * 0.5)`,
    }

    rtl[`.${e(`form-pr-input-height${suffix}`)}`] = {
      paddingRight: `var(--vf-min-height-input${size})`,
    }

    rtl[`.${e(`form-pl-input-height${suffix}`)}`] = {
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

        plain[`.${e(`form-${side}-${gutterSize}gutter${suffix}`)}`] = {
          [`${attr[side]}`]: `calc(var(--vf-gutter${size}) * ${gutterSize||1})`
        }
        
        plain[`.${e(`-form-${side}-${gutterSize}gutter${suffix}`)}`] = {
          [`${attr[side]}`]: `calc(var(--vf-gutter${size}) * (-${gutterSize||1}))`
        }
      })
    })

    fullWidth[`.${e(`form-pb-gutter/3${suffix}`)}`] = {
      paddingBottom: `calc(var(--vf-gutter${size}) / 3)`
    }

    responsive[`.${e(`form-pb-gutter/3${suffix}`)}`] = {
      paddingBottom: `calc(var(--vf-gutter${size}) / 3)`
    }

    plain[`.form-pr-gutter${suffix}`] = {
      paddingRight: `var(--vf-gutter${size})`,
    }

    responsive[`.form-pr-gutter${suffix}`] = {
      paddingRight: `var(--vf-gutter${size})`,
    }

    plain['.form-pr-0'] = {
      paddingRight: '0px'
    }

    responsive['.form-pr-0'] = {
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
        maskImage: theme('maskImage.form-spinner'),
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
        maskImage: theme('maskImage.form-spinner'),
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
        maskImage: theme('maskImage.form-spinner'),
        maskPosition: 'center center',
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        backgroundColor: 'var(--vf-color-btn-secondary)'
      }
    }

    plain[`.slider-vertical .${e(`v:arrow-right${suffix}`)}:before`] = {
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

    plain[`.slider-vertical .${e(`v:arrow-left${suffix}`)}:before`] = {
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

    plain[`.slider-horizontal .${e(`h:arrow-bottom${suffix}`)}:before`] = {
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
    
    plain[`.slider-horizontal .${e(`h:arrow-top${suffix}`)}:before`] = {
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
  })

  plain = Object.assign({}, plain, {
    '@keyframes form-spin': {
      'from': {
        transform: 'rotate(0deg)',
      },
      'to': {
        transform: 'rotate(360deg)',
      }
    },
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
    '.form-color-transparent': {
      color: 'transparent !important',
    },
    '.form-color-link': {
      color: 'var(--vf-link-color)',
    },

    '.form-decoration-link': {
      textDecoration: 'var(--vf-link-decoration)',
    },

    '.form-bg-input': {
      backgroundColor: 'var(--vf-bg-input)'
    },
    '.form-bg-input-success': {
      backgroundColor: 'var(--vf-bg-input-success)'
    },
    '.form-bg-input-danger': {
      backgroundColor: 'var(--vf-bg-input-danger)'
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

    '.form-border-b-color-input': {
      borderBottomColor: 'var(--vf-border-color-input)'
    },
    '.form-border-color-input-success': {
      borderColor: 'var(--vf-border-color-input-success)'
    },
    '.form-border-color-input-danger': {
      borderColor: 'var(--vf-border-color-input-danger)'
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

    '.form-hide-empty-img:not([src])': {
      opacity: 0,
    },

    '.form-hide-empty-img[src=""]': {
      opacity: 0,
    },

    '.form-hide-empty-img[src="data:"]': {
      opacity: 0,
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
        maskImage: theme('maskImage.form-info'),
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
          background: '#ffffff',
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
          color: 'var(--vf-color-passive)',
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
            maskImage: theme('maskImage.form-check-solid'),
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
            maskImage: theme('maskImage.form-exclamation-solid'),
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

  const maskImages = theme('maskImage')

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
    '.form-border-color-checked': {
      borderColor: `var(--vf-border-color-checked)`,
    },
    '.form-border-color-passive': {
      borderColor: 'var(--vf-border-color-passive)'
    },
    
    '.form-bg-icon-check': {
      '&::after': {
        content: '""',
        maskImage: theme('maskImage.form-check'),
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
        maskImage: theme('maskImage.form-radio'),
        maskPosition: 'center center',
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        backgroundColor: 'var(--vf-color-on-primary)',
        display: 'block',
        width: '100%',
        height: '100%',
      }
    },
    'body[dir="rtl"]': {
      '.form-bg-icon-check': {
        '&::after': {
          left: 'auto',
          right: 'calc(var(--vf-border-width-checkbox-l) * (-1))',
        }
      },
    }
  }

  const focusable = {
    '.form-color-input-focus': {
      color: 'var(--vf-color-input-focus)'
    },
    '.form-bg-input-focus': {
      backgroundColor: 'var(--vf-bg-input-focus)'
    },
    '.form-border-color-input-focus': {
      borderColor: 'var(--vf-border-color-input-focus)'
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
    '.form-border-color-input-hover': {
      borderColor: 'var(--vf-border-color-input-hover)'
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

  const disableable = {
  }

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
    '.-form-top-border-width-input-t': {
      top: 'calc(var(--vf-border-width-input-t) * (-1))'
    }
  }

  addUtilities(plain)
  addUtilities(hoverable, ['hover'])
  addUtilities(groupHoverable, ['group-hover'])
  addUtilities(checkable, ['checked'])
  addUtilities(focusable, ['focus'])
  addUtilities(formFocusable, ['focused'])
  addUtilities(formFocusHoverable, ['focused-hover'])
  addUtilities(checkedFocusable, ['checked-focused'])
  addUtilities(checkedHoverable, ['checked-hover'])
  addUtilities(activable, ['active'])
  addUtilities(disableable, ['disabled'])
  addUtilities(important, ['important'])
  addUtilities(withFloating, ['with-floating'])
  addUtilities(inInputGroup, ['in-input-group'])
  addUtilities(h, ['h'])
  addUtilities(v, ['v'])
  addUtilities(mergeH, ['merge-h'])
  addUtilities(mergeV, ['merge-v'])
  addUtilities(fullWidth, ['full-width'])
  addUtilities(textType, ['text-type'])
  addUtilities(rtl, ['rtl'])
  addUtilities(infoGroupHoverable, ['info-group-hover'])
  addUtilities(responsive, ['responsive'])

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
  
  addVariant('checked-focused', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`checked-focused${separator}${className}`)}:checked:focus`
    })
  })
  
  addVariant('checked-hover', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`checked-hover${separator}${className}`)}:checked:hover`
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

  if (version === 2) {
    addVariant('with-floating', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `${prefix('.label-floating')} ~ .${e(`with-floating${separator}${className}`)},
                ${prefix('.label-floating')} ~ div .${e(`with-floating${separator}${className}`)}`
      })
    })
  
    addVariant('focused', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`focused${separator}${className}`)}.form-focus,
                .${e(`focused${separator}${className}`)}:focus`
      })
    })
    
    addVariant('focused-hover', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`focused-hover${separator}${className}`)}.form-focus:hover,
                .${e(`focused-hover${separator}${className}`)}:focus:hover`
      })
    })
  } else {
    addVariant('with-floating', ['.label-floating ~ &', '.label-floating ~ div &'])
    addVariant('focused', ['&.form-focus', '&:focus'])
    addVariant('focused-hover', ['&.form-focus:hover', '&:focus:hover'])
  }
  
  addVariant('list-group-hover', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `${prefix('.form-list-group')}:hover > .${e(`list-group-hover${separator}${className}`)}`
    })
  })
  
  addVariant('info-group-hover', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `${prefix('.form-info-group')}:hover .${e(`info-group-hover${separator}${className}`)}`
    })
  })
  
  addVariant('in-input-group', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `${prefix('.form-input-group')} .${e(`in-input-group${separator}${className}`)}`
    })
  })

  addVariant('ghost', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `${prefix('.sortable-ghost')}.${e(`ghost${separator}${className}`)}`
    })
  })

  addVariant('full-width', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `${prefix('.col-span-12')}.${e(`full-width${separator}${className}`)}`
    })
  })

  addVariant('text-type', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `${prefix('.form-text-type')} .${e(`text-type${separator}${className}`)}`
    })
  })

  if (version === 2) {
    addVariant('rtl', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `[dir="rtl"] .${e(`rtl${separator}${className}`)}`
      })
    })
  }
}, {
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      cursor: ['disabled', 'important'],
      borderColor: ['disabled'],
      height: ['h', 'v', 'rtl'],
      width: ['h', 'v', 'rtl'],
      inset: ['h', 'v', 'h-txt-rtl', 'merge-h', 'merge-v', 'rtl'],
      translate: ['h', 'v', 'merge-h', 'merge-v'],
      transitionProperty: ['tap'],
      transitionDuration: ['tap'],
      display: ['tt-focus', 'tt-focused', 'tt-drag', 'tt-dragging'],
      opacity: ['ghost', 'disabled', 'checked', 'info-group-hover', 'list-group-hover'],
      pointerEvents: ['disabled'],
      borderRadius: ['important'],
      borderWidth: ['important'],
      transform: ['focus'],
      scale: ['focus'],
      brightness: ['hover'],
      gap: ['important'],
      padding: ['full-width'],
      margin: ['rtl'],
      padding: ['rtl'],
    }
  },
  theme: {
    form: (theme) => {
      return {
        primary: '#07bf9b',
        primaryDarker: '#06ac8b', // defaults to 10% darker primary

        danger: theme('colors.red.500'),
        dangerLighter: theme('colors.red.100'),

        success: theme('colors.green.500'),
        successLighter: theme('colors.green.100'),

        ringColor: '#07bf9b66', // defaults to primary with `ringOpacity` alpha
        ringWidth: theme('ringWidth.2'),
        ringOpacity: 0.4,

        linkColor: 'var(--vf-primary)',
        linkDecoration: 'none',

        grays: theme('colors.gray'),

        fontSize: {
          base: theme('fontSize.base'),
          sm: theme('fontSize.sm'),
          lg: theme('fontSize.base'),
        },

        smallFontSize: {
          base: theme('fontSize.sm'),
          sm: theme('fontSize')['0.5sm'],
          lg: theme('fontSize.sm'),
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
          base: theme('fontSize.base')[1].lineHeight,
          sm: theme('fontSize.sm')[1].lineHeight,
          lg: theme('fontSize.base')[1].lineHeight,
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
          base: theme('fontSize.sm')[1].lineHeight,
          sm: theme('fontSize')['0.5sm'][1].lineHeight,
          lg: theme('fontSize.sm')[1].lineHeight,
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
          base: theme('width')['4'],
          sm: theme('width')['2'],
          lg: theme('width')['4'],
        },

        inputMinHeight: {
          base: theme('height')['9.5'],
          sm: theme('height')['8.5'],
          lg: theme('height')['11.5'],
        },

        inputPy: {
          base: theme('padding')['1.5'],
          sm: theme('padding')['1.5'],
          lg: theme('padding')['2.5'],
        },

        inputPx: {
          base: theme('padding')['3'],
          sm: theme('padding')['2'],
          lg: theme('padding')['3.5'],
        },

        btnPy: {
          base: theme('padding')['1.5'],
          sm: theme('padding')['1.5'],
          lg: theme('padding')['2.5'],
        },

        btnPx: {
          base: theme('padding')['3.5'],
          sm: theme('padding')['3'],
          lg: theme('padding')['5'],
        },

        btnSmallPy: {
          base: theme('padding')['1'],
          sm: theme('padding')['1'],
          lg: theme('padding')['1.5'],
        },

        btnSmallPx: {
          base: theme('padding')['2.5'],
          sm: theme('padding')['2.5'],
          lg: theme('padding')['3'],
        },

        tagPy: {
          base: '0px',
          sm: 'var(--vf-py-tag)',
          lg: 'var(--vf-py-tag)',
        },

        tagPx: {
          base: theme('padding')['1.75'],
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
          base: theme('padding')['3'],
          sm: theme('padding')['2.5'],
          lg: theme('padding')['3.5'],
        },

        groupBlocksPx: {
          base: theme('padding')['4'],
          sm: theme('padding')['4'],
          lg: theme('padding')['4'],
        },

        sliderTooltipPy: {
          base: theme('padding')['0.5'],
          sm: theme('padding')['0.25'],
          lg: theme('padding')['0.75'],
        },

        sliderTooltipPx: {
          base: theme('padding')['1.5'],
          sm: theme('padding')['1.25'],
          lg: theme('padding')['2'],
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
          base: theme('padding')['1.5'],
          sm: 'var(--vf-space-checkbox)',
          lg: 'var(--vf-space-checkbox)',
        },

        spaceTags: {
          base: theme('padding')['0.75'],
          sm: 'var(--vf-space-tags)',
          lg: 'var(--vf-space-tags)',
        },

        spaceStaticTag1: '1rem',
        spaceStaticTag2: '2rem',
        spaceStaticTag3: '3rem',

        floatingTop: {
          base: '0px',
          sm: '0px',
          lg: theme('padding')['2.75'],
        },
        
        borderWidths: { // can be array
          input: theme('borderWidth.DEFAULT'), 
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
          toggle: theme('width')['0.5'], 
          tag: '1px',
          blockquote: '3px',
        },
        
        inputRadius: { // can be array
          base: theme('borderRadius.DEFAULT'),
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
          disabled: 'var(--vf-gray-200)',
          selected: 'rgba(17,24,39,0.05)', // Option hover, cbgroup blocks selected
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
        },

        borderColors: {
          input: 'var(--vf-gray-300)',
          inputFocus: 'var(--vf-primary)',
          inputHover: 'var(--vf-border-color-input)',
          inputDanger: 'var(--vf-border-color-input)',
          inputSuccess: 'var(--vf-border-color-input)',
          checked: 'var(--vf-primary)', // applies to checkbox & radio
          btn: 'var(--vf-primary)',
          tag: 'var(--vf-primary)',
          sliderTooltip: 'var(--vf-primary)',
          passive: 'var(--vf-gray-300)',
          btnDanger: 'var(--vf-danger)',
          btnSecondary: 'var(--vf-gray-200)',
          blockquote: 'var(--vf-gray-300)',
          hr: 'var(--vf-gray-300)',
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

        checkboxSize: {
          base: theme('width')['4'],
          sm: theme('width')['3.5'],
          lg: theme('width')['4'],
        },

        gallerySize: {
          base: theme('width')['24'],
          sm: theme('width')['20'],
          lg: theme('width')['28'],
        },

        toggleWidth: {
          base: theme('width')['12'],
          sm: theme('width')['11'],
          lg: theme('width')['12'],
        },

        toggleHeight: {
          base: theme('height')['5'],
          sm: theme('height')['4'],
          lg: theme('height')['5'],
        },

        sliderHeight: {
          base: theme('height')['1.5'],
          sm: theme('height')['1.25'],
          lg: theme('height')['2'],
        },

        sliderHeightVertical: {
          base: theme('height')['80'],
          sm: 'var(--vf-slider-height-vertical)',
          lg: 'var(--vf-slider-height-vertical)',
        },

        sliderHandleSize: {
          base: theme('height')['4'],
          sm: theme('height')['3.5'],
          lg: theme('height')['5'],
        },

        sliderTooltipDistance: {
          base: theme('width')['2'],
          sm: theme('width')['1.5'],
          lg: theme('width')['2'],
        },

        sliderTooltipArrowSize: {
          base: theme('width')['1.25'],
          sm: 'var(--vf-slider-tooltip-arrow-size)',
          lg: 'var(--vf-slider-tooltip-arrow-size)',
        },
      }
    },
    extend: {
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
        '0.5xs': ['0.6875rem', {
          lineHeight: '0.875rem'
        }],
        '0.5sm': ['0.8125rem', {
          lineHeight: '1.125rem',
        }],
      },
      maskImage: (theme) => ({
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
      }),
    },
  },
})

module.exports = vueform
 