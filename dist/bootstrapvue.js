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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_body_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_image_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_header_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_footer_vue__ = __webpack_require__(15);
//
//
//
//
//
//
//
//
//
//
//






const props = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__card_body_vue__["props"], __WEBPACK_IMPORTED_MODULE_1__card_image_vue__["b" /* props */], __WEBPACK_IMPORTED_MODULE_2__card_header_vue__["b" /* props */], __WEBPACK_IMPORTED_MODULE_3__card_footer_vue__["b" /* props */]);
/* harmony export (immutable) */ __webpack_exports__["b"] = props;


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'card',
    props,
    components: {
        CardBody: __WEBPACK_IMPORTED_MODULE_0__card_body_vue__["default"],
        CardImage: __WEBPACK_IMPORTED_MODULE_1__card_image_vue__["a" /* default */],
        CardHeader: __WEBPACK_IMPORTED_MODULE_2__card_header_vue__["a" /* default */],
        CardFooter: __WEBPACK_IMPORTED_MODULE_3__card_footer_vue__["a" /* default */]
    }
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_body_vue__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_body_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3296da3a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_card_body_vue__ = __webpack_require__(10);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_body_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3296da3a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_card_body_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\card\\card-body.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3296da3a", Component.options)
  } else {
    hotAPI.reload("data-v-3296da3a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


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
//
//
//
//
//
//
//
//
//
//

const props = {
    noBody: {
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
/* harmony export (immutable) */ __webpack_exports__["b"] = props;


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'card-body',
    props
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

const props = {
    imgSrc: {
        type: String,
        default: ''
    },
    imgAlt: {
        type: String,
        default: ''
    },
    imgBottom: {
        type: Boolean,
        default: false
    }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = props;


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'card-image',
    props,
    methods: {
        getClass() {
            return {
                'card-img-top': this.imgBottom == false,
                'card-img-bottom': this.imgBottom == true
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
//
//
//
//

const props = {
    headerTag: {
        type: String,
        default: 'div'
    },
    headerText: {
        type: String,
        default: ''
    },
    headerClass: {
        type: [String, Object, Array],
        default: null
    }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = props;


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'card-header',
    props
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//


const props = {
    footerText: {
        type: String,
        default: ''
    },
    footerClass: {
        type: [String, Object, Array],
        default: null
    }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = props;


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'card-footer',
    props
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _card = __webpack_require__(9);

var _card2 = _interopRequireDefault(_card);

var _cardBody = __webpack_require__(2);

var _cardBody2 = _interopRequireDefault(_cardBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BootstrapVue = {
    'bvCard': _card2.default,
    'bvCardBody': _cardBody2.default
};

module.exports = BootstrapVue;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_vue__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8299dec8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_card_vue__ = __webpack_require__(17);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8299dec8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_card_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\card\\card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8299dec8", Component.options)
  } else {
    hotAPI.reload("data-v-8299dec8", Component.options)
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
  return _vm.noBody == false
    ? _c(
        "div",
        { staticClass: "card-body" },
        [
          _vm.titleTag == "h1"
            ? _c("h1", { staticClass: "card-title" }, [
                _vm._v(_vm._s(_vm.title))
              ])
            : _vm.titleTag == "h2"
              ? _c("h2", { staticClass: "card-title" }, [
                  _vm._v(_vm._s(_vm.title))
                ])
              : _vm.titleTag == "h3"
                ? _c("h3", { staticClass: "card-title" }, [
                    _vm._v(_vm._s(_vm.title))
                  ])
                : _vm.titleTag == "h4"
                  ? _c("h4", { staticClass: "card-title" }, [
                      _vm._v(_vm._s(_vm.title))
                    ])
                  : _vm.titleTag == "h5"
                    ? _c("h5", { staticClass: "card-title" }, [
                        _vm._v(_vm._s(_vm.title))
                      ])
                    : _vm.titleTag == "h6"
                      ? _c("h6", { staticClass: "card-title" }, [
                          _vm._v(_vm._s(_vm.title))
                        ])
                      : _vm._e(),
          _vm._v(" "),
          _vm.subtitleTag == "h1"
            ? _c("h1", { staticClass: "card-subtitle" }, [
                _vm._v(_vm._s(_vm.subtitle))
              ])
            : _vm.subtitleTag == "h2"
              ? _c("h2", { staticClass: "card-tisubtitletle" }, [
                  _vm._v(_vm._s(_vm.subtitle))
                ])
              : _vm.subtitleTag == "h3"
                ? _c("h3", { staticClass: "card-subtitle" }, [
                    _vm._v(_vm._s(_vm.subtitle))
                  ])
                : _vm.subtitleTag == "h4"
                  ? _c("h4", { staticClass: "card-subtitle" }, [
                      _vm._v(_vm._s(_vm.subtitle))
                    ])
                  : _vm.subtitleTag == "h5"
                    ? _c("h5", { staticClass: "card-subtitle" }, [
                        _vm._v(_vm._s(_vm.subtitle))
                      ])
                    : _vm.subtitleTag == "h6"
                      ? _c("h6", { staticClass: "card-subtitle" }, [
                          _vm._v(_vm._s(_vm.subtitle))
                        ])
                      : _vm._e(),
          _vm._v(" "),
          _vm._t("default")
        ],
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
    require("vue-hot-reload-api")      .rerender("data-v-3296da3a", esExports)
  }
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_image_vue__ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_image_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7376e3ea_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_card_image_vue__ = __webpack_require__(12);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_image_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7376e3ea_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_card_image_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\card\\card-image.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7376e3ea", Component.options)
  } else {
    hotAPI.reload("data-v-7376e3ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("img", {
    class: _vm.getClass(),
    attrs: { src: _vm.imgSrc, alt: _vm.imgAlt }
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7376e3ea", esExports)
  }
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_header_vue__ = __webpack_require__(5);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_header_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c38efe4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_card_header_vue__ = __webpack_require__(14);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c38efe4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_card_header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\card\\card-header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6c38efe4", Component.options)
  } else {
    hotAPI.reload("data-v-6c38efe4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.headerTag == "div"
    ? _c(
        "div",
        { staticClass: "card-header", class: _vm.headerClass },
        [_vm._v(_vm._s(_vm.headerText)), _vm._t("default")],
        2
      )
    : _vm.headerTag == "h1"
      ? _c(
          "h1",
          { staticClass: "card-header", class: _vm.headerClass },
          [_vm._v(_vm._s(_vm.headerText)), _vm._t("default")],
          2
        )
      : _vm.headerTag == "h2"
        ? _c(
            "h2",
            { staticClass: "card-header", class: _vm.headerClass },
            [_vm._v(_vm._s(_vm.headerText)), _vm._t("default")],
            2
          )
        : _vm.headerTag == "h3"
          ? _c(
              "h3",
              { staticClass: "card-header", class: _vm.headerClass },
              [_vm._v(_vm._s(_vm.headerText)), _vm._t("default")],
              2
            )
          : _vm.headerTag == "h4"
            ? _c(
                "h4",
                { staticClass: "card-header", class: _vm.headerClass },
                [_vm._v(_vm._s(_vm.headerText)), _vm._t("default")],
                2
              )
            : _vm.headerTag == "h5"
              ? _c(
                  "h5",
                  { staticClass: "card-header", class: _vm.headerClass },
                  [_vm._v(_vm._s(_vm.headerText)), _vm._t("default")],
                  2
                )
              : _vm.headerTag == "h6"
                ? _c(
                    "h6",
                    { staticClass: "card-header", class: _vm.headerClass },
                    [_vm._v(_vm._s(_vm.headerText)), _vm._t("default")],
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
    require("vue-hot-reload-api")      .rerender("data-v-6c38efe4", esExports)
  }
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_footer_vue__ = __webpack_require__(6);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_footer_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ae9db7c8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_card_footer_vue__ = __webpack_require__(16);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_footer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ae9db7c8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_card_footer_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\card\\card-footer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ae9db7c8", Component.options)
  } else {
    hotAPI.reload("data-v-ae9db7c8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


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
    { staticClass: "card-footer", class: _vm.footerClass },
    [_vm._v("\n    " + _vm._s(_vm.footerText) + "\n    "), _vm._t("default")],
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
    require("vue-hot-reload-api")      .rerender("data-v-ae9db7c8", esExports)
  }
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card" },
    [
      _vm.headerText || this.$slots.header
        ? _c(
            "card-header",
            {
              attrs: {
                headerClass: _vm.headerClass,
                headerTag: _vm.headerTag,
                headerText: _vm.headerText
              }
            },
            [_vm._t("header")],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.imgBottom == false && _vm.imgSrc != ""
        ? _c("card-image", {
            attrs: {
              imgSrc: _vm.imgSrc,
              imgAlt: _vm.imgAlt,
              imgBottom: _vm.imgBottom
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.noBody == false
        ? _c(
            "card-body",
            {
              attrs: {
                "title-tag": _vm.titleTag,
                title: _vm.title,
                subtitle: _vm.subtitle,
                subtitleTag: _vm.subtitleTag,
                "no-body": _vm.noBody
              }
            },
            [_vm._t("default")],
            2
          )
        : _vm._t("default"),
      _vm._v(" "),
      _vm.imgBottom == true && _vm.imgSrc != ""
        ? _c("card-image", {
            attrs: {
              imgSrc: _vm.imgSrc,
              imgAlt: _vm.imgAlt,
              imgBottom: _vm.imgBottom
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.footerText || this.$slots.footer
        ? _c(
            "card-footer",
            {
              attrs: {
                footerText: _vm.footerText,
                footerClass: _vm.footerClass
              }
            },
            [_vm._t("footer")],
            2
          )
        : _vm._e()
    ],
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
    require("vue-hot-reload-api")      .rerender("data-v-8299dec8", esExports)
  }
}

/***/ })
/******/ ]);
});