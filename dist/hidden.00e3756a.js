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
})({"scripts/hidden.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var body = document.querySelector('body');
var header = document.querySelector('.hdr_cnt');
var logo = document.querySelector('.hdr_logo-bm');
var hamburger = document.querySelector('.btn-hmb');
var mobileNav = document.querySelector('.hdr_mobile-nav-ct');
var carouselBtns = document.querySelectorAll('.crsl-btn');
var carouselCt = document.querySelector('.crsl-btns-ct');
var carouselCnt = document.querySelectorAll('.feat_dynamic');
var carouselImgs = document.querySelectorAll('.feat_illustration');
var faqCt = document.querySelector('.faq_qstns-ct');

var classList = function classList(el, act, val) {
  return el.classList[act](val);
};

var viewport = function viewport() {
  return window.innerWidth;
};

window.addEventListener('resize', function () {
  return console.log(viewport());
}); // Carousel

var carouselMethods = {
  simple: function simple() {
    var cntPm = document.querySelectorAll('.feat_pm');
    isVisible(cntPm);
  },
  speedy: function speedy() {
    var cntSd = document.querySelectorAll('.feat_sd');
    isVisible(cntSd);
  },
  easy: function easy() {
    var cntTr = document.querySelectorAll('.feat_tr');
    isVisible(cntTr);
  }
};

var loop = function loop(list, action) {
  var _iterator = _createForOfIteratorHelper(list),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var el = _step.value;
      classList(el, action, 'hidden');
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

function isVisible(els) {
  if (classList(els[0], 'contains', 'hidden')) {
    var _iterator2 = _createForOfIteratorHelper(carouselImgs),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var img = _step2.value;
        classList(img, 'add', 'hidden');
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    var _iterator3 = _createForOfIteratorHelper(carouselCnt),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var cnt = _step3.value;
        classList(cnt, 'add', 'hidden');
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    var _iterator4 = _createForOfIteratorHelper(els),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _cnt = _step4.value;
        classList(_cnt, 'remove', 'hidden');
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
}

carouselCt.addEventListener('click', function (e) {
  var target = e.target;

  if (target.matches('.crsl-btn')) {
    var _iterator5 = _createForOfIteratorHelper(carouselBtns),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var btn = _step5.value;
        classList(btn, 'remove', 'active');
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    classList(target, 'add', 'active');
    carouselMethods[target.id]();
  }
}); // Nav

header.addEventListener('click', function (e) {
  var target = e.target;

  if (viewport() < 879) {
    if (target.matches('.hamburger-btn') || target.matches('.btn-hmb')) {
      classList(header, 'add', 'nav-open');
      classList(body, 'add', 'overflow');
    } else if (target.matches('.close-btn') || target.matches('.icn-close')) {
      classList(header, 'remove', 'nav-open');
      classList(body, 'remove', 'overflow');
    }
  }
}); // FAQ

faqCt.addEventListener('click', function (e) {
  var target = e.target;

  if (target.matches('.faq_btn')) {
    var arrow = target.children[target.children.length - 1];
    arrow.src.includes('56d7c493') ? arrow.src = '/icon-arrow-close.91ded9a2.svg' : arrow.src = '/icon-arrow.56d7c493.svg';
    classList(arrow, 'toggle', 'arrow-down');
    classList(target.nextElementSibling, 'toggle', 'hidden');
  }
}); // TODO:
//    Carousel btns:
//       don't need obj methods | use class for speedy, easy + simply vs id
//       isVisible ran with node list of that class + create arr from it removes 1st el (btn)
//       rest is same
//    Modules - import arrow imgs
//    Add event listeners for FAQ content - longer conditional but traverse (closest()) to nearest btn parent to determine arrow
//    Re-factor - sep func to run for...of loops (use params for diff)
//    Match viewport size to CSS breakpoints
//    const domSelect = el => document.querySelector(el)
//    const domSelectAll = el => document.querySelectorAll(el)
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49473" + '/');

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
      }); // Enable HMR for CSS by default.

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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/hidden.js"], null)
//# sourceMappingURL=/hidden.00e3756a.js.map