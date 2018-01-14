(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BootstrapVue"] = factory();
	else
		root["BootstrapVue"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'badge',
    props: {
        variant: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        },
        href: {
            type: String,
            default: '#'
        }
    },
    methods: {
        getClass(variant) {
            return {
                'badge-primary': variant == 'primary',
                'badge-secondary': variant == 'secondary',
                'badge-success': variant == 'success',
                'badge-danger': variant == 'danger',
                'badge-warning': variant == 'warning',
                'badge-info': variant == 'info',
                'badge-light': variant == 'light',
                'badge-dark': variant == 'dark'
            };
        }
    }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'breadcrumb',
    props: {
        items: {
            type: Array,
            default: []
        }
    },
    methods: {
        bindActive(isActive) {
            if (isActive) {
                return { 'aria-current': 'page' };
            }
        }
    }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'btn',
    props: {
        variant: {
            type: String,
            default: 'primary'
        },
        type: {
            type: String,
            default: 'button'
        },
        href: {
            type: String,
            default: '#'
        },
        size: {
            type: String,
            default: 'sm'
        },
        block: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        },
        active: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        getClass(variant) {
            return {
                'btn-primary': variant == 'primary',
                'btn-secondary': variant == 'secondary',
                'btn-success': variant == 'success',
                'btn-danger': variant == 'danger',
                'btn-warning': variant == 'warning',
                'btn-info': variant == 'info',
                'btn-light': variant == 'light',
                'btn-dark': variant == 'dark',
                'btn-link': variant == 'link',
                'btn-outline-primary': variant == 'outline-primary',
                'btn-outline-secondary': variant == 'outline-secondary',
                'btn-outline-success': variant == 'outline-success',
                'btn-outline-danger': variant == 'outline-danger',
                'btn-outline-warning': variant == 'outline-warning',
                'btn-outline-info': variant == 'outline-info',
                'btn-outline-light': variant == 'outline-light',
                'btn-outline-dark': variant == 'outline-dark'
            };
        },
        getSize(size) {
            return {
                'btn-lg': size == 'lg',
                'btn-sm': size == 'sm'
            };
        },
        getBlock(block) {
            return {
                'btn-block': block
            };
        },
        getDisabled(disabled) {
            return {
                'disabled': disabled
            };
        },
        bindDisabled(disabled) {
            if (disabled) {
                return {
                    'aria-disabled': 'true'
                };
            }
        },
        getActive(active) {
            return {
                'active': active
            };
        },
        bindActive(active) {
            if (active) {
                return {
                    'aria-pressed': 'true'
                };
            }
        }
    }
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'button-group',
    props: {
        label: {
            type: String,
            default: 'group'
        },
        size: {
            type: String,
            default: 'sm'
        },
        vertical: {
            type: Boolean,
            default: false
        },
        space: {
            type: Number,
            default: 0
        }
    },
    methods: {
        getSize(size) {
            return {
                'btn-group-sm': size == 'sm',
                'btn-group-lg': size == 'lg'
            };
        },
        getVertical(vertical) {
            return {
                'btn-group-vertical': vertical
            };
        },
        getSpace(space) {
            return {
                'mr-1': space == 1,
                'mr-2': space == 2,
                'mr-3': space == 3,
                'mr-4': space == 4,
                'mr-5': space == 5
            };
        }
    }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'button-toolbar',
    props: {
        label: {
            type: String,
            default: 'toolbar'
        }
    }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _alert = __webpack_require__(8);

var _alert2 = _interopRequireDefault(_alert);

var _badge = __webpack_require__(9);

var _badge2 = _interopRequireDefault(_badge);

var _breadcrumb = __webpack_require__(11);

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _button = __webpack_require__(13);

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = __webpack_require__(15);

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _buttonToolbar = __webpack_require__(17);

var _buttonToolbar2 = _interopRequireDefault(_buttonToolbar);

var _card = __webpack_require__(19);

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BootstrapVue = {
    'bvAlert': _alert2.default,
    'bvBadge': _badge2.default,
    'bvBreadcrumb': _breadcrumb2.default,
    'bvButton': _button2.default,
    'bvButtonGroup': _buttonGroup2.default,
    'bvButtonToolbar': _buttonToolbar2.default,
    'bvCard': _card2.default
};

module.exports = BootstrapVue;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = exports.props = {
    show: {
        type: Boolean,
        default: false
    },
    variant: {
        type: String,
        default: 'primary'
    },
    dismiss: {
        type: Boolean,
        default: false
    },
    timeout: {
        type: Number,
        default: 0
    }
};

exports.default = {
    name: 'alert',
    functional: true,
    props: props,
    render: function render(h, _ref) {
        var props = _ref.props,
            slots = _ref.slots;

        return h('div', {
            staticClass: 'alert',
            class: _defineProperty({}, 'alert-' + props.variant, true),
            attrs: {
                role: 'alert'
            }
        });
    }
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_badge_vue__ = __webpack_require__(1);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1d0de863_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_badge_vue__ = __webpack_require__(10);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_badge_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1d0de863_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_badge_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\badge.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d0de863", Component.options)
  } else {
    hotAPI.reload("data-v-1d0de863", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.type == "badge"
    ? _c(
        "span",
        { staticClass: "babge", class: _vm.getClass(_vm.variant) },
        [_vm._t("default")],
        2
      )
    : _vm.type == "contextual"
      ? _c(
          "span",
          { staticClass: "badge", class: _vm.getClass(_vm.variant) },
          [_vm._t("default")],
          2
        )
      : _vm.type == "pill"
        ? _c(
            "span",
            {
              staticClass: "badge badge-pill",
              class: _vm.getClass(_vm.variant)
            },
            [_vm._t("default")],
            2
          )
        : _vm.type == "link"
          ? _c(
              "a",
              {
                staticClass: "badge",
                class: _vm.getClass(_vm.variant),
                attrs: { href: _vm.href }
              },
              [_vm._t("default")],
              2
            )
          : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1d0de863", esExports)
  }
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue__ = __webpack_require__(2);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_22db0e73_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_breadcrumb_vue__ = __webpack_require__(12);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_22db0e73_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_breadcrumb_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\breadcrumb.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-22db0e73", Component.options)
  } else {
    hotAPI.reload("data-v-22db0e73", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
    _c(
      "ol",
      { staticClass: "breadcrumb" },
      _vm._l(_vm.items, function(item, index) {
        return _c(
          "li",
          _vm._b(
            {
              key: index,
              staticClass: "breadcrumb-item",
              class: { active: item.active }
            },
            "li",
            _vm.bindActive(item.active),
            false
          ),
          [
            !item.active
              ? _c("a", { attrs: { href: item.href } }, [
                  _vm._v(_vm._s(item.text))
                ])
              : [_vm._v(_vm._s(item.text))]
          ],
          2
        )
      })
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-22db0e73", esExports)
  }
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__ = __webpack_require__(3);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c414222_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__ = __webpack_require__(14);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c414222_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\button.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c414222", Component.options)
  } else {
    hotAPI.reload("data-v-5c414222", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.type == "button"
    ? _c(
        "button",
        _vm._b(
          {
            staticClass: "btn",
            class: [
              _vm.getClass(_vm.variant),
              _vm.getSize(_vm.size),
              _vm.getBlock(_vm.block),
              _vm.getActive(_vm.active)
            ],
            attrs: { type: "button" }
          },
          "button",
          [{ disabled: _vm.disabled }, _vm.bindActive(_vm.active)],
          false
        ),
        [_vm._t("default")],
        2
      )
    : _vm.type == "link"
      ? _c(
          "a",
          _vm._b(
            {
              staticClass: "btn",
              class: [
                _vm.getClass(_vm.variant),
                _vm.getSize(_vm.size),
                _vm.getBlock(_vm.block),
                _vm.getDisabled(_vm.disabled),
                _vm.getActive(_vm.active)
              ],
              attrs: { href: _vm.href, role: "button" }
            },
            "a",
            [_vm.bindDisabled(_vm.disabled), _vm.bindActive(_vm.active)],
            false
          ),
          [_vm._t("default")],
          2
        )
      : _vm.type == "reset"
        ? _c(
            "input",
            _vm._b(
              {
                staticClass: "btn",
                class: [
                  _vm.getClass(_vm.variant),
                  _vm.getSize(_vm.size),
                  _vm.getBlock(_vm.block),
                  _vm.getDisabled(_vm.disabled),
                  _vm.getActive(_vm.active)
                ],
                attrs: { type: "reset" }
              },
              "input",
              [{ value: _vm.value }, _vm.bindActive(_vm.active)],
              false
            )
          )
        : _vm.type == "submit"
          ? _c(
              "input",
              _vm._b(
                {
                  staticClass: "btn",
                  class: [
                    _vm.getClass(_vm.variant),
                    _vm.getSize(_vm.size),
                    _vm.getBlock(_vm.block),
                    _vm.getDisabled(_vm.disabled),
                    _vm.getActive(_vm.active)
                  ],
                  attrs: { type: "submit" }
                },
                "input",
                [{ value: _vm.value }, _vm.bindActive(_vm.active)],
                false
              )
            )
          : _vm.type == "ibutton"
            ? _c(
                "input",
                _vm._b(
                  {
                    staticClass: "btn",
                    class: [
                      _vm.getClass(_vm.variant),
                      _vm.getSize(_vm.size),
                      _vm.getBlock(_vm.block),
                      _vm.getDisabled(_vm.disabled),
                      _vm.getActive(_vm.active)
                    ],
                    attrs: { type: "button" }
                  },
                  "input",
                  [{ value: _vm.value }, _vm.bindActive(_vm.active)],
                  false
                )
              )
            : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5c414222", esExports)
  }
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_group_vue__ = __webpack_require__(4);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_675b17d8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_group_vue__ = __webpack_require__(16);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_group_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_675b17d8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_group_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\button-group.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-675b17d8", Component.options)
  } else {
    hotAPI.reload("data-v-675b17d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "btn-group",
      class: [
        _vm.getSize(_vm.size),
        _vm.getVertical(_vm.vertical),
        _vm.getSpace(_vm.space)
      ],
      attrs: { role: "group", "aria-label": _vm.label }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-675b17d8", esExports)
  }
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_toolbar_vue__ = __webpack_require__(5);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7f737fd0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_toolbar_vue__ = __webpack_require__(18);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_toolbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7f737fd0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_toolbar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\button-toolbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f737fd0", Component.options)
  } else {
    hotAPI.reload("data-v-7f737fd0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "btn-toolbar",
      attrs: { role: "toolbar", "aria-label": _vm.label }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7f737fd0", esExports)
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.props = undefined;

var _cardBody = __webpack_require__(20);

var _cardBody2 = _interopRequireDefault(_cardBody);

var _cardImage = __webpack_require__(21);

var _cardImage2 = _interopRequireDefault(_cardImage);

var _cardHeader = __webpack_require__(22);

var _cardHeader2 = _interopRequireDefault(_cardHeader);

var _cardFooter = __webpack_require__(23);

var _cardFooter2 = _interopRequireDefault(_cardFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = exports.props = Object.assign({}, _cardBody.props, _cardImage.props, _cardHeader.props, _cardFooter.props);

exports.default = {
    name: 'card',
    functional: true,
    props: props,
    render: function render(h, _ref) {
        var props = _ref.props,
            slots = _ref.slots;

        var components = [];

        if (props.header != '') {
            components.push(h(_cardHeader2.default, { props: props }));
        }

        if (props.imgSrc != '' && !props.bottom) {
            components.push(h(_cardImage2.default, { props: props }));
        }

        if (props.noBody) {
            components.push(slots().default);
        } else {
            components.push(h(_cardBody2.default, { props: props }, slots().default));
        }

        if (props.footer != '') {
            components.push(h(_cardFooter2.default, { props: props }));
        }

        if (props.imgSrc != '' && props.bottom) {
            components.push(h(_cardImage2.default, { props: props }));
        }

        return h('div', {
            staticClass: 'card'
        }, components);
    }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var props = exports.props = {
    noBody: {
        type: Boolean,
        default: false
    },
    overlay: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: ''
    },
    titleTag: {
        type: String,
        default: 'h5'
    },
    subtitle: {
        type: String,
        default: ''
    },
    subtitleTag: {
        type: String,
        default: 'h6'
    }
};

exports.default = {
    name: 'card-body',
    functional: true,
    props: props,
    render: function render(h, _ref) {
        var props = _ref.props,
            slots = _ref.slots;

        var components = [];

        if (props.title != '') {
            components.push(h(props.titleTag, {
                staticClass: 'card-title',
                domProps: { innerHTML: props.title }
            }));
        }

        if (props.subtitle != '') {
            components.push(h(props.subtitleTag, {
                staticClass: 'card-subtitle',
                domProps: { innerHTML: props.subtitle }
            }));
        }
        components.push(slots().default);

        return h('div', {
            class: {
                'card-body': props.overlay == false,
                'card-img-overlay': props.overlay == true
            }
        }, components);
    }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var props = exports.props = {
    imgSrc: {
        type: String,
        default: ''
    },
    imgAlt: {
        type: String,
        default: ''
    },
    bottom: {
        type: Boolean,
        default: false
    }
};

exports.default = {
    name: 'card-image',
    functional: true,
    props: props,
    render: function render(h, _ref) {
        var props = _ref.props;

        var staticClass = 'card-img-top';

        if (props.bottom) {
            staticClass = 'card-img-bottom';
        }

        return h('img', {
            staticClass: staticClass,
            attrs: {
                src: props.imgSrc,
                alt: props.imgAlt
            }
        });
    }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var props = exports.props = {
    header: {
        type: String,
        default: ''
    },
    headerTag: {
        type: String,
        default: 'div'
    },
    headerClass: {
        type: [String, Object, Array],
        default: null
    }
};

exports.default = {
    name: 'card-header',
    functional: true,
    props: props,
    render: function render(h, _ref) {
        var props = _ref.props,
            slots = _ref.slots;

        return h(props.headerTag, {
            staticClass: 'card-header',
            class: [props.headerClass]
        }, [h('div', { domProps: { innerHTML: props.header } })]);
    }
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var props = exports.props = {
    footer: {
        type: String,
        default: ''
    },
    footerClass: {
        type: [String, Object, Array],
        default: null
    }
};

exports.default = {
    name: 'card-footer',
    functional: true,
    props: props,
    render: function render(h, _ref) {
        var props = _ref.props;

        return h('div', {
            staticClass: 'card-footer',
            class: [props.footerClass]
        }, [h('div', { domProps: { innerHTML: props.footer } })]);
    }
};

/***/ })
/******/ ]);
});