/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js ***!
  \**********************************************************************/
/***/ (() => {

/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */
(function () {
  'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: !0
            } : {
              done: !1,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = !0,
      u = !1;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = !0, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(t, "prototype", {
      writable: !1
    }), e && _setPrototypeOf(t, e);
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
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
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }
  function _wrapRegExp() {
    _wrapRegExp = function (e, r) {
      return new BabelRegExp(e, void 0, r);
    };
    var e = RegExp.prototype,
      r = new WeakMap();
    function BabelRegExp(e, t, p) {
      var o = RegExp(e, t);
      return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype);
    }
    function buildGroups(e, t) {
      var p = r.get(t);
      return Object.keys(p).reduce(function (r, t) {
        var o = p[t];
        if ("number" == typeof o) r[t] = e[o];else {
          for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++;
          r[t] = e[o[i]];
        }
        return r;
      }, Object.create(null));
    }
    return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) {
      var t = e.exec.call(this, r);
      if (t) {
        t.groups = buildGroups(t, this);
        var p = t.indices;
        p && (p.groups = buildGroups(p, this));
      }
      return t;
    }, BabelRegExp.prototype[Symbol.replace] = function (t, p) {
      if ("string" == typeof p) {
        var o = r.get(this);
        return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)(>|$)/g, function (e, r, t) {
          if ("" === t) return e;
          var p = o[r];
          return Array.isArray(p) ? "$" + p.join("$") : "number" == typeof p ? "$" + p : "";
        }));
      }
      if ("function" == typeof p) {
        var i = this;
        return e[Symbol.replace].call(this, t, function () {
          var e = arguments;
          return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e);
        });
      }
      return e[Symbol.replace].call(this, t, p);
    }, _wrapRegExp.apply(this, arguments);
  }

  var noop = function noop() {};
  var _WINDOW = {};
  var _DOCUMENT = {};
  var _MUTATION_OBSERVER = null;
  var _PERFORMANCE = {
    mark: noop,
    measure: noop
  };
  try {
    if (typeof window !== 'undefined') _WINDOW = window;
    if (typeof document !== 'undefined') _DOCUMENT = document;
    if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
    if (typeof performance !== 'undefined') _PERFORMANCE = performance;
  } catch (e) {} // eslint-disable-line no-empty

  var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
  var WINDOW = _WINDOW;
  var DOCUMENT = _DOCUMENT;
  var MUTATION_OBSERVER = _MUTATION_OBSERVER;
  var PERFORMANCE = _PERFORMANCE;
  var IS_BROWSER = !!WINDOW.document;
  var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
  var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

  var _dt;
  var E = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
    _ = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i;
  var q = {
      classic: {
        fa: "solid",
        fas: "solid",
        "fa-solid": "solid",
        far: "regular",
        "fa-regular": "regular",
        fal: "light",
        "fa-light": "light",
        fat: "thin",
        "fa-thin": "thin",
        fab: "brands",
        "fa-brands": "brands"
      },
      duotone: {
        fa: "solid",
        fad: "solid",
        "fa-solid": "solid",
        "fa-duotone": "solid",
        fadr: "regular",
        "fa-regular": "regular",
        fadl: "light",
        "fa-light": "light",
        fadt: "thin",
        "fa-thin": "thin"
      },
      sharp: {
        fa: "solid",
        fass: "solid",
        "fa-solid": "solid",
        fasr: "regular",
        "fa-regular": "regular",
        fasl: "light",
        "fa-light": "light",
        fast: "thin",
        "fa-thin": "thin"
      },
      "sharp-duotone": {
        fa: "solid",
        fasds: "solid",
        "fa-solid": "solid",
        fasdr: "regular",
        "fa-regular": "regular",
        fasdl: "light",
        "fa-light": "light",
        fasdt: "thin",
        "fa-thin": "thin"
      },
      slab: {
        "fa-regular": "regular",
        faslr: "regular"
      },
      "slab-press": {
        "fa-regular": "regular",
        faslpr: "regular"
      },
      thumbprint: {
        "fa-light": "light",
        fatl: "light"
      },
      whiteboard: {
        "fa-semibold": "semibold",
        fawsb: "semibold"
      },
      notdog: {
        "fa-solid": "solid",
        fans: "solid"
      },
      "notdog-duo": {
        "fa-solid": "solid",
        fands: "solid"
      },
      etch: {
        "fa-solid": "solid",
        faes: "solid"
      },
      jelly: {
        "fa-regular": "regular",
        fajr: "regular"
      },
      "jelly-fill": {
        "fa-regular": "regular",
        fajfr: "regular"
      },
      "jelly-duo": {
        "fa-regular": "regular",
        fajdr: "regular"
      },
      chisel: {
        "fa-regular": "regular",
        facr: "regular"
      },
      utility: {
        "fa-semibold": "semibold",
        fausb: "semibold"
      },
      "utility-duo": {
        "fa-semibold": "semibold",
        faudsb: "semibold"
      },
      "utility-fill": {
        "fa-semibold": "semibold",
        faufsb: "semibold"
      }
    },
    H = {
      GROUP: "duotone-group",
      SWAP_OPACITY: "swap-opacity",
      PRIMARY: "primary",
      SECONDARY: "secondary"
    },
    Q = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"];
  var i = "classic",
    t = "duotone",
    d = "sharp",
    l = "sharp-duotone",
    f = "chisel",
    n = "etch",
    h = "jelly",
    o = "jelly-duo",
    u = "jelly-fill",
    g = "notdog",
    s = "notdog-duo",
    y = "slab",
    m = "slab-press",
    e = "thumbprint",
    p = "utility",
    a = "utility-duo",
    w = "utility-fill",
    x = "whiteboard",
    b = "Classic",
    c = "Duotone",
    I = "Sharp",
    F = "Sharp Duotone",
    v = "Chisel",
    S = "Etch",
    A = "Jelly",
    P = "Jelly Duo",
    j = "Jelly Fill",
    B = "Notdog",
    N = "Notdog Duo",
    k = "Slab",
    D = "Slab Press",
    T = "Thumbprint",
    C = "Utility",
    W = "Utility Duo",
    K = "Utility Fill",
    R = "Whiteboard",
    rt = [i, t, d, l, f, n, h, o, u, g, s, y, m, e, p, a, w, x],
    dt = (_dt = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dt, i, b), t, c), d, I), l, F), f, v), n, S), h, A), o, P), u, j), g, B), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_dt, s, N), y, k), m, D), e, T), p, C), a, W), w, K), x, R));
  var gt = {
      classic: {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat"
      },
      duotone: {
        900: "fad",
        400: "fadr",
        300: "fadl",
        100: "fadt"
      },
      sharp: {
        900: "fass",
        400: "fasr",
        300: "fasl",
        100: "fast"
      },
      "sharp-duotone": {
        900: "fasds",
        400: "fasdr",
        300: "fasdl",
        100: "fasdt"
      },
      slab: {
        400: "faslr"
      },
      "slab-press": {
        400: "faslpr"
      },
      whiteboard: {
        600: "fawsb"
      },
      thumbprint: {
        300: "fatl"
      },
      notdog: {
        900: "fans"
      },
      "notdog-duo": {
        900: "fands"
      },
      etch: {
        900: "faes"
      },
      chisel: {
        400: "facr"
      },
      jelly: {
        400: "fajr"
      },
      "jelly-fill": {
        400: "fajfr"
      },
      "jelly-duo": {
        400: "fajdr"
      },
      utility: {
        600: "fausb"
      },
      "utility-duo": {
        600: "faudsb"
      },
      "utility-fill": {
        600: "faufsb"
      }
    };
  var Ct = {
      "Font Awesome 7 Free": {
        900: "fas",
        400: "far"
      },
      "Font Awesome 7 Pro": {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal",
        100: "fat"
      },
      "Font Awesome 7 Brands": {
        400: "fab",
        normal: "fab"
      },
      "Font Awesome 7 Duotone": {
        900: "fad",
        400: "fadr",
        normal: "fadr",
        300: "fadl",
        100: "fadt"
      },
      "Font Awesome 7 Sharp": {
        900: "fass",
        400: "fasr",
        normal: "fasr",
        300: "fasl",
        100: "fast"
      },
      "Font Awesome 7 Sharp Duotone": {
        900: "fasds",
        400: "fasdr",
        normal: "fasdr",
        300: "fasdl",
        100: "fasdt"
      },
      "Font Awesome 7 Jelly": {
        400: "fajr",
        normal: "fajr"
      },
      "Font Awesome 7 Jelly Fill": {
        400: "fajfr",
        normal: "fajfr"
      },
      "Font Awesome 7 Jelly Duo": {
        400: "fajdr",
        normal: "fajdr"
      },
      "Font Awesome 7 Slab": {
        400: "faslr",
        normal: "faslr"
      },
      "Font Awesome 7 Slab Press": {
        400: "faslpr",
        normal: "faslpr"
      },
      "Font Awesome 7 Thumbprint": {
        300: "fatl",
        normal: "fatl"
      },
      "Font Awesome 7 Notdog": {
        900: "fans",
        normal: "fans"
      },
      "Font Awesome 7 Notdog Duo": {
        900: "fands",
        normal: "fands"
      },
      "Font Awesome 7 Etch": {
        900: "faes",
        normal: "faes"
      },
      "Font Awesome 7 Chisel": {
        400: "facr",
        normal: "facr"
      },
      "Font Awesome 7 Whiteboard": {
        600: "fawsb",
        normal: "fawsb"
      },
      "Font Awesome 7 Utility": {
        600: "fausb",
        normal: "fausb"
      },
      "Font Awesome 7 Utility Duo": {
        600: "faudsb",
        normal: "faudsb"
      },
      "Font Awesome 7 Utility Fill": {
        600: "faufsb",
        normal: "faufsb"
      }
    };
  var Ut = new Map([["classic", {
      defaultShortPrefixId: "fas",
      defaultStyleId: "solid",
      styleIds: ["solid", "regular", "light", "thin", "brands"],
      futureStyleIds: [],
      defaultFontWeight: 900
    }], ["duotone", {
      defaultShortPrefixId: "fad",
      defaultStyleId: "solid",
      styleIds: ["solid", "regular", "light", "thin"],
      futureStyleIds: [],
      defaultFontWeight: 900
    }], ["sharp", {
      defaultShortPrefixId: "fass",
      defaultStyleId: "solid",
      styleIds: ["solid", "regular", "light", "thin"],
      futureStyleIds: [],
      defaultFontWeight: 900
    }], ["sharp-duotone", {
      defaultShortPrefixId: "fasds",
      defaultStyleId: "solid",
      styleIds: ["solid", "regular", "light", "thin"],
      futureStyleIds: [],
      defaultFontWeight: 900
    }], ["chisel", {
      defaultShortPrefixId: "facr",
      defaultStyleId: "regular",
      styleIds: ["regular"],
      futureStyleIds: [],
      defaultFontWeight: 400
    }], ["etch", {
      defaultShortPrefixId: "faes",
      defaultStyleId: "solid",
      styleIds: ["solid"],
      futureStyleIds: [],
      defaultFontWeight: 900
    }], ["jelly", {
      defaultShortPrefixId: "fajr",
      defaultStyleId: "regular",
      styleIds: ["regular"],
      futureStyleIds: [],
      defaultFontWeight: 400
    }], ["jelly-duo", {
      defaultShortPrefixId: "fajdr",
      defaultStyleId: "regular",
      styleIds: ["regular"],
      futureStyleIds: [],
      defaultFontWeight: 400
    }], ["jelly-fill", {
      defaultShortPrefixId: "fajfr",
      defaultStyleId: "regular",
      styleIds: ["regular"],
      futureStyleIds: [],
      defaultFontWeight: 400
    }], ["notdog", {
      defaultShortPrefixId: "fans",
      defaultStyleId: "solid",
      styleIds: ["solid"],
      futureStyleIds: [],
      defaultFontWeight: 900
    }], ["notdog-duo", {
      defaultShortPrefixId: "fands",
      defaultStyleId: "solid",
      styleIds: ["solid"],
      futureStyleIds: [],
      defaultFontWeight: 900
    }], ["slab", {
      defaultShortPrefixId: "faslr",
      defaultStyleId: "regular",
      styleIds: ["regular"],
      futureStyleIds: [],
      defaultFontWeight: 400
    }], ["slab-press", {
      defaultShortPrefixId: "faslpr",
      defaultStyleId: "regular",
      styleIds: ["regular"],
      futureStyleIds: [],
      defaultFontWeight: 400
    }], ["thumbprint", {
      defaultShortPrefixId: "fatl",
      defaultStyleId: "light",
      styleIds: ["light"],
      futureStyleIds: [],
      defaultFontWeight: 300
    }], ["utility", {
      defaultShortPrefixId: "fausb",
      defaultStyleId: "semibold",
      styleIds: ["semibold"],
      futureStyleIds: [],
      defaultFontWeight: 600
    }], ["utility-duo", {
      defaultShortPrefixId: "faudsb",
      defaultStyleId: "semibold",
      styleIds: ["semibold"],
      futureStyleIds: [],
      defaultFontWeight: 600
    }], ["utility-fill", {
      defaultShortPrefixId: "faufsb",
      defaultStyleId: "semibold",
      styleIds: ["semibold"],
      futureStyleIds: [],
      defaultFontWeight: 600
    }], ["whiteboard", {
      defaultShortPrefixId: "fawsb",
      defaultStyleId: "semibold",
      styleIds: ["semibold"],
      futureStyleIds: [],
      defaultFontWeight: 600
    }]]),
    _t = {
      chisel: {
        regular: "facr"
      },
      classic: {
        brands: "fab",
        light: "fal",
        regular: "far",
        solid: "fas",
        thin: "fat"
      },
      duotone: {
        light: "fadl",
        regular: "fadr",
        solid: "fad",
        thin: "fadt"
      },
      etch: {
        solid: "faes"
      },
      jelly: {
        regular: "fajr"
      },
      "jelly-duo": {
        regular: "fajdr"
      },
      "jelly-fill": {
        regular: "fajfr"
      },
      notdog: {
        solid: "fans"
      },
      "notdog-duo": {
        solid: "fands"
      },
      sharp: {
        light: "fasl",
        regular: "fasr",
        solid: "fass",
        thin: "fast"
      },
      "sharp-duotone": {
        light: "fasdl",
        regular: "fasdr",
        solid: "fasds",
        thin: "fasdt"
      },
      slab: {
        regular: "faslr"
      },
      "slab-press": {
        regular: "faslpr"
      },
      thumbprint: {
        light: "fatl"
      },
      utility: {
        semibold: "fausb"
      },
      "utility-duo": {
        semibold: "faudsb"
      },
      "utility-fill": {
        semibold: "faufsb"
      },
      whiteboard: {
        semibold: "fawsb"
      }
    };
  var Yt = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
    qt = {
      kit: {
        fak: "kit",
        "fa-kit": "kit"
      },
      "kit-duotone": {
        fakd: "kit-duotone",
        "fa-kit-duotone": "kit-duotone"
      }
    },
    Ht = ["kit"];
  var L = "kit",
    r = "kit-duotone",
    U = "Kit",
    J = "Kit Duotone",
    $t = _defineProperty(_defineProperty({}, L, U), r, J);
  var ol = {
    kit: {
      "fa-kit": "fak"
    },
    "kit-duotone": {
      "fa-kit-duotone": "fakd"
    }
  };
  var dl = {
      "Font Awesome Kit": {
        400: "fak",
        normal: "fak"
      },
      "Font Awesome Kit Duotone": {
        400: "fakd",
        normal: "fakd"
      }
    },
    fl = {
      kit: {
        fak: "fa-kit"
      },
      "kit-duotone": {
        fakd: "fa-kit-duotone"
      }
    };
  var ul = {
      kit: {
        kit: "fak"
      },
      "kit-duotone": {
        "kit-duotone": "fakd"
      }
    };

  var _ml;
  var l$1 = {
      GROUP: "duotone-group",
      SWAP_OPACITY: "swap-opacity",
      PRIMARY: "primary",
      SECONDARY: "secondary"
    },
    f$1 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"];
  var n$1 = "classic",
    o$1 = "duotone",
    u$1 = "sharp",
    s$1 = "sharp-duotone",
    h$1 = "chisel",
    g$1 = "etch",
    y$1 = "jelly",
    e$1 = "jelly-duo",
    m$1 = "jelly-fill",
    p$1 = "notdog",
    a$1 = "notdog-duo",
    w$1 = "slab",
    b$1 = "slab-press",
    r$1 = "thumbprint",
    c$1 = "utility",
    i$1 = "utility-duo",
    x$1 = "utility-fill",
    I$1 = "whiteboard",
    F$1 = "Classic",
    v$1 = "Duotone",
    S$1 = "Sharp",
    A$1 = "Sharp Duotone",
    P$1 = "Chisel",
    j$1 = "Etch",
    B$1 = "Jelly",
    N$1 = "Jelly Duo",
    k$1 = "Jelly Fill",
    D$1 = "Notdog",
    C$1 = "Notdog Duo",
    T$1 = "Slab",
    L$1 = "Slab Press",
    W$1 = "Thumbprint",
    R$1 = "Utility",
    K$1 = "Utility Duo",
    U$1 = "Utility Fill",
    J$1 = "Whiteboard",
    ml$1 = (_ml = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ml, n$1, F$1), o$1, v$1), u$1, S$1), s$1, A$1), h$1, P$1), g$1, j$1), y$1, B$1), e$1, N$1), m$1, k$1), p$1, D$1), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ml, a$1, C$1), w$1, T$1), b$1, L$1), r$1, W$1), c$1, R$1), i$1, K$1), x$1, U$1), I$1, J$1));
  var E$1 = "kit",
    d$1 = "kit-duotone",
    _$1 = "Kit",
    M$1 = "Kit Duotone",
    rt$1 = _defineProperty(_defineProperty({}, E$1, _$1), d$1, M$1);
  var $t$1 = {
      classic: {
        "fa-brands": "fab",
        "fa-duotone": "fad",
        "fa-light": "fal",
        "fa-regular": "far",
        "fa-solid": "fas",
        "fa-thin": "fat"
      },
      duotone: {
        "fa-regular": "fadr",
        "fa-light": "fadl",
        "fa-thin": "fadt"
      },
      sharp: {
        "fa-solid": "fass",
        "fa-regular": "fasr",
        "fa-light": "fasl",
        "fa-thin": "fast"
      },
      "sharp-duotone": {
        "fa-solid": "fasds",
        "fa-regular": "fasdr",
        "fa-light": "fasdl",
        "fa-thin": "fasdt"
      },
      slab: {
        "fa-regular": "faslr"
      },
      "slab-press": {
        "fa-regular": "faslpr"
      },
      whiteboard: {
        "fa-semibold": "fawsb"
      },
      thumbprint: {
        "fa-light": "fatl"
      },
      notdog: {
        "fa-solid": "fans"
      },
      "notdog-duo": {
        "fa-solid": "fands"
      },
      etch: {
        "fa-solid": "faes"
      },
      jelly: {
        "fa-regular": "fajr"
      },
      "jelly-fill": {
        "fa-regular": "fajfr"
      },
      "jelly-duo": {
        "fa-regular": "fajdr"
      },
      chisel: {
        "fa-regular": "facr"
      },
      utility: {
        "fa-semibold": "fausb"
      },
      "utility-duo": {
        "fa-semibold": "faudsb"
      },
      "utility-fill": {
        "fa-semibold": "faufsb"
      }
    },
    z = {
      classic: ["fas", "far", "fal", "fat", "fad"],
      duotone: ["fadr", "fadl", "fadt"],
      sharp: ["fass", "fasr", "fasl", "fast"],
      "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
      slab: ["faslr"],
      "slab-press": ["faslpr"],
      whiteboard: ["fawsb"],
      thumbprint: ["fatl"],
      notdog: ["fans"],
      "notdog-duo": ["fands"],
      etch: ["faes"],
      jelly: ["fajr"],
      "jelly-fill": ["fajfr"],
      "jelly-duo": ["fajdr"],
      chisel: ["facr"],
      utility: ["fausb"],
      "utility-duo": ["faudsb"],
      "utility-fill": ["faufsb"]
    },
    Ht$1 = {
      classic: {
        fab: "fa-brands",
        fad: "fa-duotone",
        fal: "fa-light",
        far: "fa-regular",
        fas: "fa-solid",
        fat: "fa-thin"
      },
      duotone: {
        fadr: "fa-regular",
        fadl: "fa-light",
        fadt: "fa-thin"
      },
      sharp: {
        fass: "fa-solid",
        fasr: "fa-regular",
        fasl: "fa-light",
        fast: "fa-thin"
      },
      "sharp-duotone": {
        fasds: "fa-solid",
        fasdr: "fa-regular",
        fasdl: "fa-light",
        fasdt: "fa-thin"
      },
      slab: {
        faslr: "fa-regular"
      },
      "slab-press": {
        faslpr: "fa-regular"
      },
      whiteboard: {
        fawsb: "fa-semibold"
      },
      thumbprint: {
        fatl: "fa-light"
      },
      notdog: {
        fans: "fa-solid"
      },
      "notdog-duo": {
        fands: "fa-solid"
      },
      etch: {
        faes: "fa-solid"
      },
      jelly: {
        fajr: "fa-regular"
      },
      "jelly-fill": {
        fajfr: "fa-regular"
      },
      "jelly-duo": {
        fajdr: "fa-regular"
      },
      chisel: {
        facr: "fa-regular"
      },
      utility: {
        fausb: "fa-semibold"
      },
      "utility-duo": {
        faudsb: "fa-semibold"
      },
      "utility-fill": {
        faufsb: "fa-semibold"
      }
    },
    Y$1 = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"],
    Zt$1 = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(f$1, Y$1),
    G$1 = ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"],
    O$1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    V$1 = O$1.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
    $$1 = ["aw", "fw", "pull-left", "pull-right"],
    to = [].concat(_toConsumableArray(Object.keys(z)), G$1, $$1, ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", l$1.GROUP, l$1.SWAP_OPACITY, l$1.PRIMARY, l$1.SECONDARY]).concat(O$1.map(function (t) {
      return "".concat(t, "x");
    })).concat(V$1.map(function (t) {
      return "w-".concat(t);
    }));
  var ro = {
      "Font Awesome 5 Free": {
        900: "fas",
        400: "far"
      },
      "Font Awesome 5 Pro": {
        900: "fas",
        400: "far",
        normal: "far",
        300: "fal"
      },
      "Font Awesome 5 Brands": {
        400: "fab",
        normal: "fab"
      },
      "Font Awesome 5 Duotone": {
        900: "fad"
      }
    };

  var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
  var UNITS_IN_GRID = 16;
  var DEFAULT_CSS_PREFIX = 'fa';
  var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
  var DATA_FA_I2SVG = 'data-fa-i2svg';
  var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
  var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
  var DATA_PREFIX = 'data-prefix';
  var DATA_ICON = 'data-icon';
  var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
  var MUTATION_APPROACH_ASYNC = 'async';
  var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
  var PSEUDO_ELEMENTS = ['::before', '::after', ':before', ':after'];
  var PRODUCTION = function () {
    try {
      return "production" === 'production';
    } catch (e$$1) {
      return false;
    }
  }();
  function familyProxy(obj) {
    // Defaults to the classic family if family is not available
    return new Proxy(obj, {
      get: function get(target, prop) {
        return prop in target ? target[prop] : target[i];
      }
    });
  }
  var _PREFIX_TO_STYLE = _objectSpread2({}, q);

  // We changed FACSSClassesToStyleId in the icons repo to be canonical and as such, "classic" family does not have any
  // duotone styles.  But we do still need duotone in _PREFIX_TO_STYLE below, so we are manually adding
  // {'fa-duotone': 'duotone'}
  _PREFIX_TO_STYLE[i] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    'fa-duotone': 'duotone'
  }), q[i]), qt['kit']), qt['kit-duotone']);
  var PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
  var _STYLE_TO_PREFIX = _objectSpread2({}, _t);

  // We changed FAStyleIdToShortPrefixId in the icons repo to be canonical and as such, "classic" family does not have any
  // duotone styles.  But we do still need duotone in _STYLE_TO_PREFIX below, so we are manually adding {duotone: 'fad'}
  _STYLE_TO_PREFIX[i] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    duotone: 'fad'
  }), _STYLE_TO_PREFIX[i]), ul['kit']), ul['kit-duotone']);
  var STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
  var _PREFIX_TO_LONG_STYLE = _objectSpread2({}, Ht$1);
  _PREFIX_TO_LONG_STYLE[i] = _objectSpread2(_objectSpread2({}, _PREFIX_TO_LONG_STYLE[i]), fl['kit']);
  var PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
  var _LONG_STYLE_TO_PREFIX = _objectSpread2({}, $t$1);
  _LONG_STYLE_TO_PREFIX[i] = _objectSpread2(_objectSpread2({}, _LONG_STYLE_TO_PREFIX[i]), ol['kit']);
  var LONG_STYLE_TO_PREFIX = familyProxy(_LONG_STYLE_TO_PREFIX);
  var ICON_SELECTION_SYNTAX_PATTERN = E;
  var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
  var FONT_FAMILY_PATTERN = _;
  var _FONT_WEIGHT_TO_PREFIX = _objectSpread2({}, gt);
  var FONT_WEIGHT_TO_PREFIX = familyProxy(_FONT_WEIGHT_TO_PREFIX);
  var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
  var DUOTONE_CLASSES = H;
  var RESERVED_CLASSES = [].concat(_toConsumableArray(Ht), _toConsumableArray(to));

  var initial = WINDOW.FontAwesomeConfig || {};
  function getAttrConfig(attr) {
    var element = DOCUMENT.querySelector('script[' + attr + ']');
    if (element) {
      return element.getAttribute(attr);
    }
  }
  function coerce(val) {
    // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
    // We'll assume that this is an indication that it should be toggled to true
    if (val === '') return true;
    if (val === 'false') return false;
    if (val === 'true') return true;
    return val;
  }
  if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
    var attrs = [['data-family-prefix', 'familyPrefix'], ['data-css-prefix', 'cssPrefix'], ['data-family-default', 'familyDefault'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-search-pseudo-elements-warnings', 'searchPseudoElementsWarnings'], ['data-search-pseudo-elements-full-scan', 'searchPseudoElementsFullScan'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
    attrs.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];
      var val = coerce(getAttrConfig(attr));
      if (val !== undefined && val !== null) {
        initial[key] = val;
      }
    });
  }
  var _default = {
    styleDefault: 'solid',
    familyDefault: i,
    cssPrefix: DEFAULT_CSS_PREFIX,
    replacementClass: DEFAULT_REPLACEMENT_CLASS,
    autoReplaceSvg: true,
    autoAddCss: true,
    searchPseudoElements: false,
    searchPseudoElementsWarnings: true,
    searchPseudoElementsFullScan: false,
    observeMutations: true,
    mutateApproach: 'async',
    keepOriginalSource: true,
    measurePerformance: false,
    showMissingIcons: true
  };

  // familyPrefix is deprecated but we must still support it if present
  if (initial.familyPrefix) {
    initial.cssPrefix = initial.familyPrefix;
  }
  var _config = _objectSpread2(_objectSpread2({}, _default), initial);
  if (!_config.autoReplaceSvg) _config.observeMutations = false;
  var config = {};
  Object.keys(_default).forEach(function (key) {
    Object.defineProperty(config, key, {
      enumerable: true,
      set: function set(val) {
        _config[key] = val;
        _onChangeCb.forEach(function (cb) {
          return cb(config);
        });
      },
      get: function get() {
        return _config[key];
      }
    });
  });

  // familyPrefix is deprecated as of 6.2.0 and should be removed in 7.0.0
  Object.defineProperty(config, 'familyPrefix', {
    enumerable: true,
    set: function set(val) {
      _config.cssPrefix = val;
      _onChangeCb.forEach(function (cb) {
        return cb(config);
      });
    },
    get: function get() {
      return _config.cssPrefix;
    }
  });
  WINDOW.FontAwesomeConfig = config;
  var _onChangeCb = [];
  function onChange(cb) {
    _onChangeCb.push(cb);
    return function () {
      _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
    };
  }

  var d$2 = UNITS_IN_GRID;
  var meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
  };
  function bunker(fn) {
    try {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      fn.apply(void 0, args);
    } catch (e) {
      if (!PRODUCTION) {
        throw e;
      }
    }
  }
  function insertCss(css) {
    if (!css || !IS_DOM) {
      return;
    }
    var style = DOCUMENT.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    var headChildren = DOCUMENT.head.childNodes;
    var beforeChild = null;
    for (var i = headChildren.length - 1; i > -1; i--) {
      var child = headChildren[i];
      var tagName = (child.tagName || '').toUpperCase();
      if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
        beforeChild = child;
      }
    }
    DOCUMENT.head.insertBefore(style, beforeChild);
    return css;
  }
  var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function nextUniqueId() {
    var size = 12;
    var id = '';
    while (size-- > 0) {
      id += idPool[Math.random() * 62 | 0];
    }
    return id;
  }
  function toArray(obj) {
    var array = [];
    for (var i = (obj || []).length >>> 0; i--;) {
      array[i] = obj[i];
    }
    return array;
  }
  function classArray(node) {
    if (node.classList) {
      return toArray(node.classList);
    } else {
      return (node.getAttribute('class') || '').split(' ').filter(function (i) {
        return i;
      });
    }
  }
  function htmlEscape(str) {
    return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function joinAttributes(attributes) {
    return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
      return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
    }, '').trim();
  }
  function joinStyles(styles) {
    return Object.keys(styles || {}).reduce(function (acc, styleName) {
      return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
    }, '');
  }
  function transformIsMeaningful(transform) {
    return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
  }
  function transformForSvg(_ref) {
    var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
    var outer = {
      transform: "translate(".concat(containerWidth / 2, " 256)")
    };
    var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
    var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
    var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
    var inner = {
      transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
    };
    var path = {
      transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
    };
    return {
      outer: outer,
      inner: inner,
      path: path
    };
  }
  function transformForCss(_ref2) {
    var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
    var val = '';
    if (startCentered && IS_IE) {
      val += "translate(".concat(transform.x / d$2 - width / 2, "em, ").concat(transform.y / d$2 - height / 2, "em) ");
    } else if (startCentered) {
      val += "translate(calc(-50% + ".concat(transform.x / d$2, "em), calc(-50% + ").concat(transform.y / d$2, "em)) ");
    } else {
      val += "translate(".concat(transform.x / d$2, "em, ").concat(transform.y / d$2, "em) ");
    }
    val += "scale(".concat(transform.size / d$2 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d$2 * (transform.flipY ? -1 : 1), ") ");
    val += "rotate(".concat(transform.rotate, "deg) ");
    return val;
  }

  var baseStyles = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 \"Font Awesome 7 Free\";\n  --fa-font-regular: normal 400 1em/1 \"Font Awesome 7 Free\";\n  --fa-font-light: normal 300 1em/1 \"Font Awesome 7 Pro\";\n  --fa-font-thin: normal 100 1em/1 \"Font Awesome 7 Pro\";\n  --fa-font-duotone: normal 900 1em/1 \"Font Awesome 7 Duotone\";\n  --fa-font-duotone-regular: normal 400 1em/1 \"Font Awesome 7 Duotone\";\n  --fa-font-duotone-light: normal 300 1em/1 \"Font Awesome 7 Duotone\";\n  --fa-font-duotone-thin: normal 100 1em/1 \"Font Awesome 7 Duotone\";\n  --fa-font-brands: normal 400 1em/1 \"Font Awesome 7 Brands\";\n  --fa-font-sharp-solid: normal 900 1em/1 \"Font Awesome 7 Sharp\";\n  --fa-font-sharp-regular: normal 400 1em/1 \"Font Awesome 7 Sharp\";\n  --fa-font-sharp-light: normal 300 1em/1 \"Font Awesome 7 Sharp\";\n  --fa-font-sharp-thin: normal 100 1em/1 \"Font Awesome 7 Sharp\";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 \"Font Awesome 7 Sharp Duotone\";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 \"Font Awesome 7 Sharp Duotone\";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 \"Font Awesome 7 Sharp Duotone\";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 \"Font Awesome 7 Sharp Duotone\";\n  --fa-font-slab-regular: normal 400 1em/1 \"Font Awesome 7 Slab\";\n  --fa-font-slab-press-regular: normal 400 1em/1 \"Font Awesome 7 Slab Press\";\n  --fa-font-whiteboard-semibold: normal 600 1em/1 \"Font Awesome 7 Whiteboard\";\n  --fa-font-thumbprint-light: normal 300 1em/1 \"Font Awesome 7 Thumbprint\";\n  --fa-font-notdog-solid: normal 900 1em/1 \"Font Awesome 7 Notdog\";\n  --fa-font-notdog-duo-solid: normal 900 1em/1 \"Font Awesome 7 Notdog Duo\";\n  --fa-font-etch-solid: normal 900 1em/1 \"Font Awesome 7 Etch\";\n  --fa-font-jelly-regular: normal 400 1em/1 \"Font Awesome 7 Jelly\";\n  --fa-font-jelly-fill-regular: normal 400 1em/1 \"Font Awesome 7 Jelly Fill\";\n  --fa-font-jelly-duo-regular: normal 400 1em/1 \"Font Awesome 7 Jelly Duo\";\n  --fa-font-chisel-regular: normal 400 1em/1 \"Font Awesome 7 Chisel\";\n  --fa-font-utility-semibold: normal 600 1em/1 \"Font Awesome 7 Utility\";\n  --fa-font-utility-duo-semibold: normal 600 1em/1 \"Font Awesome 7 Utility Duo\";\n  --fa-font-utility-fill-semibold: normal 600 1em/1 \"Font Awesome 7 Utility Fill\";\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";

  function css() {
    var dcp = DEFAULT_CSS_PREFIX;
    var drc = DEFAULT_REPLACEMENT_CLASS;
    var fp = config.cssPrefix;
    var rc = config.replacementClass;
    var s = baseStyles;
    if (fp !== dcp || rc !== drc) {
      var dPatt = new RegExp("\\.".concat(dcp, "\\-"), 'g');
      var customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), 'g');
      var rPatt = new RegExp("\\.".concat(drc), 'g');
      s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
    }
    return s;
  }
  var _cssInserted = false;
  function ensureCss() {
    if (config.autoAddCss && !_cssInserted) {
      insertCss(css());
      _cssInserted = true;
    }
  }
  var InjectCSS = {
    mixout: function mixout() {
      return {
        dom: {
          css: css,
          insertCss: ensureCss
        }
      };
    },
    hooks: function hooks() {
      return {
        beforeDOMElementCreation: function beforeDOMElementCreation() {
          ensureCss();
        },
        beforeI2svg: function beforeI2svg() {
          ensureCss();
        }
      };
    }
  };

  var w$2 = WINDOW || {};
  if (!w$2[NAMESPACE_IDENTIFIER]) w$2[NAMESPACE_IDENTIFIER] = {};
  if (!w$2[NAMESPACE_IDENTIFIER].styles) w$2[NAMESPACE_IDENTIFIER].styles = {};
  if (!w$2[NAMESPACE_IDENTIFIER].hooks) w$2[NAMESPACE_IDENTIFIER].hooks = {};
  if (!w$2[NAMESPACE_IDENTIFIER].shims) w$2[NAMESPACE_IDENTIFIER].shims = [];
  var namespace = w$2[NAMESPACE_IDENTIFIER];

  var functions = [];
  var _listener = function listener() {
    DOCUMENT.removeEventListener('DOMContentLoaded', _listener);
    loaded = 1;
    functions.map(function (fn) {
      return fn();
    });
  };
  var loaded = false;
  if (IS_DOM) {
    loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
    if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', _listener);
  }
  function domready (fn) {
    if (!IS_DOM) return;
    loaded ? setTimeout(fn, 0) : functions.push(fn);
  }

  function toHtml(abstractNodes) {
    var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;
    if (typeof abstractNodes === 'string') {
      return htmlEscape(abstractNodes);
    } else {
      return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
    }
  }

  function iconFromMapping(mapping, prefix, iconName) {
    if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
      return {
        prefix: prefix,
        iconName: iconName,
        icon: mapping[prefix][iconName]
      };
    }
  }

  /**
   * Internal helper to bind a function known to have 4 arguments
   * to a given context.
   */
  var bindInternal4 = function bindInternal4(func, thisContext) {
    return function (a, b, c, d) {
      return func.call(thisContext, a, b, c, d);
    };
  };

  /**
   * # Reduce
   *
   * A fast object `.reduce()` implementation.
   *
   * @param  {Object}   subject      The object to reduce over.
   * @param  {Function} fn           The reducer function.
   * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
   * @param  {Object}   thisContext  The context for the reducer.
   * @return {mixed}                 The final result.
   */
  var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
    var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;
    if (initialValue === undefined) {
      i = 1;
      result = subject[keys[0]];
    } else {
      i = 0;
      result = initialValue;
    }
    for (; i < length; i++) {
      key = keys[i];
      result = iterator(result, subject[key], key, subject);
    }
    return result;
  };

  /**
   * Return hexadecimal string for a unicode character
   * Returns `null` when more than one character (not bytes!) are passed
   * For example: 'K' → '7B'
   */
  function toHex(unicode) {
    if (_toConsumableArray(unicode).length !== 1) return null;
    return unicode.codePointAt(0).toString(16);
  }

  function normalizeIcons(icons) {
    return Object.keys(icons).reduce(function (acc, iconName) {
      var icon = icons[iconName];
      var expanded = !!icon.icon;
      if (expanded) {
        acc[icon.iconName] = icon.icon;
      } else {
        acc[iconName] = icon;
      }
      return acc;
    }, {});
  }
  function defineIcons(prefix, icons) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
    var normalized = normalizeIcons(icons);
    if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
      namespace.hooks.addPack(prefix, normalizeIcons(icons));
    } else {
      namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
    }

    /**
     * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
     * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
     * for `fas` so we'll ease the upgrade process for our users by automatically defining
     * this as well.
     */
    if (prefix === 'fas') {
      defineIcons('fa', icons);
    }
  }

  var MONO = 0x1;
  var DUO = 0x2;

  // New v7 compatible matchers using the style attribute to determine layer membership
  var modernMatches = [[DUO, /*#__PURE__*/_wrapRegExp(/path opacity="([^"]*)".*d="([^"]*)".*path.*d="([^"]*)"/, {
    d2: 2,
    d1: 3
  })], [DUO, /*#__PURE__*/_wrapRegExp(/path opacity="([^"]*)".*d="([^"]*)"/, {
    d2: 2
  })], [MONO, /*#__PURE__*/_wrapRegExp(/path fill="currentColor".*d="([^"]+)"/, {
    d1: 1
  })]];

  // Old <= v6 matchers, these should rarely get used.
  //
  // Why are there so many? Over the lifecycle of version 5 and 6 we modified the
  // syntax for our source SVG files several times. These patterns match the
  // historical record and attempt to handle backwards-compatibility in rare edge
  // cases (loading version 6 SVG source files using the version 7 SVG parser)
  var legacyMatches = [[DUO, /*#__PURE__*/_wrapRegExp(/path class="([^"]*secondary[^"]*)".*d="([^"]+)".*path class="([^"]*primary[^"]*)".*d="([^"]+)"/, {
    attr2: 1,
    d2: 2,
    attr1: 3,
    d1: 4
  })], [DUO, /*#__PURE__*/_wrapRegExp(/path class="([^"]*primary[^"]*)".*d="([^"]+)".*path class="([^"]*secondary[^"]*)".*d="([^"]+)"/, {
    attr1: 1,
    d1: 2,
    attr2: 3,
    d2: 4
  })], [DUO, /*#__PURE__*/_wrapRegExp(/path class="([^"]*primary[^"]*)".*d="([^"]+)"/, {
    attr1: 1,
    d1: 2
  })], [DUO, /*#__PURE__*/_wrapRegExp(/path class="([^"]*secondary[^"]*)".*d="([^"]+)"/, {
    attr2: 1,
    d2: 2
  })], [DUO, /*#__PURE__*/_wrapRegExp(/path d="([^"]+)".*class="([^"]*secondary[^"]*)".*path d="([^"]+)".*class="([^"]*primary[^"]*)"/, {
    d2: 1,
    attr2: 2,
    d1: 3,
    attr1: 4
  })], [DUO, /*#__PURE__*/_wrapRegExp(/path d="([^"]+)".*class="([^"]*primary[^"]*)".*path d="([^"]+)".*class="([^"]*secondary[^"]*)"/, {
    d1: 1,
    attr1: 2,
    d2: 3,
    attr2: 4
  })], [DUO, /*#__PURE__*/_wrapRegExp(/path d="([^"]+)".*class="([^"]*primary[^"]*)"/, {
    d1: 1,
    attr1: 2
  })], [DUO, /*#__PURE__*/_wrapRegExp(/path d="([^"]+)".*class="([^"]*secondary[^"]*)"/, {
    d2: 1,
    attr2: 2
  })], [DUO, /*#__PURE__*/_wrapRegExp(/path d="([^"]+)".*path d="([^"]+)"/, {
    d1: 1,
    d2: 2
  })], [MONO, /*#__PURE__*/_wrapRegExp(/path d="([^"]+)"/, {
    d1: 1
  })], [MONO, /*#__PURE__*/_wrapRegExp(/path style="([^"]+)".*d="([^"]+)"/, {
    attr1: 1,
    d1: 2
  })]];

  var styles = namespace.styles,
    shims = namespace.shims;
  var FAMILY_NAMES = Object.keys(PREFIX_TO_LONG_STYLE);
  var PREFIXES_FOR_FAMILY = FAMILY_NAMES.reduce(function (acc, familyId) {
    acc[familyId] = Object.keys(PREFIX_TO_LONG_STYLE[familyId]);
    return acc;
  }, {});
  var _defaultUsablePrefix = null;
  var _byUnicode = {};
  var _byLigature = {};
  var _byOldName = {};
  var _byOldUnicode = {};
  var _byAlias = {};
  function isReserved(name) {
    return ~RESERVED_CLASSES.indexOf(name);
  }
  function getIconName(cssPrefix, cls) {
    var parts = cls.split('-');
    var prefix = parts[0];
    var iconName = parts.slice(1).join('-');
    if (prefix === cssPrefix && iconName !== '' && !isReserved(iconName)) {
      return iconName;
    } else {
      return null;
    }
  }
  var build = function build() {
    var lookup = function lookup(reducer) {
      return reduce(styles, function (o$$1, style, prefix) {
        o$$1[prefix] = reduce(style, reducer, {});
        return o$$1;
      }, {});
    };
    _byUnicode = lookup(function (acc, icon, iconName) {
      if (icon[3]) {
        acc[icon[3]] = iconName;
      }
      if (icon[2]) {
        var aliases = icon[2].filter(function (a$$1) {
          return typeof a$$1 === 'number';
        });
        aliases.forEach(function (alias) {
          acc[alias.toString(16)] = iconName;
        });
      }
      return acc;
    });
    _byLigature = lookup(function (acc, icon, iconName) {
      acc[iconName] = iconName;
      if (icon[2]) {
        var aliases = icon[2].filter(function (a$$1) {
          return typeof a$$1 === 'string';
        });
        aliases.forEach(function (alias) {
          acc[alias] = iconName;
        });
      }
      return acc;
    });
    _byAlias = lookup(function (acc, icon, iconName) {
      var aliases = icon[2];
      acc[iconName] = iconName;
      aliases.forEach(function (alias) {
        acc[alias] = iconName;
      });
      return acc;
    });

    // If we have a Kit, we can't determine if regular is available since we
    // could be auto-fetching it. We'll have to assume that it is available.
    var hasRegular = 'far' in styles || config.autoFetchSvg;
    var shimLookups = reduce(shims, function (acc, shim) {
      var maybeNameMaybeUnicode = shim[0];
      var prefix = shim[1];
      var iconName = shim[2];
      if (prefix === 'far' && !hasRegular) {
        prefix = 'fas';
      }
      if (typeof maybeNameMaybeUnicode === 'string') {
        acc.names[maybeNameMaybeUnicode] = {
          prefix: prefix,
          iconName: iconName
        };
      }
      if (typeof maybeNameMaybeUnicode === 'number') {
        acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
          prefix: prefix,
          iconName: iconName
        };
      }
      return acc;
    }, {
      names: {},
      unicodes: {}
    });
    _byOldName = shimLookups.names;
    _byOldUnicode = shimLookups.unicodes;
    _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
      family: config.familyDefault
    });
  };
  onChange(function (c$$1) {
    _defaultUsablePrefix = getCanonicalPrefix(c$$1.styleDefault, {
      family: config.familyDefault
    });
  });
  build();
  function byUnicode(prefix, unicode) {
    return (_byUnicode[prefix] || {})[unicode];
  }
  function byLigature(prefix, ligature) {
    return (_byLigature[prefix] || {})[ligature];
  }
  function byAlias(prefix, alias) {
    return (_byAlias[prefix] || {})[alias];
  }
  function byOldName(name) {
    return _byOldName[name] || {
      prefix: null,
      iconName: null
    };
  }
  function byOldUnicode(unicode) {
    var oldUnicode = _byOldUnicode[unicode];
    var newUnicode = byUnicode('fas', unicode);
    return oldUnicode || (newUnicode ? {
      prefix: 'fas',
      iconName: newUnicode
    } : null) || {
      prefix: null,
      iconName: null
    };
  }
  function getDefaultUsablePrefix() {
    return _defaultUsablePrefix;
  }
  var emptyCanonicalIcon = function emptyCanonicalIcon() {
    return {
      prefix: null,
      iconName: null,
      rest: []
    };
  };
  function getFamilyId(values) {
    var family = i;
    var famProps = FAMILY_NAMES.reduce(function (acc, familyId) {
      acc[familyId] = "".concat(config.cssPrefix, "-").concat(familyId);
      return acc;
    }, {});
    rt.forEach(function (familyId) {
      if (values.includes(famProps[familyId]) || values.some(function (v$$1) {
        return PREFIXES_FOR_FAMILY[familyId].includes(v$$1);
      })) {
        family = familyId;
      }
    });
    return family;
  }
  function getCanonicalPrefix(styleOrPrefix) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$family = params.family,
      family = _params$family === void 0 ? i : _params$family;
    var style = PREFIX_TO_STYLE[family][styleOrPrefix];

    // handles the exception of passing in only a family of 'duotone' with no style
    if (family === t && !styleOrPrefix) {
      return 'fad';
    }
    var prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
    var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
    var result = prefix || defined || null;
    return result;
  }
  function moveNonFaClassesToRest(classNames) {
    var rest = [];
    var iconName = null;
    classNames.forEach(function (cls) {
      var result = getIconName(config.cssPrefix, cls);
      if (result) {
        iconName = result;
      } else if (cls) {
        rest.push(cls);
      }
    });
    return {
      iconName: iconName,
      rest: rest
    };
  }
  function sortedUniqueValues(arr) {
    return arr.sort().filter(function (value, index, arr) {
      return arr.indexOf(value) === index;
    });
  }
  var _faCombinedClasses = Zt$1.concat(Yt);
  function getCanonicalIcon(values) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$skipLookups = params.skipLookups,
      skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
    var givenPrefix = null;
    var faStyleOrFamilyClasses = sortedUniqueValues(values.filter(function (cls) {
      return _faCombinedClasses.includes(cls);
    }));
    var nonStyleOrFamilyClasses = sortedUniqueValues(values.filter(function (cls) {
      return !_faCombinedClasses.includes(cls);
    }));
    var faStyles = faStyleOrFamilyClasses.filter(function (cls) {
      givenPrefix = cls;
      return !Q.includes(cls);
    });
    var _faStyles = _slicedToArray(faStyles, 1),
      _faStyles$ = _faStyles[0],
      styleFromValues = _faStyles$ === void 0 ? null : _faStyles$;
    var family = getFamilyId(faStyleOrFamilyClasses);
    var canonical = _objectSpread2(_objectSpread2({}, moveNonFaClassesToRest(nonStyleOrFamilyClasses)), {}, {
      prefix: getCanonicalPrefix(styleFromValues, {
        family: family
      })
    });
    return _objectSpread2(_objectSpread2(_objectSpread2({}, canonical), getDefaultCanonicalPrefix({
      values: values,
      family: family,
      styles: styles,
      config: config,
      canonical: canonical,
      givenPrefix: givenPrefix
    })), applyShimAndAlias(skipLookups, givenPrefix, canonical));
  }
  function applyShimAndAlias(skipLookups, givenPrefix, canonical) {
    var prefix = canonical.prefix,
      iconName = canonical.iconName;
    if (skipLookups || !prefix || !iconName) {
      return {
        prefix: prefix,
        iconName: iconName
      };
    }
    var shim = givenPrefix === 'fa' ? byOldName(iconName) : {};
    var aliasIconName = byAlias(prefix, iconName);
    iconName = shim.iconName || aliasIconName || iconName;
    prefix = shim.prefix || prefix;
    if (prefix === 'far' && !styles['far'] && styles['fas'] && !config.autoFetchSvg) {
      // Allow a fallback from the regular style to solid if regular is not available
      // but only if we aren't auto-fetching SVGs
      prefix = 'fas';
    }
    return {
      prefix: prefix,
      iconName: iconName
    };
  }
  var newCanonicalFamilies = rt.filter(function (familyId) {
    return familyId !== i || familyId !== t;
  });
  var newCanonicalStyles = Object.keys(Ht$1).filter(function (key) {
    return key !== i;
  }).map(function (key) {
    return Object.keys(Ht$1[key]);
  }).flat();
  function getDefaultCanonicalPrefix(prefixOptions) {
    var values = prefixOptions.values,
      family = prefixOptions.family,
      canonical = prefixOptions.canonical,
      _prefixOptions$givenP = prefixOptions.givenPrefix,
      givenPrefix = _prefixOptions$givenP === void 0 ? '' : _prefixOptions$givenP,
      _prefixOptions$styles = prefixOptions.styles,
      styles = _prefixOptions$styles === void 0 ? {} : _prefixOptions$styles,
      _prefixOptions$config = prefixOptions.config,
      config$$1 = _prefixOptions$config === void 0 ? {} : _prefixOptions$config;
    var isDuotoneFamily = family === t;
    var valuesHasDuotone = values.includes('fa-duotone') || values.includes('fad');
    var defaultFamilyIsDuotone = config$$1.familyDefault === 'duotone';
    var canonicalPrefixIsDuotone = canonical.prefix === 'fad' || canonical.prefix === 'fa-duotone';
    if (!isDuotoneFamily && (valuesHasDuotone || defaultFamilyIsDuotone || canonicalPrefixIsDuotone)) {
      canonical.prefix = 'fad';
    }
    if (values.includes('fa-brands') || values.includes('fab')) {
      canonical.prefix = 'fab';
    }
    if (!canonical.prefix && newCanonicalFamilies.includes(family)) {
      var validPrefix = Object.keys(styles).find(function (key) {
        return newCanonicalStyles.includes(key);
      });
      if (validPrefix || config$$1.autoFetchSvg) {
        var defaultPrefix = Ut.get(family).defaultShortPrefixId;
        canonical.prefix = defaultPrefix;
        canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
      }
    }
    if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
      // The fa prefix is not canonical. So if it has made it through until this point
      // we will shift it to the correct prefix.
      canonical.prefix = getDefaultUsablePrefix() || 'fas';
    }
    return canonical;
  }

  var Library = /*#__PURE__*/function () {
    function Library() {
      _classCallCheck(this, Library);
      this.definitions = {};
    }
    return _createClass(Library, [{
      key: "add",
      value: function add() {
        var _this = this;
        for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
          definitions[_key] = arguments[_key];
        }
        var additions = definitions.reduce(this._pullDefinitions, {});
        Object.keys(additions).forEach(function (key) {
          _this.definitions[key] = _objectSpread2(_objectSpread2({}, _this.definitions[key] || {}), additions[key]);
          defineIcons(key, additions[key]);

          // To keep support for older Classic styles, also add longer prefixes
          var longPrefix = PREFIX_TO_LONG_STYLE[i][key];
          if (longPrefix) defineIcons(longPrefix, additions[key]);
          build();
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this.definitions = {};
      }
    }, {
      key: "_pullDefinitions",
      value: function _pullDefinitions(additions, definition) {
        var normalized = definition.prefix && definition.iconName && definition.icon ? {
          0: definition
        } : definition;
        Object.keys(normalized).map(function (key) {
          var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
          var aliases = icon[2];
          if (!additions[prefix]) additions[prefix] = {};
          if (aliases.length > 0) {
            aliases.forEach(function (alias) {
              if (typeof alias === 'string') {
                additions[prefix][alias] = icon;
              }
            });
          }
          additions[prefix][iconName] = icon;
        });
        return additions;
      }
    }]);
  }();

  var _plugins = [];
  var _hooks = {};
  var providers = {};
  var defaultProviderKeys = Object.keys(providers);
  function registerPlugins(nextPlugins, _ref) {
    var obj = _ref.mixoutsTo;
    _plugins = nextPlugins;
    _hooks = {};
    Object.keys(providers).forEach(function (k) {
      if (defaultProviderKeys.indexOf(k) === -1) {
        delete providers[k];
      }
    });
    _plugins.forEach(function (plugin) {
      var mixout = plugin.mixout ? plugin.mixout() : {};
      Object.keys(mixout).forEach(function (tk) {
        if (typeof mixout[tk] === 'function') {
          obj[tk] = mixout[tk];
        }
        if (_typeof(mixout[tk]) === 'object') {
          Object.keys(mixout[tk]).forEach(function (sk) {
            if (!obj[tk]) {
              obj[tk] = {};
            }
            obj[tk][sk] = mixout[tk][sk];
          });
        }
      });
      if (plugin.hooks) {
        var hooks = plugin.hooks();
        Object.keys(hooks).forEach(function (hook) {
          if (!_hooks[hook]) {
            _hooks[hook] = [];
          }
          _hooks[hook].push(hooks[hook]);
        });
      }
      if (plugin.provides) {
        plugin.provides(providers);
      }
    });
    return obj;
  }
  function chainHooks(hook, accumulator) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    var hookFns = _hooks[hook] || [];
    hookFns.forEach(function (hookFn) {
      accumulator = hookFn.apply(null, [accumulator].concat(args));
    });
    return accumulator;
  }
  function callHooks(hook) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    var hookFns = _hooks[hook] || [];
    hookFns.forEach(function (hookFn) {
      hookFn.apply(null, args);
    });
    return undefined;
  }
  function callProvided() {
    var hook = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);
    return providers[hook] ? providers[hook].apply(null, args) : undefined;
  }

  function findIconDefinition(iconLookup) {
    if (iconLookup.prefix === 'fa') {
      iconLookup.prefix = 'fas';
    }
    var iconName = iconLookup.iconName;
    var prefix = iconLookup.prefix || getDefaultUsablePrefix();
    if (!iconName) return;
    iconName = byAlias(prefix, iconName) || iconName;
    return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
  }
  var library = new Library();
  var noAuto = function noAuto() {
    config.autoReplaceSvg = false;
    config.observeMutations = false;
    callHooks('noAuto');
  };
  var dom = {
    i2svg: function i2svg() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (IS_DOM) {
        callHooks('beforeI2svg', params);
        callProvided('pseudoElements2svg', params);
        return callProvided('i2svg', params);
      } else {
        return Promise.reject(new Error('Operation requires a DOM of some kind.'));
      }
    },
    watch: function watch() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var autoReplaceSvgRoot = params.autoReplaceSvgRoot;
      if (config.autoReplaceSvg === false) {
        config.autoReplaceSvg = true;
      }
      config.observeMutations = true;
      domready(function () {
        autoReplace({
          autoReplaceSvgRoot: autoReplaceSvgRoot
        });
        callHooks('watch', params);
      });
    }
  };
  var parse = {
    icon: function icon(_icon) {
      if (_icon === null) {
        return null;
      }
      if (_typeof(_icon) === 'object' && _icon.prefix && _icon.iconName) {
        return {
          prefix: _icon.prefix,
          iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
        };
      }
      if (Array.isArray(_icon) && _icon.length === 2) {
        var iconName = _icon[1].indexOf('fa-') === 0 ? _icon[1].slice(3) : _icon[1];
        var prefix = getCanonicalPrefix(_icon[0]);
        return {
          prefix: prefix,
          iconName: byAlias(prefix, iconName) || iconName
        };
      }
      if (typeof _icon === 'string' && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
        var canonicalIcon = getCanonicalIcon(_icon.split(' '), {
          skipLookups: true
        });
        return {
          prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
          iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
        };
      }
      if (typeof _icon === 'string') {
        var _prefix = getDefaultUsablePrefix();
        return {
          prefix: _prefix,
          iconName: byAlias(_prefix, _icon) || _icon
        };
      }
    }
  };
  var api = {
    noAuto: noAuto,
    config: config,
    dom: dom,
    parse: parse,
    library: library,
    findIconDefinition: findIconDefinition,
    toHtml: toHtml
  };
  var autoReplace = function autoReplace() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
    if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
      node: autoReplaceSvgRoot
    });
  };
  function bootstrap() {
    if (IS_BROWSER) {
      if (!WINDOW.FontAwesome) {
        WINDOW.FontAwesome = api;
      }
      domready(function () {
        autoReplace();
        callHooks('bootstrap');
      });
    }
    namespace.hooks = _objectSpread2(_objectSpread2({}, namespace.hooks), {}, {
      addPack: function addPack(prefix, icons) {
        namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), icons);
        build();
        autoReplace();
      },
      addPacks: function addPacks(packs) {
        packs.forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            prefix = _ref2[0],
            icons = _ref2[1];
          namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), icons);
        });
        build();
        autoReplace();
      },
      addShims: function addShims(shims) {
        var _namespace$shims;
        (_namespace$shims = namespace.shims).push.apply(_namespace$shims, _toConsumableArray(shims));
        build();
        autoReplace();
      }
    });
  }

  function domVariants(val, abstractCreator) {
    Object.defineProperty(val, 'abstract', {
      get: abstractCreator
    });
    Object.defineProperty(val, 'html', {
      get: function get() {
        return val.abstract.map(function (a) {
          return toHtml(a);
        });
      }
    });
    Object.defineProperty(val, 'node', {
      get: function get() {
        if (!IS_DOM) return undefined;
        var container = DOCUMENT.createElement('div');
        container.innerHTML = val.html;
        return container.children;
      }
    });
    return val;
  }

  function asIcon (_ref) {
    var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;
    if (transformIsMeaningful(transform) && main.found && !mask.found) {
      var width = main.width,
        height = main.height;
      var offset = {
        x: width / height / 2,
        y: 0.5
      };
      attributes['style'] = joinStyles(_objectSpread2(_objectSpread2({}, styles), {}, {
        'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
      }));
    }
    return [{
      tag: 'svg',
      attributes: attributes,
      children: children
    }];
  }

  function asSymbol (_ref) {
    var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
    var id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
    return [{
      tag: 'svg',
      attributes: {
        style: 'display: none;'
      },
      children: [{
        tag: 'symbol',
        attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
          id: id
        }),
        children: children
      }]
    }];
  }

  // If any of these attributes are present, don't assume the icon is decorative
  function isLabeled(attributes) {
    var labels = ['aria-label', 'aria-labelledby', 'title', 'role'];
    return labels.some(function (label) {
      return label in attributes;
    });
  }
  function makeInlineSvgAbstract(params) {
    var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      maskId = params.maskId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;
    var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;
    var attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ''].filter(function (c) {
      return extra.classes.indexOf(c) === -1;
    }).filter(function (c) {
      return c !== '' || !!c;
    }).concat(extra.classes).join(' ');
    var content = {
      children: [],
      attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
        'data-prefix': prefix,
        'data-icon': iconName,
        'class': attrClass,
        'role': extra.attributes.role || 'img',
        'viewBox': "0 0 ".concat(width, " ").concat(height)
      })
    };
    if (!isLabeled(extra.attributes) && !extra.attributes['aria-hidden']) {
      content.attributes['aria-hidden'] = 'true';
    }
    if (watchable) {
      content.attributes[DATA_FA_I2SVG] = '';
    }
    var args = _objectSpread2(_objectSpread2({}, content), {}, {
      prefix: prefix,
      iconName: iconName,
      main: main,
      mask: mask,
      maskId: maskId,
      transform: transform,
      symbol: symbol,
      styles: _objectSpread2({}, extra.styles)
    });
    var _ref2 = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
        children: [],
        attributes: {}
      } : callProvided('generateAbstractIcon', args) || {
        children: [],
        attributes: {}
      },
      children = _ref2.children,
      attributes = _ref2.attributes;
    args.children = children;
    args.attributes = attributes;
    if (symbol) {
      return asSymbol(args);
    } else {
      return asIcon(args);
    }
  }
  function makeLayersTextAbstract(params) {
    var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;
    var attributes = _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
      class: extra.classes.join(' ')
    });
    if (watchable) {
      attributes[DATA_FA_I2SVG] = '';
    }
    var styles = _objectSpread2({}, extra.styles);
    if (transformIsMeaningful(transform)) {
      styles['transform'] = transformForCss({
        transform: transform,
        startCentered: true,
        width: width,
        height: height
      });
      styles['-webkit-transform'] = styles['transform'];
    }
    var styleString = joinStyles(styles);
    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }
    var val = [];
    val.push({
      tag: 'span',
      attributes: attributes,
      children: [content]
    });
    return val;
  }
  function makeLayersCounterAbstract(params) {
    var content = params.content,
      extra = params.extra;
    var attributes = _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
      class: extra.classes.join(' ')
    });
    var styleString = joinStyles(extra.styles);
    if (styleString.length > 0) {
      attributes['style'] = styleString;
    }
    var val = [];
    val.push({
      tag: 'span',
      attributes: attributes,
      children: [content]
    });
    return val;
  }

  var styles$1 = namespace.styles;
  function asFoundIcon(icon) {
    var width = icon[0];
    var height = icon[1];
    var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];
    var element = null;
    if (Array.isArray(vectorData)) {
      element = {
        tag: 'g',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
        },
        children: [{
          tag: 'path',
          attributes: {
            class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
            fill: 'currentColor',
            d: vectorData[0]
          }
        }, {
          tag: 'path',
          attributes: {
            class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
            fill: 'currentColor',
            d: vectorData[1]
          }
        }]
      };
    } else {
      element = {
        tag: 'path',
        attributes: {
          fill: 'currentColor',
          d: vectorData
        }
      };
    }
    return {
      found: true,
      width: width,
      height: height,
      icon: element
    };
  }
  var missingIconResolutionMixin = {
    found: false,
    width: 512,
    height: 512
  };
  function maybeNotifyMissing(iconName, prefix) {
    if (!PRODUCTION && !config.showMissingIcons && iconName) {
      console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
    }
  }
  function findIcon(iconName, prefix) {
    var givenPrefix = prefix;
    if (prefix === 'fa' && config.styleDefault !== null) {
      prefix = getDefaultUsablePrefix();
    }
    return new Promise(function (resolve, reject) {
      if (givenPrefix === 'fa') {
        var shim = byOldName(iconName) || {};
        iconName = shim.iconName || iconName;
        prefix = shim.prefix || prefix;
      }
      if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
        var icon = styles$1[prefix][iconName];
        return resolve(asFoundIcon(icon));
      }
      maybeNotifyMissing(iconName, prefix);
      resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
        icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}
      }));
    });
  }

  var noop$1 = function noop() {};
  var p$2 = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
    mark: noop$1,
    measure: noop$1
  };
  var preamble = "FA \"7.1.0\"";
  var begin = function begin(name) {
    p$2.mark("".concat(preamble, " ").concat(name, " begins"));
    return function () {
      return end(name);
    };
  };
  var end = function end(name) {
    p$2.mark("".concat(preamble, " ").concat(name, " ends"));
    p$2.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
  };
  var perf = {
    begin: begin,
    end: end
  };

  var noop$2 = function noop() {};
  function isWatched(node) {
    var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
    return typeof i2svg === 'string';
  }
  function hasPrefixAndIcon(node) {
    var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
    var icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
    return prefix && icon;
  }
  function hasBeenReplaced(node) {
    return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
  }
  function getMutator() {
    if (config.autoReplaceSvg === true) {
      return mutators.replace;
    }
    var mutator = mutators[config.autoReplaceSvg];
    return mutator || mutators.replace;
  }
  function createElementNS(tag) {
    return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
  }
  function createElement(tag) {
    return DOCUMENT.createElement(tag);
  }
  function convertSVG(abstractObj) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$ceFn = params.ceFn,
      ceFn = _params$ceFn === void 0 ? abstractObj.tag === 'svg' ? createElementNS : createElement : _params$ceFn;
    if (typeof abstractObj === 'string') {
      return DOCUMENT.createTextNode(abstractObj);
    }
    var tag = ceFn(abstractObj.tag);
    Object.keys(abstractObj.attributes || []).forEach(function (key) {
      tag.setAttribute(key, abstractObj.attributes[key]);
    });
    var children = abstractObj.children || [];
    children.forEach(function (child) {
      tag.appendChild(convertSVG(child, {
        ceFn: ceFn
      }));
    });
    return tag;
  }
  function nodeAsComment(node) {
    var comment = " ".concat(node.outerHTML, " ");
    /* BEGIN.ATTRIBUTION */
    comment = "".concat(comment, "Font Awesome fontawesome.com ");
    /* END.ATTRIBUTION */
    return comment;
  }
  var mutators = {
    replace: function replace(mutation) {
      var node = mutation[0];
      if (node.parentNode) {
        mutation[1].forEach(function (abstract) {
          node.parentNode.insertBefore(convertSVG(abstract), node);
        });
        if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
          var comment = DOCUMENT.createComment(nodeAsComment(node));
          node.parentNode.replaceChild(comment, node);
        } else {
          node.remove();
        }
      }
    },
    nest: function nest(mutation) {
      var node = mutation[0];
      var abstract = mutation[1];

      // If we already have a replaced node we do not want to continue nesting within it.
      // Short-circuit to the standard replacement
      if (~classArray(node).indexOf(config.replacementClass)) {
        return mutators.replace(mutation);
      }
      var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
      delete abstract[0].attributes.id;
      if (abstract[0].attributes.class) {
        var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
          if (cls === config.replacementClass || cls.match(forSvg)) {
            acc.toSvg.push(cls);
          } else {
            acc.toNode.push(cls);
          }
          return acc;
        }, {
          toNode: [],
          toSvg: []
        });
        abstract[0].attributes.class = splitClasses.toSvg.join(' ');
        if (splitClasses.toNode.length === 0) {
          node.removeAttribute('class');
        } else {
          node.setAttribute('class', splitClasses.toNode.join(' '));
        }
      }
      var newInnerHTML = abstract.map(function (a) {
        return toHtml(a);
      }).join('\n');
      node.setAttribute(DATA_FA_I2SVG, '');
      node.innerHTML = newInnerHTML;
    }
  };
  function performOperationSync(op) {
    op();
  }
  function perform(mutations, callback) {
    var callbackFunction = typeof callback === 'function' ? callback : noop$2;
    if (mutations.length === 0) {
      callbackFunction();
    } else {
      var frame = performOperationSync;
      if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
        frame = WINDOW.requestAnimationFrame || performOperationSync;
      }
      frame(function () {
        var mutator = getMutator();
        var mark = perf.begin('mutate');
        mutations.map(mutator);
        mark();
        callbackFunction();
      });
    }
  }
  var disabled = false;
  function disableObservation() {
    disabled = true;
  }
  function enableObservation() {
    disabled = false;
  }
  var mo = null;
  function observe(options) {
    if (!MUTATION_OBSERVER) {
      return;
    }
    if (!config.observeMutations) {
      return;
    }
    var _options$treeCallback = options.treeCallback,
      treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback,
      _options$nodeCallback = options.nodeCallback,
      nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback,
      _options$pseudoElemen = options.pseudoElementsCallback,
      pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
    mo = new MUTATION_OBSERVER(function (objects) {
      if (disabled) return;
      var defaultPrefix = getDefaultUsablePrefix();
      toArray(objects).forEach(function (mutationRecord) {
        if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
          if (config.searchPseudoElements) {
            pseudoElementsCallback(mutationRecord.target);
          }
          treeCallback(mutationRecord.target);
        }
        if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
          pseudoElementsCallback([mutationRecord.target], true);
        }
        if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
          if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
            var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;
            mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
            if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
          } else if (hasBeenReplaced(mutationRecord.target)) {
            nodeCallback(mutationRecord.target);
          }
        }
      });
    });
    if (!IS_DOM) return;
    mo.observe(observeMutationsRoot, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    });
  }
  function disconnect() {
    if (!mo) return;
    mo.disconnect();
  }

  function styleParser (node) {
    var style = node.getAttribute('style');
    var val = [];
    if (style) {
      val = style.split(';').reduce(function (acc, style) {
        var styles = style.split(':');
        var prop = styles[0];
        var value = styles.slice(1);
        if (prop && value.length > 0) {
          acc[prop] = value.join(':').trim();
        }
        return acc;
      }, {});
    }
    return val;
  }

  function classParser (node) {
    var existingPrefix = node.getAttribute('data-prefix');
    var existingIconName = node.getAttribute('data-icon');
    var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
    var val = getCanonicalIcon(classArray(node));
    if (!val.prefix) {
      val.prefix = getDefaultUsablePrefix();
    }
    if (existingPrefix && existingIconName) {
      val.prefix = existingPrefix;
      val.iconName = existingIconName;
    }
    if (val.iconName && val.prefix) {
      return val;
    }
    if (val.prefix && innerText.length > 0) {
      val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
    }
    if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
      val.iconName = node.firstChild.data;
    }
    return val;
  }

  function attributesParser (node) {
    var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
      if (acc.name !== 'class' && acc.name !== 'style') {
        acc[attr.name] = attr.value;
      }
      return acc;
    }, {});
    return extraAttributes;
  }

  function blankMeta() {
    return {
      iconName: null,
      prefix: null,
      transform: meaninglessTransform,
      symbol: false,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      extra: {
        classes: [],
        styles: {},
        attributes: {}
      }
    };
  }
  function parseMeta(node) {
    var parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      styleParser: true
    };
    var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;
    var extraAttributes = attributesParser(node);
    var pluginMeta = chainHooks('parseNodeAttributes', {}, node);
    var extraStyles = parser.styleParser ? styleParser(node) : [];
    return _objectSpread2({
      iconName: iconName,
      prefix: prefix,
      transform: meaninglessTransform,
      mask: {
        iconName: null,
        prefix: null,
        rest: []
      },
      maskId: null,
      symbol: false,
      extra: {
        classes: extraClasses,
        styles: extraStyles,
        attributes: extraAttributes
      }
    }, pluginMeta);
  }

  var styles$2 = namespace.styles;
  function generateMutation(node) {
    var nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {
      styleParser: false
    }) : parseMeta(node);
    if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
      return callProvided('generateLayersText', node, nodeMeta);
    } else {
      return callProvided('generateSvgReplacementMutation', node, nodeMeta);
    }
  }
  function getKnownPrefixes() {
    return [].concat(_toConsumableArray(Yt), _toConsumableArray(Zt$1));
  }
  function onTree(root) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (!IS_DOM) return Promise.resolve();
    var htmlClassList = DOCUMENT.documentElement.classList;
    var hclAdd = function hclAdd(suffix) {
      return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };
    var hclRemove = function hclRemove(suffix) {
      return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
    };
    var prefixes = config.autoFetchSvg ? getKnownPrefixes() : Q.concat(Object.keys(styles$2));
    if (!prefixes.includes('fa')) {
      prefixes.push('fa');
    }
    var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p$$1) {
      return ".".concat(p$$1, ":not([").concat(DATA_FA_I2SVG, "])");
    })).join(', ');
    if (prefixesDomQuery.length === 0) {
      return Promise.resolve();
    }
    var candidates = [];
    try {
      candidates = toArray(root.querySelectorAll(prefixesDomQuery));
    } catch (e$$1) {
      // noop
    }
    if (candidates.length > 0) {
      hclAdd('pending');
      hclRemove('complete');
    } else {
      return Promise.resolve();
    }
    var mark = perf.begin('onTree');
    var mutations = candidates.reduce(function (acc, node) {
      try {
        var mutation = generateMutation(node);
        if (mutation) {
          acc.push(mutation);
        }
      } catch (e$$1) {
        if (!PRODUCTION) {
          if (e$$1.name === 'MissingIcon') {
            console.error(e$$1);
          }
        }
      }
      return acc;
    }, []);
    return new Promise(function (resolve, reject) {
      Promise.all(mutations).then(function (resolvedMutations) {
        perform(resolvedMutations, function () {
          hclAdd('active');
          hclAdd('complete');
          hclRemove('pending');
          if (typeof callback === 'function') callback();
          mark();
          resolve();
        });
      }).catch(function (e$$1) {
        mark();
        reject(e$$1);
      });
    });
  }
  function onNode(node) {
    var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    generateMutation(node).then(function (mutation) {
      if (mutation) {
        perform([mutation], callback);
      }
    });
  }
  function resolveIcons(next) {
    return function (maybeIconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
      var mask = params.mask;
      if (mask) {
        mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
      }
      return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
        mask: mask
      }));
    };
  }
  var render = function render(iconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
    if (!iconDefinition) return;
    var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
    return domVariants(_objectSpread2({
      type: 'icon'
    }, iconDefinition), function () {
      callHooks('beforeDOMElementCreation', {
        iconDefinition: iconDefinition,
        params: params
      });
      return makeInlineSvgAbstract({
        icons: {
          main: asFoundIcon(icon),
          mask: mask ? asFoundIcon(mask.icon) : {
            found: false,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: prefix,
        iconName: iconName,
        transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
        symbol: symbol,
        maskId: maskId,
        extra: {
          attributes: attributes,
          styles: styles,
          classes: classes
        }
      });
    });
  };
  var ReplaceElements = {
    mixout: function mixout() {
      return {
        icon: resolveIcons(render)
      };
    },
    hooks: function hooks() {
      return {
        mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
          accumulator.treeCallback = onTree;
          accumulator.nodeCallback = onNode;
          return accumulator;
        }
      };
    },
    provides: function provides(providers$$1) {
      providers$$1.i2svg = function (params) {
        var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;
        return onTree(node, callback);
      };
      providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
        var iconName = nodeMeta.iconName,
          prefix = nodeMeta.prefix,
          transform = nodeMeta.transform,
          symbol = nodeMeta.symbol,
          mask = nodeMeta.mask,
          maskId = nodeMeta.maskId,
          extra = nodeMeta.extra;
        return new Promise(function (resolve, reject) {
          Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
            found: false,
            width: 512,
            height: 512,
            icon: {}
          })]).then(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
              main = _ref2[0],
              mask = _ref2[1];
            resolve([node, makeInlineSvgAbstract({
              icons: {
                main: main,
                mask: mask
              },
              prefix: prefix,
              iconName: iconName,
              transform: transform,
              symbol: symbol,
              maskId: maskId,
              extra: extra,
              watchable: true
            })]);
          }).catch(reject);
        });
      };
      providers$$1.generateAbstractIcon = function (_ref3) {
        var children = _ref3.children,
          attributes = _ref3.attributes,
          main = _ref3.main,
          transform = _ref3.transform,
          styles = _ref3.styles;
        var styleString = joinStyles(styles);
        if (styleString.length > 0) {
          attributes['style'] = styleString;
        }
        var nextChild;
        if (transformIsMeaningful(transform)) {
          nextChild = callProvided('generateAbstractTransformGrouping', {
            main: main,
            transform: transform,
            containerWidth: main.width,
            iconWidth: main.width
          });
        }
        children.push(nextChild || main.icon);
        return {
          children: children,
          attributes: attributes
        };
      };
    }
  };

  var Layers = {
    mixout: function mixout() {
      return {
        layer: function layer(assembler) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes;
          return domVariants({
            type: 'layer'
          }, function () {
            callHooks('beforeDOMElementCreation', {
              assembler: assembler,
              params: params
            });
            var children = [];
            assembler(function (args) {
              Array.isArray(args) ? args.map(function (a) {
                children = children.concat(a.abstract);
              }) : children = children.concat(args.abstract);
            });
            return [{
              tag: 'span',
              attributes: {
                class: ["".concat(config.cssPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
              },
              children: children
            }];
          });
        }
      };
    }
  };

  var LayersCounter = {
    mixout: function mixout() {
      return {
        counter: function counter(content) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _params$title = params.title,
            title = _params$title === void 0 ? null : _params$title,
            _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes = _params$attributes === void 0 ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === void 0 ? {} : _params$styles;
          return domVariants({
            type: 'counter',
            content: content
          }, function () {
            callHooks('beforeDOMElementCreation', {
              content: content,
              params: params
            });
            return makeLayersCounterAbstract({
              content: content.toString(),
              title: title,
              extra: {
                attributes: attributes,
                styles: styles,
                classes: ["".concat(config.cssPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
              }
            });
          });
        }
      };
    }
  };

  var LayersText = {
    mixout: function mixout() {
      return {
        text: function text(content) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _params$transform = params.transform,
            transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
            _params$classes = params.classes,
            classes = _params$classes === void 0 ? [] : _params$classes,
            _params$attributes = params.attributes,
            attributes = _params$attributes === void 0 ? {} : _params$attributes,
            _params$styles = params.styles,
            styles = _params$styles === void 0 ? {} : _params$styles;
          return domVariants({
            type: 'text',
            content: content
          }, function () {
            callHooks('beforeDOMElementCreation', {
              content: content,
              params: params
            });
            return makeLayersTextAbstract({
              content: content,
              transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
              extra: {
                attributes: attributes,
                styles: styles,
                classes: ["".concat(config.cssPrefix, "-layers-text")].concat(_toConsumableArray(classes))
              }
            });
          });
        }
      };
    },
    provides: function provides(providers$$1) {
      providers$$1.generateLayersText = function (node, nodeMeta) {
        var transform = nodeMeta.transform,
          extra = nodeMeta.extra;
        var width = null;
        var height = null;
        if (IS_IE) {
          var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
          var boundingClientRect = node.getBoundingClientRect();
          width = boundingClientRect.width / computedFontSize;
          height = boundingClientRect.height / computedFontSize;
        }
        return Promise.resolve([node, makeLayersTextAbstract({
          content: node.innerHTML,
          width: width,
          height: height,
          transform: transform,
          extra: extra,
          watchable: true
        })]);
      };
    }
  };

  var CLEAN_CONTENT_PATTERN = new RegExp("\"", 'ug');
  var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
  var _FONT_FAMILY_WEIGHT_TO_PREFIX = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
    FontAwesome: {
      normal: 'fas',
      400: 'fas'
    }
  }), Ct), ro), dl);
  var FONT_FAMILY_WEIGHT_TO_PREFIX = Object.keys(_FONT_FAMILY_WEIGHT_TO_PREFIX).reduce(function (acc, key) {
    acc[key.toLowerCase()] = _FONT_FAMILY_WEIGHT_TO_PREFIX[key];
    return acc;
  }, {});
  var FONT_FAMILY_WEIGHT_FALLBACK = Object.keys(FONT_FAMILY_WEIGHT_TO_PREFIX).reduce(function (acc, fontFamily) {
    var weights = FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamily];
    acc[fontFamily] = weights[900] || _toConsumableArray(Object.entries(weights))[0][1];
    return acc;
  }, {});

  // Return hex value of *first* character in `content`
  function hexValueFromContent(content) {
    var cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
    return toHex(_toConsumableArray(cleaned)[0] || '');
  }

  // Check if it's a secondary Duotone layer, by checking if:
  // - Unicode value in `content` is repeated
  // - Unicode value in `content` is above 0x10000
  // - The "ss01" font feature is enabled on the `content`
  function isSecondaryLayer(styles) {
    var hasStylisticSet = styles.getPropertyValue('font-feature-settings').includes('ss01');
    var content = styles.getPropertyValue('content');
    var cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
    var codePoint = cleaned.codePointAt(0);
    var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
    var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
    return isPrependTen || isDoubled || hasStylisticSet;
  }
  function getPrefix(fontFamily, fontWeight) {
    var fontFamilySanitized = fontFamily.replace(/^['"]|['"]$/g, '').toLowerCase();
    var fontWeightInteger = parseInt(fontWeight);
    var fontWeightSanitized = isNaN(fontWeightInteger) ? 'normal' : fontWeightInteger;
    return (FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamilySanitized] || {})[fontWeightSanitized] || FONT_FAMILY_WEIGHT_FALLBACK[fontFamilySanitized];
  }
  function replaceForPosition(node, position) {
    var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
    return new Promise(function (resolve, reject) {
      if (node.getAttribute(pendingAttribute) !== null) {
        // This node is already being processed
        return resolve();
      }
      var children = toArray(node.children);
      var alreadyProcessedPseudoElement = children.filter(function (c$$1) {
        return c$$1.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
      })[0];
      var styles = WINDOW.getComputedStyle(node, position);
      var fontFamily = styles.getPropertyValue('font-family');
      var fontFamilyMatch = fontFamily.match(FONT_FAMILY_PATTERN);
      var fontWeight = styles.getPropertyValue('font-weight');
      var content = styles.getPropertyValue('content');
      if (alreadyProcessedPseudoElement && !fontFamilyMatch) {
        // If we've already processed it but the current computed style does not result in a font-family,
        // that probably means that a class name that was previously present to make the icon has been
        // removed. So we now should delete the icon.
        node.removeChild(alreadyProcessedPseudoElement);
        return resolve();
      } else if (fontFamilyMatch && content !== 'none' && content !== '') {
        var _content = styles.getPropertyValue('content');
        var prefix = getPrefix(fontFamily, fontWeight);
        var hexValue = hexValueFromContent(_content);
        var isV4 = fontFamilyMatch[0].startsWith('FontAwesome');
        var isSecondary = isSecondaryLayer(styles);
        var iconName = byUnicode(prefix, hexValue);
        var iconIdentifier = iconName;
        if (isV4) {
          var iconName4 = byOldUnicode(hexValue);
          if (iconName4.iconName && iconName4.prefix) {
            iconName = iconName4.iconName;
            prefix = iconName4.prefix;
          }
        }

        // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
        // already done so with the same prefix and iconName
        if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
          node.setAttribute(pendingAttribute, iconIdentifier);
          if (alreadyProcessedPseudoElement) {
            // Delete the old one, since we're replacing it with a new one
            node.removeChild(alreadyProcessedPseudoElement);
          }
          var meta = blankMeta();
          var extra = meta.extra;
          extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
          findIcon(iconName, prefix).then(function (main) {
            var abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
              icons: {
                main: main,
                mask: emptyCanonicalIcon()
              },
              prefix: prefix,
              iconName: iconIdentifier,
              extra: extra,
              watchable: true
            }));
            var element = DOCUMENT.createElementNS('http://www.w3.org/2000/svg', 'svg');
            if (position === '::before') {
              node.insertBefore(element, node.firstChild);
            } else {
              node.appendChild(element);
            }
            element.outerHTML = abstract.map(function (a$$1) {
              return toHtml(a$$1);
            }).join('\n');
            node.removeAttribute(pendingAttribute);
            resolve();
          }).catch(reject);
        } else {
          resolve();
        }
      } else {
        resolve();
      }
    });
  }
  function replace(node) {
    return Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]);
  }
  function processable(node) {
    return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
  }
  var hasPseudoElement = function hasPseudoElement(selector) {
    return !!selector && PSEUDO_ELEMENTS.some(function (pseudoSelector) {
      return selector.includes(pseudoSelector);
    });
  };

  // Return selectors from all available stylesheets that have
  // pseudo-elements defined.
  var parseCSSRuleForPseudos = function parseCSSRuleForPseudos(selectorText) {
    if (!selectorText) return [];
    var selectorSet = new Set();
    var selectors = selectorText.split(/,(?![^()]*\))/).map(function (s$$1) {
      return s$$1.trim();
    });
    selectors = selectors.flatMap(function (selector) {
      return selector.includes('(') ? selector : selector.split(',').map(function (s$$1) {
        return s$$1.trim();
      });
    });
    var _iterator = _createForOfIteratorHelper(selectors),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var selector = _step.value;
        if (hasPseudoElement(selector)) {
          // Remove pseudo-elements from the selector
          var selectorWithoutPseudo = PSEUDO_ELEMENTS.reduce(function (acc, pseudoSelector) {
            return acc.replace(pseudoSelector, '');
          }, selector);
          if (selectorWithoutPseudo !== '' && selectorWithoutPseudo !== '*') {
            selectorSet.add(selectorWithoutPseudo);
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return selectorSet;
  };
  function searchPseudoElements(root) {
    var useAsNodeList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!IS_DOM) return;
    var nodeList;
    if (useAsNodeList) {
      nodeList = root;
    } else if (config.searchPseudoElementsFullScan) {
      nodeList = root.querySelectorAll('*');
    } else {
      // Get elements that have pseudo elements defined in the CSS
      var selectorSet = new Set();
      var _iterator2 = _createForOfIteratorHelper(document.styleSheets),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var stylesheet = _step2.value;
          try {
            var _iterator3 = _createForOfIteratorHelper(stylesheet.cssRules),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var rule = _step3.value;
                var parsedSelectors = parseCSSRuleForPseudos(rule.selectorText);
                var _iterator4 = _createForOfIteratorHelper(parsedSelectors),
                  _step4;
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var selector = _step4.value;
                    selectorSet.add(selector);
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          } catch (e$$1) {
            if (config.searchPseudoElementsWarnings) {
              console.warn("Font Awesome: cannot parse stylesheet: ".concat(stylesheet.href, " (").concat(e$$1.message, ")\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin=\"anonymous\" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false."));
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (!selectorSet.size) return;
      var cleanSelectors = Array.from(selectorSet).join(', ');
      try {
        nodeList = root.querySelectorAll(cleanSelectors);
      } catch (_unused) {} // eslint-disable-line no-empty
    }
    return new Promise(function (resolve, reject) {
      var operations = toArray(nodeList).filter(processable).map(replace);
      var end = perf.begin('searchPseudoElements');
      disableObservation();
      Promise.all(operations).then(function () {
        end();
        enableObservation();
        resolve();
      }).catch(function () {
        end();
        enableObservation();
        reject();
      });
    });
  }
  var PseudoElements = {
    hooks: function hooks() {
      return {
        mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
          accumulator.pseudoElementsCallback = searchPseudoElements;
          return accumulator;
        }
      };
    },
    provides: function provides(providers) {
      providers.pseudoElements2svg = function (params) {
        var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node;
        if (config.searchPseudoElements) {
          searchPseudoElements(node);
        }
      };
    }
  };

  var _unwatched = false;
  var MutationObserver$1 = {
    mixout: function mixout() {
      return {
        dom: {
          unwatch: function unwatch() {
            disableObservation();
            _unwatched = true;
          }
        }
      };
    },
    hooks: function hooks() {
      return {
        bootstrap: function bootstrap() {
          observe(chainHooks('mutationObserverCallbacks', {}));
        },
        noAuto: function noAuto() {
          disconnect();
        },
        watch: function watch(params) {
          var observeMutationsRoot = params.observeMutationsRoot;
          if (_unwatched) {
            enableObservation();
          } else {
            observe(chainHooks('mutationObserverCallbacks', {
              observeMutationsRoot: observeMutationsRoot
            }));
          }
        }
      };
    }
  };

  var parseTransformString = function parseTransformString(transformString) {
    var transform = {
      size: 16,
      x: 0,
      y: 0,
      flipX: false,
      flipY: false,
      rotate: 0
    };
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');
      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }
      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }
      rest = parseFloat(rest);
      if (isNaN(rest)) {
        return acc;
      }
      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;
        case 'shrink':
          acc.size = acc.size - rest;
          break;
        case 'left':
          acc.x = acc.x - rest;
          break;
        case 'right':
          acc.x = acc.x + rest;
          break;
        case 'up':
          acc.y = acc.y - rest;
          break;
        case 'down':
          acc.y = acc.y + rest;
          break;
        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }
      return acc;
    }, transform);
  };
  var PowerTransforms = {
    mixout: function mixout() {
      return {
        parse: {
          transform: function transform(transformString) {
            return parseTransformString(transformString);
          }
        }
      };
    },
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var transformString = node.getAttribute('data-fa-transform');
          if (transformString) {
            accumulator.transform = parseTransformString(transformString);
          }
          return accumulator;
        }
      };
    },
    provides: function provides(providers) {
      providers.generateAbstractTransformGrouping = function (_ref) {
        var main = _ref.main,
          transform = _ref.transform,
          containerWidth = _ref.containerWidth,
          iconWidth = _ref.iconWidth;
        var outer = {
          transform: "translate(".concat(containerWidth / 2, " 256)")
        };
        var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
        var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
        var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
        var inner = {
          transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
        };
        var path = {
          transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
        };
        var operations = {
          outer: outer,
          inner: inner,
          path: path
        };
        return {
          tag: 'g',
          attributes: _objectSpread2({}, operations.outer),
          children: [{
            tag: 'g',
            attributes: _objectSpread2({}, operations.inner),
            children: [{
              tag: main.icon.tag,
              children: main.icon.children,
              attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
            }]
          }]
        };
      };
    }
  };

  var ALL_SPACE = {
    x: 0,
    y: 0,
    width: '100%',
    height: '100%'
  };
  function fillBlack(abstract) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (abstract.attributes && (abstract.attributes.fill || force)) {
      abstract.attributes.fill = 'black';
    }
    return abstract;
  }
  function deGroup(abstract) {
    if (abstract.tag === 'g') {
      return abstract.children;
    } else {
      return [abstract];
    }
  }
  var Masks = {
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var maskData = node.getAttribute('data-fa-mask');
          var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(function (i) {
            return i.trim();
          }));
          if (!mask.prefix) {
            mask.prefix = getDefaultUsablePrefix();
          }
          accumulator.mask = mask;
          accumulator.maskId = node.getAttribute('data-fa-mask-id');
          return accumulator;
        }
      };
    },
    provides: function provides(providers) {
      providers.generateAbstractMask = function (_ref) {
        var children = _ref.children,
          attributes = _ref.attributes,
          main = _ref.main,
          mask = _ref.mask,
          explicitMaskId = _ref.maskId,
          transform = _ref.transform;
        var mainWidth = main.width,
          mainPath = main.icon;
        var maskWidth = mask.width,
          maskPath = mask.icon;
        var trans = transformForSvg({
          transform: transform,
          containerWidth: maskWidth,
          iconWidth: mainWidth
        });
        var maskRect = {
          tag: 'rect',
          attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
            fill: 'white'
          })
        };
        var maskInnerGroupChildrenMixin = mainPath.children ? {
          children: mainPath.children.map(fillBlack)
        } : {};
        var maskInnerGroup = {
          tag: 'g',
          attributes: _objectSpread2({}, trans.inner),
          children: [fillBlack(_objectSpread2({
            tag: mainPath.tag,
            attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
          }, maskInnerGroupChildrenMixin))]
        };
        var maskOuterGroup = {
          tag: 'g',
          attributes: _objectSpread2({}, trans.outer),
          children: [maskInnerGroup]
        };
        var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
        var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
        var maskTag = {
          tag: 'mask',
          attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
            id: maskId,
            maskUnits: 'userSpaceOnUse',
            maskContentUnits: 'userSpaceOnUse'
          }),
          children: [maskRect, maskOuterGroup]
        };
        var defs = {
          tag: 'defs',
          children: [{
            tag: 'clipPath',
            attributes: {
              id: clipId
            },
            children: deGroup(maskPath)
          }, maskTag]
        };
        children.push(defs, {
          tag: 'rect',
          attributes: _objectSpread2({
            'fill': 'currentColor',
            'clip-path': "url(#".concat(clipId, ")"),
            'mask': "url(#".concat(maskId, ")")
          }, ALL_SPACE)
        });
        return {
          children: children,
          attributes: attributes
        };
      };
    }
  };

  var MissingIconIndicator = {
    provides: function provides(providers) {
      var reduceMotion = false;
      if (WINDOW.matchMedia) {
        reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
      }
      providers.missingIconAbstract = function () {
        var gChildren = [];
        var FILL = {
          fill: 'currentColor'
        };
        var ANIMATION_BASE = {
          attributeType: 'XML',
          repeatCount: 'indefinite',
          dur: '2s'
        };

        // Ring
        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
          })
        });
        var OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
          attributeName: 'opacity'
        });
        var dot = {
          tag: 'circle',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            cx: '256',
            cy: '364',
            r: '28'
          }),
          children: []
        };
        if (!reduceMotion) {
          dot.children.push({
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
              attributeName: 'r',
              values: '28;14;28;28;14;28;'
            })
          }, {
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '1;0;1;1;0;1;'
            })
          });
        }
        gChildren.push(dot);
        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: '1',
            d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
          }),
          children: reduceMotion ? [] : [{
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '1;0;0;0;0;1;'
            })
          }]
        });
        if (!reduceMotion) {
          // Exclamation
          gChildren.push({
            tag: 'path',
            attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
              opacity: '0',
              d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
            }),
            children: [{
              tag: 'animate',
              attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
                values: '0;0;1;1;0;0;'
              })
            }]
          });
        }
        return {
          tag: 'g',
          attributes: {
            class: 'missing'
          },
          children: gChildren
        };
      };
    }
  };

  var SvgSymbols = {
    hooks: function hooks() {
      return {
        parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
          var symbolData = node.getAttribute('data-fa-symbol');
          var symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
          accumulator['symbol'] = symbol;
          return accumulator;
        }
      };
    }
  };

  var plugins = [InjectCSS, ReplaceElements, Layers, LayersCounter, LayersText, PseudoElements, MutationObserver$1, PowerTransforms, Masks, MissingIconIndicator, SvgSymbols];

  registerPlugins(plugins, {
    mixoutsTo: api
  });
  bunker(bootstrap);

}());


/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/scss/brands.scss":
/*!*********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/scss/brands.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss":
/*!**************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/scss/regular.scss":
/*!**********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/scss/regular.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/scss/solid.scss":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/scss/solid.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2":
/*!*********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2 ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/fa-brands-400.1c5c7716.woff2";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2":
/*!**********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2 ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/fa-regular-400.6f05ca9a.woff2";

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2":
/*!********************************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2 ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/fa-solid-900.8ae0d375.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/bundles/tabler/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*****************************************!*\
  !*** ./assets/includes/font-awesome.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free */ "./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_free_webfonts_fa_regular_400_woff2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2 */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2");
/* harmony import */ var _fortawesome_fontawesome_free_webfonts_fa_solid_900_woff2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2 */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2");
/* harmony import */ var _fortawesome_fontawesome_free_webfonts_fa_brands_400_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2 */ "./node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2");
/* harmony import */ var _fortawesome_fontawesome_free_scss_fontawesome_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/scss/fontawesome.scss */ "./node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss");
/* harmony import */ var _fortawesome_fontawesome_free_scss_solid_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free/scss/solid.scss */ "./node_modules/@fortawesome/fontawesome-free/scss/solid.scss");
/* harmony import */ var _fortawesome_fontawesome_free_scss_brands_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-free/scss/brands.scss */ "./node_modules/@fortawesome/fontawesome-free/scss/brands.scss");
/* harmony import */ var _fortawesome_fontawesome_free_scss_regular_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-free/scss/regular.scss */ "./node_modules/@fortawesome/fontawesome-free/scss/regular.scss");








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFD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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixpRUFBaUUsZ0NBQWdDO0FBQ2pHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQSxPQUFPLElBQUk7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGVBQWU7QUFDZjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELHNEQUFzRDtBQUMxRztBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUYsYUFBYTtBQUNoRztBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0EsbUVBQW1FLDhCQUE4QjtBQUNqRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsYUFBYTtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLCtGQUErRixlQUFlO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87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QUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBSTtBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELDJFQUEyRTtBQUNoSTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUE2QztBQUN2RTtBQUNBLGtFQUFrRSxhQUFhO0FBQy9FO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSx5REFBeUQ7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFELGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLDJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBd0Q7QUFDYTtBQUNGO0FBQ0M7QUFFUDtBQUNOO0FBQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvZm9udGF3ZXNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3Njc3MvYnJhbmRzLnNjc3M/MzFmOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvc2Nzcy9mb250YXdlc29tZS5zY3NzP2I4NjAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3Njc3MvcmVndWxhci5zY3NzP2U1YmYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3Njc3Mvc29saWQuc2Nzcz9kMzk2Iiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2luY2x1ZGVzL2ZvbnQtYXdlc29tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEZvbnQgQXdlc29tZSBGcmVlIDcuMS4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tXG4gKiBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKVxuICogQ29weXJpZ2h0IDIwMjUgRm9udGljb25zLCBJbmMuXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShyLCBhKSB7XG4gICAgKG51bGwgPT0gYSB8fCBhID4gci5sZW5ndGgpICYmIChhID0gci5sZW5ndGgpO1xuICAgIGZvciAodmFyIGUgPSAwLCBuID0gQXJyYXkoYSk7IGUgPCBhOyBlKyspIG5bZV0gPSByW2VdO1xuICAgIHJldHVybiBuO1xuICB9XG4gIGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocikpIHJldHVybiByO1xuICB9XG4gIGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShyKTtcbiAgfVxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soYSwgbikge1xuICAgIGlmICghKGEgaW5zdGFuY2VvZiBuKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyhlLCByKSB7XG4gICAgZm9yICh2YXIgdCA9IDA7IHQgPCByLmxlbmd0aDsgdCsrKSB7XG4gICAgICB2YXIgbyA9IHJbdF07XG4gICAgICBvLmVudW1lcmFibGUgPSBvLmVudW1lcmFibGUgfHwgITEsIG8uY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBvICYmIChvLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgX3RvUHJvcGVydHlLZXkoby5rZXkpLCBvKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKGUsIHIsIHQpIHtcbiAgICByZXR1cm4gciAmJiBfZGVmaW5lUHJvcGVydGllcyhlLnByb3RvdHlwZSwgciksIHQgJiYgX2RlZmluZVByb3BlcnRpZXMoZSwgdCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcInByb3RvdHlwZVwiLCB7XG4gICAgICB3cml0YWJsZTogITFcbiAgICB9KSwgZTtcbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihyLCBlKSB7XG4gICAgdmFyIHQgPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgcltTeW1ib2wuaXRlcmF0b3JdIHx8IHJbXCJAQGl0ZXJhdG9yXCJdO1xuICAgIGlmICghdCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocikgfHwgKHQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkocikpIHx8IGUgJiYgciAmJiBcIm51bWJlclwiID09IHR5cGVvZiByLmxlbmd0aCkge1xuICAgICAgICB0ICYmIChyID0gdCk7XG4gICAgICAgIHZhciBuID0gMCxcbiAgICAgICAgICBGID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgczogRixcbiAgICAgICAgICBuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbiA+PSByLmxlbmd0aCA/IHtcbiAgICAgICAgICAgICAgZG9uZTogITBcbiAgICAgICAgICAgIH0gOiB7XG4gICAgICAgICAgICAgIGRvbmU6ICExLFxuICAgICAgICAgICAgICB2YWx1ZTogcltuKytdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZTogZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgIHRocm93IHI7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmOiBGXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gICAgfVxuICAgIHZhciBvLFxuICAgICAgYSA9ICEwLFxuICAgICAgdSA9ICExO1xuICAgIHJldHVybiB7XG4gICAgICBzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHQgPSB0LmNhbGwocik7XG4gICAgICB9LFxuICAgICAgbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgciA9IHQubmV4dCgpO1xuICAgICAgICByZXR1cm4gYSA9IHIuZG9uZSwgcjtcbiAgICAgIH0sXG4gICAgICBlOiBmdW5jdGlvbiAocikge1xuICAgICAgICB1ID0gITAsIG8gPSByO1xuICAgICAgfSxcbiAgICAgIGY6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhIHx8IG51bGwgPT0gdC5yZXR1cm4gfHwgdC5yZXR1cm4oKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAodSkgdGhyb3cgbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsIHIsIHQpIHtcbiAgICByZXR1cm4gKHIgPSBfdG9Qcm9wZXJ0eUtleShyKSkgaW4gZSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCB7XG4gICAgICB2YWx1ZTogdCxcbiAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgIHdyaXRhYmxlOiAhMFxuICAgIH0pIDogZVtyXSA9IHQsIGU7XG4gIH1cbiAgZnVuY3Rpb24gX2luaGVyaXRzKHQsIGUpIHtcbiAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBlICYmIG51bGwgIT09IGUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoZSAmJiBlLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IHQsXG4gICAgICAgIHdyaXRhYmxlOiAhMCxcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgfVxuICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJwcm90b3R5cGVcIiwge1xuICAgICAgd3JpdGFibGU6ICExXG4gICAgfSksIGUgJiYgX3NldFByb3RvdHlwZU9mKHQsIGUpO1xuICB9XG4gIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkocikge1xuICAgIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgbnVsbCAhPSByW1N5bWJvbC5pdGVyYXRvcl0gfHwgbnVsbCAhPSByW1wiQEBpdGVyYXRvclwiXSkgcmV0dXJuIEFycmF5LmZyb20ocik7XG4gIH1cbiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KHIsIGwpIHtcbiAgICB2YXIgdCA9IG51bGwgPT0gciA/IG51bGwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgcltTeW1ib2wuaXRlcmF0b3JdIHx8IHJbXCJAQGl0ZXJhdG9yXCJdO1xuICAgIGlmIChudWxsICE9IHQpIHtcbiAgICAgIHZhciBlLFxuICAgICAgICBuLFxuICAgICAgICBpLFxuICAgICAgICB1LFxuICAgICAgICBhID0gW10sXG4gICAgICAgIGYgPSAhMCxcbiAgICAgICAgbyA9ICExO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGkgPSAodCA9IHQuY2FsbChyKSkubmV4dCwgMCA9PT0gbCkge1xuICAgICAgICAgIGlmIChPYmplY3QodCkgIT09IHQpIHJldHVybjtcbiAgICAgICAgICBmID0gITE7XG4gICAgICAgIH0gZWxzZSBmb3IgKDsgIShmID0gKGUgPSBpLmNhbGwodCkpLmRvbmUpICYmIChhLnB1c2goZS52YWx1ZSksIGEubGVuZ3RoICE9PSBsKTsgZiA9ICEwKTtcbiAgICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgICAgbyA9ICEwLCBuID0gcjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFmICYmIG51bGwgIT0gdC5yZXR1cm4gJiYgKHUgPSB0LnJldHVybigpLCBPYmplY3QodSkgIT09IHUpKSByZXR1cm47XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKG8pIHRocm93IG47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gIH1cbiAgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICB9XG4gIGZ1bmN0aW9uIG93bktleXMoZSwgcikge1xuICAgIHZhciB0ID0gT2JqZWN0LmtleXMoZSk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtcbiAgICAgIHIgJiYgKG8gPSBvLmZpbHRlcihmdW5jdGlvbiAocikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9XG4gIGZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKGUpIHtcbiAgICBmb3IgKHZhciByID0gMTsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykge1xuICAgICAgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9O1xuICAgICAgciAlIDIgPyBvd25LZXlzKE9iamVjdCh0KSwgITApLmZvckVhY2goZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KGUsIHIsIHRbcl0pO1xuICAgICAgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHQpKSA6IG93bktleXMoT2JqZWN0KHQpKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIHIpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZTtcbiAgfVxuICBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YodCwgZSkge1xuICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gKHQsIGUpIHtcbiAgICAgIHJldHVybiB0Ll9fcHJvdG9fXyA9IGUsIHQ7XG4gICAgfSwgX3NldFByb3RvdHlwZU9mKHQsIGUpO1xuICB9XG4gIGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KHIsIGUpIHtcbiAgICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKHIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChyLCBlKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgZSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xuICB9XG4gIGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShyKSB7XG4gICAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhyKSB8fCBfaXRlcmFibGVUb0FycmF5KHIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbiAgfVxuICBmdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikge1xuICAgIGlmIChcIm9iamVjdFwiICE9IHR5cGVvZiB0IHx8ICF0KSByZXR1cm4gdDtcbiAgICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgICB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTtcbiAgICAgIGlmIChcIm9iamVjdFwiICE9IHR5cGVvZiBpKSByZXR1cm4gaTtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTtcbiAgfVxuICBmdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7XG4gICAgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7XG4gICAgcmV0dXJuIFwic3ltYm9sXCIgPT0gdHlwZW9mIGkgPyBpIDogaSArIFwiXCI7XG4gIH1cbiAgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gICAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gICAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvO1xuICAgIH0gOiBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gICAgfSwgX3R5cGVvZihvKTtcbiAgfVxuICBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgYSkge1xuICAgIGlmIChyKSB7XG4gICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgcikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KHIsIGEpO1xuICAgICAgdmFyIHQgPSB7fS50b1N0cmluZy5jYWxsKHIpLnNsaWNlKDgsIC0xKTtcbiAgICAgIHJldHVybiBcIk9iamVjdFwiID09PSB0ICYmIHIuY29uc3RydWN0b3IgJiYgKHQgPSByLmNvbnN0cnVjdG9yLm5hbWUpLCBcIk1hcFwiID09PSB0IHx8IFwiU2V0XCIgPT09IHQgPyBBcnJheS5mcm9tKHIpIDogXCJBcmd1bWVudHNcIiA9PT0gdCB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdCh0KSA/IF9hcnJheUxpa2VUb0FycmF5KHIsIGEpIDogdm9pZCAwO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfd3JhcFJlZ0V4cCgpIHtcbiAgICBfd3JhcFJlZ0V4cCA9IGZ1bmN0aW9uIChlLCByKSB7XG4gICAgICByZXR1cm4gbmV3IEJhYmVsUmVnRXhwKGUsIHZvaWQgMCwgcik7XG4gICAgfTtcbiAgICB2YXIgZSA9IFJlZ0V4cC5wcm90b3R5cGUsXG4gICAgICByID0gbmV3IFdlYWtNYXAoKTtcbiAgICBmdW5jdGlvbiBCYWJlbFJlZ0V4cChlLCB0LCBwKSB7XG4gICAgICB2YXIgbyA9IFJlZ0V4cChlLCB0KTtcbiAgICAgIHJldHVybiByLnNldChvLCBwIHx8IHIuZ2V0KGUpKSwgX3NldFByb3RvdHlwZU9mKG8sIEJhYmVsUmVnRXhwLnByb3RvdHlwZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJ1aWxkR3JvdXBzKGUsIHQpIHtcbiAgICAgIHZhciBwID0gci5nZXQodCk7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMocCkucmVkdWNlKGZ1bmN0aW9uIChyLCB0KSB7XG4gICAgICAgIHZhciBvID0gcFt0XTtcbiAgICAgICAgaWYgKFwibnVtYmVyXCIgPT0gdHlwZW9mIG8pIHJbdF0gPSBlW29dO2Vsc2Uge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyB2b2lkIDAgPT09IGVbb1tpXV0gJiYgaSArIDEgPCBvLmxlbmd0aDspIGkrKztcbiAgICAgICAgICByW3RdID0gZVtvW2ldXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICAgIH1cbiAgICByZXR1cm4gX2luaGVyaXRzKEJhYmVsUmVnRXhwLCBSZWdFeHApLCBCYWJlbFJlZ0V4cC5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uIChyKSB7XG4gICAgICB2YXIgdCA9IGUuZXhlYy5jYWxsKHRoaXMsIHIpO1xuICAgICAgaWYgKHQpIHtcbiAgICAgICAgdC5ncm91cHMgPSBidWlsZEdyb3Vwcyh0LCB0aGlzKTtcbiAgICAgICAgdmFyIHAgPSB0LmluZGljZXM7XG4gICAgICAgIHAgJiYgKHAuZ3JvdXBzID0gYnVpbGRHcm91cHMocCwgdGhpcykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQ7XG4gICAgfSwgQmFiZWxSZWdFeHAucHJvdG90eXBlW1N5bWJvbC5yZXBsYWNlXSA9IGZ1bmN0aW9uICh0LCBwKSB7XG4gICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgcCkge1xuICAgICAgICB2YXIgbyA9IHIuZ2V0KHRoaXMpO1xuICAgICAgICByZXR1cm4gZVtTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCB0LCBwLnJlcGxhY2UoL1xcJDwoW14+XSspKD58JCkvZywgZnVuY3Rpb24gKGUsIHIsIHQpIHtcbiAgICAgICAgICBpZiAoXCJcIiA9PT0gdCkgcmV0dXJuIGU7XG4gICAgICAgICAgdmFyIHAgPSBvW3JdO1xuICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHApID8gXCIkXCIgKyBwLmpvaW4oXCIkXCIpIDogXCJudW1iZXJcIiA9PSB0eXBlb2YgcCA/IFwiJFwiICsgcCA6IFwiXCI7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHApIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzO1xuICAgICAgICByZXR1cm4gZVtTeW1ib2wucmVwbGFjZV0uY2FsbCh0aGlzLCB0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGUgPSBhcmd1bWVudHM7XG4gICAgICAgICAgcmV0dXJuIFwib2JqZWN0XCIgIT0gdHlwZW9mIGVbZS5sZW5ndGggLSAxXSAmJiAoZSA9IFtdLnNsaWNlLmNhbGwoZSkpLnB1c2goYnVpbGRHcm91cHMoZSwgaSkpLCBwLmFwcGx5KHRoaXMsIGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlW1N5bWJvbC5yZXBsYWNlXS5jYWxsKHRoaXMsIHQsIHApO1xuICAgIH0sIF93cmFwUmVnRXhwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICB2YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcbiAgdmFyIF9XSU5ET1cgPSB7fTtcbiAgdmFyIF9ET0NVTUVOVCA9IHt9O1xuICB2YXIgX01VVEFUSU9OX09CU0VSVkVSID0gbnVsbDtcbiAgdmFyIF9QRVJGT1JNQU5DRSA9IHtcbiAgICBtYXJrOiBub29wLFxuICAgIG1lYXN1cmU6IG5vb3BcbiAgfTtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIF9XSU5ET1cgPSB3aW5kb3c7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIF9ET0NVTUVOVCA9IGRvY3VtZW50O1xuICAgIGlmICh0eXBlb2YgTXV0YXRpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCcpIF9NVVRBVElPTl9PQlNFUlZFUiA9IE11dGF0aW9uT2JzZXJ2ZXI7XG4gICAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcpIF9QRVJGT1JNQU5DRSA9IHBlcmZvcm1hbmNlO1xuICB9IGNhdGNoIChlKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5XG5cbiAgdmFyIF9yZWYgPSBfV0lORE9XLm5hdmlnYXRvciB8fCB7fSxcbiAgICBfcmVmJHVzZXJBZ2VudCA9IF9yZWYudXNlckFnZW50LFxuICAgIHVzZXJBZ2VudCA9IF9yZWYkdXNlckFnZW50ID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkdXNlckFnZW50O1xuICB2YXIgV0lORE9XID0gX1dJTkRPVztcbiAgdmFyIERPQ1VNRU5UID0gX0RPQ1VNRU5UO1xuICB2YXIgTVVUQVRJT05fT0JTRVJWRVIgPSBfTVVUQVRJT05fT0JTRVJWRVI7XG4gIHZhciBQRVJGT1JNQU5DRSA9IF9QRVJGT1JNQU5DRTtcbiAgdmFyIElTX0JST1dTRVIgPSAhIVdJTkRPVy5kb2N1bWVudDtcbiAgdmFyIElTX0RPTSA9ICEhRE9DVU1FTlQuZG9jdW1lbnRFbGVtZW50ICYmICEhRE9DVU1FTlQuaGVhZCAmJiB0eXBlb2YgRE9DVU1FTlQuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgRE9DVU1FTlQuY3JlYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJztcbiAgdmFyIElTX0lFID0gfnVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgfHwgfnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50LycpO1xuXG4gIHZhciBfZHQ7XG4gIHZhciBFID0gL2ZhKGt8a2R8c3xyfGx8dHxkfGRyfGRsfGR0fGJ8c2xyfHNscHJ8d3NifHRsfG5zfG5kc3xlc3xqcnxqZnJ8amRyfHVzYnx1ZnNifHVkc2J8Y3J8c3N8c3J8c2x8c3R8c2RzfHNkcnxzZGx8c2R0KT9bXFwtXFwgXS8sXG4gICAgXyA9IC9Gb250ID9Bd2Vzb21lID8oWzU2NyBdKikoU29saWR8UmVndWxhcnxMaWdodHxUaGlufER1b3RvbmV8QnJhbmRzfEZyZWV8UHJvfFNoYXJwIER1b3RvbmV8U2hhcnB8S2l0fE5vdGRvZyBEdW98Tm90ZG9nfENoaXNlbHxFdGNofFRodW1icHJpbnR8SmVsbHkgRmlsbHxKZWxseSBEdW98SmVsbHl8VXRpbGl0eXxVdGlsaXR5IEZpbGx8VXRpbGl0eSBEdW98U2xhYiBQcmVzc3xTbGFifFdoaXRlYm9hcmQpPy4qL2k7XG4gIHZhciBxID0ge1xuICAgICAgY2xhc3NpYzoge1xuICAgICAgICBmYTogXCJzb2xpZFwiLFxuICAgICAgICBmYXM6IFwic29saWRcIixcbiAgICAgICAgXCJmYS1zb2xpZFwiOiBcInNvbGlkXCIsXG4gICAgICAgIGZhcjogXCJyZWd1bGFyXCIsXG4gICAgICAgIFwiZmEtcmVndWxhclwiOiBcInJlZ3VsYXJcIixcbiAgICAgICAgZmFsOiBcImxpZ2h0XCIsXG4gICAgICAgIFwiZmEtbGlnaHRcIjogXCJsaWdodFwiLFxuICAgICAgICBmYXQ6IFwidGhpblwiLFxuICAgICAgICBcImZhLXRoaW5cIjogXCJ0aGluXCIsXG4gICAgICAgIGZhYjogXCJicmFuZHNcIixcbiAgICAgICAgXCJmYS1icmFuZHNcIjogXCJicmFuZHNcIlxuICAgICAgfSxcbiAgICAgIGR1b3RvbmU6IHtcbiAgICAgICAgZmE6IFwic29saWRcIixcbiAgICAgICAgZmFkOiBcInNvbGlkXCIsXG4gICAgICAgIFwiZmEtc29saWRcIjogXCJzb2xpZFwiLFxuICAgICAgICBcImZhLWR1b3RvbmVcIjogXCJzb2xpZFwiLFxuICAgICAgICBmYWRyOiBcInJlZ3VsYXJcIixcbiAgICAgICAgXCJmYS1yZWd1bGFyXCI6IFwicmVndWxhclwiLFxuICAgICAgICBmYWRsOiBcImxpZ2h0XCIsXG4gICAgICAgIFwiZmEtbGlnaHRcIjogXCJsaWdodFwiLFxuICAgICAgICBmYWR0OiBcInRoaW5cIixcbiAgICAgICAgXCJmYS10aGluXCI6IFwidGhpblwiXG4gICAgICB9LFxuICAgICAgc2hhcnA6IHtcbiAgICAgICAgZmE6IFwic29saWRcIixcbiAgICAgICAgZmFzczogXCJzb2xpZFwiLFxuICAgICAgICBcImZhLXNvbGlkXCI6IFwic29saWRcIixcbiAgICAgICAgZmFzcjogXCJyZWd1bGFyXCIsXG4gICAgICAgIFwiZmEtcmVndWxhclwiOiBcInJlZ3VsYXJcIixcbiAgICAgICAgZmFzbDogXCJsaWdodFwiLFxuICAgICAgICBcImZhLWxpZ2h0XCI6IFwibGlnaHRcIixcbiAgICAgICAgZmFzdDogXCJ0aGluXCIsXG4gICAgICAgIFwiZmEtdGhpblwiOiBcInRoaW5cIlxuICAgICAgfSxcbiAgICAgIFwic2hhcnAtZHVvdG9uZVwiOiB7XG4gICAgICAgIGZhOiBcInNvbGlkXCIsXG4gICAgICAgIGZhc2RzOiBcInNvbGlkXCIsXG4gICAgICAgIFwiZmEtc29saWRcIjogXCJzb2xpZFwiLFxuICAgICAgICBmYXNkcjogXCJyZWd1bGFyXCIsXG4gICAgICAgIFwiZmEtcmVndWxhclwiOiBcInJlZ3VsYXJcIixcbiAgICAgICAgZmFzZGw6IFwibGlnaHRcIixcbiAgICAgICAgXCJmYS1saWdodFwiOiBcImxpZ2h0XCIsXG4gICAgICAgIGZhc2R0OiBcInRoaW5cIixcbiAgICAgICAgXCJmYS10aGluXCI6IFwidGhpblwiXG4gICAgICB9LFxuICAgICAgc2xhYjoge1xuICAgICAgICBcImZhLXJlZ3VsYXJcIjogXCJyZWd1bGFyXCIsXG4gICAgICAgIGZhc2xyOiBcInJlZ3VsYXJcIlxuICAgICAgfSxcbiAgICAgIFwic2xhYi1wcmVzc1wiOiB7XG4gICAgICAgIFwiZmEtcmVndWxhclwiOiBcInJlZ3VsYXJcIixcbiAgICAgICAgZmFzbHByOiBcInJlZ3VsYXJcIlxuICAgICAgfSxcbiAgICAgIHRodW1icHJpbnQ6IHtcbiAgICAgICAgXCJmYS1saWdodFwiOiBcImxpZ2h0XCIsXG4gICAgICAgIGZhdGw6IFwibGlnaHRcIlxuICAgICAgfSxcbiAgICAgIHdoaXRlYm9hcmQ6IHtcbiAgICAgICAgXCJmYS1zZW1pYm9sZFwiOiBcInNlbWlib2xkXCIsXG4gICAgICAgIGZhd3NiOiBcInNlbWlib2xkXCJcbiAgICAgIH0sXG4gICAgICBub3Rkb2c6IHtcbiAgICAgICAgXCJmYS1zb2xpZFwiOiBcInNvbGlkXCIsXG4gICAgICAgIGZhbnM6IFwic29saWRcIlxuICAgICAgfSxcbiAgICAgIFwibm90ZG9nLWR1b1wiOiB7XG4gICAgICAgIFwiZmEtc29saWRcIjogXCJzb2xpZFwiLFxuICAgICAgICBmYW5kczogXCJzb2xpZFwiXG4gICAgICB9LFxuICAgICAgZXRjaDoge1xuICAgICAgICBcImZhLXNvbGlkXCI6IFwic29saWRcIixcbiAgICAgICAgZmFlczogXCJzb2xpZFwiXG4gICAgICB9LFxuICAgICAgamVsbHk6IHtcbiAgICAgICAgXCJmYS1yZWd1bGFyXCI6IFwicmVndWxhclwiLFxuICAgICAgICBmYWpyOiBcInJlZ3VsYXJcIlxuICAgICAgfSxcbiAgICAgIFwiamVsbHktZmlsbFwiOiB7XG4gICAgICAgIFwiZmEtcmVndWxhclwiOiBcInJlZ3VsYXJcIixcbiAgICAgICAgZmFqZnI6IFwicmVndWxhclwiXG4gICAgICB9LFxuICAgICAgXCJqZWxseS1kdW9cIjoge1xuICAgICAgICBcImZhLXJlZ3VsYXJcIjogXCJyZWd1bGFyXCIsXG4gICAgICAgIGZhamRyOiBcInJlZ3VsYXJcIlxuICAgICAgfSxcbiAgICAgIGNoaXNlbDoge1xuICAgICAgICBcImZhLXJlZ3VsYXJcIjogXCJyZWd1bGFyXCIsXG4gICAgICAgIGZhY3I6IFwicmVndWxhclwiXG4gICAgICB9LFxuICAgICAgdXRpbGl0eToge1xuICAgICAgICBcImZhLXNlbWlib2xkXCI6IFwic2VtaWJvbGRcIixcbiAgICAgICAgZmF1c2I6IFwic2VtaWJvbGRcIlxuICAgICAgfSxcbiAgICAgIFwidXRpbGl0eS1kdW9cIjoge1xuICAgICAgICBcImZhLXNlbWlib2xkXCI6IFwic2VtaWJvbGRcIixcbiAgICAgICAgZmF1ZHNiOiBcInNlbWlib2xkXCJcbiAgICAgIH0sXG4gICAgICBcInV0aWxpdHktZmlsbFwiOiB7XG4gICAgICAgIFwiZmEtc2VtaWJvbGRcIjogXCJzZW1pYm9sZFwiLFxuICAgICAgICBmYXVmc2I6IFwic2VtaWJvbGRcIlxuICAgICAgfVxuICAgIH0sXG4gICAgSCA9IHtcbiAgICAgIEdST1VQOiBcImR1b3RvbmUtZ3JvdXBcIixcbiAgICAgIFNXQVBfT1BBQ0lUWTogXCJzd2FwLW9wYWNpdHlcIixcbiAgICAgIFBSSU1BUlk6IFwicHJpbWFyeVwiLFxuICAgICAgU0VDT05EQVJZOiBcInNlY29uZGFyeVwiXG4gICAgfSxcbiAgICBRID0gW1wiZmEtY2xhc3NpY1wiLCBcImZhLWR1b3RvbmVcIiwgXCJmYS1zaGFycFwiLCBcImZhLXNoYXJwLWR1b3RvbmVcIiwgXCJmYS10aHVtYnByaW50XCIsIFwiZmEtd2hpdGVib2FyZFwiLCBcImZhLW5vdGRvZ1wiLCBcImZhLW5vdGRvZy1kdW9cIiwgXCJmYS1jaGlzZWxcIiwgXCJmYS1ldGNoXCIsIFwiZmEtamVsbHlcIiwgXCJmYS1qZWxseS1maWxsXCIsIFwiZmEtamVsbHktZHVvXCIsIFwiZmEtc2xhYlwiLCBcImZhLXNsYWItcHJlc3NcIiwgXCJmYS11dGlsaXR5XCIsIFwiZmEtdXRpbGl0eS1kdW9cIiwgXCJmYS11dGlsaXR5LWZpbGxcIl07XG4gIHZhciBpID0gXCJjbGFzc2ljXCIsXG4gICAgdCA9IFwiZHVvdG9uZVwiLFxuICAgIGQgPSBcInNoYXJwXCIsXG4gICAgbCA9IFwic2hhcnAtZHVvdG9uZVwiLFxuICAgIGYgPSBcImNoaXNlbFwiLFxuICAgIG4gPSBcImV0Y2hcIixcbiAgICBoID0gXCJqZWxseVwiLFxuICAgIG8gPSBcImplbGx5LWR1b1wiLFxuICAgIHUgPSBcImplbGx5LWZpbGxcIixcbiAgICBnID0gXCJub3Rkb2dcIixcbiAgICBzID0gXCJub3Rkb2ctZHVvXCIsXG4gICAgeSA9IFwic2xhYlwiLFxuICAgIG0gPSBcInNsYWItcHJlc3NcIixcbiAgICBlID0gXCJ0aHVtYnByaW50XCIsXG4gICAgcCA9IFwidXRpbGl0eVwiLFxuICAgIGEgPSBcInV0aWxpdHktZHVvXCIsXG4gICAgdyA9IFwidXRpbGl0eS1maWxsXCIsXG4gICAgeCA9IFwid2hpdGVib2FyZFwiLFxuICAgIGIgPSBcIkNsYXNzaWNcIixcbiAgICBjID0gXCJEdW90b25lXCIsXG4gICAgSSA9IFwiU2hhcnBcIixcbiAgICBGID0gXCJTaGFycCBEdW90b25lXCIsXG4gICAgdiA9IFwiQ2hpc2VsXCIsXG4gICAgUyA9IFwiRXRjaFwiLFxuICAgIEEgPSBcIkplbGx5XCIsXG4gICAgUCA9IFwiSmVsbHkgRHVvXCIsXG4gICAgaiA9IFwiSmVsbHkgRmlsbFwiLFxuICAgIEIgPSBcIk5vdGRvZ1wiLFxuICAgIE4gPSBcIk5vdGRvZyBEdW9cIixcbiAgICBrID0gXCJTbGFiXCIsXG4gICAgRCA9IFwiU2xhYiBQcmVzc1wiLFxuICAgIFQgPSBcIlRodW1icHJpbnRcIixcbiAgICBDID0gXCJVdGlsaXR5XCIsXG4gICAgVyA9IFwiVXRpbGl0eSBEdW9cIixcbiAgICBLID0gXCJVdGlsaXR5IEZpbGxcIixcbiAgICBSID0gXCJXaGl0ZWJvYXJkXCIsXG4gICAgcnQgPSBbaSwgdCwgZCwgbCwgZiwgbiwgaCwgbywgdSwgZywgcywgeSwgbSwgZSwgcCwgYSwgdywgeF0sXG4gICAgZHQgPSAoX2R0ID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZHQsIGksIGIpLCB0LCBjKSwgZCwgSSksIGwsIEYpLCBmLCB2KSwgbiwgUyksIGgsIEEpLCBvLCBQKSwgdSwgaiksIGcsIEIpLCBfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kdCwgcywgTiksIHksIGspLCBtLCBEKSwgZSwgVCksIHAsIEMpLCBhLCBXKSwgdywgSyksIHgsIFIpKTtcbiAgdmFyIGd0ID0ge1xuICAgICAgY2xhc3NpYzoge1xuICAgICAgICA5MDA6IFwiZmFzXCIsXG4gICAgICAgIDQwMDogXCJmYXJcIixcbiAgICAgICAgbm9ybWFsOiBcImZhclwiLFxuICAgICAgICAzMDA6IFwiZmFsXCIsXG4gICAgICAgIDEwMDogXCJmYXRcIlxuICAgICAgfSxcbiAgICAgIGR1b3RvbmU6IHtcbiAgICAgICAgOTAwOiBcImZhZFwiLFxuICAgICAgICA0MDA6IFwiZmFkclwiLFxuICAgICAgICAzMDA6IFwiZmFkbFwiLFxuICAgICAgICAxMDA6IFwiZmFkdFwiXG4gICAgICB9LFxuICAgICAgc2hhcnA6IHtcbiAgICAgICAgOTAwOiBcImZhc3NcIixcbiAgICAgICAgNDAwOiBcImZhc3JcIixcbiAgICAgICAgMzAwOiBcImZhc2xcIixcbiAgICAgICAgMTAwOiBcImZhc3RcIlxuICAgICAgfSxcbiAgICAgIFwic2hhcnAtZHVvdG9uZVwiOiB7XG4gICAgICAgIDkwMDogXCJmYXNkc1wiLFxuICAgICAgICA0MDA6IFwiZmFzZHJcIixcbiAgICAgICAgMzAwOiBcImZhc2RsXCIsXG4gICAgICAgIDEwMDogXCJmYXNkdFwiXG4gICAgICB9LFxuICAgICAgc2xhYjoge1xuICAgICAgICA0MDA6IFwiZmFzbHJcIlxuICAgICAgfSxcbiAgICAgIFwic2xhYi1wcmVzc1wiOiB7XG4gICAgICAgIDQwMDogXCJmYXNscHJcIlxuICAgICAgfSxcbiAgICAgIHdoaXRlYm9hcmQ6IHtcbiAgICAgICAgNjAwOiBcImZhd3NiXCJcbiAgICAgIH0sXG4gICAgICB0aHVtYnByaW50OiB7XG4gICAgICAgIDMwMDogXCJmYXRsXCJcbiAgICAgIH0sXG4gICAgICBub3Rkb2c6IHtcbiAgICAgICAgOTAwOiBcImZhbnNcIlxuICAgICAgfSxcbiAgICAgIFwibm90ZG9nLWR1b1wiOiB7XG4gICAgICAgIDkwMDogXCJmYW5kc1wiXG4gICAgICB9LFxuICAgICAgZXRjaDoge1xuICAgICAgICA5MDA6IFwiZmFlc1wiXG4gICAgICB9LFxuICAgICAgY2hpc2VsOiB7XG4gICAgICAgIDQwMDogXCJmYWNyXCJcbiAgICAgIH0sXG4gICAgICBqZWxseToge1xuICAgICAgICA0MDA6IFwiZmFqclwiXG4gICAgICB9LFxuICAgICAgXCJqZWxseS1maWxsXCI6IHtcbiAgICAgICAgNDAwOiBcImZhamZyXCJcbiAgICAgIH0sXG4gICAgICBcImplbGx5LWR1b1wiOiB7XG4gICAgICAgIDQwMDogXCJmYWpkclwiXG4gICAgICB9LFxuICAgICAgdXRpbGl0eToge1xuICAgICAgICA2MDA6IFwiZmF1c2JcIlxuICAgICAgfSxcbiAgICAgIFwidXRpbGl0eS1kdW9cIjoge1xuICAgICAgICA2MDA6IFwiZmF1ZHNiXCJcbiAgICAgIH0sXG4gICAgICBcInV0aWxpdHktZmlsbFwiOiB7XG4gICAgICAgIDYwMDogXCJmYXVmc2JcIlxuICAgICAgfVxuICAgIH07XG4gIHZhciBDdCA9IHtcbiAgICAgIFwiRm9udCBBd2Vzb21lIDcgRnJlZVwiOiB7XG4gICAgICAgIDkwMDogXCJmYXNcIixcbiAgICAgICAgNDAwOiBcImZhclwiXG4gICAgICB9LFxuICAgICAgXCJGb250IEF3ZXNvbWUgNyBQcm9cIjoge1xuICAgICAgICA5MDA6IFwiZmFzXCIsXG4gICAgICAgIDQwMDogXCJmYXJcIixcbiAgICAgICAgbm9ybWFsOiBcImZhclwiLFxuICAgICAgICAzMDA6IFwiZmFsXCIsXG4gICAgICAgIDEwMDogXCJmYXRcIlxuICAgICAgfSxcbiAgICAgIFwiRm9udCBBd2Vzb21lIDcgQnJhbmRzXCI6IHtcbiAgICAgICAgNDAwOiBcImZhYlwiLFxuICAgICAgICBub3JtYWw6IFwiZmFiXCJcbiAgICAgIH0sXG4gICAgICBcIkZvbnQgQXdlc29tZSA3IER1b3RvbmVcIjoge1xuICAgICAgICA5MDA6IFwiZmFkXCIsXG4gICAgICAgIDQwMDogXCJmYWRyXCIsXG4gICAgICAgIG5vcm1hbDogXCJmYWRyXCIsXG4gICAgICAgIDMwMDogXCJmYWRsXCIsXG4gICAgICAgIDEwMDogXCJmYWR0XCJcbiAgICAgIH0sXG4gICAgICBcIkZvbnQgQXdlc29tZSA3IFNoYXJwXCI6IHtcbiAgICAgICAgOTAwOiBcImZhc3NcIixcbiAgICAgICAgNDAwOiBcImZhc3JcIixcbiAgICAgICAgbm9ybWFsOiBcImZhc3JcIixcbiAgICAgICAgMzAwOiBcImZhc2xcIixcbiAgICAgICAgMTAwOiBcImZhc3RcIlxuICAgICAgfSxcbiAgICAgIFwiRm9udCBBd2Vzb21lIDcgU2hhcnAgRHVvdG9uZVwiOiB7XG4gICAgICAgIDkwMDogXCJmYXNkc1wiLFxuICAgICAgICA0MDA6IFwiZmFzZHJcIixcbiAgICAgICAgbm9ybWFsOiBcImZhc2RyXCIsXG4gICAgICAgIDMwMDogXCJmYXNkbFwiLFxuICAgICAgICAxMDA6IFwiZmFzZHRcIlxuICAgICAgfSxcbiAgICAgIFwiRm9udCBBd2Vzb21lIDcgSmVsbHlcIjoge1xuICAgICAgICA0MDA6IFwiZmFqclwiLFxuICAgICAgICBub3JtYWw6IFwiZmFqclwiXG4gICAgICB9LFxuICAgICAgXCJGb250IEF3ZXNvbWUgNyBKZWxseSBGaWxsXCI6IHtcbiAgICAgICAgNDAwOiBcImZhamZyXCIsXG4gICAgICAgIG5vcm1hbDogXCJmYWpmclwiXG4gICAgICB9LFxuICAgICAgXCJGb250IEF3ZXNvbWUgNyBKZWxseSBEdW9cIjoge1xuICAgICAgICA0MDA6IFwiZmFqZHJcIixcbiAgICAgICAgbm9ybWFsOiBcImZhamRyXCJcbiAgICAgIH0sXG4gICAgICBcIkZvbnQgQXdlc29tZSA3IFNsYWJcIjoge1xuICAgICAgICA0MDA6IFwiZmFzbHJcIixcbiAgICAgICAgbm9ybWFsOiBcImZhc2xyXCJcbiAgICAgIH0sXG4gICAgICBcIkZvbnQgQXdlc29tZSA3IFNsYWIgUHJlc3NcIjoge1xuICAgICAgICA0MDA6IFwiZmFzbHByXCIsXG4gICAgICAgIG5vcm1hbDogXCJmYXNscHJcIlxuICAgICAgfSxcbiAgICAgIFwiRm9udCBBd2Vzb21lIDcgVGh1bWJwcmludFwiOiB7XG4gICAgICAgIDMwMDogXCJmYXRsXCIsXG4gICAgICAgIG5vcm1hbDogXCJmYXRsXCJcbiAgICAgIH0sXG4gICAgICBcIkZvbnQgQXdlc29tZSA3IE5vdGRvZ1wiOiB7XG4gICAgICAgIDkwMDogXCJmYW5zXCIsXG4gICAgICAgIG5vcm1hbDogXCJmYW5zXCJcbiAgICAgIH0sXG4gICAgICBcIkZvbnQgQXdlc29tZSA3IE5vdGRvZyBEdW9cIjoge1xuICAgICAgICA5MDA6IFwiZmFuZHNcIixcbiAgICAgICAgbm9ybWFsOiBcImZhbmRzXCJcbiAgICAgIH0sXG4gICAgICBcIkZvbnQgQXdlc29tZSA3IEV0Y2hcIjoge1xuICAgICAgICA5MDA6IFwiZmFlc1wiLFxuICAgICAgICBub3JtYWw6IFwiZmFlc1wiXG4gICAgICB9LFxuICAgICAgXCJGb250IEF3ZXNvbWUgNyBDaGlzZWxcIjoge1xuICAgICAgICA0MDA6IFwiZmFjclwiLFxuICAgICAgICBub3JtYWw6IFwiZmFjclwiXG4gICAgICB9LFxuICAgICAgXCJGb250IEF3ZXNvbWUgNyBXaGl0ZWJvYXJkXCI6IHtcbiAgICAgICAgNjAwOiBcImZhd3NiXCIsXG4gICAgICAgIG5vcm1hbDogXCJmYXdzYlwiXG4gICAgICB9LFxuICAgICAgXCJGb250IEF3ZXNvbWUgNyBVdGlsaXR5XCI6IHtcbiAgICAgICAgNjAwOiBcImZhdXNiXCIsXG4gICAgICAgIG5vcm1hbDogXCJmYXVzYlwiXG4gICAgICB9LFxuICAgICAgXCJGb250IEF3ZXNvbWUgNyBVdGlsaXR5IER1b1wiOiB7XG4gICAgICAgIDYwMDogXCJmYXVkc2JcIixcbiAgICAgICAgbm9ybWFsOiBcImZhdWRzYlwiXG4gICAgICB9LFxuICAgICAgXCJGb250IEF3ZXNvbWUgNyBVdGlsaXR5IEZpbGxcIjoge1xuICAgICAgICA2MDA6IFwiZmF1ZnNiXCIsXG4gICAgICAgIG5vcm1hbDogXCJmYXVmc2JcIlxuICAgICAgfVxuICAgIH07XG4gIHZhciBVdCA9IG5ldyBNYXAoW1tcImNsYXNzaWNcIiwge1xuICAgICAgZGVmYXVsdFNob3J0UHJlZml4SWQ6IFwiZmFzXCIsXG4gICAgICBkZWZhdWx0U3R5bGVJZDogXCJzb2xpZFwiLFxuICAgICAgc3R5bGVJZHM6IFtcInNvbGlkXCIsIFwicmVndWxhclwiLCBcImxpZ2h0XCIsIFwidGhpblwiLCBcImJyYW5kc1wiXSxcbiAgICAgIGZ1dHVyZVN0eWxlSWRzOiBbXSxcbiAgICAgIGRlZmF1bHRGb250V2VpZ2h0OiA5MDBcbiAgICB9XSwgW1wiZHVvdG9uZVwiLCB7XG4gICAgICBkZWZhdWx0U2hvcnRQcmVmaXhJZDogXCJmYWRcIixcbiAgICAgIGRlZmF1bHRTdHlsZUlkOiBcInNvbGlkXCIsXG4gICAgICBzdHlsZUlkczogW1wic29saWRcIiwgXCJyZWd1bGFyXCIsIFwibGlnaHRcIiwgXCJ0aGluXCJdLFxuICAgICAgZnV0dXJlU3R5bGVJZHM6IFtdLFxuICAgICAgZGVmYXVsdEZvbnRXZWlnaHQ6IDkwMFxuICAgIH1dLCBbXCJzaGFycFwiLCB7XG4gICAgICBkZWZhdWx0U2hvcnRQcmVmaXhJZDogXCJmYXNzXCIsXG4gICAgICBkZWZhdWx0U3R5bGVJZDogXCJzb2xpZFwiLFxuICAgICAgc3R5bGVJZHM6IFtcInNvbGlkXCIsIFwicmVndWxhclwiLCBcImxpZ2h0XCIsIFwidGhpblwiXSxcbiAgICAgIGZ1dHVyZVN0eWxlSWRzOiBbXSxcbiAgICAgIGRlZmF1bHRGb250V2VpZ2h0OiA5MDBcbiAgICB9XSwgW1wic2hhcnAtZHVvdG9uZVwiLCB7XG4gICAgICBkZWZhdWx0U2hvcnRQcmVmaXhJZDogXCJmYXNkc1wiLFxuICAgICAgZGVmYXVsdFN0eWxlSWQ6IFwic29saWRcIixcbiAgICAgIHN0eWxlSWRzOiBbXCJzb2xpZFwiLCBcInJlZ3VsYXJcIiwgXCJsaWdodFwiLCBcInRoaW5cIl0sXG4gICAgICBmdXR1cmVTdHlsZUlkczogW10sXG4gICAgICBkZWZhdWx0Rm9udFdlaWdodDogOTAwXG4gICAgfV0sIFtcImNoaXNlbFwiLCB7XG4gICAgICBkZWZhdWx0U2hvcnRQcmVmaXhJZDogXCJmYWNyXCIsXG4gICAgICBkZWZhdWx0U3R5bGVJZDogXCJyZWd1bGFyXCIsXG4gICAgICBzdHlsZUlkczogW1wicmVndWxhclwiXSxcbiAgICAgIGZ1dHVyZVN0eWxlSWRzOiBbXSxcbiAgICAgIGRlZmF1bHRGb250V2VpZ2h0OiA0MDBcbiAgICB9XSwgW1wiZXRjaFwiLCB7XG4gICAgICBkZWZhdWx0U2hvcnRQcmVmaXhJZDogXCJmYWVzXCIsXG4gICAgICBkZWZhdWx0U3R5bGVJZDogXCJzb2xpZFwiLFxuICAgICAgc3R5bGVJZHM6IFtcInNvbGlkXCJdLFxuICAgICAgZnV0dXJlU3R5bGVJZHM6IFtdLFxuICAgICAgZGVmYXVsdEZvbnRXZWlnaHQ6IDkwMFxuICAgIH1dLCBbXCJqZWxseVwiLCB7XG4gICAgICBkZWZhdWx0U2hvcnRQcmVmaXhJZDogXCJmYWpyXCIsXG4gICAgICBkZWZhdWx0U3R5bGVJZDogXCJyZWd1bGFyXCIsXG4gICAgICBzdHlsZUlkczogW1wicmVndWxhclwiXSxcbiAgICAgIGZ1dHVyZVN0eWxlSWRzOiBbXSxcbiAgICAgIGRlZmF1bHRGb250V2VpZ2h0OiA0MDBcbiAgICB9XSwgW1wiamVsbHktZHVvXCIsIHtcbiAgICAgIGRlZmF1bHRTaG9ydFByZWZpeElkOiBcImZhamRyXCIsXG4gICAgICBkZWZhdWx0U3R5bGVJZDogXCJyZWd1bGFyXCIsXG4gICAgICBzdHlsZUlkczogW1wicmVndWxhclwiXSxcbiAgICAgIGZ1dHVyZVN0eWxlSWRzOiBbXSxcbiAgICAgIGRlZmF1bHRGb250V2VpZ2h0OiA0MDBcbiAgICB9XSwgW1wiamVsbHktZmlsbFwiLCB7XG4gICAgICBkZWZhdWx0U2hvcnRQcmVmaXhJZDogXCJmYWpmclwiLFxuICAgICAgZGVmYXVsdFN0eWxlSWQ6IFwicmVndWxhclwiLFxuICAgICAgc3R5bGVJZHM6IFtcInJlZ3VsYXJcIl0sXG4gICAgICBmdXR1cmVTdHlsZUlkczogW10sXG4gICAgICBkZWZhdWx0Rm9udFdlaWdodDogNDAwXG4gICAgfV0sIFtcIm5vdGRvZ1wiLCB7XG4gICAgICBkZWZhdWx0U2hvcnRQcmVmaXhJZDogXCJmYW5zXCIsXG4gICAgICBkZWZhdWx0U3R5bGVJZDogXCJzb2xpZFwiLFxuICAgICAgc3R5bGVJZHM6IFtcInNvbGlkXCJdLFxuICAgICAgZnV0dXJlU3R5bGVJZHM6IFtdLFxuICAgICAgZGVmYXVsdEZvbnRXZWlnaHQ6IDkwMFxuICAgIH1dLCBbXCJub3Rkb2ctZHVvXCIsIHtcbiAgICAgIGRlZmF1bHRTaG9ydFByZWZpeElkOiBcImZhbmRzXCIsXG4gICAgICBkZWZhdWx0U3R5bGVJZDogXCJzb2xpZFwiLFxuICAgICAgc3R5bGVJZHM6IFtcInNvbGlkXCJdLFxuICAgICAgZnV0dXJlU3R5bGVJZHM6IFtdLFxuICAgICAgZGVmYXVsdEZvbnRXZWlnaHQ6IDkwMFxuICAgIH1dLCBbXCJzbGFiXCIsIHtcbiAgICAgIGRlZmF1bHRTaG9ydFByZWZpeElkOiBcImZhc2xyXCIsXG4gICAgICBkZWZhdWx0U3R5bGVJZDogXCJyZWd1bGFyXCIsXG4gICAgICBzdHlsZUlkczogW1wicmVndWxhclwiXSxcbiAgICAgIGZ1dHVyZVN0eWxlSWRzOiBbXSxcbiAgICAgIGRlZmF1bHRGb250V2VpZ2h0OiA0MDBcbiAgICB9XSwgW1wic2xhYi1wcmVzc1wiLCB7XG4gICAgICBkZWZhdWx0U2hvcnRQcmVmaXhJZDogXCJmYXNscHJcIixcbiAgICAgIGRlZmF1bHRTdHlsZUlkOiBcInJlZ3VsYXJcIixcbiAgICAgIHN0eWxlSWRzOiBbXCJyZWd1bGFyXCJdLFxuICAgICAgZnV0dXJlU3R5bGVJZHM6IFtdLFxuICAgICAgZGVmYXVsdEZvbnRXZWlnaHQ6IDQwMFxuICAgIH1dLCBbXCJ0aHVtYnByaW50XCIsIHtcbiAgICAgIGRlZmF1bHRTaG9ydFByZWZpeElkOiBcImZhdGxcIixcbiAgICAgIGRlZmF1bHRTdHlsZUlkOiBcImxpZ2h0XCIsXG4gICAgICBzdHlsZUlkczogW1wibGlnaHRcIl0sXG4gICAgICBmdXR1cmVTdHlsZUlkczogW10sXG4gICAgICBkZWZhdWx0Rm9udFdlaWdodDogMzAwXG4gICAgfV0sIFtcInV0aWxpdHlcIiwge1xuICAgICAgZGVmYXVsdFNob3J0UHJlZml4SWQ6IFwiZmF1c2JcIixcbiAgICAgIGRlZmF1bHRTdHlsZUlkOiBcInNlbWlib2xkXCIsXG4gICAgICBzdHlsZUlkczogW1wic2VtaWJvbGRcIl0sXG4gICAgICBmdXR1cmVTdHlsZUlkczogW10sXG4gICAgICBkZWZhdWx0Rm9udFdlaWdodDogNjAwXG4gICAgfV0sIFtcInV0aWxpdHktZHVvXCIsIHtcbiAgICAgIGRlZmF1bHRTaG9ydFByZWZpeElkOiBcImZhdWRzYlwiLFxuICAgICAgZGVmYXVsdFN0eWxlSWQ6IFwic2VtaWJvbGRcIixcbiAgICAgIHN0eWxlSWRzOiBbXCJzZW1pYm9sZFwiXSxcbiAgICAgIGZ1dHVyZVN0eWxlSWRzOiBbXSxcbiAgICAgIGRlZmF1bHRGb250V2VpZ2h0OiA2MDBcbiAgICB9XSwgW1widXRpbGl0eS1maWxsXCIsIHtcbiAgICAgIGRlZmF1bHRTaG9ydFByZWZpeElkOiBcImZhdWZzYlwiLFxuICAgICAgZGVmYXVsdFN0eWxlSWQ6IFwic2VtaWJvbGRcIixcbiAgICAgIHN0eWxlSWRzOiBbXCJzZW1pYm9sZFwiXSxcbiAgICAgIGZ1dHVyZVN0eWxlSWRzOiBbXSxcbiAgICAgIGRlZmF1bHRGb250V2VpZ2h0OiA2MDBcbiAgICB9XSwgW1wid2hpdGVib2FyZFwiLCB7XG4gICAgICBkZWZhdWx0U2hvcnRQcmVmaXhJZDogXCJmYXdzYlwiLFxuICAgICAgZGVmYXVsdFN0eWxlSWQ6IFwic2VtaWJvbGRcIixcbiAgICAgIHN0eWxlSWRzOiBbXCJzZW1pYm9sZFwiXSxcbiAgICAgIGZ1dHVyZVN0eWxlSWRzOiBbXSxcbiAgICAgIGRlZmF1bHRGb250V2VpZ2h0OiA2MDBcbiAgICB9XV0pLFxuICAgIF90ID0ge1xuICAgICAgY2hpc2VsOiB7XG4gICAgICAgIHJlZ3VsYXI6IFwiZmFjclwiXG4gICAgICB9LFxuICAgICAgY2xhc3NpYzoge1xuICAgICAgICBicmFuZHM6IFwiZmFiXCIsXG4gICAgICAgIGxpZ2h0OiBcImZhbFwiLFxuICAgICAgICByZWd1bGFyOiBcImZhclwiLFxuICAgICAgICBzb2xpZDogXCJmYXNcIixcbiAgICAgICAgdGhpbjogXCJmYXRcIlxuICAgICAgfSxcbiAgICAgIGR1b3RvbmU6IHtcbiAgICAgICAgbGlnaHQ6IFwiZmFkbFwiLFxuICAgICAgICByZWd1bGFyOiBcImZhZHJcIixcbiAgICAgICAgc29saWQ6IFwiZmFkXCIsXG4gICAgICAgIHRoaW46IFwiZmFkdFwiXG4gICAgICB9LFxuICAgICAgZXRjaDoge1xuICAgICAgICBzb2xpZDogXCJmYWVzXCJcbiAgICAgIH0sXG4gICAgICBqZWxseToge1xuICAgICAgICByZWd1bGFyOiBcImZhanJcIlxuICAgICAgfSxcbiAgICAgIFwiamVsbHktZHVvXCI6IHtcbiAgICAgICAgcmVndWxhcjogXCJmYWpkclwiXG4gICAgICB9LFxuICAgICAgXCJqZWxseS1maWxsXCI6IHtcbiAgICAgICAgcmVndWxhcjogXCJmYWpmclwiXG4gICAgICB9LFxuICAgICAgbm90ZG9nOiB7XG4gICAgICAgIHNvbGlkOiBcImZhbnNcIlxuICAgICAgfSxcbiAgICAgIFwibm90ZG9nLWR1b1wiOiB7XG4gICAgICAgIHNvbGlkOiBcImZhbmRzXCJcbiAgICAgIH0sXG4gICAgICBzaGFycDoge1xuICAgICAgICBsaWdodDogXCJmYXNsXCIsXG4gICAgICAgIHJlZ3VsYXI6IFwiZmFzclwiLFxuICAgICAgICBzb2xpZDogXCJmYXNzXCIsXG4gICAgICAgIHRoaW46IFwiZmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJzaGFycC1kdW90b25lXCI6IHtcbiAgICAgICAgbGlnaHQ6IFwiZmFzZGxcIixcbiAgICAgICAgcmVndWxhcjogXCJmYXNkclwiLFxuICAgICAgICBzb2xpZDogXCJmYXNkc1wiLFxuICAgICAgICB0aGluOiBcImZhc2R0XCJcbiAgICAgIH0sXG4gICAgICBzbGFiOiB7XG4gICAgICAgIHJlZ3VsYXI6IFwiZmFzbHJcIlxuICAgICAgfSxcbiAgICAgIFwic2xhYi1wcmVzc1wiOiB7XG4gICAgICAgIHJlZ3VsYXI6IFwiZmFzbHByXCJcbiAgICAgIH0sXG4gICAgICB0aHVtYnByaW50OiB7XG4gICAgICAgIGxpZ2h0OiBcImZhdGxcIlxuICAgICAgfSxcbiAgICAgIHV0aWxpdHk6IHtcbiAgICAgICAgc2VtaWJvbGQ6IFwiZmF1c2JcIlxuICAgICAgfSxcbiAgICAgIFwidXRpbGl0eS1kdW9cIjoge1xuICAgICAgICBzZW1pYm9sZDogXCJmYXVkc2JcIlxuICAgICAgfSxcbiAgICAgIFwidXRpbGl0eS1maWxsXCI6IHtcbiAgICAgICAgc2VtaWJvbGQ6IFwiZmF1ZnNiXCJcbiAgICAgIH0sXG4gICAgICB3aGl0ZWJvYXJkOiB7XG4gICAgICAgIHNlbWlib2xkOiBcImZhd3NiXCJcbiAgICAgIH1cbiAgICB9O1xuICB2YXIgWXQgPSBbXCJmYWtcIiwgXCJmYS1raXRcIiwgXCJmYWtkXCIsIFwiZmEta2l0LWR1b3RvbmVcIl0sXG4gICAgcXQgPSB7XG4gICAgICBraXQ6IHtcbiAgICAgICAgZmFrOiBcImtpdFwiLFxuICAgICAgICBcImZhLWtpdFwiOiBcImtpdFwiXG4gICAgICB9LFxuICAgICAgXCJraXQtZHVvdG9uZVwiOiB7XG4gICAgICAgIGZha2Q6IFwia2l0LWR1b3RvbmVcIixcbiAgICAgICAgXCJmYS1raXQtZHVvdG9uZVwiOiBcImtpdC1kdW90b25lXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIEh0ID0gW1wia2l0XCJdO1xuICB2YXIgTCA9IFwia2l0XCIsXG4gICAgciA9IFwia2l0LWR1b3RvbmVcIixcbiAgICBVID0gXCJLaXRcIixcbiAgICBKID0gXCJLaXQgRHVvdG9uZVwiLFxuICAgICR0ID0gX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eSh7fSwgTCwgVSksIHIsIEopO1xuICB2YXIgb2wgPSB7XG4gICAga2l0OiB7XG4gICAgICBcImZhLWtpdFwiOiBcImZha1wiXG4gICAgfSxcbiAgICBcImtpdC1kdW90b25lXCI6IHtcbiAgICAgIFwiZmEta2l0LWR1b3RvbmVcIjogXCJmYWtkXCJcbiAgICB9XG4gIH07XG4gIHZhciBkbCA9IHtcbiAgICAgIFwiRm9udCBBd2Vzb21lIEtpdFwiOiB7XG4gICAgICAgIDQwMDogXCJmYWtcIixcbiAgICAgICAgbm9ybWFsOiBcImZha1wiXG4gICAgICB9LFxuICAgICAgXCJGb250IEF3ZXNvbWUgS2l0IER1b3RvbmVcIjoge1xuICAgICAgICA0MDA6IFwiZmFrZFwiLFxuICAgICAgICBub3JtYWw6IFwiZmFrZFwiXG4gICAgICB9XG4gICAgfSxcbiAgICBmbCA9IHtcbiAgICAgIGtpdDoge1xuICAgICAgICBmYWs6IFwiZmEta2l0XCJcbiAgICAgIH0sXG4gICAgICBcImtpdC1kdW90b25lXCI6IHtcbiAgICAgICAgZmFrZDogXCJmYS1raXQtZHVvdG9uZVwiXG4gICAgICB9XG4gICAgfTtcbiAgdmFyIHVsID0ge1xuICAgICAga2l0OiB7XG4gICAgICAgIGtpdDogXCJmYWtcIlxuICAgICAgfSxcbiAgICAgIFwia2l0LWR1b3RvbmVcIjoge1xuICAgICAgICBcImtpdC1kdW90b25lXCI6IFwiZmFrZFwiXG4gICAgICB9XG4gICAgfTtcblxuICB2YXIgX21sO1xuICB2YXIgbCQxID0ge1xuICAgICAgR1JPVVA6IFwiZHVvdG9uZS1ncm91cFwiLFxuICAgICAgU1dBUF9PUEFDSVRZOiBcInN3YXAtb3BhY2l0eVwiLFxuICAgICAgUFJJTUFSWTogXCJwcmltYXJ5XCIsXG4gICAgICBTRUNPTkRBUlk6IFwic2Vjb25kYXJ5XCJcbiAgICB9LFxuICAgIGYkMSA9IFtcImZhLWNsYXNzaWNcIiwgXCJmYS1kdW90b25lXCIsIFwiZmEtc2hhcnBcIiwgXCJmYS1zaGFycC1kdW90b25lXCIsIFwiZmEtdGh1bWJwcmludFwiLCBcImZhLXdoaXRlYm9hcmRcIiwgXCJmYS1ub3Rkb2dcIiwgXCJmYS1ub3Rkb2ctZHVvXCIsIFwiZmEtY2hpc2VsXCIsIFwiZmEtZXRjaFwiLCBcImZhLWplbGx5XCIsIFwiZmEtamVsbHktZmlsbFwiLCBcImZhLWplbGx5LWR1b1wiLCBcImZhLXNsYWJcIiwgXCJmYS1zbGFiLXByZXNzXCIsIFwiZmEtdXRpbGl0eVwiLCBcImZhLXV0aWxpdHktZHVvXCIsIFwiZmEtdXRpbGl0eS1maWxsXCJdO1xuICB2YXIgbiQxID0gXCJjbGFzc2ljXCIsXG4gICAgbyQxID0gXCJkdW90b25lXCIsXG4gICAgdSQxID0gXCJzaGFycFwiLFxuICAgIHMkMSA9IFwic2hhcnAtZHVvdG9uZVwiLFxuICAgIGgkMSA9IFwiY2hpc2VsXCIsXG4gICAgZyQxID0gXCJldGNoXCIsXG4gICAgeSQxID0gXCJqZWxseVwiLFxuICAgIGUkMSA9IFwiamVsbHktZHVvXCIsXG4gICAgbSQxID0gXCJqZWxseS1maWxsXCIsXG4gICAgcCQxID0gXCJub3Rkb2dcIixcbiAgICBhJDEgPSBcIm5vdGRvZy1kdW9cIixcbiAgICB3JDEgPSBcInNsYWJcIixcbiAgICBiJDEgPSBcInNsYWItcHJlc3NcIixcbiAgICByJDEgPSBcInRodW1icHJpbnRcIixcbiAgICBjJDEgPSBcInV0aWxpdHlcIixcbiAgICBpJDEgPSBcInV0aWxpdHktZHVvXCIsXG4gICAgeCQxID0gXCJ1dGlsaXR5LWZpbGxcIixcbiAgICBJJDEgPSBcIndoaXRlYm9hcmRcIixcbiAgICBGJDEgPSBcIkNsYXNzaWNcIixcbiAgICB2JDEgPSBcIkR1b3RvbmVcIixcbiAgICBTJDEgPSBcIlNoYXJwXCIsXG4gICAgQSQxID0gXCJTaGFycCBEdW90b25lXCIsXG4gICAgUCQxID0gXCJDaGlzZWxcIixcbiAgICBqJDEgPSBcIkV0Y2hcIixcbiAgICBCJDEgPSBcIkplbGx5XCIsXG4gICAgTiQxID0gXCJKZWxseSBEdW9cIixcbiAgICBrJDEgPSBcIkplbGx5IEZpbGxcIixcbiAgICBEJDEgPSBcIk5vdGRvZ1wiLFxuICAgIEMkMSA9IFwiTm90ZG9nIER1b1wiLFxuICAgIFQkMSA9IFwiU2xhYlwiLFxuICAgIEwkMSA9IFwiU2xhYiBQcmVzc1wiLFxuICAgIFckMSA9IFwiVGh1bWJwcmludFwiLFxuICAgIFIkMSA9IFwiVXRpbGl0eVwiLFxuICAgIEskMSA9IFwiVXRpbGl0eSBEdW9cIixcbiAgICBVJDEgPSBcIlV0aWxpdHkgRmlsbFwiLFxuICAgIEokMSA9IFwiV2hpdGVib2FyZFwiLFxuICAgIG1sJDEgPSAoX21sID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfbWwsIG4kMSwgRiQxKSwgbyQxLCB2JDEpLCB1JDEsIFMkMSksIHMkMSwgQSQxKSwgaCQxLCBQJDEpLCBnJDEsIGokMSksIHkkMSwgQiQxKSwgZSQxLCBOJDEpLCBtJDEsIGskMSksIHAkMSwgRCQxKSwgX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KF9kZWZpbmVQcm9wZXJ0eShfbWwsIGEkMSwgQyQxKSwgdyQxLCBUJDEpLCBiJDEsIEwkMSksIHIkMSwgVyQxKSwgYyQxLCBSJDEpLCBpJDEsIEskMSksIHgkMSwgVSQxKSwgSSQxLCBKJDEpKTtcbiAgdmFyIEUkMSA9IFwia2l0XCIsXG4gICAgZCQxID0gXCJraXQtZHVvdG9uZVwiLFxuICAgIF8kMSA9IFwiS2l0XCIsXG4gICAgTSQxID0gXCJLaXQgRHVvdG9uZVwiLFxuICAgIHJ0JDEgPSBfZGVmaW5lUHJvcGVydHkoX2RlZmluZVByb3BlcnR5KHt9LCBFJDEsIF8kMSksIGQkMSwgTSQxKTtcbiAgdmFyICR0JDEgPSB7XG4gICAgICBjbGFzc2ljOiB7XG4gICAgICAgIFwiZmEtYnJhbmRzXCI6IFwiZmFiXCIsXG4gICAgICAgIFwiZmEtZHVvdG9uZVwiOiBcImZhZFwiLFxuICAgICAgICBcImZhLWxpZ2h0XCI6IFwiZmFsXCIsXG4gICAgICAgIFwiZmEtcmVndWxhclwiOiBcImZhclwiLFxuICAgICAgICBcImZhLXNvbGlkXCI6IFwiZmFzXCIsXG4gICAgICAgIFwiZmEtdGhpblwiOiBcImZhdFwiXG4gICAgICB9LFxuICAgICAgZHVvdG9uZToge1xuICAgICAgICBcImZhLXJlZ3VsYXJcIjogXCJmYWRyXCIsXG4gICAgICAgIFwiZmEtbGlnaHRcIjogXCJmYWRsXCIsXG4gICAgICAgIFwiZmEtdGhpblwiOiBcImZhZHRcIlxuICAgICAgfSxcbiAgICAgIHNoYXJwOiB7XG4gICAgICAgIFwiZmEtc29saWRcIjogXCJmYXNzXCIsXG4gICAgICAgIFwiZmEtcmVndWxhclwiOiBcImZhc3JcIixcbiAgICAgICAgXCJmYS1saWdodFwiOiBcImZhc2xcIixcbiAgICAgICAgXCJmYS10aGluXCI6IFwiZmFzdFwiXG4gICAgICB9LFxuICAgICAgXCJzaGFycC1kdW90b25lXCI6IHtcbiAgICAgICAgXCJmYS1zb2xpZFwiOiBcImZhc2RzXCIsXG4gICAgICAgIFwiZmEtcmVndWxhclwiOiBcImZhc2RyXCIsXG4gICAgICAgIFwiZmEtbGlnaHRcIjogXCJmYXNkbFwiLFxuICAgICAgICBcImZhLXRoaW5cIjogXCJmYXNkdFwiXG4gICAgICB9LFxuICAgICAgc2xhYjoge1xuICAgICAgICBcImZhLXJlZ3VsYXJcIjogXCJmYXNsclwiXG4gICAgICB9LFxuICAgICAgXCJzbGFiLXByZXNzXCI6IHtcbiAgICAgICAgXCJmYS1yZWd1bGFyXCI6IFwiZmFzbHByXCJcbiAgICAgIH0sXG4gICAgICB3aGl0ZWJvYXJkOiB7XG4gICAgICAgIFwiZmEtc2VtaWJvbGRcIjogXCJmYXdzYlwiXG4gICAgICB9LFxuICAgICAgdGh1bWJwcmludDoge1xuICAgICAgICBcImZhLWxpZ2h0XCI6IFwiZmF0bFwiXG4gICAgICB9LFxuICAgICAgbm90ZG9nOiB7XG4gICAgICAgIFwiZmEtc29saWRcIjogXCJmYW5zXCJcbiAgICAgIH0sXG4gICAgICBcIm5vdGRvZy1kdW9cIjoge1xuICAgICAgICBcImZhLXNvbGlkXCI6IFwiZmFuZHNcIlxuICAgICAgfSxcbiAgICAgIGV0Y2g6IHtcbiAgICAgICAgXCJmYS1zb2xpZFwiOiBcImZhZXNcIlxuICAgICAgfSxcbiAgICAgIGplbGx5OiB7XG4gICAgICAgIFwiZmEtcmVndWxhclwiOiBcImZhanJcIlxuICAgICAgfSxcbiAgICAgIFwiamVsbHktZmlsbFwiOiB7XG4gICAgICAgIFwiZmEtcmVndWxhclwiOiBcImZhamZyXCJcbiAgICAgIH0sXG4gICAgICBcImplbGx5LWR1b1wiOiB7XG4gICAgICAgIFwiZmEtcmVndWxhclwiOiBcImZhamRyXCJcbiAgICAgIH0sXG4gICAgICBjaGlzZWw6IHtcbiAgICAgICAgXCJmYS1yZWd1bGFyXCI6IFwiZmFjclwiXG4gICAgICB9LFxuICAgICAgdXRpbGl0eToge1xuICAgICAgICBcImZhLXNlbWlib2xkXCI6IFwiZmF1c2JcIlxuICAgICAgfSxcbiAgICAgIFwidXRpbGl0eS1kdW9cIjoge1xuICAgICAgICBcImZhLXNlbWlib2xkXCI6IFwiZmF1ZHNiXCJcbiAgICAgIH0sXG4gICAgICBcInV0aWxpdHktZmlsbFwiOiB7XG4gICAgICAgIFwiZmEtc2VtaWJvbGRcIjogXCJmYXVmc2JcIlxuICAgICAgfVxuICAgIH0sXG4gICAgeiA9IHtcbiAgICAgIGNsYXNzaWM6IFtcImZhc1wiLCBcImZhclwiLCBcImZhbFwiLCBcImZhdFwiLCBcImZhZFwiXSxcbiAgICAgIGR1b3RvbmU6IFtcImZhZHJcIiwgXCJmYWRsXCIsIFwiZmFkdFwiXSxcbiAgICAgIHNoYXJwOiBbXCJmYXNzXCIsIFwiZmFzclwiLCBcImZhc2xcIiwgXCJmYXN0XCJdLFxuICAgICAgXCJzaGFycC1kdW90b25lXCI6IFtcImZhc2RzXCIsIFwiZmFzZHJcIiwgXCJmYXNkbFwiLCBcImZhc2R0XCJdLFxuICAgICAgc2xhYjogW1wiZmFzbHJcIl0sXG4gICAgICBcInNsYWItcHJlc3NcIjogW1wiZmFzbHByXCJdLFxuICAgICAgd2hpdGVib2FyZDogW1wiZmF3c2JcIl0sXG4gICAgICB0aHVtYnByaW50OiBbXCJmYXRsXCJdLFxuICAgICAgbm90ZG9nOiBbXCJmYW5zXCJdLFxuICAgICAgXCJub3Rkb2ctZHVvXCI6IFtcImZhbmRzXCJdLFxuICAgICAgZXRjaDogW1wiZmFlc1wiXSxcbiAgICAgIGplbGx5OiBbXCJmYWpyXCJdLFxuICAgICAgXCJqZWxseS1maWxsXCI6IFtcImZhamZyXCJdLFxuICAgICAgXCJqZWxseS1kdW9cIjogW1wiZmFqZHJcIl0sXG4gICAgICBjaGlzZWw6IFtcImZhY3JcIl0sXG4gICAgICB1dGlsaXR5OiBbXCJmYXVzYlwiXSxcbiAgICAgIFwidXRpbGl0eS1kdW9cIjogW1wiZmF1ZHNiXCJdLFxuICAgICAgXCJ1dGlsaXR5LWZpbGxcIjogW1wiZmF1ZnNiXCJdXG4gICAgfSxcbiAgICBIdCQxID0ge1xuICAgICAgY2xhc3NpYzoge1xuICAgICAgICBmYWI6IFwiZmEtYnJhbmRzXCIsXG4gICAgICAgIGZhZDogXCJmYS1kdW90b25lXCIsXG4gICAgICAgIGZhbDogXCJmYS1saWdodFwiLFxuICAgICAgICBmYXI6IFwiZmEtcmVndWxhclwiLFxuICAgICAgICBmYXM6IFwiZmEtc29saWRcIixcbiAgICAgICAgZmF0OiBcImZhLXRoaW5cIlxuICAgICAgfSxcbiAgICAgIGR1b3RvbmU6IHtcbiAgICAgICAgZmFkcjogXCJmYS1yZWd1bGFyXCIsXG4gICAgICAgIGZhZGw6IFwiZmEtbGlnaHRcIixcbiAgICAgICAgZmFkdDogXCJmYS10aGluXCJcbiAgICAgIH0sXG4gICAgICBzaGFycDoge1xuICAgICAgICBmYXNzOiBcImZhLXNvbGlkXCIsXG4gICAgICAgIGZhc3I6IFwiZmEtcmVndWxhclwiLFxuICAgICAgICBmYXNsOiBcImZhLWxpZ2h0XCIsXG4gICAgICAgIGZhc3Q6IFwiZmEtdGhpblwiXG4gICAgICB9LFxuICAgICAgXCJzaGFycC1kdW90b25lXCI6IHtcbiAgICAgICAgZmFzZHM6IFwiZmEtc29saWRcIixcbiAgICAgICAgZmFzZHI6IFwiZmEtcmVndWxhclwiLFxuICAgICAgICBmYXNkbDogXCJmYS1saWdodFwiLFxuICAgICAgICBmYXNkdDogXCJmYS10aGluXCJcbiAgICAgIH0sXG4gICAgICBzbGFiOiB7XG4gICAgICAgIGZhc2xyOiBcImZhLXJlZ3VsYXJcIlxuICAgICAgfSxcbiAgICAgIFwic2xhYi1wcmVzc1wiOiB7XG4gICAgICAgIGZhc2xwcjogXCJmYS1yZWd1bGFyXCJcbiAgICAgIH0sXG4gICAgICB3aGl0ZWJvYXJkOiB7XG4gICAgICAgIGZhd3NiOiBcImZhLXNlbWlib2xkXCJcbiAgICAgIH0sXG4gICAgICB0aHVtYnByaW50OiB7XG4gICAgICAgIGZhdGw6IFwiZmEtbGlnaHRcIlxuICAgICAgfSxcbiAgICAgIG5vdGRvZzoge1xuICAgICAgICBmYW5zOiBcImZhLXNvbGlkXCJcbiAgICAgIH0sXG4gICAgICBcIm5vdGRvZy1kdW9cIjoge1xuICAgICAgICBmYW5kczogXCJmYS1zb2xpZFwiXG4gICAgICB9LFxuICAgICAgZXRjaDoge1xuICAgICAgICBmYWVzOiBcImZhLXNvbGlkXCJcbiAgICAgIH0sXG4gICAgICBqZWxseToge1xuICAgICAgICBmYWpyOiBcImZhLXJlZ3VsYXJcIlxuICAgICAgfSxcbiAgICAgIFwiamVsbHktZmlsbFwiOiB7XG4gICAgICAgIGZhamZyOiBcImZhLXJlZ3VsYXJcIlxuICAgICAgfSxcbiAgICAgIFwiamVsbHktZHVvXCI6IHtcbiAgICAgICAgZmFqZHI6IFwiZmEtcmVndWxhclwiXG4gICAgICB9LFxuICAgICAgY2hpc2VsOiB7XG4gICAgICAgIGZhY3I6IFwiZmEtcmVndWxhclwiXG4gICAgICB9LFxuICAgICAgdXRpbGl0eToge1xuICAgICAgICBmYXVzYjogXCJmYS1zZW1pYm9sZFwiXG4gICAgICB9LFxuICAgICAgXCJ1dGlsaXR5LWR1b1wiOiB7XG4gICAgICAgIGZhdWRzYjogXCJmYS1zZW1pYm9sZFwiXG4gICAgICB9LFxuICAgICAgXCJ1dGlsaXR5LWZpbGxcIjoge1xuICAgICAgICBmYXVmc2I6IFwiZmEtc2VtaWJvbGRcIlxuICAgICAgfVxuICAgIH0sXG4gICAgWSQxID0gW1wiZmEtc29saWRcIiwgXCJmYS1yZWd1bGFyXCIsIFwiZmEtbGlnaHRcIiwgXCJmYS10aGluXCIsIFwiZmEtZHVvdG9uZVwiLCBcImZhLWJyYW5kc1wiLCBcImZhLXNlbWlib2xkXCJdLFxuICAgIFp0JDEgPSBbXCJmYVwiLCBcImZhc1wiLCBcImZhclwiLCBcImZhbFwiLCBcImZhdFwiLCBcImZhZFwiLCBcImZhZHJcIiwgXCJmYWRsXCIsIFwiZmFkdFwiLCBcImZhYlwiLCBcImZhc3NcIiwgXCJmYXNyXCIsIFwiZmFzbFwiLCBcImZhc3RcIiwgXCJmYXNkc1wiLCBcImZhc2RyXCIsIFwiZmFzZGxcIiwgXCJmYXNkdFwiLCBcImZhc2xyXCIsIFwiZmFzbHByXCIsIFwiZmF3c2JcIiwgXCJmYXRsXCIsIFwiZmFuc1wiLCBcImZhbmRzXCIsIFwiZmFlc1wiLCBcImZhanJcIiwgXCJmYWpmclwiLCBcImZhamRyXCIsIFwiZmFjclwiLCBcImZhdXNiXCIsIFwiZmF1ZHNiXCIsIFwiZmF1ZnNiXCJdLmNvbmNhdChmJDEsIFkkMSksXG4gICAgRyQxID0gW1wic29saWRcIiwgXCJyZWd1bGFyXCIsIFwibGlnaHRcIiwgXCJ0aGluXCIsIFwiZHVvdG9uZVwiLCBcImJyYW5kc1wiLCBcInNlbWlib2xkXCJdLFxuICAgIE8kMSA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF0sXG4gICAgViQxID0gTyQxLmNvbmNhdChbMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjBdKSxcbiAgICAkJDEgPSBbXCJhd1wiLCBcImZ3XCIsIFwicHVsbC1sZWZ0XCIsIFwicHVsbC1yaWdodFwiXSxcbiAgICB0byA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoT2JqZWN0LmtleXMoeikpLCBHJDEsICQkMSwgW1wiMnhzXCIsIFwieHNcIiwgXCJzbVwiLCBcImxnXCIsIFwieGxcIiwgXCIyeGxcIiwgXCJiZWF0XCIsIFwiYm9yZGVyXCIsIFwiZmFkZVwiLCBcImJlYXQtZmFkZVwiLCBcImJvdW5jZVwiLCBcImZsaXAtYm90aFwiLCBcImZsaXAtaG9yaXpvbnRhbFwiLCBcImZsaXAtdmVydGljYWxcIiwgXCJmbGlwXCIsIFwiaW52ZXJzZVwiLCBcImxheWVyc1wiLCBcImxheWVycy1ib3R0b20tbGVmdFwiLCBcImxheWVycy1ib3R0b20tcmlnaHRcIiwgXCJsYXllcnMtY291bnRlclwiLCBcImxheWVycy10ZXh0XCIsIFwibGF5ZXJzLXRvcC1sZWZ0XCIsIFwibGF5ZXJzLXRvcC1yaWdodFwiLCBcImxpXCIsIFwicHVsbC1lbmRcIiwgXCJwdWxsLXN0YXJ0XCIsIFwicHVsc2VcIiwgXCJyb3RhdGUtMTgwXCIsIFwicm90YXRlLTI3MFwiLCBcInJvdGF0ZS05MFwiLCBcInJvdGF0ZS1ieVwiLCBcInNoYWtlXCIsIFwic3Bpbi1wdWxzZVwiLCBcInNwaW4tcmV2ZXJzZVwiLCBcInNwaW5cIiwgXCJzdGFjay0xeFwiLCBcInN0YWNrLTJ4XCIsIFwic3RhY2tcIiwgXCJ1bFwiLCBcIndpZHRoLWF1dG9cIiwgXCJ3aWR0aC1maXhlZFwiLCBsJDEuR1JPVVAsIGwkMS5TV0FQX09QQUNJVFksIGwkMS5QUklNQVJZLCBsJDEuU0VDT05EQVJZXSkuY29uY2F0KE8kMS5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh0LCBcInhcIik7XG4gICAgfSkpLmNvbmNhdChWJDEubWFwKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gXCJ3LVwiLmNvbmNhdCh0KTtcbiAgICB9KSk7XG4gIHZhciBybyA9IHtcbiAgICAgIFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiOiB7XG4gICAgICAgIDkwMDogXCJmYXNcIixcbiAgICAgICAgNDAwOiBcImZhclwiXG4gICAgICB9LFxuICAgICAgXCJGb250IEF3ZXNvbWUgNSBQcm9cIjoge1xuICAgICAgICA5MDA6IFwiZmFzXCIsXG4gICAgICAgIDQwMDogXCJmYXJcIixcbiAgICAgICAgbm9ybWFsOiBcImZhclwiLFxuICAgICAgICAzMDA6IFwiZmFsXCJcbiAgICAgIH0sXG4gICAgICBcIkZvbnQgQXdlc29tZSA1IEJyYW5kc1wiOiB7XG4gICAgICAgIDQwMDogXCJmYWJcIixcbiAgICAgICAgbm9ybWFsOiBcImZhYlwiXG4gICAgICB9LFxuICAgICAgXCJGb250IEF3ZXNvbWUgNSBEdW90b25lXCI6IHtcbiAgICAgICAgOTAwOiBcImZhZFwiXG4gICAgICB9XG4gICAgfTtcblxuICB2YXIgTkFNRVNQQUNFX0lERU5USUZJRVIgPSAnX19fRk9OVF9BV0VTT01FX19fJztcbiAgdmFyIFVOSVRTX0lOX0dSSUQgPSAxNjtcbiAgdmFyIERFRkFVTFRfQ1NTX1BSRUZJWCA9ICdmYSc7XG4gIHZhciBERUZBVUxUX1JFUExBQ0VNRU5UX0NMQVNTID0gJ3N2Zy1pbmxpbmUtLWZhJztcbiAgdmFyIERBVEFfRkFfSTJTVkcgPSAnZGF0YS1mYS1pMnN2Zyc7XG4gIHZhciBEQVRBX0ZBX1BTRVVET19FTEVNRU5UID0gJ2RhdGEtZmEtcHNldWRvLWVsZW1lbnQnO1xuICB2YXIgREFUQV9GQV9QU0VVRE9fRUxFTUVOVF9QRU5ESU5HID0gJ2RhdGEtZmEtcHNldWRvLWVsZW1lbnQtcGVuZGluZyc7XG4gIHZhciBEQVRBX1BSRUZJWCA9ICdkYXRhLXByZWZpeCc7XG4gIHZhciBEQVRBX0lDT04gPSAnZGF0YS1pY29uJztcbiAgdmFyIEhUTUxfQ0xBU1NfSTJTVkdfQkFTRV9DTEFTUyA9ICdmb250YXdlc29tZS1pMnN2Zyc7XG4gIHZhciBNVVRBVElPTl9BUFBST0FDSF9BU1lOQyA9ICdhc3luYyc7XG4gIHZhciBUQUdOQU1FU19UT19TS0lQX0ZPUl9QU0VVRE9FTEVNRU5UUyA9IFsnSFRNTCcsICdIRUFEJywgJ1NUWUxFJywgJ1NDUklQVCddO1xuICB2YXIgUFNFVURPX0VMRU1FTlRTID0gWyc6OmJlZm9yZScsICc6OmFmdGVyJywgJzpiZWZvcmUnLCAnOmFmdGVyJ107XG4gIHZhciBQUk9EVUNUSU9OID0gZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gXCJwcm9kdWN0aW9uXCIgPT09ICdwcm9kdWN0aW9uJztcbiAgICB9IGNhdGNoIChlJCQxKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KCk7XG4gIGZ1bmN0aW9uIGZhbWlseVByb3h5KG9iaikge1xuICAgIC8vIERlZmF1bHRzIHRvIHRoZSBjbGFzc2ljIGZhbWlseSBpZiBmYW1pbHkgaXMgbm90IGF2YWlsYWJsZVxuICAgIHJldHVybiBuZXcgUHJveHkob2JqLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0ID8gdGFyZ2V0W3Byb3BdIDogdGFyZ2V0W2ldO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHZhciBfUFJFRklYX1RPX1NUWUxFID0gX29iamVjdFNwcmVhZDIoe30sIHEpO1xuXG4gIC8vIFdlIGNoYW5nZWQgRkFDU1NDbGFzc2VzVG9TdHlsZUlkIGluIHRoZSBpY29ucyByZXBvIHRvIGJlIGNhbm9uaWNhbCBhbmQgYXMgc3VjaCwgXCJjbGFzc2ljXCIgZmFtaWx5IGRvZXMgbm90IGhhdmUgYW55XG4gIC8vIGR1b3RvbmUgc3R5bGVzLiAgQnV0IHdlIGRvIHN0aWxsIG5lZWQgZHVvdG9uZSBpbiBfUFJFRklYX1RPX1NUWUxFIGJlbG93LCBzbyB3ZSBhcmUgbWFudWFsbHkgYWRkaW5nXG4gIC8vIHsnZmEtZHVvdG9uZSc6ICdkdW90b25lJ31cbiAgX1BSRUZJWF9UT19TVFlMRVtpXSA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCB7XG4gICAgJ2ZhLWR1b3RvbmUnOiAnZHVvdG9uZSdcbiAgfSksIHFbaV0pLCBxdFsna2l0J10pLCBxdFsna2l0LWR1b3RvbmUnXSk7XG4gIHZhciBQUkVGSVhfVE9fU1RZTEUgPSBmYW1pbHlQcm94eShfUFJFRklYX1RPX1NUWUxFKTtcbiAgdmFyIF9TVFlMRV9UT19QUkVGSVggPSBfb2JqZWN0U3ByZWFkMih7fSwgX3QpO1xuXG4gIC8vIFdlIGNoYW5nZWQgRkFTdHlsZUlkVG9TaG9ydFByZWZpeElkIGluIHRoZSBpY29ucyByZXBvIHRvIGJlIGNhbm9uaWNhbCBhbmQgYXMgc3VjaCwgXCJjbGFzc2ljXCIgZmFtaWx5IGRvZXMgbm90IGhhdmUgYW55XG4gIC8vIGR1b3RvbmUgc3R5bGVzLiAgQnV0IHdlIGRvIHN0aWxsIG5lZWQgZHVvdG9uZSBpbiBfU1RZTEVfVE9fUFJFRklYIGJlbG93LCBzbyB3ZSBhcmUgbWFudWFsbHkgYWRkaW5nIHtkdW90b25lOiAnZmFkJ31cbiAgX1NUWUxFX1RPX1BSRUZJWFtpXSA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCB7XG4gICAgZHVvdG9uZTogJ2ZhZCdcbiAgfSksIF9TVFlMRV9UT19QUkVGSVhbaV0pLCB1bFsna2l0J10pLCB1bFsna2l0LWR1b3RvbmUnXSk7XG4gIHZhciBTVFlMRV9UT19QUkVGSVggPSBmYW1pbHlQcm94eShfU1RZTEVfVE9fUFJFRklYKTtcbiAgdmFyIF9QUkVGSVhfVE9fTE9OR19TVFlMRSA9IF9vYmplY3RTcHJlYWQyKHt9LCBIdCQxKTtcbiAgX1BSRUZJWF9UT19MT05HX1NUWUxFW2ldID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIF9QUkVGSVhfVE9fTE9OR19TVFlMRVtpXSksIGZsWydraXQnXSk7XG4gIHZhciBQUkVGSVhfVE9fTE9OR19TVFlMRSA9IGZhbWlseVByb3h5KF9QUkVGSVhfVE9fTE9OR19TVFlMRSk7XG4gIHZhciBfTE9OR19TVFlMRV9UT19QUkVGSVggPSBfb2JqZWN0U3ByZWFkMih7fSwgJHQkMSk7XG4gIF9MT05HX1NUWUxFX1RPX1BSRUZJWFtpXSA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBfTE9OR19TVFlMRV9UT19QUkVGSVhbaV0pLCBvbFsna2l0J10pO1xuICB2YXIgTE9OR19TVFlMRV9UT19QUkVGSVggPSBmYW1pbHlQcm94eShfTE9OR19TVFlMRV9UT19QUkVGSVgpO1xuICB2YXIgSUNPTl9TRUxFQ1RJT05fU1lOVEFYX1BBVFRFUk4gPSBFO1xuICB2YXIgTEFZRVJTX1RFWFRfQ0xBU1NOQU1FID0gJ2ZhLWxheWVycy10ZXh0JztcbiAgdmFyIEZPTlRfRkFNSUxZX1BBVFRFUk4gPSBfO1xuICB2YXIgX0ZPTlRfV0VJR0hUX1RPX1BSRUZJWCA9IF9vYmplY3RTcHJlYWQyKHt9LCBndCk7XG4gIHZhciBGT05UX1dFSUdIVF9UT19QUkVGSVggPSBmYW1pbHlQcm94eShfRk9OVF9XRUlHSFRfVE9fUFJFRklYKTtcbiAgdmFyIEFUVFJJQlVURVNfV0FUQ0hFRF9GT1JfTVVUQVRJT04gPSBbJ2NsYXNzJywgJ2RhdGEtcHJlZml4JywgJ2RhdGEtaWNvbicsICdkYXRhLWZhLXRyYW5zZm9ybScsICdkYXRhLWZhLW1hc2snXTtcbiAgdmFyIERVT1RPTkVfQ0xBU1NFUyA9IEg7XG4gIHZhciBSRVNFUlZFRF9DTEFTU0VTID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShIdCksIF90b0NvbnN1bWFibGVBcnJheSh0bykpO1xuXG4gIHZhciBpbml0aWFsID0gV0lORE9XLkZvbnRBd2Vzb21lQ29uZmlnIHx8IHt9O1xuICBmdW5jdGlvbiBnZXRBdHRyQ29uZmlnKGF0dHIpIHtcbiAgICB2YXIgZWxlbWVudCA9IERPQ1VNRU5ULnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFsnICsgYXR0ciArICddJyk7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICAgIC8vIEdldHRpbmcgYW4gZW1wdHkgc3RyaW5nIHdpbGwgb2NjdXIgaWYgdGhlIGF0dHJpYnV0ZSBpcyBzZXQgb24gdGhlIEhUTUwgdGFnIGJ1dCB3aXRob3V0IGEgdmFsdWVcbiAgICAvLyBXZSdsbCBhc3N1bWUgdGhhdCB0aGlzIGlzIGFuIGluZGljYXRpb24gdGhhdCBpdCBzaG91bGQgYmUgdG9nZ2xlZCB0byB0cnVlXG4gICAgaWYgKHZhbCA9PT0gJycpIHJldHVybiB0cnVlO1xuICAgIGlmICh2YWwgPT09ICdmYWxzZScpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodmFsID09PSAndHJ1ZScpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiB2YWw7XG4gIH1cbiAgaWYgKERPQ1VNRU5UICYmIHR5cGVvZiBET0NVTUVOVC5xdWVyeVNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIGF0dHJzID0gW1snZGF0YS1mYW1pbHktcHJlZml4JywgJ2ZhbWlseVByZWZpeCddLCBbJ2RhdGEtY3NzLXByZWZpeCcsICdjc3NQcmVmaXgnXSwgWydkYXRhLWZhbWlseS1kZWZhdWx0JywgJ2ZhbWlseURlZmF1bHQnXSwgWydkYXRhLXN0eWxlLWRlZmF1bHQnLCAnc3R5bGVEZWZhdWx0J10sIFsnZGF0YS1yZXBsYWNlbWVudC1jbGFzcycsICdyZXBsYWNlbWVudENsYXNzJ10sIFsnZGF0YS1hdXRvLXJlcGxhY2Utc3ZnJywgJ2F1dG9SZXBsYWNlU3ZnJ10sIFsnZGF0YS1hdXRvLWFkZC1jc3MnLCAnYXV0b0FkZENzcyddLCBbJ2RhdGEtc2VhcmNoLXBzZXVkby1lbGVtZW50cycsICdzZWFyY2hQc2V1ZG9FbGVtZW50cyddLCBbJ2RhdGEtc2VhcmNoLXBzZXVkby1lbGVtZW50cy13YXJuaW5ncycsICdzZWFyY2hQc2V1ZG9FbGVtZW50c1dhcm5pbmdzJ10sIFsnZGF0YS1zZWFyY2gtcHNldWRvLWVsZW1lbnRzLWZ1bGwtc2NhbicsICdzZWFyY2hQc2V1ZG9FbGVtZW50c0Z1bGxTY2FuJ10sIFsnZGF0YS1vYnNlcnZlLW11dGF0aW9ucycsICdvYnNlcnZlTXV0YXRpb25zJ10sIFsnZGF0YS1tdXRhdGUtYXBwcm9hY2gnLCAnbXV0YXRlQXBwcm9hY2gnXSwgWydkYXRhLWtlZXAtb3JpZ2luYWwtc291cmNlJywgJ2tlZXBPcmlnaW5hbFNvdXJjZSddLCBbJ2RhdGEtbWVhc3VyZS1wZXJmb3JtYW5jZScsICdtZWFzdXJlUGVyZm9ybWFuY2UnXSwgWydkYXRhLXNob3ctbWlzc2luZy1pY29ucycsICdzaG93TWlzc2luZ0ljb25zJ11dO1xuICAgIGF0dHJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpLFxuICAgICAgICBhdHRyID0gX3JlZjJbMF0sXG4gICAgICAgIGtleSA9IF9yZWYyWzFdO1xuICAgICAgdmFyIHZhbCA9IGNvZXJjZShnZXRBdHRyQ29uZmlnKGF0dHIpKTtcbiAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgICAgaW5pdGlhbFtrZXldID0gdmFsO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHZhciBfZGVmYXVsdCA9IHtcbiAgICBzdHlsZURlZmF1bHQ6ICdzb2xpZCcsXG4gICAgZmFtaWx5RGVmYXVsdDogaSxcbiAgICBjc3NQcmVmaXg6IERFRkFVTFRfQ1NTX1BSRUZJWCxcbiAgICByZXBsYWNlbWVudENsYXNzOiBERUZBVUxUX1JFUExBQ0VNRU5UX0NMQVNTLFxuICAgIGF1dG9SZXBsYWNlU3ZnOiB0cnVlLFxuICAgIGF1dG9BZGRDc3M6IHRydWUsXG4gICAgc2VhcmNoUHNldWRvRWxlbWVudHM6IGZhbHNlLFxuICAgIHNlYXJjaFBzZXVkb0VsZW1lbnRzV2FybmluZ3M6IHRydWUsXG4gICAgc2VhcmNoUHNldWRvRWxlbWVudHNGdWxsU2NhbjogZmFsc2UsXG4gICAgb2JzZXJ2ZU11dGF0aW9uczogdHJ1ZSxcbiAgICBtdXRhdGVBcHByb2FjaDogJ2FzeW5jJyxcbiAgICBrZWVwT3JpZ2luYWxTb3VyY2U6IHRydWUsXG4gICAgbWVhc3VyZVBlcmZvcm1hbmNlOiBmYWxzZSxcbiAgICBzaG93TWlzc2luZ0ljb25zOiB0cnVlXG4gIH07XG5cbiAgLy8gZmFtaWx5UHJlZml4IGlzIGRlcHJlY2F0ZWQgYnV0IHdlIG11c3Qgc3RpbGwgc3VwcG9ydCBpdCBpZiBwcmVzZW50XG4gIGlmIChpbml0aWFsLmZhbWlseVByZWZpeCkge1xuICAgIGluaXRpYWwuY3NzUHJlZml4ID0gaW5pdGlhbC5mYW1pbHlQcmVmaXg7XG4gIH1cbiAgdmFyIF9jb25maWcgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgX2RlZmF1bHQpLCBpbml0aWFsKTtcbiAgaWYgKCFfY29uZmlnLmF1dG9SZXBsYWNlU3ZnKSBfY29uZmlnLm9ic2VydmVNdXRhdGlvbnMgPSBmYWxzZTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuICBPYmplY3Qua2V5cyhfZGVmYXVsdCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbmZpZywga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsKSB7XG4gICAgICAgIF9jb25maWdba2V5XSA9IHZhbDtcbiAgICAgICAgX29uQ2hhbmdlQ2IuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICByZXR1cm4gY2IoY29uZmlnKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBfY29uZmlnW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIGZhbWlseVByZWZpeCBpcyBkZXByZWNhdGVkIGFzIG9mIDYuMi4wIGFuZCBzaG91bGQgYmUgcmVtb3ZlZCBpbiA3LjAuMFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29uZmlnLCAnZmFtaWx5UHJlZml4Jywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsKSB7XG4gICAgICBfY29uZmlnLmNzc1ByZWZpeCA9IHZhbDtcbiAgICAgIF9vbkNoYW5nZUNiLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHJldHVybiBjYihjb25maWcpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBfY29uZmlnLmNzc1ByZWZpeDtcbiAgICB9XG4gIH0pO1xuICBXSU5ET1cuRm9udEF3ZXNvbWVDb25maWcgPSBjb25maWc7XG4gIHZhciBfb25DaGFuZ2VDYiA9IFtdO1xuICBmdW5jdGlvbiBvbkNoYW5nZShjYikge1xuICAgIF9vbkNoYW5nZUNiLnB1c2goY2IpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBfb25DaGFuZ2VDYi5zcGxpY2UoX29uQ2hhbmdlQ2IuaW5kZXhPZihjYiksIDEpO1xuICAgIH07XG4gIH1cblxuICB2YXIgZCQyID0gVU5JVFNfSU5fR1JJRDtcbiAgdmFyIG1lYW5pbmdsZXNzVHJhbnNmb3JtID0ge1xuICAgIHNpemU6IDE2LFxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICByb3RhdGU6IDAsXG4gICAgZmxpcFg6IGZhbHNlLFxuICAgIGZsaXBZOiBmYWxzZVxuICB9O1xuICBmdW5jdGlvbiBidW5rZXIoZm4pIHtcbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cbiAgICAgIGZuLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCFQUk9EVUNUSU9OKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGluc2VydENzcyhjc3MpIHtcbiAgICBpZiAoIWNzcyB8fCAhSVNfRE9NKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBzdHlsZSA9IERPQ1VNRU5ULmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgc3R5bGUuaW5uZXJIVE1MID0gY3NzO1xuICAgIHZhciBoZWFkQ2hpbGRyZW4gPSBET0NVTUVOVC5oZWFkLmNoaWxkTm9kZXM7XG4gICAgdmFyIGJlZm9yZUNoaWxkID0gbnVsbDtcbiAgICBmb3IgKHZhciBpID0gaGVhZENoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgICB2YXIgY2hpbGQgPSBoZWFkQ2hpbGRyZW5baV07XG4gICAgICB2YXIgdGFnTmFtZSA9IChjaGlsZC50YWdOYW1lIHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgaWYgKFsnU1RZTEUnLCAnTElOSyddLmluZGV4T2YodGFnTmFtZSkgPiAtMSkge1xuICAgICAgICBiZWZvcmVDaGlsZCA9IGNoaWxkO1xuICAgICAgfVxuICAgIH1cbiAgICBET0NVTUVOVC5oZWFkLmluc2VydEJlZm9yZShzdHlsZSwgYmVmb3JlQ2hpbGQpO1xuICAgIHJldHVybiBjc3M7XG4gIH1cbiAgdmFyIGlkUG9vbCA9ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XG4gIGZ1bmN0aW9uIG5leHRVbmlxdWVJZCgpIHtcbiAgICB2YXIgc2l6ZSA9IDEyO1xuICAgIHZhciBpZCA9ICcnO1xuICAgIHdoaWxlIChzaXplLS0gPiAwKSB7XG4gICAgICBpZCArPSBpZFBvb2xbTWF0aC5yYW5kb20oKSAqIDYyIHwgMF07XG4gICAgfVxuICAgIHJldHVybiBpZDtcbiAgfVxuICBmdW5jdGlvbiB0b0FycmF5KG9iaikge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAob2JqIHx8IFtdKS5sZW5ndGggPj4+IDA7IGktLTspIHtcbiAgICAgIGFycmF5W2ldID0gb2JqW2ldO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cbiAgZnVuY3Rpb24gY2xhc3NBcnJheShub2RlKSB7XG4gICAgaWYgKG5vZGUuY2xhc3NMaXN0KSB7XG4gICAgICByZXR1cm4gdG9BcnJheShub2RlLmNsYXNzTGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAobm9kZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpLnNwbGl0KCcgJykuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGh0bWxFc2NhcGUoc3RyKSB7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KHN0cikucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykucmVwbGFjZSgvJy9nLCAnJiMzOTsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICB9XG4gIGZ1bmN0aW9uIGpvaW5BdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoYXR0cmlidXRlcyB8fCB7fSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgIHJldHVybiBhY2MgKyBcIlwiLmNvbmNhdChhdHRyaWJ1dGVOYW1lLCBcIj1cXFwiXCIpLmNvbmNhdChodG1sRXNjYXBlKGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pLCBcIlxcXCIgXCIpO1xuICAgIH0sICcnKS50cmltKCk7XG4gIH1cbiAgZnVuY3Rpb24gam9pblN0eWxlcyhzdHlsZXMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVzIHx8IHt9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc3R5bGVOYW1lKSB7XG4gICAgICByZXR1cm4gYWNjICsgXCJcIi5jb25jYXQoc3R5bGVOYW1lLCBcIjogXCIpLmNvbmNhdChzdHlsZXNbc3R5bGVOYW1lXS50cmltKCksIFwiO1wiKTtcbiAgICB9LCAnJyk7XG4gIH1cbiAgZnVuY3Rpb24gdHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkge1xuICAgIHJldHVybiB0cmFuc2Zvcm0uc2l6ZSAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0uc2l6ZSB8fCB0cmFuc2Zvcm0ueCAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0ueCB8fCB0cmFuc2Zvcm0ueSAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0ueSB8fCB0cmFuc2Zvcm0ucm90YXRlICE9PSBtZWFuaW5nbGVzc1RyYW5zZm9ybS5yb3RhdGUgfHwgdHJhbnNmb3JtLmZsaXBYIHx8IHRyYW5zZm9ybS5mbGlwWTtcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2Zvcm1Gb3JTdmcoX3JlZikge1xuICAgIHZhciB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybSxcbiAgICAgIGNvbnRhaW5lcldpZHRoID0gX3JlZi5jb250YWluZXJXaWR0aCxcbiAgICAgIGljb25XaWR0aCA9IF9yZWYuaWNvbldpZHRoO1xuICAgIHZhciBvdXRlciA9IHtcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIuY29uY2F0KGNvbnRhaW5lcldpZHRoIC8gMiwgXCIgMjU2KVwiKVxuICAgIH07XG4gICAgdmFyIGlubmVyVHJhbnNsYXRlID0gXCJ0cmFuc2xhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS54ICogMzIsIFwiLCBcIikuY29uY2F0KHRyYW5zZm9ybS55ICogMzIsIFwiKSBcIik7XG4gICAgdmFyIGlubmVyU2NhbGUgPSBcInNjYWxlKFwiLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIDE2ICogKHRyYW5zZm9ybS5mbGlwWCA/IC0xIDogMSksIFwiLCBcIikuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gMTYgKiAodHJhbnNmb3JtLmZsaXBZID8gLTEgOiAxKSwgXCIpIFwiKTtcbiAgICB2YXIgaW5uZXJSb3RhdGUgPSBcInJvdGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnJvdGF0ZSwgXCIgMCAwKVwiKTtcbiAgICB2YXIgaW5uZXIgPSB7XG4gICAgICB0cmFuc2Zvcm06IFwiXCIuY29uY2F0KGlubmVyVHJhbnNsYXRlLCBcIiBcIikuY29uY2F0KGlubmVyU2NhbGUsIFwiIFwiKS5jb25jYXQoaW5uZXJSb3RhdGUpXG4gICAgfTtcbiAgICB2YXIgcGF0aCA9IHtcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIuY29uY2F0KGljb25XaWR0aCAvIDIgKiAtMSwgXCIgLTI1NilcIilcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICBvdXRlcjogb3V0ZXIsXG4gICAgICBpbm5lcjogaW5uZXIsXG4gICAgICBwYXRoOiBwYXRoXG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB0cmFuc2Zvcm1Gb3JDc3MoX3JlZjIpIHtcbiAgICB2YXIgdHJhbnNmb3JtID0gX3JlZjIudHJhbnNmb3JtLFxuICAgICAgX3JlZjIkd2lkdGggPSBfcmVmMi53aWR0aCxcbiAgICAgIHdpZHRoID0gX3JlZjIkd2lkdGggPT09IHZvaWQgMCA/IFVOSVRTX0lOX0dSSUQgOiBfcmVmMiR3aWR0aCxcbiAgICAgIF9yZWYyJGhlaWdodCA9IF9yZWYyLmhlaWdodCxcbiAgICAgIGhlaWdodCA9IF9yZWYyJGhlaWdodCA9PT0gdm9pZCAwID8gVU5JVFNfSU5fR1JJRCA6IF9yZWYyJGhlaWdodCxcbiAgICAgIF9yZWYyJHN0YXJ0Q2VudGVyZWQgPSBfcmVmMi5zdGFydENlbnRlcmVkLFxuICAgICAgc3RhcnRDZW50ZXJlZCA9IF9yZWYyJHN0YXJ0Q2VudGVyZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIkc3RhcnRDZW50ZXJlZDtcbiAgICB2YXIgdmFsID0gJyc7XG4gICAgaWYgKHN0YXJ0Q2VudGVyZWQgJiYgSVNfSUUpIHtcbiAgICAgIHZhbCArPSBcInRyYW5zbGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnggLyBkJDIgLSB3aWR0aCAvIDIsIFwiZW0sIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgLyBkJDIgLSBoZWlnaHQgLyAyLCBcImVtKSBcIik7XG4gICAgfSBlbHNlIGlmIChzdGFydENlbnRlcmVkKSB7XG4gICAgICB2YWwgKz0gXCJ0cmFuc2xhdGUoY2FsYygtNTAlICsgXCIuY29uY2F0KHRyYW5zZm9ybS54IC8gZCQyLCBcImVtKSwgY2FsYygtNTAlICsgXCIpLmNvbmNhdCh0cmFuc2Zvcm0ueSAvIGQkMiwgXCJlbSkpIFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsICs9IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAvIGQkMiwgXCJlbSwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0ueSAvIGQkMiwgXCJlbSkgXCIpO1xuICAgIH1cbiAgICB2YWwgKz0gXCJzY2FsZShcIi5jb25jYXQodHJhbnNmb3JtLnNpemUgLyBkJDIgKiAodHJhbnNmb3JtLmZsaXBYID8gLTEgOiAxKSwgXCIsIFwiKS5jb25jYXQodHJhbnNmb3JtLnNpemUgLyBkJDIgKiAodHJhbnNmb3JtLmZsaXBZID8gLTEgOiAxKSwgXCIpIFwiKTtcbiAgICB2YWwgKz0gXCJyb3RhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS5yb3RhdGUsIFwiZGVnKSBcIik7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIHZhciBiYXNlU3R5bGVzID0gXCI6cm9vdCwgOmhvc3Qge1xcbiAgLS1mYS1mb250LXNvbGlkOiBub3JtYWwgOTAwIDFlbS8xIFxcXCJGb250IEF3ZXNvbWUgNyBGcmVlXFxcIjtcXG4gIC0tZmEtZm9udC1yZWd1bGFyOiBub3JtYWwgNDAwIDFlbS8xIFxcXCJGb250IEF3ZXNvbWUgNyBGcmVlXFxcIjtcXG4gIC0tZmEtZm9udC1saWdodDogbm9ybWFsIDMwMCAxZW0vMSBcXFwiRm9udCBBd2Vzb21lIDcgUHJvXFxcIjtcXG4gIC0tZmEtZm9udC10aGluOiBub3JtYWwgMTAwIDFlbS8xIFxcXCJGb250IEF3ZXNvbWUgNyBQcm9cXFwiO1xcbiAgLS1mYS1mb250LWR1b3RvbmU6IG5vcm1hbCA5MDAgMWVtLzEgXFxcIkZvbnQgQXdlc29tZSA3IER1b3RvbmVcXFwiO1xcbiAgLS1mYS1mb250LWR1b3RvbmUtcmVndWxhcjogbm9ybWFsIDQwMCAxZW0vMSBcXFwiRm9udCBBd2Vzb21lIDcgRHVvdG9uZVxcXCI7XFxuICAtLWZhLWZvbnQtZHVvdG9uZS1saWdodDogbm9ybWFsIDMwMCAxZW0vMSBcXFwiRm9udCBBd2Vzb21lIDcgRHVvdG9uZVxcXCI7XFxuICAtLWZhLWZvbnQtZHVvdG9uZS10aGluOiBub3JtYWwgMTAwIDFlbS8xIFxcXCJGb250IEF3ZXNvbWUgNyBEdW90b25lXFxcIjtcXG4gIC0tZmEtZm9udC1icmFuZHM6IG5vcm1hbCA0MDAgMWVtLzEgXFxcIkZvbnQgQXdlc29tZSA3IEJyYW5kc1xcXCI7XFxuICAtLWZhLWZvbnQtc2hhcnAtc29saWQ6IG5vcm1hbCA5MDAgMWVtLzEgXFxcIkZvbnQgQXdlc29tZSA3IFNoYXJwXFxcIjtcXG4gIC0tZmEtZm9udC1zaGFycC1yZWd1bGFyOiBub3JtYWwgNDAwIDFlbS8xIFxcXCJGb250IEF3ZXNvbWUgNyBTaGFycFxcXCI7XFxuICAtLWZhLWZvbnQtc2hhcnAtbGlnaHQ6IG5vcm1hbCAzMDAgMWVtLzEgXFxcIkZvbnQgQXdlc29tZSA3IFNoYXJwXFxcIjtcXG4gIC0tZmEtZm9udC1zaGFycC10aGluOiBub3JtYWwgMTAwIDFlbS8xIFxcXCJGb250IEF3ZXNvbWUgNyBTaGFycFxcXCI7XFxuICAtLWZhLWZvbnQtc2hhcnAtZHVvdG9uZS1zb2xpZDogbm9ybWFsIDkwMCAxZW0vMSBcXFwiRm9udCBBd2Vzb21lIDcgU2hhcnAgRHVvdG9uZVxcXCI7XFxuICAtLWZhLWZvbnQtc2hhcnAtZHVvdG9uZS1yZWd1bGFyOiBub3JtYWwgNDAwIDFlbS8xIFxcXCJGb250IEF3ZXNvbWUgNyBTaGFycCBEdW90b25lXFxcIjtcXG4gIC0tZmEtZm9udC1zaGFycC1kdW90b25lLWxpZ2h0OiBub3JtYWwgMzAwIDFlbS8xIFxcXCJGb250IEF3ZXNvbWUgNyBTaGFycCBEdW90b25lXFxcIjtcXG4gIC0tZmEtZm9udC1zaGFycC1kdW90b25lLXRoaW46IG5vcm1hbCAxMDAgMWVtLzEgXFxcIkZvbnQgQXdlc29tZSA3IFNoYXJwIER1b3RvbmVcXFwiO1xcbiAgLS1mYS1mb250LXNsYWItcmVndWxhcjogbm9ybWFsIDQwMCAxZW0vMSBcXFwiRm9udCBBd2Vzb21lIDcgU2xhYlxcXCI7XFxuICAtLWZhLWZvbnQtc2xhYi1wcmVzcy1yZWd1bGFyOiBub3JtYWwgNDAwIDFlbS8xIFxcXCJGb250IEF3ZXNvbWUgNyBTbGFiIFByZXNzXFxcIjtcXG4gIC0tZmEtZm9udC13aGl0ZWJvYXJkLXNlbWlib2xkOiBub3JtYWwgNjAwIDFlbS8xIFxcXCJGb250IEF3ZXNvbWUgNyBXaGl0ZWJvYXJkXFxcIjtcXG4gIC0tZmEtZm9udC10aHVtYnByaW50LWxpZ2h0OiBub3JtYWwgMzAwIDFlbS8xIFxcXCJGb250IEF3ZXNvbWUgNyBUaHVtYnByaW50XFxcIjtcXG4gIC0tZmEtZm9udC1ub3Rkb2ctc29saWQ6IG5vcm1hbCA5MDAgMWVtLzEgXFxcIkZvbnQgQXdlc29tZSA3IE5vdGRvZ1xcXCI7XFxuICAtLWZhLWZvbnQtbm90ZG9nLWR1by1zb2xpZDogbm9ybWFsIDkwMCAxZW0vMSBcXFwiRm9udCBBd2Vzb21lIDcgTm90ZG9nIER1b1xcXCI7XFxuICAtLWZhLWZvbnQtZXRjaC1zb2xpZDogbm9ybWFsIDkwMCAxZW0vMSBcXFwiRm9udCBBd2Vzb21lIDcgRXRjaFxcXCI7XFxuICAtLWZhLWZvbnQtamVsbHktcmVndWxhcjogbm9ybWFsIDQwMCAxZW0vMSBcXFwiRm9udCBBd2Vzb21lIDcgSmVsbHlcXFwiO1xcbiAgLS1mYS1mb250LWplbGx5LWZpbGwtcmVndWxhcjogbm9ybWFsIDQwMCAxZW0vMSBcXFwiRm9udCBBd2Vzb21lIDcgSmVsbHkgRmlsbFxcXCI7XFxuICAtLWZhLWZvbnQtamVsbHktZHVvLXJlZ3VsYXI6IG5vcm1hbCA0MDAgMWVtLzEgXFxcIkZvbnQgQXdlc29tZSA3IEplbGx5IER1b1xcXCI7XFxuICAtLWZhLWZvbnQtY2hpc2VsLXJlZ3VsYXI6IG5vcm1hbCA0MDAgMWVtLzEgXFxcIkZvbnQgQXdlc29tZSA3IENoaXNlbFxcXCI7XFxuICAtLWZhLWZvbnQtdXRpbGl0eS1zZW1pYm9sZDogbm9ybWFsIDYwMCAxZW0vMSBcXFwiRm9udCBBd2Vzb21lIDcgVXRpbGl0eVxcXCI7XFxuICAtLWZhLWZvbnQtdXRpbGl0eS1kdW8tc2VtaWJvbGQ6IG5vcm1hbCA2MDAgMWVtLzEgXFxcIkZvbnQgQXdlc29tZSA3IFV0aWxpdHkgRHVvXFxcIjtcXG4gIC0tZmEtZm9udC11dGlsaXR5LWZpbGwtc2VtaWJvbGQ6IG5vcm1hbCA2MDAgMWVtLzEgXFxcIkZvbnQgQXdlc29tZSA3IFV0aWxpdHkgRmlsbFxcXCI7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYSB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGRpc3BsYXk6IHZhcigtLWZhLWRpc3BsYXksIGlubGluZS1ibG9jayk7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgdmVydGljYWwtYWxpZ246IC0wLjEyNWVtO1xcbiAgd2lkdGg6IHZhcigtLWZhLXdpZHRoLCAxLjI1ZW0pO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtMnhzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiAwLjFlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXhzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiAwZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1zbSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMDcxNDI4NTcxNGVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtbGcge1xcbiAgdmVydGljYWwtYWxpZ246IC0wLjJlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXhsIHtcXG4gIHZlcnRpY2FsLWFsaWduOiAtMC4yNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtMnhsIHtcXG4gIHZlcnRpY2FsLWFsaWduOiAtMC4zMTI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1wdWxsLWxlZnQsXFxuLnN2Zy1pbmxpbmUtLWZhIC5mYS1wdWxsLXN0YXJ0IHtcXG4gIGZsb2F0OiBpbmxpbmUtc3RhcnQ7XFxuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tZmEtcHVsbC1tYXJnaW4sIDAuM2VtKTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXB1bGwtcmlnaHQsXFxuLnN2Zy1pbmxpbmUtLWZhIC5mYS1wdWxsLWVuZCB7XFxuICBmbG9hdDogaW5saW5lLWVuZDtcXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLWZhLXB1bGwtbWFyZ2luLCAwLjNlbSk7XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1saSB7XFxuICB3aWR0aDogdmFyKC0tZmEtbGktd2lkdGgsIDJlbSk7XFxuICBpbnNldC1pbmxpbmUtc3RhcnQ6IGNhbGMoLTEgKiB2YXIoLS1mYS1saS13aWR0aCwgMmVtKSk7XFxuICBpbnNldC1ibG9jay1zdGFydDogMC4yNWVtOyAvKiBzeW5jaW5nIHZlcnRpY2FsIGFsaWdubWVudCB3aXRoIFdlYiBGb250IHJlbmRlcmluZyAqL1xcbn1cXG5cXG4uZmEtbGF5ZXJzLWNvdW50ZXIsIC5mYS1sYXllcnMtdGV4dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mYS1sYXllcnMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMTI1ZW07XFxuICB3aWR0aDogdmFyKC0tZmEtd2lkdGgsIDEuMjVlbSk7XFxufVxcbi5mYS1sYXllcnMgLnN2Zy1pbmxpbmUtLWZhIHtcXG4gIGluc2V0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcXG59XFxuXFxuLmZhLWxheWVycy10ZXh0IHtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xcbn1cXG5cXG4uZmEtbGF5ZXJzLWNvdW50ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmEtY291bnRlci1iYWNrZ3JvdW5kLWNvbG9yLCAjZmYyNTNhKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWZhLWNvdW50ZXItYm9yZGVyLXJhZGl1cywgMWVtKTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogdmFyKC0tZmEtaW52ZXJzZSwgI2ZmZik7XFxuICBsaW5lLWhlaWdodDogdmFyKC0tZmEtY291bnRlci1saW5lLWhlaWdodCwgMSk7XFxuICBtYXgtd2lkdGg6IHZhcigtLWZhLWNvdW50ZXItbWF4LXdpZHRoLCA1ZW0pO1xcbiAgbWluLXdpZHRoOiB2YXIoLS1mYS1jb3VudGVyLW1pbi13aWR0aCwgMS41ZW0pO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IHZhcigtLWZhLWNvdW50ZXItcGFkZGluZywgMC4yNWVtIDAuNWVtKTtcXG4gIHJpZ2h0OiB2YXIoLS1mYS1yaWdodCwgMCk7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHRvcDogdmFyKC0tZmEtdG9wLCAwKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUodmFyKC0tZmEtY291bnRlci1zY2FsZSwgMC4yNSkpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbn1cXG5cXG4uZmEtbGF5ZXJzLWJvdHRvbS1yaWdodCB7XFxuICBib3R0b206IHZhcigtLWZhLWJvdHRvbSwgMCk7XFxuICByaWdodDogdmFyKC0tZmEtcmlnaHQsIDApO1xcbiAgdG9wOiBhdXRvO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1mYS1sYXllcnMtc2NhbGUsIDAuMjUpKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcXG59XFxuXFxuLmZhLWxheWVycy1ib3R0b20tbGVmdCB7XFxuICBib3R0b206IHZhcigtLWZhLWJvdHRvbSwgMCk7XFxuICBsZWZ0OiB2YXIoLS1mYS1sZWZ0LCAwKTtcXG4gIHJpZ2h0OiBhdXRvO1xcbiAgdG9wOiBhdXRvO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1mYS1sYXllcnMtc2NhbGUsIDAuMjUpKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbn1cXG5cXG4uZmEtbGF5ZXJzLXRvcC1yaWdodCB7XFxuICB0b3A6IHZhcigtLWZhLXRvcCwgMCk7XFxuICByaWdodDogdmFyKC0tZmEtcmlnaHQsIDApO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1mYS1sYXllcnMtc2NhbGUsIDAuMjUpKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXG59XFxuXFxuLmZhLWxheWVycy10b3AtbGVmdCB7XFxuICBsZWZ0OiB2YXIoLS1mYS1sZWZ0LCAwKTtcXG4gIHJpZ2h0OiBhdXRvO1xcbiAgdG9wOiB2YXIoLS1mYS10b3AsIDApO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1mYS1sYXllcnMtc2NhbGUsIDAuMjUpKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbn1cXG5cXG4uZmEtMXgge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi5mYS0yeCB7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLmZhLTN4IHtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbn1cXG5cXG4uZmEtNHgge1xcbiAgZm9udC1zaXplOiA0ZW07XFxufVxcblxcbi5mYS01eCB7XFxuICBmb250LXNpemU6IDVlbTtcXG59XFxuXFxuLmZhLTZ4IHtcXG4gIGZvbnQtc2l6ZTogNmVtO1xcbn1cXG5cXG4uZmEtN3gge1xcbiAgZm9udC1zaXplOiA3ZW07XFxufVxcblxcbi5mYS04eCB7XFxuICBmb250LXNpemU6IDhlbTtcXG59XFxuXFxuLmZhLTl4IHtcXG4gIGZvbnQtc2l6ZTogOWVtO1xcbn1cXG5cXG4uZmEtMTB4IHtcXG4gIGZvbnQtc2l6ZTogMTBlbTtcXG59XFxuXFxuLmZhLTJ4cyB7XFxuICBmb250LXNpemU6IGNhbGMoMTAgLyAxNiAqIDFlbSk7IC8qIGNvbnZlcnRzIGEgMTBweCBzaXplIGludG8gYW4gZW0tYmFzZWQgdmFsdWUgdGhhdCdzIHJlbGF0aXZlIHRvIHRoZSBzY2FsZSdzIDE2cHggYmFzZSAqL1xcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMSAvIDEwICogMWVtKTsgLyogc2V0cyB0aGUgbGluZS1oZWlnaHQgb2YgdGhlIGljb24gYmFjayB0byB0aGF0IG9mIGl0J3MgcGFyZW50ICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogY2FsYygoNiAvIDEwIC0gMC4zNzUpICogMWVtKTsgLyogdmVydGljYWxseSBjZW50ZXJzIHRoZSBpY29uIHRha2luZyBpbnRvIGFjY291bnQgdGhlIHN1cnJvdW5kaW5nIHRleHQncyBkZXNjZW5kZXIgKi9cXG59XFxuXFxuLmZhLXhzIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxMiAvIDE2ICogMWVtKTsgLyogY29udmVydHMgYSAxMnB4IHNpemUgaW50byBhbiBlbS1iYXNlZCB2YWx1ZSB0aGF0J3MgcmVsYXRpdmUgdG8gdGhlIHNjYWxlJ3MgMTZweCBiYXNlICovXFxuICBsaW5lLWhlaWdodDogY2FsYygxIC8gMTIgKiAxZW0pOyAvKiBzZXRzIHRoZSBsaW5lLWhlaWdodCBvZiB0aGUgaWNvbiBiYWNrIHRvIHRoYXQgb2YgaXQncyBwYXJlbnQgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBjYWxjKCg2IC8gMTIgLSAwLjM3NSkgKiAxZW0pOyAvKiB2ZXJ0aWNhbGx5IGNlbnRlcnMgdGhlIGljb24gdGFraW5nIGludG8gYWNjb3VudCB0aGUgc3Vycm91bmRpbmcgdGV4dCdzIGRlc2NlbmRlciAqL1xcbn1cXG5cXG4uZmEtc20ge1xcbiAgZm9udC1zaXplOiBjYWxjKDE0IC8gMTYgKiAxZW0pOyAvKiBjb252ZXJ0cyBhIDE0cHggc2l6ZSBpbnRvIGFuIGVtLWJhc2VkIHZhbHVlIHRoYXQncyByZWxhdGl2ZSB0byB0aGUgc2NhbGUncyAxNnB4IGJhc2UgKi9cXG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDEgLyAxNCAqIDFlbSk7IC8qIHNldHMgdGhlIGxpbmUtaGVpZ2h0IG9mIHRoZSBpY29uIGJhY2sgdG8gdGhhdCBvZiBpdCdzIHBhcmVudCAqL1xcbiAgdmVydGljYWwtYWxpZ246IGNhbGMoKDYgLyAxNCAtIDAuMzc1KSAqIDFlbSk7IC8qIHZlcnRpY2FsbHkgY2VudGVycyB0aGUgaWNvbiB0YWtpbmcgaW50byBhY2NvdW50IHRoZSBzdXJyb3VuZGluZyB0ZXh0J3MgZGVzY2VuZGVyICovXFxufVxcblxcbi5mYS1sZyB7XFxuICBmb250LXNpemU6IGNhbGMoMjAgLyAxNiAqIDFlbSk7IC8qIGNvbnZlcnRzIGEgMjBweCBzaXplIGludG8gYW4gZW0tYmFzZWQgdmFsdWUgdGhhdCdzIHJlbGF0aXZlIHRvIHRoZSBzY2FsZSdzIDE2cHggYmFzZSAqL1xcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMSAvIDIwICogMWVtKTsgLyogc2V0cyB0aGUgbGluZS1oZWlnaHQgb2YgdGhlIGljb24gYmFjayB0byB0aGF0IG9mIGl0J3MgcGFyZW50ICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogY2FsYygoNiAvIDIwIC0gMC4zNzUpICogMWVtKTsgLyogdmVydGljYWxseSBjZW50ZXJzIHRoZSBpY29uIHRha2luZyBpbnRvIGFjY291bnQgdGhlIHN1cnJvdW5kaW5nIHRleHQncyBkZXNjZW5kZXIgKi9cXG59XFxuXFxuLmZhLXhsIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygyNCAvIDE2ICogMWVtKTsgLyogY29udmVydHMgYSAyNHB4IHNpemUgaW50byBhbiBlbS1iYXNlZCB2YWx1ZSB0aGF0J3MgcmVsYXRpdmUgdG8gdGhlIHNjYWxlJ3MgMTZweCBiYXNlICovXFxuICBsaW5lLWhlaWdodDogY2FsYygxIC8gMjQgKiAxZW0pOyAvKiBzZXRzIHRoZSBsaW5lLWhlaWdodCBvZiB0aGUgaWNvbiBiYWNrIHRvIHRoYXQgb2YgaXQncyBwYXJlbnQgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBjYWxjKCg2IC8gMjQgLSAwLjM3NSkgKiAxZW0pOyAvKiB2ZXJ0aWNhbGx5IGNlbnRlcnMgdGhlIGljb24gdGFraW5nIGludG8gYWNjb3VudCB0aGUgc3Vycm91bmRpbmcgdGV4dCdzIGRlc2NlbmRlciAqL1xcbn1cXG5cXG4uZmEtMnhsIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygzMiAvIDE2ICogMWVtKTsgLyogY29udmVydHMgYSAzMnB4IHNpemUgaW50byBhbiBlbS1iYXNlZCB2YWx1ZSB0aGF0J3MgcmVsYXRpdmUgdG8gdGhlIHNjYWxlJ3MgMTZweCBiYXNlICovXFxuICBsaW5lLWhlaWdodDogY2FsYygxIC8gMzIgKiAxZW0pOyAvKiBzZXRzIHRoZSBsaW5lLWhlaWdodCBvZiB0aGUgaWNvbiBiYWNrIHRvIHRoYXQgb2YgaXQncyBwYXJlbnQgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBjYWxjKCg2IC8gMzIgLSAwLjM3NSkgKiAxZW0pOyAvKiB2ZXJ0aWNhbGx5IGNlbnRlcnMgdGhlIGljb24gdGFraW5nIGludG8gYWNjb3VudCB0aGUgc3Vycm91bmRpbmcgdGV4dCdzIGRlc2NlbmRlciAqL1xcbn1cXG5cXG4uZmEtd2lkdGgtYXV0byB7XFxuICAtLWZhLXdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uZmEtZncsXFxuLmZhLXdpZHRoLWZpeGVkIHtcXG4gIC0tZmEtd2lkdGg6IDEuMjVlbTtcXG59XFxuXFxuLmZhLXVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLWZhLWxpLW1hcmdpbiwgMi41ZW0pO1xcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxufVxcbi5mYS11bCA+IGxpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZhLWxpIHtcXG4gIGluc2V0LWlubGluZS1zdGFydDogY2FsYygtMSAqIHZhcigtLWZhLWxpLXdpZHRoLCAyZW0pKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiB2YXIoLS1mYS1saS13aWR0aCwgMmVtKTtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKiBIZWFkcyBVcDogQm9yZGVyZWQgSWNvbnMgd2lsbCBub3QgYmUgc3VwcG9ydGVkIGluIHRoZSBmdXR1cmUhXFxuICAtIFRoaXMgZmVhdHVyZSB3aWxsIGJlIGRlcHJlY2F0ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZSBvZiBGb250IEF3ZXNvbWUgKHY4KSFcXG4gIC0gWW91IG1heSBjb250aW51ZSB0byB1c2UgaXQgaW4gdGhpcyB2ZXJzaW9uICp2NyksIGJ1dCBpdCB3aWxsIG5vdCBiZSBzdXBwb3J0ZWQgaW4gRm9udCBBd2Vzb21lIHY4LlxcbiovXFxuLyogTm90ZXM6XFxuKiAtLUB7di4kY3NzLXByZWZpeH0tYm9yZGVyLXdpZHRoID0gMS8xNiBieSBkZWZhdWx0ICh0byByZW5kZXIgYXMgfjFweCBiYXNlZCBvbiBhIDE2cHggZGVmYXVsdCBmb250LXNpemUpXFxuKiAtLUB7di4kY3NzLXByZWZpeH0tYm9yZGVyLXBhZGRpbmcgPVxcbiAgKiogMy8xNiBmb3IgdmVydGljYWwgcGFkZGluZyAodG8gZ2l2ZSB+MnB4IG9mIHZlcnRpY2FsIHdoaXRlc3BhY2UgYXJvdW5kIGFuIGljb24gY29uc2lkZXJpbmcgaXQncyB2ZXJ0aWNhbCBhbGlnbm1lbnQpXFxuICAqKiA0LzE2IGZvciBob3Jpem9udGFsIHBhZGRpbmcgKHRvIGdpdmUgfjRweCBvZiBob3Jpem9udGFsIHdoaXRlc3BhY2UgYXJvdW5kIGFuIGljb24pXFxuKi9cXG4uZmEtYm9yZGVyIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmEtYm9yZGVyLWNvbG9yLCAjZWVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWZhLWJvcmRlci1yYWRpdXMsIDAuMWVtKTtcXG4gIGJvcmRlci1zdHlsZTogdmFyKC0tZmEtYm9yZGVyLXN0eWxlLCBzb2xpZCk7XFxuICBib3JkZXItd2lkdGg6IHZhcigtLWZhLWJvcmRlci13aWR0aCwgMC4wNjI1ZW0pO1xcbiAgYm94LXNpemluZzogdmFyKC0tZmEtYm9yZGVyLWJveC1zaXppbmcsIGNvbnRlbnQtYm94KTtcXG4gIHBhZGRpbmc6IHZhcigtLWZhLWJvcmRlci1wYWRkaW5nLCAwLjE4NzVlbSAwLjI1ZW0pO1xcbn1cXG5cXG4uZmEtcHVsbC1sZWZ0LFxcbi5mYS1wdWxsLXN0YXJ0IHtcXG4gIGZsb2F0OiBpbmxpbmUtc3RhcnQ7XFxuICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0tZmEtcHVsbC1tYXJnaW4sIDAuM2VtKTtcXG59XFxuXFxuLmZhLXB1bGwtcmlnaHQsXFxuLmZhLXB1bGwtZW5kIHtcXG4gIGZsb2F0OiBpbmxpbmUtZW5kO1xcbiAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0tZmEtcHVsbC1tYXJnaW4sIDAuM2VtKTtcXG59XFxuXFxuLmZhLWJlYXQge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhLWJlYXQ7XFxuICBhbmltYXRpb24tZGVsYXk6IHZhcigtLWZhLWFuaW1hdGlvbi1kZWxheSwgMHMpO1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLWRpcmVjdGlvbiwgbm9ybWFsKTtcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLWR1cmF0aW9uLCAxcyk7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiB2YXIoLS1mYS1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50LCBpbmZpbml0ZSk7XFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tdGltaW5nLCBlYXNlLWluLW91dCk7XFxufVxcblxcbi5mYS1ib3VuY2Uge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhLWJvdW5jZTtcXG4gIGFuaW1hdGlvbi1kZWxheTogdmFyKC0tZmEtYW5pbWF0aW9uLWRlbGF5LCAwcyk7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tZGlyZWN0aW9uLCBub3JtYWwpO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tZHVyYXRpb24sIDFzKTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IHZhcigtLWZhLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsIGluZmluaXRlKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsIGN1YmljLWJlemllcigwLjI4LCAwLjg0LCAwLjQyLCAxKSk7XFxufVxcblxcbi5mYS1mYWRlIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYS1mYWRlO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1mYS1hbmltYXRpb24tZGVsYXksIDBzKTtcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi1kaXJlY3Rpb24sIG5vcm1hbCk7XFxuICBhbmltYXRpb24tZHVyYXRpb246IHZhcigtLWZhLWFuaW1hdGlvbi1kdXJhdGlvbiwgMXMpO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogdmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCwgaW5maW5pdGUpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLXRpbWluZywgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSk7XFxufVxcblxcbi5mYS1iZWF0LWZhZGUge1xcbiAgYW5pbWF0aW9uLW5hbWU6IGZhLWJlYXQtZmFkZTtcXG4gIGFuaW1hdGlvbi1kZWxheTogdmFyKC0tZmEtYW5pbWF0aW9uLWRlbGF5LCAwcyk7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tZGlyZWN0aW9uLCBub3JtYWwpO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tZHVyYXRpb24sIDFzKTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IHZhcigtLWZhLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsIGluZmluaXRlKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkpO1xcbn1cXG5cXG4uZmEtZmxpcCB7XFxuICBhbmltYXRpb24tbmFtZTogZmEtZmxpcDtcXG4gIGFuaW1hdGlvbi1kZWxheTogdmFyKC0tZmEtYW5pbWF0aW9uLWRlbGF5LCAwcyk7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tZGlyZWN0aW9uLCBub3JtYWwpO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tZHVyYXRpb24sIDFzKTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IHZhcigtLWZhLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsIGluZmluaXRlKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsIGVhc2UtaW4tb3V0KTtcXG59XFxuXFxuLmZhLXNoYWtlIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYS1zaGFrZTtcXG4gIGFuaW1hdGlvbi1kZWxheTogdmFyKC0tZmEtYW5pbWF0aW9uLWRlbGF5LCAwcyk7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tZGlyZWN0aW9uLCBub3JtYWwpO1xcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1mYS1hbmltYXRpb24tZHVyYXRpb24sIDFzKTtcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IHZhcigtLWZhLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQsIGluZmluaXRlKTtcXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi10aW1pbmcsIGxpbmVhcik7XFxufVxcblxcbi5mYS1zcGluIHtcXG4gIGFuaW1hdGlvbi1uYW1lOiBmYS1zcGluO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1mYS1hbmltYXRpb24tZGVsYXksIDBzKTtcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi1kaXJlY3Rpb24sIG5vcm1hbCk7XFxuICBhbmltYXRpb24tZHVyYXRpb246IHZhcigtLWZhLWFuaW1hdGlvbi1kdXJhdGlvbiwgMnMpO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogdmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCwgaW5maW5pdGUpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLXRpbWluZywgbGluZWFyKTtcXG59XFxuXFxuLmZhLXNwaW4tcmV2ZXJzZSB7XFxuICAtLWZhLWFuaW1hdGlvbi1kaXJlY3Rpb246IHJldmVyc2U7XFxufVxcblxcbi5mYS1wdWxzZSxcXG4uZmEtc3Bpbi1wdWxzZSB7XFxuICBhbmltYXRpb24tbmFtZTogZmEtc3BpbjtcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IHZhcigtLWZhLWFuaW1hdGlvbi1kaXJlY3Rpb24sIG5vcm1hbCk7XFxuICBhbmltYXRpb24tZHVyYXRpb246IHZhcigtLWZhLWFuaW1hdGlvbi1kdXJhdGlvbiwgMXMpO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogdmFyKC0tZmEtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCwgaW5maW5pdGUpO1xcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tZmEtYW5pbWF0aW9uLXRpbWluZywgc3RlcHMoOCkpO1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgLmZhLWJlYXQsXFxuICAuZmEtYm91bmNlLFxcbiAgLmZhLWZhZGUsXFxuICAuZmEtYmVhdC1mYWRlLFxcbiAgLmZhLWZsaXAsXFxuICAuZmEtcHVsc2UsXFxuICAuZmEtc2hha2UsXFxuICAuZmEtc3BpbixcXG4gIC5mYS1zcGluLXB1bHNlIHtcXG4gICAgYW5pbWF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYS1iZWF0IHtcXG4gIDAlLCA5MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgfVxcbiAgNDUlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1mYS1iZWF0LXNjYWxlLCAxLjI1KSk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmEtYm91bmNlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbiAgMTAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSh2YXIoLS1mYS1ib3VuY2Utc3RhcnQtc2NhbGUteCwgMS4xKSwgdmFyKC0tZmEtYm91bmNlLXN0YXJ0LXNjYWxlLXksIDAuOSkpIHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuICAzMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLWZhLWJvdW5jZS1qdW1wLXNjYWxlLXgsIDAuOSksIHZhcigtLWZhLWJvdW5jZS1qdW1wLXNjYWxlLXksIDEuMSkpIHRyYW5zbGF0ZVkodmFyKC0tZmEtYm91bmNlLWhlaWdodCwgLTAuNWVtKSk7XFxuICB9XFxuICA1MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLWZhLWJvdW5jZS1sYW5kLXNjYWxlLXgsIDEuMDUpLCB2YXIoLS1mYS1ib3VuY2UtbGFuZC1zY2FsZS15LCAwLjk1KSkgdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG4gIDU3JSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSh2YXIoLS1mYS1ib3VuY2UtcmVib3VuZCwgLTAuMTI1ZW0pKTtcXG4gIH1cXG4gIDY0JSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlWSgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmEtZmFkZSB7XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiB2YXIoLS1mYS1mYWRlLW9wYWNpdHksIDAuNCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmEtYmVhdC1mYWRlIHtcXG4gIDAlLCAxMDAlIHtcXG4gICAgb3BhY2l0eTogdmFyKC0tZmEtYmVhdC1mYWRlLW9wYWNpdHksIDAuNCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLWZhLWJlYXQtZmFkZS1zY2FsZSwgMS4xMjUpKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmYS1mbGlwIHtcXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QodmFyKC0tZmEtZmxpcC14LCAwKSwgdmFyKC0tZmEtZmxpcC15LCAxKSwgdmFyKC0tZmEtZmxpcC16LCAwKSwgdmFyKC0tZmEtZmxpcC1hbmdsZSwgLTE4MGRlZykpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZhLXNoYWtlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcXG4gIH1cXG4gIDQlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO1xcbiAgfVxcbiAgOCUsIDI0JSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xOGRlZyk7XFxuICB9XFxuICAxMiUsIDI4JSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4ZGVnKTtcXG4gIH1cXG4gIDE2JSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMmRlZyk7XFxuICB9XFxuICAyMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMmRlZyk7XFxuICB9XFxuICAzMiUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTJkZWcpO1xcbiAgfVxcbiAgMzYlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTJkZWcpO1xcbiAgfVxcbiAgNDAlLCAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZmEtc3BpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcbi5mYS1yb3RhdGUtOTAge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uZmEtcm90YXRlLTE4MCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uZmEtcm90YXRlLTI3MCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbn1cXG5cXG4uZmEtZmxpcC1ob3Jpem9udGFsIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcbn1cXG5cXG4uZmEtZmxpcC12ZXJ0aWNhbCB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXG59XFxuXFxuLmZhLWZsaXAtYm90aCxcXG4uZmEtZmxpcC1ob3Jpem9udGFsLmZhLWZsaXAtdmVydGljYWwge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgLTEpO1xcbn1cXG5cXG4uZmEtcm90YXRlLWJ5IHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKHZhcigtLWZhLXJvdGF0ZS1hbmdsZSwgMCkpO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEgLmZhLXByaW1hcnkge1xcbiAgZmlsbDogdmFyKC0tZmEtcHJpbWFyeS1jb2xvciwgY3VycmVudENvbG9yKTtcXG4gIG9wYWNpdHk6IHZhcigtLWZhLXByaW1hcnktb3BhY2l0eSwgMSk7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYSAuZmEtc2Vjb25kYXJ5IHtcXG4gIGZpbGw6IHZhcigtLWZhLXNlY29uZGFyeS1jb2xvciwgY3VycmVudENvbG9yKTtcXG4gIG9wYWNpdHk6IHZhcigtLWZhLXNlY29uZGFyeS1vcGFjaXR5LCAwLjQpO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEuZmEtc3dhcC1vcGFjaXR5IC5mYS1wcmltYXJ5IHtcXG4gIG9wYWNpdHk6IHZhcigtLWZhLXNlY29uZGFyeS1vcGFjaXR5LCAwLjQpO1xcbn1cXG5cXG4uc3ZnLWlubGluZS0tZmEuZmEtc3dhcC1vcGFjaXR5IC5mYS1zZWNvbmRhcnkge1xcbiAgb3BhY2l0eTogdmFyKC0tZmEtcHJpbWFyeS1vcGFjaXR5LCAxKTtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhIG1hc2sgLmZhLXByaW1hcnksXFxuLnN2Zy1pbmxpbmUtLWZhIG1hc2sgLmZhLXNlY29uZGFyeSB7XFxuICBmaWxsOiBibGFjaztcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhLmZhLWludmVyc2Uge1xcbiAgZmlsbDogdmFyKC0tZmEtaW52ZXJzZSwgI2ZmZik7XFxufVxcblxcbi5mYS1zdGFjayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2lkdGg6IDIuNWVtO1xcbn1cXG5cXG4uZmEtaW52ZXJzZSB7XFxuICBjb2xvcjogdmFyKC0tZmEtaW52ZXJzZSwgI2ZmZik7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYS5mYS1zdGFjay0xeCB7XFxuICAtLWZhLXdpZHRoOiAxLjI1ZW07XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHdpZHRoOiB2YXIoLS1mYS13aWR0aCk7XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1zdGFjay0yeCB7XFxuICAtLWZhLXdpZHRoOiAyLjVlbTtcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IHZhcigtLWZhLXdpZHRoKTtcXG59XFxuXFxuLmZhLXN0YWNrLTF4LFxcbi5mYS1zdGFjay0yeCB7XFxuICBpbnNldDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IHZhcigtLWZhLXN0YWNrLXotaW5kZXgsIGF1dG8pO1xcbn1cIjtcblxuICBmdW5jdGlvbiBjc3MoKSB7XG4gICAgdmFyIGRjcCA9IERFRkFVTFRfQ1NTX1BSRUZJWDtcbiAgICB2YXIgZHJjID0gREVGQVVMVF9SRVBMQUNFTUVOVF9DTEFTUztcbiAgICB2YXIgZnAgPSBjb25maWcuY3NzUHJlZml4O1xuICAgIHZhciByYyA9IGNvbmZpZy5yZXBsYWNlbWVudENsYXNzO1xuICAgIHZhciBzID0gYmFzZVN0eWxlcztcbiAgICBpZiAoZnAgIT09IGRjcCB8fCByYyAhPT0gZHJjKSB7XG4gICAgICB2YXIgZFBhdHQgPSBuZXcgUmVnRXhwKFwiXFxcXC5cIi5jb25jYXQoZGNwLCBcIlxcXFwtXCIpLCAnZycpO1xuICAgICAgdmFyIGN1c3RvbVByb3BQYXR0ID0gbmV3IFJlZ0V4cChcIlxcXFwtLVwiLmNvbmNhdChkY3AsIFwiXFxcXC1cIiksICdnJyk7XG4gICAgICB2YXIgclBhdHQgPSBuZXcgUmVnRXhwKFwiXFxcXC5cIi5jb25jYXQoZHJjKSwgJ2cnKTtcbiAgICAgIHMgPSBzLnJlcGxhY2UoZFBhdHQsIFwiLlwiLmNvbmNhdChmcCwgXCItXCIpKS5yZXBsYWNlKGN1c3RvbVByb3BQYXR0LCBcIi0tXCIuY29uY2F0KGZwLCBcIi1cIikpLnJlcGxhY2UoclBhdHQsIFwiLlwiLmNvbmNhdChyYykpO1xuICAgIH1cbiAgICByZXR1cm4gcztcbiAgfVxuICB2YXIgX2Nzc0luc2VydGVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGVuc3VyZUNzcygpIHtcbiAgICBpZiAoY29uZmlnLmF1dG9BZGRDc3MgJiYgIV9jc3NJbnNlcnRlZCkge1xuICAgICAgaW5zZXJ0Q3NzKGNzcygpKTtcbiAgICAgIF9jc3NJbnNlcnRlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHZhciBJbmplY3RDU1MgPSB7XG4gICAgbWl4b3V0OiBmdW5jdGlvbiBtaXhvdXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkb206IHtcbiAgICAgICAgICBjc3M6IGNzcyxcbiAgICAgICAgICBpbnNlcnRDc3M6IGVuc3VyZUNzc1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgaG9va3M6IGZ1bmN0aW9uIGhvb2tzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmVmb3JlRE9NRWxlbWVudENyZWF0aW9uOiBmdW5jdGlvbiBiZWZvcmVET01FbGVtZW50Q3JlYXRpb24oKSB7XG4gICAgICAgICAgZW5zdXJlQ3NzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZUkyc3ZnOiBmdW5jdGlvbiBiZWZvcmVJMnN2ZygpIHtcbiAgICAgICAgICBlbnN1cmVDc3MoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHckMiA9IFdJTkRPVyB8fCB7fTtcbiAgaWYgKCF3JDJbTkFNRVNQQUNFX0lERU5USUZJRVJdKSB3JDJbTkFNRVNQQUNFX0lERU5USUZJRVJdID0ge307XG4gIGlmICghdyQyW05BTUVTUEFDRV9JREVOVElGSUVSXS5zdHlsZXMpIHckMltOQU1FU1BBQ0VfSURFTlRJRklFUl0uc3R5bGVzID0ge307XG4gIGlmICghdyQyW05BTUVTUEFDRV9JREVOVElGSUVSXS5ob29rcykgdyQyW05BTUVTUEFDRV9JREVOVElGSUVSXS5ob29rcyA9IHt9O1xuICBpZiAoIXckMltOQU1FU1BBQ0VfSURFTlRJRklFUl0uc2hpbXMpIHckMltOQU1FU1BBQ0VfSURFTlRJRklFUl0uc2hpbXMgPSBbXTtcbiAgdmFyIG5hbWVzcGFjZSA9IHckMltOQU1FU1BBQ0VfSURFTlRJRklFUl07XG5cbiAgdmFyIGZ1bmN0aW9ucyA9IFtdO1xuICB2YXIgX2xpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgRE9DVU1FTlQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIF9saXN0ZW5lcik7XG4gICAgbG9hZGVkID0gMTtcbiAgICBmdW5jdGlvbnMubWFwKGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIGZuKCk7XG4gICAgfSk7XG4gIH07XG4gIHZhciBsb2FkZWQgPSBmYWxzZTtcbiAgaWYgKElTX0RPTSkge1xuICAgIGxvYWRlZCA9IChET0NVTUVOVC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwgPyAvXmxvYWRlZHxeYy8gOiAvXmxvYWRlZHxeaXxeYy8pLnRlc3QoRE9DVU1FTlQucmVhZHlTdGF0ZSk7XG4gICAgaWYgKCFsb2FkZWQpIERPQ1VNRU5ULmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBfbGlzdGVuZXIpO1xuICB9XG4gIGZ1bmN0aW9uIGRvbXJlYWR5IChmbikge1xuICAgIGlmICghSVNfRE9NKSByZXR1cm47XG4gICAgbG9hZGVkID8gc2V0VGltZW91dChmbiwgMCkgOiBmdW5jdGlvbnMucHVzaChmbik7XG4gIH1cblxuICBmdW5jdGlvbiB0b0h0bWwoYWJzdHJhY3ROb2Rlcykge1xuICAgIHZhciB0YWcgPSBhYnN0cmFjdE5vZGVzLnRhZyxcbiAgICAgIF9hYnN0cmFjdE5vZGVzJGF0dHJpYiA9IGFic3RyYWN0Tm9kZXMuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfYWJzdHJhY3ROb2RlcyRhdHRyaWIgPT09IHZvaWQgMCA/IHt9IDogX2Fic3RyYWN0Tm9kZXMkYXR0cmliLFxuICAgICAgX2Fic3RyYWN0Tm9kZXMkY2hpbGRyID0gYWJzdHJhY3ROb2Rlcy5jaGlsZHJlbixcbiAgICAgIGNoaWxkcmVuID0gX2Fic3RyYWN0Tm9kZXMkY2hpbGRyID09PSB2b2lkIDAgPyBbXSA6IF9hYnN0cmFjdE5vZGVzJGNoaWxkcjtcbiAgICBpZiAodHlwZW9mIGFic3RyYWN0Tm9kZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gaHRtbEVzY2FwZShhYnN0cmFjdE5vZGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiPFwiLmNvbmNhdCh0YWcsIFwiIFwiKS5jb25jYXQoam9pbkF0dHJpYnV0ZXMoYXR0cmlidXRlcyksIFwiPlwiKS5jb25jYXQoY2hpbGRyZW4ubWFwKHRvSHRtbCkuam9pbignJyksIFwiPC9cIikuY29uY2F0KHRhZywgXCI+XCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGljb25Gcm9tTWFwcGluZyhtYXBwaW5nLCBwcmVmaXgsIGljb25OYW1lKSB7XG4gICAgaWYgKG1hcHBpbmcgJiYgbWFwcGluZ1twcmVmaXhdICYmIG1hcHBpbmdbcHJlZml4XVtpY29uTmFtZV0pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgICAgIGljb246IG1hcHBpbmdbcHJlZml4XVtpY29uTmFtZV1cbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludGVybmFsIGhlbHBlciB0byBiaW5kIGEgZnVuY3Rpb24ga25vd24gdG8gaGF2ZSA0IGFyZ3VtZW50c1xuICAgKiB0byBhIGdpdmVuIGNvbnRleHQuXG4gICAqL1xuICB2YXIgYmluZEludGVybmFsNCA9IGZ1bmN0aW9uIGJpbmRJbnRlcm5hbDQoZnVuYywgdGhpc0NvbnRleHQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0NvbnRleHQsIGEsIGIsIGMsIGQpO1xuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqICMgUmVkdWNlXG4gICAqXG4gICAqIEEgZmFzdCBvYmplY3QgYC5yZWR1Y2UoKWAgaW1wbGVtZW50YXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gICBzdWJqZWN0ICAgICAgVGhlIG9iamVjdCB0byByZWR1Y2Ugb3Zlci5cbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGZuICAgICAgICAgICBUaGUgcmVkdWNlciBmdW5jdGlvbi5cbiAgICogQHBhcmFtICB7bWl4ZWR9ICAgIGluaXRpYWxWYWx1ZSBUaGUgaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIHJlZHVjZXIsIGRlZmF1bHRzIHRvIHN1YmplY3RbMF0uXG4gICAqIEBwYXJhbSAge09iamVjdH0gICB0aGlzQ29udGV4dCAgVGhlIGNvbnRleHQgZm9yIHRoZSByZWR1Y2VyLlxuICAgKiBAcmV0dXJuIHttaXhlZH0gICAgICAgICAgICAgICAgIFRoZSBmaW5hbCByZXN1bHQuXG4gICAqL1xuICB2YXIgcmVkdWNlID0gZnVuY3Rpb24gZmFzdFJlZHVjZU9iamVjdChzdWJqZWN0LCBmbiwgaW5pdGlhbFZhbHVlLCB0aGlzQ29udGV4dCkge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc3ViamVjdCksXG4gICAgICBsZW5ndGggPSBrZXlzLmxlbmd0aCxcbiAgICAgIGl0ZXJhdG9yID0gdGhpc0NvbnRleHQgIT09IHVuZGVmaW5lZCA/IGJpbmRJbnRlcm5hbDQoZm4sIHRoaXNDb250ZXh0KSA6IGZuLFxuICAgICAgaSxcbiAgICAgIGtleSxcbiAgICAgIHJlc3VsdDtcbiAgICBpZiAoaW5pdGlhbFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGkgPSAxO1xuICAgICAgcmVzdWx0ID0gc3ViamVjdFtrZXlzWzBdXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaSA9IDA7XG4gICAgICByZXN1bHQgPSBpbml0aWFsVmFsdWU7XG4gICAgfVxuICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICByZXN1bHQgPSBpdGVyYXRvcihyZXN1bHQsIHN1YmplY3Rba2V5XSwga2V5LCBzdWJqZWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJuIGhleGFkZWNpbWFsIHN0cmluZyBmb3IgYSB1bmljb2RlIGNoYXJhY3RlclxuICAgKiBSZXR1cm5zIGBudWxsYCB3aGVuIG1vcmUgdGhhbiBvbmUgY2hhcmFjdGVyIChub3QgYnl0ZXMhKSBhcmUgcGFzc2VkXG4gICAqIEZvciBleGFtcGxlOiAnSycg4oaSICc3QidcbiAgICovXG4gIGZ1bmN0aW9uIHRvSGV4KHVuaWNvZGUpIHtcbiAgICBpZiAoX3RvQ29uc3VtYWJsZUFycmF5KHVuaWNvZGUpLmxlbmd0aCAhPT0gMSkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHVuaWNvZGUuY29kZVBvaW50QXQoMCkudG9TdHJpbmcoMTYpO1xuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplSWNvbnMoaWNvbnMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaWNvbnMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBpY29uTmFtZSkge1xuICAgICAgdmFyIGljb24gPSBpY29uc1tpY29uTmFtZV07XG4gICAgICB2YXIgZXhwYW5kZWQgPSAhIWljb24uaWNvbjtcbiAgICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgICBhY2NbaWNvbi5pY29uTmFtZV0gPSBpY29uLmljb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2NbaWNvbk5hbWVdID0gaWNvbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICB9XG4gIGZ1bmN0aW9uIGRlZmluZUljb25zKHByZWZpeCwgaWNvbnMpIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICB2YXIgX3BhcmFtcyRza2lwSG9va3MgPSBwYXJhbXMuc2tpcEhvb2tzLFxuICAgICAgc2tpcEhvb2tzID0gX3BhcmFtcyRza2lwSG9va3MgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyRza2lwSG9va3M7XG4gICAgdmFyIG5vcm1hbGl6ZWQgPSBub3JtYWxpemVJY29ucyhpY29ucyk7XG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UuaG9va3MuYWRkUGFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhc2tpcEhvb2tzKSB7XG4gICAgICBuYW1lc3BhY2UuaG9va3MuYWRkUGFjayhwcmVmaXgsIG5vcm1hbGl6ZUljb25zKGljb25zKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5hbWVzcGFjZS5zdHlsZXNbcHJlZml4XSA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBuYW1lc3BhY2Uuc3R5bGVzW3ByZWZpeF0gfHwge30pLCBub3JtYWxpemVkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGb250IEF3ZXNvbWUgNCB1c2VkIHRoZSBwcmVmaXggb2YgYGZhYCBmb3IgYWxsIGljb25zLiBXaXRoIHRoZSBpbnRyb2R1Y3Rpb25cbiAgICAgKiBvZiBuZXcgc3R5bGVzIHdlIG5lZWRlZCB0byBkaWZmZXJlbnRpYXRlIGJldHdlZW4gdGhlbS4gUHJlZml4IGBmYWAgaXMgbm93IGFuIGFsaWFzXG4gICAgICogZm9yIGBmYXNgIHNvIHdlJ2xsIGVhc2UgdGhlIHVwZ3JhZGUgcHJvY2VzcyBmb3Igb3VyIHVzZXJzIGJ5IGF1dG9tYXRpY2FsbHkgZGVmaW5pbmdcbiAgICAgKiB0aGlzIGFzIHdlbGwuXG4gICAgICovXG4gICAgaWYgKHByZWZpeCA9PT0gJ2ZhcycpIHtcbiAgICAgIGRlZmluZUljb25zKCdmYScsIGljb25zKTtcbiAgICB9XG4gIH1cblxuICB2YXIgTU9OTyA9IDB4MTtcbiAgdmFyIERVTyA9IDB4MjtcblxuICAvLyBOZXcgdjcgY29tcGF0aWJsZSBtYXRjaGVycyB1c2luZyB0aGUgc3R5bGUgYXR0cmlidXRlIHRvIGRldGVybWluZSBsYXllciBtZW1iZXJzaGlwXG4gIHZhciBtb2Rlcm5NYXRjaGVzID0gW1tEVU8sIC8qI19fUFVSRV9fKi9fd3JhcFJlZ0V4cCgvcGF0aCBvcGFjaXR5PVwiKFteXCJdKilcIi4qZD1cIihbXlwiXSopXCIuKnBhdGguKmQ9XCIoW15cIl0qKVwiLywge1xuICAgIGQyOiAyLFxuICAgIGQxOiAzXG4gIH0pXSwgW0RVTywgLyojX19QVVJFX18qL193cmFwUmVnRXhwKC9wYXRoIG9wYWNpdHk9XCIoW15cIl0qKVwiLipkPVwiKFteXCJdKilcIi8sIHtcbiAgICBkMjogMlxuICB9KV0sIFtNT05PLCAvKiNfX1BVUkVfXyovX3dyYXBSZWdFeHAoL3BhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiLipkPVwiKFteXCJdKylcIi8sIHtcbiAgICBkMTogMVxuICB9KV1dO1xuXG4gIC8vIE9sZCA8PSB2NiBtYXRjaGVycywgdGhlc2Ugc2hvdWxkIHJhcmVseSBnZXQgdXNlZC5cbiAgLy9cbiAgLy8gV2h5IGFyZSB0aGVyZSBzbyBtYW55PyBPdmVyIHRoZSBsaWZlY3ljbGUgb2YgdmVyc2lvbiA1IGFuZCA2IHdlIG1vZGlmaWVkIHRoZVxuICAvLyBzeW50YXggZm9yIG91ciBzb3VyY2UgU1ZHIGZpbGVzIHNldmVyYWwgdGltZXMuIFRoZXNlIHBhdHRlcm5zIG1hdGNoIHRoZVxuICAvLyBoaXN0b3JpY2FsIHJlY29yZCBhbmQgYXR0ZW1wdCB0byBoYW5kbGUgYmFja3dhcmRzLWNvbXBhdGliaWxpdHkgaW4gcmFyZSBlZGdlXG4gIC8vIGNhc2VzIChsb2FkaW5nIHZlcnNpb24gNiBTVkcgc291cmNlIGZpbGVzIHVzaW5nIHRoZSB2ZXJzaW9uIDcgU1ZHIHBhcnNlcilcbiAgdmFyIGxlZ2FjeU1hdGNoZXMgPSBbW0RVTywgLyojX19QVVJFX18qL193cmFwUmVnRXhwKC9wYXRoIGNsYXNzPVwiKFteXCJdKnNlY29uZGFyeVteXCJdKilcIi4qZD1cIihbXlwiXSspXCIuKnBhdGggY2xhc3M9XCIoW15cIl0qcHJpbWFyeVteXCJdKilcIi4qZD1cIihbXlwiXSspXCIvLCB7XG4gICAgYXR0cjI6IDEsXG4gICAgZDI6IDIsXG4gICAgYXR0cjE6IDMsXG4gICAgZDE6IDRcbiAgfSldLCBbRFVPLCAvKiNfX1BVUkVfXyovX3dyYXBSZWdFeHAoL3BhdGggY2xhc3M9XCIoW15cIl0qcHJpbWFyeVteXCJdKilcIi4qZD1cIihbXlwiXSspXCIuKnBhdGggY2xhc3M9XCIoW15cIl0qc2Vjb25kYXJ5W15cIl0qKVwiLipkPVwiKFteXCJdKylcIi8sIHtcbiAgICBhdHRyMTogMSxcbiAgICBkMTogMixcbiAgICBhdHRyMjogMyxcbiAgICBkMjogNFxuICB9KV0sIFtEVU8sIC8qI19fUFVSRV9fKi9fd3JhcFJlZ0V4cCgvcGF0aCBjbGFzcz1cIihbXlwiXSpwcmltYXJ5W15cIl0qKVwiLipkPVwiKFteXCJdKylcIi8sIHtcbiAgICBhdHRyMTogMSxcbiAgICBkMTogMlxuICB9KV0sIFtEVU8sIC8qI19fUFVSRV9fKi9fd3JhcFJlZ0V4cCgvcGF0aCBjbGFzcz1cIihbXlwiXSpzZWNvbmRhcnlbXlwiXSopXCIuKmQ9XCIoW15cIl0rKVwiLywge1xuICAgIGF0dHIyOiAxLFxuICAgIGQyOiAyXG4gIH0pXSwgW0RVTywgLyojX19QVVJFX18qL193cmFwUmVnRXhwKC9wYXRoIGQ9XCIoW15cIl0rKVwiLipjbGFzcz1cIihbXlwiXSpzZWNvbmRhcnlbXlwiXSopXCIuKnBhdGggZD1cIihbXlwiXSspXCIuKmNsYXNzPVwiKFteXCJdKnByaW1hcnlbXlwiXSopXCIvLCB7XG4gICAgZDI6IDEsXG4gICAgYXR0cjI6IDIsXG4gICAgZDE6IDMsXG4gICAgYXR0cjE6IDRcbiAgfSldLCBbRFVPLCAvKiNfX1BVUkVfXyovX3dyYXBSZWdFeHAoL3BhdGggZD1cIihbXlwiXSspXCIuKmNsYXNzPVwiKFteXCJdKnByaW1hcnlbXlwiXSopXCIuKnBhdGggZD1cIihbXlwiXSspXCIuKmNsYXNzPVwiKFteXCJdKnNlY29uZGFyeVteXCJdKilcIi8sIHtcbiAgICBkMTogMSxcbiAgICBhdHRyMTogMixcbiAgICBkMjogMyxcbiAgICBhdHRyMjogNFxuICB9KV0sIFtEVU8sIC8qI19fUFVSRV9fKi9fd3JhcFJlZ0V4cCgvcGF0aCBkPVwiKFteXCJdKylcIi4qY2xhc3M9XCIoW15cIl0qcHJpbWFyeVteXCJdKilcIi8sIHtcbiAgICBkMTogMSxcbiAgICBhdHRyMTogMlxuICB9KV0sIFtEVU8sIC8qI19fUFVSRV9fKi9fd3JhcFJlZ0V4cCgvcGF0aCBkPVwiKFteXCJdKylcIi4qY2xhc3M9XCIoW15cIl0qc2Vjb25kYXJ5W15cIl0qKVwiLywge1xuICAgIGQyOiAxLFxuICAgIGF0dHIyOiAyXG4gIH0pXSwgW0RVTywgLyojX19QVVJFX18qL193cmFwUmVnRXhwKC9wYXRoIGQ9XCIoW15cIl0rKVwiLipwYXRoIGQ9XCIoW15cIl0rKVwiLywge1xuICAgIGQxOiAxLFxuICAgIGQyOiAyXG4gIH0pXSwgW01PTk8sIC8qI19fUFVSRV9fKi9fd3JhcFJlZ0V4cCgvcGF0aCBkPVwiKFteXCJdKylcIi8sIHtcbiAgICBkMTogMVxuICB9KV0sIFtNT05PLCAvKiNfX1BVUkVfXyovX3dyYXBSZWdFeHAoL3BhdGggc3R5bGU9XCIoW15cIl0rKVwiLipkPVwiKFteXCJdKylcIi8sIHtcbiAgICBhdHRyMTogMSxcbiAgICBkMTogMlxuICB9KV1dO1xuXG4gIHZhciBzdHlsZXMgPSBuYW1lc3BhY2Uuc3R5bGVzLFxuICAgIHNoaW1zID0gbmFtZXNwYWNlLnNoaW1zO1xuICB2YXIgRkFNSUxZX05BTUVTID0gT2JqZWN0LmtleXMoUFJFRklYX1RPX0xPTkdfU1RZTEUpO1xuICB2YXIgUFJFRklYRVNfRk9SX0ZBTUlMWSA9IEZBTUlMWV9OQU1FUy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZmFtaWx5SWQpIHtcbiAgICBhY2NbZmFtaWx5SWRdID0gT2JqZWN0LmtleXMoUFJFRklYX1RPX0xPTkdfU1RZTEVbZmFtaWx5SWRdKTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHZhciBfZGVmYXVsdFVzYWJsZVByZWZpeCA9IG51bGw7XG4gIHZhciBfYnlVbmljb2RlID0ge307XG4gIHZhciBfYnlMaWdhdHVyZSA9IHt9O1xuICB2YXIgX2J5T2xkTmFtZSA9IHt9O1xuICB2YXIgX2J5T2xkVW5pY29kZSA9IHt9O1xuICB2YXIgX2J5QWxpYXMgPSB7fTtcbiAgZnVuY3Rpb24gaXNSZXNlcnZlZChuYW1lKSB7XG4gICAgcmV0dXJuIH5SRVNFUlZFRF9DTEFTU0VTLmluZGV4T2YobmFtZSk7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0SWNvbk5hbWUoY3NzUHJlZml4LCBjbHMpIHtcbiAgICB2YXIgcGFydHMgPSBjbHMuc3BsaXQoJy0nKTtcbiAgICB2YXIgcHJlZml4ID0gcGFydHNbMF07XG4gICAgdmFyIGljb25OYW1lID0gcGFydHMuc2xpY2UoMSkuam9pbignLScpO1xuICAgIGlmIChwcmVmaXggPT09IGNzc1ByZWZpeCAmJiBpY29uTmFtZSAhPT0gJycgJiYgIWlzUmVzZXJ2ZWQoaWNvbk5hbWUpKSB7XG4gICAgICByZXR1cm4gaWNvbk5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICB2YXIgYnVpbGQgPSBmdW5jdGlvbiBidWlsZCgpIHtcbiAgICB2YXIgbG9va3VwID0gZnVuY3Rpb24gbG9va3VwKHJlZHVjZXIpIHtcbiAgICAgIHJldHVybiByZWR1Y2Uoc3R5bGVzLCBmdW5jdGlvbiAobyQkMSwgc3R5bGUsIHByZWZpeCkge1xuICAgICAgICBvJCQxW3ByZWZpeF0gPSByZWR1Y2Uoc3R5bGUsIHJlZHVjZXIsIHt9KTtcbiAgICAgICAgcmV0dXJuIG8kJDE7XG4gICAgICB9LCB7fSk7XG4gICAgfTtcbiAgICBfYnlVbmljb2RlID0gbG9va3VwKGZ1bmN0aW9uIChhY2MsIGljb24sIGljb25OYW1lKSB7XG4gICAgICBpZiAoaWNvblszXSkge1xuICAgICAgICBhY2NbaWNvblszXV0gPSBpY29uTmFtZTtcbiAgICAgIH1cbiAgICAgIGlmIChpY29uWzJdKSB7XG4gICAgICAgIHZhciBhbGlhc2VzID0gaWNvblsyXS5maWx0ZXIoZnVuY3Rpb24gKGEkJDEpIHtcbiAgICAgICAgICByZXR1cm4gdHlwZW9mIGEkJDEgPT09ICdudW1iZXInO1xuICAgICAgICB9KTtcbiAgICAgICAgYWxpYXNlcy5mb3JFYWNoKGZ1bmN0aW9uIChhbGlhcykge1xuICAgICAgICAgIGFjY1thbGlhcy50b1N0cmluZygxNildID0gaWNvbk5hbWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9KTtcbiAgICBfYnlMaWdhdHVyZSA9IGxvb2t1cChmdW5jdGlvbiAoYWNjLCBpY29uLCBpY29uTmFtZSkge1xuICAgICAgYWNjW2ljb25OYW1lXSA9IGljb25OYW1lO1xuICAgICAgaWYgKGljb25bMl0pIHtcbiAgICAgICAgdmFyIGFsaWFzZXMgPSBpY29uWzJdLmZpbHRlcihmdW5jdGlvbiAoYSQkMSkge1xuICAgICAgICAgIHJldHVybiB0eXBlb2YgYSQkMSA9PT0gJ3N0cmluZyc7XG4gICAgICAgIH0pO1xuICAgICAgICBhbGlhc2VzLmZvckVhY2goZnVuY3Rpb24gKGFsaWFzKSB7XG4gICAgICAgICAgYWNjW2FsaWFzXSA9IGljb25OYW1lO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSk7XG4gICAgX2J5QWxpYXMgPSBsb29rdXAoZnVuY3Rpb24gKGFjYywgaWNvbiwgaWNvbk5hbWUpIHtcbiAgICAgIHZhciBhbGlhc2VzID0gaWNvblsyXTtcbiAgICAgIGFjY1tpY29uTmFtZV0gPSBpY29uTmFtZTtcbiAgICAgIGFsaWFzZXMuZm9yRWFjaChmdW5jdGlvbiAoYWxpYXMpIHtcbiAgICAgICAgYWNjW2FsaWFzXSA9IGljb25OYW1lO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0pO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSBhIEtpdCwgd2UgY2FuJ3QgZGV0ZXJtaW5lIGlmIHJlZ3VsYXIgaXMgYXZhaWxhYmxlIHNpbmNlIHdlXG4gICAgLy8gY291bGQgYmUgYXV0by1mZXRjaGluZyBpdC4gV2UnbGwgaGF2ZSB0byBhc3N1bWUgdGhhdCBpdCBpcyBhdmFpbGFibGUuXG4gICAgdmFyIGhhc1JlZ3VsYXIgPSAnZmFyJyBpbiBzdHlsZXMgfHwgY29uZmlnLmF1dG9GZXRjaFN2ZztcbiAgICB2YXIgc2hpbUxvb2t1cHMgPSByZWR1Y2Uoc2hpbXMsIGZ1bmN0aW9uIChhY2MsIHNoaW0pIHtcbiAgICAgIHZhciBtYXliZU5hbWVNYXliZVVuaWNvZGUgPSBzaGltWzBdO1xuICAgICAgdmFyIHByZWZpeCA9IHNoaW1bMV07XG4gICAgICB2YXIgaWNvbk5hbWUgPSBzaGltWzJdO1xuICAgICAgaWYgKHByZWZpeCA9PT0gJ2ZhcicgJiYgIWhhc1JlZ3VsYXIpIHtcbiAgICAgICAgcHJlZml4ID0gJ2Zhcyc7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG1heWJlTmFtZU1heWJlVW5pY29kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgYWNjLm5hbWVzW21heWJlTmFtZU1heWJlVW5pY29kZV0gPSB7XG4gICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgaWNvbk5hbWU6IGljb25OYW1lXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIG1heWJlTmFtZU1heWJlVW5pY29kZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgYWNjLnVuaWNvZGVzW21heWJlTmFtZU1heWJlVW5pY29kZS50b1N0cmluZygxNildID0ge1xuICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgIGljb25OYW1lOiBpY29uTmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7XG4gICAgICBuYW1lczoge30sXG4gICAgICB1bmljb2Rlczoge31cbiAgICB9KTtcbiAgICBfYnlPbGROYW1lID0gc2hpbUxvb2t1cHMubmFtZXM7XG4gICAgX2J5T2xkVW5pY29kZSA9IHNoaW1Mb29rdXBzLnVuaWNvZGVzO1xuICAgIF9kZWZhdWx0VXNhYmxlUHJlZml4ID0gZ2V0Q2Fub25pY2FsUHJlZml4KGNvbmZpZy5zdHlsZURlZmF1bHQsIHtcbiAgICAgIGZhbWlseTogY29uZmlnLmZhbWlseURlZmF1bHRcbiAgICB9KTtcbiAgfTtcbiAgb25DaGFuZ2UoZnVuY3Rpb24gKGMkJDEpIHtcbiAgICBfZGVmYXVsdFVzYWJsZVByZWZpeCA9IGdldENhbm9uaWNhbFByZWZpeChjJCQxLnN0eWxlRGVmYXVsdCwge1xuICAgICAgZmFtaWx5OiBjb25maWcuZmFtaWx5RGVmYXVsdFxuICAgIH0pO1xuICB9KTtcbiAgYnVpbGQoKTtcbiAgZnVuY3Rpb24gYnlVbmljb2RlKHByZWZpeCwgdW5pY29kZSkge1xuICAgIHJldHVybiAoX2J5VW5pY29kZVtwcmVmaXhdIHx8IHt9KVt1bmljb2RlXTtcbiAgfVxuICBmdW5jdGlvbiBieUxpZ2F0dXJlKHByZWZpeCwgbGlnYXR1cmUpIHtcbiAgICByZXR1cm4gKF9ieUxpZ2F0dXJlW3ByZWZpeF0gfHwge30pW2xpZ2F0dXJlXTtcbiAgfVxuICBmdW5jdGlvbiBieUFsaWFzKHByZWZpeCwgYWxpYXMpIHtcbiAgICByZXR1cm4gKF9ieUFsaWFzW3ByZWZpeF0gfHwge30pW2FsaWFzXTtcbiAgfVxuICBmdW5jdGlvbiBieU9sZE5hbWUobmFtZSkge1xuICAgIHJldHVybiBfYnlPbGROYW1lW25hbWVdIHx8IHtcbiAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgIGljb25OYW1lOiBudWxsXG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBieU9sZFVuaWNvZGUodW5pY29kZSkge1xuICAgIHZhciBvbGRVbmljb2RlID0gX2J5T2xkVW5pY29kZVt1bmljb2RlXTtcbiAgICB2YXIgbmV3VW5pY29kZSA9IGJ5VW5pY29kZSgnZmFzJywgdW5pY29kZSk7XG4gICAgcmV0dXJuIG9sZFVuaWNvZGUgfHwgKG5ld1VuaWNvZGUgPyB7XG4gICAgICBwcmVmaXg6ICdmYXMnLFxuICAgICAgaWNvbk5hbWU6IG5ld1VuaWNvZGVcbiAgICB9IDogbnVsbCkgfHwge1xuICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgaWNvbk5hbWU6IG51bGxcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGdldERlZmF1bHRVc2FibGVQcmVmaXgoKSB7XG4gICAgcmV0dXJuIF9kZWZhdWx0VXNhYmxlUHJlZml4O1xuICB9XG4gIHZhciBlbXB0eUNhbm9uaWNhbEljb24gPSBmdW5jdGlvbiBlbXB0eUNhbm9uaWNhbEljb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByZWZpeDogbnVsbCxcbiAgICAgIGljb25OYW1lOiBudWxsLFxuICAgICAgcmVzdDogW11cbiAgICB9O1xuICB9O1xuICBmdW5jdGlvbiBnZXRGYW1pbHlJZCh2YWx1ZXMpIHtcbiAgICB2YXIgZmFtaWx5ID0gaTtcbiAgICB2YXIgZmFtUHJvcHMgPSBGQU1JTFlfTkFNRVMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGZhbWlseUlkKSB7XG4gICAgICBhY2NbZmFtaWx5SWRdID0gXCJcIi5jb25jYXQoY29uZmlnLmNzc1ByZWZpeCwgXCItXCIpLmNvbmNhdChmYW1pbHlJZCk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbiAgICBydC5mb3JFYWNoKGZ1bmN0aW9uIChmYW1pbHlJZCkge1xuICAgICAgaWYgKHZhbHVlcy5pbmNsdWRlcyhmYW1Qcm9wc1tmYW1pbHlJZF0pIHx8IHZhbHVlcy5zb21lKGZ1bmN0aW9uICh2JCQxKSB7XG4gICAgICAgIHJldHVybiBQUkVGSVhFU19GT1JfRkFNSUxZW2ZhbWlseUlkXS5pbmNsdWRlcyh2JCQxKTtcbiAgICAgIH0pKSB7XG4gICAgICAgIGZhbWlseSA9IGZhbWlseUlkO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmYW1pbHk7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0Q2Fub25pY2FsUHJlZml4KHN0eWxlT3JQcmVmaXgpIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgX3BhcmFtcyRmYW1pbHkgPSBwYXJhbXMuZmFtaWx5LFxuICAgICAgZmFtaWx5ID0gX3BhcmFtcyRmYW1pbHkgPT09IHZvaWQgMCA/IGkgOiBfcGFyYW1zJGZhbWlseTtcbiAgICB2YXIgc3R5bGUgPSBQUkVGSVhfVE9fU1RZTEVbZmFtaWx5XVtzdHlsZU9yUHJlZml4XTtcblxuICAgIC8vIGhhbmRsZXMgdGhlIGV4Y2VwdGlvbiBvZiBwYXNzaW5nIGluIG9ubHkgYSBmYW1pbHkgb2YgJ2R1b3RvbmUnIHdpdGggbm8gc3R5bGVcbiAgICBpZiAoZmFtaWx5ID09PSB0ICYmICFzdHlsZU9yUHJlZml4KSB7XG4gICAgICByZXR1cm4gJ2ZhZCc7XG4gICAgfVxuICAgIHZhciBwcmVmaXggPSBTVFlMRV9UT19QUkVGSVhbZmFtaWx5XVtzdHlsZU9yUHJlZml4XSB8fCBTVFlMRV9UT19QUkVGSVhbZmFtaWx5XVtzdHlsZV07XG4gICAgdmFyIGRlZmluZWQgPSBzdHlsZU9yUHJlZml4IGluIG5hbWVzcGFjZS5zdHlsZXMgPyBzdHlsZU9yUHJlZml4IDogbnVsbDtcbiAgICB2YXIgcmVzdWx0ID0gcHJlZml4IHx8IGRlZmluZWQgfHwgbnVsbDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGZ1bmN0aW9uIG1vdmVOb25GYUNsYXNzZXNUb1Jlc3QoY2xhc3NOYW1lcykge1xuICAgIHZhciByZXN0ID0gW107XG4gICAgdmFyIGljb25OYW1lID0gbnVsbDtcbiAgICBjbGFzc05hbWVzLmZvckVhY2goZnVuY3Rpb24gKGNscykge1xuICAgICAgdmFyIHJlc3VsdCA9IGdldEljb25OYW1lKGNvbmZpZy5jc3NQcmVmaXgsIGNscyk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGljb25OYW1lID0gcmVzdWx0O1xuICAgICAgfSBlbHNlIGlmIChjbHMpIHtcbiAgICAgICAgcmVzdC5wdXNoKGNscyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHNvcnRlZFVuaXF1ZVZhbHVlcyhhcnIpIHtcbiAgICByZXR1cm4gYXJyLnNvcnQoKS5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgYXJyKSB7XG4gICAgICByZXR1cm4gYXJyLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbiAgICB9KTtcbiAgfVxuICB2YXIgX2ZhQ29tYmluZWRDbGFzc2VzID0gWnQkMS5jb25jYXQoWXQpO1xuICBmdW5jdGlvbiBnZXRDYW5vbmljYWxJY29uKHZhbHVlcykge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBfcGFyYW1zJHNraXBMb29rdXBzID0gcGFyYW1zLnNraXBMb29rdXBzLFxuICAgICAgc2tpcExvb2t1cHMgPSBfcGFyYW1zJHNraXBMb29rdXBzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkc2tpcExvb2t1cHM7XG4gICAgdmFyIGdpdmVuUHJlZml4ID0gbnVsbDtcbiAgICB2YXIgZmFTdHlsZU9yRmFtaWx5Q2xhc3NlcyA9IHNvcnRlZFVuaXF1ZVZhbHVlcyh2YWx1ZXMuZmlsdGVyKGZ1bmN0aW9uIChjbHMpIHtcbiAgICAgIHJldHVybiBfZmFDb21iaW5lZENsYXNzZXMuaW5jbHVkZXMoY2xzKTtcbiAgICB9KSk7XG4gICAgdmFyIG5vblN0eWxlT3JGYW1pbHlDbGFzc2VzID0gc29ydGVkVW5pcXVlVmFsdWVzKHZhbHVlcy5maWx0ZXIoZnVuY3Rpb24gKGNscykge1xuICAgICAgcmV0dXJuICFfZmFDb21iaW5lZENsYXNzZXMuaW5jbHVkZXMoY2xzKTtcbiAgICB9KSk7XG4gICAgdmFyIGZhU3R5bGVzID0gZmFTdHlsZU9yRmFtaWx5Q2xhc3Nlcy5maWx0ZXIoZnVuY3Rpb24gKGNscykge1xuICAgICAgZ2l2ZW5QcmVmaXggPSBjbHM7XG4gICAgICByZXR1cm4gIVEuaW5jbHVkZXMoY2xzKTtcbiAgICB9KTtcbiAgICB2YXIgX2ZhU3R5bGVzID0gX3NsaWNlZFRvQXJyYXkoZmFTdHlsZXMsIDEpLFxuICAgICAgX2ZhU3R5bGVzJCA9IF9mYVN0eWxlc1swXSxcbiAgICAgIHN0eWxlRnJvbVZhbHVlcyA9IF9mYVN0eWxlcyQgPT09IHZvaWQgMCA/IG51bGwgOiBfZmFTdHlsZXMkO1xuICAgIHZhciBmYW1pbHkgPSBnZXRGYW1pbHlJZChmYVN0eWxlT3JGYW1pbHlDbGFzc2VzKTtcbiAgICB2YXIgY2Fub25pY2FsID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIG1vdmVOb25GYUNsYXNzZXNUb1Jlc3Qobm9uU3R5bGVPckZhbWlseUNsYXNzZXMpKSwge30sIHtcbiAgICAgIHByZWZpeDogZ2V0Q2Fub25pY2FsUHJlZml4KHN0eWxlRnJvbVZhbHVlcywge1xuICAgICAgICBmYW1pbHk6IGZhbWlseVxuICAgICAgfSlcbiAgICB9KTtcbiAgICByZXR1cm4gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGNhbm9uaWNhbCksIGdldERlZmF1bHRDYW5vbmljYWxQcmVmaXgoe1xuICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICBmYW1pbHk6IGZhbWlseSxcbiAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICBjYW5vbmljYWw6IGNhbm9uaWNhbCxcbiAgICAgIGdpdmVuUHJlZml4OiBnaXZlblByZWZpeFxuICAgIH0pKSwgYXBwbHlTaGltQW5kQWxpYXMoc2tpcExvb2t1cHMsIGdpdmVuUHJlZml4LCBjYW5vbmljYWwpKTtcbiAgfVxuICBmdW5jdGlvbiBhcHBseVNoaW1BbmRBbGlhcyhza2lwTG9va3VwcywgZ2l2ZW5QcmVmaXgsIGNhbm9uaWNhbCkge1xuICAgIHZhciBwcmVmaXggPSBjYW5vbmljYWwucHJlZml4LFxuICAgICAgaWNvbk5hbWUgPSBjYW5vbmljYWwuaWNvbk5hbWU7XG4gICAgaWYgKHNraXBMb29rdXBzIHx8ICFwcmVmaXggfHwgIWljb25OYW1lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgaWNvbk5hbWU6IGljb25OYW1lXG4gICAgICB9O1xuICAgIH1cbiAgICB2YXIgc2hpbSA9IGdpdmVuUHJlZml4ID09PSAnZmEnID8gYnlPbGROYW1lKGljb25OYW1lKSA6IHt9O1xuICAgIHZhciBhbGlhc0ljb25OYW1lID0gYnlBbGlhcyhwcmVmaXgsIGljb25OYW1lKTtcbiAgICBpY29uTmFtZSA9IHNoaW0uaWNvbk5hbWUgfHwgYWxpYXNJY29uTmFtZSB8fCBpY29uTmFtZTtcbiAgICBwcmVmaXggPSBzaGltLnByZWZpeCB8fCBwcmVmaXg7XG4gICAgaWYgKHByZWZpeCA9PT0gJ2ZhcicgJiYgIXN0eWxlc1snZmFyJ10gJiYgc3R5bGVzWydmYXMnXSAmJiAhY29uZmlnLmF1dG9GZXRjaFN2Zykge1xuICAgICAgLy8gQWxsb3cgYSBmYWxsYmFjayBmcm9tIHRoZSByZWd1bGFyIHN0eWxlIHRvIHNvbGlkIGlmIHJlZ3VsYXIgaXMgbm90IGF2YWlsYWJsZVxuICAgICAgLy8gYnV0IG9ubHkgaWYgd2UgYXJlbid0IGF1dG8tZmV0Y2hpbmcgU1ZHc1xuICAgICAgcHJlZml4ID0gJ2Zhcyc7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgIGljb25OYW1lOiBpY29uTmFtZVxuICAgIH07XG4gIH1cbiAgdmFyIG5ld0Nhbm9uaWNhbEZhbWlsaWVzID0gcnQuZmlsdGVyKGZ1bmN0aW9uIChmYW1pbHlJZCkge1xuICAgIHJldHVybiBmYW1pbHlJZCAhPT0gaSB8fCBmYW1pbHlJZCAhPT0gdDtcbiAgfSk7XG4gIHZhciBuZXdDYW5vbmljYWxTdHlsZXMgPSBPYmplY3Qua2V5cyhIdCQxKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBrZXkgIT09IGk7XG4gIH0pLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKEh0JDFba2V5XSk7XG4gIH0pLmZsYXQoKTtcbiAgZnVuY3Rpb24gZ2V0RGVmYXVsdENhbm9uaWNhbFByZWZpeChwcmVmaXhPcHRpb25zKSB7XG4gICAgdmFyIHZhbHVlcyA9IHByZWZpeE9wdGlvbnMudmFsdWVzLFxuICAgICAgZmFtaWx5ID0gcHJlZml4T3B0aW9ucy5mYW1pbHksXG4gICAgICBjYW5vbmljYWwgPSBwcmVmaXhPcHRpb25zLmNhbm9uaWNhbCxcbiAgICAgIF9wcmVmaXhPcHRpb25zJGdpdmVuUCA9IHByZWZpeE9wdGlvbnMuZ2l2ZW5QcmVmaXgsXG4gICAgICBnaXZlblByZWZpeCA9IF9wcmVmaXhPcHRpb25zJGdpdmVuUCA9PT0gdm9pZCAwID8gJycgOiBfcHJlZml4T3B0aW9ucyRnaXZlblAsXG4gICAgICBfcHJlZml4T3B0aW9ucyRzdHlsZXMgPSBwcmVmaXhPcHRpb25zLnN0eWxlcyxcbiAgICAgIHN0eWxlcyA9IF9wcmVmaXhPcHRpb25zJHN0eWxlcyA9PT0gdm9pZCAwID8ge30gOiBfcHJlZml4T3B0aW9ucyRzdHlsZXMsXG4gICAgICBfcHJlZml4T3B0aW9ucyRjb25maWcgPSBwcmVmaXhPcHRpb25zLmNvbmZpZyxcbiAgICAgIGNvbmZpZyQkMSA9IF9wcmVmaXhPcHRpb25zJGNvbmZpZyA9PT0gdm9pZCAwID8ge30gOiBfcHJlZml4T3B0aW9ucyRjb25maWc7XG4gICAgdmFyIGlzRHVvdG9uZUZhbWlseSA9IGZhbWlseSA9PT0gdDtcbiAgICB2YXIgdmFsdWVzSGFzRHVvdG9uZSA9IHZhbHVlcy5pbmNsdWRlcygnZmEtZHVvdG9uZScpIHx8IHZhbHVlcy5pbmNsdWRlcygnZmFkJyk7XG4gICAgdmFyIGRlZmF1bHRGYW1pbHlJc0R1b3RvbmUgPSBjb25maWckJDEuZmFtaWx5RGVmYXVsdCA9PT0gJ2R1b3RvbmUnO1xuICAgIHZhciBjYW5vbmljYWxQcmVmaXhJc0R1b3RvbmUgPSBjYW5vbmljYWwucHJlZml4ID09PSAnZmFkJyB8fCBjYW5vbmljYWwucHJlZml4ID09PSAnZmEtZHVvdG9uZSc7XG4gICAgaWYgKCFpc0R1b3RvbmVGYW1pbHkgJiYgKHZhbHVlc0hhc0R1b3RvbmUgfHwgZGVmYXVsdEZhbWlseUlzRHVvdG9uZSB8fCBjYW5vbmljYWxQcmVmaXhJc0R1b3RvbmUpKSB7XG4gICAgICBjYW5vbmljYWwucHJlZml4ID0gJ2ZhZCc7XG4gICAgfVxuICAgIGlmICh2YWx1ZXMuaW5jbHVkZXMoJ2ZhLWJyYW5kcycpIHx8IHZhbHVlcy5pbmNsdWRlcygnZmFiJykpIHtcbiAgICAgIGNhbm9uaWNhbC5wcmVmaXggPSAnZmFiJztcbiAgICB9XG4gICAgaWYgKCFjYW5vbmljYWwucHJlZml4ICYmIG5ld0Nhbm9uaWNhbEZhbWlsaWVzLmluY2x1ZGVzKGZhbWlseSkpIHtcbiAgICAgIHZhciB2YWxpZFByZWZpeCA9IE9iamVjdC5rZXlzKHN0eWxlcykuZmluZChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBuZXdDYW5vbmljYWxTdHlsZXMuaW5jbHVkZXMoa2V5KTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHZhbGlkUHJlZml4IHx8IGNvbmZpZyQkMS5hdXRvRmV0Y2hTdmcpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRQcmVmaXggPSBVdC5nZXQoZmFtaWx5KS5kZWZhdWx0U2hvcnRQcmVmaXhJZDtcbiAgICAgICAgY2Fub25pY2FsLnByZWZpeCA9IGRlZmF1bHRQcmVmaXg7XG4gICAgICAgIGNhbm9uaWNhbC5pY29uTmFtZSA9IGJ5QWxpYXMoY2Fub25pY2FsLnByZWZpeCwgY2Fub25pY2FsLmljb25OYW1lKSB8fCBjYW5vbmljYWwuaWNvbk5hbWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjYW5vbmljYWwucHJlZml4ID09PSAnZmEnIHx8IGdpdmVuUHJlZml4ID09PSAnZmEnKSB7XG4gICAgICAvLyBUaGUgZmEgcHJlZml4IGlzIG5vdCBjYW5vbmljYWwuIFNvIGlmIGl0IGhhcyBtYWRlIGl0IHRocm91Z2ggdW50aWwgdGhpcyBwb2ludFxuICAgICAgLy8gd2Ugd2lsbCBzaGlmdCBpdCB0byB0aGUgY29ycmVjdCBwcmVmaXguXG4gICAgICBjYW5vbmljYWwucHJlZml4ID0gZ2V0RGVmYXVsdFVzYWJsZVByZWZpeCgpIHx8ICdmYXMnO1xuICAgIH1cbiAgICByZXR1cm4gY2Fub25pY2FsO1xuICB9XG5cbiAgdmFyIExpYnJhcnkgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExpYnJhcnkoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGlicmFyeSk7XG4gICAgICB0aGlzLmRlZmluaXRpb25zID0ge307XG4gICAgfVxuICAgIHJldHVybiBfY3JlYXRlQ2xhc3MoTGlicmFyeSwgW3tcbiAgICAgIGtleTogXCJhZGRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBkZWZpbml0aW9ucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICBkZWZpbml0aW9uc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWRkaXRpb25zID0gZGVmaW5pdGlvbnMucmVkdWNlKHRoaXMuX3B1bGxEZWZpbml0aW9ucywge30pO1xuICAgICAgICBPYmplY3Qua2V5cyhhZGRpdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIF90aGlzLmRlZmluaXRpb25zW2tleV0gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgX3RoaXMuZGVmaW5pdGlvbnNba2V5XSB8fCB7fSksIGFkZGl0aW9uc1trZXldKTtcbiAgICAgICAgICBkZWZpbmVJY29ucyhrZXksIGFkZGl0aW9uc1trZXldKTtcblxuICAgICAgICAgIC8vIFRvIGtlZXAgc3VwcG9ydCBmb3Igb2xkZXIgQ2xhc3NpYyBzdHlsZXMsIGFsc28gYWRkIGxvbmdlciBwcmVmaXhlc1xuICAgICAgICAgIHZhciBsb25nUHJlZml4ID0gUFJFRklYX1RPX0xPTkdfU1RZTEVbaV1ba2V5XTtcbiAgICAgICAgICBpZiAobG9uZ1ByZWZpeCkgZGVmaW5lSWNvbnMobG9uZ1ByZWZpeCwgYWRkaXRpb25zW2tleV0pO1xuICAgICAgICAgIGJ1aWxkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZXNldFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmRlZmluaXRpb25zID0ge307XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9wdWxsRGVmaW5pdGlvbnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcHVsbERlZmluaXRpb25zKGFkZGl0aW9ucywgZGVmaW5pdGlvbikge1xuICAgICAgICB2YXIgbm9ybWFsaXplZCA9IGRlZmluaXRpb24ucHJlZml4ICYmIGRlZmluaXRpb24uaWNvbk5hbWUgJiYgZGVmaW5pdGlvbi5pY29uID8ge1xuICAgICAgICAgIDA6IGRlZmluaXRpb25cbiAgICAgICAgfSA6IGRlZmluaXRpb247XG4gICAgICAgIE9iamVjdC5rZXlzKG5vcm1hbGl6ZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgdmFyIF9ub3JtYWxpemVkJGtleSA9IG5vcm1hbGl6ZWRba2V5XSxcbiAgICAgICAgICAgIHByZWZpeCA9IF9ub3JtYWxpemVkJGtleS5wcmVmaXgsXG4gICAgICAgICAgICBpY29uTmFtZSA9IF9ub3JtYWxpemVkJGtleS5pY29uTmFtZSxcbiAgICAgICAgICAgIGljb24gPSBfbm9ybWFsaXplZCRrZXkuaWNvbjtcbiAgICAgICAgICB2YXIgYWxpYXNlcyA9IGljb25bMl07XG4gICAgICAgICAgaWYgKCFhZGRpdGlvbnNbcHJlZml4XSkgYWRkaXRpb25zW3ByZWZpeF0gPSB7fTtcbiAgICAgICAgICBpZiAoYWxpYXNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhbGlhc2VzLmZvckVhY2goZnVuY3Rpb24gKGFsaWFzKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgYWxpYXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgYWRkaXRpb25zW3ByZWZpeF1bYWxpYXNdID0gaWNvbjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFkZGl0aW9uc1twcmVmaXhdW2ljb25OYW1lXSA9IGljb247XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYWRkaXRpb25zO1xuICAgICAgfVxuICAgIH1dKTtcbiAgfSgpO1xuXG4gIHZhciBfcGx1Z2lucyA9IFtdO1xuICB2YXIgX2hvb2tzID0ge307XG4gIHZhciBwcm92aWRlcnMgPSB7fTtcbiAgdmFyIGRlZmF1bHRQcm92aWRlcktleXMgPSBPYmplY3Qua2V5cyhwcm92aWRlcnMpO1xuICBmdW5jdGlvbiByZWdpc3RlclBsdWdpbnMobmV4dFBsdWdpbnMsIF9yZWYpIHtcbiAgICB2YXIgb2JqID0gX3JlZi5taXhvdXRzVG87XG4gICAgX3BsdWdpbnMgPSBuZXh0UGx1Z2lucztcbiAgICBfaG9va3MgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhwcm92aWRlcnMpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgIGlmIChkZWZhdWx0UHJvdmlkZXJLZXlzLmluZGV4T2YoaykgPT09IC0xKSB7XG4gICAgICAgIGRlbGV0ZSBwcm92aWRlcnNba107XG4gICAgICB9XG4gICAgfSk7XG4gICAgX3BsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICB2YXIgbWl4b3V0ID0gcGx1Z2luLm1peG91dCA/IHBsdWdpbi5taXhvdXQoKSA6IHt9O1xuICAgICAgT2JqZWN0LmtleXMobWl4b3V0KS5mb3JFYWNoKGZ1bmN0aW9uICh0aykge1xuICAgICAgICBpZiAodHlwZW9mIG1peG91dFt0a10gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvYmpbdGtdID0gbWl4b3V0W3RrXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX3R5cGVvZihtaXhvdXRbdGtdKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhtaXhvdXRbdGtdKS5mb3JFYWNoKGZ1bmN0aW9uIChzaykge1xuICAgICAgICAgICAgaWYgKCFvYmpbdGtdKSB7XG4gICAgICAgICAgICAgIG9ialt0a10gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9ialt0a11bc2tdID0gbWl4b3V0W3RrXVtza107XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHBsdWdpbi5ob29rcykge1xuICAgICAgICB2YXIgaG9va3MgPSBwbHVnaW4uaG9va3MoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoaG9va3MpLmZvckVhY2goZnVuY3Rpb24gKGhvb2spIHtcbiAgICAgICAgICBpZiAoIV9ob29rc1tob29rXSkge1xuICAgICAgICAgICAgX2hvb2tzW2hvb2tdID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIF9ob29rc1tob29rXS5wdXNoKGhvb2tzW2hvb2tdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAocGx1Z2luLnByb3ZpZGVzKSB7XG4gICAgICAgIHBsdWdpbi5wcm92aWRlcyhwcm92aWRlcnMpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH1cbiAgZnVuY3Rpb24gY2hhaW5Ib29rcyhob29rLCBhY2N1bXVsYXRvcikge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cbiAgICB2YXIgaG9va0ZucyA9IF9ob29rc1tob29rXSB8fCBbXTtcbiAgICBob29rRm5zLmZvckVhY2goZnVuY3Rpb24gKGhvb2tGbikge1xuICAgICAgYWNjdW11bGF0b3IgPSBob29rRm4uYXBwbHkobnVsbCwgW2FjY3VtdWxhdG9yXS5jb25jYXQoYXJncykpO1xuICAgIH0pO1xuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfVxuICBmdW5jdGlvbiBjYWxsSG9va3MoaG9vaykge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cbiAgICB2YXIgaG9va0ZucyA9IF9ob29rc1tob29rXSB8fCBbXTtcbiAgICBob29rRm5zLmZvckVhY2goZnVuY3Rpb24gKGhvb2tGbikge1xuICAgICAgaG9va0ZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH0pO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbiAgZnVuY3Rpb24gY2FsbFByb3ZpZGVkKCkge1xuICAgIHZhciBob29rID0gYXJndW1lbnRzWzBdO1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICByZXR1cm4gcHJvdmlkZXJzW2hvb2tdID8gcHJvdmlkZXJzW2hvb2tdLmFwcGx5KG51bGwsIGFyZ3MpIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmluZEljb25EZWZpbml0aW9uKGljb25Mb29rdXApIHtcbiAgICBpZiAoaWNvbkxvb2t1cC5wcmVmaXggPT09ICdmYScpIHtcbiAgICAgIGljb25Mb29rdXAucHJlZml4ID0gJ2Zhcyc7XG4gICAgfVxuICAgIHZhciBpY29uTmFtZSA9IGljb25Mb29rdXAuaWNvbk5hbWU7XG4gICAgdmFyIHByZWZpeCA9IGljb25Mb29rdXAucHJlZml4IHx8IGdldERlZmF1bHRVc2FibGVQcmVmaXgoKTtcbiAgICBpZiAoIWljb25OYW1lKSByZXR1cm47XG4gICAgaWNvbk5hbWUgPSBieUFsaWFzKHByZWZpeCwgaWNvbk5hbWUpIHx8IGljb25OYW1lO1xuICAgIHJldHVybiBpY29uRnJvbU1hcHBpbmcobGlicmFyeS5kZWZpbml0aW9ucywgcHJlZml4LCBpY29uTmFtZSkgfHwgaWNvbkZyb21NYXBwaW5nKG5hbWVzcGFjZS5zdHlsZXMsIHByZWZpeCwgaWNvbk5hbWUpO1xuICB9XG4gIHZhciBsaWJyYXJ5ID0gbmV3IExpYnJhcnkoKTtcbiAgdmFyIG5vQXV0byA9IGZ1bmN0aW9uIG5vQXV0bygpIHtcbiAgICBjb25maWcuYXV0b1JlcGxhY2VTdmcgPSBmYWxzZTtcbiAgICBjb25maWcub2JzZXJ2ZU11dGF0aW9ucyA9IGZhbHNlO1xuICAgIGNhbGxIb29rcygnbm9BdXRvJyk7XG4gIH07XG4gIHZhciBkb20gPSB7XG4gICAgaTJzdmc6IGZ1bmN0aW9uIGkyc3ZnKCkge1xuICAgICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICBpZiAoSVNfRE9NKSB7XG4gICAgICAgIGNhbGxIb29rcygnYmVmb3JlSTJzdmcnLCBwYXJhbXMpO1xuICAgICAgICBjYWxsUHJvdmlkZWQoJ3BzZXVkb0VsZW1lbnRzMnN2ZycsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBjYWxsUHJvdmlkZWQoJ2kyc3ZnJywgcGFyYW1zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ09wZXJhdGlvbiByZXF1aXJlcyBhIERPTSBvZiBzb21lIGtpbmQuJykpO1xuICAgICAgfVxuICAgIH0sXG4gICAgd2F0Y2g6IGZ1bmN0aW9uIHdhdGNoKCkge1xuICAgICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgICB2YXIgYXV0b1JlcGxhY2VTdmdSb290ID0gcGFyYW1zLmF1dG9SZXBsYWNlU3ZnUm9vdDtcbiAgICAgIGlmIChjb25maWcuYXV0b1JlcGxhY2VTdmcgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbmZpZy5hdXRvUmVwbGFjZVN2ZyA9IHRydWU7XG4gICAgICB9XG4gICAgICBjb25maWcub2JzZXJ2ZU11dGF0aW9ucyA9IHRydWU7XG4gICAgICBkb21yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGF1dG9SZXBsYWNlKHtcbiAgICAgICAgICBhdXRvUmVwbGFjZVN2Z1Jvb3Q6IGF1dG9SZXBsYWNlU3ZnUm9vdFxuICAgICAgICB9KTtcbiAgICAgICAgY2FsbEhvb2tzKCd3YXRjaCcsIHBhcmFtcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIHZhciBwYXJzZSA9IHtcbiAgICBpY29uOiBmdW5jdGlvbiBpY29uKF9pY29uKSB7XG4gICAgICBpZiAoX2ljb24gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAoX3R5cGVvZihfaWNvbikgPT09ICdvYmplY3QnICYmIF9pY29uLnByZWZpeCAmJiBfaWNvbi5pY29uTmFtZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHByZWZpeDogX2ljb24ucHJlZml4LFxuICAgICAgICAgIGljb25OYW1lOiBieUFsaWFzKF9pY29uLnByZWZpeCwgX2ljb24uaWNvbk5hbWUpIHx8IF9pY29uLmljb25OYW1lXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShfaWNvbikgJiYgX2ljb24ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIHZhciBpY29uTmFtZSA9IF9pY29uWzFdLmluZGV4T2YoJ2ZhLScpID09PSAwID8gX2ljb25bMV0uc2xpY2UoMykgOiBfaWNvblsxXTtcbiAgICAgICAgdmFyIHByZWZpeCA9IGdldENhbm9uaWNhbFByZWZpeChfaWNvblswXSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgaWNvbk5hbWU6IGJ5QWxpYXMocHJlZml4LCBpY29uTmFtZSkgfHwgaWNvbk5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgX2ljb24gPT09ICdzdHJpbmcnICYmIChfaWNvbi5pbmRleE9mKFwiXCIuY29uY2F0KGNvbmZpZy5jc3NQcmVmaXgsIFwiLVwiKSkgPiAtMSB8fCBfaWNvbi5tYXRjaChJQ09OX1NFTEVDVElPTl9TWU5UQVhfUEFUVEVSTikpKSB7XG4gICAgICAgIHZhciBjYW5vbmljYWxJY29uID0gZ2V0Q2Fub25pY2FsSWNvbihfaWNvbi5zcGxpdCgnICcpLCB7XG4gICAgICAgICAgc2tpcExvb2t1cHM6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJlZml4OiBjYW5vbmljYWxJY29uLnByZWZpeCB8fCBnZXREZWZhdWx0VXNhYmxlUHJlZml4KCksXG4gICAgICAgICAgaWNvbk5hbWU6IGJ5QWxpYXMoY2Fub25pY2FsSWNvbi5wcmVmaXgsIGNhbm9uaWNhbEljb24uaWNvbk5hbWUpIHx8IGNhbm9uaWNhbEljb24uaWNvbk5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgX2ljb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBfcHJlZml4ID0gZ2V0RGVmYXVsdFVzYWJsZVByZWZpeCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHByZWZpeDogX3ByZWZpeCxcbiAgICAgICAgICBpY29uTmFtZTogYnlBbGlhcyhfcHJlZml4LCBfaWNvbikgfHwgX2ljb25cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHZhciBhcGkgPSB7XG4gICAgbm9BdXRvOiBub0F1dG8sXG4gICAgY29uZmlnOiBjb25maWcsXG4gICAgZG9tOiBkb20sXG4gICAgcGFyc2U6IHBhcnNlLFxuICAgIGxpYnJhcnk6IGxpYnJhcnksXG4gICAgZmluZEljb25EZWZpbml0aW9uOiBmaW5kSWNvbkRlZmluaXRpb24sXG4gICAgdG9IdG1sOiB0b0h0bWxcbiAgfTtcbiAgdmFyIGF1dG9SZXBsYWNlID0gZnVuY3Rpb24gYXV0b1JlcGxhY2UoKSB7XG4gICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIF9wYXJhbXMkYXV0b1JlcGxhY2VTdiA9IHBhcmFtcy5hdXRvUmVwbGFjZVN2Z1Jvb3QsXG4gICAgICBhdXRvUmVwbGFjZVN2Z1Jvb3QgPSBfcGFyYW1zJGF1dG9SZXBsYWNlU3YgPT09IHZvaWQgMCA/IERPQ1VNRU5UIDogX3BhcmFtcyRhdXRvUmVwbGFjZVN2O1xuICAgIGlmICgoT2JqZWN0LmtleXMobmFtZXNwYWNlLnN0eWxlcykubGVuZ3RoID4gMCB8fCBjb25maWcuYXV0b0ZldGNoU3ZnKSAmJiBJU19ET00gJiYgY29uZmlnLmF1dG9SZXBsYWNlU3ZnKSBhcGkuZG9tLmkyc3ZnKHtcbiAgICAgIG5vZGU6IGF1dG9SZXBsYWNlU3ZnUm9vdFxuICAgIH0pO1xuICB9O1xuICBmdW5jdGlvbiBib290c3RyYXAoKSB7XG4gICAgaWYgKElTX0JST1dTRVIpIHtcbiAgICAgIGlmICghV0lORE9XLkZvbnRBd2Vzb21lKSB7XG4gICAgICAgIFdJTkRPVy5Gb250QXdlc29tZSA9IGFwaTtcbiAgICAgIH1cbiAgICAgIGRvbXJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYXV0b1JlcGxhY2UoKTtcbiAgICAgICAgY2FsbEhvb2tzKCdib290c3RyYXAnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBuYW1lc3BhY2UuaG9va3MgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgbmFtZXNwYWNlLmhvb2tzKSwge30sIHtcbiAgICAgIGFkZFBhY2s6IGZ1bmN0aW9uIGFkZFBhY2socHJlZml4LCBpY29ucykge1xuICAgICAgICBuYW1lc3BhY2Uuc3R5bGVzW3ByZWZpeF0gPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgbmFtZXNwYWNlLnN0eWxlc1twcmVmaXhdIHx8IHt9KSwgaWNvbnMpO1xuICAgICAgICBidWlsZCgpO1xuICAgICAgICBhdXRvUmVwbGFjZSgpO1xuICAgICAgfSxcbiAgICAgIGFkZFBhY2tzOiBmdW5jdGlvbiBhZGRQYWNrcyhwYWNrcykge1xuICAgICAgICBwYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgICBwcmVmaXggPSBfcmVmMlswXSxcbiAgICAgICAgICAgIGljb25zID0gX3JlZjJbMV07XG4gICAgICAgICAgbmFtZXNwYWNlLnN0eWxlc1twcmVmaXhdID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIG5hbWVzcGFjZS5zdHlsZXNbcHJlZml4XSB8fCB7fSksIGljb25zKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJ1aWxkKCk7XG4gICAgICAgIGF1dG9SZXBsYWNlKCk7XG4gICAgICB9LFxuICAgICAgYWRkU2hpbXM6IGZ1bmN0aW9uIGFkZFNoaW1zKHNoaW1zKSB7XG4gICAgICAgIHZhciBfbmFtZXNwYWNlJHNoaW1zO1xuICAgICAgICAoX25hbWVzcGFjZSRzaGltcyA9IG5hbWVzcGFjZS5zaGltcykucHVzaC5hcHBseShfbmFtZXNwYWNlJHNoaW1zLCBfdG9Db25zdW1hYmxlQXJyYXkoc2hpbXMpKTtcbiAgICAgICAgYnVpbGQoKTtcbiAgICAgICAgYXV0b1JlcGxhY2UoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbVZhcmlhbnRzKHZhbCwgYWJzdHJhY3RDcmVhdG9yKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbCwgJ2Fic3RyYWN0Jywge1xuICAgICAgZ2V0OiBhYnN0cmFjdENyZWF0b3JcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAnaHRtbCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gdmFsLmFic3RyYWN0Lm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWwsICdub2RlJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIGlmICghSVNfRE9NKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgY29udGFpbmVyID0gRE9DVU1FTlQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSB2YWwuaHRtbDtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5jaGlsZHJlbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNJY29uIChfcmVmKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICBtYXNrID0gX3JlZi5tYXNrLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIHN0eWxlcyA9IF9yZWYuc3R5bGVzLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm07XG4gICAgaWYgKHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pICYmIG1haW4uZm91bmQgJiYgIW1hc2suZm91bmQpIHtcbiAgICAgIHZhciB3aWR0aCA9IG1haW4ud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IG1haW4uaGVpZ2h0O1xuICAgICAgdmFyIG9mZnNldCA9IHtcbiAgICAgICAgeDogd2lkdGggLyBoZWlnaHQgLyAyLFxuICAgICAgICB5OiAwLjVcbiAgICAgIH07XG4gICAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gam9pblN0eWxlcyhfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgc3R5bGVzKSwge30sIHtcbiAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiBcIlwiLmNvbmNhdChvZmZzZXQueCArIHRyYW5zZm9ybS54IC8gMTYsIFwiZW0gXCIpLmNvbmNhdChvZmZzZXQueSArIHRyYW5zZm9ybS55IC8gMTYsIFwiZW1cIilcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIFt7XG4gICAgICB0YWc6ICdzdmcnLFxuICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgIH1dO1xuICB9XG5cbiAgZnVuY3Rpb24gYXNTeW1ib2wgKF9yZWYpIHtcbiAgICB2YXIgcHJlZml4ID0gX3JlZi5wcmVmaXgsXG4gICAgICBpY29uTmFtZSA9IF9yZWYuaWNvbk5hbWUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuICAgICAgc3ltYm9sID0gX3JlZi5zeW1ib2w7XG4gICAgdmFyIGlkID0gc3ltYm9sID09PSB0cnVlID8gXCJcIi5jb25jYXQocHJlZml4LCBcIi1cIikuY29uY2F0KGNvbmZpZy5jc3NQcmVmaXgsIFwiLVwiKS5jb25jYXQoaWNvbk5hbWUpIDogc3ltYm9sO1xuICAgIHJldHVybiBbe1xuICAgICAgdGFnOiAnc3ZnJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgc3R5bGU6ICdkaXNwbGF5OiBub25lOydcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW3tcbiAgICAgICAgdGFnOiAnc3ltYm9sJyxcbiAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGF0dHJpYnV0ZXMpLCB7fSwge1xuICAgICAgICAgIGlkOiBpZFxuICAgICAgICB9KSxcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICB9XVxuICAgIH1dO1xuICB9XG5cbiAgLy8gSWYgYW55IG9mIHRoZXNlIGF0dHJpYnV0ZXMgYXJlIHByZXNlbnQsIGRvbid0IGFzc3VtZSB0aGUgaWNvbiBpcyBkZWNvcmF0aXZlXG4gIGZ1bmN0aW9uIGlzTGFiZWxlZChhdHRyaWJ1dGVzKSB7XG4gICAgdmFyIGxhYmVscyA9IFsnYXJpYS1sYWJlbCcsICdhcmlhLWxhYmVsbGVkYnknLCAndGl0bGUnLCAncm9sZSddO1xuICAgIHJldHVybiBsYWJlbHMuc29tZShmdW5jdGlvbiAobGFiZWwpIHtcbiAgICAgIHJldHVybiBsYWJlbCBpbiBhdHRyaWJ1dGVzO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VJbmxpbmVTdmdBYnN0cmFjdChwYXJhbXMpIHtcbiAgICB2YXIgX3BhcmFtcyRpY29ucyA9IHBhcmFtcy5pY29ucyxcbiAgICAgIG1haW4gPSBfcGFyYW1zJGljb25zLm1haW4sXG4gICAgICBtYXNrID0gX3BhcmFtcyRpY29ucy5tYXNrLFxuICAgICAgcHJlZml4ID0gcGFyYW1zLnByZWZpeCxcbiAgICAgIGljb25OYW1lID0gcGFyYW1zLmljb25OYW1lLFxuICAgICAgdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHN5bWJvbCA9IHBhcmFtcy5zeW1ib2wsXG4gICAgICBtYXNrSWQgPSBwYXJhbXMubWFza0lkLFxuICAgICAgZXh0cmEgPSBwYXJhbXMuZXh0cmEsXG4gICAgICBfcGFyYW1zJHdhdGNoYWJsZSA9IHBhcmFtcy53YXRjaGFibGUsXG4gICAgICB3YXRjaGFibGUgPSBfcGFyYW1zJHdhdGNoYWJsZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcGFyYW1zJHdhdGNoYWJsZTtcbiAgICB2YXIgX3JlZiA9IG1hc2suZm91bmQgPyBtYXNrIDogbWFpbixcbiAgICAgIHdpZHRoID0gX3JlZi53aWR0aCxcbiAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0O1xuICAgIHZhciBhdHRyQ2xhc3MgPSBbY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MsIGljb25OYW1lID8gXCJcIi5jb25jYXQoY29uZmlnLmNzc1ByZWZpeCwgXCItXCIpLmNvbmNhdChpY29uTmFtZSkgOiAnJ10uZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgICByZXR1cm4gZXh0cmEuY2xhc3Nlcy5pbmRleE9mKGMpID09PSAtMTtcbiAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjICE9PSAnJyB8fCAhIWM7XG4gICAgfSkuY29uY2F0KGV4dHJhLmNsYXNzZXMpLmpvaW4oJyAnKTtcbiAgICB2YXIgY29udGVudCA9IHtcbiAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBleHRyYS5hdHRyaWJ1dGVzKSwge30sIHtcbiAgICAgICAgJ2RhdGEtcHJlZml4JzogcHJlZml4LFxuICAgICAgICAnZGF0YS1pY29uJzogaWNvbk5hbWUsXG4gICAgICAgICdjbGFzcyc6IGF0dHJDbGFzcyxcbiAgICAgICAgJ3JvbGUnOiBleHRyYS5hdHRyaWJ1dGVzLnJvbGUgfHwgJ2ltZycsXG4gICAgICAgICd2aWV3Qm94JzogXCIwIDAgXCIuY29uY2F0KHdpZHRoLCBcIiBcIikuY29uY2F0KGhlaWdodClcbiAgICAgIH0pXG4gICAgfTtcbiAgICBpZiAoIWlzTGFiZWxlZChleHRyYS5hdHRyaWJ1dGVzKSAmJiAhZXh0cmEuYXR0cmlidXRlc1snYXJpYS1oaWRkZW4nXSkge1xuICAgICAgY29udGVudC5hdHRyaWJ1dGVzWydhcmlhLWhpZGRlbiddID0gJ3RydWUnO1xuICAgIH1cbiAgICBpZiAod2F0Y2hhYmxlKSB7XG4gICAgICBjb250ZW50LmF0dHJpYnV0ZXNbREFUQV9GQV9JMlNWR10gPSAnJztcbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgY29udGVudCksIHt9LCB7XG4gICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgIGljb25OYW1lOiBpY29uTmFtZSxcbiAgICAgIG1haW46IG1haW4sXG4gICAgICBtYXNrOiBtYXNrLFxuICAgICAgbWFza0lkOiBtYXNrSWQsXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIHN5bWJvbDogc3ltYm9sLFxuICAgICAgc3R5bGVzOiBfb2JqZWN0U3ByZWFkMih7fSwgZXh0cmEuc3R5bGVzKVxuICAgIH0pO1xuICAgIHZhciBfcmVmMiA9IG1hc2suZm91bmQgJiYgbWFpbi5mb3VuZCA/IGNhbGxQcm92aWRlZCgnZ2VuZXJhdGVBYnN0cmFjdE1hc2snLCBhcmdzKSB8fCB7XG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgYXR0cmlidXRlczoge31cbiAgICAgIH0gOiBjYWxsUHJvdmlkZWQoJ2dlbmVyYXRlQWJzdHJhY3RJY29uJywgYXJncykgfHwge1xuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgICB9LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmMi5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmMi5hdHRyaWJ1dGVzO1xuICAgIGFyZ3MuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICBhcmdzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuICAgIGlmIChzeW1ib2wpIHtcbiAgICAgIHJldHVybiBhc1N5bWJvbChhcmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFzSWNvbihhcmdzKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUxheWVyc1RleHRBYnN0cmFjdChwYXJhbXMpIHtcbiAgICB2YXIgY29udGVudCA9IHBhcmFtcy5jb250ZW50LFxuICAgICAgd2lkdGggPSBwYXJhbXMud2lkdGgsXG4gICAgICBoZWlnaHQgPSBwYXJhbXMuaGVpZ2h0LFxuICAgICAgdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIGV4dHJhID0gcGFyYW1zLmV4dHJhLFxuICAgICAgX3BhcmFtcyR3YXRjaGFibGUyID0gcGFyYW1zLndhdGNoYWJsZSxcbiAgICAgIHdhdGNoYWJsZSA9IF9wYXJhbXMkd2F0Y2hhYmxlMiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcGFyYW1zJHdhdGNoYWJsZTI7XG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgZXh0cmEuYXR0cmlidXRlcyksIHt9LCB7XG4gICAgICBjbGFzczogZXh0cmEuY2xhc3Nlcy5qb2luKCcgJylcbiAgICB9KTtcbiAgICBpZiAod2F0Y2hhYmxlKSB7XG4gICAgICBhdHRyaWJ1dGVzW0RBVEFfRkFfSTJTVkddID0gJyc7XG4gICAgfVxuICAgIHZhciBzdHlsZXMgPSBfb2JqZWN0U3ByZWFkMih7fSwgZXh0cmEuc3R5bGVzKTtcbiAgICBpZiAodHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkpIHtcbiAgICAgIHN0eWxlc1sndHJhbnNmb3JtJ10gPSB0cmFuc2Zvcm1Gb3JDc3Moe1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgc3RhcnRDZW50ZXJlZDogdHJ1ZSxcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgfSk7XG4gICAgICBzdHlsZXNbJy13ZWJraXQtdHJhbnNmb3JtJ10gPSBzdHlsZXNbJ3RyYW5zZm9ybSddO1xuICAgIH1cbiAgICB2YXIgc3R5bGVTdHJpbmcgPSBqb2luU3R5bGVzKHN0eWxlcyk7XG4gICAgaWYgKHN0eWxlU3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBzdHlsZVN0cmluZztcbiAgICB9XG4gICAgdmFyIHZhbCA9IFtdO1xuICAgIHZhbC5wdXNoKHtcbiAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgIGNoaWxkcmVuOiBbY29udGVudF1cbiAgICB9KTtcbiAgICByZXR1cm4gdmFsO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VMYXllcnNDb3VudGVyQWJzdHJhY3QocGFyYW1zKSB7XG4gICAgdmFyIGNvbnRlbnQgPSBwYXJhbXMuY29udGVudCxcbiAgICAgIGV4dHJhID0gcGFyYW1zLmV4dHJhO1xuICAgIHZhciBhdHRyaWJ1dGVzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIGV4dHJhLmF0dHJpYnV0ZXMpLCB7fSwge1xuICAgICAgY2xhc3M6IGV4dHJhLmNsYXNzZXMuam9pbignICcpXG4gICAgfSk7XG4gICAgdmFyIHN0eWxlU3RyaW5nID0gam9pblN0eWxlcyhleHRyYS5zdHlsZXMpO1xuICAgIGlmIChzdHlsZVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gc3R5bGVTdHJpbmc7XG4gICAgfVxuICAgIHZhciB2YWwgPSBbXTtcbiAgICB2YWwucHVzaCh7XG4gICAgICB0YWc6ICdzcGFuJyxcbiAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICBjaGlsZHJlbjogW2NvbnRlbnRdXG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIHZhciBzdHlsZXMkMSA9IG5hbWVzcGFjZS5zdHlsZXM7XG4gIGZ1bmN0aW9uIGFzRm91bmRJY29uKGljb24pIHtcbiAgICB2YXIgd2lkdGggPSBpY29uWzBdO1xuICAgIHZhciBoZWlnaHQgPSBpY29uWzFdO1xuICAgIHZhciBfaWNvbiRzbGljZSA9IGljb24uc2xpY2UoNCksXG4gICAgICBfaWNvbiRzbGljZTIgPSBfc2xpY2VkVG9BcnJheShfaWNvbiRzbGljZSwgMSksXG4gICAgICB2ZWN0b3JEYXRhID0gX2ljb24kc2xpY2UyWzBdO1xuICAgIHZhciBlbGVtZW50ID0gbnVsbDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2ZWN0b3JEYXRhKSkge1xuICAgICAgZWxlbWVudCA9IHtcbiAgICAgICAgdGFnOiAnZycsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBjbGFzczogXCJcIi5jb25jYXQoY29uZmlnLmNzc1ByZWZpeCwgXCItXCIpLmNvbmNhdChEVU9UT05FX0NMQVNTRVMuR1JPVVApXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgIGNsYXNzOiBcIlwiLmNvbmNhdChjb25maWcuY3NzUHJlZml4LCBcIi1cIikuY29uY2F0KERVT1RPTkVfQ0xBU1NFUy5TRUNPTkRBUlkpLFxuICAgICAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgICBkOiB2ZWN0b3JEYXRhWzBdXG4gICAgICAgICAgfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgdGFnOiAncGF0aCcsXG4gICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgY2xhc3M6IFwiXCIuY29uY2F0KGNvbmZpZy5jc3NQcmVmaXgsIFwiLVwiKS5jb25jYXQoRFVPVE9ORV9DTEFTU0VTLlBSSU1BUlkpLFxuICAgICAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgICBkOiB2ZWN0b3JEYXRhWzFdXG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudCA9IHtcbiAgICAgICAgdGFnOiAncGF0aCcsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgICAgICBkOiB2ZWN0b3JEYXRhXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBmb3VuZDogdHJ1ZSxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgaWNvbjogZWxlbWVudFxuICAgIH07XG4gIH1cbiAgdmFyIG1pc3NpbmdJY29uUmVzb2x1dGlvbk1peGluID0ge1xuICAgIGZvdW5kOiBmYWxzZSxcbiAgICB3aWR0aDogNTEyLFxuICAgIGhlaWdodDogNTEyXG4gIH07XG4gIGZ1bmN0aW9uIG1heWJlTm90aWZ5TWlzc2luZyhpY29uTmFtZSwgcHJlZml4KSB7XG4gICAgaWYgKCFQUk9EVUNUSU9OICYmICFjb25maWcuc2hvd01pc3NpbmdJY29ucyAmJiBpY29uTmFtZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkljb24gd2l0aCBuYW1lIFxcXCJcIi5jb25jYXQoaWNvbk5hbWUsIFwiXFxcIiBhbmQgcHJlZml4IFxcXCJcIikuY29uY2F0KHByZWZpeCwgXCJcXFwiIGlzIG1pc3NpbmcuXCIpKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZmluZEljb24oaWNvbk5hbWUsIHByZWZpeCkge1xuICAgIHZhciBnaXZlblByZWZpeCA9IHByZWZpeDtcbiAgICBpZiAocHJlZml4ID09PSAnZmEnICYmIGNvbmZpZy5zdHlsZURlZmF1bHQgIT09IG51bGwpIHtcbiAgICAgIHByZWZpeCA9IGdldERlZmF1bHRVc2FibGVQcmVmaXgoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmIChnaXZlblByZWZpeCA9PT0gJ2ZhJykge1xuICAgICAgICB2YXIgc2hpbSA9IGJ5T2xkTmFtZShpY29uTmFtZSkgfHwge307XG4gICAgICAgIGljb25OYW1lID0gc2hpbS5pY29uTmFtZSB8fCBpY29uTmFtZTtcbiAgICAgICAgcHJlZml4ID0gc2hpbS5wcmVmaXggfHwgcHJlZml4O1xuICAgICAgfVxuICAgICAgaWYgKGljb25OYW1lICYmIHByZWZpeCAmJiBzdHlsZXMkMVtwcmVmaXhdICYmIHN0eWxlcyQxW3ByZWZpeF1baWNvbk5hbWVdKSB7XG4gICAgICAgIHZhciBpY29uID0gc3R5bGVzJDFbcHJlZml4XVtpY29uTmFtZV07XG4gICAgICAgIHJldHVybiByZXNvbHZlKGFzRm91bmRJY29uKGljb24pKTtcbiAgICAgIH1cbiAgICAgIG1heWJlTm90aWZ5TWlzc2luZyhpY29uTmFtZSwgcHJlZml4KTtcbiAgICAgIHJlc29sdmUoX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIG1pc3NpbmdJY29uUmVzb2x1dGlvbk1peGluKSwge30sIHtcbiAgICAgICAgaWNvbjogY29uZmlnLnNob3dNaXNzaW5nSWNvbnMgJiYgaWNvbk5hbWUgPyBjYWxsUHJvdmlkZWQoJ21pc3NpbmdJY29uQWJzdHJhY3QnKSB8fCB7fSA6IHt9XG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgbm9vcCQxID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuICB2YXIgcCQyID0gY29uZmlnLm1lYXN1cmVQZXJmb3JtYW5jZSAmJiBQRVJGT1JNQU5DRSAmJiBQRVJGT1JNQU5DRS5tYXJrICYmIFBFUkZPUk1BTkNFLm1lYXN1cmUgPyBQRVJGT1JNQU5DRSA6IHtcbiAgICBtYXJrOiBub29wJDEsXG4gICAgbWVhc3VyZTogbm9vcCQxXG4gIH07XG4gIHZhciBwcmVhbWJsZSA9IFwiRkEgXFxcIjcuMS4wXFxcIlwiO1xuICB2YXIgYmVnaW4gPSBmdW5jdGlvbiBiZWdpbihuYW1lKSB7XG4gICAgcCQyLm1hcmsoXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSwgXCIgYmVnaW5zXCIpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGVuZChuYW1lKTtcbiAgICB9O1xuICB9O1xuICB2YXIgZW5kID0gZnVuY3Rpb24gZW5kKG5hbWUpIHtcbiAgICBwJDIubWFyayhcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBlbmRzXCIpKTtcbiAgICBwJDIubWVhc3VyZShcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lKSwgXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSwgXCIgYmVnaW5zXCIpLCBcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBlbmRzXCIpKTtcbiAgfTtcbiAgdmFyIHBlcmYgPSB7XG4gICAgYmVnaW46IGJlZ2luLFxuICAgIGVuZDogZW5kXG4gIH07XG5cbiAgdmFyIG5vb3AkMiA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcbiAgZnVuY3Rpb24gaXNXYXRjaGVkKG5vZGUpIHtcbiAgICB2YXIgaTJzdmcgPSBub2RlLmdldEF0dHJpYnV0ZSA/IG5vZGUuZ2V0QXR0cmlidXRlKERBVEFfRkFfSTJTVkcpIDogbnVsbDtcbiAgICByZXR1cm4gdHlwZW9mIGkyc3ZnID09PSAnc3RyaW5nJztcbiAgfVxuICBmdW5jdGlvbiBoYXNQcmVmaXhBbmRJY29uKG5vZGUpIHtcbiAgICB2YXIgcHJlZml4ID0gbm9kZS5nZXRBdHRyaWJ1dGUgPyBub2RlLmdldEF0dHJpYnV0ZShEQVRBX1BSRUZJWCkgOiBudWxsO1xuICAgIHZhciBpY29uID0gbm9kZS5nZXRBdHRyaWJ1dGUgPyBub2RlLmdldEF0dHJpYnV0ZShEQVRBX0lDT04pIDogbnVsbDtcbiAgICByZXR1cm4gcHJlZml4ICYmIGljb247XG4gIH1cbiAgZnVuY3Rpb24gaGFzQmVlblJlcGxhY2VkKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZSAmJiBub2RlLmNsYXNzTGlzdCAmJiBub2RlLmNsYXNzTGlzdC5jb250YWlucyAmJiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhjb25maWcucmVwbGFjZW1lbnRDbGFzcyk7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0TXV0YXRvcigpIHtcbiAgICBpZiAoY29uZmlnLmF1dG9SZXBsYWNlU3ZnID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gbXV0YXRvcnMucmVwbGFjZTtcbiAgICB9XG4gICAgdmFyIG11dGF0b3IgPSBtdXRhdG9yc1tjb25maWcuYXV0b1JlcGxhY2VTdmddO1xuICAgIHJldHVybiBtdXRhdG9yIHx8IG11dGF0b3JzLnJlcGxhY2U7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudE5TKHRhZykge1xuICAgIHJldHVybiBET0NVTUVOVC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgdGFnKTtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZykge1xuICAgIHJldHVybiBET0NVTUVOVC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIH1cbiAgZnVuY3Rpb24gY29udmVydFNWRyhhYnN0cmFjdE9iaikge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBfcGFyYW1zJGNlRm4gPSBwYXJhbXMuY2VGbixcbiAgICAgIGNlRm4gPSBfcGFyYW1zJGNlRm4gPT09IHZvaWQgMCA/IGFic3RyYWN0T2JqLnRhZyA9PT0gJ3N2ZycgPyBjcmVhdGVFbGVtZW50TlMgOiBjcmVhdGVFbGVtZW50IDogX3BhcmFtcyRjZUZuO1xuICAgIGlmICh0eXBlb2YgYWJzdHJhY3RPYmogPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gRE9DVU1FTlQuY3JlYXRlVGV4dE5vZGUoYWJzdHJhY3RPYmopO1xuICAgIH1cbiAgICB2YXIgdGFnID0gY2VGbihhYnN0cmFjdE9iai50YWcpO1xuICAgIE9iamVjdC5rZXlzKGFic3RyYWN0T2JqLmF0dHJpYnV0ZXMgfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdGFnLnNldEF0dHJpYnV0ZShrZXksIGFic3RyYWN0T2JqLmF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfSk7XG4gICAgdmFyIGNoaWxkcmVuID0gYWJzdHJhY3RPYmouY2hpbGRyZW4gfHwgW107XG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHRhZy5hcHBlbmRDaGlsZChjb252ZXJ0U1ZHKGNoaWxkLCB7XG4gICAgICAgIGNlRm46IGNlRm5cbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFnO1xuICB9XG4gIGZ1bmN0aW9uIG5vZGVBc0NvbW1lbnQobm9kZSkge1xuICAgIHZhciBjb21tZW50ID0gXCIgXCIuY29uY2F0KG5vZGUub3V0ZXJIVE1MLCBcIiBcIik7XG4gICAgLyogQkVHSU4uQVRUUklCVVRJT04gKi9cbiAgICBjb21tZW50ID0gXCJcIi5jb25jYXQoY29tbWVudCwgXCJGb250IEF3ZXNvbWUgZm9udGF3ZXNvbWUuY29tIFwiKTtcbiAgICAvKiBFTkQuQVRUUklCVVRJT04gKi9cbiAgICByZXR1cm4gY29tbWVudDtcbiAgfVxuICB2YXIgbXV0YXRvcnMgPSB7XG4gICAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShtdXRhdGlvbikge1xuICAgICAgdmFyIG5vZGUgPSBtdXRhdGlvblswXTtcbiAgICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgbXV0YXRpb25bMV0uZm9yRWFjaChmdW5jdGlvbiAoYWJzdHJhY3QpIHtcbiAgICAgICAgICBub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbnZlcnRTVkcoYWJzdHJhY3QpLCBub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZShEQVRBX0ZBX0kyU1ZHKSA9PT0gbnVsbCAmJiBjb25maWcua2VlcE9yaWdpbmFsU291cmNlKSB7XG4gICAgICAgICAgdmFyIGNvbW1lbnQgPSBET0NVTUVOVC5jcmVhdGVDb21tZW50KG5vZGVBc0NvbW1lbnQobm9kZSkpO1xuICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY29tbWVudCwgbm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbmVzdDogZnVuY3Rpb24gbmVzdChtdXRhdGlvbikge1xuICAgICAgdmFyIG5vZGUgPSBtdXRhdGlvblswXTtcbiAgICAgIHZhciBhYnN0cmFjdCA9IG11dGF0aW9uWzFdO1xuXG4gICAgICAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgYSByZXBsYWNlZCBub2RlIHdlIGRvIG5vdCB3YW50IHRvIGNvbnRpbnVlIG5lc3Rpbmcgd2l0aGluIGl0LlxuICAgICAgLy8gU2hvcnQtY2lyY3VpdCB0byB0aGUgc3RhbmRhcmQgcmVwbGFjZW1lbnRcbiAgICAgIGlmICh+Y2xhc3NBcnJheShub2RlKS5pbmRleE9mKGNvbmZpZy5yZXBsYWNlbWVudENsYXNzKSkge1xuICAgICAgICByZXR1cm4gbXV0YXRvcnMucmVwbGFjZShtdXRhdGlvbik7XG4gICAgICB9XG4gICAgICB2YXIgZm9yU3ZnID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChjb25maWcuY3NzUHJlZml4LCBcIi0uKlwiKSk7XG4gICAgICBkZWxldGUgYWJzdHJhY3RbMF0uYXR0cmlidXRlcy5pZDtcbiAgICAgIGlmIChhYnN0cmFjdFswXS5hdHRyaWJ1dGVzLmNsYXNzKSB7XG4gICAgICAgIHZhciBzcGxpdENsYXNzZXMgPSBhYnN0cmFjdFswXS5hdHRyaWJ1dGVzLmNsYXNzLnNwbGl0KCcgJykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGNscykge1xuICAgICAgICAgIGlmIChjbHMgPT09IGNvbmZpZy5yZXBsYWNlbWVudENsYXNzIHx8IGNscy5tYXRjaChmb3JTdmcpKSB7XG4gICAgICAgICAgICBhY2MudG9TdmcucHVzaChjbHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY2MudG9Ob2RlLnB1c2goY2xzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge1xuICAgICAgICAgIHRvTm9kZTogW10sXG4gICAgICAgICAgdG9Tdmc6IFtdXG4gICAgICAgIH0pO1xuICAgICAgICBhYnN0cmFjdFswXS5hdHRyaWJ1dGVzLmNsYXNzID0gc3BsaXRDbGFzc2VzLnRvU3ZnLmpvaW4oJyAnKTtcbiAgICAgICAgaWYgKHNwbGl0Q2xhc3Nlcy50b05vZGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgc3BsaXRDbGFzc2VzLnRvTm9kZS5qb2luKCcgJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgbmV3SW5uZXJIVE1MID0gYWJzdHJhY3QubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKERBVEFfRkFfSTJTVkcsICcnKTtcbiAgICAgIG5vZGUuaW5uZXJIVE1MID0gbmV3SW5uZXJIVE1MO1xuICAgIH1cbiAgfTtcbiAgZnVuY3Rpb24gcGVyZm9ybU9wZXJhdGlvblN5bmMob3ApIHtcbiAgICBvcCgpO1xuICB9XG4gIGZ1bmN0aW9uIHBlcmZvcm0obXV0YXRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciBjYWxsYmFja0Z1bmN0aW9uID0gdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiBub29wJDI7XG4gICAgaWYgKG11dGF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNhbGxiYWNrRnVuY3Rpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGZyYW1lID0gcGVyZm9ybU9wZXJhdGlvblN5bmM7XG4gICAgICBpZiAoY29uZmlnLm11dGF0ZUFwcHJvYWNoID09PSBNVVRBVElPTl9BUFBST0FDSF9BU1lOQykge1xuICAgICAgICBmcmFtZSA9IFdJTkRPVy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgcGVyZm9ybU9wZXJhdGlvblN5bmM7XG4gICAgICB9XG4gICAgICBmcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtdXRhdG9yID0gZ2V0TXV0YXRvcigpO1xuICAgICAgICB2YXIgbWFyayA9IHBlcmYuYmVnaW4oJ211dGF0ZScpO1xuICAgICAgICBtdXRhdGlvbnMubWFwKG11dGF0b3IpO1xuICAgICAgICBtYXJrKCk7XG4gICAgICAgIGNhbGxiYWNrRnVuY3Rpb24oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICB2YXIgZGlzYWJsZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGlzYWJsZU9ic2VydmF0aW9uKCkge1xuICAgIGRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuICBmdW5jdGlvbiBlbmFibGVPYnNlcnZhdGlvbigpIHtcbiAgICBkaXNhYmxlZCA9IGZhbHNlO1xuICB9XG4gIHZhciBtbyA9IG51bGw7XG4gIGZ1bmN0aW9uIG9ic2VydmUob3B0aW9ucykge1xuICAgIGlmICghTVVUQVRJT05fT0JTRVJWRVIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFjb25maWcub2JzZXJ2ZU11dGF0aW9ucykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgX29wdGlvbnMkdHJlZUNhbGxiYWNrID0gb3B0aW9ucy50cmVlQ2FsbGJhY2ssXG4gICAgICB0cmVlQ2FsbGJhY2sgPSBfb3B0aW9ucyR0cmVlQ2FsbGJhY2sgPT09IHZvaWQgMCA/IG5vb3AkMiA6IF9vcHRpb25zJHRyZWVDYWxsYmFjayxcbiAgICAgIF9vcHRpb25zJG5vZGVDYWxsYmFjayA9IG9wdGlvbnMubm9kZUNhbGxiYWNrLFxuICAgICAgbm9kZUNhbGxiYWNrID0gX29wdGlvbnMkbm9kZUNhbGxiYWNrID09PSB2b2lkIDAgPyBub29wJDIgOiBfb3B0aW9ucyRub2RlQ2FsbGJhY2ssXG4gICAgICBfb3B0aW9ucyRwc2V1ZG9FbGVtZW4gPSBvcHRpb25zLnBzZXVkb0VsZW1lbnRzQ2FsbGJhY2ssXG4gICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrID0gX29wdGlvbnMkcHNldWRvRWxlbWVuID09PSB2b2lkIDAgPyBub29wJDIgOiBfb3B0aW9ucyRwc2V1ZG9FbGVtZW4sXG4gICAgICBfb3B0aW9ucyRvYnNlcnZlTXV0YXQgPSBvcHRpb25zLm9ic2VydmVNdXRhdGlvbnNSb290LFxuICAgICAgb2JzZXJ2ZU11dGF0aW9uc1Jvb3QgPSBfb3B0aW9ucyRvYnNlcnZlTXV0YXQgPT09IHZvaWQgMCA/IERPQ1VNRU5UIDogX29wdGlvbnMkb2JzZXJ2ZU11dGF0O1xuICAgIG1vID0gbmV3IE1VVEFUSU9OX09CU0VSVkVSKGZ1bmN0aW9uIChvYmplY3RzKSB7XG4gICAgICBpZiAoZGlzYWJsZWQpIHJldHVybjtcbiAgICAgIHZhciBkZWZhdWx0UHJlZml4ID0gZ2V0RGVmYXVsdFVzYWJsZVByZWZpeCgpO1xuICAgICAgdG9BcnJheShvYmplY3RzKS5mb3JFYWNoKGZ1bmN0aW9uIChtdXRhdGlvblJlY29yZCkge1xuICAgICAgICBpZiAobXV0YXRpb25SZWNvcmQudHlwZSA9PT0gJ2NoaWxkTGlzdCcgJiYgbXV0YXRpb25SZWNvcmQuYWRkZWROb2Rlcy5sZW5ndGggPiAwICYmICFpc1dhdGNoZWQobXV0YXRpb25SZWNvcmQuYWRkZWROb2Rlc1swXSkpIHtcbiAgICAgICAgICBpZiAoY29uZmlnLnNlYXJjaFBzZXVkb0VsZW1lbnRzKSB7XG4gICAgICAgICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRyZWVDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtdXRhdGlvblJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb25SZWNvcmQudGFyZ2V0LnBhcmVudE5vZGUgJiYgY29uZmlnLnNlYXJjaFBzZXVkb0VsZW1lbnRzKSB7XG4gICAgICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjayhbbXV0YXRpb25SZWNvcmQudGFyZ2V0XSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBpc1dhdGNoZWQobXV0YXRpb25SZWNvcmQudGFyZ2V0KSAmJiB+QVRUUklCVVRFU19XQVRDSEVEX0ZPUl9NVVRBVElPTi5pbmRleE9mKG11dGF0aW9uUmVjb3JkLmF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcycgJiYgaGFzUHJlZml4QW5kSWNvbihtdXRhdGlvblJlY29yZC50YXJnZXQpKSB7XG4gICAgICAgICAgICB2YXIgX2dldENhbm9uaWNhbEljb24gPSBnZXRDYW5vbmljYWxJY29uKGNsYXNzQXJyYXkobXV0YXRpb25SZWNvcmQudGFyZ2V0KSksXG4gICAgICAgICAgICAgIHByZWZpeCA9IF9nZXRDYW5vbmljYWxJY29uLnByZWZpeCxcbiAgICAgICAgICAgICAgaWNvbk5hbWUgPSBfZ2V0Q2Fub25pY2FsSWNvbi5pY29uTmFtZTtcbiAgICAgICAgICAgIG11dGF0aW9uUmVjb3JkLnRhcmdldC5zZXRBdHRyaWJ1dGUoREFUQV9QUkVGSVgsIHByZWZpeCB8fCBkZWZhdWx0UHJlZml4KTtcbiAgICAgICAgICAgIGlmIChpY29uTmFtZSkgbXV0YXRpb25SZWNvcmQudGFyZ2V0LnNldEF0dHJpYnV0ZShEQVRBX0lDT04sIGljb25OYW1lKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0JlZW5SZXBsYWNlZChtdXRhdGlvblJlY29yZC50YXJnZXQpKSB7XG4gICAgICAgICAgICBub2RlQ2FsbGJhY2sobXV0YXRpb25SZWNvcmQudGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmICghSVNfRE9NKSByZXR1cm47XG4gICAgbW8ub2JzZXJ2ZShvYnNlcnZlTXV0YXRpb25zUm9vdCwge1xuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICBpZiAoIW1vKSByZXR1cm47XG4gICAgbW8uZGlzY29ubmVjdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3R5bGVQYXJzZXIgKG5vZGUpIHtcbiAgICB2YXIgc3R5bGUgPSBub2RlLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB2YXIgdmFsID0gW107XG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICB2YWwgPSBzdHlsZS5zcGxpdCgnOycpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBzdHlsZSkge1xuICAgICAgICB2YXIgc3R5bGVzID0gc3R5bGUuc3BsaXQoJzonKTtcbiAgICAgICAgdmFyIHByb3AgPSBzdHlsZXNbMF07XG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlcy5zbGljZSgxKTtcbiAgICAgICAgaWYgKHByb3AgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGFjY1twcm9wXSA9IHZhbHVlLmpvaW4oJzonKS50cmltKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsYXNzUGFyc2VyIChub2RlKSB7XG4gICAgdmFyIGV4aXN0aW5nUHJlZml4ID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlZml4Jyk7XG4gICAgdmFyIGV4aXN0aW5nSWNvbk5hbWUgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pY29uJyk7XG4gICAgdmFyIGlubmVyVGV4dCA9IG5vZGUuaW5uZXJUZXh0ICE9PSB1bmRlZmluZWQgPyBub2RlLmlubmVyVGV4dC50cmltKCkgOiAnJztcbiAgICB2YXIgdmFsID0gZ2V0Q2Fub25pY2FsSWNvbihjbGFzc0FycmF5KG5vZGUpKTtcbiAgICBpZiAoIXZhbC5wcmVmaXgpIHtcbiAgICAgIHZhbC5wcmVmaXggPSBnZXREZWZhdWx0VXNhYmxlUHJlZml4KCk7XG4gICAgfVxuICAgIGlmIChleGlzdGluZ1ByZWZpeCAmJiBleGlzdGluZ0ljb25OYW1lKSB7XG4gICAgICB2YWwucHJlZml4ID0gZXhpc3RpbmdQcmVmaXg7XG4gICAgICB2YWwuaWNvbk5hbWUgPSBleGlzdGluZ0ljb25OYW1lO1xuICAgIH1cbiAgICBpZiAodmFsLmljb25OYW1lICYmIHZhbC5wcmVmaXgpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGlmICh2YWwucHJlZml4ICYmIGlubmVyVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICB2YWwuaWNvbk5hbWUgPSBieUxpZ2F0dXJlKHZhbC5wcmVmaXgsIG5vZGUuaW5uZXJUZXh0KSB8fCBieVVuaWNvZGUodmFsLnByZWZpeCwgdG9IZXgobm9kZS5pbm5lclRleHQpKTtcbiAgICB9XG4gICAgaWYgKCF2YWwuaWNvbk5hbWUgJiYgY29uZmlnLmF1dG9GZXRjaFN2ZyAmJiBub2RlLmZpcnN0Q2hpbGQgJiYgbm9kZS5maXJzdENoaWxkLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgICAgdmFsLmljb25OYW1lID0gbm9kZS5maXJzdENoaWxkLmRhdGE7XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBmdW5jdGlvbiBhdHRyaWJ1dGVzUGFyc2VyIChub2RlKSB7XG4gICAgdmFyIGV4dHJhQXR0cmlidXRlcyA9IHRvQXJyYXkobm9kZS5hdHRyaWJ1dGVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYXR0cikge1xuICAgICAgaWYgKGFjYy5uYW1lICE9PSAnY2xhc3MnICYmIGFjYy5uYW1lICE9PSAnc3R5bGUnKSB7XG4gICAgICAgIGFjY1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICAgIHJldHVybiBleHRyYUF0dHJpYnV0ZXM7XG4gIH1cblxuICBmdW5jdGlvbiBibGFua01ldGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGljb25OYW1lOiBudWxsLFxuICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgdHJhbnNmb3JtOiBtZWFuaW5nbGVzc1RyYW5zZm9ybSxcbiAgICAgIHN5bWJvbDogZmFsc2UsXG4gICAgICBtYXNrOiB7XG4gICAgICAgIGljb25OYW1lOiBudWxsLFxuICAgICAgICBwcmVmaXg6IG51bGwsXG4gICAgICAgIHJlc3Q6IFtdXG4gICAgICB9LFxuICAgICAgbWFza0lkOiBudWxsLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgY2xhc3NlczogW10sXG4gICAgICAgIHN0eWxlczoge30sXG4gICAgICAgIGF0dHJpYnV0ZXM6IHt9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBwYXJzZU1ldGEobm9kZSkge1xuICAgIHZhciBwYXJzZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHtcbiAgICAgIHN0eWxlUGFyc2VyOiB0cnVlXG4gICAgfTtcbiAgICB2YXIgX2NsYXNzUGFyc2VyID0gY2xhc3NQYXJzZXIobm9kZSksXG4gICAgICBpY29uTmFtZSA9IF9jbGFzc1BhcnNlci5pY29uTmFtZSxcbiAgICAgIHByZWZpeCA9IF9jbGFzc1BhcnNlci5wcmVmaXgsXG4gICAgICBleHRyYUNsYXNzZXMgPSBfY2xhc3NQYXJzZXIucmVzdDtcbiAgICB2YXIgZXh0cmFBdHRyaWJ1dGVzID0gYXR0cmlidXRlc1BhcnNlcihub2RlKTtcbiAgICB2YXIgcGx1Z2luTWV0YSA9IGNoYWluSG9va3MoJ3BhcnNlTm9kZUF0dHJpYnV0ZXMnLCB7fSwgbm9kZSk7XG4gICAgdmFyIGV4dHJhU3R5bGVzID0gcGFyc2VyLnN0eWxlUGFyc2VyID8gc3R5bGVQYXJzZXIobm9kZSkgOiBbXTtcbiAgICByZXR1cm4gX29iamVjdFNwcmVhZDIoe1xuICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICB0cmFuc2Zvcm06IG1lYW5pbmdsZXNzVHJhbnNmb3JtLFxuICAgICAgbWFzazoge1xuICAgICAgICBpY29uTmFtZTogbnVsbCxcbiAgICAgICAgcHJlZml4OiBudWxsLFxuICAgICAgICByZXN0OiBbXVxuICAgICAgfSxcbiAgICAgIG1hc2tJZDogbnVsbCxcbiAgICAgIHN5bWJvbDogZmFsc2UsXG4gICAgICBleHRyYToge1xuICAgICAgICBjbGFzc2VzOiBleHRyYUNsYXNzZXMsXG4gICAgICAgIHN0eWxlczogZXh0cmFTdHlsZXMsXG4gICAgICAgIGF0dHJpYnV0ZXM6IGV4dHJhQXR0cmlidXRlc1xuICAgICAgfVxuICAgIH0sIHBsdWdpbk1ldGEpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyQyID0gbmFtZXNwYWNlLnN0eWxlcztcbiAgZnVuY3Rpb24gZ2VuZXJhdGVNdXRhdGlvbihub2RlKSB7XG4gICAgdmFyIG5vZGVNZXRhID0gY29uZmlnLmF1dG9SZXBsYWNlU3ZnID09PSAnbmVzdCcgPyBwYXJzZU1ldGEobm9kZSwge1xuICAgICAgc3R5bGVQYXJzZXI6IGZhbHNlXG4gICAgfSkgOiBwYXJzZU1ldGEobm9kZSk7XG4gICAgaWYgKH5ub2RlTWV0YS5leHRyYS5jbGFzc2VzLmluZGV4T2YoTEFZRVJTX1RFWFRfQ0xBU1NOQU1FKSkge1xuICAgICAgcmV0dXJuIGNhbGxQcm92aWRlZCgnZ2VuZXJhdGVMYXllcnNUZXh0Jywgbm9kZSwgbm9kZU1ldGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2FsbFByb3ZpZGVkKCdnZW5lcmF0ZVN2Z1JlcGxhY2VtZW50TXV0YXRpb24nLCBub2RlLCBub2RlTWV0YSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGdldEtub3duUHJlZml4ZXMoKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoWXQpLCBfdG9Db25zdW1hYmxlQXJyYXkoWnQkMSkpO1xuICB9XG4gIGZ1bmN0aW9uIG9uVHJlZShyb290KSB7XG4gICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICAgIGlmICghSVNfRE9NKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdmFyIGh0bWxDbGFzc0xpc3QgPSBET0NVTUVOVC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0O1xuICAgIHZhciBoY2xBZGQgPSBmdW5jdGlvbiBoY2xBZGQoc3VmZml4KSB7XG4gICAgICByZXR1cm4gaHRtbENsYXNzTGlzdC5hZGQoXCJcIi5jb25jYXQoSFRNTF9DTEFTU19JMlNWR19CQVNFX0NMQVNTLCBcIi1cIikuY29uY2F0KHN1ZmZpeCkpO1xuICAgIH07XG4gICAgdmFyIGhjbFJlbW92ZSA9IGZ1bmN0aW9uIGhjbFJlbW92ZShzdWZmaXgpIHtcbiAgICAgIHJldHVybiBodG1sQ2xhc3NMaXN0LnJlbW92ZShcIlwiLmNvbmNhdChIVE1MX0NMQVNTX0kyU1ZHX0JBU0VfQ0xBU1MsIFwiLVwiKS5jb25jYXQoc3VmZml4KSk7XG4gICAgfTtcbiAgICB2YXIgcHJlZml4ZXMgPSBjb25maWcuYXV0b0ZldGNoU3ZnID8gZ2V0S25vd25QcmVmaXhlcygpIDogUS5jb25jYXQoT2JqZWN0LmtleXMoc3R5bGVzJDIpKTtcbiAgICBpZiAoIXByZWZpeGVzLmluY2x1ZGVzKCdmYScpKSB7XG4gICAgICBwcmVmaXhlcy5wdXNoKCdmYScpO1xuICAgIH1cbiAgICB2YXIgcHJlZml4ZXNEb21RdWVyeSA9IFtcIi5cIi5jb25jYXQoTEFZRVJTX1RFWFRfQ0xBU1NOQU1FLCBcIjpub3QoW1wiKS5jb25jYXQoREFUQV9GQV9JMlNWRywgXCJdKVwiKV0uY29uY2F0KHByZWZpeGVzLm1hcChmdW5jdGlvbiAocCQkMSkge1xuICAgICAgcmV0dXJuIFwiLlwiLmNvbmNhdChwJCQxLCBcIjpub3QoW1wiKS5jb25jYXQoREFUQV9GQV9JMlNWRywgXCJdKVwiKTtcbiAgICB9KSkuam9pbignLCAnKTtcbiAgICBpZiAocHJlZml4ZXNEb21RdWVyeS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgdmFyIGNhbmRpZGF0ZXMgPSBbXTtcbiAgICB0cnkge1xuICAgICAgY2FuZGlkYXRlcyA9IHRvQXJyYXkocm9vdC5xdWVyeVNlbGVjdG9yQWxsKHByZWZpeGVzRG9tUXVlcnkpKTtcbiAgICB9IGNhdGNoIChlJCQxKSB7XG4gICAgICAvLyBub29wXG4gICAgfVxuICAgIGlmIChjYW5kaWRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGhjbEFkZCgncGVuZGluZycpO1xuICAgICAgaGNsUmVtb3ZlKCdjb21wbGV0ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIHZhciBtYXJrID0gcGVyZi5iZWdpbignb25UcmVlJyk7XG4gICAgdmFyIG11dGF0aW9ucyA9IGNhbmRpZGF0ZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG5vZGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBtdXRhdGlvbiA9IGdlbmVyYXRlTXV0YXRpb24obm9kZSk7XG4gICAgICAgIGlmIChtdXRhdGlvbikge1xuICAgICAgICAgIGFjYy5wdXNoKG11dGF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSQkMSkge1xuICAgICAgICBpZiAoIVBST0RVQ1RJT04pIHtcbiAgICAgICAgICBpZiAoZSQkMS5uYW1lID09PSAnTWlzc2luZ0ljb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUkJDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIFByb21pc2UuYWxsKG11dGF0aW9ucykudGhlbihmdW5jdGlvbiAocmVzb2x2ZWRNdXRhdGlvbnMpIHtcbiAgICAgICAgcGVyZm9ybShyZXNvbHZlZE11dGF0aW9ucywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGhjbEFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgaGNsQWRkKCdjb21wbGV0ZScpO1xuICAgICAgICAgIGhjbFJlbW92ZSgncGVuZGluZycpO1xuICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG4gICAgICAgICAgbWFyaygpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSQkMSkge1xuICAgICAgICBtYXJrKCk7XG4gICAgICAgIHJlamVjdChlJCQxKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG9uTm9kZShub2RlKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICAgIGdlbmVyYXRlTXV0YXRpb24obm9kZSkudGhlbihmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgIGlmIChtdXRhdGlvbikge1xuICAgICAgICBwZXJmb3JtKFttdXRhdGlvbl0sIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiByZXNvbHZlSWNvbnMobmV4dCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobWF5YmVJY29uRGVmaW5pdGlvbikge1xuICAgICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgaWNvbkRlZmluaXRpb24gPSAobWF5YmVJY29uRGVmaW5pdGlvbiB8fCB7fSkuaWNvbiA/IG1heWJlSWNvbkRlZmluaXRpb24gOiBmaW5kSWNvbkRlZmluaXRpb24obWF5YmVJY29uRGVmaW5pdGlvbiB8fCB7fSk7XG4gICAgICB2YXIgbWFzayA9IHBhcmFtcy5tYXNrO1xuICAgICAgaWYgKG1hc2spIHtcbiAgICAgICAgbWFzayA9IChtYXNrIHx8IHt9KS5pY29uID8gbWFzayA6IGZpbmRJY29uRGVmaW5pdGlvbihtYXNrIHx8IHt9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0KGljb25EZWZpbml0aW9uLCBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgcGFyYW1zKSwge30sIHtcbiAgICAgICAgbWFzazogbWFza1xuICAgICAgfSkpO1xuICAgIH07XG4gIH1cbiAgdmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihpY29uRGVmaW5pdGlvbikge1xuICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBfcGFyYW1zJHRyYW5zZm9ybSA9IHBhcmFtcy50cmFuc2Zvcm0sXG4gICAgICB0cmFuc2Zvcm0gPSBfcGFyYW1zJHRyYW5zZm9ybSA9PT0gdm9pZCAwID8gbWVhbmluZ2xlc3NUcmFuc2Zvcm0gOiBfcGFyYW1zJHRyYW5zZm9ybSxcbiAgICAgIF9wYXJhbXMkc3ltYm9sID0gcGFyYW1zLnN5bWJvbCxcbiAgICAgIHN5bWJvbCA9IF9wYXJhbXMkc3ltYm9sID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkc3ltYm9sLFxuICAgICAgX3BhcmFtcyRtYXNrID0gcGFyYW1zLm1hc2ssXG4gICAgICBtYXNrID0gX3BhcmFtcyRtYXNrID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyRtYXNrLFxuICAgICAgX3BhcmFtcyRtYXNrSWQgPSBwYXJhbXMubWFza0lkLFxuICAgICAgbWFza0lkID0gX3BhcmFtcyRtYXNrSWQgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJG1hc2tJZCxcbiAgICAgIF9wYXJhbXMkY2xhc3NlcyA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlcyA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXMsXG4gICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMgPSBwYXJhbXMuYXR0cmlidXRlcyxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcGFyYW1zJGF0dHJpYnV0ZXMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRhdHRyaWJ1dGVzLFxuICAgICAgX3BhcmFtcyRzdHlsZXMgPSBwYXJhbXMuc3R5bGVzLFxuICAgICAgc3R5bGVzID0gX3BhcmFtcyRzdHlsZXMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRzdHlsZXM7XG4gICAgaWYgKCFpY29uRGVmaW5pdGlvbikgcmV0dXJuO1xuICAgIHZhciBwcmVmaXggPSBpY29uRGVmaW5pdGlvbi5wcmVmaXgsXG4gICAgICBpY29uTmFtZSA9IGljb25EZWZpbml0aW9uLmljb25OYW1lLFxuICAgICAgaWNvbiA9IGljb25EZWZpbml0aW9uLmljb247XG4gICAgcmV0dXJuIGRvbVZhcmlhbnRzKF9vYmplY3RTcHJlYWQyKHtcbiAgICAgIHR5cGU6ICdpY29uJ1xuICAgIH0sIGljb25EZWZpbml0aW9uKSwgZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbEhvb2tzKCdiZWZvcmVET01FbGVtZW50Q3JlYXRpb24nLCB7XG4gICAgICAgIGljb25EZWZpbml0aW9uOiBpY29uRGVmaW5pdGlvbixcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1ha2VJbmxpbmVTdmdBYnN0cmFjdCh7XG4gICAgICAgIGljb25zOiB7XG4gICAgICAgICAgbWFpbjogYXNGb3VuZEljb24oaWNvbiksXG4gICAgICAgICAgbWFzazogbWFzayA/IGFzRm91bmRJY29uKG1hc2suaWNvbikgOiB7XG4gICAgICAgICAgICBmb3VuZDogZmFsc2UsXG4gICAgICAgICAgICB3aWR0aDogbnVsbCxcbiAgICAgICAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgICAgICAgIGljb246IHt9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgICB0cmFuc2Zvcm06IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBtZWFuaW5nbGVzc1RyYW5zZm9ybSksIHRyYW5zZm9ybSksXG4gICAgICAgIHN5bWJvbDogc3ltYm9sLFxuICAgICAgICBtYXNrSWQ6IG1hc2tJZCxcbiAgICAgICAgZXh0cmE6IHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgICAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgICAgIGNsYXNzZXM6IGNsYXNzZXNcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIHZhciBSZXBsYWNlRWxlbWVudHMgPSB7XG4gICAgbWl4b3V0OiBmdW5jdGlvbiBtaXhvdXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpY29uOiByZXNvbHZlSWNvbnMocmVuZGVyKVxuICAgICAgfTtcbiAgICB9LFxuICAgIGhvb2tzOiBmdW5jdGlvbiBob29rcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG11dGF0aW9uT2JzZXJ2ZXJDYWxsYmFja3M6IGZ1bmN0aW9uIG11dGF0aW9uT2JzZXJ2ZXJDYWxsYmFja3MoYWNjdW11bGF0b3IpIHtcbiAgICAgICAgICBhY2N1bXVsYXRvci50cmVlQ2FsbGJhY2sgPSBvblRyZWU7XG4gICAgICAgICAgYWNjdW11bGF0b3Iubm9kZUNhbGxiYWNrID0gb25Ob2RlO1xuICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICAgIHByb3ZpZGVzOiBmdW5jdGlvbiBwcm92aWRlcyhwcm92aWRlcnMkJDEpIHtcbiAgICAgIHByb3ZpZGVycyQkMS5pMnN2ZyA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgdmFyIF9wYXJhbXMkbm9kZSA9IHBhcmFtcy5ub2RlLFxuICAgICAgICAgIG5vZGUgPSBfcGFyYW1zJG5vZGUgPT09IHZvaWQgMCA/IERPQ1VNRU5UIDogX3BhcmFtcyRub2RlLFxuICAgICAgICAgIF9wYXJhbXMkY2FsbGJhY2sgPSBwYXJhbXMuY2FsbGJhY2ssXG4gICAgICAgICAgY2FsbGJhY2sgPSBfcGFyYW1zJGNhbGxiYWNrID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7fSA6IF9wYXJhbXMkY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiBvblRyZWUobm9kZSwgY2FsbGJhY2spO1xuICAgICAgfTtcbiAgICAgIHByb3ZpZGVycyQkMS5nZW5lcmF0ZVN2Z1JlcGxhY2VtZW50TXV0YXRpb24gPSBmdW5jdGlvbiAobm9kZSwgbm9kZU1ldGEpIHtcbiAgICAgICAgdmFyIGljb25OYW1lID0gbm9kZU1ldGEuaWNvbk5hbWUsXG4gICAgICAgICAgcHJlZml4ID0gbm9kZU1ldGEucHJlZml4LFxuICAgICAgICAgIHRyYW5zZm9ybSA9IG5vZGVNZXRhLnRyYW5zZm9ybSxcbiAgICAgICAgICBzeW1ib2wgPSBub2RlTWV0YS5zeW1ib2wsXG4gICAgICAgICAgbWFzayA9IG5vZGVNZXRhLm1hc2ssXG4gICAgICAgICAgbWFza0lkID0gbm9kZU1ldGEubWFza0lkLFxuICAgICAgICAgIGV4dHJhID0gbm9kZU1ldGEuZXh0cmE7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgUHJvbWlzZS5hbGwoW2ZpbmRJY29uKGljb25OYW1lLCBwcmVmaXgpLCBtYXNrLmljb25OYW1lID8gZmluZEljb24obWFzay5pY29uTmFtZSwgbWFzay5wcmVmaXgpIDogUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgICAgICAgIGZvdW5kOiBmYWxzZSxcbiAgICAgICAgICAgIHdpZHRoOiA1MTIsXG4gICAgICAgICAgICBoZWlnaHQ6IDUxMixcbiAgICAgICAgICAgIGljb246IHt9XG4gICAgICAgICAgfSldKS50aGVuKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICAgICAgbWFpbiA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgICBtYXNrID0gX3JlZjJbMV07XG4gICAgICAgICAgICByZXNvbHZlKFtub2RlLCBtYWtlSW5saW5lU3ZnQWJzdHJhY3Qoe1xuICAgICAgICAgICAgICBpY29uczoge1xuICAgICAgICAgICAgICAgIG1haW46IG1haW4sXG4gICAgICAgICAgICAgICAgbWFzazogbWFza1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICAgICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgICAgICAgICAgIG1hc2tJZDogbWFza0lkLFxuICAgICAgICAgICAgICBleHRyYTogZXh0cmEsXG4gICAgICAgICAgICAgIHdhdGNoYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSldKTtcbiAgICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBwcm92aWRlcnMkJDEuZ2VuZXJhdGVBYnN0cmFjdEljb24gPSBmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gX3JlZjMuY2hpbGRyZW4sXG4gICAgICAgICAgYXR0cmlidXRlcyA9IF9yZWYzLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgbWFpbiA9IF9yZWYzLm1haW4sXG4gICAgICAgICAgdHJhbnNmb3JtID0gX3JlZjMudHJhbnNmb3JtLFxuICAgICAgICAgIHN0eWxlcyA9IF9yZWYzLnN0eWxlcztcbiAgICAgICAgdmFyIHN0eWxlU3RyaW5nID0gam9pblN0eWxlcyhzdHlsZXMpO1xuICAgICAgICBpZiAoc3R5bGVTdHJpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGF0dHJpYnV0ZXNbJ3N0eWxlJ10gPSBzdHlsZVN0cmluZztcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV4dENoaWxkO1xuICAgICAgICBpZiAodHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkpIHtcbiAgICAgICAgICBuZXh0Q2hpbGQgPSBjYWxsUHJvdmlkZWQoJ2dlbmVyYXRlQWJzdHJhY3RUcmFuc2Zvcm1Hcm91cGluZycsIHtcbiAgICAgICAgICAgIG1haW46IG1haW4sXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiBtYWluLndpZHRoLFxuICAgICAgICAgICAgaWNvbldpZHRoOiBtYWluLndpZHRoXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRyZW4ucHVzaChuZXh0Q2hpbGQgfHwgbWFpbi5pY29uKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlc1xuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIExheWVycyA9IHtcbiAgICBtaXhvdXQ6IGZ1bmN0aW9uIG1peG91dCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxheWVyOiBmdW5jdGlvbiBsYXllcihhc3NlbWJsZXIpIHtcbiAgICAgICAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgICAgICB2YXIgX3BhcmFtcyRjbGFzc2VzID0gcGFyYW1zLmNsYXNzZXMsXG4gICAgICAgICAgICBjbGFzc2VzID0gX3BhcmFtcyRjbGFzc2VzID09PSB2b2lkIDAgPyBbXSA6IF9wYXJhbXMkY2xhc3NlcztcbiAgICAgICAgICByZXR1cm4gZG9tVmFyaWFudHMoe1xuICAgICAgICAgICAgdHlwZTogJ2xheWVyJ1xuICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxIb29rcygnYmVmb3JlRE9NRWxlbWVudENyZWF0aW9uJywge1xuICAgICAgICAgICAgICBhc3NlbWJsZXI6IGFzc2VtYmxlcixcbiAgICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gW107XG4gICAgICAgICAgICBhc3NlbWJsZXIoZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShhcmdzKSA/IGFyZ3MubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5jb25jYXQoYS5hYnN0cmFjdCk7XG4gICAgICAgICAgICAgIH0pIDogY2hpbGRyZW4gPSBjaGlsZHJlbi5jb25jYXQoYXJncy5hYnN0cmFjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBbXCJcIi5jb25jYXQoY29uZmlnLmNzc1ByZWZpeCwgXCItbGF5ZXJzXCIpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNsYXNzZXMpKS5qb2luKCcgJylcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIExheWVyc0NvdW50ZXIgPSB7XG4gICAgbWl4b3V0OiBmdW5jdGlvbiBtaXhvdXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb3VudGVyOiBmdW5jdGlvbiBjb3VudGVyKGNvbnRlbnQpIHtcbiAgICAgICAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgICAgICB2YXIgX3BhcmFtcyR0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgICAgICAgIHRpdGxlID0gX3BhcmFtcyR0aXRsZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkdGl0bGUsXG4gICAgICAgICAgICBfcGFyYW1zJGNsYXNzZXMgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgICAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXMgPT09IHZvaWQgMCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzLFxuICAgICAgICAgICAgX3BhcmFtcyRhdHRyaWJ1dGVzID0gcGFyYW1zLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gX3BhcmFtcyRhdHRyaWJ1dGVzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkYXR0cmlidXRlcyxcbiAgICAgICAgICAgIF9wYXJhbXMkc3R5bGVzID0gcGFyYW1zLnN0eWxlcyxcbiAgICAgICAgICAgIHN0eWxlcyA9IF9wYXJhbXMkc3R5bGVzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkc3R5bGVzO1xuICAgICAgICAgIHJldHVybiBkb21WYXJpYW50cyh7XG4gICAgICAgICAgICB0eXBlOiAnY291bnRlcicsXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbEhvb2tzKCdiZWZvcmVET01FbGVtZW50Q3JlYXRpb24nLCB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBtYWtlTGF5ZXJzQ291bnRlckFic3RyYWN0KHtcbiAgICAgICAgICAgICAgY29udGVudDogY29udGVudC50b1N0cmluZygpLFxuICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgIGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiBbXCJcIi5jb25jYXQoY29uZmlnLmNzc1ByZWZpeCwgXCItbGF5ZXJzLWNvdW50ZXJcIildLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY2xhc3NlcykpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICB2YXIgTGF5ZXJzVGV4dCA9IHtcbiAgICBtaXhvdXQ6IGZ1bmN0aW9uIG1peG91dCgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRleHQ6IGZ1bmN0aW9uIHRleHQoY29udGVudCkge1xuICAgICAgICAgIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgICAgICAgIHZhciBfcGFyYW1zJHRyYW5zZm9ybSA9IHBhcmFtcy50cmFuc2Zvcm0sXG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSBfcGFyYW1zJHRyYW5zZm9ybSA9PT0gdm9pZCAwID8gbWVhbmluZ2xlc3NUcmFuc2Zvcm0gOiBfcGFyYW1zJHRyYW5zZm9ybSxcbiAgICAgICAgICAgIF9wYXJhbXMkY2xhc3NlcyA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlcyA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXMsXG4gICAgICAgICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMgPSBwYXJhbXMuYXR0cmlidXRlcyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSBfcGFyYW1zJGF0dHJpYnV0ZXMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRhdHRyaWJ1dGVzLFxuICAgICAgICAgICAgX3BhcmFtcyRzdHlsZXMgPSBwYXJhbXMuc3R5bGVzLFxuICAgICAgICAgICAgc3R5bGVzID0gX3BhcmFtcyRzdHlsZXMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRzdHlsZXM7XG4gICAgICAgICAgcmV0dXJuIGRvbVZhcmlhbnRzKHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsSG9va3MoJ2JlZm9yZURPTUVsZW1lbnRDcmVhdGlvbicsIHtcbiAgICAgICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG1ha2VMYXllcnNUZXh0QWJzdHJhY3Qoe1xuICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBtZWFuaW5nbGVzc1RyYW5zZm9ybSksIHRyYW5zZm9ybSksXG4gICAgICAgICAgICAgIGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzOiBbXCJcIi5jb25jYXQoY29uZmlnLmNzc1ByZWZpeCwgXCItbGF5ZXJzLXRleHRcIildLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY2xhc3NlcykpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgcHJvdmlkZXM6IGZ1bmN0aW9uIHByb3ZpZGVzKHByb3ZpZGVycyQkMSkge1xuICAgICAgcHJvdmlkZXJzJCQxLmdlbmVyYXRlTGF5ZXJzVGV4dCA9IGZ1bmN0aW9uIChub2RlLCBub2RlTWV0YSkge1xuICAgICAgICB2YXIgdHJhbnNmb3JtID0gbm9kZU1ldGEudHJhbnNmb3JtLFxuICAgICAgICAgIGV4dHJhID0gbm9kZU1ldGEuZXh0cmE7XG4gICAgICAgIHZhciB3aWR0aCA9IG51bGw7XG4gICAgICAgIHZhciBoZWlnaHQgPSBudWxsO1xuICAgICAgICBpZiAoSVNfSUUpIHtcbiAgICAgICAgICB2YXIgY29tcHV0ZWRGb250U2l6ZSA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUobm9kZSkuZm9udFNpemUsIDEwKTtcbiAgICAgICAgICB2YXIgYm91bmRpbmdDbGllbnRSZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICB3aWR0aCA9IGJvdW5kaW5nQ2xpZW50UmVjdC53aWR0aCAvIGNvbXB1dGVkRm9udFNpemU7XG4gICAgICAgICAgaGVpZ2h0ID0gYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCAvIGNvbXB1dGVkRm9udFNpemU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbbm9kZSwgbWFrZUxheWVyc1RleHRBYnN0cmFjdCh7XG4gICAgICAgICAgY29udGVudDogbm9kZS5pbm5lckhUTUwsXG4gICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICAgIGV4dHJhOiBleHRyYSxcbiAgICAgICAgICB3YXRjaGFibGU6IHRydWVcbiAgICAgICAgfSldKTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIHZhciBDTEVBTl9DT05URU5UX1BBVFRFUk4gPSBuZXcgUmVnRXhwKFwiXFxcIlwiLCAndWcnKTtcbiAgdmFyIFNFQ09OREFSWV9VTklDT0RFX1JBTkdFID0gWzExMDU5MjAsIDExMTIzMTldO1xuICB2YXIgX0ZPTlRfRkFNSUxZX1dFSUdIVF9UT19QUkVGSVggPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwge1xuICAgIEZvbnRBd2Vzb21lOiB7XG4gICAgICBub3JtYWw6ICdmYXMnLFxuICAgICAgNDAwOiAnZmFzJ1xuICAgIH1cbiAgfSksIEN0KSwgcm8pLCBkbCk7XG4gIHZhciBGT05UX0ZBTUlMWV9XRUlHSFRfVE9fUFJFRklYID0gT2JqZWN0LmtleXMoX0ZPTlRfRkFNSUxZX1dFSUdIVF9UT19QUkVGSVgpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICBhY2Nba2V5LnRvTG93ZXJDYXNlKCldID0gX0ZPTlRfRkFNSUxZX1dFSUdIVF9UT19QUkVGSVhba2V5XTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHZhciBGT05UX0ZBTUlMWV9XRUlHSFRfRkFMTEJBQ0sgPSBPYmplY3Qua2V5cyhGT05UX0ZBTUlMWV9XRUlHSFRfVE9fUFJFRklYKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZm9udEZhbWlseSkge1xuICAgIHZhciB3ZWlnaHRzID0gRk9OVF9GQU1JTFlfV0VJR0hUX1RPX1BSRUZJWFtmb250RmFtaWx5XTtcbiAgICBhY2NbZm9udEZhbWlseV0gPSB3ZWlnaHRzWzkwMF0gfHwgX3RvQ29uc3VtYWJsZUFycmF5KE9iamVjdC5lbnRyaWVzKHdlaWdodHMpKVswXVsxXTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbiAgLy8gUmV0dXJuIGhleCB2YWx1ZSBvZiAqZmlyc3QqIGNoYXJhY3RlciBpbiBgY29udGVudGBcbiAgZnVuY3Rpb24gaGV4VmFsdWVGcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIGNsZWFuZWQgPSBjb250ZW50LnJlcGxhY2UoQ0xFQU5fQ09OVEVOVF9QQVRURVJOLCAnJyk7XG4gICAgcmV0dXJuIHRvSGV4KF90b0NvbnN1bWFibGVBcnJheShjbGVhbmVkKVswXSB8fCAnJyk7XG4gIH1cblxuICAvLyBDaGVjayBpZiBpdCdzIGEgc2Vjb25kYXJ5IER1b3RvbmUgbGF5ZXIsIGJ5IGNoZWNraW5nIGlmOlxuICAvLyAtIFVuaWNvZGUgdmFsdWUgaW4gYGNvbnRlbnRgIGlzIHJlcGVhdGVkXG4gIC8vIC0gVW5pY29kZSB2YWx1ZSBpbiBgY29udGVudGAgaXMgYWJvdmUgMHgxMDAwMFxuICAvLyAtIFRoZSBcInNzMDFcIiBmb250IGZlYXR1cmUgaXMgZW5hYmxlZCBvbiB0aGUgYGNvbnRlbnRgXG4gIGZ1bmN0aW9uIGlzU2Vjb25kYXJ5TGF5ZXIoc3R5bGVzKSB7XG4gICAgdmFyIGhhc1N0eWxpc3RpY1NldCA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LWZlYXR1cmUtc2V0dGluZ3MnKS5pbmNsdWRlcygnc3MwMScpO1xuICAgIHZhciBjb250ZW50ID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2NvbnRlbnQnKTtcbiAgICB2YXIgY2xlYW5lZCA9IGNvbnRlbnQucmVwbGFjZShDTEVBTl9DT05URU5UX1BBVFRFUk4sICcnKTtcbiAgICB2YXIgY29kZVBvaW50ID0gY2xlYW5lZC5jb2RlUG9pbnRBdCgwKTtcbiAgICB2YXIgaXNQcmVwZW5kVGVuID0gY29kZVBvaW50ID49IFNFQ09OREFSWV9VTklDT0RFX1JBTkdFWzBdICYmIGNvZGVQb2ludCA8PSBTRUNPTkRBUllfVU5JQ09ERV9SQU5HRVsxXTtcbiAgICB2YXIgaXNEb3VibGVkID0gY2xlYW5lZC5sZW5ndGggPT09IDIgPyBjbGVhbmVkWzBdID09PSBjbGVhbmVkWzFdIDogZmFsc2U7XG4gICAgcmV0dXJuIGlzUHJlcGVuZFRlbiB8fCBpc0RvdWJsZWQgfHwgaGFzU3R5bGlzdGljU2V0O1xuICB9XG4gIGZ1bmN0aW9uIGdldFByZWZpeChmb250RmFtaWx5LCBmb250V2VpZ2h0KSB7XG4gICAgdmFyIGZvbnRGYW1pbHlTYW5pdGl6ZWQgPSBmb250RmFtaWx5LnJlcGxhY2UoL15bJ1wiXXxbJ1wiXSQvZywgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIGZvbnRXZWlnaHRJbnRlZ2VyID0gcGFyc2VJbnQoZm9udFdlaWdodCk7XG4gICAgdmFyIGZvbnRXZWlnaHRTYW5pdGl6ZWQgPSBpc05hTihmb250V2VpZ2h0SW50ZWdlcikgPyAnbm9ybWFsJyA6IGZvbnRXZWlnaHRJbnRlZ2VyO1xuICAgIHJldHVybiAoRk9OVF9GQU1JTFlfV0VJR0hUX1RPX1BSRUZJWFtmb250RmFtaWx5U2FuaXRpemVkXSB8fCB7fSlbZm9udFdlaWdodFNhbml0aXplZF0gfHwgRk9OVF9GQU1JTFlfV0VJR0hUX0ZBTExCQUNLW2ZvbnRGYW1pbHlTYW5pdGl6ZWRdO1xuICB9XG4gIGZ1bmN0aW9uIHJlcGxhY2VGb3JQb3NpdGlvbihub2RlLCBwb3NpdGlvbikge1xuICAgIHZhciBwZW5kaW5nQXR0cmlidXRlID0gXCJcIi5jb25jYXQoREFUQV9GQV9QU0VVRE9fRUxFTUVOVF9QRU5ESU5HKS5jb25jYXQocG9zaXRpb24ucmVwbGFjZSgnOicsICctJykpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUocGVuZGluZ0F0dHJpYnV0ZSkgIT09IG51bGwpIHtcbiAgICAgICAgLy8gVGhpcyBub2RlIGlzIGFscmVhZHkgYmVpbmcgcHJvY2Vzc2VkXG4gICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0b0FycmF5KG5vZGUuY2hpbGRyZW4pO1xuICAgICAgdmFyIGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50ID0gY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjJCQxKSB7XG4gICAgICAgIHJldHVybiBjJCQxLmdldEF0dHJpYnV0ZShEQVRBX0ZBX1BTRVVET19FTEVNRU5UKSA9PT0gcG9zaXRpb247XG4gICAgICB9KVswXTtcbiAgICAgIHZhciBzdHlsZXMgPSBXSU5ET1cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBwb3NpdGlvbik7XG4gICAgICB2YXIgZm9udEZhbWlseSA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LWZhbWlseScpO1xuICAgICAgdmFyIGZvbnRGYW1pbHlNYXRjaCA9IGZvbnRGYW1pbHkubWF0Y2goRk9OVF9GQU1JTFlfUEFUVEVSTik7XG4gICAgICB2YXIgZm9udFdlaWdodCA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LXdlaWdodCcpO1xuICAgICAgdmFyIGNvbnRlbnQgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnY29udGVudCcpO1xuICAgICAgaWYgKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50ICYmICFmb250RmFtaWx5TWF0Y2gpIHtcbiAgICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBwcm9jZXNzZWQgaXQgYnV0IHRoZSBjdXJyZW50IGNvbXB1dGVkIHN0eWxlIGRvZXMgbm90IHJlc3VsdCBpbiBhIGZvbnQtZmFtaWx5LFxuICAgICAgICAvLyB0aGF0IHByb2JhYmx5IG1lYW5zIHRoYXQgYSBjbGFzcyBuYW1lIHRoYXQgd2FzIHByZXZpb3VzbHkgcHJlc2VudCB0byBtYWtlIHRoZSBpY29uIGhhcyBiZWVuXG4gICAgICAgIC8vIHJlbW92ZWQuIFNvIHdlIG5vdyBzaG91bGQgZGVsZXRlIHRoZSBpY29uLlxuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgIH0gZWxzZSBpZiAoZm9udEZhbWlseU1hdGNoICYmIGNvbnRlbnQgIT09ICdub25lJyAmJiBjb250ZW50ICE9PSAnJykge1xuICAgICAgICB2YXIgX2NvbnRlbnQgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnY29udGVudCcpO1xuICAgICAgICB2YXIgcHJlZml4ID0gZ2V0UHJlZml4KGZvbnRGYW1pbHksIGZvbnRXZWlnaHQpO1xuICAgICAgICB2YXIgaGV4VmFsdWUgPSBoZXhWYWx1ZUZyb21Db250ZW50KF9jb250ZW50KTtcbiAgICAgICAgdmFyIGlzVjQgPSBmb250RmFtaWx5TWF0Y2hbMF0uc3RhcnRzV2l0aCgnRm9udEF3ZXNvbWUnKTtcbiAgICAgICAgdmFyIGlzU2Vjb25kYXJ5ID0gaXNTZWNvbmRhcnlMYXllcihzdHlsZXMpO1xuICAgICAgICB2YXIgaWNvbk5hbWUgPSBieVVuaWNvZGUocHJlZml4LCBoZXhWYWx1ZSk7XG4gICAgICAgIHZhciBpY29uSWRlbnRpZmllciA9IGljb25OYW1lO1xuICAgICAgICBpZiAoaXNWNCkge1xuICAgICAgICAgIHZhciBpY29uTmFtZTQgPSBieU9sZFVuaWNvZGUoaGV4VmFsdWUpO1xuICAgICAgICAgIGlmIChpY29uTmFtZTQuaWNvbk5hbWUgJiYgaWNvbk5hbWU0LnByZWZpeCkge1xuICAgICAgICAgICAgaWNvbk5hbWUgPSBpY29uTmFtZTQuaWNvbk5hbWU7XG4gICAgICAgICAgICBwcmVmaXggPSBpY29uTmFtZTQucHJlZml4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9ubHkgY29udmVydCB0aGUgcHNldWRvIGVsZW1lbnQgaW4gdGhpcyA6OmJlZm9yZS86OmFmdGVyIHBvc2l0aW9uIGludG8gYW4gaWNvbiBpZiB3ZSBoYXZlbid0XG4gICAgICAgIC8vIGFscmVhZHkgZG9uZSBzbyB3aXRoIHRoZSBzYW1lIHByZWZpeCBhbmQgaWNvbk5hbWVcbiAgICAgICAgaWYgKGljb25OYW1lICYmICFpc1NlY29uZGFyeSAmJiAoIWFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50IHx8IGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50LmdldEF0dHJpYnV0ZShEQVRBX1BSRUZJWCkgIT09IHByZWZpeCB8fCBhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudC5nZXRBdHRyaWJ1dGUoREFUQV9JQ09OKSAhPT0gaWNvbklkZW50aWZpZXIpKSB7XG4gICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUocGVuZGluZ0F0dHJpYnV0ZSwgaWNvbklkZW50aWZpZXIpO1xuICAgICAgICAgIGlmIChhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCkge1xuICAgICAgICAgICAgLy8gRGVsZXRlIHRoZSBvbGQgb25lLCBzaW5jZSB3ZSdyZSByZXBsYWNpbmcgaXQgd2l0aCBhIG5ldyBvbmVcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgbWV0YSA9IGJsYW5rTWV0YSgpO1xuICAgICAgICAgIHZhciBleHRyYSA9IG1ldGEuZXh0cmE7XG4gICAgICAgICAgZXh0cmEuYXR0cmlidXRlc1tEQVRBX0ZBX1BTRVVET19FTEVNRU5UXSA9IHBvc2l0aW9uO1xuICAgICAgICAgIGZpbmRJY29uKGljb25OYW1lLCBwcmVmaXgpLnRoZW4oZnVuY3Rpb24gKG1haW4pIHtcbiAgICAgICAgICAgIHZhciBhYnN0cmFjdCA9IG1ha2VJbmxpbmVTdmdBYnN0cmFjdChfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgbWV0YSksIHt9LCB7XG4gICAgICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICAgICAgbWFpbjogbWFpbixcbiAgICAgICAgICAgICAgICBtYXNrOiBlbXB0eUNhbm9uaWNhbEljb24oKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgaWNvbk5hbWU6IGljb25JZGVudGlmaWVyLFxuICAgICAgICAgICAgICBleHRyYTogZXh0cmEsXG4gICAgICAgICAgICAgIHdhdGNoYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBET0NVTUVOVC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uID09PSAnOjpiZWZvcmUnKSB7XG4gICAgICAgICAgICAgIG5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIG5vZGUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxlbWVudC5vdXRlckhUTUwgPSBhYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEkJDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRvSHRtbChhJCQxKTtcbiAgICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUocGVuZGluZ0F0dHJpYnV0ZSk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiByZXBsYWNlKG5vZGUpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW3JlcGxhY2VGb3JQb3NpdGlvbihub2RlLCAnOjpiZWZvcmUnKSwgcmVwbGFjZUZvclBvc2l0aW9uKG5vZGUsICc6OmFmdGVyJyldKTtcbiAgfVxuICBmdW5jdGlvbiBwcm9jZXNzYWJsZShub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuaGVhZCAmJiAhflRBR05BTUVTX1RPX1NLSVBfRk9SX1BTRVVET0VMRU1FTlRTLmluZGV4T2Yobm9kZS50YWdOYW1lLnRvVXBwZXJDYXNlKCkpICYmICFub2RlLmdldEF0dHJpYnV0ZShEQVRBX0ZBX1BTRVVET19FTEVNRU5UKSAmJiAoIW5vZGUucGFyZW50Tm9kZSB8fCBub2RlLnBhcmVudE5vZGUudGFnTmFtZSAhPT0gJ3N2ZycpO1xuICB9XG4gIHZhciBoYXNQc2V1ZG9FbGVtZW50ID0gZnVuY3Rpb24gaGFzUHNldWRvRWxlbWVudChzZWxlY3Rvcikge1xuICAgIHJldHVybiAhIXNlbGVjdG9yICYmIFBTRVVET19FTEVNRU5UUy5zb21lKGZ1bmN0aW9uIChwc2V1ZG9TZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yLmluY2x1ZGVzKHBzZXVkb1NlbGVjdG9yKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBSZXR1cm4gc2VsZWN0b3JzIGZyb20gYWxsIGF2YWlsYWJsZSBzdHlsZXNoZWV0cyB0aGF0IGhhdmVcbiAgLy8gcHNldWRvLWVsZW1lbnRzIGRlZmluZWQuXG4gIHZhciBwYXJzZUNTU1J1bGVGb3JQc2V1ZG9zID0gZnVuY3Rpb24gcGFyc2VDU1NSdWxlRm9yUHNldWRvcyhzZWxlY3RvclRleHQpIHtcbiAgICBpZiAoIXNlbGVjdG9yVGV4dCkgcmV0dXJuIFtdO1xuICAgIHZhciBzZWxlY3RvclNldCA9IG5ldyBTZXQoKTtcbiAgICB2YXIgc2VsZWN0b3JzID0gc2VsZWN0b3JUZXh0LnNwbGl0KC8sKD8hW14oKV0qXFwpKS8pLm1hcChmdW5jdGlvbiAocyQkMSkge1xuICAgICAgcmV0dXJuIHMkJDEudHJpbSgpO1xuICAgIH0pO1xuICAgIHNlbGVjdG9ycyA9IHNlbGVjdG9ycy5mbGF0TWFwKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yLmluY2x1ZGVzKCcoJykgPyBzZWxlY3RvciA6IHNlbGVjdG9yLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChzJCQxKSB7XG4gICAgICAgIHJldHVybiBzJCQxLnRyaW0oKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihzZWxlY3RvcnMpLFxuICAgICAgX3N0ZXA7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgIHZhciBzZWxlY3RvciA9IF9zdGVwLnZhbHVlO1xuICAgICAgICBpZiAoaGFzUHNldWRvRWxlbWVudChzZWxlY3RvcikpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgcHNldWRvLWVsZW1lbnRzIGZyb20gdGhlIHNlbGVjdG9yXG4gICAgICAgICAgdmFyIHNlbGVjdG9yV2l0aG91dFBzZXVkbyA9IFBTRVVET19FTEVNRU5UUy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcHNldWRvU2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2MucmVwbGFjZShwc2V1ZG9TZWxlY3RvciwgJycpO1xuICAgICAgICAgIH0sIHNlbGVjdG9yKTtcbiAgICAgICAgICBpZiAoc2VsZWN0b3JXaXRob3V0UHNldWRvICE9PSAnJyAmJiBzZWxlY3RvcldpdGhvdXRQc2V1ZG8gIT09ICcqJykge1xuICAgICAgICAgICAgc2VsZWN0b3JTZXQuYWRkKHNlbGVjdG9yV2l0aG91dFBzZXVkbyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfaXRlcmF0b3IuZShlcnIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBfaXRlcmF0b3IuZigpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0b3JTZXQ7XG4gIH07XG4gIGZ1bmN0aW9uIHNlYXJjaFBzZXVkb0VsZW1lbnRzKHJvb3QpIHtcbiAgICB2YXIgdXNlQXNOb2RlTGlzdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgICB2YXIgbm9kZUxpc3Q7XG4gICAgaWYgKHVzZUFzTm9kZUxpc3QpIHtcbiAgICAgIG5vZGVMaXN0ID0gcm9vdDtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5zZWFyY2hQc2V1ZG9FbGVtZW50c0Z1bGxTY2FuKSB7XG4gICAgICBub2RlTGlzdCA9IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnKicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBHZXQgZWxlbWVudHMgdGhhdCBoYXZlIHBzZXVkbyBlbGVtZW50cyBkZWZpbmVkIGluIHRoZSBDU1NcbiAgICAgIHZhciBzZWxlY3RvclNldCA9IG5ldyBTZXQoKTtcbiAgICAgIHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoZG9jdW1lbnQuc3R5bGVTaGVldHMpLFxuICAgICAgICBfc3RlcDI7XG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xuICAgICAgICAgIHZhciBzdHlsZXNoZWV0ID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yMyA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHN0eWxlc2hlZXQuY3NzUnVsZXMpLFxuICAgICAgICAgICAgICBfc3RlcDM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKF9pdGVyYXRvcjMucygpOyAhKF9zdGVwMyA9IF9pdGVyYXRvcjMubigpKS5kb25lOykge1xuICAgICAgICAgICAgICAgIHZhciBydWxlID0gX3N0ZXAzLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBwYXJzZWRTZWxlY3RvcnMgPSBwYXJzZUNTU1J1bGVGb3JQc2V1ZG9zKHJ1bGUuc2VsZWN0b3JUZXh0KTtcbiAgICAgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yNCA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHBhcnNlZFNlbGVjdG9ycyksXG4gICAgICAgICAgICAgICAgICBfc3RlcDQ7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGZvciAoX2l0ZXJhdG9yNC5zKCk7ICEoX3N0ZXA0ID0gX2l0ZXJhdG9yNC5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RvciA9IF9zdGVwNC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JTZXQuYWRkKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgIF9pdGVyYXRvcjQuZShlcnIpO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICBfaXRlcmF0b3I0LmYoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBfaXRlcmF0b3IzLmUoZXJyKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIF9pdGVyYXRvcjMuZigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUkJDEpIHtcbiAgICAgICAgICAgIGlmIChjb25maWcuc2VhcmNoUHNldWRvRWxlbWVudHNXYXJuaW5ncykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJGb250IEF3ZXNvbWU6IGNhbm5vdCBwYXJzZSBzdHlsZXNoZWV0OiBcIi5jb25jYXQoc3R5bGVzaGVldC5ocmVmLCBcIiAoXCIpLmNvbmNhdChlJCQxLm1lc3NhZ2UsIFwiKVxcbklmIGl0IGRlY2xhcmVzIGFueSBGb250IEF3ZXNvbWUgQ1NTIHBzZXVkby1lbGVtZW50cywgdGhleSB3aWxsIG5vdCBiZSByZW5kZXJlZCBhcyBTVkcgaWNvbnMuIEFkZCBjcm9zc29yaWdpbj1cXFwiYW5vbnltb3VzXFxcIiB0byB0aGUgPGxpbms+LCBlbmFibGUgc2VhcmNoUHNldWRvRWxlbWVudHNGdWxsU2NhbiBmb3Igc2xvd2VyIGJ1dCBtb3JlIHRob3JvdWdoIERPTSBwYXJzaW5nLCBvciBzdXBwcmVzcyB0aGlzIHdhcm5pbmcgYnkgc2V0dGluZyBzZWFyY2hQc2V1ZG9FbGVtZW50c1dhcm5pbmdzIHRvIGZhbHNlLlwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yMi5lKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfaXRlcmF0b3IyLmYoKTtcbiAgICAgIH1cbiAgICAgIGlmICghc2VsZWN0b3JTZXQuc2l6ZSkgcmV0dXJuO1xuICAgICAgdmFyIGNsZWFuU2VsZWN0b3JzID0gQXJyYXkuZnJvbShzZWxlY3RvclNldCkuam9pbignLCAnKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5vZGVMaXN0ID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKGNsZWFuU2VsZWN0b3JzKTtcbiAgICAgIH0gY2F0Y2ggKF91bnVzZWQpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBvcGVyYXRpb25zID0gdG9BcnJheShub2RlTGlzdCkuZmlsdGVyKHByb2Nlc3NhYmxlKS5tYXAocmVwbGFjZSk7XG4gICAgICB2YXIgZW5kID0gcGVyZi5iZWdpbignc2VhcmNoUHNldWRvRWxlbWVudHMnKTtcbiAgICAgIGRpc2FibGVPYnNlcnZhdGlvbigpO1xuICAgICAgUHJvbWlzZS5hbGwob3BlcmF0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVuZCgpO1xuICAgICAgICBlbmFibGVPYnNlcnZhdGlvbigpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVuZCgpO1xuICAgICAgICBlbmFibGVPYnNlcnZhdGlvbigpO1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHZhciBQc2V1ZG9FbGVtZW50cyA9IHtcbiAgICBob29rczogZnVuY3Rpb24gaG9va3MoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtdXRhdGlvbk9ic2VydmVyQ2FsbGJhY2tzOiBmdW5jdGlvbiBtdXRhdGlvbk9ic2VydmVyQ2FsbGJhY2tzKGFjY3VtdWxhdG9yKSB7XG4gICAgICAgICAgYWNjdW11bGF0b3IucHNldWRvRWxlbWVudHNDYWxsYmFjayA9IHNlYXJjaFBzZXVkb0VsZW1lbnRzO1xuICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICAgIHByb3ZpZGVzOiBmdW5jdGlvbiBwcm92aWRlcyhwcm92aWRlcnMpIHtcbiAgICAgIHByb3ZpZGVycy5wc2V1ZG9FbGVtZW50czJzdmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIHZhciBfcGFyYW1zJG5vZGUgPSBwYXJhbXMubm9kZSxcbiAgICAgICAgICBub2RlID0gX3BhcmFtcyRub2RlID09PSB2b2lkIDAgPyBET0NVTUVOVCA6IF9wYXJhbXMkbm9kZTtcbiAgICAgICAgaWYgKGNvbmZpZy5zZWFyY2hQc2V1ZG9FbGVtZW50cykge1xuICAgICAgICAgIHNlYXJjaFBzZXVkb0VsZW1lbnRzKG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICB2YXIgX3Vud2F0Y2hlZCA9IGZhbHNlO1xuICB2YXIgTXV0YXRpb25PYnNlcnZlciQxID0ge1xuICAgIG1peG91dDogZnVuY3Rpb24gbWl4b3V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZG9tOiB7XG4gICAgICAgICAgdW53YXRjaDogZnVuY3Rpb24gdW53YXRjaCgpIHtcbiAgICAgICAgICAgIGRpc2FibGVPYnNlcnZhdGlvbigpO1xuICAgICAgICAgICAgX3Vud2F0Y2hlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgaG9va3M6IGZ1bmN0aW9uIGhvb2tzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYm9vdHN0cmFwOiBmdW5jdGlvbiBib290c3RyYXAoKSB7XG4gICAgICAgICAgb2JzZXJ2ZShjaGFpbkhvb2tzKCdtdXRhdGlvbk9ic2VydmVyQ2FsbGJhY2tzJywge30pKTtcbiAgICAgICAgfSxcbiAgICAgICAgbm9BdXRvOiBmdW5jdGlvbiBub0F1dG8oKSB7XG4gICAgICAgICAgZGlzY29ubmVjdCgpO1xuICAgICAgICB9LFxuICAgICAgICB3YXRjaDogZnVuY3Rpb24gd2F0Y2gocGFyYW1zKSB7XG4gICAgICAgICAgdmFyIG9ic2VydmVNdXRhdGlvbnNSb290ID0gcGFyYW1zLm9ic2VydmVNdXRhdGlvbnNSb290O1xuICAgICAgICAgIGlmIChfdW53YXRjaGVkKSB7XG4gICAgICAgICAgICBlbmFibGVPYnNlcnZhdGlvbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZlKGNoYWluSG9va3MoJ211dGF0aW9uT2JzZXJ2ZXJDYWxsYmFja3MnLCB7XG4gICAgICAgICAgICAgIG9ic2VydmVNdXRhdGlvbnNSb290OiBvYnNlcnZlTXV0YXRpb25zUm9vdFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHBhcnNlVHJhbnNmb3JtU3RyaW5nID0gZnVuY3Rpb24gcGFyc2VUcmFuc2Zvcm1TdHJpbmcodHJhbnNmb3JtU3RyaW5nKSB7XG4gICAgdmFyIHRyYW5zZm9ybSA9IHtcbiAgICAgIHNpemU6IDE2LFxuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICBmbGlwWDogZmFsc2UsXG4gICAgICBmbGlwWTogZmFsc2UsXG4gICAgICByb3RhdGU6IDBcbiAgICB9O1xuICAgIHJldHVybiB0cmFuc2Zvcm1TdHJpbmcudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBuKSB7XG4gICAgICB2YXIgcGFydHMgPSBuLnRvTG93ZXJDYXNlKCkuc3BsaXQoJy0nKTtcbiAgICAgIHZhciBmaXJzdCA9IHBhcnRzWzBdO1xuICAgICAgdmFyIHJlc3QgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCctJyk7XG4gICAgICBpZiAoZmlyc3QgJiYgcmVzdCA9PT0gJ2gnKSB7XG4gICAgICAgIGFjYy5mbGlwWCA9IHRydWU7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgICBpZiAoZmlyc3QgJiYgcmVzdCA9PT0gJ3YnKSB7XG4gICAgICAgIGFjYy5mbGlwWSA9IHRydWU7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgICByZXN0ID0gcGFyc2VGbG9hdChyZXN0KTtcbiAgICAgIGlmIChpc05hTihyZXN0KSkge1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChmaXJzdCkge1xuICAgICAgICBjYXNlICdncm93JzpcbiAgICAgICAgICBhY2Muc2l6ZSA9IGFjYy5zaXplICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2hyaW5rJzpcbiAgICAgICAgICBhY2Muc2l6ZSA9IGFjYy5zaXplIC0gcmVzdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgYWNjLnggPSBhY2MueCAtIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICBhY2MueCA9IGFjYy54ICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICAgIGFjYy55ID0gYWNjLnkgLSByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICBhY2MueSA9IGFjYy55ICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncm90YXRlJzpcbiAgICAgICAgICBhY2Mucm90YXRlID0gYWNjLnJvdGF0ZSArIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHRyYW5zZm9ybSk7XG4gIH07XG4gIHZhciBQb3dlclRyYW5zZm9ybXMgPSB7XG4gICAgbWl4b3V0OiBmdW5jdGlvbiBtaXhvdXQoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJzZToge1xuICAgICAgICAgIHRyYW5zZm9ybTogZnVuY3Rpb24gdHJhbnNmb3JtKHRyYW5zZm9ybVN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlVHJhbnNmb3JtU3RyaW5nKHRyYW5zZm9ybVN0cmluZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgaG9va3M6IGZ1bmN0aW9uIGhvb2tzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFyc2VOb2RlQXR0cmlidXRlczogZnVuY3Rpb24gcGFyc2VOb2RlQXR0cmlidXRlcyhhY2N1bXVsYXRvciwgbm9kZSkge1xuICAgICAgICAgIHZhciB0cmFuc2Zvcm1TdHJpbmcgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS10cmFuc2Zvcm0nKTtcbiAgICAgICAgICBpZiAodHJhbnNmb3JtU3RyaW5nKSB7XG4gICAgICAgICAgICBhY2N1bXVsYXRvci50cmFuc2Zvcm0gPSBwYXJzZVRyYW5zZm9ybVN0cmluZyh0cmFuc2Zvcm1TdHJpbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICBwcm92aWRlczogZnVuY3Rpb24gcHJvdmlkZXMocHJvdmlkZXJzKSB7XG4gICAgICBwcm92aWRlcnMuZ2VuZXJhdGVBYnN0cmFjdFRyYW5zZm9ybUdyb3VwaW5nID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm0sXG4gICAgICAgICAgY29udGFpbmVyV2lkdGggPSBfcmVmLmNvbnRhaW5lcldpZHRoLFxuICAgICAgICAgIGljb25XaWR0aCA9IF9yZWYuaWNvbldpZHRoO1xuICAgICAgICB2YXIgb3V0ZXIgPSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIi5jb25jYXQoY29udGFpbmVyV2lkdGggLyAyLCBcIiAyNTYpXCIpXG4gICAgICAgIH07XG4gICAgICAgIHZhciBpbm5lclRyYW5zbGF0ZSA9IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAqIDMyLCBcIiwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0ueSAqIDMyLCBcIikgXCIpO1xuICAgICAgICB2YXIgaW5uZXJTY2FsZSA9IFwic2NhbGUoXCIuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gMTYgKiAodHJhbnNmb3JtLmZsaXBYID8gLTEgOiAxKSwgXCIsIFwiKS5jb25jYXQodHJhbnNmb3JtLnNpemUgLyAxNiAqICh0cmFuc2Zvcm0uZmxpcFkgPyAtMSA6IDEpLCBcIikgXCIpO1xuICAgICAgICB2YXIgaW5uZXJSb3RhdGUgPSBcInJvdGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnJvdGF0ZSwgXCIgMCAwKVwiKTtcbiAgICAgICAgdmFyIGlubmVyID0ge1xuICAgICAgICAgIHRyYW5zZm9ybTogXCJcIi5jb25jYXQoaW5uZXJUcmFuc2xhdGUsIFwiIFwiKS5jb25jYXQoaW5uZXJTY2FsZSwgXCIgXCIpLmNvbmNhdChpbm5lclJvdGF0ZSlcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHBhdGggPSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZShcIi5jb25jYXQoaWNvbldpZHRoIC8gMiAqIC0xLCBcIiAtMjU2KVwiKVxuICAgICAgICB9O1xuICAgICAgICB2YXIgb3BlcmF0aW9ucyA9IHtcbiAgICAgICAgICBvdXRlcjogb3V0ZXIsXG4gICAgICAgICAgaW5uZXI6IGlubmVyLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0YWc6ICdnJyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMih7fSwgb3BlcmF0aW9ucy5vdXRlciksXG4gICAgICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgICAgICB0YWc6ICdnJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKHt9LCBvcGVyYXRpb25zLmlubmVyKSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICAgICAgICB0YWc6IG1haW4uaWNvbi50YWcsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBtYWluLmljb24uY2hpbGRyZW4sXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBtYWluLmljb24uYXR0cmlidXRlcyksIG9wZXJhdGlvbnMucGF0aClcbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgfV1cbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIHZhciBBTExfU1BBQ0UgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJSdcbiAgfTtcbiAgZnVuY3Rpb24gZmlsbEJsYWNrKGFic3RyYWN0KSB7XG4gICAgdmFyIGZvcmNlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuICAgIGlmIChhYnN0cmFjdC5hdHRyaWJ1dGVzICYmIChhYnN0cmFjdC5hdHRyaWJ1dGVzLmZpbGwgfHwgZm9yY2UpKSB7XG4gICAgICBhYnN0cmFjdC5hdHRyaWJ1dGVzLmZpbGwgPSAnYmxhY2snO1xuICAgIH1cbiAgICByZXR1cm4gYWJzdHJhY3Q7XG4gIH1cbiAgZnVuY3Rpb24gZGVHcm91cChhYnN0cmFjdCkge1xuICAgIGlmIChhYnN0cmFjdC50YWcgPT09ICdnJykge1xuICAgICAgcmV0dXJuIGFic3RyYWN0LmNoaWxkcmVuO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW2Fic3RyYWN0XTtcbiAgICB9XG4gIH1cbiAgdmFyIE1hc2tzID0ge1xuICAgIGhvb2tzOiBmdW5jdGlvbiBob29rcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcnNlTm9kZUF0dHJpYnV0ZXM6IGZ1bmN0aW9uIHBhcnNlTm9kZUF0dHJpYnV0ZXMoYWNjdW11bGF0b3IsIG5vZGUpIHtcbiAgICAgICAgICB2YXIgbWFza0RhdGEgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS1tYXNrJyk7XG4gICAgICAgICAgdmFyIG1hc2sgPSAhbWFza0RhdGEgPyBlbXB0eUNhbm9uaWNhbEljb24oKSA6IGdldENhbm9uaWNhbEljb24obWFza0RhdGEuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHJldHVybiBpLnRyaW0oKTtcbiAgICAgICAgICB9KSk7XG4gICAgICAgICAgaWYgKCFtYXNrLnByZWZpeCkge1xuICAgICAgICAgICAgbWFzay5wcmVmaXggPSBnZXREZWZhdWx0VXNhYmxlUHJlZml4KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFjY3VtdWxhdG9yLm1hc2sgPSBtYXNrO1xuICAgICAgICAgIGFjY3VtdWxhdG9yLm1hc2tJZCA9IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWZhLW1hc2staWQnKTtcbiAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICBwcm92aWRlczogZnVuY3Rpb24gcHJvdmlkZXMocHJvdmlkZXJzKSB7XG4gICAgICBwcm92aWRlcnMuZ2VuZXJhdGVBYnN0cmFjdE1hc2sgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgbWFpbiA9IF9yZWYubWFpbixcbiAgICAgICAgICBtYXNrID0gX3JlZi5tYXNrLFxuICAgICAgICAgIGV4cGxpY2l0TWFza0lkID0gX3JlZi5tYXNrSWQsXG4gICAgICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm07XG4gICAgICAgIHZhciBtYWluV2lkdGggPSBtYWluLndpZHRoLFxuICAgICAgICAgIG1haW5QYXRoID0gbWFpbi5pY29uO1xuICAgICAgICB2YXIgbWFza1dpZHRoID0gbWFzay53aWR0aCxcbiAgICAgICAgICBtYXNrUGF0aCA9IG1hc2suaWNvbjtcbiAgICAgICAgdmFyIHRyYW5zID0gdHJhbnNmb3JtRm9yU3ZnKHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICBjb250YWluZXJXaWR0aDogbWFza1dpZHRoLFxuICAgICAgICAgIGljb25XaWR0aDogbWFpbldpZHRoXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbWFza1JlY3QgPSB7XG4gICAgICAgICAgdGFnOiAncmVjdCcsXG4gICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEFMTF9TUEFDRSksIHt9LCB7XG4gICAgICAgICAgICBmaWxsOiAnd2hpdGUnXG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG1hc2tJbm5lckdyb3VwQ2hpbGRyZW5NaXhpbiA9IG1haW5QYXRoLmNoaWxkcmVuID8ge1xuICAgICAgICAgIGNoaWxkcmVuOiBtYWluUGF0aC5jaGlsZHJlbi5tYXAoZmlsbEJsYWNrKVxuICAgICAgICB9IDoge307XG4gICAgICAgIHZhciBtYXNrSW5uZXJHcm91cCA9IHtcbiAgICAgICAgICB0YWc6ICdnJyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMih7fSwgdHJhbnMuaW5uZXIpLFxuICAgICAgICAgIGNoaWxkcmVuOiBbZmlsbEJsYWNrKF9vYmplY3RTcHJlYWQyKHtcbiAgICAgICAgICAgIHRhZzogbWFpblBhdGgudGFnLFxuICAgICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIG1haW5QYXRoLmF0dHJpYnV0ZXMpLCB0cmFucy5wYXRoKVxuICAgICAgICAgIH0sIG1hc2tJbm5lckdyb3VwQ2hpbGRyZW5NaXhpbikpXVxuICAgICAgICB9O1xuICAgICAgICB2YXIgbWFza091dGVyR3JvdXAgPSB7XG4gICAgICAgICAgdGFnOiAnZycsXG4gICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoe30sIHRyYW5zLm91dGVyKSxcbiAgICAgICAgICBjaGlsZHJlbjogW21hc2tJbm5lckdyb3VwXVxuICAgICAgICB9O1xuICAgICAgICB2YXIgbWFza0lkID0gXCJtYXNrLVwiLmNvbmNhdChleHBsaWNpdE1hc2tJZCB8fCBuZXh0VW5pcXVlSWQoKSk7XG4gICAgICAgIHZhciBjbGlwSWQgPSBcImNsaXAtXCIuY29uY2F0KGV4cGxpY2l0TWFza0lkIHx8IG5leHRVbmlxdWVJZCgpKTtcbiAgICAgICAgdmFyIG1hc2tUYWcgPSB7XG4gICAgICAgICAgdGFnOiAnbWFzaycsXG4gICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEFMTF9TUEFDRSksIHt9LCB7XG4gICAgICAgICAgICBpZDogbWFza0lkLFxuICAgICAgICAgICAgbWFza1VuaXRzOiAndXNlclNwYWNlT25Vc2UnLFxuICAgICAgICAgICAgbWFza0NvbnRlbnRVbml0czogJ3VzZXJTcGFjZU9uVXNlJ1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNoaWxkcmVuOiBbbWFza1JlY3QsIG1hc2tPdXRlckdyb3VwXVxuICAgICAgICB9O1xuICAgICAgICB2YXIgZGVmcyA9IHtcbiAgICAgICAgICB0YWc6ICdkZWZzJyxcbiAgICAgICAgICBjaGlsZHJlbjogW3tcbiAgICAgICAgICAgIHRhZzogJ2NsaXBQYXRoJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAgICAgaWQ6IGNsaXBJZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBkZUdyb3VwKG1hc2tQYXRoKVxuICAgICAgICAgIH0sIG1hc2tUYWddXG4gICAgICAgIH07XG4gICAgICAgIGNoaWxkcmVuLnB1c2goZGVmcywge1xuICAgICAgICAgIHRhZzogJ3JlY3QnLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKHtcbiAgICAgICAgICAgICdmaWxsJzogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgICAnY2xpcC1wYXRoJzogXCJ1cmwoI1wiLmNvbmNhdChjbGlwSWQsIFwiKVwiKSxcbiAgICAgICAgICAgICdtYXNrJzogXCJ1cmwoI1wiLmNvbmNhdChtYXNrSWQsIFwiKVwiKVxuICAgICAgICAgIH0sIEFMTF9TUEFDRSlcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXNcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIHZhciBNaXNzaW5nSWNvbkluZGljYXRvciA9IHtcbiAgICBwcm92aWRlczogZnVuY3Rpb24gcHJvdmlkZXMocHJvdmlkZXJzKSB7XG4gICAgICB2YXIgcmVkdWNlTW90aW9uID0gZmFsc2U7XG4gICAgICBpZiAoV0lORE9XLm1hdGNoTWVkaWEpIHtcbiAgICAgICAgcmVkdWNlTW90aW9uID0gV0lORE9XLm1hdGNoTWVkaWEoJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJykubWF0Y2hlcztcbiAgICAgIH1cbiAgICAgIHByb3ZpZGVycy5taXNzaW5nSWNvbkFic3RyYWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZ0NoaWxkcmVuID0gW107XG4gICAgICAgIHZhciBGSUxMID0ge1xuICAgICAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InXG4gICAgICAgIH07XG4gICAgICAgIHZhciBBTklNQVRJT05fQkFTRSA9IHtcbiAgICAgICAgICBhdHRyaWJ1dGVUeXBlOiAnWE1MJyxcbiAgICAgICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnLFxuICAgICAgICAgIGR1cjogJzJzJ1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFJpbmdcbiAgICAgICAgZ0NoaWxkcmVuLnB1c2goe1xuICAgICAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGSUxMKSwge30sIHtcbiAgICAgICAgICAgIGQ6ICdNMTU2LjUsNDQ3LjdsLTEyLjYsMjkuNWMtMTguNy05LjUtMzUuOS0yMS4yLTUxLjUtMzQuOWwyMi43LTIyLjdDMTI3LjYsNDMwLjUsMTQxLjUsNDQwLDE1Ni41LDQ0Ny43eiBNNDAuNiwyNzJIOC41IGMxLjQsMjEuMiw1LjQsNDEuNywxMS43LDYxLjFMNTAsMzIxLjJDNDUuMSwzMDUuNSw0MS44LDI4OSw0MC42LDI3MnogTTQwLjYsMjQwYzEuNC0xOC44LDUuMi0zNywxMS4xLTU0LjFsLTI5LjUtMTIuNiBDMTQuNywxOTQuMywxMCwyMTYuNyw4LjUsMjQwSDQwLjZ6IE02NC4zLDE1Ni41YzcuOC0xNC45LDE3LjItMjguOCwyOC4xLTQxLjVMNjkuNyw5Mi4zYy0xMy43LDE1LjYtMjUuNSwzMi44LTM0LjksNTEuNSBMNjQuMywxNTYuNXogTTM5Nyw0MTkuNmMtMTMuOSwxMi0yOS40LDIyLjMtNDYuMSwzMC40bDExLjksMjkuOGMyMC43LTkuOSwzOS44LTIyLjYsNTYuOS0zNy42TDM5Nyw0MTkuNnogTTExNSw5Mi40IGMxMy45LTEyLDI5LjQtMjIuMyw0Ni4xLTMwLjRsLTExLjktMjkuOGMtMjAuNyw5LjktMzkuOCwyMi42LTU2LjgsMzcuNkwxMTUsOTIuNHogTTQ0Ny43LDM1NS41Yy03LjgsMTQuOS0xNy4yLDI4LjgtMjguMSw0MS41IGwyMi43LDIyLjdjMTMuNy0xNS42LDI1LjUtMzIuOSwzNC45LTUxLjVMNDQ3LjcsMzU1LjV6IE00NzEuNCwyNzJjLTEuNCwxOC44LTUuMiwzNy0xMS4xLDU0LjFsMjkuNSwxMi42IGM3LjUtMjEuMSwxMi4yLTQzLjUsMTMuNi02Ni44SDQ3MS40eiBNMzIxLjIsNDYyYy0xNS43LDUtMzIuMiw4LjItNDkuMiw5LjR2MzIuMWMyMS4yLTEuNCw0MS43LTUuNCw2MS4xLTExLjdMMzIxLjIsNDYyeiBNMjQwLDQ3MS40Yy0xOC44LTEuNC0zNy01LjItNTQuMS0xMS4xbC0xMi42LDI5LjVjMjEuMSw3LjUsNDMuNSwxMi4yLDY2LjgsMTMuNlY0NzEuNHogTTQ2MiwxOTAuOGM1LDE1LjcsOC4yLDMyLjIsOS40LDQ5LjJoMzIuMSBjLTEuNC0yMS4yLTUuNC00MS43LTExLjctNjEuMUw0NjIsMTkwLjh6IE05Mi40LDM5N2MtMTItMTMuOS0yMi4zLTI5LjQtMzAuNC00Ni4xbC0yOS44LDExLjljOS45LDIwLjcsMjIuNiwzOS44LDM3LjYsNTYuOSBMOTIuNCwzOTd6IE0yNzIsNDAuNmMxOC44LDEuNCwzNi45LDUuMiw1NC4xLDExLjFsMTIuNi0yOS41QzMxNy43LDE0LjcsMjk1LjMsMTAsMjcyLDguNVY0MC42eiBNMTkwLjgsNTAgYzE1LjctNSwzMi4yLTguMiw0OS4yLTkuNFY4LjVjLTIxLjIsMS40LTQxLjcsNS40LTYxLjEsMTEuN0wxOTAuOCw1MHogTTQ0Mi4zLDkyLjNMNDE5LjYsMTE1YzEyLDEzLjksMjIuMywyOS40LDMwLjUsNDYuMSBsMjkuOC0xMS45QzQ3MCwxMjguNSw0NTcuMywxMDkuNCw0NDIuMyw5Mi4zeiBNMzk3LDkyLjRsMjIuNy0yMi43Yy0xNS42LTEzLjctMzIuOC0yNS41LTUxLjUtMzQuOWwtMTIuNiwyOS41IEMzNzAuNCw3Mi4xLDM4NC40LDgxLjUsMzk3LDkyLjR6J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgT1BBQ0lUWV9BTklNQVRFID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEFOSU1BVElPTl9CQVNFKSwge30sIHtcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiAnb3BhY2l0eSdcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBkb3QgPSB7XG4gICAgICAgICAgdGFnOiAnY2lyY2xlJyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgRklMTCksIHt9LCB7XG4gICAgICAgICAgICBjeDogJzI1NicsXG4gICAgICAgICAgICBjeTogJzM2NCcsXG4gICAgICAgICAgICByOiAnMjgnXG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgIH07XG4gICAgICAgIGlmICghcmVkdWNlTW90aW9uKSB7XG4gICAgICAgICAgZG90LmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgICAgdGFnOiAnYW5pbWF0ZScsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgQU5JTUFUSU9OX0JBU0UpLCB7fSwge1xuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lOiAncicsXG4gICAgICAgICAgICAgIHZhbHVlczogJzI4OzE0OzI4OzI4OzE0OzI4OydcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgdGFnOiAnYW5pbWF0ZScsXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgT1BBQ0lUWV9BTklNQVRFKSwge30sIHtcbiAgICAgICAgICAgICAgdmFsdWVzOiAnMTswOzE7MTswOzE7J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBnQ2hpbGRyZW4ucHVzaChkb3QpO1xuICAgICAgICBnQ2hpbGRyZW4ucHVzaCh7XG4gICAgICAgICAgdGFnOiAncGF0aCcsXG4gICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIEZJTEwpLCB7fSwge1xuICAgICAgICAgICAgb3BhY2l0eTogJzEnLFxuICAgICAgICAgICAgZDogJ00yNjMuNywzMTJoLTE2Yy02LjYsMC0xMi01LjQtMTItMTJjMC03MSw3Ny40LTYzLjksNzcuNC0xMDcuOGMwLTIwLTE3LjgtNDAuMi01Ny40LTQwLjJjLTI5LjEsMC00NC4zLDkuNi01OS4yLDI4LjcgYy0zLjksNS0xMS4xLDYtMTYuMiwyLjRsLTEzLjEtOS4yYy01LjYtMy45LTYuOS0xMS44LTIuNi0xNy4yYzIxLjItMjcuMiw0Ni40LTQ0LjcsOTEuMi00NC43YzUyLjMsMCw5Ny40LDI5LjgsOTcuNCw4MC4yIGMwLDY3LjYtNzcuNCw2My41LTc3LjQsMTA3LjhDMjc1LjcsMzA2LjYsMjcwLjMsMzEyLDI2My43LDMxMnonXG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2hpbGRyZW46IHJlZHVjZU1vdGlvbiA/IFtdIDogW3tcbiAgICAgICAgICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIE9QQUNJVFlfQU5JTUFURSksIHt9LCB7XG4gICAgICAgICAgICAgIHZhbHVlczogJzE7MDswOzA7MDsxOydcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfV1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghcmVkdWNlTW90aW9uKSB7XG4gICAgICAgICAgLy8gRXhjbGFtYXRpb25cbiAgICAgICAgICBnQ2hpbGRyZW4ucHVzaCh7XG4gICAgICAgICAgICB0YWc6ICdwYXRoJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBGSUxMKSwge30sIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogJzAnLFxuICAgICAgICAgICAgICBkOiAnTTIzMi41LDEzNC41bDcsMTY4YzAuMyw2LjQsNS42LDExLjUsMTIsMTEuNWg5YzYuNCwwLDExLjctNS4xLDEyLTExLjVsNy0xNjhjMC4zLTYuOC01LjItMTIuNS0xMi0xMi41aC0yMyBDMjM3LjcsMTIyLDIzMi4yLDEyNy43LDIzMi41LDEzNC41eidcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgICAgICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgT1BBQ0lUWV9BTklNQVRFKSwge30sIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXM6ICcwOzA7MTsxOzA7MDsnXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGFnOiAnZycsXG4gICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgICAgY2xhc3M6ICdtaXNzaW5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hpbGRyZW46IGdDaGlsZHJlblxuICAgICAgICB9O1xuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIFN2Z1N5bWJvbHMgPSB7XG4gICAgaG9va3M6IGZ1bmN0aW9uIGhvb2tzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFyc2VOb2RlQXR0cmlidXRlczogZnVuY3Rpb24gcGFyc2VOb2RlQXR0cmlidXRlcyhhY2N1bXVsYXRvciwgbm9kZSkge1xuICAgICAgICAgIHZhciBzeW1ib2xEYXRhID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtc3ltYm9sJyk7XG4gICAgICAgICAgdmFyIHN5bWJvbCA9IHN5bWJvbERhdGEgPT09IG51bGwgPyBmYWxzZSA6IHN5bWJvbERhdGEgPT09ICcnID8gdHJ1ZSA6IHN5bWJvbERhdGE7XG4gICAgICAgICAgYWNjdW11bGF0b3JbJ3N5bWJvbCddID0gc3ltYm9sO1xuICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHBsdWdpbnMgPSBbSW5qZWN0Q1NTLCBSZXBsYWNlRWxlbWVudHMsIExheWVycywgTGF5ZXJzQ291bnRlciwgTGF5ZXJzVGV4dCwgUHNldWRvRWxlbWVudHMsIE11dGF0aW9uT2JzZXJ2ZXIkMSwgUG93ZXJUcmFuc2Zvcm1zLCBNYXNrcywgTWlzc2luZ0ljb25JbmRpY2F0b3IsIFN2Z1N5bWJvbHNdO1xuXG4gIHJlZ2lzdGVyUGx1Z2lucyhwbHVnaW5zLCB7XG4gICAgbWl4b3V0c1RvOiBhcGlcbiAgfSk7XG4gIGJ1bmtlcihib290c3RyYXApO1xuXG59KCkpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1bmRsZXMvdGFibGVyL1wiOyIsImltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZSc7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3dlYmZvbnRzL2ZhLXJlZ3VsYXItNDAwLndvZmYyJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvd2ViZm9udHMvZmEtc29saWQtOTAwLndvZmYyJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvd2ViZm9udHMvZmEtYnJhbmRzLTQwMC53b2ZmMic7XG5cbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvc2Nzcy9mb250YXdlc29tZS5zY3NzJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvc2Nzcy9zb2xpZC5zY3NzJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvc2Nzcy9icmFuZHMuc2Nzcyc7XG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL3Njc3MvcmVndWxhci5zY3NzJztcbiJdLCJuYW1lcyI6WyJmb250YXdlc29tZSJdLCJzb3VyY2VSb290IjoiIn0=