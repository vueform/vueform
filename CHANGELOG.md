## v1.3.9

> `2023-07-31`
> 
### 🎉 Feature
- Element props now can be localized.

### 🐞 Bug Fixes
- Some random stuff

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