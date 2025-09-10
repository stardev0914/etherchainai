(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    868477: (e) => {
      var { m: t, e: n } = e;
      {
        var s = e.i(109562);
        let { keccak_256: n } = e.r(66759);
        function r(e) {
          return s.Buffer.allocUnsafe(e).fill(0);
        }
        function i(e, t) {
          let n = e.toString(16);
          n.length % 2 != 0 && (n = "0" + n);
          let r = n.match(/.{1,2}/g).map((e) => parseInt(e, 16));
          for (; r.length < t; ) r.unshift(0);
          return s.Buffer.from(r);
        }
        function a(e, t, n) {
          let s = r(t);
          return ((e = o(e)), n)
            ? e.length < t
              ? (e.copy(s), s)
              : e.slice(0, t)
            : e.length < t
            ? (e.copy(s, t - e.length), s)
            : e.slice(-t);
        }
        function o(e) {
          if (!s.Buffer.isBuffer(e))
            if (Array.isArray(e)) e = s.Buffer.from(e);
            else if ("string" == typeof e) {
              var t;
              e = c(e)
                ? s.Buffer.from((t = l(e)).length % 2 ? "0" + t : t, "hex")
                : s.Buffer.from(e);
            } else if ("number" == typeof e) e = intToBuffer(e);
            else if (null == e) e = s.Buffer.allocUnsafe(0);
            else if ("bigint" == typeof e) e = i(e);
            else if (e.toArray) e = s.Buffer.from(e.toArray());
            else throw Error("invalid type");
          return e;
        }
        function c(e) {
          return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/);
        }
        function l(e) {
          return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e;
        }
        t.exports = {
          zeros: r,
          setLength: a,
          setLengthRight: function (e, t) {
            return a(e, t, !0);
          },
          isHexString: c,
          stripHexPrefix: l,
          toBuffer: o,
          bufferToHex: function (e) {
            return "0x" + (e = o(e)).toString("hex");
          },
          keccak: function (e, t) {
            if (((e = o(e)), t || (t = 256), 256 !== t))
              throw Error("unsupported");
            return s.Buffer.from(n(new Uint8Array(e)));
          },
          bitLengthFromBigInt: function (e) {
            return e.toString(2).length;
          },
          bufferBEFromBigInt: i,
          twosFromBigInt: function (e, t) {
            return (
              (e < 0n ? (~e & ((1n << BigInt(t)) - 1n)) + 1n : e) &
              ((1n << BigInt(t)) - 1n)
            );
          },
        };
      }
    },
    986224: (e) => {
      var { m: t, e: n } = e;
      {
        var s = e.i(109562);
        let n = e.r(868477);
        function r(e) {
          if (e.startsWith("int[")) return "int256" + e.slice(3);
          if ("int" === e) return "int256";
          if (e.startsWith("uint[")) return "uint256" + e.slice(4);
          if ("uint" === e) return "uint256";
          if (e.startsWith("fixed[")) return "fixed128x128" + e.slice(5);
          else if ("fixed" === e) return "fixed128x128";
          else if (e.startsWith("ufixed[")) return "ufixed128x128" + e.slice(6);
          else if ("ufixed" === e) return "ufixed128x128";
          return e;
        }
        function i(e) {
          return Number.parseInt(/^\D+(\d+)$/.exec(e)[1], 10);
        }
        function a(e) {
          var t = /^\D+(\d+)x(\d+)$/.exec(e);
          return [Number.parseInt(t[1], 10), Number.parseInt(t[2], 10)];
        }
        function o(e) {
          var t = e.match(/(.*)\[(.*?)\]$/);
          return t
            ? "" === t[2]
              ? "dynamic"
              : Number.parseInt(t[2], 10)
            : null;
        }
        function c(e) {
          var t = typeof e;
          if ("string" === t || "number" === t) return BigInt(e);
          if ("bigint" === t) return e;
          throw Error("Argument is not a number");
        }
        function l(e, t) {
          if ("address" === e) return l("uint160", c(t));
          if ("bool" === e) return l("uint8", +!!t);
          if ("string" === e) return l("bytes", new s.Buffer(t, "utf8"));
          if ((p = e).lastIndexOf("]") === p.length - 1) {
            if (void 0 === t.length) throw Error("Not an array?");
            if ("dynamic" !== (r = o(e)) && 0 !== r && t.length > r)
              throw Error("Elements exceed array size: " + r);
            for (u in ((d = []),
            (e = e.slice(0, e.lastIndexOf("["))),
            "string" == typeof t && (t = JSON.parse(t)),
            t))
              d.push(l(e, t[u]));
            if ("dynamic" === r) {
              var r,
                h,
                d,
                u,
                p,
                f = l("uint256", t.length);
              d.unshift(f);
            }
            return s.Buffer.concat(d);
          } else if ("bytes" === e)
            return (
              (t = new s.Buffer(t)),
              (d = s.Buffer.concat([l("uint256", t.length), t])),
              t.length % 32 != 0 &&
                (d = s.Buffer.concat([d, n.zeros(32 - (t.length % 32))])),
              d
            );
          else if (e.startsWith("bytes")) {
            if ((r = i(e)) < 1 || r > 32)
              throw Error("Invalid bytes<N> width: " + r);
            return n.setLengthRight(t, 32);
          } else if (e.startsWith("uint")) {
            if ((r = i(e)) % 8 || r < 8 || r > 256)
              throw Error("Invalid uint<N> width: " + r);
            h = c(t);
            let s = n.bitLengthFromBigInt(h);
            if (s > r)
              throw Error("Supplied uint exceeds width: " + r + " vs " + s);
            if (h < 0) throw Error("Supplied uint is negative");
            return n.bufferBEFromBigInt(h, 32);
          } else if (e.startsWith("int")) {
            if ((r = i(e)) % 8 || r < 8 || r > 256)
              throw Error("Invalid int<N> width: " + r);
            h = c(t);
            let s = n.bitLengthFromBigInt(h);
            if (s > r)
              throw Error("Supplied int exceeds width: " + r + " vs " + s);
            let a = n.twosFromBigInt(h, 256);
            return n.bufferBEFromBigInt(a, 32);
          } else if (e.startsWith("ufixed")) {
            if (((r = a(e)), (h = c(t)) < 0))
              throw Error("Supplied ufixed is negative");
            return l("uint256", h * BigInt(2) ** BigInt(r[1]));
          } else if (e.startsWith("fixed"))
            return (r = a(e)), l("int256", c(t) * BigInt(2) ** BigInt(r[1]));
          throw Error("Unsupported or invalid type: " + e);
        }
        function h(e, t) {
          if (e.length !== t.length)
            throw Error("Number of types are not matching the values");
          for (var a, o, l = [], h = 0; h < e.length; h++) {
            var d = r(e[h]),
              u = t[h];
            if ("bytes" === d) l.push(u);
            else if ("string" === d) l.push(new s.Buffer(u, "utf8"));
            else if ("bool" === d) l.push(new s.Buffer(u ? "01" : "00", "hex"));
            else if ("address" === d) l.push(n.setLength(u, 20));
            else if (d.startsWith("bytes")) {
              if ((a = i(d)) < 1 || a > 32)
                throw Error("Invalid bytes<N> width: " + a);
              l.push(n.setLengthRight(u, a));
            } else if (d.startsWith("uint")) {
              if ((a = i(d)) % 8 || a < 8 || a > 256)
                throw Error("Invalid uint<N> width: " + a);
              o = c(u);
              let e = n.bitLengthFromBigInt(o);
              if (e > a)
                throw Error("Supplied uint exceeds width: " + a + " vs " + e);
              l.push(n.bufferBEFromBigInt(o, a / 8));
            } else if (d.startsWith("int")) {
              if ((a = i(d)) % 8 || a < 8 || a > 256)
                throw Error("Invalid int<N> width: " + a);
              o = c(u);
              let e = n.bitLengthFromBigInt(o);
              if (e > a)
                throw Error("Supplied int exceeds width: " + a + " vs " + e);
              let t = n.twosFromBigInt(o, a);
              l.push(n.bufferBEFromBigInt(t, a / 8));
            } else throw Error("Unsupported or invalid type: " + d);
          }
          return s.Buffer.concat(l);
        }
        t.exports = {
          rawEncode: function (e, t) {
            var n = [],
              i = [],
              a = 32 * e.length;
            for (var c in e) {
              var h = r(e[c]),
                d = l(h, t[c]);
              "string" === h || "bytes" === h || "dynamic" === o(h)
                ? (n.push(l("uint256", a)), i.push(d), (a += d.length))
                : n.push(d);
            }
            return s.Buffer.concat(n.concat(i));
          },
          solidityPack: h,
          soliditySHA3: function (e, t) {
            return n.keccak(h(e, t));
          },
        };
      }
    },
    581703: (e) => {
      var { m: t, e: n } = e;
      {
        var s = e.i(109562);
        let n = e.r(868477),
          r = e.r(986224),
          i = {
            type: "object",
            properties: {
              types: {
                type: "object",
                additionalProperties: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      name: { type: "string" },
                      type: { type: "string" },
                    },
                    required: ["name", "type"],
                  },
                },
              },
              primaryType: { type: "string" },
              domain: { type: "object" },
              message: { type: "object" },
            },
            required: ["types", "primaryType", "domain", "message"],
          },
          a = {
            encodeData(e, t, i) {
              let a =
                  !(arguments.length > 3) ||
                  void 0 === arguments[3] ||
                  arguments[3],
                o = ["bytes32"],
                c = [this.hashType(e, i)];
              if (a) {
                let l = (e, t, o) => {
                  if (void 0 !== i[t])
                    return [
                      "bytes32",
                      null == o
                        ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                        : n.keccak(this.encodeData(t, o, i, a)),
                    ];
                  if (void 0 === o)
                    throw Error(
                      "missing value for field "
                        .concat(e, " of type ")
                        .concat(t)
                    );
                  if ("bytes" === t) return ["bytes32", n.keccak(o)];
                  if ("string" === t)
                    return (
                      "string" == typeof o && (o = s.Buffer.from(o, "utf8")),
                      ["bytes32", n.keccak(o)]
                    );
                  if (t.lastIndexOf("]") === t.length - 1) {
                    let s = t.slice(0, t.lastIndexOf("[")),
                      i = o.map((t) => l(e, s, t));
                    return [
                      "bytes32",
                      n.keccak(
                        r.rawEncode(
                          i.map((e) => {
                            let [t] = e;
                            return t;
                          }),
                          i.map((e) => {
                            let [, t] = e;
                            return t;
                          })
                        )
                      ),
                    ];
                  }
                  return [t, o];
                };
                for (let n of i[e]) {
                  let [e, s] = l(n.name, n.type, t[n.name]);
                  o.push(e), c.push(s);
                }
              } else
                for (let r of i[e]) {
                  let e = t[r.name];
                  if (void 0 !== e)
                    if ("bytes" === r.type)
                      o.push("bytes32"), (e = n.keccak(e)), c.push(e);
                    else if ("string" === r.type)
                      o.push("bytes32"),
                        "string" == typeof e && (e = s.Buffer.from(e, "utf8")),
                        (e = n.keccak(e)),
                        c.push(e);
                    else if (void 0 !== i[r.type])
                      o.push("bytes32"),
                        (e = n.keccak(this.encodeData(r.type, e, i, a))),
                        c.push(e);
                    else if (r.type.lastIndexOf("]") === r.type.length - 1)
                      throw Error(
                        "Arrays currently unimplemented in encodeData"
                      );
                    else o.push(r.type), c.push(e);
                }
              return r.rawEncode(o, c);
            },
            encodeType(e, t) {
              let n = "",
                s = this.findTypeDependencies(e, t).filter((t) => t !== e);
              for (let r of (s = [e].concat(s.sort()))) {
                if (!t[r]) throw Error("No type definition specified: " + r);
                n +=
                  r +
                  "(" +
                  t[r]
                    .map((e) => {
                      let { name: t, type: n } = e;
                      return n + " " + t;
                    })
                    .join(",") +
                  ")";
              }
              return n;
            },
            findTypeDependencies(e, t) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [];
              if (((e = e.match(/^\w*/)[0]), n.includes(e) || void 0 === t[e]))
                return n;
              for (let s of (n.push(e), t[e]))
                for (let e of this.findTypeDependencies(s.type, t, n))
                  n.includes(e) || n.push(e);
              return n;
            },
            hashStruct(e, t, s) {
              let r =
                !(arguments.length > 3) ||
                void 0 === arguments[3] ||
                arguments[3];
              return n.keccak(this.encodeData(e, t, s, r));
            },
            hashType(e, t) {
              return n.keccak(this.encodeType(e, t));
            },
            sanitizeData(e) {
              let t = {};
              for (let n in i.properties) e[n] && (t[n] = e[n]);
              return (
                t.types &&
                  (t.types = Object.assign({ EIP712Domain: [] }, t.types)),
                t
              );
            },
            hash(e) {
              let t =
                  !(arguments.length > 1) ||
                  void 0 === arguments[1] ||
                  arguments[1],
                r = this.sanitizeData(e),
                i = [s.Buffer.from("1901", "hex")];
              return (
                i.push(this.hashStruct("EIP712Domain", r.domain, r.types, t)),
                "EIP712Domain" !== r.primaryType &&
                  i.push(this.hashStruct(r.primaryType, r.message, r.types, t)),
                n.keccak(s.Buffer.concat(i))
              );
            },
          };
        t.exports = {
          TYPED_MESSAGE_SCHEMA: i,
          TypedDataUtils: a,
          hashForSignTypedDataLegacy: function (e) {
            return (function (e) {
              let t = Error("Expect argument to be non-empty array");
              if ("object" != typeof e || !e.length) throw t;
              let s = e.map(function (e) {
                  return "bytes" === e.type ? n.toBuffer(e.value) : e.value;
                }),
                i = e.map(function (e) {
                  return e.type;
                }),
                a = e.map(function (e) {
                  if (!e.name) throw t;
                  return e.type + " " + e.name;
                });
              return r.soliditySHA3(
                ["bytes32", "bytes32"],
                [
                  r.soliditySHA3(Array(e.length).fill("string"), a),
                  r.soliditySHA3(i, s),
                ]
              );
            })(e.data);
          },
          hashForSignTypedData_v3: function (e) {
            return a.hash(e.data, !1);
          },
          hashForSignTypedData_v4: function (e) {
            return a.hash(e.data);
          },
        };
      }
    },
    95932: (e) => {
      "use strict";
      var { m: t, e: n } = e,
        s = Object.prototype.hasOwnProperty,
        r = "~";
      function i() {}
      function a(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function o(e, t, n, s, i) {
        if ("function" != typeof n)
          throw TypeError("The listener must be a function");
        var o = new a(n, s || e, i),
          c = r ? r + t : t;
        return (
          e._events[c]
            ? e._events[c].fn
              ? (e._events[c] = [e._events[c], o])
              : e._events[c].push(o)
            : ((e._events[c] = o), e._eventsCount++),
          e
        );
      }
      function c(e, t) {
        0 == --e._eventsCount ? (e._events = new i()) : delete e._events[t];
      }
      function l() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1)),
        (l.prototype.eventNames = function () {
          var e,
            t,
            n = [];
          if (0 === this._eventsCount) return n;
          for (t in (e = this._events))
            s.call(e, t) && n.push(r ? t.slice(1) : t);
          return Object.getOwnPropertySymbols
            ? n.concat(Object.getOwnPropertySymbols(e))
            : n;
        }),
        (l.prototype.listeners = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var s = 0, i = n.length, a = Array(i); s < i; s++)
            a[s] = n[s].fn;
          return a;
        }),
        (l.prototype.listenerCount = function (e) {
          var t = r ? r + e : e,
            n = this._events[t];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (l.prototype.emit = function (e, t, n, s, i, a) {
          var o = r ? r + e : e;
          if (!this._events[o]) return !1;
          var c,
            l,
            h = this._events[o],
            d = arguments.length;
          if (h.fn) {
            switch ((h.once && this.removeListener(e, h.fn, void 0, !0), d)) {
              case 1:
                return h.fn.call(h.context), !0;
              case 2:
                return h.fn.call(h.context, t), !0;
              case 3:
                return h.fn.call(h.context, t, n), !0;
              case 4:
                return h.fn.call(h.context, t, n, s), !0;
              case 5:
                return h.fn.call(h.context, t, n, s, i), !0;
              case 6:
                return h.fn.call(h.context, t, n, s, i, a), !0;
            }
            for (l = 1, c = Array(d - 1); l < d; l++) c[l - 1] = arguments[l];
            h.fn.apply(h.context, c);
          } else {
            var u,
              p = h.length;
            for (l = 0; l < p; l++)
              switch (
                (h[l].once && this.removeListener(e, h[l].fn, void 0, !0), d)
              ) {
                case 1:
                  h[l].fn.call(h[l].context);
                  break;
                case 2:
                  h[l].fn.call(h[l].context, t);
                  break;
                case 3:
                  h[l].fn.call(h[l].context, t, n);
                  break;
                case 4:
                  h[l].fn.call(h[l].context, t, n, s);
                  break;
                default:
                  if (!c)
                    for (u = 1, c = Array(d - 1); u < d; u++)
                      c[u - 1] = arguments[u];
                  h[l].fn.apply(h[l].context, c);
              }
          }
          return !0;
        }),
        (l.prototype.on = function (e, t, n) {
          return o(this, e, t, n, !1);
        }),
        (l.prototype.once = function (e, t, n) {
          return o(this, e, t, n, !0);
        }),
        (l.prototype.removeListener = function (e, t, n, s) {
          var i = r ? r + e : e;
          if (!this._events[i]) return this;
          if (!t) return c(this, i), this;
          var a = this._events[i];
          if (a.fn)
            a.fn !== t ||
              (s && !a.once) ||
              (n && a.context !== n) ||
              c(this, i);
          else {
            for (var o = 0, l = [], h = a.length; o < h; o++)
              (a[o].fn !== t ||
                (s && !a[o].once) ||
                (n && a[o].context !== n)) &&
                l.push(a[o]);
            l.length
              ? (this._events[i] = 1 === l.length ? l[0] : l)
              : c(this, i);
          }
          return this;
        }),
        (l.prototype.removeAllListeners = function (e) {
          var t;
          return (
            e
              ? ((t = r ? r + e : e), this._events[t] && c(this, t))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (l.prototype.off = l.prototype.removeListener),
        (l.prototype.addListener = l.prototype.on),
        (l.prefixed = r),
        (l.EventEmitter = l),
        (t.exports = l);
    },
    58210: (e) => {
      "use strict";
      e.s(
        {
          CoinbaseWalletSDK: () => tj,
          createCoinbaseWalletSDK: () => tW,
          default: () => tO,
        },
        58210
      ),
        e.s({ default: () => tO }, 205596);
      class t {
        storeObject(e, t) {
          this.setItem(e, JSON.stringify(t));
        }
        loadObject(e) {
          let t = this.getItem(e);
          return t ? JSON.parse(t) : void 0;
        }
        setItem(e, t) {
          localStorage.setItem(this.scopedKey(e), t);
        }
        getItem(e) {
          return localStorage.getItem(this.scopedKey(e));
        }
        removeItem(e) {
          localStorage.removeItem(this.scopedKey(e));
        }
        clear() {
          let e = this.scopedKey(""),
            t = [];
          for (let n = 0; n < localStorage.length; n++) {
            let s = localStorage.key(n);
            "string" == typeof s && s.startsWith(e) && t.push(s);
          }
          t.forEach((e) => localStorage.removeItem(e));
        }
        scopedKey(e) {
          return "-"
            .concat(this.scope)
            .concat(this.module ? ":".concat(this.module) : "", ":")
            .concat(e);
        }
        static clearAll() {
          new t("CBWSDK").clear(), new t("walletlink").clear();
        }
        constructor(e, t) {
          (this.scope = e), (this.module = t);
        }
      }
      var n = e.i(109562);
      let s = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
            unsupportedChain: 4902,
          },
        },
        r = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
          4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
        },
        i = "Unspecified error message.";
      function a(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
        if (e && Number.isInteger(e)) {
          var n;
          let t = e.toString();
          if (c(r, t)) return r[t].message;
          if ((n = e) >= -32099 && n <= -32e3)
            return "Unspecified server error.";
        }
        return t;
      }
      function o(e) {
        return e && "object" == typeof e && !Array.isArray(e)
          ? Object.assign({}, e)
          : e;
      }
      function c(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      function l(e, t) {
        return (
          "object" == typeof e &&
          null !== e &&
          t in e &&
          "string" == typeof e[t]
        );
      }
      let h = {
        rpc: {
          parse: (e) => d(s.rpc.parse, e),
          invalidRequest: (e) => d(s.rpc.invalidRequest, e),
          invalidParams: (e) => d(s.rpc.invalidParams, e),
          methodNotFound: (e) => d(s.rpc.methodNotFound, e),
          internal: (e) => d(s.rpc.internal, e),
          server: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            let { code: t } = e;
            if (!Number.isInteger(t) || t > -32005 || t < -32099)
              throw Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return d(t, e);
          },
          invalidInput: (e) => d(s.rpc.invalidInput, e),
          resourceNotFound: (e) => d(s.rpc.resourceNotFound, e),
          resourceUnavailable: (e) => d(s.rpc.resourceUnavailable, e),
          transactionRejected: (e) => d(s.rpc.transactionRejected, e),
          methodNotSupported: (e) => d(s.rpc.methodNotSupported, e),
          limitExceeded: (e) => d(s.rpc.limitExceeded, e),
        },
        provider: {
          userRejectedRequest: (e) => u(s.provider.userRejectedRequest, e),
          unauthorized: (e) => u(s.provider.unauthorized, e),
          unsupportedMethod: (e) => u(s.provider.unsupportedMethod, e),
          disconnected: (e) => u(s.provider.disconnected, e),
          chainDisconnected: (e) => u(s.provider.chainDisconnected, e),
          unsupportedChain: (e) => u(s.provider.unsupportedChain, e),
          custom: (e) => {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            let { code: t, message: n, data: s } = e;
            if (!n || "string" != typeof n)
              throw Error('"message" must be a nonempty string');
            return new m(t, n, s);
          },
        },
      };
      function d(e, t) {
        let [n, s] = p(t);
        return new f(e, n || a(e), s);
      }
      function u(e, t) {
        let [n, s] = p(t);
        return new m(e, n || a(e), s);
      }
      function p(e) {
        if (e) {
          if ("string" == typeof e) return [e];
          else if ("object" == typeof e && !Array.isArray(e)) {
            let { message: t, data: n } = e;
            if (t && "string" != typeof t)
              throw Error("Must specify string message.");
            return [t || void 0, n];
          }
        }
        return [];
      }
      class f extends Error {
        constructor(e, t, n) {
          if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
          if (!t || "string" != typeof t)
            throw Error('"message" must be a nonempty string.');
          super(t), (this.code = e), void 0 !== n && (this.data = n);
        }
      }
      class m extends f {
        constructor(e, t, n) {
          if (
            !(function (e) {
              return Number.isInteger(e) && e >= 1e3 && e <= 4999;
            })(e)
          )
            throw Error(
              '"code" must be an integer such that: 1000 <= code <= 4999'
            );
          super(e, t, n);
        }
      }
      function g(e) {
        return Math.floor(e);
      }
      let _ = /^[0-9]*$/,
        y = /^[a-f0-9]*$/;
      function b(e) {
        return w(crypto.getRandomValues(new Uint8Array(e)));
      }
      function w(e) {
        return [...e].map((e) => e.toString(16).padStart(2, "0")).join("");
      }
      function v(e) {
        return new Uint8Array(
          e.match(/.{1,2}/g).map((e) => Number.parseInt(e, 16))
        );
      }
      function k(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = e.toString("hex");
        return t ? "0x".concat(n) : n;
      }
      function C(e) {
        return k(D(e), !0);
      }
      function E(e) {
        return e.toString(10);
      }
      function I(e) {
        return "0x".concat(BigInt(e).toString(16));
      }
      function x(e) {
        return e.startsWith("0x") || e.startsWith("0X");
      }
      function S(e) {
        return x(e) ? e.slice(2) : e;
      }
      function M(e) {
        return x(e) ? "0x".concat(e.slice(2)) : "0x".concat(e);
      }
      function A(e) {
        if ("string" != typeof e) return !1;
        let t = S(e).toLowerCase();
        return y.test(t);
      }
      function L(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if ("string" == typeof e) {
              let n = S(e).toLowerCase();
              if (y.test(n)) return t ? "0x".concat(n) : n;
            }
            throw h.rpc.invalidParams(
              '"'.concat(String(e), '" is not a hexadecimal string')
            );
          })(e, !1);
        return n.length % 2 == 1 && (n = "0".concat(n)), t ? "0x".concat(n) : n;
      }
      function P(e) {
        if ("string" == typeof e) {
          let t = S(e).toLowerCase();
          if (A(t) && 40 === t.length) return M(t);
        }
        throw h.rpc.invalidParams(
          "Invalid Ethereum address: ".concat(String(e))
        );
      }
      function D(e) {
        if (n.Buffer.isBuffer(e)) return e;
        if ("string" == typeof e) {
          if (A(e)) {
            let t = L(e, !1);
            return n.Buffer.from(t, "hex");
          }
          return n.Buffer.from(e, "utf8");
        }
        throw h.rpc.invalidParams("Not binary data: ".concat(String(e)));
      }
      function N(e) {
        if ("number" == typeof e && Number.isInteger(e)) return g(e);
        if ("string" == typeof e) {
          if (_.test(e)) return g(Number(e));
          if (A(e)) return g(Number(BigInt(L(e, !0))));
        }
        throw h.rpc.invalidParams("Not an integer: ".concat(String(e)));
      }
      function R(e) {
        if (
          null !== e &&
          ("bigint" == typeof e ||
            (function (e) {
              if (null == e || "function" != typeof e.constructor) return !1;
              let { constructor: t } = e;
              return (
                "function" == typeof t.config && "number" == typeof t.EUCLID
              );
            })(e))
        )
          return BigInt(e.toString(10));
        if ("number" == typeof e) return BigInt(N(e));
        if ("string" == typeof e) {
          if (_.test(e)) return BigInt(e);
          if (A(e)) return BigInt(L(e, !0));
        }
        throw h.rpc.invalidParams("Not an integer: ".concat(String(e)));
      }
      async function T() {
        return crypto.subtle.generateKey(
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          ["deriveKey"]
        );
      }
      async function j(e, t) {
        return crypto.subtle.deriveKey(
          { name: "ECDH", public: t },
          e,
          { name: "AES-GCM", length: 256 },
          !1,
          ["encrypt", "decrypt"]
        );
      }
      async function O(e, t) {
        let n = crypto.getRandomValues(new Uint8Array(12)),
          s = await crypto.subtle.encrypt(
            { name: "AES-GCM", iv: n },
            e,
            new TextEncoder().encode(t)
          );
        return { iv: n, cipherText: s };
      }
      async function U(e, t) {
        let { iv: n, cipherText: s } = t,
          r = await crypto.subtle.decrypt({ name: "AES-GCM", iv: n }, e, s);
        return new TextDecoder().decode(r);
      }
      function W(e) {
        switch (e) {
          case "public":
            return "spki";
          case "private":
            return "pkcs8";
        }
      }
      async function q(e, t) {
        let n = W(e);
        return w(new Uint8Array(await crypto.subtle.exportKey(n, t)));
      }
      async function H(e, t) {
        let n = W(e),
          s = v(t).buffer;
        return await crypto.subtle.importKey(
          n,
          new Uint8Array(s),
          { name: "ECDH", namedCurve: "P-256" },
          !0,
          "private" === e ? ["deriveKey"] : []
        );
      }
      async function B(e, t) {
        return O(
          t,
          JSON.stringify(e, (e, t) =>
            t instanceof Error
              ? Object.assign(
                  Object.assign({}, t.code ? { code: t.code } : {}),
                  { message: t.message }
                )
              : t
          )
        );
      }
      async function V(e, t) {
        return JSON.parse(await U(t, e));
      }
      let Z = { storageKey: "ownPrivateKey", keyType: "private" },
        z = { storageKey: "ownPublicKey", keyType: "public" },
        K = { storageKey: "peerPublicKey", keyType: "public" };
      class F {
        async getOwnPublicKey() {
          return await this.loadKeysIfNeeded(), this.ownPublicKey;
        }
        async getSharedSecret() {
          return await this.loadKeysIfNeeded(), this.sharedSecret;
        }
        async setPeerPublicKey(e) {
          (this.sharedSecret = null),
            (this.peerPublicKey = e),
            await this.storeKey(K, e),
            await this.loadKeysIfNeeded();
        }
        async clear() {
          (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null),
            this.storage.removeItem(z.storageKey),
            this.storage.removeItem(Z.storageKey),
            this.storage.removeItem(K.storageKey);
        }
        async generateKeyPair() {
          let e = await T();
          (this.ownPrivateKey = e.privateKey),
            (this.ownPublicKey = e.publicKey),
            await this.storeKey(Z, e.privateKey),
            await this.storeKey(z, e.publicKey);
        }
        async loadKeysIfNeeded() {
          null === this.ownPrivateKey &&
            (this.ownPrivateKey = await this.loadKey(Z)),
            null === this.ownPublicKey &&
              (this.ownPublicKey = await this.loadKey(z)),
            (null === this.ownPrivateKey || null === this.ownPublicKey) &&
              (await this.generateKeyPair()),
            null === this.peerPublicKey &&
              (this.peerPublicKey = await this.loadKey(K)),
            null === this.sharedSecret &&
              null !== this.ownPrivateKey &&
              null !== this.peerPublicKey &&
              (this.sharedSecret = await j(
                this.ownPrivateKey,
                this.peerPublicKey
              ));
        }
        async loadKey(e) {
          let t = this.storage.getItem(e.storageKey);
          return t ? H(e.keyType, t) : null;
        }
        async storeKey(e, t) {
          let n = await q(e.keyType, t);
          this.storage.setItem(e.storageKey, n);
        }
        constructor() {
          (this.storage = new t("CBWSDK", "SCWKeyManager")),
            (this.ownPrivateKey = null),
            (this.ownPublicKey = null),
            (this.peerPublicKey = null),
            (this.sharedSecret = null);
        }
      }
      let G = "4.3.0",
        J = "@coinbase/wallet-sdk";
      async function Y(e, t) {
        let n = Object.assign(Object.assign({}, e), {
            jsonrpc: "2.0",
            id: crypto.randomUUID(),
          }),
          s = await window.fetch(t, {
            method: "POST",
            body: JSON.stringify(n),
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "X-Cbw-Sdk-Version": G,
              "X-Cbw-Sdk-Platform": J,
            },
          }),
          { result: r, error: i } = await s.json();
        if (i) throw i;
        return r;
      }
      function Q(e) {
        var t, n;
        let { metadata: s, preference: r } = e,
          { appName: i, appLogoUrl: a, appChainIds: o } = s;
        if ("smartWalletOnly" !== r.options) {
          let e = globalThis.coinbaseWalletExtension;
          if (e) return null == (t = e.setAppInfo) || t.call(e, i, a, o, r), e;
        }
        let c = (function () {
          var e, t;
          try {
            let n = globalThis;
            return null != (e = n.ethereum)
              ? e
              : null == (t = n.top)
              ? void 0
              : t.ethereum;
          } catch (e) {
            return;
          }
        })();
        if (null == c ? void 0 : c.isCoinbaseBrowser)
          return null == (n = c.setAppInfo) || n.call(c, i, a, o, r), c;
      }
      let X = "accounts",
        $ = "activeChain",
        ee = "availableChains",
        et = "walletCapabilities";
      class en {
        async handshake(e) {
          var t, n, s, r;
          await (null == (n = (t = this.communicator).waitForPopupLoaded)
            ? void 0
            : n.call(t));
          let i = await this.createRequestMessage({
              handshake: {
                method: e.method,
                params: Object.assign(
                  {},
                  this.metadata,
                  null != (s = e.params) ? s : {}
                ),
              },
            }),
            a = await this.communicator.postRequestAndWaitForResponse(i);
          if ("failure" in a.content) throw a.content.failure;
          let o = await H("public", a.sender);
          await this.keyManager.setPeerPublicKey(o);
          let c = (await this.decryptResponseMessage(a)).result;
          if ("error" in c) throw c.error;
          if ("eth_requestAccounts" === e.method) {
            let e = c.value;
            (this.accounts = e),
              this.storage.storeObject(X, e),
              null == (r = this.callback) || r.call(this, "accountsChanged", e);
          }
        }
        async request(e) {
          var t;
          if (0 === this.accounts.length)
            if ("wallet_sendCalls" === e.method)
              return this.sendRequestToPopup(e);
            else throw h.provider.unauthorized();
          switch (e.method) {
            case "eth_requestAccounts":
              return (
                null == (t = this.callback) ||
                  t.call(this, "connect", { chainId: I(this.chain.id) }),
                this.accounts
              );
            case "eth_accounts":
              return this.accounts;
            case "eth_coinbase":
              return this.accounts[0];
            case "net_version":
              return this.chain.id;
            case "eth_chainId":
              return I(this.chain.id);
            case "wallet_getCapabilities":
              return this.storage.loadObject(et);
            case "wallet_switchEthereumChain":
              return this.handleSwitchChainRequest(e);
            case "eth_ecRecover":
            case "personal_sign":
            case "wallet_sign":
            case "personal_ecRecover":
            case "eth_signTransaction":
            case "eth_sendTransaction":
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
            case "wallet_addEthereumChain":
            case "wallet_watchAsset":
            case "wallet_sendCalls":
            case "wallet_showCallsStatus":
            case "wallet_grantPermissions":
              return this.sendRequestToPopup(e);
            default:
              if (!this.chain.rpcUrl)
                throw h.rpc.internal("No RPC URL set for chain");
              return Y(e, this.chain.rpcUrl);
          }
        }
        async sendRequestToPopup(e) {
          var t, n;
          await (null == (n = (t = this.communicator).waitForPopupLoaded)
            ? void 0
            : n.call(t));
          let s = await this.sendEncryptedRequest(e),
            r = (await this.decryptResponseMessage(s)).result;
          if ("error" in r) throw r.error;
          return r.value;
        }
        async cleanup() {
          var e, t;
          this.storage.clear(),
            await this.keyManager.clear(),
            (this.accounts = []),
            (this.chain = {
              id:
                null !=
                (t = null == (e = this.metadata.appChainIds) ? void 0 : e[0])
                  ? t
                  : 1,
            });
        }
        async handleSwitchChainRequest(e) {
          var t;
          let n = e.params;
          if (!n || !(null == (t = n[0]) ? void 0 : t.chainId))
            throw h.rpc.invalidParams();
          let s = N(n[0].chainId);
          if (this.updateChain(s)) return null;
          let r = await this.sendRequestToPopup(e);
          return null === r && this.updateChain(s), r;
        }
        async sendEncryptedRequest(e) {
          let t = await this.keyManager.getSharedSecret();
          if (!t)
            throw h.provider.unauthorized(
              "No valid session found, try requestAccounts before other methods"
            );
          let n = await B({ action: e, chainId: this.chain.id }, t),
            s = await this.createRequestMessage({ encrypted: n });
          return this.communicator.postRequestAndWaitForResponse(s);
        }
        async createRequestMessage(e) {
          let t = await q("public", await this.keyManager.getOwnPublicKey());
          return {
            id: crypto.randomUUID(),
            sender: t,
            content: e,
            timestamp: new Date(),
          };
        }
        async decryptResponseMessage(e) {
          var t, n;
          let s = e.content;
          if ("failure" in s) throw s.failure;
          let r = await this.keyManager.getSharedSecret();
          if (!r) throw h.provider.unauthorized("Invalid session");
          let i = await V(s.encrypted, r),
            a = null == (t = i.data) ? void 0 : t.chains;
          if (a) {
            let e = Object.entries(a).map((e) => {
              let [t, n] = e;
              return { id: Number(t), rpcUrl: n };
            });
            this.storage.storeObject(ee, e), this.updateChain(this.chain.id, e);
          }
          let o = null == (n = i.data) ? void 0 : n.capabilities;
          return o && this.storage.storeObject(et, o), i;
        }
        updateChain(e, t) {
          var n;
          let s = null != t ? t : this.storage.loadObject(ee),
            r = null == s ? void 0 : s.find((t) => t.id === e);
          return (
            !!r &&
            (r !== this.chain &&
              ((this.chain = r),
              this.storage.storeObject($, r),
              null == (n = this.callback) ||
                n.call(this, "chainChanged", I(r.id))),
            !0)
          );
        }
        constructor(e) {
          var n, s, r;
          (this.metadata = e.metadata),
            (this.communicator = e.communicator),
            (this.callback = e.callback),
            (this.keyManager = new F()),
            (this.storage = new t("CBWSDK", "SCWStateManager")),
            (this.accounts = null != (n = this.storage.loadObject(X)) ? n : []),
            (this.chain = this.storage.loadObject($) || {
              id:
                null !=
                (r = null == (s = e.metadata.appChainIds) ? void 0 : s[0])
                  ? r
                  : 1,
            }),
            (this.handshake = this.handshake.bind(this)),
            (this.request = this.request.bind(this)),
            (this.createRequestMessage = this.createRequestMessage.bind(this)),
            (this.decryptResponseMessage =
              this.decryptResponseMessage.bind(this));
        }
      }
      var es = e.i(581703);
      let er = "Addresses";
      function ei(e) {
        return void 0 !== e.errorMessage;
      }
      class ea {
        async encrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          let n = crypto.getRandomValues(new Uint8Array(12)),
            s = await crypto.subtle.importKey(
              "raw",
              v(t),
              { name: "aes-gcm" },
              !1,
              ["encrypt", "decrypt"]
            ),
            r = new TextEncoder(),
            i = await window.crypto.subtle.encrypt(
              { name: "AES-GCM", iv: n },
              s,
              r.encode(e)
            ),
            a = i.slice(i.byteLength - 16),
            o = i.slice(0, i.byteLength - 16),
            c = new Uint8Array(a),
            l = new Uint8Array(o);
          return w(new Uint8Array([...n, ...c, ...l]));
        }
        async decrypt(e) {
          let t = this.secret;
          if (64 !== t.length) throw Error("secret must be 256 bits");
          return new Promise((n, s) => {
            !(async function () {
              let r = await crypto.subtle.importKey(
                  "raw",
                  v(t),
                  { name: "aes-gcm" },
                  !1,
                  ["encrypt", "decrypt"]
                ),
                i = v(e),
                a = i.slice(0, 12),
                o = i.slice(12, 28),
                c = new Uint8Array([...i.slice(28), ...o]),
                l = { name: "AES-GCM", iv: new Uint8Array(a) };
              try {
                let e = await window.crypto.subtle.decrypt(l, r, c),
                  t = new TextDecoder();
                n(t.decode(e));
              } catch (e) {
                s(e);
              }
            })();
          });
        }
        constructor(e) {
          this.secret = e;
        }
      }
      class eo {
        async markUnseenEventsAsSeen(e) {
          return Promise.all(
            e.map((e) =>
              fetch(
                ""
                  .concat(this.linkAPIUrl, "/events/")
                  .concat(e.eventId, "/seen"),
                { method: "POST", headers: { Authorization: this.auth } }
              )
            )
          ).catch((e) => console.error("Unabled to mark event as failed:", e));
        }
        async fetchUnseenEvents() {
          var e;
          let t = await fetch(
            "".concat(this.linkAPIUrl, "/events?unseen=true"),
            { headers: { Authorization: this.auth } }
          );
          if (t.ok) {
            let { events: n, error: s } = await t.json();
            if (s) throw Error("Check unseen events failed: ".concat(s));
            let r =
              null !=
              (e =
                null == n
                  ? void 0
                  : n
                      .filter((e) => "Web3Response" === e.event)
                      .map((e) => ({
                        type: "Event",
                        sessionId: this.sessionId,
                        eventId: e.id,
                        event: e.event,
                        data: e.data,
                      })))
                ? e
                : [];
            return this.markUnseenEventsAsSeen(r), r;
          }
          throw Error("Check unseen events failed: ".concat(t.status));
        }
        constructor(e, t, n) {
          (this.linkAPIUrl = e), (this.sessionId = t);
          let s = "".concat(t, ":").concat(n);
          this.auth = "Basic ".concat(btoa(s));
        }
      }
      !(function (e) {
        (e[(e.DISCONNECTED = 0)] = "DISCONNECTED"),
          (e[(e.CONNECTING = 1)] = "CONNECTING"),
          (e[(e.CONNECTED = 2)] = "CONNECTED");
      })(ev || (ev = {}));
      class ec {
        setConnectionStateListener(e) {
          this.connectionStateListener = e;
        }
        setIncomingDataListener(e) {
          this.incomingDataListener = e;
        }
        async connect() {
          if (this.webSocket) throw Error("webSocket object is not null");
          return new Promise((e, t) => {
            var n;
            let s;
            try {
              this.webSocket = s = new this.WebSocketClass(this.url);
            } catch (e) {
              t(e);
              return;
            }
            null == (n = this.connectionStateListener) ||
              n.call(this, ev.CONNECTING),
              (s.onclose = (e) => {
                var n;
                this.clearWebSocket(),
                  t(
                    Error(
                      "websocket error ".concat(e.code, ": ").concat(e.reason)
                    )
                  ),
                  null == (n = this.connectionStateListener) ||
                    n.call(this, ev.DISCONNECTED);
              }),
              (s.onopen = (t) => {
                var n;
                e(),
                  null == (n = this.connectionStateListener) ||
                    n.call(this, ev.CONNECTED),
                  this.pendingData.length > 0 &&
                    ([...this.pendingData].forEach((e) => this.sendData(e)),
                    (this.pendingData = []));
              }),
              (s.onmessage = (e) => {
                var t, n;
                if ("h" === e.data)
                  null == (t = this.incomingDataListener) ||
                    t.call(this, { type: "Heartbeat" });
                else
                  try {
                    let t = JSON.parse(e.data);
                    null == (n = this.incomingDataListener) || n.call(this, t);
                  } catch (e) {}
              });
          });
        }
        disconnect() {
          var e;
          let { webSocket: t } = this;
          if (t) {
            this.clearWebSocket(),
              null == (e = this.connectionStateListener) ||
                e.call(this, ev.DISCONNECTED),
              (this.connectionStateListener = void 0),
              (this.incomingDataListener = void 0);
            try {
              t.close();
            } catch (e) {}
          }
        }
        sendData(e) {
          let { webSocket: t } = this;
          if (!t) {
            this.pendingData.push(e), this.connect();
            return;
          }
          t.send(e);
        }
        clearWebSocket() {
          let { webSocket: e } = this;
          e &&
            ((this.webSocket = null),
            (e.onclose = null),
            (e.onerror = null),
            (e.onmessage = null),
            (e.onopen = null));
        }
        constructor(e, t = WebSocket) {
          (this.WebSocketClass = t),
            (this.webSocket = null),
            (this.pendingData = []),
            (this.url = e.replace(/^http/, "ws"));
        }
      }
      class el {
        connect() {
          if (this.destroyed) throw Error("instance is destroyed");
          this.ws.connect();
        }
        async destroy() {
          this.destroyed ||
            (await this.makeRequest(
              {
                type: "SetSessionConfig",
                id: g(this.nextReqId++),
                sessionId: this.session.id,
                metadata: { __destroyed: "1" },
              },
              { timeout: 1e3 }
            ),
            (this.destroyed = !0),
            this.ws.disconnect(),
            (this.listener = void 0));
        }
        get connected() {
          return this._connected;
        }
        set connected(e) {
          this._connected = e;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          var t, n;
          (this._linked = e),
            e && (null == (t = this.onceLinked) || t.call(this)),
            null == (n = this.listener) || n.linkedUpdated(e);
        }
        setOnceLinked(e) {
          return new Promise((t) => {
            this.linked
              ? e().then(t)
              : (this.onceLinked = () => {
                  e().then(t), (this.onceLinked = void 0);
                });
          });
        }
        async handleIncomingEvent(e) {
          var t;
          if ("Event" !== e.type || "Web3Response" !== e.event) return;
          let n = JSON.parse(await this.cipher.decrypt(e.data));
          if ("WEB3_RESPONSE" !== n.type) return;
          let { id: s, response: r } = n;
          null == (t = this.listener) || t.handleWeb3ResponseMessage(s, r);
        }
        async checkUnseenEvents() {
          if (!this.connected) {
            this.shouldFetchUnseenEventsOnConnect = !0;
            return;
          }
          await new Promise((e) => setTimeout(e, 250));
          try {
            await this.fetchUnseenEventsAPI();
          } catch (e) {
            console.error("Unable to check for unseen events", e);
          }
        }
        async fetchUnseenEventsAPI() {
          (this.shouldFetchUnseenEventsOnConnect = !1),
            (await this.http.fetchUnseenEvents()).forEach((e) =>
              this.handleIncomingEvent(e)
            );
        }
        async publishEvent(e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = await this.cipher.encrypt(
              JSON.stringify(
                Object.assign(Object.assign({}, t), {
                  origin: location.origin,
                  location: location.href,
                  relaySource:
                    "coinbaseWalletExtension" in window &&
                    window.coinbaseWalletExtension
                      ? "injected_sdk"
                      : "sdk",
                })
              )
            ),
            r = {
              type: "PublishEvent",
              id: g(this.nextReqId++),
              sessionId: this.session.id,
              event: e,
              data: s,
              callWebhook: n,
            };
          return this.setOnceLinked(async () => {
            let e = await this.makeRequest(r);
            if ("Fail" === e.type)
              throw Error(e.error || "failed to publish event");
            return e.eventId;
          });
        }
        sendData(e) {
          this.ws.sendData(JSON.stringify(e));
        }
        updateLastHeartbeat() {
          this.lastHeartbeatResponse = Date.now();
        }
        heartbeat() {
          if (Date.now() - this.lastHeartbeatResponse > 2e4)
            return void this.ws.disconnect();
          try {
            this.ws.sendData("h");
          } catch (e) {}
        }
        async makeRequest(e) {
          let t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { timeout: 6e4 },
            s = e.id;
          return (
            this.sendData(e),
            Promise.race([
              new Promise((e, r) => {
                t = window.setTimeout(() => {
                  r(Error("request ".concat(s, " timed out")));
                }, n.timeout);
              }),
              new Promise((e) => {
                this.requestResolutions.set(s, (n) => {
                  clearTimeout(t), e(n), this.requestResolutions.delete(s);
                });
              }),
            ])
          );
        }
        async handleConnected() {
          return (
            "Fail" !==
              (
                await this.makeRequest({
                  type: "HostSession",
                  id: g(this.nextReqId++),
                  sessionId: this.session.id,
                  sessionKey: this.session.key,
                })
              ).type &&
            (this.sendData({
              type: "IsLinked",
              id: g(this.nextReqId++),
              sessionId: this.session.id,
            }),
            this.sendData({
              type: "GetSessionConfig",
              id: g(this.nextReqId++),
              sessionId: this.session.id,
            }),
            !0)
          );
        }
        constructor({ session: e, linkAPIUrl: t, listener: n }) {
          (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = g(1)),
            (this._connected = !1),
            (this._linked = !1),
            (this.shouldFetchUnseenEventsOnConnect = !1),
            (this.requestResolutions = new Map()),
            (this.handleSessionMetadataUpdated = (e) => {
              e &&
                new Map([
                  ["__destroyed", this.handleDestroyed],
                  ["EthereumAddress", this.handleAccountUpdated],
                  ["WalletUsername", this.handleWalletUsernameUpdated],
                  ["AppVersion", this.handleAppVersionUpdated],
                  [
                    "ChainId",
                    (t) =>
                      e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl),
                  ],
                ]).forEach((t, n) => {
                  let s = e[n];
                  void 0 !== s && t(s);
                });
            }),
            (this.handleDestroyed = (e) => {
              var t;
              "1" === e && (null == (t = this.listener) || t.resetAndReload());
            }),
            (this.handleAccountUpdated = async (e) => {
              var t;
              let n = await this.cipher.decrypt(e);
              null == (t = this.listener) || t.accountUpdated(n);
            }),
            (this.handleMetadataUpdated = async (e, t) => {
              var n;
              let s = await this.cipher.decrypt(t);
              null == (n = this.listener) || n.metadataUpdated(e, s);
            }),
            (this.handleWalletUsernameUpdated = async (e) => {
              this.handleMetadataUpdated("walletUsername", e);
            }),
            (this.handleAppVersionUpdated = async (e) => {
              this.handleMetadataUpdated("AppVersion", e);
            }),
            (this.handleChainUpdated = async (e, t) => {
              var n;
              let s = await this.cipher.decrypt(e),
                r = await this.cipher.decrypt(t);
              null == (n = this.listener) || n.chainUpdated(s, r);
            }),
            (this.session = e),
            (this.cipher = new ea(e.secret)),
            (this.listener = n);
          let s = new ec("".concat(t, "/rpc"), WebSocket);
          s.setConnectionStateListener(async (e) => {
            let t = !1;
            switch (e) {
              case ev.DISCONNECTED:
                if (!this.destroyed) {
                  let e = async () => {
                    await new Promise((e) => setTimeout(e, 5e3)),
                      this.destroyed ||
                        s.connect().catch(() => {
                          e();
                        });
                  };
                  e();
                }
                break;
              case ev.CONNECTED:
                (t = await this.handleConnected()),
                  this.updateLastHeartbeat(),
                  setInterval(() => {
                    this.heartbeat();
                  }, 1e4),
                  this.shouldFetchUnseenEventsOnConnect &&
                    this.fetchUnseenEventsAPI();
              case ev.CONNECTING:
            }
            this.connected !== t && (this.connected = t);
          }),
            s.setIncomingDataListener((e) => {
              var t;
              switch (e.type) {
                case "Heartbeat":
                  this.updateLastHeartbeat();
                  return;
                case "IsLinkedOK":
                case "Linked": {
                  let t = "IsLinkedOK" === e.type ? e.linked : void 0;
                  this.linked = t || e.onlineGuests > 0;
                  break;
                }
                case "GetSessionConfigOK":
                case "SessionConfigUpdated":
                  this.handleSessionMetadataUpdated(e.metadata);
                  break;
                case "Event":
                  this.handleIncomingEvent(e);
              }
              void 0 !== e.id &&
                (null == (t = this.requestResolutions.get(e.id)) || t(e));
            }),
            (this.ws = s),
            (this.http = new eo(t, e.id, e.key));
        }
      }
      class eh {
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 0x7fffffff;
          let e = this._nextRequestId,
            t = M(e.toString(16));
          return this.callbacks.get(t) && this.callbacks.delete(t), e;
        }
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
      }
      var ed = e.i(736506);
      ed.SHA256;
      let eu = ed.sha256;
      ed.SHA224, ed.sha224;
      var ep = e.i(90621);
      let ef = "session:id",
        em = "session:secret",
        eg = "session:linked";
      class e_ {
        static create(e) {
          return new e_(e, b(16), b(32)).save();
        }
        static load(e) {
          let t = e.getItem(ef),
            n = e.getItem(eg),
            s = e.getItem(em);
          return t && s ? new e_(e, t, s, "1" === n) : null;
        }
        get linked() {
          return this._linked;
        }
        set linked(e) {
          (this._linked = e), this.persistLinked();
        }
        save() {
          return (
            this.storage.setItem(ef, this.id),
            this.storage.setItem(em, this.secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this.storage.setItem(eg, this._linked ? "1" : "0");
        }
        constructor(e, t, n, s = !1) {
          (this.storage = e),
            (this.id = t),
            (this.secret = n),
            (this.key = (0, ep.bytesToHex)(
              eu("".concat(t, ", ").concat(n, " WalletLink"))
            )),
            (this._linked = !!s);
        }
      }
      function ey() {
        var e, t;
        return (
          null !=
            (t =
              null == (e = null == window ? void 0 : window.matchMedia)
                ? void 0
                : e.call(window, "(prefers-color-scheme: dark)").matches) && t
        );
      }
      function eb() {
        let e = document.createElement("style");
        (e.type = "text/css"),
          e.appendChild(
            document.createTextNode(
              '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
            )
          ),
          document.documentElement.appendChild(e);
      }
      function ew() {
        for (var e, t, n = 0, s = ""; n < arguments.length; )
          (e = arguments[n++]) &&
            (t = (function e(t) {
              var n,
                s,
                r = "";
              if ("string" == typeof t || "number" == typeof t) r += t;
              else if ("object" == typeof t)
                if (Array.isArray(t))
                  for (n = 0; n < t.length; n++)
                    t[n] && (s = e(t[n])) && (r && (r += " "), (r += s));
                else for (n in t) t[n] && (r && (r += " "), (r += n));
              return r;
            })(e)) &&
            (s && (s += " "), (s += t));
        return s;
      }
      var ev,
        ek,
        eC,
        eE,
        eI,
        ex,
        eS,
        eM,
        eA,
        eL,
        eP,
        eD,
        eN = {},
        eR = [],
        eT =
          /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        ej = Array.isArray;
      function eO(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      function eU(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      }
      function eW(e, t, n) {
        var s,
          r,
          i,
          a = {};
        for (i in t)
          "key" == i ? (s = t[i]) : "ref" == i ? (r = t[i]) : (a[i] = t[i]);
        if (
          (arguments.length > 2 &&
            (a.children = arguments.length > 3 ? ek.call(arguments, 2) : n),
          "function" == typeof e && null != e.defaultProps)
        )
          for (i in e.defaultProps)
            void 0 === a[i] && (a[i] = e.defaultProps[i]);
        return eq(e, a, s, r, null);
      }
      function eq(e, t, n, s, r) {
        var i = {
          type: e,
          props: t,
          key: n,
          ref: s,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __c: null,
          constructor: void 0,
          __v: null == r ? ++eE : r,
          __i: -1,
          __u: 0,
        };
        return null == r && null != eC.vnode && eC.vnode(i), i;
      }
      function eH(e) {
        return e.children;
      }
      function eB(e, t) {
        (this.props = e), (this.context = t);
      }
      function eV(e, t) {
        if (null == t) return e.__ ? eV(e.__, e.__i + 1) : null;
        for (var n; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? eV(e) : null;
      }
      function eZ(e) {
        ((!e.__d && (e.__d = !0) && eI.push(e) && !ez.__r++) ||
          ex != eC.debounceRendering) &&
          ((ex = eC.debounceRendering) || eS)(ez);
      }
      function ez() {
        for (var e, t, n, s, r, i, a = 1; eI.length; )
          eI.length > a && eI.sort(eM),
            (e = eI.shift()),
            (a = eI.length),
            e.__d &&
              ((t = void 0),
              (s = (n = e.__v).__e),
              (r = []),
              (i = []),
              e.__P &&
                (((t = eO({}, n)).__v = n.__v + 1),
                eC.vnode && eC.vnode(t),
                eY(
                  e.__P,
                  t,
                  n,
                  e.__n,
                  e.__P.namespaceURI,
                  32 & n.__u ? [s] : null,
                  r,
                  null == s ? eV(n) : s,
                  !!(32 & n.__u),
                  i
                ),
                (t.__v = n.__v),
                (t.__.__k[t.__i] = t),
                eQ(r, t, i),
                t.__e != s &&
                  (function e(t) {
                    var n, s;
                    if (null != (t = t.__) && null != t.__c) {
                      for (
                        t.__e = t.__c.base = null, n = 0;
                        n < t.__k.length;
                        n++
                      )
                        if (null != (s = t.__k[n]) && null != s.__e) {
                          t.__e = t.__c.base = s.__e;
                          break;
                        }
                      return e(t);
                    }
                  })(t)));
        ez.__r = 0;
      }
      function eK(e, t, n, s, r, i, a, o, c, l, h) {
        var d,
          u,
          p,
          f,
          m,
          g,
          _ = (s && s.__k) || eR,
          y = t.length;
        for (
          c = (function (e, t, n, s, r) {
            var i,
              a,
              o,
              c,
              l,
              h = n.length,
              d = h,
              u = 0;
            for (e.__k = Array(r), i = 0; i < r; i++)
              null != (a = t[i]) &&
              "boolean" != typeof a &&
              "function" != typeof a
                ? ((c = i + u),
                  ((a = e.__k[i] =
                    "string" == typeof a ||
                    "number" == typeof a ||
                    "bigint" == typeof a ||
                    a.constructor == String
                      ? eq(null, a, null, null, null)
                      : ej(a)
                      ? eq(eH, { children: a }, null, null, null)
                      : null == a.constructor && a.__b > 0
                      ? eq(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v)
                      : a).__ = e),
                  (a.__b = e.__b + 1),
                  (o = null),
                  -1 !=
                    (l = a.__i =
                      (function (e, t, n, s) {
                        var r,
                          i,
                          a = e.key,
                          o = e.type,
                          c = t[n];
                        if (
                          (null === c && null == e.key) ||
                          (c && a == c.key && o == c.type && 0 == (2 & c.__u))
                        )
                          return n;
                        if (s > +(null != c && 0 == (2 & c.__u)))
                          for (r = n - 1, i = n + 1; r >= 0 || i < t.length; ) {
                            if (r >= 0) {
                              if (
                                (c = t[r]) &&
                                0 == (2 & c.__u) &&
                                a == c.key &&
                                o == c.type
                              )
                                return r;
                              r--;
                            }
                            if (i < t.length) {
                              if (
                                (c = t[i]) &&
                                0 == (2 & c.__u) &&
                                a == c.key &&
                                o == c.type
                              )
                                return i;
                              i++;
                            }
                          }
                        return -1;
                      })(a, n, c, d)) && (d--, (o = n[l]) && (o.__u |= 2)),
                  null == o || null == o.__v
                    ? (-1 == l && (r > h ? u-- : r < h && u++),
                      "function" != typeof a.type && (a.__u |= 4))
                    : l != c &&
                      (l == c - 1
                        ? u--
                        : l == c + 1
                        ? u++
                        : (l > c ? u-- : u++, (a.__u |= 4))))
                : (e.__k[i] = null);
            if (d)
              for (i = 0; i < h; i++)
                null != (o = n[i]) &&
                  0 == (2 & o.__u) &&
                  (o.__e == s && (s = eV(o)),
                  (function e(t, n, s) {
                    var r, i;
                    if (
                      (eC.unmount && eC.unmount(t),
                      (r = t.ref) &&
                        ((r.current && r.current != t.__e) || eX(r, null, n)),
                      null != (r = t.__c))
                    ) {
                      if (r.componentWillUnmount)
                        try {
                          r.componentWillUnmount();
                        } catch (e) {
                          eC.__e(e, n);
                        }
                      r.base = r.__P = null;
                    }
                    if ((r = t.__k))
                      for (i = 0; i < r.length; i++)
                        r[i] && e(r[i], n, s || "function" != typeof t.type);
                    s || eU(t.__e), (t.__c = t.__ = t.__e = void 0);
                  })(o, o));
            return s;
          })(n, t, _, c, y),
            d = 0;
          d < y;
          d++
        )
          null != (p = n.__k[d]) &&
            ((u = -1 == p.__i ? eN : _[p.__i] || eN),
            (p.__i = d),
            (g = eY(e, p, u, r, i, a, o, c, l, h)),
            (f = p.__e),
            p.ref &&
              u.ref != p.ref &&
              (u.ref && eX(u.ref, null, p), h.push(p.ref, p.__c || f, p)),
            null == m && null != f && (m = f),
            4 & p.__u || u.__k === p.__k
              ? (c = (function e(t, n, s) {
                  var r, i;
                  if ("function" == typeof t.type) {
                    for (r = t.__k, i = 0; r && i < r.length; i++)
                      r[i] && ((r[i].__ = t), (n = e(r[i], n, s)));
                    return n;
                  }
                  t.__e != n &&
                    (n && t.type && !s.contains(n) && (n = eV(t)),
                    s.insertBefore(t.__e, n || null),
                    (n = t.__e));
                  do n = n && n.nextSibling;
                  while (null != n && 8 == n.nodeType);
                  return n;
                })(p, c, e))
              : "function" == typeof p.type && void 0 !== g
              ? (c = g)
              : f && (c = f.nextSibling),
            (p.__u &= -7));
        return (n.__e = m), c;
      }
      function eF(e, t, n) {
        "-" == t[0]
          ? e.setProperty(t, null == n ? "" : n)
          : (e[t] =
              null == n
                ? ""
                : "number" != typeof n || eT.test(t)
                ? n
                : n + "px");
      }
      function eG(e, t, n, s, r) {
        var i, a;
        e: if ("style" == t)
          if ("string" == typeof n) e.style.cssText = n;
          else {
            if (("string" == typeof s && (e.style.cssText = s = ""), s))
              for (t in s) (n && t in n) || eF(e.style, t, "");
            if (n) for (t in n) (s && n[t] == s[t]) || eF(e.style, t, n[t]);
          }
        else if ("o" == t[0] && "n" == t[1])
          (i = t != (t = t.replace(eA, "$1"))),
            (t =
              (a = t.toLowerCase()) in e ||
              "onFocusOut" == t ||
              "onFocusIn" == t
                ? a.slice(2)
                : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + i] = n),
            n
              ? s
                ? (n.u = s.u)
                : ((n.u = eL), e.addEventListener(t, i ? eD : eP, i))
              : e.removeEventListener(t, i ? eD : eP, i);
        else {
          if ("http://www.w3.org/2000/svg" == r)
            t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if (
            "width" != t &&
            "height" != t &&
            "href" != t &&
            "list" != t &&
            "form" != t &&
            "tabIndex" != t &&
            "download" != t &&
            "rowSpan" != t &&
            "colSpan" != t &&
            "role" != t &&
            "popover" != t &&
            t in e
          )
            try {
              e[t] = null == n ? "" : n;
              break e;
            } catch (e) {}
          "function" == typeof n ||
            (null == n || (!1 === n && "-" != t[4])
              ? e.removeAttribute(t)
              : e.setAttribute(t, "popover" == t && 1 == n ? "" : n));
        }
      }
      function eJ(e) {
        return function (t) {
          if (this.l) {
            var n = this.l[t.type + e];
            if (null == t.t) t.t = eL++;
            else if (t.t < n.u) return;
            return n(eC.event ? eC.event(t) : t);
          }
        };
      }
      function eY(e, t, n, s, r, i, a, o, c, l) {
        var h,
          d,
          u,
          p,
          f,
          m,
          g,
          _,
          y,
          b,
          w,
          v,
          k,
          C,
          E,
          I,
          x,
          S = t.type;
        if (null != t.constructor) return null;
        128 & n.__u && ((c = !!(32 & n.__u)), (i = [(o = t.__e = n.__e)])),
          (h = eC.__b) && h(t);
        e: if ("function" == typeof S)
          try {
            if (
              ((_ = t.props),
              (y = "prototype" in S && S.prototype.render),
              (b = (h = S.contextType) && s[h.__c]),
              (w = h ? (b ? b.props.value : h.__) : s),
              n.__c
                ? (g = (d = t.__c = n.__c).__ = d.__E)
                : (y
                    ? (t.__c = d = new S(_, w))
                    : ((t.__c = d = new eB(_, w)),
                      (d.constructor = S),
                      (d.render = e$)),
                  b && b.sub(d),
                  (d.props = _),
                  d.state || (d.state = {}),
                  (d.context = w),
                  (d.__n = s),
                  (u = d.__d = !0),
                  (d.__h = []),
                  (d._sb = [])),
              y && null == d.__s && (d.__s = d.state),
              y &&
                null != S.getDerivedStateFromProps &&
                (d.__s == d.state && (d.__s = eO({}, d.__s)),
                eO(d.__s, S.getDerivedStateFromProps(_, d.__s))),
              (p = d.props),
              (f = d.state),
              (d.__v = t),
              u)
            )
              y &&
                null == S.getDerivedStateFromProps &&
                null != d.componentWillMount &&
                d.componentWillMount(),
                y &&
                  null != d.componentDidMount &&
                  d.__h.push(d.componentDidMount);
            else {
              if (
                (y &&
                  null == S.getDerivedStateFromProps &&
                  _ !== p &&
                  null != d.componentWillReceiveProps &&
                  d.componentWillReceiveProps(_, w),
                (!d.__e &&
                  null != d.shouldComponentUpdate &&
                  !1 === d.shouldComponentUpdate(_, d.__s, w)) ||
                  t.__v == n.__v)
              ) {
                for (
                  t.__v != n.__v &&
                    ((d.props = _), (d.state = d.__s), (d.__d = !1)),
                    t.__e = n.__e,
                    t.__k = n.__k,
                    t.__k.some(function (e) {
                      e && (e.__ = t);
                    }),
                    v = 0;
                  v < d._sb.length;
                  v++
                )
                  d.__h.push(d._sb[v]);
                (d._sb = []), d.__h.length && a.push(d);
                break e;
              }
              null != d.componentWillUpdate &&
                d.componentWillUpdate(_, d.__s, w),
                y &&
                  null != d.componentDidUpdate &&
                  d.__h.push(function () {
                    d.componentDidUpdate(p, f, m);
                  });
            }
            if (
              ((d.context = w),
              (d.props = _),
              (d.__P = e),
              (d.__e = !1),
              (k = eC.__r),
              (C = 0),
              y)
            ) {
              for (
                d.state = d.__s,
                  d.__d = !1,
                  k && k(t),
                  h = d.render(d.props, d.state, d.context),
                  E = 0;
                E < d._sb.length;
                E++
              )
                d.__h.push(d._sb[E]);
              d._sb = [];
            } else
              do
                (d.__d = !1),
                  k && k(t),
                  (h = d.render(d.props, d.state, d.context)),
                  (d.state = d.__s);
              while (d.__d && ++C < 25);
            (d.state = d.__s),
              null != d.getChildContext &&
                (s = eO(eO({}, s), d.getChildContext())),
              y &&
                !u &&
                null != d.getSnapshotBeforeUpdate &&
                (m = d.getSnapshotBeforeUpdate(p, f)),
              (I = h),
              null != h &&
                h.type === eH &&
                null == h.key &&
                (I = (function e(t) {
                  return "object" != typeof t ||
                    null == t ||
                    (t.__b && t.__b > 0)
                    ? t
                    : ej(t)
                    ? t.map(e)
                    : eO({}, t);
                })(h.props.children)),
              (o = eK(e, ej(I) ? I : [I], t, n, s, r, i, a, o, c, l)),
              (d.base = t.__e),
              (t.__u &= -161),
              d.__h.length && a.push(d),
              g && (d.__E = d.__ = null);
          } catch (e) {
            if (((t.__v = null), c || null != i))
              if (e.then) {
                for (
                  t.__u |= c ? 160 : 128;
                  o && 8 == o.nodeType && o.nextSibling;

                )
                  o = o.nextSibling;
                (i[i.indexOf(o)] = null), (t.__e = o);
              } else for (x = i.length; x--; ) eU(i[x]);
            else (t.__e = n.__e), (t.__k = n.__k);
            eC.__e(e, t, n);
          }
        else
          null == i && t.__v == n.__v
            ? ((t.__k = n.__k), (t.__e = n.__e))
            : (o = t.__e =
                (function (e, t, n, s, r, i, a, o, c) {
                  var l,
                    h,
                    d,
                    u,
                    p,
                    f,
                    m,
                    g = n.props,
                    _ = t.props,
                    y = t.type;
                  if (
                    ("svg" == y
                      ? (r = "http://www.w3.org/2000/svg")
                      : "math" == y
                      ? (r = "http://www.w3.org/1998/Math/MathML")
                      : r || (r = "http://www.w3.org/1999/xhtml"),
                    null != i)
                  ) {
                    for (l = 0; l < i.length; l++)
                      if (
                        (p = i[l]) &&
                        "setAttribute" in p == !!y &&
                        (y ? p.localName == y : 3 == p.nodeType)
                      ) {
                        (e = p), (i[l] = null);
                        break;
                      }
                  }
                  if (null == e) {
                    if (null == y) return document.createTextNode(_);
                    (e = document.createElementNS(r, y, _.is && _)),
                      o && (eC.__m && eC.__m(t, i), (o = !1)),
                      (i = null);
                  }
                  if (null == y) g === _ || (o && e.data == _) || (e.data = _);
                  else {
                    if (
                      ((i = i && ek.call(e.childNodes)),
                      (g = n.props || eN),
                      !o && null != i)
                    )
                      for (g = {}, l = 0; l < e.attributes.length; l++)
                        g[(p = e.attributes[l]).name] = p.value;
                    for (l in g)
                      if (((p = g[l]), "children" == l));
                      else if ("dangerouslySetInnerHTML" == l) d = p;
                      else if (!(l in _)) {
                        if (
                          ("value" == l && "defaultValue" in _) ||
                          ("checked" == l && "defaultChecked" in _)
                        )
                          continue;
                        eG(e, l, null, p, r);
                      }
                    for (l in _)
                      (p = _[l]),
                        "children" == l
                          ? (u = p)
                          : "dangerouslySetInnerHTML" == l
                          ? (h = p)
                          : "value" == l
                          ? (f = p)
                          : "checked" == l
                          ? (m = p)
                          : (o && "function" != typeof p) ||
                            g[l] === p ||
                            eG(e, l, p, g[l], r);
                    if (h)
                      o ||
                        (d &&
                          (h.__html == d.__html || h.__html == e.innerHTML)) ||
                        (e.innerHTML = h.__html),
                        (t.__k = []);
                    else if (
                      (d && (e.innerHTML = ""),
                      eK(
                        "template" == t.type ? e.content : e,
                        ej(u) ? u : [u],
                        t,
                        n,
                        s,
                        "foreignObject" == y
                          ? "http://www.w3.org/1999/xhtml"
                          : r,
                        i,
                        a,
                        i ? i[0] : n.__k && eV(n, 0),
                        o,
                        c
                      ),
                      null != i)
                    )
                      for (l = i.length; l--; ) eU(i[l]);
                    o ||
                      ((l = "value"),
                      "progress" == y && null == f
                        ? e.removeAttribute("value")
                        : null == f ||
                          (f === e[l] &&
                            ("progress" != y || f) &&
                            ("option" != y || f == g[l])) ||
                          eG(e, l, f, g[l], r),
                      (l = "checked"),
                      null != m && m != e[l] && eG(e, l, m, g[l], r));
                  }
                  return e;
                })(n.__e, t, n, s, r, i, a, c, l));
        return (h = eC.diffed) && h(t), 128 & t.__u ? void 0 : o;
      }
      function eQ(e, t, n) {
        for (var s = 0; s < n.length; s++) eX(n[s], n[++s], n[++s]);
        eC.__c && eC.__c(t, e),
          e.some(function (t) {
            try {
              (e = t.__h),
                (t.__h = []),
                e.some(function (e) {
                  e.call(t);
                });
            } catch (e) {
              eC.__e(e, t.__v);
            }
          });
      }
      function eX(e, t, n) {
        try {
          if ("function" == typeof e) {
            var s = "function" == typeof e.__u;
            s && e.__u(), (s && null == t) || (e.__u = e(t));
          } else e.current = t;
        } catch (e) {
          eC.__e(e, n);
        }
      }
      function e$(e, t, n) {
        return this.constructor(e, n);
      }
      function e1(e, t, n) {
        var s, r, i, a;
        t == document && (t = document.documentElement),
          eC.__ && eC.__(e, t),
          (r = (s = "function" == typeof n) ? null : (n && n.__k) || t.__k),
          (i = []),
          (a = []),
          eY(
            t,
            (e = ((!s && n) || t).__k = eW(eH, null, [e])),
            r || eN,
            eN,
            t.namespaceURI,
            !s && n
              ? [n]
              : r
              ? null
              : t.firstChild
              ? ek.call(t.childNodes)
              : null,
            i,
            !s && n ? n : r ? r.__e : t.firstChild,
            s,
            a
          ),
          eQ(i, e, a);
      }
      (ek = eR.slice),
        (eC = {
          __e: function (e, t, n, s) {
            for (var r, i, a; (t = t.__); )
              if ((r = t.__c) && !r.__)
                try {
                  if (
                    ((i = r.constructor) &&
                      null != i.getDerivedStateFromError &&
                      (r.setState(i.getDerivedStateFromError(e)), (a = r.__d)),
                    null != r.componentDidCatch &&
                      (r.componentDidCatch(e, s || {}), (a = r.__d)),
                    a)
                  )
                    return (r.__E = r);
                } catch (t) {
                  e = t;
                }
            throw e;
          },
        }),
        (eE = 0),
        (eB.prototype.setState = function (e, t) {
          var n;
          (n =
            null != this.__s && this.__s != this.state
              ? this.__s
              : (this.__s = eO({}, this.state))),
            "function" == typeof e && (e = e(eO({}, n), this.props)),
            e && eO(n, e),
            null != e && this.__v && (t && this._sb.push(t), eZ(this));
        }),
        (eB.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), eZ(this));
        }),
        (eB.prototype.render = eH),
        (eI = []),
        (eS =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (eM = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (ez.__r = 0),
        (eA = /(PointerCapture)$|Capture$/i),
        (eL = 0),
        (eP = eJ(!1)),
        (eD = eJ(!0));
      var e0,
        e2,
        e3,
        e5,
        e4 = 0,
        e8 = [],
        e6 = eC,
        e7 = e6.__b,
        e9 = e6.__r,
        te = e6.diffed,
        tt = e6.__c,
        tn = e6.unmount,
        ts = e6.__;
      function tr(e, t) {
        e6.__h && e6.__h(e2, e, e4 || t), (e4 = 0);
        var n = e2.__H || (e2.__H = { __: [], __h: [] });
        return e >= n.__.length && n.__.push({}), n.__[e];
      }
      function ti(e, t, n) {
        var s = tr(e0++, 2);
        if (
          ((s.t = e),
          !s.__c &&
            ((s.__ = [
              n ? n(t) : th(void 0, t),
              function (e) {
                var t = s.__N ? s.__N[0] : s.__[0],
                  n = s.t(t, e);
                t !== n && ((s.__N = [n, s.__[1]]), s.__c.setState({}));
              },
            ]),
            (s.__c = e2),
            !e2.__f))
        ) {
          var r = function (e, t, n) {
            if (!s.__c.__H) return !0;
            var r = s.__c.__H.__.filter(function (e) {
              return !!e.__c;
            });
            if (
              r.every(function (e) {
                return !e.__N;
              })
            )
              return !i || i.call(this, e, t, n);
            var a = s.__c.props !== e;
            return (
              r.forEach(function (e) {
                if (e.__N) {
                  var t = e.__[0];
                  (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (a = !0);
                }
              }),
              (i && i.call(this, e, t, n)) || a
            );
          };
          e2.__f = !0;
          var i = e2.shouldComponentUpdate,
            a = e2.componentWillUpdate;
          (e2.componentWillUpdate = function (e, t, n) {
            if (this.__e) {
              var s = i;
              (i = void 0), r(e, t, n), (i = s);
            }
            a && a.call(this, e, t, n);
          }),
            (e2.shouldComponentUpdate = r);
        }
        return s.__N || s.__;
      }
      function ta() {
        for (var e; (e = e8.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(tc), e.__H.__h.forEach(tl), (e.__H.__h = []);
            } catch (t) {
              (e.__H.__h = []), e6.__e(t, e.__v);
            }
      }
      (e6.__b = function (e) {
        (e2 = null), e7 && e7(e);
      }),
        (e6.__ = function (e, t) {
          e && t.__k && t.__k.__m && (e.__m = t.__k.__m), ts && ts(e, t);
        }),
        (e6.__r = function (e) {
          e9 && e9(e), (e0 = 0);
          var t = (e2 = e.__c).__H;
          t &&
            (e3 === e2
              ? ((t.__h = []),
                (e2.__h = []),
                t.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.u = e.__N = void 0);
                }))
              : (t.__h.forEach(tc), t.__h.forEach(tl), (t.__h = []), (e0 = 0))),
            (e3 = e2);
        }),
        (e6.diffed = function (e) {
          te && te(e);
          var t = e.__c;
          t &&
            t.__H &&
            (t.__H.__h.length &&
              ((1 !== e8.push(t) && e5 === e6.requestAnimationFrame) ||
                (
                  (e5 = e6.requestAnimationFrame) ||
                  function (e) {
                    var t,
                      n = function () {
                        clearTimeout(s),
                          to && cancelAnimationFrame(t),
                          setTimeout(e);
                      },
                      s = setTimeout(n, 35);
                    to && (t = requestAnimationFrame(n));
                  }
                )(ta)),
            t.__H.__.forEach(function (e) {
              e.u && (e.__H = e.u), (e.u = void 0);
            })),
            (e3 = e2 = null);
        }),
        (e6.__c = function (e, t) {
          t.some(function (e) {
            try {
              e.__h.forEach(tc),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || tl(e);
                }));
            } catch (n) {
              t.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (t = []),
                e6.__e(n, e.__v);
            }
          }),
            tt && tt(e, t);
        }),
        (e6.unmount = function (e) {
          tn && tn(e);
          var t,
            n = e.__c;
          n &&
            n.__H &&
            (n.__H.__.forEach(function (e) {
              try {
                tc(e);
              } catch (e) {
                t = e;
              }
            }),
            (n.__H = void 0),
            t && e6.__e(t, n.__v));
        });
      var to = "function" == typeof requestAnimationFrame;
      function tc(e) {
        var t = e2,
          n = e.__c;
        "function" == typeof n && ((e.__c = void 0), n()), (e2 = t);
      }
      function tl(e) {
        var t = e2;
        (e.__c = e.__()), (e2 = t);
      }
      function th(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      class td {
        attach(e) {
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-snackbar-root"),
            e.appendChild(this.root),
            this.render();
        }
        presentItem(e) {
          let t = this.nextItemKey++;
          return (
            this.items.set(t, e),
            this.render(),
            () => {
              this.items.delete(t), this.render();
            }
          );
        }
        clear() {
          this.items.clear(), this.render();
        }
        render() {
          this.root &&
            e1(
              eW(
                "div",
                null,
                eW(
                  tu,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map((e) => {
                    let [t, n] = e;
                    return eW(tp, Object.assign({}, n, { key: t }));
                  })
                )
              ),
              this.root
            );
        }
        constructor() {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = ey());
        }
      }
      let tu = (e) =>
          eW(
            "div",
            { class: ew("-cbwsdk-snackbar-container") },
            eW(
              "style",
              null,
              ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
            ),
            eW("div", { class: "-cbwsdk-snackbar" }, e.children)
          ),
        tp = (e) => {
          let { autoExpand: t, message: n, menuItems: s } = e,
            [r, i] = ((e4 = 1), ti(th, !0)),
            [a, o] = ((e4 = 1), ti(th, null != t && t));
          return (
            !(function (e, t) {
              var n,
                s,
                r = tr(e0++, 3);
              !e6.__s &&
                ((n = r.__H),
                (s = void 0),
                !n ||
                  n.length !== s.length ||
                  s.some(function (e, t) {
                    return e !== n[t];
                  })) &&
                ((r.__ = e), (r.u = void 0), e2.__H.__h.push(r));
            })(() => {
              let e = [
                window.setTimeout(() => {
                  i(!1);
                }, 1),
                window.setTimeout(() => {
                  o(!0);
                }, 1e4),
              ];
              return () => {
                e.forEach(window.clearTimeout);
              };
            }),
            eW(
              "div",
              {
                class: ew(
                  "-cbwsdk-snackbar-instance",
                  r && "-cbwsdk-snackbar-instance-hidden",
                  a && "-cbwsdk-snackbar-instance-expanded"
                ),
              },
              eW(
                "div",
                {
                  class: "-cbwsdk-snackbar-instance-header",
                  onClick: () => {
                    o(!a);
                  },
                },
                eW("img", {
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                  class: "-cbwsdk-snackbar-instance-header-cblogo",
                }),
                " ",
                eW(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-header-message" },
                  n
                ),
                eW(
                  "div",
                  { class: "-gear-container" },
                  !a &&
                    eW(
                      "svg",
                      {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      eW("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        fill: "#F5F7F8",
                      })
                    ),
                  eW("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand",
                  })
                )
              ),
              s &&
                s.length > 0 &&
                eW(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-menu" },
                  s.map((e, t) =>
                    eW(
                      "div",
                      {
                        class: ew(
                          "-cbwsdk-snackbar-instance-menu-item",
                          e.isRed &&
                            "-cbwsdk-snackbar-instance-menu-item-is-red"
                        ),
                        onClick: e.onClick,
                        key: t,
                      },
                      eW(
                        "svg",
                        {
                          width: e.svgWidth,
                          height: e.svgHeight,
                          viewBox: "0 0 10 11",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        eW("path", {
                          "fill-rule": e.defaultFillRule,
                          "clip-rule": e.defaultClipRule,
                          d: e.path,
                          fill: "#AAAAAA",
                        })
                      ),
                      eW(
                        "span",
                        {
                          class: ew(
                            "-cbwsdk-snackbar-instance-menu-item-info",
                            e.isRed &&
                              "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                          ),
                        },
                        e.info
                      )
                    )
                  )
                )
            )
          );
        };
      class tf {
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          let e = document.documentElement,
            t = document.createElement("div");
          (t.className = "-cbwsdk-css-reset"),
            e.appendChild(t),
            this.snackbar.attach(t),
            (this.attached = !0),
            eb();
        }
        showConnecting(e) {
          let t;
          return (
            (t = e.isUnlinkedErrorState
              ? {
                  autoExpand: !0,
                  message: "Connection lost",
                  menuItems: [
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }
              : {
                  message: "Confirm on phone",
                  menuItems: [
                    {
                      isRed: !0,
                      info: "Cancel transaction",
                      svgWidth: "11",
                      svgHeight: "11",
                      path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                      defaultFillRule: "inherit",
                      defaultClipRule: "inherit",
                      onClick: e.onCancel,
                    },
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: e.onResetConnection,
                    },
                  ],
                }),
            this.snackbar.presentItem(t)
          );
        }
        constructor() {
          (this.attached = !1), (this.snackbar = new td());
        }
      }
      class tm {
        attach() {
          let e = document.documentElement;
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-css-reset"),
            e.appendChild(this.root),
            eb();
        }
        present(e) {
          this.render(e);
        }
        clear() {
          this.render(null);
        }
        render(e) {
          this.root &&
            (e1(null, this.root),
            e &&
              e1(
                eW(
                  tg,
                  Object.assign({}, e, {
                    onDismiss: () => {
                      this.clear();
                    },
                    darkMode: this.darkMode,
                  })
                ),
                this.root
              ));
        }
        constructor() {
          (this.root = null), (this.darkMode = ey());
        }
      }
      let tg = (e) => {
          let {
            title: t,
            buttonText: n,
            darkMode: s,
            onButtonClick: r,
            onDismiss: i,
          } = e;
          return eW(
            tu,
            { darkMode: s },
            eW(
              "div",
              { class: "-cbwsdk-redirect-dialog" },
              eW(
                "style",
                null,
                ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"
              ),
              eW("div", {
                class: "-cbwsdk-redirect-dialog-backdrop",
                onClick: i,
              }),
              eW(
                "div",
                {
                  class: ew(
                    "-cbwsdk-redirect-dialog-box",
                    s ? "dark" : "light"
                  ),
                },
                eW("p", null, t),
                eW("button", { onClick: r }, n)
              )
            )
          );
        },
        t_ = "https://www.walletlink.org";
      class ty {
        attach() {
          if (this.attached)
            throw Error("Coinbase Wallet SDK UI is already attached");
          this.redirectDialog.attach(), (this.attached = !0);
        }
        redirectToCoinbaseWallet(e) {
          let t = new URL("https://go.cb-w.com/walletlink");
          t.searchParams.append(
            "redirect_url",
            (function () {
              try {
                if (
                  (function () {
                    try {
                      return null !== window.frameElement;
                    } catch (e) {
                      return !1;
                    }
                  })() &&
                  window.top
                )
                  return window.top.location;
                return window.location;
              } catch (e) {
                return window.location;
              }
            })().href
          ),
            e && t.searchParams.append("wl_url", e);
          let n = document.createElement("a");
          (n.target = "cbw-opener"),
            (n.href = t.href),
            (n.rel = "noreferrer noopener"),
            n.click();
        }
        openCoinbaseWalletDeeplink(e) {
          this.redirectDialog.present({
            title: "Redirecting to Coinbase Wallet...",
            buttonText: "Open",
            onButtonClick: () => {
              this.redirectToCoinbaseWallet(e);
            },
          }),
            setTimeout(() => {
              this.redirectToCoinbaseWallet(e);
            }, 99);
        }
        showConnecting(e) {
          return () => {
            this.redirectDialog.clear();
          };
        }
        constructor() {
          (this.attached = !1), (this.redirectDialog = new tm());
        }
      }
      class tb {
        subscribe() {
          let e = e_.load(this.storage) || e_.create(this.storage),
            { linkAPIUrl: t } = this,
            n = new el({ session: e, linkAPIUrl: t, listener: this }),
            s = this.isMobileWeb ? new ty() : new tf();
          return n.connect(), { session: e, ui: s, connection: n };
        }
        resetAndReload() {
          this.connection
            .destroy()
            .then(() => {
              let e = e_.load(this.storage);
              (null == e ? void 0 : e.id) === this._session.id && t.clearAll(),
                document.location.reload();
            })
            .catch((e) => {});
        }
        signEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: E(e.weiValue),
              data: k(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? E(e.gasPriceInWei) : null,
              maxFeePerGas: e.gasPriceInWei ? E(e.gasPriceInWei) : null,
              maxPriorityFeePerGas: e.gasPriceInWei ? E(e.gasPriceInWei) : null,
              gasLimit: e.gasLimit ? E(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !1,
            },
          });
        }
        signAndSubmitEthereumTransaction(e) {
          return this.sendRequest({
            method: "signEthereumTransaction",
            params: {
              fromAddress: e.fromAddress,
              toAddress: e.toAddress,
              weiValue: E(e.weiValue),
              data: k(e.data, !0),
              nonce: e.nonce,
              gasPriceInWei: e.gasPriceInWei ? E(e.gasPriceInWei) : null,
              maxFeePerGas: e.maxFeePerGas ? E(e.maxFeePerGas) : null,
              maxPriorityFeePerGas: e.maxPriorityFeePerGas
                ? E(e.maxPriorityFeePerGas)
                : null,
              gasLimit: e.gasLimit ? E(e.gasLimit) : null,
              chainId: e.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(e, t) {
          return this.sendRequest({
            method: "submitEthereumTransaction",
            params: { signedTransaction: k(e, !0), chainId: t },
          });
        }
        getWalletLinkSession() {
          return this._session;
        }
        sendRequest(e) {
          let t = null,
            n = b(8),
            s = (s) => {
              this.publishWeb3RequestCanceledEvent(n),
                this.handleErrorResponse(n, e.method, s),
                null == t || t();
            };
          return new Promise((r, i) => {
            (t = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: s,
              onResetConnection: this.resetAndReload,
            })),
              this.relayEventManager.callbacks.set(n, (e) => {
                if ((null == t || t(), ei(e))) return i(Error(e.errorMessage));
                r(e);
              }),
              this.publishWeb3RequestEvent(n, e);
          });
        }
        publishWeb3RequestEvent(e, t) {
          let n = { type: "WEB3_REQUEST", id: e, request: t };
          this.publishEvent("Web3Request", n, !0)
            .then((e) => {})
            .catch((e) => {
              this.handleWeb3ResponseMessage(n.id, {
                method: t.method,
                errorMessage: e.message,
              });
            }),
            this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method);
        }
        openCoinbaseWalletDeeplink(e) {
          if (this.ui instanceof ty)
            switch (e) {
              case "requestEthereumAccounts":
              case "switchEthereumChain":
                return;
              default:
                window.addEventListener(
                  "blur",
                  () => {
                    window.addEventListener(
                      "focus",
                      () => {
                        this.connection.checkUnseenEvents();
                      },
                      { once: !0 }
                    );
                  },
                  { once: !0 }
                ),
                  this.ui.openCoinbaseWalletDeeplink();
            }
        }
        publishWeb3RequestCanceledEvent(e) {
          this.publishEvent(
            "Web3RequestCanceled",
            { type: "WEB3_REQUEST_CANCELED", id: e },
            !1
          ).then();
        }
        publishEvent(e, t, n) {
          return this.connection.publishEvent(e, t, n);
        }
        handleWeb3ResponseMessage(e, t) {
          if ("requestEthereumAccounts" === t.method) {
            tb.accountRequestCallbackIds.forEach((e) =>
              this.invokeCallback(e, t)
            ),
              tb.accountRequestCallbackIds.clear();
            return;
          }
          this.invokeCallback(e, t);
        }
        handleErrorResponse(e, t, n) {
          var s;
          let r =
            null != (s = null == n ? void 0 : n.message)
              ? s
              : "Unspecified error message.";
          this.handleWeb3ResponseMessage(e, { method: t, errorMessage: r });
        }
        invokeCallback(e, t) {
          let n = this.relayEventManager.callbacks.get(e);
          n && (n(t), this.relayEventManager.callbacks.delete(e));
        }
        requestEthereumAccounts() {
          let { appName: e, appLogoUrl: t } = this.metadata,
            n = {
              method: "requestEthereumAccounts",
              params: { appName: e, appLogoUrl: t },
            },
            s = b(8);
          return new Promise((e, t) => {
            this.relayEventManager.callbacks.set(s, (n) => {
              if (ei(n)) return t(Error(n.errorMessage));
              e(n);
            }),
              tb.accountRequestCallbackIds.add(s),
              this.publishWeb3RequestEvent(s, n);
          });
        }
        watchAsset(e, t, n, s, r, i) {
          let a = {
              method: "watchAsset",
              params: {
                type: e,
                options: { address: t, symbol: n, decimals: s, image: r },
                chainId: i,
              },
            },
            o = null,
            c = b(8);
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, a.method, e),
                  null == o || o();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), ei(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, a);
            })
          );
        }
        addEthereumChain(e, t, n, s, r, i) {
          let a = {
              method: "addEthereumChain",
              params: {
                chainId: e,
                rpcUrls: t,
                blockExplorerUrls: s,
                chainName: r,
                iconUrls: n,
                nativeCurrency: i,
              },
            },
            o = null,
            c = b(8);
          return (
            (o = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(c),
                  this.handleErrorResponse(c, a.method, e),
                  null == o || o();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(c, (n) => {
                if ((null == o || o(), ei(n))) return t(Error(n.errorMessage));
                e(n);
              }),
                this.publishWeb3RequestEvent(c, a);
            })
          );
        }
        switchEthereumChain(e, t) {
          let n = {
              method: "switchEthereumChain",
              params: Object.assign({ chainId: e }, { address: t }),
            },
            s = null,
            r = b(8);
          return (
            (s = this.ui.showConnecting({
              isUnlinkedErrorState: this.isUnlinkedErrorState,
              onCancel: (e) => {
                this.publishWeb3RequestCanceledEvent(r),
                  this.handleErrorResponse(r, n.method, e),
                  null == s || s();
              },
              onResetConnection: this.resetAndReload,
            })),
            new Promise((e, t) => {
              this.relayEventManager.callbacks.set(r, (n) =>
                (null == s || s(), ei(n) && n.errorCode)
                  ? t(
                      h.provider.custom({
                        code: n.errorCode,
                        message:
                          "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
                      })
                    )
                  : ei(n)
                  ? t(Error(n.errorMessage))
                  : void e(n)
              ),
                this.publishWeb3RequestEvent(r, n);
            })
          );
        }
        constructor(e) {
          (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
            (this.isMobileWeb = (function () {
              var e;
              return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                null == (e = null == window ? void 0 : window.navigator)
                  ? void 0
                  : e.userAgent
              );
            })()),
            (this.linkedUpdated = (e) => {
              this.isLinked = e;
              let t = this.storage.getItem(er);
              if (
                (e && (this._session.linked = e),
                (this.isUnlinkedErrorState = !1),
                t)
              ) {
                let n = t.split(" "),
                  s = "true" === this.storage.getItem("IsStandaloneSigning");
                "" === n[0] ||
                  e ||
                  !this._session.linked ||
                  s ||
                  (this.isUnlinkedErrorState = !0);
              }
            }),
            (this.metadataUpdated = (e, t) => {
              this.storage.setItem(e, t);
            }),
            (this.chainUpdated = (e, t) => {
              (this.chainCallbackParams.chainId !== e ||
                this.chainCallbackParams.jsonRpcUrl !== t) &&
                ((this.chainCallbackParams = { chainId: e, jsonRpcUrl: t }),
                this.chainCallback &&
                  this.chainCallback(t, Number.parseInt(e, 10)));
            }),
            (this.accountUpdated = (e) => {
              this.accountsCallback && this.accountsCallback([e]),
                tb.accountRequestCallbackIds.size > 0 &&
                  (Array.from(tb.accountRequestCallbackIds.values()).forEach(
                    (t) => {
                      this.invokeCallback(t, {
                        method: "requestEthereumAccounts",
                        result: [e],
                      });
                    }
                  ),
                  tb.accountRequestCallbackIds.clear());
            }),
            (this.resetAndReload = this.resetAndReload.bind(this)),
            (this.linkAPIUrl = e.linkAPIUrl),
            (this.storage = e.storage),
            (this.metadata = e.metadata),
            (this.accountsCallback = e.accountsCallback),
            (this.chainCallback = e.chainCallback);
          let { session: t, ui: n, connection: s } = this.subscribe();
          (this._session = t),
            (this.connection = s),
            (this.relayEventManager = new eh()),
            (this.ui = n),
            this.ui.attach();
        }
      }
      tb.accountRequestCallbackIds = new Set();
      let tw = "DefaultChainId",
        tv = "DefaultJsonRpcUrl";
      class tk {
        getSession() {
          let { id: e, secret: t } =
            this.initializeRelay().getWalletLinkSession();
          return { id: e, secret: t };
        }
        async handshake() {
          await this._eth_requestAccounts();
        }
        get selectedAddress() {
          return this._addresses[0] || void 0;
        }
        get jsonRpcUrl() {
          var e;
          return null != (e = this._storage.getItem(tv)) ? e : void 0;
        }
        set jsonRpcUrl(e) {
          this._storage.setItem(tv, e);
        }
        updateProviderInfo(e, t) {
          var n;
          this.jsonRpcUrl = e;
          let s = this.getChainId();
          this._storage.setItem(tw, t.toString(10)),
            N(t) !== s &&
              (null == (n = this.callback) ||
                n.call(this, "chainChanged", I(t)));
        }
        async watchAsset(e) {
          let t = Array.isArray(e) ? e[0] : e;
          if (!t.type) throw h.rpc.invalidParams("Type is required");
          if ((null == t ? void 0 : t.type) !== "ERC20")
            throw h.rpc.invalidParams(
              "Asset of type '".concat(t.type, "' is not supported")
            );
          if (!(null == t ? void 0 : t.options))
            throw h.rpc.invalidParams("Options are required");
          if (!(null == t ? void 0 : t.options.address))
            throw h.rpc.invalidParams("Address is required");
          let n = this.getChainId(),
            { address: s, symbol: r, image: i, decimals: a } = t.options,
            o = this.initializeRelay(),
            c = await o.watchAsset(
              t.type,
              s,
              r,
              a,
              i,
              null == n ? void 0 : n.toString()
            );
          return !ei(c) && !!c.result;
        }
        async addEthereumChain(e) {
          var t, n;
          let s = e[0];
          if ((null == (t = s.rpcUrls) ? void 0 : t.length) === 0)
            throw h.rpc.invalidParams("please pass in at least 1 rpcUrl");
          if (!s.chainName || "" === s.chainName.trim())
            throw h.rpc.invalidParams("chainName is a required field");
          if (!s.nativeCurrency)
            throw h.rpc.invalidParams("nativeCurrency is a required field");
          let r = Number.parseInt(s.chainId, 16);
          if (r === this.getChainId()) return !1;
          let i = this.initializeRelay(),
            {
              rpcUrls: a = [],
              blockExplorerUrls: o = [],
              chainName: c,
              iconUrls: l = [],
              nativeCurrency: d,
            } = s,
            u = await i.addEthereumChain(r.toString(), a, l, o, c, d);
          if (ei(u)) return !1;
          if ((null == (n = u.result) ? void 0 : n.isApproved) === !0)
            return this.updateProviderInfo(a[0], r), null;
          throw h.rpc.internal("unable to add ethereum chain");
        }
        async switchEthereumChain(e) {
          let t = Number.parseInt(e[0].chainId, 16),
            n = this.initializeRelay(),
            s = await n.switchEthereumChain(
              t.toString(10),
              this.selectedAddress || void 0
            );
          if (ei(s)) throw s;
          let r = s.result;
          return (
            r.isApproved &&
              r.rpcUrl.length > 0 &&
              this.updateProviderInfo(r.rpcUrl, t),
            null
          );
        }
        async cleanup() {
          (this.callback = null),
            this._relay && this._relay.resetAndReload(),
            this._storage.clear();
        }
        _setAddresses(e, t) {
          var n;
          if (!Array.isArray(e)) throw Error("addresses is not an array");
          let s = e.map((e) => P(e));
          JSON.stringify(s) !== JSON.stringify(this._addresses) &&
            ((this._addresses = s),
            null == (n = this.callback) || n.call(this, "accountsChanged", s),
            this._storage.setItem(er, s.join(" ")));
        }
        async request(e) {
          let t = e.params || [];
          switch (e.method) {
            case "eth_accounts":
              return [...this._addresses];
            case "eth_coinbase":
              return this.selectedAddress || null;
            case "net_version":
              return this.getChainId().toString(10);
            case "eth_chainId":
              return I(this.getChainId());
            case "eth_requestAccounts":
              return this._eth_requestAccounts();
            case "eth_ecRecover":
            case "personal_ecRecover":
              return this.ecRecover(e);
            case "personal_sign":
              return this.personalSign(e);
            case "eth_signTransaction":
              return this._eth_signTransaction(t);
            case "eth_sendRawTransaction":
              return this._eth_sendRawTransaction(t);
            case "eth_sendTransaction":
              return this._eth_sendTransaction(t);
            case "eth_signTypedData_v1":
            case "eth_signTypedData_v3":
            case "eth_signTypedData_v4":
            case "eth_signTypedData":
              return this.signTypedData(e);
            case "wallet_addEthereumChain":
              return this.addEthereumChain(t);
            case "wallet_switchEthereumChain":
              return this.switchEthereumChain(t);
            case "wallet_watchAsset":
              return this.watchAsset(t);
            default:
              if (!this.jsonRpcUrl)
                throw h.rpc.internal("No RPC URL set for chain");
              return Y(e, this.jsonRpcUrl);
          }
        }
        _ensureKnownAddress(e) {
          let t = P(e);
          if (!this._addresses.map((e) => P(e)).includes(t))
            throw Error("Unknown Ethereum address");
        }
        _prepareTransactionParams(e) {
          let t = e.from ? P(e.from) : this.selectedAddress;
          if (!t) throw Error("Ethereum address is unavailable");
          this._ensureKnownAddress(t);
          let s = e.to ? P(e.to) : null,
            r = null != e.value ? R(e.value) : BigInt(0),
            i = e.data ? D(e.data) : n.Buffer.alloc(0),
            a = null != e.nonce ? N(e.nonce) : null,
            o = null != e.gasPrice ? R(e.gasPrice) : null,
            c = null != e.maxFeePerGas ? R(e.maxFeePerGas) : null,
            l =
              null != e.maxPriorityFeePerGas ? R(e.maxPriorityFeePerGas) : null;
          return {
            fromAddress: t,
            toAddress: s,
            weiValue: r,
            data: i,
            nonce: a,
            gasPriceInWei: o,
            maxFeePerGas: c,
            maxPriorityFeePerGas: l,
            gasLimit: null != e.gas ? R(e.gas) : null,
            chainId: e.chainId ? N(e.chainId) : this.getChainId(),
          };
        }
        async ecRecover(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw h.rpc.invalidParams();
          let s = this.initializeRelay(),
            r = await s.sendRequest({
              method: "ethereumAddressFromSignedMessage",
              params: {
                message: C(n[0]),
                signature: C(n[1]),
                addPrefix: "personal_ecRecover" === t,
              },
            });
          if (ei(r)) throw r;
          return r.result;
        }
        getChainId() {
          var e;
          return Number.parseInt(
            null != (e = this._storage.getItem(tw)) ? e : "1",
            10
          );
        }
        async _eth_requestAccounts() {
          var e, t;
          if (this._addresses.length > 0)
            return (
              null == (e = this.callback) ||
                e.call(this, "connect", { chainId: I(this.getChainId()) }),
              this._addresses
            );
          let n = this.initializeRelay(),
            s = await n.requestEthereumAccounts();
          if (ei(s)) throw s;
          if (!s.result) throw Error("accounts received is empty");
          return (
            this._setAddresses(s.result),
            null == (t = this.callback) ||
              t.call(this, "connect", { chainId: I(this.getChainId()) }),
            this._addresses
          );
        }
        async personalSign(e) {
          let { params: t } = e;
          if (!Array.isArray(t)) throw h.rpc.invalidParams();
          let n = t[1],
            s = t[0];
          this._ensureKnownAddress(n);
          let r = this.initializeRelay(),
            i = await r.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: P(n),
                message: C(s),
                addPrefix: !0,
                typedDataJson: null,
              },
            });
          if (ei(i)) throw i;
          return i.result;
        }
        async _eth_signTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            s = await n.signEthereumTransaction(t);
          if (ei(s)) throw s;
          return s.result;
        }
        async _eth_sendRawTransaction(e) {
          let t = D(e[0]),
            n = this.initializeRelay(),
            s = await n.submitEthereumTransaction(t, this.getChainId());
          if (ei(s)) throw s;
          return s.result;
        }
        async _eth_sendTransaction(e) {
          let t = this._prepareTransactionParams(e[0] || {}),
            n = this.initializeRelay(),
            s = await n.signAndSubmitEthereumTransaction(t);
          if (ei(s)) throw s;
          return s.result;
        }
        async signTypedData(e) {
          let { method: t, params: n } = e;
          if (!Array.isArray(n)) throw h.rpc.invalidParams();
          let s = n[+("eth_signTypedData_v1" === t)],
            r = n[+("eth_signTypedData_v1" !== t)];
          this._ensureKnownAddress(s);
          let i = this.initializeRelay(),
            a = await i.sendRequest({
              method: "signEthereumMessage",
              params: {
                address: P(s),
                message: k(
                  {
                    eth_signTypedData_v1: es.default.hashForSignTypedDataLegacy,
                    eth_signTypedData_v3: es.default.hashForSignTypedData_v3,
                    eth_signTypedData_v4: es.default.hashForSignTypedData_v4,
                    eth_signTypedData: es.default.hashForSignTypedData_v4,
                  }[t]({
                    data: (function (e) {
                      if ("string" == typeof e) return JSON.parse(e);
                      if ("object" == typeof e) return e;
                      throw h.rpc.invalidParams(
                        "Not a JSON string or an object: ".concat(String(e))
                      );
                    })(r),
                  }),
                  !0
                ),
                typedDataJson: JSON.stringify(r, null, 2),
                addPrefix: !1,
              },
            });
          if (ei(a)) throw a;
          return a.result;
        }
        initializeRelay() {
          return (
            this._relay ||
              (this._relay = new tb({
                linkAPIUrl: t_,
                storage: this._storage,
                metadata: this.metadata,
                accountsCallback: this._setAddresses.bind(this),
                chainCallback: this.updateProviderInfo.bind(this),
              })),
            this._relay
          );
        }
        constructor(e) {
          (this._relay = null),
            (this._addresses = []),
            (this.metadata = e.metadata),
            (this._storage = new t("walletlink", t_)),
            (this.callback = e.callback || null);
          let n = this._storage.getItem(er);
          if (n) {
            let e = n.split(" ");
            "" !== e[0] && (this._addresses = e.map((e) => P(e)));
          }
          this.initializeRelay();
        }
      }
      let tC = "SignerType",
        tE = new t("CBWSDK", "SignerConfigurator");
      async function tI(e) {
        let {
          communicator: t,
          metadata: n,
          handshakeRequest: s,
          callback: r,
        } = e;
        tx(t, n, r).catch(() => {});
        let i = {
            id: crypto.randomUUID(),
            event: "selectSignerType",
            data: Object.assign(Object.assign({}, e.preference), {
              handshakeRequest: s,
            }),
          },
          { data: a } = await t.postRequestAndWaitForResponse(i);
        return a;
      }
      async function tx(e, t, n) {
        await e.onMessage((e) => {
          let { event: t } = e;
          return "WalletLinkSessionRequest" === t;
        });
        let s = new tk({ metadata: t, callback: n });
        e.postMessage({
          event: "WalletLinkUpdate",
          data: { session: s.getSession() },
        }),
          await s.handshake(),
          e.postMessage({ event: "WalletLinkUpdate", data: { connected: !0 } });
      }
      let { checkCrossOriginOpenerPolicy: tS, getCrossOriginOpenerPolicy: tM } =
        (() => {
          let e;
          return {
            getCrossOriginOpenerPolicy: () => (void 0 === e ? "undefined" : e),
            checkCrossOriginOpenerPolicy: async () => {
              if ("undefined" == typeof window) {
                e = "non-browser-env";
                return;
              }
              try {
                let t = ""
                    .concat(window.location.origin)
                    .concat(window.location.pathname),
                  n = await fetch(t, { method: "HEAD" });
                if (!n.ok) throw Error("HTTP error! status: ".concat(n.status));
                let s = n.headers.get("Cross-Origin-Opener-Policy");
                (e = null != s ? s : "null"),
                  "same-origin" === e &&
                    console.error(
                      "Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.\n\nPlease see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information."
                    );
              } catch (t) {
                console.error(
                  "Error checking Cross-Origin-Opener-Policy:",
                  t.message
                ),
                  (e = "error");
              }
            },
          };
        })();
      class tA {
        constructor({
          url: e = "https://keys.coinbase.com/connect",
          metadata: t,
          preference: n,
        }) {
          (this.popup = null),
            (this.listeners = new Map()),
            (this.postMessage = async (e) => {
              (await this.waitForPopupLoaded()).postMessage(e, this.url.origin);
            }),
            (this.postRequestAndWaitForResponse = async (e) => {
              let t = this.onMessage((t) => {
                let { requestId: n } = t;
                return n === e.id;
              });
              return this.postMessage(e), await t;
            }),
            (this.onMessage = async (e) =>
              new Promise((t, n) => {
                let s = (n) => {
                  if (n.origin !== this.url.origin) return;
                  let r = n.data;
                  e(r) &&
                    (t(r),
                    window.removeEventListener("message", s),
                    this.listeners.delete(s));
                };
                window.addEventListener("message", s),
                  this.listeners.set(s, { reject: n });
              })),
            (this.disconnect = () => {
              !(function (e) {
                e && !e.closed && e.close();
              })(this.popup),
                (this.popup = null),
                this.listeners.forEach((e, t) => {
                  let { reject: n } = e;
                  n(h.provider.userRejectedRequest("Request rejected")),
                    window.removeEventListener("message", t);
                }),
                this.listeners.clear();
            }),
            (this.waitForPopupLoaded = async () =>
              this.popup && !this.popup.closed
                ? (this.popup.focus(), this.popup)
                : ((this.popup = (function (e) {
                    let t = (window.innerWidth - 420) / 2 + window.screenX,
                      n = (window.innerHeight - 540) / 2 + window.screenY;
                    var s = e;
                    for (let [e, t] of Object.entries({
                      sdkName: J,
                      sdkVersion: G,
                      origin: window.location.origin,
                      coop: tM(),
                    }))
                      s.searchParams.append(e, t.toString());
                    let r = "wallet_".concat(crypto.randomUUID()),
                      i = window.open(
                        e,
                        r,
                        "width="
                          .concat(420, ", height=")
                          .concat(540, ", left=")
                          .concat(t, ", top=")
                          .concat(n)
                      );
                    if ((null == i || i.focus(), !i))
                      throw h.rpc.internal("Pop up window failed to open");
                    return i;
                  })(this.url)),
                  this.onMessage((e) => {
                    let { event: t } = e;
                    return "PopupUnload" === t;
                  })
                    .then(this.disconnect)
                    .catch(() => {}),
                  this.onMessage((e) => {
                    let { event: t } = e;
                    return "PopupLoaded" === t;
                  })
                    .then((e) => {
                      this.postMessage({
                        requestId: e.id,
                        data: {
                          version: G,
                          metadata: this.metadata,
                          preference: this.preference,
                          location: window.location.toString(),
                        },
                      });
                    })
                    .then(() => {
                      if (!this.popup) throw h.rpc.internal();
                      return this.popup;
                    }))),
            (this.url = new URL(e)),
            (this.metadata = t),
            (this.preference = n);
        }
      }
      var tL = e.i(95932);
      tL.default;
      var tP = tL;
      class tD extends tP.default {}
      var tN = function (e, t) {
        var n = {};
        for (var s in e)
          Object.prototype.hasOwnProperty.call(e, s) &&
            0 > t.indexOf(s) &&
            (n[s] = e[s]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var r = 0, s = Object.getOwnPropertySymbols(e);
            r < s.length;
            r++
          )
            0 > t.indexOf(s[r]) &&
              Object.prototype.propertyIsEnumerable.call(e, s[r]) &&
              (n[s[r]] = e[s[r]]);
        return n;
      };
      class tR extends tD {
        async request(e) {
          try {
            if (!e || "object" != typeof e || Array.isArray(e))
              throw h.rpc.invalidParams({
                message: "Expected a single, non-array, object argument.",
                data: e,
              });
            let { method: t, params: n } = e;
            if ("string" != typeof t || 0 === t.length)
              throw h.rpc.invalidParams({
                message: "'args.method' must be a non-empty string.",
                data: e,
              });
            if (
              void 0 !== n &&
              !Array.isArray(n) &&
              ("object" != typeof n || null === n)
            )
              throw h.rpc.invalidParams({
                message:
                  "'args.params' must be an object or array if provided.",
                data: e,
              });
            switch (t) {
              case "eth_sign":
              case "eth_signTypedData_v2":
              case "eth_subscribe":
              case "eth_unsubscribe":
                throw h.provider.unsupportedMethod();
            }
            if (!this.signer)
              switch (e.method) {
                case "eth_requestAccounts": {
                  let t = await this.requestSignerSelection(e),
                    n = this.initSigner(t);
                  await n.handshake(e), (this.signer = n), tE.setItem(tC, t);
                  break;
                }
                case "wallet_sendCalls": {
                  let t = this.initSigner("scw");
                  await t.handshake({ method: "handshake" });
                  let n = await t.request(e);
                  return await t.cleanup(), n;
                }
                case "wallet_getCallsStatus":
                  return Y(e, "http://rpc.wallet.coinbase.com");
                case "net_version":
                  return 1;
                case "eth_chainId":
                  return I(1);
                default:
                  throw h.provider.unauthorized(
                    "Must call 'eth_requestAccounts' before other methods"
                  );
              }
            return await this.signer.request(e);
          } catch (t) {
            let { code: e } = t;
            return (
              e === s.provider.unauthorized && this.disconnect(),
              Promise.reject(
                (function (e) {
                  let t = (function (e) {
                      var t, n;
                      let { shouldIncludeStack: h = !1 } =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        d = {};
                      if (
                        e &&
                        "object" == typeof e &&
                        !Array.isArray(e) &&
                        c(e, "code") &&
                        Number.isInteger((t = e.code)) &&
                        (r[t.toString()] || ((n = t) >= -32099 && n <= -32e3))
                      )
                        (d.code = e.code),
                          e.message && "string" == typeof e.message
                            ? ((d.message = e.message),
                              c(e, "data") && (d.data = e.data))
                            : ((d.message = a(d.code)),
                              (d.data = { originalError: o(e) }));
                      else
                        (d.code = s.rpc.internal),
                          (d.message = l(e, "message") ? e.message : i),
                          (d.data = { originalError: o(e) });
                      return (
                        h && (d.stack = l(e, "stack") ? e.stack : void 0), d
                      );
                    })(
                      (function (e) {
                        var t;
                        if ("string" == typeof e)
                          return { message: e, code: s.rpc.internal };
                        if (ei(e)) {
                          let n = e.errorMessage,
                            r =
                              null != (t = e.errorCode)
                                ? t
                                : n.match(/(denied|rejected)/i)
                                ? s.provider.userRejectedRequest
                                : void 0;
                          return Object.assign(Object.assign({}, e), {
                            message: n,
                            code: r,
                            data: { method: e.method },
                          });
                        }
                        return e;
                      })(e),
                      { shouldIncludeStack: !0 }
                    ),
                    n = new URL(
                      "https://docs.cloud.coinbase.com/wallet-sdk/docs/errors"
                    );
                  return (
                    n.searchParams.set("version", G),
                    n.searchParams.set("code", t.code.toString()),
                    n.searchParams.set("message", t.message),
                    Object.assign(Object.assign({}, t), { docUrl: n.href })
                  );
                })(t)
              )
            );
          }
        }
        async enable() {
          return (
            console.warn(
              '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
            ),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async disconnect() {
          var e;
          await (null == (e = this.signer) ? void 0 : e.cleanup()),
            (this.signer = null),
            t.clearAll(),
            this.emit(
              "disconnect",
              h.provider.disconnected("User initiated disconnection")
            );
        }
        requestSignerSelection(e) {
          return tI({
            communicator: this.communicator,
            preference: this.preference,
            metadata: this.metadata,
            handshakeRequest: e,
            callback: this.emit.bind(this),
          });
        }
        initSigner(e) {
          let {
            signerType: t,
            metadata: n,
            communicator: s,
            callback: r,
          } = {
            signerType: e,
            metadata: this.metadata,
            communicator: this.communicator,
            callback: this.emit.bind(this),
          };
          switch (t) {
            case "scw":
              return new en({ metadata: n, callback: r, communicator: s });
            case "walletlink":
              return new tk({ metadata: n, callback: r });
          }
        }
        constructor(e) {
          var { metadata: t } = e,
            n = e.preference,
            { keysUrl: s } = n,
            r = tN(n, ["keysUrl"]);
          super(),
            (this.signer = null),
            (this.isCoinbaseWallet = !0),
            (this.metadata = t),
            (this.preference = r),
            (this.communicator = new tA({
              url: s,
              metadata: t,
              preference: r,
            }));
          let i = tE.getItem(tC);
          i && (this.signer = this.initSigner(i));
        }
      }
      function tT(e) {
        if (e) {
          if (!["all", "smartWalletOnly", "eoaOnly"].includes(e.options))
            throw Error("Invalid options: ".concat(e.options));
          if (
            e.attribution &&
            void 0 !== e.attribution.auto &&
            void 0 !== e.attribution.dataSuffix
          )
            throw Error(
              "Attribution cannot contain both auto and dataSuffix properties"
            );
        }
      }
      class tj {
        makeWeb3Provider() {
          var e;
          let t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { options: "all" };
          tT(t);
          let n = { metadata: this.metadata, preference: t };
          return null != (e = Q(n)) ? e : new tR(n);
        }
        getCoinbaseWalletLogo(e) {
          let t,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 240;
          switch (e) {
            case "standard":
            default:
              return (
                (t = n),
                "data:image/svg+xml,%3Csvg width='"
                  .concat(n, "' height='")
                  .concat(
                    t,
                    "' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E "
                  )
              );
            case "circle":
              return (
                (t = n),
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"
                  .concat(n, "' height='")
                  .concat(
                    t,
                    "' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E"
                  )
              );
            case "text":
              return (
                (t = (0.1 * n).toFixed(2)),
                "data:image/svg+xml,%3Csvg width='"
                  .concat(n, "' height='")
                  .concat(
                    t,
                    "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E"
                  )
              );
            case "textWithLogo":
              return (
                (t = (0.25 * n).toFixed(2)),
                "data:image/svg+xml,%3Csvg width='"
                  .concat(n, "' height='")
                  .concat(
                    t,
                    "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E"
                  )
              );
            case "textLight":
              return (
                (t = (0.1 * n).toFixed(2)),
                "data:image/svg+xml,%3Csvg width='"
                  .concat(n, "' height='")
                  .concat(
                    t,
                    "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E"
                  )
              );
            case "textWithLogoLight":
              return (
                (t = (0.25 * n).toFixed(2)),
                "data:image/svg+xml,%3Csvg width='"
                  .concat(n, "' height='")
                  .concat(
                    t,
                    "' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E"
                  )
              );
          }
        }
        storeLatestVersion() {
          new t("CBWSDK").setItem("VERSION", G);
        }
        constructor(e) {
          (this.metadata = {
            appName: e.appName || "Dapp",
            appLogoUrl:
              e.appLogoUrl ||
              (function () {
                let e =
                    document.querySelector('link[sizes="192x192"]') ||
                    document.querySelector('link[sizes="180x180"]') ||
                    document.querySelector('link[rel="icon"]') ||
                    document.querySelector('link[rel="shortcut icon"]'),
                  { protocol: t, host: n } = document.location,
                  s = e ? e.getAttribute("href") : null;
                return !s ||
                  s.startsWith("javascript:") ||
                  s.startsWith("vbscript:")
                  ? "".concat(t, "//").concat(n, "/favicon.ico")
                  : s.startsWith("http://") ||
                    s.startsWith("https://") ||
                    s.startsWith("data:")
                  ? s
                  : s.startsWith("//")
                  ? t + s
                  : "".concat(t, "//").concat(n).concat(s);
              })(),
            appChainIds: e.appChainIds || [],
          }),
            this.storeLatestVersion(),
            tS();
        }
      }
      let tO = tj;
      e.s(
        {
          CoinbaseWalletSDK: () => tj,
          createCoinbaseWalletSDK: () => tW,
          default: () => tO,
        },
        432694
      );
      let tU = { options: "all" };
      function tW(e) {
        var n;
        new t("CBWSDK").setItem("VERSION", G), tS();
        let s = {
          metadata: {
            appName: e.appName || "Dapp",
            appLogoUrl: e.appLogoUrl || "",
            appChainIds: e.appChainIds || [],
          },
          preference: Object.assign(tU, null != (n = e.preference) ? n : {}),
        };
        tT(s.preference);
        let r = null;
        return {
          getProvider: () => (
            r ||
              (r = (function (e) {
                var t;
                let n = { metadata: e.metadata, preference: e.preference };
                return null != (t = Q(n)) ? t : new tR(n);
              })(s)),
            r
          ),
        };
      }
      e.i(205596), e.i(432694);
    },
  },
]);

//# sourceMappingURL=74b719ceecb67d0b.js.map
