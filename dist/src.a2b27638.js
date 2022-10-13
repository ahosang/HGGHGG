// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/utils/createModal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createModal = createModal;
function createModal(modalTemplate) {
  console.log("createModal");
  var modalEl = document.createElement("div");
  modalEl.setAttribute("class", "modal__layout");
  modalEl.innerHTML = modalTemplate();
  document.querySelector("body").prepend(modalEl);
  var modalCloseEl = document.querySelector(".modal__close");
  modalCloseEl.addEventListener("click", function () {
    document.querySelector("body").removeChild(modalEl);
  });
}
},{}],"src/utils/loginCheck.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginCheck = loginCheck;
function loginCheck() {
  var isLogin = true;
  if (isLogin) {
    document.querySelector('#logoutBox').classList.add("hidden");
    document.querySelector('#loginBox').classList.remove("hidden");
  } else {
    document.querySelector('#loginBox').classList.add("hidden");
    document.querySelector('#logoutBox').classList.remove("hidden");
  }
}
},{}],"src/assets/close.png":[function(require,module,exports) {
module.exports = "/close.c1d859ca.png";
},{}],"src/template/loginModalTemplate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginModalTemplate = loginModalTemplate;
var _close = _interopRequireDefault(require("../assets/close.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function loginModalTemplate() {
  return "<article id=\"modalLogin\">\n    <div class=\"modal__close\">\n        <img src=".concat(_close.default, " alt=\"close_icon_logo\"/>\n    </div>\n    <form action=\"#\" accept-charset=\"utf-8\" name=\"login\" method=\"post\">\n        <div class=\"login__form\">\n            <h2 class=\"login__title\">\uD568\uAED8, \uD55C\uB07C</h2>\n            <div class=\"login__input\">\n                <div><h3>\uC544\uC774\uB514</h3><input type=\"text\" name=\"username\" ></div>\n                <div><h3>\uBE44\uBC00\uBC88\uD638</h3><input type=\"password\" name=\"password\" ></div>\n            </div>\n            <div class=\"btn\">\n                <input type=\"submit\" class=\"myBtn\" value=\"\uB85C\uADF8\uC778\">\n                <input type=\"button\" class=\"myBtn\" value=\"\uD68C\uC6D0\uAC00\uC785\">\n            </div>\n        </div>\n    </form>\n</article>\n    ");
}
},{"../assets/close.png":"src/assets/close.png"}],"src/template/modalPostTemplate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalPostTemplate = modalPostTemplate;
var _close = _interopRequireDefault(require("../assets/close.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function modalPostTemplate() {
  return "<article id=\"modalPost\">\n    <div class=\"modal__close\">\n        <img\n        width=\"60px\"\n        height=\"60px\"\n        src=".concat(_close.default, "\n        alt=\"close_icon_logo\"\n        />\n    </div>\n    \n    <form action=\"#\" accept-charset=\"utf-8\" name=\"post\" method=\"post\">\n        <div class=\"container__post\">\n            <div id=\"title__post\"><input type=\"text\" name=\"title\" placeholder=\"\uC81C  \uBAA9\"></div>\n            <div id=\"elements__post\">\n                <div><h3>\uC7A5 \uC18C</h3><input type=\"text\" name=\"palce\" placeholder=\"\uBE44\uC5B4 \uC788\uC74C\"></div>\n                <div><h3>\uB0A0 \uC9DC</h3><input type=\"date\" name=\"date\" placeholder=\"\uBE44\uC5B4 \uC788\uC74C\" id=\"input_date\"></div>\n                <div><h3>\uBA54 \uB274</h3><input type=\"text\" name=\"menu\" placeholder=\"\uBE44\uC5B4 \uC788\uC74C\"></div>\n                <div><h3>\uC608\uC0C1\uBE44\uC6A9</h3><input type=\"text\" name=\"price\" placeholder=\"\uBE44\uC5B4 \uC788\uC74C\"></div>\n                <div><h3>\uD76C\uB9DD\uC778\uC6D0</h3><input type=\"text\" name=\"how_many\" placeholder=\"\uBE44\uC5B4 \uC788\uC74C\"></div>\n            </div>\n            <div id=\"image__post\">\n                <div class=\"picture\">\n                    <h4>\uC0AC\uC9C4\uC744 \uB4F1\uB85D\uD558\uC138\uC694</h4>\n                </div>\n                <button>\uCEF4\uD4E8\uD130\uC5D0\uC11C \uC120\uD0DD</button>\n            </div>\n            <div id=\"content__post\">\n                <textarea name=\"content\" id=\"content\" rows=\"10\" placeholder=\"\uAC04\uB2E8\uD558\uAC8C \uBAA8\uC784\uC744 \uC18C\uAC1C\uD574\uC8FC\uC138\uC694!\"></textarea>\n            </div>\n        </div>\n        <button>\uC791\uC131\uC644\uB8CC</button>\n    </form>\n    <script>\n        let curDate = new Date().toISOString().substring(0,10)\n        document.getElementById(\"input_date\").setAttribute(\"min\",curDate)\n    </script>\n  </article>");
}
},{"../assets/close.png":"src/assets/close.png"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _createModal = require("./utils/createModal.js");
var _loginCheck = require("./utils/loginCheck.js");
var _loginModalTemplate = require("./template/loginModalTemplate.js");
var _modalPostTemplate = require("./template/modalPostTemplate.js");
console.log("main");
(0, _loginCheck.loginCheck)();
document.querySelectorAll('#add_post_btn')[0].addEventListener('click', function () {
  return (0, _createModal.createModal)(_modalPostTemplate.modalPostTemplate);
});
document.querySelectorAll('#add_post_btn')[1].addEventListener('click', function () {
  return (0, _createModal.createModal)(_modalPostTemplate.modalPostTemplate);
});
document.querySelector('#header_login').addEventListener('click', function () {
  return (0, _createModal.createModal)(_loginModalTemplate.loginModalTemplate);
});
document.querySelector('#header_mypage').addEventListener('click', goToMyPage);
function goToMyPage() {
  console.log("goToMyPage");
  location.href = '../mypage/myPageTemplate.html';
}
},{"./utils/createModal.js":"src/utils/createModal.js","./utils/loginCheck.js":"src/utils/loginCheck.js","./template/loginModalTemplate.js":"src/template/loginModalTemplate.js","./template/modalPostTemplate.js":"src/template/modalPostTemplate.js"}],"C:/Users/ahosang/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49944" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["C:/Users/ahosang/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map