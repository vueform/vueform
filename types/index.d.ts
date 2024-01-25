import { App, defineComponent, DefineComponent, VNode } from 'vue';

interface EndpointConfig {
  url?: string;
  method?: string;
}

interface VueformConfig {
  apiKey?: string;
  env?: string;
  plugins?: any[];
  elements?: any[];
  components?: object;
  theme: object;
  templates?: object;
  views?: object;
  size?: string;
  addClasses?: object;
  removeClasses?: object;
  replaceClasses?: object;
  overrideClasses?: object;
  presets?: object;
  usePresets?: any[];
  classHelpers?: boolean;
  columns?: object;
  forceLabels?: boolean;
  floatPlaceholders?: boolean;
  displayErrors?: boolean;
  displayMessages?: boolean;
  breakpoints?: string[];
  languages?: object;
  language?: string;
  locales: object;
  locale: null | string;
  fallbackLocale?: string;
  orderFrom?: number;
  rules?: object;
  validateOn?: 'change' | 'step' | 'change|step';
  endpoints?: {
    submit?: EndpointConfig;
    uploadTempFile?: EndpointConfig;
    removeTempFile?: EndpointConfig;
    removeFile?: EndpointConfig;
    attachment?: EndpointConfig;
    activeUrl?: EndpointConfig;
    unique?: EndpointConfig;
    exists?: EndpointConfig;
    [key: string]: EndpointConfig;
  };
  formData?: (form$: any) => any;
  beforeSend?: any;
  axios?: any;
  locationProvider?: string;
  services?: object;
  [key: string]: any;
}

interface DefineElement {
  name: string;
  setup?: Function;
  props?: object;
  emits?: any[];
  mixins?: any[];
  components?: object;
  [key: string]: any;
}

declare module '@vueform/vueform/themes/tailwind' {
  export function prefix(prefix: string): any
}

declare module '@vueform/vueform' {
    const config: any;
    const components: any;
    const useVueform: any;
    const useClasses: any;
    const Vueform: any;
    const Validator: any;
    const vueform: any;
    const element: any;
    const VueformElement: any;
    const defineElement: any;
    function defineConfig(options: VueformConfig): VueformConfig;

  export {
    config,
    components,
    useVueform,
    useClasses,
    Vueform,
    Validator,
    vueform,
    element,
    VueformElement,
    defineElement,
    defineConfig,
  }

  export default function install(app?: any, options: VueformConfig): any;
}

interface MessageBag {
  constructor(baseErrors: any);
  get errors(): any;
  get messages(): any;
  get error(): any;
  get message(): any;
  prepend(msg: any, type: any): void;
  append(msg: any, type: any): void;
  remove(msg: any, type: any): void;
  rm(group: any, type: any, index: any): void;
  clear(type: any): void;
  clearPrepended(type: any): void;
  clearAppended(type: any): void;
}

interface MergeClasses {
  constructor(options?: {});
  options: {};
  componentClasses: any;
  get classes(): any;
  get config(): any;
  get component(): any;
  get component$(): any;
  get locals(): any;
  get view(): any;
  get theme(): any;
  get presets(): any;
  get templates(): any;
  get template(): any;
  get themeClasses(): any;
  get templateClasses(): any;
  get shouldMergeTemplateClasses(): any;
  get defaultClasses(): any;
  get mainClass(): string;
  merge(merge: any, locals?: boolean): void;
  mergeComponentClasses(componentClasses: any, key: any): void;
  addClasses(add: any, levels: any): void;
  prependClasses(prepend: any, levels: any): void;
  removeClasses(remove: any, levels: any): void;
  replaceClasses(replace: any, levels: any): void;
  overrideClasses(override: any, levels: any): void;
  toArray(componentClasses: any): {};
  classesToArray(classes: any, path: any): any;
  getDynamicClasses(target: any, prop: any, mainTarget: any): any;
  getClassHelpers(componentClasses: any, path: any): {};
  pick(from: any, picks: any): {};
}

interface Columns {
  constructor(options: any, hasLabel: any, getClass: any, presets: any);
  defaultBreakpoint: string;
  presets: any;
  configPresetColumns: {};
  configColumns: {};
  formPresetColumns: {};
  formColumns: {};
  presetColumns: {};
  columns: {};
  hasLabel: any;
  getClass: any;
  cols: any;
  get classes(): {
    container: any[];
    label: any[];
    innerContainer: any[];
    wrapper: any[];
  };
  serialize(columns: any): {};
  columnsFromPresets(presets: any): undefined;
  getNullClass(): any[];
  getClasses(type: any): any[];
  getCols(): any;
}

interface Component extends DefineComponent {}

interface VueformComponent extends DefineComponent {}

interface VueformElement extends DefineComponent {
  // Props
  name: string | number;
  conditions: Array<any>;
  onBeforeCreate: Function;
  onCreated: Function;
  onBeforeMount: Function;
  onMounted: Function;
  onBeforeUpdate: Function;
  onUpdated: Function;
  onBeforeUnmount: Function;
  onUnmounted: Function;
  inline: boolean;
  layout: string | object | boolean;
  addClass: Array<any> | object | string;
  removeClass: Array<any> | object;
  replaceClass: object;
  overrideClass: Array<any> | object | string;
  addClasses: object;
  replaceClasses: object;
  removeClasses: object;
  overrideClasses: object;
  presets: Array<any>;
  view: string;
  views: object;
  size: string;
  columns: object | string | number;
  templates: object;
  description: string | object;
  info: string | object;
  infoPosition: string;
  label: string | object | Function;
  before: object | string | number;
  between: object | string | number;
  after: object | string | number;
  slots: object;
  type: string;
  buttonLabel: string | object | Function;
  buttonType: string;
  buttonClass: string | Array<any> | object;
  id: string;
  disabled: Function | boolean;
  loading: Function | boolean;
  href: string;
  target: string;
  onClick: Function;
  resets: boolean;
  submits: boolean;
  secondary: boolean;
  danger: boolean;
  full: boolean;
  align: string;
  onChange: Function;
  formatData: Function;
  formatLoad: Function;
  submit: boolean;
  rules: Array<any> | string | object;
  messages: object;
  fieldName: string;
  default: string | boolean | number | Array<any> | Date | object;
  text: string | object;
  trueValue: boolean | string | number;
  falseValue: boolean | string | number;
  items: object | Array<any> | Function | string;
  disables: Array<any>;
  clearOnRefetch: boolean;
  addons: object;
  floating: string | boolean | object;
  displayFormat: string;
  valueFormat: string | boolean;
  loadFormat: string | boolean;
  date: boolean;
  time: boolean;
  seconds: boolean;
  hour24: boolean;
  min: string | Date | number;
  max: string | Date | number;
  extendOptions: object;
  placeholder: string | object;
  readonly: boolean;
  mode: string;
  debounce: number;
  onError: Function;
  onAlert: Function;
  accept: Array<any> | string;
  acceptMimes: Array<any>;
  endpoint: string | Function;
  method: string;
  hideTools: Array<any>;
  onBlur: Function;
  onRemove: Function;
  drop: boolean;
  clickable: boolean;
  url: string | boolean;
  previewUrl: string;
  auto: boolean;
  urls: object;
  methods: object;
  uploadTempEndpoint: object | string | Function;
  removeTempEndpoint: object | string | Function;
  removeEndpoint: object | string | Function;
  params: object;
  softRemove: boolean;
  embed: boolean;
  schema: {
    [key: string]: VueformSchema;
  };
  meta: boolean;
  onAdd: Function;
  onSort: Function;
  element: object;
  object: object | boolean;
  initial: number;
  addText: string;
  sort: boolean;
  controls: object;
  storeOrder: string;
  order: string;
  orderBy: string;
  attrs: object;
  provider: string;
  displayKey: string;
  storeFile: string;
  fields: object;
  file: object;
  onSelect: Function;
  onDeselect: Function;
  onSearchChange: Function;
  onOpen: Function;
  onClose: Function;
  onClear: Function;
  onPaste: Function;
  native: boolean;
  labelProp: string;
  valueProp: string;
  dataKey: string;
  searchParam: string;
  search: boolean;
  trackBy: string | Array<any>;
  strict: boolean;
  multipleLabel: Function;
  multipleLabelSingle: string;
  multipleLabelMultiple: string;
  create: boolean;
  appendNewOption: boolean;
  addOptionOn: Array<any>;
  limit: number;
  groups: boolean;
  groupLabel: string;
  groupOptions: string;
  groupHideEmpty: boolean;
  groupSelect: boolean;
  openDirection: string;
  appendToBody: boolean;
  appendTo: string;
  canClear: boolean;
  clearOnSelect: boolean;
  closeOnSelect: boolean;
  closeOnDeselect: boolean;
  delay: number;
  minChars: number;
  resolveOnLoad: boolean;
  filterResults: boolean;
  clearOnSearch: boolean;
  hideSelected: boolean;
  caret: boolean;
  noOptionsText: string | object;
  noResultsText: string | object;
  autocomplete: string | number;
  inputType: string;
  radioName: string;
  radioValue: boolean | string | number;
  canDeselect: boolean;
  truncate: boolean;
  step: number;
  tooltips: boolean;
  showTooltip: string;
  tooltipPosition: string;
  merge: number;
  format: object | Function;
  orientation: string;
  direction: string;
  lazy: boolean;
  content: string | object;
  wrap: boolean;
  tag: string;
  allowHtml: boolean;
  src: string;
  alt: string;
  title: string;
  width: string;
  height: string;
  top: string | number;
  bottom: string | number;
  onKeydown: Function;
  onKeyup: Function;
  onKeypress: Function;
  autogrow: boolean;
  rows: number;
  onTag: Function;
  breakTags: boolean;
  showOptions: boolean;
  labels: object;

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  isButtonLabelComponent: boolean;
  button: object;
  isLoading: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  isDisabled: boolean;
  fieldId: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  path: string;
  flat: boolean;
  parent: VNode;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;
  data: object;
  requestData: object;
  defaultValue: any;
  genericName: string;
  nullValue: any;
  dataPath: string;
  Text: string;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isDanger: boolean;
  isSuccess: boolean;
  value: any;
  model: any;
  resolvedOptions: Array<any>;
  displayDateFormat: string;
  valueDateFormat: string;
  loadDateFormat: string;
  empty: boolean;
  hasFloating: boolean;
  Placeholder: string;
  editorEndpoint: string;
  editorMethod: string;
  debouncing: boolean;
  canDrop: boolean;
  endpoints: object;
  fileUrl: string | boolean;
  stage: number;
  filename: string;
  link: string;
  preview: string;
  uploaded: boolean;
  canRemove: boolean;
  canUploadTemp: boolean;
  canSelect: boolean;
  uploading: boolean;
  children: object;
  children$: object;
  childrenErrors: Array<any>;
  hasAdd: boolean;
  hasRemove: boolean;
  hasSort: boolean;
  addLabel: string;
  length: number;
  orderByName: string;
  prototype: object;
  isObject: boolean;
  isSortable: boolean;
  defaultOptions: object;
  preparing: boolean;
  hasUploading: boolean;
  storeFileName: string;
  inputName: string;
  isHtml: boolean;
  componentContent: object;
  slotContent: object;
  language: string;
  languages: Array<any>;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  events: Array<any>;
  listeners: object;
  hidden: boolean;
  localDisabled: boolean | null;
  input: HTMLElement;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  watchers: Array<any> | object;
  disabledItems: Array<any>;
  focused: boolean;
  hasUploadError: boolean;
  base64: string;
  progress: number;
  preparing: boolean;
  removing: boolean;
  request: object;
  axios: object;
  children$Array: Array<any>;
  list: HTMLElement;
  sortable: object;
  sorting: boolean;
  locationService: object | null;
  location: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  handleClick: (e: Event) => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  hide: () => void;
  show: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disable: () => void;
  enable: () => void;
  check: () => void;
  uncheck: () => void;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  resolveOptions: () => Promise;
  updateItems: (disable: boolean) => Promise;
  cleanupValue: (values: Array<any>) => void;
  resolveUrlAndSetWatchers: (url: string, updateItems: Function) => Promise;
  toggle: (value: string | number) => void;
  checkAll: () => void;
  uncheckAll: () => void;
  disableAll: () => void;
  enableAll: () => void;
  handleChange: (val: any) => void;
  handleAlert: (message: string) => void;
  handleBlur: () => void;
  handleError: (error: Error) => void;
  handleInput: (e: Event) => void;
  handleDrop: (e: Event) => void;
  uploadTemp: () => Promise;
  remove: () => Promise;
  prepare: () => Promise;
  handleUploadTemp: () => void;
  handleRemove: () => void;
  handleAbort: () => void;
  component: (element: string) => string;
  validateValidators: () => Promise;
  validateChildren: () => Promise;
  add: (value: any) => number;
  handleAdd: () => void;
  refreshOrderStore: (value: Array<any>) => void;
  handleSort: (e: Event) => void;
  initSortable: () => void;
  destroySortable: () => void;
  handleAddressChange: (data: object, raw: object) => void;
  handleLocationBlur: () => void;
  initLocationService: () => void;
  handleSelect: (option: object) => void;
  handleDeselect: (option: object) => void;
  handleSearchChange: (searchQuery: string) => void;
  handleOpen: () => void;
  handleClose: () => void;
  handleClear: () => void;
  handlePaste: (e: Event) => void;
  select: (options: string | Array<any>) => void;
  deselect: (options: string | Array<any>) => void;
  handleUpdate: (val: string) => void;
  validateLanguage: (lang: string) => Promise;
  initState: () => void;
  handleKeydown: (e: Event) => void;
  handleKeyup: (e: Event) => void;
  handleKeypress: (e: Event) => void;
  autosize: () => void;
  handleTag: (searchQuery: string) => void;
}

interface VueformSchema {
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  type: string;
  buttonLabel?: string | object | Function;
  buttonType?: string;
  buttonClass?: string | Array<any> | object;
  id?: string;
  disabled?: Function | boolean;
  loading?: Function | boolean;
  href?: string;
  target?: string;
  onClick?: Function;
  resets?: boolean;
  submits?: boolean;
  secondary?: boolean;
  danger?: boolean;
  full?: boolean;
  align?: string;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  default?: string | boolean | number | Array<any> | Date | object;
  text?: string | object;
  trueValue?: boolean | string | number;
  falseValue?: boolean | string | number;
  items?: object | Array<any> | Function | string;
  disables?: Array<any>;
  clearOnRefetch?: boolean;
  addons?: object;
  floating?: string | boolean | object;
  displayFormat?: string;
  valueFormat?: string | boolean;
  loadFormat?: string | boolean;
  date?: boolean;
  time?: boolean;
  seconds?: boolean;
  hour24?: boolean;
  min?: string | Date | number;
  max?: string | Date | number;
  extendOptions?: object;
  placeholder?: string | object;
  readonly?: boolean;
  mode?: string;
  debounce?: number;
  onError?: Function;
  onAlert?: Function;
  accept?: Array<any> | string;
  acceptMimes?: Array<any>;
  endpoint?: string | Function;
  method?: string;
  hideTools?: Array<any>;
  onBlur?: Function;
  onRemove?: Function;
  drop?: boolean;
  clickable?: boolean;
  url?: string | boolean;
  previewUrl?: string;
  auto?: boolean;
  urls?: object;
  methods?: object;
  uploadTempEndpoint?: object | string | Function;
  removeTempEndpoint?: object | string | Function;
  removeEndpoint?: object | string | Function;
  params?: object;
  softRemove?: boolean;
  embed?: boolean;
  schema?: {
    [key: string]: VueformSchema;
  };
  meta?: boolean;
  onAdd?: Function;
  onSort?: Function;
  element?: object;
  object?: object | boolean;
  initial?: number;
  addText?: string;
  sort?: boolean;
  controls?: object;
  storeOrder?: string;
  order?: string;
  orderBy?: string;
  attrs?: object;
  provider?: string;
  displayKey?: string;
  storeFile?: string;
  fields?: object;
  file?: object;
  onSelect?: Function;
  onDeselect?: Function;
  onSearchChange?: Function;
  onOpen?: Function;
  onClose?: Function;
  onClear?: Function;
  onPaste?: Function;
  native?: boolean;
  labelProp?: string;
  valueProp?: string;
  dataKey?: string;
  searchParam?: string;
  search?: boolean;
  trackBy?: string | Array<any>;
  strict?: boolean;
  multipleLabel?: Function;
  multipleLabelSingle?: string;
  multipleLabelMultiple?: string;
  create?: boolean;
  appendNewOption?: boolean;
  addOptionOn?: Array<any>;
  limit?: number;
  groups?: boolean;
  groupLabel?: string;
  groupOptions?: string;
  groupHideEmpty?: boolean;
  groupSelect?: boolean;
  openDirection?: string;
  appendToBody?: boolean;
  appendTo?: string;
  canClear?: boolean;
  clearOnSelect?: boolean;
  closeOnSelect?: boolean;
  closeOnDeselect?: boolean;
  delay?: number;
  minChars?: number;
  resolveOnLoad?: boolean;
  filterResults?: boolean;
  clearOnSearch?: boolean;
  hideSelected?: boolean;
  caret?: boolean;
  noOptionsText?: string | object;
  noResultsText?: string | object;
  autocomplete?: string | number;
  inputType?: string;
  radioName?: string;
  radioValue?: boolean | string | number;
  canDeselect?: boolean;
  truncate?: boolean;
  step?: number;
  tooltips?: boolean;
  showTooltip?: string;
  tooltipPosition?: string;
  merge?: number;
  format?: object | Function;
  orientation?: string;
  direction?: string;
  lazy?: boolean;
  content?: string | object;
  wrap?: boolean;
  tag?: string;
  allowHtml?: boolean;
  src?: string;
  alt?: string;
  title?: string;
  width?: string;
  height?: string;
  top?: string | number;
  bottom?: string | number;
  onKeydown?: Function;
  onKeyup?: Function;
  onKeypress?: Function;
  autogrow?: boolean;
  rows?: number;
  onTag?: Function;
  breakTags?: boolean;
  showOptions?: boolean;
  labels?: object;
  [key: string]: any;
}

interface DragAndDropProps {
  title: string;
  description: string;
  disabled?: boolean;
}

interface ElementAddonProps {
  type: string;
}

interface ElementDescriptionProps {
}

interface ElementErrorProps {
}

interface ElementInfoProps {
}

interface ElementLabelProps {
}

interface ElementLabelFloatingProps {
  visible?: boolean;
}

interface ElementLayoutProps {
  multiple?: boolean;
  view?: string;
}

interface ElementLayoutInlineProps {
}

interface ElementLoaderProps {
}

interface ElementMessageProps {
}

interface ElementTextProps {
  type: string;
}

interface FormElementsProps {
  view?: string;
}

interface FormErrorsProps {
  view?: string;
}

interface FormLanguageProps {
  language: string;
  code: string;
  view?: string;
}

interface FormLanguagesProps {
  view?: string;
}

interface FormMessagesProps {
  view?: string;
}

interface FormStepProps {
  name: string | number;
  label?: string | object | Function;
  labels?: object;
  buttons?: object;
  elements?: Array<any>;
  conditions?: Array<any>;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  view?: string;
  onActivate?: Function;
  onInactivate?: Function;
  onDisable?: Function;
  onEnable?: Function;
}

interface FormStepsProps {
  view?: string;
}

interface FormStepsControlProps {
  type: string;
  labels?: boolean;
  view?: string;
}

interface FormStepsControlsProps {
  labels?: boolean;
  view?: string;
}

interface FormTabProps {
  name: string | number;
  label?: string | object | Function;
  elements?: Array<any>;
  conditions?: Array<any>;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  view?: string;
  onActivate?: Function;
  onInactivate?: Function;
}

interface FormTabsProps {
  view?: string;
}

interface VueformProps {
  schema?: {
    [key: string]: VueformSchema;
  };
  name?: string;
  tabs?: object;
  steps?: object;
  stepsControls?: boolean;
  validateOn?: string;
  displayErrors?: boolean;
  displayMessages?: boolean;
  messages?: object;
  endpoint?: string | boolean | Function;
  method?: string;
  prepare?: Function;
  formKey?: string | number;
  formData?: Function;
  value?: object;
  modelValue?: object;
  sync?: boolean;
  default?: object;
  formatData?: Function;
  formatLoad?: Function;
  loading?: boolean;
  disabled?: boolean;
  columns?: object;
  forceLabels?: boolean;
  floatPlaceholders?: boolean;
  size?: string;
  view?: string;
  views?: object;
  addClasses?: object;
  addClass?: Array<any> | object | string;
  removeClasses?: object;
  removeClass?: Array<any> | object;
  replaceClasses?: object;
  replaceClass?: object;
  overrideClasses?: object;
  overrideClass?: Array<any> | object | string;
  templates?: object;
  presets?: Array<any>;
  multilingual?: boolean;
  languages?: object;
  language?: string;
  locale?: string;
  onChange?: Function;
  onReset?: Function;
  onClear?: Function;
  onSubmit?: Function;
  onSuccess?: Function;
  onError?: Function;
  onLanguage?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
}

interface DatepickerWrapperProps {
  value: any;
  options: object;
  id: number | string;
  placeholder?: number | string;
  attrs?: object;
}

interface EditorWrapperProps {
  value?: any;
  placeholder?: string | number;
  name?: string | number;
  id?: string | number;
  accept?: Array<any>;
  acceptMimes?: Array<any>;
  endpoint?: string | Function;
  method?: string;
  disabled?: boolean;
  hideTools?: Array<any>;
  attrs?: object;
}

interface CheckboxgroupCheckboxProps {
  item: object | string | number;
  value: string | number;
  items: object | Array<any>;
  index: number;
  attrs?: object;
}

interface FilePreviewProps {
  attrs?: object;
}

interface RadiogroupRadioProps {
  item: object | string | number;
  value: string | number;
  items: object | Array<any>;
  index: number;
  attrs?: object;
}

interface ButtonElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  type?: string;
  buttonLabel?: string | object | Function;
  buttonType?: string;
  buttonClass?: string | Array<any> | object;
  id?: string;
  disabled?: Function | boolean;
  loading?: Function | boolean;
  href?: string;
  target?: string;
  onClick?: Function;
  resets?: boolean;
  submits?: boolean;
  secondary?: boolean;
  danger?: boolean;
  full?: boolean;
  align?: string;
}

interface CheckboxElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: string | boolean | number | Array<any> | Date | object;
  id?: string;
  text?: string | object;
  disabled?: boolean;
  trueValue?: boolean | string | number;
  falseValue?: boolean | string | number;
  align?: string;
}

interface CheckboxgroupElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: Array<any>;
  id?: string;
  items?: object | Array<any> | Function | string;
  disabled?: boolean;
  disables?: Array<any>;
  clearOnRefetch?: boolean;
}

interface DateElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: string | Date;
  addons?: object;
  disabled?: boolean;
  floating?: string | boolean | object;
  id?: string;
  displayFormat?: string;
  valueFormat?: string | boolean;
  loadFormat?: string | boolean;
  date?: boolean;
  time?: boolean;
  seconds?: boolean;
  hour24?: boolean;
  min?: string | Date | number;
  max?: string | Date | number;
  disables?: Array<any>;
  extendOptions?: object;
  placeholder?: string | object;
  readonly?: boolean;
}

interface DatesElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: Array<any>;
  addons?: object;
  disabled?: boolean;
  floating?: string | boolean | object;
  id?: string;
  displayFormat?: string;
  valueFormat?: string | boolean;
  loadFormat?: string | boolean;
  mode?: string;
  min?: string | Date;
  max?: string | Date;
  disables?: Array<any>;
  extendOptions?: object;
  placeholder?: string | object;
  readonly?: boolean;
}

interface EditorElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: string | number | object;
  debounce?: number;
  disabled?: boolean;
  id?: string;
  placeholder?: string | object;
  onError?: Function;
  onAlert?: Function;
  accept?: Array<any> | string;
  acceptMimes?: Array<any>;
  endpoint?: string | Function;
  method?: string;
  hideTools?: Array<any>;
  onBlur?: Function;
}

interface FileElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: string | object;
  disabled?: boolean;
  id?: string;
  onRemove?: Function;
  onError?: Function;
  drop?: boolean;
  accept?: string | Array<any>;
  clickable?: boolean;
  url?: string | boolean;
  previewUrl?: string;
  auto?: boolean;
  urls?: object;
  methods?: object;
  uploadTempEndpoint?: object | string | Function;
  removeTempEndpoint?: object | string | Function;
  removeEndpoint?: object | string | Function;
  params?: object;
  softRemove?: boolean;
  embed?: boolean;
}

interface GenericElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  id?: string;
  disabled?: boolean;
  default?: string | number | object;
}

interface GroupElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: object;
  id?: string;
  schema?: {
    [key: string]: VueformSchema;
  };
}

interface HiddenElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: string | number | object;
  id?: string;
  meta?: boolean;
}

interface ListElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: Array<any>;
  id?: string;
  disabled?: boolean;
  onAdd?: Function;
  onRemove?: Function;
  onSort?: Function;
  element?: object;
  object?: object | boolean;
  initial?: number;
  min?: number;
  max?: number;
  addText?: string;
  sort?: boolean;
  controls?: object;
  storeOrder?: string;
  order?: string;
  orderBy?: string;
}

interface LocationElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: object;
  debounce?: number;
  disabled?: boolean;
  floating?: string | boolean | object;
  id?: string;
  placeholder?: string | object;
  readonly?: boolean;
  attrs?: object;
  addons?: object;
  provider?: string;
  displayKey?: string;
  extendOptions?: object;
}

interface MultifileElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: Array<any>;
  initial?: number;
  disabled?: boolean;
  id?: string;
  onAdd?: Function;
  onRemove?: Function;
  onSort?: Function;
  drop?: boolean;
  sort?: boolean;
  controls?: object;
  object?: boolean;
  storeFile?: string;
  fields?: object;
  storeOrder?: string;
  order?: string;
  orderBy?: string;
  file?: object;
  accept?: string | Array<any>;
  clickable?: boolean;
  url?: string | boolean;
  previewUrl?: string;
  auto?: boolean;
  uploadTempEndpoint?: object | string | Function;
  removeTempEndpoint?: object | string | Function;
  removeEndpoint?: object | string | Function;
  params?: object;
  softRemove?: boolean;
}

interface MultiselectElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: Array<any>;
  disabled?: boolean;
  floating?: string | boolean | object;
  id?: string;
  placeholder?: string | object;
  attrs?: object;
  onSelect?: Function;
  onDeselect?: Function;
  onSearchChange?: Function;
  onOpen?: Function;
  onClose?: Function;
  onClear?: Function;
  onPaste?: Function;
  native?: boolean;
  items?: object | Array<any> | Function | string;
  labelProp?: string;
  valueProp?: string;
  dataKey?: string;
  searchParam?: string;
  search?: boolean;
  trackBy?: string | Array<any>;
  strict?: boolean;
  multipleLabel?: Function;
  multipleLabelSingle?: string;
  multipleLabelMultiple?: string;
  create?: boolean;
  appendNewOption?: boolean;
  addOptionOn?: Array<any>;
  object?: boolean;
  limit?: number;
  max?: number;
  groups?: boolean;
  groupLabel?: string;
  groupOptions?: string;
  groupHideEmpty?: boolean;
  groupSelect?: boolean;
  openDirection?: string;
  appendToBody?: boolean;
  appendTo?: string;
  canClear?: boolean;
  clearOnSelect?: boolean;
  closeOnSelect?: boolean;
  closeOnDeselect?: boolean;
  clearOnRefetch?: boolean;
  delay?: number;
  minChars?: number;
  resolveOnLoad?: boolean;
  filterResults?: boolean;
  clearOnSearch?: boolean;
  hideSelected?: boolean;
  caret?: boolean;
  loading?: boolean;
  noOptionsText?: string | object;
  noResultsText?: string | object;
  autocomplete?: string | number;
  inputType?: string;
  extendOptions?: object;
}

interface ObjectElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: object;
  id?: string;
  schema?: {
    [key: string]: VueformSchema;
  };
  embed?: boolean;
  onRemove?: Function;
}

interface RadioElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: string | number;
  disabled?: boolean;
  id?: string;
  radioName?: string;
  radioValue?: boolean | string | number;
  text?: string | object;
  align?: string;
}

interface RadiogroupElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: string | number;
  disabled?: boolean;
  id?: string;
  items?: object | Array<any> | Function | string;
  disables?: Array<any>;
  clearOnRefetch?: boolean;
}

interface SelectElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: string | number | object;
  disabled?: boolean;
  floating?: string | boolean | object;
  id?: string;
  placeholder?: string | object;
  attrs?: object;
  onSelect?: Function;
  onDeselect?: Function;
  onSearchChange?: Function;
  onOpen?: Function;
  onClose?: Function;
  onClear?: Function;
  onPaste?: Function;
  native?: boolean;
  items?: object | Array<any> | Function | string;
  labelProp?: string;
  valueProp?: string;
  dataKey?: string;
  searchParam?: string;
  search?: boolean;
  trackBy?: string | Array<any>;
  strict?: boolean;
  create?: boolean;
  appendNewOption?: boolean;
  addOptionOn?: Array<any>;
  object?: boolean;
  limit?: number;
  groups?: boolean;
  groupLabel?: string;
  groupOptions?: string;
  groupHideEmpty?: boolean;
  openDirection?: string;
  appendToBody?: boolean;
  appendTo?: string;
  canDeselect?: boolean;
  canClear?: boolean;
  closeOnSelect?: boolean;
  closeOnDeselect?: boolean;
  clearOnRefetch?: boolean;
  delay?: number;
  minChars?: number;
  resolveOnLoad?: boolean;
  filterResults?: boolean;
  clearOnSearch?: boolean;
  caret?: boolean;
  truncate?: boolean;
  loading?: boolean;
  noOptionsText?: string | object;
  noResultsText?: string | object;
  autocomplete?: string;
  inputType?: string;
  extendOptions?: object;
}

interface SliderElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: number | Array<any>;
  disabled?: boolean;
  id?: string;
  min?: number;
  max?: number;
  step?: number;
  tooltips?: boolean;
  showTooltip?: string;
  tooltipPosition?: string;
  merge?: number;
  format?: object | Function;
  orientation?: string;
  direction?: string;
  lazy?: boolean;
  extendOptions?: object;
}

interface StaticElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  type?: string;
  id?: string;
  content?: string | object;
  wrap?: boolean;
  tag?: string;
  allowHtml?: boolean;
  href?: string;
  target?: string;
  src?: string;
  alt?: string;
  title?: string;
  width?: string;
  height?: string;
  attrs?: object;
  align?: string;
  top?: string | number;
  bottom?: string | number;
}

interface TEditorElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: object | string | number;
  debounce?: number;
  disabled?: boolean;
  id?: string;
  placeholder?: string | object;
  onError?: Function;
  onAlert?: Function;
  accept?: Array<any>;
  acceptMimes?: Array<any>;
  endpoint?: string | Function;
  method?: string;
  hideTools?: Array<any>;
  onBlur?: Function;
}

interface TTextElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: object | string | number;
  addons?: object;
  autocomplete?: string | number;
  debounce?: number;
  disabled?: boolean;
  floating?: string | boolean | object;
  id?: string;
  inputType?: string;
  attrs?: object;
  placeholder?: string | object;
  readonly?: boolean;
  loading?: boolean;
  onBlur?: Function;
  onKeydown?: Function;
  onKeyup?: Function;
  onKeypress?: Function;
}

interface TTextareaElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: object | string | number;
  addons?: object;
  autogrow?: boolean;
  rows?: number;
  debounce?: number;
  disabled?: boolean;
  floating?: string | boolean | object;
  id?: string;
  placeholder?: string | object;
  readonly?: boolean;
  attrs?: object;
  onBlur?: Function;
  onKeydown?: Function;
  onKeyup?: Function;
  onKeypress?: Function;
}

interface TagsElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: Array<any>;
  disabled?: boolean;
  floating?: string | boolean | object;
  id?: string;
  placeholder?: string | object;
  attrs?: object;
  onSelect?: Function;
  onDeselect?: Function;
  onSearchChange?: Function;
  onOpen?: Function;
  onClose?: Function;
  onTag?: Function;
  onClear?: Function;
  onPaste?: Function;
  items?: object | Array<any> | Function | string;
  labelProp?: string;
  valueProp?: string;
  dataKey?: string;
  searchParam?: string;
  search?: boolean;
  trackBy?: string | Array<any>;
  strict?: boolean;
  breakTags?: boolean;
  create?: boolean;
  appendNewOption?: boolean;
  addOptionOn?: Array<any>;
  object?: boolean;
  limit?: number;
  max?: number;
  groups?: boolean;
  groupLabel?: string;
  groupOptions?: string;
  groupHideEmpty?: boolean;
  groupSelect?: boolean;
  openDirection?: string;
  appendToBody?: boolean;
  appendTo?: string;
  canClear?: boolean;
  clearOnSelect?: boolean;
  closeOnSelect?: boolean;
  closeOnDeselect?: boolean;
  clearOnRefetch?: boolean;
  delay?: number;
  minChars?: number;
  resolveOnLoad?: boolean;
  filterResults?: boolean;
  clearOnSearch?: boolean;
  hideSelected?: boolean;
  showOptions?: boolean;
  caret?: boolean;
  loading?: boolean;
  noOptionsText?: string | object;
  noResultsText?: string | object;
  autocomplete?: string;
  inputType?: string;
  extendOptions?: object;
}

interface TextElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: string | number | object;
  debounce?: number;
  disabled?: boolean;
  floating?: string | boolean | object;
  id?: string;
  placeholder?: string | object;
  readonly?: boolean;
  inputType?: string;
  attrs?: object;
  addons?: object;
  autocomplete?: string | number;
  loading?: boolean;
  onBlur?: Function;
  onKeydown?: Function;
  onKeyup?: Function;
  onKeypress?: Function;
}

interface TextareaElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: string | number | object;
  addons?: object;
  autogrow?: boolean;
  rows?: number;
  debounce?: number;
  disabled?: boolean;
  floating?: string | boolean | object;
  id?: string;
  placeholder?: string | object;
  readonly?: boolean;
  attrs?: object;
  onBlur?: Function;
  onKeydown?: Function;
  onKeyup?: Function;
  onKeypress?: Function;
}

interface ToggleElementProps {
  name: string | number;
  conditions?: Array<any>;
  onBeforeCreate?: Function;
  onCreated?: Function;
  onBeforeMount?: Function;
  onMounted?: Function;
  onBeforeUpdate?: Function;
  onUpdated?: Function;
  onBeforeUnmount?: Function;
  onUnmounted?: Function;
  inline?: boolean;
  layout?: string | object | boolean;
  addClass?: Array<any> | object | string;
  removeClass?: Array<any> | object;
  replaceClass?: object;
  overrideClass?: Array<any> | object | string;
  addClasses?: object;
  replaceClasses?: object;
  removeClasses?: object;
  overrideClasses?: object;
  presets?: Array<any>;
  view?: string;
  views?: object;
  size?: string;
  columns?: object | string | number;
  templates?: object;
  description?: string | object;
  info?: string | object;
  infoPosition?: string;
  label?: string | object | Function;
  before?: object | string | number;
  between?: object | string | number;
  after?: object | string | number;
  slots?: object;
  onChange?: Function;
  formatData?: Function;
  formatLoad?: Function;
  submit?: boolean;
  rules?: Array<any> | string | object;
  messages?: object;
  fieldName?: string;
  type?: string;
  default?: string | number | boolean;
  disabled?: boolean;
  id?: string;
  text?: string | object;
  labels?: object;
  trueValue?: boolean | string | number;
  falseValue?: boolean | string | number;
  extendOptions?: object;
  align?: string;
}

declare class DragAndDrop implements ReturnType<typeof defineComponent> {
  $props: DragAndDropProps;

  // Props
  title: DragAndDropProps['title'];
  description: DragAndDropProps['description'];
  disabled: DragAndDropProps['disabled'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;

  // Data
  dragging: boolean;
  area: HTMLElement;

  // Injects
  el$: VueformElement;
  form$: Vueform;
  Size: string;
  theme: object;

  // Methods
  handleClick: () => void;

  //Events
  $emit(eventName: 'click', value: any): void;
  $emit(eventName: 'drop', value: any): void;
}

declare class ElementAddon implements ReturnType<typeof defineComponent> {
  $props: ElementAddonProps;

  // Props
  type: ElementAddonProps['type'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  Templates: object;
  template: object;
  classes: object;
  addon: string | Component;
  isAddonComponent: boolean;
  isSlot: boolean;

  // Injects
  el$: VueformElement;
  form$: Vueform;
  theme: object;
  Size: string;

  //Slots
  $slots: {
    'default': VNode[];
  };
}

declare class ElementDescription implements ReturnType<typeof defineComponent> {
  $props: ElementDescriptionProps;

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;
  description: string;
  isSlot: boolean;
  id: string;

  // Injects
  el$: VueformElement;
  form$: Vueform;
  Size: string;
  theme: object;

  //Slots
  $slots: {
    'default': VNode[];
  };
}

declare class ElementError implements ReturnType<typeof defineComponent> {
  $props: ElementErrorProps;

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;
  error: string;
  id: string;

  // Injects
  el$: VueformElement;
  form$: Vueform;
  Size: string;
  theme: object;
}

declare class ElementInfo implements ReturnType<typeof defineComponent> {
  $props: ElementInfoProps;

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;
  info: string;
  isSlot: boolean;
  id: string;

  // Data
  position: boolean;

  // Injects
  el$: VueformElement;
  form$: Vueform;
  Size: string;
  theme: object;

  //Slots
  $slots: {
    'default': VNode[];
  };
}

declare class ElementLabel implements ReturnType<typeof defineComponent> {
  $props: ElementLabelProps;

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;
  label: string | Component;
  isLabelComponent: boolean;
  name: string;
  id: string;
  hasLabel: boolean;
  isSlot: boolean;

  // Injects
  el$: VueformElement;
  form$: Vueform;
  Size: string;
  theme: object;

  //Slots
  $slots: {
    'default': VNode[];
    'info': VNode[];
  };
}

declare class ElementLabelFloating implements ReturnType<typeof defineComponent> {
  $props: ElementLabelFloatingProps;

  // Props
  visible: ElementLabelFloatingProps['visible'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;
  floating: string;

  // Injects
  el$: VueformElement;
  form$: Vueform;
  Size: string;
  theme: object;
}

declare class ElementLayout implements ReturnType<typeof defineComponent> {
  $props: ElementLayoutProps;

  // Props
  multiple: ElementLayoutProps['multiple'];
  view: ElementLayoutProps['view'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  Templates: object;
  template: object;
  classes: object;
  visible: boolean;

  // Injects
  el$: VueformElement;
  form$: Vueform;
  Size: string;
  theme: object;

  //Slots
  $slots: {
    'field': VNode[];
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

declare class ElementLayoutInline implements ReturnType<typeof defineComponent> {
  $props: ElementLayoutInlineProps;

  // Computed
  View: string;
  classesInstance: MergeClasses;
  Templates: object;
  template: object;
  classes: object;
  visible: boolean;

  // Injects
  el$: VueformElement;
  form$: Vueform;
  Size: string;
  theme: object;

  //Slots
  $slots: {
    'field': VNode[];
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

declare class ElementLoader implements ReturnType<typeof defineComponent> {
  $props: ElementLoaderProps;

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;

  // Injects
  el$: VueformElement;
  form$: Vueform;
  Size: string;
  theme: object;
}

declare class ElementMessage implements ReturnType<typeof defineComponent> {
  $props: ElementMessageProps;

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;
  message: string;

  // Injects
  el$: VueformElement;
  form$: Vueform;
  Size: string;
  theme: object;
}

declare class ElementText implements ReturnType<typeof defineComponent> {
  $props: ElementTextProps;

  // Props
  type: ElementTextProps['type'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;
  content: string;
  isSlot: boolean;

  // Injects
  el$: VueformElement;
  form$: Vueform;
  Size: string;
  theme: object;

  //Slots
  $slots: {
    'default': VNode[];
  };
}

declare class FormElements implements ReturnType<typeof defineComponent> {
  $props: FormElementsProps;

  // Props
  view: FormElementsProps['view'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;
  schema: object;

  // Injects
  form$: Vueform;
  Size: string;
  theme: object;

  // Methods
  component: (element: string) => string;

  //Slots
  $slots: {
    'default': VNode[];
  };
}

declare class FormErrors implements ReturnType<typeof defineComponent> {
  $props: FormErrorsProps;

  // Props
  view: FormErrorsProps['view'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;
  errors: Array<any>;

  // Injects
  form$: Vueform;
  Size: string;
  theme: object;
}

declare class FormLanguage implements ReturnType<typeof defineComponent> {
  $props: FormLanguageProps;

  // Props
  language: FormLanguageProps['language'];
  code: FormLanguageProps['code'];
  view: FormLanguageProps['view'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  selectedLanguage: string;
  selected: boolean;
  classes: object;
  Templates: object;
  template: object;

  // Injects
  form$: Vueform;
  Size: string;
  theme: object;

  // Methods
  select: () => void;

  //Events
  $emit(eventName: 'select', value: any): void;
}

declare class FormLanguages implements ReturnType<typeof defineComponent> {
  $props: FormLanguagesProps;

  // Props
  view: FormLanguagesProps['view'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;
  language: string;
  languages: object;

  // Injects
  form$: Vueform;
  Size: string;
  theme: object;

  // Methods
  select: (code: string) => void;
  handleSelect: (code: string) => void;
}

declare class FormMessages implements ReturnType<typeof defineComponent> {
  $props: FormMessagesProps;

  // Props
  view: FormMessagesProps['view'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;
  messages: Array<any>;

  // Injects
  form$: Vueform;
  Size: string;
  theme: object;
}

declare class FormStep implements ReturnType<typeof defineComponent> {
  $props: FormStepProps;

  // Props
  name: FormStepProps['name'];
  label: FormStepProps['label'];
  labels: FormStepProps['labels'];
  buttons: FormStepProps['buttons'];
  elements: FormStepProps['elements'];
  conditions: FormStepProps['conditions'];
  addClass: FormStepProps['addClass'];
  removeClass: FormStepProps['removeClass'];
  replaceClass: FormStepProps['replaceClass'];
  overrideClass: FormStepProps['overrideClass'];
  view: FormStepProps['view'];
  onActivate: FormStepProps['onActivate'];
  onInactivate: FormStepProps['onInactivate'];
  onDisable: FormStepProps['onDisable'];
  onEnable: FormStepProps['onEnable'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  steps$: FormSteps;
  elements$: object;
  isFirst: boolean;
  isLast: boolean;
  children$: object;
  visible: boolean;
  invalid: boolean;
  pending: boolean;
  classes: object;
  Templates: object;
  template: object;
  available: boolean;
  baseLabel: string;
  debouncing: boolean;
  validated: boolean;
  busy: boolean;
  done: boolean;
  step$: FormStep;
  isLabelComponent: boolean;
  index: number;

  // Data
  active: boolean;
  isDisabled: boolean;
  completed: boolean;
  events: Array<any>;
  listeners: object;
  stepLabel: string | Component;
  conditionList: Array<any>;

  // Injects
  form$: Vueform;
  Size: string;
  theme: object;

  // Methods
  validate: () => Promise;
  activate: () => void;
  deactivate: () => void;
  enable: () => void;
  disable: () => void;
  complete: () => void;
  uncomplete: () => void;
  select: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args?: any) => void;
  addChildConditions: () => void;
  removeChildConditions: () => void;
  resetChildConditions: () => void;
  updateConditions: () => void;

  //Events
  $emit(eventName: 'activate', value: any): void;
  $emit(eventName: 'inactivate', value: any): void;
  $emit(eventName: 'enable', value: any): void;
  $emit(eventName: 'disable', value: any): void;
  $emit(eventName: 'complete', value: any): void;

  //Slots
  $slots: {
    'default': VNode[];
  };
}

declare class FormSteps implements ReturnType<typeof defineComponent> {
  $props: FormStepsProps;

  // Props
  view: FormStepsProps['view'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  steps: object;
  elements$: object;
  classes: object;
  Templates: object;
  template: object;
  steps$: object;
  pending: boolean;
  debouncing: boolean;
  invalid: boolean;
  done: boolean;
  busy: boolean;
  visible$: object;
  first$: FormStep | undefined;
  last$: FormStep | undefined;
  current$: FormStep | undefined;
  next$: FormStep | undefined;
  previous$: FormStep | undefined;
  firstInvalid$: FormStep | undefined;
  firstNonDone$: FormStep | undefined;
  lastEnabled$: FormStep | undefined;
  isAtLastStep: boolean;
  isAtFirstStep: boolean;

  // Data
  steps$Array: Array<any>;
  events: Array<any>;
  listeners: object;
  exists: boolean;

  // Injects
  form$: Vueform;
  Size: string;
  theme: object;

  // Methods
  goTo: (name: string, enableUntil?: boolean) => void;
  next: () => void;
  previous: () => void;
  complete: () => void;
  step$: (name: string) => FormStep | undefined;
  reset: () => void;
  enableAllSteps: () => void;
  submit: () => Promise;
  select: (step$: FormStep) => void;
  enableUntil: (index: number) => void;
  enableUntilCurrent: () => void;
  enableUntilLastEnabled: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args?: any) => void;

  //Events
  $emit(eventName: 'select', value: any): void;
  $emit(eventName: 'next', value: any): void;
  $emit(eventName: 'previous', value: any): void;
  $emit(eventName: 'finish', value: any): void;
}

declare class FormStepsControl implements ReturnType<typeof defineComponent> {
  $props: FormStepsControlProps;

  // Props
  type: FormStepsControlProps['type'];
  labels: FormStepsControlProps['labels'];
  view: FormStepsControlProps['view'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  steps$: FormSteps;
  classes: object;
  Templates: object;
  template: object;
  visible: boolean;
  isDisabled: boolean;
  isLoading: boolean;
  current$: FormStep;
  label: string | Component;
  isLabelComponent: boolean;

  // Injects
  form$: Vueform;
  Size: string;
  theme: object;

  // Methods
  previous: () => void;
  next: () => Promise;
  finish: () => Promise;
  handleClick: (e: Event) => void;

  //Slots
  $slots: {
    'default': VNode[];
  };
}

declare class FormStepsControls implements ReturnType<typeof defineComponent> {
  $props: FormStepsControlsProps;

  // Props
  labels: FormStepsControlsProps['labels'];
  view: FormStepsControlsProps['view'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;

  // Injects
  form$: Vueform;
  Size: string;
  theme: object;

  //Slots
  $slots: {
    'previous': VNode[];
    'next': VNode[];
    'finish': VNode[];
  };
}

declare class FormTab implements ReturnType<typeof defineComponent> {
  $props: FormTabProps;

  // Props
  name: FormTabProps['name'];
  label: FormTabProps['label'];
  elements: FormTabProps['elements'];
  conditions: FormTabProps['conditions'];
  addClass: FormTabProps['addClass'];
  removeClass: FormTabProps['removeClass'];
  replaceClass: FormTabProps['replaceClass'];
  overrideClass: FormTabProps['overrideClass'];
  view: FormTabProps['view'];
  onActivate: FormTabProps['onActivate'];
  onInactivate: FormTabProps['onInactivate'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  elements$: object;
  index: number;
  isFirst: boolean;
  isLast: boolean;
  children$: object;
  visible: boolean;
  invalid: boolean;
  classes: object;
  Templates: object;
  template: object;
  available: boolean;
  isLabelComponent: boolean;
  tab$: FormTab;
  tabs$: FormTabs;

  // Data
  active: boolean;
  events: Array<any>;
  listeners: object;
  tabLabel: string | Component;
  conditionList: Array<any>;

  // Injects
  form$: Vueform;
  Size: string;
  theme: object;

  // Methods
  select: () => void;
  activate: () => void;
  deactivate: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args?: any) => void;
  addChildConditions: () => void;
  removeChildConditions: () => void;
  resetChildConditions: () => void;
  updateConditions: () => void;

  //Events
  $emit(eventName: 'activate', value: any): void;
  $emit(eventName: 'inactivate', value: any): void;

  //Slots
  $slots: {
    'default': VNode[];
  };
}

declare class FormTabs implements ReturnType<typeof defineComponent> {
  $props: FormTabsProps;

  // Props
  view: FormTabsProps['view'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  tabs: object;
  elements$: object;
  classes: object;
  Templates: object;
  template: object;
  tabs$: object;
  visible$: object;
  current$: FormTab;
  first$: FormTab;
  last$: FormTab;
  next$: FormTab;
  previous$: FormTab;

  // Data
  tabs$Array: Array<any>;
  events: Array<any>;
  listeners: object;
  exists: boolean;

  // Injects
  form$: Vueform;
  Size: string;
  theme: object;

  // Methods
  goTo: (name: string) => void;
  select: (tab$: FormTab) => void;
  tab$: (tab: string) => FormTab;
  reset: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args?: any) => void;

  //Events
  $emit(eventName: 'select', value: any): void;
}

declare class Vueform implements ReturnType<typeof defineComponent> {
  $props: VueformProps;

  // Props
  schema: VueformProps['schema'];
  name: VueformProps['name'];
  tabs: VueformProps['tabs'];
  steps: VueformProps['steps'];
  stepsControls: VueformProps['stepsControls'];
  validateOn: VueformProps['validateOn'];
  displayErrors: VueformProps['displayErrors'];
  displayMessages: VueformProps['displayMessages'];
  messages: VueformProps['messages'];
  endpoint: VueformProps['endpoint'];
  method: VueformProps['method'];
  prepare: VueformProps['prepare'];
  formKey: VueformProps['formKey'];
  formData: VueformProps['formData'];
  value: VueformProps['value'];
  modelValue: VueformProps['modelValue'];
  sync: VueformProps['sync'];
  default: VueformProps['default'];
  formatData: VueformProps['formatData'];
  formatLoad: VueformProps['formatLoad'];
  loading: VueformProps['loading'];
  disabled: VueformProps['disabled'];
  columns: VueformProps['columns'];
  forceLabels: VueformProps['forceLabels'];
  floatPlaceholders: VueformProps['floatPlaceholders'];
  size: VueformProps['size'];
  view: VueformProps['view'];
  views: VueformProps['views'];
  addClasses: VueformProps['addClasses'];
  addClass: VueformProps['addClass'];
  removeClasses: VueformProps['removeClasses'];
  removeClass: VueformProps['removeClass'];
  replaceClasses: VueformProps['replaceClasses'];
  replaceClass: VueformProps['replaceClass'];
  overrideClasses: VueformProps['overrideClasses'];
  overrideClass: VueformProps['overrideClass'];
  templates: VueformProps['templates'];
  presets: VueformProps['presets'];
  multilingual: VueformProps['multilingual'];
  languages: VueformProps['languages'];
  language: VueformProps['language'];
  locale: VueformProps['locale'];
  onChange: VueformProps['onChange'];
  onReset: VueformProps['onReset'];
  onClear: VueformProps['onClear'];
  onSubmit: VueformProps['onSubmit'];
  onSuccess: VueformProps['onSuccess'];
  onError: VueformProps['onError'];
  onLanguage: VueformProps['onLanguage'];
  onBeforeMount: VueformProps['onBeforeMount'];
  onMounted: VueformProps['onMounted'];
  onBeforeUpdate: VueformProps['onBeforeUpdate'];
  onUpdated: VueformProps['onUpdated'];
  onBeforeUnmount: VueformProps['onBeforeUnmount'];
  onUnmounted: VueformProps['onUnmounted'];

  // Computed
  options: object;
  data: object;
  requestData: object;
  dirty: boolean;
  invalid: boolean;
  debouncing: boolean;
  pending: boolean;
  validated: boolean;
  busy: boolean;
  formErrors: Array<any>;
  formMessages: Array<any>;
  isDisabled: boolean;
  isLoading: boolean;
  shouldValidateOnChange: boolean;
  shouldValidateOnStep: boolean;
  hasSteps: boolean;
  hasTabs: boolean;
  hasErrors: boolean;
  hasMessages: boolean;
  isMultilingual: boolean;
  showErrors: boolean;
  showMessages: boolean;
  showLanguages: boolean;
  showSteps: boolean;
  showTabs: boolean;
  showStepsControls: boolean;
  classes: object;
  Templates: object;
  template: object;
  extendedTheme: object;
  Size: string;
  View: string;
  Views: object;
  form$: Vueform;
  model: object;
  isSync: boolean;
  tree: Array<any>;
  flatTree: Array<any>;
  translations: object;
  locale$: string;

  // Data
  tabs$: FormTabs;
  steps$: FormSteps;
  elements$: object;
  validation: boolean;
  conditions: boolean;
  messageBag: MessageBag;
  selectedLanguage: string;
  submitting: boolean;
  preparing: boolean;
  events: Array<any>;
  listeners: object;
  internalData: object;
  intermediaryValue: object;
  userConfig: object;
  messagesRegistered: boolean;
  errorsRegistered: boolean;
  languagesRegistered: boolean;
  tabsRegistered: boolean;
  stepsRegistered: boolean;

  // Methods
  prepareElements: () => Promise;
  updateModel: (dataPath: string, val: any) => void;
  update: (data: object, path?: object) => void;
  load: (value: string, format?: boolean) => Promise;
  reset: () => void;
  clear: () => void;
  clean: () => void;
  clearMessages: () => void;
  validate: () => Promise;
  resetValidators: () => void;
  convertFormData: (data: object) => object;
  submit: () => Promise;
  send: () => Promise;
  disableValidation: () => void;
  enableValidation: () => void;
  enableConditions: () => void;
  disableConditions: () => void;
  setLanguage: (code: string) => void;
  handleSubmit: () => void;
  el$: (path: string, elements?: object) => VueformElement | null;
  siblings$: (path: string) => void;
  initMessageBag: () => void;
  fire: (args?: any) => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;

  //Events
  $emit(eventName: 'input', value: any): void;
  $emit(eventName: 'update:modelValue', value: any): void;
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
  $emit(eventName: 'submit', value: any): void;
  $emit(eventName: 'success', value: any): void;
  $emit(eventName: 'error', value: any): void;
  $emit(eventName: 'response', value: any): void;
  $emit(eventName: 'language', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'default': VNode[];
    'empty': VNode[];
  };
}

declare class DatepickerWrapper implements ReturnType<typeof defineComponent> {
  $props: DatepickerWrapperProps;

  // Props
  value: DatepickerWrapperProps['value'];
  options: DatepickerWrapperProps['options'];
  id: DatepickerWrapperProps['id'];
  placeholder: DatepickerWrapperProps['placeholder'];
  attrs: DatepickerWrapperProps['attrs'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;
  config: object;
  mode: string;
  locale: object;

  // Data
  datepicker$: object;
  input: HTMLElement;

  // Injects
  el$: VueformElement;
  form$: Vueform;
  Size: string;
  theme: object;

  // Methods
  update: (value: Array<any> | Date) => void;

  //Events
  $emit(eventName: 'change', value: any): void;
}

declare class EditorWrapper implements ReturnType<typeof defineComponent> {
  $props: EditorWrapperProps;

  // Props
  value: EditorWrapperProps['value'];
  placeholder: EditorWrapperProps['placeholder'];
  name: EditorWrapperProps['name'];
  id: EditorWrapperProps['id'];
  accept: EditorWrapperProps['accept'];
  acceptMimes: EditorWrapperProps['acceptMimes'];
  endpoint: EditorWrapperProps['endpoint'];
  method: EditorWrapperProps['method'];
  disabled: EditorWrapperProps['disabled'];
  hideTools: EditorWrapperProps['hideTools'];
  attrs: EditorWrapperProps['attrs'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;

  // Data
  editor$: HTMLElement;

  // Injects
  el$: VueformElement;
  form$: Vueform;
  Size: string;
  theme: object;

  // Methods
  update: (value: string) => void;
  setOption: (key: string, value: string) => void;
  handleChange: () => void;
  handleFileAccept: (e: Event) => void;
  handleAttachmentAdd: (e: Event) => Promise;
  handleBlur: () => void;

  //Events
  $emit(eventName: 'input', value: any): void;
  $emit(eventName: 'alert', value: any): void;
  $emit(eventName: 'error', value: any): void;
  $emit(eventName: 'blur', value: any): void;
}

declare class CheckboxgroupCheckbox implements ReturnType<typeof defineComponent> {
  $props: CheckboxgroupCheckboxProps;

  // Props
  item: CheckboxgroupCheckboxProps['item'];
  value: CheckboxgroupCheckboxProps['value'];
  items: CheckboxgroupCheckboxProps['items'];
  index: CheckboxgroupCheckboxProps['index'];
  attrs: CheckboxgroupCheckboxProps['attrs'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;
  isDisabled: boolean;
  id: boolean;
  name: boolean;
  checked: boolean;

  // Injects
  el$: VueformElement;
  form$: Vueform;
  Size: string;
  theme: object;

  // Methods
  handleKeydown: (e: Event) => void;
}

declare class FilePreview implements ReturnType<typeof defineComponent> {
  $props: FilePreviewProps;

  // Props
  attrs: FilePreviewProps['attrs'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;
  visible: boolean;
  hasLink: boolean;
  hasError: boolean;
  link: string;
  filename: string;
  clickable: boolean;
  uploaded: boolean;
  uploading: boolean;
  progress: number;
  canRemove: boolean;
  canUploadTemp: boolean;
  uploadText: string;
  preview: string;
  ariaLabelledby: string;
  ariaPlaceholder: string;
  ariaRoledescription: string;

  // Injects
  el$: VueformElement;
  form$: Vueform;
  Size: string;
  theme: object;

  // Methods
  upload: () => void;
  remove: () => void;
  handleKeyup: (event: Event) => Promise;
}

declare class RadiogroupRadio implements ReturnType<typeof defineComponent> {
  $props: RadiogroupRadioProps;

  // Props
  item: RadiogroupRadioProps['item'];
  value: RadiogroupRadioProps['value'];
  items: RadiogroupRadioProps['items'];
  index: RadiogroupRadioProps['index'];
  attrs: RadiogroupRadioProps['attrs'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;
  isDisabled: boolean;
  id: boolean;
  name: boolean;
  checked: boolean;

  // Injects
  el$: VueformElement;
  form$: Vueform;
  Size: string;
  theme: object;

  // Methods
  handleKeydown: (e: Event) => void;
}

declare class ButtonElement implements ReturnType<typeof defineComponent> {
  $props: ButtonElementProps;

  // Props
  name: ButtonElementProps['name'];
  conditions: ButtonElementProps['conditions'];
  onBeforeCreate: ButtonElementProps['onBeforeCreate'];
  onCreated: ButtonElementProps['onCreated'];
  onBeforeMount: ButtonElementProps['onBeforeMount'];
  onMounted: ButtonElementProps['onMounted'];
  onBeforeUpdate: ButtonElementProps['onBeforeUpdate'];
  onUpdated: ButtonElementProps['onUpdated'];
  onBeforeUnmount: ButtonElementProps['onBeforeUnmount'];
  onUnmounted: ButtonElementProps['onUnmounted'];
  inline: ButtonElementProps['inline'];
  layout: ButtonElementProps['layout'];
  addClass: ButtonElementProps['addClass'];
  removeClass: ButtonElementProps['removeClass'];
  replaceClass: ButtonElementProps['replaceClass'];
  overrideClass: ButtonElementProps['overrideClass'];
  addClasses: ButtonElementProps['addClasses'];
  replaceClasses: ButtonElementProps['replaceClasses'];
  removeClasses: ButtonElementProps['removeClasses'];
  overrideClasses: ButtonElementProps['overrideClasses'];
  presets: ButtonElementProps['presets'];
  view: ButtonElementProps['view'];
  views: ButtonElementProps['views'];
  size: ButtonElementProps['size'];
  columns: ButtonElementProps['columns'];
  templates: ButtonElementProps['templates'];
  description: ButtonElementProps['description'];
  info: ButtonElementProps['info'];
  infoPosition: ButtonElementProps['infoPosition'];
  label: ButtonElementProps['label'];
  before: ButtonElementProps['before'];
  between: ButtonElementProps['between'];
  after: ButtonElementProps['after'];
  slots: ButtonElementProps['slots'];
  type: ButtonElementProps['type'];
  buttonLabel: ButtonElementProps['buttonLabel'];
  buttonType: ButtonElementProps['buttonType'];
  buttonClass: ButtonElementProps['buttonClass'];
  id: ButtonElementProps['id'];
  disabled: ButtonElementProps['disabled'];
  loading: ButtonElementProps['loading'];
  href: ButtonElementProps['href'];
  target: ButtonElementProps['target'];
  onClick: ButtonElementProps['onClick'];
  resets: ButtonElementProps['resets'];
  submits: ButtonElementProps['submits'];
  secondary: ButtonElementProps['secondary'];
  danger: ButtonElementProps['danger'];
  full: ButtonElementProps['full'];
  align: ButtonElementProps['align'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  isButtonLabelComponent: boolean;
  button: object;
  isLoading: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  isDisabled: boolean;
  fieldId: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  path: string;
  flat: boolean;
  parent: VNode;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  events: Array<any>;
  listeners: object;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  handleClick: (e: Event) => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'click', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
    'default': VNode[];
  };
}

declare class CheckboxElement implements ReturnType<typeof defineComponent> {
  $props: CheckboxElementProps;

  // Props
  name: CheckboxElementProps['name'];
  conditions: CheckboxElementProps['conditions'];
  onBeforeCreate: CheckboxElementProps['onBeforeCreate'];
  onCreated: CheckboxElementProps['onCreated'];
  onBeforeMount: CheckboxElementProps['onBeforeMount'];
  onMounted: CheckboxElementProps['onMounted'];
  onBeforeUpdate: CheckboxElementProps['onBeforeUpdate'];
  onUpdated: CheckboxElementProps['onUpdated'];
  onBeforeUnmount: CheckboxElementProps['onBeforeUnmount'];
  onUnmounted: CheckboxElementProps['onUnmounted'];
  inline: CheckboxElementProps['inline'];
  layout: CheckboxElementProps['layout'];
  addClass: CheckboxElementProps['addClass'];
  removeClass: CheckboxElementProps['removeClass'];
  replaceClass: CheckboxElementProps['replaceClass'];
  overrideClass: CheckboxElementProps['overrideClass'];
  addClasses: CheckboxElementProps['addClasses'];
  replaceClasses: CheckboxElementProps['replaceClasses'];
  removeClasses: CheckboxElementProps['removeClasses'];
  overrideClasses: CheckboxElementProps['overrideClasses'];
  presets: CheckboxElementProps['presets'];
  view: CheckboxElementProps['view'];
  views: CheckboxElementProps['views'];
  size: CheckboxElementProps['size'];
  columns: CheckboxElementProps['columns'];
  templates: CheckboxElementProps['templates'];
  description: CheckboxElementProps['description'];
  info: CheckboxElementProps['info'];
  infoPosition: CheckboxElementProps['infoPosition'];
  label: CheckboxElementProps['label'];
  before: CheckboxElementProps['before'];
  between: CheckboxElementProps['between'];
  after: CheckboxElementProps['after'];
  slots: CheckboxElementProps['slots'];
  onChange: CheckboxElementProps['onChange'];
  formatData: CheckboxElementProps['formatData'];
  formatLoad: CheckboxElementProps['formatLoad'];
  submit: CheckboxElementProps['submit'];
  rules: CheckboxElementProps['rules'];
  messages: CheckboxElementProps['messages'];
  fieldName: CheckboxElementProps['fieldName'];
  type: CheckboxElementProps['type'];
  default: CheckboxElementProps['default'];
  id: CheckboxElementProps['id'];
  text: CheckboxElementProps['text'];
  disabled: CheckboxElementProps['disabled'];
  trueValue: CheckboxElementProps['trueValue'];
  falseValue: CheckboxElementProps['falseValue'];
  align: CheckboxElementProps['align'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  fieldId: string;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  Text: string;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isDanger: boolean;
  isSuccess: boolean;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  events: Array<any>;
  listeners: object;
  input: HTMLElement;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disable: () => void;
  enable: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  check: () => void;
  uncheck: () => void;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'default': VNode[];
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

declare class CheckboxgroupElement implements ReturnType<typeof defineComponent> {
  $props: CheckboxgroupElementProps;

  // Props
  name: CheckboxgroupElementProps['name'];
  conditions: CheckboxgroupElementProps['conditions'];
  onBeforeCreate: CheckboxgroupElementProps['onBeforeCreate'];
  onCreated: CheckboxgroupElementProps['onCreated'];
  onBeforeMount: CheckboxgroupElementProps['onBeforeMount'];
  onMounted: CheckboxgroupElementProps['onMounted'];
  onBeforeUpdate: CheckboxgroupElementProps['onBeforeUpdate'];
  onUpdated: CheckboxgroupElementProps['onUpdated'];
  onBeforeUnmount: CheckboxgroupElementProps['onBeforeUnmount'];
  onUnmounted: CheckboxgroupElementProps['onUnmounted'];
  inline: CheckboxgroupElementProps['inline'];
  layout: CheckboxgroupElementProps['layout'];
  addClass: CheckboxgroupElementProps['addClass'];
  removeClass: CheckboxgroupElementProps['removeClass'];
  replaceClass: CheckboxgroupElementProps['replaceClass'];
  overrideClass: CheckboxgroupElementProps['overrideClass'];
  addClasses: CheckboxgroupElementProps['addClasses'];
  replaceClasses: CheckboxgroupElementProps['replaceClasses'];
  removeClasses: CheckboxgroupElementProps['removeClasses'];
  overrideClasses: CheckboxgroupElementProps['overrideClasses'];
  presets: CheckboxgroupElementProps['presets'];
  view: CheckboxgroupElementProps['view'];
  views: CheckboxgroupElementProps['views'];
  size: CheckboxgroupElementProps['size'];
  columns: CheckboxgroupElementProps['columns'];
  templates: CheckboxgroupElementProps['templates'];
  description: CheckboxgroupElementProps['description'];
  info: CheckboxgroupElementProps['info'];
  infoPosition: CheckboxgroupElementProps['infoPosition'];
  label: CheckboxgroupElementProps['label'];
  before: CheckboxgroupElementProps['before'];
  between: CheckboxgroupElementProps['between'];
  after: CheckboxgroupElementProps['after'];
  slots: CheckboxgroupElementProps['slots'];
  onChange: CheckboxgroupElementProps['onChange'];
  formatData: CheckboxgroupElementProps['formatData'];
  formatLoad: CheckboxgroupElementProps['formatLoad'];
  submit: CheckboxgroupElementProps['submit'];
  rules: CheckboxgroupElementProps['rules'];
  messages: CheckboxgroupElementProps['messages'];
  fieldName: CheckboxgroupElementProps['fieldName'];
  type: CheckboxgroupElementProps['type'];
  default: CheckboxgroupElementProps['default'];
  id: CheckboxgroupElementProps['id'];
  items: CheckboxgroupElementProps['items'];
  disabled: CheckboxgroupElementProps['disabled'];
  disables: CheckboxgroupElementProps['disables'];
  clearOnRefetch: CheckboxgroupElementProps['clearOnRefetch'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  resolvedOptions: Array<any>;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  fieldId: string;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isDanger: boolean;
  isSuccess: boolean;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  watchers: Array<any> | object;
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  disabledItems: Array<any>;
  events: Array<any>;
  listeners: object;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  resolveOptions: () => Promise;
  updateItems: (disable: boolean) => Promise;
  cleanupValue: (values: Array<any>) => void;
  resolveUrlAndSetWatchers: (url: string, updateItems: Function) => Promise;
  activate: () => void;
  deactivate: () => void;
  toggle: (value: string | number) => void;
  check: (values: Array<any> | string | number) => void;
  uncheck: (values: Array<any> | string | number) => void;
  checkAll: () => void;
  uncheckAll: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disableAll: () => void;
  enableAll: () => void;
  disable: (values: Array<any> | string | number) => void;
  enable: (values: Array<any> | string | number) => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'checkbox': VNode[];
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

declare class DateElement implements ReturnType<typeof defineComponent> {
  $props: DateElementProps;

  // Props
  name: DateElementProps['name'];
  conditions: DateElementProps['conditions'];
  onBeforeCreate: DateElementProps['onBeforeCreate'];
  onCreated: DateElementProps['onCreated'];
  onBeforeMount: DateElementProps['onBeforeMount'];
  onMounted: DateElementProps['onMounted'];
  onBeforeUpdate: DateElementProps['onBeforeUpdate'];
  onUpdated: DateElementProps['onUpdated'];
  onBeforeUnmount: DateElementProps['onBeforeUnmount'];
  onUnmounted: DateElementProps['onUnmounted'];
  inline: DateElementProps['inline'];
  layout: DateElementProps['layout'];
  addClass: DateElementProps['addClass'];
  removeClass: DateElementProps['removeClass'];
  replaceClass: DateElementProps['replaceClass'];
  overrideClass: DateElementProps['overrideClass'];
  addClasses: DateElementProps['addClasses'];
  replaceClasses: DateElementProps['replaceClasses'];
  removeClasses: DateElementProps['removeClasses'];
  overrideClasses: DateElementProps['overrideClasses'];
  presets: DateElementProps['presets'];
  view: DateElementProps['view'];
  views: DateElementProps['views'];
  size: DateElementProps['size'];
  columns: DateElementProps['columns'];
  templates: DateElementProps['templates'];
  description: DateElementProps['description'];
  info: DateElementProps['info'];
  infoPosition: DateElementProps['infoPosition'];
  label: DateElementProps['label'];
  before: DateElementProps['before'];
  between: DateElementProps['between'];
  after: DateElementProps['after'];
  slots: DateElementProps['slots'];
  onChange: DateElementProps['onChange'];
  formatData: DateElementProps['formatData'];
  formatLoad: DateElementProps['formatLoad'];
  submit: DateElementProps['submit'];
  rules: DateElementProps['rules'];
  messages: DateElementProps['messages'];
  fieldName: DateElementProps['fieldName'];
  type: DateElementProps['type'];
  default: DateElementProps['default'];
  addons: DateElementProps['addons'];
  disabled: DateElementProps['disabled'];
  floating: DateElementProps['floating'];
  id: DateElementProps['id'];
  displayFormat: DateElementProps['displayFormat'];
  valueFormat: DateElementProps['valueFormat'];
  loadFormat: DateElementProps['loadFormat'];
  date: DateElementProps['date'];
  time: DateElementProps['time'];
  seconds: DateElementProps['seconds'];
  hour24: DateElementProps['hour24'];
  min: DateElementProps['min'];
  max: DateElementProps['max'];
  disables: DateElementProps['disables'];
  extendOptions: DateElementProps['extendOptions'];
  placeholder: DateElementProps['placeholder'];
  readonly: DateElementProps['readonly'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  displayDateFormat: string;
  valueDateFormat: string;
  loadDateFormat: string;
  defaultValue: any;
  isDisabled: boolean;
  empty: boolean;
  fieldId: string;
  hasFloating: boolean;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  Placeholder: string;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isDanger: boolean;
  isSuccess: boolean;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  events: Array<any>;
  listeners: object;
  focused: boolean;
  input: HTMLElement;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disable: () => void;
  enable: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  handleChange: (val: any) => void;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
    'addon-before': VNode[];
    'addon-after': VNode[];
  };
}

declare class DatesElement implements ReturnType<typeof defineComponent> {
  $props: DatesElementProps;

  // Props
  name: DatesElementProps['name'];
  conditions: DatesElementProps['conditions'];
  onBeforeCreate: DatesElementProps['onBeforeCreate'];
  onCreated: DatesElementProps['onCreated'];
  onBeforeMount: DatesElementProps['onBeforeMount'];
  onMounted: DatesElementProps['onMounted'];
  onBeforeUpdate: DatesElementProps['onBeforeUpdate'];
  onUpdated: DatesElementProps['onUpdated'];
  onBeforeUnmount: DatesElementProps['onBeforeUnmount'];
  onUnmounted: DatesElementProps['onUnmounted'];
  inline: DatesElementProps['inline'];
  layout: DatesElementProps['layout'];
  addClass: DatesElementProps['addClass'];
  removeClass: DatesElementProps['removeClass'];
  replaceClass: DatesElementProps['replaceClass'];
  overrideClass: DatesElementProps['overrideClass'];
  addClasses: DatesElementProps['addClasses'];
  replaceClasses: DatesElementProps['replaceClasses'];
  removeClasses: DatesElementProps['removeClasses'];
  overrideClasses: DatesElementProps['overrideClasses'];
  presets: DatesElementProps['presets'];
  view: DatesElementProps['view'];
  views: DatesElementProps['views'];
  size: DatesElementProps['size'];
  columns: DatesElementProps['columns'];
  templates: DatesElementProps['templates'];
  description: DatesElementProps['description'];
  info: DatesElementProps['info'];
  infoPosition: DatesElementProps['infoPosition'];
  label: DatesElementProps['label'];
  before: DatesElementProps['before'];
  between: DatesElementProps['between'];
  after: DatesElementProps['after'];
  slots: DatesElementProps['slots'];
  onChange: DatesElementProps['onChange'];
  formatData: DatesElementProps['formatData'];
  formatLoad: DatesElementProps['formatLoad'];
  submit: DatesElementProps['submit'];
  rules: DatesElementProps['rules'];
  messages: DatesElementProps['messages'];
  fieldName: DatesElementProps['fieldName'];
  type: DatesElementProps['type'];
  default: DatesElementProps['default'];
  addons: DatesElementProps['addons'];
  disabled: DatesElementProps['disabled'];
  floating: DatesElementProps['floating'];
  id: DatesElementProps['id'];
  displayFormat: DatesElementProps['displayFormat'];
  valueFormat: DatesElementProps['valueFormat'];
  loadFormat: DatesElementProps['loadFormat'];
  mode: DatesElementProps['mode'];
  min: DatesElementProps['min'];
  max: DatesElementProps['max'];
  disables: DatesElementProps['disables'];
  extendOptions: DatesElementProps['extendOptions'];
  placeholder: DatesElementProps['placeholder'];
  readonly: DatesElementProps['readonly'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  displayDateFormat: string;
  valueDateFormat: string;
  loadDateFormat: string;
  defaultValue: any;
  isDisabled: boolean;
  empty: boolean;
  fieldId: string;
  hasFloating: boolean;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  Placeholder: string;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isDanger: boolean;
  isSuccess: boolean;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  events: Array<any>;
  listeners: object;
  focused: boolean;
  input: HTMLElement;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disable: () => void;
  enable: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  handleChange: (val: string) => void;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
    'addon-before': VNode[];
    'addon-after': VNode[];
  };
}

declare class EditorElement implements ReturnType<typeof defineComponent> {
  $props: EditorElementProps;

  // Props
  name: EditorElementProps['name'];
  conditions: EditorElementProps['conditions'];
  onBeforeCreate: EditorElementProps['onBeforeCreate'];
  onCreated: EditorElementProps['onCreated'];
  onBeforeMount: EditorElementProps['onBeforeMount'];
  onMounted: EditorElementProps['onMounted'];
  onBeforeUpdate: EditorElementProps['onBeforeUpdate'];
  onUpdated: EditorElementProps['onUpdated'];
  onBeforeUnmount: EditorElementProps['onBeforeUnmount'];
  onUnmounted: EditorElementProps['onUnmounted'];
  inline: EditorElementProps['inline'];
  layout: EditorElementProps['layout'];
  addClass: EditorElementProps['addClass'];
  removeClass: EditorElementProps['removeClass'];
  replaceClass: EditorElementProps['replaceClass'];
  overrideClass: EditorElementProps['overrideClass'];
  addClasses: EditorElementProps['addClasses'];
  replaceClasses: EditorElementProps['replaceClasses'];
  removeClasses: EditorElementProps['removeClasses'];
  overrideClasses: EditorElementProps['overrideClasses'];
  presets: EditorElementProps['presets'];
  view: EditorElementProps['view'];
  views: EditorElementProps['views'];
  size: EditorElementProps['size'];
  columns: EditorElementProps['columns'];
  templates: EditorElementProps['templates'];
  description: EditorElementProps['description'];
  info: EditorElementProps['info'];
  infoPosition: EditorElementProps['infoPosition'];
  label: EditorElementProps['label'];
  before: EditorElementProps['before'];
  between: EditorElementProps['between'];
  after: EditorElementProps['after'];
  slots: EditorElementProps['slots'];
  onChange: EditorElementProps['onChange'];
  formatData: EditorElementProps['formatData'];
  formatLoad: EditorElementProps['formatLoad'];
  submit: EditorElementProps['submit'];
  rules: EditorElementProps['rules'];
  messages: EditorElementProps['messages'];
  fieldName: EditorElementProps['fieldName'];
  type: EditorElementProps['type'];
  default: EditorElementProps['default'];
  debounce: EditorElementProps['debounce'];
  disabled: EditorElementProps['disabled'];
  id: EditorElementProps['id'];
  placeholder: EditorElementProps['placeholder'];
  onError: EditorElementProps['onError'];
  onAlert: EditorElementProps['onAlert'];
  accept: EditorElementProps['accept'];
  acceptMimes: EditorElementProps['acceptMimes'];
  endpoint: EditorElementProps['endpoint'];
  method: EditorElementProps['method'];
  hideTools: EditorElementProps['hideTools'];
  onBlur: EditorElementProps['onBlur'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  editorEndpoint: string;
  editorMethod: string;
  empty: boolean;
  fieldId: string;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  Placeholder: string;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  debouncing: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isDanger: boolean;
  isSuccess: boolean;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  focused: boolean;
  events: Array<any>;
  listeners: object;
  input: HTMLElement;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disable: () => void;
  enable: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  handleAlert: (message: string) => void;
  handleBlur: () => void;
  handleError: (error: Error) => void;
  handleInput: (e: Event) => void;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'blur', value: any): void;
  $emit(eventName: 'alert', value: any): void;
  $emit(eventName: 'error', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

declare class FileElement implements ReturnType<typeof defineComponent> {
  $props: FileElementProps;

  // Props
  name: FileElementProps['name'];
  conditions: FileElementProps['conditions'];
  onBeforeCreate: FileElementProps['onBeforeCreate'];
  onCreated: FileElementProps['onCreated'];
  onBeforeMount: FileElementProps['onBeforeMount'];
  onMounted: FileElementProps['onMounted'];
  onBeforeUpdate: FileElementProps['onBeforeUpdate'];
  onUpdated: FileElementProps['onUpdated'];
  onBeforeUnmount: FileElementProps['onBeforeUnmount'];
  onUnmounted: FileElementProps['onUnmounted'];
  inline: FileElementProps['inline'];
  layout: FileElementProps['layout'];
  addClass: FileElementProps['addClass'];
  removeClass: FileElementProps['removeClass'];
  replaceClass: FileElementProps['replaceClass'];
  overrideClass: FileElementProps['overrideClass'];
  addClasses: FileElementProps['addClasses'];
  replaceClasses: FileElementProps['replaceClasses'];
  removeClasses: FileElementProps['removeClasses'];
  overrideClasses: FileElementProps['overrideClasses'];
  presets: FileElementProps['presets'];
  view: FileElementProps['view'];
  views: FileElementProps['views'];
  size: FileElementProps['size'];
  columns: FileElementProps['columns'];
  templates: FileElementProps['templates'];
  description: FileElementProps['description'];
  info: FileElementProps['info'];
  infoPosition: FileElementProps['infoPosition'];
  label: FileElementProps['label'];
  before: FileElementProps['before'];
  between: FileElementProps['between'];
  after: FileElementProps['after'];
  slots: FileElementProps['slots'];
  onChange: FileElementProps['onChange'];
  formatData: FileElementProps['formatData'];
  formatLoad: FileElementProps['formatLoad'];
  submit: FileElementProps['submit'];
  rules: FileElementProps['rules'];
  messages: FileElementProps['messages'];
  fieldName: FileElementProps['fieldName'];
  type: FileElementProps['type'];
  default: FileElementProps['default'];
  disabled: FileElementProps['disabled'];
  id: FileElementProps['id'];
  onRemove: FileElementProps['onRemove'];
  onError: FileElementProps['onError'];
  drop: FileElementProps['drop'];
  accept: FileElementProps['accept'];
  clickable: FileElementProps['clickable'];
  url: FileElementProps['url'];
  previewUrl: FileElementProps['previewUrl'];
  auto: FileElementProps['auto'];
  urls: FileElementProps['urls'];
  methods: FileElementProps['methods'];
  uploadTempEndpoint: FileElementProps['uploadTempEndpoint'];
  removeTempEndpoint: FileElementProps['removeTempEndpoint'];
  removeEndpoint: FileElementProps['removeEndpoint'];
  params: FileElementProps['params'];
  softRemove: FileElementProps['softRemove'];
  embed: FileElementProps['embed'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  canDrop: boolean;
  empty: boolean;
  fieldId: string;
  endpoints: object;
  fileUrl: string | boolean;
  stage: number;
  filename: string;
  link: string;
  preview: string;
  uploaded: boolean;
  canRemove: boolean;
  canUploadTemp: boolean;
  canSelect: boolean;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  uploading: boolean;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  events: Array<any>;
  listeners: object;
  hasUploadError: boolean;
  base64: string;
  progress: number;
  preparing: boolean;
  watchers: object;
  input: HTMLElement;
  removing: boolean;
  request: object;
  axios: object;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disable: () => void;
  enable: () => void;
  handleDrop: (e: Event) => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  uploadTemp: () => Promise;
  remove: () => Promise;
  prepare: () => Promise;
  handleChange: (e: Event) => Promise;
  handleClick: () => void;
  handleUploadTemp: () => void;
  handleRemove: () => void;
  handleAbort: () => void;
  focus: () => void;
  handleError: (error: Error) => void;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'remove', value: any): void;
  $emit(eventName: 'error', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

declare class GenericElement implements ReturnType<typeof defineComponent> {
  $props: GenericElementProps;

  // Props
  name: GenericElementProps['name'];
  conditions: GenericElementProps['conditions'];
  onBeforeCreate: GenericElementProps['onBeforeCreate'];
  onCreated: GenericElementProps['onCreated'];
  onBeforeMount: GenericElementProps['onBeforeMount'];
  onMounted: GenericElementProps['onMounted'];
  onBeforeUpdate: GenericElementProps['onBeforeUpdate'];
  onUpdated: GenericElementProps['onUpdated'];
  onBeforeUnmount: GenericElementProps['onBeforeUnmount'];
  onUnmounted: GenericElementProps['onUnmounted'];
  inline: GenericElementProps['inline'];
  layout: GenericElementProps['layout'];
  addClass: GenericElementProps['addClass'];
  removeClass: GenericElementProps['removeClass'];
  replaceClass: GenericElementProps['replaceClass'];
  overrideClass: GenericElementProps['overrideClass'];
  addClasses: GenericElementProps['addClasses'];
  replaceClasses: GenericElementProps['replaceClasses'];
  removeClasses: GenericElementProps['removeClasses'];
  overrideClasses: GenericElementProps['overrideClasses'];
  presets: GenericElementProps['presets'];
  view: GenericElementProps['view'];
  views: GenericElementProps['views'];
  size: GenericElementProps['size'];
  columns: GenericElementProps['columns'];
  templates: GenericElementProps['templates'];
  description: GenericElementProps['description'];
  info: GenericElementProps['info'];
  infoPosition: GenericElementProps['infoPosition'];
  label: GenericElementProps['label'];
  before: GenericElementProps['before'];
  between: GenericElementProps['between'];
  after: GenericElementProps['after'];
  slots: GenericElementProps['slots'];
  onChange: GenericElementProps['onChange'];
  formatData: GenericElementProps['formatData'];
  formatLoad: GenericElementProps['formatLoad'];
  submit: GenericElementProps['submit'];
  rules: GenericElementProps['rules'];
  messages: GenericElementProps['messages'];
  fieldName: GenericElementProps['fieldName'];
  type: GenericElementProps['type'];
  id: GenericElementProps['id'];
  disabled: GenericElementProps['disabled'];
  default: GenericElementProps['default'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  empty: boolean;
  fieldId: string;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  debouncing: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isDanger: boolean;
  isSuccess: boolean;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  events: Array<any>;
  listeners: object;
  focused: boolean;
  input: HTMLElement;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disable: () => void;
  enable: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  handleInput: (e: Event) => void;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

declare class GroupElement implements ReturnType<typeof defineComponent> {
  $props: GroupElementProps;

  // Props
  name: GroupElementProps['name'];
  conditions: GroupElementProps['conditions'];
  onBeforeCreate: GroupElementProps['onBeforeCreate'];
  onCreated: GroupElementProps['onCreated'];
  onBeforeMount: GroupElementProps['onBeforeMount'];
  onMounted: GroupElementProps['onMounted'];
  onBeforeUpdate: GroupElementProps['onBeforeUpdate'];
  onUpdated: GroupElementProps['onUpdated'];
  onBeforeUnmount: GroupElementProps['onBeforeUnmount'];
  onUnmounted: GroupElementProps['onUnmounted'];
  inline: GroupElementProps['inline'];
  layout: GroupElementProps['layout'];
  addClass: GroupElementProps['addClass'];
  removeClass: GroupElementProps['removeClass'];
  replaceClass: GroupElementProps['replaceClass'];
  overrideClass: GroupElementProps['overrideClass'];
  addClasses: GroupElementProps['addClasses'];
  replaceClasses: GroupElementProps['replaceClasses'];
  removeClasses: GroupElementProps['removeClasses'];
  overrideClasses: GroupElementProps['overrideClasses'];
  presets: GroupElementProps['presets'];
  view: GroupElementProps['view'];
  views: GroupElementProps['views'];
  size: GroupElementProps['size'];
  columns: GroupElementProps['columns'];
  templates: GroupElementProps['templates'];
  description: GroupElementProps['description'];
  info: GroupElementProps['info'];
  infoPosition: GroupElementProps['infoPosition'];
  label: GroupElementProps['label'];
  before: GroupElementProps['before'];
  between: GroupElementProps['between'];
  after: GroupElementProps['after'];
  slots: GroupElementProps['slots'];
  onChange: GroupElementProps['onChange'];
  formatData: GroupElementProps['formatData'];
  formatLoad: GroupElementProps['formatLoad'];
  submit: GroupElementProps['submit'];
  rules: GroupElementProps['rules'];
  messages: GroupElementProps['messages'];
  fieldName: GroupElementProps['fieldName'];
  type: GroupElementProps['type'];
  default: GroupElementProps['default'];
  id: GroupElementProps['id'];
  schema: GroupElementProps['schema'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  children: object;
  children$: object;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  fieldId: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  nullValue: any;
  path: string;
  dataPath: string;
  flat: boolean;
  parent: VNode;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  debouncing: boolean;
  busy: boolean;
  childrenErrors: Array<any>;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  value: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  children$Array: Array<any>;
  conditionList: Array<any>;
  events: Array<any>;
  listeners: object;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  component: (element: string) => string;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  validate: () => Promise;
  validateValidators: () => Promise;
  validateChildren: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

declare class HiddenElement implements ReturnType<typeof defineComponent> {
  $props: HiddenElementProps;

  // Props
  name: HiddenElementProps['name'];
  conditions: HiddenElementProps['conditions'];
  onBeforeCreate: HiddenElementProps['onBeforeCreate'];
  onCreated: HiddenElementProps['onCreated'];
  onBeforeMount: HiddenElementProps['onBeforeMount'];
  onMounted: HiddenElementProps['onMounted'];
  onBeforeUpdate: HiddenElementProps['onBeforeUpdate'];
  onUpdated: HiddenElementProps['onUpdated'];
  onBeforeUnmount: HiddenElementProps['onBeforeUnmount'];
  onUnmounted: HiddenElementProps['onUnmounted'];
  onChange: HiddenElementProps['onChange'];
  formatData: HiddenElementProps['formatData'];
  formatLoad: HiddenElementProps['formatLoad'];
  submit: HiddenElementProps['submit'];
  rules: HiddenElementProps['rules'];
  messages: HiddenElementProps['messages'];
  fieldName: HiddenElementProps['fieldName'];
  type: HiddenElementProps['type'];
  default: HiddenElementProps['default'];
  id: HiddenElementProps['id'];
  meta: HiddenElementProps['meta'];

  // Computed
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  empty: boolean;
  fieldId: string;
  genericName: string;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isDanger: boolean;
  isSuccess: boolean;
  value: any;
  model: any;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  events: Array<any>;
  listeners: object;
  input: HTMLElement;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;
}

declare class ListElement implements ReturnType<typeof defineComponent> {
  $props: ListElementProps;

  // Props
  name: ListElementProps['name'];
  conditions: ListElementProps['conditions'];
  onBeforeCreate: ListElementProps['onBeforeCreate'];
  onCreated: ListElementProps['onCreated'];
  onBeforeMount: ListElementProps['onBeforeMount'];
  onMounted: ListElementProps['onMounted'];
  onBeforeUpdate: ListElementProps['onBeforeUpdate'];
  onUpdated: ListElementProps['onUpdated'];
  onBeforeUnmount: ListElementProps['onBeforeUnmount'];
  onUnmounted: ListElementProps['onUnmounted'];
  inline: ListElementProps['inline'];
  layout: ListElementProps['layout'];
  addClass: ListElementProps['addClass'];
  removeClass: ListElementProps['removeClass'];
  replaceClass: ListElementProps['replaceClass'];
  overrideClass: ListElementProps['overrideClass'];
  addClasses: ListElementProps['addClasses'];
  replaceClasses: ListElementProps['replaceClasses'];
  removeClasses: ListElementProps['removeClasses'];
  overrideClasses: ListElementProps['overrideClasses'];
  presets: ListElementProps['presets'];
  view: ListElementProps['view'];
  views: ListElementProps['views'];
  size: ListElementProps['size'];
  columns: ListElementProps['columns'];
  templates: ListElementProps['templates'];
  description: ListElementProps['description'];
  info: ListElementProps['info'];
  infoPosition: ListElementProps['infoPosition'];
  label: ListElementProps['label'];
  before: ListElementProps['before'];
  between: ListElementProps['between'];
  after: ListElementProps['after'];
  slots: ListElementProps['slots'];
  onChange: ListElementProps['onChange'];
  formatData: ListElementProps['formatData'];
  formatLoad: ListElementProps['formatLoad'];
  submit: ListElementProps['submit'];
  rules: ListElementProps['rules'];
  messages: ListElementProps['messages'];
  fieldName: ListElementProps['fieldName'];
  type: ListElementProps['type'];
  default: ListElementProps['default'];
  id: ListElementProps['id'];
  disabled: ListElementProps['disabled'];
  onAdd: ListElementProps['onAdd'];
  onRemove: ListElementProps['onRemove'];
  onSort: ListElementProps['onSort'];
  element: ListElementProps['element'];
  object: ListElementProps['object'];
  initial: ListElementProps['initial'];
  min: ListElementProps['min'];
  max: ListElementProps['max'];
  addText: ListElementProps['addText'];
  sort: ListElementProps['sort'];
  controls: ListElementProps['controls'];
  storeOrder: ListElementProps['storeOrder'];
  order: ListElementProps['order'];
  orderBy: ListElementProps['orderBy'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  children$: object;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  hasAdd: boolean;
  hasRemove: boolean;
  hasSort: boolean;
  addLabel: string;
  requestData: object;
  data: object;
  length: number;
  defaultValue: any;
  isDisabled: boolean;
  empty: boolean;
  fieldId: string;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  nullValue: any;
  orderByName: string;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  prototype: object;
  isObject: boolean;
  elementSlots: object;
  fieldSlots: object;
  isSortable: boolean;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  debouncing: boolean;
  busy: boolean;
  childrenErrors: Array<any>;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  children$Array: Array<any>;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  events: Array<any>;
  listeners: object;
  list: HTMLElement;
  sortable: object;
  sorting: boolean;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  add: (value: any) => number;
  remove: (index: number) => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  handleAdd: () => void;
  handleRemove: (index: number) => void;
  disable: () => void;
  enable: () => void;
  component: (element: string) => string;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  refreshOrderStore: (value: Array<any>) => void;
  handleSort: (e: Event) => void;
  initSortable: () => void;
  destroySortable: () => void;
  validate: () => Promise;
  validateValidators: () => Promise;
  validateChildren: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'add', value: any): void;
  $emit(eventName: 'remove', value: any): void;
  $emit(eventName: 'sort', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

declare class LocationElement implements ReturnType<typeof defineComponent> {
  $props: LocationElementProps;

  // Props
  name: LocationElementProps['name'];
  conditions: LocationElementProps['conditions'];
  onBeforeCreate: LocationElementProps['onBeforeCreate'];
  onCreated: LocationElementProps['onCreated'];
  onBeforeMount: LocationElementProps['onBeforeMount'];
  onMounted: LocationElementProps['onMounted'];
  onBeforeUpdate: LocationElementProps['onBeforeUpdate'];
  onUpdated: LocationElementProps['onUpdated'];
  onBeforeUnmount: LocationElementProps['onBeforeUnmount'];
  onUnmounted: LocationElementProps['onUnmounted'];
  inline: LocationElementProps['inline'];
  layout: LocationElementProps['layout'];
  addClass: LocationElementProps['addClass'];
  removeClass: LocationElementProps['removeClass'];
  replaceClass: LocationElementProps['replaceClass'];
  overrideClass: LocationElementProps['overrideClass'];
  addClasses: LocationElementProps['addClasses'];
  replaceClasses: LocationElementProps['replaceClasses'];
  removeClasses: LocationElementProps['removeClasses'];
  overrideClasses: LocationElementProps['overrideClasses'];
  presets: LocationElementProps['presets'];
  view: LocationElementProps['view'];
  views: LocationElementProps['views'];
  size: LocationElementProps['size'];
  columns: LocationElementProps['columns'];
  templates: LocationElementProps['templates'];
  description: LocationElementProps['description'];
  info: LocationElementProps['info'];
  infoPosition: LocationElementProps['infoPosition'];
  label: LocationElementProps['label'];
  before: LocationElementProps['before'];
  between: LocationElementProps['between'];
  after: LocationElementProps['after'];
  slots: LocationElementProps['slots'];
  onChange: LocationElementProps['onChange'];
  formatData: LocationElementProps['formatData'];
  formatLoad: LocationElementProps['formatLoad'];
  submit: LocationElementProps['submit'];
  rules: LocationElementProps['rules'];
  messages: LocationElementProps['messages'];
  fieldName: LocationElementProps['fieldName'];
  type: LocationElementProps['type'];
  default: LocationElementProps['default'];
  debounce: LocationElementProps['debounce'];
  disabled: LocationElementProps['disabled'];
  floating: LocationElementProps['floating'];
  id: LocationElementProps['id'];
  placeholder: LocationElementProps['placeholder'];
  readonly: LocationElementProps['readonly'];
  attrs: LocationElementProps['attrs'];
  addons: LocationElementProps['addons'];
  provider: LocationElementProps['provider'];
  displayKey: LocationElementProps['displayKey'];
  extendOptions: LocationElementProps['extendOptions'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  empty: boolean;
  fieldId: string;
  hasFloating: boolean;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  defaultOptions: object;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  Placeholder: string;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  debouncing: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isSuccess: boolean;
  isDanger: boolean;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  events: Array<any>;
  listeners: object;
  focused: boolean;
  input: HTMLElement;
  locationService: object | null;
  location: object;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disable: () => void;
  enable: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  handleAddressChange: (data: object, raw: object) => void;
  handleLocationBlur: () => void;
  initLocationService: () => void;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
    'addon-before': VNode[];
    'addon-after': VNode[];
  };
}

declare class MultifileElement implements ReturnType<typeof defineComponent> {
  $props: MultifileElementProps;

  // Props
  name: MultifileElementProps['name'];
  conditions: MultifileElementProps['conditions'];
  onBeforeCreate: MultifileElementProps['onBeforeCreate'];
  onCreated: MultifileElementProps['onCreated'];
  onBeforeMount: MultifileElementProps['onBeforeMount'];
  onMounted: MultifileElementProps['onMounted'];
  onBeforeUpdate: MultifileElementProps['onBeforeUpdate'];
  onUpdated: MultifileElementProps['onUpdated'];
  onBeforeUnmount: MultifileElementProps['onBeforeUnmount'];
  onUnmounted: MultifileElementProps['onUnmounted'];
  inline: MultifileElementProps['inline'];
  layout: MultifileElementProps['layout'];
  addClass: MultifileElementProps['addClass'];
  removeClass: MultifileElementProps['removeClass'];
  replaceClass: MultifileElementProps['replaceClass'];
  overrideClass: MultifileElementProps['overrideClass'];
  addClasses: MultifileElementProps['addClasses'];
  replaceClasses: MultifileElementProps['replaceClasses'];
  removeClasses: MultifileElementProps['removeClasses'];
  overrideClasses: MultifileElementProps['overrideClasses'];
  presets: MultifileElementProps['presets'];
  view: MultifileElementProps['view'];
  views: MultifileElementProps['views'];
  size: MultifileElementProps['size'];
  columns: MultifileElementProps['columns'];
  templates: MultifileElementProps['templates'];
  description: MultifileElementProps['description'];
  info: MultifileElementProps['info'];
  infoPosition: MultifileElementProps['infoPosition'];
  label: MultifileElementProps['label'];
  before: MultifileElementProps['before'];
  between: MultifileElementProps['between'];
  after: MultifileElementProps['after'];
  slots: MultifileElementProps['slots'];
  onChange: MultifileElementProps['onChange'];
  formatData: MultifileElementProps['formatData'];
  formatLoad: MultifileElementProps['formatLoad'];
  submit: MultifileElementProps['submit'];
  rules: MultifileElementProps['rules'];
  messages: MultifileElementProps['messages'];
  fieldName: MultifileElementProps['fieldName'];
  type: MultifileElementProps['type'];
  default: MultifileElementProps['default'];
  initial: MultifileElementProps['initial'];
  disabled: MultifileElementProps['disabled'];
  id: MultifileElementProps['id'];
  onAdd: MultifileElementProps['onAdd'];
  onRemove: MultifileElementProps['onRemove'];
  onSort: MultifileElementProps['onSort'];
  drop: MultifileElementProps['drop'];
  sort: MultifileElementProps['sort'];
  controls: MultifileElementProps['controls'];
  object: MultifileElementProps['object'];
  storeFile: MultifileElementProps['storeFile'];
  fields: MultifileElementProps['fields'];
  storeOrder: MultifileElementProps['storeOrder'];
  order: MultifileElementProps['order'];
  orderBy: MultifileElementProps['orderBy'];
  file: MultifileElementProps['file'];
  accept: MultifileElementProps['accept'];
  clickable: MultifileElementProps['clickable'];
  url: MultifileElementProps['url'];
  previewUrl: MultifileElementProps['previewUrl'];
  auto: MultifileElementProps['auto'];
  uploadTempEndpoint: MultifileElementProps['uploadTempEndpoint'];
  removeTempEndpoint: MultifileElementProps['removeTempEndpoint'];
  removeEndpoint: MultifileElementProps['removeEndpoint'];
  params: MultifileElementProps['params'];
  softRemove: MultifileElementProps['softRemove'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  children$: object;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  hasAdd: boolean;
  hasRemove: boolean;
  hasSort: boolean;
  requestData: object;
  data: object;
  length: number;
  defaultValue: any;
  isDisabled: boolean;
  canDrop: boolean;
  empty: boolean;
  fieldId: string;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  preparing: boolean;
  hasUploading: boolean;
  nullValue: any;
  orderByName: string;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  storeFileName: string;
  isObject: boolean;
  prototype: object;
  elementSlots: object;
  fieldSlots: object;
  isSortable: boolean;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  debouncing: boolean;
  busy: boolean;
  childrenErrors: Array<any>;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  children$Array: Array<any>;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  events: Array<any>;
  listeners: object;
  input: HTMLElement;
  list: HTMLElement;
  sortable: object;
  sorting: boolean;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  add: (value: any) => number;
  remove: (index: number) => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  handleAdd: () => void;
  handleRemove: (index: number) => void;
  disable: () => void;
  enable: () => void;
  handleDrop: (e: Event) => void;
  component: (element: string) => string;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  handleChange: (e: Event) => void;
  handleClick: () => void;
  refreshOrderStore: (value: Array<any>) => void;
  handleSort: (e: Event) => void;
  initSortable: () => void;
  destroySortable: () => void;
  validate: () => Promise;
  validateValidators: () => Promise;
  validateChildren: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'add', value: any): void;
  $emit(eventName: 'remove', value: any): void;
  $emit(eventName: 'sort', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

declare class MultiselectElement implements ReturnType<typeof defineComponent> {
  $props: MultiselectElementProps;

  // Props
  name: MultiselectElementProps['name'];
  conditions: MultiselectElementProps['conditions'];
  onBeforeCreate: MultiselectElementProps['onBeforeCreate'];
  onCreated: MultiselectElementProps['onCreated'];
  onBeforeMount: MultiselectElementProps['onBeforeMount'];
  onMounted: MultiselectElementProps['onMounted'];
  onBeforeUpdate: MultiselectElementProps['onBeforeUpdate'];
  onUpdated: MultiselectElementProps['onUpdated'];
  onBeforeUnmount: MultiselectElementProps['onBeforeUnmount'];
  onUnmounted: MultiselectElementProps['onUnmounted'];
  inline: MultiselectElementProps['inline'];
  layout: MultiselectElementProps['layout'];
  addClass: MultiselectElementProps['addClass'];
  removeClass: MultiselectElementProps['removeClass'];
  replaceClass: MultiselectElementProps['replaceClass'];
  overrideClass: MultiselectElementProps['overrideClass'];
  addClasses: MultiselectElementProps['addClasses'];
  replaceClasses: MultiselectElementProps['replaceClasses'];
  removeClasses: MultiselectElementProps['removeClasses'];
  overrideClasses: MultiselectElementProps['overrideClasses'];
  presets: MultiselectElementProps['presets'];
  view: MultiselectElementProps['view'];
  views: MultiselectElementProps['views'];
  size: MultiselectElementProps['size'];
  columns: MultiselectElementProps['columns'];
  templates: MultiselectElementProps['templates'];
  description: MultiselectElementProps['description'];
  info: MultiselectElementProps['info'];
  infoPosition: MultiselectElementProps['infoPosition'];
  label: MultiselectElementProps['label'];
  before: MultiselectElementProps['before'];
  between: MultiselectElementProps['between'];
  after: MultiselectElementProps['after'];
  slots: MultiselectElementProps['slots'];
  onChange: MultiselectElementProps['onChange'];
  formatData: MultiselectElementProps['formatData'];
  formatLoad: MultiselectElementProps['formatLoad'];
  submit: MultiselectElementProps['submit'];
  rules: MultiselectElementProps['rules'];
  messages: MultiselectElementProps['messages'];
  fieldName: MultiselectElementProps['fieldName'];
  type: MultiselectElementProps['type'];
  default: MultiselectElementProps['default'];
  disabled: MultiselectElementProps['disabled'];
  floating: MultiselectElementProps['floating'];
  id: MultiselectElementProps['id'];
  placeholder: MultiselectElementProps['placeholder'];
  attrs: MultiselectElementProps['attrs'];
  onSelect: MultiselectElementProps['onSelect'];
  onDeselect: MultiselectElementProps['onDeselect'];
  onSearchChange: MultiselectElementProps['onSearchChange'];
  onOpen: MultiselectElementProps['onOpen'];
  onClose: MultiselectElementProps['onClose'];
  onClear: MultiselectElementProps['onClear'];
  onPaste: MultiselectElementProps['onPaste'];
  native: MultiselectElementProps['native'];
  items: MultiselectElementProps['items'];
  labelProp: MultiselectElementProps['labelProp'];
  valueProp: MultiselectElementProps['valueProp'];
  dataKey: MultiselectElementProps['dataKey'];
  searchParam: MultiselectElementProps['searchParam'];
  search: MultiselectElementProps['search'];
  trackBy: MultiselectElementProps['trackBy'];
  strict: MultiselectElementProps['strict'];
  multipleLabel: MultiselectElementProps['multipleLabel'];
  multipleLabelSingle: MultiselectElementProps['multipleLabelSingle'];
  multipleLabelMultiple: MultiselectElementProps['multipleLabelMultiple'];
  create: MultiselectElementProps['create'];
  appendNewOption: MultiselectElementProps['appendNewOption'];
  addOptionOn: MultiselectElementProps['addOptionOn'];
  object: MultiselectElementProps['object'];
  limit: MultiselectElementProps['limit'];
  max: MultiselectElementProps['max'];
  groups: MultiselectElementProps['groups'];
  groupLabel: MultiselectElementProps['groupLabel'];
  groupOptions: MultiselectElementProps['groupOptions'];
  groupHideEmpty: MultiselectElementProps['groupHideEmpty'];
  groupSelect: MultiselectElementProps['groupSelect'];
  openDirection: MultiselectElementProps['openDirection'];
  appendToBody: MultiselectElementProps['appendToBody'];
  appendTo: MultiselectElementProps['appendTo'];
  canClear: MultiselectElementProps['canClear'];
  clearOnSelect: MultiselectElementProps['clearOnSelect'];
  closeOnSelect: MultiselectElementProps['closeOnSelect'];
  closeOnDeselect: MultiselectElementProps['closeOnDeselect'];
  clearOnRefetch: MultiselectElementProps['clearOnRefetch'];
  delay: MultiselectElementProps['delay'];
  minChars: MultiselectElementProps['minChars'];
  resolveOnLoad: MultiselectElementProps['resolveOnLoad'];
  filterResults: MultiselectElementProps['filterResults'];
  clearOnSearch: MultiselectElementProps['clearOnSearch'];
  hideSelected: MultiselectElementProps['hideSelected'];
  caret: MultiselectElementProps['caret'];
  loading: MultiselectElementProps['loading'];
  noOptionsText: MultiselectElementProps['noOptionsText'];
  noResultsText: MultiselectElementProps['noResultsText'];
  autocomplete: MultiselectElementProps['autocomplete'];
  inputType: MultiselectElementProps['inputType'];
  extendOptions: MultiselectElementProps['extendOptions'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  resolvedOptions: Array<any>;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  empty: boolean;
  fieldId: string;
  hasFloating: boolean;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  isLoading: boolean;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  Placeholder: string;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isDanger: boolean;
  isSuccess: boolean;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  watchers: Array<any>;
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  events: Array<any>;
  listeners: object;
  focused: boolean;
  input: HTMLElement;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  resolveOptions: () => Promise;
  updateItems: (disable: boolean) => Promise;
  cleanupValue: (values: Array<any>) => void;
  resolveUrlAndSetWatchers: (url: string, updateItems: Function) => Promise;
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disable: () => void;
  enable: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  handleSelect: (option: object) => void;
  handleDeselect: (option: object) => void;
  handleSearchChange: (searchQuery: string) => void;
  handleOpen: () => void;
  handleClose: () => void;
  handleClear: () => void;
  handlePaste: (e: Event) => void;
  select: (options: string | Array<any>) => void;
  deselect: (options: string | Array<any>) => void;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'select', value: any): void;
  $emit(eventName: 'deselect', value: any): void;
  $emit(eventName: 'search-change', value: any): void;
  $emit(eventName: 'open', value: any): void;
  $emit(eventName: 'close', value: any): void;
  $emit(eventName: 'clear', value: any): void;
  $emit(eventName: 'paste', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'option': VNode[];
    'multiple-label': VNode[];
    'placeholder': VNode[];
    'group-label': VNode[];
    'before-list': VNode[];
    'after-list': VNode[];
    'no-results': VNode[];
    'no-options': VNode[];
    'caret': VNode[];
    'spinner': VNode[];
    'clear': VNode[];
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

declare class ObjectElement implements ReturnType<typeof defineComponent> {
  $props: ObjectElementProps;

  // Props
  name: ObjectElementProps['name'];
  conditions: ObjectElementProps['conditions'];
  onBeforeCreate: ObjectElementProps['onBeforeCreate'];
  onCreated: ObjectElementProps['onCreated'];
  onBeforeMount: ObjectElementProps['onBeforeMount'];
  onMounted: ObjectElementProps['onMounted'];
  onBeforeUpdate: ObjectElementProps['onBeforeUpdate'];
  onUpdated: ObjectElementProps['onUpdated'];
  onBeforeUnmount: ObjectElementProps['onBeforeUnmount'];
  onUnmounted: ObjectElementProps['onUnmounted'];
  inline: ObjectElementProps['inline'];
  layout: ObjectElementProps['layout'];
  addClass: ObjectElementProps['addClass'];
  removeClass: ObjectElementProps['removeClass'];
  replaceClass: ObjectElementProps['replaceClass'];
  overrideClass: ObjectElementProps['overrideClass'];
  addClasses: ObjectElementProps['addClasses'];
  replaceClasses: ObjectElementProps['replaceClasses'];
  removeClasses: ObjectElementProps['removeClasses'];
  overrideClasses: ObjectElementProps['overrideClasses'];
  presets: ObjectElementProps['presets'];
  view: ObjectElementProps['view'];
  views: ObjectElementProps['views'];
  size: ObjectElementProps['size'];
  columns: ObjectElementProps['columns'];
  templates: ObjectElementProps['templates'];
  description: ObjectElementProps['description'];
  info: ObjectElementProps['info'];
  infoPosition: ObjectElementProps['infoPosition'];
  label: ObjectElementProps['label'];
  before: ObjectElementProps['before'];
  between: ObjectElementProps['between'];
  after: ObjectElementProps['after'];
  slots: ObjectElementProps['slots'];
  onChange: ObjectElementProps['onChange'];
  formatData: ObjectElementProps['formatData'];
  formatLoad: ObjectElementProps['formatLoad'];
  submit: ObjectElementProps['submit'];
  rules: ObjectElementProps['rules'];
  messages: ObjectElementProps['messages'];
  fieldName: ObjectElementProps['fieldName'];
  type: ObjectElementProps['type'];
  default: ObjectElementProps['default'];
  id: ObjectElementProps['id'];
  schema: ObjectElementProps['schema'];
  embed: ObjectElementProps['embed'];
  onRemove: ObjectElementProps['onRemove'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  children: object;
  children$: object;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  fieldId: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  debouncing: boolean;
  busy: boolean;
  childrenErrors: Array<any>;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  value: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  children$Array: Array<any>;
  conditionList: Array<any>;
  events: Array<any>;
  listeners: object;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  internalValue: any;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  component: (element: string) => string;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  validate: () => Promise;
  validateValidators: () => Promise;
  validateChildren: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'remove', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

declare class RadioElement implements ReturnType<typeof defineComponent> {
  $props: RadioElementProps;

  // Props
  name: RadioElementProps['name'];
  conditions: RadioElementProps['conditions'];
  onBeforeCreate: RadioElementProps['onBeforeCreate'];
  onCreated: RadioElementProps['onCreated'];
  onBeforeMount: RadioElementProps['onBeforeMount'];
  onMounted: RadioElementProps['onMounted'];
  onBeforeUpdate: RadioElementProps['onBeforeUpdate'];
  onUpdated: RadioElementProps['onUpdated'];
  onBeforeUnmount: RadioElementProps['onBeforeUnmount'];
  onUnmounted: RadioElementProps['onUnmounted'];
  inline: RadioElementProps['inline'];
  layout: RadioElementProps['layout'];
  addClass: RadioElementProps['addClass'];
  removeClass: RadioElementProps['removeClass'];
  replaceClass: RadioElementProps['replaceClass'];
  overrideClass: RadioElementProps['overrideClass'];
  addClasses: RadioElementProps['addClasses'];
  replaceClasses: RadioElementProps['replaceClasses'];
  removeClasses: RadioElementProps['removeClasses'];
  overrideClasses: RadioElementProps['overrideClasses'];
  presets: RadioElementProps['presets'];
  view: RadioElementProps['view'];
  views: RadioElementProps['views'];
  size: RadioElementProps['size'];
  columns: RadioElementProps['columns'];
  templates: RadioElementProps['templates'];
  description: RadioElementProps['description'];
  info: RadioElementProps['info'];
  infoPosition: RadioElementProps['infoPosition'];
  label: RadioElementProps['label'];
  before: RadioElementProps['before'];
  between: RadioElementProps['between'];
  after: RadioElementProps['after'];
  slots: RadioElementProps['slots'];
  onChange: RadioElementProps['onChange'];
  formatData: RadioElementProps['formatData'];
  formatLoad: RadioElementProps['formatLoad'];
  submit: RadioElementProps['submit'];
  rules: RadioElementProps['rules'];
  messages: RadioElementProps['messages'];
  fieldName: RadioElementProps['fieldName'];
  type: RadioElementProps['type'];
  default: RadioElementProps['default'];
  disabled: RadioElementProps['disabled'];
  id: RadioElementProps['id'];
  radioName: RadioElementProps['radioName'];
  radioValue: RadioElementProps['radioValue'];
  text: RadioElementProps['text'];
  align: RadioElementProps['align'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  fieldId: string;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  inputName: string;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  Text: string;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isDanger: boolean;
  isSuccess: boolean;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  events: Array<any>;
  listeners: object;
  input: HTMLElement;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disable: () => void;
  enable: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  check: () => void;
  uncheck: () => void;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'default': VNode[];
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

declare class RadiogroupElement implements ReturnType<typeof defineComponent> {
  $props: RadiogroupElementProps;

  // Props
  name: RadiogroupElementProps['name'];
  conditions: RadiogroupElementProps['conditions'];
  onBeforeCreate: RadiogroupElementProps['onBeforeCreate'];
  onCreated: RadiogroupElementProps['onCreated'];
  onBeforeMount: RadiogroupElementProps['onBeforeMount'];
  onMounted: RadiogroupElementProps['onMounted'];
  onBeforeUpdate: RadiogroupElementProps['onBeforeUpdate'];
  onUpdated: RadiogroupElementProps['onUpdated'];
  onBeforeUnmount: RadiogroupElementProps['onBeforeUnmount'];
  onUnmounted: RadiogroupElementProps['onUnmounted'];
  inline: RadiogroupElementProps['inline'];
  layout: RadiogroupElementProps['layout'];
  addClass: RadiogroupElementProps['addClass'];
  removeClass: RadiogroupElementProps['removeClass'];
  replaceClass: RadiogroupElementProps['replaceClass'];
  overrideClass: RadiogroupElementProps['overrideClass'];
  addClasses: RadiogroupElementProps['addClasses'];
  replaceClasses: RadiogroupElementProps['replaceClasses'];
  removeClasses: RadiogroupElementProps['removeClasses'];
  overrideClasses: RadiogroupElementProps['overrideClasses'];
  presets: RadiogroupElementProps['presets'];
  view: RadiogroupElementProps['view'];
  views: RadiogroupElementProps['views'];
  size: RadiogroupElementProps['size'];
  columns: RadiogroupElementProps['columns'];
  templates: RadiogroupElementProps['templates'];
  description: RadiogroupElementProps['description'];
  info: RadiogroupElementProps['info'];
  infoPosition: RadiogroupElementProps['infoPosition'];
  label: RadiogroupElementProps['label'];
  before: RadiogroupElementProps['before'];
  between: RadiogroupElementProps['between'];
  after: RadiogroupElementProps['after'];
  slots: RadiogroupElementProps['slots'];
  onChange: RadiogroupElementProps['onChange'];
  formatData: RadiogroupElementProps['formatData'];
  formatLoad: RadiogroupElementProps['formatLoad'];
  submit: RadiogroupElementProps['submit'];
  rules: RadiogroupElementProps['rules'];
  messages: RadiogroupElementProps['messages'];
  fieldName: RadiogroupElementProps['fieldName'];
  type: RadiogroupElementProps['type'];
  default: RadiogroupElementProps['default'];
  disabled: RadiogroupElementProps['disabled'];
  id: RadiogroupElementProps['id'];
  items: RadiogroupElementProps['items'];
  disables: RadiogroupElementProps['disables'];
  clearOnRefetch: RadiogroupElementProps['clearOnRefetch'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  resolvedOptions: Array<any>;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  fieldId: string;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isDanger: boolean;
  isSuccess: boolean;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  watchers: Array<any>;
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  disabledItems: Array<any>;
  events: Array<any>;
  listeners: object;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  resolveOptions: () => Promise;
  updateItems: (disable: boolean) => Promise;
  cleanupValue: (values: Array<any>) => void;
  resolveUrlAndSetWatchers: (url: string, updateItems: Function) => Promise;
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disableAll: () => void;
  enableAll: () => void;
  disable: (values: Array<any> | string | number) => void;
  enable: (values: Array<any> | string | number) => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'radio': VNode[];
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

declare class SelectElement implements ReturnType<typeof defineComponent> {
  $props: SelectElementProps;

  // Props
  name: SelectElementProps['name'];
  conditions: SelectElementProps['conditions'];
  onBeforeCreate: SelectElementProps['onBeforeCreate'];
  onCreated: SelectElementProps['onCreated'];
  onBeforeMount: SelectElementProps['onBeforeMount'];
  onMounted: SelectElementProps['onMounted'];
  onBeforeUpdate: SelectElementProps['onBeforeUpdate'];
  onUpdated: SelectElementProps['onUpdated'];
  onBeforeUnmount: SelectElementProps['onBeforeUnmount'];
  onUnmounted: SelectElementProps['onUnmounted'];
  inline: SelectElementProps['inline'];
  layout: SelectElementProps['layout'];
  addClass: SelectElementProps['addClass'];
  removeClass: SelectElementProps['removeClass'];
  replaceClass: SelectElementProps['replaceClass'];
  overrideClass: SelectElementProps['overrideClass'];
  addClasses: SelectElementProps['addClasses'];
  replaceClasses: SelectElementProps['replaceClasses'];
  removeClasses: SelectElementProps['removeClasses'];
  overrideClasses: SelectElementProps['overrideClasses'];
  presets: SelectElementProps['presets'];
  view: SelectElementProps['view'];
  views: SelectElementProps['views'];
  size: SelectElementProps['size'];
  columns: SelectElementProps['columns'];
  templates: SelectElementProps['templates'];
  description: SelectElementProps['description'];
  info: SelectElementProps['info'];
  infoPosition: SelectElementProps['infoPosition'];
  label: SelectElementProps['label'];
  before: SelectElementProps['before'];
  between: SelectElementProps['between'];
  after: SelectElementProps['after'];
  slots: SelectElementProps['slots'];
  onChange: SelectElementProps['onChange'];
  formatData: SelectElementProps['formatData'];
  formatLoad: SelectElementProps['formatLoad'];
  submit: SelectElementProps['submit'];
  rules: SelectElementProps['rules'];
  messages: SelectElementProps['messages'];
  fieldName: SelectElementProps['fieldName'];
  type: SelectElementProps['type'];
  default: SelectElementProps['default'];
  disabled: SelectElementProps['disabled'];
  floating: SelectElementProps['floating'];
  id: SelectElementProps['id'];
  placeholder: SelectElementProps['placeholder'];
  attrs: SelectElementProps['attrs'];
  onSelect: SelectElementProps['onSelect'];
  onDeselect: SelectElementProps['onDeselect'];
  onSearchChange: SelectElementProps['onSearchChange'];
  onOpen: SelectElementProps['onOpen'];
  onClose: SelectElementProps['onClose'];
  onClear: SelectElementProps['onClear'];
  onPaste: SelectElementProps['onPaste'];
  native: SelectElementProps['native'];
  items: SelectElementProps['items'];
  labelProp: SelectElementProps['labelProp'];
  valueProp: SelectElementProps['valueProp'];
  dataKey: SelectElementProps['dataKey'];
  searchParam: SelectElementProps['searchParam'];
  search: SelectElementProps['search'];
  trackBy: SelectElementProps['trackBy'];
  strict: SelectElementProps['strict'];
  create: SelectElementProps['create'];
  appendNewOption: SelectElementProps['appendNewOption'];
  addOptionOn: SelectElementProps['addOptionOn'];
  object: SelectElementProps['object'];
  limit: SelectElementProps['limit'];
  groups: SelectElementProps['groups'];
  groupLabel: SelectElementProps['groupLabel'];
  groupOptions: SelectElementProps['groupOptions'];
  groupHideEmpty: SelectElementProps['groupHideEmpty'];
  openDirection: SelectElementProps['openDirection'];
  appendToBody: SelectElementProps['appendToBody'];
  appendTo: SelectElementProps['appendTo'];
  canDeselect: SelectElementProps['canDeselect'];
  canClear: SelectElementProps['canClear'];
  closeOnSelect: SelectElementProps['closeOnSelect'];
  closeOnDeselect: SelectElementProps['closeOnDeselect'];
  clearOnRefetch: SelectElementProps['clearOnRefetch'];
  delay: SelectElementProps['delay'];
  minChars: SelectElementProps['minChars'];
  resolveOnLoad: SelectElementProps['resolveOnLoad'];
  filterResults: SelectElementProps['filterResults'];
  clearOnSearch: SelectElementProps['clearOnSearch'];
  caret: SelectElementProps['caret'];
  truncate: SelectElementProps['truncate'];
  loading: SelectElementProps['loading'];
  noOptionsText: SelectElementProps['noOptionsText'];
  noResultsText: SelectElementProps['noResultsText'];
  autocomplete: SelectElementProps['autocomplete'];
  inputType: SelectElementProps['inputType'];
  extendOptions: SelectElementProps['extendOptions'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  resolvedOptions: Array<any>;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  empty: boolean;
  fieldId: string;
  hasFloating: boolean;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  isLoading: boolean;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  Placeholder: string;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isDanger: boolean;
  isSuccess: boolean;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  watchers: Array<any>;
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  events: Array<any>;
  listeners: object;
  focused: boolean;
  input: HTMLElement;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  resolveOptions: () => Promise;
  updateItems: (disable: boolean) => Promise;
  cleanupValue: (values: Array<any>) => void;
  resolveUrlAndSetWatchers: (url: string, updateItems: Function) => Promise;
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disable: () => void;
  enable: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  handleSelect: (option: object) => void;
  handleDeselect: (option: object) => void;
  handleSearchChange: (searchQuery: string) => void;
  handleOpen: () => void;
  handleClose: () => void;
  handleClear: () => void;
  handlePaste: (e: Event) => void;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'select', value: any): void;
  $emit(eventName: 'deselect', value: any): void;
  $emit(eventName: 'search-change', value: any): void;
  $emit(eventName: 'open', value: any): void;
  $emit(eventName: 'close', value: any): void;
  $emit(eventName: 'clear', value: any): void;
  $emit(eventName: 'paste', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'option': VNode[];
    'single-label': VNode[];
    'placeholder': VNode[];
    'group-label': VNode[];
    'before-list': VNode[];
    'after-list': VNode[];
    'no-results': VNode[];
    'no-options': VNode[];
    'caret': VNode[];
    'spinner': VNode[];
    'clear': VNode[];
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

declare class SliderElement implements ReturnType<typeof defineComponent> {
  $props: SliderElementProps;

  // Props
  name: SliderElementProps['name'];
  conditions: SliderElementProps['conditions'];
  onBeforeCreate: SliderElementProps['onBeforeCreate'];
  onCreated: SliderElementProps['onCreated'];
  onBeforeMount: SliderElementProps['onBeforeMount'];
  onMounted: SliderElementProps['onMounted'];
  onBeforeUpdate: SliderElementProps['onBeforeUpdate'];
  onUpdated: SliderElementProps['onUpdated'];
  onBeforeUnmount: SliderElementProps['onBeforeUnmount'];
  onUnmounted: SliderElementProps['onUnmounted'];
  inline: SliderElementProps['inline'];
  layout: SliderElementProps['layout'];
  addClass: SliderElementProps['addClass'];
  removeClass: SliderElementProps['removeClass'];
  replaceClass: SliderElementProps['replaceClass'];
  overrideClass: SliderElementProps['overrideClass'];
  addClasses: SliderElementProps['addClasses'];
  replaceClasses: SliderElementProps['replaceClasses'];
  removeClasses: SliderElementProps['removeClasses'];
  overrideClasses: SliderElementProps['overrideClasses'];
  presets: SliderElementProps['presets'];
  view: SliderElementProps['view'];
  views: SliderElementProps['views'];
  size: SliderElementProps['size'];
  columns: SliderElementProps['columns'];
  templates: SliderElementProps['templates'];
  description: SliderElementProps['description'];
  info: SliderElementProps['info'];
  infoPosition: SliderElementProps['infoPosition'];
  label: SliderElementProps['label'];
  before: SliderElementProps['before'];
  between: SliderElementProps['between'];
  after: SliderElementProps['after'];
  slots: SliderElementProps['slots'];
  onChange: SliderElementProps['onChange'];
  formatData: SliderElementProps['formatData'];
  formatLoad: SliderElementProps['formatLoad'];
  submit: SliderElementProps['submit'];
  rules: SliderElementProps['rules'];
  messages: SliderElementProps['messages'];
  fieldName: SliderElementProps['fieldName'];
  type: SliderElementProps['type'];
  default: SliderElementProps['default'];
  disabled: SliderElementProps['disabled'];
  id: SliderElementProps['id'];
  min: SliderElementProps['min'];
  max: SliderElementProps['max'];
  step: SliderElementProps['step'];
  tooltips: SliderElementProps['tooltips'];
  showTooltip: SliderElementProps['showTooltip'];
  tooltipPosition: SliderElementProps['tooltipPosition'];
  merge: SliderElementProps['merge'];
  format: SliderElementProps['format'];
  orientation: SliderElementProps['orientation'];
  direction: SliderElementProps['direction'];
  lazy: SliderElementProps['lazy'];
  extendOptions: SliderElementProps['extendOptions'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  fieldId: string;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  events: Array<any>;
  listeners: object;
  input: HTMLElement;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disable: () => void;
  enable: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  handleChange: (val: string) => void;
  handleUpdate: (val: string) => void;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

declare class StaticElement implements ReturnType<typeof defineComponent> {
  $props: StaticElementProps;

  // Props
  name: StaticElementProps['name'];
  conditions: StaticElementProps['conditions'];
  onBeforeCreate: StaticElementProps['onBeforeCreate'];
  onCreated: StaticElementProps['onCreated'];
  onBeforeMount: StaticElementProps['onBeforeMount'];
  onMounted: StaticElementProps['onMounted'];
  onBeforeUpdate: StaticElementProps['onBeforeUpdate'];
  onUpdated: StaticElementProps['onUpdated'];
  onBeforeUnmount: StaticElementProps['onBeforeUnmount'];
  onUnmounted: StaticElementProps['onUnmounted'];
  inline: StaticElementProps['inline'];
  layout: StaticElementProps['layout'];
  addClass: StaticElementProps['addClass'];
  removeClass: StaticElementProps['removeClass'];
  replaceClass: StaticElementProps['replaceClass'];
  overrideClass: StaticElementProps['overrideClass'];
  addClasses: StaticElementProps['addClasses'];
  replaceClasses: StaticElementProps['replaceClasses'];
  removeClasses: StaticElementProps['removeClasses'];
  overrideClasses: StaticElementProps['overrideClasses'];
  presets: StaticElementProps['presets'];
  view: StaticElementProps['view'];
  views: StaticElementProps['views'];
  size: StaticElementProps['size'];
  columns: StaticElementProps['columns'];
  templates: StaticElementProps['templates'];
  description: StaticElementProps['description'];
  info: StaticElementProps['info'];
  infoPosition: StaticElementProps['infoPosition'];
  label: StaticElementProps['label'];
  before: StaticElementProps['before'];
  between: StaticElementProps['between'];
  after: StaticElementProps['after'];
  slots: StaticElementProps['slots'];
  type: StaticElementProps['type'];
  id: StaticElementProps['id'];
  content: StaticElementProps['content'];
  wrap: StaticElementProps['wrap'];
  tag: StaticElementProps['tag'];
  allowHtml: StaticElementProps['allowHtml'];
  href: StaticElementProps['href'];
  target: StaticElementProps['target'];
  src: StaticElementProps['src'];
  alt: StaticElementProps['alt'];
  title: StaticElementProps['title'];
  width: StaticElementProps['width'];
  height: StaticElementProps['height'];
  attrs: StaticElementProps['attrs'];
  align: StaticElementProps['align'];
  top: StaticElementProps['top'];
  bottom: StaticElementProps['bottom'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  fieldId: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  path: string;
  flat: boolean;
  parent: VNode;
  elementSlots: object;
  fieldSlots: object;
  isHtml: boolean;
  componentContent: object;
  slotContent: object;
  Templates: object;
  template: object;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  events: Array<any>;
  listeners: object;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'default': VNode[];
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

declare class TEditorElement implements ReturnType<typeof defineComponent> {
  $props: TEditorElementProps;

  // Props
  name: TEditorElementProps['name'];
  conditions: TEditorElementProps['conditions'];
  onBeforeCreate: TEditorElementProps['onBeforeCreate'];
  onCreated: TEditorElementProps['onCreated'];
  onBeforeMount: TEditorElementProps['onBeforeMount'];
  onMounted: TEditorElementProps['onMounted'];
  onBeforeUpdate: TEditorElementProps['onBeforeUpdate'];
  onUpdated: TEditorElementProps['onUpdated'];
  onBeforeUnmount: TEditorElementProps['onBeforeUnmount'];
  onUnmounted: TEditorElementProps['onUnmounted'];
  inline: TEditorElementProps['inline'];
  layout: TEditorElementProps['layout'];
  addClass: TEditorElementProps['addClass'];
  removeClass: TEditorElementProps['removeClass'];
  replaceClass: TEditorElementProps['replaceClass'];
  overrideClass: TEditorElementProps['overrideClass'];
  addClasses: TEditorElementProps['addClasses'];
  replaceClasses: TEditorElementProps['replaceClasses'];
  removeClasses: TEditorElementProps['removeClasses'];
  overrideClasses: TEditorElementProps['overrideClasses'];
  presets: TEditorElementProps['presets'];
  view: TEditorElementProps['view'];
  views: TEditorElementProps['views'];
  size: TEditorElementProps['size'];
  columns: TEditorElementProps['columns'];
  templates: TEditorElementProps['templates'];
  description: TEditorElementProps['description'];
  info: TEditorElementProps['info'];
  infoPosition: TEditorElementProps['infoPosition'];
  label: TEditorElementProps['label'];
  before: TEditorElementProps['before'];
  between: TEditorElementProps['between'];
  after: TEditorElementProps['after'];
  slots: TEditorElementProps['slots'];
  onChange: TEditorElementProps['onChange'];
  formatData: TEditorElementProps['formatData'];
  formatLoad: TEditorElementProps['formatLoad'];
  submit: TEditorElementProps['submit'];
  rules: TEditorElementProps['rules'];
  messages: TEditorElementProps['messages'];
  fieldName: TEditorElementProps['fieldName'];
  type: TEditorElementProps['type'];
  default: TEditorElementProps['default'];
  debounce: TEditorElementProps['debounce'];
  disabled: TEditorElementProps['disabled'];
  id: TEditorElementProps['id'];
  placeholder: TEditorElementProps['placeholder'];
  onError: TEditorElementProps['onError'];
  onAlert: TEditorElementProps['onAlert'];
  accept: TEditorElementProps['accept'];
  acceptMimes: TEditorElementProps['acceptMimes'];
  endpoint: TEditorElementProps['endpoint'];
  method: TEditorElementProps['method'];
  hideTools: TEditorElementProps['hideTools'];
  onBlur: TEditorElementProps['onBlur'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  editorEndpoint: string;
  editorMethod: string;
  empty: boolean;
  fieldId: string;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  language: string;
  languages: Array<any>;
  elementLayout: string | Component;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  Placeholder: string;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  debouncing: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isDanger: boolean;
  isSuccess: boolean;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  focused: boolean;
  events: Array<any>;
  listeners: object;
  input: HTMLElement;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disable: () => void;
  enable: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  handleAlert: (message: string) => void;
  handleBlur: () => void;
  handleError: (error: Error) => void;
  handleInput: (e: Event) => void;
  validate: () => Promise;
  validateLanguage: (lang: string) => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initState: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'blur', value: any): void;
  $emit(eventName: 'alert', value: any): void;
  $emit(eventName: 'error', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

declare class TTextElement implements ReturnType<typeof defineComponent> {
  $props: TTextElementProps;

  // Props
  name: TTextElementProps['name'];
  conditions: TTextElementProps['conditions'];
  onBeforeCreate: TTextElementProps['onBeforeCreate'];
  onCreated: TTextElementProps['onCreated'];
  onBeforeMount: TTextElementProps['onBeforeMount'];
  onMounted: TTextElementProps['onMounted'];
  onBeforeUpdate: TTextElementProps['onBeforeUpdate'];
  onUpdated: TTextElementProps['onUpdated'];
  onBeforeUnmount: TTextElementProps['onBeforeUnmount'];
  onUnmounted: TTextElementProps['onUnmounted'];
  inline: TTextElementProps['inline'];
  layout: TTextElementProps['layout'];
  addClass: TTextElementProps['addClass'];
  removeClass: TTextElementProps['removeClass'];
  replaceClass: TTextElementProps['replaceClass'];
  overrideClass: TTextElementProps['overrideClass'];
  addClasses: TTextElementProps['addClasses'];
  replaceClasses: TTextElementProps['replaceClasses'];
  removeClasses: TTextElementProps['removeClasses'];
  overrideClasses: TTextElementProps['overrideClasses'];
  presets: TTextElementProps['presets'];
  view: TTextElementProps['view'];
  views: TTextElementProps['views'];
  size: TTextElementProps['size'];
  columns: TTextElementProps['columns'];
  templates: TTextElementProps['templates'];
  description: TTextElementProps['description'];
  info: TTextElementProps['info'];
  infoPosition: TTextElementProps['infoPosition'];
  label: TTextElementProps['label'];
  before: TTextElementProps['before'];
  between: TTextElementProps['between'];
  after: TTextElementProps['after'];
  slots: TTextElementProps['slots'];
  onChange: TTextElementProps['onChange'];
  formatData: TTextElementProps['formatData'];
  formatLoad: TTextElementProps['formatLoad'];
  submit: TTextElementProps['submit'];
  rules: TTextElementProps['rules'];
  messages: TTextElementProps['messages'];
  fieldName: TTextElementProps['fieldName'];
  type: TTextElementProps['type'];
  default: TTextElementProps['default'];
  addons: TTextElementProps['addons'];
  autocomplete: TTextElementProps['autocomplete'];
  debounce: TTextElementProps['debounce'];
  disabled: TTextElementProps['disabled'];
  floating: TTextElementProps['floating'];
  id: TTextElementProps['id'];
  inputType: TTextElementProps['inputType'];
  attrs: TTextElementProps['attrs'];
  placeholder: TTextElementProps['placeholder'];
  readonly: TTextElementProps['readonly'];
  loading: TTextElementProps['loading'];
  onBlur: TTextElementProps['onBlur'];
  onKeydown: TTextElementProps['onKeydown'];
  onKeyup: TTextElementProps['onKeyup'];
  onKeypress: TTextElementProps['onKeypress'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  empty: boolean;
  fieldId: string;
  hasFloating: boolean;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  language: string;
  languages: Array<any>;
  elementLayout: string | Component;
  isLoading: boolean;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  Placeholder: string;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  debouncing: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isDanger: boolean;
  isSuccess: boolean;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  events: Array<any>;
  listeners: object;
  focused: boolean;
  input: HTMLElement;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disable: () => void;
  enable: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  handleBlur: () => void;
  handleInput: (e: Event) => void;
  handleKeydown: (e: Event) => void;
  handleKeyup: (e: Event) => void;
  handleKeypress: (e: Event) => void;
  validate: () => Promise;
  validateLanguage: (lang: string) => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initState: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'blur', value: any): void;
  $emit(eventName: 'keydown', value: any): void;
  $emit(eventName: 'keyup', value: any): void;
  $emit(eventName: 'keypress', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
    'addon-before': VNode[];
    'addon-after': VNode[];
  };
}

declare class TTextareaElement implements ReturnType<typeof defineComponent> {
  $props: TTextareaElementProps;

  // Props
  name: TTextareaElementProps['name'];
  conditions: TTextareaElementProps['conditions'];
  onBeforeCreate: TTextareaElementProps['onBeforeCreate'];
  onCreated: TTextareaElementProps['onCreated'];
  onBeforeMount: TTextareaElementProps['onBeforeMount'];
  onMounted: TTextareaElementProps['onMounted'];
  onBeforeUpdate: TTextareaElementProps['onBeforeUpdate'];
  onUpdated: TTextareaElementProps['onUpdated'];
  onBeforeUnmount: TTextareaElementProps['onBeforeUnmount'];
  onUnmounted: TTextareaElementProps['onUnmounted'];
  inline: TTextareaElementProps['inline'];
  layout: TTextareaElementProps['layout'];
  addClass: TTextareaElementProps['addClass'];
  removeClass: TTextareaElementProps['removeClass'];
  replaceClass: TTextareaElementProps['replaceClass'];
  overrideClass: TTextareaElementProps['overrideClass'];
  addClasses: TTextareaElementProps['addClasses'];
  replaceClasses: TTextareaElementProps['replaceClasses'];
  removeClasses: TTextareaElementProps['removeClasses'];
  overrideClasses: TTextareaElementProps['overrideClasses'];
  presets: TTextareaElementProps['presets'];
  view: TTextareaElementProps['view'];
  views: TTextareaElementProps['views'];
  size: TTextareaElementProps['size'];
  columns: TTextareaElementProps['columns'];
  templates: TTextareaElementProps['templates'];
  description: TTextareaElementProps['description'];
  info: TTextareaElementProps['info'];
  infoPosition: TTextareaElementProps['infoPosition'];
  label: TTextareaElementProps['label'];
  before: TTextareaElementProps['before'];
  between: TTextareaElementProps['between'];
  after: TTextareaElementProps['after'];
  slots: TTextareaElementProps['slots'];
  onChange: TTextareaElementProps['onChange'];
  formatData: TTextareaElementProps['formatData'];
  formatLoad: TTextareaElementProps['formatLoad'];
  submit: TTextareaElementProps['submit'];
  rules: TTextareaElementProps['rules'];
  messages: TTextareaElementProps['messages'];
  fieldName: TTextareaElementProps['fieldName'];
  type: TTextareaElementProps['type'];
  default: TTextareaElementProps['default'];
  addons: TTextareaElementProps['addons'];
  autogrow: TTextareaElementProps['autogrow'];
  rows: TTextareaElementProps['rows'];
  debounce: TTextareaElementProps['debounce'];
  disabled: TTextareaElementProps['disabled'];
  floating: TTextareaElementProps['floating'];
  id: TTextareaElementProps['id'];
  placeholder: TTextareaElementProps['placeholder'];
  readonly: TTextareaElementProps['readonly'];
  attrs: TTextareaElementProps['attrs'];
  onBlur: TTextareaElementProps['onBlur'];
  onKeydown: TTextareaElementProps['onKeydown'];
  onKeyup: TTextareaElementProps['onKeyup'];
  onKeypress: TTextareaElementProps['onKeypress'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  empty: boolean;
  fieldId: string;
  hasFloating: boolean;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  language: string;
  languages: Array<any>;
  elementLayout: string | Component;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  Placeholder: string;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  debouncing: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isDanger: boolean;
  isSuccess: boolean;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  events: Array<any>;
  listeners: object;
  focused: boolean;
  input: HTMLElement;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  autosize: () => void;
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disable: () => void;
  enable: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  handleBlur: () => void;
  handleInput: (e: Event) => void;
  handleKeydown: (e: Event) => void;
  handleKeyup: (e: Event) => void;
  handleKeypress: (e: Event) => void;
  validate: () => Promise;
  validateLanguage: (lang: string) => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initState: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'blur', value: any): void;
  $emit(eventName: 'keydown', value: any): void;
  $emit(eventName: 'keyup', value: any): void;
  $emit(eventName: 'keypress', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
    'addon-before': VNode[];
    'addon-after': VNode[];
  };
}

declare class TagsElement implements ReturnType<typeof defineComponent> {
  $props: TagsElementProps;

  // Props
  name: TagsElementProps['name'];
  conditions: TagsElementProps['conditions'];
  onBeforeCreate: TagsElementProps['onBeforeCreate'];
  onCreated: TagsElementProps['onCreated'];
  onBeforeMount: TagsElementProps['onBeforeMount'];
  onMounted: TagsElementProps['onMounted'];
  onBeforeUpdate: TagsElementProps['onBeforeUpdate'];
  onUpdated: TagsElementProps['onUpdated'];
  onBeforeUnmount: TagsElementProps['onBeforeUnmount'];
  onUnmounted: TagsElementProps['onUnmounted'];
  inline: TagsElementProps['inline'];
  layout: TagsElementProps['layout'];
  addClass: TagsElementProps['addClass'];
  removeClass: TagsElementProps['removeClass'];
  replaceClass: TagsElementProps['replaceClass'];
  overrideClass: TagsElementProps['overrideClass'];
  addClasses: TagsElementProps['addClasses'];
  replaceClasses: TagsElementProps['replaceClasses'];
  removeClasses: TagsElementProps['removeClasses'];
  overrideClasses: TagsElementProps['overrideClasses'];
  presets: TagsElementProps['presets'];
  view: TagsElementProps['view'];
  views: TagsElementProps['views'];
  size: TagsElementProps['size'];
  columns: TagsElementProps['columns'];
  templates: TagsElementProps['templates'];
  description: TagsElementProps['description'];
  info: TagsElementProps['info'];
  infoPosition: TagsElementProps['infoPosition'];
  label: TagsElementProps['label'];
  before: TagsElementProps['before'];
  between: TagsElementProps['between'];
  after: TagsElementProps['after'];
  slots: TagsElementProps['slots'];
  onChange: TagsElementProps['onChange'];
  formatData: TagsElementProps['formatData'];
  formatLoad: TagsElementProps['formatLoad'];
  submit: TagsElementProps['submit'];
  rules: TagsElementProps['rules'];
  messages: TagsElementProps['messages'];
  fieldName: TagsElementProps['fieldName'];
  type: TagsElementProps['type'];
  default: TagsElementProps['default'];
  disabled: TagsElementProps['disabled'];
  floating: TagsElementProps['floating'];
  id: TagsElementProps['id'];
  placeholder: TagsElementProps['placeholder'];
  attrs: TagsElementProps['attrs'];
  onSelect: TagsElementProps['onSelect'];
  onDeselect: TagsElementProps['onDeselect'];
  onSearchChange: TagsElementProps['onSearchChange'];
  onOpen: TagsElementProps['onOpen'];
  onClose: TagsElementProps['onClose'];
  onTag: TagsElementProps['onTag'];
  onClear: TagsElementProps['onClear'];
  onPaste: TagsElementProps['onPaste'];
  items: TagsElementProps['items'];
  labelProp: TagsElementProps['labelProp'];
  valueProp: TagsElementProps['valueProp'];
  dataKey: TagsElementProps['dataKey'];
  searchParam: TagsElementProps['searchParam'];
  search: TagsElementProps['search'];
  trackBy: TagsElementProps['trackBy'];
  strict: TagsElementProps['strict'];
  breakTags: TagsElementProps['breakTags'];
  create: TagsElementProps['create'];
  appendNewOption: TagsElementProps['appendNewOption'];
  addOptionOn: TagsElementProps['addOptionOn'];
  object: TagsElementProps['object'];
  limit: TagsElementProps['limit'];
  max: TagsElementProps['max'];
  groups: TagsElementProps['groups'];
  groupLabel: TagsElementProps['groupLabel'];
  groupOptions: TagsElementProps['groupOptions'];
  groupHideEmpty: TagsElementProps['groupHideEmpty'];
  groupSelect: TagsElementProps['groupSelect'];
  openDirection: TagsElementProps['openDirection'];
  appendToBody: TagsElementProps['appendToBody'];
  appendTo: TagsElementProps['appendTo'];
  canClear: TagsElementProps['canClear'];
  clearOnSelect: TagsElementProps['clearOnSelect'];
  closeOnSelect: TagsElementProps['closeOnSelect'];
  closeOnDeselect: TagsElementProps['closeOnDeselect'];
  clearOnRefetch: TagsElementProps['clearOnRefetch'];
  delay: TagsElementProps['delay'];
  minChars: TagsElementProps['minChars'];
  resolveOnLoad: TagsElementProps['resolveOnLoad'];
  filterResults: TagsElementProps['filterResults'];
  clearOnSearch: TagsElementProps['clearOnSearch'];
  hideSelected: TagsElementProps['hideSelected'];
  showOptions: TagsElementProps['showOptions'];
  caret: TagsElementProps['caret'];
  loading: TagsElementProps['loading'];
  noOptionsText: TagsElementProps['noOptionsText'];
  noResultsText: TagsElementProps['noResultsText'];
  autocomplete: TagsElementProps['autocomplete'];
  inputType: TagsElementProps['inputType'];
  extendOptions: TagsElementProps['extendOptions'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  resolvedOptions: Array<any>;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  empty: boolean;
  fieldId: string;
  hasFloating: boolean;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  isLoading: boolean;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  Placeholder: string;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isDanger: boolean;
  isSuccess: boolean;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  watchers: Array<any>;
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  events: Array<any>;
  listeners: object;
  focused: boolean;
  input: HTMLElement;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  resolveOptions: () => Promise;
  updateItems: (disable: boolean) => Promise;
  cleanupValue: (values: Array<any>) => void;
  resolveUrlAndSetWatchers: (url: string, updateItems: Function) => Promise;
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disable: () => void;
  enable: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  handleSelect: (option: object) => void;
  handleDeselect: (option: object) => void;
  handleSearchChange: (searchQuery: string) => void;
  handleOpen: () => void;
  handleClose: () => void;
  handleClear: () => void;
  handlePaste: (e: Event) => void;
  handleTag: (searchQuery: string) => void;
  select: (options: string | Array<any>) => void;
  deselect: (options: string | Array<any>) => void;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'select', value: any): void;
  $emit(eventName: 'deselect', value: any): void;
  $emit(eventName: 'search-change', value: any): void;
  $emit(eventName: 'open', value: any): void;
  $emit(eventName: 'close', value: any): void;
  $emit(eventName: 'tag', value: any): void;
  $emit(eventName: 'clear', value: any): void;
  $emit(eventName: 'paste', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'tag': VNode[];
    'option': VNode[];
    'placeholder': VNode[];
    'group-label': VNode[];
    'before-list': VNode[];
    'after-list': VNode[];
    'no-results': VNode[];
    'no-options': VNode[];
    'caret': VNode[];
    'spinner': VNode[];
    'clear': VNode[];
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

declare class TextElement implements ReturnType<typeof defineComponent> {
  $props: TextElementProps;

  // Props
  name: TextElementProps['name'];
  conditions: TextElementProps['conditions'];
  onBeforeCreate: TextElementProps['onBeforeCreate'];
  onCreated: TextElementProps['onCreated'];
  onBeforeMount: TextElementProps['onBeforeMount'];
  onMounted: TextElementProps['onMounted'];
  onBeforeUpdate: TextElementProps['onBeforeUpdate'];
  onUpdated: TextElementProps['onUpdated'];
  onBeforeUnmount: TextElementProps['onBeforeUnmount'];
  onUnmounted: TextElementProps['onUnmounted'];
  inline: TextElementProps['inline'];
  layout: TextElementProps['layout'];
  addClass: TextElementProps['addClass'];
  removeClass: TextElementProps['removeClass'];
  replaceClass: TextElementProps['replaceClass'];
  overrideClass: TextElementProps['overrideClass'];
  addClasses: TextElementProps['addClasses'];
  replaceClasses: TextElementProps['replaceClasses'];
  removeClasses: TextElementProps['removeClasses'];
  overrideClasses: TextElementProps['overrideClasses'];
  presets: TextElementProps['presets'];
  view: TextElementProps['view'];
  views: TextElementProps['views'];
  size: TextElementProps['size'];
  columns: TextElementProps['columns'];
  templates: TextElementProps['templates'];
  description: TextElementProps['description'];
  info: TextElementProps['info'];
  infoPosition: TextElementProps['infoPosition'];
  label: TextElementProps['label'];
  before: TextElementProps['before'];
  between: TextElementProps['between'];
  after: TextElementProps['after'];
  slots: TextElementProps['slots'];
  onChange: TextElementProps['onChange'];
  formatData: TextElementProps['formatData'];
  formatLoad: TextElementProps['formatLoad'];
  submit: TextElementProps['submit'];
  rules: TextElementProps['rules'];
  messages: TextElementProps['messages'];
  fieldName: TextElementProps['fieldName'];
  type: TextElementProps['type'];
  default: TextElementProps['default'];
  debounce: TextElementProps['debounce'];
  disabled: TextElementProps['disabled'];
  floating: TextElementProps['floating'];
  id: TextElementProps['id'];
  placeholder: TextElementProps['placeholder'];
  readonly: TextElementProps['readonly'];
  inputType: TextElementProps['inputType'];
  attrs: TextElementProps['attrs'];
  addons: TextElementProps['addons'];
  autocomplete: TextElementProps['autocomplete'];
  loading: TextElementProps['loading'];
  onBlur: TextElementProps['onBlur'];
  onKeydown: TextElementProps['onKeydown'];
  onKeyup: TextElementProps['onKeyup'];
  onKeypress: TextElementProps['onKeypress'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  empty: boolean;
  fieldId: string;
  hasFloating: boolean;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  isLoading: boolean;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  Placeholder: string;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  debouncing: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isDanger: boolean;
  isSuccess: boolean;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  events: Array<any>;
  listeners: object;
  focused: boolean;
  input: HTMLElement;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disable: () => void;
  enable: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  handleBlur: () => void;
  handleInput: (e: Event) => void;
  handleKeydown: (e: Event) => void;
  handleKeyup: (e: Event) => void;
  handleKeypress: (e: Event) => void;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'blur', value: any): void;
  $emit(eventName: 'keydown', value: any): void;
  $emit(eventName: 'keyup', value: any): void;
  $emit(eventName: 'keypress', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
    'addon-before': VNode[];
    'addon-after': VNode[];
  };
}

declare class TextareaElement implements ReturnType<typeof defineComponent> {
  $props: TextareaElementProps;

  // Props
  name: TextareaElementProps['name'];
  conditions: TextareaElementProps['conditions'];
  onBeforeCreate: TextareaElementProps['onBeforeCreate'];
  onCreated: TextareaElementProps['onCreated'];
  onBeforeMount: TextareaElementProps['onBeforeMount'];
  onMounted: TextareaElementProps['onMounted'];
  onBeforeUpdate: TextareaElementProps['onBeforeUpdate'];
  onUpdated: TextareaElementProps['onUpdated'];
  onBeforeUnmount: TextareaElementProps['onBeforeUnmount'];
  onUnmounted: TextareaElementProps['onUnmounted'];
  inline: TextareaElementProps['inline'];
  layout: TextareaElementProps['layout'];
  addClass: TextareaElementProps['addClass'];
  removeClass: TextareaElementProps['removeClass'];
  replaceClass: TextareaElementProps['replaceClass'];
  overrideClass: TextareaElementProps['overrideClass'];
  addClasses: TextareaElementProps['addClasses'];
  replaceClasses: TextareaElementProps['replaceClasses'];
  removeClasses: TextareaElementProps['removeClasses'];
  overrideClasses: TextareaElementProps['overrideClasses'];
  presets: TextareaElementProps['presets'];
  view: TextareaElementProps['view'];
  views: TextareaElementProps['views'];
  size: TextareaElementProps['size'];
  columns: TextareaElementProps['columns'];
  templates: TextareaElementProps['templates'];
  description: TextareaElementProps['description'];
  info: TextareaElementProps['info'];
  infoPosition: TextareaElementProps['infoPosition'];
  label: TextareaElementProps['label'];
  before: TextareaElementProps['before'];
  between: TextareaElementProps['between'];
  after: TextareaElementProps['after'];
  slots: TextareaElementProps['slots'];
  onChange: TextareaElementProps['onChange'];
  formatData: TextareaElementProps['formatData'];
  formatLoad: TextareaElementProps['formatLoad'];
  submit: TextareaElementProps['submit'];
  rules: TextareaElementProps['rules'];
  messages: TextareaElementProps['messages'];
  fieldName: TextareaElementProps['fieldName'];
  type: TextareaElementProps['type'];
  default: TextareaElementProps['default'];
  addons: TextareaElementProps['addons'];
  autogrow: TextareaElementProps['autogrow'];
  rows: TextareaElementProps['rows'];
  debounce: TextareaElementProps['debounce'];
  disabled: TextareaElementProps['disabled'];
  floating: TextareaElementProps['floating'];
  id: TextareaElementProps['id'];
  placeholder: TextareaElementProps['placeholder'];
  readonly: TextareaElementProps['readonly'];
  attrs: TextareaElementProps['attrs'];
  onBlur: TextareaElementProps['onBlur'];
  onKeydown: TextareaElementProps['onKeydown'];
  onKeyup: TextareaElementProps['onKeyup'];
  onKeypress: TextareaElementProps['onKeypress'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  empty: boolean;
  fieldId: string;
  hasFloating: boolean;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  Placeholder: string;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  debouncing: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isDanger: boolean;
  isSuccess: boolean;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  events: Array<any>;
  listeners: object;
  focused: boolean;
  input: HTMLElement;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  autosize: () => void;
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disable: () => void;
  enable: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  handleBlur: () => void;
  handleInput: (e: Event) => void;
  handleKeydown: (e: Event) => void;
  handleKeyup: (e: Event) => void;
  handleKeypress: (e: Event) => void;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'blur', value: any): void;
  $emit(eventName: 'keydown', value: any): void;
  $emit(eventName: 'keyup', value: any): void;
  $emit(eventName: 'keypress', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
    'addon-before': VNode[];
    'addon-after': VNode[];
  };
}

declare class ToggleElement implements ReturnType<typeof defineComponent> {
  $props: ToggleElementProps;

  // Props
  name: ToggleElementProps['name'];
  conditions: ToggleElementProps['conditions'];
  onBeforeCreate: ToggleElementProps['onBeforeCreate'];
  onCreated: ToggleElementProps['onCreated'];
  onBeforeMount: ToggleElementProps['onBeforeMount'];
  onMounted: ToggleElementProps['onMounted'];
  onBeforeUpdate: ToggleElementProps['onBeforeUpdate'];
  onUpdated: ToggleElementProps['onUpdated'];
  onBeforeUnmount: ToggleElementProps['onBeforeUnmount'];
  onUnmounted: ToggleElementProps['onUnmounted'];
  inline: ToggleElementProps['inline'];
  layout: ToggleElementProps['layout'];
  addClass: ToggleElementProps['addClass'];
  removeClass: ToggleElementProps['removeClass'];
  replaceClass: ToggleElementProps['replaceClass'];
  overrideClass: ToggleElementProps['overrideClass'];
  addClasses: ToggleElementProps['addClasses'];
  replaceClasses: ToggleElementProps['replaceClasses'];
  removeClasses: ToggleElementProps['removeClasses'];
  overrideClasses: ToggleElementProps['overrideClasses'];
  presets: ToggleElementProps['presets'];
  view: ToggleElementProps['view'];
  views: ToggleElementProps['views'];
  size: ToggleElementProps['size'];
  columns: ToggleElementProps['columns'];
  templates: ToggleElementProps['templates'];
  description: ToggleElementProps['description'];
  info: ToggleElementProps['info'];
  infoPosition: ToggleElementProps['infoPosition'];
  label: ToggleElementProps['label'];
  before: ToggleElementProps['before'];
  between: ToggleElementProps['between'];
  after: ToggleElementProps['after'];
  slots: ToggleElementProps['slots'];
  onChange: ToggleElementProps['onChange'];
  formatData: ToggleElementProps['formatData'];
  formatLoad: ToggleElementProps['formatLoad'];
  submit: ToggleElementProps['submit'];
  rules: ToggleElementProps['rules'];
  messages: ToggleElementProps['messages'];
  fieldName: ToggleElementProps['fieldName'];
  type: ToggleElementProps['type'];
  default: ToggleElementProps['default'];
  disabled: ToggleElementProps['disabled'];
  id: ToggleElementProps['id'];
  text: ToggleElementProps['text'];
  labels: ToggleElementProps['labels'];
  trueValue: ToggleElementProps['trueValue'];
  falseValue: ToggleElementProps['falseValue'];
  extendOptions: ToggleElementProps['extendOptions'];
  align: ToggleElementProps['align'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  el$: VueformElement;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  cols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  fieldId: string;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  Text: string;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  busy: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isDanger: boolean;
  isSuccess: boolean;
  value: any;
  model: any;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  events: Array<any>;
  listeners: object;
  input: HTMLElement;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  hidden: boolean;

  // Injects
  form$: Vueform;
  theme: object;

  // Methods
  activate: () => void;
  deactivate: () => void;
  updateColumns: (value: number | Array<any>) => void;
  updateConditions: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disable: () => void;
  enable: () => void;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  handleChange: (val: string) => void;
  check: () => void;
  uncheck: () => void;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  hide: () => void;
  show: () => void;

  //Events
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'beforeCreate', value: any): void;
  $emit(eventName: 'created', value: any): void;
  $emit(eventName: 'beforeMount', value: any): void;
  $emit(eventName: 'mounted', value: any): void;
  $emit(eventName: 'beforeUpdate', value: any): void;
  $emit(eventName: 'updated', value: any): void;
  $emit(eventName: 'beforeUnmount', value: any): void;
  $emit(eventName: 'unmounted', value: any): void;

  //Slots
  $slots: {
    'default': VNode[];
    'label': VNode[];
    'info': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

declare module 'vue' {
  interface GlobalComponents {
    DragAndDrop: typeof DragAndDrop;
    ElementAddon: typeof ElementAddon;
    ElementDescription: typeof ElementDescription;
    ElementError: typeof ElementError;
    ElementInfo: typeof ElementInfo;
    ElementLabel: typeof ElementLabel;
    ElementLabelFloating: typeof ElementLabelFloating;
    ElementLayout: typeof ElementLayout;
    ElementLayoutInline: typeof ElementLayoutInline;
    ElementLoader: typeof ElementLoader;
    ElementMessage: typeof ElementMessage;
    ElementText: typeof ElementText;
    FormElements: typeof FormElements;
    FormErrors: typeof FormErrors;
    FormLanguage: typeof FormLanguage;
    FormLanguages: typeof FormLanguages;
    FormMessages: typeof FormMessages;
    FormStep: typeof FormStep;
    FormSteps: typeof FormSteps;
    FormStepsControl: typeof FormStepsControl;
    FormStepsControls: typeof FormStepsControls;
    FormTab: typeof FormTab;
    FormTabs: typeof FormTabs;
    Vueform: typeof Vueform;
    DatepickerWrapper: typeof DatepickerWrapper;
    EditorWrapper: typeof EditorWrapper;
    CheckboxgroupCheckbox: typeof CheckboxgroupCheckbox;
    FilePreview: typeof FilePreview;
    RadiogroupRadio: typeof RadiogroupRadio;
    ButtonElement: typeof ButtonElement;
    CheckboxElement: typeof CheckboxElement;
    CheckboxgroupElement: typeof CheckboxgroupElement;
    DateElement: typeof DateElement;
    DatesElement: typeof DatesElement;
    EditorElement: typeof EditorElement;
    FileElement: typeof FileElement;
    GenericElement: typeof GenericElement;
    GroupElement: typeof GroupElement;
    HiddenElement: typeof HiddenElement;
    ListElement: typeof ListElement;
    LocationElement: typeof LocationElement;
    MultifileElement: typeof MultifileElement;
    MultiselectElement: typeof MultiselectElement;
    ObjectElement: typeof ObjectElement;
    RadioElement: typeof RadioElement;
    RadiogroupElement: typeof RadiogroupElement;
    SelectElement: typeof SelectElement;
    SliderElement: typeof SliderElement;
    StaticElement: typeof StaticElement;
    TEditorElement: typeof TEditorElement;
    TTextElement: typeof TTextElement;
    TTextareaElement: typeof TTextareaElement;
    TagsElement: typeof TagsElement;
    TextElement: typeof TextElement;
    TextareaElement: typeof TextareaElement;
    ToggleElement: typeof ToggleElement;
  }
}

declare module '@vueform/vueform/core' {
  const accepted: any;
  const active_url: any;
  const after: any;
  const after_or_equal: any;
  const alpha: any;
  const alpha_dash: any;
  const alpha_num: any;
  const array: any;
  const before: any;
  const before_or_equal: any;
  const between: any;
  const boolean: any;
  const confirmed: any;
  const date: any;
  const date_equals: any;
  const date_format: any;
  const different: any;
  const digits: any;
  const digits_between: any;
  const dimensions: any;
  const distinct: any;
  const email: any;
  const exists: any;
  const file: any;
  const filled: any;
  const gt: any;
  const gte: any;
  const image: any;
  const in_: any;
  const in_array: any;
  const integer: any;
  const ip: any;
  const ipv4: any;
  const ipv6: any;
  const json: any;
  const lt: any;
  const lte: any;
  const max: any;
  const mimes: any;
  const mimetypes: any;
  const min: any;
  const not_in: any;
  const not_regex: any;
  const nullable: any;
  const numeric: any;
  const regex: any;
  const required: any;
  const same: any;
  const size: any;
  const string: any;
  const timezone: any;
  const unique: any;
  const url: any;
  const uuid: any;

  export {
    accepted,
    active_url,
    after,
    after_or_equal,
    alpha,
    alpha_dash,
    alpha_num,
    array,
    before,
    before_or_equal,
    between,
    boolean,
    confirmed,
    date,
    date_equals,
    date_format,
    different,
    digits,
    digits_between,
    dimensions,
    distinct,
    email,
    exists,
    file,
    filled,
    gt,
    gte,
    image,
    in_,
    in_array,
    integer,
    ip,
    ipv4,
    ipv6,
    json,
    lt,
    lte,
    max,
    mimes,
    mimetypes,
    min,
    not_in,
    not_regex,
    nullable,
    numeric,
    regex,
    required,
    same,
    size,
    string,
    timezone,
    unique,
    url,
    uuid,
  }
}