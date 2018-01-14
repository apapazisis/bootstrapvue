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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'alert',
    props: {
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
    },
    data: () => ({
        mutateShow: false
    }),
    mounted() {
        this.mutateShow = this.show;
    },
    watch: {
        mutateShow(val) {
            if (val && this.timeout) {
                setTimeout(() => {
                    this.mutateShow = false;
                }, this.timeout);
            }
        }
    },
    methods: {
        getClass(variant) {
            return {
                'alert-primary': variant == 'primary',
                'alert-secondary': variant == 'secondary',
                'alert-success': variant == 'success',
                'alert-danger': variant == 'danger',
                'alert-warning': variant == 'warning',
                'alert-info': variant == 'info',
                'alert-light': variant == 'light',
                'alert-dark': variant == 'dark'
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
/* 6 */
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
/* 7 */
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

        if (props.subTitle != '') {
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _alert = __webpack_require__(10);

var _alert2 = _interopRequireDefault(_alert);

var _badge = __webpack_require__(17);

var _badge2 = _interopRequireDefault(_badge);

var _breadcrumb = __webpack_require__(19);

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _button = __webpack_require__(21);

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = __webpack_require__(23);

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _buttonToolbar = __webpack_require__(25);

var _buttonToolbar2 = _interopRequireDefault(_buttonToolbar);

var _card = __webpack_require__(27);

var _card2 = _interopRequireDefault(_card);

var _cardBody = __webpack_require__(7);

var _cardBody2 = _interopRequireDefault(_cardBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BootstrapVue = {
    'bvAlert': _alert2.default,
    'bvBadge': _badge2.default,
    'bvBreadcrumb': _breadcrumb2.default,
    'bvButton': _button2.default,
    'bvButtonGroup': _buttonGroup2.default,
    'bvButtonToolbar': _buttonToolbar2.default,
    'bvCard': _card2.default,
    'bvCardBody': _cardBody2.default
};

module.exports = BootstrapVue;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alert_vue__ = __webpack_require__(1);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47f5519c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_alert_vue__ = __webpack_require__(16);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(11)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47f5519c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_alert_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\alert.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47f5519c", Component.options)
  } else {
    hotAPI.reload("data-v-47f5519c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(14)("4f9f4883", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47f5519c\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./alert.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47f5519c\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./alert.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(undefined);
// imports


// module
exports.push([module.i, "\n.fade-enter-active, .fade-leave-active {\n    transition: opacity 0.25s ease-out;\n}\n.fade-enter, .fade-leave-to {\n    opacity: 0;\n}\n", ""]);

// exports


/***/ }),
/* 13 */
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
/* 14 */
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

var listToStyles = __webpack_require__(15)

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
/* 15 */
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
/* 16 */
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
            class: _vm.getClass(_vm.variant),
            attrs: { role: "alert" }
          },
          [
            _vm.dismiss
              ? _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "alert",
                      "aria-label": "Close"
                    },
                    on: {
                      click: function($event) {
                        _vm.mutateShow = false
                      }
                    }
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×")
                    ])
                  ]
                )
              : _vm._e(),
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
    require("vue-hot-reload-api")      .rerender("data-v-47f5519c", esExports)
  }
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_badge_vue__ = __webpack_require__(2);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1d0de863_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_badge_vue__ = __webpack_require__(18);
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
/* 18 */
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue__ = __webpack_require__(3);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_22db0e73_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_breadcrumb_vue__ = __webpack_require__(20);
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
/* 20 */
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__ = __webpack_require__(4);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5c414222_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__ = __webpack_require__(22);
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
/* 22 */
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_group_vue__ = __webpack_require__(5);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_675b17d8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_group_vue__ = __webpack_require__(24);
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
/* 24 */
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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_toolbar_vue__ = __webpack_require__(6);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7f737fd0_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_toolbar_vue__ = __webpack_require__(26);
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
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.props = undefined;

var _cardBody = __webpack_require__(7);

var _cardBody2 = _interopRequireDefault(_cardBody);

var _cardImage = __webpack_require__(28);

var _cardImage2 = _interopRequireDefault(_cardImage);

var _cardHeader = __webpack_require__(29);

var _cardHeader2 = _interopRequireDefault(_cardHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = exports.props = Object.assign({}, _cardBody.props, _cardImage.props, _cardHeader.props);

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

        if (props.imgSrc != '' && props.bottom) {
            components.push(h(_cardImage2.default, { props: props }));
        }

        return h('div', {
            staticClass: 'card'
        }, components);
    }
};

/***/ }),
/* 28 */
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
/* 29 */
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
    }
};

exports.default = {
    name: 'card-header',
    functional: true,
    props: props,
    render: function render(h, _ref) {
        var props = _ref.props;


        return h(props.headerTag, {
            staticClass: 'card-header'
        });
    }
};

/***/ })
/******/ ]);
});