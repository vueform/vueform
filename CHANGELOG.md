[//]: # (Don't use <tags>)

## v1.11.0

> `2024-10-28`

### 🎉 Feature
- New [`MatrixElement`](https://vueform.com/reference/matrix-element) element.
- Arabic translation (thanks @omaralalwi 🙏)

## v1.10.10

> `2024-09-20`

### 🎉 Feature
- Added boolean type to radiogroup element.

## v1.10.9

> `2024-09-20`

### 🎉 Feature
- Added boolean type to cb/radio options.
- Added el$ to add, remove, sort events.

### 🐞 Bug Fixes
- Min, max, size, between rule fixes with int 0

## v1.10.8

> `2024-09-17`

### 🎉 Feature
- Registering custom operators.

## v1.10.7

> `2024-09-16`

### 🎉 Feature
- Bumping Multiselect dependency.

## v1.10.6

> `2024-09-11`

### 🎉 Feature
- Be able to disable scroll-to-top feature on step next by setting `scrollOnNext` in config or at `Vueform` component #321.

### 🐞 Bug Fixes
- Disable `uploadTempFile` endpoint from config fix #317.

## v1.10.5

> `2024-09-10`

### 🐞 Bug Fixes
- Skip undefined child when setting object children array.
- Disabled Editor element fix #325.

## v1.10.4

> `2024-08-24`

### 🎉 Feature
- Conditional `readonly` and `disabled` for elements.
- Pass function / ref / computed to `readonly` and `disabled` for elements.
- Conditional / function / ref / computed for form `disabled`.
- Optionally show * for label, placeholder and floating when the element has `required` rule.
- Scroll to first invalid element.
- Scroll to top on next step.
- Added Bulgarian locale (thanks @itwseood 🙏)

### 🐞 Bug Fixes
- Fixed `useDefault` warn for form$.mounted.

## v1.10.3

> `2024-08-05`

### 🎉 Feature
- Show label on Checkbox/Radio tab hover.
- Swedish locale.

### 🐞 Bug Fixes
- Datepicker locale fix when it comes from form prop.

## v1.10.2

> `2024-07-29`

### 🎉 Feature
- Added `@focus` event to text, textarea and phone.

### 🐞 Bug Fixes
- Don't cleanup select on refetch when object
- `forceNumbers` should work in nested elements #285
- Phone element should update when using `sync` #280

## v1.10.1

> `2024-07-05`

### 🐞 Bug Fixes
- Type fixes #278

## v1.10.0

> `2024-07-05`

### 🎉 Feature
- New [`SignatureElement`](https://vueform.com/reference/signature-element).
- Added `allowAbsent` options for selects.

### 🐞 Bug Fixes
- Don't throw error on phone flag select with empty value.

## v1.9.13

> `2024-07-01`

### 🎉 Feature
- Moving `moment` to services, making it tree-shakeable.

## v1.9.12

> `2024-06-24`

### 🐞 Bug Fixes
- Build fix (previous excluded Multiselect updates)

## v1.9.11

> `2024-06-23`

### 🐞 Bug Fixes
- Editor fix #173

### 🎉 Feature
- Korean translation (Thanks @tienipia 🙏)

## v1.9.10

> `2024-06-14`

### 🐞 Bug Fixes
- Tailwind `preflight: false` fix #247
- Text overflow with clear in select, fixes #221
- ButtonLabel as function, fixes #258
- Editor rendering in Vue 2, fixes #173
- Phone error thrown when not using masks fix

## v1.9.9

> `2024-05-14`

### 🐞 Bug Fixes
- Trix updated to 2.1.1 for security fix.

## v1.9.8

> `2024-05-13`

### 🐞 Bug Fixes
- Phone mask order fix.

## v1.9.7

> `2024-05-10`

### 🎉 Feature
- New [`PhoneElement`](https://vueform.com/reference/phone-element).
- New `completed` rule.
- Romanian translation (Thanks @u-alexandru 🙏)

### 🐞 Bug Fixes
- Fix for function static content with tags #229.
- Allow h5-h6 tags #236.

## v1.9.6

> `2024-04-29`

### 🎉 Feature
- New [`CaptchaElement`](https://vueform.com/reference/captcha-element).

## v1.9.5

> `2024-04-12`

### 🎉 Feature
- Added `cancel` method to Vueform.

## v1.9.4

> `2024-04-08`

### 🎉 Feature
- Allow custom elements based on object/group/list.
- Added `el$` for [conditional classes](https://vueform.com/docs/styles-and-layout#conditional-classes).
- Removed `base64` transformation from file elements.
- Return `preview` value for all file preview types.
- Improved tree-shaking.

## v1.9.3

> `2024-04-03`

### 🎉 Feature
- Added `msg` to custom rules for automatic param replaces.
- Allow custom rules receiving params.
- Pass form data to `@submit` event.

### 🐞 Bug Fixes
- Added missing `onResponse` prop to `Vueform` component.
- Fixed `fr_CA` translation issues. (Thanks @digino 🙏)
- Replaced `process.` with `import.meta.` in Nuxt package. (Thanks @danielroe 🙏)

## v1.9.2

> `2024-03-19`

### 🎉 Feature
- Allow `false` for file endpoints to disable temp upload.
- Expose `classes` in `Vueform` `#empty` slot.

### 🐞 Bug Fixes
- Auto-style links within forms.
- Don't init sort if the list has no prototype.

## v1.9.1

> `2024-03-08`

### 🎉 Feature
- Allow `function` with `form$` param for class modificators

## v1.9.0

> `2024-03-06`

### 🎉 Feature
- [Input mask](https://vueform.com/docs/input-mask) plugin compatibility 
- Option to force converting numeric strings to numbers in form data/requestData with `forceNumbers` on config, form and text element level
- Allow `function` for `StaticElement`'s `content` prop #155
- Option to define `nullValue` for generic element.
- Ability to disable Finish button #158

### 🐞 Bug Fixes
- Accept `0` as number for required rule #149
- Fix for date change event when in group #156
- Fire button click in all cases #150

## v1.8.0

> `2024-02-19`

### 🎉 Feature
- [Dark mode](https://vueform.com/docs/styles-and-layout#dark-mode) 🌙

### 🐞 Bug Fixes
- `not_empty` condition with select `0` fix (builder/35)
- Datepicker conditional rendering fix #147
- Date data in group fix #131

## v1.7.3

> `2024-02-07`

### 🎉 Feature
- Keep file as binary in data if not uploaded.

### 🐞 Bug Fixes
- Async exists/unique rule fix #133

## v1.7.2

> `2024-01-29`

### 🎉 Feature
- Added `between` condition.
- Added nesting `and` condition in `or` conditions.

## v1.7.1

> `2024-01-25`

### 🎉 Feature
- Added `appendTo` and `appendToBody` options for select/multiselect/tags.

## v1.7.0

> `2024-01-24`

### 🐞 Bug Fixes
- `in` validation rule fix #121
- Select element with 0 value in form default fix #122

### 🧹 Chore
- All dist exports are now interpreted as ESM.
- Themes are bundled to separate dist files.

## v1.6.6

> `2024-01-10`

### 🐞 Bug Fixes
- CSS side-effects fix #93

## v1.6.5

> `2023-12-09`

### 🐞 Bug Fixes
- `object` type as default for HiddenElement #94
- Chained select url encoding fix #95

## v1.6.4

> `2023-12-01`

### 🐞 Bug Fixes
- Vue 2 tree-shaking fix #85
- Add response to error event #83
- Tailwind default divider py fix
- Form default 0 int for text fix ([Discord](https://discord.com/channels/787237947635793940/1179439942766706788))

## v1.6.3

> `2023-11-27`

### 🐞 Bug Fixes
- NPM build

## v1.6.2

> `2023-11-27`

### 🐞 Bug Fixes
- Don't throw validation errors on reset

### 🧹 Chore
- Export fix for tailwind-prefixer
- Type fixes for tailwind-prefixer

## v1.6.1

> `2023-11-23`

### 🧹 Chore
- Added missing `lodash` as dependency

## v1.6.0

> `2023-11-22`

### 🎉 Feature
- [Custom element creation]](https://vueform.com/docs/creating-elements) revamp for better DX (previous implementations will work).
- Floating and placeholder are **no longer available** for the default custom element. [Copy](https://vueform.com/docs/creating-elements#copy-element) `TextElement` to use them.
- Added old / new index and el$ to `@sort` event.
- Added `cs` (Czech) locale. Thank you @tomasvn! 💚

### 🐞 Bug Fixes
- Fix search wrap for `TagsElement` #21

### 🧹 Chore
- Changed back `lodash-es` to `lodash`
- Type fixes.

## v1.5.8

> `2023-11-14`

### 🐞 Bug Fixes
- Addon slots fix #15
- Removed `lodash-es` from `tailwind` theme

## v1.5.7

> `2023-11-13`

### 🎉 Feature
- Tree-shaking

### 💻 Refact
- Tree-shake by switching to `lodash` -> `lodash-es`.

## v1.5.6

> `2023-11-06`

### 🐞 Bug Fixes
- Reset validators on reset.

## v1.5.5

> `2023-11-06`

### 🎉 Feature
- `clearOnRefetch` defaults to false
- Add `data-autogrow` to textarea
- Add types for `vite`, main exports and config

### 🐞 Bug Fixes
- `fieldId` use parent `fieldId`
- Missing editor placeholder #13
- Add missing types
- Divider single & smaller py
- No `trackBy` default for select, multiselect, tags

## v1.5.4

> `2023-10-23`

### 🎉 Feature
- Added `full` and `align` props to `ButtonElement`.
- Added `align` prop to `ToggleElement`, `CheckboxElement` and `RadioElement`.
- Added `allowHtml`, `top`, `bottom`, `align`, `attrs`, `tag`, `href`, `target`, `src`, `alt`, `title`, `width` and `height` props to `StaticElement` making it able to display different HTML tags without actually using HTML.

## v1.5.3

> `2023-10-23`

### 🎉 Feature
- Export Vue plugin as default.

## v1.5.2

> `2023-10-20`

### 🎉 Feature
- Export element as default from './element.js'

## v1.5.1

> `2023-10-20`

### 🎉 Feature
- Added `@popperjs/core` as a dependency.

## v1.5.0

> `2023-10-20`

### 🎉 Feature
- Going open source.

## v1.4.5

> `2023-10-16`

### 🎉 Feature
- Added types.

## v1.4.4

> `2023-10-13`

### 🐞 Bug Fixes
- Gallery sorting fix.

## v1.4.3

> `2023-10-07`

### 🎉 Feature
- Long tags are now truncated by default. Can be broken into multiple lines with `breakTags`.
- `trackBy` property now accepts array.

### 🐞 Bug Fixes
- Number comparison rules fix.

## v1.4.2

> `2023-10-02`

### 🎉 Feature
- Added `clearOnRefetch` option to elements with options.

## v1.4.1

> `2023-09-28`

### 🎉 Feature
- Added variable usage to elements with `items`.

## v1.4.0

> `2023-09-17`

### 🎉 Feature
- Remote API key validation as primary domain validation method.
- Removed `node-sass` dependency.
- No need to specify `trix-editor` as custom element.
- Added type classes to steps controls.
- Rename `tooltip-top`, `tooltip-bottom`, etc. classes in `tailwind` theme to `form-slider-tooltip-top`, `form-slider-tooltip-bottom`, etc.

### 🐞 Bug Fixes
- Fix for `prepare()` in nested elements.
- Set focused state for select elements when it is active, instead of being open.

## v1.3.3

> `2023-07-30`

### 🐞 Bug Fixes
- List object group child remove fix.

## v1.3.2

> `2023-04-07`

### 🐞 Bug Fixes
- Display label in validation message when the label is specified as a function.
- Localize generic name for validation messages.
- Floating label position CSS fix.

## v1.3.1

> `2023-03-14`

### 🎉 Feature
- Element props now can be localized.
- Added `rel="nofollow noopener"` to image previews.
- Added `closeOnDeselect` options for selects.
- Added `locale` options for Vueform to override locale for a single form.

### 🐞 Bug Fixes
- Switching locale in global `$vueform` object will now have immediate effect without having to use `:key` on components.
- Minor CSS fix in `SelectElement` and `MultiselectElement` floating label in `tailwind` theme.

## v1.3.0

> `2023-03-02`

### 🎉 Feature
- Columns with label < 12 no longer need `horizontal` class - it is now automatic.
- Added `keydown`, `keyup` and `keypress` events for text and textarea elements.

### 🐞 Bug Fixes
- `SelectElement` and `MultiselectElement` selected item label padding fix in `tailwind` theme.

## v1.2.18

> `2023-02-08`

### 🎉 Feature
- OR type conditions.
- New condition operators: `empty`, `not_empty`, `today`, `before`, `after`, `^`, `$`, `*`.

### 🐞 Bug Fixes
- Incorrectly displaying disabled `aria` for static element.
- UI fix for list remove buttons.
- UI fix for select, multiselect & tags elements.

## v1.2.17

> `2022-12-23`

### 🐞 Bug Fixes
- Adding element after resorting a list / multifile should add as last.
- Change radiogroup / checkbox group tabs with arrows.

## v1.2.16

> `2022-12-14`

### 🎉 Feature
- Tree now include tabs/steps with correct element order.

### 🐞 Bug Fixes
- Multifile data & requestData fixes.
- Got into infinite loop in production if custom element level error messages were defined as inline objects.
- Don't disable the Next button on a valid step.

## v1.2.15

> `2022-11-21`

### 🎉 Feature
- Z-index optimization thought the whole library. New rule is that everything has z-index 999 that intended to be brought to top (eg. tooltip, dropdown) and everything else got the lowest possible (1) z-index where relative z-indexing was needed.
- Added `clearMessage` method to clear all messages manually added to `messageBag`.
- Refactored tabs & steps CSS.
- Form steps are now using `v-if` instead of `v-show`.
- Added `isLast`, `isFirst`, `last$` props steps & tabs.
- Finish step now also recognizes `next` label (for ease of configuration).
- Focus first element on next step if stepped with keyboard.
- A11y improvements.

### 🐞 Bug Fixes
- Multifile object gallery rendered images in rows.
- Remove query param from uploaded filename.
- Pressing enter in certain elements caused removing or adding list elements.
- Datepicker was aligned to right in `tailwind` theme.

## v1.2.14

> `2022-10-28`

### 🎉 Feature
- Added current Vueform version to `$vueform.version`.
- Added `rules` & related options to `GroupElement` & `ObjectElement`.
- Added `reinitValidation()` method to elements.
- Added `tree` & `flatTree` props to `Vueform`.

### 🐞 Bug Fixes
- Submit steps on Finish in FFX broke in some versions.
- List first instance didn't display instantly when a prototype got defined on the flight if list was in a group.
- Aria didn't display for certain elements eg. Group, Object.
- Element's container class is now added to inline layout's container.
- Multifile resort images in stage 2 refresh fix.
- Axios now works with an instance provided to config.
- Refresh order fields in object lists when `storeOrder` changes or reseted.
- Reset list children when directly resetting lists.

## v1.2.13

> `2022-10-07`

### 🎉 Feature
- Added `tree` and `flatTree` props to `Vueform` component.

## v1.2.12

> `2022-09-26`

### 🎉 Feature
- A11y improvements.

## v1.2.11

> `2022-09-16`

### 🐞 Bug Fixes
- Removed unused import from `tailwind.js`.

### 🎉 Feature
- Added `updateColumns` API method.
- Multifile inherits file props.
- Errors and messages can now display HTML.

## v1.2.10

> `2022-08-19`

### 🐞 Bug Fixes
- Added datepicker locales.
- Mobile datepicker fix.
- Removed `font-sans` from select elements' search input in Tailwind.
- Tailwind 3 lg input floating label positioning fix.
- `GroupElement` can now be placed in an `ObjectElement`.

## v1.2.9

> `2022-08-08`

### 🎉 Feature
- Allow `false` value for `FileElement`'s `url` option.
- If a filename contains url only the filename is displayed.
- Can pass an axios instance to `axios` option in `vueform.config.js`.

### 🐞 Bug Fixes
- Select endpoint will add search param with `&` if it already contains `?`.

## v1.2.8

> `2022-07-19`

### 🐞 Bug Fixes
- Added `regeneratorRuntime` to `validator` export.
- API Key validation url fixed.
- Nested global form element styles under `form` tag.

## v1.2.7

> `2022-07-18`

### 🎉 Feature
- Added [API Key](/docs/1.x/installation#api-key) validation.
- Removed Composition API dependency. Use Vue.js 2.7+ instead.

### 🐞 Bug Fixes
- Added `components` to element creator.
- Locales export `module.exports` -> `export default`.
- Fixed `clean()` for `Vueform` and `ListElement`.
- Added prefix to component styles.