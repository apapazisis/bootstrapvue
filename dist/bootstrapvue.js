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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_button_close_vue__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//



const props = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__button_button_close_vue__["b" /* props */], {
    show: {
        type: Boolean,
        default: false
    },
    variant: {
        type: String,
        default: 'primary'
    },
    timeout: {
        type: Number,
        default: 0
    }
});
/* harmony export (immutable) */ __webpack_exports__["b"] = props;


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'alert',
    props,
    components: {
        bvCloseButton: __WEBPACK_IMPORTED_MODULE_0__button_button_close_vue__["a" /* default */]
    },
    data: () => ({
        mutateShow: false
    }),
    mounted() {
        this.mutateShow = this.show;
    },
    watch: {
        show() {
            this.mutateShow = this.show;
        },
        mutateShow(val) {
            if (val && this.timeout) {
                setTimeout(() => {
                    this.mutateShow = false;
                }, this.timeout * 1000);
            }
        }
    },
    methods: {
        getVariant() {
            return {
                [`alert-${this.variant}`]: Boolean(this.variant)
            };
        },
        closeAlert(eventValue) {
            this.mutateShow = eventValue;
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

const props = {
    ariaLabel: {
        type: String,
        default: 'Close'
    },
    dismiss: {
        type: Boolean,
        default: false
    }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = props;


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'button-close',
    props,
    methods: {
        closeAlert() {
            this.$emit('closeAlert', false);
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

const props = {
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
    },
    click: {
        type: Function,
        required: true
    }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = props;


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'btn',
    props,
    methods: {
        getVariant() {
            return {
                [`btn-${this.variant}`]: Boolean(this.variant)
            };
        },
        getSize() {
            return {
                [`btn-${this.size}`]: Boolean(this.size)
            };
        },
        getBlock() {
            return {
                ['btn-block']: this.block
            };
        },
        getDisabled() {
            return {
                ['disabled']: this.disabled
            };
        },
        getActive() {
            return {
                ['active']: this.active
            };
        },
        bindDisabled() {
            if (this.disabled) {
                return {
                    'aria-disabled': 'true'
                };
            }
        },
        bindActive() {
            if (this.active) {
                return {
                    'aria-pressed': 'true'
                };
            }
        },
        clicked() {
            this.$emit('click');
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
//
//
//

const props = {
    variant: {
        type: String,
        default: 'primary'
    },
    type: {
        type: String,
        default: 'badge'
    },
    href: {
        type: String,
        default: '#'
    }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = props;


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'badge',
    props,
    methods: {
        getVariant() {
            return {
                [`badge-${this.variant}`]: Boolean(this.variant)
            };
        }
    }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_body_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_image_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_header_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_footer_vue__ = __webpack_require__(32);
//
//
//
//
//
//
//
//
//
//
//






const props = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__card_body_vue__["props"], __WEBPACK_IMPORTED_MODULE_1__card_image_vue__["b" /* props */], __WEBPACK_IMPORTED_MODULE_2__card_header_vue__["b" /* props */], __WEBPACK_IMPORTED_MODULE_3__card_footer_vue__["b" /* props */], {
    styles: {
        type: [String, Object, Array],
        default: null
    }
});
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_body_vue__ = __webpack_require__(7);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_body_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3296da3a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_card_body_vue__ = __webpack_require__(27);
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _alert = __webpack_require__(13);

var _alert2 = _interopRequireDefault(_alert);

var _button = __webpack_require__(22);

var _button2 = _interopRequireDefault(_button);

var _badge = __webpack_require__(24);

var _badge2 = _interopRequireDefault(_badge);

var _card = __webpack_require__(26);

var _card2 = _interopRequireDefault(_card);

var _cardBody = __webpack_require__(6);

var _cardBody2 = _interopRequireDefault(_cardBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BootstrapVue = {
    'bvAlert': _alert2.default,
    'bvButton': _button2.default,
    'bvBadge': _badge2.default,
    'bvCard': _card2.default,
    'bvCardBody': _cardBody2.default
};

module.exports = BootstrapVue;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alert_vue__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alert_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a225bdc8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_alert_vue__ = __webpack_require__(21);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(14)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alert_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a225bdc8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_alert_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\alert\\alert.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a225bdc8", Component.options)
  } else {
    hotAPI.reload("data-v-a225bdc8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(15);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(17)("58b921ce", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a225bdc8\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./alert.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a225bdc8\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./alert.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(undefined);
// imports


// module
exports.push([module.i, "\n.fade-enter-active, .fade-leave-active {\n    transition: opacity 0.25s ease-out;\n}\n.fade-enter, .fade-leave-to {\n    opacity: 0;\n}\n", ""]);

// exports


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(18)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_close_vue__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_close_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54a35e72_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_close_vue__ = __webpack_require__(20);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_close_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54a35e72_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_close_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\button\\button-close.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54a35e72", Component.options)
  } else {
    hotAPI.reload("data-v-54a35e72", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.dismiss
    ? _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "alert",
            "aria-label": _vm.ariaLabel
          },
          on: { click: _vm.closeAlert }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
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
    require("vue-hot-reload-api")      .rerender("data-v-54a35e72", esExports)
  }
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade" } }, [
    _vm.mutateShow
      ? _c(
          "div",
          {
            staticClass: "alert",
            class: [_vm.getVariant()],
            attrs: { role: "alert" }
          },
          [
            _c("bv-close-button", {
              attrs: { dismiss: _vm.dismiss },
              on: {
                closeAlert: function($event) {
                  _vm.closeAlert($event)
                }
              }
            }),
            _vm._v(" "),
            _vm._t("default")
          ],
          2
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a225bdc8", esExports)
  }
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_40f22148_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__ = __webpack_require__(23);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_40f22148_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\button\\button.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40f22148", Component.options)
  } else {
    hotAPI.reload("data-v-40f22148", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 23 */
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
              _vm.getVariant(),
              _vm.getSize(),
              _vm.getBlock(),
              _vm.getActive()
            ],
            attrs: { type: "button" },
            on: { click: _vm.clicked }
          },
          "button",
          [{ disabled: _vm.disabled }, _vm.bindActive()],
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
                _vm.getVariant(),
                _vm.getSize(),
                _vm.getBlock(),
                _vm.getDisabled(),
                _vm.getActive()
              ],
              attrs: { href: _vm.href, role: "button" }
            },
            "a",
            [_vm.bindDisabled(), _vm.bindActive()],
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
                  _vm.getVariant(),
                  _vm.getSize(),
                  _vm.getBlock(),
                  _vm.getDisabled(),
                  _vm.getActive()
                ],
                attrs: { type: "reset" }
              },
              "input",
              [{ value: _vm.value }, _vm.bindActive()],
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
                    _vm.getVariant(),
                    _vm.getSize(),
                    _vm.getBlock(),
                    _vm.getDisabled(),
                    _vm.getActive()
                  ],
                  attrs: { type: "submit" }
                },
                "input",
                [{ value: _vm.value }, _vm.bindActive()],
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
                      _vm.getVariant(),
                      _vm.getSize(),
                      _vm.getBlock(),
                      _vm.getDisabled(),
                      _vm.getActive()
                    ],
                    attrs: { type: "button" }
                  },
                  "input",
                  [{ value: _vm.value }, _vm.bindActive()],
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
    require("vue-hot-reload-api")      .rerender("data-v-40f22148", esExports)
  }
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_badge_vue__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_badge_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ccddd6a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_badge_vue__ = __webpack_require__(25);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ccddd6a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_badge_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\badge\\badge.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ccddd6a", Component.options)
  } else {
    hotAPI.reload("data-v-2ccddd6a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.type == "badge"
    ? _c(
        "span",
        { staticClass: "badge", class: [_vm.getVariant()] },
        [_vm._t("default")],
        2
      )
    : _vm.type == "contextual"
      ? _c(
          "span",
          { staticClass: "badge", class: [_vm.getVariant()] },
          [_vm._t("default")],
          2
        )
      : _vm.type == "pill"
        ? _c(
            "span",
            { staticClass: "badge badge-pill", class: [_vm.getVariant()] },
            [_vm._t("default")],
            2
          )
        : _vm.type == "link"
          ? _c(
              "a",
              {
                staticClass: "badge",
                class: [_vm.getVariant()],
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
    require("vue-hot-reload-api")      .rerender("data-v-2ccddd6a", esExports)
  }
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_vue__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8299dec8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_card_vue__ = __webpack_require__(34);
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
/* 27 */
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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_image_vue__ = __webpack_require__(8);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_image_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7376e3ea_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_card_image_vue__ = __webpack_require__(29);
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
/* 29 */
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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_header_vue__ = __webpack_require__(9);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_header_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c38efe4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_card_header_vue__ = __webpack_require__(31);
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
/* 31 */
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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_footer_vue__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_footer_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ae9db7c8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_card_footer_vue__ = __webpack_require__(33);
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
/* 33 */
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
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card", style: _vm.styles },
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