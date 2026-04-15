"use strict";
(self["chunk_mfe_shell_app"] = self["chunk_mfe_shell_app"] || []).push([["page"], {
"./src/routes/index.css"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1776279673601
        var cssReload = (__webpack_require__("./node_modules/@rspack/core/dist/cssExtractHmr.js")/* .cssReload */.cssReload)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

},
"./src/routes/page.tsx"(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var react_jsx_dev_runtime__rspack_import_0 = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* import */ var react__rspack_import_1 = __webpack_require__("webpack/sharing/consume/default/react/react?9573");
/* import */ var react__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(react__rspack_import_1);
/* import */ var _index_css__rspack_import_2 = __webpack_require__("./src/routes/index.css");
/* import */ var remote_feature_1__rspack_import_3 = __webpack_require__("webpack/container/remote/remote_feature_1");
/* import */ var remote_feature_1__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(remote_feature_1__rspack_import_3);
/* import */ var remote_feature_2__rspack_import_4 = __webpack_require__("webpack/container/remote/remote_feature_2");
/* import */ var remote_feature_2__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(remote_feature_2__rspack_import_4);
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");





var Index = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                children: "Shell App"
            }, void 0, false, {
                fileName: "/Users/jamesontaylor/Development/multi-repo-test/mfe_shell_app/src/routes/page.tsx",
                lineNumber: 8,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react__rspack_import_1.Suspense, {
                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: "Loading Feature 1..."
                    }, void 0, false, {
                        fileName: "/Users/jamesontaylor/Development/multi-repo-test/mfe_shell_app/src/routes/page.tsx",
                        lineNumber: 10,
                        columnNumber: 27
                    }, undefined),
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)((remote_feature_1__rspack_import_3_default()), {}, void 0, false, {
                        fileName: "/Users/jamesontaylor/Development/multi-repo-test/mfe_shell_app/src/routes/page.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, undefined)
                }, void 0, false, {
                    fileName: "/Users/jamesontaylor/Development/multi-repo-test/mfe_shell_app/src/routes/page.tsx",
                    lineNumber: 10,
                    columnNumber: 7
                }, undefined)
            }, void 0, false, {
                fileName: "/Users/jamesontaylor/Development/multi-repo-test/mfe_shell_app/src/routes/page.tsx",
                lineNumber: 9,
                columnNumber: 5
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)(react__rspack_import_1.Suspense, {
                    fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)("div", {
                        children: "Loading Feature 2..."
                    }, void 0, false, {
                        fileName: "/Users/jamesontaylor/Development/multi-repo-test/mfe_shell_app/src/routes/page.tsx",
                        lineNumber: 15,
                        columnNumber: 27
                    }, undefined),
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__rspack_import_0.jsxDEV)((remote_feature_2__rspack_import_4_default()), {}, void 0, false, {
                        fileName: "/Users/jamesontaylor/Development/multi-repo-test/mfe_shell_app/src/routes/page.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, undefined)
                }, void 0, false, {
                    fileName: "/Users/jamesontaylor/Development/multi-repo-test/mfe_shell_app/src/routes/page.tsx",
                    lineNumber: 15,
                    columnNumber: 7
                }, undefined)
            }, void 0, false, {
                fileName: "/Users/jamesontaylor/Development/multi-repo-test/mfe_shell_app/src/routes/page.tsx",
                lineNumber: 14,
                columnNumber: 5
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "/Users/jamesontaylor/Development/multi-repo-test/mfe_shell_app/src/routes/page.tsx",
        lineNumber: 7,
        columnNumber: 3
    }, undefined);
_c = Index;
/* export default */ __webpack_exports__["default"] = (Index);
var _c;
$RefreshReg$(_c, "Index");

function $RefreshSig$() { return $ReactRefreshRuntime$.createSignatureFunctionForTransform() }
function $RefreshReg$(type, id) { $ReactRefreshRuntime$.register(type, module.id + "_" + id) }
Promise.resolve().then(() => { $ReactRefreshRuntime$.refresh(module.id, module.hot) });


},
"./node_modules/@rspack/core/dist/cssExtractHmr.js"(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  cssReload: () => (cssReload),
  normalizeUrl: () => (normalizeUrl)
});
function normalizeUrl(url) {
    let urlString = url.trim();
    if (/^data:/i.test(urlString)) return urlString;
    let protocol = -1 !== urlString.indexOf('//') ? `${urlString.split('//')[0]}//` : '', components = urlString.replace(RegExp(protocol, 'i'), '').split('/'), host = components[0].toLowerCase().replace(/\.$/, '');
    return components[0] = '', protocol + host + components.reduce((accumulator, item)=>{
        switch(item){
            case '..':
                accumulator.pop();
                break;
            case '.':
                break;
            default:
                accumulator.push(item);
        }
        return accumulator;
    }, []).join('/');
}
let srcByModuleId = Object.create(null), noDocument = "u" < typeof document, { forEach: forEach } = Array.prototype;
function noop() {}
function updateCss(el, url) {
    let normalizedUrl;
    if (url) normalizedUrl = url;
    else {
        let href = el.getAttribute('href');
        if (!href) return;
        normalizedUrl = href.split('?')[0];
    }
    if (!isUrlRequest(el.href) || !1 === el.isLoaded || !normalizedUrl || !(normalizedUrl.indexOf('.css') > -1)) return;
    el.visited = !0;
    let newEl = el.cloneNode();
    newEl.isLoaded = !1, newEl.addEventListener('load', ()=>{
        !newEl.isLoaded && (newEl.isLoaded = !0, el.parentNode && el.parentNode.removeChild(el));
    }), newEl.addEventListener('error', ()=>{
        !newEl.isLoaded && (newEl.isLoaded = !0, el.parentNode && el.parentNode.removeChild(el));
    }), newEl.href = `${normalizedUrl}?${Date.now()}`;
    let parent = el.parentNode;
    parent && (el.nextSibling ? parent.insertBefore(newEl, el.nextSibling) : parent.appendChild(newEl));
}
function reloadAll() {
    let elements = document.querySelectorAll('link');
    forEach.call(elements, (el)=>{
        !0 !== el.visited && updateCss(el);
    });
}
function isUrlRequest(url) {
    return !!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url);
}
function cssReload(moduleId, options) {
    var fn;
    let timeout;
    if (noDocument) return console.log('[HMR] No `window.document` found, CSS HMR disabled'), noop;
    let getScriptSrc = function(moduleId) {
        let src = srcByModuleId[moduleId];
        if (!src) {
            if (document.currentScript) ({ src } = document.currentScript);
            else {
                let scripts = document.getElementsByTagName("script"), lastScriptTag = scripts[scripts.length - 1];
                lastScriptTag && ({ src } = lastScriptTag);
            }
            srcByModuleId[moduleId] = src;
        }
        return (fileMap)=>{
            if (!src) return null;
            let splitResult = src.match(/([^\\/]+)\.js$/), filename = splitResult && splitResult[1];
            return filename && fileMap ? fileMap.split(',').map((mapRule)=>{
                let reg = RegExp(`${filename}\\.js$`, 'g');
                return normalizeUrl(src.replace(reg, `${mapRule.replace(/{fileName}/g, filename)}.css`));
            }) : [
                src.replace('.js', '.css')
            ];
        };
    }(moduleId);
    return fn = function() {
        let src = getScriptSrc(options.filename), reloaded = function(src) {
            if (!src) return !1;
            let elements = document.querySelectorAll('link'), loaded = !1;
            return forEach.call(elements, (el)=>{
                var href;
                let ret, normalizedHref;
                if (!el.href) return;
                let url = (href = el.href, ret = '', normalizedHref = normalizeUrl(href), src.some((url)=>{
                    normalizedHref.indexOf(src) > -1 && (ret = url);
                }), ret);
                !isUrlRequest(url) || !0 !== el.visited && url && (updateCss(el, url), loaded = !0);
            }), loaded;
        }(src);
        if (options.locals) {
            console.log('[HMR] Detected local CSS Modules. Reload all CSS'), reloadAll();
            return;
        }
        reloaded ? console.log('[HMR] CSS reload %s', src && src.join(' ')) : (console.log('[HMR] Reload all CSS'), reloadAll());
    }, timeout = 0, function(...args) {
        let self = this;
        clearTimeout(timeout), timeout = setTimeout(function() {
            return fn.apply(self, args);
        }, 50);
    };
}



},

}]);
//# sourceMappingURL=page.js.map