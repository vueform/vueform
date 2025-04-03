/*!
 * Vueform v1.12.5 (https://github.com/vueform/vueform)
 * Copyright (c) 2025 Adam Berecz <adam@vueform.com>
 * Licensed under the MIT License
 */

import { toRefs, getCurrentInstance, customRef, ref, computed, watch, nextTick, onMounted, onBeforeUnmount, shallowRef, onUnmounted } from 'vue';

function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$19 = {
    data() {
      return {
        merge: true,
        defaultClasses: {
          form: '',
        }
      }
    }
  };

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$16 = "";
styleInject(css_248z$16);

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__$19 = script$19;
/* template */
var __vue_render__$12 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "form",
    {
      class: _vm.classes.form,
      on: {
        submit: function ($event) {
          $event.preventDefault();
          return _vm.submit.apply(null, arguments)
        },
      },
    },
    [
      _vm._t(
        "empty",
        function () {
          return [
            _vm.showMessages
              ? _c("FormMessages", { tag: "component" })
              : _vm._e(),
            _vm._v(" "),
            _vm.showErrors ? _c("FormErrors", { tag: "component" }) : _vm._e(),
            _vm._v(" "),
            _vm.showLanguages
              ? _c("FormLanguages", { tag: "component" })
              : _vm._e(),
            _vm._v(" "),
            _vm.showTabs ? _c("FormTabs", { tag: "component" }) : _vm._e(),
            _vm._v(" "),
            _vm.showSteps ? _c("FormSteps", { tag: "component" }) : _vm._e(),
            _vm._v(" "),
            _c("FormElements", [_vm._t("default")], 2),
            _vm._v(" "),
            _vm.showStepsControls
              ? _c("FormStepsControls", { tag: "component" })
              : _vm._e(),
          ]
        },
        { classes: _vm.classes }
      ),
    ],
    2
  )
};
var __vue_staticRenderFns__$12 = [];
__vue_render__$12._withStripped = true;

  /* style */
  const __vue_inject_styles__$19 = undefined;
  /* scoped */
  const __vue_scope_id__$19 = undefined;
  /* module identifier */
  const __vue_module_identifier__$19 = undefined;
  /* functional template */
  const __vue_is_functional_template__$19 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$19 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$12, staticRenderFns: __vue_staticRenderFns__$12 },
    __vue_inject_styles__$19,
    __vue_script__$19,
    __vue_scope_id__$19,
    __vue_is_functional_template__$19,
    __vue_module_identifier__$19,
    false,
    undefined,
    undefined,
    undefined
  );

  var Vueform = __vue_component__$19;

//
//
//
//
//
//
//
//
//
//
//
//


  var script$18 = {
    name: 'FormErrors',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          error: '',
        }
      }
    }
  };

var css_248z$15 = "";
styleInject(css_248z$15);

/* script */
const __vue_script__$18 = script$18;
/* template */
var __vue_render__$11 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: _vm.classes.container },
    _vm._l(_vm.errors, function (error, key, index) {
      return _c("div", {
        key: index,
        class: _vm.classes.error,
        domProps: { innerHTML: _vm._s(error) },
      })
    }),
    0
  )
};
var __vue_staticRenderFns__$11 = [];
__vue_render__$11._withStripped = true;

  /* style */
  const __vue_inject_styles__$18 = undefined;
  /* scoped */
  const __vue_scope_id__$18 = undefined;
  /* module identifier */
  const __vue_module_identifier__$18 = undefined;
  /* functional template */
  const __vue_is_functional_template__$18 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$18 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$11, staticRenderFns: __vue_staticRenderFns__$11 },
    __vue_inject_styles__$18,
    __vue_script__$18,
    __vue_scope_id__$18,
    __vue_is_functional_template__$18,
    __vue_module_identifier__$18,
    false,
    undefined,
    undefined,
    undefined
  );

  var FormErrors = __vue_component__$18;

//
//
//
//
//
//
//
//
//
//
//
//

  var script$17 = {
    name: 'FormMessages',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          message: '',
        }
      }
    }
  };

var css_248z$14 = "";
styleInject(css_248z$14);

/* script */
const __vue_script__$17 = script$17;
/* template */
var __vue_render__$10 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: _vm.classes.container },
    _vm._l(_vm.messages, function (message, key, index) {
      return _c("div", {
        key: index,
        class: _vm.classes.message,
        domProps: { innerHTML: _vm._s(message) },
      })
    }),
    0
  )
};
var __vue_staticRenderFns__$10 = [];
__vue_render__$10._withStripped = true;

  /* style */
  const __vue_inject_styles__$17 = undefined;
  /* scoped */
  const __vue_scope_id__$17 = undefined;
  /* module identifier */
  const __vue_module_identifier__$17 = undefined;
  /* functional template */
  const __vue_is_functional_template__$17 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$17 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$10, staticRenderFns: __vue_staticRenderFns__$10 },
    __vue_inject_styles__$17,
    __vue_script__$17,
    __vue_scope_id__$17,
    __vue_is_functional_template__$17,
    __vue_module_identifier__$17,
    false,
    undefined,
    undefined,
    undefined
  );

  var FormMessages = __vue_component__$17;

//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$16 = {
    name: 'FormLanguages',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        },
      }
    }
  };

var css_248z$13 = "";
styleInject(css_248z$13);

/* script */
const __vue_script__$16 = script$16;
/* template */
var __vue_render__$$ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "ul",
    { class: _vm.classes.container },
    [
      _vm._t("default", function () {
        return _vm._l(_vm.languages, function (lang, code, key) {
          return _c("FormLanguage", {
            key: key,
            attrs: { language: lang, code: code },
            on: { select: _vm.handleSelect },
          })
        })
      }),
    ],
    2
  )
};
var __vue_staticRenderFns__$$ = [];
__vue_render__$$._withStripped = true;

  /* style */
  const __vue_inject_styles__$16 = undefined;
  /* scoped */
  const __vue_scope_id__$16 = undefined;
  /* module identifier */
  const __vue_module_identifier__$16 = undefined;
  /* functional template */
  const __vue_is_functional_template__$16 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$16 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$$, staticRenderFns: __vue_staticRenderFns__$$ },
    __vue_inject_styles__$16,
    __vue_script__$16,
    __vue_scope_id__$16,
    __vue_is_functional_template__$16,
    __vue_module_identifier__$16,
    false,
    undefined,
    undefined,
    undefined
  );

  var FormLanguages = __vue_component__$16;

//
//
//
//
//
//
//
//
//
//
//
//

  var script$15 = {
    name: 'FormLanguage',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        },
      }
    }
  };

var css_248z$12 = "";
styleInject(css_248z$12);

/* script */
const __vue_script__$15 = script$15;
/* template */
var __vue_render__$_ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("li", { class: _vm.classes.container }, [
    _c(
      "a",
      {
        class: _vm.classes.wrapper,
        attrs: { href: "#" },
        on: {
          click: function ($event) {
            $event.preventDefault();
            return _vm.select.apply(null, arguments)
          },
        },
      },
      [_vm._v("\n    " + _vm._s(_vm.language) + "\n  ")]
    ),
  ])
};
var __vue_staticRenderFns__$_ = [];
__vue_render__$_._withStripped = true;

  /* style */
  const __vue_inject_styles__$15 = undefined;
  /* scoped */
  const __vue_scope_id__$15 = undefined;
  /* module identifier */
  const __vue_module_identifier__$15 = undefined;
  /* functional template */
  const __vue_is_functional_template__$15 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$15 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$_, staticRenderFns: __vue_staticRenderFns__$_ },
    __vue_inject_styles__$15,
    __vue_script__$15,
    __vue_scope_id__$15,
    __vue_is_functional_template__$15,
    __vue_module_identifier__$15,
    false,
    undefined,
    undefined,
    undefined
  );

  var FormLanguage = __vue_component__$15;

//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$14 = {
    name: 'FormTabs',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    },
  };

var css_248z$11 = "";
styleInject(css_248z$11);

/* script */
const __vue_script__$14 = script$14;
/* template */
var __vue_render__$Z = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "ul",
    { class: _vm.classes.container, attrs: { role: "tablist" } },
    [
      _vm._t("default", function () {
        return _vm._l(_vm.tabs, function (tab, name, i) {
          return _c(
            "FormTab",
            _vm._b(
              { key: name, attrs: { name: name, index: i } },
              "FormTab",
              tab,
              false
            )
          )
        })
      }),
    ],
    2
  )
};
var __vue_staticRenderFns__$Z = [];
__vue_render__$Z._withStripped = true;

  /* style */
  const __vue_inject_styles__$14 = undefined;
  /* scoped */
  const __vue_scope_id__$14 = undefined;
  /* module identifier */
  const __vue_module_identifier__$14 = undefined;
  /* functional template */
  const __vue_is_functional_template__$14 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$14 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$Z, staticRenderFns: __vue_staticRenderFns__$Z },
    __vue_inject_styles__$14,
    __vue_script__$14,
    __vue_scope_id__$14,
    __vue_is_functional_template__$14,
    __vue_module_identifier__$14,
    false,
    undefined,
    undefined,
    undefined
  );

  var FormTabs = __vue_component__$14;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$13 = {
    name: 'FormTab',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        },
      }
    }
  };

var css_248z$10 = "";
styleInject(css_248z$10);

/* script */
const __vue_script__$13 = script$13;
/* template */
var __vue_render__$Y = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "li",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.visible,
          expression: "visible",
        },
      ],
      class: _vm.classes.container,
    },
    [
      _c(
        "div",
        {
          class: _vm.classes.wrapper,
          attrs: { tabindex: "0", role: "tab", "aria-selected": _vm.active },
          on: {
            click: function ($event) {
              $event.preventDefault();
              return _vm.select.apply(null, arguments)
            },
            keypress: function ($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter") &&
                _vm._k($event.keyCode, "space", 32, $event.key, [
                  " ",
                  "Spacebar",
                ])
              ) {
                return null
              }
              $event.preventDefault();
              return _vm.select.apply(null, arguments)
            },
          },
        },
        [
          _vm._t("default", function () {
            return [
              _vm.isLabelComponent
                ? _c(
                    "span",
                    [
                      _c(_vm.tabLabel, {
                        tag: "component",
                        attrs: { form$: _vm.form$ },
                      }),
                    ],
                    1
                  )
                : _c("span", { domProps: { innerHTML: _vm._s(_vm.tabLabel) } }),
            ]
          }),
        ],
        2
      ),
    ]
  )
};
var __vue_staticRenderFns__$Y = [];
__vue_render__$Y._withStripped = true;

  /* style */
  const __vue_inject_styles__$13 = undefined;
  /* scoped */
  const __vue_scope_id__$13 = undefined;
  /* module identifier */
  const __vue_module_identifier__$13 = undefined;
  /* functional template */
  const __vue_is_functional_template__$13 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$13 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$Y, staticRenderFns: __vue_staticRenderFns__$Y },
    __vue_inject_styles__$13,
    __vue_script__$13,
    __vue_scope_id__$13,
    __vue_is_functional_template__$13,
    __vue_module_identifier__$13,
    false,
    undefined,
    undefined,
    undefined
  );

  var FormTab = __vue_component__$13;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$12 = {
    name: 'FormSteps',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    },
  };

var css_248z$$ = "";
styleInject(css_248z$$);

/* script */
const __vue_script__$12 = script$12;
/* template */
var __vue_render__$X = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.classes.container }, [
    _c(
      "ul",
      { class: _vm.classes.wrapper, attrs: { role: "tablist" } },
      [
        _vm._t("default", function () {
          return _vm._l(_vm.steps, function (step, name) {
            return _c(
              "FormStep",
              _vm._b(
                { key: name, attrs: { name: name } },
                "FormStep",
                step,
                false
              )
            )
          })
        }),
      ],
      2
    ),
  ])
};
var __vue_staticRenderFns__$X = [];
__vue_render__$X._withStripped = true;

  /* style */
  const __vue_inject_styles__$12 = undefined;
  /* scoped */
  const __vue_scope_id__$12 = undefined;
  /* module identifier */
  const __vue_module_identifier__$12 = undefined;
  /* functional template */
  const __vue_is_functional_template__$12 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$12 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$X, staticRenderFns: __vue_staticRenderFns__$X },
    __vue_inject_styles__$12,
    __vue_script__$12,
    __vue_scope_id__$12,
    __vue_is_functional_template__$12,
    __vue_module_identifier__$12,
    false,
    undefined,
    undefined,
    undefined
  );

  var FormSteps = __vue_component__$12;

//
//
//
//
//
//
//
//

  var script$11 = {
    name: 'FormStepsControls',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    }
  };

var css_248z$_ = "";
styleInject(css_248z$_);

/* script */
const __vue_script__$11 = script$11;
/* template */
var __vue_render__$W = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: _vm.classes.container },
    [
      _c(
        "FormStepsControl",
        { attrs: { type: "previous", labels: _vm.labels } },
        [_vm._t("previous")],
        2
      ),
      _vm._v(" "),
      _c(
        "FormStepsControl",
        { attrs: { type: "next", labels: _vm.labels } },
        [_vm._t("next")],
        2
      ),
      _vm._v(" "),
      _c(
        "FormStepsControl",
        { attrs: { type: "finish", labels: _vm.labels } },
        [_vm._t("finish")],
        2
      ),
    ],
    1
  )
};
var __vue_staticRenderFns__$W = [];
__vue_render__$W._withStripped = true;

  /* style */
  const __vue_inject_styles__$11 = undefined;
  /* scoped */
  const __vue_scope_id__$11 = undefined;
  /* module identifier */
  const __vue_module_identifier__$11 = undefined;
  /* functional template */
  const __vue_is_functional_template__$11 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$11 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$W, staticRenderFns: __vue_staticRenderFns__$W },
    __vue_inject_styles__$11,
    __vue_script__$11,
    __vue_scope_id__$11,
    __vue_is_functional_template__$11,
    __vue_module_identifier__$11,
    false,
    undefined,
    undefined,
    undefined
  );

  var FormStepsControls = __vue_component__$11;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$10 = {
    name: 'FormStepsControl',
    data() {
      return {
        merge: true,
        defaultClasses: {
          button: '',
        }
      }
    }
  };

var css_248z$Z = "";
styleInject(css_248z$Z);

/* script */
const __vue_script__$10 = script$10;
/* template */
var __vue_render__$V = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.visible && _vm.label && _vm.isLabelComponent
    ? _c(
        "button",
        {
          class: _vm.classes.button,
          attrs: { disabled: _vm.isDisabled },
          on: {
            click: function ($event) {
              $event.preventDefault();
              return _vm.handleClick.apply(null, arguments)
            },
            keypress: function ($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter") &&
                _vm._k($event.keyCode, "space", 32, $event.key, [
                  " ",
                  "Spacebar",
                ])
              ) {
                return null
              }
              $event.preventDefault();
              return _vm.handleClick.apply(null, arguments)
            },
          },
        },
        [_c(_vm.label, { tag: "component", attrs: { step$: _vm.current$ } })],
        1
      )
    : _vm.visible && _vm.label
    ? _c("button", {
        class: _vm.classes.button,
        attrs: { disabled: _vm.isDisabled },
        domProps: { innerHTML: _vm._s(_vm.label) },
        on: {
          click: function ($event) {
            $event.preventDefault();
            return _vm.handleClick.apply(null, arguments)
          },
          keypress: function ($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter") &&
              _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])
            ) {
              return null
            }
            $event.preventDefault();
            return _vm.handleClick.apply(null, arguments)
          },
        },
      })
    : _vm.visible
    ? _c(
        "button",
        {
          class: _vm.classes.button,
          attrs: { disabled: _vm.isDisabled },
          on: {
            click: function ($event) {
              $event.preventDefault();
              return _vm.handleClick.apply(null, arguments)
            },
            keypress: function ($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter") &&
                _vm._k($event.keyCode, "space", 32, $event.key, [
                  " ",
                  "Spacebar",
                ])
              ) {
                return null
              }
              $event.preventDefault();
              return _vm.handleClick.apply(null, arguments)
            },
          },
        },
        [_vm._t("default")],
        2
      )
    : _vm._e()
};
var __vue_staticRenderFns__$V = [];
__vue_render__$V._withStripped = true;

  /* style */
  const __vue_inject_styles__$10 = undefined;
  /* scoped */
  const __vue_scope_id__$10 = undefined;
  /* module identifier */
  const __vue_module_identifier__$10 = undefined;
  /* functional template */
  const __vue_is_functional_template__$10 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$10 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$V, staticRenderFns: __vue_staticRenderFns__$V },
    __vue_inject_styles__$10,
    __vue_script__$10,
    __vue_scope_id__$10,
    __vue_is_functional_template__$10,
    __vue_module_identifier__$10,
    false,
    undefined,
    undefined,
    undefined
  );

  var FormStepsControl = __vue_component__$10;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$$ = {
    name: 'FormStep',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        },
      }
    }
  };

var css_248z$Y = "";
styleInject(css_248z$Y);

/* script */
const __vue_script__$$ = script$$;
/* template */
var __vue_render__$U = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.visible
    ? _c("li", { class: _vm.classes.container }, [
        _c(
          "a",
          {
            class: _vm.classes.wrapper,
            attrs: {
              href: "",
              tabindex: _vm.isDisabled ? -1 : 0,
              role: "tab",
              "aria-selected": _vm.active,
            },
            on: {
              click: function ($event) {
                $event.preventDefault();
                return _vm.select.apply(null, arguments)
              },
              keypress: function ($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter") &&
                  _vm._k($event.keyCode, "space", 32, $event.key, [
                    " ",
                    "Spacebar",
                  ])
                ) {
                  return null
                }
                $event.preventDefault();
                return _vm.select.apply(null, arguments)
              },
            },
          },
          [
            _vm._t("default", function () {
              return [
                _vm.isLabelComponent
                  ? _c(
                      "span",
                      [
                        _c(_vm.stepLabel, {
                          tag: "component",
                          attrs: { form$: _vm.form$ },
                        }),
                      ],
                      1
                    )
                  : _c("span", {
                      domProps: { innerHTML: _vm._s(_vm.stepLabel) },
                    }),
              ]
            }),
          ],
          2
        ),
      ])
    : _vm._e()
};
var __vue_staticRenderFns__$U = [];
__vue_render__$U._withStripped = true;

  /* style */
  const __vue_inject_styles__$$ = undefined;
  /* scoped */
  const __vue_scope_id__$$ = undefined;
  /* module identifier */
  const __vue_module_identifier__$$ = undefined;
  /* functional template */
  const __vue_is_functional_template__$$ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$$ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$U, staticRenderFns: __vue_staticRenderFns__$U },
    __vue_inject_styles__$$,
    __vue_script__$$,
    __vue_scope_id__$$,
    __vue_is_functional_template__$$,
    __vue_module_identifier__$$,
    false,
    undefined,
    undefined,
    undefined
  );

  var FormStep = __vue_component__$$;

//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$_ = {
    name: 'FormElements',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    },
  };

var css_248z$X = "";
styleInject(css_248z$X);

/* script */
const __vue_script__$_ = script$_;
/* template */
var __vue_render__$T = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: _vm.classes.container },
    [
      _vm._t("default", function () {
        return _vm._l(_vm.schema, function (element, name) {
          return _c(
            _vm.component(element),
            _vm._b(
              { key: name, tag: "component", attrs: { name: name } },
              "component",
              element,
              false
            )
          )
        })
      }),
    ],
    2
  )
};
var __vue_staticRenderFns__$T = [];
__vue_render__$T._withStripped = true;

  /* style */
  const __vue_inject_styles__$_ = undefined;
  /* scoped */
  const __vue_scope_id__$_ = undefined;
  /* module identifier */
  const __vue_module_identifier__$_ = undefined;
  /* functional template */
  const __vue_is_functional_template__$_ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$_ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$T, staticRenderFns: __vue_staticRenderFns__$T },
    __vue_inject_styles__$_,
    __vue_script__$_,
    __vue_scope_id__$_,
    __vue_is_functional_template__$_,
    __vue_module_identifier__$_,
    false,
    undefined,
    undefined,
    undefined
  );

  var FormElements = __vue_component__$_;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$Z = {
    name: 'ElementLayout',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          outerWrapper: '',
          innerContainer: '',
          innerWrapperBefore: '',
          innerWrapper: '',
          innerWrapperAfter: '',
        },
      }
    },
  };

var css_248z$W = "";
styleInject(css_248z$W);

/* script */
const __vue_script__$Z = script$Z;
/* template */
var __vue_render__$S = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.visible,
          expression: "visible",
        },
      ],
      class: _vm.classes.container,
    },
    [
      _c(
        "div",
        { class: _vm.classes.outerWrapper },
        [
          _c("ElementLabel", {
            scopedSlots: _vm._u(
              [
                {
                  key: "default",
                  fn: function () {
                    return [_vm._t("label")]
                  },
                  proxy: true,
                },
                {
                  key: "info",
                  fn: function () {
                    return [_vm._t("info")]
                  },
                  proxy: true,
                },
                {
                  key: "required",
                  fn: function () {
                    return [_vm._t("required")]
                  },
                  proxy: true,
                },
              ],
              null,
              true
            ),
          }),
          _vm._v(" "),
          _c("div", { class: _vm.classes.innerContainer }, [
            _c(
              "div",
              { class: _vm.classes.innerWrapperBefore },
              [
                _c(
                  "ElementText",
                  { attrs: { type: "before" } },
                  [_vm._t("before")],
                  2
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { class: _vm.classes.innerWrapper },
              [_vm._t("element")],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { class: _vm.classes.innerWrapperAfter },
              [
                _c(
                  "ElementText",
                  { attrs: { type: "between" } },
                  [_vm._t("between")],
                  2
                ),
                _vm._v(" "),
                _c("ElementDescription", [_vm._t("description")], 2),
                _vm._v(" "),
                _c("ElementError"),
                _vm._v(" "),
                _c("ElementMessage"),
                _vm._v(" "),
                _c(
                  "ElementText",
                  { attrs: { type: "after" } },
                  [_vm._t("after")],
                  2
                ),
              ],
              1
            ),
          ]),
        ],
        1
      ),
    ]
  )
};
var __vue_staticRenderFns__$S = [];
__vue_render__$S._withStripped = true;

  /* style */
  const __vue_inject_styles__$Z = undefined;
  /* scoped */
  const __vue_scope_id__$Z = undefined;
  /* module identifier */
  const __vue_module_identifier__$Z = undefined;
  /* functional template */
  const __vue_is_functional_template__$Z = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$Z = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$S, staticRenderFns: __vue_staticRenderFns__$S },
    __vue_inject_styles__$Z,
    __vue_script__$Z,
    __vue_scope_id__$Z,
    __vue_is_functional_template__$Z,
    __vue_module_identifier__$Z,
    false,
    undefined,
    undefined,
    undefined
  );

  var ElementLayout = __vue_component__$Z;

//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$Y = {
    name: 'ElementLayoutInline',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        },
      }
    },
  };

var css_248z$V = "";
styleInject(css_248z$V);

/* script */
const __vue_script__$Y = script$Y;
/* template */
var __vue_render__$R = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "span",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.visible,
          expression: "visible",
        },
      ],
      class: _vm.classes.container,
    },
    [
      _c("ElementLabel", [_vm._t("label")], 2),
      _vm._v(" "),
      _c("ElementText", { attrs: { type: "before" } }, [_vm._t("before")], 2),
      _vm._v(" "),
      _vm._t("element"),
      _vm._v(" "),
      _c("ElementText", { attrs: { type: "between" } }, [_vm._t("between")], 2),
      _vm._v(" "),
      _c("ElementDescription", [_vm._t("description")], 2),
      _vm._v(" "),
      _c("ElementError"),
      _vm._v(" "),
      _c("ElementMessage"),
      _vm._v(" "),
      _c("ElementText", { attrs: { type: "after" } }, [_vm._t("after")], 2),
    ],
    2
  )
};
var __vue_staticRenderFns__$R = [];
__vue_render__$R._withStripped = true;

  /* style */
  const __vue_inject_styles__$Y = undefined;
  /* scoped */
  const __vue_scope_id__$Y = undefined;
  /* module identifier */
  const __vue_module_identifier__$Y = undefined;
  /* functional template */
  const __vue_is_functional_template__$Y = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$Y = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$R, staticRenderFns: __vue_staticRenderFns__$R },
    __vue_inject_styles__$Y,
    __vue_script__$Y,
    __vue_scope_id__$Y,
    __vue_is_functional_template__$Y,
    __vue_module_identifier__$Y,
    false,
    undefined,
    undefined,
    undefined
  );

  var ElementLayoutInline = __vue_component__$Y;

//
//
//
//
//
//

  var script$X = {
    name: 'ElementLoader',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          loader: '',
        }
      }
    }
  };

var css_248z$U = "";
styleInject(css_248z$U);

/* script */
const __vue_script__$X = script$X;
/* template */
var __vue_render__$Q = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.classes.container }, [
    _c("span", { class: _vm.classes.loader }),
  ])
};
var __vue_staticRenderFns__$Q = [];
__vue_render__$Q._withStripped = true;

  /* style */
  const __vue_inject_styles__$X = undefined;
  /* scoped */
  const __vue_scope_id__$X = undefined;
  /* module identifier */
  const __vue_module_identifier__$X = undefined;
  /* functional template */
  const __vue_is_functional_template__$X = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$X = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$Q, staticRenderFns: __vue_staticRenderFns__$Q },
    __vue_inject_styles__$X,
    __vue_script__$X,
    __vue_scope_id__$X,
    __vue_is_functional_template__$X,
    __vue_module_identifier__$X,
    false,
    undefined,
    undefined,
    undefined
  );

  var ElementLoader = __vue_component__$X;

//
//
//
//
//
//
//
//
//

  var script$W = {
    name: 'ElementLabelFloating',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          label: '',
        }
      }
    }
  };

var css_248z$T = "";
styleInject(css_248z$T);

/* script */
const __vue_script__$W = script$W;
/* template */
var __vue_render__$P = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.classes.container }, [
    _c("span", {
      class: _vm.classes.label,
      domProps: { innerHTML: _vm._s(_vm.floating) },
    }),
  ])
};
var __vue_staticRenderFns__$P = [];
__vue_render__$P._withStripped = true;

  /* style */
  const __vue_inject_styles__$W = undefined;
  /* scoped */
  const __vue_scope_id__$W = undefined;
  /* module identifier */
  const __vue_module_identifier__$W = undefined;
  /* functional template */
  const __vue_is_functional_template__$W = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$W = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$P, staticRenderFns: __vue_staticRenderFns__$P },
    __vue_inject_styles__$W,
    __vue_script__$W,
    __vue_scope_id__$W,
    __vue_is_functional_template__$W,
    __vue_module_identifier__$W,
    false,
    undefined,
    undefined,
    undefined
  );

  var ElementLabelFloating = __vue_component__$W;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$V = {
    name: 'ElementLabel',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    }
  };

var css_248z$S = "";
styleInject(css_248z$S);

/* script */
const __vue_script__$V = script$V;
/* template */
var __vue_render__$O = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.label && _vm.isLabelComponent
    ? _c(
        "label",
        { class: _vm.classes.container, attrs: { for: _vm.name, id: _vm.id } },
        [
          _c(
            "span",
            { class: _vm.classes.wrapper },
            [
              _vm.isLabelComponent
                ? _c(_vm.label, { tag: "component" })
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c("ElementInfo", [_vm._t("info")], 2),
          _vm._v(" "),
          _c("ElementRequired", [_vm._t("required")], 2),
        ],
        1
      )
    : _vm.label
    ? _c(
        "label",
        { class: _vm.classes.container, attrs: { for: _vm.name, id: _vm.id } },
        [
          _c("span", {
            class: _vm.classes.wrapper,
            domProps: { innerHTML: _vm._s(_vm.label) },
          }),
          _vm._v(" "),
          _c("ElementInfo", [_vm._t("info")], 2),
          _vm._v(" "),
          _c("ElementRequired", [_vm._t("required")], 2),
        ],
        1
      )
    : _vm.isSlot
    ? _c(
        "label",
        { class: _vm.classes.container, attrs: { for: _vm.name, id: _vm.id } },
        [
          _c("span", { class: _vm.classes.wrapper }, [_vm._t("default")], 2),
          _vm._v(" "),
          _c("ElementInfo", [_vm._t("info")], 2),
          _vm._v(" "),
          _c("ElementRequired", [_vm._t("required")], 2),
        ],
        1
      )
    : _vm.hasLabel
    ? _c("label", {
        class: _vm.classes.container,
        attrs: { for: _vm.name, id: _vm.id },
      })
    : _vm._e()
};
var __vue_staticRenderFns__$O = [];
__vue_render__$O._withStripped = true;

  /* style */
  const __vue_inject_styles__$V = undefined;
  /* scoped */
  const __vue_scope_id__$V = undefined;
  /* module identifier */
  const __vue_module_identifier__$V = undefined;
  /* functional template */
  const __vue_is_functional_template__$V = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$V = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$O, staticRenderFns: __vue_staticRenderFns__$O },
    __vue_inject_styles__$V,
    __vue_script__$V,
    __vue_scope_id__$V,
    __vue_is_functional_template__$V,
    __vue_module_identifier__$V,
    false,
    undefined,
    undefined,
    undefined
  );

  var ElementLabel = __vue_component__$V;

//
//
//
//
//
//
//
//
//

  var script$U = {
    name: 'ElementInfo',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          content: '',
        }
      }
    }
  };

var css_248z$R = "";
styleInject(css_248z$R);

/* script */
const __vue_script__$U = script$U;
/* template */
var __vue_render__$N = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.info || _vm.isSlot
    ? _c(
        "span",
        {
          class: _vm.classes.container,
          on: { mouseover: _vm.handleMouseOver },
        },
        [
          _c("div", { class: _vm.classes.wrapper, attrs: { id: _vm.id } }, [
            _vm.isSlot
              ? _c(
                  "span",
                  { class: _vm.classes.content },
                  [_vm._t("default")],
                  2
                )
              : _c("span", {
                  class: _vm.classes.content,
                  domProps: { innerHTML: _vm._s(_vm.info) },
                }),
          ]),
        ]
      )
    : _vm._e()
};
var __vue_staticRenderFns__$N = [];
__vue_render__$N._withStripped = true;

  /* style */
  const __vue_inject_styles__$U = undefined;
  /* scoped */
  const __vue_scope_id__$U = undefined;
  /* module identifier */
  const __vue_module_identifier__$U = undefined;
  /* functional template */
  const __vue_is_functional_template__$U = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$U = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$N, staticRenderFns: __vue_staticRenderFns__$N },
    __vue_inject_styles__$U,
    __vue_script__$U,
    __vue_scope_id__$U,
    __vue_is_functional_template__$U,
    __vue_module_identifier__$U,
    false,
    undefined,
    undefined,
    undefined
  );

  var ElementInfo = __vue_component__$U;

//
//
//
//
//
//
//
//

  var script$T = {
    name: 'ElementDescription',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    }
  };

var css_248z$Q = "";
styleInject(css_248z$Q);

/* script */
const __vue_script__$T = script$T;
/* template */
var __vue_render__$M = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.description
    ? _c("div", {
        class: _vm.classes.container,
        attrs: { id: _vm.id },
        domProps: { innerHTML: _vm._s(_vm.description) },
      })
    : _vm.isSlot
    ? _c(
        "div",
        { class: _vm.classes.container, attrs: { id: _vm.id } },
        [_vm._t("default")],
        2
      )
    : _vm._e()
};
var __vue_staticRenderFns__$M = [];
__vue_render__$M._withStripped = true;

  /* style */
  const __vue_inject_styles__$T = undefined;
  /* scoped */
  const __vue_scope_id__$T = undefined;
  /* module identifier */
  const __vue_module_identifier__$T = undefined;
  /* functional template */
  const __vue_is_functional_template__$T = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$T = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$M, staticRenderFns: __vue_staticRenderFns__$M },
    __vue_inject_styles__$T,
    __vue_script__$T,
    __vue_scope_id__$T,
    __vue_is_functional_template__$T,
    __vue_module_identifier__$T,
    false,
    undefined,
    undefined,
    undefined
  );

  var ElementDescription = __vue_component__$T;

//
//
//
//
//
//
//
//
//
//

  var script$S = {
    name: 'ElementError',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    }
  };

var css_248z$P = "";
styleInject(css_248z$P);

/* script */
const __vue_script__$S = script$S;
/* template */
var __vue_render__$L = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.showError
    ? _c("div", {
        class: _vm.classes.container,
        attrs: { id: _vm.id, "aria-live": "assertive" },
        domProps: { innerHTML: _vm._s(_vm.error) },
      })
    : _vm._e()
};
var __vue_staticRenderFns__$L = [];
__vue_render__$L._withStripped = true;

  /* style */
  const __vue_inject_styles__$S = undefined;
  /* scoped */
  const __vue_scope_id__$S = undefined;
  /* module identifier */
  const __vue_module_identifier__$S = undefined;
  /* functional template */
  const __vue_is_functional_template__$S = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$S = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$L, staticRenderFns: __vue_staticRenderFns__$L },
    __vue_inject_styles__$S,
    __vue_script__$S,
    __vue_scope_id__$S,
    __vue_is_functional_template__$S,
    __vue_module_identifier__$S,
    false,
    undefined,
    undefined,
    undefined
  );

  var ElementError = __vue_component__$S;

//
//
//
//

  var script$R = {
    name: 'ElementMessage',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    }
  };

var css_248z$O = "";
styleInject(css_248z$O);

/* script */
const __vue_script__$R = script$R;
/* template */
var __vue_render__$K = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.message
    ? _c("div", {
        class: _vm.classes.container,
        domProps: { innerHTML: _vm._s(_vm.message) },
      })
    : _vm._e()
};
var __vue_staticRenderFns__$K = [];
__vue_render__$K._withStripped = true;

  /* style */
  const __vue_inject_styles__$R = undefined;
  /* scoped */
  const __vue_scope_id__$R = undefined;
  /* module identifier */
  const __vue_module_identifier__$R = undefined;
  /* functional template */
  const __vue_is_functional_template__$R = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$R = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$K, staticRenderFns: __vue_staticRenderFns__$K },
    __vue_inject_styles__$R,
    __vue_script__$R,
    __vue_scope_id__$R,
    __vue_is_functional_template__$R,
    __vue_module_identifier__$R,
    false,
    undefined,
    undefined,
    undefined
  );

  var ElementMessage = __vue_component__$R;

//
//
//
//

  var script$Q = {
    name: 'ElementRequired',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    }
  };

var css_248z$N = "";
styleInject(css_248z$N);

/* script */
const __vue_script__$Q = script$Q;
/* template */
var __vue_render__$J = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.visible
    ? _c(
        "div",
        { class: _vm.classes.container },
        [
          _vm._t("default", function () {
            return [_vm._v("*")]
          }),
        ],
        2
      )
    : _vm._e()
};
var __vue_staticRenderFns__$J = [];
__vue_render__$J._withStripped = true;

  /* style */
  const __vue_inject_styles__$Q = undefined;
  /* scoped */
  const __vue_scope_id__$Q = undefined;
  /* module identifier */
  const __vue_module_identifier__$Q = undefined;
  /* functional template */
  const __vue_is_functional_template__$Q = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$Q = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$J, staticRenderFns: __vue_staticRenderFns__$J },
    __vue_inject_styles__$Q,
    __vue_script__$Q,
    __vue_scope_id__$Q,
    __vue_is_functional_template__$Q,
    __vue_module_identifier__$Q,
    false,
    undefined,
    undefined,
    undefined
  );

  var ElementRequired = __vue_component__$Q;

//
//
//
//
//
//
//
//

  var script$P = {
    name: 'ElementText',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    }
  };

var css_248z$M = "";
styleInject(css_248z$M);

/* script */
const __vue_script__$P = script$P;
/* template */
var __vue_render__$I = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.content
    ? _c("div", {
        class: _vm.classes.container,
        domProps: { innerHTML: _vm._s(_vm.content) },
      })
    : _vm.isSlot
    ? _c("div", { class: _vm.classes.container }, [_vm._t("default")], 2)
    : _vm._e()
};
var __vue_staticRenderFns__$I = [];
__vue_render__$I._withStripped = true;

  /* style */
  const __vue_inject_styles__$P = undefined;
  /* scoped */
  const __vue_scope_id__$P = undefined;
  /* module identifier */
  const __vue_module_identifier__$P = undefined;
  /* functional template */
  const __vue_is_functional_template__$P = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$P = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$I, staticRenderFns: __vue_staticRenderFns__$I },
    __vue_inject_styles__$P,
    __vue_script__$P,
    __vue_scope_id__$P,
    __vue_is_functional_template__$P,
    __vue_module_identifier__$P,
    false,
    undefined,
    undefined,
    undefined
  );

  var ElementText = __vue_component__$P;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$O = {
    name: 'ElementAddon',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    }
  };

var css_248z$L = "";
styleInject(css_248z$L);

/* script */
const __vue_script__$O = script$O;
/* template */
var __vue_render__$H = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.addon && _vm.isAddonComponent
    ? _c("div", { class: _vm.classes.container }, [
        _c(
          "div",
          { class: _vm.classes.wrapper },
          [_c(_vm.addon, { tag: "component" })],
          1
        ),
      ])
    : _vm.addon
    ? _c("div", { class: _vm.classes.container }, [
        _c("div", {
          class: _vm.classes.wrapper,
          domProps: { innerHTML: _vm._s(_vm.addon) },
        }),
      ])
    : _vm.isSlot
    ? _c("div", { class: _vm.classes.container }, [
        _c("div", { class: _vm.classes.wrapper }, [_vm._t("default")], 2),
      ])
    : _vm._e()
};
var __vue_staticRenderFns__$H = [];
__vue_render__$H._withStripped = true;

  /* style */
  const __vue_inject_styles__$O = undefined;
  /* scoped */
  const __vue_scope_id__$O = undefined;
  /* module identifier */
  const __vue_module_identifier__$O = undefined;
  /* functional template */
  const __vue_is_functional_template__$O = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$O = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$H, staticRenderFns: __vue_staticRenderFns__$H },
    __vue_inject_styles__$O,
    __vue_script__$O,
    __vue_scope_id__$O,
    __vue_is_functional_template__$O,
    __vue_module_identifier__$O,
    false,
    undefined,
    undefined,
    undefined
  );

  var ElementAddon = __vue_component__$O;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$N = {
    name: 'ElementAddonOptions',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          caret: '',
          dropdown: '',
          option: '',
        },
      }
    },
  };

var css_248z$K = "";
styleInject(css_248z$K);

/* script */
const __vue_script__$N = script$N;
/* template */
var __vue_render__$G = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.classes.container }, [
    _c(
      "div",
      _vm._b(
        {
          ref: "selector",
          class: _vm.classes.wrapper,
          attrs: {
            "aria-expanded": _vm.isOpen,
            "aria-haspopup": "listbox",
            "aria-controls": "dropdown-" + _vm.el$.fieldId,
            role: "button",
            tabindex: _vm.el$.isDisabled || _vm.el$.isReadonly ? undefined : 0,
          },
          on: {
            click: _vm.handleSelectorClick,
            keydown: _vm.handleSelectorKeydown,
          },
        },
        "div",
        _vm.aria,
        false
      ),
      [
        Object.keys(_vm.selected).length
          ? [
              _vm.selected.valueDisplay &&
              typeof _vm.selected.valueDisplay === "object" && [
                _vm.selected.valueDisplay.render ||
                  _vm.selected.valueDisplay.template,
              ]
                ? _c(_vm.selected.valueDisplay, {
                    tag: "component",
                    attrs: { el$: _vm.el$, option: _vm.selected },
                  })
                : _vm.selected.valueDisplay &&
                  typeof _vm.selected.valueDisplay === "function"
                ? _c("div", {
                    domProps: {
                      innerHTML: _vm._s(
                        _vm.selected.valueDisplay(_vm.selected, _vm.el$)
                      ),
                    },
                  })
                : _c("div", {
                    domProps: { innerHTML: _vm._s(_vm.selected.label) },
                  }),
            ]
          : [
              _vm.placeholder &&
              typeof _vm.placeholder === "object" && [
                _vm.placeholder.render || _vm.placeholder.template,
              ]
                ? _c(_vm.placeholder, {
                    tag: "component",
                    attrs: { el$: _vm.el$, option: _vm.selected },
                  })
                : _vm.placeholder && typeof _vm.placeholder === "function"
                ? _c("div", {
                    domProps: {
                      innerHTML: _vm._s(_vm.placeholder(_vm.selected, _vm.el$)),
                    },
                  })
                : _c("div", {
                    domProps: { innerHTML: _vm._s(_vm.placeholder) },
                  }),
            ],
        _vm._v(" "),
        _c("div", { class: _vm.classes.caret }),
        _vm._v(" "),
        _c("Teleport", { attrs: { to: "body" } }, [
          _vm.isOpen
            ? _c(
                "div",
                {
                  ref: "dropdown",
                  class: _vm.classes.dropdown,
                  style: _vm.style,
                  attrs: {
                    "data-dropdown-for": _vm.el$.fieldId,
                    id: "dropdown-" + _vm.el$.fieldId,
                    role: "listbox",
                    tabindex: "-1",
                  },
                },
                _vm._l(_vm.options, function (option, index) {
                  return _c(
                    "div",
                    {
                      key: option.value,
                      class: _vm.classes.optionWrapper,
                      on: {
                        mouseover: function ($event) {
                          return _vm.handleOptionPoint(option)
                        },
                        click: function ($event) {
                          return _vm.handleOptionClick(option)
                        },
                      },
                    },
                    [
                      option.display &&
                      typeof option.display === "object" && [
                        option.display.render || option.display.template,
                      ]
                        ? _c(option.display, {
                            tag: "component",
                            attrs: {
                              el$: _vm.el$,
                              option: option,
                              index: index,
                              selected: _vm.selected.index === option.index,
                              pointed: _vm.pointed.index === option.index,
                              "data-index": option.index,
                              "data-selected":
                                _vm.selected.index === option.index,
                              role: "option",
                              tabindex:
                                _vm.pointed.index === option.index ? 0 : -1,
                              "aria-selected":
                                _vm.selected.index === option.index,
                            },
                          })
                        : option.display && typeof option.display === "function"
                        ? _c("div", {
                            class: _vm.classes.option(option, index, _vm.el$),
                            attrs: {
                              "data-index": option.index,
                              "data-selected":
                                _vm.selected.index === option.index,
                              role: "option",
                              tabindex:
                                _vm.pointed.index === option.index ? 0 : -1,
                              "aria-selected":
                                _vm.selected.index === option.index,
                            },
                            domProps: {
                              innerHTML: _vm._s(
                                option.display(
                                  option,
                                  index,
                                  _vm.selected.index === option.index,
                                  _vm.pointed.index === option.index,
                                  _vm.el$
                                )
                              ),
                            },
                          })
                        : _c("div", {
                            class: _vm.classes.option(option, index, _vm.el$),
                            attrs: {
                              "data-index": option.index,
                              "data-selected":
                                _vm.selected.index === option.index,
                              role: "option",
                              tabindex:
                                _vm.pointed.index === option.index ? 0 : -1,
                              "aria-selected":
                                _vm.selected.index === option.index,
                            },
                            domProps: { innerHTML: _vm._s(option.label) },
                          }),
                    ],
                    1
                  )
                }),
                0
              )
            : _vm._e(),
        ]),
      ],
      2
    ),
  ])
};
var __vue_staticRenderFns__$G = [];
__vue_render__$G._withStripped = true;

  /* style */
  const __vue_inject_styles__$N = undefined;
  /* scoped */
  const __vue_scope_id__$N = undefined;
  /* module identifier */
  const __vue_module_identifier__$N = undefined;
  /* functional template */
  const __vue_is_functional_template__$N = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$N = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$G, staticRenderFns: __vue_staticRenderFns__$G },
    __vue_inject_styles__$N,
    __vue_script__$N,
    __vue_scope_id__$N,
    __vue_is_functional_template__$N,
    __vue_module_identifier__$N,
    false,
    undefined,
    undefined,
    undefined
  );

  var ElementAddonOptions = __vue_component__$N;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$M = {
    name: 'ButtonElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          button: '',
        },
      }
    }
  };

var css_248z$J = "";
styleInject(css_248z$J);

/* script */
const __vue_script__$M = script$M;
/* template */
var __vue_render__$F = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _vm.buttonType === "button"
                ? [
                    _vm.buttonLabel && _vm.isButtonLabelComponent
                      ? _c(
                          "button",
                          _vm._b(
                            {
                              class: _vm.classes.button,
                              attrs: {
                                tabindex:
                                  _vm.isDisabled || _vm.isLoading
                                    ? -1
                                    : undefined,
                                disabled: _vm.isDisabled,
                              },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault();
                                  return _vm.handleClick.apply(null, arguments)
                                },
                              },
                            },
                            "button",
                            Object.assign({}, _vm.button, _vm.aria),
                            false
                          ),
                          [_c(_vm.buttonLabel, { tag: "component" })],
                          1
                        )
                      : _vm.buttonLabel
                      ? _c(
                          "button",
                          _vm._b(
                            {
                              class: _vm.classes.button,
                              attrs: {
                                tabindex:
                                  _vm.isDisabled || _vm.isLoading
                                    ? -1
                                    : undefined,
                                disabled: _vm.isDisabled,
                              },
                              domProps: {
                                innerHTML: _vm._s(_vm.resolvedButtonLabel),
                              },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault();
                                  return _vm.handleClick.apply(null, arguments)
                                },
                              },
                            },
                            "button",
                            Object.assign({}, _vm.button, _vm.aria),
                            false
                          )
                        )
                      : _c(
                          "button",
                          _vm._b(
                            {
                              class: _vm.classes.button,
                              attrs: {
                                tabindex:
                                  _vm.isDisabled || _vm.isLoading
                                    ? -1
                                    : undefined,
                                disabled: _vm.isDisabled,
                              },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault();
                                  return _vm.handleClick.apply(null, arguments)
                                },
                              },
                            },
                            "button",
                            Object.assign({}, _vm.button, _vm.aria),
                            false
                          ),
                          [
                            _vm._t(
                              "default",
                              function () {
                                return [
                                  _c(_vm.fieldSlots.default, {
                                    tag: "component",
                                    attrs: { el$: _vm.el$ },
                                  }),
                                ]
                              },
                              { el$: _vm.el$ }
                            ),
                          ],
                          2
                        ),
                  ]
                : [
                    _vm.buttonLabel && _vm.isButtonLabelComponent
                      ? _c(
                          "a",
                          _vm._b(
                            {
                              class: _vm.classes.button,
                              attrs: {
                                tabindex:
                                  _vm.isDisabled || _vm.isLoading
                                    ? -1
                                    : undefined,
                              },
                              on: { click: _vm.handleClick },
                            },
                            "a",
                            Object.assign({}, _vm.button, _vm.aria),
                            false
                          ),
                          [_c(_vm.buttonLabel, { tag: "component" })],
                          1
                        )
                      : _vm.buttonLabel
                      ? _c(
                          "a",
                          _vm._b(
                            {
                              class: _vm.classes.button,
                              attrs: {
                                tabindex:
                                  _vm.isDisabled || _vm.isLoading
                                    ? -1
                                    : undefined,
                              },
                              domProps: {
                                innerHTML: _vm._s(_vm.resolvedButtonLabel),
                              },
                              on: { click: _vm.handleClick },
                            },
                            "a",
                            Object.assign({}, _vm.button, _vm.aria),
                            false
                          )
                        )
                      : _c(
                          "a",
                          _vm._b(
                            {
                              class: _vm.classes.button,
                              attrs: {
                                tabindex:
                                  _vm.isDisabled || _vm.isLoading
                                    ? -1
                                    : undefined,
                              },
                              on: { click: _vm.handleClick },
                            },
                            "a",
                            Object.assign({}, _vm.button, _vm.aria),
                            false
                          ),
                          [
                            _vm._t(
                              "default",
                              function () {
                                return [
                                  _c(_vm.fieldSlots.default, {
                                    tag: "component",
                                    attrs: { el$: _vm.el$ },
                                  }),
                                ]
                              },
                              { el$: _vm.el$ }
                            ),
                          ],
                          2
                        ),
                  ],
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$F = [];
__vue_render__$F._withStripped = true;

  /* style */
  const __vue_inject_styles__$M = undefined;
  /* scoped */
  const __vue_scope_id__$M = undefined;
  /* module identifier */
  const __vue_module_identifier__$M = undefined;
  /* functional template */
  const __vue_is_functional_template__$M = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$M = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$F, staticRenderFns: __vue_staticRenderFns__$F },
    __vue_inject_styles__$M,
    __vue_script__$M,
    __vue_scope_id__$M,
    __vue_is_functional_template__$M,
    __vue_module_identifier__$M,
    false,
    undefined,
    undefined,
    undefined
  );

  var ButtonElement = __vue_component__$M;

//
//
//
//
//
//
//
//
//
//
//
//

  var script$L = {
    name: 'CaptchaElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          captcha: '',
        },
      }
    },
  };

var css_248z$I = "";
styleInject(css_248z$I);

/* script */
const __vue_script__$L = script$L;
/* template */
var __vue_render__$E = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _vm.shouldVerify
                ? _c("div", { class: _vm.classes.wrapper }, [
                    _c("div", {
                      ref: "input",
                      class: _vm.classes.captcha,
                      attrs: { id: _vm.fieldId },
                    }),
                  ])
                : _vm._e(),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$E = [];
__vue_render__$E._withStripped = true;

  /* style */
  const __vue_inject_styles__$L = undefined;
  /* scoped */
  const __vue_scope_id__$L = undefined;
  /* module identifier */
  const __vue_module_identifier__$L = undefined;
  /* functional template */
  const __vue_is_functional_template__$L = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$L = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$E, staticRenderFns: __vue_staticRenderFns__$E },
    __vue_inject_styles__$L,
    __vue_script__$L,
    __vue_scope_id__$L,
    __vue_is_functional_template__$L,
    __vue_module_identifier__$L,
    false,
    undefined,
    undefined,
    undefined
  );

  var CaptchaElement = __vue_component__$L;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$K = {
    name: 'CheckboxElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          input: '',
          text: '',
        }
      }
    }
  };

var css_248z$H = "";
styleInject(css_248z$H);

/* script */
const __vue_script__$K = script$K;
/* template */
var __vue_render__$D = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _c("label", { class: _vm.classes.wrapper }, [
                _c(
                  "input",
                  _vm._b(
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.value,
                          expression: "value",
                        },
                      ],
                      ref: "input",
                      class: _vm.classes.input,
                      attrs: {
                        type: "checkbox",
                        name: _vm.path,
                        id: _vm.fieldId,
                        "true-value": _vm.trueValue,
                        "false-value": _vm.falseValue,
                        disabled: _vm.isDisabled,
                      },
                      domProps: {
                        checked: Array.isArray(_vm.value)
                          ? _vm._i(_vm.value, null) > -1
                          : _vm._q(_vm.value, _vm.trueValue),
                      },
                      on: {
                        change: function ($event) {
                          var $$a = _vm.value,
                            $$el = $event.target,
                            $$c = $$el.checked ? _vm.trueValue : _vm.falseValue;
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v);
                            if ($$el.checked) {
                              $$i < 0 && (_vm.value = $$a.concat([$$v]));
                            } else {
                              $$i > -1 &&
                                (_vm.value = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)));
                            }
                          } else {
                            _vm.value = $$c;
                          }
                        },
                      },
                    },
                    "input",
                    _vm.aria,
                    false
                  )
                ),
                _vm._v(" "),
                _vm.Text
                  ? _c("span", {
                      class: _vm.classes.text,
                      domProps: { innerHTML: _vm._s(_vm.Text) },
                    })
                  : _c(
                      "span",
                      { class: _vm.classes.text },
                      [
                        _vm._t(
                          "default",
                          function () {
                            return [
                              _c(_vm.fieldSlots.default, {
                                tag: "component",
                                attrs: { el$: _vm.el$ },
                              }),
                            ]
                          },
                          { el$: _vm.el$ }
                        ),
                      ],
                      2
                    ),
              ]),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$D = [];
__vue_render__$D._withStripped = true;

  /* style */
  const __vue_inject_styles__$K = undefined;
  /* scoped */
  const __vue_scope_id__$K = undefined;
  /* module identifier */
  const __vue_module_identifier__$K = undefined;
  /* functional template */
  const __vue_is_functional_template__$K = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$K = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$D, staticRenderFns: __vue_staticRenderFns__$D },
    __vue_inject_styles__$K,
    __vue_script__$K,
    __vue_scope_id__$K,
    __vue_is_functional_template__$K,
    __vue_module_identifier__$K,
    false,
    undefined,
    undefined,
    undefined
  );

  var CheckboxElement = __vue_component__$K;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$J = {
    name: 'CheckboxgroupElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    }
  };

var css_248z$G = "";
styleInject(css_248z$G);

/* script */
const __vue_script__$J = script$J;
/* template */
var __vue_render__$C = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _c(
                "div",
                {
                  class: _vm.classes.wrapper,
                  attrs: { "aria-labelledby": _vm.labelId, role: "group" },
                },
                _vm._l(_vm.resolvedOptions, function (item, index, key) {
                  return _c("CheckboxgroupCheckbox", {
                    key: key,
                    attrs: {
                      items: _vm.resolvedOptions,
                      index: index,
                      item: item,
                      value: item.value,
                      attrs: _vm.aria,
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function (scope) {
                            return [
                              _vm._t(
                                "checkbox",
                                function () {
                                  return [
                                    _c(
                                      _vm.fieldSlots.checkbox,
                                      _vm._b(
                                        {
                                          tag: "component",
                                          attrs: { el$: _vm.el$ },
                                        },
                                        "component",
                                        scope,
                                        false
                                      )
                                    ),
                                  ]
                                },
                                { el$: _vm.el$ },
                                scope
                              ),
                            ]
                          },
                        },
                      ],
                      null,
                      true
                    ),
                  })
                }),
                1
              ),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$C = [];
__vue_render__$C._withStripped = true;

  /* style */
  const __vue_inject_styles__$J = undefined;
  /* scoped */
  const __vue_scope_id__$J = undefined;
  /* module identifier */
  const __vue_module_identifier__$J = undefined;
  /* functional template */
  const __vue_is_functional_template__$J = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$J = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$C, staticRenderFns: __vue_staticRenderFns__$C },
    __vue_inject_styles__$J,
    __vue_script__$J,
    __vue_scope_id__$J,
    __vue_is_functional_template__$J,
    __vue_module_identifier__$J,
    false,
    undefined,
    undefined,
    undefined
  );

  var CheckboxgroupElement_blocks = __vue_component__$J;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$I = {
    name: 'DateElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          inputWrapper: '',
          input: '',
        }
      }
    }
  };

var css_248z$F = "";
styleInject(css_248z$F);

/* script */
const __vue_script__$I = script$I;
/* template */
var __vue_render__$B = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _c(
                "div",
                { class: _vm.classes.inputContainer },
                [
                  _vm.hasAddonBefore
                    ? _c(
                        "ElementAddon",
                        { attrs: { type: "before" } },
                        [
                          _vm._t("addon-before", function () {
                            return [
                              _c(_vm.fieldSlots["addon-before"], {
                                tag: "component",
                                attrs: { el$: _vm.el$ },
                              }),
                            ]
                          }),
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.hasAddonAfter
                    ? _c(
                        "ElementAddon",
                        { attrs: { type: "after" } },
                        [
                          _vm._t("addon-after", function () {
                            return [
                              _c(_vm.fieldSlots["addon-after"], {
                                tag: "component",
                                attrs: { el$: _vm.el$ },
                              }),
                            ]
                          }),
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.hasFloating && !_vm.empty
                    ? _c("ElementLabelFloating", {
                        attrs: { visible: !_vm.empty },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { class: _vm.classes.inputWrapper },
                    [
                      _c("DatepickerWrapper", {
                        ref: "input",
                        class: _vm.classes.input,
                        attrs: {
                          value: _vm.model,
                          options: _vm.fieldOptions,
                          id: _vm.fieldId,
                          placeholder: _vm.Placeholder,
                          disabled: _vm.isDisabled,
                          readonly: _vm.isReadonly,
                          attrs: _vm.aria,
                        },
                        on: { change: _vm.handleChange },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$B = [];
__vue_render__$B._withStripped = true;

  /* style */
  const __vue_inject_styles__$I = undefined;
  /* scoped */
  const __vue_scope_id__$I = undefined;
  /* module identifier */
  const __vue_module_identifier__$I = undefined;
  /* functional template */
  const __vue_is_functional_template__$I = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$I = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$B, staticRenderFns: __vue_staticRenderFns__$B },
    __vue_inject_styles__$I,
    __vue_script__$I,
    __vue_scope_id__$I,
    __vue_is_functional_template__$I,
    __vue_module_identifier__$I,
    false,
    undefined,
    undefined,
    undefined
  );

  var DateElement = __vue_component__$I;

var script$H = {
    name: 'DatesElement',
    render: DateElement.render,
    staticRenderFns: DateElement.staticRenderFns,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
        }
      }
    }
  };

var css_248z$E = "";
styleInject(css_248z$E);

/* script */
const __vue_script__$H = script$H;
/* template */

  /* style */
  const __vue_inject_styles__$H = undefined;
  /* scoped */
  const __vue_scope_id__$H = undefined;
  /* module identifier */
  const __vue_module_identifier__$H = undefined;
  /* functional template */
  const __vue_is_functional_template__$H = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$H = /*#__PURE__*/normalizeComponent(
    {},
    __vue_inject_styles__$H,
    __vue_script__$H,
    __vue_scope_id__$H,
    __vue_is_functional_template__$H,
    __vue_module_identifier__$H,
    false,
    undefined,
    undefined,
    undefined
  );

  var DatesElement = __vue_component__$H;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$G = {
    name: 'FileElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          button: '',
        }
      }
    }
  };

var css_248z$D = "";
styleInject(css_248z$D);

/* script */
const __vue_script__$G = script$G;
/* template */
var __vue_render__$A = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _vm.drop && _vm.canDrop && _vm.canSelect
                ? _c("DragAndDrop", {
                    attrs: {
                      title:
                        _vm.form$.translations.vueform.elements[_vm.type]
                          .dndTitle,
                      description:
                        _vm.form$.translations.vueform.elements[_vm.type]
                          .dndDescription,
                      disabled: _vm.isDisabled,
                    },
                    on: { click: _vm.handleClick, drop: _vm.handleDrop },
                  })
                : _vm.canSelect
                ? _c(
                    "div",
                    _vm._b(
                      {
                        class: _vm.classes.button,
                        attrs: {
                          "aria-labelledby": _vm.labelId,
                          "aria-placeholder":
                            _vm.form$.translations.vueform.elements[_vm.type]
                              .select,
                          role: "button",
                          tabindex: "0",
                        },
                        on: {
                          click: function ($event) {
                            $event.preventDefault();
                            return _vm.handleClick.apply(null, arguments)
                          },
                          keypress: function ($event) {
                            if (
                              !$event.type.indexOf("key") &&
                              _vm._k(
                                $event.keyCode,
                                "enter",
                                13,
                                $event.key,
                                "Enter"
                              ) &&
                              _vm._k($event.keyCode, "space", 32, $event.key, [
                                " ",
                                "Spacebar",
                              ])
                            ) {
                              return null
                            }
                            return _vm.handleClick.apply(null, arguments)
                          },
                        },
                      },
                      "div",
                      _vm.aria,
                      false
                    ),
                    [
                      _vm._v(
                        _vm._s(
                          _vm.form$.translations.vueform.elements[_vm.type]
                            .select
                        )
                      ),
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.canSelect && !_vm.isDisabled && !_vm.preparing
                ? _c("input", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: false,
                        expression: "false",
                      },
                    ],
                    ref: "input",
                    attrs: {
                      id: _vm.fieldId,
                      type: "file",
                      accept: _vm.accept,
                    },
                    on: { change: _vm.handleChange },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm._t("preview", function () {
                return [
                  _c("FilePreview", {
                    key: _vm.view,
                    attrs: { attrs: _vm.aria },
                  }),
                ]
              }),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$A = [];
__vue_render__$A._withStripped = true;

  /* style */
  const __vue_inject_styles__$G = undefined;
  /* scoped */
  const __vue_scope_id__$G = undefined;
  /* module identifier */
  const __vue_module_identifier__$G = undefined;
  /* functional template */
  const __vue_is_functional_template__$G = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$G = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$A, staticRenderFns: __vue_staticRenderFns__$A },
    __vue_inject_styles__$G,
    __vue_script__$G,
    __vue_scope_id__$G,
    __vue_is_functional_template__$G,
    __vue_module_identifier__$G,
    false,
    undefined,
    undefined,
    undefined
  );

  var FileElement = __vue_component__$G;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$F = {
    name: 'GridElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    },
  };

var css_248z$C = "";
styleInject(css_248z$C);

/* script */
const __vue_script__$F = script$F;
/* template */
var __vue_render__$z = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    attrs: { multiple: true },
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _c(
                "div",
                {
                  class: _vm.classes.grid,
                  style: _vm.gridStyle,
                  attrs: { role: "group", "aria-labelledby": _vm.labelId },
                },
                _vm._l(_vm.cells, function (cell, c) {
                  return _c(
                    "div",
                    _vm._b(
                      {
                        class: _vm.classes.cell(cell),
                        style: cell.style,
                        attrs: {
                          "data-col": cell.col,
                          "data-row": cell.row,
                          "data-col-start": cell.colStart,
                          "data-col-end": cell.colEnd,
                          "data-row-start": cell.rowStart,
                          "data-row-end": cell.rowEnd,
                        },
                      },
                      "div",
                      cell.attrs,
                      false
                    ),
                    [
                      cell.schema
                        ? _c(
                            "div",
                            { class: _vm.classes.fieldWrapper(cell) },
                            [
                              _vm._t(cell.slot, function () {
                                return [
                                  _c(
                                    cell.component,
                                    _vm._b(
                                      {
                                        key: cell.name,
                                        tag: "component",
                                        attrs: { name: cell.name },
                                      },
                                      "component",
                                      cell.schema,
                                      false
                                    )
                                  ),
                                ]
                              }),
                            ],
                            2
                          )
                        : _c(
                            "div",
                            { class: _vm.classes.textWrapper(cell) },
                            [
                              _vm._t(cell.slot, function () {
                                return [
                                  cell.content
                                    ? _c("span", {
                                        class: _vm.classes.text,
                                        domProps: {
                                          innerHTML: _vm._s(cell.content),
                                        },
                                      })
                                    : _vm._e(),
                                ]
                              }),
                            ],
                            2
                          ),
                    ]
                  )
                }),
                0
              ),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$z = [];
__vue_render__$z._withStripped = true;

  /* style */
  const __vue_inject_styles__$F = undefined;
  /* scoped */
  const __vue_scope_id__$F = undefined;
  /* module identifier */
  const __vue_module_identifier__$F = undefined;
  /* functional template */
  const __vue_is_functional_template__$F = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$F = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$z, staticRenderFns: __vue_staticRenderFns__$z },
    __vue_inject_styles__$F,
    __vue_script__$F,
    __vue_scope_id__$F,
    __vue_is_functional_template__$F,
    __vue_module_identifier__$F,
    false,
    undefined,
    undefined,
    undefined
  );

  var GridElement = __vue_component__$F;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$E = {
    name: 'GroupElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    },
  };

var css_248z$B = "";
styleInject(css_248z$B);

/* script */
const __vue_script__$E = script$E;
/* template */
var __vue_render__$y = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    attrs: { multiple: true },
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _c(
                "div",
                {
                  class: _vm.classes.wrapper,
                  attrs: { role: "group", "aria-labelledby": _vm.labelId },
                },
                [
                  _vm._t("default", function () {
                    return _vm._l(_vm.children, function (element, name) {
                      return _c(
                        _vm.component(element),
                        _vm._b(
                          {
                            key: name,
                            tag: "component",
                            attrs: { name: name },
                          },
                          "component",
                          element,
                          false
                        )
                      )
                    })
                  }),
                ],
                2
              ),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$y = [];
__vue_render__$y._withStripped = true;

  /* style */
  const __vue_inject_styles__$E = undefined;
  /* scoped */
  const __vue_scope_id__$E = undefined;
  /* module identifier */
  const __vue_module_identifier__$E = undefined;
  /* functional template */
  const __vue_is_functional_template__$E = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$E = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$y, staticRenderFns: __vue_staticRenderFns__$y },
    __vue_inject_styles__$E,
    __vue_script__$E,
    __vue_scope_id__$E,
    __vue_is_functional_template__$E,
    __vue_module_identifier__$E,
    false,
    undefined,
    undefined,
    undefined
  );

  var GroupElement = __vue_component__$E;

//
//
//
//
//
//
//
//
//
//
//
//

  var script$D = {
    name: 'HiddenElement',
    data() {
      return {
        merge: true,
        defaultClasses: {}
      }
    },
  };

var css_248z$A = "";
styleInject(css_248z$A);

/* script */
const __vue_script__$D = script$D;
/* template */
var __vue_render__$x = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return !_vm.meta
    ? _c("span", { ref: "container" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.value,
              expression: "value",
            },
          ],
          ref: "input",
          attrs: { type: "hidden", name: _vm.name, id: _vm.fieldId },
          domProps: { value: _vm.value },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.value = $event.target.value;
            },
          },
        }),
      ])
    : _vm._e()
};
var __vue_staticRenderFns__$x = [];
__vue_render__$x._withStripped = true;

  /* style */
  const __vue_inject_styles__$D = undefined;
  /* scoped */
  const __vue_scope_id__$D = undefined;
  /* module identifier */
  const __vue_module_identifier__$D = undefined;
  /* functional template */
  const __vue_is_functional_template__$D = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$D = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$x, staticRenderFns: __vue_staticRenderFns__$x },
    __vue_inject_styles__$D,
    __vue_script__$D,
    __vue_scope_id__$D,
    __vue_is_functional_template__$D,
    __vue_module_identifier__$D,
    false,
    undefined,
    undefined,
    undefined
  );

  var HiddenElement = __vue_component__$D;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$C = {
    name: 'ListElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          list: '',
          listItem: '',
          handle: '',
          handleIcon: '',
          remove: '',
          removeIcon: '',
          add: '',
        },
      }
    },
  };

var css_248z$z = "";
styleInject(css_248z$z);

/* script */
const __vue_script__$C = script$C;
/* template */
var __vue_render__$w = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _c(
                "div",
                {
                  ref: "list",
                  class: _vm.classes.list,
                  attrs: { role: "list", "aria-labelledby": _vm.labelId },
                },
                _vm._l(_vm.value, function (val, i) {
                  return _c(
                    "div",
                    {
                      key: i,
                      class: _vm.classes.listItem,
                      attrs: {
                        role: "listitem",
                        "data-id": _vm.path + "-" + i,
                      },
                    },
                    [
                      _vm._t(
                        "default",
                        function () {
                          return [
                            _vm.prototype.type
                              ? _c(
                                  _vm.component(_vm.prototype),
                                  _vm._b(
                                    {
                                      key: i,
                                      tag: "component",
                                      attrs: { name: i },
                                    },
                                    "component",
                                    _vm.prototype,
                                    false
                                  )
                                )
                              : _vm._e(),
                          ]
                        },
                        { index: i }
                      ),
                      _vm._v(" "),
                      _vm.hasSort
                        ? _c(
                            "span",
                            {
                              class: _vm.classes.handle,
                              attrs: { "data-handle": "" },
                            },
                            [_c("span", { class: _vm.classes.handleIcon })]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.hasRemove
                        ? _c(
                            "div",
                            {
                              class: _vm.classes.remove,
                              attrs: {
                                "aria-roledescription":
                                  _vm.form$.translations.vueform.a11y.list
                                    .remove,
                                id: _vm.path + "-" + i + "-remove-button",
                                role: "button",
                                tabindex: "0",
                              },
                              on: {
                                click: function ($event) {
                                  $event.preventDefault();
                                  return _vm.handleRemove(i)
                                },
                                keypress: function ($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "space",
                                      32,
                                      $event.key,
                                      [" ", "Spacebar"]
                                    ) &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.handleRemove(i)
                                },
                              },
                            },
                            [_c("span", { class: _vm.classes.removeIcon })]
                          )
                        : _vm._e(),
                    ],
                    2
                  )
                }),
                0
              ),
              _vm._v(" "),
              _vm.hasAdd
                ? _c("div", {
                    class: _vm.classes.add,
                    attrs: {
                      id: _vm.fieldId + "-add-button",
                      role: "button",
                      tabindex: "0",
                    },
                    domProps: { innerHTML: _vm._s(_vm.addLabel) },
                    on: {
                      click: function ($event) {
                        $event.preventDefault();
                        return _vm.handleAdd.apply(null, arguments)
                      },
                      keypress: function ($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          ) &&
                          _vm._k($event.keyCode, "space", 32, $event.key, [
                            " ",
                            "Spacebar",
                          ])
                        ) {
                          return null
                        }
                        return _vm.handleAdd.apply(null, arguments)
                      },
                    },
                  })
                : _vm._e(),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$w = [];
__vue_render__$w._withStripped = true;

  /* style */
  const __vue_inject_styles__$C = undefined;
  /* scoped */
  const __vue_scope_id__$C = undefined;
  /* module identifier */
  const __vue_module_identifier__$C = undefined;
  /* functional template */
  const __vue_is_functional_template__$C = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$C = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$w, staticRenderFns: __vue_staticRenderFns__$w },
    __vue_inject_styles__$C,
    __vue_script__$C,
    __vue_scope_id__$C,
    __vue_is_functional_template__$C,
    __vue_module_identifier__$C,
    false,
    undefined,
    undefined,
    undefined
  );

  var ListElement = __vue_component__$C;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$B = {
    name: 'LocationElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
        }
      }
    }
  };

var css_248z$y = "";
styleInject(css_248z$y);

/* script */
const __vue_script__$B = script$B;
/* template */
var __vue_render__$v = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _c(
                "div",
                { class: _vm.classes.inputContainer },
                [
                  _vm.hasAddonBefore
                    ? _c(
                        "ElementAddon",
                        { attrs: { type: "before" } },
                        [
                          _vm._t("addon-before", function () {
                            return [
                              _c(_vm.fieldSlots["addon-before"], {
                                tag: "component",
                                attrs: { el$: _vm.el$ },
                              }),
                            ]
                          }),
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.hasAddonAfter
                    ? _c(
                        "ElementAddon",
                        { attrs: { type: "after" } },
                        [
                          _vm._t("addon-after", function () {
                            return [
                              _c(_vm.fieldSlots["addon-after"], {
                                tag: "component",
                                attrs: { el$: _vm.el$ },
                              }),
                            ]
                          }),
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.hasFloating && !_vm.empty
                    ? _c("ElementLabelFloating", {
                        attrs: { visible: !_vm.empty },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "input",
                    _vm._b(
                      {
                        ref: "input",
                        class: _vm.classes.input,
                        attrs: {
                          type: "search",
                          name: _vm.name,
                          id: _vm.fieldId,
                          placeholder: _vm.Placeholder,
                          disabled: _vm.isDisabled,
                          readonly: _vm.isReadonly,
                          "aria-labelledby": _vm.labelId,
                          autocomplete: "off",
                        },
                        on: { blur: _vm.handleLocationBlur },
                      },
                      "input",
                      _vm.attrs,
                      false
                    )
                  ),
                ],
                1
              ),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$v = [];
__vue_render__$v._withStripped = true;

  /* style */
  const __vue_inject_styles__$B = undefined;
  /* scoped */
  const __vue_scope_id__$B = undefined;
  /* module identifier */
  const __vue_module_identifier__$B = undefined;
  /* functional template */
  const __vue_is_functional_template__$B = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$B = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$v, staticRenderFns: __vue_staticRenderFns__$v },
    __vue_inject_styles__$B,
    __vue_script__$B,
    __vue_scope_id__$B,
    __vue_is_functional_template__$B,
    __vue_module_identifier__$B,
    false,
    undefined,
    undefined,
    undefined
  );

  var LocationElement$1 = __vue_component__$B;

var script$A = {
    name: 'LocationElement',
    render: LocationElement$1.render,
    data: LocationElement$1.data,
  };

var css_248z$x = "/* Google */\n\n.pac-container {\n  border-color: var(--vf-border-color-input);\n  background: var(--vf-bg-input);\n}\n\n.pac-item {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  border-color: var(--vf-border-color-input);\n  background: var(--vf-bg-input);\n  color: var(--vf-color-input);\n  cursor: pointer;\n}\n\n.pac-item > span:last-of-type {\n  font-size: 0.75rem;\n  color: var(--vf-color-muted);\n}\n\n.pac-item:hover, .pac-item.pac-item-selected {\n  background: var(--vf-bg-selected);\n}\n\n.pac-item-query {\n  font-size: 0.875rem;\n  line-height: 1;\n  margin-right: 0.25rem;\n  padding-right: 0.25rem;\n  color: var(--vf-color-input);\n}\n\n.pac-icon-marker {\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-position: center center;\n  -webkit-mask-position: center center;\n  mask-size: contain;\n  -webkit-mask-size: contain;\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'%3e%3c/path%3e%3c/svg%3e\");\n  background: var(--vf-bg-icon);\n  width: 0.875rem;\n  width: 0.875rem;\n  margin-right: 0.75rem;\n  margin-top: 0;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  box-sizing: content-box;\n  flex-shrink: 0;\n}\n\n.pac-logo:after {\n  margin-left: 0.625rem;\n  margin-right: 0.625rem;\n  margin-bottom: 0.625rem;\n}\n\n.pac-icon, .hdpi .pac-icon {\n  background-image: none;\n}";
styleInject(css_248z$x);

/* script */
const __vue_script__$A = script$A;
/* template */

  /* style */
  const __vue_inject_styles__$A = undefined;
  /* scoped */
  const __vue_scope_id__$A = undefined;
  /* module identifier */
  const __vue_module_identifier__$A = undefined;
  /* functional template */
  const __vue_is_functional_template__$A = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$A = /*#__PURE__*/normalizeComponent(
    {},
    __vue_inject_styles__$A,
    __vue_script__$A,
    __vue_scope_id__$A,
    __vue_is_functional_template__$A,
    __vue_module_identifier__$A,
    false,
    undefined,
    undefined,
    undefined
  );

  var LocationElement = __vue_component__$A;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$z = {
    name: 'MatrixElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        },
      }
    },
  };

var css_248z$w = "";
styleInject(css_248z$w);

/* script */
const __vue_script__$z = script$z;
/* template */
var __vue_render__$u = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _c(
                "div",
                { ref: "grid", class: _vm.classes.grid, style: _vm.gridStyle },
                [
                  _vm.rowsVisible && _vm.colsVisible
                    ? _c("div", { class: _vm.classes.headerFirst })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.resolvedColumns, function (col, c) {
                    return [
                      _vm.colsVisible
                        ? _c("div", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: col.available,
                                expression: "col.available",
                              },
                            ],
                            class: _vm.classes.header,
                            domProps: { innerHTML: _vm._s(col.label) },
                          })
                        : _vm._e(),
                    ]
                  }),
                  _vm._v(" "),
                  _vm.allowRemove && _vm.colsVisible
                    ? _c("div", { class: _vm.classes.headerRemove })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.resolvedRows, function (row, r) {
                    return [
                      _vm.rowsVisible
                        ? _c("div", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: row.available,
                                expression: "row.available",
                              },
                            ],
                            class: _vm.classes.rowLabel,
                            domProps: { innerHTML: _vm._s(row.label) },
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._l(_vm.resolvedColumns, function (col, c) {
                        return [
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: row.available && col.available,
                                  expression: "row.available && col.available",
                                },
                              ],
                              class: _vm.classes.cell,
                            },
                            [
                              _c(
                                "div",
                                {
                                  class: _vm.classes.cellWrapper(
                                    _vm.resolveColType(col),
                                    _vm.resolveComponentName(r, c)
                                  ),
                                },
                                [
                                  _c(
                                    _vm.resolveComponentType(col),
                                    _vm._b(
                                      {
                                        key: _vm.cells[r][c].name,
                                        tag: "component",
                                      },
                                      "component",
                                      _vm.cells[r][c],
                                      false
                                    )
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ]
                      }),
                      _vm._v(" "),
                      _vm.allowRemove
                        ? _c("div", { class: _vm.classes.rowRemove }, [
                            _c(
                              "div",
                              {
                                class: _vm.classes.remove,
                                attrs: {
                                  "aria-roledescription":
                                    _vm.form$.translations.vueform.a11y.list
                                      .remove,
                                  id: _vm.path + "-" + r + "-remove-button",
                                  role: "button",
                                  tabindex: "0",
                                },
                                on: {
                                  click: function ($event) {
                                    $event.preventDefault();
                                    return _vm.handleRemove(r)
                                  },
                                  keypress: function ($event) {
                                    if (
                                      !$event.type.indexOf("key") &&
                                      _vm._k(
                                        $event.keyCode,
                                        "space",
                                        32,
                                        $event.key,
                                        [" ", "Spacebar"]
                                      ) &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key,
                                        "Enter"
                                      )
                                    ) {
                                      return null
                                    }
                                    return _vm.handleRemove(r)
                                  },
                                },
                              },
                              [_c("span", { class: _vm.classes.removeIcon })]
                            ),
                          ])
                        : _vm._e(),
                    ]
                  }),
                ],
                2
              ),
              _vm._v(" "),
              _vm.allowAdd
                ? _c("div", {
                    class: _vm.classes.add,
                    attrs: {
                      id: _vm.fieldId + "-add-button",
                      role: "button",
                      tabindex: "0",
                    },
                    domProps: { innerHTML: _vm._s(_vm.addLabel) },
                    on: {
                      click: function ($event) {
                        $event.preventDefault();
                        return _vm.handleAdd.apply(null, arguments)
                      },
                      keypress: function ($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          ) &&
                          _vm._k($event.keyCode, "space", 32, $event.key, [
                            " ",
                            "Spacebar",
                          ])
                        ) {
                          return null
                        }
                        return _vm.handleAdd.apply(null, arguments)
                      },
                    },
                  })
                : _vm._e(),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$u = [];
__vue_render__$u._withStripped = true;

  /* style */
  const __vue_inject_styles__$z = undefined;
  /* scoped */
  const __vue_scope_id__$z = undefined;
  /* module identifier */
  const __vue_module_identifier__$z = undefined;
  /* functional template */
  const __vue_is_functional_template__$z = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$z = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$u, staticRenderFns: __vue_staticRenderFns__$u },
    __vue_inject_styles__$z,
    __vue_script__$z,
    __vue_scope_id__$z,
    __vue_is_functional_template__$z,
    __vue_module_identifier__$z,
    false,
    undefined,
    undefined,
    undefined
  );

  var MatrixElement = __vue_component__$z;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$y = {
    name: 'MultifileElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          list: '',
          listItem: '',
          handle: '',
          handleIcon: '',
          dnd: '',
          button: '',
        },
      }
    }
  };

var css_248z$v = "";
styleInject(css_248z$v);

/* script */
const __vue_script__$y = script$y;
/* template */
var __vue_render__$t = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    attrs: { multiple: true },
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _vm.drop && _vm.canDrop && _vm.hasAdd
                ? _c("DragAndDrop", {
                    class: _vm.classes.dnd,
                    attrs: {
                      title:
                        _vm.form$.translations.vueform.elements[_vm.type]
                          .dndTitle,
                      description:
                        _vm.form$.translations.vueform.elements[_vm.type]
                          .dndDescription,
                      disabled: _vm.isDisabled,
                    },
                    on: { click: _vm.handleClick, drop: _vm.handleDrop },
                  })
                : _vm.hasAdd
                ? _c(
                    "div",
                    _vm._b(
                      {
                        class: _vm.classes.button,
                        attrs: {
                          "aria-labelledby": _vm.labelId,
                          "aria-placeholder":
                            _vm.form$.translations.vueform.elements.multifile
                              .uploadButton,
                          role: "button",
                          tabindex: "0",
                        },
                        on: {
                          click: function ($event) {
                            $event.preventDefault();
                            return _vm.handleClick.apply(null, arguments)
                          },
                          keypress: function ($event) {
                            if (
                              !$event.type.indexOf("key") &&
                              _vm._k(
                                $event.keyCode,
                                "enter",
                                13,
                                $event.key,
                                "Enter"
                              ) &&
                              _vm._k($event.keyCode, "space", 32, $event.key, [
                                " ",
                                "Spacebar",
                              ])
                            ) {
                              return null
                            }
                            return _vm.handleClick.apply(null, arguments)
                          },
                        },
                      },
                      "div",
                      _vm.aria,
                      false
                    ),
                    [
                      _vm._v(
                        _vm._s(
                          _vm.form$.translations.vueform.elements.multifile
                            .uploadButton
                        )
                      ),
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: false,
                    expression: "false",
                  },
                ],
                ref: "input",
                attrs: {
                  multiple: "",
                  id: _vm.fieldId,
                  type: "file",
                  accept: _vm.accept,
                  disabled: _vm.isDisabled,
                },
                on: { change: _vm.handleChange },
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.empty,
                      expression: "!empty",
                    },
                  ],
                  key: _vm.fieldId + "-" + _vm.length,
                  ref: "list",
                  class: _vm.classes.list,
                },
                _vm._l(_vm.value, function (val, i) {
                  return _c(
                    "div",
                    { key: i, class: _vm.classes.listItem },
                    [
                      _vm.prototype.type
                        ? _c(
                            _vm.component(_vm.prototype),
                            _vm._b(
                              {
                                tag: "component",
                                attrs: {
                                  disabled: !_vm.hasRemove,
                                  embed: true,
                                  name: i,
                                },
                                on: {
                                  remove: function ($event) {
                                    return _vm.remove(i)
                                  },
                                },
                              },
                              "component",
                              _vm.prototype,
                              false
                            )
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.hasSort
                        ? _c(
                            "span",
                            {
                              class: _vm.classes.handle,
                              attrs: { "data-handle": "" },
                            },
                            [_c("span", { class: _vm.classes.handleIcon })]
                          )
                        : _vm._e(),
                    ],
                    1
                  )
                }),
                0
              ),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$t = [];
__vue_render__$t._withStripped = true;

  /* style */
  const __vue_inject_styles__$y = undefined;
  /* scoped */
  const __vue_scope_id__$y = undefined;
  /* module identifier */
  const __vue_module_identifier__$y = undefined;
  /* functional template */
  const __vue_is_functional_template__$y = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$y = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$t, staticRenderFns: __vue_staticRenderFns__$t },
    __vue_inject_styles__$y,
    __vue_script__$y,
    __vue_scope_id__$y,
    __vue_is_functional_template__$y,
    __vue_module_identifier__$y,
    false,
    undefined,
    undefined,
    undefined
  );

  var MultifileElement = __vue_component__$y;

function isNullish$1 (val) {
  return val === null || val === undefined
}

function useData (props, context, dep)
{
  const { object, valueProp, mode } = toRefs(props);

  const $this = getCurrentInstance().proxy;

  // ============ DEPENDENCIES ============

  const iv = dep.iv;

  // =============== METHODS ==============

  const update = (val, triggerInput = true) => {
    // Setting object(s) as internal value
    iv.value = makeInternal(val);

    // Setting object(s) or plain value as external 
    // value based on `option` setting
    const externalVal = makeExternal(val);

    context.emit('change', externalVal, $this);

    if (triggerInput) {
      context.emit('input', externalVal);
      context.emit('update:modelValue', externalVal);
    }
  }; 

  // no export
  const makeExternal = (val) => {
    // If external value should be object
    // no transformation is required
    if (object.value) {
      return val
    }

    // No need to transform if empty value
    if (isNullish$1(val)) {
      return val
    }

    // If external should be plain transform
    // value object to plain values
    return !Array.isArray(val) ? val[valueProp.value] : val.map(v => v[valueProp.value])
  };

  // no export
  const makeInternal = (val) => {
    if (isNullish$1(val)) {
      return mode.value === 'single' ? {} : []
    }

    return val
  };

  return {
    update,
  }
}

// Polyfill for Vue <3.3 for getters only
// https://vuejs.org/api/reactivity-utilities.html#toref
function toRef (get) {
    return customRef(() => ({ get, set: /* istanbul ignore next */ () => { } }))
}

function useValue$3 (props, context)
{
  const { value, modelValue, mode, valueProp } = toRefs(props);

  // ================ DATA ================

  // internalValue
  const iv = ref(mode.value !== 'single' ? [] : {});

  // ============== COMPUTED ==============

  /* istanbul ignore next */
  // externalValue
  const ev = toRef(() => {
    return modelValue.value !== undefined ? modelValue.value : value.value
  });

  const plainValue = computed(() => {
    return mode.value === 'single' ? iv.value[valueProp.value] : iv.value.map(v=>v[valueProp.value])
  });

  const textValue = toRef(() => {
    return mode.value !== 'single' ? iv.value.map(v=>v[valueProp.value]).join(',') : iv.value[valueProp.value]
  });

  return {
    iv,
    internalValue: iv,
    ev,
    externalValue: ev,
    textValue,
    plainValue,
  }
}

function useSearch (props, context, dep)
{
  const { regex } = toRefs(props);

  const $this = getCurrentInstance().proxy;

  // ============ DEPENDENCIES ============

  const isOpen = dep.isOpen;
  const open = dep.open;

  // ================ DATA ================

  const search = ref(null);

  // =============== METHODS ==============

  const clearSearch = () => {
    search.value = '';
  };

  const handleSearchInput = (e) => {
    search.value = e.target.value;
  };

  const handleKeypress = (e) => {
    if (regex.value) {
      let regexp = regex.value;

      if (typeof regexp === 'string') {
        regexp = new RegExp(regexp);
      }

      if (!e.key.match(regexp)) {
        e.preventDefault();
      }
    }
  };

  const handlePaste = (e) => {
    if (regex.value) {
      let clipboardData = e.clipboardData || /* istanbul ignore next */ window.clipboardData;
      let pastedData = clipboardData.getData('Text');

      let regexp = regex.value;

      if (typeof regexp === 'string') {
        regexp = new RegExp(regexp);
      }
      
      if (!pastedData.split('').every(c => !!c.match(regexp))) {
        e.preventDefault();
      }
    }

    context.emit('paste', e, $this);
  };

  // ============== WATCHERS ==============

  watch(search, (val) => {
    if (!isOpen.value && val) {
      open();
    }

    context.emit('search-change', val, $this);
  });

  return {
    search,
    clearSearch,
    handleSearchInput,
    handleKeypress,
    handlePaste,
  }
}

function usePointer$1 (props, context, dep)
{
  const { groupSelect, mode, groups, disabledProp } = toRefs(props);

  // ================ DATA ================

  const pointer = ref(null);

  // =============== METHODS ==============

  const setPointer = (option) => {
    if (option === undefined || (option !== null && option[disabledProp.value])) {
      return
    }

    if (groups.value && option && option.group && (mode.value === 'single' || !groupSelect.value)) {
      return
    }

    pointer.value = option;
  };

  const clearPointer = () => {
    setPointer(null);
  };

  return {
    pointer,
    setPointer,
    clearPointer,
  }
}

function normalize (str, strict = true) {
  return strict
    ? String(str).toLowerCase().trim()
    : String(str).toLowerCase()
                 .normalize('NFD')
                 .trim()
                 .replace(/æ/g, 'ae')
                 .replace(/œ/g, 'oe')
                 .replace(/ø/g, 'o')
                 .replace(/\p{Diacritic}/gu, '')
}

function isObject (variable) {
  return Object.prototype.toString.call(variable) === '[object Object]'
}

function arraysEqual$1 (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  const array2Sorted = array2.slice().sort();

  return array1.slice().sort().every(function(value, index) {
      return value === array2Sorted[index];
  })
}

/* istanbul ignore next */
const objectsEqual = (obj1, obj2) => {
  // If both are strictly equal, return true
  if (obj1 === obj2) {
    return true
  }

  // If either is not an object or is null, return false (handles primitive types and null)
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false
  }

  // Get the keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // If they have a different number of keys, they're not equal
  if (keys1.length !== keys2.length) {
    return false
  }

  // Compare each key-value pair recursively
  for (let key of keys1) {
    // Check if both objects have the same key
    if (!keys2.includes(key)) {
      return false
    }

    // Recursively compare the values
    if (!objectsEqual(obj1[key], obj2[key])) {
      return false
    }
  }

  return true
};

function useOptions (props, context, dep)
{
  const { 
    options, mode, trackBy: trackBy_, limit, hideSelected, createTag, createOption: createOption_, label,
    appendNewTag, appendNewOption: appendNewOption_, multipleLabel, object, loading, delay, resolveOnLoad,
    minChars, filterResults, clearOnSearch, clearOnSelect, valueProp, allowAbsent, groupLabel,
    canDeselect, max, strict, closeOnSelect, closeOnDeselect, groups: groupped, reverse, infinite,
    groupOptions, groupHideEmpty, groupSelect, onCreate, disabledProp, searchStart, searchFilter,
  } = toRefs(props);

  const $this = getCurrentInstance().proxy;

  // ============ DEPENDENCIES ============

  const iv = dep.iv;
  const ev = dep.ev;
  const search = dep.search;
  const clearSearch = dep.clearSearch;
  const update = dep.update;
  const pointer = dep.pointer;
  const setPointer = dep.setPointer;
  const clearPointer = dep.clearPointer;
  const focus = dep.focus;
  const deactivate = dep.deactivate;
  const close = dep.close;
  const localize = dep.localize;

  // ================ DATA ================

  // no export
  // appendedOptions
  const ap = ref([]);

  // no export
  // resolvedOptions
  const ro = ref([]);

  const resolving = ref(false);

  // no export
  const searchWatcher = ref(null);

  const offset = ref(infinite.value && limit.value === -1 ? 10 : limit.value);

  // ============== COMPUTED ==============

  const resolvedOptions = computed({
    get: () => ro.value,
    set: (v) => ro.value = v
  });

  // no export
  const createOption = toRef(() => {
    return createTag.value || createOption_.value || false
  });

  // no export
  const appendNewOption = toRef(() => {
    if (appendNewTag.value !== undefined) {
      return appendNewTag.value
    } else if (appendNewOption_.value !== undefined) {
      return appendNewOption_.value
    }

    return true
  });

  // no export
  // extendedOptions
  const eo = computed(() => {
    if (groupped.value) {
      let groups = eg.value || /* istanbul ignore next */ [];

      let eo = [];

      groups.forEach((group) => {
        optionsToArray(group[groupOptions.value]).forEach((option) => {
          eo.push(Object.assign({}, option, group[disabledProp.value] ? { [disabledProp.value]: true } : {}));
        });
      });

      return eo
    } else {
      let eo = optionsToArray(ro.value || /* istanbul ignore next */ []);

      if (ap.value.length) {
        eo = eo.concat(ap.value);
      }

      return eo
    }
  });

  // preFilteredOptions
  const pfo = computed(() => {
    let options = eo.value;

    if (reverse.value) {
      options = options.reverse();
    }

    if (createdOption.value.length) {
      options = createdOption.value.concat(options);
    }

    return filterOptions(options)
  });

  // filteredOptions
  const fo = computed(() => {
    let options = pfo.value;

    if (offset.value > 0) {
      options = options.slice(0, offset.value);
    }

    return options
  });

  // no export
  // extendedGroups
  const eg = computed(() => {
    if (!groupped.value) {
      return []
    }

    let eg = [];
    let groups = ro.value || /* istanbul ignore next */ [];

    if (ap.value.length) {
      eg.push({
        [groupLabel.value]: ' ',
        [groupOptions.value]: [...ap.value],
        __CREATE__: true
      });
    }

    return eg.concat(groups)
  });

  // preFilteredGroups
  const pfg = computed(() => {
    let groups = [...eg.value].map(g => ({...g}));

    if (createdOption.value.length) {
      if (groups[0] && groups[0].__CREATE__) {
        groups[0][groupOptions.value] = [...createdOption.value, ...groups[0][groupOptions.value]];
      } else {
        groups = [{
          [groupLabel.value]: ' ',
          [groupOptions.value]: [...createdOption.value],
          __CREATE__: true
        }].concat(groups);
      }
    }

    return groups
  });

  // filteredGroups
  const fg = computed(() => {
    if (!groupped.value) {
      return []
    }

    let options = pfg.value;

    return filterGroups((options || /* istanbul ignore next */ []).map((group, index) => {
      const arrayOptions = optionsToArray(group[groupOptions.value]);

      return {
        ...group,
        index,
        group: true,
        [groupOptions.value]: filterOptions(arrayOptions, false).map(o => Object.assign({}, o, group[disabledProp.value] ? { [disabledProp.value]: true } : {})),
        __VISIBLE__: filterOptions(arrayOptions).map(o => Object.assign({}, o, group[disabledProp.value] ? { [disabledProp.value]: true } : {})),
      }
      // Difference between __VISIBLE__ and {groupOptions}: visible does not contain selected options when hideSelected=true
    }))
  });

  const hasSelected = computed(() => {
    switch (mode.value) {
      case 'single':
        return !isNullish$1(iv.value[valueProp.value])

      case 'multiple':
      case 'tags':
        return !isNullish$1(iv.value) && iv.value.length > 0
    }
  });

  const multipleLabelText = computed(() => {
    return multipleLabel.value !== undefined
      ? multipleLabel.value(iv.value, $this)
      : (iv.value && iv.value.length > 1 ? `${iv.value.length} options selected` : `1 option selected`)
  });

  const noOptions = toRef(() => {
    return !eo.value.length && !resolving.value && !createdOption.value.length
  });


  const noResults = toRef(() => {
    return eo.value.length > 0 && fo.value.length == 0 && ((search.value && groupped.value) || !groupped.value)
  });

  // no export
  const createdOption = computed(() => {
    if (createOption.value === false || !search.value) {
      return []
    }

    if (getOptionByTrackBy(search.value) !== -1) {
      return []
    }

    return [{
      [valueProp.value]: search.value,
      [trackBy.value[0]]: search.value,
      [label.value]: search.value,
      __CREATE__: true,
    }]
  });

  const trackBy = computed(() => {
    return trackBy_.value ? (Array.isArray(trackBy_.value) ? trackBy_.value : [trackBy_.value]) : [label.value]
  });

  // no export
  const nullValue = toRef(() => {
    switch (mode.value) {
      case 'single':
        return null

      case 'multiple':
      case 'tags':
        return []
    }
  });

  const busy = toRef(() => {
    return loading.value || resolving.value
  });

  // =============== METHODS ==============

  /**
   * @param {array|object|string|number} option 
   */
  const select = (option) => {
    if (typeof option !== 'object') {
      option = getOption(option);
    }

    switch (mode.value) {
      case 'single':
        update(option);
        break

      case 'multiple':
      case 'tags':
        update((iv.value).concat(option));
        break
    }

    context.emit('select', finalValue(option), option, $this);
  };

  const deselect = (option) => {
    if (typeof option !== 'object') {
      option = getOption(option);
    }

    switch (mode.value) {
      case 'single':
        clear();
        break

      case 'tags':
      case 'multiple':
        update(Array.isArray(option)
          ? iv.value.filter(v => option.map(o => o[valueProp.value]).indexOf(v[valueProp.value]) === -1)
          : iv.value.filter(v => v[valueProp.value] != option[valueProp.value]));
        break
    }

    context.emit('deselect', finalValue(option), option, $this);
  };

  // no export
  const finalValue = (option) => {
    return object.value ? option : option[valueProp.value]
  };

  const remove = (option) => {
    deselect(option);
  };

  const handleTagRemove = (option, e) => {
    if (e.button !== 0) {
      e.preventDefault();
      return
    }

    remove(option);
  };

  const clear = () => {
    update(nullValue.value);
    context.emit('clear', $this);
  };

  const isSelected = (option) => {
    if (option.group !== undefined) {
      return mode.value === 'single' ? false : areAllSelected(option[groupOptions.value]) && option[groupOptions.value].length
    }

    switch (mode.value) {
      case 'single':
        return !isNullish$1(iv.value) && (
          iv.value[valueProp.value] == option[valueProp.value] ||
          (typeof iv.value[valueProp.value] === 'object' && typeof option[valueProp.value] === 'object' && objectsEqual(iv.value[valueProp.value], option[valueProp.value]))
        )

      case 'tags':
      case 'multiple':
        return !isNullish$1(iv.value) && iv.value.map(o => o[valueProp.value]).indexOf(option[valueProp.value]) !== -1
    }
  };

  const isDisabled = (option) => {
    return option[disabledProp.value] === true
  };

  const isMax = () => {
    if (max === undefined || max.value === -1 || (!hasSelected.value && max.value > 0)) {
      return false
    }
    
    return iv.value.length >= max.value
  };

  const handleOptionClick = (option) => {
    if (isDisabled(option)) {
      return
    }

    if (onCreate.value && !isSelected(option) && option.__CREATE__) {
      option = { ...option };
      delete option.__CREATE__;

      option = onCreate.value(option, $this);
      
      if (option instanceof Promise) {
        resolving.value = true;
        option.then((result) => {
          resolving.value = false;
          handleOptionSelect(result);
        });

        return
      } 
    }

    handleOptionSelect(option);
  };

  const handleOptionSelect = (option) => {
    if (option.__CREATE__) {
      option = { ...option };
      delete option.__CREATE__;
    }
    
    switch (mode.value) {
      case 'single':
        if (option && isSelected(option)) {
          if (canDeselect.value) {
            deselect(option);
          }

          if (closeOnDeselect.value) {
            clearPointer();
            close();
          }
          return
        }

        if (option) {
          handleOptionAppend(option);
        }

        /* istanbul ignore else */
        if (clearOnSelect.value) {
          clearSearch();
        }

        if (closeOnSelect.value) {
          clearPointer();
          close();
        }

        if (option) {
          select(option);
        }
        break

      case 'multiple':
        if (option && isSelected(option)) {
          deselect(option);

          if (closeOnDeselect.value) {
            clearPointer();
            close();
          }
          return
        }

        if (isMax()) {
          context.emit('max', $this);
          return
        }

        if (option) {
          handleOptionAppend(option);
          select(option);
        }

        if (clearOnSelect.value) {
          clearSearch();
        }

        if (hideSelected.value) {
          clearPointer();
        }

        if (closeOnSelect.value) {
          close();
        }
        break

      case 'tags':
        if (option && isSelected(option)) {
          deselect(option);

          if (closeOnDeselect.value) {
            clearPointer();
            close();
          }
          return
        }

        if (isMax()) {
          context.emit('max', $this);
          return
        }

        if (option) {
          handleOptionAppend(option);
        }

        if (clearOnSelect.value) {
          clearSearch();
        }

        if (option) {
          select(option);
        }

        if (hideSelected.value) {
          clearPointer();
        }

        if (closeOnSelect.value) {
          close();
        }
        break
    }

    if (!closeOnSelect.value) {
      focus();
    }
  };

  const handleGroupClick = (group) => {
    if (isDisabled(group) || mode.value === 'single' || !groupSelect.value) {
      return
    }

    switch (mode.value) {
      case 'multiple':
      case 'tags':
        if (areAllEnabledSelected(group[groupOptions.value])) {
          deselect(group[groupOptions.value]);
        } else {
          select(group[groupOptions.value]
            .filter(o => iv.value.map(v => v[valueProp.value]).indexOf(o[valueProp.value]) === -1)
            .filter(o => !o[disabledProp.value])
            .filter((o, k) => iv.value.length + 1 + k <= max.value || max.value === -1)
          );
        }

        if (hideSelected.value && pointer.value) {
          // Refresh pointer because pointer.__VISIBLE__ are not reactive #354
          setPointer(fg.value.filter(g => !g[disabledProp.value])[pointer.value.index]);
        }
        break
    }

    if (closeOnSelect.value) {
      deactivate();
    }
  };

  const handleOptionAppend = (option) => {
    if (getOption(option[valueProp.value]) === undefined && createOption.value) {
      context.emit('tag', option[valueProp.value], $this);
      context.emit('option', option[valueProp.value], $this);
      context.emit('create', option[valueProp.value], $this);

      if (appendNewOption.value) {
        appendOption(option);
      }

      clearSearch();
    }
  };

  const selectAll = () => {
    if (mode.value === 'single') {
      return
    }

    select(fo.value.filter(o => !o.disabled && !isSelected(o)));
  };

  // no export
  const areAllEnabledSelected = (options) => {
    return options.find(o => !isSelected(o) && !o[disabledProp.value]) === undefined
  };

  // no export
  const areAllSelected = (options) => {
    return options.find(o => !isSelected(o)) === undefined
  };

  const getOption = (val) => {
    return eo.value[eo.value.map(o => String(o[valueProp.value])).indexOf(String(val))]
  };

  // no export
  const getOptionByTrackBy = (val) => {
    return eo.value.findIndex((o) => {
      return trackBy.value.some((track) => {
        return (parseInt(o[track]) == o[track] ? parseInt(o[track]) : o[track]) === (parseInt(val) == val ? parseInt(val) : val)
      })
    })
  };

  // no export
  const shouldHideOption = (option) => {
    return ['tags', 'multiple'].indexOf(mode.value) !== -1 && hideSelected.value && isSelected(option)
  };

  // no export
  const appendOption = (option) => {
    ap.value.push(option);
  };

  // no export
  const filterGroups = (groups) => {
    // If the search has value we need to filter among 
    // the ones that are visible to the user to avoid
    // displaying groups which technically have options
    // based on search but that option is already selected.
    return groupHideEmpty.value
      ? groups.filter(g => search.value
          ? g.__VISIBLE__.length
          : g[groupOptions.value].length
        )
      : groups.filter(g => search.value ? g.__VISIBLE__.length : true)
  };

  // no export
  const filterOptions = (options, excludeHideSelected = true) => {
    let fo = options;
    
    if (search.value && filterResults.value) {
      let filter = searchFilter.value;

      if (!filter) {
        filter = (option, query, $this) => {
          return trackBy.value.some(track => {
            let target = normalize(localize(option[track]), strict.value);

            return searchStart.value
                ? target.startsWith(normalize(query, strict.value))
                : target.indexOf(normalize(query, strict.value)) !== -1;
          })
        };
      }

      fo = fo.filter((o) => {
        return filter(o, search.value, $this)
      });
    }

    if (hideSelected.value && excludeHideSelected) {
      fo = fo.filter((option) => !shouldHideOption(option));
    }

    return fo
  };

  // no export
  const optionsToArray = (options) => {
    let uo = options;
    
    // Transforming an object to an array of objects
    if (isObject(uo)) {
      uo = Object.keys(uo).map((key) => {
        let val = uo[key];

        return { [valueProp.value]: key, [trackBy.value[0]]: val, [label.value]: val}
      });
    }

    // Transforming an plain arrays to an array of objects
    /* istanbul ignore else */
    if (uo && Array.isArray(uo)) {
      uo = uo.map((val) => {
        return typeof val === 'object' ? val : { [valueProp.value]: val, [trackBy.value[0]]: val, [label.value]: val}
      });
    } else {
      uo = [];
    }

    return uo
  };

  // no export
  const initInternalValue = () => {
    if (!isNullish$1(ev.value)) {
      iv.value = makeInternal(ev.value);
    }
  };

  const resolveOptions = (callback) => {
    resolving.value = true;

    return new Promise((resolve, reject) => {
      options.value(search.value, $this).then((response) => {
        ro.value = response || [];

        if (typeof callback == 'function') {
          callback(response);
        }

        resolving.value = false;
      }).catch((e) => {
        console.error(e);

        ro.value = [];

        resolving.value = false;
      }).finally(() => {
        resolve();
      });
    })
  };

  // no export
  const refreshLabels = () => {
    if (!hasSelected.value) {
      return
    }

    if (mode.value === 'single') {
      let option = getOption(iv.value[valueProp.value]);

      /* istanbul ignore else */
      if (option !== undefined) {
        let newLabel = option[label.value];

        iv.value[label.value] = newLabel;

        if (object.value) {
          ev.value[label.value] = newLabel;
        }
      }
    } else {
      iv.value.forEach((val, i) => {
        let option = getOption(iv.value[i][valueProp.value]);

        /* istanbul ignore else */
        if (option !== undefined) {
          let newLabel = option[label.value];

          iv.value[i][label.value] = newLabel;

          if (object.value) {
            ev.value[i][label.value] = newLabel;
          }
        }
      });
    }
  };

  const refreshOptions = (callback) => {
    resolveOptions(callback);
  };

  // no export
  const makeInternal = (val) => {
    if (isNullish$1(val)) {
      return mode.value === 'single' ? {} : []
    }

    if (object.value) {
      return val
    }

    // If external should be plain transform value object to plain values
    return mode.value === 'single' ? getOption(val) || (allowAbsent.value ? {
      [label.value]: val,
      [valueProp.value]: val,
      [trackBy.value[0]]: val,
    } : {}) : val.filter(v => !!getOption(v) || allowAbsent.value).map(v => getOption(v) || {
      [label.value]: v,
      [valueProp.value]: v,
      [trackBy.value[0]]: v,
    })
  };

  // no export
  const initSearchWatcher = () => {
    searchWatcher.value = watch(search, (query) => {
      if (query.length < minChars.value || (!query && minChars.value !== 0)) {
        return
      }

      resolving.value = true;

      if (clearOnSearch.value) {
        ro.value = [];
      }
      setTimeout(() => {
        if (query != search.value) {
          return
        }

        options.value(search.value, $this).then((response) => {
          if (query == search.value || !search.value) {
            ro.value = response;
            pointer.value = fo.value.filter(o => o[disabledProp.value] !== true)[0] || null;
            resolving.value = false;
          }
        }).catch( /* istanbul ignore next */ (e) => {
          console.error(e);
        });
      }, delay.value);

    }, { flush: 'sync' });
  };

  // ================ HOOKS ===============

  if (mode.value !== 'single' && !isNullish$1(ev.value) && !Array.isArray(ev.value)) {
    throw new Error(`v-model must be an array when using "${mode.value}" mode`)
  }

  if (options && typeof options.value == 'function') {
    if (resolveOnLoad.value) {
      resolveOptions(initInternalValue);
    } else if (object.value == true) {
      initInternalValue();
    }
  }
  else {
    ro.value = options.value;

    initInternalValue();
  }
  
  // ============== WATCHERS ==============

  if (delay.value > -1) {
    initSearchWatcher();
  }

  watch(delay, (value, old) => {
    /* istanbul ignore else */
    if (searchWatcher.value) {
      searchWatcher.value();
    }

    if (value >= 0) {
      initSearchWatcher();
    }
  });

  watch(ev, (newValue) => {
    if (isNullish$1(newValue)) {
      update(makeInternal(newValue), false);
      return
    }

    switch (mode.value) {
      case 'single':
        if (object.value ? newValue[valueProp.value] != iv.value[valueProp.value] : newValue != iv.value[valueProp.value]) {
          update(makeInternal(newValue), false);
        }
        break

      case 'multiple':
      case 'tags':
        if (!arraysEqual$1(object.value ? newValue.map(o => o[valueProp.value]) : newValue, iv.value.map(o => o[valueProp.value]))) {
          update(makeInternal(newValue), false);
        }
        break
    }
  }, { deep: true });

  watch(options, (n, o) => {
    if (typeof props.options === 'function') {
      if (resolveOnLoad.value && (!o || (n && n.toString() !== o.toString()))) {
        resolveOptions();
      }
    } else {
      ro.value = props.options;

      if (!Object.keys(iv.value).length) {
        initInternalValue();
      }

      refreshLabels();
    }
  });

  watch(label, refreshLabels);

  watch(limit, (n,o) => {
    offset.value = infinite.value && n === -1 ? 10 : n;
  });

  return {
    resolvedOptions,
    pfo,
    fo,
    filteredOptions: fo,
    hasSelected,
    multipleLabelText,
    eo,
    extendedOptions: eo,
    eg,
    extendedGroups: eg,
    fg,
    filteredGroups: fg,
    noOptions,
    noResults,
    resolving,
    busy,
    offset,
    select,
    deselect,
    remove,
    selectAll,
    clear,
    isSelected,
    isDisabled,
    isMax,
    getOption,
    handleOptionClick,
    handleGroupClick,
    handleTagRemove,
    refreshOptions,
    resolveOptions,
    refreshLabels,
  }
}

function usePointer (props, context, dep)
{
  const {
    valueProp, showOptions, searchable, groupLabel,
    groups: groupped, mode, groupSelect, disabledProp,
    groupOptions,
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  const fo = dep.fo;
  const fg = dep.fg;
  const handleOptionClick = dep.handleOptionClick;
  const handleGroupClick = dep.handleGroupClick;
  const search = dep.search;
  const pointer = dep.pointer;
  const setPointer = dep.setPointer;
  const clearPointer = dep.clearPointer;
  const multiselect = dep.multiselect;
  const isOpen = dep.isOpen;

  // ============== COMPUTED ==============

  // no export
  const options = computed(() => {
    return fo.value.filter(o => !o[disabledProp.value])
  });

  const groups = computed(() => {
    return fg.value.filter(g => !g[disabledProp.value])
  });

  const canPointGroups = toRef(() => {
    return mode.value !== 'single' && groupSelect.value
  });

  const isPointerGroup = toRef(() => {
    return pointer.value && pointer.value.group
  });

  const currentGroup = computed(() => {
    return getParentGroup(pointer.value)
  });

  const prevGroup = computed(() => {
    const group = isPointerGroup.value ? pointer.value : /* istanbul ignore next */ getParentGroup(pointer.value);
    const groupIndex = groups.value.map(g => g[groupLabel.value]).indexOf(group[groupLabel.value]);
    let prevGroup = groups.value[groupIndex - 1];

    if (prevGroup === undefined) {
      prevGroup = lastGroup.value;
    }

    return prevGroup
  });
  
  const nextGroup = computed(() => {
    let nextIndex = groups.value.map(g => g.label).indexOf(isPointerGroup.value
      ? pointer.value[groupLabel.value]
      : getParentGroup(pointer.value)[groupLabel.value]) + 1;

    if (groups.value.length <= nextIndex) {
      nextIndex = 0;
    }

    return groups.value[nextIndex]
  });

  const lastGroup = computed(() => {
    return [...groups.value].slice(-1)[0]
  });
  
  const currentGroupFirstEnabledOption = computed(() => {
    return pointer.value.__VISIBLE__.filter(o => !o[disabledProp.value])[0]
  });

  const currentGroupPrevEnabledOption = computed(() => {
    const options = currentGroup.value.__VISIBLE__.filter(o => !o[disabledProp.value]);
    return options[options.map(o => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) - 1]
  });
  
  const currentGroupNextEnabledOption = computed(() => {
    const options = getParentGroup(pointer.value).__VISIBLE__.filter(o => !o[disabledProp.value]);
    return options[options.map(o => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) + 1]
  });

  const prevGroupLastEnabledOption = computed(() => {
    return [...prevGroup.value.__VISIBLE__.filter(o => !o[disabledProp.value])].slice(-1)[0]
  });

  const lastGroupLastEnabledOption = computed(() => {
    return [...lastGroup.value.__VISIBLE__.filter(o => !o[disabledProp.value])].slice(-1)[0]
  });

  // =============== METHODS ==============

  const isPointed = (option) => {
    return (!!pointer.value && (
      (!option.group && pointer.value[valueProp.value] === option[valueProp.value]) ||
      (option.group !== undefined && pointer.value[groupLabel.value] === option[groupLabel.value])
    )) ? true : undefined
  };

  const setPointerFirst = () => {
    setPointer(options.value[0] || null);
  };

  const selectPointer = () => {
    if (!pointer.value || pointer.value[disabledProp.value] === true) {
      return
    }

    if (isPointerGroup.value) {
      handleGroupClick(pointer.value);
    } else {
      handleOptionClick(pointer.value);
    }
  };

  const forwardPointer = () => {
    if (pointer.value === null) {
      setPointer((groupped.value && canPointGroups.value ? (!groups.value[0].__CREATE__ ? groups.value[0] : options.value[0]) : options.value[0]) || null);
    }
    else if (groupped.value && canPointGroups.value) {
      let nextPointer = isPointerGroup.value ? currentGroupFirstEnabledOption.value : currentGroupNextEnabledOption.value;

      if (nextPointer === undefined) {
        nextPointer = nextGroup.value;

        if (nextPointer.__CREATE__) {
          nextPointer = nextPointer[groupOptions.value][0];
        }
      }

      setPointer(nextPointer || /* istanbul ignore next */ null);
    } else {
      let next = options.value.map(o => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) + 1;

      if (options.value.length <= next) {
        next = 0;
      }

      setPointer(options.value[next] || null);
    }

    nextTick(() => {
      adjustWrapperScrollToPointer();
    });
  };

  const backwardPointer = () => {
    if (pointer.value === null) {
      let prevPointer = options.value[options.value.length - 1];

      if (groupped.value && canPointGroups.value) {
        prevPointer = lastGroupLastEnabledOption.value;

        if (prevPointer === undefined) {
          prevPointer = lastGroup.value;
        }
      }

      setPointer(prevPointer  || null);
    }
    else if (groupped.value && canPointGroups.value) {
      let prevPointer = isPointerGroup.value ? prevGroupLastEnabledOption.value : currentGroupPrevEnabledOption.value;

      if (prevPointer === undefined) {
        prevPointer = isPointerGroup.value ? prevGroup.value : currentGroup.value;

        if (prevPointer.__CREATE__) {
          prevPointer = prevGroupLastEnabledOption.value;

          if (prevPointer === undefined) {
            prevPointer = prevGroup.value;
          }
        }
      }

      setPointer(prevPointer || /* istanbul ignore next */ null);
    } else {
      let prevIndex = options.value.map(o => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) - 1;

      if (prevIndex < 0) {
        prevIndex = options.value.length - 1;
      }

      setPointer(options.value[prevIndex] || null);
    }

    nextTick(() => {
      adjustWrapperScrollToPointer();
    });
  };

  const getParentGroup = (option) => {
    return groups.value.find((group) => {
      return group.__VISIBLE__.map(o => o[valueProp.value]).indexOf(option[valueProp.value]) !== -1
    })
  };

  // no export
  /* istanbul ignore next */
  const adjustWrapperScrollToPointer = () => {
    let pointedOption = multiselect.value.querySelector(`[data-pointed]`);

    if (!pointedOption) {
      return
    }

    let wrapper = pointedOption.parentElement.parentElement;

    if (groupped.value) {
      wrapper = isPointerGroup.value
        ? pointedOption.parentElement.parentElement.parentElement
        : pointedOption.parentElement.parentElement.parentElement.parentElement;
    }

    if (pointedOption.offsetTop + pointedOption.offsetHeight > wrapper.clientHeight + wrapper.scrollTop) {
      wrapper.scrollTop = pointedOption.offsetTop + pointedOption.offsetHeight - wrapper.clientHeight;
    }
    
    if (pointedOption.offsetTop < wrapper.scrollTop) {
      wrapper.scrollTop = pointedOption.offsetTop;
    }
  };

  // ============== WATCHERS ==============

  watch(search, (val) => {
    if (searchable.value) {
      if (val.length && showOptions.value) {
        setPointerFirst();
      } else {
        clearPointer();
      }
    }
  });

  watch(isOpen, (val) => {
    if (val && multiselect && multiselect.value) {
      let firstSelected = multiselect.value.querySelectorAll(`[data-selected]`)[0];

      if (!firstSelected) {
        return
      }

      let wrapper = firstSelected.parentElement.parentElement;
      
      nextTick(() => {
        // Removed because of #406
        /* istanbul ignore next */
        // if (wrapper.scrollTop > 0) {
        //   return
        // }

        wrapper.scrollTop = firstSelected.offsetTop;
      });
    }
  });

  return {
    pointer,
    canPointGroups,
    isPointed,
    setPointerFirst,
    selectPointer,
    forwardPointer,
    backwardPointer,
  }
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle$1(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

function getVariation(placement) {
  return placement.split('-')[1];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref) {
        var name = _ref.name,
            _ref$options = _ref.options,
            options = _ref$options === void 0 ? {} : _ref$options,
            effect = _ref.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var passive = {
  passive: true
};

function effect$1(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect$1,
  data: {}
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x,
      y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle$1(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }, getWindow(popper)) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
};

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function useDropdown (props, context, dep)
{
  const { disabled, appendTo, appendToBody, openDirection } = toRefs(props);

  const $this = getCurrentInstance().proxy;

  // ============ DEPENDENCIES ============

  const multiselect = dep.multiselect;
  const dropdown = dep.dropdown;

  // ================ DATA ================

  const isOpen = ref(false);
  const popper = ref(null);
  const forcedPlacement = ref(null);
  
  // ============== COMPUTED ==============

  const appended = toRef(() => {
    return appendTo.value || appendToBody.value
  });

  const placement = toRef(() => {
    return (openDirection.value === 'top' && forcedPlacement.value === 'bottom') ||
           (openDirection.value === 'bottom' && forcedPlacement.value !== 'top')
            ? 'bottom'
            : 'top'
  });

  // =============== METHODS ==============

  const open = () => {
    if (isOpen.value || disabled.value) {
      return
    }

    isOpen.value = true;
    context.emit('open', $this);


    if (appended.value) {
      nextTick(() => {
        updatePopper();
      });
    }
  };

  const close = () => {
    if (!isOpen.value) {
      return
    }

    isOpen.value = false;
    context.emit('close', $this);
  };

  const updatePopper = () => {
    if (!popper.value) {
      return
    }

    let borderTopWidth = parseInt(window.getComputedStyle(dropdown.value).borderTopWidth.replace('px', ''));
    let borderBottomWidth = parseInt(window.getComputedStyle(dropdown.value).borderBottomWidth.replace('px', ''));
    
    popper.value.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        {
          name: 'offset',
          options: {
            offset: [0, (placement.value === 'top' ? borderTopWidth : borderBottomWidth) * -1],
          },
        },
      ]
    }));

    popper.value.update();
  };

  /* istanbul ignore next: UI feature */
  const hasFixedParent = (element) => {
    while (element && element !== document.body) {
      const style = getComputedStyle(element);

      if (style.position === 'fixed') {
          return true
      }

      element = element.parentElement;
    }
    
    return false
  };

  onMounted(() => {
    if (!appended.value) {
      return
    }

    /* istanbul ignore next: popper mock */
    popper.value = createPopper(multiselect.value, dropdown.value, {
      strategy: hasFixedParent(multiselect.value) ? /* istanbul ignore next: UI feature */ 'fixed' : undefined,
      placement: openDirection.value,
      modifiers: [
        preventOverflow$1,
        flip$1,
        {
          name: 'sameWidth',
          enabled: true,
          phase: 'beforeWrite',
          requires: ['computeStyles'],
          fn: ({ state }) => {
            state.styles.popper.width = `${state.rects.reference.width}px`;
          },
          effect: ({ state }) => {
            state.elements.popper.style.width = `${
              state.elements.reference.offsetWidth
            }px`;
          }
        },
        {
          name: 'toggleClass',
          enabled: true,
          phase: 'write',
          fn({ state }) {
            forcedPlacement.value = state.placement;
          },
        },
      ]
    });
  });

  onBeforeUnmount(() => {
    if (!appended.value || !popper.value) {
      return
    }

    popper.value.destroy();
    popper.value = null;
  });

  return {
    popper,
    isOpen,
    open,
    close,
    placement,
    updatePopper,
  }
}

function useMultiselect (props, context, dep)
{
  const { searchable, disabled, clearOnBlur } = toRefs(props);

  // ============ DEPENDENCIES ============

  const input = dep.input;
  const open = dep.open;
  const close = dep.close;
  const clearSearch = dep.clearSearch;
  const isOpen = dep.isOpen;
  const wrapper = dep.wrapper;
  const tags = dep.tags;

  // ================ DATA ================

  const isActive = ref(false);

  const mouseClicked = ref(false);

  // ============== COMPUTED ==============

  const tabindex = toRef(() => {
    return searchable.value || disabled.value ? -1 : 0
  });

  // =============== METHODS ==============

  const blur = () => {
    if (searchable.value) {
      input.value.blur();
    }

    wrapper.value.blur();
  };

  const focus = () => {
    if (searchable.value && !disabled.value) {
      input.value.focus();
    }
  };

  const activate = (shouldOpen = true) => {
    if (disabled.value) {
      return
    }

    isActive.value = true;

    if (shouldOpen) {
      open();
    }
  };

  const deactivate = () => {
    isActive.value = false;

    setTimeout(() => {
      if (!isActive.value) {
        close();

        if (clearOnBlur.value) {
          clearSearch();
        }
      }
    }, 1);
  };

  const handleFocusIn = (e) => {
    if ((e.target.closest('[data-tags]') && e.target.nodeName !== 'INPUT') || e.target.closest('[data-clear]')) {
      return
    }

    activate(mouseClicked.value);
  };

  const handleFocusOut = () => {
    deactivate();
  };

  const handleCaretClick = () => {
    deactivate();
    blur();
  };

  /* istanbul ignore next */
  const handleMousedown = (e) => {
    mouseClicked.value = true;

    if (isOpen.value && (e.target.isEqualNode(wrapper.value) || e.target.isEqualNode(tags.value))) {
      setTimeout(() => {
        deactivate();
      }, 0);
    } else if (!isOpen.value 
      && (document.activeElement.isEqualNode(wrapper.value)
        || document.activeElement.isEqualNode(input.value))) {
      activate();    
    }

    setTimeout(() => {
      mouseClicked.value = false;
    }, 0);
  };

  return {
    tabindex,
    isActive,
    mouseClicked,
    blur,
    focus,
    activate,
    deactivate,
    handleFocusIn,
    handleFocusOut,
    handleCaretClick,
    handleMousedown,
  }
}

function useKeyboard (props, context, dep)
{
  const {
    mode, addTagOn, openDirection, searchable,
    showOptions, valueProp, groups: groupped,
    addOptionOn: addOptionOn_, createTag, createOption: createOption_,
    reverse,
  } = toRefs(props);

  const $this = getCurrentInstance().proxy;

  // ============ DEPENDENCIES ============

  const iv = dep.iv;
  const update = dep.update;
  const deselect = dep.deselect;
  const search = dep.search;
  const setPointer = dep.setPointer;
  const selectPointer = dep.selectPointer;
  const backwardPointer = dep.backwardPointer;
  const forwardPointer = dep.forwardPointer;
  const multiselect = dep.multiselect;
  const wrapper = dep.wrapper;
  const tags = dep.tags;
  const isOpen = dep.isOpen;
  const open = dep.open;
  const blur = dep.blur;
  const fo = dep.fo;

  // ============== COMPUTED ==============

  // no export
  const createOption = toRef(() => {
    return createTag.value || createOption_.value || false
  });

  // no export
  const addOptionOn = toRef(() => {
    if (addTagOn.value !== undefined) {
      return addTagOn.value
    }
    else if (addOptionOn_.value !== undefined) {
      return addOptionOn_.value
    }

    return ['enter']
  });

  // =============== METHODS ==============

  // no export
  const preparePointer = () => {
    // When options are hidden and creating tags is allowed
    // no pointer will be set (because options are hidden).
    // In such case we need to set the pointer manually to the 
    // first option, which equals to the option created from
    // the search value.
    if (mode.value === 'tags' && !showOptions.value && createOption.value && searchable.value && !groupped.value) {
      setPointer(fo.value[fo.value.map(o => o[valueProp.value]).indexOf(search.value)]);
    }
  };

  const handleKeydown = (e) => {
    context.emit('keydown', e, $this);

    let tagList;
    let activeIndex;

    if (['ArrowLeft', 'ArrowRight', 'Enter'].indexOf(e.key) !== -1 && mode.value === 'tags') {
      tagList = [...(multiselect.value.querySelectorAll(`[data-tags] > *`))].filter(e => e !== tags.value);
      activeIndex = tagList.findIndex(e => e === document.activeElement);
    }

    switch (e.key) {
      case 'Backspace':
        if (mode.value === 'single') {
          return
        }

        if (searchable.value && [null, ''].indexOf(search.value) === -1) {
          return
        }

        if (iv.value.length === 0) {
          return
        }

        let deselectables = iv.value.filter(v=>!v.disabled && v.remove !== false);

        if (deselectables.length) {
          deselect(deselectables[deselectables.length - 1]);
        }
        break

      case 'Enter':
        e.preventDefault();

        if (e.keyCode === 229) {
          // ignore IME confirmation
          return
        }

        if (activeIndex !== -1 && activeIndex !== undefined) {
          update([...iv.value].filter((v, k) => k !== activeIndex));

          if (activeIndex === tagList.length - 1) {
            if (tagList.length - 1) {
              tagList[tagList.length - 2].focus();
            } else if (searchable.value) {
              tags.value.querySelector('input').focus();
            } else {
              wrapper.value.focus();
            }
          }
          return
        }

        if (addOptionOn.value.indexOf('enter') === -1 && createOption.value) {
          return
        }
        
        preparePointer();
        selectPointer();
        break

      case ' ':
        if (!createOption.value && !searchable.value) {
          e.preventDefault();
          
          preparePointer();
          selectPointer();
          return
        }

        if (!createOption.value) {
          return false
        } 

        if (addOptionOn.value.indexOf('space') === -1 && createOption.value) {
          return
        }

        e.preventDefault();
        
        preparePointer();
        selectPointer();
        break
      
      case 'Tab':
      case ';':
      case ',':
        if (addOptionOn.value.indexOf(e.key.toLowerCase()) === -1 || !createOption.value) {
          return
        }

        preparePointer();
        selectPointer();
        e.preventDefault();
        break

      case 'Escape':
        blur();
        break

      case 'ArrowUp':
        e.preventDefault();

        if (!showOptions.value) {
          return
        }

        /* istanbul ignore else */
        if (!isOpen.value) {
          open();
        }
        
        backwardPointer();
        break

      case 'ArrowDown':
        e.preventDefault();

        if (!showOptions.value) {
          return
        }

        /* istanbul ignore else */
        if (!isOpen.value) {
          open();
        }

        forwardPointer();
        break

      case 'ArrowLeft':
        if (
          (searchable.value && tags.value && tags.value.querySelector('input').selectionStart)
          || e.shiftKey || mode.value !== 'tags' || !iv.value || !iv.value.length
        ) {
          return
        }

        e.preventDefault();

        if (activeIndex === -1) {
          tagList[tagList.length-1].focus();
        }
        else if (activeIndex > 0) {
          tagList[activeIndex-1].focus();
        }
        break

      case 'ArrowRight':
        if (activeIndex === -1 || e.shiftKey || mode.value !== 'tags' || !iv.value || !iv.value.length) {
          return
        }

        e.preventDefault();
        
        /* istanbul ignore else */
        if (tagList.length > activeIndex + 1) {
          tagList[activeIndex+1].focus();
        }
        else if (searchable.value) {
          tags.value.querySelector('input').focus();
        }
        else if (!searchable.value) {
          wrapper.value.focus();
        }
        
        break
    }
  };

  const handleKeyup = (e) => {
    context.emit('keyup', e, $this);
  };

  return {
    handleKeydown,
    handleKeyup,
    preparePointer,
  }
}

function useClasses$2 (props, context, dependencies)
{const { 
    classes: classes_, disabled, showOptions, breakTags
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  const isOpen = dependencies.isOpen;
  const isPointed = dependencies.isPointed;
  const isSelected = dependencies.isSelected;
  const isDisabled = dependencies.isDisabled;
  const isActive = dependencies.isActive;
  const canPointGroups = dependencies.canPointGroups;
  const resolving = dependencies.resolving;
  const fo = dependencies.fo;
  const placement = dependencies.placement;

  // ============== COMPUTED ==============

  const classes = toRef(() => ({
    container: 'multiselect',
    containerDisabled: 'is-disabled',
    containerOpen: 'is-open',
    containerOpenTop: 'is-open-top',
    containerActive: 'is-active',
    wrapper: 'multiselect-wrapper',
    singleLabel: 'multiselect-single-label',
    singleLabelText: 'multiselect-single-label-text',
    multipleLabel: 'multiselect-multiple-label',
    search: 'multiselect-search',
    tags: 'multiselect-tags',
    tag: 'multiselect-tag',
    tagWrapper: 'multiselect-tag-wrapper',
    tagWrapperBreak: 'multiselect-tag-wrapper-break',
    tagDisabled: 'is-disabled',
    tagRemove: 'multiselect-tag-remove',
    tagRemoveIcon: 'multiselect-tag-remove-icon',
    tagsSearchWrapper: 'multiselect-tags-search-wrapper',
    tagsSearch: 'multiselect-tags-search',
    tagsSearchCopy: 'multiselect-tags-search-copy',
    placeholder: 'multiselect-placeholder',
    caret: 'multiselect-caret',
    caretOpen: 'is-open',
    clear: 'multiselect-clear',
    clearIcon: 'multiselect-clear-icon',
    spinner: 'multiselect-spinner',
    inifinite: 'multiselect-inifite',
    inifiniteSpinner: 'multiselect-inifite-spinner',
    dropdown: 'multiselect-dropdown',
    dropdownTop: 'is-top',
    dropdownHidden: 'is-hidden',
    options: 'multiselect-options',
    optionsTop: 'is-top',
    group: 'multiselect-group',
    groupLabel: 'multiselect-group-label',
    groupLabelPointable: 'is-pointable',
    groupLabelPointed: 'is-pointed',
    groupLabelSelected: 'is-selected',
    groupLabelDisabled: 'is-disabled',
    groupLabelSelectedPointed: 'is-selected is-pointed',
    groupLabelSelectedDisabled: 'is-selected is-disabled',
    groupOptions: 'multiselect-group-options',
    option: 'multiselect-option',
    optionPointed: 'is-pointed',
    optionSelected: 'is-selected',
    optionDisabled: 'is-disabled',
    optionSelectedPointed: 'is-selected is-pointed',
    optionSelectedDisabled: 'is-selected is-disabled',
    noOptions: 'multiselect-no-options',
    noResults: 'multiselect-no-results',
    fakeInput: 'multiselect-fake-input',
    assist: 'multiselect-assistive-text',
    spacer: 'multiselect-spacer',
    ...classes_.value,
  }));

  const showDropdown = toRef(() => {
    return !!(isOpen.value && showOptions.value && (!resolving.value || (resolving.value && fo.value.length)))
  });

  const classList = computed(() => {
    const c = classes.value;

    return {
      container: [c.container]
        .concat(disabled.value ? c.containerDisabled : [])
        .concat(showDropdown.value && placement.value === 'top'  ? c.containerOpenTop : [])
        .concat(showDropdown.value && placement.value !== 'top' ? c.containerOpen : [])
        .concat(isActive.value ? c.containerActive : []),
      wrapper: c.wrapper,
      spacer: c.spacer,
      singleLabel: c.singleLabel,
      singleLabelText: c.singleLabelText,
      multipleLabel: c.multipleLabel,
      search: c.search,
      tags: c.tags,
      tag: [c.tag]
        .concat(disabled.value ? c.tagDisabled : []),
      tagWrapper: [c.tagWrapper, breakTags.value ? c.tagWrapperBreak : null],
      tagDisabled: c.tagDisabled,
      tagRemove: c.tagRemove,
      tagRemoveIcon: c.tagRemoveIcon,
      tagsSearchWrapper: c.tagsSearchWrapper,
      tagsSearch: c.tagsSearch,
      tagsSearchCopy: c.tagsSearchCopy,
      placeholder: c.placeholder,
      caret: [c.caret]
        .concat(isOpen.value ? c.caretOpen : []),
      clear: c.clear,
      clearIcon: c.clearIcon,
      spinner: c.spinner,
      inifinite: c.inifinite,
      inifiniteSpinner: c.inifiniteSpinner,
      dropdown: [c.dropdown]
        .concat(placement.value === 'top' ? c.dropdownTop : [])
        .concat(!isOpen.value || !showOptions.value || !showDropdown.value ? c.dropdownHidden : []),
      options: [c.options]
        .concat(placement.value === 'top' ? c.optionsTop : []),
      group: c.group,
      groupLabel: (g) => {
        let groupLabel = [c.groupLabel];

        if (isPointed(g)) {
          groupLabel.push(isSelected(g) ? c.groupLabelSelectedPointed : c.groupLabelPointed);
        } else if (isSelected(g) && canPointGroups.value) {
          groupLabel.push(isDisabled(g) ? c.groupLabelSelectedDisabled : c.groupLabelSelected);
        } else if (isDisabled(g)) {
          groupLabel.push(c.groupLabelDisabled);
        }

        if (canPointGroups.value) {
          groupLabel.push(c.groupLabelPointable);
        }

        return groupLabel
      },
      groupOptions: c.groupOptions,
      option: (o, g) => {
        let option = [c.option];

        if (isPointed(o)) {
          option.push(isSelected(o) ? c.optionSelectedPointed : c.optionPointed);
        } else if (isSelected(o)) {
          option.push(isDisabled(o) ? c.optionSelectedDisabled : c.optionSelected);
        } else if (isDisabled(o) || (g && isDisabled(g))) {
          option.push(c.optionDisabled);
        }

        return option
      },
      noOptions: c.noOptions,
      noResults: c.noResults,
      assist: c.assist,
      fakeInput: c.fakeInput,
    }
  });

  return {
    classList,
    showDropdown,
  }
}

function useScroll (props, context, dep)
{
  const {
    limit, infinite,
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  const isOpen = dep.isOpen;
  const offset = dep.offset;
  const search = dep.search;
  const pfo = dep.pfo;
  const eo = dep.eo;

  // ================ DATA ================

  // no export
  const observer = ref(null);

  const infiniteLoader = shallowRef(null);

  // ============== COMPUTED ==============

  const hasMore = toRef(() => {
    return offset.value < pfo.value.length
  });

  // =============== METHODS ==============

  // no export
  /* istanbul ignore next */
  const handleIntersectionObserver = (entries) => {
    const { isIntersecting, target } = entries[0];

    if (isIntersecting) {
      const parent = target.offsetParent;
      const scrollTop = parent.scrollTop;

      offset.value += limit.value == -1 ? 10 : limit.value;

      nextTick(() => {
        parent.scrollTop = scrollTop;
      });
    }
  };

  const observe = () => {
    /* istanbul ignore else */
    if (isOpen.value && offset.value < pfo.value.length) {
      observer.value.observe(infiniteLoader.value);
    } else if (!isOpen.value && observer.value) {
      observer.value.disconnect();
    }
  };

  // ============== WATCHERS ==============

  watch(isOpen, () => {
    if (!infinite.value) {
      return
    }

    observe();
  });

  watch(search, () => {
    if (!infinite.value) {
      return
    }

    offset.value = limit.value;

    observe();
  }, { flush: 'post' });

  watch(eo, () => {
    if (!infinite.value) {
      return
    }

    observe();
  }, { immediate: false, flush: 'post' });

  // ================ HOOKS ===============

  onMounted(() => {
    /* istanbul ignore else */
    if (window && window.IntersectionObserver) {
      observer.value = new IntersectionObserver(handleIntersectionObserver);
    }
  });

  return {
    hasMore,
    infiniteLoader,
  }
}

function useA11y (props, context, dep)
{
  const {
    placeholder, id, valueProp, label: labelProp, mode, groupLabel, aria, searchable ,
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  const pointer = dep.pointer;
  const iv = dep.iv;
  const hasSelected = dep.hasSelected;
  const multipleLabelText = dep.multipleLabelText;

  // ================ DATA ================

  const label = ref(null);

  // ============== COMPUTED ==============

  const ariaAssist = toRef(() => (
    `${id.value ? id.value + '-' : ''}assist`
  ));

  const ariaControls = toRef(() => (
    `${id.value ? id.value + '-' : ''}multiselect-options`
  ));

  const ariaActiveDescendant = toRef(() => {
    if (pointer.value) {
      let texts = id.value
        ? `${id.value}-`
        : '';

      texts += `${pointer.value.group ? 'multiselect-group' : 'multiselect-option'}-`;

      texts += pointer.value.group ? pointer.value.index : pointer.value[valueProp.value];

      return texts
    }
  });

  const ariaPlaceholder = toRef(() => {
    return placeholder.value
  });

  const ariaMultiselectable = toRef(() => {
    return mode.value !== 'single'
  });

  const ariaLabel = computed(() => {
    if (mode.value === 'single' && hasSelected.value) {
      return iv.value[labelProp.value]
    }

    if (mode.value === 'multiple' && hasSelected.value) {
      return multipleLabelText.value
    }

    if (mode.value === 'tags' && hasSelected.value) {
      return iv.value.map(v => v[labelProp.value]).join(', ')
    }

    return ''
  });

  const arias = computed(() => {
    let arias = { ...aria.value };
    
    // Need to add manually because focusing
    // the input won't read the selected value
    if (searchable.value) {
      arias['aria-labelledby'] = arias['aria-labelledby']
        ? `${ariaAssist.value} ${arias['aria-labelledby']}`
        : ariaAssist.value;
      
      if (ariaLabel.value && arias['aria-label']) {
        arias['aria-label'] = `${ariaLabel.value}, ${arias['aria-label']}`;
      }
    }

    return arias
  });

  // =============== METHODS ==============

  const ariaOptionId = (option) => (
    `${id.value ? id.value + '-' : ''}multiselect-option-${option[valueProp.value]}`
  );

  const ariaGroupId = (option) => (
    `${id.value ? id.value + '-' : ''}multiselect-group-${option.index}`
  );

  const ariaOptionLabel = (label) => `${label}`;

  const ariaGroupLabel = (label) => `${label}`;

  const ariaTagLabel = (label) => `${label} ❎`;

  // =============== HOOKS ================

  onMounted(() => {
    /* istanbul ignore next */
    if (id.value && document && document.querySelector) {
      let forTag = document.querySelector(`[for="${id.value}"]`);
      label.value = forTag ? forTag.innerText : null;
    }
  });

  return {
    arias,
    ariaLabel,
    ariaAssist,
    ariaControls,
    ariaPlaceholder,
    ariaMultiselectable,
    ariaActiveDescendant,
    ariaOptionId,
    ariaOptionLabel,
    ariaGroupId,
    ariaGroupLabel,
    ariaTagLabel,
  }
}

function useI18n (props, context, dep)
{
  const {
    locale, fallbackLocale,
  } = toRefs(props);

  // =============== METHODS ==============

  const localize = (target) => {
    if (!target || typeof target !== 'object') {
      return target
    }

    if (target && target[locale.value]) {
      return target[locale.value]
    } else if (target && locale.value && target[locale.value.toUpperCase()]) {
      return target[locale.value.toUpperCase()]
    } else if (target && target[fallbackLocale.value]) {
      return target[fallbackLocale.value]
    } else if (target && fallbackLocale.value && target[fallbackLocale.value.toUpperCase()]) {
      return target[fallbackLocale.value.toUpperCase()]
    } else if (target && Object.keys(target)[0]) {
      return target[Object.keys(target)[0]]
    } else {
      return ''
    }
  };

  return {
    localize,
  }
}

function useRefs (props, context, dep)
{
  // ================ DATA ================

  const multiselect = shallowRef(null);
  
  const wrapper = shallowRef(null);

  const tags = shallowRef(null);

  const input = shallowRef(null);

  const dropdown = shallowRef(null);

  return {
    multiselect,
    wrapper,
    tags,
    input,
    dropdown,
  }
}

function resolveDeps (props, context, features, deps = {}) {
  features.forEach((composable) => {
    deps = {
      ...deps,
      ...composable(props, context, deps)
    };
  });
  
  return deps
}

//

  var script$x = {
    name: 'Multiselect',
    emits: [
      'paste', 'open', 'close', 'select', 'deselect', 
      'input', 'search-change', 'tag', 'option', 'update:modelValue',
      'change', 'clear', 'keydown', 'keyup', 'max', 'create',
    ],
    props: {
      value: {
        required: false,
      },
      modelValue: {
        required: false,
      },
      options: {
        type: [Array, Object, Function],
        required: false,
        default: () => ([])
      },
      id: {
        type: [String, Number],
        required: false,
        default: undefined,
      },
      name: {
        type: [String, Number],
        required: false,
        default: 'multiselect',
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      },
      label: {
        type: String,
        required: false,
        default: 'label',
      },
      trackBy: {
        type: [String, Array],
        required: false,
        default: undefined,
      },
      valueProp: {
        type: String,
        required: false,
        default: 'value',
      },
      placeholder: {
        type: String,
        required: false,
        default: null,
      },
      mode: {
        type: String,
        required: false,
        default: 'single', // single|multiple|tags
      },
      searchable: {
        type: Boolean,
        required: false,
        default: false,
      },
      limit: {
        type: Number,
        required: false,
        default: -1,
      },
      hideSelected: {
        type: Boolean,
        required: false,
        default: true,
      },
      createTag: {
        type: Boolean,
        required: false,
        default: undefined,
      },
      createOption: {
        type: Boolean,
        required: false,
        default: undefined,
      },
      appendNewTag: {
        type: Boolean,
        required: false,
        default: undefined,
      },
      appendNewOption: {
        type: Boolean,
        required: false,
        default: undefined,
      },
      addTagOn: {
        type: Array,
        required: false,
        default: undefined,
      },
      addOptionOn: {
        type: Array,
        required: false,
        default: undefined,
      },
      caret: {
        type: Boolean,
        required: false,
        default: true,
      },
      loading: {
        type: Boolean,
        required: false,
        default: false,
      },
      noOptionsText: {
        type: [String, Object],
        required: false,
        default: 'The list is empty',
      },
      noResultsText: {
        type: [String, Object],
        required: false,
        default: 'No results found',
      },
      multipleLabel: {
        type: Function,
        required: false,
        default: undefined,
      },
      object: {
        type: Boolean,
        required: false,
        default: false,
      },
      delay: {
        type: Number,
        required: false,
        default: -1,
      },
      minChars: {
        type: Number,
        required: false,
        default: 0,
      },
      resolveOnLoad: {
        type: Boolean,
        required: false,
        default: true,
      },
      filterResults: {
        type: Boolean,
        required: false,
        default: true,
      },
      clearOnSearch: {
        type: Boolean,
        required: false,
        default: false,
      },
      clearOnSelect: {
        type: Boolean,
        required: false,
        default: true,
      },
      canDeselect: {
        type: Boolean,
        required: false,
        default: true,
      },
      canClear: {
        type: Boolean,
        required: false,
        default: true,
      },
      max: {
        type: Number,
        required: false,
        default: -1,
      },
      showOptions: {
        type: Boolean,
        required: false,
        default: true,
      },
      required: {
        type: Boolean,
        required: false,
        default: false,
      },
      openDirection: {
        type: String,
        required: false,
        default: 'bottom',
      },
      nativeSupport: {
        type: Boolean,
        required: false,
        default: false,
      },
      classes: {
        type: Object,
        required: false,
        default: () => ({})
      },
      strict: {
        type: Boolean,
        required: false,
        default: true,
      },
      closeOnSelect: {
        type: Boolean,
        required: false,
        default: true,
      },
      closeOnDeselect: {
        type: Boolean,
        required: false,
        default: false,
      },
      autocomplete: {
        type: String,
        required: false,
        default: undefined,
      },
      groups: {
        type: Boolean,
        required: false,
        default: false,
      },
      groupLabel: {
        type: String,
        required: false,
        default: 'label',
      },
      groupOptions: {
        type: String,
        required: false,
        default: 'options',
      },
      groupHideEmpty: {
        type: Boolean,
        required: false,
        default: false,
      },
      groupSelect: {
        type: Boolean,
        required: false,
        default: true,
      },
      inputType: {
        type: String,
        required: false,
        default: 'text',
      },
      attrs: {
        required: false,
        type: Object,
        default: () => ({}),
      },
      onCreate: {
        required: false,
        type: Function,
        default: undefined,
      },
      disabledProp: {
        type: String,
        required: false,
        default: 'disabled',
      },
      searchStart: {
        type: Boolean,
        required: false,
        default: false,
      },
      reverse: {
        type: Boolean,
        required: false,
        default: false,
      },
      regex: {
        type: [Object, String, RegExp],
        required: false,
        default: undefined,
      },
      rtl: {
        type: Boolean,
        required: false,
        default: false,
      },
      infinite: {
        type: Boolean,
        required: false,
        default: false,
      },
      aria: {
        required: false,
        type: Object,
        default: () => ({}),
      },
      clearOnBlur: {
        required: false,
        type: Boolean,
        default: true,
      },
      locale: {
        required: false,
        type: String,
        default: null,
      },
      fallbackLocale: {
        required: false,
        type: String,
        default: 'en',
      },
      searchFilter: {
        required: false,
        type: Function,
        default: null,
      },
      allowAbsent: {
        required: false,
        type: Boolean,
        default: false,
      },
      appendToBody: {
        required: false,
        type: Boolean,
        default: false,
      },
      closeOnScroll: {
        required: false,
        type: Boolean,
        default: false,
      },
      breakTags: {
        required: false,
        type: Boolean,
        default: false,
      },
      appendTo: {
        required: false,
        type: String,
        default: undefined,
      },
    },
    setup(props, context)
    { 
      return resolveDeps(props, context, [
        useRefs,
        useI18n,
        useValue$3,
        usePointer$1,
        useDropdown,
        useSearch,
        useData,
        useMultiselect,
        useOptions,
        useScroll,
        usePointer,
        useKeyboard,
        useClasses$2,
        useA11y,
      ])
    },
    beforeMount() {
      if ((this.$root.constructor && this.$root.constructor.version && this.$root.constructor.version.match(/^2\./)) || this.vueVersionMs === 2) {
        if (!this.$options.components.Teleport) {
          this.$options.components.Teleport = {
            render() {
              return this.$slots.default ? this.$slots.default[0] : null
            }
          };
        }
      }
    }
  };

/* script */
const __vue_script__$x = script$x;

/* template */
var __vue_render__$s = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      ref: "multiselect",
      class: _vm.classList.container,
      attrs: {
        id: _vm.searchable ? undefined : _vm.id,
        dir: _vm.rtl ? "rtl" : undefined,
      },
      on: {
        focusin: _vm.handleFocusIn,
        focusout: _vm.handleFocusOut,
        keyup: _vm.handleKeyup,
        keydown: _vm.handleKeydown,
      },
    },
    [
      _c(
        "div",
        _vm._b(
          {
            ref: "wrapper",
            class: _vm.classList.wrapper,
            attrs: {
              tabindex: _vm.tabindex,
              "aria-controls": !_vm.searchable ? _vm.ariaControls : undefined,
              "aria-placeholder": !_vm.searchable
                ? _vm.ariaPlaceholder
                : undefined,
              "aria-expanded": !_vm.searchable ? _vm.isOpen : undefined,
              "aria-activedescendant": !_vm.searchable
                ? _vm.ariaActiveDescendant
                : undefined,
              "aria-multiselectable": !_vm.searchable
                ? _vm.ariaMultiselectable
                : undefined,
              role: !_vm.searchable ? "combobox" : undefined,
            },
            on: { mousedown: _vm.handleMousedown },
          },
          "div",
          !_vm.searchable ? _vm.arias : {},
          false
        ),
        [
          _vm.mode !== "tags" && _vm.searchable && !_vm.disabled
            ? [
                _c(
                  "input",
                  _vm._b(
                    {
                      ref: "input",
                      class: _vm.classList.search,
                      attrs: {
                        type: _vm.inputType,
                        modelValue: _vm.search,
                        autocomplete: _vm.autocomplete,
                        id: _vm.searchable ? _vm.id : undefined,
                        "aria-controls": _vm.ariaControls,
                        "aria-placeholder": _vm.ariaPlaceholder,
                        "aria-expanded": _vm.isOpen,
                        "aria-activedescendant": _vm.ariaActiveDescendant,
                        "aria-multiselectable": _vm.ariaMultiselectable,
                        role: "combobox",
                      },
                      domProps: { value: _vm.search },
                      on: {
                        input: _vm.handleSearchInput,
                        keypress: _vm.handleKeypress,
                        paste: function ($event) {
                          $event.stopPropagation();
                          return _vm.handlePaste.apply(null, arguments)
                        },
                      },
                    },
                    "input",
                    Object.assign({}, _vm.attrs, _vm.arias),
                    false
                  )
                ),
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.mode == "tags"
            ? [
                _c(
                  "div",
                  { class: _vm.classList.tags, attrs: { "data-tags": "" } },
                  [
                    _vm._l(_vm.iv, function (option, i, key) {
                      return _vm._t(
                        "tag",
                        function () {
                          return [
                            _c(
                              "span",
                              {
                                key: key,
                                class: [
                                  _vm.classList.tag,
                                  option.disabled
                                    ? _vm.classList.tagDisabled
                                    : null,
                                ],
                                attrs: {
                                  tabindex: "-1",
                                  "aria-label": _vm.ariaTagLabel(
                                    _vm.localize(option[_vm.label])
                                  ),
                                },
                                on: {
                                  keyup: function ($event) {
                                    if (
                                      !$event.type.indexOf("key") &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key,
                                        "Enter"
                                      )
                                    ) {
                                      return null
                                    }
                                    return _vm.handleTagRemove(option, $event)
                                  },
                                },
                              },
                              [
                                _c(
                                  "span",
                                  { class: _vm.classList.tagWrapper },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.localize(option[_vm.label]))
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                !_vm.disabled && !option.disabled
                                  ? _c(
                                      "span",
                                      {
                                        class: _vm.classList.tagRemove,
                                        on: {
                                          click: function ($event) {
                                            $event.stopPropagation();
                                            return _vm.handleTagRemove(
                                              option,
                                              $event
                                            )
                                          },
                                        },
                                      },
                                      [
                                        _c("span", {
                                          class: _vm.classList.tagRemoveIcon,
                                        }),
                                      ]
                                    )
                                  : _vm._e(),
                              ]
                            ),
                          ]
                        },
                        {
                          option: option,
                          handleTagRemove: _vm.handleTagRemove,
                          disabled: _vm.disabled,
                        }
                      )
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { ref: "tags", class: _vm.classList.tagsSearchWrapper },
                      [
                        _c("span", { class: _vm.classList.tagsSearchCopy }, [
                          _vm._v(_vm._s(_vm.search)),
                        ]),
                        _vm._v(" "),
                        _vm.searchable && !_vm.disabled
                          ? _c(
                              "input",
                              _vm._b(
                                {
                                  ref: "input",
                                  class: _vm.classList.tagsSearch,
                                  attrs: {
                                    type: _vm.inputType,
                                    modelValue: _vm.search,
                                    id: _vm.searchable ? _vm.id : undefined,
                                    autocomplete: _vm.autocomplete,
                                    "aria-controls": _vm.ariaControls,
                                    "aria-placeholder": _vm.ariaPlaceholder,
                                    "aria-expanded": _vm.isOpen,
                                    "aria-activedescendant":
                                      _vm.ariaActiveDescendant,
                                    "aria-multiselectable":
                                      _vm.ariaMultiselectable,
                                    role: "combobox",
                                  },
                                  domProps: { value: _vm.search },
                                  on: {
                                    input: _vm.handleSearchInput,
                                    keypress: _vm.handleKeypress,
                                    paste: function ($event) {
                                      $event.stopPropagation();
                                      return _vm.handlePaste.apply(
                                        null,
                                        arguments
                                      )
                                    },
                                  },
                                },
                                "input",
                                Object.assign({}, _vm.attrs, _vm.arias),
                                false
                              )
                            )
                          : _vm._e(),
                      ]
                    ),
                  ],
                  2
                ),
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.mode == "single" && _vm.hasSelected && !_vm.search && _vm.iv
            ? [
                _vm._t(
                  "singlelabel",
                  function () {
                    return [
                      _c("div", { class: _vm.classList.singleLabel }, [
                        _c("span", { class: _vm.classList.singleLabelText }, [
                          _vm._v(_vm._s(_vm.localize(_vm.iv[_vm.label]))),
                        ]),
                      ]),
                    ]
                  },
                  { value: _vm.iv }
                ),
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.mode == "multiple" && _vm.hasSelected && !_vm.search
            ? [
                _vm._t(
                  "multiplelabel",
                  function () {
                    return [
                      _c("div", {
                        class: _vm.classList.multipleLabel,
                        domProps: { innerHTML: _vm._s(_vm.multipleLabelText) },
                      }),
                    ]
                  },
                  { values: _vm.iv }
                ),
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.placeholder && !_vm.hasSelected && !_vm.search
            ? [
                _vm._t("placeholder", function () {
                  return [
                    _c(
                      "div",
                      {
                        class: _vm.classList.placeholder,
                        attrs: { "aria-hidden": "true" },
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.placeholder) +
                            "\n        "
                        ),
                      ]
                    ),
                  ]
                }),
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.loading || _vm.resolving
            ? _vm._t("spinner", function () {
                return [
                  _c("span", {
                    class: _vm.classList.spinner,
                    attrs: { "aria-hidden": "true" },
                  }),
                ]
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.hasSelected && !_vm.disabled && _vm.canClear && !_vm.busy
            ? _vm._t(
                "clear",
                function () {
                  return [
                    _c(
                      "span",
                      {
                        class: _vm.classList.clear,
                        attrs: {
                          "aria-hidden": "true",
                          tabindex: "0",
                          role: "button",
                          "data-clear": "",
                          "aria-roledescription": "❎",
                        },
                        on: {
                          click: _vm.clear,
                          keyup: function ($event) {
                            if (
                              !$event.type.indexOf("key") &&
                              _vm._k(
                                $event.keyCode,
                                "enter",
                                13,
                                $event.key,
                                "Enter"
                              )
                            ) {
                              return null
                            }
                            return _vm.clear.apply(null, arguments)
                          },
                        },
                      },
                      [_c("span", { class: _vm.classList.clearIcon })]
                    ),
                  ]
                },
                { clear: _vm.clear }
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.caret && _vm.showOptions
            ? _vm._t(
                "caret",
                function () {
                  return [
                    _c("span", {
                      class: _vm.classList.caret,
                      attrs: { "aria-hidden": "true" },
                      on: { click: _vm.handleCaretClick },
                    }),
                  ]
                },
                { handleCaretClick: _vm.handleCaretClick, isOpen: _vm.isOpen }
              )
            : _vm._e(),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "Teleport",
        {
          attrs: {
            to: _vm.appendTo || "body",
            disabled: !_vm.appendToBody && !_vm.appendTo,
          },
        },
        [
          _c(
            "div",
            {
              ref: "dropdown",
              class: _vm.classList.dropdown,
              attrs: {
                id: _vm.id ? _vm.id + "-dropdown" : undefined,
                tabindex: "-1",
              },
              on: { focusin: _vm.handleFocusIn, focusout: _vm.handleFocusOut },
            },
            [
              _vm._t("beforelist", null, { options: _vm.fo }),
              _vm._v(" "),
              _c(
                "ul",
                {
                  class: _vm.classList.options,
                  attrs: { id: _vm.ariaControls, role: "listbox" },
                },
                [
                  _vm.groups
                    ? _vm._l(_vm.fg, function (group, i, key) {
                        return _c(
                          "li",
                          {
                            key: key,
                            class: _vm.classList.group,
                            attrs: {
                              id: _vm.ariaGroupId(group),
                              "aria-label": _vm.ariaGroupLabel(
                                _vm.localize(group[_vm.groupLabel])
                              ),
                              "aria-selected": _vm.isSelected(group),
                              role: "option",
                            },
                          },
                          [
                            !group.__CREATE__
                              ? _c(
                                  "div",
                                  {
                                    class: _vm.classList.groupLabel(group),
                                    attrs: {
                                      "data-pointed": _vm.isPointed(group),
                                    },
                                    on: {
                                      mouseenter: function ($event) {
                                        return _vm.setPointer(group, i)
                                      },
                                      click: function ($event) {
                                        return _vm.handleGroupClick(group)
                                      },
                                    },
                                  },
                                  [
                                    _vm._t(
                                      "grouplabel",
                                      function () {
                                        return [
                                          _c("span", {
                                            domProps: {
                                              innerHTML: _vm._s(
                                                _vm.localize(
                                                  group[_vm.groupLabel]
                                                )
                                              ),
                                            },
                                          }),
                                        ]
                                      },
                                      {
                                        group: group,
                                        isSelected: _vm.isSelected,
                                        isPointed: _vm.isPointed,
                                      }
                                    ),
                                  ],
                                  2
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "ul",
                              {
                                class: _vm.classList.groupOptions,
                                attrs: {
                                  "aria-label": _vm.ariaGroupLabel(
                                    _vm.localize(group[_vm.groupLabel])
                                  ),
                                  role: "group",
                                },
                              },
                              _vm._l(
                                group.__VISIBLE__,
                                function (option, i, key) {
                                  return _c(
                                    "li",
                                    {
                                      key: key,
                                      class: _vm.classList.option(
                                        option,
                                        group
                                      ),
                                      attrs: {
                                        "data-pointed": _vm.isPointed(option),
                                        "data-selected":
                                          _vm.isSelected(option) || undefined,
                                        id: _vm.ariaOptionId(option),
                                        "aria-selected": _vm.isSelected(option),
                                        "aria-label": _vm.ariaOptionLabel(
                                          _vm.localize(option[_vm.label])
                                        ),
                                        role: "option",
                                      },
                                      on: {
                                        mouseenter: function ($event) {
                                          return _vm.setPointer(option)
                                        },
                                        click: function ($event) {
                                          return _vm.handleOptionClick(option)
                                        },
                                      },
                                    },
                                    [
                                      _vm._t(
                                        "option",
                                        function () {
                                          return [
                                            _c("span", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.localize(
                                                    option[_vm.label]
                                                  )
                                                )
                                              ),
                                            ]),
                                          ]
                                        },
                                        {
                                          option: option,
                                          isSelected: _vm.isSelected,
                                          isPointed: _vm.isPointed,
                                          search: _vm.search,
                                        }
                                      ),
                                    ],
                                    2
                                  )
                                }
                              ),
                              0
                            ),
                          ]
                        )
                      })
                    : _vm._l(_vm.fo, function (option, i, key) {
                        return _c(
                          "li",
                          {
                            key: key,
                            class: _vm.classList.option(option),
                            attrs: {
                              "data-pointed": _vm.isPointed(option),
                              "data-selected":
                                _vm.isSelected(option) || undefined,
                              id: _vm.ariaOptionId(option),
                              "aria-selected": _vm.isSelected(option),
                              "aria-label": _vm.ariaOptionLabel(
                                _vm.localize(option[_vm.label])
                              ),
                              role: "option",
                            },
                            on: {
                              mouseenter: function ($event) {
                                return _vm.setPointer(option)
                              },
                              click: function ($event) {
                                return _vm.handleOptionClick(option)
                              },
                            },
                          },
                          [
                            _vm._t(
                              "option",
                              function () {
                                return [
                                  _c("span", [
                                    _vm._v(
                                      _vm._s(_vm.localize(option[_vm.label]))
                                    ),
                                  ]),
                                ]
                              },
                              {
                                option: option,
                                isSelected: _vm.isSelected,
                                isPointed: _vm.isPointed,
                                search: _vm.search,
                              }
                            ),
                          ],
                          2
                        )
                      }),
                ],
                2
              ),
              _vm._v(" "),
              _vm.noOptions
                ? _vm._t("nooptions", function () {
                    return [
                      _c("div", {
                        class: _vm.classList.noOptions,
                        domProps: {
                          innerHTML: _vm._s(_vm.localize(_vm.noOptionsText)),
                        },
                      }),
                    ]
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.noResults
                ? _vm._t("noresults", function () {
                    return [
                      _c("div", {
                        class: _vm.classList.noResults,
                        domProps: {
                          innerHTML: _vm._s(_vm.localize(_vm.noResultsText)),
                        },
                      }),
                    ]
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.infinite && _vm.hasMore
                ? _c(
                    "div",
                    { ref: "infiniteLoader", class: _vm.classList.inifinite },
                    [
                      _vm._t("infinite", function () {
                        return [
                          _c("span", { class: _vm.classList.inifiniteSpinner }),
                        ]
                      }),
                    ],
                    2
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm._t("afterlist", null, { options: _vm.fo }),
            ],
            2
          ),
        ]
      ),
      _vm._v(" "),
      _vm.required
        ? _c("input", {
            class: _vm.classList.fakeInput,
            attrs: { tabindex: "-1", required: "" },
            domProps: { value: _vm.textValue },
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.nativeSupport
        ? [
            _vm.mode == "single"
              ? _c("input", {
                  attrs: { type: "hidden", name: _vm.name },
                  domProps: {
                    value: _vm.plainValue !== undefined ? _vm.plainValue : "",
                  },
                })
              : _vm._l(_vm.plainValue, function (v, i) {
                  return _c("input", {
                    key: i,
                    attrs: { type: "hidden", name: _vm.name + "[]" },
                    domProps: { value: v },
                  })
                }),
          ]
        : _vm._e(),
      _vm._v(" "),
      _vm.searchable && _vm.hasSelected
        ? _c(
            "div",
            {
              class: _vm.classList.assist,
              attrs: { id: _vm.ariaAssist, "aria-hidden": "true" },
            },
            [_vm._v("\n    " + _vm._s(_vm.ariaLabel) + "\n  ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { class: _vm.classList.spacer }),
    ],
    2
  )
};
var __vue_staticRenderFns__$s = [];
__vue_render__$s._withStripped = true;

  /* style */
  const __vue_inject_styles__$x = undefined;
  /* scoped */
  const __vue_scope_id__$x = undefined;
  /* module identifier */
  const __vue_module_identifier__$x = undefined;
  /* functional template */
  const __vue_is_functional_template__$x = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$x = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s },
    __vue_inject_styles__$x,
    __vue_script__$x,
    __vue_scope_id__$x,
    __vue_is_functional_template__$x,
    __vue_module_identifier__$x,
    false,
    undefined,
    undefined,
    undefined
  );

//

  var script$w = {
    name: 'MultiselectElement',
    components: {
      Multiselect: __vue_component__$x,
    },
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          input: '',
          inputWrapper: '',
          select: {
            container: '',
            containerDisabled: '',
            containerOpen: '',
            containerOpenTop: '',
            containerActive: '',
            multipleLabel: '',
            search: '',
            placeholder: '',
            caret: '',
            caretOpen: '',
            clear: '',
            clearIcon: '',
            spinner: '',
            dropdown: '',
            dropdownTop: '',
            dropdownHidden: '',
            options: '',
            optionsTop: '',
            group: '',
            groupLabel: '',
            groupLabelPointable: '',
            groupLabelPointed: '',
            groupLabelSelected: '',
            groupLabelDisabled: '',
            groupLabelSelectedPointed: '',
            groupLabelSelectedDisabled: '',
            groupOptions: '',
            option: '',
            optionPointed: '',
            optionSelected: '',
            optionDisabled: '',
            optionSelectedPointed: '',
            optionSelectedDisabled: '',
            noOptions: '',
            noResults: '',
            fakeInput: '',
            spacer: '',
          },
        }
      }
    }
  };

var css_248z$u = "";
styleInject(css_248z$u);

/* script */
const __vue_script__$w = script$w;
/* template */
var __vue_render__$r = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _vm.hasFloating && !_vm.empty
                ? _c("ElementLabelFloating", { attrs: { visible: !_vm.empty } })
                : _vm._e(),
              _vm._v(" "),
              _vm.isNative
                ? _c("div", { class: _vm.classes.inputWrapper }, [
                    _c(
                      "select",
                      _vm._b(
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.value,
                              expression: "value",
                            },
                          ],
                          ref: "input",
                          class: _vm.classes.input,
                          attrs: {
                            name: _vm.name,
                            id: _vm.fieldId,
                            multiple: true,
                            disabled: _vm.isDisabled,
                          },
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value;
                                  return val
                                });
                              _vm.value = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0];
                            },
                          },
                        },
                        "select",
                        Object.assign({}, _vm.attrs, _vm.aria),
                        false
                      ),
                      _vm._l(_vm.resolvedOptions, function (option, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: option.value } },
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(option.label) +
                                "\n        "
                            ),
                          ]
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _vm.placeholder &&
                    _vm.empty &&
                    !_vm.isDisabled &&
                    _vm.type == "select"
                      ? _c("span", { class: _vm.classes.inputPlaceholder }, [
                          _vm._v(_vm._s(_vm.Placeholder)),
                        ])
                      : _vm._e(),
                  ])
                : _c(
                    "Multiselect",
                    _vm._b(
                      {
                        ref: "input",
                        attrs: {
                          classes: _vm.classes.select,
                          id: _vm.fieldId,
                          name: _vm.name,
                          options: _vm.resolvedOptions,
                          disabled: _vm.isDisabled,
                          placeholder: _vm.Placeholder,
                          attrs: _vm.attrs,
                          aria: _vm.aria,
                          locale: _vm.form$.locale$,
                        },
                        on: {
                          select: _vm.handleSelect,
                          deselect: _vm.handleDeselect,
                          "search-change": _vm.handleSearchChange,
                          tag: _vm.handleTag,
                          open: _vm.handleOpen,
                          close: _vm.handleClose,
                          clear: _vm.handleClear,
                          paste: _vm.handlePaste,
                        },
                        scopedSlots: _vm._u(
                          [
                            _vm._l(
                              {
                                option: "option",
                                noresults: "no-results",
                                nooptions: "no-options",
                                afterlist: "after-list",
                                beforelist: "before-list",
                                placeholder: "placeholder",
                                grouplabel: "group-label",
                                caret: "caret",
                                clear: "clear",
                                spinner: "spinner",
                                default: "default",
                              },
                              function (slotName, slotKey) {
                                return {
                                  key: slotKey,
                                  fn: function (props) {
                                    return [
                                      _vm._t(
                                        slotName,
                                        function () {
                                          return [
                                            _c(
                                              _vm.fieldSlots[slotName],
                                              _vm._b(
                                                {
                                                  tag: "component",
                                                  attrs: { el$: _vm.el$ },
                                                },
                                                "component",
                                                props,
                                                false
                                              )
                                            ),
                                          ]
                                        },
                                        { el$: _vm.el$ },
                                        props
                                      ),
                                    ]
                                  },
                                }
                              }
                            ),
                            _vm.fieldOptions.mode == "multiple"
                              ? {
                                  key: "multiplelabel",
                                  fn: function (ref) {
                                    var values = ref.values;
                                    return [
                                      _vm._t(
                                        "multiple-label",
                                        function () {
                                          return [
                                            _c(
                                              _vm.fieldSlots["multiple-label"],
                                              {
                                                tag: "component",
                                                attrs: {
                                                  values: values,
                                                  el$: _vm.el$,
                                                },
                                              }
                                            ),
                                          ]
                                        },
                                        { values: values, el$: _vm.el$ }
                                      ),
                                    ]
                                  },
                                }
                              : null,
                          ],
                          null,
                          true
                        ),
                        model: {
                          value: _vm.value,
                          callback: function ($$v) {
                            _vm.value = $$v;
                          },
                          expression: "value",
                        },
                      },
                      "Multiselect",
                      _vm.fieldOptions,
                      false
                    )
                  ),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$r = [];
__vue_render__$r._withStripped = true;

  /* style */
  const __vue_inject_styles__$w = undefined;
  /* scoped */
  const __vue_scope_id__$w = undefined;
  /* module identifier */
  const __vue_module_identifier__$w = undefined;
  /* functional template */
  const __vue_is_functional_template__$w = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$w = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$r, staticRenderFns: __vue_staticRenderFns__$r },
    __vue_inject_styles__$w,
    __vue_script__$w,
    __vue_scope_id__$w,
    __vue_is_functional_template__$w,
    __vue_module_identifier__$w,
    false,
    undefined,
    undefined,
    undefined
  );

  var MultiselectElement = __vue_component__$w;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$v = {
    name: 'ObjectElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    }
  };

var css_248z$t = "";
styleInject(css_248z$t);

/* script */
const __vue_script__$v = script$v;
/* template */
var __vue_render__$q = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    attrs: { multiple: true },
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _c(
                "div",
                {
                  class: _vm.classes.wrapper,
                  attrs: { role: "group", "aria-labelledby": _vm.labelId },
                },
                [
                  _vm._t("default", function () {
                    return _vm._l(_vm.children, function (element, name) {
                      return _c(
                        _vm.component(element),
                        _vm._b(
                          {
                            key: name,
                            tag: "component",
                            attrs: { embed: _vm.embed, name: name },
                            on: {
                              remove: function (e) {
                                return _vm.$emit("remove", e)
                              },
                            },
                          },
                          "component",
                          element,
                          false
                        )
                      )
                    })
                  }),
                ],
                2
              ),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$q = [];
__vue_render__$q._withStripped = true;

  /* style */
  const __vue_inject_styles__$v = undefined;
  /* scoped */
  const __vue_scope_id__$v = undefined;
  /* module identifier */
  const __vue_module_identifier__$v = undefined;
  /* functional template */
  const __vue_is_functional_template__$v = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$v = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
    __vue_inject_styles__$v,
    __vue_script__$v,
    __vue_scope_id__$v,
    __vue_is_functional_template__$v,
    __vue_module_identifier__$v,
    false,
    undefined,
    undefined,
    undefined
  );

  var ObjectElement = __vue_component__$v;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$u = {
    name: 'PhoneElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
        },
      }
    },
  };

var css_248z$s = "";
styleInject(css_248z$s);

/* script */
const __vue_script__$u = script$u;
/* template */
var __vue_render__$p = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _c(
                "div",
                { class: _vm.classes.inputContainer },
                [
                  _c(
                    "div",
                    { class: _vm.classes.optionsWrapper },
                    [
                      _c("ElementAddonOptions", {
                        ref: "options$",
                        attrs: {
                          options: _vm.addonOptions,
                          placeholder: _vm.addonPlaceholder,
                          aria: _vm.optionsAria,
                        },
                        on: {
                          select: _vm.handleOptionSelect,
                          open: _vm.handleOpen,
                          close: _vm.handleClose,
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.hasFloating && !_vm.empty
                    ? _c("ElementLabelFloating", {
                        attrs: { visible: !_vm.empty },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isLoading ? _c("ElementLoader") : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "input",
                    _vm._b(
                      {
                        ref: "input",
                        class: _vm.classes.input,
                        attrs: {
                          type: _vm.inputType,
                          name: _vm.name,
                          id: _vm.fieldId,
                          placeholder: _vm.Placeholder,
                          autocomplete: _vm.autocomplete,
                          disabled: _vm.isDisabled,
                          readonly: _vm.isReadonly,
                        },
                        domProps: { value: _vm.model },
                        on: {
                          keydown: _vm.handleKeydown,
                          input: _vm.handleInput,
                          select: _vm.handleInput,
                          blur: _vm.handleBlur,
                          focus: _vm.handleFocus,
                        },
                      },
                      "input",
                      Object.assign({}, _vm.attrs, _vm.aria),
                      false
                    )
                  ),
                ],
                1
              ),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$p = [];
__vue_render__$p._withStripped = true;

  /* style */
  const __vue_inject_styles__$u = undefined;
  /* scoped */
  const __vue_scope_id__$u = undefined;
  /* module identifier */
  const __vue_module_identifier__$u = undefined;
  /* functional template */
  const __vue_is_functional_template__$u = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$u = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
    __vue_inject_styles__$u,
    __vue_script__$u,
    __vue_scope_id__$u,
    __vue_is_functional_template__$u,
    __vue_module_identifier__$u,
    false,
    undefined,
    undefined,
    undefined
  );

  var PhoneElement = __vue_component__$u;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$t = {
    name: 'RadioElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          input: '',
          text: '',
        }
      }
    }
  };

var css_248z$r = "";
styleInject(css_248z$r);

/* script */
const __vue_script__$t = script$t;
/* template */
var __vue_render__$o = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _c("label", { class: _vm.classes.wrapper }, [
                _c(
                  "input",
                  _vm._b(
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.value,
                          expression: "value",
                        },
                      ],
                      ref: "input",
                      class: _vm.classes.input,
                      attrs: {
                        type: "radio",
                        name: _vm.inputName,
                        id: _vm.fieldId,
                        disabled: _vm.isDisabled,
                      },
                      domProps: {
                        value: _vm.radioValue,
                        checked: _vm._q(_vm.value, _vm.radioValue),
                      },
                      on: {
                        change: function ($event) {
                          _vm.value = _vm.radioValue;
                        },
                      },
                    },
                    "input",
                    _vm.aria,
                    false
                  )
                ),
                _vm._v(" "),
                _vm.Text
                  ? _c("span", {
                      class: _vm.classes.text,
                      domProps: { innerHTML: _vm._s(_vm.Text) },
                    })
                  : _c(
                      "span",
                      { class: _vm.classes.text },
                      [
                        _vm._t(
                          "default",
                          function () {
                            return [
                              _c(_vm.fieldSlots.default, {
                                tag: "component",
                                attrs: { el$: _vm.el$ },
                              }),
                            ]
                          },
                          { el$: _vm.el$ }
                        ),
                      ],
                      2
                    ),
              ]),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$o = [];
__vue_render__$o._withStripped = true;

  /* style */
  const __vue_inject_styles__$t = undefined;
  /* scoped */
  const __vue_scope_id__$t = undefined;
  /* module identifier */
  const __vue_module_identifier__$t = undefined;
  /* functional template */
  const __vue_is_functional_template__$t = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$t = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
    __vue_inject_styles__$t,
    __vue_script__$t,
    __vue_scope_id__$t,
    __vue_is_functional_template__$t,
    __vue_module_identifier__$t,
    false,
    undefined,
    undefined,
    undefined
  );

  var RadioElement = __vue_component__$t;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$s = {
    name: 'RadiogroupElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    }
  };

var css_248z$q = "";
styleInject(css_248z$q);

/* script */
const __vue_script__$s = script$s;
/* template */
var __vue_render__$n = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _c(
                "div",
                {
                  class: _vm.classes.wrapper,
                  attrs: { "aria-labelledby": _vm.labelId, role: "radiogroup" },
                },
                _vm._l(_vm.resolvedOptions, function (item, index, key) {
                  return _c("RadiogroupRadio", {
                    key: key,
                    attrs: {
                      items: _vm.resolvedOptions,
                      index: index,
                      item: item,
                      value: item.value,
                      attrs: _vm.aria,
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function (scope) {
                            return [
                              _vm._t(
                                "radio",
                                function () {
                                  return [
                                    _c(
                                      _vm.fieldSlots.radio,
                                      _vm._b(
                                        {
                                          tag: "component",
                                          attrs: { el$: _vm.el$ },
                                        },
                                        "component",
                                        scope,
                                        false
                                      )
                                    ),
                                  ]
                                },
                                { el$: _vm.el$ },
                                scope
                              ),
                            ]
                          },
                        },
                      ],
                      null,
                      true
                    ),
                  })
                }),
                1
              ),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$n = [];
__vue_render__$n._withStripped = true;

  /* style */
  const __vue_inject_styles__$s = undefined;
  /* scoped */
  const __vue_scope_id__$s = undefined;
  /* module identifier */
  const __vue_module_identifier__$s = undefined;
  /* functional template */
  const __vue_is_functional_template__$s = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$s = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
    __vue_inject_styles__$s,
    __vue_script__$s,
    __vue_scope_id__$s,
    __vue_is_functional_template__$s,
    __vue_module_identifier__$s,
    false,
    undefined,
    undefined,
    undefined
  );

  var RadiogroupElement_blocks = __vue_component__$s;

//

  var script$r = {
    name: 'SelectElement',
    components: {
      Multiselect: __vue_component__$x,
    },
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          input: '',
          inputWrapper: '',
          inputPlaceholder: '',
          inputCaret: '',
          select: {
            container: '',
            containerDisabled: '',
            containerOpen: '',
            containerOpenTop: '',
            containerActive: '',
            singleLabel: '',
            singleLabelText: '',
            search: '',
            placeholder: '',
            caret: '',
            caretOpen: '',
            clear: '',
            clearIcon: '',
            spinner: '',
            dropdown: '',
            dropdownTop: '',
            dropdownHidden: '',
            options: '',
            optionsTop: '',
            group: '',
            groupLabel: '',
            groupLabelPointable: '',
            groupLabelPointed: '',
            groupLabelSelected: '',
            groupLabelDisabled: '',
            groupLabelSelectedPointed: '',
            groupLabelSelectedDisabled: '',
            groupOptions: '',
            option: '',
            optionPointed: '',
            optionSelected: '',
            optionDisabled: '',
            optionSelectedPointed: '',
            optionSelectedDisabled: '',
            noOptions: '',
            noResults: '',
            fakeInput: '',
            spacer: '',
          },
        }
      }
    }
  };

var css_248z$p = "";
styleInject(css_248z$p);

/* script */
const __vue_script__$r = script$r;
/* template */
var __vue_render__$m = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _vm.hasFloating && !_vm.empty
                ? _c("ElementLabelFloating", { attrs: { visible: !_vm.empty } })
                : _vm._e(),
              _vm._v(" "),
              _vm.isNative
                ? _c("div", { class: _vm.classes.inputWrapper }, [
                    _c(
                      "select",
                      _vm._b(
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.value,
                              expression: "value",
                            },
                          ],
                          ref: "input",
                          class: _vm.classes.input,
                          attrs: {
                            name: _vm.name,
                            id: _vm.fieldId,
                            disabled: _vm.isDisabled,
                          },
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value;
                                  return val
                                });
                              _vm.value = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0];
                            },
                          },
                        },
                        "select",
                        Object.assign({}, _vm.attrs, _vm.aria),
                        false
                      ),
                      _vm._l(_vm.resolvedOptions, function (option, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: option.value } },
                          [
                            _vm._v(
                              "\n          " +
                                _vm._s(option.label) +
                                "\n        "
                            ),
                          ]
                        )
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _vm.placeholder &&
                    _vm.empty &&
                    !_vm.isDisabled &&
                    _vm.type == "select"
                      ? _c("span", { class: _vm.classes.inputPlaceholder }, [
                          _vm._v(_vm._s(_vm.Placeholder)),
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c("span", { class: _vm.classes.inputCaret }),
                  ])
                : _c(
                    "Multiselect",
                    _vm._b(
                      {
                        ref: "input",
                        attrs: {
                          classes: _vm.classes.select,
                          id: _vm.fieldId,
                          name: _vm.name,
                          options: _vm.resolvedOptions,
                          disabled: _vm.isDisabled,
                          placeholder: _vm.Placeholder,
                          attrs: _vm.attrs,
                          aria: _vm.aria,
                          locale: _vm.form$.locale$,
                        },
                        on: {
                          select: _vm.handleSelect,
                          deselect: _vm.handleDeselect,
                          "search-change": _vm.handleSearchChange,
                          tag: _vm.handleTag,
                          open: _vm.handleOpen,
                          close: _vm.handleClose,
                          clear: _vm.handleClear,
                          paste: _vm.handlePaste,
                        },
                        scopedSlots: _vm._u(
                          [
                            _vm._l(
                              {
                                option: "option",
                                noresults: "no-results",
                                nooptions: "no-options",
                                afterlist: "after-list",
                                beforelist: "before-list",
                                placeholder: "placeholder",
                                grouplabel: "group-label",
                                caret: "caret",
                                clear: "clear",
                                spinner: "spinner",
                                default: "default",
                              },
                              function (slotName, slotKey) {
                                return {
                                  key: slotKey,
                                  fn: function (props) {
                                    return [
                                      _vm._t(
                                        slotName,
                                        function () {
                                          return [
                                            _c(
                                              _vm.fieldSlots[slotName],
                                              _vm._b(
                                                {
                                                  tag: "component",
                                                  attrs: { el$: _vm.el$ },
                                                },
                                                "component",
                                                props,
                                                false
                                              )
                                            ),
                                          ]
                                        },
                                        { el$: _vm.el$ },
                                        props
                                      ),
                                    ]
                                  },
                                }
                              }
                            ),
                            _vm.fieldOptions.mode == "single"
                              ? {
                                  key: "singlelabel",
                                  fn: function (ref) {
                                    var value = ref.value;
                                    return [
                                      _vm._t(
                                        "single-label",
                                        function () {
                                          return [
                                            _c(_vm.fieldSlots["single-label"], {
                                              tag: "component",
                                              attrs: {
                                                value: value,
                                                el$: _vm.el$,
                                              },
                                            }),
                                          ]
                                        },
                                        { value: value, el$: _vm.el$ }
                                      ),
                                    ]
                                  },
                                }
                              : null,
                          ],
                          null,
                          true
                        ),
                        model: {
                          value: _vm.value,
                          callback: function ($$v) {
                            _vm.value = $$v;
                          },
                          expression: "value",
                        },
                      },
                      "Multiselect",
                      _vm.fieldOptions,
                      false
                    )
                  ),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$m = [];
__vue_render__$m._withStripped = true;

  /* style */
  const __vue_inject_styles__$r = undefined;
  /* scoped */
  const __vue_scope_id__$r = undefined;
  /* module identifier */
  const __vue_module_identifier__$r = undefined;
  /* functional template */
  const __vue_is_functional_template__$r = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$r = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
    __vue_inject_styles__$r,
    __vue_script__$r,
    __vue_scope_id__$r,
    __vue_is_functional_template__$r,
    __vue_module_identifier__$r,
    false,
    undefined,
    undefined,
    undefined
  );

  var SelectElement = __vue_component__$r;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$q = {
    name: 'SignatureElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
        },
      }
    },
  };

var css_248z$o = "";
styleInject(css_248z$o);

/* script */
const __vue_script__$q = script$q;
/* template */
var __vue_render__$l = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _c(
                "div",
                {
                  ref: "input",
                  class: _vm.classes.wrapper,
                  style: _vm.wrapperStyle,
                  attrs: {
                    tabindex: _vm.isDisabled ? undefined : 0,
                    "aria-label": _vm.wrapperAriaLabel,
                    id: _vm.id,
                  },
                  on: {
                    keydown: function ($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "tab", 9, $event.key, "Tab") &&
                        _vm._k(
                          $event.keyCode,
                          "escape",
                          undefined,
                          $event.key,
                          undefined
                        )
                      ) {
                        return null
                      }
                      return _vm.handleMouseLeave.apply(null, arguments)
                    },
                    mouseleave: _vm.handleMouseLeave,
                  },
                },
                [
                  _c("hr", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.showLine,
                        expression: "showLine",
                      },
                    ],
                    class: _vm.classes.line,
                    style: _vm.lineStyle,
                    attrs: { "aria-hidden": "true" },
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.uploaded,
                          expression: "uploaded",
                        },
                      ],
                      class: _vm.classes.loadedWrapper,
                    },
                    [
                      _c("img", {
                        class: _vm.classes.loadedImg,
                        attrs: {
                          src: _vm.value,
                          alt: _vm.imgAltText,
                          title: _vm.imgTitleText,
                        },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.uploaded,
                          expression: "!uploaded",
                        },
                      ],
                      class: _vm.classes.innerWrapper,
                    },
                    [
                      _c(
                        "div",
                        { class: _vm.classes.actions },
                        [
                          _c("ElementAddonOptions", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.showModes,
                                expression: "showModes",
                              },
                            ],
                            ref: "mode$",
                            attrs: {
                              options: _vm.resolvedModes,
                              placeholder: "",
                              position: "bottom",
                              relaxed: "",
                              aria: _vm.modeSelectorAria,
                            },
                            on: { select: _vm.handleModeSelect },
                          }),
                          _vm._v(" "),
                          _c("ElementAddonOptions", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.showFonts,
                                expression: "showFonts",
                              },
                            ],
                            ref: "font$",
                            attrs: {
                              options: _vm.resolvedFonts,
                              placeholder: _vm.fontText,
                              position: "bottom",
                              relaxed: "",
                              aria: _vm.fontSelectorAria,
                            },
                            on: { select: _vm.handleFontSelect },
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.showUndos,
                                  expression: "showUndos",
                                },
                              ],
                              class: _vm.classes.undosWrapper,
                            },
                            [
                              _c("div", {
                                class: _vm.classes.undo,
                                attrs: {
                                  title: _vm.undoText,
                                  role: "button",
                                  tabindex: _vm.undosLeft
                                    ? _vm.tabindex
                                    : undefined,
                                  "aria-label": _vm.undoText,
                                },
                                on: {
                                  click: function ($event) {
                                    $event.stopPropagation();
                                    return _vm.handleUndo.apply(null, arguments)
                                  },
                                  keydown: function ($event) {
                                    if (
                                      !$event.type.indexOf("key") &&
                                      _vm._k(
                                        $event.keyCode,
                                        "space",
                                        32,
                                        $event.key,
                                        [" ", "Spacebar"]
                                      ) &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key,
                                        "Enter"
                                      )
                                    ) {
                                      return null
                                    }
                                    $event.preventDefault();
                                    return _vm.handleUndo.apply(null, arguments)
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c("div", {
                                class: _vm.classes.redo,
                                attrs: {
                                  title: _vm.redoText,
                                  role: "button",
                                  tabindex: _vm.redos.length
                                    ? _vm.tabindex
                                    : undefined,
                                  "aria-label": _vm.redoText,
                                },
                                on: {
                                  click: function ($event) {
                                    $event.stopPropagation();
                                    return _vm.handleRedo.apply(null, arguments)
                                  },
                                  keydown: function ($event) {
                                    if (
                                      !$event.type.indexOf("key") &&
                                      _vm._k(
                                        $event.keyCode,
                                        "space",
                                        32,
                                        $event.key,
                                        [" ", "Spacebar"]
                                      ) &&
                                      _vm._k(
                                        $event.keyCode,
                                        "enter",
                                        13,
                                        $event.key,
                                        "Enter"
                                      )
                                    ) {
                                      return null
                                    }
                                    $event.preventDefault();
                                    return _vm.handleRedo.apply(null, arguments)
                                  },
                                },
                              }),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.showInput,
                            expression: "showInput",
                          },
                        ],
                        ref: "input$",
                        class: _vm.classes.input,
                        style: _vm.inputStyle,
                        attrs: {
                          type: "text",
                          spellcheck: "false",
                          disabled: _vm.isDisabled,
                          readonly: _vm.isReadonly,
                          "aria-label": _vm.inputAriaLabel,
                        },
                        domProps: { value: _vm.text },
                        on: { input: _vm.handleInput, select: _vm.handleInput },
                      }),
                      _vm._v(" "),
                      _c("div", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.showPlaceholder,
                            expression: "showPlaceholder",
                          },
                        ],
                        class: _vm.classes.placeholder,
                        domProps: { innerHTML: _vm._s(_vm.placeholderText) },
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.showUploadContainer,
                              expression: "showUploadContainer",
                            },
                          ],
                          ref: "upload$",
                          class: _vm.classes.uploadContainer,
                        },
                        [
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.showUpload,
                                  expression: "showUpload",
                                },
                              ],
                              class: _vm.classes.uploadWrapper,
                            },
                            [
                              _vm.droppable
                                ? _c("div", { class: _vm.classes.dndText }, [
                                    _vm._v(
                                      "\n              " +
                                        _vm._s(_vm.dndText) +
                                        "\n            "
                                    ),
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  ref: "uploadButton$",
                                  class: _vm.classes.uploadButton,
                                  attrs: {
                                    tabindex: _vm.tabindex,
                                    role: "button",
                                    "aria-label": _vm.uploadButtonText,
                                  },
                                  on: {
                                    click: _vm.handleSelectClick,
                                    keydown: function ($event) {
                                      if (
                                        !$event.type.indexOf("key") &&
                                        _vm._k(
                                          $event.keyCode,
                                          "space",
                                          32,
                                          $event.key,
                                          [" ", "Spacebar"]
                                        ) &&
                                        _vm._k(
                                          $event.keyCode,
                                          "enter",
                                          13,
                                          $event.key,
                                          "Enter"
                                        )
                                      ) {
                                        return null
                                      }
                                      $event.preventDefault();
                                      return _vm.handleSelectClick.apply(
                                        null,
                                        arguments
                                      )
                                    },
                                  },
                                },
                                [_vm._v(_vm._s(_vm.uploadButtonText))]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: false,
                                    expression: "false",
                                  },
                                ],
                                ref: "file$",
                                attrs: { type: "file", accept: _vm.fileAccept },
                                on: { change: _vm.handleFileSelect },
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _c("canvas", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.showPreview,
                                expression: "showPreview",
                              },
                            ],
                            ref: "preview$",
                            class: _vm.classes.uploadPreview,
                            attrs: {
                              width: _vm.uploadWidth,
                              height: _vm.uploadHeight,
                            },
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c("canvas", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.showPad,
                            expression: "showPad",
                          },
                        ],
                        ref: "pad$",
                        class: _vm.classes.pad,
                        style: _vm.padStyle,
                        attrs: {
                          width: _vm.padWidth,
                          height: _vm.padHeight,
                          tabindex: _vm.tabindex,
                          "aria-label": _vm.padAriaLabel,
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.showColors,
                              expression: "showColors",
                            },
                          ],
                          class: _vm.classes.colors,
                          attrs: { role: "listbox" },
                        },
                        _vm._l(_vm.colors, function (c) {
                          return _c(
                            "svg",
                            {
                              class: _vm.classes.color(c),
                              attrs: {
                                width: "12",
                                height: "12",
                                role: "option",
                                tabindex: _vm.tabindex,
                                "aria-label": _vm.colorAriaLabel + " " + c,
                                "aria-selected": c === _vm.color,
                              },
                              on: {
                                click: function ($event) {
                                  return _vm.handleColorSelect(c)
                                },
                                keydown: function ($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "space",
                                      32,
                                      $event.key,
                                      [" ", "Spacebar"]
                                    ) &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  $event.preventDefault();
                                  return _vm.handleColorSelect(c)
                                },
                              },
                            },
                            [
                              _c("circle", {
                                attrs: { cx: "6", cy: "6", r: "6", fill: c },
                              }),
                            ]
                          )
                        }),
                        0
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _vm.showClear
                    ? _c("div", { class: _vm.classes.clearWrapper }, [
                        _c("div", {
                          class: _vm.classes.clear,
                          attrs: {
                            tabindex: _vm.tabindex,
                            role: "button",
                            "aria-label": _vm.clearAriaLabel,
                          },
                          on: {
                            click: _vm.handleClear,
                            keydown: function ($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                ) &&
                                _vm._k(
                                  $event.keyCode,
                                  "space",
                                  32,
                                  $event.key,
                                  [" ", "Spacebar"]
                                )
                              ) {
                                return null
                              }
                              $event.preventDefault();
                              return _vm.handleClear.apply(null, arguments)
                            },
                          },
                        }),
                      ])
                    : _vm._e(),
                ]
              ),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$l = [];
__vue_render__$l._withStripped = true;

  /* style */
  const __vue_inject_styles__$q = undefined;
  /* scoped */
  const __vue_scope_id__$q = undefined;
  /* module identifier */
  const __vue_module_identifier__$q = undefined;
  /* functional template */
  const __vue_is_functional_template__$q = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$q = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
    __vue_inject_styles__$q,
    __vue_script__$q,
    __vue_scope_id__$q,
    __vue_is_functional_template__$q,
    __vue_module_identifier__$q,
    false,
    undefined,
    undefined,
    undefined
  );

  var SignatureElement = __vue_component__$q;

function isNullish (val) {
  return [null, undefined, false].indexOf(val) !== -1
}

function useValue$2 (props, context, dependencies)
{
  const { value: baseValue, modelValue, min } = toRefs(props);

  // ================ DATA ================
  
  /* istanbul ignore next */
  let value = modelValue && modelValue.value !== undefined ? modelValue : baseValue;

  const initialValue = ref(value.value);

  // ================ HOOKS ===============

  if (isNullish(value.value)) {
    value = ref(min.value);
  }

  if (Array.isArray(value.value) && value.value.length == 0) {
    throw new Error('Slider v-model must not be an empty array')
  }

  return {
    value,
    initialValue,
  }
}

function useClasses$1 (props, context, dependencies)
{
  const { 
    classes: classes_, showTooltip, tooltipPosition, orientation,
  } = toRefs(props);

  // ============== COMPUTED ==============

  const classes = computed(() => ({
    target: 'slider-target',
    focused: 'slider-focused',
    tooltipFocus: 'slider-tooltip-focus',
    tooltipDrag: 'slider-tooltip-drag',
    ltr: 'slider-ltr',
    rtl: 'slider-rtl',
    horizontal: 'slider-horizontal',
    vertical: 'slider-vertical',
    textDirectionRtl: 'slider-txt-dir-rtl',
    textDirectionLtr: 'slider-txt-dir-ltr',
    base: 'slider-base',
    connects: 'slider-connects',
    connect: 'slider-connect',
    origin: 'slider-origin',
    handle: 'slider-handle',
    handleLower: 'slider-handle-lower',
    handleUpper: 'slider-handle-upper',
    touchArea: 'slider-touch-area',
    tooltip: 'slider-tooltip',
    tooltipTop: 'slider-tooltip-top',
    tooltipBottom: 'slider-tooltip-bottom',
    tooltipLeft: 'slider-tooltip-left',
    tooltipRight: 'slider-tooltip-right',
    tooltipHidden: 'slider-tooltip-hidden',
    active: 'slider-active',
    draggable: 'slider-draggable',
    tap: 'slider-state-tap',
    drag: 'slider-state-drag',

    // Unimplemented
    pips: 'slider-pips',
    pipsHorizontal: 'slider-pips-horizontal',
    pipsVertical: 'slider-pips-vertical',
    marker: 'slider-marker',
    markerHorizontal: 'slider-marker-horizontal',
    markerVertical: 'slider-marker-vertical',
    markerNormal: 'slider-marker-normal',
    markerLarge: 'slider-marker-large',
    markerSub: 'slider-marker-sub',
    value: 'slider-value',
    valueHorizontal: 'slider-value-horizontal',
    valueVertical: 'slider-value-vertical',
    valueNormal: 'slider-value-normal',
    valueLarge: 'slider-value-large',
    valueSub: 'slider-value-sub',
    
    ...classes_.value,
  }));

  const classList = computed(() => {
    const classList = { ...classes.value };

    Object.keys(classList).forEach((className) => {
      classList[className] = Array.isArray(classList[className]) ? classList[className].filter(c => c!==null).join(' ') : classList[className];
    });

    if (showTooltip.value !== 'always') {
      classList.target += ` ${showTooltip.value === 'drag' ? classList.tooltipDrag : classList.tooltipFocus}`;
    }

    if (orientation.value === 'horizontal') {
      classList.tooltip += tooltipPosition.value === 'bottom' ? ` ${classList.tooltipBottom}` : ` ${classList.tooltipTop}`;
    }

    if (orientation.value === 'vertical') {
      classList.tooltip += tooltipPosition.value === 'right' ? ` ${classList.tooltipRight}` : ` ${classList.tooltipLeft}`;
    }

    return classList
  });

  return {
    classList,
  }
}

var wNumb = {exports: {}};

(function (module, exports) {
	(function(factory) {
	  {
	    // Node/CommonJS
	    module.exports = factory();
	  }
	})(function() {

	  var FormatOptions = [
	    "decimals",
	    "thousand",
	    "mark",
	    "prefix",
	    "suffix",
	    "encoder",
	    "decoder",
	    "negativeBefore",
	    "negative",
	    "edit",
	    "undo"
	  ];

	  // General

	  // Reverse a string
	  function strReverse(a) {
	    return a
	      .split("")
	      .reverse()
	      .join("");
	  }

	  // Check if a string starts with a specified prefix.
	  function strStartsWith(input, match) {
	    return input.substring(0, match.length) === match;
	  }

	  // Check is a string ends in a specified suffix.
	  function strEndsWith(input, match) {
	    return input.slice(-1 * match.length) === match;
	  }

	  // Throw an error if formatting options are incompatible.
	  function throwEqualError(F, a, b) {
	    if ((F[a] || F[b]) && F[a] === F[b]) {
	      throw new Error(a);
	    }
	  }

	  // Check if a number is finite and not NaN
	  function isValidNumber(input) {
	    return typeof input === "number" && isFinite(input);
	  }

	  // Provide rounding-accurate toFixed method.
	  // Borrowed: http://stackoverflow.com/a/21323330/775265
	  function toFixed(value, exp) {
	    value = value.toString().split("e");
	    value = Math.round(+(value[0] + "e" + (value[1] ? +value[1] + exp : exp)));
	    value = value.toString().split("e");
	    return (+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp))).toFixed(exp);
	  }

	  // Formatting

	  // Accept a number as input, output formatted string.
	  function formatTo(
	    decimals,
	    thousand,
	    mark,
	    prefix,
	    suffix,
	    encoder,
	    decoder,
	    negativeBefore,
	    negative,
	    edit,
	    undo,
	    input
	  ) {
	    var originalInput = input,
	      inputIsNegative,
	      inputPieces,
	      inputBase,
	      inputDecimals = "",
	      output = "";

	    // Apply user encoder to the input.
	    // Expected outcome: number.
	    if (encoder) {
	      input = encoder(input);
	    }

	    // Stop if no valid number was provided, the number is infinite or NaN.
	    if (!isValidNumber(input)) {
	      return false;
	    }

	    // Rounding away decimals might cause a value of -0
	    // when using very small ranges. Remove those cases.
	    if (decimals !== false && parseFloat(input.toFixed(decimals)) === 0) {
	      input = 0;
	    }

	    // Formatting is done on absolute numbers,
	    // decorated by an optional negative symbol.
	    if (input < 0) {
	      inputIsNegative = true;
	      input = Math.abs(input);
	    }

	    // Reduce the number of decimals to the specified option.
	    if (decimals !== false) {
	      input = toFixed(input, decimals);
	    }

	    // Transform the number into a string, so it can be split.
	    input = input.toString();

	    // Break the number on the decimal separator.
	    if (input.indexOf(".") !== -1) {
	      inputPieces = input.split(".");

	      inputBase = inputPieces[0];

	      if (mark) {
	        inputDecimals = mark + inputPieces[1];
	      }
	    } else {
	      // If it isn't split, the entire number will do.
	      inputBase = input;
	    }

	    // Group numbers in sets of three.
	    if (thousand) {
	      inputBase = strReverse(inputBase).match(/.{1,3}/g);
	      inputBase = strReverse(inputBase.join(strReverse(thousand)));
	    }

	    // If the number is negative, prefix with negation symbol.
	    if (inputIsNegative && negativeBefore) {
	      output += negativeBefore;
	    }

	    // Prefix the number
	    if (prefix) {
	      output += prefix;
	    }

	    // Normal negative option comes after the prefix. Defaults to '-'.
	    if (inputIsNegative && negative) {
	      output += negative;
	    }

	    // Append the actual number.
	    output += inputBase;
	    output += inputDecimals;

	    // Apply the suffix.
	    if (suffix) {
	      output += suffix;
	    }

	    // Run the output through a user-specified post-formatter.
	    if (edit) {
	      output = edit(output, originalInput);
	    }

	    // All done.
	    return output;
	  }

	  // Accept a sting as input, output decoded number.
	  function formatFrom(
	    decimals,
	    thousand,
	    mark,
	    prefix,
	    suffix,
	    encoder,
	    decoder,
	    negativeBefore,
	    negative,
	    edit,
	    undo,
	    input
	  ) {
	    var inputIsNegative,
	      output = "";

	    // User defined pre-decoder. Result must be a non empty string.
	    if (undo) {
	      input = undo(input);
	    }

	    // Test the input. Can't be empty.
	    if (!input || typeof input !== "string") {
	      return false;
	    }

	    // If the string starts with the negativeBefore value: remove it.
	    // Remember is was there, the number is negative.
	    if (negativeBefore && strStartsWith(input, negativeBefore)) {
	      input = input.replace(negativeBefore, "");
	      inputIsNegative = true;
	    }

	    // Repeat the same procedure for the prefix.
	    if (prefix && strStartsWith(input, prefix)) {
	      input = input.replace(prefix, "");
	    }

	    // And again for negative.
	    if (negative && strStartsWith(input, negative)) {
	      input = input.replace(negative, "");
	      inputIsNegative = true;
	    }

	    // Remove the suffix.
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
	    if (suffix && strEndsWith(input, suffix)) {
	      input = input.slice(0, -1 * suffix.length);
	    }

	    // Remove the thousand grouping.
	    if (thousand) {
	      input = input.split(thousand).join("");
	    }

	    // Set the decimal separator back to period.
	    if (mark) {
	      input = input.replace(mark, ".");
	    }

	    // Prepend the negative symbol.
	    if (inputIsNegative) {
	      output += "-";
	    }

	    // Add the number
	    output += input;

	    // Trim all non-numeric characters (allow '.' and '-');
	    output = output.replace(/[^0-9\.\-.]/g, "");

	    // The value contains no parse-able number.
	    if (output === "") {
	      return false;
	    }

	    // Covert to number.
	    output = Number(output);

	    // Run the user-specified post-decoder.
	    if (decoder) {
	      output = decoder(output);
	    }

	    // Check is the output is valid, otherwise: return false.
	    if (!isValidNumber(output)) {
	      return false;
	    }

	    return output;
	  }

	  // Framework

	  // Validate formatting options
	  function validate(inputOptions) {
	    var i,
	      optionName,
	      optionValue,
	      filteredOptions = {};

	    if (inputOptions["suffix"] === undefined) {
	      inputOptions["suffix"] = inputOptions["postfix"];
	    }

	    for (i = 0; i < FormatOptions.length; i += 1) {
	      optionName = FormatOptions[i];
	      optionValue = inputOptions[optionName];

	      if (optionValue === undefined) {
	        // Only default if negativeBefore isn't set.
	        if (optionName === "negative" && !filteredOptions.negativeBefore) {
	          filteredOptions[optionName] = "-";
	          // Don't set a default for mark when 'thousand' is set.
	        } else if (optionName === "mark" && filteredOptions.thousand !== ".") {
	          filteredOptions[optionName] = ".";
	        } else {
	          filteredOptions[optionName] = false;
	        }

	        // Floating points in JS are stable up to 7 decimals.
	      } else if (optionName === "decimals") {
	        if (optionValue >= 0 && optionValue < 8) {
	          filteredOptions[optionName] = optionValue;
	        } else {
	          throw new Error(optionName);
	        }

	        // These options, when provided, must be functions.
	      } else if (
	        optionName === "encoder" ||
	        optionName === "decoder" ||
	        optionName === "edit" ||
	        optionName === "undo"
	      ) {
	        if (typeof optionValue === "function") {
	          filteredOptions[optionName] = optionValue;
	        } else {
	          throw new Error(optionName);
	        }

	        // Other options are strings.
	      } else {
	        if (typeof optionValue === "string") {
	          filteredOptions[optionName] = optionValue;
	        } else {
	          throw new Error(optionName);
	        }
	      }
	    }

	    // Some values can't be extracted from a
	    // string if certain combinations are present.
	    throwEqualError(filteredOptions, "mark", "thousand");
	    throwEqualError(filteredOptions, "prefix", "negative");
	    throwEqualError(filteredOptions, "prefix", "negativeBefore");

	    return filteredOptions;
	  }

	  // Pass all options as function arguments
	  function passAll(options, method, input) {
	    var i,
	      args = [];

	    // Add all options in order of FormatOptions
	    for (i = 0; i < FormatOptions.length; i += 1) {
	      args.push(options[FormatOptions[i]]);
	    }

	    // Append the input, then call the method, presenting all
	    // options as arguments.
	    args.push(input);
	    return method.apply("", args);
	  }

	  function wNumb(options) {
	    if (!(this instanceof wNumb)) {
	      return new wNumb(options);
	    }

	    if (typeof options !== "object") {
	      return;
	    }

	    options = validate(options);

	    // Call 'formatTo' with proper arguments.
	    this.to = function(input) {
	      return passAll(options, formatTo, input);
	    };

	    // Call 'formatFrom' with proper arguments.
	    this.from = function(input) {
	      return passAll(options, formatFrom, input);
	    };
	  }

	  return wNumb;
	});
} (wNumb));

var wnumb = wNumb.exports;

function useTooltip (props, context, dependencies)
{
  const { format, step } = toRefs(props);

  // ============ DEPENDENCIES ============

  const value = dependencies.value;
  const classList = dependencies.classList;

  // ============== COMPUTED ==============

  // no export
  const tooltipFormat = computed(() => {
    if (!format || !format.value) {
      return wnumb({ decimals: step.value >= 0 ? 0 : 2 })
    }

    if (typeof format.value == 'function') {
      return { to: format.value }
    }

    return wnumb({...format.value})
  });

  const tooltipsFormat = computed(() => {
    return Array.isArray(value.value) ? value.value.map(v => tooltipFormat.value) : tooltipFormat.value
  });

  // =============== METHODS ==============
  
  /* istanbul ignore next */
  const tooltipsMerge = (slider, threshold, separator) => {
    var textIsRtl = getComputedStyle(slider).direction === 'rtl';
    var isRtl = slider.noUiSlider.options.direction === 'rtl';
    var isVertical = slider.noUiSlider.options.orientation === 'vertical';
    var tooltips = slider.noUiSlider.getTooltips();
    var origins = slider.noUiSlider.getOrigins();

    // Move tooltips into the origin element. The default stylesheet handles this.
    tooltips.forEach(function (tooltip, index) {
      if (tooltip) {
        origins[index].appendChild(tooltip);
      }
    });

    slider.noUiSlider.on('update', function (values, handle, unencoded, tap, positions) {
      var pools = [[]];
      var poolPositions = [[]];
      var poolValues = [[]];
      var atPool = 0;

      // Assign the first tooltip to the first pool, if the tooltip is configured
      if (tooltips[0]) {
        pools[0][0] = 0;
        poolPositions[0][0] = positions[0];
        poolValues[0][0] = tooltipFormat.value.to(parseFloat(values[0]));
      }

      for (var i = 1; i < values.length; i++) {
        if (!tooltips[i] || (values[i] - values[i - 1]) > threshold) {
          atPool++;
          pools[atPool] = [];
          poolValues[atPool] = [];
          poolPositions[atPool] = [];
        }

        if (tooltips[i]) {
          pools[atPool].push(i);
          poolValues[atPool].push(tooltipFormat.value.to(parseFloat(values[i])));
          poolPositions[atPool].push(positions[i]);
        }
      }

      pools.forEach(function (pool, poolIndex) {
        var handlesInPool = pool.length;

        for (var j = 0; j < handlesInPool; j++) {
          var handleNumber = pool[j];

          if (j === handlesInPool - 1) {
            var offset = 0;

            poolPositions[poolIndex].forEach(function (value) {
              offset += 1000 - value;
            });

            var direction = isVertical ? 'bottom' : 'right';
            var last = isRtl ? 0 : handlesInPool - 1;
            var lastOffset = 1000 - poolPositions[poolIndex][last];
            offset = (textIsRtl && !isVertical ? 100 : 0) + (offset / handlesInPool) - lastOffset;

            // Center this tooltip over the affected handles
            tooltips[handleNumber].innerHTML = poolValues[poolIndex].join(separator);
            tooltips[handleNumber].style.display = 'block';
            tooltips[handleNumber].style[direction] = offset + '%';

            classList.value.tooltipHidden.split(' ').forEach((c) => {
              if (tooltips[handleNumber].classList.contains(c)) {
                tooltips[handleNumber].classList.remove(c);
              }
            });

          } else {
            // Hide this tooltip
            tooltips[handleNumber].style.display = 'none';
            classList.value.tooltipHidden.split(' ').forEach((c) => {
              tooltips[handleNumber].classList.add(c);
            });
          }
        }
      });
    });
  };

  return {
    tooltipFormat,
    tooltipsFormat,
    tooltipsMerge,
  }
}

var PipsMode;
(function (PipsMode) {
    PipsMode["Range"] = "range";
    PipsMode["Steps"] = "steps";
    PipsMode["Positions"] = "positions";
    PipsMode["Count"] = "count";
    PipsMode["Values"] = "values";
})(PipsMode || (PipsMode = {}));
var PipsType;
(function (PipsType) {
    PipsType[PipsType["None"] = -1] = "None";
    PipsType[PipsType["NoValue"] = 0] = "NoValue";
    PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
    PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
})(PipsType || (PipsType = {}));
//region Helper Methods
function isValidFormatter(entry) {
    return isValidPartialFormatter(entry) && typeof entry.from === "function";
}
function isValidPartialFormatter(entry) {
    // partial formatters only need a to function and not a from function
    return typeof entry === "object" && typeof entry.to === "function";
}
function removeElement(el) {
    el.parentElement.removeChild(el);
}
function isSet(value) {
    return value !== null && value !== undefined;
}
// Bindable version
function preventDefault(e) {
    e.preventDefault();
}
// Removes duplicates from an array.
function unique(array) {
    return array.filter(function (a) {
        return !this[a] ? (this[a] = true) : false;
    }, {});
}
// Round a value to the closest 'to'.
function closest(value, to) {
    return Math.round(value / to) * to;
}
// Current position of an element relative to the document.
function offset(elem, orientation) {
    var rect = elem.getBoundingClientRect();
    var doc = elem.ownerDocument;
    var docElem = doc.documentElement;
    var pageOffset = getPageOffset(doc);
    // getBoundingClientRect contains left scroll in Chrome on Android.
    // I haven't found a feature detection that proves this. Worst case
    // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
    if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
        pageOffset.x = 0;
    }
    return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
}
// Checks whether a value is numerical.
function isNumeric(a) {
    return typeof a === "number" && !isNaN(a) && isFinite(a);
}
// Sets a class and removes it after [duration] ms.
function addClassFor(element, className, duration) {
    if (duration > 0) {
        addClass(element, className);
        setTimeout(function () {
            removeClass(element, className);
        }, duration);
    }
}
// Limits a value to 0 - 100
function limit(a) {
    return Math.max(Math.min(a, 100), 0);
}
// Wraps a variable as an array, if it isn't one yet.
// Note that an input array is returned by reference!
function asArray(a) {
    return Array.isArray(a) ? a : [a];
}
// Counts decimals
function countDecimals(numStr) {
    numStr = String(numStr);
    var pieces = numStr.split(".");
    return pieces.length > 1 ? pieces[1].length : 0;
}
// http://youmightnotneedjquery.com/#add_class
function addClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
        el.classList.add(className);
    }
    else {
        el.className += " " + className;
    }
}
// http://youmightnotneedjquery.com/#remove_class
function removeClass(el, className) {
    if (el.classList && !/\s/.test(className)) {
        el.classList.remove(className);
    }
    else {
        el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
}
// https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
}
// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
function getPageOffset(doc) {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
    var x = supportPageOffset
        ? window.pageXOffset
        : isCSS1Compat
            ? doc.documentElement.scrollLeft
            : doc.body.scrollLeft;
    var y = supportPageOffset
        ? window.pageYOffset
        : isCSS1Compat
            ? doc.documentElement.scrollTop
            : doc.body.scrollTop;
    return {
        x: x,
        y: y,
    };
}
// we provide a function to compute constants instead
// of accessing window.* as soon as the module needs it
// so that we do not compute anything if not needed
function getActions() {
    // Determine the events to bind. IE11 implements pointerEvents without
    // a prefix, which breaks compatibility with the IE10 implementation.
    return window.navigator.pointerEnabled
        ? {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup",
        }
        : window.navigator.msPointerEnabled
            ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp",
            }
            : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend",
            };
}
// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
// Issue #785
function getSupportsPassive() {
    var supportsPassive = false;
    /* eslint-disable */
    try {
        var opts = Object.defineProperty({}, "passive", {
            get: function () {
                supportsPassive = true;
            },
        });
        // @ts-ignore
        window.addEventListener("test", null, opts);
    }
    catch (e) { }
    /* eslint-enable */
    return supportsPassive;
}
function getSupportsTouchActionNone() {
    return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
}
//endregion
//region Range Calculation
// Determine the size of a sub-range in relation to a full range.
function subRangeRatio(pa, pb) {
    return 100 / (pb - pa);
}
// (percentage) How many percent is this value of this range?
function fromPercentage(range, value, startRange) {
    return (value * 100) / (range[startRange + 1] - range[startRange]);
}
// (percentage) Where is this value on this range?
function toPercentage(range, value) {
    return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
}
// (value) How much is this percentage on this range?
function isPercentage(range, value) {
    return (value * (range[1] - range[0])) / 100 + range[0];
}
function getJ(value, arr) {
    var j = 1;
    while (value >= arr[j]) {
        j += 1;
    }
    return j;
}
// (percentage) Input a value, find where, on a scale of 0-100, it applies.
function toStepping(xVal, xPct, value) {
    if (value >= xVal.slice(-1)[0]) {
        return 100;
    }
    var j = getJ(value, xVal);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
}
// (value) Input a percentage, find where it is on the specified range.
function fromStepping(xVal, xPct, value) {
    // There is no range group that fits 100
    if (value >= 100) {
        return xVal.slice(-1)[0];
    }
    var j = getJ(value, xPct);
    var va = xVal[j - 1];
    var vb = xVal[j];
    var pa = xPct[j - 1];
    var pb = xPct[j];
    return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
}
// (percentage) Get the step that applies at a certain value.
function getStep(xPct, xSteps, snap, value) {
    if (value === 100) {
        return value;
    }
    var j = getJ(value, xPct);
    var a = xPct[j - 1];
    var b = xPct[j];
    // If 'snap' is set, steps are used as fixed points on the slider.
    if (snap) {
        // Find the closest position, a or b.
        if (value - a > (b - a) / 2) {
            return b;
        }
        return a;
    }
    if (!xSteps[j - 1]) {
        return value;
    }
    return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
}
//endregion
//region Spectrum
var Spectrum = /** @class */ (function () {
    function Spectrum(entry, snap, singleStep) {
        this.xPct = [];
        this.xVal = [];
        this.xSteps = [];
        this.xNumSteps = [];
        this.xHighestCompleteStep = [];
        this.xSteps = [singleStep || false];
        this.xNumSteps = [false];
        this.snap = snap;
        var index;
        var ordered = [];
        // Map the object keys to an array.
        Object.keys(entry).forEach(function (index) {
            ordered.push([asArray(entry[index]), index]);
        });
        // Sort all entries by value (numeric sort).
        ordered.sort(function (a, b) {
            return a[0][0] - b[0][0];
        });
        // Convert all entries to subranges.
        for (index = 0; index < ordered.length; index++) {
            this.handleEntryPoint(ordered[index][1], ordered[index][0]);
        }
        // Store the actual step values.
        // xSteps is sorted in the same order as xPct and xVal.
        this.xNumSteps = this.xSteps.slice(0);
        // Convert all numeric steps to the percentage of the subrange they represent.
        for (index = 0; index < this.xNumSteps.length; index++) {
            this.handleStepPoint(index, this.xNumSteps[index]);
        }
    }
    Spectrum.prototype.getDistance = function (value) {
        var distances = [];
        for (var index = 0; index < this.xNumSteps.length - 1; index++) {
            distances[index] = fromPercentage(this.xVal, value, index);
        }
        return distances;
    };
    // Calculate the percentual distance over the whole scale of ranges.
    // direction: 0 = backwards / 1 = forwards
    Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
        var xPct_index = 0;
        // Calculate range where to start calculation
        if (value < this.xPct[this.xPct.length - 1]) {
            while (value > this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
        }
        else if (value === this.xPct[this.xPct.length - 1]) {
            xPct_index = this.xPct.length - 2;
        }
        // If looking backwards and the value is exactly at a range separator then look one range further
        if (!direction && value === this.xPct[xPct_index + 1]) {
            xPct_index++;
        }
        if (distances === null) {
            distances = [];
        }
        var start_factor;
        var rest_factor = 1;
        var rest_rel_distance = distances[xPct_index];
        var range_pct = 0;
        var rel_range_distance = 0;
        var abs_distance_counter = 0;
        var range_counter = 0;
        // Calculate what part of the start range the value is
        if (direction) {
            start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }
        else {
            start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
        }
        // Do until the complete distance across ranges is calculated
        while (rest_rel_distance > 0) {
            // Calculate the percentage of total range
            range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
            // Detect if the margin, padding or limit is larger then the current range and calculate
            if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                // If larger then take the percentual distance of the whole range
                rel_range_distance = range_pct * start_factor;
                // Rest factor of relative percentual distance still to be calculated
                rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                // Set start factor to 1 as for next range it does not apply.
                start_factor = 1;
            }
            else {
                // If smaller or equal then take the percentual distance of the calculate percentual part of that range
                rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                // No rest left as the rest fits in current range
                rest_factor = 0;
            }
            if (direction) {
                abs_distance_counter = abs_distance_counter - rel_range_distance;
                // Limit range to first range when distance becomes outside of minimum range
                if (this.xPct.length + range_counter >= 1) {
                    range_counter--;
                }
            }
            else {
                abs_distance_counter = abs_distance_counter + rel_range_distance;
                // Limit range to last range when distance becomes outside of maximum range
                if (this.xPct.length - range_counter >= 1) {
                    range_counter++;
                }
            }
            // Rest of relative percentual distance still to be calculated
            rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
        }
        return value + abs_distance_counter;
    };
    Spectrum.prototype.toStepping = function (value) {
        value = toStepping(this.xVal, this.xPct, value);
        return value;
    };
    Spectrum.prototype.fromStepping = function (value) {
        return fromStepping(this.xVal, this.xPct, value);
    };
    Spectrum.prototype.getStep = function (value) {
        value = getStep(this.xPct, this.xSteps, this.snap, value);
        return value;
    };
    Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
        var j = getJ(value, this.xPct);
        // When at the top or stepping down, look at the previous sub-range
        if (value === 100 || (isDown && value === this.xPct[j - 1])) {
            j = Math.max(j - 1, 1);
        }
        return (this.xVal[j] - this.xVal[j - 1]) / size;
    };
    Spectrum.prototype.getNearbySteps = function (value) {
        var j = getJ(value, this.xPct);
        return {
            stepBefore: {
                startValue: this.xVal[j - 2],
                step: this.xNumSteps[j - 2],
                highestStep: this.xHighestCompleteStep[j - 2],
            },
            thisStep: {
                startValue: this.xVal[j - 1],
                step: this.xNumSteps[j - 1],
                highestStep: this.xHighestCompleteStep[j - 1],
            },
            stepAfter: {
                startValue: this.xVal[j],
                step: this.xNumSteps[j],
                highestStep: this.xHighestCompleteStep[j],
            },
        };
    };
    Spectrum.prototype.countStepDecimals = function () {
        var stepDecimals = this.xNumSteps.map(countDecimals);
        return Math.max.apply(null, stepDecimals);
    };
    Spectrum.prototype.hasNoSize = function () {
        return this.xVal[0] === this.xVal[this.xVal.length - 1];
    };
    // Outside testing
    Spectrum.prototype.convert = function (value) {
        return this.getStep(this.toStepping(value));
    };
    Spectrum.prototype.handleEntryPoint = function (index, value) {
        var percentage;
        // Covert min/max syntax to 0 and 100.
        if (index === "min") {
            percentage = 0;
        }
        else if (index === "max") {
            percentage = 100;
        }
        else {
            percentage = parseFloat(index);
        }
        // Check for correct input.
        if (!isNumeric(percentage) || !isNumeric(value[0])) {
            throw new Error("noUiSlider: 'range' value isn't numeric.");
        }
        // Store values.
        this.xPct.push(percentage);
        this.xVal.push(value[0]);
        var value1 = Number(value[1]);
        // NaN will evaluate to false too, but to keep
        // logging clear, set step explicitly. Make sure
        // not to override the 'step' setting with false.
        if (!percentage) {
            if (!isNaN(value1)) {
                this.xSteps[0] = value1;
            }
        }
        else {
            this.xSteps.push(isNaN(value1) ? false : value1);
        }
        this.xHighestCompleteStep.push(0);
    };
    Spectrum.prototype.handleStepPoint = function (i, n) {
        // Ignore 'false' stepping.
        if (!n) {
            return;
        }
        // Step over zero-length ranges (#948);
        if (this.xVal[i] === this.xVal[i + 1]) {
            this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
            return;
        }
        // Factor to range ratio
        this.xSteps[i] =
            fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
        var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
        var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
        var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
        this.xHighestCompleteStep[i] = step;
    };
    return Spectrum;
}());
//endregion
//region Options
/*	Every input option is tested and parsed. This will prevent
    endless validation in internal methods. These tests are
    structured with an item for every option available. An
    option can be marked as required by setting the 'r' flag.
    The testing function is provided with three arguments:
        - The provided value for the option;
        - A reference to the options object;
        - The name for the option;

    The testing function returns false when an error is detected,
    or true when everything is OK. It can also modify the option
    object, to make sure all values can be correctly looped elsewhere. */
//region Defaults
var defaultFormatter = {
    to: function (value) {
        return value === undefined ? "" : value.toFixed(2);
    },
    from: Number,
};
var cssClasses = {
    target: "target",
    base: "base",
    origin: "origin",
    handle: "handle",
    handleLower: "handle-lower",
    handleUpper: "handle-upper",
    touchArea: "touch-area",
    horizontal: "horizontal",
    vertical: "vertical",
    background: "background",
    connect: "connect",
    connects: "connects",
    ltr: "ltr",
    rtl: "rtl",
    textDirectionLtr: "txt-dir-ltr",
    textDirectionRtl: "txt-dir-rtl",
    draggable: "draggable",
    drag: "state-drag",
    tap: "state-tap",
    active: "active",
    tooltip: "tooltip",
    pips: "pips",
    pipsHorizontal: "pips-horizontal",
    pipsVertical: "pips-vertical",
    marker: "marker",
    markerHorizontal: "marker-horizontal",
    markerVertical: "marker-vertical",
    markerNormal: "marker-normal",
    markerLarge: "marker-large",
    markerSub: "marker-sub",
    value: "value",
    valueHorizontal: "value-horizontal",
    valueVertical: "value-vertical",
    valueNormal: "value-normal",
    valueLarge: "value-large",
    valueSub: "value-sub",
};
// Namespaces of internal event listeners
var INTERNAL_EVENT_NS = {
    tooltips: ".__tooltips",
    aria: ".__aria",
};
//endregion
function testStep(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'step' is not numeric.");
    }
    // The step option can still be used to set stepping
    // for linear sliders. Overwritten if set in 'range'.
    parsed.singleStep = entry;
}
function testKeyboardPageMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
    }
    parsed.keyboardPageMultiplier = entry;
}
function testKeyboardMultiplier(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
    }
    parsed.keyboardMultiplier = entry;
}
function testKeyboardDefaultStep(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
    }
    parsed.keyboardDefaultStep = entry;
}
function testRange(parsed, entry) {
    // Filter incorrect input.
    if (typeof entry !== "object" || Array.isArray(entry)) {
        throw new Error("noUiSlider: 'range' is not an object.");
    }
    // Catch missing start or end.
    if (entry.min === undefined || entry.max === undefined) {
        throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
    }
    parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
}
function testStart(parsed, entry) {
    entry = asArray(entry);
    // Validate input. Values aren't tested, as the public .val method
    // will always provide a valid location.
    if (!Array.isArray(entry) || !entry.length) {
        throw new Error("noUiSlider: 'start' option is incorrect.");
    }
    // Store the number of handles.
    parsed.handles = entry.length;
    // When the slider is initialized, the .val method will
    // be called with the start options.
    parsed.start = entry;
}
function testSnap(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'snap' option must be a boolean.");
    }
    // Enforce 100% stepping within subranges.
    parsed.snap = entry;
}
function testAnimate(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'animate' option must be a boolean.");
    }
    // Enforce 100% stepping within subranges.
    parsed.animate = entry;
}
function testAnimationDuration(parsed, entry) {
    if (typeof entry !== "number") {
        throw new Error("noUiSlider: 'animationDuration' option must be a number.");
    }
    parsed.animationDuration = entry;
}
function testConnect(parsed, entry) {
    var connect = [false];
    var i;
    // Map legacy options
    if (entry === "lower") {
        entry = [true, false];
    }
    else if (entry === "upper") {
        entry = [false, true];
    }
    // Handle boolean options
    if (entry === true || entry === false) {
        for (i = 1; i < parsed.handles; i++) {
            connect.push(entry);
        }
        connect.push(false);
    }
    // Reject invalid input
    else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
        throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
    }
    else {
        connect = entry;
    }
    parsed.connect = connect;
}
function testOrientation(parsed, entry) {
    // Set orientation to an a numerical value for easy
    // array selection.
    switch (entry) {
        case "horizontal":
            parsed.ort = 0;
            break;
        case "vertical":
            parsed.ort = 1;
            break;
        default:
            throw new Error("noUiSlider: 'orientation' option is invalid.");
    }
}
function testMargin(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'margin' option must be numeric.");
    }
    // Issue #582
    if (entry === 0) {
        return;
    }
    parsed.margin = parsed.spectrum.getDistance(entry);
}
function testLimit(parsed, entry) {
    if (!isNumeric(entry)) {
        throw new Error("noUiSlider: 'limit' option must be numeric.");
    }
    parsed.limit = parsed.spectrum.getDistance(entry);
    if (!parsed.limit || parsed.handles < 2) {
        throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
}
function testPadding(parsed, entry) {
    var index;
    if (!isNumeric(entry) && !Array.isArray(entry)) {
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
    }
    if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
        throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
    }
    if (entry === 0) {
        return;
    }
    if (!Array.isArray(entry)) {
        entry = [entry, entry];
    }
    // 'getDistance' returns false for invalid values.
    parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
    for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
        // last "range" can't contain step size as it is purely an endpoint.
        if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
            throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
        }
    }
    var totalPadding = entry[0] + entry[1];
    var firstValue = parsed.spectrum.xVal[0];
    var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
    if (totalPadding / (lastValue - firstValue) > 1) {
        throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
    }
}
function testDirection(parsed, entry) {
    // Set direction as a numerical value for easy parsing.
    // Invert connection for RTL sliders, so that the proper
    // handles get the connect/background classes.
    switch (entry) {
        case "ltr":
            parsed.dir = 0;
            break;
        case "rtl":
            parsed.dir = 1;
            break;
        default:
            throw new Error("noUiSlider: 'direction' option was not recognized.");
    }
}
function testBehaviour(parsed, entry) {
    // Make sure the input is a string.
    if (typeof entry !== "string") {
        throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
    }
    // Check if the string contains any keywords.
    // None are required.
    var tap = entry.indexOf("tap") >= 0;
    var drag = entry.indexOf("drag") >= 0;
    var fixed = entry.indexOf("fixed") >= 0;
    var snap = entry.indexOf("snap") >= 0;
    var hover = entry.indexOf("hover") >= 0;
    var unconstrained = entry.indexOf("unconstrained") >= 0;
    var invertConnects = entry.indexOf("invert-connects") >= 0;
    var dragAll = entry.indexOf("drag-all") >= 0;
    var smoothSteps = entry.indexOf("smooth-steps") >= 0;
    if (fixed) {
        if (parsed.handles !== 2) {
            throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
        }
        // Use margin to enforce fixed state
        testMargin(parsed, parsed.start[1] - parsed.start[0]);
    }
    if (invertConnects && parsed.handles !== 2) {
        throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");
    }
    if (unconstrained && (parsed.margin || parsed.limit)) {
        throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
    }
    parsed.events = {
        tap: tap || snap,
        drag: drag,
        dragAll: dragAll,
        smoothSteps: smoothSteps,
        fixed: fixed,
        snap: snap,
        hover: hover,
        unconstrained: unconstrained,
        invertConnects: invertConnects,
    };
}
function testTooltips(parsed, entry) {
    if (entry === false) {
        return;
    }
    if (entry === true || isValidPartialFormatter(entry)) {
        parsed.tooltips = [];
        for (var i = 0; i < parsed.handles; i++) {
            parsed.tooltips.push(entry);
        }
    }
    else {
        entry = asArray(entry);
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a formatter for all handles.");
        }
        entry.forEach(function (formatter) {
            if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
            }
        });
        parsed.tooltips = entry;
    }
}
function testHandleAttributes(parsed, entry) {
    if (entry.length !== parsed.handles) {
        throw new Error("noUiSlider: must pass a attributes for all handles.");
    }
    parsed.handleAttributes = entry;
}
function testAriaFormat(parsed, entry) {
    if (!isValidPartialFormatter(entry)) {
        throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
    }
    parsed.ariaFormat = entry;
}
function testFormat(parsed, entry) {
    if (!isValidFormatter(entry)) {
        throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
    }
    parsed.format = entry;
}
function testKeyboardSupport(parsed, entry) {
    if (typeof entry !== "boolean") {
        throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
    }
    parsed.keyboardSupport = entry;
}
function testDocumentElement(parsed, entry) {
    // This is an advanced option. Passed values are used without validation.
    parsed.documentElement = entry;
}
function testCssPrefix(parsed, entry) {
    if (typeof entry !== "string" && entry !== false) {
        throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
    }
    parsed.cssPrefix = entry;
}
function testCssClasses(parsed, entry) {
    if (typeof entry !== "object") {
        throw new Error("noUiSlider: 'cssClasses' must be an object.");
    }
    if (typeof parsed.cssPrefix === "string") {
        parsed.cssClasses = {};
        Object.keys(entry).forEach(function (key) {
            parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
        });
    }
    else {
        parsed.cssClasses = entry;
    }
}
// Test all developer settings and parse to assumption-safe values.
function testOptions(options) {
    // To prove a fix for #537, freeze options here.
    // If the object is modified, an error will be thrown.
    // Object.freeze(options);
    var parsed = {
        margin: null,
        limit: null,
        padding: null,
        animate: true,
        animationDuration: 300,
        ariaFormat: defaultFormatter,
        format: defaultFormatter,
    };
    // Tests are executed in the order they are presented here.
    var tests = {
        step: { r: false, t: testStep },
        keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
        keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
        keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
        start: { r: true, t: testStart },
        connect: { r: true, t: testConnect },
        direction: { r: true, t: testDirection },
        snap: { r: false, t: testSnap },
        animate: { r: false, t: testAnimate },
        animationDuration: { r: false, t: testAnimationDuration },
        range: { r: true, t: testRange },
        orientation: { r: false, t: testOrientation },
        margin: { r: false, t: testMargin },
        limit: { r: false, t: testLimit },
        padding: { r: false, t: testPadding },
        behaviour: { r: true, t: testBehaviour },
        ariaFormat: { r: false, t: testAriaFormat },
        format: { r: false, t: testFormat },
        tooltips: { r: false, t: testTooltips },
        keyboardSupport: { r: true, t: testKeyboardSupport },
        documentElement: { r: false, t: testDocumentElement },
        cssPrefix: { r: true, t: testCssPrefix },
        cssClasses: { r: true, t: testCssClasses },
        handleAttributes: { r: false, t: testHandleAttributes },
    };
    var defaults = {
        connect: false,
        direction: "ltr",
        behaviour: "tap",
        orientation: "horizontal",
        keyboardSupport: true,
        cssPrefix: "noUi-",
        cssClasses: cssClasses,
        keyboardPageMultiplier: 5,
        keyboardMultiplier: 1,
        keyboardDefaultStep: 10,
    };
    // AriaFormat defaults to regular format, if any.
    if (options.format && !options.ariaFormat) {
        options.ariaFormat = options.format;
    }
    // Run all options through a testing mechanism to ensure correct
    // input. It should be noted that options might get modified to
    // be handled properly. E.g. wrapping integers in arrays.
    Object.keys(tests).forEach(function (name) {
        // If the option isn't set, but it is required, throw an error.
        if (!isSet(options[name]) && defaults[name] === undefined) {
            if (tests[name].r) {
                throw new Error("noUiSlider: '" + name + "' is required.");
            }
            return;
        }
        tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
    });
    // Forward pips options
    parsed.pips = options.pips;
    // All recent browsers accept unprefixed transform.
    // We need -ms- for IE9 and -webkit- for older Android;
    // Assume use of -webkit- if unprefixed and -ms- are not supported.
    // https://caniuse.com/#feat=transforms2d
    var d = document.createElement("div");
    var msPrefix = d.style.msTransform !== undefined;
    var noPrefix = d.style.transform !== undefined;
    parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
    // Pips don't move, so we can place them using left/top.
    var styles = [
        ["left", "top"],
        ["right", "bottom"],
    ];
    parsed.style = styles[parsed.dir][parsed.ort];
    return parsed;
}
//endregion
function scope(target, options, originalOptions) {
    var actions = getActions();
    var supportsTouchActionNone = getSupportsTouchActionNone();
    var supportsPassive = supportsTouchActionNone && getSupportsPassive();
    // All variables local to 'scope' are prefixed with 'scope_'
    // Slider DOM Nodes
    var scope_Target = target;
    var scope_Base;
    var scope_ConnectBase;
    var scope_Handles;
    var scope_Connects;
    var scope_Pips;
    var scope_Tooltips;
    // Slider state values
    var scope_Spectrum = options.spectrum;
    var scope_Values = [];
    var scope_Locations = [];
    var scope_HandleNumbers = [];
    var scope_ActiveHandlesCount = 0;
    var scope_Events = {};
    var scope_ConnectsInverted = false;
    // Document Nodes
    var scope_Document = target.ownerDocument;
    var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
    var scope_Body = scope_Document.body;
    // For horizontal sliders in standard ltr documents,
    // make .noUi-origin overflow to the left so the document doesn't scroll.
    var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
    // Creates a node, adds it to target, returns the new node.
    function addNodeTo(addTarget, className) {
        var div = scope_Document.createElement("div");
        if (className) {
            addClass(div, className);
        }
        addTarget.appendChild(div);
        return div;
    }
    // Append a origin to the base
    function addOrigin(base, handleNumber) {
        var origin = addNodeTo(base, options.cssClasses.origin);
        var handle = addNodeTo(origin, options.cssClasses.handle);
        addNodeTo(handle, options.cssClasses.touchArea);
        handle.setAttribute("data-handle", String(handleNumber));
        if (options.keyboardSupport) {
            // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
            // 0 = focusable and reachable
            handle.setAttribute("tabindex", "0");
            handle.addEventListener("keydown", function (event) {
                return eventKeydown(event, handleNumber);
            });
        }
        if (options.handleAttributes !== undefined) {
            var attributes_1 = options.handleAttributes[handleNumber];
            Object.keys(attributes_1).forEach(function (attribute) {
                handle.setAttribute(attribute, attributes_1[attribute]);
            });
        }
        handle.setAttribute("role", "slider");
        handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
        if (handleNumber === 0) {
            addClass(handle, options.cssClasses.handleLower);
        }
        else if (handleNumber === options.handles - 1) {
            addClass(handle, options.cssClasses.handleUpper);
        }
        origin.handle = handle;
        return origin;
    }
    // Insert nodes for connect elements
    function addConnect(base, add) {
        if (!add) {
            return false;
        }
        return addNodeTo(base, options.cssClasses.connect);
    }
    // Add handles to the slider base.
    function addElements(connectOptions, base) {
        scope_ConnectBase = addNodeTo(base, options.cssClasses.connects);
        scope_Handles = [];
        scope_Connects = [];
        scope_Connects.push(addConnect(scope_ConnectBase, connectOptions[0]));
        // [::::O====O====O====]
        // connectOptions = [0, 1, 1, 1]
        for (var i = 0; i < options.handles; i++) {
            // Keep a list of all added handles.
            scope_Handles.push(addOrigin(base, i));
            scope_HandleNumbers[i] = i;
            scope_Connects.push(addConnect(scope_ConnectBase, connectOptions[i + 1]));
        }
    }
    // Initialize a single slider.
    function addSlider(addTarget) {
        // Apply classes and data to the target.
        addClass(addTarget, options.cssClasses.target);
        if (options.dir === 0) {
            addClass(addTarget, options.cssClasses.ltr);
        }
        else {
            addClass(addTarget, options.cssClasses.rtl);
        }
        if (options.ort === 0) {
            addClass(addTarget, options.cssClasses.horizontal);
        }
        else {
            addClass(addTarget, options.cssClasses.vertical);
        }
        var textDirection = getComputedStyle(addTarget).direction;
        if (textDirection === "rtl") {
            addClass(addTarget, options.cssClasses.textDirectionRtl);
        }
        else {
            addClass(addTarget, options.cssClasses.textDirectionLtr);
        }
        return addNodeTo(addTarget, options.cssClasses.base);
    }
    function addTooltip(handle, handleNumber) {
        if (!options.tooltips || !options.tooltips[handleNumber]) {
            return false;
        }
        return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
    }
    function isSliderDisabled() {
        return scope_Target.hasAttribute("disabled");
    }
    // Disable the slider dragging if any handle is disabled
    function isHandleDisabled(handleNumber) {
        var handleOrigin = scope_Handles[handleNumber];
        return handleOrigin.hasAttribute("disabled");
    }
    function disable(handleNumber) {
        if (handleNumber !== null && handleNumber !== undefined) {
            scope_Handles[handleNumber].setAttribute("disabled", "");
            scope_Handles[handleNumber].handle.removeAttribute("tabindex");
        }
        else {
            scope_Target.setAttribute("disabled", "");
            scope_Handles.forEach(function (handle) {
                handle.handle.removeAttribute("tabindex");
            });
        }
    }
    function enable(handleNumber) {
        if (handleNumber !== null && handleNumber !== undefined) {
            scope_Handles[handleNumber].removeAttribute("disabled");
            scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
        }
        else {
            scope_Target.removeAttribute("disabled");
            scope_Handles.forEach(function (handle) {
                handle.removeAttribute("disabled");
                handle.handle.setAttribute("tabindex", "0");
            });
        }
    }
    function removeTooltips() {
        if (scope_Tooltips) {
            removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
            scope_Tooltips.forEach(function (tooltip) {
                if (tooltip) {
                    removeElement(tooltip);
                }
            });
            scope_Tooltips = null;
        }
    }
    // The tooltips option is a shorthand for using the 'update' event.
    function tooltips() {
        removeTooltips();
        // Tooltips are added with options.tooltips in original order.
        scope_Tooltips = scope_Handles.map(addTooltip);
        bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
            if (!scope_Tooltips || !options.tooltips) {
                return;
            }
            if (scope_Tooltips[handleNumber] === false) {
                return;
            }
            var formattedValue = values[handleNumber];
            if (options.tooltips[handleNumber] !== true) {
                formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
            }
            scope_Tooltips[handleNumber].innerHTML = formattedValue;
        });
    }
    function aria() {
        removeEvent("update" + INTERNAL_EVENT_NS.aria);
        bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
            // Update Aria Values for all handles, as a change in one changes min and max values for the next.
            scope_HandleNumbers.forEach(function (index) {
                var handle = scope_Handles[index];
                var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                var now = positions[index];
                // Formatted value for display
                var text = String(options.ariaFormat.to(unencoded[index]));
                // Map to slider range values
                min = scope_Spectrum.fromStepping(min).toFixed(1);
                max = scope_Spectrum.fromStepping(max).toFixed(1);
                now = scope_Spectrum.fromStepping(now).toFixed(1);
                handle.children[0].setAttribute("aria-valuemin", min);
                handle.children[0].setAttribute("aria-valuemax", max);
                handle.children[0].setAttribute("aria-valuenow", now);
                handle.children[0].setAttribute("aria-valuetext", text);
            });
        });
    }
    function getGroup(pips) {
        // Use the range.
        if (pips.mode === PipsMode.Range || pips.mode === PipsMode.Steps) {
            return scope_Spectrum.xVal;
        }
        if (pips.mode === PipsMode.Count) {
            if (pips.values < 2) {
                throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
            }
            // Divide 0 - 100 in 'count' parts.
            var interval = pips.values - 1;
            var spread = 100 / interval;
            var values = [];
            // List these parts and have them handled as 'positions'.
            while (interval--) {
                values[interval] = interval * spread;
            }
            values.push(100);
            return mapToRange(values, pips.stepped);
        }
        if (pips.mode === PipsMode.Positions) {
            // Map all percentages to on-range values.
            return mapToRange(pips.values, pips.stepped);
        }
        if (pips.mode === PipsMode.Values) {
            // If the value must be stepped, it needs to be converted to a percentage first.
            if (pips.stepped) {
                return pips.values.map(function (value) {
                    // Convert to percentage, apply step, return to value.
                    return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                });
            }
            // Otherwise, we can simply use the values.
            return pips.values;
        }
        return []; // pips.mode = never
    }
    function mapToRange(values, stepped) {
        return values.map(function (value) {
            return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
        });
    }
    function generateSpread(pips) {
        function safeIncrement(value, increment) {
            // Avoid floating point variance by dropping the smallest decimal places.
            return Number((value + increment).toFixed(7));
        }
        var group = getGroup(pips);
        var indexes = {};
        var firstInRange = scope_Spectrum.xVal[0];
        var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
        var ignoreFirst = false;
        var ignoreLast = false;
        var prevPct = 0;
        // Create a copy of the group, sort it and filter away all duplicates.
        group = unique(group.slice().sort(function (a, b) {
            return a - b;
        }));
        // Make sure the range starts with the first element.
        if (group[0] !== firstInRange) {
            group.unshift(firstInRange);
            ignoreFirst = true;
        }
        // Likewise for the last one.
        if (group[group.length - 1] !== lastInRange) {
            group.push(lastInRange);
            ignoreLast = true;
        }
        group.forEach(function (current, index) {
            // Get the current step and the lower + upper positions.
            var step;
            var i;
            var q;
            var low = current;
            var high = group[index + 1];
            var newPct;
            var pctDifference;
            var pctPos;
            var type;
            var steps;
            var realSteps;
            var stepSize;
            var isSteps = pips.mode === PipsMode.Steps;
            // When using 'steps' mode, use the provided steps.
            // Otherwise, we'll step on to the next subrange.
            if (isSteps) {
                step = scope_Spectrum.xNumSteps[index];
            }
            // Default to a 'full' step.
            if (!step) {
                step = high - low;
            }
            // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)
            if (high === undefined) {
                high = low;
            }
            // Make sure step isn't 0, which would cause an infinite loop (#654)
            step = Math.max(step, 0.0000001);
            // Find all steps in the subrange.
            for (i = low; i <= high; i = safeIncrement(i, step)) {
                // Get the percentage value for the current step,
                // calculate the size for the subrange.
                newPct = scope_Spectrum.toStepping(i);
                pctDifference = newPct - prevPct;
                steps = pctDifference / (pips.density || 1);
                realSteps = Math.round(steps);
                // This ratio represents the amount of percentage-space a point indicates.
                // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                // Round the percentage offset to an even number, then divide by two
                // to spread the offset on both sides of the range.
                stepSize = pctDifference / realSteps;
                // Divide all points evenly, adding the correct number to this subrange.
                // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                for (q = 1; q <= realSteps; q += 1) {
                    // The ratio between the rounded value and the actual size might be ~1% off.
                    // Correct the percentage offset by the number of points
                    // per subrange. density = 1 will result in 100 points on the
                    // full range, 2 for 50, 4 for 25, etc.
                    pctPos = prevPct + q * stepSize;
                    indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                }
                // Determine the point type.
                type = group.indexOf(i) > -1 ? PipsType.LargeValue : isSteps ? PipsType.SmallValue : PipsType.NoValue;
                // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                if (!index && ignoreFirst && i !== high) {
                    type = 0;
                }
                if (!(i === high && ignoreLast)) {
                    // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                    indexes[newPct.toFixed(5)] = [i, type];
                }
                // Update the percentage count.
                prevPct = newPct;
            }
        });
        return indexes;
    }
    function addMarking(spread, filterFunc, formatter) {
        var _a, _b;
        var element = scope_Document.createElement("div");
        var valueSizeClasses = (_a = {},
            _a[PipsType.None] = "",
            _a[PipsType.NoValue] = options.cssClasses.valueNormal,
            _a[PipsType.LargeValue] = options.cssClasses.valueLarge,
            _a[PipsType.SmallValue] = options.cssClasses.valueSub,
            _a);
        var markerSizeClasses = (_b = {},
            _b[PipsType.None] = "",
            _b[PipsType.NoValue] = options.cssClasses.markerNormal,
            _b[PipsType.LargeValue] = options.cssClasses.markerLarge,
            _b[PipsType.SmallValue] = options.cssClasses.markerSub,
            _b);
        var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
        var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
        addClass(element, options.cssClasses.pips);
        addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
        function getClasses(type, source) {
            var a = source === options.cssClasses.value;
            var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
            var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
            return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
        }
        function addSpread(offset, value, type) {
            // Apply the filter function, if it is set.
            type = filterFunc ? filterFunc(value, type) : type;
            if (type === PipsType.None) {
                return;
            }
            // Add a marker for every point
            var node = addNodeTo(element, false);
            node.className = getClasses(type, options.cssClasses.marker);
            node.style[options.style] = offset + "%";
            // Values are only appended for points marked '1' or '2'.
            if (type > PipsType.NoValue) {
                node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.value);
                node.setAttribute("data-value", String(value));
                node.style[options.style] = offset + "%";
                node.innerHTML = String(formatter.to(value));
            }
        }
        // Append all points.
        Object.keys(spread).forEach(function (offset) {
            addSpread(offset, spread[offset][0], spread[offset][1]);
        });
        return element;
    }
    function removePips() {
        if (scope_Pips) {
            removeElement(scope_Pips);
            scope_Pips = null;
        }
    }
    function pips(pips) {
        // Fix #669
        removePips();
        var spread = generateSpread(pips);
        var filter = pips.filter;
        var format = pips.format || {
            to: function (value) {
                return String(Math.round(value));
            },
        };
        scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
        return scope_Pips;
    }
    // Shorthand for base dimensions.
    function baseSize() {
        var rect = scope_Base.getBoundingClientRect();
        var alt = ("offset" + ["Width", "Height"][options.ort]);
        return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
    }
    // Handler for attaching events trough a proxy.
    function attachEvent(events, element, callback, data) {
        // This function can be used to 'filter' events to the slider.
        // element is a node, not a nodeList
        var method = function (event) {
            var e = fixEvent(event, data.pageOffset, data.target || element);
            // fixEvent returns false if this event has a different target
            // when handling (multi-) touch events;
            if (!e) {
                return false;
            }
            // doNotReject is passed by all end events to make sure released touches
            // are not rejected, leaving the slider "stuck" to the cursor;
            if (isSliderDisabled() && !data.doNotReject) {
                return false;
            }
            // Stop if an active 'tap' transition is taking place.
            if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                return false;
            }
            // Ignore right or middle clicks on start #454
            if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                return false;
            }
            // Ignore right or middle clicks on start #454
            if (data.hover && e.buttons) {
                return false;
            }
            // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
            // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
            // touch-action: manipulation, but that allows panning, which breaks
            // sliders after zooming/on non-responsive pages.
            // See: https://bugs.webkit.org/show_bug.cgi?id=133112
            if (!supportsPassive) {
                e.preventDefault();
            }
            e.calcPoint = e.points[options.ort];
            // Call the event handler with the event [ and additional data ].
            callback(e, data);
            return;
        };
        var methods = [];
        // Bind a closure on the target for every event type.
        events.split(" ").forEach(function (eventName) {
            element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
            methods.push([eventName, method]);
        });
        return methods;
    }
    // Provide a clean event with standardized offset values.
    function fixEvent(e, pageOffset, eventTarget) {
        // Filter the event to register the type, which can be
        // touch, mouse or pointer. Offset changes need to be
        // made on an event specific basis.
        var touch = e.type.indexOf("touch") === 0;
        var mouse = e.type.indexOf("mouse") === 0;
        var pointer = e.type.indexOf("pointer") === 0;
        var x = 0;
        var y = 0;
        // IE10 implemented pointer events with a prefix;
        if (e.type.indexOf("MSPointer") === 0) {
            pointer = true;
        }
        // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
        // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
        // events that have no touches or buttons associated with them. (#1057, #1079, #1095)
        if (e.type === "mousedown" && !e.buttons && !e.touches) {
            return false;
        }
        // The only thing one handle should be concerned about is the touches that originated on top of it.
        if (touch) {
            // Returns true if a touch originated on the target.
            var isTouchOnTarget = function (checkTouch) {
                var target = checkTouch.target;
                return (target === eventTarget ||
                    eventTarget.contains(target) ||
                    (e.composed && e.composedPath().shift() === eventTarget));
            };
            // In the case of touchstart events, we need to make sure there is still no more than one
            // touch on the target so we look amongst all touches.
            if (e.type === "touchstart") {
                var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                // Do not support more than one touch per handle.
                if (targetTouches.length > 1) {
                    return false;
                }
                x = targetTouches[0].pageX;
                y = targetTouches[0].pageY;
            }
            else {
                // In the other cases, find on changedTouches is enough.
                var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                // Cancel if the target touch has not moved.
                if (!targetTouch) {
                    return false;
                }
                x = targetTouch.pageX;
                y = targetTouch.pageY;
            }
        }
        pageOffset = pageOffset || getPageOffset(scope_Document);
        if (mouse || pointer) {
            x = e.clientX + pageOffset.x;
            y = e.clientY + pageOffset.y;
        }
        e.pageOffset = pageOffset;
        e.points = [x, y];
        e.cursor = mouse || pointer; // Fix #435
        return e;
    }
    // Translate a coordinate in the document to a percentage on the slider
    function calcPointToPercentage(calcPoint) {
        var location = calcPoint - offset(scope_Base, options.ort);
        var proposal = (location * 100) / baseSize();
        // Clamp proposal between 0% and 100%
        // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
        // are used (e.g. contained handles feature)
        proposal = limit(proposal);
        return options.dir ? 100 - proposal : proposal;
    }
    // Find handle closest to a certain percentage on the slider
    function getClosestHandle(clickedPosition) {
        var smallestDifference = 100;
        var handleNumber = false;
        scope_Handles.forEach(function (handle, index) {
            // Disabled handles are ignored
            if (isHandleDisabled(index)) {
                return;
            }
            var handlePosition = scope_Locations[index];
            var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
            // Initial state
            var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
            // Difference with this handle is smaller than the previously checked handle
            var isCloser = differenceWithThisHandle < smallestDifference;
            var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
            if (isCloser || isCloserAfter || clickAtEdge) {
                handleNumber = index;
                smallestDifference = differenceWithThisHandle;
            }
        });
        return handleNumber;
    }
    // Fire 'end' when a mouse or pen leaves the document.
    function documentLeave(event, data) {
        if (event.type === "mouseout" &&
            event.target.nodeName === "HTML" &&
            event.relatedTarget === null) {
            eventEnd(event, data);
        }
    }
    // Handle movement on document for handle and range drag.
    function eventMove(event, data) {
        // Fix #498
        // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
        // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
        // IE9 has .buttons and .which zero on mousemove.
        // Firefox breaks the spec MDN defines.
        if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
            return eventEnd(event, data);
        }
        // Check if we are moving up or down
        var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
        // Convert the movement into a percentage of the slider width/height
        var proposal = (movement * 100) / data.baseSize;
        moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
    }
    // Unbind move events on document, call callbacks.
    function eventEnd(event, data) {
        // The handle is no longer active, so remove the class.
        if (data.handle) {
            removeClass(data.handle, options.cssClasses.active);
            scope_ActiveHandlesCount -= 1;
        }
        // Unbind the move and end events, which are added on 'start'.
        data.listeners.forEach(function (c) {
            scope_DocumentElement.removeEventListener(c[0], c[1]);
        });
        if (scope_ActiveHandlesCount === 0) {
            // Remove dragging class.
            removeClass(scope_Target, options.cssClasses.drag);
            setZindex();
            // Remove cursor styles and text-selection events bound to the body.
            if (event.cursor) {
                scope_Body.style.cursor = "";
                scope_Body.removeEventListener("selectstart", preventDefault);
            }
        }
        if (options.events.smoothSteps) {
            data.handleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
            });
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
            });
        }
        data.handleNumbers.forEach(function (handleNumber) {
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            fireEvent("end", handleNumber);
        });
    }
    // Bind move events on document.
    function eventStart(event, data) {
        // Ignore event if any handle is disabled
        if (data.handleNumbers.some(isHandleDisabled)) {
            return;
        }
        var handle;
        if (data.handleNumbers.length === 1) {
            var handleOrigin = scope_Handles[data.handleNumbers[0]];
            handle = handleOrigin.children[0];
            scope_ActiveHandlesCount += 1;
            // Mark the handle as 'active' so it can be styled.
            addClass(handle, options.cssClasses.active);
        }
        // A drag should never propagate up to the 'tap' event.
        event.stopPropagation();
        // Record the event listeners.
        var listeners = [];
        // Attach the move and end events.
        var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
            // The event target has changed so we need to propagate the original one so that we keep
            // relying on it to extract target touches.
            target: event.target,
            handle: handle,
            connect: data.connect,
            listeners: listeners,
            startCalcPoint: event.calcPoint,
            baseSize: baseSize(),
            pageOffset: event.pageOffset,
            handleNumbers: data.handleNumbers,
            buttonsProperty: event.buttons,
            locations: scope_Locations.slice(),
        });
        var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
            target: event.target,
            handle: handle,
            listeners: listeners,
            doNotReject: true,
            handleNumbers: data.handleNumbers,
        });
        var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
            target: event.target,
            handle: handle,
            listeners: listeners,
            doNotReject: true,
            handleNumbers: data.handleNumbers,
        });
        // We want to make sure we pushed the listeners in the listener list rather than creating
        // a new one as it has already been passed to the event handlers.
        listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
        // Text selection isn't an issue on touch devices,
        // so adding cursor styles can be skipped.
        if (event.cursor) {
            // Prevent the 'I' cursor and extend the range-drag cursor.
            scope_Body.style.cursor = getComputedStyle(event.target).cursor;
            // Mark the target with a dragging state.
            if (scope_Handles.length > 1) {
                addClass(scope_Target, options.cssClasses.drag);
            }
            // Prevent text selection when dragging the handles.
            // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
            // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
            // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
            // The 'cursor' flag is false.
            // See: http://caniuse.com/#search=selectstart
            scope_Body.addEventListener("selectstart", preventDefault, false);
        }
        data.handleNumbers.forEach(function (handleNumber) {
            fireEvent("start", handleNumber);
        });
    }
    // Move closest handle to tapped location.
    function eventTap(event) {
        // The tap event shouldn't propagate up
        event.stopPropagation();
        var proposal = calcPointToPercentage(event.calcPoint);
        var handleNumber = getClosestHandle(proposal);
        // Tackle the case that all handles are 'disabled'.
        if (handleNumber === false) {
            return;
        }
        // Flag the slider as it is now in a transitional state.
        // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
        if (!options.events.snap) {
            addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
        }
        setHandle(handleNumber, proposal, true, true);
        setZindex();
        fireEvent("slide", handleNumber, true);
        fireEvent("update", handleNumber, true);
        if (!options.events.snap) {
            fireEvent("change", handleNumber, true);
            fireEvent("set", handleNumber, true);
        }
        else {
            eventStart(event, { handleNumbers: [handleNumber] });
        }
    }
    // Fires a 'hover' event for a hovered mouse/pen position.
    function eventHover(event) {
        var proposal = calcPointToPercentage(event.calcPoint);
        var to = scope_Spectrum.getStep(proposal);
        var value = scope_Spectrum.fromStepping(to);
        Object.keys(scope_Events).forEach(function (targetEvent) {
            if ("hover" === targetEvent.split(".")[0]) {
                scope_Events[targetEvent].forEach(function (callback) {
                    callback.call(scope_Self, value);
                });
            }
        });
    }
    // Handles keydown on focused handles
    // Don't move the document when pressing arrow keys on focused handles
    function eventKeydown(event, handleNumber) {
        if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
            return false;
        }
        var horizontalKeys = ["Left", "Right"];
        var verticalKeys = ["Down", "Up"];
        var largeStepKeys = ["PageDown", "PageUp"];
        var edgeKeys = ["Home", "End"];
        if (options.dir && !options.ort) {
            // On an right-to-left slider, the left and right keys act inverted
            horizontalKeys.reverse();
        }
        else if (options.ort && !options.dir) {
            // On a top-to-bottom slider, the up and down keys act inverted
            verticalKeys.reverse();
            largeStepKeys.reverse();
        }
        // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
        var key = event.key.replace("Arrow", "");
        var isLargeDown = key === largeStepKeys[0];
        var isLargeUp = key === largeStepKeys[1];
        var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
        var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
        var isMin = key === edgeKeys[0];
        var isMax = key === edgeKeys[1];
        if (!isDown && !isUp && !isMin && !isMax) {
            return true;
        }
        event.preventDefault();
        var to;
        if (isUp || isDown) {
            var direction = isDown ? 0 : 1;
            var steps = getNextStepsForHandle(handleNumber);
            var step = steps[direction];
            // At the edge of a slider, do nothing
            if (step === null) {
                return false;
            }
            // No step set, use the default of 10% of the sub-range
            if (step === false) {
                step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
            }
            if (isLargeUp || isLargeDown) {
                step *= options.keyboardPageMultiplier;
            }
            else {
                step *= options.keyboardMultiplier;
            }
            // Step over zero-length ranges (#948);
            step = Math.max(step, 0.0000001);
            // Decrement for down steps
            step = (isDown ? -1 : 1) * step;
            to = scope_Values[handleNumber] + step;
        }
        else if (isMax) {
            // End key
            to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
        }
        else {
            // Home key
            to = options.spectrum.xVal[0];
        }
        setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
        fireEvent("slide", handleNumber);
        fireEvent("update", handleNumber);
        fireEvent("change", handleNumber);
        fireEvent("set", handleNumber);
        return false;
    }
    // Attach events to several slider parts.
    function bindSliderEvents(behaviour) {
        // Attach the standard drag event to the handles.
        if (!behaviour.fixed) {
            scope_Handles.forEach(function (handle, index) {
                // These events are only bound to the visual handle
                // element, not the 'real' origin element.
                attachEvent(actions.start, handle.children[0], eventStart, {
                    handleNumbers: [index],
                });
            });
        }
        // Attach the tap event to the slider base.
        if (behaviour.tap) {
            attachEvent(actions.start, scope_Base, eventTap, {});
        }
        // Fire hover events
        if (behaviour.hover) {
            attachEvent(actions.move, scope_Base, eventHover, {
                hover: true,
            });
        }
        // Make the range draggable.
        if (behaviour.drag) {
            scope_Connects.forEach(function (connect, index) {
                if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                    return;
                }
                var handleBefore = scope_Handles[index - 1];
                var handleAfter = scope_Handles[index];
                var eventHolders = [connect];
                var handlesToDrag = [handleBefore, handleAfter];
                var handleNumbersToDrag = [index - 1, index];
                addClass(connect, options.cssClasses.draggable);
                // When the range is fixed, the entire range can
                // be dragged by the handles. The handle in the first
                // origin will propagate the start event upward,
                // but it needs to be bound manually on the other.
                if (behaviour.fixed) {
                    eventHolders.push(handleBefore.children[0]);
                    eventHolders.push(handleAfter.children[0]);
                }
                if (behaviour.dragAll) {
                    handlesToDrag = scope_Handles;
                    handleNumbersToDrag = scope_HandleNumbers;
                }
                eventHolders.forEach(function (eventHolder) {
                    attachEvent(actions.start, eventHolder, eventStart, {
                        handles: handlesToDrag,
                        handleNumbers: handleNumbersToDrag,
                        connect: connect,
                    });
                });
            });
        }
    }
    // Attach an event to this slider, possibly including a namespace
    function bindEvent(namespacedEvent, callback) {
        scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
        scope_Events[namespacedEvent].push(callback);
        // If the event bound is 'update,' fire it immediately for all handles.
        if (namespacedEvent.split(".")[0] === "update") {
            scope_Handles.forEach(function (a, index) {
                fireEvent("update", index);
            });
        }
    }
    function isInternalNamespace(namespace) {
        return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
    }
    // Undo attachment of event
    function removeEvent(namespacedEvent) {
        var event = namespacedEvent && namespacedEvent.split(".")[0];
        var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
        Object.keys(scope_Events).forEach(function (bind) {
            var tEvent = bind.split(".")[0];
            var tNamespace = bind.substring(tEvent.length);
            if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                // only delete protected internal event if intentional
                if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                    delete scope_Events[bind];
                }
            }
        });
    }
    // External event handling
    function fireEvent(eventName, handleNumber, tap) {
        Object.keys(scope_Events).forEach(function (targetEvent) {
            var eventType = targetEvent.split(".")[0];
            if (eventName === eventType) {
                scope_Events[targetEvent].forEach(function (callback) {
                    callback.call(
                    // Use the slider public API as the scope ('this')
                    scope_Self, 
                    // Return values as array, so arg_1[arg_2] is always valid.
                    scope_Values.map(options.format.to), 
                    // Handle index, 0 or 1
                    handleNumber, 
                    // Un-formatted slider values
                    scope_Values.slice(), 
                    // Event is fired by tap, true or false
                    tap || false, 
                    // Left offset of the handle, in relation to the slider
                    scope_Locations.slice(), 
                    // add the slider public API to an accessible parameter when this is unavailable
                    scope_Self);
                });
            }
        });
    }
    // Split out the handle positioning logic so the Move event can use it, too
    function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
        var distance;
        // For sliders with multiple handles, limit movement to the other handle.
        // Apply the margin option by adding it to the handle positions.
        if (scope_Handles.length > 1 && !options.events.unconstrained) {
            if (lookBackward && handleNumber > 0) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                to = Math.max(to, distance);
            }
            if (lookForward && handleNumber < scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                to = Math.min(to, distance);
            }
        }
        // The limit option has the opposite effect, limiting handles to a
        // maximum distance from another. Limit must be > 0, as otherwise
        // handles would be unmovable.
        if (scope_Handles.length > 1 && options.limit) {
            if (lookBackward && handleNumber > 0) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                to = Math.min(to, distance);
            }
            if (lookForward && handleNumber < scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                to = Math.max(to, distance);
            }
        }
        // The padding option keeps the handles a certain distance from the
        // edges of the slider. Padding must be > 0.
        if (options.padding) {
            if (handleNumber === 0) {
                distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                to = Math.max(to, distance);
            }
            if (handleNumber === scope_Handles.length - 1) {
                distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                to = Math.min(to, distance);
            }
        }
        if (!smoothSteps) {
            to = scope_Spectrum.getStep(to);
        }
        // Limit percentage to the 0 - 100 range
        to = limit(to);
        // Return false if handle can't move
        if (to === reference[handleNumber] && !getValue) {
            return false;
        }
        return to;
    }
    // Uses slider orientation to create CSS rules. a = base value;
    function inRuleOrder(v, a) {
        var o = options.ort;
        return (o ? a : v) + ", " + (o ? v : a);
    }
    // Moves handle(s) by a percentage
    // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
    function moveHandles(upward, proposal, locations, handleNumbers, connect) {
        var proposals = locations.slice();
        // Store first handle now, so we still have it in case handleNumbers is reversed
        var firstHandle = handleNumbers[0];
        var smoothSteps = options.events.smoothSteps;
        var b = [!upward, upward];
        var f = [upward, !upward];
        // Copy handleNumbers so we don't change the dataset
        handleNumbers = handleNumbers.slice();
        // Check to see which handle is 'leading'.
        // If that one can't move the second can't either.
        if (upward) {
            handleNumbers.reverse();
        }
        // Step 1: get the maximum percentage that any of the handles can move
        if (handleNumbers.length > 1) {
            handleNumbers.forEach(function (handleNumber, o) {
                var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                // Stop if one of the handles can't move.
                if (to === false) {
                    proposal = 0;
                }
                else {
                    proposal = to - proposals[handleNumber];
                    proposals[handleNumber] = to;
                }
            });
        }
        // If using one handle, check backward AND forward
        else {
            b = f = [true];
        }
        var state = false;
        // Step 2: Try to set the handles with the found percentage
        handleNumbers.forEach(function (handleNumber, o) {
            state =
                setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
        });
        // Step 3: If a handle moved, fire events
        if (state) {
            handleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                fireEvent("slide", handleNumber);
            });
            // If target is a connect, then fire drag event
            if (connect != undefined) {
                fireEvent("drag", firstHandle);
            }
        }
    }
    // Takes a base value and an offset. This offset is used for the connect bar size.
    // In the initial design for this feature, the origin element was 1% wide.
    // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
    // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
    function transformDirection(a, b) {
        return options.dir ? 100 - a - b : a;
    }
    // Updates scope_Locations and scope_Values, updates visual state
    function updateHandlePosition(handleNumber, to) {
        // Update locations.
        scope_Locations[handleNumber] = to;
        // Convert the value to the slider stepping/range.
        scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
        var translation = transformDirection(to, 0) - scope_DirOffset;
        var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
        scope_Handles[handleNumber].style[options.transformRule] = translateRule;
        // sanity check for at least 2 handles (e.g. during setup)
        if (options.events.invertConnects && scope_Locations.length > 1) {
            // check if handles passed each other, but don't match the ConnectsInverted state
            var handlesAreInOrder = scope_Locations.every(function (position, index, locations) {
                return index === 0 || position >= locations[index - 1];
            });
            if (scope_ConnectsInverted !== !handlesAreInOrder) {
                // invert connects when handles pass each other
                invertConnects();
                // invertConnects already updates all connect elements
                return;
            }
        }
        updateConnect(handleNumber);
        updateConnect(handleNumber + 1);
        if (scope_ConnectsInverted) {
            // When connects are inverted, we also have to update adjacent connects
            updateConnect(handleNumber - 1);
            updateConnect(handleNumber + 2);
        }
    }
    // Handles before the slider middle are stacked later = higher,
    // Handles after the middle later is lower
    // [[7] [8] .......... | .......... [5] [4]
    function setZindex() {
        scope_HandleNumbers.forEach(function (handleNumber) {
            var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
            var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
            scope_Handles[handleNumber].style.zIndex = String(zIndex);
        });
    }
    // Test suggested values and apply margin, step.
    // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)
    function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
        if (!exactInput) {
            to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
        }
        if (to === false) {
            return false;
        }
        updateHandlePosition(handleNumber, to);
        return true;
    }
    // Updates style attribute for connect nodes
    function updateConnect(index) {
        // Skip connects set to false
        if (!scope_Connects[index]) {
            return;
        }
        // Create a copy of locations, so we can sort them for the local scope logic
        var locations = scope_Locations.slice();
        if (scope_ConnectsInverted) {
            locations.sort(function (a, b) {
                return a - b;
            });
        }
        var l = 0;
        var h = 100;
        if (index !== 0) {
            l = locations[index - 1];
        }
        if (index !== scope_Connects.length - 1) {
            h = locations[index];
        }
        // We use two rules:
        // 'translate' to change the left/top offset;
        // 'scale' to change the width of the element;
        // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
        var connectWidth = h - l;
        var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
        var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
        scope_Connects[index].style[options.transformRule] =
            translateRule + " " + scaleRule;
    }
    // Parses value passed to .set method. Returns current value if not parse-able.
    function resolveToValue(to, handleNumber) {
        // Setting with null indicates an 'ignore'.
        // Inputting 'false' is invalid.
        if (to === null || to === false || to === undefined) {
            return scope_Locations[handleNumber];
        }
        // If a formatted number was passed, attempt to decode it.
        if (typeof to === "number") {
            to = String(to);
        }
        to = options.format.from(to);
        if (to !== false) {
            to = scope_Spectrum.toStepping(to);
        }
        // If parsing the number failed, use the current value.
        if (to === false || isNaN(to)) {
            return scope_Locations[handleNumber];
        }
        return to;
    }
    // Set the slider value.
    function valueSet(input, fireSetEvent, exactInput) {
        var values = asArray(input);
        var isInit = scope_Locations[0] === undefined;
        // Event fires by default
        fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
        // Animation is optional.
        // Make sure the initial values were set before using animated placement.
        if (options.animate && !isInit) {
            addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
        }
        // First pass, without lookAhead but with lookBackward. Values are set from left to right.
        scope_HandleNumbers.forEach(function (handleNumber) {
            setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
        });
        var i = scope_HandleNumbers.length === 1 ? 0 : 1;
        // Spread handles evenly across the slider if the range has no size (min=max)
        if (isInit && scope_Spectrum.hasNoSize()) {
            exactInput = true;
            scope_Locations[0] = 0;
            if (scope_HandleNumbers.length > 1) {
                var space_1 = 100 / (scope_HandleNumbers.length - 1);
                scope_HandleNumbers.forEach(function (handleNumber) {
                    scope_Locations[handleNumber] = handleNumber * space_1;
                });
            }
        }
        // Secondary passes. Now that all base values are set, apply constraints.
        // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)
        for (; i < scope_HandleNumbers.length; ++i) {
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
            });
        }
        setZindex();
        scope_HandleNumbers.forEach(function (handleNumber) {
            fireEvent("update", handleNumber);
            // Fire the event only for handles that received a new value, as per #579
            if (values[handleNumber] !== null && fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        });
    }
    // Reset slider to initial values
    function valueReset(fireSetEvent) {
        valueSet(options.start, fireSetEvent);
    }
    // Set value for a single handle
    function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
        // Ensure numeric input
        handleNumber = Number(handleNumber);
        if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
            throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
        }
        // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
        // The exactInput argument can be used to ignore slider stepping (#436)
        setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
        fireEvent("update", handleNumber);
        if (fireSetEvent) {
            fireEvent("set", handleNumber);
        }
    }
    // Get the slider value.
    function valueGet(unencoded) {
        if (unencoded === void 0) { unencoded = false; }
        if (unencoded) {
            // return a copy of the raw values
            return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
        }
        var values = scope_Values.map(options.format.to);
        // If only one handle is used, return a single value.
        if (values.length === 1) {
            return values[0];
        }
        return values;
    }
    // Removes classes from the root and empties it.
    function destroy() {
        // remove protected internal listeners
        removeEvent(INTERNAL_EVENT_NS.aria);
        removeEvent(INTERNAL_EVENT_NS.tooltips);
        Object.keys(options.cssClasses).forEach(function (key) {
            removeClass(scope_Target, options.cssClasses[key]);
        });
        while (scope_Target.firstChild) {
            scope_Target.removeChild(scope_Target.firstChild);
        }
        delete scope_Target.noUiSlider;
    }
    function getNextStepsForHandle(handleNumber) {
        var location = scope_Locations[handleNumber];
        var nearbySteps = scope_Spectrum.getNearbySteps(location);
        var value = scope_Values[handleNumber];
        var increment = nearbySteps.thisStep.step;
        var decrement = null;
        // If snapped, directly use defined step value
        if (options.snap) {
            return [
                value - nearbySteps.stepBefore.startValue || null,
                nearbySteps.stepAfter.startValue - value || null,
            ];
        }
        // If the next value in this step moves into the next step,
        // the increment is the start of the next step - the current value
        if (increment !== false) {
            if (value + increment > nearbySteps.stepAfter.startValue) {
                increment = nearbySteps.stepAfter.startValue - value;
            }
        }
        // If the value is beyond the starting point
        if (value > nearbySteps.thisStep.startValue) {
            decrement = nearbySteps.thisStep.step;
        }
        else if (nearbySteps.stepBefore.step === false) {
            decrement = false;
        }
        // If a handle is at the start of a step, it always steps back into the previous step first
        else {
            decrement = value - nearbySteps.stepBefore.highestStep;
        }
        // Now, if at the slider edges, there is no in/decrement
        if (location === 100) {
            increment = null;
        }
        else if (location === 0) {
            decrement = null;
        }
        // As per #391, the comparison for the decrement step can have some rounding issues.
        var stepDecimals = scope_Spectrum.countStepDecimals();
        // Round per #391
        if (increment !== null && increment !== false) {
            increment = Number(increment.toFixed(stepDecimals));
        }
        if (decrement !== null && decrement !== false) {
            decrement = Number(decrement.toFixed(stepDecimals));
        }
        return [decrement, increment];
    }
    // Get the current step size for the slider.
    function getNextSteps() {
        return scope_HandleNumbers.map(getNextStepsForHandle);
    }
    // Updatable: margin, limit, padding, step, range, animate, snap
    function updateOptions(optionsToUpdate, fireSetEvent) {
        // Spectrum is created using the range, snap, direction and step options.
        // 'snap' and 'step' can be updated.
        // If 'snap' and 'step' are not passed, they should remain unchanged.
        var v = valueGet();
        var updateAble = [
            "margin",
            "limit",
            "padding",
            "range",
            "animate",
            "snap",
            "step",
            "format",
            "pips",
            "tooltips",
            "connect",
        ];
        // Only change options that we're actually passed to update.
        updateAble.forEach(function (name) {
            // Check for undefined. null removes the value.
            if (optionsToUpdate[name] !== undefined) {
                originalOptions[name] = optionsToUpdate[name];
            }
        });
        var newOptions = testOptions(originalOptions);
        // Load new options into the slider state
        updateAble.forEach(function (name) {
            if (optionsToUpdate[name] !== undefined) {
                options[name] = newOptions[name];
            }
        });
        scope_Spectrum = newOptions.spectrum;
        // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
        options.margin = newOptions.margin;
        options.limit = newOptions.limit;
        options.padding = newOptions.padding;
        // Update pips, removes existing.
        if (options.pips) {
            pips(options.pips);
        }
        else {
            removePips();
        }
        // Update tooltips, removes existing.
        if (options.tooltips) {
            tooltips();
        }
        else {
            removeTooltips();
        }
        // Invalidate the current positioning so valueSet forces an update.
        scope_Locations = [];
        valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
        // Update connects only if it was set
        if (optionsToUpdate.connect) {
            updateConnectOption();
        }
    }
    function updateConnectOption() {
        // IE supported way of removing children including event handlers
        while (scope_ConnectBase.firstChild) {
            scope_ConnectBase.removeChild(scope_ConnectBase.firstChild);
        }
        // Adding new connects according to the new connect options
        for (var i = 0; i <= options.handles; i++) {
            scope_Connects[i] = addConnect(scope_ConnectBase, options.connect[i]);
            updateConnect(i);
        }
        // re-adding drag events for the new connect elements
        // to ignore the other events we have to negate the 'if (!behaviour.fixed)' check
        bindSliderEvents({ drag: options.events.drag, fixed: true });
    }
    // Invert options for connect handles
    function invertConnects() {
        scope_ConnectsInverted = !scope_ConnectsInverted;
        testConnect(options, 
        // inverse the connect boolean array
        options.connect.map(function (b) { return !b; }));
        updateConnectOption();
    }
    // Initialization steps
    function setupSlider() {
        // Create the base element, initialize HTML and set classes.
        // Add handles and connect elements.
        scope_Base = addSlider(scope_Target);
        addElements(options.connect, scope_Base);
        // Attach user events.
        bindSliderEvents(options.events);
        // Use the public value method to set the start values.
        valueSet(options.start);
        if (options.pips) {
            pips(options.pips);
        }
        if (options.tooltips) {
            tooltips();
        }
        aria();
    }
    setupSlider();
    var scope_Self = {
        destroy: destroy,
        steps: getNextSteps,
        on: bindEvent,
        off: removeEvent,
        get: valueGet,
        set: valueSet,
        setHandle: valueSetHandle,
        reset: valueReset,
        disable: disable,
        enable: enable,
        // Exposed for unit testing, don't use this in your application.
        __moveHandles: function (upward, proposal, handleNumbers) {
            moveHandles(upward, proposal, scope_Locations, handleNumbers);
        },
        options: originalOptions,
        updateOptions: updateOptions,
        target: scope_Target,
        removePips: removePips,
        removeTooltips: removeTooltips,
        getPositions: function () {
            return scope_Locations.slice();
        },
        getTooltips: function () {
            return scope_Tooltips;
        },
        getOrigins: function () {
            return scope_Handles;
        },
        pips: pips, // Issue #594
    };
    return scope_Self;
}
// Run the standard initializer
function initialize(target, originalOptions) {
    if (!target || !target.nodeName) {
        throw new Error("noUiSlider: create requires a single element, got: " + target);
    }
    // Throw an error if the slider was already initialized.
    if (target.noUiSlider) {
        throw new Error("noUiSlider: Slider was already initialized.");
    }
    // Test the options and create the slider environment;
    var options = testOptions(originalOptions);
    var api = scope(target, options, originalOptions);
    target.noUiSlider = api;
    return api;
}
var nouislider = {
    // Exposed for unit testing, don't use this in your application.
    __spectrum: Spectrum,
    // A reference to the default classes, allows global changes.
    // Use the cssClasses option for changes to one slider.
    cssClasses: cssClasses,
    create: initialize,
};

function arraysEqual (array1, array2) {
  // couldn't reproduce
  /* istanbul ignore next */
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false
  }

  const array2Sorted = array2.slice().sort();

  return array1.length === array2.length && array1.slice().sort().every(function(value, index) {
    return value === array2Sorted[index];
  })
}

function useSlider (props, context, dependencies)
{
  const {
    orientation, direction, tooltips, step,
    min, max, merge, id, disabled, options,
    classes, format, lazy, ariaLabelledby,
    aria,
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  const value = dependencies.value;
  const initialValue = dependencies.initialValue;
  const tooltipsFormat = dependencies.tooltipsFormat;
  const tooltipsMerge = dependencies.tooltipsMerge;
  const tooltipFormat = dependencies.tooltipFormat;
  const classList = dependencies.classList;

  // ================ DATA ================

  const slider = ref(null);

  const slider$ = ref(null);

  // no export
  const inited = ref(false);

  // ============== COMPUTED ==============

  // no export
  const defaultOptions = computed(() => {
    let defaultOptions = {
      cssPrefix: '',
      cssClasses: classList.value,
      orientation: orientation.value,
      direction: direction.value,
      tooltips: tooltips.value ? tooltipsFormat.value : false,
      connect: 'lower',
      start: isNullish(value.value) ? min.value : value.value,
      range: {
        'min': min.value,
        'max': max.value
      }
    };

    if (step.value > 0) {
      defaultOptions.step = step.value;
    }

    if (Array.isArray(value.value)) {
      defaultOptions.connect = true;
    }

    if ((ariaLabelledby && ariaLabelledby.value) || (aria && Object.keys(aria.value).length)) {
      let handles = Array.isArray(value.value) ? value.value : [value.value];

      defaultOptions.handleAttributes = handles.map(h => (Object.assign({}, aria.value, ariaLabelledby && ariaLabelledby.value ? {
        'aria-labelledby': ariaLabelledby.value,
      }: {})));
    }

    if (format.value) {
      defaultOptions.ariaFormat = tooltipFormat.value;
    }

    return defaultOptions
  });

  const sliderProps = computed(() => {
    let sliderProps = {
      id: id && id.value ? id.value : undefined,
    };

    if (disabled.value) {
      sliderProps.disabled = true;
    }

    return sliderProps
  });

  const isRange = computed(() => {
    return Array.isArray(value.value)
  });

  // =============== METHODS ==============

  const reset = () => {
    updateValue(initialValue.value);
  };

  // no export
  const getSliderValue = () => {
    let sliderValue = slider$.value.get();

    return Array.isArray(sliderValue)
      ? sliderValue.map(v => parseFloat(v))
      : parseFloat(sliderValue)
  };

  const update = (val, triggerChange = true) => {
    slider$.value.set(val, triggerChange);
  };

  // no export
  const updateValue = (val) => {
    context.emit('input', val);
    context.emit('update:modelValue', val);
    context.emit('update', val);
  };

  const init = () => {
    slider$.value = nouislider.create(slider.value, Object.assign({}, defaultOptions.value, options.value));

    if (tooltips.value && isRange.value && merge.value >= 0) {
      tooltipsMerge(slider.value, merge.value, ' - ');
    }

    slider$.value.on('set', () => {
      const sliderValue = getSliderValue();

      context.emit('change', sliderValue);
      context.emit('set', sliderValue);

      /* istanbul ignore else */
      if (lazy.value) {
        updateValue(sliderValue);
      }
    });

    slider$.value.on('update', () => {
      if (!inited.value) {
        return
      }

      const sliderValue = getSliderValue();

      if ((isRange.value && arraysEqual(value.value, sliderValue)) || (!isRange.value && value.value == sliderValue)) {
        context.emit('update', sliderValue);
        // Required because set event is not
        // triggered even though it should be
        return
      }

      if (!lazy.value) {
        updateValue(sliderValue);
      }
    });

    /* istanbul ignore next */
    slider$.value.on('start', () => {
      context.emit('start', getSliderValue());
    });

    /* istanbul ignore next */
    slider$.value.on('end', () => {
      context.emit('end', getSliderValue());
    });

    /* istanbul ignore next */
    slider$.value.on('slide', () => {
      context.emit('slide', getSliderValue());
    });

    /* istanbul ignore next */
    slider$.value.on('drag', () => {
      context.emit('drag', getSliderValue());
    });

    slider.value.querySelectorAll('[data-handle]').forEach((handle) => {
      handle.onblur = () => {
        /* istanbul ignore next */
        if (!slider.value) {
          return
        }

        classList.value.focused.split(' ').forEach((c) => {
          slider.value.classList.remove(c);
        });
      };

      handle.onfocus = () => {
        classList.value.focused.split(' ').forEach((c) => {
          slider.value.classList.add(c);
        });
      };
    });

    inited.value = true;
  };

  const destroy = () => {
    slider$.value.off();
    slider$.value.destroy();
    slider$.value = null;
  };

  const refresh = (n,o) => {
    inited.value = false;
    destroy();
    init();
  };

  // ================ HOOKS ===============

  onMounted(init);
  onUnmounted(destroy);

  // ============== WATCHERS ==============

  watch(isRange, refresh, { immediate: false });
  watch(min, refresh, { immediate: false });
  watch(max, refresh, { immediate: false });
  watch(step, refresh, { immediate: false });
  watch(orientation, refresh, { immediate: false });
  watch(direction, refresh, { immediate: false });
  watch(tooltips, refresh, { immediate: false });
  watch(merge, refresh, { immediate: false });
  watch(format, refresh, { immediate: false, deep: true });
  watch(options, refresh, { immediate: false, deep: true });
  watch(classes, refresh, { immediate: false, deep: true });

  watch(value, (value, old) => {
    // If old was 0, null, undefined, '', false
    if (!old) {
      return
    }

    if (
      // If both old and new has multiple handles
      // and the number of handles decreased
      (typeof old === 'object' && typeof value === 'object' && value && Object.keys(old) > Object.keys(value)) ||

      // If the old had multiple handles but
      // if it decreased to single
      (typeof old === 'object' && typeof value !== 'object') ||

      // Or has no value at all
      isNullish(value)
    ) {
      refresh();
    }
  }, { immediate: false });

  watch(value, (newValue) => {
    if (isNullish(newValue)) {
      update(min.value, false);
      return
    }

    let sliderValue = getSliderValue();

    // couldn't reproduce
    /* istanbul ignore next */
    if (isRange.value && !Array.isArray(sliderValue)) {
      sliderValue = [sliderValue];
    }

    if ((isRange.value && !arraysEqual(newValue, sliderValue)) || (!isRange.value && newValue != sliderValue)) {
      update(newValue, false);
    }
  }, { deep: true });

  return {
    slider,
    slider$,
    isRange,
    sliderProps,
    init,
    destroy,
    refresh,
    update,
    reset,
  }
}

//

  /* istanbul ignore next */
  const valueProps$1 = {
    value: {
      validator: function(p) {
        return p => typeof p === 'number' || p instanceof Array || p === null || p === undefined || p === false
      },
      required: false,
    },
    modelValue: {
      validator: function(p) {
        return p => typeof p === 'number' || p instanceof Array || p === null || p === undefined || p === false
      },
      required: false,
    },
  };

  var script$p = {
    name: 'Slider',
    emits: [
      'input', 'update:modelValue',
      'start', 'slide', 'drag', 'update', 'change', 'set', 'end',
    ],
    props: {
      ...valueProps$1,
      id: {
        type: [String, Number],
        required: false,
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      },
      min: {
        type: Number,
        required: false,
        default: 0
      },
      max: {
        type: Number,
        required: false,
        default: 100
      },
      step: {
        type: Number,
        required: false,
        default: 1
      },
      orientation: {
        type: String,
        required: false,
        default: 'horizontal',
      },
      direction: {
        type: String,
        required: false,
        default: 'ltr',
      },
      tooltips: {
        type: Boolean,
        required: false,
        default: true,
      },
      options: {
        type: Object,
        required: false,
        default: () => ({})
      },
      merge: {
        type: Number,
        required: false,
        default: -1
      },
      format: {
        type: [Object, Function, Boolean],
        required: false,
        default: null,
      },
      classes: {
        type: Object,
        required: false,
        default: () => ({}),
      },
      showTooltip: {
        type: String,
        required: false,
        default: 'always'
      },
      tooltipPosition: {
        type: String,
        required: false,
        default: null,
      },
      lazy: {
        type: Boolean,
        required: false,
        default: true,
      },
      ariaLabelledby: {
        type: String,
        required: false,
        default: undefined,
      },
      aria: {
        required: false,
        type: Object,
        default: () => ({}),
      },
    },
    setup(props, context)
    {
      // no export
      const value = useValue$2(props);

      const classes = useClasses$1(props);
      const tooltip = useTooltip(props, context, {
        value: value.value,
        classList: classes.classList,
      });

      const slider = useSlider(props, context, {
        value: value.value,
        initialValue: value.initialValue,
        tooltipFormat: tooltip.tooltipFormat,
        tooltipsFormat: tooltip.tooltipsFormat,
        tooltipsMerge: tooltip.tooltipsMerge,
        classList: classes.classList,
      });

      return {
        ...classes,
        ...tooltip,
        ...slider,
      }
    }
  };

/* script */
const __vue_script__$p = script$p;

/* template */
var __vue_render__$k = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", _vm._b({ ref: "slider" }, "div", _vm.sliderProps, false))
};
var __vue_staticRenderFns__$k = [];
__vue_render__$k._withStripped = true;

  /* style */
  const __vue_inject_styles__$p = undefined;
  /* scoped */
  const __vue_scope_id__$p = undefined;
  /* module identifier */
  const __vue_module_identifier__$p = undefined;
  /* functional template */
  const __vue_is_functional_template__$p = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$p = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
    __vue_inject_styles__$p,
    __vue_script__$p,
    __vue_scope_id__$p,
    __vue_is_functional_template__$p,
    __vue_module_identifier__$p,
    false,
    undefined,
    undefined,
    undefined
  );

  var Slider = __vue_component__$p;

//
  
  var script$o = {
    name: 'SliderElement',
    components: {
      Slider,
    },
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          slider: {
            target: '',
            focused: '',
            tooltipFocus: '',
            tooltipDrag: '',
            ltr: '',
            rtl: '',
            horizontal: '',
            vertical: '',
            textDirectionRtl: '',
            textDirectionLtr: '',
            base: '',
            connects: '',
            connect: '',
            origin: '',
            handle: '',
            touchArea: '',
            tooltip: '',
            tooltipTop: '',
            tooltipBottom: '',
            tooltipLeft: '',
            tooltipRight: '',
            tooltipHidden: '',
            active: '',
            draggable: '',
            tap: '',
            drag: '',
          },
        }
      }
    }
  };

var css_248z$n = "";
styleInject(css_248z$n);

/* script */
const __vue_script__$o = script$o;
/* template */
var __vue_render__$j = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _c(
                "div",
                { class: _vm.classes.wrapper },
                [
                  _c(
                    "Slider",
                    _vm._b(
                      {
                        ref: "input",
                        attrs: {
                          value: _vm.value,
                          modelValue: _vm.value,
                          aria: _vm.aria,
                          classes: _vm.classes.slider,
                          id: _vm.fieldId,
                        },
                        on: {
                          update: _vm.handleUpdate,
                          change: _vm.handleChange,
                        },
                      },
                      "Slider",
                      _vm.fieldOptions,
                      false
                    )
                  ),
                ],
                1
              ),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$j = [];
__vue_render__$j._withStripped = true;

  /* style */
  const __vue_inject_styles__$o = undefined;
  /* scoped */
  const __vue_scope_id__$o = undefined;
  /* module identifier */
  const __vue_module_identifier__$o = undefined;
  /* functional template */
  const __vue_is_functional_template__$o = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$o = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
    __vue_inject_styles__$o,
    __vue_script__$o,
    __vue_scope_id__$o,
    __vue_is_functional_template__$o,
    __vue_module_identifier__$o,
    false,
    undefined,
    undefined,
    undefined
  );

  var SliderElement = __vue_component__$o;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$n = {
    name: 'StaticElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          content: '',
          tag: '',
        }
      }
    }
  };

var css_248z$m = "";
styleInject(css_248z$m);

/* script */
const __vue_script__$n = script$n;
/* template */
var __vue_render__$i = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.wrap
    ? _c(_vm.elementLayout, {
        ref: "container",
        tag: "component",
        scopedSlots: _vm._u(
          [
            {
              key: "element",
              fn: function () {
                return [
                  _vm.isHtml &&
                  (_vm.resolvedContent || ["img", "hr"].indexOf(_vm.tag) !== -1)
                    ? [
                        !_vm.tag && _vm.allowHtml
                          ? _c(
                              "div",
                              _vm._b(
                                {
                                  class: _vm.classes.content,
                                  domProps: {
                                    innerHTML: _vm._s(_vm.resolvedContent),
                                  },
                                },
                                "div",
                                _vm.attrs,
                                false
                              )
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.tag && !_vm.allowHtml
                          ? _c(
                              "div",
                              _vm._b(
                                { class: _vm.classes.content },
                                "div",
                                _vm.attrs,
                                false
                              ),
                              [_vm._v(_vm._s(_vm.content))]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.tag === "a"
                          ? _c("div", { class: _vm.classes.tag }, [
                              _vm.allowHtml
                                ? _c(
                                    "a",
                                    _vm._b(
                                      {
                                        attrs: {
                                          href: _vm.href,
                                          target: _vm.target,
                                        },
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.resolvedContent
                                          ),
                                        },
                                      },
                                      "a",
                                      _vm.attrs,
                                      false
                                    )
                                  )
                                : _c(
                                    "a",
                                    _vm._b(
                                      {
                                        attrs: {
                                          href: _vm.href,
                                          target: _vm.target,
                                        },
                                      },
                                      "a",
                                      _vm.attrs,
                                      false
                                    ),
                                    [_vm._v(_vm._s(_vm.resolvedContent))]
                                  ),
                            ])
                          : _vm.tag === "hr"
                          ? _c("div", { class: _vm.classes.tag }, [
                              _c("hr", _vm._b({}, "hr", _vm.attrs, false)),
                            ])
                          : _vm.tag === "img"
                          ? _c("div", { class: _vm.classes.tag }, [
                              _vm.href
                                ? _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: _vm.href,
                                        target: _vm.target,
                                      },
                                    },
                                    [
                                      _c(
                                        "img",
                                        _vm._b(
                                          {
                                            attrs: {
                                              src: _vm.src,
                                              alt: _vm.alt,
                                              title: _vm.title,
                                              width: _vm.width,
                                              height: _vm.height,
                                            },
                                          },
                                          "img",
                                          _vm.attrs,
                                          false
                                        )
                                      ),
                                    ]
                                  )
                                : _c(
                                    "img",
                                    _vm._b(
                                      {
                                        attrs: {
                                          src: _vm.src,
                                          alt: _vm.alt,
                                          title: _vm.title,
                                          width: _vm.width,
                                          height: _vm.height,
                                        },
                                      },
                                      "img",
                                      _vm.attrs,
                                      false
                                    )
                                  ),
                            ])
                          : _vm.tag
                          ? _c(
                              "div",
                              { class: _vm.classes.tag },
                              [
                                _vm.allowHtml
                                  ? _c(
                                      _vm.tag,
                                      _vm._b(
                                        {
                                          tag: "component",
                                          domProps: {
                                            innerHTML: _vm._s(
                                              _vm.resolvedContent
                                            ),
                                          },
                                        },
                                        "component",
                                        _vm.attrs,
                                        false
                                      )
                                    )
                                  : _c(
                                      _vm.tag,
                                      _vm._b(
                                        { tag: "component" },
                                        "component",
                                        _vm.attrs,
                                        false
                                      ),
                                      [_vm._v(_vm._s(_vm.resolvedContent))]
                                    ),
                              ],
                              1
                            )
                          : _vm._e(),
                      ]
                    : _vm.resolvedContent
                    ? _c(_vm.componentContent, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      })
                    : _vm._t(
                        "default",
                        function () {
                          return [
                            _c(_vm.slotContent, {
                              tag: "component",
                              attrs: { el$: _vm.el$ },
                            }),
                          ]
                        },
                        { el$: _vm.el$ }
                      ),
                ]
              },
              proxy: true,
            },
            _vm._l(_vm.elementSlots, function (component, slot) {
              return {
                key: slot,
                fn: function () {
                  return [
                    _vm._t(
                      slot,
                      function () {
                        return [
                          _c(component, {
                            tag: "component",
                            attrs: { el$: _vm.el$ },
                          }),
                        ]
                      },
                      { el$: _vm.el$ }
                    ),
                  ]
                },
                proxy: true,
              }
            }),
          ],
          null,
          true
        ),
      })
    : _vm.content && _vm.isHtml
    ? _c("div", {
        class: _vm.classes.content,
        domProps: { innerHTML: _vm._s(_vm.resolvedContent) },
      })
    : _vm.content
    ? _c(_vm.componentContent, { ref: "container", tag: "component" })
    : _c(
        "div",
        { ref: "container", class: _vm.classes.container },
        [
          _vm._t(
            "default",
            function () {
              return [
                _c(_vm.slotContent, {
                  tag: "component",
                  attrs: { el$: _vm.el$ },
                }),
              ]
            },
            { el$: _vm.el$ }
          ),
        ],
        2
      )
};
var __vue_staticRenderFns__$i = [];
__vue_render__$i._withStripped = true;

  /* style */
  const __vue_inject_styles__$n = undefined;
  /* scoped */
  const __vue_scope_id__$n = undefined;
  /* module identifier */
  const __vue_module_identifier__$n = undefined;
  /* functional template */
  const __vue_is_functional_template__$n = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$n = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
    __vue_inject_styles__$n,
    __vue_script__$n,
    __vue_scope_id__$n,
    __vue_is_functional_template__$n,
    __vue_module_identifier__$n,
    false,
    undefined,
    undefined,
    undefined
  );

  var StaticElement = __vue_component__$n;

//

  var script$m = {
    name: 'TagsElement',
    components: {
      Multiselect: __vue_component__$x,
    },
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          select: {
            container: '',
            containerDisabled: '',
            containerOpen: '',
            containerOpenTop: '',
            containerActive: '',
            search: '',
            tags: '',
            tag: '',
            tagDisabled: '',
            tagRemove: '',
            tagRemoveIcon: '',
            tagsSearchWrapper: '',
            tagsSearch: '',
            tagsSearchCopy: '',
            placeholder: '',
            caret: '',
            caretOpen: '',
            clear: '',
            clearIcon: '',
            spinner: '',
            dropdown: '',
            dropdownTop: '',
            dropdownHidden: '',
            options: '',
            optionsTop: '',
            group: '',
            groupLabel: '',
            groupLabelPointable: '',
            groupLabelPointed: '',
            groupLabelSelected: '',
            groupLabelDisabled: '',
            groupLabelSelectedPointed: '',
            groupLabelSelectedDisabled: '',
            groupOptions: '',
            option: '',
            optionPointed: '',
            optionSelected: '',
            optionDisabled: '',
            optionSelectedPointed: '',
            optionSelectedDisabled: '',
            noOptions: '',
            noResults: '',
            fakeInput: '',
            spacer: '',
          },
        }
      }
    }
  };

var css_248z$l = "";
styleInject(css_248z$l);

/* script */
const __vue_script__$m = script$m;
/* template */
var __vue_render__$h = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _vm.hasFloating && !_vm.empty
                ? _c("ElementLabelFloating", { attrs: { visible: !_vm.empty } })
                : _vm._e(),
              _vm._v(" "),
              _c(
                "Multiselect",
                _vm._b(
                  {
                    ref: "input",
                    attrs: {
                      classes: _vm.classes.select,
                      id: _vm.fieldId,
                      name: _vm.name,
                      options: _vm.resolvedOptions,
                      disabled: _vm.isDisabled,
                      placeholder: _vm.Placeholder,
                      attrs: _vm.attrs,
                      aria: _vm.aria,
                      locale: _vm.form$.locale$,
                    },
                    on: {
                      select: _vm.handleSelect,
                      deselect: _vm.handleDeselect,
                      "search-change": _vm.handleSearchChange,
                      tag: _vm.handleTag,
                      open: _vm.handleOpen,
                      close: _vm.handleClose,
                      clear: _vm.handleClear,
                      paste: _vm.handlePaste,
                    },
                    scopedSlots: _vm._u(
                      [
                        _vm._l(
                          {
                            option: "option",
                            noresults: "no-results",
                            nooptions: "no-options",
                            afterlist: "after-list",
                            beforelist: "before-list",
                            placeholder: "placeholder",
                            grouplabel: "group-label",
                            caret: "caret",
                            clear: "clear",
                            spinner: "spinner",
                            default: "default",
                          },
                          function (slotName, slotKey) {
                            return {
                              key: slotKey,
                              fn: function (props) {
                                return [
                                  _vm._t(
                                    slotName,
                                    function () {
                                      return [
                                        _c(
                                          _vm.fieldSlots[slotName],
                                          _vm._b(
                                            {
                                              tag: "component",
                                              attrs: { el$: _vm.el$ },
                                            },
                                            "component",
                                            props,
                                            false
                                          )
                                        ),
                                      ]
                                    },
                                    { el$: _vm.el$ },
                                    props
                                  ),
                                ]
                              },
                            }
                          }
                        ),
                        _vm.fieldOptions.mode == "tags"
                          ? {
                              key: "tag",
                              fn: function (ref) {
                                var option = ref.option;
                                var handleTagRemove = ref.handleTagRemove;
                                var disabled = ref.disabled;
                                return [
                                  _vm._t(
                                    "tag",
                                    function () {
                                      return [
                                        _c(_vm.fieldSlots.tag, {
                                          tag: "component",
                                          attrs: {
                                            option: option,
                                            handleTagRemove: handleTagRemove,
                                            disabled: disabled,
                                            el$: _vm.el$,
                                          },
                                        }),
                                      ]
                                    },
                                    {
                                      option: option,
                                      handleTagRemove: handleTagRemove,
                                      disabled: disabled,
                                      el$: _vm.el$,
                                    }
                                  ),
                                ]
                              },
                            }
                          : null,
                      ],
                      null,
                      true
                    ),
                    model: {
                      value: _vm.value,
                      callback: function ($$v) {
                        _vm.value = $$v;
                      },
                      expression: "value",
                    },
                  },
                  "Multiselect",
                  _vm.fieldOptions,
                  false
                )
              ),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$h = [];
__vue_render__$h._withStripped = true;

  /* style */
  const __vue_inject_styles__$m = undefined;
  /* scoped */
  const __vue_scope_id__$m = undefined;
  /* module identifier */
  const __vue_module_identifier__$m = undefined;
  /* functional template */
  const __vue_is_functional_template__$m = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$m = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
    __vue_inject_styles__$m,
    __vue_script__$m,
    __vue_scope_id__$m,
    __vue_is_functional_template__$m,
    __vue_module_identifier__$m,
    false,
    undefined,
    undefined,
    undefined
  );

  var TagsElement = __vue_component__$m;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$l = {
    name: 'TextareaElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
        }
      }
    }
  };

var css_248z$k = "";
styleInject(css_248z$k);

/* script */
const __vue_script__$l = script$l;
/* template */
var __vue_render__$g = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _c(
                "div",
                { class: _vm.classes.inputContainer },
                [
                  _vm.hasAddonBefore
                    ? _c(
                        "ElementAddon",
                        { attrs: { type: "before" } },
                        [
                          _vm._t("addon-before", function () {
                            return [
                              _c(_vm.fieldSlots["addon-before"], {
                                tag: "component",
                                attrs: { el$: _vm.el$ },
                              }),
                            ]
                          }),
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.hasAddonAfter
                    ? _c(
                        "ElementAddon",
                        { attrs: { type: "after" } },
                        [
                          _vm._t("addon-after", function () {
                            return [
                              _c(_vm.fieldSlots["addon-after"], {
                                tag: "component",
                                attrs: { el$: _vm.el$ },
                              }),
                            ]
                          }),
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.hasFloating && !_vm.empty
                    ? _c("ElementLabelFloating", {
                        attrs: { visible: !_vm.empty },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("ElementLoader", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.pending,
                        expression: "pending",
                      },
                    ],
                  }),
                  _vm._v(" "),
                  _c(
                    "textarea",
                    _vm._b(
                      {
                        ref: "input",
                        class: _vm.classes.input,
                        attrs: {
                          name: _vm.name,
                          id: _vm.fieldId,
                          placeholder: _vm.Placeholder,
                          disabled: _vm.isDisabled,
                          readonly: _vm.isReadonly,
                          rows: _vm.rows,
                          "data-autogrow": _vm.autogrow || undefined,
                        },
                        domProps: { value: _vm.model },
                        on: {
                          keydown: _vm.handleKeydown,
                          keyup: _vm.handleKeyup,
                          keypress: _vm.handleKeypress,
                          input: _vm.handleInput,
                          blur: _vm.handleBlur,
                          focus: _vm.handleFocus,
                        },
                      },
                      "textarea",
                      Object.assign({}, _vm.attrs, _vm.aria),
                      false
                    )
                  ),
                ],
                1
              ),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$g = [];
__vue_render__$g._withStripped = true;

  /* style */
  const __vue_inject_styles__$l = undefined;
  /* scoped */
  const __vue_scope_id__$l = undefined;
  /* module identifier */
  const __vue_module_identifier__$l = undefined;
  /* functional template */
  const __vue_is_functional_template__$l = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$l = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
    __vue_inject_styles__$l,
    __vue_script__$l,
    __vue_scope_id__$l,
    __vue_is_functional_template__$l,
    __vue_module_identifier__$l,
    false,
    undefined,
    undefined,
    undefined
  );

  var TextareaElement = __vue_component__$l;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$k = {
    name: 'TextElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
        },
      }
    },
  };

var css_248z$j = "";
styleInject(css_248z$j);

/* script */
const __vue_script__$k = script$k;
/* template */
var __vue_render__$f = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _c(
                "div",
                { class: _vm.classes.inputContainer },
                [
                  _vm.hasAddonBefore
                    ? _c(
                        "ElementAddon",
                        { attrs: { type: "before" } },
                        [
                          _vm._t("addon-before", function () {
                            return [
                              _c(_vm.fieldSlots["addon-before"], {
                                tag: "component",
                                attrs: { el$: _vm.el$ },
                              }),
                            ]
                          }),
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.hasAddonAfter
                    ? _c(
                        "ElementAddon",
                        { attrs: { type: "after" } },
                        [
                          _vm._t("addon-after", function () {
                            return [
                              _c(_vm.fieldSlots["addon-after"], {
                                tag: "component",
                                attrs: { el$: _vm.el$ },
                              }),
                            ]
                          }),
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.hasFloating && !_vm.empty
                    ? _c("ElementLabelFloating", {
                        attrs: { visible: !_vm.empty },
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isLoading ? _c("ElementLoader") : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "input",
                    _vm._b(
                      {
                        ref: "input",
                        class: _vm.classes.input,
                        attrs: {
                          type: _vm.inputType,
                          name: _vm.name,
                          id: _vm.fieldId,
                          placeholder: _vm.Placeholder,
                          autocomplete: _vm.autocomplete,
                          disabled: _vm.isDisabled,
                          readonly: _vm.isReadonly,
                        },
                        domProps: { value: _vm.model },
                        on: {
                          keydown: _vm.handleKeydown,
                          keyup: _vm.handleKeyup,
                          keypress: _vm.handleKeypress,
                          input: _vm.handleInput,
                          select: _vm.handleInput,
                          blur: _vm.handleBlur,
                          focus: _vm.handleFocus,
                        },
                      },
                      "input",
                      Object.assign({}, _vm.attrs, _vm.aria),
                      false
                    )
                  ),
                ],
                1
              ),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$f = [];
__vue_render__$f._withStripped = true;

  /* style */
  const __vue_inject_styles__$k = undefined;
  /* scoped */
  const __vue_scope_id__$k = undefined;
  /* module identifier */
  const __vue_module_identifier__$k = undefined;
  /* functional template */
  const __vue_is_functional_template__$k = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$k = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
    __vue_inject_styles__$k,
    __vue_script__$k,
    __vue_scope_id__$k,
    __vue_is_functional_template__$k,
    __vue_module_identifier__$k,
    false,
    undefined,
    undefined,
    undefined
  );

  var TextElement = __vue_component__$k;

function useValue$1 (props, context, dependencies)
{
  const { value, modelValue, falseValue, trueValue, disabled } = toRefs(props);

  /* istanbul ignore next */
  const externalValue = modelValue && modelValue.value !== undefined ? modelValue : value;

  // ============== COMPUTED ==============

  const checked = computed(() => {
    return externalValue.value === trueValue.value
  });

  // =============== METHODS ==============

  // no export
  const update = (val) => {
    context.emit('input', val);
    context.emit('update:modelValue', val);
    context.emit('change', val);
  };

  const check = () => {
    update(trueValue.value);
  };

  const uncheck = () => {
    update(falseValue.value);
  };

  const handleInput = (val) => {
    update(val.target.checked ? trueValue.value : falseValue.value);
  };

  const handleClick = () => {
    if (disabled.value) {
      return
    }

    checked.value ? uncheck() : check();
  };

  // ================ HOOKS ===============

  if ([null, undefined, false, 0, '0', 'off'].indexOf(externalValue.value) !== -1 && [falseValue.value, trueValue.value].indexOf(externalValue.value) === -1) {
    uncheck();
  }

  if ([true, 1, '1', 'on'].indexOf(externalValue.value) !== -1 && [falseValue.value, trueValue.value].indexOf(externalValue.value) === -1) {
    check();
  }

  return {
    externalValue,
    checked,
    update,
    check,
    uncheck,
    handleInput,
    handleClick,
  }
}

function useValue (props, context, dependencies)
{
  const { trueValue, falseValue, onLabel, offLabel } = toRefs(props);
  
  // ============ DEPENDENCIES ============

  const checked = dependencies.checked;
  const update = dependencies.update;

  // ============== COMPUTED ==============

  const label = computed(() => {
    let label = checked.value ? onLabel.value : offLabel.value;

    if (!label) {
      label = '&nbsp;';
    }

    return label
  });

  // =============== METHODS ==============

  const toggle = () => {
    update(checked.value ? falseValue.value : trueValue.value);
  };

  const on = () => {
    update(trueValue.value);
  };

  const off = () => {
    update(falseValue.value);
  };

  return {
    label,
    toggle,
    on,
    off,
  }
}

function useClasses (props, context, dependencies)
{
  const refs = toRefs(props);
  const disabled = refs.disabled;

  // ============ DEPENDENCIES ============

  const checked = dependencies.checked;

  // ============== COMPUTED ==============

  const classes = computed(() => ({
    container: 'toggle-container',
    toggle: 'toggle',
    toggleOn: 'toggle-on',
    toggleOff: 'toggle-off',
    toggleOnDisabled: 'toggle-on-disabled',
    toggleOffDisabled: 'toggle-off-disabled',
    handle: 'toggle-handle',
    handleOn: 'toggle-handle-on',
    handleOff: 'toggle-handle-off',
    handleOnDisabled: 'toggle-handle-on-disabled',
    handleOffDisabled: 'toggle-handle-off-disabled',
    label: 'toggle-label',
    ...refs.classes.value,
  }));

  const classList = computed(() => {
    return {
      container: classes.value.container,
      toggle: [
        classes.value.toggle,
        disabled.value
          ? (checked.value ? classes.value.toggleOnDisabled : classes.value.toggleOffDisabled)
          : (checked.value ? classes.value.toggleOn : classes.value.toggleOff)
      ],
      handle: [
        classes.value.handle,
        disabled.value
          ? (checked.value ? classes.value.handleOnDisabled : classes.value.handleOffDisabled)
          : (checked.value ? classes.value.handleOn : classes.value.handleOff)
      ],
      label: classes.value.label,
    }
  });

  return {
    classList,
  }
}

function useStyle (props, context, dependencies)
{
  const { disabled } = toRefs(props);

  // ============ DEPENDENCIES ============

  const check = dependencies.check;
  const uncheck = dependencies.uncheck;
  const checked = dependencies.checked;

  // =============== METHODS ==============

  const handleSpace = () => {
    if (disabled.value) {
      return
    }
    
    checked.value ? uncheck() : check();
  };

  return {
    handleSpace,
  }
}

//

  /* istanbul ignore next */
  const valueProps = {
    value: {
      validator: function(p) {
        return p => ['number', 'string', 'boolean'].indexOf(typeof p) !== -1 || p === null || p === undefined
      },
      required: false,
    },
    modelValue: {
      validator: function(p) {
        return p => ['number', 'string', 'boolean'].indexOf(typeof p) !== -1 || p === null || p === undefined
      },
      required: false,
    },
  };

  var script$j = {
    name: 'Toggle',
    emits: [
      'input', 'update:modelValue', 'change',
    ],
    props: {
      ...valueProps,
      id: {
        type: [String, Number],
        required: false,
        default: 'toggle'
      },
      name: {
        type: [String, Number],
        required: false,
        default: 'toggle'
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      },
      required: {
        type: Boolean,
        required: false,
        default: false,
      },
      falseValue: {
        type: [String, Number, Boolean],
        required: false,
        default: false,
      },
      trueValue: {
        type: [String, Number, Boolean],
        required: false,
        default: true,
      },
      onLabel: {
        type: [String, Object],
        required: false,
        default: ''
      },
      offLabel: {
        type: [String, Object],
        required: false,
        default: ''
      },
      classes: {
        type: Object,
        required: false,
        default: () => ({})
      },
      labelledby: {
        type: String,
        required: false,
      },
      describedby: {
        type: String,
        required: false,
      },
      aria: {
        required: false,
        type: Object,
        default: () => ({}),
      },
    },
    setup(props, context)
    {
      const value = useValue$1(props, context);

      const toggle = useValue(props, context, {
        checked: value.checked,
        update: value.update,
      });

      const classes = useClasses(props, context, {
        checked: value.checked,
      });

      const keyboard = useStyle(props, context, {
        check: value.check,
        uncheck: value.uncheck,
        checked: value.checked,
      });

      return {
        ...value,
        ...classes,
        ...toggle,
        ...keyboard,
      }
    }
  };

/* script */
const __vue_script__$j = script$j;

/* template */
var __vue_render__$e = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    _vm._b(
      {
        class: _vm.classList.container,
        attrs: {
          tabindex: _vm.disabled ? undefined : 0,
          "aria-checked": _vm.checked,
          "aria-describedby": _vm.describedby,
          "aria-labelledby": _vm.labelledby,
          role: "switch",
        },
        on: {
          keypress: function ($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])
            ) {
              return null
            }
            $event.preventDefault();
            return _vm.handleSpace.apply(null, arguments)
          },
        },
      },
      "div",
      _vm.aria,
      false
    ),
    [
      _c("input", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: false,
            expression: "false",
          },
        ],
        attrs: {
          type: "checkbox",
          id: _vm.id,
          name: _vm.name,
          disabled: _vm.disabled,
        },
        domProps: { value: _vm.trueValue, checked: _vm.checked },
      }),
      _vm._v(" "),
      _c(
        "div",
        { class: _vm.classList.toggle, on: { click: _vm.handleClick } },
        [
          _c("span", { class: _vm.classList.handle }),
          _vm._v(" "),
          _vm._t(
            "label",
            function () {
              return [
                _c("span", {
                  class: _vm.classList.label,
                  domProps: { innerHTML: _vm._s(_vm.label) },
                }),
              ]
            },
            { checked: _vm.checked, classList: _vm.classList }
          ),
          _vm._v(" "),
          _vm.required
            ? _c("input", {
                style: {
                  appearance: "none",
                  height: "1px",
                  margin: "0",
                  padding: "0",
                  fontSize: "0",
                  background: "transparent",
                  position: "absolute",
                  width: "100%",
                  bottom: "0",
                  outline: "none",
                },
                attrs: {
                  type: "checkbox",
                  "aria-hidden": "true",
                  tabindex: "-1",
                  required: "",
                },
                domProps: { checked: _vm.checked },
              })
            : _vm._e(),
        ],
        2
      ),
    ]
  )
};
var __vue_staticRenderFns__$e = [];
__vue_render__$e._withStripped = true;

  /* style */
  const __vue_inject_styles__$j = undefined;
  /* scoped */
  const __vue_scope_id__$j = undefined;
  /* module identifier */
  const __vue_module_identifier__$j = undefined;
  /* functional template */
  const __vue_is_functional_template__$j = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$j = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
    __vue_inject_styles__$j,
    __vue_script__$j,
    __vue_scope_id__$j,
    __vue_is_functional_template__$j,
    __vue_module_identifier__$j,
    false,
    undefined,
    undefined,
    undefined
  );

//

  var script$i = {
    name: 'ToggleElement',
    components: {
      Toggle: __vue_component__$j,
    },
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          toggle: {
            container: '',
            toggle: '',
            toggleOn: '',
            toggleOff: '',
            toggleOnDisabled: '',
            toggleOffDisabled: '',
            handle: '',
            handleOn: '',
            handleOff: '',
            handleOnDisabled: '',
            handleOffDisabled: '',
            label: '',
          },
          text: '',
        }
      }
    }
  };

var css_248z$i = "";
styleInject(css_248z$i);

/* script */
const __vue_script__$i = script$i;
/* template */
var __vue_render__$d = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _c(
                "div",
                { class: _vm.classes.wrapper },
                [
                  _c(
                    "Toggle",
                    _vm._b(
                      {
                        ref: "input",
                        attrs: {
                          value: _vm.value,
                          modelValue: _vm.value,
                          classes: _vm.classes.toggle,
                          name: _vm.name,
                          id: _vm.fieldId,
                          aria: _vm.aria,
                        },
                        on: { input: _vm.handleChange },
                      },
                      "Toggle",
                      _vm.fieldOptions,
                      false
                    )
                  ),
                  _vm._v(" "),
                  !_vm.standalone && _vm.Text
                    ? _c("span", {
                        class: _vm.classes.text,
                        domProps: { innerHTML: _vm._s(_vm.Text) },
                      })
                    : !_vm.standalone
                    ? _c(
                        "span",
                        { class: _vm.classes.text },
                        [
                          _vm._t(
                            "default",
                            function () {
                              return [
                                _c(_vm.fieldSlots.default, {
                                  tag: "component",
                                  attrs: { el$: _vm.el$ },
                                }),
                              ]
                            },
                            { el$: _vm.el$ }
                          ),
                        ],
                        2
                      )
                    : _vm._e(),
                ],
                1
              ),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$d = [];
__vue_render__$d._withStripped = true;

  /* style */
  const __vue_inject_styles__$i = undefined;
  /* scoped */
  const __vue_scope_id__$i = undefined;
  /* module identifier */
  const __vue_module_identifier__$i = undefined;
  /* functional template */
  const __vue_is_functional_template__$i = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$i = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
    __vue_inject_styles__$i,
    __vue_script__$i,
    __vue_scope_id__$i,
    __vue_is_functional_template__$i,
    __vue_module_identifier__$i,
    false,
    undefined,
    undefined,
    undefined
  );

  var ToggleElement = __vue_component__$i;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$h = {
    name: 'EditorElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          input: '',
        }
      }
    }
  };

var css_248z$h = "";
styleInject(css_248z$h);

/* script */
const __vue_script__$h = script$h;
/* template */
var __vue_render__$c = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.elementLayout, {
    ref: "container",
    tag: "component",
    scopedSlots: _vm._u(
      [
        {
          key: "element",
          fn: function () {
            return [
              _c("EditorWrapper", {
                ref: "input",
                class: _vm.classes.input,
                attrs: {
                  value: _vm.model,
                  placeholder: _vm.Placeholder,
                  id: _vm.fieldId,
                  accept: _vm.accept,
                  "accept-mimes": _vm.acceptMimes,
                  endpoint: _vm.editorEndpoint,
                  method: _vm.editorMethod,
                  disabled: _vm.isDisabled,
                  "hide-tools": _vm.hideTools,
                  attrs: _vm.aria,
                },
                on: {
                  input: _vm.handleInput,
                  alert: _vm.handleAlert,
                  error: _vm.handleError,
                  blur: _vm.handleBlur,
                },
              }),
            ]
          },
          proxy: true,
        },
        _vm._l(_vm.elementSlots, function (component, slot) {
          return {
            key: slot,
            fn: function () {
              return [
                _vm._t(
                  slot,
                  function () {
                    return [
                      _c(component, {
                        tag: "component",
                        attrs: { el$: _vm.el$ },
                      }),
                    ]
                  },
                  { el$: _vm.el$ }
                ),
              ]
            },
            proxy: true,
          }
        }),
      ],
      null,
      true
    ),
  })
};
var __vue_staticRenderFns__$c = [];
__vue_render__$c._withStripped = true;

  /* style */
  const __vue_inject_styles__$h = undefined;
  /* scoped */
  const __vue_scope_id__$h = undefined;
  /* module identifier */
  const __vue_module_identifier__$h = undefined;
  /* functional template */
  const __vue_is_functional_template__$h = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$h = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
    __vue_inject_styles__$h,
    __vue_script__$h,
    __vue_scope_id__$h,
    __vue_is_functional_template__$h,
    __vue_module_identifier__$h,
    false,
    undefined,
    undefined,
    undefined
  );

  var EditorElement = __vue_component__$h;

var script$g = {
    name: 'TTextareaElement',
    render: TextareaElement.render,
    staticRenderFns: TextareaElement.staticRenderFns,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
        }
      }
    }
  };

var css_248z$g = "";
styleInject(css_248z$g);

/* script */
const __vue_script__$g = script$g;
/* template */

  /* style */
  const __vue_inject_styles__$g = undefined;
  /* scoped */
  const __vue_scope_id__$g = undefined;
  /* module identifier */
  const __vue_module_identifier__$g = undefined;
  /* functional template */
  const __vue_is_functional_template__$g = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$g = /*#__PURE__*/normalizeComponent(
    {},
    __vue_inject_styles__$g,
    __vue_script__$g,
    __vue_scope_id__$g,
    __vue_is_functional_template__$g,
    __vue_module_identifier__$g,
    false,
    undefined,
    undefined,
    undefined
  );

  var TTextareaElement = __vue_component__$g;

var script$f = {
    name: 'TTextElement',
    render: TextElement.render,
    staticRenderFns: TextElement.staticRenderFns,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
        }
      }
    },
  };

var css_248z$f = "";
styleInject(css_248z$f);

/* script */
const __vue_script__$f = script$f;
/* template */

  /* style */
  const __vue_inject_styles__$f = undefined;
  /* scoped */
  const __vue_scope_id__$f = undefined;
  /* module identifier */
  const __vue_module_identifier__$f = undefined;
  /* functional template */
  const __vue_is_functional_template__$f = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$f = /*#__PURE__*/normalizeComponent(
    {},
    __vue_inject_styles__$f,
    __vue_script__$f,
    __vue_scope_id__$f,
    __vue_is_functional_template__$f,
    __vue_module_identifier__$f,
    false,
    undefined,
    undefined,
    undefined
  );

  var TTextElement = __vue_component__$f;

var script$e = {
    name: 'TEditorElement',
    render: EditorElement.render,
    staticRenderFns: EditorElement.staticRenderFns,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          input: '',
        }
      }
    }
  };

var css_248z$e = "";
styleInject(css_248z$e);

/* script */
const __vue_script__$e = script$e;
/* template */

  /* style */
  const __vue_inject_styles__$e = undefined;
  /* scoped */
  const __vue_scope_id__$e = undefined;
  /* module identifier */
  const __vue_module_identifier__$e = undefined;
  /* functional template */
  const __vue_is_functional_template__$e = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$e = /*#__PURE__*/normalizeComponent(
    {},
    __vue_inject_styles__$e,
    __vue_script__$e,
    __vue_scope_id__$e,
    __vue_is_functional_template__$e,
    __vue_module_identifier__$e,
    false,
    undefined,
    undefined,
    undefined
  );

  var TEditorElement = __vue_component__$e;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$d = {
    name: 'CheckboxgroupCheckbox',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          input: '',
          text: '',
        }
      }
    }
  };

var css_248z$d = "";
styleInject(css_248z$d);

/* script */
const __vue_script__$d = script$d;
/* template */
var __vue_render__$b = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "label",
    { class: _vm.classes.container },
    [
      _vm._t(
        "default",
        function () {
          return [
            _c(
              "input",
              _vm._b(
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.el$.model,
                      expression: "el$.model",
                    },
                  ],
                  class: _vm.classes.input,
                  attrs: {
                    type: "checkbox",
                    name: _vm.name,
                    id: _vm.id,
                    disabled: _vm.isDisabled,
                    "aria-label": _vm.item.label,
                  },
                  domProps: {
                    value: _vm.value,
                    checked: Array.isArray(_vm.el$.model)
                      ? _vm._i(_vm.el$.model, _vm.value) > -1
                      : _vm.el$.model,
                  },
                  on: {
                    change: function ($event) {
                      var $$a = _vm.el$.model,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false;
                      if (Array.isArray($$a)) {
                        var $$v = _vm.value,
                          $$i = _vm._i($$a, $$v);
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(_vm.el$, "model", $$a.concat([$$v]));
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.el$,
                              "model",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            );
                        }
                      } else {
                        _vm.$set(_vm.el$, "model", $$c);
                      }
                    },
                  },
                },
                "input",
                _vm.attrs,
                false
              )
            ),
            _vm._v(" "),
            _c("span", {
              class: _vm.classes.text,
              domProps: { innerHTML: _vm._s(_vm.item.label) },
            }),
          ]
        },
        {
          classes: _vm.classes,
          isDisabled: _vm.isDisabled,
          id: _vm.id,
          item: _vm.item,
          value: _vm.value,
          items: _vm.items,
          index: _vm.index,
        },
        { name: _vm.name }
      ),
    ],
    2
  )
};
var __vue_staticRenderFns__$b = [];
__vue_render__$b._withStripped = true;

  /* style */
  const __vue_inject_styles__$d = undefined;
  /* scoped */
  const __vue_scope_id__$d = undefined;
  /* module identifier */
  const __vue_module_identifier__$d = undefined;
  /* functional template */
  const __vue_is_functional_template__$d = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$d = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$d,
    __vue_script__$d,
    __vue_scope_id__$d,
    __vue_is_functional_template__$d,
    __vue_module_identifier__$d,
    false,
    undefined,
    undefined,
    undefined
  );

  var CheckboxgroupCheckbox = __vue_component__$d;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$c = {
    name: 'CheckboxgroupCheckbox_tabs',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          input: '',
          text: '',
        }
      }
    }
  };

var css_248z$c = "";
styleInject(css_248z$c);

/* script */
const __vue_script__$c = script$c;
/* template */
var __vue_render__$a = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "label",
    _vm._b(
      {
        class: _vm.classes.container,
        attrs: { tabindex: "0", role: "checkbox", "aria-checked": _vm.checked },
        on: {
          keypress: function ($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])
            ) {
              return null
            }
            $event.preventDefault();
            return _vm.el$.toggle(_vm.value)
          },
          keydown: _vm.handleKeydown,
        },
      },
      "label",
      _vm.attrs,
      false
    ),
    [
      _vm._t(
        "default",
        function () {
          return [
            _c(
              "div",
              { class: _vm.classes.wrapper, attrs: { title: _vm.item.label } },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.el$.model,
                      expression: "el$.model",
                    },
                  ],
                  class: _vm.classes.input,
                  attrs: {
                    type: "checkbox",
                    id: _vm.id,
                    name: _vm.name,
                    disabled: _vm.isDisabled,
                  },
                  domProps: {
                    value: _vm.value,
                    checked: Array.isArray(_vm.el$.model)
                      ? _vm._i(_vm.el$.model, _vm.value) > -1
                      : _vm.el$.model,
                  },
                  on: {
                    change: function ($event) {
                      var $$a = _vm.el$.model,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false;
                      if (Array.isArray($$a)) {
                        var $$v = _vm.value,
                          $$i = _vm._i($$a, $$v);
                        if ($$el.checked) {
                          $$i < 0 &&
                            _vm.$set(_vm.el$, "model", $$a.concat([$$v]));
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              _vm.el$,
                              "model",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            );
                        }
                      } else {
                        _vm.$set(_vm.el$, "model", $$c);
                      }
                    },
                  },
                }),
                _vm._v(" "),
                _c("span", {
                  class: _vm.classes.text,
                  domProps: { innerHTML: _vm._s("" + _vm.item.label) },
                }),
              ]
            ),
          ]
        },
        {
          classes: _vm.classes,
          isDisabled: _vm.isDisabled,
          id: _vm.id,
          item: _vm.item,
          value: _vm.value,
          items: _vm.items,
          index: _vm.index,
        },
        { name: _vm.name }
      ),
    ],
    2
  )
};
var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;

  /* style */
  const __vue_inject_styles__$c = undefined;
  /* scoped */
  const __vue_scope_id__$c = undefined;
  /* module identifier */
  const __vue_module_identifier__$c = undefined;
  /* functional template */
  const __vue_is_functional_template__$c = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$c = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$c,
    __vue_script__$c,
    __vue_scope_id__$c,
    __vue_is_functional_template__$c,
    __vue_module_identifier__$c,
    false,
    undefined,
    undefined,
    undefined
  );

  var CheckboxgroupCheckbox_tabs = __vue_component__$c;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$b = {
    name: 'CheckboxgroupCheckbox_tabs',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          input: '',
          text_wrapper: '',
          text: '',
          description: '',
        }
      }
    }
  };

var css_248z$b = "";
styleInject(css_248z$b);

/* script */
const __vue_script__$b = script$b;
/* template */
var __vue_render__$9 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "label",
    { class: _vm.classes.container },
    [
      _vm._t(
        "default",
        function () {
          return [
            _c("div", { class: _vm.classes.wrapper }, [
              _c(
                "input",
                _vm._b(
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.el$.model,
                        expression: "el$.model",
                      },
                    ],
                    class: _vm.classes.input,
                    attrs: {
                      type: "checkbox",
                      name: _vm.name,
                      id: _vm.id,
                      disabled: _vm.isDisabled,
                    },
                    domProps: {
                      value: _vm.value,
                      checked: Array.isArray(_vm.el$.model)
                        ? _vm._i(_vm.el$.model, _vm.value) > -1
                        : _vm.el$.model,
                    },
                    on: {
                      change: function ($event) {
                        var $$a = _vm.el$.model,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false;
                        if (Array.isArray($$a)) {
                          var $$v = _vm.value,
                            $$i = _vm._i($$a, $$v);
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(_vm.el$, "model", $$a.concat([$$v]));
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.el$,
                                "model",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              );
                          }
                        } else {
                          _vm.$set(_vm.el$, "model", $$c);
                        }
                      },
                    },
                  },
                  "input",
                  _vm.attrs,
                  false
                )
              ),
              _vm._v(" "),
              _c("div", { class: _vm.classes.text_wrapper }, [
                _c("div", {
                  class: _vm.classes.text,
                  domProps: { innerHTML: _vm._s(_vm.item.label) },
                }),
                _vm._v(" "),
                _c("div", {
                  class: _vm.classes.description,
                  domProps: { innerHTML: _vm._s(_vm.item.description) },
                }),
              ]),
            ]),
          ]
        },
        {
          classes: _vm.classes,
          isDisabled: _vm.isDisabled,
          id: _vm.id,
          item: _vm.item,
          value: _vm.value,
          items: _vm.items,
          index: _vm.index,
        },
        { name: _vm.name }
      ),
    ],
    2
  )
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

  /* style */
  const __vue_inject_styles__$b = undefined;
  /* scoped */
  const __vue_scope_id__$b = undefined;
  /* module identifier */
  const __vue_module_identifier__$b = undefined;
  /* functional template */
  const __vue_is_functional_template__$b = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$b = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$b,
    __vue_script__$b,
    __vue_scope_id__$b,
    __vue_is_functional_template__$b,
    __vue_module_identifier__$b,
    false,
    undefined,
    undefined,
    undefined
  );

  var CheckboxgroupCheckbox_blocks = __vue_component__$b;

//
//
//
//
//
//
//
//
//
//
//
//

  var script$a = {
    name: 'DragAndDrop',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          icon: '',
          title: '',
          description: '',
        }
      }
    }
  };

var css_248z$a = "";
styleInject(css_248z$a);

/* script */
const __vue_script__$a = script$a;
/* template */
var __vue_render__$8 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      ref: "area",
      class: _vm.classes.container,
      on: {
        click: function ($event) {
          $event.preventDefault();
          return _vm.handleClick.apply(null, arguments)
        },
      },
    },
    [
      _c("span", { class: _vm.classes.icon }),
      _vm._v(" "),
      _vm.title
        ? _c("span", { class: _vm.classes.title }, [_vm._v(_vm._s(_vm.title))])
        : _vm._e(),
      _vm._v(" "),
      _vm.description
        ? _c("span", { class: _vm.classes.description }, [
            _vm._v(_vm._s(_vm.description)),
          ])
        : _vm._e(),
    ]
  )
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  const __vue_inject_styles__$a = undefined;
  /* scoped */
  const __vue_scope_id__$a = undefined;
  /* module identifier */
  const __vue_module_identifier__$a = undefined;
  /* functional template */
  const __vue_is_functional_template__$a = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$a = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$a,
    __vue_script__$a,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    false,
    undefined,
    undefined,
    undefined
  );

  var DragAndDrop = __vue_component__$a;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$9 = {
    name: 'FilePreview',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          file: '',
          filenameLink: '',
          filenameStatic: '',
          actions: '',
          percent: '',
          upload: '',
          progressBar: '',
          progress: '',
          warning: '',
          warningIcon: '',
          uploaded: '',
          uploadedIcon: '',
          remove: '',
          removeIcon: '',
          assistiveText: '',
        }
      }
    }
  };

var css_248z$9 = "";
styleInject(css_248z$9);

/* script */
const __vue_script__$9 = script$9;
/* template */
var __vue_render__$7 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    _vm._b(
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.visible,
            expression: "visible",
          },
        ],
        class: _vm.classes.container,
        attrs: {
          tabindex: "0",
          role: "button",
          "aria-labelledby": _vm.ariaLabelledby,
          "aria-placeholder": _vm.ariaPlaceholder,
          "aria-describedby": _vm.el$.fieldId + "-file-description",
        },
        on: { keyup: _vm.handleKeyup },
      },
      "div",
      _vm.attrs,
      false
    ),
    [
      _c(
        "span",
        {
          class: _vm.classes.assistiveText,
          attrs: {
            id: _vm.el$.fieldId + "-file-description",
            "aria-hidden": "",
          },
        },
        [_vm._v(_vm._s(_vm.form$.translations.vueform.a11y.file.description))]
      ),
      _vm._v(" "),
      _c("div", { class: _vm.classes.wrapper }, [
        _c("div", { class: _vm.classes.file }, [
          _vm.hasLink && _vm.clickable
            ? _c(
                "a",
                {
                  class: _vm.classes.filenameLink,
                  attrs: {
                    href: _vm.link,
                    target: "_blank",
                    rel: "nofollow noopener",
                  },
                },
                [_vm._v(_vm._s(_vm.filename))]
              )
            : _c("span", { class: _vm.classes.filenameStatic }, [
                _vm._v(_vm._s(_vm.filename)),
              ]),
        ]),
        _vm._v(" "),
        _c("div", { class: _vm.classes.actions }, [
          _vm.canRemove
            ? _c(
                "div",
                {
                  class: _vm.classes.remove,
                  attrs: {
                    "aria-roledescription": "❎",
                    role: "button",
                    tabindex: "0",
                  },
                  on: {
                    click: function ($event) {
                      $event.preventDefault();
                      return _vm.remove.apply(null, arguments)
                    },
                    keypress: function ($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k(
                          $event.keyCode,
                          "enter",
                          13,
                          $event.key,
                          "Enter"
                        ) &&
                        _vm._k($event.keyCode, "space", 32, $event.key, [
                          " ",
                          "Spacebar",
                        ])
                      ) {
                        return null
                      }
                      return _vm.remove.apply(null, arguments)
                    },
                  },
                },
                [_c("span", { class: _vm.classes.removeIcon })]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.uploading
            ? _c("div", { class: _vm.classes.percent }, [
                _vm._v(_vm._s(_vm.progress) + "%"),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.hasError
            ? _c("span", { class: _vm.classes.warning }, [
                _c("span", { class: _vm.classes.warningIcon }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.canUploadTemp
            ? _c(
                "div",
                {
                  class: _vm.classes.upload,
                  attrs: { tabindex: "-1" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault();
                      return _vm.upload.apply(null, arguments)
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.uploadText))]
              )
            : _vm.el$.stage > 1
            ? _c("span", { class: _vm.classes.uploaded }, [
                _c("span", { class: _vm.classes.uploadedIcon }),
              ])
            : _vm._e(),
        ]),
      ]),
      _vm._v(" "),
      _vm.uploading
        ? _c("div", { class: _vm.classes.progressBar }, [
            _c("div", {
              class: _vm.classes.progress,
              style: { width: _vm.progress + "%" },
            }),
          ])
        : _vm._e(),
    ]
  )
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  const __vue_inject_styles__$9 = undefined;
  /* scoped */
  const __vue_scope_id__$9 = undefined;
  /* module identifier */
  const __vue_module_identifier__$9 = undefined;
  /* functional template */
  const __vue_is_functional_template__$9 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$9 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    false,
    undefined,
    undefined,
    undefined
  );

  var FilePreview = __vue_component__$9;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$8 = {
    name: 'FilePreview_image',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          image: '',
          img: '',
          file: '',
          filenameLink: '',
          filenameStatic: '',
          actions: '',
          percent: '',
          upload: '',
          progressBar: '',
          progress: '',
          warning: '',
          warningIcon: '',
          uploaded: '',
          uploadedIcon: '',
          remove: '',
          removeIcon: '',
        }
      }
    }
  };

var css_248z$8 = "";
styleInject(css_248z$8);

/* script */
const __vue_script__$8 = script$8;
/* template */
var __vue_render__$6 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    _vm._b(
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.visible,
            expression: "visible",
          },
        ],
        class: _vm.classes.container,
        attrs: {
          tabindex: "0",
          role: "button",
          "aria-labelledby": _vm.ariaLabelledby,
          "aria-placeholder": _vm.ariaPlaceholder,
          "aria-describedby": _vm.el$.fieldId + "-file-description",
        },
        on: { keyup: _vm.handleKeyup },
      },
      "div",
      _vm.attrs,
      false
    ),
    [
      _c(
        "span",
        {
          class: _vm.classes.assistiveText,
          attrs: {
            id: _vm.el$.fieldId + "-file-description",
            "aria-hidden": "",
          },
        },
        [_vm._v(_vm._s(_vm.form$.translations.vueform.a11y.file.description))]
      ),
      _vm._v(" "),
      _c("div", { class: _vm.classes.wrapper }, [
        _vm.uploaded && _vm.hasLink && _vm.clickable
          ? _c(
              "a",
              {
                class: _vm.classes.image,
                attrs: {
                  href: _vm.link,
                  target: "_blank",
                  rel: "nofollow noopener",
                },
              },
              [
                _c("img", {
                  class: _vm.classes.img,
                  attrs: {
                    src: _vm.preview,
                    alt: _vm.filename,
                    title: _vm.filename,
                    "aria-hidden": "true",
                  },
                }),
              ]
            )
          : _c("span", { class: _vm.classes.image }, [
              _c("img", {
                class: _vm.classes.img,
                attrs: {
                  src: _vm.preview,
                  alt: _vm.filename,
                  title: _vm.filename,
                  "aria-hidden": "true",
                },
              }),
            ]),
        _vm._v(" "),
        _c("div", { class: _vm.classes.file }, [
          _vm.hasLink && _vm.clickable
            ? _c(
                "a",
                {
                  class: _vm.classes.filenameLink,
                  attrs: {
                    href: _vm.link,
                    target: "_blank",
                    rel: "nofollow noopener",
                  },
                },
                [_vm._v(_vm._s(_vm.filename))]
              )
            : _c("span", { class: _vm.classes.filenameStatic }, [
                _vm._v(_vm._s(_vm.filename)),
              ]),
        ]),
        _vm._v(" "),
        _c("div", { class: _vm.classes.actions }, [
          _vm.canRemove
            ? _c(
                "div",
                {
                  class: _vm.classes.remove,
                  attrs: {
                    "aria-roledescription": "❎",
                    role: "button",
                    tabindex: "0",
                  },
                  on: {
                    click: function ($event) {
                      $event.preventDefault();
                      return _vm.remove.apply(null, arguments)
                    },
                    keypress: function ($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k(
                          $event.keyCode,
                          "enter",
                          13,
                          $event.key,
                          "Enter"
                        ) &&
                        _vm._k($event.keyCode, "space", 32, $event.key, [
                          " ",
                          "Spacebar",
                        ])
                      ) {
                        return null
                      }
                      return _vm.remove.apply(null, arguments)
                    },
                  },
                },
                [_c("span", { class: _vm.classes.removeIcon })]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.uploading
            ? _c("div", { class: _vm.classes.percent }, [
                _vm._v(_vm._s(_vm.progress) + "%"),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.hasError
            ? _c("span", { class: _vm.classes.warning }, [
                _c("span", { class: _vm.classes.warningIcon }),
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.canUploadTemp
            ? _c(
                "div",
                {
                  class: _vm.classes.upload,
                  attrs: { tabindex: "-1", role: "button" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault();
                      return _vm.upload.apply(null, arguments)
                    },
                    keypress: function ($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k(
                          $event.keyCode,
                          "enter",
                          13,
                          $event.key,
                          "Enter"
                        ) &&
                        _vm._k($event.keyCode, "space", 32, $event.key, [
                          " ",
                          "Spacebar",
                        ])
                      ) {
                        return null
                      }
                      return _vm.upload.apply(null, arguments)
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.uploadText))]
              )
            : _vm.el$.stage > 1
            ? _c("span", { class: _vm.classes.uploaded }, [
                _c("span", { class: _vm.classes.uploadedIcon }),
              ])
            : _vm._e(),
        ]),
      ]),
      _vm._v(" "),
      _vm.uploading
        ? _c("div", { class: _vm.classes.progressBar }, [
            _c("div", {
              class: _vm.classes.progress,
              style: { width: _vm.progress + "%" },
            }),
          ])
        : _vm._e(),
    ]
  )
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$8 = undefined;
  /* scoped */
  const __vue_scope_id__$8 = undefined;
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$8 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    false,
    undefined,
    undefined,
    undefined
  );

  var FilePreview_image = __vue_component__$8;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$7 = {
    name: 'FilePreview_gallery',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          image: '',
          img: '',
          overlay: '',
          upload: '',
          progressBar: '',
          progress: '',
          warning: '',
          warningIcon: '',
          uploaded: '',
          uploadedIcon: '',
          remove: '',
          removeIcon: '',
        }
      }
    }
  };

var css_248z$7 = "";
styleInject(css_248z$7);

/* script */
const __vue_script__$7 = script$7;
/* template */
var __vue_render__$5 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    _vm._b(
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.visible,
            expression: "visible",
          },
        ],
        class: _vm.classes.container,
        attrs: {
          tabindex: "0",
          role: "button",
          "aria-labelledby": _vm.ariaLabelledby,
          "aria-placeholder": _vm.ariaPlaceholder,
          "aria-role": _vm.ariaRoledescription,
          "aria-describedby": _vm.el$.fieldId + "-file-description",
        },
        on: { keyup: _vm.handleKeyup },
      },
      "div",
      _vm.attrs,
      false
    ),
    [
      _c(
        "span",
        {
          class: _vm.classes.assistiveText,
          attrs: {
            id: _vm.el$.fieldId + "-file-description",
            "aria-hidden": "",
          },
        },
        [_vm._v(_vm._s(_vm.form$.translations.vueform.a11y.file.description))]
      ),
      _vm._v(" "),
      _vm.uploaded && _vm.hasLink && _vm.clickable
        ? _c(
            "a",
            {
              class: _vm.classes.image,
              attrs: {
                href: _vm.link,
                target: "_blank",
                rel: "nofollow noopener",
              },
            },
            [
              _c("img", {
                class: _vm.classes.img,
                attrs: {
                  src: _vm.preview,
                  alt: _vm.filename,
                  title: _vm.filename,
                  "aria-hidden": "true",
                },
              }),
            ]
          )
        : _c("div", { class: _vm.classes.image }, [
            _c("img", {
              class: _vm.classes.img,
              attrs: {
                src: _vm.preview,
                alt: _vm.filename,
                title: _vm.filename,
                "aria-hidden": "true",
              },
            }),
          ]),
      _vm._v(" "),
      !_vm.uploaded && !_vm.uploading
        ? _c("div", { class: _vm.classes.overlay }, [
            _vm.canUploadTemp
              ? _c(
                  "div",
                  {
                    class: _vm.classes.upload,
                    attrs: { tabindex: "-1", role: "button" },
                    on: {
                      click: function ($event) {
                        $event.preventDefault();
                        return _vm.upload.apply(null, arguments)
                      },
                      keypress: function ($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          ) &&
                          _vm._k($event.keyCode, "space", 32, $event.key, [
                            " ",
                            "Spacebar",
                          ])
                        ) {
                          return null
                        }
                        return _vm.upload.apply(null, arguments)
                      },
                    },
                  },
                  [_vm._v(_vm._s(_vm.uploadText))]
                )
              : _vm._e(),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.hasError
        ? _c("span", { class: _vm.classes.warning }, [
            _c("span", { class: _vm.classes.warningIcon }),
          ])
        : _vm.el$.stage > 1
        ? _c("span", { class: _vm.classes.uploaded }, [
            _c("span", { class: _vm.classes.uploadedIcon }),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.canRemove
        ? _c(
            "div",
            {
              class: _vm.classes.remove,
              attrs: {
                "aria-roledescription": "❎",
                role: "button",
                tabindex: "0",
              },
              on: {
                click: function ($event) {
                  $event.preventDefault();
                  return _vm.remove.apply(null, arguments)
                },
                keypress: function ($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter") &&
                    _vm._k($event.keyCode, "space", 32, $event.key, [
                      " ",
                      "Spacebar",
                    ])
                  ) {
                    return null
                  }
                  return _vm.remove.apply(null, arguments)
                },
              },
            },
            [_c("span", { class: _vm.classes.removeIcon })]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.uploading
        ? _c("div", { class: _vm.classes.progressBar }, [
            _c("div", {
              class: _vm.classes.progress,
              style: { width: _vm.progress + "%" },
            }),
          ])
        : _vm._e(),
    ]
  )
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$7 = undefined;
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$7 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    false,
    undefined,
    undefined,
    undefined
  );

  var FilePreview_gallery = __vue_component__$7;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$6 = {
    name: 'RadiogroupRadio',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          input: '',
          text: '',
        }
      }
    }
  };

var css_248z$6 = "";
styleInject(css_248z$6);

/* script */
const __vue_script__$6 = script$6;
/* template */
var __vue_render__$4 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "label",
    { class: _vm.classes.container },
    [
      _vm._t(
        "default",
        function () {
          return [
            _c(
              "input",
              _vm._b(
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.el$.value,
                      expression: "el$.value",
                    },
                  ],
                  class: _vm.classes.input,
                  attrs: {
                    type: "radio",
                    name: _vm.name,
                    id: _vm.id,
                    disabled: _vm.isDisabled,
                    "aria-label": _vm.item.label,
                  },
                  domProps: {
                    value: _vm.value,
                    checked: _vm._q(_vm.el$.value, _vm.value),
                  },
                  on: {
                    change: function ($event) {
                      return _vm.$set(_vm.el$, "value", _vm.value)
                    },
                  },
                },
                "input",
                _vm.attrs,
                false
              )
            ),
            _vm._v(" "),
            _c("span", {
              class: _vm.classes.text,
              domProps: { innerHTML: _vm._s(_vm.item.label) },
            }),
          ]
        },
        {
          classes: _vm.classes,
          isDisabled: _vm.isDisabled,
          id: _vm.id,
          item: _vm.item,
          value: _vm.value,
          items: _vm.items,
          index: _vm.index,
        },
        { name: _vm.name }
      ),
    ],
    2
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = undefined;
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$6 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    false,
    undefined,
    undefined,
    undefined
  );

  var RadiogroupRadio = __vue_component__$6;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$5 = {
    name: 'RadiogroupRadio_tabs',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          input: '',
          text: '',
        }
      }
    }
  };

var css_248z$5 = "";
styleInject(css_248z$5);

/* script */
const __vue_script__$5 = script$5;
/* template */
var __vue_render__$3 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "label",
    _vm._b(
      {
        class: _vm.classes.container,
        attrs: { tabindex: "0", role: "radio", "aria-checked": _vm.checked },
        on: {
          keypress: function ($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"])
            ) {
              return null
            }
            $event.preventDefault();
            return _vm.el$.update(_vm.value)
          },
          keydown: _vm.handleKeydown,
        },
      },
      "label",
      _vm.attrs,
      false
    ),
    [
      _vm._t(
        "default",
        function () {
          return [
            _c(
              "div",
              { class: _vm.classes.wrapper, attrs: { title: _vm.item.label } },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.el$.model,
                      expression: "el$.model",
                    },
                  ],
                  class: _vm.classes.input,
                  attrs: {
                    type: "radio",
                    name: _vm.name,
                    id: _vm.id,
                    disabled: _vm.isDisabled,
                  },
                  domProps: {
                    value: _vm.value,
                    checked: _vm._q(_vm.el$.model, _vm.value),
                  },
                  on: {
                    change: function ($event) {
                      return _vm.$set(_vm.el$, "model", _vm.value)
                    },
                  },
                }),
                _vm._v(" "),
                _c("span", {
                  class: _vm.classes.text,
                  domProps: { innerHTML: _vm._s("" + _vm.item.label) },
                }),
              ]
            ),
          ]
        },
        {
          classes: _vm.classes,
          isDisabled: _vm.isDisabled,
          id: _vm.id,
          item: _vm.item,
          value: _vm.value,
          items: _vm.items,
          index: _vm.index,
        },
        { name: _vm.name }
      ),
    ],
    2
  )
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$5 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    false,
    undefined,
    undefined,
    undefined
  );

  var RadiogroupRadio_tabs = __vue_component__$5;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$4 = {
    name: 'RadiogroupRadio_tabs',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          input: '',
          text_wrapper: '',
          text: '',
          description: '',
        }
      }
    }
  };

var css_248z$4 = "";
styleInject(css_248z$4);

/* script */
const __vue_script__$4 = script$4;
/* template */
var __vue_render__$2 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "label",
    { class: _vm.classes.container },
    [
      _vm._t(
        "default",
        function () {
          return [
            _c("div", { class: _vm.classes.wrapper }, [
              _c(
                "input",
                _vm._b(
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.el$.model,
                        expression: "el$.model",
                      },
                    ],
                    class: _vm.classes.input,
                    attrs: {
                      type: "radio",
                      name: _vm.name,
                      id: _vm.id,
                      disabled: _vm.isDisabled,
                    },
                    domProps: {
                      value: _vm.value,
                      checked: _vm._q(_vm.el$.model, _vm.value),
                    },
                    on: {
                      change: function ($event) {
                        return _vm.$set(_vm.el$, "model", _vm.value)
                      },
                    },
                  },
                  "input",
                  _vm.attrs,
                  false
                )
              ),
              _vm._v(" "),
              _c("div", { class: _vm.classes.text_wrapper }, [
                _c("div", {
                  class: _vm.classes.text,
                  domProps: { innerHTML: _vm._s(_vm.item.label) },
                }),
                _vm._v(" "),
                _c("div", {
                  class: _vm.classes.description,
                  domProps: { innerHTML: _vm._s(_vm.item.description) },
                }),
              ]),
            ]),
          ]
        },
        {
          classes: _vm.classes,
          isDisabled: _vm.isDisabled,
          id: _vm.id,
          item: _vm.item,
          value: _vm.value,
          items: _vm.items,
          index: _vm.index,
        },
        { name: _vm.name }
      ),
    ],
    2
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$4 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    undefined,
    undefined,
    undefined
  );

  var RadiogroupRadio_blocks = __vue_component__$4;

//
//
//
//
//
//
//
//
//
//
//

  var script$3 = {
    name: 'DatepickerWrapper',
    data() {
      return {
        merge: true,
        defaultClasses: {
          datepicker: '',
          calendarContainer: ''
        }
      }
    }
  };

var css_248z$3 = "";
styleInject(css_248z$3);

/* script */
const __vue_script__$3 = script$3;
/* template */
var __vue_render__$1 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "input",
    _vm._b(
      {
        ref: "input",
        class: _vm.classes.datepicker,
        attrs: { type: "text", id: _vm.id, placeholder: _vm.placeholder },
      },
      "input",
      _vm.attrs,
      false
    )
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$3 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    undefined,
    undefined,
    undefined
  );

  var DatepickerWrapper$1 = __vue_component__$3;

var script$2 = {
    name: 'DatepickerWrapper',
    render: DatepickerWrapper$1.render,
    data: DatepickerWrapper$1.data,
  };

var css_248z$2 = ".flatpickr-calendar {\n  background: transparent;\n  opacity: 0;\n  display: none;\n  text-align: center;\n  visibility: hidden;\n  padding: 0;\n  animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 307.875px;\n  box-sizing: border-box;\n  touch-action: manipulation;\n  box-shadow: 0 3px 13px rgba(0, 0, 0, 0.08);\n  color: var(--vf-color-input);\n}\n\n.flatpickr-calendar.open,\n.flatpickr-calendar.inline {\n  opacity: 1;\n  max-height: 640px;\n  visibility: visible;\n}\n\n.flatpickr-calendar.open {\n  display: inline-block;\n  z-index: 999;\n}\n\n.flatpickr-calendar.animate.open {\n  animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n\n.flatpickr-calendar.rightMost {\n  left: auto;\n  right: 0;\n}\n\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n\n.flatpickr-calendar.static.open {\n  z-index: 999;\n  display: block;\n}\n\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {\n  box-shadow: none !important;\n}\n\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {\n  box-shadow: -2px 0 0 var(--vf-bg-selected), 5px 0 0 var(--vf-bg-selected);\n}\n\n.flatpickr-calendar .hasWeeks .dayContainer,\n.flatpickr-calendar .hasTime .dayContainer {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.flatpickr-calendar .hasWeeks .dayContainer {\n  border-left: 0;\n}\n\n.flatpickr-calendar.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid var(--vf-border-color-input);\n}\n\n.flatpickr-calendar.hasTime .flatpickr-innerContainer {\n  border-bottom: 0;\n}\n\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\n\n.flatpickr-calendar:before,\n.flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: \"\";\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n\n.flatpickr-calendar.rightMost:before,\n.flatpickr-calendar.arrowRight:before,\n.flatpickr-calendar.rightMost:after,\n.flatpickr-calendar.arrowRight:after {\n  left: auto;\n  right: 22px;\n}\n\n.flatpickr-calendar.arrowCenter:before,\n.flatpickr-calendar.arrowCenter:after {\n  left: 50%;\n  right: 50%;\n}\n\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n  box-sizing: border-box;\n}\n\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n  box-sizing: border-box;\n}\n\n.flatpickr-calendar.arrowTop:before,\n.flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\n\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: var(--vf-bg-date-head);\n  box-sizing: border-box;\n}\n\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: var(--vf-bg-date-head);\n  box-sizing: border-box;\n}\n\n.flatpickr-calendar.arrowBottom:before,\n.flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\n\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: var(--vf-bg-date-head);\n}\n\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: var(--vf-bg-date-head);\n}\n\n.flatpickr-calendar:focus {\n  outline: 0;\n}\n\n.flatpickr-wrapper {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n\n.flatpickr-months {\n  display: flex;\n}\n\n.flatpickr-months .flatpickr-month {\n  border-radius: 5px 5px 0 0;\n  background: var(--vf-bg-date-head);\n  color: var(--vf-color-date-head);\n  fill: var(--vf-color-date-head);\n  height: 34px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  overflow: hidden;\n  flex: 1;\n}\n\n.flatpickr-months .flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month {\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  height: 34px;\n  padding: 10px;\n  z-index: 1;\n  color: var(--vf-color-date-head);\n  fill: var(--vf-color-date-head);\n}\n\n.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,\n.flatpickr-months .flatpickr-next-month.flatpickr-disabled {\n  display: none;\n}\n\n.flatpickr-months .flatpickr-prev-month i,\n.flatpickr-months .flatpickr-next-month i {\n  position: relative;\n}\n\n.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {\n  left: 0;\n}\n\n.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-next-month {\n  right: 0;\n}\n\n.flatpickr-months .flatpickr-prev-month:hover,\n.flatpickr-months .flatpickr-next-month:hover {\n  color: var(--vf-color-date-head);\n}\n\n.flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-months .flatpickr-next-month:hover svg {\n  opacity: 1;\n}\n\n.flatpickr-months .flatpickr-prev-month svg,\n.flatpickr-months .flatpickr-next-month svg {\n  width: 14px;\n  height: 14px;\n  opacity: 0.7;\n  display: block;\n}\n\n.flatpickr-months .flatpickr-prev-month svg path,\n.flatpickr-months .flatpickr-next-month svg path {\n  transition: fill 0.1s;\n  fill: inherit;\n}\n\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\n\n.numInputWrapper input,\n.numInputWrapper span {\n  display: inline-block;\n}\n\n.numInputWrapper input {\n  width: 100%;\n}\n\n.numInputWrapper input::-ms-clear {\n  display: none;\n}\n\n.numInputWrapper input::-webkit-outer-spin-button,\n.numInputWrapper input::-webkit-inner-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n}\n\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid var(--vf-border-color-input);\n  box-sizing: border-box;\n}\n\n.numInputWrapper span:hover {\n  background: var(--vf-bg-selected);\n}\n\n.numInputWrapper span:active {\n  background: var(--vf-bg-selected);\n}\n\n.numInputWrapper span:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n}\n\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\n\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid var(--vf-color-input);\n  top: 26%;\n  box-sizing: border-box;\n}\n\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\n\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid var(--vf-color-input);\n  top: 40%;\n  box-sizing: border-box;\n}\n\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\n\n.numInputWrapper span svg path {\n  fill: var(--vf-color-input);\n}\n\n.numInputWrapper:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.numInputWrapper:hover span {\n  opacity: 1;\n}\n\n.flatpickr-current-month {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 7.48px 0 0 0;\n  line-height: 1;\n  height: 34px;\n  display: inline-block;\n  text-align: center;\n  transform: translate3d(0px, 0px, 0px);\n}\n\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\n\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\0 ;\n  display: inline-block;\n}\n\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: var(--vf-color-date-head);\n}\n\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: var(--vf-color-date-head);\n}\n\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: text;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: auto;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\n\n.flatpickr-current-month input.cur-year[disabled],\n.flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: var(--vf-gray-300);\n  background: transparent;\n  pointer-events: none;\n}\n\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  appearance: menulist;\n  background: var(--vf-bg-date-head);\n  border: none;\n  border-radius: 0;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: pointer;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  height: auto;\n  line-height: inherit;\n  margin: -1px 0 0 0;\n  outline: none;\n  padding: 0 0 0 0.5ch;\n  position: relative;\n  vertical-align: initial;\n  -webkit-box-sizing: border-box;\n  -webkit-appearance: menulist;\n  -moz-appearance: menulist;\n  width: auto;\n}\n\n.flatpickr-current-month .flatpickr-monthDropdown-months:focus,\n.flatpickr-current-month .flatpickr-monthDropdown-months:active {\n  outline: none;\n}\n\n.flatpickr-current-month .flatpickr-monthDropdown-months:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {\n  background-color: var(--vf-bg-date-head);\n  outline: none;\n  padding: 0;\n}\n\n.flatpickr-weekdays {\n  background: var(--vf-bg-date-head);\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  height: 28px;\n}\n\n.flatpickr-weekdays .flatpickr-weekdaycontainer {\n  display: flex;\n  flex: 1;\n}\n\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  background: var(--vf-bg-date-head);\n  color: var(--vf-color-date-head);\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  flex: 1;\n  font-weight: bolder;\n}\n\n.dayContainer,\n.flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\n\n.flatpickr-days {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: flex-start;\n  width: 307.875px;\n  background-color: var(--vf-bg-input);\n}\n\n.flatpickr-days:focus {\n  outline: 0;\n}\n\n.dayContainer {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 307.875px;\n  min-width: 307.875px;\n  max-width: 307.875px;\n  box-sizing: border-box;\n  display: inline-block;\n  display: flex;\n  flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  justify-content: space-around;\n  transform: translate3d(0px, 0px, 0px);\n  opacity: 1;\n}\n\n.dayContainer + .dayContainer {\n  box-shadow: -1px 0 0 var(--vf-gray-200);\n}\n\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  box-sizing: border-box;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  flex-basis: 14.2857143%;\n  max-width: 39px;\n  height: 39px;\n  line-height: 38px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  justify-content: center;\n  text-align: center;\n}\n\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: var(--vf-bg-selected);\n  border-color: var(--vf-bg-selected);\n}\n\n.flatpickr-day.today {\n  border-color: var(--vf-bg-selected);\n}\n\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  border-color: var(--vf-bg-selected);\n  background: var(--vf-bg-selected);\n}\n\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: var(--vf-primary);\n  box-shadow: none;\n  color: #fff;\n  border-color: var(--vf-primary);\n}\n\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\n\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\n\n.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: -10px 0 0 var(--vf-primary);\n}\n\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\n\n.flatpickr-day.inRange {\n  border-radius: 0;\n  box-shadow: -5px 0 0 var(--vf-bg-selected), 5px 0 0 var(--vf-bg-selected);\n}\n\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: var(--vf-color-disabled);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover {\n  cursor: not-allowed;\n  color: var(--vf-color-disabled);\n}\n\n.flatpickr-day.week.selected {\n  border-radius: 0;\n  box-shadow: -5px 0 0 var(--vf-primary), 5px 0 0 var(--vf-primary);\n}\n\n.flatpickr-day.hidden {\n  visibility: hidden;\n}\n\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\n\n.flatpickr-weekwrapper {\n  float: left;\n}\n\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 0 12px;\n}\n\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\n\n.flatpickr-weekwrapper span.flatpickr-day,\n.flatpickr-weekwrapper span.flatpickr-day:hover {\n  display: block;\n  width: 100%;\n  max-width: none;\n  color: var(--vf-gray-300);\n  background: transparent;\n  cursor: default;\n  border: none;\n}\n\n.flatpickr-innerContainer {\n  display: block;\n  display: flex;\n  box-sizing: border-box;\n  overflow: hidden;\n  background: var(--vf-bg-input);\n}\n\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  box-sizing: border-box;\n  overflow: hidden;\n  display: flex;\n  background: var(--vf-bg-input);\n  border-radius: 0 0 5px 5px;\n  color: var(--vf-color-input);\n}\n\n.flatpickr-time:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.flatpickr-time .numInputWrapper {\n  flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: var(--vf-color-input);\n  box-sizing: border-box;\n}\n\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: var(--vf-color-input);\n  box-sizing: border-box;\n}\n\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\n\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\n\n.flatpickr-time input {\n  background: transparent;\n  box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  font-size: 14px;\n  position: relative;\n  box-sizing: border-box;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n  color: var(--vf-color-input);\n  background: var(--vf-bg-input);\n}\n\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\n\n.flatpickr-time input.flatpickr-minute,\n.flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\n\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\n\n.flatpickr-time .flatpickr-time-separator,\n.flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  float: left;\n  line-height: inherit;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  align-self: center;\n  background: var(--vf-bg-input);\n}\n\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n\n.flatpickr-time input:hover,\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time input:focus,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: var(--vf-bg-selected);\n}\n\n.flatpickr-input[readonly] {\n  cursor: pointer;\n}\n\n@keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n\nspan.flatpickr-day.selected {\n  font-weight: bold;\n}";
styleInject(css_248z$2);

/* script */
const __vue_script__$2 = script$2;
/* template */

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
    {},
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  );

  var DatepickerWrapper = __vue_component__$2;

/*
Trix 2.1.13
Copyright © 2025 37signals, LLC
 */
var t="2.1.13";const e="[data-trix-attachment]",i={preview:{presentation:"gallery",caption:{name:!0,size:!0}},file:{caption:{size:!0}}},n={default:{tagName:"div",parse:!1},quote:{tagName:"blockquote",nestable:!0},heading1:{tagName:"h1",terminal:!0,breakOnReturn:!0,group:!1},code:{tagName:"pre",terminal:!0,htmlAttributes:["language"],text:{plaintext:!0}},bulletList:{tagName:"ul",parse:!1},bullet:{tagName:"li",listAttribute:"bulletList",group:!1,nestable:!0,test(t){return r(t.parentNode)===n[this.listAttribute].tagName}},numberList:{tagName:"ol",parse:!1},number:{tagName:"li",listAttribute:"numberList",group:!1,nestable:!0,test(t){return r(t.parentNode)===n[this.listAttribute].tagName}},attachmentGallery:{tagName:"div",exclusive:!0,terminal:!0,parse:!1,group:!1}},r=t=>{var e;return null==t||null===(e=t.tagName)||void 0===e?void 0:e.toLowerCase()},o=navigator.userAgent.match(/android\s([0-9]+.*Chrome)/i),s=o&&parseInt(o[1]);var a={composesExistingText:/Android.*Chrome/.test(navigator.userAgent),recentAndroid:s&&s>12,samsungAndroid:s&&navigator.userAgent.match(/Android.*SM-/),forcesObjectResizing:/Trident.*rv:11/.test(navigator.userAgent),supportsInputEvents:"undefined"!=typeof InputEvent&&["data","getTargetRanges","inputType"].every((t=>t in InputEvent.prototype))},l={ADD_ATTR:["language"],SAFE_FOR_XML:!1,RETURN_DOM:!0},c={attachFiles:"Attach Files",bold:"Bold",bullets:"Bullets",byte:"Byte",bytes:"Bytes",captionPlaceholder:"Add a caption…",code:"Code",heading1:"Heading",indent:"Increase Level",italic:"Italic",link:"Link",numbers:"Numbers",outdent:"Decrease Level",quote:"Quote",redo:"Redo",remove:"Remove",strike:"Strikethrough",undo:"Undo",unlink:"Unlink",url:"URL",urlPlaceholder:"Enter a URL…",GB:"GB",KB:"KB",MB:"MB",PB:"PB",TB:"TB"};const u=[c.bytes,c.KB,c.MB,c.GB,c.TB,c.PB];var h={prefix:"IEC",precision:2,formatter(t){switch(t){case 0:return "0 ".concat(c.bytes);case 1:return "1 ".concat(c.byte);default:let e;"SI"===this.prefix?e=1e3:"IEC"===this.prefix&&(e=1024);const i=Math.floor(Math.log(t)/Math.log(e)),n=(t/Math.pow(e,i)).toFixed(this.precision).replace(/0*$/,"").replace(/\.$/,"");return "".concat(n," ").concat(u[i])}}};const d="\ufeff",g=" ",m=function(t){for(const e in t){const i=t[e];this[e]=i;}return this},p=document.documentElement,f=p.matches,b=function(t){let{onElement:e,matchingSelector:i,withCallback:n,inPhase:r,preventDefault:o,times:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const a=e||p,l=i,c="capturing"===r,u=function(t){null!=s&&0==--s&&u.destroy();const e=y(t.target,{matchingSelector:l});null!=e&&(null==n||n.call(e,t,e),o&&t.preventDefault());};return u.destroy=()=>a.removeEventListener(t,u,c),a.addEventListener(t,u,c),u},v=function(t){let{onElement:e,bubbles:i,cancelable:n,attributes:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=null!=e?e:p;i=!1!==i,n=!1!==n;const s=document.createEvent("Events");return s.initEvent(t,i,n),null!=r&&m.call(s,r),o.dispatchEvent(s)},A=function(t,e){if(1===(null==t?void 0:t.nodeType))return f.call(t,e)},y=function(t){let{matchingSelector:e,untilNode:i}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;if(null!=t){if(null==e)return t;if(t.closest&&null==i)return t.closest(e);for(;t&&t!==i;){if(A(t,e))return t;t=t.parentNode;}}},x=t=>document.activeElement!==t&&C(t,document.activeElement),C=function(t,e){if(t&&e)for(;e;){if(e===t)return !0;e=e.parentNode;}},E=function(t){var e;if(null===(e=t)||void 0===e||!e.parentNode)return;let i=0;for(t=t.previousSibling;t;)i++,t=t.previousSibling;return i},S=t=>{var e;return null==t||null===(e=t.parentNode)||void 0===e?void 0:e.removeChild(t)},R=function(t){let{onlyNodesOfType:e,usingFilter:i,expandEntityReferences:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=(()=>{switch(e){case"element":return NodeFilter.SHOW_ELEMENT;case"text":return NodeFilter.SHOW_TEXT;case"comment":return NodeFilter.SHOW_COMMENT;default:return NodeFilter.SHOW_ALL}})();return document.createTreeWalker(t,r,null!=i?i:null,!0===n)},k=t=>{var e;return null==t||null===(e=t.tagName)||void 0===e?void 0:e.toLowerCase()},T=function(t){let e,i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"object"==typeof t?(n=t,t=n.tagName):n={attributes:n};const r=document.createElement(t);if(null!=n.editable&&(null==n.attributes&&(n.attributes={}),n.attributes.contenteditable=n.editable),n.attributes)for(e in n.attributes)i=n.attributes[e],r.setAttribute(e,i);if(n.style)for(e in n.style)i=n.style[e],r.style[e]=i;if(n.data)for(e in n.data)i=n.data[e],r.dataset[e]=i;return n.className&&n.className.split(" ").forEach((t=>{r.classList.add(t);})),n.textContent&&(r.textContent=n.textContent),n.childNodes&&[].concat(n.childNodes).forEach((t=>{r.appendChild(t);})),r};let w;const L=function(){if(null!=w)return w;w=[];for(const t in n){const e=n[t];e.tagName&&w.push(e.tagName);}return w},D=t=>I(null==t?void 0:t.firstChild),N=function(t){let{strict:e}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{strict:!0};return e?I(t):I(t)||!I(t.firstChild)&&function(t){return L().includes(k(t))&&!L().includes(k(t.firstChild))}(t)},I=t=>O(t)&&"block"===(null==t?void 0:t.data),O=t=>(null==t?void 0:t.nodeType)===Node.COMMENT_NODE,F=function(t){let{name:e}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t)return B(t)?t.data===d?!e||t.parentNode.dataset.trixCursorTarget===e:void 0:F(t.firstChild)},P=t=>A(t,e),M=t=>B(t)&&""===(null==t?void 0:t.data),B=t=>(null==t?void 0:t.nodeType)===Node.TEXT_NODE,_={level2Enabled:!0,getLevel(){return this.level2Enabled&&a.supportsInputEvents?2:0},pickFiles(t){const e=T("input",{type:"file",multiple:!0,hidden:!0,id:this.fileInputId});e.addEventListener("change",(()=>{t(e.files),S(e);})),S(document.getElementById(this.fileInputId)),document.body.appendChild(e),e.click();}};var j={removeBlankTableCells:!1,tableCellSeparator:" | ",tableRowSeparator:"\n"},W={bold:{tagName:"strong",inheritable:!0,parser(t){const e=window.getComputedStyle(t);return "bold"===e.fontWeight||e.fontWeight>=600}},italic:{tagName:"em",inheritable:!0,parser:t=>"italic"===window.getComputedStyle(t).fontStyle},href:{groupTagName:"a",parser(t){const i="a:not(".concat(e,")"),n=t.closest(i);if(n)return n.getAttribute("href")}},strike:{tagName:"del",inheritable:!0},frozen:{style:{backgroundColor:"highlight"}}},U={getDefaultHTML:()=>'<div class="trix-button-row">\n      <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="'.concat(c.bold,'" tabindex="-1">').concat(c.bold,'</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="').concat(c.italic,'" tabindex="-1">').concat(c.italic,'</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="').concat(c.strike,'" tabindex="-1">').concat(c.strike,'</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="').concat(c.link,'" tabindex="-1">').concat(c.link,'</button>\n      </span>\n\n      <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="').concat(c.heading1,'" tabindex="-1">').concat(c.heading1,'</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="').concat(c.quote,'" tabindex="-1">').concat(c.quote,'</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="').concat(c.code,'" tabindex="-1">').concat(c.code,'</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="').concat(c.bullets,'" tabindex="-1">').concat(c.bullets,'</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="').concat(c.numbers,'" tabindex="-1">').concat(c.numbers,'</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="').concat(c.outdent,'" tabindex="-1">').concat(c.outdent,'</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="').concat(c.indent,'" tabindex="-1">').concat(c.indent,'</button>\n      </span>\n\n      <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="').concat(c.attachFiles,'" tabindex="-1">').concat(c.attachFiles,'</button>\n      </span>\n\n      <span class="trix-button-group-spacer"></span>\n\n      <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="').concat(c.undo,'" tabindex="-1">').concat(c.undo,'</button>\n        <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="').concat(c.redo,'" tabindex="-1">').concat(c.redo,'</button>\n      </span>\n    </div>\n\n    <div class="trix-dialogs" data-trix-dialogs>\n      <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">\n        <div class="trix-dialog__link-fields">\n          <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="').concat(c.urlPlaceholder,'" aria-label="').concat(c.url,'" data-trix-validate-href required data-trix-input>\n          <div class="trix-button-group">\n            <input type="button" class="trix-button trix-button--dialog" value="').concat(c.link,'" data-trix-method="setAttribute">\n            <input type="button" class="trix-button trix-button--dialog" value="').concat(c.unlink,'" data-trix-method="removeAttribute">\n          </div>\n        </div>\n      </div>\n    </div>')};const V={interval:5e3};var z=Object.freeze({__proto__:null,attachments:i,blockAttributes:n,browser:a,css:{attachment:"attachment",attachmentCaption:"attachment__caption",attachmentCaptionEditor:"attachment__caption-editor",attachmentMetadata:"attachment__metadata",attachmentMetadataContainer:"attachment__metadata-container",attachmentName:"attachment__name",attachmentProgress:"attachment__progress",attachmentSize:"attachment__size",attachmentToolbar:"attachment__toolbar",attachmentGallery:"attachment-gallery"},dompurify:l,fileSize:h,input:_,keyNames:{8:"backspace",9:"tab",13:"return",27:"escape",37:"left",39:"right",46:"delete",68:"d",72:"h",79:"o"},lang:c,parser:j,textAttributes:W,toolbar:U,undo:V});class q{static proxyMethod(t){const{name:e,toMethod:i,toProperty:n,optional:r}=H(t);this.prototype[e]=function(){let t,o;var s,a;i?o=r?null===(s=this[i])||void 0===s?void 0:s.call(this):this[i]():n&&(o=this[n]);return r?(t=null===(a=o)||void 0===a?void 0:a[e],t?J.call(t,o,arguments):void 0):(t=o[e],J.call(t,o,arguments))};}}const H=function(t){const e=t.match(K);if(!e)throw new Error("can't parse @proxyMethod expression: ".concat(t));const i={name:e[4]};return null!=e[2]?i.toMethod=e[1]:i.toProperty=e[1],null!=e[3]&&(i.optional=!0),i},{apply:J}=Function.prototype,K=new RegExp("^(.+?)(\\(\\))?(\\?)?\\.(.+?)$");var G,Y,$;class X extends q{static box(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t instanceof this?t:this.fromUCS2String(null==t?void 0:t.toString())}static fromUCS2String(t){return new this(t,et(t))}static fromCodepoints(t){return new this(it(t),t)}constructor(t,e){super(...arguments),this.ucs2String=t,this.codepoints=e,this.length=this.codepoints.length,this.ucs2Length=this.ucs2String.length;}offsetToUCS2Offset(t){return it(this.codepoints.slice(0,Math.max(0,t))).length}offsetFromUCS2Offset(t){return et(this.ucs2String.slice(0,Math.max(0,t))).length}slice(){return this.constructor.fromCodepoints(this.codepoints.slice(...arguments))}charAt(t){return this.slice(t,t+1)}isEqualTo(t){return this.constructor.box(t).ucs2String===this.ucs2String}toJSON(){return this.ucs2String}getCacheKey(){return this.ucs2String}toString(){return this.ucs2String}}const Z=1===(null===(G=Array.from)||void 0===G?void 0:G.call(Array,"👼").length),Q=null!=(null===(Y=" ".codePointAt)||void 0===Y?void 0:Y.call(" ",0)),tt=" 👼"===(null===($=String.fromCodePoint)||void 0===$?void 0:$.call(String,32,128124));let et,it;et=Z&&Q?t=>Array.from(t).map((t=>t.codePointAt(0))):function(t){const e=[];let i=0;const{length:n}=t;for(;i<n;){let r=t.charCodeAt(i++);if(55296<=r&&r<=56319&&i<n){const e=t.charCodeAt(i++);56320==(64512&e)?r=((1023&r)<<10)+(1023&e)+65536:i--;}e.push(r);}return e},it=tt?t=>String.fromCodePoint(...Array.from(t||[])):function(t){return (()=>{const e=[];return Array.from(t).forEach((t=>{let i="";t>65535&&(t-=65536,i+=String.fromCharCode(t>>>10&1023|55296),t=56320|1023&t),e.push(i+String.fromCharCode(t));})),e})().join("")};let nt=0;class rt extends q{static fromJSONString(t){return this.fromJSON(JSON.parse(t))}constructor(){super(...arguments),this.id=++nt;}hasSameConstructorAs(t){return this.constructor===(null==t?void 0:t.constructor)}isEqualTo(t){return this===t}inspect(){const t=[],e=this.contentsForInspection()||{};for(const i in e){const n=e[i];t.push("".concat(i,"=").concat(n));}return "#<".concat(this.constructor.name,":").concat(this.id).concat(t.length?" ".concat(t.join(", ")):"",">")}contentsForInspection(){}toJSONString(){return JSON.stringify(this)}toUTF16String(){return X.box(this)}getCacheKey(){return this.id.toString()}}const ot=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(t.length!==e.length)return !1;for(let i=0;i<t.length;i++){if(t[i]!==e[i])return !1}return !0},st=function(t){const e=t.slice(0);for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return e.splice(...n),e},at=/[\u05BE\u05C0\u05C3\u05D0-\u05EA\u05F0-\u05F4\u061B\u061F\u0621-\u063A\u0640-\u064A\u066D\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D5\u06E5\u06E6\u200F\u202B\u202E\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC]/,lt=function(){const t=T("input",{dir:"auto",name:"x",dirName:"x.dir"}),e=T("textarea",{dir:"auto",name:"y",dirName:"y.dir"}),i=T("form");i.appendChild(t),i.appendChild(e);const n=function(){try{return new FormData(i).has(e.dirName)}catch(t){return !1}}(),r=function(){try{return t.matches(":dir(ltr),:dir(rtl)")}catch(t){return !1}}();return n?function(t){return e.value=t,new FormData(i).get(e.dirName)}:r?function(e){return t.value=e,t.matches(":dir(rtl)")?"rtl":"ltr"}:function(t){const e=t.trim().charAt(0);return at.test(e)?"rtl":"ltr"}}();let ct=null,ut=null,ht=null,dt=null;const gt=()=>(ct||(ct=bt().concat(pt())),ct),mt=t=>n[t],pt=()=>(ut||(ut=Object.keys(n)),ut),ft=t=>W[t],bt=()=>(ht||(ht=Object.keys(W)),ht),vt=function(t,e){At(t).textContent=e.replace(/%t/g,t);},At=function(t){const e=document.createElement("style");e.setAttribute("type","text/css"),e.setAttribute("data-tag-name",t.toLowerCase());const i=yt();return i&&e.setAttribute("nonce",i),document.head.insertBefore(e,document.head.firstChild),e},yt=function(){const t=xt("trix-csp-nonce")||xt("csp-nonce");if(t){const{nonce:e,content:i}=t;return ""==e?i:e}},xt=t=>document.head.querySelector("meta[name=".concat(t,"]")),Ct={"application/x-trix-feature-detection":"test"},Et=function(t){const e=t.getData("text/plain"),i=t.getData("text/html");if(!e||!i)return null==e?void 0:e.length;{const{body:t}=(new DOMParser).parseFromString(i,"text/html");if(t.textContent===e)return !t.querySelector("*")}},St=/Mac|^iP/.test(navigator.platform)?t=>t.metaKey:t=>t.ctrlKey;const Rt=t=>setTimeout(t,1),kt=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e={};for(const i in t){const n=t[i];e[i]=n;}return e},Tt=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Object.keys(t).length!==Object.keys(e).length)return !1;for(const i in t){if(t[i]!==e[i])return !1}return !0},wt=function(t){if(null!=t)return Array.isArray(t)||(t=[t,t]),[Nt(t[0]),Nt(null!=t[1]?t[1]:t[0])]},Lt=function(t){if(null==t)return;const[e,i]=wt(t);return It(e,i)},Dt=function(t,e){if(null==t||null==e)return;const[i,n]=wt(t),[r,o]=wt(e);return It(i,r)&&It(n,o)},Nt=function(t){return "number"==typeof t?t:kt(t)},It=function(t,e){return "number"==typeof t?t===e:Tt(t,e)};class Ot extends q{constructor(){super(...arguments),this.update=this.update.bind(this),this.selectionManagers=[];}start(){this.started||(this.started=!0,document.addEventListener("selectionchange",this.update,!0));}stop(){if(this.started)return this.started=!1,document.removeEventListener("selectionchange",this.update,!0)}registerSelectionManager(t){if(!this.selectionManagers.includes(t))return this.selectionManagers.push(t),this.start()}unregisterSelectionManager(t){if(this.selectionManagers=this.selectionManagers.filter((e=>e!==t)),0===this.selectionManagers.length)return this.stop()}notifySelectionManagersOfSelectionChange(){return this.selectionManagers.map((t=>t.selectionDidChange()))}update(){this.notifySelectionManagersOfSelectionChange();}reset(){this.update();}}const Ft=new Ot,Pt=function(){const t=window.getSelection();if(t.rangeCount>0)return t},Mt=function(){var t;const e=null===(t=Pt())||void 0===t?void 0:t.getRangeAt(0);if(e&&!_t(e))return e},Bt=function(t){const e=window.getSelection();return e.removeAllRanges(),e.addRange(t),Ft.update()},_t=t=>jt(t.startContainer)||jt(t.endContainer),jt=t=>!Object.getPrototypeOf(t),Wt=t=>t.replace(new RegExp("".concat(d),"g"),"").replace(new RegExp("".concat(g),"g")," "),Ut=new RegExp("[^\\S".concat(g,"]")),Vt=t=>t.replace(new RegExp("".concat(Ut.source),"g")," ").replace(/\ {2,}/g," "),zt=function(t,e){if(t.isEqualTo(e))return ["",""];const i=qt(t,e),{length:n}=i.utf16String;let r;if(n){const{offset:o}=i,s=t.codepoints.slice(0,o).concat(t.codepoints.slice(o+n));r=qt(e,X.fromCodepoints(s));}else r=qt(e,t);return [i.utf16String.toString(),r.utf16String.toString()]},qt=function(t,e){let i=0,n=t.length,r=e.length;for(;i<n&&t.charAt(i).isEqualTo(e.charAt(i));)i++;for(;n>i+1&&t.charAt(n-1).isEqualTo(e.charAt(r-1));)n--,r--;return {utf16String:t.slice(i,n),offset:i}};class Ht extends rt{static fromCommonAttributesOfObjects(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!t.length)return new this;let e=Yt(t[0]),i=e.getKeys();return t.slice(1).forEach((t=>{i=e.getKeysCommonToHash(Yt(t)),e=e.slice(i);})),e}static box(t){return Yt(t)}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(...arguments),this.values=Gt(t);}add(t,e){return this.merge(Jt(t,e))}remove(t){return new Ht(Gt(this.values,t))}get(t){return this.values[t]}has(t){return t in this.values}merge(t){return new Ht(Kt(this.values,$t(t)))}slice(t){const e={};return Array.from(t).forEach((t=>{this.has(t)&&(e[t]=this.values[t]);})),new Ht(e)}getKeys(){return Object.keys(this.values)}getKeysCommonToHash(t){return t=Yt(t),this.getKeys().filter((e=>this.values[e]===t.values[e]))}isEqualTo(t){return ot(this.toArray(),Yt(t).toArray())}isEmpty(){return 0===this.getKeys().length}toArray(){if(!this.array){const t=[];for(const e in this.values){const i=this.values[e];t.push(t.push(e,i));}this.array=t.slice(0);}return this.array}toObject(){return Gt(this.values)}toJSON(){return this.toObject()}contentsForInspection(){return {values:JSON.stringify(this.values)}}}const Jt=function(t,e){const i={};return i[t]=e,i},Kt=function(t,e){const i=Gt(t);for(const t in e){const n=e[t];i[t]=n;}return i},Gt=function(t,e){const i={};return Object.keys(t).sort().forEach((n=>{n!==e&&(i[n]=t[n]);})),i},Yt=function(t){return t instanceof Ht?t:new Ht(t)},$t=function(t){return t instanceof Ht?t.values:t};class Xt{static groupObjects(){let t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],{depth:i,asTree:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n&&null==i&&(i=0);const r=[];return Array.from(e).forEach((e=>{var o;if(t){var s,a,l;if(null!==(s=e.canBeGrouped)&&void 0!==s&&s.call(e,i)&&null!==(a=(l=t[t.length-1]).canBeGroupedWith)&&void 0!==a&&a.call(l,e,i))return void t.push(e);r.push(new this(t,{depth:i,asTree:n})),t=null;}null!==(o=e.canBeGrouped)&&void 0!==o&&o.call(e,i)?t=[e]:r.push(e);})),t&&r.push(new this(t,{depth:i,asTree:n})),r}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],{depth:e,asTree:i}=arguments.length>1?arguments[1]:void 0;this.objects=t,i&&(this.depth=e,this.objects=this.constructor.groupObjects(this.objects,{asTree:i,depth:this.depth+1}));}getObjects(){return this.objects}getDepth(){return this.depth}getCacheKey(){const t=["objectGroup"];return Array.from(this.getObjects()).forEach((e=>{t.push(e.getCacheKey());})),t.join("/")}}class Zt extends q{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];super(...arguments),this.objects={},Array.from(t).forEach((t=>{const e=JSON.stringify(t);null==this.objects[e]&&(this.objects[e]=t);}));}find(t){const e=JSON.stringify(t);return this.objects[e]}}class Qt{constructor(t){this.reset(t);}add(t){const e=te(t);this.elements[e]=t;}remove(t){const e=te(t),i=this.elements[e];if(i)return delete this.elements[e],i}reset(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return this.elements={},Array.from(t).forEach((t=>{this.add(t);})),t}}const te=t=>t.dataset.trixStoreKey;class ee extends q{isPerforming(){return !0===this.performing}hasPerformed(){return !0===this.performed}hasSucceeded(){return this.performed&&this.succeeded}hasFailed(){return this.performed&&!this.succeeded}getPromise(){return this.promise||(this.promise=new Promise(((t,e)=>(this.performing=!0,this.perform(((i,n)=>{this.succeeded=i,this.performing=!1,this.performed=!0,this.succeeded?t(n):e(n);})))))),this.promise}perform(t){return t(!1)}release(){var t,e;null===(t=this.promise)||void 0===t||null===(e=t.cancel)||void 0===e||e.call(t),this.promise=null,this.performing=null,this.performed=null,this.succeeded=null;}}ee.proxyMethod("getPromise().then"),ee.proxyMethod("getPromise().catch");class ie extends q{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(...arguments),this.object=t,this.options=e,this.childViews=[],this.rootView=this;}getNodes(){return this.nodes||(this.nodes=this.createNodes()),this.nodes.map((t=>t.cloneNode(!0)))}invalidate(){var t;return this.nodes=null,this.childViews=[],null===(t=this.parentView)||void 0===t?void 0:t.invalidate()}invalidateViewForObject(t){var e;return null===(e=this.findViewForObject(t))||void 0===e?void 0:e.invalidate()}findOrCreateCachedChildView(t,e,i){let n=this.getCachedViewForObject(e);return n?this.recordChildView(n):(n=this.createChildView(...arguments),this.cacheViewForObject(n,e)),n}createChildView(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e instanceof Xt&&(i.viewClass=t,t=ne);const n=new t(e,i);return this.recordChildView(n)}recordChildView(t){return t.parentView=this,t.rootView=this.rootView,this.childViews.push(t),t}getAllChildViews(){let t=[];return this.childViews.forEach((e=>{t.push(e),t=t.concat(e.getAllChildViews());})),t}findElement(){return this.findElementForObject(this.object)}findElementForObject(t){const e=null==t?void 0:t.id;if(e)return this.rootView.element.querySelector("[data-trix-id='".concat(e,"']"))}findViewForObject(t){for(const e of this.getAllChildViews())if(e.object===t)return e}getViewCache(){return this.rootView!==this?this.rootView.getViewCache():this.isViewCachingEnabled()?(this.viewCache||(this.viewCache={}),this.viewCache):void 0}isViewCachingEnabled(){return !1!==this.shouldCacheViews}enableViewCaching(){this.shouldCacheViews=!0;}disableViewCaching(){this.shouldCacheViews=!1;}getCachedViewForObject(t){var e;return null===(e=this.getViewCache())||void 0===e?void 0:e[t.getCacheKey()]}cacheViewForObject(t,e){const i=this.getViewCache();i&&(i[e.getCacheKey()]=t);}garbageCollectCachedViews(){const t=this.getViewCache();if(t){const e=this.getAllChildViews().concat(this).map((t=>t.object.getCacheKey()));for(const i in t)e.includes(i)||delete t[i];}}}class ne extends ie{constructor(){super(...arguments),this.objectGroup=this.object,this.viewClass=this.options.viewClass,delete this.options.viewClass;}getChildViews(){return this.childViews.length||Array.from(this.objectGroup.getObjects()).forEach((t=>{this.findOrCreateCachedChildView(this.viewClass,t,this.options);})),this.childViews}createNodes(){const t=this.createContainerElement();return this.getChildViews().forEach((e=>{Array.from(e.getNodes()).forEach((e=>{t.appendChild(e);}));})),[t]}createContainerElement(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.objectGroup.getDepth();return this.getChildViews()[0].createContainerElement(t)}}
/*! @license DOMPurify 3.2.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.3/LICENSE */const{entries:re,setPrototypeOf:oe,isFrozen:se,getPrototypeOf:ae,getOwnPropertyDescriptor:le}=Object;let{freeze:ce,seal:ue,create:he}=Object,{apply:de,construct:ge}="undefined"!=typeof Reflect&&Reflect;ce||(ce=function(t){return t}),ue||(ue=function(t){return t}),de||(de=function(t,e,i){return t.apply(e,i)}),ge||(ge=function(t,e){return new t(...e)});const me=Te(Array.prototype.forEach),pe=Te(Array.prototype.pop),fe=Te(Array.prototype.push),be=Te(String.prototype.toLowerCase),ve=Te(String.prototype.toString),Ae=Te(String.prototype.match),ye=Te(String.prototype.replace),xe=Te(String.prototype.indexOf),Ce=Te(String.prototype.trim),Ee=Te(Object.prototype.hasOwnProperty),Se=Te(RegExp.prototype.test),Re=(ke=TypeError,function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return ge(ke,e)});var ke;function Te(t){return function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return de(t,e,n)}}function we(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:be;oe&&oe(t,null);let n=e.length;for(;n--;){let r=e[n];if("string"==typeof r){const t=i(r);t!==r&&(se(e)||(e[n]=t),r=t);}t[r]=!0;}return t}function Le(t){for(let e=0;e<t.length;e++){Ee(t,e)||(t[e]=null);}return t}function De(t){const e=he(null);for(const[i,n]of re(t)){Ee(t,i)&&(Array.isArray(n)?e[i]=Le(n):n&&"object"==typeof n&&n.constructor===Object?e[i]=De(n):e[i]=n);}return e}function Ne(t,e){for(;null!==t;){const i=le(t,e);if(i){if(i.get)return Te(i.get);if("function"==typeof i.value)return Te(i.value)}t=ae(t);}return function(){return null}}const Ie=ce(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Oe=ce(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Fe=ce(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Pe=ce(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Me=ce(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Be=ce(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),_e=ce(["#text"]),je=ce(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),We=ce(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ue=ce(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ve=ce(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),ze=ue(/\{\{[\w\W]*|[\w\W]*\}\}/gm),qe=ue(/<%[\w\W]*|[\w\W]*%>/gm),He=ue(/\$\{[\w\W]*}/gm),Je=ue(/^data-[\-\w.\u00B7-\uFFFF]+$/),Ke=ue(/^aria-[\-\w]+$/),Ge=ue(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ye=ue(/^(?:\w+script|data):/i),$e=ue(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Xe=ue(/^html$/i),Ze=ue(/^[a-z][.\w]*(-[.\w]+)+$/i);var Qe=Object.freeze({__proto__:null,ARIA_ATTR:Ke,ATTR_WHITESPACE:$e,CUSTOM_ELEMENT:Ze,DATA_ATTR:Je,DOCTYPE_NAME:Xe,ERB_EXPR:qe,IS_ALLOWED_URI:Ge,IS_SCRIPT_OR_DATA:Ye,MUSTACHE_EXPR:ze,TMPLIT_EXPR:He});const ti=1,ei=3,ii=7,ni=8,ri=9,oi=function(){return "undefined"==typeof window?null:window};var si=function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oi();const i=e=>t(e);if(i.version="3.2.3",i.removed=[],!e||!e.document||e.document.nodeType!==ri)return i.isSupported=!1,i;let{document:n}=e;const r=n,o=r.currentScript,{DocumentFragment:s,HTMLTemplateElement:a,Node:l,Element:c,NodeFilter:u,NamedNodeMap:h=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:d,DOMParser:g,trustedTypes:m}=e,p=c.prototype,f=Ne(p,"cloneNode"),b=Ne(p,"remove"),v=Ne(p,"nextSibling"),A=Ne(p,"childNodes"),y=Ne(p,"parentNode");if("function"==typeof a){const t=n.createElement("template");t.content&&t.content.ownerDocument&&(n=t.content.ownerDocument);}let x,C="";const{implementation:E,createNodeIterator:S,createDocumentFragment:R,getElementsByTagName:k}=n,{importNode:T}=r;let w={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};i.isSupported="function"==typeof re&&"function"==typeof y&&E&&void 0!==E.createHTMLDocument;const{MUSTACHE_EXPR:L,ERB_EXPR:D,TMPLIT_EXPR:N,DATA_ATTR:I,ARIA_ATTR:O,IS_SCRIPT_OR_DATA:F,ATTR_WHITESPACE:P,CUSTOM_ELEMENT:M}=Qe;let{IS_ALLOWED_URI:B}=Qe,_=null;const j=we({},[...Ie,...Oe,...Fe,...Me,..._e]);let W=null;const U=we({},[...je,...We,...Ue,...Ve]);let V=Object.seal(he(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),z=null,q=null,H=!0,J=!0,K=!1,G=!0,Y=!1,$=!0,X=!1,Z=!1,Q=!1,tt=!1,et=!1,it=!1,nt=!0,rt=!1,ot=!0,st=!1,at={},lt=null;const ct=we({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ut=null;const ht=we({},["audio","video","img","source","image","track"]);let dt=null;const gt=we({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),mt="http://www.w3.org/1998/Math/MathML",pt="http://www.w3.org/2000/svg",ft="http://www.w3.org/1999/xhtml";let bt=ft,vt=!1,At=null;const yt=we({},[mt,pt,ft],ve);let xt=we({},["mi","mo","mn","ms","mtext"]),Ct=we({},["annotation-xml"]);const Et=we({},["title","style","font","a","script"]);let St=null;const Rt=["application/xhtml+xml","text/html"];let kt=null,Tt=null;const wt=n.createElement("form"),Lt=function(t){return t instanceof RegExp||t instanceof Function},Dt=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Tt||Tt!==t){if(t&&"object"==typeof t||(t={}),t=De(t),St=-1===Rt.indexOf(t.PARSER_MEDIA_TYPE)?"text/html":t.PARSER_MEDIA_TYPE,kt="application/xhtml+xml"===St?ve:be,_=Ee(t,"ALLOWED_TAGS")?we({},t.ALLOWED_TAGS,kt):j,W=Ee(t,"ALLOWED_ATTR")?we({},t.ALLOWED_ATTR,kt):U,At=Ee(t,"ALLOWED_NAMESPACES")?we({},t.ALLOWED_NAMESPACES,ve):yt,dt=Ee(t,"ADD_URI_SAFE_ATTR")?we(De(gt),t.ADD_URI_SAFE_ATTR,kt):gt,ut=Ee(t,"ADD_DATA_URI_TAGS")?we(De(ht),t.ADD_DATA_URI_TAGS,kt):ht,lt=Ee(t,"FORBID_CONTENTS")?we({},t.FORBID_CONTENTS,kt):ct,z=Ee(t,"FORBID_TAGS")?we({},t.FORBID_TAGS,kt):{},q=Ee(t,"FORBID_ATTR")?we({},t.FORBID_ATTR,kt):{},at=!!Ee(t,"USE_PROFILES")&&t.USE_PROFILES,H=!1!==t.ALLOW_ARIA_ATTR,J=!1!==t.ALLOW_DATA_ATTR,K=t.ALLOW_UNKNOWN_PROTOCOLS||!1,G=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Y=t.SAFE_FOR_TEMPLATES||!1,$=!1!==t.SAFE_FOR_XML,X=t.WHOLE_DOCUMENT||!1,tt=t.RETURN_DOM||!1,et=t.RETURN_DOM_FRAGMENT||!1,it=t.RETURN_TRUSTED_TYPE||!1,Q=t.FORCE_BODY||!1,nt=!1!==t.SANITIZE_DOM,rt=t.SANITIZE_NAMED_PROPS||!1,ot=!1!==t.KEEP_CONTENT,st=t.IN_PLACE||!1,B=t.ALLOWED_URI_REGEXP||Ge,bt=t.NAMESPACE||ft,xt=t.MATHML_TEXT_INTEGRATION_POINTS||xt,Ct=t.HTML_INTEGRATION_POINTS||Ct,V=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&Lt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(V.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&Lt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(V.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(V.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Y&&(J=!1),et&&(tt=!0),at&&(_=we({},_e),W=[],!0===at.html&&(we(_,Ie),we(W,je)),!0===at.svg&&(we(_,Oe),we(W,We),we(W,Ve)),!0===at.svgFilters&&(we(_,Fe),we(W,We),we(W,Ve)),!0===at.mathMl&&(we(_,Me),we(W,Ue),we(W,Ve))),t.ADD_TAGS&&(_===j&&(_=De(_)),we(_,t.ADD_TAGS,kt)),t.ADD_ATTR&&(W===U&&(W=De(W)),we(W,t.ADD_ATTR,kt)),t.ADD_URI_SAFE_ATTR&&we(dt,t.ADD_URI_SAFE_ATTR,kt),t.FORBID_CONTENTS&&(lt===ct&&(lt=De(lt)),we(lt,t.FORBID_CONTENTS,kt)),ot&&(_["#text"]=!0),X&&we(_,["html","head","body"]),_.table&&(we(_,["tbody"]),delete z.tbody),t.TRUSTED_TYPES_POLICY){if("function"!=typeof t.TRUSTED_TYPES_POLICY.createHTML)throw Re('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof t.TRUSTED_TYPES_POLICY.createScriptURL)throw Re('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');x=t.TRUSTED_TYPES_POLICY,C=x.createHTML("");}else void 0===x&&(x=function(t,e){if("object"!=typeof t||"function"!=typeof t.createPolicy)return null;let i=null;const n="data-tt-policy-suffix";e&&e.hasAttribute(n)&&(i=e.getAttribute(n));const r="dompurify"+(i?"#"+i:"");try{return t.createPolicy(r,{createHTML:t=>t,createScriptURL:t=>t})}catch(t){return console.warn("TrustedTypes policy "+r+" could not be created."),null}}(m,o)),null!==x&&"string"==typeof C&&(C=x.createHTML(""));ce&&ce(t),Tt=t;}},Nt=we({},[...Oe,...Fe,...Pe]),It=we({},[...Me,...Be]),Ot=function(t){fe(i.removed,{element:t});try{y(t).removeChild(t);}catch(e){b(t);}},Ft=function(t,e){try{fe(i.removed,{attribute:e.getAttributeNode(t),from:e});}catch(t){fe(i.removed,{attribute:null,from:e});}if(e.removeAttribute(t),"is"===t)if(tt||et)try{Ot(e);}catch(t){}else try{e.setAttribute(t,"");}catch(t){}},Pt=function(t){let e=null,i=null;if(Q)t="<remove></remove>"+t;else {const e=Ae(t,/^[\r\n\t ]+/);i=e&&e[0];}"application/xhtml+xml"===St&&bt===ft&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");const r=x?x.createHTML(t):t;if(bt===ft)try{e=(new g).parseFromString(r,St);}catch(t){}if(!e||!e.documentElement){e=E.createDocument(bt,"template",null);try{e.documentElement.innerHTML=vt?C:r;}catch(t){}}const o=e.body||e.documentElement;return t&&i&&o.insertBefore(n.createTextNode(i),o.childNodes[0]||null),bt===ft?k.call(e,X?"html":"body")[0]:X?e.documentElement:o},Mt=function(t){return S.call(t.ownerDocument||t,t,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},Bt=function(t){return t instanceof d&&("string"!=typeof t.nodeName||"string"!=typeof t.textContent||"function"!=typeof t.removeChild||!(t.attributes instanceof h)||"function"!=typeof t.removeAttribute||"function"!=typeof t.setAttribute||"string"!=typeof t.namespaceURI||"function"!=typeof t.insertBefore||"function"!=typeof t.hasChildNodes)},_t=function(t){return "function"==typeof l&&t instanceof l};function jt(t,e,n){me(t,(t=>{t.call(i,e,n,Tt);}));}const Wt=function(t){let e=null;if(jt(w.beforeSanitizeElements,t,null),Bt(t))return Ot(t),!0;const n=kt(t.nodeName);if(jt(w.uponSanitizeElement,t,{tagName:n,allowedTags:_}),t.hasChildNodes()&&!_t(t.firstElementChild)&&Se(/<[/\w]/g,t.innerHTML)&&Se(/<[/\w]/g,t.textContent))return Ot(t),!0;if(t.nodeType===ii)return Ot(t),!0;if($&&t.nodeType===ni&&Se(/<[/\w]/g,t.data))return Ot(t),!0;if(!_[n]||z[n]){if(!z[n]&&Vt(n)){if(V.tagNameCheck instanceof RegExp&&Se(V.tagNameCheck,n))return !1;if(V.tagNameCheck instanceof Function&&V.tagNameCheck(n))return !1}if(ot&&!lt[n]){const e=y(t)||t.parentNode,i=A(t)||t.childNodes;if(i&&e){for(let n=i.length-1;n>=0;--n){const r=f(i[n],!0);r.__removalCount=(t.__removalCount||0)+1,e.insertBefore(r,v(t));}}}return Ot(t),!0}return t instanceof c&&!function(t){let e=y(t);e&&e.tagName||(e={namespaceURI:bt,tagName:"template"});const i=be(t.tagName),n=be(e.tagName);return !!At[t.namespaceURI]&&(t.namespaceURI===pt?e.namespaceURI===ft?"svg"===i:e.namespaceURI===mt?"svg"===i&&("annotation-xml"===n||xt[n]):Boolean(Nt[i]):t.namespaceURI===mt?e.namespaceURI===ft?"math"===i:e.namespaceURI===pt?"math"===i&&Ct[n]:Boolean(It[i]):t.namespaceURI===ft?!(e.namespaceURI===pt&&!Ct[n])&&!(e.namespaceURI===mt&&!xt[n])&&!It[i]&&(Et[i]||!Nt[i]):!("application/xhtml+xml"!==St||!At[t.namespaceURI]))}(t)?(Ot(t),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!Se(/<\/no(script|embed|frames)/i,t.innerHTML)?(Y&&t.nodeType===ei&&(e=t.textContent,me([L,D,N],(t=>{e=ye(e,t," ");})),t.textContent!==e&&(fe(i.removed,{element:t.cloneNode()}),t.textContent=e)),jt(w.afterSanitizeElements,t,null),!1):(Ot(t),!0)},Ut=function(t,e,i){if(nt&&("id"===e||"name"===e)&&(i in n||i in wt))return !1;if(J&&!q[e]&&Se(I,e));else if(H&&Se(O,e));else if(!W[e]||q[e]){if(!(Vt(t)&&(V.tagNameCheck instanceof RegExp&&Se(V.tagNameCheck,t)||V.tagNameCheck instanceof Function&&V.tagNameCheck(t))&&(V.attributeNameCheck instanceof RegExp&&Se(V.attributeNameCheck,e)||V.attributeNameCheck instanceof Function&&V.attributeNameCheck(e))||"is"===e&&V.allowCustomizedBuiltInElements&&(V.tagNameCheck instanceof RegExp&&Se(V.tagNameCheck,i)||V.tagNameCheck instanceof Function&&V.tagNameCheck(i))))return !1}else if(dt[e]);else if(Se(B,ye(i,P,"")));else if("src"!==e&&"xlink:href"!==e&&"href"!==e||"script"===t||0!==xe(i,"data:")||!ut[t]){if(K&&!Se(F,ye(i,P,"")));else if(i)return !1}else;return !0},Vt=function(t){return "annotation-xml"!==t&&Ae(t,M)},zt=function(t){jt(w.beforeSanitizeAttributes,t,null);const{attributes:e}=t;if(!e||Bt(t))return;const n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:W,forceKeepAttr:void 0};let r=e.length;for(;r--;){const o=e[r],{name:s,namespaceURI:a,value:l}=o,c=kt(s);let u="value"===s?l:Ce(l);if(n.attrName=c,n.attrValue=u,n.keepAttr=!0,n.forceKeepAttr=void 0,jt(w.uponSanitizeAttribute,t,n),u=n.attrValue,!rt||"id"!==c&&"name"!==c||(Ft(s,t),u="user-content-"+u),$&&Se(/((--!?|])>)|<\/(style|title)/i,u)){Ft(s,t);continue}if(n.forceKeepAttr)continue;if(Ft(s,t),!n.keepAttr)continue;if(!G&&Se(/\/>/i,u)){Ft(s,t);continue}Y&&me([L,D,N],(t=>{u=ye(u,t," ");}));const h=kt(t.nodeName);if(Ut(h,c,u)){if(x&&"object"==typeof m&&"function"==typeof m.getAttributeType)if(a);else switch(m.getAttributeType(h,c)){case"TrustedHTML":u=x.createHTML(u);break;case"TrustedScriptURL":u=x.createScriptURL(u);}try{a?t.setAttributeNS(a,s,u):t.setAttribute(s,u),Bt(t)?Ot(t):pe(i.removed);}catch(t){}}}jt(w.afterSanitizeAttributes,t,null);},qt=function t(e){let i=null;const n=Mt(e);for(jt(w.beforeSanitizeShadowDOM,e,null);i=n.nextNode();)jt(w.uponSanitizeShadowNode,i,null),Wt(i),zt(i),i.content instanceof s&&t(i.content);jt(w.afterSanitizeShadowDOM,e,null);};return i.sanitize=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null,o=null,a=null,c=null;if(vt=!t,vt&&(t="\x3c!--\x3e"),"string"!=typeof t&&!_t(t)){if("function"!=typeof t.toString)throw Re("toString is not a function");if("string"!=typeof(t=t.toString()))throw Re("dirty is not a string, aborting")}if(!i.isSupported)return t;if(Z||Dt(e),i.removed=[],"string"==typeof t&&(st=!1),st){if(t.nodeName){const e=kt(t.nodeName);if(!_[e]||z[e])throw Re("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof l)n=Pt("\x3c!----\x3e"),o=n.ownerDocument.importNode(t,!0),o.nodeType===ti&&"BODY"===o.nodeName||"HTML"===o.nodeName?n=o:n.appendChild(o);else {if(!tt&&!Y&&!X&&-1===t.indexOf("<"))return x&&it?x.createHTML(t):t;if(n=Pt(t),!n)return tt?null:it?C:""}n&&Q&&Ot(n.firstChild);const u=Mt(st?t:n);for(;a=u.nextNode();)Wt(a),zt(a),a.content instanceof s&&qt(a.content);if(st)return t;if(tt){if(et)for(c=R.call(n.ownerDocument);n.firstChild;)c.appendChild(n.firstChild);else c=n;return (W.shadowroot||W.shadowrootmode)&&(c=T.call(r,c,!0)),c}let h=X?n.outerHTML:n.innerHTML;return X&&_["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&Se(Xe,n.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+h),Y&&me([L,D,N],(t=>{h=ye(h,t," ");})),x&&it?x.createHTML(h):h},i.setConfig=function(){Dt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),Z=!0;},i.clearConfig=function(){Tt=null,Z=!1;},i.isValidAttribute=function(t,e,i){Tt||Dt({});const n=kt(t),r=kt(e);return Ut(n,r,i)},i.addHook=function(t,e){"function"==typeof e&&fe(w[t],e);},i.removeHook=function(t){return pe(w[t])},i.removeHooks=function(t){w[t]=[];},i.removeAllHooks=function(){w={afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]};},i}();si.addHook("uponSanitizeAttribute",(function(t,e){/^data-trix-/.test(e.attrName)&&(e.forceKeepAttr=!0);}));const ai="style href src width height language class".split(" "),li="javascript:".split(" "),ci="script iframe form noscript".split(" ");class ui extends q{static setHTML(t,e){const i=new this(e).sanitize(),n=i.getHTML?i.getHTML():i.outerHTML;t.innerHTML=n;}static sanitize(t,e){const i=new this(t,e);return i.sanitize(),i}constructor(t){let{allowedAttributes:e,forbiddenProtocols:i,forbiddenElements:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(...arguments),this.allowedAttributes=e||ai,this.forbiddenProtocols=i||li,this.forbiddenElements=n||ci,this.body=hi(t);}sanitize(){return this.sanitizeElements(),this.normalizeListElementNesting(),si.setConfig(l),this.body=si.sanitize(this.body),this.body}getHTML(){return this.body.innerHTML}getBody(){return this.body}sanitizeElements(){const t=R(this.body),e=[];for(;t.nextNode();){const i=t.currentNode;switch(i.nodeType){case Node.ELEMENT_NODE:this.elementIsRemovable(i)?e.push(i):this.sanitizeElement(i);break;case Node.COMMENT_NODE:e.push(i);}}return e.forEach((t=>S(t))),this.body}sanitizeElement(t){return t.hasAttribute("href")&&this.forbiddenProtocols.includes(t.protocol)&&t.removeAttribute("href"),Array.from(t.attributes).forEach((e=>{let{name:i}=e;this.allowedAttributes.includes(i)||0===i.indexOf("data-trix")||t.removeAttribute(i);})),t}normalizeListElementNesting(){return Array.from(this.body.querySelectorAll("ul,ol")).forEach((t=>{const e=t.previousElementSibling;e&&"li"===k(e)&&e.appendChild(t);})),this.body}elementIsRemovable(t){if((null==t?void 0:t.nodeType)===Node.ELEMENT_NODE)return this.elementIsForbidden(t)||this.elementIsntSerializable(t)}elementIsForbidden(t){return this.forbiddenElements.includes(k(t))}elementIsntSerializable(t){return "false"===t.getAttribute("data-trix-serialize")&&!P(t)}}const hi=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t=t.replace(/<\/html[^>]*>[^]*$/i,"</html>");const e=document.implementation.createHTMLDocument("");return e.documentElement.innerHTML=t,Array.from(e.head.querySelectorAll("style")).forEach((t=>{e.body.appendChild(t);})),e.body},{css:di}=z;class gi extends ie{constructor(){super(...arguments),this.attachment=this.object,this.attachment.uploadProgressDelegate=this,this.attachmentPiece=this.options.piece;}createContentNodes(){return []}createNodes(){let t;const e=t=T({tagName:"figure",className:this.getClassName(),data:this.getData(),editable:!1}),i=this.getHref();return i&&(t=T({tagName:"a",editable:!1,attributes:{href:i,tabindex:-1}}),e.appendChild(t)),this.attachment.hasContent()?ui.setHTML(t,this.attachment.getContent()):this.createContentNodes().forEach((e=>{t.appendChild(e);})),t.appendChild(this.createCaptionElement()),this.attachment.isPending()&&(this.progressElement=T({tagName:"progress",attributes:{class:di.attachmentProgress,value:this.attachment.getUploadProgress(),max:100},data:{trixMutable:!0,trixStoreKey:["progressElement",this.attachment.id].join("/")}}),e.appendChild(this.progressElement)),[mi("left"),e,mi("right")]}createCaptionElement(){const t=T({tagName:"figcaption",className:di.attachmentCaption}),e=this.attachmentPiece.getCaption();if(e)t.classList.add("".concat(di.attachmentCaption,"--edited")),t.textContent=e;else {let e,i;const n=this.getCaptionConfig();if(n.name&&(e=this.attachment.getFilename()),n.size&&(i=this.attachment.getFormattedFilesize()),e){const i=T({tagName:"span",className:di.attachmentName,textContent:e});t.appendChild(i);}if(i){e&&t.appendChild(document.createTextNode(" "));const n=T({tagName:"span",className:di.attachmentSize,textContent:i});t.appendChild(n);}}return t}getClassName(){const t=[di.attachment,"".concat(di.attachment,"--").concat(this.attachment.getType())],e=this.attachment.getExtension();return e&&t.push("".concat(di.attachment,"--").concat(e)),t.join(" ")}getData(){const t={trixAttachment:JSON.stringify(this.attachment),trixContentType:this.attachment.getContentType(),trixId:this.attachment.id},{attributes:e}=this.attachmentPiece;return e.isEmpty()||(t.trixAttributes=JSON.stringify(e)),this.attachment.isPending()&&(t.trixSerialize=!1),t}getHref(){if(!pi(this.attachment.getContent(),"a"))return this.attachment.getHref()}getCaptionConfig(){var t;const e=this.attachment.getType(),n=kt(null===(t=i[e])||void 0===t?void 0:t.caption);return "file"===e&&(n.name=!0),n}findProgressElement(){var t;return null===(t=this.findElement())||void 0===t?void 0:t.querySelector("progress")}attachmentDidChangeUploadProgress(){const t=this.attachment.getUploadProgress(),e=this.findProgressElement();e&&(e.value=t);}}const mi=t=>T({tagName:"span",textContent:d,data:{trixCursorTarget:t,trixSerialize:!1}}),pi=function(t,e){const i=T("div");return ui.setHTML(i,t||""),i.querySelector(e)};class fi extends gi{constructor(){super(...arguments),this.attachment.previewDelegate=this;}createContentNodes(){return this.image=T({tagName:"img",attributes:{src:""},data:{trixMutable:!0}}),this.refresh(this.image),[this.image]}createCaptionElement(){const t=super.createCaptionElement(...arguments);return t.textContent||t.setAttribute("data-trix-placeholder",c.captionPlaceholder),t}refresh(t){var e;t||(t=null===(e=this.findElement())||void 0===e?void 0:e.querySelector("img"));if(t)return this.updateAttributesForImage(t)}updateAttributesForImage(t){const e=this.attachment.getURL(),i=this.attachment.getPreviewURL();if(t.src=i||e,i===e)t.removeAttribute("data-trix-serialized-attributes");else {const i=JSON.stringify({src:e});t.setAttribute("data-trix-serialized-attributes",i);}const n=this.attachment.getWidth(),r=this.attachment.getHeight();null!=n&&(t.width=n),null!=r&&(t.height=r);const o=["imageElement",this.attachment.id,t.src,t.width,t.height].join("/");t.dataset.trixStoreKey=o;}attachmentDidChangeAttributes(){return this.refresh(this.image),this.refresh()}}class bi extends ie{constructor(){super(...arguments),this.piece=this.object,this.attributes=this.piece.getAttributes(),this.textConfig=this.options.textConfig,this.context=this.options.context,this.piece.attachment?this.attachment=this.piece.attachment:this.string=this.piece.toString();}createNodes(){let t=this.attachment?this.createAttachmentNodes():this.createStringNodes();const e=this.createElement();if(e){const i=function(t){for(;null!==(e=t)&&void 0!==e&&e.firstElementChild;){var e;t=t.firstElementChild;}return t}(e);Array.from(t).forEach((t=>{i.appendChild(t);})),t=[e];}return t}createAttachmentNodes(){const t=this.attachment.isPreviewable()?fi:gi;return this.createChildView(t,this.piece.attachment,{piece:this.piece}).getNodes()}createStringNodes(){var t;if(null!==(t=this.textConfig)&&void 0!==t&&t.plaintext)return [document.createTextNode(this.string)];{const t=[],e=this.string.split("\n");for(let i=0;i<e.length;i++){const n=e[i];if(i>0){const e=T("br");t.push(e);}if(n.length){const e=document.createTextNode(this.preserveSpaces(n));t.push(e);}}return t}}createElement(){let t,e,i;const n={};for(e in this.attributes){i=this.attributes[e];const o=ft(e);if(o){if(o.tagName){var r;const e=T(o.tagName);r?(r.appendChild(e),r=e):t=r=e;}if(o.styleProperty&&(n[o.styleProperty]=i),o.style)for(e in o.style)i=o.style[e],n[e]=i;}}if(Object.keys(n).length)for(e in t||(t=T("span")),n)i=n[e],t.style[e]=i;return t}createContainerElement(){for(const t in this.attributes){const e=this.attributes[t],i=ft(t);if(i&&i.groupTagName){const n={};return n[t]=e,T(i.groupTagName,n)}}}preserveSpaces(t){return this.context.isLast&&(t=t.replace(/\ $/,g)),t=t.replace(/(\S)\ {3}(\S)/g,"$1 ".concat(g," $2")).replace(/\ {2}/g,"".concat(g," ")).replace(/\ {2}/g," ".concat(g)),(this.context.isFirst||this.context.followsWhitespace)&&(t=t.replace(/^\ /,g)),t}}class vi extends ie{constructor(){super(...arguments),this.text=this.object,this.textConfig=this.options.textConfig;}createNodes(){const t=[],e=Xt.groupObjects(this.getPieces()),i=e.length-1;for(let r=0;r<e.length;r++){const o=e[r],s={};0===r&&(s.isFirst=!0),r===i&&(s.isLast=!0),Ai(n)&&(s.followsWhitespace=!0);const a=this.findOrCreateCachedChildView(bi,o,{textConfig:this.textConfig,context:s});t.push(...Array.from(a.getNodes()||[]));var n=o;}return t}getPieces(){return Array.from(this.text.getPieces()).filter((t=>!t.hasAttribute("blockBreak")))}}const Ai=t=>/\s$/.test(null==t?void 0:t.toString()),{css:yi}=z;class xi extends ie{constructor(){super(...arguments),this.block=this.object,this.attributes=this.block.getAttributes();}createNodes(){const t=[document.createComment("block")];if(this.block.isEmpty())t.push(T("br"));else {var e;const i=null===(e=mt(this.block.getLastAttribute()))||void 0===e?void 0:e.text,n=this.findOrCreateCachedChildView(vi,this.block.text,{textConfig:i});t.push(...Array.from(n.getNodes()||[])),this.shouldAddExtraNewlineElement()&&t.push(T("br"));}if(this.attributes.length)return t;{let e;const{tagName:i}=n.default;this.block.isRTL()&&(e={dir:"rtl"});const r=T({tagName:i,attributes:e});return t.forEach((t=>r.appendChild(t))),[r]}}createContainerElement(t){const e={};let i;const n=this.attributes[t],{tagName:r,htmlAttributes:o=[]}=mt(n);if(0===t&&this.block.isRTL()&&Object.assign(e,{dir:"rtl"}),"attachmentGallery"===n){const t=this.block.getBlockBreakPosition();i="".concat(yi.attachmentGallery," ").concat(yi.attachmentGallery,"--").concat(t);}return Object.entries(this.block.htmlAttributes).forEach((t=>{let[i,n]=t;o.includes(i)&&(e[i]=n);})),T({tagName:r,className:i,attributes:e})}shouldAddExtraNewlineElement(){return /\n\n$/.test(this.block.toString())}}class Ci extends ie{static render(t){const e=T("div"),i=new this(t,{element:e});return i.render(),i.sync(),e}constructor(){super(...arguments),this.element=this.options.element,this.elementStore=new Qt,this.setDocument(this.object);}setDocument(t){t.isEqualTo(this.document)||(this.document=this.object=t);}render(){if(this.childViews=[],this.shadowElement=T("div"),!this.document.isEmpty()){const t=Xt.groupObjects(this.document.getBlocks(),{asTree:!0});Array.from(t).forEach((t=>{const e=this.findOrCreateCachedChildView(xi,t);Array.from(e.getNodes()).map((t=>this.shadowElement.appendChild(t)));}));}}isSynced(){return Si(this.shadowElement,this.element)}sync(){const t=this.createDocumentFragmentForSync();for(;this.element.lastChild;)this.element.removeChild(this.element.lastChild);return this.element.appendChild(t),this.didSync()}didSync(){return this.elementStore.reset(Ei(this.element)),Rt((()=>this.garbageCollectCachedViews()))}createDocumentFragmentForSync(){const t=document.createDocumentFragment();return Array.from(this.shadowElement.childNodes).forEach((e=>{t.appendChild(e.cloneNode(!0));})),Array.from(Ei(t)).forEach((t=>{const e=this.elementStore.remove(t);e&&t.parentNode.replaceChild(e,t);})),t}}const Ei=t=>t.querySelectorAll("[data-trix-store-key]"),Si=(t,e)=>Ri(t.innerHTML)===Ri(e.innerHTML),Ri=t=>t.replace(/&nbsp;/g," ");function wi(t,e,i){return (e=Li(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Li(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return ("string"===e?String:Number)(t)}(t,"string");return "symbol"==typeof e?e:String(e)}function Di(t,e){return Oi(t,Ii(t,e,"get"))}function Ni(t,e,i){return Fi(t,Ii(t,e,"set"),i),i}function Ii(t,e,i){if(!e.has(t))throw new TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}function Oi(t,e){return e.get?e.get.call(t):e.value}function Fi(t,e,i){if(e.set)e.set.call(t,i);else {if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=i;}}function Pi(t,e,i){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return i}function Mi(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Bi(t,e,i){Mi(t,e),e.set(t,i);}class _i extends rt{static registerType(t,e){e.type=t,this.types[t]=e;}static fromJSON(t){const e=this.types[t.type];if(e)return e.fromJSON(t)}constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(...arguments),this.attributes=Ht.box(e);}copyWithAttributes(t){return new this.constructor(this.getValue(),t)}copyWithAdditionalAttributes(t){return this.copyWithAttributes(this.attributes.merge(t))}copyWithoutAttribute(t){return this.copyWithAttributes(this.attributes.remove(t))}copy(){return this.copyWithAttributes(this.attributes)}getAttribute(t){return this.attributes.get(t)}getAttributesHash(){return this.attributes}getAttributes(){return this.attributes.toObject()}hasAttribute(t){return this.attributes.has(t)}hasSameStringValueAsPiece(t){return t&&this.toString()===t.toString()}hasSameAttributesAsPiece(t){return t&&(this.attributes===t.attributes||this.attributes.isEqualTo(t.attributes))}isBlockBreak(){return !1}isEqualTo(t){return super.isEqualTo(...arguments)||this.hasSameConstructorAs(t)&&this.hasSameStringValueAsPiece(t)&&this.hasSameAttributesAsPiece(t)}isEmpty(){return 0===this.length}isSerializable(){return !0}toJSON(){return {type:this.constructor.type,attributes:this.getAttributes()}}contentsForInspection(){return {type:this.constructor.type,attributes:this.attributes.inspect()}}canBeGrouped(){return this.hasAttribute("href")}canBeGroupedWith(t){return this.getAttribute("href")===t.getAttribute("href")}getLength(){return this.length}canBeConsolidatedWith(t){return !1}}wi(_i,"types",{});class ji extends ee{constructor(t){super(...arguments),this.url=t;}perform(t){const e=new Image;e.onload=()=>(e.width=this.width=e.naturalWidth,e.height=this.height=e.naturalHeight,t(!0,e)),e.onerror=()=>t(!1),e.src=this.url;}}class Wi extends rt{static attachmentForFile(t){const e=new this(this.attributesForFile(t));return e.setFile(t),e}static attributesForFile(t){return new Ht({filename:t.name,filesize:t.size,contentType:t.type})}static fromJSON(t){return new this(t)}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(t),this.releaseFile=this.releaseFile.bind(this),this.attributes=Ht.box(t),this.didChangeAttributes();}getAttribute(t){return this.attributes.get(t)}hasAttribute(t){return this.attributes.has(t)}getAttributes(){return this.attributes.toObject()}setAttributes(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e=this.attributes.merge(t);var i,n,r,o;if(!this.attributes.isEqualTo(e))return this.attributes=e,this.didChangeAttributes(),null===(i=this.previewDelegate)||void 0===i||null===(n=i.attachmentDidChangeAttributes)||void 0===n||n.call(i,this),null===(r=this.delegate)||void 0===r||null===(o=r.attachmentDidChangeAttributes)||void 0===o?void 0:o.call(r,this)}didChangeAttributes(){if(this.isPreviewable())return this.preloadURL()}isPending(){return null!=this.file&&!(this.getURL()||this.getHref())}isPreviewable(){return this.attributes.has("previewable")?this.attributes.get("previewable"):Wi.previewablePattern.test(this.getContentType())}getType(){return this.hasContent()?"content":this.isPreviewable()?"preview":"file"}getURL(){return this.attributes.get("url")}getHref(){return this.attributes.get("href")}getFilename(){return this.attributes.get("filename")||""}getFilesize(){return this.attributes.get("filesize")}getFormattedFilesize(){const t=this.attributes.get("filesize");return "number"==typeof t?h.formatter(t):""}getExtension(){var t;return null===(t=this.getFilename().match(/\.(\w+)$/))||void 0===t?void 0:t[1].toLowerCase()}getContentType(){return this.attributes.get("contentType")}hasContent(){return this.attributes.has("content")}getContent(){return this.attributes.get("content")}getWidth(){return this.attributes.get("width")}getHeight(){return this.attributes.get("height")}getFile(){return this.file}setFile(t){if(this.file=t,this.isPreviewable())return this.preloadFile()}releaseFile(){this.releasePreloadedFile(),this.file=null;}getUploadProgress(){return null!=this.uploadProgress?this.uploadProgress:0}setUploadProgress(t){var e,i;if(this.uploadProgress!==t)return this.uploadProgress=t,null===(e=this.uploadProgressDelegate)||void 0===e||null===(i=e.attachmentDidChangeUploadProgress)||void 0===i?void 0:i.call(e,this)}toJSON(){return this.getAttributes()}getCacheKey(){return [super.getCacheKey(...arguments),this.attributes.getCacheKey(),this.getPreviewURL()].join("/")}getPreviewURL(){return this.previewURL||this.preloadingURL}setPreviewURL(t){var e,i,n,r;if(t!==this.getPreviewURL())return this.previewURL=t,null===(e=this.previewDelegate)||void 0===e||null===(i=e.attachmentDidChangeAttributes)||void 0===i||i.call(e,this),null===(n=this.delegate)||void 0===n||null===(r=n.attachmentDidChangePreviewURL)||void 0===r?void 0:r.call(n,this)}preloadURL(){return this.preload(this.getURL(),this.releaseFile)}preloadFile(){if(this.file)return this.fileObjectURL=URL.createObjectURL(this.file),this.preload(this.fileObjectURL)}releasePreloadedFile(){this.fileObjectURL&&(URL.revokeObjectURL(this.fileObjectURL),this.fileObjectURL=null);}preload(t,e){if(t&&t!==this.getPreviewURL()){this.preloadingURL=t;return new ji(t).then((i=>{let{width:n,height:r}=i;return this.getWidth()&&this.getHeight()||this.setAttributes({width:n,height:r}),this.preloadingURL=null,this.setPreviewURL(t),null==e?void 0:e()})).catch((()=>(this.preloadingURL=null,null==e?void 0:e())))}}}wi(Wi,"previewablePattern",/^image(\/(gif|png|webp|jpe?g)|$)/);class Ui extends _i{static fromJSON(t){return new this(Wi.fromJSON(t.attachment),t.attributes)}constructor(t){super(...arguments),this.attachment=t,this.length=1,this.ensureAttachmentExclusivelyHasAttribute("href"),this.attachment.hasContent()||this.removeProhibitedAttributes();}ensureAttachmentExclusivelyHasAttribute(t){this.hasAttribute(t)&&(this.attachment.hasAttribute(t)||this.attachment.setAttributes(this.attributes.slice([t])),this.attributes=this.attributes.remove(t));}removeProhibitedAttributes(){const t=this.attributes.slice(Ui.permittedAttributes);t.isEqualTo(this.attributes)||(this.attributes=t);}getValue(){return this.attachment}isSerializable(){return !this.attachment.isPending()}getCaption(){return this.attributes.get("caption")||""}isEqualTo(t){var e;return super.isEqualTo(t)&&this.attachment.id===(null==t||null===(e=t.attachment)||void 0===e?void 0:e.id)}toString(){return "￼"}toJSON(){const t=super.toJSON(...arguments);return t.attachment=this.attachment,t}getCacheKey(){return [super.getCacheKey(...arguments),this.attachment.getCacheKey()].join("/")}toConsole(){return JSON.stringify(this.toString())}}wi(Ui,"permittedAttributes",["caption","presentation"]),_i.registerType("attachment",Ui);class Vi extends _i{static fromJSON(t){return new this(t.string,t.attributes)}constructor(t){super(...arguments),this.string=(t=>t.replace(/\r\n?/g,"\n"))(t),this.length=this.string.length;}getValue(){return this.string}toString(){return this.string.toString()}isBlockBreak(){return "\n"===this.toString()&&!0===this.getAttribute("blockBreak")}toJSON(){const t=super.toJSON(...arguments);return t.string=this.string,t}canBeConsolidatedWith(t){return t&&this.hasSameConstructorAs(t)&&this.hasSameAttributesAsPiece(t)}consolidateWith(t){return new this.constructor(this.toString()+t.toString(),this.attributes)}splitAtOffset(t){let e,i;return 0===t?(e=null,i=this):t===this.length?(e=this,i=null):(e=new this.constructor(this.string.slice(0,t),this.attributes),i=new this.constructor(this.string.slice(t),this.attributes)),[e,i]}toConsole(){let{string:t}=this;return t.length>15&&(t=t.slice(0,14)+"…"),JSON.stringify(t.toString())}}_i.registerType("string",Vi);class zi extends rt{static box(t){return t instanceof this?t:new this(t)}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];super(...arguments),this.objects=t.slice(0),this.length=this.objects.length;}indexOf(t){return this.objects.indexOf(t)}splice(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return new this.constructor(st(this.objects,...e))}eachObject(t){return this.objects.map(((e,i)=>t(e,i)))}insertObjectAtIndex(t,e){return this.splice(e,0,t)}insertSplittableListAtIndex(t,e){return this.splice(e,0,...t.objects)}insertSplittableListAtPosition(t,e){const[i,n]=this.splitObjectAtPosition(e);return new this.constructor(i).insertSplittableListAtIndex(t,n)}editObjectAtIndex(t,e){return this.replaceObjectAtIndex(e(this.objects[t]),t)}replaceObjectAtIndex(t,e){return this.splice(e,1,t)}removeObjectAtIndex(t){return this.splice(t,1)}getObjectAtIndex(t){return this.objects[t]}getSplittableListInRange(t){const[e,i,n]=this.splitObjectsAtRange(t);return new this.constructor(e.slice(i,n+1))}selectSplittableList(t){const e=this.objects.filter((e=>t(e)));return new this.constructor(e)}removeObjectsInRange(t){const[e,i,n]=this.splitObjectsAtRange(t);return new this.constructor(e).splice(i,n-i+1)}transformObjectsInRange(t,e){const[i,n,r]=this.splitObjectsAtRange(t),o=i.map(((t,i)=>n<=i&&i<=r?e(t):t));return new this.constructor(o)}splitObjectsAtRange(t){let e,[i,n,r]=this.splitObjectAtPosition(Hi(t));return [i,e]=new this.constructor(i).splitObjectAtPosition(Ji(t)+r),[i,n,e-1]}getObjectAtPosition(t){const{index:e}=this.findIndexAndOffsetAtPosition(t);return this.objects[e]}splitObjectAtPosition(t){let e,i;const{index:n,offset:r}=this.findIndexAndOffsetAtPosition(t),o=this.objects.slice(0);if(null!=n)if(0===r)e=n,i=0;else {const t=this.getObjectAtIndex(n),[s,a]=t.splitAtOffset(r);o.splice(n,1,s,a),e=n+1,i=s.getLength()-r;}else e=o.length,i=0;return [o,e,i]}consolidate(){const t=[];let e=this.objects[0];return this.objects.slice(1).forEach((i=>{var n,r;null!==(n=(r=e).canBeConsolidatedWith)&&void 0!==n&&n.call(r,i)?e=e.consolidateWith(i):(t.push(e),e=i);})),e&&t.push(e),new this.constructor(t)}consolidateFromIndexToIndex(t,e){const i=this.objects.slice(0).slice(t,e+1),n=new this.constructor(i).consolidate().toArray();return this.splice(t,i.length,...n)}findIndexAndOffsetAtPosition(t){let e,i=0;for(e=0;e<this.objects.length;e++){const n=i+this.objects[e].getLength();if(i<=t&&t<n)return {index:e,offset:t-i};i=n;}return {index:null,offset:null}}findPositionAtIndexAndOffset(t,e){let i=0;for(let n=0;n<this.objects.length;n++){const r=this.objects[n];if(n<t)i+=r.getLength();else if(n===t){i+=e;break}}return i}getEndPosition(){return null==this.endPosition&&(this.endPosition=0,this.objects.forEach((t=>this.endPosition+=t.getLength()))),this.endPosition}toString(){return this.objects.join("")}toArray(){return this.objects.slice(0)}toJSON(){return this.toArray()}isEqualTo(t){return super.isEqualTo(...arguments)||qi(this.objects,null==t?void 0:t.objects)}contentsForInspection(){return {objects:"[".concat(this.objects.map((t=>t.inspect())).join(", "),"]")}}}const qi=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(t.length!==e.length)return !1;let i=!0;for(let n=0;n<t.length;n++){const r=t[n];i&&!r.isEqualTo(e[n])&&(i=!1);}return i},Hi=t=>t[0],Ji=t=>t[1];class Ki extends rt{static textForAttachmentWithAttributes(t,e){return new this([new Ui(t,e)])}static textForStringWithAttributes(t,e){return new this([new Vi(t,e)])}static fromJSON(t){return new this(Array.from(t).map((t=>_i.fromJSON(t))))}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];super(...arguments);const e=t.filter((t=>!t.isEmpty()));this.pieceList=new zi(e);}copy(){return this.copyWithPieceList(this.pieceList)}copyWithPieceList(t){return new this.constructor(t.consolidate().toArray())}copyUsingObjectMap(t){const e=this.getPieces().map((e=>t.find(e)||e));return new this.constructor(e)}appendText(t){return this.insertTextAtPosition(t,this.getLength())}insertTextAtPosition(t,e){return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(t.pieceList,e))}removeTextAtRange(t){return this.copyWithPieceList(this.pieceList.removeObjectsInRange(t))}replaceTextAtRange(t,e){return this.removeTextAtRange(e).insertTextAtPosition(t,e[0])}moveTextFromRangeToPosition(t,e){if(t[0]<=e&&e<=t[1])return;const i=this.getTextAtRange(t),n=i.getLength();return t[0]<e&&(e-=n),this.removeTextAtRange(t).insertTextAtPosition(i,e)}addAttributeAtRange(t,e,i){const n={};return n[t]=e,this.addAttributesAtRange(n,i)}addAttributesAtRange(t,e){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e,(e=>e.copyWithAdditionalAttributes(t))))}removeAttributeAtRange(t,e){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e,(e=>e.copyWithoutAttribute(t))))}setAttributesAtRange(t,e){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e,(e=>e.copyWithAttributes(t))))}getAttributesAtPosition(t){var e;return (null===(e=this.pieceList.getObjectAtPosition(t))||void 0===e?void 0:e.getAttributes())||{}}getCommonAttributes(){const t=Array.from(this.pieceList.toArray()).map((t=>t.getAttributes()));return Ht.fromCommonAttributesOfObjects(t).toObject()}getCommonAttributesAtRange(t){return this.getTextAtRange(t).getCommonAttributes()||{}}getExpandedRangeForAttributeAtOffset(t,e){let i,n=i=e;const r=this.getLength();for(;n>0&&this.getCommonAttributesAtRange([n-1,i])[t];)n--;for(;i<r&&this.getCommonAttributesAtRange([e,i+1])[t];)i++;return [n,i]}getTextAtRange(t){return this.copyWithPieceList(this.pieceList.getSplittableListInRange(t))}getStringAtRange(t){return this.pieceList.getSplittableListInRange(t).toString()}getStringAtPosition(t){return this.getStringAtRange([t,t+1])}startsWithString(t){return this.getStringAtRange([0,t.length])===t}endsWithString(t){const e=this.getLength();return this.getStringAtRange([e-t.length,e])===t}getAttachmentPieces(){return this.pieceList.toArray().filter((t=>!!t.attachment))}getAttachments(){return this.getAttachmentPieces().map((t=>t.attachment))}getAttachmentAndPositionById(t){let e=0;for(const n of this.pieceList.toArray()){var i;if((null===(i=n.attachment)||void 0===i?void 0:i.id)===t)return {attachment:n.attachment,position:e};e+=n.length;}return {attachment:null,position:null}}getAttachmentById(t){const{attachment:e}=this.getAttachmentAndPositionById(t);return e}getRangeOfAttachment(t){const e=this.getAttachmentAndPositionById(t.id),i=e.position;if(t=e.attachment)return [i,i+1]}updateAttributesForAttachment(t,e){const i=this.getRangeOfAttachment(e);return i?this.addAttributesAtRange(t,i):this}getLength(){return this.pieceList.getEndPosition()}isEmpty(){return 0===this.getLength()}isEqualTo(t){var e;return super.isEqualTo(t)||(null==t||null===(e=t.pieceList)||void 0===e?void 0:e.isEqualTo(this.pieceList))}isBlockBreak(){return 1===this.getLength()&&this.pieceList.getObjectAtIndex(0).isBlockBreak()}eachPiece(t){return this.pieceList.eachObject(t)}getPieces(){return this.pieceList.toArray()}getPieceAtPosition(t){return this.pieceList.getObjectAtPosition(t)}contentsForInspection(){return {pieceList:this.pieceList.inspect()}}toSerializableText(){const t=this.pieceList.selectSplittableList((t=>t.isSerializable()));return this.copyWithPieceList(t)}toString(){return this.pieceList.toString()}toJSON(){return this.pieceList.toJSON()}toConsole(){return JSON.stringify(this.pieceList.toArray().map((t=>JSON.parse(t.toConsole()))))}getDirection(){return lt(this.toString())}isRTL(){return "rtl"===this.getDirection()}}class Gi extends rt{static fromJSON(t){return new this(Ki.fromJSON(t.text),t.attributes,t.htmlAttributes)}constructor(t,e,i){super(...arguments),this.text=Yi(t||new Ki),this.attributes=e||[],this.htmlAttributes=i||{};}isEmpty(){return this.text.isBlockBreak()}isEqualTo(t){return !!super.isEqualTo(t)||this.text.isEqualTo(null==t?void 0:t.text)&&ot(this.attributes,null==t?void 0:t.attributes)&&Tt(this.htmlAttributes,null==t?void 0:t.htmlAttributes)}copyWithText(t){return new Gi(t,this.attributes,this.htmlAttributes)}copyWithoutText(){return this.copyWithText(null)}copyWithAttributes(t){return new Gi(this.text,t,this.htmlAttributes)}copyWithoutAttributes(){return this.copyWithAttributes(null)}copyUsingObjectMap(t){const e=t.find(this.text);return e?this.copyWithText(e):this.copyWithText(this.text.copyUsingObjectMap(t))}addAttribute(t){const e=this.attributes.concat(en(t));return this.copyWithAttributes(e)}addHTMLAttribute(t,e){const i=Object.assign({},this.htmlAttributes,{[t]:e});return new Gi(this.text,this.attributes,i)}removeAttribute(t){const{listAttribute:e}=mt(t),i=rn(rn(this.attributes,t),e);return this.copyWithAttributes(i)}removeLastAttribute(){return this.removeAttribute(this.getLastAttribute())}getLastAttribute(){return nn(this.attributes)}getAttributes(){return this.attributes.slice(0)}getAttributeLevel(){return this.attributes.length}getAttributeAtLevel(t){return this.attributes[t-1]}hasAttribute(t){return this.attributes.includes(t)}hasAttributes(){return this.getAttributeLevel()>0}getLastNestableAttribute(){return nn(this.getNestableAttributes())}getNestableAttributes(){return this.attributes.filter((t=>mt(t).nestable))}getNestingLevel(){return this.getNestableAttributes().length}decreaseNestingLevel(){const t=this.getLastNestableAttribute();return t?this.removeAttribute(t):this}increaseNestingLevel(){const t=this.getLastNestableAttribute();if(t){const e=this.attributes.lastIndexOf(t),i=st(this.attributes,e+1,0,...en(t));return this.copyWithAttributes(i)}return this}getListItemAttributes(){return this.attributes.filter((t=>mt(t).listAttribute))}isListItem(){var t;return null===(t=mt(this.getLastAttribute()))||void 0===t?void 0:t.listAttribute}isTerminalBlock(){var t;return null===(t=mt(this.getLastAttribute()))||void 0===t?void 0:t.terminal}breaksOnReturn(){var t;return null===(t=mt(this.getLastAttribute()))||void 0===t?void 0:t.breakOnReturn}findLineBreakInDirectionFromPosition(t,e){const i=this.toString();let n;switch(t){case"forward":n=i.indexOf("\n",e);break;case"backward":n=i.slice(0,e).lastIndexOf("\n");}if(-1!==n)return n}contentsForInspection(){return {text:this.text.inspect(),attributes:this.attributes}}toString(){return this.text.toString()}toJSON(){return {text:this.text,attributes:this.attributes,htmlAttributes:this.htmlAttributes}}getDirection(){return this.text.getDirection()}isRTL(){return this.text.isRTL()}getLength(){return this.text.getLength()}canBeConsolidatedWith(t){return !this.hasAttributes()&&!t.hasAttributes()&&this.getDirection()===t.getDirection()}consolidateWith(t){const e=Ki.textForStringWithAttributes("\n"),i=this.getTextWithoutBlockBreak().appendText(e);return this.copyWithText(i.appendText(t.text))}splitAtOffset(t){let e,i;return 0===t?(e=null,i=this):t===this.getLength()?(e=this,i=null):(e=this.copyWithText(this.text.getTextAtRange([0,t])),i=this.copyWithText(this.text.getTextAtRange([t,this.getLength()]))),[e,i]}getBlockBreakPosition(){return this.text.getLength()-1}getTextWithoutBlockBreak(){return Qi(this.text)?this.text.getTextAtRange([0,this.getBlockBreakPosition()]):this.text.copy()}canBeGrouped(t){return this.attributes[t]}canBeGroupedWith(t,e){const i=t.getAttributes(),r=i[e],o=this.attributes[e];return o===r&&!(!1===mt(o).group&&!(()=>{if(!dt){dt=[];for(const t in n){const{listAttribute:e}=n[t];null!=e&&dt.push(e);}}return dt})().includes(i[e+1]))&&(this.getDirection()===t.getDirection()||t.isEmpty())}}const Yi=function(t){return t=$i(t),t=Zi(t)},$i=function(t){let e=!1;const i=t.getPieces();let n=i.slice(0,i.length-1);const r=i[i.length-1];return r?(n=n.map((t=>t.isBlockBreak()?(e=!0,tn(t)):t)),e?new Ki([...n,r]):t):t},Xi=Ki.textForStringWithAttributes("\n",{blockBreak:!0}),Zi=function(t){return Qi(t)?t:t.appendText(Xi)},Qi=function(t){const e=t.getLength();if(0===e)return !1;return t.getTextAtRange([e-1,e]).isBlockBreak()},tn=t=>t.copyWithoutAttribute("blockBreak"),en=function(t){const{listAttribute:e}=mt(t);return e?[e,t]:[t]},nn=t=>t.slice(-1)[0],rn=function(t,e){const i=t.lastIndexOf(e);return -1===i?t:st(t,i,1)};class on extends rt{static fromJSON(t){return new this(Array.from(t).map((t=>Gi.fromJSON(t))))}static fromString(t,e){const i=Ki.textForStringWithAttributes(t,e);return new this([new Gi(i)])}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];super(...arguments),0===t.length&&(t=[new Gi]),this.blockList=zi.box(t);}isEmpty(){const t=this.getBlockAtIndex(0);return 1===this.blockList.length&&t.isEmpty()&&!t.hasAttributes()}copy(){const t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).consolidateBlocks?this.blockList.consolidate().toArray():this.blockList.toArray();return new this.constructor(t)}copyUsingObjectsFromDocument(t){const e=new Zt(t.getObjects());return this.copyUsingObjectMap(e)}copyUsingObjectMap(t){const e=this.getBlocks().map((e=>t.find(e)||e.copyUsingObjectMap(t)));return new this.constructor(e)}copyWithBaseBlockAttributes(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const e=this.getBlocks().map((e=>{const i=t.concat(e.getAttributes());return e.copyWithAttributes(i)}));return new this.constructor(e)}replaceBlock(t,e){const i=this.blockList.indexOf(t);return -1===i?this:new this.constructor(this.blockList.replaceObjectAtIndex(e,i))}insertDocumentAtRange(t,e){const{blockList:i}=t;e=wt(e);let[n]=e;const{index:r,offset:o}=this.locationFromPosition(n);let s=this;const a=this.getBlockAtPosition(n);return Lt(e)&&a.isEmpty()&&!a.hasAttributes()?s=new this.constructor(s.blockList.removeObjectAtIndex(r)):a.getBlockBreakPosition()===o&&n++,s=s.removeTextAtRange(e),new this.constructor(s.blockList.insertSplittableListAtPosition(i,n))}mergeDocumentAtRange(t,e){let i,n;e=wt(e);const[r]=e,o=this.locationFromPosition(r),s=this.getBlockAtIndex(o.index).getAttributes(),a=t.getBaseBlockAttributes(),l=s.slice(-a.length);if(ot(a,l)){const e=s.slice(0,-a.length);i=t.copyWithBaseBlockAttributes(e);}else i=t.copy({consolidateBlocks:!0}).copyWithBaseBlockAttributes(s);const c=i.getBlockCount(),u=i.getBlockAtIndex(0);if(ot(s,u.getAttributes())){const t=u.getTextWithoutBlockBreak();if(n=this.insertTextAtRange(t,e),c>1){i=new this.constructor(i.getBlocks().slice(1));const e=r+t.getLength();n=n.insertDocumentAtRange(i,e);}}else n=this.insertDocumentAtRange(i,e);return n}insertTextAtRange(t,e){e=wt(e);const[i]=e,{index:n,offset:r}=this.locationFromPosition(i),o=this.removeTextAtRange(e);return new this.constructor(o.blockList.editObjectAtIndex(n,(e=>e.copyWithText(e.text.insertTextAtPosition(t,r)))))}removeTextAtRange(t){let e;t=wt(t);const[i,n]=t;if(Lt(t))return this;const[r,o]=Array.from(this.locationRangeFromRange(t)),s=r.index,a=r.offset,l=this.getBlockAtIndex(s),c=o.index,u=o.offset,h=this.getBlockAtIndex(c);if(n-i==1&&l.getBlockBreakPosition()===a&&h.getBlockBreakPosition()!==u&&"\n"===h.text.getStringAtPosition(u))e=this.blockList.editObjectAtIndex(c,(t=>t.copyWithText(t.text.removeTextAtRange([u,u+1]))));else {let t;const i=l.text.getTextAtRange([0,a]),n=h.text.getTextAtRange([u,h.getLength()]),r=i.appendText(n);t=s!==c&&0===a&&l.getAttributeLevel()>=h.getAttributeLevel()?h.copyWithText(r):l.copyWithText(r);const o=c+1-s;e=this.blockList.splice(s,o,t);}return new this.constructor(e)}moveTextFromRangeToPosition(t,e){let i;t=wt(t);const[n,r]=t;if(n<=e&&e<=r)return this;let o=this.getDocumentAtRange(t),s=this.removeTextAtRange(t);const a=n<e;a&&(e-=o.getLength());const[l,...c]=o.getBlocks();return 0===c.length?(i=l.getTextWithoutBlockBreak(),a&&(e+=1)):i=l.text,s=s.insertTextAtRange(i,e),0===c.length?s:(o=new this.constructor(c),e+=i.getLength(),s.insertDocumentAtRange(o,e))}addAttributeAtRange(t,e,i){let{blockList:n}=this;return this.eachBlockAtRange(i,((i,r,o)=>n=n.editObjectAtIndex(o,(function(){return mt(t)?i.addAttribute(t,e):r[0]===r[1]?i:i.copyWithText(i.text.addAttributeAtRange(t,e,r))})))),new this.constructor(n)}addAttribute(t,e){let{blockList:i}=this;return this.eachBlock(((n,r)=>i=i.editObjectAtIndex(r,(()=>n.addAttribute(t,e))))),new this.constructor(i)}removeAttributeAtRange(t,e){let{blockList:i}=this;return this.eachBlockAtRange(e,(function(e,n,r){mt(t)?i=i.editObjectAtIndex(r,(()=>e.removeAttribute(t))):n[0]!==n[1]&&(i=i.editObjectAtIndex(r,(()=>e.copyWithText(e.text.removeAttributeAtRange(t,n)))));})),new this.constructor(i)}updateAttributesForAttachment(t,e){const i=this.getRangeOfAttachment(e),[n]=Array.from(i),{index:r}=this.locationFromPosition(n),o=this.getTextAtIndex(r);return new this.constructor(this.blockList.editObjectAtIndex(r,(i=>i.copyWithText(o.updateAttributesForAttachment(t,e)))))}removeAttributeForAttachment(t,e){const i=this.getRangeOfAttachment(e);return this.removeAttributeAtRange(t,i)}setHTMLAttributeAtPosition(t,e,i){const n=this.getBlockAtPosition(t),r=n.addHTMLAttribute(e,i);return this.replaceBlock(n,r)}insertBlockBreakAtRange(t){let e;t=wt(t);const[i]=t,{offset:n}=this.locationFromPosition(i),r=this.removeTextAtRange(t);return 0===n&&(e=[new Gi]),new this.constructor(r.blockList.insertSplittableListAtPosition(new zi(e),i))}applyBlockAttributeAtRange(t,e,i){const n=this.expandRangeToLineBreaksAndSplitBlocks(i);let r=n.document;i=n.range;const o=mt(t);if(o.listAttribute){r=r.removeLastListAttributeAtRange(i,{exceptAttributeName:t});const e=r.convertLineBreaksToBlockBreaksInRange(i);r=e.document,i=e.range;}else r=o.exclusive?r.removeBlockAttributesAtRange(i):o.terminal?r.removeLastTerminalAttributeAtRange(i):r.consolidateBlocksAtRange(i);return r.addAttributeAtRange(t,e,i)}removeLastListAttributeAtRange(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{blockList:i}=this;return this.eachBlockAtRange(t,(function(t,n,r){const o=t.getLastAttribute();o&&mt(o).listAttribute&&o!==e.exceptAttributeName&&(i=i.editObjectAtIndex(r,(()=>t.removeAttribute(o))));})),new this.constructor(i)}removeLastTerminalAttributeAtRange(t){let{blockList:e}=this;return this.eachBlockAtRange(t,(function(t,i,n){const r=t.getLastAttribute();r&&mt(r).terminal&&(e=e.editObjectAtIndex(n,(()=>t.removeAttribute(r))));})),new this.constructor(e)}removeBlockAttributesAtRange(t){let{blockList:e}=this;return this.eachBlockAtRange(t,(function(t,i,n){t.hasAttributes()&&(e=e.editObjectAtIndex(n,(()=>t.copyWithoutAttributes())));})),new this.constructor(e)}expandRangeToLineBreaksAndSplitBlocks(t){let e;t=wt(t);let[i,n]=t;const r=this.locationFromPosition(i),o=this.locationFromPosition(n);let s=this;const a=s.getBlockAtIndex(r.index);if(r.offset=a.findLineBreakInDirectionFromPosition("backward",r.offset),null!=r.offset&&(e=s.positionFromLocation(r),s=s.insertBlockBreakAtRange([e,e+1]),o.index+=1,o.offset-=s.getBlockAtIndex(r.index).getLength(),r.index+=1),r.offset=0,0===o.offset&&o.index>r.index)o.index-=1,o.offset=s.getBlockAtIndex(o.index).getBlockBreakPosition();else {const t=s.getBlockAtIndex(o.index);"\n"===t.text.getStringAtRange([o.offset-1,o.offset])?o.offset-=1:o.offset=t.findLineBreakInDirectionFromPosition("forward",o.offset),o.offset!==t.getBlockBreakPosition()&&(e=s.positionFromLocation(o),s=s.insertBlockBreakAtRange([e,e+1]));}return i=s.positionFromLocation(r),n=s.positionFromLocation(o),{document:s,range:t=wt([i,n])}}convertLineBreaksToBlockBreaksInRange(t){t=wt(t);let[e]=t;const i=this.getStringAtRange(t).slice(0,-1);let n=this;return i.replace(/.*?\n/g,(function(t){e+=t.length,n=n.insertBlockBreakAtRange([e-1,e]);})),{document:n,range:t}}consolidateBlocksAtRange(t){t=wt(t);const[e,i]=t,n=this.locationFromPosition(e).index,r=this.locationFromPosition(i).index;return new this.constructor(this.blockList.consolidateFromIndexToIndex(n,r))}getDocumentAtRange(t){t=wt(t);const e=this.blockList.getSplittableListInRange(t).toArray();return new this.constructor(e)}getStringAtRange(t){let e;const i=t=wt(t);return i[i.length-1]!==this.getLength()&&(e=-1),this.getDocumentAtRange(t).toString().slice(0,e)}getBlockAtIndex(t){return this.blockList.getObjectAtIndex(t)}getBlockAtPosition(t){const{index:e}=this.locationFromPosition(t);return this.getBlockAtIndex(e)}getTextAtIndex(t){var e;return null===(e=this.getBlockAtIndex(t))||void 0===e?void 0:e.text}getTextAtPosition(t){const{index:e}=this.locationFromPosition(t);return this.getTextAtIndex(e)}getPieceAtPosition(t){const{index:e,offset:i}=this.locationFromPosition(t);return this.getTextAtIndex(e).getPieceAtPosition(i)}getCharacterAtPosition(t){const{index:e,offset:i}=this.locationFromPosition(t);return this.getTextAtIndex(e).getStringAtRange([i,i+1])}getLength(){return this.blockList.getEndPosition()}getBlocks(){return this.blockList.toArray()}getBlockCount(){return this.blockList.length}getEditCount(){return this.editCount}eachBlock(t){return this.blockList.eachObject(t)}eachBlockAtRange(t,e){let i,n;t=wt(t);const[r,o]=t,s=this.locationFromPosition(r),a=this.locationFromPosition(o);if(s.index===a.index)return i=this.getBlockAtIndex(s.index),n=[s.offset,a.offset],e(i,n,s.index);for(let t=s.index;t<=a.index;t++)if(i=this.getBlockAtIndex(t),i){switch(t){case s.index:n=[s.offset,i.text.getLength()];break;case a.index:n=[0,a.offset];break;default:n=[0,i.text.getLength()];}e(i,n,t);}}getCommonAttributesAtRange(t){t=wt(t);const[e]=t;if(Lt(t))return this.getCommonAttributesAtPosition(e);{const e=[],i=[];return this.eachBlockAtRange(t,(function(t,n){if(n[0]!==n[1])return e.push(t.text.getCommonAttributesAtRange(n)),i.push(sn(t))})),Ht.fromCommonAttributesOfObjects(e).merge(Ht.fromCommonAttributesOfObjects(i)).toObject()}}getCommonAttributesAtPosition(t){let e,i;const{index:n,offset:r}=this.locationFromPosition(t),o=this.getBlockAtIndex(n);if(!o)return {};const s=sn(o),a=o.text.getAttributesAtPosition(r),l=o.text.getAttributesAtPosition(r-1),c=Object.keys(W).filter((t=>W[t].inheritable));for(e in l)i=l[e],(i===a[e]||c.includes(e))&&(s[e]=i);return s}getRangeOfCommonAttributeAtPosition(t,e){const{index:i,offset:n}=this.locationFromPosition(e),r=this.getTextAtIndex(i),[o,s]=Array.from(r.getExpandedRangeForAttributeAtOffset(t,n)),a=this.positionFromLocation({index:i,offset:o}),l=this.positionFromLocation({index:i,offset:s});return wt([a,l])}getBaseBlockAttributes(){let t=this.getBlockAtIndex(0).getAttributes();for(let e=1;e<this.getBlockCount();e++){const i=this.getBlockAtIndex(e).getAttributes(),n=Math.min(t.length,i.length);t=(()=>{const e=[];for(let r=0;r<n&&i[r]===t[r];r++)e.push(i[r]);return e})();}return t}getAttachmentById(t){for(const e of this.getAttachments())if(e.id===t)return e}getAttachmentPieces(){let t=[];return this.blockList.eachObject((e=>{let{text:i}=e;return t=t.concat(i.getAttachmentPieces())})),t}getAttachments(){return this.getAttachmentPieces().map((t=>t.attachment))}getRangeOfAttachment(t){let e=0;const i=this.blockList.toArray();for(let n=0;n<i.length;n++){const{text:r}=i[n],o=r.getRangeOfAttachment(t);if(o)return wt([e+o[0],e+o[1]]);e+=r.getLength();}}getLocationRangeOfAttachment(t){const e=this.getRangeOfAttachment(t);return this.locationRangeFromRange(e)}getAttachmentPieceForAttachment(t){for(const e of this.getAttachmentPieces())if(e.attachment===t)return e}findRangesForBlockAttribute(t){let e=0;const i=[];return this.getBlocks().forEach((n=>{const r=n.getLength();n.hasAttribute(t)&&i.push([e,e+r]),e+=r;})),i}findRangesForTextAttribute(t){let{withValue:e}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=0,n=[];const r=[];return this.getPieces().forEach((o=>{const s=o.getLength();((function(i){return e?i.getAttribute(t)===e:i.hasAttribute(t)}))(o)&&(n[1]===i?n[1]=i+s:r.push(n=[i,i+s])),i+=s;})),r}locationFromPosition(t){const e=this.blockList.findIndexAndOffsetAtPosition(Math.max(0,t));if(null!=e.index)return e;{const t=this.getBlocks();return {index:t.length-1,offset:t[t.length-1].getLength()}}}positionFromLocation(t){return this.blockList.findPositionAtIndexAndOffset(t.index,t.offset)}locationRangeFromPosition(t){return wt(this.locationFromPosition(t))}locationRangeFromRange(t){if(!(t=wt(t)))return;const[e,i]=Array.from(t),n=this.locationFromPosition(e),r=this.locationFromPosition(i);return wt([n,r])}rangeFromLocationRange(t){let e;t=wt(t);const i=this.positionFromLocation(t[0]);return Lt(t)||(e=this.positionFromLocation(t[1])),wt([i,e])}isEqualTo(t){return this.blockList.isEqualTo(null==t?void 0:t.blockList)}getTexts(){return this.getBlocks().map((t=>t.text))}getPieces(){const t=[];return Array.from(this.getTexts()).forEach((e=>{t.push(...Array.from(e.getPieces()||[]));})),t}getObjects(){return this.getBlocks().concat(this.getTexts()).concat(this.getPieces())}toSerializableDocument(){const t=[];return this.blockList.eachObject((e=>t.push(e.copyWithText(e.text.toSerializableText())))),new this.constructor(t)}toString(){return this.blockList.toString()}toJSON(){return this.blockList.toJSON()}toConsole(){return JSON.stringify(this.blockList.toArray().map((t=>JSON.parse(t.text.toConsole()))))}}const sn=function(t){const e={},i=t.getLastAttribute();return i&&(e[i]=!0),e},an=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return {string:t=Wt(t),attributes:e,type:"string"}},ln=(t,e)=>{try{return JSON.parse(t.getAttribute("data-trix-".concat(e)))}catch(t){return {}}};class cn extends q{static parse(t,e){const i=new this(t,e);return i.parse(),i}constructor(t){let{referenceElement:e}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(...arguments),this.html=t,this.referenceElement=e,this.blocks=[],this.blockElements=[],this.processedElements=[];}getDocument(){return on.fromJSON(this.blocks)}parse(){try{this.createHiddenContainer(),ui.setHTML(this.containerElement,this.html);const t=R(this.containerElement,{usingFilter:gn});for(;t.nextNode();)this.processNode(t.currentNode);return this.translateBlockElementMarginsToNewlines()}finally{this.removeHiddenContainer();}}createHiddenContainer(){return this.referenceElement?(this.containerElement=this.referenceElement.cloneNode(!1),this.containerElement.removeAttribute("id"),this.containerElement.setAttribute("data-trix-internal",""),this.containerElement.style.display="none",this.referenceElement.parentNode.insertBefore(this.containerElement,this.referenceElement.nextSibling)):(this.containerElement=T({tagName:"div",style:{display:"none"}}),document.body.appendChild(this.containerElement))}removeHiddenContainer(){return S(this.containerElement)}processNode(t){switch(t.nodeType){case Node.TEXT_NODE:if(!this.isInsignificantTextNode(t))return this.appendBlockForTextNode(t),this.processTextNode(t);break;case Node.ELEMENT_NODE:return this.appendBlockForElement(t),this.processElement(t)}}appendBlockForTextNode(t){const e=t.parentNode;if(e===this.currentBlockElement&&this.isBlockElement(t.previousSibling))return this.appendStringWithAttributes("\n");if(e===this.containerElement||this.isBlockElement(e)){var i;const t=this.getBlockAttributes(e),n=this.getBlockHTMLAttributes(e);ot(t,null===(i=this.currentBlock)||void 0===i?void 0:i.attributes)||(this.currentBlock=this.appendBlockForAttributesWithElement(t,e,n),this.currentBlockElement=e);}}appendBlockForElement(t){const e=this.isBlockElement(t),i=C(this.currentBlockElement,t);if(e&&!this.isBlockElement(t.firstChild)){if(!this.isInsignificantTextNode(t.firstChild)||!this.isBlockElement(t.firstElementChild)){const e=this.getBlockAttributes(t),n=this.getBlockHTMLAttributes(t);if(t.firstChild){if(i&&ot(e,this.currentBlock.attributes))return this.appendStringWithAttributes("\n");this.currentBlock=this.appendBlockForAttributesWithElement(e,t,n),this.currentBlockElement=t;}}}else if(this.currentBlockElement&&!i&&!e){const e=this.findParentBlockElement(t);if(e)return this.appendBlockForElement(e);this.currentBlock=this.appendEmptyBlock(),this.currentBlockElement=null;}}findParentBlockElement(t){let{parentElement:e}=t;for(;e&&e!==this.containerElement;){if(this.isBlockElement(e)&&this.blockElements.includes(e))return e;e=e.parentElement;}return null}processTextNode(t){let e=t.data;var i;un(t.parentNode)||(e=Vt(e),fn(null===(i=t.previousSibling)||void 0===i?void 0:i.textContent)&&(e=mn(e)));return this.appendStringWithAttributes(e,this.getTextAttributes(t.parentNode))}processElement(t){let e;if(P(t)){if(e=ln(t,"attachment"),Object.keys(e).length){const i=this.getTextAttributes(t);this.appendAttachmentWithAttributes(e,i),t.innerHTML="";}return this.processedElements.push(t)}switch(k(t)){case"br":return this.isExtraBR(t)||this.isBlockElement(t.nextSibling)||this.appendStringWithAttributes("\n",this.getTextAttributes(t)),this.processedElements.push(t);case"img":e={url:t.getAttribute("src"),contentType:"image"};const i=(t=>{const e=t.getAttribute("width"),i=t.getAttribute("height"),n={};return e&&(n.width=parseInt(e,10)),i&&(n.height=parseInt(i,10)),n})(t);for(const t in i){const n=i[t];e[t]=n;}return this.appendAttachmentWithAttributes(e,this.getTextAttributes(t)),this.processedElements.push(t);case"tr":if(this.needsTableSeparator(t))return this.appendStringWithAttributes(j.tableRowSeparator);break;case"td":if(this.needsTableSeparator(t))return this.appendStringWithAttributes(j.tableCellSeparator)}}appendBlockForAttributesWithElement(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.blockElements.push(e);const n=function(){return {text:[],attributes:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},htmlAttributes:arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}}}(t,i);return this.blocks.push(n),n}appendEmptyBlock(){return this.appendBlockForAttributesWithElement([],null)}appendStringWithAttributes(t,e){return this.appendPiece(an(t,e))}appendAttachmentWithAttributes(t,e){return this.appendPiece(function(t){return {attachment:t,attributes:arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},type:"attachment"}}(t,e))}appendPiece(t){return 0===this.blocks.length&&this.appendEmptyBlock(),this.blocks[this.blocks.length-1].text.push(t)}appendStringToTextAtIndex(t,e){const{text:i}=this.blocks[e],n=i[i.length-1];if("string"!==(null==n?void 0:n.type))return i.push(an(t));n.string+=t;}prependStringToTextAtIndex(t,e){const{text:i}=this.blocks[e],n=i[0];if("string"!==(null==n?void 0:n.type))return i.unshift(an(t));n.string=t+n.string;}getTextAttributes(t){let e;const i={};for(const n in W){const r=W[n];if(r.tagName&&y(t,{matchingSelector:r.tagName,untilNode:this.containerElement}))i[n]=!0;else if(r.parser){if(e=r.parser(t),e){let o=!1;for(const i of this.findBlockElementAncestors(t))if(r.parser(i)===e){o=!0;break}o||(i[n]=e);}}else r.styleProperty&&(e=t.style[r.styleProperty],e&&(i[n]=e));}if(P(t)){const n=ln(t,"attributes");for(const t in n)e=n[t],i[t]=e;}return i}getBlockAttributes(t){const e=[];for(;t&&t!==this.containerElement;){for(const r in n){const o=n[r];var i;if(!1!==o.parse)if(k(t)===o.tagName)(null!==(i=o.test)&&void 0!==i&&i.call(o,t)||!o.test)&&(e.push(r),o.listAttribute&&e.push(o.listAttribute));}t=t.parentNode;}return e.reverse()}getBlockHTMLAttributes(t){const e={},i=Object.values(n).find((e=>e.tagName===k(t)));return ((null==i?void 0:i.htmlAttributes)||[]).forEach((i=>{t.hasAttribute(i)&&(e[i]=t.getAttribute(i));})),e}findBlockElementAncestors(t){const e=[];for(;t&&t!==this.containerElement;){const i=k(t);L().includes(i)&&e.push(t),t=t.parentNode;}return e}isBlockElement(t){if((null==t?void 0:t.nodeType)===Node.ELEMENT_NODE&&!P(t)&&!y(t,{matchingSelector:"td",untilNode:this.containerElement}))return L().includes(k(t))||"block"===window.getComputedStyle(t).display}isInsignificantTextNode(t){if((null==t?void 0:t.nodeType)!==Node.TEXT_NODE)return;if(!pn(t.data))return;const{parentNode:e,previousSibling:i,nextSibling:n}=t;return hn(e.previousSibling)&&!this.isBlockElement(e.previousSibling)||un(e)?void 0:!i||this.isBlockElement(i)||!n||this.isBlockElement(n)}isExtraBR(t){return "br"===k(t)&&this.isBlockElement(t.parentNode)&&t.parentNode.lastChild===t}needsTableSeparator(t){if(j.removeBlankTableCells){var e;const i=null===(e=t.previousSibling)||void 0===e?void 0:e.textContent;return i&&/\S/.test(i)}return t.previousSibling}translateBlockElementMarginsToNewlines(){const t=this.getMarginOfDefaultBlockElement();for(let e=0;e<this.blocks.length;e++){const i=this.getMarginOfBlockElementAtIndex(e);i&&(i.top>2*t.top&&this.prependStringToTextAtIndex("\n",e),i.bottom>2*t.bottom&&this.appendStringToTextAtIndex("\n",e));}}getMarginOfBlockElementAtIndex(t){const e=this.blockElements[t];if(e&&e.textContent&&!L().includes(k(e))&&!this.processedElements.includes(e))return dn(e)}getMarginOfDefaultBlockElement(){const t=T(n.default.tagName);return this.containerElement.appendChild(t),dn(t)}}const un=function(t){const{whiteSpace:e}=window.getComputedStyle(t);return ["pre","pre-wrap","pre-line"].includes(e)},hn=t=>t&&!fn(t.textContent),dn=function(t){const e=window.getComputedStyle(t);if("block"===e.display)return {top:parseInt(e.marginTop),bottom:parseInt(e.marginBottom)}},gn=function(t){return "style"===k(t)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},mn=t=>t.replace(new RegExp("^".concat(Ut.source,"+")),""),pn=t=>new RegExp("^".concat(Ut.source,"*$")).test(t),fn=t=>/\s$/.test(t),bn=["contenteditable","data-trix-id","data-trix-store-key","data-trix-mutable","data-trix-placeholder","tabindex"],vn="data-trix-serialized-attributes",An="[".concat(vn,"]"),yn=new RegExp("\x3c!--block--\x3e","g"),xn={"application/json":function(t){let e;if(t instanceof on)e=t;else {if(!(t instanceof HTMLElement))throw new Error("unserializable object");e=cn.parse(t.innerHTML).getDocument();}return e.toSerializableDocument().toJSONString()},"text/html":function(t){let e;if(t instanceof on)e=Ci.render(t);else {if(!(t instanceof HTMLElement))throw new Error("unserializable object");e=t.cloneNode(!0);}return Array.from(e.querySelectorAll("[data-trix-serialize=false]")).forEach((t=>{S(t);})),bn.forEach((t=>{Array.from(e.querySelectorAll("[".concat(t,"]"))).forEach((e=>{e.removeAttribute(t);}));})),Array.from(e.querySelectorAll(An)).forEach((t=>{try{const e=JSON.parse(t.getAttribute(vn));t.removeAttribute(vn);for(const i in e){const n=e[i];t.setAttribute(i,n);}}catch(t){}})),e.innerHTML.replace(yn,"")}};var Cn=Object.freeze({__proto__:null});class En extends q{constructor(t,e){super(...arguments),this.attachmentManager=t,this.attachment=e,this.id=this.attachment.id,this.file=this.attachment.file;}remove(){return this.attachmentManager.requestRemovalOfAttachment(this.attachment)}}En.proxyMethod("attachment.getAttribute"),En.proxyMethod("attachment.hasAttribute"),En.proxyMethod("attachment.setAttribute"),En.proxyMethod("attachment.getAttributes"),En.proxyMethod("attachment.setAttributes"),En.proxyMethod("attachment.isPending"),En.proxyMethod("attachment.isPreviewable"),En.proxyMethod("attachment.getURL"),En.proxyMethod("attachment.getHref"),En.proxyMethod("attachment.getFilename"),En.proxyMethod("attachment.getFilesize"),En.proxyMethod("attachment.getFormattedFilesize"),En.proxyMethod("attachment.getExtension"),En.proxyMethod("attachment.getContentType"),En.proxyMethod("attachment.getFile"),En.proxyMethod("attachment.setFile"),En.proxyMethod("attachment.releaseFile"),En.proxyMethod("attachment.getUploadProgress"),En.proxyMethod("attachment.setUploadProgress");class Sn extends q{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];super(...arguments),this.managedAttachments={},Array.from(t).forEach((t=>{this.manageAttachment(t);}));}getAttachments(){const t=[];for(const e in this.managedAttachments){const i=this.managedAttachments[e];t.push(i);}return t}manageAttachment(t){return this.managedAttachments[t.id]||(this.managedAttachments[t.id]=new En(this,t)),this.managedAttachments[t.id]}attachmentIsManaged(t){return t.id in this.managedAttachments}requestRemovalOfAttachment(t){var e,i;if(this.attachmentIsManaged(t))return null===(e=this.delegate)||void 0===e||null===(i=e.attachmentManagerDidRequestRemovalOfAttachment)||void 0===i?void 0:i.call(e,t)}unmanageAttachment(t){const e=this.managedAttachments[t.id];return delete this.managedAttachments[t.id],e}}class Rn{constructor(t){this.composition=t,this.document=this.composition.document;const e=this.composition.getSelectedRange();this.startPosition=e[0],this.endPosition=e[1],this.startLocation=this.document.locationFromPosition(this.startPosition),this.endLocation=this.document.locationFromPosition(this.endPosition),this.block=this.document.getBlockAtIndex(this.endLocation.index),this.breaksOnReturn=this.block.breaksOnReturn(),this.previousCharacter=this.block.text.getStringAtPosition(this.endLocation.offset-1),this.nextCharacter=this.block.text.getStringAtPosition(this.endLocation.offset);}shouldInsertBlockBreak(){return this.block.hasAttributes()&&this.block.isListItem()&&!this.block.isEmpty()?0!==this.startLocation.offset:this.breaksOnReturn&&"\n"!==this.nextCharacter}shouldBreakFormattedBlock(){return this.block.hasAttributes()&&!this.block.isListItem()&&(this.breaksOnReturn&&"\n"===this.nextCharacter||"\n"===this.previousCharacter)}shouldDecreaseListLevel(){return this.block.hasAttributes()&&this.block.isListItem()&&this.block.isEmpty()}shouldPrependListItem(){return this.block.isListItem()&&0===this.startLocation.offset&&!this.block.isEmpty()}shouldRemoveLastBlockAttribute(){return this.block.hasAttributes()&&!this.block.isListItem()&&this.block.isEmpty()}}class kn extends q{constructor(){super(...arguments),this.document=new on,this.attachments=[],this.currentAttributes={},this.revision=0;}setDocument(t){var e,i;if(!t.isEqualTo(this.document))return this.document=t,this.refreshAttachments(),this.revision++,null===(e=this.delegate)||void 0===e||null===(i=e.compositionDidChangeDocument)||void 0===i?void 0:i.call(e,t)}getSnapshot(){return {document:this.document,selectedRange:this.getSelectedRange()}}loadSnapshot(t){var e,i,n,r;let{document:o,selectedRange:s}=t;return null===(e=this.delegate)||void 0===e||null===(i=e.compositionWillLoadSnapshot)||void 0===i||i.call(e),this.setDocument(null!=o?o:new on),this.setSelection(null!=s?s:[0,0]),null===(n=this.delegate)||void 0===n||null===(r=n.compositionDidLoadSnapshot)||void 0===r?void 0:r.call(n)}insertText(t){let{updatePosition:e}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{updatePosition:!0};const i=this.getSelectedRange();this.setDocument(this.document.insertTextAtRange(t,i));const n=i[0],r=n+t.getLength();return e&&this.setSelection(r),this.notifyDelegateOfInsertionAtRange([n,r])}insertBlock(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Gi;const e=new on([t]);return this.insertDocument(e)}insertDocument(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new on;const e=this.getSelectedRange();this.setDocument(this.document.insertDocumentAtRange(t,e));const i=e[0],n=i+t.getLength();return this.setSelection(n),this.notifyDelegateOfInsertionAtRange([i,n])}insertString(t,e){const i=this.getCurrentTextAttributes(),n=Ki.textForStringWithAttributes(t,i);return this.insertText(n,e)}insertBlockBreak(){const t=this.getSelectedRange();this.setDocument(this.document.insertBlockBreakAtRange(t));const e=t[0],i=e+1;return this.setSelection(i),this.notifyDelegateOfInsertionAtRange([e,i])}insertLineBreak(){const t=new Rn(this);if(t.shouldDecreaseListLevel())return this.decreaseListLevel(),this.setSelection(t.startPosition);if(t.shouldPrependListItem()){const e=new on([t.block.copyWithoutText()]);return this.insertDocument(e)}return t.shouldInsertBlockBreak()?this.insertBlockBreak():t.shouldRemoveLastBlockAttribute()?this.removeLastBlockAttribute():t.shouldBreakFormattedBlock()?this.breakFormattedBlock(t):this.insertString("\n")}insertHTML(t){const e=cn.parse(t).getDocument(),i=this.getSelectedRange();this.setDocument(this.document.mergeDocumentAtRange(e,i));const n=i[0],r=n+e.getLength()-1;return this.setSelection(r),this.notifyDelegateOfInsertionAtRange([n,r])}replaceHTML(t){const e=cn.parse(t).getDocument().copyUsingObjectsFromDocument(this.document),i=this.getLocationRange({strict:!1}),n=this.document.rangeFromLocationRange(i);return this.setDocument(e),this.setSelection(n)}insertFile(t){return this.insertFiles([t])}insertFiles(t){const e=[];return Array.from(t).forEach((t=>{var i;if(null!==(i=this.delegate)&&void 0!==i&&i.compositionShouldAcceptFile(t)){const i=Wi.attachmentForFile(t);e.push(i);}})),this.insertAttachments(e)}insertAttachment(t){return this.insertAttachments([t])}insertAttachments(t){let e=new Ki;return Array.from(t).forEach((t=>{var n;const r=t.getType(),o=null===(n=i[r])||void 0===n?void 0:n.presentation,s=this.getCurrentTextAttributes();o&&(s.presentation=o);const a=Ki.textForAttachmentWithAttributes(t,s);e=e.appendText(a);})),this.insertText(e)}shouldManageDeletingInDirection(t){const e=this.getLocationRange();if(Lt(e)){if("backward"===t&&0===e[0].offset)return !0;if(this.shouldManageMovingCursorInDirection(t))return !0}else if(e[0].index!==e[1].index)return !0;return !1}deleteInDirection(t){let e,i,n,{length:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=this.getLocationRange();let s=this.getSelectedRange();const a=Lt(s);if(a?i="backward"===t&&0===o[0].offset:n=o[0].index!==o[1].index,i&&this.canDecreaseBlockAttributeLevel()){const t=this.getBlock();if(t.isListItem()?this.decreaseListLevel():this.decreaseBlockAttributeLevel(),this.setSelection(s[0]),t.isEmpty())return !1}return a&&(s=this.getExpandedRangeInDirection(t,{length:r}),"backward"===t&&(e=this.getAttachmentAtRange(s))),e?(this.editAttachment(e),!1):(this.setDocument(this.document.removeTextAtRange(s)),this.setSelection(s[0]),!i&&!n&&void 0)}moveTextFromRange(t){const[e]=Array.from(this.getSelectedRange());return this.setDocument(this.document.moveTextFromRangeToPosition(t,e)),this.setSelection(e)}removeAttachment(t){const e=this.document.getRangeOfAttachment(t);if(e)return this.stopEditingAttachment(),this.setDocument(this.document.removeTextAtRange(e)),this.setSelection(e[0])}removeLastBlockAttribute(){const[t,e]=Array.from(this.getSelectedRange()),i=this.document.getBlockAtPosition(e);return this.removeCurrentAttribute(i.getLastAttribute()),this.setSelection(t)}insertPlaceholder(){return this.placeholderPosition=this.getPosition(),this.insertString(" ")}selectPlaceholder(){if(null!=this.placeholderPosition)return this.setSelectedRange([this.placeholderPosition,this.placeholderPosition+1]),this.getSelectedRange()}forgetPlaceholder(){this.placeholderPosition=null;}hasCurrentAttribute(t){const e=this.currentAttributes[t];return null!=e&&!1!==e}toggleCurrentAttribute(t){const e=!this.currentAttributes[t];return e?this.setCurrentAttribute(t,e):this.removeCurrentAttribute(t)}canSetCurrentAttribute(t){return mt(t)?this.canSetCurrentBlockAttribute(t):this.canSetCurrentTextAttribute(t)}canSetCurrentTextAttribute(t){const e=this.getSelectedDocument();if(e){for(const t of Array.from(e.getAttachments()))if(!t.hasContent())return !1;return !0}}canSetCurrentBlockAttribute(t){const e=this.getBlock();if(e)return !e.isTerminalBlock()}setCurrentAttribute(t,e){return mt(t)?this.setBlockAttribute(t,e):(this.setTextAttribute(t,e),this.currentAttributes[t]=e,this.notifyDelegateOfCurrentAttributesChange())}setHTMLAtributeAtPosition(t,e,i){var n;const r=this.document.getBlockAtPosition(t),o=null===(n=mt(r.getLastAttribute()))||void 0===n?void 0:n.htmlAttributes;if(r&&null!=o&&o.includes(e)){const n=this.document.setHTMLAttributeAtPosition(t,e,i);this.setDocument(n);}}setTextAttribute(t,e){const i=this.getSelectedRange();if(!i)return;const[n,r]=Array.from(i);if(n!==r)return this.setDocument(this.document.addAttributeAtRange(t,e,i));if("href"===t){const t=Ki.textForStringWithAttributes(e,{href:e});return this.insertText(t)}}setBlockAttribute(t,e){const i=this.getSelectedRange();if(this.canSetCurrentAttribute(t))return this.setDocument(this.document.applyBlockAttributeAtRange(t,e,i)),this.setSelection(i)}removeCurrentAttribute(t){return mt(t)?(this.removeBlockAttribute(t),this.updateCurrentAttributes()):(this.removeTextAttribute(t),delete this.currentAttributes[t],this.notifyDelegateOfCurrentAttributesChange())}removeTextAttribute(t){const e=this.getSelectedRange();if(e)return this.setDocument(this.document.removeAttributeAtRange(t,e))}removeBlockAttribute(t){const e=this.getSelectedRange();if(e)return this.setDocument(this.document.removeAttributeAtRange(t,e))}canDecreaseNestingLevel(){var t;return (null===(t=this.getBlock())||void 0===t?void 0:t.getNestingLevel())>0}canIncreaseNestingLevel(){var t;const e=this.getBlock();if(e){if(null===(t=mt(e.getLastNestableAttribute()))||void 0===t||!t.listAttribute)return e.getNestingLevel()>0;{const t=this.getPreviousBlock();if(t)return function(){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return ot((arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).slice(0,t.length),t)}(t.getListItemAttributes(),e.getListItemAttributes())}}}decreaseNestingLevel(){const t=this.getBlock();if(t)return this.setDocument(this.document.replaceBlock(t,t.decreaseNestingLevel()))}increaseNestingLevel(){const t=this.getBlock();if(t)return this.setDocument(this.document.replaceBlock(t,t.increaseNestingLevel()))}canDecreaseBlockAttributeLevel(){var t;return (null===(t=this.getBlock())||void 0===t?void 0:t.getAttributeLevel())>0}decreaseBlockAttributeLevel(){var t;const e=null===(t=this.getBlock())||void 0===t?void 0:t.getLastAttribute();if(e)return this.removeCurrentAttribute(e)}decreaseListLevel(){let[t]=Array.from(this.getSelectedRange());const{index:e}=this.document.locationFromPosition(t);let i=e;const n=this.getBlock().getAttributeLevel();let r=this.document.getBlockAtIndex(i+1);for(;r&&r.isListItem()&&!(r.getAttributeLevel()<=n);)i++,r=this.document.getBlockAtIndex(i+1);t=this.document.positionFromLocation({index:e,offset:0});const o=this.document.positionFromLocation({index:i,offset:0});return this.setDocument(this.document.removeLastListAttributeAtRange([t,o]))}updateCurrentAttributes(){const t=this.getSelectedRange({ignoreLock:!0});if(t){const e=this.document.getCommonAttributesAtRange(t);if(Array.from(gt()).forEach((t=>{e[t]||this.canSetCurrentAttribute(t)||(e[t]=!1);})),!Tt(e,this.currentAttributes))return this.currentAttributes=e,this.notifyDelegateOfCurrentAttributesChange()}}getCurrentAttributes(){return m.call({},this.currentAttributes)}getCurrentTextAttributes(){const t={};for(const e in this.currentAttributes){const i=this.currentAttributes[e];!1!==i&&ft(e)&&(t[e]=i);}return t}freezeSelection(){return this.setCurrentAttribute("frozen",!0)}thawSelection(){return this.removeCurrentAttribute("frozen")}hasFrozenSelection(){return this.hasCurrentAttribute("frozen")}setSelection(t){var e;const i=this.document.locationRangeFromRange(t);return null===(e=this.delegate)||void 0===e?void 0:e.compositionDidRequestChangingSelectionToLocationRange(i)}getSelectedRange(){const t=this.getLocationRange();if(t)return this.document.rangeFromLocationRange(t)}setSelectedRange(t){const e=this.document.locationRangeFromRange(t);return this.getSelectionManager().setLocationRange(e)}getPosition(){const t=this.getLocationRange();if(t)return this.document.positionFromLocation(t[0])}getLocationRange(t){return this.targetLocationRange?this.targetLocationRange:this.getSelectionManager().getLocationRange(t)||wt({index:0,offset:0})}withTargetLocationRange(t,e){let i;this.targetLocationRange=t;try{i=e();}finally{this.targetLocationRange=null;}return i}withTargetRange(t,e){const i=this.document.locationRangeFromRange(t);return this.withTargetLocationRange(i,e)}withTargetDOMRange(t,e){const i=this.createLocationRangeFromDOMRange(t,{strict:!1});return this.withTargetLocationRange(i,e)}getExpandedRangeInDirection(t){let{length:e}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[i,n]=Array.from(this.getSelectedRange());return "backward"===t?e?i-=e:i=this.translateUTF16PositionFromOffset(i,-1):e?n+=e:n=this.translateUTF16PositionFromOffset(n,1),wt([i,n])}shouldManageMovingCursorInDirection(t){if(this.editingAttachment)return !0;const e=this.getExpandedRangeInDirection(t);return null!=this.getAttachmentAtRange(e)}moveCursorInDirection(t){let e,i;if(this.editingAttachment)i=this.document.getRangeOfAttachment(this.editingAttachment);else {const n=this.getSelectedRange();i=this.getExpandedRangeInDirection(t),e=!Dt(n,i);}if("backward"===t?this.setSelectedRange(i[0]):this.setSelectedRange(i[1]),e){const t=this.getAttachmentAtRange(i);if(t)return this.editAttachment(t)}}expandSelectionInDirection(t){let{length:e}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=this.getExpandedRangeInDirection(t,{length:e});return this.setSelectedRange(i)}expandSelectionForEditing(){if(this.hasCurrentAttribute("href"))return this.expandSelectionAroundCommonAttribute("href")}expandSelectionAroundCommonAttribute(t){const e=this.getPosition(),i=this.document.getRangeOfCommonAttributeAtPosition(t,e);return this.setSelectedRange(i)}selectionContainsAttachments(){var t;return (null===(t=this.getSelectedAttachments())||void 0===t?void 0:t.length)>0}selectionIsInCursorTarget(){return this.editingAttachment||this.positionIsCursorTarget(this.getPosition())}positionIsCursorTarget(t){const e=this.document.locationFromPosition(t);if(e)return this.locationIsCursorTarget(e)}positionIsBlockBreak(t){var e;return null===(e=this.document.getPieceAtPosition(t))||void 0===e?void 0:e.isBlockBreak()}getSelectedDocument(){const t=this.getSelectedRange();if(t)return this.document.getDocumentAtRange(t)}getSelectedAttachments(){var t;return null===(t=this.getSelectedDocument())||void 0===t?void 0:t.getAttachments()}getAttachments(){return this.attachments.slice(0)}refreshAttachments(){const t=this.document.getAttachments(),{added:e,removed:i}=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const i=[],n=[],r=new Set;t.forEach((t=>{r.add(t);}));const o=new Set;return e.forEach((t=>{o.add(t),r.has(t)||i.push(t);})),t.forEach((t=>{o.has(t)||n.push(t);})),{added:i,removed:n}}(this.attachments,t);return this.attachments=t,Array.from(i).forEach((t=>{var e,i;t.delegate=null,null===(e=this.delegate)||void 0===e||null===(i=e.compositionDidRemoveAttachment)||void 0===i||i.call(e,t);})),(()=>{const t=[];return Array.from(e).forEach((e=>{var i,n;e.delegate=this,t.push(null===(i=this.delegate)||void 0===i||null===(n=i.compositionDidAddAttachment)||void 0===n?void 0:n.call(i,e));})),t})()}attachmentDidChangeAttributes(t){var e,i;return this.revision++,null===(e=this.delegate)||void 0===e||null===(i=e.compositionDidEditAttachment)||void 0===i?void 0:i.call(e,t)}attachmentDidChangePreviewURL(t){var e,i;return this.revision++,null===(e=this.delegate)||void 0===e||null===(i=e.compositionDidChangeAttachmentPreviewURL)||void 0===i?void 0:i.call(e,t)}editAttachment(t,e){var i,n;if(t!==this.editingAttachment)return this.stopEditingAttachment(),this.editingAttachment=t,null===(i=this.delegate)||void 0===i||null===(n=i.compositionDidStartEditingAttachment)||void 0===n?void 0:n.call(i,this.editingAttachment,e)}stopEditingAttachment(){var t,e;this.editingAttachment&&(null===(t=this.delegate)||void 0===t||null===(e=t.compositionDidStopEditingAttachment)||void 0===e||e.call(t,this.editingAttachment),this.editingAttachment=null);}updateAttributesForAttachment(t,e){return this.setDocument(this.document.updateAttributesForAttachment(t,e))}removeAttributeForAttachment(t,e){return this.setDocument(this.document.removeAttributeForAttachment(t,e))}breakFormattedBlock(t){let{document:e}=t;const{block:i}=t;let n=t.startPosition,r=[n-1,n];i.getBlockBreakPosition()===t.startLocation.offset?(i.breaksOnReturn()&&"\n"===t.nextCharacter?n+=1:e=e.removeTextAtRange(r),r=[n,n]):"\n"===t.nextCharacter?"\n"===t.previousCharacter?r=[n-1,n+1]:(r=[n,n+1],n+=1):t.startLocation.offset-1!=0&&(n+=1);const o=new on([i.removeLastAttribute().copyWithoutText()]);return this.setDocument(e.insertDocumentAtRange(o,r)),this.setSelection(n)}getPreviousBlock(){const t=this.getLocationRange();if(t){const{index:e}=t[0];if(e>0)return this.document.getBlockAtIndex(e-1)}}getBlock(){const t=this.getLocationRange();if(t)return this.document.getBlockAtIndex(t[0].index)}getAttachmentAtRange(t){const e=this.document.getDocumentAtRange(t);if(e.toString()==="".concat("￼","\n"))return e.getAttachments()[0]}notifyDelegateOfCurrentAttributesChange(){var t,e;return null===(t=this.delegate)||void 0===t||null===(e=t.compositionDidChangeCurrentAttributes)||void 0===e?void 0:e.call(t,this.currentAttributes)}notifyDelegateOfInsertionAtRange(t){var e,i;return null===(e=this.delegate)||void 0===e||null===(i=e.compositionDidPerformInsertionAtRange)||void 0===i?void 0:i.call(e,t)}translateUTF16PositionFromOffset(t,e){const i=this.document.toUTF16String(),n=i.offsetFromUCS2Offset(t);return i.offsetToUCS2Offset(n+e)}}kn.proxyMethod("getSelectionManager().getPointRange"),kn.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"),kn.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"),kn.proxyMethod("getSelectionManager().locationIsCursorTarget"),kn.proxyMethod("getSelectionManager().selectionIsExpanded"),kn.proxyMethod("delegate?.getSelectionManager");class Tn extends q{constructor(t){super(...arguments),this.composition=t,this.undoEntries=[],this.redoEntries=[];}recordUndoEntry(t){let{context:e,consolidatable:i}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=this.undoEntries.slice(-1)[0];if(!i||!wn(n,t,e)){const i=this.createEntry({description:t,context:e});this.undoEntries.push(i),this.redoEntries=[];}}undo(){const t=this.undoEntries.pop();if(t){const e=this.createEntry(t);return this.redoEntries.push(e),this.composition.loadSnapshot(t.snapshot)}}redo(){const t=this.redoEntries.pop();if(t){const e=this.createEntry(t);return this.undoEntries.push(e),this.composition.loadSnapshot(t.snapshot)}}canUndo(){return this.undoEntries.length>0}canRedo(){return this.redoEntries.length>0}createEntry(){let{description:t,context:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return {description:null==t?void 0:t.toString(),context:JSON.stringify(e),snapshot:this.composition.getSnapshot()}}}const wn=(t,e,i)=>(null==t?void 0:t.description)===(null==e?void 0:e.toString())&&(null==t?void 0:t.context)===JSON.stringify(i),Ln="attachmentGallery";class Dn{constructor(t){this.document=t.document,this.selectedRange=t.selectedRange;}perform(){return this.removeBlockAttribute(),this.applyBlockAttribute()}getSnapshot(){return {document:this.document,selectedRange:this.selectedRange}}removeBlockAttribute(){return this.findRangesOfBlocks().map((t=>this.document=this.document.removeAttributeAtRange(Ln,t)))}applyBlockAttribute(){let t=0;this.findRangesOfPieces().forEach((e=>{e[1]-e[0]>1&&(e[0]+=t,e[1]+=t,"\n"!==this.document.getCharacterAtPosition(e[1])&&(this.document=this.document.insertBlockBreakAtRange(e[1]),e[1]<this.selectedRange[1]&&this.moveSelectedRangeForward(),e[1]++,t++),0!==e[0]&&"\n"!==this.document.getCharacterAtPosition(e[0]-1)&&(this.document=this.document.insertBlockBreakAtRange(e[0]),e[0]<this.selectedRange[0]&&this.moveSelectedRangeForward(),e[0]++,t++),this.document=this.document.applyBlockAttributeAtRange(Ln,!0,e));}));}findRangesOfBlocks(){return this.document.findRangesForBlockAttribute(Ln)}findRangesOfPieces(){return this.document.findRangesForTextAttribute("presentation",{withValue:"gallery"})}moveSelectedRangeForward(){this.selectedRange[0]+=1,this.selectedRange[1]+=1;}}const Nn=function(t){const e=new Dn(t);return e.perform(),e.getSnapshot()},In=[Nn];class On{constructor(t,e,i){this.insertFiles=this.insertFiles.bind(this),this.composition=t,this.selectionManager=e,this.element=i,this.undoManager=new Tn(this.composition),this.filters=In.slice(0);}loadDocument(t){return this.loadSnapshot({document:t,selectedRange:[0,0]})}loadHTML(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const e=cn.parse(t,{referenceElement:this.element}).getDocument();return this.loadDocument(e)}loadJSON(t){let{document:e,selectedRange:i}=t;return e=on.fromJSON(e),this.loadSnapshot({document:e,selectedRange:i})}loadSnapshot(t){return this.undoManager=new Tn(this.composition),this.composition.loadSnapshot(t)}getDocument(){return this.composition.document}getSelectedDocument(){return this.composition.getSelectedDocument()}getSnapshot(){return this.composition.getSnapshot()}toJSON(){return this.getSnapshot()}deleteInDirection(t){return this.composition.deleteInDirection(t)}insertAttachment(t){return this.composition.insertAttachment(t)}insertAttachments(t){return this.composition.insertAttachments(t)}insertDocument(t){return this.composition.insertDocument(t)}insertFile(t){return this.composition.insertFile(t)}insertFiles(t){return this.composition.insertFiles(t)}insertHTML(t){return this.composition.insertHTML(t)}insertString(t){return this.composition.insertString(t)}insertText(t){return this.composition.insertText(t)}insertLineBreak(){return this.composition.insertLineBreak()}getSelectedRange(){return this.composition.getSelectedRange()}getPosition(){return this.composition.getPosition()}getClientRectAtPosition(t){const e=this.getDocument().locationRangeFromRange([t,t+1]);return this.selectionManager.getClientRectAtLocationRange(e)}expandSelectionInDirection(t){return this.composition.expandSelectionInDirection(t)}moveCursorInDirection(t){return this.composition.moveCursorInDirection(t)}setSelectedRange(t){return this.composition.setSelectedRange(t)}activateAttribute(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.composition.setCurrentAttribute(t,e)}attributeIsActive(t){return this.composition.hasCurrentAttribute(t)}canActivateAttribute(t){return this.composition.canSetCurrentAttribute(t)}deactivateAttribute(t){return this.composition.removeCurrentAttribute(t)}setHTMLAtributeAtPosition(t,e,i){this.composition.setHTMLAtributeAtPosition(t,e,i);}canDecreaseNestingLevel(){return this.composition.canDecreaseNestingLevel()}canIncreaseNestingLevel(){return this.composition.canIncreaseNestingLevel()}decreaseNestingLevel(){if(this.canDecreaseNestingLevel())return this.composition.decreaseNestingLevel()}increaseNestingLevel(){if(this.canIncreaseNestingLevel())return this.composition.increaseNestingLevel()}canRedo(){return this.undoManager.canRedo()}canUndo(){return this.undoManager.canUndo()}recordUndoEntry(t){let{context:e,consolidatable:i}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.undoManager.recordUndoEntry(t,{context:e,consolidatable:i})}redo(){if(this.canRedo())return this.undoManager.redo()}undo(){if(this.canUndo())return this.undoManager.undo()}}class Fn{constructor(t){this.element=t;}findLocationFromContainerAndOffset(t,e){let{strict:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{strict:!0},n=0,r=!1;const o={index:0,offset:0},s=this.findAttachmentElementParentForNode(t);s&&(t=s.parentNode,e=E(s));const a=R(this.element,{usingFilter:_n});for(;a.nextNode();){const s=a.currentNode;if(s===t&&B(t)){F(s)||(o.offset+=e);break}if(s.parentNode===t){if(n++===e)break}else if(!C(t,s)&&n>0)break;N(s,{strict:i})?(r&&o.index++,o.offset=0,r=!0):o.offset+=Pn(s);}return o}findContainerAndOffsetFromLocation(t){let e,i;if(0===t.index&&0===t.offset){for(e=this.element,i=0;e.firstChild;)if(e=e.firstChild,D(e)){i=1;break}return [e,i]}let[n,r]=this.findNodeAndOffsetFromLocation(t);if(n){if(B(n))0===Pn(n)?(e=n.parentNode.parentNode,i=E(n.parentNode),F(n,{name:"right"})&&i++):(e=n,i=t.offset-r);else {if(e=n.parentNode,!N(n.previousSibling)&&!D(e))for(;n===e.lastChild&&(n=e,e=e.parentNode,!D(e)););i=E(n),0!==t.offset&&i++;}return [e,i]}}findNodeAndOffsetFromLocation(t){let e,i,n=0;for(const r of this.getSignificantNodesForIndex(t.index)){const o=Pn(r);if(t.offset<=n+o)if(B(r)){if(e=r,i=n,t.offset===i&&F(e))break}else e||(e=r,i=n);if(n+=o,n>t.offset)break}return [e,i]}findAttachmentElementParentForNode(t){for(;t&&t!==this.element;){if(P(t))return t;t=t.parentNode;}}getSignificantNodesForIndex(t){const e=[],i=R(this.element,{usingFilter:Mn});let n=!1;for(;i.nextNode();){const o=i.currentNode;var r;if(I(o)){if(null!=r?r++:r=0,r===t)n=!0;else if(n)break}else n&&e.push(o);}return e}}const Pn=function(t){if(t.nodeType===Node.TEXT_NODE){if(F(t))return 0;return t.textContent.length}return "br"===k(t)||P(t)?1:0},Mn=function(t){return Bn(t)===NodeFilter.FILTER_ACCEPT?_n(t):NodeFilter.FILTER_REJECT},Bn=function(t){return M(t)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},_n=function(t){return P(t.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT};class jn{createDOMRangeFromPoint(t){let e,{x:i,y:n}=t;if(document.caretPositionFromPoint){const{offsetNode:t,offset:r}=document.caretPositionFromPoint(i,n);return e=document.createRange(),e.setStart(t,r),e}if(document.caretRangeFromPoint)return document.caretRangeFromPoint(i,n);if(document.body.createTextRange){const t=Mt();try{const t=document.body.createTextRange();t.moveToPoint(i,n),t.select();}catch(t){}return e=Mt(),Bt(t),e}}getClientRectsForDOMRange(t){const e=Array.from(t.getClientRects());return [e[0],e[e.length-1]]}}class Wn extends q{constructor(t){super(...arguments),this.didMouseDown=this.didMouseDown.bind(this),this.selectionDidChange=this.selectionDidChange.bind(this),this.element=t,this.locationMapper=new Fn(this.element),this.pointMapper=new jn,this.lockCount=0,b("mousedown",{onElement:this.element,withCallback:this.didMouseDown});}getLocationRange(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return !1===t.strict?this.createLocationRangeFromDOMRange(Mt()):t.ignoreLock?this.currentLocationRange:this.lockedLocationRange?this.lockedLocationRange:this.currentLocationRange}setLocationRange(t){if(this.lockedLocationRange)return;t=wt(t);const e=this.createDOMRangeFromLocationRange(t);e&&(Bt(e),this.updateCurrentLocationRange(t));}setLocationRangeFromPointRange(t){t=wt(t);const e=this.getLocationAtPoint(t[0]),i=this.getLocationAtPoint(t[1]);this.setLocationRange([e,i]);}getClientRectAtLocationRange(t){const e=this.createDOMRangeFromLocationRange(t);if(e)return this.getClientRectsForDOMRange(e)[1]}locationIsCursorTarget(t){const e=Array.from(this.findNodeAndOffsetFromLocation(t))[0];return F(e)}lock(){0==this.lockCount++&&(this.updateCurrentLocationRange(),this.lockedLocationRange=this.getLocationRange());}unlock(){if(0==--this.lockCount){const{lockedLocationRange:t}=this;if(this.lockedLocationRange=null,null!=t)return this.setLocationRange(t)}}clearSelection(){var t;return null===(t=Pt())||void 0===t?void 0:t.removeAllRanges()}selectionIsCollapsed(){var t;return !0===(null===(t=Mt())||void 0===t?void 0:t.collapsed)}selectionIsExpanded(){return !this.selectionIsCollapsed()}createLocationRangeFromDOMRange(t,e){if(null==t||!this.domRangeWithinElement(t))return;const i=this.findLocationFromContainerAndOffset(t.startContainer,t.startOffset,e);if(!i)return;const n=t.collapsed?void 0:this.findLocationFromContainerAndOffset(t.endContainer,t.endOffset,e);return wt([i,n])}didMouseDown(){return this.pauseTemporarily()}pauseTemporarily(){let t;this.paused=!0;const e=()=>{if(this.paused=!1,clearTimeout(i),Array.from(t).forEach((t=>{t.destroy();})),C(document,this.element))return this.selectionDidChange()},i=setTimeout(e,200);t=["mousemove","keydown"].map((t=>b(t,{onElement:document,withCallback:e})));}selectionDidChange(){if(!this.paused&&!x(this.element))return this.updateCurrentLocationRange()}updateCurrentLocationRange(t){var e,i;if((null!=t?t:t=this.createLocationRangeFromDOMRange(Mt()))&&!Dt(t,this.currentLocationRange))return this.currentLocationRange=t,null===(e=this.delegate)||void 0===e||null===(i=e.locationRangeDidChange)||void 0===i?void 0:i.call(e,this.currentLocationRange.slice(0))}createDOMRangeFromLocationRange(t){const e=this.findContainerAndOffsetFromLocation(t[0]),i=Lt(t)?e:this.findContainerAndOffsetFromLocation(t[1])||e;if(null!=e&&null!=i){const t=document.createRange();return t.setStart(...Array.from(e||[])),t.setEnd(...Array.from(i||[])),t}}getLocationAtPoint(t){const e=this.createDOMRangeFromPoint(t);var i;if(e)return null===(i=this.createLocationRangeFromDOMRange(e))||void 0===i?void 0:i[0]}domRangeWithinElement(t){return t.collapsed?C(this.element,t.startContainer):C(this.element,t.startContainer)&&C(this.element,t.endContainer)}}Wn.proxyMethod("locationMapper.findLocationFromContainerAndOffset"),Wn.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"),Wn.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"),Wn.proxyMethod("pointMapper.createDOMRangeFromPoint"),Wn.proxyMethod("pointMapper.getClientRectsForDOMRange");var Un=Object.freeze({__proto__:null,Attachment:Wi,AttachmentManager:Sn,AttachmentPiece:Ui,Block:Gi,Composition:kn,Document:on,Editor:On,HTMLParser:cn,HTMLSanitizer:ui,LineBreakInsertion:Rn,LocationMapper:Fn,ManagedAttachment:En,Piece:_i,PointMapper:jn,SelectionManager:Wn,SplittableList:zi,StringPiece:Vi,Text:Ki,UndoManager:Tn}),Vn=Object.freeze({__proto__:null,ObjectView:ie,AttachmentView:gi,BlockView:xi,DocumentView:Ci,PieceView:bi,PreviewableAttachmentView:fi,TextView:vi});const{lang:zn,css:qn,keyNames:Hn}=z,Jn=function(t){return function(){const e=t.apply(this,arguments);e.do(),this.undos||(this.undos=[]),this.undos.push(e.undo);}};class Kn extends q{constructor(t,e,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};super(...arguments),wi(this,"makeElementMutable",Jn((()=>({do:()=>{this.element.dataset.trixMutable=!0;},undo:()=>delete this.element.dataset.trixMutable})))),wi(this,"addToolbar",Jn((()=>{const t=T({tagName:"div",className:qn.attachmentToolbar,data:{trixMutable:!0},childNodes:T({tagName:"div",className:"trix-button-row",childNodes:T({tagName:"span",className:"trix-button-group trix-button-group--actions",childNodes:T({tagName:"button",className:"trix-button trix-button--remove",textContent:zn.remove,attributes:{title:zn.remove},data:{trixAction:"remove"}})})})});return this.attachment.isPreviewable()&&t.appendChild(T({tagName:"div",className:qn.attachmentMetadataContainer,childNodes:T({tagName:"span",className:qn.attachmentMetadata,childNodes:[T({tagName:"span",className:qn.attachmentName,textContent:this.attachment.getFilename(),attributes:{title:this.attachment.getFilename()}}),T({tagName:"span",className:qn.attachmentSize,textContent:this.attachment.getFormattedFilesize()})]})})),b("click",{onElement:t,withCallback:this.didClickToolbar}),b("click",{onElement:t,matchingSelector:"[data-trix-action]",withCallback:this.didClickActionButton}),v("trix-attachment-before-toolbar",{onElement:this.element,attributes:{toolbar:t,attachment:this.attachment}}),{do:()=>this.element.appendChild(t),undo:()=>S(t)}}))),wi(this,"installCaptionEditor",Jn((()=>{const t=T({tagName:"textarea",className:qn.attachmentCaptionEditor,attributes:{placeholder:zn.captionPlaceholder},data:{trixMutable:!0}});t.value=this.attachmentPiece.getCaption();const e=t.cloneNode();e.classList.add("trix-autoresize-clone"),e.tabIndex=-1;const i=function(){e.value=t.value,t.style.height=e.scrollHeight+"px";};b("input",{onElement:t,withCallback:i}),b("input",{onElement:t,withCallback:this.didInputCaption}),b("keydown",{onElement:t,withCallback:this.didKeyDownCaption}),b("change",{onElement:t,withCallback:this.didChangeCaption}),b("blur",{onElement:t,withCallback:this.didBlurCaption});const n=this.element.querySelector("figcaption"),r=n.cloneNode();return {do:()=>{if(n.style.display="none",r.appendChild(t),r.appendChild(e),r.classList.add("".concat(qn.attachmentCaption,"--editing")),n.parentElement.insertBefore(r,n),i(),this.options.editCaption)return Rt((()=>t.focus()))},undo(){S(r),n.style.display=null;}}}))),this.didClickToolbar=this.didClickToolbar.bind(this),this.didClickActionButton=this.didClickActionButton.bind(this),this.didKeyDownCaption=this.didKeyDownCaption.bind(this),this.didInputCaption=this.didInputCaption.bind(this),this.didChangeCaption=this.didChangeCaption.bind(this),this.didBlurCaption=this.didBlurCaption.bind(this),this.attachmentPiece=t,this.element=e,this.container=i,this.options=n,this.attachment=this.attachmentPiece.attachment,"a"===k(this.element)&&(this.element=this.element.firstChild),this.install();}install(){this.makeElementMutable(),this.addToolbar(),this.attachment.isPreviewable()&&this.installCaptionEditor();}uninstall(){var t;let e=this.undos.pop();for(this.savePendingCaption();e;)e(),e=this.undos.pop();null===(t=this.delegate)||void 0===t||t.didUninstallAttachmentEditor(this);}savePendingCaption(){if(null!=this.pendingCaption){const r=this.pendingCaption;var t,e,i,n;if(this.pendingCaption=null,r)null===(t=this.delegate)||void 0===t||null===(e=t.attachmentEditorDidRequestUpdatingAttributesForAttachment)||void 0===e||e.call(t,{caption:r},this.attachment);else null===(i=this.delegate)||void 0===i||null===(n=i.attachmentEditorDidRequestRemovingAttributeForAttachment)||void 0===n||n.call(i,"caption",this.attachment);}}didClickToolbar(t){return t.preventDefault(),t.stopPropagation()}didClickActionButton(t){var e;if("remove"===t.target.getAttribute("data-trix-action"))return null===(e=this.delegate)||void 0===e?void 0:e.attachmentEditorDidRequestRemovalOfAttachment(this.attachment)}didKeyDownCaption(t){var e,i;if("return"===Hn[t.keyCode])return t.preventDefault(),this.savePendingCaption(),null===(e=this.delegate)||void 0===e||null===(i=e.attachmentEditorDidRequestDeselectingAttachment)||void 0===i?void 0:i.call(e,this.attachment)}didInputCaption(t){this.pendingCaption=t.target.value.replace(/\s/g," ").trim();}didChangeCaption(t){return this.savePendingCaption()}didBlurCaption(t){return this.savePendingCaption()}}class Gn extends q{constructor(t,i){super(...arguments),this.didFocus=this.didFocus.bind(this),this.didBlur=this.didBlur.bind(this),this.didClickAttachment=this.didClickAttachment.bind(this),this.element=t,this.composition=i,this.documentView=new Ci(this.composition.document,{element:this.element}),b("focus",{onElement:this.element,withCallback:this.didFocus}),b("blur",{onElement:this.element,withCallback:this.didBlur}),b("click",{onElement:this.element,matchingSelector:"a[contenteditable=false]",preventDefault:!0}),b("mousedown",{onElement:this.element,matchingSelector:e,withCallback:this.didClickAttachment}),b("click",{onElement:this.element,matchingSelector:"a".concat(e),preventDefault:!0});}didFocus(t){var e;const i=()=>{var t,e;if(!this.focused)return this.focused=!0,null===(t=this.delegate)||void 0===t||null===(e=t.compositionControllerDidFocus)||void 0===e?void 0:e.call(t)};return (null===(e=this.blurPromise)||void 0===e?void 0:e.then(i))||i()}didBlur(t){this.blurPromise=new Promise((t=>Rt((()=>{var e,i;x(this.element)||(this.focused=null,null===(e=this.delegate)||void 0===e||null===(i=e.compositionControllerDidBlur)||void 0===i||i.call(e));return this.blurPromise=null,t()}))));}didClickAttachment(t,e){var i,n;const r=this.findAttachmentForElement(e),o=!!y(t.target,{matchingSelector:"figcaption"});return null===(i=this.delegate)||void 0===i||null===(n=i.compositionControllerDidSelectAttachment)||void 0===n?void 0:n.call(i,r,{editCaption:o})}getSerializableElement(){return this.isEditingAttachment()?this.documentView.shadowElement:this.element}render(){var t,e,i,n,r,o;(this.revision!==this.composition.revision&&(this.documentView.setDocument(this.composition.document),this.documentView.render(),this.revision=this.composition.revision),this.canSyncDocumentView()&&!this.documentView.isSynced())&&(null===(i=this.delegate)||void 0===i||null===(n=i.compositionControllerWillSyncDocumentView)||void 0===n||n.call(i),this.documentView.sync(),null===(r=this.delegate)||void 0===r||null===(o=r.compositionControllerDidSyncDocumentView)||void 0===o||o.call(r));return null===(t=this.delegate)||void 0===t||null===(e=t.compositionControllerDidRender)||void 0===e?void 0:e.call(t)}rerenderViewForObject(t){return this.invalidateViewForObject(t),this.render()}invalidateViewForObject(t){return this.documentView.invalidateViewForObject(t)}isViewCachingEnabled(){return this.documentView.isViewCachingEnabled()}enableViewCaching(){return this.documentView.enableViewCaching()}disableViewCaching(){return this.documentView.disableViewCaching()}refreshViewCache(){return this.documentView.garbageCollectCachedViews()}isEditingAttachment(){return !!this.attachmentEditor}installAttachmentEditorForAttachment(t,e){var i;if((null===(i=this.attachmentEditor)||void 0===i?void 0:i.attachment)===t)return;const n=this.documentView.findElementForObject(t);if(!n)return;this.uninstallAttachmentEditor();const r=this.composition.document.getAttachmentPieceForAttachment(t);this.attachmentEditor=new Kn(r,n,this.element,e),this.attachmentEditor.delegate=this;}uninstallAttachmentEditor(){var t;return null===(t=this.attachmentEditor)||void 0===t?void 0:t.uninstall()}didUninstallAttachmentEditor(){return this.attachmentEditor=null,this.render()}attachmentEditorDidRequestUpdatingAttributesForAttachment(t,e){var i,n;return null===(i=this.delegate)||void 0===i||null===(n=i.compositionControllerWillUpdateAttachment)||void 0===n||n.call(i,e),this.composition.updateAttributesForAttachment(t,e)}attachmentEditorDidRequestRemovingAttributeForAttachment(t,e){var i,n;return null===(i=this.delegate)||void 0===i||null===(n=i.compositionControllerWillUpdateAttachment)||void 0===n||n.call(i,e),this.composition.removeAttributeForAttachment(t,e)}attachmentEditorDidRequestRemovalOfAttachment(t){var e,i;return null===(e=this.delegate)||void 0===e||null===(i=e.compositionControllerDidRequestRemovalOfAttachment)||void 0===i?void 0:i.call(e,t)}attachmentEditorDidRequestDeselectingAttachment(t){var e,i;return null===(e=this.delegate)||void 0===e||null===(i=e.compositionControllerDidRequestDeselectingAttachment)||void 0===i?void 0:i.call(e,t)}canSyncDocumentView(){return !this.isEditingAttachment()}findAttachmentForElement(t){return this.composition.document.getAttachmentById(parseInt(t.dataset.trixId,10))}}class Yn extends q{}const $n="data-trix-mutable",Xn="[".concat($n,"]"),Zn={attributes:!0,childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0};class Qn extends q{constructor(t){super(t),this.didMutate=this.didMutate.bind(this),this.element=t,this.observer=new window.MutationObserver(this.didMutate),this.start();}start(){return this.reset(),this.observer.observe(this.element,Zn)}stop(){return this.observer.disconnect()}didMutate(t){var e,i;if(this.mutations.push(...Array.from(this.findSignificantMutations(t)||[])),this.mutations.length)return null===(e=this.delegate)||void 0===e||null===(i=e.elementDidMutate)||void 0===i||i.call(e,this.getMutationSummary()),this.reset()}reset(){this.mutations=[];}findSignificantMutations(t){return t.filter((t=>this.mutationIsSignificant(t)))}mutationIsSignificant(t){if(this.nodeIsMutable(t.target))return !1;for(const e of Array.from(this.nodesModifiedByMutation(t)))if(this.nodeIsSignificant(e))return !0;return !1}nodeIsSignificant(t){return t!==this.element&&!this.nodeIsMutable(t)&&!M(t)}nodeIsMutable(t){return y(t,{matchingSelector:Xn})}nodesModifiedByMutation(t){const e=[];switch(t.type){case"attributes":t.attributeName!==$n&&e.push(t.target);break;case"characterData":e.push(t.target.parentNode),e.push(t.target);break;case"childList":e.push(...Array.from(t.addedNodes||[])),e.push(...Array.from(t.removedNodes||[]));}return e}getMutationSummary(){return this.getTextMutationSummary()}getTextMutationSummary(){const{additions:t,deletions:e}=this.getTextChangesFromCharacterData(),i=this.getTextChangesFromChildList();Array.from(i.additions).forEach((e=>{Array.from(t).includes(e)||t.push(e);})),e.push(...Array.from(i.deletions||[]));const n={},r=t.join("");r&&(n.textAdded=r);const o=e.join("");return o&&(n.textDeleted=o),n}getMutationsByType(t){return Array.from(this.mutations).filter((e=>e.type===t))}getTextChangesFromChildList(){let t,e;const i=[],n=[];Array.from(this.getMutationsByType("childList")).forEach((t=>{i.push(...Array.from(t.addedNodes||[])),n.push(...Array.from(t.removedNodes||[]));}));0===i.length&&1===n.length&&I(n[0])?(t=[],e=["\n"]):(t=tr(i),e=tr(n));const r=t.filter(((t,i)=>t!==e[i])).map(Wt),o=e.filter(((e,i)=>e!==t[i])).map(Wt);return {additions:r,deletions:o}}getTextChangesFromCharacterData(){let t,e;const i=this.getMutationsByType("characterData");if(i.length){const n=i[0],r=i[i.length-1],o=function(t,e){let i,n;return t=X.box(t),(e=X.box(e)).length<t.length?[n,i]=zt(t,e):[i,n]=zt(e,t),{added:i,removed:n}}(Wt(n.oldValue),Wt(r.target.data));t=o.added,e=o.removed;}return {additions:t?[t]:[],deletions:e?[e]:[]}}}const tr=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const e=[];for(const i of Array.from(t))switch(i.nodeType){case Node.TEXT_NODE:e.push(i.data);break;case Node.ELEMENT_NODE:"br"===k(i)?e.push("\n"):e.push(...Array.from(tr(i.childNodes)||[]));}return e};class er extends ee{constructor(t){super(...arguments),this.file=t;}perform(t){const e=new FileReader;return e.onerror=()=>t(!1),e.onload=()=>{e.onerror=null;try{e.abort();}catch(t){}return t(!0,this.file)},e.readAsArrayBuffer(this.file)}}class ir{constructor(t){this.element=t;}shouldIgnore(t){return !!a.samsungAndroid&&(this.previousEvent=this.event,this.event=t,this.checkSamsungKeyboardBuggyModeStart(),this.checkSamsungKeyboardBuggyModeEnd(),this.buggyMode)}checkSamsungKeyboardBuggyModeStart(){this.insertingLongTextAfterUnidentifiedChar()&&nr(this.element.innerText,this.event.data)&&(this.buggyMode=!0,this.event.preventDefault());}checkSamsungKeyboardBuggyModeEnd(){this.buggyMode&&"insertText"!==this.event.inputType&&(this.buggyMode=!1);}insertingLongTextAfterUnidentifiedChar(){var t;return this.isBeforeInputInsertText()&&this.previousEventWasUnidentifiedKeydown()&&(null===(t=this.event.data)||void 0===t?void 0:t.length)>50}isBeforeInputInsertText(){return "beforeinput"===this.event.type&&"insertText"===this.event.inputType}previousEventWasUnidentifiedKeydown(){var t,e;return "keydown"===(null===(t=this.previousEvent)||void 0===t?void 0:t.type)&&"Unidentified"===(null===(e=this.previousEvent)||void 0===e?void 0:e.key)}}const nr=(t,e)=>or(t)===or(e),rr=new RegExp("(".concat("￼","|").concat(d,"|").concat(g,"|\\s)+"),"g"),or=t=>t.replace(rr," ").trim();class sr extends q{constructor(t){super(...arguments),this.element=t,this.mutationObserver=new Qn(this.element),this.mutationObserver.delegate=this,this.flakyKeyboardDetector=new ir(this.element);for(const t in this.constructor.events)b(t,{onElement:this.element,withCallback:this.handlerFor(t)});}elementDidMutate(t){}editorWillSyncDocumentView(){return this.mutationObserver.stop()}editorDidSyncDocumentView(){return this.mutationObserver.start()}requestRender(){var t,e;return null===(t=this.delegate)||void 0===t||null===(e=t.inputControllerDidRequestRender)||void 0===e?void 0:e.call(t)}requestReparse(){var t,e;return null===(t=this.delegate)||void 0===t||null===(e=t.inputControllerDidRequestReparse)||void 0===e||e.call(t),this.requestRender()}attachFiles(t){const e=Array.from(t).map((t=>new er(t)));return Promise.all(e).then((t=>{this.handleInput((function(){var e,i;return null===(e=this.delegate)||void 0===e||e.inputControllerWillAttachFiles(),null===(i=this.responder)||void 0===i||i.insertFiles(t),this.requestRender()}));}))}handlerFor(t){return e=>{e.defaultPrevented||this.handleInput((()=>{if(!x(this.element)){if(this.flakyKeyboardDetector.shouldIgnore(e))return;this.eventName=t,this.constructor.events[t].call(this,e);}}));}}handleInput(t){try{var e;null===(e=this.delegate)||void 0===e||e.inputControllerWillHandleInput(),t.call(this);}finally{var i;null===(i=this.delegate)||void 0===i||i.inputControllerDidHandleInput();}}createLinkHTML(t,e){const i=document.createElement("a");return i.href=t,i.textContent=e||t,i.outerHTML}}var ar;wi(sr,"events",{});const{browser:lr,keyNames:cr}=z;let ur=0;class hr extends sr{constructor(){super(...arguments),this.resetInputSummary();}setInputSummary(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.inputSummary.eventName=this.eventName;for(const e in t){const i=t[e];this.inputSummary[e]=i;}return this.inputSummary}resetInputSummary(){this.inputSummary={};}reset(){return this.resetInputSummary(),Ft.reset()}elementDidMutate(t){var e,i;return this.isComposing()?null===(e=this.delegate)||void 0===e||null===(i=e.inputControllerDidAllowUnhandledInput)||void 0===i?void 0:i.call(e):this.handleInput((function(){return this.mutationIsSignificant(t)&&(this.mutationIsExpected(t)?this.requestRender():this.requestReparse()),this.reset()}))}mutationIsExpected(t){let{textAdded:e,textDeleted:i}=t;if(this.inputSummary.preferDocument)return !0;const n=null!=e?e===this.inputSummary.textAdded:!this.inputSummary.textAdded,r=null!=i?this.inputSummary.didDelete:!this.inputSummary.didDelete,o=["\n"," \n"].includes(e)&&!n,s="\n"===i&&!r;if(o&&!s||s&&!o){const t=this.getSelectedRange();if(t){var a;const i=o?e.replace(/\n$/,"").length||-1:(null==e?void 0:e.length)||1;if(null!==(a=this.responder)&&void 0!==a&&a.positionIsBlockBreak(t[1]+i))return !0}}return n&&r}mutationIsSignificant(t){var e;const i=Object.keys(t).length>0,n=""===(null===(e=this.compositionInput)||void 0===e?void 0:e.getEndData());return i||!n}getCompositionInput(){if(this.isComposing())return this.compositionInput;this.compositionInput=new fr(this);}isComposing(){return this.compositionInput&&!this.compositionInput.isEnded()}deleteInDirection(t,e){var i;return !1!==(null===(i=this.responder)||void 0===i?void 0:i.deleteInDirection(t))?this.setInputSummary({didDelete:!0}):e?(e.preventDefault(),this.requestRender()):void 0}serializeSelectionToDataTransfer(t){var e;if(!function(t){if(null==t||!t.setData)return !1;for(const e in Ct){const i=Ct[e];try{if(t.setData(e,i),!t.getData(e)===i)return !1}catch(t){return !1}}return !0}(t))return;const i=null===(e=this.responder)||void 0===e?void 0:e.getSelectedDocument().toSerializableDocument();return t.setData("application/x-trix-document",JSON.stringify(i)),t.setData("text/html",Ci.render(i).innerHTML),t.setData("text/plain",i.toString().replace(/\n$/,"")),!0}canAcceptDataTransfer(t){const e={};return Array.from((null==t?void 0:t.types)||[]).forEach((t=>{e[t]=!0;})),e.Files||e["application/x-trix-document"]||e["text/html"]||e["text/plain"]}getPastedHTMLUsingHiddenElement(t){const e=this.getSelectedRange(),i={position:"absolute",left:"".concat(window.pageXOffset,"px"),top:"".concat(window.pageYOffset,"px"),opacity:0},n=T({style:i,tagName:"div",editable:!0});return document.body.appendChild(n),n.focus(),requestAnimationFrame((()=>{const i=n.innerHTML;return S(n),this.setSelectedRange(e),t(i)}))}}wi(hr,"events",{keydown(t){this.isComposing()||this.resetInputSummary(),this.inputSummary.didInput=!0;const e=cr[t.keyCode];if(e){var i;let n=this.keys;["ctrl","alt","shift","meta"].forEach((e=>{var i;t["".concat(e,"Key")]&&("ctrl"===e&&(e="control"),n=null===(i=n)||void 0===i?void 0:i[e]);})),null!=(null===(i=n)||void 0===i?void 0:i[e])&&(this.setInputSummary({keyName:e}),Ft.reset(),n[e].call(this,t));}if(St(t)){const e=String.fromCharCode(t.keyCode).toLowerCase();if(e){var n;const i=["alt","shift"].map((e=>{if(t["".concat(e,"Key")])return e})).filter((t=>t));i.push(e),null!==(n=this.delegate)&&void 0!==n&&n.inputControllerDidReceiveKeyboardCommand(i)&&t.preventDefault();}}},keypress(t){if(null!=this.inputSummary.eventName)return;if(t.metaKey)return;if(t.ctrlKey&&!t.altKey)return;const e=mr(t);var i,n;return e?(null===(i=this.delegate)||void 0===i||i.inputControllerWillPerformTyping(),null===(n=this.responder)||void 0===n||n.insertString(e),this.setInputSummary({textAdded:e,didDelete:this.selectionIsExpanded()})):void 0},textInput(t){const{data:e}=t,{textAdded:i}=this.inputSummary;if(i&&i!==e&&i.toUpperCase()===e){var n;const t=this.getSelectedRange();return this.setSelectedRange([t[0],t[1]+i.length]),null===(n=this.responder)||void 0===n||n.insertString(e),this.setInputSummary({textAdded:e}),this.setSelectedRange(t)}},dragenter(t){t.preventDefault();},dragstart(t){var e,i;return this.serializeSelectionToDataTransfer(t.dataTransfer),this.draggedRange=this.getSelectedRange(),null===(e=this.delegate)||void 0===e||null===(i=e.inputControllerDidStartDrag)||void 0===i?void 0:i.call(e)},dragover(t){if(this.draggedRange||this.canAcceptDataTransfer(t.dataTransfer)){t.preventDefault();const n={x:t.clientX,y:t.clientY};var e,i;if(!Tt(n,this.draggingPoint))return this.draggingPoint=n,null===(e=this.delegate)||void 0===e||null===(i=e.inputControllerDidReceiveDragOverPoint)||void 0===i?void 0:i.call(e,this.draggingPoint)}},dragend(t){var e,i;null===(e=this.delegate)||void 0===e||null===(i=e.inputControllerDidCancelDrag)||void 0===i||i.call(e),this.draggedRange=null,this.draggingPoint=null;},drop(t){var e,i;t.preventDefault();const n=null===(e=t.dataTransfer)||void 0===e?void 0:e.files,r=t.dataTransfer.getData("application/x-trix-document"),o={x:t.clientX,y:t.clientY};if(null===(i=this.responder)||void 0===i||i.setLocationRangeFromPointRange(o),null!=n&&n.length)this.attachFiles(n);else if(this.draggedRange){var s,a;null===(s=this.delegate)||void 0===s||s.inputControllerWillMoveText(),null===(a=this.responder)||void 0===a||a.moveTextFromRange(this.draggedRange),this.draggedRange=null,this.requestRender();}else if(r){var l;const t=on.fromJSONString(r);null===(l=this.responder)||void 0===l||l.insertDocument(t),this.requestRender();}this.draggedRange=null,this.draggingPoint=null;},cut(t){var e,i;if(null!==(e=this.responder)&&void 0!==e&&e.selectionIsExpanded()&&(this.serializeSelectionToDataTransfer(t.clipboardData)&&t.preventDefault(),null===(i=this.delegate)||void 0===i||i.inputControllerWillCutText(),this.deleteInDirection("backward"),t.defaultPrevented))return this.requestRender()},copy(t){var e;null!==(e=this.responder)&&void 0!==e&&e.selectionIsExpanded()&&this.serializeSelectionToDataTransfer(t.clipboardData)&&t.preventDefault();},paste(t){const e=t.clipboardData||t.testClipboardData,i={clipboard:e};if(!e||pr(t))return void this.getPastedHTMLUsingHiddenElement((t=>{var e,n,r;return i.type="text/html",i.html=t,null===(e=this.delegate)||void 0===e||e.inputControllerWillPaste(i),null===(n=this.responder)||void 0===n||n.insertHTML(i.html),this.requestRender(),null===(r=this.delegate)||void 0===r?void 0:r.inputControllerDidPaste(i)}));const n=e.getData("URL"),r=e.getData("text/html"),o=e.getData("public.url-name");if(n){var s,a,l;let t;i.type="text/html",t=o?Vt(o).trim():n,i.html=this.createLinkHTML(n,t),null===(s=this.delegate)||void 0===s||s.inputControllerWillPaste(i),this.setInputSummary({textAdded:t,didDelete:this.selectionIsExpanded()}),null===(a=this.responder)||void 0===a||a.insertHTML(i.html),this.requestRender(),null===(l=this.delegate)||void 0===l||l.inputControllerDidPaste(i);}else if(Et(e)){var c,u,h;i.type="text/plain",i.string=e.getData("text/plain"),null===(c=this.delegate)||void 0===c||c.inputControllerWillPaste(i),this.setInputSummary({textAdded:i.string,didDelete:this.selectionIsExpanded()}),null===(u=this.responder)||void 0===u||u.insertString(i.string),this.requestRender(),null===(h=this.delegate)||void 0===h||h.inputControllerDidPaste(i);}else if(r){var d,g,m;i.type="text/html",i.html=r,null===(d=this.delegate)||void 0===d||d.inputControllerWillPaste(i),null===(g=this.responder)||void 0===g||g.insertHTML(i.html),this.requestRender(),null===(m=this.delegate)||void 0===m||m.inputControllerDidPaste(i);}else if(Array.from(e.types).includes("Files")){var p,f;const t=null===(p=e.items)||void 0===p||null===(p=p[0])||void 0===p||null===(f=p.getAsFile)||void 0===f?void 0:f.call(p);if(t){var b,v,A;const e=dr(t);!t.name&&e&&(t.name="pasted-file-".concat(++ur,".").concat(e)),i.type="File",i.file=t,null===(b=this.delegate)||void 0===b||b.inputControllerWillAttachFiles(),null===(v=this.responder)||void 0===v||v.insertFile(i.file),this.requestRender(),null===(A=this.delegate)||void 0===A||A.inputControllerDidPaste(i);}}t.preventDefault();},compositionstart(t){return this.getCompositionInput().start(t.data)},compositionupdate(t){return this.getCompositionInput().update(t.data)},compositionend(t){return this.getCompositionInput().end(t.data)},beforeinput(t){this.inputSummary.didInput=!0;},input(t){return this.inputSummary.didInput=!0,t.stopPropagation()}}),wi(hr,"keys",{backspace(t){var e;return null===(e=this.delegate)||void 0===e||e.inputControllerWillPerformTyping(),this.deleteInDirection("backward",t)},delete(t){var e;return null===(e=this.delegate)||void 0===e||e.inputControllerWillPerformTyping(),this.deleteInDirection("forward",t)},return(t){var e,i;return this.setInputSummary({preferDocument:!0}),null===(e=this.delegate)||void 0===e||e.inputControllerWillPerformTyping(),null===(i=this.responder)||void 0===i?void 0:i.insertLineBreak()},tab(t){var e,i;null!==(e=this.responder)&&void 0!==e&&e.canIncreaseNestingLevel()&&(null===(i=this.responder)||void 0===i||i.increaseNestingLevel(),this.requestRender(),t.preventDefault());},left(t){var e;if(this.selectionIsInCursorTarget())return t.preventDefault(),null===(e=this.responder)||void 0===e?void 0:e.moveCursorInDirection("backward")},right(t){var e;if(this.selectionIsInCursorTarget())return t.preventDefault(),null===(e=this.responder)||void 0===e?void 0:e.moveCursorInDirection("forward")},control:{d(t){var e;return null===(e=this.delegate)||void 0===e||e.inputControllerWillPerformTyping(),this.deleteInDirection("forward",t)},h(t){var e;return null===(e=this.delegate)||void 0===e||e.inputControllerWillPerformTyping(),this.deleteInDirection("backward",t)},o(t){var e,i;return t.preventDefault(),null===(e=this.delegate)||void 0===e||e.inputControllerWillPerformTyping(),null===(i=this.responder)||void 0===i||i.insertString("\n",{updatePosition:!1}),this.requestRender()}},shift:{return(t){var e,i;null===(e=this.delegate)||void 0===e||e.inputControllerWillPerformTyping(),null===(i=this.responder)||void 0===i||i.insertString("\n"),this.requestRender(),t.preventDefault();},tab(t){var e,i;null!==(e=this.responder)&&void 0!==e&&e.canDecreaseNestingLevel()&&(null===(i=this.responder)||void 0===i||i.decreaseNestingLevel(),this.requestRender(),t.preventDefault());},left(t){if(this.selectionIsInCursorTarget())return t.preventDefault(),this.expandSelectionInDirection("backward")},right(t){if(this.selectionIsInCursorTarget())return t.preventDefault(),this.expandSelectionInDirection("forward")}},alt:{backspace(t){var e;return this.setInputSummary({preferDocument:!1}),null===(e=this.delegate)||void 0===e?void 0:e.inputControllerWillPerformTyping()}},meta:{backspace(t){var e;return this.setInputSummary({preferDocument:!1}),null===(e=this.delegate)||void 0===e?void 0:e.inputControllerWillPerformTyping()}}}),hr.proxyMethod("responder?.getSelectedRange"),hr.proxyMethod("responder?.setSelectedRange"),hr.proxyMethod("responder?.expandSelectionInDirection"),hr.proxyMethod("responder?.selectionIsInCursorTarget"),hr.proxyMethod("responder?.selectionIsExpanded");const dr=t=>{var e;return null===(e=t.type)||void 0===e||null===(e=e.match(/\/(\w+)$/))||void 0===e?void 0:e[1]},gr=!(null===(ar=" ".codePointAt)||void 0===ar||!ar.call(" ",0)),mr=function(t){if(t.key&&gr&&t.key.codePointAt(0)===t.keyCode)return t.key;{let e;if(null===t.which?e=t.keyCode:0!==t.which&&0!==t.charCode&&(e=t.charCode),null!=e&&"escape"!==cr[e])return X.fromCodepoints([e]).toString()}},pr=function(t){const e=t.clipboardData;if(e){if(e.types.includes("text/html")){for(const t of e.types){const i=/^CorePasteboardFlavorType/.test(t),n=/^dyn\./.test(t)&&e.getData(t);if(i||n)return !0}return !1}{const t=e.types.includes("com.apple.webarchive"),i=e.types.includes("com.apple.flat-rtfd");return t||i}}};class fr extends q{constructor(t){super(...arguments),this.inputController=t,this.responder=this.inputController.responder,this.delegate=this.inputController.delegate,this.inputSummary=this.inputController.inputSummary,this.data={};}start(t){if(this.data.start=t,this.isSignificant()){var e,i;if("keypress"===this.inputSummary.eventName&&this.inputSummary.textAdded)null===(i=this.responder)||void 0===i||i.deleteInDirection("left");this.selectionIsExpanded()||(this.insertPlaceholder(),this.requestRender()),this.range=null===(e=this.responder)||void 0===e?void 0:e.getSelectedRange();}}update(t){if(this.data.update=t,this.isSignificant()){const t=this.selectPlaceholder();t&&(this.forgetPlaceholder(),this.range=t);}}end(t){return this.data.end=t,this.isSignificant()?(this.forgetPlaceholder(),this.canApplyToDocument()?(this.setInputSummary({preferDocument:!0,didInput:!1}),null===(e=this.delegate)||void 0===e||e.inputControllerWillPerformTyping(),null===(i=this.responder)||void 0===i||i.setSelectedRange(this.range),null===(n=this.responder)||void 0===n||n.insertString(this.data.end),null===(r=this.responder)||void 0===r?void 0:r.setSelectedRange(this.range[0]+this.data.end.length)):null!=this.data.start||null!=this.data.update?(this.requestReparse(),this.inputController.reset()):void 0):this.inputController.reset();var e,i,n,r;}getEndData(){return this.data.end}isEnded(){return null!=this.getEndData()}isSignificant(){return !lr.composesExistingText||this.inputSummary.didInput}canApplyToDocument(){var t,e;return 0===(null===(t=this.data.start)||void 0===t?void 0:t.length)&&(null===(e=this.data.end)||void 0===e?void 0:e.length)>0&&this.range}}fr.proxyMethod("inputController.setInputSummary"),fr.proxyMethod("inputController.requestRender"),fr.proxyMethod("inputController.requestReparse"),fr.proxyMethod("responder?.selectionIsExpanded"),fr.proxyMethod("responder?.insertPlaceholder"),fr.proxyMethod("responder?.selectPlaceholder"),fr.proxyMethod("responder?.forgetPlaceholder");class br extends sr{constructor(){super(...arguments),this.render=this.render.bind(this);}elementDidMutate(){return this.scheduledRender?this.composing?null===(t=this.delegate)||void 0===t||null===(e=t.inputControllerDidAllowUnhandledInput)||void 0===e?void 0:e.call(t):void 0:this.reparse();var t,e;}scheduleRender(){return this.scheduledRender?this.scheduledRender:this.scheduledRender=requestAnimationFrame(this.render)}render(){var t,e;(cancelAnimationFrame(this.scheduledRender),this.scheduledRender=null,this.composing)||(null===(e=this.delegate)||void 0===e||e.render());null===(t=this.afterRender)||void 0===t||t.call(this),this.afterRender=null;}reparse(){var t;return null===(t=this.delegate)||void 0===t?void 0:t.reparse()}insertString(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0;return null===(t=this.delegate)||void 0===t||t.inputControllerWillPerformTyping(),this.withTargetDOMRange((function(){var t;return null===(t=this.responder)||void 0===t?void 0:t.insertString(e,i)}))}toggleAttributeIfSupported(t){var e;if(gt().includes(t))return null===(e=this.delegate)||void 0===e||e.inputControllerWillPerformFormatting(t),this.withTargetDOMRange((function(){var e;return null===(e=this.responder)||void 0===e?void 0:e.toggleCurrentAttribute(t)}))}activateAttributeIfSupported(t,e){var i;if(gt().includes(t))return null===(i=this.delegate)||void 0===i||i.inputControllerWillPerformFormatting(t),this.withTargetDOMRange((function(){var i;return null===(i=this.responder)||void 0===i?void 0:i.setCurrentAttribute(t,e)}))}deleteInDirection(t){let{recordUndoEntry:e}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{recordUndoEntry:!0};var i;e&&(null===(i=this.delegate)||void 0===i||i.inputControllerWillPerformTyping());const n=()=>{var e;return null===(e=this.responder)||void 0===e?void 0:e.deleteInDirection(t)},r=this.getTargetDOMRange({minLength:this.composing?1:2});return r?this.withTargetDOMRange(r,n):n()}withTargetDOMRange(t,e){var i;return "function"==typeof t&&(e=t,t=this.getTargetDOMRange()),t?null===(i=this.responder)||void 0===i?void 0:i.withTargetDOMRange(t,e.bind(this)):(Ft.reset(),e.call(this))}getTargetDOMRange(){var t,e;let{minLength:i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{minLength:0};const n=null===(t=(e=this.event).getTargetRanges)||void 0===t?void 0:t.call(e);if(n&&n.length){const t=vr(n[0]);if(0===i||t.toString().length>=i)return t}}withEvent(t,e){let i;this.event=t;try{i=e.call(this);}finally{this.event=null;}return i}}wi(br,"events",{keydown(t){if(St(t)){var e;const i=Er(t);null!==(e=this.delegate)&&void 0!==e&&e.inputControllerDidReceiveKeyboardCommand(i)&&t.preventDefault();}else {let e=t.key;t.altKey&&(e+="+Alt"),t.shiftKey&&(e+="+Shift");const i=this.constructor.keys[e];if(i)return this.withEvent(t,i)}},paste(t){var e;let i;const n=null===(e=t.clipboardData)||void 0===e?void 0:e.getData("URL");return xr(t)?(t.preventDefault(),this.attachFiles(t.clipboardData.files)):Cr(t)?(t.preventDefault(),i={type:"text/plain",string:t.clipboardData.getData("text/plain")},null===(r=this.delegate)||void 0===r||r.inputControllerWillPaste(i),null===(o=this.responder)||void 0===o||o.insertString(i.string),this.render(),null===(s=this.delegate)||void 0===s?void 0:s.inputControllerDidPaste(i)):n?(t.preventDefault(),i={type:"text/html",html:this.createLinkHTML(n)},null===(a=this.delegate)||void 0===a||a.inputControllerWillPaste(i),null===(l=this.responder)||void 0===l||l.insertHTML(i.html),this.render(),null===(c=this.delegate)||void 0===c?void 0:c.inputControllerDidPaste(i)):void 0;var r,o,s,a,l,c;},beforeinput(t){const e=this.constructor.inputTypes[t.inputType],i=(n=t,!(!/iPhone|iPad/.test(navigator.userAgent)||n.inputType&&"insertParagraph"!==n.inputType));var n;e&&(this.withEvent(t,e),i||this.scheduleRender()),i&&this.render();},input(t){Ft.reset();},dragstart(t){var e,i;null!==(e=this.responder)&&void 0!==e&&e.selectionContainsAttachments()&&(t.dataTransfer.setData("application/x-trix-dragging",!0),this.dragging={range:null===(i=this.responder)||void 0===i?void 0:i.getSelectedRange(),point:Sr(t)});},dragenter(t){Ar(t)&&t.preventDefault();},dragover(t){if(this.dragging){t.preventDefault();const i=Sr(t);var e;if(!Tt(i,this.dragging.point))return this.dragging.point=i,null===(e=this.responder)||void 0===e?void 0:e.setLocationRangeFromPointRange(i)}else Ar(t)&&t.preventDefault();},drop(t){var e,i;if(this.dragging)return t.preventDefault(),null===(e=this.delegate)||void 0===e||e.inputControllerWillMoveText(),null===(i=this.responder)||void 0===i||i.moveTextFromRange(this.dragging.range),this.dragging=null,this.scheduleRender();if(Ar(t)){var n;t.preventDefault();const e=Sr(t);return null===(n=this.responder)||void 0===n||n.setLocationRangeFromPointRange(e),this.attachFiles(t.dataTransfer.files)}},dragend(){var t;this.dragging&&(null===(t=this.responder)||void 0===t||t.setSelectedRange(this.dragging.range),this.dragging=null);},compositionend(t){this.composing&&(this.composing=!1,a.recentAndroid||this.scheduleRender());}}),wi(br,"keys",{ArrowLeft(){var t,e;if(null!==(t=this.responder)&&void 0!==t&&t.shouldManageMovingCursorInDirection("backward"))return this.event.preventDefault(),null===(e=this.responder)||void 0===e?void 0:e.moveCursorInDirection("backward")},ArrowRight(){var t,e;if(null!==(t=this.responder)&&void 0!==t&&t.shouldManageMovingCursorInDirection("forward"))return this.event.preventDefault(),null===(e=this.responder)||void 0===e?void 0:e.moveCursorInDirection("forward")},Backspace(){var t,e,i;if(null!==(t=this.responder)&&void 0!==t&&t.shouldManageDeletingInDirection("backward"))return this.event.preventDefault(),null===(e=this.delegate)||void 0===e||e.inputControllerWillPerformTyping(),null===(i=this.responder)||void 0===i||i.deleteInDirection("backward"),this.render()},Tab(){var t,e;if(null!==(t=this.responder)&&void 0!==t&&t.canIncreaseNestingLevel())return this.event.preventDefault(),null===(e=this.responder)||void 0===e||e.increaseNestingLevel(),this.render()},"Tab+Shift"(){var t,e;if(null!==(t=this.responder)&&void 0!==t&&t.canDecreaseNestingLevel())return this.event.preventDefault(),null===(e=this.responder)||void 0===e||e.decreaseNestingLevel(),this.render()}}),wi(br,"inputTypes",{deleteByComposition(){return this.deleteInDirection("backward",{recordUndoEntry:!1})},deleteByCut(){return this.deleteInDirection("backward")},deleteByDrag(){return this.event.preventDefault(),this.withTargetDOMRange((function(){var t;this.deleteByDragRange=null===(t=this.responder)||void 0===t?void 0:t.getSelectedRange();}))},deleteCompositionText(){return this.deleteInDirection("backward",{recordUndoEntry:!1})},deleteContent(){return this.deleteInDirection("backward")},deleteContentBackward(){return this.deleteInDirection("backward")},deleteContentForward(){return this.deleteInDirection("forward")},deleteEntireSoftLine(){return this.deleteInDirection("forward")},deleteHardLineBackward(){return this.deleteInDirection("backward")},deleteHardLineForward(){return this.deleteInDirection("forward")},deleteSoftLineBackward(){return this.deleteInDirection("backward")},deleteSoftLineForward(){return this.deleteInDirection("forward")},deleteWordBackward(){return this.deleteInDirection("backward")},deleteWordForward(){return this.deleteInDirection("forward")},formatBackColor(){return this.activateAttributeIfSupported("backgroundColor",this.event.data)},formatBold(){return this.toggleAttributeIfSupported("bold")},formatFontColor(){return this.activateAttributeIfSupported("color",this.event.data)},formatFontName(){return this.activateAttributeIfSupported("font",this.event.data)},formatIndent(){var t;if(null!==(t=this.responder)&&void 0!==t&&t.canIncreaseNestingLevel())return this.withTargetDOMRange((function(){var t;return null===(t=this.responder)||void 0===t?void 0:t.increaseNestingLevel()}))},formatItalic(){return this.toggleAttributeIfSupported("italic")},formatJustifyCenter(){return this.toggleAttributeIfSupported("justifyCenter")},formatJustifyFull(){return this.toggleAttributeIfSupported("justifyFull")},formatJustifyLeft(){return this.toggleAttributeIfSupported("justifyLeft")},formatJustifyRight(){return this.toggleAttributeIfSupported("justifyRight")},formatOutdent(){var t;if(null!==(t=this.responder)&&void 0!==t&&t.canDecreaseNestingLevel())return this.withTargetDOMRange((function(){var t;return null===(t=this.responder)||void 0===t?void 0:t.decreaseNestingLevel()}))},formatRemove(){this.withTargetDOMRange((function(){for(const i in null===(t=this.responder)||void 0===t?void 0:t.getCurrentAttributes()){var t,e;null===(e=this.responder)||void 0===e||e.removeCurrentAttribute(i);}}));},formatSetBlockTextDirection(){return this.activateAttributeIfSupported("blockDir",this.event.data)},formatSetInlineTextDirection(){return this.activateAttributeIfSupported("textDir",this.event.data)},formatStrikeThrough(){return this.toggleAttributeIfSupported("strike")},formatSubscript(){return this.toggleAttributeIfSupported("sub")},formatSuperscript(){return this.toggleAttributeIfSupported("sup")},formatUnderline(){return this.toggleAttributeIfSupported("underline")},historyRedo(){var t;return null===(t=this.delegate)||void 0===t?void 0:t.inputControllerWillPerformRedo()},historyUndo(){var t;return null===(t=this.delegate)||void 0===t?void 0:t.inputControllerWillPerformUndo()},insertCompositionText(){return this.composing=!0,this.insertString(this.event.data)},insertFromComposition(){return this.composing=!1,this.insertString(this.event.data)},insertFromDrop(){const t=this.deleteByDragRange;var e;if(t)return this.deleteByDragRange=null,null===(e=this.delegate)||void 0===e||e.inputControllerWillMoveText(),this.withTargetDOMRange((function(){var e;return null===(e=this.responder)||void 0===e?void 0:e.moveTextFromRange(t)}))},insertFromPaste(){const{dataTransfer:t}=this.event,e={dataTransfer:t},i=t.getData("URL"),n=t.getData("text/html");if(i){var r;let n;this.event.preventDefault(),e.type="text/html";const o=t.getData("public.url-name");n=o?Vt(o).trim():i,e.html=this.createLinkHTML(i,n),null===(r=this.delegate)||void 0===r||r.inputControllerWillPaste(e),this.withTargetDOMRange((function(){var t;return null===(t=this.responder)||void 0===t?void 0:t.insertHTML(e.html)})),this.afterRender=()=>{var t;return null===(t=this.delegate)||void 0===t?void 0:t.inputControllerDidPaste(e)};}else if(Et(t)){var o;e.type="text/plain",e.string=t.getData("text/plain"),null===(o=this.delegate)||void 0===o||o.inputControllerWillPaste(e),this.withTargetDOMRange((function(){var t;return null===(t=this.responder)||void 0===t?void 0:t.insertString(e.string)})),this.afterRender=()=>{var t;return null===(t=this.delegate)||void 0===t?void 0:t.inputControllerDidPaste(e)};}else if(yr(this.event)){var s;e.type="File",e.file=t.files[0],null===(s=this.delegate)||void 0===s||s.inputControllerWillPaste(e),this.withTargetDOMRange((function(){var t;return null===(t=this.responder)||void 0===t?void 0:t.insertFile(e.file)})),this.afterRender=()=>{var t;return null===(t=this.delegate)||void 0===t?void 0:t.inputControllerDidPaste(e)};}else if(n){var a;this.event.preventDefault(),e.type="text/html",e.html=n,null===(a=this.delegate)||void 0===a||a.inputControllerWillPaste(e),this.withTargetDOMRange((function(){var t;return null===(t=this.responder)||void 0===t?void 0:t.insertHTML(e.html)})),this.afterRender=()=>{var t;return null===(t=this.delegate)||void 0===t?void 0:t.inputControllerDidPaste(e)};}},insertFromYank(){return this.insertString(this.event.data)},insertLineBreak(){return this.insertString("\n")},insertLink(){return this.activateAttributeIfSupported("href",this.event.data)},insertOrderedList(){return this.toggleAttributeIfSupported("number")},insertParagraph(){var t;return null===(t=this.delegate)||void 0===t||t.inputControllerWillPerformTyping(),this.withTargetDOMRange((function(){var t;return null===(t=this.responder)||void 0===t?void 0:t.insertLineBreak()}))},insertReplacementText(){const t=this.event.dataTransfer.getData("text/plain"),e=this.event.getTargetRanges()[0];this.withTargetDOMRange(e,(()=>{this.insertString(t,{updatePosition:!1});}));},insertText(){var t;return this.insertString(this.event.data||(null===(t=this.event.dataTransfer)||void 0===t?void 0:t.getData("text/plain")))},insertTranspose(){return this.insertString(this.event.data)},insertUnorderedList(){return this.toggleAttributeIfSupported("bullet")}});const vr=function(t){const e=document.createRange();return e.setStart(t.startContainer,t.startOffset),e.setEnd(t.endContainer,t.endOffset),e},Ar=t=>{var e;return Array.from((null===(e=t.dataTransfer)||void 0===e?void 0:e.types)||[]).includes("Files")},yr=t=>{var e;return (null===(e=t.dataTransfer.files)||void 0===e?void 0:e[0])&&!xr(t)&&!(t=>{let{dataTransfer:e}=t;return e.types.includes("Files")&&e.types.includes("text/html")&&e.getData("text/html").includes("urn:schemas-microsoft-com:office:office")})(t)},xr=function(t){const e=t.clipboardData;if(e){return Array.from(e.types).filter((t=>t.match(/file/i))).length===e.types.length&&e.files.length>=1}},Cr=function(t){const e=t.clipboardData;if(e)return e.types.includes("text/plain")&&1===e.types.length},Er=function(t){const e=[];return t.altKey&&e.push("alt"),t.shiftKey&&e.push("shift"),e.push(t.key),e},Sr=t=>({x:t.clientX,y:t.clientY}),Rr="[data-trix-attribute]",kr="[data-trix-action]",Tr="".concat(Rr,", ").concat(kr),wr="[data-trix-dialog]",Lr="".concat(wr,"[data-trix-active]"),Dr="".concat(wr," [data-trix-method]"),Nr="".concat(wr," [data-trix-input]"),Ir=(t,e)=>(e||(e=Fr(t)),t.querySelector("[data-trix-input][name='".concat(e,"']"))),Or=t=>t.getAttribute("data-trix-action"),Fr=t=>t.getAttribute("data-trix-attribute")||t.getAttribute("data-trix-dialog-attribute");class Pr extends q{constructor(t){super(t),this.didClickActionButton=this.didClickActionButton.bind(this),this.didClickAttributeButton=this.didClickAttributeButton.bind(this),this.didClickDialogButton=this.didClickDialogButton.bind(this),this.didKeyDownDialogInput=this.didKeyDownDialogInput.bind(this),this.element=t,this.attributes={},this.actions={},this.resetDialogInputs(),b("mousedown",{onElement:this.element,matchingSelector:kr,withCallback:this.didClickActionButton}),b("mousedown",{onElement:this.element,matchingSelector:Rr,withCallback:this.didClickAttributeButton}),b("click",{onElement:this.element,matchingSelector:Tr,preventDefault:!0}),b("click",{onElement:this.element,matchingSelector:Dr,withCallback:this.didClickDialogButton}),b("keydown",{onElement:this.element,matchingSelector:Nr,withCallback:this.didKeyDownDialogInput});}didClickActionButton(t,e){var i;null===(i=this.delegate)||void 0===i||i.toolbarDidClickButton(),t.preventDefault();const n=Or(e);return this.getDialog(n)?this.toggleDialog(n):null===(r=this.delegate)||void 0===r?void 0:r.toolbarDidInvokeAction(n,e);var r;}didClickAttributeButton(t,e){var i;null===(i=this.delegate)||void 0===i||i.toolbarDidClickButton(),t.preventDefault();const n=Fr(e);var r;this.getDialog(n)?this.toggleDialog(n):null===(r=this.delegate)||void 0===r||r.toolbarDidToggleAttribute(n);return this.refreshAttributeButtons()}didClickDialogButton(t,e){const i=y(e,{matchingSelector:wr});return this[e.getAttribute("data-trix-method")].call(this,i)}didKeyDownDialogInput(t,e){if(13===t.keyCode){t.preventDefault();const i=e.getAttribute("name"),n=this.getDialog(i);this.setAttribute(n);}if(27===t.keyCode)return t.preventDefault(),this.hideDialog()}updateActions(t){return this.actions=t,this.refreshActionButtons()}refreshActionButtons(){return this.eachActionButton(((t,e)=>{t.disabled=!1===this.actions[e];}))}eachActionButton(t){return Array.from(this.element.querySelectorAll(kr)).map((e=>t(e,Or(e))))}updateAttributes(t){return this.attributes=t,this.refreshAttributeButtons()}refreshAttributeButtons(){return this.eachAttributeButton(((t,e)=>(t.disabled=!1===this.attributes[e],this.attributes[e]||this.dialogIsVisible(e)?(t.setAttribute("data-trix-active",""),t.classList.add("trix-active")):(t.removeAttribute("data-trix-active"),t.classList.remove("trix-active")))))}eachAttributeButton(t){return Array.from(this.element.querySelectorAll(Rr)).map((e=>t(e,Fr(e))))}applyKeyboardCommand(t){const e=JSON.stringify(t.sort());for(const t of Array.from(this.element.querySelectorAll("[data-trix-key]"))){const i=t.getAttribute("data-trix-key").split("+");if(JSON.stringify(i.sort())===e)return v("mousedown",{onElement:t}),!0}return !1}dialogIsVisible(t){const e=this.getDialog(t);if(e)return e.hasAttribute("data-trix-active")}toggleDialog(t){return this.dialogIsVisible(t)?this.hideDialog():this.showDialog(t)}showDialog(t){var e,i;this.hideDialog(),null===(e=this.delegate)||void 0===e||e.toolbarWillShowDialog();const n=this.getDialog(t);n.setAttribute("data-trix-active",""),n.classList.add("trix-active"),Array.from(n.querySelectorAll("input[disabled]")).forEach((t=>{t.removeAttribute("disabled");}));const r=Fr(n);if(r){const e=Ir(n,t);e&&(e.value=this.attributes[r]||"",e.select());}return null===(i=this.delegate)||void 0===i?void 0:i.toolbarDidShowDialog(t)}setAttribute(t){var e;const i=Fr(t),n=Ir(t,i);return !n.willValidate||(n.setCustomValidity(""),n.checkValidity()&&this.isSafeAttribute(n))?(null===(e=this.delegate)||void 0===e||e.toolbarDidUpdateAttribute(i,n.value),this.hideDialog()):(n.setCustomValidity("Invalid value"),n.setAttribute("data-trix-validate",""),n.classList.add("trix-validate"),n.focus())}isSafeAttribute(t){return !t.hasAttribute("data-trix-validate-href")||si.isValidAttribute("a","href",t.value)}removeAttribute(t){var e;const i=Fr(t);return null===(e=this.delegate)||void 0===e||e.toolbarDidRemoveAttribute(i),this.hideDialog()}hideDialog(){const t=this.element.querySelector(Lr);var e;if(t)return t.removeAttribute("data-trix-active"),t.classList.remove("trix-active"),this.resetDialogInputs(),null===(e=this.delegate)||void 0===e?void 0:e.toolbarDidHideDialog((t=>t.getAttribute("data-trix-dialog"))(t))}resetDialogInputs(){Array.from(this.element.querySelectorAll(Nr)).forEach((t=>{t.setAttribute("disabled","disabled"),t.removeAttribute("data-trix-validate"),t.classList.remove("trix-validate");}));}getDialog(t){return this.element.querySelector("[data-trix-dialog=".concat(t,"]"))}}class Mr extends Yn{constructor(t){let{editorElement:e,document:i,html:n}=t;super(...arguments),this.editorElement=e,this.selectionManager=new Wn(this.editorElement),this.selectionManager.delegate=this,this.composition=new kn,this.composition.delegate=this,this.attachmentManager=new Sn(this.composition.getAttachments()),this.attachmentManager.delegate=this,this.inputController=2===_.getLevel()?new br(this.editorElement):new hr(this.editorElement),this.inputController.delegate=this,this.inputController.responder=this.composition,this.compositionController=new Gn(this.editorElement,this.composition),this.compositionController.delegate=this,this.toolbarController=new Pr(this.editorElement.toolbarElement),this.toolbarController.delegate=this,this.editor=new On(this.composition,this.selectionManager,this.editorElement),i?this.editor.loadDocument(i):this.editor.loadHTML(n);}registerSelectionManager(){return Ft.registerSelectionManager(this.selectionManager)}unregisterSelectionManager(){return Ft.unregisterSelectionManager(this.selectionManager)}render(){return this.compositionController.render()}reparse(){return this.composition.replaceHTML(this.editorElement.innerHTML)}compositionDidChangeDocument(t){if(this.notifyEditorElement("document-change"),!this.handlingInput)return this.render()}compositionDidChangeCurrentAttributes(t){return this.currentAttributes=t,this.toolbarController.updateAttributes(this.currentAttributes),this.updateCurrentActions(),this.notifyEditorElement("attributes-change",{attributes:this.currentAttributes})}compositionDidPerformInsertionAtRange(t){this.pasting&&(this.pastedRange=t);}compositionShouldAcceptFile(t){return this.notifyEditorElement("file-accept",{file:t})}compositionDidAddAttachment(t){const e=this.attachmentManager.manageAttachment(t);return this.notifyEditorElement("attachment-add",{attachment:e})}compositionDidEditAttachment(t){this.compositionController.rerenderViewForObject(t);const e=this.attachmentManager.manageAttachment(t);return this.notifyEditorElement("attachment-edit",{attachment:e}),this.notifyEditorElement("change")}compositionDidChangeAttachmentPreviewURL(t){return this.compositionController.invalidateViewForObject(t),this.notifyEditorElement("change")}compositionDidRemoveAttachment(t){const e=this.attachmentManager.unmanageAttachment(t);return this.notifyEditorElement("attachment-remove",{attachment:e})}compositionDidStartEditingAttachment(t,e){return this.attachmentLocationRange=this.composition.document.getLocationRangeOfAttachment(t),this.compositionController.installAttachmentEditorForAttachment(t,e),this.selectionManager.setLocationRange(this.attachmentLocationRange)}compositionDidStopEditingAttachment(t){this.compositionController.uninstallAttachmentEditor(),this.attachmentLocationRange=null;}compositionDidRequestChangingSelectionToLocationRange(t){if(!this.loadingSnapshot||this.isFocused())return this.requestedLocationRange=t,this.compositionRevisionWhenLocationRangeRequested=this.composition.revision,this.handlingInput?void 0:this.render()}compositionWillLoadSnapshot(){this.loadingSnapshot=!0;}compositionDidLoadSnapshot(){this.compositionController.refreshViewCache(),this.render(),this.loadingSnapshot=!1;}getSelectionManager(){return this.selectionManager}attachmentManagerDidRequestRemovalOfAttachment(t){return this.removeAttachment(t)}compositionControllerWillSyncDocumentView(){return this.inputController.editorWillSyncDocumentView(),this.selectionManager.lock(),this.selectionManager.clearSelection()}compositionControllerDidSyncDocumentView(){return this.inputController.editorDidSyncDocumentView(),this.selectionManager.unlock(),this.updateCurrentActions(),this.notifyEditorElement("sync")}compositionControllerDidRender(){this.requestedLocationRange&&(this.compositionRevisionWhenLocationRangeRequested===this.composition.revision&&this.selectionManager.setLocationRange(this.requestedLocationRange),this.requestedLocationRange=null,this.compositionRevisionWhenLocationRangeRequested=null),this.renderedCompositionRevision!==this.composition.revision&&(this.runEditorFilters(),this.composition.updateCurrentAttributes(),this.notifyEditorElement("render")),this.renderedCompositionRevision=this.composition.revision;}compositionControllerDidFocus(){return this.isFocusedInvisibly()&&this.setLocationRange({index:0,offset:0}),this.toolbarController.hideDialog(),this.notifyEditorElement("focus")}compositionControllerDidBlur(){return this.notifyEditorElement("blur")}compositionControllerDidSelectAttachment(t,e){return this.toolbarController.hideDialog(),this.composition.editAttachment(t,e)}compositionControllerDidRequestDeselectingAttachment(t){const e=this.attachmentLocationRange||this.composition.document.getLocationRangeOfAttachment(t);return this.selectionManager.setLocationRange(e[1])}compositionControllerWillUpdateAttachment(t){return this.editor.recordUndoEntry("Edit Attachment",{context:t.id,consolidatable:!0})}compositionControllerDidRequestRemovalOfAttachment(t){return this.removeAttachment(t)}inputControllerWillHandleInput(){this.handlingInput=!0,this.requestedRender=!1;}inputControllerDidRequestRender(){this.requestedRender=!0;}inputControllerDidHandleInput(){if(this.handlingInput=!1,this.requestedRender)return this.requestedRender=!1,this.render()}inputControllerDidAllowUnhandledInput(){return this.notifyEditorElement("change")}inputControllerDidRequestReparse(){return this.reparse()}inputControllerWillPerformTyping(){return this.recordTypingUndoEntry()}inputControllerWillPerformFormatting(t){return this.recordFormattingUndoEntry(t)}inputControllerWillCutText(){return this.editor.recordUndoEntry("Cut")}inputControllerWillPaste(t){return this.editor.recordUndoEntry("Paste"),this.pasting=!0,this.notifyEditorElement("before-paste",{paste:t})}inputControllerDidPaste(t){return t.range=this.pastedRange,this.pastedRange=null,this.pasting=null,this.notifyEditorElement("paste",{paste:t})}inputControllerWillMoveText(){return this.editor.recordUndoEntry("Move")}inputControllerWillAttachFiles(){return this.editor.recordUndoEntry("Drop Files")}inputControllerWillPerformUndo(){return this.editor.undo()}inputControllerWillPerformRedo(){return this.editor.redo()}inputControllerDidReceiveKeyboardCommand(t){return this.toolbarController.applyKeyboardCommand(t)}inputControllerDidStartDrag(){this.locationRangeBeforeDrag=this.selectionManager.getLocationRange();}inputControllerDidReceiveDragOverPoint(t){return this.selectionManager.setLocationRangeFromPointRange(t)}inputControllerDidCancelDrag(){this.selectionManager.setLocationRange(this.locationRangeBeforeDrag),this.locationRangeBeforeDrag=null;}locationRangeDidChange(t){return this.composition.updateCurrentAttributes(),this.updateCurrentActions(),this.attachmentLocationRange&&!Dt(this.attachmentLocationRange,t)&&this.composition.stopEditingAttachment(),this.notifyEditorElement("selection-change")}toolbarDidClickButton(){if(!this.getLocationRange())return this.setLocationRange({index:0,offset:0})}toolbarDidInvokeAction(t,e){return this.invokeAction(t,e)}toolbarDidToggleAttribute(t){if(this.recordFormattingUndoEntry(t),this.composition.toggleCurrentAttribute(t),this.render(),!this.selectionFrozen)return this.editorElement.focus()}toolbarDidUpdateAttribute(t,e){if(this.recordFormattingUndoEntry(t),this.composition.setCurrentAttribute(t,e),this.render(),!this.selectionFrozen)return this.editorElement.focus()}toolbarDidRemoveAttribute(t){if(this.recordFormattingUndoEntry(t),this.composition.removeCurrentAttribute(t),this.render(),!this.selectionFrozen)return this.editorElement.focus()}toolbarWillShowDialog(t){return this.composition.expandSelectionForEditing(),this.freezeSelection()}toolbarDidShowDialog(t){return this.notifyEditorElement("toolbar-dialog-show",{dialogName:t})}toolbarDidHideDialog(t){return this.thawSelection(),this.editorElement.focus(),this.notifyEditorElement("toolbar-dialog-hide",{dialogName:t})}freezeSelection(){if(!this.selectionFrozen)return this.selectionManager.lock(),this.composition.freezeSelection(),this.selectionFrozen=!0,this.render()}thawSelection(){if(this.selectionFrozen)return this.composition.thawSelection(),this.selectionManager.unlock(),this.selectionFrozen=!1,this.render()}canInvokeAction(t){return !!this.actionIsExternal(t)||!(null===(e=this.actions[t])||void 0===e||null===(e=e.test)||void 0===e||!e.call(this));var e;}invokeAction(t,e){return this.actionIsExternal(t)?this.notifyEditorElement("action-invoke",{actionName:t,invokingElement:e}):null===(i=this.actions[t])||void 0===i||null===(i=i.perform)||void 0===i?void 0:i.call(this);var i;}actionIsExternal(t){return /^x-./.test(t)}getCurrentActions(){const t={};for(const e in this.actions)t[e]=this.canInvokeAction(e);return t}updateCurrentActions(){const t=this.getCurrentActions();if(!Tt(t,this.currentActions))return this.currentActions=t,this.toolbarController.updateActions(this.currentActions),this.notifyEditorElement("actions-change",{actions:this.currentActions})}runEditorFilters(){let t=this.composition.getSnapshot();if(Array.from(this.editor.filters).forEach((e=>{const{document:i,selectedRange:n}=t;t=e.call(this.editor,t)||{},t.document||(t.document=i),t.selectedRange||(t.selectedRange=n);})),e=t,i=this.composition.getSnapshot(),!Dt(e.selectedRange,i.selectedRange)||!e.document.isEqualTo(i.document))return this.composition.loadSnapshot(t);var e,i;}updateInputElement(){const t=function(t,e){const i=xn[e];if(i)return i(t);throw new Error("unknown content type: ".concat(e))}(this.compositionController.getSerializableElement(),"text/html");return this.editorElement.setFormValue(t)}notifyEditorElement(t,e){switch(t){case"document-change":this.documentChangedSinceLastRender=!0;break;case"render":this.documentChangedSinceLastRender&&(this.documentChangedSinceLastRender=!1,this.notifyEditorElement("change"));break;case"change":case"attachment-add":case"attachment-edit":case"attachment-remove":this.updateInputElement();}return this.editorElement.notify(t,e)}removeAttachment(t){return this.editor.recordUndoEntry("Delete Attachment"),this.composition.removeAttachment(t),this.render()}recordFormattingUndoEntry(t){const e=mt(t),i=this.selectionManager.getLocationRange();if(e||!Lt(i))return this.editor.recordUndoEntry("Formatting",{context:this.getUndoContext(),consolidatable:!0})}recordTypingUndoEntry(){return this.editor.recordUndoEntry("Typing",{context:this.getUndoContext(this.currentAttributes),consolidatable:!0})}getUndoContext(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return [this.getLocationContext(),this.getTimeContext(),...Array.from(e)]}getLocationContext(){const t=this.selectionManager.getLocationRange();return Lt(t)?t[0].index:t}getTimeContext(){return V.interval>0?Math.floor((new Date).getTime()/V.interval):0}isFocused(){var t;return this.editorElement===(null===(t=this.editorElement.ownerDocument)||void 0===t?void 0:t.activeElement)}isFocusedInvisibly(){return this.isFocused()&&!this.getLocationRange()}get actions(){return this.constructor.actions}}wi(Mr,"actions",{undo:{test(){return this.editor.canUndo()},perform(){return this.editor.undo()}},redo:{test(){return this.editor.canRedo()},perform(){return this.editor.redo()}},link:{test(){return this.editor.canActivateAttribute("href")}},increaseNestingLevel:{test(){return this.editor.canIncreaseNestingLevel()},perform(){return this.editor.increaseNestingLevel()&&this.render()}},decreaseNestingLevel:{test(){return this.editor.canDecreaseNestingLevel()},perform(){return this.editor.decreaseNestingLevel()&&this.render()}},attachFiles:{test:()=>!0,perform(){return _.pickFiles(this.editor.insertFiles)}}}),Mr.proxyMethod("getSelectionManager().setLocationRange"),Mr.proxyMethod("getSelectionManager().getLocationRange");var Br=Object.freeze({__proto__:null,AttachmentEditorController:Kn,CompositionController:Gn,Controller:Yn,EditorController:Mr,InputController:sr,Level0InputController:hr,Level2InputController:br,ToolbarController:Pr}),_r=Object.freeze({__proto__:null,MutationObserver:Qn,SelectionChangeObserver:Ot}),jr=Object.freeze({__proto__:null,FileVerificationOperation:er,ImagePreloadOperation:ji});vt("trix-toolbar","%t {\n  display: block;\n}\n\n%t {\n  white-space: nowrap;\n}\n\n%t [data-trix-dialog] {\n  display: none;\n}\n\n%t [data-trix-dialog][data-trix-active] {\n  display: block;\n}\n\n%t [data-trix-dialog] [data-trix-validate]:invalid {\n  background-color: #ffdddd;\n}");class Wr extends HTMLElement{connectedCallback(){""===this.innerHTML&&(this.innerHTML=U.getDefaultHTML());}}let Ur=0;const Vr=function(t){if(!t.hasAttribute("contenteditable"))return t.setAttribute("contenteditable",""),function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.times=1,b(t,e)}("focus",{onElement:t,withCallback:()=>zr(t)})},zr=function(t){return qr(t),Hr()},qr=function(t){var e,i;if(null!==(e=(i=document).queryCommandSupported)&&void 0!==e&&e.call(i,"enableObjectResizing"))return document.execCommand("enableObjectResizing",!1,!1),b("mscontrolselect",{onElement:t,preventDefault:!0})},Hr=function(t){var e,i;if(null!==(e=(i=document).queryCommandSupported)&&void 0!==e&&e.call(i,"DefaultParagraphSeparator")){const{tagName:t}=n.default;if(["div","p"].includes(t))return document.execCommand("DefaultParagraphSeparator",!1,t)}},Jr=a.forcesObjectResizing?{display:"inline",width:"auto"}:{display:"inline-block",width:"1px"};vt("trix-editor","%t {\n    display: block;\n}\n\n%t:empty::before {\n    content: attr(placeholder);\n    color: graytext;\n    cursor: text;\n    pointer-events: none;\n    white-space: pre-line;\n}\n\n%t a[contenteditable=false] {\n    cursor: text;\n}\n\n%t img {\n    max-width: 100%;\n    height: auto;\n}\n\n%t ".concat(e," figcaption textarea {\n    resize: none;\n}\n\n%t ").concat(e," figcaption textarea.trix-autoresize-clone {\n    position: absolute;\n    left: -9999px;\n    max-height: 0px;\n}\n\n%t ").concat(e," figcaption[data-trix-placeholder]:empty::before {\n    content: attr(data-trix-placeholder);\n    color: graytext;\n}\n\n%t [data-trix-cursor-target] {\n    display: ").concat(Jr.display," !important;\n    width: ").concat(Jr.width," !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    border: none !important;\n}\n\n%t [data-trix-cursor-target=left] {\n    vertical-align: top !important;\n    margin-left: -1px !important;\n}\n\n%t [data-trix-cursor-target=right] {\n    vertical-align: bottom !important;\n    margin-right: -1px !important;\n}"));var Kr=new WeakMap,Gr=new WeakSet;class Yr{constructor(t){var e,i;Mi(e=this,i=Gr),i.add(e),Bi(this,Kr,{writable:!0,value:void 0}),this.element=t,Ni(this,Kr,t.attachInternals());}connectedCallback(){Pi(this,Gr,$r).call(this);}disconnectedCallback(){}get labels(){return Di(this,Kr).labels}get disabled(){var t;return null===(t=this.element.inputElement)||void 0===t?void 0:t.disabled}set disabled(t){this.element.toggleAttribute("disabled",t);}get required(){return this.element.hasAttribute("required")}set required(t){this.element.toggleAttribute("required",t),Pi(this,Gr,$r).call(this);}get validity(){return Di(this,Kr).validity}get validationMessage(){return Di(this,Kr).validationMessage}get willValidate(){return Di(this,Kr).willValidate}setFormValue(t){Pi(this,Gr,$r).call(this);}checkValidity(){return Di(this,Kr).checkValidity()}reportValidity(){return Di(this,Kr).reportValidity()}setCustomValidity(t){Pi(this,Gr,$r).call(this,t);}}function $r(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";const{required:e,value:i}=this.element,n=e&&!i,r=!!t,o=T("input",{required:e}),s=t||o.validationMessage;Di(this,Kr).setValidity({valueMissing:n,customError:r},s);}var Xr=new WeakMap,Zr=new WeakMap,Qr=new WeakMap;class to{constructor(t){Bi(this,Xr,{writable:!0,value:void 0}),Bi(this,Zr,{writable:!0,value:t=>{t.defaultPrevented||t.target===this.element.form&&this.element.reset();}}),Bi(this,Qr,{writable:!0,value:t=>{if(t.defaultPrevented)return;if(this.element.contains(t.target))return;const e=y(t.target,{matchingSelector:"label"});e&&Array.from(this.labels).includes(e)&&this.element.focus();}}),this.element=t;}connectedCallback(){Ni(this,Xr,function(t){if(t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby"))return;const e=function(){const e=Array.from(t.labels).map((e=>{if(!e.contains(t))return e.textContent})).filter((t=>t)),i=e.join(" ");return i?t.setAttribute("aria-label",i):t.removeAttribute("aria-label")};return e(),b("focus",{onElement:t,withCallback:e})}(this.element)),window.addEventListener("reset",Di(this,Zr),!1),window.addEventListener("click",Di(this,Qr),!1);}disconnectedCallback(){var t;null===(t=Di(this,Xr))||void 0===t||t.destroy(),window.removeEventListener("reset",Di(this,Zr),!1),window.removeEventListener("click",Di(this,Qr),!1);}get labels(){const t=[];this.element.id&&this.element.ownerDocument&&t.push(...Array.from(this.element.ownerDocument.querySelectorAll("label[for='".concat(this.element.id,"']"))||[]));const e=y(this.element,{matchingSelector:"label"});return e&&[this.element,null].includes(e.control)&&t.push(e),t}get disabled(){return console.warn("This browser does not support the [disabled] attribute for trix-editor elements."),!1}set disabled(t){console.warn("This browser does not support the [disabled] attribute for trix-editor elements.");}get required(){return console.warn("This browser does not support the [required] attribute for trix-editor elements."),!1}set required(t){console.warn("This browser does not support the [required] attribute for trix-editor elements.");}get validity(){return console.warn("This browser does not support the validity property for trix-editor elements."),null}get validationMessage(){return console.warn("This browser does not support the validationMessage property for trix-editor elements."),""}get willValidate(){return console.warn("This browser does not support the willValidate property for trix-editor elements."),!1}setFormValue(t){}checkValidity(){return console.warn("This browser does not support checkValidity() for trix-editor elements."),!0}reportValidity(){return console.warn("This browser does not support reportValidity() for trix-editor elements."),!0}setCustomValidity(t){console.warn("This browser does not support setCustomValidity(validationMessage) for trix-editor elements.");}}var eo=new WeakMap;class io extends HTMLElement{constructor(){super(),Bi(this,eo,{writable:!0,value:void 0}),Ni(this,eo,this.constructor.formAssociated?new Yr(this):new to(this));}get trixId(){return this.hasAttribute("trix-id")?this.getAttribute("trix-id"):(this.setAttribute("trix-id",++Ur),this.trixId)}get labels(){return Di(this,eo).labels}get disabled(){return Di(this,eo).disabled}set disabled(t){Di(this,eo).disabled=t;}get required(){return Di(this,eo).required}set required(t){Di(this,eo).required=t;}get validity(){return Di(this,eo).validity}get validationMessage(){return Di(this,eo).validationMessage}get willValidate(){return Di(this,eo).willValidate}get type(){return this.localName}get toolbarElement(){var t;if(this.hasAttribute("toolbar"))return null===(t=this.ownerDocument)||void 0===t?void 0:t.getElementById(this.getAttribute("toolbar"));if(this.parentNode){const t="trix-toolbar-".concat(this.trixId);return this.setAttribute("toolbar",t),this.internalToolbar=T("trix-toolbar",{id:t}),this.parentNode.insertBefore(this.internalToolbar,this),this.internalToolbar}}get form(){var t;return null===(t=this.inputElement)||void 0===t?void 0:t.form}get inputElement(){var t;if(this.hasAttribute("input"))return null===(t=this.ownerDocument)||void 0===t?void 0:t.getElementById(this.getAttribute("input"));if(this.parentNode){const t="trix-input-".concat(this.trixId);this.setAttribute("input",t);const e=T("input",{type:"hidden",id:t});return this.parentNode.insertBefore(e,this.nextElementSibling),e}}get editor(){var t;return null===(t=this.editorController)||void 0===t?void 0:t.editor}get name(){var t;return null===(t=this.inputElement)||void 0===t?void 0:t.name}get value(){var t;return null===(t=this.inputElement)||void 0===t?void 0:t.value}set value(t){var e;this.defaultValue=t,null===(e=this.editor)||void 0===e||e.loadHTML(this.defaultValue);}attributeChangedCallback(t,e,i){"connected"===t&&this.isConnected&&null!=e&&e!==i&&requestAnimationFrame((()=>this.reconnect()));}notify(t,e){if(this.editorController)return v("trix-".concat(t),{onElement:this,attributes:e})}setFormValue(t){this.inputElement&&(this.inputElement.value=t,Di(this,eo).setFormValue(t));}connectedCallback(){this.hasAttribute("data-trix-internal")||(Vr(this),function(t){if(!t.hasAttribute("role"))t.setAttribute("role","textbox");}(this),this.editorController||(v("trix-before-initialize",{onElement:this}),this.editorController=new Mr({editorElement:this,html:this.defaultValue=this.value}),requestAnimationFrame((()=>v("trix-initialize",{onElement:this})))),this.editorController.registerSelectionManager(),Di(this,eo).connectedCallback(),this.toggleAttribute("connected",!0),function(t){if(!document.querySelector(":focus")&&t.hasAttribute("autofocus")&&document.querySelector("[autofocus]")===t)t.focus();}(this));}disconnectedCallback(){var t;null===(t=this.editorController)||void 0===t||t.unregisterSelectionManager(),Di(this,eo).disconnectedCallback(),this.toggleAttribute("connected",!1);}reconnect(){this.removeInternalToolbar(),this.disconnectedCallback(),this.connectedCallback();}removeInternalToolbar(){var t;null===(t=this.internalToolbar)||void 0===t||t.remove(),this.internalToolbar=null;}checkValidity(){return Di(this,eo).checkValidity()}reportValidity(){return Di(this,eo).reportValidity()}setCustomValidity(t){Di(this,eo).setCustomValidity(t);}formDisabledCallback(t){this.inputElement&&(this.inputElement.disabled=t),this.toggleAttribute("contenteditable",!t);}formResetCallback(){this.reset();}reset(){this.value=this.defaultValue;}}wi(io,"formAssociated","ElementInternals"in window),wi(io,"observedAttributes",["connected"]);const no={VERSION:t,config:z,core:Cn,models:Un,views:Vn,controllers:Br,observers:_r,operations:jr,elements:Object.freeze({__proto__:null,TrixEditorElement:io,TrixToolbarElement:Wr}),filters:Object.freeze({__proto__:null,Filter:Dn,attachmentGalleryFilter:Nn})};Object.assign(no,Un),window.Trix=no,setTimeout((function(){customElements.get("trix-toolbar")||customElements.define("trix-toolbar",Wr),customElements.get("trix-editor")||customElements.define("trix-editor",io);}),0);

//

  no.elements.TrixEditorElement.formAssociated = false;

  var script$1 = {
    name: 'EditorWrapper',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    },
  };

var css_248z$1 = "";
styleInject(css_248z$1);

/* script */
const __vue_script__$1 = script$1;
/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: _vm.classes.container },
    [
      _c("input", {
        attrs: { id: "editor-input-" + _vm.id, type: "hidden" },
        domProps: { value: _vm.value },
      }),
      _vm._v(" "),
      _c(
        "trix-editor",
        _vm._b(
          {
            ref: "trix$",
            on: {
              "trix-change": _vm.handleChange,
              "trix-blur": _vm.handleBlur,
              "trix-file-accept": _vm.handleFileAccept,
              "trix-attachment-add": _vm.handleAttachmentAdd,
            },
          },
          "trix-editor",
          _vm.options,
          false
        )
      ),
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

  var EditorWrapper$1 = __vue_component__$1;

var script = {
    name: 'EditorWrapper',
    render: EditorWrapper$1.render,
    data: EditorWrapper$1.data,
  };

var css_248z = "@charset \"UTF-8\";\n\ntrix-toolbar {\n  padding: 0.5rem 0.375rem;\n  border-radius: 0.25rem;\n  flex-wrap: wrap;\n}\n\ntrix-toolbar .trix-button-row {\n  display: block;\n  margin-bottom: -0.25rem;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  overflow-x: auto;\n}\n\ntrix-toolbar .trix-button-group {\n  display: inline;\n}\n\ntrix-toolbar .trix-button-group-spacer {\n  display: hidden;\n  flex-grow: 1;\n}\n\ntrix-toolbar .trix-button {\n  position: relative;\n  margin-bottom: 0.25rem;\n  color: var(--vf-bg-icon);\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  outline: none;\n  border-radius: 0.25rem;\n  white-space: nowrap;\n  float: left;\n  border: 0;\n  background: none;\n  cursor: pointer;\n}\n\ntrix-toolbar .trix-button.trix-active {\n  background-color: var(--vf-bg-selected);\n  filter: brightness(0.9);\n}\n\ntrix-toolbar .trix-button:not(.trix-active):hover {\n  background-color: var(--vf-bg-selected);\n}\n\ntrix-toolbar .trix-button--icon {\n  width: 2.5rem;\n  height: 1.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  text-indent: -9999px;\n}\n\ntrix-toolbar .trix-button--icon::before {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  display: inline-block;\n  content: \"\";\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-position: center center;\n  -webkit-mask-position: center center;\n  mask-size: contain;\n  -webkit-mask-size: contain;\n  background-color: var(--vf-bg-icon);\n  top: 0.125rem;\n  bottom: 0.125rem;\n  margin-top: 0.125rem;\n  margin-bottom: 0.125rem;\n}\n\ntrix-toolbar .trix-button--icon.trix-active::before {\n  opacity: 1;\n}\n\ntrix-toolbar .trix-button--icon-attach::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645 117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41 31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51 110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0 16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699 46.054-.001l189.465-189.489c25.987-25.989 25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249 39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174 739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685 4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034 58.092-152.004 58.093-210.048.041z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645 117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41 31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51 110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0 16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699 46.054-.001l189.465-189.489c25.987-25.989 25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249 39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174 739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685 4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034 58.092-152.004 58.093-210.048.041z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-toolbar .trix-button--icon-bold::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-toolbar .trix-button--icon-italic::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-toolbar .trix-button--icon-link::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-toolbar .trix-button--icon-strike::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-180.24 96A43 43 0 0 1 336 356.45 43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64 114.25 114.25 0 0 0-5.34-24.36z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-180.24 96A43 43 0 0 1 336 356.45 43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64 114.25 114.25 0 0 0-5.34-24.36z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-toolbar .trix-button--icon-quote::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z'%3e%3c/path%3e%3c/svg%3e\");\n  top: 0.25rem;\n  bottom: 0.25rem;\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\ntrix-toolbar .trix-button--icon-heading-1::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-toolbar .trix-button--icon-code::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 640 304' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M165.9%2c291.3 L209.4%2c244.9 C214%2c240 213.7%2c232.2 208.6%2c227.7 L118%2c148 L208.6%2c68.3 C213.7%2c63.8 214.1%2c56 209.4%2c51.1 L165.9%2c4.7 C161.4%2c-0.1 153.8%2c-0.4 148.9%2c4.2 L4.8%2c139.2 C-0.3%2c143.9 -0.3%2c152 4.8%2c156.7 L148.9%2c291.8 C153.8%2c296.4 161.4%2c296.2 165.9%2c291.3 Z M493.1%2c291.9 L637.2%2c156.8 C642.3%2c152.1 642.3%2c144 637.2%2c139.3 L493.1%2c4.1 C488.3%2c-0.4 480.7%2c-0.2 476.1%2c4.6 L432.6%2c51 C428%2c55.9 428.3%2c63.7 433.4%2c68.2 L524%2c148 L433.4%2c227.7 C428.3%2c232.2 427.9%2c240 432.6%2c244.9 L476.1%2c291.3 C480.6%2c296.2 488.2%2c296.4 493.1%2c291.9 Z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 640 304' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M165.9%2c291.3 L209.4%2c244.9 C214%2c240 213.7%2c232.2 208.6%2c227.7 L118%2c148 L208.6%2c68.3 C213.7%2c63.8 214.1%2c56 209.4%2c51.1 L165.9%2c4.7 C161.4%2c-0.1 153.8%2c-0.4 148.9%2c4.2 L4.8%2c139.2 C-0.3%2c143.9 -0.3%2c152 4.8%2c156.7 L148.9%2c291.8 C153.8%2c296.4 161.4%2c296.2 165.9%2c291.3 Z M493.1%2c291.9 L637.2%2c156.8 C642.3%2c152.1 642.3%2c144 637.2%2c139.3 L493.1%2c4.1 C488.3%2c-0.4 480.7%2c-0.2 476.1%2c4.6 L432.6%2c51 C428%2c55.9 428.3%2c63.7 433.4%2c68.2 L524%2c148 L433.4%2c227.7 C428.3%2c232.2 427.9%2c240 432.6%2c244.9 L476.1%2c291.3 C480.6%2c296.2 488.2%2c296.4 493.1%2c291.9 Z'%3e%3c/path%3e%3c/svg%3e\");\n  top: 0.375rem;\n  bottom: 0.375rem;\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\ntrix-toolbar .trix-button--icon-bullet-list::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e\");\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\ntrix-toolbar .trix-button--icon-number-list::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z'%3e%3c/path%3e%3c/svg%3e\");\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\ntrix-toolbar .trix-button--icon-undo::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'%3e%3c/path%3e%3c/svg%3e\");\n  top: 0.25rem;\n  bottom: 0.25rem;\n}\n\ntrix-toolbar .trix-button--icon-redo::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z'%3e%3c/path%3e%3c/svg%3e\");\n  top: 0.25rem;\n  bottom: 0.25rem;\n}\n\ntrix-toolbar .trix-button--icon-decrease-nesting-level::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100.682584%2c116.695158 L4.68258422%2c212.695158 C-1.56086141%2c218.942698 -1.56086141%2c229.067619 4.68258422%2c235.315158 L100.682584%2c331.315158 C110.722584%2c341.335158 127.992584%2c334.215158 127.992584%2c319.995158 L127.992584%2c127.995158 C127.992584%2c113.685158 110.662584%2c106.695158 100.682584%2c116.695158 Z M432%2c384 L16%2c384 C7.163444%2c384 1.082166e-15%2c391.163444 0%2c400 L0%2c432 C1.082166e-15%2c440.836556 7.163444%2c448 16%2c448 L432%2c448 C440.836556%2c448 448%2c440.836556 448%2c432 L448%2c400 C448%2c391.163444 440.836556%2c384 432%2c384 Z M204.83%2c256 C201.426459%2c255.997344 198.161555%2c257.348219 195.754887%2c259.754887 C193.348219%2c262.161555 191.997344%2c265.426459 192%2c268.83 L192%2c307.17 C191.997344%2c310.573541 193.348219%2c313.838445 195.754887%2c316.245113 C198.161555%2c318.651781 201.426459%2c320.002656 204.83%2c320 L435.17%2c320 C438.573541%2c320.002656 441.838445%2c318.651781 444.245113%2c316.245113 C446.651781%2c313.838445 448.002656%2c310.573541 448%2c307.17 L448%2c268.83 C448.002656%2c265.426459 446.651781%2c262.161555 444.245113%2c259.754887 C441.838445%2c257.348219 438.573541%2c255.997344 435.17%2c256 L204.83%2c256 Z M435.17%2c128 L204.83%2c128 C201.426459%2c127.997344 198.161555%2c129.348219 195.754887%2c131.754887 C193.348219%2c134.161555 191.997344%2c137.426459 192%2c140.83 L192%2c179.17 C191.997344%2c182.573541 193.348219%2c185.838445 195.754887%2c188.245113 C198.161555%2c190.651781 201.426459%2c192.002656 204.83%2c192 L435.17%2c192 C438.573541%2c192.002656 441.838445%2c190.651781 444.245113%2c188.245113 C446.651781%2c185.838445 448.002656%2c182.573541 448%2c179.17 L448%2c140.83 C448.002656%2c137.426459 446.651781%2c134.161555 444.245113%2c131.754887 C441.838445%2c129.348219 438.573541%2c127.997344 435.17%2c128 Z M432%2c0 L16%2c0 C7.163444%2c0 1.082166e-15%2c7.163444 0%2c16 L0%2c48 C1.082166e-15%2c56.836556 7.163444%2c64 16%2c64 L432%2c64 C440.836556%2c64 448%2c56.836556 448%2c48 L448%2c16 C448%2c7.163444 440.836556%2c0 432%2c0 Z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100.682584%2c116.695158 L4.68258422%2c212.695158 C-1.56086141%2c218.942698 -1.56086141%2c229.067619 4.68258422%2c235.315158 L100.682584%2c331.315158 C110.722584%2c341.335158 127.992584%2c334.215158 127.992584%2c319.995158 L127.992584%2c127.995158 C127.992584%2c113.685158 110.662584%2c106.695158 100.682584%2c116.695158 Z M432%2c384 L16%2c384 C7.163444%2c384 1.082166e-15%2c391.163444 0%2c400 L0%2c432 C1.082166e-15%2c440.836556 7.163444%2c448 16%2c448 L432%2c448 C440.836556%2c448 448%2c440.836556 448%2c432 L448%2c400 C448%2c391.163444 440.836556%2c384 432%2c384 Z M204.83%2c256 C201.426459%2c255.997344 198.161555%2c257.348219 195.754887%2c259.754887 C193.348219%2c262.161555 191.997344%2c265.426459 192%2c268.83 L192%2c307.17 C191.997344%2c310.573541 193.348219%2c313.838445 195.754887%2c316.245113 C198.161555%2c318.651781 201.426459%2c320.002656 204.83%2c320 L435.17%2c320 C438.573541%2c320.002656 441.838445%2c318.651781 444.245113%2c316.245113 C446.651781%2c313.838445 448.002656%2c310.573541 448%2c307.17 L448%2c268.83 C448.002656%2c265.426459 446.651781%2c262.161555 444.245113%2c259.754887 C441.838445%2c257.348219 438.573541%2c255.997344 435.17%2c256 L204.83%2c256 Z M435.17%2c128 L204.83%2c128 C201.426459%2c127.997344 198.161555%2c129.348219 195.754887%2c131.754887 C193.348219%2c134.161555 191.997344%2c137.426459 192%2c140.83 L192%2c179.17 C191.997344%2c182.573541 193.348219%2c185.838445 195.754887%2c188.245113 C198.161555%2c190.651781 201.426459%2c192.002656 204.83%2c192 L435.17%2c192 C438.573541%2c192.002656 441.838445%2c190.651781 444.245113%2c188.245113 C446.651781%2c185.838445 448.002656%2c182.573541 448%2c179.17 L448%2c140.83 C448.002656%2c137.426459 446.651781%2c134.161555 444.245113%2c131.754887 C441.838445%2c129.348219 438.573541%2c127.997344 435.17%2c128 Z M432%2c0 L16%2c0 C7.163444%2c0 1.082166e-15%2c7.163444 0%2c16 L0%2c48 C1.082166e-15%2c56.836556 7.163444%2c64 16%2c64 L432%2c64 C440.836556%2c64 448%2c56.836556 448%2c48 L448%2c16 C448%2c7.163444 440.836556%2c0 432%2c0 Z'%3e%3c/path%3e%3c/svg%3e\");\n  margin-bottom: 0;\n}\n\ntrix-toolbar .trix-button--icon-increase-nesting-level::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M27.31 363.3l96-96a16 16 0 0 0 0-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288zm0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160zM432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M27.31 363.3l96-96a16 16 0 0 0 0-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288zm0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160zM432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e\");\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\ntrix-toolbar .trix-dialogs {\n  position: relative;\n}\n\ntrix-toolbar .trix-dialog {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 1rem 0.625rem;\n  background-color: var(--vf-bg-input);\n  box-shadow: 0 0px 15px 0px rgba(0, 0, 0, 0.3);\n  margin-top: 0.375rem;\n  border-radius: 0.25rem;\n  z-index: 2;\n}\n\ntrix-toolbar .trix-input--dialog {\n  padding: 0.375rem 0.75rem;\n  border: 1px solid var(--vf-border-color-input);\n  border-radius: 0.25rem;\n  margin-right: 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  background: var(--vf-bg-input);\n  color: var(--vf-color-input);\n}\n\ntrix-toolbar .trix-input--dialog:focus {\n  outline: var(--vf-ring-width) solid var(--vf-ring-color) !important;\n}\n\ntrix-toolbar .trix-input--dialog.validate:invalid {\n  border-color: var(--vf-color-danger);\n}\n\ntrix-toolbar .trix-button--dialog {\n  padding: 0.5rem;\n  border-left-width: 1px;\n  border-color: var(--vf-border-color-input);\n  background-color: transparent;\n  border-radius: 0;\n}\n\ntrix-toolbar .trix-button--dialog:not(.trix-active):hover {\n  background-color: transparent;\n}\n\ntrix-toolbar .trix-button--dialog:first-of-type {\n  border: 0;\n}\n\ntrix-toolbar .trix-dialog--link {\n  max-width: 36rem;\n}\n\ntrix-toolbar .trix-dialog__link-fields {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\ntrix-toolbar .trix-dialog__link-fields .trix-input {\n  flex: 1 1 0%;\n}\n\ntrix-toolbar .trix-dialog__link-fields .trix-button-group {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\ntrix-editor {\n  padding-left: var(--vf-px-input);\n  padding-right: var(--vf-px-input);\n  padding-bottom: var(--vf-py-input);\n  border-radius: var(--vf-radius-large);\n  outline: none;\n  min-height: 6rem;\n}\n\ntrix-editor:empty:not(:focus)::before {\n  color: var(--vf-color-placeholder);\n}\n\ntrix-editor [data-trix-mutable]:not(.attachment__caption-editor) {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\ntrix-editor [data-trix-mutable]::-moz-selection,\ntrix-editor [data-trix-cursor-target]::-moz-selection,\ntrix-editor [data-trix-mutable] ::-moz-selection {\n  background-image: none;\n}\n\ntrix-editor [data-trix-mutable]::-moz-selection, trix-editor [data-trix-cursor-target]::-moz-selection, trix-editor [data-trix-mutable] ::-moz-selection {\n  background-image: none;\n}\n\ntrix-editor [data-trix-mutable]::selection,\ntrix-editor [data-trix-cursor-target]::selection,\ntrix-editor [data-trix-mutable] ::selection {\n  background-image: none;\n}\n\ntrix-editor [data-trix-mutable].attachment__caption-editor:focus::-moz-selection {\n  background: highlight;\n}\n\ntrix-editor [data-trix-mutable].attachment__caption-editor:focus::selection {\n  background: highlight;\n}\n\ntrix-editor [data-trix-mutable].attachment.attachment--file {\n  background-color: var(--vf-bg-selected);\n}\n\ntrix-editor [data-trix-mutable].attachment img {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n\ntrix-editor .attachment {\n  position: relative;\n}\n\ntrix-editor .attachment:hover {\n  cursor: default;\n}\n\ntrix-editor .attachment--preview .attachment__caption:hover {\n  cursor: text;\n}\n\ntrix-editor .attachment__progress {\n  position: absolute;\n  z-index: 1;\n  height: 1.25rem;\n  top: 50%;\n  left: 0;\n  transform: translateY(-0.625rem);\n  width: 100%;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  opacity: 0.2;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\ntrix-editor .attachment__progress[value=\"100\"] {\n  opacity: 0;\n}\n\ntrix-editor .attachment__caption-editor {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  text-align: center;\n  vertical-align: top;\n  width: 100%;\n  border-width: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: 0;\n  background: var(--vf-bg-input);\n  color: var(--vf-color-input);\n  font-family: inherit;\n}\n\ntrix-editor .attachment__toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  transform: translateY(-50%);\n  text-align: center;\n  width: 100%;\n}\n\ntrix-editor .trix-button-group {\n  display: inline-flex;\n}\n\ntrix-editor .trix-button {\n  position: relative;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  margin: 0;\n  background-color: transparent;\n  color: var(--vf-bg-icon);\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  white-space: nowrap;\n  border-radius: 0;\n  border-width: 0;\n  outline: 0;\n  cursor: pointer;\n}\n\ntrix-editor .trix-button--remove {\n  display: inline-block;\n  overflow-x: hidden;\n  padding: 0;\n  background-color: var(--vf-bg-input);\n  line-height: 1.75rem;\n  border-color: var(--vf-color-selected);\n  border-radius: 9999px;\n  border-width: 1px;\n  border-style: solid;\n  outline: 0;\n  text-indent: -9999px;\n  width: 24px;\n  height: 24px;\n}\n\ntrix-editor .trix-button--remove:hover {\n  background-color: var(--vf-bg-selected);\n}\n\ntrix-editor .trix-button--remove::before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  top: 0.125rem;\n  right: 0.125rem;\n  bottom: 0.125rem;\n  left: 0.125rem;\n  background-color: var(--vf-color-input);\n  opacity: 0.7;\n  background-position: center;\n  background-repeat: no-repeat;\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-position: center center;\n  -webkit-mask-position: center center;\n  mask-size: contain;\n  -webkit-mask-size: contain;\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-editor .attachment__metadata-container {\n  position: relative;\n}\n\ntrix-editor .attachment__metadata {\n  position: absolute;\n  top: 1rem;\n  left: 50%;\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  background-color: #000000;\n  opacity: 0.7;\n  transform: translateX(-50%);\n  color: #ffffff;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  border-radius: 0.25rem;\n}\n\ntrix-editor .attachment__metadata .attachment__name {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  vertical-align: bottom;\n  white-space: nowrap;\n  max-width: 100%;\n}\n\ntrix-editor .attachment__metadata .attachment__size {\n  margin-left: 0.25rem;\n  white-space: nowrap;\n}\n\n.trix-content h1,\ntrix-editor h1 {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n  font-weight: 700;\n  line-height: 1.25;\n}\n\n.trix-content a,\ntrix-editor a {\n  color: var(--vf-primary);\n}\n\n.trix-content ul,\ntrix-editor ul {\n  padding-left: 2.5rem;\n  list-style-type: disc;\n}\n\n.trix-content [dir=rtl] ul,\ntrix-editor [dir=rtl] ul {\n  padding-right: 2.5rem;\n  list-style-type: disc;\n}\n\n.trix-content ol,\ntrix-editor ol {\n  padding-left: 2.5rem;\n  list-style-type: decimal;\n}\n\n.trix-content [dir=rtl] ol,\ntrix-editor [dir=rtl] ol {\n  padding-right: 2.5rem;\n  list-style-type: decimal;\n}\n\n.trix-content blockquote,\ntrix-editor blockquote {\n  padding-left: 0.625rem;\n  border-left-width: 4px;\n  border-color: var(--vf-gray-300);\n  border-left-style: solid;\n  margin: 0;\n}\n\n.trix-content [dir=rtl] blockquote,\n.trix-content blockquote[dir=rtl],\ntrix-editor [dir=rtl] blockquote,\ntrix-editor blockquote[dir=rtl] {\n  padding-left: 0.625rem;\n  border-left-width: 4px;\n  border-color: var(--vf-gray-300);\n}\n\n.trix-content pre,\ntrix-editor pre {\n  display: inline-block;\n  overscroll-behavior-x: auto;\n  padding: 0.5rem;\n  background-color: var(--vf-gray-50);\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  vertical-align: top;\n  white-space: pre;\n  width: 100%;\n}\n\n.trix-content img,\ntrix-editor img {\n  max-width: 100%;\n  height: auto;\n}\n\n.trix-content .attachment__caption,\ntrix-editor .attachment__caption {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  text-align: center;\n}\n\n.trix-content .attachment__caption .attachment__name + .attachment__size::before,\ntrix-editor .attachment__caption .attachment__name + .attachment__size::before {\n  content: \" · \";\n}\n\n.trix-content * {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.trix-content .attachment {\n  display: inline-block;\n  position: relative;\n  max-width: 100%;\n}\n\n.trix-content .attachment a {\n  text-decoration: none;\n}\n\n.trix-content .attachment--preview {\n  text-align: center;\n  width: 100%;\n}\n\n.trix-content .attachment--preview .attachment__caption {\n  color: var(--vf-gray-500);\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.trix-content .attachment--file {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  margin: 0.125rem;\n  margin-top: 0;\n  color: var(--vf-gray-700);\n  line-height: 1;\n  border-radius: 0.25rem;\n  border-width: 1px;\n  border-color: var(--vf-gray-300);\n}\n\n.trix-content .attachment-gallery {\n  display: flex;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.trix-content .attachment-gallery .attachment {\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  flex-grow: 1;\n  flex-shrink: 0;\n  width: 33.333333%;\n}\n\n.trix-content .attachment-gallery.attachment-gallery--2 .attachment, .trix-content .attachment-gallery.attachment-gallery--4 .attachment {\n  width: 50%;\n}\n\n.trix-content .attachment__progress {\n  display: none;\n}\n\n[class*=form-editor-sm] trix-editor {\n  padding-left: var(--vf-px-input-sm);\n  padding-right: var(--vf-px-input-sm);\n  padding-bottom: var(--vf-py-input-sm);\n  border-radius: var(--vf-radius-large-sm);\n  min-height: 5rem;\n}\n\n[class*=form-editor-sm] .trix-content h1,\n[class*=form-editor-sm] trix-editor h1 {\n  font-size: 1.625rem;\n  font-weight: 700;\n  line-height: 1.25;\n}\n\n[class*=form-editor-sm] trix-toolbar {\n  padding: var(--vf-py-input-sm) var(--vf-py-input-sm);\n}\n\n[class*=form-editor-sm] trix-toolbar .trix-button--icon {\n  width: 2.25rem;\n}\n\n[class*=form-editor-lg] trix-editor {\n  padding-left: var(--vf-px-input-lg);\n  padding-right: var(--vf-px-input-lg);\n  padding-bottom: var(--vf-py-input-lg);\n  border-radius: var(--vf-radius-large-lg);\n}\n\n[class*=form-editor-disabled] trix-toolbar {\n  pointer-events: none !important;\n}\n\n[class*=form-editor-hide-bold] .trix-button--icon-bold {\n  display: none;\n}\n\n[class*=form-editor-hide-italic] .trix-button--icon-italic {\n  display: none;\n}\n\n[class*=form-editor-hide-strike] .trix-button--icon-strike {\n  display: none;\n}\n\n[class*=form-editor-hide-link] .trix-button--icon-link {\n  display: none;\n}\n\n[class*=form-editor-hide-heading] .trix-button--icon-heading-1 {\n  display: none;\n}\n\n[class*=form-editor-hide-quote] .trix-button--icon-quote {\n  display: none;\n}\n\n[class*=form-editor-hide-code] .trix-button--icon-code {\n  display: none;\n}\n\n[class*=form-editor-hide-bullet-list] .trix-button--icon-bullet-list {\n  display: none;\n}\n\n[class*=form-editor-hide-number-list] .trix-button--icon-number-list {\n  display: none;\n}\n\n[class*=form-editor-hide-decrease-nesting] .trix-button--icon-decrease-nesting-level {\n  display: none;\n}\n\n[class*=form-editor-hide-increase-nesting] .trix-button--icon-increase-nesting-level {\n  display: none;\n}\n\n[class*=form-editor-hide-attach] .trix-button--icon-attach {\n  display: none;\n}\n\n[class*=form-editor-hide-undo] .trix-button--icon-undo {\n  display: none;\n}\n\n[class*=form-editor-hide-redo] .trix-button--icon-redo {\n  display: none;\n}\n\n.dark .trix-content blockquote,\n.dark trix-editor blockquote {\n  border-color: var(--vf-dark-700);\n}\n\n.dark .trix-content pre,\n.dark trix-editor pre {\n  background-color: var(--vf-dark-900);\n}";
styleInject(css_248z);

/* script */
const __vue_script__ = script;
/* template */

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

  var EditorWrapper = __vue_component__;

// prefix

function columns (breakpoint, size) {
  var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var safelist = ['col-span-1', 'col-span-2', 'col-span-3', 'col-span-4', 'col-span-5', 'col-span-6', 'col-span-7', 'col-span-8', 'col-span-9', 'col-span-10', 'col-span-11', 'col-span-12', 'sm:col-span-1', 'sm:col-span-2', 'sm:col-span-3', 'sm:col-span-4', 'sm:col-span-5', 'sm:col-span-6', 'sm:col-span-7', 'sm:col-span-8', 'sm:col-span-9', 'sm:col-span-10', 'sm:col-span-11', 'sm:col-span-12', 'md:col-span-1', 'md:col-span-2', 'md:col-span-3', 'md:col-span-4', 'md:col-span-5', 'md:col-span-6', 'md:col-span-7', 'md:col-span-8', 'md:col-span-9', 'md:col-span-10', 'md:col-span-11', 'md:col-span-12', 'lg:col-span-1', 'lg:col-span-2', 'lg:col-span-3', 'lg:col-span-4', 'lg:col-span-5', 'lg:col-span-6', 'lg:col-span-7', 'lg:col-span-8', 'lg:col-span-9', 'lg:col-span-10', 'lg:col-span-11', 'lg:col-span-12', 'xl:col-span-1', 'xl:col-span-2', 'xl:col-span-3', 'xl:col-span-4', 'xl:col-span-5', 'xl:col-span-6', 'xl:col-span-7', 'xl:col-span-8', 'xl:col-span-9', 'xl:col-span-10', 'xl:col-span-11', 'xl:col-span-12', '2xl:col-span-1', '2xl:col-span-2', '2xl:col-span-3', '2xl:col-span-4', '2xl:col-span-5', '2xl:col-span-6', '2xl:col-span-7', '2xl:col-span-8', '2xl:col-span-9', '2xl:col-span-10', '2xl:col-span-11', '2xl:col-span-12'];
  switch (breakpoint) {
    case 'default':
      return "".concat(prefix, "col-span-").concat(size);
    case 'safelist':
      return safelist;
    default:
      return "".concat(breakpoint, ":").concat(prefix, "col-span-").concat(size);
  }
}

// prefix

var inputStates = {
  default: "" + "form-bg-input " + "form-color-input " + "form-border-color-input " + "hover:form-bg-input-hover " + "hover:form-color-input-hover " + "hover:form-border-color-input-hover " + "hover:form-shadow-input-hover " + "focused:form-bg-input-focus " + "focused:form-color-input-focus " + "focused:form-border-color-input-focus " + "focused:form-shadow-input-focus " + "focused:form-ring " + "focused-hover:form-shadow-input-hover",
  disabled: "" + "form-bg-disabled " + "form-color-disabled " + "form-border-color-input",
  success: "" + "form-bg-input-success " + "form-color-input-success " + "form-border-color-input-success " + "hover:form-shadow-input-hover " + "focused:form-shadow-input-focus " + "focused:form-ring " + "focused-hover:form-shadow-input-hover",
  danger: "" + "form-bg-input-danger " + "form-color-input-danger " + "form-border-color-input-danger " + "hover:form-shadow-input-hover " + "focused:form-shadow-input-focus " + "focused:form-ring " + "focused-hover:form-shadow-input-hover"
};
var checkboxStates = {
  default: "" + "form-bg-checkbox " + "form-border-color-checkbox " + "hover:form-bg-checkbox-hover " + "hover:form-border-color-checkbox-hover " + "hover:form-shadow-handles-hover " + "focused:form-bg-checkbox-focus " + "focused:form-border-color-checkbox-focus " + "focused:form-shadow-handles-focus " + "focused-hover:form-shadow-handles-hover " + "checked:form-bg-primary " + "checked:form-border-color-checked " + "checked-hover:form-bg-primary " + "checked-hover:form-border-color-checked " + "checked-focused:form-bg-primary",
  disabled: "" + "form-bg-disabled " + "form-border-color-checkbox " + "opacity-50 " + "checked:form-bg-primary " + "checked:form-border-color-checked",
  danger: "" + "form-bg-checkbox-danger " + "form-border-color-checkbox-danger " + "hover:form-shadow-handles-hover " + "focused:form-shadow-handles-focus " + "focused-hover:form-shadow-handles-hover " + "checked:form-bg-primary " + "checked:form-border-color-checked"
};
var checkbox = {
  input: 'flex-shrink-0 appearance-none cursor-pointer outline-zero transition-input duration-200 border-solid form-border-width-checkbox focus:form-ring checked:form-bg-icon-check',
  input_default: checkboxStates.default,
  input_disabled: checkboxStates.disabled,
  input_sm: 'form-w-checkbox-sm form-h-checkbox-sm form-radius-checkbox-sm form-mr-space-checkbox-sm rtl:mr-0 rtl:form-ml-space-checkbox-sm',
  input_md: 'form-w-checkbox form-h-checkbox form-radius-checkbox form-mr-space-checkbox rtl:mr-0 rtl:form-ml-space-checkbox',
  input_lg: 'form-w-checkbox-lg form-h-checkbox-lg form-radius-checkbox-lg form-mr-space-checkbox-lg rtl:mr-0 rtl:form-ml-space-checkbox-lg',
  input_left: '!ml-0',
  input_left_sm: '!form-mr-space-checkbox-sm',
  input_left_md: '!form-mr-space-checkbox',
  input_left_lg: '!form-mr-space-checkbox-lg',
  input_right: '!mr-0',
  input_right_sm: 'form-ml-space-checkbox-sm',
  input_right_md: 'form-ml-space-checkbox',
  input_right_lg: 'form-ml-space-checkbox-lg',
  input_standalone: '!ml-0 !mr-0 !mt-0',
  $input: (classes, _ref) => {
    var {
      isDisabled,
      Size,
      standalone
    } = _ref;
    return [classes.input, classes["input_".concat(Size)], !isDisabled ? classes.input_default : classes.input_disabled, standalone ? classes.input_standalone : null];
  }
};
var radio = {
  input: 'flex items-center justify-center flex-shrink-0 appearance-none cursor-pointer rounded-full outline-zero transition-input duration-200 border-solid form-border-width-radio form-shadow-input focus:form-ring checked:form-bg-icon-radio',
  input_default: checkboxStates.default,
  input_disabled: checkboxStates.disabled,
  input_sm: 'form-w-checkbox-sm form-h-checkbox-sm form-mr-space-checkbox-sm rtl:mr-0 rtl:form-ml-space-checkbox-sm',
  input_md: 'form-w-checkbox form-h-checkbox form-mr-space-checkbox rtl:mr-0 rtl:form-ml-space-checkbox',
  input_lg: 'form-w-checkbox-lg form-h-checkbox-lg form-mr-space-checkbox-lg rtl:mr-0 rtl:form-ml-space-checkbox-lg',
  input_left: '!ml-0',
  input_left_sm: '!form-mr-space-checkbox-sm',
  input_left_md: '!form-mr-space-checkbox',
  input_left_lg: '!form-mr-space-checkbox-lg',
  input_right: '!mr-0',
  input_right_sm: 'form-ml-space-checkbox-sm',
  input_right_md: 'form-ml-space-checkbox',
  input_right_lg: 'form-ml-space-checkbox-lg',
  input_standalone: '!ml-0 !mr-0 !mt-0',
  $input: (classes, _ref2) => {
    var {
      isDisabled,
      Size,
      standalone
    } = _ref2;
    return [classes.input, classes["input_".concat(Size)], !isDisabled ? classes.input_default : classes.input_disabled, standalone ? classes.input_standalone : null];
  }
};
var text = {
  container: 'form-text-type',
  inputContainer: 'w-full flex flex-1 transition-input duration-200 border-solid form-border-width-input form-shadow-input form-input-group group',
  inputContainer_sm: 'form-radius-input-sm form-h-input-height-sm',
  inputContainer_md: 'form-radius-input form-h-input-height',
  inputContainer_lg: 'form-radius-input-lg form-h-input-height-lg',
  inputContainer_focused: 'form-focus',
  inputContainer_default: inputStates.default,
  inputContainer_disabled: inputStates.disabled,
  inputContainer_success: inputStates.success,
  inputContainer_danger: inputStates.danger,
  input: 'w-full bg-transparent h-full',
  input_sm: 'form-p-input-sm form-radius-input-sm form-text-sm with-floating:form-p-input-floating-sm',
  input_md: 'form-p-input form-radius-input form-text with-floating:form-p-input-floating',
  input_lg: 'form-p-input-lg form-radius-input-lg form-text-lg with-floating:form-p-input-floating-lg',
  input_enabled: 'border-0 form-color-input group-hover:form-color-input-hover form-autofill-default',
  input_disabled: 'form-color-disabled',
  input_focused: 'form-color-input-focus form-autofill-focus',
  input_success: 'form-color-input-success form-autofill-success',
  input_danger: 'form-color-input-danger form-autofill-danger',
  $inputContainer: (classes, _ref3) => {
    var {
      isDisabled,
      Size,
      isSuccess,
      isDanger,
      focused
    } = _ref3;
    return [classes.inputContainer, classes["inputContainer_".concat(Size)], isDisabled ? classes.inputContainer_disabled : null, !isDisabled && !isSuccess && !isDanger ? classes.inputContainer_default : null, !isDisabled && focused ? classes.inputContainer_focused : null, !isDisabled && isSuccess ? classes.inputContainer_success : null, !isDisabled && isDanger ? classes.inputContainer_danger : null];
  },
  $input: (classes, _ref4) => {
    var {
      isDisabled,
      Size,
      isSuccess,
      isDanger,
      focused
    } = _ref4;
    return [classes.input, classes["input_".concat(Size)], isDisabled ? classes.input_disabled : null, !isDisabled && !isSuccess && !isDanger && !focused ? classes.input_enabled : null, !isDisabled && focused && !isSuccess && !isDanger ? classes.input_focused : null, !isDisabled && isDanger ? classes.input_danger : null, !isDisabled && isSuccess ? classes.input_success : null];
  }
};
var textarea = _objectSpread2(_objectSpread2({}, text), {}, {
  inputContainer_sm: 'form-radius-large-sm',
  inputContainer_md: 'form-radius-large',
  inputContainer_lg: 'form-radius-large-lg',
  input_sm: 'form-p-input-sm form-radius-large-sm form-text-sm with-floating:form-p-input-floating-sm',
  input_md: 'form-p-input form-radius-large form-text with-floating:form-p-input-floating',
  input_lg: 'form-p-input-lg form-radius-large-lg form-text-lg with-floating:form-p-input-floating-lg'
});
var editor = {
  container: 'form-text-type',
  input: 'border-solid transition-input duration-200 form-border-width-input form-shadow-input',
  input_focused: 'form-focus',
  input_default: inputStates.default,
  input_disabled: 'form-bg-disabled form-color-disabled form-border-color-input form-editor-disabled',
  input_success: inputStates.success,
  input_danger: inputStates.danger,
  input_sm: 'form-radius-large-sm form-editor-sm',
  input_md: ' form-radius-large',
  input_lg: 'form-radius-large-lg form-editor-lg',
  $input: (classes, _ref5) => {
    var {
      isDisabled,
      focused,
      Size,
      isSuccess,
      isDanger
    } = _ref5;
    return [classes.input, classes["input_".concat(Size)], isDisabled ? classes.input_disabled : null, !isDisabled && !isSuccess && !isDanger ? classes.input_default : null, !isDisabled && focused ? classes.input_focused : null, !isDisabled && isSuccess ? classes.input_success : null, !isDisabled && isDanger ? classes.input_danger : null];
  }
};
var select = {
  container: 'relative mx-auto w-full flex items-center justify-end box-border cursor-pointer outline-zero transition-input duration-200 border-solid form-border-width-input form-shadow-input form-text-type',
  container_default: inputStates.default,
  container_disabled: inputStates.disabled,
  container_success: inputStates.success,
  container_danger: inputStates.danger,
  container_sm: 'form-text-sm form-radius-input-sm form-min-h-input-height-sm',
  container_md: 'form-text form-radius-input form-min-h-input-height',
  container_lg: 'form-text-lg form-radius-input-lg form-min-h-input-height-lg',
  containerDisabled: '',
  containerOpen: '!rounded-b-none',
  containerOpenTop: '!rounded-t-none',
  containerActive: 'form-focus',
  wrapper: 'relative mx-auto w-full flex items-center justify-end box-border cursor-pointer outline-zero',
  wrapper_sm: 'form-min-h-input-height-inner-sm',
  wrapper_md: 'form-min-h-input-height-inner',
  wrapper_lg: 'form-min-h-input-height-inner-lg',
  search: 'w-full h-full absolute inset-0 outline-zero appearance-none box-border border-0 bg-transparent form-color-input',
  search_sm: 'form-text-sm form-radius-input-sm form-pl-input-sm form-pr-select-no-clear-sm with-floating:form-p-input-floating-sm rtl:form-pl-select-no-clear-sm rtl:form-pr-input-sm',
  search_md: 'form-text form-radius-input form-pl-input form-pr-select-no-clear with-floating:form-p-input-floating rtl:form-pl-select-no-clear rtl:form-pr-input',
  search_lg: 'form-text-lg form-radius-input-lg form-pl-input-lg form-pr-select-no-clear-lg with-floating:form-p-input-floating-lg rtl:form-pl-select-no-clear-lg rtl:form-pr-input-lg',
  placeholder: 'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent form-color-placeholder rtl:left-auto rtl:right-0 rtl:pl-0',
  placeholder_sm: 'form-pl-input-sm rtl:form-pr-input-sm',
  placeholder_md: 'form-pl-input rtl:form-pr-input',
  placeholder_lg: 'form-pl-input-lg rtl:form-pr-input-lg',
  caret: 'mask-bg mask-form-caret form-bg-icon w-2.5 h-4 py-px box-content relative flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none rtl:mr-0',
  caret_sm: 'form-mr-input-sm rtl:form-ml-input-sm',
  caret_md: 'form-mr-input rtl:form-ml-input',
  caret_lg: 'form-mr-input-lg rtl:form-ml-input-lg',
  caretOpen: 'rotate-180 pointer-events-auto',
  clear: 'relative opacity-50 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-100 rtl:pr-0 rtl:pl-3.5',
  clear_sm: 'form-pr-input-sm rtl:form-pl-input-sm',
  clear_md: 'form-pr-input rtl:form-pl-input',
  clear_lg: 'form-pr-input-lg rtl:form-pl-input-lg',
  clearIcon: 'mask-bg mask-form-remove form-bg-icon w-2.5 h-4 py-px box-content inline-block',
  spinner: 'mask-bg mask-form-spinner form-bg-primary w-4 h-4 animate-spin flex-shrink-0 flex-grow-0 rtl:mr-0',
  spinner_sm: 'form-mr-input-sm rtl:form-ml-input-sm',
  spinner_md: 'form-mr-input rtl:form-ml-input',
  spinner_lg: 'form-mr-input-lg rtl:form-ml-input-lg',
  infinite: 'flex items-center justify-center w-full',
  infinite_sm: 'form-min-h-input-height-sm',
  infinite_md: 'form-min-h-input-height',
  infinite_lg: 'form-min-h-input-height-lg',
  infiniteSpinner: 'mask-bg mask-form-spinner form-bg-primary w-4 h-4 animate-spin flex-shrink-0 flex-grow-0',
  dropdown: 'max-h-60 absolute z-999 -left-px -right-px bottom-0 transform form-shadow-dropdown form-border-width-dropdown border-solid form-border-color-input form-bg-input -mt-px overflow-y-scroll flex flex-col',
  dropdown_sm: 'form-radius-input-b-sm',
  dropdown_md: 'form-radius-input-b',
  dropdown_lg: 'form-radius-input-b-lg',
  dropdownBottom: 'translate-y-full',
  dropdownTop: '-translate-y-full top-px bottom-auto !rounded-b-none !rounded-t',
  dropdownTop_sm: 'form-radius-input-t-sm',
  dropdownTop_md: 'form-radius-input-t',
  dropdownTop_lg: 'form-radius-input-t-lg',
  dropdownHidden: 'hidden',
  options: 'flex flex-col p-0 m-0 list-none form-color-input',
  optionsTop: '',
  group: 'p-0 m-0',
  groupLabel: 'flex box-border items-center justify-start text-left form-py-0.5input font-semibold form-bg-selected form-color-input filter brightness-90 cursor-default',
  groupLabel_sm: 'form-px-input-sm form-text-small-sm',
  groupLabel_md: 'form-px-input form-text-small',
  groupLabel_lg: 'form-px-input-lg form-text-small-lg',
  groupLabelPointable: 'cursor-pointer',
  groupLabelPointed: 'brightness-95',
  groupLabelSelected: 'form-bg-primary-darker !form-color-on-primary brightness-100',
  groupLabelDisabled: 'form-bg-disabled form-color-disabled cursor-not-allowed',
  groupLabelSelectedPointed: 'form-bg-primary-darker !form-color-on-primary brightness-100 opacity-90',
  groupLabelSelectedDisabled: 'form-bg-primary-darker !form-color-on-primary brightness-100 opacity-50 cursor-not-allowed',
  groupOptions: 'p-0 m-0',
  option: 'flex items-center justify-start box-border text-left cursor-pointer',
  option_sm: 'form-px-input-sm form-py-input-border-sm',
  option_md: 'form-px-input form-py-input-border',
  option_lg: 'form-px-input-lg form-py-input-border-lg',
  optionPointed: 'form-color-input form-bg-selected',
  optionSelected: 'form-bg-primary form-color-on-primary',
  optionDisabled: 'form-color-disabled cursor-not-allowed',
  optionSelectedPointed: 'form-color-on-primary form-bg-primary opacity-90',
  optionSelectedDisabled: 'form-color-on-primary form-bg-primary opacity-50 cursor-not-allowed',
  fakeInput: 'bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-zero text-transparent',
  assist: 'form-assistive-text',
  spacer: 'box-content',
  spacer_sm: 'form-h-input-height-inner-sm',
  spacer_md: 'form-h-input-height-inner',
  spacer_lg: 'form-h-input-height-inner-lg',
  noOptions: 'form-color-muted',
  noOptions_sm: 'form-p-input-sm',
  noOptions_md: 'form-p-input',
  noOptions_lg: 'form-p-input-lg',
  noResults: 'form-color-muted',
  noResults_sm: 'form-p-input-sm',
  noResults_md: 'form-p-input',
  noResults_lg: 'form-p-input-lg',
  $container: (classes, _ref6) => {
    var {
      Size,
      isDanger,
      isSuccess,
      isDisabled
    } = _ref6;
    return [classes.select.container, classes.select["container_".concat(Size)], isDisabled ? classes.select.container_disabled : null, !isDisabled && !isSuccess && !isDanger ? classes.select.container_default : null, !isDisabled && isDanger ? classes.select.container_danger : null, !isDisabled && isSuccess ? classes.select.container_success : null];
  },
  $wrapper: (classes, _ref7) => {
    var {
      Size
    } = _ref7;
    return [classes.select.wrapper, classes.select["wrapper_".concat(Size)]];
  },
  $search: (classes, _ref8) => {
    var {
      Size
    } = _ref8;
    return [classes.select.search, classes.select["search_".concat(Size)]];
  },
  $placeholder: (classes, _ref9) => {
    var {
      Size
    } = _ref9;
    return [classes.select.placeholder, classes.select["placeholder_".concat(Size)]];
  },
  $caret: (classes, _ref10) => {
    var {
      Size
    } = _ref10;
    return [classes.select.caret, classes.select["caret_".concat(Size)]];
  },
  $clear: (classes, _ref11) => {
    var {
      Size
    } = _ref11;
    return [classes.select.clear, classes.select["clear_".concat(Size)]];
  },
  $spinner: (classes, _ref12) => {
    var {
      Size
    } = _ref12;
    return [classes.select.spinner, classes.select["spinner_".concat(Size)]];
  },
  $dropdown: (classes, _ref13) => {
    var {
      Size,
      openDirection
    } = _ref13;
    return [classes.select.dropdown, classes.select["dropdown_".concat(Size)], openDirection === 'top' ? null : classes.select.dropdownBottom];
  },
  $dropdownTop: (classes, _ref14) => {
    var {
      Size
    } = _ref14;
    return [classes.select.dropdownTop, classes.select["dropdownTop_".concat(Size)]];
  },
  $groupLabel: (classes, _ref15) => {
    var {
      Size
    } = _ref15;
    return [classes.select.groupLabel, classes.select["groupLabel_".concat(Size)]];
  },
  $option: (classes, _ref16) => {
    var {
      Size
    } = _ref16;
    return [classes.select.option, classes.select["option_".concat(Size)]];
  },
  $spacer: (classes, _ref17) => {
    var {
      Size
    } = _ref17;
    return [classes.select.spacer, classes.select["spacer_".concat(Size)]];
  },
  $noOptions: (classes, _ref18) => {
    var {
      Size
    } = _ref18;
    return [classes.select.noOptions, classes.select["noOptions_".concat(Size)]];
  },
  $noResults: (classes, _ref19) => {
    var {
      Size
    } = _ref19;
    return [classes.select.noResults, classes.select["noResults_".concat(Size)]];
  }
};
var groupTabs = {
  container: 'flex cursor-pointer',
  wrapper: 'flex items-center justify-center w-full border-solid form-border-width-input',
  wrapper_not_last: '!border-r-0',
  wrapper_first: '',
  wrapper_first_sm: 'form-radius-input-l-sm',
  wrapper_first_md: 'form-radius-input-l',
  wrapper_first_lg: 'form-radius-input-l-lg',
  wrapper_last: '',
  wrapper_last_sm: 'form-radius-input-r-sm',
  wrapper_last_md: 'form-radius-input-r',
  wrapper_last_lg: 'form-radius-input-r-lg',
  wrapper_selected: 'form-bg-primary form-color-on-primary border-black border-opacity-15',
  wrapper_unselected: 'form-bg-input form-color-input form-border-color-input hover:form-bg-input-hover hover:form-color-input-hover',
  wrapper_disabled: 'opacity-50 pointer-events-none',
  wrapper_sm: 'form-text-sm form-p-group-tabs-sm',
  wrapper_md: 'form-text form-p-group-tabs',
  wrapper_lg: 'form-text-lg form-p-group-tabs-lg',
  input: 'hidden',
  text: ''
};
var groupBlocks = {
  container: 'flex cursor-pointer form-bg-input',
  container_sm: 'form-radius-large-sm',
  container_md: 'form-radius-large',
  container_lg: 'form-radius-large',
  wrapper: 'flex items-center w-full border-solid form-border-width-input form-border-color-input form-color-input',
  wrapper_not_last: '!border-b-0',
  wrapper_first: '',
  wrapper_first_sm: 'form-radius-large-t-sm',
  wrapper_first_md: 'form-radius-large-t',
  wrapper_first_lg: 'form-radius-large-t-lg',
  wrapper_last: '',
  wrapper_last_sm: 'form-radius-large-b-sm',
  wrapper_last_md: 'form-radius-large-b',
  wrapper_last_lg: 'form-radius-large-b-lg',
  wrapper_selected: 'form-bg-selected',
  wrapper_unselected: 'form-bg-input',
  wrapper_disabled: 'opacity-50',
  wrapper_sm: 'px-4 py-2.5 form-text-sm form-p-group-blocks-sm',
  wrapper_md: 'px-4 py-3 form-text form-p-group-blocks',
  wrapper_lg: 'px-4 py-3.5 form-text-lg form-p-group-blocks-lg',
  text_wrapper: 'ml-2',
  text: '',
  description: 'form-color-muted',
  description_sm: 'form-text-small-sm -mt-0.5',
  description_md: 'form-text-small -mt-0.5',
  description_lg: 'form-text-small-lg -mt-0.5',
  $container: (classes, _ref20) => {
    var {
      Size
    } = _ref20;
    return [classes.container, classes["container_".concat(Size)]];
  }
};
var classes = {
  // Elements
  ButtonElement: {
    container: 'form-text-type',
    button: 'inline-block transition form-border-width-btn form-shadow-btn focus:outline-zero',
    button_enabled: 'cursor-pointer transition-transform ease-linear focus:form-ring transform hover:scale-105',
    button_disabled: 'opacity-60 cursor-not-allowed',
    button_loading: 'form-color-transparent opacity-60 cursor-not-allowed',
    button_loading_primary: 'form-bg-spinner-on-primary',
    button_loading_secondary: 'form-bg-spinner-btn-secondary',
    button_loading_danger: 'form-bg-spinner-white',
    button_primary: 'form-bg-btn form-color-btn form-border-color-btn',
    button_secondary: 'form-bg-btn-secondary form-color-btn-secondary form-border-color-btn-secondary',
    button_danger: 'form-bg-btn-danger form-color-btn-danger form-border-color-btn-danger',
    button_full: 'w-full',
    button_not_full: '',
    button_left: 'float-left',
    button_center: 'flex mx-auto items-center justify-center',
    button_right: 'float-right',
    button_sm: 'form-p-btn-sm form-radius-btn-sm form-text-sm',
    button_md: 'form-p-btn form-radius-btn form-text',
    button_lg: 'form-p-btn-lg form-radius-btn-lg form-text-lg',
    $button: (classes, _ref21) => {
      var {
        isDisabled,
        isLoading,
        buttonClass,
        Size,
        danger,
        secondary,
        full,
        align
      } = _ref21;
      return [classes.button, danger ? classes.button_danger : null, secondary ? classes.button_secondary : null, !danger && !secondary ? classes.button_primary : null, classes["button_".concat(Size)], isDisabled ? classes.button_disabled : null, !isDisabled && !isLoading ? classes.button_enabled : null, isLoading ? classes.button_loading : null, isLoading && danger ? classes.button_loading_danger : null, isLoading && secondary ? classes.button_loading_secondary : null, isLoading && !secondary && !danger ? classes.button_loading_primary : null, full ? classes.button_full : classes.button_not_full, align === 'left' ? classes.button_left : null, align === 'center' ? classes.button_center : null, align === 'right' ? classes.button_right : null, buttonClass];
    }
  },
  CaptchaElement: {
    container: '',
    wrapper: '',
    captcha: ''
  },
  CheckboxElement: _objectSpread2(_objectSpread2({}, checkbox), {}, {
    container: 'form-contains-link',
    wrapper: 'flex',
    wrapper_sm: 'form-text-sm',
    wrapper_md: 'form-text',
    wrapper_lg: 'form-text-lg',
    wrapper_left: 'rtl:justify-end',
    wrapper_right: 'justify-end rtl:justify-start',
    input: checkbox.input + ' form-shadow-handles',
    input_danger: checkboxStates.danger,
    input_sm: checkbox.input_sm + ' form-mt-checkbox-sm',
    input_md: checkbox.input_md + ' form-mt-checkbox',
    input_lg: checkbox.input_lg + ' form-mt-checkbox-lg',
    text: 'cursor-pointer',
    text_left: 'rtl:-order-1',
    text_right: '-order-1 rtl:order-none',
    $wrapper: (classes, _ref22) => {
      var {
        Size,
        align
      } = _ref22;
      return [classes.wrapper, classes["wrapper_".concat(Size)], align === 'left' ? classes.wrapper_left : null, align === 'right' ? classes.wrapper_right : null];
    },
    $input: (classes, _ref23) => {
      var {
        isDisabled,
        Size,
        isDanger,
        align,
        standalone
      } = _ref23;
      return [classes.input, classes["input_".concat(Size)], !isDisabled && !isDanger ? classes.input_default : null, isDisabled ? classes.input_disabled : null, isDanger ? classes.input_danger : null, align === 'left' ? [classes.input_left, classes["input_left_".concat(Size)]] : null, align === 'right' ? [classes.input_right, classes["input_right_".concat(Size)]] : null, standalone ? classes.input_standalone : null];
    },
    $text: (classes, _ref24) => {
      var {
        align
      } = _ref24;
      return [classes.text, align === 'left' ? classes.text_left : null, align === 'right' ? classes.text_right : null];
    }
  }),
  CheckboxgroupElement: {
    container: 'form-view-default',
    wrapper: 'flex flex-col justify-start',
    wrapper_sm: '',
    wrapper_md: '',
    wrapper_lg: '',
    $wrapper: (classes, _ref25) => {
      var {
        Size
      } = _ref25;
      return [classes.wrapper, classes["wrapper_".concat(Size)]];
    }
  },
  CheckboxgroupElement_tabs: {
    container: 'form-text-type form-view-tabs',
    wrapper: 'grid grid-flow-col form-shadow-input',
    wrapper_sm: 'form-radius-large-sm',
    wrapper_md: 'form-radius-large',
    wrapper_lg: 'form-radius-large-lg',
    $wrapper: (classes, _ref26) => {
      var {
        Size
      } = _ref26;
      return [classes.wrapper, classes["wrapper_".concat(Size)]];
    }
  },
  CheckboxgroupElement_blocks: {
    container: 'form-view-blocks',
    wrapper: 'flex flex-col justify-start form-shadow-input',
    wrapper_sm: 'form-radius-large-sm',
    wrapper_md: 'form-radius-large',
    wrapper_lg: 'form-radius-large-lg',
    $wrapper: (classes, _ref27) => {
      var {
        Size
      } = _ref27;
      return [classes.wrapper, classes["wrapper_".concat(Size)]];
    }
  },
  DateElement: _objectSpread2({
    inputWrapper: 'block w-full h-full'
  }, text),
  DatesElement: _objectSpread2({
    inputWrapper: 'block w-full h-full'
  }, text),
  EditorElement: _objectSpread2({}, editor),
  FileElement: {
    container: 'form-text-type',
    container_removing: 'opacity-50',
    button: 'form-border-width-btn form-shadow-btn inline-block transition focus:outline-zero',
    button_enabled: 'form-bg-btn-secondary form-color-btn-secondary form-border-color-btn-secondary cursor-pointer transition-transform transform hover:scale-105 focus:form-ring',
    button_disabled: 'opacity-50 cursor-not-allowed',
    button_sm: 'form-p-btn-sm form-radius-btn-sm form-text-sm',
    button_md: 'form-p-btn form-radius-btn form-text',
    button_lg: 'form-p-btn-lg form-radius-btn-lg form-text-lg',
    $container: (classes, _ref28) => {
      var {
        removing
      } = _ref28;
      return [classes.container, removing ? classes.container_removing : null];
    },
    $button: (classes, _ref29) => {
      var {
        isDisabled,
        preparing,
        Size
      } = _ref29;
      return [classes.button, classes["button_".concat(Size)], !isDisabled && !preparing ? classes.button_enabled : null, isDisabled || preparing ? classes.button_disabled : null];
    }
  },
  GridElement: {
    container: '',
    container_scrollable: 'overflow-x-auto',
    grid: 'grid',
    grid_sm: 'form-gap-gutter-sm',
    grid_md: 'form-gap-gutter',
    grid_lg: 'form-gap-gutter-lg',
    grid_fit: 'w-fit',
    grid_nofit: '',
    cell: 'relative',
    fieldWrapper: 'w-full h-full grid',
    fieldWrapper_sm: 'form-min-h-input-height-sm',
    fieldWrapper_md: 'form-min-h-input-height',
    fieldWrapper_lg: 'form-min-h-input-height-lg',
    fieldWrapper_left: 'text-left',
    fieldWrapper_center: 'text-center',
    fieldWrapper_right: 'text-right',
    fieldWrapper_top: 'items-start',
    fieldWrapper_middle: 'items-center',
    fieldWrapper_bottom: 'items-end',
    fieldWrapper_baseline: 'items-stretch',
    textWrapper: 'w-full h-full flex break-words',
    textWrapper_sm: 'form-min-h-input-height-sm form-p-input-sm',
    textWrapper_md: 'form-min-h-input-height form-p-input',
    textWrapper_lg: 'form-min-h-input-height-lg form-p-input-lg',
    textWrapper_left: 'justify-start text-left',
    textWrapper_center: 'justify-center text-center',
    textWrapper_right: 'justify-end text-right',
    textWrapper_justify: 'justify-stretch text-justify',
    textWrapper_top: 'items-start',
    textWrapper_middle: 'items-center',
    textWrapper_bottom: 'items-end',
    textWrapper_baseline: 'items-stretch',
    text: 'w-full',
    $container: (classes, _ref30) => {
      var {
        scrollable
      } = _ref30;
      return [classes.container, scrollable ? classes.container_scrollable : null];
    },
    $grid: (classes, _ref31) => {
      var {
        Size,
        align,
        fitWidth
      } = _ref31;
      return [classes.grid, classes["grid_".concat(Size)], fitWidth ? classes.grid_fit : classes.grid_nofit];
    },
    $cell: (classes, _ref32) => {
      return () => [classes.cell];
    },
    $fieldWrapper: (classes, _ref33) => {
      var {
        Size
      } = _ref33;
      return _ref34 => {
        var {
          schema,
          align,
          valign,
          rowIndex,
          colIndex
        } = _ref34;
        return [classes.fieldWrapper, classes["fieldWrapper_".concat(Size)], classes["fieldWrapper_".concat(align)], classes["fieldWrapper_".concat(valign)]];
      };
    },
    $textWrapper: (classes, _ref35) => {
      var {
        Size
      } = _ref35;
      return _ref36 => {
        var {
          align,
          valign,
          rowIndex,
          colIndex
        } = _ref36;
        return [classes.textWrapper, classes["textWrapper_".concat(Size)], classes["textWrapper_".concat(align)], classes["textWrapper_".concat(valign)]];
      };
    }
  },
  GroupElement: {
    container: '',
    wrapper: 'grid grid-cols-12',
    wrapper_sm: 'form-gap-gutter-sm',
    wrapper_md: 'form-gap-gutter',
    wrapper_lg: 'form-gap-gutter-lg',
    $wrapper: (classes, _ref37) => {
      var {
        Size
      } = _ref37;
      return [classes.wrapper, classes["wrapper_".concat(Size)]];
    }
  },
  ListElement: {
    container: '',
    list: 'grid',
    list_sm: 'form-gap-y-gutter-sm',
    list_md: 'form-gap-y-gutter',
    list_lg: 'form-gap-y-gutter-lg',
    list_disabled: '',
    list_sorting: '',
    listItem: 'grid grid-cols-12 relative form-list-group ghost:opacity-60',
    listItem_sm: 'form-gap-gutter-sm',
    listItem_md: 'form-gap-gutter',
    listItem_lg: 'form-gap-gutter-lg',
    handle: 'absolute left-0 top-0 z-999 transform -translate-x-full cursor-grab active:cursor-grabbing opacity-0 transition list-group-hover:opacity-100',
    handle_sm: 'form-w-input-height-sm form-h-input-height-sm',
    handle_md: 'form-w-input-height form-h-input-height',
    handle_lg: 'form-w-input-height-lg form-h-input-height-lg',
    handleIcon: 'mask-bg mask-form-sort-handle form-bg-icon mask-size-2.8 block w-full h-full',
    remove: 'absolute z-999 w-4 h-4 box-content p-0.5 top-px left-0 form-bg-passive rounded-full transform -translate-x-1/2 -translate-y-1/2 transition opacity-0 filter hover:brightness-90 list-group-hover:opacity-100 focus:opacity-100',
    removeIcon: 'mask-bg mask-form-remove-light form-bg-passive-color mask-size-3 block w-full h-full',
    add: 'inline-block form-bg-primary form-border-width-btn form-border-color-primary form-color-on-primary form-shadow-btn ease-linear transition-transform transform hover:scale-105 focus:form-ring',
    add_sm: 'form-mt-gutter-sm form-radius-small-sm form-text-small-sm form-p-btn-small-sm',
    add_md: 'form-mt-gutter form-radius-small form-text-small form-p-btn-small',
    add_lg: 'form-mt-gutter-lg form-radius-small-lg form-text-small-lg form-p-btn-small-lg',
    $list: (classes, _ref38) => {
      var {
        isDisabled,
        sorting,
        Size
      } = _ref38;
      return [classes.list, classes["list_".concat(Size)], isDisabled ? classes.list_disabled : null, sorting ? classes.list_sorting : null];
    },
    $listItem: (classes, _ref39) => {
      var {
        Size
      } = _ref39;
      return [classes.listItem, classes["listItem_".concat(Size)]];
    },
    $handle: (classes, _ref40) => {
      var {
        Size
      } = _ref40;
      return [classes.handle, classes["handle_".concat(Size)]];
    },
    $add: (classes, _ref41) => {
      var {
        Size
      } = _ref41;
      return [classes.add, classes["add_".concat(Size)]];
    }
  },
  LocationElement: _objectSpread2({}, text),
  MatrixElement: {
    container: '',
    grid: 'grid',
    grid_scrollable: 'grid overflow-auto',
    headerFirst: '',
    header: 'flex items-center justify-center text-center',
    header_padding: 'px-2',
    header_sticky: 'sticky top-0 backdrop-blur-3xl z-1',
    header_not_sticky: '',
    header_wrap: '',
    header_nowrap: 'whitespace-nowrap',
    header_sm: 'form-min-h-input-height-inner-sm',
    header_md: 'form-min-h-input-height-inner',
    header_lg: 'form-min-h-input-height-inner-lg',
    headerRemove: '',
    rowLabel: 'flex items-center pr-2',
    rowLabel_sticky: 'sticky left-0 backdrop-blur-3xl z-1',
    rowLabel_not_sticky: '',
    rowLabel_wrap: '',
    rowLabel_nowrap: 'whitespace-nowrap',
    cell: 'grid items-center',
    cell_sm: 'form-min-h-input-height-inner-sm',
    cell_md: 'form-min-h-input-height-inner',
    cell_lg: 'form-min-h-input-height-inner-lg',
    cellWrapper: 'w-full h-full grid items-center',
    cellWrapper_padding: 'px-2',
    cellWrapper_centered: 'justify-center',
    cellWrapper_error: '',
    cellWrapper_success: '',
    rowRemove: 'backdrop-blur-3xl sticky right-0 flex items-center justify-center w-10',
    remove: 'w-4 h-4 box-content p-0.5 form-bg-passive rounded-full transition filter hover:brightness-90',
    removeIcon: 'mask-bg mask-form-remove-light form-bg-passive-color mask-size-3 block w-full h-full',
    add: 'inline-block form-bg-primary form-border-width-btn form-border-color-primary form-color-on-primary form-shadow-btn ease-linear transition-transform transform hover:scale-105 focus:form-ring',
    add_sm: 'form-mt-gutter-sm form-radius-small-sm form-text-small-sm form-p-btn-small-sm',
    add_md: 'form-mt-gutter form-radius-small form-text-small form-p-btn-small',
    add_lg: 'form-mt-gutter-lg form-radius-small-lg form-text-small-lg form-p-btn-small-lg',
    $grid: (classes, _ref42) => {
      var {
        scrollable
      } = _ref42;
      return [classes.grid, scrollable ? classes.grid_scrollable : null];
    },
    $header: (classes, _ref43) => {
      var {
        Size,
        padding,
        stickyCols,
        colWrap
      } = _ref43;
      return [classes.header, classes["header_".concat(Size)], padding ? classes.header_padding : null, stickyCols ? classes.header_sticky : classes.header_not_sticky, colWrap ? classes.header_wrap : classes.header_nowrap];
    },
    $rowLabel: (classes, _ref44) => {
      var {
        stickyRows,
        rowWrap
      } = _ref44;
      return [classes.rowLabel, stickyRows ? classes.rowLabel_sticky : classes.rowLabel_not_sticky, rowWrap ? classes.rowLabel_wrap : classes.rowLabel_nowrap];
    },
    $cell: (classes, _ref45) => {
      var {
        Size
      } = _ref45;
      return [classes.cell, classes["cell_".concat(Size)]];
    },
    $cellWrapper: (classes, _ref46) => {
      var {
        padding,
        centered,
        cells$
      } = _ref46;
      return (type, name) => {
        var _cells$$name, _cells$$name2;
        return [classes.cellWrapper, padding ? classes.cellWrapper_padding : null, ['radio', 'checkbox', 'toggle'].includes(type) ? classes.cellWrapper_centered : null, (_cells$$name = cells$[name]) !== null && _cells$$name !== void 0 && _cells$$name.error ? classes.cellWrapper_error : null, (_cells$$name2 = cells$[name]) !== null && _cells$$name2 !== void 0 && _cells$$name2.isSuccess ? classes.cellWrapper_success : null];
      };
    },
    $add: (classes, _ref47) => {
      var {
        Size
      } = _ref47;
      return [classes.add, classes["add_".concat(Size)]];
    },
    $remove: (classes, _ref48) => {
      var {
        removeHover
      } = _ref48;
      return [classes.remove, removeHover ? classes.remove_hover : null];
    }
  },
  MultifileElement: {
    container: 'form-text-type',
    list: '',
    list_sm: 'form-mt-gutter-sm',
    list_md: 'form-mt-gutter',
    list_lg: 'form-mt-gutter-lg',
    list_file: 'grid',
    list_file_sm: 'form-gap-y-0.5gutter-sm',
    list_file_md: 'form-gap-y-0.5gutter',
    list_file_lg: 'form-gap-y-0.5gutter-lg',
    list_image: 'grid',
    list_image_sm: 'form-gap-y-0.5gutter-sm',
    list_image_md: 'form-gap-y-0.5gutter',
    list_image_lg: 'form-gap-y-0.5gutter-lg',
    list_gallery: 'flex flex-wrap',
    list_gallery_sm: 'form-gap-0.5gutter-sm',
    list_gallery_md: 'form-gap-0.5gutter',
    list_gallery_lg: 'form-gap-0.5gutter-lg',
    list_disabled: '',
    list_sorting: '',
    listItem: 'relative group ghost:opacity-60',
    handle: '',
    handle_file: 'absolute left-0 top-0 transform -translate-x-full cursor-grab active:cursor-grabbing opacity-0 transition group-hover:opacity-100',
    handle_file_sm: 'form-w-input-height-sm form-h-input-height-sm',
    handle_file_md: 'form-w-input-height form-h-input-height',
    handle_file_lg: 'form-w-input-height-lg form-h-input-height-lg',
    handle_image: 'absolute left-0 top-0 transform -translate-x-full cursor-grab active:cursor-grabbing opacity-0 transition group-hover:opacity-100',
    handle_image_sm: 'form-w-input-height-sm form-h-input-height-sm',
    handle_image_md: 'form-w-input-height form-h-input-height',
    handle_image_lg: 'form-w-input-height-lg form-h-input-height-lg',
    handle_gallery: 'absolute w-4 h-4 box-content top-0.5 left-0.5 mt-px ml-px form-bg-passive bg-center bg-no-repeat rounded-full transition opacity-0 group-hover:opacity-100 cursor-grab active:cursor-grabbing filter hover:brightness-90',
    handle_gallery_sm: '',
    handle_gallery_md: '',
    handle_gallery_lg: '',
    handleIcon: '',
    handleIcon_file: 'mask-bg mask-form-sort-handle form-bg-icon mask-size-2.8 block w-full h-full',
    handleIcon_image: 'mask-bg mask-form-sort-handle form-bg-icon mask-size-2.8 block w-full h-full',
    handleIcon_gallery: 'mask-bg mask-form-arrows form-bg-input-color mask-size-3 block w-full h-full',
    dnd: '',
    button: 'inline-block transition form-border-width-btn focus:outline-zero',
    button_enabled: 'form-bg-btn-secondary form-color-btn-secondary form-border-color-btn-secondary form-shadow-btn cursor-pointer transition-transform transform hover:scale-105 focus:form-ring',
    button_disabled: 'opacity-50 cursor-not-allowed',
    button_sm: 'form-p-btn-sm form-radius-btn-sm form-text-sm',
    button_md: 'form-p-btn form-radius-btn form-text',
    button_lg: 'form-p-btn-lg form-radius-btn-lg form-text-lg',
    $list: (classes, _ref49) => {
      var {
        isDisabled,
        sorting,
        view,
        Size
      } = _ref49;
      return [classes.list, classes["list_".concat(Size)], isDisabled ? classes.list_disabled : null, sorting ? classes.list_sorting : null, classes["list_".concat(view)], classes["list_".concat(view, "_").concat(Size)]];
    },
    $handle: (classes, _ref50) => {
      var {
        view,
        Size
      } = _ref50;
      return [classes.handle, classes["handle_".concat(view)], classes["handle_".concat(view, "_").concat(Size)]];
    },
    $handleIcon: (classes, _ref51) => {
      var {
        view
      } = _ref51;
      return [classes.handleIcon, classes["handleIcon_".concat(view)]];
    },
    $button: (classes, _ref52) => {
      var {
        isDisabled,
        preparing,
        Size
      } = _ref52;
      return [classes.button, classes["button_".concat(Size)], !isDisabled && !preparing ? classes.button_enabled : null, isDisabled || preparing ? classes.button_disabled : null];
    }
  },
  MultiselectElement: {
    container: 'form-text-type',
    input: 'w-full form-p-input transition-input duration-200 border-solid form-border-width-input form-shadow-input',
    input_default: inputStates.default,
    input_disabled: inputStates.disabled,
    input_success: inputStates.success,
    input_danger: inputStates.danger,
    input_sm: 'form-p-input-sm form-radius-large-sm form-text-sm with-floating:form-p-input-floating-sm',
    input_md: 'form-p-input form-radius-large form-text with-floating:form-p-input-floating',
    input_lg: 'form-p-input-lg form-radius-large-lg form-text-lg with-floating:form-p-input-floating-lg',
    inputWrapper: '',
    select: _objectSpread2(_objectSpread2({}, select), {}, {
      multipleLabel: 'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent rtl:left-auto rtl:right-0 rtl:pl-0',
      multipleLabel_sm: 'form-py-input-sm form-pl-input-sm form-radius-input-sm form-text-sm form-min-h-input-height-inner-sm with-floating:form-p-input-floating-sm rtl:form-pr-input-sm',
      multipleLabel_md: 'form-py-input form-pl-input form-radius-input form-text form-min-h-input-height-inner with-floating:form-p-input-floating rtl:form-pr-input',
      multipleLabel_lg: 'form-py-input-lg form-pl-input-lg form-radius-input-lg form-text-lg form-min-h-input-height-inner-lg with-floating:form-p-input-floating-lg rtl:form-pr-input-lg',
      multipleLabel_caretClear_sm: 'form-pl-input-sm form-pr-select-sm with-floating:form-p-input-floating-sm rtl:form-pr-input-sm rtl:form-pl-select-sm',
      multipleLabel_caretClear_md: 'form-pl-input form-pr-select with-floating:form-p-input-floating rtl:form-pr-input rtl:form-pl-select',
      multipleLabel_caretClear_lg: 'form-pl-input-sm form-pr-select-sm with-floating:form-p-input-floating-sm rtl:form-pr-input-sm rtl:form-pl-select-sm',
      multipleLabel_noCaret_sm: 'form-pl-input-sm form-pr-select-no-caret-sm with-floating:form-p-input-floating-sm rtl:form-pr-input-sm rtl:form-pl-select-no-caret-sm',
      multipleLabel_noCaret_md: 'form-pl-input form-pr-select-no-caret with-floating:form-p-input-floating rtl:form-pr-input rtl:form-pl-select-no-caret',
      multipleLabel_noCaret_lg: 'form-pl-input-lg form-pr-select-no-caret-lg with-floating:form-p-input-floating-lg rtl:form-pr-input-lg rtl:form-pl-select-no-caret-lg',
      multipleLabel_noClear_sm: 'form-pl-input-sm form-pr-select-no-clear-sm with-floating:form-p-input-floating-sm rtl:form-pr-input-sm rtl:form-pl-select-no-clear-sm',
      multipleLabel_noClear_md: 'form-pl-input form-pr-select-no-clear with-floating:form-p-input-floating rtl:form-pr-input rtl:form-pl-select-no-clear',
      multipleLabel_noClear_lg: 'form-pl-input-lg form-pr-select-no-clear-lg with-floating:form-p-input-floating-lg rtl:form-pr-input-lg rtl:form-pl-select-no-clear-lg',
      multipleLabel_noCaretClear_sm: 'form-pl-input-sm form-pr-input-sm with-floating:form-p-input-floating-sm rtl:form-pr-input-sm rtl:form-pl-input-sm',
      multipleLabel_noCaretClear_md: 'form-pl-input form-pr-input with-floating:form-p-input-floating rtl:form-pr-input rtl:form-pl-input',
      multipleLabel_noCaretClear_lg: 'form-pl-input-lg form-pr-input-lg with-floating:form-p-input-floating-lg rtl:form-pr-input-lg rtl:form-pl-input-lg',
      $multipleLabel: (classes, _ref53) => {
        var {
          Size,
          caret,
          canClear
        } = _ref53;
        return [classes.select.multipleLabel, classes.select["multipleLabel_".concat(Size)], canClear && caret ? classes.select["multipleLabel_caretClear_".concat(Size)] : null, !caret && canClear ? classes.select["multipleLabel_noCaret_".concat(Size)] : null, !canClear && caret ? classes.select["multipleLabel_noClear_".concat(Size)] : null, !canClear && !caret ? classes.select["multipleLabel_noCaretClear_".concat(Size)] : null];
      }
    }),
    $input: (classes, _ref54) => {
      var {
        isDisabled,
        Size,
        isDanger,
        isSuccess
      } = _ref54;
      return [classes.input, classes["input_".concat(Size)], isDisabled ? classes.input_disabled : null, !isDisabled && !isSuccess && !isDanger ? classes.input_default : null, !isDisabled && isDanger ? classes.input_danger : null, !isDisabled && isSuccess ? classes.input_success : null];
    }
  },
  ObjectElement: {
    container: '',
    wrapper: 'grid grid-cols-12',
    wrapper_sm: 'form-gap-gutter-sm',
    wrapper_md: 'form-gap-gutter',
    wrapper_lg: 'form-gap-gutter-lg',
    wrapper_embed: '!block',
    $wrapper: (classes, _ref55) => {
      var {
        Size,
        embed
      } = _ref55;
      return [classes.wrapper, classes["wrapper_".concat(Size)], embed ? classes.wrapper_embed : null];
    }
  },
  PhoneElement: _objectSpread2(_objectSpread2({}, text), {}, {
    optionsWrapper: 'flex items-center',
    optionsWrapper_sm: 'form-ml-input-sm rtl:ml-0 rtl:form-mr-input-sm',
    optionsWrapper_md: 'form-ml-input rtl:ml-0 rtl:form-mr-input',
    optionsWrapper_lg: 'form-ml-input-lg rtl:ml-0 rtl:form-mr-input-lg',
    option: 'flex items-center cursor-pointer py-1.25 px-3 whitespace-nowrap form-color-input',
    option_active: 'form-bg-selected',
    optionWrapper: 'flex items-center',
    flag: 'bg-form-flags bg-[length:24px_4716px] overflow-hidden rounded-sm bg-no-repeat bg-[0px_0px] w-[24px] h-[16px]',
    country: 'ml-3 rtl:ml-0 rtl:mr-3 font-semibold text-[15px] form-color-input flex',
    number: 'ml-2 rtl:ml-0 rtl:mr-2 form-color-muted rtl:order-1',
    placeholder: 'bg-form-flags bg-[length:24px_4716px] overflow-hidden bg-no-repeat rounded-sm bg-[0px_0px] w-[24px] h-[16px] opacity-60',
    $optionsWrapper: (classes, _ref56) => {
      var {
        Size
      } = _ref56;
      return [classes.optionsWrapper, classes["optionsWrapper_".concat(Size)]];
    },
    $option: classes => active => [classes.option, active ? classes.option_active : null]
  }),
  RadioElement: _objectSpread2(_objectSpread2({}, radio), {}, {
    container: '',
    wrapper: 'flex rtl:justify-start',
    wrapper_sm: 'form-text-sm',
    wrapper_md: 'form-text',
    wrapper_lg: 'form-text-lg',
    wrapper_left: 'rtl:justify-end',
    wrapper_right: 'justify-end rtl:justify-start',
    input: radio.input + ' form-shadow-handles',
    input_danger: checkboxStates.danger,
    input_sm: radio.input_sm + ' form-mt-checkbox-sm',
    input_md: radio.input_md + ' form-mt-checkbox',
    input_lg: radio.input_lg + ' form-mt-checkbox-lg',
    text: 'cursor-pointer',
    text_left: 'rtl:-order-1',
    text_right: '-order-1 rtl:order-none',
    $wrapper: (classes, _ref57) => {
      var {
        Size,
        align
      } = _ref57;
      return [classes.wrapper, classes["wrapper_".concat(Size)], align === 'left' ? classes.wrapper_left : null, align === 'right' ? classes.wrapper_right : null];
    },
    $input: (classes, _ref58) => {
      var {
        isDisabled,
        Size,
        isDanger,
        align,
        standalone
      } = _ref58;
      return [classes.input, classes["input_".concat(Size)], !isDisabled && !isDanger ? classes.input_default : null, isDisabled ? classes.input_disabled : null, isDanger ? classes.input_danger : null, align === 'left' ? [classes.input_left, classes["input_left_".concat(Size)]] : null, align === 'right' ? [classes.input_right, classes["input_right_".concat(Size)]] : null, standalone ? classes.input_standalone : null];
    },
    $text: (classes, _ref59) => {
      var {
        align
      } = _ref59;
      return [classes.text, align === 'left' ? classes.text_left : null, align === 'right' ? classes.text_right : null];
    }
  }),
  RadiogroupElement: {
    container: 'form-view-default',
    wrapper: 'flex flex-col justify-start',
    wrapper_sm: '',
    wrapper_md: '',
    wrapper_lg: '',
    $wrapper: (classes, _ref60) => {
      var {
        Size
      } = _ref60;
      return [classes.wrapper, classes["wrapper_".concat(Size)]];
    }
  },
  RadiogroupElement_tabs: {
    container: 'form-text-type form-view-tabs',
    wrapper: 'grid grid-flow-col grid form-shadow-input',
    wrapper_sm: 'form-radius-large-sm',
    wrapper_md: 'form-radius-large',
    wrapper_lg: 'form-radius-large-lg',
    $wrapper: (classes, _ref61) => {
      var {
        Size
      } = _ref61;
      return [classes.wrapper, classes["wrapper_".concat(Size)]];
    }
  },
  RadiogroupElement_blocks: {
    container: 'form-view-blocks',
    wrapper: 'flex flex-col justify-start form-shadow-input',
    wrapper_sm: 'form-radius-large-sm',
    wrapper_md: 'form-radius-large',
    wrapper_lg: 'form-radius-large-lg',
    $wrapper: (classes, _ref62) => {
      var {
        Size
      } = _ref62;
      return [classes.wrapper, classes["wrapper_".concat(Size)]];
    }
  },
  SelectElement: {
    container: 'form-text-type',
    input: 'w-full transition-input duration-200 border-solid form-border-width-input form-shadow-input',
    input_default: inputStates.default,
    input_disabled: inputStates.disabled,
    input_success: inputStates.success,
    input_danger: inputStates.danger,
    input_sm: 'form-py-input-sm form-pl-input-sm form-pr-select-no-clear-sm form-radius-input-sm form-text-sm form-min-h-input-height-inner-sm with-floating:form-p-input-floating-sm rtl:form-pr-input-sm rtl:form-pl-select-no-clear-sm',
    input_md: 'form-py-input form-pl-input form-pr-select-no-clear form-radius-input form-text form-min-h-input-height-inner with-floating:form-p-input-floating rtl:form-pr-input rtl:form-pl-select-no-clear',
    input_lg: 'form-py-input-lg form-pl-input-lg form-pr-select-no-clear-lg form-radius-input-lg form-text-lg form-min-h-input-height-inner-lg with-floating:form-p-input-floating-lg rtl:form-pr-input-lg rtl:form-pl-select-no-clear-lg',
    inputWrapper: 'relative',
    inputPlaceholder: 'absolute left-0 top-0 bottom-0 form-color-placeholder pointer-events-none flex items-center',
    inputPlaceholder_sm: 'form-p-input-border-sm',
    inputPlaceholder_md: 'form-p-input-border',
    inputPlaceholder_lg: 'form-p-input-border-lg',
    inputCaret: 'mask-bg mask-form-caret form-bg-icon w-2.5 h-4 py-px box-content absolute right-0 top-1/2 transform -translate-y-1/2 transition-transform transform pointer-events-none rtl:right-auto rtl:left-0',
    inputCaret_sm: 'form-mr-input-sm rtl:mr-0 rtl:form-ml-input-sm',
    inputCaret_md: 'form-mr-input rtl:mr-0 rtl:form-ml-input',
    inputCaret_lg: 'form-mr-input-lg rtl:mr-0 rtl:form-ml-input-lg',
    select: _objectSpread2(_objectSpread2({}, select), {}, {
      singleLabel: 'flex items-center h-full max-w-full absolute left-0 top-0 pointer-events-none bg-transparent box-border rtl:left-auto rtl:right-0 rtl:pl-0',
      singleLabel_sm: 'form-py-input-sm form-pl-input-sm form-radius-input-sm form-text-sm form-min-h-input-height-inner-sm with-floating:form-p-input-floating-sm rtl:form-pr-input-sm',
      singleLabel_md: 'form-py-input form-pl-input form-radius-input form-text form-min-h-input-height-inner with-floating:form-p-input-floating rtl:form-pr-input',
      singleLabel_lg: 'form-py-input-lg form-pl-input-lg form-radius-input-lg form-text-lg form-min-h-input-height-inner-lg with-floating:form-p-input-floating-lg rtl:form-pr-input-lg',
      singleLabel_caretClear_sm: 'form-pl-input-sm form-pr-select-sm with-floating:form-p-input-floating-sm rtl:form-pr-input-sm rtl:form-pl-select-sm',
      singleLabel_caretClear_md: 'form-pl-input form-pr-select with-floating:form-p-input-floating rtl:form-pr-input rtl:form-pl-select',
      singleLabel_caretClear_lg: 'form-pl-input-sm form-pr-select-sm with-floating:form-p-input-floating-sm rtl:form-pr-input-sm rtl:form-pl-select-sm',
      singleLabel_noCaret_sm: 'form-pl-input-sm form-pr-select-no-caret-sm with-floating:form-p-input-floating-sm rtl:form-pr-input-sm rtl:form-pl-select-no-caret-sm',
      singleLabel_noCaret_md: 'form-pl-input form-pr-select-no-caret with-floating:form-p-input-floating rtl:form-pr-input rtl:form-pl-select-no-caret',
      singleLabel_noCaret_lg: 'form-pl-input-lg form-pr-select-no-caret-lg with-floating:form-p-input-floating-lg rtl:form-pr-input-lg rtl:form-pl-select-no-caret-lg',
      singleLabel_noClear_sm: 'form-pl-input-sm form-pr-select-no-clear-sm with-floating:form-p-input-floating-sm rtl:form-pr-input-sm rtl:form-pl-select-no-clear-sm',
      singleLabel_noClear_md: 'form-pl-input form-pr-select-no-clear with-floating:form-p-input-floating rtl:form-pr-input rtl:form-pl-select-no-clear',
      singleLabel_noClear_lg: 'form-pl-input-lg form-pr-select-no-clear-lg with-floating:form-p-input-floating-lg rtl:form-pr-input-lg rtl:form-pl-select-no-clear-lg',
      singleLabel_noCaretClear_sm: 'form-pl-input-sm form-pr-input-sm with-floating:form-p-input-floating-sm rtl:form-pr-input-sm rtl:form-pl-input-sm',
      singleLabel_noCaretClear_md: 'form-pl-input form-pr-input with-floating:form-p-input-floating rtl:form-pr-input rtl:form-pl-input',
      singleLabel_noCaretClear_lg: 'form-pl-input-lg form-pr-input-lg with-floating:form-p-input-floating-lg rtl:form-pr-input-lg rtl:form-pl-input-lg',
      singleLabelText: 'overflow-hidden block whitespace-nowrap max-w-full',
      singleLabelText_truncate: 'overflow-ellipsis',
      $singleLabel: (classes, _ref63) => {
        var {
          Size,
          caret,
          canClear
        } = _ref63;
        return [classes.select.singleLabel, classes.select["singleLabel_".concat(Size)], canClear && caret ? classes.select["singleLabel_caretClear_".concat(Size)] : null, !caret && canClear ? classes.select["singleLabel_noCaret_".concat(Size)] : null, !canClear && caret ? classes.select["singleLabel_noClear_".concat(Size)] : null, !canClear && !caret ? classes.select["singleLabel_noCaretClear_".concat(Size)] : null];
      },
      $singleLabelText: (classes, _ref64) => {
        var {
          truncate
        } = _ref64;
        return [classes.select.singleLabelText, truncate ? classes.select["singleLabelText_truncate"] : null];
      }
    }),
    $input: (classes, _ref65) => {
      var {
        isDisabled,
        Size,
        isSuccess,
        isDanger
      } = _ref65;
      return [classes.input, classes["input_".concat(Size)], isDisabled ? classes.input_disabled : null, !isDisabled && !isSuccess && !isDanger ? classes.input_default : null, !isDisabled && isDanger ? classes.input_danger : null, !isDisabled && isSuccess ? classes.input_success : null];
    },
    $inputWrapper: (classes, _ref66) => {
      var {
        Size
      } = _ref66;
      return [classes.inputWrapper, classes["inputWrapper_".concat(Size)]];
    },
    $inputPlaceholder: (classes, _ref67) => {
      var {
        Size
      } = _ref67;
      return [classes.inputPlaceholder, classes["inputPlaceholder_".concat(Size)]];
    },
    $inputCaret: (classes, _ref68) => {
      var {
        Size
      } = _ref68;
      return [classes.inputCaret, classes["inputCaret_".concat(Size)]];
    }
  },
  SignatureElement: {
    container: '',
    wrapper: 'transition-input form-border-width-input form-text relative w-full',
    wrapper_sm: 'form-radius-large-sm',
    wrapper_md: 'form-radius-large',
    wrapper_lg: 'form-radius-large-lg',
    wrapper_disabled: 'form-bg-disabled form-color-disabled form-border-color-input cursor-not-allowed pointer-events-none',
    wrapper_enabled: 'form-bg-input form-color-input form-border-color-input focused:form-ring focused:form-border-color-input-focus',
    wrapper_readonly: 'pointer-events-none',
    line: 'absolute top-1/2 left-6 right-6 form-border-color-signature-hr',
    loadedWrapper: 'absolute left-9 right-9 form-border-width-input border-transparent top-0 bottom-0 flex items-center justify-center',
    loadedWrapper_disabled: 'opacity-50',
    loadedWrapper_enabled: '',
    loadedImg: 'max-h-full',
    innerWrapper: '',
    innerWrapper_disabled: 'opacity-50',
    innerWrapper_enabled: '',
    input: 'bg-transparent absolute top-1/2 left-0 right-0 transform -translate-y-1/2 pr-9 text-center indent-9 transition-colors h-[8.5rem] rtl:pr-0 rtl:pl-9',
    input_invert: 'dark:filter dark:invert',
    placeholder: 'absolute left-0 right-0 bottom-[50%] transform translate-y-1/2 pointer-events-none form-color-placeholder text-center',
    uploadContainer: 'absolute left-9 right-9 bottom-1/2 transform translate-y-1/2 transition-opacity',
    uploadContainer_dragging: 'opacity-50',
    uploadContainer_not_dragging: '',
    uploadWrapper: 'flex flex-col items-center justify cente text-gray-400 text-center',
    uploadWrapper_processing: 'opacity-60 pointer-events-none',
    dndText: 'form-color-input',
    uploadButton: 'inline-block transition form-border-width-btn form-shadow-btn focus:outline-zero form-bg-btn-secondary form-color-btn-secondary form-border-color-btn-secondary cursor-pointer transition-transform ease-linear focus:form-ring transform hover:scale-105 form-p-btn form-radius-btn form-text',
    uploadPreview: 'max-w-full mx-auto',
    pad: 'absolute inset-0',
    pad_invert: 'dark:filter dark:invert',
    colors: 'absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-row gap-2',
    color: 'transform transition-transform cursor-pointer rounded-full outline-none focus-visible:form-ring',
    color_invert: 'dark:filter dark:invert',
    color_active: 'scale-[1.4]',
    color_inactive: 'hover:scale-[1.4]',
    actions: 'absolute top-2 left-3 right-3 flex items-center justify-between opacity-50 transition-opacity z-1 hover:opacity-100',
    undosWrapper: 'absolute right-3 top-3 flex items-center justify-center gap-3 rtl:right-auto rtl:left-3',
    undo: 'mask-bg mask-form-trix-undo form-bg-icon w-3 h-3',
    undo_enabled: 'cursor-pointer focus-visible:opacity-80',
    undo_disabled: 'opacity-50 cursor-not-allowed',
    redo: 'mask-bg mask-form-trix-redo form-bg-icon w-3 h-3',
    redo_enabled: 'cursor-pointer focus-visible:opacity-80',
    redo_disabled: 'opacity-50 cursor-not-allowed',
    clearWrapper: 'absolute top-1/2 transform -translate-y-1/2 right-4 text-sm',
    clear: 'mask-bg mask-form-remove form-bg-input-color w-3 h-4 py-px box-content inline-block cursor-pointer focus-visible:opacity-60',
    $wrapper: (classes, _ref69) => {
      var {
        isDisabled,
        readonly,
        Size
      } = _ref69;
      return [classes.wrapper, classes["wrapper_".concat(Size)], isDisabled ? classes.wrapper_disabled : classes.wrapper_enabled, readonly ? classes.wrapper_readonly : null];
    },
    $loadedWrapper: (classes, _ref70) => {
      var {
        isDisabled
      } = _ref70;
      return [classes.loadedWrapper, isDisabled ? classes.loadedWrapper_disabled : classes.loadedWrapper_enabled];
    },
    $innerWrapper: (classes, _ref71) => {
      var {
        isDisabled
      } = _ref71;
      return [classes.innerWrapper, isDisabled ? classes.innerWrapper_disabled : classes.innerWrapper_enabled];
    },
    $input: (classes, _ref72) => {
      var {
        invertColors,
        color
      } = _ref72;
      return [classes.input, invertColors.indexOf(color) !== -1 ? classes.input_invert : null];
    },
    $uploadContainer: (classes, _ref73) => {
      var {
        dragging
      } = _ref73;
      return [classes.uploadContainer, dragging ? classes.uploadContainer_dragging : classes.uploadContainer_not_dragging];
    },
    $uploadWrapper: (classes, _ref74) => {
      var {
        processing
      } = _ref74;
      return [classes.uploadWrapper, processing ? classes.uploadWrapper_processing : null];
    },
    $pad: (classes, _ref75) => {
      var {
        invertColors,
        color
      } = _ref75;
      return [classes.pad, invertColors.indexOf(color) !== -1 ? classes.pad_invert : null];
    },
    $color: (classes, _ref76) => {
      var {
        color,
        invertColors,
        mode
      } = _ref76;
      return c => [classes.color, c === color ? classes.color_active : classes.color_inactive, invertColors.indexOf(c) !== -1 && mode !== 'upload' ? classes.color_invert : null];
    },
    $undo: (classes, _ref77) => {
      var {
        undosLeft
      } = _ref77;
      return [classes.undo, undosLeft ? classes.undo_enabled : classes.undo_disabled];
    },
    $redo: (classes, _ref78) => {
      var {
        redos
      } = _ref78;
      return [classes.redo, redos.length ? classes.redo_enabled : classes.redo_disabled];
    }
  },
  SliderElement: {
    container: '',
    wrapper: '',
    wrapper_sm: '',
    wrapper_md: '',
    wrapper_lg: '',
    slider: {
      target: 'relative box-border user-select-none touch-none tap-highlight-transparent touch-callout-none disabled:cursor-not-allowed disabled:opacity-50',
      target_sm: 'form-my-slider-sm',
      target_md: 'form-my-slider',
      target_lg: 'form-my-slider-lg',
      focused: 'slider-focused',
      tooltipFocus: 'slider-tooltip-focus',
      tooltipDrag: 'slider-tooltip-drag',
      ltr: 'slider-ltr',
      rtl: 'slider-rtl',
      horizontal: 'slider-horizontal',
      horizontal_sm: 'form-h-slider-horizontal-sm',
      horizontal_md: 'form-h-slider-horizontal',
      horizontal_lg: 'form-h-slider-horizontal-lg',
      vertical: 'slider-vertical',
      vertical_sm: 'form-h-slider-vertical-sm form-w-slider-vertical-sm',
      vertical_md: 'form-h-slider-vertical form-w-slider-vertical',
      vertical_lg: 'form-h-slider-vertical-lg form-w-slider-vertical-lg',
      textDirectionRtl: 'slider-txt-rtl',
      textDirectionLtr: 'slider-txt-ltr',
      base: 'form-shadow-input w-full h-full relative z-1 form-bg-passive',
      base_sm: 'form-radius-slider-sm',
      base_md: 'form-radius-slider',
      base_lg: 'form-radius-slider-lg',
      connects: 'w-full h-full relative overflow-hidden z-0 form-radius-slider',
      connects_sm: 'form-radius-slider-sm',
      connects_md: 'form-radius-slider',
      connects_lg: 'form-radius-slider-lg',
      connect: 'absolute z-1 top-0 right-0 transform-origin-0 transform-style-flat h-full w-full form-bg-primary cursor-pointer tap:duration-300 tap:transition-transform disabled:cursor-not-allowed',
      connect_sm: 'form-radius-slider-sm',
      connect_md: 'form-radius-slider',
      connect_lg: 'form-radius-slider-lg',
      origin: 'slider-origin absolute z-1 top-0 right-0 transform-origin-0 transform-style-flat h-full w-full h:h-0 v:-top-full txt-rtl-h:left-0 txt-rtl-h:right-auto v:w-0 tap:duration-300 tap:transition-transform',
      handle: 'absolute rounded-full transition-shadow border-0 cursor-grab txt-rtl-h:-left-2 txt-rtl-h:right-auto disabled:cursor-not-allowed disabled:pointer-events-none form-bg-slider-handle form-shadow-handles hover:form-shadow-handles-hover focus:form-shadow-handles-focus focused-hover:form-shadow-handles-hover focus:outline-zero focus:form-ring',
      handle_sm: 'form-size-slider-handle-sm h:form-top-slider-handle-horizontal-sm h:form-right-slider-handle-horizontal-sm v:form-bottom-slider-handle-vertical-sm v:form-right-slider-handle-vertical-sm',
      handle_md: 'form-size-slider-handle h:form-top-slider-handle-horizontal h:form-right-slider-handle-horizontal v:form-bottom-slider-handle-vertical v:form-right-slider-handle-vertical',
      handle_lg: 'form-size-slider-handle-lg h:form-top-slider-handle-horizontal-lg h:form-right-slider-handle-horizontal-lg v:form-bottom-slider-handle-vertical-lg v:form-right-slider-handle-vertical-lg',
      handleUpper: 'slider-handle-upper',
      handleLower: 'slider-handle-lower',
      touchArea: 'h-full w-full',
      tooltip: 'absolute block font-semibold whitespace-nowrap min-w-5 text-center border form-border-color-slider-tooltip form-bg-primary form-color-on-primary transform tt-focus:hidden tt-focused:block tt-drag:hidden tt-dragging:block h:-translate-x-1/2 h:left-1/2 v:-translate-y-1/2 v:top-1/2 merge-h:translate-x-1/2 merge-v:translate-y-1/2 merge-h:left-auto merge-v:top-auto',
      tooltip_sm: 'form-text-small-sm form-py-slider-tooltip-sm form-px-slider-tooltip-sm form-radius-small-sm',
      tooltip_md: 'form-text-small form-py-slider-tooltip form-px-slider-tooltip form-radius-small',
      tooltip_lg: 'form-text-small-lg form-py-slider-tooltip-lg form-px-slider-tooltip-lg form-radius-small-lg',
      tooltipTop: 'form-slider-tooltip-top',
      tooltipTop_sm: 'form-bottom-slider-tooltip-top-sm merge-h:form-bottom-slider-tooltip-top-merged-sm h:arrow-bottom-sm',
      tooltipTop_md: 'form-bottom-slider-tooltip-top merge-h:form-bottom-slider-tooltip-top-merged h:arrow-bottom',
      tooltipTop_lg: 'form-bottom-slider-tooltip-top-lg merge-h:form-bottom-slider-tooltip-top-merged-lg h:arrow-bottom-lg',
      tooltipBottom: 'form-slider-tooltip-bottom',
      tooltipBottom_sm: 'form-top-slider-tooltip-bottom-sm merge-h:form-top-slider-tooltip-bottom-merged-sm h:arrow-top-sm',
      tooltipBottom_md: 'form-top-slider-tooltip-bottom merge-h:form-top-slider-tooltip-bottom-merged h:arrow-top',
      tooltipBottom_lg: 'form-top-slider-tooltip-bottom-lg merge-h:form-top-slider-tooltip-bottom-merged-lg h:arrow-top-lg',
      tooltipLeft: 'form-slider-tooltip-left',
      tooltipLeft_sm: 'form-right-slider-tooltip-left-sm merge-v:form-right-slider-tooltip-left-merged-sm v:arrow-right-sm',
      tooltipLeft_md: 'form-right-slider-tooltip-left merge-v:form-right-slider-tooltip-left-merged v:arrow-right',
      tooltipLeft_lg: 'form-right-slider-tooltip-left-lg merge-v:form-right-slider-tooltip-left-merged-lg v:arrow-right-lg',
      tooltipRight: 'form-slider-tooltip-right',
      tooltipRight_sm: 'form-left-slider-tooltip-right-sm merge-v:form-left-slider-tooltip-right-merged-sm v:arrow-left-sm',
      tooltipRight_md: 'form-left-slider-tooltip-right merge-v:form-left-slider-tooltip-right-merged v:arrow-left',
      tooltipRight_lg: 'form-left-slider-tooltip-right-lg merge-v:form-left-slider-tooltip-right-merged-lg v:arrow-left-lg',
      tooltipHidden: 'slider-tooltip-hidden',
      active: 'slider-active cursor-grabbing',
      draggable: 'cursor-ew-resize v:cursor-ns-resize',
      tap: 'slider-state-tap',
      drag: 'slider-state-drag',
      $target: (classes, _ref79) => {
        var {
          Size
        } = _ref79;
        return [classes.slider.target, classes.slider["target_".concat(Size)]];
      },
      $horizontal: (classes, _ref80) => {
        var {
          Size
        } = _ref80;
        return [classes.slider.horizontal, classes.slider["horizontal_".concat(Size)]];
      },
      $vertical: (classes, _ref81) => {
        var {
          Size
        } = _ref81;
        return [classes.slider.vertical, classes.slider["vertical_".concat(Size)]];
      },
      $base: (classes, _ref82) => {
        var {
          Size
        } = _ref82;
        return [classes.slider.base, classes.slider["base_".concat(Size)]];
      },
      $connects: (classes, _ref83) => {
        var {
          Size
        } = _ref83;
        return [classes.slider.connects, classes.slider["connects_".concat(Size)]];
      },
      $connect: (classes, _ref84) => {
        var {
          Size
        } = _ref84;
        return [classes.slider.connect, classes.slider["connect_".concat(Size)]];
      },
      $handle: (classes, _ref85) => {
        var {
          Size
        } = _ref85;
        return [classes.slider.handle, classes.slider["handle_".concat(Size)]];
      },
      $tooltip: (classes, _ref86) => {
        var {
          Size
        } = _ref86;
        return [classes.slider.tooltip, classes.slider["tooltip_".concat(Size)]];
      },
      $tooltipTop: (classes, _ref87) => {
        var {
          Size
        } = _ref87;
        return [classes.slider.tooltipTop, classes.slider["tooltipTop_".concat(Size)]];
      },
      $tooltipBottom: (classes, _ref88) => {
        var {
          Size
        } = _ref88;
        return [classes.slider.tooltipBottom, classes.slider["tooltipBottom_".concat(Size)]];
      },
      $tooltipLeft: (classes, _ref89) => {
        var {
          Size
        } = _ref89;
        return [classes.slider.tooltipLeft, classes.slider["tooltipLeft_".concat(Size)]];
      },
      $tooltipRight: (classes, _ref90) => {
        var {
          Size
        } = _ref90;
        return [classes.slider.tooltipRight, classes.slider["tooltipRight_".concat(Size)]];
      }
    },
    $wrapper: (classes, _ref91) => {
      var {
        Size
      } = _ref91;
      return [classes.wrapper, classes["wrapper_".concat(Size)]];
    }
  },
  StaticElement: {
    container: 'form-contains-link',
    content: '',
    content_sm: 'form-text-sm',
    content_md: 'form-text',
    content_lg: 'form-text-lg',
    content_top_1: 'form-mt-tag-1',
    content_top_2: 'form-mt-tag-2',
    content_top_3: 'form-mt-tag-3',
    content_bottom_1: 'form-mb-tag-1',
    content_bottom_2: 'form-mb-tag-2',
    content_bottom_3: 'form-mb-tag-3',
    tag: '',
    tag_sm: '',
    tag_md: '',
    tag_lg: '',
    tag_top_1: 'form-mt-tag-1',
    tag_top_2: 'form-mt-tag-2',
    tag_top_3: 'form-mt-tag-3',
    tag_bottom_1: 'form-mb-tag-1',
    tag_bottom_2: 'form-mb-tag-2',
    tag_bottom_3: 'form-mb-tag-3',
    tag_left: 'text-left',
    tag_center: 'text-center',
    tag_right: 'text-right',
    tag_p: '',
    tag_p_sm: '',
    tag_p_md: '',
    tag_p_lg: '',
    tag_h1: 'font-bold',
    tag_h1_sm: 'form-text-h1-mobile-sm md:form-text-h1-sm',
    tag_h1_md: 'form-text-h1-mobile md:form-text-h1',
    tag_h1_lg: 'form-text-h1-mobile-lg md:form-text-h1-lg',
    tag_h2: 'font-bold',
    tag_h2_sm: 'form-text-h2-mobile-sm md:form-text-h2-sm',
    tag_h2_md: 'form-text-h2-mobile md:form-text-h2',
    tag_h2_lg: 'form-text-h2-mobile-lg md:form-text-h2-lg',
    tag_h3: 'font-bold',
    tag_h3_sm: 'form-text-h3-mobile-sm md:form-text-h3-sm',
    tag_h3_md: 'form-text-h3-mobile md:form-text-h3',
    tag_h3_lg: 'form-text-h3-mobile-lg md:form-text-h3-lg',
    tag_h4: 'font-bold',
    tag_h4_sm: 'form-text-h4-mobile-sm md:form-text-h4-sm',
    tag_h4_md: 'form-text-h4-mobile md:form-text-h4',
    tag_h4_lg: 'form-text-h4-mobile-lg md:form-text-h4-lg',
    tag_blockquote: 'form-border-width-blockquote form-border-color-blockquote',
    tag_blockquote_sm: 'form-text-blockquote-sm form-p-blockquote-sm',
    tag_blockquote_md: 'form-text-blockquote form-p-blockquote',
    tag_blockquote_lg: 'form-text-blockquote-lg form-p-blockquote-lg',
    tag_a: 'form-color-link form-decoration-link',
    tag_a_sm: '',
    tag_a_md: '',
    tag_a_lg: '',
    tag_hr: 'form-static-tag-hr-wrapper form-border-color-hr form-py-hr',
    tag_img: 'form-static-tag-img',
    $content: (classes, _ref92) => {
      var {
        Size,
        top,
        bottom
      } = _ref92;
      return [classes.content, classes["content_".concat(Size)], top >= 1 ? classes["content_top_".concat(top)] : null, bottom >= 1 ? classes["content_bottom_".concat(bottom)] : null];
    },
    $tag: (classes, _ref93) => {
      var {
        Size,
        tag,
        align,
        top,
        bottom
      } = _ref93;
      return [classes.tag, classes["tag_".concat(Size)], classes["tag_".concat(tag)], classes["tag_".concat(tag, "_").concat(Size)] || null, align === 'left' ? classes.tag_left : null, align === 'center' ? classes.tag_center : null, align === 'right' ? classes.tag_right : null, top >= 1 ? classes["tag_top_".concat(top)] : null, bottom >= 1 ? classes["tag_bottom_".concat(bottom)] : null];
    }
  },
  TagsElement: {
    container: 'form-text-type',
    select: _objectSpread2(_objectSpread2({}, select), {}, {
      tags: 'flex-grow flex-shrink flex flex-wrap items-center min-w-0 rtl:pl-0',
      tags_sm: 'form-pl-input-y-sm form-mt-space-tags-sm with-floating:form-p-tags-floating-sm rtl:form-pr-input-y-sm',
      tags_md: 'form-pl-input-y form-mt-space-tags with-floating:form-p-tags-floating rtl:form-pr-input-y',
      tags_lg: 'form-pl-input-y-lg form-mt-space-tags-lg with-floating:form-p-tags-floating-lg rtl:form-pr-input-y-lg',
      tag: 'form-bg-tag form-color-tag form-border-width-tag form-border-color-tag font-semibold  flex items-center whitespace-nowrap min-w-0 rtl:pl-0 rtl:mr-0',
      tag_sm: 'form-radius-input-tag-sm form-text-small-sm form-py-tag-sm form-pl-tag-sm form-mr-space-tags-sm form-mb-space-tags-sm rtl:form-pr-tag-sm rtl:form-ml-space-tags-sm',
      tag_md: 'form-radius-input-tag form-text-small form-py-tag form-pl-tag form-mr-space-tags form-mb-space-tags rtl:form-pr-tag rtl:form-ml-space-tags',
      tag_lg: 'form-radius-input-tag-lg form-text-small-lg form-py-tag-lg form-pl-tag-lg form-mr-space-tags-lg form-mb-space-tags-lg rtl:form-pr-tag-lg rtl:form-ml-space-tags-lg',
      tagDisabled: 'opacity-50',
      tagDisabled_sm: 'form-pr-tag-sm rtl:form-pl-tag-sm',
      tagDisabled_md: 'form-pr-tag rtl:form-pl-tag',
      tagDisabled_lg: 'form-pr-tag-lg rtl:form-pl-tag-lg',
      tagWrapper: 'overflow-hidden overflow-ellipsis',
      tagWrapper_nobreak: 'whitespace-nowrap',
      tagWrapperBreak: 'whitespace-normal break-all',
      tagRemove: 'flex items-center justify-center p-1 mx-0.5 hover:bg-black hover:bg-opacity-10 group',
      tagRemove_sm: 'form-radius-input-tag-sm',
      tagRemove_md: 'form-radius-input-tag',
      tagRemove_lg: 'form-radius-input-tag-lg',
      tagRemoveIcon: 'mask-bg mask-form-remove bg-current inline-block w-3 h-3',
      tagsSearchWrapper: 'inline-block relative form-ml-space-tags form-mr-space-tags form-mb-space-tags flex-grow flex-shrink h-full max-w-full',
      tagsSearchWrapper_sm: 'form-ml-space-tags-sm form-mr-space-tags-sm form-mb-space-tags-sm',
      tagsSearchWrapper_md: 'form-ml-space-tags form-mr-space-tags form-mb-space-tags',
      tagsSearchWrapper_lg: 'form-ml-space-tags-lg form-mr-space-tags-lg form-mb-space-tags-lg',
      tagsSearch: 'absolute bg-transparent form-color-input inset-0 border-0 outline-zero appearance-none p-0 box-border w-full pr-2',
      tagsSearch_sm: 'form-text-sm',
      tagsSearch_md: 'form-text',
      tagsSearch_lg: 'form-text-lg',
      tagsSearchCopy: 'invisible whitespace-pre-wrap inline-block h-px',
      $tags: (classes, _ref94) => {
        var {
          Size
        } = _ref94;
        return [classes.select.tags, classes.select["tags_".concat(Size)]];
      },
      $tag: (classes, _ref95) => {
        var {
          Size
        } = _ref95;
        return [classes.select.tag, classes.select["tag_".concat(Size)]];
      },
      $tagWrapper: (classes, _ref96) => {
        var {
          breakTags
        } = _ref96;
        return [classes.select.tagWrapper, !breakTags.value ? classes.select.tagWrapper_noBreak : null];
      },
      $tagDisabled: (classes, _ref97) => {
        var {
          Size
        } = _ref97;
        return [classes.select.tagDisabled, classes.select["tagDisabled_".concat(Size)]];
      },
      $tagRemove: (classes, _ref98) => {
        var {
          Size
        } = _ref98;
        return [classes.select.tagRemove, classes.select["tagRemove_".concat(Size)]];
      },
      $tagsSearchWrapper: (classes, _ref99) => {
        var {
          Size
        } = _ref99;
        return [classes.select.tagsSearchWrapper, classes.select["tagsSearchWrapper_".concat(Size)]];
      },
      $tagsSearch: (classes, _ref100) => {
        var {
          Size
        } = _ref100;
        return [classes.select.tagsSearch, classes.select["tagsSearch_".concat(Size)]];
      }
    })
  },
  TextareaElement: _objectSpread2({}, textarea),
  TextElement: _objectSpread2({}, text),
  ToggleElement: {
    container: 'form-contains-link',
    wrapper: 'flex items-start',
    wrapper_left: 'rtl:justify-end',
    wrapper_right: 'justify-end rtl:justify-start',
    text: '',
    text_sm: 'form-ml-space-checkbox-sm rtl:form-mr-space-checkbox-sm rtl:ml-0',
    text_md: 'form-ml-space-checkbox rtl:form-mr-space-checkbox rtl:ml-0',
    text_lg: 'form-ml-space-checkbox-lg rtl:form-mr-space-checkbox-lg rtl:ml-0',
    text_left: 'rtl:-order-1 rtl:!mr-0',
    text_left_sm: '!form-ml-space-checkbox-sm',
    text_left_md: '!form-ml-space-checkbox',
    text_left_lg: '!form-ml-space-checkbox-lg',
    text_right: '!ml-0 -order-1 rtl:order-none',
    text_right_sm: 'form-mr-space-checkbox-sm',
    text_right_md: 'form-mr-space-checkbox',
    text_right_lg: 'form-mr-space-checkbox-lg',
    toggle: {
      container: 'form-shadow-handles inline-block rounded-full outline-zero transition-input duration-200 ease-in-out focus:form-ring',
      container_enabled: 'hover:form-shadow-handles-hover focus:form-shadow-handles-focus focused-hover:form-shadow-handles-hover',
      container_disabled: 'cursor-not-allowed opacity-50',
      toggle: 'flex rounded-full relative cursor-pointer transition-colors items-center box-content form-border-width-toggle leading-none',
      toggle_sm: 'form-w-toggle-sm form-h-toggle-sm text-xs',
      toggle_md: 'form-w-toggle form-h-toggle text-xs',
      toggle_lg: 'form-w-toggle-lg form-h-toggle-lg text-0.5sm',
      toggleOn: 'form-bg-primary form-border-color-primary justify-start form-color-on-primary',
      toggleOff: 'form-bg-passive form-border-color-passive form-color-passive justify-end',
      toggleOnDisabled: 'form-bg-primary form-border-color-primary justify-start form-color-on-primary',
      toggleOffDisabled: 'form-bg-passive form-border-color-passive form-color-passive justify-end',
      handle: 'inline-block form-bg-toggle-handle top-0 rounded-full absolute transition-all',
      handle_sm: 'form-size-toggle-handle-sm',
      handle_md: 'form-size-toggle-handle',
      handle_lg: 'form-size-toggle-handle-lg',
      handleOn: 'left-full transform -translate-x-full',
      handleOff: 'left-0',
      handleOnDisabled: 'left-full transform -translate-x-full',
      handleOffDisabled: 'left-0',
      label: 'text-center border-box whitespace-nowrap select-none',
      label_sm: 'form-w-toggle-label-sm',
      label_md: 'form-w-toggle-label',
      label_lg: 'form-w-toggle-label-lg',
      $container: (classes, _ref101) => {
        var {
          Size,
          isDisabled
        } = _ref101;
        return [classes.toggle.container, classes.toggle["container_".concat(Size)], !isDisabled ? classes.toggle.container_enabled : classes.toggle.container_disabled];
      },
      $toggle: (classes, _ref102) => {
        var {
          Size
        } = _ref102;
        return [classes.toggle.toggle, classes.toggle["toggle_".concat(Size)]];
      },
      $handle: (classes, _ref103) => {
        var {
          Size
        } = _ref103;
        return [classes.toggle.handle, classes.toggle["handle_".concat(Size)]];
      },
      $label: (classes, _ref104) => {
        var {
          Size
        } = _ref104;
        return [classes.toggle.label, classes.toggle["label_".concat(Size)]];
      }
    },
    $text: (classes, _ref105) => {
      var {
        Size,
        align
      } = _ref105;
      return [classes.text, classes["text_".concat(Size)], align === 'left' ? [classes.text_left, classes["text_left_".concat(Size)]] : null, align === 'right' ? [classes.text_right, classes["text_right_".concat(Size)]] : null];
    },
    $wrapper: (classes, _ref106) => {
      var {
        align
      } = _ref106;
      return [classes.wrapper, align === 'left' ? classes.wrapper_left : null, align === 'right' ? classes.wrapper_right : null];
    }
  },
  TTextareaElement: _objectSpread2({}, textarea),
  TTextElement: _objectSpread2({}, text),
  TEditorElement: _objectSpread2({}, editor),
  // Wrappers
  DatepickerWrapper: {
    datepicker: '',
    calendarContainer: ''
  },
  EditorWrapper: {
    container: 'form-bg-input form-color-input',
    container_hideBold: 'form-editor-hide-bold',
    container_hideItalic: 'form-editor-hide-italic',
    container_hideStrike: 'form-editor-hide-strike',
    container_hideLink: 'form-editor-hide-link',
    container_hideHeading: 'form-editor-hide-heading',
    container_hideQuote: 'form-editor-hide-quote',
    container_hideCode: 'form-editor-hide-code',
    container_hideBulletList: 'form-editor-hide-bullet-list',
    container_hideNumberList: 'form-editor-hide-number-list',
    container_hideDecreaseNesting: 'form-editor-hide-decrease-nesting',
    container_hideIncreaseNesting: 'form-editor-hide-increase-nesting',
    container_hideAttach: 'form-editor-hide-attach',
    container_hideUndo: 'form-editor-hide-undo',
    container_hideRedo: 'form-editor-hide-redo',
    $container: (classes, _ref107) => {
      var {
        hideTools
      } = _ref107;
      return [classes.container].concat(hideTools.map(t => classes["container_hide".concat(t.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(''))]));
    }
  },
  // Components
  ElementAddon: {
    container: 'form-bg-addon form-color-addon flex items-center justify-center flex-grow-0 flex-shrink-0',
    container_before: '',
    container_after: 'order-2',
    container_sm: '',
    container_md: '',
    container_lg: '',
    container_before_sm: 'form-radius-input-l-sm form-pl-input-sm form-pr-space-addon-sm',
    container_before_md: 'form-radius-input-l form-pl-input form-pr-space-addon',
    container_before_lg: 'form-radius-input-l-lg form-pl-input-lg form-pr-space-addon-lg',
    container_after_sm: 'form-radius-input-r-sm form-pr-input-sm form-pl-space-addon-sm',
    container_after_md: 'form-radius-input-r form-pr-input form-pl-space-addon',
    container_after_lg: 'form-radius-input-r-lg form-pr-input-lg form-pl-space-addon-lg',
    wrapper: 'contents items-center justify-center',
    $container: (classes, _ref108) => {
      var {
        type,
        Size
      } = _ref108;
      return [classes.container, classes["container_".concat(Size)], classes["container_".concat(type)], classes["container_".concat(type, "_").concat(Size)]];
    }
  },
  ElementAddonOptions: {
    container: 'flex items-center',
    container_disabled: 'cursor-default opacity-50 pointer-events-none',
    wrapper: 'flex items-center transition-all form-color-input hover:form-bg-selected focus:form-bg-selected outline-none rounded cursor-pointer whitespace-nowrap',
    wrapper_default: 'px-1 py-1',
    wrapper_relaxed: 'px-3 py-1.75',
    caret: 'mask-bg mask-form-caret form-bg-icon w-2.5 h-4 ml-2 rtl:ml-0 rtl:mr-2',
    dropdown: 'form-bg-input form-shadow-dropdown form-border-width-dropdown rounded border-solid form-border-color-input fixed z-[1002] overflow-x-scroll max-h-[calc(100vh-2rem)]',
    optionWrapper: '',
    option: 'flex items-center form-color-input cursor-pointer py-1.25 px-3 whitespace-nowrap',
    option_active: 'form-bg-selected',
    $container: (classes, _ref109) => {
      var {
        Size,
        el$
      } = _ref109;
      return [classes.container, el$.isDisabled || el$.readonly ? classes.container_disabled : null];
    },
    $wrapper: (classes, _ref110) => {
      var {
        relaxed
      } = _ref110;
      return [classes.wrapper, relaxed ? classes.wrapper_relaxed : classes.wrapper_default];
    },
    $option: (classes, _ref111) => {
      var {
        selected,
        pointed
      } = _ref111;
      return option => [classes.option, selected.index === option.index || pointed.index === option.index ? classes.option_active : null];
    }
  },
  ElementDescription: {
    container: 'form-color-muted',
    container_sm: 'form-text-small-sm mt-0.5',
    container_md: 'form-text-small mt-1',
    container_lg: 'form-text-small-lg mt-1',
    $container: (classes, _ref112) => {
      var {
        Size
      } = _ref112;
      return [classes.container, classes["container_".concat(Size)]];
    }
  },
  ElementError: {
    container: 'form-color-danger block',
    container_sm: 'form-text-small-sm mt-0.5',
    container_md: 'form-text-small mt-1',
    container_lg: 'form-text-small-lg mt-1',
    $container: (classes, _ref113) => {
      var {
        Size
      } = _ref113;
      return [classes.container, classes["container_".concat(Size)]];
    }
  },
  ElementInfo: {
    container: 'inline-block w-3.5 h-3.5 form-bg-info relative ml-1 cursor-pointer form-info-group',
    wrapper: 'absolute z-1000 -mt-px opacity-0 invisible info-group-hover:opacity-100 info-group-hover:form-visible transition-opacity w-52 flex',
    wrapper_left: 'right-5 -top-0.5 justify-end',
    wrapper_right: 'left-5 -top-0.5 justify-start',
    wrapper_top: 'left-1/2 transform -translate-x-1/2 bottom-8 justify-center',
    wrapper_bottom: 'left-1/2 transform -translate-x-1/2 top-6 justify-center',
    content: 'bg-black bg-opacity-90 text-white rounded-md form-text-small py-1 px-2.5 not-italic inline-block relative',
    $wrapper: (classes, _ref114) => {
      var {
        position
      } = _ref114;
      return [classes.wrapper, classes["wrapper_".concat(position)]];
    }
  },
  ElementLabel: {
    container: 'flex items-start',
    container_sm: 'form-text-sm',
    container_md: 'form-text',
    container_lg: 'form-text-lg',
    container_vertical_sm: 'form-pb-gutter/3-sm form-pt-0 form-pr-0',
    container_vertical_md: 'form-pb-gutter/3 form-pt-0 form-pr-0',
    container_vertical_lg: 'form-pb-gutter/3-lg form-pt-0 form-pr-0',
    container_vertical_sm_SM: 'sm:form-pb-gutter/3-sm sm:form-pt-0 sm:form-pr-0',
    container_vertical_md_SM: 'sm:form-pb-gutter/3 sm:form-pt-0 sm:form-pr-0',
    container_vertical_lg_SM: 'sm:form-pb-gutter/3-lg sm:form-pt-0 sm:form-pr-0',
    container_vertical_sm_MD: 'md:form-pb-gutter/3-sm md:form-pt-0 md:form-pr-0',
    container_vertical_md_MD: 'md:form-pb-gutter/3 md:form-pt-0 md:form-pr-0',
    container_vertical_lg_MD: 'md:form-pb-gutter/3-lg md:form-pt-0 md:form-pr-0',
    container_vertical_sm_LG: 'lg:form-pb-gutter/3-sm lg:form-pt-0 lg:form-pr-0',
    container_vertical_md_LG: 'lg:form-pb-gutter/3 lg:form-pt-0 lg:form-pr-0',
    container_vertical_lg_LG: 'lg:form-pb-gutter/3-lg lg:form-pt-0 lg:form-pr-0',
    container_vertical_sm_XL: 'xl:form-pb-gutter/3-sm xl:form-pt-0 xl:form-pr-0',
    container_vertical_md_XL: 'xl:form-pb-gutter/3 xl:form-pt-0 xl:form-pr-0',
    container_vertical_lg_XL: 'xl:form-pb-gutter/3-lg xl:form-pt-0 xl:form-pr-0',
    container_vertical_sm_2XL: '2xl:form-pb-gutter/3-sm 2xl:form-pt-0 2xl:form-pr-0',
    container_vertical_md_2XL: '2xl:form-pb-gutter/3 2xl:form-pt-0 2xl:form-pr-0',
    container_vertical_lg_2XL: '2xl:form-pb-gutter/3-lg 2xl:form-pt-0 2xl:form-pr-0',
    container_horizontal_sm: 'form-pr-gutter-sm text-type:form-pt-input-border-sm pb-0',
    container_horizontal_md: 'form-pr-gutter text-type:form-pt-input-border pb-0',
    container_horizontal_lg: 'form-pr-gutter-lg text-type:form-pt-input-border-lg pb-0',
    container_horizontal_sm_SM: 'sm:form-pr-gutter-sm sm:text-type:form-pt-input-border-sm sm:pb-0',
    container_horizontal_md_SM: 'sm:form-pr-gutter sm:text-type:form-pt-input-border sm:pb-0',
    container_horizontal_lg_SM: 'sm:form-pr-gutter-lg sm:text-type:form-pt-input-border-lg sm:pb-0',
    container_horizontal_sm_MD: 'md:form-pr-gutter-sm md:text-type:form-pt-input-border-sm md:pb-0',
    container_horizontal_md_MD: 'md:form-pr-gutter md:text-type:form-pt-input-border md:pb-0',
    container_horizontal_lg_MD: 'md:form-pr-gutter-lg md:text-type:form-pt-input-border-lg md:pb-0',
    container_horizontal_sm_LG: 'lg:form-pr-gutter-sm lg:text-type:form-pt-input-border-sm lg:pb-0',
    container_horizontal_md_LG: 'lg:form-pr-gutter lg:text-type:form-pt-input-border lg:pb-0',
    container_horizontal_lg_LG: 'lg:form-pr-gutter-lg lg:text-type:form-pt-input-border-lg lg:pb-0',
    container_horizontal_sm_XL: 'xl:form-pr-gutter-sm xl:text-type:form-pt-input-border-sm xl:pb-0',
    container_horizontal_md_XL: 'xl:form-pr-gutter xl:text-type:form-pt-input-border xl:pb-0',
    container_horizontal_lg_XL: 'xl:form-pr-gutter-lg xl:text-type:form-pt-input-border-lg xl:pb-0',
    container_horizontal_sm_2XL: '2xl:form-pr-gutter-sm 2xl:text-type:form-pt-input-border-sm 2xl:pb-0',
    container_horizontal_md_2XL: '2xl:form-pr-gutter 2xl:text-type:form-pt-input-border 2xl:pb-0',
    container_horizontal_lg_2XL: '2xl:form-pr-gutter-lg 2xl:text-type:form-pt-input-border-lg 2xl:pb-0',
    wrapper: '',
    $container: (classes, _ref115) => {
      var {
        el$,
        Size
      } = _ref115;
      return [classes.container, classes["container_".concat(Size)], !el$.inline ? el$.columnsClasses.label : null, el$.computedCols.default.label < 12 ? classes["container_horizontal_".concat(Size)] : classes["container_vertical_".concat(Size)], ...(Object.keys(el$.computedCols).length > 1 ? (el$.$vueform.config.breakpoints || ['sm', 'md', 'lg', 'xl', '2xl']).map(breakpoint => {
        var _el$$computedCols$bre;
        if (!((_el$$computedCols$bre = el$.computedCols[breakpoint]) !== null && _el$$computedCols$bre !== void 0 && _el$$computedCols$bre.label)) {
          return null;
        }
        return el$.computedCols[breakpoint].label < 12 ? classes["container_horizontal_".concat(Size, "_").concat(breakpoint.toUpperCase())].join(' ') : classes["container_vertical_".concat(Size, "_").concat(breakpoint.toUpperCase())].join(' ');
      }) : [])];
    }
  },
  ElementLabelFloating: {
    container: 'label-floating relative pointer-events-none',
    label: 'absolute z-1 leading-px text-0.5xs px-px transition-input duration-200 ease-in-out whitespace-nowrap in-input-group:-form-top-border-width-input-t',
    label_enabled: 'form-bg-input form-color-floating',
    label_disabled: 'form-bg-disabled form-color-floating',
    label_danger: 'form-bg-input-danger form-color-floating-danger',
    label_success: 'form-bg-input-success form-color-floating-success',
    label_focused: 'form-bg-input-focus form-color-floating-focus',
    label_sm: 'form-left-input-sm form-mt-floating-sm rtl:left-auto rtl:form-right-input-sm',
    label_md: 'form-left-input form-mt-floating rtl:left-auto rtl:form-right-input',
    label_lg: 'form-left-input-lg form-mt-floating-lg rtl:left-auto rtl:form-right-input-lg',
    label_invisible: 'opacity-0 invisible',
    label_visible: 'opacity-100 visible',
    $label: (classes, _ref116) => {
      var {
        visible,
        Size,
        el$
      } = _ref116;
      return [classes.label, classes["label_".concat(Size)], visible ? classes.label_visible : classes.label_invisible, el$.focused && !el$.isDanger && !el$.isSuccess ? classes.label_focused : null, !el$.isDisabled && !el$.isDanger && !el$.isSuccess ? classes.label_enabled : null, el$.isDisabled ? classes.label_disabled : null, el$.isDanger ? classes.label_danger : null, el$.isSuccess ? classes.label_success : null];
    }
  },
  ElementLayout: {
    container: '',
    container_sm: 'form-text-sm',
    container_md: 'form-text',
    container_lg: 'form-text-lg',
    container_error: 'has-error',
    outerWrapper: 'grid grid-cols-12',
    innerContainer: 'flex-1 grid grid-cols-12',
    innerWrapperBefore: 'col-span-12',
    innerWrapper: '',
    innerWrapperAfter: 'col-span-12',
    $container: (classes, _ref117) => {
      var {
        el$,
        Size
      } = _ref117;
      return [classes.container, classes["container_".concat(Size)], el$.columnsClasses.container, el$.classes.container, !el$.isStatic && el$.errors && !!el$.errors.length ? classes.container_error : null];
    },
    $innerContainer: (classes, _ref118) => {
      var {
        el$
      } = _ref118;
      return [classes.innerContainer, el$.columnsClasses.innerContainer];
    },
    $innerWrapper: (classes, _ref119) => {
      var {
        el$
      } = _ref119;
      return [classes.innerWrapper, el$.columnsClasses.wrapper];
    }
  },
  ElementLayoutInline: {
    container: 'flex',
    container_error: 'has-error',
    $container: (classes, _ref120) => {
      var {
        el$
      } = _ref120;
      return [classes.container, !el$.isStatic && el$.errors && !!el$.errors.length ? classes.container_error : null, el$.classes.container];
    }
  },
  ElementLoader: {
    container: 'relative z-1 order-1',
    loader: 'absolute w-4 h-4 right-full mask-bg mask-form-spinner form-bg-primary animate-spin',
    loader_sm: 'form-top-input-border-sm form-mr-input-sm mt-0.5',
    loader_md: 'form-top-input-border form-mr-input mt-1',
    loader_lg: 'form-top-input-border-lg form-mr-input-lg mt-1',
    $loader: (classes, _ref121) => {
      var {
        Size
      } = _ref121;
      return [classes.loader, classes["loader_".concat(Size)]];
    }
  },
  ElementMessage: {
    container: 'form-color-success block',
    container_sm: 'form-text-small-sm mt-0.5',
    container_md: 'form-text-small mt-1',
    container_lg: 'form-text-small-lg mt-1',
    $container: (classes, _ref122) => {
      var {
        Size
      } = _ref122;
      return [classes.container, classes["container_".concat(Size)]];
    }
  },
  ElementRequired: {
    container: ''
  },
  ElementText: {
    container: '',
    container_before: '',
    container_between: '',
    container_after: '',
    $container: (classes, _ref123) => {
      var {
        type
      } = _ref123;
      return [classes.container, classes["container_".concat(type)]];
    }
  },
  FormElements: {
    container: 'grid grid-cols-12',
    container_sm: 'form-gap-x-gutter-sm form-gap-y-gutter-sm',
    container_md: 'form-gap-x-gutter form-gap-y-gutter',
    container_lg: 'form-gap-x-gutter-lg form-gap-y-gutter-lg',
    $container: (classes, _ref124) => {
      var {
        Size
      } = _ref124;
      return [classes.container, classes["container_".concat(Size)]];
    }
  },
  FormErrors: {
    container: 'form-bg-danger form-color-danger',
    container_sm: 'form-radius-input-sm form-text-sm form-mb-gutter-sm py-2 px-3',
    container_md: 'form-radius-input form-text form-mb-gutter py-2 px-3',
    container_lg: 'form-radius-input-lg form-text-lg form-mb-gutter-lg py-3 px-4',
    error: '',
    $container: (classes, _ref125) => {
      var {
        Size
      } = _ref125;
      return [classes.container, classes["container_".concat(Size)]];
    }
  },
  FormLanguage: {
    container: 'flex-grow flex-shrink w-full',
    wrapper: 'block border-b-2 text-center',
    wrapper_active: 'form-border-color-primary',
    wrapper_inactive: 'border-transparent',
    wrapper_valid: '',
    wrapper_invalid: 'form-color-danger form-border-color-danger',
    wrapper_sm: 'py-1.5 px-3.5',
    wrapper_md: 'py-2 px-4',
    wrapper_lg: 'py-2 px-4',
    $wrapper: (classes, _ref126) => {
      var {
        selected,
        Size
      } = _ref126;
      return [classes.wrapper, classes["wrapper_".concat(Size)], selected ? classes.wrapper_active : classes.wrapper_inactive];
    }
  },
  FormLanguages: {
    container: 'flex items-center justify-between',
    container_sm: 'form-mb-gutter form-text-sm',
    container_md: 'form-mb-gutter-lg form-text',
    container_lg: 'form-mb-gutter-lg form-text-lg',
    $container: (classes, _ref127) => {
      var {
        Size
      } = _ref127;
      return [classes.container, classes["container_".concat(Size)]];
    }
  },
  FormMessages: {
    container: 'form-bg-success form-color-success',
    container_sm: 'form-radius-input-sm form-text-sm form-mb-gutter-sm py-2 px-3',
    container_md: 'form-radius-input form-text form-mb-gutter py-2 px-3',
    container_lg: 'form-radius-input-lg form-text-lg form-mb-gutter-lg py-3 px-4',
    message: '',
    $container: (classes, _ref128) => {
      var {
        Size
      } = _ref128;
      return [classes.container, classes["container_".concat(Size)]];
    }
  },
  FormStep: {
    container: 'form-step',
    container_active: 'form-step-active',
    container_inactive: '',
    container_invalid: 'form-step-has-errors',
    container_valid: '',
    container_disabled: 'form-step-disabled',
    container_enabled: '',
    container_completed: 'form-step-completed',
    container_incompleted: '',
    container_pending: 'form-step-pending',
    wrapper: '',
    $container: (classes, _ref129) => {
      var {
        active,
        isDisabled,
        completed,
        invalid,
        pending
      } = _ref129;
      return [classes.container, active ? classes.container_active : classes.container_inactive, isDisabled ? classes.container_disabled : classes.container_enabled, completed ? classes.container_completed : classes.container_incompleted, invalid ? classes.container_invalid : classes.container_valid, pending ? classes.container_pending : null];
    }
  },
  FormSteps: {
    container: 'form-steps',
    container_sm: 'form-mb-gutter form-text-sm',
    container_md: 'form-mb-gutter-lg form-text',
    container_lg: 'form-mb-gutter-lg form-text-lg',
    wrapper: 'flex justify-between overflow-x-auto',
    $container: (classes, _ref130) => {
      var {
        Size
      } = _ref130;
      return [classes.container, classes["container_".concat(Size)]];
    }
  },
  FormStepsControl: {
    button: 'form-border-width-btn form-shadow-btn focus:form-ring focus:outline-zero disabled:pointer-events-none disabled:opacity-60 disabled:cursor-not-allowed',
    button_previous: '',
    button_previous_enabled: 'form-bg-btn-secondary form-color-btn-secondary form-border-color-btn-secondary transition-transform transform hover:scale-105',
    button_previous_disabled: 'form-bg-btn-secondary form-color-btn-secondary form-border-color-btn-secondary opacity-60 pointer-events-none',
    button_next: '',
    button_next_enabled: 'form-bg-primary form-color-on-primary form-border-color-btn transition-transform transform hover:scale-105',
    button_next_disabled: 'form-bg-primary form-color-on-primary form-border-color-btn opacity-60 pointer-events-none cursor-not-allowed',
    button_next_loading: 'text-transparent form-bg-primary form-border-color-btn form-bg-spinner-on-primary opacity-60 pointer-events-none cursor-not-allowed',
    button_finish: '',
    button_finish_enabled: 'form-bg-primary form-color-on-primary form-border-color-btn transition-transform transform hover:scale-105',
    button_finish_disabled: 'form-bg-primary form-color-on-primary form-border-color-btn opacity-60 pointer-events-none cursor-not-allowed',
    button_finish_loading: 'text-transparent form-bg-primary form-border-color-btn form-bg-spinner-on-primary opacity-60 pointer-events-none cursor-not-allowed',
    button_sm: 'form-p-btn-sm form-radius-btn-sm form-text-sm',
    button_md: 'form-p-btn form-radius-btn form-text',
    button_lg: 'form-p-btn-lg form-radius-btn-lg form-text-lg',
    $button: (classes, _ref131) => {
      var {
        isDisabled,
        isLoading,
        type,
        Size
      } = _ref131;
      return [classes.button, classes["button_".concat(Size)], classes["button_".concat(type)], isDisabled && !isLoading ? classes["button_".concat(type, "_disabled")] : null, !isDisabled && !isLoading ? classes["button_".concat(type, "_enabled")] : null, isLoading ? classes["button_".concat(type, "_loading")] : null];
    }
  },
  FormStepsControls: {
    container: 'flex justify-between',
    container_sm: 'form-mt-gutter form-text-sm',
    container_md: 'form-mt-gutter-lg form-text',
    container_lg: 'form-mt-gutter-lg form-text-lg',
    $container: (classes, _ref132) => {
      var {
        Size
      } = _ref132;
      return [classes.container, classes["container_".concat(Size)]];
    }
  },
  FormTab: {
    container: 'cursor-pointer',
    wrapper: 'block border-b-2',
    wrapper_active: 'form-border-color-primary',
    wrapper_inactive: 'border-transparent',
    wrapper_valid: '',
    wrapper_invalid: 'form-color-danger form-border-color-danger',
    wrapper_sm: 'py-1.5 px-3.5',
    wrapper_md: 'py-2 px-4',
    wrapper_lg: 'py-2 px-4',
    $container: (classes, _ref133) => {
      return [classes.container];
    },
    $wrapper: (classes, _ref134) => {
      var {
        active,
        invalid,
        Size
      } = _ref134;
      return [classes.wrapper, classes["wrapper_".concat(Size)], active ? classes.wrapper_active : classes.wrapper_inactive, invalid ? classes.wrapper_invalid : classes.wrapper_valid];
    }
  },
  FormTabs: {
    container: 'flex items-end',
    container_sm: 'form-mb-gutter form-text-sm',
    container_md: 'form-mb-gutter-lg form-text',
    container_lg: 'form-mb-gutter-lg form-text-lg',
    $container: (classes, _ref135) => {
      var {
        Size
      } = _ref135;
      return [classes.container, classes["container_".concat(Size)]];
    }
  },
  Vueform: {
    form: ''
  },
  // Slots
  CheckboxgroupCheckbox: _objectSpread2(_objectSpread2({}, checkbox), {}, {
    container: 'flex cursor-pointer',
    wrapper: 'flex cursor-pointer form-view-default',
    text: '',
    input: checkbox.input + ' form-shadow-handles',
    input_sm: checkbox.input_sm + ' form-mt-checkbox-sm',
    input_md: checkbox.input_md + ' form-mt-checkbox',
    input_lg: checkbox.input_lg + ' form-mt-checkbox-lg'
  }),
  CheckboxgroupCheckbox_tabs: _objectSpread2(_objectSpread2({}, groupTabs), {}, {
    container: groupTabs.container + ' form-view-tabs',
    $wrapper: (classes, _ref136) => {
      var _el$$value;
      var {
        index,
        items,
        el$,
        value,
        isDisabled,
        Size
      } = _ref136;
      return [classes.wrapper, classes["wrapper_".concat(Size)], index < Object.keys(items).length - 1 ? classes.wrapper_not_last : null, index === 0 ? classes.wrapper_first : null, index === 0 ? classes["wrapper_first_".concat(Size)] : null, index === Object.keys(items).length - 1 ? classes.wrapper_last : null, index === Object.keys(items).length - 1 ? classes["wrapper_last_".concat(Size)] : null, el$.value && ((_el$$value = el$.value) === null || _el$$value === void 0 ? void 0 : _el$$value.indexOf(value)) !== -1 ? classes.wrapper_selected : classes.wrapper_unselected, isDisabled ? classes.wrapper_disabled : null];
    }
  }),
  CheckboxgroupCheckbox_blocks: _objectSpread2(_objectSpread2(_objectSpread2({}, checkbox), groupBlocks), {}, {
    container: groupBlocks.container + ' form-view-blocks',
    $wrapper: (classes, _ref137) => {
      var _el$$value2;
      var {
        index,
        items,
        el$,
        value,
        isDisabled,
        Size
      } = _ref137;
      return [classes.wrapper, classes["wrapper_".concat(Size)], index < Object.keys(items).length - 1 ? classes.wrapper_not_last : null, index === 0 ? classes.wrapper_first : null, index === 0 ? classes["wrapper_first_".concat(Size)] : null, index === Object.keys(items).length - 1 ? classes.wrapper_last : null, index === Object.keys(items).length - 1 ? classes["wrapper_last_".concat(Size)] : null, el$.value && ((_el$$value2 = el$.value) === null || _el$$value2 === void 0 ? void 0 : _el$$value2.indexOf(value)) !== -1 ? classes.wrapper_selected : classes.wrapper_unselected, isDisabled ? classes.wrapper_disabled : null];
    },
    $description: (classes, _ref138) => {
      var {
        Size
      } = _ref138;
      return [classes.description, classes["description_".concat(Size)]];
    }
  }),
  DragAndDrop: {
    container: 'form-shadow-input form-bg-input form-color-input form-border-width-input border-dashed w-full transition inline-flex flex-col items-center justify-center p-6 cursor-pointer text-center',
    container_sm: 'form-radius-large-sm',
    container_md: 'form-radius-large',
    container_lg: 'form-radius-large-lg',
    container_inactive: 'form-border-color-input',
    container_active: 'form-border-color-primary',
    container_enabled: '',
    container_disabled: 'opacity-50 cursor-not-allowed',
    icon: 'inline-block w-9 h-8 mask-bg mask-form-inbox-in form-bg-primary',
    title: 'font-semibold mt-3',
    description: '',
    $container: (classes, _ref139) => {
      var {
        dragging,
        disabled,
        Size
      } = _ref139;
      return [classes.container, classes["container_".concat(Size)], dragging ? classes.container_active : classes.container_inactive, disabled ? classes.container_disabled : classes.container_enabled];
    }
  },
  FilePreview: {
    container: 'flex justify-center flex-col group relative',
    container_sm: 'form-h-input-min-height-sm',
    container_md: 'form-h-input-min-height',
    container_lg: 'form-h-input-min-height-lg',
    wrapper: 'flex justify-between items-center w-full',
    file: 'flex items-center',
    filenameLink: 'hover:underline',
    filenameStatic: '',
    actions: 'flex items-center',
    percent: 'flex justify-between items-center text-sm form-color-muted group-hover:form-hidden',
    upload: 'form-bg-primary form-color-on-primary form-radius-small text-xs py-0.5 px-1.5 ml-1.5 whitespace-nowrap transition-transform transform hover:scale-105 focus:form-ring',
    progressBar: 'form-bg-passive h-0.75 absolute bottom-0 w-full',
    progress: 'w-0 form-bg-primary transition-all ease-out duration-500 h-0.75',
    warning: 'flex w-4 h-4 items-center justify-center form-bg-danger rounded-full group-hover:form-hidden',
    warningIcon: 'mask-bg mask-form-exclamation-solid form-bg-danger-color mask-size-2.5 block w-full h-full',
    uploaded: 'flex w-4 h-4 items-center justify-center form-bg-success rounded-full group-hover:form-hidden',
    uploadedIcon: 'mask-bg mask-form-check-solid form-bg-success-color mask-size-2.5 block w-full h-full',
    remove: 'flex w-4 h-4 items-center justify-center form-bg-passive form-color-passive rounded-full transition filter hover:brightness-90 form-hidden group-hover:form-inline-block',
    removeIcon: 'mask-bg mask-form-remove-light form-bg-input-color mask-size-3 block w-full h-full',
    assistiveText: 'form-assistive-text',
    $container: (classes, _ref140) => {
      var {
        Size
      } = _ref140;
      return [classes.container, classes["container_".concat(Size)]];
    }
  },
  FilePreview_image: {
    container: 'flex justify-start flex-col group relative',
    wrapper: 'flex justify-between items-center w-full',
    image: 'form-shadow-input flex items-center form-bg-passive flex-grow-0 flex-shrink-0',
    image_link: '',
    image_static: '',
    image_sm: 'form-radius-image-sm',
    image_md: 'form-radius-image',
    image_lg: 'form-radius-image-lg',
    img: 'form-w-input-height form-h-input-height form-hide-empty-img object-cover',
    img_sm: 'form-w-input-height-sm form-h-input-height-sm form-radius-image-sm',
    img_md: 'form-w-input-height form-h-input-height form-radius-image',
    img_lg: 'form-w-input-height-lg form-h-input-height-lg form-radius-image-lg',
    file: 'flex items-center flex-grow flex-shrink ml-2.5',
    filenameLink: 'hover:underline',
    filenameStatic: '',
    actions: 'flex items-center',
    percent: 'flex justify-between items-center text-sm form-color-muted group-hover:form-hidden',
    upload: 'form-bg-primary form-color-on-primary form-radius-small text-xs py-0.5 px-1.5 ml-1.5 whitespace-nowrap transition-transform transform hover:scale-105 focus:form-ring',
    progressBar: 'form-bg-passive h-0.75 ml-2.5 absolute bottom-0 right-0',
    progressBar_sm: 'form-left-input-height-sm',
    progressBar_md: 'form-left-input-height',
    progressBar_lg: 'form-left-input-height-lg',
    progress: 'w-0 form-bg-primary transition-all ease-out duration-500 h-0.75',
    warning: 'flex w-4 h-4 items-center justify-center form-bg-danger rounded-full group-hover:form-hidden',
    warningIcon: 'mask-bg mask-form-exclamation-solid form-bg-danger-color mask-size-2.5 block w-full h-full',
    uploaded: 'flex w-4 h-4 items-center justify-center form-bg-success rounded-full group-hover:form-hidden',
    uploadedIcon: 'mask-bg mask-form-check-solid form-bg-success-color mask-size-2.5 block w-full h-full',
    remove: 'flex w-4 h-4 items-center justify-center form-bg-passive form-color-passive rounded-full transition filter hover:brightness-90 form-hidden group-hover:form-inline-block',
    removeIcon: 'mask-bg mask-form-remove-light form-bg-input-color mask-size-3 block w-full h-full',
    assistiveText: 'form-assistive-text',
    $image: (classes, _ref141) => {
      var {
        hasLink,
        Size
      } = _ref141;
      return [classes.image, classes["image_".concat(Size)], hasLink ? classes.image_link : classes.image_static];
    },
    $img: (classes, _ref142) => {
      var {
        Size
      } = _ref142;
      return [classes.img, classes["img_".concat(Size)]];
    },
    $progressBar: (classes, _ref143) => {
      var {
        Size
      } = _ref143;
      return [classes.progressBar, classes["progressBar_".concat(Size)]];
    }
  },
  FilePreview_gallery: {
    container: 'flex justify-start flex-col transition duration-500 relative group',
    container_sm: 'form-w-gallery-sm form-h-gallery-sm',
    container_md: 'form-w-gallery form-h-gallery',
    container_lg: 'form-w-gallery-lg form-h-gallery-lg',
    image: 'form-shadow-input w-full h-full form-bg-passive',
    image_sm: 'form-radius-gallery-sm',
    image_md: 'form-radius-gallery',
    image_lg: 'form-radius-gallery-lg',
    image_link: '',
    image_static: '',
    img: 'w-full h-full object-cover form-hide-empty-img',
    img_sm: 'form-radius-gallery-sm',
    img_md: 'form-radius-gallery',
    img_lg: 'form-radius-gallery-lg',
    overlay: 'absolute inset-0 bg-white bg-opacity-50 transition duration-300 opacity-0 invisible flex items-center justify-center p-3 form-radius-input group-hover:form-visible group-hover:opacity-100',
    overlay_sm: 'form-radius-gallery-sm',
    overlay_md: 'form-radius-gallery',
    overlay_lg: 'form-radius-gallery-lg',
    upload: 'relative z-1 form-bg-primary form-color-on-primary form-radius-small text-xs py-0.5 px-1.5 whitespace-nowrap transition-transform transform hover:scale-105 focus:form-ring',
    progressBar: 'bg-white absolute left-1 right-1 bottom-1 h-0.75 z-1',
    progress: 'w-0 form-bg-primary transition-all ease-out duration-500 h-0.75',
    warning: 'absolute right-0.5 bottom-0.5 mr-px mb-px flex w-4 h-4 items-center justify-center form-bg-danger rounded-full',
    warningIcon: 'mask-bg mask-form-exclamation-solid form-bg-danger-color mask-size-2.5 block w-full h-full',
    uploaded: 'absolute right-0.5 bottom-0.5 mr-px mb-px flex w-4 h-4 items-center justify-center form-bg-success rounded-full',
    uploadedIcon: 'mask-bg mask-form-check-solid form-bg-success-color mask-size-2.5 block w-full h-full',
    remove: 'flex w-4 h-4 items-center justify-center form-bg-passive form-color-passive absolute top-0.5 right-0.5 mt-px mr-px form-hidden rounded-full transition filter hover:brightness-90 group-hover:form-inline-block ',
    removeIcon: 'mask-bg mask-form-remove-light form-bg-input-color mask-size-3 block w-full h-full',
    assistiveText: 'form-assistive-text',
    $container: (classes, _ref144) => {
      var {
        Size
      } = _ref144;
      return [classes.container, classes["container_".concat(Size)]];
    },
    $image: (classes, _ref145) => {
      var {
        Size
      } = _ref145;
      return [classes.image, classes["image_".concat(Size)]];
    },
    $img: (classes, _ref146) => {
      var {
        Size
      } = _ref146;
      return [classes.img, classes["img_".concat(Size)]];
    },
    $overlay: (classes, _ref147) => {
      var {
        Size
      } = _ref147;
      return [classes.overlay, classes["overlay_".concat(Size)]];
    }
  },
  RadiogroupRadio: _objectSpread2(_objectSpread2({}, radio), {}, {
    container: 'flex cursor-pointer form-view-default',
    text: '',
    input: radio.input + ' form-shadow-handles',
    input_sm: radio.input_sm + ' form-mt-checkbox-sm',
    input_md: radio.input_md + ' form-mt-checkbox',
    input_lg: radio.input_lg + ' form-mt-checkbox-lg'
  }),
  RadiogroupRadio_tabs: _objectSpread2(_objectSpread2({}, groupTabs), {}, {
    container: groupTabs.container + ' form-view-tabs',
    $wrapper: (classes, _ref148) => {
      var {
        index,
        items,
        el$,
        value,
        isDisabled,
        Size
      } = _ref148;
      return [classes.wrapper, classes["wrapper_".concat(Size)], index < Object.keys(items).length - 1 ? classes.wrapper_not_last : null, index === 0 ? classes.wrapper_first : null, index === 0 ? classes["wrapper_first_".concat(Size)] : null, index === Object.keys(items).length - 1 ? classes.wrapper_last : null, index === Object.keys(items).length - 1 ? classes["wrapper_last_".concat(Size)] : null, el$.value == value ? classes.wrapper_selected : classes.wrapper_unselected, isDisabled ? classes.wrapper_disabled : null];
    }
  }),
  RadiogroupRadio_blocks: _objectSpread2(_objectSpread2(_objectSpread2({}, radio), groupBlocks), {}, {
    container: groupBlocks.container + ' form-view-blocks',
    $wrapper: (classes, _ref149) => {
      var {
        index,
        items,
        el$,
        value,
        isDisabled,
        Size
      } = _ref149;
      return [classes.wrapper, classes["wrapper_".concat(Size)], index < Object.keys(items).length - 1 ? classes.wrapper_not_last : null, index === 0 ? classes.wrapper_first : null, index === 0 ? classes["wrapper_first_".concat(Size)] : null, index === Object.keys(items).length - 1 ? classes.wrapper_last : null, index === Object.keys(items).length - 1 ? classes["wrapper_last_".concat(Size)] : null, el$.value == value ? classes.wrapper_selected : classes.wrapper_unselected, isDisabled ? classes.wrapper_disabled : null];
    },
    $description: (classes, _ref150) => {
      var {
        Size
      } = _ref150;
      return [classes.description, classes["description_".concat(Size)]];
    }
  })
};

var add = {
  inputs: {
    inputContainer: 'h-full',
    inputContainer_focused: 'relative z-1'
  },
  textareas: {
    inputContainer: 'h-full',
    inputContainer_focused: 'relative z-1',
    input: 'min-h-full'
  },
  selects: {
    input: 'h-full focus:relative focus:z-1',
    inputWrapper: 'h-full',
    inputCaret: 'z-[2]',
    select: {
      container: 'h-full',
      containerActive: 'relative z-1',
      wrapper: 'h-full'
    }
  },
  editors: {
    input: 'h-full flex flex-col [&>trix-editor]:h-full',
    input_focused: 'relative z-1'
  },
  groups: {
    wrapper: 'h-full'
  }
};
var replace = {
  inputs: {
    inputContainer_sm: {
      'form-h-input-height-sm': 'form-min-h-input-height-sm'
    },
    inputContainer_md: {
      'form-h-input-height': 'form-min-h-input-height'
    },
    inputContainer_lg: {
      'form-h-input-height-lg': 'form-min-h-input-height-lg'
    }
  },
  groups: {
    container: {
      'form-view-default': 'px-2 py-1',
      'form-view-tabs': '',
      'form-view-blocks': '[&_label:first-of-type>div]:border-t-0',
      'form-view-tabs': '[&_label:first-of-type>div]:border-l-0'
    }
  },
  groupItems: {
    container: {
      'form-view-tabs': '[&>div]:border-b-0 [&>div]:border-t-0 [&>div]:border-r-0',
      'form-view-blocks': 'flex-1 [&>div]:border-l-0 [&>div]:border-b-0 [&>div]:border-r-0'
    }
  }
};
var remove = {
  inputs: {
    inputContainer: ['form-border-width-input'],
    inputContainer_sm: ['form-radius-input-sm'],
    inputContainer_md: ['form-radius-input'],
    inputContainer_lg: ['form-radius-input-lg'],
    input_sm: ['form-radius-input-sm'],
    input_md: ['form-radius-input'],
    input_lg: ['form-radius-input-lg']
  },
  textareas: {
    inputContainer: ['form-border-width-input'],
    inputContainer_sm: ['form-radius-large-sm'],
    inputContainer_md: ['form-radius-large'],
    inputContainer_lg: ['form-radius-large-lg'],
    input_sm: ['form-radius-large-sm'],
    input_md: ['form-radius-large'],
    input_lg: ['form-radius-large-lg']
  },
  selects: {
    input: ['form-border-width-input'],
    input_sm: ['form-radius-input-sm'],
    input_md: ['form-radius-input'],
    input_lg: ['form-radius-input-lg'],
    select: {
      container: ['form-border-width-input'],
      container_sm: ['form-radius-input-sm'],
      container_md: ['form-radius-input'],
      container_lg: ['form-radius-input-lg']
    }
  },
  editors: {
    input: ['form-border-width-input'],
    input_sm: ['form-radius-large-sm'],
    input_md: ['form-radius-large'],
    input_lg: ['form-radius-large-lg']
  },
  files: {
    button_sm: ['form-radius-btn-sm'],
    button_md: ['form-radius-btn'],
    button_lg: ['form-radius-btn-lg'],
    button_enabled: ['hover:scale-105']
  },
  groups: {
    wrapper_sm: ['form-radius-large-sm'],
    wrapper_md: ['form-radius-large'],
    wrapper_lg: ['form-radius-large-lg']
  },
  groupItems: {
    container_sm: ['form-radius-large-sm'],
    container_md: ['form-radius-large'],
    container_lg: ['form-radius-large-lg'],
    wrapper_first_sm: ['form-radius-input-l-sm', 'form-radius-large-t-sm'],
    wrapper_first_md: ['form-radius-input-l', 'form-radius-large-t'],
    wrapper_first_lg: ['form-radius-input-l-lg', 'form-radius-large-t-lg'],
    wrapper_last_sm: ['form-radius-input-r-sm', 'form-radius-large-b-sm'],
    wrapper_last_md: ['form-radius-input-r', 'form-radius-large-b'],
    wrapper_last_lg: ['form-radius-input-r-lg', 'form-radius-large-b-lg']
  }
};
var tableInputs = {
  add: {
    TextElement: add.inputs,
    TTextElement: add.inputs,
    LocationElement: add.inputs,
    PhoneElement: add.inputs,
    DateElement: add.inputs,
    DatesElement: add.inputs,
    TextareaElement: add.textareas,
    TTextareaElement: add.textareas,
    SelectElement: add.selects,
    MultiselectElement: add.selects,
    TagsElement: {
      select: add.selects.select
    },
    EditorElement: add.editors,
    TEditorElement: add.editors,
    CheckboxgroupElement: add.groups,
    CheckboxgroupCheckbox: add.groupItems,
    RadiogroupElement: add.groups,
    RadiogroupRadio: add.groupItems,
    ButtonElement: {
      button_enabled: 'hover:brightness-95',
      button_not_full: 'w-full'
    },
    FileElement: {
      button: 'text-center w-full focus:relative focus:z-1 hover:brightness-95'
    },
    FilePreview: {
      wrapper: 'py-1 px-1'
    },
    MultifileElement: {
      button: 'text-center w-full focus:relative focus:z-1 hover:brightness-95',
      list: 'py-1 px-1'
    },
    SliderElement: {
      wrapper: 'h-full w-full flex items-center justify-center',
      slider: {
        target: 'w-full mx-4'
      }
    },
    SignatureElement: {
      wrapper: 'min-w-[100px]'
    },
    StaticElement: {
      content: 'h-full'
    },
    ElementLayout: {
      outerWrapper: 'h-full',
      innerWrapperBefore: 'hidden form-inner-wrapper-before',
      innerWrapper: 'h-full',
      innerWrapperAfter: 'hidden form-inner-wrapper-after'
    }
  },
  replace: {
    TextElement: replace.inputs,
    TTextElement: replace.inputs,
    DateElement: replace.inputs,
    DatesElement: replace.inputs,
    LocationElement: replace.inputs,
    PhoneElement: replace.inputs,
    CheckboxgroupElement: replace.groups,
    RadiogroupElement: replace.groups,
    CheckboxgroupCheckbox: replace.groupItems,
    RadiogroupRadio: replace.groupItems
  },
  remove: {
    TextElement: remove.inputs,
    DateElement: remove.inputs,
    DatesElement: remove.inputs,
    TTextElement: remove.inputs,
    LocationElement: remove.inputs,
    PhoneElement: remove.inputs,
    TextareaElement: remove.textareas,
    TTextareaElement: remove.textareas,
    SelectElement: remove.selects,
    MultiselectElement: remove.selects,
    TagsElement: {
      select: remove.selects.select
    },
    EditorElement: remove.editors,
    TEditorElement: remove.editors,
    ButtonElement: {
      button_sm: ['form-radius-btn-sm'],
      button_md: ['form-radius-btn'],
      button_lg: ['form-radius-btn-lg'],
      button_enabled: ['hover:scale-105']
    },
    FileElement: remove.files,
    MultifileElement: _objectSpread2(_objectSpread2({}, remove.files), {}, {
      list_md: ['form-mt-gutter']
    }),
    CheckboxgroupElement: remove.groups,
    RadiogroupElement: remove.groups,
    CheckboxgroupCheckbox: remove.groupItems,
    RadiogroupRadio: remove.groupItems,
    SignatureElement: {
      wrapper: ['form-border-width-input'],
      wrapper_sm: ['form-radius-large-sm'],
      wrapper_md: ['form-radius-large'],
      wrapper_lg: ['form-radius-large-lg']
    }
  }
};
var presets = {
  'matrix-table': {
    addClasses: _objectSpread2({
      MatrixElement: {
        container: '[&>div>div>.form-inner-wrapper-after]:!block [&>div>div>.form-inner-wrapper-before]:!block',
        grid: 'form-border-width-table !border-l-0 !border-t-0 form-border-color-table !gap-0',
        headerFirst: 'form-border-width-table !border-r-0 !border-b-0 form-border-color-table form-bg-table-header',
        header: 'form-border-width-table !border-r-0 form-border-color-table form-bg-table-header form-color-table-header',
        header_sticky: '-form-mb-border-width-table',
        header_not_sticky: '!border-b-0',
        headerRemove: 'form-border-width-table !border-r-0 !border-b-0 form-border-color-table form-bg-table-header',
        rowLabel: 'form-border-width-table !border-b-0 form-border-color-table px-2 text-center form-bg-table-header form-color-table-header',
        rowLabel_sticky: '-form-mr-border-width-table',
        rowLabel_not_sticky: '!border-r-0',
        cell: 'form-border-width-table !border-r-0 !border-b-0 form-border-color-table form-bg-input',
        cellWrapper_stretch: '!items-stretch',
        cellWrapper_error: 'relative after:content-[""] after:absolute after:inset-0 after:shadow-[inset_0_0_0_1px_var(--vf-danger)] after:pointer-events-none',
        rowRemove: 'form-border-width-table !border-r-0 !border-b-0 form-border-color-table bg-gray-100 form-bg-table-header',
        removeIcon: 'dark:!bg-dark-100'
      }
    }, tableInputs.add),
    replaceClasses: _objectSpread2({}, tableInputs.replace),
    removeClasses: _objectSpread2({
      MatrixElement: {
        cellWrapper_padding: 'px-2'
      }
    }, tableInputs.remove),
    overrideClasses: {
      MatrixElement: {
        $cellWrapper: (classes, _ref) => {
          var {
            padding,
            centered,
            cells$
          } = _ref;
          return (type, name) => {
            var _cells$$name, _cells$$name2;
            var isStandalone = ['radio', 'checkbox', 'toggle'].includes(type);
            return [classes.cellWrapper, padding ? classes.cellWrapper_padding : null, isStandalone ? classes.cellWrapper_centered : null, !isStandalone ? classes.cellWrapper_stretch : null, (_cells$$name = cells$[name]) !== null && _cells$$name !== void 0 && _cells$$name.error ? classes.cellWrapper_error : null, (_cells$$name2 = cells$[name]) !== null && _cells$$name2 !== void 0 && _cells$$name2.isSuccess ? classes.cellWrapper_success : null];
          };
        }
      }
    }
  },
  'grid-table': {
    addClasses: _objectSpread2(_objectSpread2({
      GridElement: {
        container: '[&>div>div>.form-inner-wrapper-after]:!block [&>div>div>.form-inner-wrapper-before]:!block [&>div>label.form-element-label]:!flex',
        grid: 'form-border-width-table !border-l-0 !border-t-0 form-border-color-table',
        cell: 'form-border-width-table !border-r-0 !border-b-0 form-border-color-table p-0 form-bg-input'
      }
    }, tableInputs.add), {}, {
      StaticElement: _objectSpread2(_objectSpread2({}, tableInputs.add.StaticElement), {}, {
        content_sm: 'form-p-input-sm',
        content_md: 'form-p-input',
        content_lg: 'form-p-input-lg',
        tag_sm: 'form-p-input-sm',
        tag_md: 'form-p-input',
        tag_lg: 'form-p-input-lg'
      }),
      ElementLabel: {
        container: 'hidden form-element-label'
      },
      CheckboxElement: {
        wrapper_sm: 'form-p-input-sm',
        wrapper_md: 'form-p-input',
        wrapper_lg: 'form-p-input-lg'
      },
      RadioElement: {
        wrapper_sm: 'form-p-input-sm',
        wrapper_md: 'form-p-input',
        wrapper_lg: 'form-p-input-lg'
      },
      ToggleElement: {
        wrapper_sm: 'form-p-input-sm',
        wrapper_md: 'form-p-input',
        wrapper_lg: 'form-p-input-lg'
      }
    }),
    replaceClasses: _objectSpread2({}, tableInputs.replace),
    removeClasses: _objectSpread2({
      GridElement: {
        grid_sm: ['form-gap-gutter-sm'],
        grid_md: ['form-gap-gutter'],
        grid_lg: ['form-gap-gutter-lg']
      }
    }, tableInputs.remove),
    overrideClasses: {
      GridElement: {
        $cell: (classes, _ref2) => {
          var {
            colHeader,
            rowHeader
          } = _ref2;
          return _ref3 => {
            var {
              colStart,
              rowStart
            } = _ref3;
            return [classes.cell, rowHeader && colStart === 0 || colHeader && rowStart === 0 ? 'form-bg-table-header form-color-table-header' : null];
          };
        }
      },
      ToggleElement: {
        $wrapper: (classes, _ref4) => {
          var {
            align,
            Size
          } = _ref4;
          return [classes.wrapper, classes["wrapper_".concat(Size)], align === 'left' ? classes.wrapper_left : null, align === 'right' ? classes.wrapper_right : null];
        }
      }
    }
  }
};

var theme = {
  templates: {
    Vueform,
    FormErrors,
    FormMessages,
    FormLanguages,
    FormLanguage,
    FormTabs,
    FormTab,
    FormSteps,
    FormStepsControls,
    FormStepsControl,
    FormStep,
    FormElements,
    ElementLayout,
    ElementLayoutInline,
    ElementLoader,
    ElementLabelFloating,
    ElementLabel,
    ElementInfo,
    ElementDescription,
    ElementError,
    ElementMessage,
    ElementRequired,
    ElementText,
    ElementAddon,
    ElementAddonOptions,
    ButtonElement,
    CaptchaElement,
    CheckboxElement,
    CheckboxgroupElement: CheckboxgroupElement_blocks,
    CheckboxgroupElement_tabs: CheckboxgroupElement_blocks,
    CheckboxgroupElement_blocks,
    DateElement,
    DatesElement,
    FileElement,
    GridElement,
    GroupElement,
    HiddenElement,
    ListElement,
    LocationElement,
    MatrixElement,
    MultifileElement,
    MultiselectElement,
    ObjectElement,
    PhoneElement,
    RadioElement,
    RadiogroupElement: RadiogroupElement_blocks,
    RadiogroupElement_tabs: RadiogroupElement_blocks,
    RadiogroupElement_blocks,
    SelectElement,
    SignatureElement,
    SliderElement,
    StaticElement,
    TagsElement,
    TextareaElement,
    TextElement,
    ToggleElement,
    EditorElement,
    TTextareaElement,
    TTextElement,
    TEditorElement,
    CheckboxgroupCheckbox,
    CheckboxgroupCheckbox_tabs,
    CheckboxgroupCheckbox_blocks,
    DragAndDrop,
    FilePreview,
    FilePreview_image,
    FilePreview_gallery,
    RadiogroupRadio,
    RadiogroupRadio_tabs,
    RadiogroupRadio_blocks,
    DatepickerWrapper,
    EditorWrapper
  },
  classes,
  columns: columns,
  presets
};
var index = theme;
var prefixer = function prefixer(classes, presets, prefix) {
  var prefixedClasses = {};
  var prefixedPresets = {};
  var prefixClass = class_ => {
    var res;
    try {
      res = class_.split(' ').map(str => {
        if (!str) {
          return '';
        }

        // Case 1: If the string starts with "!", add "tw-" after "!"
        if (str.startsWith('!')) {
          return str.replace(/^!(.*)$/, '!tw-$1');
        }

        // Case 2: If the string starts with a modifier (e.g., md:block), only prefix the classname
        if (/^[a-z]+:/.test(str)) {
          return str.replace(/([a-z]+:)(!?)([a-zA-Z.-]+)(?:-(\[[^\]]+\]))?/g, (match, modifier, important, className, optionalSize) => {
            var prefixedClass = important ? "!tw-".concat(className) : "tw-".concat(className);
            return "".concat(modifier).concat(prefixedClass).concat(optionalSize || '');
          });
        }

        // Case 3: If the string starts with "[", apply prefixing rules inside and after the brackets
        if (str.startsWith('[')) {
          return str.replace(/\[(.*?)\]:(!?)([a-zA-Z.-]+)(?:-(\[[^\]]+\]))?/g, (match, inner, important, className, optionalSize) => {
            inner = inner.replace(/\.([a-zA-Z0-9_-]+)/g, '.tw-$1');
            var prefixedClass = important ? "!tw-".concat(className) : "tw-".concat(className);
            return "[".concat(inner, "]:").concat(important).concat(prefixedClass).concat(optionalSize || '');
          });
        }

        // Case 4: If none of the above, simply prefix the entire string
        return "tw-".concat(str);
      }).join(' ');
    } catch (e) {
      console.error('Couldn\'t prefix class: ', class_, e);
    }
    return res;
  };
  var _prefixPresets = function prefixPresets(obj) {
    var prefixKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (typeof obj === 'string') {
      return prefixClass(obj);
    }
    if (Array.isArray(obj)) {
      return obj.map(item => _prefixPresets(item, prefixKey));
    }
    if (typeof obj === 'object' && obj !== null) {
      var newObj = {};
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          newObj[typeof obj[key] === 'string' && prefixKey ? prefixClass(key) : key] = _prefixPresets(obj[key], prefixKey);
        }
      }
      return newObj;
    }
    return obj;
  };
  for (var componentName in classes) {
    if (classes.hasOwnProperty(componentName)) {
      prefixedClasses[componentName] = {};
      for (var className in classes[componentName]) {
        if (classes[componentName].hasOwnProperty(className)) {
          var class_ = classes[componentName][className];
          if (typeof class_ === 'object' && !Array.isArray(class_)) {
            prefixedClasses[componentName][className] = {};
            for (var subclassName in class_) {
              if (class_.hasOwnProperty(subclassName)) {
                var subclass = class_[subclassName];
                if (typeof subclass !== 'function') {
                  prefixedClasses[componentName][className][subclassName] = prefixClass(subclass);
                } else {
                  prefixedClasses[componentName][className][subclassName] = subclass;
                }
              }
            }
          } else if (typeof class_ !== 'function') {
            prefixedClasses[componentName][className] = prefixClass(class_);
          } else {
            prefixedClasses[componentName][className] = class_;
          }
        }
      }
    }
  }
  Object.keys(presets).forEach(preset => {
    prefixedPresets[preset] = {
      addClasses: _prefixPresets(presets[preset].addClasses),
      removeClasses: _prefixPresets(presets[preset].removeClasses),
      replaceClasses: _prefixPresets(presets[preset].replaceClasses, true),
      overrideClasses: _prefixPresets(presets[preset].overrideClasses)
    };
  });
  return {
    classes: prefixedClasses,
    presets: prefixedPresets
  };
};
var prefix = function prefix(_prefix) {
  return Object.assign({}, theme, _objectSpread2(_objectSpread2({}, prefixer(classes, presets)), {}, {
    columns: (breakpoint, size) => {
      return columns(breakpoint, size, _prefix);
    }
  }));
};

export { ButtonElement, CaptchaElement, CheckboxElement, CheckboxgroupCheckbox, CheckboxgroupCheckbox_blocks, CheckboxgroupCheckbox_tabs, CheckboxgroupElement_blocks as CheckboxgroupElement, CheckboxgroupElement_blocks, CheckboxgroupElement_blocks as CheckboxgroupElement_tabs, DateElement, DatepickerWrapper, DatesElement, DragAndDrop, EditorElement, EditorWrapper, ElementAddon, ElementAddonOptions, ElementDescription, ElementError, ElementInfo, ElementLabel, ElementLabelFloating, ElementLayout, ElementLayoutInline, ElementLoader, ElementMessage, ElementRequired, ElementText, FileElement, FilePreview, FilePreview_gallery, FilePreview_image, FormElements, FormErrors, FormLanguage, FormLanguages, FormMessages, FormStep, FormSteps, FormStepsControl, FormStepsControls, FormTab, FormTabs, GridElement, GroupElement, HiddenElement, ListElement, LocationElement, MatrixElement, MultifileElement, MultiselectElement, ObjectElement, PhoneElement, RadioElement, RadiogroupElement_blocks as RadiogroupElement, RadiogroupElement_blocks, RadiogroupElement_blocks as RadiogroupElement_tabs, RadiogroupRadio, RadiogroupRadio_blocks, RadiogroupRadio_tabs, SelectElement, SignatureElement, SliderElement, StaticElement, TEditorElement, TTextElement, TTextareaElement, TagsElement, TextElement, TextareaElement, ToggleElement, Vueform, classes, columns, index as default, prefix, prefixer, presets };
