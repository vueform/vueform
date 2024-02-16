/*!
 * Vueform v1.7.3 (https://github.com/vueform/vueform)
 * Copyright (c) 2024 Adam Berecz <adam@vueform.com>
 * Licensed under the MIT License
 */

import { toRefs, getCurrentInstance, ref, computed, watch, nextTick, onMounted, onBeforeUnmount, onUnmounted } from 'vue';

//
//
//
//
//
//
//
//
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

var css_248z$$ = "";
styleInject(css_248z$$);

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
const __vue_script__$12 = script$12;
/* template */
var __vue_render__$X = function () {
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
      _vm._t("empty", function () {
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
      }),
    ],
    2
  )
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

  var Vueform = __vue_component__$12;

//
//
//
//
//
//
//
//
//
//
//
//


  var script$11 = {
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

  var FormErrors = __vue_component__$11;

//
//
//
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

var css_248z$Z = "";
styleInject(css_248z$Z);

/* script */
const __vue_script__$10 = script$10;
/* template */
var __vue_render__$V = function () {
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

  var FormMessages = __vue_component__$10;

//
//
//
//
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

var css_248z$Y = "";
styleInject(css_248z$Y);

/* script */
const __vue_script__$$ = script$$;
/* template */
var __vue_render__$U = function () {
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

  var FormLanguages = __vue_component__$$;

//
//
//
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

var css_248z$X = "";
styleInject(css_248z$X);

/* script */
const __vue_script__$_ = script$_;
/* template */
var __vue_render__$T = function () {
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

  var FormLanguage = __vue_component__$_;

//
//
//
//
//
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

  var FormTabs = __vue_component__$Z;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

  var FormTab = __vue_component__$Y;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$X = {
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

var css_248z$U = "";
styleInject(css_248z$U);

/* script */
const __vue_script__$X = script$X;
/* template */
var __vue_render__$Q = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: _vm.classes.container, attrs: { role: "tablist" } },
    [
      _c(
        "ul",
        { class: _vm.classes.wrapper },
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
    ]
  )
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

  var FormSteps = __vue_component__$X;

//
//
//
//
//
//
//
//

  var script$W = {
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

var css_248z$T = "";
styleInject(css_248z$T);

/* script */
const __vue_script__$W = script$W;
/* template */
var __vue_render__$P = function () {
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

  var FormStepsControls = __vue_component__$W;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var css_248z$S = "";
styleInject(css_248z$S);

/* script */
const __vue_script__$V = script$V;
/* template */
var __vue_render__$O = function () {
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

  var FormStepsControl = __vue_component__$V;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var css_248z$R = "";
styleInject(css_248z$R);

/* script */
const __vue_script__$U = script$U;
/* template */
var __vue_render__$N = function () {
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

  var FormStep = __vue_component__$U;

//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$T = {
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

var css_248z$Q = "";
styleInject(css_248z$Q);

/* script */
const __vue_script__$T = script$T;
/* template */
var __vue_render__$M = function () {
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

  var FormElements = __vue_component__$T;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var css_248z$P = "";
styleInject(css_248z$P);

/* script */
const __vue_script__$S = script$S;
/* template */
var __vue_render__$L = function () {
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

  var ElementLayout = __vue_component__$S;

//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$R = {
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

var css_248z$O = "";
styleInject(css_248z$O);

/* script */
const __vue_script__$R = script$R;
/* template */
var __vue_render__$K = function () {
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

  var ElementLayoutInline = __vue_component__$R;

//
//
//
//
//
//

  var script$Q = {
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

var css_248z$N = "";
styleInject(css_248z$N);

/* script */
const __vue_script__$Q = script$Q;
/* template */
var __vue_render__$J = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.classes.container }, [
    _c("span", { class: _vm.classes.loader }),
  ])
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

  var ElementLoader = __vue_component__$Q;

//
//
//
//
//
//
//
//
//

  var script$P = {
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

var css_248z$M = "";
styleInject(css_248z$M);

/* script */
const __vue_script__$P = script$P;
/* template */
var __vue_render__$I = function () {
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

  var ElementLabelFloating = __vue_component__$P;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var css_248z$L = "";
styleInject(css_248z$L);

/* script */
const __vue_script__$O = script$O;
/* template */
var __vue_render__$H = function () {
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

  var ElementLabel = __vue_component__$O;

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

var css_248z$K = "";
styleInject(css_248z$K);

/* script */
const __vue_script__$N = script$N;
/* template */
var __vue_render__$G = function () {
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

  var ElementInfo = __vue_component__$N;

//
//
//
//
//
//
//
//

  var script$M = {
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

var css_248z$J = "";
styleInject(css_248z$J);

/* script */
const __vue_script__$M = script$M;
/* template */
var __vue_render__$F = function () {
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

  var ElementDescription = __vue_component__$M;

//
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

var css_248z$I = "";
styleInject(css_248z$I);

/* script */
const __vue_script__$L = script$L;
/* template */
var __vue_render__$E = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.error
    ? _c("div", {
        class: _vm.classes.container,
        attrs: { id: _vm.id, "aria-live": "assertive" },
        domProps: { innerHTML: _vm._s(_vm.error) },
      })
    : _vm._e()
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

  var ElementError = __vue_component__$L;

//
//
//
//

  var script$K = {
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

var css_248z$H = "";
styleInject(css_248z$H);

/* script */
const __vue_script__$K = script$K;
/* template */
var __vue_render__$D = function () {
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

  var ElementMessage = __vue_component__$K;

//
//
//
//
//
//
//
//

  var script$J = {
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

var css_248z$G = "";
styleInject(css_248z$G);

/* script */
const __vue_script__$J = script$J;
/* template */
var __vue_render__$C = function () {
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

  var ElementText = __vue_component__$J;

//
//
//
//
//
//
//
//
//
//
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

var css_248z$F = "";
styleInject(css_248z$F);

/* script */
const __vue_script__$I = script$I;
/* template */
var __vue_render__$B = function () {
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

  var ElementAddon = __vue_component__$I;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$H = {
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

var css_248z$E = "";
styleInject(css_248z$E);

/* script */
const __vue_script__$H = script$H;
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
                              domProps: { innerHTML: _vm._s(_vm.buttonLabel) },
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
                              domProps: { innerHTML: _vm._s(_vm.buttonLabel) },
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
var __vue_staticRenderFns__$A = [];
__vue_render__$A._withStripped = true;

  /* style */
  const __vue_inject_styles__$H = undefined;
  /* scoped */
  const __vue_scope_id__$H = undefined;
  /* module identifier */
  const __vue_module_identifier__$H = undefined;
  /* functional template */
  const __vue_is_functional_template__$H = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$H = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$A, staticRenderFns: __vue_staticRenderFns__$A },
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

  var ButtonElement = __vue_component__$H;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var css_248z$D = "";
styleInject(css_248z$D);

/* script */
const __vue_script__$G = script$G;
/* template */
var __vue_render__$z = function () {
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
var __vue_staticRenderFns__$z = [];
__vue_render__$z._withStripped = true;

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
    { render: __vue_render__$z, staticRenderFns: __vue_staticRenderFns__$z },
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

  var CheckboxElement = __vue_component__$G;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var css_248z$C = "";
styleInject(css_248z$C);

/* script */
const __vue_script__$F = script$F;
/* template */
var __vue_render__$y = function () {
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
var __vue_staticRenderFns__$y = [];
__vue_render__$y._withStripped = true;

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
    { render: __vue_render__$y, staticRenderFns: __vue_staticRenderFns__$y },
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

  var CheckboxgroupElement_blocks = __vue_component__$F;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var css_248z$B = "";
styleInject(css_248z$B);

/* script */
const __vue_script__$E = script$E;
/* template */
var __vue_render__$x = function () {
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
                          readonly: _vm.readonly,
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
var __vue_staticRenderFns__$x = [];
__vue_render__$x._withStripped = true;

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
    { render: __vue_render__$x, staticRenderFns: __vue_staticRenderFns__$x },
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

  var DateElement = __vue_component__$E;

var script$D = {
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

var css_248z$A = "";
styleInject(css_248z$A);

/* script */
const __vue_script__$D = script$D;
/* template */

  /* style */
  const __vue_inject_styles__$D = undefined;
  /* scoped */
  const __vue_scope_id__$D = undefined;
  /* module identifier */
  const __vue_module_identifier__$D = undefined;
  /* functional template */
  const __vue_is_functional_template__$D = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$D = /*#__PURE__*/normalizeComponent(
    {},
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

  var DatesElement = __vue_component__$D;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

  var FileElement = __vue_component__$C;

//
//
//
//
//
//
//
//
//
//
//
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

  var GroupElement = __vue_component__$B;

//
//
//
//
//
//
//
//
//
//
//
//

  var script$A = {
    name: 'HiddenElement',
    data() {
      return {
        merge: true,
        defaultClasses: {}
      }
    },
  };

var css_248z$x = "";
styleInject(css_248z$x);

/* script */
const __vue_script__$A = script$A;
/* template */
var __vue_render__$u = function () {
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
var __vue_staticRenderFns__$u = [];
__vue_render__$u._withStripped = true;

  /* style */
  const __vue_inject_styles__$A = undefined;
  /* scoped */
  const __vue_scope_id__$A = undefined;
  /* module identifier */
  const __vue_module_identifier__$A = undefined;
  /* functional template */
  const __vue_is_functional_template__$A = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$A = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$u, staticRenderFns: __vue_staticRenderFns__$u },
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

  var HiddenElement = __vue_component__$A;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var css_248z$w = "";
styleInject(css_248z$w);

/* script */
const __vue_script__$z = script$z;
/* template */
var __vue_render__$t = function () {
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
var __vue_staticRenderFns__$t = [];
__vue_render__$t._withStripped = true;

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
    { render: __vue_render__$t, staticRenderFns: __vue_staticRenderFns__$t },
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

  var ListElement = __vue_component__$z;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

var css_248z$v = "";
styleInject(css_248z$v);

/* script */
const __vue_script__$y = script$y;
/* template */
var __vue_render__$s = function () {
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
                          readonly: _vm.readonly,
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
var __vue_staticRenderFns__$s = [];
__vue_render__$s._withStripped = true;

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
    { render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s },
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

  var LocationElement = __vue_component__$y;

var script$x = {
    name: 'LocationElement',
    render: LocationElement.render,
    data: LocationElement.data,
  };

var css_248z$u = "/* Google */\n\n.pac-container {\n  border-color: var(--vf-border-color-input);\n  background: var(--vf-bg-input);\n}\n\n.pac-item {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  border-color: var(--vf-border-color-input);\n  background: var(--vf-bg-input);\n  color: var(--vf-color-input);\n  cursor: pointer;\n}\n\n.pac-item > span:last-of-type {\n  font-size: 0.75rem;\n  color: var(--vf-color-muted);\n}\n\n.pac-item:hover, .pac-item.pac-item-selected {\n  background: var(--vf-bg-selected);\n}\n\n.pac-item-query {\n  font-size: 0.875rem;\n  line-height: 1;\n  margin-right: 0.25rem;\n  padding-right: 0.25rem;\n  color: var(--vf-color-input);\n}\n\n.pac-icon-marker {\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-position: center center;\n  -webkit-mask-position: center center;\n  mask-size: contain;\n  -webkit-mask-size: contain;\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'%3e%3c/path%3e%3c/svg%3e\");\n  background: var(--vf-bg-icon);\n  width: 0.875rem;\n  width: 0.875rem;\n  margin-right: 0.75rem;\n  margin-top: 0;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  box-sizing: content-box;\n  flex-shrink: 0;\n}\n\n.pac-logo:after {\n  margin-left: 0.625rem;\n  margin-right: 0.625rem;\n  margin-bottom: 0.625rem;\n}\n\n.pac-icon, .hdpi .pac-icon {\n  background-image: none;\n}";
styleInject(css_248z$u);

/* script */
const __vue_script__$x = script$x;
/* template */

  /* style */
  const __vue_inject_styles__$x = undefined;
  /* scoped */
  const __vue_scope_id__$x = undefined;
  /* module identifier */
  const __vue_module_identifier__$x = undefined;
  /* functional template */
  const __vue_is_functional_template__$x = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$x = /*#__PURE__*/normalizeComponent(
    {},
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$w = {
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

var css_248z$t = "";
styleInject(css_248z$t);

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

  var MultifileElement = __vue_component__$w;

function isNullish$1 (val) {
  return [null, undefined].indexOf(val) !== -1
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

function useValue$3 (props, context)
{
  const { value, modelValue, mode, valueProp } = toRefs(props);

  // ================ DATA ================

  // internalValue
  const iv = ref(mode.value !== 'single' ? [] : {});

  // ============== COMPUTED ==============

  /* istanbul ignore next */
  // externalValue
  const ev = computed(() => {
    return modelValue && modelValue.value !== undefined ? modelValue.value : value.value
  });

  const plainValue = computed(() => {
    return mode.value === 'single' ? iv.value[valueProp.value] : iv.value.map(v=>v[valueProp.value])
  });

  const textValue = computed(() => {
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
    if (regex && regex.value) {
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
    if (regex && regex.value) {
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
                 .replace(new RegExp(/æ/g), 'ae')
                 .replace(new RegExp(/œ/g), 'oe')
                 .replace(new RegExp(/ø/g), 'o')
                 .replace(/\p{Diacritic}/gu, '')
}

function isObject (variable) {
  return Object.prototype.toString.call(variable) === '[object Object]'
}

function arraysEqual$1 (array1, array2) {
  const array2Sorted = array2.slice().sort();

  return array1.length === array2.length && array1.slice().sort().every(function(value, index) {
      return value === array2Sorted[index];
  })
}

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

  // no export
  const createOption = computed(() => {
    return createTag.value || createOption_.value || false
  });

  // no export
  const appendNewOption = computed(() => {
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
    return multipleLabel !== undefined && multipleLabel.value !== undefined
      ? multipleLabel.value(iv.value, $this)
      : (iv.value && iv.value.length > 1 ? `${iv.value.length} options selected` : `1 option selected`)
  });

  const noOptions = computed(() => {
    return !eo.value.length && !resolving.value && !createdOption.value.length
  });


  const noResults = computed(() => {
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
  const nullValue = computed(() => {
    switch (mode.value) {
      case 'single':
        return null

      case 'multiple':
      case 'tags':
        return []
    }
  });

  const busy = computed(() => {
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
        return !isNullish$1(iv.value) && iv.value[valueProp.value] == option[valueProp.value]

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

    if (onCreate && onCreate.value && !isSelected(option) && option.__CREATE__) {
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
    uo = uo.map((val) => {
      return typeof val === 'object' ? val : { [valueProp.value]: val, [trackBy.value[0]]: val, [label.value]: val}
    });

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

  const canPointGroups = computed(() => {
    return mode.value !== 'single' && groupSelect.value
  });

  const isPointerGroup = computed(() => {
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
    if (val) {
      let firstSelected = multiselect.value.querySelectorAll(`[data-selected]`)[0];

      if (!firstSelected) {
        return
      }

      let wrapper = firstSelected.parentElement.parentElement;
      
      nextTick(() => {
        /* istanbul ignore next */
        if (wrapper.scrollTop > 0) {
          return
        }

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

  const appended = computed(() => {
    return appendTo.value || appendToBody.value
  });

  const placement = computed(() => {
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

  const tabindex = computed(() => {
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
  const createOption = computed(() => {
    return createTag.value || createOption_.value || false
  });

  // no export
  const addOptionOn = computed(() => {
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

  const classes = computed(() => ({
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

  const showDropdown = computed(() => {
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

  const infiniteLoader = ref(null);

  // ============== COMPUTED ==============

  const hasMore = computed(() => {
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

  const ariaAssist = computed(() => {
    let texts = [];

    if (id && id.value) {
      texts.push(id.value);
    }

    texts.push('assist');

    return texts.join('-')
  });

  const ariaControls = computed(() => {
    let texts = [];

    if (id && id.value) {
      texts.push(id.value);
    }

    texts.push('multiselect-options');

    return texts.join('-')
  });

  const ariaActiveDescendant = computed(() => {
    let texts = [];

    if (id && id.value) {
      texts.push(id.value);
    }

    if (pointer.value) {
      texts.push(pointer.value.group ? 'multiselect-group' : 'multiselect-option');

      texts.push(pointer.value.group ? pointer.value.index : pointer.value[valueProp.value]);

      return texts.join('-')
    }
  });



  const ariaPlaceholder = computed(() => {
    return placeholder.value
  });

  const ariaMultiselectable = computed(() => {
    return mode.value !== 'single'
  });

  const ariaLabel = computed(() => {
    let ariaLabel = '';

    if (mode.value === 'single' && hasSelected.value) {
      ariaLabel += iv.value[labelProp.value];
    }

    if (mode.value === 'multiple' && hasSelected.value) {
      ariaLabel += multipleLabelText.value;
    }

    if (mode.value === 'tags' && hasSelected.value) {
      ariaLabel += iv.value.map(v => v[labelProp.value]).join(', ');
    }

    return ariaLabel
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

  const ariaOptionId = (option) => {
    let texts = [];

    if (id && id.value) {
      texts.push(id.value);
    }

    texts.push('multiselect-option');

    texts.push(option[valueProp.value]);

    return texts.join('-')
  };

  const ariaGroupId = (option) => {
    let texts = [];

    if (id && id.value) {
      texts.push(id.value);
    }

    texts.push('multiselect-group');

    texts.push(option.index);

    return texts.join('-')
  };

  const ariaOptionLabel = (label) => {
    let texts = [];

    texts.push(label);

    return texts.join(' ')
  };

  const ariaGroupLabel = (label) => {
    let texts = [];

    texts.push(label);

    return texts.join(' ')
  };

  const ariaTagLabel = (label) => {
    return `${label} ❎`
  };

  // =============== HOOKS ================

  onMounted(() => {
    /* istanbul ignore next */
    if (id && id.value && document && document.querySelector) {
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

  const multiselect = ref(null);
  
  const wrapper = ref(null);

  const tags = ref(null);

  const input = ref(null);

  const dropdown = ref(null);

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
    /* istanbul ignore else */
    if (composable) {
      deps = {
        ...deps,
        ...composable(props, context, deps)
      };
    }

  });
  
  return deps
}

//

  var script$v = {
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
      if (this.$root.constructor?.version?.match(/^2\./) || this.vueVersionMs === 2) {
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
const __vue_script__$v = script$v;

/* template */
var __vue_render__$q = function () {
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
              attrs: { id: _vm.id + "-dropdown", tabindex: "-1" },
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
                                      mousedown: function ($event) {
                                        $event.preventDefault();
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
                                        mousedown: function ($event) {
                                          $event.preventDefault();
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
                              mousedown: function ($event) {
                                $event.preventDefault();
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

//

  var script$u = {
    name: 'MultiselectElement',
    components: {
      Multiselect: __vue_component__$v,
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
                          _vm._v(_vm._s(_vm.placeholder)),
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

  var MultiselectElement = __vue_component__$u;

//
//
//
//
//
//
//
//
//
//
//
//
//
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

  var ObjectElement = __vue_component__$t;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

  var RadioElement = __vue_component__$s;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

  var script$r = {
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

  var RadiogroupElement_blocks = __vue_component__$r;

//

  var script$q = {
    name: 'SelectElement',
    components: {
      Multiselect: __vue_component__$v,
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
                          _vm._v(_vm._s(_vm.placeholder)),
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

  var SelectElement = __vue_component__$q;

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

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

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
    var dragAll = entry.indexOf("drag-all") >= 0;
    var smoothSteps = entry.indexOf("smooth-steps") >= 0;
    if (fixed) {
        if (parsed.handles !== 2) {
            throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
        }
        // Use margin to enforce fixed state
        testMargin(parsed, parsed.start[1] - parsed.start[0]);
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
        var connectBase = addNodeTo(base, options.cssClasses.connects);
        scope_Handles = [];
        scope_Connects = [];
        scope_Connects.push(addConnect(connectBase, connectOptions[0]));
        // [::::O====O====O====]
        // connectOptions = [0, 1, 1, 1]
        for (var i = 0; i < options.handles; i++) {
            // Keep a list of all added handles.
            scope_Handles.push(addOrigin(base, i));
            scope_HandleNumbers[i] = i;
            scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
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
        updateConnect(handleNumber);
        updateConnect(handleNumber + 1);
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
        var l = 0;
        var h = 100;
        if (index !== 0) {
            l = scope_Locations[index - 1];
        }
        if (index !== scope_Connects.length - 1) {
            h = scope_Locations[index];
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                  (_vm.content || ["img", "hr"].indexOf(_vm.tag) !== -1)
                    ? [
                        !_vm.tag && _vm.allowHtml
                          ? _c(
                              "div",
                              _vm._b(
                                {
                                  class: _vm.classes.content,
                                  domProps: { innerHTML: _vm._s(_vm.content) },
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
                        _vm.tag === "p"
                          ? _c("div", { class: _vm.classes.tag }, [
                              _vm.allowHtml
                                ? _c(
                                    "p",
                                    _vm._b(
                                      {
                                        domProps: {
                                          innerHTML: _vm._s(_vm.content),
                                        },
                                      },
                                      "p",
                                      _vm.attrs,
                                      false
                                    )
                                  )
                                : _c("p", _vm._b({}, "p", _vm.attrs, false), [
                                    _vm._v(_vm._s(_vm.content)),
                                  ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.tag === "h1"
                          ? _c("div", { class: _vm.classes.tag }, [
                              _vm.allowHtml
                                ? _c(
                                    "h1",
                                    _vm._b(
                                      {
                                        domProps: {
                                          innerHTML: _vm._s(_vm.content),
                                        },
                                      },
                                      "h1",
                                      _vm.attrs,
                                      false
                                    )
                                  )
                                : _c("h1", _vm._b({}, "h1", _vm.attrs, false), [
                                    _vm._v(_vm._s(_vm.content)),
                                  ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.tag === "h2"
                          ? _c("div", { class: _vm.classes.tag }, [
                              _vm.allowHtml
                                ? _c(
                                    "h2",
                                    _vm._b(
                                      {
                                        domProps: {
                                          innerHTML: _vm._s(_vm.content),
                                        },
                                      },
                                      "h2",
                                      _vm.attrs,
                                      false
                                    )
                                  )
                                : _c("h2", _vm._b({}, "h2", _vm.attrs, false), [
                                    _vm._v(_vm._s(_vm.content)),
                                  ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.tag === "h3"
                          ? _c("div", { class: _vm.classes.tag }, [
                              _vm.allowHtml
                                ? _c(
                                    "h3",
                                    _vm._b(
                                      {
                                        domProps: {
                                          innerHTML: _vm._s(_vm.content),
                                        },
                                      },
                                      "h3",
                                      _vm.attrs,
                                      false
                                    )
                                  )
                                : _c("h3", _vm._b({}, "h3", _vm.attrs, false), [
                                    _vm._v(_vm._s(_vm.content)),
                                  ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.tag === "h4"
                          ? _c("div", { class: _vm.classes.tag }, [
                              _vm.allowHtml
                                ? _c(
                                    "h4",
                                    _vm._b(
                                      {
                                        domProps: {
                                          innerHTML: _vm._s(_vm.content),
                                        },
                                      },
                                      "h4",
                                      _vm.attrs,
                                      false
                                    )
                                  )
                                : _c("h4", _vm._b({}, "h4", _vm.attrs, false), [
                                    _vm._v(_vm._s(_vm.content)),
                                  ]),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.tag === "blockquote"
                          ? _c("div", { class: _vm.classes.tag }, [
                              _vm.allowHtml
                                ? _c(
                                    "blockquote",
                                    _vm._b(
                                      {
                                        domProps: {
                                          innerHTML: _vm._s(_vm.content),
                                        },
                                      },
                                      "blockquote",
                                      _vm.attrs,
                                      false
                                    )
                                  )
                                : _c(
                                    "blockquote",
                                    _vm._b({}, "blockquote", _vm.attrs, false),
                                    [_vm._v(_vm._s(_vm.content))]
                                  ),
                            ])
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
                                          innerHTML: _vm._s(_vm.content),
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
                                    [_vm._v(_vm._s(_vm.content))]
                                  ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.tag === "hr"
                          ? _c("div", { class: _vm.classes.tag }, [
                              _c("hr", _vm._b({}, "hr", _vm.attrs, false)),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.tag === "img"
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
                          : _vm._e(),
                      ]
                    : _vm.content
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
        domProps: { innerHTML: _vm._s(_vm.content) },
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
      Multiselect: __vue_component__$v,
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
                          readonly: _vm.readonly,
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
                          readonly: _vm.readonly,
                        },
                        domProps: { value: _vm.model },
                        on: {
                          keydown: _vm.handleKeydown,
                          keyup: _vm.handleKeyup,
                          keypress: _vm.handleKeypress,
                          input: _vm.handleInput,
                          select: _vm.handleInput,
                          blur: _vm.handleBlur,
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
            _c("div", { class: _vm.classes.wrapper }, [
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
                        $$i < 0 && _vm.$set(_vm.el$, "model", $$a.concat([$$v]));
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
            _c("div", { class: _vm.classes.wrapper }, [
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

  var DatepickerWrapper = __vue_component__$3;

var script$2 = {
    name: 'DatepickerWrapper',
    render: DatepickerWrapper.render,
    data: DatepickerWrapper.data,
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

var trix = {exports: {}};

/*
Trix 1.3.1
Copyright © 2020 Basecamp, LLC
http://trix-editor.org/
 */

(function (module) {
	((function(){})).call(commonjsGlobal),function(){null==window.Set&&(window.Set=function(){function t(){this.clear();}return t.prototype.clear=function(){return this.values=[]},t.prototype.has=function(t){return -1!==this.values.indexOf(t)},t.prototype.add=function(t){return this.has(t)||this.values.push(t),this},t.prototype["delete"]=function(t){var e;return -1===(e=this.values.indexOf(t))?!1:(this.values.splice(e,1),!0)},t.prototype.forEach=function(){var t;return (t=this.values).forEach.apply(t,arguments)},t}());}.call(commonjsGlobal),function(t){function e(){}function n(t,e){return function(){t.apply(e,arguments);}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],c(t,this);}function o(t,e){for(;3===t._state;)t=t._value;return 0===t._state?void t._deferreds.push(e):(t._handled=!0,void h(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?r:s)(e.promise,t._value);var i;try{i=n(t._value);}catch(o){return void s(e.promise,o)}r(e.promise,i);}))}function r(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var o=e.then;if(e instanceof i)return t._state=3,t._value=e,void a(t);if("function"==typeof o)return void c(n(o,e),t)}t._state=1,t._value=e,a(t);}catch(r){s(t,r);}}function s(t,e){t._state=2,t._value=e,a(t);}function a(t){2===t._state&&0===t._deferreds.length&&setTimeout(function(){t._handled||p(t._value);},1);for(var e=0,n=t._deferreds.length;n>e;e++)o(t,t._deferreds[e]);t._deferreds=null;}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n;}function c(t,e){var n=!1;try{t(function(t){n||(n=!0,r(e,t));},function(t){n||(n=!0,s(e,t));});}catch(i){if(n)return;n=!0,s(e,i);}}var l=setTimeout,h="function"==typeof setImmediate&&setImmediate||function(t){l(t,1);},p=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t);};i.prototype["catch"]=function(t){return this.then(null,t)},i.prototype.then=function(t,n){var r=new i(e);return o(this,new u(t,n,r)),r},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function i(r,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(t){i(r,t);},n)}e[r]=s,0===--o&&t(e);}catch(u){n(u);}}if(0===e.length)return t([]);for(var o=e.length,r=0;r<e.length;r++)i(r,e[r]);})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t);})},i.reject=function(t){return new i(function(e,n){n(t);})},i.race=function(t){return new i(function(e,n){for(var i=0,o=t.length;o>i;i++)t[i].then(e,n);})},i._setImmediateFn=function(t){h=t;},i._setUnhandledRejectionFn=function(t){p=t;},module.exports?module.exports=i:t.Promise||(t.Promise=i);}(commonjsGlobal),function(){var t="object"==typeof window.customElements,e="function"==typeof document.registerElement,n=t||e;n||(/**
	 * @license
	 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
	 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
	 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
	 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
	 * Code distributed by Google as part of the polymer project is also
	 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
	 */
	"undefined"==typeof WeakMap&&!function(){var t=Object.defineProperty,e=Date.now()%1e9,n=function(){this.name="__st"+(1e9*Math.random()>>>0)+(e++ +"__");};n.prototype={set:function(e,n){var i=e[this.name];return i&&i[0]===e?i[1]=n:t(e,this.name,{value:[e,n],writable:!0}),this},get:function(t){var e;return (e=t[this.name])&&e[0]===t?e[1]:void 0},"delete":function(t){var e=t[this.name];return e&&e[0]===t?(e[0]=e[1]=void 0,!0):!1},has:function(t){var e=t[this.name];return e?e[0]===t:!1}},window.WeakMap=n;}(),function(t){function e(t){A.push(t),b||(b=!0,g(i));}function n(t){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(t)||t}function i(){b=!1;var t=A;A=[],t.sort(function(t,e){return t.uid_-e.uid_});var e=!1;t.forEach(function(t){var n=t.takeRecords();o(t),n.length&&(t.callback_(n,t),e=!0);}),e&&i();}function o(t){t.nodes_.forEach(function(e){var n=m.get(e);n&&n.forEach(function(e){e.observer===t&&e.removeTransientObservers();});});}function r(t,e){for(var n=t;n;n=n.parentNode){var i=m.get(n);if(i)for(var o=0;o<i.length;o++){var r=i[o],s=r.options;if(n===t||s.subtree){var a=e(s);a&&r.enqueue(a);}}}}function s(t){this.callback_=t,this.nodes_=[],this.records_=[],this.uid_=++C;}function a(t,e){this.type=t,this.target=e,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null;}function u(t){var e=new a(t.type,t.target);return e.addedNodes=t.addedNodes.slice(),e.removedNodes=t.removedNodes.slice(),e.previousSibling=t.previousSibling,e.nextSibling=t.nextSibling,e.attributeName=t.attributeName,e.attributeNamespace=t.attributeNamespace,e.oldValue=t.oldValue,e}function c(t,e){return x=new a(t,e)}function l(t){return w?w:(w=u(x),w.oldValue=t,w)}function h(){x=w=void 0;}function p(t){return t===w||t===x}function d(t,e){return t===e?t:w&&p(t)?w:null}function f(t,e,n){this.observer=t,this.target=e,this.options=n,this.transientObservedNodes=[];}if(!t.JsMutationObserver){var g,m=new WeakMap;if(/Trident|Edge/.test(navigator.userAgent))g=setTimeout;else if(window.setImmediate)g=window.setImmediate;else {var v=[],y=String(Math.random());window.addEventListener("message",function(t){if(t.data===y){var e=v;v=[],e.forEach(function(t){t();});}}),g=function(t){v.push(t),window.postMessage(y,"*");};}var b=!1,A=[],C=0;s.prototype={observe:function(t,e){if(t=n(t),!e.childList&&!e.attributes&&!e.characterData||e.attributeOldValue&&!e.attributes||e.attributeFilter&&e.attributeFilter.length&&!e.attributes||e.characterDataOldValue&&!e.characterData)throw new SyntaxError;var i=m.get(t);i||m.set(t,i=[]);for(var o,r=0;r<i.length;r++)if(i[r].observer===this){o=i[r],o.removeListeners(),o.options=e;break}o||(o=new f(this,t,e),i.push(o),this.nodes_.push(t)),o.addListeners();},disconnect:function(){this.nodes_.forEach(function(t){for(var e=m.get(t),n=0;n<e.length;n++){var i=e[n];if(i.observer===this){i.removeListeners(),e.splice(n,1);break}}},this),this.records_=[];},takeRecords:function(){var t=this.records_;return this.records_=[],t}};var x,w;f.prototype={enqueue:function(t){var n=this.observer.records_,i=n.length;if(n.length>0){var o=n[i-1],r=d(o,t);if(r)return void(n[i-1]=r)}else e(this.observer);n[i]=t;},addListeners:function(){this.addListeners_(this.target);},addListeners_:function(t){var e=this.options;e.attributes&&t.addEventListener("DOMAttrModified",this,!0),e.characterData&&t.addEventListener("DOMCharacterDataModified",this,!0),e.childList&&t.addEventListener("DOMNodeInserted",this,!0),(e.childList||e.subtree)&&t.addEventListener("DOMNodeRemoved",this,!0);},removeListeners:function(){this.removeListeners_(this.target);},removeListeners_:function(t){var e=this.options;e.attributes&&t.removeEventListener("DOMAttrModified",this,!0),e.characterData&&t.removeEventListener("DOMCharacterDataModified",this,!0),e.childList&&t.removeEventListener("DOMNodeInserted",this,!0),(e.childList||e.subtree)&&t.removeEventListener("DOMNodeRemoved",this,!0);},addTransientObserver:function(t){if(t!==this.target){this.addListeners_(t),this.transientObservedNodes.push(t);var e=m.get(t);e||m.set(t,e=[]),e.push(this);}},removeTransientObservers:function(){var t=this.transientObservedNodes;this.transientObservedNodes=[],t.forEach(function(t){this.removeListeners_(t);for(var e=m.get(t),n=0;n<e.length;n++)if(e[n]===this){e.splice(n,1);break}},this);},handleEvent:function(t){switch(t.stopImmediatePropagation(),t.type){case"DOMAttrModified":var e=t.attrName,n=t.relatedNode.namespaceURI,i=t.target,o=new c("attributes",i);o.attributeName=e,o.attributeNamespace=n;var s=t.attrChange===MutationEvent.ADDITION?null:t.prevValue;r(i,function(t){return !t.attributes||t.attributeFilter&&t.attributeFilter.length&&-1===t.attributeFilter.indexOf(e)&&-1===t.attributeFilter.indexOf(n)?void 0:t.attributeOldValue?l(s):o});break;case"DOMCharacterDataModified":var i=t.target,o=c("characterData",i),s=t.prevValue;r(i,function(t){return t.characterData?t.characterDataOldValue?l(s):o:void 0});break;case"DOMNodeRemoved":this.addTransientObserver(t.target);case"DOMNodeInserted":var a,u,p=t.target;"DOMNodeInserted"===t.type?(a=[p],u=[]):(a=[],u=[p]);var d=p.previousSibling,f=p.nextSibling,o=c("childList",t.target.parentNode);o.addedNodes=a,o.removedNodes=u,o.previousSibling=d,o.nextSibling=f,r(t.relatedNode,function(t){return t.childList?o:void 0});}h();}},t.JsMutationObserver=s,t.MutationObserver||(t.MutationObserver=s,s._isPolyfilled=!0);}}(self),function(){if(!window.performance||!window.performance.now){var t=Date.now();window.performance={now:function(){return Date.now()-t}};}window.requestAnimationFrame||(window.requestAnimationFrame=function(){var t=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return t?function(e){return t(function(){e(performance.now());})}:function(t){return window.setTimeout(t,1e3/60)}}()),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(){return window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){clearTimeout(t);}}());var e=function(){var t=document.createEvent("Event");return t.initEvent("foo",!0,!0),t.preventDefault(),t.defaultPrevented}();if(!e){var n=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(n.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return !0},configurable:!0}));};}var i=/Trident/.test(navigator.userAgent);if((!window.CustomEvent||i&&"function"!=typeof window.CustomEvent)&&(window.CustomEvent=function(t,e){e=e||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,Boolean(e.bubbles),Boolean(e.cancelable),e.detail),n},window.CustomEvent.prototype=window.Event.prototype),!window.Event||i&&"function"!=typeof window.Event){var o=window.Event;window.Event=function(t,e){e=e||{};var n=document.createEvent("Event");return n.initEvent(t,Boolean(e.bubbles),Boolean(e.cancelable)),n},window.Event.prototype=o.prototype;}}(),window.CustomElements=window.CustomElements||{flags:{}},function(t){var e=t.flags,n=[],i=function(t){n.push(t);},o=function(){n.forEach(function(e){e(t);});};t.addModule=i,t.initializeModules=o,t.hasNative=Boolean(document.registerElement),t.isIE=/Trident/.test(navigator.userAgent),t.useNative=!e.register&&t.hasNative&&!window.ShadowDOMPolyfill&&(!window.HTMLImports||window.HTMLImports.useNative);}(window.CustomElements),window.CustomElements.addModule(function(t){function e(t,e){n(t,function(t){return e(t)?!0:void i(t,e)}),i(t,e);}function n(t,e,i){var o=t.firstElementChild;if(!o)for(o=t.firstChild;o&&o.nodeType!==Node.ELEMENT_NODE;)o=o.nextSibling;for(;o;)e(o,i)!==!0&&n(o,e,i),o=o.nextElementSibling;return null}function i(t,n){for(var i=t.shadowRoot;i;)e(i,n),i=i.olderShadowRoot;}function o(t,e){r(t,e,[]);}function r(t,e,n){if(t=window.wrap(t),!(n.indexOf(t)>=0)){n.push(t);for(var i,o=t.querySelectorAll("link[rel="+s+"]"),a=0,u=o.length;u>a&&(i=o[a]);a++)i.import&&r(i.import,e,n);e(t);}}var s=window.HTMLImports?window.HTMLImports.IMPORT_LINK_TYPE:"none";t.forDocumentTree=o,t.forSubtree=e;}),window.CustomElements.addModule(function(t){function e(t,e){return n(t,e)||i(t,e)}function n(e,n){return t.upgrade(e,n)?!0:void(n&&s(e))}function i(t,e){b(t,function(t){return n(t,e)?!0:void 0});}function o(t){w.push(t),x||(x=!0,setTimeout(r));}function r(){x=!1;for(var t,e=w,n=0,i=e.length;i>n&&(t=e[n]);n++)t();w=[];}function s(t){C?o(function(){a(t);}):a(t);}function a(t){t.__upgraded__&&!t.__attached&&(t.__attached=!0,t.attachedCallback&&t.attachedCallback());}function u(t){c(t),b(t,function(t){c(t);});}function c(t){C?o(function(){l(t);}):l(t);}function l(t){t.__upgraded__&&t.__attached&&(t.__attached=!1,t.detachedCallback&&t.detachedCallback());}function h(t){for(var e=t,n=window.wrap(document);e;){if(e==n)return !0;e=e.parentNode||e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host;}}function p(t){if(t.shadowRoot&&!t.shadowRoot.__watched){y.dom&&console.log("watching shadow-root for: ",t.localName);for(var e=t.shadowRoot;e;)g(e),e=e.olderShadowRoot;}}function d(t,n){if(y.dom){var i=n[0];if(i&&"childList"===i.type&&i.addedNodes&&i.addedNodes){for(var o=i.addedNodes[0];o&&o!==document&&!o.host;)o=o.parentNode;var r=o&&(o.URL||o._URL||o.host&&o.host.localName)||"";r=r.split("/?").shift().split("/").pop();}console.group("mutations (%d) [%s]",n.length,r||"");}var s=h(t);n.forEach(function(t){"childList"===t.type&&(E(t.addedNodes,function(t){t.localName&&e(t,s);}),E(t.removedNodes,function(t){t.localName&&u(t);}));}),y.dom&&console.groupEnd();}function f(t){for(t=window.wrap(t),t||(t=window.wrap(document));t.parentNode;)t=t.parentNode;var e=t.__observer;e&&(d(t,e.takeRecords()),r());}function g(t){if(!t.__observer){var e=new MutationObserver(d.bind(this,t));e.observe(t,{childList:!0,subtree:!0}),t.__observer=e;}}function m(t){t=window.wrap(t),y.dom&&console.group("upgradeDocument: ",t.baseURI.split("/").pop());var n=t===window.wrap(document);e(t,n),g(t),y.dom&&console.groupEnd();}function v(t){A(t,m);}var y=t.flags,b=t.forSubtree,A=t.forDocumentTree,C=window.MutationObserver._isPolyfilled&&y["throttle-attached"];t.hasPolyfillMutations=C,t.hasThrottledAttached=C;var x=!1,w=[],E=Array.prototype.forEach.call.bind(Array.prototype.forEach),S=Element.prototype.createShadowRoot;S&&(Element.prototype.createShadowRoot=function(){var t=S.call(this);return window.CustomElements.watchShadow(this),t}),t.watchShadow=p,t.upgradeDocumentTree=v,t.upgradeDocument=m,t.upgradeSubtree=i,t.upgradeAll=e,t.attached=s,t.takeRecords=f;}),window.CustomElements.addModule(function(t){function e(e,i){if("template"===e.localName&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e),!e.__upgraded__&&e.nodeType===Node.ELEMENT_NODE){var o=e.getAttribute("is"),r=t.getRegisteredDefinition(e.localName)||t.getRegisteredDefinition(o);if(r&&(o&&r.tag==e.localName||!o&&!r.extends))return n(e,r,i)}}function n(e,n,o){return s.upgrade&&console.group("upgrade:",e.localName),n.is&&e.setAttribute("is",n.is),i(e,n),e.__upgraded__=!0,r(e),o&&t.attached(e),t.upgradeSubtree(e,o),s.upgrade&&console.groupEnd(),e}function i(t,e){Object.__proto__?t.__proto__=e.prototype:(o(t,e.prototype,e.native),t.__proto__=e.prototype);}function o(t,e,n){for(var i={},o=e;o!==n&&o!==HTMLElement.prototype;){for(var r,s=Object.getOwnPropertyNames(o),a=0;r=s[a];a++)i[r]||(Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r)),i[r]=1);o=Object.getPrototypeOf(o);}}function r(t){t.createdCallback&&t.createdCallback();}var s=t.flags;t.upgrade=e,t.upgradeWithDefinition=n,t.implementPrototype=i;}),window.CustomElements.addModule(function(t){function e(e,i){var u=i||{};if(!e)throw new Error("document.registerElement: first argument `name` must not be empty");if(e.indexOf("-")<0)throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '"+String(e)+"'.");if(o(e))throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '"+String(e)+"'. The type name is invalid.");if(c(e))throw new Error("DuplicateDefinitionError: a type with name '"+String(e)+"' is already registered");return u.prototype||(u.prototype=Object.create(HTMLElement.prototype)),u.__name=e.toLowerCase(),u.extends&&(u.extends=u.extends.toLowerCase()),u.lifecycle=u.lifecycle||{},u.ancestry=r(u.extends),s(u),a(u),n(u.prototype),l(u.__name,u),u.ctor=h(u),u.ctor.prototype=u.prototype,u.prototype.constructor=u.ctor,t.ready&&m(document),u.ctor}function n(t){if(!t.setAttribute._polyfilled){var e=t.setAttribute;t.setAttribute=function(t,n){i.call(this,t,n,e);};var n=t.removeAttribute;t.removeAttribute=function(t){i.call(this,t,null,n);},t.setAttribute._polyfilled=!0;}}function i(t,e,n){t=t.toLowerCase();var i=this.getAttribute(t);n.apply(this,arguments);var o=this.getAttribute(t);this.attributeChangedCallback&&o!==i&&this.attributeChangedCallback(t,i,o);}function o(t){for(var e=0;e<C.length;e++)if(t===C[e])return !0}function r(t){var e=c(t);return e?r(e.extends).concat([e]):[]}function s(t){for(var e,n=t.extends,i=0;e=t.ancestry[i];i++)n=e.is&&e.tag;t.tag=n||t.__name,n&&(t.is=t.__name);}function a(t){if(!Object.__proto__){var e=HTMLElement.prototype;if(t.is){var n=document.createElement(t.tag);e=Object.getPrototypeOf(n);}for(var i,o=t.prototype,r=!1;o;)o==e&&(r=!0),i=Object.getPrototypeOf(o),i&&(o.__proto__=i),o=i;r||console.warn(t.tag+" prototype not found in prototype chain for "+t.is),t.native=e;}}function u(t){return y(E(t.tag),t)}function c(t){return t?x[t.toLowerCase()]:void 0}function l(t,e){x[t]=e;}function h(t){return function(){return u(t)}}function p(t,e,n){return t===w?d(e,n):S(t,e)}function d(t,e){t&&(t=t.toLowerCase()),e&&(e=e.toLowerCase());var n=c(e||t);if(n){if(t==n.tag&&e==n.is)return new n.ctor;if(!e&&!n.is)return new n.ctor}var i;return e?(i=d(t),i.setAttribute("is",e),i):(i=E(t),t.indexOf("-")>=0&&b(i,HTMLElement),i)}function f(t,e){var n=t[e];t[e]=function(){var t=n.apply(this,arguments);return v(t),t};}var g,m=(t.isIE,t.upgradeDocumentTree),v=t.upgradeAll,y=t.upgradeWithDefinition,b=t.implementPrototype,A=t.useNative,C=["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"],x={},w="http://www.w3.org/1999/xhtml",E=document.createElement.bind(document),S=document.createElementNS.bind(document);g=Object.__proto__||A?function(t,e){return t instanceof e}:function(t,e){if(t instanceof e)return !0;for(var n=t;n;){if(n===e.prototype)return !0;n=n.__proto__;}return !1},f(Node.prototype,"cloneNode"),f(document,"importNode"),document.registerElement=e,document.createElement=d,document.createElementNS=p,t.registry=x,t.instanceof=g,t.reservedTagList=C,t.getRegisteredDefinition=c,document.register=document.registerElement;}),function(t){function e(){r(window.wrap(document)),window.CustomElements.ready=!0;var t=window.requestAnimationFrame||function(t){setTimeout(t,16);};t(function(){setTimeout(function(){window.CustomElements.readyTime=Date.now(),window.HTMLImports&&(window.CustomElements.elapsed=window.CustomElements.readyTime-window.HTMLImports.readyTime),document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}));});});}var n=t.useNative,i=t.initializeModules;if(t.isIE,n){var o=function(){};t.watchShadow=o,t.upgrade=o,t.upgradeAll=o,t.upgradeDocumentTree=o,t.upgradeSubtree=o,t.takeRecords=o,t.instanceof=function(t,e){return t instanceof e};}else i();var r=t.upgradeDocumentTree,s=t.upgradeDocument;if(window.wrap||(window.ShadowDOMPolyfill?(window.wrap=window.ShadowDOMPolyfill.wrapIfNeeded,window.unwrap=window.ShadowDOMPolyfill.unwrapIfNeeded):window.wrap=window.unwrap=function(t){return t}),window.HTMLImports&&(window.HTMLImports.__importsParsingHook=function(t){t.import&&s(wrap(t.import));}),"complete"===document.readyState||t.flags.eager)e();else if("interactive"!==document.readyState||window.attachEvent||window.HTMLImports&&!window.HTMLImports.ready){var a=window.HTMLImports&&!window.HTMLImports.ready?"HTMLImportsLoaded":"DOMContentLoaded";window.addEventListener(a,e);}else e();}(window.CustomElements));}.call(commonjsGlobal),function(){}.call(commonjsGlobal),function(){var t=this;(function(){(function(){this.Trix={VERSION:"1.3.1",ZERO_WIDTH_SPACE:"\ufeff",NON_BREAKING_SPACE:"\xa0",OBJECT_REPLACEMENT_CHARACTER:"\ufffc",browser:{composesExistingText:/Android.*Chrome/.test(navigator.userAgent),forcesObjectResizing:/Trident.*rv:11/.test(navigator.userAgent),supportsInputEvents:function(){var t,e,n,i;if("undefined"==typeof InputEvent)return !1;for(i=["data","getTargetRanges","inputType"],t=0,e=i.length;e>t;t++)if(n=i[t],!(n in InputEvent.prototype))return !1;return !0}()},config:{}};}).call(this);}).call(t);var e=t.Trix;((function(){((function(){e.BasicObject=function(){function t(){}var e,n,i;return t.proxyMethod=function(t){var i,o,r,s,a;return r=n(t),i=r.name,s=r.toMethod,a=r.toProperty,o=r.optional,this.prototype[i]=function(){var t,n;return t=null!=s?o?"function"==typeof this[s]?this[s]():void 0:this[s]():null!=a?this[a]:void 0,o?(n=null!=t?t[i]:void 0,null!=n?e.call(n,t,arguments):void 0):(n=t[i],e.call(n,t,arguments))}},n=function(t){var e,n;if(!(n=t.match(i)))throw new Error("can't parse @proxyMethod expression: "+t);return e={name:n[4]},null!=n[2]?e.toMethod=n[1]:e.toProperty=n[1],null!=n[3]&&(e.optional=!0),e},e=Function.prototype.apply,i=/^(.+?)(\(\))?(\?)?\.(.+?)$/,t}();})).call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Object=function(n){function i(){this.id=++o;}var o;return t(i,n),o=0,i.fromJSONString=function(t){return this.fromJSON(JSON.parse(t))},i.prototype.hasSameConstructorAs=function(t){return this.constructor===(null!=t?t.constructor:void 0)},i.prototype.isEqualTo=function(t){return this===t},i.prototype.inspect=function(){var t,e,n;return t=function(){var t,i,o;i=null!=(t=this.contentsForInspection())?t:{},o=[];for(e in i)n=i[e],o.push(e+"="+n);return o}.call(this),"#<"+this.constructor.name+":"+this.id+(t.length?" "+t.join(", "):"")+">"},i.prototype.contentsForInspection=function(){},i.prototype.toJSONString=function(){return JSON.stringify(this)},i.prototype.toUTF16String=function(){return e.UTF16String.box(this)},i.prototype.getCacheKey=function(){return this.id.toString()},i}(e.BasicObject);}.call(this),function(){e.extend=function(t){var e,n;for(e in t)n=t[e],this[e]=n;return this};}.call(this),function(){e.extend({defer:function(t){return setTimeout(t,1)}});}.call(this),function(){var t,n;e.extend({normalizeSpaces:function(t){return t.replace(RegExp(""+e.ZERO_WIDTH_SPACE,"g"),"").replace(RegExp(""+e.NON_BREAKING_SPACE,"g")," ")},normalizeNewlines:function(t){return t.replace(/\r\n/g,"\n")},breakableWhitespacePattern:RegExp("[^\\S"+e.NON_BREAKING_SPACE+"]"),squishBreakableWhitespace:function(t){return t.replace(RegExp(""+e.breakableWhitespacePattern.source,"g")," ").replace(/\ {2,}/g," ")},summarizeStringChange:function(t,i){var o,r,s,a;return t=e.UTF16String.box(t),i=e.UTF16String.box(i),i.length<t.length?(r=n(t,i),a=r[0],o=r[1]):(s=n(i,t),o=s[0],a=s[1]),{added:o,removed:a}}}),n=function(n,i){var o,r,s,a,u;return n.isEqualTo(i)?["",""]:(r=t(n,i),a=r.utf16String.length,s=a?(u=r.offset,o=n.codepoints.slice(0,u).concat(n.codepoints.slice(u+a)),t(i,e.UTF16String.fromCodepoints(o))):t(i,n),[r.utf16String.toString(),s.utf16String.toString()])},t=function(t,e){var n,i,o;for(n=0,i=t.length,o=e.length;i>n&&t.charAt(n).isEqualTo(e.charAt(n));)n++;for(;i>n+1&&t.charAt(i-1).isEqualTo(e.charAt(o-1));)i--,o--;return {utf16String:t.slice(n,i),offset:n}};}.call(this),function(){e.extend({copyObject:function(t){var e,n,i;null==t&&(t={}),n={};for(e in t)i=t[e],n[e]=i;return n},objectsAreEqual:function(t,e){var n,i;if(null==t&&(t={}),null==e&&(e={}),Object.keys(t).length!==Object.keys(e).length)return !1;for(n in t)if(i=t[n],i!==e[n])return !1;return !0}});}.call(this),function(){var t=[].slice;e.extend({arraysAreEqual:function(t,e){var n,i,o,r;if(null==t&&(t=[]),null==e&&(e=[]),t.length!==e.length)return !1;for(i=n=0,o=t.length;o>n;i=++n)if(r=t[i],r!==e[i])return !1;return !0},arrayStartsWith:function(t,n){return null==t&&(t=[]),null==n&&(n=[]),e.arraysAreEqual(t.slice(0,n.length),n)},spliceArray:function(){var e,n,i;return n=arguments[0],e=2<=arguments.length?t.call(arguments,1):[],i=n.slice(0),i.splice.apply(i,e),i},summarizeArrayChange:function(t,e){var n,i,o,r,s,a,u,c,l,h,p;for(null==t&&(t=[]),null==e&&(e=[]),n=[],h=[],o=new Set,r=0,u=t.length;u>r;r++)p=t[r],o.add(p);for(i=new Set,s=0,c=e.length;c>s;s++)p=e[s],i.add(p),o.has(p)||n.push(p);for(a=0,l=t.length;l>a;a++)p=t[a],i.has(p)||h.push(p);return {added:n,removed:h}}});}.call(this),function(){var t,n,i,o;t=null,n=null,o=null,i=null,e.extend({getAllAttributeNames:function(){return null!=t?t:t=e.getTextAttributeNames().concat(e.getBlockAttributeNames())},getBlockConfig:function(t){return e.config.blockAttributes[t]},getBlockAttributeNames:function(){return null!=n?n:n=Object.keys(e.config.blockAttributes)},getTextConfig:function(t){return e.config.textAttributes[t]},getTextAttributeNames:function(){return null!=o?o:o=Object.keys(e.config.textAttributes)},getListAttributeNames:function(){var t,n;return null!=i?i:i=function(){var i,o;i=e.config.blockAttributes,o=[];for(t in i)n=i[t].listAttribute,null!=n&&o.push(n);return o}()}});}.call(this),function(){var t,n,i,o,r,s=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};t=document.documentElement,n=null!=(i=null!=(o=null!=(r=t.matchesSelector)?r:t.webkitMatchesSelector)?o:t.msMatchesSelector)?i:t.mozMatchesSelector,e.extend({handleEvent:function(n,i){var r,s,a,u,c,l,h,p,d,f,g;return h=null!=i?i:{},c=h.onElement,u=h.matchingSelector,g=h.withCallback,a=h.inPhase,l=h.preventDefault,d=h.times,r=null!=c?c:t,p=u,f="capturing"===a,s=function(t){var n;return null!=d&&0===--d&&s.destroy(),n=e.findClosestElementFromNode(t.target,{matchingSelector:p}),null!=n&&(null!=g&&g.call(n,t,n),l)?t.preventDefault():void 0},s.destroy=function(){return r.removeEventListener(n,s,f)},r.addEventListener(n,s,f),s},handleEventOnce:function(t,n){return null==n&&(n={}),n.times=1,e.handleEvent(t,n)},triggerEvent:function(n,i){var o,r,s,a,u,c,l;return l=null!=i?i:{},c=l.onElement,r=l.bubbles,s=l.cancelable,o=l.attributes,a=null!=c?c:t,r=r!==!1,s=s!==!1,u=document.createEvent("Events"),u.initEvent(n,r,s),null!=o&&e.extend.call(u,o),a.dispatchEvent(u)},elementMatchesSelector:function(t,e){return 1===(null!=t?t.nodeType:void 0)?n.call(t,e):void 0},findClosestElementFromNode:function(t,n){var i,o,r;for(o=null!=n?n:{},i=o.matchingSelector,r=o.untilNode;null!=t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;if(null!=t){if(null==i)return t;if(t.closest&&null==r)return t.closest(i);for(;t&&t!==r;){if(e.elementMatchesSelector(t,i))return t;t=t.parentNode;}}},findInnerElement:function(t){for(;null!=t?t.firstElementChild:void 0;)t=t.firstElementChild;return t},innerElementIsActive:function(t){return document.activeElement!==t&&e.elementContainsNode(t,document.activeElement)},elementContainsNode:function(t,e){if(t&&e)for(;e;){if(e===t)return !0;e=e.parentNode;}},findNodeFromContainerAndOffset:function(t,e){var n;if(t)return t.nodeType===Node.TEXT_NODE?t:0===e?null!=(n=t.firstChild)?n:t:t.childNodes.item(e-1)},findElementFromContainerAndOffset:function(t,n){var i;return i=e.findNodeFromContainerAndOffset(t,n),e.findClosestElementFromNode(i)},findChildIndexOfNode:function(t){var e;if(null!=t?t.parentNode:void 0){for(e=0;t=t.previousSibling;)e++;return e}},removeNode:function(t){var e;return null!=t&&null!=(e=t.parentNode)?e.removeChild(t):void 0},walkTree:function(t,e){var n,i,o,r,s;return o=null!=e?e:{},i=o.onlyNodesOfType,r=o.usingFilter,n=o.expandEntityReferences,s=function(){switch(i){case"element":return NodeFilter.SHOW_ELEMENT;case"text":return NodeFilter.SHOW_TEXT;case"comment":return NodeFilter.SHOW_COMMENT;default:return NodeFilter.SHOW_ALL}}(),document.createTreeWalker(t,s,null!=r?r:null,n===!0)},tagName:function(t){var e;return null!=t&&null!=(e=t.tagName)?e.toLowerCase():void 0},makeElement:function(t,e){var n,i,o,r,s,a,u,c,l,h,p,d,f,g;if(null==e&&(e={}),"object"==typeof t?(e=t,t=e.tagName):e={attributes:e},o=document.createElement(t),null!=e.editable&&(null==e.attributes&&(e.attributes={}),e.attributes.contenteditable=e.editable),e.attributes){l=e.attributes;for(a in l)g=l[a],o.setAttribute(a,g);}if(e.style){h=e.style;for(a in h)g=h[a],o.style[a]=g;}if(e.data){p=e.data;for(a in p)g=p[a],o.dataset[a]=g;}if(e.className)for(d=e.className.split(" "),r=0,u=d.length;u>r;r++)i=d[r],o.classList.add(i);if(e.textContent&&(o.textContent=e.textContent),e.childNodes)for(f=[].concat(e.childNodes),s=0,c=f.length;c>s;s++)n=f[s],o.appendChild(n);return o},getBlockTagNames:function(){var t,n;return null!=e.blockTagNames?e.blockTagNames:e.blockTagNames=function(){var i,o;i=e.config.blockAttributes,o=[];for(t in i)n=i[t].tagName,n&&o.push(n);return o}()},nodeIsBlockContainer:function(t){return e.nodeIsBlockStartComment(null!=t?t.firstChild:void 0)},nodeProbablyIsBlockContainer:function(t){var n,i;return n=e.tagName(t),s.call(e.getBlockTagNames(),n)>=0&&(i=e.tagName(t.firstChild),s.call(e.getBlockTagNames(),i)<0)},nodeIsBlockStart:function(t,n){var i;return i=(null!=n?n:{strict:!0}).strict,i?e.nodeIsBlockStartComment(t):e.nodeIsBlockStartComment(t)||!e.nodeIsBlockStartComment(t.firstChild)&&e.nodeProbablyIsBlockContainer(t)},nodeIsBlockStartComment:function(t){return e.nodeIsCommentNode(t)&&"block"===(null!=t?t.data:void 0)},nodeIsCommentNode:function(t){return (null!=t?t.nodeType:void 0)===Node.COMMENT_NODE},nodeIsCursorTarget:function(t,n){var i;return i=(null!=n?n:{}).name,t?e.nodeIsTextNode(t)?t.data===e.ZERO_WIDTH_SPACE?i?t.parentNode.dataset.trixCursorTarget===i:!0:void 0:e.nodeIsCursorTarget(t.firstChild):void 0},nodeIsAttachmentElement:function(t){return e.elementMatchesSelector(t,e.AttachmentView.attachmentSelector)},nodeIsEmptyTextNode:function(t){return e.nodeIsTextNode(t)&&""===(null!=t?t.data:void 0)},nodeIsTextNode:function(t){return (null!=t?t.nodeType:void 0)===Node.TEXT_NODE}});}.call(this),function(){var t,n,i,o,r;t=e.copyObject,o=e.objectsAreEqual,e.extend({normalizeRange:i=function(t){var e;if(null!=t)return Array.isArray(t)||(t=[t,t]),[n(t[0]),n(null!=(e=t[1])?e:t[0])]},rangeIsCollapsed:function(t){var e,n,o;if(null!=t)return n=i(t),o=n[0],e=n[1],r(o,e)},rangesAreEqual:function(t,e){var n,o,s,a,u,c;if(null!=t&&null!=e)return s=i(t),o=s[0],n=s[1],a=i(e),c=a[0],u=a[1],r(o,c)&&r(n,u)}}),n=function(e){return "number"==typeof e?e:t(e)},r=function(t,e){return "number"==typeof t?t===e:o(t,e)};}.call(this),function(){var t,n,i,o,r,s,a;e.registerElement=function(t,e){var n,i;return null==e&&(e={}),t=t.toLowerCase(),e=a(e),i=s(e),(n=i.defaultCSS)&&(delete i.defaultCSS,o(n,t)),r(t,i)},o=function(t,e){var n;return n=i(e),n.textContent=t.replace(/%t/g,e)},i=function(e){var n,i;return n=document.createElement("style"),n.setAttribute("type","text/css"),n.setAttribute("data-tag-name",e.toLowerCase()),(i=t())&&n.setAttribute("nonce",i),document.head.insertBefore(n,document.head.firstChild),n},t=function(){var t;return (t=n("trix-csp-nonce")||n("csp-nonce"))?t.getAttribute("content"):void 0},n=function(t){return document.head.querySelector("meta[name="+t+"]")},s=function(t){var e,n,i;n={};for(e in t)i=t[e],n[e]="function"==typeof i?{value:i}:i;return n},a=function(){var t;return t=function(t){var e,n,i,o,r;for(e={},r=["initialize","connect","disconnect"],n=0,o=r.length;o>n;n++)i=r[n],e[i]=t[i],delete t[i];return e},window.customElements?function(e){var n,i,o,r,s;return s=t(e),o=s.initialize,n=s.connect,i=s.disconnect,o&&(r=n,n=function(){return this.initialized||(this.initialized=!0,o.call(this)),null!=r?r.call(this):void 0}),n&&(e.connectedCallback=n),i&&(e.disconnectedCallback=i),e}:function(e){var n,i,o,r;return r=t(e),o=r.initialize,n=r.connect,i=r.disconnect,o&&(e.createdCallback=o),n&&(e.attachedCallback=n),i&&(e.detachedCallback=i),e}}(),r=function(){return window.customElements?function(t,e){var n;return n=function(){return "object"==typeof Reflect?Reflect.construct(HTMLElement,[],n):HTMLElement.apply(this)},Object.setPrototypeOf(n.prototype,HTMLElement.prototype),Object.setPrototypeOf(n,HTMLElement),Object.defineProperties(n.prototype,e),window.customElements.define(t,n),n}:function(t,e){var n,i;return i=Object.create(HTMLElement.prototype,e),n=document.registerElement(t,{prototype:i}),Object.defineProperty(i,"constructor",{value:n}),n}}();}.call(this),function(){var t,n;e.extend({getDOMSelection:function(){var t;return t=window.getSelection(),t.rangeCount>0?t:void 0},getDOMRange:function(){var n,i;return (n=null!=(i=e.getDOMSelection())?i.getRangeAt(0):void 0)&&!t(n)?n:void 0},setDOMRange:function(t){var n;return n=window.getSelection(),n.removeAllRanges(),n.addRange(t),e.selectionChangeObserver.update()}}),t=function(t){return n(t.startContainer)||n(t.endContainer)},n=function(t){return !Object.getPrototypeOf(t)};}.call(this),function(){var t;t={"application/x-trix-feature-detection":"test"},e.extend({dataTransferIsPlainText:function(t){var e,n,i;return i=t.getData("text/plain"),n=t.getData("text/html"),i&&n?(e=(new DOMParser).parseFromString(n,"text/html").body,e.textContent===i?!e.querySelector("*"):void 0):null!=i?i.length:void 0},dataTransferIsWritable:function(e){var n,i;if(null!=(null!=e?e.setData:void 0)){for(n in t)if(i=t[n],!function(){try{return e.setData(n,i),e.getData(n)===i}catch(t){}}())return;return !0}},keyEventIsKeyboardCommand:function(){return /Mac|^iP/.test(navigator.platform)?function(t){return t.metaKey}:function(t){return t.ctrlKey}}()});}.call(this),function(){e.extend({RTL_PATTERN:/[\u05BE\u05C0\u05C3\u05D0-\u05EA\u05F0-\u05F4\u061B\u061F\u0621-\u063A\u0640-\u064A\u066D\u0671-\u06B7\u06BA-\u06BE\u06C0-\u06CE\u06D0-\u06D5\u06E5\u06E6\u200F\u202B\u202E\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE72\uFE74\uFE76-\uFEFC]/,getDirection:function(){var t,n,i,o;return n=e.makeElement("input",{dir:"auto",name:"x",dirName:"x.dir"}),t=e.makeElement("form"),t.appendChild(n),i=function(){try{return new FormData(t).has(n.dirName)}catch(e){}}(),o=function(){try{return n.matches(":dir(ltr),:dir(rtl)")}catch(t){}}(),i?function(e){return n.value=e,new FormData(t).get(n.dirName)}:o?function(t){return n.value=t,n.matches(":dir(rtl)")?"rtl":"ltr"}:function(t){var n;return n=t.trim().charAt(0),e.RTL_PATTERN.test(n)?"rtl":"ltr"}}()});}.call(this),function(){}.call(this),function(){var t,n=function(t,e){function n(){this.constructor=t;}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;t=e.arraysAreEqual,e.Hash=function(i){function o(t){null==t&&(t={}),this.values=s(t),o.__super__.constructor.apply(this,arguments);}var r,s,a,u,c;return n(o,i),o.fromCommonAttributesOfObjects=function(t){var e,n,i,o,s,a;if(null==t&&(t=[]),!t.length)return new this;for(e=r(t[0]),i=e.getKeys(),a=t.slice(1),n=0,o=a.length;o>n;n++)s=a[n],i=e.getKeysCommonToHash(r(s)),e=e.slice(i);return e},o.box=function(t){return r(t)},o.prototype.add=function(t,e){return this.merge(u(t,e))},o.prototype.remove=function(t){return new e.Hash(s(this.values,t))},o.prototype.get=function(t){return this.values[t]},o.prototype.has=function(t){return t in this.values},o.prototype.merge=function(t){return new e.Hash(a(this.values,c(t)))},o.prototype.slice=function(t){var n,i,o,r;for(r={},n=0,o=t.length;o>n;n++)i=t[n],this.has(i)&&(r[i]=this.values[i]);return new e.Hash(r)},o.prototype.getKeys=function(){return Object.keys(this.values)},o.prototype.getKeysCommonToHash=function(t){var e,n,i,o,s;for(t=r(t),o=this.getKeys(),s=[],e=0,i=o.length;i>e;e++)n=o[e],this.values[n]===t.values[n]&&s.push(n);return s},o.prototype.isEqualTo=function(e){return t(this.toArray(),r(e).toArray())},o.prototype.isEmpty=function(){return 0===this.getKeys().length},o.prototype.toArray=function(){var t,e,n;return (null!=this.array?this.array:this.array=function(){var i;e=[],i=this.values;for(t in i)n=i[t],e.push(t,n);return e}.call(this)).slice(0)},o.prototype.toObject=function(){return s(this.values)},o.prototype.toJSON=function(){return this.toObject()},o.prototype.contentsForInspection=function(){return {values:JSON.stringify(this.values)}},u=function(t,e){var n;return n={},n[t]=e,n},a=function(t,e){var n,i,o;i=s(t);for(n in e)o=e[n],i[n]=o;return i},s=function(t,e){var n,i,o,r,s;for(r={},s=Object.keys(t).sort(),n=0,o=s.length;o>n;n++)i=s[n],i!==e&&(r[i]=t[i]);return r},r=function(t){return t instanceof e.Hash?t:new e.Hash(t)},c=function(t){return t instanceof e.Hash?t.values:t
	},o}(e.Object);}.call(this),function(){e.ObjectGroup=function(){function t(t,e){var n,i;this.objects=null!=t?t:[],i=e.depth,n=e.asTree,n&&(this.depth=i,this.objects=this.constructor.groupObjects(this.objects,{asTree:n,depth:this.depth+1}));}return t.groupObjects=function(t,e){var n,i,o,r,s,a,u,c,l;for(null==t&&(t=[]),l=null!=e?e:{},o=l.depth,n=l.asTree,n&&null==o&&(o=0),c=[],s=0,a=t.length;a>s;s++){if(u=t[s],r){if(("function"==typeof u.canBeGrouped?u.canBeGrouped(o):void 0)&&("function"==typeof(i=r[r.length-1]).canBeGroupedWith?i.canBeGroupedWith(u,o):void 0)){r.push(u);continue}c.push(new this(r,{depth:o,asTree:n})),r=null;}("function"==typeof u.canBeGrouped?u.canBeGrouped(o):void 0)?r=[u]:c.push(u);}return r&&c.push(new this(r,{depth:o,asTree:n})),c},t.prototype.getObjects=function(){return this.objects},t.prototype.getDepth=function(){return this.depth},t.prototype.getCacheKey=function(){var t,e,n,i,o;for(e=["objectGroup"],o=this.getObjects(),t=0,n=o.length;n>t;t++)i=o[t],e.push(i.getCacheKey());return e.join("/")},t}();}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ObjectMap=function(e){function n(t){var e,n,i,o,r;for(null==t&&(t=[]),this.objects={},i=0,o=t.length;o>i;i++)r=t[i],n=JSON.stringify(r),null==(e=this.objects)[n]&&(e[n]=r);}return t(n,e),n.prototype.find=function(t){var e;return e=JSON.stringify(t),this.objects[e]},n}(e.BasicObject);}.call(this),function(){e.ElementStore=function(){function t(t){this.reset(t);}var e;return t.prototype.add=function(t){var n;return n=e(t),this.elements[n]=t},t.prototype.remove=function(t){var n,i;return n=e(t),(i=this.elements[n])?(delete this.elements[n],i):void 0},t.prototype.reset=function(t){var e,n,i;for(null==t&&(t=[]),this.elements={},n=0,i=t.length;i>n;n++)e=t[n],this.add(e);return t},e=function(t){return t.dataset.trixStoreKey},t}();}.call(this),function(){}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Operation=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n.prototype.isPerforming=function(){return this.performing===!0},n.prototype.hasPerformed=function(){return this.performed===!0},n.prototype.hasSucceeded=function(){return this.performed&&this.succeeded},n.prototype.hasFailed=function(){return this.performed&&!this.succeeded},n.prototype.getPromise=function(){return null!=this.promise?this.promise:this.promise=new Promise(function(t){return function(e,n){return t.performing=!0,t.perform(function(i,o){return t.succeeded=i,t.performing=!1,t.performed=!0,t.succeeded?e(o):n(o)})}}(this))},n.prototype.perform=function(t){return t(!1)},n.prototype.release=function(){var t;return null!=(t=this.promise)&&"function"==typeof t.cancel&&t.cancel(),this.promise=null,this.performing=null,this.performed=null,this.succeeded=null},n.proxyMethod("getPromise().then"),n.proxyMethod("getPromise().catch"),n}(e.BasicObject);}.call(this),function(){var t,n,i,o,r,s=function(t,e){function n(){this.constructor=t;}for(var i in e)a.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},a={}.hasOwnProperty;e.UTF16String=function(t){function e(t,e){this.ucs2String=t,this.codepoints=e,this.length=this.codepoints.length,this.ucs2Length=this.ucs2String.length;}return s(e,t),e.box=function(t){return null==t&&(t=""),t instanceof this?t:this.fromUCS2String(null!=t?t.toString():void 0)},e.fromUCS2String=function(t){return new this(t,o(t))},e.fromCodepoints=function(t){return new this(r(t),t)},e.prototype.offsetToUCS2Offset=function(t){return r(this.codepoints.slice(0,Math.max(0,t))).length},e.prototype.offsetFromUCS2Offset=function(t){return o(this.ucs2String.slice(0,Math.max(0,t))).length},e.prototype.slice=function(){var t;return this.constructor.fromCodepoints((t=this.codepoints).slice.apply(t,arguments))},e.prototype.charAt=function(t){return this.slice(t,t+1)},e.prototype.isEqualTo=function(t){return this.constructor.box(t).ucs2String===this.ucs2String},e.prototype.toJSON=function(){return this.ucs2String},e.prototype.getCacheKey=function(){return this.ucs2String},e.prototype.toString=function(){return this.ucs2String},e}(e.BasicObject),t=1===("function"==typeof Array.from?Array.from("\ud83d\udc7c").length:void 0),n=null!=("function"==typeof" ".codePointAt?" ".codePointAt(0):void 0),i=" \ud83d\udc7c"===("function"==typeof String.fromCodePoint?String.fromCodePoint(32,128124):void 0),o=t&&n?function(t){return Array.from(t).map(function(t){return t.codePointAt(0)})}:function(t){var e,n,i,o,r;for(o=[],e=0,i=t.length;i>e;)r=t.charCodeAt(e++),r>=55296&&56319>=r&&i>e&&(n=t.charCodeAt(e++),56320===(64512&n)?r=((1023&r)<<10)+(1023&n)+65536:e--),o.push(r);return o},r=i?function(t){return String.fromCodePoint.apply(String,t)}:function(t){var e,n,i;return e=function(){var e,o,r;for(r=[],e=0,o=t.length;o>e;e++)i=t[e],n="",i>65535&&(i-=65536,n+=String.fromCharCode(i>>>10&1023|55296),i=56320|1023&i),r.push(n+String.fromCharCode(i));return r}(),e.join("")};}.call(this),function(){}.call(this),function(){}.call(this),function(){e.config.lang={attachFiles:"Attach Files",bold:"Bold",bullets:"Bullets","byte":"Byte",bytes:"Bytes",captionPlaceholder:"Add a caption\u2026",code:"Code",heading1:"Heading",indent:"Increase Level",italic:"Italic",link:"Link",numbers:"Numbers",outdent:"Decrease Level",quote:"Quote",redo:"Redo",remove:"Remove",strike:"Strikethrough",undo:"Undo",unlink:"Unlink",url:"URL",urlPlaceholder:"Enter a URL\u2026",GB:"GB",KB:"KB",MB:"MB",PB:"PB",TB:"TB"};}.call(this),function(){e.config.css={attachment:"attachment",attachmentCaption:"attachment__caption",attachmentCaptionEditor:"attachment__caption-editor",attachmentMetadata:"attachment__metadata",attachmentMetadataContainer:"attachment__metadata-container",attachmentName:"attachment__name",attachmentProgress:"attachment__progress",attachmentSize:"attachment__size",attachmentToolbar:"attachment__toolbar",attachmentGallery:"attachment-gallery"};}.call(this),function(){var t;e.config.blockAttributes=t={"default":{tagName:"div",parse:!1},quote:{tagName:"blockquote",nestable:!0},heading1:{tagName:"h1",terminal:!0,breakOnReturn:!0,group:!1},code:{tagName:"pre",terminal:!0,text:{plaintext:!0}},bulletList:{tagName:"ul",parse:!1},bullet:{tagName:"li",listAttribute:"bulletList",group:!1,nestable:!0,test:function(n){return e.tagName(n.parentNode)===t[this.listAttribute].tagName}},numberList:{tagName:"ol",parse:!1},number:{tagName:"li",listAttribute:"numberList",group:!1,nestable:!0,test:function(n){return e.tagName(n.parentNode)===t[this.listAttribute].tagName}},attachmentGallery:{tagName:"div",exclusive:!0,terminal:!0,parse:!1,group:!1}};}.call(this),function(){var t,n;t=e.config.lang,n=[t.bytes,t.KB,t.MB,t.GB,t.TB,t.PB],e.config.fileSize={prefix:"IEC",precision:2,formatter:function(e){var i,o,r,s,a;switch(e){case 0:return "0 "+t.bytes;case 1:return "1 "+t.byte;default:return i=function(){switch(this.prefix){case"SI":return 1e3;case"IEC":return 1024}}.call(this),o=Math.floor(Math.log(e)/Math.log(i)),r=e/Math.pow(i,o),s=r.toFixed(this.precision),a=s.replace(/0*$/,"").replace(/\.$/,""),a+" "+n[o]}}};}.call(this),function(){e.config.textAttributes={bold:{tagName:"strong",inheritable:!0,parser:function(t){var e;return e=window.getComputedStyle(t),"bold"===e.fontWeight||e.fontWeight>=600}},italic:{tagName:"em",inheritable:!0,parser:function(t){var e;return e=window.getComputedStyle(t),"italic"===e.fontStyle}},href:{groupTagName:"a",parser:function(t){var n,i,o;return n=e.AttachmentView.attachmentSelector,o="a:not("+n+")",(i=e.findClosestElementFromNode(t,{matchingSelector:o}))?i.getAttribute("href"):void 0}},strike:{tagName:"del",inheritable:!0},frozen:{style:{backgroundColor:"highlight"}}};}.call(this),function(){var t,n,i,o,r;r="[data-trix-serialize=false]",o=["contenteditable","data-trix-id","data-trix-store-key","data-trix-mutable","data-trix-placeholder","tabindex"],n="data-trix-serialized-attributes",i="["+n+"]",t=new RegExp("<!--block-->","g"),e.extend({serializers:{"application/json":function(t){var n;if(t instanceof e.Document)n=t;else {if(!(t instanceof HTMLElement))throw new Error("unserializable object");n=e.Document.fromHTML(t.innerHTML);}return n.toSerializableDocument().toJSONString()},"text/html":function(s){var a,u,c,l,h,p,d,f,g,m,v,y,b,A,C,x,w;if(s instanceof e.Document)l=e.DocumentView.render(s);else {if(!(s instanceof HTMLElement))throw new Error("unserializable object");l=s.cloneNode(!0);}for(A=l.querySelectorAll(r),h=0,g=A.length;g>h;h++)c=A[h],e.removeNode(c);for(p=0,m=o.length;m>p;p++)for(a=o[p],C=l.querySelectorAll("["+a+"]"),d=0,v=C.length;v>d;d++)c=C[d],c.removeAttribute(a);for(x=l.querySelectorAll(i),f=0,y=x.length;y>f;f++){c=x[f];try{u=JSON.parse(c.getAttribute(n)),c.removeAttribute(n);for(b in u)w=u[b],c.setAttribute(b,w);}catch(E){}}return l.innerHTML.replace(t,"")}},deserializers:{"application/json":function(t){return e.Document.fromJSONString(t)},"text/html":function(t){return e.Document.fromHTML(t)}},serializeToContentType:function(t,n){var i;if(i=e.serializers[n])return i(t);throw new Error("unknown content type: "+n)},deserializeFromContentType:function(t,n){var i;if(i=e.deserializers[n])return i(t);throw new Error("unknown content type: "+n)}});}.call(this),function(){var t;t=e.config.lang,e.config.toolbar={getDefaultHTML:function(){return '<div class="trix-button-row">\n  <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="'+t.bold+'" tabindex="-1">'+t.bold+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="'+t.italic+'" tabindex="-1">'+t.italic+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="'+t.strike+'" tabindex="-1">'+t.strike+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="'+t.link+'" tabindex="-1">'+t.link+'</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="'+t.heading1+'" tabindex="-1">'+t.heading1+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="'+t.quote+'" tabindex="-1">'+t.quote+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="'+t.code+'" tabindex="-1">'+t.code+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="'+t.bullets+'" tabindex="-1">'+t.bullets+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="'+t.numbers+'" tabindex="-1">'+t.numbers+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="'+t.outdent+'" tabindex="-1">'+t.outdent+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="'+t.indent+'" tabindex="-1">'+t.indent+'</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="'+t.attachFiles+'" tabindex="-1">'+t.attachFiles+'</button>\n  </span>\n\n  <span class="trix-button-group-spacer"></span>\n\n  <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="'+t.undo+'" tabindex="-1">'+t.undo+'</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="'+t.redo+'" tabindex="-1">'+t.redo+'</button>\n  </span>\n</div>\n\n<div class="trix-dialogs" data-trix-dialogs>\n  <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">\n    <div class="trix-dialog__link-fields">\n      <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="'+t.urlPlaceholder+'" aria-label="'+t.url+'" required data-trix-input>\n      <div class="trix-button-group">\n        <input type="button" class="trix-button trix-button--dialog" value="'+t.link+'" data-trix-method="setAttribute">\n        <input type="button" class="trix-button trix-button--dialog" value="'+t.unlink+'" data-trix-method="removeAttribute">\n      </div>\n    </div>\n  </div>\n</div>'}};}.call(this),function(){e.config.undoInterval=5e3;}.call(this),function(){e.config.attachments={preview:{presentation:"gallery",caption:{name:!0,size:!0}},file:{caption:{size:!0}}};}.call(this),function(){e.config.keyNames={8:"backspace",9:"tab",13:"return",27:"escape",37:"left",39:"right",46:"delete",68:"d",72:"h",79:"o"};}.call(this),function(){e.config.input={level2Enabled:!0,getLevel:function(){return this.level2Enabled&&e.browser.supportsInputEvents?2:0},pickFiles:function(t){var n;return n=e.makeElement("input",{type:"file",multiple:!0,hidden:!0,id:this.fileInputId}),n.addEventListener("change",function(){return t(n.files),e.removeNode(n)}),e.removeNode(document.getElementById(this.fileInputId)),document.body.appendChild(n),n.click()},fileInputId:"trix-file-input-"+Date.now().toString(16)};}.call(this),function(){}.call(this),function(){e.registerElement("trix-toolbar",{defaultCSS:"%t {\n  display: block;\n}\n\n%t {\n  white-space: nowrap;\n}\n\n%t [data-trix-dialog] {\n  display: none;\n}\n\n%t [data-trix-dialog][data-trix-active] {\n  display: block;\n}\n\n%t [data-trix-dialog] [data-trix-validate]:invalid {\n  background-color: #ffdddd;\n}",initialize:function(){return ""===this.innerHTML?this.innerHTML=e.config.toolbar.getDefaultHTML():void 0}});}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty,i=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};e.ObjectView=function(n){function o(t,e){this.object=t,this.options=null!=e?e:{},this.childViews=[],this.rootView=this;}return t(o,n),o.prototype.getNodes=function(){var t,e,n,i,o;for(null==this.nodes&&(this.nodes=this.createNodes()),i=this.nodes,o=[],t=0,e=i.length;e>t;t++)n=i[t],o.push(n.cloneNode(!0));return o},o.prototype.invalidate=function(){var t;return this.nodes=null,this.childViews=[],null!=(t=this.parentView)?t.invalidate():void 0},o.prototype.invalidateViewForObject=function(t){var e;return null!=(e=this.findViewForObject(t))?e.invalidate():void 0},o.prototype.findOrCreateCachedChildView=function(t,e){var n;return (n=this.getCachedViewForObject(e))?this.recordChildView(n):(n=this.createChildView.apply(this,arguments),this.cacheViewForObject(n,e)),n},o.prototype.createChildView=function(t,n,i){var o;return null==i&&(i={}),n instanceof e.ObjectGroup&&(i.viewClass=t,t=e.ObjectGroupView),o=new t(n,i),this.recordChildView(o)},o.prototype.recordChildView=function(t){return t.parentView=this,t.rootView=this.rootView,this.childViews.push(t),t},o.prototype.getAllChildViews=function(){var t,e,n,i,o;for(o=[],i=this.childViews,e=0,n=i.length;n>e;e++)t=i[e],o.push(t),o=o.concat(t.getAllChildViews());return o},o.prototype.findElement=function(){return this.findElementForObject(this.object)},o.prototype.findElementForObject=function(t){var e;return (e=null!=t?t.id:void 0)?this.rootView.element.querySelector("[data-trix-id='"+e+"']"):void 0},o.prototype.findViewForObject=function(t){var e,n,i,o;for(i=this.getAllChildViews(),e=0,n=i.length;n>e;e++)if(o=i[e],o.object===t)return o},o.prototype.getViewCache=function(){return this.rootView!==this?this.rootView.getViewCache():this.isViewCachingEnabled()?null!=this.viewCache?this.viewCache:this.viewCache={}:void 0},o.prototype.isViewCachingEnabled=function(){return this.shouldCacheViews!==!1},o.prototype.enableViewCaching=function(){return this.shouldCacheViews=!0},o.prototype.disableViewCaching=function(){return this.shouldCacheViews=!1},o.prototype.getCachedViewForObject=function(t){var e;return null!=(e=this.getViewCache())?e[t.getCacheKey()]:void 0},o.prototype.cacheViewForObject=function(t,e){var n;return null!=(n=this.getViewCache())?n[e.getCacheKey()]=t:void 0},o.prototype.garbageCollectCachedViews=function(){var t,e,n,o,r,s;if(t=this.getViewCache()){s=this.getAllChildViews().concat(this),n=function(){var t,e,n;for(n=[],t=0,e=s.length;e>t;t++)r=s[t],n.push(r.object.getCacheKey());return n}(),o=[];for(e in t)i.call(n,e)<0&&o.push(delete t[e]);return o}},o}(e.BasicObject);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ObjectGroupView=function(e){function n(){n.__super__.constructor.apply(this,arguments),this.objectGroup=this.object,this.viewClass=this.options.viewClass,delete this.options.viewClass;}return t(n,e),n.prototype.getChildViews=function(){var t,e,n,i;if(!this.childViews.length)for(i=this.objectGroup.getObjects(),t=0,e=i.length;e>t;t++)n=i[t],this.findOrCreateCachedChildView(this.viewClass,n,this.options);return this.childViews},n.prototype.createNodes=function(){var t,e,n,i,o,r,s,a,u;for(t=this.createContainerElement(),s=this.getChildViews(),e=0,i=s.length;i>e;e++)for(u=s[e],a=u.getNodes(),n=0,o=a.length;o>n;n++)r=a[n],t.appendChild(r);return [t]},n.prototype.createContainerElement=function(t){return null==t&&(t=this.objectGroup.getDepth()),this.getChildViews()[0].createContainerElement(t)},n}(e.ObjectView);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Controller=function(e){function n(){return n.__super__.constructor.apply(this,arguments)}return t(n,e),n}(e.BasicObject);}.call(this),function(){var t,n,i,o,r,s,a=function(t,e){return function(){return t.apply(e,arguments)}},u=function(t,e){function n(){this.constructor=t;}for(var i in e)c.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},c={}.hasOwnProperty,l=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};t=e.findClosestElementFromNode,i=e.nodeIsEmptyTextNode,n=e.nodeIsBlockStartComment,o=e.normalizeSpaces,r=e.summarizeStringChange,s=e.tagName,e.MutationObserver=function(e){function c(t){this.element=t,this.didMutate=a(this.didMutate,this),this.observer=new window.MutationObserver(this.didMutate),this.start();}var h,p,d,f;return u(c,e),p="data-trix-mutable",d="["+p+"]",f={attributes:!0,childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},c.prototype.start=function(){return this.reset(),this.observer.observe(this.element,f)},c.prototype.stop=function(){return this.observer.disconnect()},c.prototype.didMutate=function(t){var e,n;return (e=this.mutations).push.apply(e,this.findSignificantMutations(t)),this.mutations.length?(null!=(n=this.delegate)&&"function"==typeof n.elementDidMutate&&n.elementDidMutate(this.getMutationSummary()),this.reset()):void 0},c.prototype.reset=function(){return this.mutations=[]},c.prototype.findSignificantMutations=function(t){var e,n,i,o;for(o=[],e=0,n=t.length;n>e;e++)i=t[e],this.mutationIsSignificant(i)&&o.push(i);return o},c.prototype.mutationIsSignificant=function(t){var e,n,i,o;if(this.nodeIsMutable(t.target))return !1;for(o=this.nodesModifiedByMutation(t),e=0,n=o.length;n>e;e++)if(i=o[e],this.nodeIsSignificant(i))return !0;return !1},c.prototype.nodeIsSignificant=function(t){return t!==this.element&&!this.nodeIsMutable(t)&&!i(t)},c.prototype.nodeIsMutable=function(e){return t(e,{matchingSelector:d})},c.prototype.nodesModifiedByMutation=function(t){var e;switch(e=[],t.type){case"attributes":t.attributeName!==p&&e.push(t.target);break;case"characterData":e.push(t.target.parentNode),e.push(t.target);break;case"childList":e.push.apply(e,t.addedNodes),e.push.apply(e,t.removedNodes);}return e},c.prototype.getMutationSummary=function(){return this.getTextMutationSummary()},c.prototype.getTextMutationSummary=function(){var t,e,n,i,o,r,s,a,u,c,h;for(a=this.getTextChangesFromCharacterData(),n=a.additions,o=a.deletions,h=this.getTextChangesFromChildList(),u=h.additions,r=0,s=u.length;s>r;r++)e=u[r],l.call(n,e)<0&&n.push(e);return o.push.apply(o,h.deletions),c={},(t=n.join(""))&&(c.textAdded=t),(i=o.join(""))&&(c.textDeleted=i),c},c.prototype.getMutationsByType=function(t){var e,n,i,o,r;for(o=this.mutations,r=[],e=0,n=o.length;n>e;e++)i=o[e],i.type===t&&r.push(i);return r},c.prototype.getTextChangesFromChildList=function(){var t,e,i,r,s,a,u,c,l,p,d;for(t=[],u=[],a=this.getMutationsByType("childList"),e=0,r=a.length;r>e;e++)s=a[e],t.push.apply(t,s.addedNodes),u.push.apply(u,s.removedNodes);return c=0===t.length&&1===u.length&&n(u[0]),c?(p=[],d=["\n"]):(p=h(t),d=h(u)),{additions:function(){var t,e,n;for(n=[],i=t=0,e=p.length;e>t;i=++t)l=p[i],l!==d[i]&&n.push(o(l));return n}(),deletions:function(){var t,e,n;for(n=[],i=t=0,e=d.length;e>t;i=++t)l=d[i],l!==p[i]&&n.push(o(l));return n}()}},c.prototype.getTextChangesFromCharacterData=function(){var t,e,n,i,s,a,u,c;return e=this.getMutationsByType("characterData"),e.length&&(c=e[0],n=e[e.length-1],s=o(c.oldValue),i=o(n.target.data),a=r(s,i),t=a.added,u=a.removed),{additions:t?[t]:[],deletions:u?[u]:[]}},h=function(t){var e,n,i,o;for(null==t&&(t=[]),o=[],e=0,n=t.length;n>e;e++)switch(i=t[e],i.nodeType){case Node.TEXT_NODE:o.push(i.data);break;case Node.ELEMENT_NODE:"br"===s(i)?o.push("\n"):o.push.apply(o,h(i.childNodes));}return o},c}(e.BasicObject);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.FileVerificationOperation=function(e){function n(t){this.file=t;}return t(n,e),n.prototype.perform=function(t){var e;return e=new FileReader,e.onerror=function(){return t(!1)},e.onload=function(n){return function(){e.onerror=null;try{e.abort();}catch(i){}return t(!0,n.file)}}(this),e.readAsArrayBuffer(this.file)},n}(e.Operation);}.call(this),function(){var t,n,i=function(t,e){function n(){this.constructor=t;}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},o={}.hasOwnProperty;t=e.handleEvent,n=e.innerElementIsActive,e.InputController=function(o){function r(n){var i;this.element=n,this.mutationObserver=new e.MutationObserver(this.element),this.mutationObserver.delegate=this;for(i in this.events)t(i,{onElement:this.element,withCallback:this.handlerFor(i)});}return i(r,o),r.prototype.events={},r.prototype.elementDidMutate=function(){},r.prototype.editorWillSyncDocumentView=function(){return this.mutationObserver.stop()},r.prototype.editorDidSyncDocumentView=function(){return this.mutationObserver.start()},r.prototype.requestRender=function(){var t;return null!=(t=this.delegate)&&"function"==typeof t.inputControllerDidRequestRender?t.inputControllerDidRequestRender():void 0},r.prototype.requestReparse=function(){var t;return null!=(t=this.delegate)&&"function"==typeof t.inputControllerDidRequestReparse&&t.inputControllerDidRequestReparse(),this.requestRender()},r.prototype.attachFiles=function(t){var n,i;return i=function(){var i,o,r;for(r=[],i=0,o=t.length;o>i;i++)n=t[i],r.push(new e.FileVerificationOperation(n));return r}(),Promise.all(i).then(function(t){return function(e){return t.handleInput(function(){var t,n;return null!=(t=this.delegate)&&t.inputControllerWillAttachFiles(),null!=(n=this.responder)&&n.insertFiles(e),this.requestRender()})}}(this))},r.prototype.handlerFor=function(t){return function(e){return function(i){return i.defaultPrevented?void 0:e.handleInput(function(){return n(this.element)?void 0:(this.eventName=t,this.events[t].call(this,i))})}}(this)},r.prototype.handleInput=function(t){var e,n;try{return null!=(e=this.delegate)&&e.inputControllerWillHandleInput(),t.call(this)}finally{null!=(n=this.delegate)&&n.inputControllerDidHandleInput();}},r.prototype.createLinkHTML=function(t,e){var n;return n=document.createElement("a"),n.href=t,n.textContent=null!=e?e:t,n.outerHTML},r}(e.BasicObject);}.call(this),function(){var t,n,i,o,r,s,a,u,c,l,h,p,f=function(t,e){function n(){this.constructor=t;}for(var i in e)g.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},g={}.hasOwnProperty,m=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};c=e.makeElement,l=e.objectsAreEqual,e.tagName,n=e.browser,a=e.keyEventIsKeyboardCommand,o=e.dataTransferIsWritable,i=e.dataTransferIsPlainText,u=e.config.keyNames,e.Level0InputController=function(n){function s(){s.__super__.constructor.apply(this,arguments),this.resetInputSummary();}var d;return f(s,n),d=0,s.prototype.setInputSummary=function(t){var e,n;null==t&&(t={}),this.inputSummary.eventName=this.eventName;for(e in t)n=t[e],this.inputSummary[e]=n;return this.inputSummary},s.prototype.resetInputSummary=function(){return this.inputSummary={}},s.prototype.reset=function(){return this.resetInputSummary(),e.selectionChangeObserver.reset()},s.prototype.elementDidMutate=function(t){var e;return this.isComposing()?null!=(e=this.delegate)&&"function"==typeof e.inputControllerDidAllowUnhandledInput?e.inputControllerDidAllowUnhandledInput():void 0:this.handleInput(function(){return this.mutationIsSignificant(t)&&(this.mutationIsExpected(t)?this.requestRender():this.requestReparse()),this.reset()})},s.prototype.mutationIsExpected=function(t){var e,n,i,o,r,s,a,u,c,l;return a=t.textAdded,u=t.textDeleted,this.inputSummary.preferDocument?!0:(e=null!=a?a===this.inputSummary.textAdded:!this.inputSummary.textAdded,n=null!=u?this.inputSummary.didDelete:!this.inputSummary.didDelete,c=("\n"===a||" \n"===a)&&!e,l="\n"===u&&!n,s=c&&!l||l&&!c,s&&(o=this.getSelectedRange())&&(i=c?a.replace(/\n$/,"").length||-1:(null!=a?a.length:void 0)||1,null!=(r=this.responder)?r.positionIsBlockBreak(o[1]+i):void 0)?!0:e&&n)},s.prototype.mutationIsSignificant=function(t){var e,n,i;return i=Object.keys(t).length>0,e=""===(null!=(n=this.compositionInput)?n.getEndData():void 0),i||!e},s.prototype.events={keydown:function(t){var n,i,o,r,s,c,l,h,p;if(this.isComposing()||this.resetInputSummary(),this.inputSummary.didInput=!0,r=u[t.keyCode]){for(i=this.keys,h=["ctrl","alt","shift","meta"],o=0,c=h.length;c>o;o++)l=h[o],t[l+"Key"]&&("ctrl"===l&&(l="control"),i=null!=i?i[l]:void 0);null!=(null!=i?i[r]:void 0)&&(this.setInputSummary({keyName:r}),e.selectionChangeObserver.reset(),i[r].call(this,t));}return a(t)&&(n=String.fromCharCode(t.keyCode).toLowerCase())&&(s=function(){var e,n,i,o;for(i=["alt","shift"],o=[],e=0,n=i.length;n>e;e++)l=i[e],t[l+"Key"]&&o.push(l);return o}(),s.push(n),null!=(p=this.delegate)?p.inputControllerDidReceiveKeyboardCommand(s):void 0)?t.preventDefault():void 0},keypress:function(t){var e,n,i;if(null==this.inputSummary.eventName&&!t.metaKey&&(!t.ctrlKey||t.altKey))return (i=p(t))?(null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.insertString(i),this.setInputSummary({textAdded:i,didDelete:this.selectionIsExpanded()})):void 0},textInput:function(t){var e,n,i,o;return e=t.data,o=this.inputSummary.textAdded,o&&o!==e&&o.toUpperCase()===e?(n=this.getSelectedRange(),this.setSelectedRange([n[0],n[1]+o.length]),null!=(i=this.responder)&&i.insertString(e),this.setInputSummary({textAdded:e}),this.setSelectedRange(n)):void 0},dragenter:function(t){return t.preventDefault()},dragstart:function(t){var e;return t.target,this.serializeSelectionToDataTransfer(t.dataTransfer),this.draggedRange=this.getSelectedRange(),null!=(e=this.delegate)&&"function"==typeof e.inputControllerDidStartDrag?e.inputControllerDidStartDrag():void 0},dragover:function(t){var e,n;return !this.draggedRange&&!this.canAcceptDataTransfer(t.dataTransfer)||(t.preventDefault(),e={x:t.clientX,y:t.clientY},l(e,this.draggingPoint))?void 0:(this.draggingPoint=e,null!=(n=this.delegate)&&"function"==typeof n.inputControllerDidReceiveDragOverPoint?n.inputControllerDidReceiveDragOverPoint(this.draggingPoint):void 0)},dragend:function(){var t;return null!=(t=this.delegate)&&"function"==typeof t.inputControllerDidCancelDrag&&t.inputControllerDidCancelDrag(),this.draggedRange=null,this.draggingPoint=null},drop:function(t){var n,i,o,r,s,a,u,c,l;return t.preventDefault(),o=null!=(s=t.dataTransfer)?s.files:void 0,r={x:t.clientX,y:t.clientY},null!=(a=this.responder)&&a.setLocationRangeFromPointRange(r),(null!=o?o.length:void 0)?this.attachFiles(o):this.draggedRange?(null!=(u=this.delegate)&&u.inputControllerWillMoveText(),null!=(c=this.responder)&&c.moveTextFromRange(this.draggedRange),this.draggedRange=null,this.requestRender()):(i=t.dataTransfer.getData("application/x-trix-document"))&&(n=e.Document.fromJSONString(i),null!=(l=this.responder)&&l.insertDocument(n),this.requestRender()),this.draggedRange=null,this.draggingPoint=null},cut:function(t){var e,n;return (null!=(e=this.responder)?e.selectionIsExpanded():void 0)&&(this.serializeSelectionToDataTransfer(t.clipboardData)&&t.preventDefault(),null!=(n=this.delegate)&&n.inputControllerWillCutText(),this.deleteInDirection("backward"),t.defaultPrevented)?this.requestRender():void 0},copy:function(t){var e;return (null!=(e=this.responder)?e.selectionIsExpanded():void 0)&&this.serializeSelectionToDataTransfer(t.clipboardData)?t.preventDefault():void 0},paste:function(t){var n,o,s,a,u,c,l,p,f,g,v,y,b,A,C,x,w,E,S,R,k,D,L;return n=null!=(p=t.clipboardData)?p:t.testClipboardData,l={clipboard:n},null==n||h(t)?void this.getPastedHTMLUsingHiddenElement(function(t){return function(e){var n,i,o;return l.type="text/html",l.html=e,null!=(n=t.delegate)&&n.inputControllerWillPaste(l),null!=(i=t.responder)&&i.insertHTML(l.html),t.requestRender(),null!=(o=t.delegate)?o.inputControllerDidPaste(l):void 0}}(this)):((a=n.getData("URL"))?(l.type="text/html",L=(c=n.getData("public.url-name"))?e.squishBreakableWhitespace(c).trim():a,l.html=this.createLinkHTML(a,L),null!=(f=this.delegate)&&f.inputControllerWillPaste(l),this.setInputSummary({textAdded:L,didDelete:this.selectionIsExpanded()}),null!=(C=this.responder)&&C.insertHTML(l.html),this.requestRender(),null!=(x=this.delegate)&&x.inputControllerDidPaste(l)):i(n)?(l.type="text/plain",l.string=n.getData("text/plain"),null!=(w=this.delegate)&&w.inputControllerWillPaste(l),this.setInputSummary({textAdded:l.string,didDelete:this.selectionIsExpanded()}),null!=(E=this.responder)&&E.insertString(l.string),this.requestRender(),null!=(S=this.delegate)&&S.inputControllerDidPaste(l)):(u=n.getData("text/html"))?(l.type="text/html",l.html=u,null!=(R=this.delegate)&&R.inputControllerWillPaste(l),null!=(k=this.responder)&&k.insertHTML(l.html),this.requestRender(),null!=(D=this.delegate)&&D.inputControllerDidPaste(l)):m.call(n.types,"Files")>=0&&(s=null!=(g=n.items)&&null!=(v=g[0])&&"function"==typeof v.getAsFile?v.getAsFile():void 0)&&(!s.name&&(o=r(s))&&(s.name="pasted-file-"+ ++d+"."+o),l.type="File",l.file=s,null!=(y=this.delegate)&&y.inputControllerWillAttachFiles(),null!=(b=this.responder)&&b.insertFile(l.file),this.requestRender(),null!=(A=this.delegate)&&A.inputControllerDidPaste(l)),t.preventDefault())},compositionstart:function(t){return this.getCompositionInput().start(t.data)},compositionupdate:function(t){return this.getCompositionInput().update(t.data)},compositionend:function(t){return this.getCompositionInput().end(t.data)},beforeinput:function(){return this.inputSummary.didInput=!0
	},input:function(t){return this.inputSummary.didInput=!0,t.stopPropagation()}},s.prototype.keys={backspace:function(t){var e;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),this.deleteInDirection("backward",t)},"delete":function(t){var e;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),this.deleteInDirection("forward",t)},"return":function(){var t,e;return this.setInputSummary({preferDocument:!0}),null!=(t=this.delegate)&&t.inputControllerWillPerformTyping(),null!=(e=this.responder)?e.insertLineBreak():void 0},tab:function(t){var e,n;return (null!=(e=this.responder)?e.canIncreaseNestingLevel():void 0)?(null!=(n=this.responder)&&n.increaseNestingLevel(),this.requestRender(),t.preventDefault()):void 0},left:function(t){var e;return this.selectionIsInCursorTarget()?(t.preventDefault(),null!=(e=this.responder)?e.moveCursorInDirection("backward"):void 0):void 0},right:function(t){var e;return this.selectionIsInCursorTarget()?(t.preventDefault(),null!=(e=this.responder)?e.moveCursorInDirection("forward"):void 0):void 0},control:{d:function(t){var e;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),this.deleteInDirection("forward",t)},h:function(t){var e;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),this.deleteInDirection("backward",t)},o:function(t){var e,n;return t.preventDefault(),null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.insertString("\n",{updatePosition:!1}),this.requestRender()}},shift:{"return":function(t){var e,n;return null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.insertString("\n"),this.requestRender(),t.preventDefault()},tab:function(t){var e,n;return (null!=(e=this.responder)?e.canDecreaseNestingLevel():void 0)?(null!=(n=this.responder)&&n.decreaseNestingLevel(),this.requestRender(),t.preventDefault()):void 0},left:function(t){return this.selectionIsInCursorTarget()?(t.preventDefault(),this.expandSelectionInDirection("backward")):void 0},right:function(t){return this.selectionIsInCursorTarget()?(t.preventDefault(),this.expandSelectionInDirection("forward")):void 0}},alt:{backspace:function(){var t;return this.setInputSummary({preferDocument:!1}),null!=(t=this.delegate)?t.inputControllerWillPerformTyping():void 0}},meta:{backspace:function(){var t;return this.setInputSummary({preferDocument:!1}),null!=(t=this.delegate)?t.inputControllerWillPerformTyping():void 0}}},s.prototype.getCompositionInput=function(){return this.isComposing()?this.compositionInput:this.compositionInput=new t(this)},s.prototype.isComposing=function(){return null!=this.compositionInput&&!this.compositionInput.isEnded()},s.prototype.deleteInDirection=function(t,e){var n;return (null!=(n=this.responder)?n.deleteInDirection(t):void 0)!==!1?this.setInputSummary({didDelete:!0}):e?(e.preventDefault(),this.requestRender()):void 0},s.prototype.serializeSelectionToDataTransfer=function(t){var n,i;if(o(t))return n=null!=(i=this.responder)?i.getSelectedDocument().toSerializableDocument():void 0,t.setData("application/x-trix-document",JSON.stringify(n)),t.setData("text/html",e.DocumentView.render(n).innerHTML),t.setData("text/plain",n.toString().replace(/\n$/,"")),!0},s.prototype.canAcceptDataTransfer=function(t){var e,n,i,o,r,s;for(s={},o=null!=(i=null!=t?t.types:void 0)?i:[],e=0,n=o.length;n>e;e++)r=o[e],s[r]=!0;return s.Files||s["application/x-trix-document"]||s["text/html"]||s["text/plain"]},s.prototype.getPastedHTMLUsingHiddenElement=function(t){var n,i,o;return i=this.getSelectedRange(),o={position:"absolute",left:window.pageXOffset+"px",top:window.pageYOffset+"px",opacity:0},n=c({style:o,tagName:"div",editable:!0}),document.body.appendChild(n),n.focus(),requestAnimationFrame(function(o){return function(){var r;return r=n.innerHTML,e.removeNode(n),o.setSelectedRange(i),t(r)}}(this))},s.proxyMethod("responder?.getSelectedRange"),s.proxyMethod("responder?.setSelectedRange"),s.proxyMethod("responder?.expandSelectionInDirection"),s.proxyMethod("responder?.selectionIsInCursorTarget"),s.proxyMethod("responder?.selectionIsExpanded"),s}(e.InputController),r=function(t){var e,n;return null!=(e=t.type)&&null!=(n=e.match(/\/(\w+)$/))?n[1]:void 0},s=null!=("function"==typeof" ".codePointAt?" ".codePointAt(0):void 0),p=function(t){var n;return t.key&&s&&t.key.codePointAt(0)===t.keyCode?t.key:(null===t.which?n=t.keyCode:0!==t.which&&0!==t.charCode&&(n=t.charCode),null!=n&&"escape"!==u[n]?e.UTF16String.fromCodepoints([n]).toString():void 0)},h=function(t){var e,n,i,o,r,s,u,c,l;if(u=t.clipboardData){if(m.call(u.types,"text/html")>=0){for(c=u.types,i=0,s=c.length;s>i;i++)if(l=c[i],e=/^CorePasteboardFlavorType/.test(l),n=/^dyn\./.test(l)&&u.getData(l),e||n)return !0;return !1}return o=m.call(u.types,"com.apple.webarchive")>=0,r=m.call(u.types,"com.apple.flat-rtfd")>=0,o||r}},t=function(t){function e(t){var e;this.inputController=t,e=this.inputController,this.responder=e.responder,this.delegate=e.delegate,this.inputSummary=e.inputSummary,this.data={};}return f(e,t),e.prototype.start=function(t){var e,n;return this.data.start=t,this.isSignificant()?("keypress"===this.inputSummary.eventName&&this.inputSummary.textAdded&&null!=(e=this.responder)&&e.deleteInDirection("left"),this.selectionIsExpanded()||(this.insertPlaceholder(),this.requestRender()),this.range=null!=(n=this.responder)?n.getSelectedRange():void 0):void 0},e.prototype.update=function(t){var e;return this.data.update=t,this.isSignificant()&&(e=this.selectPlaceholder())?(this.forgetPlaceholder(),this.range=e):void 0},e.prototype.end=function(t){var e,n,i,o;return this.data.end=t,this.isSignificant()?(this.forgetPlaceholder(),this.canApplyToDocument()?(this.setInputSummary({preferDocument:!0,didInput:!1}),null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.setSelectedRange(this.range),null!=(i=this.responder)&&i.insertString(this.data.end),null!=(o=this.responder)?o.setSelectedRange(this.range[0]+this.data.end.length):void 0):null!=this.data.start||null!=this.data.update?(this.requestReparse(),this.inputController.reset()):void 0):this.inputController.reset()},e.prototype.getEndData=function(){return this.data.end},e.prototype.isEnded=function(){return null!=this.getEndData()},e.prototype.isSignificant=function(){return n.composesExistingText?this.inputSummary.didInput:!0},e.prototype.canApplyToDocument=function(){var t,e;return 0===(null!=(t=this.data.start)?t.length:void 0)&&(null!=(e=this.data.end)?e.length:void 0)>0&&null!=this.range},e.proxyMethod("inputController.setInputSummary"),e.proxyMethod("inputController.requestRender"),e.proxyMethod("inputController.requestReparse"),e.proxyMethod("responder?.selectionIsExpanded"),e.proxyMethod("responder?.insertPlaceholder"),e.proxyMethod("responder?.selectPlaceholder"),e.proxyMethod("responder?.forgetPlaceholder"),e}(e.BasicObject);}.call(this),function(){var t,n,i,o=function(t,e){return function(){return t.apply(e,arguments)}},r=function(t,e){function n(){this.constructor=t;}for(var i in e)s.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty,a=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};t=e.dataTransferIsPlainText,n=e.keyEventIsKeyboardCommand,i=e.objectsAreEqual,e.Level2InputController=function(s){function u(){return this.render=o(this.render,this),u.__super__.constructor.apply(this,arguments)}var c,l,h,p,d,f;return r(u,s),u.prototype.elementDidMutate=function(){var t;return this.scheduledRender?this.composing&&null!=(t=this.delegate)&&"function"==typeof t.inputControllerDidAllowUnhandledInput?t.inputControllerDidAllowUnhandledInput():void 0:this.reparse()},u.prototype.scheduleRender=function(){return null!=this.scheduledRender?this.scheduledRender:this.scheduledRender=requestAnimationFrame(this.render)},u.prototype.render=function(){var t;return cancelAnimationFrame(this.scheduledRender),this.scheduledRender=null,this.composing||null!=(t=this.delegate)&&t.render(),"function"==typeof this.afterRender&&this.afterRender(),this.afterRender=null},u.prototype.reparse=function(){var t;return null!=(t=this.delegate)?t.reparse():void 0},u.prototype.events={keydown:function(t){var e,i,o,r;if(n(t)){if(e=l(t),null!=(r=this.delegate)?r.inputControllerDidReceiveKeyboardCommand(e):void 0)return t.preventDefault()}else if(o=t.key,t.altKey&&(o+="+Alt"),t.shiftKey&&(o+="+Shift"),i=this.keys[o])return this.withEvent(t,i)},paste:function(t){var e,n,i,o,r,s,a,u,c;return h(t)?(t.preventDefault(),this.attachFiles(t.clipboardData.files)):p(t)?(t.preventDefault(),n={type:"text/plain",string:t.clipboardData.getData("text/plain")},null!=(i=this.delegate)&&i.inputControllerWillPaste(n),null!=(o=this.responder)&&o.insertString(n.string),this.render(),null!=(r=this.delegate)?r.inputControllerDidPaste(n):void 0):(e=null!=(s=t.clipboardData)?s.getData("URL"):void 0)?(t.preventDefault(),n={type:"text/html",html:this.createLinkHTML(e)},null!=(a=this.delegate)&&a.inputControllerWillPaste(n),null!=(u=this.responder)&&u.insertHTML(n.html),this.render(),null!=(c=this.delegate)?c.inputControllerDidPaste(n):void 0):void 0},beforeinput:function(t){var e;return (e=this.inputTypes[t.inputType])?(this.withEvent(t,e),this.scheduleRender()):void 0},input:function(){return e.selectionChangeObserver.reset()},dragstart:function(t){var e,n;return (null!=(e=this.responder)?e.selectionContainsAttachments():void 0)?(t.dataTransfer.setData("application/x-trix-dragging",!0),this.dragging={range:null!=(n=this.responder)?n.getSelectedRange():void 0,point:d(t)}):void 0},dragenter:function(t){return c(t)?t.preventDefault():void 0},dragover:function(t){var e,n;if(this.dragging){if(t.preventDefault(),e=d(t),!i(e,this.dragging.point))return this.dragging.point=e,null!=(n=this.responder)?n.setLocationRangeFromPointRange(e):void 0}else if(c(t))return t.preventDefault()},drop:function(t){var e,n,i,o;return this.dragging?(t.preventDefault(),null!=(n=this.delegate)&&n.inputControllerWillMoveText(),null!=(i=this.responder)&&i.moveTextFromRange(this.dragging.range),this.dragging=null,this.scheduleRender()):c(t)?(t.preventDefault(),e=d(t),null!=(o=this.responder)&&o.setLocationRangeFromPointRange(e),this.attachFiles(t.dataTransfer.files)):void 0},dragend:function(){var t;return this.dragging?(null!=(t=this.responder)&&t.setSelectedRange(this.dragging.range),this.dragging=null):void 0},compositionend:function(){return this.composing?(this.composing=!1,this.scheduleRender()):void 0}},u.prototype.keys={ArrowLeft:function(){var t,e;return (null!=(t=this.responder)?t.shouldManageMovingCursorInDirection("backward"):void 0)?(this.event.preventDefault(),null!=(e=this.responder)?e.moveCursorInDirection("backward"):void 0):void 0},ArrowRight:function(){var t,e;return (null!=(t=this.responder)?t.shouldManageMovingCursorInDirection("forward"):void 0)?(this.event.preventDefault(),null!=(e=this.responder)?e.moveCursorInDirection("forward"):void 0):void 0},Backspace:function(){var t,e,n;return (null!=(t=this.responder)?t.shouldManageDeletingInDirection("backward"):void 0)?(this.event.preventDefault(),null!=(e=this.delegate)&&e.inputControllerWillPerformTyping(),null!=(n=this.responder)&&n.deleteInDirection("backward"),this.render()):void 0},Tab:function(){var t,e;return (null!=(t=this.responder)?t.canIncreaseNestingLevel():void 0)?(this.event.preventDefault(),null!=(e=this.responder)&&e.increaseNestingLevel(),this.render()):void 0},"Tab+Shift":function(){var t,e;return (null!=(t=this.responder)?t.canDecreaseNestingLevel():void 0)?(this.event.preventDefault(),null!=(e=this.responder)&&e.decreaseNestingLevel(),this.render()):void 0}},u.prototype.inputTypes={deleteByComposition:function(){return this.deleteInDirection("backward",{recordUndoEntry:!1})},deleteByCut:function(){return this.deleteInDirection("backward")},deleteByDrag:function(){return this.event.preventDefault(),this.withTargetDOMRange(function(){var t;return this.deleteByDragRange=null!=(t=this.responder)?t.getSelectedRange():void 0})},deleteCompositionText:function(){return this.deleteInDirection("backward",{recordUndoEntry:!1})},deleteContent:function(){return this.deleteInDirection("backward")},deleteContentBackward:function(){return this.deleteInDirection("backward")},deleteContentForward:function(){return this.deleteInDirection("forward")},deleteEntireSoftLine:function(){return this.deleteInDirection("forward")},deleteHardLineBackward:function(){return this.deleteInDirection("backward")},deleteHardLineForward:function(){return this.deleteInDirection("forward")},deleteSoftLineBackward:function(){return this.deleteInDirection("backward")},deleteSoftLineForward:function(){return this.deleteInDirection("forward")},deleteWordBackward:function(){return this.deleteInDirection("backward")},deleteWordForward:function(){return this.deleteInDirection("forward")},formatBackColor:function(){return this.activateAttributeIfSupported("backgroundColor",this.event.data)},formatBold:function(){return this.toggleAttributeIfSupported("bold")},formatFontColor:function(){return this.activateAttributeIfSupported("color",this.event.data)},formatFontName:function(){return this.activateAttributeIfSupported("font",this.event.data)},formatIndent:function(){var t;return (null!=(t=this.responder)?t.canIncreaseNestingLevel():void 0)?this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.increaseNestingLevel():void 0}):void 0},formatItalic:function(){return this.toggleAttributeIfSupported("italic")},formatJustifyCenter:function(){return this.toggleAttributeIfSupported("justifyCenter")},formatJustifyFull:function(){return this.toggleAttributeIfSupported("justifyFull")},formatJustifyLeft:function(){return this.toggleAttributeIfSupported("justifyLeft")},formatJustifyRight:function(){return this.toggleAttributeIfSupported("justifyRight")},formatOutdent:function(){var t;return (null!=(t=this.responder)?t.canDecreaseNestingLevel():void 0)?this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.decreaseNestingLevel():void 0}):void 0},formatRemove:function(){return this.withTargetDOMRange(function(){var t,e,n,i;i=[];for(t in null!=(e=this.responder)?e.getCurrentAttributes():void 0)i.push(null!=(n=this.responder)?n.removeCurrentAttribute(t):void 0);return i})},formatSetBlockTextDirection:function(){return this.activateAttributeIfSupported("blockDir",this.event.data)},formatSetInlineTextDirection:function(){return this.activateAttributeIfSupported("textDir",this.event.data)},formatStrikeThrough:function(){return this.toggleAttributeIfSupported("strike")},formatSubscript:function(){return this.toggleAttributeIfSupported("sub")},formatSuperscript:function(){return this.toggleAttributeIfSupported("sup")},formatUnderline:function(){return this.toggleAttributeIfSupported("underline")},historyRedo:function(){var t;return null!=(t=this.delegate)?t.inputControllerWillPerformRedo():void 0},historyUndo:function(){var t;return null!=(t=this.delegate)?t.inputControllerWillPerformUndo():void 0},insertCompositionText:function(){return this.composing=!0,this.insertString(this.event.data)},insertFromComposition:function(){return this.composing=!1,this.insertString(this.event.data)},insertFromDrop:function(){var t,e;return (t=this.deleteByDragRange)?(this.deleteByDragRange=null,null!=(e=this.delegate)&&e.inputControllerWillMoveText(),this.withTargetDOMRange(function(){var e;return null!=(e=this.responder)?e.moveTextFromRange(t):void 0})):void 0},insertFromPaste:function(){var n,i,o,r,s,a,u,c,l,h,p;return n=this.event.dataTransfer,s={dataTransfer:n},(i=n.getData("URL"))?(this.event.preventDefault(),s.type="text/html",p=(r=n.getData("public.url-name"))?e.squishBreakableWhitespace(r).trim():i,s.html=this.createLinkHTML(i,p),null!=(a=this.delegate)&&a.inputControllerWillPaste(s),this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.insertHTML(s.html):void 0}),this.afterRender=function(t){return function(){var e;return null!=(e=t.delegate)?e.inputControllerDidPaste(s):void 0}}(this)):t(n)?(s.type="text/plain",s.string=n.getData("text/plain"),null!=(u=this.delegate)&&u.inputControllerWillPaste(s),this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.insertString(s.string):void 0}),this.afterRender=function(t){return function(){var e;return null!=(e=t.delegate)?e.inputControllerDidPaste(s):void 0}}(this)):(o=n.getData("text/html"))?(this.event.preventDefault(),s.type="text/html",s.html=o,null!=(c=this.delegate)&&c.inputControllerWillPaste(s),this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.insertHTML(s.html):void 0}),this.afterRender=function(t){return function(){var e;return null!=(e=t.delegate)?e.inputControllerDidPaste(s):void 0}}(this)):(null!=(l=n.files)?l.length:void 0)?(s.type="File",s.file=n.files[0],null!=(h=this.delegate)&&h.inputControllerWillPaste(s),this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.insertFile(s.file):void 0}),this.afterRender=function(t){return function(){var e;return null!=(e=t.delegate)?e.inputControllerDidPaste(s):void 0}}(this)):void 0},insertFromYank:function(){return this.insertString(this.event.data)},insertLineBreak:function(){return this.insertString("\n")},insertLink:function(){return this.activateAttributeIfSupported("href",this.event.data)},insertOrderedList:function(){return this.toggleAttributeIfSupported("number")},insertParagraph:function(){var t;return null!=(t=this.delegate)&&t.inputControllerWillPerformTyping(),this.withTargetDOMRange(function(){var t;return null!=(t=this.responder)?t.insertLineBreak():void 0})},insertReplacementText:function(){return this.insertString(this.event.dataTransfer.getData("text/plain"),{updatePosition:!1})},insertText:function(){var t,e;return this.insertString(null!=(t=this.event.data)?t:null!=(e=this.event.dataTransfer)?e.getData("text/plain"):void 0)},insertTranspose:function(){return this.insertString(this.event.data)},insertUnorderedList:function(){return this.toggleAttributeIfSupported("bullet")}},u.prototype.insertString=function(t,e){var n;return null==t&&(t=""),null!=(n=this.delegate)&&n.inputControllerWillPerformTyping(),this.withTargetDOMRange(function(){var n;return null!=(n=this.responder)?n.insertString(t,e):void 0})},u.prototype.toggleAttributeIfSupported=function(t){var n;return a.call(e.getAllAttributeNames(),t)>=0?(null!=(n=this.delegate)&&n.inputControllerWillPerformFormatting(t),this.withTargetDOMRange(function(){var e;return null!=(e=this.responder)?e.toggleCurrentAttribute(t):void 0})):void 0},u.prototype.activateAttributeIfSupported=function(t,n){var i;return a.call(e.getAllAttributeNames(),t)>=0?(null!=(i=this.delegate)&&i.inputControllerWillPerformFormatting(t),this.withTargetDOMRange(function(){var e;return null!=(e=this.responder)?e.setCurrentAttribute(t,n):void 0})):void 0},u.prototype.deleteInDirection=function(t,e){var n,i,o,r;return o=(null!=e?e:{recordUndoEntry:!0}).recordUndoEntry,o&&null!=(r=this.delegate)&&r.inputControllerWillPerformTyping(),i=function(e){return function(){var n;return null!=(n=e.responder)?n.deleteInDirection(t):void 0}}(this),(n=this.getTargetDOMRange({minLength:2}))?this.withTargetDOMRange(n,i):i()},u.prototype.withTargetDOMRange=function(t,n){var i;return "function"==typeof t&&(n=t,t=this.getTargetDOMRange()),t?null!=(i=this.responder)?i.withTargetDOMRange(t,n.bind(this)):void 0:(e.selectionChangeObserver.reset(),n.call(this))},u.prototype.getTargetDOMRange=function(t){var e,n,i,o;return i=(null!=t?t:{minLength:0}).minLength,(o="function"==typeof(e=this.event).getTargetRanges?e.getTargetRanges():void 0)&&o.length&&(n=f(o[0]),0===i||n.toString().length>=i)?n:void 0},f=function(t){var e;return e=document.createRange(),e.setStart(t.startContainer,t.startOffset),e.setEnd(t.endContainer,t.endOffset),e},u.prototype.withEvent=function(t,e){var n;this.event=t;try{n=e.call(this);}finally{this.event=null;}return n},c=function(t){var e,n;return a.call(null!=(e=null!=(n=t.dataTransfer)?n.types:void 0)?e:[],"Files")>=0},h=function(t){var e;return (e=t.clipboardData)?a.call(e.types,"Files")>=0&&1===e.types.length&&e.files.length>=1:void 0},p=function(t){var e;return (e=t.clipboardData)?a.call(e.types,"text/plain")>=0&&1===e.types.length:void 0},l=function(t){var e;return e=[],t.altKey&&e.push("alt"),t.shiftKey&&e.push("shift"),e.push(t.key),e},d=function(t){return {x:t.clientX,y:t.clientY}},u}(e.InputController);}.call(this),function(){var t,n,i,o,r,s,a,u,c=function(t,e){return function(){return t.apply(e,arguments)}},l=function(t,e){function n(){this.constructor=t;}for(var i in e)h.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},h={}.hasOwnProperty;n=e.defer,i=e.handleEvent,s=e.makeElement,u=e.tagName,a=e.config,r=a.lang,t=a.css,o=a.keyNames,e.AttachmentEditorController=function(a){function h(t,e,n,i){this.attachmentPiece=t,this.element=e,this.container=n,this.options=null!=i?i:{},this.didBlurCaption=c(this.didBlurCaption,this),this.didChangeCaption=c(this.didChangeCaption,this),this.didInputCaption=c(this.didInputCaption,this),this.didKeyDownCaption=c(this.didKeyDownCaption,this),this.didClickActionButton=c(this.didClickActionButton,this),this.didClickToolbar=c(this.didClickToolbar,this),this.attachment=this.attachmentPiece.attachment,"a"===u(this.element)&&(this.element=this.element.firstChild),this.install();}var p;return l(h,a),p=function(t){return function(){var e;return e=t.apply(this,arguments),e["do"](),null==this.undos&&(this.undos=[]),this.undos.push(e.undo)}},h.prototype.install=function(){return this.makeElementMutable(),this.addToolbar(),this.attachment.isPreviewable()?this.installCaptionEditor():void 0},h.prototype.uninstall=function(){var t,e;for(this.savePendingCaption();e=this.undos.pop();)e();return null!=(t=this.delegate)?t.didUninstallAttachmentEditor(this):void 0},h.prototype.savePendingCaption=function(){var t,e,n;return null!=this.pendingCaption?(t=this.pendingCaption,this.pendingCaption=null,t?null!=(e=this.delegate)&&"function"==typeof e.attachmentEditorDidRequestUpdatingAttributesForAttachment?e.attachmentEditorDidRequestUpdatingAttributesForAttachment({caption:t},this.attachment):void 0:null!=(n=this.delegate)&&"function"==typeof n.attachmentEditorDidRequestRemovingAttributeForAttachment?n.attachmentEditorDidRequestRemovingAttributeForAttachment("caption",this.attachment):void 0):void 0},h.prototype.makeElementMutable=p(function(){return {"do":function(t){return function(){return t.element.dataset.trixMutable=!0}}(this),undo:function(t){return function(){return delete t.element.dataset.trixMutable}}(this)}}),h.prototype.addToolbar=p(function(){var n;return n=s({tagName:"div",className:t.attachmentToolbar,data:{trixMutable:!0},childNodes:s({tagName:"div",className:"trix-button-row",childNodes:s({tagName:"span",className:"trix-button-group trix-button-group--actions",childNodes:s({tagName:"button",className:"trix-button trix-button--remove",textContent:r.remove,attributes:{title:r.remove},data:{trixAction:"remove"}})})})}),this.attachment.isPreviewable()&&n.appendChild(s({tagName:"div",className:t.attachmentMetadataContainer,childNodes:s({tagName:"span",className:t.attachmentMetadata,childNodes:[s({tagName:"span",className:t.attachmentName,textContent:this.attachment.getFilename(),attributes:{title:this.attachment.getFilename()}}),s({tagName:"span",className:t.attachmentSize,textContent:this.attachment.getFormattedFilesize()})]})})),i("click",{onElement:n,withCallback:this.didClickToolbar}),i("click",{onElement:n,matchingSelector:"[data-trix-action]",withCallback:this.didClickActionButton}),{"do":function(t){return function(){return t.element.appendChild(n)}}(this),undo:function(){return function(){return e.removeNode(n)}}()}}),h.prototype.installCaptionEditor=p(function(){var o,a,u,c,l;return c=s({tagName:"textarea",className:t.attachmentCaptionEditor,attributes:{placeholder:r.captionPlaceholder},data:{trixMutable:!0}}),c.value=this.attachmentPiece.getCaption(),l=c.cloneNode(),l.classList.add("trix-autoresize-clone"),l.tabIndex=-1,o=function(){return l.value=c.value,c.style.height=l.scrollHeight+"px"},i("input",{onElement:c,withCallback:o}),i("input",{onElement:c,withCallback:this.didInputCaption}),i("keydown",{onElement:c,withCallback:this.didKeyDownCaption}),i("change",{onElement:c,withCallback:this.didChangeCaption}),i("blur",{onElement:c,withCallback:this.didBlurCaption}),u=this.element.querySelector("figcaption"),a=u.cloneNode(),{"do":function(e){return function(){return u.style.display="none",a.appendChild(c),a.appendChild(l),a.classList.add(t.attachmentCaption+"--editing"),u.parentElement.insertBefore(a,u),o(),e.options.editCaption?n(function(){return c.focus()}):void 0}}(this),undo:function(){return e.removeNode(a),u.style.display=null}}}),h.prototype.didClickToolbar=function(t){return t.preventDefault(),t.stopPropagation()},h.prototype.didClickActionButton=function(t){var n;switch(t.target.getAttribute("data-trix-action")){case"remove":return null!=(n=this.delegate)?n.attachmentEditorDidRequestRemovalOfAttachment(this.attachment):void 0}},h.prototype.didKeyDownCaption=function(t){var e;return "return"===o[t.keyCode]?(t.preventDefault(),this.savePendingCaption(),null!=(e=this.delegate)&&"function"==typeof e.attachmentEditorDidRequestDeselectingAttachment?e.attachmentEditorDidRequestDeselectingAttachment(this.attachment):void 0):void 0},h.prototype.didInputCaption=function(t){return this.pendingCaption=t.target.value.replace(/\s/g," ").trim()},h.prototype.didChangeCaption=function(){return this.savePendingCaption()},h.prototype.didBlurCaption=function(){return this.savePendingCaption()},h}(e.BasicObject);}.call(this),function(){var t,n,i,o=function(t,e){function n(){this.constructor=t;}for(var i in e)r.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;i=e.makeElement,t=e.config.css,e.AttachmentView=function(r){function s(){s.__super__.constructor.apply(this,arguments),this.attachment=this.object,this.attachment.uploadProgressDelegate=this,this.attachmentPiece=this.options.piece;}var a;return o(s,r),s.attachmentSelector="[data-trix-attachment]",s.prototype.createContentNodes=function(){return []},s.prototype.createNodes=function(){var e,n,o,r,s,u,c;if(e=r=i({tagName:"figure",className:this.getClassName(),data:this.getData(),editable:!1}),(n=this.getHref())&&(r=i({tagName:"a",editable:!1,attributes:{href:n,tabindex:-1}}),e.appendChild(r)),this.attachment.hasContent())r.innerHTML=this.attachment.getContent();else for(c=this.createContentNodes(),o=0,s=c.length;s>o;o++)u=c[o],r.appendChild(u);return r.appendChild(this.createCaptionElement()),this.attachment.isPending()&&(this.progressElement=i({tagName:"progress",attributes:{"class":t.attachmentProgress,value:this.attachment.getUploadProgress(),max:100},data:{trixMutable:!0,trixStoreKey:["progressElement",this.attachment.id].join("/")}}),e.appendChild(this.progressElement)),[a("left"),e,a("right")]},s.prototype.createCaptionElement=function(){var e,n,o,r,s,a,u;return o=i({tagName:"figcaption",className:t.attachmentCaption}),(e=this.attachmentPiece.getCaption())?(o.classList.add(t.attachmentCaption+"--edited"),o.textContent=e):(n=this.getCaptionConfig(),n.name&&(r=this.attachment.getFilename()),n.size&&(a=this.attachment.getFormattedFilesize()),r&&(s=i({tagName:"span",className:t.attachmentName,textContent:r}),o.appendChild(s)),a&&(r&&o.appendChild(document.createTextNode(" ")),u=i({tagName:"span",className:t.attachmentSize,textContent:a}),o.appendChild(u))),o},s.prototype.getClassName=function(){var e,n;return n=[t.attachment,t.attachment+"--"+this.attachment.getType()],(e=this.attachment.getExtension())&&n.push(t.attachment+"--"+e),n.join(" ")},s.prototype.getData=function(){var t,e;return e={trixAttachment:JSON.stringify(this.attachment),trixContentType:this.attachment.getContentType(),trixId:this.attachment.id},t=this.attachmentPiece.attributes,t.isEmpty()||(e.trixAttributes=JSON.stringify(t)),this.attachment.isPending()&&(e.trixSerialize=!1),e},s.prototype.getHref=function(){return n(this.attachment.getContent(),"a")?void 0:this.attachment.getHref()},s.prototype.getCaptionConfig=function(){var t,n,i;return i=this.attachment.getType(),t=e.copyObject(null!=(n=e.config.attachments[i])?n.caption:void 0),"file"===i&&(t.name=!0),t},s.prototype.findProgressElement=function(){var t;return null!=(t=this.findElement())?t.querySelector("progress"):void 0},a=function(t){return i({tagName:"span",textContent:e.ZERO_WIDTH_SPACE,data:{trixCursorTarget:t,trixSerialize:!1}})},s.prototype.attachmentDidChangeUploadProgress=function(){var t,e;return e=this.attachment.getUploadProgress(),null!=(t=this.findProgressElement())?t.value=e:void 0},s}(e.ObjectView),n=function(t,e){var n;return n=i("div"),n.innerHTML=null!=t?t:"",n.querySelector(e)};}.call(this),function(){var t,n=function(t,e){function n(){this.constructor=t;}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;t=e.makeElement,e.PreviewableAttachmentView=function(i){function o(){o.__super__.constructor.apply(this,arguments),this.attachment.previewDelegate=this;}return n(o,i),o.prototype.createContentNodes=function(){return this.image=t({tagName:"img",attributes:{src:""},data:{trixMutable:!0}}),this.refresh(this.image),[this.image]},o.prototype.createCaptionElement=function(){var t;return t=o.__super__.createCaptionElement.apply(this,arguments),t.textContent||t.setAttribute("data-trix-placeholder",e.config.lang.captionPlaceholder),t},o.prototype.refresh=function(t){var e;return null==t&&(t=null!=(e=this.findElement())?e.querySelector("img"):void 0),t?this.updateAttributesForImage(t):void 0},o.prototype.updateAttributesForImage=function(t){var e,n,i,o,r,s;return r=this.attachment.getURL(),n=this.attachment.getPreviewURL(),t.src=n||r,n===r?t.removeAttribute("data-trix-serialized-attributes"):(i=JSON.stringify({src:r}),t.setAttribute("data-trix-serialized-attributes",i)),s=this.attachment.getWidth(),e=this.attachment.getHeight(),null!=s&&(t.width=s),null!=e&&(t.height=e),o=["imageElement",this.attachment.id,t.src,t.width,t.height].join("/"),t.dataset.trixStoreKey=o},o.prototype.attachmentDidChangeAttributes=function(){return this.refresh(this.image),this.refresh()},o}(e.AttachmentView);}.call(this),function(){var t,n,i,o=function(t,e){function n(){this.constructor=t;}for(var i in e)r.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;i=e.makeElement,t=e.findInnerElement,n=e.getTextConfig,e.PieceView=function(r){function s(){var t;s.__super__.constructor.apply(this,arguments),this.piece=this.object,this.attributes=this.piece.getAttributes(),t=this.options,this.textConfig=t.textConfig,this.context=t.context,this.piece.attachment?this.attachment=this.piece.attachment:this.string=this.piece.toString();}var a;return o(s,r),s.prototype.createNodes=function(){var e,n,i,o,r,s;if(s=this.attachment?this.createAttachmentNodes():this.createStringNodes(),e=this.createElement()){for(i=t(e),n=0,o=s.length;o>n;n++)r=s[n],i.appendChild(r);s=[e];}return s},s.prototype.createAttachmentNodes=function(){var t,n;return t=this.attachment.isPreviewable()?e.PreviewableAttachmentView:e.AttachmentView,n=this.createChildView(t,this.piece.attachment,{piece:this.piece}),n.getNodes()},s.prototype.createStringNodes=function(){var t,e,n,o,s,a,u,c,l;if(null!=(u=this.textConfig)?u.plaintext:void 0)return [document.createTextNode(this.string)];for(a=[],c=this.string.split("\n"),n=e=0,o=c.length;o>e;n=++e)l=c[n],n>0&&(t=i("br"),a.push(t)),(l.length)&&(s=document.createTextNode(this.preserveSpaces(l)),a.push(s));return a},s.prototype.createElement=function(){var t,e,o,r,s,a,u,c,l;c={},a=this.attributes;for(r in a)if(l=a[r],(t=n(r))&&(t.tagName&&(s=i(t.tagName),o?(o.appendChild(s),o=s):e=o=s),t.styleProperty&&(c[t.styleProperty]=l),t.style)){u=t.style;for(r in u)l=u[r],c[r]=l;}if(Object.keys(c).length){null==e&&(e=i("span"));for(r in c)l=c[r],e.style[r]=l;}return e},s.prototype.createContainerElement=function(){var t,e,o,r,s;r=this.attributes;for(o in r)if(s=r[o],(e=n(o))&&e.groupTagName)return t={},t[o]=s,i(e.groupTagName,t)},a=e.NON_BREAKING_SPACE,s.prototype.preserveSpaces=function(t){return this.context.isLast&&(t=t.replace(/\ $/,a)),t=t.replace(/(\S)\ {3}(\S)/g,"$1 "+a+" $2").replace(/\ {2}/g,a+" ").replace(/\ {2}/g," "+a),(this.context.isFirst||this.context.followsWhitespace)&&(t=t.replace(/^\ /,a)),t},s}(e.ObjectView);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;
	}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.TextView=function(n){function i(){i.__super__.constructor.apply(this,arguments),this.text=this.object,this.textConfig=this.options.textConfig;}var o;return t(i,n),i.prototype.createNodes=function(){var t,n,i,r,s,a,u,c,l,h;for(a=[],c=e.ObjectGroup.groupObjects(this.getPieces()),r=c.length-1,i=n=0,s=c.length;s>n;i=++n)u=c[i],t={},0===i&&(t.isFirst=!0),i===r&&(t.isLast=!0),o(l)&&(t.followsWhitespace=!0),h=this.findOrCreateCachedChildView(e.PieceView,u,{textConfig:this.textConfig,context:t}),a.push.apply(a,h.getNodes()),l=u;return a},i.prototype.getPieces=function(){var t,e,n,i,o;for(i=this.text.getPieces(),o=[],t=0,e=i.length;e>t;t++)n=i[t],n.hasAttribute("blockBreak")||o.push(n);return o},o=function(t){return /\s$/.test(null!=t?t.toString():void 0)},i}(e.ObjectView);}.call(this),function(){var t,n,i,o=function(t,e){function n(){this.constructor=t;}for(var i in e)r.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;i=e.makeElement,n=e.getBlockConfig,t=e.config.css,e.BlockView=function(r){function s(){s.__super__.constructor.apply(this,arguments),this.block=this.object,this.attributes=this.block.getAttributes();}return o(s,r),s.prototype.createNodes=function(){var t,o,r,s,a,u,c,l,h,p,d;if(o=document.createComment("block"),c=[o],this.block.isEmpty()?c.push(i("br")):(p=null!=(l=n(this.block.getLastAttribute()))?l.text:void 0,d=this.findOrCreateCachedChildView(e.TextView,this.block.text,{textConfig:p}),c.push.apply(c,d.getNodes()),this.shouldAddExtraNewlineElement()&&c.push(i("br"))),this.attributes.length)return c;for(h=e.config.blockAttributes["default"].tagName,this.block.isRTL()&&(t={dir:"rtl"}),r=i({tagName:h,attributes:t}),s=0,a=c.length;a>s;s++)u=c[s],r.appendChild(u);return [r]},s.prototype.createContainerElement=function(e){var o,r,s,a,u;return o=this.attributes[e],u=n(o).tagName,0===e&&this.block.isRTL()&&(r={dir:"rtl"}),"attachmentGallery"===o&&(a=this.block.getBlockBreakPosition(),s=t.attachmentGallery+" "+t.attachmentGallery+"--"+a),i({tagName:u,className:s,attributes:r})},s.prototype.shouldAddExtraNewlineElement=function(){return /\n\n$/.test(this.block.toString())},s}(e.ObjectView);}.call(this),function(){var t,n,i=function(t,e){function n(){this.constructor=t;}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},o={}.hasOwnProperty;t=e.defer,n=e.makeElement,e.DocumentView=function(o){function r(){r.__super__.constructor.apply(this,arguments),this.element=this.options.element,this.elementStore=new e.ElementStore,this.setDocument(this.object);}var s,a,u;return i(r,o),r.render=function(t){var e,i;return e=n("div"),i=new this(t,{element:e}),i.render(),i.sync(),e},r.prototype.setDocument=function(t){return t.isEqualTo(this.document)?void 0:this.document=this.object=t},r.prototype.render=function(){var t,i,o,r,s,a,u;if(this.childViews=[],this.shadowElement=n("div"),!this.document.isEmpty()){for(s=e.ObjectGroup.groupObjects(this.document.getBlocks(),{asTree:!0}),a=[],t=0,i=s.length;i>t;t++)r=s[t],u=this.findOrCreateCachedChildView(e.BlockView,r),a.push(function(){var t,e,n,i;for(n=u.getNodes(),i=[],t=0,e=n.length;e>t;t++)o=n[t],i.push(this.shadowElement.appendChild(o));return i}.call(this));return a}},r.prototype.isSynced=function(){return s(this.shadowElement,this.element)},r.prototype.sync=function(){var t;for(t=this.createDocumentFragmentForSync();this.element.lastChild;)this.element.removeChild(this.element.lastChild);return this.element.appendChild(t),this.didSync()},r.prototype.didSync=function(){return this.elementStore.reset(a(this.element)),t(function(t){return function(){return t.garbageCollectCachedViews()}}(this))},r.prototype.createDocumentFragmentForSync=function(){var t,e,n,i,o,r,s,u,c,l;for(e=document.createDocumentFragment(),u=this.shadowElement.childNodes,n=0,o=u.length;o>n;n++)s=u[n],e.appendChild(s.cloneNode(!0));for(c=a(e),i=0,r=c.length;r>i;i++)t=c[i],(l=this.elementStore.remove(t))&&t.parentNode.replaceChild(l,t);return e},a=function(t){return t.querySelectorAll("[data-trix-store-key]")},s=function(t,e){return u(t.innerHTML)===u(e.innerHTML)},u=function(t){return t.replace(/&nbsp;/g," ")},r}(e.ObjectView);}.call(this),function(){var t,n,i,o,r,s=function(t,e){return function(){return t.apply(e,arguments)}},a=function(t,e){function n(){this.constructor=t;}for(var i in e)u.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},u={}.hasOwnProperty;i=e.findClosestElementFromNode,o=e.handleEvent,r=e.innerElementIsActive,n=e.defer,t=e.AttachmentView.attachmentSelector,e.CompositionController=function(u){function c(n,i){this.element=n,this.composition=i,this.didClickAttachment=s(this.didClickAttachment,this),this.didBlur=s(this.didBlur,this),this.didFocus=s(this.didFocus,this),this.documentView=new e.DocumentView(this.composition.document,{element:this.element}),o("focus",{onElement:this.element,withCallback:this.didFocus}),o("blur",{onElement:this.element,withCallback:this.didBlur}),o("click",{onElement:this.element,matchingSelector:"a[contenteditable=false]",preventDefault:!0}),o("mousedown",{onElement:this.element,matchingSelector:t,withCallback:this.didClickAttachment}),o("click",{onElement:this.element,matchingSelector:"a"+t,preventDefault:!0});}return a(c,u),c.prototype.didFocus=function(){var t,e,n;return t=function(t){return function(){var e;return t.focused?void 0:(t.focused=!0,null!=(e=t.delegate)&&"function"==typeof e.compositionControllerDidFocus?e.compositionControllerDidFocus():void 0)}}(this),null!=(e=null!=(n=this.blurPromise)?n.then(t):void 0)?e:t()},c.prototype.didBlur=function(){return this.blurPromise=new Promise(function(t){return function(e){return n(function(){var n;return r(t.element)||(t.focused=null,null!=(n=t.delegate)&&"function"==typeof n.compositionControllerDidBlur&&n.compositionControllerDidBlur()),t.blurPromise=null,e()})}}(this))},c.prototype.didClickAttachment=function(t,e){var n,o,r;return n=this.findAttachmentForElement(e),o=null!=i(t.target,{matchingSelector:"figcaption"}),null!=(r=this.delegate)&&"function"==typeof r.compositionControllerDidSelectAttachment?r.compositionControllerDidSelectAttachment(n,{editCaption:o}):void 0},c.prototype.getSerializableElement=function(){return this.isEditingAttachment()?this.documentView.shadowElement:this.element},c.prototype.render=function(){var t,e,n;return this.revision!==this.composition.revision&&(this.documentView.setDocument(this.composition.document),this.documentView.render(),this.revision=this.composition.revision),this.canSyncDocumentView()&&!this.documentView.isSynced()&&(null!=(t=this.delegate)&&"function"==typeof t.compositionControllerWillSyncDocumentView&&t.compositionControllerWillSyncDocumentView(),this.documentView.sync(),null!=(e=this.delegate)&&"function"==typeof e.compositionControllerDidSyncDocumentView&&e.compositionControllerDidSyncDocumentView()),null!=(n=this.delegate)&&"function"==typeof n.compositionControllerDidRender?n.compositionControllerDidRender():void 0},c.prototype.rerenderViewForObject=function(t){return this.invalidateViewForObject(t),this.render()},c.prototype.invalidateViewForObject=function(t){return this.documentView.invalidateViewForObject(t)},c.prototype.isViewCachingEnabled=function(){return this.documentView.isViewCachingEnabled()},c.prototype.enableViewCaching=function(){return this.documentView.enableViewCaching()},c.prototype.disableViewCaching=function(){return this.documentView.disableViewCaching()},c.prototype.refreshViewCache=function(){return this.documentView.garbageCollectCachedViews()},c.prototype.isEditingAttachment=function(){return null!=this.attachmentEditor},c.prototype.installAttachmentEditorForAttachment=function(t,n){var i,o,r;if((null!=(r=this.attachmentEditor)?r.attachment:void 0)!==t&&(o=this.documentView.findElementForObject(t)))return this.uninstallAttachmentEditor(),i=this.composition.document.getAttachmentPieceForAttachment(t),this.attachmentEditor=new e.AttachmentEditorController(i,o,this.element,n),this.attachmentEditor.delegate=this},c.prototype.uninstallAttachmentEditor=function(){var t;return null!=(t=this.attachmentEditor)?t.uninstall():void 0},c.prototype.didUninstallAttachmentEditor=function(){return this.attachmentEditor=null,this.render()},c.prototype.attachmentEditorDidRequestUpdatingAttributesForAttachment=function(t,e){var n;return null!=(n=this.delegate)&&"function"==typeof n.compositionControllerWillUpdateAttachment&&n.compositionControllerWillUpdateAttachment(e),this.composition.updateAttributesForAttachment(t,e)},c.prototype.attachmentEditorDidRequestRemovingAttributeForAttachment=function(t,e){var n;return null!=(n=this.delegate)&&"function"==typeof n.compositionControllerWillUpdateAttachment&&n.compositionControllerWillUpdateAttachment(e),this.composition.removeAttributeForAttachment(t,e)},c.prototype.attachmentEditorDidRequestRemovalOfAttachment=function(t){var e;return null!=(e=this.delegate)&&"function"==typeof e.compositionControllerDidRequestRemovalOfAttachment?e.compositionControllerDidRequestRemovalOfAttachment(t):void 0},c.prototype.attachmentEditorDidRequestDeselectingAttachment=function(t){var e;return null!=(e=this.delegate)&&"function"==typeof e.compositionControllerDidRequestDeselectingAttachment?e.compositionControllerDidRequestDeselectingAttachment(t):void 0},c.prototype.canSyncDocumentView=function(){return !this.isEditingAttachment()},c.prototype.findAttachmentForElement=function(t){return this.composition.document.getAttachmentById(parseInt(t.dataset.trixId,10))},c}(e.BasicObject);}.call(this),function(){var t,n,i,o=function(t,e){return function(){return t.apply(e,arguments)}},r=function(t,e){function n(){this.constructor=t;}for(var i in e)s.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty;n=e.handleEvent,i=e.triggerEvent,t=e.findClosestElementFromNode,e.ToolbarController=function(e){function s(t){this.element=t,this.didKeyDownDialogInput=o(this.didKeyDownDialogInput,this),this.didClickDialogButton=o(this.didClickDialogButton,this),this.didClickAttributeButton=o(this.didClickAttributeButton,this),this.didClickActionButton=o(this.didClickActionButton,this),this.attributes={},this.actions={},this.resetDialogInputs(),n("mousedown",{onElement:this.element,matchingSelector:a,withCallback:this.didClickActionButton}),n("mousedown",{onElement:this.element,matchingSelector:c,withCallback:this.didClickAttributeButton}),n("click",{onElement:this.element,matchingSelector:v,preventDefault:!0}),n("click",{onElement:this.element,matchingSelector:l,withCallback:this.didClickDialogButton}),n("keydown",{onElement:this.element,matchingSelector:h,withCallback:this.didKeyDownDialogInput});}var a,u,c,l,h,p,d,f,g,m,v;return r(s,e),c="[data-trix-attribute]",a="[data-trix-action]",v=c+", "+a,p="[data-trix-dialog]",u=p+"[data-trix-active]",l=p+" [data-trix-method]",h=p+" [data-trix-input]",s.prototype.didClickActionButton=function(t,e){var n,i,o;return null!=(i=this.delegate)&&i.toolbarDidClickButton(),t.preventDefault(),n=d(e),this.getDialog(n)?this.toggleDialog(n):null!=(o=this.delegate)?o.toolbarDidInvokeAction(n):void 0},s.prototype.didClickAttributeButton=function(t,e){var n,i,o;return null!=(i=this.delegate)&&i.toolbarDidClickButton(),t.preventDefault(),n=f(e),this.getDialog(n)?this.toggleDialog(n):null!=(o=this.delegate)&&o.toolbarDidToggleAttribute(n),this.refreshAttributeButtons()},s.prototype.didClickDialogButton=function(e,n){var i,o;return i=t(n,{matchingSelector:p}),o=n.getAttribute("data-trix-method"),this[o].call(this,i)},s.prototype.didKeyDownDialogInput=function(t,e){var n,i;return 13===t.keyCode&&(t.preventDefault(),n=e.getAttribute("name"),i=this.getDialog(n),this.setAttribute(i)),27===t.keyCode?(t.preventDefault(),this.hideDialog()):void 0},s.prototype.updateActions=function(t){return this.actions=t,this.refreshActionButtons()},s.prototype.refreshActionButtons=function(){return this.eachActionButton(function(t){return function(e,n){return e.disabled=t.actions[n]===!1}}(this))},s.prototype.eachActionButton=function(t){var e,n,i,o,r;for(o=this.element.querySelectorAll(a),r=[],n=0,i=o.length;i>n;n++)e=o[n],r.push(t(e,d(e)));return r},s.prototype.updateAttributes=function(t){return this.attributes=t,this.refreshAttributeButtons()},s.prototype.refreshAttributeButtons=function(){return this.eachAttributeButton(function(t){return function(e,n){return e.disabled=t.attributes[n]===!1,t.attributes[n]||t.dialogIsVisible(n)?(e.setAttribute("data-trix-active",""),e.classList.add("trix-active")):(e.removeAttribute("data-trix-active"),e.classList.remove("trix-active"))}}(this))},s.prototype.eachAttributeButton=function(t){var e,n,i,o,r;for(o=this.element.querySelectorAll(c),r=[],n=0,i=o.length;i>n;n++)e=o[n],r.push(t(e,f(e)));return r},s.prototype.applyKeyboardCommand=function(t){var e,n,o,r,s,a,u;for(s=JSON.stringify(t.sort()),u=this.element.querySelectorAll("[data-trix-key]"),r=0,a=u.length;a>r;r++)if(e=u[r],o=e.getAttribute("data-trix-key").split("+"),n=JSON.stringify(o.sort()),n===s)return i("mousedown",{onElement:e}),!0;return !1},s.prototype.dialogIsVisible=function(t){var e;return (e=this.getDialog(t))?e.hasAttribute("data-trix-active"):void 0},s.prototype.toggleDialog=function(t){return this.dialogIsVisible(t)?this.hideDialog():this.showDialog(t)},s.prototype.showDialog=function(t){var e,n,i,o,r,s,a,u,c,l;for(this.hideDialog(),null!=(a=this.delegate)&&a.toolbarWillShowDialog(),i=this.getDialog(t),i.setAttribute("data-trix-active",""),i.classList.add("trix-active"),u=i.querySelectorAll("input[disabled]"),o=0,s=u.length;s>o;o++)n=u[o],n.removeAttribute("disabled");return (e=f(i))&&(r=m(i,t))&&(r.value=null!=(c=this.attributes[e])?c:"",r.select()),null!=(l=this.delegate)?l.toolbarDidShowDialog(t):void 0},s.prototype.setAttribute=function(t){var e,n,i;return e=f(t),n=m(t,e),n.willValidate&&!n.checkValidity()?(n.setAttribute("data-trix-validate",""),n.classList.add("trix-validate"),n.focus()):(null!=(i=this.delegate)&&i.toolbarDidUpdateAttribute(e,n.value),this.hideDialog())},s.prototype.removeAttribute=function(t){var e,n;return e=f(t),null!=(n=this.delegate)&&n.toolbarDidRemoveAttribute(e),this.hideDialog()},s.prototype.hideDialog=function(){var t,e;return (t=this.element.querySelector(u))?(t.removeAttribute("data-trix-active"),t.classList.remove("trix-active"),this.resetDialogInputs(),null!=(e=this.delegate)?e.toolbarDidHideDialog(g(t)):void 0):void 0},s.prototype.resetDialogInputs=function(){var t,e,n,i,o;for(i=this.element.querySelectorAll(h),o=[],t=0,n=i.length;n>t;t++)e=i[t],e.setAttribute("disabled","disabled"),e.removeAttribute("data-trix-validate"),o.push(e.classList.remove("trix-validate"));return o},s.prototype.getDialog=function(t){return this.element.querySelector("[data-trix-dialog="+t+"]")},m=function(t,e){return null==e&&(e=f(t)),t.querySelector("[data-trix-input][name='"+e+"']")},d=function(t){return t.getAttribute("data-trix-action")},f=function(t){var e;return null!=(e=t.getAttribute("data-trix-attribute"))?e:t.getAttribute("data-trix-dialog-attribute")},g=function(t){return t.getAttribute("data-trix-dialog")},s}(e.BasicObject);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ImagePreloadOperation=function(e){function n(t){this.url=t;}return t(n,e),n.prototype.perform=function(t){var e;return e=new Image,e.onload=function(n){return function(){return e.width=n.width=e.naturalWidth,e.height=n.height=e.naturalHeight,t(!0,e)}}(this),e.onerror=function(){return t(!1)},e.src=this.url},n}(e.Operation);}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}},n=function(t,e){function n(){this.constructor=t;}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;e.Attachment=function(i){function o(n){null==n&&(n={}),this.releaseFile=t(this.releaseFile,this),o.__super__.constructor.apply(this,arguments),this.attributes=e.Hash.box(n),this.didChangeAttributes();}return n(o,i),o.previewablePattern=/^image(\/(gif|png|jpe?g)|$)/,o.attachmentForFile=function(t){var e,n;return n=this.attributesForFile(t),e=new this(n),e.setFile(t),e},o.attributesForFile=function(t){return new e.Hash({filename:t.name,filesize:t.size,contentType:t.type})},o.fromJSON=function(t){return new this(t)},o.prototype.getAttribute=function(t){return this.attributes.get(t)},o.prototype.hasAttribute=function(t){return this.attributes.has(t)},o.prototype.getAttributes=function(){return this.attributes.toObject()},o.prototype.setAttributes=function(t){var e,n,i;return null==t&&(t={}),e=this.attributes.merge(t),this.attributes.isEqualTo(e)?void 0:(this.attributes=e,this.didChangeAttributes(),null!=(n=this.previewDelegate)&&"function"==typeof n.attachmentDidChangeAttributes&&n.attachmentDidChangeAttributes(this),null!=(i=this.delegate)&&"function"==typeof i.attachmentDidChangeAttributes?i.attachmentDidChangeAttributes(this):void 0)},o.prototype.didChangeAttributes=function(){return this.isPreviewable()?this.preloadURL():void 0},o.prototype.isPending=function(){return null!=this.file&&!(this.getURL()||this.getHref())},o.prototype.isPreviewable=function(){return this.attributes.has("previewable")?this.attributes.get("previewable"):this.constructor.previewablePattern.test(this.getContentType())},o.prototype.getType=function(){return this.hasContent()?"content":this.isPreviewable()?"preview":"file"},o.prototype.getURL=function(){return this.attributes.get("url")},o.prototype.getHref=function(){return this.attributes.get("href")},o.prototype.getFilename=function(){var t;return null!=(t=this.attributes.get("filename"))?t:""},o.prototype.getFilesize=function(){return this.attributes.get("filesize")},o.prototype.getFormattedFilesize=function(){var t;return t=this.attributes.get("filesize"),"number"==typeof t?e.config.fileSize.formatter(t):""},o.prototype.getExtension=function(){var t;return null!=(t=this.getFilename().match(/\.(\w+)$/))?t[1].toLowerCase():void 0},o.prototype.getContentType=function(){return this.attributes.get("contentType")},o.prototype.hasContent=function(){return this.attributes.has("content")},o.prototype.getContent=function(){return this.attributes.get("content")},o.prototype.getWidth=function(){return this.attributes.get("width")},o.prototype.getHeight=function(){return this.attributes.get("height")},o.prototype.getFile=function(){return this.file},o.prototype.setFile=function(t){return this.file=t,this.isPreviewable()?this.preloadFile():void 0},o.prototype.releaseFile=function(){return this.releasePreloadedFile(),this.file=null},o.prototype.getUploadProgress=function(){var t;return null!=(t=this.uploadProgress)?t:0},o.prototype.setUploadProgress=function(t){var e;return this.uploadProgress!==t?(this.uploadProgress=t,null!=(e=this.uploadProgressDelegate)&&"function"==typeof e.attachmentDidChangeUploadProgress?e.attachmentDidChangeUploadProgress(this):void 0):void 0},o.prototype.toJSON=function(){return this.getAttributes()},o.prototype.getCacheKey=function(){return [o.__super__.getCacheKey.apply(this,arguments),this.attributes.getCacheKey(),this.getPreviewURL()].join("/")},o.prototype.getPreviewURL=function(){return this.previewURL||this.preloadingURL},o.prototype.setPreviewURL=function(t){var e,n;return t!==this.getPreviewURL()?(this.previewURL=t,null!=(e=this.previewDelegate)&&"function"==typeof e.attachmentDidChangeAttributes&&e.attachmentDidChangeAttributes(this),null!=(n=this.delegate)&&"function"==typeof n.attachmentDidChangePreviewURL?n.attachmentDidChangePreviewURL(this):void 0):void 0},o.prototype.preloadURL=function(){return this.preload(this.getURL(),this.releaseFile)},o.prototype.preloadFile=function(){return this.file?(this.fileObjectURL=URL.createObjectURL(this.file),this.preload(this.fileObjectURL)):void 0},o.prototype.releasePreloadedFile=function(){return this.fileObjectURL?(URL.revokeObjectURL(this.fileObjectURL),this.fileObjectURL=null):void 0},o.prototype.preload=function(t,n){var i;return t&&t!==this.getPreviewURL()?(this.preloadingURL=t,i=new e.ImagePreloadOperation(t),i.then(function(e){return function(i){var o,r;return r=i.width,o=i.height,e.getWidth()&&e.getHeight()||e.setAttributes({width:r,height:o}),e.preloadingURL=null,e.setPreviewURL(t),"function"==typeof n?n():void 0}}(this))["catch"](function(t){return function(){return t.preloadingURL=null,"function"==typeof n?n():void 0}}(this))):void 0},o}(e.Object);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Piece=function(n){function i(t,n){null==n&&(n={}),i.__super__.constructor.apply(this,arguments),this.attributes=e.Hash.box(n);}return t(i,n),i.types={},i.registerType=function(t,e){return e.type=t,this.types[t]=e},i.fromJSON=function(t){var e;return (e=this.types[t.type])?e.fromJSON(t):void 0},i.prototype.copyWithAttributes=function(t){return new this.constructor(this.getValue(),t)},i.prototype.copyWithAdditionalAttributes=function(t){return this.copyWithAttributes(this.attributes.merge(t))},i.prototype.copyWithoutAttribute=function(t){return this.copyWithAttributes(this.attributes.remove(t))},i.prototype.copy=function(){return this.copyWithAttributes(this.attributes)},i.prototype.getAttribute=function(t){return this.attributes.get(t)},i.prototype.getAttributesHash=function(){return this.attributes},i.prototype.getAttributes=function(){return this.attributes.toObject()},i.prototype.getCommonAttributes=function(){var t,e,n;return (n=pieceList.getPieceAtIndex(0))?(t=n.attributes,e=t.getKeys(),pieceList.eachPiece(function(n){return e=t.getKeysCommonToHash(n.attributes),t=t.slice(e)}),t.toObject()):{}},i.prototype.hasAttribute=function(t){return this.attributes.has(t)},i.prototype.hasSameStringValueAsPiece=function(t){return null!=t&&this.toString()===t.toString()},i.prototype.hasSameAttributesAsPiece=function(t){return null!=t&&(this.attributes===t.attributes||this.attributes.isEqualTo(t.attributes))},i.prototype.isBlockBreak=function(){return !1},i.prototype.isEqualTo=function(t){return i.__super__.isEqualTo.apply(this,arguments)||this.hasSameConstructorAs(t)&&this.hasSameStringValueAsPiece(t)&&this.hasSameAttributesAsPiece(t)},i.prototype.isEmpty=function(){return 0===this.length},i.prototype.isSerializable=function(){return !0},i.prototype.toJSON=function(){return {type:this.constructor.type,attributes:this.getAttributes()}},i.prototype.contentsForInspection=function(){return {type:this.constructor.type,attributes:this.attributes.inspect()}},i.prototype.canBeGrouped=function(){return this.hasAttribute("href")},i.prototype.canBeGroupedWith=function(t){return this.getAttribute("href")===t.getAttribute("href")},i.prototype.getLength=function(){return this.length},i.prototype.canBeConsolidatedWith=function(){return !1},i}(e.Object);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Piece.registerType("attachment",e.AttachmentPiece=function(n){function i(t){this.attachment=t,i.__super__.constructor.apply(this,arguments),this.length=1,this.ensureAttachmentExclusivelyHasAttribute("href"),this.attachment.hasContent()||this.removeProhibitedAttributes();}return t(i,n),i.fromJSON=function(t){return new this(e.Attachment.fromJSON(t.attachment),t.attributes)},i.permittedAttributes=["caption","presentation"],i.prototype.ensureAttachmentExclusivelyHasAttribute=function(t){return this.hasAttribute(t)?(this.attachment.hasAttribute(t)||this.attachment.setAttributes(this.attributes.slice(t)),this.attributes=this.attributes.remove(t)):void 0},i.prototype.removeProhibitedAttributes=function(){var t;return t=this.attributes.slice(this.constructor.permittedAttributes),t.isEqualTo(this.attributes)?void 0:this.attributes=t},i.prototype.getValue=function(){return this.attachment},i.prototype.isSerializable=function(){return !this.attachment.isPending()},i.prototype.getCaption=function(){var t;return null!=(t=this.attributes.get("caption"))?t:""},i.prototype.isEqualTo=function(t){var e;return i.__super__.isEqualTo.apply(this,arguments)&&this.attachment.id===(null!=t&&null!=(e=t.attachment)?e.id:void 0)},i.prototype.toString=function(){return e.OBJECT_REPLACEMENT_CHARACTER},i.prototype.toJSON=function(){var t;return t=i.__super__.toJSON.apply(this,arguments),t.attachment=this.attachment,t},i.prototype.getCacheKey=function(){return [i.__super__.getCacheKey.apply(this,arguments),this.attachment.getCacheKey()].join("/")},i.prototype.toConsole=function(){return JSON.stringify(this.toString())},i}(e.Piece));}.call(this),function(){var t,n=function(t,e){function n(){this.constructor=t;}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;t=e.normalizeNewlines,e.Piece.registerType("string",e.StringPiece=function(e){function i(e){i.__super__.constructor.apply(this,arguments),this.string=t(e),this.length=this.string.length;}return n(i,e),i.fromJSON=function(t){return new this(t.string,t.attributes)},i.prototype.getValue=function(){return this.string},i.prototype.toString=function(){return this.string.toString()},i.prototype.isBlockBreak=function(){return "\n"===this.toString()&&this.getAttribute("blockBreak")===!0},i.prototype.toJSON=function(){var t;return t=i.__super__.toJSON.apply(this,arguments),t.string=this.string,t},i.prototype.canBeConsolidatedWith=function(t){return null!=t&&this.hasSameConstructorAs(t)&&this.hasSameAttributesAsPiece(t)},i.prototype.consolidateWith=function(t){return new this.constructor(this.toString()+t.toString(),this.attributes)},i.prototype.splitAtOffset=function(t){var e,n;return 0===t?(e=null,n=this):t===this.length?(e=this,n=null):(e=new this.constructor(this.string.slice(0,t),this.attributes),n=new this.constructor(this.string.slice(t),this.attributes)),[e,n]},i.prototype.toConsole=function(){var t;return t=this.string,t.length>15&&(t=t.slice(0,14)+"\u2026"),JSON.stringify(t.toString())},i}(e.Piece));}.call(this),function(){var t,n=function(t,e){function n(){this.constructor=t;}for(var o in e)i.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty,o=[].slice;t=e.spliceArray,e.SplittableList=function(e){function i(t){null==t&&(t=[]),i.__super__.constructor.apply(this,arguments),this.objects=t.slice(0),this.length=this.objects.length;}var r,s,a;return n(i,e),i.box=function(t){return t instanceof this?t:new this(t)},i.prototype.indexOf=function(t){return this.objects.indexOf(t)},i.prototype.splice=function(){var e;return e=1<=arguments.length?o.call(arguments,0):[],new this.constructor(t.apply(null,[this.objects].concat(o.call(e))))},i.prototype.eachObject=function(t){var e,n,i,o,r,s;for(r=this.objects,s=[],n=e=0,i=r.length;i>e;n=++e)o=r[n],s.push(t(o,n));return s},i.prototype.insertObjectAtIndex=function(t,e){return this.splice(e,0,t)},i.prototype.insertSplittableListAtIndex=function(t,e){return this.splice.apply(this,[e,0].concat(o.call(t.objects)))},i.prototype.insertSplittableListAtPosition=function(t,e){var n,i,o;return o=this.splitObjectAtPosition(e),i=o[0],n=o[1],new this.constructor(i).insertSplittableListAtIndex(t,n)},i.prototype.editObjectAtIndex=function(t,e){return this.replaceObjectAtIndex(e(this.objects[t]),t)},i.prototype.replaceObjectAtIndex=function(t,e){return this.splice(e,1,t)},i.prototype.removeObjectAtIndex=function(t){return this.splice(t,1)},i.prototype.getObjectAtIndex=function(t){return this.objects[t]},i.prototype.getSplittableListInRange=function(t){var e,n,i,o;return i=this.splitObjectsAtRange(t),n=i[0],e=i[1],o=i[2],new this.constructor(n.slice(e,o+1))},i.prototype.selectSplittableList=function(t){var e,n;return n=function(){var n,i,o,r;for(o=this.objects,r=[],n=0,i=o.length;i>n;n++)e=o[n],t(e)&&r.push(e);return r}.call(this),new this.constructor(n)},i.prototype.removeObjectsInRange=function(t){var e,n,i,o;return i=this.splitObjectsAtRange(t),n=i[0],e=i[1],o=i[2],new this.constructor(n).splice(e,o-e+1)},i.prototype.transformObjectsInRange=function(t,e){var n,i,o,r,s,a,u;return s=this.splitObjectsAtRange(t),r=s[0],i=s[1],a=s[2],u=function(){var t,s,u;for(u=[],n=t=0,s=r.length;s>t;n=++t)o=r[n],u.push(n>=i&&a>=n?e(o):o);return u}(),new this.constructor(u)},i.prototype.splitObjectsAtRange=function(t){var e,n,i,o,s,u;return o=this.splitObjectAtPosition(a(t)),n=o[0],e=o[1],i=o[2],s=new this.constructor(n).splitObjectAtPosition(r(t)+i),n=s[0],u=s[1],[n,e,u-1]},i.prototype.getObjectAtPosition=function(t){var e,i;return i=this.findIndexAndOffsetAtPosition(t),e=i.index,i.offset,this.objects[e]},i.prototype.splitObjectAtPosition=function(t){var e,n,i,o,r,s,a,u,c,l;return s=this.findIndexAndOffsetAtPosition(t),e=s.index,r=s.offset,o=this.objects.slice(0),null!=e?0===r?(c=e,l=0):(i=this.getObjectAtIndex(e),a=i.splitAtOffset(r),n=a[0],u=a[1],o.splice(e,1,n,u),c=e+1,l=n.getLength()-r):(c=o.length,l=0),[o,c,l]},i.prototype.consolidate=function(){var t,e,n,i,o,r;for(i=[],o=this.objects[0],r=this.objects.slice(1),t=0,e=r.length;e>t;t++)n=r[t],("function"==typeof o.canBeConsolidatedWith?o.canBeConsolidatedWith(n):void 0)?o=o.consolidateWith(n):(i.push(o),o=n);return null!=o&&i.push(o),new this.constructor(i)},i.prototype.consolidateFromIndexToIndex=function(t,e){var n,i,r;return i=this.objects.slice(0),r=i.slice(t,e+1),n=new this.constructor(r).consolidate().toArray(),this.splice.apply(this,[t,r.length].concat(o.call(n)))},i.prototype.findIndexAndOffsetAtPosition=function(t){var e,n,i,o,r,s,a;for(e=0,a=this.objects,i=n=0,o=a.length;o>n;i=++n){if(s=a[i],r=e+s.getLength(),t>=e&&r>t)return {index:i,offset:t-e};e=r;}return {index:null,offset:null}},i.prototype.findPositionAtIndexAndOffset=function(t,e){var n,i,o,r,s,a;for(s=0,a=this.objects,n=i=0,o=a.length;o>i;n=++i)if(r=a[n],t>n)s+=r.getLength();else if(n===t){s+=e;break}return s},i.prototype.getEndPosition=function(){var t,e;return null!=this.endPosition?this.endPosition:this.endPosition=function(){var n,i,o;for(e=0,o=this.objects,n=0,i=o.length;i>n;n++)t=o[n],e+=t.getLength();return e}.call(this)},i.prototype.toString=function(){return this.objects.join("")},i.prototype.toArray=function(){return this.objects.slice(0)},i.prototype.toJSON=function(){return this.toArray()},i.prototype.isEqualTo=function(t){return i.__super__.isEqualTo.apply(this,arguments)||s(this.objects,null!=t?t.objects:void 0)},s=function(t,e){var n,i,o,r,s;if(null==e&&(e=[]),t.length!==e.length)return !1;for(s=!0,i=n=0,o=t.length;o>n;i=++n)r=t[i],s&&!r.isEqualTo(e[i])&&(s=!1);return s},i.prototype.contentsForInspection=function(){var t;return {objects:"["+function(){var e,n,i,o;for(i=this.objects,o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(t.inspect());return o}.call(this).join(", ")+"]"}},a=function(t){return t[0]},r=function(t){return t[1]},i}(e.Object);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.Text=function(n){function i(t){var n;null==t&&(t=[]),i.__super__.constructor.apply(this,arguments),this.pieceList=new e.SplittableList(function(){var e,i,o;for(o=[],e=0,i=t.length;i>e;e++)n=t[e],n.isEmpty()||o.push(n);return o}());}return t(i,n),i.textForAttachmentWithAttributes=function(t,n){var i;return i=new e.AttachmentPiece(t,n),new this([i])},i.textForStringWithAttributes=function(t,n){var i;return i=new e.StringPiece(t,n),new this([i])},i.fromJSON=function(t){var n,i;return i=function(){var i,o,r;for(r=[],i=0,o=t.length;o>i;i++)n=t[i],r.push(e.Piece.fromJSON(n));return r}(),new this(i)},i.prototype.copy=function(){return this.copyWithPieceList(this.pieceList)},i.prototype.copyWithPieceList=function(t){return new this.constructor(t.consolidate().toArray())},i.prototype.copyUsingObjectMap=function(t){var e,n;return n=function(){var n,i,o,r,s;for(o=this.getPieces(),s=[],n=0,i=o.length;i>n;n++)e=o[n],s.push(null!=(r=t.find(e))?r:e);return s}.call(this),new this.constructor(n)},i.prototype.appendText=function(t){return this.insertTextAtPosition(t,this.getLength())},i.prototype.insertTextAtPosition=function(t,e){return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(t.pieceList,e))
	},i.prototype.removeTextAtRange=function(t){return this.copyWithPieceList(this.pieceList.removeObjectsInRange(t))},i.prototype.replaceTextAtRange=function(t,e){return this.removeTextAtRange(e).insertTextAtPosition(t,e[0])},i.prototype.moveTextFromRangeToPosition=function(t,e){var n,i;if(!(t[0]<=e&&e<=t[1]))return i=this.getTextAtRange(t),n=i.getLength(),t[0]<e&&(e-=n),this.removeTextAtRange(t).insertTextAtPosition(i,e)},i.prototype.addAttributeAtRange=function(t,e,n){var i;return i={},i[t]=e,this.addAttributesAtRange(i,n)},i.prototype.addAttributesAtRange=function(t,e){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e,function(e){return e.copyWithAdditionalAttributes(t)}))},i.prototype.removeAttributeAtRange=function(t,e){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e,function(e){return e.copyWithoutAttribute(t)}))},i.prototype.setAttributesAtRange=function(t,e){return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e,function(e){return e.copyWithAttributes(t)}))},i.prototype.getAttributesAtPosition=function(t){var e,n;return null!=(e=null!=(n=this.pieceList.getObjectAtPosition(t))?n.getAttributes():void 0)?e:{}},i.prototype.getCommonAttributes=function(){var t,n;return t=function(){var t,e,i,o;for(i=this.pieceList.toArray(),o=[],t=0,e=i.length;e>t;t++)n=i[t],o.push(n.getAttributes());return o}.call(this),e.Hash.fromCommonAttributesOfObjects(t).toObject()},i.prototype.getCommonAttributesAtRange=function(t){var e;return null!=(e=this.getTextAtRange(t).getCommonAttributes())?e:{}},i.prototype.getExpandedRangeForAttributeAtOffset=function(t,e){var n,i,o;for(n=o=e,i=this.getLength();n>0&&this.getCommonAttributesAtRange([n-1,o])[t];)n--;for(;i>o&&this.getCommonAttributesAtRange([e,o+1])[t];)o++;return [n,o]},i.prototype.getTextAtRange=function(t){return this.copyWithPieceList(this.pieceList.getSplittableListInRange(t))},i.prototype.getStringAtRange=function(t){return this.pieceList.getSplittableListInRange(t).toString()},i.prototype.getStringAtPosition=function(t){return this.getStringAtRange([t,t+1])},i.prototype.startsWithString=function(t){return this.getStringAtRange([0,t.length])===t},i.prototype.endsWithString=function(t){var e;return e=this.getLength(),this.getStringAtRange([e-t.length,e])===t},i.prototype.getAttachmentPieces=function(){var t,e,n,i,o;for(i=this.pieceList.toArray(),o=[],t=0,e=i.length;e>t;t++)n=i[t],null!=n.attachment&&o.push(n);return o},i.prototype.getAttachments=function(){var t,e,n,i,o;for(i=this.getAttachmentPieces(),o=[],t=0,e=i.length;e>t;t++)n=i[t],o.push(n.attachment);return o},i.prototype.getAttachmentAndPositionById=function(t){var e,n,i,o,r,s;for(o=0,r=this.pieceList.toArray(),e=0,n=r.length;n>e;e++){if(i=r[e],(null!=(s=i.attachment)?s.id:void 0)===t)return {attachment:i.attachment,position:o};o+=i.length;}return {attachment:null,position:null}},i.prototype.getAttachmentById=function(t){var e,i;return i=this.getAttachmentAndPositionById(t),e=i.attachment,i.position,e},i.prototype.getRangeOfAttachment=function(t){var e,n;return n=this.getAttachmentAndPositionById(t.id),t=n.attachment,e=n.position,null!=t?[e,e+1]:void 0},i.prototype.updateAttributesForAttachment=function(t,e){var n;return (n=this.getRangeOfAttachment(e))?this.addAttributesAtRange(t,n):this},i.prototype.getLength=function(){return this.pieceList.getEndPosition()},i.prototype.isEmpty=function(){return 0===this.getLength()},i.prototype.isEqualTo=function(t){var e;return i.__super__.isEqualTo.apply(this,arguments)||(null!=t&&null!=(e=t.pieceList)?e.isEqualTo(this.pieceList):void 0)},i.prototype.isBlockBreak=function(){return 1===this.getLength()&&this.pieceList.getObjectAtIndex(0).isBlockBreak()},i.prototype.eachPiece=function(t){return this.pieceList.eachObject(t)},i.prototype.getPieces=function(){return this.pieceList.toArray()},i.prototype.getPieceAtPosition=function(t){return this.pieceList.getObjectAtPosition(t)},i.prototype.contentsForInspection=function(){return {pieceList:this.pieceList.inspect()}},i.prototype.toSerializableText=function(){var t;return t=this.pieceList.selectSplittableList(function(t){return t.isSerializable()}),this.copyWithPieceList(t)},i.prototype.toString=function(){return this.pieceList.toString()},i.prototype.toJSON=function(){return this.pieceList.toJSON()},i.prototype.toConsole=function(){var t;return JSON.stringify(function(){var e,n,i,o;for(i=this.pieceList.toArray(),o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(JSON.parse(t.toConsole()));return o}.call(this))},i.prototype.getDirection=function(){return e.getDirection(this.toString())},i.prototype.isRTL=function(){return "rtl"===this.getDirection()},i}(e.Object);}.call(this),function(){var t,i,o,r,s=function(t,e){function n(){this.constructor=t;}for(var i in e)a.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},a={}.hasOwnProperty,u=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1},c=[].slice;t=e.arraysAreEqual,r=e.spliceArray,i=e.getBlockConfig,e.getBlockAttributeNames,o=e.getListAttributeNames,e.Block=function(n){function a(t,n){null==t&&(t=new e.Text),null==n&&(n=[]),a.__super__.constructor.apply(this,arguments),this.text=h(t),this.attributes=n;}var l,h,p,d,f,g,m,v,y;return s(a,n),a.fromJSON=function(t){var n;return n=e.Text.fromJSON(t.text),new this(n,t.attributes)},a.prototype.isEmpty=function(){return this.text.isBlockBreak()},a.prototype.isEqualTo=function(e){return a.__super__.isEqualTo.apply(this,arguments)||this.text.isEqualTo(null!=e?e.text:void 0)&&t(this.attributes,null!=e?e.attributes:void 0)},a.prototype.copyWithText=function(t){return new this.constructor(t,this.attributes)},a.prototype.copyWithoutText=function(){return this.copyWithText(null)},a.prototype.copyWithAttributes=function(t){return new this.constructor(this.text,t)},a.prototype.copyWithoutAttributes=function(){return this.copyWithAttributes(null)},a.prototype.copyUsingObjectMap=function(t){var e;return this.copyWithText((e=t.find(this.text))?e:this.text.copyUsingObjectMap(t))},a.prototype.addAttribute=function(t){var e;return e=this.attributes.concat(d(t)),this.copyWithAttributes(e)},a.prototype.removeAttribute=function(t){var e,n;return n=i(t).listAttribute,e=g(g(this.attributes,t),n),this.copyWithAttributes(e)},a.prototype.removeLastAttribute=function(){return this.removeAttribute(this.getLastAttribute())},a.prototype.getLastAttribute=function(){return f(this.attributes)},a.prototype.getAttributes=function(){return this.attributes.slice(0)},a.prototype.getAttributeLevel=function(){return this.attributes.length},a.prototype.getAttributeAtLevel=function(t){return this.attributes[t-1]},a.prototype.hasAttribute=function(t){return u.call(this.attributes,t)>=0},a.prototype.hasAttributes=function(){return this.getAttributeLevel()>0},a.prototype.getLastNestableAttribute=function(){return f(this.getNestableAttributes())},a.prototype.getNestableAttributes=function(){var t,e,n,o,r;for(o=this.attributes,r=[],e=0,n=o.length;n>e;e++)t=o[e],i(t).nestable&&r.push(t);return r},a.prototype.getNestingLevel=function(){return this.getNestableAttributes().length},a.prototype.decreaseNestingLevel=function(){var t;return (t=this.getLastNestableAttribute())?this.removeAttribute(t):this},a.prototype.increaseNestingLevel=function(){var t,e,n;return (t=this.getLastNestableAttribute())?(n=this.attributes.lastIndexOf(t),e=r.apply(null,[this.attributes,n+1,0].concat(c.call(d(t)))),this.copyWithAttributes(e)):this},a.prototype.getListItemAttributes=function(){var t,e,n,o,r;for(o=this.attributes,r=[],e=0,n=o.length;n>e;e++)t=o[e],i(t).listAttribute&&r.push(t);return r},a.prototype.isListItem=function(){var t;return null!=(t=i(this.getLastAttribute()))?t.listAttribute:void 0},a.prototype.isTerminalBlock=function(){var t;return null!=(t=i(this.getLastAttribute()))?t.terminal:void 0},a.prototype.breaksOnReturn=function(){var t;return null!=(t=i(this.getLastAttribute()))?t.breakOnReturn:void 0},a.prototype.findLineBreakInDirectionFromPosition=function(t,e){var n,i;return i=this.toString(),n=function(){switch(t){case"forward":return i.indexOf("\n",e);case"backward":return i.slice(0,e).lastIndexOf("\n")}}(),-1!==n?n:void 0},a.prototype.contentsForInspection=function(){return {text:this.text.inspect(),attributes:this.attributes}},a.prototype.toString=function(){return this.text.toString()},a.prototype.toJSON=function(){return {text:this.text,attributes:this.attributes}},a.prototype.getDirection=function(){return this.text.getDirection()},a.prototype.isRTL=function(){return this.text.isRTL()},a.prototype.getLength=function(){return this.text.getLength()},a.prototype.canBeConsolidatedWith=function(t){return !this.hasAttributes()&&!t.hasAttributes()&&this.getDirection()===t.getDirection()},a.prototype.consolidateWith=function(t){var n,i;return n=e.Text.textForStringWithAttributes("\n"),i=this.getTextWithoutBlockBreak().appendText(n),this.copyWithText(i.appendText(t.text))},a.prototype.splitAtOffset=function(t){var e,n;return 0===t?(e=null,n=this):t===this.getLength()?(e=this,n=null):(e=this.copyWithText(this.text.getTextAtRange([0,t])),n=this.copyWithText(this.text.getTextAtRange([t,this.getLength()]))),[e,n]},a.prototype.getBlockBreakPosition=function(){return this.text.getLength()-1},a.prototype.getTextWithoutBlockBreak=function(){return m(this.text)?this.text.getTextAtRange([0,this.getBlockBreakPosition()]):this.text.copy()},a.prototype.canBeGrouped=function(t){return this.attributes[t]},a.prototype.canBeGroupedWith=function(t,e){var n,r,s,a;return s=t.getAttributes(),r=s[e],n=this.attributes[e],!(n!==r||i(n).group===!1&&(a=s[e+1],u.call(o(),a)<0)||this.getDirection()!==t.getDirection()&&!t.isEmpty())},h=function(t){return t=y(t),t=l(t)},y=function(t){var n,i,o,r,s,a;return r=!1,a=t.getPieces(),i=2<=a.length?c.call(a,0,n=a.length-1):(n=0,[]),o=a[n++],null==o?t:(i=function(){var t,e,n;for(n=[],t=0,e=i.length;e>t;t++)s=i[t],s.isBlockBreak()?(r=!0,n.push(v(s))):n.push(s);return n}(),r?new e.Text(c.call(i).concat([o])):t)},p=e.Text.textForStringWithAttributes("\n",{blockBreak:!0}),l=function(t){return m(t)?t:t.appendText(p)},m=function(t){var e,n;return n=t.getLength(),0===n?!1:(e=t.getTextAtRange([n-1,n]),e.isBlockBreak())},v=function(t){return t.copyWithoutAttribute("blockBreak")},d=function(t){var e;return e=i(t).listAttribute,null!=e?[e,t]:[t]},f=function(t){return t.slice(-1)[0]},g=function(t,e){var n;return n=t.lastIndexOf(e),-1===n?t:r(t,n,1)},a}(e.Object);}.call(this),function(){var t,n,i,o=function(t,e){function n(){this.constructor=t;}for(var i in e)r.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty,s=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1},a=[].slice;n=e.tagName,i=e.walkTree,t=e.nodeIsAttachmentElement,e.HTMLSanitizer=function(r){function u(t,e){var n;n=null!=e?e:{},this.allowedAttributes=n.allowedAttributes,this.forbiddenProtocols=n.forbiddenProtocols,this.forbiddenElements=n.forbiddenElements,null==this.allowedAttributes&&(this.allowedAttributes=c),null==this.forbiddenProtocols&&(this.forbiddenProtocols=h),null==this.forbiddenElements&&(this.forbiddenElements=l),this.body=p(t);}var c,l,h,p;return o(u,r),c="style href src width height class".split(" "),h="javascript:".split(" "),l="script iframe".split(" "),u.sanitize=function(t,e){var n;return n=new this(t,e),n.sanitize(),n},u.prototype.sanitize=function(){return this.sanitizeElements(),this.normalizeListElementNesting()},u.prototype.getHTML=function(){return this.body.innerHTML},u.prototype.getBody=function(){return this.body},u.prototype.sanitizeElements=function(){var t,n,o,r,s;for(s=i(this.body),r=[];s.nextNode();)switch(o=s.currentNode,o.nodeType){case Node.ELEMENT_NODE:this.elementIsRemovable(o)?r.push(o):this.sanitizeElement(o);break;case Node.COMMENT_NODE:r.push(o);}for(t=0,n=r.length;n>t;t++)o=r[t],e.removeNode(o);return this.body},u.prototype.sanitizeElement=function(t){var e,n,i,o,r;for(t.hasAttribute("href")&&(o=t.protocol,s.call(this.forbiddenProtocols,o)>=0&&t.removeAttribute("href")),r=a.call(t.attributes),e=0,n=r.length;n>e;e++)i=r[e].name,s.call(this.allowedAttributes,i)>=0||0===i.indexOf("data-trix")||t.removeAttribute(i);return t},u.prototype.normalizeListElementNesting=function(){var t,e,i,o,r;for(r=a.call(this.body.querySelectorAll("ul,ol")),t=0,e=r.length;e>t;t++)i=r[t],(o=i.previousElementSibling)&&"li"===n(o)&&o.appendChild(i);return this.body},u.prototype.elementIsRemovable=function(t){return (null!=t?t.nodeType:void 0)===Node.ELEMENT_NODE?this.elementIsForbidden(t)||this.elementIsntSerializable(t):void 0},u.prototype.elementIsForbidden=function(t){var e;return e=n(t),s.call(this.forbiddenElements,e)>=0},u.prototype.elementIsntSerializable=function(e){return "false"===e.getAttribute("data-trix-serialize")&&!t(e)},p=function(t){var e,n,i,o,r;for(null==t&&(t=""),t=t.replace(/<\/html[^>]*>[^]*$/i,"</html>"),e=document.implementation.createHTMLDocument(""),e.documentElement.innerHTML=t,r=e.head.querySelectorAll("style"),i=0,o=r.length;o>i;i++)n=r[i],e.body.appendChild(n);return e.body},u}(e.BasicObject);}.call(this),function(){var t,n,i,o,r,s,a,u,c,l,h,p=function(t,e){function n(){this.constructor=t;}for(var i in e)d.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},d={}.hasOwnProperty,f=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};t=e.arraysAreEqual,s=e.makeElement,l=e.tagName,r=e.getBlockTagNames,h=e.walkTree,o=e.findClosestElementFromNode,i=e.elementContainsNode,a=e.nodeIsAttachmentElement,u=e.normalizeSpaces,n=e.breakableWhitespacePattern,c=e.squishBreakableWhitespace,e.HTMLParser=function(d){function g(t,e){this.html=t,this.referenceElement=(null!=e?e:{}).referenceElement,this.blocks=[],this.blockElements=[],this.processedElements=[];}var m,v,y,b,A,C,x,w,E,S,R,k;return p(g,d),g.parse=function(t,e){var n;return n=new this(t,e),n.parse(),n},g.prototype.getDocument=function(){return e.Document.fromJSON(this.blocks)},g.prototype.parse=function(){var t,n;try{for(this.createHiddenContainer(),t=e.HTMLSanitizer.sanitize(this.html).getHTML(),this.containerElement.innerHTML=t,n=h(this.containerElement,{usingFilter:x});n.nextNode();)this.processNode(n.currentNode);return this.translateBlockElementMarginsToNewlines()}finally{this.removeHiddenContainer();}},g.prototype.createHiddenContainer=function(){return this.referenceElement?(this.containerElement=this.referenceElement.cloneNode(!1),this.containerElement.removeAttribute("id"),this.containerElement.setAttribute("data-trix-internal",""),this.containerElement.style.display="none",this.referenceElement.parentNode.insertBefore(this.containerElement,this.referenceElement.nextSibling)):(this.containerElement=s({tagName:"div",style:{display:"none"}}),document.body.appendChild(this.containerElement))},g.prototype.removeHiddenContainer=function(){return e.removeNode(this.containerElement)},x=function(t){return "style"===l(t)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},g.prototype.processNode=function(t){switch(t.nodeType){case Node.TEXT_NODE:if(!this.isInsignificantTextNode(t))return this.appendBlockForTextNode(t),this.processTextNode(t);break;case Node.ELEMENT_NODE:return this.appendBlockForElement(t),this.processElement(t)}},g.prototype.appendBlockForTextNode=function(e){var n,i,o;return i=e.parentNode,i===this.currentBlockElement&&this.isBlockElement(e.previousSibling)?this.appendStringWithAttributes("\n"):i!==this.containerElement&&!this.isBlockElement(i)||(n=this.getBlockAttributes(i),t(n,null!=(o=this.currentBlock)?o.attributes:void 0))?void 0:(this.currentBlock=this.appendBlockForAttributesWithElement(n,i),this.currentBlockElement=i)},g.prototype.appendBlockForElement=function(e){var n,o,r,s;if(r=this.isBlockElement(e),o=i(this.currentBlockElement,e),r&&!this.isBlockElement(e.firstChild)){if((!this.isInsignificantTextNode(e.firstChild)||!this.isBlockElement(e.firstElementChild))&&(n=this.getBlockAttributes(e),e.firstChild))return o&&t(n,this.currentBlock.attributes)?this.appendStringWithAttributes("\n"):(this.currentBlock=this.appendBlockForAttributesWithElement(n,e),this.currentBlockElement=e)}else if(this.currentBlockElement&&!o&&!r)return (s=this.findParentBlockElement(e))?this.appendBlockForElement(s):(this.currentBlock=this.appendEmptyBlock(),this.currentBlockElement=null)},g.prototype.findParentBlockElement=function(t){var e;for(e=t.parentElement;e&&e!==this.containerElement;){if(this.isBlockElement(e)&&f.call(this.blockElements,e)>=0)return e;e=e.parentElement;}return null},g.prototype.processTextNode=function(t){var e,n;return n=t.data,v(t.parentNode)||(n=c(n),R(null!=(e=t.previousSibling)?e.textContent:void 0)&&(n=A(n))),this.appendStringWithAttributes(n,this.getTextAttributes(t.parentNode))},g.prototype.processElement=function(t){var e,n,i,o,r;if(a(t))return e=w(t,"attachment"),Object.keys(e).length&&(o=this.getTextAttributes(t),this.appendAttachmentWithAttributes(e,o),t.innerHTML=""),this.processedElements.push(t);switch(l(t)){case"br":return this.isExtraBR(t)||this.isBlockElement(t.nextSibling)||this.appendStringWithAttributes("\n",this.getTextAttributes(t)),this.processedElements.push(t);case"img":e={url:t.getAttribute("src"),contentType:"image"},i=b(t);for(n in i)r=i[n],e[n]=r;return this.appendAttachmentWithAttributes(e,this.getTextAttributes(t)),this.processedElements.push(t);case"tr":if(t.parentNode.firstChild!==t)return this.appendStringWithAttributes("\n");break;case"td":if(t.parentNode.firstChild!==t)return this.appendStringWithAttributes(" | ")}},g.prototype.appendBlockForAttributesWithElement=function(t,e){var n;return this.blockElements.push(e),n=m(t),this.blocks.push(n),n},g.prototype.appendEmptyBlock=function(){return this.appendBlockForAttributesWithElement([],null)},g.prototype.appendStringWithAttributes=function(t,e){return this.appendPiece(S(t,e))},g.prototype.appendAttachmentWithAttributes=function(t,e){return this.appendPiece(E(t,e))},g.prototype.appendPiece=function(t){return 0===this.blocks.length&&this.appendEmptyBlock(),this.blocks[this.blocks.length-1].text.push(t)},g.prototype.appendStringToTextAtIndex=function(t,e){var n,i;return i=this.blocks[e].text,n=i[i.length-1],"string"===(null!=n?n.type:void 0)?n.string+=t:i.push(S(t))},g.prototype.prependStringToTextAtIndex=function(t,e){var n,i;return i=this.blocks[e].text,n=i[0],"string"===(null!=n?n.type:void 0)?n.string=t+n.string:i.unshift(S(t))},S=function(t,e){var n;return null==e&&(e={}),n="string",t=u(t),{string:t,attributes:e,type:n}},E=function(t,e){var n;return null==e&&(e={}),n="attachment",{attachment:t,attributes:e,type:n}},m=function(t){var e;return null==t&&(t={}),e=[],{text:e,attributes:t}},g.prototype.getTextAttributes=function(t){var n,i,r,s,u,c,l,h,p,d,f,g;r={},p=e.config.textAttributes;for(n in p)if(u=p[n],u.tagName&&o(t,{matchingSelector:u.tagName,untilNode:this.containerElement}))r[n]=!0;else if(u.parser){if(g=u.parser(t)){for(i=!1,d=this.findBlockElementAncestors(t),c=0,h=d.length;h>c;c++)if(s=d[c],u.parser(s)===g){i=!0;break}i||(r[n]=g);}}else u.styleProperty&&(g=t.style[u.styleProperty])&&(r[n]=g);if(a(t)){f=w(t,"attributes");for(l in f)g=f[l],r[l]=g;}return r},g.prototype.getBlockAttributes=function(t){var n,i,o,r;for(i=[];t&&t!==this.containerElement;){r=e.config.blockAttributes;for(n in r)o=r[n],o.parse!==!1&&l(t)===o.tagName&&(("function"==typeof o.test?o.test(t):void 0)||!o.test)&&(i.push(n),o.listAttribute&&i.push(o.listAttribute));t=t.parentNode;}return i.reverse()},g.prototype.findBlockElementAncestors=function(t){var e,n;for(e=[];t&&t!==this.containerElement;)n=l(t),f.call(r(),n)>=0&&e.push(t),t=t.parentNode;return e},w=function(t,e){try{return JSON.parse(t.getAttribute("data-trix-"+e))}catch(n){return {}}},b=function(t){var e,n,i;return i=t.getAttribute("width"),n=t.getAttribute("height"),e={},i&&(e.width=parseInt(i,10)),n&&(e.height=parseInt(n,10)),e},g.prototype.isBlockElement=function(t){var e;if((null!=t?t.nodeType:void 0)===Node.ELEMENT_NODE&&!a(t)&&!o(t,{matchingSelector:"td",untilNode:this.containerElement}))return e=l(t),f.call(r(),e)>=0||"block"===window.getComputedStyle(t).display},g.prototype.isInsignificantTextNode=function(t){var e,n,i;if((null!=t?t.nodeType:void 0)===Node.TEXT_NODE&&k(t.data)&&(n=t.parentNode,i=t.previousSibling,e=t.nextSibling,(!C(n.previousSibling)||this.isBlockElement(n.previousSibling))&&!v(n)))return !i||this.isBlockElement(i)||!e||this.isBlockElement(e)},g.prototype.isExtraBR=function(t){return "br"===l(t)&&this.isBlockElement(t.parentNode)&&t.parentNode.lastChild===t},v=function(t){var e;return e=window.getComputedStyle(t).whiteSpace,"pre"===e||"pre-wrap"===e||"pre-line"===e},C=function(t){return t&&!R(t.textContent)},g.prototype.translateBlockElementMarginsToNewlines=function(){var e,n,i,o,r,s,a;for(e=this.getMarginOfDefaultBlockElement(),s=this.blocks,a=[],i=n=0,o=s.length;o>n;i=++n)s[i],(r=this.getMarginOfBlockElementAtIndex(i))&&(r.top>2*e.top&&this.prependStringToTextAtIndex("\n",i),a.push(r.bottom>2*e.bottom?this.appendStringToTextAtIndex("\n",i):void 0));return a},g.prototype.getMarginOfBlockElementAtIndex=function(t){var e,n;return !(e=this.blockElements[t])||!e.textContent||(n=l(e),f.call(r(),n)>=0||f.call(this.processedElements,e)>=0)?void 0:y(e)},g.prototype.getMarginOfDefaultBlockElement=function(){var t;return t=s(e.config.blockAttributes["default"].tagName),this.containerElement.appendChild(t),y(t)},y=function(t){var e;return e=window.getComputedStyle(t),"block"===e.display?{top:parseInt(e.marginTop),bottom:parseInt(e.marginBottom)}:void 0},A=function(t){return t.replace(RegExp("^"+n.source+"+"),"")},k=function(t){return RegExp("^"+n.source+"*$").test(t)},R=function(t){return /\s$/.test(t)},g}(e.BasicObject);}.call(this),function(){var t,n,i,o,r=function(t,e){function n(){this.constructor=t;}for(var i in e)s.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty,a=[].slice,u=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};t=e.arraysAreEqual,i=e.normalizeRange,o=e.rangeIsCollapsed,n=e.getBlockConfig,e.Document=function(s){function c(t){null==t&&(t=[]),c.__super__.constructor.apply(this,arguments),0===t.length&&(t=[new e.Block]),this.blockList=e.SplittableList.box(t);}var l;return r(c,s),c.fromJSON=function(t){var n,i;return i=function(){var i,o,r;for(r=[],i=0,o=t.length;o>i;i++)n=t[i],r.push(e.Block.fromJSON(n));return r}(),new this(i)},c.fromHTML=function(t,n){return e.HTMLParser.parse(t,n).getDocument()},c.fromString=function(t,n){var i;return i=e.Text.textForStringWithAttributes(t,n),new this([new e.Block(i)])},c.prototype.isEmpty=function(){var t;return 1===this.blockList.length&&(t=this.getBlockAtIndex(0),t.isEmpty()&&!t.hasAttributes())},c.prototype.copy=function(t){var e;return null==t&&(t={}),e=t.consolidateBlocks?this.blockList.consolidate().toArray():this.blockList.toArray(),new this.constructor(e)},c.prototype.copyUsingObjectsFromDocument=function(t){var n;return n=new e.ObjectMap(t.getObjects()),this.copyUsingObjectMap(n)},c.prototype.copyUsingObjectMap=function(t){var e,n,i;return n=function(){var n,o,r,s;for(r=this.getBlocks(),s=[],n=0,o=r.length;o>n;n++)e=r[n],s.push((i=t.find(e))?i:e.copyUsingObjectMap(t));return s}.call(this),new this.constructor(n)},c.prototype.copyWithBaseBlockAttributes=function(t){var e,n,i;return null==t&&(t=[]),i=function(){var i,o,r,s;for(r=this.getBlocks(),s=[],i=0,o=r.length;o>i;i++)n=r[i],e=t.concat(n.getAttributes()),s.push(n.copyWithAttributes(e));return s}.call(this),new this.constructor(i)},c.prototype.replaceBlock=function(t,e){var n;return n=this.blockList.indexOf(t),-1===n?this:new this.constructor(this.blockList.replaceObjectAtIndex(e,n))},c.prototype.insertDocumentAtRange=function(t,e){var n,r,s,a,u,c,l;return r=t.blockList,u=(e=i(e))[0],c=this.locationFromPosition(u),s=c.index,a=c.offset,l=this,n=this.getBlockAtPosition(u),o(e)&&n.isEmpty()&&!n.hasAttributes()?l=new this.constructor(l.blockList.removeObjectAtIndex(s)):n.getBlockBreakPosition()===a&&u++,l=l.removeTextAtRange(e),new this.constructor(l.blockList.insertSplittableListAtPosition(r,u))},c.prototype.mergeDocumentAtRange=function(e,n){var o,r,s,a,u,c,l,h,p,d,f,g;return f=(n=i(n))[0],d=this.locationFromPosition(f),r=this.getBlockAtIndex(d.index).getAttributes(),o=e.getBaseBlockAttributes(),g=r.slice(-o.length),t(o,g)?(l=r.slice(0,-o.length),c=e.copyWithBaseBlockAttributes(l)):c=e.copy({consolidateBlocks:!0}).copyWithBaseBlockAttributes(r),s=c.getBlockCount(),a=c.getBlockAtIndex(0),t(r,a.getAttributes())?(u=a.getTextWithoutBlockBreak(),p=this.insertTextAtRange(u,n),s>1&&(c=new this.constructor(c.getBlocks().slice(1)),h=f+u.getLength(),p=p.insertDocumentAtRange(c,h))):p=this.insertDocumentAtRange(c,n),p},c.prototype.insertTextAtRange=function(t,e){var n,o,r,s,a;return a=(e=i(e))[0],s=this.locationFromPosition(a),o=s.index,r=s.offset,n=this.removeTextAtRange(e),new this.constructor(n.blockList.editObjectAtIndex(o,function(e){return e.copyWithText(e.text.insertTextAtPosition(t,r))}))},c.prototype.removeTextAtRange=function(t){var e,n,r,s,a,u,c,l,h,p,d,f,g,m,v,y,b,A,C,x,w;return p=t=i(t),l=p[0],A=p[1],o(t)?this:(d=this.locationRangeFromRange(t),u=d[0],y=d[1],a=u.index,c=u.offset,s=this.getBlockAtIndex(a),v=y.index,b=y.offset,m=this.getBlockAtIndex(v),f=A-l===1&&s.getBlockBreakPosition()===c&&m.getBlockBreakPosition()!==b&&"\n"===m.text.getStringAtPosition(b),f?r=this.blockList.editObjectAtIndex(v,function(t){return t.copyWithText(t.text.removeTextAtRange([b,b+1]))}):(h=s.text.getTextAtRange([0,c]),C=m.text.getTextAtRange([b,m.getLength()]),x=h.appendText(C),g=a!==v&&0===c,w=g&&s.getAttributeLevel()>=m.getAttributeLevel(),n=w?m.copyWithText(x):s.copyWithText(x),e=v+1-a,r=this.blockList.splice(a,e,n)),new this.constructor(r))},c.prototype.moveTextFromRangeToPosition=function(t,e){var n,o,r,s,u,c,l,h,p,d;return c=t=i(t),p=c[0],r=c[1],e>=p&&r>=e?this:(o=this.getDocumentAtRange(t),h=this.removeTextAtRange(t),u=e>p,u&&(e-=o.getLength()),l=o.getBlocks(),s=l[0],n=2<=l.length?a.call(l,1):[],0===n.length?(d=s.getTextWithoutBlockBreak(),u&&(e+=1)):d=s.text,h=h.insertTextAtRange(d,e),0===n.length?h:(o=new this.constructor(n),e+=d.getLength(),h.insertDocumentAtRange(o,e)))},c.prototype.addAttributeAtRange=function(t,e,i){var o;return o=this.blockList,this.eachBlockAtRange(i,function(i,r,s){return o=o.editObjectAtIndex(s,function(){return n(t)?i.addAttribute(t,e):r[0]===r[1]?i:i.copyWithText(i.text.addAttributeAtRange(t,e,r))})}),new this.constructor(o)},c.prototype.addAttribute=function(t,e){var n;return n=this.blockList,this.eachBlock(function(i,o){return n=n.editObjectAtIndex(o,function(){return i.addAttribute(t,e)})}),new this.constructor(n)},c.prototype.removeAttributeAtRange=function(t,e){var i;return i=this.blockList,this.eachBlockAtRange(e,function(e,o,r){return n(t)?i=i.editObjectAtIndex(r,function(){return e.removeAttribute(t)}):o[0]!==o[1]?i=i.editObjectAtIndex(r,function(){return e.copyWithText(e.text.removeAttributeAtRange(t,o))}):void 0}),new this.constructor(i)},c.prototype.updateAttributesForAttachment=function(t,e){var n,o,r;return o=(this.getRangeOfAttachment(e))[0],n=this.locationFromPosition(o).index,r=this.getTextAtIndex(n),new this.constructor(this.blockList.editObjectAtIndex(n,function(n){return n.copyWithText(r.updateAttributesForAttachment(t,e))}))},c.prototype.removeAttributeForAttachment=function(t,e){var n;return n=this.getRangeOfAttachment(e),this.removeAttributeAtRange(t,n)},c.prototype.insertBlockBreakAtRange=function(t){var n,o,r,s;return s=(t=i(t))[0],r=this.locationFromPosition(s).offset,o=this.removeTextAtRange(t),0===r&&(n=[new e.Block]),new this.constructor(o.blockList.insertSplittableListAtPosition(new e.SplittableList(n),s))},c.prototype.applyBlockAttributeAtRange=function(t,e,i){var o,r,s,a;return s=this.expandRangeToLineBreaksAndSplitBlocks(i),r=s.document,i=s.range,o=n(t),o.listAttribute?(r=r.removeLastListAttributeAtRange(i,{exceptAttributeName:t}),a=r.convertLineBreaksToBlockBreaksInRange(i),r=a.document,i=a.range):r=o.exclusive?r.removeBlockAttributesAtRange(i):o.terminal?r.removeLastTerminalAttributeAtRange(i):r.consolidateBlocksAtRange(i),r.addAttributeAtRange(t,e,i)},c.prototype.removeLastListAttributeAtRange=function(t,e){var i;return null==e&&(e={}),i=this.blockList,this.eachBlockAtRange(t,function(t,o,r){var s;if((s=t.getLastAttribute())&&n(s).listAttribute&&s!==e.exceptAttributeName)return i=i.editObjectAtIndex(r,function(){return t.removeAttribute(s)})}),new this.constructor(i)},c.prototype.removeLastTerminalAttributeAtRange=function(t){var e;return e=this.blockList,this.eachBlockAtRange(t,function(t,i,o){var r;if((r=t.getLastAttribute())&&n(r).terminal)return e=e.editObjectAtIndex(o,function(){return t.removeAttribute(r)})}),new this.constructor(e)},c.prototype.removeBlockAttributesAtRange=function(t){var e;return e=this.blockList,this.eachBlockAtRange(t,function(t,n,i){return t.hasAttributes()?e=e.editObjectAtIndex(i,function(){return t.copyWithoutAttributes()}):void 0}),new this.constructor(e)},c.prototype.expandRangeToLineBreaksAndSplitBlocks=function(t){var e,n,o,r,s,a,u,c,l;return a=t=i(t),l=a[0],r=a[1],c=this.locationFromPosition(l),o=this.locationFromPosition(r),e=this,u=e.getBlockAtIndex(c.index),null!=(c.offset=u.findLineBreakInDirectionFromPosition("backward",c.offset))&&(s=e.positionFromLocation(c),e=e.insertBlockBreakAtRange([s,s+1]),o.index+=1,o.offset-=e.getBlockAtIndex(c.index).getLength(),c.index+=1),c.offset=0,0===o.offset&&o.index>c.index?(o.index-=1,o.offset=e.getBlockAtIndex(o.index).getBlockBreakPosition()):(n=e.getBlockAtIndex(o.index),"\n"===n.text.getStringAtRange([o.offset-1,o.offset])?o.offset-=1:o.offset=n.findLineBreakInDirectionFromPosition("forward",o.offset),o.offset!==n.getBlockBreakPosition()&&(s=e.positionFromLocation(o),e=e.insertBlockBreakAtRange([s,s+1]))),l=e.positionFromLocation(c),r=e.positionFromLocation(o),t=i([l,r]),{document:e,range:t}},c.prototype.convertLineBreaksToBlockBreaksInRange=function(t){var e,n,o;return n=(t=i(t))[0],o=this.getStringAtRange(t).slice(0,-1),e=this,o.replace(/.*?\n/g,function(t){return n+=t.length,e=e.insertBlockBreakAtRange([n-1,n])}),{document:e,range:t}},c.prototype.consolidateBlocksAtRange=function(t){var e,n,o,r,s;return o=t=i(t),s=o[0],n=o[1],r=this.locationFromPosition(s).index,e=this.locationFromPosition(n).index,new this.constructor(this.blockList.consolidateFromIndexToIndex(r,e))},c.prototype.getDocumentAtRange=function(t){var e;return t=i(t),e=this.blockList.getSplittableListInRange(t).toArray(),new this.constructor(e)},c.prototype.getStringAtRange=function(t){var e,n,o;return o=t=i(t),n=o[o.length-1],n!==this.getLength()&&(e=-1),this.getDocumentAtRange(t).toString().slice(0,e)},c.prototype.getBlockAtIndex=function(t){return this.blockList.getObjectAtIndex(t)},c.prototype.getBlockAtPosition=function(t){var e;return e=this.locationFromPosition(t).index,this.getBlockAtIndex(e)},c.prototype.getTextAtIndex=function(t){var e;return null!=(e=this.getBlockAtIndex(t))?e.text:void 0},c.prototype.getTextAtPosition=function(t){var e;return e=this.locationFromPosition(t).index,this.getTextAtIndex(e)},c.prototype.getPieceAtPosition=function(t){var e,n,i;return i=this.locationFromPosition(t),e=i.index,n=i.offset,this.getTextAtIndex(e).getPieceAtPosition(n)},c.prototype.getCharacterAtPosition=function(t){var e,n,i;return i=this.locationFromPosition(t),e=i.index,n=i.offset,this.getTextAtIndex(e).getStringAtRange([n,n+1])},c.prototype.getLength=function(){return this.blockList.getEndPosition()},c.prototype.getBlocks=function(){return this.blockList.toArray()},c.prototype.getBlockCount=function(){return this.blockList.length},c.prototype.getEditCount=function(){return this.editCount},c.prototype.eachBlock=function(t){return this.blockList.eachObject(t)},c.prototype.eachBlockAtRange=function(t,e){var n,o,r,s,a,u,c,l,h,p,d,f;if(u=t=i(t),d=u[0],r=u[1],p=this.locationFromPosition(d),o=this.locationFromPosition(r),p.index===o.index)return n=this.getBlockAtIndex(p.index),f=[p.offset,o.offset],e(n,f,p.index);for(h=[],a=s=c=p.index,l=o.index;l>=c?l>=s:s>=l;a=l>=c?++s:--s)(n=this.getBlockAtIndex(a))?(f=function(){switch(a){case p.index:return [p.offset,n.text.getLength()];case o.index:return [0,o.offset];default:return [0,n.text.getLength()]}}(),h.push(e(n,f,a))):h.push(void 0);return h},c.prototype.getCommonAttributesAtRange=function(t){var n,r,s;return r=(t=i(t))[0],o(t)?this.getCommonAttributesAtPosition(r):(s=[],n=[],this.eachBlockAtRange(t,function(t,e){return e[0]!==e[1]?(s.push(t.text.getCommonAttributesAtRange(e)),n.push(l(t))):void 0
	}),e.Hash.fromCommonAttributesOfObjects(s).merge(e.Hash.fromCommonAttributesOfObjects(n)).toObject())},c.prototype.getCommonAttributesAtPosition=function(t){var n,i,o,r,s,a,c,h,p,d;if(p=this.locationFromPosition(t),s=p.index,h=p.offset,o=this.getBlockAtIndex(s),!o)return {};r=l(o),n=o.text.getAttributesAtPosition(h),i=o.text.getAttributesAtPosition(h-1),a=function(){var t,n;t=e.config.textAttributes,n=[];for(c in t)d=t[c],d.inheritable&&n.push(c);return n}();for(c in i)d=i[c],(d===n[c]||u.call(a,c)>=0)&&(r[c]=d);return r},c.prototype.getRangeOfCommonAttributeAtPosition=function(t,e){var n,o,r,s,a,u,c,l,h;return a=this.locationFromPosition(e),r=a.index,s=a.offset,h=this.getTextAtIndex(r),u=h.getExpandedRangeForAttributeAtOffset(t,s),l=u[0],o=u[1],c=this.positionFromLocation({index:r,offset:l}),n=this.positionFromLocation({index:r,offset:o}),i([c,n])},c.prototype.getBaseBlockAttributes=function(){var t,e,n,i,o,r,s;for(t=this.getBlockAtIndex(0).getAttributes(),n=i=1,s=this.getBlockCount();s>=1?s>i:i>s;n=s>=1?++i:--i)e=this.getBlockAtIndex(n).getAttributes(),r=Math.min(t.length,e.length),t=function(){var n,i,s;for(s=[],o=n=0,i=r;(i>=0?i>n:n>i)&&e[o]===t[o];o=i>=0?++n:--n)s.push(e[o]);return s}();return t},l=function(t){var e,n;return n={},(e=t.getLastAttribute())&&(n[e]=!0),n},c.prototype.getAttachmentById=function(t){var e,n,i,o;for(o=this.getAttachments(),n=0,i=o.length;i>n;n++)if(e=o[n],e.id===t)return e},c.prototype.getAttachmentPieces=function(){var t;return t=[],this.blockList.eachObject(function(e){var n;return n=e.text,t=t.concat(n.getAttachmentPieces())}),t},c.prototype.getAttachments=function(){var t,e,n,i,o;for(i=this.getAttachmentPieces(),o=[],t=0,e=i.length;e>t;t++)n=i[t],o.push(n.attachment);return o},c.prototype.getRangeOfAttachment=function(t){var e,n,o,r,s,a,u;for(r=0,s=this.blockList.toArray(),n=e=0,o=s.length;o>e;n=++e){if(a=s[n].text,u=a.getRangeOfAttachment(t))return i([r+u[0],r+u[1]]);r+=a.getLength();}},c.prototype.getLocationRangeOfAttachment=function(t){var e;return e=this.getRangeOfAttachment(t),this.locationRangeFromRange(e)},c.prototype.getAttachmentPieceForAttachment=function(t){var e,n,i,o;for(o=this.getAttachmentPieces(),e=0,n=o.length;n>e;e++)if(i=o[e],i.attachment===t)return i},c.prototype.findRangesForBlockAttribute=function(t){var e,n,i,o,r,s,a;for(r=0,s=[],a=this.getBlocks(),n=0,i=a.length;i>n;n++)e=a[n],o=e.getLength(),e.hasAttribute(t)&&s.push([r,r+o]),r+=o;return s},c.prototype.findRangesForTextAttribute=function(t,e){var n,i,o,r,s,a,u,c,l,h;for(h=(null!=e?e:{}).withValue,a=0,u=[],c=[],r=function(e){return null!=h?e.getAttribute(t)===h:e.hasAttribute(t)},l=this.getPieces(),n=0,i=l.length;i>n;n++)s=l[n],o=s.getLength(),r(s)&&(u[1]===a?u[1]=a+o:c.push(u=[a,a+o])),a+=o;return c},c.prototype.locationFromPosition=function(t){var e,n;return n=this.blockList.findIndexAndOffsetAtPosition(Math.max(0,t)),null!=n.index?n:(e=this.getBlocks(),{index:e.length-1,offset:e[e.length-1].getLength()})},c.prototype.positionFromLocation=function(t){return this.blockList.findPositionAtIndexAndOffset(t.index,t.offset)},c.prototype.locationRangeFromPosition=function(t){return i(this.locationFromPosition(t))},c.prototype.locationRangeFromRange=function(t){var e,n,o,r;if(t=i(t))return r=t[0],n=t[1],o=this.locationFromPosition(r),e=this.locationFromPosition(n),i([o,e])},c.prototype.rangeFromLocationRange=function(t){var e,n;return t=i(t),e=this.positionFromLocation(t[0]),o(t)||(n=this.positionFromLocation(t[1])),i([e,n])},c.prototype.isEqualTo=function(t){return this.blockList.isEqualTo(null!=t?t.blockList:void 0)},c.prototype.getTexts=function(){var t,e,n,i,o;for(i=this.getBlocks(),o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(t.text);return o},c.prototype.getPieces=function(){var t,e,n,i,o;for(n=[],i=this.getTexts(),t=0,e=i.length;e>t;t++)o=i[t],n.push.apply(n,o.getPieces());return n},c.prototype.getObjects=function(){return this.getBlocks().concat(this.getTexts()).concat(this.getPieces())},c.prototype.toSerializableDocument=function(){var t;return t=[],this.blockList.eachObject(function(e){return t.push(e.copyWithText(e.text.toSerializableText()))}),new this.constructor(t)},c.prototype.toString=function(){return this.blockList.toString()},c.prototype.toJSON=function(){return this.blockList.toJSON()},c.prototype.toConsole=function(){var t;return JSON.stringify(function(){var e,n,i,o;for(i=this.blockList.toArray(),o=[],e=0,n=i.length;n>e;e++)t=i[e],o.push(JSON.parse(t.text.toConsole()));return o}.call(this))},c}(e.Object);}.call(this),function(){e.LineBreakInsertion=function(){function t(t){var e;this.composition=t,this.document=this.composition.document,e=this.composition.getSelectedRange(),this.startPosition=e[0],this.endPosition=e[1],this.startLocation=this.document.locationFromPosition(this.startPosition),this.endLocation=this.document.locationFromPosition(this.endPosition),this.block=this.document.getBlockAtIndex(this.endLocation.index),this.breaksOnReturn=this.block.breaksOnReturn(),this.previousCharacter=this.block.text.getStringAtPosition(this.endLocation.offset-1),this.nextCharacter=this.block.text.getStringAtPosition(this.endLocation.offset);}return t.prototype.shouldInsertBlockBreak=function(){return this.block.hasAttributes()&&this.block.isListItem()&&!this.block.isEmpty()?0!==this.startLocation.offset:this.breaksOnReturn&&"\n"!==this.nextCharacter},t.prototype.shouldBreakFormattedBlock=function(){return this.block.hasAttributes()&&!this.block.isListItem()&&(this.breaksOnReturn&&"\n"===this.nextCharacter||"\n"===this.previousCharacter)},t.prototype.shouldDecreaseListLevel=function(){return this.block.hasAttributes()&&this.block.isListItem()&&this.block.isEmpty()},t.prototype.shouldPrependListItem=function(){return this.block.isListItem()&&0===this.startLocation.offset&&!this.block.isEmpty()},t.prototype.shouldRemoveLastBlockAttribute=function(){return this.block.hasAttributes()&&!this.block.isListItem()&&this.block.isEmpty()},t}();}.call(this),function(){var t,n,i,o,r,s,a,u,c,l,h=function(t,e){function n(){this.constructor=t;}for(var i in e)p.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},p={}.hasOwnProperty;s=e.normalizeRange,c=e.rangesAreEqual,u=e.rangeIsCollapsed,a=e.objectsAreEqual,t=e.arrayStartsWith,l=e.summarizeArrayChange,i=e.getAllAttributeNames,o=e.getBlockConfig,r=e.getTextConfig,n=e.extend,e.Composition=function(p){function d(){this.document=new e.Document,this.attachments=[],this.currentAttributes={},this.revision=0;}var f;return h(d,p),d.prototype.setDocument=function(t){var e;return t.isEqualTo(this.document)?void 0:(this.document=t,this.refreshAttachments(),this.revision++,null!=(e=this.delegate)&&"function"==typeof e.compositionDidChangeDocument?e.compositionDidChangeDocument(t):void 0)},d.prototype.getSnapshot=function(){return {document:this.document,selectedRange:this.getSelectedRange()}},d.prototype.loadSnapshot=function(t){var n,i,o,r;return n=t.document,r=t.selectedRange,null!=(i=this.delegate)&&"function"==typeof i.compositionWillLoadSnapshot&&i.compositionWillLoadSnapshot(),this.setDocument(null!=n?n:new e.Document),this.setSelection(null!=r?r:[0,0]),null!=(o=this.delegate)&&"function"==typeof o.compositionDidLoadSnapshot?o.compositionDidLoadSnapshot():void 0},d.prototype.insertText=function(t,e){var n,i,o,r;return r=(null!=e?e:{updatePosition:!0}).updatePosition,i=this.getSelectedRange(),this.setDocument(this.document.insertTextAtRange(t,i)),o=i[0],n=o+t.getLength(),r&&this.setSelection(n),this.notifyDelegateOfInsertionAtRange([o,n])},d.prototype.insertBlock=function(t){var n;return null==t&&(t=new e.Block),n=new e.Document([t]),this.insertDocument(n)},d.prototype.insertDocument=function(t){var n,i,o;return null==t&&(t=new e.Document),i=this.getSelectedRange(),this.setDocument(this.document.insertDocumentAtRange(t,i)),o=i[0],n=o+t.getLength(),this.setSelection(n),this.notifyDelegateOfInsertionAtRange([o,n])},d.prototype.insertString=function(t,n){var i,o;return i=this.getCurrentTextAttributes(),o=e.Text.textForStringWithAttributes(t,i),this.insertText(o,n)},d.prototype.insertBlockBreak=function(){var t,e,n;return e=this.getSelectedRange(),this.setDocument(this.document.insertBlockBreakAtRange(e)),n=e[0],t=n+1,this.setSelection(t),this.notifyDelegateOfInsertionAtRange([n,t])},d.prototype.insertLineBreak=function(){var t,n;return n=new e.LineBreakInsertion(this),n.shouldDecreaseListLevel()?(this.decreaseListLevel(),this.setSelection(n.startPosition)):n.shouldPrependListItem()?(t=new e.Document([n.block.copyWithoutText()]),this.insertDocument(t)):n.shouldInsertBlockBreak()?this.insertBlockBreak():n.shouldRemoveLastBlockAttribute()?this.removeLastBlockAttribute():n.shouldBreakFormattedBlock()?this.breakFormattedBlock(n):this.insertString("\n")},d.prototype.insertHTML=function(t){var n,i,o,r;return n=e.Document.fromHTML(t),o=this.getSelectedRange(),this.setDocument(this.document.mergeDocumentAtRange(n,o)),r=o[0],i=r+n.getLength()-1,this.setSelection(i),this.notifyDelegateOfInsertionAtRange([r,i])},d.prototype.replaceHTML=function(t){var n,i,o;return n=e.Document.fromHTML(t).copyUsingObjectsFromDocument(this.document),i=this.getLocationRange({strict:!1}),o=this.document.rangeFromLocationRange(i),this.setDocument(n),this.setSelection(o)},d.prototype.insertFile=function(t){return this.insertFiles([t])},d.prototype.insertFiles=function(t){var n,i,o,r,s,a;for(i=[],r=0,s=t.length;s>r;r++)o=t[r],(null!=(a=this.delegate)?a.compositionShouldAcceptFile(o):void 0)&&(n=e.Attachment.attachmentForFile(o),i.push(n));return this.insertAttachments(i)},d.prototype.insertAttachment=function(t){return this.insertAttachments([t])},d.prototype.insertAttachments=function(t){var n,i,o,r,s,a,u,c,l;for(c=new e.Text,r=0,s=t.length;s>r;r++)n=t[r],l=n.getType(),a=null!=(u=e.config.attachments[l])?u.presentation:void 0,o=this.getCurrentTextAttributes(),a&&(o.presentation=a),i=e.Text.textForAttachmentWithAttributes(n,o),c=c.appendText(i);return this.insertText(c)},d.prototype.shouldManageDeletingInDirection=function(t){var e;if(e=this.getLocationRange(),u(e)){if("backward"===t&&0===e[0].offset)return !0;if(this.shouldManageMovingCursorInDirection(t))return !0}else if(e[0].index!==e[1].index)return !0;return !1},d.prototype.deleteInDirection=function(t,e){var n,i,o,r,s,a,c,l;return r=(null!=e?e:{}).length,s=this.getLocationRange(),a=this.getSelectedRange(),c=u(a),c?o="backward"===t&&0===s[0].offset:l=s[0].index!==s[1].index,o&&this.canDecreaseBlockAttributeLevel()&&(i=this.getBlock(),i.isListItem()?this.decreaseListLevel():this.decreaseBlockAttributeLevel(),this.setSelection(a[0]),i.isEmpty())?!1:(c&&(a=this.getExpandedRangeInDirection(t,{length:r}),"backward"===t&&(n=this.getAttachmentAtRange(a))),n?(this.editAttachment(n),!1):(this.setDocument(this.document.removeTextAtRange(a)),this.setSelection(a[0]),o||l?!1:void 0))},d.prototype.moveTextFromRange=function(t){var e;return e=this.getSelectedRange()[0],this.setDocument(this.document.moveTextFromRangeToPosition(t,e)),this.setSelection(e)},d.prototype.removeAttachment=function(t){var e;return (e=this.document.getRangeOfAttachment(t))?(this.stopEditingAttachment(),this.setDocument(this.document.removeTextAtRange(e)),this.setSelection(e[0])):void 0},d.prototype.removeLastBlockAttribute=function(){var t,e,n,i;return n=this.getSelectedRange(),i=n[0],e=n[1],t=this.document.getBlockAtPosition(e),this.removeCurrentAttribute(t.getLastAttribute()),this.setSelection(i)},f=" ",d.prototype.insertPlaceholder=function(){return this.placeholderPosition=this.getPosition(),this.insertString(f)},d.prototype.selectPlaceholder=function(){return null!=this.placeholderPosition?(this.setSelectedRange([this.placeholderPosition,this.placeholderPosition+f.length]),this.getSelectedRange()):void 0},d.prototype.forgetPlaceholder=function(){return this.placeholderPosition=null},d.prototype.hasCurrentAttribute=function(t){var e;return e=this.currentAttributes[t],null!=e&&e!==!1},d.prototype.toggleCurrentAttribute=function(t){var e;return (e=!this.currentAttributes[t])?this.setCurrentAttribute(t,e):this.removeCurrentAttribute(t)},d.prototype.canSetCurrentAttribute=function(t){return o(t)?this.canSetCurrentBlockAttribute(t):this.canSetCurrentTextAttribute(t)},d.prototype.canSetCurrentTextAttribute=function(){var t,e,n,i,o;if(e=this.getSelectedDocument()){for(o=e.getAttachments(),n=0,i=o.length;i>n;n++)if(t=o[n],!t.hasContent())return !1;return !0}},d.prototype.canSetCurrentBlockAttribute=function(){var t;if(t=this.getBlock())return !t.isTerminalBlock()},d.prototype.setCurrentAttribute=function(t,e){return o(t)?this.setBlockAttribute(t,e):(this.setTextAttribute(t,e),this.currentAttributes[t]=e,this.notifyDelegateOfCurrentAttributesChange())},d.prototype.setTextAttribute=function(t,n){var i,o,r,s;if(o=this.getSelectedRange())return r=o[0],i=o[1],r!==i?this.setDocument(this.document.addAttributeAtRange(t,n,o)):"href"===t?(s=e.Text.textForStringWithAttributes(n,{href:n}),this.insertText(s)):void 0},d.prototype.setBlockAttribute=function(t,e){var i;if(i=this.getSelectedRange())return this.canSetCurrentAttribute(t)?(this.getBlock(),this.setDocument(this.document.applyBlockAttributeAtRange(t,e,i)),this.setSelection(i)):void 0},d.prototype.removeCurrentAttribute=function(t){return o(t)?(this.removeBlockAttribute(t),this.updateCurrentAttributes()):(this.removeTextAttribute(t),delete this.currentAttributes[t],this.notifyDelegateOfCurrentAttributesChange())},d.prototype.removeTextAttribute=function(t){var e;if(e=this.getSelectedRange())return this.setDocument(this.document.removeAttributeAtRange(t,e))},d.prototype.removeBlockAttribute=function(t){var e;if(e=this.getSelectedRange())return this.setDocument(this.document.removeAttributeAtRange(t,e))},d.prototype.canDecreaseNestingLevel=function(){var t;return (null!=(t=this.getBlock())?t.getNestingLevel():void 0)>0},d.prototype.canIncreaseNestingLevel=function(){var e,n,i;if(e=this.getBlock())return (null!=(i=o(e.getLastNestableAttribute()))?i.listAttribute:0)?(n=this.getPreviousBlock())?t(n.getListItemAttributes(),e.getListItemAttributes()):void 0:e.getNestingLevel()>0},d.prototype.decreaseNestingLevel=function(){var t;if(t=this.getBlock())return this.setDocument(this.document.replaceBlock(t,t.decreaseNestingLevel()))},d.prototype.increaseNestingLevel=function(){var t;if(t=this.getBlock())return this.setDocument(this.document.replaceBlock(t,t.increaseNestingLevel()))},d.prototype.canDecreaseBlockAttributeLevel=function(){var t;return (null!=(t=this.getBlock())?t.getAttributeLevel():void 0)>0},d.prototype.decreaseBlockAttributeLevel=function(){var t,e;return (t=null!=(e=this.getBlock())?e.getLastAttribute():void 0)?this.removeCurrentAttribute(t):void 0},d.prototype.decreaseListLevel=function(){var t,e,n,i,o,r;for(r=this.getSelectedRange()[0],o=this.document.locationFromPosition(r).index,n=o,t=this.getBlock().getAttributeLevel();(e=this.document.getBlockAtIndex(n+1))&&e.isListItem()&&e.getAttributeLevel()>t;)n++;return r=this.document.positionFromLocation({index:o,offset:0}),i=this.document.positionFromLocation({index:n,offset:0}),this.setDocument(this.document.removeLastListAttributeAtRange([r,i]))},d.prototype.updateCurrentAttributes=function(){var t,e,n,o,r,s;if(s=this.getSelectedRange({ignoreLock:!0})){for(e=this.document.getCommonAttributesAtRange(s),r=i(),n=0,o=r.length;o>n;n++)t=r[n],e[t]||this.canSetCurrentAttribute(t)||(e[t]=!1);if(!a(e,this.currentAttributes))return this.currentAttributes=e,this.notifyDelegateOfCurrentAttributesChange()}},d.prototype.getCurrentAttributes=function(){return n.call({},this.currentAttributes)},d.prototype.getCurrentTextAttributes=function(){var t,e,n,i;t={},n=this.currentAttributes;for(e in n)i=n[e],i!==!1&&r(e)&&(t[e]=i);return t},d.prototype.freezeSelection=function(){return this.setCurrentAttribute("frozen",!0)},d.prototype.thawSelection=function(){return this.removeCurrentAttribute("frozen")},d.prototype.hasFrozenSelection=function(){return this.hasCurrentAttribute("frozen")},d.proxyMethod("getSelectionManager().getPointRange"),d.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"),d.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"),d.proxyMethod("getSelectionManager().locationIsCursorTarget"),d.proxyMethod("getSelectionManager().selectionIsExpanded"),d.proxyMethod("delegate?.getSelectionManager"),d.prototype.setSelection=function(t){var e,n;return e=this.document.locationRangeFromRange(t),null!=(n=this.delegate)?n.compositionDidRequestChangingSelectionToLocationRange(e):void 0},d.prototype.getSelectedRange=function(){var t;return (t=this.getLocationRange())?this.document.rangeFromLocationRange(t):void 0},d.prototype.setSelectedRange=function(t){var e;return e=this.document.locationRangeFromRange(t),this.getSelectionManager().setLocationRange(e)},d.prototype.getPosition=function(){var t;return (t=this.getLocationRange())?this.document.positionFromLocation(t[0]):void 0},d.prototype.getLocationRange=function(t){var e,n;return null!=(e=null!=(n=this.targetLocationRange)?n:this.getSelectionManager().getLocationRange(t))?e:s({index:0,offset:0})},d.prototype.withTargetLocationRange=function(t,e){var n;this.targetLocationRange=t;try{n=e();}finally{this.targetLocationRange=null;}return n},d.prototype.withTargetRange=function(t,e){var n;return n=this.document.locationRangeFromRange(t),this.withTargetLocationRange(n,e)},d.prototype.withTargetDOMRange=function(t,e){var n;return n=this.createLocationRangeFromDOMRange(t,{strict:!1}),this.withTargetLocationRange(n,e)},d.prototype.getExpandedRangeInDirection=function(t,e){var n,i,o,r;return i=(null!=e?e:{}).length,o=this.getSelectedRange(),r=o[0],n=o[1],"backward"===t?i?r-=i:r=this.translateUTF16PositionFromOffset(r,-1):i?n+=i:n=this.translateUTF16PositionFromOffset(n,1),s([r,n])},d.prototype.shouldManageMovingCursorInDirection=function(t){var e;return this.editingAttachment?!0:(e=this.getExpandedRangeInDirection(t),null!=this.getAttachmentAtRange(e))},d.prototype.moveCursorInDirection=function(t){var e,n,i,o;return this.editingAttachment?i=this.document.getRangeOfAttachment(this.editingAttachment):(o=this.getSelectedRange(),i=this.getExpandedRangeInDirection(t),n=!c(o,i)),this.setSelectedRange("backward"===t?i[0]:i[1]),n&&(e=this.getAttachmentAtRange(i))?this.editAttachment(e):void 0},d.prototype.expandSelectionInDirection=function(t,e){var n,i;return n=(null!=e?e:{}).length,i=this.getExpandedRangeInDirection(t,{length:n}),this.setSelectedRange(i)},d.prototype.expandSelectionForEditing=function(){return this.hasCurrentAttribute("href")?this.expandSelectionAroundCommonAttribute("href"):void 0},d.prototype.expandSelectionAroundCommonAttribute=function(t){var e,n;return e=this.getPosition(),n=this.document.getRangeOfCommonAttributeAtPosition(t,e),this.setSelectedRange(n)},d.prototype.selectionContainsAttachments=function(){var t;return (null!=(t=this.getSelectedAttachments())?t.length:void 0)>0},d.prototype.selectionIsInCursorTarget=function(){return this.editingAttachment||this.positionIsCursorTarget(this.getPosition())},d.prototype.positionIsCursorTarget=function(t){var e;return (e=this.document.locationFromPosition(t))?this.locationIsCursorTarget(e):void 0},d.prototype.positionIsBlockBreak=function(t){var e;return null!=(e=this.document.getPieceAtPosition(t))?e.isBlockBreak():void 0},d.prototype.getSelectedDocument=function(){var t;return (t=this.getSelectedRange())?this.document.getDocumentAtRange(t):void 0},d.prototype.getSelectedAttachments=function(){var t;return null!=(t=this.getSelectedDocument())?t.getAttachments():void 0},d.prototype.getAttachments=function(){return this.attachments.slice(0)},d.prototype.refreshAttachments=function(){var t,e,n,i,o,r,s,a,u,c,h,p;for(n=this.document.getAttachments(),a=l(this.attachments,n),t=a.added,h=a.removed,this.attachments=n,i=0,r=h.length;r>i;i++)e=h[i],e.delegate=null,null!=(u=this.delegate)&&"function"==typeof u.compositionDidRemoveAttachment&&u.compositionDidRemoveAttachment(e);for(p=[],o=0,s=t.length;s>o;o++)e=t[o],e.delegate=this,p.push(null!=(c=this.delegate)&&"function"==typeof c.compositionDidAddAttachment?c.compositionDidAddAttachment(e):void 0);return p},d.prototype.attachmentDidChangeAttributes=function(t){var e;return this.revision++,null!=(e=this.delegate)&&"function"==typeof e.compositionDidEditAttachment?e.compositionDidEditAttachment(t):void 0},d.prototype.attachmentDidChangePreviewURL=function(t){var e;return this.revision++,null!=(e=this.delegate)&&"function"==typeof e.compositionDidChangeAttachmentPreviewURL?e.compositionDidChangeAttachmentPreviewURL(t):void 0},d.prototype.editAttachment=function(t,e){var n;if(t!==this.editingAttachment)return this.stopEditingAttachment(),this.editingAttachment=t,null!=(n=this.delegate)&&"function"==typeof n.compositionDidStartEditingAttachment?n.compositionDidStartEditingAttachment(this.editingAttachment,e):void 0},d.prototype.stopEditingAttachment=function(){var t;if(this.editingAttachment)return null!=(t=this.delegate)&&"function"==typeof t.compositionDidStopEditingAttachment&&t.compositionDidStopEditingAttachment(this.editingAttachment),this.editingAttachment=null},d.prototype.updateAttributesForAttachment=function(t,e){return this.setDocument(this.document.updateAttributesForAttachment(t,e))},d.prototype.removeAttributeForAttachment=function(t,e){return this.setDocument(this.document.removeAttributeForAttachment(t,e))},d.prototype.breakFormattedBlock=function(t){var n,i,o,r,s;return i=t.document,n=t.block,r=t.startPosition,s=[r-1,r],n.getBlockBreakPosition()===t.startLocation.offset?(n.breaksOnReturn()&&"\n"===t.nextCharacter?r+=1:i=i.removeTextAtRange(s),s=[r,r]):"\n"===t.nextCharacter?"\n"===t.previousCharacter?s=[r-1,r+1]:(s=[r,r+1],r+=1):t.startLocation.offset-1!==0&&(r+=1),o=new e.Document([n.removeLastAttribute().copyWithoutText()]),this.setDocument(i.insertDocumentAtRange(o,s)),this.setSelection(r)},d.prototype.getPreviousBlock=function(){var t,e;return (e=this.getLocationRange())&&(t=e[0].index,t>0)?this.document.getBlockAtIndex(t-1):void 0},d.prototype.getBlock=function(){var t;return (t=this.getLocationRange())?this.document.getBlockAtIndex(t[0].index):void 0},d.prototype.getAttachmentAtRange=function(t){var n;return n=this.document.getDocumentAtRange(t),n.toString()===e.OBJECT_REPLACEMENT_CHARACTER+"\n"?n.getAttachments()[0]:void 0},d.prototype.notifyDelegateOfCurrentAttributesChange=function(){var t;return null!=(t=this.delegate)&&"function"==typeof t.compositionDidChangeCurrentAttributes?t.compositionDidChangeCurrentAttributes(this.currentAttributes):void 0},d.prototype.notifyDelegateOfInsertionAtRange=function(t){var e;return null!=(e=this.delegate)&&"function"==typeof e.compositionDidPerformInsertionAtRange?e.compositionDidPerformInsertionAtRange(t):void 0},d.prototype.translateUTF16PositionFromOffset=function(t,e){var n,i;return i=this.document.toUTF16String(),n=i.offsetFromUCS2Offset(t),i.offsetToUCS2Offset(n+e)},d}(e.BasicObject);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.UndoManager=function(e){function n(t){this.composition=t,this.undoEntries=[],this.redoEntries=[];}var i;return t(n,e),n.prototype.recordUndoEntry=function(t,e){var n,o,r,s,a;return s=null!=e?e:{},o=s.context,n=s.consolidatable,r=this.undoEntries.slice(-1)[0],n&&i(r,t,o)?void 0:(a=this.createEntry({description:t,context:o}),this.undoEntries.push(a),this.redoEntries=[])},n.prototype.undo=function(){var t,e;return (e=this.undoEntries.pop())?(t=this.createEntry(e),this.redoEntries.push(t),this.composition.loadSnapshot(e.snapshot)):void 0},n.prototype.redo=function(){var t,e;return (t=this.redoEntries.pop())?(e=this.createEntry(t),this.undoEntries.push(e),this.composition.loadSnapshot(t.snapshot)):void 0},n.prototype.canUndo=function(){return this.undoEntries.length>0},n.prototype.canRedo=function(){return this.redoEntries.length>0},n.prototype.createEntry=function(t){var e,n,i;return i=null!=t?t:{},n=i.description,e=i.context,{description:null!=n?n.toString():void 0,context:JSON.stringify(e),snapshot:this.composition.getSnapshot()}},i=function(t,e,n){return (null!=t?t.description:void 0)===(null!=e?e.toString():void 0)&&(null!=t?t.context:void 0)===JSON.stringify(n)},n}(e.BasicObject);}.call(this),function(){var t;e.attachmentGalleryFilter=function(e){var n;return n=new t(e),n.perform(),n.getSnapshot()},t=function(){function t(t){this.document=t.document,this.selectedRange=t.selectedRange;}var e,n,i;return e="attachmentGallery",n="presentation",i="gallery",t.prototype.perform=function(){return this.removeBlockAttribute(),this.applyBlockAttribute()},t.prototype.getSnapshot=function(){return {document:this.document,selectedRange:this.selectedRange}},t.prototype.removeBlockAttribute=function(){var t,n,i,o,r;for(o=this.findRangesOfBlocks(),r=[],t=0,n=o.length;n>t;t++)i=o[t],r.push(this.document=this.document.removeAttributeAtRange(e,i));return r},t.prototype.applyBlockAttribute=function(){var t,n,i,o,r,s;for(i=0,r=this.findRangesOfPieces(),s=[],t=0,n=r.length;n>t;t++)o=r[t],o[1]-o[0]>1&&(o[0]+=i,o[1]+=i,"\n"!==this.document.getCharacterAtPosition(o[1])&&(this.document=this.document.insertBlockBreakAtRange(o[1]),o[1]<this.selectedRange[1]&&this.moveSelectedRangeForward(),o[1]++,i++),0!==o[0]&&"\n"!==this.document.getCharacterAtPosition(o[0]-1)&&(this.document=this.document.insertBlockBreakAtRange(o[0]),o[0]<this.selectedRange[0]&&this.moveSelectedRangeForward(),o[0]++,i++),s.push(this.document=this.document.applyBlockAttributeAtRange(e,!0,o)));return s},t.prototype.findRangesOfBlocks=function(){return this.document.findRangesForBlockAttribute(e)},t.prototype.findRangesOfPieces=function(){return this.document.findRangesForTextAttribute(n,{withValue:i})},t.prototype.moveSelectedRangeForward=function(){return this.selectedRange[0]+=1,this.selectedRange[1]+=1},t}();}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.Editor=function(){function n(n,o,r){this.composition=n,this.selectionManager=o,this.element=r,this.insertFiles=t(this.insertFiles,this),this.undoManager=new e.UndoManager(this.composition),this.filters=i.slice(0);}var i;return i=[e.attachmentGalleryFilter],n.prototype.loadDocument=function(t){return this.loadSnapshot({document:t,selectedRange:[0,0]})},n.prototype.loadHTML=function(t){return null==t&&(t=""),this.loadDocument(e.Document.fromHTML(t,{referenceElement:this.element}))},n.prototype.loadJSON=function(t){var n,i;return n=t.document,i=t.selectedRange,n=e.Document.fromJSON(n),this.loadSnapshot({document:n,selectedRange:i})},n.prototype.loadSnapshot=function(t){return this.undoManager=new e.UndoManager(this.composition),this.composition.loadSnapshot(t)},n.prototype.getDocument=function(){return this.composition.document},n.prototype.getSelectedDocument=function(){return this.composition.getSelectedDocument()},n.prototype.getSnapshot=function(){return this.composition.getSnapshot()},n.prototype.toJSON=function(){return this.getSnapshot()},n.prototype.deleteInDirection=function(t){return this.composition.deleteInDirection(t)},n.prototype.insertAttachment=function(t){return this.composition.insertAttachment(t)},n.prototype.insertAttachments=function(t){return this.composition.insertAttachments(t)},n.prototype.insertDocument=function(t){return this.composition.insertDocument(t)},n.prototype.insertFile=function(t){return this.composition.insertFile(t)},n.prototype.insertFiles=function(t){return this.composition.insertFiles(t)},n.prototype.insertHTML=function(t){return this.composition.insertHTML(t)},n.prototype.insertString=function(t){return this.composition.insertString(t)},n.prototype.insertText=function(t){return this.composition.insertText(t)},n.prototype.insertLineBreak=function(){return this.composition.insertLineBreak()},n.prototype.getSelectedRange=function(){return this.composition.getSelectedRange()},n.prototype.getPosition=function(){return this.composition.getPosition()},n.prototype.getClientRectAtPosition=function(t){var e;return e=this.getDocument().locationRangeFromRange([t,t+1]),this.selectionManager.getClientRectAtLocationRange(e)},n.prototype.expandSelectionInDirection=function(t){return this.composition.expandSelectionInDirection(t)},n.prototype.moveCursorInDirection=function(t){return this.composition.moveCursorInDirection(t)},n.prototype.setSelectedRange=function(t){return this.composition.setSelectedRange(t)},n.prototype.activateAttribute=function(t,e){return null==e&&(e=!0),this.composition.setCurrentAttribute(t,e)},n.prototype.attributeIsActive=function(t){return this.composition.hasCurrentAttribute(t)},n.prototype.canActivateAttribute=function(t){return this.composition.canSetCurrentAttribute(t)},n.prototype.deactivateAttribute=function(t){return this.composition.removeCurrentAttribute(t)},n.prototype.canDecreaseNestingLevel=function(){return this.composition.canDecreaseNestingLevel()},n.prototype.canIncreaseNestingLevel=function(){return this.composition.canIncreaseNestingLevel()},n.prototype.decreaseNestingLevel=function(){return this.canDecreaseNestingLevel()?this.composition.decreaseNestingLevel():void 0},n.prototype.increaseNestingLevel=function(){return this.canIncreaseNestingLevel()?this.composition.increaseNestingLevel():void 0},n.prototype.canRedo=function(){return this.undoManager.canRedo()},n.prototype.canUndo=function(){return this.undoManager.canUndo()},n.prototype.recordUndoEntry=function(t,e){var n,i,o;return o=null!=e?e:{},i=o.context,n=o.consolidatable,this.undoManager.recordUndoEntry(t,{context:i,consolidatable:n})},n.prototype.redo=function(){return this.canRedo()?this.undoManager.redo():void 0},n.prototype.undo=function(){return this.canUndo()?this.undoManager.undo():void 0},n}();}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.ManagedAttachment=function(e){function n(t,e){var n;this.attachmentManager=t,this.attachment=e,n=this.attachment,this.id=n.id,this.file=n.file;}return t(n,e),n.prototype.remove=function(){return this.attachmentManager.requestRemovalOfAttachment(this.attachment)},n.proxyMethod("attachment.getAttribute"),n.proxyMethod("attachment.hasAttribute"),n.proxyMethod("attachment.setAttribute"),n.proxyMethod("attachment.getAttributes"),n.proxyMethod("attachment.setAttributes"),n.proxyMethod("attachment.isPending"),n.proxyMethod("attachment.isPreviewable"),n.proxyMethod("attachment.getURL"),n.proxyMethod("attachment.getHref"),n.proxyMethod("attachment.getFilename"),n.proxyMethod("attachment.getFilesize"),n.proxyMethod("attachment.getFormattedFilesize"),n.proxyMethod("attachment.getExtension"),n.proxyMethod("attachment.getContentType"),n.proxyMethod("attachment.getFile"),n.proxyMethod("attachment.setFile"),n.proxyMethod("attachment.releaseFile"),n.proxyMethod("attachment.getUploadProgress"),n.proxyMethod("attachment.setUploadProgress"),n}(e.BasicObject);}.call(this),function(){var t=function(t,e){function i(){this.constructor=t;}for(var o in e)n.call(e,o)&&(t[o]=e[o]);return i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype,t},n={}.hasOwnProperty;e.AttachmentManager=function(n){function i(t){var e,n,i;for(null==t&&(t=[]),this.managedAttachments={},n=0,i=t.length;i>n;n++)e=t[n],this.manageAttachment(e);}return t(i,n),i.prototype.getAttachments=function(){var t,e,n,i;n=this.managedAttachments,i=[];for(e in n)t=n[e],i.push(t);return i},i.prototype.manageAttachment=function(t){var n,i;return null!=(n=this.managedAttachments)[i=t.id]?n[i]:n[i]=new e.ManagedAttachment(this,t)},i.prototype.attachmentIsManaged=function(t){return t.id in this.managedAttachments},i.prototype.requestRemovalOfAttachment=function(t){var e;return this.attachmentIsManaged(t)&&null!=(e=this.delegate)&&"function"==typeof e.attachmentManagerDidRequestRemovalOfAttachment?e.attachmentManagerDidRequestRemovalOfAttachment(t):void 0},i.prototype.unmanageAttachment=function(t){var e;return e=this.managedAttachments[t.id],delete this.managedAttachments[t.id],e},i}(e.BasicObject);}.call(this),function(){var t,n,i,o,r,s,a,u,c,l,h;t=e.elementContainsNode,n=e.findChildIndexOfNode,r=e.nodeIsBlockStart,s=e.nodeIsBlockStartComment,o=e.nodeIsBlockContainer,a=e.nodeIsCursorTarget,u=e.nodeIsEmptyTextNode,c=e.nodeIsTextNode,i=e.nodeIsAttachmentElement,l=e.tagName,h=e.walkTree,e.LocationMapper=function(){function e(t){this.element=t;}var p,d,f,g;return e.prototype.findLocationFromContainerAndOffset=function(e,i,o){var s,u,l,p,g,m,v;for(m=(null!=o?o:{strict:!0}).strict,u=0,l=!1,p={index:0,offset:0},(s=this.findAttachmentElementParentForNode(e))&&(e=s.parentNode,i=n(s)),v=h(this.element,{usingFilter:f});v.nextNode();){if(g=v.currentNode,g===e&&c(e)){a(g)||(p.offset+=i);
	break}if(g.parentNode===e){if(u++===i)break}else if(!t(e,g)&&u>0)break;r(g,{strict:m})?(l&&p.index++,p.offset=0,l=!0):p.offset+=d(g);}return p},e.prototype.findContainerAndOffsetFromLocation=function(t){var e,i,s,u,l;if(0===t.index&&0===t.offset){for(e=this.element,u=0;e.firstChild;)if(e=e.firstChild,o(e)){u=1;break}return [e,u]}if(l=this.findNodeAndOffsetFromLocation(t),i=l[0],s=l[1],i){if(c(i))0===d(i)?(e=i.parentNode.parentNode,u=n(i.parentNode),a(i,{name:"right"})&&u++):(e=i,u=t.offset-s);else {if(e=i.parentNode,!r(i.previousSibling)&&!o(e))for(;i===e.lastChild&&(i=e,e=e.parentNode,!o(e)););u=n(i),0!==t.offset&&u++;}return [e,u]}},e.prototype.findNodeAndOffsetFromLocation=function(t){var e,n,i,o,r,s,u,l;for(u=0,l=this.getSignificantNodesForIndex(t.index),n=0,i=l.length;i>n;n++){if(e=l[n],o=d(e),t.offset<=u+o)if(c(e)){if(r=e,s=u,t.offset===s&&a(r))break}else r||(r=e,s=u);if(u+=o,u>t.offset)break}return [r,s]},e.prototype.findAttachmentElementParentForNode=function(t){for(;t&&t!==this.element;){if(i(t))return t;t=t.parentNode;}},e.prototype.getSignificantNodesForIndex=function(t){var e,n,i,o,r;for(i=[],r=h(this.element,{usingFilter:p}),o=!1;r.nextNode();)if(n=r.currentNode,s(n)){if("undefined"!=typeof e&&null!==e?e++:e=0,e===t)o=!0;else if(o)break}else o&&i.push(n);return i},d=function(t){var e;return t.nodeType===Node.TEXT_NODE?a(t)?0:(e=t.textContent,e.length):"br"===l(t)||i(t)?1:0},p=function(t){return g(t)===NodeFilter.FILTER_ACCEPT?f(t):NodeFilter.FILTER_REJECT},g=function(t){return u(t)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},f=function(t){return i(t.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},e}();}.call(this),function(){var t,n,i=[].slice;t=e.getDOMRange,n=e.setDOMRange,e.PointMapper=function(){function e(){}return e.prototype.createDOMRangeFromPoint=function(e){var i,o,r,s,a,u,c,l;if(c=e.x,l=e.y,document.caretPositionFromPoint)return a=document.caretPositionFromPoint(c,l),r=a.offsetNode,o=a.offset,i=document.createRange(),i.setStart(r,o),i;if(document.caretRangeFromPoint)return document.caretRangeFromPoint(c,l);if(document.body.createTextRange){s=t();try{u=document.body.createTextRange(),u.moveToPoint(c,l),u.select();}catch(h){}return i=t(),n(s),i}},e.prototype.getClientRectsForDOMRange=function(t){var e,n,o;return n=i.call(t.getClientRects()),o=n[0],e=n[n.length-1],[o,e]},e}();}.call(this),function(){var t,n=function(t,e){return function(){return t.apply(e,arguments)}},i=function(t,e){function n(){this.constructor=t;}for(var i in e)o.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},o={}.hasOwnProperty,r=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};t=e.getDOMRange,e.SelectionChangeObserver=function(e){function o(){this.run=n(this.run,this),this.update=n(this.update,this),this.selectionManagers=[];}var s;return i(o,e),o.prototype.start=function(){return this.started?void 0:(this.started=!0,"onselectionchange"in document?document.addEventListener("selectionchange",this.update,!0):this.run())},o.prototype.stop=function(){return this.started?(this.started=!1,document.removeEventListener("selectionchange",this.update,!0)):void 0},o.prototype.registerSelectionManager=function(t){return r.call(this.selectionManagers,t)<0?(this.selectionManagers.push(t),this.start()):void 0},o.prototype.unregisterSelectionManager=function(t){var e;return this.selectionManagers=function(){var n,i,o,r;for(o=this.selectionManagers,r=[],n=0,i=o.length;i>n;n++)e=o[n],e!==t&&r.push(e);return r}.call(this),0===this.selectionManagers.length?this.stop():void 0},o.prototype.notifySelectionManagersOfSelectionChange=function(){var t,e,n,i,o;for(n=this.selectionManagers,i=[],t=0,e=n.length;e>t;t++)o=n[t],i.push(o.selectionDidChange());return i},o.prototype.update=function(){var e;return e=t(),s(e,this.domRange)?void 0:(this.domRange=e,this.notifySelectionManagersOfSelectionChange())},o.prototype.reset=function(){return this.domRange=null,this.update()},o.prototype.run=function(){return this.started?(this.update(),requestAnimationFrame(this.run)):void 0},s=function(t,e){return (null!=t?t.startContainer:void 0)===(null!=e?e.startContainer:void 0)&&(null!=t?t.startOffset:void 0)===(null!=e?e.startOffset:void 0)&&(null!=t?t.endContainer:void 0)===(null!=e?e.endContainer:void 0)&&(null!=t?t.endOffset:void 0)===(null!=e?e.endOffset:void 0)},o}(e.BasicObject),null==e.selectionChangeObserver&&(e.selectionChangeObserver=new e.SelectionChangeObserver);}.call(this),function(){var t,n,i,o,r,s,a,u,c,l,h=function(t,e){return function(){return t.apply(e,arguments)}},p=function(t,e){function n(){this.constructor=t;}for(var i in e)d.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},d={}.hasOwnProperty;i=e.getDOMSelection,n=e.getDOMRange,l=e.setDOMRange,t=e.elementContainsNode,s=e.nodeIsCursorTarget,r=e.innerElementIsActive,o=e.handleEvent,a=e.normalizeRange,u=e.rangeIsCollapsed,c=e.rangesAreEqual,e.SelectionManager=function(d){function f(t){this.element=t,this.selectionDidChange=h(this.selectionDidChange,this),this.didMouseDown=h(this.didMouseDown,this),this.locationMapper=new e.LocationMapper(this.element),this.pointMapper=new e.PointMapper,this.lockCount=0,o("mousedown",{onElement:this.element,withCallback:this.didMouseDown});}return p(f,d),f.prototype.getLocationRange=function(t){var i;return null==t&&(t={}),t.strict===!1?this.createLocationRangeFromDOMRange(n(),{strict:!1}):t.ignoreLock?this.currentLocationRange:null!=(i=this.lockedLocationRange)?i:this.currentLocationRange},f.prototype.setLocationRange=function(t){var e;if(!this.lockedLocationRange)return t=a(t),(e=this.createDOMRangeFromLocationRange(t))?(l(e),this.updateCurrentLocationRange(t)):void 0},f.prototype.setLocationRangeFromPointRange=function(t){var e,n;return t=a(t),n=this.getLocationAtPoint(t[0]),e=this.getLocationAtPoint(t[1]),this.setLocationRange([n,e])},f.prototype.getClientRectAtLocationRange=function(t){var e;return (e=this.createDOMRangeFromLocationRange(t))?this.getClientRectsForDOMRange(e)[1]:void 0},f.prototype.locationIsCursorTarget=function(t){var e,i;return i=this.findNodeAndOffsetFromLocation(t),e=i[0],i[1],s(e)},f.prototype.lock=function(){return 0===this.lockCount++?(this.updateCurrentLocationRange(),this.lockedLocationRange=this.getLocationRange()):void 0},f.prototype.unlock=function(){var t;return 0===--this.lockCount&&(t=this.lockedLocationRange,this.lockedLocationRange=null,null!=t)?this.setLocationRange(t):void 0},f.prototype.clearSelection=function(){var t;return null!=(t=i())?t.removeAllRanges():void 0},f.prototype.selectionIsCollapsed=function(){var t;return (null!=(t=n())?t.collapsed:void 0)===!0},f.prototype.selectionIsExpanded=function(){return !this.selectionIsCollapsed()},f.prototype.createLocationRangeFromDOMRange=function(t,e){var n,i;if(null!=t&&this.domRangeWithinElement(t)&&(i=this.findLocationFromContainerAndOffset(t.startContainer,t.startOffset,e)))return t.collapsed||(n=this.findLocationFromContainerAndOffset(t.endContainer,t.endOffset,e)),a([i,n])},f.proxyMethod("locationMapper.findLocationFromContainerAndOffset"),f.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"),f.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"),f.proxyMethod("pointMapper.createDOMRangeFromPoint"),f.proxyMethod("pointMapper.getClientRectsForDOMRange"),f.prototype.didMouseDown=function(){return this.pauseTemporarily()},f.prototype.pauseTemporarily=function(){var e,n,i,r;return this.paused=!0,n=function(e){return function(){var n,o,s;for(e.paused=!1,clearTimeout(r),o=0,s=i.length;s>o;o++)n=i[o],n.destroy();return t(document,e.element)?e.selectionDidChange():void 0}}(this),r=setTimeout(n,200),i=function(){var t,i,r,s;for(r=["mousemove","keydown"],s=[],t=0,i=r.length;i>t;t++)e=r[t],s.push(o(e,{onElement:document,withCallback:n}));return s}()},f.prototype.selectionDidChange=function(){return this.paused||r(this.element)?void 0:this.updateCurrentLocationRange()},f.prototype.updateCurrentLocationRange=function(t){var e;return (null!=t?t:t=this.createLocationRangeFromDOMRange(n()))&&!c(t,this.currentLocationRange)?(this.currentLocationRange=t,null!=(e=this.delegate)&&"function"==typeof e.locationRangeDidChange?e.locationRangeDidChange(this.currentLocationRange.slice(0)):void 0):void 0},f.prototype.createDOMRangeFromLocationRange=function(t){var e,n,i,o;return i=this.findContainerAndOffsetFromLocation(t[0]),n=u(t)?i:null!=(o=this.findContainerAndOffsetFromLocation(t[1]))?o:i,null!=i&&null!=n?(e=document.createRange(),e.setStart.apply(e,i),e.setEnd.apply(e,n),e):void 0},f.prototype.getLocationAtPoint=function(t){var e,n;return (e=this.createDOMRangeFromPoint(t))&&null!=(n=this.createLocationRangeFromDOMRange(e))?n[0]:void 0},f.prototype.domRangeWithinElement=function(e){return e.collapsed?t(this.element,e.startContainer):t(this.element,e.startContainer)&&t(this.element,e.endContainer)},f}(e.BasicObject);}.call(this),function(){var t,n,i,o,r=function(t,e){function n(){this.constructor=t;}for(var i in e)s.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty,a=[].slice;i=e.rangeIsCollapsed,o=e.rangesAreEqual,n=e.objectsAreEqual,t=e.getBlockConfig,e.EditorController=function(s){function u(t){var n,i;this.editorElement=t.editorElement,n=t.document,i=t.html,this.selectionManager=new e.SelectionManager(this.editorElement),this.selectionManager.delegate=this,this.composition=new e.Composition,this.composition.delegate=this,this.attachmentManager=new e.AttachmentManager(this.composition.getAttachments()),this.attachmentManager.delegate=this,this.inputController=new(e["Level"+e.config.input.getLevel()+"InputController"])(this.editorElement),this.inputController.delegate=this,this.inputController.responder=this.composition,this.compositionController=new e.CompositionController(this.editorElement,this.composition),this.compositionController.delegate=this,this.toolbarController=new e.ToolbarController(this.editorElement.toolbarElement),this.toolbarController.delegate=this,this.editor=new e.Editor(this.composition,this.selectionManager,this.editorElement),null!=n?this.editor.loadDocument(n):this.editor.loadHTML(i);}var c;return r(u,s),u.prototype.registerSelectionManager=function(){return e.selectionChangeObserver.registerSelectionManager(this.selectionManager)},u.prototype.unregisterSelectionManager=function(){return e.selectionChangeObserver.unregisterSelectionManager(this.selectionManager)},u.prototype.render=function(){return this.compositionController.render()},u.prototype.reparse=function(){return this.composition.replaceHTML(this.editorElement.innerHTML)},u.prototype.compositionDidChangeDocument=function(){return this.notifyEditorElement("document-change"),this.handlingInput?void 0:this.render()},u.prototype.compositionDidChangeCurrentAttributes=function(t){return this.currentAttributes=t,this.toolbarController.updateAttributes(this.currentAttributes),this.updateCurrentActions(),this.notifyEditorElement("attributes-change",{attributes:this.currentAttributes})},u.prototype.compositionDidPerformInsertionAtRange=function(t){return this.pasting?this.pastedRange=t:void 0},u.prototype.compositionShouldAcceptFile=function(t){return this.notifyEditorElement("file-accept",{file:t})},u.prototype.compositionDidAddAttachment=function(t){var e;return e=this.attachmentManager.manageAttachment(t),this.notifyEditorElement("attachment-add",{attachment:e})},u.prototype.compositionDidEditAttachment=function(t){var e;return this.compositionController.rerenderViewForObject(t),e=this.attachmentManager.manageAttachment(t),this.notifyEditorElement("attachment-edit",{attachment:e}),this.notifyEditorElement("change")},u.prototype.compositionDidChangeAttachmentPreviewURL=function(t){return this.compositionController.invalidateViewForObject(t),this.notifyEditorElement("change")},u.prototype.compositionDidRemoveAttachment=function(t){var e;return e=this.attachmentManager.unmanageAttachment(t),this.notifyEditorElement("attachment-remove",{attachment:e})},u.prototype.compositionDidStartEditingAttachment=function(t,e){return this.attachmentLocationRange=this.composition.document.getLocationRangeOfAttachment(t),this.compositionController.installAttachmentEditorForAttachment(t,e),this.selectionManager.setLocationRange(this.attachmentLocationRange)},u.prototype.compositionDidStopEditingAttachment=function(){return this.compositionController.uninstallAttachmentEditor(),this.attachmentLocationRange=null},u.prototype.compositionDidRequestChangingSelectionToLocationRange=function(t){return !this.loadingSnapshot||this.isFocused()?(this.requestedLocationRange=t,this.compositionRevisionWhenLocationRangeRequested=this.composition.revision,this.handlingInput?void 0:this.render()):void 0},u.prototype.compositionWillLoadSnapshot=function(){return this.loadingSnapshot=!0},u.prototype.compositionDidLoadSnapshot=function(){return this.compositionController.refreshViewCache(),this.render(),this.loadingSnapshot=!1},u.prototype.getSelectionManager=function(){return this.selectionManager},u.proxyMethod("getSelectionManager().setLocationRange"),u.proxyMethod("getSelectionManager().getLocationRange"),u.prototype.attachmentManagerDidRequestRemovalOfAttachment=function(t){return this.removeAttachment(t)},u.prototype.compositionControllerWillSyncDocumentView=function(){return this.inputController.editorWillSyncDocumentView(),this.selectionManager.lock(),this.selectionManager.clearSelection()},u.prototype.compositionControllerDidSyncDocumentView=function(){return this.inputController.editorDidSyncDocumentView(),this.selectionManager.unlock(),this.updateCurrentActions(),this.notifyEditorElement("sync")},u.prototype.compositionControllerDidRender=function(){return null!=this.requestedLocationRange&&(this.compositionRevisionWhenLocationRangeRequested===this.composition.revision&&this.selectionManager.setLocationRange(this.requestedLocationRange),this.requestedLocationRange=null,this.compositionRevisionWhenLocationRangeRequested=null),this.renderedCompositionRevision!==this.composition.revision&&(this.runEditorFilters(),this.composition.updateCurrentAttributes(),this.notifyEditorElement("render")),this.renderedCompositionRevision=this.composition.revision},u.prototype.compositionControllerDidFocus=function(){return this.isFocusedInvisibly()&&this.setLocationRange({index:0,offset:0}),this.toolbarController.hideDialog(),this.notifyEditorElement("focus")},u.prototype.compositionControllerDidBlur=function(){return this.notifyEditorElement("blur")},u.prototype.compositionControllerDidSelectAttachment=function(t,e){return this.toolbarController.hideDialog(),this.composition.editAttachment(t,e)},u.prototype.compositionControllerDidRequestDeselectingAttachment=function(t){var e,n;return e=null!=(n=this.attachmentLocationRange)?n:this.composition.document.getLocationRangeOfAttachment(t),this.selectionManager.setLocationRange(e[1])},u.prototype.compositionControllerWillUpdateAttachment=function(t){return this.editor.recordUndoEntry("Edit Attachment",{context:t.id,consolidatable:!0})},u.prototype.compositionControllerDidRequestRemovalOfAttachment=function(t){return this.removeAttachment(t)},u.prototype.inputControllerWillHandleInput=function(){return this.handlingInput=!0,this.requestedRender=!1},u.prototype.inputControllerDidRequestRender=function(){return this.requestedRender=!0},u.prototype.inputControllerDidHandleInput=function(){return this.handlingInput=!1,this.requestedRender?(this.requestedRender=!1,this.render()):void 0},u.prototype.inputControllerDidAllowUnhandledInput=function(){return this.notifyEditorElement("change")},u.prototype.inputControllerDidRequestReparse=function(){return this.reparse()},u.prototype.inputControllerWillPerformTyping=function(){return this.recordTypingUndoEntry()},u.prototype.inputControllerWillPerformFormatting=function(t){return this.recordFormattingUndoEntry(t)},u.prototype.inputControllerWillCutText=function(){return this.editor.recordUndoEntry("Cut")},u.prototype.inputControllerWillPaste=function(t){return this.editor.recordUndoEntry("Paste"),this.pasting=!0,this.notifyEditorElement("before-paste",{paste:t})},u.prototype.inputControllerDidPaste=function(t){return t.range=this.pastedRange,this.pastedRange=null,this.pasting=null,this.notifyEditorElement("paste",{paste:t})},u.prototype.inputControllerWillMoveText=function(){return this.editor.recordUndoEntry("Move")},u.prototype.inputControllerWillAttachFiles=function(){return this.editor.recordUndoEntry("Drop Files")},u.prototype.inputControllerWillPerformUndo=function(){return this.editor.undo()},u.prototype.inputControllerWillPerformRedo=function(){return this.editor.redo()},u.prototype.inputControllerDidReceiveKeyboardCommand=function(t){return this.toolbarController.applyKeyboardCommand(t)},u.prototype.inputControllerDidStartDrag=function(){return this.locationRangeBeforeDrag=this.selectionManager.getLocationRange()},u.prototype.inputControllerDidReceiveDragOverPoint=function(t){return this.selectionManager.setLocationRangeFromPointRange(t)},u.prototype.inputControllerDidCancelDrag=function(){return this.selectionManager.setLocationRange(this.locationRangeBeforeDrag),this.locationRangeBeforeDrag=null},u.prototype.locationRangeDidChange=function(t){return this.composition.updateCurrentAttributes(),this.updateCurrentActions(),this.attachmentLocationRange&&!o(this.attachmentLocationRange,t)&&this.composition.stopEditingAttachment(),this.notifyEditorElement("selection-change")},u.prototype.toolbarDidClickButton=function(){return this.getLocationRange()?void 0:this.setLocationRange({index:0,offset:0})},u.prototype.toolbarDidInvokeAction=function(t){return this.invokeAction(t)},u.prototype.toolbarDidToggleAttribute=function(t){return this.recordFormattingUndoEntry(t),this.composition.toggleCurrentAttribute(t),this.render(),this.selectionFrozen?void 0:this.editorElement.focus()},u.prototype.toolbarDidUpdateAttribute=function(t,e){return this.recordFormattingUndoEntry(t),this.composition.setCurrentAttribute(t,e),this.render(),this.selectionFrozen?void 0:this.editorElement.focus()},u.prototype.toolbarDidRemoveAttribute=function(t){return this.recordFormattingUndoEntry(t),this.composition.removeCurrentAttribute(t),this.render(),this.selectionFrozen?void 0:this.editorElement.focus()},u.prototype.toolbarWillShowDialog=function(){return this.composition.expandSelectionForEditing(),this.freezeSelection()},u.prototype.toolbarDidShowDialog=function(t){return this.notifyEditorElement("toolbar-dialog-show",{dialogName:t})},u.prototype.toolbarDidHideDialog=function(t){return this.thawSelection(),this.editorElement.focus(),this.notifyEditorElement("toolbar-dialog-hide",{dialogName:t})},u.prototype.freezeSelection=function(){return this.selectionFrozen?void 0:(this.selectionManager.lock(),this.composition.freezeSelection(),this.selectionFrozen=!0,this.render())},u.prototype.thawSelection=function(){return this.selectionFrozen?(this.composition.thawSelection(),this.selectionManager.unlock(),this.selectionFrozen=!1,this.render()):void 0},u.prototype.actions={undo:{test:function(){return this.editor.canUndo()},perform:function(){return this.editor.undo()}},redo:{test:function(){return this.editor.canRedo()},perform:function(){return this.editor.redo()}},link:{test:function(){return this.editor.canActivateAttribute("href")}},increaseNestingLevel:{test:function(){return this.editor.canIncreaseNestingLevel()},perform:function(){return this.editor.increaseNestingLevel()&&this.render()}},decreaseNestingLevel:{test:function(){return this.editor.canDecreaseNestingLevel()},perform:function(){return this.editor.decreaseNestingLevel()&&this.render()}},attachFiles:{test:function(){return !0},perform:function(){return e.config.input.pickFiles(this.editor.insertFiles)}}},u.prototype.canInvokeAction=function(t){var e,n;return this.actionIsExternal(t)?!0:!!(null!=(e=this.actions[t])&&null!=(n=e.test)?n.call(this):void 0)},u.prototype.invokeAction=function(t){var e,n;return this.actionIsExternal(t)?this.notifyEditorElement("action-invoke",{actionName:t}):null!=(e=this.actions[t])&&null!=(n=e.perform)?n.call(this):void 0},u.prototype.actionIsExternal=function(t){return /^x-./.test(t)},u.prototype.getCurrentActions=function(){var t,e;e={};for(t in this.actions)e[t]=this.canInvokeAction(t);return e},u.prototype.updateCurrentActions=function(){var t;return t=this.getCurrentActions(),n(t,this.currentActions)?void 0:(this.currentActions=t,this.toolbarController.updateActions(this.currentActions),this.notifyEditorElement("actions-change",{actions:this.currentActions}))},u.prototype.runEditorFilters=function(){var t,e,n,i,o,r,s,a;for(a=this.composition.getSnapshot(),o=this.editor.filters,n=0,i=o.length;i>n;n++)e=o[n],t=a.document,s=a.selectedRange,a=null!=(r=e.call(this.editor,a))?r:{},null==a.document&&(a.document=t),null==a.selectedRange&&(a.selectedRange=s);return c(a,this.composition.getSnapshot())?void 0:this.composition.loadSnapshot(a)},c=function(t,e){return o(t.selectedRange,e.selectedRange)&&t.document.isEqualTo(e.document)},u.prototype.updateInputElement=function(){var t,n;return t=this.compositionController.getSerializableElement(),n=e.serializeToContentType(t,"text/html"),this.editorElement.setInputElementValue(n)},u.prototype.notifyEditorElement=function(t,e){switch(t){case"document-change":this.documentChangedSinceLastRender=!0;break;case"render":this.documentChangedSinceLastRender&&(this.documentChangedSinceLastRender=!1,this.notifyEditorElement("change"));break;case"change":case"attachment-add":case"attachment-edit":case"attachment-remove":this.updateInputElement();}return this.editorElement.notify(t,e)},u.prototype.removeAttachment=function(t){return this.editor.recordUndoEntry("Delete Attachment"),this.composition.removeAttachment(t),this.render()},u.prototype.recordFormattingUndoEntry=function(e){var n,o;return n=t(e),o=this.selectionManager.getLocationRange(),n||!i(o)?this.editor.recordUndoEntry("Formatting",{context:this.getUndoContext(),consolidatable:!0}):void 0},u.prototype.recordTypingUndoEntry=function(){return this.editor.recordUndoEntry("Typing",{context:this.getUndoContext(this.currentAttributes),consolidatable:!0})},u.prototype.getUndoContext=function(){var t;return t=1<=arguments.length?a.call(arguments,0):[],[this.getLocationContext(),this.getTimeContext()].concat(a.call(t))},u.prototype.getLocationContext=function(){var t;return t=this.selectionManager.getLocationRange(),i(t)?t[0].index:t},u.prototype.getTimeContext=function(){return e.config.undoInterval>0?Math.floor((new Date).getTime()/e.config.undoInterval):0},u.prototype.isFocused=function(){var t;return this.editorElement===(null!=(t=this.editorElement.ownerDocument)?t.activeElement:void 0)},u.prototype.isFocusedInvisibly=function(){return this.isFocused()&&!this.getLocationRange()},u}(e.Controller);}.call(this),function(){var t,n,i,o,r,s,a,u=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return -1};n=e.browser,s=e.makeElement,a=e.triggerEvent,o=e.handleEvent,r=e.handleEventOnce,i=e.findClosestElementFromNode,t=e.AttachmentView.attachmentSelector,e.registerElement("trix-editor",function(){var c,l,h,p,d,f,g,m,v;return g=0,l=function(t){return !document.querySelector(":focus")&&t.hasAttribute("autofocus")&&document.querySelector("[autofocus]")===t?t.focus():void 0},m=function(t){return t.hasAttribute("contenteditable")?void 0:(t.setAttribute("contenteditable",""),r("focus",{onElement:t,withCallback:function(){return h(t)}}))},h=function(t){return d(t),v(t)},d=function(t){return ("function"==typeof document.queryCommandSupported?document.queryCommandSupported("enableObjectResizing"):void 0)?(document.execCommand("enableObjectResizing",!1,!1),o("mscontrolselect",{onElement:t,preventDefault:!0})):void 0},v=function(){var t;return ("function"==typeof document.queryCommandSupported?document.queryCommandSupported("DefaultParagraphSeparator"):void 0)&&(t=e.config.blockAttributes["default"].tagName,"div"===t||"p"===t)?document.execCommand("DefaultParagraphSeparator",!1,t):void 0},c=function(t){return t.hasAttribute("role")?void 0:t.setAttribute("role","textbox")},f=function(t){var e;if(!t.hasAttribute("aria-label")&&!t.hasAttribute("aria-labelledby"))return (e=function(){var e,n,i;return i=function(){var n,i,o,r;for(o=t.labels,r=[],n=0,i=o.length;i>n;n++)e=o[n],e.contains(t)||r.push(e.textContent);return r}(),(n=i.join(" "))?t.setAttribute("aria-label",n):t.removeAttribute("aria-label")})(),o("focus",{onElement:t,withCallback:e})},p=function(){return n.forcesObjectResizing?{display:"inline",width:"auto"}:{display:"inline-block",width:"1px"}}(),{defaultCSS:"%t {\n  display: block;\n}\n\n%t:empty:not(:focus)::before {\n  content: attr(placeholder);\n  color: graytext;\n  cursor: text;\n  pointer-events: none;\n}\n\n%t a[contenteditable=false] {\n  cursor: text;\n}\n\n%t img {\n  max-width: 100%;\n  height: auto;\n}\n\n%t "+t+" figcaption textarea {\n  resize: none;\n}\n\n%t "+t+" figcaption textarea.trix-autoresize-clone {\n  position: absolute;\n  left: -9999px;\n  max-height: 0px;\n}\n\n%t "+t+" figcaption[data-trix-placeholder]:empty::before {\n  content: attr(data-trix-placeholder);\n  color: graytext;\n}\n\n%t [data-trix-cursor-target] {\n  display: "+p.display+" !important;\n  width: "+p.width+" !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n}\n\n%t [data-trix-cursor-target=left] {\n  vertical-align: top !important;\n  margin-left: -1px !important;\n}\n\n%t [data-trix-cursor-target=right] {\n  vertical-align: bottom !important;\n  margin-right: -1px !important;\n}",trixId:{get:function(){return this.hasAttribute("trix-id")?this.getAttribute("trix-id"):(this.setAttribute("trix-id",++g),this.trixId)}},labels:{get:function(){var t,e,n;return e=[],this.id&&this.ownerDocument&&e.push.apply(e,this.ownerDocument.querySelectorAll("label[for='"+this.id+"']")),(t=i(this,{matchingSelector:"label"}))&&((n=t.control)===this||null===n)&&e.push(t),e}},toolbarElement:{get:function(){var t,e,n;return this.hasAttribute("toolbar")?null!=(e=this.ownerDocument)?e.getElementById(this.getAttribute("toolbar")):void 0:this.parentNode?(n="trix-toolbar-"+this.trixId,this.setAttribute("toolbar",n),t=s("trix-toolbar",{id:n}),this.parentNode.insertBefore(t,this),t):void 0}},inputElement:{get:function(){var t,e,n;return this.hasAttribute("input")?null!=(n=this.ownerDocument)?n.getElementById(this.getAttribute("input")):void 0:this.parentNode?(e="trix-input-"+this.trixId,this.setAttribute("input",e),t=s("input",{type:"hidden",id:e}),this.parentNode.insertBefore(t,this.nextElementSibling),t):void 0}},editor:{get:function(){var t;return null!=(t=this.editorController)?t.editor:void 0}},name:{get:function(){var t;return null!=(t=this.inputElement)?t.name:void 0}},value:{get:function(){var t;return null!=(t=this.inputElement)?t.value:void 0},set:function(t){var e;return this.defaultValue=t,null!=(e=this.editor)?e.loadHTML(this.defaultValue):void 0}},notify:function(t,e){return this.editorController?a("trix-"+t,{onElement:this,attributes:e}):void 0},setInputElementValue:function(t){var e;return null!=(e=this.inputElement)?e.value=t:void 0},initialize:function(){return this.hasAttribute("data-trix-internal")?void 0:(m(this),c(this),f(this))},connect:function(){return this.hasAttribute("data-trix-internal")?void 0:(this.editorController||(a("trix-before-initialize",{onElement:this}),this.editorController=new e.EditorController({editorElement:this,html:this.defaultValue=this.value}),requestAnimationFrame(function(t){return function(){return a("trix-initialize",{onElement:t})}}(this))),this.editorController.registerSelectionManager(),this.registerResetListener(),this.registerClickListener(),l(this))},disconnect:function(){var t;return null!=(t=this.editorController)&&t.unregisterSelectionManager(),this.unregisterResetListener(),this.unregisterClickListener()},registerResetListener:function(){return this.resetListener=this.resetBubbled.bind(this),window.addEventListener("reset",this.resetListener,!1)},unregisterResetListener:function(){return window.removeEventListener("reset",this.resetListener,!1)},registerClickListener:function(){return this.clickListener=this.clickBubbled.bind(this),window.addEventListener("click",this.clickListener,!1)},unregisterClickListener:function(){return window.removeEventListener("click",this.clickListener,!1)},resetBubbled:function(t){var e;if(!t.defaultPrevented&&t.target===(null!=(e=this.inputElement)?e.form:void 0))return this.reset()},clickBubbled:function(t){var e;if(!(t.defaultPrevented||this.contains(t.target)||!(e=i(t.target,{matchingSelector:"label"}))||u.call(this.labels,e)<0))return this.focus()},reset:function(){return this.value=this.defaultValue}}}());}.call(this),function(){}.call(this);})).call(this),module.exports?module.exports=e:"function"==typeof undefined;}.call(commonjsGlobal);
} (trix));

//

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
      _c(_vm.editorComponent, { tag: "component" }),
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

  var EditorWrapper = __vue_component__$1;

var script = {
    name: 'EditorWrapper',
    render: EditorWrapper.render,
    data: EditorWrapper.data,
  };

var css_248z = "@charset \"UTF-8\";\n\ntrix-toolbar {\n  padding: 0.5rem 0.375rem;\n  border-radius: 0.25rem;\n  flex-wrap: wrap;\n}\n\ntrix-toolbar .trix-button-row {\n  display: block;\n  margin-bottom: -0.25rem;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  overflow-x: auto;\n}\n\ntrix-toolbar .trix-button-group {\n  display: inline;\n}\n\ntrix-toolbar .trix-button-group-spacer {\n  display: hidden;\n  flex-grow: 1;\n}\n\ntrix-toolbar .trix-button {\n  position: relative;\n  margin-bottom: 0.25rem;\n  color: var(--vf-bg-icon);\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  outline: none;\n  border-radius: 0.25rem;\n  white-space: nowrap;\n  float: left;\n}\n\ntrix-toolbar .trix-button.trix-active {\n  background-color: var(--vf-bg-selected);\n  filter: brightness(0.9);\n}\n\ntrix-toolbar .trix-button:not(.trix-active):hover {\n  background-color: var(--vf-bg-selected);\n}\n\n.is-disabled trix-toolbar .trix-button:not(.trix-active):hover {\n  background: transparent;\n  cursor: default;\n}\n\ntrix-toolbar .trix-button:not(:disabled) {\n  cursor: pointer;\n}\n\n.is-disabled trix-toolbar .trix-button {\n  cursor: default;\n  pointer-events: none;\n}\n\ntrix-toolbar .trix-button--icon {\n  width: 2.5rem;\n  height: 1.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  text-indent: -9999px;\n}\n\ntrix-toolbar .trix-button--icon::before {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  display: inline-block;\n  content: \"\";\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-position: center center;\n  -webkit-mask-position: center center;\n  mask-size: contain;\n  -webkit-mask-size: contain;\n  background-color: var(--vf-bg-icon);\n  top: 0.125rem;\n  bottom: 0.125rem;\n  margin-top: 0.125rem;\n  margin-bottom: 0.125rem;\n}\n\ntrix-toolbar .trix-button--icon.trix-active::before {\n  opacity: 1;\n}\n\ntrix-toolbar .trix-button--icon:disabled::before {\n  opacity: 0.4;\n}\n\ntrix-toolbar .trix-button--icon-attach::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645 117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41 31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51 110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0 16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699 46.054-.001l189.465-189.489c25.987-25.989 25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249 39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174 739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685 4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034 58.092-152.004 58.093-210.048.041z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645 117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41 31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51 110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0 16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699 46.054-.001l189.465-189.489c25.987-25.989 25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249 39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174 739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685 4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034 58.092-152.004 58.093-210.048.041z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-toolbar .trix-button--icon-bold::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-toolbar .trix-button--icon-italic::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-toolbar .trix-button--icon-link::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M314.222 197.78c51.091 51.091 54.377 132.287 9.75 187.16-6.242 7.73-2.784 3.865-84.94 86.02-54.696 54.696-143.266 54.745-197.99 0-54.711-54.69-54.734-143.255 0-197.99 32.773-32.773 51.835-51.899 63.409-63.457 7.463-7.452 20.331-2.354 20.486 8.192a173.31 173.31 0 0 0 4.746 37.828c.966 4.029-.272 8.269-3.202 11.198L80.632 312.57c-32.755 32.775-32.887 85.892 0 118.8 32.775 32.755 85.892 32.887 118.8 0l75.19-75.2c32.718-32.725 32.777-86.013 0-118.79a83.722 83.722 0 0 0-22.814-16.229c-4.623-2.233-7.182-7.25-6.561-12.346 1.356-11.122 6.296-21.885 14.815-30.405l4.375-4.375c3.625-3.626 9.177-4.594 13.76-2.294 12.999 6.524 25.187 15.211 36.025 26.049zM470.958 41.04c-54.724-54.745-143.294-54.696-197.99 0-82.156 82.156-78.698 78.29-84.94 86.02-44.627 54.873-41.341 136.069 9.75 187.16 10.838 10.838 23.026 19.525 36.025 26.049 4.582 2.3 10.134 1.331 13.76-2.294l4.375-4.375c8.52-8.519 13.459-19.283 14.815-30.405.621-5.096-1.938-10.113-6.561-12.346a83.706 83.706 0 0 1-22.814-16.229c-32.777-32.777-32.718-86.065 0-118.79l75.19-75.2c32.908-32.887 86.025-32.755 118.8 0 32.887 32.908 32.755 86.025 0 118.8l-45.848 45.84c-2.93 2.929-4.168 7.169-3.202 11.198a173.31 173.31 0 0 1 4.746 37.828c.155 10.546 13.023 15.644 20.486 8.192 11.574-11.558 30.636-30.684 63.409-63.457 54.733-54.735 54.71-143.3-.001-197.991z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-toolbar .trix-button--icon-strike::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-180.24 96A43 43 0 0 1 336 356.45 43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64 114.25 114.25 0 0 0-5.34-24.36z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-180.24 96A43 43 0 0 1 336 356.45 43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64 114.25 114.25 0 0 0-5.34-24.36z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-toolbar .trix-button--icon-quote::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z'%3e%3c/path%3e%3c/svg%3e\");\n  top: 0.25rem;\n  bottom: 0.25rem;\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\ntrix-toolbar .trix-button--icon-heading-1::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-toolbar .trix-button--icon-code::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 640 304' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M165.9%2c291.3 L209.4%2c244.9 C214%2c240 213.7%2c232.2 208.6%2c227.7 L118%2c148 L208.6%2c68.3 C213.7%2c63.8 214.1%2c56 209.4%2c51.1 L165.9%2c4.7 C161.4%2c-0.1 153.8%2c-0.4 148.9%2c4.2 L4.8%2c139.2 C-0.3%2c143.9 -0.3%2c152 4.8%2c156.7 L148.9%2c291.8 C153.8%2c296.4 161.4%2c296.2 165.9%2c291.3 Z M493.1%2c291.9 L637.2%2c156.8 C642.3%2c152.1 642.3%2c144 637.2%2c139.3 L493.1%2c4.1 C488.3%2c-0.4 480.7%2c-0.2 476.1%2c4.6 L432.6%2c51 C428%2c55.9 428.3%2c63.7 433.4%2c68.2 L524%2c148 L433.4%2c227.7 C428.3%2c232.2 427.9%2c240 432.6%2c244.9 L476.1%2c291.3 C480.6%2c296.2 488.2%2c296.4 493.1%2c291.9 Z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 640 304' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M165.9%2c291.3 L209.4%2c244.9 C214%2c240 213.7%2c232.2 208.6%2c227.7 L118%2c148 L208.6%2c68.3 C213.7%2c63.8 214.1%2c56 209.4%2c51.1 L165.9%2c4.7 C161.4%2c-0.1 153.8%2c-0.4 148.9%2c4.2 L4.8%2c139.2 C-0.3%2c143.9 -0.3%2c152 4.8%2c156.7 L148.9%2c291.8 C153.8%2c296.4 161.4%2c296.2 165.9%2c291.3 Z M493.1%2c291.9 L637.2%2c156.8 C642.3%2c152.1 642.3%2c144 637.2%2c139.3 L493.1%2c4.1 C488.3%2c-0.4 480.7%2c-0.2 476.1%2c4.6 L432.6%2c51 C428%2c55.9 428.3%2c63.7 433.4%2c68.2 L524%2c148 L433.4%2c227.7 C428.3%2c232.2 427.9%2c240 432.6%2c244.9 L476.1%2c291.3 C480.6%2c296.2 488.2%2c296.4 493.1%2c291.9 Z'%3e%3c/path%3e%3c/svg%3e\");\n  top: 0.375rem;\n  bottom: 0.375rem;\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\ntrix-toolbar .trix-button--icon-bullet-list::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e\");\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\ntrix-toolbar .trix-button--icon-number-list::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M61.77 401l17.5-20.15a19.92 19.92 0 0 0 5.07-14.19v-3.31C84.34 356 80.5 352 73 352H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h22.83a157.41 157.41 0 0 0-11 12.31l-5.61 7c-4 5.07-5.25 10.13-2.8 14.88l1.05 1.93c3 5.76 6.29 7.88 12.25 7.88h4.73c10.33 0 15.94 2.44 15.94 9.09 0 4.72-4.2 8.22-14.36 8.22a41.54 41.54 0 0 1-15.47-3.12c-6.49-3.88-11.74-3.5-15.6 3.12l-5.59 9.31c-3.72 6.13-3.19 11.72 2.63 15.94 7.71 4.69 20.38 9.44 37 9.44 34.16 0 48.5-22.75 48.5-44.12-.03-14.38-9.12-29.76-28.73-34.88zM496 224H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 160h64a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H64V40a8 8 0 0 0-8-8H32a8 8 0 0 0-7.14 4.42l-8 16A8 8 0 0 0 24 64h8v64H16a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm-3.91 160H80a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H41.32c3.29-10.29 48.34-18.68 48.34-56.44 0-29.06-25-39.56-44.47-39.56-21.36 0-33.8 10-40.46 18.75-4.37 5.59-3 10.84 2.8 15.37l8.58 6.88c5.61 4.56 11 2.47 16.12-2.44a13.44 13.44 0 0 1 9.46-3.84c3.33 0 9.28 1.56 9.28 8.75C51 248.19 0 257.31 0 304.59v4C0 316 5.08 320 12.09 320z'%3e%3c/path%3e%3c/svg%3e\");\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\ntrix-toolbar .trix-button--icon-undo::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z'%3e%3c/path%3e%3c/svg%3e\");\n  top: 0.25rem;\n  bottom: 0.25rem;\n}\n\ntrix-toolbar .trix-button--icon-redo::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z'%3e%3c/path%3e%3c/svg%3e\");\n  top: 0.25rem;\n  bottom: 0.25rem;\n}\n\ntrix-toolbar .trix-button--icon-decrease-nesting-level::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100.682584%2c116.695158 L4.68258422%2c212.695158 C-1.56086141%2c218.942698 -1.56086141%2c229.067619 4.68258422%2c235.315158 L100.682584%2c331.315158 C110.722584%2c341.335158 127.992584%2c334.215158 127.992584%2c319.995158 L127.992584%2c127.995158 C127.992584%2c113.685158 110.662584%2c106.695158 100.682584%2c116.695158 Z M432%2c384 L16%2c384 C7.163444%2c384 1.082166e-15%2c391.163444 0%2c400 L0%2c432 C1.082166e-15%2c440.836556 7.163444%2c448 16%2c448 L432%2c448 C440.836556%2c448 448%2c440.836556 448%2c432 L448%2c400 C448%2c391.163444 440.836556%2c384 432%2c384 Z M204.83%2c256 C201.426459%2c255.997344 198.161555%2c257.348219 195.754887%2c259.754887 C193.348219%2c262.161555 191.997344%2c265.426459 192%2c268.83 L192%2c307.17 C191.997344%2c310.573541 193.348219%2c313.838445 195.754887%2c316.245113 C198.161555%2c318.651781 201.426459%2c320.002656 204.83%2c320 L435.17%2c320 C438.573541%2c320.002656 441.838445%2c318.651781 444.245113%2c316.245113 C446.651781%2c313.838445 448.002656%2c310.573541 448%2c307.17 L448%2c268.83 C448.002656%2c265.426459 446.651781%2c262.161555 444.245113%2c259.754887 C441.838445%2c257.348219 438.573541%2c255.997344 435.17%2c256 L204.83%2c256 Z M435.17%2c128 L204.83%2c128 C201.426459%2c127.997344 198.161555%2c129.348219 195.754887%2c131.754887 C193.348219%2c134.161555 191.997344%2c137.426459 192%2c140.83 L192%2c179.17 C191.997344%2c182.573541 193.348219%2c185.838445 195.754887%2c188.245113 C198.161555%2c190.651781 201.426459%2c192.002656 204.83%2c192 L435.17%2c192 C438.573541%2c192.002656 441.838445%2c190.651781 444.245113%2c188.245113 C446.651781%2c185.838445 448.002656%2c182.573541 448%2c179.17 L448%2c140.83 C448.002656%2c137.426459 446.651781%2c134.161555 444.245113%2c131.754887 C441.838445%2c129.348219 438.573541%2c127.997344 435.17%2c128 Z M432%2c0 L16%2c0 C7.163444%2c0 1.082166e-15%2c7.163444 0%2c16 L0%2c48 C1.082166e-15%2c56.836556 7.163444%2c64 16%2c64 L432%2c64 C440.836556%2c64 448%2c56.836556 448%2c48 L448%2c16 C448%2c7.163444 440.836556%2c0 432%2c0 Z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100.682584%2c116.695158 L4.68258422%2c212.695158 C-1.56086141%2c218.942698 -1.56086141%2c229.067619 4.68258422%2c235.315158 L100.682584%2c331.315158 C110.722584%2c341.335158 127.992584%2c334.215158 127.992584%2c319.995158 L127.992584%2c127.995158 C127.992584%2c113.685158 110.662584%2c106.695158 100.682584%2c116.695158 Z M432%2c384 L16%2c384 C7.163444%2c384 1.082166e-15%2c391.163444 0%2c400 L0%2c432 C1.082166e-15%2c440.836556 7.163444%2c448 16%2c448 L432%2c448 C440.836556%2c448 448%2c440.836556 448%2c432 L448%2c400 C448%2c391.163444 440.836556%2c384 432%2c384 Z M204.83%2c256 C201.426459%2c255.997344 198.161555%2c257.348219 195.754887%2c259.754887 C193.348219%2c262.161555 191.997344%2c265.426459 192%2c268.83 L192%2c307.17 C191.997344%2c310.573541 193.348219%2c313.838445 195.754887%2c316.245113 C198.161555%2c318.651781 201.426459%2c320.002656 204.83%2c320 L435.17%2c320 C438.573541%2c320.002656 441.838445%2c318.651781 444.245113%2c316.245113 C446.651781%2c313.838445 448.002656%2c310.573541 448%2c307.17 L448%2c268.83 C448.002656%2c265.426459 446.651781%2c262.161555 444.245113%2c259.754887 C441.838445%2c257.348219 438.573541%2c255.997344 435.17%2c256 L204.83%2c256 Z M435.17%2c128 L204.83%2c128 C201.426459%2c127.997344 198.161555%2c129.348219 195.754887%2c131.754887 C193.348219%2c134.161555 191.997344%2c137.426459 192%2c140.83 L192%2c179.17 C191.997344%2c182.573541 193.348219%2c185.838445 195.754887%2c188.245113 C198.161555%2c190.651781 201.426459%2c192.002656 204.83%2c192 L435.17%2c192 C438.573541%2c192.002656 441.838445%2c190.651781 444.245113%2c188.245113 C446.651781%2c185.838445 448.002656%2c182.573541 448%2c179.17 L448%2c140.83 C448.002656%2c137.426459 446.651781%2c134.161555 444.245113%2c131.754887 C441.838445%2c129.348219 438.573541%2c127.997344 435.17%2c128 Z M432%2c0 L16%2c0 C7.163444%2c0 1.082166e-15%2c7.163444 0%2c16 L0%2c48 C1.082166e-15%2c56.836556 7.163444%2c64 16%2c64 L432%2c64 C440.836556%2c64 448%2c56.836556 448%2c48 L448%2c16 C448%2c7.163444 440.836556%2c0 432%2c0 Z'%3e%3c/path%3e%3c/svg%3e\");\n  margin-bottom: 0;\n}\n\ntrix-toolbar .trix-button--icon-increase-nesting-level::before {\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M27.31 363.3l96-96a16 16 0 0 0 0-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288zm0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160zM432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 448 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M27.31 363.3l96-96a16 16 0 0 0 0-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288zm0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160zM432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z'%3e%3c/path%3e%3c/svg%3e\");\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\ntrix-toolbar .trix-dialogs {\n  position: relative;\n}\n\ntrix-toolbar .trix-dialog {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 1rem 0.625rem;\n  background-color: var(--vf-bg-input);\n  box-shadow: 0 0px 15px 0px rgba(0, 0, 0, 0.3);\n  margin-top: 0.375rem;\n  border-radius: 0.25rem;\n  z-index: 2;\n}\n\ntrix-toolbar .trix-input--dialog {\n  padding: 0.375rem 0.75rem;\n  border: 1px solid var(--vf-border-color-input);\n  border-radius: 0.25rem;\n  margin-right: 0.5rem;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  background: var(--vf-bg-input);\n}\n\ntrix-toolbar .trix-input--dialog:focus {\n  outline: var(--vf-ring-width) solid var(--vf-ring-color) !important;\n}\n\ntrix-toolbar .trix-input--dialog.validate:invalid {\n  border-color: var(--vf-color-danger);\n}\n\ntrix-toolbar .trix-button--dialog {\n  padding: 0.5rem;\n  border-left-width: 1px;\n  border-color: var(--vf-border-color-input);\n  background-color: transparent;\n  border-radius: 0;\n}\n\ntrix-toolbar .trix-button--dialog:not(.trix-active):hover {\n  background-color: transparent;\n}\n\ntrix-toolbar .trix-button--dialog:first-of-type {\n  border: 0;\n}\n\ntrix-toolbar .trix-dialog--link {\n  max-width: 36rem;\n}\n\ntrix-toolbar .trix-dialog__link-fields {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\ntrix-toolbar .trix-dialog__link-fields .trix-input {\n  flex: 1 1 0%;\n}\n\ntrix-toolbar .trix-dialog__link-fields .trix-button-group {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n\ntrix-editor {\n  padding-left: var(--vf-px-input);\n  padding-right: var(--vf-px-input);\n  padding-bottom: var(--vf-py-input);\n  border-radius: var(--vf-radius-large);\n  outline: none;\n  min-height: 6rem;\n}\n\ntrix-editor:empty:not(:focus)::before {\n  color: var(--vf-color-placeholder);\n}\n\ntrix-editor [data-trix-mutable]:not(.attachment__caption-editor) {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\ntrix-editor [data-trix-mutable]::-moz-selection,\ntrix-editor [data-trix-cursor-target]::-moz-selection,\ntrix-editor [data-trix-mutable] ::-moz-selection {\n  background-image: none;\n}\n\ntrix-editor [data-trix-mutable]::-moz-selection, trix-editor [data-trix-cursor-target]::-moz-selection, trix-editor [data-trix-mutable] ::-moz-selection {\n  background-image: none;\n}\n\ntrix-editor [data-trix-mutable]::selection,\ntrix-editor [data-trix-cursor-target]::selection,\ntrix-editor [data-trix-mutable] ::selection {\n  background-image: none;\n}\n\ntrix-editor [data-trix-mutable].attachment__caption-editor:focus::-moz-selection {\n  background: highlight;\n}\n\ntrix-editor [data-trix-mutable].attachment__caption-editor:focus::selection {\n  background: highlight;\n}\n\ntrix-editor [data-trix-mutable].attachment.attachment--file {\n  background-color: var(--vf-gray-100);\n}\n\ntrix-editor [data-trix-mutable].attachment img {\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n\ntrix-editor .attachment {\n  position: relative;\n}\n\ntrix-editor .attachment:hover {\n  cursor: default;\n}\n\ntrix-editor .attachment--preview .attachment__caption:hover {\n  cursor: text;\n}\n\ntrix-editor .attachment__progress {\n  position: absolute;\n  z-index: 1;\n  height: 1.25rem;\n  top: 50%;\n  left: 0;\n  transform: translateY(-0.625rem);\n  width: 100%;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  opacity: 0.2;\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\ntrix-editor .attachment__progress[value=\"100\"] {\n  opacity: 0;\n}\n\ntrix-editor .attachment__caption-editor {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  text-align: center;\n  vertical-align: top;\n  width: 100%;\n  border-width: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: 0;\n  background: var(--vf-bg-input);\n}\n\ntrix-editor .attachment__toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  transform: translateY(-50%);\n  text-align: center;\n  width: 100%;\n}\n\ntrix-editor .trix-button-group {\n  display: inline-flex;\n}\n\ntrix-editor .trix-button {\n  position: relative;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n  margin: 0;\n  background-color: transparent;\n  color: var(--vf-bg-icon);\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  white-space: nowrap;\n  border-radius: 0;\n  border-width: 0;\n  outline: 0;\n}\n\ntrix-editor .trix-button.trix-active {\n  color: #000000;\n  background-color: var(--vf-gray-200);\n}\n\ntrix-editor .trix-button:not(.trix-active):hover {\n  background-color: var(--vf-gray-100);\n}\n\ntrix-editor .trix-button:not(:disabled) {\n  cursor: pointer;\n}\n\ntrix-editor .trix-button--remove {\n  display: inline-block;\n  overflow-x: hidden;\n  padding: 0;\n  background-color: var(--vf-bg-input);\n  line-height: 1.75rem;\n  border-radius: 9999px;\n  border-width: 1px;\n  border-color: var(--vf-gray-400);\n  border-style: solid;\n  outline: 0;\n  text-indent: -9999px;\n}\n\ntrix-editor .trix-button--remove:not(.trix-active):hover {\n  background-color: var(--vf-gray-100);\n}\n\ntrix-editor .trix-button--remove::before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  top: 0.25rem;\n  right: 0.25rem;\n  bottom: 0.25rem;\n  left: 0.25rem;\n  background-color: var(--vf-gray-900);\n  opacity: 0.7;\n  background-position: center;\n  background-repeat: no-repeat;\n  mask-repeat: no-repeat;\n  -webkit-mask-repeat: no-repeat;\n  mask-position: center center;\n  -webkit-mask-position: center center;\n  mask-size: contain;\n  -webkit-mask-size: contain;\n  mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z'%3e%3c/path%3e%3c/svg%3e\");\n  -webkit-mask-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z'%3e%3c/path%3e%3c/svg%3e\");\n}\n\ntrix-editor .trix-button--remove::before:hover {\n  border-color: var(--vf-gray-700);\n}\n\ntrix-editor .trix-button--remove::before:hover::before {\n  opacity: 1;\n}\n\ntrix-editor .attachment__metadata-container {\n  position: relative;\n}\n\ntrix-editor .attachment__metadata {\n  position: absolute;\n  top: 1rem;\n  left: 50%;\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  background-color: #000000;\n  opacity: 0.7;\n  transform: translateX(-50%);\n  color: #ffffff;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  border-radius: 0.25rem;\n}\n\ntrix-editor .attachment__metadata .attachment__name {\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  vertical-align: bottom;\n  white-space: nowrap;\n  max-width: 100%;\n}\n\ntrix-editor .attachment__metadata .attachment__size {\n  margin-left: 0.25rem;\n  white-space: nowrap;\n}\n\n.trix-content h1,\ntrix-editor h1 {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n  font-weight: 700;\n  line-height: 1.25;\n}\n\n.trix-content a,\ntrix-editor a {\n  color: var(--vf-primary);\n}\n\n.trix-content ul,\ntrix-editor ul {\n  padding-left: 2.5rem;\n  list-style-type: disc;\n}\n\n.trix-content [dir=rtl] ul,\ntrix-editor [dir=rtl] ul {\n  padding-right: 2.5rem;\n  list-style-type: disc;\n}\n\n.trix-content ol,\ntrix-editor ol {\n  padding-left: 2.5rem;\n  list-style-type: decimal;\n}\n\n.trix-content [dir=rtl] ol,\ntrix-editor [dir=rtl] ol {\n  padding-right: 2.5rem;\n  list-style-type: decimal;\n}\n\n.trix-content blockquote,\ntrix-editor blockquote {\n  padding-left: 0.625rem;\n  border-left-width: 4px;\n  border-color: var(--vf-gray-300);\n}\n\n.trix-content [dir=rtl] blockquote,\n.trix-content blockquote[dir=rtl],\ntrix-editor [dir=rtl] blockquote,\ntrix-editor blockquote[dir=rtl] {\n  padding-left: 0.625rem;\n  border-left-width: 4px;\n  border-color: var(--vf-gray-300);\n}\n\n.trix-content pre,\ntrix-editor pre {\n  display: inline-block;\n  overscroll-behavior-x: auto;\n  padding: 0.5rem;\n  background-color: var(--vf-gray-50);\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  vertical-align: top;\n  white-space: pre;\n  width: 100%;\n}\n\n.trix-content img,\ntrix-editor img {\n  max-width: 100%;\n  height: auto;\n}\n\n.trix-content .attachment__caption,\ntrix-editor .attachment__caption {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  text-align: center;\n}\n\n.trix-content .attachment__caption .attachment__name + .attachment__size::before,\ntrix-editor .attachment__caption .attachment__name + .attachment__size::before {\n  content: \" · \";\n}\n\n.trix-content * {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.trix-content .attachment {\n  display: inline-block;\n  position: relative;\n  max-width: 100%;\n}\n\n.trix-content .attachment a {\n  text-decoration: none;\n}\n\n.trix-content .attachment--preview {\n  text-align: center;\n  width: 100%;\n}\n\n.trix-content .attachment--preview .attachment__caption {\n  color: var(--vf-gray-500);\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.trix-content .attachment--file {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  margin: 0.125rem;\n  margin-top: 0;\n  color: var(--vf-gray-700);\n  line-height: 1;\n  border-radius: 0.25rem;\n  border-width: 1px;\n  border-color: var(--vf-gray-300);\n}\n\n.trix-content .attachment-gallery {\n  display: flex;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.trix-content .attachment-gallery .attachment {\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  flex-grow: 1;\n  flex-shrink: 0;\n  width: 33.333333%;\n}\n\n.trix-content .attachment-gallery.attachment-gallery--2 .attachment, .trix-content .attachment-gallery.attachment-gallery--4 .attachment {\n  width: 50%;\n}\n\n.trix-content .attachment__progress {\n  display: none;\n}\n\n[class*=form-editor-sm] trix-editor {\n  padding-left: var(--vf-px-input-sm);\n  padding-right: var(--vf-px-input-sm);\n  padding-bottom: var(--vf-py-input-sm);\n  border-radius: var(--vf-radius-large-sm);\n  min-height: 5rem;\n}\n\n[class*=form-editor-sm] .trix-content h1,\n[class*=form-editor-sm] trix-editor h1 {\n  font-size: 1.625rem;\n  font-weight: 700;\n  line-height: 1.25;\n}\n\n[class*=form-editor-sm] trix-toolbar {\n  padding: var(--vf-py-input-sm) var(--vf-py-input-sm);\n}\n\n[class*=form-editor-sm] trix-toolbar .trix-button--icon {\n  width: 2.25rem;\n}\n\n[class*=form-editor-lg] trix-editor {\n  padding-left: var(--vf-px-input-lg);\n  padding-right: var(--vf-px-input-lg);\n  padding-bottom: var(--vf-py-input-lg);\n  border-radius: var(--vf-radius-large-lg);\n}\n\n[class*=form-editor-disabled] trix-toolbar {\n  pointer-events: none;\n}\n\n[class*=form-editor-hide-bold] .trix-button--icon-bold {\n  display: none;\n}\n\n[class*=form-editor-hide-italic] .trix-button--icon-italic {\n  display: none;\n}\n\n[class*=form-editor-hide-strike] .trix-button--icon-strike {\n  display: none;\n}\n\n[class*=form-editor-hide-link] .trix-button--icon-link {\n  display: none;\n}\n\n[class*=form-editor-hide-heading] .trix-button--icon-heading-1 {\n  display: none;\n}\n\n[class*=form-editor-hide-quote] .trix-button--icon-quote {\n  display: none;\n}\n\n[class*=form-editor-hide-code] .trix-button--icon-code {\n  display: none;\n}\n\n[class*=form-editor-hide-bullet-list] .trix-button--icon-bullet-list {\n  display: none;\n}\n\n[class*=form-editor-hide-number-list] .trix-button--icon-number-list {\n  display: none;\n}\n\n[class*=form-editor-hide-decrease-nesting] .trix-button--icon-decrease-nesting-level {\n  display: none;\n}\n\n[class*=form-editor-hide-increase-nesting] .trix-button--icon-increase-nesting-level {\n  display: none;\n}\n\n[class*=form-editor-hide-attach] .trix-button--icon-attach {\n  display: none;\n}\n\n[class*=form-editor-hide-undo] .trix-button--icon-undo {\n  display: none;\n}\n\n[class*=form-editor-hide-redo] .trix-button--icon-redo {\n  display: none;\n}\n\n.dark .trix-content blockquote,\n.dark trix-editor blockquote {\n  border-color: var(--vf-dark-700);\n}\n\n.dark .trix-content pre,\n.dark trix-editor pre {\n  background-color: var(--vf-dark-900);\n}";
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
  return "symbol" == typeof i ? i : String(i);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// prefix

var inputStates = {
  default: "" + "form-bg-input " + "form-color-input " + "form-border-color-input " + "hover:form-bg-input-hover " + "hover:form-color-input-hover " + "hover:form-border-color-input-hover " + "hover:form-shadow-input-hover " + "focused:form-bg-input-focus " + "focused:form-color-input-focus " + "focused:form-border-color-input-focus " + "focused:form-shadow-input-focus " + "focused:form-ring " + "focused-hover:form-shadow-input-hover",
  disabled: "" + "form-bg-disabled " + "form-color-disabled " + "form-border-color-input",
  success: "" + "form-bg-input-success " + "form-color-input-success " + "form-border-color-input-success " + "hover:form-shadow-input-hover " + "focused:form-shadow-input-focus " + "focused:form-ring " + "focused-hover:form-shadow-input-hover",
  danger: "" + "form-bg-input-danger " + "form-color-input-danger " + "form-border-color-input-danger " + "hover:form-shadow-input-hover " + "focused:form-shadow-input-focus " + "focused:form-ring " + "focused-hover:form-shadow-input-hover"
};
var checkboxStates = {
  default: "" + "form-bg-input " + "form-border-color-input " + "hover:form-bg-input-hover " + "hover:form-border-color-input-hover " + "hover:form-shadow-handles-hover " + "focused:form-bg-input-focus " + "focused:form-border-color-input-focus " + "focused:form-shadow-handles-focus " + "focused-hover:form-shadow-handles-hover " + "checked:form-bg-primary " + "checked:form-border-color-checked " + "checked-hover:form-bg-primary " + "checked-hover:form-border-color-checked " + "checked-focused:form-bg-primary",
  disabled: "" + "form-bg-disabled " + "form-border-color-input " + "opacity-50 " + "checked:form-bg-primary " + "checked:form-border-color-checked",
  danger: "" + "form-bg-input-danger " + "form-border-color-input-danger " + "hover:form-shadow-handles-hover " + "focused:form-shadow-handles-focus " + "focused-hover:form-shadow-handles-hover " + "checked:form-bg-primary " + "checked:form-border-color-checked"
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
  $input: (classes, _ref) => {
    var {
      isDisabled,
      Size
    } = _ref;
    return [classes.input, classes["input_".concat(Size)], !isDisabled ? classes.input_default : classes.input_disabled];
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
  $input: (classes, _ref2) => {
    var {
      isDisabled,
      Size
    } = _ref2;
    return [classes.input, classes["input_".concat(Size)], !isDisabled ? classes.input_default : classes.input_disabled];
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
  input_disabled: inputStates.disabled,
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
  container: 'flex align-start cursor-pointer',
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
  container: 'flex align-start cursor-pointer form-bg-input',
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
  CheckboxElement: _objectSpread2(_objectSpread2({}, checkbox), {}, {
    container: '',
    wrapper: 'flex align-start',
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
        align
      } = _ref23;
      return [classes.input, classes["input_".concat(Size)], !isDisabled && !isDanger ? classes.input_default : null, isDisabled ? classes.input_disabled : null, isDanger ? classes.input_danger : null, align === 'left' ? [classes.input_left, classes["input_left_".concat(Size)]] : null, align === 'right' ? [classes.input_right, classes["input_right_".concat(Size)]] : null];
    },
    $text: (classes, _ref24) => {
      var {
        align
      } = _ref24;
      return [classes.text, align === 'left' ? classes.text_left : null, align === 'right' ? classes.text_right : null];
    }
  }),
  CheckboxgroupElement: {
    container: '',
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
    container: 'form-text-type',
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
    container: '',
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
  GroupElement: {
    container: '',
    wrapper: 'grid grid-cols-12',
    wrapper_sm: 'form-gap-gutter-sm',
    wrapper_md: 'form-gap-gutter',
    wrapper_lg: 'form-gap-gutter-lg',
    $wrapper: (classes, _ref30) => {
      var {
        Size
      } = _ref30;
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
    $list: (classes, _ref31) => {
      var {
        isDisabled,
        sorting,
        Size
      } = _ref31;
      return [classes.list, classes["list_".concat(Size)], isDisabled ? classes.list_disabled : null, sorting ? classes.list_sorting : null];
    },
    $listItem: (classes, _ref32) => {
      var {
        Size
      } = _ref32;
      return [classes.listItem, classes["listItem_".concat(Size)]];
    },
    $handle: (classes, _ref33) => {
      var {
        Size
      } = _ref33;
      return [classes.handle, classes["handle_".concat(Size)]];
    },
    $add: (classes, _ref34) => {
      var {
        Size
      } = _ref34;
      return [classes.add, classes["add_".concat(Size)]];
    }
  },
  LocationElement: _objectSpread2({}, text),
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
    $list: (classes, _ref35) => {
      var {
        isDisabled,
        sorting,
        view,
        Size
      } = _ref35;
      return [classes.list, classes["list_".concat(Size)], isDisabled ? classes.list_disabled : null, sorting ? classes.list_sorting : null, classes["list_".concat(view)], classes["list_".concat(view, "_").concat(Size)]];
    },
    $handle: (classes, _ref36) => {
      var {
        view,
        Size
      } = _ref36;
      return [classes.handle, classes["handle_".concat(view)], classes["handle_".concat(view, "_").concat(Size)]];
    },
    $handleIcon: (classes, _ref37) => {
      var {
        view
      } = _ref37;
      return [classes.handleIcon, classes["handleIcon_".concat(view)]];
    },
    $button: (classes, _ref38) => {
      var {
        isDisabled,
        preparing,
        Size
      } = _ref38;
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
      multipleLabel_sm: 'form-py-input-sm form-pl-input-sm form-pr-select-no-clear-sm form-radius-input-sm form-text-sm form-min-h-input-height-inner-sm with-floating:form-p-input-floating-sm rtl:form-pr-input-sm rtl:form-pl-select-no-clear-sm',
      multipleLabel_md: 'form-py-input form-pl-input form-pr-select-no-clear form-radius-input form-text form-min-h-input-height-inner with-floating:form-p-input-floating rtl:form-pr-input rtl:form-pl-select-no-clear',
      multipleLabel_lg: 'form-py-input-lg form-pl-input-lg form-pr-select-no-clear-lg form-radius-input-lg form-text-lg form-min-h-input-height-inner-lg with-floating:form-p-input-floating-lg rtl:form-pr-input-lg rtl:form-pl-select-no-clear-lg',
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
      $multipleLabel: (classes, _ref39) => {
        var {
          Size,
          caret,
          canClear
        } = _ref39;
        return [classes.select.multipleLabel, classes.select["multipleLabel_".concat(Size)], canClear && caret ? classes.select["multipleLabel_caretClear_".concat(Size)] : null, !caret && canClear ? classes.select["multipleLabel_noCaret_".concat(Size)] : null, !canClear && caret ? classes.select["multipleLabel_noClear_".concat(Size)] : null, !canClear && !caret ? classes.select["multipleLabel_noCaretClear_".concat(Size)] : null];
      }
    }),
    $input: (classes, _ref40) => {
      var {
        isDisabled,
        Size,
        isDanger,
        isSuccess
      } = _ref40;
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
    $wrapper: (classes, _ref41) => {
      var {
        Size,
        embed
      } = _ref41;
      return [classes.wrapper, classes["wrapper_".concat(Size)], embed ? classes.wrapper_embed : null];
    }
  },
  RadioElement: _objectSpread2(_objectSpread2({}, radio), {}, {
    container: '',
    wrapper: 'flex align-start rtl:justify-start',
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
    $wrapper: (classes, _ref42) => {
      var {
        Size,
        align
      } = _ref42;
      return [classes.wrapper, classes["wrapper_".concat(Size)], align === 'left' ? classes.wrapper_left : null, align === 'right' ? classes.wrapper_right : null];
    },
    $input: (classes, _ref43) => {
      var {
        isDisabled,
        Size,
        isDanger,
        align
      } = _ref43;
      return [classes.input, classes["input_".concat(Size)], !isDisabled && !isDanger ? classes.input_default : null, isDisabled ? classes.input_disabled : null, isDanger ? classes.input_danger : null, align === 'left' ? [classes.input_left, classes["input_left_".concat(Size)]] : null, align === 'right' ? [classes.input_right, classes["input_right_".concat(Size)]] : null];
    },
    $text: (classes, _ref44) => {
      var {
        align
      } = _ref44;
      return [classes.text, align === 'left' ? classes.text_left : null, align === 'right' ? classes.text_right : null];
    }
  }),
  RadiogroupElement: {
    container: '',
    wrapper: 'flex flex-col justify-start',
    wrapper_sm: '',
    wrapper_md: '',
    wrapper_lg: '',
    $wrapper: (classes, _ref45) => {
      var {
        Size
      } = _ref45;
      return [classes.wrapper, classes["wrapper_".concat(Size)]];
    }
  },
  RadiogroupElement_tabs: {
    container: ' form-text-type',
    wrapper: 'grid grid-flow-col grid form-shadow-input',
    wrapper_sm: 'form-radius-large-sm',
    wrapper_md: 'form-radius-large',
    wrapper_lg: 'form-radius-large-lg',
    $wrapper: (classes, _ref46) => {
      var {
        Size
      } = _ref46;
      return [classes.wrapper, classes["wrapper_".concat(Size)]];
    }
  },
  RadiogroupElement_blocks: {
    container: '',
    wrapper: 'flex flex-col justify-start form-shadow-input',
    wrapper_sm: 'form-radius-large-sm',
    wrapper_md: 'form-radius-large',
    wrapper_lg: 'form-radius-large-lg',
    $wrapper: (classes, _ref47) => {
      var {
        Size
      } = _ref47;
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
      singleLabel_sm: 'form-py-input-sm form-pl-input-sm form-pr-select-no-clear-sm form-radius-input-sm form-text-sm form-min-h-input-height-inner-sm with-floating:form-p-input-floating-sm rtl:form-pr-input-sm rtl:form-pl-select-no-clear-sm',
      singleLabel_md: 'form-py-input form-pl-input form-pr-select-no-clear form-radius-input form-text form-min-h-input-height-inner with-floating:form-p-input-floating rtl:form-pr-input rtl:form-pl-select-no-clear',
      singleLabel_lg: 'form-py-input-lg form-pl-input-lg form-pr-select-no-clear-lg form-radius-input-lg form-text-lg form-min-h-input-height-inner-lg with-floating:form-p-input-floating-lg rtl:form-pr-input-lg rtl:form-pl-select-no-clear-lg',
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
      $singleLabel: (classes, _ref48) => {
        var {
          Size,
          caret,
          canClear
        } = _ref48;
        return [classes.select.singleLabel, classes.select["singleLabel_".concat(Size)], canClear && caret ? classes.select["singleLabel_caretClear_".concat(Size)] : null, !caret && canClear ? classes.select["singleLabel_noCaret_".concat(Size)] : null, !canClear && caret ? classes.select["singleLabel_noClear_".concat(Size)] : null, !canClear && !caret ? classes.select["singleLabel_noCaretClear_".concat(Size)] : null];
      },
      $singleLabelText: (classes, _ref49) => {
        var {
          truncate
        } = _ref49;
        return [classes.select.singleLabelText, truncate ? classes.select["singleLabelText_truncate"] : null];
      }
    }),
    $input: (classes, _ref50) => {
      var {
        isDisabled,
        Size,
        isSuccess,
        isDanger
      } = _ref50;
      return [classes.input, classes["input_".concat(Size)], isDisabled ? classes.input_disabled : null, !isDisabled && !isSuccess && !isDanger ? classes.input_default : null, !isDisabled && isDanger ? classes.input_danger : null, !isDisabled && isSuccess ? classes.input_success : null];
    },
    $inputWrapper: (classes, _ref51) => {
      var {
        Size
      } = _ref51;
      return [classes.inputWrapper, classes["inputWrapper_".concat(Size)]];
    },
    $inputPlaceholder: (classes, _ref52) => {
      var {
        Size
      } = _ref52;
      return [classes.inputPlaceholder, classes["inputPlaceholder_".concat(Size)]];
    },
    $inputCaret: (classes, _ref53) => {
      var {
        Size
      } = _ref53;
      return [classes.inputCaret, classes["inputCaret_".concat(Size)]];
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
      $target: (classes, _ref54) => {
        var {
          Size
        } = _ref54;
        return [classes.slider.target, classes.slider["target_".concat(Size)]];
      },
      $horizontal: (classes, _ref55) => {
        var {
          Size
        } = _ref55;
        return [classes.slider.horizontal, classes.slider["horizontal_".concat(Size)]];
      },
      $vertical: (classes, _ref56) => {
        var {
          Size
        } = _ref56;
        return [classes.slider.vertical, classes.slider["vertical_".concat(Size)]];
      },
      $base: (classes, _ref57) => {
        var {
          Size
        } = _ref57;
        return [classes.slider.base, classes.slider["base_".concat(Size)]];
      },
      $connects: (classes, _ref58) => {
        var {
          Size
        } = _ref58;
        return [classes.slider.connects, classes.slider["connects_".concat(Size)]];
      },
      $connect: (classes, _ref59) => {
        var {
          Size
        } = _ref59;
        return [classes.slider.connect, classes.slider["connect_".concat(Size)]];
      },
      $handle: (classes, _ref60) => {
        var {
          Size
        } = _ref60;
        return [classes.slider.handle, classes.slider["handle_".concat(Size)]];
      },
      $tooltip: (classes, _ref61) => {
        var {
          Size
        } = _ref61;
        return [classes.slider.tooltip, classes.slider["tooltip_".concat(Size)]];
      },
      $tooltipTop: (classes, _ref62) => {
        var {
          Size
        } = _ref62;
        return [classes.slider.tooltipTop, classes.slider["tooltipTop_".concat(Size)]];
      },
      $tooltipBottom: (classes, _ref63) => {
        var {
          Size
        } = _ref63;
        return [classes.slider.tooltipBottom, classes.slider["tooltipBottom_".concat(Size)]];
      },
      $tooltipLeft: (classes, _ref64) => {
        var {
          Size
        } = _ref64;
        return [classes.slider.tooltipLeft, classes.slider["tooltipLeft_".concat(Size)]];
      },
      $tooltipRight: (classes, _ref65) => {
        var {
          Size
        } = _ref65;
        return [classes.slider.tooltipRight, classes.slider["tooltipRight_".concat(Size)]];
      }
    },
    $wrapper: (classes, _ref66) => {
      var {
        Size
      } = _ref66;
      return [classes.wrapper, classes["wrapper_".concat(Size)]];
    }
  },
  StaticElement: {
    container: '',
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
    $content: (classes, _ref67) => {
      var {
        Size,
        top,
        bottom
      } = _ref67;
      return [classes.content, classes["content_".concat(Size)], top >= 1 ? classes["content_top_".concat(top)] : null, bottom >= 1 ? classes["content_bottom_".concat(bottom)] : null];
    },
    $tag: (classes, _ref68) => {
      var {
        Size,
        tag,
        align,
        top,
        bottom
      } = _ref68;
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
      $tags: (classes, _ref69) => {
        var {
          Size
        } = _ref69;
        return [classes.select.tags, classes.select["tags_".concat(Size)]];
      },
      $tag: (classes, _ref70) => {
        var {
          Size
        } = _ref70;
        return [classes.select.tag, classes.select["tag_".concat(Size)]];
      },
      $tagWrapper: (classes, _ref71) => {
        var {
          breakTags
        } = _ref71;
        return [classes.select.tagWrapper, !breakTags.value ? classes.select.tagWrapper_noBreak : null];
      },
      $tagDisabled: (classes, _ref72) => {
        var {
          Size
        } = _ref72;
        return [classes.select.tagDisabled, classes.select["tagDisabled_".concat(Size)]];
      },
      $tagRemove: (classes, _ref73) => {
        var {
          Size
        } = _ref73;
        return [classes.select.tagRemove, classes.select["tagRemove_".concat(Size)]];
      },
      $tagsSearchWrapper: (classes, _ref74) => {
        var {
          Size
        } = _ref74;
        return [classes.select.tagsSearchWrapper, classes.select["tagsSearchWrapper_".concat(Size)]];
      },
      $tagsSearch: (classes, _ref75) => {
        var {
          Size
        } = _ref75;
        return [classes.select.tagsSearch, classes.select["tagsSearch_".concat(Size)]];
      }
    })
  },
  TextareaElement: _objectSpread2({}, textarea),
  TextElement: _objectSpread2({}, text),
  ToggleElement: {
    container: '',
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
      $container: (classes, _ref76) => {
        var {
          Size,
          isDisabled
        } = _ref76;
        return [classes.toggle.container, classes.toggle["container_".concat(Size)], !isDisabled ? classes.toggle.container_enabled : classes.toggle.container_disabled];
      },
      $toggle: (classes, _ref77) => {
        var {
          Size
        } = _ref77;
        return [classes.toggle.toggle, classes.toggle["toggle_".concat(Size)]];
      },
      $handle: (classes, _ref78) => {
        var {
          Size
        } = _ref78;
        return [classes.toggle.handle, classes.toggle["handle_".concat(Size)]];
      },
      $label: (classes, _ref79) => {
        var {
          Size
        } = _ref79;
        return [classes.toggle.label, classes.toggle["label_".concat(Size)]];
      }
    },
    $text: (classes, _ref80) => {
      var {
        Size,
        align
      } = _ref80;
      return [classes.text, classes["text_".concat(Size)], align === 'left' ? [classes.text_left, classes["text_left_".concat(Size)]] : null, align === 'right' ? [classes.text_right, classes["text_right_".concat(Size)]] : null];
    },
    $wrapper: (classes, _ref81) => {
      var {
        align
      } = _ref81;
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
    $container: (classes, _ref82) => {
      var {
        hideTools
      } = _ref82;
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
    $container: (classes, _ref83) => {
      var {
        type,
        Size
      } = _ref83;
      return [classes.container, classes["container_".concat(Size)], classes["container_".concat(type)], classes["container_".concat(type, "_").concat(Size)]];
    }
  },
  ElementDescription: {
    container: 'form-color-muted',
    container_sm: 'form-text-small-sm mt-0.5',
    container_md: 'form-text-small mt-1',
    container_lg: 'form-text-small-lg mt-1',
    $container: (classes, _ref84) => {
      var {
        Size
      } = _ref84;
      return [classes.container, classes["container_".concat(Size)]];
    }
  },
  ElementError: {
    container: 'form-color-danger block',
    container_sm: 'form-text-small-sm mt-0.5',
    container_md: 'form-text-small mt-1',
    container_lg: 'form-text-small-lg mt-1',
    $container: (classes, _ref85) => {
      var {
        Size
      } = _ref85;
      return [classes.container, classes["container_".concat(Size)]];
    }
  },
  ElementInfo: {
    container: 'inline-block w-3.5 h-3.5 form-bg-info relative ml-1 cursor-pointer form-info-group',
    wrapper: 'absolute z-999 -mt-px opacity-0 invisible info-group-hover:opacity-100 info-group-hover:form-visible transition-opacity w-52 flex',
    wrapper_left: 'right-5 -top-0.5 justify-end',
    wrapper_right: 'left-5 -top-0.5 justify-start',
    wrapper_top: 'left-1/2 transform -translate-x-1/2 bottom-8 justify-center',
    wrapper_bottom: 'left-1/2 transform -translate-x-1/2 top-6 justify-center',
    content: 'bg-black bg-opacity-90 text-white rounded-md form-text-small py-1 px-2.5 not-italic inline-block relative',
    $wrapper: (classes, _ref86) => {
      var {
        position
      } = _ref86;
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
    $container: (classes, _ref87) => {
      var {
        el$,
        Size
      } = _ref87;
      return [classes.container, classes["container_".concat(Size)], !el$.inline ? el$.columnsClasses.label : null, el$.cols.default.label < 12 ? classes["container_horizontal_".concat(Size)] : classes["container_vertical_".concat(Size)], ...(Object.keys(el$.cols).length > 1 ? (el$.$vueform.config.breakpoints || ['sm', 'md', 'lg', 'xl', '2xl']).map(breakpoint => {
        var _el$$cols$breakpoint;
        if (!((_el$$cols$breakpoint = el$.cols[breakpoint]) !== null && _el$$cols$breakpoint !== void 0 && _el$$cols$breakpoint.label)) {
          return null;
        }
        return el$.cols[breakpoint].label < 12 ? classes["container_horizontal_".concat(Size, "_").concat(breakpoint.toUpperCase())].join(' ') : classes["container_vertical_".concat(Size, "_").concat(breakpoint.toUpperCase())].join(' ');
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
    $label: (classes, _ref88) => {
      var {
        visible,
        Size,
        el$
      } = _ref88;
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
    $container: (classes, _ref89) => {
      var {
        el$,
        Size
      } = _ref89;
      return [classes.container, classes["container_".concat(Size)], el$.columnsClasses.container, el$.classes.container, !el$.isStatic && el$.errors && !!el$.errors.length ? classes.container_error : null];
    },
    $innerContainer: (classes, _ref90) => {
      var {
        el$
      } = _ref90;
      return [classes.innerContainer, el$.columnsClasses.innerContainer];
    },
    $innerWrapper: (classes, _ref91) => {
      var {
        el$
      } = _ref91;
      return [classes.innerWrapper, el$.columnsClasses.wrapper];
    }
  },
  ElementLayoutInline: {
    container: 'flex',
    container_error: 'has-error',
    $container: (classes, _ref92) => {
      var {
        el$
      } = _ref92;
      return [classes.container, !el$.isStatic && el$.errors && !!el$.errors.length ? classes.container_error : null, el$.classes.container];
    }
  },
  ElementLoader: {
    container: 'relative z-1 order-1',
    loader: 'absolute w-4 h-4 right-full mask-bg mask-form-spinner form-bg-primary animate-spin',
    loader_sm: 'form-top-input-border-sm form-mr-input-sm mt-0.5',
    loader_md: 'form-top-input-border form-mr-input mt-1',
    loader_lg: 'form-top-input-border-lg form-mr-input-lg mt-1',
    $loader: (classes, _ref93) => {
      var {
        Size
      } = _ref93;
      return [classes.loader, classes["loader_".concat(Size)]];
    }
  },
  ElementMessage: {
    container: 'form-color-success block',
    container_sm: 'form-text-small-sm mt-0.5',
    container_md: 'form-text-small mt-1',
    container_lg: 'form-text-small-lg mt-1',
    $container: (classes, _ref94) => {
      var {
        Size
      } = _ref94;
      return [classes.container, classes["container_".concat(Size)]];
    }
  },
  ElementText: {
    container: '',
    container_before: '',
    container_between: '',
    container_after: '',
    $container: (classes, _ref95) => {
      var {
        type
      } = _ref95;
      return [classes.container, classes["container_".concat(type)]];
    }
  },
  FormElements: {
    container: 'grid grid-cols-12',
    container_sm: 'form-gap-x-gutter-sm form-gap-y-gutter-sm',
    container_md: 'form-gap-x-gutter form-gap-y-gutter',
    container_lg: 'form-gap-x-gutter-lg form-gap-y-gutter-lg',
    $container: (classes, _ref96) => {
      var {
        Size
      } = _ref96;
      return [classes.container, classes["container_".concat(Size)]];
    }
  },
  FormErrors: {
    container: 'form-bg-danger form-color-danger',
    container_sm: 'form-radius-input-sm form-text-sm form-mb-gutter-sm py-2 px-3',
    container_md: 'form-radius-input form-text form-mb-gutter py-2 px-3',
    container_lg: 'form-radius-input-lg form-text-lg form-mb-gutter-lg py-3 px-4',
    error: '',
    $container: (classes, _ref97) => {
      var {
        Size
      } = _ref97;
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
    $wrapper: (classes, _ref98) => {
      var {
        selected,
        Size
      } = _ref98;
      return [classes.wrapper, classes["wrapper_".concat(Size)], selected ? classes.wrapper_active : classes.wrapper_inactive];
    }
  },
  FormLanguages: {
    container: 'flex items-center justify-between',
    container_sm: 'form-mb-gutter form-text-sm',
    container_md: 'form-mb-gutter-lg form-text',
    container_lg: 'form-mb-gutter-lg form-text-lg',
    $container: (classes, _ref99) => {
      var {
        Size
      } = _ref99;
      return [classes.container, classes["container_".concat(Size)]];
    }
  },
  FormMessages: {
    container: 'form-bg-success form-color-success',
    container_sm: 'form-radius-input-sm form-text-sm form-mb-gutter-sm py-2 px-3',
    container_md: 'form-radius-input form-text form-mb-gutter py-2 px-3',
    container_lg: 'form-radius-input-lg form-text-lg form-mb-gutter-lg py-3 px-4',
    message: '',
    $container: (classes, _ref100) => {
      var {
        Size
      } = _ref100;
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
    $container: (classes, _ref101) => {
      var {
        active,
        isDisabled,
        completed,
        invalid,
        pending
      } = _ref101;
      return [classes.container, active ? classes.container_active : classes.container_inactive, isDisabled ? classes.container_disabled : classes.container_enabled, completed ? classes.container_completed : classes.container_incompleted, invalid ? classes.container_invalid : classes.container_valid, pending ? classes.container_pending : null];
    }
  },
  FormSteps: {
    container: 'form-steps',
    container_sm: 'form-mb-gutter form-text-sm',
    container_md: 'form-mb-gutter-lg form-text',
    container_lg: 'form-mb-gutter-lg form-text-lg',
    wrapper: 'flex justify-between overflow-x-auto',
    $container: (classes, _ref102) => {
      var {
        Size
      } = _ref102;
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
    $button: (classes, _ref103) => {
      var {
        isDisabled,
        isLoading,
        type,
        Size
      } = _ref103;
      return [classes.button, classes["button_".concat(Size)], classes["button_".concat(type)], isDisabled && !isLoading ? classes["button_".concat(type, "_disabled")] : null, !isDisabled && !isLoading ? classes["button_".concat(type, "_enabled")] : null, isLoading ? classes["button_".concat(type, "_loading")] : null];
    }
  },
  FormStepsControls: {
    container: 'flex justify-between',
    container_sm: 'form-mt-gutter form-text-sm',
    container_md: 'form-mt-gutter-lg form-text',
    container_lg: 'form-mt-gutter-lg form-text-lg',
    $container: (classes, _ref104) => {
      var {
        Size
      } = _ref104;
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
    $container: (classes, _ref105) => {
      return [classes.container];
    },
    $wrapper: (classes, _ref106) => {
      var {
        active,
        invalid,
        Size
      } = _ref106;
      return [classes.wrapper, classes["wrapper_".concat(Size)], active ? classes.wrapper_active : classes.wrapper_inactive, invalid ? classes.wrapper_invalid : classes.wrapper_valid];
    }
  },
  FormTabs: {
    container: 'flex items-end',
    container_sm: 'form-mb-gutter form-text-sm',
    container_md: 'form-mb-gutter-lg form-text',
    container_lg: 'form-mb-gutter-lg form-text-lg',
    $container: (classes, _ref107) => {
      var {
        Size
      } = _ref107;
      return [classes.container, classes["container_".concat(Size)]];
    }
  },
  Vueform: {
    form: ''
  },
  // Slots
  CheckboxgroupCheckbox: _objectSpread2(_objectSpread2({}, checkbox), {}, {
    container: 'flex align-start cursor-pointer',
    text: '',
    input: checkbox.input + ' form-shadow-handles',
    input_sm: checkbox.input_sm + ' form-mt-checkbox-sm',
    input_md: checkbox.input_md + ' form-mt-checkbox',
    input_lg: checkbox.input_lg + ' form-mt-checkbox-lg'
  }),
  CheckboxgroupCheckbox_tabs: _objectSpread2(_objectSpread2({}, groupTabs), {}, {
    $wrapper: (classes, _ref108) => {
      var {
        index,
        items,
        el$,
        value,
        isDisabled,
        Size
      } = _ref108;
      return [classes.wrapper, classes["wrapper_".concat(Size)], index < Object.keys(items).length - 1 ? classes.wrapper_not_last : null, index === 0 ? classes.wrapper_first : null, index === 0 ? classes["wrapper_first_".concat(Size)] : null, index === Object.keys(items).length - 1 ? classes.wrapper_last : null, index === Object.keys(items).length - 1 ? classes["wrapper_last_".concat(Size)] : null, el$.value.indexOf(value) !== -1 ? classes.wrapper_selected : classes.wrapper_unselected, isDisabled ? classes.wrapper_disabled : null];
    }
  }),
  CheckboxgroupCheckbox_blocks: _objectSpread2(_objectSpread2(_objectSpread2({}, checkbox), groupBlocks), {}, {
    $wrapper: (classes, _ref109) => {
      var {
        index,
        items,
        el$,
        value,
        isDisabled,
        Size
      } = _ref109;
      return [classes.wrapper, classes["wrapper_".concat(Size)], index < Object.keys(items).length - 1 ? classes.wrapper_not_last : null, index === 0 ? classes.wrapper_first : null, index === 0 ? classes["wrapper_first_".concat(Size)] : null, index === Object.keys(items).length - 1 ? classes.wrapper_last : null, index === Object.keys(items).length - 1 ? classes["wrapper_last_".concat(Size)] : null, el$.value.indexOf(value) !== -1 ? classes.wrapper_selected : classes.wrapper_unselected, isDisabled ? classes.wrapper_disabled : null];
    },
    $description: (classes, _ref110) => {
      var {
        Size
      } = _ref110;
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
    $container: (classes, _ref111) => {
      var {
        dragging,
        disabled,
        Size
      } = _ref111;
      return [classes.container, classes["container_".concat(Size)], dragging ? classes.container_active : classes.container_inactive, disabled ? classes.container_disabled : classes.container_enabled];
    }
  },
  FilePreview: {
    container: 'flex justify-center flex-row group relative',
    container_sm: 'form-h-input-height-sm',
    container_md: 'form-h-input-height',
    container_lg: 'form-h-input-height',
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
    $container: (classes, _ref112) => {
      var {
        Size
      } = _ref112;
      return [classes.container, classes["container_".concat(Size)]];
    }
  },
  FilePreview_image: {
    container: 'flex justify-start flex-row group relative',
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
    $image: (classes, _ref113) => {
      var {
        hasLink,
        Size
      } = _ref113;
      return [classes.image, classes["image_".concat(Size)], hasLink ? classes.image_link : classes.image_static];
    },
    $img: (classes, _ref114) => {
      var {
        Size
      } = _ref114;
      return [classes.img, classes["img_".concat(Size)]];
    },
    $progressBar: (classes, _ref115) => {
      var {
        Size
      } = _ref115;
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
    $container: (classes, _ref116) => {
      var {
        Size
      } = _ref116;
      return [classes.container, classes["container_".concat(Size)]];
    },
    $image: (classes, _ref117) => {
      var {
        Size
      } = _ref117;
      return [classes.image, classes["image_".concat(Size)]];
    },
    $img: (classes, _ref118) => {
      var {
        Size
      } = _ref118;
      return [classes.img, classes["img_".concat(Size)]];
    },
    $overlay: (classes, _ref119) => {
      var {
        Size
      } = _ref119;
      return [classes.overlay, classes["overlay_".concat(Size)]];
    }
  },
  RadiogroupRadio: _objectSpread2(_objectSpread2({}, radio), {}, {
    container: 'flex align-start cursor-pointer',
    text: '',
    input: radio.input + ' form-shadow-handles',
    input_sm: radio.input_sm + ' form-mt-checkbox-sm',
    input_md: radio.input_md + ' form-mt-checkbox',
    input_lg: radio.input_lg + ' form-mt-checkbox-lg'
  }),
  RadiogroupRadio_tabs: _objectSpread2(_objectSpread2({}, groupTabs), {}, {
    $wrapper: (classes, _ref120) => {
      var {
        index,
        items,
        el$,
        value,
        isDisabled,
        Size
      } = _ref120;
      return [classes.wrapper, classes["wrapper_".concat(Size)], index < Object.keys(items).length - 1 ? classes.wrapper_not_last : null, index === 0 ? classes.wrapper_first : null, index === 0 ? classes["wrapper_first_".concat(Size)] : null, index === Object.keys(items).length - 1 ? classes.wrapper_last : null, index === Object.keys(items).length - 1 ? classes["wrapper_last_".concat(Size)] : null, el$.value == value ? classes.wrapper_selected : classes.wrapper_unselected, isDisabled ? classes.wrapper_disabled : null];
    }
  }),
  RadiogroupRadio_blocks: _objectSpread2(_objectSpread2(_objectSpread2({}, radio), groupBlocks), {}, {
    $wrapper: (classes, _ref121) => {
      var {
        index,
        items,
        el$,
        value,
        isDisabled,
        Size
      } = _ref121;
      return [classes.wrapper, classes["wrapper_".concat(Size)], index < Object.keys(items).length - 1 ? classes.wrapper_not_last : null, index === 0 ? classes.wrapper_first : null, index === 0 ? classes["wrapper_first_".concat(Size)] : null, index === Object.keys(items).length - 1 ? classes.wrapper_last : null, index === Object.keys(items).length - 1 ? classes["wrapper_last_".concat(Size)] : null, el$.value == value ? classes.wrapper_selected : classes.wrapper_unselected, isDisabled ? classes.wrapper_disabled : null];
    },
    $description: (classes, _ref122) => {
      var {
        Size
      } = _ref122;
      return [classes.description, classes["description_".concat(Size)]];
    }
  })
};

/**
 * =========
 * Templates
 * =========
 */
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
    ElementText,
    ElementAddon,
    ButtonElement,
    CheckboxElement,
    CheckboxgroupElement: CheckboxgroupElement_blocks,
    CheckboxgroupElement_tabs: CheckboxgroupElement_blocks,
    CheckboxgroupElement_blocks,
    DateElement,
    DatesElement,
    FileElement,
    GroupElement,
    HiddenElement,
    ListElement,
    LocationElement: __vue_component__$x,
    MultifileElement,
    MultiselectElement,
    ObjectElement,
    RadioElement,
    RadiogroupElement: RadiogroupElement_blocks,
    RadiogroupElement_tabs: RadiogroupElement_blocks,
    RadiogroupElement_blocks,
    SelectElement,
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
    DatepickerWrapper: __vue_component__$2,
    EditorWrapper: __vue_component__
  },
  classes,
  columns: columns
};
var prefixer = function prefixer(classes, prefix) {
  var prefixedClasses = {};
  var prefixClass = class_ => {
    var res;
    try {
      res = class_.split(' ').map(c => {
        if (c.match(/:/)) {
          return c.replace(':', ":".concat(prefix));
        }
        if (c.match(/!/)) {
          return c.replace('!', "!".concat(prefix));
        }
        return c.length ? "".concat(prefix).concat(c) : c;
      }).join(' ');
    } catch (e) {
      console.error('Couldn\'t prefix class: ', class_, e);
    }
    return res;
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
  return prefixedClasses;
};
var prefix = function prefix(_prefix) {
  return Object.assign({}, theme, {
    classes: prefixer(classes, _prefix),
    columns: (breakpoint, size) => {
      return columns(breakpoint, size, _prefix);
    }
  });
};

export { ButtonElement, CheckboxElement, CheckboxgroupCheckbox, CheckboxgroupCheckbox_blocks, CheckboxgroupCheckbox_tabs, CheckboxgroupElement_blocks as CheckboxgroupElement, CheckboxgroupElement_blocks, CheckboxgroupElement_blocks as CheckboxgroupElement_tabs, DateElement, __vue_component__$2 as DatepickerWrapper, DatesElement, DragAndDrop, EditorElement, __vue_component__ as EditorWrapper, ElementAddon, ElementDescription, ElementError, ElementInfo, ElementLabel, ElementLabelFloating, ElementLayout, ElementLayoutInline, ElementLoader, ElementMessage, ElementText, FileElement, FilePreview, FilePreview_gallery, FilePreview_image, FormElements, FormErrors, FormLanguage, FormLanguages, FormMessages, FormStep, FormSteps, FormStepsControl, FormStepsControls, FormTab, FormTabs, GroupElement, HiddenElement, ListElement, __vue_component__$x as LocationElement, MultifileElement, MultiselectElement, ObjectElement, RadioElement, RadiogroupElement_blocks as RadiogroupElement, RadiogroupElement_blocks, RadiogroupElement_blocks as RadiogroupElement_tabs, RadiogroupRadio, RadiogroupRadio_blocks, RadiogroupRadio_tabs, SelectElement, SliderElement, StaticElement, TEditorElement, TTextElement, TTextareaElement, TagsElement, TextElement, TextareaElement, ToggleElement, Vueform, classes, columns, theme as default, prefix, prefixer };
