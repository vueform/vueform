[//]: # (Don't use <tags>)

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