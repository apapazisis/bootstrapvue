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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
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
/* 2 */
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

var listToStyles = __webpack_require__(28)

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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_button_close_vue__ = __webpack_require__(29);
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
        getClasses() {
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
/* 4 */
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
//
//
//
//


const props = Object.assign({}, {
    items: {
        type: Array,
        default: null
    }
});
/* harmony export (immutable) */ __webpack_exports__["b"] = props;


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'breadcrumb',
    props,
    methods: {
        binds(isActive) {
            let binds = {};

            if (isActive) {
                binds = Object.assign(binds, { 'aria-current': 'page' });
            }

            return binds;
        }
    }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__ = __webpack_require__(8);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_40f22148_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__ = __webpack_require__(36);
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
/* 8 */
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
    id: {
        type: String,
        default: ''
    },
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
        default: ''
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
};
/* harmony export (immutable) */ __webpack_exports__["b"] = props;


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'btn',
    props,
    methods: {
        getClasses() {
            return {
                [`btn-${this.variant}`]: Boolean(this.variant),
                [`btn-${this.size}`]: Boolean(this.size),
                ['btn-block']: this.block,
                ['disabled']: this.disabled,
                ['active']: this.active
            };
        },
        binds() {
            let binds = {};

            if (this.disabled) {
                binds = Object.assign(binds, { 'aria-disabled': 'true' });
            }

            if (this.active) {
                binds = Object.assign(binds, { 'aria-pressed': 'true' });
            }

            return binds;
        },
        clicked() {
            this.$emit('click');
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


const props = Object.assign({}, {
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
});
/* harmony export (immutable) */ __webpack_exports__["b"] = props;


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'button-group',
    props,
    methods: {
        getClasses() {
            return {
                [`btn-group-${this.size}`]: Boolean(this.size),
                [`btn-group-vertical`]: Boolean(this.vertical),
                [`mr-${this.space}`]: Boolean(this.space)

            };
        }
    }
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


const props = Object.assign({}, {
    label: {
        type: String,
        default: 'toolbar'
    }
});
/* harmony export (immutable) */ __webpack_exports__["b"] = props;


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'button-toolbar',
    props
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_body_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card_image_vue__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__card_header_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_footer_vue__ = __webpack_require__(47);
//
//
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_body_vue__ = __webpack_require__(13);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_body_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3296da3a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_card_body_vue__ = __webpack_require__(42);
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
/* 13 */
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
/* 14 */
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
        getClasses() {
            return {
                'card-img-top': this.imgBottom == false,
                'card-img-bottom': this.imgBottom == true
            };
        }
    }
});

/***/ }),
/* 15 */
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
/* 16 */
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
/* 17 */
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
//

const props = {
    id: {
        type: String,
        default: ''
    },
    interval: {
        type: Number,
        default: 5000
    },
    controls: {
        type: Boolean,
        default: false
    },
    indicators: {
        type: Boolean,
        default: false
    },
    background: {
        type: String,
        default: '#fff'
    }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = props;


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'carousel',
    props,
    data: () => ({
        slides: [],
        slidesLen: 0,
        currentSlide: 0,
        intervalId: null
    }),
    mounted() {
        this.slides = this.$refs.inner.children;
        this.slidesLen = this.slides.length;
        this.assignSlidesIndexes();
        this.start();
    },
    methods: {
        start() {
            this.intervalId = setInterval(() => {
                this.currentSlide += 1;

                if (this.currentSlide > this.slidesLen - 1) {
                    this.currentSlide = 0;
                }
            }, this.interval);
        },
        stop() {
            clearInterval(this.intervalId);
        },
        pause() {},
        setSlide(index) {
            this.stop();
            this.clearActiveClass();
            this.currentSlide = index;
            this.start();
        },
        clearActiveClass() {
            Array.from(this.slides).forEach((el, index) => {
                this.slides[index].classList.remove('active');
            });
        },
        assignSlidesIndexes() {
            this.$children.forEach((slide, idx) => {
                slide.index = idx;
            });
        }
    }

});

/***/ }),
/* 18 */
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

const props = {
    imgSrc: {
        type: String,
        default: ''
    },
    imgAlt: {
        type: String,
        default: ''
    },
    caption: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = props;


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'carousel-slide',
    data: () => ({
        index: null
    }),
    props,
    computed: {
        getActiveSlide() {
            return {
                'active': this.index == this.$parent.currentSlide
            };
        }
    }
});

/***/ }),
/* 19 */
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

const props = {
    id: {
        type: String,
        default: ''
    },
    show: {
        type: Boolean,
        default: false
    }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = props;


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'collapse',
    data: () => ({
        transition: false
    }),
    props,
    computed: {
        getClasses() {
            return {
                'show': this.show && !this.transition,
                'collapse': !this.transition
            };
        }
    },
    methods: {
        onEnter(el) {
            el.style.height = 0;
            el.style.height = el.scrollHeight + 'px';
            this.transition = true;
        },
        onAfterEnter(el) {
            el.style.height = null;
            this.transition = false;
        },
        onLeave(el) {
            el.style.height = 'auto';
            el.style.display = 'block';
            el.style.height = el.getBoundingClientRect().height + 'px';
            this.transition = true;
            el.style.height = 0;
        },
        onAfterLeave(el) {
            el.style.height = null;
            this.transition = false;
        }
    }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button_button_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_click_outside_click_outside__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_click_outside_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__directives_click_outside_click_outside__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const props = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__button_button_vue__["props"], {
    text: {
        type: String,
        default: null
    },
    split: {
        type: Boolean,
        default: false
    },
    direction: {
        type: String,
        default: null
    },
    align: {
        type: String,
        default: null
    }
});
/* harmony export (immutable) */ __webpack_exports__["b"] = props;


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'dropdown',
    data: () => ({
        show: false
    }),
    props,
    components: {
        bvButton: __WEBPACK_IMPORTED_MODULE_0__button_button_vue__["default"]
    },
    directives: {
        ClickOutside: __WEBPACK_IMPORTED_MODULE_1__directives_click_outside_click_outside__["ClickOutside"]
    },
    computed: {
        bindAriaExpanded() {
            if (this.show) {
                return { 'aria-expanded': 'true' };
            }
            return { 'aria-expanded': 'false' };
        },
        getClasses() {
            return {
                [`show`]: this.show,
                [`drop${this.direction}`]: Boolean(this.direction)
            };
        },
        getDropdownClasses() {
            return {
                [`show`]: this.show,
                [`dropdown-menu-${this.align}`]: Boolean(this.align)
            };
        }
    },
    methods: {
        expandMenu() {
            this.show = !this.show;
        },
        closeMenu() {
            this.show = false;
        }
    }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'dropdown-item'
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'dropdown-divider'
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _alert = __webpack_require__(25);

var _alert2 = _interopRequireDefault(_alert);

var _badge = __webpack_require__(32);

var _badge2 = _interopRequireDefault(_badge);

var _breadcrumb = __webpack_require__(34);

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _button = __webpack_require__(7);

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = __webpack_require__(37);

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _buttonToolbar = __webpack_require__(39);

var _buttonToolbar2 = _interopRequireDefault(_buttonToolbar);

var _card = __webpack_require__(41);

var _card2 = _interopRequireDefault(_card);

var _cardBody = __webpack_require__(12);

var _cardBody2 = _interopRequireDefault(_cardBody);

var _carousel = __webpack_require__(50);

var _carousel2 = _interopRequireDefault(_carousel);

var _carouselSlide = __webpack_require__(52);

var _carouselSlide2 = _interopRequireDefault(_carouselSlide);

var _collapse = __webpack_require__(56);

var _collapse2 = _interopRequireDefault(_collapse);

var _dropdown = __webpack_require__(58);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _dropdownItem = __webpack_require__(61);

var _dropdownItem2 = _interopRequireDefault(_dropdownItem);

var _dropdownDivider = __webpack_require__(63);

var _dropdownDivider2 = _interopRequireDefault(_dropdownDivider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BootstrapVue = {
    'bvAlert': _alert2.default,
    'bvBadge': _badge2.default,
    'bvBreadcrumb': _breadcrumb2.default,
    'bvButton': _button2.default,
    'bvButtonGroup': _buttonGroup2.default,
    'bvButtonToolbar': _buttonToolbar2.default,
    'bvCard': _card2.default,
    'bvCardBody': _cardBody2.default,
    'bvCarousel': _carousel2.default,
    'bvCarouselSlide': _carouselSlide2.default,
    'bvCollapse': _collapse2.default,
    'bvDropdown': _dropdown2.default,
    'bvDropdownItem': _dropdownItem2.default,
    'bvDropdownDivider': _dropdownDivider2.default
};

module.exports = BootstrapVue;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alert_vue__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alert_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a225bdc8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_alert_vue__ = __webpack_require__(31);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(26)
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("58b921ce", content, false);
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.fade-enter-active, .fade-leave-active {\n    transition: opacity 0.25s ease-out;\n}\n.fade-enter, .fade-leave-to {\n    opacity: 0;\n}\n", ""]);

// exports


/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_close_vue__ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_close_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_54a35e72_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_close_vue__ = __webpack_require__(30);
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
/* 30 */
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
/* 31 */
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
            class: [_vm.getClasses()],
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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_badge_vue__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_badge_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ccddd6a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_badge_vue__ = __webpack_require__(33);
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
/* 33 */
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
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue__ = __webpack_require__(6);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_537795bc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_breadcrumb_vue__ = __webpack_require__(35);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_537795bc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_breadcrumb_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\breadcrumb\\breadcrumb.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-537795bc", Component.options)
  } else {
    hotAPI.reload("data-v-537795bc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 35 */
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
            _vm.binds(item.active),
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
    require("vue-hot-reload-api")      .rerender("data-v-537795bc", esExports)
  }
}

/***/ }),
/* 36 */
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
            class: [_vm.getClasses()],
            attrs: { id: _vm.id, type: "button" },
            on: { click: _vm.clicked }
          },
          "button",
          [{ disabled: _vm.disabled }, _vm.binds()],
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
              class: [_vm.getClasses()],
              attrs: { id: _vm.id, href: _vm.href, role: "button" },
              on: { click: _vm.clicked }
            },
            "a",
            [_vm.binds()],
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
                class: [_vm.getClasses()],
                attrs: { id: _vm.id, type: "reset" },
                on: { click: _vm.clicked }
              },
              "input",
              [{ value: _vm.value }, _vm.binds()],
              false
            )
          )
        : _vm.type == "submit"
          ? _c(
              "input",
              _vm._b(
                {
                  staticClass: "btn",
                  class: [_vm.getClasses()],
                  attrs: { id: _vm.id, type: "submit" },
                  on: { click: _vm.clicked }
                },
                "input",
                [{ value: _vm.value }, _vm.binds()],
                false
              )
            )
          : _vm.type == "ibutton"
            ? _c(
                "input",
                _vm._b(
                  {
                    staticClass: "btn",
                    class: [_vm.getClasses()],
                    attrs: { id: _vm.id, type: "button" },
                    on: { click: _vm.clicked }
                  },
                  "input",
                  [{ value: _vm.value }, _vm.binds()],
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
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_group_vue__ = __webpack_require__(9);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_group_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f64a55c8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_group_vue__ = __webpack_require__(38);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f64a55c8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_group_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\button-group\\button-group.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f64a55c8", Component.options)
  } else {
    hotAPI.reload("data-v-f64a55c8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 38 */
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
      class: [_vm.getClasses()],
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
    require("vue-hot-reload-api")      .rerender("data-v-f64a55c8", esExports)
  }
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_toolbar_vue__ = __webpack_require__(10);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_toolbar_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac6378c8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_toolbar_vue__ = __webpack_require__(40);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ac6378c8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_toolbar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\button-toolbar\\button-toolbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ac6378c8", Component.options)
  } else {
    hotAPI.reload("data-v-ac6378c8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 40 */
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
    require("vue-hot-reload-api")      .rerender("data-v-ac6378c8", esExports)
  }
}

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_vue__ = __webpack_require__(11);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8299dec8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_card_vue__ = __webpack_require__(49);
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
/* 42 */
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
          _vm.titleTag == "h1" && _vm.title != ""
            ? _c("h1", { staticClass: "card-title" }, [
                _vm._v(_vm._s(_vm.title))
              ])
            : _vm.titleTag == "h2" && _vm.title != ""
              ? _c("h2", { staticClass: "card-title" }, [
                  _vm._v(_vm._s(_vm.title))
                ])
              : _vm.titleTag == "h3" && _vm.title != ""
                ? _c("h3", { staticClass: "card-title" }, [
                    _vm._v(_vm._s(_vm.title))
                  ])
                : _vm.titleTag == "h4" && _vm.title != ""
                  ? _c("h4", { staticClass: "card-title" }, [
                      _vm._v(_vm._s(_vm.title))
                    ])
                  : _vm.titleTag == "h5" && _vm.title != ""
                    ? _c("h5", { staticClass: "card-title" }, [
                        _vm._v(_vm._s(_vm.title))
                      ])
                    : _vm.titleTag == "h6" && _vm.title != ""
                      ? _c("h6", { staticClass: "card-title" }, [
                          _vm._v(_vm._s(_vm.title))
                        ])
                      : _vm._e(),
          _vm._v(" "),
          _vm.subtitleTag == "h1" && _vm.subtitle != ""
            ? _c("h1", { staticClass: "card-subtitle" }, [
                _vm._v(_vm._s(_vm.subtitle))
              ])
            : _vm.subtitleTag == "h2" && _vm.subtitle != ""
              ? _c("h2", { staticClass: "card-tisubtitletle" }, [
                  _vm._v(_vm._s(_vm.subtitle))
                ])
              : _vm.subtitleTag == "h3" && _vm.subtitle != ""
                ? _c("h3", { staticClass: "card-subtitle" }, [
                    _vm._v(_vm._s(_vm.subtitle))
                  ])
                : _vm.subtitleTag == "h4" && _vm.subtitle != ""
                  ? _c("h4", { staticClass: "card-subtitle" }, [
                      _vm._v(_vm._s(_vm.subtitle))
                    ])
                  : _vm.subtitleTag == "h5" && _vm.subtitle != ""
                    ? _c("h5", { staticClass: "card-subtitle" }, [
                        _vm._v(_vm._s(_vm.subtitle))
                      ])
                    : _vm.subtitleTag == "h6" && _vm.subtitle != ""
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
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_image_vue__ = __webpack_require__(14);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_image_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7376e3ea_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_card_image_vue__ = __webpack_require__(44);
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
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("img", {
    class: _vm.getClasses(),
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
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_header_vue__ = __webpack_require__(15);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_header_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c38efe4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_card_header_vue__ = __webpack_require__(46);
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
/* 46 */
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
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_footer_vue__ = __webpack_require__(16);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_card_footer_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ae9db7c8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_card_footer_vue__ = __webpack_require__(48);
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
/* 48 */
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
/* 49 */
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

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_carousel_vue__ = __webpack_require__(17);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_carousel_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4eff7c9c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_carousel_vue__ = __webpack_require__(51);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_carousel_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4eff7c9c_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_carousel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\carousel\\carousel.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4eff7c9c", Component.options)
  } else {
    hotAPI.reload("data-v-4eff7c9c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "carousel slide",
      attrs: { id: _vm.id, "data-ride": "carousel" }
    },
    [
      _vm.indicators
        ? _c(
            "ol",
            { staticClass: "carousel-indicators" },
            _vm._l(_vm.slidesLen, function(id, index) {
              return _c("li", {
                key: index,
                class: { active: index == _vm.currentSlide },
                attrs: { "data-target": "#" },
                on: {
                  click: function($event) {
                    _vm.setSlide(index)
                  }
                }
              })
            })
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { ref: "inner", staticClass: "carousel-inner" },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _vm.controls
        ? _c(
            "a",
            {
              staticClass: "carousel-control-prev",
              attrs: { href: "#", role: "button", "data-slide": "prev" }
            },
            [
              _c("span", {
                staticClass: "carousel-control-prev-icon",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "sr-only" }, [_vm._v("Previous")])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.controls
        ? _c(
            "a",
            {
              staticClass: "carousel-control-next",
              attrs: { href: "#", role: "button", "data-slide": "next" }
            },
            [
              _c("span", {
                staticClass: "carousel-control-next-icon",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "sr-only" }, [_vm._v("Next")])
            ]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4eff7c9c", esExports)
  }
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_carousel_slide_vue__ = __webpack_require__(18);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_carousel_slide_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ebe6d80_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_carousel_slide_vue__ = __webpack_require__(55);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(53)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_carousel_slide_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ebe6d80_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_carousel_slide_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\carousel\\carousel-slide.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ebe6d80", Component.options)
  } else {
    hotAPI.reload("data-v-7ebe6d80", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("12d975af", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ebe6d80\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./carousel-slide.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ebe6d80\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./carousel-slide.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.fade-enter-active {\n    animation: slideIn .5s;\n}\n.fade-leave-active {\n    animation: slideOut .5s;\n}\n.fade-leave-to {\n    position: absolute;\n    top: 0;\n}\n@keyframes slideIn {\nfrom { transform: translateX(100%);\n}\nto { transform: translateX(0);\n}\n}\n@keyframes slideOut {\nfrom { transform: translateX(0);\n}\nto { transform: translateX(-100%);\n}\n}\n\n", ""]);

// exports


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade", mode: "out-in" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: this.index == this.$parent.currentSlide,
            expression: "this.index == this.$parent.currentSlide"
          }
        ],
        staticClass: "carousel-item",
        class: _vm.getActiveSlide
      },
      [
        _c("img", {
          staticClass: "d-block w-100",
          attrs: { src: _vm.imgSrc, alt: _vm.imgAlt }
        }),
        _vm._v(" "),
        _vm.caption != "" || _vm.text != ""
          ? _c("div", { staticClass: "carousel-caption d-none d-md-block" }, [
              _vm.caption != ""
                ? _c("h5", [_vm._v(_vm._s(_vm.caption))])
                : _vm._e(),
              _vm._v(" "),
              _vm.text != "" ? _c("p", [_vm._v(_vm._s(_vm.text))]) : _vm._e()
            ])
          : _vm._e()
      ]
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
    require("vue-hot-reload-api")      .rerender("data-v-7ebe6d80", esExports)
  }
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_vue__ = __webpack_require__(19);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a3671988_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_collapse_vue__ = __webpack_require__(57);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a3671988_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_collapse_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\collapse\\collapse.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a3671988", Component.options)
  } else {
    hotAPI.reload("data-v-a3671988", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: {
        "enter-active-class": "collapsing",
        "leave-active-class": "collapsing"
      },
      on: {
        enter: _vm.onEnter,
        "after-enter": _vm.onAfterEnter,
        leave: _vm.onLeave,
        "after-leave": _vm.onAfterLeave
      }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.show,
              expression: "show"
            }
          ],
          class: _vm.getClasses,
          attrs: { id: _vm.id }
        },
        [_c("div", { staticClass: "card card-body" }, [_vm._t("default")], 2)]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a3671988", esExports)
  }
}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__ = __webpack_require__(20);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "props", function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_541463bc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_vue__ = __webpack_require__(60);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_541463bc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\dropdown\\dropdown.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-541463bc", Component.options)
  } else {
    hotAPI.reload("data-v-541463bc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ClickOutside = exports.ClickOutside = {
    bind: function bind(el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== 'function') {
            var compName = vNode.context.name;
            var warn = '[Vue-click-outside:] provided expression \'' + binding.expression + '\' is not a function, but has to be';
            if (compName) {
                warn += 'Found in component \'' + compName + '\'';
            }

            console.warn(warn);
        }
        // Define Handler and cache it on the element
        var bubble = binding.modifiers.bubble;
        var handler = function handler(e) {
            if (bubble || !el.contains(e.target) && el !== e.target) {
                binding.value(e);
            }
        };
        el.__vueClickOutside__ = handler;

        // add Event Listeners
        document.addEventListener('click', handler);
    },
    unbind: function unbind(el, binding) {
        // Remove Event Listeners
        document.removeEventListener('click', el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
    }
};

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "click-outside",
          rawName: "v-click-outside",
          value: _vm.closeMenu,
          expression: "closeMenu"
        }
      ],
      staticClass: "dropdown btn-group",
      class: _vm.getClasses
    },
    [
      _vm.split
        ? _c("bv-button", {
            attrs: { size: _vm.size, variant: _vm.variant },
            domProps: { textContent: _vm._s(_vm.text) }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "bv-button",
        _vm._b(
          {
            staticClass: "dropdown-toggle",
            class: { "dropdown-toggle-split": _vm.split },
            attrs: {
              size: _vm.size,
              id: _vm.id,
              "data-toggle": "dropdown",
              variant: _vm.variant,
              "aria-haspopup": "true"
            },
            on: { click: _vm.expandMenu }
          },
          "bv-button",
          _vm.bindAriaExpanded,
          false
        ),
        [
          _vm.split
            ? _c("span", { staticClass: "sr-only" }, [
                _vm._v("Toggle Dropdown")
              ])
            : [_vm._v(_vm._s(_vm.text))]
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "dropdown-menu",
          class: _vm.getDropdownClasses,
          attrs: { "aria-labelledby": _vm.id }
        },
        [_vm._t("default")],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-541463bc", esExports)
  }
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_item_vue__ = __webpack_require__(21);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f7d54b4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_item_vue__ = __webpack_require__(62);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_item_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f7d54b4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\dropdown\\dropdown-item.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f7d54b4", Component.options)
  } else {
    hotAPI.reload("data-v-3f7d54b4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    { staticClass: "dropdown-item", attrs: { href: "#" } },
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
    require("vue-hot-reload-api")      .rerender("data-v-3f7d54b4", esExports)
  }
}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_divider_vue__ = __webpack_require__(22);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3697f008_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_divider_vue__ = __webpack_require__(64);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_divider_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3697f008_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_divider_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\dropdown\\dropdown-divider.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3697f008", Component.options)
  } else {
    hotAPI.reload("data-v-3697f008", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "dropdown-divider" })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3697f008", esExports)
  }
}

/***/ })
/******/ ]);
});