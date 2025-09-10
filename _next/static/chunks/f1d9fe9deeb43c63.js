(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    300522: [
      (t) => {
        "use strict";
        function e(t, e, r) {
          if (!e.has(t))
            throw TypeError(
              "attempted to " + r + " private field on non-instance"
            );
          return e.get(t);
        }
        function r(t, r) {
          var n = e(t, r, "get");
          return n.get ? n.get.call(t) : n.value;
        }
        t.s({ _: () => r }, 300522), t.s({ _: () => e }, 417461);
      },
      [417461],
    ],
    370605: (t) => {
      "use strict";
      function e(t, e) {
        if (e.has(t))
          throw TypeError(
            "Cannot initialize the same private elements twice on an object"
          );
      }
      t.s({ _: () => e });
    },
    216788: [
      (t) => {
        "use strict";
        t.s({ _: () => r }, 216788);
        var e = t.i(370605);
        function r(t, r, n) {
          (0, e._)(t, r), r.set(t, n);
        }
        t.s({ _: () => i }, 725039);
        var n = t.i(417461);
        function i(t, e, r) {
          var i = (0, n._)(t, e, "set");
          if (i.set) i.set.call(t, r);
          else {
            if (!i.writable)
              throw TypeError("attempted to set read only private field");
            i.value = r;
          }
          return r;
        }
      },
      [725039],
    ],
    57882: (t) => {
      "use strict";
      t.s({ _: () => r }, 57882);
      var e = t.i(417461);
      function r(t, r) {
        var n = (0, e._)(t, r, "update");
        if (n.set) {
          if (!n.get)
            throw TypeError("attempted to read set only private field");
          return (
            "__destrWrapper" in n ||
              (n.__destrWrapper = {
                set value(v) {
                  n.set.call(t, v);
                },
                get value() {
                  return n.get.call(t);
                },
              }),
            n.__destrWrapper
          );
        }
        if (!n.writable)
          throw TypeError("attempted to set read only private field");
        return n;
      }
    },
    52992: (t) => {
      "use strict";
      function e(t, e, r) {
        if (!e.has(t))
          throw TypeError("attempted to get private field on non-instance");
        return r;
      }
      t.s({ _: () => e });
    },
    153525: (t) => {
      "use strict";
      t.s({ _: () => r });
      var e = t.i(370605);
      function r(t, r) {
        (0, e._)(t, r), r.add(t);
      }
    },
    825285: (t) => {
      "use strict";
      function e(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      t.s({ _: () => e });
    },
    713514: [
      (t) => {
        "use strict";
        t.s(
          {
            concat: () => E,
            dataLength: () => _,
            dataSlice: () => x,
            getBytes: () => p,
            getBytesCopy: () => m,
            hexlify: () => b,
            isBytesLike: () => A,
            isHexString: () => y,
            stripZerosLeft: () => B,
            zeroPadBytes: () => N,
            zeroPadValue: () => P,
          },
          713514
        ),
          t.s(
            {
              assert: () => l,
              assertArgument: () => u,
              assertArgumentCount: () => c,
              assertNormalize: () => f,
              assertPrivate: () => d,
              isCallException: () => a,
              isError: () => s,
              makeError: () => o,
            },
            13517
          ),
          t.s({ version: () => e }, 100146);
        let e = "6.15.0";
        async function r(t) {
          let e = Object.keys(t);
          return (
            await Promise.all(e.map((e) => Promise.resolve(t[e])))
          ).reduce((t, r, n) => ((t[e[n]] = r), t), {});
        }
        function n(t, e, r) {
          for (let n in e) {
            let i = e[n],
              s = r ? r[n] : null;
            s &&
              (function (t, e, r) {
                let n = e.split("|").map((t) => t.trim());
                for (let r = 0; r < n.length; r++)
                  switch (e) {
                    case "any":
                      return;
                    case "bigint":
                    case "boolean":
                    case "number":
                    case "string":
                      if (typeof t === e) return;
                  }
                let i = Error("invalid value for type ".concat(e));
                throw (
                  ((i.code = "INVALID_ARGUMENT"),
                  (i.argument = "value.".concat(r)),
                  (i.value = t),
                  i)
                );
              })(i, s, n),
              Object.defineProperty(t, n, {
                enumerable: !0,
                value: i,
                writable: !1,
              });
          }
        }
        function i(t, e) {
          if (null == t) return "null";
          if ((null == e && (e = new Set()), "object" == typeof t)) {
            if (e.has(t)) return "[Circular]";
            e.add(t);
          }
          if (Array.isArray(t))
            return "[ " + t.map((t) => i(t, e)).join(", ") + " ]";
          if (t instanceof Uint8Array) {
            let e = "0123456789abcdef",
              r = "0x";
            for (let n = 0; n < t.length; n++)
              (r += e[t[n] >> 4]), (r += e[15 & t[n]]);
            return r;
          }
          if ("object" == typeof t && "function" == typeof t.toJSON)
            return i(t.toJSON(), e);
          switch (typeof t) {
            case "boolean":
            case "number":
            case "symbol":
              return t.toString();
            case "bigint":
              return BigInt(t).toString();
            case "string":
              return JSON.stringify(t);
            case "object": {
              let r = Object.keys(t);
              return (
                r.sort(),
                "{ " +
                  r
                    .map((r) => "".concat(i(r, e), ": ").concat(i(t[r], e)))
                    .join(", ") +
                  " }"
              );
            }
          }
          return "[ COULD NOT SERIALIZE ]";
        }
        function s(t, e) {
          return t && t.code === e;
        }
        function a(t) {
          return s(t, "CALL_EXCEPTION");
        }
        function o(t, r, s) {
          let a,
            o = t;
          {
            let n = [];
            if (s) {
              if ("message" in s || "code" in s || "name" in s)
                throw Error(
                  "value will overwrite populated values: ".concat(i(s))
                );
              for (let t in s) {
                if ("shortMessage" === t) continue;
                let e = s[t];
                n.push(t + "=" + i(e));
              }
            }
            n.push("code=".concat(r)),
              n.push("version=".concat(e)),
              n.length && (t += " (" + n.join(", ") + ")");
          }
          switch (r) {
            case "INVALID_ARGUMENT":
              a = TypeError(t);
              break;
            case "NUMERIC_FAULT":
            case "BUFFER_OVERRUN":
              a = RangeError(t);
              break;
            default:
              a = Error(t);
          }
          return (
            n(a, { code: r }),
            s && Object.assign(a, s),
            null == a.shortMessage && n(a, { shortMessage: o }),
            a
          );
        }
        function l(t, e, r, n) {
          if (!t) throw o(e, r, n);
        }
        function u(t, e, r, n) {
          l(t, e, "INVALID_ARGUMENT", { argument: r, value: n });
        }
        function c(t, e, r) {
          null == r && (r = ""),
            r && (r = ": " + r),
            l(t >= e, "missing argument" + r, "MISSING_ARGUMENT", {
              count: t,
              expectedCount: e,
            }),
            l(t <= e, "too many arguments" + r, "UNEXPECTED_ARGUMENT", {
              count: t,
              expectedCount: e,
            });
        }
        t.s({ defineProperties: () => n, resolveProperties: () => r }, 551749);
        let h = ["NFD", "NFC", "NFKD", "NFKC"].reduce((t, e) => {
          try {
            if ("test" !== "test".normalize(e)) throw Error("bad");
            if ("NFD" === e) {
              let t = String.fromCharCode(233).normalize("NFD"),
                e = String.fromCharCode(101, 769);
              if (t !== e) throw Error("broken");
            }
            t.push(e);
          } catch (t) {}
          return t;
        }, []);
        function f(t) {
          l(
            h.indexOf(t) >= 0,
            "platform missing String.prototype.normalize",
            "UNSUPPORTED_OPERATION",
            { operation: "String.prototype.normalize", info: { form: t } }
          );
        }
        function d(t, e, r) {
          if ((null == r && (r = ""), t !== e)) {
            let t = r,
              e = "new";
            r && ((t += "."), (e += " " + r)),
              l(
                !1,
                "private constructor; use ".concat(t, "from* methods"),
                "UNSUPPORTED_OPERATION",
                { operation: e }
              );
          }
        }
        function g(t, e, r) {
          if (t instanceof Uint8Array) return r ? new Uint8Array(t) : t;
          if ("string" == typeof t && t.match(/^0x(?:[0-9a-f][0-9a-f])*$/i)) {
            let e = new Uint8Array((t.length - 2) / 2),
              r = 2;
            for (let n = 0; n < e.length; n++)
              (e[n] = parseInt(t.substring(r, r + 2), 16)), (r += 2);
            return e;
          }
          u(!1, "invalid BytesLike value", e || "value", t);
        }
        function p(t, e) {
          return g(t, e, !1);
        }
        function m(t, e) {
          return g(t, e, !0);
        }
        function y(t, e) {
          return (
            "string" == typeof t &&
            !!t.match(/^0x[0-9A-Fa-f]*$/) &&
            ("number" != typeof e || t.length === 2 + 2 * e) &&
            (!0 !== e || t.length % 2 == 0)
          );
        }
        function A(t) {
          return y(t, !0) || t instanceof Uint8Array;
        }
        let w = "0123456789abcdef";
        function b(t) {
          let e = p(t),
            r = "0x";
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            r += w[(240 & n) >> 4] + w[15 & n];
          }
          return r;
        }
        function E(t) {
          return "0x" + t.map((t) => b(t).substring(2)).join("");
        }
        function _(t) {
          return y(t, !0) ? (t.length - 2) / 2 : p(t).length;
        }
        function x(t, e, r) {
          let n = p(t);
          return (
            null != r &&
              r > n.length &&
              l(!1, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
                buffer: n,
                length: n.length,
                offset: r,
              }),
            b(n.slice(null == e ? 0 : e, null == r ? n.length : r))
          );
        }
        function B(t) {
          let e = b(t).substring(2);
          for (; e.startsWith("00"); ) e = e.substring(2);
          return "0x" + e;
        }
        function k(t, e, r) {
          let n = p(t);
          l(e >= n.length, "padding exceeds data length", "BUFFER_OVERRUN", {
            buffer: new Uint8Array(n),
            length: e,
            offset: e + 1,
          });
          let i = new Uint8Array(e);
          return i.fill(0), r ? i.set(n, e - n.length) : i.set(n, 0), b(i);
        }
        function P(t, e) {
          return k(t, e, !0);
        }
        function N(t, e) {
          return k(t, e, !1);
        }
      },
      [100146, 551749, 13517],
    ],
    99994: [
      (t) => {
        "use strict";
        t.s(
          {
            Coder: () => F,
            Reader: () => q,
            Result: () => T,
            WordSize: () => B,
            Writer: () => G,
            checkResultErrors: () => S,
          },
          99994
        );
        var e = t.i(300522),
          r = t.i(216788),
          n = t.i(725039),
          i = t.i(52992),
          s = t.i(153525),
          a = t.i(825285),
          o = t.i(551749),
          l = t.i(713514);
        t.s(
          {
            fromTwos: () => f,
            getBigInt: () => p,
            getNumber: () => w,
            getUint: () => m,
            mask: () => g,
            toBeArray: () => _,
            toBeHex: () => E,
            toBigInt: () => A,
            toNumber: () => b,
            toQuantity: () => x,
            toTwos: () => d,
          },
          219223
        );
        var u = t.i(13517);
        let c = BigInt(0),
          h = BigInt(1);
        function f(t, e) {
          let r = m(t, "value"),
            n = BigInt(w(e, "width"));
          return ((0, u.assert)(r >> n === c, "overflow", "NUMERIC_FAULT", {
            operation: "fromTwos",
            fault: "overflow",
            value: t,
          }),
          r >> (n - h))
            ? -((~r & ((h << n) - h)) + h)
            : r;
        }
        function d(t, e) {
          let r = p(t, "value"),
            n = BigInt(w(e, "width")),
            i = h << (n - h);
          return r < c
            ? ((r = -r),
              (0, u.assert)(r <= i, "too low", "NUMERIC_FAULT", {
                operation: "toTwos",
                fault: "overflow",
                value: t,
              }),
              (~r & ((h << n) - h)) + h)
            : ((0, u.assert)(r < i, "too high", "NUMERIC_FAULT", {
                operation: "toTwos",
                fault: "overflow",
                value: t,
              }),
              r);
        }
        function g(t, e) {
          return m(t, "value") & ((h << BigInt(w(e, "bits"))) - h);
        }
        function p(t, e) {
          switch (typeof t) {
            case "bigint":
              return t;
            case "number":
              return (
                (0, u.assertArgument)(
                  Number.isInteger(t),
                  "underflow",
                  e || "value",
                  t
                ),
                (0, u.assertArgument)(
                  t >= -0x1fffffffffffff && t <= 0x1fffffffffffff,
                  "overflow",
                  e || "value",
                  t
                ),
                BigInt(t)
              );
            case "string":
              try {
                if ("" === t) throw Error("empty string");
                if ("-" === t[0] && "-" !== t[1])
                  return -BigInt(t.substring(1));
                return BigInt(t);
              } catch (r) {
                (0, u.assertArgument)(
                  !1,
                  "invalid BigNumberish string: ".concat(r.message),
                  e || "value",
                  t
                );
              }
          }
          (0, u.assertArgument)(
            !1,
            "invalid BigNumberish value",
            e || "value",
            t
          );
        }
        function m(t, e) {
          let r = p(t, e);
          return (
            (0, u.assert)(
              r >= c,
              "unsigned value cannot be negative",
              "NUMERIC_FAULT",
              { fault: "overflow", operation: "getUint", value: t }
            ),
            r
          );
        }
        let y = "0123456789abcdef";
        function A(t) {
          if (t instanceof Uint8Array) {
            let e = "0x0";
            for (let r of t) (e += y[r >> 4]), (e += y[15 & r]);
            return BigInt(e);
          }
          return p(t);
        }
        function w(t, e) {
          switch (typeof t) {
            case "bigint":
              return (
                (0, u.assertArgument)(
                  t >= -0x1fffffffffffff && t <= 0x1fffffffffffff,
                  "overflow",
                  e || "value",
                  t
                ),
                Number(t)
              );
            case "number":
              return (
                (0, u.assertArgument)(
                  Number.isInteger(t),
                  "underflow",
                  e || "value",
                  t
                ),
                (0, u.assertArgument)(
                  t >= -0x1fffffffffffff && t <= 0x1fffffffffffff,
                  "overflow",
                  e || "value",
                  t
                ),
                t
              );
            case "string":
              try {
                if ("" === t) throw Error("empty string");
                return w(BigInt(t), e);
              } catch (r) {
                (0, u.assertArgument)(
                  !1,
                  "invalid numeric string: ".concat(r.message),
                  e || "value",
                  t
                );
              }
          }
          (0, u.assertArgument)(!1, "invalid numeric value", e || "value", t);
        }
        function b(t) {
          return w(A(t));
        }
        function E(t, e) {
          let r = m(t, "value").toString(16);
          if (null == e) r.length % 2 && (r = "0" + r);
          else {
            let n = w(e, "width");
            for (
              (0, u.assert)(
                2 * n >= r.length,
                "value exceeds width (".concat(n, " bytes)"),
                "NUMERIC_FAULT",
                { operation: "toBeHex", fault: "overflow", value: t }
              );
              r.length < 2 * n;

            )
              r = "0" + r;
          }
          return "0x" + r;
        }
        function _(t) {
          let e = m(t, "value");
          if (e === c) return new Uint8Array([]);
          let r = e.toString(16);
          r.length % 2 && (r = "0" + r);
          let n = new Uint8Array(r.length / 2);
          for (let t = 0; t < n.length; t++) {
            let e = 2 * t;
            n[t] = parseInt(r.substring(e, e + 2), 16);
          }
          return n;
        }
        function x(t) {
          let e = (0, l.hexlify)((0, l.isBytesLike)(t) ? t : _(t)).substring(2);
          for (; e.startsWith("0"); ) e = e.substring(1);
          return "" === e && (e = "0"), "0x" + e;
        }
        let B = 32,
          k = new Uint8Array(32),
          P = ["then"],
          N = {},
          I = new WeakMap();
        function C(t) {
          return I.get(t);
        }
        function O(t, e) {
          let r = Error(
            "deferred error during ABI decoding triggered accessing ".concat(t)
          );
          throw ((r.error = e), r);
        }
        var R = new WeakMap();
        class T extends Array {
          toArray(t) {
            let e = [];
            return (
              this.forEach((r, n) => {
                r instanceof Error && O("index ".concat(n), r),
                  t && r instanceof T && (r = r.toArray(t)),
                  e.push(r);
              }),
              e
            );
          }
          toObject(t) {
            let e = C(this);
            return e.reduce(
              (r, n, i) => (
                (0, u.assert)(
                  null != n,
                  "value at index ".concat(i, " unnamed"),
                  "UNSUPPORTED_OPERATION",
                  { operation: "toObject()" }
                ),
                (function t(e, r, n) {
                  return e.indexOf(null) >= 0
                    ? r.map((e, r) => (e instanceof T ? t(C(e), e, n) : e))
                    : e.reduce((e, i, s) => {
                        let a = r.getValue(i);
                        return (
                          i in e ||
                            (n && a instanceof T && (a = t(C(a), a, n)),
                            (e[i] = a)),
                          e
                        );
                      }, {});
                })(e, this, t)
              ),
              {}
            );
          }
          slice(t, e) {
            null == t && (t = 0),
              t < 0 && (t += this.length) < 0 && (t = 0),
              null == e && (e = this.length),
              e < 0 && (e += this.length) < 0 && (e = 0),
              e > this.length && (e = this.length);
            let r = C(this),
              n = [],
              i = [];
            for (let s = t; s < e; s++) n.push(this[s]), i.push(r[s]);
            return new T(N, n, i);
          }
          filter(t, e) {
            let r = C(this),
              n = [],
              i = [];
            for (let s = 0; s < this.length; s++) {
              let a = this[s];
              a instanceof Error && O("index ".concat(s), a),
                t.call(e, a, s, this) && (n.push(a), i.push(r[s]));
            }
            return new T(N, n, i);
          }
          map(t, e) {
            let r = [];
            for (let n = 0; n < this.length; n++) {
              let i = this[n];
              i instanceof Error && O("index ".concat(n), i),
                r.push(t.call(e, i, n, this));
            }
            return r;
          }
          getValue(t) {
            let e = C(this).indexOf(t);
            if (-1 === e) return;
            let r = this[e];
            return (
              r instanceof Error &&
                O("property ".concat(JSON.stringify(t)), r.error),
              r
            );
          }
          static fromItems(t, e) {
            return new T(N, t, e);
          }
          constructor(...t) {
            var i, s;
            let a = t[0],
              o = t[1],
              l = (t[2] || []).slice(),
              u = !0;
            a !== N && ((o = t), (l = []), (u = !1)),
              super(o.length),
              (0, r._)(this, R, { writable: !0, value: void 0 }),
              o.forEach((t, e) => {
                this[e] = t;
              });
            let c = l.reduce(
              (t, e) => (
                "string" == typeof e && t.set(e, (t.get(e) || 0) + 1), t
              ),
              new Map()
            );
            if (
              ((i = Object.freeze(
                o.map((t, e) => {
                  let r = l[e];
                  return null != r && 1 === c.get(r) ? r : null;
                })
              )),
              I.set(this, i),
              (0, n._)(this, R, []),
              null == (0, e._)(this, R) && (0, e._)(this, R),
              !u)
            )
              return;
            Object.freeze(this);
            let h = new Proxy(this, {
              get: (t, e, r) => {
                if ("string" == typeof e) {
                  if (e.match(/^[0-9]+$/)) {
                    let r = w(e, "%index");
                    if (r < 0 || r >= this.length)
                      throw RangeError("out of result range");
                    let n = t[r];
                    return n instanceof Error && O("index ".concat(r), n), n;
                  }
                  if (P.indexOf(e) >= 0) return Reflect.get(t, e, r);
                  let n = t[e];
                  if (n instanceof Function)
                    return function () {
                      for (
                        var e = arguments.length, i = Array(e), s = 0;
                        s < e;
                        s++
                      )
                        i[s] = arguments[s];
                      return n.apply(this === r ? t : this, i);
                    };
                  if (!(e in t))
                    return t.getValue.apply(this === r ? t : this, [e]);
                }
                return Reflect.get(t, e, r);
              },
            });
            return (s = C(this)), I.set(h, s), h;
          }
        }
        function S(t) {
          let e = [],
            r = function (t, n) {
              if (Array.isArray(n))
                for (let i in n) {
                  let s = t.slice();
                  s.push(i);
                  try {
                    r(s, n[i]);
                  } catch (t) {
                    e.push({ path: s, error: t });
                  }
                }
            };
          return r([], t), e;
        }
        function U(t) {
          let e = _(t);
          return (
            (0, u.assert)(
              e.length <= B,
              "value out-of-bounds",
              "BUFFER_OVERRUN",
              { buffer: e, length: B, offset: e.length }
            ),
            e.length !== B &&
              (e = (0, l.getBytesCopy)(
                (0, l.concat)([k.slice(e.length % B), e])
              )),
            e
          );
        }
        class F {
          _throwError(t, e) {
            (0, u.assertArgument)(!1, t, this.localName, e);
          }
          constructor(t, e, r, n) {
            (0, a._)(this, "name", void 0),
              (0, a._)(this, "type", void 0),
              (0, a._)(this, "localName", void 0),
              (0, a._)(this, "dynamic", void 0),
              (0, o.defineProperties)(
                this,
                { name: t, type: e, localName: r, dynamic: n },
                {
                  name: "string",
                  type: "string",
                  localName: "string",
                  dynamic: "boolean",
                }
              );
          }
        }
        var D = new WeakMap(),
          L = new WeakMap(),
          M = new WeakSet();
        class G {
          get data() {
            return (0, l.concat)((0, e._)(this, D));
          }
          get length() {
            return (0, e._)(this, L);
          }
          appendWriter(t) {
            return (0, i._)(this, M, H).call(this, (0, l.getBytesCopy)(t.data));
          }
          writeBytes(t) {
            let e = (0, l.getBytesCopy)(t),
              r = e.length % B;
            return (
              r && (e = (0, l.getBytesCopy)((0, l.concat)([e, k.slice(r)]))),
              (0, i._)(this, M, H).call(this, e)
            );
          }
          writeValue(t) {
            return (0, i._)(this, M, H).call(this, U(t));
          }
          writeUpdatableValue() {
            let t = (0, e._)(this, D).length;
            return (
              (0, e._)(this, D).push(k),
              (0, n._)(this, L, (0, e._)(this, L) + B),
              (r) => {
                (0, e._)(this, D)[t] = U(r);
              }
            );
          }
          constructor() {
            (0, s._)(this, M),
              (0, r._)(this, D, { writable: !0, value: void 0 }),
              (0, r._)(this, L, { writable: !0, value: void 0 }),
              (0, n._)(this, D, []),
              (0, n._)(this, L, 0);
          }
        }
        function H(t) {
          return (
            (0, e._)(this, D).push(t),
            (0, n._)(this, L, (0, e._)(this, L) + t.length),
            t.length
          );
        }
        var Q = new WeakMap(),
          z = new WeakMap(),
          W = new WeakMap(),
          V = new WeakMap(),
          j = new WeakMap(),
          J = new WeakSet(),
          K = new WeakSet();
        class q {
          get data() {
            return (0, l.hexlify)((0, e._)(this, Q));
          }
          get dataLength() {
            return (0, e._)(this, Q).length;
          }
          get consumed() {
            return (0, e._)(this, z);
          }
          get bytes() {
            return new Uint8Array((0, e._)(this, Q));
          }
          subReader(t) {
            let r = new q(
              (0, e._)(this, Q).slice((0, e._)(this, z) + t),
              this.allowLoose,
              (0, e._)(this, j)
            );
            return (0, n._)(r, V, this), r;
          }
          readBytes(t, r) {
            let s = (0, i._)(this, K, Y).call(this, 0, t, !!r);
            return (
              (0, i._)(this, J, Z).call(this, t),
              (0, n._)(this, z, (0, e._)(this, z) + s.length),
              s.slice(0, t)
            );
          }
          readValue() {
            return A(this.readBytes(B));
          }
          readIndex() {
            return b(this.readBytes(B));
          }
          constructor(t, e, i) {
            (0, s._)(this, J),
              (0, s._)(this, K),
              (0, a._)(this, "allowLoose", void 0),
              (0, r._)(this, Q, { writable: !0, value: void 0 }),
              (0, r._)(this, z, { writable: !0, value: void 0 }),
              (0, r._)(this, W, { writable: !0, value: void 0 }),
              (0, r._)(this, V, { writable: !0, value: void 0 }),
              (0, r._)(this, j, { writable: !0, value: void 0 }),
              (0, o.defineProperties)(this, { allowLoose: !!e }),
              (0, n._)(this, Q, (0, l.getBytesCopy)(t)),
              (0, n._)(this, W, 0),
              (0, n._)(this, V, null),
              (0, n._)(this, j, null != i ? i : 1024),
              (0, n._)(this, z, 0);
          }
        }
        function Z(t) {
          var r;
          if ((0, e._)(this, V))
            return (0, i._)((r = (0, e._)(this, V)), J, Z).call(r, t);
          (0, n._)(this, W, (0, e._)(this, W) + t),
            (0, u.assert)(
              1 > (0, e._)(this, j) ||
                (0, e._)(this, W) <= (0, e._)(this, j) * this.dataLength,
              "compressed ABI data exceeds inflation ratio of ".concat(
                (0, e._)(this, j),
                " ( see: https://github.com/ethers-io/ethers.js/issues/4537 )"
              ),
              "BUFFER_OVERRUN",
              {
                buffer: (0, l.getBytesCopy)((0, e._)(this, Q)),
                offset: (0, e._)(this, z),
                length: t,
                info: {
                  bytesRead: (0, e._)(this, W),
                  dataLength: this.dataLength,
                },
              }
            );
        }
        function Y(t, r, n) {
          let i = Math.ceil(r / B) * B;
          return (
            (0, e._)(this, z) + i > (0, e._)(this, Q).length &&
              (this.allowLoose &&
              n &&
              (0, e._)(this, z) + r <= (0, e._)(this, Q).length
                ? (i = r)
                : (0, u.assert)(!1, "data out-of-bounds", "BUFFER_OVERRUN", {
                    buffer: (0, l.getBytesCopy)((0, e._)(this, Q)),
                    length: (0, e._)(this, Q).length,
                    offset: (0, e._)(this, z) + i,
                  })),
            (0, e._)(this, Q).slice((0, e._)(this, z), (0, e._)(this, z) + i)
          );
        }
      },
      [219223],
    ],
    958061: [
      (t) => {
        "use strict";
        function e(t) {
          if (!Number.isSafeInteger(t) || t < 0)
            throw Error("Wrong positive integer: ".concat(t));
        }
        function r(t) {
          for (
            var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1;
            n < e;
            n++
          )
            r[n - 1] = arguments[n];
          if (!(t instanceof Uint8Array)) throw Error("Expected Uint8Array");
          if (r.length > 0 && !r.includes(t.length))
            throw Error(
              "Expected Uint8Array of length "
                .concat(r, ", not of length=")
                .concat(t.length)
            );
        }
        function n(t) {
          if ("function" != typeof t || "function" != typeof t.create)
            throw Error("Hash should be wrapped by utils.wrapConstructor");
          e(t.outputLen), e(t.blockLen);
        }
        function i(t) {
          let e =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          if (t.destroyed) throw Error("Hash instance has been destroyed");
          if (e && t.finished)
            throw Error("Hash#digest() has already been called");
        }
        function s(t, e) {
          r(t);
          let n = e.outputLen;
          if (t.length < n)
            throw Error(
              "digestInto() expects output buffer of length at least ".concat(n)
            );
        }
        t.s({ keccak_256: () => W }, 958061),
          t.s(
            {
              bytes: () => r,
              exists: () => i,
              hash: () => n,
              number: () => e,
              output: () => s,
            },
            951562
          ),
          t.s(
            {
              default: () => g,
              rotlBH: () => f,
              rotlBL: () => d,
              rotlSH: () => c,
              rotlSL: () => h,
              split: () => u,
            },
            849530
          );
        let a = BigInt(0x100000000 - 1),
          o = BigInt(32);
        function l(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return e
            ? { h: Number(t & a), l: Number((t >> o) & a) }
            : { h: 0 | Number((t >> o) & a), l: 0 | Number(t & a) };
        }
        function u(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = new Uint32Array(t.length),
            n = new Uint32Array(t.length);
          for (let i = 0; i < t.length; i++) {
            let { h: s, l: a } = l(t[i], e);
            [r[i], n[i]] = [s, a];
          }
          return [r, n];
        }
        let c = (t, e, r) => (t << r) | (e >>> (32 - r)),
          h = (t, e, r) => (e << r) | (t >>> (32 - r)),
          f = (t, e, r) => (e << (r - 32)) | (t >>> (64 - r)),
          d = (t, e, r) => (t << (r - 32)) | (e >>> (64 - r)),
          g = {
            fromBig: l,
            split: u,
            toBig: (t, e) => (BigInt(t >>> 0) << o) | BigInt(e >>> 0),
            shrSH: (t, e, r) => t >>> r,
            shrSL: (t, e, r) => (t << (32 - r)) | (e >>> r),
            rotrSH: (t, e, r) => (t >>> r) | (e << (32 - r)),
            rotrSL: (t, e, r) => (t << (32 - r)) | (e >>> r),
            rotrBH: (t, e, r) => (t << (64 - r)) | (e >>> (r - 32)),
            rotrBL: (t, e, r) => (t >>> (r - 32)) | (e << (64 - r)),
            rotr32H: (t, e) => e,
            rotr32L: (t, e) => t,
            rotlSH: c,
            rotlSL: h,
            rotlBH: f,
            rotlBL: d,
            add: function (t, e, r, n) {
              let i = (e >>> 0) + (n >>> 0);
              return { h: (t + r + ((i / 0x100000000) | 0)) | 0, l: 0 | i };
            },
            add3L: (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0),
            add3H: (t, e, r, n) => (e + r + n + ((t / 0x100000000) | 0)) | 0,
            add4L: (t, e, r, n) =>
              (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0),
            add4H: (t, e, r, n, i) =>
              (e + r + n + i + ((t / 0x100000000) | 0)) | 0,
            add5H: (t, e, r, n, i, s) =>
              (e + r + n + i + s + ((t / 0x100000000) | 0)) | 0,
            add5L: (t, e, r, n, i) =>
              (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
          };
        t.s(
          {
            Hash: () => x,
            asyncLoop: () => b,
            checkOpts: () => k,
            concatBytes: () => _,
            createView: () => y,
            randomBytes: () => I,
            rotr: () => A,
            toBytes: () => E,
            u32: () => m,
            wrapConstructor: () => P,
            wrapXOFConstructorWithOpts: () => N,
          },
          825423
        );
        let p =
            "object" == typeof globalThis && "crypto" in globalThis
              ? globalThis.crypto
              : void 0,
          m = (t) =>
            new Uint32Array(
              t.buffer,
              t.byteOffset,
              Math.floor(t.byteLength / 4)
            ),
          y = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
          A = (t, e) => (t << (32 - e)) | (t >>> e);
        if (68 !== new Uint8Array(new Uint32Array([0x11223344]).buffer)[0])
          throw Error("Non little-endian hardware is not supported");
        let w = async () => {};
        async function b(t, e, r) {
          let n = Date.now();
          for (let i = 0; i < t; i++) {
            r(i);
            let t = Date.now() - n;
            (t >= 0 && t < e) || (await w(), (n += t));
          }
        }
        function E(t) {
          if (
            ("string" == typeof t &&
              (t = (function (t) {
                if ("string" != typeof t)
                  throw Error(
                    "utf8ToBytes expected string, got ".concat(typeof t)
                  );
                return new Uint8Array(new TextEncoder().encode(t));
              })(t)),
            !(t instanceof Uint8Array))
          )
            throw Error("expected Uint8Array, got ".concat(typeof t));
          return t;
        }
        function _() {
          for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          let n = new Uint8Array(e.reduce((t, e) => t + e.length, 0)),
            i = 0;
          return (
            e.forEach((t) => {
              if (!(t instanceof Uint8Array))
                throw Error("Uint8Array expected");
              n.set(t, i), (i += t.length);
            }),
            n
          );
        }
        class x {
          clone() {
            return this._cloneInto();
          }
        }
        let B = {}.toString;
        function k(t, e) {
          if (void 0 !== e && "[object Object]" !== B.call(e))
            throw Error("Options should be object or undefined");
          return Object.assign(t, e);
        }
        function P(t) {
          let e = (e) => t().update(E(e)).digest(),
            r = t();
          return (
            (e.outputLen = r.outputLen),
            (e.blockLen = r.blockLen),
            (e.create = () => t()),
            e
          );
        }
        function N(t) {
          let e = (e, r) => t(r).update(E(e)).digest(),
            r = t({});
          return (
            (e.outputLen = r.outputLen),
            (e.blockLen = r.blockLen),
            (e.create = (e) => t(e)),
            e
          );
        }
        function I() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32;
          if (p && "function" == typeof p.getRandomValues)
            return p.getRandomValues(new Uint8Array(t));
          throw Error("crypto.getRandomValues must be defined");
        }
        let [C, O, R] = [[], [], []],
          T = BigInt(0),
          S = BigInt(1),
          U = BigInt(2),
          F = BigInt(7),
          D = BigInt(256),
          L = BigInt(113);
        for (let t = 0, e = S, r = 1, n = 0; t < 24; t++) {
          ([r, n] = [n, (2 * r + 3 * n) % 5]),
            C.push(2 * (5 * n + r)),
            O.push((((t + 1) * (t + 2)) / 2) % 64);
          let i = T;
          for (let t = 0; t < 7; t++)
            (e = ((e << S) ^ ((e >> F) * L)) % D) & U &&
              (i ^= S << ((S << BigInt(t)) - S));
          R.push(i);
        }
        let [M, G] = u(R, !0),
          H = (t, e, r) => (r > 32 ? f(t, e, r) : c(t, e, r)),
          Q = (t, e, r) => (r > 32 ? d(t, e, r) : h(t, e, r));
        class z extends x {
          keccak() {
            !(function (t) {
              let e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 24,
                r = new Uint32Array(10);
              for (let n = 24 - e; n < 24; n++) {
                for (let e = 0; e < 10; e++)
                  r[e] = t[e] ^ t[e + 10] ^ t[e + 20] ^ t[e + 30] ^ t[e + 40];
                for (let e = 0; e < 10; e += 2) {
                  let n = (e + 8) % 10,
                    i = (e + 2) % 10,
                    s = r[i],
                    a = r[i + 1],
                    o = H(s, a, 1) ^ r[n],
                    l = Q(s, a, 1) ^ r[n + 1];
                  for (let r = 0; r < 50; r += 10)
                    (t[e + r] ^= o), (t[e + r + 1] ^= l);
                }
                let e = t[2],
                  i = t[3];
                for (let r = 0; r < 24; r++) {
                  let n = O[r],
                    s = H(e, i, n),
                    a = Q(e, i, n),
                    o = C[r];
                  (e = t[o]), (i = t[o + 1]), (t[o] = s), (t[o + 1] = a);
                }
                for (let e = 0; e < 50; e += 10) {
                  for (let n = 0; n < 10; n++) r[n] = t[e + n];
                  for (let n = 0; n < 10; n++)
                    t[e + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
                }
                (t[0] ^= M[n]), (t[1] ^= G[n]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
              (this.posOut = 0),
              (this.pos = 0);
          }
          update(t) {
            i(this);
            let { blockLen: e, state: r } = this,
              n = (t = E(t)).length;
            for (let i = 0; i < n; ) {
              let s = Math.min(e - this.pos, n - i);
              for (let e = 0; e < s; e++) r[this.pos++] ^= t[i++];
              this.pos === e && this.keccak();
            }
            return this;
          }
          finish() {
            if (this.finished) return;
            this.finished = !0;
            let { state: t, suffix: e, pos: r, blockLen: n } = this;
            (t[r] ^= e),
              (128 & e) != 0 && r === n - 1 && this.keccak(),
              (t[n - 1] ^= 128),
              this.keccak();
          }
          writeInto(t) {
            i(this, !1), r(t), this.finish();
            let e = this.state,
              { blockLen: n } = this;
            for (let r = 0, i = t.length; r < i; ) {
              this.posOut >= n && this.keccak();
              let s = Math.min(n - this.posOut, i - r);
              t.set(e.subarray(this.posOut, this.posOut + s), r),
                (this.posOut += s),
                (r += s);
            }
            return t;
          }
          xofInto(t) {
            if (!this.enableXOF)
              throw Error("XOF is not possible for this instance");
            return this.writeInto(t);
          }
          xof(t) {
            return e(t), this.xofInto(new Uint8Array(t));
          }
          digestInto(t) {
            if ((s(t, this), this.finished))
              throw Error("digest() was already called");
            return this.writeInto(t), this.destroy(), t;
          }
          digest() {
            return this.digestInto(new Uint8Array(this.outputLen));
          }
          destroy() {
            (this.destroyed = !0), this.state.fill(0);
          }
          _cloneInto(t) {
            let {
              blockLen: e,
              suffix: r,
              outputLen: n,
              rounds: i,
              enableXOF: s,
            } = this;
            return (
              t || (t = new z(e, r, n, s, i)),
              t.state32.set(this.state32),
              (t.pos = this.pos),
              (t.posOut = this.posOut),
              (t.finished = this.finished),
              (t.rounds = i),
              (t.suffix = r),
              (t.outputLen = n),
              (t.enableXOF = s),
              (t.destroyed = this.destroyed),
              t
            );
          }
          constructor(t, r, n, i = !1, s = 24) {
            if (
              (super(),
              (this.blockLen = t),
              (this.suffix = r),
              (this.outputLen = n),
              (this.enableXOF = i),
              (this.rounds = s),
              (this.pos = 0),
              (this.posOut = 0),
              (this.finished = !1),
              (this.destroyed = !1),
              e(n),
              0 >= this.blockLen || this.blockLen >= 200)
            )
              throw Error("Sha3 supports only keccak-f1600 function");
            (this.state = new Uint8Array(200)), (this.state32 = m(this.state));
          }
        }
        let W = P(() => new z(136, 1, 32));
      },
      [951562, 849530, 825423],
    ],
    749401: (t) => {
      "use strict";
      t.s({ keccak256: () => a });
      var e = t.i(958061),
        r = t.i(713514);
      let n = !1,
        i = function (t) {
          return (0, e.keccak_256)(t);
        },
        s = i;
      function a(t) {
        let e = (0, r.getBytes)(t, "data");
        return (0, r.hexlify)(s(e));
      }
      (a._ = i),
        (a.lock = function () {
          n = !0;
        }),
        (a.register = function (t) {
          if (n) throw TypeError("keccak256 is locked");
          s = t;
        }),
        Object.freeze(a);
    },
    44107: [
      (t) => {
        "use strict";
        t.s({ AddressCoder: () => k }, 44107),
          t.s({ getAddress: () => c, getIcapAddress: () => h }, 978895);
        var e = t.i(749401),
          r = t.i(713514),
          n = t.i(13517);
        let i = BigInt(0),
          s = BigInt(36);
        function a(t) {
          let n = (t = t.toLowerCase()).substring(2).split(""),
            i = new Uint8Array(40);
          for (let t = 0; t < 40; t++) i[t] = n[t].charCodeAt(0);
          let s = (0, r.getBytes)((0, e.keccak256)(i));
          for (let t = 0; t < 40; t += 2)
            s[t >> 1] >> 4 >= 8 && (n[t] = n[t].toUpperCase()),
              (15 & s[t >> 1]) >= 8 && (n[t + 1] = n[t + 1].toUpperCase());
          return "0x" + n.join("");
        }
        let o = {};
        for (let t = 0; t < 10; t++) o[String(t)] = String(t);
        for (let t = 0; t < 26; t++)
          o[String.fromCharCode(65 + t)] = String(10 + t);
        function l(t) {
          let e = (t =
            (t = t.toUpperCase()).substring(4) + t.substring(0, 2) + "00")
            .split("")
            .map((t) => o[t])
            .join("");
          for (; e.length >= 15; ) {
            let t = e.substring(0, 15);
            e = (parseInt(t, 10) % 97) + e.substring(t.length);
          }
          let r = String(98 - (parseInt(e, 10) % 97));
          for (; r.length < 2; ) r = "0" + r;
          return r;
        }
        let u = (function () {
          let t = {};
          for (let e = 0; e < 36; e++)
            t["0123456789abcdefghijklmnopqrstuvwxyz"[e]] = BigInt(e);
          return t;
        })();
        function c(t) {
          if (
            ((0, n.assertArgument)(
              "string" == typeof t,
              "invalid address",
              "address",
              t
            ),
            t.match(/^(0x)?[0-9a-fA-F]{40}$/))
          ) {
            t.startsWith("0x") || (t = "0x" + t);
            let e = a(t);
            return (
              (0, n.assertArgument)(
                !t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || e === t,
                "bad address checksum",
                "address",
                t
              ),
              e
            );
          }
          if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
            (0, n.assertArgument)(
              t.substring(2, 4) === l(t),
              "bad icap checksum",
              "address",
              t
            );
            let e = (function (t) {
              t = t.toLowerCase();
              let e = i;
              for (let r = 0; r < t.length; r++) e = e * s + u[t[r]];
              return e;
            })(t.substring(4)).toString(16);
            for (; e.length < 40; ) e = "0" + e;
            return a("0x" + e);
          }
          (0, n.assertArgument)(!1, "invalid address", "address", t);
        }
        function h(t) {
          let e = BigInt(c(t)).toString(36).toUpperCase();
          for (; e.length < 30; ) e = "0" + e;
          return "XE" + l("XE00" + e) + e;
        }
        var f = t.i(219223);
        t.s({ Typed: () => x }, 267528);
        var d = t.i(300522),
          g = t.i(216788),
          p = t.i(725039),
          m = t.i(825285),
          y = t.i(551749);
        let A = {};
        function w(t, e) {
          let r = !1;
          return (
            e < 0 && ((r = !0), (e *= -1)),
            new x(A, "".concat(r ? "" : "u", "int").concat(e), t, {
              signed: r,
              width: e,
            })
          );
        }
        function b(t, e) {
          return new x(A, "bytes".concat(e || ""), t, { size: e });
        }
        let E = Symbol.for("_ethers_typed");
        var _ = new WeakMap();
        class x {
          format() {
            if ("array" === this.type || "dynamicArray" === this.type)
              throw Error("");
            return "tuple" === this.type
              ? "tuple(".concat(
                  this.value.map((t) => t.format()).join(","),
                  ")"
                )
              : this.type;
          }
          defaultValue() {
            return 0;
          }
          minValue() {
            return 0;
          }
          maxValue() {
            return 0;
          }
          isBigInt() {
            return !!this.type.match(/^u?int[0-9]+$/);
          }
          isData() {
            return this.type.startsWith("bytes");
          }
          isString() {
            return "string" === this.type;
          }
          get tupleName() {
            if ("tuple" !== this.type) throw TypeError("not a tuple");
            return (0, d._)(this, _);
          }
          get arrayLength() {
            if ("array" !== this.type) throw TypeError("not an array");
            return !0 === (0, d._)(this, _)
              ? -1
              : !1 === (0, d._)(this, _)
              ? this.value.length
              : null;
          }
          static from(t, e) {
            return new x(A, t, e);
          }
          static uint8(t) {
            return w(t, 8);
          }
          static uint16(t) {
            return w(t, 16);
          }
          static uint24(t) {
            return w(t, 24);
          }
          static uint32(t) {
            return w(t, 32);
          }
          static uint40(t) {
            return w(t, 40);
          }
          static uint48(t) {
            return w(t, 48);
          }
          static uint56(t) {
            return w(t, 56);
          }
          static uint64(t) {
            return w(t, 64);
          }
          static uint72(t) {
            return w(t, 72);
          }
          static uint80(t) {
            return w(t, 80);
          }
          static uint88(t) {
            return w(t, 88);
          }
          static uint96(t) {
            return w(t, 96);
          }
          static uint104(t) {
            return w(t, 104);
          }
          static uint112(t) {
            return w(t, 112);
          }
          static uint120(t) {
            return w(t, 120);
          }
          static uint128(t) {
            return w(t, 128);
          }
          static uint136(t) {
            return w(t, 136);
          }
          static uint144(t) {
            return w(t, 144);
          }
          static uint152(t) {
            return w(t, 152);
          }
          static uint160(t) {
            return w(t, 160);
          }
          static uint168(t) {
            return w(t, 168);
          }
          static uint176(t) {
            return w(t, 176);
          }
          static uint184(t) {
            return w(t, 184);
          }
          static uint192(t) {
            return w(t, 192);
          }
          static uint200(t) {
            return w(t, 200);
          }
          static uint208(t) {
            return w(t, 208);
          }
          static uint216(t) {
            return w(t, 216);
          }
          static uint224(t) {
            return w(t, 224);
          }
          static uint232(t) {
            return w(t, 232);
          }
          static uint240(t) {
            return w(t, 240);
          }
          static uint248(t) {
            return w(t, 248);
          }
          static uint256(t) {
            return w(t, 256);
          }
          static uint(t) {
            return w(t, 256);
          }
          static int8(t) {
            return w(t, -8);
          }
          static int16(t) {
            return w(t, -16);
          }
          static int24(t) {
            return w(t, -24);
          }
          static int32(t) {
            return w(t, -32);
          }
          static int40(t) {
            return w(t, -40);
          }
          static int48(t) {
            return w(t, -48);
          }
          static int56(t) {
            return w(t, -56);
          }
          static int64(t) {
            return w(t, -64);
          }
          static int72(t) {
            return w(t, -72);
          }
          static int80(t) {
            return w(t, -80);
          }
          static int88(t) {
            return w(t, -88);
          }
          static int96(t) {
            return w(t, -96);
          }
          static int104(t) {
            return w(t, -104);
          }
          static int112(t) {
            return w(t, -112);
          }
          static int120(t) {
            return w(t, -120);
          }
          static int128(t) {
            return w(t, -128);
          }
          static int136(t) {
            return w(t, -136);
          }
          static int144(t) {
            return w(t, -144);
          }
          static int152(t) {
            return w(t, -152);
          }
          static int160(t) {
            return w(t, -160);
          }
          static int168(t) {
            return w(t, -168);
          }
          static int176(t) {
            return w(t, -176);
          }
          static int184(t) {
            return w(t, -184);
          }
          static int192(t) {
            return w(t, -192);
          }
          static int200(t) {
            return w(t, -200);
          }
          static int208(t) {
            return w(t, -208);
          }
          static int216(t) {
            return w(t, -216);
          }
          static int224(t) {
            return w(t, -224);
          }
          static int232(t) {
            return w(t, -232);
          }
          static int240(t) {
            return w(t, -240);
          }
          static int248(t) {
            return w(t, -248);
          }
          static int256(t) {
            return w(t, -256);
          }
          static int(t) {
            return w(t, -256);
          }
          static bytes1(t) {
            return b(t, 1);
          }
          static bytes2(t) {
            return b(t, 2);
          }
          static bytes3(t) {
            return b(t, 3);
          }
          static bytes4(t) {
            return b(t, 4);
          }
          static bytes5(t) {
            return b(t, 5);
          }
          static bytes6(t) {
            return b(t, 6);
          }
          static bytes7(t) {
            return b(t, 7);
          }
          static bytes8(t) {
            return b(t, 8);
          }
          static bytes9(t) {
            return b(t, 9);
          }
          static bytes10(t) {
            return b(t, 10);
          }
          static bytes11(t) {
            return b(t, 11);
          }
          static bytes12(t) {
            return b(t, 12);
          }
          static bytes13(t) {
            return b(t, 13);
          }
          static bytes14(t) {
            return b(t, 14);
          }
          static bytes15(t) {
            return b(t, 15);
          }
          static bytes16(t) {
            return b(t, 16);
          }
          static bytes17(t) {
            return b(t, 17);
          }
          static bytes18(t) {
            return b(t, 18);
          }
          static bytes19(t) {
            return b(t, 19);
          }
          static bytes20(t) {
            return b(t, 20);
          }
          static bytes21(t) {
            return b(t, 21);
          }
          static bytes22(t) {
            return b(t, 22);
          }
          static bytes23(t) {
            return b(t, 23);
          }
          static bytes24(t) {
            return b(t, 24);
          }
          static bytes25(t) {
            return b(t, 25);
          }
          static bytes26(t) {
            return b(t, 26);
          }
          static bytes27(t) {
            return b(t, 27);
          }
          static bytes28(t) {
            return b(t, 28);
          }
          static bytes29(t) {
            return b(t, 29);
          }
          static bytes30(t) {
            return b(t, 30);
          }
          static bytes31(t) {
            return b(t, 31);
          }
          static bytes32(t) {
            return b(t, 32);
          }
          static address(t) {
            return new x(A, "address", t);
          }
          static bool(t) {
            return new x(A, "bool", !!t);
          }
          static bytes(t) {
            return new x(A, "bytes", t);
          }
          static string(t) {
            return new x(A, "string", t);
          }
          static array(t, e) {
            throw Error("not implemented yet");
          }
          static tuple(t, e) {
            throw Error("not implemented yet");
          }
          static overrides(t) {
            return new x(A, "overrides", Object.assign({}, t));
          }
          static isTyped(t) {
            return (
              t &&
              "object" == typeof t &&
              "_typedSymbol" in t &&
              t._typedSymbol === E
            );
          }
          static dereference(t, e) {
            if (x.isTyped(t)) {
              if (t.type !== e)
                throw Error(
                  "invalid type: expecetd ".concat(e, ", got ").concat(t.type)
                );
              return t.value;
            }
            return t;
          }
          constructor(t, e, r, i) {
            (0, m._)(this, "type", void 0),
              (0, m._)(this, "value", void 0),
              (0, g._)(this, _, { writable: !0, value: void 0 }),
              (0, m._)(this, "_typedSymbol", void 0),
              null == i && (i = null),
              (0, n.assertPrivate)(A, t, "Typed"),
              (0, y.defineProperties)(this, {
                _typedSymbol: E,
                type: e,
                value: r,
              }),
              (0, p._)(this, _, i),
              this.format();
          }
        }
        var B = t.i(99994);
        class k extends B.Coder {
          defaultValue() {
            return "0x0000000000000000000000000000000000000000";
          }
          encode(t, e) {
            let r = x.dereference(e, "string");
            try {
              r = c(r);
            } catch (t) {
              return this._throwError(t.message, e);
            }
            return t.writeValue(r);
          }
          decode(t) {
            return c((0, f.toBeHex)(t.readValue(), 20));
          }
          constructor(t) {
            super("address", "address", t, !1);
          }
        }
        t.s({ ArrayCoder: () => R, pack: () => C, unpack: () => O }, 668783);
        var P = B,
          N = B;
        class I extends N.Coder {
          defaultValue() {
            return this.coder.defaultValue();
          }
          encode(t, e) {
            return this.coder.encode(t, e);
          }
          decode(t) {
            return this.coder.decode(t);
          }
          constructor(t) {
            super(t.name, t.type, "_", t.dynamic),
              (0, m._)(this, "coder", void 0),
              (this.coder = t);
          }
        }
        function C(t, e, r) {
          let i = [];
          if (Array.isArray(r)) i = r;
          else if (r && "object" == typeof r) {
            let t = {};
            i = e.map((e) => {
              let i = e.localName;
              return (
                (0, n.assert)(
                  i,
                  "cannot encode object for signature with missing names",
                  "INVALID_ARGUMENT",
                  { argument: "values", info: { coder: e }, value: r }
                ),
                (0, n.assert)(
                  !t[i],
                  "cannot encode object for signature with duplicate names",
                  "INVALID_ARGUMENT",
                  { argument: "values", info: { coder: e }, value: r }
                ),
                (t[i] = !0),
                r[i]
              );
            });
          } else (0, n.assertArgument)(!1, "invalid tuple value", "tuple", r);
          (0, n.assertArgument)(
            e.length === i.length,
            "types/value length mismatch",
            "tuple",
            r
          );
          let s = new P.Writer(),
            a = new P.Writer(),
            o = [];
          e.forEach((t, e) => {
            let r = i[e];
            if (t.dynamic) {
              let e = a.length;
              t.encode(a, r);
              let n = s.writeUpdatableValue();
              o.push((t) => {
                n(t + e);
              });
            } else t.encode(s, r);
          }),
            o.forEach((t) => {
              t(s.length);
            });
          let l = t.appendWriter(s);
          return l + t.appendWriter(a);
        }
        function O(t, e) {
          let r = [],
            i = [],
            s = t.subReader(0);
          return (
            e.forEach((e) => {
              let a = null;
              if (e.dynamic) {
                let r = t.readIndex(),
                  i = s.subReader(r);
                try {
                  a = e.decode(i);
                } catch (t) {
                  if ((0, n.isError)(t, "BUFFER_OVERRUN")) throw t;
                  ((a = t).baseType = e.name),
                    (a.name = e.localName),
                    (a.type = e.type);
                }
              } else
                try {
                  a = e.decode(t);
                } catch (t) {
                  if ((0, n.isError)(t, "BUFFER_OVERRUN")) throw t;
                  ((a = t).baseType = e.name),
                    (a.name = e.localName),
                    (a.type = e.type);
                }
              if (void 0 == a) throw Error("investigate");
              r.push(a), i.push(e.localName || null);
            }),
            P.Result.fromItems(r, i)
          );
        }
        class R extends P.Coder {
          defaultValue() {
            let t = this.coder.defaultValue(),
              e = [];
            for (let r = 0; r < this.length; r++) e.push(t);
            return e;
          }
          encode(t, e) {
            let r = x.dereference(e, "array");
            Array.isArray(r) || this._throwError("expected array value", r);
            let i = this.length;
            -1 === i && ((i = r.length), t.writeValue(r.length)),
              (0, n.assertArgumentCount)(
                r.length,
                i,
                "coder array" + (this.localName ? " " + this.localName : "")
              );
            let s = [];
            for (let t = 0; t < r.length; t++) s.push(this.coder);
            return C(t, s, r);
          }
          decode(t) {
            let e = this.length;
            -1 === e &&
              ((e = t.readIndex()),
              (0, n.assert)(
                e * P.WordSize <= t.dataLength,
                "insufficient data length",
                "BUFFER_OVERRUN",
                {
                  buffer: t.bytes,
                  offset: e * P.WordSize,
                  length: t.dataLength,
                }
              ));
            let r = [];
            for (let t = 0; t < e; t++) r.push(new I(this.coder));
            return O(t, r);
          }
          constructor(t, e, r) {
            super(
              "array",
              t.type + "[" + (e >= 0 ? e : "") + "]",
              r,
              -1 === e || t.dynamic
            ),
              (0, m._)(this, "coder", void 0),
              (0, m._)(this, "length", void 0),
              (0, y.defineProperties)(this, { coder: t, length: e });
          }
        }
        t.s({ BooleanCoder: () => S }, 115151);
        var T = B;
        class S extends T.Coder {
          defaultValue() {
            return !1;
          }
          encode(t, e) {
            let r = x.dereference(e, "bool");
            return t.writeValue(+!!r);
          }
          decode(t) {
            return !!t.readValue();
          }
          constructor(t) {
            super("bool", "bool", t, !1);
          }
        }
        t.s({ BytesCoder: () => D, DynamicBytesCoder: () => F }, 839728);
        var U = B;
        class F extends U.Coder {
          defaultValue() {
            return "0x";
          }
          encode(t, e) {
            e = (0, r.getBytesCopy)(e);
            let n = t.writeValue(e.length);
            return n + t.writeBytes(e);
          }
          decode(t) {
            return t.readBytes(t.readIndex(), !0);
          }
          constructor(t, e) {
            super(t, t, e, !0);
          }
        }
        class D extends F {
          decode(t) {
            return (0, r.hexlify)(super.decode(t));
          }
          constructor(t) {
            super("bytes", t);
          }
        }
        t.s({ FixedBytesCoder: () => M }, 321803);
        var L = B;
        class M extends L.Coder {
          defaultValue() {
            return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(
              0,
              2 + 2 * this.size
            );
          }
          encode(t, e) {
            let n = (0, r.getBytesCopy)(x.dereference(e, this.type));
            return (
              n.length !== this.size &&
                this._throwError("incorrect data length", e),
              t.writeBytes(n)
            );
          }
          decode(t) {
            return (0, r.hexlify)(t.readBytes(this.size));
          }
          constructor(t, e) {
            let r = "bytes" + String(t);
            super(r, r, e, !1),
              (0, m._)(this, "size", void 0),
              (0, y.defineProperties)(this, { size: t }, { size: "number" });
          }
        }
        t.s({ NullCoder: () => Q }, 163514);
        var G = B;
        let H = new Uint8Array([]);
        class Q extends G.Coder {
          defaultValue() {
            return null;
          }
          encode(t, e) {
            return (
              null != e && this._throwError("not null", e), t.writeBytes(H)
            );
          }
          decode(t) {
            return t.readBytes(0), null;
          }
          constructor(t) {
            super("null", "", t, !1);
          }
        }
        t.s({ NumberCoder: () => J }, 530366);
        var z = B;
        let W = BigInt(0),
          V = BigInt(1),
          j = BigInt(
            "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
          );
        class J extends z.Coder {
          defaultValue() {
            return 0;
          }
          encode(t, e) {
            let r = (0, f.getBigInt)(x.dereference(e, this.type)),
              n = (0, f.mask)(j, 8 * z.WordSize);
            if (this.signed) {
              let t = (0, f.mask)(n, 8 * this.size - 1);
              (r > t || r < -(t + V)) &&
                this._throwError("value out-of-bounds", e),
                (r = (0, f.toTwos)(r, 8 * z.WordSize));
            } else
              (r < W || r > (0, f.mask)(n, 8 * this.size)) &&
                this._throwError("value out-of-bounds", e);
            return t.writeValue(r);
          }
          decode(t) {
            let e = (0, f.mask)(t.readValue(), 8 * this.size);
            return this.signed && (e = (0, f.fromTwos)(e, 8 * this.size)), e;
          }
          constructor(t, e, r) {
            let n = (e ? "int" : "uint") + 8 * t;
            super(n, n, r, !1),
              (0, m._)(this, "size", void 0),
              (0, m._)(this, "signed", void 0),
              (0, y.defineProperties)(
                this,
                { size: t, signed: e },
                { size: "number", signed: "boolean" }
              );
          }
        }
      },
      [978895, 267528, 668783, 115151, 839728, 321803, 163514, 530366],
    ],
    853399: (t) => {
      "use strict";
      t.s({
        Utf8ErrorFuncs: () => i,
        toUtf8Bytes: () => a,
        toUtf8CodePoints: () => l,
        toUtf8String: () => o,
      });
      var e = t.i(713514),
        r = t.i(13517);
      function n(t, e, r, n, i) {
        if ("BAD_PREFIX" === t || "UNEXPECTED_CONTINUE" === t) {
          let t = 0;
          for (let n = e + 1; n < r.length && r[n] >> 6 == 2; n++) t++;
          return t;
        }
        return "OVERRUN" === t ? r.length - e - 1 : 0;
      }
      let i = Object.freeze({
        error: function (t, e, n, i, s) {
          (0, r.assertArgument)(
            !1,
            "invalid codepoint at offset ".concat(e, "; ").concat(t),
            "bytes",
            n
          );
        },
        ignore: n,
        replace: function (t, e, i, s, a) {
          return "OVERLONG" === t
            ? ((0, r.assertArgument)(
                "number" == typeof a,
                "invalid bad code point for replacement",
                "badCodepoint",
                a
              ),
              s.push(a),
              0)
            : (s.push(65533), n(t, e, i, s, a));
        },
      });
      function s(t, r) {
        null == r && (r = i.error);
        let n = (0, e.getBytes)(t, "bytes"),
          s = [],
          a = 0;
        for (; a < n.length; ) {
          let t = n[a++];
          if (t >> 7 == 0) {
            s.push(t);
            continue;
          }
          let e = null,
            i = null;
          if ((224 & t) == 192) (e = 1), (i = 127);
          else if ((240 & t) == 224) (e = 2), (i = 2047);
          else if ((248 & t) == 240) (e = 3), (i = 65535);
          else {
            (192 & t) == 128
              ? (a += r("UNEXPECTED_CONTINUE", a - 1, n, s))
              : (a += r("BAD_PREFIX", a - 1, n, s));
            continue;
          }
          if (a - 1 + e >= n.length) {
            a += r("OVERRUN", a - 1, n, s);
            continue;
          }
          let o = t & ((1 << (8 - e - 1)) - 1);
          for (let t = 0; t < e; t++) {
            let t = n[a];
            if ((192 & t) != 128) {
              (a += r("MISSING_CONTINUE", a, n, s)), (o = null);
              break;
            }
            (o = (o << 6) | (63 & t)), a++;
          }
          if (null !== o) {
            if (o > 1114111) {
              a += r("OUT_OF_RANGE", a - 1 - e, n, s, o);
              continue;
            }
            if (o >= 55296 && o <= 57343) {
              a += r("UTF16_SURROGATE", a - 1 - e, n, s, o);
              continue;
            }
            if (o <= i) {
              a += r("OVERLONG", a - 1 - e, n, s, o);
              continue;
            }
            s.push(o);
          }
        }
        return s;
      }
      function a(t, e) {
        (0, r.assertArgument)(
          "string" == typeof t,
          "invalid string value",
          "str",
          t
        ),
          null != e && ((0, r.assertNormalize)(e), (t = t.normalize(e)));
        let n = [];
        for (let e = 0; e < t.length; e++) {
          let i = t.charCodeAt(e);
          if (i < 128) n.push(i);
          else if (i < 2048) n.push((i >> 6) | 192), n.push((63 & i) | 128);
          else if ((64512 & i) == 55296) {
            e++;
            let s = t.charCodeAt(e);
            (0, r.assertArgument)(
              e < t.length && (64512 & s) == 56320,
              "invalid surrogate pair",
              "str",
              t
            );
            let a = 65536 + ((1023 & i) << 10) + (1023 & s);
            n.push((a >> 18) | 240),
              n.push(((a >> 12) & 63) | 128),
              n.push(((a >> 6) & 63) | 128),
              n.push((63 & a) | 128);
          } else
            n.push((i >> 12) | 224),
              n.push(((i >> 6) & 63) | 128),
              n.push((63 & i) | 128);
        }
        return new Uint8Array(n);
      }
      function o(t, e) {
        return s(t, e)
          .map((t) =>
            t <= 65535
              ? String.fromCharCode(t)
              : String.fromCharCode(
                  (((t -= 65536) >> 10) & 1023) + 55296,
                  (1023 & t) + 56320
                )
          )
          .join("");
      }
      function l(t, e) {
        return s(a(t, e));
      }
    },
    810998: [
      (t) => {
        "use strict";
        t.s({ StringCoder: () => i }, 810998);
        var e = t.i(853399),
          r = t.i(267528),
          n = t.i(839728);
        class i extends n.DynamicBytesCoder {
          defaultValue() {
            return "";
          }
          encode(t, n) {
            return super.encode(
              t,
              (0, e.toUtf8Bytes)(r.Typed.dereference(n, "string"))
            );
          }
          decode(t) {
            return (0, e.toUtf8String)(super.decode(t));
          }
          constructor(t) {
            super("string", t);
          }
        }
        t.s({ TupleCoder: () => u }, 490256);
        var s = t.i(825285),
          a = t.i(551749),
          o = t.i(99994),
          l = t.i(668783);
        class u extends o.Coder {
          defaultValue() {
            let t = [];
            this.coders.forEach((e) => {
              t.push(e.defaultValue());
            });
            let e = this.coders.reduce((t, e) => {
              let r = e.localName;
              return r && (t[r] || (t[r] = 0), t[r]++), t;
            }, {});
            return (
              this.coders.forEach((r, n) => {
                let i = r.localName;
                i &&
                  1 === e[i] &&
                  ("length" === i && (i = "_length"),
                  null == t[i] && (t[i] = t[n]));
              }),
              Object.freeze(t)
            );
          }
          encode(t, e) {
            let n = r.Typed.dereference(e, "tuple");
            return (0, l.pack)(t, this.coders, n);
          }
          decode(t) {
            return (0, l.unpack)(t, this.coders);
          }
          constructor(t, e) {
            let r = !1,
              n = [];
            t.forEach((t) => {
              t.dynamic && (r = !0), n.push(t.type);
            }),
              super("tuple", "tuple(" + n.join(",") + ")", e, r),
              (0, s._)(this, "coders", void 0),
              (0, a.defineProperties)(this, {
                coders: Object.freeze(t.slice()),
              });
          }
        }
      },
      [490256],
    ],
    721506: (t) => {
      "use strict";
      t.s({ id: () => n });
      var e = t.i(749401),
        r = t.i(853399);
      function n(t) {
        return (0, e.keccak256)((0, r.toUtf8Bytes)(t));
      }
    },
    468265: [
      (t) => {
        "use strict";
        t.s({ AbiCoder: () => tN }, 468265);
        var e = t.i(52992),
          r = t.i(153525),
          n = t.i(13517),
          i = t.i(99994),
          s = t.i(44107),
          a = t.i(668783),
          o = t.i(115151),
          l = t.i(839728),
          u = t.i(321803),
          c = t.i(163514),
          h = t.i(530366),
          f = t.i(810998),
          d = t.i(490256);
        t.s(
          {
            ConstructorFragment: () => tm,
            ErrorFragment: () => tg,
            EventFragment: () => tp,
            FallbackFragment: () => ty,
            Fragment: () => th,
            FunctionFragment: () => tA,
            NamedFragment: () => tf,
            ParamType: () => tu,
            StructFragment: () => tw,
          },
          704996
        );
        var g = t.i(300522),
          p = t.i(216788),
          m = t.i(725039),
          y = t.i(57882),
          A = t.i(825285),
          w = t.i(551749),
          b = t.i(219223),
          E = t.i(721506);
        function _(t) {
          let e = new Set();
          return t.forEach((t) => e.add(t)), Object.freeze(e);
        }
        let x = _("external public payable override".split(" ")),
          B =
            "constant external internal payable private public pure view override",
          k = _(B.split(" ")),
          P = "constructor error event fallback function receive struct",
          N = _(P.split(" ")),
          I = "calldata memory storage payable indexed",
          C = _(I.split(" ")),
          O = _([P, I, "tuple returns", B].join(" ").split(" ")),
          R = {
            "(": "OPEN_PAREN",
            ")": "CLOSE_PAREN",
            "[": "OPEN_BRACKET",
            "]": "CLOSE_BRACKET",
            ",": "COMMA",
            "@": "AT",
          },
          T = RegExp("^(\\s*)"),
          S = RegExp("^([0-9]+)"),
          U = RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"),
          F = RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"),
          D = RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
        var L = new WeakMap(),
          M = new WeakMap(),
          G = new WeakSet();
        class H {
          get offset() {
            return (0, g._)(this, L);
          }
          get length() {
            return (0, g._)(this, M).length - (0, g._)(this, L);
          }
          clone() {
            return new H((0, g._)(this, M));
          }
          reset() {
            (0, m._)(this, L, 0);
          }
          popKeyword(t) {
            let e = this.peek();
            if ("KEYWORD" !== e.type || !t.has(e.text))
              throw Error("expected keyword ".concat(e.text));
            return this.pop().text;
          }
          popType(t) {
            if (this.peek().type !== t) {
              let e = this.peek();
              throw Error(
                "expected "
                  .concat(t, "; got ")
                  .concat(e.type, " ")
                  .concat(JSON.stringify(e.text))
              );
            }
            return this.pop().text;
          }
          popParen() {
            let t = this.peek();
            if ("OPEN_PAREN" !== t.type) throw Error("bad start");
            let r = (0, e._)(this, G, Q).call(
              this,
              (0, g._)(this, L) + 1,
              t.match + 1
            );
            return (0, m._)(this, L, t.match + 1), r;
          }
          popParams() {
            let t = this.peek();
            if ("OPEN_PAREN" !== t.type) throw Error("bad start");
            let r = [];
            for (; (0, g._)(this, L) < t.match - 1; ) {
              let t = this.peek().linkNext;
              r.push((0, e._)(this, G, Q).call(this, (0, g._)(this, L) + 1, t)),
                (0, m._)(this, L, t);
            }
            return (0, m._)(this, L, t.match + 1), r;
          }
          peek() {
            if ((0, g._)(this, L) >= (0, g._)(this, M).length)
              throw Error("out-of-bounds");
            return (0, g._)(this, M)[(0, g._)(this, L)];
          }
          peekKeyword(t) {
            let e = this.peekType("KEYWORD");
            return null != e && t.has(e) ? e : null;
          }
          peekType(t) {
            if (0 === this.length) return null;
            let e = this.peek();
            return e.type === t ? e.text : null;
          }
          pop() {
            let t = this.peek();
            return (0, y._)(this, L).value++, t;
          }
          toString() {
            let t = [];
            for (let e = (0, g._)(this, L); e < (0, g._)(this, M).length; e++) {
              let r = (0, g._)(this, M)[e];
              t.push("".concat(r.type, ":").concat(r.text));
            }
            return "<TokenString ".concat(t.join(" "), ">");
          }
          constructor(t) {
            (0, r._)(this, G),
              (0, p._)(this, L, { writable: !0, value: void 0 }),
              (0, p._)(this, M, { writable: !0, value: void 0 }),
              (0, m._)(this, L, 0),
              (0, m._)(this, M, t.slice());
          }
        }
        function Q() {
          let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
          return new H(
            (0, g._)(this, M)
              .slice(t, e)
              .map((e) =>
                Object.freeze(
                  Object.assign({}, e, {
                    match: e.match - t,
                    linkBack: e.linkBack - t,
                    linkNext: e.linkNext - t,
                  })
                )
              )
          );
        }
        function z(t) {
          let e = [],
            r = (e) => {
              let r = s < t.length ? JSON.stringify(t[s]) : "$EOI";
              throw Error(
                "invalid token ".concat(r, " at ").concat(s, ": ").concat(e)
              );
            },
            n = [],
            i = [],
            s = 0;
          for (; s < t.length; ) {
            let a = t.substring(s),
              o = a.match(T);
            o && ((s += o[1].length), (a = t.substring(s)));
            let l = {
              depth: n.length,
              linkBack: -1,
              linkNext: -1,
              match: -1,
              type: "",
              text: "",
              offset: s,
              value: -1,
            };
            e.push(l);
            let u = R[a[0]] || "";
            if (u) {
              if (((l.type = u), (l.text = a[0]), s++, "OPEN_PAREN" === u))
                n.push(e.length - 1), i.push(e.length - 1);
              else if ("CLOSE_PAREN" == u)
                0 === n.length && r("no matching open bracket"),
                  (l.match = n.pop()),
                  (e[l.match].match = e.length - 1),
                  l.depth--,
                  (l.linkBack = i.pop()),
                  (e[l.linkBack].linkNext = e.length - 1);
              else if ("COMMA" === u)
                (l.linkBack = i.pop()),
                  (e[l.linkBack].linkNext = e.length - 1),
                  i.push(e.length - 1);
              else if ("OPEN_BRACKET" === u) l.type = "BRACKET";
              else if ("CLOSE_BRACKET" === u) {
                let t = e.pop().text;
                if (e.length > 0 && "NUMBER" === e[e.length - 1].type) {
                  let r = e.pop().text;
                  (t = r + t), (e[e.length - 1].value = (0, b.getNumber)(r));
                }
                if (0 === e.length || "BRACKET" !== e[e.length - 1].type)
                  throw Error("missing opening bracket");
                e[e.length - 1].text += t;
              }
              continue;
            }
            if ((o = a.match(U))) {
              if (((l.text = o[1]), (s += l.text.length), O.has(l.text))) {
                l.type = "KEYWORD";
                continue;
              }
              if (l.text.match(D)) {
                l.type = "TYPE";
                continue;
              }
              l.type = "ID";
              continue;
            }
            if ((o = a.match(S))) {
              (l.text = o[1]), (l.type = "NUMBER"), (s += l.text.length);
              continue;
            }
            throw Error(
              "unexpected token "
                .concat(JSON.stringify(a[0]), " at position ")
                .concat(s)
            );
          }
          return new H(e.map((t) => Object.freeze(t)));
        }
        function W(t, e) {
          let r = [];
          for (let n in e.keys()) t.has(n) && r.push(n);
          if (r.length > 1)
            throw Error("conflicting types: ".concat(r.join(", ")));
        }
        function V(t, e) {
          if (e.peekKeyword(N)) {
            let r = e.pop().text;
            if (r !== t) throw Error("expected ".concat(t, ", got ").concat(r));
          }
          return e.popType("ID");
        }
        function j(t, e) {
          let r = new Set();
          for (;;) {
            let n = t.peekType("KEYWORD");
            if (null == n || (e && !e.has(n))) break;
            if ((t.pop(), r.has(n)))
              throw Error("duplicate keywords: ".concat(JSON.stringify(n)));
            r.add(n);
          }
          return Object.freeze(r);
        }
        function J(t) {
          let e = j(t, k);
          return (W(e, _("constant payable nonpayable".split(" "))),
          W(e, _("pure view payable nonpayable".split(" "))),
          e.has("view"))
            ? "view"
            : e.has("pure")
            ? "pure"
            : e.has("payable")
            ? "payable"
            : e.has("nonpayable")
            ? "nonpayable"
            : e.has("constant")
            ? "view"
            : "nonpayable";
        }
        function K(t, e) {
          return t.popParams().map((t) => tu.from(t, e));
        }
        function q(t) {
          if (t.peekType("AT")) {
            if ((t.pop(), t.peekType("NUMBER")))
              return (0, b.getBigInt)(t.pop().text);
            throw Error("invalid gas");
          }
          return null;
        }
        function Z(t) {
          if (t.length)
            throw Error(
              "unexpected tokens at offset "
                .concat(t.offset, ": ")
                .concat(t.toString())
            );
        }
        let Y = new RegExp(/^(.*)\[([0-9]*)\]$/);
        function X(t) {
          let e = t.match(D);
          if (
            ((0, n.assertArgument)(e, "invalid type", "type", t), "uint" === t)
          )
            return "uint256";
          if ("int" === t) return "int256";
          if (e[2]) {
            let r = parseInt(e[2]);
            (0, n.assertArgument)(
              0 !== r && r <= 32,
              "invalid bytes length",
              "type",
              t
            );
          } else if (e[3]) {
            let r = parseInt(e[3]);
            (0, n.assertArgument)(
              0 !== r && r <= 256 && r % 8 == 0,
              "invalid numeric width",
              "type",
              t
            );
          }
          return t;
        }
        let $ = {},
          tt = Symbol.for("_ethers_internal"),
          te = "_ParamTypeInternal",
          tr = "_ErrorInternal",
          tn = "_EventInternal",
          ti = "_ConstructorInternal",
          ts = "_FallbackInternal",
          ta = "_FunctionInternal",
          to = "_StructInternal";
        var tl = new WeakSet();
        class tu {
          format(t) {
            if ((null == t && (t = "sighash"), "json" === t)) {
              let e = this.name || "";
              if (this.isArray()) {
                let t = JSON.parse(this.arrayChildren.format("json"));
                return (
                  (t.name = e),
                  (t.type += "[".concat(
                    this.arrayLength < 0 ? "" : String(this.arrayLength),
                    "]"
                  )),
                  JSON.stringify(t)
                );
              }
              let r = {
                type: "tuple" === this.baseType ? "tuple" : this.type,
                name: e,
              };
              return (
                "boolean" == typeof this.indexed && (r.indexed = this.indexed),
                this.isTuple() &&
                  (r.components = this.components.map((e) =>
                    JSON.parse(e.format(t))
                  )),
                JSON.stringify(r)
              );
            }
            let e = "";
            return (
              this.isArray()
                ? ((e += this.arrayChildren.format(t)),
                  (e += "[".concat(
                    this.arrayLength < 0 ? "" : String(this.arrayLength),
                    "]"
                  )))
                : this.isTuple()
                ? (e +=
                    "(" +
                    this.components
                      .map((e) => e.format(t))
                      .join("full" === t ? ", " : ",") +
                    ")")
                : (e += this.type),
              "sighash" !== t &&
                (!0 === this.indexed && (e += " indexed"),
                "full" === t && this.name && (e += " " + this.name)),
              e
            );
          }
          isArray() {
            return "array" === this.baseType;
          }
          isTuple() {
            return "tuple" === this.baseType;
          }
          isIndexable() {
            return null != this.indexed;
          }
          walk(t, e) {
            if (this.isArray()) {
              if (!Array.isArray(t)) throw Error("invalid array value");
              if (-1 !== this.arrayLength && t.length !== this.arrayLength)
                throw Error("array is wrong length");
              let r = this;
              return t.map((t) => r.arrayChildren.walk(t, e));
            }
            if (this.isTuple()) {
              if (!Array.isArray(t)) throw Error("invalid tuple value");
              if (t.length !== this.components.length)
                throw Error("array is wrong length");
              let r = this;
              return t.map((t, n) => r.components[n].walk(t, e));
            }
            return e(this.type, t);
          }
          async walkAsync(t, r) {
            let n = [],
              i = [t];
            return (
              (0, e._)(this, tl, tc).call(this, n, t, r, (t) => {
                i[0] = t;
              }),
              n.length && (await Promise.all(n)),
              i[0]
            );
          }
          static from(t, e) {
            if (tu.isParamType(t)) return t;
            if ("string" == typeof t)
              try {
                return tu.from(z(t), e);
              } catch (e) {
                (0, n.assertArgument)(!1, "invalid param type", "obj", t);
              }
            else if (t instanceof H) {
              let r = "",
                n = "",
                i = null;
              j(t, _(["tuple"])).has("tuple") || t.peekType("OPEN_PAREN")
                ? ((n = "tuple"),
                  (i = t.popParams().map((t) => tu.from(t))),
                  (r = "tuple(".concat(
                    i.map((t) => t.format()).join(","),
                    ")"
                  )))
                : (n = r = X(t.popType("TYPE")));
              let s = null,
                a = null;
              for (; t.length && t.peekType("BRACKET"); ) {
                let e = t.pop();
                (s = new tu($, "", r, n, null, i, a, s)),
                  (a = e.value),
                  (r += e.text),
                  (n = "array"),
                  (i = null);
              }
              let o = null;
              if (j(t, C).has("indexed")) {
                if (!e) throw Error("");
                o = !0;
              }
              let l = t.peekType("ID") ? t.pop().text : "";
              if (t.length) throw Error("leftover tokens");
              return new tu($, l, r, n, o, i, a, s);
            }
            let r = t.name;
            (0, n.assertArgument)(
              !r || ("string" == typeof r && r.match(F)),
              "invalid name",
              "obj.name",
              r
            );
            let i = t.indexed;
            null != i &&
              ((0, n.assertArgument)(
                e,
                "parameter cannot be indexed",
                "obj.indexed",
                t.indexed
              ),
              (i = !!i));
            let s = t.type,
              a = s.match(Y);
            if (a) {
              let e = parseInt(a[2] || "-1"),
                n = tu.from({ type: a[1], components: t.components });
              return new tu($, r || "", s, "array", i, null, e, n);
            }
            if ("tuple" === s || s.startsWith("tuple(") || s.startsWith("(")) {
              let e =
                null != t.components
                  ? t.components.map((t) => tu.from(t))
                  : null;
              return new tu($, r || "", s, "tuple", i, e, null, null);
            }
            return new tu($, r || "", (s = X(t.type)), s, i, null, null, null);
          }
          static isParamType(t) {
            return t && t[tt] === te;
          }
          constructor(t, e, i, s, a, o, l, u) {
            if (
              ((0, r._)(this, tl),
              (0, A._)(this, "name", void 0),
              (0, A._)(this, "type", void 0),
              (0, A._)(this, "baseType", void 0),
              (0, A._)(this, "indexed", void 0),
              (0, A._)(this, "components", void 0),
              (0, A._)(this, "arrayLength", void 0),
              (0, A._)(this, "arrayChildren", void 0),
              (0, n.assertPrivate)(t, $, "ParamType"),
              Object.defineProperty(this, tt, { value: te }),
              o && (o = Object.freeze(o.slice())),
              "array" === s)
            ) {
              if (null == l || null == u) throw Error("");
            } else if (null != l || null != u) throw Error("");
            if ("tuple" === s) {
              if (null == o) throw Error("");
            } else if (null != o) throw Error("");
            (0, w.defineProperties)(this, {
              name: e,
              type: i,
              baseType: s,
              indexed: a,
              components: o,
              arrayLength: l,
              arrayChildren: u,
            });
          }
        }
        function tc(t, r, n, i) {
          var s;
          if (this.isArray()) {
            if (!Array.isArray(r)) throw Error("invalid array value");
            if (-1 !== this.arrayLength && r.length !== this.arrayLength)
              throw Error("array is wrong length");
            let s = this.arrayChildren,
              a = r.slice();
            a.forEach((r, i) => {
              (0, e._)(s, tl, tc).call(s, t, r, n, (t) => {
                a[i] = t;
              });
            }),
              i(a);
            return;
          }
          if (this.isTuple()) {
            let a,
              o = this.components;
            if (Array.isArray(r)) a = r.slice();
            else {
              if (null == r || "object" != typeof r)
                throw Error("invalid tuple value");
              a = o.map((t) => {
                if (!t.name)
                  throw Error(
                    "cannot use object value with unnamed components"
                  );
                if (!(t.name in r))
                  throw Error("missing value for component ".concat(t.name));
                return r[t.name];
              });
            }
            if (a.length !== this.components.length)
              throw Error("array is wrong length");
            a.forEach((r, i) => {
              (0, e._)((s = o[i]), tl, tc).call(s, t, r, n, (t) => {
                a[i] = t;
              });
            }),
              i(a);
            return;
          }
          let a = n(this.type, r);
          a.then
            ? t.push(
                (async function () {
                  i(await a);
                })()
              )
            : i(a);
        }
        class th {
          static from(t) {
            if ("string" == typeof t) {
              try {
                th.from(JSON.parse(t));
              } catch (t) {}
              return th.from(z(t));
            }
            if (t instanceof H)
              switch (t.peekKeyword(N)) {
                case "constructor":
                  return tm.from(t);
                case "error":
                  return tg.from(t);
                case "event":
                  return tp.from(t);
                case "fallback":
                case "receive":
                  return ty.from(t);
                case "function":
                  return tA.from(t);
                case "struct":
                  return tw.from(t);
              }
            else if ("object" == typeof t) {
              switch (t.type) {
                case "constructor":
                  return tm.from(t);
                case "error":
                  return tg.from(t);
                case "event":
                  return tp.from(t);
                case "fallback":
                case "receive":
                  return ty.from(t);
                case "function":
                  return tA.from(t);
                case "struct":
                  return tw.from(t);
              }
              (0, n.assert)(
                !1,
                "unsupported type: ".concat(t.type),
                "UNSUPPORTED_OPERATION",
                { operation: "Fragment.from" }
              );
            }
            (0, n.assertArgument)(!1, "unsupported frgament object", "obj", t);
          }
          static isConstructor(t) {
            return tm.isFragment(t);
          }
          static isError(t) {
            return tg.isFragment(t);
          }
          static isEvent(t) {
            return tp.isFragment(t);
          }
          static isFunction(t) {
            return tA.isFragment(t);
          }
          static isStruct(t) {
            return tw.isFragment(t);
          }
          constructor(t, e, r) {
            (0, A._)(this, "type", void 0),
              (0, A._)(this, "inputs", void 0),
              (0, n.assertPrivate)(t, $, "Fragment"),
              (r = Object.freeze(r.slice())),
              (0, w.defineProperties)(this, { type: e, inputs: r });
          }
        }
        class tf extends th {
          constructor(t, e, r, i) {
            super(t, e, i),
              (0, A._)(this, "name", void 0),
              (0, n.assertArgument)(
                "string" == typeof r && r.match(F),
                "invalid identifier",
                "name",
                r
              ),
              (i = Object.freeze(i.slice())),
              (0, w.defineProperties)(this, { name: r });
          }
        }
        function td(t, e) {
          return (
            "(" +
            e.map((e) => e.format(t)).join("full" === t ? ", " : ",") +
            ")"
          );
        }
        class tg extends tf {
          get selector() {
            return (0, E.id)(this.format("sighash")).substring(0, 10);
          }
          format(t) {
            if ((null == t && (t = "sighash"), "json" === t))
              return JSON.stringify({
                type: "error",
                name: this.name,
                inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
              });
            let e = [];
            return (
              "sighash" !== t && e.push("error"),
              e.push(this.name + td(t, this.inputs)),
              e.join(" ")
            );
          }
          static from(t) {
            if (tg.isFragment(t)) return t;
            if ("string" == typeof t) return tg.from(z(t));
            if (t instanceof H) {
              let e = V("error", t),
                r = K(t);
              return Z(t), new tg($, e, r);
            }
            return new tg($, t.name, t.inputs ? t.inputs.map(tu.from) : []);
          }
          static isFragment(t) {
            return t && t[tt] === tr;
          }
          constructor(t, e, r) {
            super(t, "error", e, r),
              Object.defineProperty(this, tt, { value: tr });
          }
        }
        class tp extends tf {
          get topicHash() {
            return (0, E.id)(this.format("sighash"));
          }
          format(t) {
            if ((null == t && (t = "sighash"), "json" === t))
              return JSON.stringify({
                type: "event",
                anonymous: this.anonymous,
                name: this.name,
                inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
              });
            let e = [];
            return (
              "sighash" !== t && e.push("event"),
              e.push(this.name + td(t, this.inputs)),
              "sighash" !== t && this.anonymous && e.push("anonymous"),
              e.join(" ")
            );
          }
          static getTopicHash(t, e) {
            return new tp($, t, (e = (e || []).map((t) => tu.from(t))), !1)
              .topicHash;
          }
          static from(t) {
            if (tp.isFragment(t)) return t;
            if ("string" == typeof t)
              try {
                return tp.from(z(t));
              } catch (e) {
                (0, n.assertArgument)(!1, "invalid event fragment", "obj", t);
              }
            else if (t instanceof H) {
              let e = V("event", t),
                r = K(t, !0),
                n = !!j(t, _(["anonymous"])).has("anonymous");
              return Z(t), new tp($, e, r, n);
            }
            return new tp(
              $,
              t.name,
              t.inputs ? t.inputs.map((t) => tu.from(t, !0)) : [],
              !!t.anonymous
            );
          }
          static isFragment(t) {
            return t && t[tt] === tn;
          }
          constructor(t, e, r, n) {
            super(t, "event", e, r),
              (0, A._)(this, "anonymous", void 0),
              Object.defineProperty(this, tt, { value: tn }),
              (0, w.defineProperties)(this, { anonymous: n });
          }
        }
        class tm extends th {
          format(t) {
            if (
              ((0, n.assert)(
                null != t && "sighash" !== t,
                "cannot format a constructor for sighash",
                "UNSUPPORTED_OPERATION",
                { operation: "format(sighash)" }
              ),
              "json" === t)
            )
              return JSON.stringify({
                type: "constructor",
                stateMutability: this.payable ? "payable" : "undefined",
                payable: this.payable,
                gas: null != this.gas ? this.gas : void 0,
                inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
              });
            let e = ["constructor".concat(td(t, this.inputs))];
            return (
              this.payable && e.push("payable"),
              null != this.gas && e.push("@".concat(this.gas.toString())),
              e.join(" ")
            );
          }
          static from(t) {
            if (tm.isFragment(t)) return t;
            if ("string" == typeof t)
              try {
                return tm.from(z(t));
              } catch (e) {
                (0, n.assertArgument)(
                  !1,
                  "invalid constuctor fragment",
                  "obj",
                  t
                );
              }
            else if (t instanceof H) {
              j(t, _(["constructor"]));
              let e = K(t),
                r = !!j(t, x).has("payable"),
                n = q(t);
              return Z(t), new tm($, "constructor", e, r, n);
            }
            return new tm(
              $,
              "constructor",
              t.inputs ? t.inputs.map(tu.from) : [],
              !!t.payable,
              null != t.gas ? t.gas : null
            );
          }
          static isFragment(t) {
            return t && t[tt] === ti;
          }
          constructor(t, e, r, n, i) {
            super(t, e, r),
              (0, A._)(this, "payable", void 0),
              (0, A._)(this, "gas", void 0),
              Object.defineProperty(this, tt, { value: ti }),
              (0, w.defineProperties)(this, { payable: n, gas: i });
          }
        }
        class ty extends th {
          format(t) {
            let e = 0 === this.inputs.length ? "receive" : "fallback";
            return "json" === t
              ? JSON.stringify({
                  type: e,
                  stateMutability: this.payable ? "payable" : "nonpayable",
                })
              : "".concat(e, "()").concat(this.payable ? " payable" : "");
          }
          static from(t) {
            if (ty.isFragment(t)) return t;
            if ("string" == typeof t)
              try {
                return ty.from(z(t));
              } catch (e) {
                (0, n.assertArgument)(
                  !1,
                  "invalid fallback fragment",
                  "obj",
                  t
                );
              }
            else if (t instanceof H) {
              let e = t.toString(),
                r = t.peekKeyword(_(["fallback", "receive"]));
              if (
                ((0, n.assertArgument)(
                  r,
                  "type must be fallback or receive",
                  "obj",
                  e
                ),
                "receive" === t.popKeyword(_(["fallback", "receive"])))
              ) {
                let e = K(t);
                return (
                  (0, n.assertArgument)(
                    0 === e.length,
                    "receive cannot have arguments",
                    "obj.inputs",
                    e
                  ),
                  j(t, _(["payable"])),
                  Z(t),
                  new ty($, [], !0)
                );
              }
              let i = K(t);
              i.length
                ? (0, n.assertArgument)(
                    1 === i.length && "bytes" === i[0].type,
                    "invalid fallback inputs",
                    "obj.inputs",
                    i.map((t) => t.format("minimal")).join(", ")
                  )
                : (i = [tu.from("bytes")]);
              let s = J(t);
              if (
                ((0, n.assertArgument)(
                  "nonpayable" === s || "payable" === s,
                  "fallback cannot be constants",
                  "obj.stateMutability",
                  s
                ),
                j(t, _(["returns"])).has("returns"))
              ) {
                let e = K(t);
                (0, n.assertArgument)(
                  1 === e.length && "bytes" === e[0].type,
                  "invalid fallback outputs",
                  "obj.outputs",
                  e.map((t) => t.format("minimal")).join(", ")
                );
              }
              return Z(t), new ty($, i, "payable" === s);
            }
            return "receive" === t.type
              ? new ty($, [], !0)
              : "fallback" === t.type
              ? new ty($, [tu.from("bytes")], "payable" === t.stateMutability)
              : void (0, n.assertArgument)(
                  !1,
                  "invalid fallback description",
                  "obj",
                  t
                );
          }
          static isFragment(t) {
            return t && t[tt] === ts;
          }
          constructor(t, e, r) {
            super(t, "fallback", e),
              (0, A._)(this, "payable", void 0),
              Object.defineProperty(this, tt, { value: ts }),
              (0, w.defineProperties)(this, { payable: r });
          }
        }
        class tA extends tf {
          get selector() {
            return (0, E.id)(this.format("sighash")).substring(0, 10);
          }
          format(t) {
            if ((null == t && (t = "sighash"), "json" === t))
              return JSON.stringify({
                type: "function",
                name: this.name,
                constant: this.constant,
                stateMutability:
                  "nonpayable" !== this.stateMutability
                    ? this.stateMutability
                    : void 0,
                payable: this.payable,
                gas: null != this.gas ? this.gas : void 0,
                inputs: this.inputs.map((e) => JSON.parse(e.format(t))),
                outputs: this.outputs.map((e) => JSON.parse(e.format(t))),
              });
            let e = [];
            return (
              "sighash" !== t && e.push("function"),
              e.push(this.name + td(t, this.inputs)),
              "sighash" !== t &&
                ("nonpayable" !== this.stateMutability &&
                  e.push(this.stateMutability),
                this.outputs &&
                  this.outputs.length &&
                  (e.push("returns"), e.push(td(t, this.outputs))),
                null != this.gas && e.push("@".concat(this.gas.toString()))),
              e.join(" ")
            );
          }
          static getSelector(t, e) {
            return new tA(
              $,
              t,
              "view",
              (e = (e || []).map((t) => tu.from(t))),
              [],
              null
            ).selector;
          }
          static from(t) {
            if (tA.isFragment(t)) return t;
            if ("string" == typeof t)
              try {
                return tA.from(z(t));
              } catch (e) {
                (0, n.assertArgument)(
                  !1,
                  "invalid function fragment",
                  "obj",
                  t
                );
              }
            else if (t instanceof H) {
              let e = V("function", t),
                r = K(t),
                n = J(t),
                i = [];
              j(t, _(["returns"])).has("returns") && (i = K(t));
              let s = q(t);
              return Z(t), new tA($, e, n, r, i, s);
            }
            let e = t.stateMutability;
            return (
              null == e &&
                ((e = "payable"),
                "boolean" == typeof t.constant
                  ? ((e = "view"),
                    !t.constant &&
                      ((e = "payable"),
                      "boolean" != typeof t.payable ||
                        t.payable ||
                        (e = "nonpayable")))
                  : "boolean" != typeof t.payable ||
                    t.payable ||
                    (e = "nonpayable")),
              new tA(
                $,
                t.name,
                e,
                t.inputs ? t.inputs.map(tu.from) : [],
                t.outputs ? t.outputs.map(tu.from) : [],
                null != t.gas ? t.gas : null
              )
            );
          }
          static isFragment(t) {
            return t && t[tt] === ta;
          }
          constructor(t, e, r, n, i, s) {
            super(t, "function", e, n),
              (0, A._)(this, "constant", void 0),
              (0, A._)(this, "outputs", void 0),
              (0, A._)(this, "stateMutability", void 0),
              (0, A._)(this, "payable", void 0),
              (0, A._)(this, "gas", void 0),
              Object.defineProperty(this, tt, { value: ta }),
              (i = Object.freeze(i.slice())),
              (0, w.defineProperties)(this, {
                constant: "view" === r || "pure" === r,
                gas: s,
                outputs: i,
                payable: "payable" === r,
                stateMutability: r,
              });
          }
        }
        class tw extends tf {
          format() {
            throw Error("@TODO");
          }
          static from(t) {
            if ("string" == typeof t)
              try {
                return tw.from(z(t));
              } catch (e) {
                (0, n.assertArgument)(!1, "invalid struct fragment", "obj", t);
              }
            else if (t instanceof H) {
              let e = V("struct", t),
                r = K(t);
              return Z(t), new tw($, e, r);
            }
            return new tw($, t.name, t.inputs ? t.inputs.map(tu.from) : []);
          }
          static isFragment(t) {
            return t && t[tt] === to;
          }
          constructor(t, e, r) {
            super(t, "struct", e, r),
              Object.defineProperty(this, tt, { value: to });
          }
        }
        var tb = t.i(978895),
          tv = t.i(713514);
        let tE = new Map();
        tE.set(0, "GENERIC_PANIC"),
          tE.set(1, "ASSERT_FALSE"),
          tE.set(17, "OVERFLOW"),
          tE.set(18, "DIVIDE_BY_ZERO"),
          tE.set(33, "ENUM_RANGE_ERROR"),
          tE.set(34, "BAD_STORAGE_DATA"),
          tE.set(49, "STACK_UNDERFLOW"),
          tE.set(50, "ARRAY_RANGE_ERROR"),
          tE.set(65, "OUT_OF_MEMORY"),
          tE.set(81, "UNINITIALIZED_FUNCTION_CALL");
        let t_ = new RegExp(/^bytes([0-9]*)$/),
          tx = new RegExp(/^(u?int)([0-9]*)$/),
          tB = null,
          tk = 1024;
        var tP = new WeakSet();
        class tN {
          getDefaultValue(t) {
            let r = t.map((t) => (0, e._)(this, tP, tI).call(this, tu.from(t)));
            return new d.TupleCoder(r, "_").defaultValue();
          }
          encode(t, r) {
            (0, n.assertArgumentCount)(
              r.length,
              t.length,
              "types/values length mismatch"
            );
            let s = t.map((t) => (0, e._)(this, tP, tI).call(this, tu.from(t))),
              a = new d.TupleCoder(s, "_"),
              o = new i.Writer();
            return a.encode(o, r), o.data;
          }
          decode(t, r, n) {
            let s = t.map((t) => (0, e._)(this, tP, tI).call(this, tu.from(t)));
            return new d.TupleCoder(s, "_").decode(new i.Reader(r, n, tk));
          }
          static _setDefaultMaxInflation(t) {
            (0, n.assertArgument)(
              "number" == typeof t && Number.isInteger(t),
              "invalid defaultMaxInflation factor",
              "value",
              t
            ),
              (tk = t);
          }
          static defaultAbiCoder() {
            return null == tB && (tB = new tN()), tB;
          }
          static getBuiltinCallException(t, e, r) {
            return (function (t, e, r, i) {
              let s = "missing revert data",
                a = null,
                o = null;
              if (r) {
                s = "execution reverted";
                let t = (0, tv.getBytes)(r);
                if (((r = (0, tv.hexlify)(r)), 0 === t.length))
                  (s += " (no data present; likely require(false) occurred"),
                    (a = "require(false)");
                else if (t.length % 32 != 4)
                  s += " (could not decode reason; invalid data length)";
                else if ("0x08c379a0" === (0, tv.hexlify)(t.slice(0, 4)))
                  try {
                    (a = i.decode(["string"], t.slice(4))[0]),
                      (o = {
                        signature: "Error(string)",
                        name: "Error",
                        args: [a],
                      }),
                      (s += ": ".concat(JSON.stringify(a)));
                  } catch (t) {
                    s += " (could not decode reason; invalid string data)";
                  }
                else if ("0x4e487b71" === (0, tv.hexlify)(t.slice(0, 4)))
                  try {
                    let e = Number(i.decode(["uint256"], t.slice(4))[0]);
                    (o = {
                      signature: "Panic(uint256)",
                      name: "Panic",
                      args: [e],
                    }),
                      (a = "Panic due to "
                        .concat(tE.get(e) || "UNKNOWN", "(")
                        .concat(e, ")")),
                      (s += ": ".concat(a));
                  } catch (t) {
                    s += " (could not decode panic code)";
                  }
                else s += " (unknown custom error)";
              }
              let l = {
                to: e.to ? (0, tb.getAddress)(e.to) : null,
                data: e.data || "0x",
              };
              return (
                e.from && (l.from = (0, tb.getAddress)(e.from)),
                (0, n.makeError)(s, "CALL_EXCEPTION", {
                  action: t,
                  data: r,
                  reason: a,
                  transaction: l,
                  invocation: null,
                  revert: o,
                })
              );
            })(t, e, r, tN.defaultAbiCoder());
          }
          constructor() {
            (0, r._)(this, tP);
          }
        }
        function tI(t) {
          if (t.isArray())
            return new a.ArrayCoder(
              (0, e._)(this, tP, tI).call(this, t.arrayChildren),
              t.arrayLength,
              t.name
            );
          if (t.isTuple())
            return new d.TupleCoder(
              t.components.map((t) => (0, e._)(this, tP, tI).call(this, t)),
              t.name
            );
          switch (t.baseType) {
            case "address":
              return new s.AddressCoder(t.name);
            case "bool":
              return new o.BooleanCoder(t.name);
            case "string":
              return new f.StringCoder(t.name);
            case "bytes":
              return new l.BytesCoder(t.name);
            case "":
              return new c.NullCoder(t.name);
          }
          let r = t.type.match(tx);
          if (r) {
            let e = parseInt(r[2] || "256");
            return (
              (0, n.assertArgument)(
                0 !== e && e <= 256 && e % 8 == 0,
                "invalid " + r[1] + " bit length",
                "param",
                t
              ),
              new h.NumberCoder(e / 8, "int" === r[1], t.name)
            );
          }
          if ((r = t.type.match(t_))) {
            let e = parseInt(r[1]);
            return (
              (0, n.assertArgument)(
                0 !== e && e <= 32,
                "invalid bytes length",
                "param",
                t
              ),
              new u.FixedBytesCoder(e, t.name)
            );
          }
          (0, n.assertArgument)(!1, "invalid type", "type", t.type);
        }
      },
      [704996],
    ],
    104787: (t) => {
      "use strict";
      t.s({
        isAddress: () => i,
        isAddressable: () => n,
        resolveAddress: () => a,
      });
      var e = t.i(13517),
        r = t.i(978895);
      function n(t) {
        return t && "function" == typeof t.getAddress;
      }
      function i(t) {
        try {
          return (0, r.getAddress)(t), !0;
        } catch (t) {}
        return !1;
      }
      async function s(t, n) {
        let i = await n;
        return (
          (null == i || "0x0000000000000000000000000000000000000000" === i) &&
            ((0, e.assert)(
              "string" != typeof t,
              "unconfigured name",
              "UNCONFIGURED_NAME",
              { value: t }
            ),
            (0, e.assertArgument)(
              !1,
              "invalid AddressLike value; did not resolve to a value address",
              "target",
              t
            )),
          (0, r.getAddress)(i)
        );
      }
      function a(t, i) {
        return "string" == typeof t
          ? t.match(/^0x[0-9a-f]{40}$/i)
            ? (0, r.getAddress)(t)
            : ((0, e.assert)(
                null != i,
                "ENS resolution requires a provider",
                "UNSUPPORTED_OPERATION",
                { operation: "resolveName" }
              ),
              s(t, i.resolveName(t)))
          : n(t)
          ? s(t, t.getAddress())
          : t && "function" == typeof t.then
          ? s(t, t)
          : void (0, e.assertArgument)(
              !1,
              "unsupported addressable value",
              "target",
              t
            );
      }
    },
    239141: [
      (t) => {
        "use strict";
        t.s({ sha256: () => c }, 239141), t.s({ SHA2: () => n }, 966335);
        var e = t.i(951562),
          r = t.i(825423);
        class n extends r.Hash {
          update(t) {
            (0, e.exists)(this);
            let { view: n, buffer: i, blockLen: s } = this,
              a = (t = (0, r.toBytes)(t)).length;
            for (let e = 0; e < a; ) {
              let o = Math.min(s - this.pos, a - e);
              if (o === s) {
                let n = (0, r.createView)(t);
                for (; s <= a - e; e += s) this.process(n, e);
                continue;
              }
              i.set(t.subarray(e, e + o), this.pos),
                (this.pos += o),
                (e += o),
                this.pos === s && (this.process(n, 0), (this.pos = 0));
            }
            return (this.length += t.length), this.roundClean(), this;
          }
          digestInto(t) {
            (0, e.exists)(this), (0, e.output)(t, this), (this.finished = !0);
            let { buffer: n, view: i, blockLen: s, isLE: a } = this,
              { pos: o } = this;
            (n[o++] = 128),
              this.buffer.subarray(o).fill(0),
              this.padOffset > s - o && (this.process(i, 0), (o = 0));
            for (let t = o; t < s; t++) n[t] = 0;
            !(function (t, e, r, n) {
              if ("function" == typeof t.setBigUint64)
                return t.setBigUint64(e, r, n);
              let i = BigInt(32),
                s = BigInt(0xffffffff),
                a = Number((r >> i) & s),
                o = Number(r & s),
                l = 4 * !!n,
                u = 4 * !n;
              t.setUint32(e + l, a, n), t.setUint32(e + u, o, n);
            })(i, s - 8, BigInt(8 * this.length), a),
              this.process(i, 0);
            let l = (0, r.createView)(t),
              u = this.outputLen;
            if (u % 4)
              throw Error("_sha2: outputLen should be aligned to 32bit");
            let c = u / 4,
              h = this.get();
            if (c > h.length) throw Error("_sha2: outputLen bigger than state");
            for (let t = 0; t < c; t++) l.setUint32(4 * t, h[t], a);
          }
          digest() {
            let { buffer: t, outputLen: e } = this;
            this.digestInto(t);
            let r = t.slice(0, e);
            return this.destroy(), r;
          }
          _cloneInto(t) {
            t || (t = new this.constructor()), t.set(...this.get());
            let {
              blockLen: e,
              buffer: r,
              length: n,
              finished: i,
              destroyed: s,
              pos: a,
            } = this;
            return (
              (t.length = n),
              (t.pos = a),
              (t.finished = i),
              (t.destroyed = s),
              n % e && t.buffer.set(r),
              t
            );
          }
          constructor(t, e, n, i) {
            super(),
              (this.blockLen = t),
              (this.outputLen = e),
              (this.padOffset = n),
              (this.isLE = i),
              (this.finished = !1),
              (this.length = 0),
              (this.pos = 0),
              (this.destroyed = !1),
              (this.buffer = new Uint8Array(t)),
              (this.view = (0, r.createView)(this.buffer));
          }
        }
        let i = (t, e, r) => (t & e) ^ (~t & r),
          s = (t, e, r) => (t & e) ^ (t & r) ^ (e & r),
          a = new Uint32Array([
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
          o = new Uint32Array([
            0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f,
            0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
          ]),
          l = new Uint32Array(64);
        class u extends n {
          get() {
            let { A: t, B: e, C: r, D: n, E: i, F: s, G: a, H: o } = this;
            return [t, e, r, n, i, s, a, o];
          }
          set(t, e, r, n, i, s, a, o) {
            (this.A = 0 | t),
              (this.B = 0 | e),
              (this.C = 0 | r),
              (this.D = 0 | n),
              (this.E = 0 | i),
              (this.F = 0 | s),
              (this.G = 0 | a),
              (this.H = 0 | o);
          }
          process(t, e) {
            for (let r = 0; r < 16; r++, e += 4) l[r] = t.getUint32(e, !1);
            for (let t = 16; t < 64; t++) {
              let e = l[t - 15],
                n = l[t - 2],
                i = (0, r.rotr)(e, 7) ^ (0, r.rotr)(e, 18) ^ (e >>> 3),
                s = (0, r.rotr)(n, 17) ^ (0, r.rotr)(n, 19) ^ (n >>> 10);
              l[t] = (s + l[t - 7] + i + l[t - 16]) | 0;
            }
            let { A: n, B: o, C: u, D: c, E: h, F: f, G: d, H: g } = this;
            for (let t = 0; t < 64; t++) {
              let e =
                  (g +
                    ((0, r.rotr)(h, 6) ^
                      (0, r.rotr)(h, 11) ^
                      (0, r.rotr)(h, 25)) +
                    i(h, f, d) +
                    a[t] +
                    l[t]) |
                  0,
                p =
                  (((0, r.rotr)(n, 2) ^
                    (0, r.rotr)(n, 13) ^
                    (0, r.rotr)(n, 22)) +
                    s(n, o, u)) |
                  0;
              (g = d),
                (d = f),
                (f = h),
                (h = (c + e) | 0),
                (c = u),
                (u = o),
                (o = n),
                (n = (e + p) | 0);
            }
            (n = (n + this.A) | 0),
              (o = (o + this.B) | 0),
              (u = (u + this.C) | 0),
              (c = (c + this.D) | 0),
              (h = (h + this.E) | 0),
              (f = (f + this.F) | 0),
              (d = (d + this.G) | 0),
              (g = (g + this.H) | 0),
              this.set(n, o, u, c, h, f, d, g);
          }
          roundClean() {
            l.fill(0);
          }
          destroy() {
            this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
          }
          constructor() {
            super(64, 32, 8, !1),
              (this.A = 0 | o[0]),
              (this.B = 0 | o[1]),
              (this.C = 0 | o[2]),
              (this.D = 0 | o[3]),
              (this.E = 0 | o[4]),
              (this.F = 0 | o[5]),
              (this.G = 0 | o[6]),
              (this.H = 0 | o[7]);
          }
        }
        let c = (0, r.wrapConstructor)(() => new u());
      },
      [966335],
    ],
    918712: [
      (t) => {
        "use strict";
        t.s(
          {
            Field: () => H,
            getMinHashLength: () => z,
            invert: () => D,
            mapHashToField: () => W,
            mod: () => U,
            nLength: () => G,
            pow2: () => F,
            validateField: () => M,
          },
          918712
        ),
          t.s(
            {
              bitGet: () => w,
              bitLen: () => A,
              bitMask: () => E,
              bitSet: () => b,
              bytesToHex: () => s,
              bytesToNumberBE: () => u,
              bytesToNumberLE: () => c,
              concatBytes: () => p,
              createHmacDrbg: () => B,
              ensureBytes: () => g,
              equalBytes: () => m,
              hexToBytes: () => l,
              hexToNumber: () => o,
              numberToBytesBE: () => h,
              numberToBytesLE: () => f,
              numberToHexUnpadded: () => a,
              numberToVarBytesBE: () => d,
              utf8ToBytes: () => y,
              validateObject: () => P,
            },
            548988
          );
        let e = BigInt(0),
          r = BigInt(1),
          n = BigInt(2),
          i = Array.from({ length: 256 }, (t, e) =>
            e.toString(16).padStart(2, "0")
          );
        function s(t) {
          if (!(t instanceof Uint8Array)) throw Error("Uint8Array expected");
          let e = "";
          for (let r = 0; r < t.length; r++) e += i[t[r]];
          return e;
        }
        function a(t) {
          let e = t.toString(16);
          return 1 & e.length ? "0".concat(e) : e;
        }
        function o(t) {
          if ("string" != typeof t)
            throw Error("hex string expected, got " + typeof t);
          return BigInt("" === t ? "0" : "0x".concat(t));
        }
        function l(t) {
          if ("string" != typeof t)
            throw Error("hex string expected, got " + typeof t);
          let e = t.length;
          if (e % 2)
            throw Error(
              "padded hex string expected, got unpadded hex of length " + e
            );
          let r = new Uint8Array(e / 2);
          for (let e = 0; e < r.length; e++) {
            let n = 2 * e,
              i = Number.parseInt(t.slice(n, n + 2), 16);
            if (Number.isNaN(i) || i < 0) throw Error("Invalid byte sequence");
            r[e] = i;
          }
          return r;
        }
        function u(t) {
          return o(s(t));
        }
        function c(t) {
          if (!(t instanceof Uint8Array)) throw Error("Uint8Array expected");
          return o(s(Uint8Array.from(t).reverse()));
        }
        function h(t, e) {
          return l(t.toString(16).padStart(2 * e, "0"));
        }
        function f(t, e) {
          return h(t, e).reverse();
        }
        function d(t) {
          return l(a(t));
        }
        function g(t, e, r) {
          let n;
          if ("string" == typeof e)
            try {
              n = l(e);
            } catch (r) {
              throw Error(
                ""
                  .concat(t, ' must be valid hex string, got "')
                  .concat(e, '". Cause: ')
                  .concat(r)
              );
            }
          else if (e instanceof Uint8Array) n = Uint8Array.from(e);
          else throw Error("".concat(t, " must be hex string or Uint8Array"));
          let i = n.length;
          if ("number" == typeof r && i !== r)
            throw Error(
              "".concat(t, " expected ").concat(r, " bytes, got ").concat(i)
            );
          return n;
        }
        function p() {
          for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          let n = new Uint8Array(e.reduce((t, e) => t + e.length, 0)),
            i = 0;
          return (
            e.forEach((t) => {
              if (!(t instanceof Uint8Array))
                throw Error("Uint8Array expected");
              n.set(t, i), (i += t.length);
            }),
            n
          );
        }
        function m(t, e) {
          if (t.length !== e.length) return !1;
          for (let r = 0; r < t.length; r++) if (t[r] !== e[r]) return !1;
          return !0;
        }
        function y(t) {
          if ("string" != typeof t)
            throw Error("utf8ToBytes expected string, got ".concat(typeof t));
          return new Uint8Array(new TextEncoder().encode(t));
        }
        function A(t) {
          let n;
          for (n = 0; t > e; t >>= r, n += 1);
          return n;
        }
        function w(t, e) {
          return (t >> BigInt(e)) & r;
        }
        let b = (t, n, i) => t | ((i ? r : e) << BigInt(n)),
          E = (t) => (n << BigInt(t - 1)) - r,
          _ = (t) => new Uint8Array(t),
          x = (t) => Uint8Array.from(t);
        function B(t, e, r) {
          if ("number" != typeof t || t < 2)
            throw Error("hashLen must be a number");
          if ("number" != typeof e || e < 2)
            throw Error("qByteLen must be a number");
          if ("function" != typeof r) throw Error("hmacFn must be a function");
          let n = _(t),
            i = _(t),
            s = 0,
            a = () => {
              n.fill(1), i.fill(0), (s = 0);
            },
            o = function () {
              for (var t = arguments.length, e = Array(t), s = 0; s < t; s++)
                e[s] = arguments[s];
              return r(i, n, ...e);
            },
            l = function () {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : _();
              (i = o(x([0]), t)),
                (n = o()),
                0 !== t.length && ((i = o(x([1]), t)), (n = o()));
            },
            u = () => {
              if (s++ >= 1e3) throw Error("drbg: tried 1000 values");
              let t = 0,
                r = [];
              for (; t < e; ) {
                let e = (n = o()).slice();
                r.push(e), (t += n.length);
              }
              return p(...r);
            };
          return (t, e) => {
            let r;
            for (a(), l(t); !(r = e(u())); ) l();
            return a(), r;
          };
        }
        let k = {
          bigint: (t) => "bigint" == typeof t,
          function: (t) => "function" == typeof t,
          boolean: (t) => "boolean" == typeof t,
          string: (t) => "string" == typeof t,
          stringOrUint8Array: (t) =>
            "string" == typeof t || t instanceof Uint8Array,
          isSafeInteger: (t) => Number.isSafeInteger(t),
          array: (t) => Array.isArray(t),
          field: (t, e) => e.Fp.isValid(t),
          hash: (t) =>
            "function" == typeof t && Number.isSafeInteger(t.outputLen),
        };
        function P(t, e) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            n = (e, r, n) => {
              let i = k[r];
              if ("function" != typeof i)
                throw Error(
                  'Invalid validator "'.concat(r, '", expected function')
                );
              let s = t[e];
              if ((!n || void 0 !== s) && !i(s, t))
                throw Error(
                  "Invalid param "
                    .concat(String(e), "=")
                    .concat(s, " (")
                    .concat(typeof s, "), expected ")
                    .concat(r)
                );
            };
          for (let [t, r] of Object.entries(e)) n(t, r, !1);
          for (let [t, e] of Object.entries(r)) n(t, e, !0);
          return t;
        }
        let N = BigInt(0),
          I = BigInt(1),
          C = BigInt(2),
          O = BigInt(3),
          R = BigInt(4),
          T = BigInt(5),
          S = BigInt(8);
        function U(t, e) {
          let r = t % e;
          return r >= N ? r : e + r;
        }
        function F(t, e, r) {
          let n = t;
          for (; e-- > N; ) (n *= n), (n %= r);
          return n;
        }
        function D(t, e) {
          if (t === N || e <= N)
            throw Error(
              "invert: expected positive integers, got n="
                .concat(t, " mod=")
                .concat(e)
            );
          let r = U(t, e),
            n = e,
            i = N,
            s = I,
            a = I,
            o = N;
          for (; r !== N; ) {
            let t = n / r,
              e = n % r,
              l = i - a * t,
              u = s - o * t;
            (n = r), (r = e), (i = a), (s = o), (a = l), (o = u);
          }
          if (n !== I) throw Error("invert: does not exist");
          return U(i, e);
        }
        BigInt(9), BigInt(16);
        let L = [
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
        function M(t) {
          return P(
            t,
            L.reduce((t, e) => ((t[e] = "function"), t), {
              ORDER: "bigint",
              MASK: "bigint",
              BYTES: "isSafeInteger",
              BITS: "isSafeInteger",
            })
          );
        }
        function G(t, e) {
          let r = void 0 !== e ? e : t.toString(2).length,
            n = Math.ceil(r / 8);
          return { nBitLength: r, nByteLength: n };
        }
        function H(t, e) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          if (t <= N) throw Error("Expected Field ORDER > 0, got ".concat(t));
          let { nBitLength: i, nByteLength: s } = G(t, e);
          if (s > 2048)
            throw Error("Field lengths over 2048 bytes are not supported");
          let a = (function (t) {
              if (t % R === O) {
                let e = (t + I) / R;
                return function (t, r) {
                  let n = t.pow(r, e);
                  if (!t.eql(t.sqr(n), r))
                    throw Error("Cannot find square root");
                  return n;
                };
              }
              if (t % S === T) {
                let e = (t - T) / S;
                return function (t, r) {
                  let n = t.mul(r, C),
                    i = t.pow(n, e),
                    s = t.mul(r, i),
                    a = t.mul(t.mul(s, C), i),
                    o = t.mul(s, t.sub(a, t.ONE));
                  if (!t.eql(t.sqr(o), r))
                    throw Error("Cannot find square root");
                  return o;
                };
              }
              return (function (t) {
                let e,
                  r,
                  n,
                  i = (t - I) / C;
                for (e = t - I, r = 0; e % C === N; e /= C, r++);
                for (
                  n = C;
                  n < t &&
                  (function (t, e, r) {
                    if (r <= N || e < N)
                      throw Error("Expected power/modulo > 0");
                    if (r === I) return N;
                    let n = I;
                    for (; e > N; )
                      e & I && (n = (n * t) % r), (t = (t * t) % r), (e >>= I);
                    return n;
                  })(n, i, t) !==
                    t - I;
                  n++
                );
                if (1 === r) {
                  let e = (t + I) / R;
                  return function (t, r) {
                    let n = t.pow(r, e);
                    if (!t.eql(t.sqr(n), r))
                      throw Error("Cannot find square root");
                    return n;
                  };
                }
                let s = (e + I) / C;
                return function (t, a) {
                  if (t.pow(a, i) === t.neg(t.ONE))
                    throw Error("Cannot find square root");
                  let o = r,
                    l = t.pow(t.mul(t.ONE, n), e),
                    u = t.pow(a, s),
                    c = t.pow(a, e);
                  for (; !t.eql(c, t.ONE); ) {
                    if (t.eql(c, t.ZERO)) return t.ZERO;
                    let e = 1;
                    for (let r = t.sqr(c); e < o && !t.eql(r, t.ONE); e++)
                      r = t.sqr(r);
                    let r = t.pow(l, I << BigInt(o - e - 1));
                    (l = t.sqr(r)),
                      (u = t.mul(u, r)),
                      (c = t.mul(c, l)),
                      (o = e);
                  }
                  return u;
                };
              })(t);
            })(t),
            o = Object.freeze({
              ORDER: t,
              BITS: i,
              BYTES: s,
              MASK: E(i),
              ZERO: N,
              ONE: I,
              create: (e) => U(e, t),
              isValid: (e) => {
                if ("bigint" != typeof e)
                  throw Error(
                    "Invalid field element: expected bigint, got ".concat(
                      typeof e
                    )
                  );
                return N <= e && e < t;
              },
              is0: (t) => t === N,
              isOdd: (t) => (t & I) === I,
              neg: (e) => U(-e, t),
              eql: (t, e) => t === e,
              sqr: (e) => U(e * e, t),
              add: (e, r) => U(e + r, t),
              sub: (e, r) => U(e - r, t),
              mul: (e, r) => U(e * r, t),
              pow: (t, e) =>
                (function (t, e, r) {
                  if (r < N) throw Error("Expected power > 0");
                  if (r === N) return t.ONE;
                  if (r === I) return e;
                  let n = t.ONE,
                    i = e;
                  for (; r > N; )
                    r & I && (n = t.mul(n, i)), (i = t.sqr(i)), (r >>= I);
                  return n;
                })(o, t, e),
              div: (e, r) => U(e * D(r, t), t),
              sqrN: (t) => t * t,
              addN: (t, e) => t + e,
              subN: (t, e) => t - e,
              mulN: (t, e) => t * e,
              inv: (e) => D(e, t),
              sqrt: n.sqrt || ((t) => a(o, t)),
              invertBatch: (t) =>
                (function (t, e) {
                  let r = Array(e.length),
                    n = e.reduce(
                      (e, n, i) => (t.is0(n) ? e : ((r[i] = e), t.mul(e, n))),
                      t.ONE
                    ),
                    i = t.inv(n);
                  return (
                    e.reduceRight(
                      (e, n, i) =>
                        t.is0(n) ? e : ((r[i] = t.mul(e, r[i])), t.mul(e, n)),
                      i
                    ),
                    r
                  );
                })(o, t),
              cmov: (t, e, r) => (r ? e : t),
              toBytes: (t) => (r ? f(t, s) : h(t, s)),
              fromBytes: (t) => {
                if (t.length !== s)
                  throw Error(
                    "Fp.fromBytes: expected "
                      .concat(s, ", got ")
                      .concat(t.length)
                  );
                return r ? c(t) : u(t);
              },
            });
          return Object.freeze(o);
        }
        function Q(t) {
          if ("bigint" != typeof t) throw Error("field order must be bigint");
          return Math.ceil(t.toString(2).length / 8);
        }
        function z(t) {
          let e = Q(t);
          return e + Math.ceil(e / 2);
        }
        function W(t, e) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = t.length,
            i = Q(e),
            s = z(e);
          if (n < 16 || n < s || n > 1024)
            throw Error(
              "expected ".concat(s, "-1024 bytes of input, got ").concat(n)
            );
          let a = U(r ? u(t) : c(t), e - I) + I;
          return r ? f(a, i) : h(a, i);
        }
        t.s({ mapToCurveSimpleSWU: () => ti, weierstrass: () => tn }, 413538);
        var V = t.i(548988);
        let j = BigInt(0),
          J = BigInt(1);
        function K(t) {
          return (
            M(t.Fp),
            P(
              t,
              { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
              { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
            ),
            Object.freeze({
              ...G(t.n, t.nBitLength),
              ...t,
              ...{ p: t.Fp.ORDER },
            })
          );
        }
        let { bytesToNumberBE: q, hexToBytes: Z } = V,
          Y = {
            Err: class extends Error {
              constructor(t = "") {
                super(t);
              }
            },
            _parseInt(t) {
              let { Err: e } = Y;
              if (t.length < 2 || 2 !== t[0])
                throw new e("Invalid signature integer tag");
              let r = t[1],
                n = t.subarray(2, r + 2);
              if (!r || n.length !== r)
                throw new e("Invalid signature integer: wrong length");
              if (128 & n[0])
                throw new e("Invalid signature integer: negative");
              if (0 === n[0] && !(128 & n[1]))
                throw new e(
                  "Invalid signature integer: unnecessary leading zero"
                );
              return { d: q(n), l: t.subarray(r + 2) };
            },
            toSig(t) {
              let { Err: e } = Y,
                r = "string" == typeof t ? Z(t) : t;
              if (!(r instanceof Uint8Array)) throw Error("ui8a expected");
              let n = r.length;
              if (n < 2 || 48 != r[0]) throw new e("Invalid signature tag");
              if (r[1] !== n - 2)
                throw new e("Invalid signature: incorrect length");
              let { d: i, l: s } = Y._parseInt(r.subarray(2)),
                { d: a, l: o } = Y._parseInt(s);
              if (o.length)
                throw new e("Invalid signature: left bytes after parsing");
              return { r: i, s: a };
            },
            hexFromSig(t) {
              let e = (t) => (8 & Number.parseInt(t[0], 16) ? "00" + t : t),
                r = (t) => {
                  let e = t.toString(16);
                  return 1 & e.length ? "0".concat(e) : e;
                },
                n = e(r(t.s)),
                i = e(r(t.r)),
                s = n.length / 2,
                a = i.length / 2,
                o = r(s),
                l = r(a);
              return "30"
                .concat(r(a + s + 4), "02")
                .concat(l)
                .concat(i, "02")
                .concat(o)
                .concat(n);
            },
          },
          X = BigInt(0),
          $ = BigInt(1),
          tt = BigInt(2),
          te = BigInt(3),
          tr = BigInt(4);
        function tn(t) {
          let e = (function (t) {
              let e = K(t);
              return (
                V.validateObject(
                  e,
                  { hash: "hash", hmac: "function", randomBytes: "function" },
                  {
                    bits2int: "function",
                    bits2int_modN: "function",
                    lowS: "boolean",
                  }
                ),
                Object.freeze({ lowS: !0, ...e })
              );
            })(t),
            { Fp: r, n: n } = e,
            i = r.BYTES + 1,
            s = 2 * r.BYTES + 1;
          function a(t) {
            return U(t, n);
          }
          let {
              ProjectivePoint: o,
              normPrivateKeyToScalar: l,
              weierstrassEquation: u,
              isWithinCurveOrder: c,
            } = (function (t) {
              let e = (function (t) {
                  let e = K(t);
                  V.validateObject(
                    e,
                    { a: "field", b: "field" },
                    {
                      allowedPrivateKeyLengths: "array",
                      wrapPrivateKey: "boolean",
                      isTorsionFree: "function",
                      clearCofactor: "function",
                      allowInfinityPoint: "boolean",
                      fromBytes: "function",
                      toBytes: "function",
                    }
                  );
                  let { endo: r, Fp: n, a: i } = e;
                  if (r) {
                    if (!n.eql(i, n.ZERO))
                      throw Error(
                        "Endomorphism can only be defined for Koblitz curves that have a=0"
                      );
                    if (
                      "object" != typeof r ||
                      "bigint" != typeof r.beta ||
                      "function" != typeof r.splitScalar
                    )
                      throw Error(
                        "Expected endomorphism with beta: bigint and splitScalar: function"
                      );
                  }
                  return Object.freeze({ ...e });
                })(t),
                { Fp: r } = e,
                n =
                  e.toBytes ||
                  ((t, e, n) => {
                    let i = e.toAffine();
                    return V.concatBytes(
                      Uint8Array.from([4]),
                      r.toBytes(i.x),
                      r.toBytes(i.y)
                    );
                  }),
                i =
                  e.fromBytes ||
                  ((t) => {
                    let e = t.subarray(1);
                    return {
                      x: r.fromBytes(e.subarray(0, r.BYTES)),
                      y: r.fromBytes(e.subarray(r.BYTES, 2 * r.BYTES)),
                    };
                  });
              function s(t) {
                let { a: n, b: i } = e,
                  s = r.sqr(t),
                  a = r.mul(s, t);
                return r.add(r.add(a, r.mul(t, n)), i);
              }
              if (!r.eql(r.sqr(e.Gy), s(e.Gx)))
                throw Error("bad generator point: equation left != right");
              function a(t) {
                return "bigint" == typeof t && X < t && t < e.n;
              }
              function o(t) {
                if (!a(t))
                  throw Error("Expected valid bigint: 0 < bigint < curve.n");
              }
              function l(t) {
                let r,
                  {
                    allowedPrivateKeyLengths: n,
                    nByteLength: i,
                    wrapPrivateKey: s,
                    n: a,
                  } = e;
                if (n && "bigint" != typeof t) {
                  if (
                    (t instanceof Uint8Array && (t = V.bytesToHex(t)),
                    "string" != typeof t || !n.includes(t.length))
                  )
                    throw Error("Invalid key");
                  t = t.padStart(2 * i, "0");
                }
                try {
                  r =
                    "bigint" == typeof t
                      ? t
                      : V.bytesToNumberBE(g("private key", t, i));
                } catch (e) {
                  throw Error(
                    "private key must be "
                      .concat(i, " bytes, hex or bigint, not ")
                      .concat(typeof t)
                  );
                }
                return s && (r = U(r, a)), o(r), r;
              }
              let u = new Map();
              function c(t) {
                if (!(t instanceof h)) throw Error("ProjectivePoint expected");
              }
              class h {
                static fromAffine(t) {
                  let { x: e, y: n } = t || {};
                  if (!t || !r.isValid(e) || !r.isValid(n))
                    throw Error("invalid affine point");
                  if (t instanceof h)
                    throw Error("projective point not allowed");
                  let i = (t) => r.eql(t, r.ZERO);
                  return i(e) && i(n) ? h.ZERO : new h(e, n, r.ONE);
                }
                get x() {
                  return this.toAffine().x;
                }
                get y() {
                  return this.toAffine().y;
                }
                static normalizeZ(t) {
                  let e = r.invertBatch(t.map((t) => t.pz));
                  return t.map((t, r) => t.toAffine(e[r])).map(h.fromAffine);
                }
                static fromHex(t) {
                  let e = h.fromAffine(i(g("pointHex", t)));
                  return e.assertValidity(), e;
                }
                static fromPrivateKey(t) {
                  return h.BASE.multiply(l(t));
                }
                _setWindowSize(t) {
                  (this._WINDOW_SIZE = t), u.delete(this);
                }
                assertValidity() {
                  if (this.is0()) {
                    if (e.allowInfinityPoint && !r.is0(this.py)) return;
                    throw Error("bad point: ZERO");
                  }
                  let { x: t, y: n } = this.toAffine();
                  if (!r.isValid(t) || !r.isValid(n))
                    throw Error("bad point: x or y not FE");
                  let i = r.sqr(n),
                    a = s(t);
                  if (!r.eql(i, a))
                    throw Error("bad point: equation left != right");
                  if (!this.isTorsionFree())
                    throw Error("bad point: not in prime-order subgroup");
                }
                hasEvenY() {
                  let { y: t } = this.toAffine();
                  if (r.isOdd) return !r.isOdd(t);
                  throw Error("Field doesn't support isOdd");
                }
                equals(t) {
                  c(t);
                  let { px: e, py: n, pz: i } = this,
                    { px: s, py: a, pz: o } = t,
                    l = r.eql(r.mul(e, o), r.mul(s, i)),
                    u = r.eql(r.mul(n, o), r.mul(a, i));
                  return l && u;
                }
                negate() {
                  return new h(this.px, r.neg(this.py), this.pz);
                }
                double() {
                  let { a: t, b: n } = e,
                    i = r.mul(n, te),
                    { px: s, py: a, pz: o } = this,
                    l = r.ZERO,
                    u = r.ZERO,
                    c = r.ZERO,
                    f = r.mul(s, s),
                    d = r.mul(a, a),
                    g = r.mul(o, o),
                    p = r.mul(s, a);
                  return (
                    (p = r.add(p, p)),
                    (c = r.mul(s, o)),
                    (c = r.add(c, c)),
                    (l = r.mul(t, c)),
                    (u = r.mul(i, g)),
                    (u = r.add(l, u)),
                    (l = r.sub(d, u)),
                    (u = r.add(d, u)),
                    (u = r.mul(l, u)),
                    (l = r.mul(p, l)),
                    (c = r.mul(i, c)),
                    (g = r.mul(t, g)),
                    (p = r.sub(f, g)),
                    (p = r.mul(t, p)),
                    (p = r.add(p, c)),
                    (c = r.add(f, f)),
                    (f = r.add(c, f)),
                    (f = r.add(f, g)),
                    (f = r.mul(f, p)),
                    (u = r.add(u, f)),
                    (g = r.mul(a, o)),
                    (g = r.add(g, g)),
                    (f = r.mul(g, p)),
                    (l = r.sub(l, f)),
                    (c = r.mul(g, d)),
                    (c = r.add(c, c)),
                    new h(l, u, (c = r.add(c, c)))
                  );
                }
                add(t) {
                  c(t);
                  let { px: n, py: i, pz: s } = this,
                    { px: a, py: o, pz: l } = t,
                    u = r.ZERO,
                    f = r.ZERO,
                    d = r.ZERO,
                    g = e.a,
                    p = r.mul(e.b, te),
                    m = r.mul(n, a),
                    y = r.mul(i, o),
                    A = r.mul(s, l),
                    w = r.add(n, i),
                    b = r.add(a, o);
                  (w = r.mul(w, b)),
                    (b = r.add(m, y)),
                    (w = r.sub(w, b)),
                    (b = r.add(n, s));
                  let E = r.add(a, l);
                  return (
                    (b = r.mul(b, E)),
                    (E = r.add(m, A)),
                    (b = r.sub(b, E)),
                    (E = r.add(i, s)),
                    (u = r.add(o, l)),
                    (E = r.mul(E, u)),
                    (u = r.add(y, A)),
                    (E = r.sub(E, u)),
                    (d = r.mul(g, b)),
                    (u = r.mul(p, A)),
                    (d = r.add(u, d)),
                    (u = r.sub(y, d)),
                    (d = r.add(y, d)),
                    (f = r.mul(u, d)),
                    (y = r.add(m, m)),
                    (y = r.add(y, m)),
                    (A = r.mul(g, A)),
                    (b = r.mul(p, b)),
                    (y = r.add(y, A)),
                    (A = r.sub(m, A)),
                    (A = r.mul(g, A)),
                    (b = r.add(b, A)),
                    (m = r.mul(y, b)),
                    (f = r.add(f, m)),
                    (m = r.mul(E, b)),
                    (u = r.mul(w, u)),
                    (u = r.sub(u, m)),
                    (m = r.mul(w, y)),
                    (d = r.mul(E, d)),
                    new h(u, f, (d = r.add(d, m)))
                  );
                }
                subtract(t) {
                  return this.add(t.negate());
                }
                is0() {
                  return this.equals(h.ZERO);
                }
                wNAF(t) {
                  return d.wNAFCached(this, u, t, (t) => {
                    let e = r.invertBatch(t.map((t) => t.pz));
                    return t.map((t, r) => t.toAffine(e[r])).map(h.fromAffine);
                  });
                }
                multiplyUnsafe(t) {
                  let n = h.ZERO;
                  if (t === X) return n;
                  if ((o(t), t === $)) return this;
                  let { endo: i } = e;
                  if (!i) return d.unsafeLadder(this, t);
                  let { k1neg: s, k1: a, k2neg: l, k2: u } = i.splitScalar(t),
                    c = n,
                    f = n,
                    g = this;
                  for (; a > X || u > X; )
                    a & $ && (c = c.add(g)),
                      u & $ && (f = f.add(g)),
                      (g = g.double()),
                      (a >>= $),
                      (u >>= $);
                  return (
                    s && (c = c.negate()),
                    l && (f = f.negate()),
                    (f = new h(r.mul(f.px, i.beta), f.py, f.pz)),
                    c.add(f)
                  );
                }
                multiply(t) {
                  let n, i;
                  o(t);
                  let { endo: s } = e;
                  if (s) {
                    let { k1neg: e, k1: a, k2neg: o, k2: l } = s.splitScalar(t),
                      { p: u, f: c } = this.wNAF(a),
                      { p: f, f: g } = this.wNAF(l);
                    (u = d.constTimeNegate(e, u)),
                      (f = d.constTimeNegate(o, f)),
                      (f = new h(r.mul(f.px, s.beta), f.py, f.pz)),
                      (n = u.add(f)),
                      (i = c.add(g));
                  } else {
                    let { p: e, f: r } = this.wNAF(t);
                    (n = e), (i = r);
                  }
                  return h.normalizeZ([n, i])[0];
                }
                multiplyAndAddUnsafe(t, e, r) {
                  let n = h.BASE,
                    i = (t, e) =>
                      e !== X && e !== $ && t.equals(n)
                        ? t.multiply(e)
                        : t.multiplyUnsafe(e),
                    s = i(this, e).add(i(t, r));
                  return s.is0() ? void 0 : s;
                }
                toAffine(t) {
                  let { px: e, py: n, pz: i } = this,
                    s = this.is0();
                  null == t && (t = s ? r.ONE : r.inv(i));
                  let a = r.mul(e, t),
                    o = r.mul(n, t),
                    l = r.mul(i, t);
                  if (s) return { x: r.ZERO, y: r.ZERO };
                  if (!r.eql(l, r.ONE)) throw Error("invZ was invalid");
                  return { x: a, y: o };
                }
                isTorsionFree() {
                  let { h: t, isTorsionFree: r } = e;
                  if (t === $) return !0;
                  if (r) return r(h, this);
                  throw Error(
                    "isTorsionFree() has not been declared for the elliptic curve"
                  );
                }
                clearCofactor() {
                  let { h: t, clearCofactor: r } = e;
                  return t === $
                    ? this
                    : r
                    ? r(h, this)
                    : this.multiplyUnsafe(e.h);
                }
                toRawBytes() {
                  let t =
                    !(arguments.length > 0) ||
                    void 0 === arguments[0] ||
                    arguments[0];
                  return this.assertValidity(), n(h, this, t);
                }
                toHex() {
                  let t =
                    !(arguments.length > 0) ||
                    void 0 === arguments[0] ||
                    arguments[0];
                  return V.bytesToHex(this.toRawBytes(t));
                }
                constructor(t, e, n) {
                  if (
                    ((this.px = t),
                    (this.py = e),
                    (this.pz = n),
                    null == t || !r.isValid(t))
                  )
                    throw Error("x required");
                  if (null == e || !r.isValid(e)) throw Error("y required");
                  if (null == n || !r.isValid(n)) throw Error("z required");
                }
              }
              (h.BASE = new h(e.Gx, e.Gy, r.ONE)),
                (h.ZERO = new h(r.ZERO, r.ONE, r.ZERO));
              let f = e.nBitLength,
                d = (function (t, e) {
                  let r = (t, e) => {
                      let r = e.negate();
                      return t ? r : e;
                    },
                    n = (t) => ({
                      windows: Math.ceil(e / t) + 1,
                      windowSize: 2 ** (t - 1),
                    });
                  return {
                    constTimeNegate: r,
                    unsafeLadder(e, r) {
                      let n = t.ZERO,
                        i = e;
                      for (; r > j; )
                        r & J && (n = n.add(i)), (i = i.double()), (r >>= J);
                      return n;
                    },
                    precomputeWindow(t, e) {
                      let { windows: r, windowSize: i } = n(e),
                        s = [],
                        a = t,
                        o = a;
                      for (let t = 0; t < r; t++) {
                        (o = a), s.push(o);
                        for (let t = 1; t < i; t++) (o = o.add(a)), s.push(o);
                        a = o.double();
                      }
                      return s;
                    },
                    wNAF(e, i, s) {
                      let { windows: a, windowSize: o } = n(e),
                        l = t.ZERO,
                        u = t.BASE,
                        c = BigInt(2 ** e - 1),
                        h = 2 ** e,
                        f = BigInt(e);
                      for (let t = 0; t < a; t++) {
                        let e = t * o,
                          n = Number(s & c);
                        (s >>= f), n > o && ((n -= h), (s += J));
                        let a = e + Math.abs(n) - 1,
                          d = t % 2 != 0,
                          g = n < 0;
                        0 === n
                          ? (u = u.add(r(d, i[e])))
                          : (l = l.add(r(g, i[a])));
                      }
                      return { p: l, f: u };
                    },
                    wNAFCached(t, e, r, n) {
                      let i = t._WINDOW_SIZE || 1,
                        s = e.get(t);
                      return (
                        s ||
                          ((s = this.precomputeWindow(t, i)),
                          1 !== i && e.set(t, n(s))),
                        this.wNAF(i, s, r)
                      );
                    },
                  };
                })(h, e.endo ? Math.ceil(f / 2) : f);
              return {
                CURVE: e,
                ProjectivePoint: h,
                normPrivateKeyToScalar: l,
                weierstrassEquation: s,
                isWithinCurveOrder: a,
              };
            })({
              ...e,
              toBytes(t, e, n) {
                let i = e.toAffine(),
                  s = r.toBytes(i.x),
                  a = V.concatBytes;
                return n
                  ? a(Uint8Array.from([e.hasEvenY() ? 2 : 3]), s)
                  : a(Uint8Array.from([4]), s, r.toBytes(i.y));
              },
              fromBytes(t) {
                let e = t.length,
                  n = t[0],
                  a = t.subarray(1);
                if (e === i && (2 === n || 3 === n)) {
                  let t = V.bytesToNumberBE(a);
                  if (!(X < t && t < r.ORDER))
                    throw Error("Point is not on curve");
                  let e = u(t),
                    i = r.sqrt(e);
                  return (
                    ((1 & n) == 1) != ((i & $) === $) && (i = r.neg(i)),
                    { x: t, y: i }
                  );
                }
                if (e === s && 4 === n)
                  return {
                    x: r.fromBytes(a.subarray(0, r.BYTES)),
                    y: r.fromBytes(a.subarray(r.BYTES, 2 * r.BYTES)),
                  };
                throw Error(
                  "Point of length "
                    .concat(e, " was invalid. Expected ")
                    .concat(i, " compressed bytes or ")
                    .concat(s, " uncompressed bytes")
                );
              },
            }),
            h = (t) => V.bytesToHex(V.numberToBytesBE(t, e.nByteLength)),
            f = (t, e, r) => V.bytesToNumberBE(t.slice(e, r));
          class d {
            static fromCompact(t) {
              let r = e.nByteLength;
              return new d(
                f((t = g("compactSignature", t, 2 * r)), 0, r),
                f(t, r, 2 * r)
              );
            }
            static fromDER(t) {
              let { r: e, s: r } = Y.toSig(g("DER", t));
              return new d(e, r);
            }
            assertValidity() {
              if (!c(this.r)) throw Error("r must be 0 < r < CURVE.n");
              if (!c(this.s)) throw Error("s must be 0 < s < CURVE.n");
            }
            addRecoveryBit(t) {
              return new d(this.r, this.s, t);
            }
            recoverPublicKey(t) {
              let { r: i, s, recovery: l } = this,
                u = y(g("msgHash", t));
              if (null == l || ![0, 1, 2, 3].includes(l))
                throw Error("recovery id invalid");
              let c = 2 === l || 3 === l ? i + e.n : i;
              if (c >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
              let f = (1 & l) == 0 ? "02" : "03",
                d = o.fromHex(f + h(c)),
                p = D(c, n),
                m = a(-u * p),
                A = a(s * p),
                w = o.BASE.multiplyAndAddUnsafe(d, m, A);
              if (!w) throw Error("point at infinify");
              return w.assertValidity(), w;
            }
            hasHighS() {
              return this.s > n >> $;
            }
            normalizeS() {
              return this.hasHighS()
                ? new d(this.r, a(-this.s), this.recovery)
                : this;
            }
            toDERRawBytes() {
              return V.hexToBytes(this.toDERHex());
            }
            toDERHex() {
              return Y.hexFromSig({ r: this.r, s: this.s });
            }
            toCompactRawBytes() {
              return V.hexToBytes(this.toCompactHex());
            }
            toCompactHex() {
              return h(this.r) + h(this.s);
            }
            constructor(t, e, r) {
              (this.r = t),
                (this.s = e),
                (this.recovery = r),
                this.assertValidity();
            }
          }
          function p(t) {
            let e = t instanceof Uint8Array,
              r = "string" == typeof t,
              n = (e || r) && t.length;
            return e
              ? n === i || n === s
              : r
              ? n === 2 * i || n === 2 * s
              : t instanceof o;
          }
          let m =
              e.bits2int ||
              function (t) {
                let r = V.bytesToNumberBE(t),
                  n = 8 * t.length - e.nBitLength;
                return n > 0 ? r >> BigInt(n) : r;
              },
            y =
              e.bits2int_modN ||
              function (t) {
                return a(m(t));
              },
            A = V.bitMask(e.nBitLength);
          function w(t) {
            if ("bigint" != typeof t) throw Error("bigint expected");
            if (!(X <= t && t < A))
              throw Error("bigint expected < 2^".concat(e.nBitLength));
            return V.numberToBytesBE(t, e.nByteLength);
          }
          let b = { lowS: e.lowS, prehash: !1 },
            E = { lowS: e.lowS, prehash: !1 };
          return (
            o.BASE._setWindowSize(8),
            {
              CURVE: e,
              getPublicKey: function (t) {
                let e =
                  !(arguments.length > 1) ||
                  void 0 === arguments[1] ||
                  arguments[1];
                return o.fromPrivateKey(t).toRawBytes(e);
              },
              getSharedSecret: function (t, e) {
                let r =
                  !(arguments.length > 2) ||
                  void 0 === arguments[2] ||
                  arguments[2];
                if (p(t)) throw Error("first arg must be private key");
                if (!p(e)) throw Error("second arg must be public key");
                return o.fromHex(e).multiply(l(t)).toRawBytes(r);
              },
              sign: function (t, i) {
                let s =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : b,
                  { seed: u, k2sig: h } = (function (t, i) {
                    let s =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : b;
                    if (["recovered", "canonical"].some((t) => t in s))
                      throw Error("sign() legacy options not supported");
                    let { hash: u, randomBytes: h } = e,
                      { lowS: f, prehash: p, extraEntropy: A } = s;
                    null == f && (f = !0),
                      (t = g("msgHash", t)),
                      p && (t = g("prehashed msgHash", u(t)));
                    let E = y(t),
                      _ = l(i),
                      x = [w(_), w(E)];
                    if (null != A) {
                      let t = !0 === A ? h(r.BYTES) : A;
                      x.push(g("extraEntropy", t));
                    }
                    return {
                      seed: V.concatBytes(...x),
                      k2sig: function (t) {
                        var e;
                        let r = m(t);
                        if (!c(r)) return;
                        let i = D(r, n),
                          s = o.BASE.multiply(r).toAffine(),
                          l = a(s.x);
                        if (l === X) return;
                        let u = a(i * a(E + l * _));
                        if (u === X) return;
                        let h = (2 * (s.x !== l)) | Number(s.y & $),
                          g = u;
                        return (
                          f &&
                            u > n >> $ &&
                            ((g = (e = u) > n >> $ ? a(-e) : e), (h ^= 1)),
                          new d(l, g, h)
                        );
                      },
                    };
                  })(t, i, s);
                return V.createHmacDrbg(
                  e.hash.outputLen,
                  e.nByteLength,
                  e.hmac
                )(u, h);
              },
              verify: function (t, r, i) {
                var s;
                let l,
                  u,
                  c =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : E;
                if (
                  ((r = g("msgHash", r)),
                  (i = g("publicKey", i)),
                  "strict" in c)
                )
                  throw Error("options.strict was renamed to lowS");
                let { lowS: h, prehash: f } = c;
                try {
                  if ("string" == typeof t || t instanceof Uint8Array)
                    try {
                      l = d.fromDER(t);
                    } catch (e) {
                      if (!(e instanceof Y.Err)) throw e;
                      l = d.fromCompact(t);
                    }
                  else if (
                    "object" == typeof t &&
                    "bigint" == typeof t.r &&
                    "bigint" == typeof t.s
                  ) {
                    let { r: e, s: r } = t;
                    l = new d(e, r);
                  } else throw Error("PARSE");
                  u = o.fromHex(i);
                } catch (t) {
                  if ("PARSE" === t.message)
                    throw Error(
                      "signature must be Signature instance, Uint8Array or hex string"
                    );
                  return !1;
                }
                if (h && l.hasHighS()) return !1;
                f && (r = e.hash(r));
                let { r: p, s: m } = l,
                  A = y(r),
                  w = D(m, n),
                  b = a(A * w),
                  _ = a(p * w),
                  x =
                    null == (s = o.BASE.multiplyAndAddUnsafe(u, b, _))
                      ? void 0
                      : s.toAffine();
                return !!x && a(x.x) === p;
              },
              ProjectivePoint: o,
              Signature: d,
              utils: {
                isValidPrivateKey(t) {
                  try {
                    return l(t), !0;
                  } catch (t) {
                    return !1;
                  }
                },
                normPrivateKeyToScalar: l,
                randomPrivateKey: () => {
                  let t = z(e.n);
                  return W(e.randomBytes(t), e.n);
                },
                precompute() {
                  let t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 8,
                    e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : o.BASE;
                  return e._setWindowSize(t), e.multiply(BigInt(3)), e;
                },
              },
            }
          );
        }
        function ti(t, e) {
          if ((M(t), !t.isValid(e.A) || !t.isValid(e.B) || !t.isValid(e.Z)))
            throw Error("mapToCurveSimpleSWU: invalid opts");
          let r = (function (t, e) {
            let r = t.ORDER,
              n = X;
            for (let t = r - $; t % tt === X; t /= tt) n += $;
            let i = n,
              s = tt << (i - $ - $),
              a = s * tt,
              o = (r - $) / a,
              l = (o - $) / tt,
              u = a - $,
              c = t.pow(e, o),
              h = t.pow(e, (o + $) / tt),
              f = (e, r) => {
                let n = c,
                  a = t.pow(r, u),
                  o = t.sqr(a);
                o = t.mul(o, r);
                let f = t.mul(e, o);
                (f = t.pow(f, l)),
                  (f = t.mul(f, a)),
                  (a = t.mul(f, r)),
                  (o = t.mul(f, e));
                let d = t.mul(o, a);
                f = t.pow(d, s);
                let g = t.eql(f, t.ONE);
                (a = t.mul(o, h)),
                  (f = t.mul(d, n)),
                  (o = t.cmov(a, o, g)),
                  (d = t.cmov(f, d, g));
                for (let e = i; e > $; e--) {
                  let r = e - tt;
                  r = tt << (r - $);
                  let i = t.pow(d, r),
                    s = t.eql(i, t.ONE);
                  (a = t.mul(o, n)),
                    (n = t.mul(n, n)),
                    (i = t.mul(d, n)),
                    (o = t.cmov(a, o, s)),
                    (d = t.cmov(i, d, s));
                }
                return { isValid: g, value: o };
              };
            if (t.ORDER % tr === te) {
              let r = (t.ORDER - te) / tr,
                n = t.sqrt(t.neg(e));
              f = (e, i) => {
                let s = t.sqr(i),
                  a = t.mul(e, i);
                s = t.mul(s, a);
                let o = t.pow(s, r);
                o = t.mul(o, a);
                let l = t.mul(o, n),
                  u = t.mul(t.sqr(o), i),
                  c = t.eql(u, e),
                  h = t.cmov(l, o, c);
                return { isValid: c, value: h };
              };
            }
            return f;
          })(t, e.Z);
          if (!t.isOdd) throw Error("Fp.isOdd is not implemented!");
          return (n) => {
            let i, s, a, o, l, u, c, h;
            (i = t.sqr(n)),
              (i = t.mul(i, e.Z)),
              (s = t.sqr(i)),
              (s = t.add(s, i)),
              (a = t.add(s, t.ONE)),
              (a = t.mul(a, e.B)),
              (o = t.cmov(e.Z, t.neg(s), !t.eql(s, t.ZERO))),
              (o = t.mul(o, e.A)),
              (s = t.sqr(a)),
              (u = t.sqr(o)),
              (l = t.mul(u, e.A)),
              (s = t.add(s, l)),
              (s = t.mul(s, a)),
              (u = t.mul(u, o)),
              (l = t.mul(u, e.B)),
              (s = t.add(s, l)),
              (c = t.mul(i, a));
            let { isValid: f, value: d } = r(s, u);
            (h = t.mul(i, n)),
              (h = t.mul(h, d)),
              (c = t.cmov(c, a, f)),
              (h = t.cmov(h, d, f));
            let g = t.isOdd(n) === t.isOdd(h);
            return (h = t.cmov(t.neg(h), h, g)), { x: (c = t.div(c, o)), y: h };
          };
        }
        t.s({ createHasher: () => th, isogenyMap: () => tc }, 102713);
        let ts = u;
        function ta(t, e) {
          if (t < 0 || t >= 1 << (8 * e))
            throw Error(
              "bad I2OSP call: value=".concat(t, " length=").concat(e)
            );
          let r = Array.from({ length: e }).fill(0);
          for (let n = e - 1; n >= 0; n--) (r[n] = 255 & t), (t >>>= 8);
          return new Uint8Array(r);
        }
        function to(t) {
          if (!(t instanceof Uint8Array)) throw Error("Uint8Array expected");
        }
        function tl(t) {
          if (!Number.isSafeInteger(t)) throw Error("number expected");
        }
        function tu(t, e, r) {
          let n;
          P(r, {
            DST: "stringOrUint8Array",
            p: "bigint",
            m: "isSafeInteger",
            k: "isSafeInteger",
            hash: "hash",
          });
          let { p: i, k: s, m: a, hash: o, expand: l, DST: u } = r;
          to(t), tl(e);
          let c = (function (t) {
              if (t instanceof Uint8Array) return t;
              if ("string" == typeof t) return y(t);
              throw Error("DST must be Uint8Array or string");
            })(u),
            h = Math.ceil((i.toString(2).length + s) / 8),
            f = e * a * h;
          if ("xmd" === l)
            n = (function (t, e, r, n) {
              to(t),
                to(e),
                tl(r),
                e.length > 255 && (e = n(p(y("H2C-OVERSIZE-DST-"), e)));
              let { outputLen: i, blockLen: s } = n,
                a = Math.ceil(r / i);
              if (a > 255) throw Error("Invalid xmd length");
              let o = p(e, ta(e.length, 1)),
                l = ta(0, s),
                u = ta(r, 2),
                c = Array(a),
                h = n(p(l, t, u, ta(0, 1), o));
              c[0] = n(p(h, ta(1, 1), o));
              for (let t = 1; t <= a; t++) {
                let e = [
                  (function (t, e) {
                    let r = new Uint8Array(t.length);
                    for (let n = 0; n < t.length; n++) r[n] = t[n] ^ e[n];
                    return r;
                  })(h, c[t - 1]),
                  ta(t + 1, 1),
                  o,
                ];
                c[t] = n(p(...e));
              }
              return p(...c).slice(0, r);
            })(t, c, f, o);
          else if ("xof" === l)
            n = (function (t, e, r, n, i) {
              if ((to(t), to(e), tl(r), e.length > 255)) {
                let t = Math.ceil((2 * n) / 8);
                e = i
                  .create({ dkLen: t })
                  .update(y("H2C-OVERSIZE-DST-"))
                  .update(e)
                  .digest();
              }
              if (r > 65535 || e.length > 255)
                throw Error("expand_message_xof: invalid lenInBytes");
              return i
                .create({ dkLen: r })
                .update(t)
                .update(ta(r, 2))
                .update(e)
                .update(ta(e.length, 1))
                .digest();
            })(t, c, f, s, o);
          else if ("_internal_pass" === l) n = t;
          else throw Error('expand must be "xmd" or "xof"');
          let d = Array(e);
          for (let t = 0; t < e; t++) {
            let e = Array(a);
            for (let r = 0; r < a; r++) {
              let s = h * (r + t * a),
                o = n.subarray(s, s + h);
              e[r] = U(ts(o), i);
            }
            d[t] = e;
          }
          return d;
        }
        function tc(t, e) {
          let r = e.map((t) => Array.from(t).reverse());
          return (e, n) => {
            let [i, s, a, o] = r.map((r) =>
              r.reduce((r, n) => t.add(t.mul(r, e), n))
            );
            return (
              (e = t.div(i, s)), (n = t.mul(n, t.div(a, o))), { x: e, y: n }
            );
          };
        }
        function th(t, e, r) {
          if ("function" != typeof e)
            throw Error("mapToCurve() must be defined");
          return {
            hashToCurve(n, i) {
              let s = tu(n, 2, { ...r, DST: r.DST, ...i }),
                a = t.fromAffine(e(s[0])),
                o = t.fromAffine(e(s[1])),
                l = a.add(o).clearCofactor();
              return l.assertValidity(), l;
            },
            encodeToCurve(n, i) {
              let s = tu(n, 1, { ...r, DST: r.encodeDST, ...i }),
                a = t.fromAffine(e(s[0])).clearCofactor();
              return a.assertValidity(), a;
            },
          };
        }
      },
      [548988, 413538, 102713],
    ],
    681665: (t) => {
      "use strict";
      t.s({ hmac: () => i });
      var e = t.i(951562),
        r = t.i(825423);
      class n extends r.Hash {
        update(t) {
          return (0, e.exists)(this), this.iHash.update(t), this;
        }
        digestInto(t) {
          (0, e.exists)(this),
            (0, e.bytes)(t, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(t),
            this.oHash.update(t),
            this.oHash.digestInto(t),
            this.destroy();
        }
        digest() {
          let t = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(t), t;
        }
        _cloneInto(t) {
          t || (t = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: e,
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: s,
            outputLen: a,
          } = this;
          return (
            (t.finished = n),
            (t.destroyed = i),
            (t.blockLen = s),
            (t.outputLen = a),
            (t.oHash = e._cloneInto(t.oHash)),
            (t.iHash = r._cloneInto(t.iHash)),
            t
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
        constructor(t, n) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, e.hash)(t);
          let i = (0, r.toBytes)(n);
          if (
            ((this.iHash = t.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let s = this.blockLen,
            a = new Uint8Array(s);
          a.set(i.length > s ? t.create().update(i).digest() : i);
          for (let t = 0; t < a.length; t++) a[t] ^= 54;
          this.iHash.update(a), (this.oHash = t.create());
          for (let t = 0; t < a.length; t++) a[t] ^= 106;
          this.oHash.update(a), a.fill(0);
        }
      }
      let i = (t, e, r) => new n(t, e).update(r).digest();
      i.create = (t, e) => new n(t, e);
    },
    182258: (t) => {
      "use strict";
      t.s({ secp256k1: () => g }, 182258);
      var e = t.i(239141),
        r = t.i(825423),
        n = t.i(918712),
        i = t.i(413538),
        s = t.i(548988),
        a = t.i(102713),
        o = t.i(681665);
      let l = BigInt(
          "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
        ),
        u = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        c = BigInt(1),
        h = BigInt(2),
        f = (t, e) => (t + e / h) / e,
        d = (0, n.Field)(l, void 0, void 0, {
          sqrt: function (t) {
            let e = BigInt(3),
              r = BigInt(6),
              i = BigInt(11),
              s = BigInt(22),
              a = BigInt(23),
              o = BigInt(44),
              u = BigInt(88),
              c = (t * t * t) % l,
              f = (c * c * t) % l,
              g = ((0, n.pow2)(f, e, l) * f) % l,
              p = ((0, n.pow2)(g, e, l) * f) % l,
              m = ((0, n.pow2)(p, h, l) * c) % l,
              y = ((0, n.pow2)(m, i, l) * m) % l,
              A = ((0, n.pow2)(y, s, l) * y) % l,
              w = ((0, n.pow2)(A, o, l) * A) % l,
              b = ((0, n.pow2)(w, u, l) * w) % l,
              E = ((0, n.pow2)(b, o, l) * A) % l,
              _ = ((0, n.pow2)(E, e, l) * f) % l,
              x = ((0, n.pow2)(_, a, l) * y) % l,
              B = ((0, n.pow2)(x, r, l) * c) % l,
              k = (0, n.pow2)(B, h, l);
            if (!d.eql(d.sqr(k), t)) throw Error("Cannot find square root");
            return k;
          },
        }),
        g = (function (t, e) {
          let n = (e) =>
            (0, i.weierstrass)({
              ...t,
              ...{
                hash: e,
                hmac: function (t) {
                  for (
                    var n = arguments.length,
                      i = Array(n > 1 ? n - 1 : 0),
                      s = 1;
                    s < n;
                    s++
                  )
                    i[s - 1] = arguments[s];
                  return (0, o.hmac)(e, t, (0, r.concatBytes)(...i));
                },
                randomBytes: r.randomBytes,
              },
            });
          return Object.freeze({ ...n(e), create: n });
        })(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: d,
            n: u,
            Gx: BigInt(
              "55066263022277343669578718895168534326250603453777594175500187360389116729240"
            ),
            Gy: BigInt(
              "32670510020758816978083085130507043184471273380659243275938904335757337482424"
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
              ),
              splitScalar: (t) => {
                let e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  r = -c * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  s = BigInt("0x100000000000000000000000000000000"),
                  a = f(e * t, u),
                  o = f(-r * t, u),
                  l = (0, n.mod)(t - a * e - o * i, u),
                  h = (0, n.mod)(-a * r - o * e, u),
                  d = l > s,
                  g = h > s;
                if ((d && (l = u - l), g && (h = u - h), l > s || h > s))
                  throw Error("splitScalar: Endomorphism failed, k=" + t);
                return { k1neg: d, k1: l, k2neg: g, k2: h };
              },
            },
          },
          e.sha256
        ),
        p = BigInt(0);
      g.ProjectivePoint;
      let m = (0, a.isogenyMap)(
          d,
          [
            [
              "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
              "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
              "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
              "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c",
            ],
            [
              "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
              "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
              "0x0000000000000000000000000000000000000000000000000000000000000001",
            ],
            [
              "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
              "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
              "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
              "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84",
            ],
            [
              "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
              "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
              "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
              "0x0000000000000000000000000000000000000000000000000000000000000001",
            ],
          ].map((t) => t.map((t) => BigInt(t)))
        ),
        y = (0, i.mapToCurveSimpleSWU)(d, {
          A: BigInt(
            "0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"
          ),
          B: BigInt("1771"),
          Z: d.create(BigInt("-11")),
        });
      (0, a.createHasher)(
        g.ProjectivePoint,
        (t) => {
          let { x: e, y: r } = y(d.create(t[0]));
          return m(e, r);
        },
        {
          DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
          encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
          p: d.ORDER,
          m: 1,
          k: 128,
          expand: "xmd",
          hash: e.sha256,
        }
      );
    },
    538348: (t) => {
      "use strict";
      t.s({ ZeroHash: () => e });
      let e =
        "0x0000000000000000000000000000000000000000000000000000000000000000";
    },
    599852: (t) => {
      "use strict";
      t.s({ Signature: () => E });
      var e = t.i(300522),
        r = t.i(216788),
        n = t.i(725039),
        i = t.i(538348),
        s = t.i(713514),
        a = t.i(219223),
        o = t.i(13517);
      let l = BigInt(0),
        u = BigInt(1),
        c = BigInt(2),
        h = BigInt(27),
        f = BigInt(28),
        d = BigInt(35),
        g = {};
      function p(t) {
        return (0, s.zeroPadValue)((0, a.toBeArray)(t), 32);
      }
      var m = new WeakMap(),
        y = new WeakMap(),
        A = new WeakMap(),
        w = new WeakMap();
      let b = Symbol.for("nodejs.util.inspect.custom");
      class E {
        get r() {
          return (0, e._)(this, m);
        }
        set r(t) {
          (0, o.assertArgument)(
            32 === (0, s.dataLength)(t),
            "invalid r",
            "value",
            t
          ),
            (0, n._)(this, m, (0, s.hexlify)(t));
        }
        get s() {
          return (
            (0, o.assertArgument)(
              8 > parseInt((0, e._)(this, y).substring(0, 3)),
              "non-canonical s; use ._s",
              "s",
              (0, e._)(this, y)
            ),
            (0, e._)(this, y)
          );
        }
        set s(t) {
          (0, o.assertArgument)(
            32 === (0, s.dataLength)(t),
            "invalid s",
            "value",
            t
          ),
            (0, n._)(this, y, (0, s.hexlify)(t));
        }
        get _s() {
          return (0, e._)(this, y);
        }
        isValid() {
          return 8 > parseInt((0, e._)(this, y).substring(0, 3));
        }
        get v() {
          return (0, e._)(this, A);
        }
        set v(t) {
          let e = (0, a.getNumber)(t, "value");
          (0, o.assertArgument)(27 === e || 28 === e, "invalid v", "v", t),
            (0, n._)(this, A, e);
        }
        get networkV() {
          return (0, e._)(this, w);
        }
        get legacyChainId() {
          let t = this.networkV;
          return null == t ? null : E.getChainId(t);
        }
        get yParity() {
          return +(27 !== this.v);
        }
        get yParityAndS() {
          let t = (0, s.getBytes)(this.s);
          return this.yParity && (t[0] |= 128), (0, s.hexlify)(t);
        }
        get compactSerialized() {
          return (0, s.concat)([this.r, this.yParityAndS]);
        }
        get serialized() {
          return (0, s.concat)([
            this.r,
            this.s,
            this.yParity ? "0x1c" : "0x1b",
          ]);
        }
        [b]() {
          return 'Signature { r: "'
            .concat(this.r, '", s: "')
            .concat(this._s, '"')
            .concat(this.isValid() ? "" : ', valid: "false"', ", yParity: ")
            .concat(this.yParity, ", networkV: ")
            .concat(this.networkV, " }");
        }
        clone() {
          let t = new E(g, this.r, this._s, this.v);
          return this.networkV && (0, n._)(t, w, this.networkV), t;
        }
        toJSON() {
          let t = this.networkV;
          return {
            _type: "signature",
            networkV: null != t ? t.toString() : null,
            r: this.r,
            s: this._s,
            v: this.v,
          };
        }
        static getChainId(t) {
          let e = (0, a.getBigInt)(t, "v");
          return e == h || e == f
            ? l
            : ((0, o.assertArgument)(e >= d, "invalid EIP-155 v", "v", t),
              (e - d) / c);
        }
        static getChainIdV(t, e) {
          return (0, a.getBigInt)(t) * c + BigInt(35 + e - 27);
        }
        static getNormalizedV(t) {
          let e = (0, a.getBigInt)(t);
          return e === l || e === h
            ? 27
            : e === u || e === f
            ? 28
            : ((0, o.assertArgument)(e >= d, "invalid v", "v", t),
              e & u ? 27 : 28);
        }
        static from(t) {
          function e(e, r) {
            (0, o.assertArgument)(e, r, "signature", t);
          }
          if (null == t) return new E(g, i.ZeroHash, i.ZeroHash, 27);
          if ("string" == typeof t) {
            let r = (0, s.getBytes)(t, "signature");
            if (64 === r.length) {
              let t = (0, s.hexlify)(r.slice(0, 32)),
                e = r.slice(32, 64),
                n = 128 & e[0] ? 28 : 27;
              return (e[0] &= 127), new E(g, t, (0, s.hexlify)(e), n);
            }
            if (65 === r.length) {
              let t = (0, s.hexlify)(r.slice(0, 32)),
                e = (0, s.hexlify)(r.slice(32, 64)),
                n = E.getNormalizedV(r[64]);
              return new E(g, t, e, n);
            }
            e(!1, "invalid raw signature length");
          }
          if (t instanceof E) return t.clone();
          let r = t.r;
          e(null != r, "missing r");
          let l = p(r),
            u = (function (t, r) {
              if (null != t) return p(t);
              if (null != r) {
                e((0, s.isHexString)(r, 32), "invalid yParityAndS");
                let t = (0, s.getBytes)(r);
                return (t[0] &= 127), (0, s.hexlify)(t);
              }
              e(!1, "missing s");
            })(t.s, t.yParityAndS),
            { networkV: c, v: h } = (function (t, r, n) {
              if (null != t) {
                let e = (0, a.getBigInt)(t);
                return {
                  networkV: e >= d ? e : void 0,
                  v: E.getNormalizedV(e),
                };
              }
              if (null != r)
                return (
                  e((0, s.isHexString)(r, 32), "invalid yParityAndS"),
                  { v: 128 & (0, s.getBytes)(r)[0] ? 28 : 27 }
                );
              if (null != n) {
                switch ((0, a.getNumber)(n, "sig.yParity")) {
                  case 0:
                    return { v: 27 };
                  case 1:
                    return { v: 28 };
                }
                e(!1, "invalid yParity");
              }
              e(!1, "missing v");
            })(t.v, t.yParityAndS, t.yParity),
            f = new E(g, l, u, h);
          return (
            c && (0, n._)(f, w, c),
            e(
              null == t.yParity ||
                (0, a.getNumber)(t.yParity, "sig.yParity") === f.yParity,
              "yParity mismatch"
            ),
            e(
              null == t.yParityAndS || t.yParityAndS === f.yParityAndS,
              "yParityAndS mismatch"
            ),
            f
          );
        }
        constructor(t, e, i, s) {
          (0, r._)(this, m, { writable: !0, value: void 0 }),
            (0, r._)(this, y, { writable: !0, value: void 0 }),
            (0, r._)(this, A, { writable: !0, value: void 0 }),
            (0, r._)(this, w, { writable: !0, value: void 0 }),
            (0, o.assertPrivate)(t, g, "Signature"),
            (0, n._)(this, m, e),
            (0, n._)(this, y, i),
            (0, n._)(this, A, s),
            (0, n._)(this, w, null);
        }
      }
    },
    821038: (t) => {
      "use strict";
      t.s({ SigningKey: () => c });
      var e = t.i(300522),
        r = t.i(216788),
        n = t.i(725039),
        i = t.i(182258),
        s = t.i(713514),
        a = t.i(219223),
        o = t.i(13517),
        l = t.i(599852),
        u = new WeakMap();
      class c {
        get privateKey() {
          return (0, e._)(this, u);
        }
        get publicKey() {
          return c.computePublicKey((0, e._)(this, u));
        }
        get compressedPublicKey() {
          return c.computePublicKey((0, e._)(this, u), !0);
        }
        sign(t) {
          (0, o.assertArgument)(
            32 === (0, s.dataLength)(t),
            "invalid digest length",
            "digest",
            t
          );
          let r = i.secp256k1.sign(
            (0, s.getBytesCopy)(t),
            (0, s.getBytesCopy)((0, e._)(this, u)),
            { lowS: !0 }
          );
          return l.Signature.from({
            r: (0, a.toBeHex)(r.r, 32),
            s: (0, a.toBeHex)(r.s, 32),
            v: r.recovery ? 28 : 27,
          });
        }
        computeSharedSecret(t) {
          let r = c.computePublicKey(t);
          return (0, s.hexlify)(
            i.secp256k1.getSharedSecret(
              (0, s.getBytesCopy)((0, e._)(this, u)),
              (0, s.getBytes)(r),
              !1
            )
          );
        }
        static computePublicKey(t, e) {
          let r = (0, s.getBytes)(t, "key");
          if (32 === r.length) {
            let t = i.secp256k1.getPublicKey(r, !!e);
            return (0, s.hexlify)(t);
          }
          if (64 === r.length) {
            let t = new Uint8Array(65);
            (t[0] = 4), t.set(r, 1), (r = t);
          }
          let n = i.secp256k1.ProjectivePoint.fromHex(r);
          return (0, s.hexlify)(n.toRawBytes(e));
        }
        static recoverPublicKey(t, e) {
          (0, o.assertArgument)(
            32 === (0, s.dataLength)(t),
            "invalid digest length",
            "digest",
            t
          );
          let r = l.Signature.from(e),
            n = i.secp256k1.Signature.fromCompact(
              (0, s.getBytesCopy)((0, s.concat)([r.r, r.s]))
            ),
            a = (n = n.addRecoveryBit(r.yParity)).recoverPublicKey(
              (0, s.getBytesCopy)(t)
            );
          return (
            (0, o.assertArgument)(
              null != a,
              "invalid signature for digest",
              "signature",
              e
            ),
            "0x" + a.toHex(!1)
          );
        }
        static addPoints(t, e, r) {
          let n = i.secp256k1.ProjectivePoint.fromHex(
              c.computePublicKey(t).substring(2)
            ),
            s = i.secp256k1.ProjectivePoint.fromHex(
              c.computePublicKey(e).substring(2)
            );
          return "0x" + n.add(s).toHex(!!r);
        }
        constructor(t) {
          (0, r._)(this, u, { writable: !0, value: void 0 }),
            (0, o.assertArgument)(
              32 === (0, s.dataLength)(t),
              "invalid private key",
              "privateKey",
              "[REDACTED]"
            ),
            (0, n._)(this, u, (0, s.hexlify)(t));
        }
      }
    },
    550313: [
      (t) => {
        "use strict";
        t.s({ TypedDataEncoder: () => F, verifyTypedData: () => L }, 550313);
        var e = t.i(300522),
          r = t.i(216788),
          n = t.i(725039),
          i = t.i(52992),
          s = t.i(153525),
          a = t.i(825285),
          o = t.i(978895),
          l = t.i(749401);
        t.s({ computeAddress: () => c, recoverAddress: () => h }, 256717);
        var u = t.i(821038);
        function c(t) {
          let e;
          return (
            (e =
              "string" == typeof t
                ? u.SigningKey.computePublicKey(t, !1)
                : t.publicKey),
            (0, o.getAddress)(
              (0, l.keccak256)("0x" + e.substring(4)).substring(26)
            )
          );
        }
        function h(t, e) {
          return c(u.SigningKey.recoverPublicKey(t, e));
        }
        var f = t.i(713514),
          d = t.i(551749),
          g = t.i(219223),
          p = t.i(13517),
          m = t.i(721506);
        let y = new Uint8Array(32);
        y.fill(0);
        let A = BigInt(-1),
          w = BigInt(0),
          b = BigInt(1),
          E = BigInt(
            "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
          ),
          _ = (0, g.toBeHex)(b, 32),
          x = (0, g.toBeHex)(w, 32),
          B = {
            name: "string",
            version: "string",
            chainId: "uint256",
            verifyingContract: "address",
            salt: "bytes32",
          },
          k = ["name", "version", "chainId", "verifyingContract", "salt"];
        function P(t) {
          return function (e) {
            return (
              (0, p.assertArgument)(
                "string" == typeof e,
                "invalid domain value for ".concat(JSON.stringify(t)),
                "domain.".concat(t),
                e
              ),
              e
            );
          };
        }
        let N = {
          name: P("name"),
          version: P("version"),
          chainId: function (t) {
            let e = (0, g.getBigInt)(t, "domain.chainId");
            return ((0, p.assertArgument)(
              e >= 0,
              "invalid chain ID",
              "domain.chainId",
              t
            ),
            Number.isSafeInteger(e))
              ? Number(e)
              : (0, g.toQuantity)(e);
          },
          verifyingContract: function (t) {
            try {
              return (0, o.getAddress)(t).toLowerCase();
            } catch (t) {}
            (0, p.assertArgument)(
              !1,
              'invalid domain value "verifyingContract"',
              "domain.verifyingContract",
              t
            );
          },
          salt: function (t) {
            let e = (0, f.getBytes)(t, "domain.salt");
            return (
              (0, p.assertArgument)(
                32 === e.length,
                'invalid domain value "salt"',
                "domain.salt",
                t
              ),
              (0, f.hexlify)(e)
            );
          },
        };
        function I(t) {
          {
            let e = t.match(/^(u?)int(\d+)$/);
            if (e) {
              let r = "" === e[1],
                n = parseInt(e[2]);
              (0, p.assertArgument)(
                n % 8 == 0 && 0 !== n && n <= 256 && e[2] === String(n),
                "invalid numeric width",
                "type",
                t
              );
              let i = (0, g.mask)(E, r ? n - 1 : n),
                s = r ? (i + b) * A : w;
              return function (e) {
                let n = (0, g.getBigInt)(e, "value");
                return (
                  (0, p.assertArgument)(
                    n >= s && n <= i,
                    "value out-of-bounds for ".concat(t),
                    "value",
                    n
                  ),
                  (0, g.toBeHex)(r ? (0, g.toTwos)(n, 256) : n, 32)
                );
              };
            }
          }
          {
            let e = t.match(/^bytes(\d+)$/);
            if (e) {
              let r = parseInt(e[1]);
              return (
                (0, p.assertArgument)(
                  0 !== r && r <= 32 && e[1] === String(r),
                  "invalid bytes width",
                  "type",
                  t
                ),
                function (e) {
                  let n = (0, f.getBytes)(e);
                  (0, p.assertArgument)(
                    n.length === r,
                    "invalid length for ".concat(t),
                    "value",
                    e
                  );
                  let i = (0, f.getBytes)(e),
                    s = i.length % 32;
                  return s ? (0, f.concat)([i, y.slice(s)]) : (0, f.hexlify)(i);
                }
              );
            }
          }
          switch (t) {
            case "address":
              return function (t) {
                return (0, f.zeroPadValue)((0, o.getAddress)(t), 32);
              };
            case "bool":
              return function (t) {
                return t ? _ : x;
              };
            case "bytes":
              return function (t) {
                return (0, l.keccak256)(t);
              };
            case "string":
              return function (t) {
                return (0, m.id)(t);
              };
          }
          return null;
        }
        function C(t, e) {
          return "".concat(t, "(").concat(
            e
              .map((t) => {
                let { name: e, type: r } = t;
                return r + " " + e;
              })
              .join(","),
            ")"
          );
        }
        function O(t) {
          let e = t.match(/^([^\x5b]*)((\x5b\d*\x5d)*)(\x5b(\d*)\x5d)$/);
          return e
            ? {
                base: e[1],
                index: e[2] + e[4],
                array: {
                  base: e[1],
                  prefix: e[1] + e[2],
                  count: e[5] ? parseInt(e[5]) : -1,
                },
              }
            : { base: t };
        }
        var R = new WeakMap(),
          T = new WeakMap(),
          S = new WeakMap(),
          U = new WeakSet();
        class F {
          get types() {
            return JSON.parse((0, e._)(this, R));
          }
          getEncoder(t) {
            let r = (0, e._)(this, S).get(t);
            return (
              r ||
                ((r = (0, i._)(this, U, D).call(this, t)),
                (0, e._)(this, S).set(t, r)),
              r
            );
          }
          encodeType(t) {
            let r = (0, e._)(this, T).get(t);
            return (
              (0, p.assertArgument)(
                r,
                "unknown type: ".concat(JSON.stringify(t)),
                "name",
                t
              ),
              r
            );
          }
          encodeData(t, e) {
            return this.getEncoder(t)(e);
          }
          hashStruct(t, e) {
            return (0, l.keccak256)(this.encodeData(t, e));
          }
          encode(t) {
            return this.encodeData(this.primaryType, t);
          }
          hash(t) {
            return this.hashStruct(this.primaryType, t);
          }
          _visit(t, e, r) {
            if (I(t)) return r(t, e);
            let n = O(t).array;
            if (n)
              return (
                (0, p.assertArgument)(
                  -1 === n.count || n.count === e.length,
                  "array length mismatch; expected length ".concat(n.count),
                  "value",
                  e
                ),
                e.map((t) => this._visit(n.prefix, t, r))
              );
            let i = this.types[t];
            if (i)
              return i.reduce((t, n) => {
                let { name: i, type: s } = n;
                return (t[i] = this._visit(s, e[i], r)), t;
              }, {});
            (0, p.assertArgument)(!1, "unknown type: ".concat(t), "type", t);
          }
          visit(t, e) {
            return this._visit(this.primaryType, t, e);
          }
          static from(t) {
            return new F(t);
          }
          static getPrimaryType(t) {
            return F.from(t).primaryType;
          }
          static hashStruct(t, e, r) {
            return F.from(e).hashStruct(t, r);
          }
          static hashDomain(t) {
            let e = [];
            for (let r in t) {
              if (null == t[r]) continue;
              let n = B[r];
              (0, p.assertArgument)(
                n,
                "invalid typed-data domain key: ".concat(JSON.stringify(r)),
                "domain",
                t
              ),
                e.push({ name: r, type: n });
            }
            return (
              e.sort((t, e) => k.indexOf(t.name) - k.indexOf(e.name)),
              F.hashStruct("EIP712Domain", { EIP712Domain: e }, t)
            );
          }
          static encode(t, e, r) {
            return (0, f.concat)([
              "0x1901",
              F.hashDomain(t),
              F.from(e).hash(r),
            ]);
          }
          static hash(t, e, r) {
            return (0, l.keccak256)(F.encode(t, e, r));
          }
          static async resolveNames(t, e, r, n) {
            for (let e in (t = Object.assign({}, t)))
              null == t[e] && delete t[e];
            let i = {};
            t.verifyingContract &&
              !(0, f.isHexString)(t.verifyingContract, 20) &&
              (i[t.verifyingContract] = "0x");
            let s = F.from(e);
            for (let t in (s.visit(
              r,
              (t, e) => (
                "address" !== t || (0, f.isHexString)(e, 20) || (i[e] = "0x"), e
              )
            ),
            i))
              i[t] = await n(t);
            return (
              t.verifyingContract &&
                i[t.verifyingContract] &&
                (t.verifyingContract = i[t.verifyingContract]),
              (r = s.visit(r, (t, e) => ("address" === t && i[e] ? i[e] : e))),
              { domain: t, value: r }
            );
          }
          static getPayload(t, e, r) {
            F.hashDomain(t);
            let n = {},
              i = [];
            k.forEach((e) => {
              let r = t[e];
              null != r && ((n[e] = N[e](r)), i.push({ name: e, type: B[e] }));
            });
            let s = F.from(e),
              a = Object.assign({}, (e = s.types));
            return (
              (0, p.assertArgument)(
                null == a.EIP712Domain,
                "types must not contain EIP712Domain type",
                "types.EIP712Domain",
                e
              ),
              (a.EIP712Domain = i),
              s.encode(r),
              {
                types: a,
                domain: n,
                primaryType: s.primaryType,
                message: s.visit(r, (t, e) => {
                  if (t.match(/^bytes(\d*)/))
                    return (0, f.hexlify)((0, f.getBytes)(e));
                  if (t.match(/^u?int/)) return (0, g.getBigInt)(e).toString();
                  switch (t) {
                    case "address":
                      return e.toLowerCase();
                    case "bool":
                      return !!e;
                    case "string":
                      return (
                        (0, p.assertArgument)(
                          "string" == typeof e,
                          "invalid string",
                          "value",
                          e
                        ),
                        e
                      );
                  }
                  (0, p.assertArgument)(!1, "unsupported type", "type", t);
                }),
              }
            );
          }
          constructor(t) {
            (0, s._)(this, U),
              (0, a._)(this, "primaryType", void 0),
              (0, r._)(this, R, { writable: !0, value: void 0 }),
              (0, r._)(this, T, { writable: !0, value: void 0 }),
              (0, r._)(this, S, { writable: !0, value: void 0 }),
              (0, n._)(this, T, new Map()),
              (0, n._)(this, S, new Map());
            let i = new Map(),
              o = new Map(),
              l = new Map(),
              u = {};
            for (let e in (Object.keys(t).forEach((e) => {
              (u[e] = t[e].map((e) => {
                let { name: r, type: n } = e,
                  { base: i, index: s } = O(n);
                return (
                  "int" !== i || t.int || (i = "int256"),
                  "uint" !== i || t.uint || (i = "uint256"),
                  { name: r, type: i + (s || "") }
                );
              })),
                i.set(e, new Set()),
                o.set(e, []),
                l.set(e, new Set());
            }),
            (0, n._)(this, R, JSON.stringify(u)),
            u)) {
              let r = new Set();
              for (let n of u[e]) {
                (0, p.assertArgument)(
                  !r.has(n.name),
                  "duplicate variable name "
                    .concat(JSON.stringify(n.name), " in ")
                    .concat(JSON.stringify(e)),
                  "types",
                  t
                ),
                  r.add(n.name);
                let s = O(n.type).base;
                (0, p.assertArgument)(
                  s !== e,
                  "circular type reference to ".concat(JSON.stringify(s)),
                  "types",
                  t
                ),
                  I(s) ||
                    ((0, p.assertArgument)(
                      o.has(s),
                      "unknown type ".concat(JSON.stringify(s)),
                      "types",
                      t
                    ),
                    o.get(s).push(e),
                    i.get(e).add(s));
              }
            }
            let c = Array.from(o.keys()).filter((t) => 0 === o.get(t).length);
            for (let [r, n] of ((0, p.assertArgument)(
              0 !== c.length,
              "missing primary type",
              "types",
              t
            ),
            (0, p.assertArgument)(
              1 === c.length,
              "ambiguous primary types or unused types: ".concat(
                c.map((t) => JSON.stringify(t)).join(", ")
              ),
              "types",
              t
            ),
            (0, d.defineProperties)(this, { primaryType: c[0] }),
            !(function e(r, n) {
              for (let s of ((0, p.assertArgument)(
                !n.has(r),
                "circular type reference to ".concat(JSON.stringify(r)),
                "types",
                t
              ),
              n.add(r),
              i.get(r)))
                if (o.has(s)) for (let t of (e(s, n), n)) l.get(t).add(s);
              n.delete(r);
            })(this.primaryType, new Set()),
            l)) {
              let t = Array.from(n);
              t.sort(),
                (0, e._)(this, T).set(
                  r,
                  C(r, u[r]) + t.map((t) => C(t, u[t])).join("")
                );
            }
          }
        }
        function D(t) {
          {
            let e = I(t);
            if (e) return e;
          }
          let r = O(t).array;
          if (r) {
            let t = r.prefix,
              n = this.getEncoder(t);
            return (i) => {
              (0, p.assertArgument)(
                -1 === r.count || r.count === i.length,
                "array length mismatch; expected length ".concat(r.count),
                "value",
                i
              );
              let s = i.map(n);
              return (
                (0, e._)(this, T).has(t) && (s = s.map(l.keccak256)),
                (0, l.keccak256)((0, f.concat)(s))
              );
            };
          }
          let n = this.types[t];
          if (n) {
            let r = (0, m.id)((0, e._)(this, T).get(t));
            return (t) => {
              let i = n.map((r) => {
                let { name: n, type: i } = r,
                  s = this.getEncoder(i)(t[n]);
                return (0, e._)(this, T).has(i) ? (0, l.keccak256)(s) : s;
              });
              return i.unshift(r), (0, f.concat)(i);
            };
          }
          (0, p.assertArgument)(!1, "unknown type: ".concat(t), "type", t);
        }
        function L(t, e, r, n) {
          return h(F.hash(t, e, r), n);
        }
      },
      [256717],
    ],
    816028: (t) => {
      "use strict";
      t.s({ accessListify: () => s });
      var e = t.i(978895),
        r = t.i(13517),
        n = t.i(713514);
      function i(t, i) {
        return {
          address: (0, e.getAddress)(t),
          storageKeys: i.map(
            (t, e) => (
              (0, r.assertArgument)(
                (0, n.isHexString)(t, 32),
                "invalid slot",
                "storageKeys[".concat(e, "]"),
                t
              ),
              t.toLowerCase()
            )
          ),
        };
      }
      function s(t) {
        if (Array.isArray(t))
          return t.map((e, n) =>
            Array.isArray(e)
              ? ((0, r.assertArgument)(
                  2 === e.length,
                  "invalid slot set",
                  "value[".concat(n, "]"),
                  e
                ),
                i(e[0], e[1]))
              : ((0, r.assertArgument)(
                  null != e && "object" == typeof e,
                  "invalid address-slot set",
                  "value",
                  t
                ),
                i(e.address, e.storageKeys))
          );
        (0, r.assertArgument)(
          null != t && "object" == typeof t,
          "invalid access list",
          "value",
          t
        );
        let e = Object.keys(t).map((e) => {
          let r = t[e].reduce((t, e) => ((t[e] = !0), t), {});
          return i(e, Object.keys(r).sort());
        });
        return e.sort((t, e) => t.address.localeCompare(e.address)), e;
      }
    },
    292420: (t) => {
      "use strict";
      t.s({ authorizationify: () => i });
      var e = t.i(978895),
        r = t.i(599852),
        n = t.i(219223);
      function i(t) {
        return {
          address: (0, e.getAddress)(t.address),
          nonce: (0, n.getBigInt)(null != t.nonce ? t.nonce : 0),
          chainId: (0, n.getBigInt)(null != t.chainId ? t.chainId : 0),
          signature: r.Signature.from(t.signature),
        };
      }
    },
    940227: [
      (t) => {
        "use strict";
        t.s(
          {
            FetchCancelSignal: () => x,
            FetchRequest: () => Q,
            FetchResponse: () => Z,
          },
          940227
        );
        var e = t.i(300522),
          r = t.i(216788),
          n = t.i(725039),
          i = t.i(52992),
          s = t.i(153525);
        t.s({ decodeBase64: () => o, encodeBase64: () => l }, 665212);
        var a = t.i(713514);
        function o(t) {
          let e = new Uint8Array((t = atob(t)).length);
          for (let r = 0; r < t.length; r++) e[r] = t.charCodeAt(r);
          return (0, a.getBytes)(e);
        }
        function l(t) {
          let e = (0, a.getBytes)(t),
            r = "";
          for (let t = 0; t < e.length; t++) r += String.fromCharCode(e[t]);
          return btoa(r);
        }
        var u = t.i(13517),
          c = t.i(551749),
          h = t.i(853399);
        function f(t) {
          return async function (e, r) {
            let n;
            (0, u.assert)(
              null == r || !r.cancelled,
              "request cancelled before sending",
              "CANCELLED"
            );
            let i = e.url.split(":")[0].toLowerCase();
            (0, u.assert)(
              "http" === i || "https" === i,
              "unsupported protocol ".concat(i),
              "UNSUPPORTED_OPERATION",
              { info: { protocol: i }, operation: "request" }
            ),
              (0, u.assert)(
                "https" === i ||
                  !e.credentials ||
                  e.allowInsecureAuthentication,
                "insecure authorized connections unsupported",
                "UNSUPPORTED_OPERATION",
                { operation: "request" }
              );
            let s = null,
              a = new AbortController(),
              o = setTimeout(() => {
                (s = (0, u.makeError)("request timeout", "TIMEOUT")), a.abort();
              }, e.timeout);
            r &&
              r.addListener(() => {
                (s = (0, u.makeError)("request cancelled", "CANCELLED")),
                  a.abort();
              });
            let l = Object.assign({}, t, {
              method: e.method,
              headers: new Headers(Array.from(e)),
              body: e.body || void 0,
              signal: a.signal,
            });
            try {
              n = await fetch(e.url, l);
            } catch (t) {
              if ((clearTimeout(o), s)) throw s;
              throw t;
            }
            clearTimeout(o);
            let c = {};
            n.headers.forEach((t, e) => {
              c[e.toLowerCase()] = t;
            });
            let h = await n.arrayBuffer(),
              f = null == h ? null : new Uint8Array(h);
            return {
              statusCode: n.status,
              statusMessage: n.statusText,
              headers: c,
              body: f,
            };
          };
        }
        f({});
        let d = f(),
          g = RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
          p = RegExp("^ipfs://(ipfs/)?(.*)$", "i"),
          m = !1;
        async function y(t, e) {
          try {
            var r;
            let e = t.match(g);
            if (!e) throw Error("invalid data");
            return new Z(
              200,
              "OK",
              { "content-type": e[1] || "text/plain" },
              e[2]
                ? o(e[3])
                : ((r = e[3]),
                  (0, h.toUtf8Bytes)(
                    r.replace(/%([0-9a-f][0-9a-f])/gi, (t, e) =>
                      String.fromCharCode(parseInt(e, 16))
                    )
                  ))
            );
          } catch (e) {
            return new Z(
              599,
              "BAD REQUEST (invalid data: URI)",
              {},
              null,
              new Q(t)
            );
          }
        }
        function A(t) {
          return async function (e, r) {
            try {
              let r = e.match(p);
              if (!r) throw Error("invalid link");
              return new Q("".concat(t).concat(r[2]));
            } catch (t) {
              return new Z(
                599,
                "BAD REQUEST (invalid IPFS URI)",
                {},
                null,
                new Q(e)
              );
            }
          };
        }
        let w = { data: y, ipfs: A("https://gateway.ipfs.io/ipfs/") },
          b = new WeakMap();
        var E = new WeakMap(),
          _ = new WeakMap();
        class x {
          addListener(t) {
            (0, u.assert)(
              !(0, e._)(this, _),
              "singal already cancelled",
              "UNSUPPORTED_OPERATION",
              { operation: "fetchCancelSignal.addCancelListener" }
            ),
              (0, e._)(this, E).push(t);
          }
          get cancelled() {
            return (0, e._)(this, _);
          }
          checkSignal() {
            (0, u.assert)(!this.cancelled, "cancelled", "CANCELLED", {});
          }
          constructor(t) {
            (0, r._)(this, E, { writable: !0, value: void 0 }),
              (0, r._)(this, _, { writable: !0, value: void 0 }),
              (0, n._)(this, E, []),
              (0, n._)(this, _, !1),
              b.set(t, () => {
                if (!(0, e._)(this, _)) {
                  for (let t of ((0, n._)(this, _, !0), (0, e._)(this, E)))
                    setTimeout(() => {
                      t();
                    }, 0);
                  (0, n._)(this, E, []);
                }
              });
          }
        }
        function B(t) {
          if (null == t) throw Error("missing signal; should not happen");
          return t.checkSignal(), t;
        }
        var k = new WeakMap(),
          P = new WeakMap(),
          N = new WeakMap(),
          I = new WeakMap(),
          C = new WeakMap(),
          O = new WeakMap(),
          R = new WeakMap(),
          T = new WeakMap(),
          S = new WeakMap(),
          U = new WeakMap(),
          F = new WeakMap(),
          D = new WeakMap(),
          L = new WeakMap(),
          M = new WeakMap(),
          G = new WeakMap(),
          H = new WeakSet();
        class Q {
          get url() {
            return (0, e._)(this, O);
          }
          set url(t) {
            (0, n._)(this, O, String(t));
          }
          get body() {
            return null == (0, e._)(this, R)
              ? null
              : new Uint8Array((0, e._)(this, R));
          }
          set body(t) {
            if (null == t) (0, n._)(this, R, void 0), (0, n._)(this, T, void 0);
            else if ("string" == typeof t)
              (0, n._)(this, R, (0, h.toUtf8Bytes)(t)),
                (0, n._)(this, T, "text/plain");
            else if (t instanceof Uint8Array)
              (0, n._)(this, R, t),
                (0, n._)(this, T, "application/octet-stream");
            else if ("object" == typeof t)
              (0, n._)(this, R, (0, h.toUtf8Bytes)(JSON.stringify(t))),
                (0, n._)(this, T, "application/json");
            else throw Error("invalid body");
          }
          hasBody() {
            return null != (0, e._)(this, R);
          }
          get method() {
            return (0, e._)(this, I)
              ? (0, e._)(this, I)
              : this.hasBody()
              ? "POST"
              : "GET";
          }
          set method(t) {
            null == t && (t = ""), (0, n._)(this, I, String(t).toUpperCase());
          }
          get headers() {
            let t = Object.assign({}, (0, e._)(this, N));
            return (
              (0, e._)(this, S) &&
                (t.authorization = "Basic ".concat(
                  l((0, h.toUtf8Bytes)((0, e._)(this, S)))
                )),
              this.allowGzip && (t["accept-encoding"] = "gzip"),
              null == t["content-type"] &&
                (0, e._)(this, T) &&
                (t["content-type"] = (0, e._)(this, T)),
              this.body && (t["content-length"] = String(this.body.length)),
              t
            );
          }
          getHeader(t) {
            return this.headers[t.toLowerCase()];
          }
          setHeader(t, r) {
            (0, e._)(this, N)[String(t).toLowerCase()] = String(r);
          }
          clearHeaders() {
            (0, n._)(this, N, {});
          }
          [Symbol.iterator]() {
            let t = this.headers,
              e = Object.keys(t),
              r = 0;
            return {
              next: () => {
                if (r < e.length) {
                  let n = e[r++];
                  return { value: [n, t[n]], done: !1 };
                }
                return { value: void 0, done: !0 };
              },
            };
          }
          get credentials() {
            return (0, e._)(this, S) || null;
          }
          setCredentials(t, e) {
            (0, u.assertArgument)(
              !t.match(/:/),
              "invalid basic authentication username",
              "username",
              "[REDACTED]"
            ),
              (0, n._)(this, S, "".concat(t, ":").concat(e));
          }
          get allowGzip() {
            return (0, e._)(this, P);
          }
          set allowGzip(t) {
            (0, n._)(this, P, !!t);
          }
          get allowInsecureAuthentication() {
            return !!(0, e._)(this, k);
          }
          set allowInsecureAuthentication(t) {
            (0, n._)(this, k, !!t);
          }
          get timeout() {
            return (0, e._)(this, C);
          }
          set timeout(t) {
            (0, u.assertArgument)(
              t >= 0,
              "timeout must be non-zero",
              "timeout",
              t
            ),
              (0, n._)(this, C, t);
          }
          get preflightFunc() {
            return (0, e._)(this, U) || null;
          }
          set preflightFunc(t) {
            (0, n._)(this, U, t);
          }
          get processFunc() {
            return (0, e._)(this, F) || null;
          }
          set processFunc(t) {
            (0, n._)(this, F, t);
          }
          get retryFunc() {
            return (0, e._)(this, D) || null;
          }
          set retryFunc(t) {
            (0, n._)(this, D, t);
          }
          get getUrlFunc() {
            return (0, e._)(this, G) || d;
          }
          set getUrlFunc(t) {
            (0, n._)(this, G, t);
          }
          toString() {
            return "<FetchRequest method="
              .concat(JSON.stringify(this.method), " url=")
              .concat(JSON.stringify(this.url), " headers=")
              .concat(JSON.stringify(this.headers), " body=")
              .concat(
                (0, e._)(this, R) ? (0, a.hexlify)((0, e._)(this, R)) : "null",
                ">"
              );
          }
          setThrottleParams(t) {
            null != t.slotInterval &&
              ((0, e._)(this, M).slotInterval = t.slotInterval),
              null != t.maxAttempts &&
                ((0, e._)(this, M).maxAttempts = t.maxAttempts);
          }
          send() {
            return (
              (0, u.assert)(
                null == (0, e._)(this, L),
                "request already sent",
                "UNSUPPORTED_OPERATION",
                { operation: "fetchRequest.send" }
              ),
              (0, n._)(this, L, new x(this)),
              (0, i._)(this, H, z).call(
                this,
                0,
                Y() + this.timeout,
                0,
                this,
                new Z(0, "", {}, null, this)
              )
            );
          }
          cancel() {
            (0, u.assert)(
              null != (0, e._)(this, L),
              "request has not been sent",
              "UNSUPPORTED_OPERATION",
              { operation: "fetchRequest.cancel" }
            );
            let t = b.get(this);
            if (!t) throw Error("missing signal; should not happen");
            t();
          }
          redirect(t) {
            let r = this.url.split(":")[0].toLowerCase(),
              i = t.split(":")[0].toLowerCase();
            (0, u.assert)(
              "GET" === this.method &&
                ("https" !== r || "http" !== i) &&
                t.match(/^https?:/),
              "unsupported redirect",
              "UNSUPPORTED_OPERATION",
              {
                operation: "redirect("
                  .concat(this.method, " ")
                  .concat(JSON.stringify(this.url), " => ")
                  .concat(JSON.stringify(t), ")"),
              }
            );
            let s = new Q(t);
            return (
              (s.method = "GET"),
              (s.allowGzip = this.allowGzip),
              (s.timeout = this.timeout),
              (0, n._)(s, N, Object.assign({}, (0, e._)(this, N))),
              (0, e._)(this, R) &&
                (0, n._)(s, R, new Uint8Array((0, e._)(this, R))),
              (0, n._)(s, T, (0, e._)(this, T)),
              s
            );
          }
          clone() {
            let t = new Q(this.url);
            return (
              (0, n._)(t, I, (0, e._)(this, I)),
              (0, e._)(this, R) && (0, n._)(t, R, (0, e._)(this, R)),
              (0, n._)(t, T, (0, e._)(this, T)),
              (0, n._)(t, N, Object.assign({}, (0, e._)(this, N))),
              (0, n._)(t, S, (0, e._)(this, S)),
              this.allowGzip && (t.allowGzip = !0),
              (t.timeout = this.timeout),
              this.allowInsecureAuthentication &&
                (t.allowInsecureAuthentication = !0),
              (0, n._)(t, U, (0, e._)(this, U)),
              (0, n._)(t, F, (0, e._)(this, F)),
              (0, n._)(t, D, (0, e._)(this, D)),
              (0, n._)(t, M, Object.assign({}, (0, e._)(this, M))),
              (0, n._)(t, G, (0, e._)(this, G)),
              t
            );
          }
          static lockConfig() {
            m = !0;
          }
          static getGateway(t) {
            return w[t.toLowerCase()] || null;
          }
          static registerGateway(t, e) {
            if ("http" === (t = t.toLowerCase()) || "https" === t)
              throw Error(
                "cannot intercept ".concat(t, "; use registerGetUrl")
              );
            if (m) throw Error("gateways locked");
            w[t] = e;
          }
          static registerGetUrl(t) {
            if (m) throw Error("gateways locked");
            d = t;
          }
          static createGetUrlFunc(t) {
            return f(t);
          }
          static createDataGateway() {
            return y;
          }
          static createIpfsGatewayFunc(t) {
            return A(t);
          }
          constructor(t) {
            (0, s._)(this, H),
              (0, r._)(this, k, { writable: !0, value: void 0 }),
              (0, r._)(this, P, { writable: !0, value: void 0 }),
              (0, r._)(this, N, { writable: !0, value: void 0 }),
              (0, r._)(this, I, { writable: !0, value: void 0 }),
              (0, r._)(this, C, { writable: !0, value: void 0 }),
              (0, r._)(this, O, { writable: !0, value: void 0 }),
              (0, r._)(this, R, { writable: !0, value: void 0 }),
              (0, r._)(this, T, { writable: !0, value: void 0 }),
              (0, r._)(this, S, { writable: !0, value: void 0 }),
              (0, r._)(this, U, { writable: !0, value: void 0 }),
              (0, r._)(this, F, { writable: !0, value: void 0 }),
              (0, r._)(this, D, { writable: !0, value: void 0 }),
              (0, r._)(this, L, { writable: !0, value: void 0 }),
              (0, r._)(this, M, { writable: !0, value: void 0 }),
              (0, r._)(this, G, { writable: !0, value: void 0 }),
              (0, n._)(this, O, String(t)),
              (0, n._)(this, k, !1),
              (0, n._)(this, P, !0),
              (0, n._)(this, N, {}),
              (0, n._)(this, I, ""),
              (0, n._)(this, C, 3e5),
              (0, n._)(this, M, { slotInterval: 250, maxAttempts: 12 }),
              (0, n._)(this, G, null);
          }
        }
        async function z(t, r, n, s, a) {
          var o, l, c, h;
          if (t >= (0, e._)(this, M).maxAttempts)
            return a.makeServerError("exceeded maximum retry limit");
          (0, u.assert)(Y() <= r, "timeout", "TIMEOUT", {
            operation: "request.send",
            reason: "timeout",
            request: s,
          }),
            n > 0 && (await ((h = n), new Promise((t) => setTimeout(t, h))));
          let f = this.clone(),
            d = (f.url.split(":")[0] || "").toLowerCase();
          if (d in w) {
            let t = await w[d](f.url, B((0, e._)(s, L)));
            if (t instanceof Z) {
              let r = t;
              if (this.processFunc) {
                B((0, e._)(s, L));
                try {
                  r = await this.processFunc(f, r);
                } catch (t) {
                  (null == t.throttle || "number" != typeof t.stall) &&
                    r
                      .makeServerError("error in post-processing function", t)
                      .assertOk();
                }
              }
              return r;
            }
            f = t;
          }
          this.preflightFunc && (f = await this.preflightFunc(f));
          let g = await this.getUrlFunc(f, B((0, e._)(s, L))),
            p = new Z(g.statusCode, g.statusMessage, g.headers, g.body, s);
          if (301 === p.statusCode || 302 === p.statusCode) {
            try {
              let e = p.headers.location || "";
              return (0, i._)((o = f.redirect(e)), H, z).call(
                o,
                t + 1,
                r,
                0,
                s,
                p
              );
            } catch (t) {}
            return p;
          }
          if (
            429 === p.statusCode &&
            (null == this.retryFunc || (await this.retryFunc(f, p, t)))
          ) {
            let n = p.headers["retry-after"],
              a =
                (0, e._)(this, M).slotInterval *
                Math.trunc(Math.random() * Math.pow(2, t));
            return (
              "string" == typeof n &&
                n.match(/^[1-9][0-9]*$/) &&
                (a = parseInt(n)),
              (0, i._)((l = f.clone()), H, z).call(l, t + 1, r, a, s, p)
            );
          }
          if (this.processFunc) {
            B((0, e._)(s, L));
            try {
              p = await this.processFunc(f, p);
            } catch (a) {
              (null == a.throttle || "number" != typeof a.stall) &&
                p
                  .makeServerError("error in post-processing function", a)
                  .assertOk();
              let n =
                (0, e._)(this, M).slotInterval *
                Math.trunc(Math.random() * Math.pow(2, t));
              return (
                a.stall >= 0 && (n = a.stall),
                (0, i._)((c = f.clone()), H, z).call(c, t + 1, r, n, s, p)
              );
            }
          }
          return p;
        }
        var W = new WeakMap(),
          V = new WeakMap(),
          j = new WeakMap(),
          J = new WeakMap(),
          K = new WeakMap(),
          q = new WeakMap();
        class Z {
          toString() {
            return "<FetchResponse status="
              .concat(this.statusCode, " body=")
              .concat(
                (0, e._)(this, J) ? (0, a.hexlify)((0, e._)(this, J)) : "null",
                ">"
              );
          }
          get statusCode() {
            return (0, e._)(this, W);
          }
          get statusMessage() {
            return (0, e._)(this, V);
          }
          get headers() {
            return Object.assign({}, (0, e._)(this, j));
          }
          get body() {
            return null == (0, e._)(this, J)
              ? null
              : new Uint8Array((0, e._)(this, J));
          }
          get bodyText() {
            try {
              return null == (0, e._)(this, J)
                ? ""
                : (0, h.toUtf8String)((0, e._)(this, J));
            } catch (t) {
              (0, u.assert)(
                !1,
                "response body is not valid UTF-8 data",
                "UNSUPPORTED_OPERATION",
                { operation: "bodyText", info: { response: this } }
              );
            }
          }
          get bodyJson() {
            try {
              return JSON.parse(this.bodyText);
            } catch (t) {
              (0, u.assert)(
                !1,
                "response body is not valid JSON",
                "UNSUPPORTED_OPERATION",
                { operation: "bodyJson", info: { response: this } }
              );
            }
          }
          [Symbol.iterator]() {
            let t = this.headers,
              e = Object.keys(t),
              r = 0;
            return {
              next: () => {
                if (r < e.length) {
                  let n = e[r++];
                  return { value: [n, t[n]], done: !1 };
                }
                return { value: void 0, done: !0 };
              },
            };
          }
          makeServerError(t, r) {
            let i;
            t
              ? (i = "CLIENT ESCALATED SERVER ERROR ("
                  .concat(this.statusCode, " ")
                  .concat(this.statusMessage, "; ")
                  .concat(t, ")"))
              : ((t = ""
                  .concat(this.statusCode, " ")
                  .concat(this.statusMessage)),
                (i = "CLIENT ESCALATED SERVER ERROR (".concat(t, ")")));
            let s = new Z(
              599,
              i,
              this.headers,
              this.body,
              (0, e._)(this, K) || void 0
            );
            return (0, n._)(s, q, { message: t, error: r }), s;
          }
          throwThrottleError(t, e) {
            null == e
              ? (e = -1)
              : (0, u.assertArgument)(
                  Number.isInteger(e) && e >= 0,
                  "invalid stall timeout",
                  "stall",
                  e
                );
            let r = Error(t || "throttling requests");
            throw ((0, c.defineProperties)(r, { stall: e, throttle: !0 }), r);
          }
          getHeader(t) {
            return this.headers[t.toLowerCase()];
          }
          hasBody() {
            return null != (0, e._)(this, J);
          }
          get request() {
            return (0, e._)(this, K);
          }
          ok() {
            return (
              "" === (0, e._)(this, q).message &&
              this.statusCode >= 200 &&
              this.statusCode < 300
            );
          }
          assertOk() {
            if (this.ok()) return;
            let { message: t, error: r } = (0, e._)(this, q);
            "" === t &&
              (t = "server response "
                .concat(this.statusCode, " ")
                .concat(this.statusMessage));
            let n = null;
            this.request && (n = this.request.url);
            let i = null;
            try {
              (0, e._)(this, J) && (i = (0, h.toUtf8String)((0, e._)(this, J)));
            } catch (t) {}
            (0, u.assert)(!1, t, "SERVER_ERROR", {
              request: this.request || "unknown request",
              response: this,
              error: r,
              info: {
                requestUrl: n,
                responseBody: i,
                responseStatus: ""
                  .concat(this.statusCode, " ")
                  .concat(this.statusMessage),
              },
            });
          }
          constructor(t, e, i, s, a) {
            (0, r._)(this, W, { writable: !0, value: void 0 }),
              (0, r._)(this, V, { writable: !0, value: void 0 }),
              (0, r._)(this, j, { writable: !0, value: void 0 }),
              (0, r._)(this, J, { writable: !0, value: void 0 }),
              (0, r._)(this, K, { writable: !0, value: void 0 }),
              (0, r._)(this, q, { writable: !0, value: void 0 }),
              (0, n._)(this, W, t),
              (0, n._)(this, V, e),
              (0, n._)(
                this,
                j,
                Object.keys(i).reduce(
                  (t, e) => ((t[e.toLowerCase()] = String(i[e])), t),
                  {}
                )
              ),
              (0, n._)(this, J, null == s ? null : new Uint8Array(s)),
              (0, n._)(this, K, a || null),
              (0, n._)(this, q, { message: "" });
          }
        }
        function Y() {
          return new Date().getTime();
        }
      },
      [665212],
    ],
    17721: (t) => {
      "use strict";
      t.s({ ZeroAddress: () => e });
      let e = "0x0000000000000000000000000000000000000000";
    },
    328282: (t) => {
      "use strict";
      t.s({
        ErrorDescription: () => w,
        Indexed: () => b,
        Interface: () => C,
        LogDescription: () => y,
        TransactionDescription: () => A,
      });
      var e = t.i(300522),
        r = t.i(216788),
        n = t.i(725039),
        i = t.i(52992),
        s = t.i(153525),
        a = t.i(825285),
        o = t.i(749401),
        l = t.i(721506),
        u = t.i(713514),
        c = t.i(219223),
        h = t.i(551749),
        f = t.i(13517),
        d = t.i(468265),
        g = t.i(99994),
        p = t.i(704996),
        m = t.i(267528);
      class y {
        constructor(t, e, r) {
          (0, a._)(this, "fragment", void 0),
            (0, a._)(this, "name", void 0),
            (0, a._)(this, "signature", void 0),
            (0, a._)(this, "topic", void 0),
            (0, a._)(this, "args", void 0);
          let n = t.name,
            i = t.format();
          (0, h.defineProperties)(this, {
            fragment: t,
            name: n,
            signature: i,
            topic: e,
            args: r,
          });
        }
      }
      class A {
        constructor(t, e, r, n) {
          (0, a._)(this, "fragment", void 0),
            (0, a._)(this, "name", void 0),
            (0, a._)(this, "args", void 0),
            (0, a._)(this, "signature", void 0),
            (0, a._)(this, "selector", void 0),
            (0, a._)(this, "value", void 0);
          let i = t.name,
            s = t.format();
          (0, h.defineProperties)(this, {
            fragment: t,
            name: i,
            args: r,
            signature: s,
            selector: e,
            value: n,
          });
        }
      }
      class w {
        constructor(t, e, r) {
          (0, a._)(this, "fragment", void 0),
            (0, a._)(this, "name", void 0),
            (0, a._)(this, "args", void 0),
            (0, a._)(this, "signature", void 0),
            (0, a._)(this, "selector", void 0);
          let n = t.name,
            i = t.format();
          (0, h.defineProperties)(this, {
            fragment: t,
            name: n,
            args: r,
            signature: i,
            selector: e,
          });
        }
      }
      class b {
        static isIndexed(t) {
          return !!(t && t._isIndexed);
        }
        constructor(t) {
          (0, a._)(this, "hash", void 0),
            (0, a._)(this, "_isIndexed", void 0),
            (0, h.defineProperties)(this, { hash: t, _isIndexed: !0 });
        }
      }
      let E = {
          0: "generic panic",
          1: "assert(false)",
          17: "arithmetic overflow",
          18: "division or modulo by zero",
          33: "enum overflow",
          34: "invalid encoded storage byte array accessed",
          49: "out-of-bounds array access; popping on an empty array",
          50: "out-of-bounds access of an array or bytesN",
          65: "out of memory",
          81: "uninitialized function",
        },
        _ = {
          "0x08c379a0": {
            signature: "Error(string)",
            name: "Error",
            inputs: ["string"],
            reason: (t) =>
              "reverted with reason string ".concat(JSON.stringify(t)),
          },
          "0x4e487b71": {
            signature: "Panic(uint256)",
            name: "Panic",
            inputs: ["uint256"],
            reason: (t) => {
              let e = "unknown panic code";
              return (
                t >= 0 && t <= 255 && E[t.toString()] && (e = E[t.toString()]),
                "reverted with panic code 0x"
                  .concat(t.toString(16), " (")
                  .concat(e, ")")
              );
            },
          },
        };
      var x = new WeakMap(),
        B = new WeakMap(),
        k = new WeakMap(),
        P = new WeakMap(),
        N = new WeakSet(),
        I = new WeakSet();
      class C {
        format(t) {
          let e = t ? "minimal" : "full";
          return this.fragments.map((t) => t.format(e));
        }
        formatJson() {
          return JSON.stringify(
            this.fragments
              .map((t) => t.format("json"))
              .map((t) => JSON.parse(t))
          );
        }
        getAbiCoder() {
          return d.AbiCoder.defaultAbiCoder();
        }
        getFunctionName(t) {
          let e = (0, i._)(this, N, O).call(this, t, null, !1);
          return (
            (0, f.assertArgument)(e, "no matching function", "key", t), e.name
          );
        }
        hasFunction(t) {
          return !!(0, i._)(this, N, O).call(this, t, null, !1);
        }
        getFunction(t, e) {
          return (0, i._)(this, N, O).call(this, t, e || null, !0);
        }
        forEachFunction(t) {
          let r = Array.from((0, e._)(this, k).keys());
          r.sort((t, e) => t.localeCompare(e));
          for (let n = 0; n < r.length; n++) {
            let i = r[n];
            t((0, e._)(this, k).get(i), n);
          }
        }
        getEventName(t) {
          let e = (0, i._)(this, I, R).call(this, t, null, !1);
          return (
            (0, f.assertArgument)(e, "no matching event", "key", t), e.name
          );
        }
        hasEvent(t) {
          return !!(0, i._)(this, I, R).call(this, t, null, !1);
        }
        getEvent(t, e) {
          return (0, i._)(this, I, R).call(this, t, e || null, !0);
        }
        forEachEvent(t) {
          let r = Array.from((0, e._)(this, B).keys());
          r.sort((t, e) => t.localeCompare(e));
          for (let n = 0; n < r.length; n++) {
            let i = r[n];
            t((0, e._)(this, B).get(i), n);
          }
        }
        getError(t, r) {
          if ((0, u.isHexString)(t)) {
            let r = t.toLowerCase();
            if (_[r]) return p.ErrorFragment.from(_[r].signature);
            for (let t of (0, e._)(this, x).values())
              if (r === t.selector) return t;
            return null;
          }
          if (-1 === t.indexOf("(")) {
            let r = [];
            for (let [n, i] of (0, e._)(this, x))
              n.split("(")[0] === t && r.push(i);
            if (0 === r.length)
              return "Error" === t
                ? p.ErrorFragment.from("error Error(string)")
                : "Panic" === t
                ? p.ErrorFragment.from("error Panic(uint256)")
                : null;
            if (r.length > 1) {
              let e = r.map((t) => JSON.stringify(t.format())).join(", ");
              (0, f.assertArgument)(
                !1,
                "ambiguous error description (i.e. ".concat(e, ")"),
                "name",
                t
              );
            }
            return r[0];
          }
          if ("Error(string)" === (t = p.ErrorFragment.from(t).format()))
            return p.ErrorFragment.from("error Error(string)");
          if ("Panic(uint256)" === t)
            return p.ErrorFragment.from("error Panic(uint256)");
          let n = (0, e._)(this, x).get(t);
          return n || null;
        }
        forEachError(t) {
          let r = Array.from((0, e._)(this, x).keys());
          r.sort((t, e) => t.localeCompare(e));
          for (let n = 0; n < r.length; n++) {
            let i = r[n];
            t((0, e._)(this, x).get(i), n);
          }
        }
        _decodeParams(t, r) {
          return (0, e._)(this, P).decode(t, r);
        }
        _encodeParams(t, r) {
          return (0, e._)(this, P).encode(t, r);
        }
        encodeDeploy(t) {
          return this._encodeParams(this.deploy.inputs, t || []);
        }
        decodeErrorResult(t, e) {
          if ("string" == typeof t) {
            let e = this.getError(t);
            (0, f.assertArgument)(e, "unknown error", "fragment", t), (t = e);
          }
          return (
            (0, f.assertArgument)(
              (0, u.dataSlice)(e, 0, 4) === t.selector,
              "data signature does not match error ".concat(t.name, "."),
              "data",
              e
            ),
            this._decodeParams(t.inputs, (0, u.dataSlice)(e, 4))
          );
        }
        encodeErrorResult(t, e) {
          if ("string" == typeof t) {
            let e = this.getError(t);
            (0, f.assertArgument)(e, "unknown error", "fragment", t), (t = e);
          }
          return (0, u.concat)([
            t.selector,
            this._encodeParams(t.inputs, e || []),
          ]);
        }
        decodeFunctionData(t, e) {
          if ("string" == typeof t) {
            let e = this.getFunction(t);
            (0, f.assertArgument)(e, "unknown function", "fragment", t),
              (t = e);
          }
          return (
            (0, f.assertArgument)(
              (0, u.dataSlice)(e, 0, 4) === t.selector,
              "data signature does not match function ".concat(t.name, "."),
              "data",
              e
            ),
            this._decodeParams(t.inputs, (0, u.dataSlice)(e, 4))
          );
        }
        encodeFunctionData(t, e) {
          if ("string" == typeof t) {
            let e = this.getFunction(t);
            (0, f.assertArgument)(e, "unknown function", "fragment", t),
              (t = e);
          }
          return (0, u.concat)([
            t.selector,
            this._encodeParams(t.inputs, e || []),
          ]);
        }
        decodeFunctionResult(t, r) {
          if ("string" == typeof t) {
            let e = this.getFunction(t);
            (0, f.assertArgument)(e, "unknown function", "fragment", t),
              (t = e);
          }
          let n = "invalid length for result data",
            i = (0, u.getBytesCopy)(r);
          if (i.length % 32 == 0)
            try {
              return (0, e._)(this, P).decode(t.outputs, i);
            } catch (t) {
              n = "could not decode result data";
            }
          (0, f.assert)(!1, n, "BAD_DATA", {
            value: (0, u.hexlify)(i),
            info: { method: t.name, signature: t.format() },
          });
        }
        makeError(t, r) {
          let n = (0, u.getBytes)(t, "data"),
            i = d.AbiCoder.getBuiltinCallException("call", r, n);
          if (
            i.message.startsWith("execution reverted (unknown custom error)")
          ) {
            let t = (0, u.hexlify)(n.slice(0, 4)),
              r = this.getError(t);
            if (r)
              try {
                let t = (0, e._)(this, P).decode(r.inputs, n.slice(4));
                (i.revert = { name: r.name, signature: r.format(), args: t }),
                  (i.reason = i.revert.signature),
                  (i.message = "execution reverted: ".concat(i.reason));
              } catch (t) {
                i.message =
                  "execution reverted (coult not decode custom error)";
              }
          }
          let s = this.parseTransaction(r);
          return (
            s &&
              (i.invocation = {
                method: s.name,
                signature: s.signature,
                args: s.args,
              }),
            i
          );
        }
        encodeFunctionResult(t, r) {
          if ("string" == typeof t) {
            let e = this.getFunction(t);
            (0, f.assertArgument)(e, "unknown function", "fragment", t),
              (t = e);
          }
          return (0, u.hexlify)((0, e._)(this, P).encode(t.outputs, r || []));
        }
        encodeFilterTopics(t, r) {
          if ("string" == typeof t) {
            let e = this.getEvent(t);
            (0, f.assertArgument)(e, "unknown event", "eventFragment", t),
              (t = e);
          }
          (0, f.assert)(
            r.length <= t.inputs.length,
            "too many arguments for ".concat(t.format()),
            "UNEXPECTED_ARGUMENT",
            { count: r.length, expectedCount: t.inputs.length }
          );
          let n = [];
          t.anonymous || n.push(t.topicHash);
          let i = (t, r) =>
            "string" === t.type
              ? (0, l.id)(r)
              : "bytes" === t.type
              ? (0, o.keccak256)((0, u.hexlify)(r))
              : ("bool" === t.type && "boolean" == typeof r
                  ? (r = r ? "0x01" : "0x00")
                  : t.type.match(/^u?int/)
                  ? (r = (0, c.toBeHex)(r))
                  : t.type.match(/^bytes/)
                  ? (r = (0, u.zeroPadBytes)(r, 32))
                  : "address" === t.type &&
                    (0, e._)(this, P).encode(["address"], [r]),
                (0, u.zeroPadValue)((0, u.hexlify)(r), 32));
          for (
            r.forEach((e, r) => {
              let s = t.inputs[r];
              if (!s.indexed)
                return void (0, f.assertArgument)(
                  null == e,
                  "cannot filter non-indexed parameters; must be null",
                  "contract." + s.name,
                  e
                );
              null == e
                ? n.push(null)
                : "array" === s.baseType || "tuple" === s.baseType
                ? (0, f.assertArgument)(
                    !1,
                    "filtering with tuples or arrays not supported",
                    "contract." + s.name,
                    e
                  )
                : Array.isArray(e)
                ? n.push(e.map((t) => i(s, t)))
                : n.push(i(s, e));
            });
            n.length && null === n[n.length - 1];

          )
            n.pop();
          return n;
        }
        encodeEventLog(t, r) {
          if ("string" == typeof t) {
            let e = this.getEvent(t);
            (0, f.assertArgument)(e, "unknown event", "eventFragment", t),
              (t = e);
          }
          let n = [],
            i = [],
            s = [];
          return (
            t.anonymous || n.push(t.topicHash),
            (0, f.assertArgument)(
              r.length === t.inputs.length,
              "event arguments/values mismatch",
              "values",
              r
            ),
            t.inputs.forEach((t, a) => {
              let u = r[a];
              if (t.indexed)
                if ("string" === t.type) n.push((0, l.id)(u));
                else if ("bytes" === t.type) n.push((0, o.keccak256)(u));
                else if ("tuple" === t.baseType || "array" === t.baseType)
                  throw Error("not implemented");
                else n.push((0, e._)(this, P).encode([t.type], [u]));
              else i.push(t), s.push(u);
            }),
            { data: (0, e._)(this, P).encode(i, s), topics: n }
          );
        }
        decodeEventLog(t, r, n) {
          if ("string" == typeof t) {
            let e = this.getEvent(t);
            (0, f.assertArgument)(e, "unknown event", "eventFragment", t),
              (t = e);
          }
          if (null != n && !t.anonymous) {
            let e = t.topicHash;
            (0, f.assertArgument)(
              (0, u.isHexString)(n[0], 32) && n[0].toLowerCase() === e,
              "fragment/topic mismatch",
              "topics[0]",
              n[0]
            ),
              (n = n.slice(1));
          }
          let i = [],
            s = [],
            a = [];
          t.inputs.forEach((t, e) => {
            t.indexed
              ? "string" === t.type ||
                "bytes" === t.type ||
                "tuple" === t.baseType ||
                "array" === t.baseType
                ? (i.push(p.ParamType.from({ type: "bytes32", name: t.name })),
                  a.push(!0))
                : (i.push(t), a.push(!1))
              : (s.push(t), a.push(!1));
          });
          let o =
              null != n ? (0, e._)(this, P).decode(i, (0, u.concat)(n)) : null,
            l = (0, e._)(this, P).decode(s, r, !0),
            c = [],
            h = [],
            d = 0,
            m = 0;
          return (
            t.inputs.forEach((t, e) => {
              let r = null;
              if (t.indexed)
                if (null == o) r = new b(null);
                else if (a[e]) r = new b(o[m++]);
                else
                  try {
                    r = o[m++];
                  } catch (t) {
                    r = t;
                  }
              else
                try {
                  r = l[d++];
                } catch (t) {
                  r = t;
                }
              c.push(r), h.push(t.name || null);
            }),
            g.Result.fromItems(c, h)
          );
        }
        parseTransaction(t) {
          let r = (0, u.getBytes)(t.data, "tx.data"),
            n = (0, c.getBigInt)(null != t.value ? t.value : 0, "tx.value"),
            i = this.getFunction((0, u.hexlify)(r.slice(0, 4)));
          if (!i) return null;
          let s = (0, e._)(this, P).decode(i.inputs, r.slice(4));
          return new A(i, i.selector, s, n);
        }
        parseCallResult(t) {
          throw Error("@TODO");
        }
        parseLog(t) {
          let e = this.getEvent(t.topics[0]);
          return !e || e.anonymous
            ? null
            : new y(e, e.topicHash, this.decodeEventLog(e, t.data, t.topics));
        }
        parseError(t) {
          let r = (0, u.hexlify)(t),
            n = this.getError((0, u.dataSlice)(r, 0, 4));
          if (!n) return null;
          let i = (0, e._)(this, P).decode(n.inputs, (0, u.dataSlice)(r, 4));
          return new w(n, n.selector, i);
        }
        static from(t) {
          return t instanceof C
            ? t
            : new C(
                "string" == typeof t
                  ? JSON.parse(t)
                  : "function" == typeof t.formatJson
                  ? t.formatJson()
                  : "function" == typeof t.format
                  ? t.format("json")
                  : t
              );
        }
        constructor(t) {
          (0, s._)(this, N),
            (0, s._)(this, I),
            (0, a._)(this, "fragments", void 0),
            (0, a._)(this, "deploy", void 0),
            (0, a._)(this, "fallback", void 0),
            (0, a._)(this, "receive", void 0),
            (0, r._)(this, x, { writable: !0, value: void 0 }),
            (0, r._)(this, B, { writable: !0, value: void 0 }),
            (0, r._)(this, k, { writable: !0, value: void 0 }),
            (0, r._)(this, P, { writable: !0, value: void 0 });
          let i = [];
          (i = "string" == typeof t ? JSON.parse(t) : t),
            (0, n._)(this, k, new Map()),
            (0, n._)(this, x, new Map()),
            (0, n._)(this, B, new Map());
          let o = [];
          for (let t of i)
            try {
              o.push(p.Fragment.from(t));
            } catch (e) {
              console.log(
                "[Warning] Invalid Fragment ".concat(JSON.stringify(t), ":"),
                e.message
              );
            }
          (0, h.defineProperties)(this, { fragments: Object.freeze(o) });
          let l = null,
            u = !1;
          (0, n._)(this, P, this.getAbiCoder()),
            this.fragments.forEach((t, r) => {
              let n;
              switch (t.type) {
                case "constructor":
                  if (this.deploy)
                    return void console.log(
                      "duplicate definition - constructor"
                    );
                  (0, h.defineProperties)(this, { deploy: t });
                  return;
                case "fallback":
                  0 === t.inputs.length
                    ? (u = !0)
                    : ((0, f.assertArgument)(
                        !l || t.payable !== l.payable,
                        "conflicting fallback fragments",
                        "fragments[".concat(r, "]"),
                        t
                      ),
                      (u = (l = t).payable));
                  return;
                case "function":
                  n = (0, e._)(this, k);
                  break;
                case "event":
                  n = (0, e._)(this, B);
                  break;
                case "error":
                  n = (0, e._)(this, x);
                  break;
                default:
                  return;
              }
              let i = t.format();
              n.has(i) || n.set(i, t);
            }),
            this.deploy ||
              (0, h.defineProperties)(this, {
                deploy: p.ConstructorFragment.from("constructor()"),
              }),
            (0, h.defineProperties)(this, { fallback: l, receive: u });
        }
      }
      function O(t, r, n) {
        if ((0, u.isHexString)(t)) {
          let r = t.toLowerCase();
          for (let t of (0, e._)(this, k).values())
            if (r === t.selector) return t;
          return null;
        }
        if (-1 === t.indexOf("(")) {
          let i = [];
          for (let [r, n] of (0, e._)(this, k))
            r.split("(")[0] === t && i.push(n);
          if (r) {
            let t = r.length > 0 ? r[r.length - 1] : null,
              e = r.length,
              n = !0;
            m.Typed.isTyped(t) && "overrides" === t.type && ((n = !1), e--);
            for (let t = i.length - 1; t >= 0; t--) {
              let r = i[t].inputs.length;
              r === e || (n && r === e - 1) || i.splice(t, 1);
            }
            for (let t = i.length - 1; t >= 0; t--) {
              let e = i[t].inputs;
              for (let n = 0; n < r.length; n++)
                if (m.Typed.isTyped(r[n])) {
                  if (n >= e.length) {
                    if ("overrides" === r[n].type) continue;
                    i.splice(t, 1);
                    break;
                  }
                  if (r[n].type !== e[n].baseType) {
                    i.splice(t, 1);
                    break;
                  }
                }
            }
          }
          if (1 === i.length && r && r.length !== i[0].inputs.length) {
            let t = r[r.length - 1];
            (null == t || Array.isArray(t) || "object" != typeof t) &&
              i.splice(0, 1);
          }
          if (0 === i.length) return null;
          if (i.length > 1 && n) {
            let e = i.map((t) => JSON.stringify(t.format())).join(", ");
            (0, f.assertArgument)(
              !1,
              "ambiguous function description (i.e. matches ".concat(e, ")"),
              "key",
              t
            );
          }
          return i[0];
        }
        let i = (0, e._)(this, k).get(p.FunctionFragment.from(t).format());
        return i || null;
      }
      function R(t, r, n) {
        if ((0, u.isHexString)(t)) {
          let r = t.toLowerCase();
          for (let t of (0, e._)(this, B).values())
            if (r === t.topicHash) return t;
          return null;
        }
        if (-1 === t.indexOf("(")) {
          let i = [];
          for (let [r, n] of (0, e._)(this, B))
            r.split("(")[0] === t && i.push(n);
          if (r) {
            for (let t = i.length - 1; t >= 0; t--)
              i[t].inputs.length < r.length && i.splice(t, 1);
            for (let t = i.length - 1; t >= 0; t--) {
              let e = i[t].inputs;
              for (let n = 0; n < r.length; n++)
                if (m.Typed.isTyped(r[n]) && r[n].type !== e[n].baseType) {
                  i.splice(t, 1);
                  break;
                }
            }
          }
          if (0 === i.length) return null;
          if (i.length > 1 && n) {
            let e = i.map((t) => JSON.stringify(t.format())).join(", ");
            (0, f.assertArgument)(
              !1,
              "ambiguous event description (i.e. matches ".concat(e, ")"),
              "key",
              t
            );
          }
          return i[0];
        }
        let i = (0, e._)(this, B).get(p.EventFragment.from(t).format());
        return i || null;
      }
    },
    693667: [
      (t) => {
        "use strict";
        t.s(
          {
            BaseContract: () => ta,
            Contract: () => tl,
            copyOverrides: () => K,
            resolveArgs: () => q,
          },
          693667
        );
        var e = t.i(300522),
          r = t.i(216788),
          n = t.i(725039),
          i = t.i(825285),
          s = t.i(328282),
          a = t.i(267528),
          o = t.i(104787);
        t.s(
          {
            Block: () => w,
            FeeData: () => m,
            Log: () => b,
            TransactionReceipt: () => _,
            TransactionResponse: () => B,
            copyRequest: () => y,
          },
          706747
        );
        var l = t.i(551749),
          u = t.i(219223),
          c = t.i(713514),
          h = t.i(13517),
          f = t.i(816028);
        let d = BigInt(0);
        function g(t) {
          return null == t ? null : t;
        }
        function p(t) {
          return null == t ? null : t.toString();
        }
        class m {
          toJSON() {
            let {
              gasPrice: t,
              maxFeePerGas: e,
              maxPriorityFeePerGas: r,
            } = this;
            return {
              _type: "FeeData",
              gasPrice: p(t),
              maxFeePerGas: p(e),
              maxPriorityFeePerGas: p(r),
            };
          }
          constructor(t, e, r) {
            (0, i._)(this, "gasPrice", void 0),
              (0, i._)(this, "maxFeePerGas", void 0),
              (0, i._)(this, "maxPriorityFeePerGas", void 0),
              (0, l.defineProperties)(this, {
                gasPrice: g(t),
                maxFeePerGas: g(e),
                maxPriorityFeePerGas: g(r),
              });
          }
        }
        function y(t) {
          let e = {};
          for (let r of (t.to && (e.to = t.to),
          t.from && (e.from = t.from),
          t.data && (e.data = (0, c.hexlify)(t.data)),
          "chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(
            /,/
          )))
            r in t &&
              null != t[r] &&
              (e[r] = (0, u.getBigInt)(t[r], "request.".concat(r)));
          for (let r of "type,nonce".split(/,/))
            r in t &&
              null != t[r] &&
              (e[r] = (0, u.getNumber)(t[r], "request.".concat(r)));
          return (
            t.accessList && (e.accessList = (0, f.accessListify)(t.accessList)),
            t.authorizationList &&
              (e.authorizationList = t.authorizationList.slice()),
            "blockTag" in t && (e.blockTag = t.blockTag),
            "enableCcipRead" in t && (e.enableCcipRead = !!t.enableCcipRead),
            "customData" in t && (e.customData = t.customData),
            "blobVersionedHashes" in t &&
              t.blobVersionedHashes &&
              (e.blobVersionedHashes = t.blobVersionedHashes.slice()),
            "kzg" in t && (e.kzg = t.kzg),
            "blobs" in t &&
              t.blobs &&
              (e.blobs = t.blobs.map((t) =>
                (0, c.isBytesLike)(t) ? (0, c.hexlify)(t) : Object.assign({}, t)
              )),
            e
          );
        }
        var A = new WeakMap();
        class w {
          get transactions() {
            return (0, e._)(this, A).map((t) =>
              "string" == typeof t ? t : t.hash
            );
          }
          get prefetchedTransactions() {
            let t = (0, e._)(this, A).slice();
            return 0 === t.length
              ? []
              : ((0, h.assert)(
                  "object" == typeof t[0],
                  "transactions were not prefetched with block request",
                  "UNSUPPORTED_OPERATION",
                  { operation: "transactionResponses()" }
                ),
                t);
          }
          toJSON() {
            let {
              baseFeePerGas: t,
              difficulty: e,
              extraData: r,
              gasLimit: n,
              gasUsed: i,
              hash: s,
              miner: a,
              prevRandao: o,
              nonce: l,
              number: u,
              parentHash: c,
              parentBeaconBlockRoot: h,
              stateRoot: f,
              receiptsRoot: d,
              timestamp: g,
              transactions: m,
            } = this;
            return {
              _type: "Block",
              baseFeePerGas: p(t),
              difficulty: p(e),
              extraData: r,
              gasLimit: p(n),
              gasUsed: p(i),
              blobGasUsed: p(this.blobGasUsed),
              excessBlobGas: p(this.excessBlobGas),
              hash: s,
              miner: a,
              prevRandao: o,
              nonce: l,
              number: u,
              parentHash: c,
              timestamp: g,
              parentBeaconBlockRoot: h,
              stateRoot: f,
              receiptsRoot: d,
              transactions: m,
            };
          }
          [Symbol.iterator]() {
            let t = 0,
              e = this.transactions;
            return {
              next: () =>
                t < this.length
                  ? { value: e[t++], done: !1 }
                  : { value: void 0, done: !0 },
            };
          }
          get length() {
            return (0, e._)(this, A).length;
          }
          get date() {
            return null == this.timestamp
              ? null
              : new Date(1e3 * this.timestamp);
          }
          async getTransaction(t) {
            let r;
            if ("number" == typeof t) r = (0, e._)(this, A)[t];
            else {
              let n = t.toLowerCase();
              for (let t of (0, e._)(this, A))
                if ("string" == typeof t) {
                  if (t !== n) continue;
                  r = t;
                  break;
                } else {
                  if (t.hash !== n) continue;
                  r = t;
                  break;
                }
            }
            if (null == r) throw Error("no such tx");
            return "string" == typeof r
              ? await this.provider.getTransaction(r)
              : r;
          }
          getPrefetchedTransaction(t) {
            let e = this.prefetchedTransactions;
            if ("number" == typeof t) return e[t];
            for (let r of ((t = t.toLowerCase()), e))
              if (r.hash === t) return r;
            (0, h.assertArgument)(
              !1,
              "no matching transaction",
              "indexOrHash",
              t
            );
          }
          isMined() {
            return !!this.hash;
          }
          isLondon() {
            return !!this.baseFeePerGas;
          }
          orphanedEvent() {
            var t;
            if (!this.isMined()) throw Error("");
            return (
              (t = this),
              { orphan: "drop-block", hash: t.hash, number: t.number }
            );
          }
          constructor(t, e) {
            (0, i._)(this, "provider", void 0),
              (0, i._)(this, "number", void 0),
              (0, i._)(this, "hash", void 0),
              (0, i._)(this, "timestamp", void 0),
              (0, i._)(this, "parentHash", void 0),
              (0, i._)(this, "parentBeaconBlockRoot", void 0),
              (0, i._)(this, "nonce", void 0),
              (0, i._)(this, "difficulty", void 0),
              (0, i._)(this, "gasLimit", void 0),
              (0, i._)(this, "gasUsed", void 0),
              (0, i._)(this, "stateRoot", void 0),
              (0, i._)(this, "receiptsRoot", void 0),
              (0, i._)(this, "blobGasUsed", void 0),
              (0, i._)(this, "excessBlobGas", void 0),
              (0, i._)(this, "miner", void 0),
              (0, i._)(this, "prevRandao", void 0),
              (0, i._)(this, "extraData", void 0),
              (0, i._)(this, "baseFeePerGas", void 0),
              (0, r._)(this, A, { writable: !0, value: void 0 }),
              (0, n._)(
                this,
                A,
                t.transactions.map((t) =>
                  "string" != typeof t ? new B(t, e) : t
                )
              ),
              (0, l.defineProperties)(this, {
                provider: e,
                hash: g(t.hash),
                number: t.number,
                timestamp: t.timestamp,
                parentHash: t.parentHash,
                parentBeaconBlockRoot: t.parentBeaconBlockRoot,
                nonce: t.nonce,
                difficulty: t.difficulty,
                gasLimit: t.gasLimit,
                gasUsed: t.gasUsed,
                blobGasUsed: t.blobGasUsed,
                excessBlobGas: t.excessBlobGas,
                miner: t.miner,
                prevRandao: g(t.prevRandao),
                extraData: t.extraData,
                baseFeePerGas: g(t.baseFeePerGas),
                stateRoot: t.stateRoot,
                receiptsRoot: t.receiptsRoot,
              });
          }
        }
        class b {
          toJSON() {
            let {
              address: t,
              blockHash: e,
              blockNumber: r,
              data: n,
              index: i,
              removed: s,
              topics: a,
              transactionHash: o,
              transactionIndex: l,
            } = this;
            return {
              _type: "log",
              address: t,
              blockHash: e,
              blockNumber: r,
              data: n,
              index: i,
              removed: s,
              topics: a,
              transactionHash: o,
              transactionIndex: l,
            };
          }
          async getBlock() {
            let t = await this.provider.getBlock(this.blockHash);
            return (
              (0, h.assert)(
                !!t,
                "failed to find transaction",
                "UNKNOWN_ERROR",
                {}
              ),
              t
            );
          }
          async getTransaction() {
            let t = await this.provider.getTransaction(this.transactionHash);
            return (
              (0, h.assert)(
                !!t,
                "failed to find transaction",
                "UNKNOWN_ERROR",
                {}
              ),
              t
            );
          }
          async getTransactionReceipt() {
            let t = await this.provider.getTransactionReceipt(
              this.transactionHash
            );
            return (
              (0, h.assert)(
                !!t,
                "failed to find transaction receipt",
                "UNKNOWN_ERROR",
                {}
              ),
              t
            );
          }
          removedEvent() {
            var t;
            return (
              (t = this),
              {
                orphan: "drop-log",
                log: {
                  transactionHash: t.transactionHash,
                  blockHash: t.blockHash,
                  blockNumber: t.blockNumber,
                  address: t.address,
                  data: t.data,
                  topics: Object.freeze(t.topics.slice()),
                  index: t.index,
                },
              }
            );
          }
          constructor(t, e) {
            (0, i._)(this, "provider", void 0),
              (0, i._)(this, "transactionHash", void 0),
              (0, i._)(this, "blockHash", void 0),
              (0, i._)(this, "blockNumber", void 0),
              (0, i._)(this, "removed", void 0),
              (0, i._)(this, "address", void 0),
              (0, i._)(this, "data", void 0),
              (0, i._)(this, "topics", void 0),
              (0, i._)(this, "index", void 0),
              (0, i._)(this, "transactionIndex", void 0),
              (this.provider = e);
            let r = Object.freeze(t.topics.slice());
            (0, l.defineProperties)(this, {
              transactionHash: t.transactionHash,
              blockHash: t.blockHash,
              blockNumber: t.blockNumber,
              removed: t.removed,
              address: t.address,
              data: t.data,
              topics: r,
              index: t.index,
              transactionIndex: t.transactionIndex,
            });
          }
        }
        var E = new WeakMap();
        class _ {
          get logs() {
            return (0, e._)(this, E);
          }
          toJSON() {
            let {
              to: t,
              from: e,
              contractAddress: r,
              hash: n,
              index: i,
              blockHash: s,
              blockNumber: a,
              logsBloom: o,
              logs: l,
              status: u,
              root: c,
            } = this;
            return {
              _type: "TransactionReceipt",
              blockHash: s,
              blockNumber: a,
              contractAddress: r,
              cumulativeGasUsed: p(this.cumulativeGasUsed),
              from: e,
              gasPrice: p(this.gasPrice),
              blobGasUsed: p(this.blobGasUsed),
              blobGasPrice: p(this.blobGasPrice),
              gasUsed: p(this.gasUsed),
              hash: n,
              index: i,
              logs: l,
              logsBloom: o,
              root: c,
              status: u,
              to: t,
            };
          }
          get length() {
            return this.logs.length;
          }
          [Symbol.iterator]() {
            let t = 0;
            return {
              next: () =>
                t < this.length
                  ? { value: this.logs[t++], done: !1 }
                  : { value: void 0, done: !0 },
            };
          }
          get fee() {
            return this.gasUsed * this.gasPrice;
          }
          async getBlock() {
            let t = await this.provider.getBlock(this.blockHash);
            if (null == t) throw Error("TODO");
            return t;
          }
          async getTransaction() {
            let t = await this.provider.getTransaction(this.hash);
            if (null == t) throw Error("TODO");
            return t;
          }
          async getResult() {
            return await this.provider.getTransactionResult(this.hash);
          }
          async confirmations() {
            return (
              (await this.provider.getBlockNumber()) - this.blockNumber + 1
            );
          }
          removedEvent() {
            return P(this);
          }
          reorderedEvent(t) {
            return (
              (0, h.assert)(
                !t || t.isMined(),
                "unmined 'other' transction cannot be orphaned",
                "UNSUPPORTED_OPERATION",
                { operation: "reorderedEvent(other)" }
              ),
              k(this, t)
            );
          }
          constructor(t, e) {
            (0, i._)(this, "provider", void 0),
              (0, i._)(this, "to", void 0),
              (0, i._)(this, "from", void 0),
              (0, i._)(this, "contractAddress", void 0),
              (0, i._)(this, "hash", void 0),
              (0, i._)(this, "index", void 0),
              (0, i._)(this, "blockHash", void 0),
              (0, i._)(this, "blockNumber", void 0),
              (0, i._)(this, "logsBloom", void 0),
              (0, i._)(this, "gasUsed", void 0),
              (0, i._)(this, "blobGasUsed", void 0),
              (0, i._)(this, "cumulativeGasUsed", void 0),
              (0, i._)(this, "gasPrice", void 0),
              (0, i._)(this, "blobGasPrice", void 0),
              (0, i._)(this, "type", void 0),
              (0, i._)(this, "status", void 0),
              (0, i._)(this, "root", void 0),
              (0, r._)(this, E, { writable: !0, value: void 0 }),
              (0, n._)(this, E, Object.freeze(t.logs.map((t) => new b(t, e))));
            let s = d;
            null != t.effectiveGasPrice
              ? (s = t.effectiveGasPrice)
              : null != t.gasPrice && (s = t.gasPrice),
              (0, l.defineProperties)(this, {
                provider: e,
                to: t.to,
                from: t.from,
                contractAddress: t.contractAddress,
                hash: t.hash,
                index: t.index,
                blockHash: t.blockHash,
                blockNumber: t.blockNumber,
                logsBloom: t.logsBloom,
                gasUsed: t.gasUsed,
                cumulativeGasUsed: t.cumulativeGasUsed,
                blobGasUsed: t.blobGasUsed,
                gasPrice: s,
                blobGasPrice: t.blobGasPrice,
                type: t.type,
                status: t.status,
                root: t.root,
              });
          }
        }
        var x = new WeakMap();
        class B {
          toJSON() {
            let {
              blockNumber: t,
              blockHash: e,
              index: r,
              hash: n,
              type: i,
              to: s,
              from: a,
              nonce: o,
              data: l,
              signature: u,
              accessList: c,
              blobVersionedHashes: h,
            } = this;
            return {
              _type: "TransactionResponse",
              accessList: c,
              blockNumber: t,
              blockHash: e,
              blobVersionedHashes: h,
              chainId: p(this.chainId),
              data: l,
              from: a,
              gasLimit: p(this.gasLimit),
              gasPrice: p(this.gasPrice),
              hash: n,
              maxFeePerGas: p(this.maxFeePerGas),
              maxPriorityFeePerGas: p(this.maxPriorityFeePerGas),
              maxFeePerBlobGas: p(this.maxFeePerBlobGas),
              nonce: o,
              signature: u,
              to: s,
              index: r,
              type: i,
              value: p(this.value),
            };
          }
          async getBlock() {
            let t = this.blockNumber;
            if (null == t) {
              let e = await this.getTransaction();
              e && (t = e.blockNumber);
            }
            if (null == t) return null;
            let e = this.provider.getBlock(t);
            if (null == e) throw Error("TODO");
            return e;
          }
          async getTransaction() {
            return this.provider.getTransaction(this.hash);
          }
          async confirmations() {
            if (null == this.blockNumber) {
              let { tx: t, blockNumber: e } = await (0, l.resolveProperties)({
                tx: this.getTransaction(),
                blockNumber: this.provider.getBlockNumber(),
              });
              return null == t || null == t.blockNumber
                ? 0
                : e - t.blockNumber + 1;
            }
            return (
              (await this.provider.getBlockNumber()) - this.blockNumber + 1
            );
          }
          async wait(t, r) {
            let n = null == t ? 1 : t,
              i = null == r ? 0 : r,
              s = (0, e._)(this, x),
              a = -1,
              o = -1 === s,
              u = async () => {
                if (o) return null;
                let { blockNumber: t, nonce: r } = await (0,
                l.resolveProperties)({
                  blockNumber: this.provider.getBlockNumber(),
                  nonce: this.provider.getTransactionCount(this.from),
                });
                if (r < this.nonce) {
                  s = t;
                  return;
                }
                if (o) return null;
                let i = await this.getTransaction();
                if (!i || null == i.blockNumber)
                  for (
                    -1 === a &&
                    (a = s - 3) < (0, e._)(this, x) &&
                    (a = (0, e._)(this, x));
                    a <= t;

                  ) {
                    if (o) return null;
                    let e = await this.provider.getBlock(a, !0);
                    if (null == e) break;
                    for (let t of e) if (t === this.hash) return;
                    for (let r = 0; r < e.length; r++) {
                      let i = await e.getTransaction(r);
                      if (i.from === this.from && i.nonce === this.nonce) {
                        if (o) return null;
                        let e = await this.provider.getTransactionReceipt(
                          i.hash
                        );
                        if (null == e || t - e.blockNumber + 1 < n) return;
                        let r = "replaced";
                        i.data === this.data &&
                        i.to === this.to &&
                        i.value === this.value
                          ? (r = "repriced")
                          : "0x" === i.data &&
                            i.from === i.to &&
                            i.value === d &&
                            (r = "cancelled"),
                          (0, h.assert)(
                            !1,
                            "transaction was replaced",
                            "TRANSACTION_REPLACED",
                            {
                              cancelled: "replaced" === r || "cancelled" === r,
                              reason: r,
                              replacement: i.replaceableTransaction(s),
                              hash: i.hash,
                              receipt: e,
                            }
                          );
                      }
                    }
                    a++;
                  }
              },
              c = (t) => {
                if (null == t || 0 !== t.status) return t;
                (0, h.assert)(
                  !1,
                  "transaction execution reverted",
                  "CALL_EXCEPTION",
                  {
                    action: "sendTransaction",
                    data: null,
                    reason: null,
                    invocation: null,
                    revert: null,
                    transaction: { to: t.to, from: t.from, data: "" },
                    receipt: t,
                  }
                );
              },
              f = await this.provider.getTransactionReceipt(this.hash);
            if (0 === n) return c(f);
            if (f) {
              if (1 === n || (await f.confirmations()) >= n) return c(f);
            } else if ((await u(), 0 === n)) return null;
            let g = new Promise((t, e) => {
              let r = [],
                a = () => {
                  r.forEach((t) => t());
                };
              if (
                (r.push(() => {
                  o = !0;
                }),
                i > 0)
              ) {
                let t = setTimeout(() => {
                  a(),
                    e(
                      (0, h.makeError)(
                        "wait for transaction timeout",
                        "TIMEOUT"
                      )
                    );
                }, i);
                r.push(() => {
                  clearTimeout(t);
                });
              }
              let l = async (r) => {
                if ((await r.confirmations()) >= n) {
                  a();
                  try {
                    t(c(r));
                  } catch (t) {
                    e(t);
                  }
                }
              };
              if (
                (r.push(() => {
                  this.provider.off(this.hash, l);
                }),
                this.provider.on(this.hash, l),
                s >= 0)
              ) {
                let t = async () => {
                  try {
                    await u();
                  } catch (t) {
                    if ((0, h.isError)(t, "TRANSACTION_REPLACED")) {
                      a(), e(t);
                      return;
                    }
                  }
                  o || this.provider.once("block", t);
                };
                r.push(() => {
                  this.provider.off("block", t);
                }),
                  this.provider.once("block", t);
              }
            });
            return await g;
          }
          isMined() {
            return null != this.blockHash;
          }
          isLegacy() {
            return 0 === this.type;
          }
          isBerlin() {
            return 1 === this.type;
          }
          isLondon() {
            return 2 === this.type;
          }
          isCancun() {
            return 3 === this.type;
          }
          removedEvent() {
            return (
              (0, h.assert)(
                this.isMined(),
                "unmined transaction canot be orphaned",
                "UNSUPPORTED_OPERATION",
                { operation: "removeEvent()" }
              ),
              P(this)
            );
          }
          reorderedEvent(t) {
            return (
              (0, h.assert)(
                this.isMined(),
                "unmined transaction canot be orphaned",
                "UNSUPPORTED_OPERATION",
                { operation: "removeEvent()" }
              ),
              (0, h.assert)(
                !t || t.isMined(),
                "unmined 'other' transaction canot be orphaned",
                "UNSUPPORTED_OPERATION",
                { operation: "removeEvent()" }
              ),
              k(this, t)
            );
          }
          replaceableTransaction(t) {
            (0, h.assertArgument)(
              Number.isInteger(t) && t >= 0,
              "invalid startBlock",
              "startBlock",
              t
            );
            let e = new B(this, this.provider);
            return (0, n._)(e, x, t), e;
          }
          constructor(t, e) {
            (0, i._)(this, "provider", void 0),
              (0, i._)(this, "blockNumber", void 0),
              (0, i._)(this, "blockHash", void 0),
              (0, i._)(this, "index", void 0),
              (0, i._)(this, "hash", void 0),
              (0, i._)(this, "type", void 0),
              (0, i._)(this, "to", void 0),
              (0, i._)(this, "from", void 0),
              (0, i._)(this, "nonce", void 0),
              (0, i._)(this, "gasLimit", void 0),
              (0, i._)(this, "gasPrice", void 0),
              (0, i._)(this, "maxPriorityFeePerGas", void 0),
              (0, i._)(this, "maxFeePerGas", void 0),
              (0, i._)(this, "maxFeePerBlobGas", void 0),
              (0, i._)(this, "data", void 0),
              (0, i._)(this, "value", void 0),
              (0, i._)(this, "chainId", void 0),
              (0, i._)(this, "signature", void 0),
              (0, i._)(this, "accessList", void 0),
              (0, i._)(this, "blobVersionedHashes", void 0),
              (0, i._)(this, "authorizationList", void 0),
              (0, r._)(this, x, { writable: !0, value: void 0 }),
              (this.provider = e),
              (this.blockNumber = null != t.blockNumber ? t.blockNumber : null),
              (this.blockHash = null != t.blockHash ? t.blockHash : null),
              (this.hash = t.hash),
              (this.index = t.index),
              (this.type = t.type),
              (this.from = t.from),
              (this.to = t.to || null),
              (this.gasLimit = t.gasLimit),
              (this.nonce = t.nonce),
              (this.data = t.data),
              (this.value = t.value),
              (this.gasPrice = t.gasPrice),
              (this.maxPriorityFeePerGas =
                null != t.maxPriorityFeePerGas ? t.maxPriorityFeePerGas : null),
              (this.maxFeePerGas =
                null != t.maxFeePerGas ? t.maxFeePerGas : null),
              (this.maxFeePerBlobGas =
                null != t.maxFeePerBlobGas ? t.maxFeePerBlobGas : null),
              (this.chainId = t.chainId),
              (this.signature = t.signature),
              (this.accessList = null != t.accessList ? t.accessList : null),
              (this.blobVersionedHashes =
                null != t.blobVersionedHashes ? t.blobVersionedHashes : null),
              (this.authorizationList =
                null != t.authorizationList ? t.authorizationList : null),
              (0, n._)(this, x, -1);
          }
        }
        function k(t, e) {
          return { orphan: "reorder-transaction", tx: t, other: e };
        }
        function P(t) {
          return { orphan: "drop-transaction", tx: t };
        }
        t.s(
          {
            ContractEventPayload: () => D,
            ContractTransactionReceipt: () => T,
            ContractTransactionResponse: () => U,
            ContractUnknownEventPayload: () => F,
            EventLog: () => C,
            UndecodedEventLog: () => O,
          },
          458855
        ),
          t.s({ EventPayload: () => I }, 82166);
        var N = new WeakMap();
        class I {
          async removeListener() {
            null != (0, e._)(this, N) &&
              (await this.emitter.off(this.filter, (0, e._)(this, N)));
          }
          constructor(t, e, s) {
            (0, i._)(this, "filter", void 0),
              (0, i._)(this, "emitter", void 0),
              (0, r._)(this, N, { writable: !0, value: void 0 }),
              (0, n._)(this, N, e),
              (0, l.defineProperties)(this, { emitter: t, filter: s });
          }
        }
        class C extends b {
          get eventName() {
            return this.fragment.name;
          }
          get eventSignature() {
            return this.fragment.format();
          }
          constructor(t, e, r) {
            super(t, t.provider),
              (0, i._)(this, "interface", void 0),
              (0, i._)(this, "fragment", void 0),
              (0, i._)(this, "args", void 0);
            let n = e.decodeEventLog(r, t.data, t.topics);
            (0, l.defineProperties)(this, {
              args: n,
              fragment: r,
              interface: e,
            });
          }
        }
        class O extends b {
          constructor(t, e) {
            super(t, t.provider),
              (0, i._)(this, "error", void 0),
              (0, l.defineProperties)(this, { error: e });
          }
        }
        var R = new WeakMap();
        class T extends _ {
          get logs() {
            return super.logs.map((t) => {
              let r = t.topics.length
                ? (0, e._)(this, R).getEvent(t.topics[0])
                : null;
              if (r)
                try {
                  return new C(t, (0, e._)(this, R), r);
                } catch (e) {
                  return new O(t, e);
                }
              return t;
            });
          }
          constructor(t, e, i) {
            super(i, e),
              (0, r._)(this, R, { writable: !0, value: void 0 }),
              (0, n._)(this, R, t);
          }
        }
        var S = new WeakMap();
        class U extends B {
          async wait(t, r) {
            let n = await super.wait(t, r);
            return null == n
              ? null
              : new T((0, e._)(this, S), this.provider, n);
          }
          constructor(t, e, i) {
            super(i, e),
              (0, r._)(this, S, { writable: !0, value: void 0 }),
              (0, n._)(this, S, t);
          }
        }
        class F extends I {
          async getBlock() {
            return await this.log.getBlock();
          }
          async getTransaction() {
            return await this.log.getTransaction();
          }
          async getTransactionReceipt() {
            return await this.log.getTransactionReceipt();
          }
          constructor(t, e, r, n) {
            super(t, e, r),
              (0, i._)(this, "log", void 0),
              (0, l.defineProperties)(this, { log: n });
          }
        }
        class D extends F {
          get eventName() {
            return this.fragment.name;
          }
          get eventSignature() {
            return this.fragment.format();
          }
          constructor(t, e, r, n, i) {
            super(t, e, r, new C(i, t.interface, n));
            let s = t.interface.decodeEventLog(
              n,
              this.log.data,
              this.log.topics
            );
            (0, l.defineProperties)(this, { args: s, fragment: n });
          }
        }
        let L = BigInt(0);
        function M(t) {
          return t && "function" == typeof t.call;
        }
        function G(t) {
          return t && "function" == typeof t.estimateGas;
        }
        function H(t) {
          return t && "function" == typeof t.resolveName;
        }
        function Q(t) {
          return t && "function" == typeof t.sendTransaction;
        }
        function z(t) {
          if (null != t) {
            if (H(t)) return t;
            if (t.provider) return t.provider;
          }
        }
        var W = new WeakMap();
        class V {
          getTopicFilter() {
            return (0, e._)(this, W);
          }
          constructor(t, e, s) {
            if (
              ((0, r._)(this, W, { writable: !0, value: void 0 }),
              (0, i._)(this, "fragment", void 0),
              (0, l.defineProperties)(this, { fragment: e }),
              e.inputs.length < s.length)
            )
              throw Error("too many arguments");
            let a = j(t.runner, "resolveName"),
              u = H(a) ? a : null;
            (0, n._)(
              this,
              W,
              (async function () {
                let r = await Promise.all(
                  e.inputs.map((t, e) =>
                    null == s[e]
                      ? null
                      : t.walkAsync(s[e], (t, e) =>
                          "address" === t
                            ? Array.isArray(e)
                              ? Promise.all(
                                  e.map((t) => (0, o.resolveAddress)(t, u))
                                )
                              : (0, o.resolveAddress)(e, u)
                            : e
                        )
                  )
                );
                return t.interface.encodeFilterTopics(e, r);
              })()
            );
          }
        }
        function j(t, e) {
          return null == t
            ? null
            : "function" == typeof t[e]
            ? t
            : t.provider && "function" == typeof t.provider[e]
            ? t.provider
            : null;
        }
        function J(t) {
          return null == t ? null : t.provider || null;
        }
        async function K(t, e) {
          let r = a.Typed.dereference(t, "overrides");
          (0, h.assertArgument)(
            "object" == typeof r,
            "invalid overrides parameter",
            "overrides",
            t
          );
          let n = y(r);
          return (
            (0, h.assertArgument)(
              null == n.to || (e || []).indexOf("to") >= 0,
              "cannot override to",
              "overrides.to",
              n.to
            ),
            (0, h.assertArgument)(
              null == n.data || (e || []).indexOf("data") >= 0,
              "cannot override data",
              "overrides.data",
              n.data
            ),
            n.from && (n.from = n.from),
            n
          );
        }
        async function q(t, e, r) {
          let n = j(t, "resolveName"),
            i = H(n) ? n : null;
          return await Promise.all(
            e.map((t, e) =>
              t.walkAsync(r[e], (t, e) =>
                ((e = a.Typed.dereference(e, t)), "address" === t)
                  ? (0, o.resolveAddress)(e, i)
                  : e
              )
            )
          );
        }
        let Z = Symbol.for("_ethersInternal_contract"),
          Y = new WeakMap();
        function X(t) {
          return Y.get(t[Z]);
        }
        async function $(t, e) {
          let r,
            n = null;
          if (Array.isArray(e)) {
            let n = function (e) {
              if ((0, c.isHexString)(e, 32)) return e;
              let r = t.interface.getEvent(e);
              return (
                (0, h.assertArgument)(r, "unknown fragment", "name", e),
                r.topicHash
              );
            };
            r = e.map((t) =>
              null == t ? null : Array.isArray(t) ? t.map(n) : n(t)
            );
          } else if ("*" === e) r = [null];
          else if ("string" == typeof e)
            (0, c.isHexString)(e, 32)
              ? (r = [e])
              : ((n = t.interface.getEvent(e)),
                (0, h.assertArgument)(n, "unknown fragment", "event", e),
                (r = [n.topicHash]));
          else
            e &&
            "object" == typeof e &&
            "getTopicFilter" in e &&
            "function" == typeof e.getTopicFilter &&
            e.fragment
              ? (r = await e.getTopicFilter())
              : "fragment" in e
              ? (r = [(n = e.fragment).topicHash])
              : (0, h.assertArgument)(!1, "unknown event name", "event", e);
          return {
            fragment: n,
            tag: (r = r.map((t) => {
              if (null == t) return null;
              if (Array.isArray(t)) {
                let e = Array.from(
                  new Set(t.map((t) => t.toLowerCase())).values()
                );
                return 1 === e.length ? e[0] : (e.sort(), e);
              }
              return t.toLowerCase();
            }))
              .map((t) =>
                null == t ? "null" : Array.isArray(t) ? t.join("|") : t
              )
              .join("&"),
            topics: r,
          };
        }
        async function tt(t, e) {
          let { subs: r } = X(t);
          return r.get((await $(t, e)).tag) || null;
        }
        async function te(t, e, r) {
          let n = J(t.runner);
          (0, h.assert)(
            n,
            "contract runner does not support subscribing",
            "UNSUPPORTED_OPERATION",
            { operation: e }
          );
          let { fragment: i, tag: s, topics: a } = await $(t, r),
            { addr: o, subs: l } = X(t),
            u = l.get(s);
          if (!u) {
            let e = { address: o || t, topics: a },
              c = (e) => {
                let n = i;
                if (null == n)
                  try {
                    n = t.interface.getEvent(e.topics[0]);
                  } catch (t) {}
                if (n) {
                  let s = n,
                    a = i
                      ? t.interface.decodeEventLog(i, e.data, e.topics)
                      : [];
                  ti(t, r, a, (n) => new D(t, n, r, s, e));
                } else ti(t, r, [], (n) => new F(t, n, r, e));
              },
              h = [];
            (u = {
              tag: s,
              listeners: [],
              start: () => {
                h.length || h.push(n.on(e, c));
              },
              stop: async () => {
                if (0 == h.length) return;
                let t = h;
                (h = []), await Promise.all(t), n.off(e, c);
              },
            }),
              l.set(s, u);
          }
          return u;
        }
        let tr = Promise.resolve();
        async function tn(t, e, r, n) {
          await tr;
          let i = await tt(t, e);
          if (!i) return !1;
          let s = i.listeners.length;
          return (
            (i.listeners = i.listeners.filter((e) => {
              let { listener: i, once: s } = e,
                a = Array.from(r);
              n && a.push(n(s ? null : i));
              try {
                i.call(t, ...a);
              } catch (t) {}
              return !s;
            })),
            0 === i.listeners.length && (i.stop(), X(t).subs.delete(i.tag)),
            s > 0
          );
        }
        async function ti(t, e, r, n) {
          try {
            await tr;
          } catch (t) {}
          let i = tn(t, e, r, n);
          return (tr = i), await i;
        }
        let ts = ["then"];
        class ta {
          connect(t) {
            return new ta(this.target, this.interface, t);
          }
          attach(t) {
            return new ta(t, this.interface, this.runner);
          }
          async getAddress() {
            return await X(this).addrPromise;
          }
          async getDeployedCode() {
            let t = J(this.runner);
            (0, h.assert)(
              t,
              "runner does not support .provider",
              "UNSUPPORTED_OPERATION",
              { operation: "getDeployedCode" }
            );
            let e = await t.getCode(await this.getAddress());
            return "0x" === e ? null : e;
          }
          async waitForDeployment() {
            let t = this.deploymentTransaction();
            if (t) return await t.wait(), this;
            if (null != (await this.getDeployedCode())) return this;
            let e = J(this.runner);
            return (
              (0, h.assert)(
                null != e,
                "contract runner does not support .provider",
                "UNSUPPORTED_OPERATION",
                { operation: "waitForDeployment" }
              ),
              new Promise((t, r) => {
                let n = async () => {
                  try {
                    let r = await this.getDeployedCode();
                    if (null != r) return t(this);
                    e.once("block", n);
                  } catch (t) {
                    r(t);
                  }
                };
                n();
              })
            );
          }
          deploymentTransaction() {
            return X(this).deployTx;
          }
          getFunction(t) {
            return (
              "string" != typeof t && (t = t.format()),
              (function (t, e) {
                let r = function () {
                    for (
                      var r = arguments.length, n = Array(r), i = 0;
                      i < r;
                      i++
                    )
                      n[i] = arguments[i];
                    let s = t.interface.getFunction(e, n);
                    return (
                      (0, h.assert)(
                        s,
                        "no matching fragment",
                        "UNSUPPORTED_OPERATION",
                        { operation: "fragment", info: { key: e, args: n } }
                      ),
                      s
                    );
                  },
                  n = async function () {
                    for (
                      var e = arguments.length, n = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      n[i] = arguments[i];
                    let s = r(...n),
                      a = {};
                    if (
                      (s.inputs.length + 1 === n.length &&
                        (a = await K(n.pop())).from &&
                        (a.from = await (0, o.resolveAddress)(
                          a.from,
                          z(t.runner)
                        )),
                      s.inputs.length !== n.length)
                    )
                      throw Error(
                        "internal error: fragment inputs doesn't match arguments; should not happen"
                      );
                    let u = await q(t.runner, s.inputs, n);
                    return Object.assign(
                      {},
                      a,
                      await (0, l.resolveProperties)({
                        to: t.getAddress(),
                        data: t.interface.encodeFunctionData(s, u),
                      })
                    );
                  },
                  i = async function () {
                    for (
                      var t = arguments.length, e = Array(t), r = 0;
                      r < t;
                      r++
                    )
                      e[r] = arguments[r];
                    let n = await u(...e);
                    return 1 === n.length ? n[0] : n;
                  },
                  s = async function () {
                    for (
                      var e = arguments.length, r = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      r[i] = arguments[i];
                    let s = t.runner;
                    (0, h.assert)(
                      Q(s),
                      "contract runner does not support sending transactions",
                      "UNSUPPORTED_OPERATION",
                      { operation: "sendTransaction" }
                    );
                    let a = await s.sendTransaction(await n(...r)),
                      o = J(t.runner);
                    return new U(t.interface, o, a);
                  },
                  a = async function () {
                    for (
                      var e = arguments.length, r = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      r[i] = arguments[i];
                    let s = j(t.runner, "estimateGas");
                    return (
                      (0, h.assert)(
                        G(s),
                        "contract runner does not support gas estimation",
                        "UNSUPPORTED_OPERATION",
                        { operation: "estimateGas" }
                      ),
                      await s.estimateGas(await n(...r))
                    );
                  },
                  u = async function () {
                    for (
                      var e = arguments.length, i = Array(e), s = 0;
                      s < e;
                      s++
                    )
                      i[s] = arguments[s];
                    let a = j(t.runner, "call");
                    (0, h.assert)(
                      M(a),
                      "contract runner does not support calling",
                      "UNSUPPORTED_OPERATION",
                      { operation: "call" }
                    );
                    let o = await n(...i),
                      l = "0x";
                    try {
                      l = await a.call(o);
                    } catch (e) {
                      if ((0, h.isCallException)(e) && e.data)
                        throw t.interface.makeError(e.data, o);
                      throw e;
                    }
                    let u = r(...i);
                    return t.interface.decodeFunctionResult(u, l);
                  },
                  c = async function () {
                    for (
                      var t = arguments.length, e = Array(t), n = 0;
                      n < t;
                      n++
                    )
                      e[n] = arguments[n];
                    return r(...e).constant ? await i(...e) : await s(...e);
                  };
                return (
                  (0, l.defineProperties)(c, {
                    name: t.interface.getFunctionName(e),
                    _contract: t,
                    _key: e,
                    getFragment: r,
                    estimateGas: a,
                    populateTransaction: n,
                    send: s,
                    staticCall: i,
                    staticCallResult: u,
                  }),
                  Object.defineProperty(c, "fragment", {
                    configurable: !1,
                    enumerable: !0,
                    get: () => {
                      let r = t.interface.getFunction(e);
                      return (
                        (0, h.assert)(
                          r,
                          "no matching fragment",
                          "UNSUPPORTED_OPERATION",
                          { operation: "fragment", info: { key: e } }
                        ),
                        r
                      );
                    },
                  }),
                  c
                );
              })(this, t)
            );
          }
          getEvent(t) {
            "string" != typeof t && (t = t.format());
            var e = this,
              r = t;
            let n = function () {
                for (var t = arguments.length, n = Array(t), i = 0; i < t; i++)
                  n[i] = arguments[i];
                let s = e.interface.getEvent(r, n);
                return (
                  (0, h.assert)(
                    s,
                    "no matching fragment",
                    "UNSUPPORTED_OPERATION",
                    { operation: "fragment", info: { key: r, args: n } }
                  ),
                  s
                );
              },
              i = function () {
                for (var t = arguments.length, r = Array(t), i = 0; i < t; i++)
                  r[i] = arguments[i];
                return new V(e, n(...r), r);
              };
            return (
              (0, l.defineProperties)(i, {
                name: e.interface.getEventName(r),
                _contract: e,
                _key: r,
                getFragment: n,
              }),
              Object.defineProperty(i, "fragment", {
                configurable: !1,
                enumerable: !0,
                get: () => {
                  let t = e.interface.getEvent(r);
                  return (
                    (0, h.assert)(
                      t,
                      "no matching fragment",
                      "UNSUPPORTED_OPERATION",
                      { operation: "fragment", info: { key: r } }
                    ),
                    t
                  );
                },
              }),
              i
            );
          }
          async queryTransaction(t) {
            throw Error("@TODO");
          }
          async queryFilter(t, e, r) {
            null == e && (e = 0), null == r && (r = "latest");
            let { addr: n, addrPromise: i } = X(this),
              s = n || (await i),
              { fragment: a, topics: o } = await $(this, t),
              l = { address: s, topics: o, fromBlock: e, toBlock: r },
              u = J(this.runner);
            return (
              (0, h.assert)(
                u,
                "contract runner does not have a provider",
                "UNSUPPORTED_OPERATION",
                { operation: "queryFilter" }
              ),
              (await u.getLogs(l)).map((t) => {
                let e = a;
                if (null == e)
                  try {
                    e = this.interface.getEvent(t.topics[0]);
                  } catch (t) {}
                if (e)
                  try {
                    return new C(t, this.interface, e);
                  } catch (e) {
                    return new O(t, e);
                  }
                return new b(t, u);
              })
            );
          }
          async on(t, e) {
            let r = await te(this, "on", t);
            return r.listeners.push({ listener: e, once: !1 }), r.start(), this;
          }
          async once(t, e) {
            let r = await te(this, "once", t);
            return r.listeners.push({ listener: e, once: !0 }), r.start(), this;
          }
          async emit(t) {
            for (
              var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1;
              n < e;
              n++
            )
              r[n - 1] = arguments[n];
            return await ti(this, t, r, null);
          }
          async listenerCount(t) {
            if (t) {
              let e = await tt(this, t);
              return e ? e.listeners.length : 0;
            }
            let { subs: e } = X(this),
              r = 0;
            for (let { listeners: t } of e.values()) r += t.length;
            return r;
          }
          async listeners(t) {
            if (t) {
              let e = await tt(this, t);
              return e
                ? e.listeners.map((t) => {
                    let { listener: e } = t;
                    return e;
                  })
                : [];
            }
            let { subs: e } = X(this),
              r = [];
            for (let { listeners: t } of e.values())
              r = r.concat(
                t.map((t) => {
                  let { listener: e } = t;
                  return e;
                })
              );
            return r;
          }
          async off(t, e) {
            let r = await tt(this, t);
            if (!r) return this;
            if (e) {
              let t = r.listeners
                .map((t) => {
                  let { listener: e } = t;
                  return e;
                })
                .indexOf(e);
              t >= 0 && r.listeners.splice(t, 1);
            }
            return (
              (null == e || 0 === r.listeners.length) &&
                (r.stop(), X(this).subs.delete(r.tag)),
              this
            );
          }
          async removeAllListeners(t) {
            if (t) {
              let e = await tt(this, t);
              if (!e) return this;
              e.stop(), X(this).subs.delete(e.tag);
            } else {
              let { subs: t } = X(this);
              for (let { tag: e, stop: r } of t.values()) r(), t.delete(e);
            }
            return this;
          }
          async addListener(t, e) {
            return await this.on(t, e);
          }
          async removeListener(t, e) {
            return await this.off(t, e);
          }
          static buildClass(t) {
            return class extends ta {
              constructor(e, r = null) {
                super(e, t, r);
              }
            };
          }
          static from(t, e, r) {
            return null == r && (r = null), new this(t, e, r);
          }
          constructor(t, e, r, n) {
            var a;
            let f;
            (0, i._)(this, "target", void 0),
              (0, i._)(this, "interface", void 0),
              (0, i._)(this, "runner", void 0),
              (0, i._)(this, "filters", void 0),
              (0, i._)(this, Z, void 0),
              (0, i._)(this, "fallback", void 0),
              (0, h.assertArgument)(
                "string" == typeof t || (0, o.isAddressable)(t),
                "invalid value for Contract target",
                "target",
                t
              ),
              null == r && (r = null);
            let d = s.Interface.from(e);
            (0, l.defineProperties)(this, {
              target: t,
              runner: r,
              interface: d,
            }),
              Object.defineProperty(this, Z, { value: {} });
            let g = null,
              p = null;
            if (n) {
              let t = J(r);
              p = new U(this.interface, t, n);
            }
            let m = new Map();
            if ("string" == typeof t)
              if ((0, c.isHexString)(t)) (g = t), (f = Promise.resolve(t));
              else {
                let e = j(r, "resolveName");
                if (!H(e))
                  throw (0, h.makeError)(
                    "contract runner does not support name resolution",
                    "UNSUPPORTED_OPERATION",
                    { operation: "resolveName" }
                  );
                f = e.resolveName(t).then((e) => {
                  if (null == e)
                    throw (0, h.makeError)(
                      "an ENS name used for a contract target must be correctly configured",
                      "UNCONFIGURED_NAME",
                      { value: t }
                    );
                  return (X(this).addr = e), e;
                });
              }
            else
              f = t.getAddress().then((t) => {
                if (null == t) throw Error("TODO");
                return (X(this).addr = t), t;
              });
            (a = { addrPromise: f, addr: g, deployTx: p, subs: m }),
              Y.set(this[Z], a);
            let y = new Proxy(
              {},
              {
                get: (t, e, r) => {
                  if ("symbol" == typeof e || ts.indexOf(e) >= 0)
                    return Reflect.get(t, e, r);
                  try {
                    return this.getEvent(e);
                  } catch (t) {
                    if (
                      !(0, h.isError)(t, "INVALID_ARGUMENT") ||
                      "key" !== t.argument
                    )
                      throw t;
                  }
                },
                has: (t, e) =>
                  ts.indexOf(e) >= 0
                    ? Reflect.has(t, e)
                    : Reflect.has(t, e) || this.interface.hasEvent(String(e)),
              }
            );
            return (
              (0, l.defineProperties)(this, { filters: y }),
              (0, l.defineProperties)(this, {
                fallback:
                  d.receive || d.fallback
                    ? (function (t) {
                        let e = async function (e) {
                            let r = await K(e, ["data"]);
                            (r.to = await t.getAddress()),
                              r.from &&
                                (r.from = await (0, o.resolveAddress)(
                                  r.from,
                                  z(t.runner)
                                ));
                            let n = t.interface,
                              i =
                                (0, u.getBigInt)(
                                  r.value || L,
                                  "overrides.value"
                                ) === L,
                              s = "0x" === (r.data || "0x");
                            !n.fallback ||
                              n.fallback.payable ||
                              !n.receive ||
                              s ||
                              i ||
                              (0, h.assertArgument)(
                                !1,
                                "cannot send data to receive or send value to non-payable fallback",
                                "overrides",
                                e
                              ),
                              (0, h.assertArgument)(
                                n.fallback || s,
                                "cannot send data to receive-only contract",
                                "overrides.data",
                                r.data
                              );
                            let a =
                              n.receive || (n.fallback && n.fallback.payable);
                            return (
                              (0, h.assertArgument)(
                                a || i,
                                "cannot send value to non-payable fallback",
                                "overrides.value",
                                r.value
                              ),
                              (0, h.assertArgument)(
                                n.fallback || s,
                                "cannot send data to receive-only contract",
                                "overrides.data",
                                r.data
                              ),
                              r
                            );
                          },
                          r = async function (r) {
                            let n = j(t.runner, "call");
                            (0, h.assert)(
                              M(n),
                              "contract runner does not support calling",
                              "UNSUPPORTED_OPERATION",
                              { operation: "call" }
                            );
                            let i = await e(r);
                            try {
                              return await n.call(i);
                            } catch (e) {
                              if ((0, h.isCallException)(e) && e.data)
                                throw t.interface.makeError(e.data, i);
                              throw e;
                            }
                          },
                          n = async function (r) {
                            let n = t.runner;
                            (0, h.assert)(
                              Q(n),
                              "contract runner does not support sending transactions",
                              "UNSUPPORTED_OPERATION",
                              { operation: "sendTransaction" }
                            );
                            let i = await n.sendTransaction(await e(r)),
                              s = J(t.runner);
                            return new U(t.interface, s, i);
                          },
                          i = async function (r) {
                            let n = j(t.runner, "estimateGas");
                            return (
                              (0, h.assert)(
                                G(n),
                                "contract runner does not support gas estimation",
                                "UNSUPPORTED_OPERATION",
                                { operation: "estimateGas" }
                              ),
                              await n.estimateGas(await e(r))
                            );
                          },
                          s = async (t) => await n(t);
                        return (
                          (0, l.defineProperties)(s, {
                            _contract: t,
                            estimateGas: i,
                            populateTransaction: e,
                            send: n,
                            staticCall: r,
                          }),
                          s
                        );
                      })(this)
                    : null,
              }),
              new Proxy(this, {
                get: (t, e, r) => {
                  if ("symbol" == typeof e || e in t || ts.indexOf(e) >= 0)
                    return Reflect.get(t, e, r);
                  try {
                    return t.getFunction(e);
                  } catch (t) {
                    if (
                      !(0, h.isError)(t, "INVALID_ARGUMENT") ||
                      "key" !== t.argument
                    )
                      throw t;
                  }
                },
                has: (t, e) =>
                  "symbol" == typeof e || e in t || ts.indexOf(e) >= 0
                    ? Reflect.has(t, e)
                    : t.interface.hasFunction(e),
              })
            );
          }
        }
        function to() {
          return ta;
        }
        class tl extends to() {}
      },
      [706747, 82166, 458855],
    ],
    131705: (t) => {
      "use strict";
      let e, r, n, i, s, a, o, l, u, c, h, f, d, g, p;
      t.s(
        {
          dnsEncode: () => te,
          ensNormalize: () => X,
          isValidName: () => $,
          namehash: () => tt,
        },
        131705
      );
      var m = t.i(749401),
        y = t.i(713514),
        A = t.i(13517),
        w = t.i(853399);
      let b = new Map([
        [8217, "apostrophe"],
        [8260, "fraction slash"],
        [12539, "middle dot"],
      ]);
      function E(t) {
        var e;
        let r;
        return (
          (e = (function (t) {
            let e = 0;
            function r() {
              return (t[e++] << 8) | t[e++];
            }
            let n = r(),
              i = 1,
              s = [0, 1];
            for (let t = 1; t < n; t++) s.push((i += r()));
            let a = r(),
              o = e;
            e += a;
            let l = 0,
              u = 0;
            function c() {
              return (
                0 == l && ((u = (u << 8) | t[e++]), (l = 8)), (u >> --l) & 1
              );
            }
            let h = 0x80000000 - 1,
              f = 0;
            for (let t = 0; t < 31; t++) f = (f << 1) | c();
            let d = [],
              g = 0,
              p = 0x80000000;
            for (;;) {
              let t = Math.floor(((f - g + 1) * i - 1) / p),
                e = 0,
                r = n;
              for (; r - e > 1; ) {
                let n = (e + r) >>> 1;
                t < s[n] ? (r = n) : (e = n);
              }
              if (0 == e) break;
              d.push(e);
              let a = g + Math.floor((p * s[e]) / i),
                o = g + Math.floor((p * s[e + 1]) / i) - 1;
              for (; ((a ^ o) & 0x40000000) == 0; )
                (f = ((f << 1) & h) | c()),
                  (a = (a << 1) & h),
                  (o = ((o << 1) & h) | 1);
              for (; a & ~o & 0x20000000; )
                (f = (0x40000000 & f) | ((f << 1) & (h >>> 1)) | c()),
                  (a = (a << 1) ^ 0x40000000),
                  (o = ((0x40000000 ^ o) << 1) | 0x40000001);
              (g = a), (p = 1 + o - a);
            }
            let m = n - 4;
            return d.map((e) => {
              switch (e - m) {
                case 3:
                  return m + 65792 + ((t[o++] << 16) | (t[o++] << 8) | t[o++]);
                case 2:
                  return m + 256 + ((t[o++] << 8) | t[o++]);
                case 1:
                  return m + t[o++];
                default:
                  return e - 1;
              }
            });
          })(
            (function (t) {
              let e = [];
              [
                ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              ].forEach((t, r) => (e[t.charCodeAt(0)] = r));
              let r = t.length,
                n = new Uint8Array((6 * r) >> 3);
              for (let i = 0, s = 0, a = 0, o = 0; i < r; i++)
                (o = (o << 6) | e[t.charCodeAt(i)]),
                  (a += 6) >= 8 && (n[s++] = o >> (a -= 8));
              return n;
            })(t)
          )),
          (r = 0),
          () => e[r++]
        );
      }
      function _(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = [];
        for (;;) {
          let n = t(),
            i = t();
          if (!i) break;
          e += n;
          for (let t = 0; t < i; t++) r.push(e + t);
          e += i + 1;
        }
        return r;
      }
      function x(t) {
        return k(() => {
          let e = _(t);
          if (e.length) return e;
        });
      }
      function B(t) {
        let e = [];
        for (;;) {
          let r = t();
          if (0 == r) break;
          e.push(
            (function (t, e) {
              let r = 1 + e(),
                n = e(),
                i = k(e);
              return P(i.length, 1 + t, e).flatMap((t, e) => {
                let [s, ...a] = t;
                return Array(i[e])
                  .fill()
                  .map((t, e) => {
                    let i = e * n;
                    return [s + e * r, a.map((t) => t + i)];
                  });
              });
            })(r, t)
          );
        }
        for (;;) {
          var r, n;
          let i = t() - 1;
          if (i < 0) break;
          e.push(
            ((r = i), P(1 + (n = t)(), 1 + r, n).map((t) => [t[0], t.slice(1)]))
          );
        }
        return e.flat();
      }
      function k(t) {
        let e = [];
        for (;;) {
          let r = t(e.length);
          if (!r) break;
          e.push(r);
        }
        return e;
      }
      function P(t, e, r) {
        let n = Array(t)
          .fill()
          .map(() => []);
        for (let i = 0; i < e; i++)
          (function (t, e) {
            let r = Array(t);
            for (let i = 0, s = 0; i < t; i++) {
              var n;
              r[i] = s += 1 & (n = e()) ? ~n >> 1 : n >> 1;
            }
            return r;
          })(t, r).forEach((t, e) => n[e].push(t));
        return n;
      }
      function N(t) {
        return "{".concat(t.toString(16).toUpperCase().padStart(2, "0"), "}");
      }
      function I(t) {
        let e = t.length;
        if (e < 4096) return String.fromCodePoint(...t);
        let r = [];
        for (let n = 0; n < e; )
          r.push(String.fromCodePoint(...t.slice(n, (n += 4096))));
        return r.join("");
      }
      function C(t, e) {
        let r = t.length,
          n = r - e.length;
        for (let i = 0; 0 == n && i < r; i++) n = t[i] - e[i];
        return n;
      }
      let O = 55204;
      function R(t) {
        return (t >> 24) & 255;
      }
      function T(t) {
        return 0xffffff & t;
      }
      function S(t) {
        return t >= 44032 && t < O;
      }
      function U(t) {
        e ||
          (function () {
            let t = E(
              "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"
            );
            for (let [s, a] of ((e = new Map(
              x(t).flatMap((t, e) => t.map((t) => [t, (e + 1) << 24]))
            )),
            (r = new Set(_(t))),
            (n = new Map()),
            (i = new Map()),
            B(t))) {
              if (!r.has(s) && 2 == a.length) {
                let [t, e] = a,
                  r = i.get(t);
                r || ((r = new Map()), i.set(t, r)), r.set(e, s);
              }
              n.set(s, a.reverse());
            }
          })();
        let s = [],
          a = [],
          o = !1;
        function l(t) {
          let r = e.get(t);
          r && ((o = !0), (t |= r)), s.push(t);
        }
        for (let e of t)
          for (;;) {
            if (e < 128) s.push(e);
            else if (S(e)) {
              let t = e - 44032,
                r = (t / 588) | 0,
                n = ((t % 588) / 28) | 0,
                i = t % 28;
              l(4352 + r), l(4449 + n), i > 0 && l(4519 + i);
            } else {
              let t = n.get(e);
              t ? a.push(...t) : l(e);
            }
            if (!a.length) break;
            e = a.pop();
          }
        if (o && s.length > 1) {
          let t = R(s[0]);
          for (let e = 1; e < s.length; e++) {
            let r = R(s[e]);
            if (0 == r || t <= r) {
              t = r;
              continue;
            }
            let n = e - 1;
            for (;;) {
              let e = s[n + 1];
              if (((s[n + 1] = s[n]), (s[n] = e), !n || (t = R(s[--n])) <= r))
                break;
            }
            t = R(s[e]);
          }
        }
        return s;
      }
      function F(t) {
        return (function (t) {
          let e = [],
            r = [],
            n = -1,
            s = 0;
          for (let a of t) {
            let t = R(a),
              o = T(a);
            if (-1 == n) 0 == t ? (n = o) : e.push(o);
            else if (s > 0 && s >= t)
              0 == t ? (e.push(n, ...r), (r.length = 0), (n = o)) : r.push(o),
                (s = t);
            else {
              let a = (function (t, e) {
                if (t >= 4352 && t < 4371 && e >= 4449 && e < 4470)
                  return 44032 + (t - 4352) * 588 + (e - 4449) * 28;
                {
                  if (S(t) && e > 4519 && e < 4547 && (t - 44032) % 28 == 0)
                    return t + (e - 4519);
                  let r = i.get(t);
                  return r && (r = r.get(e)) ? r : -1;
                }
              })(n, o);
              a >= 0
                ? (n = a)
                : 0 == s && 0 == t
                ? (e.push(n), (n = o))
                : (r.push(o), (s = t));
            }
          }
          return n >= 0 && e.push(n, ...r), e;
        })(U(t));
      }
      let D = (t) => Array.from(t);
      function L(t, e) {
        return t.P.has(e) || t.Q.has(e);
      }
      class M extends Array {
        get is_emoji() {
          return !0;
        }
      }
      function G() {
        let t, e;
        if (s) return;
        let r = E(
            "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"
          ),
          n = () => _(r),
          i = () => new Set(n()),
          m = (t, e) => e.forEach((e) => t.add(e));
        (s = new Map(B(r))),
          (a = i()),
          (o = n()),
          (l = new Set(n().map((t) => o[t]))),
          (o = new Set(o)),
          (u = i()),
          i();
        let y = x(r),
          A = r(),
          w = () => {
            let t = new Set();
            return n().forEach((e) => m(t, y[e])), m(t, n()), t;
          };
        (c = k((t) => {
          let e = k(r).map((t) => t + 96);
          if (e.length) {
            let n = t >= A;
            (e[0] -= 32), (e = I(e)), n && (e = "Restricted[".concat(e, "]"));
            let i = w();
            return { N: e, P: i, Q: w(), M: !r(), R: n };
          }
        })),
          (h = i()),
          (f = new Map());
        let b = n()
          .concat(D(h))
          .sort((t, e) => t - e);
        for (let { V: t, M: e } of (b.forEach((t, e) => {
          let n = r(),
            i = (b[e] = n ? b[e - n] : { V: [], M: new Map() });
          i.V.push(t), h.has(t) || f.set(t, i);
        }),
        new Set(f.values()))) {
          let r = [];
          for (let e of t) {
            let t = c.filter((t) => L(t, e)),
              n = r.find((e) => {
                let { G: r } = e;
                return t.some((t) => r.has(t));
              });
            n || ((n = { G: new Set(), V: [] }), r.push(n)),
              n.V.push(e),
              m(n.G, t);
          }
          let n = r.flatMap((t) => D(t.G));
          for (let { G: t, V: i } of r) {
            let r = new Set(n.filter((e) => !t.has(e)));
            for (let t of i) e.set(t, r);
          }
        }
        d = new Set();
        let P = new Set(),
          N = (t) => (d.has(t) ? P.add(t) : d.add(t));
        for (let t of c) {
          for (let e of t.P) N(e);
          for (let e of t.Q) N(e);
        }
        for (let t of d) f.has(t) || P.has(t) || f.set(t, 1);
        for (let n of (m(d, U(d).map(T)),
        (g = ((t = []),
        (e = _(r)),
        (function e(r, n, i) {
          let { S: s, B: a } = r;
          if (!(4 & s) || i !== n[n.length - 1])
            for (let r of (2 & s && (i = n[n.length - 1]),
            1 & s && t.push(n),
            a))
              for (let t of r.Q) e(r, [...n, t], i);
        })(
          (function t(n) {
            return {
              S: r(),
              B: k(() => {
                let n = _(r).map((t) => e[t]);
                if (n.length) return t(n);
              }),
              Q: n,
            };
          })([]),
          []
        ),
        t)
          .map((t) => M.from(t))
          .sort(C)),
        (p = new Map()),
        g)) {
          let t = [p];
          for (let e of n) {
            let r = t.map((t) => {
              let r = t.get(e);
              return r || ((r = new Map()), t.set(e, r)), r;
            });
            65039 === e ? t.push(...r) : (t = r);
          }
          for (let e of t) e.V = n;
        }
      }
      function H(t) {
        return (W(t) ? "" : "".concat(Q(z([t])), " ")) + N(t);
      }
      function Q(t) {
        return '"'.concat(t, '"‎');
      }
      function z(t) {
        var e;
        let r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1 / 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N,
          i = [];
        (e = t[0]),
          G(),
          o.has(e) && i.push("◌"),
          t.length > r &&
            ((r >>= 1), (t = [...t.slice(0, r), 8230, ...t.slice(-r)]));
        let s = 0,
          a = t.length;
        for (let e = 0; e < a; e++) {
          let r = t[e];
          W(r) && (i.push(I(t.slice(s, e))), i.push(n(r)), (s = e + 1));
        }
        return i.push(I(t.slice(s, a))), i.join("");
      }
      function W(t) {
        return G(), u.has(t);
      }
      function V(t) {
        return Error("disallowed character: ".concat(H(t)));
      }
      function j(t, e) {
        let r = H(e),
          n = c.find((t) => t.P.has(e));
        return (
          n && (r = "".concat(n.N, " ").concat(r)),
          Error("illegal mixture: ".concat(t.N, " + ").concat(r))
        );
      }
      function J(t) {
        return Error("illegal placement: ".concat(t));
      }
      function K(t) {
        return t.filter((t) => 65039 != t);
      }
      let q = new Uint8Array(32);
      function Z(t) {
        return (
          (0, A.assertArgument)(
            0 !== t.length,
            "invalid ENS name; empty component",
            "comp",
            t
          ),
          t
        );
      }
      function Y(t) {
        let e = (0, w.toUtf8Bytes)(X(t)),
          r = [];
        if (0 === t.length) return r;
        let n = 0;
        for (let t = 0; t < e.length; t++)
          46 === e[t] && (r.push(Z(e.slice(n, t))), (n = t + 1));
        return (
          (0, A.assertArgument)(
            n < e.length,
            "invalid ENS name; empty component",
            "name",
            t
          ),
          r.push(Z(e.slice(n))),
          r
        );
      }
      function X(t) {
        try {
          var e;
          if (0 === t.length) throw Error("empty label");
          return (e = (function (t, e, r) {
            if (!t) return [];
            G();
            let n = 0;
            return t.split(".").map((t) => {
              let i = (function (t) {
                  let e = [];
                  for (let r = 0, n = t.length; r < n; ) {
                    let n = t.codePointAt(r);
                    (r += n < 65536 ? 1 : 2), e.push(n);
                  }
                  return e;
                })(t),
                u = { input: i, offset: n };
              n += i.length + 1;
              try {
                let t,
                  n = (u.tokens = (function (t, e, r) {
                    let n = [],
                      i = [];
                    for (t = t.slice().reverse(); t.length; ) {
                      let o = (function (t, e) {
                        let r,
                          n = p,
                          i = t.length;
                        for (; i && (n = n.get(t[--i])); ) {
                          let { V: e } = n;
                          e && ((r = e), (t.length = i));
                        }
                        return r;
                      })(t);
                      if (o) i.length && (n.push(e(i)), (i = [])), n.push(r(o));
                      else {
                        let e = t.pop();
                        if (d.has(e)) i.push(e);
                        else {
                          let t = s.get(e);
                          if (t) i.push(...t);
                          else if (!a.has(e)) throw V(e);
                        }
                      }
                    }
                    return i.length && n.push(e(i)), n;
                  })(i, e, r)),
                  h = n.length;
                if (!h) throw Error("empty label");
                let g = (u.output = n.flat());
                for (let t = g.lastIndexOf(95); t > 0; )
                  if (95 !== g[--t])
                    throw Error("underscore allowed only at start");
                if (
                  !(u.emoji = h > 1 || n[0].is_emoji) &&
                  g.every((t) => t < 128)
                ) {
                  if (g.length >= 4 && 45 == g[2] && 45 == g[3])
                    throw Error(
                      'invalid label extension: "'.concat(I(g.slice(0, 4)), '"')
                    );
                  t = "ASCII";
                } else {
                  let e = n.flatMap((t) => (t.is_emoji ? [] : t));
                  if (e.length) {
                    if (o.has(g[0])) throw J("leading combining mark");
                    for (let t = 1; t < h; t++) {
                      let e = n[t];
                      if (!e.is_emoji && o.has(e[0]))
                        throw J(
                          'emoji + combining mark: "'
                            .concat(I(n[t - 1]), " + ")
                            .concat(z([e[0]]), '"')
                        );
                    }
                    !(function (t) {
                      let e = t[0],
                        r = b.get(e);
                      if (r) throw J("leading ".concat(r));
                      let n = t.length,
                        i = -1;
                      for (let s = 1; s < n; s++) {
                        e = t[s];
                        let n = b.get(e);
                        if (n) {
                          if (i == s) throw J("".concat(r, " + ").concat(n));
                          (i = s + 1), (r = n);
                        }
                      }
                      if (i == n) throw J("trailing ".concat(r));
                    })(g);
                    let r = D(new Set(e)),
                      [i] = (function (t) {
                        let e = c;
                        for (let r of t) {
                          let t = e.filter((t) => L(t, r));
                          if (!t.length)
                            if (c.some((t) => L(t, r))) throw j(e[0], r);
                            else throw V(r);
                          if (((e = t), 1 == t.length)) break;
                        }
                        return e;
                      })(r);
                    (function (t, e) {
                      for (let r of e) if (!L(t, r)) throw j(t, r);
                      if (t.M) {
                        let t = U(e).map(T);
                        for (let e = 1, r = t.length; e < r; e++)
                          if (l.has(t[e])) {
                            let n = e + 1;
                            for (let i; n < r && l.has((i = t[n])); n++)
                              for (let r = e; r < n; r++)
                                if (t[r] == i)
                                  throw Error(
                                    "duplicate non-spacing marks: ".concat(H(i))
                                  );
                            if (n - e > 4)
                              throw Error(
                                "excessive non-spacing marks: "
                                  .concat(Q(z(t.slice(e - 1, n))), " (")
                                  .concat(n - e, "/")
                                  .concat(4, ")")
                              );
                            e = n;
                          }
                      }
                    })(i, e),
                      (function (t, e) {
                        let r,
                          n = [];
                        for (let t of e) {
                          let e = f.get(t);
                          if (1 === e) return;
                          if (e) {
                            let n = e.M.get(t);
                            if (
                              !(r = r ? r.filter((t) => n.has(t)) : D(n)).length
                            )
                              return;
                          } else n.push(t);
                        }
                        if (r) {
                          for (let e of r)
                            if (n.every((t) => L(e, t)))
                              throw Error(
                                "whole-script confusable: "
                                  .concat(t.N, "/")
                                  .concat(e.N)
                              );
                        }
                      })(i, r),
                      (t = i.N);
                  } else t = "Emoji";
                }
                u.type = t;
              } catch (t) {
                u.error = t;
              }
              return u;
            });
          })(t, F, K))
            .map((t) => {
              let { input: r, error: n, output: i } = t;
              if (n) {
                let t = n.message;
                throw Error(
                  1 == e.length
                    ? t
                    : "Invalid label ".concat(Q(z(r, 63)), ": ").concat(t)
                );
              }
              return I(i);
            })
            .join(".");
        } catch (e) {
          (0, A.assertArgument)(
            !1,
            "invalid ENS name (".concat(e.message, ")"),
            "name",
            t
          );
        }
      }
      function $(t) {
        try {
          return 0 !== Y(t).length;
        } catch (t) {}
        return !1;
      }
      function tt(t) {
        (0, A.assertArgument)(
          "string" == typeof t,
          "invalid ENS name; not a string",
          "name",
          t
        ),
          (0, A.assertArgument)(
            t.length,
            "invalid ENS name (empty label)",
            "name",
            t
          );
        let e = q,
          r = Y(t);
        for (; r.length; )
          e = (0, m.keccak256)((0, y.concat)([e, (0, m.keccak256)(r.pop())]));
        return (0, y.hexlify)(e);
      }
      function te(t, e) {
        let r = null != e ? e : 63;
        return (
          (0, A.assertArgument)(
            r <= 255,
            "DNS encoded label cannot exceed 255",
            "length",
            r
          ),
          (0, y.hexlify)(
            (0, y.concat)(
              Y(t).map((e) => {
                (0, A.assertArgument)(
                  e.length <= r,
                  "label "
                    .concat(JSON.stringify(t), " exceeds ")
                    .concat(r, " bytes"),
                  "name",
                  t
                );
                let n = new Uint8Array(e.length + 1);
                return n.set(e, 1), (n[0] = n.length - 1), n;
              })
            )
          ) + "00"
        );
      }
      q.fill(0);
    },
    820626: (t) => {
      "use strict";
      t.s({ pbkdf2: () => i });
      var e = t.i(951562),
        r = t.i(681665),
        n = t.i(825423);
      function i(t, i, s, a) {
        var o;
        let l,
          {
            c: u,
            dkLen: c,
            DK: h,
            PRF: f,
            PRFSalt: d,
          } = (function (t, i, s, a) {
            (0, e.hash)(t);
            let {
              c: o,
              dkLen: l,
              asyncTick: u,
            } = (0, n.checkOpts)({ dkLen: 32, asyncTick: 10 }, a);
            if (((0, e.number)(o), (0, e.number)(l), (0, e.number)(u), o < 1))
              throw Error("PBKDF2: iterations (c) should be >= 1");
            let c = (0, n.toBytes)(i),
              h = (0, n.toBytes)(s),
              f = new Uint8Array(l),
              d = r.hmac.create(t, c),
              g = d._cloneInto().update(h);
            return { c: o, dkLen: l, asyncTick: u, DK: f, PRF: d, PRFSalt: g };
          })(t, i, s, a),
          g = new Uint8Array(4),
          p = (0, n.createView)(g),
          m = new Uint8Array(f.outputLen);
        for (let t = 1, e = 0; e < c; t++, e += f.outputLen) {
          let r = h.subarray(e, e + f.outputLen);
          p.setInt32(0, t, !1),
            (l = d._cloneInto(l)).update(g).digestInto(m),
            r.set(m.subarray(0, r.length));
          for (let t = 1; t < u; t++) {
            f._cloneInto(l).update(m).digestInto(m);
            for (let t = 0; t < r.length; t++) r[t] ^= m[t];
          }
        }
        return (
          (o = l), f.destroy(), d.destroy(), o && o.destroy(), m.fill(0), h
        );
      }
    },
    83870: [
      (t) => {
        "use strict";
        t.s({ sha256: () => N, sha512: () => I }, 83870),
          t.s(
            {
              createHash: () => m,
              createHmac: () => y,
              pbkdf2Sync: () => A,
              randomBytes: () => w,
            },
            188313
          );
        var e = t.i(681665),
          r = t.i(820626),
          n = t.i(239141),
          i = t.i(966335),
          s = t.i(849530),
          a = t.i(825423);
        let [o, l] = s.default.split(
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
            ].map((t) => BigInt(t))
          ),
          u = new Uint32Array(80),
          c = new Uint32Array(80);
        class h extends i.SHA2 {
          get() {
            let {
              Ah: t,
              Al: e,
              Bh: r,
              Bl: n,
              Ch: i,
              Cl: s,
              Dh: a,
              Dl: o,
              Eh: l,
              El: u,
              Fh: c,
              Fl: h,
              Gh: f,
              Gl: d,
              Hh: g,
              Hl: p,
            } = this;
            return [t, e, r, n, i, s, a, o, l, u, c, h, f, d, g, p];
          }
          set(t, e, r, n, i, s, a, o, l, u, c, h, f, d, g, p) {
            (this.Ah = 0 | t),
              (this.Al = 0 | e),
              (this.Bh = 0 | r),
              (this.Bl = 0 | n),
              (this.Ch = 0 | i),
              (this.Cl = 0 | s),
              (this.Dh = 0 | a),
              (this.Dl = 0 | o),
              (this.Eh = 0 | l),
              (this.El = 0 | u),
              (this.Fh = 0 | c),
              (this.Fl = 0 | h),
              (this.Gh = 0 | f),
              (this.Gl = 0 | d),
              (this.Hh = 0 | g),
              (this.Hl = 0 | p);
          }
          process(t, e) {
            for (let r = 0; r < 16; r++, e += 4)
              (u[r] = t.getUint32(e)), (c[r] = t.getUint32((e += 4)));
            for (let t = 16; t < 80; t++) {
              let e = 0 | u[t - 15],
                r = 0 | c[t - 15],
                n =
                  s.default.rotrSH(e, r, 1) ^
                  s.default.rotrSH(e, r, 8) ^
                  s.default.shrSH(e, r, 7),
                i =
                  s.default.rotrSL(e, r, 1) ^
                  s.default.rotrSL(e, r, 8) ^
                  s.default.shrSL(e, r, 7),
                a = 0 | u[t - 2],
                o = 0 | c[t - 2],
                l =
                  s.default.rotrSH(a, o, 19) ^
                  s.default.rotrBH(a, o, 61) ^
                  s.default.shrSH(a, o, 6),
                h =
                  s.default.rotrSL(a, o, 19) ^
                  s.default.rotrBL(a, o, 61) ^
                  s.default.shrSL(a, o, 6),
                f = s.default.add4L(i, h, c[t - 7], c[t - 16]),
                d = s.default.add4H(f, n, l, u[t - 7], u[t - 16]);
              (u[t] = 0 | d), (c[t] = 0 | f);
            }
            let {
              Ah: r,
              Al: n,
              Bh: i,
              Bl: a,
              Ch: h,
              Cl: f,
              Dh: d,
              Dl: g,
              Eh: p,
              El: m,
              Fh: y,
              Fl: A,
              Gh: w,
              Gl: b,
              Hh: E,
              Hl: _,
            } = this;
            for (let t = 0; t < 80; t++) {
              let e =
                  s.default.rotrSH(p, m, 14) ^
                  s.default.rotrSH(p, m, 18) ^
                  s.default.rotrBH(p, m, 41),
                x =
                  s.default.rotrSL(p, m, 14) ^
                  s.default.rotrSL(p, m, 18) ^
                  s.default.rotrBL(p, m, 41),
                B = (p & y) ^ (~p & w),
                k = (m & A) ^ (~m & b),
                P = s.default.add5L(_, x, k, l[t], c[t]),
                N = s.default.add5H(P, E, e, B, o[t], u[t]),
                I = 0 | P,
                C =
                  s.default.rotrSH(r, n, 28) ^
                  s.default.rotrBH(r, n, 34) ^
                  s.default.rotrBH(r, n, 39),
                O =
                  s.default.rotrSL(r, n, 28) ^
                  s.default.rotrBL(r, n, 34) ^
                  s.default.rotrBL(r, n, 39),
                R = (r & i) ^ (r & h) ^ (i & h),
                T = (n & a) ^ (n & f) ^ (a & f);
              (E = 0 | w),
                (_ = 0 | b),
                (w = 0 | y),
                (b = 0 | A),
                (y = 0 | p),
                (A = 0 | m),
                ({ h: p, l: m } = s.default.add(0 | d, 0 | g, 0 | N, 0 | I)),
                (d = 0 | h),
                (g = 0 | f),
                (h = 0 | i),
                (f = 0 | a),
                (i = 0 | r),
                (a = 0 | n);
              let S = s.default.add3L(I, O, T);
              (r = s.default.add3H(S, N, C, R)), (n = 0 | S);
            }
            ({ h: r, l: n } = s.default.add(
              0 | this.Ah,
              0 | this.Al,
              0 | r,
              0 | n
            )),
              ({ h: i, l: a } = s.default.add(
                0 | this.Bh,
                0 | this.Bl,
                0 | i,
                0 | a
              )),
              ({ h: h, l: f } = s.default.add(
                0 | this.Ch,
                0 | this.Cl,
                0 | h,
                0 | f
              )),
              ({ h: d, l: g } = s.default.add(
                0 | this.Dh,
                0 | this.Dl,
                0 | d,
                0 | g
              )),
              ({ h: p, l: m } = s.default.add(
                0 | this.Eh,
                0 | this.El,
                0 | p,
                0 | m
              )),
              ({ h: y, l: A } = s.default.add(
                0 | this.Fh,
                0 | this.Fl,
                0 | y,
                0 | A
              )),
              ({ h: w, l: b } = s.default.add(
                0 | this.Gh,
                0 | this.Gl,
                0 | w,
                0 | b
              )),
              ({ h: E, l: _ } = s.default.add(
                0 | this.Hh,
                0 | this.Hl,
                0 | E,
                0 | _
              )),
              this.set(r, n, i, a, h, f, d, g, p, m, y, A, w, b, E, _);
          }
          roundClean() {
            u.fill(0), c.fill(0);
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
        let f = (0, a.wrapConstructor)(() => new h());
        var d = t.i(13517);
        let g =
            "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : globalThis,
          p = g.crypto || g.msCrypto;
        function m(t) {
          switch (t) {
            case "sha256":
              return n.sha256.create();
            case "sha512":
              return f.create();
          }
          (0, d.assertArgument)(
            !1,
            "invalid hashing algorithm name",
            "algorithm",
            t
          );
        }
        function y(t, r) {
          let i = { sha256: n.sha256, sha512: f }[t];
          return (
            (0, d.assertArgument)(
              null != i,
              "invalid hmac algorithm",
              "algorithm",
              t
            ),
            e.hmac.create(i, r)
          );
        }
        function A(t, e, i, s, a) {
          let o = { sha256: n.sha256, sha512: f }[a];
          return (
            (0, d.assertArgument)(
              null != o,
              "invalid pbkdf2 algorithm",
              "algorithm",
              a
            ),
            (0, r.pbkdf2)(o, t, e, { c: i, dkLen: s })
          );
        }
        function w(t) {
          (0, d.assert)(
            null != p,
            "platform does not support secure random numbers",
            "UNSUPPORTED_OPERATION",
            { operation: "randomBytes" }
          ),
            (0, d.assertArgument)(
              Number.isInteger(t) && t > 0 && t <= 1024,
              "invalid length",
              "length",
              t
            );
          let e = new Uint8Array(t);
          return p.getRandomValues(e), e;
        }
        var b = t.i(713514);
        let E = function (t) {
            return m("sha256").update(t).digest();
          },
          _ = function (t) {
            return m("sha512").update(t).digest();
          },
          x = E,
          B = _,
          k = !1,
          P = !1;
        function N(t) {
          let e = (0, b.getBytes)(t, "data");
          return (0, b.hexlify)(x(e));
        }
        function I(t) {
          let e = (0, b.getBytes)(t, "data");
          return (0, b.hexlify)(B(e));
        }
        (N._ = E),
          (N.lock = function () {
            k = !0;
          }),
          (N.register = function (t) {
            if (k) throw Error("sha256 is locked");
            x = t;
          }),
          Object.freeze(N),
          (I._ = _),
          (I.lock = function () {
            P = !0;
          }),
          (I.register = function (t) {
            if (P) throw Error("sha512 is locked");
            B = t;
          }),
          Object.freeze(N);
      },
      [188313],
    ],
    97290: (t) => {
      "use strict";
      t.s({ decodeRlp: () => a });
      var e = t.i(713514),
        r = t.i(13517);
      function n(t, e, r) {
        let n = 0;
        for (let i = 0; i < r; i++) n = 256 * n + t[e + i];
        return n;
      }
      function i(t, e, n, i) {
        let a = [];
        for (; n < e + 1 + i; ) {
          let o = s(t, n);
          a.push(o.result),
            (n += o.consumed),
            (0, r.assert)(
              n <= e + 1 + i,
              "child data too short",
              "BUFFER_OVERRUN",
              { buffer: t, length: i, offset: e }
            );
        }
        return { consumed: 1 + i, result: a };
      }
      function s(t, s) {
        (0, r.assert)(0 !== t.length, "data too short", "BUFFER_OVERRUN", {
          buffer: t,
          length: 0,
          offset: 1,
        });
        let a = (e) => {
          (0, r.assert)(
            e <= t.length,
            "data short segment too short",
            "BUFFER_OVERRUN",
            { buffer: t, length: t.length, offset: e }
          );
        };
        if (t[s] >= 248) {
          let e = t[s] - 247;
          a(s + 1 + e);
          let r = n(t, s + 1, e);
          return a(s + 1 + e + r), i(t, s, s + 1 + e, e + r);
        }
        if (t[s] >= 192) {
          let e = t[s] - 192;
          return a(s + 1 + e), i(t, s, s + 1, e);
        }
        if (t[s] >= 184) {
          let r = t[s] - 183;
          a(s + 1 + r);
          let i = n(t, s + 1, r);
          a(s + 1 + r + i);
          let o = (0, e.hexlify)(t.slice(s + 1 + r, s + 1 + r + i));
          return { consumed: 1 + r + i, result: o };
        }
        if (t[s] >= 128) {
          let r = t[s] - 128;
          a(s + 1 + r);
          let n = (0, e.hexlify)(t.slice(s + 1, s + 1 + r));
          return { consumed: 1 + r, result: n };
        }
        return {
          consumed: 1,
          result: (function (t) {
            let e = t.toString(16);
            for (; e.length < 2; ) e = "0" + e;
            return "0x" + e;
          })(t[s]),
        };
      }
      function a(t) {
        let n = (0, e.getBytes)(t, "data"),
          i = s(n, 0);
        return (
          (0, r.assertArgument)(
            i.consumed === n.length,
            "unexpected junk after rlp payload",
            "data",
            t
          ),
          i.result
        );
      }
    },
    55488: (t) => {
      "use strict";
      t.s({ encodeRlp: () => i });
      var e = t.i(713514);
      function r(t) {
        let e = [];
        for (; t; ) e.unshift(255 & t), (t >>= 8);
        return e;
      }
      let n = "0123456789abcdef";
      function i(t) {
        let i = "0x";
        for (let s of (function t(n) {
          if (Array.isArray(n)) {
            let e = [];
            if (
              (n.forEach(function (r) {
                e = e.concat(t(r));
              }),
              e.length <= 55)
            )
              return e.unshift(192 + e.length), e;
            let i = r(e.length);
            return i.unshift(247 + i.length), i.concat(e);
          }
          let i = Array.prototype.slice.call((0, e.getBytes)(n, "object"));
          if (1 === i.length && i[0] <= 127) return i;
          if (i.length <= 55) return i.unshift(128 + i.length), i;
          let s = r(i.length);
          return s.unshift(183 + s.length), s.concat(i);
        })(t))
          (i += n[s >> 4]), (i += n[15 & s]);
        return i;
      }
    },
    83595: [
      (t) => {
        "use strict";
        t.s({ Transaction: () => $ }, 83595);
        var e = t.i(300522),
          r = t.i(216788),
          n = t.i(725039),
          i = t.i(52992),
          s = t.i(153525),
          a = t.i(978895),
          o = t.i(17721),
          l = t.i(749401),
          u = t.i(83870),
          c = t.i(599852),
          h = t.i(821038),
          f = t.i(713514),
          d = t.i(97290),
          g = t.i(55488),
          p = t.i(219223),
          m = t.i(13517),
          y = t.i(816028),
          A = t.i(292420),
          w = t.i(256717);
        let b = BigInt(0),
          E = BigInt(2),
          _ = BigInt(27),
          x = BigInt(28),
          B = BigInt(35),
          k = BigInt(
            "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
          );
        function P(t, e) {
          let r = t.toString(16);
          for (; r.length < 2; ) r = "0" + r;
          return "0x" + (r += (0, u.sha256)(e).substring(4));
        }
        function N(t) {
          return "0x" === t ? null : (0, a.getAddress)(t);
        }
        function I(t, e) {
          try {
            return (0, y.accessListify)(t);
          } catch (r) {
            (0, m.assertArgument)(!1, r.message, e, t);
          }
        }
        function C(t, e) {
          return "0x" === t ? 0 : (0, p.getNumber)(t, e);
        }
        function O(t, e) {
          if ("0x" === t) return b;
          let r = (0, p.getBigInt)(t, e);
          return (
            (0, m.assertArgument)(r <= k, "value exceeds uint size", e, r), r
          );
        }
        function R(t, e) {
          let r = (0, p.getBigInt)(t, "value"),
            n = (0, p.toBeArray)(r);
          return (
            (0, m.assertArgument)(
              n.length <= 32,
              "value too large",
              "tx.".concat(e),
              r
            ),
            n
          );
        }
        function T(t) {
          return (0, y.accessListify)(t).map((t) => [t.address, t.storageKeys]);
        }
        function S(t, e) {
          let r;
          try {
            if (((r = C(e[0], "yParity")), 0 !== r && 1 !== r))
              throw Error("bad yParity");
          } catch (t) {
            (0, m.assertArgument)(!1, "invalid yParity", "yParity", e[0]);
          }
          let n = (0, f.zeroPadValue)(e[1], 32),
            i = (0, f.zeroPadValue)(e[2], 32);
          t.signature = c.Signature.from({ r: n, s: i, yParity: r });
        }
        var U = new WeakMap(),
          F = new WeakMap(),
          D = new WeakMap(),
          L = new WeakMap(),
          M = new WeakMap(),
          G = new WeakMap(),
          H = new WeakMap(),
          Q = new WeakMap(),
          z = new WeakMap(),
          W = new WeakMap(),
          V = new WeakMap(),
          j = new WeakMap(),
          J = new WeakMap(),
          K = new WeakMap(),
          q = new WeakMap(),
          Z = new WeakMap(),
          Y = new WeakMap(),
          X = new WeakSet();
        class $ {
          get type() {
            return (0, e._)(this, U);
          }
          set type(t) {
            switch (t) {
              case null:
                (0, n._)(this, U, null);
                break;
              case 0:
              case "legacy":
                (0, n._)(this, U, 0);
                break;
              case 1:
              case "berlin":
              case "eip-2930":
                (0, n._)(this, U, 1);
                break;
              case 2:
              case "london":
              case "eip-1559":
                (0, n._)(this, U, 2);
                break;
              case 3:
              case "cancun":
              case "eip-4844":
                (0, n._)(this, U, 3);
                break;
              case 4:
              case "pectra":
              case "eip-7702":
                (0, n._)(this, U, 4);
                break;
              default:
                (0, m.assertArgument)(
                  !1,
                  "unsupported transaction type",
                  "type",
                  t
                );
            }
          }
          get typeName() {
            switch (this.type) {
              case 0:
                return "legacy";
              case 1:
                return "eip-2930";
              case 2:
                return "eip-1559";
              case 3:
                return "eip-4844";
              case 4:
                return "eip-7702";
            }
            return null;
          }
          get to() {
            let t = (0, e._)(this, F);
            return null == t && 3 === this.type ? o.ZeroAddress : t;
          }
          set to(t) {
            (0, n._)(this, F, null == t ? null : (0, a.getAddress)(t));
          }
          get nonce() {
            return (0, e._)(this, L);
          }
          set nonce(t) {
            (0, n._)(this, L, (0, p.getNumber)(t, "value"));
          }
          get gasLimit() {
            return (0, e._)(this, M);
          }
          set gasLimit(t) {
            (0, n._)(this, M, (0, p.getBigInt)(t));
          }
          get gasPrice() {
            let t = (0, e._)(this, G);
            return null == t && (0 === this.type || 1 === this.type) ? b : t;
          }
          set gasPrice(t) {
            (0, n._)(
              this,
              G,
              null == t ? null : (0, p.getBigInt)(t, "gasPrice")
            );
          }
          get maxPriorityFeePerGas() {
            let t = (0, e._)(this, H);
            return null == t
              ? 2 === this.type || 3 === this.type
                ? b
                : null
              : t;
          }
          set maxPriorityFeePerGas(t) {
            (0, n._)(
              this,
              H,
              null == t ? null : (0, p.getBigInt)(t, "maxPriorityFeePerGas")
            );
          }
          get maxFeePerGas() {
            let t = (0, e._)(this, Q);
            return null == t
              ? 2 === this.type || 3 === this.type
                ? b
                : null
              : t;
          }
          set maxFeePerGas(t) {
            (0, n._)(
              this,
              Q,
              null == t ? null : (0, p.getBigInt)(t, "maxFeePerGas")
            );
          }
          get data() {
            return (0, e._)(this, D);
          }
          set data(t) {
            (0, n._)(this, D, (0, f.hexlify)(t));
          }
          get value() {
            return (0, e._)(this, z);
          }
          set value(t) {
            (0, n._)(this, z, (0, p.getBigInt)(t, "value"));
          }
          get chainId() {
            return (0, e._)(this, W);
          }
          set chainId(t) {
            (0, n._)(this, W, (0, p.getBigInt)(t));
          }
          get signature() {
            return (0, e._)(this, V) || null;
          }
          set signature(t) {
            (0, n._)(this, V, null == t ? null : c.Signature.from(t));
          }
          get accessList() {
            let t = (0, e._)(this, j) || null;
            return null == t
              ? 1 === this.type || 2 === this.type || 3 === this.type
                ? []
                : null
              : t;
          }
          set accessList(t) {
            (0, n._)(this, j, null == t ? null : (0, y.accessListify)(t));
          }
          get authorizationList() {
            let t = (0, e._)(this, Y) || null;
            return null == t && 4 === this.type ? [] : t;
          }
          set authorizationList(t) {
            (0, n._)(
              this,
              Y,
              null == t ? null : t.map((t) => (0, A.authorizationify)(t))
            );
          }
          get maxFeePerBlobGas() {
            let t = (0, e._)(this, J);
            return null == t && 3 === this.type ? b : t;
          }
          set maxFeePerBlobGas(t) {
            (0, n._)(
              this,
              J,
              null == t ? null : (0, p.getBigInt)(t, "maxFeePerBlobGas")
            );
          }
          get blobVersionedHashes() {
            let t = (0, e._)(this, K);
            return null == t && 3 === this.type ? [] : t;
          }
          set blobVersionedHashes(t) {
            if (null != t) {
              (0, m.assertArgument)(
                Array.isArray(t),
                "blobVersionedHashes must be an Array",
                "value",
                t
              ),
                (t = t.slice());
              for (let e = 0; e < t.length; e++)
                (0, m.assertArgument)(
                  (0, f.isHexString)(t[e], 32),
                  "invalid blobVersionedHash",
                  "value[".concat(e, "]"),
                  t[e]
                );
            }
            (0, n._)(this, K, t);
          }
          get blobs() {
            return null == (0, e._)(this, Z)
              ? null
              : (0, e._)(this, Z).map((t) => Object.assign({}, t));
          }
          set blobs(t) {
            if (null == t) return void (0, n._)(this, Z, null);
            let r = [],
              i = [];
            for (let n = 0; n < t.length; n++) {
              let s = t[n];
              if ((0, f.isBytesLike)(s)) {
                (0, m.assert)(
                  (0, e._)(this, q),
                  "adding a raw blob requires a KZG library",
                  "UNSUPPORTED_OPERATION",
                  { operation: "set blobs()" }
                );
                let t = (0, f.getBytes)(s);
                if (
                  ((0, m.assertArgument)(
                    t.length <= 131072,
                    "blob is too large",
                    "blobs[".concat(n, "]"),
                    s
                  ),
                  131072 !== t.length)
                ) {
                  let e = new Uint8Array(131072);
                  e.set(t), (t = e);
                }
                let a = (0, e._)(this, q).blobToKzgCommitment(t),
                  o = (0, f.hexlify)(
                    (0, e._)(this, q).computeBlobKzgProof(t, a)
                  );
                r.push({
                  data: (0, f.hexlify)(t),
                  commitment: (0, f.hexlify)(a),
                  proof: o,
                }),
                  i.push(P(1, a));
              } else {
                let t = (0, f.hexlify)(s.commitment);
                r.push({
                  data: (0, f.hexlify)(s.data),
                  commitment: t,
                  proof: (0, f.hexlify)(s.proof),
                }),
                  i.push(P(1, t));
              }
            }
            (0, n._)(this, Z, r), (0, n._)(this, K, i);
          }
          get kzg() {
            return (0, e._)(this, q);
          }
          set kzg(t) {
            if (null == t) (0, n._)(this, q, null);
            else
              (0, n._)(this, q, {
                blobToKzgCommitment: (e) => {
                  if ("computeBlobProof" in t) {
                    if (
                      "blobToKzgCommitment" in t &&
                      "function" == typeof t.blobToKzgCommitment
                    )
                      return (0, f.getBytes)(
                        t.blobToKzgCommitment((0, f.hexlify)(e))
                      );
                  } else if (
                    "blobToKzgCommitment" in t &&
                    "function" == typeof t.blobToKzgCommitment
                  )
                    return (0, f.getBytes)(t.blobToKzgCommitment(e));
                  if (
                    "blobToKZGCommitment" in t &&
                    "function" == typeof t.blobToKZGCommitment
                  )
                    return (0, f.getBytes)(
                      t.blobToKZGCommitment((0, f.hexlify)(e))
                    );
                  (0, m.assertArgument)(
                    !1,
                    "unsupported KZG library",
                    "kzg",
                    t
                  );
                },
                computeBlobKzgProof: (e, r) =>
                  "computeBlobProof" in t &&
                  "function" == typeof t.computeBlobProof
                    ? (0, f.getBytes)(
                        t.computeBlobProof((0, f.hexlify)(e), (0, f.hexlify)(r))
                      )
                    : "computeBlobKzgProof" in t &&
                      "function" == typeof t.computeBlobKzgProof
                    ? t.computeBlobKzgProof(e, r)
                    : "computeBlobKZGProof" in t &&
                      "function" == typeof t.computeBlobKZGProof
                    ? (0, f.getBytes)(
                        t.computeBlobKZGProof(
                          (0, f.hexlify)(e),
                          (0, f.hexlify)(r)
                        )
                      )
                    : void (0, m.assertArgument)(
                        !1,
                        "unsupported KZG library",
                        "kzg",
                        t
                      ),
              });
          }
          get hash() {
            return null == this.signature
              ? null
              : (0, l.keccak256)((0, i._)(this, X, tt).call(this, !0, !1));
          }
          get unsignedHash() {
            return (0, l.keccak256)(this.unsignedSerialized);
          }
          get from() {
            return null == this.signature
              ? null
              : (0, w.recoverAddress)(this.unsignedHash, this.signature);
          }
          get fromPublicKey() {
            return null == this.signature
              ? null
              : h.SigningKey.recoverPublicKey(
                  this.unsignedHash,
                  this.signature
                );
          }
          isSigned() {
            return null != this.signature;
          }
          get serialized() {
            return (0, i._)(this, X, tt).call(this, !0, !0);
          }
          get unsignedSerialized() {
            return (0, i._)(this, X, tt).call(this, !1, !1);
          }
          inferType() {
            let t = this.inferTypes();
            return t.indexOf(2) >= 0 ? 2 : t.pop();
          }
          inferTypes() {
            let t = null != this.gasPrice,
              r =
                null != this.maxFeePerGas || null != this.maxPriorityFeePerGas,
              n = null != this.accessList,
              i = null != (0, e._)(this, J) || (0, e._)(this, K);
            null != this.maxFeePerGas &&
              null != this.maxPriorityFeePerGas &&
              (0, m.assert)(
                this.maxFeePerGas >= this.maxPriorityFeePerGas,
                "priorityFee cannot be more than maxFee",
                "BAD_DATA",
                { value: this }
              ),
              (0, m.assert)(
                !r || (0 !== this.type && 1 !== this.type),
                "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas",
                "BAD_DATA",
                { value: this }
              ),
              (0, m.assert)(
                0 !== this.type || !n,
                "legacy transaction cannot have accessList",
                "BAD_DATA",
                { value: this }
              );
            let s = [];
            return (
              null != this.type
                ? s.push(this.type)
                : this.authorizationList && this.authorizationList.length
                ? s.push(4)
                : r
                ? s.push(2)
                : t
                ? (s.push(1), n || s.push(0))
                : n
                ? (s.push(1), s.push(2))
                : ((i && this.to) || (s.push(0), s.push(1), s.push(2)),
                  s.push(3)),
              s.sort(),
              s
            );
          }
          isLegacy() {
            return 0 === this.type;
          }
          isBerlin() {
            return 1 === this.type;
          }
          isLondon() {
            return 2 === this.type;
          }
          isCancun() {
            return 3 === this.type;
          }
          clone() {
            return $.from(this);
          }
          toJSON() {
            let t = (t) => (null == t ? null : t.toString());
            return {
              type: this.type,
              to: this.to,
              data: this.data,
              nonce: this.nonce,
              gasLimit: t(this.gasLimit),
              gasPrice: t(this.gasPrice),
              maxPriorityFeePerGas: t(this.maxPriorityFeePerGas),
              maxFeePerGas: t(this.maxFeePerGas),
              value: t(this.value),
              chainId: t(this.chainId),
              sig: this.signature ? this.signature.toJSON() : null,
              accessList: this.accessList,
            };
          }
          static from(t) {
            if (null == t) return new $();
            if ("string" == typeof t) {
              let e = (0, f.getBytes)(t);
              if (e[0] >= 127)
                return $.from(
                  (function (t) {
                    let e = (0, d.decodeRlp)(t);
                    (0, m.assertArgument)(
                      Array.isArray(e) && (9 === e.length || 6 === e.length),
                      "invalid field count for legacy transaction",
                      "data",
                      t
                    );
                    let r = {
                      type: 0,
                      nonce: C(e[0], "nonce"),
                      gasPrice: O(e[1], "gasPrice"),
                      gasLimit: O(e[2], "gasLimit"),
                      to: N(e[3]),
                      value: O(e[4], "value"),
                      data: (0, f.hexlify)(e[5]),
                      chainId: b,
                    };
                    if (6 === e.length) return r;
                    let n = O(e[6], "v"),
                      i = O(e[7], "r"),
                      s = O(e[8], "s");
                    if (i === b && s === b) r.chainId = n;
                    else {
                      let t = (n - B) / E;
                      t < b && (t = b),
                        (r.chainId = t),
                        (0, m.assertArgument)(
                          t !== b || n === _ || n === x,
                          "non-canonical legacy v",
                          "v",
                          e[6]
                        ),
                        (r.signature = c.Signature.from({
                          r: (0, f.zeroPadValue)(e[7], 32),
                          s: (0, f.zeroPadValue)(e[8], 32),
                          v: n,
                        }));
                    }
                    return r;
                  })(e)
                );
              switch (e[0]) {
                case 1:
                  return $.from(
                    (function (t) {
                      let e = (0, d.decodeRlp)((0, f.getBytes)(t).slice(1));
                      (0, m.assertArgument)(
                        Array.isArray(e) && (8 === e.length || 11 === e.length),
                        "invalid field count for transaction type: 1",
                        "data",
                        (0, f.hexlify)(t)
                      );
                      let r = {
                        type: 1,
                        chainId: O(e[0], "chainId"),
                        nonce: C(e[1], "nonce"),
                        gasPrice: O(e[2], "gasPrice"),
                        gasLimit: O(e[3], "gasLimit"),
                        to: N(e[4]),
                        value: O(e[5], "value"),
                        data: (0, f.hexlify)(e[6]),
                        accessList: I(e[7], "accessList"),
                      };
                      return 8 === e.length || S(r, e.slice(8)), r;
                    })(e)
                  );
                case 2:
                  return $.from(
                    (function (t) {
                      let e = (0, d.decodeRlp)((0, f.getBytes)(t).slice(1));
                      (0, m.assertArgument)(
                        Array.isArray(e) && (9 === e.length || 12 === e.length),
                        "invalid field count for transaction type: 2",
                        "data",
                        (0, f.hexlify)(t)
                      );
                      let r = {
                        type: 2,
                        chainId: O(e[0], "chainId"),
                        nonce: C(e[1], "nonce"),
                        maxPriorityFeePerGas: O(e[2], "maxPriorityFeePerGas"),
                        maxFeePerGas: O(e[3], "maxFeePerGas"),
                        gasPrice: null,
                        gasLimit: O(e[4], "gasLimit"),
                        to: N(e[5]),
                        value: O(e[6], "value"),
                        data: (0, f.hexlify)(e[7]),
                        accessList: I(e[8], "accessList"),
                      };
                      return 9 === e.length || S(r, e.slice(9)), r;
                    })(e)
                  );
                case 3:
                  return $.from(
                    (function (t) {
                      let e = (0, d.decodeRlp)((0, f.getBytes)(t).slice(1)),
                        r = "3",
                        n = null;
                      if (4 === e.length && Array.isArray(e[0])) {
                        r = "3 (network format)";
                        let t = e[1],
                          i = e[2],
                          s = e[3];
                        (0, m.assertArgument)(
                          Array.isArray(t),
                          "invalid network format: blobs not an array",
                          "fields[1]",
                          t
                        ),
                          (0, m.assertArgument)(
                            Array.isArray(i),
                            "invalid network format: commitments not an array",
                            "fields[2]",
                            i
                          ),
                          (0, m.assertArgument)(
                            Array.isArray(s),
                            "invalid network format: proofs not an array",
                            "fields[3]",
                            s
                          ),
                          (0, m.assertArgument)(
                            t.length === i.length,
                            "invalid network format: blobs/commitments length mismatch",
                            "fields",
                            e
                          ),
                          (0, m.assertArgument)(
                            t.length === s.length,
                            "invalid network format: blobs/proofs length mismatch",
                            "fields",
                            e
                          ),
                          (n = []);
                        for (let r = 0; r < e[1].length; r++)
                          n.push({ data: t[r], commitment: i[r], proof: s[r] });
                        e = e[0];
                      }
                      (0, m.assertArgument)(
                        Array.isArray(e) &&
                          (11 === e.length || 14 === e.length),
                        "invalid field count for transaction type: ".concat(r),
                        "data",
                        (0, f.hexlify)(t)
                      );
                      let i = {
                        type: 3,
                        chainId: O(e[0], "chainId"),
                        nonce: C(e[1], "nonce"),
                        maxPriorityFeePerGas: O(e[2], "maxPriorityFeePerGas"),
                        maxFeePerGas: O(e[3], "maxFeePerGas"),
                        gasPrice: null,
                        gasLimit: O(e[4], "gasLimit"),
                        to: N(e[5]),
                        value: O(e[6], "value"),
                        data: (0, f.hexlify)(e[7]),
                        accessList: I(e[8], "accessList"),
                        maxFeePerBlobGas: O(e[9], "maxFeePerBlobGas"),
                        blobVersionedHashes: e[10],
                      };
                      n && (i.blobs = n),
                        (0, m.assertArgument)(
                          null != i.to,
                          "invalid address for transaction type: ".concat(r),
                          "data",
                          t
                        ),
                        (0, m.assertArgument)(
                          Array.isArray(i.blobVersionedHashes),
                          "invalid blobVersionedHashes: must be an array",
                          "data",
                          t
                        );
                      for (let e = 0; e < i.blobVersionedHashes.length; e++)
                        (0, m.assertArgument)(
                          (0, f.isHexString)(i.blobVersionedHashes[e], 32),
                          "invalid blobVersionedHash at index ".concat(
                            e,
                            ": must be length 32"
                          ),
                          "data",
                          t
                        );
                      return 11 === e.length || S(i, e.slice(11)), i;
                    })(e)
                  );
                case 4:
                  return $.from(
                    (function (t) {
                      let e = (0, d.decodeRlp)((0, f.getBytes)(t).slice(1));
                      (0, m.assertArgument)(
                        Array.isArray(e) &&
                          (10 === e.length || 13 === e.length),
                        "invalid field count for transaction type: 4",
                        "data",
                        (0, f.hexlify)(t)
                      );
                      let r = {
                        type: 4,
                        chainId: O(e[0], "chainId"),
                        nonce: C(e[1], "nonce"),
                        maxPriorityFeePerGas: O(e[2], "maxPriorityFeePerGas"),
                        maxFeePerGas: O(e[3], "maxFeePerGas"),
                        gasPrice: null,
                        gasLimit: O(e[4], "gasLimit"),
                        to: N(e[5]),
                        value: O(e[6], "value"),
                        data: (0, f.hexlify)(e[7]),
                        accessList: I(e[8], "accessList"),
                        authorizationList: (function (t, e) {
                          try {
                            if (!Array.isArray(t))
                              throw Error("authorizationList: invalid array");
                            let e = [];
                            for (let r = 0; r < t.length; r++) {
                              let n = t[r];
                              if (!Array.isArray(n))
                                throw Error(
                                  "authorization[".concat(r, "]: invalid array")
                                );
                              if (6 !== n.length)
                                throw Error(
                                  "authorization[".concat(r, "]: wrong length")
                                );
                              if (!n[1])
                                throw Error(
                                  "authorization[".concat(r, "]: null address")
                                );
                              e.push({
                                address: N(n[1]),
                                nonce: O(n[2], "nonce"),
                                chainId: O(n[0], "chainId"),
                                signature: c.Signature.from({
                                  yParity: C(n[3], "yParity"),
                                  r: (0, f.zeroPadValue)(n[4], 32),
                                  s: (0, f.zeroPadValue)(n[5], 32),
                                }),
                              });
                            }
                            return e;
                          } catch (r) {
                            (0, m.assertArgument)(!1, r.message, e, t);
                          }
                        })(e[9], "authorizationList"),
                      };
                      return 10 === e.length || S(r, e.slice(10)), r;
                    })(e)
                  );
              }
              (0, m.assert)(
                !1,
                "unsupported transaction type",
                "UNSUPPORTED_OPERATION",
                { operation: "from" }
              );
            }
            let e = new $();
            return (
              null != t.type && (e.type = t.type),
              null != t.to && (e.to = t.to),
              null != t.nonce && (e.nonce = t.nonce),
              null != t.gasLimit && (e.gasLimit = t.gasLimit),
              null != t.gasPrice && (e.gasPrice = t.gasPrice),
              null != t.maxPriorityFeePerGas &&
                (e.maxPriorityFeePerGas = t.maxPriorityFeePerGas),
              null != t.maxFeePerGas && (e.maxFeePerGas = t.maxFeePerGas),
              null != t.maxFeePerBlobGas &&
                (e.maxFeePerBlobGas = t.maxFeePerBlobGas),
              null != t.data && (e.data = t.data),
              null != t.value && (e.value = t.value),
              null != t.chainId && (e.chainId = t.chainId),
              null != t.signature &&
                (e.signature = c.Signature.from(t.signature)),
              null != t.accessList && (e.accessList = t.accessList),
              null != t.authorizationList &&
                (e.authorizationList = t.authorizationList),
              null != t.blobVersionedHashes &&
                (e.blobVersionedHashes = t.blobVersionedHashes),
              null != t.kzg && (e.kzg = t.kzg),
              null != t.blobs && (e.blobs = t.blobs),
              null != t.hash &&
                ((0, m.assertArgument)(
                  e.isSigned(),
                  "unsigned transaction cannot define '.hash'",
                  "tx",
                  t
                ),
                (0, m.assertArgument)(
                  e.hash === t.hash,
                  "hash mismatch",
                  "tx",
                  t
                )),
              null != t.from &&
                ((0, m.assertArgument)(
                  e.isSigned(),
                  "unsigned transaction cannot define '.from'",
                  "tx",
                  t
                ),
                (0, m.assertArgument)(
                  e.from.toLowerCase() === (t.from || "").toLowerCase(),
                  "from mismatch",
                  "tx",
                  t
                )),
              e
            );
          }
          constructor() {
            (0, s._)(this, X),
              (0, r._)(this, U, { writable: !0, value: void 0 }),
              (0, r._)(this, F, { writable: !0, value: void 0 }),
              (0, r._)(this, D, { writable: !0, value: void 0 }),
              (0, r._)(this, L, { writable: !0, value: void 0 }),
              (0, r._)(this, M, { writable: !0, value: void 0 }),
              (0, r._)(this, G, { writable: !0, value: void 0 }),
              (0, r._)(this, H, { writable: !0, value: void 0 }),
              (0, r._)(this, Q, { writable: !0, value: void 0 }),
              (0, r._)(this, z, { writable: !0, value: void 0 }),
              (0, r._)(this, W, { writable: !0, value: void 0 }),
              (0, r._)(this, V, { writable: !0, value: void 0 }),
              (0, r._)(this, j, { writable: !0, value: void 0 }),
              (0, r._)(this, J, { writable: !0, value: void 0 }),
              (0, r._)(this, K, { writable: !0, value: void 0 }),
              (0, r._)(this, q, { writable: !0, value: void 0 }),
              (0, r._)(this, Z, { writable: !0, value: void 0 }),
              (0, r._)(this, Y, { writable: !0, value: void 0 }),
              (0, n._)(this, U, null),
              (0, n._)(this, F, null),
              (0, n._)(this, L, 0),
              (0, n._)(this, M, b),
              (0, n._)(this, G, null),
              (0, n._)(this, H, null),
              (0, n._)(this, Q, null),
              (0, n._)(this, D, "0x"),
              (0, n._)(this, z, b),
              (0, n._)(this, W, b),
              (0, n._)(this, V, null),
              (0, n._)(this, j, null),
              (0, n._)(this, J, null),
              (0, n._)(this, K, null),
              (0, n._)(this, q, null),
              (0, n._)(this, Z, null),
              (0, n._)(this, Y, null);
          }
        }
        function tt(t, e) {
          (0, m.assert)(
            !t || null != this.signature,
            "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized",
            "UNSUPPORTED_OPERATION",
            { operation: ".serialized" }
          );
          let r = t ? this.signature : null;
          switch (this.inferType()) {
            case 0:
              return (function (t, e) {
                let r = [
                    R(t.nonce, "nonce"),
                    R(t.gasPrice || 0, "gasPrice"),
                    R(t.gasLimit, "gasLimit"),
                    t.to || "0x",
                    R(t.value, "value"),
                    t.data,
                  ],
                  n = b;
                if (t.chainId != b)
                  (n = (0, p.getBigInt)(t.chainId, "tx.chainId")),
                    (0, m.assertArgument)(
                      !e || null == e.networkV || e.legacyChainId === n,
                      "tx.chainId/sig.v mismatch",
                      "sig",
                      e
                    );
                else if (t.signature) {
                  let e = t.signature.legacyChainId;
                  null != e && (n = e);
                }
                if (!e)
                  return (
                    n !== b &&
                      (r.push((0, p.toBeArray)(n)), r.push("0x"), r.push("0x")),
                    (0, g.encodeRlp)(r)
                  );
                let i = BigInt(27 + e.yParity);
                return (
                  n !== b
                    ? (i = c.Signature.getChainIdV(n, e.v))
                    : BigInt(e.v) !== i &&
                      (0, m.assertArgument)(
                        !1,
                        "tx.chainId/sig.v mismatch",
                        "sig",
                        e
                      ),
                  r.push((0, p.toBeArray)(i)),
                  r.push((0, p.toBeArray)(e.r)),
                  r.push((0, p.toBeArray)(e.s)),
                  (0, g.encodeRlp)(r)
                );
              })(this, r);
            case 1:
              let n = [
                R(this.chainId, "chainId"),
                R(this.nonce, "nonce"),
                R(this.gasPrice || 0, "gasPrice"),
                R(this.gasLimit, "gasLimit"),
                this.to || "0x",
                R(this.value, "value"),
                this.data,
                T(this.accessList || []),
              ];
              return (
                r &&
                  (n.push(R(r.yParity, "recoveryParam")),
                  n.push((0, p.toBeArray)(r.r)),
                  n.push((0, p.toBeArray)(r.s))),
                (0, f.concat)(["0x01", (0, g.encodeRlp)(n)])
              );
            case 2:
              let i = [
                R(this.chainId, "chainId"),
                R(this.nonce, "nonce"),
                R(this.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
                R(this.maxFeePerGas || 0, "maxFeePerGas"),
                R(this.gasLimit, "gasLimit"),
                this.to || "0x",
                R(this.value, "value"),
                this.data,
                T(this.accessList || []),
              ];
              return (
                r &&
                  (i.push(R(r.yParity, "yParity")),
                  i.push((0, p.toBeArray)(r.r)),
                  i.push((0, p.toBeArray)(r.s))),
                (0, f.concat)(["0x02", (0, g.encodeRlp)(i)])
              );
            case 3:
              return (function (t, e, r) {
                let n = [
                  R(t.chainId, "chainId"),
                  R(t.nonce, "nonce"),
                  R(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
                  R(t.maxFeePerGas || 0, "maxFeePerGas"),
                  R(t.gasLimit, "gasLimit"),
                  t.to || o.ZeroAddress,
                  R(t.value, "value"),
                  t.data,
                  T(t.accessList || []),
                  R(t.maxFeePerBlobGas || 0, "maxFeePerBlobGas"),
                  (function (t, e) {
                    (0, m.assertArgument)(
                      Array.isArray(t),
                      "invalid ".concat(e),
                      "value",
                      t
                    );
                    for (let e = 0; e < t.length; e++)
                      (0, m.assertArgument)(
                        (0, f.isHexString)(t[e], 32),
                        "invalid ${ param } hash",
                        "value[".concat(e, "]"),
                        t[e]
                      );
                    return t;
                  })(t.blobVersionedHashes || [], "blobVersionedHashes"),
                ];
                return e &&
                  (n.push(R(e.yParity, "yParity")),
                  n.push((0, p.toBeArray)(e.r)),
                  n.push((0, p.toBeArray)(e.s)),
                  r)
                  ? (0, f.concat)([
                      "0x03",
                      (0, g.encodeRlp)([
                        n,
                        r.map((t) => t.data),
                        r.map((t) => t.commitment),
                        r.map((t) => t.proof),
                      ]),
                    ])
                  : (0, f.concat)(["0x03", (0, g.encodeRlp)(n)]);
              })(this, r, e ? this.blobs : null);
            case 4:
              let s = [
                R(this.chainId, "chainId"),
                R(this.nonce, "nonce"),
                R(this.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
                R(this.maxFeePerGas || 0, "maxFeePerGas"),
                R(this.gasLimit, "gasLimit"),
                this.to || "0x",
                R(this.value, "value"),
                this.data,
                T(this.accessList || []),
                (this.authorizationList || []).map((t) => [
                  R(t.chainId, "chainId"),
                  t.address,
                  R(t.nonce, "nonce"),
                  R(t.signature.yParity, "yParity"),
                  (0, p.toBeArray)(t.signature.r),
                  (0, p.toBeArray)(t.signature.s),
                ]),
              ];
              return (
                r &&
                  (s.push(R(r.yParity, "yParity")),
                  s.push((0, p.toBeArray)(r.r)),
                  s.push((0, p.toBeArray)(r.s))),
                (0, f.concat)(["0x04", (0, g.encodeRlp)(s)])
              );
          }
          (0, m.assert)(
            !1,
            "unsupported transaction type",
            "UNSUPPORTED_OPERATION",
            { operation: ".serialized" }
          );
        }
        t.s(
          { EnsResolver: () => tb, MulticoinProviderPlugin: () => tg },
          622480
        );
        var te = t.i(825285);
        function tr(t, e, r) {
          if (t !== e)
            throw TypeError("Private static access of wrong provenance");
          return r;
        }
        t.s({ _: () => tr }, 819968);
        var tn = t.i(693667),
          ti = t.i(131705),
          ts = t.i(551749);
        t.s({ decodeBase58: () => th, encodeBase58: () => tc }, 307750);
        let ta = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
          to = null,
          tl = BigInt(0),
          tu = BigInt(58);
        function tc(t) {
          let e = (0, f.getBytes)(t),
            r = (0, p.toBigInt)(e),
            n = "";
          for (; r; ) (n = ta[Number(r % tu)] + n), (r /= tu);
          for (let t = 0; t < e.length && !e[t]; t++) n = ta[0] + n;
          return n;
        }
        function th(t) {
          let e = tl;
          for (let r = 0; r < t.length; r++)
            (e *= tu),
              (e += (function (t) {
                if (null == to) {
                  to = {};
                  for (let t = 0; t < ta.length; t++) to[ta[t]] = BigInt(t);
                }
                let e = to[t];
                return (
                  (0, m.assertArgument)(
                    null != e,
                    "invalid base58 value",
                    "letter",
                    t
                  ),
                  e
                );
              })(t[r]));
          return e;
        }
        var tf = t.i(940227);
        function td(t) {
          return (
            t.match(/^ipfs:\/\/ipfs\//i)
              ? (t = t.substring(12))
              : t.match(/^ipfs:\/\//i)
              ? (t = t.substring(7))
              : (0, m.assertArgument)(!1, "unsupported IPFS format", "link", t),
            "https://gateway.ipfs.io/ipfs/".concat(t)
          );
        }
        class tg {
          connect(t) {
            return this;
          }
          supportsCoinType(t) {
            return !1;
          }
          async encodeAddress(t, e) {
            throw Error("unsupported coin");
          }
          async decodeAddress(t, e) {
            throw Error("unsupported coin");
          }
          constructor(t) {
            (0, te._)(this, "name", void 0),
              (0, ts.defineProperties)(this, { name: t });
          }
        }
        let tp = RegExp("^(ipfs)://(.*)$", "i"),
          tm = [
            RegExp("^(https)://(.*)$", "i"),
            RegExp("^(data):(.*)$", "i"),
            tp,
            RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i"),
          ];
        var ty = new WeakMap(),
          tA = new WeakMap(),
          tw = new WeakSet();
        class tb {
          async supportsWildcard() {
            return (
              null == (0, e._)(this, ty) &&
                (0, n._)(
                  this,
                  ty,
                  (async () => {
                    try {
                      return await (0, e._)(this, tA).supportsInterface(
                        "0x9061b923"
                      );
                    } catch (t) {
                      if ((0, m.isError)(t, "CALL_EXCEPTION")) return !1;
                      throw ((0, n._)(this, ty, null), t);
                    }
                  })()
                ),
              await (0, e._)(this, ty)
            );
          }
          async getAddress(t) {
            if ((null == t && (t = 60), 60 === t))
              try {
                let t = await (0, i._)(this, tw, tv).call(
                  this,
                  "addr(bytes32)"
                );
                if (null == t || t === o.ZeroAddress) return null;
                return t;
              } catch (t) {
                if ((0, m.isError)(t, "CALL_EXCEPTION")) return null;
                throw t;
              }
            if (t >= 0 && t < 0x80000000) {
              let e = t + 0x80000000,
                r = await (0, i._)(this, tw, tv).call(
                  this,
                  "addr(bytes32,uint)",
                  [e]
                );
              if ((0, f.isHexString)(r, 20)) return (0, a.getAddress)(r);
            }
            let e = null;
            for (let r of this.provider.plugins)
              if (r instanceof tg && r.supportsCoinType(t)) {
                e = r;
                break;
              }
            if (null == e) return null;
            let r = await (0, i._)(this, tw, tv).call(
              this,
              "addr(bytes32,uint)",
              [t]
            );
            if (null == r || "0x" === r) return null;
            let n = await e.decodeAddress(t, r);
            if (null != n) return n;
            (0, m.assert)(!1, "invalid coin data", "UNSUPPORTED_OPERATION", {
              operation: "getAddress(".concat(t, ")"),
              info: { coinType: t, data: r },
            });
          }
          async getText(t) {
            let e = await (0, i._)(this, tw, tv).call(
              this,
              "text(bytes32,string)",
              [t]
            );
            return null == e || "0x" === e ? null : e;
          }
          async getContentHash() {
            let t = await (0, i._)(this, tw, tv).call(
              this,
              "contenthash(bytes32)"
            );
            if (null == t || "0x" === t) return null;
            let e = t.match(
              /^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/
            );
            if (e) {
              let t = "e3010170" === e[1] ? "ipfs" : "ipns",
                r = parseInt(e[4], 16);
              if (e[5].length === 2 * r)
                return "".concat(t, "://").concat(tc("0x" + e[2]));
            }
            let r = t.match(/^0xe40101fa011b20([0-9a-f]*)$/);
            if (r && 64 === r[1].length) return "bzz://".concat(r[1]);
            (0, m.assert)(
              !1,
              "invalid or unsupported content hash data",
              "UNSUPPORTED_OPERATION",
              { operation: "getContentHash()", info: { data: t } }
            );
          }
          async getAvatar() {
            return (await this._getAvatar()).url;
          }
          async _getAvatar() {
            let t = [{ type: "name", value: this.name }];
            try {
              let e = await this.getText("avatar");
              if (null == e)
                return (
                  t.push({ type: "!avatar", value: "" }),
                  { url: null, linkage: t }
                );
              t.push({ type: "avatar", value: e });
              for (let r = 0; r < tm.length; r++) {
                let n = e.match(tm[r]);
                if (null == n) continue;
                let i = n[1].toLowerCase();
                switch (i) {
                  case "https":
                  case "data":
                    return (
                      t.push({ type: "url", value: e }), { linkage: t, url: e }
                    );
                  case "ipfs": {
                    let r = td(e);
                    return (
                      t.push({ type: "ipfs", value: e }),
                      t.push({ type: "url", value: r }),
                      { linkage: t, url: r }
                    );
                  }
                  case "erc721":
                  case "erc1155": {
                    let r =
                      "erc721" === i ? "tokenURI(uint256)" : "uri(uint256)";
                    t.push({ type: i, value: e });
                    let s = await this.getAddress();
                    if (null == s)
                      return (
                        t.push({ type: "!owner", value: "" }),
                        { url: null, linkage: t }
                      );
                    let a = (n[2] || "").split("/");
                    if (2 !== a.length)
                      return (
                        t.push({
                          type: "!".concat(i, "caip"),
                          value: n[2] || "",
                        }),
                        { url: null, linkage: t }
                      );
                    let o = a[1],
                      l = new tn.Contract(
                        a[0],
                        [
                          "function tokenURI(uint) view returns (string)",
                          "function ownerOf(uint) view returns (address)",
                          "function uri(uint) view returns (string)",
                          "function balanceOf(address, uint256) view returns (uint)",
                        ],
                        this.provider
                      );
                    if ("erc721" === i) {
                      let e = await l.ownerOf(o);
                      if (s !== e)
                        return (
                          t.push({ type: "!owner", value: e }),
                          { url: null, linkage: t }
                        );
                      t.push({ type: "owner", value: e });
                    } else if ("erc1155" === i) {
                      let e = await l.balanceOf(s, o);
                      if (!e)
                        return (
                          t.push({ type: "!balance", value: "0" }),
                          { url: null, linkage: t }
                        );
                      t.push({ type: "balance", value: e.toString() });
                    }
                    let u = await l[r](o);
                    if (null == u || "0x" === u)
                      return (
                        t.push({ type: "!metadata-url", value: "" }),
                        { url: null, linkage: t }
                      );
                    t.push({ type: "metadata-url-base", value: u }),
                      "erc1155" === i &&
                        ((u = u.replace(
                          "{id}",
                          (0, p.toBeHex)(o, 32).substring(2)
                        )),
                        t.push({ type: "metadata-url-expanded", value: u })),
                      u.match(/^ipfs:/i) && (u = td(u)),
                      t.push({ type: "metadata-url", value: u });
                    let c = {},
                      h = await new tf.FetchRequest(u).send();
                    h.assertOk();
                    try {
                      c = h.bodyJson;
                    } catch (e) {
                      try {
                        t.push({ type: "!metadata", value: h.bodyText });
                      } catch (r) {
                        let e = h.body;
                        e &&
                          t.push({
                            type: "!metadata",
                            value: (0, f.hexlify)(e),
                          });
                      }
                      return { url: null, linkage: t };
                    }
                    if (!c)
                      return (
                        t.push({ type: "!metadata", value: "" }),
                        { url: null, linkage: t }
                      );
                    t.push({ type: "metadata", value: JSON.stringify(c) });
                    let d = c.image;
                    if ("string" != typeof d)
                      return (
                        t.push({ type: "!imageUrl", value: "" }),
                        { url: null, linkage: t }
                      );
                    if (d.match(/^(https:\/\/|data:)/i));
                    else {
                      let e = d.match(tp);
                      if (null == e)
                        return (
                          t.push({ type: "!imageUrl-ipfs", value: d }),
                          { url: null, linkage: t }
                        );
                      t.push({ type: "imageUrl-ipfs", value: d }), (d = td(d));
                    }
                    return (
                      t.push({ type: "url", value: d }), { linkage: t, url: d }
                    );
                  }
                }
              }
            } catch (t) {}
            return { linkage: t, url: null };
          }
          static async getEnsAddress(t) {
            let e = await t.getNetwork(),
              r = e.getPlugin("org.ethers.plugins.network.Ens");
            return (
              (0, m.assert)(
                r,
                "network does not support ENS",
                "UNSUPPORTED_OPERATION",
                { operation: "getEnsAddress", info: { network: e } }
              ),
              r.address
            );
          }
          static async fromName(t, e) {
            let r = e;
            for (;;) {
              if ("" === r || "." === r || ("eth" !== e && "eth" === r))
                return null;
              let n = await tr(tb, tb, tE).call(tb, t, r);
              if (null != n) {
                let i = new tb(t, n, e);
                if (r !== e && !(await i.supportsWildcard())) return null;
                return i;
              }
              r = r.split(".").slice(1).join(".");
            }
          }
          constructor(t, e, i) {
            (0, s._)(this, tw),
              (0, te._)(this, "provider", void 0),
              (0, te._)(this, "address", void 0),
              (0, te._)(this, "name", void 0),
              (0, r._)(this, ty, { writable: !0, value: void 0 }),
              (0, r._)(this, tA, { writable: !0, value: void 0 }),
              (0, ts.defineProperties)(this, {
                provider: t,
                address: e,
                name: i,
              }),
              (0, n._)(this, ty, null),
              (0, n._)(
                this,
                tA,
                new tn.Contract(
                  e,
                  [
                    "function supportsInterface(bytes4) view returns (bool)",
                    "function resolve(bytes, bytes) view returns (bytes)",
                    "function addr(bytes32) view returns (address)",
                    "function addr(bytes32, uint) view returns (bytes)",
                    "function text(bytes32, string) view returns (string)",
                    "function contenthash(bytes32) view returns (bytes)",
                  ],
                  t
                )
              );
          }
        }
        async function tv(t, r) {
          r = (r || []).slice();
          let n = (0, e._)(this, tA).interface;
          r.unshift((0, ti.namehash)(this.name));
          let i = null;
          (await this.supportsWildcard()) &&
            ((i = n.getFunction(t)),
            (0, m.assert)(i, "missing fragment", "UNKNOWN_ERROR", {
              info: { funcName: t },
            }),
            (r = [
              (0, ti.dnsEncode)(this.name, 255),
              n.encodeFunctionData(i, r),
            ]),
            (t = "resolve(bytes,bytes)")),
            r.push({ enableCcipRead: !0 });
          try {
            let s = await (0, e._)(this, tA)[t](...r);
            if (i) return n.decodeFunctionResult(i, s)[0];
            return s;
          } catch (t) {
            if (!(0, m.isError)(t, "CALL_EXCEPTION")) throw t;
          }
          return null;
        }
        async function tE(t, e) {
          let r = await tb.getEnsAddress(t);
          try {
            let n = new tn.Contract(
                r,
                ["function resolver(bytes32) view returns (address)"],
                t
              ),
              i = await n.resolver((0, ti.namehash)(e), { enableCcipRead: !0 });
            if (i === o.ZeroAddress) return null;
            return i;
          } catch (t) {
            throw t;
          }
        }
      },
      [819968, 307750, 622480],
    ],
    688519: (t) => {
      "use strict";
      t.s({ getCreate2Address: () => l, getCreateAddress: () => o });
      var e = t.i(749401),
        r = t.i(713514),
        n = t.i(219223),
        i = t.i(55488),
        s = t.i(13517),
        a = t.i(978895);
      function o(t) {
        let s = (0, a.getAddress)(t.from),
          o = (0, n.getBigInt)(t.nonce, "tx.nonce").toString(16);
        return (
          (o = "0" === o ? "0x" : o.length % 2 ? "0x0" + o : "0x" + o),
          (0, a.getAddress)(
            (0, r.dataSlice)((0, e.keccak256)((0, i.encodeRlp)([s, o])), 12)
          )
        );
      }
      function l(t, n, i) {
        let o = (0, a.getAddress)(t),
          l = (0, r.getBytes)(n, "salt"),
          u = (0, r.getBytes)(i, "initCodeHash");
        return (
          (0, s.assertArgument)(
            32 === l.length,
            "salt must be 32 bytes",
            "salt",
            n
          ),
          (0, s.assertArgument)(
            32 === u.length,
            "initCodeHash must be 32 bytes",
            "initCodeHash",
            i
          ),
          (0, a.getAddress)(
            (0, r.dataSlice)(
              (0, e.keccak256)((0, r.concat)(["0xff", o, l, u])),
              12
            )
          )
        );
      }
    },
    511915: (t) => {
      "use strict";
      t.s({
        formatBlock: () => y,
        formatLog: () => p,
        formatTransactionReceipt: () => b,
        formatTransactionResponse: () => E,
      });
      var e = t.i(978895),
        r = t.i(688519),
        n = t.i(599852),
        i = t.i(816028),
        s = t.i(219223),
        a = t.i(713514),
        o = t.i(13517);
      let l = BigInt(0);
      function u(t, e) {
        return function (r) {
          return null == r ? e : t(r);
        };
      }
      function c(t, e) {
        return (r) => {
          if (e && null == r) return null;
          if (!Array.isArray(r)) throw Error("not an array");
          return r.map((e) => t(e));
        };
      }
      function h(t, e) {
        return (r) => {
          let n = {};
          for (let i in t) {
            let s = i;
            if (e && i in e && !(s in r)) {
              for (let t of e[i])
                if (t in r) {
                  s = t;
                  break;
                }
            }
            try {
              let e = t[i](r[s]);
              void 0 !== e && (n[i] = e);
            } catch (e) {
              let t = e instanceof Error ? e.message : "not-an-error";
              (0, o.assert)(
                !1,
                "invalid value for value.".concat(i, " (").concat(t, ")"),
                "BAD_DATA",
                { value: r }
              );
            }
          }
          return n;
        };
      }
      function f(t) {
        return (
          (0, o.assertArgument)(
            (0, a.isHexString)(t, !0),
            "invalid data",
            "value",
            t
          ),
          t
        );
      }
      function d(t) {
        return (
          (0, o.assertArgument)(
            (0, a.isHexString)(t, 32),
            "invalid hash",
            "value",
            t
          ),
          t
        );
      }
      let g = h(
        {
          address: e.getAddress,
          blockHash: d,
          blockNumber: s.getNumber,
          data: f,
          index: s.getNumber,
          removed: u(function (t) {
            switch (t) {
              case !0:
              case "true":
                return !0;
              case !1:
              case "false":
                return !1;
            }
            (0,
            o.assertArgument)(!1, "invalid boolean; ".concat(JSON.stringify(t)), "value", t);
          }, !1),
          topics: c(d),
          transactionHash: d,
          transactionIndex: s.getNumber,
        },
        { index: ["logIndex"] }
      );
      function p(t) {
        return g(t);
      }
      let m = h(
        {
          hash: u(d),
          parentHash: d,
          parentBeaconBlockRoot: u(d, null),
          number: s.getNumber,
          timestamp: s.getNumber,
          nonce: u(f),
          difficulty: s.getBigInt,
          gasLimit: s.getBigInt,
          gasUsed: s.getBigInt,
          stateRoot: u(d, null),
          receiptsRoot: u(d, null),
          blobGasUsed: u(s.getBigInt, null),
          excessBlobGas: u(s.getBigInt, null),
          miner: u(e.getAddress),
          prevRandao: u(d, null),
          extraData: f,
          baseFeePerGas: u(s.getBigInt),
        },
        { prevRandao: ["mixHash"] }
      );
      function y(t) {
        let e = m(t);
        return (
          (e.transactions = t.transactions.map((t) =>
            "string" == typeof t ? t : E(t)
          )),
          e
        );
      }
      let A = h(
          {
            transactionIndex: s.getNumber,
            blockNumber: s.getNumber,
            transactionHash: d,
            address: e.getAddress,
            topics: c(d),
            data: f,
            index: s.getNumber,
            blockHash: d,
          },
          { index: ["logIndex"] }
        ),
        w = h(
          {
            to: u(e.getAddress, null),
            from: u(e.getAddress, null),
            contractAddress: u(e.getAddress, null),
            index: s.getNumber,
            root: u(a.hexlify),
            gasUsed: s.getBigInt,
            blobGasUsed: u(s.getBigInt, null),
            logsBloom: u(f),
            blockHash: d,
            hash: d,
            logs: c(function (t) {
              return A(t);
            }),
            blockNumber: s.getNumber,
            cumulativeGasUsed: s.getBigInt,
            effectiveGasPrice: u(s.getBigInt),
            blobGasPrice: u(s.getBigInt, null),
            status: u(s.getNumber),
            type: u(s.getNumber, 0),
          },
          {
            effectiveGasPrice: ["gasPrice"],
            hash: ["transactionHash"],
            index: ["transactionIndex"],
          }
        );
      function b(t) {
        return w(t);
      }
      function E(t) {
        t.to &&
          (0, s.getBigInt)(t.to) === l &&
          (t.to = "0x0000000000000000000000000000000000000000");
        let a = h(
          {
            hash: d,
            index: u(s.getNumber, void 0),
            type: (t) => ("0x" === t || null == t ? 0 : (0, s.getNumber)(t)),
            accessList: u(i.accessListify, null),
            blobVersionedHashes: u(c(d, !0), null),
            authorizationList: u(
              c((t) => {
                let r;
                if (t.signature) r = t.signature;
                else {
                  let e = t.yParity;
                  "0x1b" === e ? (e = 0) : "0x1c" === e && (e = 1),
                    (r = Object.assign({}, t, { yParity: e }));
                }
                return {
                  address: (0, e.getAddress)(t.address),
                  chainId: (0, s.getBigInt)(t.chainId),
                  nonce: (0, s.getBigInt)(t.nonce),
                  signature: n.Signature.from(r),
                };
              }, !1),
              null
            ),
            blockHash: u(d, null),
            blockNumber: u(s.getNumber, null),
            transactionIndex: u(s.getNumber, null),
            from: e.getAddress,
            gasPrice: u(s.getBigInt),
            maxPriorityFeePerGas: u(s.getBigInt),
            maxFeePerGas: u(s.getBigInt),
            maxFeePerBlobGas: u(s.getBigInt, null),
            gasLimit: s.getBigInt,
            to: u(e.getAddress, null),
            value: s.getBigInt,
            nonce: s.getNumber,
            data: f,
            creates: u(e.getAddress, null),
            chainId: u(s.getBigInt, null),
          },
          { data: ["input"], gasLimit: ["gas"], index: ["transactionIndex"] }
        )(t);
        if (
          (null == a.to &&
            null == a.creates &&
            (a.creates = (0, r.getCreateAddress)(a)),
          (1 === t.type || 2 === t.type) &&
            null == t.accessList &&
            (a.accessList = []),
          t.signature
            ? (a.signature = n.Signature.from(t.signature))
            : (a.signature = n.Signature.from(t)),
          null == a.chainId)
        ) {
          let t = a.signature.legacyChainId;
          null != t && (a.chainId = t);
        }
        return (
          a.blockHash &&
            (0, s.getBigInt)(a.blockHash) === l &&
            (a.blockHash = null),
          a
        );
      }
    },
    399964: [
      (t) => {
        "use strict";
        t.s({ Network: () => E }, 399964);
        var e = t.i(300522),
          r = t.i(216788),
          n = t.i(725039),
          i = t.i(816028),
          s = t.i(219223),
          a = t.i(13517);
        t.s(
          {
            EnsPlugin: () => h,
            FeeDataNetworkPlugin: () => d,
            FetchUrlFeeDataNetworkPlugin: () => m,
            GasCostPlugin: () => c,
            NetworkPlugin: () => u,
          },
          41073
        );
        var o = t.i(825285),
          l = t.i(551749);
        class u {
          clone() {
            return new u(this.name);
          }
          constructor(t) {
            (0, o._)(this, "name", void 0),
              (0, l.defineProperties)(this, { name: t });
          }
        }
        class c extends u {
          clone() {
            return new c(this.effectiveBlock, this);
          }
          constructor(t, e) {
            null == t && (t = 0),
              super("org.ethers.network.plugins.GasCost#".concat(t || 0)),
              (0, o._)(this, "effectiveBlock", void 0),
              (0, o._)(this, "txBase", void 0),
              (0, o._)(this, "txCreate", void 0),
              (0, o._)(this, "txDataZero", void 0),
              (0, o._)(this, "txDataNonzero", void 0),
              (0, o._)(this, "txAccessListStorageKey", void 0),
              (0, o._)(this, "txAccessListAddress", void 0);
            let r = { effectiveBlock: t };
            function n(t, n) {
              let i = (e || {})[t];
              null == i && (i = n),
                (0, a.assertArgument)(
                  "number" == typeof i,
                  "invalud value for ".concat(t),
                  "costs",
                  e
                ),
                (r[t] = i);
            }
            n("txBase", 21e3),
              n("txCreate", 32e3),
              n("txDataZero", 4),
              n("txDataNonzero", 16),
              n("txAccessListStorageKey", 1900),
              n("txAccessListAddress", 2400),
              (0, l.defineProperties)(this, r);
          }
        }
        class h extends u {
          clone() {
            return new h(this.address, this.targetNetwork);
          }
          constructor(t, e) {
            super("org.ethers.plugins.network.Ens"),
              (0, o._)(this, "address", void 0),
              (0, o._)(this, "targetNetwork", void 0),
              (0, l.defineProperties)(this, {
                address: t || "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                targetNetwork: null == e ? 1 : e,
              });
          }
        }
        var f = new WeakMap();
        class d extends u {
          get feeDataFunc() {
            return (0, e._)(this, f);
          }
          async getFeeData(t) {
            return await (0, e._)(this, f).call(this, t);
          }
          clone() {
            return new d((0, e._)(this, f));
          }
          constructor(t) {
            super("org.ethers.plugins.network.FeeData"),
              (0, r._)(this, f, { writable: !0, value: void 0 }),
              (0, n._)(this, f, t);
          }
        }
        var g = new WeakMap(),
          p = new WeakMap();
        class m extends u {
          get url() {
            return (0, e._)(this, g);
          }
          get processFunc() {
            return (0, e._)(this, p);
          }
          clone() {
            return this;
          }
          constructor(t, e) {
            super("org.ethers.plugins.network.FetchUrlFeeDataPlugin"),
              (0, r._)(this, g, { writable: !0, value: void 0 }),
              (0, r._)(this, p, { writable: !0, value: void 0 }),
              (0, n._)(this, g, t),
              (0, n._)(this, p, e);
          }
        }
        let y = new Map();
        var A = new WeakMap(),
          w = new WeakMap(),
          b = new WeakMap();
        class E {
          toJSON() {
            return { name: this.name, chainId: String(this.chainId) };
          }
          get name() {
            return (0, e._)(this, A);
          }
          set name(t) {
            (0, n._)(this, A, t);
          }
          get chainId() {
            return (0, e._)(this, w);
          }
          set chainId(t) {
            (0, n._)(this, w, (0, s.getBigInt)(t, "chainId"));
          }
          matches(t) {
            if (null == t) return !1;
            if ("string" == typeof t) {
              try {
                return this.chainId === (0, s.getBigInt)(t);
              } catch (t) {}
              return this.name === t;
            }
            if ("number" == typeof t || "bigint" == typeof t) {
              try {
                return this.chainId === (0, s.getBigInt)(t);
              } catch (t) {}
              return !1;
            }
            if ("object" == typeof t) {
              if (null != t.chainId) {
                try {
                  return this.chainId === (0, s.getBigInt)(t.chainId);
                } catch (t) {}
                return !1;
              }
              if (null != t.name) return this.name === t.name;
            }
            return !1;
          }
          get plugins() {
            return Array.from((0, e._)(this, b).values());
          }
          attachPlugin(t) {
            if ((0, e._)(this, b).get(t.name))
              throw Error(
                "cannot replace existing plugin: ".concat(t.name, " ")
              );
            return (0, e._)(this, b).set(t.name, t.clone()), this;
          }
          getPlugin(t) {
            return (0, e._)(this, b).get(t) || null;
          }
          getPlugins(t) {
            return this.plugins.filter((e) => e.name.split("#")[0] === t);
          }
          clone() {
            let t = new E(this.name, this.chainId);
            return (
              this.plugins.forEach((e) => {
                t.attachPlugin(e.clone());
              }),
              t
            );
          }
          computeIntrinsicGas(t) {
            let e =
                this.getPlugin("org.ethers.plugins.network.GasCost") || new c(),
              r = e.txBase;
            if ((null == t.to && (r += e.txCreate), t.data))
              for (let n = 2; n < t.data.length; n += 2)
                "00" === t.data.substring(n, n + 2)
                  ? (r += e.txDataZero)
                  : (r += e.txDataNonzero);
            if (t.accessList) {
              let n = (0, i.accessListify)(t.accessList);
              for (let t in n)
                r +=
                  e.txAccessListAddress +
                  e.txAccessListStorageKey * n[t].storageKeys.length;
            }
            return r;
          }
          static from(t) {
            if (
              ((function () {
                B ||
                  ((B = !0),
                  t("mainnet", 1, { ensNetwork: 1, altNames: ["homestead"] }),
                  t("ropsten", 3, { ensNetwork: 3 }),
                  t("rinkeby", 4, { ensNetwork: 4 }),
                  t("goerli", 5, { ensNetwork: 5 }),
                  t("kovan", 42, { ensNetwork: 42 }),
                  t("sepolia", 0xaa36a7, { ensNetwork: 0xaa36a7 }),
                  t("holesky", 17e3, { ensNetwork: 17e3 }),
                  t("classic", 61, {}),
                  t("classicKotti", 6, {}),
                  t("arbitrum", 42161, { ensNetwork: 1 }),
                  t("arbitrum-goerli", 421613, {}),
                  t("arbitrum-sepolia", 421614, {}),
                  t("base", 8453, { ensNetwork: 1 }),
                  t("base-goerli", 84531, {}),
                  t("base-sepolia", 84532, {}),
                  t("bnb", 56, { ensNetwork: 1 }),
                  t("bnbt", 97, {}),
                  t("linea", 59144, { ensNetwork: 1 }),
                  t("linea-goerli", 59140, {}),
                  t("linea-sepolia", 59141, {}),
                  t("matic", 137, {
                    ensNetwork: 1,
                    plugins: [x("https://gasstation.polygon.technology/v2")],
                  }),
                  t("matic-amoy", 80002, {}),
                  t("matic-mumbai", 80001, {
                    altNames: ["maticMumbai", "maticmum"],
                    plugins: [
                      x("https://gasstation-testnet.polygon.technology/v2"),
                    ],
                  }),
                  t("optimism", 10, { ensNetwork: 1, plugins: [] }),
                  t("optimism-goerli", 420, {}),
                  t("optimism-sepolia", 0xaa37dc, {}),
                  t("xdai", 100, { ensNetwork: 1 }));
                function t(t, e, r) {
                  let n = function () {
                    let n = new E(t, e);
                    return (
                      null != r.ensNetwork &&
                        n.attachPlugin(new h(null, r.ensNetwork)),
                      n.attachPlugin(new c()),
                      (r.plugins || []).forEach((t) => {
                        n.attachPlugin(t);
                      }),
                      n
                    );
                  };
                  E.register(t, n),
                    E.register(e, n),
                    r.altNames &&
                      r.altNames.forEach((t) => {
                        E.register(t, n);
                      });
                }
              })(),
              null == t)
            )
              return E.from("mainnet");
            if (
              ("number" == typeof t && (t = BigInt(t)),
              "string" == typeof t || "bigint" == typeof t)
            ) {
              let e = y.get(t);
              if (e) return e();
              if ("bigint" == typeof t) return new E("unknown", t);
              (0, a.assertArgument)(!1, "unknown network", "network", t);
            }
            if ("function" == typeof t.clone) return t.clone();
            if ("object" == typeof t) {
              (0, a.assertArgument)(
                "string" == typeof t.name && "number" == typeof t.chainId,
                "invalid network object name or chainId",
                "network",
                t
              );
              let e = new E(t.name, t.chainId);
              return (
                (t.ensAddress || null != t.ensNetwork) &&
                  e.attachPlugin(new h(t.ensAddress, t.ensNetwork)),
                e
              );
            }
            (0, a.assertArgument)(!1, "invalid network", "network", t);
          }
          static register(t, e) {
            "number" == typeof t && (t = BigInt(t));
            let r = y.get(t);
            r &&
              (0, a.assertArgument)(
                !1,
                "conflicting network for ".concat(JSON.stringify(r.name)),
                "nameOrChainId",
                t
              ),
              y.set(t, e);
          }
          constructor(t, e) {
            (0, r._)(this, A, { writable: !0, value: void 0 }),
              (0, r._)(this, w, { writable: !0, value: void 0 }),
              (0, r._)(this, b, { writable: !0, value: void 0 }),
              (0, n._)(this, A, t),
              (0, n._)(this, w, (0, s.getBigInt)(e)),
              (0, n._)(this, b, new Map());
          }
        }
        function _(t, e) {
          let r = String(t);
          if (!r.match(/^[0-9.]+$/))
            throw Error("invalid gwei value: ".concat(t));
          let n = r.split(".");
          if ((1 === n.length && n.push(""), 2 !== n.length))
            throw Error("invalid gwei value: ".concat(t));
          for (; n[1].length < e; ) n[1] += "0";
          if (n[1].length > 9) {
            let t = BigInt(n[1].substring(0, 9));
            !n[1].substring(9).match(/^0+$/) && t++, (n[1] = t.toString());
          }
          return BigInt(n[0] + n[1]);
        }
        function x(t) {
          return new m(t, async (t, e, r) => {
            let n;
            r.setHeader("User-Agent", "ethers");
            try {
              let [e, i] = await Promise.all([r.send(), t()]),
                s = (n = e).bodyJson.standard;
              return {
                gasPrice: i.gasPrice,
                maxFeePerGas: _(s.maxFee, 9),
                maxPriorityFeePerGas: _(s.maxPriorityFee, 9),
              };
            } catch (t) {
              (0, a.assert)(
                !1,
                "error encountered with polygon gas station (".concat(
                  JSON.stringify(r.url),
                  ")"
                ),
                "SERVER_ERROR",
                { request: r, response: n, error: t }
              );
            }
          });
        }
        let B = !1;
      },
      [41073],
    ],
    487568: [
      (t) => {
        "use strict";
        t.s(
          {
            JsonRpcApiPollingProvider: () => ep,
            JsonRpcApiProvider: () => ef,
            JsonRpcProvider: () => ey,
            JsonRpcSigner: () => en,
          },
          487568
        );
        var e = t.i(300522),
          r = t.i(216788),
          n = t.i(725039),
          i = t.i(57882),
          s = t.i(52992),
          a = t.i(153525),
          o = t.i(825285),
          l = t.i(468265),
          u = t.i(978895),
          c = t.i(104787),
          h = t.i(550313),
          f = t.i(816028),
          d = t.i(292420),
          g = t.i(551749),
          p = t.i(219223),
          m = t.i(713514),
          y = t.i(853399),
          A = t.i(13517),
          w = t.i(940227);
        t.s(
          { AbstractProvider: () => tC, UnmanagedSubscriber: () => ta },
          790587
        );
        var b = t.i(17721),
          E = t.i(693667),
          _ = t.i(131705),
          x = t.i(83595),
          B = t.i(82166),
          k = t.i(622480),
          P = t.i(511915),
          N = t.i(399964),
          I = t.i(706747);
        function C(t) {
          return JSON.parse(JSON.stringify(t));
        }
        var O = new WeakMap(),
          R = new WeakMap(),
          T = new WeakMap(),
          S = new WeakMap(),
          U = new WeakSet();
        class F {
          get pollingInterval() {
            return (0, e._)(this, T);
          }
          set pollingInterval(t) {
            (0, n._)(this, T, t);
          }
          start() {
            (0, e._)(this, R) ||
              ((0, n._)(
                this,
                R,
                (0, e._)(this, O)._setTimeout(
                  (0, s._)(this, U, D).bind(this),
                  (0, e._)(this, T)
                )
              ),
              (0, s._)(this, U, D).call(this));
          }
          stop() {
            (0, e._)(this, R) &&
              ((0, e._)(this, O)._clearTimeout((0, e._)(this, R)),
              (0, n._)(this, R, null));
          }
          pause(t) {
            this.stop(), t && (0, n._)(this, S, -2);
          }
          resume() {
            this.start();
          }
          constructor(t) {
            (0, a._)(this, U),
              (0, r._)(this, O, { writable: !0, value: void 0 }),
              (0, r._)(this, R, { writable: !0, value: void 0 }),
              (0, r._)(this, T, { writable: !0, value: void 0 }),
              (0, r._)(this, S, { writable: !0, value: void 0 }),
              (0, n._)(this, O, t),
              (0, n._)(this, R, null),
              (0, n._)(this, T, 4e3),
              (0, n._)(this, S, -2);
          }
        }
        async function D() {
          try {
            let t = await (0, e._)(this, O).getBlockNumber();
            if (-2 === (0, e._)(this, S)) return void (0, n._)(this, S, t);
            if (t !== (0, e._)(this, S)) {
              for (let r = (0, e._)(this, S) + 1; r <= t; r++) {
                if (null == (0, e._)(this, R)) return;
                await (0, e._)(this, O).emit("block", r);
              }
              (0, n._)(this, S, t);
            }
          } catch (t) {}
          null != (0, e._)(this, R) &&
            (0, n._)(
              this,
              R,
              (0, e._)(this, O)._setTimeout(
                (0, s._)(this, U, D).bind(this),
                (0, e._)(this, T)
              )
            );
        }
        var L = new WeakMap(),
          M = new WeakMap(),
          G = new WeakMap();
        class H {
          async _poll(t, e) {
            throw Error("sub-classes must override this");
          }
          start() {
            (0, e._)(this, G) ||
              ((0, n._)(this, G, !0),
              (0, e._)(this, M).call(this, -2),
              (0, e._)(this, L).on("block", (0, e._)(this, M)));
          }
          stop() {
            (0, e._)(this, G) &&
              ((0, n._)(this, G, !1),
              (0, e._)(this, L).off("block", (0, e._)(this, M)));
          }
          pause(t) {
            this.stop();
          }
          resume() {
            this.start();
          }
          constructor(t) {
            (0, r._)(this, L, { writable: !0, value: void 0 }),
              (0, r._)(this, M, { writable: !0, value: void 0 }),
              (0, r._)(this, G, { writable: !0, value: void 0 }),
              (0, n._)(this, L, t),
              (0, n._)(this, G, !1),
              (0, n._)(this, M, (t) => {
                this._poll(t, (0, e._)(this, L));
              });
          }
        }
        var Q = new WeakMap(),
          z = new WeakMap();
        class W extends H {
          pause(t) {
            t && (0, n._)(this, z, -2), super.pause(t);
          }
          async _poll(t, r) {
            let i = await r.getBlock((0, e._)(this, Q));
            null != i &&
              (-2 === (0, e._)(this, z)
                ? (0, n._)(this, z, i.number)
                : i.number > (0, e._)(this, z) &&
                  (r.emit((0, e._)(this, Q), i.number),
                  (0, n._)(this, z, i.number)));
          }
          constructor(t, e) {
            super(t),
              (0, r._)(this, Q, { writable: !0, value: void 0 }),
              (0, r._)(this, z, { writable: !0, value: void 0 }),
              (0, n._)(this, Q, e),
              (0, n._)(this, z, -2);
          }
        }
        var V = new WeakMap();
        class j extends H {
          async _poll(t, e) {
            throw Error("@TODO");
          }
          constructor(t, e) {
            super(t),
              (0, r._)(this, V, { writable: !0, value: void 0 }),
              (0, n._)(this, V, C(e));
          }
        }
        var J = new WeakMap();
        class K extends H {
          async _poll(t, r) {
            let n = await r.getTransactionReceipt((0, e._)(this, J));
            n && r.emit((0, e._)(this, J), n);
          }
          constructor(t, e) {
            super(t),
              (0, r._)(this, J, { writable: !0, value: void 0 }),
              (0, n._)(this, J, e);
          }
        }
        var q = new WeakMap(),
          Z = new WeakMap(),
          Y = new WeakMap(),
          X = new WeakMap(),
          $ = new WeakMap(),
          tt = new WeakSet();
        class te {
          start() {
            (0, e._)(this, X) ||
              ((0, n._)(this, X, !0),
              -2 === (0, e._)(this, $) &&
                (0, e._)(this, q)
                  .getBlockNumber()
                  .then((t) => {
                    (0, n._)(this, $, t);
                  }),
              (0, e._)(this, q).on("block", (0, e._)(this, Y)));
          }
          stop() {
            (0, e._)(this, X) &&
              ((0, n._)(this, X, !1),
              (0, e._)(this, q).off("block", (0, e._)(this, Y)));
          }
          pause(t) {
            this.stop(), t && (0, n._)(this, $, -2);
          }
          resume() {
            this.start();
          }
          constructor(t, e) {
            (0, a._)(this, tt),
              (0, r._)(this, q, { writable: !0, value: void 0 }),
              (0, r._)(this, Z, { writable: !0, value: void 0 }),
              (0, r._)(this, Y, { writable: !0, value: void 0 }),
              (0, r._)(this, X, { writable: !0, value: void 0 }),
              (0, r._)(this, $, { writable: !0, value: void 0 }),
              (0, n._)(this, q, t),
              (0, n._)(this, Z, C(e)),
              (0, n._)(this, Y, (0, s._)(this, tt, tr).bind(this)),
              (0, n._)(this, X, !1),
              (0, n._)(this, $, -2);
          }
        }
        async function tr(t) {
          if (-2 === (0, e._)(this, $)) return;
          let r = C((0, e._)(this, Z));
          (r.fromBlock = (0, e._)(this, $) + 1), (r.toBlock = t);
          let i = await (0, e._)(this, q).getLogs(r);
          if (0 === i.length) {
            (0, e._)(this, $) < t - 60 && (0, n._)(this, $, t - 60);
            return;
          }
          for (let t of i)
            (0, e._)(this, q).emit((0, e._)(this, Z), t),
              (0, n._)(this, $, t.blockNumber);
        }
        let tn = BigInt(2);
        function ti(t) {
          return t && "function" == typeof t.then;
        }
        function ts(t, e) {
          return (
            t +
            ":" +
            JSON.stringify(e, (t, e) => {
              if (null == e) return "null";
              if ("bigint" == typeof e) return "bigint:".concat(e.toString());
              if ("string" == typeof e) return e.toLowerCase();
              if ("object" == typeof e && !Array.isArray(e)) {
                let t = Object.keys(e);
                return t.sort(), t.reduce((t, r) => ((t[r] = e[r]), t), {});
              }
              return e;
            })
          );
        }
        class ta {
          start() {}
          stop() {}
          pause(t) {}
          resume() {}
          constructor(t) {
            (0, o._)(this, "name", void 0),
              (0, g.defineProperties)(this, { name: t });
          }
        }
        function to(t) {
          return (t = Array.from(new Set(t).values())).sort(), t;
        }
        async function tl(t, e) {
          if (null == t) throw Error("invalid event");
          if ((Array.isArray(t) && (t = { topics: t }), "string" == typeof t))
            switch (t) {
              case "block":
              case "debug":
              case "error":
              case "finalized":
              case "network":
              case "pending":
              case "safe":
                return { type: t, tag: t };
            }
          if ((0, m.isHexString)(t, 32)) {
            let e = t.toLowerCase();
            return { type: "transaction", tag: ts("tx", { hash: e }), hash: e };
          }
          if (t.orphan) {
            let e = t;
            return {
              type: "orphan",
              tag: ts("orphan", e),
              filter: JSON.parse(JSON.stringify(e)),
            };
          }
          if (t.address || t.topics) {
            let r = t,
              n = {
                topics: (r.topics || []).map((t) =>
                  null == t
                    ? null
                    : Array.isArray(t)
                    ? to(t.map((t) => t.toLowerCase()))
                    : t.toLowerCase()
                ),
              };
            if (r.address) {
              let t = [],
                i = [],
                s = (r) => {
                  (0, m.isHexString)(r)
                    ? t.push(r)
                    : i.push(
                        (async () => {
                          t.push(await (0, c.resolveAddress)(r, e));
                        })()
                      );
                };
              Array.isArray(r.address) ? r.address.forEach(s) : s(r.address),
                i.length && (await Promise.all(i)),
                (n.address = to(t.map((t) => t.toLowerCase())));
            }
            return { filter: n, tag: ts("event", n), type: "event" };
          }
          (0, A.assertArgument)(!1, "unknown ProviderEvent", "event", t);
        }
        function tu() {
          return new Date().getTime();
        }
        let tc = { cacheTimeout: 250, pollingInterval: 4e3 };
        var th = new WeakMap(),
          tf = new WeakMap(),
          td = new WeakMap(),
          tg = new WeakMap(),
          tp = new WeakMap(),
          tm = new WeakMap(),
          ty = new WeakMap(),
          tA = new WeakMap(),
          tw = new WeakMap(),
          tb = new WeakMap(),
          tv = new WeakMap(),
          tE = new WeakMap(),
          t_ = new WeakSet(),
          tx = new WeakSet(),
          tB = new WeakSet(),
          tk = new WeakSet(),
          tP = new WeakSet(),
          tN = new WeakSet(),
          tI = new WeakSet();
        class tC {
          get pollingInterval() {
            return (0, e._)(this, tE).pollingInterval;
          }
          get provider() {
            return this;
          }
          get plugins() {
            return Array.from((0, e._)(this, tf).values());
          }
          attachPlugin(t) {
            if ((0, e._)(this, tf).get(t.name))
              throw Error(
                "cannot replace existing plugin: ".concat(t.name, " ")
              );
            return (0, e._)(this, tf).set(t.name, t.connect(this)), this;
          }
          getPlugin(t) {
            return (0, e._)(this, tf).get(t) || null;
          }
          get disableCcipRead() {
            return (0, e._)(this, tv);
          }
          set disableCcipRead(t) {
            (0, n._)(this, tv, !!t);
          }
          async ccipReadFetch(t, e, r) {
            if (this.disableCcipRead || 0 === r.length || null == t.to)
              return null;
            let n = t.to.toLowerCase(),
              i = e.toLowerCase(),
              s = [];
            for (let e = 0; e < r.length; e++) {
              let a,
                o = r[e],
                l = o.replace("{sender}", n).replace("{data}", i),
                u = new w.FetchRequest(l);
              -1 === o.indexOf("{data}") && (u.body = { data: i, sender: n }),
                this.emit("debug", {
                  action: "sendCcipReadFetchRequest",
                  request: u,
                  index: e,
                  urls: r,
                });
              let c = "unknown error";
              try {
                a = await u.send();
              } catch (t) {
                s.push(t.message),
                  this.emit("debug", {
                    action: "receiveCcipReadFetchError",
                    request: u,
                    result: { error: t },
                  });
                continue;
              }
              try {
                let t = a.bodyJson;
                if (t.data)
                  return (
                    this.emit("debug", {
                      action: "receiveCcipReadFetchResult",
                      request: u,
                      result: t,
                    }),
                    t.data
                  );
                t.message && (c = t.message),
                  this.emit("debug", {
                    action: "receiveCcipReadFetchError",
                    request: u,
                    result: t,
                  });
              } catch (t) {}
              (0, A.assert)(
                a.statusCode < 400 || a.statusCode >= 500,
                "response not found during CCIP fetch: ".concat(c),
                "OFFCHAIN_FAULT",
                {
                  reason: "404_MISSING_RESOURCE",
                  transaction: t,
                  info: { url: o, errorMessage: c },
                }
              ),
                s.push(c);
            }
            (0, A.assert)(
              !1,
              "error encountered during CCIP fetch: ".concat(
                s.map((t) => JSON.stringify(t)).join(", ")
              ),
              "OFFCHAIN_FAULT",
              {
                reason: "500_SERVER_ERROR",
                transaction: t,
                info: { urls: r, errorMessages: s },
              }
            );
          }
          _wrapBlock(t, e) {
            return new I.Block((0, P.formatBlock)(t), this);
          }
          _wrapLog(t, e) {
            return new I.Log((0, P.formatLog)(t), this);
          }
          _wrapTransactionReceipt(t, e) {
            return new I.TransactionReceipt(
              (0, P.formatTransactionReceipt)(t),
              this
            );
          }
          _wrapTransactionResponse(t, e) {
            return new I.TransactionResponse(
              (0, P.formatTransactionResponse)(t),
              this
            );
          }
          _detectNetwork() {
            (0, A.assert)(
              !1,
              "sub-classes must implement this",
              "UNSUPPORTED_OPERATION",
              { operation: "_detectNetwork" }
            );
          }
          async _perform(t) {
            (0, A.assert)(
              !1,
              "unsupported method: ".concat(t.method),
              "UNSUPPORTED_OPERATION",
              { operation: t.method, info: t }
            );
          }
          async getBlockNumber() {
            let t = (0, p.getNumber)(
              await (0, s._)(this, t_, tO).call(this, {
                method: "getBlockNumber",
              }),
              "%response"
            );
            return (0, e._)(this, tA) >= 0 && (0, n._)(this, tA, t), t;
          }
          _getAddress(t) {
            return (0, c.resolveAddress)(t, this);
          }
          _getBlockTag(t) {
            if (null == t) return "latest";
            switch (t) {
              case "earliest":
                return "0x0";
              case "finalized":
              case "latest":
              case "pending":
              case "safe":
                return t;
            }
            return (0, m.isHexString)(t)
              ? (0, m.isHexString)(t, 32)
                ? t
                : (0, p.toQuantity)(t)
              : ("bigint" == typeof t && (t = (0, p.getNumber)(t, "blockTag")),
                "number" == typeof t)
              ? t >= 0
                ? (0, p.toQuantity)(t)
                : (0, e._)(this, tA) >= 0
                ? (0, p.toQuantity)((0, e._)(this, tA) + t)
                : this.getBlockNumber().then((e) => (0, p.toQuantity)(e + t))
              : void (0, A.assertArgument)(
                  !1,
                  "invalid blockTag",
                  "blockTag",
                  t
                );
          }
          _getFilter(t) {
            let e,
              r,
              n = (t.topics || []).map((t) =>
                null == t
                  ? null
                  : Array.isArray(t)
                  ? to(t.map((t) => t.toLowerCase()))
                  : t.toLowerCase()
              ),
              i = "blockHash" in t ? t.blockHash : void 0,
              s = (t, e, r) => {
                let s;
                switch (t.length) {
                  case 0:
                    break;
                  case 1:
                    s = t[0];
                    break;
                  default:
                    t.sort(), (s = t);
                }
                if (i && (null != e || null != r))
                  throw Error("invalid filter");
                let a = {};
                return (
                  s && (a.address = s),
                  n.length && (a.topics = n),
                  e && (a.fromBlock = e),
                  r && (a.toBlock = r),
                  i && (a.blockHash = i),
                  a
                );
              },
              a = [];
            if (t.address)
              if (Array.isArray(t.address))
                for (let e of t.address) a.push(this._getAddress(e));
              else a.push(this._getAddress(t.address));
            return (
              "fromBlock" in t && (e = this._getBlockTag(t.fromBlock)),
              ("toBlock" in t && (r = this._getBlockTag(t.toBlock)),
              a.filter((t) => "string" != typeof t).length ||
                (null != e && "string" != typeof e) ||
                (null != r && "string" != typeof r))
                ? Promise.all([Promise.all(a), e, r]).then((t) =>
                    s(t[0], t[1], t[2])
                  )
                : s(a, e, r)
            );
          }
          _getTransactionRequest(t) {
            let e = (0, I.copyRequest)(t),
              r = [];
            if (
              (["to", "from"].forEach((t) => {
                if (null == e[t]) return;
                let n = (0, c.resolveAddress)(e[t], this);
                ti(n)
                  ? r.push(
                      (async function () {
                        e[t] = await n;
                      })()
                    )
                  : (e[t] = n);
              }),
              null != e.blockTag)
            ) {
              let t = this._getBlockTag(e.blockTag);
              ti(t)
                ? r.push(
                    (async function () {
                      e.blockTag = await t;
                    })()
                  )
                : (e.blockTag = t);
            }
            return r.length
              ? (async function () {
                  return await Promise.all(r), e;
                })()
              : e;
          }
          async getNetwork() {
            if (null == (0, e._)(this, tp)) {
              let t = (async () => {
                try {
                  let t = await this._detectNetwork();
                  return this.emit("network", t, null), t;
                } catch (r) {
                  throw (
                    ((0, e._)(this, tp) === t && (0, n._)(this, tp, null), r)
                  );
                }
              })();
              return (0, n._)(this, tp, t), (await t).clone();
            }
            let t = (0, e._)(this, tp),
              [r, i] = await Promise.all([t, this._detectNetwork()]);
            return (
              r.chainId !== i.chainId &&
                ((0, e._)(this, tm)
                  ? (this.emit("network", i, r),
                    (0, e._)(this, tp) === t &&
                      (0, n._)(this, tp, Promise.resolve(i)))
                  : (0, A.assert)(
                      !1,
                      "network changed: "
                        .concat(r.chainId, " => ")
                        .concat(i.chainId, " "),
                      "NETWORK_ERROR",
                      { event: "changed" }
                    )),
              r.clone()
            );
          }
          async getFeeData() {
            let t = await this.getNetwork(),
              e = async () => {
                let {
                    _block: e,
                    gasPrice: r,
                    priorityFee: n,
                  } = await (0, g.resolveProperties)({
                    _block: (0, s._)(this, tP, tU).call(this, "latest", !1),
                    gasPrice: (async () => {
                      try {
                        let t = await (0, s._)(this, t_, tO).call(this, {
                          method: "getGasPrice",
                        });
                        return (0, p.getBigInt)(t, "%response");
                      } catch (t) {}
                      return null;
                    })(),
                    priorityFee: (async () => {
                      try {
                        let t = await (0, s._)(this, t_, tO).call(this, {
                          method: "getPriorityFee",
                        });
                        return (0, p.getBigInt)(t, "%response");
                      } catch (t) {}
                      return null;
                    })(),
                  }),
                  i = null,
                  a = null,
                  o = this._wrapBlock(e, t);
                return (
                  o &&
                    o.baseFeePerGas &&
                    ((a = null != n ? n : BigInt("1000000000")),
                    (i = o.baseFeePerGas * tn + a)),
                  new I.FeeData(r, i, a)
                );
              },
              r = t.getPlugin(
                "org.ethers.plugins.network.FetchUrlFeeDataPlugin"
              );
            if (r) {
              let t = new w.FetchRequest(r.url),
                n = await r.processFunc(e, this, t);
              return new I.FeeData(
                n.gasPrice,
                n.maxFeePerGas,
                n.maxPriorityFeePerGas
              );
            }
            return await e();
          }
          async estimateGas(t) {
            let e = this._getTransactionRequest(t);
            return (
              ti(e) && (e = await e),
              (0, p.getBigInt)(
                await (0, s._)(this, t_, tO).call(this, {
                  method: "estimateGas",
                  transaction: e,
                }),
                "%response"
              )
            );
          }
          async call(t) {
            let { tx: e, blockTag: r } = await (0, g.resolveProperties)({
              tx: this._getTransactionRequest(t),
              blockTag: this._getBlockTag(t.blockTag),
            });
            return await (0, s._)(this, tB, tT).call(
              this,
              (0, s._)(this, tx, tR).call(this, e, r, t.enableCcipRead ? 0 : -1)
            );
          }
          async getBalance(t, e) {
            return (0, p.getBigInt)(
              await (0, s._)(this, tk, tS).call(
                this,
                { method: "getBalance" },
                t,
                e
              ),
              "%response"
            );
          }
          async getTransactionCount(t, e) {
            return (0, p.getNumber)(
              await (0, s._)(this, tk, tS).call(
                this,
                { method: "getTransactionCount" },
                t,
                e
              ),
              "%response"
            );
          }
          async getCode(t, e) {
            return (0, m.hexlify)(
              await (0, s._)(this, tk, tS).call(
                this,
                { method: "getCode" },
                t,
                e
              )
            );
          }
          async getStorage(t, e, r) {
            let n = (0, p.getBigInt)(e, "position");
            return (0, m.hexlify)(
              await (0, s._)(this, tk, tS).call(
                this,
                { method: "getStorage", position: n },
                t,
                r
              )
            );
          }
          async broadcastTransaction(t) {
            let {
                blockNumber: e,
                hash: r,
                network: n,
              } = await (0, g.resolveProperties)({
                blockNumber: this.getBlockNumber(),
                hash: this._perform({
                  method: "broadcastTransaction",
                  signedTransaction: t,
                }),
                network: this.getNetwork(),
              }),
              i = x.Transaction.from(t);
            if (i.hash !== r)
              throw Error("@TODO: the returned hash did not match");
            return this._wrapTransactionResponse(i, n).replaceableTransaction(
              e
            );
          }
          async getBlock(t, e) {
            let { network: r, params: n } = await (0, g.resolveProperties)({
              network: this.getNetwork(),
              params: (0, s._)(this, tP, tU).call(this, t, !!e),
            });
            return null == n ? null : this._wrapBlock(n, r);
          }
          async getTransaction(t) {
            let { network: e, params: r } = await (0, g.resolveProperties)({
              network: this.getNetwork(),
              params: (0, s._)(this, t_, tO).call(this, {
                method: "getTransaction",
                hash: t,
              }),
            });
            return null == r ? null : this._wrapTransactionResponse(r, e);
          }
          async getTransactionReceipt(t) {
            let { network: e, params: r } = await (0, g.resolveProperties)({
              network: this.getNetwork(),
              params: (0, s._)(this, t_, tO).call(this, {
                method: "getTransactionReceipt",
                hash: t,
              }),
            });
            if (null == r) return null;
            if (null == r.gasPrice && null == r.effectiveGasPrice) {
              let e = await (0, s._)(this, t_, tO).call(this, {
                method: "getTransaction",
                hash: t,
              });
              if (null == e)
                throw Error(
                  "report this; could not find tx or effectiveGasPrice"
                );
              r.effectiveGasPrice = e.gasPrice;
            }
            return this._wrapTransactionReceipt(r, e);
          }
          async getTransactionResult(t) {
            let { result: e } = await (0, g.resolveProperties)({
              network: this.getNetwork(),
              result: (0, s._)(this, t_, tO).call(this, {
                method: "getTransactionResult",
                hash: t,
              }),
            });
            return null == e ? null : (0, m.hexlify)(e);
          }
          async getLogs(t) {
            let e = this._getFilter(t);
            ti(e) && (e = await e);
            let { network: r, params: n } = await (0, g.resolveProperties)({
              network: this.getNetwork(),
              params: (0, s._)(this, t_, tO).call(this, {
                method: "getLogs",
                filter: e,
              }),
            });
            return n.map((t) => this._wrapLog(t, r));
          }
          _getProvider(t) {
            (0, A.assert)(
              !1,
              "provider cannot connect to target network",
              "UNSUPPORTED_OPERATION",
              { operation: "_getProvider()" }
            );
          }
          async getResolver(t) {
            return await k.EnsResolver.fromName(this, t);
          }
          async getAvatar(t) {
            let e = await this.getResolver(t);
            return e ? await e.getAvatar() : null;
          }
          async resolveName(t) {
            let e = await this.getResolver(t);
            return e ? await e.getAddress() : null;
          }
          async lookupAddress(t) {
            t = (0, u.getAddress)(t);
            let e = (0, _.namehash)(
              t.substring(2).toLowerCase() + ".addr.reverse"
            );
            try {
              let r = await k.EnsResolver.getEnsAddress(this),
                n = new E.Contract(
                  r,
                  ["function resolver(bytes32) view returns (address)"],
                  this
                ),
                i = await n.resolver(e);
              if (null == i || i === b.ZeroAddress) return null;
              let s = new E.Contract(
                  i,
                  ["function name(bytes32) view returns (string)"],
                  this
                ),
                a = await s.name(e);
              if ((await this.resolveName(a)) !== t) return null;
              return a;
            } catch (t) {
              if (
                ((0, A.isError)(t, "BAD_DATA") && "0x" === t.value) ||
                (0, A.isError)(t, "CALL_EXCEPTION")
              )
                return null;
              throw t;
            }
          }
          async waitForTransaction(t, e, r) {
            let n = null != e ? e : 1;
            return 0 === n
              ? this.getTransactionReceipt(t)
              : new Promise(async (e, i) => {
                  let s = null,
                    a = async (r) => {
                      try {
                        let i = await this.getTransactionReceipt(t);
                        if (null != i && r - i.blockNumber + 1 >= n) {
                          e(i), s && (clearTimeout(s), (s = null));
                          return;
                        }
                      } catch (t) {
                        console.log("EEE", t);
                      }
                      this.once("block", a);
                    };
                  null != r &&
                    (s = setTimeout(() => {
                      null != s &&
                        ((s = null),
                        this.off("block", a),
                        i(
                          (0, A.makeError)("timeout", "TIMEOUT", {
                            reason: "timeout",
                          })
                        ));
                    }, r)),
                    a(await this.getBlockNumber());
                });
          }
          async waitForBlock(t) {
            (0, A.assert)(!1, "not implemented yet", "NOT_IMPLEMENTED", {
              operation: "waitForBlock",
            });
          }
          _clearTimeout(t) {
            let r = (0, e._)(this, tb).get(t);
            r &&
              (r.timer && clearTimeout(r.timer), (0, e._)(this, tb).delete(t));
          }
          _setTimeout(t, r) {
            null == r && (r = 0);
            let n = (0, i._)(this, tw).value++,
              s = () => {
                (0, e._)(this, tb).delete(n), t();
              };
            if (this.paused)
              (0, e._)(this, tb).set(n, { timer: null, func: s, time: r });
            else {
              let t = setTimeout(s, r);
              (0, e._)(this, tb).set(n, { timer: t, func: s, time: tu() });
            }
            return n;
          }
          _forEachSubscriber(t) {
            for (let r of (0, e._)(this, th).values()) t(r.subscriber);
          }
          _getSubscriber(t) {
            switch (t.type) {
              case "debug":
              case "error":
              case "network":
                return new ta(t.type);
              case "block": {
                let t = new F(this);
                return (t.pollingInterval = this.pollingInterval), t;
              }
              case "safe":
              case "finalized":
                return new W(this, t.type);
              case "event":
                return new te(this, t.filter);
              case "transaction":
                return new K(this, t.hash);
              case "orphan":
                return new j(this, t.filter);
            }
            throw Error("unsupported event: ".concat(t.type));
          }
          _recoverSubscriber(t, r) {
            for (let n of (0, e._)(this, th).values())
              if (n.subscriber === t) {
                n.started && n.subscriber.stop(),
                  (n.subscriber = r),
                  n.started && r.start(),
                  null != (0, e._)(this, td) && r.pause((0, e._)(this, td));
                break;
              }
          }
          async on(t, r) {
            let n = await (0, s._)(this, tI, tD).call(this, t);
            return (
              n.listeners.push({ listener: r, once: !1 }),
              n.started ||
                (n.subscriber.start(),
                (n.started = !0),
                null != (0, e._)(this, td) &&
                  n.subscriber.pause((0, e._)(this, td))),
              this
            );
          }
          async once(t, r) {
            let n = await (0, s._)(this, tI, tD).call(this, t);
            return (
              n.listeners.push({ listener: r, once: !0 }),
              n.started ||
                (n.subscriber.start(),
                (n.started = !0),
                null != (0, e._)(this, td) &&
                  n.subscriber.pause((0, e._)(this, td))),
              this
            );
          }
          async emit(t) {
            for (
              var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1;
              i < r;
              i++
            )
              n[i - 1] = arguments[i];
            let a = await (0, s._)(this, tN, tF).call(this, t, n);
            if (!a || 0 === a.listeners.length) return !1;
            let o = a.listeners.length;
            return (
              (a.listeners = a.listeners.filter((e) => {
                let { listener: r, once: i } = e,
                  s = new B.EventPayload(this, i ? null : r, t);
                try {
                  r.call(this, ...n, s);
                } catch (t) {}
                return !i;
              })),
              0 === a.listeners.length &&
                (a.started && a.subscriber.stop(),
                (0, e._)(this, th).delete(a.tag)),
              o > 0
            );
          }
          async listenerCount(t) {
            if (t) {
              let e = await (0, s._)(this, tN, tF).call(this, t);
              return e ? e.listeners.length : 0;
            }
            let r = 0;
            for (let { listeners: t } of (0, e._)(this, th).values())
              r += t.length;
            return r;
          }
          async listeners(t) {
            if (t) {
              let e = await (0, s._)(this, tN, tF).call(this, t);
              return e
                ? e.listeners.map((t) => {
                    let { listener: e } = t;
                    return e;
                  })
                : [];
            }
            let r = [];
            for (let { listeners: t } of (0, e._)(this, th).values())
              r = r.concat(
                t.map((t) => {
                  let { listener: e } = t;
                  return e;
                })
              );
            return r;
          }
          async off(t, r) {
            let n = await (0, s._)(this, tN, tF).call(this, t);
            if (!n) return this;
            if (r) {
              let t = n.listeners
                .map((t) => {
                  let { listener: e } = t;
                  return e;
                })
                .indexOf(r);
              t >= 0 && n.listeners.splice(t, 1);
            }
            return (
              (r && 0 !== n.listeners.length) ||
                (n.started && n.subscriber.stop(),
                (0, e._)(this, th).delete(n.tag)),
              this
            );
          }
          async removeAllListeners(t) {
            if (t) {
              let {
                tag: r,
                started: n,
                subscriber: i,
              } = await (0, s._)(this, tI, tD).call(this, t);
              n && i.stop(), (0, e._)(this, th).delete(r);
            } else
              for (let [t, { started: r, subscriber: n }] of (0, e._)(this, th))
                r && n.stop(), (0, e._)(this, th).delete(t);
            return this;
          }
          async addListener(t, e) {
            return await this.on(t, e);
          }
          async removeListener(t, e) {
            return this.off(t, e);
          }
          get destroyed() {
            return (0, e._)(this, tg);
          }
          destroy() {
            for (let t of (this.removeAllListeners(),
            (0, e._)(this, tb).keys()))
              this._clearTimeout(t);
            (0, n._)(this, tg, !0);
          }
          get paused() {
            return null != (0, e._)(this, td);
          }
          set paused(t) {
            !!t !== this.paused &&
              (this.paused ? this.resume() : this.pause(!1));
          }
          pause(t) {
            if (((0, n._)(this, tA, -1), null != (0, e._)(this, td))) {
              if ((0, e._)(this, td) == !!t) return;
              (0, A.assert)(
                !1,
                "cannot change pause type; resume first",
                "UNSUPPORTED_OPERATION",
                { operation: "pause" }
              );
            }
            for (let r of (this._forEachSubscriber((e) => e.pause(t)),
            (0, n._)(this, td, !!t),
            (0, e._)(this, tb).values()))
              r.timer && clearTimeout(r.timer), (r.time = tu() - r.time);
          }
          resume() {
            if (null != (0, e._)(this, td))
              for (let t of (this._forEachSubscriber((t) => t.resume()),
              (0, n._)(this, td, null),
              (0, e._)(this, tb).values())) {
                let e = t.time;
                e < 0 && (e = 0), (t.time = tu()), setTimeout(t.func, e);
              }
          }
          constructor(t, e) {
            if (
              ((0, a._)(this, t_),
              (0, a._)(this, tx),
              (0, a._)(this, tB),
              (0, a._)(this, tk),
              (0, a._)(this, tP),
              (0, a._)(this, tN),
              (0, a._)(this, tI),
              (0, r._)(this, th, { writable: !0, value: void 0 }),
              (0, r._)(this, tf, { writable: !0, value: void 0 }),
              (0, r._)(this, td, { writable: !0, value: void 0 }),
              (0, r._)(this, tg, { writable: !0, value: void 0 }),
              (0, r._)(this, tp, { writable: !0, value: void 0 }),
              (0, r._)(this, tm, { writable: !0, value: void 0 }),
              (0, r._)(this, ty, { writable: !0, value: void 0 }),
              (0, r._)(this, tA, { writable: !0, value: void 0 }),
              (0, r._)(this, tw, { writable: !0, value: void 0 }),
              (0, r._)(this, tb, { writable: !0, value: void 0 }),
              (0, r._)(this, tv, { writable: !0, value: void 0 }),
              (0, r._)(this, tE, { writable: !0, value: void 0 }),
              (0, n._)(this, tE, Object.assign({}, tc, e || {})),
              "any" === t)
            )
              (0, n._)(this, tm, !0), (0, n._)(this, tp, null);
            else if (t) {
              let e = N.Network.from(t);
              (0, n._)(this, tm, !1),
                (0, n._)(this, tp, Promise.resolve(e)),
                setTimeout(() => {
                  this.emit("network", e, null);
                }, 0);
            } else (0, n._)(this, tm, !1), (0, n._)(this, tp, null);
            (0, n._)(this, tA, -1),
              (0, n._)(this, ty, new Map()),
              (0, n._)(this, th, new Map()),
              (0, n._)(this, tf, new Map()),
              (0, n._)(this, td, null),
              (0, n._)(this, tg, !1),
              (0, n._)(this, tw, 1),
              (0, n._)(this, tb, new Map()),
              (0, n._)(this, tv, !1);
          }
        }
        async function tO(t) {
          let r = (0, e._)(this, tE).cacheTimeout;
          if (r < 0) return await this._perform(t);
          let n = ts(t.method, t),
            i = (0, e._)(this, ty).get(n);
          return (
            i ||
              ((i = this._perform(t)),
              (0, e._)(this, ty).set(n, i),
              setTimeout(() => {
                (0, e._)(this, ty).get(n) === i && (0, e._)(this, ty).delete(n);
              }, r)),
            await i
          );
        }
        async function tR(t, e, r) {
          (0, A.assert)(
            r < 10,
            "CCIP read exceeded maximum redirections",
            "OFFCHAIN_FAULT",
            {
              reason: "TOO_MANY_REDIRECTS",
              transaction: Object.assign({}, t, {
                blockTag: e,
                enableCcipRead: !0,
              }),
            }
          );
          let n = (0, I.copyRequest)(t);
          try {
            return (0, m.hexlify)(
              await this._perform({
                method: "call",
                transaction: n,
                blockTag: e,
              })
            );
          } catch (t) {
            if (
              !this.disableCcipRead &&
              (0, A.isCallException)(t) &&
              t.data &&
              r >= 0 &&
              "latest" === e &&
              null != n.to &&
              "0x556f1830" === (0, m.dataSlice)(t.data, 0, 4)
            ) {
              let i,
                a = t.data,
                o = await (0, c.resolveAddress)(n.to, this);
              try {
                i = (function (t) {
                  let e = {
                    sender: "",
                    urls: [],
                    calldata: "",
                    selector: "",
                    extraData: "",
                    errorArgs: [],
                  };
                  (0, A.assert)(
                    (0, m.dataLength)(t) >= 160,
                    "insufficient OffchainLookup data",
                    "OFFCHAIN_FAULT",
                    { reason: "insufficient OffchainLookup data" }
                  );
                  let r = (0, m.dataSlice)(t, 0, 32);
                  (0, A.assert)(
                    (0, m.dataSlice)(r, 0, 12) === (0, m.dataSlice)(tH, 0, 12),
                    "corrupt OffchainLookup sender",
                    "OFFCHAIN_FAULT",
                    { reason: "corrupt OffchainLookup sender" }
                  ),
                    (e.sender = (0, m.dataSlice)(r, 12));
                  try {
                    let r = [],
                      n = (0, p.getNumber)((0, m.dataSlice)(t, 32, 64)),
                      i = (0, p.getNumber)((0, m.dataSlice)(t, n, n + 32)),
                      s = (0, m.dataSlice)(t, n + 32);
                    for (let t = 0; t < i; t++) {
                      let e = (function (t, e) {
                        try {
                          let r = tL(t, e);
                          if (r) return (0, y.toUtf8String)(r);
                        } catch (t) {}
                        return null;
                      })(s, 32 * t);
                      if (null == e) throw Error("abort");
                      r.push(e);
                    }
                    e.urls = r;
                  } catch (t) {
                    (0, A.assert)(
                      !1,
                      "corrupt OffchainLookup urls",
                      "OFFCHAIN_FAULT",
                      { reason: "corrupt OffchainLookup urls" }
                    );
                  }
                  try {
                    let r = tL(t, 64);
                    if (null == r) throw Error("abort");
                    e.calldata = r;
                  } catch (t) {
                    (0, A.assert)(
                      !1,
                      "corrupt OffchainLookup calldata",
                      "OFFCHAIN_FAULT",
                      { reason: "corrupt OffchainLookup calldata" }
                    );
                  }
                  (0, A.assert)(
                    (0, m.dataSlice)(t, 100, 128) ===
                      (0, m.dataSlice)(tH, 0, 28),
                    "corrupt OffchainLookup callbaackSelector",
                    "OFFCHAIN_FAULT",
                    { reason: "corrupt OffchainLookup callbaackSelector" }
                  ),
                    (e.selector = (0, m.dataSlice)(t, 96, 100));
                  try {
                    let r = tL(t, 128);
                    if (null == r) throw Error("abort");
                    e.extraData = r;
                  } catch (t) {
                    (0, A.assert)(
                      !1,
                      "corrupt OffchainLookup extraData",
                      "OFFCHAIN_FAULT",
                      { reason: "corrupt OffchainLookup extraData" }
                    );
                  }
                  return (
                    (e.errorArgs = "sender,urls,calldata,selector,extraData"
                      .split(/,/)
                      .map((t) => e[t])),
                    e
                  );
                })((0, m.dataSlice)(t.data, 4));
              } catch (t) {
                (0, A.assert)(!1, t.message, "OFFCHAIN_FAULT", {
                  reason: "BAD_DATA",
                  transaction: n,
                  info: { data: a },
                });
              }
              (0, A.assert)(
                i.sender.toLowerCase() === o.toLowerCase(),
                "CCIP Read sender mismatch",
                "CALL_EXCEPTION",
                {
                  action: "call",
                  data: a,
                  reason: "OffchainLookup",
                  transaction: n,
                  invocation: null,
                  revert: {
                    signature:
                      "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                    name: "OffchainLookup",
                    args: i.errorArgs,
                  },
                }
              );
              let l = await this.ccipReadFetch(n, i.calldata, i.urls);
              (0, A.assert)(
                null != l,
                "CCIP Read failed to fetch data",
                "OFFCHAIN_FAULT",
                {
                  reason: "FETCH_FAILED",
                  transaction: n,
                  info: { data: t.data, errorArgs: i.errorArgs },
                }
              );
              let u = {
                to: o,
                data: (0, m.concat)([
                  i.selector,
                  (function (t) {
                    let e = [],
                      r = 0;
                    for (let n = 0; n < t.length; n++) e.push(tG), (r += 32);
                    for (let n = 0; n < t.length; n++) {
                      let i = (0, m.getBytes)(t[n]);
                      (e[n] = tM(r)),
                        e.push(tM(i.length)),
                        e.push(
                          (function (t) {
                            if (t.length % 32 == 0) return t;
                            let e = new Uint8Array(
                              32 * Math.ceil(t.length / 32)
                            );
                            return e.set(t), e;
                          })(i)
                        ),
                        (r += 32 + 32 * Math.ceil(i.length / 32));
                    }
                    return (0, m.concat)(e);
                  })([l, i.extraData]),
                ]),
              };
              this.emit("debug", {
                action: "sendCcipReadCall",
                transaction: u,
              });
              try {
                let t = await (0, s._)(this, tx, tR).call(this, u, e, r + 1);
                return (
                  this.emit("debug", {
                    action: "receiveCcipReadCallResult",
                    transaction: Object.assign({}, u),
                    result: t,
                  }),
                  t
                );
              } catch (t) {
                throw (
                  (this.emit("debug", {
                    action: "receiveCcipReadCallError",
                    transaction: Object.assign({}, u),
                    error: t,
                  }),
                  t)
                );
              }
            }
            throw t;
          }
        }
        async function tT(t) {
          let { value: e } = await (0, g.resolveProperties)({
            network: this.getNetwork(),
            value: t,
          });
          return e;
        }
        async function tS(t, e, r) {
          let n = this._getAddress(e),
            i = this._getBlockTag(r);
          return (
            ("string" != typeof n || "string" != typeof i) &&
              ([n, i] = await Promise.all([n, i])),
            await (0, s._)(this, tB, tT).call(
              this,
              (0, s._)(this, t_, tO).call(
                this,
                Object.assign(t, { address: n, blockTag: i })
              )
            )
          );
        }
        async function tU(t, e) {
          if ((0, m.isHexString)(t, 32))
            return await (0, s._)(this, t_, tO).call(this, {
              method: "getBlock",
              blockHash: t,
              includeTransactions: e,
            });
          let r = this._getBlockTag(t);
          return (
            "string" != typeof r && (r = await r),
            await (0, s._)(this, t_, tO).call(this, {
              method: "getBlock",
              blockTag: r,
              includeTransactions: e,
            })
          );
        }
        async function tF(t, r) {
          let n = await tl(t, this);
          return (
            "event" === n.type &&
              r &&
              r.length > 0 &&
              !0 === r[0].removed &&
              (n = await tl({ orphan: "drop-log", log: r[0] }, this)),
            (0, e._)(this, th).get(n.tag) || null
          );
        }
        async function tD(t) {
          let r = await tl(t, this),
            n = r.tag,
            i = (0, e._)(this, th).get(n);
          if (!i) {
            let t = this._getSubscriber(r);
            (i = {
              subscriber: t,
              tag: n,
              addressableMap: new WeakMap(),
              nameMap: new Map(),
              started: !1,
              listeners: [],
            }),
              (0, e._)(this, th).set(n, i);
          }
          return i;
        }
        function tL(t, e) {
          if ("0x" === t) return null;
          try {
            let r = (0, p.getNumber)((0, m.dataSlice)(t, e, e + 32)),
              n = (0, p.getNumber)((0, m.dataSlice)(t, r, r + 32));
            return (0, m.dataSlice)(t, r + 32, r + 32 + n);
          } catch (t) {}
          return null;
        }
        function tM(t) {
          let e = (0, p.toBeArray)(t);
          if (e.length > 32) throw Error("internal; should not happen");
          let r = new Uint8Array(32);
          return r.set(e, 32 - e.length), r;
        }
        let tG = new Uint8Array([]),
          tH =
            "0x0000000000000000000000000000000000000000000000000000000000000000";
        function tQ(t, e) {
          if (t.provider) return t.provider;
          (0, A.assert)(!1, "missing provider", "UNSUPPORTED_OPERATION", {
            operation: e,
          });
        }
        async function tz(t, e) {
          let r = (0, I.copyRequest)(e);
          if (
            (null != r.to && (r.to = (0, c.resolveAddress)(r.to, t)),
            null != r.from)
          ) {
            let e = r.from;
            r.from = Promise.all([
              t.getAddress(),
              (0, c.resolveAddress)(e, t),
            ]).then((t) => {
              let [e, r] = t;
              return (
                (0, A.assertArgument)(
                  e.toLowerCase() === r.toLowerCase(),
                  "transaction from mismatch",
                  "tx.from",
                  r
                ),
                e
              );
            });
          } else r.from = t.getAddress();
          return await (0, g.resolveProperties)(r);
        }
        t.s({ AbstractSigner: () => tW, VoidSigner: () => tj }, 999686);
        class tW {
          async getNonce(t) {
            return tQ(this, "getTransactionCount").getTransactionCount(
              await this.getAddress(),
              t
            );
          }
          async populateCall(t) {
            return await tz(this, t);
          }
          async populateTransaction(t) {
            let e = tQ(this, "populateTransaction"),
              r = await tz(this, t);
            null == r.nonce && (r.nonce = await this.getNonce("pending")),
              null == r.gasLimit && (r.gasLimit = await this.estimateGas(r));
            let n = await this.provider.getNetwork();
            if (null != r.chainId) {
              let e = (0, p.getBigInt)(r.chainId);
              (0, A.assertArgument)(
                e === n.chainId,
                "transaction chainId mismatch",
                "tx.chainId",
                t.chainId
              );
            } else r.chainId = n.chainId;
            let i = null != r.maxFeePerGas || null != r.maxPriorityFeePerGas;
            if (
              (null != r.gasPrice && (2 === r.type || i)
                ? (0, A.assertArgument)(
                    !1,
                    "eip-1559 transaction do not support gasPrice",
                    "tx",
                    t
                  )
                : (0 === r.type || 1 === r.type) &&
                  i &&
                  (0, A.assertArgument)(
                    !1,
                    "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas",
                    "tx",
                    t
                  ),
              (2 === r.type || null == r.type) &&
                null != r.maxFeePerGas &&
                null != r.maxPriorityFeePerGas)
            )
              r.type = 2;
            else if (0 === r.type || 1 === r.type) {
              let t = await e.getFeeData();
              (0, A.assert)(
                null != t.gasPrice,
                "network does not support gasPrice",
                "UNSUPPORTED_OPERATION",
                { operation: "getGasPrice" }
              ),
                null == r.gasPrice && (r.gasPrice = t.gasPrice);
            } else {
              let t = await e.getFeeData();
              if (null == r.type)
                if (null != t.maxFeePerGas && null != t.maxPriorityFeePerGas)
                  if (
                    (r.authorizationList && r.authorizationList.length
                      ? (r.type = 4)
                      : (r.type = 2),
                    null != r.gasPrice)
                  ) {
                    let t = r.gasPrice;
                    delete r.gasPrice,
                      (r.maxFeePerGas = t),
                      (r.maxPriorityFeePerGas = t);
                  } else
                    null == r.maxFeePerGas && (r.maxFeePerGas = t.maxFeePerGas),
                      null == r.maxPriorityFeePerGas &&
                        (r.maxPriorityFeePerGas = t.maxPriorityFeePerGas);
                else
                  null != t.gasPrice
                    ? ((0, A.assert)(
                        !i,
                        "network does not support EIP-1559",
                        "UNSUPPORTED_OPERATION",
                        { operation: "populateTransaction" }
                      ),
                      null == r.gasPrice && (r.gasPrice = t.gasPrice),
                      (r.type = 0))
                    : (0, A.assert)(
                        !1,
                        "failed to get consistent fee data",
                        "UNSUPPORTED_OPERATION",
                        { operation: "signer.getFeeData" }
                      );
              else
                (2 === r.type || 3 === r.type || 4 === r.type) &&
                  (null == r.maxFeePerGas && (r.maxFeePerGas = t.maxFeePerGas),
                  null == r.maxPriorityFeePerGas &&
                    (r.maxPriorityFeePerGas = t.maxPriorityFeePerGas));
            }
            return await (0, g.resolveProperties)(r);
          }
          async populateAuthorization(t) {
            let e = Object.assign({}, t);
            return (
              null == e.chainId &&
                (e.chainId = (
                  await tQ(this, "getNetwork").getNetwork()
                ).chainId),
              null == e.nonce && (e.nonce = await this.getNonce()),
              e
            );
          }
          async estimateGas(t) {
            return tQ(this, "estimateGas").estimateGas(
              await this.populateCall(t)
            );
          }
          async call(t) {
            return tQ(this, "call").call(await this.populateCall(t));
          }
          async resolveName(t) {
            let e = tQ(this, "resolveName");
            return await e.resolveName(t);
          }
          async sendTransaction(t) {
            let e = tQ(this, "sendTransaction"),
              r = await this.populateTransaction(t);
            delete r.from;
            let n = x.Transaction.from(r);
            return await e.broadcastTransaction(await this.signTransaction(n));
          }
          authorize(t) {
            (0, A.assert)(
              !1,
              "authorization not implemented for this signer",
              "UNSUPPORTED_OPERATION",
              { operation: "authorize" }
            );
          }
          constructor(t) {
            (0, o._)(this, "provider", void 0),
              (0, g.defineProperties)(this, { provider: t || null });
          }
        }
        var tV = new WeakSet();
        class tj extends tW {
          async getAddress() {
            return this.address;
          }
          connect(t) {
            return new tj(this.address, t);
          }
          async signTransaction(t) {
            (0, s._)(this, tV, tJ).call(
              this,
              "transactions",
              "signTransaction"
            );
          }
          async signMessage(t) {
            (0, s._)(this, tV, tJ).call(this, "messages", "signMessage");
          }
          async signTypedData(t, e, r) {
            (0, s._)(this, tV, tJ).call(this, "typed-data", "signTypedData");
          }
          constructor(t, e) {
            super(e),
              (0, a._)(this, tV),
              (0, o._)(this, "address", void 0),
              (0, g.defineProperties)(this, { address: t });
          }
        }
        function tJ(t, e) {
          (0, A.assert)(
            !1,
            "VoidSigner cannot sign ".concat(t),
            "UNSUPPORTED_OPERATION",
            { operation: e }
          );
        }
        var tK = new WeakMap(),
          tq = new WeakMap(),
          tZ = new WeakMap(),
          tY = new WeakMap(),
          tX = new WeakMap(),
          t$ = new WeakMap(),
          t0 = new WeakSet(),
          t1 = new WeakSet();
        class t2 {
          _subscribe(t) {
            throw Error("subclasses must override this");
          }
          _emitResults(t, e) {
            throw Error("subclasses must override this");
          }
          _recover(t) {
            throw Error("subclasses must override this");
          }
          start() {
            (0, e._)(this, tY) ||
              ((0, n._)(this, tY, !0), (0, s._)(this, t0, t8).call(this, -2));
          }
          stop() {
            (0, e._)(this, tY) &&
              ((0, n._)(this, tY, !1),
              (0, n._)(this, t$, !0),
              (0, s._)(this, t1, t3).call(this),
              (0, e._)(this, tK).off("block", (0, e._)(this, tZ)));
          }
          pause(t) {
            t && (0, s._)(this, t1, t3).call(this),
              (0, e._)(this, tK).off("block", (0, e._)(this, tZ));
          }
          resume() {
            this.start();
          }
          constructor(t) {
            (0, a._)(this, t0),
              (0, a._)(this, t1),
              (0, r._)(this, tK, { writable: !0, value: void 0 }),
              (0, r._)(this, tq, { writable: !0, value: void 0 }),
              (0, r._)(this, tZ, { writable: !0, value: void 0 }),
              (0, r._)(this, tY, { writable: !0, value: void 0 }),
              (0, r._)(this, tX, { writable: !0, value: void 0 }),
              (0, r._)(this, t$, { writable: !0, value: void 0 }),
              (0, n._)(this, tK, t),
              (0, n._)(this, tq, null),
              (0, n._)(this, tZ, (0, s._)(this, t0, t8).bind(this)),
              (0, n._)(this, tY, !1),
              (0, n._)(this, tX, null),
              (0, n._)(this, t$, !1);
          }
        }
        async function t8(t) {
          try {
            null == (0, e._)(this, tq) &&
              (0, n._)(this, tq, this._subscribe((0, e._)(this, tK)));
            let t = null;
            try {
              t = await (0, e._)(this, tq);
            } catch (t) {
              if (
                !(0, A.isError)(t, "UNSUPPORTED_OPERATION") ||
                "eth_newFilter" !== t.operation
              )
                throw t;
            }
            if (null == t) {
              (0, n._)(this, tq, null),
                (0, e._)(this, tK)._recoverSubscriber(
                  this,
                  this._recover((0, e._)(this, tK))
                );
              return;
            }
            let r = await (0, e._)(this, tK).getNetwork();
            if (
              ((0, e._)(this, tX) || (0, n._)(this, tX, r),
              (0, e._)(this, tX).chainId !== r.chainId)
            )
              throw Error("chaid changed");
            if ((0, e._)(this, t$)) return;
            let i = await (0, e._)(this, tK).send("eth_getFilterChanges", [t]);
            await this._emitResults((0, e._)(this, tK), i);
          } catch (t) {
            console.log("@TODO", t);
          }
          (0, e._)(this, tK).once("block", (0, e._)(this, tZ));
        }
        function t3() {
          let t = (0, e._)(this, tq);
          t &&
            ((0, n._)(this, tq, null),
            t.then((t) => {
              (0, e._)(this, tK).destroyed ||
                (0, e._)(this, tK).send("eth_uninstallFilter", [t]);
            }));
        }
        var t5 = new WeakMap();
        class t4 extends t2 {
          _recover(t) {
            return new te(t, (0, e._)(this, t5));
          }
          async _subscribe(t) {
            return await t.send("eth_newFilter", [(0, e._)(this, t5)]);
          }
          async _emitResults(t, r) {
            for (let n of r)
              t.emit((0, e._)(this, t5), t._wrapLog(n, t._network));
          }
          constructor(t, e) {
            super(t),
              (0, r._)(this, t5, { writable: !0, value: void 0 }),
              (0, n._)(this, t5, JSON.parse(JSON.stringify(e)));
          }
        }
        class t6 extends t2 {
          async _subscribe(t) {
            return await t.send("eth_newPendingTransactionFilter", []);
          }
          async _emitResults(t, e) {
            for (let r of e) t.emit("pending", r);
          }
        }
        let t9 = "bigint,boolean,function,number,string,symbol".split(/,/g);
        function t7(t) {
          if (
            null == t ||
            t9.indexOf(typeof t) >= 0 ||
            "function" == typeof t.getAddress
          )
            return t;
          if (Array.isArray(t)) return t.map(t7);
          if ("object" == typeof t)
            return Object.keys(t).reduce((e, r) => ((e[r] = t[r]), e), {});
          throw Error(
            "should not happen: ".concat(t, " (").concat(typeof t, ")")
          );
        }
        function et(t) {
          return t ? t.toLowerCase() : t;
        }
        function ee(t) {
          return t && "number" == typeof t.pollingInterval;
        }
        let er = {
          polling: !1,
          staticNetwork: null,
          batchStallTime: 10,
          batchMaxSize: 1048576,
          batchMaxCount: 100,
          cacheTimeout: 250,
          pollingInterval: 4e3,
        };
        class en extends tW {
          connect(t) {
            (0, A.assert)(
              !1,
              "cannot reconnect JsonRpcSigner",
              "UNSUPPORTED_OPERATION",
              { operation: "signer.connect" }
            );
          }
          async getAddress() {
            return this.address;
          }
          async populateTransaction(t) {
            return await this.populateCall(t);
          }
          async sendUncheckedTransaction(t) {
            let e = t7(t),
              r = [];
            if (e.from) {
              let n = e.from;
              r.push(
                (async () => {
                  let r = await (0, c.resolveAddress)(n, this.provider);
                  (0, A.assertArgument)(
                    null != r && r.toLowerCase() === this.address.toLowerCase(),
                    "from address mismatch",
                    "transaction",
                    t
                  ),
                    (e.from = r);
                })()
              );
            } else e.from = this.address;
            if (
              (null == e.gasLimit &&
                r.push(
                  (async () => {
                    e.gasLimit = await this.provider.estimateGas({
                      ...e,
                      from: this.address,
                    });
                  })()
                ),
              null != e.to)
            ) {
              let t = e.to;
              r.push(
                (async () => {
                  e.to = await (0, c.resolveAddress)(t, this.provider);
                })()
              );
            }
            r.length && (await Promise.all(r));
            let n = this.provider.getRpcTransaction(e);
            return this.provider.send("eth_sendTransaction", [n]);
          }
          async sendTransaction(t) {
            let e = await this.provider.getBlockNumber(),
              r = await this.sendUncheckedTransaction(t);
            return await new Promise((t, n) => {
              let i = [1e3, 100],
                s = 0,
                a = async () => {
                  try {
                    let n = await this.provider.getTransaction(r);
                    if (null != n) return void t(n.replaceableTransaction(e));
                  } catch (t) {
                    if (
                      (0, A.isError)(t, "CANCELLED") ||
                      (0, A.isError)(t, "BAD_DATA") ||
                      (0, A.isError)(t, "NETWORK_ERROR") ||
                      (0, A.isError)(t, "UNSUPPORTED_OPERATION")
                    ) {
                      null == t.info && (t.info = {}),
                        (t.info.sendTransactionHash = r),
                        n(t);
                      return;
                    }
                    if (
                      (0, A.isError)(t, "INVALID_ARGUMENT") &&
                      (s++,
                      null == t.info && (t.info = {}),
                      (t.info.sendTransactionHash = r),
                      s > 10)
                    )
                      return void n(t);
                    this.provider.emit(
                      "error",
                      (0, A.makeError)(
                        "failed to fetch transation after sending (will try again)",
                        "UNKNOWN_ERROR",
                        { error: t }
                      )
                    );
                  }
                  this.provider._setTimeout(() => {
                    a();
                  }, i.pop() || 4e3);
                };
              a();
            });
          }
          async signTransaction(t) {
            let e = t7(t);
            if (e.from) {
              let r = await (0, c.resolveAddress)(e.from, this.provider);
              (0, A.assertArgument)(
                null != r && r.toLowerCase() === this.address.toLowerCase(),
                "from address mismatch",
                "transaction",
                t
              ),
                (e.from = r);
            } else e.from = this.address;
            let r = this.provider.getRpcTransaction(e);
            return await this.provider.send("eth_signTransaction", [r]);
          }
          async signMessage(t) {
            let e = "string" == typeof t ? (0, y.toUtf8Bytes)(t) : t;
            return await this.provider.send("personal_sign", [
              (0, m.hexlify)(e),
              this.address.toLowerCase(),
            ]);
          }
          async signTypedData(t, e, r) {
            let n = t7(r),
              i = await h.TypedDataEncoder.resolveNames(t, e, n, async (t) => {
                let e = await (0, c.resolveAddress)(t);
                return (
                  (0, A.assertArgument)(
                    null != e,
                    "TypedData does not support null address",
                    "value",
                    t
                  ),
                  e
                );
              });
            return await this.provider.send("eth_signTypedData_v4", [
              this.address.toLowerCase(),
              JSON.stringify(
                h.TypedDataEncoder.getPayload(i.domain, e, i.value)
              ),
            ]);
          }
          async unlock(t) {
            return this.provider.send("personal_unlockAccount", [
              this.address.toLowerCase(),
              t,
              null,
            ]);
          }
          async _legacySignMessage(t) {
            let e = "string" == typeof t ? (0, y.toUtf8Bytes)(t) : t;
            return await this.provider.send("eth_sign", [
              this.address.toLowerCase(),
              (0, m.hexlify)(e),
            ]);
          }
          constructor(t, e) {
            super(t),
              (0, o._)(this, "address", void 0),
              (e = (0, u.getAddress)(e)),
              (0, g.defineProperties)(this, { address: e });
          }
        }
        var ei = new WeakMap(),
          es = new WeakMap(),
          ea = new WeakMap(),
          eo = new WeakMap(),
          el = new WeakMap(),
          eu = new WeakMap(),
          ec = new WeakMap(),
          eh = new WeakSet();
        class ef extends tC {
          _getOption(t) {
            return (0, e._)(this, ei)[t];
          }
          get _network() {
            return (
              (0, A.assert)(
                (0, e._)(this, eu),
                "network is not available yet",
                "NETWORK_ERROR"
              ),
              (0, e._)(this, eu)
            );
          }
          async _perform(t) {
            if ("call" === t.method || "estimateGas" === t.method) {
              let e = t.transaction;
              if (
                e &&
                null != e.type &&
                (0, p.getBigInt)(e.type) &&
                null == e.maxFeePerGas &&
                null == e.maxPriorityFeePerGas
              ) {
                let r = await this.getFeeData();
                null == r.maxFeePerGas &&
                  null == r.maxPriorityFeePerGas &&
                  (t = Object.assign({}, t, {
                    transaction: Object.assign({}, e, { type: void 0 }),
                  }));
              }
            }
            let e = this.getRpcRequest(t);
            return null != e
              ? await this.send(e.method, e.args)
              : super._perform(t);
          }
          async _detectNetwork() {
            let t = this._getOption("staticNetwork");
            if (t) {
              if (!0 !== t) return t;
              else if ((0, e._)(this, eu)) return (0, e._)(this, eu);
            }
            return (
              (0, e._)(this, ec) ||
                (this.ready
                  ? (0, n._)(
                      this,
                      ec,
                      (async () => {
                        try {
                          let t = N.Network.from(
                            (0, p.getBigInt)(await this.send("eth_chainId", []))
                          );
                          return (0, n._)(this, ec, null), t;
                        } catch (t) {
                          throw ((0, n._)(this, ec, null), t);
                        }
                      })()
                    )
                  : (0, n._)(
                      this,
                      ec,
                      (async () => {
                        let t,
                          e = {
                            id: (0, i._)(this, es).value++,
                            method: "eth_chainId",
                            params: [],
                            jsonrpc: "2.0",
                          };
                        this.emit("debug", {
                          action: "sendRpcPayload",
                          payload: e,
                        });
                        try {
                          (t = (await this._send(e))[0]),
                            (0, n._)(this, ec, null);
                        } catch (t) {
                          throw (
                            ((0, n._)(this, ec, null),
                            this.emit("debug", {
                              action: "receiveRpcError",
                              error: t,
                            }),
                            t)
                          );
                        }
                        if (
                          (this.emit("debug", {
                            action: "receiveRpcResult",
                            result: t,
                          }),
                          "result" in t)
                        )
                          return N.Network.from((0, p.getBigInt)(t.result));
                        throw this.getRpcError(e, t);
                      })()
                    )),
              await (0, e._)(this, ec)
            );
          }
          _start() {
            null != (0, e._)(this, el) &&
              null != (0, e._)(this, el).resolve &&
              ((0, e._)(this, el).resolve(),
              (0, n._)(this, el, null),
              (async () => {
                for (; null == (0, e._)(this, eu) && !this.destroyed; )
                  try {
                    (0, n._)(this, eu, await this._detectNetwork());
                  } catch (t) {
                    if (this.destroyed) break;
                    console.log(
                      "JsonRpcProvider failed to detect network and cannot start up; retry in 1s (perhaps the URL is wrong or the node is not started)"
                    ),
                      this.emit(
                        "error",
                        (0, A.makeError)(
                          "failed to bootstrap network detection",
                          "NETWORK_ERROR",
                          {
                            event: "initial-network-discovery",
                            info: { error: t },
                          }
                        )
                      ),
                      await new Promise((t) => {
                        setTimeout(t, 1e3);
                      });
                  }
                (0, s._)(this, eh, ed).call(this);
              })());
          }
          async _waitUntilReady() {
            if (null != (0, e._)(this, el))
              return await (0, e._)(this, el).promise;
          }
          _getSubscriber(t) {
            return "pending" === t.type
              ? new t6(this)
              : "event" === t.type
              ? this._getOption("polling")
                ? new te(this, t.filter)
                : new t4(this, t.filter)
              : "orphan" === t.type && "drop-log" === t.filter.orphan
              ? new ta("orphan")
              : super._getSubscriber(t);
          }
          get ready() {
            return null == (0, e._)(this, el);
          }
          getRpcTransaction(t) {
            let e = {};
            return (
              [
                "chainId",
                "gasLimit",
                "gasPrice",
                "type",
                "maxFeePerGas",
                "maxPriorityFeePerGas",
                "nonce",
                "value",
              ].forEach((r) => {
                if (null == t[r]) return;
                let n = r;
                "gasLimit" === r && (n = "gas"),
                  (e[n] = (0, p.toQuantity)(
                    (0, p.getBigInt)(t[r], "tx.".concat(r))
                  ));
              }),
              ["from", "to", "data"].forEach((r) => {
                null != t[r] && (e[r] = (0, m.hexlify)(t[r]));
              }),
              t.accessList &&
                (e.accessList = (0, f.accessListify)(t.accessList)),
              t.blobVersionedHashes &&
                (e.blobVersionedHashes = t.blobVersionedHashes.map((t) =>
                  t.toLowerCase()
                )),
              t.authorizationList &&
                (e.authorizationList = t.authorizationList.map((t) => {
                  let e = (0, d.authorizationify)(t);
                  return {
                    address: e.address,
                    nonce: (0, p.toQuantity)(e.nonce),
                    chainId: (0, p.toQuantity)(e.chainId),
                    yParity: (0, p.toQuantity)(e.signature.yParity),
                    r: (0, p.toQuantity)(e.signature.r),
                    s: (0, p.toQuantity)(e.signature.s),
                  };
                })),
              e
            );
          }
          getRpcRequest(t) {
            switch (t.method) {
              case "chainId":
                return { method: "eth_chainId", args: [] };
              case "getBlockNumber":
                return { method: "eth_blockNumber", args: [] };
              case "getGasPrice":
                return { method: "eth_gasPrice", args: [] };
              case "getPriorityFee":
                return { method: "eth_maxPriorityFeePerGas", args: [] };
              case "getBalance":
                return {
                  method: "eth_getBalance",
                  args: [et(t.address), t.blockTag],
                };
              case "getTransactionCount":
                return {
                  method: "eth_getTransactionCount",
                  args: [et(t.address), t.blockTag],
                };
              case "getCode":
                return {
                  method: "eth_getCode",
                  args: [et(t.address), t.blockTag],
                };
              case "getStorage":
                return {
                  method: "eth_getStorageAt",
                  args: [
                    et(t.address),
                    "0x" + t.position.toString(16),
                    t.blockTag,
                  ],
                };
              case "broadcastTransaction":
                return {
                  method: "eth_sendRawTransaction",
                  args: [t.signedTransaction],
                };
              case "getBlock":
                if ("blockTag" in t)
                  return {
                    method: "eth_getBlockByNumber",
                    args: [t.blockTag, !!t.includeTransactions],
                  };
                if ("blockHash" in t)
                  return {
                    method: "eth_getBlockByHash",
                    args: [t.blockHash, !!t.includeTransactions],
                  };
                break;
              case "getTransaction":
                return { method: "eth_getTransactionByHash", args: [t.hash] };
              case "getTransactionReceipt":
                return { method: "eth_getTransactionReceipt", args: [t.hash] };
              case "call":
                return {
                  method: "eth_call",
                  args: [this.getRpcTransaction(t.transaction), t.blockTag],
                };
              case "estimateGas":
                return {
                  method: "eth_estimateGas",
                  args: [this.getRpcTransaction(t.transaction)],
                };
              case "getLogs":
                return (
                  t.filter &&
                    null != t.filter.address &&
                    (Array.isArray(t.filter.address)
                      ? (t.filter.address = t.filter.address.map(et))
                      : (t.filter.address = et(t.filter.address))),
                  { method: "eth_getLogs", args: [t.filter] }
                );
            }
            return null;
          }
          getRpcError(t, e) {
            let { method: r } = t,
              { error: n } = e;
            if ("eth_estimateGas" === r && n.message) {
              let e = n.message;
              if (!e.match(/revert/i) && e.match(/insufficient funds/i))
                return (0, A.makeError)(
                  "insufficient funds",
                  "INSUFFICIENT_FUNDS",
                  { transaction: t.params[0], info: { payload: t, error: n } }
                );
              if (e.match(/nonce/i) && e.match(/too low/i))
                return (0, A.makeError)(
                  "nonce has already been used",
                  "NONCE_EXPIRED",
                  { transaction: t.params[0], info: { payload: t, error: n } }
                );
            }
            if ("eth_call" === r || "eth_estimateGas" === r) {
              let e = (function t(e) {
                  if (null == e) return null;
                  if (
                    "string" == typeof e.message &&
                    e.message.match(/revert/i) &&
                    (0, m.isHexString)(e.data)
                  )
                    return { message: e.message, data: e.data };
                  if ("object" == typeof e) {
                    for (let r in e) {
                      let n = t(e[r]);
                      if (n) return n;
                    }
                    return null;
                  }
                  if ("string" == typeof e)
                    try {
                      return t(JSON.parse(e));
                    } catch (t) {}
                  return null;
                })(n),
                i = l.AbiCoder.getBuiltinCallException(
                  "eth_call" === r ? "call" : "estimateGas",
                  t.params[0],
                  e ? e.data : null
                );
              return (i.info = { error: n, payload: t }), i;
            }
            let i = JSON.stringify(
              (function (t) {
                let e = [];
                return (
                  !(function t(e, r) {
                    if (null != e) {
                      if (
                        ("string" == typeof e.message && r.push(e.message),
                        "object" == typeof e)
                      )
                        for (let n in e) t(e[n], r);
                      if ("string" == typeof e)
                        try {
                          return t(JSON.parse(e), r);
                        } catch (t) {}
                    }
                  })(t, e),
                  e
                );
              })(n)
            );
            if (
              "string" == typeof n.message &&
              n.message.match(/user denied|ethers-user-denied/i)
            )
              return (0, A.makeError)(
                "user rejected action",
                "ACTION_REJECTED",
                {
                  action:
                    {
                      eth_sign: "signMessage",
                      personal_sign: "signMessage",
                      eth_signTypedData_v4: "signTypedData",
                      eth_signTransaction: "signTransaction",
                      eth_sendTransaction: "sendTransaction",
                      eth_requestAccounts: "requestAccess",
                      wallet_requestAccounts: "requestAccess",
                    }[r] || "unknown",
                  reason: "rejected",
                  info: { payload: t, error: n },
                }
              );
            if ("eth_sendRawTransaction" === r || "eth_sendTransaction" === r) {
              let e = t.params[0];
              if (i.match(/insufficient funds|base fee exceeds gas limit/i))
                return (0, A.makeError)(
                  "insufficient funds for intrinsic transaction cost",
                  "INSUFFICIENT_FUNDS",
                  { transaction: e, info: { error: n } }
                );
              if (i.match(/nonce/i) && i.match(/too low/i))
                return (0, A.makeError)(
                  "nonce has already been used",
                  "NONCE_EXPIRED",
                  { transaction: e, info: { error: n } }
                );
              if (
                i.match(/replacement transaction/i) &&
                i.match(/underpriced/i)
              )
                return (0, A.makeError)(
                  "replacement fee too low",
                  "REPLACEMENT_UNDERPRICED",
                  { transaction: e, info: { error: n } }
                );
              if (i.match(/only replay-protected/i))
                return (0, A.makeError)(
                  "legacy pre-eip-155 transactions not supported",
                  "UNSUPPORTED_OPERATION",
                  { operation: r, info: { transaction: e, info: { error: n } } }
                );
            }
            let s = !!i.match(/the method .* does not exist/i);
            return (!s &&
              n &&
              n.details &&
              n.details.startsWith("Unauthorized method:") &&
              (s = !0),
            s)
              ? (0, A.makeError)(
                  "unsupported operation",
                  "UNSUPPORTED_OPERATION",
                  { operation: t.method, info: { error: n, payload: t } }
                )
              : (0, A.makeError)("could not coalesce error", "UNKNOWN_ERROR", {
                  error: n,
                  payload: t,
                });
          }
          send(t, r) {
            if (this.destroyed)
              return Promise.reject(
                (0, A.makeError)(
                  "provider destroyed; cancelled request",
                  "UNSUPPORTED_OPERATION",
                  { operation: t }
                )
              );
            let n = (0, i._)(this, es).value++,
              a = new Promise((i, s) => {
                (0, e._)(this, ea).push({
                  resolve: i,
                  reject: s,
                  payload: { method: t, params: r, id: n, jsonrpc: "2.0" },
                });
              });
            return (0, s._)(this, eh, ed).call(this), a;
          }
          async getSigner(t) {
            null == t && (t = 0);
            let e = this.send("eth_accounts", []);
            if ("number" == typeof t) {
              let r = await e;
              if (t >= r.length) throw Error("no such account");
              return new en(this, r[t]);
            }
            let { accounts: r } = await (0, g.resolveProperties)({
              network: this.getNetwork(),
              accounts: e,
            });
            for (let e of ((t = (0, u.getAddress)(t)), r))
              if ((0, u.getAddress)(e) === t) return new en(this, t);
            throw Error("invalid account");
          }
          async listAccounts() {
            return (await this.send("eth_accounts", [])).map(
              (t) => new en(this, t)
            );
          }
          destroy() {
            for (let { payload: t, reject: r } of ((0, e._)(this, eo) &&
              (clearTimeout((0, e._)(this, eo)), (0, n._)(this, eo, null)),
            (0, e._)(this, ea)))
              r(
                (0, A.makeError)(
                  "provider destroyed; cancelled request",
                  "UNSUPPORTED_OPERATION",
                  { operation: t.method }
                )
              );
            (0, n._)(this, ea, []), super.destroy();
          }
          constructor(t, e) {
            super(t, e),
              (0, a._)(this, eh),
              (0, r._)(this, ei, { writable: !0, value: void 0 }),
              (0, r._)(this, es, { writable: !0, value: void 0 }),
              (0, r._)(this, ea, { writable: !0, value: void 0 }),
              (0, r._)(this, eo, { writable: !0, value: void 0 }),
              (0, r._)(this, el, { writable: !0, value: void 0 }),
              (0, r._)(this, eu, { writable: !0, value: void 0 }),
              (0, r._)(this, ec, { writable: !0, value: void 0 }),
              (0, n._)(this, es, 1),
              (0, n._)(this, ei, Object.assign({}, er, e || {})),
              (0, n._)(this, ea, []),
              (0, n._)(this, eo, null),
              (0, n._)(this, eu, null),
              (0, n._)(this, ec, null);
            {
              let t = null,
                e = new Promise((e) => {
                  t = e;
                });
              (0, n._)(this, el, { promise: e, resolve: t });
            }
            let i = this._getOption("staticNetwork");
            "boolean" == typeof i
              ? ((0, A.assertArgument)(
                  !i || "any" !== t,
                  "staticNetwork cannot be used on special network 'any'",
                  "options",
                  e
                ),
                i && null != t && (0, n._)(this, eu, N.Network.from(t)))
              : i &&
                ((0, A.assertArgument)(
                  null == t || i.matches(t),
                  "staticNetwork MUST match network object",
                  "options",
                  e
                ),
                (0, n._)(this, eu, i));
          }
        }
        function ed() {
          if ((0, e._)(this, eo)) return;
          let t =
            1 === this._getOption("batchMaxCount")
              ? 0
              : this._getOption("batchStallTime");
          (0, n._)(
            this,
            eo,
            setTimeout(() => {
              (0, n._)(this, eo, null);
              let t = (0, e._)(this, ea);
              for ((0, n._)(this, ea, []); t.length; ) {
                let r = [t.shift()];
                for (
                  ;
                  t.length && r.length !== (0, e._)(this, ei).batchMaxCount;

                )
                  if (
                    (r.push(t.shift()),
                    JSON.stringify(r.map((t) => t.payload)).length >
                      (0, e._)(this, ei).batchMaxSize)
                  ) {
                    t.unshift(r.pop());
                    break;
                  }
                (async () => {
                  let t =
                    1 === r.length ? r[0].payload : r.map((t) => t.payload);
                  this.emit("debug", { action: "sendRpcPayload", payload: t });
                  try {
                    let e = await this._send(t);
                    for (let {
                      resolve: t,
                      reject: n,
                      payload: i,
                    } of (this.emit("debug", {
                      action: "receiveRpcResult",
                      result: e,
                    }),
                    r)) {
                      if (this.destroyed) {
                        n(
                          (0, A.makeError)(
                            "provider destroyed; cancelled request",
                            "UNSUPPORTED_OPERATION",
                            { operation: i.method }
                          )
                        );
                        continue;
                      }
                      let r = e.filter((t) => t.id === i.id)[0];
                      if (null == r) {
                        let t = (0, A.makeError)(
                          "missing response for request",
                          "BAD_DATA",
                          { value: e, info: { payload: i } }
                        );
                        this.emit("error", t), n(t);
                        continue;
                      }
                      if ("error" in r) {
                        n(this.getRpcError(i, r));
                        continue;
                      }
                      t(r.result);
                    }
                  } catch (t) {
                    for (let { reject: e } of (this.emit("debug", {
                      action: "receiveRpcError",
                      error: t,
                    }),
                    r))
                      e(t);
                  }
                })();
              }
            }, t)
          );
        }
        var eg = new WeakMap();
        class ep extends ef {
          _getSubscriber(t) {
            let r = super._getSubscriber(t);
            return ee(r) && (r.pollingInterval = (0, e._)(this, eg)), r;
          }
          get pollingInterval() {
            return (0, e._)(this, eg);
          }
          set pollingInterval(t) {
            if (!Number.isInteger(t) || t < 0) throw Error("invalid interval");
            (0, n._)(this, eg, t),
              this._forEachSubscriber((t) => {
                ee(t) && (t.pollingInterval = (0, e._)(this, eg));
              });
          }
          constructor(t, e) {
            super(t, e), (0, r._)(this, eg, { writable: !0, value: void 0 });
            let i = this._getOption("pollingInterval");
            null == i && (i = er.pollingInterval), (0, n._)(this, eg, i);
          }
        }
        var em = new WeakMap();
        class ey extends ep {
          _getConnection() {
            return (0, e._)(this, em).clone();
          }
          async send(t, e) {
            return await this._start(), await super.send(t, e);
          }
          async _send(t) {
            let e = this._getConnection();
            (e.body = JSON.stringify(t)),
              e.setHeader("content-type", "application/json");
            let r = await e.send();
            r.assertOk();
            let n = r.bodyJson;
            return Array.isArray(n) || (n = [n]), n;
          }
          constructor(t, e, i) {
            null == t && (t = "http://localhost:8545"),
              super(e, i),
              (0, r._)(this, em, { writable: !0, value: void 0 }),
              "string" == typeof t
                ? (0, n._)(this, em, new w.FetchRequest(t))
                : (0, n._)(this, em, t.clone());
          }
        }
      },
      [790587, 999686],
    ],
  },
]);

//# sourceMappingURL=256e8ae95fac160a.js.map
