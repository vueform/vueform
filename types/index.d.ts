import { App, defineComponent, DefineComponent, VNode } from 'vue';

export interface EndpointConfig {
  url?: string;
  method?: string;
}

export interface VueformConfig {
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

export interface DefineElement {
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

export interface MessageBag {
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

export interface MergeClasses {
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

export interface Columns {
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

export interface Component extends DefineComponent {}

export interface VueformComponent extends DefineComponent {}

export interface VueformElement extends DefineComponent {
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
  addClass: Array<any> | object | string | Function;
  removeClass: Array<any> | object | Function;
  replaceClass: object | Function;
  overrideClass: Array<any> | object | string | Function;
  addClasses: object | Function;
  replaceClasses: object | Function;
  removeClasses: object | Function;
  overrideClasses: object | Function;
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
  disabled: boolean | Function | Array<any> | object;
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
  fieldName: string | object;
  displayErrors: boolean;
  default: string | boolean | number | Array<any> | Date | object;
  readonly: boolean | Function | Array<any> | object;
  provider: string;
  options: object;
  text: string | object;
  trueValue: boolean | string | number;
  falseValue: boolean | string | number;
  standalone: boolean;
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
  placeholder: string | object | boolean;
  autocomplete: string | number;
  mode: string;
  debounce: number;
  onError: Function;
  onAlert: Function;
  accept: Array<any> | string;
  acceptMimes: Array<any>;
  endpoint: string | Function | promise;
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
  uploadTempEndpoint: object | string | Function | boolean | promise;
  removeTempEndpoint: object | string | Function | boolean | promise;
  removeEndpoint: object | string | Function | boolean | promise;
  params: object;
  softRemove: boolean;
  embed: boolean;
  cols: number | Array<any> | object;
  rows: number | Array<any> | object;
  grid: Array<any>;
  valign: string;
  widths: Array<any>;
  minWidth: string | number;
  maxWidth: string | number;
  scrollable: boolean;
  colHeader: boolean;
  rowHeader: boolean;
  schema: {
    [key: string]: VueformSchema;
  };
  meta: boolean;
  forceNumbers: boolean;
  expression: string | object;
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
  displayKey: string;
  inputType: string | object;
  colWrap: boolean;
  hideCols: boolean;
  stickyCols: boolean;
  rowWrap: boolean;
  hideRows: boolean;
  stickyRows: boolean;
  canAdd: boolean;
  canRemove: boolean;
  gap: string | number;
  padding: boolean;
  templateColumns: string | Function;
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
  allowAbsent: boolean;
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
  include: Array<any>;
  exclude: Array<any>;
  unmask: boolean;
  allowIncomplete: boolean;
  radioName: string;
  radioValue: boolean | string | number;
  canDeselect: boolean;
  truncate: boolean;
  modes: Array<any>;
  fonts: Array<any>;
  autoload: boolean;
  minFontSize: number;
  maxFontSize: number;
  colors: Array<any>;
  invertColors: Array<any>;
  height: number | string;
  uploadWidth: number;
  uploadHeight: number;
  maxSize: number;
  line: boolean;
  canUndo: boolean;
  canDrop: boolean;
  step: number;
  tooltips: boolean;
  showTooltip: string;
  tooltipPosition: string;
  merge: number;
  format: object | Function;
  orientation: string;
  direction: string;
  lazy: boolean;
  content: string | object | Function;
  wrap: boolean;
  tag: string;
  allowHtml: boolean;
  src: string;
  alt: string;
  title: string;
  width: string;
  top: string | number;
  bottom: string | number;
  expressions: boolean;
  onKeydown: Function;
  onKeyup: Function;
  onKeypress: Function;
  autogrow: boolean;
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isListType: boolean;
  isActive: boolean;
  isButtonLabelComponent: boolean;
  button: object;
  isLoading: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  isDisabled: boolean;
  el$: VueformElement;
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
  captchaOptions: object;
  shouldVerify: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  empty: boolean;
  hasFloating: boolean;
  genericName: string;
  nullValue: any;
  dataPath: string;
  isReadonly: boolean;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
  Text: string;
  resolvedOptions: Array<any>;
  displayDateFormat: string;
  valueDateFormat: string;
  loadDateFormat: string;
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
  cells: Array<any>;
  fitWidth: boolean;
  isTableView: boolean;
  gridStyle: object;
  resolvedRows: Array<any>;
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
  hasDynamicRows: boolean;
  computedRows: number | Array<any>;
  resolvedColumns: Array<any>;
  dataType: Array<any>;
  rowsVisible: boolean;
  colsVisible: boolean;
  allowAdd: boolean;
  allowRemove: boolean;
  inputTypes: Array<any>;
  preparing: boolean;
  hasUploading: boolean;
  storeFileName: string;
  addonOptions: Array<any>;
  maskPluginInstalled: boolean;
  inputType: string;
  mask: object | undefined;
  inputName: string;
  fontFamilies: Array<any>;
  fontWeights: Array<any>;
  processing: boolean;
  droppable: boolean;
  resolvedModes: Array<any>;
  resolvedFonts: Array<any>;
  fileAccept: string;
  showLine: boolean;
  showInput: boolean;
  showPlaceholder: boolean;
  showUploadContainer: boolean;
  showUpload: boolean;
  showPreview: boolean;
  showPad: boolean;
  showUndos: boolean;
  showColors: boolean;
  showModes: boolean;
  showFonts: boolean;
  showClear: boolean;
  tabindex: number | undefined;
  placeholderText: string;
  dndText: string;
  uploadButtonText: string;
  imgAltText: string;
  imgTitleText: string;
  fontText: string;
  undoText: string;
  redoText: string;
  modeSelectorAria: object;
  fontSelectorAria: object;
  wrapperAriaLabel: string;
  inputAriaLabel: string;
  padAriaLabel: string;
  colorAriaLabel: string;
  clearAriaLabel: string;
  padWidth: number;
  padHeight: number;
  padStyle: object;
  wrapperStyle: object;
  inputStyle: object;
  lineStyle: object;
  isHtml: boolean;
  componentContent: object;
  slotContent: object;
  resolvedContent: any;
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
  Provider: object | null;
  localDisabled: boolean | null;
  input: HTMLElement;
  state: object;
  Validators: Array<any>;
  messageBag: MessageBag;
  resetting: boolean;
  initialValue: any;
  internalValue: any;
  watchers: Array<any>;
  disabledItems: Array<any>;
  focused: boolean;
  hasUploadError: boolean;
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
  rowsCount: number;
  cells$: object;
  grid: HTMLElement;
  options$: component;
  addonPlaceholder: component;
  mode$: ElementAddonOptions;
  font$: ElementAddonOptions;
  input$: HTMLInputElement;
  preview$: HTMLCanvasElement;
  pad$: HTMLCanvasElement;
  file$: HTMLInputElement;
  upload$: HTMLElement;
  uploadButton$: HTMLElement;
  mode: string;
  fontFamily: string;
  fontWeight: string;
  color: string;
  text: string;
  fontSize: number;
  pad: object;
  image: File;
  created: boolean;
  creating: boolean;
  dragging: boolean;
  drawn: boolean;
  drawing: boolean;
  redos: Array<any>;
  undosLeft: number;
  width: number;
  lastWidth: number;

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
  initCaptcha: () => void;
  destroyCaptcha: () => void;
  load: (value: any, format: boolean) => void;
  update: (value: any) => void;
  clear: () => void;
  reset: () => void;
  disable: () => void;
  enable: () => void;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;
  check: () => void;
  uncheck: () => void;
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
  handleFocus: () => void;
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
  resolveComponentName: (rowIndex: number, colIndex: number) => string;
  validateValidators: () => Promise;
  validateChildren: () => Promise;
  shouldForceNumbers: () => boolean;
  stringToNumber: (str: any) => number | float | string;
  add: (value: any) => number;
  handleAdd: () => void;
  refreshOrderStore: (value: Array<any>) => void;
  handleSort: (e: Event) => void;
  initSortable: () => void;
  destroySortable: () => void;
  handleAddressChange: (data: object, raw: object) => void;
  handleLocationBlur: () => void;
  initLocationService: () => void;
  resolveComponentType: (column: object) => string;
  resolveComponentProps: (row: object, col: object, rowIndex: number, colIndex: number) => object;
  getColStyle: (index: object) => object;
  resolveColInputType: (col: object) => object | string;
  resolveColConditions: (row: object, col: object) => object;
  resolveColType: (col: object) => string;
  handleSelect: (option: object) => void;
  handleDeselect: (option: object) => void;
  handleSearchChange: (searchQuery: string) => void;
  handleOpen: () => void;
  handleClose: () => void;
  handleClear: () => void;
  handlePaste: (e: Event) => void;
  select: (options: string | Array<any>) => void;
  deselect: (options: string | Array<any>) => void;
  handleKeydown: (e: Event) => void;
  handleOptionSelect: (option: object) => void;
  initPad: () => void;
  resizePad: () => void;
  drawingToImage: () => void;
  typingToImage: () => void;
  uploadToImage: () => void;
  undo: () => void;
  redo: () => void;
  clearSignature: () => void;
  clearDrawnSignature: () => void;
  loadFonts: () => void;
  setDrawColor: () => void;
  adjustFontSize: () => void;
  hexToRgb: (hex: string) => string;
  checkFileExt: (file: File) => boolean;
  checkFileSize: (file: File) => boolean;
  setWidth: () => void;
  setLastWidth: () => void;
  setDefaultMode: () => void;
  setDefaultFont: () => void;
  setDefaultColor: () => void;
  setFont: (value: object) => void;
  handleModeSelect: (value: object) => void;
  handleColorSelect: (value: string) => void;
  handleFontSelect: (value: object) => void;
  handleUndo: () => void;
  handleRedo: () => void;
  handleSelectClick: () => void;
  handleFileSelect: () => void;
  handleMouseLeave: () => void;
  handleResize: () => void;
  handleUpdate: (val: string) => void;
  validateLanguage: (lang: string) => Promise;
  initState: () => void;
  handleKeyup: (e: Event) => void;
  handleKeypress: (e: Event) => void;
  autosize: () => void;
  handleTag: (searchQuery: string) => void;
}

export interface VueformSchema {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  disabled?: boolean | Function | Array<any> | object;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  default?: string | boolean | number | Array<any> | Date | object;
  readonly?: boolean | Function | Array<any> | object;
  provider?: string;
  options?: object;
  text?: string | object;
  trueValue?: boolean | string | number;
  falseValue?: boolean | string | number;
  standalone?: boolean;
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
  placeholder?: string | object | boolean;
  autocomplete?: string | number;
  mode?: string;
  debounce?: number;
  onError?: Function;
  onAlert?: Function;
  accept?: Array<any> | string;
  acceptMimes?: Array<any>;
  endpoint?: string | Function | promise;
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
  uploadTempEndpoint?: object | string | Function | boolean | promise;
  removeTempEndpoint?: object | string | Function | boolean | promise;
  removeEndpoint?: object | string | Function | boolean | promise;
  params?: object;
  softRemove?: boolean;
  embed?: boolean;
  cols?: number | Array<any> | object;
  rows?: number | Array<any> | object;
  grid?: Array<any>;
  valign?: string;
  widths?: Array<any>;
  minWidth?: string | number;
  maxWidth?: string | number;
  scrollable?: boolean;
  colHeader?: boolean;
  rowHeader?: boolean;
  schema?: {
    [key: string]: VueformSchema;
  };
  meta?: boolean;
  forceNumbers?: boolean;
  expression?: string | object;
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
  displayKey?: string;
  inputType?: string | object;
  colWrap?: boolean;
  hideCols?: boolean;
  stickyCols?: boolean;
  rowWrap?: boolean;
  hideRows?: boolean;
  stickyRows?: boolean;
  canAdd?: boolean;
  canRemove?: boolean;
  gap?: string | number;
  padding?: boolean;
  templateColumns?: string | Function;
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
  allowAbsent?: boolean;
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
  include?: Array<any>;
  exclude?: Array<any>;
  unmask?: boolean;
  allowIncomplete?: boolean;
  radioName?: string;
  radioValue?: boolean | string | number;
  canDeselect?: boolean;
  truncate?: boolean;
  modes?: Array<any>;
  fonts?: Array<any>;
  autoload?: boolean;
  minFontSize?: number;
  maxFontSize?: number;
  colors?: Array<any>;
  invertColors?: Array<any>;
  height?: number | string;
  uploadWidth?: number;
  uploadHeight?: number;
  maxSize?: number;
  line?: boolean;
  canUndo?: boolean;
  canDrop?: boolean;
  step?: number;
  tooltips?: boolean;
  showTooltip?: string;
  tooltipPosition?: string;
  merge?: number;
  format?: object | Function;
  orientation?: string;
  direction?: string;
  lazy?: boolean;
  content?: string | object | Function;
  wrap?: boolean;
  tag?: string;
  allowHtml?: boolean;
  src?: string;
  alt?: string;
  title?: string;
  width?: string;
  top?: string | number;
  bottom?: string | number;
  expressions?: boolean;
  onKeydown?: Function;
  onKeyup?: Function;
  onKeypress?: Function;
  autogrow?: boolean;
  onTag?: Function;
  breakTags?: boolean;
  showOptions?: boolean;
  labels?: object;
  [key: string]: any;
}

export interface DragAndDropProps {
  title: string;
  description: string;
  disabled?: boolean;
}

export interface ElementAddonProps {
  type: string;
}

export interface ElementAddonOptionsProps {
  options?: Array<any>;
  placeholder?: string | number | object;
  relaxed?: boolean;
  position?: string;
  aria?: object;
}

export interface ElementDescriptionProps {
}

export interface ElementErrorProps {
}

export interface ElementInfoProps {
}

export interface ElementLabelProps {
}

export interface ElementLabelFloatingProps {
  visible?: boolean;
}

export interface ElementLayoutProps {
  multiple?: boolean;
  view?: string;
}

export interface ElementLayoutInlineProps {
}

export interface ElementLoaderProps {
}

export interface ElementMessageProps {
}

export interface ElementRequiredProps {
}

export interface ElementTextProps {
  type: string;
}

export interface FormElementsProps {
  view?: string;
}

export interface FormErrorsProps {
  view?: string;
}

export interface FormLanguageProps {
  language: string;
  code: string;
  view?: string;
}

export interface FormLanguagesProps {
  view?: string;
}

export interface FormMessagesProps {
  view?: string;
}

export interface FormStepProps {
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

export interface FormStepsProps {
  view?: string;
}

export interface FormStepsControlProps {
  type: string;
  labels?: boolean;
  view?: string;
}

export interface FormStepsControlsProps {
  labels?: boolean;
  view?: string;
}

export interface FormTabProps {
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

export interface FormTabsProps {
  view?: string;
}

export interface VueformProps {
  schema?: {
    [key: string]: VueformSchema;
  };
  name?: string;
  tabs?: object;
  steps?: object;
  stepsControls?: boolean;
  scrollOnNext?: boolean;
  validateOn?: string;
  scrollToInvalid?: boolean;
  showRequired?: Array<any>;
  displayErrors?: boolean;
  displayMessages?: boolean;
  messages?: object;
  endpoint?: string | boolean | Function | promise;
  method?: string;
  prepare?: Function;
  formKey?: string | number;
  formData?: Function;
  value?: object;
  modelValue?: object;
  sync?: boolean;
  default?: object;
  forceNumbers?: boolean;
  formatData?: Function;
  formatLoad?: Function;
  loading?: boolean;
  disabled?: boolean | Function | object | Array<any>;
  columns?: object;
  forceLabels?: boolean;
  floatPlaceholders?: boolean;
  size?: string;
  view?: string;
  views?: object;
  addClasses?: object | Function;
  addClass?: Array<any> | object | string | Function;
  removeClasses?: object | Function;
  removeClass?: Array<any> | object | Function;
  replaceClasses?: object | Function;
  replaceClass?: object | Function;
  overrideClasses?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  templates?: object;
  presets?: Array<any>;
  multilingual?: boolean;
  languages?: object;
  language?: string;
  locale?: string;
  providers?: object;
  useProviders?: object;
  providerOptions?: object;
  onChange?: Function;
  onReset?: Function;
  onClear?: Function;
  onSubmit?: Function;
  onResponse?: Function;
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

export interface DatepickerWrapperProps {
  value: any;
  options: object;
  id: number | string;
  placeholder?: number | string;
  attrs?: object;
  autocomplete?: string | number;
}

export interface EditorWrapperProps {
  value?: any;
  placeholder?: string | number;
  name?: string | number;
  id?: string | number;
  accept?: Array<any>;
  acceptMimes?: Array<any>;
  endpoint?: string | Function | promise;
  method?: string;
  disabled?: boolean;
  hideTools?: Array<any>;
  attrs?: object;
}

export interface CheckboxgroupCheckboxProps {
  item: object | string | number;
  value: string | number | boolean;
  items: object | Array<any>;
  index: number;
  attrs?: object;
  standalone?: boolean;
}

export interface FilePreviewProps {
  attrs?: object;
}

export interface RadiogroupRadioProps {
  item: object | string | number;
  value: string | number | boolean;
  items: object | Array<any>;
  index: number;
  attrs?: object;
  standalone?: boolean;
}

export interface ButtonElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  disabled?: boolean | Function | Array<any> | object;
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

export interface CaptchaElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  id?: string;
  default?: string | boolean | number | Array<any> | Date | object;
  disabled?: boolean | Function | Array<any> | object;
  readonly?: boolean | Function | Array<any> | object;
  provider?: string;
  options?: object;
}

export interface CheckboxElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: string | boolean | number;
  id?: string;
  text?: string | object;
  disabled?: boolean | Function | Array<any> | object;
  trueValue?: boolean | string | number;
  falseValue?: boolean | string | number;
  align?: string;
  standalone?: boolean;
}

export interface CheckboxgroupElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: Array<any>;
  id?: string;
  items?: object | Array<any> | Function | string;
  disabled?: boolean | Function | Array<any> | object;
  disables?: Array<any>;
  clearOnRefetch?: boolean;
}

export interface DateElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: string | Date;
  addons?: object;
  disabled?: boolean | Function | Array<any> | object;
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
  placeholder?: string | object | boolean;
  readonly?: boolean | Function | Array<any> | object;
  autocomplete?: string | number;
}

export interface DatesElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: Array<any>;
  addons?: object;
  disabled?: boolean | Function | Array<any> | object;
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
  readonly?: boolean | Function | Array<any> | object;
  autocomplete?: string | number;
}

export interface EditorElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: string | number | object;
  debounce?: number;
  disabled?: boolean | Function | Array<any> | object;
  id?: string;
  placeholder?: string | object;
  onError?: Function;
  onAlert?: Function;
  accept?: Array<any> | string;
  acceptMimes?: Array<any>;
  endpoint?: string | Function | promise;
  method?: string;
  hideTools?: Array<any>;
  onBlur?: Function;
}

export interface FileElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: string | object;
  disabled?: boolean | Function | Array<any> | object;
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
  uploadTempEndpoint?: object | string | Function | boolean | promise;
  removeTempEndpoint?: object | string | Function | boolean | promise;
  removeEndpoint?: object | string | Function | boolean | promise;
  params?: object;
  softRemove?: boolean;
  embed?: boolean;
}

export interface GenericElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  id?: string;
  disabled?: boolean | Function | Array<any> | object;
  default?: string | number | object;
}

export interface GridElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: object;
  id?: string;
  cols?: number | Array<any> | object;
  rows?: number | Array<any> | object;
  grid?: Array<any>;
  align?: string;
  valign?: string;
  widths?: Array<any>;
  minWidth?: string | number;
  maxWidth?: string | number;
  scrollable?: boolean;
  colHeader?: boolean;
  rowHeader?: boolean;
}

export interface GroupElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: object;
  id?: string;
  schema?: {
    [key: string]: VueformSchema;
  };
}

export interface HiddenElementProps {
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: string | number | object;
  id?: string;
  meta?: boolean;
  forceNumbers?: boolean;
  expression?: string | object;
}

export interface ListElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: Array<any>;
  id?: string;
  disabled?: boolean | Function | Array<any> | object;
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

export interface LocationElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: object;
  debounce?: number;
  disabled?: boolean | Function | Array<any> | object;
  floating?: string | boolean | object;
  id?: string;
  placeholder?: string | object;
  readonly?: boolean | Function | Array<any> | object;
  attrs?: object;
  addons?: object;
  provider?: string;
  displayKey?: string;
  extendOptions?: object;
}

export interface MatrixElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: object;
  id?: string;
  disabled?: boolean | Function | Array<any> | object;
  readonly?: boolean | Function | Array<any> | object;
  inputType?: string | object;
  items?: Array<any> | object | string | Function;
  cols?: Array<any> | object;
  colWrap?: boolean;
  hideCols?: boolean;
  stickyCols?: boolean;
  rows?: Array<any> | object | number;
  rowWrap?: boolean;
  hideRows?: boolean;
  stickyRows?: boolean;
  min?: number | string;
  max?: number | string;
  canAdd?: boolean;
  canRemove?: boolean;
  addText?: string;
  minWidth?: number | string;
  maxWidth?: number | string;
  gap?: string | number;
  padding?: boolean;
  scrollable?: boolean;
  templateColumns?: string | Function;
}

export interface MultifileElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: Array<any>;
  initial?: number;
  disabled?: boolean | Function | Array<any> | object;
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
  uploadTempEndpoint?: object | string | Function | boolean | promise;
  removeTempEndpoint?: object | string | Function | boolean | promise;
  removeEndpoint?: object | string | Function | boolean | promise;
  params?: object;
  softRemove?: boolean;
}

export interface MultiselectElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: Array<any>;
  disabled?: boolean | Function | Array<any> | object;
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
  allowAbsent?: boolean;
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
  autocomplete?: string;
  inputType?: string;
  extendOptions?: object;
}

export interface ObjectElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: object;
  id?: string;
  schema?: {
    [key: string]: VueformSchema;
  };
  embed?: boolean;
  onRemove?: Function;
}

export interface PhoneElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: string | number | object;
  debounce?: number;
  disabled?: boolean | Function | Array<any> | object;
  floating?: string | boolean | object;
  id?: string;
  placeholder?: string | object;
  readonly?: boolean | Function | Array<any> | object;
  include?: Array<any>;
  exclude?: Array<any>;
  unmask: boolean;
  allowIncomplete: boolean;
  attrs?: object;
  autocomplete?: string | number;
  loading?: boolean;
  onBlur?: Function;
  onSelect?: Function;
}

export interface RadioElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: string | number;
  disabled?: boolean | Function | Array<any> | object;
  id?: string;
  radioName?: string;
  radioValue?: boolean | string | number;
  text?: string | object;
  align?: string;
  standalone?: boolean;
}

export interface RadiogroupElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: string | number | boolean;
  disabled?: boolean | Function | Array<any> | object;
  id?: string;
  items?: object | Array<any> | Function | string;
  disables?: Array<any>;
  clearOnRefetch?: boolean;
}

export interface SelectElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: string | number | object;
  disabled?: boolean | Function | Array<any> | object;
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
  allowAbsent?: boolean;
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

export interface SignatureElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  id?: string;
  default?: string | number | object;
  debounce?: number;
  disabled?: boolean | Function | Array<any> | object;
  readonly?: boolean | Function | Array<any> | object;
  modes?: Array<any>;
  fonts?: Array<any>;
  autoload?: boolean;
  minFontSize?: number;
  maxFontSize?: number;
  colors?: Array<any>;
  invertColors?: Array<any>;
  maxWidth?: number | string;
  height?: number | string;
  uploadWidth?: number;
  uploadHeight?: number;
  maxSize?: number;
  accept?: Array<any>;
  placeholder?: string | object | boolean;
  line?: boolean;
  canClear?: boolean;
  canUndo?: boolean;
  canDrop?: boolean;
}

export interface SliderElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: number | Array<any>;
  disabled?: boolean | Function | Array<any> | object;
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

export interface StaticElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  content?: string | object | Function;
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
  expressions?: boolean;
}

export interface TEditorElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: object | string | number;
  debounce?: number;
  disabled?: boolean | Function | Array<any> | object;
  id?: string;
  placeholder?: string | object;
  onError?: Function;
  onAlert?: Function;
  accept?: Array<any>;
  acceptMimes?: Array<any>;
  endpoint?: string | Function | promise;
  method?: string;
  hideTools?: Array<any>;
  onBlur?: Function;
}

export interface TTextElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: object | string | number;
  addons?: object;
  autocomplete?: string | number;
  debounce?: number;
  disabled?: boolean | Function | Array<any> | object;
  floating?: string | boolean | object;
  id?: string;
  inputType?: string;
  attrs?: object;
  placeholder?: string | object;
  readonly?: boolean | Function | Array<any> | object;
  loading?: boolean;
  onBlur?: Function;
  onKeydown?: Function;
  onKeyup?: Function;
  onKeypress?: Function;
}

export interface TTextareaElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: object | string | number;
  addons?: object;
  autogrow?: boolean;
  rows?: number;
  debounce?: number;
  disabled?: boolean | Function | Array<any> | object;
  floating?: string | boolean | object;
  id?: string;
  placeholder?: string | object;
  readonly?: boolean | Function | Array<any> | object;
  attrs?: object;
  onBlur?: Function;
  onKeydown?: Function;
  onKeyup?: Function;
  onKeypress?: Function;
}

export interface TagsElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: Array<any>;
  disabled?: boolean | Function | Array<any> | object;
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
  allowAbsent?: boolean;
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

export interface TextElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: string | number | object;
  debounce?: number;
  disabled?: boolean | Function | Array<any> | object;
  floating?: string | boolean | object;
  id?: string;
  placeholder?: string | object;
  readonly?: boolean | Function | Array<any> | object;
  inputType?: string;
  forceNumbers?: boolean;
  expression?: string | object;
  attrs?: object;
  addons?: object;
  autocomplete?: string | number;
  loading?: boolean;
  onBlur?: Function;
  onKeydown?: Function;
  onKeyup?: Function;
  onKeypress?: Function;
}

export interface TextareaElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: string | number | object;
  addons?: object;
  autogrow?: boolean;
  rows?: number;
  debounce?: number;
  disabled?: boolean | Function | Array<any> | object;
  floating?: string | boolean | object;
  id?: string;
  placeholder?: string | object;
  readonly?: boolean | Function | Array<any> | object;
  attrs?: object;
  onBlur?: Function;
  onKeydown?: Function;
  onKeyup?: Function;
  onKeypress?: Function;
}

export interface ToggleElementProps {
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
  addClass?: Array<any> | object | string | Function;
  removeClass?: Array<any> | object | Function;
  replaceClass?: object | Function;
  overrideClass?: Array<any> | object | string | Function;
  addClasses?: object | Function;
  replaceClasses?: object | Function;
  removeClasses?: object | Function;
  overrideClasses?: object | Function;
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
  fieldName?: string | object;
  displayErrors?: boolean;
  type?: string;
  default?: string | number | boolean;
  disabled?: boolean | Function | Array<any> | object;
  id?: string;
  text?: string | object;
  labels?: object;
  trueValue?: boolean | string | number;
  falseValue?: boolean | string | number;
  extendOptions?: object;
  align?: string;
  standalone?: boolean;
}

export declare class DragAndDrop implements DefineComponent {
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

export declare class ElementAddon implements DefineComponent {
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

export declare class ElementAddonOptions implements DefineComponent {
  $props: ElementAddonOptionsProps;

  // Props
  options: ElementAddonOptionsProps['options'];
  placeholder: ElementAddonOptionsProps['placeholder'];
  relaxed: ElementAddonOptionsProps['relaxed'];
  position: ElementAddonOptionsProps['position'];
  aria: ElementAddonOptionsProps['aria'];

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;
  style: object;
  focused: Array<any>;

  // Data
  events: Array<any>;
  listeners: object;
  isOpen: boolean;
  selector: HTMLElement;
  dropdown: HTMLElement;
  left: number | undefined;
  right: number | undefined;
  top: number | undefined;
  bottom: number | undefined;
  search: string;
  searchTimeout: object;
  hoverDisabled: boolean;
  selected: object;
  pointed: object;

  // Injects
  form$: Vueform;
  el$: VueformElement;
  Size: string;
  theme: object;

  // Methods
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args?: any) => void;
  close: () => void;
  scrollToOption: (option: object) => void;
  scrollToSelected: () => void;
  selectOption: (option: object, triggerSelect?: boolean) => void;
  reset: () => void;
  handleOptionPoint: (option: object) => void;
  handleOptionClick: (option: object) => void;
  handleSelectorClick: (event: Event) => void;
  handleSelectorKeydown: (event: Event) => void;
  handleClickOutside: (event: Event) => void;
  handleKeydown: (event: Event) => void;
  handleResize: () => void;

  //Events
  $emit(eventName: 'select', value: any): void;
  $emit(eventName: 'open', value: any): void;
  $emit(eventName: 'close', value: any): void;
}

export declare class ElementDescription implements DefineComponent {
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

export declare class ElementError implements DefineComponent {
  $props: ElementErrorProps;

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;
  error: string;
  showError: boolean;
  id: string;

  // Injects
  el$: VueformElement;
  form$: Vueform;
  Size: string;
  theme: object;
}

export declare class ElementInfo implements DefineComponent {
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

export declare class ElementLabel implements DefineComponent {
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

export declare class ElementLabelFloating implements DefineComponent {
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

export declare class ElementLayout implements DefineComponent {
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

export declare class ElementLayoutInline implements DefineComponent {
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

export declare class ElementLoader implements DefineComponent {
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

export declare class ElementMessage implements DefineComponent {
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

export declare class ElementRequired implements DefineComponent {
  $props: ElementRequiredProps;

  // Computed
  View: string;
  classesInstance: MergeClasses;
  classes: object;
  Templates: object;
  template: object;
  visible: boolean;
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

export declare class ElementText implements DefineComponent {
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

export declare class FormElements implements DefineComponent {
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

export declare class FormErrors implements DefineComponent {
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

export declare class FormLanguage implements DefineComponent {
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

export declare class FormLanguages implements DefineComponent {
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

export declare class FormMessages implements DefineComponent {
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

export declare class FormStep implements DefineComponent {
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

export declare class FormSteps implements DefineComponent {
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

export declare class FormStepsControl implements DefineComponent {
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

export declare class FormStepsControls implements DefineComponent {
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

export declare class FormTab implements DefineComponent {
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

export declare class FormTabs implements DefineComponent {
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

export declare class Vueform implements DefineComponent {
  $props: VueformProps;

  // Props
  schema: VueformProps['schema'];
  name: VueformProps['name'];
  tabs: VueformProps['tabs'];
  steps: VueformProps['steps'];
  stepsControls: VueformProps['stepsControls'];
  scrollOnNext: VueformProps['scrollOnNext'];
  validateOn: VueformProps['validateOn'];
  scrollToInvalid: VueformProps['scrollToInvalid'];
  showRequired: VueformProps['showRequired'];
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
  forceNumbers: VueformProps['forceNumbers'];
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
  providers: VueformProps['providers'];
  useProviders: VueformProps['useProviders'];
  providerOptions: VueformProps['providerOptions'];
  onChange: VueformProps['onChange'];
  onReset: VueformProps['onReset'];
  onClear: VueformProps['onClear'];
  onSubmit: VueformProps['onSubmit'];
  onResponse: VueformProps['onResponse'];
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
  cancelToken: boolean;
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
  resolveExpression: (exp: string, dataPath: string) => string;
  submit: () => Promise;
  send: () => Promise;
  cancel: () => void;
  disableValidation: () => void;
  enableValidation: () => void;
  enableConditions: () => void;
  disableConditions: () => void;
  setLanguage: (code: string) => void;
  handleSubmit: () => void;
  el$: (path: string, elements?: object) => VueformElement | null;
  siblings$: (path: string) => void;
  initMessageBag: () => void;
  initExpressionService: () => void;
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

export declare class DatepickerWrapper implements DefineComponent {
  $props: DatepickerWrapperProps;

  // Props
  value: DatepickerWrapperProps['value'];
  options: DatepickerWrapperProps['options'];
  id: DatepickerWrapperProps['id'];
  placeholder: DatepickerWrapperProps['placeholder'];
  attrs: DatepickerWrapperProps['attrs'];
  autocomplete: DatepickerWrapperProps['autocomplete'];

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
  init: () => Promise;

  //Events
  $emit(eventName: 'change', value: any): void;
}

export declare class EditorWrapper implements DefineComponent {
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
  editor$: HTMLElement;

  // Data
  trix$: HTMLElement;

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

export declare class CheckboxgroupCheckbox implements DefineComponent {
  $props: CheckboxgroupCheckboxProps;

  // Props
  item: CheckboxgroupCheckboxProps['item'];
  value: CheckboxgroupCheckboxProps['value'];
  items: CheckboxgroupCheckboxProps['items'];
  index: CheckboxgroupCheckboxProps['index'];
  attrs: CheckboxgroupCheckboxProps['attrs'];
  standalone: CheckboxgroupCheckboxProps['standalone'];

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

export declare class FilePreview implements DefineComponent {
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

export declare class RadiogroupRadio implements DefineComponent {
  $props: RadiogroupRadioProps;

  // Props
  item: RadiogroupRadioProps['item'];
  value: RadiogroupRadioProps['value'];
  items: RadiogroupRadioProps['items'];
  index: RadiogroupRadioProps['index'];
  attrs: RadiogroupRadioProps['attrs'];
  standalone: RadiogroupRadioProps['standalone'];

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

export declare class ButtonElement implements DefineComponent {
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isListType: boolean;
  isActive: boolean;
  isButtonLabelComponent: boolean;
  button: object;
  isLoading: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  isDisabled: boolean;
  el$: VueformElement;
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

export declare class CaptchaElement implements DefineComponent {
  $props: CaptchaElementProps;

  // Props
  name: CaptchaElementProps['name'];
  conditions: CaptchaElementProps['conditions'];
  onBeforeCreate: CaptchaElementProps['onBeforeCreate'];
  onCreated: CaptchaElementProps['onCreated'];
  onBeforeMount: CaptchaElementProps['onBeforeMount'];
  onMounted: CaptchaElementProps['onMounted'];
  onBeforeUpdate: CaptchaElementProps['onBeforeUpdate'];
  onUpdated: CaptchaElementProps['onUpdated'];
  onBeforeUnmount: CaptchaElementProps['onBeforeUnmount'];
  onUnmounted: CaptchaElementProps['onUnmounted'];
  inline: CaptchaElementProps['inline'];
  layout: CaptchaElementProps['layout'];
  addClass: CaptchaElementProps['addClass'];
  removeClass: CaptchaElementProps['removeClass'];
  replaceClass: CaptchaElementProps['replaceClass'];
  overrideClass: CaptchaElementProps['overrideClass'];
  addClasses: CaptchaElementProps['addClasses'];
  replaceClasses: CaptchaElementProps['replaceClasses'];
  removeClasses: CaptchaElementProps['removeClasses'];
  overrideClasses: CaptchaElementProps['overrideClasses'];
  presets: CaptchaElementProps['presets'];
  view: CaptchaElementProps['view'];
  views: CaptchaElementProps['views'];
  size: CaptchaElementProps['size'];
  columns: CaptchaElementProps['columns'];
  templates: CaptchaElementProps['templates'];
  description: CaptchaElementProps['description'];
  info: CaptchaElementProps['info'];
  infoPosition: CaptchaElementProps['infoPosition'];
  label: CaptchaElementProps['label'];
  before: CaptchaElementProps['before'];
  between: CaptchaElementProps['between'];
  after: CaptchaElementProps['after'];
  slots: CaptchaElementProps['slots'];
  onChange: CaptchaElementProps['onChange'];
  formatData: CaptchaElementProps['formatData'];
  formatLoad: CaptchaElementProps['formatLoad'];
  submit: CaptchaElementProps['submit'];
  rules: CaptchaElementProps['rules'];
  messages: CaptchaElementProps['messages'];
  fieldName: CaptchaElementProps['fieldName'];
  displayErrors: CaptchaElementProps['displayErrors'];
  type: CaptchaElementProps['type'];
  id: CaptchaElementProps['id'];
  default: CaptchaElementProps['default'];
  disabled: CaptchaElementProps['disabled'];
  readonly: CaptchaElementProps['readonly'];
  provider: CaptchaElementProps['provider'];
  options: CaptchaElementProps['options'];

  // Computed
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isListType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isActive: boolean;
  captchaOptions: object;
  shouldVerify: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  el$: VueformElement;
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
  isReadonly: boolean;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  Provider: object | null;
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
  initCaptcha: () => void;
  destroyCaptcha: () => void;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

export declare class CheckboxElement implements DefineComponent {
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
  displayErrors: CheckboxElementProps['displayErrors'];
  type: CheckboxElementProps['type'];
  default: CheckboxElementProps['default'];
  id: CheckboxElementProps['id'];
  text: CheckboxElementProps['text'];
  disabled: CheckboxElementProps['disabled'];
  trueValue: CheckboxElementProps['trueValue'];
  falseValue: CheckboxElementProps['falseValue'];
  align: CheckboxElementProps['align'];
  standalone: CheckboxElementProps['standalone'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isListType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  el$: VueformElement;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

export declare class CheckboxgroupElement implements DefineComponent {
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
  displayErrors: CheckboxgroupElementProps['displayErrors'];
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isListType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  el$: VueformElement;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

export declare class DateElement implements DefineComponent {
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
  displayErrors: DateElementProps['displayErrors'];
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
  autocomplete: DateElementProps['autocomplete'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isListType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
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
  el$: VueformElement;
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
  isReadonly: boolean;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
    'addon-before': VNode[];
    'addon-after': VNode[];
  };
}

export declare class DatesElement implements DefineComponent {
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
  displayErrors: DatesElementProps['displayErrors'];
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
  autocomplete: DatesElementProps['autocomplete'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isListType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
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
  el$: VueformElement;
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
  isReadonly: boolean;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
    'addon-before': VNode[];
    'addon-after': VNode[];
  };
}

export declare class EditorElement implements DefineComponent {
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
  displayErrors: EditorElementProps['displayErrors'];
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isListType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  editorEndpoint: string;
  editorMethod: string;
  el$: VueformElement;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
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
  handleFocus: () => void;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

export declare class FileElement implements DefineComponent {
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
  displayErrors: FileElementProps['displayErrors'];
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isListType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  canDrop: boolean;
  el$: VueformElement;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  value: any;
  model: any;
  isDefault: boolean;
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
  progress: number;
  preparing: boolean;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

export declare class GenericElement implements DefineComponent {
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
  displayErrors: GenericElementProps['displayErrors'];
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isListType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  el$: VueformElement;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

export declare class GridElement implements DefineComponent {
  $props: GridElementProps;

  // Props
  name: GridElementProps['name'];
  conditions: GridElementProps['conditions'];
  onBeforeCreate: GridElementProps['onBeforeCreate'];
  onCreated: GridElementProps['onCreated'];
  onBeforeMount: GridElementProps['onBeforeMount'];
  onMounted: GridElementProps['onMounted'];
  onBeforeUpdate: GridElementProps['onBeforeUpdate'];
  onUpdated: GridElementProps['onUpdated'];
  onBeforeUnmount: GridElementProps['onBeforeUnmount'];
  onUnmounted: GridElementProps['onUnmounted'];
  inline: GridElementProps['inline'];
  layout: GridElementProps['layout'];
  addClass: GridElementProps['addClass'];
  removeClass: GridElementProps['removeClass'];
  replaceClass: GridElementProps['replaceClass'];
  overrideClass: GridElementProps['overrideClass'];
  addClasses: GridElementProps['addClasses'];
  replaceClasses: GridElementProps['replaceClasses'];
  removeClasses: GridElementProps['removeClasses'];
  overrideClasses: GridElementProps['overrideClasses'];
  presets: GridElementProps['presets'];
  view: GridElementProps['view'];
  views: GridElementProps['views'];
  size: GridElementProps['size'];
  columns: GridElementProps['columns'];
  templates: GridElementProps['templates'];
  description: GridElementProps['description'];
  info: GridElementProps['info'];
  infoPosition: GridElementProps['infoPosition'];
  label: GridElementProps['label'];
  before: GridElementProps['before'];
  between: GridElementProps['between'];
  after: GridElementProps['after'];
  slots: GridElementProps['slots'];
  onChange: GridElementProps['onChange'];
  formatData: GridElementProps['formatData'];
  formatLoad: GridElementProps['formatLoad'];
  submit: GridElementProps['submit'];
  rules: GridElementProps['rules'];
  messages: GridElementProps['messages'];
  fieldName: GridElementProps['fieldName'];
  displayErrors: GridElementProps['displayErrors'];
  type: GridElementProps['type'];
  default: GridElementProps['default'];
  id: GridElementProps['id'];
  cols: GridElementProps['cols'];
  rows: GridElementProps['rows'];
  grid: GridElementProps['grid'];
  align: GridElementProps['align'];
  valign: GridElementProps['valign'];
  widths: GridElementProps['widths'];
  minWidth: GridElementProps['minWidth'];
  maxWidth: GridElementProps['maxWidth'];
  scrollable: GridElementProps['scrollable'];
  colHeader: GridElementProps['colHeader'];
  rowHeader: GridElementProps['rowHeader'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isListType: boolean;
  isActive: boolean;
  children: object;
  children$: object;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  el$: VueformElement;
  fieldId: string;
  cells: Array<any>;
  fitWidth: boolean;
  isTableView: boolean;
  gridStyle: object;
  resolvedRows: Array<any>;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  childrenErrors: Array<any>;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  value: any;
  isDefault: boolean;
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
  resolveComponentName: (rowIndex: number, colIndex: number) => string;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

export declare class GroupElement implements DefineComponent {
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
  displayErrors: GroupElementProps['displayErrors'];
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isListType: boolean;
  isActive: boolean;
  children: object;
  children$: object;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  el$: VueformElement;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  childrenErrors: Array<any>;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  value: any;
  isDefault: boolean;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

export declare class HiddenElement implements DefineComponent {
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
  displayErrors: HiddenElementProps['displayErrors'];
  type: HiddenElementProps['type'];
  default: HiddenElementProps['default'];
  id: HiddenElementProps['id'];
  meta: HiddenElementProps['meta'];
  forceNumbers: HiddenElementProps['forceNumbers'];
  expression: HiddenElementProps['expression'];

  // Computed
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isListType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isActive: boolean;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  el$: VueformElement;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;

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
  shouldForceNumbers: () => boolean;
  stringToNumber: (str: any) => number | float | string;
  validate: () => Promise;
  dirt: () => void;
  clean: () => void;
  clearMessages: () => void;
  resetValidators: () => void;
  initMessageBag: () => void;
  initValidation: () => void;
  reinitValidation: () => void;

  //Events
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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

export declare class ListElement implements DefineComponent {
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
  displayErrors: ListElementProps['displayErrors'];
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isListType: boolean;
  isActive: boolean;
  children$: object;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
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
  el$: VueformElement;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  childrenErrors: Array<any>;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  value: any;
  model: any;
  isDefault: boolean;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

export declare class LocationElement implements DefineComponent {
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
  displayErrors: LocationElementProps['displayErrors'];
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isListType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  el$: VueformElement;
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
  isReadonly: boolean;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  isSuccess: boolean;
  isDanger: boolean;
  value: any;
  model: any;
  isDefault: boolean;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
    'addon-before': VNode[];
    'addon-after': VNode[];
  };
}

export declare class MatrixElement implements DefineComponent {
  $props: MatrixElementProps;

  // Props
  name: MatrixElementProps['name'];
  conditions: MatrixElementProps['conditions'];
  onBeforeCreate: MatrixElementProps['onBeforeCreate'];
  onCreated: MatrixElementProps['onCreated'];
  onBeforeMount: MatrixElementProps['onBeforeMount'];
  onMounted: MatrixElementProps['onMounted'];
  onBeforeUpdate: MatrixElementProps['onBeforeUpdate'];
  onUpdated: MatrixElementProps['onUpdated'];
  onBeforeUnmount: MatrixElementProps['onBeforeUnmount'];
  onUnmounted: MatrixElementProps['onUnmounted'];
  inline: MatrixElementProps['inline'];
  layout: MatrixElementProps['layout'];
  addClass: MatrixElementProps['addClass'];
  removeClass: MatrixElementProps['removeClass'];
  replaceClass: MatrixElementProps['replaceClass'];
  overrideClass: MatrixElementProps['overrideClass'];
  addClasses: MatrixElementProps['addClasses'];
  replaceClasses: MatrixElementProps['replaceClasses'];
  removeClasses: MatrixElementProps['removeClasses'];
  overrideClasses: MatrixElementProps['overrideClasses'];
  presets: MatrixElementProps['presets'];
  view: MatrixElementProps['view'];
  views: MatrixElementProps['views'];
  size: MatrixElementProps['size'];
  columns: MatrixElementProps['columns'];
  templates: MatrixElementProps['templates'];
  description: MatrixElementProps['description'];
  info: MatrixElementProps['info'];
  infoPosition: MatrixElementProps['infoPosition'];
  label: MatrixElementProps['label'];
  before: MatrixElementProps['before'];
  between: MatrixElementProps['between'];
  after: MatrixElementProps['after'];
  slots: MatrixElementProps['slots'];
  onChange: MatrixElementProps['onChange'];
  formatData: MatrixElementProps['formatData'];
  formatLoad: MatrixElementProps['formatLoad'];
  submit: MatrixElementProps['submit'];
  rules: MatrixElementProps['rules'];
  messages: MatrixElementProps['messages'];
  fieldName: MatrixElementProps['fieldName'];
  displayErrors: MatrixElementProps['displayErrors'];
  type: MatrixElementProps['type'];
  default: MatrixElementProps['default'];
  id: MatrixElementProps['id'];
  disabled: MatrixElementProps['disabled'];
  readonly: MatrixElementProps['readonly'];
  inputType: MatrixElementProps['inputType'];
  items: MatrixElementProps['items'];
  cols: MatrixElementProps['cols'];
  colWrap: MatrixElementProps['colWrap'];
  hideCols: MatrixElementProps['hideCols'];
  stickyCols: MatrixElementProps['stickyCols'];
  rows: MatrixElementProps['rows'];
  rowWrap: MatrixElementProps['rowWrap'];
  hideRows: MatrixElementProps['hideRows'];
  stickyRows: MatrixElementProps['stickyRows'];
  min: MatrixElementProps['min'];
  max: MatrixElementProps['max'];
  canAdd: MatrixElementProps['canAdd'];
  canRemove: MatrixElementProps['canRemove'];
  addText: MatrixElementProps['addText'];
  minWidth: MatrixElementProps['minWidth'];
  maxWidth: MatrixElementProps['maxWidth'];
  gap: MatrixElementProps['gap'];
  padding: MatrixElementProps['padding'];
  scrollable: MatrixElementProps['scrollable'];
  templateColumns: MatrixElementProps['templateColumns'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isListType: boolean;
  isActive: boolean;
  hasDynamicRows: boolean;
  computedRows: number | Array<any>;
  resolvedRows: Array<any>;
  resolvedColumns: Array<any>;
  dataType: Array<any>;
  children: object;
  children$: object;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  el$: VueformElement;
  fieldId: string;
  genericName: string;
  hasLabel: boolean;
  Label: string | Component;
  elementLayout: string | Component;
  addLabel: string;
  rowsVisible: boolean;
  colsVisible: boolean;
  allowAdd: boolean;
  allowRemove: boolean;
  cells: Array<any>;
  inputTypes: Array<any>;
  nullValue: any;
  parent: VNode;
  path: string;
  dataPath: string;
  flat: boolean;
  isReadonly: boolean;
  elementSlots: object;
  fieldSlots: object;
  Templates: object;
  template: object;
  dirty: boolean;
  validated: boolean;
  invalid: boolean;
  pending: boolean;
  busy: boolean;
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  value: any;
  model: any;
  isDefault: boolean;
  visible: boolean;
  Size: string;
  View: string;
  Views: object;

  // Data
  active: boolean;
  mounted: boolean;
  container: HTMLElement;
  rowsCount: number;
  cells$: object;
  children$Array: Array<any>;
  conditionList: Array<any>;
  localDisabled: boolean | null;
  events: Array<any>;
  listeners: object;
  grid: HTMLElement;
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
  component: (element: string) => string;
  on: (event: string, callback: Function) => void;
  off: (event: string) => void;
  fire: (args: any) => void;
  focus: () => void;
  resolveComponentType: (column: object) => string;
  resolveComponentProps: (row: object, col: object, rowIndex: number, colIndex: number) => object;
  resolveComponentName: (rowIndex: number, colIndex: number) => string;
  getColStyle: (index: object) => object;
  resolveColInputType: (col: object) => object | string;
  resolveColConditions: (row: object, col: object) => object;
  resolveColType: (col: object) => string;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'add', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

export declare class MultifileElement implements DefineComponent {
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
  displayErrors: MultifileElementProps['displayErrors'];
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isListType: boolean;
  isActive: boolean;
  children$: object;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
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
  el$: VueformElement;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  childrenErrors: Array<any>;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  value: any;
  model: any;
  isDefault: boolean;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

export declare class MultiselectElement implements DefineComponent {
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
  displayErrors: MultiselectElementProps['displayErrors'];
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
  allowAbsent: MultiselectElementProps['allowAbsent'];
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isListType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  el$: VueformElement;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'select', value: any): void;
  $emit(eventName: 'deselect', value: any): void;
  $emit(eventName: 'search-change', value: any): void;
  $emit(eventName: 'open', value: any): void;
  $emit(eventName: 'close', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

export declare class ObjectElement implements DefineComponent {
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
  displayErrors: ObjectElementProps['displayErrors'];
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isListType: boolean;
  isActive: boolean;
  children: object;
  children$: object;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  el$: VueformElement;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  childrenErrors: Array<any>;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  value: any;
  isDefault: boolean;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

export declare class PhoneElement implements DefineComponent {
  $props: PhoneElementProps;

  // Props
  name: PhoneElementProps['name'];
  conditions: PhoneElementProps['conditions'];
  onBeforeCreate: PhoneElementProps['onBeforeCreate'];
  onCreated: PhoneElementProps['onCreated'];
  onBeforeMount: PhoneElementProps['onBeforeMount'];
  onMounted: PhoneElementProps['onMounted'];
  onBeforeUpdate: PhoneElementProps['onBeforeUpdate'];
  onUpdated: PhoneElementProps['onUpdated'];
  onBeforeUnmount: PhoneElementProps['onBeforeUnmount'];
  onUnmounted: PhoneElementProps['onUnmounted'];
  inline: PhoneElementProps['inline'];
  layout: PhoneElementProps['layout'];
  addClass: PhoneElementProps['addClass'];
  removeClass: PhoneElementProps['removeClass'];
  replaceClass: PhoneElementProps['replaceClass'];
  overrideClass: PhoneElementProps['overrideClass'];
  addClasses: PhoneElementProps['addClasses'];
  replaceClasses: PhoneElementProps['replaceClasses'];
  removeClasses: PhoneElementProps['removeClasses'];
  overrideClasses: PhoneElementProps['overrideClasses'];
  presets: PhoneElementProps['presets'];
  view: PhoneElementProps['view'];
  views: PhoneElementProps['views'];
  size: PhoneElementProps['size'];
  columns: PhoneElementProps['columns'];
  templates: PhoneElementProps['templates'];
  description: PhoneElementProps['description'];
  info: PhoneElementProps['info'];
  infoPosition: PhoneElementProps['infoPosition'];
  label: PhoneElementProps['label'];
  before: PhoneElementProps['before'];
  between: PhoneElementProps['between'];
  after: PhoneElementProps['after'];
  slots: PhoneElementProps['slots'];
  onChange: PhoneElementProps['onChange'];
  formatData: PhoneElementProps['formatData'];
  formatLoad: PhoneElementProps['formatLoad'];
  submit: PhoneElementProps['submit'];
  rules: PhoneElementProps['rules'];
  messages: PhoneElementProps['messages'];
  fieldName: PhoneElementProps['fieldName'];
  displayErrors: PhoneElementProps['displayErrors'];
  type: PhoneElementProps['type'];
  default: PhoneElementProps['default'];
  debounce: PhoneElementProps['debounce'];
  disabled: PhoneElementProps['disabled'];
  floating: PhoneElementProps['floating'];
  id: PhoneElementProps['id'];
  placeholder: PhoneElementProps['placeholder'];
  readonly: PhoneElementProps['readonly'];
  include: PhoneElementProps['include'];
  exclude: PhoneElementProps['exclude'];
  unmask: PhoneElementProps['unmask'];
  allowIncomplete: PhoneElementProps['allowIncomplete'];
  attrs: PhoneElementProps['attrs'];
  autocomplete: PhoneElementProps['autocomplete'];
  loading: PhoneElementProps['loading'];
  onBlur: PhoneElementProps['onBlur'];
  onSelect: PhoneElementProps['onSelect'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isListType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  el$: VueformElement;
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
  addonOptions: Array<any>;
  maskPluginInstalled: boolean;
  inputType: string;
  mask: object | undefined;
  Placeholder: string;
  isReadonly: boolean;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
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
  options$: component;
  addonPlaceholder: component;
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
  handleFocus: () => void;
  handleInput: (e: Event) => void;
  handleKeydown: (e: Event) => void;
  handleOptionSelect: (option: object) => void;
  handleOpen: () => void;
  handleClose: () => void;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'select', value: any): void;
  $emit(eventName: 'open', value: any): void;
  $emit(eventName: 'close', value: any): void;
  $emit(eventName: 'blur', value: any): void;
  $emit(eventName: 'focus', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

export declare class RadioElement implements DefineComponent {
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
  displayErrors: RadioElementProps['displayErrors'];
  type: RadioElementProps['type'];
  default: RadioElementProps['default'];
  disabled: RadioElementProps['disabled'];
  id: RadioElementProps['id'];
  radioName: RadioElementProps['radioName'];
  radioValue: RadioElementProps['radioValue'];
  text: RadioElementProps['text'];
  align: RadioElementProps['align'];
  standalone: RadioElementProps['standalone'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isListType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  el$: VueformElement;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

export declare class RadiogroupElement implements DefineComponent {
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
  displayErrors: RadiogroupElementProps['displayErrors'];
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isListType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  el$: VueformElement;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

export declare class SelectElement implements DefineComponent {
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
  displayErrors: SelectElementProps['displayErrors'];
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
  allowAbsent: SelectElementProps['allowAbsent'];
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isListType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  el$: VueformElement;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'select', value: any): void;
  $emit(eventName: 'deselect', value: any): void;
  $emit(eventName: 'search-change', value: any): void;
  $emit(eventName: 'open', value: any): void;
  $emit(eventName: 'close', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

export declare class SignatureElement implements DefineComponent {
  $props: SignatureElementProps;

  // Props
  name: SignatureElementProps['name'];
  conditions: SignatureElementProps['conditions'];
  onBeforeCreate: SignatureElementProps['onBeforeCreate'];
  onCreated: SignatureElementProps['onCreated'];
  onBeforeMount: SignatureElementProps['onBeforeMount'];
  onMounted: SignatureElementProps['onMounted'];
  onBeforeUpdate: SignatureElementProps['onBeforeUpdate'];
  onUpdated: SignatureElementProps['onUpdated'];
  onBeforeUnmount: SignatureElementProps['onBeforeUnmount'];
  onUnmounted: SignatureElementProps['onUnmounted'];
  inline: SignatureElementProps['inline'];
  layout: SignatureElementProps['layout'];
  addClass: SignatureElementProps['addClass'];
  removeClass: SignatureElementProps['removeClass'];
  replaceClass: SignatureElementProps['replaceClass'];
  overrideClass: SignatureElementProps['overrideClass'];
  addClasses: SignatureElementProps['addClasses'];
  replaceClasses: SignatureElementProps['replaceClasses'];
  removeClasses: SignatureElementProps['removeClasses'];
  overrideClasses: SignatureElementProps['overrideClasses'];
  presets: SignatureElementProps['presets'];
  view: SignatureElementProps['view'];
  views: SignatureElementProps['views'];
  size: SignatureElementProps['size'];
  columns: SignatureElementProps['columns'];
  templates: SignatureElementProps['templates'];
  description: SignatureElementProps['description'];
  info: SignatureElementProps['info'];
  infoPosition: SignatureElementProps['infoPosition'];
  label: SignatureElementProps['label'];
  before: SignatureElementProps['before'];
  between: SignatureElementProps['between'];
  after: SignatureElementProps['after'];
  slots: SignatureElementProps['slots'];
  onChange: SignatureElementProps['onChange'];
  formatData: SignatureElementProps['formatData'];
  formatLoad: SignatureElementProps['formatLoad'];
  submit: SignatureElementProps['submit'];
  rules: SignatureElementProps['rules'];
  messages: SignatureElementProps['messages'];
  fieldName: SignatureElementProps['fieldName'];
  displayErrors: SignatureElementProps['displayErrors'];
  type: SignatureElementProps['type'];
  id: SignatureElementProps['id'];
  default: SignatureElementProps['default'];
  debounce: SignatureElementProps['debounce'];
  disabled: SignatureElementProps['disabled'];
  readonly: SignatureElementProps['readonly'];
  modes: SignatureElementProps['modes'];
  fonts: SignatureElementProps['fonts'];
  autoload: SignatureElementProps['autoload'];
  minFontSize: SignatureElementProps['minFontSize'];
  maxFontSize: SignatureElementProps['maxFontSize'];
  colors: SignatureElementProps['colors'];
  invertColors: SignatureElementProps['invertColors'];
  maxWidth: SignatureElementProps['maxWidth'];
  height: SignatureElementProps['height'];
  uploadWidth: SignatureElementProps['uploadWidth'];
  uploadHeight: SignatureElementProps['uploadHeight'];
  maxSize: SignatureElementProps['maxSize'];
  accept: SignatureElementProps['accept'];
  placeholder: SignatureElementProps['placeholder'];
  line: SignatureElementProps['line'];
  canClear: SignatureElementProps['canClear'];
  canUndo: SignatureElementProps['canUndo'];
  canDrop: SignatureElementProps['canDrop'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isListType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  el$: VueformElement;
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
  isReadonly: boolean;
  fontFamilies: Array<any>;
  fontWeights: Array<any>;
  uploaded: boolean;
  processing: boolean;
  droppable: boolean;
  resolvedModes: Array<any>;
  resolvedFonts: Array<any>;
  fileAccept: string;
  showLine: boolean;
  showInput: boolean;
  showPlaceholder: boolean;
  showUploadContainer: boolean;
  showUpload: boolean;
  showPreview: boolean;
  showPad: boolean;
  showUndos: boolean;
  showColors: boolean;
  showModes: boolean;
  showFonts: boolean;
  showClear: boolean;
  tabindex: number | undefined;
  placeholderText: string;
  dndText: string;
  uploadButtonText: string;
  imgAltText: string;
  imgTitleText: string;
  fontText: string;
  undoText: string;
  redoText: string;
  modeSelectorAria: object;
  fontSelectorAria: object;
  wrapperAriaLabel: string;
  inputAriaLabel: string;
  padAriaLabel: string;
  colorAriaLabel: string;
  clearAriaLabel: string;
  padWidth: number;
  padHeight: number;
  padStyle: object;
  wrapperStyle: object;
  inputStyle: object;
  lineStyle: object;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
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
  mode$: ElementAddonOptions;
  font$: ElementAddonOptions;
  input$: HTMLInputElement;
  preview$: HTMLCanvasElement;
  pad$: HTMLCanvasElement;
  file$: HTMLInputElement;
  upload$: HTMLElement;
  uploadButton$: HTMLElement;
  mode: string;
  fontFamily: string;
  fontWeight: string;
  color: string;
  text: string;
  fontSize: number;
  pad: object;
  image: File;
  created: boolean;
  creating: boolean;
  dragging: boolean;
  drawn: boolean;
  drawing: boolean;
  redos: Array<any>;
  undosLeft: number;
  width: number;
  lastWidth: number;
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
  initPad: () => void;
  resizePad: () => void;
  drawingToImage: () => void;
  typingToImage: () => void;
  uploadToImage: () => void;
  undo: () => void;
  redo: () => void;
  clearSignature: () => void;
  clearDrawnSignature: () => void;
  loadFonts: () => void;
  setDrawColor: () => void;
  adjustFontSize: () => void;
  hexToRgb: (hex: string) => string;
  checkFileExt: (file: File) => boolean;
  checkFileSize: (file: File) => boolean;
  setWidth: () => void;
  setLastWidth: () => void;
  setDefaultMode: () => void;
  setDefaultFont: () => void;
  setDefaultColor: () => void;
  setFont: (value: object) => void;
  handleInput: (e: Event) => void;
  handleModeSelect: (value: object) => void;
  handleColorSelect: (value: string) => void;
  handleFontSelect: (value: object) => void;
  handleClear: () => void;
  handleUndo: () => void;
  handleRedo: () => void;
  handleSelectClick: () => void;
  handleFileSelect: () => void;
  handleDrop: (e: Event) => void;
  handleMouseLeave: () => void;
  handleResize: () => void;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
    'addon-before': VNode[];
    'addon-after': VNode[];
  };
}

export declare class SliderElement implements DefineComponent {
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
  displayErrors: SliderElementProps['displayErrors'];
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isListType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  el$: VueformElement;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  errors: Array<any>;
  error: string;
  validationRules: string | Array<any>;
  value: any;
  model: any;
  isDefault: boolean;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

export declare class StaticElement implements DefineComponent {
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
  expressions: StaticElementProps['expressions'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isListType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  el$: VueformElement;
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
  resolvedContent: any;
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

export declare class TEditorElement implements DefineComponent {
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
  displayErrors: TEditorElementProps['displayErrors'];
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isListType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  editorEndpoint: string;
  editorMethod: string;
  el$: VueformElement;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
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
  handleFocus: () => void;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

export declare class TTextElement implements DefineComponent {
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
  displayErrors: TTextElementProps['displayErrors'];
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isListType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  el$: VueformElement;
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
  isReadonly: boolean;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
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
  handleFocus: () => void;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'blur', value: any): void;
  $emit(eventName: 'focus', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
    'addon-before': VNode[];
    'addon-after': VNode[];
  };
}

export declare class TTextareaElement implements DefineComponent {
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
  displayErrors: TTextareaElementProps['displayErrors'];
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isListType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  el$: VueformElement;
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
  isReadonly: boolean;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
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
  handleFocus: () => void;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'blur', value: any): void;
  $emit(eventName: 'focus', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
    'addon-before': VNode[];
    'addon-after': VNode[];
  };
}

export declare class TagsElement implements DefineComponent {
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
  displayErrors: TagsElementProps['displayErrors'];
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
  allowAbsent: TagsElementProps['allowAbsent'];
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isListType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  el$: VueformElement;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'select', value: any): void;
  $emit(eventName: 'deselect', value: any): void;
  $emit(eventName: 'search-change', value: any): void;
  $emit(eventName: 'open', value: any): void;
  $emit(eventName: 'close', value: any): void;
  $emit(eventName: 'tag', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
  };
}

export declare class TextElement implements DefineComponent {
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
  displayErrors: TextElementProps['displayErrors'];
  type: TextElementProps['type'];
  default: TextElementProps['default'];
  debounce: TextElementProps['debounce'];
  disabled: TextElementProps['disabled'];
  floating: TextElementProps['floating'];
  id: TextElementProps['id'];
  placeholder: TextElementProps['placeholder'];
  readonly: TextElementProps['readonly'];
  inputType: TextElementProps['inputType'];
  forceNumbers: TextElementProps['forceNumbers'];
  expression: TextElementProps['expression'];
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isListType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  el$: VueformElement;
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
  isReadonly: boolean;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
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
  handleFocus: () => void;
  handleInput: (e: Event) => void;
  handleKeydown: (e: Event) => void;
  handleKeyup: (e: Event) => void;
  handleKeypress: (e: Event) => void;
  shouldForceNumbers: () => boolean;
  stringToNumber: (str: any) => number | float | string;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'blur', value: any): void;
  $emit(eventName: 'focus', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
    'addon-before': VNode[];
    'addon-after': VNode[];
  };
}

export declare class TextareaElement implements DefineComponent {
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
  displayErrors: TextareaElementProps['displayErrors'];
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
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isListType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  el$: VueformElement;
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
  isReadonly: boolean;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
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
  handleFocus: () => void;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
  $emit(eventName: 'change', value: any): void;
  $emit(eventName: 'blur', value: any): void;
  $emit(eventName: 'focus', value: any): void;
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
    'required': VNode[];
    'description': VNode[];
    'before': VNode[];
    'between': VNode[];
    'after': VNode[];
    'addon-before': VNode[];
    'addon-after': VNode[];
  };
}

export declare class ToggleElement implements DefineComponent {
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
  displayErrors: ToggleElementProps['displayErrors'];
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
  standalone: ToggleElementProps['standalone'];

  // Computed
  descriptionId: string;
  labelId: string;
  infoId: string;
  errorId: string;
  aria: object;
  isStatic: boolean;
  isFileType: boolean;
  isArrayType: boolean;
  isImageType: boolean;
  isObjectType: boolean;
  isGroupType: boolean;
  isListType: boolean;
  isMatrixType: boolean;
  isGridType: boolean;
  isActive: boolean;
  classes: object;
  classesInstance: MergeClasses;
  computedCols: object;
  columnsClassesService: Columns;
  columnsClasses: object;
  available: boolean;
  data: object;
  requestData: object;
  defaultValue: any;
  isDisabled: boolean;
  el$: VueformElement;
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
  isRequired: boolean;
  useCustomFilled: boolean;
  isFilled: boolean;
  value: any;
  model: any;
  isDefault: boolean;
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
  $emit(eventName: 'reset', value: any): void;
  $emit(eventName: 'clear', value: any): void;
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
    'required': VNode[];
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
    ElementAddonOptions: typeof ElementAddonOptions;
    ElementDescription: typeof ElementDescription;
    ElementError: typeof ElementError;
    ElementInfo: typeof ElementInfo;
    ElementLabel: typeof ElementLabel;
    ElementLabelFloating: typeof ElementLabelFloating;
    ElementLayout: typeof ElementLayout;
    ElementLayoutInline: typeof ElementLayoutInline;
    ElementLoader: typeof ElementLoader;
    ElementMessage: typeof ElementMessage;
    ElementRequired: typeof ElementRequired;
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
    CaptchaElement: typeof CaptchaElement;
    CheckboxElement: typeof CheckboxElement;
    CheckboxgroupElement: typeof CheckboxgroupElement;
    DateElement: typeof DateElement;
    DatesElement: typeof DatesElement;
    EditorElement: typeof EditorElement;
    FileElement: typeof FileElement;
    GenericElement: typeof GenericElement;
    GridElement: typeof GridElement;
    GroupElement: typeof GroupElement;
    HiddenElement: typeof HiddenElement;
    ListElement: typeof ListElement;
    LocationElement: typeof LocationElement;
    MatrixElement: typeof MatrixElement;
    MultifileElement: typeof MultifileElement;
    MultiselectElement: typeof MultiselectElement;
    ObjectElement: typeof ObjectElement;
    PhoneElement: typeof PhoneElement;
    RadioElement: typeof RadioElement;
    RadiogroupElement: typeof RadiogroupElement;
    SelectElement: typeof SelectElement;
    SignatureElement: typeof SignatureElement;
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