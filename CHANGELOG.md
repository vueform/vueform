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