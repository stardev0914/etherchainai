(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    692502: (e) => {
      "use strict";
      e.s({
        __assign: () => r,
        __asyncDelegator: () => m,
        __asyncGenerator: () => b,
        __asyncValues: () => v,
        __await: () => y,
        __awaiter: () => c,
        __classPrivateFieldGet: () => I,
        __classPrivateFieldSet: () => _,
        __createBinding: () => h,
        __decorate: () => n,
        __exportStar: () => u,
        __extends: () => i,
        __generator: () => l,
        __importDefault: () => x,
        __importStar: () => E,
        __makeTemplateObject: () => w,
        __metadata: () => a,
        __param: () => o,
        __read: () => f,
        __rest: () => s,
        __spread: () => p,
        __spreadArrays: () => g,
        __values: () => d,
      });
      var t = function (e, i) {
        return (t =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
          })(e, i);
      };
      function i(e, i) {
        function r() {
          this.constructor = e;
        }
        t(e, i),
          (e.prototype =
            null === i
              ? Object.create(i)
              : ((r.prototype = i.prototype), new r()));
      }
      var r = function () {
        return (r =
          Object.assign ||
          function (e) {
            for (var t, i = 1, r = arguments.length; i < r; i++)
              for (var s in (t = arguments[i]))
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e;
          }).apply(this, arguments);
      };
      function s(e, t) {
        var i = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (i[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var s = 0, r = Object.getOwnPropertySymbols(e);
            s < r.length;
            s++
          )
            0 > t.indexOf(r[s]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[s]) &&
              (i[r[s]] = e[r[s]]);
        return i;
      }
      function n(e, t, i, r) {
        var s,
          n = arguments.length,
          o =
            n < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          o = Reflect.decorate(e, t, i, r);
        else
          for (var a = e.length - 1; a >= 0; a--)
            (s = e[a]) &&
              (o = (n < 3 ? s(o) : n > 3 ? s(t, i, o) : s(t, i)) || o);
        return n > 3 && o && Object.defineProperty(t, i, o), o;
      }
      function o(e, t) {
        return function (i, r) {
          t(i, r, e);
        };
      }
      function a(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(e, t);
      }
      function c(e, t, i, r) {
        return new (i || (i = Promise))(function (s, n) {
          function o(e) {
            try {
              c(r.next(e));
            } catch (e) {
              n(e);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              n(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? s(e.value)
              : ((t = e.value) instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })
                ).then(o, a);
          }
          c((r = r.apply(e, t || [])).next());
        });
      }
      function l(e, t) {
        var i,
          r,
          s,
          n,
          o = {
            label: 0,
            sent: function () {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (n = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (n[Symbol.iterator] = function () {
              return this;
            }),
          n
        );
        function a(n) {
          return function (a) {
            var c = [n, a];
            if (i) throw TypeError("Generator is already executing.");
            for (; o; )
              try {
                if (
                  ((i = 1),
                  r &&
                    (s =
                      2 & c[0]
                        ? r.return
                        : c[0]
                        ? r.throw || ((s = r.return) && s.call(r), 0)
                        : r.next) &&
                    !(s = s.call(r, c[1])).done)
                )
                  return s;
                switch (((r = 0), s && (c = [2 & c[0], s.value]), c[0])) {
                  case 0:
                  case 1:
                    s = c;
                    break;
                  case 4:
                    return o.label++, { value: c[1], done: !1 };
                  case 5:
                    o.label++, (r = c[1]), (c = [0]);
                    continue;
                  case 7:
                    (c = o.ops.pop()), o.trys.pop();
                    continue;
                  default:
                    if (
                      !(s = (s = o.trys).length > 0 && s[s.length - 1]) &&
                      (6 === c[0] || 2 === c[0])
                    ) {
                      o = 0;
                      continue;
                    }
                    if (3 === c[0] && (!s || (c[1] > s[0] && c[1] < s[3]))) {
                      o.label = c[1];
                      break;
                    }
                    if (6 === c[0] && o.label < s[1]) {
                      (o.label = s[1]), (s = c);
                      break;
                    }
                    if (s && o.label < s[2]) {
                      (o.label = s[2]), o.ops.push(c);
                      break;
                    }
                    s[2] && o.ops.pop(), o.trys.pop();
                    continue;
                }
                c = t.call(e, o);
              } catch (e) {
                (c = [6, e]), (r = 0);
              } finally {
                i = s = 0;
              }
            if (5 & c[0]) throw c[1];
            return { value: c[0] ? c[1] : void 0, done: !0 };
          };
        }
      }
      function h(e, t, i, r) {
        void 0 === r && (r = i), (e[r] = t[i]);
      }
      function u(e, t) {
        for (var i in e)
          "default" === i || t.hasOwnProperty(i) || (t[i] = e[i]);
      }
      function d(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          i = t && e[t],
          r = 0;
        if (i) return i.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function f(e, t) {
        var i = "function" == typeof Symbol && e[Symbol.iterator];
        if (!i) return e;
        var r,
          s,
          n = i.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = n.next()).done; )
            o.push(r.value);
        } catch (e) {
          s = { error: e };
        } finally {
          try {
            r && !r.done && (i = n.return) && i.call(n);
          } finally {
            if (s) throw s.error;
          }
        }
        return o;
      }
      function p() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(f(arguments[t]));
        return e;
      }
      function g() {
        for (var e = 0, t = 0, i = arguments.length; t < i; t++)
          e += arguments[t].length;
        for (var r = Array(e), s = 0, t = 0; t < i; t++)
          for (var n = arguments[t], o = 0, a = n.length; o < a; o++, s++)
            r[s] = n[o];
        return r;
      }
      function y(e) {
        return this instanceof y ? ((this.v = e), this) : new y(e);
      }
      function b(e, t, i) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var r,
          s = i.apply(e, t || []),
          n = [];
        return (
          (r = {}),
          o("next"),
          o("throw"),
          o("return"),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function o(e) {
          s[e] &&
            (r[e] = function (t) {
              return new Promise(function (i, r) {
                n.push([e, t, i, r]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            var i;
            (i = s[e](t)).value instanceof y
              ? Promise.resolve(i.value.v).then(c, l)
              : h(n[0][2], i);
          } catch (e) {
            h(n[0][3], e);
          }
        }
        function c(e) {
          a("next", e);
        }
        function l(e) {
          a("throw", e);
        }
        function h(e, t) {
          e(t), n.shift(), n.length && a(n[0][0], n[0][1]);
        }
      }
      function m(e) {
        var t, i;
        return (
          (t = {}),
          r("next"),
          r("throw", function (e) {
            throw e;
          }),
          r("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function r(r, s) {
          t[r] = e[r]
            ? function (t) {
                return (i = !i)
                  ? { value: y(e[r](t)), done: "return" === r }
                  : s
                  ? s(t)
                  : t;
              }
            : s;
        }
      }
      function v(e) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var t,
          i = e[Symbol.asyncIterator];
        return i
          ? i.call(e)
          : ((e = d(e)),
            (t = {}),
            r("next"),
            r("throw"),
            r("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function r(i) {
          t[i] =
            e[i] &&
            function (t) {
              return new Promise(function (r, s) {
                var n, o, a;
                (n = r),
                  (o = s),
                  (a = (t = e[i](t)).done),
                  Promise.resolve(t.value).then(function (e) {
                    n({ value: e, done: a });
                  }, o);
              });
            };
        }
      }
      function w(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function E(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return (t.default = e), t;
      }
      function x(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function I(e, t) {
        if (!t.has(e))
          throw TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function _(e, t, i) {
        if (!t.has(e))
          throw TypeError("attempted to set private field on non-instance");
        return t.set(e, i), i;
      }
    },
    299443: (e) => {
      "use strict";
      var { m: t, e: i } = e;
      Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.delay = void 0),
        (i.delay = function (e) {
          return new Promise((t) => {
            setTimeout(() => {
              t(!0);
            }, e);
          });
        });
    },
    221843: (e) => {
      "use strict";
      var { m: t, e: i } = e;
      Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.ONE_THOUSAND = i.ONE_HUNDRED = void 0),
        (i.ONE_HUNDRED = 100),
        (i.ONE_THOUSAND = 1e3);
    },
    773410: (e) => {
      "use strict";
      var { m: t, e: i } = e;
      Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.ONE_YEAR =
          i.FOUR_WEEKS =
          i.THREE_WEEKS =
          i.TWO_WEEKS =
          i.ONE_WEEK =
          i.THIRTY_DAYS =
          i.SEVEN_DAYS =
          i.FIVE_DAYS =
          i.THREE_DAYS =
          i.ONE_DAY =
          i.TWENTY_FOUR_HOURS =
          i.TWELVE_HOURS =
          i.SIX_HOURS =
          i.THREE_HOURS =
          i.ONE_HOUR =
          i.SIXTY_MINUTES =
          i.THIRTY_MINUTES =
          i.TEN_MINUTES =
          i.FIVE_MINUTES =
          i.ONE_MINUTE =
          i.SIXTY_SECONDS =
          i.THIRTY_SECONDS =
          i.TEN_SECONDS =
          i.FIVE_SECONDS =
          i.ONE_SECOND =
            void 0),
        (i.ONE_SECOND = 1),
        (i.FIVE_SECONDS = 5),
        (i.TEN_SECONDS = 10),
        (i.THIRTY_SECONDS = 30),
        (i.SIXTY_SECONDS = 60),
        (i.ONE_MINUTE = i.SIXTY_SECONDS),
        (i.FIVE_MINUTES = 5 * i.ONE_MINUTE),
        (i.TEN_MINUTES = 10 * i.ONE_MINUTE),
        (i.THIRTY_MINUTES = 30 * i.ONE_MINUTE),
        (i.SIXTY_MINUTES = 60 * i.ONE_MINUTE),
        (i.ONE_HOUR = i.SIXTY_MINUTES),
        (i.THREE_HOURS = 3 * i.ONE_HOUR),
        (i.SIX_HOURS = 6 * i.ONE_HOUR),
        (i.TWELVE_HOURS = 12 * i.ONE_HOUR),
        (i.TWENTY_FOUR_HOURS = 24 * i.ONE_HOUR),
        (i.ONE_DAY = i.TWENTY_FOUR_HOURS),
        (i.THREE_DAYS = 3 * i.ONE_DAY),
        (i.FIVE_DAYS = 5 * i.ONE_DAY),
        (i.SEVEN_DAYS = 7 * i.ONE_DAY),
        (i.THIRTY_DAYS = 30 * i.ONE_DAY),
        (i.ONE_WEEK = i.SEVEN_DAYS),
        (i.TWO_WEEKS = 2 * i.ONE_WEEK),
        (i.THREE_WEEKS = 3 * i.ONE_WEEK),
        (i.FOUR_WEEKS = 4 * i.ONE_WEEK),
        (i.ONE_YEAR = 365 * i.ONE_DAY);
    },
    229063: (e) => {
      "use strict";
      var { m: t, e: i } = e;
      {
        Object.defineProperty(i, "__esModule", { value: !0 });
        let t = e.r(692502);
        t.__exportStar(e.r(221843), i), t.__exportStar(e.r(773410), i);
      }
    },
    306345: (e) => {
      "use strict";
      var { m: t, e: i } = e;
      {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.fromMiliseconds = i.toMiliseconds = void 0);
        let t = e.r(229063);
        (i.toMiliseconds = function (e) {
          return e * t.ONE_THOUSAND;
        }),
          (i.fromMiliseconds = function (e) {
            return Math.floor(e / t.ONE_THOUSAND);
          });
      }
    },
    595029: (e) => {
      "use strict";
      var { m: t, e: i } = e;
      {
        Object.defineProperty(i, "__esModule", { value: !0 });
        let t = e.r(692502);
        t.__exportStar(e.r(299443), i), t.__exportStar(e.r(306345), i);
      }
    },
    364678: (e) => {
      "use strict";
      var { m: t, e: i } = e;
      {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.Watch = void 0);
        class e {
          start(e) {
            if (this.timestamps.has(e))
              throw Error("Watch already started for label: ".concat(e));
            this.timestamps.set(e, { started: Date.now() });
          }
          stop(e) {
            let t = this.get(e);
            if (void 0 !== t.elapsed)
              throw Error("Watch already stopped for label: ".concat(e));
            let i = Date.now() - t.started;
            this.timestamps.set(e, { started: t.started, elapsed: i });
          }
          get(e) {
            let t = this.timestamps.get(e);
            if (void 0 === t)
              throw Error("No timestamp found for label: ".concat(e));
            return t;
          }
          elapsed(e) {
            let t = this.get(e);
            return t.elapsed || Date.now() - t.started;
          }
          constructor() {
            this.timestamps = new Map();
          }
        }
        (i.Watch = e), (i.default = e);
      }
    },
    611479: (e) => {
      "use strict";
      var { m: t, e: i } = e;
      Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.IWatch = void 0),
        (i.IWatch = class {});
    },
    634334: (e) => {
      "use strict";
      var { m: t, e: i } = e;
      Object.defineProperty(i, "__esModule", { value: !0 }),
        e.r(692502).__exportStar(e.r(611479), i);
    },
    100288: (e) => {
      "use strict";
      var { m: t, e: i } = e;
      {
        Object.defineProperty(i, "__esModule", { value: !0 });
        let t = e.r(692502);
        t.__exportStar(e.r(595029), i),
          t.__exportStar(e.r(364678), i),
          t.__exportStar(e.r(634334), i),
          t.__exportStar(e.r(229063), i);
      }
    },
    995330: (e) => {
      "use strict";
      var { m: t, e: i } = e;
      function r(e) {
        let t;
        return (
          "undefined" != typeof window &&
            void 0 !== window[e] &&
            (t = window[e]),
          t
        );
      }
      function s(e) {
        let t = r(e);
        if (!t) throw Error("".concat(e, " is not defined in Window"));
        return t;
      }
      Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.getLocalStorage =
          i.getLocalStorageOrThrow =
          i.getCrypto =
          i.getCryptoOrThrow =
          i.getLocation =
          i.getLocationOrThrow =
          i.getNavigator =
          i.getNavigatorOrThrow =
          i.getDocument =
          i.getDocumentOrThrow =
          i.getFromWindowOrThrow =
          i.getFromWindow =
            void 0),
        (i.getFromWindow = r),
        (i.getFromWindowOrThrow = s),
        (i.getDocumentOrThrow = function () {
          return s("document");
        }),
        (i.getDocument = function () {
          return r("document");
        }),
        (i.getNavigatorOrThrow = function () {
          return s("navigator");
        }),
        (i.getNavigator = function () {
          return r("navigator");
        }),
        (i.getLocationOrThrow = function () {
          return s("location");
        }),
        (i.getLocation = function () {
          return r("location");
        }),
        (i.getCryptoOrThrow = function () {
          return s("crypto");
        }),
        (i.getCrypto = function () {
          return r("crypto");
        }),
        (i.getLocalStorageOrThrow = function () {
          return s("localStorage");
        }),
        (i.getLocalStorage = function () {
          return r("localStorage");
        });
    },
    668021: (e) => {
      "use strict";
      var { m: t, e: i } = e;
      {
        Object.defineProperty(i, "__esModule", { value: !0 }),
          (i.getWindowMetadata = void 0);
        let t = e.r(995330);
        i.getWindowMetadata = function () {
          let e, i, r;
          try {
            (e = t.getDocumentOrThrow()), (i = t.getLocationOrThrow());
          } catch (e) {
            return null;
          }
          function s() {
            for (var t = arguments.length, i = Array(t), r = 0; r < t; r++)
              i[r] = arguments[r];
            let s = e.getElementsByTagName("meta");
            for (let e = 0; e < s.length; e++) {
              let t = s[e],
                r = ["itemprop", "property", "name"]
                  .map((e) => t.getAttribute(e))
                  .filter((e) => !!e && i.includes(e));
              if (r.length && r) {
                let e = t.getAttribute("content");
                if (e) return e;
              }
            }
            return "";
          }
          let n =
              ((r = s("name", "og:site_name", "og:title", "twitter:title")) ||
                (r = e.title),
              r),
            o = s(
              "description",
              "og:description",
              "twitter:description",
              "keywords"
            ),
            a = i.origin;
          return {
            description: o,
            url: a,
            icons: (function () {
              let t = e.getElementsByTagName("link"),
                r = [];
              for (let e = 0; e < t.length; e++) {
                let s = t[e],
                  n = s.getAttribute("rel");
                if (n && n.toLowerCase().indexOf("icon") > -1) {
                  let e = s.getAttribute("href");
                  if (e)
                    if (
                      -1 === e.toLowerCase().indexOf("https:") &&
                      -1 === e.toLowerCase().indexOf("http:") &&
                      0 !== e.indexOf("//")
                    ) {
                      let t = i.protocol + "//" + i.host;
                      if (0 === e.indexOf("/")) t += e;
                      else {
                        let r = i.pathname.split("/");
                        r.pop(), (t += r.join("/") + "/" + e);
                      }
                      r.push(t);
                    } else if (0 === e.indexOf("//")) {
                      let t = i.protocol + e;
                      r.push(t);
                    } else r.push(e);
                }
              }
              return r;
            })(),
            name: n,
          };
        };
      }
    },
    417418: (e) => {
      var { m: t, e: i } = e;
      function r(e) {
        return (0x100000000 + e).toString(16).substring(1);
      }
      t.exports = {
        normalizeInput: function (e) {
          let t;
          if (e instanceof Uint8Array) t = e;
          else if ("string" == typeof e) t = new TextEncoder().encode(e);
          else throw Error("Input must be an string, Buffer or Uint8Array");
          return t;
        },
        toHex: function (e) {
          return Array.prototype.map
            .call(e, function (e) {
              return (e < 16 ? "0" : "") + e.toString(16);
            })
            .join("");
        },
        debugPrint: function (e, t, i) {
          let s = "\n" + e + " = ";
          for (let n = 0; n < t.length; n += 2) {
            if (32 === i)
              (s += r(t[n]).toUpperCase()),
                (s += " "),
                (s += r(t[n + 1]).toUpperCase());
            else if (64 === i)
              (s += r(t[n + 1]).toUpperCase()), (s += r(t[n]).toUpperCase());
            else throw Error("Invalid size " + i);
            n % 6 == 4
              ? (s += "\n" + Array(e.length + 4).join(" "))
              : n < t.length - 2 && (s += " ");
          }
          console.log(s);
        },
        testSpeed: function (e, t, i) {
          let r = new Date().getTime(),
            s = new Uint8Array(t);
          for (let e = 0; e < t; e++) s[e] = e % 256;
          let n = new Date().getTime();
          console.log("Generated random input in " + (n - r) + "ms"), (r = n);
          for (let n = 0; n < i; n++) {
            let i = e(s),
              n = new Date().getTime(),
              o = n - r;
            (r = n),
              console.log(
                "Hashed in " + o + "ms: " + i.substring(0, 20) + "..."
              ),
              console.log(
                Math.round((t / 1048576 / (o / 1e3)) * 100) / 100 +
                  " MB PER SECOND"
              );
          }
        },
      };
    },
    246760: (e) => {
      var { m: t, e: i } = e;
      {
        let i = e.r(417418);
        function r(e, t, i) {
          let r = e[t] + e[i],
            s = e[t + 1] + e[i + 1];
          r >= 0x100000000 && s++, (e[t] = r), (e[t + 1] = s);
        }
        function s(e, t, i, r) {
          let s = e[t] + i;
          i < 0 && (s += 0x100000000);
          let n = e[t + 1] + r;
          s >= 0x100000000 && n++, (e[t] = s), (e[t + 1] = n);
        }
        function n(e, t) {
          return e[t] ^ (e[t + 1] << 8) ^ (e[t + 2] << 16) ^ (e[t + 3] << 24);
        }
        function o(e, t, i, n, o, a) {
          let c = g[o],
            l = g[o + 1],
            h = g[a],
            u = g[a + 1];
          r(p, e, t), s(p, e, c, l);
          let d = p[n] ^ p[e],
            f = p[n + 1] ^ p[e + 1];
          (p[n] = f),
            (p[n + 1] = d),
            r(p, i, n),
            (d = p[t] ^ p[i]),
            (f = p[t + 1] ^ p[i + 1]),
            (p[t] = (d >>> 24) ^ (f << 8)),
            (p[t + 1] = (f >>> 24) ^ (d << 8)),
            r(p, e, t),
            s(p, e, h, u),
            (d = p[n] ^ p[e]),
            (f = p[n + 1] ^ p[e + 1]),
            (p[n] = (d >>> 16) ^ (f << 16)),
            (p[n + 1] = (f >>> 16) ^ (d << 16)),
            r(p, i, n),
            (d = p[t] ^ p[i]),
            (f = p[t + 1] ^ p[i + 1]),
            (p[t] = (f >>> 31) ^ (d << 1)),
            (p[t + 1] = (d >>> 31) ^ (f << 1));
        }
        let d = new Uint32Array([
            0xf3bcc908, 0x6a09e667, 0x84caa73b, 0xbb67ae85, 0xfe94f82b,
            0x3c6ef372, 0x5f1d36f1, 0xa54ff53a, 0xade682d1, 0x510e527f,
            0x2b3e6c1f, 0x9b05688c, 0xfb41bd6b, 0x1f83d9ab, 0x137e2179,
            0x5be0cd19,
          ]),
          f = new Uint8Array(
            [
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4,
              8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15,
              13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5,
              10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3,
              13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5,
              1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12,
              1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12,
              2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3,
              12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
              14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3,
            ].map(function (e) {
              return 2 * e;
            })
          ),
          p = new Uint32Array(32),
          g = new Uint32Array(32);
        function a(e, t) {
          let i = 0;
          for (i = 0; i < 16; i++) (p[i] = e.h[i]), (p[i + 16] = d[i]);
          for (
            p[24] = p[24] ^ e.t,
              p[25] = p[25] ^ (e.t / 0x100000000),
              t && ((p[28] = ~p[28]), (p[29] = ~p[29])),
              i = 0;
            i < 32;
            i++
          )
            g[i] = n(e.b, 4 * i);
          for (i = 0; i < 12; i++)
            o(0, 8, 16, 24, f[16 * i + 0], f[16 * i + 1]),
              o(2, 10, 18, 26, f[16 * i + 2], f[16 * i + 3]),
              o(4, 12, 20, 28, f[16 * i + 4], f[16 * i + 5]),
              o(6, 14, 22, 30, f[16 * i + 6], f[16 * i + 7]),
              o(0, 10, 20, 30, f[16 * i + 8], f[16 * i + 9]),
              o(2, 12, 22, 24, f[16 * i + 10], f[16 * i + 11]),
              o(4, 14, 16, 26, f[16 * i + 12], f[16 * i + 13]),
              o(6, 8, 18, 28, f[16 * i + 14], f[16 * i + 15]);
          for (i = 0; i < 16; i++) e.h[i] = e.h[i] ^ p[i] ^ p[i + 16];
        }
        let y = new Uint8Array([
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ]);
        function c(e, t, i, r) {
          if (0 === e || e > 64)
            throw Error("Illegal output length, expected 0 < length <= 64");
          if (t && t.length > 64)
            throw Error(
              "Illegal key, expected Uint8Array with 0 < length <= 64"
            );
          if (i && 16 !== i.length)
            throw Error("Illegal salt, expected Uint8Array with length is 16");
          if (r && 16 !== r.length)
            throw Error(
              "Illegal personal, expected Uint8Array with length is 16"
            );
          let s = {
            b: new Uint8Array(128),
            h: new Uint32Array(16),
            t: 0,
            c: 0,
            outlen: e,
          };
          y.fill(0),
            (y[0] = e),
            t && (y[1] = t.length),
            (y[2] = 1),
            (y[3] = 1),
            i && y.set(i, 32),
            r && y.set(r, 48);
          for (let e = 0; e < 16; e++) s.h[e] = d[e] ^ n(y, 4 * e);
          return t && (l(s, t), (s.c = 128)), s;
        }
        function l(e, t) {
          for (let i = 0; i < t.length; i++)
            128 === e.c && ((e.t += e.c), a(e, !1), (e.c = 0)),
              (e.b[e.c++] = t[i]);
        }
        function h(e) {
          for (e.t += e.c; e.c < 128; ) e.b[e.c++] = 0;
          a(e, !0);
          let t = new Uint8Array(e.outlen);
          for (let i = 0; i < e.outlen; i++)
            t[i] = e.h[i >> 2] >> (8 * (3 & i));
          return t;
        }
        function u(e, t, r, s, n) {
          (r = r || 64),
            (e = i.normalizeInput(e)),
            s && (s = i.normalizeInput(s)),
            n && (n = i.normalizeInput(n));
          let o = c(r, t, s, n);
          return l(o, e), h(o);
        }
        t.exports = {
          blake2b: u,
          blake2bHex: function (e, t, r, s, n) {
            let o = u(e, t, r, s, n);
            return i.toHex(o);
          },
          blake2bInit: c,
          blake2bUpdate: l,
          blake2bFinal: h,
        };
      }
    },
    554923: (e) => {
      var { m: t, e: i } = e;
      {
        let i = e.r(417418);
        function r(e, t, i, r, n, o) {
          (d[e] = d[e] + d[t] + n),
            (d[r] = s(d[r] ^ d[e], 16)),
            (d[i] = d[i] + d[r]),
            (d[t] = s(d[t] ^ d[i], 12)),
            (d[e] = d[e] + d[t] + o),
            (d[r] = s(d[r] ^ d[e], 8)),
            (d[i] = d[i] + d[r]),
            (d[t] = s(d[t] ^ d[i], 7));
        }
        function s(e, t) {
          return (e >>> t) ^ (e << (32 - t));
        }
        let h = new Uint32Array([
            0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
            0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
          ]),
          u = new Uint8Array([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8,
            9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13,
            10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10,
            4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13,
            2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15,
            14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9,
            5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7,
            1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0,
          ]),
          d = new Uint32Array(16),
          f = new Uint32Array(16);
        function n(e, t) {
          let i = 0;
          for (i = 0; i < 8; i++) (d[i] = e.h[i]), (d[i + 8] = h[i]);
          for (
            d[12] ^= e.t,
              d[13] ^= e.t / 0x100000000,
              t && (d[14] = ~d[14]),
              i = 0;
            i < 16;
            i++
          ) {
            var s, n;
            f[i] =
              (s = e.b)[(n = 4 * i)] ^
              (s[n + 1] << 8) ^
              (s[n + 2] << 16) ^
              (s[n + 3] << 24);
          }
          for (i = 0; i < 10; i++)
            r(0, 4, 8, 12, f[u[16 * i + 0]], f[u[16 * i + 1]]),
              r(1, 5, 9, 13, f[u[16 * i + 2]], f[u[16 * i + 3]]),
              r(2, 6, 10, 14, f[u[16 * i + 4]], f[u[16 * i + 5]]),
              r(3, 7, 11, 15, f[u[16 * i + 6]], f[u[16 * i + 7]]),
              r(0, 5, 10, 15, f[u[16 * i + 8]], f[u[16 * i + 9]]),
              r(1, 6, 11, 12, f[u[16 * i + 10]], f[u[16 * i + 11]]),
              r(2, 7, 8, 13, f[u[16 * i + 12]], f[u[16 * i + 13]]),
              r(3, 4, 9, 14, f[u[16 * i + 14]], f[u[16 * i + 15]]);
          for (i = 0; i < 8; i++) e.h[i] ^= d[i] ^ d[i + 8];
        }
        function o(e, t) {
          if (!(e > 0 && e <= 32))
            throw Error("Incorrect output length, should be in [1, 32]");
          let i = t ? t.length : 0;
          if (t && !(i > 0 && i <= 32))
            throw Error("Incorrect key length, should be in [1, 32]");
          let r = {
            h: new Uint32Array(h),
            b: new Uint8Array(64),
            c: 0,
            t: 0,
            outlen: e,
          };
          return (
            (r.h[0] ^= 0x1010000 ^ (i << 8) ^ e),
            i > 0 && (a(r, t), (r.c = 64)),
            r
          );
        }
        function a(e, t) {
          for (let i = 0; i < t.length; i++)
            64 === e.c && ((e.t += e.c), n(e, !1), (e.c = 0)),
              (e.b[e.c++] = t[i]);
        }
        function c(e) {
          for (e.t += e.c; e.c < 64; ) e.b[e.c++] = 0;
          n(e, !0);
          let t = new Uint8Array(e.outlen);
          for (let i = 0; i < e.outlen; i++)
            t[i] = (e.h[i >> 2] >> (8 * (3 & i))) & 255;
          return t;
        }
        function l(e, t, r) {
          (r = r || 32), (e = i.normalizeInput(e));
          let s = o(r, t);
          return a(s, e), c(s);
        }
        t.exports = {
          blake2s: l,
          blake2sHex: function (e, t, r) {
            let s = l(e, t, r);
            return i.toHex(s);
          },
          blake2sInit: o,
          blake2sUpdate: a,
          blake2sFinal: c,
        };
      }
    },
    540441: (e) => {
      var { m: t, e: i } = e;
      {
        let i = e.r(246760),
          r = e.r(554923);
        t.exports = {
          blake2b: i.blake2b,
          blake2bHex: i.blake2bHex,
          blake2bInit: i.blake2bInit,
          blake2bUpdate: i.blake2bUpdate,
          blake2bFinal: i.blake2bFinal,
          blake2s: r.blake2s,
          blake2sHex: r.blake2sHex,
          blake2sInit: r.blake2sInit,
          blake2sUpdate: r.blake2sUpdate,
          blake2sFinal: r.blake2sFinal,
        };
      }
    },
    875199: (e) => {
      "use strict";
      var { m: t, e: i } = e;
      function r() {
        return (
          (null == globalThis ? void 0 : globalThis.crypto) ||
          (null == globalThis ? void 0 : globalThis.msCrypto) ||
          {}
        );
      }
      function s() {
        let e = r();
        return e.subtle || e.webkitSubtle;
      }
      Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.isBrowserCryptoAvailable =
          i.getSubtleCrypto =
          i.getBrowerCrypto =
            void 0),
        (i.getBrowerCrypto = r),
        (i.getSubtleCrypto = s),
        (i.isBrowserCryptoAvailable = function () {
          return !!r() && !!s();
        });
    },
    782739: (e) => {
      "use strict";
      var { m: t, e: i } = e,
        r = e.i(922271);
      function s() {
        return (
          "undefined" == typeof document &&
          "undefined" != typeof navigator &&
          "ReactNative" === navigator.product
        );
      }
      function n() {
        return (
          void 0 !== r.default &&
          void 0 !== r.default.versions &&
          void 0 !== r.default.versions.node
        );
      }
      Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.isBrowser = i.isNode = i.isReactNative = void 0),
        (i.isReactNative = s),
        (i.isNode = n),
        (i.isBrowser = function () {
          return !s() && !n();
        });
    },
    588149: (e) => {
      "use strict";
      var { m: t, e: i } = e;
      {
        Object.defineProperty(i, "__esModule", { value: !0 });
        let t = e.r(692502);
        t.__exportStar(e.r(875199), i), t.__exportStar(e.r(782739), i);
      }
    },
    416730: (e) => {
      "use strict";
      var { m: t, e: i } = e;
      t.exports = function () {
        throw Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
    124022: (e) => {
      var { m: t, e: i } = e,
        r =
          ("undefined" != typeof globalThis && globalThis) ||
          ("undefined" != typeof self && self) ||
          globalThis,
        s = (function () {
          function e() {
            (this.fetch = !1), (this.DOMException = r.DOMException);
          }
          return (e.prototype = r), new e();
        })();
      !(function (e) {
        !(function (t) {
          var i =
              (void 0 !== e && e) ||
              ("undefined" != typeof self && self) ||
              globalThis ||
              {},
            r = {
              searchParams: "URLSearchParams" in i,
              iterable: "Symbol" in i && "iterator" in Symbol,
              blob:
                "FileReader" in i &&
                "Blob" in i &&
                (function () {
                  try {
                    return new Blob(), !0;
                  } catch (e) {
                    return !1;
                  }
                })(),
              formData: "FormData" in i,
              arrayBuffer: "ArrayBuffer" in i,
            };
          if (r.arrayBuffer)
            var s = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]",
              ],
              n =
                ArrayBuffer.isView ||
                function (e) {
                  return e && s.indexOf(Object.prototype.toString.call(e)) > -1;
                };
          function o(e) {
            if (
              ("string" != typeof e && (e = String(e)),
              /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
            )
              throw TypeError(
                'Invalid character in header field name: "' + e + '"'
              );
            return e.toLowerCase();
          }
          function a(e) {
            return "string" != typeof e && (e = String(e)), e;
          }
          function c(e) {
            var t = {
              next: function () {
                var t = e.shift();
                return { done: void 0 === t, value: t };
              },
            };
            return (
              r.iterable &&
                (t[Symbol.iterator] = function () {
                  return t;
                }),
              t
            );
          }
          function l(e) {
            (this.map = {}),
              e instanceof l
                ? e.forEach(function (e, t) {
                    this.append(t, e);
                  }, this)
                : Array.isArray(e)
                ? e.forEach(function (e) {
                    if (2 != e.length)
                      throw TypeError(
                        "Headers constructor: expected name/value pair to be length 2, found" +
                          e.length
                      );
                    this.append(e[0], e[1]);
                  }, this)
                : e &&
                  Object.getOwnPropertyNames(e).forEach(function (t) {
                    this.append(t, e[t]);
                  }, this);
          }
          function h(e) {
            if (!e._noBody) {
              if (e.bodyUsed) return Promise.reject(TypeError("Already read"));
              e.bodyUsed = !0;
            }
          }
          function u(e) {
            return new Promise(function (t, i) {
              (e.onload = function () {
                t(e.result);
              }),
                (e.onerror = function () {
                  i(e.error);
                });
            });
          }
          function d(e) {
            var t = new FileReader(),
              i = u(t);
            return t.readAsArrayBuffer(e), i;
          }
          function f(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer;
          }
          function p() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (e) {
                if (((this.bodyUsed = this.bodyUsed), (this._bodyInit = e), e))
                  if ("string" == typeof e) this._bodyText = e;
                  else if (r.blob && Blob.prototype.isPrototypeOf(e))
                    this._bodyBlob = e;
                  else if (r.formData && FormData.prototype.isPrototypeOf(e))
                    this._bodyFormData = e;
                  else if (
                    r.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(e)
                  )
                    this._bodyText = e.toString();
                  else {
                    var t;
                    r.arrayBuffer &&
                    r.blob &&
                    (t = e) &&
                    DataView.prototype.isPrototypeOf(t)
                      ? ((this._bodyArrayBuffer = f(e.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : r.arrayBuffer &&
                        (ArrayBuffer.prototype.isPrototypeOf(e) || n(e))
                      ? (this._bodyArrayBuffer = f(e))
                      : (this._bodyText = e =
                          Object.prototype.toString.call(e));
                  }
                else (this._noBody = !0), (this._bodyText = "");
                !this.headers.get("content-type") &&
                  ("string" == typeof e
                    ? this.headers.set(
                        "content-type",
                        "text/plain;charset=UTF-8"
                      )
                    : this._bodyBlob && this._bodyBlob.type
                    ? this.headers.set("content-type", this._bodyBlob.type)
                    : r.searchParams &&
                      URLSearchParams.prototype.isPrototypeOf(e) &&
                      this.headers.set(
                        "content-type",
                        "application/x-www-form-urlencoded;charset=UTF-8"
                      ));
              }),
              r.blob &&
                (this.blob = function () {
                  var e = h(this);
                  if (e) return e;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (!this._bodyFormData)
                    return Promise.resolve(new Blob([this._bodyText]));
                  throw Error("could not read FormData body as blob");
                }),
              (this.arrayBuffer = function () {
                if (this._bodyArrayBuffer) {
                  var e = h(this);
                  return (
                    e ||
                    (ArrayBuffer.isView(this._bodyArrayBuffer)
                      ? Promise.resolve(
                          this._bodyArrayBuffer.buffer.slice(
                            this._bodyArrayBuffer.byteOffset,
                            this._bodyArrayBuffer.byteOffset +
                              this._bodyArrayBuffer.byteLength
                          )
                        )
                      : Promise.resolve(this._bodyArrayBuffer))
                  );
                }
                if (r.blob) return this.blob().then(d);
                throw Error("could not read as ArrayBuffer");
              }),
              (this.text = function () {
                var e,
                  t,
                  i,
                  r,
                  s,
                  n = h(this);
                if (n) return n;
                if (this._bodyBlob)
                  return (
                    (e = this._bodyBlob),
                    (i = u((t = new FileReader()))),
                    (s = (r = /charset=([A-Za-z0-9_-]+)/.exec(e.type))
                      ? r[1]
                      : "utf-8"),
                    t.readAsText(e, s),
                    i
                  );
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (e) {
                      for (
                        var t = new Uint8Array(e), i = Array(t.length), r = 0;
                        r < t.length;
                        r++
                      )
                        i[r] = String.fromCharCode(t[r]);
                      return i.join("");
                    })(this._bodyArrayBuffer)
                  );
                if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                throw Error("could not read FormData body as text");
              }),
              r.formData &&
                (this.formData = function () {
                  return this.text().then(b);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (l.prototype.append = function (e, t) {
            (e = o(e)), (t = a(t));
            var i = this.map[e];
            this.map[e] = i ? i + ", " + t : t;
          }),
            (l.prototype.delete = function (e) {
              delete this.map[o(e)];
            }),
            (l.prototype.get = function (e) {
              return (e = o(e)), this.has(e) ? this.map[e] : null;
            }),
            (l.prototype.has = function (e) {
              return this.map.hasOwnProperty(o(e));
            }),
            (l.prototype.set = function (e, t) {
              this.map[o(e)] = a(t);
            }),
            (l.prototype.forEach = function (e, t) {
              for (var i in this.map)
                this.map.hasOwnProperty(i) && e.call(t, this.map[i], i, this);
            }),
            (l.prototype.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, i) {
                  e.push(i);
                }),
                c(e)
              );
            }),
            (l.prototype.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                c(e)
              );
            }),
            (l.prototype.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, i) {
                  e.push([i, t]);
                }),
                c(e)
              );
            }),
            r.iterable && (l.prototype[Symbol.iterator] = l.prototype.entries);
          var g = [
            "CONNECT",
            "DELETE",
            "GET",
            "HEAD",
            "OPTIONS",
            "PATCH",
            "POST",
            "PUT",
            "TRACE",
          ];
          function y(e, t) {
            if (!(this instanceof y))
              throw TypeError(
                'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
              );
            var r,
              s,
              n = (t = t || {}).body;
            if (e instanceof y) {
              if (e.bodyUsed) throw TypeError("Already read");
              (this.url = e.url),
                (this.credentials = e.credentials),
                t.headers || (this.headers = new l(e.headers)),
                (this.method = e.method),
                (this.mode = e.mode),
                (this.signal = e.signal),
                n ||
                  null == e._bodyInit ||
                  ((n = e._bodyInit), (e.bodyUsed = !0));
            } else this.url = String(e);
            if (
              ((this.credentials =
                t.credentials || this.credentials || "same-origin"),
              (t.headers || !this.headers) && (this.headers = new l(t.headers)),
              (this.method =
                ((s = (r = t.method || this.method || "GET").toUpperCase()),
                g.indexOf(s) > -1 ? s : r)),
              (this.mode = t.mode || this.mode || null),
              (this.signal =
                t.signal ||
                this.signal ||
                (function () {
                  if ("AbortController" in i)
                    return new AbortController().signal;
                })()),
              (this.referrer = null),
              ("GET" === this.method || "HEAD" === this.method) && n)
            )
              throw TypeError("Body not allowed for GET or HEAD requests");
            if (
              (this._initBody(n),
              ("GET" === this.method || "HEAD" === this.method) &&
                ("no-store" === t.cache || "no-cache" === t.cache))
            ) {
              var o = /([?&])_=[^&]*/;
              o.test(this.url)
                ? (this.url = this.url.replace(
                    o,
                    "$1_=" + new Date().getTime()
                  ))
                : (this.url +=
                    (/\?/.test(this.url) ? "&" : "?") +
                    "_=" +
                    new Date().getTime());
            }
          }
          function b(e) {
            var t = new FormData();
            return (
              e
                .trim()
                .split("&")
                .forEach(function (e) {
                  if (e) {
                    var i = e.split("="),
                      r = i.shift().replace(/\+/g, " "),
                      s = i.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(s));
                  }
                }),
              t
            );
          }
          function m(e, t) {
            if (!(this instanceof m))
              throw TypeError(
                'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
              );
            if (
              (t || (t = {}),
              (this.type = "default"),
              (this.status = void 0 === t.status ? 200 : t.status),
              this.status < 200 || this.status > 599)
            )
              throw RangeError(
                "Failed to construct 'Response': The status provided (0) is outside the range [200, 599]."
              );
            (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText =
                void 0 === t.statusText ? "" : "" + t.statusText),
              (this.headers = new l(t.headers)),
              (this.url = t.url || ""),
              this._initBody(e);
          }
          (y.prototype.clone = function () {
            return new y(this, { body: this._bodyInit });
          }),
            p.call(y.prototype),
            p.call(m.prototype),
            (m.prototype.clone = function () {
              return new m(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new l(this.headers),
                url: this.url,
              });
            }),
            (m.error = function () {
              var e = new m(null, { status: 200, statusText: "" });
              return (e.ok = !1), (e.status = 0), (e.type = "error"), e;
            });
          var v = [301, 302, 303, 307, 308];
          (m.redirect = function (e, t) {
            if (-1 === v.indexOf(t)) throw RangeError("Invalid status code");
            return new m(null, { status: t, headers: { location: e } });
          }),
            (t.DOMException = i.DOMException);
          try {
            new t.DOMException();
          } catch (e) {
            (t.DOMException = function (e, t) {
              (this.message = e), (this.name = t);
              var i = Error(e);
              this.stack = i.stack;
            }),
              (t.DOMException.prototype = Object.create(Error.prototype)),
              (t.DOMException.prototype.constructor = t.DOMException);
          }
          function w(e, s) {
            return new Promise(function (n, c) {
              var h = new y(e, s);
              if (h.signal && h.signal.aborted)
                return c(new t.DOMException("Aborted", "AbortError"));
              var u = new XMLHttpRequest();
              function d() {
                u.abort();
              }
              if (
                ((u.onload = function () {
                  var e,
                    t,
                    i = {
                      statusText: u.statusText,
                      headers:
                        ((e = u.getAllResponseHeaders() || ""),
                        (t = new l()),
                        e
                          .replace(/\r?\n[\t ]+/g, " ")
                          .split("\r")
                          .map(function (e) {
                            return 0 === e.indexOf("\n")
                              ? e.substr(1, e.length)
                              : e;
                          })
                          .forEach(function (e) {
                            var i = e.split(":"),
                              r = i.shift().trim();
                            if (r) {
                              var s = i.join(":").trim();
                              try {
                                t.append(r, s);
                              } catch (e) {
                                console.warn("Response " + e.message);
                              }
                            }
                          }),
                        t),
                    };
                  0 === h.url.indexOf("file://") &&
                  (u.status < 200 || u.status > 599)
                    ? (i.status = 200)
                    : (i.status = u.status),
                    (i.url =
                      "responseURL" in u
                        ? u.responseURL
                        : i.headers.get("X-Request-URL"));
                  var r = "response" in u ? u.response : u.responseText;
                  setTimeout(function () {
                    n(new m(r, i));
                  }, 0);
                }),
                (u.onerror = function () {
                  setTimeout(function () {
                    c(TypeError("Network request failed"));
                  }, 0);
                }),
                (u.ontimeout = function () {
                  setTimeout(function () {
                    c(TypeError("Network request timed out"));
                  }, 0);
                }),
                (u.onabort = function () {
                  setTimeout(function () {
                    c(new t.DOMException("Aborted", "AbortError"));
                  }, 0);
                }),
                u.open(
                  h.method,
                  (function (e) {
                    try {
                      return "" === e && i.location.href ? i.location.href : e;
                    } catch (t) {
                      return e;
                    }
                  })(h.url),
                  !0
                ),
                "include" === h.credentials
                  ? (u.withCredentials = !0)
                  : "omit" === h.credentials && (u.withCredentials = !1),
                "responseType" in u &&
                  (r.blob
                    ? (u.responseType = "blob")
                    : r.arrayBuffer && (u.responseType = "arraybuffer")),
                s &&
                  "object" == typeof s.headers &&
                  !(
                    s.headers instanceof l ||
                    (i.Headers && s.headers instanceof i.Headers)
                  ))
              ) {
                var f = [];
                Object.getOwnPropertyNames(s.headers).forEach(function (e) {
                  f.push(o(e)), u.setRequestHeader(e, a(s.headers[e]));
                }),
                  h.headers.forEach(function (e, t) {
                    -1 === f.indexOf(t) && u.setRequestHeader(t, e);
                  });
              } else
                h.headers.forEach(function (e, t) {
                  u.setRequestHeader(t, e);
                });
              h.signal &&
                (h.signal.addEventListener("abort", d),
                (u.onreadystatechange = function () {
                  4 === u.readyState &&
                    h.signal.removeEventListener("abort", d);
                })),
                u.send(void 0 === h._bodyInit ? null : h._bodyInit);
            });
          }
          (w.polyfill = !0),
            i.fetch ||
              ((i.fetch = w),
              (i.Headers = l),
              (i.Request = y),
              (i.Response = m)),
            (t.Headers = l),
            (t.Request = y),
            (t.Response = m),
            (t.fetch = w),
            Object.defineProperty(t, "__esModule", { value: !0 });
        })({});
      })(s),
        (s.fetch.ponyfill = !0),
        delete s.fetch.polyfill;
      var n = r.fetch ? r : s;
      ((i = n.fetch).default = n.fetch),
        (i.fetch = n.fetch),
        (i.Headers = n.Headers),
        (i.Request = n.Request),
        (i.Response = n.Response),
        (t.exports = i);
    },
    983222: [
      (e) => {
        "use strict";
        let t;
        e.s({ SIWXUtil: () => gw }, 983222), e.s({ default: () => gn }, 105009);
        var i,
          r = e.i(109562),
          s = e.i(922271),
          n = e.i(425186),
          o = e.i(100288);
        class a {}
        class c extends a {
          constructor(e) {
            super();
          }
        }
        let l = o.FIVE_SECONDS,
          h = { pulse: "heartbeat_pulse" };
        class u extends c {
          static async init(e) {
            let t = new u(e);
            return await t.init(), t;
          }
          async init() {
            await this.initialize();
          }
          stop() {
            clearInterval(this.intervalRef);
          }
          on(e, t) {
            this.events.on(e, t);
          }
          once(e, t) {
            this.events.once(e, t);
          }
          off(e, t) {
            this.events.off(e, t);
          }
          removeListener(e, t) {
            this.events.removeListener(e, t);
          }
          async initialize() {
            this.intervalRef = setInterval(
              () => this.pulse(),
              (0, o.toMiliseconds)(this.interval)
            );
          }
          pulse() {
            this.events.emit(h.pulse);
          }
          constructor(e) {
            super(e),
              (this.events = new n.EventEmitter()),
              (this.interval = l),
              (this.interval = (null == e ? void 0 : e.interval) || l);
          }
        }
        let d =
            /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
          f =
            /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
          p = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
        function g(e, t) {
          var i;
          return "__proto__" === e ||
            ("constructor" === e &&
              t &&
              "object" == typeof t &&
              "prototype" in t)
            ? void ((i = e),
              console.warn(
                '[destr] Dropping "'.concat(
                  i,
                  '" key to prevent prototype pollution.'
                )
              ))
            : t;
        }
        function y(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if ("string" != typeof e) return e;
          if ('"' === e[0] && '"' === e[e.length - 1] && -1 === e.indexOf("\\"))
            return e.slice(1, -1);
          let i = e.trim();
          if (i.length <= 9)
            switch (i.toLowerCase()) {
              case "true":
                return !0;
              case "false":
                return !1;
              case "undefined":
                return;
              case "null":
                return null;
              case "nan":
                return NaN;
              case "infinity":
                return 1 / 0;
              case "-infinity":
                return -1 / 0;
            }
          if (!p.test(e)) {
            if (t.strict) throw SyntaxError("[destr] Invalid JSON");
            return e;
          }
          try {
            if (d.test(e) || f.test(e)) {
              if (t.strict) throw Error("[destr] Possible prototype pollution");
              return JSON.parse(e, g);
            }
            return JSON.parse(e);
          } catch (i) {
            if (t.strict) throw i;
            return e;
          }
        }
        function b(e) {
          for (
            var t, i = arguments.length, r = Array(i > 1 ? i - 1 : 0), s = 1;
            s < i;
            s++
          )
            r[s - 1] = arguments[s];
          try {
            return (t = e(...r)) && "function" == typeof t.then
              ? t
              : Promise.resolve(t);
          } catch (e) {
            return Promise.reject(e);
          }
        }
        function m(e) {
          if (
            (function (e) {
              let t = typeof e;
              return null === e || ("object" !== t && "function" !== t);
            })(e)
          )
            return String(e);
          if (
            (function (e) {
              let t = Object.getPrototypeOf(e);
              return !t || t.isPrototypeOf(Object);
            })(e) ||
            Array.isArray(e)
          )
            return JSON.stringify(e);
          if ("function" == typeof e.toJSON) return m(e.toJSON());
          throw Error("[unstorage] Cannot stringify value!");
        }
        let v = "base64:";
        function w(e) {
          var t;
          return (
            (e &&
              (null == (t = e.split("?")[0])
                ? void 0
                : t
                    .replace(/[/\\]/g, ":")
                    .replace(/:+/g, ":")
                    .replace(/^:|:$/g, ""))) ||
            ""
          );
        }
        function E(e) {
          return (e = w(e)) ? e + ":" : "";
        }
        function x(e, t, i) {
          return e.watch ? e.watch((e, r) => t(e, i + r)) : () => {};
        }
        async function I(e) {
          "function" == typeof e.dispose && (await b(e.dispose));
        }
        function _(e) {
          return new Promise((t, i) => {
            (e.oncomplete = e.onsuccess = () => t(e.result)),
              (e.onabort = e.onerror = () => i(e.error));
          });
        }
        function D(e, t) {
          let i;
          return (r, s) =>
            (() => {
              if (i) return i;
              let r = indexedDB.open(e);
              return (
                (r.onupgradeneeded = () => r.result.createObjectStore(t)),
                (i = _(r)).then(
                  (e) => {
                    e.onclose = () => (i = void 0);
                  },
                  () => {}
                ),
                i
              );
            })().then((e) => s(e.transaction(t, r).objectStore(t)));
        }
        function S() {
          return t || (t = D("keyval-store", "keyval")), t;
        }
        function P(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : S();
          return t("readonly", (t) => _(t.get(e)));
        }
        var A = e.i(422066),
          O = function () {
            let e,
              t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              i = t.base && t.base.length > 0 ? "".concat(t.base, ":") : "";
            return (
              t.dbName && t.storeName && (e = D(t.dbName, t.storeName)),
              {
                name: "idb-keyval",
                options: t,
                hasItem: async (t) => !(typeof (await P(i + t, e)) > "u"),
                async getItem(t) {
                  var r;
                  return null != (r = await P(i + t, e)) ? r : null;
                },
                setItem: (t, r) =>
                  (function (e, t) {
                    let i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : S();
                    return i(
                      "readwrite",
                      (i) => (i.put(t, e), _(i.transaction))
                    );
                  })(i + t, r, e),
                removeItem: (t) =>
                  (function (e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : S();
                    return t(
                      "readwrite",
                      (t) => (t.delete(e), _(t.transaction))
                    );
                  })(i + t, e),
                getKeys: () =>
                  (function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : S();
                    return e("readonly", (e) => {
                      var t;
                      if (e.getAllKeys) return _(e.getAllKeys());
                      let i = [];
                      return ((t = (e) => i.push(e.key)),
                      (e.openCursor().onsuccess = function () {
                        this.result && (t(this.result), this.result.continue());
                      }),
                      _(e.transaction)).then(() => i);
                    });
                  })(e),
                clear: () =>
                  (function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : S();
                    return e("readwrite", (e) => (e.clear(), _(e.transaction)));
                  })(e),
              }
            );
          };
        class C {
          async getKeys() {
            return this.indexedDb.getKeys();
          }
          async getEntries() {
            return (
              await this.indexedDb.getItems(await this.indexedDb.getKeys())
            ).map((e) => [e.key, e.value]);
          }
          async getItem(e) {
            let t = await this.indexedDb.getItem(e);
            if (null !== t) return t;
          }
          async setItem(e, t) {
            await this.indexedDb.setItem(e, (0, A.safeJsonStringify)(t));
          }
          async removeItem(e) {
            await this.indexedDb.removeItem(e);
          }
          constructor() {
            this.indexedDb = (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = {
                  mounts: {
                    "":
                      e.driver ||
                      (() => {
                        let e = new Map();
                        return {
                          name: "memory",
                          getInstance: () => e,
                          hasItem: (t) => e.has(t),
                          getItem(t) {
                            var i;
                            return null != (i = e.get(t)) ? i : null;
                          },
                          getItemRaw(t) {
                            var i;
                            return null != (i = e.get(t)) ? i : null;
                          },
                          setItem(t, i) {
                            e.set(t, i);
                          },
                          setItemRaw(t, i) {
                            e.set(t, i);
                          },
                          removeItem(t) {
                            e.delete(t);
                          },
                          getKeys: () => [...e.keys()],
                          clear() {
                            e.clear();
                          },
                          dispose() {
                            e.clear();
                          },
                        };
                      })(),
                  },
                  mountpoints: [""],
                  watching: !1,
                  watchListeners: [],
                  unwatch: {},
                },
                i = (e) => {
                  for (let i of t.mountpoints)
                    if (e.startsWith(i))
                      return {
                        base: i,
                        relativeKey: e.slice(i.length),
                        driver: t.mounts[i],
                      };
                  return { base: "", relativeKey: e, driver: t.mounts[""] };
                },
                s = (e, i) =>
                  t.mountpoints
                    .filter((t) => t.startsWith(e) || (i && e.startsWith(t)))
                    .map((i) => ({
                      relativeBase:
                        e.length > i.length ? e.slice(i.length) : void 0,
                      mountpoint: i,
                      driver: t.mounts[i],
                    })),
                n = (e, i) => {
                  if (t.watching)
                    for (let r of ((i = w(i)), t.watchListeners)) r(e, i);
                },
                o = async () => {
                  if (!t.watching)
                    for (let e in ((t.watching = !0), t.mounts))
                      t.unwatch[e] = await x(t.mounts[e], n, e);
                },
                a = async () => {
                  if (t.watching) {
                    for (let e in t.unwatch) await t.unwatch[e]();
                    (t.unwatch = {}), (t.watching = !1);
                  }
                },
                c = (e, t, r) => {
                  let s = new Map(),
                    n = (e) => {
                      let t = s.get(e.base);
                      return (
                        t ||
                          ((t = { driver: e.driver, base: e.base, items: [] }),
                          s.set(e.base, t)),
                        t
                      );
                    };
                  for (let r of e) {
                    let e = "string" == typeof r,
                      s = w(e ? r : r.key),
                      o = e ? void 0 : r.value,
                      a = e || !r.options ? t : { ...t, ...r.options },
                      c = i(s);
                    n(c).items.push({
                      key: s,
                      value: o,
                      relativeKey: c.relativeKey,
                      options: a,
                    });
                  }
                  return Promise.all([...s.values()].map((e) => r(e))).then(
                    (e) => e.flat()
                  );
                },
                l = {
                  hasItem(e) {
                    let t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      { relativeKey: r, driver: s } = i((e = w(e)));
                    return b(s.hasItem, r, t);
                  },
                  getItem(e) {
                    let t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      { relativeKey: r, driver: s } = i((e = w(e)));
                    return b(s.getItem, r, t).then((e) => y(e));
                  },
                  getItems(e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return c(e, t, (e) =>
                      e.driver.getItems
                        ? b(
                            e.driver.getItems,
                            e.items.map((e) => ({
                              key: e.relativeKey,
                              options: e.options,
                            })),
                            t
                          ).then((t) =>
                            t.map((t) => ({
                              key: (function () {
                                for (
                                  var e = arguments.length, t = Array(e), i = 0;
                                  i < e;
                                  i++
                                )
                                  t[i] = arguments[i];
                                return w(t.join(":"));
                              })(e.base, t.key),
                              value: y(t.value),
                            }))
                          )
                        : Promise.all(
                            e.items.map((t) =>
                              b(
                                e.driver.getItem,
                                t.relativeKey,
                                t.options
                              ).then((e) => ({ key: t.key, value: y(e) }))
                            )
                          )
                    );
                  },
                  getItemRaw(e) {
                    let t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      { relativeKey: s, driver: n } = i((e = w(e)));
                    return n.getItemRaw
                      ? b(n.getItemRaw, s, t)
                      : b(n.getItem, s, t).then((e) => {
                          var t;
                          return "string" == typeof e && e.startsWith(v)
                            ? ((t = e.slice(v.length)),
                              globalThis.Buffer
                                ? r.Buffer.from(t, "base64")
                                : Uint8Array.from(globalThis.atob(t), (e) =>
                                    e.codePointAt(0)
                                  ))
                            : e;
                        });
                  },
                  async setItem(e, t) {
                    let r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                    if (void 0 === t) return l.removeItem(e);
                    let { relativeKey: s, driver: o } = i((e = w(e)));
                    o.setItem &&
                      (await b(o.setItem, s, m(t), r),
                      o.watch || n("update", e));
                  },
                  async setItems(e, t) {
                    await c(e, t, async (e) => {
                      if (e.driver.setItems)
                        return b(
                          e.driver.setItems,
                          e.items.map((e) => ({
                            key: e.relativeKey,
                            value: m(e.value),
                            options: e.options,
                          })),
                          t
                        );
                      e.driver.setItem &&
                        (await Promise.all(
                          e.items.map((t) =>
                            b(
                              e.driver.setItem,
                              t.relativeKey,
                              m(t.value),
                              t.options
                            )
                          )
                        ));
                    });
                  },
                  async setItemRaw(e, t) {
                    let s =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                    if (void 0 === t) return l.removeItem(e, s);
                    let { relativeKey: o, driver: a } = i((e = w(e)));
                    if (a.setItemRaw) await b(a.setItemRaw, o, t, s);
                    else {
                      var c;
                      if (!a.setItem) return;
                      await b(
                        a.setItem,
                        o,
                        "string" == typeof t
                          ? t
                          : v +
                              ((c = t),
                              globalThis.Buffer
                                ? r.Buffer.from(c).toString("base64")
                                : globalThis.btoa(String.fromCodePoint(...c))),
                        s
                      );
                    }
                    a.watch || n("update", e);
                  },
                  async removeItem(e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    "boolean" == typeof t && (t = { removeMeta: t });
                    let { relativeKey: r, driver: s } = i((e = w(e)));
                    s.removeItem &&
                      (await b(s.removeItem, r, t),
                      (t.removeMeta || t.removeMata) &&
                        (await b(s.removeItem, r + "$", t)),
                      s.watch || n("remove", e));
                  },
                  async getMeta(e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    "boolean" == typeof t && (t = { nativeOnly: t });
                    let { relativeKey: r, driver: s } = i((e = w(e))),
                      n = Object.create(null);
                    if (
                      (s.getMeta && Object.assign(n, await b(s.getMeta, r, t)),
                      !t.nativeOnly)
                    ) {
                      let e = await b(s.getItem, r + "$", t).then((e) => y(e));
                      e &&
                        "object" == typeof e &&
                        ("string" == typeof e.atime &&
                          (e.atime = new Date(e.atime)),
                        "string" == typeof e.mtime &&
                          (e.mtime = new Date(e.mtime)),
                        Object.assign(n, e));
                    }
                    return n;
                  },
                  setMeta(e, t) {
                    let i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                    return this.setItem(e + "$", t, i);
                  },
                  removeMeta(e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return this.removeItem(e + "$", t);
                  },
                  async getKeys(e) {
                    let t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      i = s((e = E(e)), !0),
                      r = [],
                      n = [],
                      o = !0;
                    for (let e of i) {
                      var a;
                      for (let i of ((null == (a = e.driver.flags)
                        ? void 0
                        : a.maxDepth) || (o = !1),
                      await b(e.driver.getKeys, e.relativeBase, t))) {
                        let t = e.mountpoint + w(i);
                        r.some((e) => t.startsWith(e)) || n.push(t);
                      }
                      r = [
                        e.mountpoint,
                        ...r.filter((t) => !t.startsWith(e.mountpoint)),
                      ];
                    }
                    let c = void 0 !== t.maxDepth && !o;
                    return n.filter((i) => {
                      var r;
                      return (
                        (!c ||
                          (function (e, t) {
                            if (void 0 === t) return !0;
                            let i = 0,
                              r = e.indexOf(":");
                            for (; r > -1; ) i++, (r = e.indexOf(":", r + 1));
                            return i <= t;
                          })(i, t.maxDepth)) &&
                        ((r = e)
                          ? i.startsWith(r) && "$" !== i[i.length - 1]
                          : "$" !== i[i.length - 1])
                      );
                    });
                  },
                  async clear(e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    (e = E(e)),
                      await Promise.all(
                        s(e, !1).map(async (e) =>
                          e.driver.clear
                            ? b(e.driver.clear, e.relativeBase, t)
                            : e.driver.removeItem
                            ? Promise.all(
                                (
                                  await e.driver.getKeys(
                                    e.relativeBase || "",
                                    t
                                  )
                                ).map((i) => e.driver.removeItem(i, t))
                              )
                            : void 0
                        )
                      );
                  },
                  async dispose() {
                    await Promise.all(Object.values(t.mounts).map((e) => I(e)));
                  },
                  watch: async (e) => (
                    await o(),
                    t.watchListeners.push(e),
                    async () => {
                      (t.watchListeners = t.watchListeners.filter(
                        (t) => t !== e
                      )),
                        0 === t.watchListeners.length && (await a());
                    }
                  ),
                  async unwatch() {
                    (t.watchListeners = []), await a();
                  },
                  mount(e, i) {
                    if ((e = E(e)) && t.mounts[e])
                      throw Error("already mounted at ".concat(e));
                    return (
                      e &&
                        (t.mountpoints.push(e),
                        t.mountpoints.sort((e, t) => t.length - e.length)),
                      (t.mounts[e] = i),
                      t.watching &&
                        Promise.resolve(x(i, n, e))
                          .then((i) => {
                            t.unwatch[e] = i;
                          })
                          .catch(console.error),
                      l
                    );
                  },
                  async unmount(e) {
                    let i =
                      !(arguments.length > 1) ||
                      void 0 === arguments[1] ||
                      arguments[1];
                    if ((e = E(e)) && t.mounts[e]) {
                      if (t.watching && e in t.unwatch) {
                        var r, s;
                        null == (r = (s = t.unwatch)[e]) || r.call(s),
                          delete t.unwatch[e];
                      }
                      i && (await I(t.mounts[e])),
                        (t.mountpoints = t.mountpoints.filter((t) => t !== e)),
                        delete t.mounts[e];
                    }
                  },
                  getMount() {
                    let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "",
                      t = i((e = w(e) + ":"));
                    return { driver: t.driver, base: t.base };
                  },
                  getMounts() {
                    let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "",
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    return s((e = w(e)), t.parents).map((e) => ({
                      driver: e.driver,
                      base: e.mountpoint,
                    }));
                  },
                  keys: function (e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return l.getKeys(e, t);
                  },
                  get: function (e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return l.getItem(e, t);
                  },
                  set: function (e, t) {
                    let i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
                    return l.setItem(e, t, i);
                  },
                  has: function (e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return l.hasItem(e, t);
                  },
                  del: function (e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return l.removeItem(e, t);
                  },
                  remove: function (e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return l.removeItem(e, t);
                  },
                };
              return l;
            })({
              driver: O({
                dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                storeName: "keyvaluestorage",
              }),
            });
          }
        }
        var T =
            "u" > typeof globalThis
              ? globalThis
              : "u" > typeof window
              ? window
              : globalThis,
          N = { exports: {} };
        function U(e) {
          var t;
          return [e[0], (0, A.safeJsonParse)(null != (t = e[1]) ? t : "")];
        }
        !(function () {
          function e() {}
          (e.prototype.getItem = function (e) {
            return this.hasOwnProperty(e) ? String(this[e]) : null;
          }),
            (e.prototype.setItem = function (e, t) {
              this[e] = String(t);
            }),
            (e.prototype.removeItem = function (e) {
              delete this[e];
            }),
            (e.prototype.clear = function () {
              let e = this;
              Object.keys(e).forEach(function (t) {
                (e[t] = void 0), delete e[t];
              });
            }),
            (e.prototype.key = function (e) {
              return (e = e || 0), Object.keys(this)[e];
            }),
            e.prototype.__defineGetter__("length", function () {
              return Object.keys(this).length;
            }),
            "u" > typeof T && T.localStorage
              ? (N.exports = T.localStorage)
              : "u" > typeof window && window.localStorage
              ? (N.exports = window.localStorage)
              : (N.exports = new e());
        })();
        class R {
          async getKeys() {
            return Object.keys(this.localStorage);
          }
          async getEntries() {
            return Object.entries(this.localStorage).map(U);
          }
          async getItem(e) {
            let t = this.localStorage.getItem(e);
            if (null !== t) return (0, A.safeJsonParse)(t);
          }
          async setItem(e, t) {
            this.localStorage.setItem(e, (0, A.safeJsonStringify)(t));
          }
          async removeItem(e) {
            this.localStorage.removeItem(e);
          }
          constructor() {
            this.localStorage = N.exports;
          }
        }
        let B = async (e, t, i) => {
            let r = "wc_storage_version",
              s = await t.getItem(r);
            if (s && s >= 1) return void i(t);
            let n = await e.getKeys();
            if (!n.length) return void i(t);
            let o = [];
            for (; n.length; ) {
              let i = n.shift();
              if (!i) continue;
              let r = i.toLowerCase();
              if (
                r.includes("wc@") ||
                r.includes("walletconnect") ||
                r.includes("wc_") ||
                r.includes("wallet_connect")
              ) {
                let r = await e.getItem(i);
                await t.setItem(i, r), o.push(i);
              }
            }
            await t.setItem(r, 1), i(t), k(e, o);
          },
          k = async (e, t) => {
            t.length &&
              t.forEach(async (t) => {
                await e.removeItem(t);
              });
          };
        class j {
          async getKeys() {
            return await this.initialize(), this.storage.getKeys();
          }
          async getEntries() {
            return await this.initialize(), this.storage.getEntries();
          }
          async getItem(e) {
            return await this.initialize(), this.storage.getItem(e);
          }
          async setItem(e, t) {
            return await this.initialize(), this.storage.setItem(e, t);
          }
          async removeItem(e) {
            return await this.initialize(), this.storage.removeItem(e);
          }
          async initialize() {
            this.initialized ||
              (await new Promise((e) => {
                let t = setInterval(() => {
                  this.initialized && (clearInterval(t), e());
                }, 20);
              }));
          }
          constructor() {
            (this.initialized = !1),
              (this.setInitialized = (e) => {
                (this.storage = e), (this.initialized = !0);
              });
            let e = new R();
            this.storage = e;
            try {
              let t = new C();
              B(e, t, this.setInitialized);
            } catch (e) {
              this.initialized = !0;
            }
          }
        }
        e.i(959658);
        var L = e.i(500006),
          q = e.i(151832),
          q = q,
          M = Object.defineProperty,
          z = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? M(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class F extends a {
          constructor(e) {
            super(),
              (this.opts = e),
              z(this, "protocol", "wc"),
              z(this, "version", 2);
          }
        }
        var H = Object.defineProperty;
        class V extends a {
          constructor(e, t) {
            super(),
              (this.core = e),
              (this.logger = t),
              ((e, t, i) =>
                ((e, t, i) =>
                  t in e
                    ? H(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: i,
                      })
                    : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i))(
                this,
                "records",
                new Map()
              );
          }
        }
        class K {
          constructor(e, t) {
            (this.logger = e), (this.core = t);
          }
        }
        class W extends a {
          constructor(e, t) {
            super(), (this.relayer = e), (this.logger = t);
          }
        }
        class G extends a {
          constructor(e) {
            super();
          }
        }
        class Y {
          constructor(e, t, i, r) {
            (this.core = e), (this.logger = t), (this.name = i);
          }
        }
        class J extends a {
          constructor(e, t) {
            super(), (this.relayer = e), (this.logger = t);
          }
        }
        class Z extends a {
          constructor(e, t) {
            super(), (this.core = e), (this.logger = t);
          }
        }
        class X {
          constructor(e, t, i) {
            (this.core = e), (this.logger = t), (this.store = i);
          }
        }
        class Q {
          constructor(e, t) {
            (this.projectId = e), (this.logger = t);
          }
        }
        class $ {
          constructor(e, t, i) {
            (this.core = e), (this.logger = t), (this.telemetryEnabled = i);
          }
        }
        var ee = Object.defineProperty,
          et = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? ee(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        n.default;
        class ei {
          constructor(e) {
            (this.opts = e), et(this, "protocol", "wc"), et(this, "version", 2);
          }
        }
        n.EventEmitter;
        class er {
          constructor(e) {
            this.client = e;
          }
        }
        function es(e) {
          for (
            var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            i[r - 1] = arguments[r];
          if (
            !(
              e instanceof Uint8Array ||
              (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
            )
          )
            throw Error("Uint8Array expected");
          if (i.length > 0 && !i.includes(e.length))
            throw Error(
              "Uint8Array expected of length " + i + ", got length=" + e.length
            );
        }
        function en(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          if (e.destroyed) throw Error("Hash instance has been destroyed");
          if (t && e.finished)
            throw Error("Hash#digest() has already been called");
        }
        let eo =
            "object" == typeof globalThis && "crypto" in globalThis
              ? globalThis.crypto
              : void 0,
          ea = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength);
        function ec(e) {
          return (
            "string" == typeof e &&
              (e = (function (e) {
                if ("string" != typeof e)
                  throw Error("utf8ToBytes expected string, got " + typeof e);
                return new Uint8Array(new TextEncoder().encode(e));
              })(e)),
            es(e),
            e
          );
        }
        class el {
          clone() {
            return this._cloneInto();
          }
        }
        function eh() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32;
          if (eo && "function" == typeof eo.getRandomValues)
            return eo.getRandomValues(new Uint8Array(e));
          if (eo && "function" == typeof eo.randomBytes)
            return eo.randomBytes(e);
          throw Error("crypto.getRandomValues must be defined");
        }
        class eu extends el {
          update(e) {
            en(this);
            let { view: t, buffer: i, blockLen: r } = this,
              s = (e = ec(e)).length;
            for (let n = 0; n < s; ) {
              let o = Math.min(r - this.pos, s - n);
              if (o === r) {
                let t = ea(e);
                for (; r <= s - n; n += r) this.process(t, n);
                continue;
              }
              i.set(e.subarray(n, n + o), this.pos),
                (this.pos += o),
                (n += o),
                this.pos === r && (this.process(t, 0), (this.pos = 0));
            }
            return (this.length += e.length), this.roundClean(), this;
          }
          digestInto(e) {
            en(this),
              (function (e, t) {
                es(e);
                let i = t.outputLen;
                if (e.length < i)
                  throw Error(
                    "digestInto() expects output buffer of length at least " + i
                  );
              })(e, this),
              (this.finished = !0);
            let { buffer: t, view: i, blockLen: r, isLE: s } = this,
              { pos: n } = this;
            (t[n++] = 128),
              this.buffer.subarray(n).fill(0),
              this.padOffset > r - n && (this.process(i, 0), (n = 0));
            for (let e = n; e < r; e++) t[e] = 0;
            (function (e, t, i, r) {
              if ("function" == typeof e.setBigUint64)
                return e.setBigUint64(t, i, r);
              let s = BigInt(32),
                n = BigInt(0xffffffff),
                o = Number((i >> s) & n),
                a = Number(i & n),
                c = 4 * !!r,
                l = 4 * !r;
              e.setUint32(t + c, o, r), e.setUint32(t + l, a, r);
            })(i, r - 8, BigInt(8 * this.length), s),
              this.process(i, 0);
            let o = ea(e),
              a = this.outputLen;
            if (a % 4)
              throw Error("_sha2: outputLen should be aligned to 32bit");
            let c = a / 4,
              l = this.get();
            if (c > l.length) throw Error("_sha2: outputLen bigger than state");
            for (let e = 0; e < c; e++) o.setUint32(4 * e, l[e], s);
          }
          digest() {
            let { buffer: e, outputLen: t } = this;
            this.digestInto(e);
            let i = e.slice(0, t);
            return this.destroy(), i;
          }
          _cloneInto(e) {
            e || (e = new this.constructor()), e.set(...this.get());
            let {
              blockLen: t,
              buffer: i,
              length: r,
              finished: s,
              destroyed: n,
              pos: o,
            } = this;
            return (
              (e.length = r),
              (e.pos = o),
              (e.finished = s),
              (e.destroyed = n),
              r % t && e.buffer.set(i),
              e
            );
          }
          constructor(e, t, i, r) {
            super(),
              (this.blockLen = e),
              (this.outputLen = t),
              (this.padOffset = i),
              (this.isLE = r),
              (this.finished = !1),
              (this.length = 0),
              (this.pos = 0),
              (this.destroyed = !1),
              (this.buffer = new Uint8Array(e)),
              (this.view = ea(this.buffer));
          }
        }
        let ed = BigInt(0x100000000 - 1),
          ef = BigInt(32),
          ep = {
            split: function (e) {
              let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                i = new Uint32Array(e.length),
                r = new Uint32Array(e.length);
              for (let s = 0; s < e.length; s++) {
                let { h: n, l: o } = (function (e) {
                  let t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  return t
                    ? { h: Number(e & ed), l: Number((e >> ef) & ed) }
                    : { h: 0 | Number((e >> ef) & ed), l: 0 | Number(e & ed) };
                })(e[s], t);
                [i[s], r[s]] = [n, o];
              }
              return [i, r];
            },
            shrSH: (e, t, i) => e >>> i,
            shrSL: (e, t, i) => (e << (32 - i)) | (t >>> i),
            rotrSH: (e, t, i) => (e >>> i) | (t << (32 - i)),
            rotrSL: (e, t, i) => (e << (32 - i)) | (t >>> i),
            rotrBH: (e, t, i) => (e << (64 - i)) | (t >>> (i - 32)),
            rotrBL: (e, t, i) => (e >>> (i - 32)) | (t << (64 - i)),
            add: function (e, t, i, r) {
              let s = (t >>> 0) + (r >>> 0);
              return { h: (e + i + ((s / 0x100000000) | 0)) | 0, l: 0 | s };
            },
            add3L: (e, t, i) => (e >>> 0) + (t >>> 0) + (i >>> 0),
            add3H: (e, t, i, r) => (t + i + r + ((e / 0x100000000) | 0)) | 0,
            add4L: (e, t, i, r) =>
              (e >>> 0) + (t >>> 0) + (i >>> 0) + (r >>> 0),
            add4H: (e, t, i, r, s) =>
              (t + i + r + s + ((e / 0x100000000) | 0)) | 0,
            add5H: (e, t, i, r, s, n) =>
              (t + i + r + s + n + ((e / 0x100000000) | 0)) | 0,
            add5L: (e, t, i, r, s) =>
              (e >>> 0) + (t >>> 0) + (i >>> 0) + (r >>> 0) + (s >>> 0),
          },
          [eg, ey] = ep.split(
            [
              "0x428a2f98d728ae22",
              "0x7137449123ef65cd",
              "0xb5c0fbcfec4d3b2f",
              "0xe9b5dba58189dbbc",
              "0x3956c25bf348b538",
              "0x59f111f1b605d019",
              "0x923f82a4af194f9b",
              "0xab1c5ed5da6d8118",
              "0xd807aa98a3030242",
              "0x12835b0145706fbe",
              "0x243185be4ee4b28c",
              "0x550c7dc3d5ffb4e2",
              "0x72be5d74f27b896f",
              "0x80deb1fe3b1696b1",
              "0x9bdc06a725c71235",
              "0xc19bf174cf692694",
              "0xe49b69c19ef14ad2",
              "0xefbe4786384f25e3",
              "0x0fc19dc68b8cd5b5",
              "0x240ca1cc77ac9c65",
              "0x2de92c6f592b0275",
              "0x4a7484aa6ea6e483",
              "0x5cb0a9dcbd41fbd4",
              "0x76f988da831153b5",
              "0x983e5152ee66dfab",
              "0xa831c66d2db43210",
              "0xb00327c898fb213f",
              "0xbf597fc7beef0ee4",
              "0xc6e00bf33da88fc2",
              "0xd5a79147930aa725",
              "0x06ca6351e003826f",
              "0x142929670a0e6e70",
              "0x27b70a8546d22ffc",
              "0x2e1b21385c26c926",
              "0x4d2c6dfc5ac42aed",
              "0x53380d139d95b3df",
              "0x650a73548baf63de",
              "0x766a0abb3c77b2a8",
              "0x81c2c92e47edaee6",
              "0x92722c851482353b",
              "0xa2bfe8a14cf10364",
              "0xa81a664bbc423001",
              "0xc24b8b70d0f89791",
              "0xc76c51a30654be30",
              "0xd192e819d6ef5218",
              "0xd69906245565a910",
              "0xf40e35855771202a",
              "0x106aa07032bbd1b8",
              "0x19a4c116b8d2d0c8",
              "0x1e376c085141ab53",
              "0x2748774cdf8eeb99",
              "0x34b0bcb5e19b48a8",
              "0x391c0cb3c5c95a63",
              "0x4ed8aa4ae3418acb",
              "0x5b9cca4f7763e373",
              "0x682e6ff3d6b2b8a3",
              "0x748f82ee5defb2fc",
              "0x78a5636f43172f60",
              "0x84c87814a1f0ab72",
              "0x8cc702081a6439ec",
              "0x90befffa23631e28",
              "0xa4506cebde82bde9",
              "0xbef9a3f7b2c67915",
              "0xc67178f2e372532b",
              "0xca273eceea26619c",
              "0xd186b8c721c0c207",
              "0xeada7dd6cde0eb1e",
              "0xf57d4f7fee6ed178",
              "0x06f067aa72176fba",
              "0x0a637dc5a2c898a6",
              "0x113f9804bef90dae",
              "0x1b710b35131c471b",
              "0x28db77f523047d84",
              "0x32caab7b40c72493",
              "0x3c9ebe0a15c9bebc",
              "0x431d67c49c100d4c",
              "0x4cc5d4becb3e42b6",
              "0x597f299cfc657e2a",
              "0x5fcb6fab3ad6faec",
              "0x6c44198c4a475817",
            ].map((e) => BigInt(e))
          ),
          eb = new Uint32Array(80),
          em = new Uint32Array(80);
        class ev extends eu {
          get() {
            let {
              Ah: e,
              Al: t,
              Bh: i,
              Bl: r,
              Ch: s,
              Cl: n,
              Dh: o,
              Dl: a,
              Eh: c,
              El: l,
              Fh: h,
              Fl: u,
              Gh: d,
              Gl: f,
              Hh: p,
              Hl: g,
            } = this;
            return [e, t, i, r, s, n, o, a, c, l, h, u, d, f, p, g];
          }
          set(e, t, i, r, s, n, o, a, c, l, h, u, d, f, p, g) {
            (this.Ah = 0 | e),
              (this.Al = 0 | t),
              (this.Bh = 0 | i),
              (this.Bl = 0 | r),
              (this.Ch = 0 | s),
              (this.Cl = 0 | n),
              (this.Dh = 0 | o),
              (this.Dl = 0 | a),
              (this.Eh = 0 | c),
              (this.El = 0 | l),
              (this.Fh = 0 | h),
              (this.Fl = 0 | u),
              (this.Gh = 0 | d),
              (this.Gl = 0 | f),
              (this.Hh = 0 | p),
              (this.Hl = 0 | g);
          }
          process(e, t) {
            for (let i = 0; i < 16; i++, t += 4)
              (eb[i] = e.getUint32(t)), (em[i] = e.getUint32((t += 4)));
            for (let e = 16; e < 80; e++) {
              let t = 0 | eb[e - 15],
                i = 0 | em[e - 15],
                r = ep.rotrSH(t, i, 1) ^ ep.rotrSH(t, i, 8) ^ ep.shrSH(t, i, 7),
                s = ep.rotrSL(t, i, 1) ^ ep.rotrSL(t, i, 8) ^ ep.shrSL(t, i, 7),
                n = 0 | eb[e - 2],
                o = 0 | em[e - 2],
                a =
                  ep.rotrSH(n, o, 19) ^ ep.rotrBH(n, o, 61) ^ ep.shrSH(n, o, 6),
                c =
                  ep.rotrSL(n, o, 19) ^ ep.rotrBL(n, o, 61) ^ ep.shrSL(n, o, 6),
                l = ep.add4L(s, c, em[e - 7], em[e - 16]),
                h = ep.add4H(l, r, a, eb[e - 7], eb[e - 16]);
              (eb[e] = 0 | h), (em[e] = 0 | l);
            }
            let {
              Ah: i,
              Al: r,
              Bh: s,
              Bl: n,
              Ch: o,
              Cl: a,
              Dh: c,
              Dl: l,
              Eh: h,
              El: u,
              Fh: d,
              Fl: f,
              Gh: p,
              Gl: g,
              Hh: y,
              Hl: b,
            } = this;
            for (let e = 0; e < 80; e++) {
              let t =
                  ep.rotrSH(h, u, 14) ^
                  ep.rotrSH(h, u, 18) ^
                  ep.rotrBH(h, u, 41),
                m =
                  ep.rotrSL(h, u, 14) ^
                  ep.rotrSL(h, u, 18) ^
                  ep.rotrBL(h, u, 41),
                v = (h & d) ^ (~h & p),
                w = (u & f) ^ (~u & g),
                E = ep.add5L(b, m, w, ey[e], em[e]),
                x = ep.add5H(E, y, t, v, eg[e], eb[e]),
                I = 0 | E,
                _ =
                  ep.rotrSH(i, r, 28) ^
                  ep.rotrBH(i, r, 34) ^
                  ep.rotrBH(i, r, 39),
                D =
                  ep.rotrSL(i, r, 28) ^
                  ep.rotrBL(i, r, 34) ^
                  ep.rotrBL(i, r, 39),
                S = (i & s) ^ (i & o) ^ (s & o),
                P = (r & n) ^ (r & a) ^ (n & a);
              (y = 0 | p),
                (b = 0 | g),
                (p = 0 | d),
                (g = 0 | f),
                (d = 0 | h),
                (f = 0 | u),
                ({ h: h, l: u } = ep.add(0 | c, 0 | l, 0 | x, 0 | I)),
                (c = 0 | o),
                (l = 0 | a),
                (o = 0 | s),
                (a = 0 | n),
                (s = 0 | i),
                (n = 0 | r);
              let A = ep.add3L(I, D, P);
              (i = ep.add3H(A, x, _, S)), (r = 0 | A);
            }
            ({ h: i, l: r } = ep.add(0 | this.Ah, 0 | this.Al, 0 | i, 0 | r)),
              ({ h: s, l: n } = ep.add(0 | this.Bh, 0 | this.Bl, 0 | s, 0 | n)),
              ({ h: o, l: a } = ep.add(0 | this.Ch, 0 | this.Cl, 0 | o, 0 | a)),
              ({ h: c, l: l } = ep.add(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | l)),
              ({ h: h, l: u } = ep.add(0 | this.Eh, 0 | this.El, 0 | h, 0 | u)),
              ({ h: d, l: f } = ep.add(0 | this.Fh, 0 | this.Fl, 0 | d, 0 | f)),
              ({ h: p, l: g } = ep.add(0 | this.Gh, 0 | this.Gl, 0 | p, 0 | g)),
              ({ h: y, l: b } = ep.add(0 | this.Hh, 0 | this.Hl, 0 | y, 0 | b)),
              this.set(i, r, s, n, o, a, c, l, h, u, d, f, p, g, y, b);
          }
          roundClean() {
            eb.fill(0), em.fill(0);
          }
          destroy() {
            this.buffer.fill(0),
              this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          }
          constructor() {
            super(128, 64, 16, !1),
              (this.Ah = 0x6a09e667),
              (this.Al = -0xc4336f8),
              (this.Bh = -0x4498517b),
              (this.Bl = -0x7b3558c5),
              (this.Ch = 0x3c6ef372),
              (this.Cl = -0x16b07d5),
              (this.Dh = -0x5ab00ac6),
              (this.Dl = 0x5f1d36f1),
              (this.Eh = 0x510e527f),
              (this.El = -0x52197d2f),
              (this.Fh = -0x64fa9774),
              (this.Fl = 0x2b3e6c1f),
              (this.Gh = 0x1f83d9ab),
              (this.Gl = -0x4be4295),
              (this.Hh = 0x5be0cd19),
              (this.Hl = 0x137e2179);
          }
        }
        let ew = (function (e) {
            let t = (t) => e().update(ec(t)).digest(),
              i = e();
            return (
              (t.outputLen = i.outputLen),
              (t.blockLen = i.blockLen),
              (t.create = () => e()),
              t
            );
          })(() => new ev()),
          eE = BigInt(0),
          ex = BigInt(1),
          eI = BigInt(2);
        function e_(e) {
          return (
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          );
        }
        function eD(e) {
          if (!e_(e)) throw Error("Uint8Array expected");
        }
        function eS(e, t) {
          if ("boolean" != typeof t)
            throw Error(e + " boolean expected, got " + t);
        }
        let eP = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
        function eA(e) {
          eD(e);
          let t = "";
          for (let i = 0; i < e.length; i++) t += eP[e[i]];
          return t;
        }
        function eO(e) {
          if ("string" != typeof e)
            throw Error("hex string expected, got " + typeof e);
          return "" === e ? eE : BigInt("0x" + e);
        }
        let eC = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
        function eT(e) {
          return e >= eC._0 && e <= eC._9
            ? e - eC._0
            : e >= eC.A && e <= eC.F
            ? e - (eC.A - 10)
            : e >= eC.a && e <= eC.f
            ? e - (eC.a - 10)
            : void 0;
        }
        function eN(e) {
          if ("string" != typeof e)
            throw Error("hex string expected, got " + typeof e);
          let t = e.length,
            i = t / 2;
          if (t % 2)
            throw Error("hex string expected, got unpadded hex of length " + t);
          let r = new Uint8Array(i);
          for (let t = 0, s = 0; t < i; t++, s += 2) {
            let i = eT(e.charCodeAt(s)),
              n = eT(e.charCodeAt(s + 1));
            if (void 0 === i || void 0 === n)
              throw Error(
                'hex string expected, got non-hex character "' +
                  (e[s] + e[s + 1]) +
                  '" at index ' +
                  s
              );
            r[t] = 16 * i + n;
          }
          return r;
        }
        function eU(e) {
          return eD(e), eO(eA(Uint8Array.from(e).reverse()));
        }
        function eR(e, t) {
          return eN(e.toString(16).padStart(2 * t, "0"));
        }
        function eB(e, t) {
          return eR(e, t).reverse();
        }
        function ek(e, t, i) {
          let r;
          if ("string" == typeof t)
            try {
              r = eN(t);
            } catch (t) {
              throw Error(e + " must be hex string or Uint8Array, cause: " + t);
            }
          else if (e_(t)) r = Uint8Array.from(t);
          else throw Error(e + " must be hex string or Uint8Array");
          let s = r.length;
          if ("number" == typeof i && s !== i)
            throw Error(e + " of length " + i + " expected, got " + s);
          return r;
        }
        function ej() {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          let r = 0;
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            eD(i), (r += i.length);
          }
          let s = new Uint8Array(r);
          for (let e = 0, i = 0; e < t.length; e++) {
            let r = t[e];
            s.set(r, i), (i += r.length);
          }
          return s;
        }
        let eL = (e) => "bigint" == typeof e && eE <= e;
        function eq(e, t, i, r) {
          if (!(eL(t) && eL(i) && eL(r)) || !(i <= t) || !(t < r))
            throw Error(
              "expected valid " + e + ": " + i + " <= n < " + r + ", got " + t
            );
        }
        let eM = {
          bigint: (e) => "bigint" == typeof e,
          function: (e) => "function" == typeof e,
          boolean: (e) => "boolean" == typeof e,
          string: (e) => "string" == typeof e,
          stringOrUint8Array: (e) => "string" == typeof e || e_(e),
          isSafeInteger: (e) => Number.isSafeInteger(e),
          array: (e) => Array.isArray(e),
          field: (e, t) => t.Fp.isValid(e),
          hash: (e) =>
            "function" == typeof e && Number.isSafeInteger(e.outputLen),
        };
        function ez(e, t) {
          let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = (t, i, r) => {
              let s = eM[i];
              if ("function" != typeof s)
                throw Error("invalid validator function");
              let n = e[t];
              if (!(r && void 0 === n) && !s(n, e))
                throw Error(
                  "param " +
                    String(t) +
                    " is invalid. Expected " +
                    i +
                    ", got " +
                    n
                );
            };
          for (let [e, i] of Object.entries(t)) r(e, i, !1);
          for (let [e, t] of Object.entries(i)) r(e, t, !0);
          return e;
        }
        function eF(e) {
          let t = new WeakMap();
          return function (i) {
            for (
              var r = arguments.length, s = Array(r > 1 ? r - 1 : 0), n = 1;
              n < r;
              n++
            )
              s[n - 1] = arguments[n];
            let o = t.get(i);
            if (void 0 !== o) return o;
            let a = e(i, ...s);
            return t.set(i, a), a;
          };
        }
        let eH = BigInt(0),
          eV = BigInt(1),
          eK = BigInt(2),
          eW = BigInt(3),
          eG = BigInt(4),
          eY = BigInt(5),
          eJ = BigInt(8);
        function eZ(e, t) {
          let i = e % t;
          return i >= eH ? i : t + i;
        }
        function eX(e, t, i) {
          let r = e;
          for (; t-- > eH; ) (r *= r), (r %= i);
          return r;
        }
        function eQ(e, t) {
          if (e === eH) throw Error("invert: expected non-zero number");
          if (t <= eH)
            throw Error("invert: expected positive modulus, got " + t);
          let i = eZ(e, t),
            r = t,
            s = eH,
            n = eV;
          for (; i !== eH; ) {
            let e = r / i,
              t = r % i,
              o = s - n * e;
            (r = i), (i = t), (s = n), (n = o);
          }
          if (r !== eV) throw Error("invert: does not exist");
          return eZ(s, t);
        }
        let e$ = [
          "create",
          "isValid",
          "is0",
          "neg",
          "inv",
          "sqrt",
          "sqr",
          "eql",
          "add",
          "sub",
          "mul",
          "pow",
          "div",
          "addN",
          "subN",
          "mulN",
          "sqrN",
        ];
        function e0(e, t) {
          let i = void 0 !== t ? t : e.toString(2).length,
            r = Math.ceil(i / 8);
          return { nBitLength: i, nByteLength: r };
        }
        function e1(e, t) {
          let i,
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          if (e <= eH)
            throw Error("invalid field: expected ORDER > 0, got " + e);
          let { nBitLength: n, nByteLength: o } = e0(e, t);
          if (o > 2048)
            throw Error("invalid field: expected ORDER of <= 2048 bytes");
          let a = Object.freeze({
            ORDER: e,
            isLE: r,
            BITS: n,
            BYTES: o,
            MASK: (eI << BigInt(n - 1)) - ex,
            ZERO: eH,
            ONE: eV,
            create: (t) => eZ(t, e),
            isValid: (t) => {
              if ("bigint" != typeof t)
                throw Error(
                  "invalid field element: expected bigint, got " + typeof t
                );
              return eH <= t && t < e;
            },
            is0: (e) => e === eH,
            isOdd: (e) => (e & eV) === eV,
            neg: (t) => eZ(-t, e),
            eql: (e, t) => e === t,
            sqr: (t) => eZ(t * t, e),
            add: (t, i) => eZ(t + i, e),
            sub: (t, i) => eZ(t - i, e),
            mul: (t, i) => eZ(t * i, e),
            pow: (e, t) =>
              (function (e, t, i) {
                if (i < eH)
                  throw Error("invalid exponent, negatives unsupported");
                if (i === eH) return e.ONE;
                if (i === eV) return t;
                let r = e.ONE,
                  s = t;
                for (; i > eH; )
                  i & eV && (r = e.mul(r, s)), (s = e.sqr(s)), (i >>= eV);
                return r;
              })(a, e, t),
            div: (t, i) => eZ(t * eQ(i, e), e),
            sqrN: (e) => e * e,
            addN: (e, t) => e + t,
            subN: (e, t) => e - t,
            mulN: (e, t) => e * t,
            inv: (t) => eQ(t, e),
            sqrt:
              s.sqrt ||
              ((t) => (
                i ||
                  (i = (function (e) {
                    if (e % eG === eW) {
                      let t = (e + eV) / eG;
                      return function (e, i) {
                        let r = e.pow(i, t);
                        if (!e.eql(e.sqr(r), i))
                          throw Error("Cannot find square root");
                        return r;
                      };
                    }
                    if (e % eJ === eY) {
                      let t = (e - eY) / eJ;
                      return function (e, i) {
                        let r = e.mul(i, eK),
                          s = e.pow(r, t),
                          n = e.mul(i, s),
                          o = e.mul(e.mul(n, eK), s),
                          a = e.mul(n, e.sub(o, e.ONE));
                        if (!e.eql(e.sqr(a), i))
                          throw Error("Cannot find square root");
                        return a;
                      };
                    }
                    return (function (e) {
                      let t,
                        i,
                        r,
                        s = (e - eV) / eK;
                      for (t = e - eV, i = 0; t % eK === eH; t /= eK, i++);
                      for (
                        r = eK;
                        r < e &&
                        (function (e, t, i) {
                          if (t < eH)
                            throw Error(
                              "invalid exponent, negatives unsupported"
                            );
                          if (i <= eH) throw Error("invalid modulus");
                          if (i === eV) return eH;
                          let r = eV;
                          for (; t > eH; )
                            t & eV && (r = (r * e) % i),
                              (e = (e * e) % i),
                              (t >>= eV);
                          return r;
                        })(r, s, e) !==
                          e - eV;
                        r++
                      )
                        if (r > 1e3)
                          throw Error(
                            "Cannot find square root: likely non-prime P"
                          );
                      if (1 === i) {
                        let t = (e + eV) / eG;
                        return function (e, i) {
                          let r = e.pow(i, t);
                          if (!e.eql(e.sqr(r), i))
                            throw Error("Cannot find square root");
                          return r;
                        };
                      }
                      let n = (t + eV) / eK;
                      return function (e, o) {
                        if (e.pow(o, s) === e.neg(e.ONE))
                          throw Error("Cannot find square root");
                        let a = i,
                          c = e.pow(e.mul(e.ONE, r), t),
                          l = e.pow(o, n),
                          h = e.pow(o, t);
                        for (; !e.eql(h, e.ONE); ) {
                          if (e.eql(h, e.ZERO)) return e.ZERO;
                          let t = 1;
                          for (let i = e.sqr(h); t < a && !e.eql(i, e.ONE); t++)
                            i = e.sqr(i);
                          let i = e.pow(c, eV << BigInt(a - t - 1));
                          (c = e.sqr(i)),
                            (l = e.mul(l, i)),
                            (h = e.mul(h, c)),
                            (a = t);
                        }
                        return l;
                      };
                    })(e);
                  })(e)),
                i(a, t)
              )),
            invertBatch: (e) =>
              (function (e, t) {
                let i = Array(t.length),
                  r = t.reduce(
                    (t, r, s) => (e.is0(r) ? t : ((i[s] = t), e.mul(t, r))),
                    e.ONE
                  ),
                  s = e.inv(r);
                return (
                  t.reduceRight(
                    (t, r, s) =>
                      e.is0(r) ? t : ((i[s] = e.mul(t, i[s])), e.mul(t, r)),
                    s
                  ),
                  i
                );
              })(a, e),
            cmov: (e, t, i) => (i ? t : e),
            toBytes: (e) => (r ? eB(e, o) : eR(e, o)),
            fromBytes: (e) => {
              if (e.length !== o)
                throw Error(
                  "Field.fromBytes: expected " + o + " bytes, got " + e.length
                );
              return r ? eU(e) : eO(eA(e));
            },
          });
          return Object.freeze(a);
        }
        let e2 = BigInt(0),
          e8 = BigInt(1);
        function e3(e, t) {
          let i = t.negate();
          return e ? i : t;
        }
        function e6(e, t) {
          if (!Number.isSafeInteger(e) || e <= 0 || e > t)
            throw Error(
              "invalid window size, expected [1.." + t + "], got W=" + e
            );
        }
        function e5(e, t) {
          return (
            e6(e, t),
            { windows: Math.ceil(t / e) + 1, windowSize: 2 ** (e - 1) }
          );
        }
        let e4 = new WeakMap(),
          e9 = new WeakMap();
        function e7(e) {
          return e9.get(e) || 1;
        }
        let te = BigInt(0),
          tt = BigInt(1),
          ti = BigInt(2),
          tr = BigInt(8),
          ts = { zip215: !0 };
        BigInt(0), BigInt(1);
        let tn = BigInt(
            "57896044618658097711785492504343953926634992332820282019728792003956564819949"
          ),
          to = BigInt(
            "19681161376707505956807079304988542015446066515923890162744021073123829784752"
          );
        BigInt(0);
        let ta = BigInt(1),
          tc = BigInt(2);
        BigInt(3);
        let tl = BigInt(5),
          th = BigInt(8),
          tu = e1(tn, void 0, !0),
          td = (function (e) {
            var t;
            let i = (function (e) {
                let t =
                  (ez(
                    e.Fp,
                    e$.reduce((e, t) => ((e[t] = "function"), e), {
                      ORDER: "bigint",
                      MASK: "bigint",
                      BYTES: "isSafeInteger",
                      BITS: "isSafeInteger",
                    })
                  ),
                  ez(
                    e,
                    { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
                    {
                      nBitLength: "isSafeInteger",
                      nByteLength: "isSafeInteger",
                    }
                  ),
                  Object.freeze({
                    ...e0(e.n, e.nBitLength),
                    ...e,
                    p: e.Fp.ORDER,
                  }));
                return (
                  ez(
                    e,
                    {
                      hash: "function",
                      a: "bigint",
                      d: "bigint",
                      randomBytes: "function",
                    },
                    {
                      adjustScalarBytes: "function",
                      domain: "function",
                      uvRatio: "function",
                      mapToCurve: "function",
                    }
                  ),
                  Object.freeze({ ...t })
                );
              })(e),
              {
                Fp: r,
                n: s,
                prehash: n,
                hash: o,
                randomBytes: a,
                nByteLength: c,
                h: l,
              } = i,
              h = ti << (BigInt(8 * c) - tt),
              u = r.create,
              d = e1(i.n, i.nBitLength),
              f =
                i.uvRatio ||
                ((e, t) => {
                  try {
                    return { isValid: !0, value: r.sqrt(e * r.inv(t)) };
                  } catch (e) {
                    return { isValid: !1, value: te };
                  }
                }),
              p = i.adjustScalarBytes || ((e) => e),
              g =
                i.domain ||
                ((e, t, i) => {
                  if ((eS("phflag", i), t.length || i))
                    throw Error("Contexts/pre-hash are not supported");
                  return e;
                });
            function y(e, t) {
              eq("coordinate " + e, t, te, h);
            }
            function b(e) {
              if (!(e instanceof w)) throw Error("ExtendedPoint expected");
            }
            let m = eF((e, t) => {
                let { ex: i, ey: s, ez: n } = e,
                  o = e.is0();
                null == t && (t = o ? tr : r.inv(n));
                let a = u(i * t),
                  c = u(s * t),
                  l = u(n * t);
                if (o) return { x: te, y: tt };
                if (l !== tt) throw Error("invZ was invalid");
                return { x: a, y: c };
              }),
              v = eF((e) => {
                let { a: t, d: r } = i;
                if (e.is0()) throw Error("bad point: ZERO");
                let { ex: s, ey: n, ez: o, et: a } = e,
                  c = u(s * s),
                  l = u(n * n),
                  h = u(o * o),
                  d = u(h * h),
                  f = u(c * t);
                if (u(h * u(f + l)) !== u(d + u(r * u(c * l))))
                  throw Error("bad point: equation left != right (1)");
                if (u(s * n) !== u(o * a))
                  throw Error("bad point: equation left != right (2)");
                return !0;
              });
            class w {
              get x() {
                return this.toAffine().x;
              }
              get y() {
                return this.toAffine().y;
              }
              static fromAffine(e) {
                if (e instanceof w) throw Error("extended point not allowed");
                let { x: t, y: i } = e || {};
                return y("x", t), y("y", i), new w(t, i, tt, u(t * i));
              }
              static normalizeZ(e) {
                let t = r.invertBatch(e.map((e) => e.ez));
                return e.map((e, i) => e.toAffine(t[i])).map(w.fromAffine);
              }
              static msm(e, t) {
                return (function (e, t, i, r) {
                  if (
                    ((function (e, t) {
                      if (!Array.isArray(e)) throw Error("array expected");
                      e.forEach((e, i) => {
                        if (!(e instanceof t))
                          throw Error("invalid point at index " + i);
                      });
                    })(i, e),
                    (function (e, t) {
                      if (!Array.isArray(e))
                        throw Error("array of scalars expected");
                      e.forEach((e, i) => {
                        if (!t.isValid(e))
                          throw Error("invalid scalar at index " + i);
                      });
                    })(r, t),
                    i.length !== r.length)
                  )
                    throw Error(
                      "arrays of points and scalars must have equal length"
                    );
                  let s = e.ZERO,
                    n = (function (e) {
                      let t;
                      for (t = 0; e > eE; e >>= ex, t += 1);
                      return t;
                    })(BigInt(i.length)),
                    o = n > 12 ? n - 3 : n > 4 ? n - 2 : n ? 2 : 1,
                    a = (1 << o) - 1,
                    c = Array(a + 1).fill(s),
                    l = Math.floor((t.BITS - 1) / o) * o,
                    h = s;
                  for (let e = l; e >= 0; e -= o) {
                    c.fill(s);
                    for (let t = 0; t < r.length; t++) {
                      let s = Number((r[t] >> BigInt(e)) & BigInt(a));
                      c[s] = c[s].add(i[t]);
                    }
                    let t = s;
                    for (let e = c.length - 1, i = s; e > 0; e--)
                      (i = i.add(c[e])), (t = t.add(i));
                    if (((h = h.add(t)), 0 !== e))
                      for (let e = 0; e < o; e++) h = h.double();
                  }
                  return h;
                })(w, d, e, t);
              }
              _setWindowSize(e) {
                I.setWindowSize(this, e);
              }
              assertValidity() {
                v(this);
              }
              equals(e) {
                b(e);
                let { ex: t, ey: i, ez: r } = this,
                  { ex: s, ey: n, ez: o } = e,
                  a = u(t * o),
                  c = u(s * r),
                  l = u(i * o),
                  h = u(n * r);
                return a === c && l === h;
              }
              is0() {
                return this.equals(w.ZERO);
              }
              negate() {
                return new w(u(-this.ex), this.ey, this.ez, u(-this.et));
              }
              double() {
                let { a: e } = i,
                  { ex: t, ey: r, ez: s } = this,
                  n = u(t * t),
                  o = u(r * r),
                  a = u(ti * u(s * s)),
                  c = u(e * n),
                  l = t + r,
                  h = u(u(l * l) - n - o),
                  d = c + o,
                  f = d - a,
                  p = c - o,
                  g = u(h * f),
                  y = u(d * p),
                  b = u(h * p);
                return new w(g, y, u(f * d), b);
              }
              add(e) {
                b(e);
                let { a: t, d: r } = i,
                  { ex: s, ey: n, ez: o, et: a } = this,
                  { ex: c, ey: l, ez: h, et: d } = e;
                if (t === BigInt(-1)) {
                  let e = u((n - s) * (l + c)),
                    t = u((n + s) * (l - c)),
                    i = u(t - e);
                  if (i === te) return this.double();
                  let r = u(o * ti * d),
                    f = u(a * ti * h),
                    p = f + r,
                    g = t + e,
                    y = f - r,
                    b = u(p * i),
                    m = u(g * y),
                    v = u(p * y);
                  return new w(b, m, u(i * g), v);
                }
                let f = u(s * c),
                  p = u(n * l),
                  g = u(a * r * d),
                  y = u(o * h),
                  m = u((s + n) * (c + l) - f - p),
                  v = y - g,
                  E = y + g,
                  x = u(p - t * f),
                  I = u(m * v),
                  _ = u(E * x),
                  D = u(m * x);
                return new w(I, _, u(v * E), D);
              }
              subtract(e) {
                return this.add(e.negate());
              }
              wNAF(e) {
                return I.wNAFCached(this, e, w.normalizeZ);
              }
              multiply(e) {
                eq("scalar", e, tt, s);
                let { p: t, f: i } = this.wNAF(e);
                return w.normalizeZ([t, i])[0];
              }
              multiplyUnsafe(e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : w.ZERO;
                return (
                  eq("scalar", e, te, s),
                  e === te
                    ? x
                    : this.is0() || e === tt
                    ? this
                    : I.wNAFCachedUnsafe(this, e, w.normalizeZ, t)
                );
              }
              isSmallOrder() {
                return this.multiplyUnsafe(l).is0();
              }
              isTorsionFree() {
                return I.unsafeLadder(this, s).is0();
              }
              toAffine(e) {
                return m(this, e);
              }
              clearCofactor() {
                let { h: e } = i;
                return e === tt ? this : this.multiplyUnsafe(e);
              }
              static fromHex(e) {
                let t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  { d: s, a: n } = i,
                  o = r.BYTES;
                (e = ek("pointHex", e, o)), eS("zip215", t);
                let a = e.slice(),
                  c = e[o - 1];
                a[o - 1] = -129 & c;
                let l = eU(a);
                eq("pointHex.y", l, te, t ? h : r.ORDER);
                let d = u(l * l),
                  { isValid: p, value: g } = f(u(d - tt), u(s * d - n));
                if (!p) throw Error("Point.fromHex: invalid y coordinate");
                let y = (g & tt) === tt,
                  b = (128 & c) != 0;
                if (!t && g === te && b)
                  throw Error("Point.fromHex: x=0 and x_0=1");
                return b !== y && (g = u(-g)), w.fromAffine({ x: g, y: l });
              }
              static fromPrivateKey(e) {
                return _(e).point;
              }
              toRawBytes() {
                let { x: e, y: t } = this.toAffine(),
                  i = eB(t, r.BYTES);
                return (i[i.length - 1] |= e & tt ? 128 : 0), i;
              }
              toHex() {
                return eA(this.toRawBytes());
              }
              constructor(e, t, i, r) {
                (this.ex = e),
                  (this.ey = t),
                  (this.ez = i),
                  (this.et = r),
                  y("x", e),
                  y("y", t),
                  y("z", i),
                  y("t", r),
                  Object.freeze(this);
              }
            }
            (w.BASE = new w(i.Gx, i.Gy, tt, u(i.Gx * i.Gy))),
              (w.ZERO = new w(te, tt, tt, te));
            let { BASE: E, ZERO: x } = w,
              I =
                ((t = 8 * c),
                {
                  constTimeNegate: e3,
                  hasPrecomputes: (e) => 1 !== e7(e),
                  unsafeLadder(e, t) {
                    let i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : w.ZERO,
                      r = e;
                    for (; t > e2; )
                      t & e8 && (i = i.add(r)), (r = r.double()), (t >>= e8);
                    return i;
                  },
                  precomputeWindow(e, i) {
                    let { windows: r, windowSize: s } = e5(i, t),
                      n = [],
                      o = e,
                      a = o;
                    for (let e = 0; e < r; e++) {
                      (a = o), n.push(a);
                      for (let e = 1; e < s; e++) (a = a.add(o)), n.push(a);
                      o = a.double();
                    }
                    return n;
                  },
                  wNAF(e, i, r) {
                    let { windows: s, windowSize: n } = e5(e, t),
                      o = w.ZERO,
                      a = w.BASE,
                      c = BigInt(2 ** e - 1),
                      l = 2 ** e,
                      h = BigInt(e);
                    for (let e = 0; e < s; e++) {
                      let t = e * n,
                        s = Number(r & c);
                      (r >>= h), s > n && ((s -= l), (r += e8));
                      let u = t + Math.abs(s) - 1,
                        d = e % 2 != 0,
                        f = s < 0;
                      0 === s
                        ? (a = a.add(e3(d, i[t])))
                        : (o = o.add(e3(f, i[u])));
                    }
                    return { p: o, f: a };
                  },
                  wNAFUnsafe(e, i, r) {
                    let s =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : w.ZERO,
                      { windows: n, windowSize: o } = e5(e, t),
                      a = BigInt(2 ** e - 1),
                      c = 2 ** e,
                      l = BigInt(e);
                    for (let e = 0; e < n; e++) {
                      let t = e * o;
                      if (r === e2) break;
                      let n = Number(r & a);
                      if (((r >>= l), n > o && ((n -= c), (r += e8)), 0 === n))
                        continue;
                      let h = i[t + Math.abs(n) - 1];
                      n < 0 && (h = h.negate()), (s = s.add(h));
                    }
                    return s;
                  },
                  getPrecomputes(e, t, i) {
                    let r = e4.get(t);
                    return (
                      r ||
                        ((r = this.precomputeWindow(t, e)),
                        1 !== e && e4.set(t, i(r))),
                      r
                    );
                  },
                  wNAFCached(e, t, i) {
                    let r = e7(e);
                    return this.wNAF(r, this.getPrecomputes(r, e, i), t);
                  },
                  wNAFCachedUnsafe(e, t, i, r) {
                    let s = e7(e);
                    return 1 === s
                      ? this.unsafeLadder(e, t, r)
                      : this.wNAFUnsafe(s, this.getPrecomputes(s, e, i), t, r);
                  },
                  setWindowSize(e, i) {
                    e6(i, t), e9.set(e, i), e4.delete(e);
                  },
                });
            function _(e) {
              let t = r.BYTES;
              e = ek("private key", e, t);
              let i = ek("hashed private key", o(e), 2 * t),
                n = p(i.slice(0, t)),
                a = i.slice(t, 2 * t),
                c = eZ(eU(n), s),
                l = E.multiply(c),
                h = l.toRawBytes();
              return { head: n, prefix: a, scalar: c, point: l, pointBytes: h };
            }
            function D() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : new Uint8Array();
              for (
                var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1;
                r < t;
                r++
              )
                i[r - 1] = arguments[r];
              return eZ(eU(o(g(ej(...i), ek("context", e), !!n))), s);
            }
            return (
              E._setWindowSize(8),
              {
                CURVE: i,
                getPublicKey: function (e) {
                  return _(e).pointBytes;
                },
                sign: function (e, t) {
                  let i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  (e = ek("message", e)), n && (e = n(e));
                  let { prefix: o, scalar: a, pointBytes: c } = _(t),
                    l = D(i.context, o, e),
                    h = E.multiply(l).toRawBytes(),
                    u = eZ(l + D(i.context, h, c, e) * a, s);
                  return (
                    eq("signature.s", u, te, s),
                    ek("result", ej(h, eB(u, r.BYTES)), 2 * r.BYTES)
                  );
                },
                verify: function (e, t, i) {
                  let s,
                    o,
                    a,
                    c =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : ts,
                    { context: l, zip215: h } = c,
                    u = r.BYTES;
                  (e = ek("signature", e, 2 * u)),
                    (t = ek("message", t)),
                    (i = ek("publicKey", i, u)),
                    void 0 !== h && eS("zip215", h),
                    n && (t = n(t));
                  let d = eU(e.slice(u, 2 * u));
                  try {
                    (s = w.fromHex(i, h)),
                      (o = w.fromHex(e.slice(0, u), h)),
                      (a = E.multiplyUnsafe(d));
                  } catch (e) {
                    return !1;
                  }
                  if (!h && s.isSmallOrder()) return !1;
                  let f = D(l, o.toRawBytes(), s.toRawBytes(), t);
                  return o
                    .add(s.multiplyUnsafe(f))
                    .subtract(a)
                    .clearCofactor()
                    .equals(w.ZERO);
                },
                ExtendedPoint: w,
                utils: {
                  getExtendedPublicKey: _,
                  randomPrivateKey: () => a(r.BYTES),
                  precompute() {
                    let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 8,
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : w.BASE;
                    return t._setWindowSize(e), t.multiply(BigInt(3)), t;
                  },
                },
              }
            );
          })({
            a: BigInt(-1),
            d: BigInt(
              "37095705934669439343138083508754565189542113879843219016388785533085940283555"
            ),
            Fp: tu,
            n: BigInt(
              "7237005577332262213973186563042994240857116359379907606001950938285454250989"
            ),
            h: th,
            Gx: BigInt(
              "15112221349535400772501151409588531511454012693041857206046113283949847762202"
            ),
            Gy: BigInt(
              "46316835694926478169428394003475163141307993866256225615783033603165251855960"
            ),
            hash: ew,
            randomBytes: eh,
            adjustScalarBytes: function (e) {
              return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
            },
            uvRatio: function (e, t) {
              let i = eZ(t * t * t, tn),
                r = (function (e) {
                  let t = BigInt(10),
                    i = BigInt(20),
                    r = BigInt(40),
                    s = BigInt(80),
                    n = (((e * e) % tn) * e) % tn,
                    o = (eX(n, tc, tn) * n) % tn,
                    a = (eX(o, ta, tn) * e) % tn,
                    c = (eX(a, tl, tn) * a) % tn,
                    l = (eX(c, t, tn) * c) % tn,
                    h = (eX(l, i, tn) * l) % tn,
                    u = (eX(h, r, tn) * h) % tn,
                    d = (eX(u, s, tn) * u) % tn,
                    f = (eX(d, s, tn) * u) % tn,
                    p = (eX(f, t, tn) * c) % tn;
                  return { pow_p_5_8: (eX(p, tc, tn) * e) % tn, b2: n };
                })(e * eZ(i * i * t, tn)).pow_p_5_8,
                s = eZ(e * i * r, tn),
                n = eZ(t * s * s, tn),
                o = s,
                a = eZ(s * to, tn),
                c = n === e,
                l = n === eZ(-e, tn),
                h = n === eZ(-e * to, tn);
              return (
                c && (s = o),
                (l || h) && (s = a),
                (eZ(s, tn) & eV) === eV && (s = eZ(-s, tn)),
                { isValid: c || l, value: s }
              );
            },
          }),
          tf = "base64url",
          tp = "utf8",
          tg = "utf8",
          ty = "base58btc";
        function tb(e) {
          return null != globalThis.Buffer
            ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
            : e;
        }
        function tm() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return null != globalThis.Buffer &&
            null != globalThis.Buffer.allocUnsafe
            ? tb(globalThis.Buffer.allocUnsafe(e))
            : new Uint8Array(e);
        }
        function tv(e, t) {
          t || (t = e.reduce((e, t) => e + t.length, 0));
          let i = tm(t),
            r = 0;
          for (let t of e) i.set(t, r), (r += t.length);
          return tb(i);
        }
        var tw = function (e, t) {
          if (e.length >= 255) throw TypeError("Alphabet too long");
          for (var i = new Uint8Array(256), r = 0; r < i.length; r++)
            i[r] = 255;
          for (var s = 0; s < e.length; s++) {
            var n = e.charAt(s),
              o = n.charCodeAt(0);
            if (255 !== i[o]) throw TypeError(n + " is ambiguous");
            i[o] = s;
          }
          var a = e.length,
            c = e.charAt(0),
            l = Math.log(a) / Math.log(256),
            h = Math.log(256) / Math.log(a);
          function u(e) {
            if ("string" != typeof e) throw TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (" " !== e[0]) {
              for (var r = 0, s = 0; e[t] === c; ) r++, t++;
              for (
                var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n);
                e[t];

              ) {
                var h = i[e.charCodeAt(t)];
                if (255 === h) return;
                for (
                  var u = 0, d = n - 1;
                  (0 !== h || u < s) && -1 !== d;
                  d--, u++
                )
                  (h += (a * o[d]) >>> 0),
                    (o[d] = h % 256 >>> 0),
                    (h = (h / 256) >>> 0);
                if (0 !== h) throw Error("Non-zero carry");
                (s = u), t++;
              }
              if (" " !== e[t]) {
                for (var f = n - s; f !== n && 0 === o[f]; ) f++;
                for (var p = new Uint8Array(r + (n - f)), g = r; f !== n; )
                  p[g++] = o[f++];
                return p;
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (
                var i = 0, r = 0, s = 0, n = t.length;
                s !== n && 0 === t[s];

              )
                s++, i++;
              for (
                var o = ((n - s) * h + 1) >>> 0, l = new Uint8Array(o);
                s !== n;

              ) {
                for (
                  var u = t[s], d = 0, f = o - 1;
                  (0 !== u || d < r) && -1 !== f;
                  f--, d++
                )
                  (u += (256 * l[f]) >>> 0),
                    (l[f] = u % a >>> 0),
                    (u = (u / a) >>> 0);
                if (0 !== u) throw Error("Non-zero carry");
                (r = d), s++;
              }
              for (var p = o - r; p !== o && 0 === l[p]; ) p++;
              for (var g = c.repeat(i); p < o; ++p) g += e.charAt(l[p]);
              return g;
            },
            decodeUnsafe: u,
            decode: function (e) {
              var i = u(e);
              if (i) return i;
              throw Error("Non-".concat(t, " character"));
            },
          };
        };
        let tE = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error("Unknown type, must be binary type");
        };
        class tx {
          encode(e) {
            if (e instanceof Uint8Array)
              return "".concat(this.prefix).concat(this.baseEncode(e));
            throw Error("Unknown type, must be binary type");
          }
          constructor(e, t, i) {
            (this.name = e), (this.prefix = t), (this.baseEncode = i);
          }
        }
        class tI {
          decode(e) {
            if ("string" == typeof e) {
              if (e.codePointAt(0) !== this.prefixCodePoint)
                throw Error(
                  "Unable to decode multibase string "
                    .concat(JSON.stringify(e), ", ")
                    .concat(
                      this.name,
                      " decoder only supports inputs prefixed with "
                    )
                    .concat(this.prefix)
                );
              return this.baseDecode(e.slice(this.prefix.length));
            }
            throw Error("Can only multibase decode strings");
          }
          or(e) {
            return tD(this, e);
          }
          constructor(e, t, i) {
            if (
              ((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0))
            )
              throw Error("Invalid prefix character");
            (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
          }
        }
        class t_ {
          or(e) {
            return tD(this, e);
          }
          decode(e) {
            let t = e[0],
              i = this.decoders[t];
            if (i) return i.decode(e);
            throw RangeError(
              "Unable to decode multibase string "
                .concat(JSON.stringify(e), ", only inputs prefixed with ")
                .concat(Object.keys(this.decoders), " are supported")
            );
          }
          constructor(e) {
            this.decoders = e;
          }
        }
        let tD = (e, t) =>
          new t_({
            ...(e.decoders || { [e.prefix]: e }),
            ...(t.decoders || { [t.prefix]: t }),
          });
        class tS {
          encode(e) {
            return this.encoder.encode(e);
          }
          decode(e) {
            return this.decoder.decode(e);
          }
          constructor(e, t, i, r) {
            (this.name = e),
              (this.prefix = t),
              (this.baseEncode = i),
              (this.baseDecode = r),
              (this.encoder = new tx(e, t, i)),
              (this.decoder = new tI(e, t, r));
          }
        }
        let tP = (e) => {
            let { name: t, prefix: i, encode: r, decode: s } = e;
            return new tS(t, i, r, s);
          },
          tA = (e) => {
            let { prefix: t, name: i, alphabet: r } = e,
              { encode: s, decode: n } = tw(r, i);
            return tP({
              prefix: t,
              name: i,
              encode: s,
              decode: (e) => tE(n(e)),
            });
          },
          tO = (e) => {
            let { name: t, prefix: i, bitsPerChar: r, alphabet: s } = e;
            return tP({
              prefix: i,
              name: t,
              encode: (e) =>
                ((e, t, i) => {
                  let r = "=" === t[t.length - 1],
                    s = (1 << i) - 1,
                    n = "",
                    o = 0,
                    a = 0;
                  for (let r = 0; r < e.length; ++r)
                    for (a = (a << 8) | e[r], o += 8; o > i; )
                      (o -= i), (n += t[s & (a >> o)]);
                  if ((o && (n += t[s & (a << (i - o))]), r))
                    for (; (n.length * i) & 7; ) n += "=";
                  return n;
                })(e, s, r),
              decode: (e) =>
                ((e, t, i, r) => {
                  let s = {};
                  for (let e = 0; e < t.length; ++e) s[t[e]] = e;
                  let n = e.length;
                  for (; "=" === e[n - 1]; ) --n;
                  let o = new Uint8Array(((n * i) / 8) | 0),
                    a = 0,
                    c = 0,
                    l = 0;
                  for (let t = 0; t < n; ++t) {
                    let n = s[e[t]];
                    if (void 0 === n)
                      throw SyntaxError("Non-".concat(r, " character"));
                    (c = (c << i) | n),
                      (a += i) >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
                  }
                  if (a >= i || 255 & (c << (8 - a)))
                    throw SyntaxError("Unexpected end of data");
                  return o;
                })(e, s, r, t),
            });
          };
        var tC = Object.freeze({
            __proto__: null,
            identity: tP({
              prefix: "\0",
              name: "identity",
              encode: (e) => new TextDecoder().decode(e),
              decode: (e) => new TextEncoder().encode(e),
            }),
          }),
          tT = Object.freeze({
            __proto__: null,
            base2: tO({
              prefix: "0",
              name: "base2",
              alphabet: "01",
              bitsPerChar: 1,
            }),
          }),
          tN = Object.freeze({
            __proto__: null,
            base8: tO({
              prefix: "7",
              name: "base8",
              alphabet: "01234567",
              bitsPerChar: 3,
            }),
          }),
          tU = Object.freeze({
            __proto__: null,
            base10: tA({ prefix: "9", name: "base10", alphabet: "0123456789" }),
          }),
          tR = Object.freeze({
            __proto__: null,
            base16: tO({
              prefix: "f",
              name: "base16",
              alphabet: "0123456789abcdef",
              bitsPerChar: 4,
            }),
            base16upper: tO({
              prefix: "F",
              name: "base16upper",
              alphabet: "0123456789ABCDEF",
              bitsPerChar: 4,
            }),
          });
        let tB = tO({
            prefix: "b",
            name: "base32",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567",
            bitsPerChar: 5,
          }),
          tk = tO({
            prefix: "B",
            name: "base32upper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
            bitsPerChar: 5,
          }),
          tj = tO({
            prefix: "c",
            name: "base32pad",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
            bitsPerChar: 5,
          }),
          tL = tO({
            prefix: "C",
            name: "base32padupper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
            bitsPerChar: 5,
          }),
          tq = tO({
            prefix: "v",
            name: "base32hex",
            alphabet: "0123456789abcdefghijklmnopqrstuv",
            bitsPerChar: 5,
          }),
          tM = tO({
            prefix: "V",
            name: "base32hexupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
            bitsPerChar: 5,
          }),
          tz = tO({
            prefix: "t",
            name: "base32hexpad",
            alphabet: "0123456789abcdefghijklmnopqrstuv=",
            bitsPerChar: 5,
          });
        var tF = Object.freeze({
            __proto__: null,
            base32: tB,
            base32upper: tk,
            base32pad: tj,
            base32padupper: tL,
            base32hex: tq,
            base32hexupper: tM,
            base32hexpad: tz,
            base32hexpadupper: tO({
              prefix: "T",
              name: "base32hexpadupper",
              alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
              bitsPerChar: 5,
            }),
            base32z: tO({
              prefix: "h",
              name: "base32z",
              alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
              bitsPerChar: 5,
            }),
          }),
          tH = Object.freeze({
            __proto__: null,
            base36: tA({
              prefix: "k",
              name: "base36",
              alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
            }),
            base36upper: tA({
              prefix: "K",
              name: "base36upper",
              alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            }),
          }),
          tV = Object.freeze({
            __proto__: null,
            base58btc: tA({
              name: "base58btc",
              prefix: "z",
              alphabet:
                "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
            }),
            base58flickr: tA({
              name: "base58flickr",
              prefix: "Z",
              alphabet:
                "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
            }),
          });
        let tK = tO({
            prefix: "m",
            name: "base64",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            bitsPerChar: 6,
          }),
          tW = tO({
            prefix: "M",
            name: "base64pad",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            bitsPerChar: 6,
          });
        var tG = Object.freeze({
          __proto__: null,
          base64: tK,
          base64pad: tW,
          base64url: tO({
            prefix: "u",
            name: "base64url",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            bitsPerChar: 6,
          }),
          base64urlpad: tO({
            prefix: "U",
            name: "base64urlpad",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
            bitsPerChar: 6,
          }),
        });
        let tY = Array.from(
            "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
          ),
          tJ = tY.reduce((e, t, i) => ((e[i] = t), e), []),
          tZ = tY.reduce((e, t, i) => ((e[t.codePointAt(0)] = i), e), []);
        var tX = Object.freeze({
          __proto__: null,
          base256emoji: tP({
            prefix: "🚀",
            name: "base256emoji",
            encode: function (e) {
              return e.reduce((e, t) => (e += tJ[t]), "");
            },
            decode: function (e) {
              let t = [];
              for (let i of e) {
                let e = tZ[i.codePointAt(0)];
                if (void 0 === e)
                  throw Error("Non-base256emoji character: ".concat(i));
                t.push(e);
              }
              return new Uint8Array(t);
            },
          }),
        });
        function tQ(e, t, i) {
          (t = t || []), (i = i || 0);
          for (var r = i; e >= 0x80000000; )
            (t[i++] = (255 & e) | 128), (e /= 128);
          for (; -128 & e; ) (t[i++] = (255 & e) | 128), (e >>>= 7);
          return (t[i] = 0 | e), (tQ.bytes = i - r + 1), t;
        }
        var t$ = {
          encode: tQ,
          encodingLength: function (e) {
            return e < 128
              ? 1
              : e < 16384
              ? 2
              : e < 2097152
              ? 3
              : e < 0x10000000
              ? 4
              : e < 0x800000000
              ? 5
              : e < 0x40000000000
              ? 6
              : e < 0x2000000000000
              ? 7
              : e < 0x100000000000000
              ? 8
              : e < 0x8000000000000000
              ? 9
              : 10;
          },
        };
        let t0 = function (e, t) {
            let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
            return t$.encode(e, t, i), t;
          },
          t1 = (e) => t$.encodingLength(e),
          t2 = (e, t) => {
            let i = t.byteLength,
              r = t1(e),
              s = r + t1(i),
              n = new Uint8Array(s + i);
            return t0(e, n, 0), t0(i, n, r), n.set(t, s), new t8(e, i, t, n);
          };
        class t8 {
          constructor(e, t, i, r) {
            (this.code = e),
              (this.size = t),
              (this.digest = i),
              (this.bytes = r);
          }
        }
        let t3 = (e) => {
          let { name: t, code: i, encode: r } = e;
          return new t6(t, i, r);
        };
        class t6 {
          digest(e) {
            if (e instanceof Uint8Array) {
              let t = this.encode(e);
              return t instanceof Uint8Array
                ? t2(this.code, t)
                : t.then((e) => t2(this.code, e));
            }
            throw Error("Unknown type, must be binary type");
          }
          constructor(e, t, i) {
            (this.name = e), (this.code = t), (this.encode = i);
          }
        }
        let t5 = (e) => async (t) =>
          new Uint8Array(await crypto.subtle.digest(e, t));
        var t4 = Object.freeze({
            __proto__: null,
            sha256: t3({ name: "sha2-256", code: 18, encode: t5("SHA-256") }),
            sha512: t3({ name: "sha2-512", code: 19, encode: t5("SHA-512") }),
          }),
          t9 = Object.freeze({
            __proto__: null,
            identity: {
              code: 0,
              name: "identity",
              encode: tE,
              digest: (e) => t2(0, tE(e)),
            },
          });
        new TextEncoder(), new TextDecoder();
        let t7 = {
          ...tC,
          ...tT,
          ...tN,
          ...tU,
          ...tR,
          ...tF,
          ...tH,
          ...tV,
          ...tG,
          ...tX,
        };
        function ie(e, t, i, r) {
          return {
            name: e,
            prefix: t,
            encoder: { name: e, prefix: t, encode: i },
            decoder: { decode: r },
          };
        }
        ({ ...t4, ...t9 });
        let it = ie(
            "utf8",
            "u",
            (e) => "u" + new TextDecoder("utf8").decode(e),
            (e) => new TextEncoder().encode(e.substring(1))
          ),
          ii = ie(
            "ascii",
            "a",
            (e) => {
              let t = "a";
              for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
              return t;
            },
            (e) => {
              let t = tm((e = e.substring(1)).length);
              for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
              return t;
            }
          ),
          ir = {
            utf8: it,
            "utf-8": it,
            hex: t7.base16,
            latin1: ii,
            ascii: ii,
            binary: ii,
            ...t7,
          };
        function is(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "utf8",
            i = ir[t];
          if (!i) throw Error('Unsupported encoding "'.concat(t, '"'));
          return ("utf8" === t || "utf-8" === t) &&
            null != globalThis.Buffer &&
            null != globalThis.Buffer.from
            ? globalThis.Buffer.from(
                e.buffer,
                e.byteOffset,
                e.byteLength
              ).toString("utf8")
            : i.encoder.encode(e).substring(1);
        }
        function io(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "utf8",
            i = ir[t];
          if (!i) throw Error('Unsupported encoding "'.concat(t, '"'));
          return ("utf8" === t || "utf-8" === t) &&
            null != globalThis.Buffer &&
            null != globalThis.Buffer.from
            ? tb(globalThis.Buffer.from(e, "utf-8"))
            : i.decoder.decode("".concat(i.prefix).concat(e));
        }
        function ia(e) {
          return (0, A.safeJsonParse)(is(io(e, tf), tp));
        }
        function ic(e) {
          return is(io((0, A.safeJsonStringify)(e), tp), tf);
        }
        function il(e) {
          return ["did", "key", "z" + is(tv([io("K36", ty), e]), ty)].join(":");
        }
        function ih(e) {
          let t = e.split("."),
            i = ia(t[0]),
            r = ia(t[1]);
          return {
            header: i,
            payload: r,
            signature: io(t[2], tf),
            data: io(t.slice(0, 2).join("."), tg),
          };
        }
        function iu() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : eh(32),
            t = td.getPublicKey(e);
          return { secretKey: tv([e, t]), publicKey: t };
        }
        async function id(e, t, i, r) {
          let s =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : (0, o.fromMiliseconds)(Date.now()),
            n = { alg: "EdDSA", typ: "JWT" },
            a = { iss: il(r.publicKey), sub: e, aud: t, iat: s, exp: s + i },
            c = io(
              [ic((l = { header: n, payload: a }).header), ic(l.payload)].join(
                "."
              ),
              tg
            );
          var l,
            h = {
              header: n,
              payload: a,
              signature: td.sign(c, r.secretKey.slice(0, 32)),
            };
          return [ic(h.header), ic(h.payload), is(h.signature, tf)].join(".");
        }
        var ip = function (e, t, i) {
            if (i || 2 == arguments.length)
              for (var r, s = 0, n = t.length; s < n; s++)
                (!r && s in t) ||
                  (r || (r = Array.prototype.slice.call(t, 0, s)),
                  (r[s] = t[s]));
            return e.concat(r || Array.prototype.slice.call(t));
          },
          ig = function (e, t, i) {
            (this.name = e),
              (this.version = t),
              (this.os = i),
              (this.type = "browser");
          },
          iy = function (e) {
            (this.version = e),
              (this.type = "node"),
              (this.name = "node"),
              (this.os = s.default.platform);
          },
          ib = function (e, t, i, r) {
            (this.name = e),
              (this.version = t),
              (this.os = i),
              (this.bot = r),
              (this.type = "bot-device");
          },
          im = function () {
            (this.type = "bot"),
              (this.bot = !0),
              (this.name = "bot"),
              (this.version = null),
              (this.os = null);
          },
          iv = function () {
            (this.type = "react-native"),
              (this.name = "react-native"),
              (this.version = null),
              (this.os = null);
          },
          iw =
            /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
          iE = [
            ["aol", /AOLShield\/([0-9\._]+)/],
            ["edge", /Edge\/([0-9\._]+)/],
            ["edge-ios", /EdgiOS\/([0-9\._]+)/],
            ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
            ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
            ["samsung", /SamsungBrowser\/([0-9\.]+)/],
            ["silk", /\bSilk\/([0-9._-]+)\b/],
            ["miui", /MiuiBrowser\/([0-9\.]+)$/],
            ["beaker", /BeakerBrowser\/([0-9\.]+)/],
            ["edge-chromium", /EdgA?\/([0-9\.]+)/],
            [
              "chromium-webview",
              /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
            ],
            ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
            ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
            ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
            ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
            ["fxios", /FxiOS\/([0-9\.]+)/],
            ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
            ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
            ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
            ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
            [
              "pie",
              /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
            ],
            ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
            ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
            ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
            ["ie", /MSIE\s(7\.0)/],
            ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
            ["android", /Android\s([0-9\.]+)/],
            ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
            ["safari", /Version\/([0-9\._]+).*Safari/],
            ["facebook", /FB[AS]V\/([0-9\.]+)/],
            ["instagram", /Instagram\s([0-9\.]+)/],
            ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
            ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
            ["curl", /^curl\/([0-9\.]+)$/],
            [
              "searchbot",
              /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
            ],
          ],
          ix = [
            ["iOS", /iP(hone|od|ad)/],
            ["Android OS", /Android/],
            ["BlackBerry OS", /BlackBerry|BB10/],
            ["Windows Mobile", /IEMobile/],
            ["Amazon OS", /Kindle/],
            ["Windows 3.11", /Win16/],
            ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
            ["Windows 98", /(Windows 98)|(Win98)/],
            ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
            ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
            ["Windows Server 2003", /(Windows NT 5.2)/],
            ["Windows Vista", /(Windows NT 6.0)/],
            ["Windows 7", /(Windows NT 6.1)/],
            ["Windows 8", /(Windows NT 6.2)/],
            ["Windows 8.1", /(Windows NT 6.3)/],
            ["Windows 10", /(Windows NT 10.0)/],
            ["Windows ME", /Windows ME/],
            [
              "Windows CE",
              /Windows CE|WinCE|Microsoft Pocket Internet Explorer/,
            ],
            ["Open BSD", /OpenBSD/],
            ["Sun OS", /SunOS/],
            ["Chrome OS", /CrOS/],
            ["Linux", /(Linux)|(X11)/],
            ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
            ["QNX", /QNX/],
            ["BeOS", /BeOS/],
            ["OS/2", /OS\/2/],
          ],
          iI = e.i(995330),
          i_ = e.i(668021);
        let iD = "2.31.0",
          iS = {
            getDocsUrl: (e) => {
              let { docsBaseUrl: t, docsPath: i = "", docsSlug: r } = e;
              return i
                ? ""
                    .concat(null != t ? t : "https://viem.sh")
                    .concat(i)
                    .concat(r ? "#".concat(r) : "")
                : void 0;
            },
            version: "viem@".concat(iD),
          };
        class iP extends Error {
          walk(e) {
            return (function e(t, i) {
              return (null == i ? void 0 : i(t))
                ? t
                : t &&
                  "object" == typeof t &&
                  "cause" in t &&
                  void 0 !== t.cause
                ? e(t.cause, i)
                : i
                ? null
                : t;
            })(this, e);
          }
          constructor(e, t = {}) {
            var i, r;
            let s = (() => {
                var e;
                return t.cause instanceof iP
                  ? t.cause.details
                  : (null == (e = t.cause) ? void 0 : e.message)
                  ? t.cause.message
                  : t.details;
              })(),
              n = (t.cause instanceof iP && t.cause.docsPath) || t.docsPath,
              o =
                null == (i = iS.getDocsUrl)
                  ? void 0
                  : i.call(iS, { ...t, docsPath: n });
            super(
              [
                e || "An error occurred.",
                "",
                ...(t.metaMessages ? [...t.metaMessages, ""] : []),
                ...(o ? ["Docs: ".concat(o)] : []),
                ...(s ? ["Details: ".concat(s)] : []),
                ...(iS.version ? ["Version: ".concat(iS.version)] : []),
              ].join("\n"),
              t.cause ? { cause: t.cause } : void 0
            ),
              Object.defineProperty(this, "details", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "docsPath", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "metaMessages", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "shortMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "version", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "BaseError",
              }),
              (this.details = s),
              (this.docsPath = n),
              (this.metaMessages = t.metaMessages),
              (this.name = null != (r = t.name) ? r : this.name),
              (this.shortMessage = e),
              (this.version = iD);
          }
        }
        function iA(e) {
          let { strict: t = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (
            !!e &&
            "string" == typeof e &&
            (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
          );
        }
        class iO extends iP {
          constructor({ size: e, targetSize: t, type: i }) {
            super(
              ""
                .concat(i.charAt(0).toUpperCase())
                .concat(i.slice(1).toLowerCase(), " size (")
                .concat(e, ") exceeds padding size (")
                .concat(t, ")."),
              { name: "SizeExceedsPaddingSizeError" }
            );
          }
        }
        function iC(e) {
          let { dir: t, size: i = 32 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return "string" == typeof e
            ? (function (e) {
                let { dir: t, size: i = 32 } =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                if (null === i) return e;
                let r = e.replace("0x", "");
                if (r.length > 2 * i)
                  throw new iO({
                    size: Math.ceil(r.length / 2),
                    targetSize: i,
                    type: "hex",
                  });
                return "0x".concat(
                  r["right" === t ? "padEnd" : "padStart"](2 * i, "0")
                );
              })(e, { dir: t, size: i })
            : (function (e) {
                let { dir: t, size: i = 32 } =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                if (null === i) return e;
                if (e.length > i)
                  throw new iO({
                    size: e.length,
                    targetSize: i,
                    type: "bytes",
                  });
                let r = new Uint8Array(i);
                for (let s = 0; s < i; s++) {
                  let n = "right" === t;
                  r[n ? s : i - s - 1] = e[n ? s : e.length - s - 1];
                }
                return r;
              })(e, { dir: t, size: i });
        }
        class iT extends iP {
          constructor({ max: e, min: t, signed: i, size: r, value: s }) {
            super(
              'Number "'
                .concat(s, '" is not in safe ')
                .concat(
                  r
                    ? ""
                        .concat(8 * r, "-bit ")
                        .concat(i ? "signed" : "unsigned", " ")
                    : "",
                  "integer range "
                )
                .concat(
                  e
                    ? "(".concat(t, " to ").concat(e, ")")
                    : "(above ".concat(t, ")")
                ),
              { name: "IntegerOutOfRangeError" }
            );
          }
        }
        class iN extends iP {
          constructor({ givenSize: e, maxSize: t }) {
            super(
              "Size cannot exceed "
                .concat(t, " bytes. Given size: ")
                .concat(e, " bytes."),
              { name: "SizeOverflowError" }
            );
          }
        }
        function iU(e) {
          return iA(e, { strict: !1 })
            ? Math.ceil((e.length - 2) / 2)
            : e.length;
        }
        function iR(e, t) {
          let { size: i } = t;
          if (iU(e) > i) throw new iN({ givenSize: iU(e), maxSize: i });
        }
        function iB(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { signed: i } = t;
          t.size && iR(e, { size: t.size });
          let r = BigInt(e);
          if (!i) return r;
          let s = (e.length - 2) / 2;
          return r <= (1n << (8n * BigInt(s) - 1n)) - 1n
            ? r
            : r - BigInt("0x".concat("f".padStart(2 * s, "f"))) - 1n;
        }
        let ik = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
        function ij(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return "number" == typeof e || "bigint" == typeof e
            ? iq(e, t)
            : "string" == typeof e
            ? (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return iL(iM.encode(e), t);
              })(e, t)
            : "boolean" == typeof e
            ? (function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  i = "0x".concat(Number(e));
                return "number" == typeof t.size
                  ? (iR(i, { size: t.size }), iC(i, { size: t.size }))
                  : i;
              })(e, t)
            : iL(e, t);
        }
        function iL(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            i = "";
          for (let t = 0; t < e.length; t++) i += ik[e[t]];
          let r = "0x".concat(i);
          return "number" == typeof t.size
            ? (iR(r, { size: t.size }), iC(r, { dir: "right", size: t.size }))
            : r;
        }
        function iq(e) {
          let t,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { signed: r, size: s } = i,
            n = BigInt(e);
          s
            ? (t = r
                ? (1n << (8n * BigInt(s) - 1n)) - 1n
                : 2n ** (8n * BigInt(s)) - 1n)
            : "number" == typeof e && (t = BigInt(Number.MAX_SAFE_INTEGER));
          let o = "bigint" == typeof t && r ? -t - 1n : 0;
          if ((t && n > t) || n < o) {
            let i = "bigint" == typeof e ? "n" : "";
            throw new iT({
              max: t ? "".concat(t).concat(i) : void 0,
              min: "".concat(o).concat(i),
              signed: r,
              size: s,
              value: "".concat(e).concat(i),
            });
          }
          let a = "0x".concat(
            (r && n < 0 ? (1n << BigInt(8 * s)) + BigInt(n) : n).toString(16)
          );
          return s ? iC(a, { size: s }) : a;
        }
        let iM = new TextEncoder(),
          iz = new TextEncoder(),
          iF = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
        function iH(e) {
          return e >= iF.zero && e <= iF.nine
            ? e - iF.zero
            : e >= iF.A && e <= iF.F
            ? e - (iF.A - 10)
            : e >= iF.a && e <= iF.f
            ? e - (iF.a - 10)
            : void 0;
        }
        function iV(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            i = e;
          t.size &&
            (iR(i, { size: t.size }),
            (i = iC(i, { dir: "right", size: t.size })));
          let r = i.slice(2);
          r.length % 2 && (r = "0".concat(r));
          let s = r.length / 2,
            n = new Uint8Array(s);
          for (let e = 0, t = 0; e < s; e++) {
            let i = iH(r.charCodeAt(t++)),
              s = iH(r.charCodeAt(t++));
            if (void 0 === i || void 0 === s)
              throw new iP(
                'Invalid byte sequence ("'
                  .concat(r[t - 2])
                  .concat(r[t - 1], '" in "')
                  .concat(r, '").')
              );
            n[e] = 16 * i + s;
          }
          return n;
        }
        function iK(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            i = iz.encode(e);
          return "number" == typeof t.size
            ? (iR(i, { size: t.size }), iC(i, { dir: "right", size: t.size }))
            : i;
        }
        var iW = e.i(804799);
        function iG(e, t) {
          let i = (0, iW.keccak_256)(
            iA(e, { strict: !1 })
              ? (function (e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return "number" == typeof e || "bigint" == typeof e
                    ? iV(iq(e, t))
                    : "boolean" == typeof e
                    ? (function (e) {
                        let t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          i = new Uint8Array(1);
                        return ((i[0] = Number(e)), "number" == typeof t.size)
                          ? (iR(i, { size: t.size }), iC(i, { size: t.size }))
                          : i;
                      })(e, t)
                    : iA(e)
                    ? iV(e, t)
                    : iK(e, t);
                })(e)
              : e
          );
          return "bytes" === (t || "hex") ? i : ij(i);
        }
        class iY extends Map {
          get(e) {
            let t = super.get(e);
            return (
              super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)),
              t
            );
          }
          set(e, t) {
            if ((super.set(e, t), this.maxSize && this.size > this.maxSize)) {
              let e = this.keys().next().value;
              e && this.delete(e);
            }
            return this;
          }
          constructor(e) {
            super(),
              Object.defineProperty(this, "maxSize", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.maxSize = e);
          }
        }
        let iJ = new iY(8192);
        async function iZ(t) {
          let { hash: i, signature: r } = t,
            s = iA(i) ? i : ij(i),
            { secp256k1: n } = await e.r(339753)(e.i),
            o = (() => {
              if ("object" == typeof r && "r" in r && "s" in r) {
                let { r: e, s: t, v: i, yParity: s } = r,
                  o = iX(Number(null != s ? s : i));
                return new n.Signature(iB(e), iB(t)).addRecoveryBit(o);
              }
              let e = iA(r) ? r : ij(r);
              if (65 !== iU(e)) throw Error("invalid signature length");
              let t = iX(
                (function (e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return Number(iB(e, t));
                })("0x".concat(e.slice(130)))
              );
              return n.Signature.fromCompact(
                e.substring(2, 130)
              ).addRecoveryBit(t);
            })()
              .recoverPublicKey(s.substring(2))
              .toHex(!1);
          return "0x".concat(o);
        }
        function iX(e) {
          if (0 === e || 1 === e) return e;
          if (27 === e) return 0;
          if (28 === e) return 1;
          throw Error("Invalid yParityOrV value");
        }
        async function iQ(e) {
          let { hash: t, signature: i } = e;
          var r = await iZ({ hash: t, signature: i });
          let s = iG("0x".concat(r.substring(4))).substring(26);
          return (function (e, t) {
            if (iJ.has("".concat(e, ".").concat(void 0)))
              return iJ.get("".concat(e, ".").concat(void 0));
            let i = t
                ? "".concat(t).concat(e.toLowerCase())
                : e.substring(2).toLowerCase(),
              r = iG(iK(i), "bytes"),
              s = (t ? i.substring("".concat(t, "0x").length) : i).split("");
            for (let e = 0; e < 40; e += 2)
              r[e >> 1] >> 4 >= 8 && s[e] && (s[e] = s[e].toUpperCase()),
                (15 & r[e >> 1]) >= 8 &&
                  s[e + 1] &&
                  (s[e + 1] = s[e + 1].toUpperCase());
            let n = "0x".concat(s.join(""));
            return iJ.set("".concat(e, ".").concat(t), n), n;
          })("0x".concat(s));
        }
        e.s({ default: () => i$ }, 321620);
        let i$ = (function (e) {
          if (e.length >= 255) throw TypeError("Alphabet too long");
          let t = new Uint8Array(256);
          for (let e = 0; e < t.length; e++) t[e] = 255;
          for (let i = 0; i < e.length; i++) {
            let r = e.charAt(i),
              s = r.charCodeAt(0);
            if (255 !== t[s]) throw TypeError(r + " is ambiguous");
            t[s] = i;
          }
          let i = e.length,
            r = e.charAt(0),
            s = Math.log(i) / Math.log(256),
            n = Math.log(256) / Math.log(i);
          function o(e) {
            if ("string" != typeof e) throw TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            let n = 0,
              o = 0,
              a = 0;
            for (; e[n] === r; ) o++, n++;
            let c = ((e.length - n) * s + 1) >>> 0,
              l = new Uint8Array(c);
            for (; n < e.length; ) {
              let r = e.charCodeAt(n);
              if (r > 255) return;
              let s = t[r];
              if (255 === s) return;
              let o = 0;
              for (let e = c - 1; (0 !== s || o < a) && -1 !== e; e--, o++)
                (s += (i * l[e]) >>> 0),
                  (l[e] = s % 256 >>> 0),
                  (s = (s / 256) >>> 0);
              if (0 !== s) throw Error("Non-zero carry");
              (a = o), n++;
            }
            let h = c - a;
            for (; h !== c && 0 === l[h]; ) h++;
            let u = new Uint8Array(o + (c - h)),
              d = o;
            for (; h !== c; ) u[d++] = l[h++];
            return u;
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              let s = 0,
                o = 0,
                a = 0,
                c = t.length;
              for (; a !== c && 0 === t[a]; ) a++, s++;
              let l = ((c - a) * n + 1) >>> 0,
                h = new Uint8Array(l);
              for (; a !== c; ) {
                let e = t[a],
                  r = 0;
                for (let t = l - 1; (0 !== e || r < o) && -1 !== t; t--, r++)
                  (e += (256 * h[t]) >>> 0),
                    (h[t] = e % i >>> 0),
                    (e = (e / i) >>> 0);
                if (0 !== e) throw Error("Non-zero carry");
                (o = r), a++;
              }
              let u = l - o;
              for (; u !== l && 0 === h[u]; ) u++;
              let d = r.repeat(s);
              for (; u < l; ++u) d += e.charAt(h[u]);
              return d;
            },
            decodeUnsafe: o,
            decode: function (e) {
              let t = o(e);
              if (t) return t;
              throw Error("Non-base" + i + " character");
            },
          };
        })("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
        function i0(e) {
          return ""
            .concat(e < 0 ? "-" : "", "0x")
            .concat(Math.abs(e).toString(16).padStart(2, "0"));
        }
        class i1 {
          constructor(e, t) {
            (this.type = e), (this.data = t);
          }
        }
        class i2 extends Error {
          constructor(e) {
            super(e),
              Object.setPrototypeOf(this, Object.create(i2.prototype)),
              Object.defineProperty(this, "name", {
                configurable: !0,
                enumerable: !1,
                value: i2.name,
              });
          }
        }
        function i8(e, t, i) {
          let r = Math.floor(i / 0x100000000);
          e.setUint32(t, r), e.setUint32(t + 4, i);
        }
        function i3(e, t) {
          return 0x100000000 * e.getInt32(t) + e.getUint32(t + 4);
        }
        let i6 = {
          type: -1,
          encode: function (e) {
            return e instanceof Date
              ? (function (e) {
                  let { sec: t, nsec: i } = e;
                  if (t >= 0 && i >= 0 && t <= 0x3ffffffff)
                    if (0 === i && t <= 0xffffffff) {
                      let e = new Uint8Array(4);
                      return new DataView(e.buffer).setUint32(0, t), e;
                    } else {
                      let e = t / 0x100000000,
                        r = new Uint8Array(8),
                        s = new DataView(r.buffer);
                      return (
                        s.setUint32(0, (i << 2) | (3 & e)),
                        s.setUint32(4, 0 | t),
                        r
                      );
                    }
                  {
                    let e = new Uint8Array(12),
                      r = new DataView(e.buffer);
                    return r.setUint32(0, i), i8(r, 4, t), e;
                  }
                })(
                  (function (e) {
                    let t = e.getTime(),
                      i = Math.floor(t / 1e3),
                      r = (t - 1e3 * i) * 1e6,
                      s = Math.floor(r / 1e9);
                    return { sec: i + s, nsec: r - 1e9 * s };
                  })(e)
                )
              : null;
          },
          decode: function (e) {
            let t = (function (e) {
              let t = new DataView(e.buffer, e.byteOffset, e.byteLength);
              switch (e.byteLength) {
                case 4:
                  return { sec: t.getUint32(0), nsec: 0 };
                case 8: {
                  let e = t.getUint32(0);
                  return {
                    sec: (3 & e) * 0x100000000 + t.getUint32(4),
                    nsec: e >>> 2,
                  };
                }
                case 12:
                  return { sec: i3(t, 4), nsec: t.getUint32(0) };
                default:
                  throw new i2(
                    "Unrecognized data size for timestamp (expected 4, 8, or 12): ".concat(
                      e.length
                    )
                  );
              }
            })(e);
            return new Date(1e3 * t.sec + t.nsec / 1e6);
          },
        };
        class i5 {
          register(e) {
            let { type: t, encode: i, decode: r } = e;
            if (t >= 0) (this.encoders[t] = i), (this.decoders[t] = r);
            else {
              let e = -1 - t;
              (this.builtInEncoders[e] = i), (this.builtInDecoders[e] = r);
            }
          }
          tryToEncode(e, t) {
            for (let i = 0; i < this.builtInEncoders.length; i++) {
              let r = this.builtInEncoders[i];
              if (null != r) {
                let s = r(e, t);
                if (null != s) return new i1(-1 - i, s);
              }
            }
            for (let i = 0; i < this.encoders.length; i++) {
              let r = this.encoders[i];
              if (null != r) {
                let s = r(e, t);
                if (null != s) return new i1(i, s);
              }
            }
            return e instanceof i1 ? e : null;
          }
          decode(e, t, i) {
            let r = t < 0 ? this.builtInDecoders[-1 - t] : this.decoders[t];
            return r ? r(e, t, i) : new i1(t, e);
          }
          constructor() {
            (this.builtInEncoders = []),
              (this.builtInDecoders = []),
              (this.encoders = []),
              (this.decoders = []),
              this.register(i6);
          }
        }
        i5.defaultCodec = new i5();
        let i4 = new TextEncoder();
        function i9(e, t, i) {
          let r = t,
            s = r + i,
            n = [],
            o = "";
          for (; r < s; ) {
            let t = e[r++];
            if ((128 & t) == 0) n.push(t);
            else if ((224 & t) == 192) {
              let i = 63 & e[r++];
              n.push(((31 & t) << 6) | i);
            } else if ((240 & t) == 224) {
              let i = 63 & e[r++],
                s = 63 & e[r++];
              n.push(((31 & t) << 12) | (i << 6) | s);
            } else if ((248 & t) == 240) {
              let i = 63 & e[r++],
                s =
                  ((7 & t) << 18) |
                  (i << 12) |
                  ((63 & e[r++]) << 6) |
                  (63 & e[r++]);
              s > 65535 &&
                ((s -= 65536),
                n.push(((s >>> 10) & 1023) | 55296),
                (s = 56320 | (1023 & s))),
                n.push(s);
            } else n.push(t);
            n.length >= 4096 &&
              ((o += String.fromCharCode(...n)), (n.length = 0));
          }
          return n.length > 0 && (o += String.fromCharCode(...n)), o;
        }
        let i7 = new TextDecoder();
        function re(e) {
          return e instanceof Uint8Array
            ? e
            : ArrayBuffer.isView(e)
            ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
            : e instanceof ArrayBuffer ||
              ("undefined" != typeof SharedArrayBuffer &&
                e instanceof SharedArrayBuffer)
            ? new Uint8Array(e)
            : Uint8Array.from(e);
        }
        let rt = "array",
          ri = "map_key",
          rr = "map_value",
          rs = (e) => {
            if ("string" == typeof e || "number" == typeof e) return e;
            throw new i2(
              "The type of key must be string or number but " + typeof e
            );
          };
        class rn {
          get length() {
            return this.stackHeadPosition + 1;
          }
          top() {
            return this.stack[this.stackHeadPosition];
          }
          pushArrayState(e) {
            let t = this.getUninitializedStateFromPool();
            (t.type = rt), (t.position = 0), (t.size = e), (t.array = Array(e));
          }
          pushMapState(e) {
            let t = this.getUninitializedStateFromPool();
            (t.type = ri), (t.readCount = 0), (t.size = e), (t.map = {});
          }
          getUninitializedStateFromPool() {
            return (
              this.stackHeadPosition++,
              this.stackHeadPosition === this.stack.length &&
                this.stack.push({
                  type: void 0,
                  size: 0,
                  array: void 0,
                  position: 0,
                  readCount: 0,
                  map: void 0,
                  key: null,
                }),
              this.stack[this.stackHeadPosition]
            );
          }
          release(e) {
            if (this.stack[this.stackHeadPosition] !== e)
              throw Error(
                "Invalid stack state. Released state is not on top of the stack."
              );
            e.type === rt &&
              ((e.size = 0),
              (e.array = void 0),
              (e.position = 0),
              (e.type = void 0)),
              (e.type === ri || e.type === rr) &&
                ((e.size = 0),
                (e.map = void 0),
                (e.readCount = 0),
                (e.type = void 0)),
              this.stackHeadPosition--;
          }
          reset() {
            (this.stack.length = 0), (this.stackHeadPosition = -1);
          }
          constructor() {
            (this.stack = []), (this.stackHeadPosition = -1);
          }
        }
        let ro = new DataView(new ArrayBuffer(0)),
          ra = new Uint8Array(ro.buffer);
        try {
          ro.getInt8(0);
        } catch (e) {
          if (!(e instanceof RangeError))
            throw Error(
              "This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access"
            );
        }
        let rc = RangeError("Insufficient data"),
          rl = new (class {
            canBeCached(e) {
              return e > 0 && e <= this.maxKeyLength;
            }
            find(e, t, i) {
              let r = this.caches[i - 1];
              e: for (let s of r) {
                let r = s.bytes;
                for (let s = 0; s < i; s++) if (r[s] !== e[t + s]) continue e;
                return s.str;
              }
              return null;
            }
            store(e, t) {
              let i = this.caches[e.length - 1],
                r = { bytes: e, str: t };
              i.length >= this.maxLengthPerKey
                ? (i[(Math.random() * i.length) | 0] = r)
                : i.push(r);
            }
            decode(e, t, i) {
              let r = this.find(e, t, i);
              if (null != r) return this.hit++, r;
              this.miss++;
              let s = i9(e, t, i),
                n = Uint8Array.prototype.slice.call(e, t, t + i);
              return this.store(n, s), s;
            }
            constructor(e = 16, t = 16) {
              (this.hit = 0),
                (this.miss = 0),
                (this.maxKeyLength = e),
                (this.maxLengthPerKey = t),
                (this.caches = []);
              for (let e = 0; e < this.maxKeyLength; e++) this.caches.push([]);
            }
          })();
        class rh {
          clone() {
            return new rh({
              extensionCodec: this.extensionCodec,
              context: this.context,
              useBigInt64: this.useBigInt64,
              rawStrings: this.rawStrings,
              maxStrLength: this.maxStrLength,
              maxBinLength: this.maxBinLength,
              maxArrayLength: this.maxArrayLength,
              maxMapLength: this.maxMapLength,
              maxExtLength: this.maxExtLength,
              keyDecoder: this.keyDecoder,
            });
          }
          reinitializeState() {
            (this.totalPos = 0), (this.headByte = -1), this.stack.reset();
          }
          setBuffer(e) {
            let t = re(e);
            (this.bytes = t),
              (this.view = new DataView(t.buffer, t.byteOffset, t.byteLength)),
              (this.pos = 0);
          }
          appendBuffer(e) {
            if (-1 !== this.headByte || this.hasRemaining(1)) {
              let t = this.bytes.subarray(this.pos),
                i = re(e),
                r = new Uint8Array(t.length + i.length);
              r.set(t), r.set(i, t.length), this.setBuffer(r);
            } else this.setBuffer(e);
          }
          hasRemaining(e) {
            return this.view.byteLength - this.pos >= e;
          }
          createExtraByteError(e) {
            let { view: t, pos: i } = this;
            return RangeError(
              "Extra "
                .concat(t.byteLength - i, " of ")
                .concat(t.byteLength, " byte(s) found at buffer[")
                .concat(e, "]")
            );
          }
          decode(e) {
            if (this.entered) return this.clone().decode(e);
            try {
              (this.entered = !0), this.reinitializeState(), this.setBuffer(e);
              let t = this.doDecodeSync();
              if (this.hasRemaining(1))
                throw this.createExtraByteError(this.pos);
              return t;
            } finally {
              this.entered = !1;
            }
          }
          *decodeMulti(e) {
            if (this.entered) {
              let t = this.clone();
              yield* t.decodeMulti(e);
              return;
            }
            try {
              for (
                this.entered = !0, this.reinitializeState(), this.setBuffer(e);
                this.hasRemaining(1);

              )
                yield this.doDecodeSync();
            } finally {
              this.entered = !1;
            }
          }
          async decodeAsync(e) {
            if (this.entered) return this.clone().decodeAsync(e);
            try {
              let t;
              this.entered = !0;
              let i = !1;
              for await (let r of e) {
                if (i)
                  throw (
                    ((this.entered = !1),
                    this.createExtraByteError(this.totalPos))
                  );
                this.appendBuffer(r);
                try {
                  (t = this.doDecodeSync()), (i = !0);
                } catch (e) {
                  if (!(e instanceof RangeError)) throw e;
                }
                this.totalPos += this.pos;
              }
              if (i) {
                if (this.hasRemaining(1))
                  throw this.createExtraByteError(this.totalPos);
                return t;
              }
              let { headByte: r, pos: s, totalPos: n } = this;
              throw RangeError(
                "Insufficient data in parsing "
                  .concat(i0(r), " at ")
                  .concat(n, " (")
                  .concat(s, " in the current buffer)")
              );
            } finally {
              this.entered = !1;
            }
          }
          decodeArrayStream(e) {
            return this.decodeMultiAsync(e, !0);
          }
          decodeStream(e) {
            return this.decodeMultiAsync(e, !1);
          }
          async *decodeMultiAsync(e, t) {
            if (this.entered) {
              let i = this.clone();
              yield* i.decodeMultiAsync(e, t);
              return;
            }
            try {
              this.entered = !0;
              let i = t,
                r = -1;
              for await (let s of e) {
                if (t && 0 === r)
                  throw this.createExtraByteError(this.totalPos);
                this.appendBuffer(s),
                  i && ((r = this.readArraySize()), (i = !1), this.complete());
                try {
                  for (; yield this.doDecodeSync(), 0 != --r; );
                } catch (e) {
                  if (!(e instanceof RangeError)) throw e;
                }
                this.totalPos += this.pos;
              }
            } finally {
              this.entered = !1;
            }
          }
          doDecodeSync() {
            t: for (;;) {
              let e,
                t = this.readHeadByte();
              if (t >= 224) e = t - 256;
              else if (t < 192)
                if (t < 128) e = t;
                else if (t < 144) {
                  let i = t - 128;
                  if (0 !== i) {
                    this.pushMapState(i), this.complete();
                    continue;
                  }
                  e = {};
                } else if (t < 160) {
                  let i = t - 144;
                  if (0 !== i) {
                    this.pushArrayState(i), this.complete();
                    continue;
                  }
                  e = [];
                } else {
                  let i = t - 160;
                  e = this.decodeString(i, 0);
                }
              else if (192 === t) e = null;
              else if (194 === t) e = !1;
              else if (195 === t) e = !0;
              else if (202 === t) e = this.readF32();
              else if (203 === t) e = this.readF64();
              else if (204 === t) e = this.readU8();
              else if (205 === t) e = this.readU16();
              else if (206 === t) e = this.readU32();
              else if (207 === t)
                e = this.useBigInt64 ? this.readU64AsBigInt() : this.readU64();
              else if (208 === t) e = this.readI8();
              else if (209 === t) e = this.readI16();
              else if (210 === t) e = this.readI32();
              else if (211 === t)
                e = this.useBigInt64 ? this.readI64AsBigInt() : this.readI64();
              else if (217 === t) {
                let t = this.lookU8();
                e = this.decodeString(t, 1);
              } else if (218 === t) {
                let t = this.lookU16();
                e = this.decodeString(t, 2);
              } else if (219 === t) {
                let t = this.lookU32();
                e = this.decodeString(t, 4);
              } else if (220 === t) {
                let t = this.readU16();
                if (0 !== t) {
                  this.pushArrayState(t), this.complete();
                  continue;
                }
                e = [];
              } else if (221 === t) {
                let t = this.readU32();
                if (0 !== t) {
                  this.pushArrayState(t), this.complete();
                  continue;
                }
                e = [];
              } else if (222 === t) {
                let t = this.readU16();
                if (0 !== t) {
                  this.pushMapState(t), this.complete();
                  continue;
                }
                e = {};
              } else if (223 === t) {
                let t = this.readU32();
                if (0 !== t) {
                  this.pushMapState(t), this.complete();
                  continue;
                }
                e = {};
              } else if (196 === t) {
                let t = this.lookU8();
                e = this.decodeBinary(t, 1);
              } else if (197 === t) {
                let t = this.lookU16();
                e = this.decodeBinary(t, 2);
              } else if (198 === t) {
                let t = this.lookU32();
                e = this.decodeBinary(t, 4);
              } else if (212 === t) e = this.decodeExtension(1, 0);
              else if (213 === t) e = this.decodeExtension(2, 0);
              else if (214 === t) e = this.decodeExtension(4, 0);
              else if (215 === t) e = this.decodeExtension(8, 0);
              else if (216 === t) e = this.decodeExtension(16, 0);
              else if (199 === t) {
                let t = this.lookU8();
                e = this.decodeExtension(t, 1);
              } else if (200 === t) {
                let t = this.lookU16();
                e = this.decodeExtension(t, 2);
              } else if (201 === t) {
                let t = this.lookU32();
                e = this.decodeExtension(t, 4);
              } else throw new i2("Unrecognized type byte: ".concat(i0(t)));
              this.complete();
              let i = this.stack;
              for (; i.length > 0; ) {
                let t = i.top();
                if (t.type === rt)
                  if (
                    ((t.array[t.position] = e),
                    t.position++,
                    t.position === t.size)
                  )
                    (e = t.array), i.release(t);
                  else continue t;
                else if (t.type === ri) {
                  if ("__proto__" === e)
                    throw new i2("The key __proto__ is not allowed");
                  (t.key = this.mapKeyConverter(e)), (t.type = rr);
                  continue t;
                } else if (
                  ((t.map[t.key] = e), t.readCount++, t.readCount === t.size)
                )
                  (e = t.map), i.release(t);
                else {
                  (t.key = null), (t.type = ri);
                  continue t;
                }
              }
              return e;
            }
          }
          readHeadByte() {
            return (
              -1 === this.headByte && (this.headByte = this.readU8()),
              this.headByte
            );
          }
          complete() {
            this.headByte = -1;
          }
          readArraySize() {
            let e = this.readHeadByte();
            switch (e) {
              case 220:
                return this.readU16();
              case 221:
                return this.readU32();
              default:
                if (e < 160) return e - 144;
                throw new i2("Unrecognized array type byte: ".concat(i0(e)));
            }
          }
          pushMapState(e) {
            if (e > this.maxMapLength)
              throw new i2(
                "Max length exceeded: map length ("
                  .concat(e, ") > maxMapLengthLength (")
                  .concat(this.maxMapLength, ")")
              );
            this.stack.pushMapState(e);
          }
          pushArrayState(e) {
            if (e > this.maxArrayLength)
              throw new i2(
                "Max length exceeded: array length ("
                  .concat(e, ") > maxArrayLength (")
                  .concat(this.maxArrayLength, ")")
              );
            this.stack.pushArrayState(e);
          }
          decodeString(e, t) {
            return !this.rawStrings || this.stateIsMapKey()
              ? this.decodeUtf8String(e, t)
              : this.decodeBinary(e, t);
          }
          decodeUtf8String(e, t) {
            var i;
            let r;
            if (e > this.maxStrLength)
              throw new i2(
                "Max length exceeded: UTF-8 byte length ("
                  .concat(e, ") > maxStrLength (")
                  .concat(this.maxStrLength, ")")
              );
            if (this.bytes.byteLength < this.pos + t + e) throw rc;
            let s = this.pos + t;
            return (
              (r =
                this.stateIsMapKey() &&
                (null == (i = this.keyDecoder) ? void 0 : i.canBeCached(e))
                  ? this.keyDecoder.decode(this.bytes, s, e)
                  : (function (e, t, i) {
                      if (!(i > 200)) return i9(e, t, i);
                      let r = e.subarray(t, t + i);
                      return i7.decode(r);
                    })(this.bytes, s, e)),
              (this.pos += t + e),
              r
            );
          }
          stateIsMapKey() {
            return this.stack.length > 0 && this.stack.top().type === ri;
          }
          decodeBinary(e, t) {
            if (e > this.maxBinLength)
              throw new i2(
                "Max length exceeded: bin length ("
                  .concat(e, ") > maxBinLength (")
                  .concat(this.maxBinLength, ")")
              );
            if (!this.hasRemaining(e + t)) throw rc;
            let i = this.pos + t,
              r = this.bytes.subarray(i, i + e);
            return (this.pos += t + e), r;
          }
          decodeExtension(e, t) {
            if (e > this.maxExtLength)
              throw new i2(
                "Max length exceeded: ext length ("
                  .concat(e, ") > maxExtLength (")
                  .concat(this.maxExtLength, ")")
              );
            let i = this.view.getInt8(this.pos + t),
              r = this.decodeBinary(e, t + 1);
            return this.extensionCodec.decode(r, i, this.context);
          }
          lookU8() {
            return this.view.getUint8(this.pos);
          }
          lookU16() {
            return this.view.getUint16(this.pos);
          }
          lookU32() {
            return this.view.getUint32(this.pos);
          }
          readU8() {
            let e = this.view.getUint8(this.pos);
            return this.pos++, e;
          }
          readI8() {
            let e = this.view.getInt8(this.pos);
            return this.pos++, e;
          }
          readU16() {
            let e = this.view.getUint16(this.pos);
            return (this.pos += 2), e;
          }
          readI16() {
            let e = this.view.getInt16(this.pos);
            return (this.pos += 2), e;
          }
          readU32() {
            let e = this.view.getUint32(this.pos);
            return (this.pos += 4), e;
          }
          readI32() {
            let e = this.view.getInt32(this.pos);
            return (this.pos += 4), e;
          }
          readU64() {
            var e, t;
            let i =
              ((e = this.view),
              (t = this.pos),
              0x100000000 * e.getUint32(t) + e.getUint32(t + 4));
            return (this.pos += 8), i;
          }
          readI64() {
            let e = i3(this.view, this.pos);
            return (this.pos += 8), e;
          }
          readU64AsBigInt() {
            let e = this.view.getBigUint64(this.pos);
            return (this.pos += 8), e;
          }
          readI64AsBigInt() {
            let e = this.view.getBigInt64(this.pos);
            return (this.pos += 8), e;
          }
          readF32() {
            let e = this.view.getFloat32(this.pos);
            return (this.pos += 4), e;
          }
          readF64() {
            let e = this.view.getFloat64(this.pos);
            return (this.pos += 8), e;
          }
          constructor(e) {
            var t, i, r, s, n, o, a, c, l;
            (this.totalPos = 0),
              (this.pos = 0),
              (this.view = ro),
              (this.bytes = ra),
              (this.headByte = -1),
              (this.stack = new rn()),
              (this.entered = !1),
              (this.extensionCodec =
                null != (t = null == e ? void 0 : e.extensionCodec)
                  ? t
                  : i5.defaultCodec),
              (this.context = null == e ? void 0 : e.context),
              (this.useBigInt64 =
                null != (i = null == e ? void 0 : e.useBigInt64) && i),
              (this.rawStrings =
                null != (r = null == e ? void 0 : e.rawStrings) && r),
              (this.maxStrLength =
                null != (s = null == e ? void 0 : e.maxStrLength)
                  ? s
                  : 0xffffffff),
              (this.maxBinLength =
                null != (n = null == e ? void 0 : e.maxBinLength)
                  ? n
                  : 0xffffffff),
              (this.maxArrayLength =
                null != (o = null == e ? void 0 : e.maxArrayLength)
                  ? o
                  : 0xffffffff),
              (this.maxMapLength =
                null != (a = null == e ? void 0 : e.maxMapLength)
                  ? a
                  : 0xffffffff),
              (this.maxExtLength =
                null != (c = null == e ? void 0 : e.maxExtLength)
                  ? c
                  : 0xffffffff),
              (this.keyDecoder =
                (null == e ? void 0 : e.keyDecoder) !== void 0
                  ? e.keyDecoder
                  : rl),
              (this.mapKeyConverter =
                null != (l = null == e ? void 0 : e.mapKeyConverter) ? l : rs);
          }
        }
        class ru {
          clone() {
            return new ru({
              extensionCodec: this.extensionCodec,
              context: this.context,
              useBigInt64: this.useBigInt64,
              maxDepth: this.maxDepth,
              initialBufferSize: this.initialBufferSize,
              sortKeys: this.sortKeys,
              forceFloat32: this.forceFloat32,
              ignoreUndefined: this.ignoreUndefined,
              forceIntegerToFloat: this.forceIntegerToFloat,
            });
          }
          reinitializeState() {
            this.pos = 0;
          }
          encodeSharedRef(e) {
            if (this.entered) return this.clone().encodeSharedRef(e);
            try {
              return (
                (this.entered = !0),
                this.reinitializeState(),
                this.doEncode(e, 1),
                this.bytes.subarray(0, this.pos)
              );
            } finally {
              this.entered = !1;
            }
          }
          encode(e) {
            if (this.entered) return this.clone().encode(e);
            try {
              return (
                (this.entered = !0),
                this.reinitializeState(),
                this.doEncode(e, 1),
                this.bytes.slice(0, this.pos)
              );
            } finally {
              this.entered = !1;
            }
          }
          doEncode(e, t) {
            if (t > this.maxDepth)
              throw Error("Too deep objects in depth ".concat(t));
            null == e
              ? this.encodeNil()
              : "boolean" == typeof e
              ? this.encodeBoolean(e)
              : "number" == typeof e
              ? this.forceIntegerToFloat
                ? this.encodeNumberAsFloat(e)
                : this.encodeNumber(e)
              : "string" == typeof e
              ? this.encodeString(e)
              : this.useBigInt64 && "bigint" == typeof e
              ? this.encodeBigInt64(e)
              : this.encodeObject(e, t);
          }
          ensureBufferSizeToWrite(e) {
            let t = this.pos + e;
            this.view.byteLength < t && this.resizeBuffer(2 * t);
          }
          resizeBuffer(e) {
            let t = new ArrayBuffer(e),
              i = new Uint8Array(t),
              r = new DataView(t);
            i.set(this.bytes), (this.view = r), (this.bytes = i);
          }
          encodeNil() {
            this.writeU8(192);
          }
          encodeBoolean(e) {
            !1 === e ? this.writeU8(194) : this.writeU8(195);
          }
          encodeNumber(e) {
            !this.forceIntegerToFloat && Number.isSafeInteger(e)
              ? e >= 0
                ? e < 128
                  ? this.writeU8(e)
                  : e < 256
                  ? (this.writeU8(204), this.writeU8(e))
                  : e < 65536
                  ? (this.writeU8(205), this.writeU16(e))
                  : e < 0x100000000
                  ? (this.writeU8(206), this.writeU32(e))
                  : this.useBigInt64
                  ? this.encodeNumberAsFloat(e)
                  : (this.writeU8(207), this.writeU64(e))
                : e >= -32
                ? this.writeU8(224 | (e + 32))
                : e >= -128
                ? (this.writeU8(208), this.writeI8(e))
                : e >= -32768
                ? (this.writeU8(209), this.writeI16(e))
                : e >= -0x80000000
                ? (this.writeU8(210), this.writeI32(e))
                : this.useBigInt64
                ? this.encodeNumberAsFloat(e)
                : (this.writeU8(211), this.writeI64(e))
              : this.encodeNumberAsFloat(e);
          }
          encodeNumberAsFloat(e) {
            this.forceFloat32
              ? (this.writeU8(202), this.writeF32(e))
              : (this.writeU8(203), this.writeF64(e));
          }
          encodeBigInt64(e) {
            e >= BigInt(0)
              ? (this.writeU8(207), this.writeBigUint64(e))
              : (this.writeU8(211), this.writeBigInt64(e));
          }
          writeStringHeader(e) {
            if (e < 32) this.writeU8(160 + e);
            else if (e < 256) this.writeU8(217), this.writeU8(e);
            else if (e < 65536) this.writeU8(218), this.writeU16(e);
            else if (e < 0x100000000) this.writeU8(219), this.writeU32(e);
            else throw Error("Too long string: ".concat(e, " bytes in UTF-8"));
          }
          encodeString(e) {
            let t = (function (e) {
              let t = e.length,
                i = 0,
                r = 0;
              for (; r < t; ) {
                let s = e.charCodeAt(r++);
                if ((0xffffff80 & s) == 0) {
                  i++;
                  continue;
                }
                if ((0xfffff800 & s) == 0) i += 2;
                else {
                  if (s >= 55296 && s <= 56319 && r < t) {
                    let t = e.charCodeAt(r);
                    (64512 & t) == 56320 &&
                      (++r, (s = ((1023 & s) << 10) + (1023 & t) + 65536));
                  }
                  (0xffff0000 & s) == 0 ? (i += 3) : (i += 4);
                }
              }
              return i;
            })(e);
            this.ensureBufferSizeToWrite(5 + t),
              this.writeStringHeader(t),
              (function (e, t, i) {
                if (e.length > 50) i4.encodeInto(e, t.subarray(i));
                else
                  !(function (e, t, i) {
                    let r = e.length,
                      s = i,
                      n = 0;
                    for (; n < r; ) {
                      let i = e.charCodeAt(n++);
                      if ((0xffffff80 & i) == 0) {
                        t[s++] = i;
                        continue;
                      }
                      if ((0xfffff800 & i) == 0) t[s++] = ((i >> 6) & 31) | 192;
                      else {
                        if (i >= 55296 && i <= 56319 && n < r) {
                          let t = e.charCodeAt(n);
                          (64512 & t) == 56320 &&
                            (++n,
                            (i = ((1023 & i) << 10) + (1023 & t) + 65536));
                        }
                        (0xffff0000 & i) == 0
                          ? (t[s++] = ((i >> 12) & 15) | 224)
                          : ((t[s++] = ((i >> 18) & 7) | 240),
                            (t[s++] = ((i >> 12) & 63) | 128)),
                          (t[s++] = ((i >> 6) & 63) | 128);
                      }
                      t[s++] = (63 & i) | 128;
                    }
                  })(e, t, i);
              })(e, this.bytes, this.pos),
              (this.pos += t);
          }
          encodeObject(e, t) {
            let i = this.extensionCodec.tryToEncode(e, this.context);
            if (null != i) this.encodeExtension(i);
            else if (Array.isArray(e)) this.encodeArray(e, t);
            else if (ArrayBuffer.isView(e)) this.encodeBinary(e);
            else if ("object" == typeof e) this.encodeMap(e, t);
            else
              throw Error(
                "Unrecognized object: ".concat(
                  Object.prototype.toString.apply(e)
                )
              );
          }
          encodeBinary(e) {
            let t = e.byteLength;
            if (t < 256) this.writeU8(196), this.writeU8(t);
            else if (t < 65536) this.writeU8(197), this.writeU16(t);
            else if (t < 0x100000000) this.writeU8(198), this.writeU32(t);
            else throw Error("Too large binary: ".concat(t));
            let i = re(e);
            this.writeU8a(i);
          }
          encodeArray(e, t) {
            let i = e.length;
            if (i < 16) this.writeU8(144 + i);
            else if (i < 65536) this.writeU8(220), this.writeU16(i);
            else if (i < 0x100000000) this.writeU8(221), this.writeU32(i);
            else throw Error("Too large array: ".concat(i));
            for (let i of e) this.doEncode(i, t + 1);
          }
          countWithoutUndefined(e, t) {
            let i = 0;
            for (let r of t) void 0 !== e[r] && i++;
            return i;
          }
          encodeMap(e, t) {
            let i = Object.keys(e);
            this.sortKeys && i.sort();
            let r = this.ignoreUndefined
              ? this.countWithoutUndefined(e, i)
              : i.length;
            if (r < 16) this.writeU8(128 + r);
            else if (r < 65536) this.writeU8(222), this.writeU16(r);
            else if (r < 0x100000000) this.writeU8(223), this.writeU32(r);
            else throw Error("Too large map object: ".concat(r));
            for (let r of i) {
              let i = e[r];
              (this.ignoreUndefined && void 0 === i) ||
                (this.encodeString(r), this.doEncode(i, t + 1));
            }
          }
          encodeExtension(e) {
            if ("function" == typeof e.data) {
              let t = e.data(this.pos + 6),
                i = t.length;
              if (i >= 0x100000000)
                throw Error("Too large extension object: ".concat(i));
              this.writeU8(201),
                this.writeU32(i),
                this.writeI8(e.type),
                this.writeU8a(t);
              return;
            }
            let t = e.data.length;
            if (1 === t) this.writeU8(212);
            else if (2 === t) this.writeU8(213);
            else if (4 === t) this.writeU8(214);
            else if (8 === t) this.writeU8(215);
            else if (16 === t) this.writeU8(216);
            else if (t < 256) this.writeU8(199), this.writeU8(t);
            else if (t < 65536) this.writeU8(200), this.writeU16(t);
            else if (t < 0x100000000) this.writeU8(201), this.writeU32(t);
            else throw Error("Too large extension object: ".concat(t));
            this.writeI8(e.type), this.writeU8a(e.data);
          }
          writeU8(e) {
            this.ensureBufferSizeToWrite(1),
              this.view.setUint8(this.pos, e),
              this.pos++;
          }
          writeU8a(e) {
            let t = e.length;
            this.ensureBufferSizeToWrite(t),
              this.bytes.set(e, this.pos),
              (this.pos += t);
          }
          writeI8(e) {
            this.ensureBufferSizeToWrite(1),
              this.view.setInt8(this.pos, e),
              this.pos++;
          }
          writeU16(e) {
            this.ensureBufferSizeToWrite(2),
              this.view.setUint16(this.pos, e),
              (this.pos += 2);
          }
          writeI16(e) {
            this.ensureBufferSizeToWrite(2),
              this.view.setInt16(this.pos, e),
              (this.pos += 2);
          }
          writeU32(e) {
            this.ensureBufferSizeToWrite(4),
              this.view.setUint32(this.pos, e),
              (this.pos += 4);
          }
          writeI32(e) {
            this.ensureBufferSizeToWrite(4),
              this.view.setInt32(this.pos, e),
              (this.pos += 4);
          }
          writeF32(e) {
            this.ensureBufferSizeToWrite(4),
              this.view.setFloat32(this.pos, e),
              (this.pos += 4);
          }
          writeF64(e) {
            this.ensureBufferSizeToWrite(8),
              this.view.setFloat64(this.pos, e),
              (this.pos += 8);
          }
          writeU64(e) {
            var t, i;
            this.ensureBufferSizeToWrite(8),
              (t = this.view),
              (i = this.pos),
              t.setUint32(i, e / 0x100000000),
              t.setUint32(i + 4, e),
              (this.pos += 8);
          }
          writeI64(e) {
            this.ensureBufferSizeToWrite(8),
              i8(this.view, this.pos, e),
              (this.pos += 8);
          }
          writeBigUint64(e) {
            this.ensureBufferSizeToWrite(8),
              this.view.setBigUint64(this.pos, e),
              (this.pos += 8);
          }
          writeBigInt64(e) {
            this.ensureBufferSizeToWrite(8),
              this.view.setBigInt64(this.pos, e),
              (this.pos += 8);
          }
          constructor(e) {
            var t, i, r, s, n, o, a, c;
            (this.entered = !1),
              (this.extensionCodec =
                null != (t = null == e ? void 0 : e.extensionCodec)
                  ? t
                  : i5.defaultCodec),
              (this.context = null == e ? void 0 : e.context),
              (this.useBigInt64 =
                null != (i = null == e ? void 0 : e.useBigInt64) && i),
              (this.maxDepth =
                null != (r = null == e ? void 0 : e.maxDepth) ? r : 100),
              (this.initialBufferSize =
                null != (s = null == e ? void 0 : e.initialBufferSize)
                  ? s
                  : 2048),
              (this.sortKeys =
                null != (n = null == e ? void 0 : e.sortKeys) && n),
              (this.forceFloat32 =
                null != (o = null == e ? void 0 : e.forceFloat32) && o),
              (this.ignoreUndefined =
                null != (a = null == e ? void 0 : e.ignoreUndefined) && a),
              (this.forceIntegerToFloat =
                null != (c = null == e ? void 0 : e.forceIntegerToFloat) && c),
              (this.pos = 0),
              (this.view = new DataView(
                new ArrayBuffer(this.initialBufferSize)
              )),
              (this.bytes = new Uint8Array(this.view.buffer));
          }
        }
        function rd(e) {
          return (
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          );
        }
        function rf(e, t) {
          return (
            !!Array.isArray(t) &&
            (0 === t.length ||
              (e
                ? t.every((e) => "string" == typeof e)
                : t.every((e) => Number.isSafeInteger(e))))
          );
        }
        function rp(e, t) {
          if ("string" != typeof t)
            throw Error("".concat(e, ": string expected"));
          return !0;
        }
        function rg(e) {
          if (!Number.isSafeInteger(e))
            throw Error("invalid integer: ".concat(e));
        }
        function ry(e) {
          if (!Array.isArray(e)) throw Error("array expected");
        }
        function rb(e, t) {
          if (!rf(!0, t))
            throw Error("".concat(e, ": array of strings expected"));
        }
        function rm(e, t) {
          if (!rf(!1, t))
            throw Error("".concat(e, ": array of numbers expected"));
        }
        function rv() {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          let r = (e) => e,
            s = (e, t) => (i) => e(t(i));
          return {
            encode: t.map((e) => e.encode).reduceRight(s, r),
            decode: t.map((e) => e.decode).reduce(s, r),
          };
        }
        function rw(e) {
          let t = "string" == typeof e ? e.split("") : e,
            i = t.length;
          rb("alphabet", t);
          let r = new Map(t.map((e, t) => [e, t]));
          return {
            encode: (r) => (
              ry(r),
              r.map((r) => {
                if (!Number.isSafeInteger(r) || r < 0 || r >= i)
                  throw Error(
                    'alphabet.encode: digit index outside alphabet "'
                      .concat(r, '". Allowed: ')
                      .concat(e)
                  );
                return t[r];
              })
            ),
            decode: (t) => (
              ry(t),
              t.map((t) => {
                rp("alphabet.decode", t);
                let i = r.get(t);
                if (void 0 === i)
                  throw Error(
                    'Unknown letter: "'.concat(t, '". Allowed: ').concat(e)
                  );
                return i;
              })
            ),
          };
        }
        function rE() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return (
            rp("join", e),
            {
              encode: (t) => (rb("join.decode", t), t.join(e)),
              decode: (t) => (rp("join.decode", t), t.split(e)),
            }
          );
        }
        function rx(e, t, i) {
          if (t < 2)
            throw Error(
              "convertRadix: invalid from=".concat(
                t,
                ", base cannot be less than 2"
              )
            );
          if (i < 2)
            throw Error(
              "convertRadix: invalid to=".concat(
                i,
                ", base cannot be less than 2"
              )
            );
          if ((ry(e), !e.length)) return [];
          let r = 0,
            s = [],
            n = Array.from(e, (e) => {
              if ((rg(e), e < 0 || e >= t))
                throw Error("invalid integer: ".concat(e));
              return e;
            }),
            o = n.length;
          for (;;) {
            let e = 0,
              a = !0;
            for (let s = r; s < o; s++) {
              let o = n[s],
                c = t * e,
                l = c + o;
              if (!Number.isSafeInteger(l) || c / t !== e || l - o !== c)
                throw Error("convertRadix: carry overflow");
              let h = l / i;
              e = l % i;
              let u = Math.floor(h);
              if (((n[s] = u), !Number.isSafeInteger(u) || u * i + e !== l))
                throw Error("convertRadix: carry overflow");
              a && (u ? (a = !1) : (r = s));
            }
            if ((s.push(e), a)) break;
          }
          for (let t = 0; t < e.length - 1 && 0 === e[t]; t++) s.push(0);
          return s.reverse();
        }
        let rI = (e, t) => (0 === t ? e : rI(t, e % t)),
          r_ = (e, t) => e + (t - rI(e, t)),
          rD = (() => {
            let e = [];
            for (let t = 0; t < 40; t++) e.push(2 ** t);
            return e;
          })();
        function rS(e, t, i, r) {
          if ((ry(e), t <= 0 || t > 32))
            throw Error("convertRadix2: wrong from=".concat(t));
          if (i <= 0 || i > 32)
            throw Error("convertRadix2: wrong to=".concat(i));
          if (r_(t, i) > 32)
            throw Error(
              "convertRadix2: carry overflow from="
                .concat(t, " to=")
                .concat(i, " carryBits=")
                .concat(r_(t, i))
            );
          let s = 0,
            n = 0,
            o = rD[t],
            a = rD[i] - 1,
            c = [];
          for (let r of e) {
            if ((rg(r), r >= o))
              throw Error(
                "convertRadix2: invalid data word="
                  .concat(r, " from=")
                  .concat(t)
              );
            if (((s = (s << t) | r), n + t > 32))
              throw Error(
                "convertRadix2: carry overflow pos="
                  .concat(n, " from=")
                  .concat(t)
              );
            for (n += t; n >= i; n -= i) c.push(((s >> (n - i)) & a) >>> 0);
            let e = rD[n];
            if (void 0 === e) throw Error("invalid carry");
            s &= e - 1;
          }
          if (((s = (s << (i - n)) & a), !r && n >= t))
            throw Error("Excess padding");
          if (!r && s > 0) throw Error("Non-zero padding: ".concat(s));
          return r && n > 0 && c.push(s >>> 0), c;
        }
        let rP = rv(
            (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if ((rg(e), e <= 0 || e > 32))
                throw Error("radix2: bits should be in (0..32]");
              if (r_(8, e) > 32 || r_(e, 8) > 32)
                throw Error("radix2: carry overflow");
              return {
                encode: (i) => {
                  if (!rd(i))
                    throw Error("radix2.encode input should be Uint8Array");
                  return rS(Array.from(i), 8, e, !t);
                },
                decode: (i) => (
                  rm("radix2.decode", i), Uint8Array.from(rS(i, e, 8, t))
                ),
              };
            })(5),
            rw("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),
            (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "=";
              return (
                rg(e),
                rp("padding", t),
                {
                  encode(i) {
                    for (rb("padding.encode", i); (i.length * e) % 8; )
                      i.push(t);
                    return i;
                  },
                  decode(i) {
                    rb("padding.decode", i);
                    let r = i.length;
                    if ((r * e) % 8)
                      throw Error(
                        "padding: invalid, string should have whole number of bytes"
                      );
                    for (; r > 0 && i[r - 1] === t; r--)
                      if (((r - 1) * e) % 8 == 0)
                        throw Error(
                          "padding: invalid, string has too much padding"
                        );
                    return i.slice(0, r);
                  },
                }
              );
            })(5),
            rE("")
          ),
          rA =
            "function" == typeof Uint8Array.from([]).toBase64 &&
            "function" == typeof Uint8Array.fromBase64;
        (i = 58), rg(58);
        function rO(e) {
          return null != globalThis.Buffer
            ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
            : e;
        }
        function rC() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return null != globalThis.Buffer &&
            null != globalThis.Buffer.allocUnsafe
            ? rO(globalThis.Buffer.allocUnsafe(e))
            : new Uint8Array(e);
        }
        function rT(e, t) {
          t || (t = e.reduce((e, t) => e + t.length, 0));
          let i = rC(t),
            r = 0;
          for (let t of e) i.set(t, r), (r += t.length);
          return rO(i);
        }
        ("function" == typeof Uint8Array.from([]).toHex &&
          "function" == typeof Uint8Array.fromHex) ||
          ((e) => {
            if ("string" != typeof e || e.length % 2 != 0)
              throw TypeError(
                "hex.decode: expected string, got "
                  .concat(typeof e, " with length ")
                  .concat(e.length)
              );
            return e.toLowerCase();
          }),
          e.s({ identity: () => rF }, 954976);
        let rN = function (e, t) {
          if (e.length >= 255) throw TypeError("Alphabet too long");
          for (var i = new Uint8Array(256), r = 0; r < i.length; r++)
            i[r] = 255;
          for (var s = 0; s < e.length; s++) {
            var n = e.charAt(s),
              o = n.charCodeAt(0);
            if (255 !== i[o]) throw TypeError(n + " is ambiguous");
            i[o] = s;
          }
          var a = e.length,
            c = e.charAt(0),
            l = Math.log(a) / Math.log(256),
            h = Math.log(256) / Math.log(a);
          function u(e) {
            if ("string" != typeof e) throw TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (" " !== e[0]) {
              for (var r = 0, s = 0; e[t] === c; ) r++, t++;
              for (
                var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n);
                e[t];

              ) {
                var h = i[e.charCodeAt(t)];
                if (255 === h) return;
                for (
                  var u = 0, d = n - 1;
                  (0 !== h || u < s) && -1 !== d;
                  d--, u++
                )
                  (h += (a * o[d]) >>> 0),
                    (o[d] = h % 256 >>> 0),
                    (h = (h / 256) >>> 0);
                if (0 !== h) throw Error("Non-zero carry");
                (s = u), t++;
              }
              if (" " !== e[t]) {
                for (var f = n - s; f !== n && 0 === o[f]; ) f++;
                for (var p = new Uint8Array(r + (n - f)), g = r; f !== n; )
                  p[g++] = o[f++];
                return p;
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (
                var i = 0, r = 0, s = 0, n = t.length;
                s !== n && 0 === t[s];

              )
                s++, i++;
              for (
                var o = ((n - s) * h + 1) >>> 0, l = new Uint8Array(o);
                s !== n;

              ) {
                for (
                  var u = t[s], d = 0, f = o - 1;
                  (0 !== u || d < r) && -1 !== f;
                  f--, d++
                )
                  (u += (256 * l[f]) >>> 0),
                    (l[f] = u % a >>> 0),
                    (u = (u / a) >>> 0);
                if (0 !== u) throw Error("Non-zero carry");
                (r = d), s++;
              }
              for (var p = o - r; p !== o && 0 === l[p]; ) p++;
              for (var g = c.repeat(i); p < o; ++p) g += e.charAt(l[p]);
              return g;
            },
            decodeUnsafe: u,
            decode: function (e) {
              var i = u(e);
              if (i) return i;
              throw Error("Non-".concat(t, " character"));
            },
          };
        };
        new Uint8Array(0);
        let rU = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error("Unknown type, must be binary type");
        };
        class rR {
          encode(e) {
            if (e instanceof Uint8Array)
              return "".concat(this.prefix).concat(this.baseEncode(e));
            throw Error("Unknown type, must be binary type");
          }
          constructor(e, t, i) {
            (this.name = e), (this.prefix = t), (this.baseEncode = i);
          }
        }
        class rB {
          decode(e) {
            if ("string" == typeof e) {
              if (e.codePointAt(0) !== this.prefixCodePoint)
                throw Error(
                  "Unable to decode multibase string "
                    .concat(JSON.stringify(e), ", ")
                    .concat(
                      this.name,
                      " decoder only supports inputs prefixed with "
                    )
                    .concat(this.prefix)
                );
              return this.baseDecode(e.slice(this.prefix.length));
            }
            throw Error("Can only multibase decode strings");
          }
          or(e) {
            return rj(this, e);
          }
          constructor(e, t, i) {
            if (
              ((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0))
            )
              throw Error("Invalid prefix character");
            (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
          }
        }
        class rk {
          or(e) {
            return rj(this, e);
          }
          decode(e) {
            let t = e[0],
              i = this.decoders[t];
            if (i) return i.decode(e);
            throw RangeError(
              "Unable to decode multibase string "
                .concat(JSON.stringify(e), ", only inputs prefixed with ")
                .concat(Object.keys(this.decoders), " are supported")
            );
          }
          constructor(e) {
            this.decoders = e;
          }
        }
        let rj = (e, t) =>
          new rk({
            ...(e.decoders || { [e.prefix]: e }),
            ...(t.decoders || { [t.prefix]: t }),
          });
        class rL {
          encode(e) {
            return this.encoder.encode(e);
          }
          decode(e) {
            return this.decoder.decode(e);
          }
          constructor(e, t, i, r) {
            (this.name = e),
              (this.prefix = t),
              (this.baseEncode = i),
              (this.baseDecode = r),
              (this.encoder = new rR(e, t, i)),
              (this.decoder = new rB(e, t, r));
          }
        }
        let rq = (e) => {
            let { name: t, prefix: i, encode: r, decode: s } = e;
            return new rL(t, i, r, s);
          },
          rM = (e) => {
            let { prefix: t, name: i, alphabet: r } = e,
              { encode: s, decode: n } = rN(r, i);
            return rq({
              prefix: t,
              name: i,
              encode: s,
              decode: (e) => rU(n(e)),
            });
          },
          rz = (e) => {
            let { name: t, prefix: i, bitsPerChar: r, alphabet: s } = e;
            return rq({
              prefix: i,
              name: t,
              encode: (e) =>
                ((e, t, i) => {
                  let r = "=" === t[t.length - 1],
                    s = (1 << i) - 1,
                    n = "",
                    o = 0,
                    a = 0;
                  for (let r = 0; r < e.length; ++r)
                    for (a = (a << 8) | e[r], o += 8; o > i; )
                      (o -= i), (n += t[s & (a >> o)]);
                  if ((o && (n += t[s & (a << (i - o))]), r))
                    for (; (n.length * i) & 7; ) n += "=";
                  return n;
                })(e, s, r),
              decode: (e) =>
                ((e, t, i, r) => {
                  let s = {};
                  for (let e = 0; e < t.length; ++e) s[t[e]] = e;
                  let n = e.length;
                  for (; "=" === e[n - 1]; ) --n;
                  let o = new Uint8Array(((n * i) / 8) | 0),
                    a = 0,
                    c = 0,
                    l = 0;
                  for (let t = 0; t < n; ++t) {
                    let n = s[e[t]];
                    if (void 0 === n)
                      throw SyntaxError("Non-".concat(r, " character"));
                    (c = (c << i) | n),
                      (a += i) >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
                  }
                  if (a >= i || 255 & (c << (8 - a)))
                    throw SyntaxError("Unexpected end of data");
                  return o;
                })(e, s, r, t),
            });
          },
          rF = rq({
            prefix: "\0",
            name: "identity",
            encode: (e) => new TextDecoder().decode(e),
            decode: (e) => new TextEncoder().encode(e),
          });
        e.s({ base2: () => rH }, 333027);
        let rH = rz({
          prefix: "0",
          name: "base2",
          alphabet: "01",
          bitsPerChar: 1,
        });
        e.s({ base8: () => rV }, 413882);
        let rV = rz({
          prefix: "7",
          name: "base8",
          alphabet: "01234567",
          bitsPerChar: 3,
        });
        e.s({ base10: () => rK }, 800673);
        let rK = rM({ prefix: "9", name: "base10", alphabet: "0123456789" });
        e.s({ base16: () => rW, base16upper: () => rG }, 181156);
        let rW = rz({
            prefix: "f",
            name: "base16",
            alphabet: "0123456789abcdef",
            bitsPerChar: 4,
          }),
          rG = rz({
            prefix: "F",
            name: "base16upper",
            alphabet: "0123456789ABCDEF",
            bitsPerChar: 4,
          });
        e.s(
          {
            base32: () => rY,
            base32hex: () => rQ,
            base32hexpad: () => r0,
            base32hexpadupper: () => r1,
            base32hexupper: () => r$,
            base32pad: () => rZ,
            base32padupper: () => rX,
            base32upper: () => rJ,
            base32z: () => r2,
          },
          30708
        );
        let rY = rz({
            prefix: "b",
            name: "base32",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567",
            bitsPerChar: 5,
          }),
          rJ = rz({
            prefix: "B",
            name: "base32upper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
            bitsPerChar: 5,
          }),
          rZ = rz({
            prefix: "c",
            name: "base32pad",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
            bitsPerChar: 5,
          }),
          rX = rz({
            prefix: "C",
            name: "base32padupper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
            bitsPerChar: 5,
          }),
          rQ = rz({
            prefix: "v",
            name: "base32hex",
            alphabet: "0123456789abcdefghijklmnopqrstuv",
            bitsPerChar: 5,
          }),
          r$ = rz({
            prefix: "V",
            name: "base32hexupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
            bitsPerChar: 5,
          }),
          r0 = rz({
            prefix: "t",
            name: "base32hexpad",
            alphabet: "0123456789abcdefghijklmnopqrstuv=",
            bitsPerChar: 5,
          }),
          r1 = rz({
            prefix: "T",
            name: "base32hexpadupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
            bitsPerChar: 5,
          }),
          r2 = rz({
            prefix: "h",
            name: "base32z",
            alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
            bitsPerChar: 5,
          });
        e.s({ base36: () => r8, base36upper: () => r3 }, 750126);
        let r8 = rM({
            prefix: "k",
            name: "base36",
            alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
          }),
          r3 = rM({
            prefix: "K",
            name: "base36upper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          });
        e.s({ base58btc: () => r6, base58flickr: () => r5 }, 282358);
        let r6 = rM({
            name: "base58btc",
            prefix: "z",
            alphabet:
              "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
          }),
          r5 = rM({
            name: "base58flickr",
            prefix: "Z",
            alphabet:
              "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
          });
        e.s(
          {
            base64: () => r4,
            base64pad: () => r9,
            base64url: () => r7,
            base64urlpad: () => se,
          },
          415611
        );
        let r4 = rz({
            prefix: "m",
            name: "base64",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            bitsPerChar: 6,
          }),
          r9 = rz({
            prefix: "M",
            name: "base64pad",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            bitsPerChar: 6,
          }),
          r7 = rz({
            prefix: "u",
            name: "base64url",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            bitsPerChar: 6,
          }),
          se = rz({
            prefix: "U",
            name: "base64urlpad",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
            bitsPerChar: 6,
          });
        e.s({ base256emoji: () => ss }, 935727);
        let st = Array.from(
            "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
          ),
          si = st.reduce((e, t, i) => ((e[i] = t), e), []),
          sr = st.reduce((e, t, i) => ((e[t.codePointAt(0)] = i), e), []),
          ss = rq({
            prefix: "\uD83D\uDE80",
            name: "base256emoji",
            encode: function (e) {
              return e.reduce((e, t) => (e += si[t]), "");
            },
            decode: function (e) {
              let t = [];
              for (let i of e) {
                let e = sr[i.codePointAt(0)];
                if (void 0 === e)
                  throw Error("Non-base256emoji character: ".concat(i));
                t.push(e);
              }
              return new Uint8Array(t);
            },
          });
        e.s({ sha256: () => sy, sha512: () => sb }, 404303);
        function sn(e, t, i) {
          t = t || [];
          for (var r = (i = i || 0); e >= 0x80000000; )
            (t[i++] = (255 & e) | 128), (e /= 128);
          for (; -128 & e; ) (t[i++] = (255 & e) | 128), (e >>>= 7);
          return (t[i] = 0 | e), (sn.bytes = i - r + 1), t;
        }
        function so(e, t) {
          var i,
            r = 0,
            t = t || 0,
            s = 0,
            n = t,
            o = e.length;
          do {
            if (n >= o)
              throw ((so.bytes = 0), RangeError("Could not decode varint"));
            (i = e[n++]),
              (r += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s)),
              (s += 7);
          } while (i >= 128);
          return (so.bytes = n - t), r;
        }
        let sa = {
            encode: sn,
            decode: so,
            encodingLength: function (e) {
              return e < 128
                ? 1
                : e < 16384
                ? 2
                : e < 2097152
                ? 3
                : e < 0x10000000
                ? 4
                : e < 0x800000000
                ? 5
                : e < 0x40000000000
                ? 6
                : e < 0x2000000000000
                ? 7
                : e < 0x100000000000000
                ? 8
                : e < 0x8000000000000000
                ? 9
                : 10;
            },
          },
          sc = function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return [sa.decode(e, t), sa.decode.bytes];
          },
          sl = function (e, t) {
            let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
            return sa.encode(e, t, i), t;
          },
          sh = (e) => sa.encodingLength(e),
          su = (e, t) => {
            let i = t.byteLength,
              r = sh(e),
              s = r + sh(i),
              n = new Uint8Array(s + i);
            return sl(e, n, 0), sl(i, n, r), n.set(t, s), new sd(e, i, t, n);
          };
        class sd {
          constructor(e, t, i, r) {
            (this.code = e),
              (this.size = t),
              (this.digest = i),
              (this.bytes = r);
          }
        }
        let sf = (e) => {
          let { name: t, code: i, encode: r } = e;
          return new sp(t, i, r);
        };
        class sp {
          digest(e) {
            if (e instanceof Uint8Array) {
              let t = this.encode(e);
              return t instanceof Uint8Array
                ? su(this.code, t)
                : t.then((e) => su(this.code, e));
            }
            throw Error("Unknown type, must be binary type");
          }
          constructor(e, t, i) {
            (this.name = e), (this.code = t), (this.encode = i);
          }
        }
        let sg = (e) => async (t) =>
            new Uint8Array(await crypto.subtle.digest(e, t)),
          sy = sf({ name: "sha2-256", code: 18, encode: sg("SHA-256") }),
          sb = sf({ name: "sha2-512", code: 19, encode: sg("SHA-512") });
        e.s({ identity: () => sm }, 620661);
        let sm = {
          code: 0,
          name: "identity",
          encode: rU,
          digest: (e) => su(0, rU(e)),
        };
        e.s(
          {
            code: () => sw,
            decode: () => sx,
            encode: () => sE,
            name: () => sv,
          },
          294192
        );
        let sv = "raw",
          sw = 85,
          sE = (e) => rU(e),
          sx = (e) => rU(e);
        e.s(
          {
            code: () => sS,
            decode: () => sA,
            encode: () => sP,
            name: () => sD,
          },
          356672
        );
        let sI = new TextEncoder(),
          s_ = new TextDecoder(),
          sD = "json",
          sS = 512,
          sP = (e) => sI.encode(JSON.stringify(e)),
          sA = (e) => JSON.parse(s_.decode(e));
        class sO {
          toV0() {
            if (0 === this.version) return this;
            {
              let { code: e, multihash: t } = this;
              if (e !== sU)
                throw Error("Cannot convert a non dag-pb CID to CIDv0");
              if (t.code !== sR)
                throw Error(
                  "Cannot convert non sha2-256 multihash CID to CIDv0"
                );
              return sO.createV0(t);
            }
          }
          toV1() {
            switch (this.version) {
              case 0: {
                let { code: e, digest: t } = this.multihash,
                  i = su(e, t);
                return sO.createV1(this.code, i);
              }
              case 1:
                return this;
              default:
                throw Error(
                  "Can not convert CID version ".concat(
                    this.version,
                    " to version 0. This is a bug please report"
                  )
                );
            }
          }
          equals(e) {
            var t, i;
            return (
              e &&
              this.code === e.code &&
              this.version === e.version &&
              ((t = this.multihash) === (i = e.multihash) ||
                (t.code === i.code &&
                  t.size === i.size &&
                  ((e, t) => {
                    if (e === t) return !0;
                    if (e.byteLength !== t.byteLength) return !1;
                    for (let i = 0; i < e.byteLength; i++)
                      if (e[i] !== t[i]) return !1;
                    return !0;
                  })(t.bytes, i.bytes)))
            );
          }
          toString(e) {
            let { bytes: t, version: i, _baseCache: r } = this;
            return 0 === i
              ? sT(t, r, e || r6.encoder)
              : sN(t, r, e || rY.encoder);
          }
          toJSON() {
            return {
              code: this.code,
              version: this.version,
              hash: this.multihash.bytes,
            };
          }
          get [Symbol.toStringTag]() {
            return "CID";
          }
          [Symbol.for("nodejs.util.inspect.custom")]() {
            return "CID(" + this.toString() + ")";
          }
          static isCID(e) {
            return sq(/^0\.0/, sM), !!(e && (e[sk] || e.asCID === e));
          }
          get toBaseEncodedString() {
            throw Error("Deprecated, use .toString()");
          }
          get codec() {
            throw Error(
              '"codec" property is deprecated, use integer "code" property instead'
            );
          }
          get buffer() {
            throw Error(
              "Deprecated .buffer property, use .bytes to get Uint8Array instead"
            );
          }
          get multibaseName() {
            throw Error('"multibaseName" property is deprecated');
          }
          get prefix() {
            throw Error('"prefix" property is deprecated');
          }
          static asCID(e) {
            if (e instanceof sO) return e;
            if (null != e && e.asCID === e) {
              let { version: t, code: i, multihash: r, bytes: s } = e;
              return new sO(t, i, r, s || sB(t, i, r.bytes));
            }
            if (null == e || !0 !== e[sk]) return null;
            {
              let { version: t, multihash: i, code: r } = e,
                s = ((e) => {
                  let t = rU(e),
                    [i, r] = sc(t),
                    [s, n] = sc(t.subarray(r)),
                    o = t.subarray(r + n);
                  if (o.byteLength !== s) throw Error("Incorrect length");
                  return new sd(i, s, o, t);
                })(i);
              return sO.create(t, r, s);
            }
          }
          static create(e, t, i) {
            if ("number" != typeof t)
              throw Error("String codecs are no longer supported");
            switch (e) {
              case 0:
                if (t === sU) return new sO(e, t, i, i.bytes);
                throw Error(
                  "Version 0 CID must use dag-pb (code: ".concat(
                    sU,
                    ") block encoding"
                  )
                );
              case 1: {
                let r = sB(e, t, i.bytes);
                return new sO(e, t, i, r);
              }
              default:
                throw Error("Invalid version");
            }
          }
          static createV0(e) {
            return sO.create(0, sU, e);
          }
          static createV1(e, t) {
            return sO.create(1, e, t);
          }
          static decode(e) {
            let [t, i] = sO.decodeFirst(e);
            if (i.length) throw Error("Incorrect length");
            return t;
          }
          static decodeFirst(e) {
            let t = sO.inspectBytes(e),
              i = t.size - t.multihashSize,
              r = rU(e.subarray(i, i + t.multihashSize));
            if (r.byteLength !== t.multihashSize)
              throw Error("Incorrect length");
            let s = r.subarray(t.multihashSize - t.digestSize),
              n = new sd(t.multihashCode, t.digestSize, s, r);
            return [
              0 === t.version ? sO.createV0(n) : sO.createV1(t.codec, n),
              e.subarray(t.size),
            ];
          }
          static inspectBytes(e) {
            let t = 0,
              i = () => {
                let [i, r] = sc(e.subarray(t));
                return (t += r), i;
              },
              r = i(),
              s = sU;
            if (
              (18 === r ? ((r = 0), (t = 0)) : 1 === r && (s = i()),
              0 !== r && 1 !== r)
            )
              throw RangeError("Invalid CID version ".concat(r));
            let n = t,
              o = i(),
              a = i(),
              c = t + a;
            return {
              version: r,
              codec: s,
              multihashCode: o,
              digestSize: a,
              multihashSize: c - n,
              size: c,
            };
          }
          static parse(e, t) {
            let [i, r] = sC(e, t),
              s = sO.decode(r);
            return s._baseCache.set(i, e), s;
          }
          constructor(e, t, i, r) {
            (this.code = t),
              (this.version = e),
              (this.multihash = i),
              (this.bytes = r),
              (this.byteOffset = r.byteOffset),
              (this.byteLength = r.byteLength),
              (this.asCID = this),
              (this._baseCache = new Map()),
              Object.defineProperties(this, {
                byteOffset: sL,
                byteLength: sL,
                code: sj,
                version: sj,
                multihash: sj,
                bytes: sj,
                _baseCache: sL,
                asCID: sL,
              });
          }
        }
        let sC = (e, t) => {
            switch (e[0]) {
              case "Q": {
                let i = t || r6;
                return [r6.prefix, i.decode("".concat(r6.prefix).concat(e))];
              }
              case r6.prefix: {
                let i = t || r6;
                return [r6.prefix, i.decode(e)];
              }
              case rY.prefix: {
                let i = t || rY;
                return [rY.prefix, i.decode(e)];
              }
              default:
                if (null == t)
                  throw Error(
                    "To parse non base32 or base58btc encoded CID multibase decoder must be provided"
                  );
                return [e[0], t.decode(e)];
            }
          },
          sT = (e, t, i) => {
            let { prefix: r } = i;
            if (r !== r6.prefix)
              throw Error(
                "Cannot string encode V0 in ".concat(i.name, " encoding")
              );
            let s = t.get(r);
            if (null != s) return s;
            {
              let s = i.encode(e).slice(1);
              return t.set(r, s), s;
            }
          },
          sN = (e, t, i) => {
            let { prefix: r } = i,
              s = t.get(r);
            if (null != s) return s;
            {
              let s = i.encode(e);
              return t.set(r, s), s;
            }
          },
          sU = 112,
          sR = 18,
          sB = (e, t, i) => {
            let r = sh(e),
              s = r + sh(t),
              n = new Uint8Array(s + i.byteLength);
            return sl(e, n, 0), sl(t, n, r), n.set(i, s), n;
          },
          sk = Symbol.for("@ipld/js-cid/CID"),
          sj = { writable: !1, configurable: !1, enumerable: !0 },
          sL = { writable: !1, enumerable: !1, configurable: !1 },
          sq = (e, t) => {
            if (e.test("0.0.0-dev")) console.warn(t);
            else throw Error(t);
          },
          sM =
            "CID.isCID(v) is deprecated and will be removed in the next major release.\nFollowing code pattern:\n\nif (CID.isCID(value)) {\n  doSomethingWithCID(value)\n}\n\nIs replaced with:\n\nconst cid = CID.asCID(value)\nif (cid) {\n  // Make sure to use cid instead of value\n  doSomethingWithCID(cid)\n}\n";
        var sz = e.i(954976),
          sF = e.i(333027),
          sH = e.i(413882),
          sV = e.i(800673),
          sK = e.i(181156),
          sW = e.i(30708),
          sG = e.i(750126),
          sY = e.i(282358),
          sJ = e.i(415611),
          sZ = e.i(935727),
          sX = e.i(404303),
          sQ = e.i(620661);
        e.i(294192), e.i(356672);
        let s$ = {
          ...sz,
          ...sF,
          ...sH,
          ...sV,
          ...sK,
          ...sW,
          ...sG,
          ...sY,
          ...sJ,
          ...sZ,
        };
        function s0(e, t, i, r) {
          return {
            name: e,
            prefix: t,
            encoder: { name: e, prefix: t, encode: i },
            decoder: { decode: r },
          };
        }
        ({ ...sX, ...sQ });
        let s1 = s0(
            "utf8",
            "u",
            (e) => "u" + new TextDecoder("utf8").decode(e),
            (e) => new TextEncoder().encode(e.substring(1))
          ),
          s2 = s0(
            "ascii",
            "a",
            (e) => {
              let t = "a";
              for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
              return t;
            },
            (e) => {
              let t = rC((e = e.substring(1)).length);
              for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
              return t;
            }
          ),
          s8 = {
            utf8: s1,
            "utf-8": s1,
            hex: s$.base16,
            latin1: s2,
            ascii: s2,
            binary: s2,
            ...s$,
          };
        function s3(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "utf8",
            i = s8[t];
          if (!i) throw Error('Unsupported encoding "'.concat(t, '"'));
          return ("utf8" === t || "utf-8" === t) &&
            null != globalThis.Buffer &&
            null != globalThis.Buffer.from
            ? rO(globalThis.Buffer.from(e, "utf-8"))
            : i.decoder.decode("".concat(i.prefix).concat(e));
        }
        function s6(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "utf8",
            i = s8[t];
          if (!i) throw Error('Unsupported encoding "'.concat(t, '"'));
          return ("utf8" === t || "utf-8" === t) &&
            null != globalThis.Buffer &&
            null != globalThis.Buffer.from
            ? globalThis.Buffer.from(
                e.buffer,
                e.byteOffset,
                e.byteLength
              ).toString("utf8")
            : i.encoder.encode(e).substring(1);
        }
        let s5 = {
          waku: {
            publish: "waku_publish",
            batchPublish: "waku_batchPublish",
            subscribe: "waku_subscribe",
            batchSubscribe: "waku_batchSubscribe",
            subscription: "waku_subscription",
            unsubscribe: "waku_unsubscribe",
            batchUnsubscribe: "waku_batchUnsubscribe",
            batchFetchMessages: "waku_batchFetchMessages",
          },
          irn: {
            publish: "irn_publish",
            batchPublish: "irn_batchPublish",
            subscribe: "irn_subscribe",
            batchSubscribe: "irn_batchSubscribe",
            subscription: "irn_subscription",
            unsubscribe: "irn_unsubscribe",
            batchUnsubscribe: "irn_batchUnsubscribe",
            batchFetchMessages: "irn_batchFetchMessages",
          },
          iridium: {
            publish: "iridium_publish",
            batchPublish: "iridium_batchPublish",
            subscribe: "iridium_subscribe",
            batchSubscribe: "iridium_batchSubscribe",
            subscription: "iridium_subscription",
            unsubscribe: "iridium_unsubscribe",
            batchUnsubscribe: "iridium_batchUnsubscribe",
            batchFetchMessages: "iridium_batchFetchMessages",
          },
        };
        var s4 = e.i(540441);
        function s9(e) {
          let [t, i] = e.split(":");
          return { namespace: t, reference: i };
        }
        function s7(e, t) {
          return e.includes(":") ? [e] : t.chains || [];
        }
        var ne = Object.defineProperty,
          nt = Object.defineProperties,
          ni = Object.getOwnPropertyDescriptors,
          nr = Object.getOwnPropertySymbols,
          ns = Object.prototype.hasOwnProperty,
          nn = Object.prototype.propertyIsEnumerable,
          no = (e, t, i) =>
            t in e
              ? ne(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          na = (e, t) => {
            for (var i in t || (t = {})) ns.call(t, i) && no(e, i, t[i]);
            if (nr) for (var i of nr(t)) nn.call(t, i) && no(e, i, t[i]);
            return e;
          };
        let nc = {
          reactNative: "react-native",
          node: "node",
          browser: "browser",
          unknown: "unknown",
        };
        function nl() {
          return (
            "u" > typeof s.default &&
            "u" > typeof s.default.versions &&
            "u" > typeof s.default.versions.node
          );
        }
        function nh() {
          return (
            !(0, iI.getDocument)() &&
            !!(0, iI.getNavigator)() &&
            "ReactNative" === navigator.product
          );
        }
        function nu() {
          return !nl() && !!(0, iI.getNavigator)() && !!(0, iI.getDocument)();
        }
        function nd() {
          return nh()
            ? nc.reactNative
            : nl()
            ? nc.node
            : nu()
            ? nc.browser
            : nc.unknown;
        }
        function nf() {
          var e;
          try {
            return nh() &&
              "u" >
                typeof (null == globalThis ? void 0 : globalThis.Application)
              ? null == (e = globalThis.Application)
                ? void 0
                : e.applicationId
              : void 0;
          } catch (e) {
            return;
          }
        }
        function np() {
          return (
            (0, i_.getWindowMetadata)() || {
              name: "",
              description: "",
              url: "",
              icons: [""],
            }
          );
        }
        function ng(e, t, i) {
          let r = (function () {
              if (
                nd() === nc.reactNative &&
                "u" > typeof (null == globalThis ? void 0 : globalThis.Platform)
              ) {
                let { OS: e, Version: t } = globalThis.Platform;
                return [e, t].join("-");
              }
              let e =
                "undefined" == typeof document &&
                "undefined" != typeof navigator &&
                "ReactNative" === navigator.product
                  ? new iv()
                  : "undefined" != typeof navigator
                  ? (function (e) {
                      var t =
                        "" !== e &&
                        iE.reduce(function (t, i) {
                          var r = i[0],
                            s = i[1];
                          if (t) return t;
                          var n = s.exec(e);
                          return !!n && [r, n];
                        }, !1);
                      if (!t) return null;
                      var i = t[0],
                        r = t[1];
                      if ("searchbot" === i) return new im();
                      var s =
                        r[1] &&
                        r[1].split(".").join("_").split("_").slice(0, 3);
                      s
                        ? s.length < 3 &&
                          (s = ip(
                            ip([], s, !0),
                            (function (e) {
                              for (var t = [], i = 0; i < e; i++) t.push("0");
                              return t;
                            })(3 - s.length),
                            !0
                          ))
                        : (s = []);
                      var n = s.join("."),
                        o = (function (e) {
                          for (var t = 0, i = ix.length; t < i; t++) {
                            var r = ix[t],
                              s = r[0];
                            if (r[1].exec(e)) return s;
                          }
                          return null;
                        })(e),
                        a = iw.exec(e);
                      return a && a[1]
                        ? new ib(i, n, o, a[1])
                        : new ig(i, n, o);
                    })(navigator.userAgent)
                  : void 0 !== s.default && s.default.version
                  ? new iy(s.default.version.slice(1))
                  : null;
              if (null === e) return "unknown";
              let t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
              return "browser" === e.type
                ? [t, e.name, e.version].join("-")
                : [t, e.version].join("-");
            })(),
            n = (function () {
              var e;
              let t = nd();
              return t === nc.browser
                ? [
                    t,
                    (null == (e = (0, iI.getLocation)()) ? void 0 : e.host) ||
                      "unknown",
                  ].join(":")
                : t;
            })();
          return [[e, t].join("-"), ["js", i].join("-"), r, n].join("/");
        }
        function ny(e, t) {
          return e.filter((e) => t.includes(e)).length === e.length;
        }
        function nb(e) {
          return Object.fromEntries(e.entries());
        }
        function nm(e) {
          return new Map(Object.entries(e));
        }
        function nv() {
          let e,
            t,
            i,
            r,
            s =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : o.FIVE_MINUTES,
            n = arguments.length > 1 ? arguments[1] : void 0,
            a = (0, o.toMiliseconds)(s || o.FIVE_MINUTES);
          return {
            resolve: (t) => {
              i && e && (clearTimeout(i), e(t), (r = Promise.resolve(t)));
            },
            reject: (e) => {
              i && t && (clearTimeout(i), t(e));
            },
            done: () =>
              new Promise((s, o) => {
                if (r) return s(r);
                (i = setTimeout(() => {
                  let e = Error(n);
                  (r = Promise.reject(e)), o(e);
                }, a)),
                  (e = s),
                  (t = o);
              }),
          };
        }
        function nw(e, t, i) {
          return new Promise(async (r, s) => {
            let n = setTimeout(() => s(Error(i)), t);
            try {
              let t = await e;
              r(t);
            } catch (e) {
              s(e);
            }
            clearTimeout(n);
          });
        }
        function nE(e, t) {
          if ("string" == typeof t && t.startsWith("".concat(e, ":"))) return t;
          if ("topic" === e.toLowerCase()) {
            if ("string" != typeof t)
              throw Error(
                'Value must be "string" for expirer target type: topic'
              );
            return "topic:".concat(t);
          }
          if ("id" === e.toLowerCase()) {
            if ("number" != typeof t)
              throw Error('Value must be "number" for expirer target type: id');
            return "id:".concat(t);
          }
          throw Error("Unknown expirer target type: ".concat(e));
        }
        function nx(e) {
          let [t, i] = e.split(":"),
            r = { id: void 0, topic: void 0 };
          if ("topic" === t && "string" == typeof i) r.topic = i;
          else if ("id" === t && Number.isInteger(Number(i))) r.id = Number(i);
          else
            throw Error(
              "Invalid target, expected id:number or topic:string, got "
                .concat(t, ":")
                .concat(i)
            );
          return r;
        }
        function nI(e, t) {
          return (0, o.fromMiliseconds)(
            (t || Date.now()) + (0, o.toMiliseconds)(e)
          );
        }
        function n_(e) {
          return Date.now() >= (0, o.toMiliseconds)(e);
        }
        function nD(e, t) {
          return "".concat(e).concat(t ? ":".concat(t) : "");
        }
        function nS() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
          return [...new Set([...e, ...t])];
        }
        async function nP(e) {
          var t, i;
          let { id: s, topic: n, wcDeepLink: o } = e;
          try {
            if (!o) return;
            let e = "string" == typeof o ? JSON.parse(o) : o,
              a = null == e ? void 0 : e.href;
            if ("string" != typeof a) return;
            let c = (function (e, t, i) {
                let s = "requestId=".concat(t, "&sessionTopic=").concat(i);
                e.endsWith("/") && (e = e.slice(0, -1));
                let n = "".concat(e);
                if (e.startsWith("https://t.me")) {
                  let t = e.includes("?") ? "&startapp=" : "?startapp=";
                  n = ""
                    .concat(n)
                    .concat(t)
                    .concat(
                      (function (e) {
                        let t =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1],
                          i = r.Buffer.from(e).toString("base64");
                        return t ? i.replace(/[=]/g, "") : i;
                      })(s, !0)
                    );
                } else n = "".concat(n, "/wc?").concat(s);
                return n;
              })(a, s, n),
              l = nd();
            if (l === nc.browser) {
              let e;
              if (!(null != (t = (0, iI.getDocument)()) && t.hasFocus()))
                return void console.warn(
                  "Document does not have focus, skipping deeplink."
                );
              (i = c),
                (e = "_self"),
                !(function () {
                  try {
                    return window.self !== window.top;
                  } catch (e) {
                    return !1;
                  }
                })()
                  ? (("u" > typeof window &&
                      (window.TelegramWebviewProxy ||
                        window.Telegram ||
                        window.TelegramWebviewProxyProto)) ||
                      i.startsWith("https://") ||
                      i.startsWith("http://")) &&
                    (e = "_blank")
                  : (e = "_top"),
                window.open(i, e, "noreferrer noopener");
            } else
              l === nc.reactNative &&
                "u" >
                  typeof (null == globalThis ? void 0 : globalThis.Linking) &&
                (await globalThis.Linking.openURL(c));
          } catch (e) {
            console.error(e);
          }
        }
        async function nA(e, t) {
          let i = "";
          try {
            if (nu() && (i = localStorage.getItem(t))) return i;
            i = await e.getItem(t);
          } catch (e) {
            console.error(e);
          }
          return i;
        }
        function nO(e, t) {
          if (!e.includes(t)) return null;
          let i = e.split(/([&,?,=])/),
            r = i.indexOf(t);
          return i[r + 2];
        }
        function nC() {
          return "u" > typeof crypto && null != crypto && crypto.randomUUID
            ? crypto.randomUUID()
            : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (e) => {
                let t = (16 * Math.random()) | 0;
                return ("x" === e ? t : (3 & t) | 8).toString(16);
              });
        }
        function nT() {
          return "u" > typeof s.default && "true" === s.default.env.IS_VITEST;
        }
        function nN(e) {
          return r.Buffer.from(e, "base64").toString("utf-8");
        }
        let nU = BigInt(0x100000000 - 1),
          nR = BigInt(32);
        function nB(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return t
            ? { h: Number(e & nU), l: Number((e >> nR) & nU) }
            : { h: 0 | Number((e >> nR) & nU), l: 0 | Number(e & nU) };
        }
        function nk(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = e.length,
            r = new Uint32Array(i),
            s = new Uint32Array(i);
          for (let n = 0; n < i; n++) {
            let { h: i, l: o } = nB(e[n], t);
            [r[n], s[n]] = [i, o];
          }
          return [r, s];
        }
        let nj = (e, t, i) => e >>> i,
          nL = (e, t, i) => (e << (32 - i)) | (t >>> i),
          nq = (e, t, i) => (e >>> i) | (t << (32 - i)),
          nM = (e, t, i) => (e << (32 - i)) | (t >>> i),
          nz = (e, t, i) => (e << (64 - i)) | (t >>> (i - 32)),
          nF = (e, t, i) => (e >>> (i - 32)) | (t << (64 - i));
        function nH(e, t, i, r) {
          let s = (t >>> 0) + (r >>> 0);
          return { h: (e + i + ((s / 0x100000000) | 0)) | 0, l: 0 | s };
        }
        let nV = (e, t, i) => (e >>> 0) + (t >>> 0) + (i >>> 0),
          nK = (e, t, i, r) => (t + i + r + ((e / 0x100000000) | 0)) | 0,
          nW = (e, t, i, r) => (e >>> 0) + (t >>> 0) + (i >>> 0) + (r >>> 0),
          nG = (e, t, i, r, s) => (t + i + r + s + ((e / 0x100000000) | 0)) | 0,
          nY = (e, t, i, r, s) =>
            (e >>> 0) + (t >>> 0) + (i >>> 0) + (r >>> 0) + (s >>> 0),
          nJ = (e, t, i, r, s, n) =>
            (t + i + r + s + n + ((e / 0x100000000) | 0)) | 0,
          nZ =
            "object" == typeof globalThis && "crypto" in globalThis
              ? globalThis.crypto
              : void 0;
        function nX(e) {
          return (
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          );
        }
        function nQ(e) {
          if (!Number.isSafeInteger(e) || e < 0)
            throw Error("positive integer expected, got " + e);
        }
        function n$(e) {
          for (
            var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            i[r - 1] = arguments[r];
          if (!nX(e)) throw Error("Uint8Array expected");
          if (i.length > 0 && !i.includes(e.length))
            throw Error(
              "Uint8Array expected of length " + i + ", got length=" + e.length
            );
        }
        function n0(e) {
          if ("function" != typeof e || "function" != typeof e.create)
            throw Error("Hash should be wrapped by utils.createHasher");
          nQ(e.outputLen), nQ(e.blockLen);
        }
        function n1(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          if (e.destroyed) throw Error("Hash instance has been destroyed");
          if (t && e.finished)
            throw Error("Hash#digest() has already been called");
        }
        function n2(e, t) {
          n$(e);
          let i = t.outputLen;
          if (e.length < i)
            throw Error(
              "digestInto() expects output buffer of length at least " + i
            );
        }
        function n8(e) {
          return new Uint32Array(
            e.buffer,
            e.byteOffset,
            Math.floor(e.byteLength / 4)
          );
        }
        function n3() {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          for (let e = 0; e < t.length; e++) t[e].fill(0);
        }
        function n6(e) {
          return new DataView(e.buffer, e.byteOffset, e.byteLength);
        }
        function n5(e, t) {
          return (e << (32 - t)) | (e >>> t);
        }
        let n4 = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
        function n9(e) {
          return (
            ((e << 24) & 0xff000000) |
            ((e << 8) & 0xff0000) |
            ((e >>> 8) & 65280) |
            ((e >>> 24) & 255)
          );
        }
        let n7 = n4 ? (e) => e : (e) => n9(e),
          oe = n4
            ? (e) => e
            : function (e) {
                for (let t = 0; t < e.length; t++) e[t] = n9(e[t]);
                return e;
              },
          ot =
            "function" == typeof Uint8Array.from([]).toHex &&
            "function" == typeof Uint8Array.fromHex,
          oi = Array.from({ length: 256 }, (e, t) =>
            t.toString(16).padStart(2, "0")
          );
        function or(e) {
          if ((n$(e), ot)) return e.toHex();
          let t = "";
          for (let i = 0; i < e.length; i++) t += oi[e[i]];
          return t;
        }
        let os = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
        function on(e) {
          return e >= os._0 && e <= os._9
            ? e - os._0
            : e >= os.A && e <= os.F
            ? e - (os.A - 10)
            : e >= os.a && e <= os.f
            ? e - (os.a - 10)
            : void 0;
        }
        function oo(e) {
          if ("string" != typeof e)
            throw Error("hex string expected, got " + typeof e);
          if (ot) return Uint8Array.fromHex(e);
          let t = e.length,
            i = t / 2;
          if (t % 2)
            throw Error("hex string expected, got unpadded hex of length " + t);
          let r = new Uint8Array(i);
          for (let t = 0, s = 0; t < i; t++, s += 2) {
            let i = on(e.charCodeAt(s)),
              n = on(e.charCodeAt(s + 1));
            if (void 0 === i || void 0 === n)
              throw Error(
                'hex string expected, got non-hex character "' +
                  (e[s] + e[s + 1]) +
                  '" at index ' +
                  s
              );
            r[t] = 16 * i + n;
          }
          return r;
        }
        function oa(e) {
          return (
            "string" == typeof e &&
              (e = (function (e) {
                if ("string" != typeof e) throw Error("string expected");
                return new Uint8Array(new TextEncoder().encode(e));
              })(e)),
            n$(e),
            e
          );
        }
        function oc() {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          let r = 0;
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            n$(i), (r += i.length);
          }
          let s = new Uint8Array(r);
          for (let e = 0, i = 0; e < t.length; e++) {
            let r = t[e];
            s.set(r, i), (i += r.length);
          }
          return s;
        }
        class ol {}
        function oh(e) {
          let t = (t) => e().update(oa(t)).digest(),
            i = e();
          return (
            (t.outputLen = i.outputLen),
            (t.blockLen = i.blockLen),
            (t.create = () => e()),
            t
          );
        }
        function ou() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32;
          if (nZ && "function" == typeof nZ.getRandomValues)
            return nZ.getRandomValues(new Uint8Array(e));
          if (nZ && "function" == typeof nZ.randomBytes)
            return Uint8Array.from(nZ.randomBytes(e));
          throw Error("crypto.getRandomValues must be defined");
        }
        let od = BigInt(0),
          of = BigInt(1),
          op = BigInt(2),
          og = BigInt(7),
          oy = BigInt(256),
          ob = BigInt(113),
          om = [],
          ov = [],
          ow = [];
        for (let e = 0, t = of, i = 1, r = 0; e < 24; e++) {
          ([i, r] = [r, (2 * i + 3 * r) % 5]),
            om.push(2 * (5 * r + i)),
            ov.push((((e + 1) * (e + 2)) / 2) % 64);
          let s = od;
          for (let e = 0; e < 7; e++)
            (t = ((t << of) ^ ((t >> og) * ob)) % oy) & op &&
              (s ^= of << ((of << BigInt(e)) - of));
          ow.push(s);
        }
        let oE = nk(ow, !0),
          ox = oE[0],
          oI = oE[1],
          o_ = (e, t, i) =>
            i > 32
              ? ((e, t, i) => (t << (i - 32)) | (e >>> (64 - i)))(e, t, i)
              : ((e, t, i) => (e << i) | (t >>> (32 - i)))(e, t, i),
          oD = (e, t, i) =>
            i > 32
              ? ((e, t, i) => (e << (i - 32)) | (t >>> (64 - i)))(e, t, i)
              : ((e, t, i) => (t << i) | (e >>> (32 - i)))(e, t, i);
        class oS extends ol {
          clone() {
            return this._cloneInto();
          }
          keccak() {
            oe(this.state32),
              (function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 24,
                  i = new Uint32Array(10);
                for (let r = 24 - t; r < 24; r++) {
                  for (let t = 0; t < 10; t++)
                    i[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                  for (let t = 0; t < 10; t += 2) {
                    let r = (t + 8) % 10,
                      s = (t + 2) % 10,
                      n = i[s],
                      o = i[s + 1],
                      a = o_(n, o, 1) ^ i[r],
                      c = oD(n, o, 1) ^ i[r + 1];
                    for (let i = 0; i < 50; i += 10)
                      (e[t + i] ^= a), (e[t + i + 1] ^= c);
                  }
                  let t = e[2],
                    s = e[3];
                  for (let i = 0; i < 24; i++) {
                    let r = ov[i],
                      n = o_(t, s, r),
                      o = oD(t, s, r),
                      a = om[i];
                    (t = e[a]), (s = e[a + 1]), (e[a] = n), (e[a + 1] = o);
                  }
                  for (let t = 0; t < 50; t += 10) {
                    for (let r = 0; r < 10; r++) i[r] = e[t + r];
                    for (let r = 0; r < 10; r++)
                      e[t + r] ^= ~i[(r + 2) % 10] & i[(r + 4) % 10];
                  }
                  (e[0] ^= ox[r]), (e[1] ^= oI[r]);
                }
                n3(i);
              })(this.state32, this.rounds),
              oe(this.state32),
              (this.posOut = 0),
              (this.pos = 0);
          }
          update(e) {
            n1(this), n$((e = oa(e)));
            let { blockLen: t, state: i } = this,
              r = e.length;
            for (let s = 0; s < r; ) {
              let n = Math.min(t - this.pos, r - s);
              for (let t = 0; t < n; t++) i[this.pos++] ^= e[s++];
              this.pos === t && this.keccak();
            }
            return this;
          }
          finish() {
            if (this.finished) return;
            this.finished = !0;
            let { state: e, suffix: t, pos: i, blockLen: r } = this;
            (e[i] ^= t),
              (128 & t) != 0 && i === r - 1 && this.keccak(),
              (e[r - 1] ^= 128),
              this.keccak();
          }
          writeInto(e) {
            n1(this, !1), n$(e), this.finish();
            let t = this.state,
              { blockLen: i } = this;
            for (let r = 0, s = e.length; r < s; ) {
              this.posOut >= i && this.keccak();
              let n = Math.min(i - this.posOut, s - r);
              e.set(t.subarray(this.posOut, this.posOut + n), r),
                (this.posOut += n),
                (r += n);
            }
            return e;
          }
          xofInto(e) {
            if (!this.enableXOF)
              throw Error("XOF is not possible for this instance");
            return this.writeInto(e);
          }
          xof(e) {
            return nQ(e), this.xofInto(new Uint8Array(e));
          }
          digestInto(e) {
            if ((n2(e, this), this.finished))
              throw Error("digest() was already called");
            return this.writeInto(e), this.destroy(), e;
          }
          digest() {
            return this.digestInto(new Uint8Array(this.outputLen));
          }
          destroy() {
            (this.destroyed = !0), n3(this.state);
          }
          _cloneInto(e) {
            let {
              blockLen: t,
              suffix: i,
              outputLen: r,
              rounds: s,
              enableXOF: n,
            } = this;
            return (
              e || (e = new oS(t, i, r, n, s)),
              e.state32.set(this.state32),
              (e.pos = this.pos),
              (e.posOut = this.posOut),
              (e.finished = this.finished),
              (e.rounds = s),
              (e.suffix = i),
              (e.outputLen = r),
              (e.enableXOF = n),
              (e.destroyed = this.destroyed),
              e
            );
          }
          constructor(e, t, i, r = !1, s = 24) {
            if (
              (super(),
              (this.pos = 0),
              (this.posOut = 0),
              (this.finished = !1),
              (this.destroyed = !1),
              (this.enableXOF = !1),
              (this.blockLen = e),
              (this.suffix = t),
              (this.outputLen = i),
              (this.enableXOF = r),
              (this.rounds = s),
              nQ(i),
              !(0 < e && e < 200))
            )
              throw Error("only keccak-f1600 function is supported");
            (this.state = new Uint8Array(200)), (this.state32 = n8(this.state));
          }
        }
        let oP = oh(() => new oS(136, 1, 32));
        class oA extends ol {
          update(e) {
            n1(this), n$((e = oa(e)));
            let { view: t, buffer: i, blockLen: r } = this,
              s = e.length;
            for (let n = 0; n < s; ) {
              let o = Math.min(r - this.pos, s - n);
              if (o === r) {
                let t = n6(e);
                for (; r <= s - n; n += r) this.process(t, n);
                continue;
              }
              i.set(e.subarray(n, n + o), this.pos),
                (this.pos += o),
                (n += o),
                this.pos === r && (this.process(t, 0), (this.pos = 0));
            }
            return (this.length += e.length), this.roundClean(), this;
          }
          digestInto(e) {
            n1(this), n2(e, this), (this.finished = !0);
            let { buffer: t, view: i, blockLen: r, isLE: s } = this,
              { pos: n } = this;
            (t[n++] = 128),
              n3(this.buffer.subarray(n)),
              this.padOffset > r - n && (this.process(i, 0), (n = 0));
            for (let e = n; e < r; e++) t[e] = 0;
            (function (e, t, i, r) {
              if ("function" == typeof e.setBigUint64)
                return e.setBigUint64(t, i, r);
              let s = BigInt(32),
                n = BigInt(0xffffffff),
                o = Number((i >> s) & n),
                a = Number(i & n),
                c = 4 * !!r,
                l = 4 * !r;
              e.setUint32(t + c, o, r), e.setUint32(t + l, a, r);
            })(i, r - 8, BigInt(8 * this.length), s),
              this.process(i, 0);
            let o = n6(e),
              a = this.outputLen;
            if (a % 4)
              throw Error("_sha2: outputLen should be aligned to 32bit");
            let c = a / 4,
              l = this.get();
            if (c > l.length) throw Error("_sha2: outputLen bigger than state");
            for (let e = 0; e < c; e++) o.setUint32(4 * e, l[e], s);
          }
          digest() {
            let { buffer: e, outputLen: t } = this;
            this.digestInto(e);
            let i = e.slice(0, t);
            return this.destroy(), i;
          }
          _cloneInto(e) {
            e || (e = new this.constructor()), e.set(...this.get());
            let {
              blockLen: t,
              buffer: i,
              length: r,
              finished: s,
              destroyed: n,
              pos: o,
            } = this;
            return (
              (e.destroyed = n),
              (e.finished = s),
              (e.length = r),
              (e.pos = o),
              r % t && e.buffer.set(i),
              e
            );
          }
          clone() {
            return this._cloneInto();
          }
          constructor(e, t, i, r) {
            super(),
              (this.finished = !1),
              (this.length = 0),
              (this.pos = 0),
              (this.destroyed = !1),
              (this.blockLen = e),
              (this.outputLen = t),
              (this.padOffset = i),
              (this.isLE = r),
              (this.buffer = new Uint8Array(e)),
              (this.view = n6(this.buffer));
          }
        }
        let oO = Uint32Array.from([
            0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
            0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
          ]),
          oC = Uint32Array.from([
            0xcbbb9d5d, 0xc1059ed8, 0x629a292a, 0x367cd507, 0x9159015a,
            0x3070dd17, 0x152fecd8, 0xf70e5939, 0x67332667, 0xffc00b31,
            0x8eb44a87, 0x68581511, 0xdb0c2e0d, 0x64f98fa7, 0x47b5481d,
            0xbefa4fa4,
          ]),
          oT = Uint32Array.from([
            0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372,
            0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1,
            0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19,
            0x137e2179,
          ]),
          oN = Uint32Array.from([
            0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
            0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
            0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
            0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc,
            0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152,
            0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
            0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc,
            0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
            0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
            0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08,
            0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f,
            0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
            0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
          ]),
          oU = new Uint32Array(64);
        class oR extends oA {
          get() {
            let { A: e, B: t, C: i, D: r, E: s, F: n, G: o, H: a } = this;
            return [e, t, i, r, s, n, o, a];
          }
          set(e, t, i, r, s, n, o, a) {
            (this.A = 0 | e),
              (this.B = 0 | t),
              (this.C = 0 | i),
              (this.D = 0 | r),
              (this.E = 0 | s),
              (this.F = 0 | n),
              (this.G = 0 | o),
              (this.H = 0 | a);
          }
          process(e, t) {
            for (let i = 0; i < 16; i++, t += 4) oU[i] = e.getUint32(t, !1);
            for (let e = 16; e < 64; e++) {
              let t = oU[e - 15],
                i = oU[e - 2],
                r = n5(t, 7) ^ n5(t, 18) ^ (t >>> 3),
                s = n5(i, 17) ^ n5(i, 19) ^ (i >>> 10);
              oU[e] = (s + oU[e - 7] + r + oU[e - 16]) | 0;
            }
            let { A: i, B: r, C: s, D: n, E: o, F: a, G: c, H: l } = this;
            for (let e = 0; e < 64; e++) {
              var h, u, d, f;
              let t =
                  (l +
                    (n5(o, 6) ^ n5(o, 11) ^ n5(o, 25)) +
                    (((h = o) & a) ^ (~h & c)) +
                    oN[e] +
                    oU[e]) |
                  0,
                p =
                  ((n5(i, 2) ^ n5(i, 13) ^ n5(i, 22)) +
                    (((u = i) & (d = r)) ^ (u & (f = s)) ^ (d & f))) |
                  0;
              (l = c),
                (c = a),
                (a = o),
                (o = (n + t) | 0),
                (n = s),
                (s = r),
                (r = i),
                (i = (t + p) | 0);
            }
            (i = (i + this.A) | 0),
              (r = (r + this.B) | 0),
              (s = (s + this.C) | 0),
              (n = (n + this.D) | 0),
              (o = (o + this.E) | 0),
              (a = (a + this.F) | 0),
              (c = (c + this.G) | 0),
              (l = (l + this.H) | 0),
              this.set(i, r, s, n, o, a, c, l);
          }
          roundClean() {
            n3(oU);
          }
          destroy() {
            this.set(0, 0, 0, 0, 0, 0, 0, 0), n3(this.buffer);
          }
          constructor(e = 32) {
            super(64, e, 8, !1),
              (this.A = 0 | oO[0]),
              (this.B = 0 | oO[1]),
              (this.C = 0 | oO[2]),
              (this.D = 0 | oO[3]),
              (this.E = 0 | oO[4]),
              (this.F = 0 | oO[5]),
              (this.G = 0 | oO[6]),
              (this.H = 0 | oO[7]);
          }
        }
        let oB = nk(
            [
              "0x428a2f98d728ae22",
              "0x7137449123ef65cd",
              "0xb5c0fbcfec4d3b2f",
              "0xe9b5dba58189dbbc",
              "0x3956c25bf348b538",
              "0x59f111f1b605d019",
              "0x923f82a4af194f9b",
              "0xab1c5ed5da6d8118",
              "0xd807aa98a3030242",
              "0x12835b0145706fbe",
              "0x243185be4ee4b28c",
              "0x550c7dc3d5ffb4e2",
              "0x72be5d74f27b896f",
              "0x80deb1fe3b1696b1",
              "0x9bdc06a725c71235",
              "0xc19bf174cf692694",
              "0xe49b69c19ef14ad2",
              "0xefbe4786384f25e3",
              "0x0fc19dc68b8cd5b5",
              "0x240ca1cc77ac9c65",
              "0x2de92c6f592b0275",
              "0x4a7484aa6ea6e483",
              "0x5cb0a9dcbd41fbd4",
              "0x76f988da831153b5",
              "0x983e5152ee66dfab",
              "0xa831c66d2db43210",
              "0xb00327c898fb213f",
              "0xbf597fc7beef0ee4",
              "0xc6e00bf33da88fc2",
              "0xd5a79147930aa725",
              "0x06ca6351e003826f",
              "0x142929670a0e6e70",
              "0x27b70a8546d22ffc",
              "0x2e1b21385c26c926",
              "0x4d2c6dfc5ac42aed",
              "0x53380d139d95b3df",
              "0x650a73548baf63de",
              "0x766a0abb3c77b2a8",
              "0x81c2c92e47edaee6",
              "0x92722c851482353b",
              "0xa2bfe8a14cf10364",
              "0xa81a664bbc423001",
              "0xc24b8b70d0f89791",
              "0xc76c51a30654be30",
              "0xd192e819d6ef5218",
              "0xd69906245565a910",
              "0xf40e35855771202a",
              "0x106aa07032bbd1b8",
              "0x19a4c116b8d2d0c8",
              "0x1e376c085141ab53",
              "0x2748774cdf8eeb99",
              "0x34b0bcb5e19b48a8",
              "0x391c0cb3c5c95a63",
              "0x4ed8aa4ae3418acb",
              "0x5b9cca4f7763e373",
              "0x682e6ff3d6b2b8a3",
              "0x748f82ee5defb2fc",
              "0x78a5636f43172f60",
              "0x84c87814a1f0ab72",
              "0x8cc702081a6439ec",
              "0x90befffa23631e28",
              "0xa4506cebde82bde9",
              "0xbef9a3f7b2c67915",
              "0xc67178f2e372532b",
              "0xca273eceea26619c",
              "0xd186b8c721c0c207",
              "0xeada7dd6cde0eb1e",
              "0xf57d4f7fee6ed178",
              "0x06f067aa72176fba",
              "0x0a637dc5a2c898a6",
              "0x113f9804bef90dae",
              "0x1b710b35131c471b",
              "0x28db77f523047d84",
              "0x32caab7b40c72493",
              "0x3c9ebe0a15c9bebc",
              "0x431d67c49c100d4c",
              "0x4cc5d4becb3e42b6",
              "0x597f299cfc657e2a",
              "0x5fcb6fab3ad6faec",
              "0x6c44198c4a475817",
            ].map((e) => BigInt(e))
          ),
          ok = oB[0],
          oj = oB[1],
          oL = new Uint32Array(80),
          oq = new Uint32Array(80);
        class oM extends oA {
          get() {
            let {
              Ah: e,
              Al: t,
              Bh: i,
              Bl: r,
              Ch: s,
              Cl: n,
              Dh: o,
              Dl: a,
              Eh: c,
              El: l,
              Fh: h,
              Fl: u,
              Gh: d,
              Gl: f,
              Hh: p,
              Hl: g,
            } = this;
            return [e, t, i, r, s, n, o, a, c, l, h, u, d, f, p, g];
          }
          set(e, t, i, r, s, n, o, a, c, l, h, u, d, f, p, g) {
            (this.Ah = 0 | e),
              (this.Al = 0 | t),
              (this.Bh = 0 | i),
              (this.Bl = 0 | r),
              (this.Ch = 0 | s),
              (this.Cl = 0 | n),
              (this.Dh = 0 | o),
              (this.Dl = 0 | a),
              (this.Eh = 0 | c),
              (this.El = 0 | l),
              (this.Fh = 0 | h),
              (this.Fl = 0 | u),
              (this.Gh = 0 | d),
              (this.Gl = 0 | f),
              (this.Hh = 0 | p),
              (this.Hl = 0 | g);
          }
          process(e, t) {
            for (let i = 0; i < 16; i++, t += 4)
              (oL[i] = e.getUint32(t)), (oq[i] = e.getUint32((t += 4)));
            for (let e = 16; e < 80; e++) {
              let t = 0 | oL[e - 15],
                i = 0 | oq[e - 15],
                r = nq(t, i, 1) ^ nq(t, i, 8) ^ nj(t, i, 7),
                s = nM(t, i, 1) ^ nM(t, i, 8) ^ nL(t, i, 7),
                n = 0 | oL[e - 2],
                o = 0 | oq[e - 2],
                a = nq(n, o, 19) ^ nz(n, o, 61) ^ nj(n, o, 6),
                c = nW(
                  s,
                  nM(n, o, 19) ^ nF(n, o, 61) ^ nL(n, o, 6),
                  oq[e - 7],
                  oq[e - 16]
                ),
                l = nG(c, r, a, oL[e - 7], oL[e - 16]);
              (oL[e] = 0 | l), (oq[e] = 0 | c);
            }
            let {
              Ah: i,
              Al: r,
              Bh: s,
              Bl: n,
              Ch: o,
              Cl: a,
              Dh: c,
              Dl: l,
              Eh: h,
              El: u,
              Fh: d,
              Fl: f,
              Gh: p,
              Gl: g,
              Hh: y,
              Hl: b,
            } = this;
            for (let e = 0; e < 80; e++) {
              let t = nq(h, u, 14) ^ nq(h, u, 18) ^ nz(h, u, 41),
                m = nM(h, u, 14) ^ nM(h, u, 18) ^ nF(h, u, 41),
                v = (h & d) ^ (~h & p),
                w = nY(b, m, (u & f) ^ (~u & g), oj[e], oq[e]),
                E = nJ(w, y, t, v, ok[e], oL[e]),
                x = 0 | w,
                I = nq(i, r, 28) ^ nz(i, r, 34) ^ nz(i, r, 39),
                _ = nM(i, r, 28) ^ nF(i, r, 34) ^ nF(i, r, 39),
                D = (i & s) ^ (i & o) ^ (s & o),
                S = (r & n) ^ (r & a) ^ (n & a);
              (y = 0 | p),
                (b = 0 | g),
                (p = 0 | d),
                (g = 0 | f),
                (d = 0 | h),
                (f = 0 | u),
                ({ h: h, l: u } = nH(0 | c, 0 | l, 0 | E, 0 | x)),
                (c = 0 | o),
                (l = 0 | a),
                (o = 0 | s),
                (a = 0 | n),
                (s = 0 | i),
                (n = 0 | r);
              let P = nV(x, _, S);
              (i = nK(P, E, I, D)), (r = 0 | P);
            }
            ({ h: i, l: r } = nH(0 | this.Ah, 0 | this.Al, 0 | i, 0 | r)),
              ({ h: s, l: n } = nH(0 | this.Bh, 0 | this.Bl, 0 | s, 0 | n)),
              ({ h: o, l: a } = nH(0 | this.Ch, 0 | this.Cl, 0 | o, 0 | a)),
              ({ h: c, l: l } = nH(0 | this.Dh, 0 | this.Dl, 0 | c, 0 | l)),
              ({ h: h, l: u } = nH(0 | this.Eh, 0 | this.El, 0 | h, 0 | u)),
              ({ h: d, l: f } = nH(0 | this.Fh, 0 | this.Fl, 0 | d, 0 | f)),
              ({ h: p, l: g } = nH(0 | this.Gh, 0 | this.Gl, 0 | p, 0 | g)),
              ({ h: y, l: b } = nH(0 | this.Hh, 0 | this.Hl, 0 | y, 0 | b)),
              this.set(i, r, s, n, o, a, c, l, h, u, d, f, p, g, y, b);
          }
          roundClean() {
            n3(oL, oq);
          }
          destroy() {
            n3(this.buffer),
              this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          }
          constructor(e = 64) {
            super(128, e, 16, !1),
              (this.Ah = 0 | oT[0]),
              (this.Al = 0 | oT[1]),
              (this.Bh = 0 | oT[2]),
              (this.Bl = 0 | oT[3]),
              (this.Ch = 0 | oT[4]),
              (this.Cl = 0 | oT[5]),
              (this.Dh = 0 | oT[6]),
              (this.Dl = 0 | oT[7]),
              (this.Eh = 0 | oT[8]),
              (this.El = 0 | oT[9]),
              (this.Fh = 0 | oT[10]),
              (this.Fl = 0 | oT[11]),
              (this.Gh = 0 | oT[12]),
              (this.Gl = 0 | oT[13]),
              (this.Hh = 0 | oT[14]),
              (this.Hl = 0 | oT[15]);
          }
        }
        class oz extends oM {
          constructor() {
            super(48),
              (this.Ah = 0 | oC[0]),
              (this.Al = 0 | oC[1]),
              (this.Bh = 0 | oC[2]),
              (this.Bl = 0 | oC[3]),
              (this.Ch = 0 | oC[4]),
              (this.Cl = 0 | oC[5]),
              (this.Dh = 0 | oC[6]),
              (this.Dl = 0 | oC[7]),
              (this.Eh = 0 | oC[8]),
              (this.El = 0 | oC[9]),
              (this.Fh = 0 | oC[10]),
              (this.Fl = 0 | oC[11]),
              (this.Gh = 0 | oC[12]),
              (this.Gl = 0 | oC[13]),
              (this.Hh = 0 | oC[14]),
              (this.Hl = 0 | oC[15]);
          }
        }
        let oF = Uint32Array.from([
          0x22312194, 0xfc2bf72c, 0x9f555fa3, 0xc84c64c2, 0x2393b86b,
          0x6f53b151, 0x96387719, 0x5940eabd, 0x96283ee2, 0xa88effe3,
          0xbe5e1e25, 0x53863992, 0x2b0199fc, 0x2c85b8aa, 0xeb72ddc, 0x81c52ca2,
        ]);
        class oH extends oM {
          constructor() {
            super(32),
              (this.Ah = 0 | oF[0]),
              (this.Al = 0 | oF[1]),
              (this.Bh = 0 | oF[2]),
              (this.Bl = 0 | oF[3]),
              (this.Ch = 0 | oF[4]),
              (this.Cl = 0 | oF[5]),
              (this.Dh = 0 | oF[6]),
              (this.Dl = 0 | oF[7]),
              (this.Eh = 0 | oF[8]),
              (this.El = 0 | oF[9]),
              (this.Fh = 0 | oF[10]),
              (this.Fl = 0 | oF[11]),
              (this.Gh = 0 | oF[12]),
              (this.Gl = 0 | oF[13]),
              (this.Hh = 0 | oF[14]),
              (this.Hl = 0 | oF[15]);
          }
        }
        let oV = oh(() => new oR()),
          oK = oh(() => new oM()),
          oW = oh(() => new oz()),
          oG = oh(() => new oH()),
          oY = Uint8Array.from([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8,
            9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13,
            10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10,
            4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13,
            2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15,
            14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9,
            5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7,
            1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0,
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8,
            9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13,
            10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10,
            4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13,
            2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9,
          ]),
          oJ = Uint32Array.from([
            0xf3bcc908, 0x6a09e667, 0x84caa73b, 0xbb67ae85, 0xfe94f82b,
            0x3c6ef372, 0x5f1d36f1, 0xa54ff53a, 0xade682d1, 0x510e527f,
            0x2b3e6c1f, 0x9b05688c, 0xfb41bd6b, 0x1f83d9ab, 0x137e2179,
            0x5be0cd19,
          ]),
          oZ = new Uint32Array(32);
        function oX(e, t, i, r, s, n) {
          let o = s[n],
            a = s[n + 1],
            c = oZ[2 * e],
            l = oZ[2 * e + 1],
            h = oZ[2 * t],
            u = oZ[2 * t + 1],
            d = oZ[2 * i],
            f = oZ[2 * i + 1],
            p = oZ[2 * r],
            g = oZ[2 * r + 1],
            y = nV(c, h, o);
          (l = nK(y, l, u, a)),
            (c = 0 | y),
            ({ Dh: g, Dl: p } = { Dh: g ^ l, Dl: p ^ c }),
            ({ Dh: g, Dl: p } = { Dh: p, Dl: g }),
            ({ h: f, l: d } = nH(f, d, g, p)),
            ({ Bh: u, Bl: h } = { Bh: u ^ f, Bl: h ^ d }),
            ({ Bh: u, Bl: h } = { Bh: nq(u, h, 24), Bl: nM(u, h, 24) }),
            (oZ[2 * e] = c),
            (oZ[2 * e + 1] = l),
            (oZ[2 * t] = h),
            (oZ[2 * t + 1] = u),
            (oZ[2 * i] = d),
            (oZ[2 * i + 1] = f),
            (oZ[2 * r] = p),
            (oZ[2 * r + 1] = g);
        }
        function oQ(e, t, i, r, s, n) {
          let o = s[n],
            a = s[n + 1],
            c = oZ[2 * e],
            l = oZ[2 * e + 1],
            h = oZ[2 * t],
            u = oZ[2 * t + 1],
            d = oZ[2 * i],
            f = oZ[2 * i + 1],
            p = oZ[2 * r],
            g = oZ[2 * r + 1],
            y = nV(c, h, o);
          (l = nK(y, l, u, a)),
            (c = 0 | y),
            ({ Dh: g, Dl: p } = { Dh: g ^ l, Dl: p ^ c }),
            ({ Dh: g, Dl: p } = { Dh: nq(g, p, 16), Dl: nM(g, p, 16) }),
            ({ h: f, l: d } = nH(f, d, g, p)),
            ({ Bh: u, Bl: h } = { Bh: u ^ f, Bl: h ^ d }),
            ({ Bh: u, Bl: h } = { Bh: nz(u, h, 63), Bl: nF(u, h, 63) }),
            (oZ[2 * e] = c),
            (oZ[2 * e + 1] = l),
            (oZ[2 * t] = h),
            (oZ[2 * t + 1] = u),
            (oZ[2 * i] = d),
            (oZ[2 * i + 1] = f),
            (oZ[2 * r] = p),
            (oZ[2 * r + 1] = g);
        }
        class o$ extends ol {
          update(e) {
            n1(this), n$((e = oa(e)));
            let { blockLen: t, buffer: i, buffer32: r } = this,
              s = e.length,
              n = e.byteOffset,
              o = e.buffer;
            for (let a = 0; a < s; ) {
              this.pos === t &&
                (oe(r), this.compress(r, 0, !1), oe(r), (this.pos = 0));
              let c = Math.min(t - this.pos, s - a),
                l = n + a;
              if (c === t && !(l % 4) && a + c < s) {
                let e = new Uint32Array(o, l, Math.floor((s - a) / 4));
                oe(e);
                for (let i = 0; a + t < s; i += r.length, a += t)
                  (this.length += t), this.compress(e, i, !1);
                oe(e);
                continue;
              }
              i.set(e.subarray(a, a + c), this.pos),
                (this.pos += c),
                (this.length += c),
                (a += c);
            }
            return this;
          }
          digestInto(e) {
            n1(this), n2(e, this);
            let { pos: t, buffer32: i } = this;
            (this.finished = !0),
              n3(this.buffer.subarray(t)),
              oe(i),
              this.compress(i, 0, !0),
              oe(i);
            let r = n8(e);
            this.get().forEach((e, t) => (r[t] = n7(e)));
          }
          digest() {
            let { buffer: e, outputLen: t } = this;
            this.digestInto(e);
            let i = e.slice(0, t);
            return this.destroy(), i;
          }
          _cloneInto(e) {
            let {
              buffer: t,
              length: i,
              finished: r,
              destroyed: s,
              outputLen: n,
              pos: o,
            } = this;
            return (
              e || (e = new this.constructor({ dkLen: n })),
              e.set(...this.get()),
              e.buffer.set(t),
              (e.destroyed = s),
              (e.finished = r),
              (e.length = i),
              (e.pos = o),
              (e.outputLen = n),
              e
            );
          }
          clone() {
            return this._cloneInto();
          }
          constructor(e, t) {
            super(),
              (this.finished = !1),
              (this.destroyed = !1),
              (this.length = 0),
              (this.pos = 0),
              nQ(e),
              nQ(t),
              (this.blockLen = e),
              (this.outputLen = t),
              (this.buffer = new Uint8Array(e)),
              (this.buffer32 = n8(this.buffer));
          }
        }
        class o0 extends o$ {
          get() {
            let {
              v0l: e,
              v0h: t,
              v1l: i,
              v1h: r,
              v2l: s,
              v2h: n,
              v3l: o,
              v3h: a,
              v4l: c,
              v4h: l,
              v5l: h,
              v5h: u,
              v6l: d,
              v6h: f,
              v7l: p,
              v7h: g,
            } = this;
            return [e, t, i, r, s, n, o, a, c, l, h, u, d, f, p, g];
          }
          set(e, t, i, r, s, n, o, a, c, l, h, u, d, f, p, g) {
            (this.v0l = 0 | e),
              (this.v0h = 0 | t),
              (this.v1l = 0 | i),
              (this.v1h = 0 | r),
              (this.v2l = 0 | s),
              (this.v2h = 0 | n),
              (this.v3l = 0 | o),
              (this.v3h = 0 | a),
              (this.v4l = 0 | c),
              (this.v4h = 0 | l),
              (this.v5l = 0 | h),
              (this.v5h = 0 | u),
              (this.v6l = 0 | d),
              (this.v6h = 0 | f),
              (this.v7l = 0 | p),
              (this.v7h = 0 | g);
          }
          compress(e, t, i) {
            this.get().forEach((e, t) => (oZ[t] = e)), oZ.set(oJ, 16);
            let { h: r, l: s } = nB(BigInt(this.length));
            (oZ[24] = oJ[8] ^ s),
              (oZ[25] = oJ[9] ^ r),
              i && ((oZ[28] = ~oZ[28]), (oZ[29] = ~oZ[29]));
            let n = 0;
            for (let i = 0; i < 12; i++)
              oX(0, 4, 8, 12, e, t + 2 * oY[n++]),
                oQ(0, 4, 8, 12, e, t + 2 * oY[n++]),
                oX(1, 5, 9, 13, e, t + 2 * oY[n++]),
                oQ(1, 5, 9, 13, e, t + 2 * oY[n++]),
                oX(2, 6, 10, 14, e, t + 2 * oY[n++]),
                oQ(2, 6, 10, 14, e, t + 2 * oY[n++]),
                oX(3, 7, 11, 15, e, t + 2 * oY[n++]),
                oQ(3, 7, 11, 15, e, t + 2 * oY[n++]),
                oX(0, 5, 10, 15, e, t + 2 * oY[n++]),
                oQ(0, 5, 10, 15, e, t + 2 * oY[n++]),
                oX(1, 6, 11, 12, e, t + 2 * oY[n++]),
                oQ(1, 6, 11, 12, e, t + 2 * oY[n++]),
                oX(2, 7, 8, 13, e, t + 2 * oY[n++]),
                oQ(2, 7, 8, 13, e, t + 2 * oY[n++]),
                oX(3, 4, 9, 14, e, t + 2 * oY[n++]),
                oQ(3, 4, 9, 14, e, t + 2 * oY[n++]);
            (this.v0l ^= oZ[0] ^ oZ[16]),
              (this.v0h ^= oZ[1] ^ oZ[17]),
              (this.v1l ^= oZ[2] ^ oZ[18]),
              (this.v1h ^= oZ[3] ^ oZ[19]),
              (this.v2l ^= oZ[4] ^ oZ[20]),
              (this.v2h ^= oZ[5] ^ oZ[21]),
              (this.v3l ^= oZ[6] ^ oZ[22]),
              (this.v3h ^= oZ[7] ^ oZ[23]),
              (this.v4l ^= oZ[8] ^ oZ[24]),
              (this.v4h ^= oZ[9] ^ oZ[25]),
              (this.v5l ^= oZ[10] ^ oZ[26]),
              (this.v5h ^= oZ[11] ^ oZ[27]),
              (this.v6l ^= oZ[12] ^ oZ[28]),
              (this.v6h ^= oZ[13] ^ oZ[29]),
              (this.v7l ^= oZ[14] ^ oZ[30]),
              (this.v7h ^= oZ[15] ^ oZ[31]),
              n3(oZ);
          }
          destroy() {
            (this.destroyed = !0),
              n3(this.buffer32),
              this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          }
          constructor(e = {}) {
            let t = void 0 === e.dkLen ? 64 : e.dkLen;
            super(128, t),
              (this.v0l = 0 | oJ[0]),
              (this.v0h = 0 | oJ[1]),
              (this.v1l = 0 | oJ[2]),
              (this.v1h = 0 | oJ[3]),
              (this.v2l = 0 | oJ[4]),
              (this.v2h = 0 | oJ[5]),
              (this.v3l = 0 | oJ[6]),
              (this.v3h = 0 | oJ[7]),
              (this.v4l = 0 | oJ[8]),
              (this.v4h = 0 | oJ[9]),
              (this.v5l = 0 | oJ[10]),
              (this.v5h = 0 | oJ[11]),
              (this.v6l = 0 | oJ[12]),
              (this.v6h = 0 | oJ[13]),
              (this.v7l = 0 | oJ[14]),
              (this.v7h = 0 | oJ[15]),
              (function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  i = arguments.length > 2 ? arguments[2] : void 0,
                  r = arguments.length > 3 ? arguments[3] : void 0,
                  s = arguments.length > 4 ? arguments[4] : void 0;
                if ((nQ(i), e < 0 || e > i))
                  throw Error("outputLen bigger than keyLen");
                let { key: n, salt: o, personalization: a } = t;
                if (void 0 !== n && (n.length < 1 || n.length > i))
                  throw Error("key length must be undefined or 1.." + i);
                if (void 0 !== o && o.length !== r)
                  throw Error("salt must be undefined or " + r);
                if (void 0 !== a && a.length !== s)
                  throw Error("personalization must be undefined or " + s);
              })(t, e, 64, 16, 16);
            let { key: i, personalization: r, salt: s } = e,
              n = 0;
            if (
              (void 0 !== i && (n = (i = oa(i)).length),
              (this.v0l ^= this.outputLen | (n << 8) | 0x1010000),
              void 0 !== s)
            ) {
              let e = n8((s = oa(s)));
              (this.v4l ^= n7(e[0])),
                (this.v4h ^= n7(e[1])),
                (this.v5l ^= n7(e[2])),
                (this.v5h ^= n7(e[3]));
            }
            if (void 0 !== r) {
              let e = n8((r = oa(r)));
              (this.v6l ^= n7(e[0])),
                (this.v6h ^= n7(e[1])),
                (this.v7l ^= n7(e[2])),
                (this.v7h ^= n7(e[3]));
            }
            if (void 0 !== i) {
              let e = new Uint8Array(this.blockLen);
              e.set(i), this.update(e);
            }
          }
        }
        let o1 = (function (e) {
          let t = (t, i) => e(i).update(oa(t)).digest(),
            i = e({});
          return (
            (t.outputLen = i.outputLen),
            (t.blockLen = i.blockLen),
            (t.create = (t) => e(t)),
            t
          );
        })((e) => new o0(e));
        function o2(e) {
          let t = "\x19Ethereum Signed Message:\n".concat(e.length),
            i = new TextEncoder().encode(t + e);
          return "0x" + r.Buffer.from(oP(i)).toString("hex");
        }
        async function o8(e, t, i, r, s, n) {
          switch (i.t) {
            case "eip191":
              return await o3(e, t, i.s);
            case "eip1271":
              return await o6(e, t, i.s, r, s, n);
            default:
              throw Error(
                "verifySignature failed: Attempted to verify CacaoSignature with unknown type: ".concat(
                  i.t
                )
              );
          }
        }
        async function o3(e, t, i) {
          return (
            (await iQ({ hash: o2(t), signature: i })).toLowerCase() ===
            e.toLowerCase()
          );
        }
        async function o6(e, t, i, r, s, n) {
          let o = s9(r);
          if (!o.namespace || !o.reference)
            throw Error(
              "isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ".concat(
                r
              )
            );
          try {
            let o = "0x1626ba7e",
              a = i.substring(2),
              c = (a.length / 2).toString(16).padStart(64, "0"),
              l = (t.startsWith("0x") ? t : o2(t)).substring(2),
              h =
                o +
                l +
                "0000000000000000000000000000000000000000000000000000000000000040" +
                c +
                a,
              u = await fetch(
                ""
                  .concat(n || "https://rpc.walletconnect.org/v1", "/?chainId=")
                  .concat(r, "&projectId=")
                  .concat(s),
                {
                  headers: { "Content-Type": "application/json" },
                  method: "POST",
                  body: JSON.stringify({
                    id: Date.now() + Math.floor(1e3 * Math.random()),
                    jsonrpc: "2.0",
                    method: "eth_call",
                    params: [{ to: e, data: h }, "latest"],
                  }),
                }
              ),
              { result: d } = await u.json();
            return (
              !!d && d.slice(0, o.length).toLowerCase() === o.toLowerCase()
            );
          } catch (e) {
            return console.error("isValidEip1271Signature: ", e), !1;
          }
        }
        function o5(e) {
          let t = new Uint8Array(
            oV(
              (function (e) {
                if (e instanceof Uint8Array) return e;
                if (Array.isArray(e)) return new Uint8Array(e);
                if ("object" == typeof e && null != e && e.data)
                  return new Uint8Array(Object.values(e.data));
                if ("object" == typeof e && e)
                  return new Uint8Array(Object.values(e));
                throw Error(
                  "getNearUint8ArrayFromBytes: Unexpected result type from bytes array"
                );
              })(e)
            )
          );
          return i$.encode(t);
        }
        function o4(e) {
          var t;
          let i = ((t = r.Buffer.from(e, "base64")), new rh(void 0).decode(t))
            .txn;
          if (!i)
            throw Error("Invalid signed transaction: missing 'txn' field");
          let s = new ru(void 0).encodeSharedRef(i),
            n = r.Buffer.from("TX"),
            o = oG(r.Buffer.concat([n, r.Buffer.from(s)]));
          return rP.encode(o).replace(/=+$/, "");
        }
        function o9(e) {
          let t = [],
            i = BigInt(e);
          for (; i >= BigInt(128); )
            t.push(Number((i & BigInt(127)) | BigInt(128))), (i >>= BigInt(7));
          return t.push(Number(i)), r.Buffer.from(t);
        }
        var o7 = Object.defineProperty,
          ae = Object.defineProperties,
          at = Object.getOwnPropertyDescriptors,
          ai = Object.getOwnPropertySymbols,
          ar = Object.prototype.hasOwnProperty,
          as = Object.prototype.propertyIsEnumerable,
          an = (e, t, i) =>
            t in e
              ? o7(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i);
        let ao = (e) => (null == e ? void 0 : e.split(":")),
          aa = (e) => {
            let t = e && ao(e);
            if (t) return t[2] + ":" + t[3];
          },
          ac = (e) => {
            let t = e && ao(e);
            if (t) return t.pop();
          };
        async function al(e) {
          let { cacao: t, projectId: i } = e,
            { s: r, p: s } = t,
            n = ah(s, s.iss),
            o = ac(s.iss);
          return await o8(o, n, r, aa(s.iss), i);
        }
        let ah = (e, t) => {
          let i = "".concat(
              e.domain,
              " wants you to sign in with your Ethereum account:"
            ),
            r = ac(t);
          if (!e.aud && !e.uri)
            throw Error(
              "Either `aud` or `uri` is required to construct the message"
            );
          let s = e.statement || void 0,
            n = "URI: ".concat(e.aud || e.uri),
            o = "Version: ".concat(e.version),
            a = "Chain ID: ".concat(
              ((e) => {
                let t = e && ao(e);
                if (t) return e.includes("did:pkh:") ? t[3] : t[1];
              })(t)
            ),
            c = "Nonce: ".concat(e.nonce),
            l = "Issued At: ".concat(e.iat),
            h = e.exp ? "Expiration Time: ".concat(e.exp) : void 0,
            u = e.nbf ? "Not Before: ".concat(e.nbf) : void 0,
            d = e.requestId ? "Request ID: ".concat(e.requestId) : void 0,
            f = e.resources
              ? "Resources:".concat(
                  e.resources.map((e) => "\n- ".concat(e)).join("")
                )
              : void 0,
            p = ay(e.resources);
          return (
            p &&
              (s = (function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  t = arguments.length > 1 ? arguments[1] : void 0;
                au(t);
                let i =
                  "I further authorize the stated URI to perform the following actions on my behalf: ";
                if (e.includes(i)) return e;
                let r = [],
                  s = 0;
                Object.keys(t.att).forEach((e) => {
                  let i = Object.keys(t.att[e]).map((e) => ({
                    ability: e.split("/")[0],
                    action: e.split("/")[1],
                  }));
                  i.sort((e, t) => e.action.localeCompare(t.action));
                  let n = {};
                  i.forEach((e) => {
                    n[e.ability] || (n[e.ability] = []),
                      n[e.ability].push(e.action);
                  });
                  let o = Object.keys(n).map(
                    (t) => (
                      s++,
                      "("
                        .concat(s, ") '")
                        .concat(t, "': '")
                        .concat(n[t].join("', '"), "' for '")
                        .concat(e, "'.")
                    )
                  );
                  r.push(o.join(", ").replace(".,", "."));
                });
                let n = r.join(" "),
                  o = "".concat(i).concat(n);
                return "".concat(e ? e + " " : "").concat(o);
              })(s, af(p))),
            [i, r, "", s, "", n, o, a, c, l, h, u, d, f]
              .filter((e) => null != e)
              .join("\n")
          );
        };
        function au(e) {
          if (!e) throw Error("No recap provided, value is undefined");
          if (!e.att) throw Error("No `att` property found");
          let t = Object.keys(e.att);
          if (!(null != t && t.length))
            throw Error("No resources found in `att` property");
          t.forEach((t) => {
            let i = e.att[t];
            if (Array.isArray(i) || "object" != typeof i)
              throw Error("Resource must be an object: ".concat(t));
            if (!Object.keys(i).length)
              throw Error("Resource object is empty: ".concat(t));
            Object.keys(i).forEach((e) => {
              let t = i[e];
              if (!Array.isArray(t))
                throw Error(
                  "Ability limits "
                    .concat(e, " must be an array of objects, found: ")
                    .concat(t)
                );
              if (!t.length)
                throw Error(
                  "Value of ".concat(
                    e,
                    " is empty array, must be an array with objects"
                  )
                );
              t.forEach((t) => {
                if ("object" != typeof t)
                  throw Error(
                    "Ability limits ("
                      .concat(e, ") must be an array of objects, found: ")
                      .concat(t)
                  );
              });
            });
          });
        }
        function ad(e) {
          return (
            au(e),
            "urn:recap:".concat(
              r.Buffer.from(JSON.stringify(e))
                .toString("base64")
                .replace(/=/g, "")
            )
          );
        }
        function af(e) {
          var t;
          let i =
            ((t = e.replace("urn:recap:", "")),
            JSON.parse(r.Buffer.from(t, "base64").toString("utf-8")));
          return au(i), i;
        }
        function ap(e) {
          var t;
          let i = af(e);
          au(i);
          let r = null == (t = i.att) ? void 0 : t.eip155;
          return r ? Object.keys(r).map((e) => e.split("/")[1]) : [];
        }
        function ag(e) {
          let t = af(e);
          au(t);
          let i = [];
          return (
            Object.values(t.att).forEach((e) => {
              Object.values(e).forEach((e) => {
                var t;
                null != (t = null == e ? void 0 : e[0]) &&
                  t.chains &&
                  i.push(e[0].chains);
              });
            }),
            [...new Set(i.flat())]
          );
        }
        function ay(e) {
          if (!e) return;
          let t = null == e ? void 0 : e[e.length - 1];
          return t && t.includes("urn:recap:") ? t : void 0;
        }
        function ab(e) {
          return (
            e instanceof Uint8Array ||
            (ArrayBuffer.isView(e) && "Uint8Array" === e.constructor.name)
          );
        }
        function am(e) {
          if ("boolean" != typeof e)
            throw Error("boolean expected, not ".concat(e));
        }
        function av(e) {
          if (!Number.isSafeInteger(e) || e < 0)
            throw Error("positive integer expected, got " + e);
        }
        function aw(e) {
          for (
            var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            i[r - 1] = arguments[r];
          if (!ab(e)) throw Error("Uint8Array expected");
          if (i.length > 0 && !i.includes(e.length))
            throw Error(
              "Uint8Array expected of length " + i + ", got length=" + e.length
            );
        }
        function aE(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          if (e.destroyed) throw Error("Hash instance has been destroyed");
          if (t && e.finished)
            throw Error("Hash#digest() has already been called");
        }
        function ax(e) {
          return new Uint32Array(
            e.buffer,
            e.byteOffset,
            Math.floor(e.byteLength / 4)
          );
        }
        function aI() {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          for (let e = 0; e < t.length; e++) t[e].fill(0);
        }
        let a_ = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0];
        function aD(e) {
          if ("string" == typeof e)
            e = (function (e) {
              if ("string" != typeof e) throw Error("string expected");
              return new Uint8Array(new TextEncoder().encode(e));
            })(e);
          else if (ab(e)) e = aA(e);
          else throw Error("Uint8Array expected, got " + typeof e);
          return e;
        }
        function aS(e, t) {
          let i =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          if (void 0 === t) return new Uint8Array(e);
          if (t.length !== e)
            throw Error(
              "invalid output length, expected " + e + ", got: " + t.length
            );
          if (i && t.byteOffset % 4 != 0)
            throw Error("invalid output, must be aligned");
          return t;
        }
        function aP(e, t, i, r) {
          if ("function" == typeof e.setBigUint64)
            return e.setBigUint64(t, i, r);
          let s = BigInt(32),
            n = BigInt(0xffffffff),
            o = Number((i >> s) & n),
            a = Number(i & n),
            c = 4 * !!r,
            l = 4 * !r;
          e.setUint32(t + c, o, r), e.setUint32(t + l, a, r);
        }
        function aA(e) {
          return Uint8Array.from(e);
        }
        let aO = (e) =>
            Uint8Array.from(e.split("").map((e) => e.charCodeAt(0))),
          aC = aO("expand 16-byte k"),
          aT = aO("expand 32-byte k"),
          aN = ax(aC),
          aU = ax(aT);
        function aR(e, t) {
          return (e << t) | (e >>> (32 - t));
        }
        function aB(e) {
          return e.byteOffset % 4 == 0;
        }
        let ak = 0x100000000 - 1,
          aj = new Uint32Array(),
          aL = (e, t) => (255 & e[t++]) | ((255 & e[t++]) << 8);
        class aq {
          process(e, t) {
            let i =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              { h: r, r: s } = this,
              n = s[0],
              o = s[1],
              a = s[2],
              c = s[3],
              l = s[4],
              h = s[5],
              u = s[6],
              d = s[7],
              f = s[8],
              p = s[9],
              g = aL(e, t + 0),
              y = aL(e, t + 2),
              b = aL(e, t + 4),
              m = aL(e, t + 6),
              v = aL(e, t + 8),
              w = aL(e, t + 10),
              E = aL(e, t + 12),
              x = aL(e, t + 14),
              I = r[0] + (8191 & g),
              _ = r[1] + (((g >>> 13) | (y << 3)) & 8191),
              D = r[2] + (((y >>> 10) | (b << 6)) & 8191),
              S = r[3] + (((b >>> 7) | (m << 9)) & 8191),
              P = r[4] + (((m >>> 4) | (v << 12)) & 8191),
              A = r[5] + ((v >>> 1) & 8191),
              O = r[6] + (((v >>> 14) | (w << 2)) & 8191),
              C = r[7] + (((w >>> 11) | (E << 5)) & 8191),
              T = r[8] + (((E >>> 8) | (x << 8)) & 8191),
              N = r[9] + ((x >>> 5) | (2048 * !i)),
              U = 0,
              R = 0 + I * n + 5 * p * _ + 5 * f * D + 5 * d * S + 5 * u * P;
            (U = R >>> 13),
              (R &= 8191),
              (R += 5 * h * A + 5 * l * O + 5 * c * C + 5 * a * T + 5 * o * N),
              (U += R >>> 13),
              (R &= 8191);
            let B = U + I * o + _ * n + 5 * p * D + 5 * f * S + 5 * d * P;
            (U = B >>> 13),
              (B &= 8191),
              (B += 5 * u * A + 5 * h * O + 5 * l * C + 5 * c * T + 5 * a * N),
              (U += B >>> 13),
              (B &= 8191);
            let k = U + I * a + _ * o + D * n + 5 * p * S + 5 * f * P;
            (U = k >>> 13),
              (k &= 8191),
              (k += 5 * d * A + 5 * u * O + 5 * h * C + 5 * l * T + 5 * c * N),
              (U += k >>> 13),
              (k &= 8191);
            let j = U + I * c + _ * a + D * o + S * n + 5 * p * P;
            (U = j >>> 13),
              (j &= 8191),
              (j += 5 * f * A + 5 * d * O + 5 * u * C + 5 * h * T + 5 * l * N),
              (U += j >>> 13),
              (j &= 8191);
            let L = U + I * l + _ * c + D * a + S * o + P * n;
            (U = L >>> 13),
              (L &= 8191),
              (L += 5 * p * A + 5 * f * O + 5 * d * C + 5 * u * T + 5 * h * N),
              (U += L >>> 13),
              (L &= 8191);
            let q = U + I * h + _ * l + D * c + S * a + P * o;
            (U = q >>> 13),
              (q &= 8191),
              (q += A * n + 5 * p * O + 5 * f * C + 5 * d * T + 5 * u * N),
              (U += q >>> 13),
              (q &= 8191);
            let M = U + I * u + _ * h + D * l + S * c + P * a;
            (U = M >>> 13),
              (M &= 8191),
              (M += A * o + O * n + 5 * p * C + 5 * f * T + 5 * d * N),
              (U += M >>> 13),
              (M &= 8191);
            let z = U + I * d + _ * u + D * h + S * l + P * c;
            (U = z >>> 13),
              (z &= 8191),
              (z += A * a + O * o + C * n + 5 * p * T + 5 * f * N),
              (U += z >>> 13),
              (z &= 8191);
            let F = U + I * f + _ * d + D * u + S * h + P * l;
            (U = F >>> 13),
              (F &= 8191),
              (F += A * c + O * a + C * o + T * n + 5 * p * N),
              (U += F >>> 13),
              (F &= 8191);
            let H = U + I * p + _ * f + D * d + S * u + P * h;
            (U = H >>> 13),
              (H &= 8191),
              (H += A * l + O * c + C * a + T * o + N * n),
              (U += H >>> 13),
              (H &= 8191),
              (R = 8191 & (U = ((U = ((U << 2) + U) | 0) + R) | 0)),
              (U >>>= 13),
              (B += U),
              (r[0] = R),
              (r[1] = B),
              (r[2] = k),
              (r[3] = j),
              (r[4] = L),
              (r[5] = q),
              (r[6] = M),
              (r[7] = z),
              (r[8] = F),
              (r[9] = H);
          }
          finalize() {
            let { h: e, pad: t } = this,
              i = new Uint16Array(10),
              r = e[1] >>> 13;
            e[1] &= 8191;
            for (let t = 2; t < 10; t++)
              (e[t] += r), (r = e[t] >>> 13), (e[t] &= 8191);
            (e[0] += 5 * r),
              (r = e[0] >>> 13),
              (e[0] &= 8191),
              (e[1] += r),
              (r = e[1] >>> 13),
              (e[1] &= 8191),
              (e[2] += r),
              (i[0] = e[0] + 5),
              (r = i[0] >>> 13),
              (i[0] &= 8191);
            for (let t = 1; t < 10; t++)
              (i[t] = e[t] + r), (r = i[t] >>> 13), (i[t] &= 8191);
            i[9] -= 8192;
            let s = (1 ^ r) - 1;
            for (let e = 0; e < 10; e++) i[e] &= s;
            s = ~s;
            for (let t = 0; t < 10; t++) e[t] = (e[t] & s) | i[t];
            (e[0] = (e[0] | (e[1] << 13)) & 65535),
              (e[1] = ((e[1] >>> 3) | (e[2] << 10)) & 65535),
              (e[2] = ((e[2] >>> 6) | (e[3] << 7)) & 65535),
              (e[3] = ((e[3] >>> 9) | (e[4] << 4)) & 65535),
              (e[4] = ((e[4] >>> 12) | (e[5] << 1) | (e[6] << 14)) & 65535),
              (e[5] = ((e[6] >>> 2) | (e[7] << 11)) & 65535),
              (e[6] = ((e[7] >>> 5) | (e[8] << 8)) & 65535),
              (e[7] = ((e[8] >>> 8) | (e[9] << 5)) & 65535);
            let n = e[0] + t[0];
            e[0] = 65535 & n;
            for (let i = 1; i < 8; i++)
              (n = (((e[i] + t[i]) | 0) + (n >>> 16)) | 0), (e[i] = 65535 & n);
            aI(i);
          }
          update(e) {
            aE(this), aw((e = aD(e)));
            let { buffer: t, blockLen: i } = this,
              r = e.length;
            for (let s = 0; s < r; ) {
              let n = Math.min(i - this.pos, r - s);
              if (n === i) {
                for (; i <= r - s; s += i) this.process(e, s);
                continue;
              }
              t.set(e.subarray(s, s + n), this.pos),
                (this.pos += n),
                (s += n),
                this.pos === i && (this.process(t, 0, !1), (this.pos = 0));
            }
            return this;
          }
          destroy() {
            aI(this.h, this.r, this.buffer, this.pad);
          }
          digestInto(e) {
            aE(this),
              (function (e, t) {
                aw(e);
                let i = t.outputLen;
                if (e.length < i)
                  throw Error(
                    "digestInto() expects output buffer of length at least " + i
                  );
              })(e, this),
              (this.finished = !0);
            let { buffer: t, h: i } = this,
              { pos: r } = this;
            if (r) {
              for (t[r++] = 1; r < 16; r++) t[r] = 0;
              this.process(t, 0, !0);
            }
            this.finalize();
            let s = 0;
            for (let t = 0; t < 8; t++)
              (e[s++] = i[t] >>> 0), (e[s++] = i[t] >>> 8);
            return e;
          }
          digest() {
            let { buffer: e, outputLen: t } = this;
            this.digestInto(e);
            let i = e.slice(0, t);
            return this.destroy(), i;
          }
          constructor(e) {
            (this.blockLen = 16),
              (this.outputLen = 16),
              (this.buffer = new Uint8Array(16)),
              (this.r = new Uint16Array(10)),
              (this.h = new Uint16Array(10)),
              (this.pad = new Uint16Array(8)),
              (this.pos = 0),
              (this.finished = !1),
              aw((e = aD(e)), 32);
            let t = aL(e, 0),
              i = aL(e, 2),
              r = aL(e, 4),
              s = aL(e, 6),
              n = aL(e, 8),
              o = aL(e, 10),
              a = aL(e, 12),
              c = aL(e, 14);
            (this.r[0] = 8191 & t),
              (this.r[1] = ((t >>> 13) | (i << 3)) & 8191),
              (this.r[2] = ((i >>> 10) | (r << 6)) & 7939),
              (this.r[3] = ((r >>> 7) | (s << 9)) & 8191),
              (this.r[4] = ((s >>> 4) | (n << 12)) & 255),
              (this.r[5] = (n >>> 1) & 8190),
              (this.r[6] = ((n >>> 14) | (o << 2)) & 8191),
              (this.r[7] = ((o >>> 11) | (a << 5)) & 8065),
              (this.r[8] = ((a >>> 8) | (c << 8)) & 8191),
              (this.r[9] = (c >>> 5) & 127);
            for (let t = 0; t < 8; t++) this.pad[t] = aL(e, 16 + 2 * t);
          }
        }
        let aM = (function (e) {
            let t = (t, i) => e(i).update(aD(t)).digest(),
              i = e(new Uint8Array(32));
            return (
              (t.outputLen = i.outputLen),
              (t.blockLen = i.blockLen),
              (t.create = (t) => e(t)),
              t
            );
          })((e) => new aq(e)),
          az = (function (e, t) {
            let {
              allowShortKeys: i,
              extendNonceFn: r,
              counterLength: s,
              counterRight: n,
              rounds: o,
            } = (function (e, t) {
              if (null == t || "object" != typeof t)
                throw Error("options must be defined");
              return Object.assign(e, t);
            })(
              {
                allowShortKeys: !1,
                counterLength: 8,
                counterRight: !1,
                rounds: 20,
              },
              t
            );
            if ("function" != typeof e) throw Error("core must be a function");
            return (
              av(s),
              av(o),
              am(n),
              am(i),
              function (t, a, c, l) {
                let h =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : 0;
                aw(t), aw(a), aw(c);
                let u = c.length;
                if (
                  (void 0 === l && (l = new Uint8Array(u)),
                  aw(l),
                  av(h),
                  h < 0 || h >= ak)
                )
                  throw Error("arx: counter overflow");
                if (l.length < u)
                  throw Error(
                    "arx: output ("
                      .concat(l.length, ") is shorter than data (")
                      .concat(u, ")")
                  );
                let d = [],
                  f = t.length,
                  p,
                  g;
                if (32 === f) d.push((p = aA(t))), (g = aU);
                else if (16 === f && i)
                  (p = new Uint8Array(32)).set(t),
                    p.set(t, 16),
                    (g = aN),
                    d.push(p);
                else
                  throw Error(
                    "arx: invalid 32-byte key, got length=".concat(f)
                  );
                aB(a) || d.push((a = aA(a)));
                let y = ax(p);
                if (r) {
                  if (24 !== a.length)
                    throw Error("arx: extended nonce must be 24 bytes");
                  r(g, y, ax(a.subarray(0, 16)), y), (a = a.subarray(16));
                }
                let b = 16 - s;
                if (b !== a.length)
                  throw Error("arx: nonce must be ".concat(b, " or 16 bytes"));
                if (12 !== b) {
                  let e = new Uint8Array(12);
                  e.set(a, n ? 0 : 12 - a.length), (a = e), d.push(a);
                }
                return (
                  (function (e, t, i, r, s, n, o, a) {
                    let c = s.length,
                      l = new Uint8Array(64),
                      h = ax(l),
                      u = aB(s) && aB(n),
                      d = u ? ax(s) : aj,
                      f = u ? ax(n) : aj;
                    for (let p = 0; p < c; o++) {
                      if ((e(t, i, r, h, o, a), o >= ak))
                        throw Error("arx: counter overflow");
                      let g = Math.min(64, c - p);
                      if (u && 64 === g) {
                        let e = p / 4;
                        if (p % 4 != 0)
                          throw Error("arx: invalid block position");
                        for (let t = 0, i; t < 16; t++)
                          f[(i = e + t)] = d[i] ^ h[t];
                        p += 64;
                        continue;
                      }
                      for (let e = 0, t; e < g; e++)
                        n[(t = p + e)] = s[t] ^ l[e];
                      p += g;
                    }
                  })(e, g, y, ax(a), c, l, h, o),
                  aI(...d),
                  l
                );
              }
            );
          })(
            function (e, t, i, r, s) {
              let n =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : 20,
                o = e[0],
                a = e[1],
                c = e[2],
                l = e[3],
                h = t[0],
                u = t[1],
                d = t[2],
                f = t[3],
                p = t[4],
                g = t[5],
                y = t[6],
                b = t[7],
                m = i[0],
                v = i[1],
                w = i[2],
                E = o,
                x = a,
                I = c,
                _ = l,
                D = h,
                S = u,
                P = d,
                A = f,
                O = p,
                C = g,
                T = y,
                N = b,
                U = s,
                R = m,
                B = v,
                k = w;
              for (let e = 0; e < n; e += 2)
                (O = (O + (U = aR(U ^ (E = (E + D) | 0), 16))) | 0),
                  (E = (E + (D = aR(D ^ O, 12))) | 0),
                  (O = (O + (U = aR(U ^ E, 8))) | 0),
                  (D = aR(D ^ O, 7)),
                  (C = (C + (R = aR(R ^ (x = (x + S) | 0), 16))) | 0),
                  (x = (x + (S = aR(S ^ C, 12))) | 0),
                  (C = (C + (R = aR(R ^ x, 8))) | 0),
                  (S = aR(S ^ C, 7)),
                  (T = (T + (B = aR(B ^ (I = (I + P) | 0), 16))) | 0),
                  (I = (I + (P = aR(P ^ T, 12))) | 0),
                  (T = (T + (B = aR(B ^ I, 8))) | 0),
                  (P = aR(P ^ T, 7)),
                  (N = (N + (k = aR(k ^ (_ = (_ + A) | 0), 16))) | 0),
                  (_ = (_ + (A = aR(A ^ N, 12))) | 0),
                  (N = (N + (k = aR(k ^ _, 8))) | 0),
                  (A = aR(A ^ N, 7)),
                  (T = (T + (k = aR(k ^ (E = (E + S) | 0), 16))) | 0),
                  (E = (E + (S = aR(S ^ T, 12))) | 0),
                  (T = (T + (k = aR(k ^ E, 8))) | 0),
                  (S = aR(S ^ T, 7)),
                  (N = (N + (U = aR(U ^ (x = (x + P) | 0), 16))) | 0),
                  (x = (x + (P = aR(P ^ N, 12))) | 0),
                  (N = (N + (U = aR(U ^ x, 8))) | 0),
                  (P = aR(P ^ N, 7)),
                  (O = (O + (R = aR(R ^ (I = (I + A) | 0), 16))) | 0),
                  (I = (I + (A = aR(A ^ O, 12))) | 0),
                  (O = (O + (R = aR(R ^ I, 8))) | 0),
                  (A = aR(A ^ O, 7)),
                  (C = (C + (B = aR(B ^ (_ = (_ + D) | 0), 16))) | 0),
                  (_ = (_ + (D = aR(D ^ C, 12))) | 0),
                  (C = (C + (B = aR(B ^ _, 8))) | 0),
                  (D = aR(D ^ C, 7));
              let j = 0;
              (r[j++] = (o + E) | 0),
                (r[j++] = (a + x) | 0),
                (r[j++] = (c + I) | 0),
                (r[j++] = (l + _) | 0),
                (r[j++] = (h + D) | 0),
                (r[j++] = (u + S) | 0),
                (r[j++] = (d + P) | 0),
                (r[j++] = (f + A) | 0),
                (r[j++] = (p + O) | 0),
                (r[j++] = (g + C) | 0),
                (r[j++] = (y + T) | 0),
                (r[j++] = (b + N) | 0),
                (r[j++] = (s + U) | 0),
                (r[j++] = (m + R) | 0),
                (r[j++] = (v + B) | 0),
                (r[j++] = (w + k) | 0);
            },
            { counterRight: !1, counterLength: 4, allowShortKeys: !1 }
          ),
          aF = new Uint8Array(16),
          aH = (e, t) => {
            e.update(t);
            let i = t.length % 16;
            i && e.update(aF.subarray(i));
          },
          aV = new Uint8Array(32);
        function aK(e, t, i, r, s) {
          let n = e(t, i, aV),
            o = aM.create(n);
          s && aH(o, s), aH(o, r);
          let a = (function (e, t, i) {
            am(i);
            let r = new Uint8Array(16),
              s = new DataView(r.buffer, r.byteOffset, r.byteLength);
            return aP(s, 0, BigInt(t), i), aP(s, 8, BigInt(e), i), r;
          })(r.length, s ? s.length : 0, !0);
          o.update(a);
          let c = o.digest();
          return aI(n, a), c;
        }
        let aW = ((e, t) => {
          function i(i) {
            for (
              var r = arguments.length, s = Array(r > 1 ? r - 1 : 0), n = 1;
              n < r;
              n++
            )
              s[n - 1] = arguments[n];
            if ((aw(i), !a_))
              throw Error("Non little-endian hardware is not yet supported");
            if (void 0 !== e.nonceLength) {
              let t = s[0];
              if (!t) throw Error("nonce / iv required");
              e.varSizeNonce ? aw(t) : aw(t, e.nonceLength);
            }
            let o = e.tagLength;
            o && void 0 !== s[1] && aw(s[1]);
            let a = t(i, ...s),
              c = (e, t) => {
                if (void 0 !== t) {
                  if (2 !== e) throw Error("cipher output not supported");
                  aw(t);
                }
              },
              l = !1;
            return {
              encrypt(e, t) {
                if (l)
                  throw Error("cannot encrypt() twice with same key + nonce");
                return (l = !0), aw(e), c(a.encrypt.length, t), a.encrypt(e, t);
              },
              decrypt(e, t) {
                if ((aw(e), o && e.length < o))
                  throw Error(
                    "invalid ciphertext length: smaller than tagLength=" + o
                  );
                return c(a.decrypt.length, t), a.decrypt(e, t);
              },
            };
          }
          return Object.assign(i, e), i;
        })(
          { blockSize: 64, nonceLength: 12, tagLength: 16 },
          ((e) => (t, i, r) => ({
            encrypt(s, n) {
              let o = s.length;
              (n = aS(o + 16, n, !1)).set(s);
              let a = n.subarray(0, -16);
              e(t, i, a, a, 1);
              let c = aK(e, t, i, a, r);
              return n.set(c, o), aI(c), n;
            },
            decrypt(s, n) {
              n = aS(s.length - 16, n, !1);
              let o = s.subarray(0, -16),
                a = s.subarray(-16),
                c = aK(e, t, i, o, r);
              if (
                !(function (e, t) {
                  if (e.length !== t.length) return !1;
                  let i = 0;
                  for (let r = 0; r < e.length; r++) i |= e[r] ^ t[r];
                  return 0 === i;
                })(a, c)
              )
                throw Error("invalid tag");
              return n.set(s.subarray(0, -16)), e(t, i, n, n, 1), aI(c), n;
            },
          }))(az)
        );
        class aG extends ol {
          update(e) {
            return n1(this), this.iHash.update(e), this;
          }
          digestInto(e) {
            n1(this),
              n$(e, this.outputLen),
              (this.finished = !0),
              this.iHash.digestInto(e),
              this.oHash.update(e),
              this.oHash.digestInto(e),
              this.destroy();
          }
          digest() {
            let e = new Uint8Array(this.oHash.outputLen);
            return this.digestInto(e), e;
          }
          _cloneInto(e) {
            e || (e = Object.create(Object.getPrototypeOf(this), {}));
            let {
              oHash: t,
              iHash: i,
              finished: r,
              destroyed: s,
              blockLen: n,
              outputLen: o,
            } = this;
            return (
              (e.finished = r),
              (e.destroyed = s),
              (e.blockLen = n),
              (e.outputLen = o),
              (e.oHash = t._cloneInto(e.oHash)),
              (e.iHash = i._cloneInto(e.iHash)),
              e
            );
          }
          clone() {
            return this._cloneInto();
          }
          destroy() {
            (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
          }
          constructor(e, t) {
            super(), (this.finished = !1), (this.destroyed = !1), n0(e);
            let i = oa(t);
            if (
              ((this.iHash = e.create()),
              "function" != typeof this.iHash.update)
            )
              throw Error(
                "Expected instance of class which extends utils.Hash"
              );
            (this.blockLen = this.iHash.blockLen),
              (this.outputLen = this.iHash.outputLen);
            let r = this.blockLen,
              s = new Uint8Array(r);
            s.set(i.length > r ? e.create().update(i).digest() : i);
            for (let e = 0; e < s.length; e++) s[e] ^= 54;
            this.iHash.update(s), (this.oHash = e.create());
            for (let e = 0; e < s.length; e++) s[e] ^= 106;
            this.oHash.update(s), n3(s);
          }
        }
        let aY = (e, t, i) => new aG(e, t).update(i).digest();
        aY.create = (e, t) => new aG(e, t);
        let aJ = Uint8Array.from([0]),
          aZ = Uint8Array.of(),
          aX = BigInt(0),
          aQ = BigInt(1);
        function a$(e, t) {
          if ("boolean" != typeof t)
            throw Error(e + " boolean expected, got " + t);
        }
        function a0(e) {
          let t = e.toString(16);
          return 1 & t.length ? "0" + t : t;
        }
        function a1(e) {
          if ("string" != typeof e)
            throw Error("hex string expected, got " + typeof e);
          return "" === e ? aX : BigInt("0x" + e);
        }
        function a2(e) {
          return n$(e), a1(or(Uint8Array.from(e).reverse()));
        }
        function a8(e, t) {
          return oo(e.toString(16).padStart(2 * t, "0"));
        }
        function a3(e, t) {
          return a8(e, t).reverse();
        }
        function a6(e, t, i) {
          let r;
          if ("string" == typeof t)
            try {
              r = oo(t);
            } catch (t) {
              throw Error(e + " must be hex string or Uint8Array, cause: " + t);
            }
          else if (nX(t)) r = Uint8Array.from(t);
          else throw Error(e + " must be hex string or Uint8Array");
          let s = r.length;
          if ("number" == typeof i && s !== i)
            throw Error(e + " of length " + i + " expected, got " + s);
          return r;
        }
        let a5 = (e) => "bigint" == typeof e && aX <= e;
        function a4(e, t, i, r) {
          if (!(a5(t) && a5(i) && a5(r)) || !(i <= t) || !(t < r))
            throw Error(
              "expected valid " + e + ": " + i + " <= n < " + r + ", got " + t
            );
        }
        let a9 = (e) => (aQ << BigInt(e)) - aQ;
        function a7(e, t) {
          let i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (!e || "object" != typeof e)
            throw Error("expected valid options object");
          function r(t, i, r) {
            let s = e[t];
            if (r && void 0 === s) return;
            let n = typeof s;
            if (n !== i || null === s)
              throw Error(
                'param "'
                  .concat(t, '" is invalid: expected ')
                  .concat(i, ", got ")
                  .concat(n)
              );
          }
          Object.entries(t).forEach((e) => {
            let [t, i] = e;
            return r(t, i, !1);
          }),
            Object.entries(i).forEach((e) => {
              let [t, i] = e;
              return r(t, i, !0);
            });
        }
        function ce(e) {
          let t = new WeakMap();
          return function (i) {
            for (
              var r = arguments.length, s = Array(r > 1 ? r - 1 : 0), n = 1;
              n < r;
              n++
            )
              s[n - 1] = arguments[n];
            let o = t.get(i);
            if (void 0 !== o) return o;
            let a = e(i, ...s);
            return t.set(i, a), a;
          };
        }
        let ct = BigInt(0),
          ci = BigInt(1),
          cr = BigInt(2),
          cs = BigInt(3),
          cn = BigInt(4),
          co = BigInt(5),
          ca = BigInt(8);
        function cc(e, t) {
          let i = e % t;
          return i >= ct ? i : t + i;
        }
        function cl(e, t, i) {
          let r = e;
          for (; t-- > ct; ) (r *= r), (r %= i);
          return r;
        }
        function ch(e, t) {
          if (e === ct) throw Error("invert: expected non-zero number");
          if (t <= ct)
            throw Error("invert: expected positive modulus, got " + t);
          let i = cc(e, t),
            r = t,
            s = ct,
            n = ci;
          for (; i !== ct; ) {
            let e = r / i,
              t = r % i,
              o = s - n * e;
            (r = i), (i = t), (s = n), (n = o);
          }
          if (r !== ci) throw Error("invert: does not exist");
          return cc(s, t);
        }
        function cu(e, t) {
          let i = (e.ORDER + ci) / cn,
            r = e.pow(t, i);
          if (!e.eql(e.sqr(r), t)) throw Error("Cannot find square root");
          return r;
        }
        function cd(e, t) {
          let i = (e.ORDER - co) / ca,
            r = e.mul(t, cr),
            s = e.pow(r, i),
            n = e.mul(t, s),
            o = e.mul(e.mul(n, cr), s),
            a = e.mul(n, e.sub(o, e.ONE));
          if (!e.eql(e.sqr(a), t)) throw Error("Cannot find square root");
          return a;
        }
        let cf = [
          "create",
          "isValid",
          "is0",
          "neg",
          "inv",
          "sqrt",
          "sqr",
          "eql",
          "add",
          "sub",
          "mul",
          "pow",
          "div",
          "addN",
          "subN",
          "mulN",
          "sqrN",
        ];
        function cp(e, t) {
          let i =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = Array(t.length).fill(i ? e.ZERO : void 0),
            s = t.reduce(
              (t, i, s) => (e.is0(i) ? t : ((r[s] = t), e.mul(t, i))),
              e.ONE
            ),
            n = e.inv(s);
          return (
            t.reduceRight(
              (t, i, s) =>
                e.is0(i) ? t : ((r[s] = e.mul(t, r[s])), e.mul(t, i)),
              n
            ),
            r
          );
        }
        function cg(e, t) {
          let i = (e.ORDER - ci) / cr,
            r = e.pow(t, i),
            s = e.eql(r, e.ONE),
            n = e.eql(r, e.ZERO),
            o = e.eql(r, e.neg(e.ONE));
          if (!s && !n && !o) throw Error("invalid Legendre symbol result");
          return s ? 1 : n ? 0 : -1;
        }
        function cy(e, t) {
          let i,
            r,
            s,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          if (e <= ct)
            throw Error("invalid field: expected ORDER > 0, got " + e);
          if ("object" == typeof t && null != t) {
            if (o.sqrt || n)
              throw Error("cannot specify opts in two arguments");
            t.BITS && (i = t.BITS),
              t.sqrt && (r = t.sqrt),
              "boolean" == typeof t.isLE && (n = t.isLE);
          } else "number" == typeof t && (i = t), o.sqrt && (r = o.sqrt);
          let { nBitLength: a, nByteLength: c } = (function (e, t) {
            void 0 !== t && nQ(t);
            let i = void 0 !== t ? t : e.toString(2).length,
              r = Math.ceil(i / 8);
            return { nBitLength: i, nByteLength: r };
          })(e, i);
          if (c > 2048)
            throw Error("invalid field: expected ORDER of <= 2048 bytes");
          let l = Object.freeze({
            ORDER: e,
            isLE: n,
            BITS: a,
            BYTES: c,
            MASK: a9(a),
            ZERO: ct,
            ONE: ci,
            create: (t) => cc(t, e),
            isValid: (t) => {
              if ("bigint" != typeof t)
                throw Error(
                  "invalid field element: expected bigint, got " + typeof t
                );
              return ct <= t && t < e;
            },
            is0: (e) => e === ct,
            isValidNot0: (e) => !l.is0(e) && l.isValid(e),
            isOdd: (e) => (e & ci) === ci,
            neg: (t) => cc(-t, e),
            eql: (e, t) => e === t,
            sqr: (t) => cc(t * t, e),
            add: (t, i) => cc(t + i, e),
            sub: (t, i) => cc(t - i, e),
            mul: (t, i) => cc(t * i, e),
            pow: (e, t) =>
              (function (e, t, i) {
                if (i < ct)
                  throw Error("invalid exponent, negatives unsupported");
                if (i === ct) return e.ONE;
                if (i === ci) return t;
                let r = e.ONE,
                  s = t;
                for (; i > ct; )
                  i & ci && (r = e.mul(r, s)), (s = e.sqr(s)), (i >>= ci);
                return r;
              })(l, e, t),
            div: (t, i) => cc(t * ch(i, e), e),
            sqrN: (e) => e * e,
            addN: (e, t) => e + t,
            subN: (e, t) => e - t,
            mulN: (e, t) => e * t,
            inv: (t) => ch(t, e),
            sqrt:
              r ||
              ((t) => (
                s ||
                  (s =
                    e % cn === cs
                      ? cu
                      : e % ca === co
                      ? cd
                      : (function (e) {
                          if (e < BigInt(3))
                            throw Error("sqrt is not defined for small field");
                          let t = e - ci,
                            i = 0;
                          for (; t % cr === ct; ) (t /= cr), i++;
                          let r = cr,
                            s = cy(e);
                          for (; 1 === cg(s, r); )
                            if (r++ > 1e3)
                              throw Error(
                                "Cannot find square root: probably non-prime P"
                              );
                          if (1 === i) return cu;
                          let n = s.pow(r, t),
                            o = (t + ci) / cr;
                          return function (e, r) {
                            if (e.is0(r)) return r;
                            if (1 !== cg(e, r))
                              throw Error("Cannot find square root");
                            let s = i,
                              a = e.mul(e.ONE, n),
                              c = e.pow(r, t),
                              l = e.pow(r, o);
                            for (; !e.eql(c, e.ONE); ) {
                              if (e.is0(c)) return e.ZERO;
                              let t = 1,
                                i = e.sqr(c);
                              for (; !e.eql(i, e.ONE); )
                                if ((t++, (i = e.sqr(i)), t === s))
                                  throw Error("Cannot find square root");
                              let r = ci << BigInt(s - t - 1),
                                n = e.pow(a, r);
                              (s = t),
                                (a = e.sqr(n)),
                                (c = e.mul(c, a)),
                                (l = e.mul(l, n));
                            }
                            return l;
                          };
                        })(e)),
                s(l, t)
              )),
            toBytes: (e) => (n ? a3(e, c) : a8(e, c)),
            fromBytes: (e) => {
              if (e.length !== c)
                throw Error(
                  "Field.fromBytes: expected " + c + " bytes, got " + e.length
                );
              return n ? a2(e) : a1(or(e));
            },
            invertBatch: (e) => cp(l, e),
            cmov: (e, t, i) => (i ? t : e),
          });
          return Object.freeze(l);
        }
        function cb(e) {
          if ("bigint" != typeof e) throw Error("field order must be bigint");
          return Math.ceil(e.toString(2).length / 8);
        }
        function cm(e) {
          let t = cb(e);
          return t + Math.ceil(t / 2);
        }
        let cv = BigInt(0),
          cw = BigInt(1);
        function cE(e, t) {
          let i = t.negate();
          return e ? i : t;
        }
        function cx(e, t) {
          if (!Number.isSafeInteger(e) || e <= 0 || e > t)
            throw Error(
              "invalid window size, expected [1.." + t + "], got W=" + e
            );
        }
        function cI(e, t) {
          cx(e, t);
          let i = Math.ceil(t / e) + 1,
            r = 2 ** (e - 1),
            s = 2 ** e;
          return {
            windows: i,
            windowSize: r,
            mask: a9(e),
            maxNumber: s,
            shiftBy: BigInt(e),
          };
        }
        function c_(e, t, i) {
          let { windowSize: r, mask: s, maxNumber: n, shiftBy: o } = i,
            a = Number(e & s),
            c = e >> o;
          a > r && ((a -= n), (c += cw));
          let l = t * r;
          return {
            nextN: c,
            offset: l + Math.abs(a) - 1,
            isZero: 0 === a,
            isNeg: a < 0,
            isNegF: t % 2 != 0,
            offsetF: l,
          };
        }
        let cD = new WeakMap(),
          cS = new WeakMap();
        function cP(e) {
          return cS.get(e) || 1;
        }
        function cA(e) {
          if (e !== cv) throw Error("invalid wNAF");
        }
        function cO(e, t) {
          if (!t) return cy(e);
          if (t.ORDER !== e)
            throw Error("Field.ORDER must match order: Fp == p, Fn == n");
          return (
            a7(
              t,
              cf.reduce((e, t) => ((e[t] = "function"), e), {
                ORDER: "bigint",
                MASK: "bigint",
                BYTES: "number",
                BITS: "number",
              })
            ),
            t
          );
        }
        BigInt(0), BigInt(1), BigInt(2), BigInt(8);
        let cC = BigInt(0),
          cT = BigInt(1),
          cN = BigInt(2);
        BigInt(0);
        let cU = BigInt(1),
          cR = BigInt(2),
          cB = BigInt(3),
          ck = BigInt(5),
          cj = BigInt(8),
          cL = {
            p: BigInt(
              "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"
            ),
            n: BigInt(
              "0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"
            ),
            h: cj,
            a: BigInt(
              "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"
            ),
            d: BigInt(
              "0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"
            ),
            Gx: BigInt(
              "0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"
            ),
            Gy: BigInt(
              "0x6666666666666666666666666666666666666666666666666666666666666658"
            ),
          };
        function cq(e) {
          return (e[0] &= 248), (e[31] &= 127), (e[31] |= 64), e;
        }
        let cM = (() => {
          let e = cL.p;
          return (function (e) {
            let {
                P: t,
                type: i,
                adjustScalarBytes: r,
                powPminus2: s,
                randomBytes: n,
              } = (a7(e, {
                adjustScalarBytes: "function",
                powPminus2: "function",
              }),
              Object.freeze({ ...e })),
              o = "x25519" === i;
            if (!o && "x448" !== i) throw Error("invalid type");
            let a = n || ou,
              c = o ? 255 : 448,
              l = o ? 32 : 56,
              h = BigInt(o ? 9 : 5),
              u = BigInt(o ? 121665 : 39081),
              d = o ? cN ** BigInt(254) : cN ** BigInt(447),
              f =
                d +
                (o
                  ? BigInt(8) * cN ** BigInt(251) - cT
                  : BigInt(4) * cN ** BigInt(445) - cT) +
                cT,
              p = (e) => cc(e, t),
              g = a3(p(h), l);
            function y(e, i) {
              let n = (function (e, i) {
                a4("u", e, cC, t), a4("scalar", i, d, f);
                let r = cT,
                  n = cC,
                  o = e,
                  a = cT,
                  l = cC;
                for (let t = BigInt(c - 1); t >= cC; t--) {
                  let s = (i >> t) & cT;
                  (l ^= s),
                    ({ x_2: r, x_3: o } = m(l, r, o)),
                    ({ x_2: n, x_3: a } = m(l, n, a)),
                    (l = s);
                  let c = r + n,
                    h = p(c * c),
                    d = r - n,
                    f = p(d * d),
                    g = h - f,
                    y = o + a,
                    b = p((o - a) * c),
                    v = p(y * d),
                    w = b + v,
                    E = b - v;
                  (o = p(w * w)),
                    (a = p(e * p(E * E))),
                    (r = p(h * f)),
                    (n = p(g * (h + p(u * g))));
                }
                return (
                  ({ x_2: r, x_3: o } = m(l, r, o)),
                  ({ x_2: n, x_3: a } = m(l, n, a)),
                  p(r * s(n))
                );
              })(
                (function (e) {
                  let t = a6("u coordinate", e, l);
                  return o && (t[31] &= 127), p(a2(t));
                })(i),
                a2(r(a6("scalar", e, l)))
              );
              if (n === cC)
                throw Error("invalid private or public key received");
              return a3(p(n), l);
            }
            function b(e) {
              return y(e, g);
            }
            function m(e, t, i) {
              let r = p(e * (t - i));
              return { x_2: (t = p(t - r)), x_3: (i = p(i + r)) };
            }
            return {
              scalarMult: y,
              scalarMultBase: b,
              getSharedSecret: (e, t) => y(e, t),
              getPublicKey: (e) => b(e),
              utils: { randomPrivateKey: () => a(l) },
              GuBytes: g.slice(),
            };
          })({
            P: e,
            type: "x25519",
            powPminus2: (t) => {
              let { pow_p_5_8: i, b2: r } = (function (e) {
                let t = BigInt(10),
                  i = BigInt(20),
                  r = BigInt(40),
                  s = BigInt(80),
                  n = cL.p,
                  o = (((e * e) % n) * e) % n,
                  a = (cl(o, cR, n) * o) % n,
                  c = (cl(a, cU, n) * e) % n,
                  l = (cl(c, ck, n) * c) % n,
                  h = (cl(l, t, n) * l) % n,
                  u = (cl(h, i, n) * h) % n,
                  d = (cl(u, r, n) * u) % n,
                  f = (cl(d, s, n) * d) % n,
                  p = (cl(f, s, n) * d) % n,
                  g = (cl(p, t, n) * l) % n;
                return { pow_p_5_8: (cl(g, cR, n) * e) % n, b2: o };
              })(t);
              return cc(cl(i, cB, e) * r, e);
            },
            adjustScalarBytes: cq,
          });
        })();
        function cz(e) {
          void 0 !== e.lowS && a$("lowS", e.lowS),
            void 0 !== e.prehash && a$("prehash", e.prehash);
        }
        let cF = {
            Err: class extends Error {
              constructor(e = "") {
                super(e);
              }
            },
            _tlv: {
              encode: (e, t) => {
                let { Err: i } = cF;
                if (e < 0 || e > 256) throw new i("tlv.encode: wrong tag");
                if (1 & t.length) throw new i("tlv.encode: unpadded data");
                let r = t.length / 2,
                  s = a0(r);
                if ((s.length / 2) & 128)
                  throw new i("tlv.encode: long form length too big");
                let n = r > 127 ? a0((s.length / 2) | 128) : "";
                return a0(e) + n + s + t;
              },
              decode(e, t) {
                let { Err: i } = cF,
                  r = 0;
                if (e < 0 || e > 256) throw new i("tlv.encode: wrong tag");
                if (t.length < 2 || t[r++] !== e)
                  throw new i("tlv.decode: wrong tlv");
                let s = t[r++],
                  n = 0;
                if (128 & s) {
                  let e = 127 & s;
                  if (!e)
                    throw new i(
                      "tlv.decode(long): indefinite length not supported"
                    );
                  if (e > 4)
                    throw new i("tlv.decode(long): byte length is too big");
                  let o = t.subarray(r, r + e);
                  if (o.length !== e)
                    throw new i("tlv.decode: length bytes not complete");
                  if (0 === o[0])
                    throw new i("tlv.decode(long): zero leftmost byte");
                  for (let e of o) n = (n << 8) | e;
                  if (((r += e), n < 128))
                    throw new i("tlv.decode(long): not minimal encoding");
                } else n = s;
                let o = t.subarray(r, r + n);
                if (o.length !== n)
                  throw new i("tlv.decode: wrong value length");
                return { v: o, l: t.subarray(r + n) };
              },
            },
            _int: {
              encode(e) {
                let { Err: t } = cF;
                if (e < cH)
                  throw new t("integer: negative integers are not allowed");
                let i = a0(e);
                if (
                  (8 & Number.parseInt(i[0], 16) && (i = "00" + i),
                  1 & i.length)
                )
                  throw new t("unexpected DER parsing assertion: unpadded hex");
                return i;
              },
              decode(e) {
                let { Err: t } = cF;
                if (128 & e[0])
                  throw new t("invalid signature integer: negative");
                if (0 === e[0] && !(128 & e[1]))
                  throw new t(
                    "invalid signature integer: unnecessary leading zero"
                  );
                return a1(or(e));
              },
            },
            toSig(e) {
              let { Err: t, _int: i, _tlv: r } = cF,
                s = a6("signature", e),
                { v: n, l: o } = r.decode(48, s);
              if (o.length)
                throw new t("invalid signature: left bytes after parsing");
              let { v: a, l: c } = r.decode(2, n),
                { v: l, l: h } = r.decode(2, c);
              if (h.length)
                throw new t("invalid signature: left bytes after parsing");
              return { r: i.decode(a), s: i.decode(l) };
            },
            hexFromSig(e) {
              let { _tlv: t, _int: i } = cF,
                r = t.encode(2, i.encode(e.r)),
                s = t.encode(2, i.encode(e.s));
              return t.encode(48, r + s);
            },
          },
          cH = BigInt(0),
          cV = BigInt(1),
          cK = BigInt(2),
          cW = BigInt(3),
          cG = BigInt(4);
        function cY(e, t, i) {
          let { BYTES: r } = e;
          return function (s) {
            let n;
            if ("bigint" == typeof s) n = s;
            else {
              let i = a6("private key", s);
              if (t) {
                if (!t.includes(2 * i.length))
                  throw Error("invalid private key");
                let e = new Uint8Array(r);
                e.set(i, e.length - i.length), (i = e);
              }
              try {
                n = e.fromBytes(i);
              } catch (e) {
                throw Error(
                  "invalid private key: expected ui8a of size "
                    .concat(r, ", got ")
                    .concat(typeof s)
                );
              }
            }
            if ((i && (n = e.create(n)), !e.isValidNot0(n)))
              throw Error("invalid private key: out of range [1..N-1]");
            return n;
          };
        }
        function cJ(e) {
          return Uint8Array.of(e ? 2 : 3);
        }
        function cZ(e, t) {
          let i = (t) =>
            (function (e) {
              let {
                  CURVE: t,
                  curveOpts: i,
                  ecdsaOpts: r,
                } = (function (e) {
                  let { CURVE: t, curveOpts: i } = (function (e) {
                    let t = {
                        a: e.a,
                        b: e.b,
                        p: e.Fp.ORDER,
                        n: e.n,
                        h: e.h,
                        Gx: e.Gx,
                        Gy: e.Gy,
                      },
                      i = {
                        Fp: e.Fp,
                        Fn: cy(t.n, e.nBitLength),
                        allowedPrivateKeyLengths: e.allowedPrivateKeyLengths,
                        allowInfinityPoint: e.allowInfinityPoint,
                        endo: e.endo,
                        wrapPrivateKey: e.wrapPrivateKey,
                        isTorsionFree: e.isTorsionFree,
                        clearCofactor: e.clearCofactor,
                        fromBytes: e.fromBytes,
                        toBytes: e.toBytes,
                      };
                    return { CURVE: t, curveOpts: i };
                  })(e);
                  return {
                    CURVE: t,
                    curveOpts: i,
                    ecdsaOpts: {
                      hash: e.hash,
                      hmac: e.hmac,
                      randomBytes: e.randomBytes,
                      lowS: e.lowS,
                      bits2int: e.bits2int,
                      bits2int_modN: e.bits2int_modN,
                    },
                  };
                })(e),
                s = (function (e, t) {
                  let i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  a7(
                    t,
                    { hash: "function" },
                    {
                      hmac: "function",
                      lowS: "boolean",
                      randomBytes: "function",
                      bits2int: "function",
                      bits2int_modN: "function",
                    }
                  );
                  let r = t.randomBytes || ou,
                    s =
                      t.hmac ||
                      function (e) {
                        for (
                          var i = arguments.length,
                            r = Array(i > 1 ? i - 1 : 0),
                            s = 1;
                          s < i;
                          s++
                        )
                          r[s - 1] = arguments[s];
                        return aY(t.hash, e, oc(...r));
                      },
                    { Fp: n, Fn: o } = e,
                    { ORDER: a, BITS: c } = o;
                  function l(e, t) {
                    if (!o.isValidNot0(t))
                      throw Error(
                        "invalid signature ".concat(
                          e,
                          ": out of range 1..CURVE.n"
                        )
                      );
                  }
                  class h {
                    static fromCompact(e) {
                      let t = o.BYTES,
                        i = a6("compactSignature", e, 2 * t);
                      return new h(
                        o.fromBytes(i.subarray(0, t)),
                        o.fromBytes(i.subarray(t, 2 * t))
                      );
                    }
                    static fromDER(e) {
                      let { r: t, s: i } = cF.toSig(a6("DER", e));
                      return new h(t, i);
                    }
                    assertValidity() {}
                    addRecoveryBit(e) {
                      return new h(this.r, this.s, e);
                    }
                    recoverPublicKey(t) {
                      let i = n.ORDER,
                        { r: r, s: s, recovery: c } = this;
                      if (null == c || ![0, 1, 2, 3].includes(c))
                        throw Error("recovery id invalid");
                      if (a * cK < i && c > 1)
                        throw Error("recovery id is ambiguous for h>1 curve");
                      let l = 2 === c || 3 === c ? r + a : r;
                      if (!n.isValid(l))
                        throw Error("recovery id 2 or 3 invalid");
                      let h = n.toBytes(l),
                        u = e.fromHex(oc(cJ((1 & c) == 0), h)),
                        d = o.inv(l),
                        f = p(a6("msgHash", t)),
                        g = o.create(-f * d),
                        y = o.create(s * d),
                        b = e.BASE.multiplyUnsafe(g).add(u.multiplyUnsafe(y));
                      if (b.is0()) throw Error("point at infinify");
                      return b.assertValidity(), b;
                    }
                    hasHighS() {
                      return this.s > a >> cV;
                    }
                    normalizeS() {
                      return this.hasHighS()
                        ? new h(this.r, o.neg(this.s), this.recovery)
                        : this;
                    }
                    toBytes(e) {
                      if ("compact" === e)
                        return oc(o.toBytes(this.r), o.toBytes(this.s));
                      if ("der" === e) return oo(cF.hexFromSig(this));
                      throw Error("invalid format");
                    }
                    toDERRawBytes() {
                      return this.toBytes("der");
                    }
                    toDERHex() {
                      return or(this.toBytes("der"));
                    }
                    toCompactRawBytes() {
                      return this.toBytes("compact");
                    }
                    toCompactHex() {
                      return or(this.toBytes("compact"));
                    }
                    constructor(e, t, i) {
                      l("r", e),
                        l("s", t),
                        (this.r = e),
                        (this.s = t),
                        null != i && (this.recovery = i),
                        Object.freeze(this);
                    }
                  }
                  let u = cY(o, i.allowedPrivateKeyLengths, i.wrapPrivateKey);
                  function d(t) {
                    if ("bigint" == typeof t) return !1;
                    if (t instanceof e) return !0;
                    let r = a6("key", t).length,
                      s = n.BYTES,
                      a = s + 1;
                    if (!(i.allowedPrivateKeyLengths || o.BYTES === a))
                      return r === a || r === 2 * s + 1;
                  }
                  let f =
                      t.bits2int ||
                      function (e) {
                        if (e.length > 8192) throw Error("input is too large");
                        let t = a1(or(e)),
                          i = 8 * e.length - c;
                        return i > 0 ? t >> BigInt(i) : t;
                      },
                    p =
                      t.bits2int_modN ||
                      function (e) {
                        return o.create(f(e));
                      },
                    g = a9(c);
                  function y(e) {
                    return a4("num < 2^" + c, e, cH, g), o.toBytes(e);
                  }
                  let b = { lowS: t.lowS, prehash: !1 },
                    m = { lowS: t.lowS, prehash: !1 };
                  return (
                    e.BASE.precompute(8),
                    Object.freeze({
                      getPublicKey: function (t) {
                        let i =
                          !(arguments.length > 1) ||
                          void 0 === arguments[1] ||
                          arguments[1];
                        return e.fromPrivateKey(t).toBytes(i);
                      },
                      getSharedSecret: function (t, i) {
                        let r =
                          !(arguments.length > 2) ||
                          void 0 === arguments[2] ||
                          arguments[2];
                        if (!0 === d(t))
                          throw Error("first arg must be private key");
                        if (!1 === d(i))
                          throw Error("second arg must be public key");
                        return e.fromHex(i).multiply(u(t)).toBytes(r);
                      },
                      sign: function (i, c) {
                        let l =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : b,
                          { seed: d, k2sig: g } = (function (i, s) {
                            let c =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : b;
                            if (["recovered", "canonical"].some((e) => e in c))
                              throw Error(
                                "sign() legacy options not supported"
                              );
                            let { hash: l } = t,
                              { lowS: d, prehash: g, extraEntropy: m } = c;
                            null == d && (d = !0),
                              (i = a6("msgHash", i)),
                              cz(c),
                              g && (i = a6("prehashed msgHash", l(i)));
                            let v = p(i),
                              w = u(s),
                              E = [y(w), y(v)];
                            if (null != m && !1 !== m) {
                              let e = !0 === m ? r(n.BYTES) : m;
                              E.push(a6("extraEntropy", e));
                            }
                            return {
                              seed: oc(...E),
                              k2sig: function (t) {
                                var i;
                                let r = f(t);
                                if (!o.isValidNot0(r)) return;
                                let s = o.inv(r),
                                  n = e.BASE.multiply(r).toAffine(),
                                  c = o.create(n.x);
                                if (c === cH) return;
                                let l = o.create(s * o.create(v + c * w));
                                if (l === cH) return;
                                let u = (2 * (n.x !== c)) | Number(n.y & cV),
                                  p = l;
                                return (
                                  d &&
                                    l > a >> cV &&
                                    ((p = (i = l) > a >> cV ? o.neg(i) : i),
                                    (u ^= 1)),
                                  new h(c, p, u)
                                );
                              },
                            };
                          })(i, c, l);
                        return (function (e, t, i) {
                          if ("number" != typeof e || e < 2)
                            throw Error("hashLen must be a number");
                          if ("number" != typeof t || t < 2)
                            throw Error("qByteLen must be a number");
                          if ("function" != typeof i)
                            throw Error("hmacFn must be a function");
                          let r = (e) => new Uint8Array(e),
                            s = (e) => Uint8Array.of(e),
                            n = r(e),
                            o = r(e),
                            a = 0,
                            c = () => {
                              n.fill(1), o.fill(0), (a = 0);
                            },
                            l = function () {
                              for (
                                var e = arguments.length, t = Array(e), r = 0;
                                r < e;
                                r++
                              )
                                t[r] = arguments[r];
                              return i(o, n, ...t);
                            },
                            h = function () {
                              let e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : r(0);
                              (o = l(s(0), e)),
                                (n = l()),
                                0 !== e.length && ((o = l(s(1), e)), (n = l()));
                            },
                            u = () => {
                              if (a++ >= 1e3)
                                throw Error("drbg: tried 1000 values");
                              let e = 0,
                                i = [];
                              for (; e < t; ) {
                                let t = (n = l()).slice();
                                i.push(t), (e += n.length);
                              }
                              return oc(...i);
                            };
                          return (e, t) => {
                            let i;
                            for (c(), h(e); !(i = t(u())); ) h();
                            return c(), i;
                          };
                        })(
                          t.hash.outputLen,
                          o.BYTES,
                          s
                        )(d, g);
                      },
                      verify: function (i, r, s) {
                        let n,
                          a,
                          c =
                            arguments.length > 3 && void 0 !== arguments[3]
                              ? arguments[3]
                              : m;
                        (r = a6("msgHash", r)), (s = a6("publicKey", s)), cz(c);
                        let { lowS: l, prehash: u, format: d } = c;
                        if ("strict" in c)
                          throw Error("options.strict was renamed to lowS");
                        if (
                          void 0 !== d &&
                          !["compact", "der", "js"].includes(d)
                        )
                          throw Error(
                            'format must be "compact", "der" or "js"'
                          );
                        let f = "string" == typeof i || nX(i),
                          g =
                            !f &&
                            !d &&
                            "object" == typeof i &&
                            null !== i &&
                            "bigint" == typeof i.r &&
                            "bigint" == typeof i.s;
                        if (!f && !g)
                          throw Error(
                            "invalid signature, expected Uint8Array, hex string or Signature instance"
                          );
                        try {
                          if (g)
                            if (void 0 === d || "js" === d) n = new h(i.r, i.s);
                            else throw Error("invalid format");
                          if (f) {
                            try {
                              "compact" !== d && (n = h.fromDER(i));
                            } catch (e) {
                              if (!(e instanceof cF.Err)) throw e;
                            }
                            n || "der" === d || (n = h.fromCompact(i));
                          }
                          a = e.fromHex(s);
                        } catch (e) {
                          return !1;
                        }
                        if (!n || (l && n.hasHighS())) return !1;
                        u && (r = t.hash(r));
                        let { r: y, s: b } = n,
                          v = p(r),
                          w = o.inv(b),
                          E = o.create(v * w),
                          x = o.create(y * w),
                          I = e.BASE.multiplyUnsafe(E).add(a.multiplyUnsafe(x));
                        return !I.is0() && o.create(I.x) === y;
                      },
                      utils: {
                        isValidPrivateKey(e) {
                          try {
                            return u(e), !0;
                          } catch (e) {
                            return !1;
                          }
                        },
                        normPrivateKeyToScalar: u,
                        randomPrivateKey: () =>
                          (function (e, t) {
                            let i =
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2],
                              r = e.length,
                              s = cb(t),
                              n = cm(t);
                            if (r < 16 || r < n || r > 1024)
                              throw Error(
                                "expected " +
                                  n +
                                  "-1024 bytes of input, got " +
                                  r
                              );
                            let o = cc(i ? a2(e) : a1(or(e)), t - ci) + ci;
                            return i ? a3(o, s) : a8(o, s);
                          })(r(cm(a)), a),
                        precompute() {
                          let t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : 8,
                            i =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : e.BASE;
                          return i.precompute(t, !1);
                        },
                      },
                      Point: e,
                      Signature: h,
                    })
                  );
                })(
                  (function (e) {
                    var t, i, r;
                    let s =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      { Fp: n, Fn: o } = (function (e, t) {
                        let i =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : {};
                        if (!t || "object" != typeof t)
                          throw Error(
                            "expected valid ".concat(e, " CURVE object")
                          );
                        for (let e of ["p", "n", "h"]) {
                          let i = t[e];
                          if (!("bigint" == typeof i && i > cv))
                            throw Error(
                              "CURVE.".concat(e, " must be positive bigint")
                            );
                        }
                        let r = cO(t.p, i.Fp),
                          s = cO(t.n, i.Fn);
                        for (let i of [
                          "Gx",
                          "Gy",
                          "a",
                          "weierstrass" === e ? "b" : "d",
                        ])
                          if (!r.isValid(t[i]))
                            throw Error(
                              "CURVE.".concat(
                                i,
                                " must be valid field element of CURVE.Fp"
                              )
                            );
                        return { Fp: r, Fn: s };
                      })("weierstrass", e, s),
                      { h: a, n: c } = e;
                    a7(
                      s,
                      {},
                      {
                        allowInfinityPoint: "boolean",
                        clearCofactor: "function",
                        isTorsionFree: "function",
                        fromBytes: "function",
                        toBytes: "function",
                        endo: "object",
                        wrapPrivateKey: "boolean",
                      }
                    );
                    let { endo: l } = s;
                    if (
                      l &&
                      (!n.is0(e.a) ||
                        "bigint" != typeof l.beta ||
                        "function" != typeof l.splitScalar)
                    )
                      throw Error(
                        'invalid endo: expected "beta": bigint and "splitScalar": function'
                      );
                    function h() {
                      if (!n.isOdd)
                        throw Error(
                          "compression is not supported: Field does not have .isOdd()"
                        );
                    }
                    let u =
                        s.toBytes ||
                        function (e, t, i) {
                          let { x: r, y: s } = t.toAffine(),
                            o = n.toBytes(r);
                          return (a$("isCompressed", i), i)
                            ? (h(), oc(cJ(!n.isOdd(s)), o))
                            : oc(Uint8Array.of(4), o, n.toBytes(s));
                        },
                      d =
                        s.fromBytes ||
                        function (e) {
                          n$(e);
                          let t = n.BYTES,
                            i = t + 1,
                            r = 2 * t + 1,
                            s = e.length,
                            o = e[0],
                            a = e.subarray(1);
                          if (s === i && (2 === o || 3 === o)) {
                            let e,
                              t = n.fromBytes(a);
                            if (!n.isValid(t))
                              throw Error(
                                "bad point: is not on curve, wrong x"
                              );
                            let i = f(t);
                            try {
                              e = n.sqrt(i);
                            } catch (e) {
                              throw Error(
                                "bad point: is not on curve, sqrt error" +
                                  (e instanceof Error ? ": " + e.message : "")
                              );
                            }
                            return (
                              h(),
                              ((1 & o) == 1) !== n.isOdd(e) && (e = n.neg(e)),
                              { x: t, y: e }
                            );
                          }
                          if (s === r && 4 === o) {
                            let e = n.fromBytes(a.subarray(0 * t, +t)),
                              i = n.fromBytes(a.subarray(+t, 2 * t));
                            if (!p(e, i))
                              throw Error("bad point: is not on curve");
                            return { x: e, y: i };
                          }
                          throw Error(
                            "bad point: got length "
                              .concat(s, ", expected compressed=")
                              .concat(i, " or uncompressed=")
                              .concat(r)
                          );
                        },
                      f =
                        ((t = e.a),
                        (i = e.b),
                        function (e) {
                          let r = n.sqr(e),
                            s = n.mul(r, e);
                          return n.add(n.add(s, n.mul(e, t)), i);
                        });
                    function p(e, t) {
                      let i = n.sqr(t),
                        r = f(e);
                      return n.eql(i, r);
                    }
                    if (!p(e.Gx, e.Gy))
                      throw Error("bad curve params: generator point");
                    let g = n.mul(n.pow(e.a, cW), cG),
                      y = n.mul(n.sqr(e.b), BigInt(27));
                    if (n.is0(n.add(g, y)))
                      throw Error("bad curve params: a or b");
                    function b(e, t) {
                      let i =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2];
                      if (!n.isValid(t) || (i && n.is0(t)))
                        throw Error("bad point coordinate ".concat(e));
                      return t;
                    }
                    function m(e) {
                      if (!(e instanceof x))
                        throw Error("ProjectivePoint expected");
                    }
                    let v = ce((e, t) => {
                        let { px: i, py: r, pz: s } = e;
                        if (n.eql(s, n.ONE)) return { x: i, y: r };
                        let o = e.is0();
                        null == t && (t = o ? n.ONE : n.inv(s));
                        let a = n.mul(i, t),
                          c = n.mul(r, t),
                          l = n.mul(s, t);
                        if (o) return { x: n.ZERO, y: n.ZERO };
                        if (!n.eql(l, n.ONE)) throw Error("invZ was invalid");
                        return { x: a, y: c };
                      }),
                      w = ce((e) => {
                        if (e.is0()) {
                          if (s.allowInfinityPoint && !n.is0(e.py)) return;
                          throw Error("bad point: ZERO");
                        }
                        let { x: t, y: i } = e.toAffine();
                        if (!n.isValid(t) || !n.isValid(i))
                          throw Error("bad point: x or y not field elements");
                        if (!p(t, i))
                          throw Error("bad point: equation left != right");
                        if (!e.isTorsionFree())
                          throw Error("bad point: not in prime-order subgroup");
                        return !0;
                      });
                    function E(e, t, i, r, s) {
                      return (
                        (i = new x(n.mul(i.px, e), i.py, i.pz)),
                        (t = cE(r, t)),
                        (i = cE(s, i)),
                        t.add(i)
                      );
                    }
                    class x {
                      static fromAffine(e) {
                        let { x: t, y: i } = e || {};
                        if (!e || !n.isValid(t) || !n.isValid(i))
                          throw Error("invalid affine point");
                        if (e instanceof x)
                          throw Error("projective point not allowed");
                        return n.is0(t) && n.is0(i)
                          ? x.ZERO
                          : new x(t, i, n.ONE);
                      }
                      get x() {
                        return this.toAffine().x;
                      }
                      get y() {
                        return this.toAffine().y;
                      }
                      static normalizeZ(e) {
                        let t = cp(
                          x.Fp,
                          e.map((e) => e.pz)
                        );
                        return e
                          .map((e, i) => e.toAffine(t[i]))
                          .map(x.fromAffine);
                      }
                      static fromBytes(e) {
                        return n$(e), x.fromHex(e);
                      }
                      static fromHex(e) {
                        let t = x.fromAffine(d(a6("pointHex", e)));
                        return t.assertValidity(), t;
                      }
                      static fromPrivateKey(e) {
                        let t = cY(
                          o,
                          s.allowedPrivateKeyLengths,
                          s.wrapPrivateKey
                        );
                        return x.BASE.multiply(t(e));
                      }
                      static msm(e, t) {
                        return (function (e, t, i, r) {
                          (function (e, t) {
                            if (!Array.isArray(e))
                              throw Error("array expected");
                            e.forEach((e, i) => {
                              if (!(e instanceof t))
                                throw Error("invalid point at index " + i);
                            });
                          })(i, e),
                            (function (e, t) {
                              if (!Array.isArray(e))
                                throw Error("array of scalars expected");
                              e.forEach((e, i) => {
                                if (!t.isValid(e))
                                  throw Error("invalid scalar at index " + i);
                              });
                            })(r, t);
                          let s = i.length,
                            n = r.length;
                          if (s !== n)
                            throw Error(
                              "arrays of points and scalars must have equal length"
                            );
                          let o = e.ZERO,
                            a = (function (e) {
                              let t;
                              for (t = 0; e > aX; e >>= aQ, t += 1);
                              return t;
                            })(BigInt(s)),
                            c = 1;
                          a > 12
                            ? (c = a - 3)
                            : a > 4
                            ? (c = a - 2)
                            : a > 0 && (c = 2);
                          let l = a9(c),
                            h = Array(Number(l) + 1).fill(o),
                            u = Math.floor((t.BITS - 1) / c) * c,
                            d = o;
                          for (let e = u; e >= 0; e -= c) {
                            h.fill(o);
                            for (let t = 0; t < n; t++) {
                              let s = Number((r[t] >> BigInt(e)) & l);
                              h[s] = h[s].add(i[t]);
                            }
                            let t = o;
                            for (let e = h.length - 1, i = o; e > 0; e--)
                              (i = i.add(h[e])), (t = t.add(i));
                            if (((d = d.add(t)), 0 !== e))
                              for (let e = 0; e < c; e++) d = d.double();
                          }
                          return d;
                        })(x, o, e, t);
                      }
                      precompute() {
                        let e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 8,
                          t =
                            !(arguments.length > 1) ||
                            void 0 === arguments[1] ||
                            arguments[1];
                        return (
                          _.setWindowSize(this, e), t || this.multiply(cW), this
                        );
                      }
                      _setWindowSize(e) {
                        this.precompute(e);
                      }
                      assertValidity() {
                        w(this);
                      }
                      hasEvenY() {
                        let { y: e } = this.toAffine();
                        if (!n.isOdd)
                          throw Error("Field doesn't support isOdd");
                        return !n.isOdd(e);
                      }
                      equals(e) {
                        m(e);
                        let { px: t, py: i, pz: r } = this,
                          { px: s, py: o, pz: a } = e,
                          c = n.eql(n.mul(t, a), n.mul(s, r)),
                          l = n.eql(n.mul(i, a), n.mul(o, r));
                        return c && l;
                      }
                      negate() {
                        return new x(this.px, n.neg(this.py), this.pz);
                      }
                      double() {
                        let { a: t, b: i } = e,
                          r = n.mul(i, cW),
                          { px: s, py: o, pz: a } = this,
                          c = n.ZERO,
                          l = n.ZERO,
                          h = n.ZERO,
                          u = n.mul(s, s),
                          d = n.mul(o, o),
                          f = n.mul(a, a),
                          p = n.mul(s, o);
                        return (
                          (p = n.add(p, p)),
                          (h = n.mul(s, a)),
                          (h = n.add(h, h)),
                          (c = n.mul(t, h)),
                          (l = n.mul(r, f)),
                          (l = n.add(c, l)),
                          (c = n.sub(d, l)),
                          (l = n.add(d, l)),
                          (l = n.mul(c, l)),
                          (c = n.mul(p, c)),
                          (h = n.mul(r, h)),
                          (f = n.mul(t, f)),
                          (p = n.sub(u, f)),
                          (p = n.mul(t, p)),
                          (p = n.add(p, h)),
                          (h = n.add(u, u)),
                          (u = n.add(h, u)),
                          (u = n.add(u, f)),
                          (u = n.mul(u, p)),
                          (l = n.add(l, u)),
                          (f = n.mul(o, a)),
                          (f = n.add(f, f)),
                          (u = n.mul(f, p)),
                          (c = n.sub(c, u)),
                          (h = n.mul(f, d)),
                          (h = n.add(h, h)),
                          new x(c, l, (h = n.add(h, h)))
                        );
                      }
                      add(t) {
                        m(t);
                        let { px: i, py: r, pz: s } = this,
                          { px: o, py: a, pz: c } = t,
                          l = n.ZERO,
                          h = n.ZERO,
                          u = n.ZERO,
                          d = e.a,
                          f = n.mul(e.b, cW),
                          p = n.mul(i, o),
                          g = n.mul(r, a),
                          y = n.mul(s, c),
                          b = n.add(i, r),
                          v = n.add(o, a);
                        (b = n.mul(b, v)),
                          (v = n.add(p, g)),
                          (b = n.sub(b, v)),
                          (v = n.add(i, s));
                        let w = n.add(o, c);
                        return (
                          (v = n.mul(v, w)),
                          (w = n.add(p, y)),
                          (v = n.sub(v, w)),
                          (w = n.add(r, s)),
                          (l = n.add(a, c)),
                          (w = n.mul(w, l)),
                          (l = n.add(g, y)),
                          (w = n.sub(w, l)),
                          (u = n.mul(d, v)),
                          (l = n.mul(f, y)),
                          (u = n.add(l, u)),
                          (l = n.sub(g, u)),
                          (u = n.add(g, u)),
                          (h = n.mul(l, u)),
                          (g = n.add(p, p)),
                          (g = n.add(g, p)),
                          (y = n.mul(d, y)),
                          (v = n.mul(f, v)),
                          (g = n.add(g, y)),
                          (y = n.sub(p, y)),
                          (y = n.mul(d, y)),
                          (v = n.add(v, y)),
                          (p = n.mul(g, v)),
                          (h = n.add(h, p)),
                          (p = n.mul(w, v)),
                          (l = n.mul(b, l)),
                          (l = n.sub(l, p)),
                          (p = n.mul(b, g)),
                          (u = n.mul(w, u)),
                          new x(l, h, (u = n.add(u, p)))
                        );
                      }
                      subtract(e) {
                        return this.add(e.negate());
                      }
                      is0() {
                        return this.equals(x.ZERO);
                      }
                      multiply(e) {
                        let t,
                          i,
                          { endo: r } = s;
                        if (!o.isValidNot0(e))
                          throw Error("invalid scalar: out of range");
                        let n = (e) => _.wNAFCached(this, e, x.normalizeZ);
                        if (r) {
                          let {
                              k1neg: s,
                              k1: o,
                              k2neg: a,
                              k2: c,
                            } = r.splitScalar(e),
                            { p: l, f: h } = n(o),
                            { p: u, f: d } = n(c);
                          (i = h.add(d)), (t = E(r.beta, l, u, s, a));
                        } else {
                          let { p: r, f: s } = n(e);
                          (t = r), (i = s);
                        }
                        return x.normalizeZ([t, i])[0];
                      }
                      multiplyUnsafe(e) {
                        let { endo: t } = s;
                        if (!o.isValid(e))
                          throw Error("invalid scalar: out of range");
                        if (e === cH || this.is0()) return x.ZERO;
                        if (e === cV) return this;
                        if (_.hasPrecomputes(this)) return this.multiply(e);
                        if (!t) return _.wNAFCachedUnsafe(this, e);
                        {
                          let {
                              k1neg: i,
                              k1: r,
                              k2neg: s,
                              k2: n,
                            } = t.splitScalar(e),
                            { p1: o, p2: a } = (function (e, t, i, r) {
                              let s = t,
                                n = e.ZERO,
                                o = e.ZERO;
                              for (; i > cv || r > cv; )
                                i & cw && (n = n.add(s)),
                                  r & cw && (o = o.add(s)),
                                  (s = s.double()),
                                  (i >>= cw),
                                  (r >>= cw);
                              return { p1: n, p2: o };
                            })(x, this, r, n);
                          return E(t.beta, o, a, i, s);
                        }
                      }
                      multiplyAndAddUnsafe(e, t, i) {
                        let r = this.multiplyUnsafe(t).add(e.multiplyUnsafe(i));
                        return r.is0() ? void 0 : r;
                      }
                      toAffine(e) {
                        return v(this, e);
                      }
                      isTorsionFree() {
                        let { isTorsionFree: e } = s;
                        return (
                          a === cV ||
                          (e ? e(x, this) : _.wNAFCachedUnsafe(this, c).is0())
                        );
                      }
                      clearCofactor() {
                        let { clearCofactor: e } = s;
                        return a === cV
                          ? this
                          : e
                          ? e(x, this)
                          : this.multiplyUnsafe(a);
                      }
                      toBytes() {
                        let e =
                          !(arguments.length > 0) ||
                          void 0 === arguments[0] ||
                          arguments[0];
                        return (
                          a$("isCompressed", e),
                          this.assertValidity(),
                          u(x, this, e)
                        );
                      }
                      toRawBytes() {
                        let e =
                          !(arguments.length > 0) ||
                          void 0 === arguments[0] ||
                          arguments[0];
                        return this.toBytes(e);
                      }
                      toHex() {
                        let e =
                          !(arguments.length > 0) ||
                          void 0 === arguments[0] ||
                          arguments[0];
                        return or(this.toBytes(e));
                      }
                      toString() {
                        return "<Point ".concat(
                          this.is0() ? "ZERO" : this.toHex(),
                          ">"
                        );
                      }
                      constructor(e, t, i) {
                        (this.px = b("x", e)),
                          (this.py = b("y", t, !0)),
                          (this.pz = b("z", i)),
                          Object.freeze(this);
                      }
                    }
                    (x.BASE = new x(e.Gx, e.Gy, n.ONE)),
                      (x.ZERO = new x(n.ZERO, n.ONE, n.ZERO)),
                      (x.Fp = n),
                      (x.Fn = o);
                    let I = o.BITS,
                      _ =
                        ((r = s.endo ? Math.ceil(I / 2) : I),
                        {
                          constTimeNegate: cE,
                          hasPrecomputes: (e) => 1 !== cP(e),
                          unsafeLadder(e, t) {
                            let i =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : x.ZERO,
                              r = e;
                            for (; t > cv; )
                              t & cw && (i = i.add(r)),
                                (r = r.double()),
                                (t >>= cw);
                            return i;
                          },
                          precomputeWindow(e, t) {
                            let { windows: i, windowSize: s } = cI(t, r),
                              n = [],
                              o = e,
                              a = o;
                            for (let e = 0; e < i; e++) {
                              (a = o), n.push(a);
                              for (let e = 1; e < s; e++)
                                (a = a.add(o)), n.push(a);
                              o = a.double();
                            }
                            return n;
                          },
                          wNAF(e, t, i) {
                            let s = x.ZERO,
                              n = x.BASE,
                              o = cI(e, r);
                            for (let e = 0; e < o.windows; e++) {
                              let {
                                nextN: r,
                                offset: a,
                                isZero: c,
                                isNeg: l,
                                isNegF: h,
                                offsetF: u,
                              } = c_(i, e, o);
                              (i = r),
                                c
                                  ? (n = n.add(cE(h, t[u])))
                                  : (s = s.add(cE(l, t[a])));
                            }
                            return cA(i), { p: s, f: n };
                          },
                          wNAFUnsafe(e, t, i) {
                            let s =
                                arguments.length > 3 && void 0 !== arguments[3]
                                  ? arguments[3]
                                  : x.ZERO,
                              n = cI(e, r);
                            for (let e = 0; e < n.windows && i !== cv; e++) {
                              let {
                                nextN: r,
                                offset: o,
                                isZero: a,
                                isNeg: c,
                              } = c_(i, e, n);
                              if (((i = r), !a)) {
                                let e = t[o];
                                s = s.add(c ? e.negate() : e);
                              }
                            }
                            return cA(i), s;
                          },
                          getPrecomputes(e, t, i) {
                            let r = cD.get(t);
                            return (
                              r ||
                                ((r = this.precomputeWindow(t, e)),
                                1 !== e &&
                                  ("function" == typeof i && (r = i(r)),
                                  cD.set(t, r))),
                              r
                            );
                          },
                          wNAFCached(e, t, i) {
                            let r = cP(e);
                            return this.wNAF(
                              r,
                              this.getPrecomputes(r, e, i),
                              t
                            );
                          },
                          wNAFCachedUnsafe(e, t, i, r) {
                            let s = cP(e);
                            return 1 === s
                              ? this.unsafeLadder(e, t, r)
                              : this.wNAFUnsafe(
                                  s,
                                  this.getPrecomputes(s, e, i),
                                  t,
                                  r
                                );
                          },
                          setWindowSize(e, t) {
                            cx(t, r), cS.set(e, t), cD.delete(e);
                          },
                        });
                    return x;
                  })(t, i),
                  r,
                  i
                );
              return Object.assign({}, s, {
                ProjectivePoint: s.Point,
                CURVE: e,
              });
            })({ ...e, hash: t });
          return { ...i(t), create: i };
        }
        let cX = {
            p: BigInt(
              "0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"
            ),
            n: BigInt(
              "0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"
            ),
            h: BigInt(1),
            a: BigInt(
              "0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"
            ),
            b: BigInt(
              "0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"
            ),
            Gx: BigInt(
              "0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"
            ),
            Gy: BigInt(
              "0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"
            ),
          },
          cQ = {
            p: BigInt(
              "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"
            ),
            n: BigInt(
              "0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"
            ),
            h: BigInt(1),
            a: BigInt(
              "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"
            ),
            b: BigInt(
              "0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"
            ),
            Gx: BigInt(
              "0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"
            ),
            Gy: BigInt(
              "0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f"
            ),
          },
          c$ = {
            p: BigInt(
              "0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
            ),
            n: BigInt(
              "0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"
            ),
            h: BigInt(1),
            a: BigInt(
              "0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"
            ),
            b: BigInt(
              "0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"
            ),
            Gx: BigInt(
              "0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"
            ),
            Gy: BigInt(
              "0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650"
            ),
          },
          c0 = cy(cX.p),
          c1 = cy(cQ.p),
          c2 = cy(c$.p),
          c8 = cZ({ ...cX, Fp: c0, lowS: !1 }, oV);
        cZ({ ...cQ, Fp: c1, lowS: !1 }, oW),
          cZ(
            {
              ...c$,
              Fp: c2,
              lowS: !1,
              allowedPrivateKeyLengths: [130, 131, 132],
            },
            oK
          );
        let c3 = "base10",
          c6 = "base16",
          c5 = "base64pad",
          c4 = "base64url",
          c9 = "utf8";
        function c7() {
          return s6(ou(32), c6);
        }
        function le(e) {
          return s6(oV(s3(e, c6)), c6);
        }
        function lt(e) {
          return s6(oV(s3(e, c9)), c6);
        }
        function li(e) {
          return s3("".concat(e), c3);
        }
        function lr(e) {
          return Number(s6(e, c3));
        }
        function ls(e) {
          return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
        }
        function ln(e) {
          let t = e.replace(/-/g, "+").replace(/_/g, "/"),
            i = (4 - (t.length % 4)) % 4;
          return t + "=".repeat(i);
        }
        function lo(e) {
          if (2 === lr(e.type)) return s6(rT([e.type, e.sealed]), c5);
          if (1 === lr(e.type)) {
            if (typeof e.senderPublicKey > "u")
              throw Error("Missing sender public key for type 1 envelope");
            return s6(rT([e.type, e.senderPublicKey, e.iv, e.sealed]), c5);
          }
          return s6(rT([e.type, e.iv, e.sealed]), c5);
        }
        function la(e) {
          let t = s3((e.encoding || c5) === c4 ? ln(e.encoded) : e.encoded, c5),
            i = t.slice(0, 1);
          if (1 === lr(i)) {
            let e = t.slice(1, 33),
              r = t.slice(33, 45);
            return { type: i, sealed: t.slice(45), iv: r, senderPublicKey: e };
          }
          if (2 === lr(i)) return { type: i, sealed: t.slice(1), iv: ou(12) };
          let r = t.slice(1, 13);
          return { type: i, sealed: t.slice(13), iv: r };
        }
        function lc(e) {
          let t = (null == e ? void 0 : e.type) || 0;
          if (1 === t) {
            if (typeof (null == e ? void 0 : e.senderPublicKey) > "u")
              throw Error("missing sender public key");
            if (typeof (null == e ? void 0 : e.receiverPublicKey) > "u")
              throw Error("missing receiver public key");
          }
          return {
            type: t,
            senderPublicKey: null == e ? void 0 : e.senderPublicKey,
            receiverPublicKey: null == e ? void 0 : e.receiverPublicKey,
          };
        }
        function ll(e) {
          return (
            1 === e.type &&
            "string" == typeof e.senderPublicKey &&
            "string" == typeof e.receiverPublicKey
          );
        }
        function lh(e) {
          return (null == e ? void 0 : e.relay) || { protocol: "irn" };
        }
        function lu(e) {
          let t = s5[e];
          if (typeof t > "u")
            throw Error("Relay Protocol not supported: ".concat(e));
          return t;
        }
        function ld(e) {
          var t;
          if (!e.includes("wc:")) {
            let t = nN(e);
            null != t && t.includes("wc:") && (e = t);
          }
          let i = (e = (e = e.includes("wc://")
              ? e.replace("wc://", "")
              : e).includes("wc:")
              ? e.replace("wc:", "")
              : e).indexOf(":"),
            r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
            s = e.substring(0, i),
            n = e.substring(i + 1, r).split("@"),
            o = new URLSearchParams("u" > typeof r ? e.substring(r) : ""),
            a = {};
          o.forEach((e, t) => {
            a[t] = e;
          });
          let c = "string" == typeof a.methods ? a.methods.split(",") : void 0;
          return {
            protocol: s,
            topic: (t = n[0]).startsWith("//") ? t.substring(2) : t,
            version: parseInt(n[1], 10),
            symKey: a.symKey,
            relay: (function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "-",
                i = {},
                r = "relay" + t;
              return (
                Object.keys(e).forEach((t) => {
                  if (t.startsWith(r)) {
                    let s = t.replace(r, ""),
                      n = e[t];
                    i[s] = n;
                  }
                }),
                i
              );
            })(a),
            methods: c,
            expiryTimestamp: a.expiryTimestamp
              ? parseInt(a.expiryTimestamp, 10)
              : void 0,
          };
        }
        function lf(e) {
          let t = new URLSearchParams(),
            i = (function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "-",
                i = {};
              return (
                Object.keys(e).forEach((r) => {
                  e[r] && (i["relay" + t + r] = e[r]);
                }),
                i
              );
            })(e.relay);
          Object.keys(i)
            .sort()
            .forEach((e) => {
              t.set(e, i[e]);
            }),
            t.set("symKey", e.symKey),
            e.expiryTimestamp &&
              t.set("expiryTimestamp", e.expiryTimestamp.toString()),
            e.methods && t.set("methods", e.methods.join(","));
          let r = t.toString();
          return ""
            .concat(e.protocol, ":")
            .concat(e.topic, "@")
            .concat(e.version, "?")
            .concat(r);
        }
        function lp(e, t, i) {
          return "".concat(e, "?wc_ev=").concat(i, "&topic=").concat(t);
        }
        var lg = Object.defineProperty,
          ly = Object.defineProperties,
          lb = Object.getOwnPropertyDescriptors,
          lm = Object.getOwnPropertySymbols,
          lv = Object.prototype.hasOwnProperty,
          lw = Object.prototype.propertyIsEnumerable,
          lE = (e, t, i) =>
            t in e
              ? lg(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          lx = (e, t) => {
            for (var i in t || (t = {})) lv.call(t, i) && lE(e, i, t[i]);
            if (lm) for (var i of lm(t)) lw.call(t, i) && lE(e, i, t[i]);
            return e;
          },
          lI = (e, t) => ly(e, lb(t));
        function l_(e) {
          let t = [];
          return (
            e.forEach((e) => {
              let [i, r] = e.split(":");
              t.push("".concat(i, ":").concat(r));
            }),
            t
          );
        }
        function lD(e) {
          return e.includes(":");
        }
        function lS(e) {
          return lD(e) ? e.split(":")[0] : e;
        }
        function lP(e) {
          var t, i, r;
          let s = {};
          if (!lR(e)) return s;
          for (let [n, o] of Object.entries(e)) {
            let e = lD(n) ? [n] : o.chains,
              a = o.methods || [],
              c = o.events || [],
              l = lS(n);
            s[l] = lI(lx({}, s[l]), {
              chains: nS(e, null == (t = s[l]) ? void 0 : t.chains),
              methods: nS(a, null == (i = s[l]) ? void 0 : i.methods),
              events: nS(c, null == (r = s[l]) ? void 0 : r.events),
            });
          }
          return s;
        }
        function lA(e, t) {
          let i = (function (e) {
            let t = {};
            return (
              null == e ||
                e.forEach((e) => {
                  var i;
                  let [r, s] = e.split(":");
                  t[r] ||
                    (t[r] = {
                      accounts: [],
                      chains: [],
                      events: [],
                      methods: [],
                    }),
                    t[r].accounts.push(e),
                    null == (i = t[r].chains) ||
                      i.push("".concat(r, ":").concat(s));
                }),
              t
            );
          })((t = t.map((e) => e.replace("did:pkh:", ""))));
          for (let [t, r] of Object.entries(i))
            r.methods ? (r.methods = nS(r.methods, e)) : (r.methods = e),
              (r.events = ["chainChanged", "accountsChanged"]);
          return i;
        }
        let lO = {
            INVALID_METHOD: { message: "Invalid method.", code: 1001 },
            INVALID_EVENT: { message: "Invalid event.", code: 1002 },
            INVALID_UPDATE_REQUEST: {
              message: "Invalid update request.",
              code: 1003,
            },
            INVALID_EXTEND_REQUEST: {
              message: "Invalid extend request.",
              code: 1004,
            },
            INVALID_SESSION_SETTLE_REQUEST: {
              message: "Invalid session settle request.",
              code: 1005,
            },
            UNAUTHORIZED_METHOD: {
              message: "Unauthorized method.",
              code: 3001,
            },
            UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
            UNAUTHORIZED_UPDATE_REQUEST: {
              message: "Unauthorized update request.",
              code: 3003,
            },
            UNAUTHORIZED_EXTEND_REQUEST: {
              message: "Unauthorized extend request.",
              code: 3004,
            },
            USER_REJECTED: { message: "User rejected.", code: 5e3 },
            USER_REJECTED_CHAINS: {
              message: "User rejected chains.",
              code: 5001,
            },
            USER_REJECTED_METHODS: {
              message: "User rejected methods.",
              code: 5002,
            },
            USER_REJECTED_EVENTS: {
              message: "User rejected events.",
              code: 5003,
            },
            UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
            UNSUPPORTED_METHODS: {
              message: "Unsupported methods.",
              code: 5101,
            },
            UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
            UNSUPPORTED_ACCOUNTS: {
              message: "Unsupported accounts.",
              code: 5103,
            },
            UNSUPPORTED_NAMESPACE_KEY: {
              message: "Unsupported namespace key.",
              code: 5104,
            },
            USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
            SESSION_SETTLEMENT_FAILED: {
              message: "Session settlement failed.",
              code: 7e3,
            },
            WC_METHOD_UNSUPPORTED: {
              message: "Unsupported wc_ method.",
              code: 10001,
            },
          },
          lC = {
            NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
            NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
            RESTORE_WILL_OVERRIDE: {
              message: "Restore will override.",
              code: 3,
            },
            RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
            MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
            EXPIRED: { message: "Expired.", code: 6 },
            UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
            MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
            NON_CONFORMING_NAMESPACES: {
              message: "Non conforming namespaces.",
              code: 9,
            },
          };
        function lT(e, t) {
          let { message: i, code: r } = lC[e];
          return { message: t ? "".concat(i, " ").concat(t) : i, code: r };
        }
        function lN(e, t) {
          let { message: i, code: r } = lO[e];
          return { message: t ? "".concat(i, " ").concat(t) : i, code: r };
        }
        function lU(e, t) {
          return (
            !!Array.isArray(e) && (!("u" > typeof t) || !e.length || e.every(t))
          );
        }
        function lR(e) {
          return (
            Object.getPrototypeOf(e) === Object.prototype &&
            Object.keys(e).length
          );
        }
        function lB(e) {
          return typeof e > "u";
        }
        function lk(e, t) {
          return !!(t && lB(e)) || ("string" == typeof e && !!e.trim().length);
        }
        function lj(e, t) {
          return !!(t && lB(e)) || ("number" == typeof e && !isNaN(e));
        }
        function lL(e) {
          return !!(lk(e, !1) && e.includes(":")) && 2 === e.split(":").length;
        }
        function lq(e) {
          let t = !0;
          return (
            lU(e) ? e.length && (t = e.every((e) => lk(e, !1))) : (t = !1), t
          );
        }
        function lM(e, t) {
          let i = null;
          return (
            Object.values(e).forEach((e) => {
              var r;
              let s;
              if (i) return;
              let n =
                ((r = "".concat(t, ", namespace")),
                (s = null),
                lq(null == e ? void 0 : e.methods)
                  ? lq(null == e ? void 0 : e.events) ||
                    (s = lN(
                      "UNSUPPORTED_EVENTS",
                      "".concat(
                        r,
                        ", events should be an array of strings or empty array for no events"
                      )
                    ))
                  : (s = lN(
                      "UNSUPPORTED_METHODS",
                      "".concat(
                        r,
                        ", methods should be an array of strings or empty array for no methods"
                      )
                    )),
                s);
              n && (i = n);
            }),
            i
          );
        }
        function lz(e, t) {
          let i = null;
          if (e && lR(e)) {
            let r,
              s = lM(e, t);
            s && (i = s);
            let n =
              ((r = null),
              Object.values(e).forEach((e) => {
                var i, s;
                let n;
                if (r) return;
                let o =
                  ((i = null == e ? void 0 : e.accounts),
                  (s = "".concat(t, " namespace")),
                  (n = null),
                  lU(i)
                    ? i.forEach((e) => {
                        n ||
                          (function (e) {
                            if (lk(e, !1) && e.includes(":")) {
                              let t = e.split(":");
                              if (3 === t.length) {
                                let e = t[0] + ":" + t[1];
                                return !!t[2] && lL(e);
                              }
                            }
                            return !1;
                          })(e) ||
                          (n = lN(
                            "UNSUPPORTED_ACCOUNTS",
                            ""
                              .concat(s, ", account ")
                              .concat(
                                e,
                                ' should be a string and conform to "namespace:chainId:address" format'
                              )
                          ));
                      })
                    : (n = lN(
                        "UNSUPPORTED_ACCOUNTS",
                        "".concat(
                          s,
                          ', accounts should be an array of strings conforming to "namespace:chainId:address" format'
                        )
                      )),
                  n);
                o && (r = o);
              }),
              r);
            n && (i = n);
          } else
            i = lT(
              "MISSING_OR_INVALID",
              "".concat(t, ", namespaces should be an object with data")
            );
          return i;
        }
        function lF(e) {
          return lk(e.protocol, !0);
        }
        function lH(e) {
          return "u" > typeof e;
        }
        function lV(e, t) {
          return !(
            !lL(t) ||
            !(function (e) {
              let t = [];
              return (
                Object.values(e).forEach((e) => {
                  t.push(...l_(e.accounts));
                }),
                t
              );
            })(e).includes(t)
          );
        }
        function lK(e, t, i) {
          let r = null,
            s = (function (e) {
              let t = {};
              return (
                Object.keys(e).forEach((i) => {
                  var r;
                  i.includes(":")
                    ? (t[i] = e[i])
                    : null == (r = e[i].chains) ||
                      r.forEach((r) => {
                        t[r] = { methods: e[i].methods, events: e[i].events };
                      });
                }),
                t
              );
            })(e),
            n = (function (e) {
              let t = {};
              return (
                Object.keys(e).forEach((i) => {
                  if (i.includes(":")) t[i] = e[i];
                  else {
                    let r = l_(e[i].accounts);
                    null == r ||
                      r.forEach((r) => {
                        t[r] = {
                          accounts: e[i].accounts.filter((e) =>
                            e.includes("".concat(r, ":"))
                          ),
                          methods: e[i].methods,
                          events: e[i].events,
                        };
                      });
                  }
                }),
                t
              );
            })(t),
            o = Object.keys(s),
            a = Object.keys(n),
            c = lW(Object.keys(e)),
            l = lW(Object.keys(t)),
            h = c.filter((e) => !l.includes(e));
          return (
            h.length &&
              (r = lT(
                "NON_CONFORMING_NAMESPACES",
                ""
                  .concat(
                    i,
                    " namespaces keys don't satisfy requiredNamespaces.\n      Required: "
                  )
                  .concat(h.toString(), "\n      Received: ")
                  .concat(Object.keys(t).toString())
              )),
            ny(o, a) ||
              (r = lT(
                "NON_CONFORMING_NAMESPACES",
                ""
                  .concat(
                    i,
                    " namespaces chains don't satisfy required namespaces.\n      Required: "
                  )
                  .concat(o.toString(), "\n      Approved: ")
                  .concat(a.toString())
              )),
            Object.keys(t).forEach((e) => {
              if (!e.includes(":") || r) return;
              let s = l_(t[e].accounts);
              s.includes(e) ||
                (r = lT(
                  "NON_CONFORMING_NAMESPACES",
                  ""
                    .concat(
                      i,
                      " namespaces accounts don't satisfy namespace accounts for "
                    )
                    .concat(e, "\n        Required: ")
                    .concat(e, "\n        Approved: ")
                    .concat(s.toString())
                ));
            }),
            o.forEach((e) => {
              r ||
                (ny(s[e].methods, n[e].methods)
                  ? ny(s[e].events, n[e].events) ||
                    (r = lT(
                      "NON_CONFORMING_NAMESPACES",
                      ""
                        .concat(
                          i,
                          " namespaces events don't satisfy namespace events for "
                        )
                        .concat(e)
                    ))
                  : (r = lT(
                      "NON_CONFORMING_NAMESPACES",
                      ""
                        .concat(
                          i,
                          " namespaces methods don't satisfy namespace methods for "
                        )
                        .concat(e)
                    )));
            }),
            r
          );
        }
        function lW(e) {
          return [
            ...new Set(e.map((e) => (e.includes(":") ? e.split(":")[0] : e))),
          ];
        }
        function lG() {
          let e = nd();
          return new Promise((t) => {
            switch (e) {
              case nc.browser:
                var i;
                t(nu() && (null == (i = navigator) ? void 0 : i.onLine));
                break;
              case nc.reactNative:
                t(lY());
                break;
              case nc.node:
              default:
                t(!0);
            }
          });
        }
        async function lY() {
          if (nh() && null != globalThis && globalThis.NetInfo) {
            let e = await (null == globalThis
              ? void 0
              : globalThis.NetInfo.fetch());
            return null == e ? void 0 : e.isConnected;
          }
          return !0;
        }
        let lJ = {};
        class lZ {
          static get(e) {
            return lJ[e];
          }
          static set(e, t) {
            lJ[e] = t;
          }
          static delete(e) {
            delete lJ[e];
          }
        }
        function lX(e) {
          return new Uint8Array(
            e
              .replace(/^0x/, "")
              .match(/.{1,2}/g)
              .map((e) => parseInt(e, 16))
          );
        }
        let lQ = "INTERNAL_ERROR",
          l$ = "SERVER_ERROR",
          l0 = [-32700, -32600, -32601, -32602, -32603],
          l1 = {
            PARSE_ERROR: { code: -32700, message: "Parse error" },
            INVALID_REQUEST: { code: -32600, message: "Invalid Request" },
            METHOD_NOT_FOUND: { code: -32601, message: "Method not found" },
            INVALID_PARAMS: { code: -32602, message: "Invalid params" },
            [lQ]: { code: -32603, message: "Internal error" },
            [l$]: { code: -32e3, message: "Server error" },
          };
        function l2(e) {
          return Object.keys(l1).includes(e) ? l1[e] : l1[l$];
        }
        function l8(e, t, i) {
          return e.message.includes("getaddrinfo ENOTFOUND") ||
            e.message.includes("connect ECONNREFUSED")
            ? Error("Unavailable ".concat(i, " RPC url at ").concat(t))
            : e;
        }
        var l3 = e.i(588149);
        function l6() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
          return (
            Date.now() * Math.pow(10, e) +
            Math.floor(Math.random() * Math.pow(10, e))
          );
        }
        function l5() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6;
          return BigInt(l6(e));
        }
        function l4(e, t, i) {
          return { id: i || l6(), jsonrpc: "2.0", method: e, params: t };
        }
        function l9(e, t) {
          return { id: e, jsonrpc: "2.0", result: t };
        }
        function l7(e, t, i) {
          var r, s, n;
          return {
            id: e,
            jsonrpc: "2.0",
            error:
              ((r = t),
              (s = i),
              void 0 === r
                ? l2(lQ)
                : ("string" == typeof r &&
                    (r = Object.assign(Object.assign({}, l2(l$)), {
                      message: r,
                    })),
                  void 0 !== s && (r.data = s),
                  (n = r.code),
                  l0.includes(n) &&
                    (r = (function (e) {
                      let t = Object.values(l1).find((t) => t.code === e);
                      return t || l1[l$];
                    })(r.code)),
                  r)),
          };
        }
        l3.isNode;
        class he {}
        class ht extends he {
          constructor() {
            super();
          }
        }
        class hi extends ht {
          constructor(e) {
            super();
          }
        }
        function hr(e, t) {
          let i = (function (e) {
            let t = e.match(RegExp(/^\w+:/, "gi"));
            if (t && t.length) return t[0];
          })(e);
          return void 0 !== i && new RegExp(t).test(i);
        }
        function hs(e) {
          return hr(e, "^https?:");
        }
        function hn(e) {
          return hr(e, "^wss?:");
        }
        function ho(e) {
          return (
            "object" == typeof e &&
            "id" in e &&
            "jsonrpc" in e &&
            "2.0" === e.jsonrpc
          );
        }
        function ha(e) {
          return ho(e) && "method" in e;
        }
        function hc(e) {
          return ho(e) && (hl(e) || hh(e));
        }
        function hl(e) {
          return "result" in e;
        }
        function hh(e) {
          return "error" in e;
        }
        class hu extends hi {
          async connect() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.connection;
            await this.open(e);
          }
          async disconnect() {
            await this.close();
          }
          on(e, t) {
            this.events.on(e, t);
          }
          once(e, t) {
            this.events.once(e, t);
          }
          off(e, t) {
            this.events.off(e, t);
          }
          removeListener(e, t) {
            this.events.removeListener(e, t);
          }
          async request(e, t) {
            return this.requestStrict(
              l4(e.method, e.params || [], e.id || l5().toString()),
              t
            );
          }
          async requestStrict(e, t) {
            return new Promise(async (i, r) => {
              if (!this.connection.connected)
                try {
                  await this.open();
                } catch (e) {
                  r(e);
                }
              this.events.on("".concat(e.id), (e) => {
                hh(e) ? r(e.error) : i(e.result);
              });
              try {
                await this.connection.send(e, t);
              } catch (e) {
                r(e);
              }
            });
          }
          setConnection() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.connection;
            return e;
          }
          onPayload(e) {
            this.events.emit("payload", e),
              hc(e)
                ? this.events.emit("".concat(e.id), e)
                : this.events.emit("message", {
                    type: e.method,
                    data: e.params,
                  });
          }
          onClose(e) {
            e &&
              3e3 === e.code &&
              this.events.emit(
                "error",
                Error(
                  "WebSocket connection closed abnormally with code: "
                    .concat(e.code, " ")
                    .concat(e.reason ? "(".concat(e.reason, ")") : "")
                )
              ),
              this.events.emit("disconnect");
          }
          async open() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.connection;
            (this.connection === e && this.connection.connected) ||
              (this.connection.connected && this.close(),
              "string" == typeof e &&
                (await this.connection.open(e), (e = this.connection)),
              (this.connection = this.setConnection(e)),
              await this.connection.open(),
              this.registerEventListeners(),
              this.events.emit("connect"));
          }
          async close() {
            await this.connection.close();
          }
          registerEventListeners() {
            this.hasRegisteredEventListeners ||
              (this.connection.on("payload", (e) => this.onPayload(e)),
              this.connection.on("close", (e) => this.onClose(e)),
              this.connection.on("error", (e) => this.events.emit("error", e)),
              this.connection.on("register_error", (e) => this.onClose()),
              (this.hasRegisteredEventListeners = !0));
          }
          constructor(e) {
            super(e),
              (this.events = new n.EventEmitter()),
              (this.hasRegisteredEventListeners = !1),
              (this.connection = this.setConnection(e)),
              this.connection.connected && this.registerEventListeners();
          }
        }
        let hd = (e) => e.split("?")[0],
          hf =
            "u" > typeof WebSocket
              ? WebSocket
              : "u" > typeof globalThis.WebSocket
              ? globalThis.WebSocket
              : "u" > typeof window && "u" > typeof window.WebSocket
              ? window.WebSocket
              : "u" > typeof self && "u" > typeof self.WebSocket
              ? self.WebSocket
              : e.r(416730);
        class hp {
          get connected() {
            return "u" > typeof this.socket;
          }
          get connecting() {
            return this.registering;
          }
          on(e, t) {
            this.events.on(e, t);
          }
          once(e, t) {
            this.events.once(e, t);
          }
          off(e, t) {
            this.events.off(e, t);
          }
          removeListener(e, t) {
            this.events.removeListener(e, t);
          }
          async open() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.url;
            await this.register(e);
          }
          async close() {
            return new Promise((e, t) => {
              if (typeof this.socket > "u")
                return void t(Error("Connection already closed"));
              (this.socket.onclose = (t) => {
                this.onClose(t), e();
              }),
                this.socket.close();
            });
          }
          async send(e) {
            typeof this.socket > "u" && (this.socket = await this.register());
            try {
              this.socket.send((0, A.safeJsonStringify)(e));
            } catch (t) {
              this.onError(e.id, t);
            }
          }
          register() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.url;
            if (!hn(e))
              throw Error(
                "Provided URL is not compatible with WebSocket connection: ".concat(
                  e
                )
              );
            if (this.registering) {
              let e = this.events.getMaxListeners();
              return (
                (this.events.listenerCount("register_error") >= e ||
                  this.events.listenerCount("open") >= e) &&
                  this.events.setMaxListeners(e + 1),
                new Promise((e, t) => {
                  this.events.once("register_error", (e) => {
                    this.resetMaxListeners(), t(e);
                  }),
                    this.events.once("open", () => {
                      if ((this.resetMaxListeners(), typeof this.socket > "u"))
                        return t(
                          Error("WebSocket connection is missing or invalid")
                        );
                      e(this.socket);
                    });
                })
              );
            }
            return (
              (this.url = e),
              (this.registering = !0),
              new Promise((t, i) => {
                let r = (0, l3.isReactNative)()
                    ? void 0
                    : {
                        rejectUnauthorized: !RegExp(
                          "wss?://localhost(:d{2,5})?"
                        ).test(e),
                      },
                  s = new hf(e, [], r);
                "u" > typeof WebSocket ||
                "u" > typeof globalThis.WebSocket ||
                ("u" > typeof window && "u" > typeof window.WebSocket) ||
                ("u" > typeof self && "u" > typeof self.WebSocket)
                  ? (s.onerror = (e) => {
                      i(this.emitError(e.error));
                    })
                  : s.on("error", (e) => {
                      i(this.emitError(e));
                    }),
                  (s.onopen = () => {
                    this.onOpen(s), t(s);
                  });
              })
            );
          }
          onOpen(e) {
            (e.onmessage = (e) => this.onPayload(e)),
              (e.onclose = (e) => this.onClose(e)),
              (this.socket = e),
              (this.registering = !1),
              this.events.emit("open");
          }
          onClose(e) {
            (this.socket = void 0),
              (this.registering = !1),
              this.events.emit("close", e);
          }
          onPayload(e) {
            if (typeof e.data > "u") return;
            let t =
              "string" == typeof e.data ? (0, A.safeJsonParse)(e.data) : e.data;
            this.events.emit("payload", t);
          }
          onError(e, t) {
            let i = this.parseError(t),
              r = l7(e, i.message || i.toString());
            this.events.emit("payload", r);
          }
          parseError(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.url;
            return l8(e, hd(t), "WS");
          }
          resetMaxListeners() {
            this.events.getMaxListeners() > 10 &&
              this.events.setMaxListeners(10);
          }
          emitError(e) {
            let t = this.parseError(
              Error(
                (null == e ? void 0 : e.message) ||
                  "WebSocket connection failed for host: ".concat(hd(this.url))
              )
            );
            return this.events.emit("register_error", t), t;
          }
          constructor(e) {
            if (
              ((this.url = e),
              (this.events = new n.EventEmitter()),
              (this.registering = !1),
              !hn(e))
            )
              throw Error(
                "Provided URL is not compatible with WebSocket connection: ".concat(
                  e
                )
              );
            this.url = e;
          }
        }
        let hg = "core",
          hy = "".concat("wc", "@2:").concat(hg, ":"),
          hb = { logger: "error" },
          hm = { database: ":memory:" },
          hv = "client_ed25519_seed",
          hw = o.ONE_DAY,
          hE = o.SIX_HOURS,
          hx = "wss://relay.walletconnect.org",
          hI = {
            message: "relayer_message",
            message_ack: "relayer_message_ack",
            connect: "relayer_connect",
            disconnect: "relayer_disconnect",
            error: "relayer_error",
            connection_stalled: "relayer_connection_stalled",
            publish: "relayer_publish",
          },
          h_ = {
            payload: "payload",
            connect: "connect",
            disconnect: "disconnect",
            error: "error",
          },
          hD = "2.21.3",
          hS = { link_mode: "link_mode", relay: "relay" },
          hP = { inbound: "inbound", outbound: "outbound" },
          hA = "WALLETCONNECT_LINK_MODE_APPS",
          hO = {
            created: "subscription_created",
            deleted: "subscription_deleted",
            sync: "subscription_sync",
            resubscribed: "subscription_resubscribed",
          },
          hC =
            (o.THIRTY_DAYS,
            o.FIVE_SECONDS,
            o.THIRTY_DAYS,
            {
              wc_pairingDelete: {
                req: { ttl: o.ONE_DAY, prompt: !1, tag: 1e3 },
                res: { ttl: o.ONE_DAY, prompt: !1, tag: 1001 },
              },
              wc_pairingPing: {
                req: { ttl: o.THIRTY_SECONDS, prompt: !1, tag: 1002 },
                res: { ttl: o.THIRTY_SECONDS, prompt: !1, tag: 1003 },
              },
              unregistered_method: {
                req: { ttl: o.ONE_DAY, prompt: !1, tag: 0 },
                res: { ttl: o.ONE_DAY, prompt: !1, tag: 0 },
              },
            }),
          hT = {
            create: "pairing_create",
            expire: "pairing_expire",
            delete: "pairing_delete",
            ping: "pairing_ping",
          },
          hN = {
            created: "history_created",
            updated: "history_updated",
            deleted: "history_deleted",
            sync: "history_sync",
          },
          hU = {
            created: "expirer_created",
            deleted: "expirer_deleted",
            expired: "expirer_expired",
            sync: "expirer_sync",
          },
          hR = (o.ONE_DAY, "https://verify.walletconnect.org"),
          hB = "".concat(hR, "/v3"),
          hk = ["https://verify.walletconnect.com", hR],
          hj = {
            pairing_started: "pairing_started",
            pairing_uri_validation_success: "pairing_uri_validation_success",
            pairing_uri_not_expired: "pairing_uri_not_expired",
            store_new_pairing: "store_new_pairing",
            subscribing_pairing_topic: "subscribing_pairing_topic",
            subscribe_pairing_topic_success: "subscribe_pairing_topic_success",
            existing_pairing: "existing_pairing",
            pairing_not_expired: "pairing_not_expired",
            emit_inactive_pairing: "emit_inactive_pairing",
            emit_session_proposal: "emit_session_proposal",
          },
          hL = {
            no_internet_connection: "no_internet_connection",
            malformed_pairing_uri: "malformed_pairing_uri",
            active_pairing_already_exists: "active_pairing_already_exists",
            subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure",
            pairing_expired: "pairing_expired",
            proposal_listener_not_found: "proposal_listener_not_found",
          },
          hq = {
            session_approve_started: "session_approve_started",
            session_namespaces_validation_success:
              "session_namespaces_validation_success",
            subscribing_session_topic: "subscribing_session_topic",
            subscribe_session_topic_success: "subscribe_session_topic_success",
            publishing_session_approve: "publishing_session_approve",
            session_approve_publish_success: "session_approve_publish_success",
            store_session: "store_session",
            publishing_session_settle: "publishing_session_settle",
            session_settle_publish_success: "session_settle_publish_success",
          },
          hM = {
            no_internet_connection: "no_internet_connection",
            proposal_expired: "proposal_expired",
            subscribe_session_topic_failure: "subscribe_session_topic_failure",
            session_approve_publish_failure: "session_approve_publish_failure",
            session_settle_publish_failure: "session_settle_publish_failure",
            session_approve_namespace_validation_failure:
              "session_approve_namespace_validation_failure",
            proposal_not_found: "proposal_not_found",
          },
          hz = {
            authenticated_session_approve_started:
              "authenticated_session_approve_started",
            create_authenticated_session_topic:
              "create_authenticated_session_topic",
            cacaos_verified: "cacaos_verified",
            store_authenticated_session: "store_authenticated_session",
            subscribing_authenticated_session_topic:
              "subscribing_authenticated_session_topic",
            subscribe_authenticated_session_topic_success:
              "subscribe_authenticated_session_topic_success",
            publishing_authenticated_session_approve:
              "publishing_authenticated_session_approve",
          },
          hF = {
            no_internet_connection: "no_internet_connection",
            invalid_cacao: "invalid_cacao",
            subscribe_authenticated_session_topic_failure:
              "subscribe_authenticated_session_topic_failure",
            authenticated_session_approve_publish_failure:
              "authenticated_session_approve_publish_failure",
            authenticated_session_pending_request_not_found:
              "authenticated_session_pending_request_not_found",
          };
        var hH = function (e, t) {
          if (e.length >= 255) throw TypeError("Alphabet too long");
          for (var i = new Uint8Array(256), r = 0; r < i.length; r++)
            i[r] = 255;
          for (var s = 0; s < e.length; s++) {
            var n = e.charAt(s),
              o = n.charCodeAt(0);
            if (255 !== i[o]) throw TypeError(n + " is ambiguous");
            i[o] = s;
          }
          var a = e.length,
            c = e.charAt(0),
            l = Math.log(a) / Math.log(256),
            h = Math.log(256) / Math.log(a);
          function u(e) {
            if ("string" != typeof e) throw TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (" " !== e[0]) {
              for (var r = 0, s = 0; e[t] === c; ) r++, t++;
              for (
                var n = ((e.length - t) * l + 1) >>> 0, o = new Uint8Array(n);
                e[t];

              ) {
                var h = i[e.charCodeAt(t)];
                if (255 === h) return;
                for (
                  var u = 0, d = n - 1;
                  (0 !== h || u < s) && -1 !== d;
                  d--, u++
                )
                  (h += (a * o[d]) >>> 0),
                    (o[d] = h % 256 >>> 0),
                    (h = (h / 256) >>> 0);
                if (0 !== h) throw Error("Non-zero carry");
                (s = u), t++;
              }
              if (" " !== e[t]) {
                for (var f = n - s; f !== n && 0 === o[f]; ) f++;
                for (var p = new Uint8Array(r + (n - f)), g = r; f !== n; )
                  p[g++] = o[f++];
                return p;
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (
                var i = 0, r = 0, s = 0, n = t.length;
                s !== n && 0 === t[s];

              )
                s++, i++;
              for (
                var o = ((n - s) * h + 1) >>> 0, l = new Uint8Array(o);
                s !== n;

              ) {
                for (
                  var u = t[s], d = 0, f = o - 1;
                  (0 !== u || d < r) && -1 !== f;
                  f--, d++
                )
                  (u += (256 * l[f]) >>> 0),
                    (l[f] = u % a >>> 0),
                    (u = (u / a) >>> 0);
                if (0 !== u) throw Error("Non-zero carry");
                (r = d), s++;
              }
              for (var p = o - r; p !== o && 0 === l[p]; ) p++;
              for (var g = c.repeat(i); p < o; ++p) g += e.charAt(l[p]);
              return g;
            },
            decodeUnsafe: u,
            decode: function (e) {
              var i = u(e);
              if (i) return i;
              throw Error("Non-".concat(t, " character"));
            },
          };
        };
        let hV = (e) => {
          if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
            return e;
          if (e instanceof ArrayBuffer) return new Uint8Array(e);
          if (ArrayBuffer.isView(e))
            return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
          throw Error("Unknown type, must be binary type");
        };
        class hK {
          encode(e) {
            if (e instanceof Uint8Array)
              return "".concat(this.prefix).concat(this.baseEncode(e));
            throw Error("Unknown type, must be binary type");
          }
          constructor(e, t, i) {
            (this.name = e), (this.prefix = t), (this.baseEncode = i);
          }
        }
        class hW {
          decode(e) {
            if ("string" == typeof e) {
              if (e.codePointAt(0) !== this.prefixCodePoint)
                throw Error(
                  "Unable to decode multibase string "
                    .concat(JSON.stringify(e), ", ")
                    .concat(
                      this.name,
                      " decoder only supports inputs prefixed with "
                    )
                    .concat(this.prefix)
                );
              return this.baseDecode(e.slice(this.prefix.length));
            }
            throw Error("Can only multibase decode strings");
          }
          or(e) {
            return hY(this, e);
          }
          constructor(e, t, i) {
            if (
              ((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0))
            )
              throw Error("Invalid prefix character");
            (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
          }
        }
        class hG {
          or(e) {
            return hY(this, e);
          }
          decode(e) {
            let t = e[0],
              i = this.decoders[t];
            if (i) return i.decode(e);
            throw RangeError(
              "Unable to decode multibase string "
                .concat(JSON.stringify(e), ", only inputs prefixed with ")
                .concat(Object.keys(this.decoders), " are supported")
            );
          }
          constructor(e) {
            this.decoders = e;
          }
        }
        let hY = (e, t) =>
          new hG({
            ...(e.decoders || { [e.prefix]: e }),
            ...(t.decoders || { [t.prefix]: t }),
          });
        class hJ {
          encode(e) {
            return this.encoder.encode(e);
          }
          decode(e) {
            return this.decoder.decode(e);
          }
          constructor(e, t, i, r) {
            (this.name = e),
              (this.prefix = t),
              (this.baseEncode = i),
              (this.baseDecode = r),
              (this.encoder = new hK(e, t, i)),
              (this.decoder = new hW(e, t, r));
          }
        }
        let hZ = (e) => {
            let { name: t, prefix: i, encode: r, decode: s } = e;
            return new hJ(t, i, r, s);
          },
          hX = (e) => {
            let { prefix: t, name: i, alphabet: r } = e,
              { encode: s, decode: n } = hH(r, i);
            return hZ({
              prefix: t,
              name: i,
              encode: s,
              decode: (e) => hV(n(e)),
            });
          },
          hQ = (e) => {
            let { name: t, prefix: i, bitsPerChar: r, alphabet: s } = e;
            return hZ({
              prefix: i,
              name: t,
              encode: (e) =>
                ((e, t, i) => {
                  let r = "=" === t[t.length - 1],
                    s = (1 << i) - 1,
                    n = "",
                    o = 0,
                    a = 0;
                  for (let r = 0; r < e.length; ++r)
                    for (a = (a << 8) | e[r], o += 8; o > i; )
                      (o -= i), (n += t[s & (a >> o)]);
                  if ((o && (n += t[s & (a << (i - o))]), r))
                    for (; (n.length * i) & 7; ) n += "=";
                  return n;
                })(e, s, r),
              decode: (e) =>
                ((e, t, i, r) => {
                  let s = {};
                  for (let e = 0; e < t.length; ++e) s[t[e]] = e;
                  let n = e.length;
                  for (; "=" === e[n - 1]; ) --n;
                  let o = new Uint8Array(((n * i) / 8) | 0),
                    a = 0,
                    c = 0,
                    l = 0;
                  for (let t = 0; t < n; ++t) {
                    let n = s[e[t]];
                    if (void 0 === n)
                      throw SyntaxError("Non-".concat(r, " character"));
                    (c = (c << i) | n),
                      (a += i) >= 8 && ((a -= 8), (o[l++] = 255 & (c >> a)));
                  }
                  if (a >= i || 255 & (c << (8 - a)))
                    throw SyntaxError("Unexpected end of data");
                  return o;
                })(e, s, r, t),
            });
          };
        var h$ = Object.freeze({
            __proto__: null,
            identity: hZ({
              prefix: "\0",
              name: "identity",
              encode: (e) => new TextDecoder().decode(e),
              decode: (e) => new TextEncoder().encode(e),
            }),
          }),
          h0 = Object.freeze({
            __proto__: null,
            base2: hQ({
              prefix: "0",
              name: "base2",
              alphabet: "01",
              bitsPerChar: 1,
            }),
          }),
          h1 = Object.freeze({
            __proto__: null,
            base8: hQ({
              prefix: "7",
              name: "base8",
              alphabet: "01234567",
              bitsPerChar: 3,
            }),
          }),
          h2 = Object.freeze({
            __proto__: null,
            base10: hX({ prefix: "9", name: "base10", alphabet: "0123456789" }),
          }),
          h8 = Object.freeze({
            __proto__: null,
            base16: hQ({
              prefix: "f",
              name: "base16",
              alphabet: "0123456789abcdef",
              bitsPerChar: 4,
            }),
            base16upper: hQ({
              prefix: "F",
              name: "base16upper",
              alphabet: "0123456789ABCDEF",
              bitsPerChar: 4,
            }),
          });
        let h3 = hQ({
            prefix: "b",
            name: "base32",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567",
            bitsPerChar: 5,
          }),
          h6 = hQ({
            prefix: "B",
            name: "base32upper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
            bitsPerChar: 5,
          }),
          h5 = hQ({
            prefix: "c",
            name: "base32pad",
            alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
            bitsPerChar: 5,
          }),
          h4 = hQ({
            prefix: "C",
            name: "base32padupper",
            alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
            bitsPerChar: 5,
          }),
          h9 = hQ({
            prefix: "v",
            name: "base32hex",
            alphabet: "0123456789abcdefghijklmnopqrstuv",
            bitsPerChar: 5,
          }),
          h7 = hQ({
            prefix: "V",
            name: "base32hexupper",
            alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
            bitsPerChar: 5,
          }),
          ue = hQ({
            prefix: "t",
            name: "base32hexpad",
            alphabet: "0123456789abcdefghijklmnopqrstuv=",
            bitsPerChar: 5,
          });
        var ut = Object.freeze({
            __proto__: null,
            base32: h3,
            base32upper: h6,
            base32pad: h5,
            base32padupper: h4,
            base32hex: h9,
            base32hexupper: h7,
            base32hexpad: ue,
            base32hexpadupper: hQ({
              prefix: "T",
              name: "base32hexpadupper",
              alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
              bitsPerChar: 5,
            }),
            base32z: hQ({
              prefix: "h",
              name: "base32z",
              alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
              bitsPerChar: 5,
            }),
          }),
          ui = Object.freeze({
            __proto__: null,
            base36: hX({
              prefix: "k",
              name: "base36",
              alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
            }),
            base36upper: hX({
              prefix: "K",
              name: "base36upper",
              alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            }),
          }),
          ur = Object.freeze({
            __proto__: null,
            base58btc: hX({
              name: "base58btc",
              prefix: "z",
              alphabet:
                "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
            }),
            base58flickr: hX({
              name: "base58flickr",
              prefix: "Z",
              alphabet:
                "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
            }),
          });
        let us = hQ({
            prefix: "m",
            name: "base64",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            bitsPerChar: 6,
          }),
          un = hQ({
            prefix: "M",
            name: "base64pad",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            bitsPerChar: 6,
          });
        var uo = Object.freeze({
          __proto__: null,
          base64: us,
          base64pad: un,
          base64url: hQ({
            prefix: "u",
            name: "base64url",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
            bitsPerChar: 6,
          }),
          base64urlpad: hQ({
            prefix: "U",
            name: "base64urlpad",
            alphabet:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
            bitsPerChar: 6,
          }),
        });
        let ua = Array.from(
            "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
          ),
          uc = ua.reduce((e, t, i) => ((e[i] = t), e), []),
          ul = ua.reduce((e, t, i) => ((e[t.codePointAt(0)] = i), e), []);
        var uh = Object.freeze({
          __proto__: null,
          base256emoji: hZ({
            prefix: "🚀",
            name: "base256emoji",
            encode: function (e) {
              return e.reduce((e, t) => (e += uc[t]), "");
            },
            decode: function (e) {
              let t = [];
              for (let i of e) {
                let e = ul[i.codePointAt(0)];
                if (void 0 === e)
                  throw Error("Non-base256emoji character: ".concat(i));
                t.push(e);
              }
              return new Uint8Array(t);
            },
          }),
        });
        function uu(e, t, i) {
          (t = t || []), (i = i || 0);
          for (var r = i; e >= 0x80000000; )
            (t[i++] = (255 & e) | 128), (e /= 128);
          for (; -128 & e; ) (t[i++] = (255 & e) | 128), (e >>>= 7);
          return (t[i] = 0 | e), (uu.bytes = i - r + 1), t;
        }
        var ud = {
          encode: uu,
          encodingLength: function (e) {
            return e < 128
              ? 1
              : e < 16384
              ? 2
              : e < 2097152
              ? 3
              : e < 0x10000000
              ? 4
              : e < 0x800000000
              ? 5
              : e < 0x40000000000
              ? 6
              : e < 0x2000000000000
              ? 7
              : e < 0x100000000000000
              ? 8
              : e < 0x8000000000000000
              ? 9
              : 10;
          },
        };
        let uf = function (e, t) {
            let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
            return ud.encode(e, t, i), t;
          },
          up = (e) => ud.encodingLength(e),
          ug = (e, t) => {
            let i = t.byteLength,
              r = up(e),
              s = r + up(i),
              n = new Uint8Array(s + i);
            return uf(e, n, 0), uf(i, n, r), n.set(t, s), new uy(e, i, t, n);
          };
        class uy {
          constructor(e, t, i, r) {
            (this.code = e),
              (this.size = t),
              (this.digest = i),
              (this.bytes = r);
          }
        }
        let ub = (e) => {
          let { name: t, code: i, encode: r } = e;
          return new um(t, i, r);
        };
        class um {
          digest(e) {
            if (e instanceof Uint8Array) {
              let t = this.encode(e);
              return t instanceof Uint8Array
                ? ug(this.code, t)
                : t.then((e) => ug(this.code, e));
            }
            throw Error("Unknown type, must be binary type");
          }
          constructor(e, t, i) {
            (this.name = e), (this.code = t), (this.encode = i);
          }
        }
        let uv = (e) => async (t) =>
          new Uint8Array(await crypto.subtle.digest(e, t));
        var uw = Object.freeze({
            __proto__: null,
            sha256: ub({ name: "sha2-256", code: 18, encode: uv("SHA-256") }),
            sha512: ub({ name: "sha2-512", code: 19, encode: uv("SHA-512") }),
          }),
          uE = Object.freeze({
            __proto__: null,
            identity: {
              code: 0,
              name: "identity",
              encode: hV,
              digest: (e) => ug(0, hV(e)),
            },
          });
        new TextEncoder(), new TextDecoder();
        let ux = {
          ...h$,
          ...h0,
          ...h1,
          ...h2,
          ...h8,
          ...ut,
          ...ui,
          ...ur,
          ...uo,
          ...uh,
        };
        function uI(e) {
          return null != globalThis.Buffer
            ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
            : e;
        }
        function u_(e, t, i, r) {
          return {
            name: e,
            prefix: t,
            encoder: { name: e, prefix: t, encode: i },
            decoder: { decode: r },
          };
        }
        ({ ...uw, ...uE });
        let uD = u_(
            "utf8",
            "u",
            (e) => "u" + new TextDecoder("utf8").decode(e),
            (e) => new TextEncoder().encode(e.substring(1))
          ),
          uS = u_(
            "ascii",
            "a",
            (e) => {
              let t = "a";
              for (let i = 0; i < e.length; i++) t += String.fromCharCode(e[i]);
              return t;
            },
            (e) => {
              let t = (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0;
                return null != globalThis.Buffer &&
                  null != globalThis.Buffer.allocUnsafe
                  ? uI(globalThis.Buffer.allocUnsafe(e))
                  : new Uint8Array(e);
              })((e = e.substring(1)).length);
              for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
              return t;
            }
          ),
          uP = {
            utf8: uD,
            "utf-8": uD,
            hex: ux.base16,
            latin1: uS,
            ascii: uS,
            binary: uS,
            ...ux,
          };
        var uA = Object.defineProperty,
          uO = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? uA(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class uC {
          get context() {
            return (0, L.getLoggerContext)(this.logger);
          }
          get storageKey() {
            return (
              this.storagePrefix +
              this.version +
              this.core.customStoragePrefix +
              "//" +
              this.name
            );
          }
          async setKeyChain(e) {
            await this.core.storage.setItem(this.storageKey, nb(e));
          }
          async getKeyChain() {
            let e = await this.core.storage.getItem(this.storageKey);
            return "u" > typeof e ? nm(e) : void 0;
          }
          async persist() {
            await this.setKeyChain(this.keychain);
          }
          isInitialized() {
            if (!this.initialized) {
              let { message: e } = lT("NOT_INITIALIZED", this.name);
              throw Error(e);
            }
          }
          constructor(e, t) {
            (this.core = e),
              (this.logger = t),
              uO(this, "keychain", new Map()),
              uO(this, "name", "keychain"),
              uO(this, "version", "0.3"),
              uO(this, "initialized", !1),
              uO(this, "storagePrefix", hy),
              uO(this, "init", async () => {
                if (!this.initialized) {
                  let e = await this.getKeyChain();
                  "u" > typeof e && (this.keychain = e),
                    (this.initialized = !0);
                }
              }),
              uO(
                this,
                "has",
                (e) => (this.isInitialized(), this.keychain.has(e))
              ),
              uO(this, "set", async (e, t) => {
                this.isInitialized(),
                  this.keychain.set(e, t),
                  await this.persist();
              }),
              uO(this, "get", (e) => {
                this.isInitialized();
                let t = this.keychain.get(e);
                if (typeof t > "u") {
                  let { message: t } = lT(
                    "NO_MATCHING_KEY",
                    "".concat(this.name, ": ").concat(e)
                  );
                  throw Error(t);
                }
                return t;
              }),
              uO(this, "del", async (e) => {
                this.isInitialized(),
                  this.keychain.delete(e),
                  await this.persist();
              }),
              (this.core = e),
              (this.logger = (0, L.generateChildLogger)(t, this.name));
          }
        }
        var uT = Object.defineProperty,
          uN = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? uT(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class uU {
          get context() {
            return (0, L.getLoggerContext)(this.logger);
          }
          async setPrivateKey(e, t) {
            return await this.keychain.set(e, t), e;
          }
          getPrivateKey(e) {
            return this.keychain.get(e);
          }
          async getClientSeed() {
            let e = "";
            try {
              e = this.keychain.get(hv);
            } catch (t) {
              (e = c7()), await this.keychain.set(hv, e);
            }
            return (function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "utf8",
                i = uP[t];
              if (!i) throw Error('Unsupported encoding "'.concat(t, '"'));
              return ("utf8" === t || "utf-8" === t) &&
                null != globalThis.Buffer &&
                null != globalThis.Buffer.from
                ? uI(globalThis.Buffer.from(e, "utf-8"))
                : i.decoder.decode("".concat(i.prefix).concat(e));
            })(e, "base16");
          }
          getSymKey(e) {
            return this.keychain.get(e);
          }
          isInitialized() {
            if (!this.initialized) {
              let { message: e } = lT("NOT_INITIALIZED", this.name);
              throw Error(e);
            }
          }
          constructor(e, t, i) {
            (this.core = e),
              (this.logger = t),
              uN(this, "name", "crypto"),
              uN(this, "keychain"),
              uN(this, "randomSessionIdentifier", c7()),
              uN(this, "initialized", !1),
              uN(this, "init", async () => {
                this.initialized ||
                  (await this.keychain.init(), (this.initialized = !0));
              }),
              uN(
                this,
                "hasKeys",
                (e) => (this.isInitialized(), this.keychain.has(e))
              ),
              uN(
                this,
                "getClientId",
                async () => (
                  this.isInitialized(),
                  il(iu(await this.getClientSeed()).publicKey)
                )
              ),
              uN(this, "generateKeyPair", () => {
                this.isInitialized();
                let e = (function () {
                  let e = cM.utils.randomPrivateKey(),
                    t = cM.getPublicKey(e);
                  return { privateKey: s6(e, c6), publicKey: s6(t, c6) };
                })();
                return this.setPrivateKey(e.publicKey, e.privateKey);
              }),
              uN(this, "signJWT", async (e) => {
                this.isInitialized();
                let t = iu(await this.getClientSeed()),
                  i = this.randomSessionIdentifier;
                return await id(i, e, hw, t);
              }),
              uN(this, "generateSharedKey", (e, t, i) => {
                this.isInitialized();
                let r = (function (e, t) {
                  var i;
                  let r,
                    s = cM.getSharedSecret(s3(e, c6), s3(t, c6));
                  return s6(
                    ((r = void 0),
                    (function (e, t, i) {
                      let r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 32;
                      n0(e), nQ(r);
                      let s = e.outputLen;
                      if (r > 255 * s)
                        throw Error("Length should be <= 255*HashLen");
                      let n = Math.ceil(r / s);
                      void 0 === i && (i = aZ);
                      let o = new Uint8Array(n * s),
                        a = aY.create(e, t),
                        c = a._cloneInto(),
                        l = new Uint8Array(a.outputLen);
                      for (let e = 0; e < n; e++)
                        (aJ[0] = e + 1),
                          c
                            .update(0 === e ? aZ : l)
                            .update(i)
                            .update(aJ)
                            .digestInto(l),
                          o.set(l, s * e),
                          a._cloneInto(c);
                      return a.destroy(), c.destroy(), n3(l, aJ), o.slice(0, r);
                    })(
                      oV,
                      ((i = void 0),
                      n0(oV),
                      void 0 === i && (i = new Uint8Array(oV.outputLen)),
                      aY(oV, oa(i), oa(s))),
                      r,
                      32
                    )),
                    c6
                  );
                })(this.getPrivateKey(e), t);
                return this.setSymKey(r, i);
              }),
              uN(this, "setSymKey", async (e, t) => {
                this.isInitialized();
                let i = t || le(e);
                return await this.keychain.set(i, e), i;
              }),
              uN(this, "deleteKeyPair", async (e) => {
                this.isInitialized(), await this.keychain.del(e);
              }),
              uN(this, "deleteSymKey", async (e) => {
                this.isInitialized(), await this.keychain.del(e);
              }),
              uN(this, "encode", async (e, t, i) => {
                this.isInitialized();
                let r = lc(i),
                  s = (0, A.safeJsonStringify)(t);
                if (2 === r.type)
                  return (function (e, t) {
                    let i = li(2),
                      r = ou(12),
                      s = lo({ type: i, sealed: s3(e, c9), iv: r });
                    return t === c4 ? ls(s) : s;
                  })(s, null == i ? void 0 : i.encoding);
                if (ll(r)) {
                  let t = r.senderPublicKey,
                    i = r.receiverPublicKey;
                  e = await this.generateSharedKey(t, i);
                }
                let n = this.getSymKey(e),
                  { type: o, senderPublicKey: a } = r;
                return (function (e) {
                  let t = li("u" > typeof e.type ? e.type : 0);
                  if (1 === lr(t) && typeof e.senderPublicKey > "u")
                    throw Error(
                      "Missing sender public key for type 1 envelope"
                    );
                  let i =
                      "u" > typeof e.senderPublicKey
                        ? s3(e.senderPublicKey, c6)
                        : void 0,
                    r = "u" > typeof e.iv ? s3(e.iv, c6) : ou(12),
                    s = lo({
                      type: t,
                      sealed: aW(s3(e.symKey, c6), r).encrypt(
                        s3(e.message, c9)
                      ),
                      iv: r,
                      senderPublicKey: i,
                    });
                  return e.encoding === c4 ? ls(s) : s;
                })({
                  type: o,
                  symKey: n,
                  message: s,
                  senderPublicKey: a,
                  encoding: null == i ? void 0 : i.encoding,
                });
              }),
              uN(this, "decode", async (e, t, i) => {
                this.isInitialized();
                let r = (function (e, t) {
                  let i = la({
                    encoded: e,
                    encoding: null == t ? void 0 : t.encoding,
                  });
                  return lc({
                    type: lr(i.type),
                    senderPublicKey:
                      "u" > typeof i.senderPublicKey
                        ? s6(i.senderPublicKey, c6)
                        : void 0,
                    receiverPublicKey: null == t ? void 0 : t.receiverPublicKey,
                  });
                })(t, i);
                if (2 === r.type) {
                  let e = (function (e, t) {
                    let { sealed: i } = la({ encoded: e, encoding: t });
                    return s6(i, c9);
                  })(t, null == i ? void 0 : i.encoding);
                  return (0, A.safeJsonParse)(e);
                }
                if (ll(r)) {
                  let t = r.receiverPublicKey,
                    i = r.senderPublicKey;
                  e = await this.generateSharedKey(t, i);
                }
                try {
                  let r = this.getSymKey(e),
                    s = (function (e) {
                      let t = s3(e.symKey, c6),
                        { sealed: i, iv: r } = la({
                          encoded: e.encoded,
                          encoding: e.encoding,
                        }),
                        s = aW(t, r).decrypt(i);
                      if (null === s) throw Error("Failed to decrypt");
                      return s6(s, c9);
                    })({
                      symKey: r,
                      encoded: t,
                      encoding: null == i ? void 0 : i.encoding,
                    });
                  return (0, A.safeJsonParse)(s);
                } catch (t) {
                  this.logger.error(
                    "Failed to decode message from topic: '"
                      .concat(e, "', clientId: '")
                      .concat(await this.getClientId(), "'")
                  ),
                    this.logger.error(t);
                }
              }),
              uN(this, "getPayloadType", function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : c5;
                return lr(la({ encoded: e, encoding: t }).type);
              }),
              uN(this, "getPayloadSenderPublicKey", function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : c5,
                  i = la({ encoded: e, encoding: t });
                return i.senderPublicKey ? s6(i.senderPublicKey, c6) : void 0;
              }),
              (this.core = e),
              (this.logger = (0, L.generateChildLogger)(t, this.name)),
              (this.keychain = i || new uC(this.core, this.logger));
          }
        }
        var uR = Object.defineProperty,
          uB = Object.defineProperties,
          uk = Object.getOwnPropertyDescriptors,
          uj = Object.getOwnPropertySymbols,
          uL = Object.prototype.hasOwnProperty,
          uq = Object.prototype.propertyIsEnumerable,
          uM = (e, t, i) =>
            t in e
              ? uR(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          uz = (e, t, i) => uM(e, "symbol" != typeof t ? t + "" : t, i);
        class uF extends K {
          get context() {
            return (0, L.getLoggerContext)(this.logger);
          }
          get storageKey() {
            return (
              this.storagePrefix +
              this.version +
              this.core.customStoragePrefix +
              "//" +
              this.name
            );
          }
          get storageKeyWithoutClientAck() {
            return (
              this.storagePrefix +
              this.version +
              this.core.customStoragePrefix +
              "//" +
              this.name +
              "_withoutClientAck"
            );
          }
          async setRelayerMessages(e) {
            await this.core.storage.setItem(this.storageKey, nb(e));
          }
          async setRelayerMessagesWithoutClientAck(e) {
            await this.core.storage.setItem(
              this.storageKeyWithoutClientAck,
              nb(e)
            );
          }
          async getRelayerMessages() {
            let e = await this.core.storage.getItem(this.storageKey);
            return "u" > typeof e ? nm(e) : void 0;
          }
          async getRelayerMessagesWithoutClientAck() {
            let e = await this.core.storage.getItem(
              this.storageKeyWithoutClientAck
            );
            return "u" > typeof e ? nm(e) : void 0;
          }
          async persist() {
            await this.setRelayerMessages(this.messages),
              await this.setRelayerMessagesWithoutClientAck(
                this.messagesWithoutClientAck
              );
          }
          isInitialized() {
            if (!this.initialized) {
              let { message: e } = lT("NOT_INITIALIZED", this.name);
              throw Error(e);
            }
          }
          constructor(e, t) {
            super(e, t),
              (this.logger = e),
              (this.core = t),
              uz(this, "messages", new Map()),
              uz(this, "messagesWithoutClientAck", new Map()),
              uz(this, "name", "messages"),
              uz(this, "version", "0.3"),
              uz(this, "initialized", !1),
              uz(this, "storagePrefix", hy),
              uz(this, "init", async () => {
                if (!this.initialized) {
                  this.logger.trace("Initialized");
                  try {
                    let e = await this.getRelayerMessages();
                    "u" > typeof e && (this.messages = e);
                    let t = await this.getRelayerMessagesWithoutClientAck();
                    "u" > typeof t && (this.messagesWithoutClientAck = t),
                      this.logger.debug(
                        "Successfully Restored records for ".concat(this.name)
                      ),
                      this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size,
                      });
                  } catch (e) {
                    this.logger.debug(
                      "Failed to Restore records for ".concat(this.name)
                    ),
                      this.logger.error(e);
                  } finally {
                    this.initialized = !0;
                  }
                }
              }),
              uz(this, "set", async (e, t, i) => {
                this.isInitialized();
                let r = lt(t),
                  s = this.messages.get(e);
                if ((typeof s > "u" && (s = {}), "u" > typeof s[r])) return r;
                if (((s[r] = t), this.messages.set(e, s), i === hP.inbound)) {
                  let i = this.messagesWithoutClientAck.get(e) || {};
                  this.messagesWithoutClientAck.set(
                    e,
                    uB(
                      ((e, t) => {
                        for (var i in t || (t = {}))
                          uL.call(t, i) && uM(e, i, t[i]);
                        if (uj)
                          for (var i of uj(t)) uq.call(t, i) && uM(e, i, t[i]);
                        return e;
                      })({}, i),
                      uk({ [r]: t })
                    )
                  );
                }
                return await this.persist(), r;
              }),
              uz(this, "get", (e) => {
                this.isInitialized();
                let t = this.messages.get(e);
                return typeof t > "u" && (t = {}), t;
              }),
              uz(this, "getWithoutAck", (e) => {
                this.isInitialized();
                let t = {};
                for (let i of e) {
                  let e = this.messagesWithoutClientAck.get(i) || {};
                  t[i] = Object.values(e);
                }
                return t;
              }),
              uz(
                this,
                "has",
                (e, t) => (
                  this.isInitialized(), "u" > typeof this.get(e)[lt(t)]
                )
              ),
              uz(this, "ack", async (e, t) => {
                this.isInitialized();
                let i = this.messagesWithoutClientAck.get(e);
                if (typeof i > "u") return;
                let r = lt(t);
                delete i[r],
                  0 === Object.keys(i).length
                    ? this.messagesWithoutClientAck.delete(e)
                    : this.messagesWithoutClientAck.set(e, i),
                  await this.persist();
              }),
              uz(this, "del", async (e) => {
                this.isInitialized(),
                  this.messages.delete(e),
                  this.messagesWithoutClientAck.delete(e),
                  await this.persist();
              }),
              (this.logger = (0, L.generateChildLogger)(e, this.name)),
              (this.core = t);
          }
        }
        var uH = Object.defineProperty,
          uV = Object.defineProperties,
          uK = Object.getOwnPropertyDescriptors,
          uW = Object.getOwnPropertySymbols,
          uG = Object.prototype.hasOwnProperty,
          uY = Object.prototype.propertyIsEnumerable,
          uJ = (e, t, i) =>
            t in e
              ? uH(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          uZ = (e, t) => {
            for (var i in t || (t = {})) uG.call(t, i) && uJ(e, i, t[i]);
            if (uW) for (var i of uW(t)) uY.call(t, i) && uJ(e, i, t[i]);
            return e;
          },
          uX = (e, t) => uV(e, uK(t)),
          uQ = (e, t, i) => uJ(e, "symbol" != typeof t ? t + "" : t, i);
        class u$ extends W {
          get context() {
            return (0, L.getLoggerContext)(this.logger);
          }
          async rpcPublish(e) {
            var t, i, r, s;
            let {
                topic: n,
                message: o,
                ttl: a = hE,
                prompt: c,
                tag: l,
                id: h,
                attestation: u,
                tvf: d,
              } = e,
              f = {
                method: lu(lh().protocol).publish,
                params: uZ(
                  {
                    topic: n,
                    message: o,
                    ttl: a,
                    prompt: c,
                    tag: l,
                    attestation: u,
                  },
                  d
                ),
                id: h,
              };
            lB(null == (t = f.params) ? void 0 : t.prompt) &&
              (null == (i = f.params) || delete i.prompt),
              lB(null == (r = f.params) ? void 0 : r.tag) &&
                (null == (s = f.params) || delete s.tag),
              this.logger.debug("Outgoing Relay Payload"),
              this.logger.trace({
                type: "message",
                direction: "outgoing",
                request: f,
              });
            let p = await this.relayer.request(f);
            return (
              this.relayer.events.emit(hI.publish, e),
              this.logger.debug("Successfully Published Payload"),
              p
            );
          }
          removeRequestFromQueue(e) {
            this.queue.delete(e);
          }
          checkQueue() {
            this.queue.forEach(async (e, t) => {
              let i = e.attempt + 1;
              this.queue.set(t, uX(uZ({}, e), { attempt: i }));
              let { topic: r, message: s, opts: n, attestation: o } = e;
              this.logger.warn(
                {},
                "Publisher: queue->publishing: "
                  .concat(e.opts.id, ", tag: ")
                  .concat(e.opts.tag, ", attempt: ")
                  .concat(i)
              ),
                await this.rpcPublish(
                  uX(uZ({}, e), {
                    topic: r,
                    message: s,
                    ttl: n.ttl,
                    prompt: n.prompt,
                    tag: n.tag,
                    id: n.id,
                    attestation: o,
                    tvf: n.tvf,
                  })
                ),
                this.logger.warn(
                  {},
                  "Publisher: queue->published: ".concat(e.opts.id)
                );
            });
          }
          registerEventListeners() {
            this.relayer.core.heartbeat.on(h.pulse, () => {
              if (this.needsTransportRestart) {
                (this.needsTransportRestart = !1),
                  this.relayer.events.emit(hI.connection_stalled);
                return;
              }
              this.checkQueue();
            }),
              this.relayer.on(hI.message_ack, (e) => {
                this.removeRequestFromQueue(e.id.toString());
              });
          }
          constructor(e, t) {
            super(e, t),
              (this.relayer = e),
              (this.logger = t),
              uQ(this, "events", new n.EventEmitter()),
              uQ(this, "name", "publisher"),
              uQ(this, "queue", new Map()),
              uQ(this, "publishTimeout", (0, o.toMiliseconds)(o.ONE_MINUTE)),
              uQ(
                this,
                "initialPublishTimeout",
                (0, o.toMiliseconds)(15 * o.ONE_SECOND)
              ),
              uQ(this, "needsTransportRestart", !1),
              uQ(this, "publish", async (e, t, i) => {
                var r;
                this.logger.debug("Publishing Payload"),
                  this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: { topic: e, message: t, opts: i },
                  });
                let s = (null == i ? void 0 : i.ttl) || hE,
                  n = lh(i),
                  o = (null == i ? void 0 : i.prompt) || !1,
                  a = (null == i ? void 0 : i.tag) || 0,
                  c = (null == i ? void 0 : i.id) || l5().toString(),
                  l = {
                    topic: e,
                    message: t,
                    opts: {
                      ttl: s,
                      relay: n,
                      prompt: o,
                      tag: a,
                      id: c,
                      attestation: null == i ? void 0 : i.attestation,
                      tvf: null == i ? void 0 : i.tvf,
                    },
                  },
                  h = "Failed to publish payload, please try again. id:"
                    .concat(c, " tag:")
                    .concat(a);
                try {
                  let r = new Promise(async (r) => {
                    let n = (e) => {
                      let { id: t } = e;
                      l.opts.id === t &&
                        (this.removeRequestFromQueue(t),
                        this.relayer.events.removeListener(hI.publish, n),
                        r(l));
                    };
                    this.relayer.events.on(hI.publish, n);
                    let h = nw(
                      new Promise((r, n) => {
                        this.rpcPublish({
                          topic: e,
                          message: t,
                          ttl: s,
                          prompt: o,
                          tag: a,
                          id: c,
                          attestation: null == i ? void 0 : i.attestation,
                          tvf: null == i ? void 0 : i.tvf,
                        })
                          .then(r)
                          .catch((e) => {
                            this.logger.warn(e, null == e ? void 0 : e.message),
                              n(e);
                          });
                      }),
                      this.initialPublishTimeout,
                      "Failed initial publish, retrying.... id:"
                        .concat(c, " tag:")
                        .concat(a)
                    );
                    try {
                      await h, this.events.removeListener(hI.publish, n);
                    } catch (e) {
                      this.queue.set(c, uX(uZ({}, l), { attempt: 1 })),
                        this.logger.warn(e, null == e ? void 0 : e.message);
                    }
                  });
                  this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: { id: c, topic: e, message: t, opts: i },
                  }),
                    await nw(r, this.publishTimeout, h);
                } catch (e) {
                  if (
                    (this.logger.debug("Failed to Publish Payload"),
                    this.logger.error(e),
                    null != (r = null == i ? void 0 : i.internal) &&
                      r.throwOnFailedPublish)
                  )
                    throw e;
                } finally {
                  this.queue.delete(c);
                }
              }),
              uQ(this, "on", (e, t) => {
                this.events.on(e, t);
              }),
              uQ(this, "once", (e, t) => {
                this.events.once(e, t);
              }),
              uQ(this, "off", (e, t) => {
                this.events.off(e, t);
              }),
              uQ(this, "removeListener", (e, t) => {
                this.events.removeListener(e, t);
              }),
              (this.relayer = e),
              (this.logger = (0, L.generateChildLogger)(t, this.name)),
              this.registerEventListeners();
          }
        }
        var u0 = Object.defineProperty,
          u1 = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? u0(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class u2 {
          get topics() {
            return Array.from(this.map.keys());
          }
          constructor() {
            u1(this, "map", new Map()),
              u1(this, "set", (e, t) => {
                let i = this.get(e);
                this.exists(e, t) || this.map.set(e, [...i, t]);
              }),
              u1(this, "get", (e) => this.map.get(e) || []),
              u1(this, "exists", (e, t) => this.get(e).includes(t)),
              u1(this, "delete", (e, t) => {
                if (typeof t > "u") return void this.map.delete(e);
                if (!this.map.has(e)) return;
                let i = this.get(e);
                if (!this.exists(e, t)) return;
                let r = i.filter((e) => e !== t);
                if (!r.length) return void this.map.delete(e);
                this.map.set(e, r);
              }),
              u1(this, "clear", () => {
                this.map.clear();
              });
          }
        }
        var u8 = Object.defineProperty,
          u3 = Object.defineProperties,
          u6 = Object.getOwnPropertyDescriptors,
          u5 = Object.getOwnPropertySymbols,
          u4 = Object.prototype.hasOwnProperty,
          u9 = Object.prototype.propertyIsEnumerable,
          u7 = (e, t, i) =>
            t in e
              ? u8(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          de = (e, t) => {
            for (var i in t || (t = {})) u4.call(t, i) && u7(e, i, t[i]);
            if (u5) for (var i of u5(t)) u9.call(t, i) && u7(e, i, t[i]);
            return e;
          },
          dt = (e, t) => u3(e, u6(t)),
          di = (e, t, i) => u7(e, "symbol" != typeof t ? t + "" : t, i);
        class dr extends J {
          get context() {
            return (0, L.getLoggerContext)(this.logger);
          }
          get storageKey() {
            return (
              this.storagePrefix +
              this.version +
              this.relayer.core.customStoragePrefix +
              "//" +
              this.name
            );
          }
          get length() {
            return this.subscriptions.size;
          }
          get ids() {
            return Array.from(this.subscriptions.keys());
          }
          get values() {
            return Array.from(this.subscriptions.values());
          }
          get topics() {
            return this.topicMap.topics;
          }
          get hasAnyTopics() {
            return (
              this.topicMap.topics.length > 0 ||
              this.pending.size > 0 ||
              this.cached.length > 0 ||
              this.subscriptions.size > 0
            );
          }
          hasSubscription(e, t) {
            let i = !1;
            try {
              i = this.getSubscription(e).topic === t;
            } catch (e) {}
            return i;
          }
          reset() {
            (this.cached = []), (this.initialized = !0);
          }
          onDisable() {
            this.values.length > 0 && (this.cached = this.values),
              this.subscriptions.clear(),
              this.topicMap.clear();
          }
          async unsubscribeByTopic(e, t) {
            let i = this.topicMap.get(e);
            await Promise.all(
              i.map(async (i) => await this.unsubscribeById(e, i, t))
            );
          }
          async unsubscribeById(e, t, i) {
            this.logger.debug("Unsubscribing Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: e, id: t, opts: i },
              });
            try {
              let r = lh(i);
              await this.restartToComplete({ topic: e, id: t, relay: r }),
                await this.rpcUnsubscribe(e, t, r);
              let s = lN(
                "USER_DISCONNECTED",
                "".concat(this.name, ", ").concat(e)
              );
              await this.onUnsubscribe(e, t, s),
                this.logger.debug("Successfully Unsubscribed Topic"),
                this.logger.trace({
                  type: "method",
                  method: "unsubscribe",
                  params: { topic: e, id: t, opts: i },
                });
            } catch (e) {
              throw (
                (this.logger.debug("Failed to Unsubscribe Topic"),
                this.logger.error(e),
                e)
              );
            }
          }
          async rpcSubscribe(e, t, i) {
            var r;
            (i && (null == i ? void 0 : i.transportType) !== hS.relay) ||
              (await this.restartToComplete({ topic: e, id: e, relay: t }));
            let s = { method: lu(t.protocol).subscribe, params: { topic: e } };
            this.logger.debug("Outgoing Relay Payload"),
              this.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: s,
              });
            let n =
              null == (r = null == i ? void 0 : i.internal)
                ? void 0
                : r.throwOnFailedPublish;
            try {
              let t = await this.getSubscriptionId(e);
              if ((null == i ? void 0 : i.transportType) === hS.link_mode)
                return (
                  setTimeout(() => {
                    (this.relayer.connected || this.relayer.connecting) &&
                      this.relayer.request(s).catch((e) => this.logger.warn(e));
                  }, (0, o.toMiliseconds)(o.ONE_SECOND)),
                  t
                );
              let r = new Promise(async (t) => {
                  let i = (r) => {
                    r.topic === e &&
                      (this.events.removeListener(hO.created, i), t(r.id));
                  };
                  this.events.on(hO.created, i);
                  try {
                    let r = await nw(
                      new Promise((e, t) => {
                        this.relayer
                          .request(s)
                          .catch((e) => {
                            this.logger.warn(e, null == e ? void 0 : e.message),
                              t(e);
                          })
                          .then(e);
                      }),
                      this.initialSubscribeTimeout,
                      "Subscribing to ".concat(e, " failed, please try again")
                    );
                    this.events.removeListener(hO.created, i), t(r);
                  } catch (e) {}
                }),
                a = await nw(
                  r,
                  this.subscribeTimeout,
                  "Subscribing to ".concat(e, " failed, please try again")
                );
              if (!a && n)
                throw Error(
                  "Subscribing to ".concat(e, " failed, please try again")
                );
              return a ? t : null;
            } catch (e) {
              if (
                (this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
                this.relayer.events.emit(hI.connection_stalled),
                n)
              )
                throw e;
            }
            return null;
          }
          async rpcBatchSubscribe(e) {
            if (!e.length) return;
            let t = {
              method: lu(e[0].relay.protocol).batchSubscribe,
              params: { topics: e.map((e) => e.topic) },
            };
            this.logger.debug("Outgoing Relay Payload"),
              this.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: t,
              });
            try {
              await await nw(
                new Promise((e) => {
                  this.relayer
                    .request(t)
                    .catch((e) => this.logger.warn(e))
                    .then(e);
                }),
                this.subscribeTimeout,
                "rpcBatchSubscribe failed, please try again"
              );
            } catch (e) {
              this.relayer.events.emit(hI.connection_stalled);
            }
          }
          async rpcBatchFetchMessages(e) {
            let t;
            if (!e.length) return;
            let i = {
              method: lu(e[0].relay.protocol).batchFetchMessages,
              params: { topics: e.map((e) => e.topic) },
            };
            this.logger.debug("Outgoing Relay Payload"),
              this.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: i,
              });
            try {
              t = await await nw(
                new Promise((e, t) => {
                  this.relayer
                    .request(i)
                    .catch((e) => {
                      this.logger.warn(e), t(e);
                    })
                    .then(e);
                }),
                this.subscribeTimeout,
                "rpcBatchFetchMessages failed, please try again"
              );
            } catch (e) {
              this.relayer.events.emit(hI.connection_stalled);
            }
            return t;
          }
          rpcUnsubscribe(e, t, i) {
            let r = {
              method: lu(i.protocol).unsubscribe,
              params: { topic: e, id: t },
            };
            return (
              this.logger.debug("Outgoing Relay Payload"),
              this.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: r,
              }),
              this.relayer.request(r)
            );
          }
          onSubscribe(e, t) {
            this.setSubscription(e, dt(de({}, t), { id: e })),
              this.pending.delete(t.topic);
          }
          onBatchSubscribe(e) {
            e.length &&
              e.forEach((e) => {
                this.setSubscription(e.id, de({}, e)),
                  this.pending.delete(e.topic);
              });
          }
          async onUnsubscribe(e, t, i) {
            this.events.removeAllListeners(t),
              this.hasSubscription(t, e) && this.deleteSubscription(t, i),
              await this.relayer.messages.del(e);
          }
          async setRelayerSubscriptions(e) {
            await this.relayer.core.storage.setItem(this.storageKey, e);
          }
          async getRelayerSubscriptions() {
            return await this.relayer.core.storage.getItem(this.storageKey);
          }
          setSubscription(e, t) {
            this.logger.debug("Setting subscription"),
              this.logger.trace({
                type: "method",
                method: "setSubscription",
                id: e,
                subscription: t,
              }),
              this.addSubscription(e, t);
          }
          addSubscription(e, t) {
            this.subscriptions.set(e, de({}, t)),
              this.topicMap.set(t.topic, e),
              this.events.emit(hO.created, t);
          }
          getSubscription(e) {
            this.logger.debug("Getting subscription"),
              this.logger.trace({
                type: "method",
                method: "getSubscription",
                id: e,
              });
            let t = this.subscriptions.get(e);
            if (!t) {
              let { message: t } = lT(
                "NO_MATCHING_KEY",
                "".concat(this.name, ": ").concat(e)
              );
              throw Error(t);
            }
            return t;
          }
          deleteSubscription(e, t) {
            this.logger.debug("Deleting subscription"),
              this.logger.trace({
                type: "method",
                method: "deleteSubscription",
                id: e,
                reason: t,
              });
            let i = this.getSubscription(e);
            this.subscriptions.delete(e),
              this.topicMap.delete(i.topic, e),
              this.events.emit(hO.deleted, dt(de({}, i), { reason: t }));
          }
          async persist() {
            await this.setRelayerSubscriptions(this.values),
              this.events.emit(hO.sync);
          }
          async onRestart() {
            if (this.cached.length) {
              let e = [...this.cached],
                t = Math.ceil(
                  this.cached.length / this.batchSubscribeTopicsLimit
                );
              for (let i = 0; i < t; i++) {
                let t = e.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchSubscribe(t);
              }
            }
            this.events.emit(hO.resubscribed);
          }
          async restore() {
            try {
              let e = await this.getRelayerSubscriptions();
              if (typeof e > "u" || !e.length) return;
              if (this.subscriptions.size) {
                let { message: e } = lT("RESTORE_WILL_OVERRIDE", this.name);
                throw (
                  (this.logger.error(e),
                  this.logger.error(
                    ""
                      .concat(this.name, ": ")
                      .concat(JSON.stringify(this.values))
                  ),
                  Error(e))
                );
              }
              (this.cached = e),
                this.logger.debug(
                  "Successfully Restored subscriptions for ".concat(this.name)
                ),
                this.logger.trace({
                  type: "method",
                  method: "restore",
                  subscriptions: this.values,
                });
            } catch (e) {
              this.logger.debug(
                "Failed to Restore subscriptions for ".concat(this.name)
              ),
                this.logger.error(e);
            }
          }
          async batchSubscribe(e) {
            e.length &&
              (await this.rpcBatchSubscribe(e),
              this.onBatchSubscribe(
                await Promise.all(
                  e.map(async (e) =>
                    dt(de({}, e), { id: await this.getSubscriptionId(e.topic) })
                  )
                )
              ));
          }
          async batchFetchMessages(e) {
            var t;
            if (!e.length) return;
            this.logger.trace(
              "Fetching batch messages for ".concat(e.length, " subscriptions")
            );
            let i = await this.rpcBatchFetchMessages(e);
            i &&
              i.messages &&
              (await ((t = (0, o.toMiliseconds)(o.ONE_SECOND)),
              new Promise((e) => setTimeout(e, t))),
              await this.relayer.handleBatchMessageEvents(i.messages));
          }
          async onConnect() {
            await this.restart(), this.reset();
          }
          onDisconnect() {
            this.onDisable();
          }
          isInitialized() {
            if (!this.initialized) {
              let { message: e } = lT("NOT_INITIALIZED", this.name);
              throw Error(e);
            }
          }
          async restartToComplete(e) {
            this.relayer.connected ||
              this.relayer.connecting ||
              (this.cached.push(e), await this.relayer.transportOpen());
          }
          async getClientId() {
            return (
              this.clientId ||
                (this.clientId = await this.relayer.core.crypto.getClientId()),
              this.clientId
            );
          }
          async getSubscriptionId(e) {
            return lt(e + (await this.getClientId()));
          }
          constructor(e, t) {
            super(e, t),
              (this.relayer = e),
              (this.logger = t),
              di(this, "subscriptions", new Map()),
              di(this, "topicMap", new u2()),
              di(this, "events", new n.EventEmitter()),
              di(this, "name", "subscription"),
              di(this, "version", "0.3"),
              di(this, "pending", new Map()),
              di(this, "cached", []),
              di(this, "initialized", !1),
              di(this, "storagePrefix", hy),
              di(this, "subscribeTimeout", (0, o.toMiliseconds)(o.ONE_MINUTE)),
              di(
                this,
                "initialSubscribeTimeout",
                (0, o.toMiliseconds)(15 * o.ONE_SECOND)
              ),
              di(this, "clientId"),
              di(this, "batchSubscribeTopicsLimit", 500),
              di(this, "init", async () => {
                this.initialized ||
                  (this.logger.trace("Initialized"),
                  this.registerEventListeners(),
                  await this.restore()),
                  (this.initialized = !0);
              }),
              di(this, "subscribe", async (e, t) => {
                this.isInitialized(),
                  this.logger.debug("Subscribing Topic"),
                  this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: { topic: e, opts: t },
                  });
                try {
                  let i = lh(t),
                    r = {
                      topic: e,
                      relay: i,
                      transportType: null == t ? void 0 : t.transportType,
                    };
                  this.pending.set(e, r);
                  let s = await this.rpcSubscribe(e, i, t);
                  return (
                    "string" == typeof s &&
                      (this.onSubscribe(s, r),
                      this.logger.debug("Successfully Subscribed Topic"),
                      this.logger.trace({
                        type: "method",
                        method: "subscribe",
                        params: { topic: e, opts: t },
                      })),
                    s
                  );
                } catch (e) {
                  throw (
                    (this.logger.debug("Failed to Subscribe Topic"),
                    this.logger.error(e),
                    e)
                  );
                }
              }),
              di(this, "unsubscribe", async (e, t) => {
                this.isInitialized(),
                  "u" > typeof (null == t ? void 0 : t.id)
                    ? await this.unsubscribeById(e, t.id, t)
                    : await this.unsubscribeByTopic(e, t);
              }),
              di(
                this,
                "isSubscribed",
                (e) =>
                  new Promise((t) => {
                    t(this.topicMap.topics.includes(e));
                  })
              ),
              di(
                this,
                "isKnownTopic",
                (e) =>
                  new Promise((t) => {
                    t(
                      this.topicMap.topics.includes(e) ||
                        this.pending.has(e) ||
                        this.cached.some((t) => t.topic === e)
                    );
                  })
              ),
              di(this, "on", (e, t) => {
                this.events.on(e, t);
              }),
              di(this, "once", (e, t) => {
                this.events.once(e, t);
              }),
              di(this, "off", (e, t) => {
                this.events.off(e, t);
              }),
              di(this, "removeListener", (e, t) => {
                this.events.removeListener(e, t);
              }),
              di(this, "start", async () => {
                await this.onConnect();
              }),
              di(this, "stop", async () => {
                await this.onDisconnect();
              }),
              di(this, "restart", async () => {
                await this.restore(), await this.onRestart();
              }),
              di(this, "checkPending", async () => {
                if (
                  0 === this.pending.size &&
                  (!this.initialized || !this.relayer.connected)
                )
                  return;
                let e = [];
                this.pending.forEach((t) => {
                  e.push(t);
                }),
                  await this.batchSubscribe(e);
              }),
              di(this, "registerEventListeners", () => {
                this.relayer.core.heartbeat.on(h.pulse, async () => {
                  await this.checkPending();
                }),
                  this.events.on(hO.created, async (e) => {
                    let t = hO.created;
                    this.logger.info("Emitting ".concat(t)),
                      this.logger.debug({ type: "event", event: t, data: e }),
                      await this.persist();
                  }),
                  this.events.on(hO.deleted, async (e) => {
                    let t = hO.deleted;
                    this.logger.info("Emitting ".concat(t)),
                      this.logger.debug({ type: "event", event: t, data: e }),
                      await this.persist();
                  });
              }),
              (this.relayer = e),
              (this.logger = (0, L.generateChildLogger)(t, this.name)),
              (this.clientId = "");
          }
        }
        var ds = Object.defineProperty,
          dn = Object.getOwnPropertySymbols,
          da = Object.prototype.hasOwnProperty,
          dc = Object.prototype.propertyIsEnumerable,
          dl = (e, t, i) =>
            t in e
              ? ds(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          dh = (e, t) => {
            for (var i in t || (t = {})) da.call(t, i) && dl(e, i, t[i]);
            if (dn) for (var i of dn(t)) dc.call(t, i) && dl(e, i, t[i]);
            return e;
          },
          du = (e, t, i) => dl(e, "symbol" != typeof t ? t + "" : t, i);
        class dd extends G {
          async init() {
            this.logger.trace("Initialized"),
              this.registerEventListeners(),
              await Promise.all([this.messages.init(), this.subscriber.init()]),
              (this.initialized = !0),
              this.transportOpen().catch((e) =>
                this.logger.warn(e, null == e ? void 0 : e.message)
              );
          }
          get context() {
            return (0, L.getLoggerContext)(this.logger);
          }
          get connected() {
            var e, t, i;
            return (
              (null ==
              (i =
                null ==
                (t = null == (e = this.provider) ? void 0 : e.connection)
                  ? void 0
                  : t.socket)
                ? void 0
                : i.readyState) === 1
            );
          }
          get connecting() {
            var e, t, i;
            return (
              (null ==
              (i =
                null ==
                (t = null == (e = this.provider) ? void 0 : e.connection)
                  ? void 0
                  : t.socket)
                ? void 0
                : i.readyState) === 0 || void 0 !== this.connectPromise
            );
          }
          async publish(e, t, i) {
            this.isInitialized(),
              await this.publisher.publish(e, t, i),
              await this.recordMessageEvent(
                {
                  topic: e,
                  message: t,
                  publishedAt: Date.now(),
                  transportType: hS.relay,
                },
                hP.outbound
              );
          }
          async subscribe(e, t) {
            var i, r, s;
            this.isInitialized(),
              (null != t &&
                t.transportType &&
                (null == t ? void 0 : t.transportType) !== "relay") ||
                (await this.toEstablishConnection());
            let n =
                typeof (null == (i = null == t ? void 0 : t.internal)
                  ? void 0
                  : i.throwOnFailedPublish) > "u" ||
                (null == (r = null == t ? void 0 : t.internal)
                  ? void 0
                  : r.throwOnFailedPublish),
              o =
                (null == (s = this.subscriber.topicMap.get(e))
                  ? void 0
                  : s[0]) || "",
              a,
              c = (t) => {
                t.topic === e && (this.subscriber.off(hO.created, c), a());
              };
            return (
              await Promise.all([
                new Promise((e) => {
                  (a = e), this.subscriber.on(hO.created, c);
                }),
                new Promise(async (i, r) => {
                  (o =
                    (await this.subscriber
                      .subscribe(
                        e,
                        dh({ internal: { throwOnFailedPublish: n } }, t)
                      )
                      .catch((e) => {
                        n && r(e);
                      })) || o),
                    i();
                }),
              ]),
              o
            );
          }
          async unsubscribe(e, t) {
            this.isInitialized(), await this.subscriber.unsubscribe(e, t);
          }
          on(e, t) {
            this.events.on(e, t);
          }
          once(e, t) {
            this.events.once(e, t);
          }
          off(e, t) {
            this.events.off(e, t);
          }
          removeListener(e, t) {
            this.events.removeListener(e, t);
          }
          async transportDisconnect() {
            this.provider.disconnect &&
            (this.hasExperiencedNetworkDisruption || this.connected)
              ? await nw(
                  this.provider.disconnect(),
                  2e3,
                  "provider.disconnect()"
                ).catch(() => this.onProviderDisconnect())
              : this.onProviderDisconnect();
          }
          async transportClose() {
            (this.transportExplicitlyClosed = !0),
              await this.transportDisconnect();
          }
          async transportOpen(e) {
            if (!this.subscriber.hasAnyTopics)
              return void this.logger.warn(
                "Starting WS connection skipped because the client has no topics to work with."
              );
            if (
              (this.connectPromise
                ? (this.logger.debug(
                    {},
                    "Waiting for existing connection attempt to resolve..."
                  ),
                  await this.connectPromise,
                  this.logger.debug({}, "Existing connection attempt resolved"))
                : ((this.connectPromise = new Promise(async (t, i) => {
                    await this.connect(e)
                      .then(t)
                      .catch(i)
                      .finally(() => {
                        this.connectPromise = void 0;
                      });
                  })),
                  await this.connectPromise),
              !this.connected)
            )
              throw Error(
                "Couldn't establish socket connection to the relay server: ".concat(
                  this.relayUrl
                )
              );
          }
          async restartTransport(e) {
            this.logger.debug({}, "Restarting transport..."),
              this.connectionAttemptInProgress ||
                ((this.relayUrl = e || this.relayUrl),
                await this.confirmOnlineStateOrThrow(),
                await this.transportClose(),
                await this.transportOpen());
          }
          async confirmOnlineStateOrThrow() {
            if (!(await lG()))
              throw Error(
                "No internet connection detected. Please restart your network and try again."
              );
          }
          async handleBatchMessageEvents(e) {
            if ((null == e ? void 0 : e.length) === 0)
              return void this.logger.trace(
                "Batch message events is empty. Ignoring..."
              );
            let t = e.sort((e, t) => e.publishedAt - t.publishedAt);
            for (let e of (this.logger.debug(
              "Batch of ".concat(t.length, " message events sorted")
            ),
            t))
              try {
                await this.onMessageEvent(e);
              } catch (e) {
                this.logger.warn(
                  e,
                  "Error while processing batch message event: " +
                    (null == e ? void 0 : e.message)
                );
              }
            this.logger.trace(
              "Batch of ".concat(t.length, " message events processed")
            );
          }
          async onLinkMessageEvent(e, t) {
            let { topic: i } = e;
            if (!t.sessionExists) {
              let e = nI(o.FIVE_MINUTES);
              await this.core.pairing.pairings.set(i, {
                topic: i,
                expiry: e,
                relay: { protocol: "irn" },
                active: !1,
              });
            }
            this.events.emit(hI.message, e),
              await this.recordMessageEvent(e, hP.inbound);
          }
          async connect(e) {
            await this.confirmOnlineStateOrThrow(),
              e &&
                e !== this.relayUrl &&
                ((this.relayUrl = e), await this.transportDisconnect()),
              (this.connectionAttemptInProgress = !0),
              (this.transportExplicitlyClosed = !1);
            let t = 1;
            for (; t < 6; ) {
              try {
                if (this.transportExplicitlyClosed) break;
                this.logger.debug(
                  {},
                  "Connecting to "
                    .concat(this.relayUrl, ", attempt: ")
                    .concat(t, "...")
                ),
                  await this.createProvider(),
                  await new Promise(async (e, t) => {
                    let i = () => {
                      t(
                        Error("Connection interrupted while trying to connect")
                      );
                    };
                    this.provider.once(h_.disconnect, i),
                      await nw(
                        new Promise((e, t) => {
                          this.provider.connect().then(e).catch(t);
                        }),
                        this.connectTimeout,
                        "Socket stalled when trying to connect to ".concat(
                          this.relayUrl
                        )
                      )
                        .catch((e) => {
                          t(e);
                        })
                        .finally(() => {
                          this.provider.off(h_.disconnect, i),
                            clearTimeout(this.reconnectTimeout);
                        }),
                      await new Promise(async (e, i) => {
                        let r = () => {
                          t(
                            Error(
                              "Connection interrupted while trying to subscribe"
                            )
                          );
                        };
                        this.provider.once(h_.disconnect, r),
                          await this.subscriber
                            .start()
                            .then(e)
                            .catch(i)
                            .finally(() => {
                              this.provider.off(h_.disconnect, r);
                            });
                      }),
                      (this.hasExperiencedNetworkDisruption = !1),
                      e();
                  });
              } catch (e) {
                await this.subscriber.stop(),
                  this.logger.warn({}, e.message),
                  (this.hasExperiencedNetworkDisruption = !0);
              } finally {
                this.connectionAttemptInProgress = !1;
              }
              if (this.connected) {
                this.logger.debug(
                  {},
                  "Connected to "
                    .concat(this.relayUrl, " successfully on attempt: ")
                    .concat(t)
                );
                break;
              }
              await new Promise((e) => setTimeout(e, (0, o.toMiliseconds)(+t))),
                t++;
            }
          }
          startPingTimeout() {
            var e, t, i, r, s;
            if (nl())
              try {
                null !=
                  (t = null == (e = this.provider) ? void 0 : e.connection) &&
                  t.socket &&
                  (null ==
                    (s =
                      null ==
                      (r = null == (i = this.provider) ? void 0 : i.connection)
                        ? void 0
                        : r.socket) ||
                    s.on("ping", () => {
                      this.resetPingTimeout();
                    })),
                  this.resetPingTimeout();
              } catch (e) {
                this.logger.warn(e, null == e ? void 0 : e.message);
              }
          }
          async createProvider() {
            this.provider.connection && this.unregisterProviderListeners();
            let e = await this.core.crypto.signJWT(this.relayUrl);
            (this.provider = new hu(
              new hp(
                (function (e) {
                  let {
                      protocol: t,
                      version: i,
                      relayUrl: r,
                      sdkVersion: s,
                      auth: n,
                      projectId: o,
                      useOnCloseEvent: a,
                      bundleId: c,
                      packageName: l,
                    } = e,
                    h = r.split("?"),
                    u = ng(t, i, s),
                    d = (function (e, t) {
                      let i = new URLSearchParams(e);
                      for (let e of Object.keys(t).sort())
                        if (t.hasOwnProperty(e)) {
                          let r = t[e];
                          void 0 !== r && i.set(e, r);
                        }
                      return i.toString();
                    })(h[1] || "", {
                      auth: n,
                      ua: u,
                      projectId: o,
                      useOnCloseEvent: a || void 0,
                      packageName: l || void 0,
                      bundleId: c || void 0,
                    });
                  return h[0] + "?" + d;
                })({
                  sdkVersion: hD,
                  protocol: this.protocol,
                  version: this.version,
                  relayUrl: this.relayUrl,
                  projectId: this.projectId,
                  auth: e,
                  useOnCloseEvent: !0,
                  bundleId: this.bundleId,
                  packageName: this.packageName,
                })
              )
            )),
              this.registerProviderListeners();
          }
          async recordMessageEvent(e, t) {
            let { topic: i, message: r } = e;
            await this.messages.set(i, r, t);
          }
          async shouldIgnoreMessageEvent(e) {
            let { topic: t, message: i } = e;
            if (!i || 0 === i.length)
              return (
                this.logger.warn("Ignoring invalid/empty message: ".concat(i)),
                !0
              );
            if (!(await this.subscriber.isKnownTopic(t)))
              return (
                this.logger.warn(
                  "Ignoring message for unknown topic ".concat(t)
                ),
                !0
              );
            let r = this.messages.has(t, i);
            return (
              r && this.logger.warn("Ignoring duplicate message: ".concat(i)), r
            );
          }
          async onProviderPayload(e) {
            if (
              (this.logger.debug("Incoming Relay Payload"),
              this.logger.trace({
                type: "payload",
                direction: "incoming",
                payload: e,
              }),
              ha(e))
            ) {
              if (!e.method.endsWith("_subscription")) return;
              let t = e.params,
                {
                  topic: i,
                  message: r,
                  publishedAt: s,
                  attestation: n,
                } = t.data,
                o = {
                  topic: i,
                  message: r,
                  publishedAt: s,
                  transportType: hS.relay,
                  attestation: n,
                };
              this.logger.debug("Emitting Relayer Payload"),
                this.logger.trace(dh({ type: "event", event: t.id }, o)),
                this.events.emit(t.id, o),
                await this.acknowledgePayload(e),
                await this.onMessageEvent(o);
            } else hc(e) && this.events.emit(hI.message_ack, e);
          }
          async onMessageEvent(e) {
            (await this.shouldIgnoreMessageEvent(e)) ||
              (await this.recordMessageEvent(e, hP.inbound),
              this.events.emit(hI.message, e));
          }
          async acknowledgePayload(e) {
            let t = l9(e.id, !0);
            await this.provider.connection.send(t);
          }
          unregisterProviderListeners() {
            this.provider.off(h_.payload, this.onPayloadHandler),
              this.provider.off(h_.connect, this.onConnectHandler),
              this.provider.off(h_.disconnect, this.onDisconnectHandler),
              this.provider.off(h_.error, this.onProviderErrorHandler),
              clearTimeout(this.pingTimeout);
          }
          async registerEventListeners() {
            let e = await lG();
            (function (e) {
              var t, i, r;
              switch (nd()) {
                case nc.browser:
                  (t = e),
                    !nh() &&
                      nu() &&
                      (window.addEventListener("online", () => t(!0)),
                      window.addEventListener("offline", () => t(!1)));
                  break;
                case nc.reactNative:
                  (i = e),
                    nh() &&
                      null != globalThis &&
                      globalThis.NetInfo &&
                      (null == (r = globalThis) ||
                        r.NetInfo.addEventListener((e) =>
                          i(null == e ? void 0 : e.isConnected)
                        ));
                case nc.node:
              }
            })(async (t) => {
              e !== t &&
                ((e = t),
                t
                  ? await this.transportOpen().catch((e) =>
                      this.logger.error(e, null == e ? void 0 : e.message)
                    )
                  : ((this.hasExperiencedNetworkDisruption = !0),
                    await this.transportDisconnect(),
                    (this.transportExplicitlyClosed = !1)));
            }),
              this.core.heartbeat.on(h.pulse, async () => {
                var e;
                if (
                  !this.transportExplicitlyClosed &&
                  !this.connected &&
                  (!(nu() && (0, iI.getDocument)()) ||
                    (null == (e = (0, iI.getDocument)())
                      ? void 0
                      : e.visibilityState) === "visible")
                )
                  try {
                    await this.confirmOnlineStateOrThrow(),
                      await this.transportOpen();
                  } catch (e) {
                    this.logger.warn(e, null == e ? void 0 : e.message);
                  }
              });
          }
          async onProviderDisconnect() {
            clearTimeout(this.pingTimeout),
              this.events.emit(hI.disconnect),
              (this.connectionAttemptInProgress = !1),
              !this.reconnectInProgress &&
                ((this.reconnectInProgress = !0),
                await this.subscriber.stop(),
                this.subscriber.hasAnyTopics &&
                  (this.transportExplicitlyClosed ||
                    (this.reconnectTimeout = setTimeout(async () => {
                      await this.transportOpen().catch((e) =>
                        this.logger.error(e, null == e ? void 0 : e.message)
                      ),
                        (this.reconnectTimeout = void 0),
                        (this.reconnectInProgress = !1);
                    }, (0, o.toMiliseconds)(0.1)))));
          }
          isInitialized() {
            if (!this.initialized) {
              let { message: e } = lT("NOT_INITIALIZED", this.name);
              throw Error(e);
            }
          }
          async toEstablishConnection() {
            if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
              if (this.connectPromise) return void (await this.connectPromise);
              await this.connect();
            }
          }
          constructor(e) {
            super(e),
              du(this, "protocol", "wc"),
              du(this, "version", 2),
              du(this, "core"),
              du(this, "logger"),
              du(this, "events", new n.EventEmitter()),
              du(this, "provider"),
              du(this, "messages"),
              du(this, "subscriber"),
              du(this, "publisher"),
              du(this, "name", "relayer"),
              du(this, "transportExplicitlyClosed", !1),
              du(this, "initialized", !1),
              du(this, "connectionAttemptInProgress", !1),
              du(this, "relayUrl"),
              du(this, "projectId"),
              du(this, "packageName"),
              du(this, "bundleId"),
              du(this, "hasExperiencedNetworkDisruption", !1),
              du(this, "pingTimeout"),
              du(
                this,
                "heartBeatTimeout",
                (0, o.toMiliseconds)(o.THIRTY_SECONDS + o.FIVE_SECONDS)
              ),
              du(this, "reconnectTimeout"),
              du(this, "connectPromise"),
              du(this, "reconnectInProgress", !1),
              du(this, "requestsInFlight", []),
              du(
                this,
                "connectTimeout",
                (0, o.toMiliseconds)(15 * o.ONE_SECOND)
              ),
              du(this, "request", async (e) => {
                var t, i;
                this.logger.debug("Publishing Request Payload");
                let r = e.id || l5().toString();
                await this.toEstablishConnection();
                try {
                  this.logger.trace(
                    {
                      id: r,
                      method: e.method,
                      topic: null == (t = e.params) ? void 0 : t.topic,
                    },
                    "relayer.request - publishing..."
                  );
                  let s = ""
                    .concat(r, ":")
                    .concat((null == (i = e.params) ? void 0 : i.tag) || "");
                  this.requestsInFlight.push(s);
                  let n = await this.provider.request(e);
                  return (
                    (this.requestsInFlight = this.requestsInFlight.filter(
                      (e) => e !== s
                    )),
                    n
                  );
                } catch (e) {
                  throw (
                    (this.logger.debug("Failed to Publish Request: ".concat(r)),
                    e)
                  );
                }
              }),
              du(this, "resetPingTimeout", () => {
                nl() &&
                  (clearTimeout(this.pingTimeout),
                  (this.pingTimeout = setTimeout(() => {
                    var e, t, i, r;
                    try {
                      this.logger.debug(
                        {},
                        "pingTimeout: Connection stalled, terminating..."
                      ),
                        null ==
                          (r =
                            null ==
                            (i =
                              null ==
                              (t =
                                null == (e = this.provider)
                                  ? void 0
                                  : e.connection)
                                ? void 0
                                : t.socket)
                              ? void 0
                              : i.terminate) || r.call(i);
                    } catch (e) {
                      this.logger.warn(e, null == e ? void 0 : e.message);
                    }
                  }, this.heartBeatTimeout)));
              }),
              du(this, "onPayloadHandler", (e) => {
                this.onProviderPayload(e), this.resetPingTimeout();
              }),
              du(this, "onConnectHandler", () => {
                this.logger.warn({}, "Relayer connected 🛜"),
                  this.startPingTimeout(),
                  this.events.emit(hI.connect);
              }),
              du(this, "onDisconnectHandler", () => {
                this.logger.warn({}, "Relayer disconnected 🛑"),
                  (this.requestsInFlight = []),
                  this.onProviderDisconnect();
              }),
              du(this, "onProviderErrorHandler", (e) => {
                this.logger.fatal("Fatal socket error: ".concat(e.message)),
                  this.events.emit(hI.error, e),
                  this.logger.fatal(
                    "Fatal socket error received, closing transport"
                  ),
                  this.transportClose();
              }),
              du(this, "registerProviderListeners", () => {
                this.provider.on(h_.payload, this.onPayloadHandler),
                  this.provider.on(h_.connect, this.onConnectHandler),
                  this.provider.on(h_.disconnect, this.onDisconnectHandler),
                  this.provider.on(h_.error, this.onProviderErrorHandler);
              }),
              (this.core = e.core),
              (this.logger =
                "u" > typeof e.logger && "string" != typeof e.logger
                  ? (0, L.generateChildLogger)(e.logger, this.name)
                  : (0, q.default)(
                      (0, L.getDefaultLoggerOptions)({
                        level: e.logger || "error",
                      })
                    )),
              (this.messages = new uF(this.logger, e.core)),
              (this.subscriber = new dr(this, this.logger)),
              (this.publisher = new u$(this, this.logger)),
              (this.relayUrl = (null == e ? void 0 : e.relayUrl) || hx),
              (this.projectId = e.projectId),
              nh() &&
              "u" >
                typeof (null == globalThis ? void 0 : globalThis.Platform) &&
              (null == globalThis ? void 0 : globalThis.Platform.OS) ===
                "android"
                ? (this.packageName = nf())
                : nh() &&
                  "u" >
                    typeof (null == globalThis
                      ? void 0
                      : globalThis.Platform) &&
                  (null == globalThis ? void 0 : globalThis.Platform.OS) ===
                    "ios" &&
                  (this.bundleId = nf()),
              (this.provider = {});
          }
        }
        function df(e) {
          return Object.getOwnPropertySymbols(e).filter((t) =>
            Object.prototype.propertyIsEnumerable.call(e, t)
          );
        }
        function dp(e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : Object.prototype.toString.call(e);
        }
        let dg = "[object Arguments]",
          dy = "[object Object]";
        function db() {}
        function dm(e) {
          if (!e || "object" != typeof e) return !1;
          let t = Object.getPrototypeOf(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            "[object Object]" === Object.prototype.toString.call(e)
          );
        }
        var dv = Object.defineProperty,
          dw = Object.getOwnPropertySymbols,
          dE = Object.prototype.hasOwnProperty,
          dx = Object.prototype.propertyIsEnumerable,
          dI = (e, t, i) =>
            t in e
              ? dv(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          d_ = (e, t) => {
            for (var i in t || (t = {})) dE.call(t, i) && dI(e, i, t[i]);
            if (dw) for (var i of dw(t)) dx.call(t, i) && dI(e, i, t[i]);
            return e;
          },
          dD = (e, t, i) => dI(e, "symbol" != typeof t ? t + "" : t, i);
        class dS extends Y {
          get context() {
            return (0, L.getLoggerContext)(this.logger);
          }
          get storageKey() {
            return (
              this.storagePrefix +
              this.version +
              this.core.customStoragePrefix +
              "//" +
              this.name
            );
          }
          get length() {
            return this.map.size;
          }
          get keys() {
            return Array.from(this.map.keys());
          }
          get values() {
            return Array.from(this.map.values());
          }
          addToRecentlyDeleted(e) {
            this.recentlyDeleted.push(e),
              this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
                this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
          }
          async setDataStore(e) {
            await this.core.storage.setItem(this.storageKey, e);
          }
          async getDataStore() {
            return await this.core.storage.getItem(this.storageKey);
          }
          getData(e) {
            let t = this.map.get(e);
            if (!t) {
              if (this.recentlyDeleted.includes(e)) {
                let { message: t } = lT(
                  "MISSING_OR_INVALID",
                  "Record was recently deleted - "
                    .concat(this.name, ": ")
                    .concat(e)
                );
                throw (this.logger.error(t), Error(t));
              }
              let { message: t } = lT(
                "NO_MATCHING_KEY",
                "".concat(this.name, ": ").concat(e)
              );
              throw (this.logger.error(t), Error(t));
            }
            return t;
          }
          async persist() {
            await this.setDataStore(this.values);
          }
          async restore() {
            try {
              let e = await this.getDataStore();
              if (typeof e > "u" || !e.length) return;
              if (this.map.size) {
                let { message: e } = lT("RESTORE_WILL_OVERRIDE", this.name);
                throw (this.logger.error(e), Error(e));
              }
              (this.cached = e),
                this.logger.debug(
                  "Successfully Restored value for ".concat(this.name)
                ),
                this.logger.trace({
                  type: "method",
                  method: "restore",
                  value: this.values,
                });
            } catch (e) {
              this.logger.debug(
                "Failed to Restore value for ".concat(this.name)
              ),
                this.logger.error(e);
            }
          }
          isInitialized() {
            if (!this.initialized) {
              let { message: e } = lT("NOT_INITIALIZED", this.name);
              throw Error(e);
            }
          }
          constructor(e, t, i, s = hy, n) {
            super(e, t, i, s),
              (this.core = e),
              (this.logger = t),
              (this.name = i),
              dD(this, "map", new Map()),
              dD(this, "version", "0.3"),
              dD(this, "cached", []),
              dD(this, "initialized", !1),
              dD(this, "getKey"),
              dD(this, "storagePrefix", hy),
              dD(this, "recentlyDeleted", []),
              dD(this, "recentlyDeletedLimit", 200),
              dD(this, "init", async () => {
                this.initialized ||
                  (this.logger.trace("Initialized"),
                  await this.restore(),
                  this.cached.forEach((e) => {
                    this.getKey && null !== e && !lB(e)
                      ? this.map.set(this.getKey(e), e)
                      : (function (e) {
                          var t;
                          return null == (t = null == e ? void 0 : e.proposer)
                            ? void 0
                            : t.publicKey;
                        })(e)
                      ? this.map.set(e.id, e)
                      : (function (e) {
                          return null == e ? void 0 : e.topic;
                        })(e) && this.map.set(e.topic, e);
                  }),
                  (this.cached = []),
                  (this.initialized = !0));
              }),
              dD(this, "set", async (e, t) => {
                this.isInitialized(),
                  this.map.has(e)
                    ? await this.update(e, t)
                    : (this.logger.debug("Setting value"),
                      this.logger.trace({
                        type: "method",
                        method: "set",
                        key: e,
                        value: t,
                      }),
                      this.map.set(e, t),
                      await this.persist());
              }),
              dD(
                this,
                "get",
                (e) => (
                  this.isInitialized(),
                  this.logger.debug("Getting value"),
                  this.logger.trace({ type: "method", method: "get", key: e }),
                  this.getData(e)
                )
              ),
              dD(
                this,
                "getAll",
                (e) => (
                  this.isInitialized(),
                  e
                    ? this.values.filter((t) =>
                        Object.keys(e).every((i) => {
                          var s;
                          return (
                            (s = t[i]),
                            (function e(t, i, s, n, o, a, c) {
                              let l = c(t, i, s, n, o, a);
                              if (void 0 !== l) return l;
                              if (typeof t == typeof i)
                                switch (typeof t) {
                                  case "bigint":
                                  case "string":
                                  case "boolean":
                                  case "symbol":
                                  case "undefined":
                                  case "function":
                                    return t === i;
                                  case "number":
                                    return t === i || Object.is(t, i);
                                }
                              return (function t(i, s, n, o) {
                                if (Object.is(i, s)) return !0;
                                let a = dp(i),
                                  c = dp(s);
                                if (
                                  (a === dg && (a = dy),
                                  c === dg && (c = dy),
                                  a !== c)
                                )
                                  return !1;
                                switch (a) {
                                  case "[object String]":
                                    return i.toString() === s.toString();
                                  case "[object Number]": {
                                    let e = i.valueOf(),
                                      t = s.valueOf();
                                    return (
                                      e === t ||
                                      (Number.isNaN(e) && Number.isNaN(t))
                                    );
                                  }
                                  case "[object Boolean]":
                                  case "[object Date]":
                                  case "[object Symbol]":
                                    return Object.is(i.valueOf(), s.valueOf());
                                  case "[object RegExp]":
                                    return (
                                      i.source === s.source &&
                                      i.flags === s.flags
                                    );
                                  case "[object Function]":
                                    return i === s;
                                }
                                let l = (n = null != n ? n : new Map()).get(i),
                                  h = n.get(s);
                                if (null != l && null != h) return l === s;
                                n.set(i, s), n.set(s, i);
                                try {
                                  switch (a) {
                                    case "[object Map]":
                                      if (i.size !== s.size) return !1;
                                      for (let [t, r] of i.entries())
                                        if (
                                          !s.has(t) ||
                                          !e(r, s.get(t), t, i, s, n, o)
                                        )
                                          return !1;
                                      return !0;
                                    case "[object Set]": {
                                      if (i.size !== s.size) return !1;
                                      let t = Array.from(i.values()),
                                        r = Array.from(s.values());
                                      for (let a = 0; a < t.length; a++) {
                                        let c = t[a],
                                          l = r.findIndex((t) =>
                                            e(c, t, void 0, i, s, n, o)
                                          );
                                        if (-1 === l) return !1;
                                        r.splice(l, 1);
                                      }
                                      return !0;
                                    }
                                    case "[object Array]":
                                    case "[object Uint8Array]":
                                    case "[object Uint8ClampedArray]":
                                    case "[object Uint16Array]":
                                    case "[object Uint32Array]":
                                    case "[object BigUint64Array]":
                                    case "[object Int8Array]":
                                    case "[object Int16Array]":
                                    case "[object Int32Array]":
                                    case "[object BigInt64Array]":
                                    case "[object Float32Array]":
                                    case "[object Float64Array]":
                                      if (
                                        ("u" > typeof r.Buffer &&
                                          r.Buffer.isBuffer(i) !==
                                            r.Buffer.isBuffer(s)) ||
                                        i.length !== s.length
                                      )
                                        return !1;
                                      for (let t = 0; t < i.length; t++)
                                        if (!e(i[t], s[t], t, i, s, n, o))
                                          return !1;
                                      return !0;
                                    case "[object ArrayBuffer]":
                                      return (
                                        i.byteLength === s.byteLength &&
                                        t(
                                          new Uint8Array(i),
                                          new Uint8Array(s),
                                          n,
                                          o
                                        )
                                      );
                                    case "[object DataView]":
                                      return (
                                        i.byteLength === s.byteLength &&
                                        i.byteOffset === s.byteOffset &&
                                        t(
                                          new Uint8Array(i),
                                          new Uint8Array(s),
                                          n,
                                          o
                                        )
                                      );
                                    case "[object Error]":
                                      return (
                                        i.name === s.name &&
                                        i.message === s.message
                                      );
                                    case dy: {
                                      if (
                                        !(
                                          t(
                                            i.constructor,
                                            s.constructor,
                                            n,
                                            o
                                          ) ||
                                          (dm(i) && dm(s))
                                        )
                                      )
                                        return !1;
                                      let r = [...Object.keys(i), ...df(i)],
                                        a = [...Object.keys(s), ...df(s)];
                                      if (r.length !== a.length) return !1;
                                      for (let t = 0; t < r.length; t++) {
                                        let a = r[t],
                                          c = i[a];
                                        if (!Object.hasOwn(s, a)) return !1;
                                        let l = s[a];
                                        if (!e(c, l, a, i, s, n, o)) return !1;
                                      }
                                      return !0;
                                    }
                                    default:
                                      return !1;
                                  }
                                } finally {
                                  n.delete(i), n.delete(s);
                                }
                              })(t, i, a, c);
                            })(s, e[i], void 0, void 0, void 0, void 0, db)
                          );
                        })
                      )
                    : this.values
                )
              ),
              dD(this, "update", async (e, t) => {
                this.isInitialized(),
                  this.logger.debug("Updating value"),
                  this.logger.trace({
                    type: "method",
                    method: "update",
                    key: e,
                    update: t,
                  });
                let i = d_(d_({}, this.getData(e)), t);
                this.map.set(e, i), await this.persist();
              }),
              dD(this, "delete", async (e, t) => {
                this.isInitialized(),
                  this.map.has(e) &&
                    (this.logger.debug("Deleting value"),
                    this.logger.trace({
                      type: "method",
                      method: "delete",
                      key: e,
                      reason: t,
                    }),
                    this.map.delete(e),
                    this.addToRecentlyDeleted(e),
                    await this.persist());
              }),
              (this.logger = (0, L.generateChildLogger)(t, this.name)),
              (this.storagePrefix = s),
              (this.getKey = n);
          }
        }
        var dP = Object.defineProperty,
          dA = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? dP(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class dO {
          get context() {
            return (0, L.getLoggerContext)(this.logger);
          }
          isInitialized() {
            if (!this.initialized) {
              let { message: e } = lT("NOT_INITIALIZED", this.name);
              throw Error(e);
            }
          }
          registerRelayerEvents() {
            this.core.relayer.on(hI.message, async (e) => {
              let { topic: t, message: i, transportType: r } = e;
              if (
                this.pairings.keys.includes(t) &&
                r !== hS.link_mode &&
                !this.ignoredPayloadTypes.includes(
                  this.core.crypto.getPayloadType(i)
                )
              )
                try {
                  let e = await this.core.crypto.decode(t, i);
                  ha(e)
                    ? (this.core.history.set(t, e),
                      await this.onRelayEventRequest({ topic: t, payload: e }))
                    : hc(e) &&
                      (await this.core.history.resolve(e),
                      await this.onRelayEventResponse({ topic: t, payload: e }),
                      this.core.history.delete(t, e.id)),
                    await this.core.relayer.messages.ack(t, i);
                } catch (e) {
                  this.logger.error(e);
                }
            });
          }
          registerExpirerEvents() {
            this.core.expirer.on(hU.expired, async (e) => {
              let { topic: t } = nx(e.target);
              t &&
                this.pairings.keys.includes(t) &&
                (await this.deletePairing(t, !0),
                this.events.emit(hT.expire, { topic: t }));
            });
          }
          constructor(e, t) {
            (this.core = e),
              (this.logger = t),
              dA(this, "name", "pairing"),
              dA(this, "version", "0.3"),
              dA(this, "events", new n.default()),
              dA(this, "pairings"),
              dA(this, "initialized", !1),
              dA(this, "storagePrefix", hy),
              dA(this, "ignoredPayloadTypes", [1]),
              dA(this, "registeredMethods", []),
              dA(this, "init", async () => {
                this.initialized ||
                  (await this.pairings.init(),
                  await this.cleanup(),
                  this.registerRelayerEvents(),
                  this.registerExpirerEvents(),
                  (this.initialized = !0),
                  this.logger.trace("Initialized"));
              }),
              dA(this, "register", (e) => {
                let { methods: t } = e;
                this.isInitialized(),
                  (this.registeredMethods = [
                    ...new Set([...this.registeredMethods, ...t]),
                  ]);
              }),
              dA(this, "create", async (e) => {
                this.isInitialized();
                let t = c7(),
                  i = await this.core.crypto.setSymKey(t),
                  r = nI(o.FIVE_MINUTES),
                  s = { protocol: "irn" },
                  n = {
                    topic: i,
                    expiry: r,
                    relay: s,
                    active: !1,
                    methods: null == e ? void 0 : e.methods,
                  },
                  a = lf({
                    protocol: this.core.protocol,
                    version: this.core.version,
                    topic: i,
                    symKey: t,
                    relay: s,
                    expiryTimestamp: r,
                    methods: null == e ? void 0 : e.methods,
                  });
                return (
                  this.events.emit(hT.create, n),
                  this.core.expirer.set(i, r),
                  await this.pairings.set(i, n),
                  await this.core.relayer.subscribe(i, {
                    transportType: null == e ? void 0 : e.transportType,
                  }),
                  { topic: i, uri: a }
                );
              }),
              dA(this, "pair", async (e) => {
                let t;
                this.isInitialized();
                let i = this.core.eventClient.createEvent({
                  properties: {
                    topic: null == e ? void 0 : e.uri,
                    trace: [hj.pairing_started],
                  },
                });
                this.isValidPair(e, i);
                let {
                  topic: r,
                  symKey: s,
                  relay: n,
                  expiryTimestamp: a,
                  methods: c,
                } = ld(e.uri);
                if (
                  ((i.props.properties.topic = r),
                  i.addTrace(hj.pairing_uri_validation_success),
                  i.addTrace(hj.pairing_uri_not_expired),
                  this.pairings.keys.includes(r))
                ) {
                  if (
                    ((t = this.pairings.get(r)),
                    i.addTrace(hj.existing_pairing),
                    t.active)
                  )
                    throw (
                      (i.setError(hL.active_pairing_already_exists),
                      Error(
                        "Pairing already exists: ".concat(
                          r,
                          ". Please try again with a new connection URI."
                        )
                      ))
                    );
                  i.addTrace(hj.pairing_not_expired);
                }
                let l = a || nI(o.FIVE_MINUTES),
                  h = { topic: r, relay: n, expiry: l, active: !1, methods: c };
                this.core.expirer.set(r, l),
                  await this.pairings.set(r, h),
                  i.addTrace(hj.store_new_pairing),
                  e.activatePairing && (await this.activate({ topic: r })),
                  this.events.emit(hT.create, h),
                  i.addTrace(hj.emit_inactive_pairing),
                  this.core.crypto.keychain.has(r) ||
                    (await this.core.crypto.setSymKey(s, r)),
                  i.addTrace(hj.subscribing_pairing_topic);
                try {
                  await this.core.relayer.confirmOnlineStateOrThrow();
                } catch (e) {
                  i.setError(hL.no_internet_connection);
                }
                try {
                  await this.core.relayer.subscribe(r, { relay: n });
                } catch (e) {
                  throw (i.setError(hL.subscribe_pairing_topic_failure), e);
                }
                return i.addTrace(hj.subscribe_pairing_topic_success), h;
              }),
              dA(this, "activate", async (e) => {
                let { topic: t } = e;
                this.isInitialized();
                let i = nI(o.FIVE_MINUTES);
                this.core.expirer.set(t, i),
                  await this.pairings.update(t, { active: !0, expiry: i });
              }),
              dA(this, "ping", async (e) => {
                this.isInitialized(),
                  await this.isValidPing(e),
                  this.logger.warn(
                    "ping() is deprecated and will be removed in the next major release."
                  );
                let { topic: t } = e;
                if (this.pairings.keys.includes(t)) {
                  let e = await this.sendRequest(t, "wc_pairingPing", {}),
                    { done: i, resolve: r, reject: s } = nv();
                  this.events.once(nD("pairing_ping", e), (e) => {
                    let { error: t } = e;
                    t ? s(t) : r();
                  }),
                    await i();
                }
              }),
              dA(this, "updateExpiry", async (e) => {
                let { topic: t, expiry: i } = e;
                this.isInitialized(),
                  await this.pairings.update(t, { expiry: i });
              }),
              dA(this, "updateMetadata", async (e) => {
                let { topic: t, metadata: i } = e;
                this.isInitialized(),
                  await this.pairings.update(t, { peerMetadata: i });
              }),
              dA(
                this,
                "getPairings",
                () => (this.isInitialized(), this.pairings.values)
              ),
              dA(this, "disconnect", async (e) => {
                this.isInitialized(), await this.isValidDisconnect(e);
                let { topic: t } = e;
                this.pairings.keys.includes(t) &&
                  (await this.sendRequest(
                    t,
                    "wc_pairingDelete",
                    lN("USER_DISCONNECTED")
                  ),
                  await this.deletePairing(t));
              }),
              dA(this, "formatUriFromPairing", (e) => {
                this.isInitialized();
                let { topic: t, relay: i, expiry: r, methods: s } = e,
                  n = this.core.crypto.keychain.get(t);
                return lf({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: t,
                  symKey: n,
                  relay: i,
                  expiryTimestamp: r,
                  methods: s,
                });
              }),
              dA(this, "sendRequest", async (e, t, i) => {
                let r = l4(t, i),
                  s = await this.core.crypto.encode(e, r),
                  n = hC[t].req;
                return (
                  this.core.history.set(e, r),
                  this.core.relayer.publish(e, s, n),
                  r.id
                );
              }),
              dA(this, "sendResult", async (e, t, i) => {
                let r = l9(e, i),
                  s = await this.core.crypto.encode(t, r),
                  n =
                    hC[(await this.core.history.get(t, e)).request.method].res;
                await this.core.relayer.publish(t, s, n),
                  await this.core.history.resolve(r);
              }),
              dA(this, "sendError", async (e, t, i) => {
                let r = l7(e, i),
                  s = await this.core.crypto.encode(t, r),
                  n = (await this.core.history.get(t, e)).request.method,
                  o = hC[n] ? hC[n].res : hC.unregistered_method.res;
                await this.core.relayer.publish(t, s, o),
                  await this.core.history.resolve(r);
              }),
              dA(this, "deletePairing", async (e, t) => {
                await this.core.relayer.unsubscribe(e),
                  await Promise.all([
                    this.pairings.delete(e, lN("USER_DISCONNECTED")),
                    this.core.crypto.deleteSymKey(e),
                    t ? Promise.resolve() : this.core.expirer.del(e),
                  ]);
              }),
              dA(this, "cleanup", async () => {
                let e = this.pairings.getAll().filter((e) => n_(e.expiry));
                await Promise.all(e.map((e) => this.deletePairing(e.topic)));
              }),
              dA(this, "onRelayEventRequest", async (e) => {
                let { topic: t, payload: i } = e;
                switch (i.method) {
                  case "wc_pairingPing":
                    return await this.onPairingPingRequest(t, i);
                  case "wc_pairingDelete":
                    return await this.onPairingDeleteRequest(t, i);
                  default:
                    return await this.onUnknownRpcMethodRequest(t, i);
                }
              }),
              dA(this, "onRelayEventResponse", async (e) => {
                let { topic: t, payload: i } = e,
                  r = (await this.core.history.get(t, i.id)).request.method;
                return "wc_pairingPing" === r
                  ? this.onPairingPingResponse(t, i)
                  : this.onUnknownRpcMethodResponse(r);
              }),
              dA(this, "onPairingPingRequest", async (e, t) => {
                let { id: i } = t;
                try {
                  this.isValidPing({ topic: e }),
                    await this.sendResult(i, e, !0),
                    this.events.emit(hT.ping, { id: i, topic: e });
                } catch (t) {
                  await this.sendError(i, e, t), this.logger.error(t);
                }
              }),
              dA(this, "onPairingPingResponse", (e, t) => {
                let { id: i } = t;
                setTimeout(() => {
                  hl(t)
                    ? this.events.emit(nD("pairing_ping", i), {})
                    : hh(t) &&
                      this.events.emit(nD("pairing_ping", i), {
                        error: t.error,
                      });
                }, 500);
              }),
              dA(this, "onPairingDeleteRequest", async (e, t) => {
                let { id: i } = t;
                try {
                  this.isValidDisconnect({ topic: e }),
                    await this.deletePairing(e),
                    this.events.emit(hT.delete, { id: i, topic: e });
                } catch (t) {
                  await this.sendError(i, e, t), this.logger.error(t);
                }
              }),
              dA(this, "onUnknownRpcMethodRequest", async (e, t) => {
                let { id: i, method: r } = t;
                try {
                  if (this.registeredMethods.includes(r)) return;
                  let t = lN("WC_METHOD_UNSUPPORTED", r);
                  await this.sendError(i, e, t), this.logger.error(t);
                } catch (t) {
                  await this.sendError(i, e, t), this.logger.error(t);
                }
              }),
              dA(this, "onUnknownRpcMethodResponse", (e) => {
                this.registeredMethods.includes(e) ||
                  this.logger.error(lN("WC_METHOD_UNSUPPORTED", e));
              }),
              dA(this, "isValidPair", (e, t) => {
                var i;
                if (!lH(e)) {
                  let { message: i } = lT(
                    "MISSING_OR_INVALID",
                    "pair() params: ".concat(e)
                  );
                  throw (t.setError(hL.malformed_pairing_uri), Error(i));
                }
                if (
                  !(function (e) {
                    function t(e) {
                      try {
                        return "u" > typeof new URL(e);
                      } catch (e) {
                        return !1;
                      }
                    }
                    try {
                      if (lk(e, !1)) {
                        if (t(e)) return !0;
                        let i = nN(e);
                        return t(i);
                      }
                    } catch (e) {}
                    return !1;
                  })(e.uri)
                ) {
                  let { message: i } = lT(
                    "MISSING_OR_INVALID",
                    "pair() uri: ".concat(e.uri)
                  );
                  throw (t.setError(hL.malformed_pairing_uri), Error(i));
                }
                let r = ld(null == e ? void 0 : e.uri);
                if (
                  !(null != (i = null == r ? void 0 : r.relay) && i.protocol)
                ) {
                  let { message: e } = lT(
                    "MISSING_OR_INVALID",
                    "pair() uri#relay-protocol"
                  );
                  throw (t.setError(hL.malformed_pairing_uri), Error(e));
                }
                if (!(null != r && r.symKey)) {
                  let { message: e } = lT(
                    "MISSING_OR_INVALID",
                    "pair() uri#symKey"
                  );
                  throw (t.setError(hL.malformed_pairing_uri), Error(e));
                }
                if (
                  null != r &&
                  r.expiryTimestamp &&
                  (0, o.toMiliseconds)(null == r ? void 0 : r.expiryTimestamp) <
                    Date.now()
                ) {
                  t.setError(hL.pairing_expired);
                  let { message: e } = lT(
                    "EXPIRED",
                    "pair() URI has expired. Please try again with a new connection URI."
                  );
                  throw Error(e);
                }
              }),
              dA(this, "isValidPing", async (e) => {
                if (!lH(e)) {
                  let { message: t } = lT(
                    "MISSING_OR_INVALID",
                    "ping() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { topic: t } = e;
                await this.isValidPairingTopic(t);
              }),
              dA(this, "isValidDisconnect", async (e) => {
                if (!lH(e)) {
                  let { message: t } = lT(
                    "MISSING_OR_INVALID",
                    "disconnect() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { topic: t } = e;
                await this.isValidPairingTopic(t);
              }),
              dA(this, "isValidPairingTopic", async (e) => {
                if (!lk(e, !1)) {
                  let { message: t } = lT(
                    "MISSING_OR_INVALID",
                    "pairing topic should be a string: ".concat(e)
                  );
                  throw Error(t);
                }
                if (!this.pairings.keys.includes(e)) {
                  let { message: t } = lT(
                    "NO_MATCHING_KEY",
                    "pairing topic doesn't exist: ".concat(e)
                  );
                  throw Error(t);
                }
                if (n_(this.pairings.get(e).expiry)) {
                  await this.deletePairing(e);
                  let { message: t } = lT(
                    "EXPIRED",
                    "pairing topic: ".concat(e)
                  );
                  throw Error(t);
                }
              }),
              (this.core = e),
              (this.logger = (0, L.generateChildLogger)(t, this.name)),
              (this.pairings = new dS(
                this.core,
                this.logger,
                this.name,
                this.storagePrefix
              ));
          }
        }
        var dC = Object.defineProperty,
          dT = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? dC(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class dN extends V {
          get context() {
            return (0, L.getLoggerContext)(this.logger);
          }
          get storageKey() {
            return (
              this.storagePrefix +
              this.version +
              this.core.customStoragePrefix +
              "//" +
              this.name
            );
          }
          get size() {
            return this.records.size;
          }
          get keys() {
            return Array.from(this.records.keys());
          }
          get values() {
            return Array.from(this.records.values());
          }
          get pending() {
            let e = [];
            return (
              this.values.forEach((t) => {
                if ("u" > typeof t.response) return;
                let i = {
                  topic: t.topic,
                  request: l4(t.request.method, t.request.params, t.id),
                  chainId: t.chainId,
                };
                return e.push(i);
              }),
              e
            );
          }
          async setJsonRpcRecords(e) {
            await this.core.storage.setItem(this.storageKey, e);
          }
          async getJsonRpcRecords() {
            return await this.core.storage.getItem(this.storageKey);
          }
          getRecord(e) {
            this.isInitialized();
            let t = this.records.get(e);
            if (!t) {
              let { message: t } = lT(
                "NO_MATCHING_KEY",
                "".concat(this.name, ": ").concat(e)
              );
              throw Error(t);
            }
            return t;
          }
          async persist() {
            await this.setJsonRpcRecords(this.values),
              this.events.emit(hN.sync);
          }
          async restore() {
            try {
              let e = await this.getJsonRpcRecords();
              if (typeof e > "u" || !e.length) return;
              if (this.records.size) {
                let { message: e } = lT("RESTORE_WILL_OVERRIDE", this.name);
                throw (this.logger.error(e), Error(e));
              }
              (this.cached = e),
                this.logger.debug(
                  "Successfully Restored records for ".concat(this.name)
                ),
                this.logger.trace({
                  type: "method",
                  method: "restore",
                  records: this.values,
                });
            } catch (e) {
              this.logger.debug(
                "Failed to Restore records for ".concat(this.name)
              ),
                this.logger.error(e);
            }
          }
          registerEventListeners() {
            this.events.on(hN.created, (e) => {
              let t = hN.created;
              this.logger.info("Emitting ".concat(t)),
                this.logger.debug({ type: "event", event: t, record: e });
            }),
              this.events.on(hN.updated, (e) => {
                let t = hN.updated;
                this.logger.info("Emitting ".concat(t)),
                  this.logger.debug({ type: "event", event: t, record: e });
              }),
              this.events.on(hN.deleted, (e) => {
                let t = hN.deleted;
                this.logger.info("Emitting ".concat(t)),
                  this.logger.debug({ type: "event", event: t, record: e });
              }),
              this.core.heartbeat.on(h.pulse, () => {
                this.cleanup();
              });
          }
          cleanup() {
            try {
              this.isInitialized();
              let e = !1;
              this.records.forEach((t) => {
                (0, o.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
                  (this.logger.info(
                    "Deleting expired history log: ".concat(t.id)
                  ),
                  this.records.delete(t.id),
                  this.events.emit(hN.deleted, t, !1),
                  (e = !0));
              }),
                e && this.persist();
            } catch (e) {
              this.logger.warn(e);
            }
          }
          isInitialized() {
            if (!this.initialized) {
              let { message: e } = lT("NOT_INITIALIZED", this.name);
              throw Error(e);
            }
          }
          constructor(e, t) {
            super(e, t),
              (this.core = e),
              (this.logger = t),
              dT(this, "records", new Map()),
              dT(this, "events", new n.EventEmitter()),
              dT(this, "name", "history"),
              dT(this, "version", "0.3"),
              dT(this, "cached", []),
              dT(this, "initialized", !1),
              dT(this, "storagePrefix", hy),
              dT(this, "init", async () => {
                this.initialized ||
                  (this.logger.trace("Initialized"),
                  await this.restore(),
                  this.cached.forEach((e) => this.records.set(e.id, e)),
                  (this.cached = []),
                  this.registerEventListeners(),
                  (this.initialized = !0));
              }),
              dT(this, "set", (e, t, i) => {
                if (
                  (this.isInitialized(),
                  this.logger.debug("Setting JSON-RPC request history record"),
                  this.logger.trace({
                    type: "method",
                    method: "set",
                    topic: e,
                    request: t,
                    chainId: i,
                  }),
                  this.records.has(t.id))
                )
                  return;
                let r = {
                  id: t.id,
                  topic: e,
                  request: { method: t.method, params: t.params || null },
                  chainId: i,
                  expiry: nI(o.THIRTY_DAYS),
                };
                this.records.set(r.id, r),
                  this.persist(),
                  this.events.emit(hN.created, r);
              }),
              dT(this, "resolve", async (e) => {
                if (
                  (this.isInitialized(),
                  this.logger.debug(
                    "Updating JSON-RPC response history record"
                  ),
                  this.logger.trace({
                    type: "method",
                    method: "update",
                    response: e,
                  }),
                  !this.records.has(e.id))
                )
                  return;
                let t = await this.getRecord(e.id);
                typeof t.response > "u" &&
                  ((t.response = hh(e)
                    ? { error: e.error }
                    : { result: e.result }),
                  this.records.set(t.id, t),
                  this.persist(),
                  this.events.emit(hN.updated, t));
              }),
              dT(
                this,
                "get",
                async (e, t) => (
                  this.isInitialized(),
                  this.logger.debug("Getting record"),
                  this.logger.trace({
                    type: "method",
                    method: "get",
                    topic: e,
                    id: t,
                  }),
                  await this.getRecord(t)
                )
              ),
              dT(this, "delete", (e, t) => {
                this.isInitialized(),
                  this.logger.debug("Deleting record"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    id: t,
                  }),
                  this.values.forEach((i) => {
                    i.topic === e &&
                      (("u" > typeof t && i.id !== t) ||
                        (this.records.delete(i.id),
                        this.events.emit(hN.deleted, i)));
                  }),
                  this.persist();
              }),
              dT(
                this,
                "exists",
                async (e, t) => (
                  this.isInitialized(),
                  !!this.records.has(t) && (await this.getRecord(t)).topic === e
                )
              ),
              dT(this, "on", (e, t) => {
                this.events.on(e, t);
              }),
              dT(this, "once", (e, t) => {
                this.events.once(e, t);
              }),
              dT(this, "off", (e, t) => {
                this.events.off(e, t);
              }),
              dT(this, "removeListener", (e, t) => {
                this.events.removeListener(e, t);
              }),
              (this.logger = (0, L.generateChildLogger)(t, this.name));
          }
        }
        var dU = Object.defineProperty,
          dR = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? dU(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class dB extends Z {
          get context() {
            return (0, L.getLoggerContext)(this.logger);
          }
          get storageKey() {
            return (
              this.storagePrefix +
              this.version +
              this.core.customStoragePrefix +
              "//" +
              this.name
            );
          }
          get length() {
            return this.expirations.size;
          }
          get keys() {
            return Array.from(this.expirations.keys());
          }
          get values() {
            return Array.from(this.expirations.values());
          }
          formatTarget(e) {
            if ("string" == typeof e) return nE("topic", e);
            if ("number" == typeof e) return nE("id", e);
            let { message: t } = lT(
              "UNKNOWN_TYPE",
              "Target type: ".concat(typeof e)
            );
            throw Error(t);
          }
          async setExpirations(e) {
            await this.core.storage.setItem(this.storageKey, e);
          }
          async getExpirations() {
            return await this.core.storage.getItem(this.storageKey);
          }
          async persist() {
            await this.setExpirations(this.values), this.events.emit(hU.sync);
          }
          async restore() {
            try {
              let e = await this.getExpirations();
              if (typeof e > "u" || !e.length) return;
              if (this.expirations.size) {
                let { message: e } = lT("RESTORE_WILL_OVERRIDE", this.name);
                throw (this.logger.error(e), Error(e));
              }
              (this.cached = e),
                this.logger.debug(
                  "Successfully Restored expirations for ".concat(this.name)
                ),
                this.logger.trace({
                  type: "method",
                  method: "restore",
                  expirations: this.values,
                });
            } catch (e) {
              this.logger.debug(
                "Failed to Restore expirations for ".concat(this.name)
              ),
                this.logger.error(e);
            }
          }
          getExpiration(e) {
            let t = this.expirations.get(e);
            if (!t) {
              let { message: t } = lT(
                "NO_MATCHING_KEY",
                "".concat(this.name, ": ").concat(e)
              );
              throw (this.logger.warn(t), Error(t));
            }
            return t;
          }
          checkExpiry(e, t) {
            let { expiry: i } = t;
            (0, o.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t);
          }
          expire(e, t) {
            this.expirations.delete(e),
              this.events.emit(hU.expired, { target: e, expiration: t });
          }
          checkExpirations() {
            this.core.relayer.connected &&
              this.expirations.forEach((e, t) => this.checkExpiry(t, e));
          }
          registerEventListeners() {
            this.core.heartbeat.on(h.pulse, () => this.checkExpirations()),
              this.events.on(hU.created, (e) => {
                let t = hU.created;
                this.logger.info("Emitting ".concat(t)),
                  this.logger.debug({ type: "event", event: t, data: e }),
                  this.persist();
              }),
              this.events.on(hU.expired, (e) => {
                let t = hU.expired;
                this.logger.info("Emitting ".concat(t)),
                  this.logger.debug({ type: "event", event: t, data: e }),
                  this.persist();
              }),
              this.events.on(hU.deleted, (e) => {
                let t = hU.deleted;
                this.logger.info("Emitting ".concat(t)),
                  this.logger.debug({ type: "event", event: t, data: e }),
                  this.persist();
              });
          }
          isInitialized() {
            if (!this.initialized) {
              let { message: e } = lT("NOT_INITIALIZED", this.name);
              throw Error(e);
            }
          }
          constructor(e, t) {
            super(e, t),
              (this.core = e),
              (this.logger = t),
              dR(this, "expirations", new Map()),
              dR(this, "events", new n.EventEmitter()),
              dR(this, "name", "expirer"),
              dR(this, "version", "0.3"),
              dR(this, "cached", []),
              dR(this, "initialized", !1),
              dR(this, "storagePrefix", hy),
              dR(this, "init", async () => {
                this.initialized ||
                  (this.logger.trace("Initialized"),
                  await this.restore(),
                  this.cached.forEach((e) => this.expirations.set(e.target, e)),
                  (this.cached = []),
                  this.registerEventListeners(),
                  (this.initialized = !0));
              }),
              dR(this, "has", (e) => {
                try {
                  let t = this.formatTarget(e);
                  return "u" > typeof this.getExpiration(t);
                } catch (e) {
                  return !1;
                }
              }),
              dR(this, "set", (e, t) => {
                this.isInitialized();
                let i = this.formatTarget(e),
                  r = { target: i, expiry: t };
                this.expirations.set(i, r),
                  this.checkExpiry(i, r),
                  this.events.emit(hU.created, { target: i, expiration: r });
              }),
              dR(this, "get", (e) => {
                this.isInitialized();
                let t = this.formatTarget(e);
                return this.getExpiration(t);
              }),
              dR(this, "del", (e) => {
                if ((this.isInitialized(), this.has(e))) {
                  let t = this.formatTarget(e),
                    i = this.getExpiration(t);
                  this.expirations.delete(t),
                    this.events.emit(hU.deleted, { target: t, expiration: i });
                }
              }),
              dR(this, "on", (e, t) => {
                this.events.on(e, t);
              }),
              dR(this, "once", (e, t) => {
                this.events.once(e, t);
              }),
              dR(this, "off", (e, t) => {
                this.events.off(e, t);
              }),
              dR(this, "removeListener", (e, t) => {
                this.events.removeListener(e, t);
              }),
              (this.logger = (0, L.generateChildLogger)(t, this.name));
          }
        }
        var dk = Object.defineProperty,
          dj = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? dk(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class dL extends X {
          get storeKey() {
            return (
              this.storagePrefix +
              this.version +
              this.core.customStoragePrefix +
              "//verify:public:key"
            );
          }
          get context() {
            return (0, L.getLoggerContext)(this.logger);
          }
          startAbortTimer(e) {
            return (
              (this.abortController = new AbortController()),
              setTimeout(
                () => this.abortController.abort(),
                (0, o.toMiliseconds)(e)
              )
            );
          }
          constructor(e, t, i) {
            super(e, t, i),
              (this.core = e),
              (this.logger = t),
              (this.store = i),
              dj(this, "name", "verify-api"),
              dj(this, "abortController"),
              dj(this, "isDevEnv"),
              dj(this, "verifyUrlV3", hB),
              dj(this, "storagePrefix", hy),
              dj(this, "version", 2),
              dj(this, "publicKey"),
              dj(this, "fetchPromise"),
              dj(this, "init", async () => {
                var e;
                this.isDevEnv ||
                  ((this.publicKey = await this.store.getItem(this.storeKey)),
                  this.publicKey &&
                    (0, o.toMiliseconds)(
                      null == (e = this.publicKey) ? void 0 : e.expiresAt
                    ) < Date.now() &&
                    (this.logger.debug("verify v2 public key expired"),
                    await this.removePublicKey()));
              }),
              dj(this, "register", async (e) => {
                if (!nu() || this.isDevEnv) return;
                let t = window.location.origin,
                  { id: i, decryptedId: r } = e,
                  s = ""
                    .concat(this.verifyUrlV3, "/attestation?projectId=")
                    .concat(this.core.projectId, "&origin=")
                    .concat(t, "&id=")
                    .concat(i, "&decryptedId=")
                    .concat(r);
                try {
                  let e = (0, iI.getDocument)(),
                    t = this.startAbortTimer(5 * o.ONE_SECOND),
                    r = await new Promise((r, n) => {
                      let o = () => {
                        window.removeEventListener("message", c),
                          e.body.removeChild(a),
                          n("attestation aborted");
                      };
                      this.abortController.signal.addEventListener("abort", o);
                      let a = e.createElement("iframe");
                      (a.src = s),
                        (a.style.display = "none"),
                        a.addEventListener("error", o, {
                          signal: this.abortController.signal,
                        });
                      let c = (s) => {
                        if (s.data && "string" == typeof s.data)
                          try {
                            let n = JSON.parse(s.data);
                            if ("verify_attestation" === n.type) {
                              if (ih(n.attestation).payload.id !== i) return;
                              clearInterval(t),
                                e.body.removeChild(a),
                                this.abortController.signal.removeEventListener(
                                  "abort",
                                  o
                                ),
                                window.removeEventListener("message", c),
                                r(null === n.attestation ? "" : n.attestation);
                            }
                          } catch (e) {
                            this.logger.warn(e);
                          }
                      };
                      e.body.appendChild(a),
                        window.addEventListener("message", c, {
                          signal: this.abortController.signal,
                        });
                    });
                  return this.logger.debug("jwt attestation", r), r;
                } catch (e) {
                  this.logger.warn(e);
                }
                return "";
              }),
              dj(this, "resolve", async (e) => {
                if (this.isDevEnv) return "";
                let { attestationId: t, hash: i, encryptedId: r } = e;
                if ("" === t)
                  return void this.logger.debug(
                    "resolve: attestationId is empty, skipping"
                  );
                if (t) {
                  if (ih(t).payload.id !== r) return;
                  let e = await this.isValidJwtAttestation(t);
                  if (e)
                    return e.isVerified
                      ? e
                      : void this.logger.warn(
                          "resolve: jwt attestation: origin url not verified"
                        );
                }
                if (!i) return;
                let s = this.getVerifyUrl(null == e ? void 0 : e.verifyUrl);
                return this.fetchAttestation(i, s);
              }),
              dj(this, "fetchAttestation", async (e, t) => {
                this.logger.debug(
                  "resolving attestation: ".concat(e, " from url: ").concat(t)
                );
                let i = this.startAbortTimer(5 * o.ONE_SECOND),
                  r = await fetch(
                    ""
                      .concat(t, "/attestation/")
                      .concat(e, "?v2Supported=true"),
                    { signal: this.abortController.signal }
                  );
                return (
                  clearTimeout(i), 200 === r.status ? await r.json() : void 0
                );
              }),
              dj(this, "getVerifyUrl", (e) => {
                let t = e || hR;
                return (
                  hk.includes(t) ||
                    (this.logger.info(
                      "verify url: "
                        .concat(
                          t,
                          ", not included in trusted list, assigning default: "
                        )
                        .concat(hR)
                    ),
                    (t = hR)),
                  t
                );
              }),
              dj(this, "fetchPublicKey", async () => {
                try {
                  this.logger.debug(
                    "fetching public key from: ".concat(this.verifyUrlV3)
                  );
                  let e = this.startAbortTimer(o.FIVE_SECONDS),
                    t = await fetch(
                      "".concat(this.verifyUrlV3, "/public-key"),
                      { signal: this.abortController.signal }
                    );
                  return clearTimeout(e), await t.json();
                } catch (e) {
                  this.logger.warn(e);
                }
              }),
              dj(this, "persistPublicKey", async (e) => {
                this.logger.debug("persisting public key to local storage", e),
                  await this.store.setItem(this.storeKey, e),
                  (this.publicKey = e);
              }),
              dj(this, "removePublicKey", async () => {
                this.logger.debug("removing verify v2 public key from storage"),
                  await this.store.removeItem(this.storeKey),
                  (this.publicKey = void 0);
              }),
              dj(this, "isValidJwtAttestation", async (e) => {
                let t = await this.getPublicKey();
                try {
                  if (t) return this.validateAttestation(e, t);
                } catch (e) {
                  this.logger.error(e),
                    this.logger.warn("error validating attestation");
                }
                let i = await this.fetchAndPersistPublicKey();
                try {
                  if (i) return this.validateAttestation(e, i);
                } catch (e) {
                  this.logger.error(e),
                    this.logger.warn("error validating attestation");
                }
              }),
              dj(this, "getPublicKey", async () =>
                this.publicKey
                  ? this.publicKey
                  : await this.fetchAndPersistPublicKey()
              ),
              dj(this, "fetchAndPersistPublicKey", async () => {
                if (this.fetchPromise)
                  return await this.fetchPromise, this.publicKey;
                this.fetchPromise = new Promise(async (e) => {
                  let t = await this.fetchPublicKey();
                  t && (await this.persistPublicKey(t), e(t));
                });
                let e = await this.fetchPromise;
                return (this.fetchPromise = void 0), e;
              }),
              dj(this, "validateAttestation", (e, t) => {
                let i = (function (e, t) {
                    let [i, s, n] = e.split("."),
                      o = r.Buffer.from(ln(n), "base64");
                    if (64 !== o.length)
                      throw Error("Invalid signature length");
                    let a = o.slice(0, 32),
                      c = o.slice(32, 64),
                      l = oV("".concat(i, ".").concat(s)),
                      h = (function (e) {
                        let t = r.Buffer.from(e.x, "base64"),
                          i = r.Buffer.from(e.y, "base64");
                        return rT([new Uint8Array([4]), t, i]);
                      })(t);
                    if (!c8.verify(rT([a, c]), l, h))
                      throw Error("Invalid signature");
                    return ih(e).payload;
                  })(e, t.publicKey),
                  s = {
                    hasExpired: (0, o.toMiliseconds)(i.exp) < Date.now(),
                    payload: i,
                  };
                if (s.hasExpired)
                  throw (
                    (this.logger.warn("resolve: jwt attestation expired"),
                    Error("JWT attestation expired"))
                  );
                return {
                  origin: s.payload.origin,
                  isScam: s.payload.isScam,
                  isVerified: s.payload.isVerified,
                };
              }),
              (this.logger = (0, L.generateChildLogger)(t, this.name)),
              (this.abortController = new AbortController()),
              (this.isDevEnv = nT()),
              this.init();
          }
        }
        var dq = Object.defineProperty,
          dM = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? dq(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class dz extends Q {
          constructor(e, t) {
            super(e, t),
              (this.projectId = e),
              (this.logger = t),
              dM(this, "context", "echo"),
              dM(this, "registerDeviceToken", async (e) => {
                let {
                    clientId: t,
                    token: i,
                    notificationType: r,
                    enableEncrypted: s = !1,
                  } = e,
                  n = ""
                    .concat("https://echo.walletconnect.com", "/")
                    .concat(this.projectId, "/clients");
                await fetch(n, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    client_id: t,
                    type: r,
                    token: i,
                    always_raw: s,
                  }),
                });
              }),
              (this.logger = (0, L.generateChildLogger)(t, this.context));
          }
        }
        var dF = Object.defineProperty,
          dH = Object.getOwnPropertySymbols,
          dV = Object.prototype.hasOwnProperty,
          dK = Object.prototype.propertyIsEnumerable,
          dW = (e, t, i) =>
            t in e
              ? dF(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          dG = (e, t) => {
            for (var i in t || (t = {})) dV.call(t, i) && dW(e, i, t[i]);
            if (dH) for (var i of dH(t)) dK.call(t, i) && dW(e, i, t[i]);
            return e;
          },
          dY = (e, t, i) => dW(e, "symbol" != typeof t ? t + "" : t, i);
        class dJ extends $ {
          get storageKey() {
            return (
              this.storagePrefix +
              this.storageVersion +
              this.core.customStoragePrefix +
              "//" +
              this.context
            );
          }
          constructor(e, t, i = !0) {
            super(e, t, i),
              (this.core = e),
              (this.logger = t),
              dY(this, "context", "event-client"),
              dY(this, "storagePrefix", hy),
              dY(this, "storageVersion", 0.1),
              dY(this, "events", new Map()),
              dY(this, "shouldPersist", !1),
              dY(this, "init", async () => {
                if (!nT())
                  try {
                    let e = {
                      eventId: nC(),
                      timestamp: Date.now(),
                      domain: this.getAppDomain(),
                      props: {
                        event: "INIT",
                        type: "",
                        properties: {
                          client_id: await this.core.crypto.getClientId(),
                          user_agent: ng(
                            this.core.relayer.protocol,
                            this.core.relayer.version,
                            hD
                          ),
                        },
                      },
                    };
                    await this.sendEvent([e]);
                  } catch (e) {
                    this.logger.warn(e);
                  }
              }),
              dY(this, "createEvent", (e) => {
                let {
                    event: t = "ERROR",
                    type: i = "",
                    properties: { topic: r, trace: s },
                  } = e,
                  n = nC(),
                  o = this.core.projectId || "",
                  a = dG(
                    {
                      eventId: n,
                      timestamp: Date.now(),
                      props: {
                        event: t,
                        type: i,
                        properties: { topic: r, trace: s },
                      },
                      bundleId: o,
                      domain: this.getAppDomain(),
                    },
                    this.setMethods(n)
                  );
                return (
                  this.telemetryEnabled &&
                    (this.events.set(n, a), (this.shouldPersist = !0)),
                  a
                );
              }),
              dY(this, "getEvent", (e) => {
                let { eventId: t, topic: i } = e;
                if (t) return this.events.get(t);
                let r = Array.from(this.events.values()).find(
                  (e) => e.props.properties.topic === i
                );
                if (r) return dG(dG({}, r), this.setMethods(r.eventId));
              }),
              dY(this, "deleteEvent", (e) => {
                let { eventId: t } = e;
                this.events.delete(t), (this.shouldPersist = !0);
              }),
              dY(this, "setEventListeners", () => {
                this.core.heartbeat.on(h.pulse, async () => {
                  this.shouldPersist && (await this.persist()),
                    this.events.forEach((e) => {
                      (0, o.fromMiliseconds)(Date.now()) -
                        (0, o.fromMiliseconds)(e.timestamp) >
                        86400 &&
                        (this.events.delete(e.eventId),
                        (this.shouldPersist = !0));
                    });
                });
              }),
              dY(this, "setMethods", (e) => ({
                addTrace: (t) => this.addTrace(e, t),
                setError: (t) => this.setError(e, t),
              })),
              dY(this, "addTrace", (e, t) => {
                let i = this.events.get(e);
                i &&
                  (i.props.properties.trace.push(t),
                  this.events.set(e, i),
                  (this.shouldPersist = !0));
              }),
              dY(this, "setError", (e, t) => {
                let i = this.events.get(e);
                i &&
                  ((i.props.type = t),
                  (i.timestamp = Date.now()),
                  this.events.set(e, i),
                  (this.shouldPersist = !0));
              }),
              dY(this, "persist", async () => {
                await this.core.storage.setItem(
                  this.storageKey,
                  Array.from(this.events.values())
                ),
                  (this.shouldPersist = !1);
              }),
              dY(this, "restore", async () => {
                try {
                  let e =
                    (await this.core.storage.getItem(this.storageKey)) || [];
                  if (!e.length) return;
                  e.forEach((e) => {
                    this.events.set(
                      e.eventId,
                      dG(dG({}, e), this.setMethods(e.eventId))
                    );
                  });
                } catch (e) {
                  this.logger.warn(e);
                }
              }),
              dY(this, "submit", async () => {
                if (!this.telemetryEnabled || 0 === this.events.size) return;
                let e = [];
                for (let [t, i] of this.events) i.props.type && e.push(i);
                if (0 !== e.length)
                  try {
                    if ((await this.sendEvent(e)).ok)
                      for (let t of e)
                        this.events.delete(t.eventId),
                          (this.shouldPersist = !0);
                  } catch (e) {
                    this.logger.warn(e);
                  }
              }),
              dY(this, "sendEvent", async (e) => {
                let t = this.getAppDomain() ? "" : "&sp=desktop";
                return await fetch(
                  ""
                    .concat(
                      "https://pulse.walletconnect.org/batch",
                      "?projectId="
                    )
                    .concat(this.core.projectId, "&st=events_sdk&sv=js-")
                    .concat(hD)
                    .concat(t),
                  { method: "POST", body: JSON.stringify(e) }
                );
              }),
              dY(this, "getAppDomain", () => np().url),
              (this.logger = (0, L.generateChildLogger)(t, this.context)),
              (this.telemetryEnabled = i),
              i
                ? this.restore().then(async () => {
                    await this.submit(), this.setEventListeners();
                  })
                : this.persist();
          }
        }
        var dZ = Object.defineProperty,
          dX = Object.getOwnPropertySymbols,
          dQ = Object.prototype.hasOwnProperty,
          d$ = Object.prototype.propertyIsEnumerable,
          d0 = (e, t, i) =>
            t in e
              ? dZ(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          d1 = (e, t) => {
            for (var i in t || (t = {})) dQ.call(t, i) && d0(e, i, t[i]);
            if (dX) for (var i of dX(t)) d$.call(t, i) && d0(e, i, t[i]);
            return e;
          },
          d2 = (e, t, i) => d0(e, "symbol" != typeof t ? t + "" : t, i);
        class d8 extends F {
          static async init(e) {
            let t = new d8(e);
            await t.initialize();
            let i = await t.crypto.getClientId();
            return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", i), t;
          }
          get context() {
            return (0, L.getLoggerContext)(this.logger);
          }
          async start() {
            this.initialized || (await this.initialize());
          }
          async getLogsBlob() {
            var e;
            return null == (e = this.logChunkController)
              ? void 0
              : e.logsToBlob({ clientId: await this.crypto.getClientId() });
          }
          async addLinkModeSupportedApp(e) {
            this.linkModeSupportedApps.includes(e) ||
              (this.linkModeSupportedApps.push(e),
              await this.storage.setItem(hA, this.linkModeSupportedApps));
          }
          async initialize() {
            this.logger.trace("Initialized");
            try {
              await this.crypto.init(),
                await this.history.init(),
                await this.expirer.init(),
                await this.relayer.init(),
                await this.heartbeat.init(),
                await this.pairing.init(),
                (this.linkModeSupportedApps =
                  (await this.storage.getItem(hA)) || []),
                (this.initialized = !0),
                this.logger.info("Core Initialization Success");
            } catch (e) {
              throw (
                (this.logger.warn(
                  "Core Initialization Failure at epoch ".concat(Date.now()),
                  e
                ),
                this.logger.error(e.message),
                e)
              );
            }
          }
          getGlobalCore() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            try {
              if (this.isGlobalCoreDisabled()) return;
              let t = "_walletConnectCore_".concat(e),
                i = "".concat(t, "_count");
              return (
                (globalThis[i] = (globalThis[i] || 0) + 1),
                globalThis[i] > 1 &&
                  console.warn(
                    "WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ".concat(
                      globalThis[i],
                      " times."
                    )
                  ),
                globalThis[t]
              );
            } catch (e) {
              console.warn("Failed to get global WalletConnect core", e);
              return;
            }
          }
          setGlobalCore(e) {
            var t;
            try {
              if (this.isGlobalCoreDisabled()) return;
              let i = "_walletConnectCore_".concat(
                (null == (t = e.opts) ? void 0 : t.customStoragePrefix) || ""
              );
              globalThis[i] = e;
            } catch (e) {
              console.warn("Failed to set global WalletConnect core", e);
            }
          }
          isGlobalCoreDisabled() {
            try {
              return (
                "u" > typeof s.default &&
                "true" === s.default.env.DISABLE_GLOBAL_CORE
              );
            } catch (e) {
              return !0;
            }
          }
          constructor(e) {
            var t;
            super(e),
              d2(this, "protocol", "wc"),
              d2(this, "version", 2),
              d2(this, "name", hg),
              d2(this, "relayUrl"),
              d2(this, "projectId"),
              d2(this, "customStoragePrefix"),
              d2(this, "events", new n.EventEmitter()),
              d2(this, "logger"),
              d2(this, "heartbeat"),
              d2(this, "relayer"),
              d2(this, "crypto"),
              d2(this, "storage"),
              d2(this, "history"),
              d2(this, "expirer"),
              d2(this, "pairing"),
              d2(this, "verify"),
              d2(this, "echoClient"),
              d2(this, "linkModeSupportedApps"),
              d2(this, "eventClient"),
              d2(this, "initialized", !1),
              d2(this, "logChunkController"),
              d2(this, "on", (e, t) => this.events.on(e, t)),
              d2(this, "once", (e, t) => this.events.once(e, t)),
              d2(this, "off", (e, t) => this.events.off(e, t)),
              d2(this, "removeListener", (e, t) =>
                this.events.removeListener(e, t)
              ),
              d2(this, "dispatchEnvelope", (e) => {
                let { topic: t, message: i, sessionExists: r } = e;
                if (!t || !i) return;
                let s = {
                  topic: t,
                  message: i,
                  publishedAt: Date.now(),
                  transportType: hS.link_mode,
                };
                this.relayer.onLinkMessageEvent(s, { sessionExists: r });
              });
            let i = this.getGlobalCore(
              null == e ? void 0 : e.customStoragePrefix
            );
            if (i)
              try {
                return (
                  (this.customStoragePrefix = i.customStoragePrefix),
                  (this.logger = i.logger),
                  (this.heartbeat = i.heartbeat),
                  (this.crypto = i.crypto),
                  (this.history = i.history),
                  (this.expirer = i.expirer),
                  (this.storage = i.storage),
                  (this.relayer = i.relayer),
                  (this.pairing = i.pairing),
                  (this.verify = i.verify),
                  (this.echoClient = i.echoClient),
                  (this.linkModeSupportedApps = i.linkModeSupportedApps),
                  (this.eventClient = i.eventClient),
                  (this.initialized = i.initialized),
                  (this.logChunkController = i.logChunkController),
                  i
                );
              } catch (e) {
                console.warn("Failed to copy global core", e);
              }
            (this.projectId = null == e ? void 0 : e.projectId),
              (this.relayUrl = (null == e ? void 0 : e.relayUrl) || hx),
              (this.customStoragePrefix =
                null != e && e.customStoragePrefix
                  ? ":".concat(e.customStoragePrefix)
                  : "");
            let r = (0, L.getDefaultLoggerOptions)({
                level:
                  "string" == typeof (null == e ? void 0 : e.logger) && e.logger
                    ? e.logger
                    : hb.logger,
                name: hg,
              }),
              { logger: s, chunkLoggerController: o } = (0,
              L.generatePlatformLogger)({
                opts: r,
                maxSizeInBytes: null == e ? void 0 : e.maxLogBlobSizeInBytes,
                loggerOverride: null == e ? void 0 : e.logger,
              });
            (this.logChunkController = o),
              null != (t = this.logChunkController) &&
                t.downloadLogsBlobInBrowser &&
                (window.downloadLogsBlobInBrowser = async () => {
                  var e, t;
                  null != (e = this.logChunkController) &&
                    e.downloadLogsBlobInBrowser &&
                    (null == (t = this.logChunkController) ||
                      t.downloadLogsBlobInBrowser({
                        clientId: await this.crypto.getClientId(),
                      }));
                }),
              (this.logger = (0, L.generateChildLogger)(s, this.name)),
              (this.heartbeat = new u()),
              (this.crypto = new uU(
                this,
                this.logger,
                null == e ? void 0 : e.keychain
              )),
              (this.history = new dN(this, this.logger)),
              (this.expirer = new dB(this, this.logger)),
              (this.storage =
                null != e && e.storage
                  ? e.storage
                  : new j(
                      d1(d1({}, hm), null == e ? void 0 : e.storageOptions)
                    )),
              (this.relayer = new dd({
                core: this,
                logger: this.logger,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
              })),
              (this.pairing = new dO(this, this.logger)),
              (this.verify = new dL(this, this.logger, this.storage)),
              (this.echoClient = new dz(this.projectId || "", this.logger)),
              (this.linkModeSupportedApps = []),
              (this.eventClient = new dJ(
                this,
                this.logger,
                null == e ? void 0 : e.telemetryEnabled
              )),
              this.setGlobalCore(this);
          }
        }
        var q = q;
        let d3 = "client",
          d6 = "".concat("wc", "@").concat(2, ":").concat(d3, ":"),
          d5 = { name: d3, logger: "error" },
          d4 = "WALLETCONNECT_DEEPLINK_CHOICE",
          d9 = (o.THIRTY_DAYS, "Proposal expired"),
          d7 = o.SEVEN_DAYS,
          fe = {
            wc_sessionPropose: {
              req: { ttl: o.FIVE_MINUTES, prompt: !0, tag: 1100 },
              res: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1101 },
              reject: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1120 },
              autoReject: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1121 },
            },
            wc_sessionSettle: {
              req: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1102 },
              res: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1103 },
            },
            wc_sessionUpdate: {
              req: { ttl: o.ONE_DAY, prompt: !1, tag: 1104 },
              res: { ttl: o.ONE_DAY, prompt: !1, tag: 1105 },
            },
            wc_sessionExtend: {
              req: { ttl: o.ONE_DAY, prompt: !1, tag: 1106 },
              res: { ttl: o.ONE_DAY, prompt: !1, tag: 1107 },
            },
            wc_sessionRequest: {
              req: { ttl: o.FIVE_MINUTES, prompt: !0, tag: 1108 },
              res: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1109 },
            },
            wc_sessionEvent: {
              req: { ttl: o.FIVE_MINUTES, prompt: !0, tag: 1110 },
              res: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1111 },
            },
            wc_sessionDelete: {
              req: { ttl: o.ONE_DAY, prompt: !1, tag: 1112 },
              res: { ttl: o.ONE_DAY, prompt: !1, tag: 1113 },
            },
            wc_sessionPing: {
              req: { ttl: o.ONE_DAY, prompt: !1, tag: 1114 },
              res: { ttl: o.ONE_DAY, prompt: !1, tag: 1115 },
            },
            wc_sessionAuthenticate: {
              req: { ttl: o.ONE_HOUR, prompt: !0, tag: 1116 },
              res: { ttl: o.ONE_HOUR, prompt: !1, tag: 1117 },
              reject: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1118 },
              autoReject: { ttl: o.FIVE_MINUTES, prompt: !1, tag: 1119 },
            },
          },
          ft = { min: o.FIVE_MINUTES, max: o.SEVEN_DAYS },
          fi = { idle: "IDLE", active: "ACTIVE" },
          fr = {
            eth_sendTransaction: { key: "" },
            eth_sendRawTransaction: { key: "" },
            wallet_sendCalls: { key: "" },
            solana_signTransaction: { key: "signature" },
            solana_signAllTransactions: { key: "transactions" },
            solana_signAndSendTransaction: { key: "signature" },
            sui_signAndExecuteTransaction: { key: "digest" },
            sui_signTransaction: { key: "" },
            hedera_signAndExecuteTransaction: { key: "transactionId" },
            hedera_executeTransaction: { key: "transactionId" },
            near_signTransaction: { key: "" },
            near_signTransactions: { key: "" },
            tron_signTransaction: { key: "txID" },
            xrpl_signTransaction: { key: "" },
            xrpl_signTransactionFor: { key: "" },
            algo_signTxn: { key: "" },
            sendTransfer: { key: "txid" },
            stacks_stxTransfer: { key: "txId" },
            polkadot_signTransaction: { key: "" },
            cosmos_signDirect: { key: "" },
          },
          fs = [
            "wc_sessionPropose",
            "wc_sessionRequest",
            "wc_authRequest",
            "wc_sessionAuthenticate",
          ],
          fn = "".concat("wc", "@", 1.5, ":").concat("auth", ":"),
          fo = "".concat(fn, ":PUB_KEY");
        var fa = Object.defineProperty,
          fc = Object.defineProperties,
          fl = Object.getOwnPropertyDescriptors,
          fh = Object.getOwnPropertySymbols,
          fu = Object.prototype.hasOwnProperty,
          fd = Object.prototype.propertyIsEnumerable,
          ff = (e, t, i) =>
            t in e
              ? fa(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          fp = (e, t) => {
            for (var i in t || (t = {})) fu.call(t, i) && ff(e, i, t[i]);
            if (fh) for (var i of fh(t)) fd.call(t, i) && ff(e, i, t[i]);
            return e;
          },
          fg = (e, t) => fc(e, fl(t)),
          fy = (e, t, i) => ff(e, "symbol" != typeof t ? t + "" : t, i);
        class fb extends er {
          async processPendingMessageEvents() {
            try {
              let e = this.client.session.keys,
                t = this.client.core.relayer.messages.getWithoutAck(e);
              for (let [e, i] of Object.entries(t))
                for (let t of i)
                  try {
                    await this.onProviderMessageEvent({
                      topic: e,
                      message: t,
                      publishedAt: Date.now(),
                    });
                  } catch (i) {
                    this.client.logger.warn(
                      "Error processing pending message event for topic: "
                        .concat(e, ", message: ")
                        .concat(t)
                    );
                  }
            } catch (e) {
              this.client.logger.warn("processPendingMessageEvents failed", e);
            }
          }
          isInitialized() {
            if (!this.initialized) {
              let { message: e } = lT("NOT_INITIALIZED", this.name);
              throw Error(e);
            }
          }
          async confirmOnlineStateOrThrow() {
            await this.client.core.relayer.confirmOnlineStateOrThrow();
          }
          registerRelayerEvents() {
            this.client.core.relayer.on(hI.message, (e) => {
              this.onProviderMessageEvent(e);
            });
          }
          async onRelayMessage(e) {
            let { topic: t, message: i, attestation: r, transportType: s } = e,
              { publicKey: n } = this.client.auth.authKeys.keys.includes(fo)
                ? this.client.auth.authKeys.get(fo)
                : { responseTopic: void 0, publicKey: void 0 };
            try {
              let e = await this.client.core.crypto.decode(t, i, {
                receiverPublicKey: n,
                encoding: s === hS.link_mode ? c4 : c5,
              });
              ha(e)
                ? (this.client.core.history.set(t, e),
                  await this.onRelayEventRequest({
                    topic: t,
                    payload: e,
                    attestation: r,
                    transportType: s,
                    encryptedId: lt(i),
                  }))
                : hc(e)
                ? (await this.client.core.history.resolve(e),
                  await this.onRelayEventResponse({
                    topic: t,
                    payload: e,
                    transportType: s,
                  }),
                  this.client.core.history.delete(t, e.id))
                : await this.onRelayEventUnknownPayload({
                    topic: t,
                    payload: e,
                    transportType: s,
                  }),
                await this.client.core.relayer.messages.ack(t, i);
            } catch (e) {
              this.client.logger.error(e);
            }
          }
          registerExpirerEvents() {
            this.client.core.expirer.on(hU.expired, async (e) => {
              let { topic: t, id: i } = nx(e.target);
              return i && this.client.pendingRequest.keys.includes(i)
                ? await this.deletePendingSessionRequest(i, lT("EXPIRED"), !0)
                : i && this.client.auth.requests.keys.includes(i)
                ? await this.deletePendingAuthRequest(i, lT("EXPIRED"), !0)
                : void (t
                    ? this.client.session.keys.includes(t) &&
                      (await this.deleteSession({
                        topic: t,
                        expirerHasDeleted: !0,
                      }),
                      this.client.events.emit("session_expire", { topic: t }))
                    : i &&
                      (await this.deleteProposal(i, !0),
                      this.client.events.emit("proposal_expire", { id: i })));
            });
          }
          registerPairingEvents() {
            this.client.core.pairing.events.on(hT.create, (e) =>
              this.onPairingCreated(e)
            ),
              this.client.core.pairing.events.on(hT.delete, (e) => {
                this.addToRecentlyDeleted(e.topic, "pairing");
              });
          }
          isValidPairingTopic(e) {
            if (!lk(e, !1)) {
              let { message: t } = lT(
                "MISSING_OR_INVALID",
                "pairing topic should be a string: ".concat(e)
              );
              throw Error(t);
            }
            if (!this.client.core.pairing.pairings.keys.includes(e)) {
              let { message: t } = lT(
                "NO_MATCHING_KEY",
                "pairing topic doesn't exist: ".concat(e)
              );
              throw Error(t);
            }
            if (n_(this.client.core.pairing.pairings.get(e).expiry)) {
              let { message: t } = lT("EXPIRED", "pairing topic: ".concat(e));
              throw Error(t);
            }
          }
          async isValidSessionTopic(e) {
            if (!lk(e, !1)) {
              let { message: t } = lT(
                "MISSING_OR_INVALID",
                "session topic should be a string: ".concat(e)
              );
              throw Error(t);
            }
            if (
              (this.checkRecentlyDeleted(e),
              !this.client.session.keys.includes(e))
            ) {
              let { message: t } = lT(
                "NO_MATCHING_KEY",
                "session topic doesn't exist: ".concat(e)
              );
              throw Error(t);
            }
            if (n_(this.client.session.get(e).expiry)) {
              await this.deleteSession({ topic: e });
              let { message: t } = lT("EXPIRED", "session topic: ".concat(e));
              throw Error(t);
            }
            if (!this.client.core.crypto.keychain.has(e)) {
              let { message: t } = lT(
                "MISSING_OR_INVALID",
                "session topic does not exist in keychain: ".concat(e)
              );
              throw (await this.deleteSession({ topic: e }), Error(t));
            }
          }
          async isValidSessionOrPairingTopic(e) {
            if (
              (this.checkRecentlyDeleted(e),
              this.client.session.keys.includes(e))
            )
              await this.isValidSessionTopic(e);
            else if (this.client.core.pairing.pairings.keys.includes(e))
              this.isValidPairingTopic(e);
            else if (lk(e, !1)) {
              let { message: t } = lT(
                "NO_MATCHING_KEY",
                "session or pairing topic doesn't exist: ".concat(e)
              );
              throw Error(t);
            } else {
              let { message: t } = lT(
                "MISSING_OR_INVALID",
                "session or pairing topic should be a string: ".concat(e)
              );
              throw Error(t);
            }
          }
          async isValidProposalId(e) {
            if ("number" != typeof e) {
              let { message: t } = lT(
                "MISSING_OR_INVALID",
                "proposal id should be a number: ".concat(e)
              );
              throw Error(t);
            }
            if (!this.client.proposal.keys.includes(e)) {
              let { message: t } = lT(
                "NO_MATCHING_KEY",
                "proposal id doesn't exist: ".concat(e)
              );
              throw Error(t);
            }
            if (n_(this.client.proposal.get(e).expiryTimestamp)) {
              await this.deleteProposal(e);
              let { message: t } = lT("EXPIRED", "proposal id: ".concat(e));
              throw Error(t);
            }
          }
          constructor(e) {
            var t;
            super(e),
              (t = this),
              fy(this, "name", "engine"),
              fy(this, "events", new n.default()),
              fy(this, "initialized", !1),
              fy(this, "requestQueue", { state: fi.idle, queue: [] }),
              fy(this, "sessionRequestQueue", { state: fi.idle, queue: [] }),
              fy(this, "requestQueueDelay", o.ONE_SECOND),
              fy(this, "expectedPairingMethodMap", new Map()),
              fy(this, "recentlyDeletedMap", new Map()),
              fy(this, "recentlyDeletedLimit", 200),
              fy(this, "relayMessageCache", []),
              fy(this, "pendingSessions", new Map()),
              fy(this, "init", async () => {
                this.initialized ||
                  (await this.cleanup(),
                  this.registerRelayerEvents(),
                  this.registerExpirerEvents(),
                  this.registerPairingEvents(),
                  await this.registerLinkModeListeners(),
                  this.client.core.pairing.register({
                    methods: Object.keys(fe),
                  }),
                  (this.initialized = !0),
                  setTimeout(async () => {
                    await this.processPendingMessageEvents(),
                      (this.sessionRequestQueue.queue =
                        this.getPendingSessionRequests()),
                      this.processSessionRequestQueue();
                  }, (0, o.toMiliseconds)(this.requestQueueDelay)));
              }),
              fy(this, "connect", async (e) => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                let t = fg(fp({}, e), {
                  requiredNamespaces: e.requiredNamespaces || {},
                  optionalNamespaces: e.optionalNamespaces || {},
                });
                await this.isValidConnect(t),
                  (t.optionalNamespaces = (function (e, t) {
                    var i, r, s, n, o, a;
                    let c = lP(e),
                      l = lP(t),
                      h = {};
                    for (let e of Object.keys(c).concat(Object.keys(l)))
                      h[e] = {
                        chains: nS(
                          null == (i = c[e]) ? void 0 : i.chains,
                          null == (r = l[e]) ? void 0 : r.chains
                        ),
                        methods: nS(
                          null == (s = c[e]) ? void 0 : s.methods,
                          null == (n = l[e]) ? void 0 : n.methods
                        ),
                        events: nS(
                          null == (o = c[e]) ? void 0 : o.events,
                          null == (a = l[e]) ? void 0 : a.events
                        ),
                      };
                    return h;
                  })(t.requiredNamespaces, t.optionalNamespaces)),
                  (t.requiredNamespaces = {});
                let {
                    pairingTopic: i,
                    requiredNamespaces: r,
                    optionalNamespaces: s,
                    sessionProperties: n,
                    scopedProperties: a,
                    relays: c,
                  } = t,
                  l = i,
                  h,
                  u = !1;
                try {
                  if (l) {
                    let e = this.client.core.pairing.pairings.get(l);
                    this.client.logger.warn(
                      "connect() with existing pairing topic is deprecated and will be removed in the next major release."
                    ),
                      (u = e.active);
                  }
                } catch (e) {
                  throw (
                    (this.client.logger.error(
                      "connect() -> pairing.get(".concat(l, ") failed")
                    ),
                    e)
                  );
                }
                if (!l || !u) {
                  let { topic: e, uri: t } =
                    await this.client.core.pairing.create();
                  (l = e), (h = t);
                }
                if (!l) {
                  let { message: e } = lT(
                    "NO_MATCHING_KEY",
                    "connect() pairing topic: ".concat(l)
                  );
                  throw Error(e);
                }
                let d = await this.client.core.crypto.generateKeyPair(),
                  f = fe.wc_sessionPropose.req.ttl || o.FIVE_MINUTES,
                  p = nI(f),
                  g = fg(
                    fp(
                      fp(
                        {
                          requiredNamespaces: r,
                          optionalNamespaces: s,
                          relays: null != c ? c : [{ protocol: "irn" }],
                          proposer: {
                            publicKey: d,
                            metadata: this.client.metadata,
                          },
                          expiryTimestamp: p,
                          pairingTopic: l,
                        },
                        n && { sessionProperties: n }
                      ),
                      a && { scopedProperties: a }
                    ),
                    { id: l6() }
                  ),
                  y = nD("session_connect", g.id),
                  { reject: b, resolve: m, done: v } = nv(f, d9),
                  w = (e) => {
                    let { id: t } = e;
                    t === g.id &&
                      (this.client.events.off("proposal_expire", w),
                      this.pendingSessions.delete(g.id),
                      this.events.emit(y, { error: { message: d9, code: 0 } }));
                  };
                return (
                  this.client.events.on("proposal_expire", w),
                  this.events.once(y, (e) => {
                    let { error: t, session: i } = e;
                    this.client.events.off("proposal_expire", w),
                      t ? b(t) : i && m(i);
                  }),
                  await this.sendRequest({
                    topic: l,
                    method: "wc_sessionPropose",
                    params: g,
                    throwOnFailedPublish: !0,
                    clientRpcId: g.id,
                  }),
                  await this.setProposal(g.id, g),
                  { uri: h, approval: v }
                );
              }),
              fy(this, "pair", async (e) => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                try {
                  return await this.client.core.pairing.pair(e);
                } catch (e) {
                  throw (this.client.logger.error("pair() failed"), e);
                }
              }),
              fy(this, "approve", async (e) => {
                var t, i, r;
                let s = this.client.core.eventClient.createEvent({
                  properties: {
                    topic:
                      null == (t = null == e ? void 0 : e.id)
                        ? void 0
                        : t.toString(),
                    trace: [hq.session_approve_started],
                  },
                });
                try {
                  this.isInitialized(), await this.confirmOnlineStateOrThrow();
                } catch (e) {
                  throw (s.setError(hM.no_internet_connection), e);
                }
                try {
                  await this.isValidProposalId(null == e ? void 0 : e.id);
                } catch (t) {
                  throw (
                    (this.client.logger.error(
                      "approve() -> proposal.get(".concat(
                        null == e ? void 0 : e.id,
                        ") failed"
                      )
                    ),
                    s.setError(hM.proposal_not_found),
                    t)
                  );
                }
                try {
                  await this.isValidApprove(e);
                } catch (e) {
                  throw (
                    (this.client.logger.error(
                      "approve() -> isValidApprove() failed"
                    ),
                    s.setError(hM.session_approve_namespace_validation_failure),
                    e)
                  );
                }
                let {
                    id: n,
                    relayProtocol: o,
                    namespaces: a,
                    sessionProperties: c,
                    scopedProperties: l,
                    sessionConfig: h,
                  } = e,
                  u = this.client.proposal.get(n);
                this.client.core.eventClient.deleteEvent({
                  eventId: s.eventId,
                });
                let {
                    pairingTopic: d,
                    proposer: f,
                    requiredNamespaces: p,
                    optionalNamespaces: g,
                  } = u,
                  y =
                    null == (i = this.client.core.eventClient)
                      ? void 0
                      : i.getEvent({ topic: d });
                y ||
                  (y =
                    null == (r = this.client.core.eventClient)
                      ? void 0
                      : r.createEvent({
                          type: hq.session_approve_started,
                          properties: {
                            topic: d,
                            trace: [
                              hq.session_approve_started,
                              hq.session_namespaces_validation_success,
                            ],
                          },
                        }));
                let b = await this.client.core.crypto.generateKeyPair(),
                  m = f.publicKey,
                  v = await this.client.core.crypto.generateSharedKey(b, m),
                  w = fp(
                    fp(
                      fp(
                        {
                          relay: { protocol: null != o ? o : "irn" },
                          namespaces: a,
                          controller: {
                            publicKey: b,
                            metadata: this.client.metadata,
                          },
                          expiry: nI(d7),
                        },
                        c && { sessionProperties: c }
                      ),
                      l && { scopedProperties: l }
                    ),
                    h && { sessionConfig: h }
                  ),
                  E = hS.relay;
                y.addTrace(hq.subscribing_session_topic);
                try {
                  await this.client.core.relayer.subscribe(v, {
                    transportType: E,
                  });
                } catch (e) {
                  throw (y.setError(hM.subscribe_session_topic_failure), e);
                }
                y.addTrace(hq.subscribe_session_topic_success);
                let x = fg(fp({}, w), {
                  topic: v,
                  requiredNamespaces: p,
                  optionalNamespaces: g,
                  pairingTopic: d,
                  acknowledged: !1,
                  self: w.controller,
                  peer: { publicKey: f.publicKey, metadata: f.metadata },
                  controller: b,
                  transportType: hS.relay,
                });
                await this.client.session.set(v, x),
                  y.addTrace(hq.store_session);
                try {
                  y.addTrace(hq.publishing_session_settle),
                    await this.sendRequest({
                      topic: v,
                      method: "wc_sessionSettle",
                      params: w,
                      throwOnFailedPublish: !0,
                    }).catch((e) => {
                      throw (
                        (null == y ||
                          y.setError(hM.session_settle_publish_failure),
                        e)
                      );
                    }),
                    y.addTrace(hq.session_settle_publish_success),
                    y.addTrace(hq.publishing_session_approve),
                    await this.sendResult({
                      id: n,
                      topic: d,
                      result: {
                        relay: { protocol: null != o ? o : "irn" },
                        responderPublicKey: b,
                      },
                      throwOnFailedPublish: !0,
                    }).catch((e) => {
                      throw (
                        (null == y ||
                          y.setError(hM.session_approve_publish_failure),
                        e)
                      );
                    }),
                    y.addTrace(hq.session_approve_publish_success);
                } catch (e) {
                  throw (
                    (this.client.logger.error(e),
                    this.client.session.delete(v, lN("USER_DISCONNECTED")),
                    await this.client.core.relayer.unsubscribe(v),
                    e)
                  );
                }
                return (
                  this.client.core.eventClient.deleteEvent({
                    eventId: y.eventId,
                  }),
                  await this.client.core.pairing.updateMetadata({
                    topic: d,
                    metadata: f.metadata,
                  }),
                  await this.deleteProposal(n),
                  await this.client.core.pairing.activate({ topic: d }),
                  await this.setExpiry(v, nI(d7)),
                  {
                    topic: v,
                    acknowledged: () =>
                      Promise.resolve(this.client.session.get(v)),
                  }
                );
              }),
              fy(this, "reject", async (e) => {
                let t;
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                try {
                  await this.isValidReject(e);
                } catch (e) {
                  throw (
                    (this.client.logger.error(
                      "reject() -> isValidReject() failed"
                    ),
                    e)
                  );
                }
                let { id: i, reason: r } = e;
                try {
                  t = this.client.proposal.get(i).pairingTopic;
                } catch (e) {
                  throw (
                    (this.client.logger.error(
                      "reject() -> proposal.get(".concat(i, ") failed")
                    ),
                    e)
                  );
                }
                t &&
                  (await this.sendError({
                    id: i,
                    topic: t,
                    error: r,
                    rpcOpts: fe.wc_sessionPropose.reject,
                  })),
                  await this.deleteProposal(i);
              }),
              fy(this, "update", async (e) => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                try {
                  await this.isValidUpdate(e);
                } catch (e) {
                  throw (
                    (this.client.logger.error(
                      "update() -> isValidUpdate() failed"
                    ),
                    e)
                  );
                }
                let { topic: t, namespaces: i } = e,
                  { done: r, resolve: s, reject: n } = nv(),
                  o = l6(),
                  a = l5().toString(),
                  c = this.client.session.get(t).namespaces;
                return (
                  this.events.once(nD("session_update", o), (e) => {
                    let { error: t } = e;
                    t ? n(t) : s();
                  }),
                  await this.client.session.update(t, { namespaces: i }),
                  await this.sendRequest({
                    topic: t,
                    method: "wc_sessionUpdate",
                    params: { namespaces: i },
                    throwOnFailedPublish: !0,
                    clientRpcId: o,
                    relayRpcId: a,
                  }).catch((e) => {
                    this.client.logger.error(e),
                      this.client.session.update(t, { namespaces: c }),
                      n(e);
                  }),
                  { acknowledged: r }
                );
              }),
              fy(this, "extend", async (e) => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                try {
                  await this.isValidExtend(e);
                } catch (e) {
                  throw (
                    (this.client.logger.error(
                      "extend() -> isValidExtend() failed"
                    ),
                    e)
                  );
                }
                let { topic: t } = e,
                  i = l6(),
                  { done: r, resolve: s, reject: n } = nv();
                return (
                  this.events.once(nD("session_extend", i), (e) => {
                    let { error: t } = e;
                    t ? n(t) : s();
                  }),
                  await this.setExpiry(t, nI(d7)),
                  this.sendRequest({
                    topic: t,
                    method: "wc_sessionExtend",
                    params: {},
                    clientRpcId: i,
                    throwOnFailedPublish: !0,
                  }).catch((e) => {
                    n(e);
                  }),
                  { acknowledged: r }
                );
              }),
              fy(this, "request", async (e) => {
                this.isInitialized();
                try {
                  await this.isValidRequest(e);
                } catch (e) {
                  throw (
                    (this.client.logger.error(
                      "request() -> isValidRequest() failed"
                    ),
                    e)
                  );
                }
                let {
                    chainId: t,
                    request: i,
                    topic: r,
                    expiry: s = fe.wc_sessionRequest.req.ttl,
                  } = e,
                  n = this.client.session.get(r);
                (null == n ? void 0 : n.transportType) === hS.relay &&
                  (await this.confirmOnlineStateOrThrow());
                let o = l6(),
                  a = l5().toString(),
                  {
                    done: c,
                    resolve: l,
                    reject: h,
                  } = nv(s, "Request expired. Please try again.");
                this.events.once(nD("session_request", o), (e) => {
                  let { error: t, result: i } = e;
                  t ? h(t) : l(i);
                });
                let u = "wc_sessionRequest",
                  d = this.getAppLinkIfEnabled(
                    n.peer.metadata,
                    n.transportType
                  );
                if (d)
                  return (
                    await this.sendRequest({
                      clientRpcId: o,
                      relayRpcId: a,
                      topic: r,
                      method: u,
                      params: {
                        request: fg(fp({}, i), { expiryTimestamp: nI(s) }),
                        chainId: t,
                      },
                      expiry: s,
                      throwOnFailedPublish: !0,
                      appLink: d,
                    }).catch((e) => h(e)),
                    this.client.events.emit("session_request_sent", {
                      topic: r,
                      request: i,
                      chainId: t,
                      id: o,
                    }),
                    await c()
                  );
                let f = {
                  request: fg(fp({}, i), { expiryTimestamp: nI(s) }),
                  chainId: t,
                };
                return await Promise.all([
                  new Promise(async (e) => {
                    await this.sendRequest({
                      clientRpcId: o,
                      relayRpcId: a,
                      topic: r,
                      method: u,
                      params: f,
                      expiry: s,
                      throwOnFailedPublish: !0,
                      tvf: this.getTVFParams(o, f),
                    }).catch((e) => h(e)),
                      this.client.events.emit("session_request_sent", {
                        topic: r,
                        request: i,
                        chainId: t,
                        id: o,
                      }),
                      e();
                  }),
                  new Promise(async (e) => {
                    var t;
                    if (!(null != (t = n.sessionConfig) && t.disableDeepLink)) {
                      let e = await nA(this.client.core.storage, d4);
                      await nP({ id: o, topic: r, wcDeepLink: e });
                    }
                    e();
                  }),
                  c(),
                ]).then((e) => e[2]);
              }),
              fy(this, "respond", async (e) => {
                this.isInitialized(), await this.isValidRespond(e);
                let { topic: t, response: i } = e,
                  { id: r } = i,
                  s = this.client.session.get(t);
                s.transportType === hS.relay &&
                  (await this.confirmOnlineStateOrThrow());
                let n = this.getAppLinkIfEnabled(
                  s.peer.metadata,
                  s.transportType
                );
                hl(i)
                  ? await this.sendResult({
                      id: r,
                      topic: t,
                      result: i.result,
                      throwOnFailedPublish: !0,
                      appLink: n,
                    })
                  : hh(i) &&
                    (await this.sendError({
                      id: r,
                      topic: t,
                      error: i.error,
                      appLink: n,
                    })),
                  this.cleanupAfterResponse(e);
              }),
              fy(this, "ping", async (e) => {
                this.isInitialized(), await this.confirmOnlineStateOrThrow();
                try {
                  await this.isValidPing(e);
                } catch (e) {
                  throw (
                    (this.client.logger.error("ping() -> isValidPing() failed"),
                    e)
                  );
                }
                let { topic: t } = e;
                if (this.client.session.keys.includes(t)) {
                  let e = l6(),
                    i = l5().toString(),
                    { done: r, resolve: s, reject: n } = nv();
                  this.events.once(nD("session_ping", e), (e) => {
                    let { error: t } = e;
                    t ? n(t) : s();
                  }),
                    await Promise.all([
                      this.sendRequest({
                        topic: t,
                        method: "wc_sessionPing",
                        params: {},
                        throwOnFailedPublish: !0,
                        clientRpcId: e,
                        relayRpcId: i,
                      }),
                      r(),
                    ]);
                } else
                  this.client.core.pairing.pairings.keys.includes(t) &&
                    (this.client.logger.warn(
                      "ping() on pairing topic is deprecated and will be removed in the next major release."
                    ),
                    await this.client.core.pairing.ping({ topic: t }));
              }),
              fy(this, "emit", async (e) => {
                this.isInitialized(),
                  await this.confirmOnlineStateOrThrow(),
                  await this.isValidEmit(e);
                let { topic: t, event: i, chainId: r } = e,
                  s = l5().toString(),
                  n = l6();
                await this.sendRequest({
                  topic: t,
                  method: "wc_sessionEvent",
                  params: { event: i, chainId: r },
                  throwOnFailedPublish: !0,
                  relayRpcId: s,
                  clientRpcId: n,
                });
              }),
              fy(this, "disconnect", async (e) => {
                this.isInitialized(),
                  await this.confirmOnlineStateOrThrow(),
                  await this.isValidDisconnect(e);
                let { topic: t } = e;
                if (this.client.session.keys.includes(t))
                  await this.sendRequest({
                    topic: t,
                    method: "wc_sessionDelete",
                    params: lN("USER_DISCONNECTED"),
                    throwOnFailedPublish: !0,
                  }),
                    await this.deleteSession({ topic: t, emitEvent: !1 });
                else if (this.client.core.pairing.pairings.keys.includes(t))
                  await this.client.core.pairing.disconnect({ topic: t });
                else {
                  let { message: e } = lT(
                    "MISMATCHED_TOPIC",
                    "Session or pairing topic not found: ".concat(t)
                  );
                  throw Error(e);
                }
              }),
              fy(
                this,
                "find",
                (e) => (
                  this.isInitialized(),
                  this.client.session.getAll().filter((t) =>
                    (function (e, t) {
                      let { requiredNamespaces: i } = t,
                        r = Object.keys(e.namespaces),
                        s = Object.keys(i),
                        n = !0;
                      return (
                        !!ny(s, r) &&
                        (r.forEach((t) => {
                          let {
                              accounts: r,
                              methods: s,
                              events: o,
                            } = e.namespaces[t],
                            a = l_(r),
                            c = i[t];
                          (ny(s7(t, c), a) &&
                            ny(c.methods, s) &&
                            ny(c.events, o)) ||
                            (n = !1);
                        }),
                        n)
                      );
                    })(t, e)
                  )
                )
              ),
              fy(this, "getPendingSessionRequests", () =>
                this.client.pendingRequest.getAll()
              ),
              fy(this, "authenticate", async (e, t) => {
                var i, r, s;
                let n;
                this.isInitialized(), this.isValidAuthenticate(e);
                let o =
                    t &&
                    this.client.core.linkModeSupportedApps.includes(t) &&
                    (null == (i = this.client.metadata.redirect)
                      ? void 0
                      : i.linkMode),
                  a = o ? hS.link_mode : hS.relay;
                a === hS.relay && (await this.confirmOnlineStateOrThrow());
                let {
                    chains: c,
                    statement: l = "",
                    uri: h,
                    domain: u,
                    nonce: d,
                    type: f,
                    exp: p,
                    nbf: g,
                    methods: y = [],
                    expiry: b,
                  } = e,
                  m = [...(e.resources || [])],
                  { topic: v, uri: w } = await this.client.core.pairing.create({
                    methods: ["wc_sessionAuthenticate"],
                    transportType: a,
                  });
                this.client.logger.info({
                  message: "Generated new pairing",
                  pairing: { topic: v, uri: w },
                });
                let E = await this.client.core.crypto.generateKeyPair(),
                  x = le(E);
                if (
                  (await Promise.all([
                    this.client.auth.authKeys.set(fo, {
                      responseTopic: x,
                      publicKey: E,
                    }),
                    this.client.auth.pairingTopics.set(x, {
                      topic: x,
                      pairingTopic: v,
                    }),
                  ]),
                  await this.client.core.relayer.subscribe(x, {
                    transportType: a,
                  }),
                  this.client.logger.info(
                    "sending request to new pairing topic: ".concat(v)
                  ),
                  y.length > 0)
                ) {
                  let { namespace: e } = s9(c[0]),
                    t = ad(
                      (function (e, t, i) {
                        let r =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : {};
                        return (
                          null == i || i.sort((e, t) => e.localeCompare(t)),
                          {
                            att: {
                              [e]: (function (e, t) {
                                let i =
                                  arguments.length > 2 &&
                                  void 0 !== arguments[2]
                                    ? arguments[2]
                                    : {};
                                return Object.assign(
                                  {},
                                  ...(t =
                                    null == t
                                      ? void 0
                                      : t.sort((e, t) =>
                                          e.localeCompare(t)
                                        )).map((t) => ({
                                    ["".concat(e, "/").concat(t)]: [i],
                                  }))
                                );
                              })(t, i, r),
                            },
                          }
                        );
                      })(e, "request", y)
                    );
                  ay(m) &&
                    ((r = t),
                    (s = m.pop()),
                    (t = ad(
                      (function (e, t) {
                        au(e), au(t);
                        let i = Object.keys(e.att)
                            .concat(Object.keys(t.att))
                            .sort((e, t) => e.localeCompare(t)),
                          r = { att: {} };
                        return (
                          i.forEach((i) => {
                            var s, n;
                            Object.keys(
                              (null == (s = e.att) ? void 0 : s[i]) || {}
                            )
                              .concat(
                                Object.keys(
                                  (null == (n = t.att) ? void 0 : n[i]) || {}
                                )
                              )
                              .sort((e, t) => e.localeCompare(t))
                              .forEach((s) => {
                                var n, o;
                                r.att[i] = ae(
                                  ((e, t) => {
                                    for (var i in t || (t = {}))
                                      ar.call(t, i) && an(e, i, t[i]);
                                    if (ai)
                                      for (var i of ai(t))
                                        as.call(t, i) && an(e, i, t[i]);
                                    return e;
                                  })({}, r.att[i]),
                                  at({
                                    [s]:
                                      (null == (n = e.att[i])
                                        ? void 0
                                        : n[s]) ||
                                      (null == (o = t.att[i]) ? void 0 : o[s]),
                                  })
                                );
                              });
                          }),
                          r
                        );
                      })(af(r), af(s))
                    ))),
                    m.push(t);
                }
                let I =
                    b && b > fe.wc_sessionAuthenticate.req.ttl
                      ? b
                      : fe.wc_sessionAuthenticate.req.ttl,
                  _ = {
                    authPayload: {
                      type: null != f ? f : "caip122",
                      chains: c,
                      statement: l,
                      aud: h,
                      domain: u,
                      version: "1",
                      nonce: d,
                      iat: new Date().toISOString(),
                      exp: p,
                      nbf: g,
                      resources: m,
                    },
                    requester: { publicKey: E, metadata: this.client.metadata },
                    expiryTimestamp: nI(I),
                  },
                  D = {
                    requiredNamespaces: {},
                    optionalNamespaces: {
                      eip155: {
                        chains: c,
                        methods: [...new Set(["personal_sign", ...y])],
                        events: ["chainChanged", "accountsChanged"],
                      },
                    },
                    relays: [{ protocol: "irn" }],
                    pairingTopic: v,
                    proposer: { publicKey: E, metadata: this.client.metadata },
                    expiryTimestamp: nI(fe.wc_sessionPropose.req.ttl),
                    id: l6(),
                  },
                  { done: S, resolve: P, reject: A } = nv(I, "Request expired"),
                  O = l6(),
                  C = nD("session_connect", D.id),
                  T = nD("session_request", O),
                  N = async (e) => {
                    let { error: t, session: i } = e;
                    this.events.off(T, U), t ? A(t) : i && P({ session: i });
                  },
                  U = async (e) => {
                    var i, r, s;
                    let n;
                    if (
                      (await this.deletePendingAuthRequest(O, {
                        message: "fulfilled",
                        code: 0,
                      }),
                      e.error)
                    ) {
                      let t = lN(
                        "WC_METHOD_UNSUPPORTED",
                        "wc_sessionAuthenticate"
                      );
                      return e.error.code === t.code
                        ? void 0
                        : (this.events.off(C, N), A(e.error.message));
                    }
                    await this.deleteProposal(D.id), this.events.off(C, N);
                    let { cacaos: o, responder: c } = e.result,
                      l = [],
                      h = [];
                    for (let e of o) {
                      (await al({
                        cacao: e,
                        projectId: this.client.core.projectId,
                      })) ||
                        (this.client.logger.error(
                          e,
                          "Signature verification failed"
                        ),
                        A(
                          lN(
                            "SESSION_SETTLEMENT_FAILED",
                            "Signature verification failed"
                          )
                        ));
                      let { p: t } = e,
                        i = ay(t.resources),
                        r = [aa(t.iss)],
                        s = ac(t.iss);
                      if (i) {
                        let e = ap(i),
                          t = ag(i);
                        l.push(...e), r.push(...t);
                      }
                      for (let e of r) h.push("".concat(e, ":").concat(s));
                    }
                    let u = await this.client.core.crypto.generateSharedKey(
                      E,
                      c.publicKey
                    );
                    l.length > 0 &&
                      ((n = {
                        topic: u,
                        acknowledged: !0,
                        self: { publicKey: E, metadata: this.client.metadata },
                        peer: c,
                        controller: c.publicKey,
                        expiry: nI(d7),
                        requiredNamespaces: {},
                        optionalNamespaces: {},
                        relay: { protocol: "irn" },
                        pairingTopic: v,
                        namespaces: lA([...new Set(l)], [...new Set(h)]),
                        transportType: a,
                      }),
                      await this.client.core.relayer.subscribe(u, {
                        transportType: a,
                      }),
                      await this.client.session.set(u, n),
                      v &&
                        (await this.client.core.pairing.updateMetadata({
                          topic: v,
                          metadata: c.metadata,
                        })),
                      (n = this.client.session.get(u))),
                      null != (i = this.client.metadata.redirect) &&
                        i.linkMode &&
                        null != (r = c.metadata.redirect) &&
                        r.linkMode &&
                        null != (s = c.metadata.redirect) &&
                        s.universal &&
                        t &&
                        (this.client.core.addLinkModeSupportedApp(
                          c.metadata.redirect.universal
                        ),
                        this.client.session.update(u, {
                          transportType: hS.link_mode,
                        })),
                      P({ auths: o, session: n });
                  };
                this.events.once(C, N), this.events.once(T, U);
                try {
                  if (o) {
                    let e = l4("wc_sessionAuthenticate", _, O);
                    this.client.core.history.set(v, e);
                    let i = await this.client.core.crypto.encode("", e, {
                      type: 2,
                      encoding: c4,
                    });
                    n = lp(t, v, i);
                  } else
                    await Promise.all([
                      this.sendRequest({
                        topic: v,
                        method: "wc_sessionAuthenticate",
                        params: _,
                        expiry: e.expiry,
                        throwOnFailedPublish: !0,
                        clientRpcId: O,
                      }),
                      this.sendRequest({
                        topic: v,
                        method: "wc_sessionPropose",
                        params: D,
                        expiry: fe.wc_sessionPropose.req.ttl,
                        throwOnFailedPublish: !0,
                        clientRpcId: D.id,
                      }),
                    ]);
                } catch (e) {
                  throw (this.events.off(C, N), this.events.off(T, U), e);
                }
                return (
                  await this.setProposal(D.id, D),
                  await this.setAuthRequest(O, {
                    request: fg(fp({}, _), { verifyContext: {} }),
                    pairingTopic: v,
                    transportType: a,
                  }),
                  { uri: null != n ? n : w, response: S }
                );
              }),
              fy(this, "approveSessionAuthenticate", async (e) => {
                let t,
                  { id: i, auths: r } = e,
                  s = this.client.core.eventClient.createEvent({
                    properties: {
                      topic: i.toString(),
                      trace: [hz.authenticated_session_approve_started],
                    },
                  });
                try {
                  this.isInitialized();
                } catch (e) {
                  throw (s.setError(hF.no_internet_connection), e);
                }
                let n = this.getPendingAuthRequest(i);
                if (!n)
                  throw (
                    (s.setError(
                      hF.authenticated_session_pending_request_not_found
                    ),
                    Error(
                      "Could not find pending auth request with id ".concat(i)
                    ))
                  );
                let o = n.transportType || hS.relay;
                o === hS.relay && (await this.confirmOnlineStateOrThrow());
                let a = n.requester.publicKey,
                  c = await this.client.core.crypto.generateKeyPair(),
                  l = le(a),
                  h = { type: 1, receiverPublicKey: a, senderPublicKey: c },
                  u = [],
                  d = [];
                for (let e of r) {
                  if (
                    !(await al({
                      cacao: e,
                      projectId: this.client.core.projectId,
                    }))
                  ) {
                    s.setError(hF.invalid_cacao);
                    let e = lN(
                      "SESSION_SETTLEMENT_FAILED",
                      "Signature verification failed"
                    );
                    throw (
                      (await this.sendError({
                        id: i,
                        topic: l,
                        error: e,
                        encodeOpts: h,
                      }),
                      Error(e.message))
                    );
                  }
                  s.addTrace(hz.cacaos_verified);
                  let { p: t } = e,
                    r = ay(t.resources),
                    n = [aa(t.iss)],
                    o = ac(t.iss);
                  if (r) {
                    let e = ap(r),
                      t = ag(r);
                    u.push(...e), n.push(...t);
                  }
                  for (let e of n) d.push("".concat(e, ":").concat(o));
                }
                let f = await this.client.core.crypto.generateSharedKey(c, a);
                if (
                  (s.addTrace(hz.create_authenticated_session_topic),
                  (null == u ? void 0 : u.length) > 0)
                ) {
                  (t = {
                    topic: f,
                    acknowledged: !0,
                    self: { publicKey: c, metadata: this.client.metadata },
                    peer: { publicKey: a, metadata: n.requester.metadata },
                    controller: a,
                    expiry: nI(d7),
                    authentication: r,
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    relay: { protocol: "irn" },
                    pairingTopic: n.pairingTopic,
                    namespaces: lA([...new Set(u)], [...new Set(d)]),
                    transportType: o,
                  }),
                    s.addTrace(hz.subscribing_authenticated_session_topic);
                  try {
                    await this.client.core.relayer.subscribe(f, {
                      transportType: o,
                    });
                  } catch (e) {
                    throw (
                      (s.setError(
                        hF.subscribe_authenticated_session_topic_failure
                      ),
                      e)
                    );
                  }
                  s.addTrace(hz.subscribe_authenticated_session_topic_success),
                    await this.client.session.set(f, t),
                    s.addTrace(hz.store_authenticated_session),
                    await this.client.core.pairing.updateMetadata({
                      topic: n.pairingTopic,
                      metadata: n.requester.metadata,
                    });
                }
                s.addTrace(hz.publishing_authenticated_session_approve);
                try {
                  await this.sendResult({
                    topic: l,
                    id: i,
                    result: {
                      cacaos: r,
                      responder: {
                        publicKey: c,
                        metadata: this.client.metadata,
                      },
                    },
                    encodeOpts: h,
                    throwOnFailedPublish: !0,
                    appLink: this.getAppLinkIfEnabled(n.requester.metadata, o),
                  });
                } catch (e) {
                  throw (
                    (s.setError(
                      hF.authenticated_session_approve_publish_failure
                    ),
                    e)
                  );
                }
                return (
                  await this.client.auth.requests.delete(i, {
                    message: "fulfilled",
                    code: 0,
                  }),
                  await this.client.core.pairing.activate({
                    topic: n.pairingTopic,
                  }),
                  this.client.core.eventClient.deleteEvent({
                    eventId: s.eventId,
                  }),
                  { session: t }
                );
              }),
              fy(this, "rejectSessionAuthenticate", async (e) => {
                this.isInitialized();
                let { id: t, reason: i } = e,
                  r = this.getPendingAuthRequest(t);
                if (!r)
                  throw Error(
                    "Could not find pending auth request with id ".concat(t)
                  );
                r.transportType === hS.relay &&
                  (await this.confirmOnlineStateOrThrow());
                let s = r.requester.publicKey,
                  n = await this.client.core.crypto.generateKeyPair(),
                  o = le(s);
                await this.sendError({
                  id: t,
                  topic: o,
                  error: i,
                  encodeOpts: {
                    type: 1,
                    receiverPublicKey: s,
                    senderPublicKey: n,
                  },
                  rpcOpts: fe.wc_sessionAuthenticate.reject,
                  appLink: this.getAppLinkIfEnabled(
                    r.requester.metadata,
                    r.transportType
                  ),
                }),
                  await this.client.auth.requests.delete(t, {
                    message: "rejected",
                    code: 0,
                  }),
                  await this.deleteProposal(t);
              }),
              fy(this, "formatAuthMessage", (e) => {
                this.isInitialized();
                let { request: t, iss: i } = e;
                return ah(t, i);
              }),
              fy(this, "processRelayMessageCache", () => {
                setTimeout(async () => {
                  if (0 !== this.relayMessageCache.length)
                    for (; this.relayMessageCache.length > 0; )
                      try {
                        let e = this.relayMessageCache.shift();
                        e && (await this.onRelayMessage(e));
                      } catch (e) {
                        this.client.logger.error(e);
                      }
                }, 50);
              }),
              fy(this, "cleanupDuplicatePairings", async (e) => {
                if (e.pairingTopic)
                  try {
                    let t = this.client.core.pairing.pairings.get(
                        e.pairingTopic
                      ),
                      i = this.client.core.pairing.pairings
                        .getAll()
                        .filter((i) => {
                          var r, s;
                          return (
                            (null == (r = i.peerMetadata) ? void 0 : r.url) &&
                            (null == (s = i.peerMetadata) ? void 0 : s.url) ===
                              e.peer.metadata.url &&
                            i.topic &&
                            i.topic !== t.topic
                          );
                        });
                    if (0 === i.length) return;
                    this.client.logger.info(
                      "Cleaning up ".concat(i.length, " duplicate pairing(s)")
                    ),
                      await Promise.all(
                        i.map((e) =>
                          this.client.core.pairing.disconnect({
                            topic: e.topic,
                          })
                        )
                      ),
                      this.client.logger.info(
                        "Duplicate pairings clean up finished"
                      );
                  } catch (e) {
                    this.client.logger.error(e);
                  }
              }),
              fy(this, "deleteSession", async (e) => {
                var t;
                let {
                    topic: i,
                    expirerHasDeleted: r = !1,
                    emitEvent: s = !0,
                    id: n = 0,
                  } = e,
                  { self: o } = this.client.session.get(i);
                await this.client.core.relayer.unsubscribe(i),
                  await this.client.session.delete(i, lN("USER_DISCONNECTED")),
                  this.addToRecentlyDeleted(i, "session"),
                  this.client.core.crypto.keychain.has(o.publicKey) &&
                    (await this.client.core.crypto.deleteKeyPair(o.publicKey)),
                  this.client.core.crypto.keychain.has(i) &&
                    (await this.client.core.crypto.deleteSymKey(i)),
                  r || this.client.core.expirer.del(i),
                  this.client.core.storage
                    .removeItem(d4)
                    .catch((e) => this.client.logger.warn(e)),
                  this.getPendingSessionRequests().forEach((e) => {
                    e.topic === i &&
                      this.deletePendingSessionRequest(
                        e.id,
                        lN("USER_DISCONNECTED")
                      );
                  }),
                  i ===
                    (null == (t = this.sessionRequestQueue.queue[0])
                      ? void 0
                      : t.topic) && (this.sessionRequestQueue.state = fi.idle),
                  s &&
                    this.client.events.emit("session_delete", {
                      id: n,
                      topic: i,
                    });
              }),
              fy(this, "deleteProposal", async (e, t) => {
                if (t)
                  try {
                    let t = this.client.proposal.get(e),
                      i = this.client.core.eventClient.getEvent({
                        topic: t.pairingTopic,
                      });
                    null == i || i.setError(hM.proposal_expired);
                  } catch (e) {}
                await Promise.all([
                  this.client.proposal.delete(e, lN("USER_DISCONNECTED")),
                  t ? Promise.resolve() : this.client.core.expirer.del(e),
                ]),
                  this.addToRecentlyDeleted(e, "proposal");
              }),
              fy(this, "deletePendingSessionRequest", async function (e, i) {
                let r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                await Promise.all([
                  t.client.pendingRequest.delete(e, i),
                  r ? Promise.resolve() : t.client.core.expirer.del(e),
                ]),
                  t.addToRecentlyDeleted(e, "request"),
                  (t.sessionRequestQueue.queue =
                    t.sessionRequestQueue.queue.filter((t) => t.id !== e)),
                  r &&
                    ((t.sessionRequestQueue.state = fi.idle),
                    t.client.events.emit("session_request_expire", { id: e }));
              }),
              fy(this, "deletePendingAuthRequest", async function (e, i) {
                let r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                await Promise.all([
                  t.client.auth.requests.delete(e, i),
                  r ? Promise.resolve() : t.client.core.expirer.del(e),
                ]);
              }),
              fy(this, "setExpiry", async (e, t) => {
                this.client.session.keys.includes(e) &&
                  (this.client.core.expirer.set(e, t),
                  await this.client.session.update(e, { expiry: t }));
              }),
              fy(this, "setProposal", async (e, t) => {
                this.client.core.expirer.set(
                  e,
                  nI(fe.wc_sessionPropose.req.ttl)
                ),
                  await this.client.proposal.set(e, t);
              }),
              fy(this, "setAuthRequest", async (e, t) => {
                let {
                  request: i,
                  pairingTopic: r,
                  transportType: s = hS.relay,
                } = t;
                this.client.core.expirer.set(e, i.expiryTimestamp),
                  await this.client.auth.requests.set(e, {
                    authPayload: i.authPayload,
                    requester: i.requester,
                    expiryTimestamp: i.expiryTimestamp,
                    id: e,
                    pairingTopic: r,
                    verifyContext: i.verifyContext,
                    transportType: s,
                  });
              }),
              fy(this, "setPendingSessionRequest", async (e) => {
                let { id: t, topic: i, params: r, verifyContext: s } = e,
                  n =
                    r.request.expiryTimestamp ||
                    nI(fe.wc_sessionRequest.req.ttl);
                this.client.core.expirer.set(t, n),
                  await this.client.pendingRequest.set(t, {
                    id: t,
                    topic: i,
                    params: r,
                    verifyContext: s,
                  });
              }),
              fy(this, "sendRequest", async (e) => {
                let t,
                  i,
                  {
                    topic: r,
                    method: s,
                    params: n,
                    expiry: o,
                    relayRpcId: a,
                    clientRpcId: c,
                    throwOnFailedPublish: l,
                    appLink: h,
                    tvf: u,
                  } = e,
                  d = l4(s, n, c),
                  f = !!h;
                try {
                  let e = f ? c4 : c5;
                  t = await this.client.core.crypto.encode(r, d, {
                    encoding: e,
                  });
                } catch (e) {
                  throw (
                    (await this.cleanup(),
                    this.client.logger.error(
                      "sendRequest() -> core.crypto.encode() for topic ".concat(
                        r,
                        " failed"
                      )
                    ),
                    e)
                  );
                }
                if (fs.includes(s)) {
                  let e = lt(JSON.stringify(d)),
                    r = lt(t);
                  i = await this.client.core.verify.register({
                    id: r,
                    decryptedId: e,
                  });
                }
                let p = fe[s].req;
                if (
                  ((p.attestation = i),
                  o && (p.ttl = o),
                  a && (p.id = a),
                  this.client.core.history.set(r, d),
                  f)
                ) {
                  let e = lp(h, r, t);
                  await globalThis.Linking.openURL(e, this.client.name);
                } else {
                  let e = fe[s].req;
                  o && (e.ttl = o),
                    a && (e.id = a),
                    (e.tvf = fg(fp({}, u), { correlationId: d.id })),
                    l
                      ? ((e.internal = fg(fp({}, e.internal), {
                          throwOnFailedPublish: !0,
                        })),
                        await this.client.core.relayer.publish(r, t, e))
                      : this.client.core.relayer
                          .publish(r, t, e)
                          .catch((e) => this.client.logger.error(e));
                }
                return d.id;
              }),
              fy(this, "sendResult", async (e) => {
                let t,
                  i,
                  r,
                  {
                    id: s,
                    topic: n,
                    result: o,
                    throwOnFailedPublish: a,
                    encodeOpts: c,
                    appLink: l,
                  } = e,
                  h = l9(s, o),
                  u =
                    l &&
                    "u" >
                      typeof (null == globalThis ? void 0 : globalThis.Linking);
                try {
                  let e = u ? c4 : c5;
                  t = await this.client.core.crypto.encode(
                    n,
                    h,
                    fg(fp({}, c || {}), { encoding: e })
                  );
                } catch (e) {
                  throw (
                    (await this.cleanup(),
                    this.client.logger.error(
                      "sendResult() -> core.crypto.encode() for topic ".concat(
                        n,
                        " failed"
                      )
                    ),
                    e)
                  );
                }
                try {
                  let e = (i = await this.client.core.history.get(n, s))
                    .request;
                  try {
                    r = this.getTVFParams(s, e.params, o);
                  } catch (e) {
                    this.client.logger.warn(
                      "sendResult() -> getTVFParams() failed: ".concat(
                        null == e ? void 0 : e.message
                      )
                    );
                  }
                } catch (e) {
                  throw (
                    (this.client.logger.error(
                      "sendResult() -> history.get("
                        .concat(n, ", ")
                        .concat(s, ") failed")
                    ),
                    e)
                  );
                }
                if (u) {
                  let e = lp(l, n, t);
                  await globalThis.Linking.openURL(e, this.client.name);
                } else {
                  let e = fe[i.request.method].res;
                  (e.tvf = fg(fp({}, r), { correlationId: s })),
                    a
                      ? ((e.internal = fg(fp({}, e.internal), {
                          throwOnFailedPublish: !0,
                        })),
                        await this.client.core.relayer.publish(n, t, e))
                      : this.client.core.relayer
                          .publish(n, t, e)
                          .catch((e) => this.client.logger.error(e));
                }
                await this.client.core.history.resolve(h);
              }),
              fy(this, "sendError", async (e) => {
                let t,
                  i,
                  {
                    id: r,
                    topic: s,
                    error: n,
                    encodeOpts: o,
                    rpcOpts: a,
                    appLink: c,
                  } = e,
                  l = l7(r, n),
                  h =
                    c &&
                    "u" >
                      typeof (null == globalThis ? void 0 : globalThis.Linking);
                try {
                  let e = h ? c4 : c5;
                  t = await this.client.core.crypto.encode(
                    s,
                    l,
                    fg(fp({}, o || {}), { encoding: e })
                  );
                } catch (e) {
                  throw (
                    (await this.cleanup(),
                    this.client.logger.error(
                      "sendError() -> core.crypto.encode() for topic ".concat(
                        s,
                        " failed"
                      )
                    ),
                    e)
                  );
                }
                try {
                  i = await this.client.core.history.get(s, r);
                } catch (e) {
                  throw (
                    (this.client.logger.error(
                      "sendError() -> history.get("
                        .concat(s, ", ")
                        .concat(r, ") failed")
                    ),
                    e)
                  );
                }
                if (h) {
                  let e = lp(c, s, t);
                  await globalThis.Linking.openURL(e, this.client.name);
                } else {
                  let e = i.request.method,
                    r = a || fe[e].res;
                  this.client.core.relayer.publish(s, t, r);
                }
                await this.client.core.history.resolve(l);
              }),
              fy(this, "cleanup", async () => {
                let e = [],
                  t = [];
                this.client.session.getAll().forEach((t) => {
                  let i = !1;
                  n_(t.expiry) && (i = !0),
                    this.client.core.crypto.keychain.has(t.topic) || (i = !0),
                    i && e.push(t.topic);
                }),
                  this.client.proposal.getAll().forEach((e) => {
                    n_(e.expiryTimestamp) && t.push(e.id);
                  }),
                  await Promise.all([
                    ...e.map((e) => this.deleteSession({ topic: e })),
                    ...t.map((e) => this.deleteProposal(e)),
                  ]);
              }),
              fy(this, "onProviderMessageEvent", async (e) => {
                !this.initialized || this.relayMessageCache.length > 0
                  ? this.relayMessageCache.push(e)
                  : await this.onRelayMessage(e);
              }),
              fy(this, "onRelayEventRequest", async (e) => {
                this.requestQueue.queue.push(e),
                  await this.processRequestsQueue();
              }),
              fy(this, "processRequestsQueue", async () => {
                if (this.requestQueue.state === fi.active)
                  return void this.client.logger.info(
                    "Request queue already active, skipping..."
                  );
                for (
                  this.client.logger.info(
                    "Request queue starting with ".concat(
                      this.requestQueue.queue.length,
                      " requests"
                    )
                  );
                  this.requestQueue.queue.length > 0;

                ) {
                  this.requestQueue.state = fi.active;
                  let e = this.requestQueue.queue.shift();
                  if (e)
                    try {
                      await this.processRequest(e);
                    } catch (e) {
                      this.client.logger.warn(e);
                    }
                }
                this.requestQueue.state = fi.idle;
              }),
              fy(this, "processRequest", async (e) => {
                let {
                    topic: t,
                    payload: i,
                    attestation: r,
                    transportType: s,
                    encryptedId: n,
                  } = e,
                  o = i.method;
                if (
                  !this.shouldIgnorePairingRequest({
                    topic: t,
                    requestMethod: o,
                  })
                )
                  switch (o) {
                    case "wc_sessionPropose":
                      return await this.onSessionProposeRequest({
                        topic: t,
                        payload: i,
                        attestation: r,
                        encryptedId: n,
                      });
                    case "wc_sessionSettle":
                      return await this.onSessionSettleRequest(t, i);
                    case "wc_sessionUpdate":
                      return await this.onSessionUpdateRequest(t, i);
                    case "wc_sessionExtend":
                      return await this.onSessionExtendRequest(t, i);
                    case "wc_sessionPing":
                      return await this.onSessionPingRequest(t, i);
                    case "wc_sessionDelete":
                      return await this.onSessionDeleteRequest(t, i);
                    case "wc_sessionRequest":
                      return await this.onSessionRequest({
                        topic: t,
                        payload: i,
                        attestation: r,
                        encryptedId: n,
                        transportType: s,
                      });
                    case "wc_sessionEvent":
                      return await this.onSessionEventRequest(t, i);
                    case "wc_sessionAuthenticate":
                      return await this.onSessionAuthenticateRequest({
                        topic: t,
                        payload: i,
                        attestation: r,
                        encryptedId: n,
                        transportType: s,
                      });
                    default:
                      return this.client.logger.info(
                        "Unsupported request method ".concat(o)
                      );
                  }
              }),
              fy(this, "onRelayEventResponse", async (e) => {
                let { topic: t, payload: i, transportType: r } = e,
                  s = (await this.client.core.history.get(t, i.id)).request
                    .method;
                switch (s) {
                  case "wc_sessionPropose":
                    return this.onSessionProposeResponse(t, i, r);
                  case "wc_sessionSettle":
                    return this.onSessionSettleResponse(t, i);
                  case "wc_sessionUpdate":
                    return this.onSessionUpdateResponse(t, i);
                  case "wc_sessionExtend":
                    return this.onSessionExtendResponse(t, i);
                  case "wc_sessionPing":
                    return this.onSessionPingResponse(t, i);
                  case "wc_sessionRequest":
                    return this.onSessionRequestResponse(t, i);
                  case "wc_sessionAuthenticate":
                    return this.onSessionAuthenticateResponse(t, i);
                  default:
                    return this.client.logger.info(
                      "Unsupported response method ".concat(s)
                    );
                }
              }),
              fy(this, "onRelayEventUnknownPayload", (e) => {
                let { topic: t } = e,
                  { message: i } = lT(
                    "MISSING_OR_INVALID",
                    "Decoded payload on topic ".concat(
                      t,
                      " is not identifiable as a JSON-RPC request or a response."
                    )
                  );
                throw Error(i);
              }),
              fy(this, "shouldIgnorePairingRequest", (e) => {
                let { topic: t, requestMethod: i } = e,
                  r = this.expectedPairingMethodMap.get(t);
                return (
                  !(!r || r.includes(i)) &&
                  !!(
                    r.includes("wc_sessionAuthenticate") &&
                    this.client.events.listenerCount("session_authenticate") > 0
                  )
                );
              }),
              fy(this, "onSessionProposeRequest", async (e) => {
                let {
                    topic: t,
                    payload: i,
                    attestation: r,
                    encryptedId: s,
                  } = e,
                  { params: n, id: o } = i;
                try {
                  let e = this.client.core.eventClient.getEvent({ topic: t });
                  0 === this.client.events.listenerCount("session_proposal") &&
                    (console.warn("No listener for session_proposal event"),
                    null == e || e.setError(hL.proposal_listener_not_found)),
                    this.isValidConnect(fp({}, i.params));
                  let a = n.expiryTimestamp || nI(fe.wc_sessionPropose.req.ttl),
                    c = fp(
                      {
                        id: o,
                        pairingTopic: t,
                        expiryTimestamp: a,
                        attestation: r,
                        encryptedId: s,
                      },
                      n
                    );
                  await this.setProposal(o, c);
                  let l = await this.getVerifyContext({
                    attestationId: r,
                    hash: lt(JSON.stringify(i)),
                    encryptedId: s,
                    metadata: c.proposer.metadata,
                  });
                  null == e || e.addTrace(hj.emit_session_proposal),
                    this.client.events.emit("session_proposal", {
                      id: o,
                      params: c,
                      verifyContext: l,
                    });
                } catch (e) {
                  await this.sendError({
                    id: o,
                    topic: t,
                    error: e,
                    rpcOpts: fe.wc_sessionPropose.autoReject,
                  }),
                    this.client.logger.error(e);
                }
              }),
              fy(this, "onSessionProposeResponse", async (e, t, i) => {
                let { id: r } = t;
                if (hl(t)) {
                  let { result: s } = t;
                  this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    result: s,
                  });
                  let n = this.client.proposal.get(r);
                  this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    proposal: n,
                  });
                  let o = n.proposer.publicKey;
                  this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    selfPublicKey: o,
                  });
                  let a = s.responderPublicKey;
                  this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: a,
                  });
                  let c = await this.client.core.crypto.generateSharedKey(o, a);
                  this.pendingSessions.set(r, {
                    sessionTopic: c,
                    pairingTopic: e,
                    proposalId: r,
                    publicKey: o,
                  });
                  let l = await this.client.core.relayer.subscribe(c, {
                    transportType: i,
                  });
                  this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: l,
                  }),
                    await this.client.core.pairing.activate({ topic: e });
                } else if (hh(t)) {
                  await this.deleteProposal(r);
                  let e = nD("session_connect", r);
                  if (0 === this.events.listenerCount(e))
                    throw Error(
                      "emitting ".concat(e, " without any listeners, 954")
                    );
                  this.events.emit(e, { error: t.error });
                }
              }),
              fy(this, "onSessionSettleRequest", async (e, t) => {
                let { id: i, params: r } = t;
                try {
                  this.isValidSessionSettleRequest(r);
                  let {
                      relay: i,
                      controller: s,
                      expiry: n,
                      namespaces: o,
                      sessionProperties: a,
                      scopedProperties: c,
                      sessionConfig: l,
                    } = t.params,
                    h = [...this.pendingSessions.values()].find(
                      (t) => t.sessionTopic === e
                    );
                  if (!h)
                    return this.client.logger.error(
                      "Pending session not found for topic ".concat(e)
                    );
                  let u = this.client.proposal.get(h.proposalId),
                    d = fg(
                      fp(
                        fp(
                          fp(
                            {
                              topic: e,
                              relay: i,
                              expiry: n,
                              namespaces: o,
                              acknowledged: !0,
                              pairingTopic: h.pairingTopic,
                              requiredNamespaces: u.requiredNamespaces,
                              optionalNamespaces: u.optionalNamespaces,
                              controller: s.publicKey,
                              self: {
                                publicKey: h.publicKey,
                                metadata: this.client.metadata,
                              },
                              peer: {
                                publicKey: s.publicKey,
                                metadata: s.metadata,
                              },
                            },
                            a && { sessionProperties: a }
                          ),
                          c && { scopedProperties: c }
                        ),
                        l && { sessionConfig: l }
                      ),
                      { transportType: hS.relay }
                    );
                  await this.client.session.set(d.topic, d),
                    await this.setExpiry(d.topic, d.expiry),
                    await this.client.core.pairing.updateMetadata({
                      topic: h.pairingTopic,
                      metadata: d.peer.metadata,
                    }),
                    this.client.events.emit("session_connect", { session: d }),
                    this.events.emit(nD("session_connect", h.proposalId), {
                      session: d,
                    }),
                    this.pendingSessions.delete(h.proposalId),
                    this.deleteProposal(h.proposalId, !1),
                    this.cleanupDuplicatePairings(d),
                    await this.sendResult({ id: t.id, topic: e, result: !0 });
                } catch (t) {
                  await this.sendError({ id: i, topic: e, error: t }),
                    this.client.logger.error(t);
                }
              }),
              fy(this, "onSessionSettleResponse", async (e, t) => {
                let { id: i } = t;
                hl(t)
                  ? (await this.client.session.update(e, { acknowledged: !0 }),
                    this.events.emit(nD("session_approve", i), {}))
                  : hh(t) &&
                    (await this.client.session.delete(
                      e,
                      lN("USER_DISCONNECTED")
                    ),
                    this.events.emit(nD("session_approve", i), {
                      error: t.error,
                    }));
              }),
              fy(this, "onSessionUpdateRequest", async (e, t) => {
                let { params: i, id: r } = t;
                try {
                  let t = "".concat(e, "_session_update"),
                    s = lZ.get(t);
                  if (s && this.isRequestOutOfSync(s, r)) {
                    this.client.logger.warn(
                      "Discarding out of sync request - ".concat(r)
                    ),
                      this.sendError({
                        id: r,
                        topic: e,
                        error: lN("INVALID_UPDATE_REQUEST"),
                      });
                    return;
                  }
                  this.isValidUpdate(fp({ topic: e }, i));
                  try {
                    lZ.set(t, r),
                      await this.client.session.update(e, {
                        namespaces: i.namespaces,
                      }),
                      await this.sendResult({ id: r, topic: e, result: !0 });
                  } catch (e) {
                    throw (lZ.delete(t), e);
                  }
                  this.client.events.emit("session_update", {
                    id: r,
                    topic: e,
                    params: i,
                  });
                } catch (t) {
                  await this.sendError({ id: r, topic: e, error: t }),
                    this.client.logger.error(t);
                }
              }),
              fy(
                this,
                "isRequestOutOfSync",
                (e, t) => t.toString().slice(0, -3) < e.toString().slice(0, -3)
              ),
              fy(this, "onSessionUpdateResponse", (e, t) => {
                let { id: i } = t,
                  r = nD("session_update", i);
                if (0 === this.events.listenerCount(r))
                  throw Error("emitting ".concat(r, " without any listeners"));
                hl(t)
                  ? this.events.emit(nD("session_update", i), {})
                  : hh(t) &&
                    this.events.emit(nD("session_update", i), {
                      error: t.error,
                    });
              }),
              fy(this, "onSessionExtendRequest", async (e, t) => {
                let { id: i } = t;
                try {
                  this.isValidExtend({ topic: e }),
                    await this.setExpiry(e, nI(d7)),
                    await this.sendResult({ id: i, topic: e, result: !0 }),
                    this.client.events.emit("session_extend", {
                      id: i,
                      topic: e,
                    });
                } catch (t) {
                  await this.sendError({ id: i, topic: e, error: t }),
                    this.client.logger.error(t);
                }
              }),
              fy(this, "onSessionExtendResponse", (e, t) => {
                let { id: i } = t,
                  r = nD("session_extend", i);
                if (0 === this.events.listenerCount(r))
                  throw Error("emitting ".concat(r, " without any listeners"));
                hl(t)
                  ? this.events.emit(nD("session_extend", i), {})
                  : hh(t) &&
                    this.events.emit(nD("session_extend", i), {
                      error: t.error,
                    });
              }),
              fy(this, "onSessionPingRequest", async (e, t) => {
                let { id: i } = t;
                try {
                  this.isValidPing({ topic: e }),
                    await this.sendResult({
                      id: i,
                      topic: e,
                      result: !0,
                      throwOnFailedPublish: !0,
                    }),
                    this.client.events.emit("session_ping", {
                      id: i,
                      topic: e,
                    });
                } catch (t) {
                  await this.sendError({ id: i, topic: e, error: t }),
                    this.client.logger.error(t);
                }
              }),
              fy(this, "onSessionPingResponse", (e, t) => {
                let { id: i } = t,
                  r = nD("session_ping", i);
                setTimeout(() => {
                  if (0 === this.events.listenerCount(r))
                    throw Error(
                      "emitting ".concat(r, " without any listeners 2176")
                    );
                  hl(t)
                    ? this.events.emit(nD("session_ping", i), {})
                    : hh(t) &&
                      this.events.emit(nD("session_ping", i), {
                        error: t.error,
                      });
                }, 500);
              }),
              fy(this, "onSessionDeleteRequest", async (e, t) => {
                let { id: i } = t;
                try {
                  this.isValidDisconnect({ topic: e, reason: t.params }),
                    Promise.all([
                      new Promise((t) => {
                        this.client.core.relayer.once(hI.publish, async () => {
                          t(await this.deleteSession({ topic: e, id: i }));
                        });
                      }),
                      this.sendResult({ id: i, topic: e, result: !0 }),
                      this.cleanupPendingSentRequestsForTopic({
                        topic: e,
                        error: lN("USER_DISCONNECTED"),
                      }),
                    ]).catch((e) => this.client.logger.error(e));
                } catch (e) {
                  this.client.logger.error(e);
                }
              }),
              fy(this, "onSessionRequest", async (e) => {
                var t, i, r;
                let {
                    topic: s,
                    payload: n,
                    attestation: o,
                    encryptedId: a,
                    transportType: c,
                  } = e,
                  { id: l, params: h } = n;
                try {
                  await this.isValidRequest(fp({ topic: s }, h));
                  let e = this.client.session.get(s),
                    n = await this.getVerifyContext({
                      attestationId: o,
                      hash: lt(JSON.stringify(l4("wc_sessionRequest", h, l))),
                      encryptedId: a,
                      metadata: e.peer.metadata,
                      transportType: c,
                    }),
                    u = { id: l, topic: s, params: h, verifyContext: n };
                  await this.setPendingSessionRequest(u),
                    c === hS.link_mode &&
                      null != (t = e.peer.metadata.redirect) &&
                      t.universal &&
                      this.client.core.addLinkModeSupportedApp(
                        null == (i = e.peer.metadata.redirect)
                          ? void 0
                          : i.universal
                      ),
                    null != (r = this.client.signConfig) &&
                    r.disableRequestQueue
                      ? this.emitSessionRequest(u)
                      : (this.addSessionRequestToSessionRequestQueue(u),
                        this.processSessionRequestQueue());
                } catch (e) {
                  await this.sendError({ id: l, topic: s, error: e }),
                    this.client.logger.error(e);
                }
              }),
              fy(this, "onSessionRequestResponse", (e, t) => {
                let { id: i } = t,
                  r = nD("session_request", i);
                if (0 === this.events.listenerCount(r))
                  throw Error("emitting ".concat(r, " without any listeners"));
                hl(t)
                  ? this.events.emit(nD("session_request", i), {
                      result: t.result,
                    })
                  : hh(t) &&
                    this.events.emit(nD("session_request", i), {
                      error: t.error,
                    });
              }),
              fy(this, "onSessionEventRequest", async (e, t) => {
                let { id: i, params: r } = t;
                try {
                  let t = "".concat(e, "_session_event_").concat(r.event.name),
                    s = lZ.get(t);
                  if (s && this.isRequestOutOfSync(s, i))
                    return void this.client.logger.info(
                      "Discarding out of sync request - ".concat(i)
                    );
                  this.isValidEmit(fp({ topic: e }, r)),
                    this.client.events.emit("session_event", {
                      id: i,
                      topic: e,
                      params: r,
                    }),
                    lZ.set(t, i);
                } catch (t) {
                  await this.sendError({ id: i, topic: e, error: t }),
                    this.client.logger.error(t);
                }
              }),
              fy(this, "onSessionAuthenticateResponse", (e, t) => {
                let { id: i } = t;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionAuthenticateResponse",
                  topic: e,
                  payload: t,
                }),
                  hl(t)
                    ? this.events.emit(nD("session_request", i), {
                        result: t.result,
                      })
                    : hh(t) &&
                      this.events.emit(nD("session_request", i), {
                        error: t.error,
                      });
              }),
              fy(this, "onSessionAuthenticateRequest", async (e) => {
                var t;
                let {
                  topic: i,
                  payload: r,
                  attestation: s,
                  encryptedId: n,
                  transportType: o,
                } = e;
                try {
                  let {
                      requester: e,
                      authPayload: a,
                      expiryTimestamp: c,
                    } = r.params,
                    l = await this.getVerifyContext({
                      attestationId: s,
                      hash: lt(JSON.stringify(r)),
                      encryptedId: n,
                      metadata: e.metadata,
                      transportType: o,
                    }),
                    h = {
                      requester: e,
                      pairingTopic: i,
                      id: r.id,
                      authPayload: a,
                      verifyContext: l,
                      expiryTimestamp: c,
                    };
                  await this.setAuthRequest(r.id, {
                    request: h,
                    pairingTopic: i,
                    transportType: o,
                  }),
                    o === hS.link_mode &&
                      null != (t = e.metadata.redirect) &&
                      t.universal &&
                      this.client.core.addLinkModeSupportedApp(
                        e.metadata.redirect.universal
                      ),
                    this.client.events.emit("session_authenticate", {
                      topic: i,
                      params: r.params,
                      id: r.id,
                      verifyContext: l,
                    });
                } catch (n) {
                  this.client.logger.error(n);
                  let e = r.params.requester.publicKey,
                    t = await this.client.core.crypto.generateKeyPair(),
                    s = this.getAppLinkIfEnabled(
                      r.params.requester.metadata,
                      o
                    );
                  await this.sendError({
                    id: r.id,
                    topic: i,
                    error: n,
                    encodeOpts: {
                      type: 1,
                      receiverPublicKey: e,
                      senderPublicKey: t,
                    },
                    rpcOpts: fe.wc_sessionAuthenticate.autoReject,
                    appLink: s,
                  });
                }
              }),
              fy(this, "addSessionRequestToSessionRequestQueue", (e) => {
                this.sessionRequestQueue.queue.push(e);
              }),
              fy(this, "cleanupAfterResponse", (e) => {
                this.deletePendingSessionRequest(e.response.id, {
                  message: "fulfilled",
                  code: 0,
                }),
                  setTimeout(() => {
                    (this.sessionRequestQueue.state = fi.idle),
                      this.processSessionRequestQueue();
                  }, (0, o.toMiliseconds)(this.requestQueueDelay));
              }),
              fy(this, "cleanupPendingSentRequestsForTopic", (e) => {
                let { topic: t, error: i } = e,
                  r = this.client.core.history.pending;
                r.length > 0 &&
                  r
                    .filter(
                      (e) =>
                        e.topic === t &&
                        "wc_sessionRequest" === e.request.method
                    )
                    .forEach((e) => {
                      let t = nD("session_request", e.request.id);
                      if (0 === this.events.listenerCount(t))
                        throw Error(
                          "emitting ".concat(t, " without any listeners")
                        );
                      this.events.emit(nD("session_request", e.request.id), {
                        error: i,
                      });
                    });
              }),
              fy(this, "processSessionRequestQueue", () => {
                if (this.sessionRequestQueue.state === fi.active)
                  return void this.client.logger.info(
                    "session request queue is already active."
                  );
                let e = this.sessionRequestQueue.queue[0];
                if (!e)
                  return void this.client.logger.info(
                    "session request queue is empty."
                  );
                try {
                  (this.sessionRequestQueue.state = fi.active),
                    this.emitSessionRequest(e);
                } catch (e) {
                  this.client.logger.error(e);
                }
              }),
              fy(this, "emitSessionRequest", (e) => {
                this.client.events.emit("session_request", e);
              }),
              fy(this, "onPairingCreated", (e) => {
                if (
                  (e.methods &&
                    this.expectedPairingMethodMap.set(e.topic, e.methods),
                  e.active)
                )
                  return;
                let t = this.client.proposal
                  .getAll()
                  .find((t) => t.pairingTopic === e.topic);
                t &&
                  this.onSessionProposeRequest({
                    topic: e.topic,
                    payload: l4(
                      "wc_sessionPropose",
                      fg(fp({}, t), {
                        requiredNamespaces: t.requiredNamespaces,
                        optionalNamespaces: t.optionalNamespaces,
                        relays: t.relays,
                        proposer: t.proposer,
                        sessionProperties: t.sessionProperties,
                        scopedProperties: t.scopedProperties,
                      }),
                      t.id
                    ),
                    attestation: t.attestation,
                    encryptedId: t.encryptedId,
                  });
              }),
              fy(this, "isValidConnect", async (e) => {
                if (!lH(e)) {
                  let { message: t } = lT(
                    "MISSING_OR_INVALID",
                    "connect() params: ".concat(JSON.stringify(e))
                  );
                  throw Error(t);
                }
                let {
                  pairingTopic: t,
                  requiredNamespaces: i,
                  optionalNamespaces: r,
                  sessionProperties: s,
                  scopedProperties: n,
                  relays: o,
                } = e;
                if (
                  (lB(t) || (await this.isValidPairingTopic(t)),
                  !(function (e, t) {
                    let i = !1;
                    return (
                      t && !e
                        ? (i = !0)
                        : e &&
                          lU(e) &&
                          e.length &&
                          e.forEach((e) => {
                            i = lF(e);
                          }),
                      i
                    );
                  })(o, !0))
                ) {
                  let { message: e } = lT(
                    "MISSING_OR_INVALID",
                    "connect() relays: ".concat(o)
                  );
                  throw Error(e);
                }
                if (!lB(i) && 0 !== lR(i)) {
                  let e =
                    "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
                  ["fatal", "error", "silent"].includes(
                    this.client.logger.level
                  )
                    ? console.warn(e)
                    : this.client.logger.warn(e),
                    this.validateNamespaces(i, "requiredNamespaces");
                }
                if (
                  (lB(r) ||
                    0 === lR(r) ||
                    this.validateNamespaces(r, "optionalNamespaces"),
                  lB(s) || this.validateSessionProps(s, "sessionProperties"),
                  !lB(n))
                ) {
                  this.validateSessionProps(n, "scopedProperties");
                  let e = Object.keys(i || {}).concat(Object.keys(r || {}));
                  if (!Object.keys(n).every((t) => e.includes(t)))
                    throw Error(
                      "Scoped properties must be a subset of required/optional namespaces, received: "
                        .concat(
                          JSON.stringify(n),
                          ", required/optional namespaces: "
                        )
                        .concat(JSON.stringify(e))
                    );
                }
              }),
              fy(this, "validateNamespaces", (e, t) => {
                let i = (function (e, t, i) {
                  let r = null;
                  if (e && lR(e)) {
                    let s,
                      n = lM(e, t);
                    n && (r = n);
                    let o =
                      ((s = null),
                      Object.entries(e).forEach((e) => {
                        var r, n;
                        let o,
                          [a, c] = e;
                        if (s) return;
                        let l =
                          ((r = s7(a, c)),
                          (n = "".concat(t, " ").concat(i)),
                          (o = null),
                          lU(r) && r.length
                            ? r.forEach((e) => {
                                o ||
                                  lL(e) ||
                                  (o = lN(
                                    "UNSUPPORTED_CHAINS",
                                    ""
                                      .concat(n, ", chain ")
                                      .concat(
                                        e,
                                        ' should be a string and conform to "namespace:chainId" format'
                                      )
                                  ));
                              })
                            : lL(a) ||
                              (o = lN(
                                "UNSUPPORTED_CHAINS",
                                "".concat(
                                  n,
                                  ', chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }'
                                )
                              )),
                          o);
                        l && (s = l);
                      }),
                      s);
                    o && (r = o);
                  } else
                    r = lT(
                      "MISSING_OR_INVALID",
                      ""
                        .concat(t, ", ")
                        .concat(i, " should be an object with data")
                    );
                  return r;
                })(e, "connect()", t);
                if (i) throw Error(i.message);
              }),
              fy(this, "isValidApprove", async (e) => {
                if (!lH(e))
                  throw Error(
                    lT("MISSING_OR_INVALID", "approve() params: ".concat(e))
                      .message
                  );
                let {
                  id: t,
                  namespaces: i,
                  relayProtocol: r,
                  sessionProperties: s,
                  scopedProperties: n,
                } = e;
                this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
                let o = this.client.proposal.get(t),
                  a = lz(i, "approve()");
                if (a) throw Error(a.message);
                let c = lK(o.requiredNamespaces, i, "approve()");
                if (c) throw Error(c.message);
                if (!lk(r, !0)) {
                  let { message: e } = lT(
                    "MISSING_OR_INVALID",
                    "approve() relayProtocol: ".concat(r)
                  );
                  throw Error(e);
                }
                if (
                  (lB(s) || this.validateSessionProps(s, "sessionProperties"),
                  !lB(n))
                ) {
                  this.validateSessionProps(n, "scopedProperties");
                  let e = new Set(Object.keys(i));
                  if (!Object.keys(n).every((t) => e.has(t)))
                    throw Error(
                      "Scoped properties must be a subset of approved namespaces, received: "
                        .concat(JSON.stringify(n), ", approved namespaces: ")
                        .concat(Array.from(e).join(", "))
                    );
                }
              }),
              fy(this, "isValidReject", async (e) => {
                if (!lH(e)) {
                  let { message: t } = lT(
                    "MISSING_OR_INVALID",
                    "reject() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { id: t, reason: i } = e;
                if (
                  (this.checkRecentlyDeleted(t),
                  await this.isValidProposalId(t),
                  !(function (e) {
                    return !(
                      !e ||
                      "object" != typeof e ||
                      !e.code ||
                      !lj(e.code, !1) ||
                      !e.message ||
                      !lk(e.message, !1)
                    );
                  })(i))
                ) {
                  let { message: e } = lT(
                    "MISSING_OR_INVALID",
                    "reject() reason: ".concat(JSON.stringify(i))
                  );
                  throw Error(e);
                }
              }),
              fy(this, "isValidSessionSettleRequest", (e) => {
                if (!lH(e)) {
                  let { message: t } = lT(
                    "MISSING_OR_INVALID",
                    "onSessionSettleRequest() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { relay: t, controller: i, namespaces: r, expiry: s } = e;
                if (!lF(t)) {
                  let { message: e } = lT(
                    "MISSING_OR_INVALID",
                    "onSessionSettleRequest() relay protocol should be a string"
                  );
                  throw Error(e);
                }
                let n = (function (e, t) {
                  let i = null;
                  return (
                    lk(null == e ? void 0 : e.publicKey, !1) ||
                      (i = lT(
                        "MISSING_OR_INVALID",
                        "".concat(
                          t,
                          " controller public key should be a string"
                        )
                      )),
                    i
                  );
                })(i, "onSessionSettleRequest()");
                if (n) throw Error(n.message);
                let o = lz(r, "onSessionSettleRequest()");
                if (o) throw Error(o.message);
                if (n_(s)) {
                  let { message: e } = lT(
                    "EXPIRED",
                    "onSessionSettleRequest()"
                  );
                  throw Error(e);
                }
              }),
              fy(this, "isValidUpdate", async (e) => {
                if (!lH(e)) {
                  let { message: t } = lT(
                    "MISSING_OR_INVALID",
                    "update() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { topic: t, namespaces: i } = e;
                this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
                let r = this.client.session.get(t),
                  s = lz(i, "update()");
                if (s) throw Error(s.message);
                let n = lK(r.requiredNamespaces, i, "update()");
                if (n) throw Error(n.message);
              }),
              fy(this, "isValidExtend", async (e) => {
                if (!lH(e)) {
                  let { message: t } = lT(
                    "MISSING_OR_INVALID",
                    "extend() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { topic: t } = e;
                this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
              }),
              fy(this, "isValidRequest", async (e) => {
                if (!lH(e)) {
                  let { message: t } = lT(
                    "MISSING_OR_INVALID",
                    "request() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { topic: t, request: i, chainId: r, expiry: s } = e;
                this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
                let { namespaces: n } = this.client.session.get(t);
                if (!lV(n, r)) {
                  let { message: e } = lT(
                    "MISSING_OR_INVALID",
                    "request() chainId: ".concat(r)
                  );
                  throw Error(e);
                }
                if (
                  !(function (e) {
                    return !(lB(e) || !lk(e.method, !1));
                  })(i)
                ) {
                  let { message: e } = lT(
                    "MISSING_OR_INVALID",
                    "request() ".concat(JSON.stringify(i))
                  );
                  throw Error(e);
                }
                if (
                  !(function (e, t, i) {
                    return (
                      !!lk(i, !1) &&
                      (function (e, t) {
                        let i = [];
                        return (
                          Object.values(e).forEach((e) => {
                            l_(e.accounts).includes(t) && i.push(...e.methods);
                          }),
                          i
                        );
                      })(e, t).includes(i)
                    );
                  })(n, r, i.method)
                ) {
                  let { message: e } = lT(
                    "MISSING_OR_INVALID",
                    "request() method: ".concat(i.method)
                  );
                  throw Error(e);
                }
                if (
                  s &&
                  !(function (e, t) {
                    return lj(e, !1) && e <= t.max && e >= t.min;
                  })(s, ft)
                ) {
                  let { message: e } = lT(
                    "MISSING_OR_INVALID",
                    "request() expiry: "
                      .concat(
                        s,
                        ". Expiry must be a number (in seconds) between "
                      )
                      .concat(ft.min, " and ")
                      .concat(ft.max)
                  );
                  throw Error(e);
                }
              }),
              fy(this, "isValidRespond", async (e) => {
                var t;
                if (!lH(e)) {
                  let { message: t } = lT(
                    "MISSING_OR_INVALID",
                    "respond() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { topic: i, response: r } = e;
                try {
                  await this.isValidSessionTopic(i);
                } catch (i) {
                  throw (
                    (null != (t = null == e ? void 0 : e.response) &&
                      t.id &&
                      this.cleanupAfterResponse(e),
                    i)
                  );
                }
                if (
                  !(function (e) {
                    return !(
                      lB(e) ||
                      (lB(e.result) && lB(e.error)) ||
                      !lj(e.id, !1) ||
                      !lk(e.jsonrpc, !1)
                    );
                  })(r)
                ) {
                  let { message: e } = lT(
                    "MISSING_OR_INVALID",
                    "respond() response: ".concat(JSON.stringify(r))
                  );
                  throw Error(e);
                }
              }),
              fy(this, "isValidPing", async (e) => {
                if (!lH(e)) {
                  let { message: t } = lT(
                    "MISSING_OR_INVALID",
                    "ping() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { topic: t } = e;
                await this.isValidSessionOrPairingTopic(t);
              }),
              fy(this, "isValidEmit", async (e) => {
                if (!lH(e)) {
                  let { message: t } = lT(
                    "MISSING_OR_INVALID",
                    "emit() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { topic: t, event: i, chainId: r } = e;
                await this.isValidSessionTopic(t);
                let { namespaces: s } = this.client.session.get(t);
                if (!lV(s, r)) {
                  let { message: e } = lT(
                    "MISSING_OR_INVALID",
                    "emit() chainId: ".concat(r)
                  );
                  throw Error(e);
                }
                if (
                  !(function (e) {
                    return !(lB(e) || !lk(e.name, !1));
                  })(i) ||
                  !(function (e, t, i) {
                    return (
                      !!lk(i, !1) &&
                      (function (e, t) {
                        let i = [];
                        return (
                          Object.values(e).forEach((e) => {
                            l_(e.accounts).includes(t) && i.push(...e.events);
                          }),
                          i
                        );
                      })(e, t).includes(i)
                    );
                  })(s, r, i.name)
                ) {
                  let { message: e } = lT(
                    "MISSING_OR_INVALID",
                    "emit() event: ".concat(JSON.stringify(i))
                  );
                  throw Error(e);
                }
              }),
              fy(this, "isValidDisconnect", async (e) => {
                if (!lH(e)) {
                  let { message: t } = lT(
                    "MISSING_OR_INVALID",
                    "disconnect() params: ".concat(e)
                  );
                  throw Error(t);
                }
                let { topic: t } = e;
                await this.isValidSessionOrPairingTopic(t);
              }),
              fy(this, "isValidAuthenticate", (e) => {
                let { chains: t, uri: i, domain: r, nonce: s } = e;
                if (!Array.isArray(t) || 0 === t.length)
                  throw Error(
                    "chains is required and must be a non-empty array"
                  );
                if (!lk(i, !1)) throw Error("uri is required parameter");
                if (!lk(r, !1)) throw Error("domain is required parameter");
                if (!lk(s, !1)) throw Error("nonce is required parameter");
                if ([...new Set(t.map((e) => s9(e).namespace))].length > 1)
                  throw Error(
                    "Multi-namespace requests are not supported. Please request single namespace only."
                  );
                let { namespace: n } = s9(t[0]);
                if ("eip155" !== n)
                  throw Error(
                    "Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains."
                  );
              }),
              fy(this, "getVerifyContext", async (e) => {
                let {
                    attestationId: t,
                    hash: i,
                    encryptedId: r,
                    metadata: s,
                    transportType: n,
                  } = e,
                  o = {
                    verified: {
                      verifyUrl: s.verifyUrl || hR,
                      validation: "UNKNOWN",
                      origin: s.url || "",
                    },
                  };
                try {
                  if (n === hS.link_mode) {
                    let e = this.getAppLinkIfEnabled(s, n);
                    return (
                      (o.verified.validation =
                        e && new URL(e).origin === new URL(s.url).origin
                          ? "VALID"
                          : "INVALID"),
                      o
                    );
                  }
                  let e = await this.client.core.verify.resolve({
                    attestationId: t,
                    hash: i,
                    encryptedId: r,
                    verifyUrl: s.verifyUrl,
                  });
                  e &&
                    ((o.verified.origin = e.origin),
                    (o.verified.isScam = e.isScam),
                    (o.verified.validation =
                      e.origin === new URL(s.url).origin
                        ? "VALID"
                        : "INVALID"));
                } catch (e) {
                  this.client.logger.warn(e);
                }
                return (
                  this.client.logger.debug(
                    "Verify context: ".concat(JSON.stringify(o))
                  ),
                  o
                );
              }),
              fy(this, "validateSessionProps", (e, t) => {
                Object.values(e).forEach((i, r) => {
                  if (null == i) {
                    let { message: s } = lT(
                      "MISSING_OR_INVALID",
                      ""
                        .concat(
                          t,
                          " must contain an existing value for each key. Received: "
                        )
                        .concat(i, " for key ")
                        .concat(Object.keys(e)[r])
                    );
                    throw Error(s);
                  }
                });
              }),
              fy(this, "getPendingAuthRequest", (e) => {
                let t = this.client.auth.requests.get(e);
                return "object" == typeof t ? t : void 0;
              }),
              fy(this, "addToRecentlyDeleted", (e, t) => {
                if (
                  (this.recentlyDeletedMap.set(e, t),
                  this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
                ) {
                  let e = 0,
                    t = this.recentlyDeletedLimit / 2;
                  for (let i of this.recentlyDeletedMap.keys()) {
                    if (e++ >= t) break;
                    this.recentlyDeletedMap.delete(i);
                  }
                }
              }),
              fy(this, "checkRecentlyDeleted", (e) => {
                let t = this.recentlyDeletedMap.get(e);
                if (t) {
                  let { message: i } = lT(
                    "MISSING_OR_INVALID",
                    "Record was recently deleted - ".concat(t, ": ").concat(e)
                  );
                  throw Error(i);
                }
              }),
              fy(this, "isLinkModeEnabled", (e, t) => {
                var i, r, s, n, o, a, c, l, h;
                return (
                  !!e &&
                  t === hS.link_mode &&
                  (null ==
                  (r = null == (i = this.client.metadata) ? void 0 : i.redirect)
                    ? void 0
                    : r.linkMode) === !0 &&
                  (null ==
                  (n = null == (s = this.client.metadata) ? void 0 : s.redirect)
                    ? void 0
                    : n.universal) !== void 0 &&
                  (null ==
                  (a = null == (o = this.client.metadata) ? void 0 : o.redirect)
                    ? void 0
                    : a.universal) !== "" &&
                  (null == (c = null == e ? void 0 : e.redirect)
                    ? void 0
                    : c.universal) !== void 0 &&
                  (null == (l = null == e ? void 0 : e.redirect)
                    ? void 0
                    : l.universal) !== "" &&
                  (null == (h = null == e ? void 0 : e.redirect)
                    ? void 0
                    : h.linkMode) === !0 &&
                  this.client.core.linkModeSupportedApps.includes(
                    e.redirect.universal
                  ) &&
                  "u" >
                    typeof (null == globalThis ? void 0 : globalThis.Linking)
                );
              }),
              fy(this, "getAppLinkIfEnabled", (e, t) => {
                var i;
                return this.isLinkModeEnabled(e, t)
                  ? null == (i = null == e ? void 0 : e.redirect)
                    ? void 0
                    : i.universal
                  : void 0;
              }),
              fy(this, "handleLinkModeMessage", (e) => {
                let { url: t } = e;
                if (!t || !t.includes("wc_ev") || !t.includes("topic")) return;
                let i = nO(t, "topic") || "",
                  r = decodeURIComponent(nO(t, "wc_ev") || ""),
                  s = this.client.session.keys.includes(i);
                s &&
                  this.client.session.update(i, {
                    transportType: hS.link_mode,
                  }),
                  this.client.core.dispatchEnvelope({
                    topic: i,
                    message: r,
                    sessionExists: s,
                  });
              }),
              fy(this, "registerLinkModeListeners", async () => {
                var e;
                if (
                  nT() ||
                  (nh() &&
                    null != (e = this.client.metadata.redirect) &&
                    e.linkMode)
                ) {
                  let e = null == globalThis ? void 0 : globalThis.Linking;
                  if ("u" > typeof e) {
                    e.addEventListener(
                      "url",
                      this.handleLinkModeMessage,
                      this.client.name
                    );
                    let t = await e.getInitialURL();
                    t &&
                      setTimeout(() => {
                        this.handleLinkModeMessage({ url: t });
                      }, 50);
                  }
                }
              }),
              fy(this, "getTVFParams", (e, t, i) => {
                var r, s, n;
                if (!(null != (r = t.request) && r.method)) return {};
                let o = {
                  correlationId: e,
                  rpcMethods: [t.request.method],
                  chainId: t.chainId,
                };
                try {
                  (o.txHashes = this.extractTxHashesFromResult(t.request, i)),
                    (o.contractAddresses = this.isValidContractData(
                      t.request.params
                    )
                      ? [
                          null ==
                          (n = null == (s = t.request.params) ? void 0 : s[0])
                            ? void 0
                            : n.to,
                        ]
                      : []);
                } catch (e) {
                  this.client.logger.warn("Error getting TVF params", e);
                }
                return o;
              }),
              fy(this, "isValidContractData", (e) => {
                var t;
                if (!e) return !1;
                try {
                  let i =
                    (null == e ? void 0 : e.data) ||
                    (null == (t = null == e ? void 0 : e[0]) ? void 0 : t.data);
                  if (!i.startsWith("0x")) return !1;
                  let r = i.slice(2);
                  return !!/^[0-9a-fA-F]*$/.test(r) && r.length % 2 == 0;
                } catch (e) {}
                return !1;
              }),
              fy(this, "extractTxHashesFromResult", (e, t) => {
                var i;
                try {
                  if (!t) return [];
                  let s = e.method,
                    n = fr[s];
                  if ("sui_signTransaction" === s)
                    return [
                      (function (e) {
                        let t = new Uint8Array(r.Buffer.from(e, "base64")),
                          i = Array.from("TransactionData::").map((e) =>
                            e.charCodeAt(0)
                          ),
                          s = new Uint8Array(i.length + t.length);
                        s.set(i), s.set(t, i.length);
                        let n = o1(s, { dkLen: 32 });
                        return i$.encode(n);
                      })(t.transactionBytes),
                    ];
                  if ("near_signTransaction" === s) return [o5(t)];
                  if ("near_signTransactions" === s) return t.map((e) => o5(e));
                  if (
                    "xrpl_signTransactionFor" === s ||
                    "xrpl_signTransaction" === s
                  )
                    return [null == (i = t.tx_json) ? void 0 : i.hash];
                  if ("polkadot_signTransaction" === s)
                    return [
                      (function (e) {
                        let t = Uint8Array.from(
                            r.Buffer.from(e.signature, "hex")
                          ),
                          i = (function (e) {
                            var t, i;
                            let { publicKey: r, signature: s, payload: n } = e,
                              o = lX(n.method),
                              a =
                                128 |
                                parseInt(
                                  (null == (t = n.version)
                                    ? void 0
                                    : t.toString()) || "4"
                                ),
                              c = (function (e) {
                                let t = i$.decode(e)[0];
                                return 42 === t ? 0 : 60 === t ? 2 : 1;
                              })(n.address),
                              l =
                                "00" === n.era
                                  ? new Uint8Array([0])
                                  : lX(n.era);
                            if (1 !== l.length && 2 !== l.length)
                              throw Error("Invalid era length");
                            let h = parseInt(n.nonce, 16),
                              u = new Uint8Array([255 & h, (h >> 8) & 255]),
                              d = new Uint8Array([
                                0,
                                ...r,
                                c,
                                ...s,
                                ...l,
                                ...u,
                                ...(function (e) {
                                  if (e < BigInt(1) << BigInt(6))
                                    return new Uint8Array([
                                      Number(e << BigInt(2)),
                                    ]);
                                  if (e < BigInt(1) << BigInt(14)) {
                                    let t = (e << BigInt(2)) | BigInt(1);
                                    return new Uint8Array([
                                      Number(t & BigInt(255)),
                                      Number((t >> BigInt(8)) & BigInt(255)),
                                    ]);
                                  }
                                  if (e < BigInt(1) << BigInt(30)) {
                                    let t = (e << BigInt(2)) | BigInt(2);
                                    return new Uint8Array([
                                      Number(t & BigInt(255)),
                                      Number((t >> BigInt(8)) & BigInt(255)),
                                      Number((t >> BigInt(16)) & BigInt(255)),
                                      Number((t >> BigInt(24)) & BigInt(255)),
                                    ]);
                                  }
                                  throw Error(
                                    "BigInt compact encoding not supported > 2^30"
                                  );
                                })(
                                  BigInt(
                                    "0x".concat(
                                      (i = n.tip).startsWith("0x")
                                        ? i.slice(2)
                                        : i
                                    )
                                  )
                                ),
                                ...o,
                              ]);
                            return new Uint8Array([
                              ...(function (e) {
                                if (e < 64) return new Uint8Array([e << 2]);
                                if (e < 16384) {
                                  let t = (e << 2) | 1;
                                  return new Uint8Array([
                                    255 & t,
                                    (t >> 8) & 255,
                                  ]);
                                }
                                if (e < 0x40000000) {
                                  let t = (e << 2) | 2;
                                  return new Uint8Array([
                                    255 & t,
                                    (t >> 8) & 255,
                                    (t >> 16) & 255,
                                    (t >> 24) & 255,
                                  ]);
                                }
                                throw Error(
                                  "Compact encoding > 2^30 not supported"
                                );
                              })(d.length + 1),
                              a,
                              ...d,
                            ]);
                          })({
                            publicKey: (function (e) {
                              let t = i$.decode(e);
                              if (t.length < 33)
                                throw Error(
                                  "Too short to contain a public key"
                                );
                              return t.slice(1, 33);
                            })(e.transaction.address),
                            signature: t,
                            payload: e.transaction,
                          });
                        var s = r.Buffer.from(i).toString("hex");
                        let n = lX(s),
                          o = (0, s4.blake2b)(n, void 0, 32);
                        return "0x" + r.Buffer.from(o).toString("hex");
                      })({
                        transaction: e.params.transactionPayload,
                        signature: t.signature,
                      }),
                    ];
                  if ("algo_signTxn" === s)
                    return lU(t) ? t.map((e) => o4(e)) : [o4(t)];
                  if ("cosmos_signDirect" === s)
                    return [
                      (function (e) {
                        let t = r.Buffer.from(e.signed.bodyBytes, "base64"),
                          i = r.Buffer.from(e.signed.authInfoBytes, "base64"),
                          s = r.Buffer.from(e.signature.signature, "base64"),
                          n = [];
                        n.push(r.Buffer.from([10])),
                          n.push(o9(t.length)),
                          n.push(t),
                          n.push(r.Buffer.from([18])),
                          n.push(o9(i.length)),
                          n.push(i),
                          n.push(r.Buffer.from([26])),
                          n.push(o9(s.length)),
                          n.push(s);
                        let o = oV(r.Buffer.concat(n));
                        return r.Buffer.from(o).toString("hex").toUpperCase();
                      })(t),
                    ];
                  if ("string" == typeof t) return [t];
                  let o = t[n.key];
                  if (lU(o))
                    return "solana_signAllTransactions" === s
                      ? o.map((e) =>
                          (function (e) {
                            let t = atob(e),
                              i = new Uint8Array(t.length);
                            for (let e = 0; e < t.length; e++)
                              i[e] = t.charCodeAt(e);
                            let s = i[0];
                            if (0 === s) throw Error("No signatures found");
                            if (i.length < 1 + 64 * s)
                              throw Error(
                                "Transaction data too short for claimed signature count"
                              );
                            if (i.length < 100)
                              throw Error("Transaction too short");
                            let n = r.Buffer.from(e, "base64").slice(1, 65);
                            return i$.encode(n);
                          })(e)
                        )
                      : o;
                  if ("string" == typeof o) return [o];
                } catch (e) {
                  this.client.logger.warn(
                    "Error extracting tx hashes from result",
                    e
                  );
                }
                return [];
              });
          }
        }
        class fm extends dS {
          constructor(e, t) {
            super(e, t, "proposal", d6), (this.core = e), (this.logger = t);
          }
        }
        class fv extends dS {
          constructor(e, t) {
            super(e, t, "session", d6), (this.core = e), (this.logger = t);
          }
        }
        class fw extends dS {
          constructor(e, t) {
            super(e, t, "request", d6, (e) => e.id),
              (this.core = e),
              (this.logger = t);
          }
        }
        class fE extends dS {
          constructor(e, t) {
            super(e, t, "authKeys", fn, () => fo),
              (this.core = e),
              (this.logger = t);
          }
        }
        class fx extends dS {
          constructor(e, t) {
            super(e, t, "pairingTopics", fn),
              (this.core = e),
              (this.logger = t);
          }
        }
        class fI extends dS {
          constructor(e, t) {
            super(e, t, "requests", fn, (e) => e.id),
              (this.core = e),
              (this.logger = t);
          }
        }
        var f_ = Object.defineProperty,
          fD = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? f_(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class fS {
          async init() {
            await this.authKeys.init(),
              await this.pairingTopics.init(),
              await this.requests.init();
          }
          constructor(e, t) {
            (this.core = e),
              (this.logger = t),
              fD(this, "authKeys"),
              fD(this, "pairingTopics"),
              fD(this, "requests"),
              (this.authKeys = new fE(this.core, this.logger)),
              (this.pairingTopics = new fx(this.core, this.logger)),
              (this.requests = new fI(this.core, this.logger));
          }
        }
        var fP = Object.defineProperty,
          fA = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? fP(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class fO extends ei {
          static async init(e) {
            let t = new fO(e);
            return await t.initialize(), t;
          }
          get context() {
            return (0, L.getLoggerContext)(this.logger);
          }
          get pairing() {
            return this.core.pairing.pairings;
          }
          async initialize() {
            this.logger.trace("Initialized");
            try {
              await this.core.start(),
                await this.session.init(),
                await this.proposal.init(),
                await this.pendingRequest.init(),
                await this.auth.init(),
                await this.engine.init(),
                this.logger.info("SignClient Initialization Success"),
                setTimeout(() => {
                  this.engine.processRelayMessageCache();
                }, (0, o.toMiliseconds)(o.ONE_SECOND));
            } catch (e) {
              throw (
                (this.logger.info("SignClient Initialization Failure"),
                this.logger.error(e.message),
                e)
              );
            }
          }
          constructor(e) {
            super(e),
              fA(this, "protocol", "wc"),
              fA(this, "version", 2),
              fA(this, "name", d5.name),
              fA(this, "metadata"),
              fA(this, "core"),
              fA(this, "logger"),
              fA(this, "events", new n.EventEmitter()),
              fA(this, "engine"),
              fA(this, "session"),
              fA(this, "proposal"),
              fA(this, "pendingRequest"),
              fA(this, "auth"),
              fA(this, "signConfig"),
              fA(this, "on", (e, t) => this.events.on(e, t)),
              fA(this, "once", (e, t) => this.events.once(e, t)),
              fA(this, "off", (e, t) => this.events.off(e, t)),
              fA(this, "removeListener", (e, t) =>
                this.events.removeListener(e, t)
              ),
              fA(this, "removeAllListeners", (e) =>
                this.events.removeAllListeners(e)
              ),
              fA(this, "connect", async (e) => {
                try {
                  return await this.engine.connect(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              fA(this, "pair", async (e) => {
                try {
                  return await this.engine.pair(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              fA(this, "approve", async (e) => {
                try {
                  return await this.engine.approve(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              fA(this, "reject", async (e) => {
                try {
                  return await this.engine.reject(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              fA(this, "update", async (e) => {
                try {
                  return await this.engine.update(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              fA(this, "extend", async (e) => {
                try {
                  return await this.engine.extend(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              fA(this, "request", async (e) => {
                try {
                  return await this.engine.request(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              fA(this, "respond", async (e) => {
                try {
                  return await this.engine.respond(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              fA(this, "ping", async (e) => {
                try {
                  return await this.engine.ping(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              fA(this, "emit", async (e) => {
                try {
                  return await this.engine.emit(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              fA(this, "disconnect", async (e) => {
                try {
                  return await this.engine.disconnect(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              fA(this, "find", (e) => {
                try {
                  return this.engine.find(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              fA(this, "getPendingSessionRequests", () => {
                try {
                  return this.engine.getPendingSessionRequests();
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              fA(this, "authenticate", async (e, t) => {
                try {
                  return await this.engine.authenticate(e, t);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              fA(this, "formatAuthMessage", (e) => {
                try {
                  return this.engine.formatAuthMessage(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              fA(this, "approveSessionAuthenticate", async (e) => {
                try {
                  return await this.engine.approveSessionAuthenticate(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              fA(this, "rejectSessionAuthenticate", async (e) => {
                try {
                  return await this.engine.rejectSessionAuthenticate(e);
                } catch (e) {
                  throw (this.logger.error(e.message), e);
                }
              }),
              (this.name = (null == e ? void 0 : e.name) || d5.name),
              (this.metadata = (function (e) {
                var t, i;
                let r = np();
                try {
                  let s, n;
                  return (
                    null != e &&
                      e.url &&
                      r.url &&
                      new URL(e.url).host !== new URL(r.url).host &&
                      (console.warn(
                        "The configured WalletConnect 'metadata.url':"
                          .concat(e.url, " differs from the actual page url:")
                          .concat(
                            r.url,
                            ". This is probably unintended and can lead to issues."
                          )
                      ),
                      (e.url = r.url)),
                    null != (t = null == e ? void 0 : e.icons) &&
                      t.length &&
                      e.icons.length > 0 &&
                      (e.icons = e.icons.filter((e) => "" !== e)),
                    (s = na(na({}, r), e)),
                    (n = {
                      url: (null == e ? void 0 : e.url) || r.url,
                      name: (null == e ? void 0 : e.name) || r.name,
                      description:
                        (null == e ? void 0 : e.description) || r.description,
                      icons:
                        null != (i = null == e ? void 0 : e.icons) &&
                        i.length &&
                        e.icons.length > 0
                          ? e.icons
                          : r.icons,
                    }),
                    nt(s, ni(n))
                  );
                } catch (t) {
                  return (
                    console.warn("Error populating app metadata", t), e || r
                  );
                }
              })(null == e ? void 0 : e.metadata)),
              (this.signConfig = null == e ? void 0 : e.signConfig);
            let t =
              "u" > typeof (null == e ? void 0 : e.logger) &&
              "string" != typeof (null == e ? void 0 : e.logger)
                ? e.logger
                : (0, q.default)(
                    (0, L.getDefaultLoggerOptions)({
                      level: (null == e ? void 0 : e.logger) || d5.logger,
                    })
                  );
            (this.core = (null == e ? void 0 : e.core) || new d8(e)),
              (this.logger = (0, L.generateChildLogger)(t, this.name)),
              (this.session = new fv(this.core, this.logger)),
              (this.proposal = new fm(this.core, this.logger)),
              (this.pendingRequest = new fw(this.core, this.logger)),
              (this.engine = new fb(this)),
              (this.auth = new fS(this.core, this.logger));
          }
        }
        var q = q,
          fC = e.i(124022),
          fT = Object.defineProperty,
          fN = Object.defineProperties,
          fU = Object.getOwnPropertyDescriptors,
          fR = Object.getOwnPropertySymbols,
          fB = Object.prototype.hasOwnProperty,
          fk = Object.prototype.propertyIsEnumerable,
          fj = (e, t, i) =>
            t in e
              ? fT(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          fL = (e, t) => {
            for (var i in t || (t = {})) fB.call(t, i) && fj(e, i, t[i]);
            if (fR) for (var i of fR(t)) fk.call(t, i) && fj(e, i, t[i]);
            return e;
          },
          fq = (e, t) => fN(e, fU(t));
        let fM = {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
        };
        class fz {
          get connected() {
            return this.isAvailable;
          }
          get connecting() {
            return this.registering;
          }
          on(e, t) {
            this.events.on(e, t);
          }
          once(e, t) {
            this.events.once(e, t);
          }
          off(e, t) {
            this.events.off(e, t);
          }
          removeListener(e, t) {
            this.events.removeListener(e, t);
          }
          async open() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.url;
            await this.register(e);
          }
          async close() {
            if (!this.isAvailable) throw Error("Connection already closed");
            this.onClose();
          }
          async send(e) {
            this.isAvailable || (await this.register());
            try {
              let t = (0, A.safeJsonStringify)(e),
                i = await (
                  await (0, fC.default)(this.url, fq(fL({}, fM), { body: t }))
                ).json();
              this.onPayload({ data: i });
            } catch (t) {
              this.onError(e.id, t);
            }
          }
          async register() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.url;
            if (!hs(e))
              throw Error(
                "Provided URL is not compatible with HTTP connection: ".concat(
                  e
                )
              );
            if (this.registering) {
              let e = this.events.getMaxListeners();
              return (
                (this.events.listenerCount("register_error") >= e ||
                  this.events.listenerCount("open") >= e) &&
                  this.events.setMaxListeners(e + 1),
                new Promise((e, t) => {
                  this.events.once("register_error", (e) => {
                    this.resetMaxListeners(), t(e);
                  }),
                    this.events.once("open", () => {
                      if (
                        (this.resetMaxListeners(),
                        typeof this.isAvailable > "u")
                      )
                        return t(
                          Error("HTTP connection is missing or invalid")
                        );
                      e();
                    });
                })
              );
            }
            (this.url = e), (this.registering = !0);
            try {
              if (!this.disableProviderPing) {
                let t = (0, A.safeJsonStringify)({
                  id: 1,
                  jsonrpc: "2.0",
                  method: "test",
                  params: [],
                });
                await (0, fC.default)(e, fq(fL({}, fM), { body: t }));
              }
              this.onOpen();
            } catch (t) {
              let e = this.parseError(t);
              throw (this.events.emit("register_error", e), this.onClose(), e);
            }
          }
          onOpen() {
            (this.isAvailable = !0),
              (this.registering = !1),
              this.events.emit("open");
          }
          onClose() {
            (this.isAvailable = !1),
              (this.registering = !1),
              this.events.emit("close");
          }
          onPayload(e) {
            if (typeof e.data > "u") return;
            let t =
              "string" == typeof e.data ? (0, A.safeJsonParse)(e.data) : e.data;
            this.events.emit("payload", t);
          }
          onError(e, t) {
            let i = this.parseError(t),
              r = l7(e, i.message || i.toString());
            this.events.emit("payload", r);
          }
          parseError(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.url;
            return l8(e, t, "HTTP");
          }
          resetMaxListeners() {
            this.events.getMaxListeners() > 10 &&
              this.events.setMaxListeners(10);
          }
          constructor(e, t = !1) {
            if (
              ((this.url = e),
              (this.disableProviderPing = t),
              (this.events = new n.EventEmitter()),
              (this.isAvailable = !1),
              (this.registering = !1),
              !hs(e))
            )
              throw Error(
                "Provided URL is not compatible with HTTP connection: ".concat(
                  e
                )
              );
            (this.url = e), (this.disableProviderPing = t);
          }
        }
        let fF = "error",
          fH = "".concat("wc", "@2:").concat("universal_provider", ":"),
          fV = "https://rpc.walletconnect.org/v1/",
          fK = "generic",
          fW = "".concat(fV, "bundler"),
          fG = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
        function fY(e) {
          return null == e || ("object" != typeof e && "function" != typeof e);
        }
        function fJ(e) {
          return Object.getOwnPropertySymbols(e).filter((t) =>
            Object.prototype.propertyIsEnumerable.call(e, t)
          );
        }
        function fZ(e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : Object.prototype.toString.call(e);
        }
        let fX = "[object String]",
          fQ = "[object Number]",
          f$ = "[object Boolean]",
          f0 = "[object Arguments]";
        function f1(e) {
          return ArrayBuffer.isView(e) && !(e instanceof DataView);
        }
        function f2(e, t, i) {
          let s =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : new Map(),
            n =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : void 0,
            o = null == n ? void 0 : n(e, t, i, s);
          if (null != o) return o;
          if (fY(e)) return e;
          if (s.has(e)) return s.get(e);
          if (Array.isArray(e)) {
            let t = Array(e.length);
            s.set(e, t);
            for (let r = 0; r < e.length; r++) t[r] = f2(e[r], r, i, s, n);
            return (
              Object.hasOwn(e, "index") && (t.index = e.index),
              Object.hasOwn(e, "input") && (t.input = e.input),
              t
            );
          }
          if (e instanceof Date) return new Date(e.getTime());
          if (e instanceof RegExp) {
            let t = new RegExp(e.source, e.flags);
            return (t.lastIndex = e.lastIndex), t;
          }
          if (e instanceof Map) {
            let t = new Map();
            for (let [r, o] of (s.set(e, t), e)) t.set(r, f2(o, r, i, s, n));
            return t;
          }
          if (e instanceof Set) {
            let t = new Set();
            for (let r of (s.set(e, t), e)) t.add(f2(r, void 0, i, s, n));
            return t;
          }
          if ("u" > typeof r.Buffer && r.Buffer.isBuffer(e))
            return e.subarray();
          if (f1(e)) {
            let t = new (Object.getPrototypeOf(e).constructor)(e.length);
            s.set(e, t);
            for (let r = 0; r < e.length; r++) t[r] = f2(e[r], r, i, s, n);
            return t;
          }
          if (
            e instanceof ArrayBuffer ||
            ("u" > typeof SharedArrayBuffer && e instanceof SharedArrayBuffer)
          )
            return e.slice(0);
          if (e instanceof DataView) {
            let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
            return s.set(e, t), f8(t, e, i, s, n), t;
          }
          if ("u" > typeof File && e instanceof File) {
            let t = new File([e], e.name, { type: e.type });
            return s.set(e, t), f8(t, e, i, s, n), t;
          }
          if (e instanceof Blob) {
            let t = new Blob([e], { type: e.type });
            return s.set(e, t), f8(t, e, i, s, n), t;
          }
          if (e instanceof Error) {
            let t = new e.constructor();
            return (
              s.set(e, t),
              (t.message = e.message),
              (t.name = e.name),
              (t.stack = e.stack),
              (t.cause = e.cause),
              f8(t, e, i, s, n),
              t
            );
          }
          if (
            "object" == typeof e &&
            (function (e) {
              switch (fZ(e)) {
                case f0:
                case "[object Array]":
                case "[object ArrayBuffer]":
                case "[object DataView]":
                case f$:
                case "[object Date]":
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Map]":
                case fQ:
                case "[object Object]":
                case "[object RegExp]":
                case "[object Set]":
                case fX:
                case "[object Symbol]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                  return !0;
                default:
                  return !1;
              }
            })(e)
          ) {
            let t = Object.create(Object.getPrototypeOf(e));
            return s.set(e, t), f8(t, e, i, s, n), t;
          }
          return e;
        }
        function f8(e, t) {
          let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : e,
            r = arguments.length > 3 ? arguments[3] : void 0,
            s = arguments.length > 4 ? arguments[4] : void 0,
            n = [...Object.keys(t), ...fJ(t)];
          for (let o = 0; o < n.length; o++) {
            let a = n[o],
              c = Object.getOwnPropertyDescriptor(e, a);
            (null == c || c.writable) && (e[a] = f2(t[a], a, i, r, s));
          }
        }
        function f3(e) {
          var t;
          return (
            (t = (t, i, r, s) => {
              let n = void 0;
              if (null != n) return n;
              if ("object" == typeof e)
                switch (Object.prototype.toString.call(e)) {
                  case fQ:
                  case fX:
                  case f$: {
                    let t = new e.constructor(null == e ? void 0 : e.valueOf());
                    return f8(t, e), t;
                  }
                  case f0: {
                    let t = {};
                    return (
                      f8(t, e),
                      (t.length = e.length),
                      (t[Symbol.iterator] = e[Symbol.iterator]),
                      t
                    );
                  }
                  default:
                    return;
                }
            }),
            f2(e, void 0, e, new Map(), t)
          );
        }
        function f6(e) {
          return (
            null !== e && "object" == typeof e && "[object Arguments]" === fZ(e)
          );
        }
        function f5(e) {
          return "object" == typeof e && null !== e;
        }
        function f4() {}
        var f9 = Object.defineProperty,
          f7 = Object.defineProperties,
          pe = Object.getOwnPropertyDescriptors,
          pt = Object.getOwnPropertySymbols,
          pi = Object.prototype.hasOwnProperty,
          pr = Object.prototype.propertyIsEnumerable,
          ps = (e, t, i) =>
            t in e
              ? f9(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          pn = (e, t) => {
            for (var i in t || (t = {})) pi.call(t, i) && ps(e, i, t[i]);
            if (pt) for (var i of pt(t)) pr.call(t, i) && ps(e, i, t[i]);
            return e;
          },
          po = (e, t) => f7(e, pe(t));
        function pa(e, t, i) {
          var r;
          let s = s9(e);
          return (
            (null == (r = t.rpcMap) ? void 0 : r[s.reference]) ||
            ""
              .concat(fV, "?chainId=")
              .concat(s.namespace, ":")
              .concat(s.reference, "&projectId=")
              .concat(i)
          );
        }
        function pc(e) {
          return e.includes(":") ? e.split(":")[1] : e;
        }
        function pl(e) {
          return e.map((e) =>
            "".concat(e.split(":")[0], ":").concat(e.split(":")[1])
          );
        }
        function ph() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (function (e) {
            for (
              var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), s = 1;
              s < t;
              s++
            )
              i[s - 1] = arguments[s];
            return (function (e) {
              for (
                var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), s = 1;
                s < t;
                s++
              )
                i[s - 1] = arguments[s];
              let n = i.slice(0, -1),
                o = i[i.length - 1],
                a = e;
              for (let e = 0; e < n.length; e++)
                a = (function e(t, i, s, n) {
                  if (
                    (fY(t) && (t = Object(t)),
                    null == i || "object" != typeof i)
                  )
                    return t;
                  if (n.has(i))
                    return (function (e) {
                      if (fY(e)) return e;
                      if (
                        Array.isArray(e) ||
                        f1(e) ||
                        e instanceof ArrayBuffer ||
                        ("u" > typeof SharedArrayBuffer &&
                          e instanceof SharedArrayBuffer)
                      )
                        return e.slice(0);
                      let t = Object.getPrototypeOf(e),
                        i = t.constructor;
                      if (
                        e instanceof Date ||
                        e instanceof Map ||
                        e instanceof Set
                      )
                        return new i(e);
                      if (e instanceof RegExp) {
                        let t = new i(e);
                        return (t.lastIndex = e.lastIndex), t;
                      }
                      if (e instanceof DataView)
                        return new i(e.buffer.slice(0));
                      if (e instanceof Error) {
                        let t = new i(e.message);
                        return (
                          (t.stack = e.stack),
                          (t.name = e.name),
                          (t.cause = e.cause),
                          t
                        );
                      }
                      return "u" > typeof File && e instanceof File
                        ? new i([e], e.name, {
                            type: e.type,
                            lastModified: e.lastModified,
                          })
                        : "object" == typeof e
                        ? Object.assign(Object.create(t), e)
                        : e;
                    })(n.get(i));
                  if ((n.set(i, t), Array.isArray(i))) {
                    var o;
                    i = i.slice();
                    for (let e = 0; e < i.length; e++)
                      i[e] = null != (o = i[e]) ? o : void 0;
                  }
                  let a = [...Object.keys(i), ...fJ(i)];
                  for (let o = 0; o < a.length; o++) {
                    let c = a[o],
                      l = i[c],
                      h = t[c];
                    if (
                      (f6(l) && (l = { ...l }),
                      f6(h) && (h = { ...h }),
                      "u" > typeof r.Buffer &&
                        r.Buffer.isBuffer(l) &&
                        (l = f3(l)),
                      Array.isArray(l))
                    )
                      if ("object" == typeof h && null != h) {
                        let e = [],
                          t = Reflect.ownKeys(h);
                        for (let i = 0; i < t.length; i++) {
                          let r = t[i];
                          e[r] = h[r];
                        }
                        h = e;
                      } else h = [];
                    let u = s(h, l, c, t, i, n);
                    null != u
                      ? (t[c] = u)
                      : Array.isArray(l) || (f5(h) && f5(l))
                      ? (t[c] = e(h, l, s, n))
                      : null == h &&
                        (function (e) {
                          if ("object" != typeof e || null == e) return !1;
                          if (null === Object.getPrototypeOf(e)) return !0;
                          if (
                            "[object Object]" !==
                            Object.prototype.toString.call(e)
                          ) {
                            var t;
                            let i = e[Symbol.toStringTag];
                            return (
                              null != i &&
                              !!(null ==
                              (t = Object.getOwnPropertyDescriptor(
                                e,
                                Symbol.toStringTag
                              ))
                                ? void 0
                                : t.writable) &&
                              e.toString() === "[object ".concat(i, "]")
                            );
                          }
                          let i = e;
                          for (; null !== Object.getPrototypeOf(i); )
                            i = Object.getPrototypeOf(i);
                          return Object.getPrototypeOf(e) === i;
                        })(l)
                      ? (t[c] = e({}, l, s, n))
                      : null == h && f1(l)
                      ? (t[c] = f3(l))
                      : (void 0 === h || void 0 !== l) && (t[c] = l);
                  }
                  return t;
                })(a, n[e], o, new Map());
              return a;
            })(e, ...i, f4);
          })(pu(e), pu(t));
        }
        function pu(e) {
          var t, i, r, s, n;
          let o = {};
          if (!lR(e)) return o;
          for (let [a, c] of Object.entries(e)) {
            let e = lD(a) ? [a] : c.chains,
              l = c.methods || [],
              h = c.events || [],
              u = c.rpcMap || {},
              d = lS(a);
            (o[d] = po(pn(pn({}, o[d]), c), {
              chains: nS(e, null == (t = o[d]) ? void 0 : t.chains),
              methods: nS(l, null == (i = o[d]) ? void 0 : i.methods),
              events: nS(h, null == (r = o[d]) ? void 0 : r.events),
            })),
              (lR(u) || lR((null == (s = o[d]) ? void 0 : s.rpcMap) || {})) &&
                (o[d].rpcMap = pn(
                  pn({}, u),
                  null == (n = o[d]) ? void 0 : n.rpcMap
                ));
          }
          return o;
        }
        function pd(e) {
          return e.includes(":") ? e.split(":")[2] : e;
        }
        function pf(e) {
          let t = {};
          for (let [i, r] of Object.entries(e)) {
            let e = r.methods || [],
              s = r.events || [],
              n = r.accounts || [],
              o = lD(i) ? [i] : r.chains ? r.chains : pl(r.accounts);
            t[i] = { chains: o, methods: e, events: s, accounts: n };
          }
          return t;
        }
        function pp(e) {
          return "number" == typeof e
            ? e
            : e.includes("0x")
            ? parseInt(e, 16)
            : isNaN(Number((e = e.includes(":") ? e.split(":")[1] : e)))
            ? e
            : Number(e);
        }
        let pg = {},
          py = (e) => pg[e],
          pb = (e, t) => {
            pg[e] = t;
          };
        var pm = Object.defineProperty,
          pv = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? pm(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class pw {
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method)
              ? this.client.request(e)
              : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            this.httpProviders[e] || this.setHttpProvider(e, t),
              (this.chainId = e),
              this.events.emit(
                fG.DEFAULT_CHAIN_CHANGED,
                "".concat(this.name, ":").concat(e)
              );
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return (
              (e &&
                e
                  .filter((e) => e.split(":")[1] === this.chainId.toString())
                  .map((e) => e.split(":")[2])) ||
              []
            );
          }
          createHttpProviders() {
            let e = {};
            return (
              this.namespace.chains.forEach((t) => {
                var i;
                let r = pc(t);
                e[r] = this.createHttpProvider(
                  r,
                  null == (i = this.namespace.rpcMap) ? void 0 : i[t]
                );
              }),
              e
            );
          }
          getHttpProvider() {
            let e = "".concat(this.name, ":").concat(this.chainId),
              t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProvider(e, t) {
            return new hu(
              new fz(
                t || pa(e, this.namespace, this.client.core.projectId),
                py("disableProviderPing")
              )
            );
          }
          constructor(e) {
            pv(this, "name", "polkadot"),
              pv(this, "client"),
              pv(this, "httpProviders"),
              pv(this, "events"),
              pv(this, "namespace"),
              pv(this, "chainId"),
              (this.namespace = e.namespace),
              (this.events = py("events")),
              (this.client = py("client")),
              (this.chainId = this.getDefaultChain()),
              (this.httpProviders = this.createHttpProviders());
          }
        }
        var pE = Object.defineProperty,
          px = Object.defineProperties,
          pI = Object.getOwnPropertyDescriptors,
          p_ = Object.getOwnPropertySymbols,
          pD = Object.prototype.hasOwnProperty,
          pS = Object.prototype.propertyIsEnumerable,
          pP = (e, t, i) =>
            t in e
              ? pE(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          pA = (e, t) => {
            for (var i in t || (t = {})) pD.call(t, i) && pP(e, i, t[i]);
            if (p_) for (var i of p_(t)) pS.call(t, i) && pP(e, i, t[i]);
            return e;
          },
          pO = (e, t) => px(e, pI(t)),
          pC = (e, t, i) => pP(e, "symbol" != typeof t ? t + "" : t, i);
        class pT {
          async request(e) {
            switch (e.request.method) {
              case "eth_requestAccounts":
              case "eth_accounts":
                return this.getAccounts();
              case "wallet_switchEthereumChain":
                return await this.handleSwitchChain(e);
              case "eth_chainId":
                return parseInt(this.getDefaultChain());
              case "wallet_getCapabilities":
                return await this.getCapabilities(e);
              case "wallet_getCallsStatus":
                return await this.getCallStatus(e);
            }
            return this.namespace.methods.includes(e.request.method)
              ? await this.client.request(e)
              : this.getHttpProvider().request(e.request);
          }
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          setDefaultChain(e, t) {
            this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
              (this.chainId = parseInt(e)),
              this.events.emit(
                fG.DEFAULT_CHAIN_CHANGED,
                "".concat(this.name, ":").concat(e)
              );
          }
          requestAccounts() {
            return this.getAccounts();
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId.toString();
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          createHttpProvider(e, t) {
            return new hu(
              new fz(
                t ||
                  pa(
                    "".concat(this.name, ":").concat(e),
                    this.namespace,
                    this.client.core.projectId
                  ),
                py("disableProviderPing")
              )
            );
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProviders() {
            let e = {};
            return (
              this.namespace.chains.forEach((t) => {
                var i;
                let r = parseInt(pc(t));
                e[r] = this.createHttpProvider(
                  r,
                  null == (i = this.namespace.rpcMap) ? void 0 : i[t]
                );
              }),
              e
            );
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return e
              ? [
                  ...new Set(
                    e
                      .filter(
                        (e) => e.split(":")[1] === this.chainId.toString()
                      )
                      .map((e) => e.split(":")[2])
                  ),
                ]
              : [];
          }
          getHttpProvider() {
            let e = this.chainId,
              t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          async handleSwitchChain(e) {
            var t, i;
            let r = e.request.params
                ? null == (t = e.request.params[0])
                  ? void 0
                  : t.chainId
                : "0x0",
              s = parseInt((r = r.startsWith("0x") ? r : "0x".concat(r)), 16);
            if (this.isChainApproved(s)) this.setDefaultChain("".concat(s));
            else if (
              this.namespace.methods.includes("wallet_switchEthereumChain")
            )
              await this.client.request({
                topic: e.topic,
                request: { method: e.request.method, params: [{ chainId: r }] },
                chainId: null == (i = this.namespace.chains) ? void 0 : i[0],
              }),
                this.setDefaultChain("".concat(s));
            else
              throw Error(
                "Failed to switch to chain 'eip155:".concat(
                  s,
                  "'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method."
                )
              );
            return null;
          }
          isChainApproved(e) {
            return this.namespace.chains.includes(
              "".concat(this.name, ":").concat(e)
            );
          }
          async getCapabilities(e) {
            var t, i, r, s, n;
            let o =
                null == (i = null == (t = e.request) ? void 0 : t.params)
                  ? void 0
                  : i[0],
              a =
                (null == (s = null == (r = e.request) ? void 0 : r.params)
                  ? void 0
                  : s[1]) || [],
              c = "".concat(o).concat(a.join(","));
            if (!o)
              throw Error(
                "Missing address parameter in `wallet_getCapabilities` request"
              );
            let l = this.client.session.get(e.topic),
              h =
                (null == (n = null == l ? void 0 : l.sessionProperties)
                  ? void 0
                  : n.capabilities) || {};
            if (null != h && h[c]) return null == h ? void 0 : h[c];
            let u = await this.client.request(e);
            try {
              await this.client.session.update(e.topic, {
                sessionProperties: pO(pA({}, l.sessionProperties || {}), {
                  capabilities: pO(pA({}, h || {}), { [c]: u }),
                }),
              });
            } catch (e) {
              console.warn("Failed to update session with capabilities", e);
            }
            return u;
          }
          async getCallStatus(e) {
            var t, i;
            let r = this.client.session.get(e.topic),
              s = null == (t = r.sessionProperties) ? void 0 : t.bundler_name;
            if (s) {
              let t = this.getBundlerUrl(e.chainId, s);
              try {
                return await this.getUserOperationReceipt(t, e);
              } catch (e) {
                console.warn("Failed to fetch call status from bundler", e, t);
              }
            }
            let n = null == (i = r.sessionProperties) ? void 0 : i.bundler_url;
            if (n)
              try {
                return await this.getUserOperationReceipt(n, e);
              } catch (e) {
                console.warn(
                  "Failed to fetch call status from custom bundler",
                  e,
                  n
                );
              }
            if (this.namespace.methods.includes(e.request.method))
              return await this.client.request(e);
            throw Error("Fetching call status not approved by the wallet.");
          }
          async getUserOperationReceipt(e, t) {
            var i;
            let r = new URL(e),
              s = await fetch(r, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                  l4("eth_getUserOperationReceipt", [
                    null == (i = t.request.params) ? void 0 : i[0],
                  ])
                ),
              });
            if (!s.ok)
              throw Error(
                "Failed to fetch user operation receipt - ".concat(s.status)
              );
            return await s.json();
          }
          getBundlerUrl(e, t) {
            return ""
              .concat(fW, "?projectId=")
              .concat(this.client.core.projectId, "&chainId=")
              .concat(e, "&bundler=")
              .concat(t);
          }
          constructor(e) {
            pC(this, "name", "eip155"),
              pC(this, "client"),
              pC(this, "chainId"),
              pC(this, "namespace"),
              pC(this, "httpProviders"),
              pC(this, "events"),
              (this.namespace = e.namespace),
              (this.events = py("events")),
              (this.client = py("client")),
              (this.httpProviders = this.createHttpProviders()),
              (this.chainId = parseInt(this.getDefaultChain()));
          }
        }
        var pN = Object.defineProperty,
          pU = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? pN(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class pR {
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method)
              ? this.client.request(e)
              : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            this.httpProviders[e] || this.setHttpProvider(e, t),
              (this.chainId = e),
              this.events.emit(
                fG.DEFAULT_CHAIN_CHANGED,
                "".concat(this.name, ":").concat(e)
              );
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return e
              ? [
                  ...new Set(
                    e
                      .filter(
                        (e) => e.split(":")[1] === this.chainId.toString()
                      )
                      .map((e) => e.split(":")[2])
                  ),
                ]
              : [];
          }
          createHttpProviders() {
            let e = {};
            return (
              this.namespace.chains.forEach((t) => {
                var i;
                let r = pc(t);
                e[r] = this.createHttpProvider(
                  r,
                  null == (i = this.namespace.rpcMap) ? void 0 : i[t]
                );
              }),
              e
            );
          }
          getHttpProvider() {
            let e = "".concat(this.name, ":").concat(this.chainId),
              t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProvider(e, t) {
            return new hu(
              new fz(
                t || pa(e, this.namespace, this.client.core.projectId),
                py("disableProviderPing")
              )
            );
          }
          constructor(e) {
            pU(this, "name", "solana"),
              pU(this, "client"),
              pU(this, "httpProviders"),
              pU(this, "events"),
              pU(this, "namespace"),
              pU(this, "chainId"),
              (this.namespace = e.namespace),
              (this.events = py("events")),
              (this.client = py("client")),
              (this.chainId = this.getDefaultChain()),
              (this.httpProviders = this.createHttpProviders());
          }
        }
        var pB = Object.defineProperty,
          pk = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? pB(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class pj {
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method)
              ? this.client.request(e)
              : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            this.httpProviders[e] || this.setHttpProvider(e, t),
              (this.chainId = e),
              this.events.emit(
                fG.DEFAULT_CHAIN_CHANGED,
                "".concat(this.name, ":").concat(this.chainId)
              );
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return e
              ? [
                  ...new Set(
                    e
                      .filter(
                        (e) => e.split(":")[1] === this.chainId.toString()
                      )
                      .map((e) => e.split(":")[2])
                  ),
                ]
              : [];
          }
          createHttpProviders() {
            let e = {};
            return (
              this.namespace.chains.forEach((t) => {
                var i;
                let r = pc(t);
                e[r] = this.createHttpProvider(
                  r,
                  null == (i = this.namespace.rpcMap) ? void 0 : i[t]
                );
              }),
              e
            );
          }
          getHttpProvider() {
            let e = "".concat(this.name, ":").concat(this.chainId),
              t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProvider(e, t) {
            return new hu(
              new fz(
                t || pa(e, this.namespace, this.client.core.projectId),
                py("disableProviderPing")
              )
            );
          }
          constructor(e) {
            pk(this, "name", "cosmos"),
              pk(this, "client"),
              pk(this, "httpProviders"),
              pk(this, "events"),
              pk(this, "namespace"),
              pk(this, "chainId"),
              (this.namespace = e.namespace),
              (this.events = py("events")),
              (this.client = py("client")),
              (this.chainId = this.getDefaultChain()),
              (this.httpProviders = this.createHttpProviders());
          }
        }
        var pL = Object.defineProperty,
          pq = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? pL(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class pM {
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method)
              ? this.client.request(e)
              : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            if (!this.httpProviders[e]) {
              let i =
                t ||
                pa(
                  "".concat(this.name, ":").concat(e),
                  this.namespace,
                  this.client.core.projectId
                );
              this.setHttpProvider(e, i);
            }
            (this.chainId = e),
              this.events.emit(
                fG.DEFAULT_CHAIN_CHANGED,
                "".concat(this.name, ":").concat(this.chainId)
              );
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return e
              ? [
                  ...new Set(
                    e
                      .filter(
                        (e) => e.split(":")[1] === this.chainId.toString()
                      )
                      .map((e) => e.split(":")[2])
                  ),
                ]
              : [];
          }
          createHttpProviders() {
            let e = {};
            return (
              this.namespace.chains.forEach((t) => {
                var i;
                e[t] = this.createHttpProvider(
                  t,
                  null == (i = this.namespace.rpcMap) ? void 0 : i[t]
                );
              }),
              e
            );
          }
          getHttpProvider() {
            let e = "".concat(this.name, ":").concat(this.chainId),
              t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProvider(e, t) {
            let i = t || pa(e, this.namespace, this.client.core.projectId);
            return typeof i > "u"
              ? void 0
              : new hu(new fz(i, py("disableProviderPing")));
          }
          constructor(e) {
            pq(this, "name", "algorand"),
              pq(this, "client"),
              pq(this, "httpProviders"),
              pq(this, "events"),
              pq(this, "namespace"),
              pq(this, "chainId"),
              (this.namespace = e.namespace),
              (this.events = py("events")),
              (this.client = py("client")),
              (this.chainId = this.getDefaultChain()),
              (this.httpProviders = this.createHttpProviders());
          }
        }
        var pz = Object.defineProperty,
          pF = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? pz(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class pH {
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method)
              ? this.client.request(e)
              : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            this.httpProviders[e] || this.setHttpProvider(e, t),
              (this.chainId = e),
              this.events.emit(
                fG.DEFAULT_CHAIN_CHANGED,
                "".concat(this.name, ":").concat(this.chainId)
              );
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return e
              ? [
                  ...new Set(
                    e
                      .filter(
                        (e) => e.split(":")[1] === this.chainId.toString()
                      )
                      .map((e) => e.split(":")[2])
                  ),
                ]
              : [];
          }
          createHttpProviders() {
            let e = {};
            return (
              this.namespace.chains.forEach((t) => {
                let i = this.getCardanoRPCUrl(t),
                  r = pc(t);
                e[r] = this.createHttpProvider(r, i);
              }),
              e
            );
          }
          getHttpProvider() {
            let e = "".concat(this.name, ":").concat(this.chainId),
              t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          getCardanoRPCUrl(e) {
            let t = this.namespace.rpcMap;
            if (t) return t[e];
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProvider(e, t) {
            let i = t || this.getCardanoRPCUrl(e);
            if (!i) throw Error("No RPC url provided for chainId: ".concat(e));
            return new hu(new fz(i, py("disableProviderPing")));
          }
          constructor(e) {
            pF(this, "name", "cip34"),
              pF(this, "client"),
              pF(this, "httpProviders"),
              pF(this, "events"),
              pF(this, "namespace"),
              pF(this, "chainId"),
              (this.namespace = e.namespace),
              (this.events = py("events")),
              (this.client = py("client")),
              (this.chainId = this.getDefaultChain()),
              (this.httpProviders = this.createHttpProviders());
          }
        }
        var pV = Object.defineProperty,
          pK = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? pV(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class pW {
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method)
              ? this.client.request(e)
              : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            this.httpProviders[e] || this.setHttpProvider(e, t),
              (this.chainId = e),
              this.events.emit(
                fG.DEFAULT_CHAIN_CHANGED,
                "".concat(this.name, ":").concat(e)
              );
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return e
              ? [
                  ...new Set(
                    e
                      .filter(
                        (e) => e.split(":")[1] === this.chainId.toString()
                      )
                      .map((e) => e.split(":")[2])
                  ),
                ]
              : [];
          }
          createHttpProviders() {
            let e = {};
            return (
              this.namespace.chains.forEach((t) => {
                var i;
                let r = pc(t);
                e[r] = this.createHttpProvider(
                  r,
                  null == (i = this.namespace.rpcMap) ? void 0 : i[t]
                );
              }),
              e
            );
          }
          getHttpProvider() {
            let e = "".concat(this.name, ":").concat(this.chainId),
              t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProvider(e, t) {
            return new hu(
              new fz(
                t || pa(e, this.namespace, this.client.core.projectId),
                py("disableProviderPing")
              )
            );
          }
          constructor(e) {
            pK(this, "name", "elrond"),
              pK(this, "client"),
              pK(this, "httpProviders"),
              pK(this, "events"),
              pK(this, "namespace"),
              pK(this, "chainId"),
              (this.namespace = e.namespace),
              (this.events = py("events")),
              (this.client = py("client")),
              (this.chainId = this.getDefaultChain()),
              (this.httpProviders = this.createHttpProviders());
          }
        }
        var pG = Object.defineProperty,
          pY = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? pG(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class pJ {
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method)
              ? this.client.request(e)
              : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            this.httpProviders[e] || this.setHttpProvider(e, t),
              (this.chainId = e),
              this.events.emit(
                fG.DEFAULT_CHAIN_CHANGED,
                "".concat(this.name, ":").concat(e)
              );
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return e
              ? [
                  ...new Set(
                    e
                      .filter(
                        (e) => e.split(":")[1] === this.chainId.toString()
                      )
                      .map((e) => e.split(":")[2])
                  ),
                ]
              : [];
          }
          createHttpProviders() {
            let e = {};
            return (
              this.namespace.chains.forEach((t) => {
                var i;
                let r = pc(t);
                e[r] = this.createHttpProvider(
                  r,
                  null == (i = this.namespace.rpcMap) ? void 0 : i[t]
                );
              }),
              e
            );
          }
          getHttpProvider() {
            let e = "".concat(this.name, ":").concat(this.chainId),
              t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProvider(e, t) {
            return new hu(
              new fz(
                t || pa(e, this.namespace, this.client.core.projectId),
                py("disableProviderPing")
              )
            );
          }
          constructor(e) {
            pY(this, "name", "multiversx"),
              pY(this, "client"),
              pY(this, "httpProviders"),
              pY(this, "events"),
              pY(this, "namespace"),
              pY(this, "chainId"),
              (this.namespace = e.namespace),
              (this.events = py("events")),
              (this.client = py("client")),
              (this.chainId = this.getDefaultChain()),
              (this.httpProviders = this.createHttpProviders());
          }
        }
        var pZ = Object.defineProperty,
          pX = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? pZ(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class pQ {
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method)
              ? this.client.request(e)
              : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            if (((this.chainId = e), !this.httpProviders[e])) {
              let i =
                t || pa("".concat(this.name, ":").concat(e), this.namespace);
              this.setHttpProvider(e, i);
            }
            this.events.emit(
              fG.DEFAULT_CHAIN_CHANGED,
              "".concat(this.name, ":").concat(this.chainId)
            );
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return (
              (e &&
                e
                  .filter((e) => e.split(":")[1] === this.chainId.toString())
                  .map((e) => e.split(":")[2])) ||
              []
            );
          }
          createHttpProviders() {
            let e = {};
            return (
              this.namespace.chains.forEach((t) => {
                var i;
                e[t] = this.createHttpProvider(
                  t,
                  null == (i = this.namespace.rpcMap) ? void 0 : i[t]
                );
              }),
              e
            );
          }
          getHttpProvider() {
            let e = "".concat(this.name, ":").concat(this.chainId),
              t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProvider(e, t) {
            let i = t || pa(e, this.namespace);
            return typeof i > "u"
              ? void 0
              : new hu(new fz(i, py("disableProviderPing")));
          }
          constructor(e) {
            pX(this, "name", "near"),
              pX(this, "client"),
              pX(this, "httpProviders"),
              pX(this, "events"),
              pX(this, "namespace"),
              pX(this, "chainId"),
              (this.namespace = e.namespace),
              (this.events = py("events")),
              (this.client = py("client")),
              (this.chainId = this.getDefaultChain()),
              (this.httpProviders = this.createHttpProviders());
          }
        }
        var p$ = Object.defineProperty,
          p0 = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? p$(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class p1 {
          updateNamespace(e) {
            this.namespace = Object.assign(this.namespace, e);
          }
          requestAccounts() {
            return this.getAccounts();
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method)
              ? this.client.request(e)
              : this.getHttpProvider().request(e.request);
          }
          setDefaultChain(e, t) {
            if (((this.chainId = e), !this.httpProviders[e])) {
              let i =
                t || pa("".concat(this.name, ":").concat(e), this.namespace);
              this.setHttpProvider(e, i);
            }
            this.events.emit(
              fG.DEFAULT_CHAIN_CHANGED,
              "".concat(this.name, ":").concat(this.chainId)
            );
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return (
              (e &&
                e
                  .filter((e) => e.split(":")[1] === this.chainId.toString())
                  .map((e) => e.split(":")[2])) ||
              []
            );
          }
          createHttpProviders() {
            let e = {};
            return (
              this.namespace.chains.forEach((t) => {
                e[t] = this.createHttpProvider(t);
              }),
              e
            );
          }
          getHttpProvider() {
            let e = "".concat(this.name, ":").concat(this.chainId),
              t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProvider(e, t) {
            let i = t || pa(e, this.namespace);
            return typeof i > "u" ? void 0 : new hu(new fz(i));
          }
          constructor(e) {
            p0(this, "name", "tezos"),
              p0(this, "client"),
              p0(this, "httpProviders"),
              p0(this, "events"),
              p0(this, "namespace"),
              p0(this, "chainId"),
              (this.namespace = e.namespace),
              (this.events = py("events")),
              (this.client = py("client")),
              (this.chainId = this.getDefaultChain()),
              (this.httpProviders = this.createHttpProviders());
          }
        }
        var p2 = Object.defineProperty,
          p8 = (e, t, i) =>
            ((e, t, i) =>
              t in e
                ? p2(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i,
                  })
                : (e[t] = i))(e, "symbol" != typeof t ? t + "" : t, i);
        class p3 {
          updateNamespace(e) {
            (this.namespace.chains = [
              ...new Set((this.namespace.chains || []).concat(e.chains || [])),
            ]),
              (this.namespace.accounts = [
                ...new Set(
                  (this.namespace.accounts || []).concat(e.accounts || [])
                ),
              ]),
              (this.namespace.methods = [
                ...new Set(
                  (this.namespace.methods || []).concat(e.methods || [])
                ),
              ]),
              (this.namespace.events = [
                ...new Set(
                  (this.namespace.events || []).concat(e.events || [])
                ),
              ]),
              (this.httpProviders = this.createHttpProviders());
          }
          requestAccounts() {
            return this.getAccounts();
          }
          request(e) {
            return this.namespace.methods.includes(e.request.method)
              ? this.client.request(e)
              : this.getHttpProvider(e.chainId).request(e.request);
          }
          setDefaultChain(e, t) {
            this.httpProviders[e] || this.setHttpProvider(e, t),
              (this.chainId = e),
              this.events.emit(
                fG.DEFAULT_CHAIN_CHANGED,
                "".concat(this.name, ":").concat(e)
              );
          }
          getDefaultChain() {
            if (this.chainId) return this.chainId;
            if (this.namespace.defaultChain) return this.namespace.defaultChain;
            let e = this.namespace.chains[0];
            if (!e) throw Error("ChainId not found");
            return e.split(":")[1];
          }
          getAccounts() {
            let e = this.namespace.accounts;
            return e
              ? [
                  ...new Set(
                    e
                      .filter(
                        (e) => e.split(":")[1] === this.chainId.toString()
                      )
                      .map((e) => e.split(":")[2])
                  ),
                ]
              : [];
          }
          createHttpProviders() {
            var e, t;
            let i = {};
            return (
              null ==
                (t = null == (e = this.namespace) ? void 0 : e.accounts) ||
                t.forEach((e) => {
                  let t = s9(e);
                  i["".concat(t.namespace, ":").concat(t.reference)] =
                    this.createHttpProvider(e);
                }),
              i
            );
          }
          getHttpProvider(e) {
            let t = this.httpProviders[e];
            if (typeof t > "u")
              throw Error("JSON-RPC provider for ".concat(e, " not found"));
            return t;
          }
          setHttpProvider(e, t) {
            let i = this.createHttpProvider(e, t);
            i && (this.httpProviders[e] = i);
          }
          createHttpProvider(e, t) {
            return new hu(
              new fz(
                t || pa(e, this.namespace, this.client.core.projectId),
                py("disableProviderPing")
              )
            );
          }
          constructor(e) {
            p8(this, "name", fK),
              p8(this, "client"),
              p8(this, "httpProviders"),
              p8(this, "events"),
              p8(this, "namespace"),
              p8(this, "chainId"),
              (this.namespace = e.namespace),
              (this.events = py("events")),
              (this.client = py("client")),
              (this.chainId = this.getDefaultChain()),
              (this.httpProviders = this.createHttpProviders());
          }
        }
        var p6 = Object.defineProperty,
          p5 = Object.defineProperties,
          p4 = Object.getOwnPropertyDescriptors,
          p9 = Object.getOwnPropertySymbols,
          p7 = Object.prototype.hasOwnProperty,
          ge = Object.prototype.propertyIsEnumerable,
          gt = (e, t, i) =>
            t in e
              ? p6(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: i,
                })
              : (e[t] = i),
          gi = (e, t) => {
            for (var i in t || (t = {})) p7.call(t, i) && gt(e, i, t[i]);
            if (p9) for (var i of p9(t)) ge.call(t, i) && gt(e, i, t[i]);
            return e;
          },
          gr = (e, t) => p5(e, p4(t)),
          gs = (e, t, i) => gt(e, "symbol" != typeof t ? t + "" : t, i);
        class gn {
          static async init(e) {
            let t = new gn(e);
            return await t.initialize(), t;
          }
          async request(e, t, i) {
            let [r, s] = this.validateChain(t);
            if (!this.session)
              throw Error("Please call connect() before request()");
            return await this.getProvider(r).request({
              request: gi({}, e),
              chainId: "".concat(r, ":").concat(s),
              topic: this.session.topic,
              expiry: i,
            });
          }
          sendAsync(e, t, i, r) {
            let s = new Date().getTime();
            this.request(e, i, r)
              .then((e) => t(null, l9(s, e)))
              .catch((e) => t(e, void 0));
          }
          async enable() {
            if (!this.client) throw Error("Sign Client not initialized");
            return (
              this.session ||
                (await this.connect({
                  namespaces: this.namespaces,
                  optionalNamespaces: this.optionalNamespaces,
                  sessionProperties: this.sessionProperties,
                  scopedProperties: this.scopedProperties,
                })),
              await this.requestAccounts()
            );
          }
          async disconnect() {
            var e;
            if (!this.session)
              throw Error("Please call connect() before enable()");
            await this.client.disconnect({
              topic: null == (e = this.session) ? void 0 : e.topic,
              reason: lN("USER_DISCONNECTED"),
            }),
              await this.cleanup();
          }
          async connect(e) {
            if (!this.client) throw Error("Sign Client not initialized");
            if (
              (this.setNamespaces(e),
              await this.cleanupPendingPairings(),
              !e.skipPairing)
            )
              return await this.pair(e.pairingTopic);
          }
          async authenticate(e, t) {
            if (!this.client) throw Error("Sign Client not initialized");
            this.setNamespaces(e), await this.cleanupPendingPairings();
            let { uri: i, response: r } = await this.client.authenticate(e, t);
            i && ((this.uri = i), this.events.emit("display_uri", i));
            let s = await r();
            if (((this.session = s.session), this.session)) {
              let e = pf(this.session.namespaces);
              (this.namespaces = ph(this.namespaces, e)),
                await this.persist("namespaces", this.namespaces),
                this.onConnect();
            }
            return s;
          }
          on(e, t) {
            this.events.on(e, t);
          }
          once(e, t) {
            this.events.once(e, t);
          }
          removeListener(e, t) {
            this.events.removeListener(e, t);
          }
          off(e, t) {
            this.events.off(e, t);
          }
          get isWalletConnect() {
            return !0;
          }
          async pair(e) {
            let { uri: t, approval: i } = await this.client.connect({
              pairingTopic: e,
              requiredNamespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties,
              scopedProperties: this.scopedProperties,
            });
            t && ((this.uri = t), this.events.emit("display_uri", t));
            let r = await i();
            this.session = r;
            let s = pf(r.namespaces);
            return (
              (this.namespaces = ph(this.namespaces, s)),
              await this.persist("namespaces", this.namespaces),
              await this.persist("optionalNamespaces", this.optionalNamespaces),
              this.onConnect(),
              this.session
            );
          }
          setDefaultChain(e, t) {
            try {
              if (!this.session) return;
              let [i, r] = this.validateChain(e),
                s = this.getProvider(i);
              s.name === fK
                ? s.setDefaultChain("".concat(i, ":").concat(r), t)
                : s.setDefaultChain(r, t);
            } catch (e) {
              if (!/Please call connect/.test(e.message)) throw e;
            }
          }
          async cleanupPendingPairings() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            this.logger.info("Cleaning up inactive pairings...");
            let t = this.client.pairing.getAll();
            if (lU(t)) {
              for (let i of t)
                e.deletePairings
                  ? this.client.core.expirer.set(i.topic, 0)
                  : await this.client.core.relayer.subscriber.unsubscribe(
                      i.topic
                    );
              this.logger.info("Inactive pairings cleared: ".concat(t.length));
            }
          }
          abortPairingAttempt() {
            this.logger.warn(
              "abortPairingAttempt is deprecated. This is now a no-op."
            );
          }
          async checkStorage() {
            (this.namespaces = (await this.getFromStore("namespaces")) || {}),
              (this.optionalNamespaces =
                (await this.getFromStore("optionalNamespaces")) || {}),
              this.session && this.createProviders();
          }
          async initialize() {
            this.logger.trace("Initialized"),
              await this.createClient(),
              await this.checkStorage(),
              this.registerEventListeners();
          }
          async createClient() {
            var e, t;
            if (
              ((this.client =
                this.providerOpts.client ||
                (await fO.init({
                  core: this.providerOpts.core,
                  logger: this.providerOpts.logger || fF,
                  relayUrl:
                    this.providerOpts.relayUrl ||
                    "wss://relay.walletconnect.org",
                  projectId: this.providerOpts.projectId,
                  metadata: this.providerOpts.metadata,
                  storageOptions: this.providerOpts.storageOptions,
                  storage: this.providerOpts.storage,
                  name: this.providerOpts.name,
                  customStoragePrefix: this.providerOpts.customStoragePrefix,
                  telemetryEnabled: this.providerOpts.telemetryEnabled,
                }))),
              this.providerOpts.session)
            )
              try {
                this.session = this.client.session.get(
                  this.providerOpts.session.topic
                );
              } catch (i) {
                throw (
                  (this.logger.error("Failed to get session", i),
                  Error(
                    "The provided session: ".concat(
                      null ==
                        (t =
                          null == (e = this.providerOpts) ? void 0 : e.session)
                        ? void 0
                        : t.topic,
                      " doesn't exist in the Sign client"
                    )
                  ))
                );
              }
            else {
              let e = this.client.session.getAll();
              this.session = e[0];
            }
            this.logger.trace("SignClient Initialized");
          }
          createProviders() {
            if (!this.client) throw Error("Sign Client not initialized");
            if (!this.session)
              throw Error(
                "Session not initialized. Please call connect() before enable()"
              );
            let e = [
              ...new Set(
                Object.keys(this.session.namespaces).map((e) => lS(e))
              ),
            ];
            pb("client", this.client),
              pb("events", this.events),
              pb("disableProviderPing", this.disableProviderPing),
              e.forEach((e) => {
                if (!this.session) return;
                let t = (function (e, t) {
                    let i = Object.keys(t.namespaces).filter((t) =>
                      t.includes(e)
                    );
                    if (!i.length) return [];
                    let r = [];
                    return (
                      i.forEach((e) => {
                        let i = t.namespaces[e].accounts;
                        r.push(...i);
                      }),
                      r
                    );
                  })(e, this.session),
                  i = pl(t),
                  r = gr(
                    gi({}, ph(this.namespaces, this.optionalNamespaces)[e]),
                    { accounts: t, chains: i }
                  );
                switch (e) {
                  case "eip155":
                    this.rpcProviders[e] = new pT({ namespace: r });
                    break;
                  case "algorand":
                    this.rpcProviders[e] = new pM({ namespace: r });
                    break;
                  case "solana":
                    this.rpcProviders[e] = new pR({ namespace: r });
                    break;
                  case "cosmos":
                    this.rpcProviders[e] = new pj({ namespace: r });
                    break;
                  case "polkadot":
                    this.rpcProviders[e] = new pw({ namespace: r });
                    break;
                  case "cip34":
                    this.rpcProviders[e] = new pH({ namespace: r });
                    break;
                  case "elrond":
                    this.rpcProviders[e] = new pW({ namespace: r });
                    break;
                  case "multiversx":
                    this.rpcProviders[e] = new pJ({ namespace: r });
                    break;
                  case "near":
                    this.rpcProviders[e] = new pQ({ namespace: r });
                    break;
                  case "tezos":
                    this.rpcProviders[e] = new p1({ namespace: r });
                    break;
                  default:
                    this.rpcProviders[fK]
                      ? this.rpcProviders[fK].updateNamespace(r)
                      : (this.rpcProviders[fK] = new p3({ namespace: r }));
                }
              });
          }
          registerEventListeners() {
            if (typeof this.client > "u")
              throw Error("Sign Client is not initialized");
            this.client.on("session_ping", (e) => {
              var t;
              let { topic: i } = e;
              i === (null == (t = this.session) ? void 0 : t.topic) &&
                this.events.emit("session_ping", e);
            }),
              this.client.on("session_event", (e) => {
                var t;
                let { params: i, topic: r } = e;
                if (r !== (null == (t = this.session) ? void 0 : t.topic))
                  return;
                let { event: s } = i;
                if ("accountsChanged" === s.name) {
                  let e = s.data;
                  e && lU(e) && this.events.emit("accountsChanged", e.map(pd));
                } else if ("chainChanged" === s.name) {
                  let e = i.chainId,
                    t = i.event.data,
                    r = lS(e),
                    s = pp(e) !== pp(t) ? "".concat(r, ":").concat(pp(t)) : e;
                  this.onChainChanged(s);
                } else this.events.emit(s.name, s.data);
                this.events.emit("session_event", e);
              }),
              this.client.on("session_update", (e) => {
                var t, i;
                let { topic: r, params: s } = e;
                if (r !== (null == (t = this.session) ? void 0 : t.topic))
                  return;
                let { namespaces: n } = s,
                  o = null == (i = this.client) ? void 0 : i.session.get(r);
                (this.session = gr(gi({}, o), { namespaces: n })),
                  this.onSessionUpdate(),
                  this.events.emit("session_update", { topic: r, params: s });
              }),
              this.client.on("session_delete", async (e) => {
                var t;
                e.topic === (null == (t = this.session) ? void 0 : t.topic) &&
                  (await this.cleanup(),
                  this.events.emit("session_delete", e),
                  this.events.emit(
                    "disconnect",
                    gr(gi({}, lN("USER_DISCONNECTED")), { data: e.topic })
                  ));
              }),
              this.on(fG.DEFAULT_CHAIN_CHANGED, (e) => {
                this.onChainChanged(e, !0);
              });
          }
          getProvider(e) {
            return this.rpcProviders[e] || this.rpcProviders[fK];
          }
          onSessionUpdate() {
            Object.keys(this.rpcProviders).forEach((e) => {
              var t;
              this.getProvider(e).updateNamespace(
                null == (t = this.session) ? void 0 : t.namespaces[e]
              );
            });
          }
          setNamespaces(e) {
            let {
              namespaces: t = {},
              optionalNamespaces: i = {},
              sessionProperties: r,
              scopedProperties: s,
            } = e;
            (this.optionalNamespaces = ph(t, i)),
              (this.sessionProperties = r),
              (this.scopedProperties = s);
          }
          validateChain(e) {
            let [t, i] = (null == e ? void 0 : e.split(":")) || ["", ""];
            if (!this.namespaces || !Object.keys(this.namespaces).length)
              return [t, i];
            if (
              t &&
              !Object.keys(this.namespaces || {})
                .map((e) => lS(e))
                .includes(t)
            )
              throw Error(
                "Namespace '".concat(
                  t,
                  "' is not configured. Please call connect() first with namespace config."
                )
              );
            if (t && i) return [t, i];
            let r = lS(Object.keys(this.namespaces)[0]),
              s = this.rpcProviders[r].getDefaultChain();
            return [r, s];
          }
          async requestAccounts() {
            let [e] = this.validateChain();
            return await this.getProvider(e).requestAccounts();
          }
          async onChainChanged(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this.namespaces) return;
            let [i, r] = this.validateChain(e);
            if (!r) return;
            this.updateNamespaceChain(i, r),
              this.events.emit("chainChanged", r);
            let s = this.getProvider(i).getDefaultChain();
            t || this.getProvider(i).setDefaultChain(r),
              this.emitAccountsChangedOnChainChange({
                namespace: i,
                previousChainId: s,
                newChainId: e,
              }),
              await this.persist("namespaces", this.namespaces);
          }
          emitAccountsChangedOnChainChange(e) {
            var t, i;
            let { namespace: r, previousChainId: s, newChainId: n } = e;
            try {
              if (s === n) return;
              let e =
                null ==
                (i = null == (t = this.session) ? void 0 : t.namespaces[r])
                  ? void 0
                  : i.accounts;
              if (!e) return;
              let o = e.filter((e) => e.includes("".concat(n, ":"))).map(pd);
              if (!lU(o)) return;
              this.events.emit("accountsChanged", o);
            } catch (e) {
              this.logger.warn(
                "Failed to emit accountsChanged on chain change",
                e
              );
            }
          }
          updateNamespaceChain(e, t) {
            if (!this.namespaces) return;
            let i = this.namespaces[e] ? e : "".concat(e, ":").concat(t);
            this.namespaces[i]
              ? this.namespaces[i] && (this.namespaces[i].defaultChain = t)
              : (this.namespaces[i] = {
                  chains: [],
                  methods: [],
                  events: [],
                  defaultChain: t,
                });
          }
          onConnect() {
            this.createProviders(),
              this.events.emit("connect", { session: this.session });
          }
          async cleanup() {
            (this.namespaces = void 0),
              (this.optionalNamespaces = void 0),
              (this.sessionProperties = void 0),
              await this.deleteFromStore("namespaces"),
              await this.deleteFromStore("optionalNamespaces"),
              await this.deleteFromStore("sessionProperties"),
              (this.session = void 0),
              await this.cleanupPendingPairings({ deletePairings: !0 }),
              await this.cleanupStorage();
          }
          async persist(e, t) {
            var i;
            let r = (null == (i = this.session) ? void 0 : i.topic) || "";
            await this.client.core.storage.setItem(
              "".concat(fH, "/").concat(e).concat(r),
              t
            );
          }
          async getFromStore(e) {
            var t;
            let i = (null == (t = this.session) ? void 0 : t.topic) || "";
            return await this.client.core.storage.getItem(
              "".concat(fH, "/").concat(e).concat(i)
            );
          }
          async deleteFromStore(e) {
            var t;
            let i = (null == (t = this.session) ? void 0 : t.topic) || "";
            await this.client.core.storage.removeItem(
              "".concat(fH, "/").concat(e).concat(i)
            );
          }
          async cleanupStorage() {
            var e;
            try {
              if ((null == (e = this.client) ? void 0 : e.session.length) > 0)
                return;
              for (let e of await this.client.core.storage.getKeys())
                e.startsWith(fH) &&
                  (await this.client.core.storage.removeItem(e));
            } catch (e) {
              this.logger.warn("Failed to cleanup storage", e);
            }
          }
          constructor(e) {
            gs(this, "client"),
              gs(this, "namespaces"),
              gs(this, "optionalNamespaces"),
              gs(this, "sessionProperties"),
              gs(this, "scopedProperties"),
              gs(this, "events", new n.default()),
              gs(this, "rpcProviders", {}),
              gs(this, "session"),
              gs(this, "providerOpts"),
              gs(this, "logger"),
              gs(this, "uri"),
              gs(this, "disableProviderPing", !1),
              (this.providerOpts = e),
              (this.logger =
                "u" > typeof (null == e ? void 0 : e.logger) &&
                "string" != typeof (null == e ? void 0 : e.logger)
                  ? e.logger
                  : (0, q.default)(
                      (0, L.getDefaultLoggerOptions)({
                        level: (null == e ? void 0 : e.logger) || fF,
                      })
                    )),
              (this.disableProviderPing =
                (null == e ? void 0 : e.disableProviderPing) || !1);
          }
        }
        var go = e.i(850524),
          ga = e.i(664572),
          gc = e.i(868263),
          gl = e.i(17038),
          gh = e.i(659863),
          gu = e.i(936598),
          gd = e.i(962949),
          gf = e.i(935148),
          gp = e.i(610411),
          gg = e.i(981824),
          gy = e.i(663296),
          gb = e.i(864510),
          gm = e.i(775078);
        let gv = null,
          gw = {
            getSIWX: () => gp.OptionsController.state.siwx,
            async initializeIfEnabled() {
              let e = gp.OptionsController.state.siwx,
                t = gl.ChainController.getActiveCaipAddress();
              if (!(e && t)) return;
              let [i, r, s] = t.split(":");
              if (gl.ChainController.checkIfSupportedNetwork(i))
                try {
                  if (
                    (gv && (await gv),
                    (await e.getSessions("".concat(i, ":").concat(r), s))
                      .length)
                  )
                    return;
                  await gf.ModalController.open({ view: "SIWXSignMessage" });
                } catch (e) {
                  var n;
                  console.error("SIWXUtil:initializeIfEnabled", e),
                    gd.EventsController.sendEvent({
                      type: "track",
                      event: "SIWX_AUTH_ERROR",
                      properties: this.getSIWXEventProperties(),
                    }),
                    await (null == (n = gh.ConnectionController._getClient())
                      ? void 0
                      : n.disconnect().catch(console.error)),
                    gg.RouterController.reset("Connect"),
                    gy.SnackController.showError(
                      "A problem occurred while trying initialize authentication"
                    );
                }
            },
            async requestSignMessage() {
              let e = gp.OptionsController.state.siwx,
                t = gm.CoreHelperUtil.getPlainAddress(
                  gl.ChainController.getActiveCaipAddress()
                ),
                i = gl.ChainController.getActiveCaipNetwork(),
                r = gh.ConnectionController._getClient();
              if (!e) throw Error("SIWX is not enabled");
              if (!t) throw Error("No ActiveCaipAddress found");
              if (!i) throw Error("No ActiveCaipNetwork or client found");
              if (!r) throw Error("No ConnectionController client found");
              try {
                let s = await e.createMessage({
                    chainId: i.caipNetworkId,
                    accountAddress: t,
                  }),
                  n = s.toString();
                gu.ConnectorController.getConnectorId(i.chainNamespace) ===
                  go.ConstantsUtil.CONNECTOR_ID.AUTH &&
                  gg.RouterController.pushTransactionStack({});
                let o = await r.signMessage(n);
                await e.addSession({ data: s, message: n, signature: o }),
                  gl.ChainController.setLastConnectedSIWECaipNetwork(i),
                  gf.ModalController.close(),
                  gd.EventsController.sendEvent({
                    type: "track",
                    event: "SIWX_AUTH_SUCCESS",
                    properties: this.getSIWXEventProperties(),
                  });
              } catch (t) {
                let e = this.getSIWXEventProperties();
                (gf.ModalController.state.open &&
                  "ApproveTransaction" !== gg.RouterController.state.view) ||
                  (await gf.ModalController.open({ view: "SIWXSignMessage" })),
                  gy.SnackController.showError("Error signing message"),
                  gd.EventsController.sendEvent({
                    type: "track",
                    event: "SIWX_AUTH_ERROR",
                    properties: e,
                  }),
                  console.error("SWIXUtil:requestSignMessage", t);
              }
            },
            async cancelSignMessage() {
              try {
                var e;
                let t = this.getSIWX();
                if (
                  null == t || null == (e = t.getRequired) ? void 0 : e.call(t)
                ) {
                  let e = gl.ChainController.getLastConnectedSIWECaipNetwork();
                  if (e) {
                    let i = await (null == t
                      ? void 0
                      : t.getSessions(
                          null == e ? void 0 : e.caipNetworkId,
                          gm.CoreHelperUtil.getPlainAddress(
                            gl.ChainController.getActiveCaipAddress()
                          ) || ""
                        ));
                    i && i.length > 0
                      ? await gl.ChainController.switchActiveNetwork(e)
                      : await gh.ConnectionController.disconnect();
                  } else await gh.ConnectionController.disconnect();
                } else gf.ModalController.close();
                gf.ModalController.close(),
                  gd.EventsController.sendEvent({
                    event: "CLICK_CANCEL_SIWX",
                    type: "track",
                    properties: this.getSIWXEventProperties(),
                  });
              } catch (e) {
                console.error("SIWXUtil:cancelSignMessage", e);
              }
            },
            async getAllSessions() {
              let e = this.getSIWX(),
                t = gl.ChainController.getAllRequestedCaipNetworks(),
                i = [];
              return (
                await Promise.all(
                  t.map(async (t) => {
                    let r = await (null == e
                      ? void 0
                      : e.getSessions(
                          t.caipNetworkId,
                          gm.CoreHelperUtil.getPlainAddress(
                            gl.ChainController.getActiveCaipAddress()
                          ) || ""
                        ));
                    r && i.push(...r);
                  })
                ),
                i
              );
            },
            async getSessions(e) {
              let t = gp.OptionsController.state.siwx,
                i = null == e ? void 0 : e.address;
              if (!i) {
                let e = gl.ChainController.getActiveCaipAddress();
                i = gm.CoreHelperUtil.getPlainAddress(e);
              }
              let r = null == e ? void 0 : e.caipNetworkId;
              if (!r) {
                let e = gl.ChainController.getActiveCaipNetwork();
                r = null == e ? void 0 : e.caipNetworkId;
              }
              return t && i && r ? t.getSessions(r, i) : [];
            },
            async isSIWXCloseDisabled() {
              let e = this.getSIWX();
              if (e) {
                let i = "ApproveTransaction" === gg.RouterController.state.view,
                  r = "SIWXSignMessage" === gg.RouterController.state.view;
                if (i || r) {
                  var t;
                  return (
                    (null == (t = e.getRequired) ? void 0 : t.call(e)) &&
                    0 === (await this.getSessions()).length
                  );
                }
              }
              return !1;
            },
            async authConnectorAuthenticate(e) {
              var t;
              let {
                  authConnector: i,
                  chainId: r,
                  socialUri: s,
                  preferredAccountType: n,
                  chainNamespace: o,
                } = e,
                a = gw.getSIWX();
              if (!a || !o.includes(go.ConstantsUtil.CHAIN.EVM)) {
                let e = await i.connect({
                  chainId: r,
                  socialUri: s,
                  preferredAccountType: n,
                });
                return {
                  address: e.address,
                  chainId: e.chainId,
                  accounts: e.accounts,
                };
              }
              let c = await a.createMessage({
                  chainId:
                    (null == (t = gl.ChainController.getActiveCaipNetwork())
                      ? void 0
                      : t.caipNetworkId) || "",
                  accountAddress: "<<AccountAddress>>",
                }),
                l = {
                  accountAddress: c.accountAddress,
                  chainId: c.chainId,
                  domain: c.domain,
                  uri: c.uri,
                  version: c.version,
                  nonce: c.nonce,
                  notBefore: c.notBefore,
                  statement: c.statement,
                  resources: c.resources,
                  requestId: c.requestId,
                  issuedAt: c.issuedAt,
                  expirationTime: c.expirationTime,
                  serializedMessage: c.toString(),
                },
                h = await i.connect({
                  chainId: r,
                  socialUri: s,
                  siwxMessage: l,
                  preferredAccountType: n,
                });
              if (
                ((l.accountAddress = h.address),
                (l.serializedMessage = h.message || ""),
                h.signature && h.message)
              ) {
                let e = gw.addEmbeddedWalletSession(l, h.message, h.signature);
                await e;
              }
              return {
                address: h.address,
                chainId: h.chainId,
                accounts: h.accounts,
              };
            },
            async addEmbeddedWalletSession(e, t, i) {
              if (gv) return gv;
              let r = gw.getSIWX();
              return r
                ? (gv = r
                    .addSession({ data: e, message: t, signature: i })
                    .finally(() => {
                      gv = null;
                    }))
                : Promise.resolve();
            },
            async universalProviderAuthenticate(e) {
              var t, i, r;
              let { universalProvider: s, chains: n, methods: o } = e,
                a = gw.getSIWX(),
                c = new Set(n.map((e) => e.split(":")[0]));
              if (!a || 1 !== c.size || !c.has("eip155")) return !1;
              let l = await a.createMessage({
                  chainId:
                    (null == (t = gl.ChainController.getActiveCaipNetwork())
                      ? void 0
                      : t.caipNetworkId) || "",
                  accountAddress: "",
                }),
                h = await s.authenticate({
                  nonce: l.nonce,
                  domain: l.domain,
                  uri: l.uri,
                  exp: l.expirationTime,
                  iat: l.issuedAt,
                  nbf: l.notBefore,
                  requestId: l.requestId,
                  version: l.version,
                  resources: l.resources,
                  statement: l.statement,
                  chainId: l.chainId,
                  methods: o,
                  chains: [l.chainId, ...n.filter((e) => e !== l.chainId)],
                });
              if (
                (gy.SnackController.showLoading("Authenticating...", {
                  autoClose: !1,
                }),
                gc.AccountController.setConnectedWalletInfo(
                  {
                    ...h.session.peer.metadata,
                    name: h.session.peer.metadata.name,
                    icon:
                      null == (i = h.session.peer.metadata.icons)
                        ? void 0
                        : i[0],
                    type: "WALLET_CONNECT",
                  },
                  Array.from(c)[0]
                ),
                null == h || null == (r = h.auths) ? void 0 : r.length)
              ) {
                let e = h.auths.map((e) => {
                  let t = s.client.formatAuthMessage({
                    request: e.p,
                    iss: e.p.iss,
                  });
                  return {
                    data: {
                      ...e.p,
                      accountAddress: e.p.iss.split(":").slice(-1).join(""),
                      chainId: e.p.iss.split(":").slice(2, 4).join(":"),
                      uri: e.p.aud,
                      version: e.p.version || l.version,
                      expirationTime: e.p.exp,
                      issuedAt: e.p.iat,
                      notBefore: e.p.nbf,
                    },
                    message: t,
                    signature: e.s.s,
                    cacao: e,
                  };
                });
                try {
                  await a.setSessions(e),
                    gd.EventsController.sendEvent({
                      type: "track",
                      event: "SIWX_AUTH_SUCCESS",
                      properties: gw.getSIWXEventProperties(),
                    });
                } catch (e) {
                  throw (
                    (console.error(
                      "SIWX:universalProviderAuth - failed to set sessions",
                      e
                    ),
                    gd.EventsController.sendEvent({
                      type: "track",
                      event: "SIWX_AUTH_ERROR",
                      properties: gw.getSIWXEventProperties(),
                    }),
                    await s.disconnect().catch(console.error),
                    e)
                  );
                } finally {
                  gy.SnackController.hide();
                }
              }
              return !0;
            },
            getSIWXEventProperties() {
              var e;
              let t = gl.ChainController.state.activeChain;
              if (!t)
                throw Error(
                  "SIWXUtil:getSIWXEventProperties - namespace is required"
                );
              return {
                network:
                  (null == (e = gl.ChainController.state.activeCaipNetwork)
                    ? void 0
                    : e.caipNetworkId) || "",
                isSmartAccount:
                  (0, gb.getPreferredAccountType)(t) ===
                  ga.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
              };
            },
            async clearSessions() {
              let e = this.getSIWX();
              e && (await e.setSessions([]));
            },
          };
      },
      [321620, 105009],
    ],
  },
]);

//# sourceMappingURL=a9101a56b3b742bf.js.map
