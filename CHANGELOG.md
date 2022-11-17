## v1.2.15

> `2022-11-18`

### 🎉 Feature
  - Z-index optimization thought the whole library. New rule is that everything has z-index 999 that intended to be brought to top (eg. tooltip, dropdown) and everything else got the lowest possible (1) z-index where relative z-indexing was needed.
  - Added `clearMessage` method to clear all messages manually added to `messageBag`.
  - Refactored tabs & steps CSS.
  - Form steps are now using `v-if` instead of `v-show`.
  - Auto update conditions when changed.
  - Added `isLast`, `isFirst`, `last$` props steps & tabs.
  - Finish step now also recognizes `next` label (for ease of configuration).
  
### 🐞 Bug Fixes
  - Multifile object gallery rendered images in rows.
  - Remove query param from uploaded filename.
  - Pressing enter in certain elements caused removing or adding list elements.

## v1.2.14

> `2022-10-28`

### 🎉 Feature
  - Added current Vueform version to `$vueform.version`.
  - Added `rules` & related options to `GroupElement` & `ObjectElement`.
  - Added `reinitValidation()` method to elements.
  - Added `tree` & `flatTree` props to `<Vueform>`.
  
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