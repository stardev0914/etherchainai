(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    590537: (e) => {
      "use strict";
      e.s({ OnRampController: () => f });
      var t = e.i(724233),
        r = e.i(873206),
        i = e.i(850524),
        n = e.i(940462),
        s = e.i(317687),
        o = e.i(592787),
        a = e.i(834245),
        l = e.i(17038),
        u = e.i(610411);
      let c = {
          id: "2b92315d-eab7-5bef-84fa-089a131333f5",
          name: "USD Coin",
          symbol: "USDC",
          networks: [
            {
              name: "ethereum-mainnet",
              display_name: "Ethereum",
              chain_id: "1",
              contract_address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            },
            {
              name: "polygon-mainnet",
              display_name: "Polygon",
              chain_id: "137",
              contract_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
            },
          ],
        },
        d = {
          id: "USD",
          payment_method_limits: [
            { id: "card", min: "10.00", max: "7500.00" },
            { id: "ach_bank_account", min: "10.00", max: "25000.00" },
          ],
        },
        h = {
          providers: n.ONRAMP_PROVIDERS,
          selectedProvider: null,
          error: null,
          purchaseCurrency: c,
          paymentCurrency: d,
          purchaseCurrencies: [c],
          paymentCurrencies: [],
          quotesLoading: !1,
        },
        g = (0, t.proxy)(h),
        f = (0, s.withErrorBoundary)({
          state: g,
          subscribe: (e) => (0, t.subscribe)(g, () => e(g)),
          subscribeKey: (e, t) => (0, r.subscribeKey)(g, e, t),
          setSelectedProvider(e) {
            if (e && "meld" === e.name) {
              var t;
              let r = l.ChainController.state.activeChain,
                s = r === i.ConstantsUtil.CHAIN.SOLANA ? "SOL" : "USDC",
                o =
                  null != (t = l.ChainController.getAccountProp("address", r))
                    ? t
                    : "",
                a = new URL(e.url);
              a.searchParams.append("publicKey", n.MELD_PUBLIC_KEY),
                a.searchParams.append("destinationCurrencyCode", s),
                a.searchParams.append("walletAddress", o),
                a.searchParams.append(
                  "externalCustomerId",
                  u.OptionsController.state.projectId
                ),
                (g.selectedProvider = { ...e, url: a.toString() });
            } else g.selectedProvider = e;
          },
          setOnrampProviders(e) {
            Array.isArray(e) && e.every((e) => "string" == typeof e)
              ? (g.providers = n.ONRAMP_PROVIDERS.filter((t) =>
                  e.includes(t.name)
                ))
              : (g.providers = []);
          },
          setPurchaseCurrency(e) {
            g.purchaseCurrency = e;
          },
          setPaymentCurrency(e) {
            g.paymentCurrency = e;
          },
          setPurchaseAmount(e) {
            f.state.purchaseAmount = e;
          },
          setPaymentAmount(e) {
            f.state.paymentAmount = e;
          },
          async getAvailableCurrencies() {
            let e = await a.BlockchainApiController.getOnrampOptions();
            (g.purchaseCurrencies = e.purchaseCurrencies),
              (g.paymentCurrencies = e.paymentCurrencies),
              (g.paymentCurrency = e.paymentCurrencies[0] || d),
              (g.purchaseCurrency = e.purchaseCurrencies[0] || c),
              await o.ApiController.fetchCurrencyImages(
                e.paymentCurrencies.map((e) => e.id)
              ),
              await o.ApiController.fetchTokenImages(
                e.purchaseCurrencies.map((e) => e.symbol)
              );
          },
          async getQuote() {
            g.quotesLoading = !0;
            try {
              var e, t;
              let r = await a.BlockchainApiController.getOnrampQuote({
                purchaseCurrency: g.purchaseCurrency,
                paymentCurrency: g.paymentCurrency,
                amount:
                  (null == (e = g.paymentAmount) ? void 0 : e.toString()) ||
                  "0",
                network: null == (t = g.purchaseCurrency) ? void 0 : t.symbol,
              });
              return (
                (g.quotesLoading = !1),
                (g.purchaseAmount = Number(
                  null == r ? void 0 : r.purchaseAmount.amount
                )),
                r
              );
            } catch (e) {
              return (g.error = e.message), (g.quotesLoading = !1), null;
            } finally {
              g.quotesLoading = !1;
            }
          },
          resetState() {
            (g.selectedProvider = null),
              (g.error = null),
              (g.purchaseCurrency = c),
              (g.paymentCurrency = d),
              (g.purchaseCurrencies = [c]),
              (g.paymentCurrencies = []),
              (g.paymentAmount = void 0),
              (g.purchaseAmount = void 0),
              (g.quotesLoading = !1);
          },
        });
    },
    674571: (e) => {
      "use strict";
      e.s({ ConstantsUtil: () => t });
      let t = {
        METMASK_CONNECTOR_NAME: "MetaMask",
        TRUST_CONNECTOR_NAME: "Trust Wallet",
        SOLFLARE_CONNECTOR_NAME: "Solflare",
        PHANTOM_CONNECTOR_NAME: "Phantom",
        COIN98_CONNECTOR_NAME: "Coin98",
        MAGIC_EDEN_CONNECTOR_NAME: "Magic Eden",
        BACKPACK_CONNECTOR_NAME: "Backpack",
        BITGET_CONNECTOR_NAME: "Bitget Wallet",
        FRONTIER_CONNECTOR_NAME: "Frontier",
        XVERSE_CONNECTOR_NAME: "Xverse Wallet",
        LEATHER_CONNECTOR_NAME: "Leather",
        EIP155: e.i(850524).ConstantsUtil.CHAIN.EVM,
        ADD_CHAIN_METHOD: "wallet_addEthereumChain",
        EIP6963_ANNOUNCE_EVENT: "eip6963:announceProvider",
        EIP6963_REQUEST_EVENT: "eip6963:requestProvider",
        CONNECTOR_RDNS_MAP: {
          coinbaseWallet: "com.coinbase.wallet",
          coinbaseWalletSDK: "com.coinbase.wallet",
        },
        CONNECTOR_TYPE_EXTERNAL: "EXTERNAL",
        CONNECTOR_TYPE_WALLET_CONNECT: "WALLET_CONNECT",
        CONNECTOR_TYPE_INJECTED: "INJECTED",
        CONNECTOR_TYPE_ANNOUNCED: "ANNOUNCED",
        CONNECTOR_TYPE_AUTH: "AUTH",
        CONNECTOR_TYPE_MULTI_CHAIN: "MULTI_CHAIN",
        CONNECTOR_TYPE_W3M_AUTH: "ID_AUTH",
      };
    },
    547982: (e) => {
      "use strict";
      e.s({ BaseError: () => i }, 547982);
      let t = "2.32.1",
        r = {
          getDocsUrl: (e) => {
            let { docsBaseUrl: t, docsPath: r = "", docsSlug: i } = e;
            return r
              ? ""
                  .concat(null != t ? t : "https://viem.sh")
                  .concat(r)
                  .concat(i ? "#".concat(i) : "")
              : void 0;
          },
          version: "viem@".concat(t),
        };
      class i extends Error {
        walk(e) {
          return (function e(t, r) {
            return (null == r ? void 0 : r(t))
              ? t
              : t && "object" == typeof t && "cause" in t && void 0 !== t.cause
              ? e(t.cause, r)
              : r
              ? null
              : t;
          })(this, e);
        }
        constructor(e, n = {}) {
          var s, o;
          let a = (() => {
              var e;
              return n.cause instanceof i
                ? n.cause.details
                : (null == (e = n.cause) ? void 0 : e.message)
                ? n.cause.message
                : n.details;
            })(),
            l = (n.cause instanceof i && n.cause.docsPath) || n.docsPath,
            u =
              null == (s = r.getDocsUrl)
                ? void 0
                : s.call(r, { ...n, docsPath: l });
          super(
            [
              e || "An error occurred.",
              "",
              ...(n.metaMessages ? [...n.metaMessages, ""] : []),
              ...(u ? ["Docs: ".concat(u)] : []),
              ...(a ? ["Details: ".concat(a)] : []),
              ...(r.version ? ["Version: ".concat(r.version)] : []),
            ].join("\n"),
            n.cause ? { cause: n.cause } : void 0
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
            (this.details = a),
            (this.docsPath = l),
            (this.metaMessages = n.metaMessages),
            (this.name = null != (o = n.name) ? o : this.name),
            (this.shortMessage = e),
            (this.version = t);
        }
      }
    },
    650312: (e) => {
      "use strict";
      e.s({ stringify: () => t });
      let t = (e, t, r) =>
        JSON.stringify(
          e,
          (e, r) => {
            let i = "bigint" == typeof r ? r.toString() : r;
            return "function" == typeof t ? t(e, i) : i;
          },
          r
        );
    },
    550164: (e) => {
      "use strict";
      e.s({
        IntegerOutOfRangeError: () => r,
        InvalidHexBooleanError: () => i,
        SizeOverflowError: () => n,
      });
      var t = e.i(547982);
      class r extends t.BaseError {
        constructor({ max: e, min: t, signed: r, size: i, value: n }) {
          super(
            'Number "'
              .concat(n, '" is not in safe ')
              .concat(
                i
                  ? ""
                      .concat(8 * i, "-bit ")
                      .concat(r ? "signed" : "unsigned", " ")
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
      t.BaseError;
      class i extends t.BaseError {
        constructor(e) {
          super(
            'Hex value "'.concat(
              e,
              '" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).'
            ),
            { name: "InvalidHexBooleanError" }
          );
        }
      }
      t.BaseError;
      class n extends t.BaseError {
        constructor({ givenSize: e, maxSize: t }) {
          super(
            "Size cannot exceed "
              .concat(t, " bytes. Given size: ")
              .concat(e, " bytes."),
            { name: "SizeOverflowError" }
          );
        }
      }
    },
    481899: [
      (e) => {
        "use strict";
        e.s({ pad: () => n, padHex: () => s }, 481899),
          e.s(
            {
              SizeExceedsPaddingSizeError: () => i,
              SliceOffsetOutOfBoundsError: () => r,
            },
            603606
          );
        var t = e.i(547982);
        class r extends t.BaseError {
          constructor({ offset: e, position: t, size: r }) {
            super(
              "Slice "
                .concat("start" === t ? "starting" : "ending", ' at offset "')
                .concat(e, '" is out-of-bounds (size: ')
                .concat(r, ")."),
              { name: "SliceOffsetOutOfBoundsError" }
            );
          }
        }
        class i extends t.BaseError {
          constructor({ size: e, targetSize: t, type: r }) {
            super(
              ""
                .concat(r.charAt(0).toUpperCase())
                .concat(r.slice(1).toLowerCase(), " size (")
                .concat(e, ") exceeds padding size (")
                .concat(t, ")."),
              { name: "SizeExceedsPaddingSizeError" }
            );
          }
        }
        function n(e) {
          let { dir: t, size: r = 32 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return "string" == typeof e
            ? s(e, { dir: t, size: r })
            : (function (e) {
                let { dir: t, size: r = 32 } =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                if (null === r) return e;
                if (e.length > r)
                  throw new i({ size: e.length, targetSize: r, type: "bytes" });
                let n = new Uint8Array(r);
                for (let i = 0; i < r; i++) {
                  let s = "right" === t;
                  n[s ? i : r - i - 1] = e[s ? i : e.length - i - 1];
                }
                return n;
              })(e, { dir: t, size: r });
        }
        function s(e) {
          let { dir: t, size: r = 32 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === r) return e;
          let n = e.replace("0x", "");
          if (n.length > 2 * r)
            throw new i({
              size: Math.ceil(n.length / 2),
              targetSize: r,
              type: "hex",
            });
          return "0x".concat(
            n["right" === t ? "padEnd" : "padStart"](2 * r, "0")
          );
        }
        t.BaseError;
      },
      [603606],
    ],
    300167: [
      (e) => {
        "use strict";
        function t(e) {
          let { strict: t = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (
            !!e &&
            "string" == typeof e &&
            (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
          );
        }
        function r(e) {
          return t(e, { strict: !1 })
            ? Math.ceil((e.length - 2) / 2)
            : e.length;
        }
        e.s({ size: () => r }, 300167), e.s({ isHex: () => t }, 685225);
      },
      [685225],
    ],
    80470: (e) => {
      "use strict";
      function t(e) {
        let { dir: t = "left" } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = "string" == typeof e ? e.replace("0x", "") : e,
          i = 0;
        for (let e = 0; e < r.length - 1; e++)
          if ("0" === r["left" === t ? e : r.length - e - 1].toString()) i++;
          else break;
        return ((r = "left" === t ? r.slice(i) : r.slice(0, r.length - i)),
        "string" == typeof e)
          ? (1 === r.length && "right" === t && (r = "".concat(r, "0")),
            "0x".concat(r.length % 2 == 1 ? "0".concat(r) : r))
          : r;
      }
      e.s({ trim: () => t });
    },
    657744: (e) => {
      "use strict";
      e.s({ hexToBytes: () => c, stringToBytes: () => d, toBytes: () => a });
      var t = e.i(547982),
        r = e.i(685225),
        i = e.i(481899),
        n = e.i(369587),
        s = e.i(960803);
      let o = new TextEncoder();
      function a(e) {
        var t, o;
        let a =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "number" == typeof e || "bigint" == typeof e
          ? ((t = e), (o = a), c((0, s.numberToHex)(t, o)))
          : "boolean" == typeof e
          ? (function (e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = new Uint8Array(1);
              return ((r[0] = Number(e)), "number" == typeof t.size)
                ? ((0, n.assertSize)(r, { size: t.size }),
                  (0, i.pad)(r, { size: t.size }))
                : r;
            })(e, a)
          : (0, r.isHex)(e)
          ? c(e, a)
          : d(e, a);
      }
      let l = { zero: 48, nine: 57, A: 65, F: 70, a: 97, f: 102 };
      function u(e) {
        return e >= l.zero && e <= l.nine
          ? e - l.zero
          : e >= l.A && e <= l.F
          ? e - (l.A - 10)
          : e >= l.a && e <= l.f
          ? e - (l.a - 10)
          : void 0;
      }
      function c(e) {
        let r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s = e;
        r.size &&
          ((0, n.assertSize)(s, { size: r.size }),
          (s = (0, i.pad)(s, { dir: "right", size: r.size })));
        let o = s.slice(2);
        o.length % 2 && (o = "0".concat(o));
        let a = o.length / 2,
          l = new Uint8Array(a);
        for (let e = 0, r = 0; e < a; e++) {
          let i = u(o.charCodeAt(r++)),
            n = u(o.charCodeAt(r++));
          if (void 0 === i || void 0 === n)
            throw new t.BaseError(
              'Invalid byte sequence ("'
                .concat(o[r - 2])
                .concat(o[r - 1], '" in "')
                .concat(o, '").')
            );
          l[e] = 16 * i + n;
        }
        return l;
      }
      function d(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = o.encode(e);
        return "number" == typeof t.size
          ? ((0, n.assertSize)(r, { size: t.size }),
            (0, i.pad)(r, { dir: "right", size: t.size }))
          : r;
      }
    },
    960803: [
      (e) => {
        "use strict";
        e.s(
          {
            boolToHex: () => a,
            bytesToHex: () => l,
            numberToHex: () => u,
            stringToHex: () => d,
            toHex: () => o,
          },
          960803
        );
        var t = e.i(550164),
          r = e.i(481899);
        e.s({ assertSize: () => n }, 369587);
        var i = e.i(300167);
        function n(e, r) {
          let { size: n } = r;
          if ((0, i.size)(e) > n)
            throw new t.SizeOverflowError({
              givenSize: (0, i.size)(e),
              maxSize: n,
            });
        }
        e.i(80470), e.i(657744);
        let s = Array.from({ length: 256 }, (e, t) =>
          t.toString(16).padStart(2, "0")
        );
        function o(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return "number" == typeof e || "bigint" == typeof e
            ? u(e, t)
            : "string" == typeof e
            ? d(e, t)
            : "boolean" == typeof e
            ? a(e, t)
            : l(e, t);
        }
        function a(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            i = "0x".concat(Number(e));
          return "number" == typeof t.size
            ? (n(i, { size: t.size }), (0, r.pad)(i, { size: t.size }))
            : i;
        }
        function l(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            i = "";
          for (let t = 0; t < e.length; t++) i += s[e[t]];
          let o = "0x".concat(i);
          return "number" == typeof t.size
            ? (n(o, { size: t.size }),
              (0, r.pad)(o, { dir: "right", size: t.size }))
            : o;
        }
        function u(e) {
          let i,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { signed: s, size: o } = n,
            a = BigInt(e);
          o
            ? (i = s
                ? (1n << (8n * BigInt(o) - 1n)) - 1n
                : 2n ** (8n * BigInt(o)) - 1n)
            : "number" == typeof e && (i = BigInt(Number.MAX_SAFE_INTEGER));
          let l = "bigint" == typeof i && s ? -i - 1n : 0;
          if ((i && a > i) || a < l) {
            let r = "bigint" == typeof e ? "n" : "";
            throw new t.IntegerOutOfRangeError({
              max: i ? "".concat(i).concat(r) : void 0,
              min: "".concat(l).concat(r),
              signed: s,
              size: o,
              value: "".concat(e).concat(r),
            });
          }
          let u = "0x".concat(
            (s && a < 0 ? (1n << BigInt(8 * o)) + BigInt(a) : a).toString(16)
          );
          return o ? (0, r.pad)(u, { size: o }) : u;
        }
        let c = new TextEncoder();
        function d(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return l(c.encode(e), t);
        }
      },
      [369587],
    ],
    480037: (e) => {
      "use strict";
      e.s({ LruMap: () => t });
      class t extends Map {
        get(e) {
          let t = super.get(e);
          return (
            super.has(e) && void 0 !== t && (this.delete(e), super.set(e, t)), t
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
    },
    196779: [
      (e) => {
        "use strict";
        e.s({ W3mFrameHelpers: () => n }, 196779);
        let t = {
          transactionHash: /^0x(?:[A-Fa-f0-9]{64})$/u,
          signedMessage: /^0x(?:[a-fA-F0-9]{62,})$/u,
        };
        var r = e.i(664572);
        e.s({ W3mFrameStorage: () => i }, 554988);
        let i = {
            set(e, t) {
              n.isClient &&
                localStorage.setItem(
                  "".concat(r.W3mFrameConstants.STORAGE_KEY).concat(e),
                  t
                );
            },
            get: (e) =>
              n.isClient
                ? localStorage.getItem(
                    "".concat(r.W3mFrameConstants.STORAGE_KEY).concat(e)
                  )
                : null,
            delete(e, t) {
              n.isClient &&
                (t
                  ? localStorage.removeItem(e)
                  : localStorage.removeItem(
                      "".concat(r.W3mFrameConstants.STORAGE_KEY).concat(e)
                    ));
            },
          },
          n = {
            checkIfAllowedToTriggerEmail() {
              let e = i.get(r.W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);
              if (e) {
                let t = Date.now() - Number(e);
                if (t < 3e4) {
                  let e = Math.ceil((3e4 - t) / 1e3);
                  throw Error("Please try again after ".concat(e, " seconds"));
                }
              }
            },
            getTimeToNextEmailLogin() {
              let e = i.get(r.W3mFrameConstants.LAST_EMAIL_LOGIN_TIME);
              if (e) {
                let t = Date.now() - Number(e);
                if (t < 3e4) return Math.ceil((3e4 - t) / 1e3);
              }
              return 0;
            },
            checkIfRequestExists: (e) =>
              r.W3mFrameRpcConstants.NOT_SAFE_RPC_METHODS.includes(e.method) ||
              r.W3mFrameRpcConstants.SAFE_RPC_METHODS.includes(e.method),
            getResponseType: (e) =>
              "string" == typeof e &&
              ((null == e ? void 0 : e.match(t.transactionHash)) ||
                (null == e ? void 0 : e.match(t.signedMessage)))
                ? r.W3mFrameConstants.RPC_RESPONSE_TYPE_TX
                : r.W3mFrameConstants.RPC_RESPONSE_TYPE_OBJECT,
            checkIfRequestIsSafe: (e) =>
              r.W3mFrameRpcConstants.SAFE_RPC_METHODS.includes(e.method),
            isClient: "undefined" != typeof window,
          };
      },
      [554988],
    ],
    160115: (e) => {
      "use strict";
      var { m: t, e: r } = e;
      function i(e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return '"[Circular]"';
        }
      }
      t.exports = function (e, t, r) {
        var n = (r && r.stringify) || i;
        if ("object" == typeof e && null !== e) {
          var s = t.length + 1;
          if (1 === s) return e;
          var o = Array(s);
          o[0] = n(e);
          for (var a = 1; a < s; a++) o[a] = n(t[a]);
          return o.join(" ");
        }
        if ("string" != typeof e) return e;
        var l = t.length;
        if (0 === l) return e;
        for (
          var u = "", c = 0, d = -1, h = (e && e.length) || 0, g = 0;
          g < h;

        ) {
          if (37 === e.charCodeAt(g) && g + 1 < h) {
            switch (((d = d > -1 ? d : 0), e.charCodeAt(g + 1))) {
              case 100:
              case 102:
                if (c >= l || null == t[c]) break;
                d < g && (u += e.slice(d, g)),
                  (u += Number(t[c])),
                  (d = g + 2),
                  g++;
                break;
              case 105:
                if (c >= l || null == t[c]) break;
                d < g && (u += e.slice(d, g)),
                  (u += Math.floor(Number(t[c]))),
                  (d = g + 2),
                  g++;
                break;
              case 79:
              case 111:
              case 106:
                if (c >= l || void 0 === t[c]) break;
                d < g && (u += e.slice(d, g));
                var f = typeof t[c];
                if ("string" === f) {
                  (u += "'" + t[c] + "'"), (d = g + 2), g++;
                  break;
                }
                if ("function" === f) {
                  (u += t[c].name || "<anonymous>"), (d = g + 2), g++;
                  break;
                }
                (u += n(t[c])), (d = g + 2), g++;
                break;
              case 115:
                if (c >= l) break;
                d < g && (u += e.slice(d, g)),
                  (u += String(t[c])),
                  (d = g + 2),
                  g++;
                break;
              case 37:
                d < g && (u += e.slice(d, g)),
                  (u += "%"),
                  (d = g + 2),
                  g++,
                  c--;
            }
            ++c;
          }
          ++g;
        }
        return -1 === d ? e : (d < h && (u += e.slice(d)), u);
      };
    },
    151832: (e) => {
      "use strict";
      var { m: t, e: r } = e;
      {
        let r = e.r(160115);
        t.exports = i;
        let g =
          (function () {
            function e(e) {
              return void 0 !== e && e;
            }
            try {
              if ("undefined" != typeof globalThis) return globalThis;
              return (
                Object.defineProperty(Object.prototype, "globalThis", {
                  get: function () {
                    return (
                      delete Object.prototype.globalThis,
                      (this.globalThis = this)
                    );
                  },
                  configurable: !0,
                }),
                globalThis
              );
            } catch (t) {
              return e(self) || e(window) || e(this) || {};
            }
          })().console || {};
        function i(e) {
          var t, r;
          (e = e || {}).browser = e.browser || {};
          let l = e.browser.transmit;
          if (l && "function" != typeof l.send)
            throw Error("pino: transmit option must have a send function");
          let u = e.browser.write || g;
          e.browser.write && (e.browser.asObject = !0);
          let f = e.serializers || {},
            m =
              ((t = e.browser.serialize),
              Array.isArray(t)
                ? t.filter(function (e) {
                    return "!stdSerializers.err" !== e;
                  })
                : !0 === t && Object.keys(f)),
            v = e.browser.serialize;
          Array.isArray(e.browser.serialize) &&
            e.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
            (v = !1),
            "function" == typeof u &&
              (u.error = u.fatal = u.warn = u.info = u.debug = u.trace = u),
            !1 === e.enabled && (e.level = "silent");
          let p = e.level || "info",
            b = Object.create(u);
          b.log || (b.log = c),
            Object.defineProperty(b, "levelVal", {
              get: function () {
                return "silent" === this.level
                  ? 1 / 0
                  : this.levels.values[this.level];
              },
            }),
            Object.defineProperty(b, "level", {
              get: function () {
                return this._level;
              },
              set: function (e) {
                if ("silent" !== e && !this.levels.values[e])
                  throw Error("unknown level " + e);
                (this._level = e),
                  n(E, b, "error", "log"),
                  n(E, b, "fatal", "error"),
                  n(E, b, "warn", "error"),
                  n(E, b, "info", "log"),
                  n(E, b, "debug", "log"),
                  n(E, b, "trace", "log");
              },
            });
          let E = {
            transmit: l,
            serialize: m,
            asObject: e.browser.asObject,
            levels: ["error", "fatal", "warn", "info", "debug", "trace"],
            timestamp:
              "function" == typeof (r = e).timestamp
                ? r.timestamp
                : !1 === r.timestamp
                ? d
                : h,
          };
          return (
            (b.levels = i.levels),
            (b.level = p),
            (b.setMaxListeners =
              b.getMaxListeners =
              b.emit =
              b.addListener =
              b.on =
              b.prependListener =
              b.once =
              b.prependOnceListener =
              b.removeListener =
              b.removeAllListeners =
              b.listeners =
              b.listenerCount =
              b.eventNames =
              b.write =
              b.flush =
                c),
            (b.serializers = f),
            (b._serialize = m),
            (b._stdErrSerialize = v),
            (b.child = function (t, r) {
              if (!t) throw Error("missing bindings for child Pino");
              (r = r || {}),
                m && t.serializers && (r.serializers = t.serializers);
              let i = r.serializers;
              if (m && i) {
                var n = Object.assign({}, f, i),
                  u = !0 === e.browser.serialize ? Object.keys(n) : m;
                delete t.serializers, s([t], u, n, this._stdErrSerialize);
              }
              function c(e) {
                (this._childLevel = (0 | e._childLevel) + 1),
                  (this.error = o(e, t, "error")),
                  (this.fatal = o(e, t, "fatal")),
                  (this.warn = o(e, t, "warn")),
                  (this.info = o(e, t, "info")),
                  (this.debug = o(e, t, "debug")),
                  (this.trace = o(e, t, "trace")),
                  n && ((this.serializers = n), (this._serialize = u)),
                  l && (this._logEvent = a([].concat(e._logEvent.bindings, t)));
              }
              return (c.prototype = this), new c(this);
            }),
            l && (b._logEvent = a()),
            b
          );
        }
        function n(e, t, n, o) {
          let l = Object.getPrototypeOf(t);
          (t[n] =
            t.levelVal > t.levels.values[n]
              ? c
              : l[n]
              ? l[n]
              : g[n] || g[o] || c),
            (function (e, t, n) {
              if (e.transmit || t[n] !== c) {
                var o;
                t[n] =
                  ((o = t[n]),
                  function () {
                    let l = e.timestamp(),
                      u = Array(arguments.length),
                      c =
                        Object.getPrototypeOf &&
                        Object.getPrototypeOf(this) === g
                          ? g
                          : this;
                    for (var d = 0; d < u.length; d++) u[d] = arguments[d];
                    if (
                      (e.serialize &&
                        !e.asObject &&
                        s(
                          u,
                          this._serialize,
                          this.serializers,
                          this._stdErrSerialize
                        ),
                      e.asObject
                        ? o.call(
                            c,
                            (function (e, t, n, o) {
                              e._serialize &&
                                s(
                                  n,
                                  e._serialize,
                                  e.serializers,
                                  e._stdErrSerialize
                                );
                              let a = n.slice(),
                                l = a[0],
                                u = {};
                              o && (u.time = o), (u.level = i.levels.values[t]);
                              let c = (0 | e._childLevel) + 1;
                              if (
                                (c < 1 && (c = 1),
                                null !== l && "object" == typeof l)
                              ) {
                                for (; c-- && "object" == typeof a[0]; )
                                  Object.assign(u, a.shift());
                                l = a.length ? r(a.shift(), a) : void 0;
                              } else
                                "string" == typeof l && (l = r(a.shift(), a));
                              return void 0 !== l && (u.msg = l), u;
                            })(this, n, u, l)
                          )
                        : o.apply(c, u),
                      e.transmit)
                    ) {
                      let r = e.transmit.level || t.level,
                        o = i.levels.values[r],
                        c = i.levels.values[n];
                      if (c < o) return;
                      !(function (e, t, r) {
                        let i = t.send,
                          n = t.ts,
                          o = t.methodLevel,
                          l = t.methodValue,
                          u = t.val,
                          c = e._logEvent.bindings;
                        s(
                          r,
                          e._serialize || Object.keys(e.serializers),
                          e.serializers,
                          void 0 === e._stdErrSerialize || e._stdErrSerialize
                        ),
                          (e._logEvent.ts = n),
                          (e._logEvent.messages = r.filter(function (e) {
                            return -1 === c.indexOf(e);
                          })),
                          (e._logEvent.level.label = o),
                          (e._logEvent.level.value = l),
                          i(o, e._logEvent, u),
                          (e._logEvent = a(c));
                      })(
                        this,
                        {
                          ts: l,
                          methodLevel: n,
                          methodValue: c,
                          transmitLevel: r,
                          transmitValue:
                            i.levels.values[e.transmit.level || t.level],
                          send: e.transmit.send,
                          val: t.levelVal,
                        },
                        u
                      );
                    }
                  });
              }
            })(e, t, n);
        }
        function s(e, t, r, n) {
          for (let s in e)
            if (n && e[s] instanceof Error) e[s] = i.stdSerializers.err(e[s]);
            else if ("object" == typeof e[s] && !Array.isArray(e[s]))
              for (let i in e[s])
                t && t.indexOf(i) > -1 && i in r && (e[s][i] = r[i](e[s][i]));
        }
        function o(e, t, r) {
          return function () {
            let i = Array(1 + arguments.length);
            i[0] = t;
            for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
            return e[r].apply(this, i);
          };
        }
        function a(e) {
          return {
            ts: 0,
            messages: [],
            bindings: e || [],
            level: { label: "", value: 0 },
          };
        }
        function l() {
          return {};
        }
        function u(e) {
          return e;
        }
        function c() {}
        function d() {
          return !1;
        }
        function h() {
          return Date.now();
        }
        (i.levels = {
          values: {
            fatal: 60,
            error: 50,
            warn: 40,
            info: 30,
            debug: 20,
            trace: 10,
          },
          labels: {
            10: "trace",
            20: "debug",
            30: "info",
            40: "warn",
            50: "error",
            60: "fatal",
          },
        }),
          (i.stdSerializers = {
            mapHttpRequest: l,
            mapHttpResponse: l,
            wrapRequestSerializer: u,
            wrapResponseSerializer: u,
            wrapErrorSerializer: u,
            req: l,
            res: l,
            err: function (e) {
              let t = {
                type: e.constructor.name,
                msg: e.message,
                stack: e.stack,
              };
              for (let r in e) void 0 === t[r] && (t[r] = e[r]);
              return t;
            },
          }),
          (i.stdTimeFunctions = Object.assign(
            {},
            {
              nullTime: d,
              epochTime: h,
              unixTime: function () {
                return Math.round(Date.now() / 1e3);
              },
              isoTime: function () {
                return new Date(Date.now()).toISOString();
              },
            }
          ));
      }
    },
    959658: [
      (e) => {
        "use strict";
        e.s({}, 959658);
        var t = e.i(151832);
        function r(e) {
          if ("string" != typeof e)
            throw Error(
              "Cannot safe json parse value of type ".concat(typeof e)
            );
          try {
            return JSON.parse(
              e.replace(
                /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
                '$1"$2n"$3'
              ),
              (e, t) =>
                "string" == typeof t && t.match(/^\d+n$/)
                  ? BigInt(t.substring(0, t.length - 1))
                  : t
            );
          } catch (t) {
            return e;
          }
        }
        function i(e) {
          return "string" == typeof e
            ? e
            : JSON.stringify(e, (e, t) =>
                "bigint" == typeof t ? t.toString() + "n" : t
              ) || "";
        }
        e.s({ safeJsonParse: () => r, safeJsonStringify: () => i }, 422066),
          e.s(
            {
              generateChildLogger: () => w,
              generatePlatformLogger: () => C,
              getDefaultLoggerOptions: () => _,
              getLoggerContext: () => y,
            },
            500006
          );
        let n = { level: "info" },
          s = "custom_context";
        class o {
          get value() {
            return this.nodeValue;
          }
          get size() {
            return this.sizeInBytes;
          }
          constructor(e) {
            (this.nodeValue = e),
              (this.sizeInBytes = new TextEncoder().encode(
                this.nodeValue
              ).length),
              (this.next = null);
          }
        }
        class a {
          append(e) {
            let t = new o(e);
            if (t.size > this.maxSizeInBytes)
              throw Error(
                "[LinkedList] Value too big to insert into list: "
                  .concat(e, " with size ")
                  .concat(t.size)
              );
            for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
            this.head ? this.tail && (this.tail.next = t) : (this.head = t),
              (this.tail = t),
              this.lengthInNodes++,
              (this.sizeInBytes += t.size);
          }
          shift() {
            if (!this.head) return;
            let e = this.head;
            (this.head = this.head.next),
              this.head || (this.tail = null),
              this.lengthInNodes--,
              (this.sizeInBytes -= e.size);
          }
          toArray() {
            let e = [],
              t = this.head;
            for (; null !== t; ) e.push(t.value), (t = t.next);
            return e;
          }
          get length() {
            return this.lengthInNodes;
          }
          get size() {
            return this.sizeInBytes;
          }
          toOrderedArray() {
            return Array.from(this);
          }
          [Symbol.iterator]() {
            let e = this.head;
            return {
              next: () => {
                if (!e) return { done: !0, value: null };
                let t = e.value;
                return (e = e.next), { done: !1, value: t };
              },
            };
          }
          constructor(e) {
            (this.head = null),
              (this.tail = null),
              (this.lengthInNodes = 0),
              (this.maxSizeInBytes = e),
              (this.sizeInBytes = 0);
          }
        }
        class l {
          forwardToConsole(e, r) {
            r === t.levels.values.error
              ? console.error(e)
              : r === t.levels.values.warn
              ? console.warn(e)
              : r === t.levels.values.debug
              ? console.debug(e)
              : r === t.levels.values.trace
              ? console.trace(e)
              : console.log(e);
          }
          appendToLogs(e) {
            this.logs.append(
              i({ timestamp: new Date().toISOString(), log: e })
            );
            let t = "string" == typeof e ? JSON.parse(e).level : e.level;
            t >= this.levelValue && this.forwardToConsole(e, t);
          }
          getLogs() {
            return this.logs;
          }
          clearLogs() {
            this.logs = new a(this.MAX_LOG_SIZE_IN_BYTES);
          }
          getLogArray() {
            return Array.from(this.logs);
          }
          logsToBlob(e) {
            let t = this.getLogArray();
            return (
              t.push(i({ extraMetadata: e })),
              new Blob(t, { type: "application/json" })
            );
          }
          constructor(e, r = 1024e3) {
            (this.level = null != e ? e : "error"),
              (this.levelValue = t.levels.values[this.level]),
              (this.MAX_LOG_SIZE_IN_BYTES = r),
              (this.logs = new a(this.MAX_LOG_SIZE_IN_BYTES));
          }
        }
        class u {
          write(e) {
            this.baseChunkLogger.appendToLogs(e);
          }
          getLogs() {
            return this.baseChunkLogger.getLogs();
          }
          clearLogs() {
            this.baseChunkLogger.clearLogs();
          }
          getLogArray() {
            return this.baseChunkLogger.getLogArray();
          }
          logsToBlob(e) {
            return this.baseChunkLogger.logsToBlob(e);
          }
          downloadLogsBlobInBrowser(e) {
            let t = URL.createObjectURL(this.logsToBlob(e)),
              r = document.createElement("a");
            (r.href = t),
              (r.download = "walletconnect-logs-".concat(
                new Date().toISOString(),
                ".txt"
              )),
              document.body.appendChild(r),
              r.click(),
              document.body.removeChild(r),
              URL.revokeObjectURL(t);
          }
          constructor(e, t = 1024e3) {
            this.baseChunkLogger = new l(e, t);
          }
        }
        class c {
          write(e) {
            this.baseChunkLogger.appendToLogs(e);
          }
          getLogs() {
            return this.baseChunkLogger.getLogs();
          }
          clearLogs() {
            this.baseChunkLogger.clearLogs();
          }
          getLogArray() {
            return this.baseChunkLogger.getLogArray();
          }
          logsToBlob(e) {
            return this.baseChunkLogger.logsToBlob(e);
          }
          constructor(e, t = 1024e3) {
            this.baseChunkLogger = new l(e, t);
          }
        }
        var d = Object.defineProperty,
          h = Object.defineProperties,
          g = Object.getOwnPropertyDescriptors,
          f = Object.getOwnPropertySymbols,
          m = Object.prototype.hasOwnProperty,
          v = Object.prototype.propertyIsEnumerable,
          p = (e, t, r) =>
            t in e
              ? d(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (e[t] = r),
          b = (e, t) => {
            for (var r in t || (t = {})) m.call(t, r) && p(e, r, t[r]);
            if (f) for (var r of f(t)) v.call(t, r) && p(e, r, t[r]);
            return e;
          },
          E = (e, t) => h(e, g(t));
        function _(e) {
          return E(b({}, e), {
            level: (null == e ? void 0 : e.level) || n.level,
          });
        }
        function y(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
          return typeof e.bindings > "u"
            ? (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : s;
                return e[t] || "";
              })(e, t)
            : e.bindings().context || "";
        }
        function w(e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : s,
            i = (function (e, t) {
              let r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : s,
                i = y(e, r);
              return i.trim() ? "".concat(i, "/").concat(t) : t;
            })(e, t, r);
          return (function (e, t) {
            let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : s;
            return (e[r] = t), e;
          })(e.child({ context: i }), i, r);
        }
        function C(e) {
          return "u" > typeof e.loggerOverride &&
            "string" != typeof e.loggerOverride
            ? { logger: e.loggerOverride, chunkLoggerController: null }
            : "u" > typeof window
            ? (function (e) {
                var r, i;
                let n = new u(
                  null == (r = e.opts) ? void 0 : r.level,
                  e.maxSizeInBytes
                );
                return {
                  logger: (0, t.default)(
                    E(b({}, e.opts), {
                      level: "trace",
                      browser: E(
                        b({}, null == (i = e.opts) ? void 0 : i.browser),
                        { write: (e) => n.write(e) }
                      ),
                    })
                  ),
                  chunkLoggerController: n,
                };
              })(e)
            : (function (e) {
                var r;
                let i = new c(
                  null == (r = e.opts) ? void 0 : r.level,
                  e.maxSizeInBytes
                );
                return {
                  logger: (0, t.default)(
                    E(b({}, e.opts), { level: "trace" }),
                    i
                  ),
                  chunkLoggerController: i,
                };
              })(e);
        }
      },
      [422066, 500006],
    ],
    597304: (e) => {
      "use strict";
      e.s({ ConstantsUtil: () => r });
      var t = e.i(922271);
      let r = {
        ACCOUNT_TABS: [
          { label: "Tokens" },
          { label: "NFTs" },
          { label: "Activity" },
        ],
        SECURE_SITE_ORIGIN:
          (void 0 !== t.default && void 0 !== t.default.env
            ? t.default.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN
            : void 0) || "https://secure.walletconnect.org",
        VIEW_DIRECTION: { Next: "next", Prev: "prev" },
        DEFAULT_CONNECT_METHOD_ORDER: ["email", "social", "wallet"],
        ANIMATION_DURATIONS: {
          HeaderText: 120,
          ModalHeight: 150,
          ViewTransition: 150,
        },
      };
    },
    392816: (e) => {
      "use strict";
      e.s({ ErrorUtil: () => t });
      let t = {
        EmbeddedWalletAbortController: new AbortController(),
        UniversalProviderErrors: {
          UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
            message: "Unauthorized: origin not allowed",
            alertErrorKey: "ORIGIN_NOT_ALLOWED",
          },
          JWT_VALIDATION_ERROR: {
            message: "JWT validation error: JWT Token is not yet valid",
            alertErrorKey: "JWT_TOKEN_NOT_VALID",
          },
          INVALID_KEY: {
            message: "Unauthorized: invalid key",
            alertErrorKey: "INVALID_PROJECT_ID",
          },
        },
        ALERT_ERRORS: {
          SWITCH_NETWORK_NOT_FOUND: {
            shortMessage: "Network Not Found",
            longMessage:
              "Network not found. Please make sure it is included in 'networks' array in createAppKit function.",
          },
          ORIGIN_NOT_ALLOWED: {
            shortMessage: "Origin Not Allowed",
            longMessage: () =>
              "🔧 Origin ".concat(
                "undefined" != typeof window ? window.origin : "unknown",
                " not found on allow list. Please update your project configurations on dashboard.reown.com."
              ),
          },
          IFRAME_LOAD_FAILED: {
            shortMessage: "Network Error - Could not load embedded wallet",
            longMessage: () =>
              "There was an issue loading the embedded wallet. Please try again later.",
          },
          IFRAME_REQUEST_TIMEOUT: {
            shortMessage: "Embedded Wallet Request Timed Out",
            longMessage: () =>
              "There was an issue doing the request to the embedded wallet. Please try again later.",
          },
          UNVERIFIED_DOMAIN: {
            shortMessage: "Unverified Domain",
            longMessage: () =>
              "There was an issue loading the embedded wallet. Please verify that your domain is allowed at dashboard.reown.com.",
          },
          JWT_TOKEN_NOT_VALID: {
            shortMessage: "Session Expired",
            longMessage:
              "Invalid session found on UniversalProvider. Please check your time settings and connect again.",
          },
          INVALID_PROJECT_ID: {
            shortMessage: "Invalid Project ID",
            longMessage:
              "The project ID is invalid. Visit dashboard.reown.com to get a new one.",
          },
          PROJECT_ID_NOT_CONFIGURED: {
            shortMessage: "Project ID Not Configured",
            longMessage:
              "Project ID Not Configured. Please update your project configurations on dashboard.reown.com.",
          },
          SERVER_ERROR_APP_CONFIGURATION: {
            shortMessage: "Server Error",
            longMessage: (e) =>
              "Failed to get App Configuration ".concat(e || ""),
          },
          RATE_LIMITED_APP_CONFIGURATION: {
            shortMessage: "Rate Limited",
            longMessage:
              "Rate limited when trying to get the App Configuration",
          },
        },
      };
    },
    932710: (e) => {
      "use strict";
      e.s({ ProviderUtil: () => s });
      var t = e.i(724233),
        r = e.i(873206);
      let i = {
          eip155: void 0,
          solana: void 0,
          polkadot: void 0,
          bip122: void 0,
          cosmos: void 0,
        },
        n = (0, t.proxy)({ providers: { ...i }, providerIds: { ...i } }),
        s = {
          state: n,
          subscribeKey: (e, t) => (0, r.subscribeKey)(n, e, t),
          subscribe: (e) =>
            (0, t.subscribe)(n, () => {
              e(n);
            }),
          subscribeProviders: (e) =>
            (0, t.subscribe)(n.providers, () => e(n.providers)),
          setProvider(e, r) {
            e && r && (n.providers[e] = (0, t.ref)(r));
          },
          getProvider(e) {
            if (e) return n.providers[e];
          },
          setProviderId(e, t) {
            t && (n.providerIds[e] = t);
          },
          getProviderId(e) {
            if (e) return n.providerIds[e];
          },
          reset() {
            (n.providers = { ...i }), (n.providerIds = { ...i });
          },
          resetChain(e) {
            (n.providers[e] = void 0), (n.providerIds[e] = void 0);
          },
        };
    },
    354: (e) => {
      "use strict";
      e.s({ EnsController: () => g }, 354);
      var t = e.i(724233),
        r = e.i(873206);
      let i = {
        convertEVMChainIdToCoinType(e) {
          if (e >= 0x80000000) throw Error("Invalid chainId");
          return (0x80000000 | e) >>> 0;
        },
      };
      var n = e.i(55931),
        s = e.i(317687),
        o = e.i(868263),
        a = e.i(834245),
        l = e.i(17038),
        u = e.i(659863),
        c = e.i(936598),
        d = e.i(981824);
      let h = (0, t.proxy)({ suggestions: [], loading: !1 }),
        g = (0, s.withErrorBoundary)({
          state: h,
          subscribe: (e) => (0, t.subscribe)(h, () => e(h)),
          subscribeKey: (e, t) => (0, r.subscribeKey)(h, e, t),
          async resolveName(e) {
            try {
              return await a.BlockchainApiController.lookupEnsName(e);
            } catch (e) {
              var t, r;
              throw Error(
                (null == e || null == (r = e.reasons) || null == (t = r[0])
                  ? void 0
                  : t.description) || "Error resolving name"
              );
            }
          },
          async isNameRegistered(e) {
            try {
              return await a.BlockchainApiController.lookupEnsName(e), !0;
            } catch (e) {
              return !1;
            }
          },
          async getSuggestions(e) {
            try {
              return (
                (h.loading = !0),
                (h.suggestions = []),
                (h.suggestions =
                  (
                    await a.BlockchainApiController.getEnsNameSuggestions(e)
                  ).suggestions.map((e) => ({ ...e, name: e.name })) || []),
                h.suggestions
              );
            } catch (e) {
              throw Error(
                g.parseEnsApiError(e, "Error fetching name suggestions")
              );
            } finally {
              h.loading = !1;
            }
          },
          async getNamesForAddress(e) {
            try {
              if (!l.ChainController.state.activeCaipNetwork) return [];
              let t = n.StorageUtil.getEnsFromCacheForAddress(e);
              if (t) return t;
              let r = await a.BlockchainApiController.reverseLookupEnsName({
                address: e,
              });
              return (
                n.StorageUtil.updateEnsCache({
                  address: e,
                  ens: r,
                  timestamp: Date.now(),
                }),
                r
              );
            } catch (e) {
              throw Error(
                g.parseEnsApiError(e, "Error fetching names for address")
              );
            }
          },
          async registerName(e) {
            let t = l.ChainController.state.activeCaipNetwork,
              r = o.AccountController.state.address,
              n = c.ConnectorController.getAuthConnector();
            if (!t) throw Error("Network not found");
            if (!r || !n) throw Error("Address or auth connector not found");
            h.loading = !0;
            try {
              let n = JSON.stringify({
                name: e,
                attributes: {},
                timestamp: Math.floor(Date.now() / 1e3),
              });
              d.RouterController.pushTransactionStack({
                onCancel() {
                  d.RouterController.replace("RegisterAccountName");
                },
              });
              let s = await u.ConnectionController.signMessage(n);
              h.loading = !1;
              let l = t.id;
              if (!l) throw Error("Network not found");
              let c = i.convertEVMChainIdToCoinType(Number(l));
              await a.BlockchainApiController.registerEnsName({
                coinType: c,
                address: r,
                signature: s,
                message: n,
              }),
                o.AccountController.setProfileName(e, t.chainNamespace),
                d.RouterController.replace("RegisterAccountNameSuccess");
            } catch (r) {
              let t = g.parseEnsApiError(
                r,
                "Error registering name ".concat(e)
              );
              throw (
                (d.RouterController.replace("RegisterAccountName"), Error(t))
              );
            } finally {
              h.loading = !1;
            }
          },
          validateName: (e) => /^[a-zA-Z0-9-]{4,}$/u.test(e),
          parseEnsApiError(e, t) {
            var r, i;
            return (
              (null == e || null == (i = e.reasons) || null == (r = i[0])
                ? void 0
                : r.description) || t
            );
          },
        });
    },
    358271: [
      (e) => {
        "use strict";
        e.s(
          {
            formatEther: () => D,
            formatUnits: () => B,
            parseEther: () => F,
            parseUnits: () => U,
          },
          358271
        );
        var t = e.i(13517);
        e.s({ FixedNumber: () => S }, 30351);
        var r = e.i(300522),
          i = e.i(216788),
          n = e.i(725039),
          s = e.i(52992),
          o = e.i(153525),
          a = e.i(825285),
          l = e.i(713514),
          u = e.i(219223),
          c = e.i(551749);
        let d = BigInt(-1),
          h = BigInt(0),
          g = BigInt(1),
          f = BigInt(5),
          m = {},
          v = "0000";
        for (; v.length < 80; ) v += v;
        function p(e) {
          let t = v;
          for (; t.length < e; ) t += t;
          return BigInt("1" + t.substring(0, e));
        }
        function b(e, r, i) {
          let n = BigInt(r.width);
          if (r.signed) {
            let r = g << (n - g);
            (0, t.assert)(
              null == i || (e >= -r && e < r),
              "overflow",
              "NUMERIC_FAULT",
              { operation: i, fault: "overflow", value: e }
            ),
              (e =
                e > h
                  ? (0, u.fromTwos)((0, u.mask)(e, n), n)
                  : -(0, u.fromTwos)((0, u.mask)(-e, n), n));
          } else {
            let r = g << n;
            (0, t.assert)(
              null == i || (e >= 0 && e < r),
              "overflow",
              "NUMERIC_FAULT",
              { operation: i, fault: "overflow", value: e }
            ),
              (e = ((e % r) + r) % r & (r - g));
          }
          return e;
        }
        function E(e) {
          "number" == typeof e && (e = "fixed128x".concat(e));
          let r = !0,
            i = 128,
            n = 18;
          if ("string" == typeof e)
            if ("fixed" === e);
            else if ("ufixed" === e) r = !1;
            else {
              let s = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
              (0, t.assertArgument)(s, "invalid fixed format", "format", e),
                (r = "u" !== s[1]),
                (i = parseInt(s[2])),
                (n = parseInt(s[3]));
            }
          else if (e) {
            let s = e,
              o = (e, r, i) =>
                null == s[e]
                  ? i
                  : ((0, t.assertArgument)(
                      typeof s[e] === r,
                      "invalid fixed format (" + e + " not " + r + ")",
                      "format." + e,
                      s[e]
                    ),
                    s[e]);
            (r = o("signed", "boolean", r)),
              (i = o("width", "number", i)),
              (n = o("decimals", "number", n));
          }
          (0, t.assertArgument)(
            i % 8 == 0,
            "invalid FixedNumber width (not byte aligned)",
            "format.width",
            i
          ),
            (0, t.assertArgument)(
              n <= 80,
              "invalid FixedNumber decimals (too large)",
              "format.decimals",
              n
            );
          let s = (r ? "" : "u") + "fixed" + String(i) + "x" + String(n);
          return { signed: r, width: i, decimals: n, name: s };
        }
        var _ = new WeakMap(),
          y = new WeakMap(),
          w = new WeakMap(),
          C = new WeakSet(),
          O = new WeakSet(),
          N = new WeakSet(),
          A = new WeakSet(),
          T = new WeakSet(),
          I = new WeakSet();
        class S {
          get signed() {
            return (0, r._)(this, _).signed;
          }
          get width() {
            return (0, r._)(this, _).width;
          }
          get decimals() {
            return (0, r._)(this, _).decimals;
          }
          get value() {
            return (0, r._)(this, y);
          }
          addUnsafe(e) {
            return (0, s._)(this, N, z).call(this, e);
          }
          add(e) {
            return (0, s._)(this, N, z).call(this, e, "add");
          }
          subUnsafe(e) {
            return (0, s._)(this, A, P).call(this, e);
          }
          sub(e) {
            return (0, s._)(this, A, P).call(this, e, "sub");
          }
          mulUnsafe(e) {
            return (0, s._)(this, T, x).call(this, e);
          }
          mul(e) {
            return (0, s._)(this, T, x).call(this, e, "mul");
          }
          mulSignal(e) {
            (0, s._)(this, C, R).call(this, e);
            let i = (0, r._)(this, y) * (0, r._)(e, y);
            return (
              (0, t.assert)(
                i % (0, r._)(this, w) === h,
                "precision lost during signalling mul",
                "NUMERIC_FAULT",
                { operation: "mulSignal", fault: "underflow", value: this }
              ),
              (0, s._)(this, O, L).call(
                this,
                i / (0, r._)(this, w),
                "mulSignal"
              )
            );
          }
          divUnsafe(e) {
            return (0, s._)(this, I, M).call(this, e);
          }
          div(e) {
            return (0, s._)(this, I, M).call(this, e, "div");
          }
          divSignal(e) {
            (0, t.assert)(
              (0, r._)(e, y) !== h,
              "division by zero",
              "NUMERIC_FAULT",
              { operation: "div", fault: "divide-by-zero", value: this }
            ),
              (0, s._)(this, C, R).call(this, e);
            let i = (0, r._)(this, y) * (0, r._)(this, w);
            return (
              (0, t.assert)(
                i % (0, r._)(e, y) === h,
                "precision lost during signalling div",
                "NUMERIC_FAULT",
                { operation: "divSignal", fault: "underflow", value: this }
              ),
              (0, s._)(this, O, L).call(this, i / (0, r._)(e, y), "divSignal")
            );
          }
          cmp(e) {
            let t = this.value,
              r = e.value,
              i = this.decimals - e.decimals;
            return (i > 0 ? (r *= p(i)) : i < 0 && (t *= p(-i)), t < r)
              ? -1
              : +(t > r);
          }
          eq(e) {
            return 0 === this.cmp(e);
          }
          lt(e) {
            return 0 > this.cmp(e);
          }
          lte(e) {
            return 0 >= this.cmp(e);
          }
          gt(e) {
            return this.cmp(e) > 0;
          }
          gte(e) {
            return this.cmp(e) >= 0;
          }
          floor() {
            let e = (0, r._)(this, y);
            return (
              (0, r._)(this, y) < h && (e -= (0, r._)(this, w) - g),
              (e = ((0, r._)(this, y) / (0, r._)(this, w)) * (0, r._)(this, w)),
              (0, s._)(this, O, L).call(this, e, "floor")
            );
          }
          ceiling() {
            let e = (0, r._)(this, y);
            return (
              (0, r._)(this, y) > h && (e += (0, r._)(this, w) - g),
              (e = ((0, r._)(this, y) / (0, r._)(this, w)) * (0, r._)(this, w)),
              (0, s._)(this, O, L).call(this, e, "ceiling")
            );
          }
          round(e) {
            if ((null == e && (e = 0), e >= this.decimals)) return this;
            let t = this.decimals - e,
              i = f * p(t - 1),
              n = this.value + i,
              s = p(t);
            return (
              b((n = (n / s) * s), (0, r._)(this, _), "round"),
              new S(m, n, (0, r._)(this, _))
            );
          }
          isZero() {
            return (0, r._)(this, y) === h;
          }
          isNegative() {
            return (0, r._)(this, y) < h;
          }
          toString() {
            return this._value;
          }
          toUnsafeFloat() {
            return parseFloat(this.toString());
          }
          toFormat(e) {
            return S.fromString(this.toString(), e);
          }
          static fromValue(e, r, i) {
            let n = null == r ? 0 : (0, u.getNumber)(r),
              s = E(i),
              o = (0, u.getBigInt)(e, "value"),
              a = n - s.decimals;
            if (a > 0) {
              let r = p(a);
              (0, t.assert)(
                o % r === h,
                "value loses precision for format",
                "NUMERIC_FAULT",
                { operation: "fromValue", fault: "underflow", value: e }
              ),
                (o /= r);
            } else a < 0 && (o *= p(-a));
            return b(o, s, "fromValue"), new S(m, o, s);
          }
          static fromString(e, r) {
            let i = e.match(/^(-?)([0-9]*)\.?([0-9]*)$/);
            (0, t.assertArgument)(
              i && i[2].length + i[3].length > 0,
              "invalid FixedNumber string value",
              "value",
              e
            );
            let n = E(r),
              s = i[2] || "0",
              o = i[3] || "";
            for (; o.length < n.decimals; ) o += v;
            (0, t.assert)(
              o.substring(n.decimals).match(/^0*$/),
              "too many decimals for format",
              "NUMERIC_FAULT",
              { operation: "fromString", fault: "underflow", value: e }
            ),
              (o = o.substring(0, n.decimals));
            let a = BigInt(i[1] + s + o);
            return b(a, n, "fromString"), new S(m, a, n);
          }
          static fromBytes(e, t) {
            let r = (0, u.toBigInt)((0, l.getBytes)(e, "value")),
              i = E(t);
            return (
              i.signed && (r = (0, u.fromTwos)(r, i.width)),
              b(r, i, "fromBytes"),
              new S(m, r, i)
            );
          }
          constructor(e, r, s) {
            (0, o._)(this, C),
              (0, o._)(this, O),
              (0, o._)(this, N),
              (0, o._)(this, A),
              (0, o._)(this, T),
              (0, o._)(this, I),
              (0, a._)(this, "format", void 0),
              (0, i._)(this, _, { writable: !0, value: void 0 }),
              (0, i._)(this, y, { writable: !0, value: void 0 }),
              (0, i._)(this, w, { writable: !0, value: void 0 }),
              (0, a._)(this, "_value", void 0),
              (0, t.assertPrivate)(e, m, "FixedNumber"),
              (0, n._)(this, y, r),
              (0, n._)(this, _, s);
            let l = (function (e, t) {
              let r = "";
              e < h && ((r = "-"), (e *= d));
              let i = e.toString();
              if (0 === t) return r + i;
              for (; i.length <= t; ) i = v + i;
              let n = i.length - t;
              for (
                i = i.substring(0, n) + "." + i.substring(n);
                "0" === i[0] && "." !== i[1];

              )
                i = i.substring(1);
              for (; "0" === i[i.length - 1] && "." !== i[i.length - 2]; )
                i = i.substring(0, i.length - 1);
              return r + i;
            })(r, s.decimals);
            (0, c.defineProperties)(this, { format: s.name, _value: l }),
              (0, n._)(this, w, p(s.decimals));
          }
        }
        function R(e) {
          (0, t.assertArgument)(
            this.format === e.format,
            "incompatible format; use fixedNumber.toFormat",
            "other",
            e
          );
        }
        function L(e, t) {
          return new S(m, (e = b(e, (0, r._)(this, _), t)), (0, r._)(this, _));
        }
        function z(e, t) {
          return (
            (0, s._)(this, C, R).call(this, e),
            (0, s._)(this, O, L).call(
              this,
              (0, r._)(this, y) + (0, r._)(e, y),
              t
            )
          );
        }
        function P(e, t) {
          return (
            (0, s._)(this, C, R).call(this, e),
            (0, s._)(this, O, L).call(
              this,
              (0, r._)(this, y) - (0, r._)(e, y),
              t
            )
          );
        }
        function x(e, t) {
          return (
            (0, s._)(this, C, R).call(this, e),
            (0, s._)(this, O, L).call(
              this,
              ((0, r._)(this, y) * (0, r._)(e, y)) / (0, r._)(this, w),
              t
            )
          );
        }
        function M(e, i) {
          return (
            (0, t.assert)(
              (0, r._)(e, y) !== h,
              "division by zero",
              "NUMERIC_FAULT",
              { operation: "div", fault: "divide-by-zero", value: this }
            ),
            (0, s._)(this, C, R).call(this, e),
            (0, s._)(this, O, L).call(
              this,
              ((0, r._)(this, y) * (0, r._)(this, w)) / (0, r._)(e, y),
              i
            )
          );
        }
        let k = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
        function B(e, r) {
          let i = 18;
          if ("string" == typeof r) {
            let e = k.indexOf(r);
            (0, t.assertArgument)(e >= 0, "invalid unit", "unit", r),
              (i = 3 * e);
          } else null != r && (i = (0, u.getNumber)(r, "unit"));
          return S.fromValue(e, i, { decimals: i, width: 512 }).toString();
        }
        function U(e, r) {
          (0, t.assertArgument)(
            "string" == typeof e,
            "value must be a string",
            "value",
            e
          );
          let i = 18;
          if ("string" == typeof r) {
            let e = k.indexOf(r);
            (0, t.assertArgument)(e >= 0, "invalid unit", "unit", r),
              (i = 3 * e);
          } else null != r && (i = (0, u.getNumber)(r, "unit"));
          return S.fromString(e, { decimals: i, width: 512 }).value;
        }
        function D(e) {
          return B(e, 18);
        }
        function F(e) {
          return U(e, 18);
        }
      },
      [30351],
    ],
    815751: (e) => {
      "use strict";
      e.s({ BrowserProvider: () => l });
      var t = e.i(300522),
        r = e.i(216788),
        i = e.i(725039),
        n = e.i(13517),
        s = e.i(487568),
        o = new WeakMap(),
        a = new WeakMap();
      class l extends s.JsonRpcApiPollingProvider {
        get providerInfo() {
          return (0, t._)(this, a);
        }
        async send(e, t) {
          return await this._start(), await super.send(e, t);
        }
        async _send(e) {
          (0, n.assertArgument)(
            !Array.isArray(e),
            "EIP-1193 does not support batch request",
            "payload",
            e
          );
          try {
            let r = await (0, t._)(this, o).call(
              this,
              e.method,
              e.params || []
            );
            return [{ id: e.id, result: r }];
          } catch (t) {
            return [
              {
                id: e.id,
                error: { code: t.code, data: t.data, message: t.message },
              },
            ];
          }
        }
        getRpcError(e, t) {
          switch ((t = JSON.parse(JSON.stringify(t))).error.code || -1) {
            case 4001:
              t.error.message = "ethers-user-denied: ".concat(t.error.message);
              break;
            case 4200:
              t.error.message = "ethers-unsupported: ".concat(t.error.message);
          }
          return super.getRpcError(e, t);
        }
        async hasSigner(e) {
          null == e && (e = 0);
          let t = await this.send("eth_accounts", []);
          return "number" == typeof e
            ? t.length > e
            : ((e = e.toLowerCase()),
              0 !== t.filter((t) => t.toLowerCase() === e).length);
        }
        async getSigner(e) {
          if ((null == e && (e = 0), !(await this.hasSigner(e))))
            try {
              await (0, t._)(this, o).call(this, "eth_requestAccounts", []);
            } catch (t) {
              let e = t.payload;
              throw this.getRpcError(e, { id: e.id, error: t });
            }
          return await super.getSigner(e);
        }
        static async discover(e) {
          if ((null == e && (e = {}), e.provider)) return new l(e.provider);
          let t = e.window
            ? e.window
            : "undefined" != typeof window
            ? window
            : null;
          if (null == t) return null;
          let r = e.anyProvider;
          if (r && t.ethereum) return new l(t.ethereum);
          if (
            !(
              "addEventListener" in t &&
              "dispatchEvent" in t &&
              "removeEventListener" in t
            )
          )
            return null;
          let i = e.timeout ? e.timeout : 300;
          return 0 === i
            ? null
            : await new Promise((s, o) => {
                let a = [],
                  u = (e) => {
                    a.push(e.detail), r && c();
                  },
                  c = () => {
                    if ((clearTimeout(d), a.length))
                      if (e && e.filter) {
                        let t = e.filter(
                          a.map((e) => Object.assign({}, e.info))
                        );
                        if (null == t) s(null);
                        else if (t instanceof l) s(t);
                        else {
                          let e = null;
                          if (
                            (t.uuid &&
                              (e = a.filter((e) => t.uuid === e.info.uuid)[0]),
                            e)
                          ) {
                            let { provider: t, info: r } = e;
                            s(new l(t, void 0, { providerInfo: r }));
                          } else
                            o(
                              (0, n.makeError)(
                                "filter returned unknown info",
                                "UNSUPPORTED_OPERATION",
                                { value: t }
                              )
                            );
                        }
                      } else {
                        let { provider: e, info: t } = a[0];
                        s(new l(e, void 0, { providerInfo: t }));
                      }
                    else s(null);
                    t.removeEventListener("eip6963:announceProvider", u);
                  },
                  d = setTimeout(() => {
                    c();
                  }, i);
                t.addEventListener("eip6963:announceProvider", u),
                  t.dispatchEvent(new Event("eip6963:requestProvider"));
              });
        }
        constructor(e, t, s) {
          let l = Object.assign({}, null != s ? s : {}, { batchMaxCount: 1 });
          (0, n.assertArgument)(
            e && e.request,
            "invalid EIP-1193 provider",
            "ethereum",
            e
          ),
            super(t, l),
            (0, r._)(this, o, { writable: !0, value: void 0 }),
            (0, r._)(this, a, { writable: !0, value: void 0 }),
            (0, i._)(this, a, null),
            s && s.providerInfo && (0, i._)(this, a, s.providerInfo),
            (0, i._)(this, o, async (t, r) => {
              let i = { method: t, params: r };
              this.emit("debug", { action: "sendEip1193Request", payload: i });
              try {
                let t = await e.request(i);
                return (
                  this.emit("debug", {
                    action: "receiveEip1193Result",
                    result: t,
                  }),
                  t
                );
              } catch (t) {
                let e = Error(t.message);
                throw (
                  ((e.code = t.code),
                  (e.data = t.data),
                  (e.payload = i),
                  this.emit("debug", {
                    action: "receiveEip1193Error",
                    error: e,
                  }),
                  e)
                );
              }
            });
        }
      }
    },
  },
]);

//# sourceMappingURL=bba4bbe1c1118b73.js.map
