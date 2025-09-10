(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    308080: (e) => {
      "use strict";
      e.s({ ParseUtil: () => t });
      let t = {
        validateCaipAddress(e) {
          var t;
          if ((null == (t = e.split(":")) ? void 0 : t.length) !== 3)
            throw Error("Invalid CAIP Address");
          return e;
        },
        parseCaipAddress(e) {
          let t = e.split(":");
          if (3 !== t.length)
            throw Error("Invalid CAIP-10 address: ".concat(e));
          let [r, n, o] = t;
          if (!r || !n || !o)
            throw Error("Invalid CAIP-10 address: ".concat(e));
          return { chainNamespace: r, chainId: n, address: o };
        },
        parseCaipNetworkId(e) {
          let t = e.split(":");
          if (2 !== t.length)
            throw Error("Invalid CAIP-2 network id: ".concat(e));
          let [r, n] = t;
          if (!r || !n) throw Error("Invalid CAIP-2 network id: ".concat(e));
          return { chainNamespace: r, chainId: n };
        },
      };
    },
    850524: (e) => {
      "use strict";
      e.s({ ConstantsUtil: () => r });
      var t = e.i(922271);
      let r = {
        WC_NAME_SUFFIX: ".reown.id",
        WC_NAME_SUFFIX_LEGACY: ".wcn.id",
        BLOCKCHAIN_API_RPC_URL: "https://rpc.walletconnect.org",
        PULSE_API_URL: "https://pulse.walletconnect.org",
        W3M_API_URL: "https://api.web3modal.org",
        CONNECTOR_ID: {
          WALLET_CONNECT: "walletConnect",
          INJECTED: "injected",
          WALLET_STANDARD: "announced",
          COINBASE: "coinbaseWallet",
          COINBASE_SDK: "coinbaseWalletSDK",
          SAFE: "safe",
          LEDGER: "ledger",
          OKX: "okx",
          EIP6963: "eip6963",
          AUTH: "ID_AUTH",
        },
        CONNECTOR_NAMES: { AUTH: "Auth" },
        AUTH_CONNECTOR_SUPPORTED_CHAINS: ["eip155", "solana"],
        LIMITS: { PENDING_TRANSACTIONS: 99 },
        CHAIN: {
          EVM: "eip155",
          SOLANA: "solana",
          POLKADOT: "polkadot",
          BITCOIN: "bip122",
        },
        CHAIN_NAME_MAP: {
          eip155: "EVM Networks",
          solana: "Solana",
          polkadot: "Polkadot",
          bip122: "Bitcoin",
          cosmos: "Cosmos",
        },
        ADAPTER_TYPES: {
          BITCOIN: "bitcoin",
          SOLANA: "solana",
          WAGMI: "wagmi",
          ETHERS: "ethers",
          ETHERS5: "ethers5",
        },
        USDT_CONTRACT_ADDRESSES: [
          "0xdac17f958d2ee523a2206206994597c13d831ec7",
          "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
          "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
          "0x919C1c267BC06a7039e03fcc2eF738525769109c",
          "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
          "0x55d398326f99059fF775485246999027B3197955",
          "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
        ],
        HTTP_STATUS_CODES: {
          SERVER_ERROR: 500,
          TOO_MANY_REQUESTS: 429,
          SERVICE_UNAVAILABLE: 503,
          FORBIDDEN: 403,
        },
        UNSUPPORTED_NETWORK_NAME: "Unknown Network",
        SECURE_SITE_SDK_ORIGIN:
          (void 0 !== t.default && void 0 !== t.default.env
            ? t.default.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN
            : void 0) || "https://secure.walletconnect.org",
        REMOTE_FEATURES_ALERTS: {
          MULTI_WALLET_NOT_ENABLED: {
            DEFAULT: {
              shortMessage: "Multi-Wallet Not Enabled",
              longMessage:
                "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com.",
            },
            CONNECTIONS_HOOK: {
              shortMessage: "Multi-Wallet Not Enabled",
              longMessage:
                "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnections hook.",
            },
            CONNECTION_HOOK: {
              shortMessage: "Multi-Wallet Not Enabled",
              longMessage:
                "Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnection hook.",
            },
          },
        },
      };
    },
    664572: (e) => {
      "use strict";
      e.s({
        DEFAULT_LOG_LEVEL: () => n,
        SECURE_SITE_SDK: () => r,
        SECURE_SITE_SDK_VERSION: () => o,
        W3mFrameConstants: () => a,
        W3mFrameRpcConstants: () => i,
      });
      var t = e.i(922271);
      let r =
          (void 0 !== t.default && void 0 !== t.default.env
            ? t.default.env.NEXT_PUBLIC_SECURE_SITE_SDK_URL
            : void 0) || "https://secure.walletconnect.org/sdk",
        n =
          (void 0 !== t.default && void 0 !== t.default.env
            ? t.default.env.NEXT_PUBLIC_DEFAULT_LOG_LEVEL
            : void 0) || "error",
        o =
          (void 0 !== t.default && void 0 !== t.default.env
            ? t.default.env.NEXT_PUBLIC_SECURE_SITE_SDK_VERSION
            : void 0) || "4",
        a = {
          APP_EVENT_KEY: "@w3m-app/",
          FRAME_EVENT_KEY: "@w3m-frame/",
          RPC_METHOD_KEY: "RPC_",
          STORAGE_KEY: "@appkit-wallet/",
          SESSION_TOKEN_KEY: "SESSION_TOKEN_KEY",
          EMAIL_LOGIN_USED_KEY: "EMAIL_LOGIN_USED_KEY",
          LAST_USED_CHAIN_KEY: "LAST_USED_CHAIN_KEY",
          LAST_EMAIL_LOGIN_TIME: "LAST_EMAIL_LOGIN_TIME",
          EMAIL: "EMAIL",
          PREFERRED_ACCOUNT_TYPE: "PREFERRED_ACCOUNT_TYPE",
          SMART_ACCOUNT_ENABLED: "SMART_ACCOUNT_ENABLED",
          SMART_ACCOUNT_ENABLED_NETWORKS: "SMART_ACCOUNT_ENABLED_NETWORKS",
          SOCIAL_USERNAME: "SOCIAL_USERNAME",
          APP_SWITCH_NETWORK: "@w3m-app/SWITCH_NETWORK",
          APP_CONNECT_EMAIL: "@w3m-app/CONNECT_EMAIL",
          APP_CONNECT_DEVICE: "@w3m-app/CONNECT_DEVICE",
          APP_CONNECT_OTP: "@w3m-app/CONNECT_OTP",
          APP_CONNECT_SOCIAL: "@w3m-app/CONNECT_SOCIAL",
          APP_GET_SOCIAL_REDIRECT_URI: "@w3m-app/GET_SOCIAL_REDIRECT_URI",
          APP_GET_USER: "@w3m-app/GET_USER",
          APP_SIGN_OUT: "@w3m-app/SIGN_OUT",
          APP_IS_CONNECTED: "@w3m-app/IS_CONNECTED",
          APP_GET_CHAIN_ID: "@w3m-app/GET_CHAIN_ID",
          APP_RPC_REQUEST: "@w3m-app/RPC_REQUEST",
          APP_UPDATE_EMAIL: "@w3m-app/UPDATE_EMAIL",
          APP_UPDATE_EMAIL_PRIMARY_OTP: "@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",
          APP_UPDATE_EMAIL_SECONDARY_OTP: "@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",
          APP_AWAIT_UPDATE_EMAIL: "@w3m-app/AWAIT_UPDATE_EMAIL",
          APP_SYNC_THEME: "@w3m-app/SYNC_THEME",
          APP_SYNC_DAPP_DATA: "@w3m-app/SYNC_DAPP_DATA",
          APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:
            "@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",
          APP_INIT_SMART_ACCOUNT: "@w3m-app/INIT_SMART_ACCOUNT",
          APP_SET_PREFERRED_ACCOUNT: "@w3m-app/SET_PREFERRED_ACCOUNT",
          APP_CONNECT_FARCASTER: "@w3m-app/CONNECT_FARCASTER",
          APP_GET_FARCASTER_URI: "@w3m-app/GET_FARCASTER_URI",
          APP_RELOAD: "@w3m-app/RELOAD",
          APP_RPC_ABORT: "@w3m-app/RPC_ABORT",
          FRAME_SWITCH_NETWORK_ERROR: "@w3m-frame/SWITCH_NETWORK_ERROR",
          FRAME_SWITCH_NETWORK_SUCCESS: "@w3m-frame/SWITCH_NETWORK_SUCCESS",
          FRAME_CONNECT_EMAIL_ERROR: "@w3m-frame/CONNECT_EMAIL_ERROR",
          FRAME_CONNECT_EMAIL_SUCCESS: "@w3m-frame/CONNECT_EMAIL_SUCCESS",
          FRAME_CONNECT_DEVICE_ERROR: "@w3m-frame/CONNECT_DEVICE_ERROR",
          FRAME_CONNECT_DEVICE_SUCCESS: "@w3m-frame/CONNECT_DEVICE_SUCCESS",
          FRAME_CONNECT_OTP_SUCCESS: "@w3m-frame/CONNECT_OTP_SUCCESS",
          FRAME_CONNECT_OTP_ERROR: "@w3m-frame/CONNECT_OTP_ERROR",
          FRAME_CONNECT_SOCIAL_SUCCESS: "@w3m-frame/CONNECT_SOCIAL_SUCCESS",
          FRAME_CONNECT_SOCIAL_ERROR: "@w3m-frame/CONNECT_SOCIAL_ERROR",
          FRAME_CONNECT_FARCASTER_SUCCESS:
            "@w3m-frame/CONNECT_FARCASTER_SUCCESS",
          FRAME_CONNECT_FARCASTER_ERROR: "@w3m-frame/CONNECT_FARCASTER_ERROR",
          FRAME_GET_FARCASTER_URI_SUCCESS:
            "@w3m-frame/GET_FARCASTER_URI_SUCCESS",
          FRAME_GET_FARCASTER_URI_ERROR: "@w3m-frame/GET_FARCASTER_URI_ERROR",
          FRAME_GET_SOCIAL_REDIRECT_URI_SUCCESS:
            "@w3m-frame/GET_SOCIAL_REDIRECT_URI_SUCCESS",
          FRAME_GET_SOCIAL_REDIRECT_URI_ERROR:
            "@w3m-frame/GET_SOCIAL_REDIRECT_URI_ERROR",
          FRAME_GET_USER_SUCCESS: "@w3m-frame/GET_USER_SUCCESS",
          FRAME_GET_USER_ERROR: "@w3m-frame/GET_USER_ERROR",
          FRAME_SIGN_OUT_SUCCESS: "@w3m-frame/SIGN_OUT_SUCCESS",
          FRAME_SIGN_OUT_ERROR: "@w3m-frame/SIGN_OUT_ERROR",
          FRAME_IS_CONNECTED_SUCCESS: "@w3m-frame/IS_CONNECTED_SUCCESS",
          FRAME_IS_CONNECTED_ERROR: "@w3m-frame/IS_CONNECTED_ERROR",
          FRAME_GET_CHAIN_ID_SUCCESS: "@w3m-frame/GET_CHAIN_ID_SUCCESS",
          FRAME_GET_CHAIN_ID_ERROR: "@w3m-frame/GET_CHAIN_ID_ERROR",
          FRAME_RPC_REQUEST_SUCCESS: "@w3m-frame/RPC_REQUEST_SUCCESS",
          FRAME_RPC_REQUEST_ERROR: "@w3m-frame/RPC_REQUEST_ERROR",
          FRAME_SESSION_UPDATE: "@w3m-frame/SESSION_UPDATE",
          FRAME_UPDATE_EMAIL_SUCCESS: "@w3m-frame/UPDATE_EMAIL_SUCCESS",
          FRAME_UPDATE_EMAIL_ERROR: "@w3m-frame/UPDATE_EMAIL_ERROR",
          FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:
            "@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",
          FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:
            "@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",
          FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:
            "@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",
          FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:
            "@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",
          FRAME_SYNC_THEME_SUCCESS: "@w3m-frame/SYNC_THEME_SUCCESS",
          FRAME_SYNC_THEME_ERROR: "@w3m-frame/SYNC_THEME_ERROR",
          FRAME_SYNC_DAPP_DATA_SUCCESS: "@w3m-frame/SYNC_DAPP_DATA_SUCCESS",
          FRAME_SYNC_DAPP_DATA_ERROR: "@w3m-frame/SYNC_DAPP_DATA_ERROR",
          FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:
            "@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",
          FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:
            "@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",
          FRAME_INIT_SMART_ACCOUNT_SUCCESS:
            "@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",
          FRAME_INIT_SMART_ACCOUNT_ERROR: "@w3m-frame/INIT_SMART_ACCOUNT_ERROR",
          FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:
            "@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",
          FRAME_SET_PREFERRED_ACCOUNT_ERROR:
            "@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",
          FRAME_READY: "@w3m-frame/READY",
          FRAME_RELOAD_SUCCESS: "@w3m-frame/RELOAD_SUCCESS",
          FRAME_RELOAD_ERROR: "@w3m-frame/RELOAD_ERROR",
          FRAME_RPC_ABORT_SUCCESS: "@w3m-frame/RPC_ABORT_SUCCESS",
          FRAME_RPC_ABORT_ERROR: "@w3m-frame/RPC_ABORT_ERROR",
          RPC_RESPONSE_TYPE_ERROR: "RPC_RESPONSE_ERROR",
          RPC_RESPONSE_TYPE_TX: "RPC_RESPONSE_TRANSACTION_HASH",
          RPC_RESPONSE_TYPE_OBJECT: "RPC_RESPONSE_OBJECT",
        },
        i = {
          SAFE_RPC_METHODS: [
            "eth_accounts",
            "eth_blockNumber",
            "eth_call",
            "eth_chainId",
            "eth_estimateGas",
            "eth_feeHistory",
            "eth_gasPrice",
            "eth_getAccount",
            "eth_getBalance",
            "eth_getBlockByHash",
            "eth_getBlockByNumber",
            "eth_getBlockReceipts",
            "eth_getBlockTransactionCountByHash",
            "eth_getBlockTransactionCountByNumber",
            "eth_getCode",
            "eth_getFilterChanges",
            "eth_getFilterLogs",
            "eth_getLogs",
            "eth_getProof",
            "eth_getStorageAt",
            "eth_getTransactionByBlockHashAndIndex",
            "eth_getTransactionByBlockNumberAndIndex",
            "eth_getTransactionByHash",
            "eth_getTransactionCount",
            "eth_getTransactionReceipt",
            "eth_getUncleCountByBlockHash",
            "eth_getUncleCountByBlockNumber",
            "eth_maxPriorityFeePerGas",
            "eth_newBlockFilter",
            "eth_newFilter",
            "eth_newPendingTransactionFilter",
            "eth_sendRawTransaction",
            "eth_syncing",
            "eth_uninstallFilter",
            "wallet_getCapabilities",
            "wallet_getCallsStatus",
            "eth_getUserOperationReceipt",
            "eth_estimateUserOperationGas",
            "eth_getUserOperationByHash",
            "eth_supportedEntryPoints",
            "wallet_getAssets",
          ],
          NOT_SAFE_RPC_METHODS: [
            "personal_sign",
            "eth_signTypedData_v4",
            "eth_sendTransaction",
            "solana_signMessage",
            "solana_signTransaction",
            "solana_signAllTransactions",
            "solana_signAndSendTransaction",
            "wallet_sendCalls",
            "wallet_grantPermissions",
            "wallet_revokePermissions",
            "eth_sendUserOperation",
          ],
          GET_CHAIN_ID: "eth_chainId",
          RPC_METHOD_NOT_ALLOWED_MESSAGE: "Requested RPC call is not allowed",
          RPC_METHOD_NOT_ALLOWED_UI_MESSAGE: "Action not allowed",
          ACCOUNT_TYPES: { EOA: "eoa", SMART_ACCOUNT: "smartAccount" },
        };
    },
    337733: (e) => {
      "use strict";
      e.s({ NetworkUtil: () => r });
      var t = e.i(850524);
      let r = {
        caipNetworkIdToNumber: (e) => (e ? Number(e.split(":")[1]) : void 0),
        parseEvmChainId(e) {
          return "string" == typeof e ? this.caipNetworkIdToNumber(e) : e;
        },
        getNetworksByNamespace: (e, t) =>
          (null == e ? void 0 : e.filter((e) => e.chainNamespace === t)) || [],
        getFirstNetworkByNamespace(e, t) {
          return this.getNetworksByNamespace(e, t)[0];
        },
        getNetworkNameByCaipNetworkId(e, r) {
          var n;
          if (!r) return;
          let o = e.find((e) => e.caipNetworkId === r);
          if (o) return o.name;
          let [a] = r.split(":");
          return (
            (null == (n = t.ConstantsUtil.CHAIN_NAME_MAP) ? void 0 : n[a]) ||
            void 0
          );
        },
      };
    },
    724233: [
      (e) => {
        "use strict";
        e.s(
          {
            proxy: () =>
              function e() {
                let t,
                  r,
                  n,
                  o =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                if (!m(o)) throw Error("object required");
                let a = E.get(o);
                if (a) return a;
                let i = v[0],
                  s = new Set(),
                  l = function (e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : ++v[0];
                    i !== t && ((i = t), s.forEach((r) => r(e, t)));
                  },
                  c = v[1],
                  d = (e) => (t, r) => {
                    let n = [...t];
                    (n[1] = [e, ...n[1]]), l(n, r);
                  },
                  p = new Map(),
                  w = !0,
                  f = new Proxy(
                    o,
                    ((t = () => w),
                    (r = (e, t) => {
                      let r = !h.has(t) && g.get(t);
                      if (r) {
                        if (
                          (C.env ? C.env.MODE : void 0) !== "production" &&
                          p.has(e)
                        )
                          throw Error("prop listener already exists");
                        if (s.size) {
                          let t = r[2](d(e));
                          p.set(e, [r, t]);
                        } else p.set(e, [r]);
                      }
                    }),
                    (n = (e) => {
                      var t;
                      let r = p.get(e);
                      r && (p.delete(e), null == (t = r[1]) || t.call(r));
                    }),
                    {
                      deleteProperty(e, t) {
                        let r = Reflect.get(e, t);
                        n(t);
                        let o = Reflect.deleteProperty(e, t);
                        return o && l(["delete", [t], r]), o;
                      },
                      set(o, a, i, s) {
                        let c,
                          d = !t() && Reflect.has(o, a),
                          p = Reflect.get(o, a, s);
                        if (d && (A(p, i) || (E.has(i) && A(p, E.get(i)))))
                          return !0;
                        n(a), m(i) && (i = u(i) || i);
                        let C =
                          !g.has(i) &&
                          m((c = i)) &&
                          !h.has(c) &&
                          (Array.isArray(c) || !(Symbol.iterator in c)) &&
                          !(c instanceof WeakMap) &&
                          !(c instanceof WeakSet) &&
                          !(c instanceof Error) &&
                          !(c instanceof Number) &&
                          !(c instanceof Date) &&
                          !(c instanceof String) &&
                          !(c instanceof RegExp) &&
                          !(c instanceof ArrayBuffer) &&
                          !(c instanceof Promise)
                            ? e(i)
                            : i;
                        return (
                          r(a, C),
                          Reflect.set(o, a, C, s),
                          l(["set", [a], i, p]),
                          !0
                        );
                      },
                    })
                  );
                E.set(o, f);
                let b = [
                  o,
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : ++v[1];
                    return (
                      c === e ||
                        s.size ||
                        ((c = e),
                        p.forEach((t) => {
                          let [r] = t,
                            n = r[1](e);
                          n > i && (i = n);
                        })),
                      i
                    );
                  },
                  (e) => (
                    s.add(e),
                    1 === s.size &&
                      p.forEach((e, t) => {
                        let [r, n] = e;
                        if ((C.env ? C.env.MODE : void 0) !== "production" && n)
                          throw Error("remove already exists");
                        let o = r[2](d(t));
                        p.set(t, [r, o]);
                      }),
                    () => {
                      s.delete(e),
                        0 === s.size &&
                          p.forEach((e, t) => {
                            let [r, n] = e;
                            n && (n(), p.set(t, [r]));
                          });
                    }
                  ),
                ];
                return (
                  g.set(f, b),
                  Reflect.ownKeys(o).forEach((e) => {
                    let t = Object.getOwnPropertyDescriptor(o, e);
                    "value" in t && t.writable && (f[e] = o[e]);
                  }),
                  (w = !1),
                  f
                );
              },
            ref: () => S,
            snapshot: () => _,
            subscribe: () => b,
            unstable_getInternalStates: () => N,
          },
          724233
        ),
          e.s(
            {
              affectedToPathList: () => p,
              createProxy: () => l,
              getUntracked: () => u,
              isChanged: () => c,
              markToTrack: () => d,
            },
            799145
          );
        let t = Symbol(),
          r = Symbol(),
          n = Object.getPrototypeOf,
          o = new WeakMap(),
          a = (e) =>
            e &&
            (o.has(e)
              ? o.get(e)
              : n(e) === Object.prototype || n(e) === Array.prototype),
          i = (e) => "object" == typeof e && null !== e,
          s = (e) => e[r] || e,
          l = (e, o, i, c) => {
            if (!a(e)) return e;
            let u = c && c.get(e);
            if (!u) {
              let t = s(e);
              (u = Object.values(Object.getOwnPropertyDescriptors(t)).some(
                (e) => !e.configurable && !e.writable
              )
                ? [
                    t,
                    ((e) => {
                      if (Array.isArray(e)) return Array.from(e);
                      let t = Object.getOwnPropertyDescriptors(e);
                      return (
                        Object.values(t).forEach((e) => {
                          e.configurable = !0;
                        }),
                        Object.create(n(e), t)
                      );
                    })(t),
                  ]
                : [t]),
                null == c || c.set(e, u);
            }
            let [d, p] = u,
              C = i && i.get(d);
            return (
              (!C || !!p !== C[1].f) &&
                (((C = ((e, n) => {
                  let o = { f: n },
                    a = !1,
                    i = (t, r) => {
                      if (!a) {
                        let n = o.a.get(e);
                        if ((n || ((n = {}), o.a.set(e, n)), "w" === t))
                          n.w = !0;
                        else {
                          let e = n[t];
                          e || ((e = new Set()), (n[t] = e)), e.add(r);
                        }
                      }
                    },
                    s = {
                      get: (t, n) =>
                        n === r
                          ? e
                          : (i("k", n), l(Reflect.get(t, n), o.a, o.c, o.t)),
                      has: (r, n) =>
                        n === t
                          ? ((a = !0), o.a.delete(e), !0)
                          : (i("h", n), Reflect.has(r, n)),
                      getOwnPropertyDescriptor: (e, t) => (
                        i("o", t), Reflect.getOwnPropertyDescriptor(e, t)
                      ),
                      ownKeys: (e) => (i("w"), Reflect.ownKeys(e)),
                    };
                  return n && (s.set = s.deleteProperty = () => !1), [s, o];
                })(d, !!p))[1].p = new Proxy(p || d, C[0])),
                i && i.set(d, C)),
              (C[1].a = o),
              (C[1].c = i),
              (C[1].t = c),
              C[1].p
            );
          },
          c = function (e, t, r, n) {
            let o =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : Object.is;
            if (o(e, t)) return !1;
            if (!i(e) || !i(t)) return !0;
            let a = r.get(s(e));
            if (!a) return !0;
            if (n) {
              if (n.get(e) === t) return !1;
              n.set(e, t);
            }
            let l = null;
            for (let r of a.h || [])
              if ((l = Reflect.has(e, r) !== Reflect.has(t, r))) return l;
            if (!0 === a.w) {
              if (
                (l = ((e, t) => {
                  let r = Reflect.ownKeys(e),
                    n = Reflect.ownKeys(t);
                  return r.length !== n.length || r.some((e, t) => e !== n[t]);
                })(e, t))
              )
                return l;
            } else
              for (let r of a.o || []) {
                let n = !!Reflect.getOwnPropertyDescriptor(e, r);
                if ((l = !!Reflect.getOwnPropertyDescriptor(t, r) !== n))
                  return l;
              }
            for (let i of a.k || []) if ((l = c(e[i], t[i], r, n, o))) return l;
            if (null === l) throw Error("invalid used");
            return l;
          },
          u = (e) => (a(e) && e[r]) || null,
          d = function (e) {
            let t =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1];
            o.set(e, t);
          },
          p = (e, t, r) => {
            let n = [],
              o = new WeakSet(),
              a = (e, l) => {
                var c, u, d;
                if (o.has(e)) return;
                i(e) && o.add(e);
                let p = i(e) && t.get(s(e));
                if (p) {
                  if (
                    (null == (c = p.h) ||
                      c.forEach((e) => {
                        let t = ":has(".concat(String(e), ")");
                        n.push(l ? [...l, t] : [t]);
                      }),
                    !0 === p.w)
                  ) {
                    let e = ":ownKeys";
                    n.push(l ? [...l, e] : [e]);
                  } else
                    null == (u = p.o) ||
                      u.forEach((e) => {
                        let t = ":hasOwn(".concat(String(e), ")");
                        n.push(l ? [...l, t] : [t]);
                      });
                  null == (d = p.k) ||
                    d.forEach((t) => {
                      (!r ||
                        "value" in
                          (Object.getOwnPropertyDescriptor(e, t) || {})) &&
                        a(e[t], l ? [...l, t] : [t]);
                    });
                } else l && n.push(l);
              };
            return a(e), n;
          },
          C = {
            get url() {
              return `file://${e.P("node_modules/valtio/esm/vanilla.mjs")}`;
            },
          },
          m = (e) => "object" == typeof e && null !== e,
          w = (e, t) => {
            let r = f.get(e);
            if ((null == r ? void 0 : r[0]) === t) return r[1];
            let n = Array.isArray(e)
              ? []
              : Object.create(Object.getPrototypeOf(e));
            return (
              d(n, !0),
              f.set(e, [t, n]),
              Reflect.ownKeys(e).forEach((t) => {
                if (Object.getOwnPropertyDescriptor(n, t)) return;
                let r = Reflect.get(e, t),
                  { enumerable: o } = Reflect.getOwnPropertyDescriptor(e, t),
                  a = { value: r, enumerable: o, configurable: !0 };
                if (h.has(r)) d(r, !1);
                else if (g.has(r)) {
                  let [e, t] = g.get(r);
                  a.value = w(e, t());
                }
                Object.defineProperty(n, t, a);
              }),
              Object.preventExtensions(n)
            );
          },
          g = new WeakMap(),
          h = new WeakSet(),
          f = new WeakMap(),
          v = [1, 1],
          E = new WeakMap(),
          A = Object.is;
        function b(e, t, r) {
          let n,
            o = g.get(e);
          (C.env ? C.env.MODE : void 0) === "production" ||
            o ||
            console.warn("Please use proxy object");
          let a = [],
            i = o[2],
            s = !1,
            l = i((e) => {
              if ((a.push(e), r)) return void t(a.splice(0));
              n ||
                (n = Promise.resolve().then(() => {
                  (n = void 0), s && t(a.splice(0));
                }));
            });
          return (
            (s = !0),
            () => {
              (s = !1), l();
            }
          );
        }
        function _(e) {
          let t = g.get(e);
          (C.env ? C.env.MODE : void 0) === "production" ||
            t ||
            console.warn("Please use proxy object");
          let [r, n] = t;
          return w(r, n());
        }
        function S(e) {
          return h.add(e), e;
        }
        function N() {
          return {
            proxyStateMap: g,
            refSet: h,
            snapCache: f,
            versionHolder: v,
            proxyCache: E,
          };
        }
      },
      [799145],
    ],
    775078: [
      (e) => {
        "use strict";
        e.s({ CoreHelperUtil: () => p }, 775078);
        var t = e.i(850524);
        e.s(
          {
            ConstantsUtil: () => i,
            MELD_PUBLIC_KEY: () => a,
            ONRAMP_PROVIDERS: () => o,
          },
          940462
        );
        var r = e.i(922271);
        let n =
            (void 0 !== r.default && void 0 !== r.default.env
              ? r.default.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN
              : void 0) || "https://secure.walletconnect.org",
          o = [
            {
              label: "Meld.io",
              name: "meld",
              feeRange: "1-2%",
              url: "https://meldcrypto.com",
              supportedChains: ["eip155", "solana"],
            },
          ],
          a = "WXETMuFUQmqqybHuRkSgxv:25B8LJHSfpG6LVjR2ytU5Cwh7Z4Sch2ocoU",
          i = {
            FOUR_MINUTES_MS: 24e4,
            TEN_SEC_MS: 1e4,
            FIVE_SEC_MS: 5e3,
            THREE_SEC_MS: 3e3,
            ONE_SEC_MS: 1e3,
            SECURE_SITE: n,
            SECURE_SITE_DASHBOARD: "".concat(n, "/dashboard"),
            SECURE_SITE_FAVICON: "".concat(n, "/images/favicon.png"),
            RESTRICTED_TIMEZONES: [
              "ASIA/SHANGHAI",
              "ASIA/URUMQI",
              "ASIA/CHONGQING",
              "ASIA/HARBIN",
              "ASIA/KASHGAR",
              "ASIA/MACAU",
              "ASIA/HONG_KONG",
              "ASIA/MACAO",
              "ASIA/BEIJING",
              "ASIA/HARBIN",
            ],
            SWAP_SUGGESTED_TOKENS: [
              "ETH",
              "UNI",
              "1INCH",
              "AAVE",
              "SOL",
              "ADA",
              "AVAX",
              "DOT",
              "LINK",
              "NITRO",
              "GAIA",
              "MILK",
              "TRX",
              "NEAR",
              "GNO",
              "WBTC",
              "DAI",
              "WETH",
              "USDC",
              "USDT",
              "ARB",
              "BAL",
              "BICO",
              "CRV",
              "ENS",
              "MATIC",
              "OP",
            ],
            SWAP_POPULAR_TOKENS: [
              "ETH",
              "UNI",
              "1INCH",
              "AAVE",
              "SOL",
              "ADA",
              "AVAX",
              "DOT",
              "LINK",
              "NITRO",
              "GAIA",
              "MILK",
              "TRX",
              "NEAR",
              "GNO",
              "WBTC",
              "DAI",
              "WETH",
              "USDC",
              "USDT",
              "ARB",
              "BAL",
              "BICO",
              "CRV",
              "ENS",
              "MATIC",
              "OP",
              "METAL",
              "DAI",
              "CHAMP",
              "WOLF",
              "SALE",
              "BAL",
              "BUSD",
              "MUST",
              "BTCpx",
              "ROUTE",
              "HEX",
              "WELT",
              "amDAI",
              "VSQ",
              "VISION",
              "AURUM",
              "pSP",
              "SNX",
              "VC",
              "LINK",
              "CHP",
              "amUSDT",
              "SPHERE",
              "FOX",
              "GIDDY",
              "GFC",
              "OMEN",
              "OX_OLD",
              "DE",
              "WNT",
            ],
            BALANCE_SUPPORTED_CHAINS: [
              t.ConstantsUtil.CHAIN.EVM,
              t.ConstantsUtil.CHAIN.SOLANA,
            ],
            SWAP_SUPPORTED_NETWORKS: [
              "eip155:1",
              "eip155:42161",
              "eip155:10",
              "eip155:324",
              "eip155:8453",
              "eip155:56",
              "eip155:137",
              "eip155:100",
              "eip155:43114",
              "eip155:250",
              "eip155:8217",
              "eip155:1313161554",
            ],
            NAMES_SUPPORTED_CHAIN_NAMESPACES: [t.ConstantsUtil.CHAIN.EVM],
            ONRAMP_SUPPORTED_CHAIN_NAMESPACES: [
              t.ConstantsUtil.CHAIN.EVM,
              t.ConstantsUtil.CHAIN.SOLANA,
            ],
            ACTIVITY_ENABLED_CHAIN_NAMESPACES: [t.ConstantsUtil.CHAIN.EVM],
            NATIVE_TOKEN_ADDRESS: {
              eip155: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
              solana: "So11111111111111111111111111111111111111111",
              polkadot: "0x",
              bip122: "0x",
              cosmos: "0x",
            },
            CONVERT_SLIPPAGE_TOLERANCE: 1,
            CONNECT_LABELS: {
              MOBILE: "Open and continue in the wallet app",
              WEB: "Open and continue in the wallet app",
            },
            SEND_SUPPORTED_NAMESPACES: [
              t.ConstantsUtil.CHAIN.EVM,
              t.ConstantsUtil.CHAIN.SOLANA,
            ],
            DEFAULT_REMOTE_FEATURES: {
              swaps: ["1inch"],
              onramp: ["meld"],
              email: !0,
              socials: [
                "google",
                "x",
                "discord",
                "farcaster",
                "github",
                "apple",
                "facebook",
              ],
              activity: !0,
              reownBranding: !0,
              multiWallet: !1,
            },
            DEFAULT_REMOTE_FEATURES_DISABLED: {
              email: !1,
              socials: !1,
              swaps: !1,
              onramp: !1,
              activity: !1,
              reownBranding: !1,
            },
            DEFAULT_FEATURES: {
              receive: !0,
              send: !0,
              emailShowWallets: !0,
              connectorTypeOrder: [
                "walletConnect",
                "recent",
                "injected",
                "featured",
                "custom",
                "external",
                "recommended",
              ],
              analytics: !0,
              allWallets: !0,
              legalCheckbox: !1,
              smartSessions: !1,
              collapseWallets: !1,
              walletFeaturesOrder: ["onramp", "swaps", "receive", "send"],
              connectMethodsOrder: void 0,
              pay: !1,
            },
            DEFAULT_SOCIALS: [
              "google",
              "x",
              "farcaster",
              "discord",
              "apple",
              "github",
              "facebook",
            ],
            DEFAULT_ACCOUNT_TYPES: {
              bip122: "payment",
              eip155: "smartAccount",
              polkadot: "eoa",
              solana: "eoa",
            },
            ADAPTER_TYPES: {
              UNIVERSAL: "universal",
              SOLANA: "solana",
              WAGMI: "wagmi",
              ETHERS: "ethers",
              ETHERS5: "ethers5",
              BITCOIN: "bitcoin",
            },
            SIWX_DEFAULTS: { signOutOnDisconnect: !0 },
          };
        e.s({ StorageUtil: () => d }, 55931),
          e.s(
            {
              SafeLocalStorage: () => c,
              SafeLocalStorageKeys: () => s,
              getSafeConnectorIdKey: () => l,
              isSafe: () => u,
            },
            186735
          );
        let s = {
          WALLET_ID: "@appkit/wallet_id",
          WALLET_NAME: "@appkit/wallet_name",
          SOLANA_WALLET: "@appkit/solana_wallet",
          SOLANA_CAIP_CHAIN: "@appkit/solana_caip_chain",
          ACTIVE_CAIP_NETWORK_ID: "@appkit/active_caip_network_id",
          CONNECTED_SOCIAL: "@appkit/connected_social",
          CONNECTED_SOCIAL_USERNAME: "@appkit-wallet/SOCIAL_USERNAME",
          RECENT_WALLETS: "@appkit/recent_wallets",
          DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
          ACTIVE_NAMESPACE: "@appkit/active_namespace",
          CONNECTED_NAMESPACES: "@appkit/connected_namespaces",
          CONNECTION_STATUS: "@appkit/connection_status",
          SIWX_AUTH_TOKEN: "@appkit/siwx-auth-token",
          SIWX_NONCE_TOKEN: "@appkit/siwx-nonce-token",
          TELEGRAM_SOCIAL_PROVIDER: "@appkit/social_provider",
          NATIVE_BALANCE_CACHE: "@appkit/native_balance_cache",
          PORTFOLIO_CACHE: "@appkit/portfolio_cache",
          ENS_CACHE: "@appkit/ens_cache",
          IDENTITY_CACHE: "@appkit/identity_cache",
          PREFERRED_ACCOUNT_TYPES: "@appkit/preferred_account_types",
          CONNECTIONS: "@appkit/connections",
          DISCONNECTED_CONNECTOR_IDS: "@appkit/disconnected_connector_ids",
        };
        function l(e) {
          if (!e)
            throw Error("Namespace is required for CONNECTED_CONNECTOR_ID");
          return "@appkit/".concat(e, ":connected_connector_id");
        }
        let c = {
          setItem(e, t) {
            u() && void 0 !== t && localStorage.setItem(e, t);
          },
          getItem(e) {
            if (u()) return localStorage.getItem(e) || void 0;
          },
          removeItem(e) {
            u() && localStorage.removeItem(e);
          },
          clear() {
            u() && localStorage.clear();
          },
        };
        function u() {
          return (
            "undefined" != typeof window && "undefined" != typeof localStorage
          );
        }
        let d = {
            cacheExpiry: {
              portfolio: 3e4,
              nativeBalance: 3e4,
              ens: 3e5,
              identity: 3e5,
            },
            isCacheExpired: (e, t) => Date.now() - e > t,
            getActiveNetworkProps() {
              let e = d.getActiveNamespace(),
                t = d.getActiveCaipNetworkId(),
                r = t ? t.split(":")[1] : void 0;
              return {
                namespace: e,
                caipNetworkId: t,
                chainId: r ? (isNaN(Number(r)) ? r : Number(r)) : void 0,
              };
            },
            setWalletConnectDeepLink(e) {
              let { name: t, href: r } = e;
              try {
                c.setItem(
                  s.DEEPLINK_CHOICE,
                  JSON.stringify({ href: r, name: t })
                );
              } catch (e) {
                console.info("Unable to set WalletConnect deep link");
              }
            },
            getWalletConnectDeepLink() {
              try {
                let e = c.getItem(s.DEEPLINK_CHOICE);
                if (e) return JSON.parse(e);
              } catch (e) {
                console.info("Unable to get WalletConnect deep link");
              }
            },
            deleteWalletConnectDeepLink() {
              try {
                c.removeItem(s.DEEPLINK_CHOICE);
              } catch (e) {
                console.info("Unable to delete WalletConnect deep link");
              }
            },
            setActiveNamespace(e) {
              try {
                c.setItem(s.ACTIVE_NAMESPACE, e);
              } catch (e) {
                console.info("Unable to set active namespace");
              }
            },
            setActiveCaipNetworkId(e) {
              try {
                c.setItem(s.ACTIVE_CAIP_NETWORK_ID, e),
                  d.setActiveNamespace(e.split(":")[0]);
              } catch (e) {
                console.info("Unable to set active caip network id");
              }
            },
            getActiveCaipNetworkId() {
              try {
                return c.getItem(s.ACTIVE_CAIP_NETWORK_ID);
              } catch (e) {
                console.info("Unable to get active caip network id");
                return;
              }
            },
            deleteActiveCaipNetworkId() {
              try {
                c.removeItem(s.ACTIVE_CAIP_NETWORK_ID);
              } catch (e) {
                console.info("Unable to delete active caip network id");
              }
            },
            deleteConnectedConnectorId(e) {
              try {
                let t = l(e);
                c.removeItem(t);
              } catch (e) {
                console.info("Unable to delete connected connector id");
              }
            },
            setAppKitRecent(e) {
              try {
                let t = d.getRecentWallets();
                t.find((t) => t.id === e.id) ||
                  (t.unshift(e),
                  t.length > 2 && t.pop(),
                  c.setItem(s.RECENT_WALLETS, JSON.stringify(t)));
              } catch (e) {
                console.info("Unable to set AppKit recent");
              }
            },
            getRecentWallets() {
              try {
                let e = c.getItem(s.RECENT_WALLETS);
                return e ? JSON.parse(e) : [];
              } catch (e) {
                console.info("Unable to get AppKit recent");
              }
              return [];
            },
            setConnectedConnectorId(e, t) {
              try {
                let r = l(e);
                c.setItem(r, t);
              } catch (e) {
                console.info("Unable to set Connected Connector Id");
              }
            },
            getActiveNamespace() {
              try {
                return c.getItem(s.ACTIVE_NAMESPACE);
              } catch (e) {
                console.info("Unable to get active namespace");
              }
            },
            getConnectedConnectorId(e) {
              if (e)
                try {
                  let t = l(e);
                  return c.getItem(t);
                } catch (t) {
                  console.info(
                    "Unable to get connected connector id in namespace",
                    e
                  );
                }
            },
            setConnectedSocialProvider(e) {
              try {
                c.setItem(s.CONNECTED_SOCIAL, e);
              } catch (e) {
                console.info("Unable to set connected social provider");
              }
            },
            getConnectedSocialProvider() {
              try {
                return c.getItem(s.CONNECTED_SOCIAL);
              } catch (e) {
                console.info("Unable to get connected social provider");
              }
            },
            deleteConnectedSocialProvider() {
              try {
                c.removeItem(s.CONNECTED_SOCIAL);
              } catch (e) {
                console.info("Unable to delete connected social provider");
              }
            },
            getConnectedSocialUsername() {
              try {
                return c.getItem(s.CONNECTED_SOCIAL_USERNAME);
              } catch (e) {
                console.info("Unable to get connected social username");
              }
            },
            getStoredActiveCaipNetworkId() {
              var e;
              let t = c.getItem(s.ACTIVE_CAIP_NETWORK_ID);
              return null == t || null == (e = t.split(":")) ? void 0 : e[1];
            },
            setConnectionStatus(e) {
              try {
                c.setItem(s.CONNECTION_STATUS, e);
              } catch (e) {
                console.info("Unable to set connection status");
              }
            },
            getConnectionStatus() {
              try {
                return c.getItem(s.CONNECTION_STATUS);
              } catch (e) {
                return;
              }
            },
            getConnectedNamespaces() {
              try {
                let e = c.getItem(s.CONNECTED_NAMESPACES);
                if (!(null == e ? void 0 : e.length)) return [];
                return e.split(",");
              } catch (e) {
                return [];
              }
            },
            setConnectedNamespaces(e) {
              try {
                let t = Array.from(new Set(e));
                c.setItem(s.CONNECTED_NAMESPACES, t.join(","));
              } catch (e) {
                console.info("Unable to set namespaces in storage");
              }
            },
            addConnectedNamespace(e) {
              try {
                let t = d.getConnectedNamespaces();
                t.includes(e) || (t.push(e), d.setConnectedNamespaces(t));
              } catch (e) {
                console.info("Unable to add connected namespace");
              }
            },
            removeConnectedNamespace(e) {
              try {
                let t = d.getConnectedNamespaces(),
                  r = t.indexOf(e);
                r > -1 && (t.splice(r, 1), d.setConnectedNamespaces(t));
              } catch (e) {
                console.info("Unable to remove connected namespace");
              }
            },
            getTelegramSocialProvider() {
              try {
                return c.getItem(s.TELEGRAM_SOCIAL_PROVIDER);
              } catch (e) {
                return (
                  console.info("Unable to get telegram social provider"), null
                );
              }
            },
            setTelegramSocialProvider(e) {
              try {
                c.setItem(s.TELEGRAM_SOCIAL_PROVIDER, e);
              } catch (e) {
                console.info("Unable to set telegram social provider");
              }
            },
            removeTelegramSocialProvider() {
              try {
                c.removeItem(s.TELEGRAM_SOCIAL_PROVIDER);
              } catch (e) {
                console.info("Unable to remove telegram social provider");
              }
            },
            getBalanceCache() {
              let e = {};
              try {
                let t = c.getItem(s.PORTFOLIO_CACHE);
                e = t ? JSON.parse(t) : {};
              } catch (e) {
                console.info("Unable to get balance cache");
              }
              return e;
            },
            removeAddressFromBalanceCache(e) {
              try {
                let t = d.getBalanceCache();
                c.setItem(
                  s.PORTFOLIO_CACHE,
                  JSON.stringify({ ...t, [e]: void 0 })
                );
              } catch (t) {
                console.info("Unable to remove address from balance cache", e);
              }
            },
            getBalanceCacheForCaipAddress(e) {
              try {
                let t = d.getBalanceCache()[e];
                if (
                  t &&
                  !this.isCacheExpired(t.timestamp, this.cacheExpiry.portfolio)
                )
                  return t.balance;
                d.removeAddressFromBalanceCache(e);
              } catch (t) {
                console.info("Unable to get balance cache for address", e);
              }
            },
            updateBalanceCache(e) {
              try {
                let t = d.getBalanceCache();
                (t[e.caipAddress] = e),
                  c.setItem(s.PORTFOLIO_CACHE, JSON.stringify(t));
              } catch (t) {
                console.info("Unable to update balance cache", e);
              }
            },
            getNativeBalanceCache() {
              let e = {};
              try {
                let t = c.getItem(s.NATIVE_BALANCE_CACHE);
                e = t ? JSON.parse(t) : {};
              } catch (e) {
                console.info("Unable to get balance cache");
              }
              return e;
            },
            removeAddressFromNativeBalanceCache(e) {
              try {
                let t = d.getBalanceCache();
                c.setItem(
                  s.NATIVE_BALANCE_CACHE,
                  JSON.stringify({ ...t, [e]: void 0 })
                );
              } catch (t) {
                console.info("Unable to remove address from balance cache", e);
              }
            },
            getNativeBalanceCacheForCaipAddress(e) {
              try {
                let t = d.getNativeBalanceCache()[e];
                if (
                  t &&
                  !this.isCacheExpired(
                    t.timestamp,
                    this.cacheExpiry.nativeBalance
                  )
                )
                  return t;
                console.info("Discarding cache for address", e),
                  d.removeAddressFromBalanceCache(e);
              } catch (t) {
                console.info("Unable to get balance cache for address", e);
              }
            },
            updateNativeBalanceCache(e) {
              try {
                let t = d.getNativeBalanceCache();
                (t[e.caipAddress] = e),
                  c.setItem(s.NATIVE_BALANCE_CACHE, JSON.stringify(t));
              } catch (t) {
                console.info("Unable to update balance cache", e);
              }
            },
            getEnsCache() {
              let e = {};
              try {
                let t = c.getItem(s.ENS_CACHE);
                e = t ? JSON.parse(t) : {};
              } catch (e) {
                console.info("Unable to get ens name cache");
              }
              return e;
            },
            getEnsFromCacheForAddress(e) {
              try {
                let t = d.getEnsCache()[e];
                if (
                  t &&
                  !this.isCacheExpired(t.timestamp, this.cacheExpiry.ens)
                )
                  return t.ens;
                d.removeEnsFromCache(e);
              } catch (t) {
                console.info("Unable to get ens name from cache", e);
              }
            },
            updateEnsCache(e) {
              try {
                let t = d.getEnsCache();
                (t[e.address] = e), c.setItem(s.ENS_CACHE, JSON.stringify(t));
              } catch (t) {
                console.info("Unable to update ens name cache", e);
              }
            },
            removeEnsFromCache(e) {
              try {
                let t = d.getEnsCache();
                c.setItem(s.ENS_CACHE, JSON.stringify({ ...t, [e]: void 0 }));
              } catch (t) {
                console.info("Unable to remove ens name from cache", e);
              }
            },
            getIdentityCache() {
              let e = {};
              try {
                let t = c.getItem(s.IDENTITY_CACHE);
                e = t ? JSON.parse(t) : {};
              } catch (e) {
                console.info("Unable to get identity cache");
              }
              return e;
            },
            getIdentityFromCacheForAddress(e) {
              try {
                let t = d.getIdentityCache()[e];
                if (
                  t &&
                  !this.isCacheExpired(t.timestamp, this.cacheExpiry.identity)
                )
                  return t.identity;
                d.removeIdentityFromCache(e);
              } catch (t) {
                console.info("Unable to get identity from cache", e);
              }
            },
            updateIdentityCache(e) {
              try {
                let t = d.getIdentityCache();
                (t[e.address] = {
                  identity: e.identity,
                  timestamp: e.timestamp,
                }),
                  c.setItem(s.IDENTITY_CACHE, JSON.stringify(t));
              } catch (t) {
                console.info("Unable to update identity cache", e);
              }
            },
            removeIdentityFromCache(e) {
              try {
                let t = d.getIdentityCache();
                c.setItem(
                  s.IDENTITY_CACHE,
                  JSON.stringify({ ...t, [e]: void 0 })
                );
              } catch (t) {
                console.info("Unable to remove identity from cache", e);
              }
            },
            clearAddressCache() {
              try {
                c.removeItem(s.PORTFOLIO_CACHE),
                  c.removeItem(s.NATIVE_BALANCE_CACHE),
                  c.removeItem(s.ENS_CACHE),
                  c.removeItem(s.IDENTITY_CACHE);
              } catch (e) {
                console.info("Unable to clear address cache");
              }
            },
            setPreferredAccountTypes(e) {
              try {
                c.setItem(s.PREFERRED_ACCOUNT_TYPES, JSON.stringify(e));
              } catch (t) {
                console.info("Unable to set preferred account types", e);
              }
            },
            getPreferredAccountTypes() {
              try {
                let e = c.getItem(s.PREFERRED_ACCOUNT_TYPES);
                if (!e) return {};
                return JSON.parse(e);
              } catch (e) {
                console.info("Unable to get preferred account types");
              }
              return {};
            },
            setConnections(e, r) {
              try {
                var n;
                let o = d.getConnections(),
                  a = null != (n = o[r]) ? n : [],
                  i = new Map();
                for (let e of a) i.set(e.connectorId, { ...e });
                for (let r of e) {
                  let e = i.get(r.connectorId),
                    n = r.connectorId === t.ConstantsUtil.CONNECTOR_ID.AUTH;
                  if (e && !n) {
                    let t = new Set(
                        e.accounts.map((e) => e.address.toLowerCase())
                      ),
                      n = r.accounts.filter(
                        (e) => !t.has(e.address.toLowerCase())
                      );
                    e.accounts.push(...n);
                  } else i.set(r.connectorId, { ...r });
                }
                let l = { ...o, [r]: Array.from(i.values()) };
                c.setItem(s.CONNECTIONS, JSON.stringify(l));
              } catch (e) {
                console.error("Unable to sync connections to storage", e);
              }
            },
            getConnections() {
              try {
                let e = c.getItem(s.CONNECTIONS);
                if (!e) return {};
                return JSON.parse(e);
              } catch (e) {
                return (
                  console.error("Unable to get connections from storage", e), {}
                );
              }
            },
            deleteAddressFromConnection(e) {
              let { connectorId: t, address: r, namespace: n } = e;
              try {
                var o;
                let e = d.getConnections(),
                  a = null != (o = e[n]) ? o : [],
                  i = new Map(a.map((e) => [e.connectorId, e])),
                  l = i.get(t);
                if (l) {
                  let e = l.accounts.filter(
                    (e) => e.address.toLowerCase() !== r.toLowerCase()
                  );
                  0 === e.length
                    ? i.delete(t)
                    : i.set(t, {
                        ...l,
                        accounts: l.accounts.filter(
                          (e) => e.address.toLowerCase() !== r.toLowerCase()
                        ),
                      });
                }
                c.setItem(
                  s.CONNECTIONS,
                  JSON.stringify({ ...e, [n]: Array.from(i.values()) })
                );
              } catch (e) {
                console.error(
                  'Unable to remove address "'
                    .concat(r, '" from connector "')
                    .concat(t, '" in namespace "')
                    .concat(n, '"')
                );
              }
            },
            getDisconnectedConnectorIds() {
              try {
                let e = c.getItem(s.DISCONNECTED_CONNECTOR_IDS);
                if (!e) return {};
                return JSON.parse(e);
              } catch (e) {
                console.info("Unable to get disconnected connector ids");
              }
              return {};
            },
            addDisconnectedConnectorId(e, t) {
              try {
                var r;
                let n = d.getDisconnectedConnectorIds(),
                  o = null != (r = n[t]) ? r : [];
                o.push(e),
                  c.setItem(
                    s.DISCONNECTED_CONNECTOR_IDS,
                    JSON.stringify({ ...n, [t]: Array.from(new Set(o)) })
                  );
              } catch (r) {
                console.error(
                  'Unable to set disconnected connector id "'
                    .concat(e, '" for namespace "')
                    .concat(t, '"')
                );
              }
            },
            removeDisconnectedConnectorId(e, t) {
              try {
                var r;
                let n = d.getDisconnectedConnectorIds(),
                  o = null != (r = n[t]) ? r : [];
                (o = o.filter((t) => t.toLowerCase() !== e.toLowerCase())),
                  c.setItem(
                    s.DISCONNECTED_CONNECTOR_IDS,
                    JSON.stringify({ ...n, [t]: Array.from(new Set(o)) })
                  );
              } catch (r) {
                console.error(
                  'Unable to remove disconnected connector id "'
                    .concat(e, '" for namespace "')
                    .concat(t, '"')
                );
              }
            },
            isConnectorDisconnected(e, t) {
              try {
                var r;
                return (
                  null != (r = d.getDisconnectedConnectorIds()[t]) ? r : []
                ).some((t) => t.toLowerCase() === e.toLowerCase());
              } catch (r) {
                console.info(
                  'Unable to get disconnected connector id "'
                    .concat(e, '" for namespace "')
                    .concat(t, '"')
                );
              }
              return !1;
            },
          },
          p = {
            isMobile() {
              if (this.isClient()) {
                var e, t;
                return !!(
                  ((null == (e = window) ? void 0 : e.matchMedia) &&
                    "function" == typeof window.matchMedia &&
                    (null == (t = window.matchMedia("(pointer:coarse)"))
                      ? void 0
                      : t.matches)) ||
                  /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(
                    navigator.userAgent
                  )
                );
              }
              return !1;
            },
            checkCaipNetwork(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "";
              return null == e
                ? void 0
                : e.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase());
            },
            isAndroid() {
              var e;
              if (!this.isMobile()) return !1;
              let t =
                null == (e = window)
                  ? void 0
                  : e.navigator.userAgent.toLowerCase();
              return p.isMobile() && t.includes("android");
            },
            isIos() {
              var e;
              if (!this.isMobile()) return !1;
              let t =
                null == (e = window)
                  ? void 0
                  : e.navigator.userAgent.toLowerCase();
              return t.includes("iphone") || t.includes("ipad");
            },
            isSafari() {
              var e;
              return (
                !!this.isClient() &&
                (null == (e = window)
                  ? void 0
                  : e.navigator.userAgent.toLowerCase()
                ).includes("safari")
              );
            },
            isClient: () => "undefined" != typeof window,
            isPairingExpired: (e) => !e || e - Date.now() <= i.TEN_SEC_MS,
            isAllowedRetry(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : i.ONE_SEC_MS;
              return Date.now() - e >= t;
            },
            copyToClopboard(e) {
              navigator.clipboard.writeText(e);
            },
            isIframe() {
              try {
                var e, t;
                return (
                  (null == (e = window) ? void 0 : e.self) !==
                  (null == (t = window) ? void 0 : t.top)
                );
              } catch (e) {
                return !1;
              }
            },
            isSafeApp() {
              if (p.isClient() && window.self !== window.top)
                try {
                  var e, t, r;
                  let n =
                    null == (r = window) ||
                    null == (t = r.location) ||
                    null == (e = t.ancestorOrigins)
                      ? void 0
                      : e[0];
                  if (n) {
                    let e = new URL(n),
                      t = new URL("https://app.safe.global");
                    return e.hostname === t.hostname;
                  }
                } catch (e) {}
              return !1;
            },
            getPairingExpiry: () => Date.now() + i.FOUR_MINUTES_MS,
            getNetworkId: (e) => (null == e ? void 0 : e.split(":")[1]),
            getPlainAddress: (e) => (null == e ? void 0 : e.split(":")[2]),
            wait: async (e) =>
              new Promise((t) => {
                setTimeout(t, e);
              }),
            debounce(e) {
              let t,
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 500;
              return function () {
                for (var n = arguments.length, o = Array(n), a = 0; a < n; a++)
                  o[a] = arguments[a];
                t && clearTimeout(t),
                  (t = setTimeout(function () {
                    e(...o);
                  }, r));
              };
            },
            isHttpUrl: (e) =>
              e.startsWith("http://") || e.startsWith("https://"),
            formatNativeUrl(e, t) {
              let r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null;
              if (p.isHttpUrl(e)) return this.formatUniversalUrl(e, t);
              let n = e,
                o = r;
              n.includes("://") ||
                ((n = e.replaceAll("/", "").replaceAll(":", "")),
                (n = "".concat(n, "://"))),
                n.endsWith("/") || (n = "".concat(n, "/")),
                !o ||
                  (null == o ? void 0 : o.endsWith("/")) ||
                  (o = "".concat(o, "/")),
                this.isTelegram() &&
                  this.isAndroid() &&
                  (t = encodeURIComponent(t));
              let a = encodeURIComponent(t);
              return {
                redirect: "".concat(n, "wc?uri=").concat(a),
                redirectUniversalLink: o
                  ? "".concat(o, "wc?uri=").concat(a)
                  : void 0,
                href: n,
              };
            },
            formatUniversalUrl(e, t) {
              if (!p.isHttpUrl(e)) return this.formatNativeUrl(e, t);
              let r = e;
              r.endsWith("/") || (r = "".concat(r, "/"));
              let n = encodeURIComponent(t);
              return { redirect: "".concat(r, "wc?uri=").concat(n), href: r };
            },
            getOpenTargetForPlatform(e) {
              return "popupWindow" === e
                ? e
                : this.isTelegram()
                ? d.getTelegramSocialProvider()
                  ? "_top"
                  : "_blank"
                : e;
            },
            openHref(e, t, r) {
              var n;
              null == (n = window) ||
                n.open(
                  e,
                  this.getOpenTargetForPlatform(t),
                  r || "noreferrer noopener"
                );
            },
            returnOpenHref(e, t, r) {
              var n;
              return null == (n = window)
                ? void 0
                : n.open(
                    e,
                    this.getOpenTargetForPlatform(t),
                    r || "noreferrer noopener"
                  );
            },
            isTelegram: () =>
              "undefined" != typeof window &&
              (!!window.TelegramWebviewProxy ||
                !!window.Telegram ||
                !!window.TelegramWebviewProxyProto),
            isPWA() {
              var e, t, r, n;
              if ("undefined" == typeof window) return !1;
              let o =
                  null != (e = window) &&
                  !!e.matchMedia &&
                  "function" == typeof window.matchMedia &&
                  (null == (t = window.matchMedia("(display-mode: standalone)"))
                    ? void 0
                    : t.matches),
                a =
                  null == (n = window) || null == (r = n.navigator)
                    ? void 0
                    : r.standalone;
              return !!(o || a);
            },
            preloadImage: async (e) =>
              Promise.race([
                new Promise((t, r) => {
                  let n = new Image();
                  (n.onload = t),
                    (n.onerror = r),
                    (n.crossOrigin = "anonymous"),
                    (n.src = e);
                }),
                p.wait(2e3),
              ]),
            formatBalance(e, t) {
              let r = "0.000";
              if ("string" == typeof e) {
                let t = Number(e);
                if (t) {
                  let e = Math.floor(1e3 * t) / 1e3;
                  e && (r = e.toString());
                }
              }
              return "".concat(r).concat(t ? " ".concat(t) : "");
            },
            formatBalance2(e, t) {
              let r;
              if ("0" === e) r = "0";
              else if ("string" == typeof e) {
                let t = Number(e);
                if (t) {
                  var n;
                  r =
                    null == (n = t.toString().match(/^-?\d+(?:\.\d{0,3})?/u))
                      ? void 0
                      : n[0];
                }
              }
              return {
                value: null != r ? r : "0",
                rest: "0" === r ? "000" : "",
                symbol: t,
              };
            },
            getApiUrl: () => t.ConstantsUtil.W3M_API_URL,
            getBlockchainApiUrl: () => t.ConstantsUtil.BLOCKCHAIN_API_RPC_URL,
            getAnalyticsUrl: () => t.ConstantsUtil.PULSE_API_URL,
            getUUID() {
              var e;
              return (null == (e = crypto) ? void 0 : e.randomUUID)
                ? crypto.randomUUID()
                : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                    /[xy]/gu,
                    (e) => {
                      let t = (16 * Math.random()) | 0;
                      return ("x" === e ? t : (3 & t) | 8).toString(16);
                    }
                  );
            },
            parseError(e) {
              var t, r;
              return "string" == typeof e
                ? e
                : "string" ==
                  typeof (null == e ||
                  null == (r = e.issues) ||
                  null == (t = r[0])
                    ? void 0
                    : t.message)
                ? e.issues[0].message
                : e instanceof Error
                ? e.message
                : "Unknown error";
            },
            sortRequestedNetworks(e) {
              let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [],
                r = {};
              return (
                t &&
                  e &&
                  (e.forEach((e, t) => {
                    r[e] = t;
                  }),
                  t.sort((e, t) => {
                    let n = r[e.id],
                      o = r[t.id];
                    return void 0 !== n && void 0 !== o
                      ? n - o
                      : void 0 !== n
                      ? -1
                      : 1 * (void 0 !== o);
                  })),
                t
              );
            },
            calculateBalance(e) {
              let t = 0;
              for (let n of e) {
                var r;
                t += null != (r = n.value) ? r : 0;
              }
              return t;
            },
            formatTokenBalance(e) {
              let [t, r] = e.toFixed(2).split(".");
              return { dollars: t, pennies: r };
            },
            isAddress(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "eip155";
              switch (t) {
                case "eip155":
                  if (
                    /^(?:0x)?[0-9a-f]{40}$/iu.test(e) &&
                    (/^(?:0x)?[0-9a-f]{40}$/iu.test(e) ||
                      /^(?:0x)?[0-9A-F]{40}$/iu.test(e))
                  )
                    return !0;
                  return !1;
                case "solana":
                  return /[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);
                default:
                  return !1;
              }
            },
            uniqueBy(e, t) {
              let r = new Set();
              return e.filter((e) => {
                let n = e[t];
                return !r.has(n) && (r.add(n), !0);
              });
            },
            generateSdkVersion(e, t, r) {
              let n =
                0 === e.length
                  ? i.ADAPTER_TYPES.UNIVERSAL
                  : e.map((e) => e.adapterType).join(",");
              return "".concat(t, "-").concat(n, "-").concat(r);
            },
            createAccount: (e, t, r, n, o) => ({
              namespace: e,
              address: t,
              type: r,
              publicKey: n,
              path: o,
            }),
            isCaipAddress(e) {
              if ("string" != typeof e) return !1;
              let r = e.split(":"),
                n = r[0];
              return (
                3 === r.filter(Boolean).length &&
                n in t.ConstantsUtil.CHAIN_NAME_MAP
              );
            },
            getAccount: (e) =>
              e
                ? "string" == typeof e
                  ? { address: e, chainId: void 0 }
                  : { address: e.address, chainId: e.chainId }
                : { address: void 0, chainId: void 0 },
            isMac() {
              var e;
              let t =
                null == (e = window)
                  ? void 0
                  : e.navigator.userAgent.toLowerCase();
              return t.includes("macintosh") && !t.includes("safari");
            },
            formatTelegramSocialLoginUrl(e) {
              var t;
              let r = "--".concat(
                  encodeURIComponent(
                    null == (t = window) ? void 0 : t.location.href
                  )
                ),
                n = "state=";
              if ("auth.magic.link" === new URL(e).host) {
                let t = "provider_authorization_url=",
                  o = e.substring(e.indexOf(t) + t.length),
                  a = this.injectIntoUrl(decodeURIComponent(o), n, r);
                return e.replace(o, encodeURIComponent(a));
              }
              return this.injectIntoUrl(e, n, r);
            },
            injectIntoUrl(e, t, r) {
              let n = e.indexOf(t);
              if (-1 === n)
                throw Error(
                  "".concat(t, " parameter not found in the URL: ").concat(e)
                );
              let o = e.indexOf("&", n),
                a = t.length,
                i = -1 !== o ? o : e.length,
                s = e.substring(0, n + a),
                l = e.substring(n + a, i);
              return s + (l + r) + e.substring(o);
            },
          };
      },
      [940462, 186735, 55931],
    ],
    579586: (e) => {
      "use strict";
      async function t() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        let n = await fetch(...t);
        if (!n.ok)
          throw Error("HTTP status code: ".concat(n.status), { cause: n });
        return n;
      }
      e.s({ FetchUtil: () => r });
      class r {
        async get(e) {
          let { headers: r, signal: n, cache: o, ...a } = e,
            i = this.createUrl(a);
          return (
            await t(i, { method: "GET", headers: r, signal: n, cache: o })
          ).json();
        }
        async getBlob(e) {
          let { headers: r, signal: n, ...o } = e,
            a = this.createUrl(o);
          return (await t(a, { method: "GET", headers: r, signal: n })).blob();
        }
        async post(e) {
          let { body: r, headers: n, signal: o, ...a } = e,
            i = this.createUrl(a);
          return (
            await t(i, {
              method: "POST",
              headers: n,
              body: r ? JSON.stringify(r) : void 0,
              signal: o,
            })
          ).json();
        }
        async put(e) {
          let { body: r, headers: n, signal: o, ...a } = e,
            i = this.createUrl(a);
          return (
            await t(i, {
              method: "PUT",
              headers: n,
              body: r ? JSON.stringify(r) : void 0,
              signal: o,
            })
          ).json();
        }
        async delete(e) {
          let { body: r, headers: n, signal: o, ...a } = e,
            i = this.createUrl(a);
          return (
            await t(i, {
              method: "DELETE",
              headers: n,
              body: r ? JSON.stringify(r) : void 0,
              signal: o,
            })
          ).json();
        }
        createUrl(e) {
          let { path: t, params: r } = e,
            n = new URL(t, this.baseUrl);
          return (
            r &&
              Object.entries(r).forEach((e) => {
                let [t, r] = e;
                r && n.searchParams.append(t, r);
              }),
            this.clientId && n.searchParams.append("clientId", this.clientId),
            n
          );
        }
        constructor({ baseUrl: e, clientId: t }) {
          (this.baseUrl = e), (this.clientId = t);
        }
      }
    },
    873206: (e) => {
      "use strict";
      e.s({ proxyMap: () => i, subscribeKey: () => r });
      var t = e.i(724233);
      function r(e, r, n, o) {
        let a = e[r];
        return (0, t.subscribe)(
          e,
          () => {
            let t = e[r];
            Object.is(a, t) || n((a = t));
          },
          o
        );
      }
      Symbol();
      let { proxyStateMap: n, snapCache: o } = (0,
        t.unstable_getInternalStates)(),
        a = (e) => n.has(e);
      function i(e) {
        let r = [],
          n = 0,
          i = new Map(),
          s = new WeakMap(),
          l = (e) => s.get(e) || i;
        if (e) {
          if ("function" != typeof e[Symbol.iterator])
            throw TypeError(
              "proxyMap:\n	initial state must be iterable\n		tip: structure should be [[key, value]]"
            );
          for (let [t, o] of e) i.set(t, n), (r[n++] = o);
        }
        let c = {
            data: r,
            index: n,
            epoch: 0,
            get size() {
              return (
                a(this) ||
                  (() => {
                    let e = o.get(c),
                      t = null == e ? void 0 : e[1];
                    if (t && !s.has(t)) {
                      let e = new Map(i);
                      s.set(t, e);
                    }
                  })(),
                l(this).size
              );
            },
            get(e) {
              let t = l(this).get(e);
              return void 0 === t ? void this.epoch : this.data[t];
            },
            has(e) {
              let t = l(this);
              return this.epoch, t.has(e);
            },
            set(e, t) {
              if (!a(this))
                throw Error("Cannot perform mutations on a snapshot");
              let r = i.get(e);
              return (
                void 0 === r
                  ? (i.set(e, this.index), (this.data[this.index++] = t))
                  : (this.data[r] = t),
                this.epoch++,
                this
              );
            },
            delete(e) {
              if (!a(this))
                throw Error("Cannot perform mutations on a snapshot");
              let t = i.get(e);
              return (
                void 0 !== t &&
                (delete this.data[t], i.delete(e), this.epoch++, !0)
              );
            },
            clear() {
              if (!a(this))
                throw Error("Cannot perform mutations on a snapshot");
              (this.data.length = 0), (this.index = 0), this.epoch++, i.clear();
            },
            forEach(e) {
              this.epoch,
                l(this).forEach((t, r) => {
                  e(this.data[t], r, this);
                });
            },
            *entries() {
              for (let [e, t] of (this.epoch, l(this))) yield [e, this.data[t]];
            },
            *keys() {
              for (let e of (this.epoch, l(this).keys())) yield e;
            },
            *values() {
              for (let e of (this.epoch, l(this).values())) yield this.data[e];
            },
            [Symbol.iterator]() {
              return this.entries();
            },
            get [Symbol.toStringTag]() {
              return "Map";
            },
            toJSON() {
              return new Map(this.entries());
            },
          },
          u = (0, t.proxy)(c);
        return (
          Object.defineProperties(u, {
            size: { enumerable: !1 },
            index: { enumerable: !1 },
            epoch: { enumerable: !1 },
            data: { enumerable: !1 },
            toJSON: { enumerable: !1 },
          }),
          Object.seal(u),
          u
        );
      }
      let { proxyStateMap: s, snapCache: l } = (0,
      t.unstable_getInternalStates)();
    },
    610411: (e) => {
      "use strict";
      e.s({ OptionsController: () => s }, 610411);
      var t = e.i(724233),
        r = e.i(873206),
        n = e.i(940462),
        o = e.i(775078);
      let a = {
          getFeatureValue(e, t) {
            let r = null == t ? void 0 : t[e];
            return void 0 === r ? n.ConstantsUtil.DEFAULT_FEATURES[e] : r;
          },
          filterSocialsByPlatform(e) {
            if (!e || !e.length) return e;
            if (o.CoreHelperUtil.isTelegram()) {
              if (o.CoreHelperUtil.isIos())
                return e.filter((e) => "google" !== e);
              if (o.CoreHelperUtil.isMac()) return e.filter((e) => "x" !== e);
              if (o.CoreHelperUtil.isAndroid())
                return e.filter((e) => !["facebook", "x"].includes(e));
            }
            return e;
          },
        },
        i = (0, t.proxy)({
          features: n.ConstantsUtil.DEFAULT_FEATURES,
          projectId: "",
          sdkType: "appkit",
          sdkVersion: "html-wagmi-undefined",
          defaultAccountTypes: n.ConstantsUtil.DEFAULT_ACCOUNT_TYPES,
          enableNetworkSwitch: !0,
          experimental_preferUniversalLinks: !1,
          remoteFeatures: {},
        }),
        s = {
          state: i,
          subscribeKey: (e, t) => (0, r.subscribeKey)(i, e, t),
          setOptions(e) {
            Object.assign(i, e);
          },
          setRemoteFeatures(e) {
            var t, r;
            if (!e) return;
            let n = { ...i.remoteFeatures, ...e };
            (i.remoteFeatures = n),
              (null == (t = i.remoteFeatures) ? void 0 : t.socials) &&
                (i.remoteFeatures.socials = a.filterSocialsByPlatform(
                  i.remoteFeatures.socials
                )),
              (null == (r = i.features) ? void 0 : r.pay) &&
                ((i.remoteFeatures.email = !1),
                (i.remoteFeatures.socials = !1));
          },
          setFeatures(e) {
            var t;
            if (!e) return;
            i.features || (i.features = n.ConstantsUtil.DEFAULT_FEATURES);
            let r = { ...i.features, ...e };
            (i.features = r),
              (null == (t = i.features) ? void 0 : t.pay) &&
                i.remoteFeatures &&
                ((i.remoteFeatures.email = !1),
                (i.remoteFeatures.socials = !1));
          },
          setProjectId(e) {
            i.projectId = e;
          },
          setCustomRpcUrls(e) {
            i.customRpcUrls = e;
          },
          setAllWallets(e) {
            i.allWallets = e;
          },
          setIncludeWalletIds(e) {
            i.includeWalletIds = e;
          },
          setExcludeWalletIds(e) {
            i.excludeWalletIds = e;
          },
          setFeaturedWalletIds(e) {
            i.featuredWalletIds = e;
          },
          setTokens(e) {
            i.tokens = e;
          },
          setTermsConditionsUrl(e) {
            i.termsConditionsUrl = e;
          },
          setPrivacyPolicyUrl(e) {
            i.privacyPolicyUrl = e;
          },
          setCustomWallets(e) {
            i.customWallets = e;
          },
          setIsSiweEnabled(e) {
            i.isSiweEnabled = e;
          },
          setIsUniversalProvider(e) {
            i.isUniversalProvider = e;
          },
          setSdkVersion(e) {
            i.sdkVersion = e;
          },
          setMetadata(e) {
            i.metadata = e;
          },
          setDisableAppend(e) {
            i.disableAppend = e;
          },
          setEIP6963Enabled(e) {
            i.enableEIP6963 = e;
          },
          setDebug(e) {
            i.debug = e;
          },
          setEnableWalletConnect(e) {
            i.enableWalletConnect = e;
          },
          setEnableWalletGuide(e) {
            i.enableWalletGuide = e;
          },
          setEnableAuthLogger(e) {
            i.enableAuthLogger = e;
          },
          setEnableWallets(e) {
            i.enableWallets = e;
          },
          setPreferUniversalLinks(e) {
            i.experimental_preferUniversalLinks = e;
          },
          setSIWX(e) {
            if (e)
              for (let [t, r] of Object.entries(n.ConstantsUtil.SIWX_DEFAULTS))
                null != e[t] || (e[t] = r);
            i.siwx = e;
          },
          setConnectMethodsOrder(e) {
            i.features = { ...i.features, connectMethodsOrder: e };
          },
          setWalletFeaturesOrder(e) {
            i.features = { ...i.features, walletFeaturesOrder: e };
          },
          setSocialsOrder(e) {
            i.remoteFeatures = { ...i.remoteFeatures, socials: e };
          },
          setCollapseWallets(e) {
            i.features = { ...i.features, collapseWallets: e };
          },
          setEnableEmbedded(e) {
            i.enableEmbedded = e;
          },
          setAllowUnsupportedChain(e) {
            i.allowUnsupportedChain = e;
          },
          setManualWCControl(e) {
            i.manualWCControl = e;
          },
          setEnableNetworkSwitch(e) {
            i.enableNetworkSwitch = e;
          },
          setEnableReconnect(e) {
            i.enableReconnect = e;
          },
          setDefaultAccountTypes() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            Object.entries(e).forEach((e) => {
              let [t, r] = e;
              r && (i.defaultAccountTypes[t] = r);
            });
          },
          setUniversalProviderConfigOverride(e) {
            i.universalProviderConfigOverride = e;
          },
          getUniversalProviderConfigOverride: () =>
            i.universalProviderConfigOverride,
          getSnapshot: () => (0, t.snapshot)(i),
        };
    },
    317687: (e) => {
      "use strict";
      e.s({ AppKitError: () => u, withErrorBoundary: () => p }, 317687);
      var t = e.i(724233),
        r = e.i(873206),
        n = e.i(775078),
        o = e.i(579586),
        a = e.i(610411);
      let i = Object.freeze({ enabled: !0, events: [] }),
        s = new o.FetchUtil({
          baseUrl: n.CoreHelperUtil.getAnalyticsUrl(),
          clientId: null,
        }),
        l = (0, t.proxy)({ ...i }),
        c = {
          state: l,
          subscribeKey: (e, t) => (0, r.subscribeKey)(l, e, t),
          async sendError(e, t) {
            if (!l.enabled) return;
            let r = Date.now();
            if (
              l.events.filter(
                (e) =>
                  r - new Date(e.properties.timestamp || "").getTime() < 6e4
              ).length >= 5
            )
              return;
            let o = {
              type: "error",
              event: t,
              properties: {
                errorType: e.name,
                errorMessage: e.message,
                stackTrace: e.stack,
                timestamp: new Date().toISOString(),
              },
            };
            l.events.push(o);
            try {
              if ("undefined" == typeof window) return;
              let {
                projectId: r,
                sdkType: o,
                sdkVersion: i,
              } = a.OptionsController.state;
              await s.post({
                path: "/e",
                params: { projectId: r, st: o, sv: i || "html-wagmi-4.2.2" },
                body: {
                  eventId: n.CoreHelperUtil.getUUID(),
                  url: window.location.href,
                  domain: window.location.hostname,
                  timestamp: new Date().toISOString(),
                  props: {
                    type: "error",
                    event: t,
                    errorType: e.name,
                    errorMessage: e.message,
                    stackTrace: e.stack,
                  },
                },
              });
            } catch (e) {}
          },
          enable() {
            l.enabled = !0;
          },
          disable() {
            l.enabled = !1;
          },
          clearEvents() {
            l.events = [];
          },
        };
      class u extends Error {
        constructor(e, t, r) {
          super(e),
            (this.name = "AppKitError"),
            (this.category = t),
            (this.originalError = r),
            Object.setPrototypeOf(this, u.prototype);
          let n = !1;
          if (r instanceof Error && "string" == typeof r.stack && r.stack) {
            let e = r.stack,
              t = e.indexOf("\n");
            if (t > -1) {
              let r = e.substring(t + 1);
              (this.stack = ""
                .concat(this.name, ": ")
                .concat(this.message, "\n")
                .concat(r)),
                (n = !0);
            }
          }
          !n &&
            (Error.captureStackTrace
              ? Error.captureStackTrace(this, u)
              : this.stack ||
                (this.stack = "".concat(this.name, ": ").concat(this.message)));
        }
      }
      function d(e, t) {
        let r =
          e instanceof u
            ? e
            : new u(e instanceof Error ? e.message : String(e), t, e);
        throw (c.sendError(r, r.category), r);
      }
      function p(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "INTERNAL_SDK_ERROR",
          r = {};
        return (
          Object.keys(e).forEach((n) => {
            let o = e[n];
            if ("function" == typeof o) {
              let e = o;
              (e =
                "AsyncFunction" === o.constructor.name
                  ? async function () {
                      for (
                        var e = arguments.length, r = Array(e), n = 0;
                        n < e;
                        n++
                      )
                        r[n] = arguments[n];
                      try {
                        return await o(...r);
                      } catch (e) {
                        return d(e, t);
                      }
                    }
                  : function () {
                      for (
                        var e = arguments.length, r = Array(e), n = 0;
                        n < e;
                        n++
                      )
                        r[n] = arguments[n];
                      try {
                        return o(...r);
                      } catch (e) {
                        return d(e, t);
                      }
                    }),
                (r[n] = e);
            } else r[n] = o;
          }),
          r
        );
      }
    },
    586196: (e) => {
      "use strict";
      function t(e, t) {
        return "light" === t
          ? {
              "--w3m-accent":
                (null == e ? void 0 : e["--w3m-accent"]) ||
                "hsla(231, 100%, 70%, 1)",
              "--w3m-background": "#fff",
            }
          : {
              "--w3m-accent":
                (null == e ? void 0 : e["--w3m-accent"]) ||
                "hsla(230, 100%, 67%, 1)",
              "--w3m-background": "#121313",
            };
      }
      e.s({ getW3mThemeVariables: () => t });
    },
    160977: (e) => {
      "use strict";
      e.s({ CUSTOM_DEEPLINK_WALLETS: () => r, MobileWalletUtil: () => n });
      var t = e.i(850524);
      let r = {
          PHANTOM: {
            id: "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
            url: "https://phantom.app",
          },
          SOLFLARE: {
            id: "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
            url: "https://solflare.com",
          },
          COINBASE: {
            id: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
            url: "https://go.cb-w.com",
          },
        },
        n = {
          handleMobileDeeplinkRedirect(e, n) {
            let o = window.location.href,
              a = encodeURIComponent(o);
            if (e === r.PHANTOM.id && !("phantom" in window)) {
              let e = o.startsWith("https") ? "https" : "http",
                t = o.split("/")[2],
                n = encodeURIComponent("".concat(e, "://").concat(t));
              window.location.href = ""
                .concat(r.PHANTOM.url, "/ul/browse/")
                .concat(a, "?ref=")
                .concat(n);
            }
            e !== r.SOLFLARE.id ||
              "solflare" in window ||
              (window.location.href = ""
                .concat(r.SOLFLARE.url, "/ul/v1/browse/")
                .concat(a, "?ref=")
                .concat(a)),
              n !== t.ConstantsUtil.CHAIN.SOLANA ||
                e !== r.COINBASE.id ||
                "coinbaseSolana" in window ||
                (window.location.href = ""
                  .concat(r.COINBASE.url, "/dapp?cb_url=")
                  .concat(a));
          },
        };
    },
    245429: (e) => {
      "use strict";
      e.s({ AssetController: () => a });
      var t = e.i(724233),
        r = e.i(873206),
        n = e.i(317687);
      let o = (0, t.proxy)({
          walletImages: {},
          networkImages: {},
          chainImages: {},
          connectorImages: {},
          tokenImages: {},
          currencyImages: {},
        }),
        a = (0, n.withErrorBoundary)({
          state: o,
          subscribeNetworkImages: (e) =>
            (0, t.subscribe)(o.networkImages, () => e(o.networkImages)),
          subscribeKey: (e, t) => (0, r.subscribeKey)(o, e, t),
          subscribe: (e) => (0, t.subscribe)(o, () => e(o)),
          setWalletImage(e, t) {
            o.walletImages[e] = t;
          },
          setNetworkImage(e, t) {
            o.networkImages[e] = t;
          },
          setChainImage(e, t) {
            o.chainImages[e] = t;
          },
          setConnectorImage(e, t) {
            o.connectorImages = { ...o.connectorImages, [e]: t };
          },
          setTokenImage(e, t) {
            o.tokenImages[e] = t;
          },
          setCurrencyImage(e, t) {
            o.currencyImages[e] = t;
          },
        });
    },
    984892: (e) => {
      "use strict";
      e.s({ AssetUtil: () => i });
      var t = e.i(724233),
        r = e.i(592787),
        n = e.i(245429);
      let o = {
          eip155: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
          solana: "a1b58899-f671-4276-6a5e-56ca5bd59700",
          polkadot: "",
          bip122: "0b4838db-0161-4ffe-022d-532bf03dba00",
          cosmos: "",
        },
        a = (0, t.proxy)({ networkImagePromises: {} }),
        i = {
          async fetchWalletImage(e) {
            if (e)
              return (
                await r.ApiController._fetchWalletImage(e),
                this.getWalletImageById(e)
              );
          },
          async fetchNetworkImage(e) {
            if (!e) return;
            let t = this.getNetworkImageById(e);
            return (
              t ||
              (a.networkImagePromises[e] ||
                (a.networkImagePromises[e] =
                  r.ApiController._fetchNetworkImage(e)),
              await a.networkImagePromises[e],
              this.getNetworkImageById(e))
            );
          },
          getWalletImageById(e) {
            if (e) return n.AssetController.state.walletImages[e];
          },
          getWalletImage: (e) =>
            (null == e ? void 0 : e.image_url)
              ? null == e
                ? void 0
                : e.image_url
              : (null == e ? void 0 : e.image_id)
              ? n.AssetController.state.walletImages[e.image_id]
              : void 0,
          getNetworkImage(e) {
            var t, r, o;
            return (null == e || null == (t = e.assets) ? void 0 : t.imageUrl)
              ? null == e || null == (o = e.assets)
                ? void 0
                : o.imageUrl
              : (null == e || null == (r = e.assets) ? void 0 : r.imageId)
              ? n.AssetController.state.networkImages[e.assets.imageId]
              : void 0;
          },
          getNetworkImageById(e) {
            if (e) return n.AssetController.state.networkImages[e];
          },
          getConnectorImage(e) {
            var t;
            return (null == e ? void 0 : e.imageUrl)
              ? e.imageUrl
              : (null == e || null == (t = e.info) ? void 0 : t.icon)
              ? e.info.icon
              : (null == e ? void 0 : e.imageId)
              ? n.AssetController.state.connectorImages[e.imageId]
              : void 0;
          },
          getChainImage: (e) => n.AssetController.state.networkImages[o[e]],
        };
    },
    830607: (e) => {
      "use strict";
      e.s({ AlertController: () => i });
      var t = e.i(724233),
        r = e.i(873206),
        n = e.i(317687),
        o = e.i(610411);
      let a = (0, t.proxy)({ message: "", variant: "info", open: !1 }),
        i = (0, n.withErrorBoundary)({
          state: a,
          subscribeKey: (e, t) => (0, r.subscribeKey)(a, e, t),
          open(e, t) {
            let { debug: r } = o.OptionsController.state,
              { shortMessage: n, longMessage: i } = e;
            r && ((a.message = n), (a.variant = t), (a.open = !0)),
              i && console.error("function" == typeof i ? i() : i);
          },
          close() {
            (a.open = !1), (a.message = ""), (a.variant = "info");
          },
        });
    },
    962949: (e) => {
      "use strict";
      e.s({ EventsController: () => C });
      var t = e.i(724233),
        r = e.i(850524),
        n = e.i(186735),
        o = e.i(775078),
        a = e.i(579586),
        i = e.i(868263),
        s = e.i(830607),
        l = e.i(610411);
      let c = o.CoreHelperUtil.getAnalyticsUrl(),
        u = new a.FetchUtil({ baseUrl: c, clientId: null }),
        d = ["MODAL_CREATED"],
        p = (0, t.proxy)({
          timestamp: Date.now(),
          reportedErrors: {},
          data: { type: "track", event: "MODAL_CREATED" },
        }),
        C = {
          state: p,
          subscribe: (e) => (0, t.subscribe)(p, () => e(p)),
          getSdkProperties() {
            let {
              projectId: e,
              sdkType: t,
              sdkVersion: r,
            } = l.OptionsController.state;
            return { projectId: e, st: t, sv: r || "html-wagmi-4.2.2" };
          },
          async _sendAnalyticsEvent(e) {
            try {
              let t = i.AccountController.state.address;
              if (d.includes(e.data.event) || "undefined" == typeof window)
                return;
              await u.post({
                path: "/e",
                params: C.getSdkProperties(),
                body: {
                  eventId: o.CoreHelperUtil.getUUID(),
                  url: window.location.href,
                  domain: window.location.hostname,
                  timestamp: e.timestamp,
                  props: { ...e.data, address: t },
                },
              }),
                (p.reportedErrors.FORBIDDEN = !1);
            } catch (e) {
              e instanceof Error &&
                e.cause instanceof Response &&
                e.cause.status ===
                  r.ConstantsUtil.HTTP_STATUS_CODES.FORBIDDEN &&
                !p.reportedErrors.FORBIDDEN &&
                (s.AlertController.open(
                  {
                    shortMessage: "Invalid App Configuration",
                    longMessage: "Origin ".concat(
                      (0, n.isSafe)() ? window.origin : "uknown",
                      " not found on Allowlist - update configuration on cloud.reown.com"
                    ),
                  },
                  "error"
                ),
                (p.reportedErrors.FORBIDDEN = !0));
            }
          },
          sendEvent(e) {
            var t;
            (p.timestamp = Date.now()),
              (p.data = e),
              ((null == (t = l.OptionsController.state.features)
                ? void 0
                : t.analytics) ||
                "INITIALIZE" === e.event) &&
                C._sendAnalyticsEvent(p);
          },
        };
    },
    592787: (e) => {
      "use strict";
      e.s({ ApiController: () => h });
      var t = e.i(724233),
        r = e.i(873206),
        n = e.i(850524),
        o = e.i(984892),
        a = e.i(775078),
        i = e.i(579586),
        s = e.i(160977),
        l = e.i(55931),
        c = e.i(245429),
        u = e.i(17038),
        d = e.i(936598),
        p = e.i(962949),
        C = e.i(610411);
      let m = a.CoreHelperUtil.getApiUrl(),
        w = new i.FetchUtil({ baseUrl: m, clientId: null }),
        g = (0, t.proxy)({
          promises: {},
          page: 1,
          count: 0,
          featured: [],
          allFeatured: [],
          recommended: [],
          allRecommended: [],
          wallets: [],
          filteredWallets: [],
          search: [],
          isAnalyticsEnabled: !1,
          excludedWallets: [],
          isFetchingRecommendedWallets: !1,
        }),
        h = {
          state: g,
          subscribeKey: (e, t) => (0, r.subscribeKey)(g, e, t),
          _getSdkProperties() {
            let {
              projectId: e,
              sdkType: t,
              sdkVersion: r,
            } = C.OptionsController.state;
            return {
              projectId: e,
              st: t || "appkit",
              sv: r || "html-wagmi-4.2.2",
            };
          },
          _filterOutExtensions: (e) =>
            C.OptionsController.state.isUniversalProvider
              ? e.filter(
                  (e) => !!(e.mobile_link || e.desktop_link || e.webapp_link)
                )
              : e,
          async _fetchWalletImage(e) {
            let t = "".concat(w.baseUrl, "/getWalletImage/").concat(e),
              r = await w.getBlob({ path: t, params: h._getSdkProperties() });
            c.AssetController.setWalletImage(e, URL.createObjectURL(r));
          },
          async _fetchNetworkImage(e) {
            let t = "".concat(w.baseUrl, "/public/getAssetImage/").concat(e),
              r = await w.getBlob({ path: t, params: h._getSdkProperties() });
            c.AssetController.setNetworkImage(e, URL.createObjectURL(r));
          },
          async _fetchConnectorImage(e) {
            let t = "".concat(w.baseUrl, "/public/getAssetImage/").concat(e),
              r = await w.getBlob({ path: t, params: h._getSdkProperties() });
            c.AssetController.setConnectorImage(e, URL.createObjectURL(r));
          },
          async _fetchCurrencyImage(e) {
            let t = "".concat(w.baseUrl, "/public/getCurrencyImage/").concat(e),
              r = await w.getBlob({ path: t, params: h._getSdkProperties() });
            c.AssetController.setCurrencyImage(e, URL.createObjectURL(r));
          },
          async _fetchTokenImage(e) {
            let t = "".concat(w.baseUrl, "/public/getTokenImage/").concat(e),
              r = await w.getBlob({ path: t, params: h._getSdkProperties() });
            c.AssetController.setTokenImage(e, URL.createObjectURL(r));
          },
          _filterWalletsByPlatform: (e) =>
            a.CoreHelperUtil.isMobile()
              ? null == e
                ? void 0
                : e.filter(
                    (e) =>
                      !!e.mobile_link ||
                      e.id === s.CUSTOM_DEEPLINK_WALLETS.COINBASE.id ||
                      ("solana" === u.ChainController.state.activeChain &&
                        (e.id === s.CUSTOM_DEEPLINK_WALLETS.SOLFLARE.id ||
                          e.id === s.CUSTOM_DEEPLINK_WALLETS.PHANTOM.id))
                  )
              : e,
          fetchProjectConfig: async () =>
            (
              await w.get({
                path: "/appkit/v1/config",
                params: h._getSdkProperties(),
              })
            ).features,
          async fetchAllowedOrigins() {
            try {
              let { allowedOrigins: e } = await w.get({
                path: "/projects/v1/origins",
                params: h._getSdkProperties(),
              });
              return e;
            } catch (e) {
              if (e instanceof Error && e.cause instanceof Response) {
                let t = e.cause.status;
                if (t === n.ConstantsUtil.HTTP_STATUS_CODES.TOO_MANY_REQUESTS)
                  throw Error("RATE_LIMITED", { cause: e });
                if (
                  t >= n.ConstantsUtil.HTTP_STATUS_CODES.SERVER_ERROR &&
                  t < 600
                )
                  throw Error("SERVER_ERROR", { cause: e });
              }
              return [];
            }
          },
          async fetchNetworkImages() {
            let e = u.ChainController.getAllRequestedCaipNetworks(),
              t =
                null == e
                  ? void 0
                  : e
                      .map((e) => {
                        let { assets: t } = e;
                        return null == t ? void 0 : t.imageId;
                      })
                      .filter(Boolean)
                      .filter((e) => !o.AssetUtil.getNetworkImageById(e));
            t &&
              (await Promise.allSettled(t.map((e) => h._fetchNetworkImage(e))));
          },
          async fetchConnectorImages() {
            let { connectors: e } = d.ConnectorController.state,
              t = e
                .map((e) => {
                  let { imageId: t } = e;
                  return t;
                })
                .filter(Boolean);
            await Promise.allSettled(t.map((e) => h._fetchConnectorImage(e)));
          },
          async fetchCurrencyImages() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            await Promise.allSettled(e.map((e) => h._fetchCurrencyImage(e)));
          },
          async fetchTokenImages() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            await Promise.allSettled(e.map((e) => h._fetchTokenImage(e)));
          },
          async fetchWallets(e) {
            var t, r;
            let n = null != (r = e.exclude) ? r : [];
            h._getSdkProperties().sv.startsWith("html-core-") &&
              n.push(
                ...Object.values(s.CUSTOM_DEEPLINK_WALLETS).map((e) => e.id)
              );
            let o = await w.get({
              path: "/getWallets",
              params: {
                ...h._getSdkProperties(),
                ...e,
                page: String(e.page),
                entries: String(e.entries),
                include: null == (t = e.include) ? void 0 : t.join(","),
                exclude: n.join(","),
              },
            });
            return {
              data:
                h._filterWalletsByPlatform(null == o ? void 0 : o.data) || [],
              count: null == o ? void 0 : o.count,
            };
          },
          async fetchFeaturedWallets() {
            let { featuredWalletIds: e } = C.OptionsController.state;
            if (null == e ? void 0 : e.length) {
              var t;
              let r = {
                  ...h._getSdkProperties(),
                  page: 1,
                  entries: null != (t = null == e ? void 0 : e.length) ? t : 4,
                  include: e,
                },
                { data: n } = await h.fetchWallets(r),
                o = [...n].sort((t, r) => e.indexOf(t.id) - e.indexOf(r.id)),
                a = o.map((e) => e.image_id).filter(Boolean);
              await Promise.allSettled(a.map((e) => h._fetchWalletImage(e))),
                (g.featured = o),
                (g.allFeatured = o);
            }
          },
          async fetchRecommendedWallets() {
            try {
              g.isFetchingRecommendedWallets = !0;
              let {
                  includeWalletIds: e,
                  excludeWalletIds: t,
                  featuredWalletIds: r,
                } = C.OptionsController.state,
                n = [...(null != t ? t : []), ...(null != r ? r : [])].filter(
                  Boolean
                ),
                o = u.ChainController.getRequestedCaipNetworkIds().join(","),
                { data: a, count: i } = await h.fetchWallets({
                  page: 1,
                  entries: 4,
                  include: e,
                  exclude: n,
                  chains: o,
                }),
                s = l.StorageUtil.getRecentWallets(),
                c = a.map((e) => e.image_id).filter(Boolean),
                d = s.map((e) => e.image_id).filter(Boolean);
              await Promise.allSettled(
                [...c, ...d].map((e) => h._fetchWalletImage(e))
              ),
                (g.recommended = a),
                (g.allRecommended = a),
                (g.count = null != i ? i : 0);
            } catch (e) {
            } finally {
              g.isFetchingRecommendedWallets = !1;
            }
          },
          async fetchWalletsByPage(e) {
            let { page: t } = e,
              {
                includeWalletIds: r,
                excludeWalletIds: n,
                featuredWalletIds: o,
              } = C.OptionsController.state,
              i = u.ChainController.getRequestedCaipNetworkIds().join(","),
              s = [
                ...g.recommended.map((e) => {
                  let { id: t } = e;
                  return t;
                }),
                ...(null != n ? n : []),
                ...(null != o ? o : []),
              ].filter(Boolean),
              { data: l, count: c } = await h.fetchWallets({
                page: t,
                entries: 40,
                include: r,
                exclude: s,
                chains: i,
              }),
              d = l
                .slice(0, 20)
                .map((e) => e.image_id)
                .filter(Boolean);
            await Promise.allSettled(d.map((e) => h._fetchWalletImage(e))),
              (g.wallets = a.CoreHelperUtil.uniqueBy(
                [...g.wallets, ...h._filterOutExtensions(l)],
                "id"
              ).filter((e) => {
                var t;
                return null == (t = e.chains)
                  ? void 0
                  : t.some((e) => i.includes(e));
              })),
              (g.count = c > g.count ? c : g.count),
              (g.page = t);
          },
          async initializeExcludedWallets(e) {
            let { ids: t } = e,
              r = { page: 1, entries: t.length, include: t },
              { data: n } = await h.fetchWallets(r);
            n &&
              n.forEach((e) => {
                g.excludedWallets.push({ rdns: e.rdns, name: e.name });
              });
          },
          async searchWallet(e) {
            let { search: t, badge: r } = e,
              { includeWalletIds: n, excludeWalletIds: o } =
                C.OptionsController.state,
              i = u.ChainController.getRequestedCaipNetworkIds().join(",");
            g.search = [];
            let s = {
                page: 1,
                entries: 100,
                search: null == t ? void 0 : t.trim(),
                badge_type: r,
                include: n,
                exclude: o,
                chains: i,
              },
              { data: l } = await h.fetchWallets(s);
            p.EventsController.sendEvent({
              type: "track",
              event: "SEARCH_WALLET",
              properties: {
                badge: null != r ? r : "",
                search: null != t ? t : "",
              },
            });
            let c = l.map((e) => e.image_id).filter(Boolean);
            await Promise.allSettled([
              ...c.map((e) => h._fetchWalletImage(e)),
              a.CoreHelperUtil.wait(300),
            ]),
              (g.search = h._filterOutExtensions(l));
          },
          initPromise(e, t) {
            let r = g.promises[e];
            return r || (g.promises[e] = t());
          },
          prefetch() {
            let {
              fetchConnectorImages: e = !0,
              fetchFeaturedWallets: t = !0,
              fetchRecommendedWallets: r = !0,
              fetchNetworkImages: n = !0,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {};
            return Promise.allSettled(
              [
                e && h.initPromise("connectorImages", h.fetchConnectorImages),
                t && h.initPromise("featuredWallets", h.fetchFeaturedWallets),
                r &&
                  h.initPromise(
                    "recommendedWallets",
                    h.fetchRecommendedWallets
                  ),
                n && h.initPromise("networkImages", h.fetchNetworkImages),
              ].filter(Boolean)
            );
          },
          prefetchAnalyticsConfig() {
            var e;
            (null == (e = C.OptionsController.state.features)
              ? void 0
              : e.analytics) && h.fetchAnalyticsConfig();
          },
          async fetchAnalyticsConfig() {
            try {
              let { isAnalyticsEnabled: e } = await w.get({
                path: "/getAnalyticsConfig",
                params: h._getSdkProperties(),
              });
              C.OptionsController.setFeatures({ analytics: e });
            } catch (e) {
              C.OptionsController.setFeatures({ analytics: !1 });
            }
          },
          filterByNamespaces(e) {
            if (!(null == e ? void 0 : e.length)) {
              (g.featured = g.allFeatured), (g.recommended = g.allRecommended);
              return;
            }
            let t = u.ChainController.getRequestedCaipNetworkIds().join(",");
            (g.featured = g.allFeatured.filter((e) => {
              var r;
              return null == (r = e.chains)
                ? void 0
                : r.some((e) => t.includes(e));
            })),
              (g.recommended = g.allRecommended.filter((e) => {
                var r;
                return null == (r = e.chains)
                  ? void 0
                  : r.some((e) => t.includes(e));
              })),
              (g.filteredWallets = g.wallets.filter((e) => {
                var r;
                return null == (r = e.chains)
                  ? void 0
                  : r.some((e) => t.includes(e));
              }));
          },
          clearFilterByNamespaces() {
            g.filteredWallets = [];
          },
          setFilterByNamespace(e) {
            if (!e) {
              (g.featured = g.allFeatured), (g.recommended = g.allRecommended);
              return;
            }
            let t = u.ChainController.getRequestedCaipNetworkIds().join(",");
            (g.featured = g.allFeatured.filter((e) => {
              var r;
              return null == (r = e.chains)
                ? void 0
                : r.some((e) => t.includes(e));
            })),
              (g.recommended = g.allRecommended.filter((e) => {
                var r;
                return null == (r = e.chains)
                  ? void 0
                  : r.some((e) => t.includes(e));
              })),
              (g.filteredWallets = g.wallets.filter((e) => {
                var r;
                return null == (r = e.chains)
                  ? void 0
                  : r.some((e) => t.includes(e));
              }));
          },
        };
    },
    530468: (e) => {
      "use strict";
      e.s({ NetworkUtil: () => i });
      var t = e.i(850524),
        r = e.i(868263),
        n = e.i(17038),
        o = e.i(936598),
        a = e.i(981824);
      let i = {
        onSwitchNetwork(e) {
          let { network: i, ignoreSwitchConfirmation: s = !1 } = e,
            l = n.ChainController.state.activeCaipNetwork,
            c = a.RouterController.state.data;
          if (i.id === (null == l ? void 0 : l.id)) return;
          let u = r.AccountController.getCaipAddress(
              n.ChainController.state.activeChain
            ),
            d = i.chainNamespace !== n.ChainController.state.activeChain,
            p = r.AccountController.getCaipAddress(i.chainNamespace),
            C =
              o.ConnectorController.getConnectorId(
                n.ChainController.state.activeChain
              ) === t.ConstantsUtil.CONNECTOR_ID.AUTH,
            m = t.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(
              (e) => e === i.chainNamespace
            );
          s || (C && m)
            ? a.RouterController.push("SwitchNetwork", { ...c, network: i })
            : u && d && !p
            ? a.RouterController.push("SwitchActiveChain", {
                switchToChain: i.chainNamespace,
                navigateTo: "Connect",
                navigateWithReplace: !0,
                network: i,
              })
            : a.RouterController.push("SwitchNetwork", { ...c, network: i });
        },
      };
    },
    907421: (e) => {
      "use strict";
      e.s({ PublicStateController: () => o });
      var t = e.i(724233),
        r = e.i(873206);
      let n = (0, t.proxy)({
          loading: !1,
          open: !1,
          selectedNetworkId: void 0,
          activeChain: void 0,
          initialized: !1,
        }),
        o = {
          state: n,
          subscribe: (e) => (0, t.subscribe)(n, () => e(n)),
          subscribeOpen: (e) => (0, r.subscribeKey)(n, "open", e),
          set(e) {
            Object.assign(n, { ...n, ...e });
          },
        };
    },
    935148: (e) => {
      "use strict";
      e.s({ ModalController: () => w });
      var t = e.i(724233),
        r = e.i(873206),
        n = e.i(775078),
        o = e.i(530468),
        a = e.i(317687),
        i = e.i(592787),
        s = e.i(17038),
        l = e.i(659863),
        c = e.i(936598),
        u = e.i(962949),
        d = e.i(610411),
        p = e.i(907421),
        C = e.i(981824);
      let m = (0, t.proxy)({
          loading: !1,
          loadingNamespaceMap: new Map(),
          open: !1,
          shake: !1,
          namespace: void 0,
        }),
        w = (0, a.withErrorBoundary)({
          state: m,
          subscribe: (e) => (0, t.subscribe)(m, () => e(m)),
          subscribeKey: (e, t) => (0, r.subscribeKey)(m, e, t),
          async open(e) {
            var t, r;
            let a = null == e ? void 0 : e.namespace,
              g = s.ChainController.state.activeChain,
              h = a && a !== g,
              f =
                null ==
                (t = s.ChainController.getAccountData(
                  null == e ? void 0 : e.namespace
                ))
                  ? void 0
                  : t.caipAddress;
            if (
              (l.ConnectionController.state.wcBasic
                ? i.ApiController.prefetch({
                    fetchNetworkImages: !1,
                    fetchConnectorImages: !1,
                  })
                : await i.ApiController.prefetch(),
              c.ConnectorController.setFilterByNamespace(
                null == e ? void 0 : e.namespace
              ),
              w.setLoading(!0, a),
              a && h)
            ) {
              let e =
                (null == (r = s.ChainController.getNetworkData(a))
                  ? void 0
                  : r.caipNetwork) ||
                s.ChainController.getRequestedCaipNetworks(a)[0];
              e &&
                o.NetworkUtil.onSwitchNetwork({
                  network: e,
                  ignoreSwitchConfirmation: !0,
                });
            } else {
              let t = s.ChainController.state.noAdapters;
              d.OptionsController.state.manualWCControl || (t && !f)
                ? n.CoreHelperUtil.isMobile()
                  ? C.RouterController.reset("AllWallets")
                  : C.RouterController.reset("ConnectingWalletConnectBasic")
                : (null == e ? void 0 : e.view)
                ? C.RouterController.reset(e.view, e.data)
                : f
                ? C.RouterController.reset("Account")
                : C.RouterController.reset("Connect");
            }
            (m.open = !0),
              p.PublicStateController.set({ open: !0 }),
              u.EventsController.sendEvent({
                type: "track",
                event: "MODAL_OPEN",
                properties: { connected: !!f },
              });
          },
          close() {
            let e = d.OptionsController.state.enableEmbedded,
              t = !!s.ChainController.state.activeCaipAddress;
            m.open &&
              u.EventsController.sendEvent({
                type: "track",
                event: "MODAL_CLOSE",
                properties: { connected: t },
              }),
              (m.open = !1),
              C.RouterController.reset("Connect"),
              w.clearLoading(),
              e
                ? t
                  ? C.RouterController.replace("Account")
                  : C.RouterController.push("Connect")
                : p.PublicStateController.set({ open: !1 }),
              l.ConnectionController.resetUri();
          },
          setLoading(e, t) {
            t && m.loadingNamespaceMap.set(t, e),
              (m.loading = e),
              p.PublicStateController.set({ loading: e });
          },
          clearLoading() {
            m.loadingNamespaceMap.clear(), (m.loading = !1);
          },
          shake() {
            m.shake ||
              ((m.shake = !0),
              setTimeout(() => {
                m.shake = !1;
              }, 500));
          },
        });
    },
    981824: (e) => {
      "use strict";
      e.s({ RouterController: () => u });
      var t = e.i(724233),
        r = e.i(873206),
        n = e.i(317687),
        o = e.i(868263),
        a = e.i(17038),
        i = e.i(936598),
        s = e.i(935148),
        l = e.i(610411);
      let c = (0, t.proxy)({
          view: "Connect",
          history: ["Connect"],
          transactionStack: [],
        }),
        u = (0, n.withErrorBoundary)({
          state: c,
          subscribeKey: (e, t) => (0, r.subscribeKey)(c, e, t),
          pushTransactionStack(e) {
            c.transactionStack.push(e);
          },
          popTransactionStack(e) {
            let t = c.transactionStack.pop();
            if (!t) return;
            let { onSuccess: r, onError: n, onCancel: o } = t;
            switch (e) {
              case "success":
                null == r || r();
                break;
              case "error":
                null == n || n(), u.goBack();
                break;
              case "cancel":
                null == o || o(), u.goBack();
            }
          },
          push(e, t) {
            e !== c.view && ((c.view = e), c.history.push(e), (c.data = t));
          },
          reset(e, t) {
            (c.view = e), (c.history = [e]), (c.data = t);
          },
          replace(e, t) {
            c.history.at(-1) !== e &&
              ((c.view = e),
              (c.history[c.history.length - 1] = e),
              (c.data = t));
          },
          goBack() {
            var e;
            let r = a.ChainController.state.activeCaipAddress,
              n = "ConnectingFarcaster" === u.state.view,
              d = !r && n;
            if (c.history.length > 1) {
              c.history.pop();
              let [e] = c.history.slice(-1);
              e && (r && "Connect" === e ? (c.view = "Account") : (c.view = e));
            } else s.ModalController.close();
            (null == (e = c.data) ? void 0 : e.wallet) &&
              (c.data.wallet = void 0),
              setTimeout(() => {
                if (d) {
                  var e, r, n;
                  o.AccountController.setFarcasterUrl(
                    void 0,
                    a.ChainController.state.activeChain
                  );
                  let s = i.ConnectorController.getAuthConnector();
                  null == s || null == (e = s.provider) || e.reload();
                  let c = (0, t.snapshot)(l.OptionsController.state);
                  null == s ||
                    null == (n = s.provider) ||
                    null == (r = n.syncDappData) ||
                    r.call(n, {
                      metadata: c.metadata,
                      sdkVersion: c.sdkVersion,
                      projectId: c.projectId,
                      sdkType: c.sdkType,
                    });
                }
              }, 100);
          },
          goBackToIndex(e) {
            if (c.history.length > 1) {
              c.history = c.history.slice(0, e + 1);
              let [t] = c.history.slice(-1);
              t && (c.view = t);
            }
          },
          goBackOrCloseModal() {
            u.state.history.length > 1 ? u.goBack() : s.ModalController.close();
          },
        });
    },
    936598: [
      (e) => {
        "use strict";
        e.s({ ConnectorController: () => v }, 936598);
        var t = e.i(724233),
          r = e.i(873206),
          n = e.i(850524),
          o = e.i(586196),
          a = e.i(664572),
          i = e.i(864510),
          s = e.i(160977),
          l = e.i(55931),
          c = e.i(317687),
          u = e.i(592787),
          d = e.i(17038),
          p = e.i(610411),
          C = e.i(981824);
        e.s({ ThemeController: () => g }, 289579);
        let m = (0, t.proxy)({
            themeMode: "dark",
            themeVariables: {},
            w3mThemeVariables: void 0,
          }),
          w = {
            state: m,
            subscribe: (e) => (0, t.subscribe)(m, () => e(m)),
            setThemeMode(e) {
              m.themeMode = e;
              try {
                let t = v.getAuthConnector();
                if (t) {
                  let r = w.getSnapshot().themeVariables;
                  t.provider.syncTheme({
                    themeMode: e,
                    themeVariables: r,
                    w3mThemeVariables: (0, o.getW3mThemeVariables)(r, e),
                  });
                }
              } catch (e) {
                console.info("Unable to sync theme to auth connector");
              }
            },
            setThemeVariables(e) {
              m.themeVariables = { ...m.themeVariables, ...e };
              try {
                let e = v.getAuthConnector();
                if (e) {
                  let t = w.getSnapshot().themeVariables;
                  e.provider.syncTheme({
                    themeVariables: t,
                    w3mThemeVariables: (0, o.getW3mThemeVariables)(
                      m.themeVariables,
                      m.themeMode
                    ),
                  });
                }
              } catch (e) {
                console.info("Unable to sync theme to auth connector");
              }
            },
            getSnapshot: () => (0, t.snapshot)(m),
          },
          g = (0, c.withErrorBoundary)(w),
          h = {
            eip155: void 0,
            solana: void 0,
            polkadot: void 0,
            bip122: void 0,
            cosmos: void 0,
          },
          f = (0, t.proxy)({
            allConnectors: [],
            connectors: [],
            activeConnector: void 0,
            filterByNamespace: void 0,
            activeConnectorIds: { ...h },
            filterByNamespaceMap: {
              eip155: !0,
              solana: !0,
              polkadot: !0,
              bip122: !0,
              cosmos: !0,
            },
          }),
          v = (0, c.withErrorBoundary)({
            state: f,
            subscribe: (e) =>
              (0, t.subscribe)(f, () => {
                e(f);
              }),
            subscribeKey: (e, t) => (0, r.subscribeKey)(f, e, t),
            initialize(e) {
              e.forEach((e) => {
                let t = l.StorageUtil.getConnectedConnectorId(e);
                t && v.setConnectorId(t, e);
              });
            },
            setActiveConnector(e) {
              e && (f.activeConnector = (0, t.ref)(e));
            },
            setConnectors(e) {
              e.filter(
                (e) =>
                  !f.allConnectors.some(
                    (t) =>
                      t.id === e.id &&
                      v.getConnectorName(t.name) ===
                        v.getConnectorName(e.name) &&
                      t.chain === e.chain
                  )
              ).forEach((e) => {
                "MULTI_CHAIN" !== e.type && f.allConnectors.push((0, t.ref)(e));
              });
              let r = v.getEnabledNamespaces(),
                n = v.getEnabledConnectors(r);
              f.connectors = v.mergeMultiChainConnectors(n);
            },
            filterByNamespaces(e) {
              Object.keys(f.filterByNamespaceMap).forEach((e) => {
                f.filterByNamespaceMap[e] = !1;
              }),
                e.forEach((e) => {
                  f.filterByNamespaceMap[e] = !0;
                }),
                v.updateConnectorsForEnabledNamespaces();
            },
            filterByNamespace(e, t) {
              (f.filterByNamespaceMap[e] = t),
                v.updateConnectorsForEnabledNamespaces();
            },
            updateConnectorsForEnabledNamespaces() {
              let e = v.getEnabledNamespaces(),
                t = v.getEnabledConnectors(e),
                r = v.areAllNamespacesEnabled();
              (f.connectors = v.mergeMultiChainConnectors(t)),
                r
                  ? u.ApiController.clearFilterByNamespaces()
                  : u.ApiController.filterByNamespaces(e);
            },
            getEnabledNamespaces: () =>
              Object.entries(f.filterByNamespaceMap)
                .filter((e) => {
                  let [t, r] = e;
                  return r;
                })
                .map((e) => {
                  let [t] = e;
                  return t;
                }),
            getEnabledConnectors: (e) =>
              f.allConnectors.filter((t) => e.includes(t.chain)),
            areAllNamespacesEnabled: () =>
              Object.values(f.filterByNamespaceMap).every((e) => e),
            mergeMultiChainConnectors(e) {
              let t = v.generateConnectorMapByName(e),
                r = [];
              return (
                t.forEach((e) => {
                  let t = e[0],
                    o =
                      (null == t ? void 0 : t.id) ===
                      n.ConstantsUtil.CONNECTOR_ID.AUTH;
                  e.length > 1 && t
                    ? r.push({
                        name: t.name,
                        imageUrl: t.imageUrl,
                        imageId: t.imageId,
                        connectors: [...e],
                        type: o ? "AUTH" : "MULTI_CHAIN",
                        chain: "eip155",
                        id: (null == t ? void 0 : t.id) || "",
                      })
                    : t && r.push(t);
                }),
                r
              );
            },
            generateConnectorMapByName(e) {
              let t = new Map();
              return (
                e.forEach((e) => {
                  let { name: r } = e,
                    n = v.getConnectorName(r);
                  if (!n) return;
                  let o = t.get(n) || [];
                  o.find((t) => t.chain === e.chain) || o.push(e), t.set(n, o);
                }),
                t
              );
            },
            getConnectorName: (e) => (e && { "Trust Wallet": "Trust" }[e]) || e,
            getUniqueConnectorsByName(e) {
              let t = [];
              return (
                e.forEach((e) => {
                  t.find((t) => t.chain === e.chain) || t.push(e);
                }),
                t
              );
            },
            addConnector(e) {
              if (e.id === n.ConstantsUtil.CONNECTOR_ID.AUTH) {
                var r, a, i;
                let n = (0, t.snapshot)(p.OptionsController.state),
                  s = g.getSnapshot().themeMode,
                  l = g.getSnapshot().themeVariables;
                null == e ||
                  null == (a = e.provider) ||
                  null == (r = a.syncDappData) ||
                  r.call(a, {
                    metadata: n.metadata,
                    sdkVersion: n.sdkVersion,
                    projectId: n.projectId,
                    sdkType: n.sdkType,
                  }),
                  null == e ||
                    null == (i = e.provider) ||
                    i.syncTheme({
                      themeMode: s,
                      themeVariables: l,
                      w3mThemeVariables: (0, o.getW3mThemeVariables)(l, s),
                    }),
                  v.setConnectors([e]);
              } else v.setConnectors([e]);
            },
            getAuthConnector(e) {
              var t;
              let r = e || d.ChainController.state.activeChain,
                o = f.connectors.find(
                  (e) => e.id === n.ConstantsUtil.CONNECTOR_ID.AUTH
                );
              if (o)
                return (
                  null == o || null == (t = o.connectors) ? void 0 : t.length
                )
                  ? o.connectors.find((e) => e.chain === r)
                  : o;
            },
            getAnnouncedConnectorRdns: () =>
              f.connectors
                .filter((e) => "ANNOUNCED" === e.type)
                .map((e) => {
                  var t;
                  return null == (t = e.info) ? void 0 : t.rdns;
                }),
            getConnectorById: (e) => f.allConnectors.find((t) => t.id === e),
            getConnector: (e, t) =>
              f.allConnectors
                .filter((e) => e.chain === d.ChainController.state.activeChain)
                .find((r) => {
                  var n;
                  return (
                    r.explorerId === e ||
                    (null == (n = r.info) ? void 0 : n.rdns) === t
                  );
                }),
            syncIfAuthConnector(e) {
              var r, n;
              if ("ID_AUTH" !== e.id) return;
              let a = (0, t.snapshot)(p.OptionsController.state),
                i = g.getSnapshot().themeMode,
                s = g.getSnapshot().themeVariables;
              null == e ||
                null == (n = e.provider) ||
                null == (r = n.syncDappData) ||
                r.call(n, {
                  metadata: a.metadata,
                  sdkVersion: a.sdkVersion,
                  sdkType: a.sdkType,
                  projectId: a.projectId,
                }),
                e.provider.syncTheme({
                  themeMode: i,
                  themeVariables: s,
                  w3mThemeVariables: (0, o.getW3mThemeVariables)(s, i),
                });
            },
            getConnectorsByNamespace(e) {
              let t = f.allConnectors.filter((t) => t.chain === e);
              return v.mergeMultiChainConnectors(t);
            },
            canSwitchToSmartAccount: (e) =>
              d.ChainController.checkIfSmartAccountEnabled() &&
              (0, i.getPreferredAccountType)(e) ===
                a.W3mFrameRpcConstants.ACCOUNT_TYPES.EOA,
            selectWalletConnector(e) {
              let t = v.getConnector(e.id, e.rdns);
              s.MobileWalletUtil.handleMobileDeeplinkRedirect(
                (null == t ? void 0 : t.explorerId) || e.id,
                d.ChainController.state.activeChain
              ),
                t
                  ? C.RouterController.push("ConnectingExternal", {
                      connector: t,
                    })
                  : C.RouterController.push("ConnectingWalletConnect", {
                      wallet: e,
                    });
            },
            getConnectors: (e) =>
              e
                ? v.getConnectorsByNamespace(e)
                : v.mergeMultiChainConnectors(f.allConnectors),
            setFilterByNamespace(e) {
              (f.filterByNamespace = e),
                (f.connectors = v.getConnectors(e)),
                u.ApiController.setFilterByNamespace(e);
            },
            setConnectorId(e, t) {
              e &&
                ((f.activeConnectorIds = { ...f.activeConnectorIds, [t]: e }),
                l.StorageUtil.setConnectedConnectorId(t, e));
            },
            removeConnectorId(e) {
              (f.activeConnectorIds = { ...f.activeConnectorIds, [e]: void 0 }),
                l.StorageUtil.deleteConnectedConnectorId(e);
            },
            getConnectorId(e) {
              if (e) return f.activeConnectorIds[e];
            },
            isConnected: (e) =>
              e
                ? !!f.activeConnectorIds[e]
                : Object.values(f.activeConnectorIds).some((e) => !!e),
            resetConnectorIds() {
              f.activeConnectorIds = { ...h };
            },
          });
      },
      [289579],
    ],
    123347: (e) => {
      "use strict";
      e.s({ ConnectorControllerUtil: () => w });
      var t = e.i(308080),
        r = e.i(850524),
        n = e.i(664572),
        o = e.i(868263),
        a = e.i(17038),
        i = e.i(659863),
        s = e.i(936598),
        l = e.i(962949),
        c = e.i(935148),
        u = e.i(981824),
        d = e.i(864510),
        p = e.i(940462),
        C = e.i(775078),
        m = e.i(55931);
      let w = {
        checkNamespaceConnectorId: (e, t) =>
          s.ConnectorController.getConnectorId(e) === t,
        isSocialProvider: (e) =>
          p.ConstantsUtil.DEFAULT_REMOTE_FEATURES.socials.includes(e),
        connectWalletConnect(e) {
          let {
            walletConnect: r,
            connector: n,
            closeModalOnConnect: o = !0,
            redirectViewOnModalClose: i = "Connect",
            onOpen: l,
            onConnect: d,
          } = e;
          return new Promise((e, p) => {
            if (
              (r && s.ConnectorController.setActiveConnector(n),
              null == l || l(C.CoreHelperUtil.isMobile() && r),
              i)
            ) {
              let e = c.ModalController.subscribeKey("open", (t) => {
                t ||
                  (u.RouterController.state.view !== i &&
                    u.RouterController.replace(i),
                  e(),
                  p(Error("Modal closed")));
              });
            }
            let m = a.ChainController.subscribeKey("activeCaipAddress", (r) => {
              r &&
                (null == d || d(),
                o && c.ModalController.close(),
                m(),
                e(t.ParseUtil.parseCaipAddress(r)));
            });
          });
        },
        connectExternal: (e) =>
          new Promise((r, n) => {
            let o = a.ChainController.subscribeKey("activeCaipAddress", (e) => {
              e &&
                (c.ModalController.close(),
                o(),
                r(t.ParseUtil.parseCaipAddress(e)));
            });
            i.ConnectionController.connectExternal(e, e.chain).catch(() => {
              o(), n(Error("Connection rejected"));
            });
          }),
        connectSocial(e) {
          let {
              social: n,
              closeModalOnConnect: u = !0,
              onOpenFarcaster: d,
              onConnect: p,
            } = e,
            w = o.AccountController.state.socialWindow,
            g = o.AccountController.state.socialProvider,
            h = !1,
            f = null,
            v = a.ChainController.subscribeKey("activeCaipAddress", (e) => {
              e && (u && c.ModalController.close(), v());
            });
          return new Promise((e, u) => {
            async function v(n) {
              var c, d;
              if (null == (c = n.data) ? void 0 : c.resultUri)
                if (n.origin === r.ConstantsUtil.SECURE_SITE_SDK_ORIGIN) {
                  window.removeEventListener("message", v, !1);
                  try {
                    let r = s.ConnectorController.getAuthConnector();
                    if (r && !h) {
                      w &&
                        (w.close(),
                        o.AccountController.setSocialWindow(
                          void 0,
                          a.ChainController.state.activeChain
                        ),
                        (w = o.AccountController.state.socialWindow)),
                        (h = !0);
                      let s = n.data.resultUri;
                      if (
                        (g &&
                          l.EventsController.sendEvent({
                            type: "track",
                            event: "SOCIAL_LOGIN_REQUEST_USER_DATA",
                            properties: { provider: g },
                          }),
                        g)
                      ) {
                        m.StorageUtil.setConnectedSocialProvider(g),
                          await i.ConnectionController.connectExternal(
                            { id: r.id, type: r.type, socialUri: s },
                            r.chain
                          );
                        let n = a.ChainController.state.activeCaipAddress;
                        if (!n) return void u(Error("Failed to connect"));
                        e(t.ParseUtil.parseCaipAddress(n)),
                          l.EventsController.sendEvent({
                            type: "track",
                            event: "SOCIAL_LOGIN_SUCCESS",
                            properties: {
                              provider: g,
                              caipNetworkId:
                                null ==
                                (d = a.ChainController.getActiveCaipNetwork())
                                  ? void 0
                                  : d.caipNetworkId,
                            },
                          });
                      }
                    }
                  } catch (e) {
                    g &&
                      l.EventsController.sendEvent({
                        type: "track",
                        event: "SOCIAL_LOGIN_ERROR",
                        properties: { provider: g },
                      }),
                      u(Error("Failed to connect"));
                  }
                } else
                  g &&
                    l.EventsController.sendEvent({
                      type: "track",
                      event: "SOCIAL_LOGIN_ERROR",
                      properties: { provider: g },
                    });
            }
            !(async function () {
              if (
                (n &&
                  (o.AccountController.setSocialProvider(
                    n,
                    a.ChainController.state.activeChain
                  ),
                  (g = o.AccountController.state.socialProvider),
                  l.EventsController.sendEvent({
                    type: "track",
                    event: "SOCIAL_LOGIN_STARTED",
                    properties: { provider: g },
                  })),
                "farcaster" === g)
              ) {
                null == d || d();
                let e = c.ModalController.subscribeKey("open", (t) => {
                    t ||
                      "farcaster" !== n ||
                      (u(Error("Popup closed")), null == p || p(), e());
                  }),
                  t = s.ConnectorController.getAuthConnector();
                if (t && !o.AccountController.state.farcasterUrl)
                  try {
                    let { url: e } = await t.provider.getFarcasterUri();
                    o.AccountController.setFarcasterUrl(
                      e,
                      a.ChainController.state.activeChain
                    );
                  } catch (e) {
                    u(Error("Failed to connect to farcaster"));
                  }
              } else {
                let e = s.ConnectorController.getAuthConnector();
                f = C.CoreHelperUtil.returnOpenHref(
                  "".concat(r.ConstantsUtil.SECURE_SITE_SDK_ORIGIN, "/loading"),
                  "popupWindow",
                  "width=600,height=800,scrollbars=yes"
                );
                try {
                  if (e && g) {
                    let { uri: t } = await e.provider.getSocialRedirectUri({
                      provider: g,
                    });
                    if (f && t) {
                      o.AccountController.setSocialWindow(
                        f,
                        a.ChainController.state.activeChain
                      ),
                        (w = o.AccountController.state.socialWindow),
                        (f.location.href = t);
                      let e = setInterval(() => {
                        (null == w ? void 0 : w.closed) &&
                          !h &&
                          (u(Error("Popup closed")), clearInterval(e));
                      }, 1e3);
                      window.addEventListener("message", v, !1);
                    } else
                      null == f || f.close(),
                        u(Error("Failed to initiate social connection"));
                  }
                } catch (e) {
                  u(Error("Failed to initiate social connection")),
                    null == f || f.close();
                }
              }
            })();
          });
        },
        connectEmail(e) {
          let {
            closeModalOnConnect: r = !0,
            redirectViewOnModalClose: n = "Connect",
            onOpen: o,
            onConnect: i,
          } = e;
          return new Promise((e, s) => {
            if ((null == o || o(), n)) {
              let e = c.ModalController.subscribeKey("open", (t) => {
                t ||
                  (u.RouterController.state.view !== n &&
                    u.RouterController.replace(n),
                  e(),
                  s(Error("Modal closed")));
              });
            }
            let l = a.ChainController.subscribeKey("activeCaipAddress", (n) => {
              n &&
                (null == i || i(),
                r && c.ModalController.close(),
                l(),
                e(t.ParseUtil.parseCaipAddress(n)));
            });
          });
        },
        async updateEmail() {
          var e;
          let t = m.StorageUtil.getConnectedConnectorId(
              a.ChainController.state.activeChain
            ),
            n = s.ConnectorController.getAuthConnector();
          if (!n) throw Error("No auth connector found");
          if (t !== r.ConstantsUtil.CONNECTOR_ID.AUTH)
            throw Error("Not connected to email or social");
          let o = null != (e = n.provider.getEmail()) ? e : "";
          return (
            u.RouterController.push("UpdateEmailWallet", {
              email: o,
              redirectView: void 0,
            }),
            new Promise((e, t) => {
              let r = setInterval(() => {
                  var t;
                  let i = null != (t = n.provider.getEmail()) ? t : "";
                  i !== o &&
                    (c.ModalController.close(),
                    clearInterval(r),
                    a(),
                    e({ email: i }));
                }, 1e3),
                a = c.ModalController.subscribeKey("open", (e) => {
                  e ||
                    ("Connect" !== u.RouterController.state.view &&
                      u.RouterController.push("Connect"),
                    clearInterval(r),
                    a(),
                    t(Error("Modal closed")));
                });
            })
          );
        },
        canSwitchToSmartAccount: (e) =>
          a.ChainController.checkIfSmartAccountEnabled() &&
          (0, d.getPreferredAccountType)(e) ===
            n.W3mFrameRpcConstants.ACCOUNT_TYPES.EOA,
      };
    },
    864510: (e) => {
      "use strict";
      e.s({
        getActiveNetworkTokenAddress: () => n,
        getPreferredAccountType: () => o,
      }),
        e.i(850524);
      var t = e.i(17038);
      e.i(123347);
      var r = e.i(940462);
      function n() {
        var e, n;
        let o =
            (null == (e = t.ChainController.state.activeCaipNetwork)
              ? void 0
              : e.chainNamespace) || "eip155",
          a =
            (null == (n = t.ChainController.state.activeCaipNetwork)
              ? void 0
              : n.id) || 1,
          i = r.ConstantsUtil.NATIVE_TOKEN_ADDRESS[o];
        return "".concat(o, ":").concat(a, ":").concat(i);
      }
      function o(e) {
        var r;
        return null == (r = t.ChainController.getAccountData(e))
          ? void 0
          : r.preferredAccountType;
      }
    },
    260276: (e) => {
      "use strict";
      e.s({ ConnectionControllerUtil: () => o });
      var t = e.i(659863),
        r = e.i(936598),
        n = e.i(610411);
      let o = {
        getConnectionStatus(e, n) {
          let o = r.ConnectorController.state.activeConnectorIds[n],
            a = t.ConnectionController.getConnections(n);
          return o && e.connectorId === o
            ? "connected"
            : a.some(
                (t) =>
                  t.connectorId.toLowerCase() === e.connectorId.toLowerCase()
              )
            ? "active"
            : "disconnected";
        },
        excludeConnectorAddressFromConnections(e) {
          let { connections: t, connectorId: r, addresses: n } = e;
          return t.map((e) => {
            if (r && e.connectorId.toLowerCase() === r.toLowerCase() && n) {
              let t = e.accounts.filter(
                (e) =>
                  !n.some((t) => t.toLowerCase() === e.address.toLowerCase())
              );
              return { ...e, accounts: t };
            }
            return e;
          });
        },
        excludeExistingConnections(e, t) {
          let r = new Set(e);
          return t.filter((e) => !r.has(e.connectorId));
        },
        getConnectionsByConnectorId: (e, t) =>
          e.filter((e) => e.connectorId.toLowerCase() === t.toLowerCase()),
        getConnectionsData(e) {
          var a, i;
          let s = !!(null == (a = n.OptionsController.state.remoteFeatures)
              ? void 0
              : a.multiWallet),
            l = r.ConnectorController.state.activeConnectorIds[e],
            c = t.ConnectionController.getConnections(e),
            u = (
              null !=
              (i = t.ConnectionController.state.recentConnections.get(e))
                ? i
                : []
            ).filter((e) =>
              r.ConnectorController.getConnectorById(e.connectorId)
            ),
            d = o.excludeExistingConnections(
              [...c.map((e) => e.connectorId), ...(l ? [l] : [])],
              u
            );
          return s
            ? { connections: c, recentConnections: d }
            : {
                connections: c.filter(
                  (e) =>
                    e.connectorId.toLowerCase() ===
                    (null == l ? void 0 : l.toLowerCase())
                ),
                recentConnections: [],
              };
        },
      };
    },
    663296: (e) => {
      "use strict";
      e.s({ SnackController: () => i });
      var t = e.i(724233),
        r = e.i(873206),
        n = e.i(775078);
      let o = Object.freeze({
          message: "",
          variant: "success",
          svg: void 0,
          open: !1,
          autoClose: !0,
        }),
        a = (0, t.proxy)({ ...o }),
        i = {
          state: a,
          subscribeKey: (e, t) => (0, r.subscribeKey)(a, e, t),
          showLoading(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            this._showMessage({ message: e, variant: "loading", ...t });
          },
          showSuccess(e) {
            this._showMessage({ message: e, variant: "success" });
          },
          showSvg(e, t) {
            this._showMessage({ message: e, svg: t });
          },
          showError(e) {
            let t = n.CoreHelperUtil.parseError(e);
            this._showMessage({ message: t, variant: "error" });
          },
          hide() {
            (a.message = o.message),
              (a.variant = o.variant),
              (a.svg = o.svg),
              (a.open = o.open),
              (a.autoClose = o.autoClose);
          },
          _showMessage(e) {
            let {
              message: t,
              svg: r,
              variant: n = "success",
              autoClose: i = o.autoClose,
            } = e;
            a.open
              ? ((a.open = !1),
                setTimeout(() => {
                  (a.message = t),
                    (a.variant = n),
                    (a.svg = r),
                    (a.open = !0),
                    (a.autoClose = i);
                }, 150))
              : ((a.message = t),
                (a.variant = n),
                (a.svg = r),
                (a.open = !0),
                (a.autoClose = i));
          },
        };
    },
    659863: [
      (e) => {
        "use strict";
        let t;
        e.s({ ConnectionController: () => N }, 659863);
        var r = e.i(724233),
          n = e.i(873206),
          o = e.i(850524),
          a = e.i(308080),
          i = e.i(864510),
          s = e.i(260276),
          l = e.i(123347),
          c = e.i(775078),
          u = e.i(55931),
          d = e.i(317687),
          p = e.i(868263),
          C = e.i(17038),
          m = e.i(936598),
          w = e.i(962949),
          g = e.i(935148),
          h = e.i(981824);
        e.s({ TransactionsController: () => _ }, 525330);
        var f = e.i(664572),
          v = e.i(834245),
          E = e.i(610411),
          A = e.i(663296);
        let b = (0, r.proxy)({
            transactions: [],
            transactionsByYear: {},
            lastNetworkInView: void 0,
            loading: !1,
            empty: !1,
            next: void 0,
          }),
          _ = (0, d.withErrorBoundary)(
            {
              state: b,
              subscribe: (e) => (0, r.subscribe)(b, () => e(b)),
              setLastNetworkInView(e) {
                b.lastNetworkInView = e;
              },
              async fetchTransactions(e) {
                if (!e)
                  throw Error(
                    "Transactions can't be fetched without an accountAddress"
                  );
                b.loading = !0;
                try {
                  var t;
                  let r = await v.BlockchainApiController.fetchTransactions({
                      account: e,
                      cursor: b.next,
                      chainId:
                        null == (t = C.ChainController.state.activeCaipNetwork)
                          ? void 0
                          : t.caipNetworkId,
                    }),
                    n = _.filterSpamTransactions(r.data),
                    o = _.filterByConnectedChain(n),
                    a = [...b.transactions, ...o];
                  (b.loading = !1),
                    (b.transactions = a),
                    (b.transactionsByYear = _.groupTransactionsByYearAndMonth(
                      b.transactionsByYear,
                      o
                    )),
                    (b.empty = 0 === a.length),
                    (b.next = r.next ? r.next : void 0);
                } catch (r) {
                  let t = C.ChainController.state.activeChain;
                  w.EventsController.sendEvent({
                    type: "track",
                    event: "ERROR_FETCH_TRANSACTIONS",
                    properties: {
                      address: e,
                      projectId: E.OptionsController.state.projectId,
                      cursor: b.next,
                      isSmartAccount:
                        (0, i.getPreferredAccountType)(t) ===
                        f.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                    },
                  }),
                    A.SnackController.showError("Failed to fetch transactions"),
                    (b.loading = !1),
                    (b.empty = !0),
                    (b.next = void 0);
                }
              },
              groupTransactionsByYearAndMonth() {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [];
                return (
                  t.forEach((t) => {
                    var r, n;
                    let o = new Date(t.metadata.minedAt).getFullYear(),
                      a = new Date(t.metadata.minedAt).getMonth(),
                      i = null != (r = e[o]) ? r : {},
                      s = (null != (n = i[a]) ? n : []).filter(
                        (e) => e.id !== t.id
                      );
                    e[o] = {
                      ...i,
                      [a]: [...s, t].sort(
                        (e, t) =>
                          new Date(t.metadata.minedAt).getTime() -
                          new Date(e.metadata.minedAt).getTime()
                      ),
                    };
                  }),
                  e
                );
              },
              filterSpamTransactions: (e) =>
                e.filter(
                  (e) =>
                    !e.transfers.every((e) => {
                      var t;
                      return (
                        (null == (t = e.nft_info)
                          ? void 0
                          : t.flags.is_spam) === !0
                      );
                    })
                ),
              filterByConnectedChain(e) {
                var t;
                let r =
                  null == (t = C.ChainController.state.activeCaipNetwork)
                    ? void 0
                    : t.caipNetworkId;
                return e.filter((e) => e.metadata.chain === r);
              },
              clearCursor() {
                b.next = void 0;
              },
              resetTransactions() {
                (b.transactions = []),
                  (b.transactionsByYear = {}),
                  (b.lastNetworkInView = void 0),
                  (b.loading = !1),
                  (b.empty = !1),
                  (b.next = void 0);
              },
            },
            "API_ERROR"
          ),
          S = (0, r.proxy)({
            connections: new Map(),
            recentConnections: new Map(),
            isSwitchingConnection: !1,
            wcError: !1,
            buffering: !1,
            status: "disconnected",
          }),
          N = (0, d.withErrorBoundary)({
            state: S,
            subscribe: (e) => (0, r.subscribe)(S, () => e(S)),
            subscribeKey: (e, t) => (0, n.subscribeKey)(S, e, t),
            _getClient: () => S._client,
            setClient(e) {
              S._client = (0, r.ref)(e);
            },
            initialize(e) {
              let t = e.filter((e) => !!e.namespace).map((e) => e.namespace);
              N.syncStorageConnections(t);
            },
            syncStorageConnections(e) {
              let t = u.StorageUtil.getConnections();
              for (let n of null != e
                ? e
                : Array.from(C.ChainController.state.chains.keys())) {
                var r;
                let e = null != (r = t[n]) ? r : [],
                  o = new Map(S.recentConnections);
                o.set(n, e), (S.recentConnections = o);
              }
            },
            getConnections(e) {
              var t;
              return e && null != (t = S.connections.get(e)) ? t : [];
            },
            hasAnyConnection: (e) =>
              Array.from(N.state.connections.values())
                .flatMap((e) => e)
                .some((t) => {
                  let { connectorId: r } = t;
                  return r === e;
                }),
            async connectWalletConnect() {
              var e, r, n, o;
              if (
                c.CoreHelperUtil.isTelegram() ||
                (c.CoreHelperUtil.isSafari() && c.CoreHelperUtil.isIos())
              ) {
                if (t) {
                  await t, (t = void 0);
                  return;
                }
                if (
                  !c.CoreHelperUtil.isPairingExpired(
                    null == S ? void 0 : S.wcPairingExpiry
                  )
                ) {
                  let e = S.wcUri;
                  S.wcUri = e;
                  return;
                }
                (t =
                  null == (r = N._getClient()) ||
                  null == (e = r.connectWalletConnect)
                    ? void 0
                    : e.call(r).catch(() => void 0)),
                  (N.state.status = "connecting"),
                  await t,
                  (t = void 0),
                  (S.wcPairingExpiry = void 0),
                  (N.state.status = "connected");
              } else
                await (null == (o = N._getClient()) ||
                null == (n = o.connectWalletConnect)
                  ? void 0
                  : n.call(o));
            },
            async connectExternal(e, t) {
              var r, n;
              let o =
                  !(arguments.length > 2) ||
                  void 0 === arguments[2] ||
                  arguments[2],
                a = await (null == (n = N._getClient()) ||
                null == (r = n.connectExternal)
                  ? void 0
                  : r.call(n, e));
              return o && C.ChainController.setActiveNamespace(t), a;
            },
            async reconnectExternal(e) {
              var t, r;
              await (null == (r = N._getClient()) ||
              null == (t = r.reconnectExternal)
                ? void 0
                : t.call(r, e));
              let n = e.chain || C.ChainController.state.activeChain;
              n && m.ConnectorController.setConnectorId(e.id, n);
            },
            async setPreferredAccountType(e, t) {
              var r;
              if (!t) return;
              g.ModalController.setLoading(
                !0,
                C.ChainController.state.activeChain
              );
              let n = m.ConnectorController.getAuthConnector();
              n &&
                (p.AccountController.setPreferredAccountType(e, t),
                await n.provider.setPreferredAccount(e),
                u.StorageUtil.setPreferredAccountTypes(
                  Object.entries(C.ChainController.state.chains).reduce(
                    (e, t) => {
                      let [r, n] = t,
                        o = (0, i.getPreferredAccountType)(r);
                      return void 0 !== o && (e[r] = o), e;
                    },
                    {}
                  )
                ),
                await N.reconnectExternal(n),
                g.ModalController.setLoading(
                  !1,
                  C.ChainController.state.activeChain
                ),
                w.EventsController.sendEvent({
                  type: "track",
                  event: "SET_PREFERRED_ACCOUNT_TYPE",
                  properties: {
                    accountType: e,
                    network:
                      (null == (r = C.ChainController.state.activeCaipNetwork)
                        ? void 0
                        : r.caipNetworkId) || "",
                  },
                }));
            },
            async signMessage(e) {
              var t;
              return null == (t = N._getClient()) ? void 0 : t.signMessage(e);
            },
            parseUnits(e, t) {
              var r;
              return null == (r = N._getClient()) ? void 0 : r.parseUnits(e, t);
            },
            formatUnits(e, t) {
              var r;
              return null == (r = N._getClient())
                ? void 0
                : r.formatUnits(e, t);
            },
            async sendTransaction(e) {
              var t;
              return null == (t = N._getClient())
                ? void 0
                : t.sendTransaction(e);
            },
            async getCapabilities(e) {
              var t;
              return null == (t = N._getClient())
                ? void 0
                : t.getCapabilities(e);
            },
            async grantPermissions(e) {
              var t;
              return null == (t = N._getClient())
                ? void 0
                : t.grantPermissions(e);
            },
            async walletGetAssets(e) {
              var t, r;
              return null !=
                (r =
                  null == (t = N._getClient()) ? void 0 : t.walletGetAssets(e))
                ? r
                : {};
            },
            async estimateGas(e) {
              var t;
              return null == (t = N._getClient()) ? void 0 : t.estimateGas(e);
            },
            async writeContract(e) {
              var t;
              return null == (t = N._getClient()) ? void 0 : t.writeContract(e);
            },
            async getEnsAddress(e) {
              var t;
              return null == (t = N._getClient()) ? void 0 : t.getEnsAddress(e);
            },
            async getEnsAvatar(e) {
              var t;
              return null == (t = N._getClient()) ? void 0 : t.getEnsAvatar(e);
            },
            checkInstalled(e) {
              var t, r;
              return (
                (null == (r = N._getClient()) || null == (t = r.checkInstalled)
                  ? void 0
                  : t.call(r, e)) || !1
              );
            },
            resetWcConnection() {
              (S.wcUri = void 0),
                (S.wcPairingExpiry = void 0),
                (S.wcLinking = void 0),
                (S.recentWallet = void 0),
                (S.status = "disconnected"),
                _.resetTransactions(),
                u.StorageUtil.deleteWalletConnectDeepLink();
            },
            resetUri() {
              (S.wcUri = void 0), (S.wcPairingExpiry = void 0), (t = void 0);
            },
            finalizeWcConnection() {
              var e, t, r;
              let { wcLinking: n, recentWallet: o } = N.state;
              n && u.StorageUtil.setWalletConnectDeepLink(n),
                o && u.StorageUtil.setAppKitRecent(o),
                w.EventsController.sendEvent({
                  type: "track",
                  event: "CONNECT_SUCCESS",
                  properties: {
                    method: n ? "mobile" : "qrcode",
                    name:
                      (null == (t = h.RouterController.state.data) ||
                      null == (e = t.wallet)
                        ? void 0
                        : e.name) || "Unknown",
                    caipNetworkId:
                      null == (r = C.ChainController.getActiveCaipNetwork())
                        ? void 0
                        : r.caipNetworkId,
                  },
                });
            },
            setWcBasic(e) {
              S.wcBasic = e;
            },
            setUri(e) {
              (S.wcUri = e),
                (S.wcPairingExpiry = c.CoreHelperUtil.getPairingExpiry());
            },
            setWcLinking(e) {
              S.wcLinking = e;
            },
            setWcError(e) {
              (S.wcError = e), (S.buffering = !1);
            },
            setRecentWallet(e) {
              S.recentWallet = e;
            },
            setBuffering(e) {
              S.buffering = e;
            },
            setStatus(e) {
              S.status = e;
            },
            setIsSwitchingConnection(e) {
              S.isSwitchingConnection = e;
            },
            async disconnect() {
              let {
                id: e,
                namespace: t,
                initialDisconnect: r,
              } = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
              try {
                var n;
                await (null == (n = N._getClient())
                  ? void 0
                  : n.disconnect({
                      id: e,
                      chainNamespace: t,
                      initialDisconnect: r,
                    }));
              } catch (e) {
                throw new d.AppKitError(
                  "Failed to disconnect",
                  "INTERNAL_SDK_ERROR",
                  e
                );
              }
            },
            setConnections(e, t) {
              let r = new Map(S.connections);
              r.set(t, e), (S.connections = r);
            },
            async handleAuthAccountSwitch(e) {
              var t, r;
              let { address: n, namespace: o } = e,
                a =
                  null == (r = p.AccountController.state.user) ||
                  null == (t = r.accounts)
                    ? void 0
                    : t.find((e) => "smartAccount" === e.type),
                i =
                  a &&
                  a.address.toLowerCase() === n.toLowerCase() &&
                  l.ConnectorControllerUtil.canSwitchToSmartAccount(o)
                    ? "smartAccount"
                    : "eoa";
              await N.setPreferredAccountType(i, o);
            },
            async handleActiveConnection(e) {
              let { connection: t, namespace: r, address: n } = e,
                a = m.ConnectorController.getConnectorById(t.connectorId),
                i = t.connectorId === o.ConstantsUtil.CONNECTOR_ID.AUTH;
              if (!a)
                throw Error(
                  "No connector found for connection: ".concat(t.connectorId)
                );
              if (i)
                i &&
                  n &&
                  (await N.handleAuthAccountSwitch({
                    address: n,
                    namespace: r,
                  }));
              else {
                let e = await N.connectExternal(
                  {
                    id: a.id,
                    type: a.type,
                    provider: a.provider,
                    address: n,
                    chain: r,
                  },
                  r
                );
                return null == e ? void 0 : e.address;
              }
              return n;
            },
            async handleDisconnectedConnection(e) {
              var t, r;
              let n,
                {
                  connection: a,
                  namespace: i,
                  address: s,
                  closeModalOnConnect: c,
                } = e,
                u = m.ConnectorController.getConnectorById(a.connectorId),
                d =
                  null == (r = a.auth) || null == (t = r.name)
                    ? void 0
                    : t.toLowerCase(),
                p = a.connectorId === o.ConstantsUtil.CONNECTOR_ID.AUTH,
                C =
                  a.connectorId === o.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT;
              if (!u)
                throw Error(
                  "No connector found for connection: ".concat(a.connectorId)
                );
              if (p)
                if (d && l.ConnectorControllerUtil.isSocialProvider(d)) {
                  let { address: e } =
                    await l.ConnectorControllerUtil.connectSocial({
                      social: d,
                      closeModalOnConnect: c,
                      onOpenFarcaster() {
                        g.ModalController.open({ view: "ConnectingFarcaster" });
                      },
                      onConnect() {
                        h.RouterController.replace("ProfileWallets");
                      },
                    });
                  n = e;
                } else {
                  let { address: e } =
                    await l.ConnectorControllerUtil.connectEmail({
                      closeModalOnConnect: c,
                      onOpen() {
                        g.ModalController.open({ view: "EmailLogin" });
                      },
                      onConnect() {
                        h.RouterController.replace("ProfileWallets");
                      },
                    });
                  n = e;
                }
              else if (C) {
                let { address: e } =
                  await l.ConnectorControllerUtil.connectWalletConnect({
                    walletConnect: !0,
                    connector: u,
                    closeModalOnConnect: c,
                    onOpen(e) {
                      g.ModalController.open({
                        view: e ? "AllWallets" : "ConnectingWalletConnect",
                      });
                    },
                    onConnect() {
                      h.RouterController.replace("ProfileWallets");
                    },
                  });
                n = e;
              } else {
                let e = await N.connectExternal(
                  { id: u.id, type: u.type, provider: u.provider, chain: i },
                  i
                );
                e && (n = e.address);
              }
              return (
                p &&
                  s &&
                  (await N.handleAuthAccountSwitch({
                    address: s,
                    namespace: i,
                  })),
                n
              );
            },
            async switchConnection(e) {
              let t,
                {
                  connection: r,
                  address: n,
                  namespace: o,
                  closeModalOnConnect: i,
                  onChange: l,
                } = e,
                c = p.AccountController.getCaipAddress(o);
              if (c) {
                let { address: e } = a.ParseUtil.parseCaipAddress(c);
                t = e;
              }
              let u = s.ConnectionControllerUtil.getConnectionStatus(r, o);
              switch (u) {
                case "connected":
                case "active": {
                  let e = await N.handleActiveConnection({
                    connection: r,
                    namespace: o,
                    address: n,
                  });
                  if (t && e) {
                    let r = e.toLowerCase() !== t.toLowerCase();
                    null == l ||
                      l({
                        address: e,
                        namespace: o,
                        hasSwitchedAccount: r,
                        hasSwitchedWallet: "active" === u,
                      });
                  }
                  break;
                }
                case "disconnected": {
                  let e = await N.handleDisconnectedConnection({
                    connection: r,
                    namespace: o,
                    address: n,
                    closeModalOnConnect: i,
                  });
                  e &&
                    (null == l ||
                      l({
                        address: e,
                        namespace: o,
                        hasSwitchedAccount: !0,
                        hasSwitchedWallet: !0,
                      }));
                  break;
                }
                default:
                  throw Error("Invalid connection status: ".concat(u));
              }
            },
          });
      },
      [525330],
    ],
    976065: (e) => {
      "use strict";
      e.s({ NumberUtil: () => p }, 976065);
      var t = "[big.js] ",
        r = t + "Invalid ",
        n = r + "decimal places",
        o = r + "rounding mode",
        a = t + "Division by zero",
        i = {},
        s = void 0,
        l = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
      function c(e, t, r, n) {
        var a = e.c;
        if (
          (r === s && (r = e.constructor.RM),
          0 !== r && 1 !== r && 2 !== r && 3 !== r)
        )
          throw Error(o);
        if (t < 1)
          (n =
            (3 === r && (n || !!a[0])) ||
            (0 === t &&
              ((1 === r && a[0] >= 5) ||
                (2 === r && (a[0] > 5 || (5 === a[0] && (n || a[1] !== s))))))),
            (a.length = 1),
            n ? ((e.e = e.e - t + 1), (a[0] = 1)) : (a[0] = e.e = 0);
        else if (t < a.length) {
          if (
            ((n =
              (1 === r && a[t] >= 5) ||
              (2 === r &&
                (a[t] > 5 ||
                  (5 === a[t] && (n || a[t + 1] !== s || 1 & a[t - 1])))) ||
              (3 === r && (n || !!a[0]))),
            (a.length = t),
            n)
          ) {
            for (; ++a[--t] > 9; )
              if (((a[t] = 0), 0 === t)) {
                ++e.e, a.unshift(1);
                break;
              }
          }
          for (t = a.length; !a[--t]; ) a.pop();
        }
        return e;
      }
      function u(e, t, r) {
        var n = e.e,
          o = e.c.join(""),
          a = o.length;
        if (t)
          o =
            o.charAt(0) +
            (a > 1 ? "." + o.slice(1) : "") +
            (n < 0 ? "e" : "e+") +
            n;
        else if (n < 0) {
          for (; ++n; ) o = "0" + o;
          o = "0." + o;
        } else if (n > 0)
          if (++n > a) for (n -= a; n--; ) o += "0";
          else n < a && (o = o.slice(0, n) + "." + o.slice(n));
        else a > 1 && (o = o.charAt(0) + "." + o.slice(1));
        return e.s < 0 && r ? "-" + o : o;
      }
      (i.abs = function () {
        var e = new this.constructor(this);
        return (e.s = 1), e;
      }),
        (i.cmp = function (e) {
          var t,
            r = this.c,
            n = (e = new this.constructor(e)).c,
            o = this.s,
            a = e.s,
            i = this.e,
            s = e.e;
          if (!r[0] || !n[0]) return r[0] ? o : n[0] ? -a : 0;
          if (o != a) return o;
          if (((t = o < 0), i != s)) return (i > s) ^ t ? 1 : -1;
          for (o = -1, a = (i = r.length) < (s = n.length) ? i : s; ++o < a; )
            if (r[o] != n[o]) return (r[o] > n[o]) ^ t ? 1 : -1;
          return i == s ? 0 : (i > s) ^ t ? 1 : -1;
        }),
        (i.div = function (e) {
          var t = this.constructor,
            r = this.c,
            o = (e = new t(e)).c,
            i = this.s == e.s ? 1 : -1,
            l = t.DP;
          if (l !== ~~l || l < 0 || l > 1e6) throw Error(n);
          if (!o[0]) throw Error(a);
          if (!r[0]) return (e.s = i), (e.c = [(e.e = 0)]), e;
          var u,
            d,
            p,
            C,
            m,
            w = o.slice(),
            g = (u = o.length),
            h = r.length,
            f = r.slice(0, u),
            v = f.length,
            E = e,
            A = (E.c = []),
            b = 0,
            _ = l + (E.e = this.e - e.e) + 1;
          for (E.s = i, i = _ < 0 ? 0 : _, w.unshift(0); v++ < u; ) f.push(0);
          do {
            for (p = 0; p < 10; p++) {
              if (u != (v = f.length)) C = u > v ? 1 : -1;
              else
                for (m = -1, C = 0; ++m < u; )
                  if (o[m] != f[m]) {
                    C = o[m] > f[m] ? 1 : -1;
                    break;
                  }
              if (C < 0) {
                for (d = v == u ? o : w; v; ) {
                  if (f[--v] < d[v]) {
                    for (m = v; m && !f[--m]; ) f[m] = 9;
                    --f[m], (f[v] += 10);
                  }
                  f[v] -= d[v];
                }
                for (; !f[0]; ) f.shift();
              } else break;
            }
            (A[b++] = C ? p : ++p),
              f[0] && C ? (f[v] = r[g] || 0) : (f = [r[g]]);
          } while ((g++ < h || f[0] !== s) && i--);
          return (
            !A[0] && 1 != b && (A.shift(), E.e--, _--),
            b > _ && c(E, _, t.RM, f[0] !== s),
            E
          );
        }),
        (i.eq = function (e) {
          return 0 === this.cmp(e);
        }),
        (i.gt = function (e) {
          return this.cmp(e) > 0;
        }),
        (i.gte = function (e) {
          return this.cmp(e) > -1;
        }),
        (i.lt = function (e) {
          return 0 > this.cmp(e);
        }),
        (i.lte = function (e) {
          return 1 > this.cmp(e);
        }),
        (i.minus = i.sub =
          function (e) {
            var t,
              r,
              n,
              o,
              a = this.constructor,
              i = this.s,
              s = (e = new a(e)).s;
            if (i != s) return (e.s = -s), this.plus(e);
            var l = this.c.slice(),
              c = this.e,
              u = e.c,
              d = e.e;
            if (!l[0] || !u[0])
              return (
                u[0] ? (e.s = -s) : l[0] ? (e = new a(this)) : (e.s = 1), e
              );
            if ((i = c - d)) {
              for (
                (o = i < 0) ? ((i = -i), (n = l)) : ((d = c), (n = u)),
                  n.reverse(),
                  s = i;
                s--;

              )
                n.push(0);
              n.reverse();
            } else
              for (
                r = ((o = l.length < u.length) ? l : u).length, i = s = 0;
                s < r;
                s++
              )
                if (l[s] != u[s]) {
                  o = l[s] < u[s];
                  break;
                }
            if (
              (o && ((n = l), (l = u), (u = n), (e.s = -e.s)),
              (s = (r = u.length) - (t = l.length)) > 0)
            )
              for (; s--; ) l[t++] = 0;
            for (s = t; r > i; ) {
              if (l[--r] < u[r]) {
                for (t = r; t && !l[--t]; ) l[t] = 9;
                --l[t], (l[r] += 10);
              }
              l[r] -= u[r];
            }
            for (; 0 === l[--s]; ) l.pop();
            for (; 0 === l[0]; ) l.shift(), --d;
            return (
              l[0] || ((e.s = 1), (l = [(d = 0)])), (e.c = l), (e.e = d), e
            );
          }),
        (i.mod = function (e) {
          var t,
            r = this,
            n = r.constructor,
            o = r.s,
            i = (e = new n(e)).s;
          if (!e.c[0]) throw Error(a);
          return ((r.s = e.s = 1), (t = 1 == e.cmp(r)), (r.s = o), (e.s = i), t)
            ? new n(r)
            : ((o = n.DP),
              (i = n.RM),
              (n.DP = n.RM = 0),
              (r = r.div(e)),
              (n.DP = o),
              (n.RM = i),
              this.minus(r.times(e)));
        }),
        (i.neg = function () {
          var e = new this.constructor(this);
          return (e.s = -e.s), e;
        }),
        (i.plus = i.add =
          function (e) {
            var t,
              r,
              n,
              o = this.constructor;
            if (((e = new o(e)), this.s != e.s))
              return (e.s = -e.s), this.minus(e);
            var a = this.e,
              i = this.c,
              s = e.e,
              l = e.c;
            if (!i[0] || !l[0])
              return l[0] || (i[0] ? (e = new o(this)) : (e.s = this.s)), e;
            if (((i = i.slice()), (t = a - s))) {
              for (
                t > 0 ? ((s = a), (n = l)) : ((t = -t), (n = i)), n.reverse();
                t--;

              )
                n.push(0);
              n.reverse();
            }
            for (
              i.length - l.length < 0 && ((n = l), (l = i), (i = n)),
                t = l.length,
                r = 0;
              t;
              i[t] %= 10
            )
              r = ((i[--t] = i[t] + l[t] + r) / 10) | 0;
            for (r && (i.unshift(r), ++s), t = i.length; 0 === i[--t]; )
              i.pop();
            return (e.c = i), (e.e = s), e;
          }),
        (i.pow = function (e) {
          var t = this,
            n = new t.constructor("1"),
            o = n,
            a = e < 0;
          if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(r + "exponent");
          for (a && (e = -e); 1 & e && (o = o.times(t)), (e >>= 1); )
            t = t.times(t);
          return a ? n.div(o) : o;
        }),
        (i.prec = function (e, t) {
          if (e !== ~~e || e < 1 || e > 1e6) throw Error(r + "precision");
          return c(new this.constructor(this), e, t);
        }),
        (i.round = function (e, t) {
          if (e === s) e = 0;
          else if (e !== ~~e || e < -1e6 || e > 1e6) throw Error(n);
          return c(new this.constructor(this), e + this.e + 1, t);
        }),
        (i.sqrt = function () {
          var e,
            r,
            n,
            o = this.constructor,
            a = this.s,
            i = this.e,
            s = new o("0.5");
          if (!this.c[0]) return new o(this);
          if (a < 0) throw Error(t + "No square root");
          0 === (a = Math.sqrt(+u(this, !0, !0))) || a === 1 / 0
            ? (((r = this.c.join("")).length + i) & 1 || (r += "0"),
              (i = (((i + 1) / 2) | 0) - (i < 0 || 1 & i)),
              (e = new o(
                ((a = Math.sqrt(r)) == 1 / 0
                  ? "5e"
                  : (a = a.toExponential()).slice(0, a.indexOf("e") + 1)) + i
              )))
            : (e = new o(a + "")),
            (i = e.e + (o.DP += 4));
          do (n = e), (e = s.times(n.plus(this.div(n))));
          while (n.c.slice(0, i).join("") !== e.c.slice(0, i).join(""));
          return c(e, (o.DP -= 4) + e.e + 1, o.RM);
        }),
        (i.times = i.mul =
          function (e) {
            var t,
              r = this.constructor,
              n = this.c,
              o = (e = new r(e)).c,
              a = n.length,
              i = o.length,
              s = this.e,
              l = e.e;
            if (((e.s = this.s == e.s ? 1 : -1), !n[0] || !o[0]))
              return (e.c = [(e.e = 0)]), e;
            for (
              e.e = s + l,
                a < i && ((t = n), (n = o), (o = t), (l = a), (a = i), (i = l)),
                t = Array((l = a + i));
              l--;

            )
              t[l] = 0;
            for (s = i; s--; ) {
              for (i = 0, l = a + s; l > s; )
                (i = t[l] + o[s] * n[l - s - 1] + i),
                  (t[l--] = i % 10),
                  (i = (i / 10) | 0);
              t[l] = i;
            }
            for (i ? ++e.e : t.shift(), s = t.length; !t[--s]; ) t.pop();
            return (e.c = t), e;
          }),
        (i.toExponential = function (e, t) {
          var r = this,
            o = r.c[0];
          if (e !== s) {
            if (e !== ~~e || e < 0 || e > 1e6) throw Error(n);
            for (r = c(new r.constructor(r), ++e, t); r.c.length < e; )
              r.c.push(0);
          }
          return u(r, !0, !!o);
        }),
        (i.toFixed = function (e, t) {
          var r = this,
            o = r.c[0];
          if (e !== s) {
            if (e !== ~~e || e < 0 || e > 1e6) throw Error(n);
            for (
              r = c(new r.constructor(r), e + r.e + 1, t), e = e + r.e + 1;
              r.c.length < e;

            )
              r.c.push(0);
          }
          return u(r, !1, !!o);
        }),
        (i[Symbol.for("nodejs.util.inspect.custom")] =
          i.toJSON =
          i.toString =
            function () {
              var e = this.constructor;
              return u(this, this.e <= e.NE || this.e >= e.PE, !!this.c[0]);
            }),
        (i.toNumber = function () {
          var e = +u(this, !0, !0);
          if (!0 === this.constructor.strict && !this.eq(e.toString()))
            throw Error(t + "Imprecise conversion");
          return e;
        }),
        (i.toPrecision = function (e, t) {
          var n = this,
            o = n.constructor,
            a = n.c[0];
          if (e !== s) {
            if (e !== ~~e || e < 1 || e > 1e6) throw Error(r + "precision");
            for (n = c(new o(n), e, t); n.c.length < e; ) n.c.push(0);
          }
          return u(n, e <= n.e || n.e <= o.NE || n.e >= o.PE, !!a);
        }),
        (i.valueOf = function () {
          var e = this.constructor;
          if (!0 === e.strict) throw Error(t + "valueOf disallowed");
          return u(this, this.e <= e.NE || this.e >= e.PE, !0);
        });
      var d = (function e() {
        function t(n) {
          if (!(this instanceof t)) return n === s ? e() : new t(n);
          if (n instanceof t)
            (this.s = n.s), (this.e = n.e), (this.c = n.c.slice());
          else {
            if ("string" != typeof n) {
              if (!0 === t.strict && "bigint" != typeof n)
                throw TypeError(r + "value");
              n = 0 === n && 1 / n < 0 ? "-0" : String(n);
            }
            !(function (e, t) {
              var n, o, a;
              if (!l.test(t)) throw Error(r + "number");
              for (
                e.s = "-" == t.charAt(0) ? ((t = t.slice(1)), -1) : 1,
                  (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
                  (o = t.search(/e/i)) > 0
                    ? (n < 0 && (n = o),
                      (n += +t.slice(o + 1)),
                      (t = t.substring(0, o)))
                    : n < 0 && (n = t.length),
                  a = t.length,
                  o = 0;
                o < a && "0" == t.charAt(o);

              )
                ++o;
              if (o == a) e.c = [(e.e = 0)];
              else {
                for (; a > 0 && "0" == t.charAt(--a); );
                for (e.e = n - o - 1, e.c = [], n = 0; o <= a; )
                  e.c[n++] = +t.charAt(o++);
              }
            })(this, n);
          }
          this.constructor = t;
        }
        return (
          (t.prototype = i),
          (t.DP = 20),
          (t.RM = 1),
          (t.NE = -7),
          (t.PE = 21),
          (t.strict = !1),
          (t.roundDown = 0),
          (t.roundHalfUp = 1),
          (t.roundHalfEven = 2),
          (t.roundUp = 3),
          t
        );
      })();
      let p = {
        bigNumber: (e) => new d(e ? e : 0),
        multiply(e, t) {
          if (void 0 === e || void 0 === t) return new d(0);
          let r = new d(e),
            n = new d(t);
          return r.times(n);
        },
        formatNumberToLocalString(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          return void 0 === e
            ? "0.00"
            : "number" == typeof e
            ? e.toLocaleString("en-US", {
                maximumFractionDigits: t,
                minimumFractionDigits: t,
              })
            : parseFloat(e).toLocaleString("en-US", {
                maximumFractionDigits: t,
                minimumFractionDigits: t,
              });
        },
        parseLocalStringToNumber: (e) =>
          void 0 === e ? 0 : parseFloat(e.replace(/,/gu, "")),
      };
    },
    17038: [
      (e) => {
        "use strict";
        e.s({ ChainController: () => P }, 17038);
        var t = e.i(724233),
          r = e.i(873206),
          n = e.i(850524),
          o = e.i(337733),
          a = e.i(940462),
          i = e.i(775078),
          s = e.i(55931),
          l = e.i(317687),
          c = e.i(868263),
          u = e.i(659863),
          d = e.i(936598),
          p = e.i(962949),
          C = e.i(935148),
          m = e.i(610411),
          w = e.i(907421),
          g = e.i(981824);
        e.s({ SendController: () => R }, 952504);
        var h = e.i(976065);
        e.s({ ContractUtil: () => A }, 784420);
        let f = [
            {
              type: "function",
              name: "transfer",
              stateMutability: "nonpayable",
              inputs: [
                { name: "_to", type: "address" },
                { name: "_value", type: "uint256" },
              ],
              outputs: [{ name: "", type: "bool" }],
            },
            {
              type: "function",
              name: "transferFrom",
              stateMutability: "nonpayable",
              inputs: [
                { name: "_from", type: "address" },
                { name: "_to", type: "address" },
                { name: "_value", type: "uint256" },
              ],
              outputs: [{ name: "", type: "bool" }],
            },
          ],
          v = [
            {
              type: "function",
              name: "approve",
              stateMutability: "nonpayable",
              inputs: [
                { name: "spender", type: "address" },
                { name: "amount", type: "uint256" },
              ],
              outputs: [{ type: "bool" }],
            },
          ],
          E = [
            {
              type: "function",
              name: "transfer",
              stateMutability: "nonpayable",
              inputs: [
                { name: "recipient", type: "address" },
                { name: "amount", type: "uint256" },
              ],
              outputs: [],
            },
            {
              type: "function",
              name: "transferFrom",
              stateMutability: "nonpayable",
              inputs: [
                { name: "sender", type: "address" },
                { name: "recipient", type: "address" },
                { name: "amount", type: "uint256" },
              ],
              outputs: [{ name: "", type: "bool" }],
            },
          ],
          A = {
            getERC20Abi: (e) =>
              n.ConstantsUtil.USDT_CONTRACT_ADDRESSES.includes(e) ? E : f,
            getSwapAbi: () => v,
          };
        var b = e.i(664572),
          _ = e.i(600711),
          S = e.i(864510);
        e.s({ SwapApiUtil: () => y }, 422765);
        var N = e.i(834245);
        let y = {
          async getTokenList() {
            var e;
            let t = P.state.activeCaipNetwork,
              r = await N.BlockchainApiController.fetchSwapTokens({
                chainId: null == t ? void 0 : t.caipNetworkId,
              });
            return (
              (null == r || null == (e = r.tokens)
                ? void 0
                : e.map((e) => ({
                    ...e,
                    eip2612: !1,
                    quantity: { decimals: "0", numeric: "0" },
                    price: 0,
                    value: 0,
                  }))) || []
            );
          },
          async fetchGasPrice() {
            let e = P.state.activeCaipNetwork;
            if (!e) return null;
            try {
              if ("solana" !== e.chainNamespace)
                return await N.BlockchainApiController.fetchGasPrice({
                  chainId: e.caipNetworkId,
                });
              {
                var t;
                let e =
                  null ==
                  (t = await (null === u.ConnectionController ||
                  void 0 === u.ConnectionController
                    ? void 0
                    : u.ConnectionController.estimateGas({
                        chainNamespace: "solana",
                      })))
                    ? void 0
                    : t.toString();
                return { standard: e, fast: e, instant: e };
              }
            } catch (e) {
              return null;
            }
          },
          async fetchSwapAllowance(e) {
            let {
                tokenAddress: t,
                userAddress: r,
                sourceTokenAmount: n,
                sourceTokenDecimals: o,
              } = e,
              a = await N.BlockchainApiController.fetchSwapAllowance({
                tokenAddress: t,
                userAddress: r,
              });
            if ((null == a ? void 0 : a.allowance) && n && o) {
              let e = u.ConnectionController.parseUnits(n, o) || 0;
              return BigInt(a.allowance) >= e;
            }
            return !1;
          },
          async getMyTokensWithBalance(e) {
            let t = await _.BalanceUtil.getMyTokensWithBalance(e);
            return (
              c.AccountController.setTokenBalance(t, P.state.activeChain),
              this.mapBalancesToSwapTokens(t)
            );
          },
          mapBalancesToSwapTokens: (e) =>
            (null == e
              ? void 0
              : e.map((e) => ({
                  ...e,
                  address: (null == e ? void 0 : e.address)
                    ? e.address
                    : (0, S.getActiveNetworkTokenAddress)(),
                  decimals: parseInt(e.quantity.decimals, 10),
                  logoUri: e.iconUrl,
                  eip2612: !1,
                }))) || [],
        };
        var I = e.i(663296);
        let T = (0, t.proxy)({ tokenBalances: [], loading: !1 }),
          R = (0, l.withErrorBoundary)({
            state: T,
            subscribe: (e) => (0, t.subscribe)(T, () => e(T)),
            subscribeKey: (e, t) => (0, r.subscribeKey)(T, e, t),
            setToken(e) {
              e && (T.token = (0, t.ref)(e));
            },
            setTokenAmount(e) {
              T.sendTokenAmount = e;
            },
            setReceiverAddress(e) {
              T.receiverAddress = e;
            },
            setReceiverProfileImageUrl(e) {
              T.receiverProfileImageUrl = e;
            },
            setReceiverProfileName(e) {
              T.receiverProfileName = e;
            },
            setNetworkBalanceInUsd(e) {
              T.networkBalanceInUSD = e;
            },
            setLoading(e) {
              T.loading = e;
            },
            async sendToken() {
              try {
                var e;
                switch (
                  (R.setLoading(!0),
                  null == (e = P.state.activeCaipNetwork)
                    ? void 0
                    : e.chainNamespace)
                ) {
                  case "eip155":
                    await R.sendEvmToken();
                    return;
                  case "solana":
                    await R.sendSolanaToken();
                    return;
                  default:
                    throw Error("Unsupported chain");
                }
              } finally {
                R.setLoading(!1);
              }
            },
            async sendEvmToken() {
              var e, t, r;
              let n = P.state.activeChain;
              if (!n)
                throw Error(
                  "SendController:sendEvmToken - activeChainNamespace is required"
                );
              let o = (0, S.getPreferredAccountType)(n);
              if (!R.state.sendTokenAmount || !R.state.receiverAddress)
                throw Error("An amount and receiver address are required");
              if (!R.state.token) throw Error("A token is required");
              (null == (e = R.state.token) ? void 0 : e.address)
                ? (p.EventsController.sendEvent({
                    type: "track",
                    event: "SEND_INITIATED",
                    properties: {
                      isSmartAccount:
                        o ===
                        b.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                      token: R.state.token.address,
                      amount: R.state.sendTokenAmount,
                      network:
                        (null == (t = P.state.activeCaipNetwork)
                          ? void 0
                          : t.caipNetworkId) || "",
                    },
                  }),
                  await R.sendERC20Token({
                    receiverAddress: R.state.receiverAddress,
                    tokenAddress: R.state.token.address,
                    sendTokenAmount: R.state.sendTokenAmount,
                    decimals: R.state.token.quantity.decimals,
                  }))
                : (p.EventsController.sendEvent({
                    type: "track",
                    event: "SEND_INITIATED",
                    properties: {
                      isSmartAccount:
                        o ===
                        b.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                      token: R.state.token.symbol || "",
                      amount: R.state.sendTokenAmount,
                      network:
                        (null == (r = P.state.activeCaipNetwork)
                          ? void 0
                          : r.caipNetworkId) || "",
                    },
                  }),
                  await R.sendNativeToken({
                    receiverAddress: R.state.receiverAddress,
                    sendTokenAmount: R.state.sendTokenAmount,
                    decimals: R.state.token.quantity.decimals,
                  }));
            },
            async fetchTokenBalance(e) {
              var t, r;
              T.loading = !0;
              let n =
                  null == (t = P.state.activeCaipNetwork)
                    ? void 0
                    : t.caipNetworkId,
                o =
                  null == (r = P.state.activeCaipNetwork)
                    ? void 0
                    : r.chainNamespace,
                s = P.state.activeCaipAddress,
                l = s ? i.CoreHelperUtil.getPlainAddress(s) : void 0;
              if (
                T.lastRetry &&
                !i.CoreHelperUtil.isAllowedRetry(
                  T.lastRetry,
                  30 * a.ConstantsUtil.ONE_SEC_MS
                )
              )
                return (T.loading = !1), [];
              try {
                if (l && n && o) {
                  let e = await _.BalanceUtil.getMyTokensWithBalance();
                  return (T.tokenBalances = e), (T.lastRetry = void 0), e;
                }
              } catch (t) {
                (T.lastRetry = Date.now()),
                  null == e || e(t),
                  I.SnackController.showError("Token Balance Unavailable");
              } finally {
                T.loading = !1;
              }
              return [];
            },
            fetchNetworkBalance() {
              if (0 === T.tokenBalances.length) return;
              let e = y.mapBalancesToSwapTokens(T.tokenBalances);
              if (!e) return;
              let t = e.find(
                (e) => e.address === (0, S.getActiveNetworkTokenAddress)()
              );
              t &&
                (T.networkBalanceInUSD = t
                  ? h.NumberUtil.multiply(
                      t.quantity.numeric,
                      t.price
                    ).toString()
                  : "0");
            },
            async sendNativeToken(e) {
              var t, r, o;
              g.RouterController.pushTransactionStack({});
              let a = e.receiverAddress,
                i = c.AccountController.state.address,
                s = u.ConnectionController.parseUnits(
                  e.sendTokenAmount.toString(),
                  Number(e.decimals)
                );
              await u.ConnectionController.sendTransaction({
                chainNamespace: n.ConstantsUtil.CHAIN.EVM,
                to: a,
                address: i,
                data: "0x",
                value: null != s ? s : BigInt(0),
              }),
                p.EventsController.sendEvent({
                  type: "track",
                  event: "SEND_SUCCESS",
                  properties: {
                    isSmartAccount:
                      (0, S.getPreferredAccountType)("eip155") ===
                      b.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                    token:
                      (null == (t = R.state.token) ? void 0 : t.symbol) || "",
                    amount: e.sendTokenAmount,
                    network:
                      (null == (r = P.state.activeCaipNetwork)
                        ? void 0
                        : r.caipNetworkId) || "",
                  },
                }),
                null == (o = u.ConnectionController._getClient()) ||
                  o.updateBalance("eip155"),
                R.resetSend();
            },
            async sendERC20Token(e) {
              g.RouterController.pushTransactionStack({
                onSuccess() {
                  g.RouterController.replace("Account");
                },
              });
              let t = u.ConnectionController.parseUnits(
                e.sendTokenAmount.toString(),
                Number(e.decimals)
              );
              if (
                c.AccountController.state.address &&
                e.sendTokenAmount &&
                e.receiverAddress &&
                e.tokenAddress
              ) {
                let r = i.CoreHelperUtil.getPlainAddress(e.tokenAddress);
                if (!r)
                  throw Error(
                    "SendController:sendERC20Token - tokenAddress is required"
                  );
                await u.ConnectionController.writeContract({
                  fromAddress: c.AccountController.state.address,
                  tokenAddress: r,
                  args: [e.receiverAddress, null != t ? t : BigInt(0)],
                  method: "transfer",
                  abi: A.getERC20Abi(r),
                  chainNamespace: n.ConstantsUtil.CHAIN.EVM,
                }),
                  R.resetSend();
              }
            },
            async sendSolanaToken() {
              var e;
              if (!R.state.sendTokenAmount || !R.state.receiverAddress)
                throw Error("An amount and receiver address are required");
              g.RouterController.pushTransactionStack({
                onSuccess() {
                  g.RouterController.replace("Account");
                },
              }),
                await u.ConnectionController.sendTransaction({
                  chainNamespace: "solana",
                  to: R.state.receiverAddress,
                  value: R.state.sendTokenAmount,
                }),
                null == (e = u.ConnectionController._getClient()) ||
                  e.updateBalance("solana"),
                R.resetSend();
            },
            resetSend() {
              (T.token = void 0),
                (T.sendTokenAmount = void 0),
                (T.receiverAddress = void 0),
                (T.receiverProfileImageUrl = void 0),
                (T.receiverProfileName = void 0),
                (T.loading = !1),
                (T.tokenBalances = []);
            },
          }),
          k = {
            currentTab: 0,
            tokenBalance: [],
            smartAccountDeployed: !1,
            addressLabels: new Map(),
            user: void 0,
            preferredAccountType: void 0,
          },
          O = {
            caipNetwork: void 0,
            supportsAllNetworks: !0,
            smartAccountEnabledNetworks: [],
          },
          U = (0, t.proxy)({
            chains: (0, r.proxyMap)(),
            activeCaipAddress: void 0,
            activeChain: void 0,
            activeCaipNetwork: void 0,
            noAdapters: !1,
            universalAdapter: {
              networkControllerClient: void 0,
              connectionControllerClient: void 0,
            },
            isSwitchingNamespace: !1,
          }),
          P = (0, l.withErrorBoundary)({
            state: U,
            subscribe: (e) =>
              (0, t.subscribe)(U, () => {
                e(U);
              }),
            subscribeKey: (e, t) => (0, r.subscribeKey)(U, e, t),
            subscribeChainProp(e, r, n) {
              let o;
              return (0, t.subscribe)(U.chains, () => {
                let t = n || U.activeChain;
                if (t) {
                  var a;
                  let n = null == (a = U.chains.get(t)) ? void 0 : a[e];
                  o !== n && ((o = n), r(n));
                }
              });
            },
            initialize(e, r, n) {
              var o;
              let { chainId: a, namespace: i } =
                  s.StorageUtil.getActiveNetworkProps(),
                l =
                  null == r
                    ? void 0
                    : r.find(
                        (e) =>
                          e.id.toString() ===
                          (null == a ? void 0 : a.toString())
                      ),
                c =
                  e.find((e) => (null == e ? void 0 : e.namespace) === i) ||
                  (null == e ? void 0 : e[0]),
                u = e.map((e) => e.namespace).filter((e) => void 0 !== e),
                d = new Set(
                  m.OptionsController.state.enableEmbedded
                    ? [...u]
                    : [
                        ...(null !=
                        (o =
                          null == r ? void 0 : r.map((e) => e.chainNamespace))
                          ? o
                          : []),
                      ]
                );
              ((null == e ? void 0 : e.length) !== 0 && c) ||
                (U.noAdapters = !0),
                !U.noAdapters &&
                  ((U.activeChain = null == c ? void 0 : c.namespace),
                  (U.activeCaipNetwork = l),
                  P.setChainNetworkData(null == c ? void 0 : c.namespace, {
                    caipNetwork: l,
                  }),
                  U.activeChain &&
                    w.PublicStateController.set({
                      activeChain: null == c ? void 0 : c.namespace,
                    })),
                d.forEach((e) => {
                  let o =
                      null == r
                        ? void 0
                        : r.filter((t) => t.chainNamespace === e),
                    a = s.StorageUtil.getPreferredAccountTypes() || {},
                    i = {
                      ...m.OptionsController.state.defaultAccountTypes,
                      ...a,
                    };
                  P.state.chains.set(e, {
                    namespace: e,
                    networkState: (0, t.proxy)({
                      ...O,
                      caipNetwork: null == o ? void 0 : o[0],
                    }),
                    accountState: (0, t.proxy)({
                      ...k,
                      preferredAccountType: i[e],
                    }),
                    caipNetworks: null != o ? o : [],
                    ...n,
                  }),
                    P.setRequestedCaipNetworks(null != o ? o : [], e);
                });
            },
            removeAdapter(e) {
              if (U.activeChain === e) {
                let n = Array.from(U.chains.entries()).find((t) => {
                  let [r] = t;
                  return r !== e;
                });
                if (n) {
                  var t, r;
                  let e =
                    null == (r = n[1]) || null == (t = r.caipNetworks)
                      ? void 0
                      : t[0];
                  e && P.setActiveCaipNetwork(e);
                }
              }
              U.chains.delete(e);
            },
            addAdapter(e, t, r) {
              var n;
              let {
                networkControllerClient: o,
                connectionControllerClient: a,
              } = t;
              if (!e.namespace)
                throw Error(
                  "ChainController:addAdapter - adapter must have a namespace"
                );
              U.chains.set(e.namespace, {
                namespace: e.namespace,
                networkState: { ...O, caipNetwork: r[0] },
                accountState: k,
                caipNetworks: r,
                connectionControllerClient: a,
                networkControllerClient: o,
              }),
                P.setRequestedCaipNetworks(
                  null !=
                    (n =
                      null == r
                        ? void 0
                        : r.filter((t) => t.chainNamespace === e.namespace))
                    ? n
                    : [],
                  e.namespace
                );
            },
            addNetwork(e) {
              let t = U.chains.get(e.chainNamespace);
              if (t) {
                var r;
                let n = [...(t.caipNetworks || [])];
                (null == (r = t.caipNetworks)
                  ? void 0
                  : r.find((t) => t.id === e.id)) || n.push(e),
                  U.chains.set(e.chainNamespace, { ...t, caipNetworks: n }),
                  P.setRequestedCaipNetworks(n, e.chainNamespace),
                  d.ConnectorController.filterByNamespace(e.chainNamespace, !0);
              }
            },
            removeNetwork(e, t) {
              let r = U.chains.get(e);
              if (r) {
                var n, o, a;
                let i =
                    (null == (n = U.activeCaipNetwork) ? void 0 : n.id) === t,
                  s = [
                    ...((null == (o = r.caipNetworks)
                      ? void 0
                      : o.filter((e) => e.id !== t)) || []),
                  ];
                i &&
                  (null == r || null == (a = r.caipNetworks) ? void 0 : a[0]) &&
                  P.setActiveCaipNetwork(r.caipNetworks[0]),
                  U.chains.set(e, { ...r, caipNetworks: s }),
                  P.setRequestedCaipNetworks(s || [], e),
                  0 === s.length &&
                    d.ConnectorController.filterByNamespace(e, !1);
              }
            },
            setAdapterNetworkState(e, t) {
              let r = U.chains.get(e);
              r &&
                ((r.networkState = { ...(r.networkState || O), ...t }),
                U.chains.set(e, r));
            },
            setChainAccountData(e, t) {
              if (
                (arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                !e)
              )
                throw Error("Chain is required to update chain account data");
              let r = U.chains.get(e);
              if (r) {
                let n = { ...(r.accountState || k), ...t };
                U.chains.set(e, { ...r, accountState: n }),
                  (1 === U.chains.size || U.activeChain === e) &&
                    (t.caipAddress && (U.activeCaipAddress = t.caipAddress),
                    c.AccountController.replaceState(n));
              }
            },
            setChainNetworkData(e, t) {
              if (!e) return;
              let r = U.chains.get(e);
              if (r) {
                let n = { ...(r.networkState || O), ...t };
                U.chains.set(e, { ...r, networkState: n });
              }
            },
            setAccountProp(e, t, r) {
              let n =
                !(arguments.length > 3) ||
                void 0 === arguments[3] ||
                arguments[3];
              P.setChainAccountData(r, { [e]: t }, n);
            },
            setActiveNamespace(e) {
              var t, r;
              U.activeChain = e;
              let n = e ? U.chains.get(e) : void 0,
                o =
                  null == n || null == (t = n.networkState)
                    ? void 0
                    : t.caipNetwork;
              (null == o ? void 0 : o.id) &&
                e &&
                ((U.activeCaipAddress =
                  null == n || null == (r = n.accountState)
                    ? void 0
                    : r.caipAddress),
                (U.activeCaipNetwork = o),
                P.setChainNetworkData(e, { caipNetwork: o }),
                s.StorageUtil.setActiveCaipNetworkId(
                  null == o ? void 0 : o.caipNetworkId
                ),
                w.PublicStateController.set({
                  activeChain: e,
                  selectedNetworkId: null == o ? void 0 : o.caipNetworkId,
                }));
            },
            setActiveCaipNetwork(e) {
              var t, r, n;
              if (!e) return;
              U.activeChain !== e.chainNamespace &&
                P.setIsSwitchingNamespace(!0);
              let o = U.chains.get(e.chainNamespace);
              (U.activeChain = e.chainNamespace),
                (U.activeCaipNetwork = e),
                P.setChainNetworkData(e.chainNamespace, { caipNetwork: e }),
                (null == o || null == (t = o.accountState) ? void 0 : t.address)
                  ? (U.activeCaipAddress = ""
                      .concat(e.chainNamespace, ":")
                      .concat(e.id, ":")
                      .concat(
                        null == o || null == (n = o.accountState)
                          ? void 0
                          : n.address
                      ))
                  : (U.activeCaipAddress = void 0),
                P.setAccountProp(
                  "caipAddress",
                  U.activeCaipAddress,
                  e.chainNamespace
                ),
                o && c.AccountController.replaceState(o.accountState),
                R.resetSend(),
                w.PublicStateController.set({
                  activeChain: U.activeChain,
                  selectedNetworkId:
                    null == (r = U.activeCaipNetwork)
                      ? void 0
                      : r.caipNetworkId,
                }),
                s.StorageUtil.setActiveCaipNetworkId(e.caipNetworkId),
                P.checkIfSupportedNetwork(e.chainNamespace) ||
                  !m.OptionsController.state.enableNetworkSwitch ||
                  m.OptionsController.state.allowUnsupportedChain ||
                  u.ConnectionController.state.wcBasic ||
                  P.showUnsupportedChainUI();
            },
            addCaipNetwork(e) {
              if (!e) return;
              let t = U.chains.get(e.chainNamespace);
              if (t) {
                var r;
                null == t || null == (r = t.caipNetworks) || r.push(e);
              }
            },
            async switchActiveNamespace(e) {
              var t;
              if (!e) return;
              let r = e !== P.state.activeChain,
                n = null == (t = P.getNetworkData(e)) ? void 0 : t.caipNetwork,
                o = P.getCaipNetworkByNamespace(e, null == n ? void 0 : n.id);
              r && o && (await P.switchActiveNetwork(o));
            },
            async switchActiveNetwork(e) {
              var t;
              let r = P.state.activeChain;
              if (!r)
                throw Error(
                  "ChainController:switchActiveNetwork - namespace is required"
                );
              let n = P.state.chains.get(r),
                o = !(null == n || null == (t = n.caipNetworks)
                  ? void 0
                  : t.some((e) => {
                      var t;
                      return (
                        e.id ===
                        (null == (t = U.activeCaipNetwork) ? void 0 : t.id)
                      );
                    })),
                a = P.getNetworkControllerClient(e.chainNamespace);
              if (a) {
                try {
                  await a.switchCaipNetwork(e), o && C.ModalController.close();
                } catch (e) {
                  g.RouterController.goBack();
                }
                p.EventsController.sendEvent({
                  type: "track",
                  event: "SWITCH_NETWORK",
                  properties: { network: e.caipNetworkId },
                });
              }
            },
            getNetworkControllerClient(e) {
              let t = e || U.activeChain;
              if (!t)
                throw Error(
                  "ChainController:getNetworkControllerClient - chain is required"
                );
              let r = U.chains.get(t);
              if (!r) throw Error("Chain adapter not found");
              if (!r.networkControllerClient)
                throw Error("NetworkController client not set");
              return r.networkControllerClient;
            },
            getConnectionControllerClient(e) {
              let t = e || U.activeChain;
              if (!t)
                throw Error(
                  "Chain is required to get connection controller client"
                );
              let r = U.chains.get(t);
              if (!(null == r ? void 0 : r.connectionControllerClient))
                throw Error("ConnectionController client not set");
              return r.connectionControllerClient;
            },
            getAccountProp(e, t) {
              var r;
              let n = U.activeChain;
              if ((t && (n = t), !n)) return;
              let o = null == (r = U.chains.get(n)) ? void 0 : r.accountState;
              if (o) return o[e];
            },
            getNetworkProp(e, t) {
              var r;
              let n = null == (r = U.chains.get(t)) ? void 0 : r.networkState;
              if (n) return n[e];
            },
            getRequestedCaipNetworks(e) {
              let t = U.chains.get(e),
                {
                  approvedCaipNetworkIds: r = [],
                  requestedCaipNetworks: n = [],
                } = (null == t ? void 0 : t.networkState) || {};
              return i.CoreHelperUtil.sortRequestedNetworks(r, n).filter((e) =>
                null == e ? void 0 : e.id
              );
            },
            getAllRequestedCaipNetworks() {
              let e = [];
              return (
                U.chains.forEach((t) => {
                  if (!t.namespace)
                    throw Error(
                      "ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace"
                    );
                  let r = P.getRequestedCaipNetworks(t.namespace);
                  e.push(...r);
                }),
                e
              );
            },
            setRequestedCaipNetworks(e, t) {
              P.setAdapterNetworkState(t, { requestedCaipNetworks: e });
              let r = Array.from(
                new Set(
                  P.getAllRequestedCaipNetworks().map((e) => e.chainNamespace)
                )
              );
              d.ConnectorController.filterByNamespaces(r);
            },
            getAllApprovedCaipNetworkIds() {
              let e = [];
              return (
                U.chains.forEach((t) => {
                  if (!t.namespace)
                    throw Error(
                      "ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace"
                    );
                  let r = P.getApprovedCaipNetworkIds(t.namespace);
                  e.push(...r);
                }),
                e
              );
            },
            getActiveCaipNetwork(e) {
              if (e) {
                var t, r;
                return null == (r = U.chains.get(e)) ||
                  null == (t = r.networkState)
                  ? void 0
                  : t.caipNetwork;
              }
              return U.activeCaipNetwork;
            },
            getActiveCaipAddress: () => U.activeCaipAddress,
            getApprovedCaipNetworkIds(e) {
              var t;
              let r = U.chains.get(e);
              return (
                (null == r || null == (t = r.networkState)
                  ? void 0
                  : t.approvedCaipNetworkIds) || []
              );
            },
            async setApprovedCaipNetworksData(e) {
              let t = P.getNetworkControllerClient(),
                r = await (null == t
                  ? void 0
                  : t.getApprovedCaipNetworksData());
              P.setAdapterNetworkState(e, {
                approvedCaipNetworkIds:
                  null == r ? void 0 : r.approvedCaipNetworkIds,
                supportsAllNetworks: null == r ? void 0 : r.supportsAllNetworks,
              });
            },
            checkIfSupportedNetwork(e, t) {
              let r = t || U.activeCaipNetwork,
                n = P.getRequestedCaipNetworks(e);
              return (
                !n.length ||
                (null == n
                  ? void 0
                  : n.some((e) => e.id === (null == r ? void 0 : r.id)))
              );
            },
            checkIfSupportedChainId(e) {
              if (!U.activeChain) return !0;
              let t = P.getRequestedCaipNetworks(U.activeChain);
              return null == t ? void 0 : t.some((t) => t.id === e);
            },
            setSmartAccountEnabledNetworks(e, t) {
              P.setAdapterNetworkState(t, { smartAccountEnabledNetworks: e });
            },
            checkIfSmartAccountEnabled() {
              var e;
              let t = o.NetworkUtil.caipNetworkIdToNumber(
                  null == (e = U.activeCaipNetwork) ? void 0 : e.caipNetworkId
                ),
                r = U.activeChain;
              if (!r || !t) return !1;
              let n = P.getNetworkProp("smartAccountEnabledNetworks", r);
              return !!(null == n ? void 0 : n.includes(Number(t)));
            },
            showUnsupportedChainUI() {
              C.ModalController.open({ view: "UnsupportedChain" });
            },
            checkIfNamesSupported() {
              let e = U.activeCaipNetwork;
              return !!(
                (null == e ? void 0 : e.chainNamespace) &&
                a.ConstantsUtil.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(
                  e.chainNamespace
                )
              );
            },
            resetNetwork(e) {
              P.setAdapterNetworkState(e, {
                approvedCaipNetworkIds: void 0,
                supportsAllNetworks: !0,
              });
            },
            resetAccount(e) {
              if (!e) throw Error("Chain is required to set account prop");
              let t = m.OptionsController.state.defaultAccountTypes[e],
                r = P.getAccountProp("preferredAccountType", e);
              (U.activeCaipAddress = void 0),
                P.setChainAccountData(e, {
                  smartAccountDeployed: !1,
                  currentTab: 0,
                  caipAddress: void 0,
                  address: void 0,
                  balance: void 0,
                  balanceSymbol: void 0,
                  profileName: void 0,
                  profileImage: void 0,
                  addressExplorerUrl: void 0,
                  tokenBalance: [],
                  connectedWalletInfo: void 0,
                  preferredAccountType: t || r,
                  socialProvider: void 0,
                  socialWindow: void 0,
                  farcasterUrl: void 0,
                  user: void 0,
                  status: "disconnected",
                }),
                d.ConnectorController.removeConnectorId(e);
            },
            setIsSwitchingNamespace(e) {
              U.isSwitchingNamespace = e;
            },
            getFirstCaipNetworkSupportsAuthConnector() {
              let e = [];
              if (
                (U.chains.forEach((t) => {
                  n.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(
                    (e) => e === t.namespace
                  ) &&
                    t.namespace &&
                    e.push(t.namespace);
                }),
                e.length > 0)
              ) {
                var t, r;
                let n = e[0];
                return n
                  ? null == (r = U.chains.get(n)) ||
                    null == (t = r.caipNetworks)
                    ? void 0
                    : t[0]
                  : void 0;
              }
            },
            getAccountData(e) {
              var t;
              return e
                ? null == (t = P.state.chains.get(e))
                  ? void 0
                  : t.accountState
                : c.AccountController.state;
            },
            getNetworkData(e) {
              var t;
              let r = e || U.activeChain;
              if (r)
                return null == (t = P.state.chains.get(r))
                  ? void 0
                  : t.networkState;
            },
            getCaipNetworkByNamespace(e, t) {
              var r, n, o;
              if (!e) return;
              let a = P.state.chains.get(e),
                i =
                  null == a || null == (r = a.caipNetworks)
                    ? void 0
                    : r.find((e) => e.id === t);
              return (
                i ||
                (null == a || null == (n = a.networkState)
                  ? void 0
                  : n.caipNetwork) ||
                (null == a || null == (o = a.caipNetworks) ? void 0 : o[0])
              );
            },
            getRequestedCaipNetworkIds() {
              let e = d.ConnectorController.state.filterByNamespace;
              return (e ? [U.chains.get(e)] : Array.from(U.chains.values()))
                .flatMap((e) => (null == e ? void 0 : e.caipNetworks) || [])
                .map((e) => e.caipNetworkId);
            },
            getCaipNetworks: (e) =>
              e
                ? P.getRequestedCaipNetworks(e)
                : P.getAllRequestedCaipNetworks(),
            setLastConnectedSIWECaipNetwork(e) {
              U.lastConnectedSIWECaipNetwork = e;
            },
            getLastConnectedSIWECaipNetwork: () =>
              U.lastConnectedSIWECaipNetwork,
          });
      },
      [784420, 422765, 952504],
    ],
    834245: (e) => {
      "use strict";
      e.s({ BlockchainApiController: () => C });
      var t = e.i(724233),
        r = e.i(940462),
        n = e.i(775078),
        o = e.i(579586),
        a = e.i(55931),
        i = e.i(868263),
        s = e.i(17038),
        l = e.i(610411),
        c = e.i(663296);
      let u = {
          purchaseCurrencies: [
            {
              id: "2b92315d-eab7-5bef-84fa-089a131333f5",
              name: "USD Coin",
              symbol: "USDC",
              networks: [
                {
                  name: "ethereum-mainnet",
                  display_name: "Ethereum",
                  chain_id: "1",
                  contract_address:
                    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                },
                {
                  name: "polygon-mainnet",
                  display_name: "Polygon",
                  chain_id: "137",
                  contract_address:
                    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
                },
              ],
            },
            {
              id: "2b92315d-eab7-5bef-84fa-089a131333f5",
              name: "Ether",
              symbol: "ETH",
              networks: [
                {
                  name: "ethereum-mainnet",
                  display_name: "Ethereum",
                  chain_id: "1",
                  contract_address:
                    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                },
                {
                  name: "polygon-mainnet",
                  display_name: "Polygon",
                  chain_id: "137",
                  contract_address:
                    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
                },
              ],
            },
          ],
          paymentCurrencies: [
            {
              id: "USD",
              payment_method_limits: [
                { id: "card", min: "10.00", max: "7500.00" },
                { id: "ach_bank_account", min: "10.00", max: "25000.00" },
              ],
            },
            {
              id: "EUR",
              payment_method_limits: [
                { id: "card", min: "10.00", max: "7500.00" },
                { id: "ach_bank_account", min: "10.00", max: "25000.00" },
              ],
            },
          ],
        },
        d = n.CoreHelperUtil.getBlockchainApiUrl(),
        p = (0, t.proxy)({
          clientId: null,
          api: new o.FetchUtil({ baseUrl: d, clientId: null }),
          supportedChains: { http: [], ws: [] },
        }),
        C = {
          state: p,
          async get(e) {
            let { st: t, sv: r } = C.getSdkProperties(),
              n = l.OptionsController.state.projectId,
              o = { ...(e.params || {}), st: t, sv: r, projectId: n };
            return p.api.get({ ...e, params: o });
          },
          getSdkProperties() {
            let { sdkType: e, sdkVersion: t } = l.OptionsController.state;
            return { st: e || "unknown", sv: t || "unknown" };
          },
          async isNetworkSupported(e) {
            if (!e) return !1;
            try {
              p.supportedChains.http.length || (await C.getSupportedNetworks());
            } catch (e) {
              return !1;
            }
            return p.supportedChains.http.includes(e);
          },
          async getSupportedNetworks() {
            try {
              let e = await C.get({ path: "v1/supported-chains" });
              return (p.supportedChains = e), e;
            } catch (e) {
              return p.supportedChains;
            }
          },
          async fetchIdentity(e) {
            let { address: t, caipNetworkId: r } = e;
            if (!(await C.isNetworkSupported(r)))
              return { avatar: "", name: "" };
            let o = a.StorageUtil.getIdentityFromCacheForAddress(t);
            if (o) return o;
            let i = await C.get({
              path: "/v1/identity/".concat(t),
              params: {
                sender: s.ChainController.state.activeCaipAddress
                  ? n.CoreHelperUtil.getPlainAddress(
                      s.ChainController.state.activeCaipAddress
                    )
                  : void 0,
              },
            });
            return (
              a.StorageUtil.updateIdentityCache({
                address: t,
                identity: i,
                timestamp: Date.now(),
              }),
              i
            );
          },
          async fetchTransactions(e) {
            var t;
            let { account: r, cursor: n, signal: o, cache: a, chainId: i } = e;
            return (await C.isNetworkSupported(
              null == (t = s.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? C.get({
                  path: "/v1/account/".concat(r, "/history"),
                  params: { cursor: n, chainId: i },
                  signal: o,
                  cache: a,
                })
              : { data: [], next: void 0 };
          },
          async fetchSwapQuote(e) {
            var t;
            let { amount: r, userAddress: n, from: o, to: a, gasPrice: i } = e;
            return (await C.isNetworkSupported(
              null == (t = s.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? C.get({
                  path: "/v1/convert/quotes",
                  headers: { "Content-Type": "application/json" },
                  params: {
                    amount: r,
                    userAddress: n,
                    from: o,
                    to: a,
                    gasPrice: i,
                  },
                })
              : { quotes: [] };
          },
          async fetchSwapTokens(e) {
            var t;
            let { chainId: r } = e;
            return (await C.isNetworkSupported(
              null == (t = s.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? C.get({ path: "/v1/convert/tokens", params: { chainId: r } })
              : { tokens: [] };
          },
          async fetchTokenPrice(e) {
            var t;
            let { addresses: r } = e;
            return (await C.isNetworkSupported(
              null == (t = s.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? p.api.post({
                  path: "/v1/fungible/price",
                  body: {
                    currency: "usd",
                    addresses: r,
                    projectId: l.OptionsController.state.projectId,
                  },
                  headers: { "Content-Type": "application/json" },
                })
              : { fungibles: [] };
          },
          async fetchSwapAllowance(e) {
            var t;
            let { tokenAddress: r, userAddress: n } = e;
            return (await C.isNetworkSupported(
              null == (t = s.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? C.get({
                  path: "/v1/convert/allowance",
                  params: { tokenAddress: r, userAddress: n },
                  headers: { "Content-Type": "application/json" },
                })
              : { allowance: "0" };
          },
          async fetchGasPrice(e) {
            var t;
            let { chainId: r } = e,
              { st: n, sv: o } = C.getSdkProperties();
            if (
              !(await C.isNetworkSupported(
                null == (t = s.ChainController.state.activeCaipNetwork)
                  ? void 0
                  : t.caipNetworkId
              ))
            )
              throw Error("Network not supported for Gas Price");
            return C.get({
              path: "/v1/convert/gas-price",
              headers: { "Content-Type": "application/json" },
              params: { chainId: r, st: n, sv: o },
            });
          },
          async generateSwapCalldata(e) {
            var t;
            let {
              amount: n,
              from: o,
              to: a,
              userAddress: i,
              disableEstimate: c,
            } = e;
            if (
              !(await C.isNetworkSupported(
                null == (t = s.ChainController.state.activeCaipNetwork)
                  ? void 0
                  : t.caipNetworkId
              ))
            )
              throw Error("Network not supported for Swaps");
            return p.api.post({
              path: "/v1/convert/build-transaction",
              headers: { "Content-Type": "application/json" },
              body: {
                amount: n,
                eip155: {
                  slippage: r.ConstantsUtil.CONVERT_SLIPPAGE_TOLERANCE,
                },
                projectId: l.OptionsController.state.projectId,
                from: o,
                to: a,
                userAddress: i,
                disableEstimate: c,
              },
            });
          },
          async generateApproveCalldata(e) {
            var t;
            let { from: r, to: n, userAddress: o } = e,
              { st: a, sv: i } = C.getSdkProperties();
            if (
              !(await C.isNetworkSupported(
                null == (t = s.ChainController.state.activeCaipNetwork)
                  ? void 0
                  : t.caipNetworkId
              ))
            )
              throw Error("Network not supported for Swaps");
            return C.get({
              path: "/v1/convert/build-approve",
              headers: { "Content-Type": "application/json" },
              params: { userAddress: o, from: r, to: n, st: a, sv: i },
            });
          },
          async getBalance(e, t, r) {
            var n;
            let { st: o, sv: i } = C.getSdkProperties();
            if (
              !(await C.isNetworkSupported(
                null == (n = s.ChainController.state.activeCaipNetwork)
                  ? void 0
                  : n.caipNetworkId
              ))
            )
              return (
                c.SnackController.showError("Token Balance Unavailable"),
                { balances: [] }
              );
            let l = "".concat(t, ":").concat(e),
              u = a.StorageUtil.getBalanceCacheForCaipAddress(l);
            if (u) return u;
            let d = await C.get({
              path: "/v1/account/".concat(e, "/balance"),
              params: {
                currency: "usd",
                chainId: t,
                forceUpdate: r,
                st: o,
                sv: i,
              },
            });
            return (
              a.StorageUtil.updateBalanceCache({
                caipAddress: l,
                balance: d,
                timestamp: Date.now(),
              }),
              d
            );
          },
          async lookupEnsName(e) {
            var t;
            return (await C.isNetworkSupported(
              null == (t = s.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? C.get({
                  path: "/v1/profile/account/".concat(e),
                  params: { apiVersion: "2" },
                })
              : { addresses: {}, attributes: [] };
          },
          async reverseLookupEnsName(e) {
            var t;
            let { address: r } = e;
            return (await C.isNetworkSupported(
              null == (t = s.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? C.get({
                  path: "/v1/profile/reverse/".concat(r),
                  params: {
                    sender: i.AccountController.state.address,
                    apiVersion: "2",
                  },
                })
              : [];
          },
          async getEnsNameSuggestions(e) {
            var t;
            return (await C.isNetworkSupported(
              null == (t = s.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? C.get({
                  path: "/v1/profile/suggestions/".concat(e),
                  params: { zone: "reown.id" },
                })
              : { suggestions: [] };
          },
          async registerEnsName(e) {
            var t;
            let { coinType: r, address: n, message: o, signature: a } = e;
            return (await C.isNetworkSupported(
              null == (t = s.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? p.api.post({
                  path: "/v1/profile/account",
                  body: { coin_type: r, address: n, message: o, signature: a },
                  headers: { "Content-Type": "application/json" },
                })
              : { success: !1 };
          },
          async generateOnRampURL(e) {
            var t;
            let {
              destinationWallets: r,
              partnerUserId: n,
              defaultNetwork: o,
              purchaseAmount: a,
              paymentAmount: i,
            } = e;
            return (await C.isNetworkSupported(
              null == (t = s.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? (
                  await p.api.post({
                    path: "/v1/generators/onrampurl",
                    params: { projectId: l.OptionsController.state.projectId },
                    body: {
                      destinationWallets: r,
                      defaultNetwork: o,
                      partnerUserId: n,
                      defaultExperience: "buy",
                      presetCryptoAmount: a,
                      presetFiatAmount: i,
                    },
                  })
                ).url
              : "";
          },
          async getOnrampOptions() {
            var e;
            if (
              !(await C.isNetworkSupported(
                null == (e = s.ChainController.state.activeCaipNetwork)
                  ? void 0
                  : e.caipNetworkId
              ))
            )
              return { paymentCurrencies: [], purchaseCurrencies: [] };
            try {
              return await C.get({ path: "/v1/onramp/options" });
            } catch (e) {
              return u;
            }
          },
          async getOnrampQuote(e) {
            let {
              purchaseCurrency: t,
              paymentCurrency: r,
              amount: n,
              network: o,
            } = e;
            try {
              var a;
              if (
                !(await C.isNetworkSupported(
                  null == (a = s.ChainController.state.activeCaipNetwork)
                    ? void 0
                    : a.caipNetworkId
                ))
              )
                return null;
              return await p.api.post({
                path: "/v1/onramp/quote",
                params: { projectId: l.OptionsController.state.projectId },
                body: {
                  purchaseCurrency: t,
                  paymentCurrency: r,
                  amount: n,
                  network: o,
                },
              });
            } catch (e) {
              return {
                networkFee: { amount: n, currency: r.id },
                paymentSubtotal: { amount: n, currency: r.id },
                paymentTotal: { amount: n, currency: r.id },
                purchaseAmount: { amount: n, currency: r.id },
                quoteId: "mocked-quote-id",
              };
            }
          },
          async getSmartSessions(e) {
            var t;
            return (await C.isNetworkSupported(
              null == (t = s.ChainController.state.activeCaipNetwork)
                ? void 0
                : t.caipNetworkId
            ))
              ? C.get({ path: "/v1/sessions/".concat(e) })
              : [];
          },
          async revokeSmartSession(e, t, r) {
            var n;
            return (await C.isNetworkSupported(
              null == (n = s.ChainController.state.activeCaipNetwork)
                ? void 0
                : n.caipNetworkId
            ))
              ? p.api.post({
                  path: "/v1/sessions/".concat(e, "/revoke"),
                  params: { projectId: l.OptionsController.state.projectId },
                  body: { pci: t, signature: r },
                })
              : { success: !1 };
          },
          setClientId(e) {
            (p.clientId = e),
              (p.api = new o.FetchUtil({ baseUrl: d, clientId: e }));
          },
        };
    },
    868263: [
      (e) => {
        "use strict";
        e.s({ AccountController: () => g }, 868263);
        var t = e.i(724233);
        e.s({ BalanceUtil: () => u }, 600711);
        var r = e.i(850524),
          n = e.i(834245),
          o = e.i(17038),
          a = e.i(659863),
          i = e.i(936598);
        function s(e, t) {
          let r = e.toString(),
            n = r.startsWith("-");
          n && (r = r.slice(1));
          let [o, a] = [
            (r = r.padStart(t, "0")).slice(0, r.length - t),
            r.slice(r.length - t),
          ];
          return (
            (a = a.replace(/(0+)$/, "")),
            ""
              .concat(n ? "-" : "")
              .concat(o || "0")
              .concat(a ? ".".concat(a) : "")
          );
        }
        e.s({ formatUnits: () => s }, 399432);
        let l = {
          createBalance(e, t) {
            let r = {
              name: e.metadata.name || "",
              symbol: e.metadata.symbol || "",
              decimals: e.metadata.decimals || 0,
              value: e.metadata.value || 0,
              price: e.metadata.price || 0,
              iconUrl: e.metadata.iconUrl || "",
            };
            return {
              name: r.name,
              symbol: r.symbol,
              chainId: t,
              address:
                "native" === e.address
                  ? void 0
                  : this.convertAddressToCAIP10Address(e.address, t),
              value: r.value,
              price: r.price,
              quantity: {
                decimals: r.decimals.toString(),
                numeric: this.convertHexToBalance({
                  hex: e.balance,
                  decimals: r.decimals,
                }),
              },
              iconUrl: r.iconUrl,
            };
          },
          convertHexToBalance(e) {
            let { hex: t, decimals: r } = e;
            return s(BigInt(t), r);
          },
          convertAddressToCAIP10Address: (e, t) => "".concat(t, ":").concat(e),
          createCAIP2ChainId: (e, t) =>
            "".concat(t, ":").concat(parseInt(e, 16)),
          getChainIdHexFromCAIP2ChainId(e) {
            let t = e.split(":");
            if (t.length < 2 || !t[1]) return "0x0";
            let r = parseInt(t[1], 10);
            return isNaN(r) ? "0x0" : "0x".concat(r.toString(16));
          },
          isWalletGetAssetsResponse(e) {
            return (
              "object" == typeof e &&
              null !== e &&
              Object.values(e).every(
                (e) => Array.isArray(e) && e.every((e) => this.isValidAsset(e))
              )
            );
          },
          isValidAsset: (e) =>
            "object" == typeof e &&
            null !== e &&
            "string" == typeof e.address &&
            "string" == typeof e.balance &&
            ("ERC20" === e.type || "NATIVE" === e.type) &&
            "object" == typeof e.metadata &&
            null !== e.metadata &&
            "string" == typeof e.metadata.name &&
            "string" == typeof e.metadata.symbol &&
            "number" == typeof e.metadata.decimals &&
            "number" == typeof e.metadata.price &&
            "string" == typeof e.metadata.iconUrl,
        };
        var c = e.i(55931);
        let u = {
          async getMyTokensWithBalance(e) {
            let t = g.state.address,
              a = o.ChainController.state.activeCaipNetwork,
              s =
                i.ConnectorController.getConnectorId("eip155") ===
                r.ConstantsUtil.CONNECTOR_ID.AUTH;
            if (!t || !a) return [];
            let l = "".concat(a.caipNetworkId, ":").concat(t),
              u = c.StorageUtil.getBalanceCacheForCaipAddress(l);
            if (u) return u.balances;
            if (a.chainNamespace === r.ConstantsUtil.CHAIN.EVM && s) {
              let e = await this.getEIP155Balances(t, a);
              if (e) return this.filterLowQualityTokens(e);
            }
            let d = await n.BlockchainApiController.getBalance(
              t,
              a.caipNetworkId,
              e
            );
            return this.filterLowQualityTokens(d.balances);
          },
          async getEIP155Balances(e, t) {
            try {
              var r, n;
              let o = l.getChainIdHexFromCAIP2ChainId(t.caipNetworkId),
                i = await a.ConnectionController.getCapabilities(e);
              if (
                !(null == i ||
                null == (n = i[o]) ||
                null == (r = n.assetDiscovery)
                  ? void 0
                  : r.supported)
              )
                return null;
              let s = await a.ConnectionController.walletGetAssets({
                account: e,
                chainFilter: [o],
              });
              if (!l.isWalletGetAssetsResponse(s)) return null;
              let u = (s[o] || []).map((e) =>
                l.createBalance(e, t.caipNetworkId)
              );
              return (
                c.StorageUtil.updateBalanceCache({
                  caipAddress: "".concat(t.caipNetworkId, ":").concat(e),
                  balance: { balances: u },
                  timestamp: Date.now(),
                }),
                u
              );
            } catch (e) {
              return null;
            }
          },
          filterLowQualityTokens: (e) =>
            e.filter((e) => "0" !== e.quantity.decimals),
        };
        var d = e.i(940462),
          p = e.i(775078),
          C = e.i(317687),
          m = e.i(663296);
        let w = (0, t.proxy)({
            currentTab: 0,
            tokenBalance: [],
            smartAccountDeployed: !1,
            addressLabels: new Map(),
          }),
          g = (0, C.withErrorBoundary)({
            state: w,
            replaceState(e) {
              e && Object.assign(w, (0, t.ref)(e));
            },
            subscribe: (e) =>
              o.ChainController.subscribeChainProp("accountState", (t) => {
                if (t) return e(t);
              }),
            subscribeKey(e, t, r) {
              let n;
              return o.ChainController.subscribeChainProp(
                "accountState",
                (r) => {
                  if (r) {
                    let o = r[e];
                    n !== o && ((n = o), t(o));
                  }
                },
                r
              );
            },
            setStatus(e, t) {
              o.ChainController.setAccountProp("status", e, t);
            },
            getCaipAddress: (e) =>
              o.ChainController.getAccountProp("caipAddress", e),
            setCaipAddress(e, t) {
              let r = e ? p.CoreHelperUtil.getPlainAddress(e) : void 0;
              t === o.ChainController.state.activeChain &&
                (o.ChainController.state.activeCaipAddress = e),
                o.ChainController.setAccountProp("caipAddress", e, t),
                o.ChainController.setAccountProp("address", r, t);
            },
            setBalance(e, t, r) {
              o.ChainController.setAccountProp("balance", e, r),
                o.ChainController.setAccountProp("balanceSymbol", t, r);
            },
            setProfileName(e, t) {
              o.ChainController.setAccountProp("profileName", e, t);
            },
            setProfileImage(e, t) {
              o.ChainController.setAccountProp("profileImage", e, t);
            },
            setUser(e, t) {
              o.ChainController.setAccountProp("user", e, t);
            },
            setAddressExplorerUrl(e, t) {
              o.ChainController.setAccountProp("addressExplorerUrl", e, t);
            },
            setSmartAccountDeployed(e, t) {
              o.ChainController.setAccountProp("smartAccountDeployed", e, t);
            },
            setCurrentTab(e) {
              o.ChainController.setAccountProp(
                "currentTab",
                e,
                o.ChainController.state.activeChain
              );
            },
            setTokenBalance(e, t) {
              e && o.ChainController.setAccountProp("tokenBalance", e, t);
            },
            setShouldUpdateToAddress(e, t) {
              o.ChainController.setAccountProp("shouldUpdateToAddress", e, t);
            },
            addAddressLabel(e, t, r) {
              let n =
                o.ChainController.getAccountProp("addressLabels", r) ||
                new Map();
              n.set(e, t),
                o.ChainController.setAccountProp("addressLabels", n, r);
            },
            removeAddressLabel(e, t) {
              let r =
                o.ChainController.getAccountProp("addressLabels", t) ||
                new Map();
              r.delete(e),
                o.ChainController.setAccountProp("addressLabels", r, t);
            },
            setConnectedWalletInfo(e, t) {
              o.ChainController.setAccountProp("connectedWalletInfo", e, t, !1);
            },
            setPreferredAccountType(e, t) {
              o.ChainController.setAccountProp("preferredAccountType", e, t);
            },
            setSocialProvider(e, t) {
              e && o.ChainController.setAccountProp("socialProvider", e, t);
            },
            setSocialWindow(e, r) {
              o.ChainController.setAccountProp(
                "socialWindow",
                e ? (0, t.ref)(e) : void 0,
                r
              );
            },
            setFarcasterUrl(e, t) {
              o.ChainController.setAccountProp("farcasterUrl", e, t);
            },
            async fetchTokenBalance(e) {
              var t, r;
              w.balanceLoading = !0;
              let n =
                  null == (t = o.ChainController.state.activeCaipNetwork)
                    ? void 0
                    : t.caipNetworkId,
                a =
                  null == (r = o.ChainController.state.activeCaipNetwork)
                    ? void 0
                    : r.chainNamespace,
                i = o.ChainController.state.activeCaipAddress,
                s = i ? p.CoreHelperUtil.getPlainAddress(i) : void 0;
              if (
                w.lastRetry &&
                !p.CoreHelperUtil.isAllowedRetry(
                  w.lastRetry,
                  30 * d.ConstantsUtil.ONE_SEC_MS
                )
              )
                return (w.balanceLoading = !1), [];
              try {
                if (s && n && a) {
                  let e = await u.getMyTokensWithBalance();
                  return (
                    g.setTokenBalance(e, a),
                    (w.lastRetry = void 0),
                    (w.balanceLoading = !1),
                    e
                  );
                }
              } catch (t) {
                (w.lastRetry = Date.now()),
                  null == e || e(t),
                  m.SnackController.showError("Token Balance Unavailable");
              } finally {
                w.balanceLoading = !1;
              }
              return [];
            },
            resetAccount(e) {
              o.ChainController.resetAccount(e);
            },
          });
      },
      [399432, 600711],
    ],
    384409: (e) => {
      "use strict";
      e.s({ MathUtil: () => t });
      let t = {
        interpolate(e, t, r) {
          if (2 !== e.length || 2 !== t.length)
            throw Error(
              "inputRange and outputRange must be an array of length 2"
            );
          let n = e[0] || 0,
            o = e[1] || 0,
            a = t[0] || 0,
            i = t[1] || 0;
          return r < n ? a : r > o ? i : ((i - a) / (o - n)) * (r - n) + a;
        },
      };
    },
    294891: (e) => {
      var { m: t, e: r } = e;
      e.e,
        (t.exports = (function () {
          "use strict";
          var e = "millisecond",
            t = "second",
            r = "minute",
            n = "hour",
            o = "week",
            a = "month",
            i = "quarter",
            s = "year",
            l = "date",
            c = "Invalid Date",
            u =
              /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
            d =
              /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            p = function (e, t, r) {
              var n = String(e);
              return !n || n.length >= t
                ? e
                : "" + Array(t + 1 - n.length).join(r) + e;
            },
            C = "en",
            m = {};
          m[C] = {
            name: "en",
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            ordinal: function (e) {
              var t = ["th", "st", "nd", "rd"],
                r = e % 100;
              return "[" + e + (t[(r - 20) % 10] || t[r] || t[0]) + "]";
            },
          };
          var w = "$isDayjsObject",
            g = function (e) {
              return e instanceof E || !(!e || !e[w]);
            },
            h = function e(t, r, n) {
              var o;
              if (!t) return C;
              if ("string" == typeof t) {
                var a = t.toLowerCase();
                m[a] && (o = a), r && ((m[a] = r), (o = a));
                var i = t.split("-");
                if (!o && i.length > 1) return e(i[0]);
              } else {
                var s = t.name;
                (m[s] = t), (o = s);
              }
              return !n && o && (C = o), o || (!n && C);
            },
            f = function (e, t) {
              if (g(e)) return e.clone();
              var r = "object" == typeof t ? t : {};
              return (r.date = e), (r.args = arguments), new E(r);
            },
            v = {
              s: p,
              z: function (e) {
                var t = -e.utcOffset(),
                  r = Math.abs(t);
                return (
                  (t <= 0 ? "+" : "-") +
                  p(Math.floor(r / 60), 2, "0") +
                  ":" +
                  p(r % 60, 2, "0")
                );
              },
              m: function e(t, r) {
                if (t.date() < r.date()) return -e(r, t);
                var n = 12 * (r.year() - t.year()) + (r.month() - t.month()),
                  o = t.clone().add(n, a),
                  i = r - o < 0,
                  s = t.clone().add(n + (i ? -1 : 1), a);
                return +(-(n + (r - o) / (i ? o - s : s - o)) || 0);
              },
              a: function (e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
              },
              p: function (c) {
                return (
                  {
                    M: a,
                    y: s,
                    w: o,
                    d: "day",
                    D: l,
                    h: n,
                    m: r,
                    s: t,
                    ms: e,
                    Q: i,
                  }[c] ||
                  String(c || "")
                    .toLowerCase()
                    .replace(/s$/, "")
                );
              },
              u: function (e) {
                return void 0 === e;
              },
            };
          (v.l = h),
            (v.i = g),
            (v.w = function (e, t) {
              return f(e, {
                locale: t.$L,
                utc: t.$u,
                x: t.$x,
                $offset: t.$offset,
              });
            });
          var E = (function () {
              function p(e) {
                (this.$L = h(e.locale, null, !0)),
                  this.parse(e),
                  (this.$x = this.$x || e.x || {}),
                  (this[w] = !0);
              }
              var C = p.prototype;
              return (
                (C.parse = function (e) {
                  (this.$d = (function (e) {
                    var t = e.date,
                      r = e.utc;
                    if (null === t) return new Date(NaN);
                    if (v.u(t)) return new Date();
                    if (t instanceof Date) return new Date(t);
                    if ("string" == typeof t && !/Z$/i.test(t)) {
                      var n = t.match(u);
                      if (n) {
                        var o = n[2] - 1 || 0,
                          a = (n[7] || "0").substring(0, 3);
                        return r
                          ? new Date(
                              Date.UTC(
                                n[1],
                                o,
                                n[3] || 1,
                                n[4] || 0,
                                n[5] || 0,
                                n[6] || 0,
                                a
                              )
                            )
                          : new Date(
                              n[1],
                              o,
                              n[3] || 1,
                              n[4] || 0,
                              n[5] || 0,
                              n[6] || 0,
                              a
                            );
                      }
                    }
                    return new Date(t);
                  })(e)),
                    this.init();
                }),
                (C.init = function () {
                  var e = this.$d;
                  (this.$y = e.getFullYear()),
                    (this.$M = e.getMonth()),
                    (this.$D = e.getDate()),
                    (this.$W = e.getDay()),
                    (this.$H = e.getHours()),
                    (this.$m = e.getMinutes()),
                    (this.$s = e.getSeconds()),
                    (this.$ms = e.getMilliseconds());
                }),
                (C.$utils = function () {
                  return v;
                }),
                (C.isValid = function () {
                  return this.$d.toString() !== c;
                }),
                (C.isSame = function (e, t) {
                  var r = f(e);
                  return this.startOf(t) <= r && r <= this.endOf(t);
                }),
                (C.isAfter = function (e, t) {
                  return f(e) < this.startOf(t);
                }),
                (C.isBefore = function (e, t) {
                  return this.endOf(t) < f(e);
                }),
                (C.$g = function (e, t, r) {
                  return v.u(e) ? this[t] : this.set(r, e);
                }),
                (C.unix = function () {
                  return Math.floor(this.valueOf() / 1e3);
                }),
                (C.valueOf = function () {
                  return this.$d.getTime();
                }),
                (C.startOf = function (e, i) {
                  var c = this,
                    u = !!v.u(i) || i,
                    d = v.p(e),
                    p = function (e, t) {
                      var r = v.w(
                        c.$u ? Date.UTC(c.$y, t, e) : new Date(c.$y, t, e),
                        c
                      );
                      return u ? r : r.endOf("day");
                    },
                    C = function (e, t) {
                      return v.w(
                        c
                          .toDate()
                          [e].apply(
                            c.toDate("s"),
                            (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)
                          ),
                        c
                      );
                    },
                    m = this.$W,
                    w = this.$M,
                    g = this.$D,
                    h = "set" + (this.$u ? "UTC" : "");
                  switch (d) {
                    case s:
                      return u ? p(1, 0) : p(31, 11);
                    case a:
                      return u ? p(1, w) : p(0, w + 1);
                    case o:
                      var f = this.$locale().weekStart || 0,
                        E = (m < f ? m + 7 : m) - f;
                      return p(u ? g - E : g + (6 - E), w);
                    case "day":
                    case l:
                      return C(h + "Hours", 0);
                    case n:
                      return C(h + "Minutes", 1);
                    case r:
                      return C(h + "Seconds", 2);
                    case t:
                      return C(h + "Milliseconds", 3);
                    default:
                      return this.clone();
                  }
                }),
                (C.endOf = function (e) {
                  return this.startOf(e, !1);
                }),
                (C.$set = function (o, i) {
                  var c,
                    u = v.p(o),
                    d = "set" + (this.$u ? "UTC" : ""),
                    p = (((c = {}).day = d + "Date"),
                    (c[l] = d + "Date"),
                    (c[a] = d + "Month"),
                    (c[s] = d + "FullYear"),
                    (c[n] = d + "Hours"),
                    (c[r] = d + "Minutes"),
                    (c[t] = d + "Seconds"),
                    (c[e] = d + "Milliseconds"),
                    c)[u],
                    C = "day" === u ? this.$D + (i - this.$W) : i;
                  if (u === a || u === s) {
                    var m = this.clone().set(l, 1);
                    m.$d[p](C),
                      m.init(),
                      (this.$d = m.set(
                        l,
                        Math.min(this.$D, m.daysInMonth())
                      ).$d);
                  } else p && this.$d[p](C);
                  return this.init(), this;
                }),
                (C.set = function (e, t) {
                  return this.clone().$set(e, t);
                }),
                (C.get = function (e) {
                  return this[v.p(e)]();
                }),
                (C.add = function (e, i) {
                  var l,
                    c = this;
                  e = Number(e);
                  var u = v.p(i),
                    d = function (t) {
                      var r = f(c);
                      return v.w(r.date(r.date() + Math.round(t * e)), c);
                    };
                  if (u === a) return this.set(a, this.$M + e);
                  if (u === s) return this.set(s, this.$y + e);
                  if ("day" === u) return d(1);
                  if (u === o) return d(7);
                  var p =
                      (((l = {})[r] = 6e4), (l[n] = 36e5), (l[t] = 1e3), l)[
                        u
                      ] || 1,
                    C = this.$d.getTime() + e * p;
                  return v.w(C, this);
                }),
                (C.subtract = function (e, t) {
                  return this.add(-1 * e, t);
                }),
                (C.format = function (e) {
                  var t = this,
                    r = this.$locale();
                  if (!this.isValid()) return r.invalidDate || c;
                  var n = e || "YYYY-MM-DDTHH:mm:ssZ",
                    o = v.z(this),
                    a = this.$H,
                    i = this.$m,
                    s = this.$M,
                    l = r.weekdays,
                    u = r.months,
                    p = r.meridiem,
                    C = function (e, r, o, a) {
                      return (e && (e[r] || e(t, n))) || o[r].slice(0, a);
                    },
                    m = function (e) {
                      return v.s(a % 12 || 12, e, "0");
                    },
                    w =
                      p ||
                      function (e, t, r) {
                        var n = e < 12 ? "AM" : "PM";
                        return r ? n.toLowerCase() : n;
                      };
                  return n.replace(d, function (e, n) {
                    return (
                      n ||
                      (function (e) {
                        switch (e) {
                          case "YY":
                            return String(t.$y).slice(-2);
                          case "YYYY":
                            return v.s(t.$y, 4, "0");
                          case "M":
                            return s + 1;
                          case "MM":
                            return v.s(s + 1, 2, "0");
                          case "MMM":
                            return C(r.monthsShort, s, u, 3);
                          case "MMMM":
                            return C(u, s);
                          case "D":
                            return t.$D;
                          case "DD":
                            return v.s(t.$D, 2, "0");
                          case "d":
                            return String(t.$W);
                          case "dd":
                            return C(r.weekdaysMin, t.$W, l, 2);
                          case "ddd":
                            return C(r.weekdaysShort, t.$W, l, 3);
                          case "dddd":
                            return l[t.$W];
                          case "H":
                            return String(a);
                          case "HH":
                            return v.s(a, 2, "0");
                          case "h":
                            return m(1);
                          case "hh":
                            return m(2);
                          case "a":
                            return w(a, i, !0);
                          case "A":
                            return w(a, i, !1);
                          case "m":
                            return String(i);
                          case "mm":
                            return v.s(i, 2, "0");
                          case "s":
                            return String(t.$s);
                          case "ss":
                            return v.s(t.$s, 2, "0");
                          case "SSS":
                            return v.s(t.$ms, 3, "0");
                          case "Z":
                            return o;
                        }
                        return null;
                      })(e) ||
                      o.replace(":", "")
                    );
                  });
                }),
                (C.utcOffset = function () {
                  return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
                }),
                (C.diff = function (e, l, c) {
                  var u,
                    d = this,
                    p = v.p(l),
                    C = f(e),
                    m = (C.utcOffset() - this.utcOffset()) * 6e4,
                    w = this - C,
                    g = function () {
                      return v.m(d, C);
                    };
                  switch (p) {
                    case s:
                      u = g() / 12;
                      break;
                    case a:
                      u = g();
                      break;
                    case i:
                      u = g() / 3;
                      break;
                    case o:
                      u = (w - m) / 6048e5;
                      break;
                    case "day":
                      u = (w - m) / 864e5;
                      break;
                    case n:
                      u = w / 36e5;
                      break;
                    case r:
                      u = w / 6e4;
                      break;
                    case t:
                      u = w / 1e3;
                      break;
                    default:
                      u = w;
                  }
                  return c ? u : v.a(u);
                }),
                (C.daysInMonth = function () {
                  return this.endOf(a).$D;
                }),
                (C.$locale = function () {
                  return m[this.$L];
                }),
                (C.locale = function (e, t) {
                  if (!e) return this.$L;
                  var r = this.clone(),
                    n = h(e, t, !0);
                  return n && (r.$L = n), r;
                }),
                (C.clone = function () {
                  return v.w(this.$d, this);
                }),
                (C.toDate = function () {
                  return new Date(this.valueOf());
                }),
                (C.toJSON = function () {
                  return this.isValid() ? this.toISOString() : null;
                }),
                (C.toISOString = function () {
                  return this.$d.toISOString();
                }),
                (C.toString = function () {
                  return this.$d.toUTCString();
                }),
                p
              );
            })(),
            A = E.prototype;
          return (
            (f.prototype = A),
            [
              ["$ms", e],
              ["$s", t],
              ["$m", r],
              ["$H", n],
              ["$W", "day"],
              ["$M", a],
              ["$y", s],
              ["$D", l],
            ].forEach(function (e) {
              A[e[1]] = function (t) {
                return this.$g(t, e[0], e[1]);
              };
            }),
            (f.extend = function (e, t) {
              return e.$i || (e(t, E, f), (e.$i = !0)), f;
            }),
            (f.locale = h),
            (f.isDayjs = g),
            (f.unix = function (e) {
              return f(1e3 * e);
            }),
            (f.en = m[C]),
            (f.Ls = m),
            (f.p = {}),
            f
          );
        })());
    },
    260227: (e) => {
      var { m: t, e: r } = e;
      e.e,
        (t.exports = {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          ordinal: function (e) {
            var t = ["th", "st", "nd", "rd"],
              r = e % 100;
            return "[" + e + (t[(r - 20) % 10] || t[r] || t[0]) + "]";
          },
        });
    },
    652504: (e) => {
      var { m: t, e: r } = e;
      e.e,
        (t.exports = function (e, t, r) {
          e = e || {};
          var n = t.prototype,
            o = {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            };
          function a(e, t, r, o) {
            return n.fromToBase(e, t, r, o);
          }
          (r.en.relativeTime = o),
            (n.fromToBase = function (t, n, a, i, s) {
              for (
                var l,
                  c,
                  u,
                  d = a.$locale().relativeTime || o,
                  p = e.thresholds || [
                    { l: "s", r: 44, d: "second" },
                    { l: "m", r: 89 },
                    { l: "mm", r: 44, d: "minute" },
                    { l: "h", r: 89 },
                    { l: "hh", r: 21, d: "hour" },
                    { l: "d", r: 35 },
                    { l: "dd", r: 25, d: "day" },
                    { l: "M", r: 45 },
                    { l: "MM", r: 10, d: "month" },
                    { l: "y", r: 17 },
                    { l: "yy", d: "year" },
                  ],
                  C = p.length,
                  m = 0;
                m < C;
                m += 1
              ) {
                var w = p[m];
                w.d && (l = i ? r(t).diff(a, w.d, !0) : a.diff(t, w.d, !0));
                var g = (e.rounding || Math.round)(Math.abs(l));
                if (((u = l > 0), g <= w.r || !w.r)) {
                  g <= 1 && m > 0 && (w = p[m - 1]);
                  var h = d[w.l];
                  s && (g = s("" + g)),
                    (c =
                      "string" == typeof h
                        ? h.replace("%d", g)
                        : h(g, n, w.l, u));
                  break;
                }
              }
              if (n) return c;
              var f = u ? d.future : d.past;
              return "function" == typeof f ? f(c) : f.replace("%s", c);
            }),
            (n.to = function (e, t) {
              return a(e, t, this, !0);
            }),
            (n.from = function (e, t) {
              return a(e, t, this);
            });
          var i = function (e) {
            return e.$u ? r.utc() : r();
          };
          (n.toNow = function (e) {
            return this.to(i(this), e);
          }),
            (n.fromNow = function (e) {
              return this.from(i(this), e);
            });
        });
    },
    207584: (e) => {
      var { m: t, e: r } = e;
      e.e,
        (t.exports = function (e, t, r) {
          r.updateLocale = function (e, t) {
            var n = r.Ls[e];
            if (n)
              return (
                (t ? Object.keys(t) : []).forEach(function (e) {
                  n[e] = t[e];
                }),
                n
              );
          };
        });
    },
    487245: [
      (e) => {
        "use strict";
        let t, r, n;
        e.s({}, 487245),
          e.i(384409),
          e.s(
            {
              colorStyles: () => v,
              elementStyles: () => f,
              initializeTheming: () => C,
              resetStyles: () => h,
              setColorTheme: () => m,
              setThemeVariables: () => w,
            },
            83728
          );
        var o = e.i(431006);
        e.i(561791);
        var a = e.i(505625),
          i = e.i(586196);
        function s() {
          let e = (0, o._)([
            "\n      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');\n      @keyframes w3m-shake {\n        0% {\n          transform: scale(1) rotate(0deg);\n        }\n        20% {\n          transform: scale(1) rotate(-1deg);\n        }\n        40% {\n          transform: scale(1) rotate(1.5deg);\n        }\n        60% {\n          transform: scale(1) rotate(-1.5deg);\n        }\n        80% {\n          transform: scale(1) rotate(1deg);\n        }\n        100% {\n          transform: scale(1) rotate(0deg);\n        }\n      }\n      @keyframes w3m-iframe-fade-out {\n        0% {\n          opacity: 1;\n        }\n        100% {\n          opacity: 0;\n        }\n      }\n      @keyframes w3m-iframe-zoom-in {\n        0% {\n          transform: translateY(50px);\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(0px);\n          opacity: 1;\n        }\n      }\n      @keyframes w3m-iframe-zoom-in-mobile {\n        0% {\n          transform: scale(0.95);\n          opacity: 0;\n        }\n        100% {\n          transform: scale(1);\n          opacity: 1;\n        }\n      }\n      :root {\n        --w3m-modal-width: 360px;\n        --w3m-color-mix-strength: ",
            ";\n        --w3m-font-family: ",
            ";\n        --w3m-font-size-master: ",
            ";\n        --w3m-border-radius-master: ",
            ";\n        --w3m-z-index: ",
            ";\n\n        --wui-font-family: var(--w3m-font-family);\n\n        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);\n        --wui-font-size-micro: var(--w3m-font-size-master);\n        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);\n        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);\n        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);\n        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);\n        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);\n        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);\n        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);\n        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);\n\n        --wui-border-radius-5xs: var(--w3m-border-radius-master);\n        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);\n        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);\n        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);\n        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);\n        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);\n        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);\n        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);\n        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);\n\n        --wui-font-weight-light: 400;\n        --wui-font-weight-regular: 500;\n        --wui-font-weight-medium: 600;\n        --wui-font-weight-bold: 700;\n\n        --wui-letter-spacing-2xl: -1.6px;\n        --wui-letter-spacing-medium-title: -0.96px;\n        --wui-letter-spacing-title-6: -0.88px;\n        --wui-letter-spacing-large: -0.8px;\n        --wui-letter-spacing-medium: -0.72px;\n        --wui-letter-spacing-paragraph: -0.64px;\n        --wui-letter-spacing-small: -0.56px;\n        --wui-letter-spacing-tiny: -0.48px;\n        --wui-letter-spacing-micro: -0.2px;\n        --wui-letter-spacing-mini: -0.16px;\n\n        --wui-spacing-0: 0px;\n        --wui-spacing-4xs: 2px;\n        --wui-spacing-3xs: 4px;\n        --wui-spacing-xxs: 6px;\n        --wui-spacing-2xs: 7px;\n        --wui-spacing-xs: 8px;\n        --wui-spacing-1xs: 10px;\n        --wui-spacing-s: 12px;\n        --wui-spacing-m: 14px;\n        --wui-spacing-l: 16px;\n        --wui-spacing-2l: 18px;\n        --wui-spacing-xl: 20px;\n        --wui-spacing-xxl: 24px;\n        --wui-spacing-2xl: 32px;\n        --wui-spacing-3xl: 40px;\n        --wui-spacing-4xl: 90px;\n        --wui-spacing-5xl: 95px;\n\n        --wui-icon-box-size-xxs: 14px;\n        --wui-icon-box-size-xs: 20px;\n        --wui-icon-box-size-sm: 24px;\n        --wui-icon-box-size-md: 32px;\n        --wui-icon-box-size-mdl: 36px;\n        --wui-icon-box-size-lg: 40px;\n        --wui-icon-box-size-2lg: 48px;\n        --wui-icon-box-size-xl: 64px;\n\n        --wui-icon-size-inherit: inherit;\n        --wui-icon-size-xxs: 10px;\n        --wui-icon-size-xs: 12px;\n        --wui-icon-size-sm: 14px;\n        --wui-icon-size-md: 16px;\n        --wui-icon-size-mdl: 18px;\n        --wui-icon-size-lg: 20px;\n        --wui-icon-size-xl: 24px;\n        --wui-icon-size-xxl: 28px;\n\n        --wui-wallet-image-size-inherit: inherit;\n        --wui-wallet-image-size-sm: 40px;\n        --wui-wallet-image-size-md: 56px;\n        --wui-wallet-image-size-lg: 80px;\n\n        --wui-visual-size-size-inherit: inherit;\n        --wui-visual-size-sm: 40px;\n        --wui-visual-size-md: 55px;\n        --wui-visual-size-lg: 80px;\n\n        --wui-box-size-md: 100px;\n        --wui-box-size-lg: 120px;\n\n        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);\n        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);\n\n        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);\n        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);\n        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);\n\n        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);\n\n        --wui-duration-lg: 200ms;\n        --wui-duration-md: 125ms;\n        --wui-duration-sm: 75ms;\n\n        --wui-path-network-sm: path(\n          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'\n        );\n\n        --wui-path-network-md: path(\n          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'\n        );\n\n        --wui-path-network-lg: path(\n          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'\n        );\n\n        --wui-width-network-sm: 36px;\n        --wui-width-network-md: 48px;\n        --wui-width-network-lg: 86px;\n\n        --wui-height-network-sm: 40px;\n        --wui-height-network-md: 54px;\n        --wui-height-network-lg: 96px;\n\n        --wui-icon-size-network-xs: 12px;\n        --wui-icon-size-network-sm: 16px;\n        --wui-icon-size-network-md: 24px;\n        --wui-icon-size-network-lg: 42px;\n\n        --wui-color-inherit: inherit;\n\n        --wui-color-inverse-100: #fff;\n        --wui-color-inverse-000: #000;\n\n        --wui-cover: rgba(20, 20, 20, 0.8);\n\n        --wui-color-modal-bg: var(--wui-color-modal-bg-base);\n\n        --wui-color-accent-100: var(--wui-color-accent-base-100);\n        --wui-color-accent-090: var(--wui-color-accent-base-090);\n        --wui-color-accent-080: var(--wui-color-accent-base-080);\n\n        --wui-color-success-100: var(--wui-color-success-base-100);\n        --wui-color-success-125: var(--wui-color-success-base-125);\n\n        --wui-color-warning-100: var(--wui-color-warning-base-100);\n\n        --wui-color-error-100: var(--wui-color-error-base-100);\n        --wui-color-error-125: var(--wui-color-error-base-125);\n\n        --wui-color-blue-100: var(--wui-color-blue-base-100);\n        --wui-color-blue-90: var(--wui-color-blue-base-90);\n\n        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);\n        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);\n        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);\n        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);\n\n        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);\n\n        --wui-avatar-border: var(--wui-avatar-border-base);\n\n        --wui-thumbnail-border: var(--wui-thumbnail-border-base);\n\n        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);\n\n        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);\n      }\n\n      @supports (background: color-mix(in srgb, white 50%, black)) {\n        :root {\n          --wui-color-modal-bg: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-modal-bg-base)\n          );\n\n          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);\n\n          --wui-color-accent-100: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 100%,\n            transparent\n          );\n          --wui-color-accent-090: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 90%,\n            transparent\n          );\n          --wui-color-accent-080: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 80%,\n            transparent\n          );\n          --wui-color-accent-glass-090: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 90%,\n            transparent\n          );\n          --wui-color-accent-glass-080: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 80%,\n            transparent\n          );\n          --wui-color-accent-glass-020: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 20%,\n            transparent\n          );\n          --wui-color-accent-glass-015: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 15%,\n            transparent\n          );\n          --wui-color-accent-glass-010: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 10%,\n            transparent\n          );\n          --wui-color-accent-glass-005: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 5%,\n            transparent\n          );\n          --wui-color-accent-002: color-mix(\n            in srgb,\n            var(--wui-color-accent-base-100) 2%,\n            transparent\n          );\n\n          --wui-color-fg-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-100)\n          );\n          --wui-color-fg-125: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-125)\n          );\n          --wui-color-fg-150: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-150)\n          );\n          --wui-color-fg-175: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-175)\n          );\n          --wui-color-fg-200: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-200)\n          );\n          --wui-color-fg-225: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-225)\n          );\n          --wui-color-fg-250: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-250)\n          );\n          --wui-color-fg-275: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-275)\n          );\n          --wui-color-fg-300: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-300)\n          );\n          --wui-color-fg-325: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-325)\n          );\n          --wui-color-fg-350: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-fg-350)\n          );\n\n          --wui-color-bg-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-100)\n          );\n          --wui-color-bg-125: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-125)\n          );\n          --wui-color-bg-150: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-150)\n          );\n          --wui-color-bg-175: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-175)\n          );\n          --wui-color-bg-200: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-200)\n          );\n          --wui-color-bg-225: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-225)\n          );\n          --wui-color-bg-250: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-250)\n          );\n          --wui-color-bg-275: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-275)\n          );\n          --wui-color-bg-300: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-300)\n          );\n          --wui-color-bg-325: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-325)\n          );\n          --wui-color-bg-350: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-bg-350)\n          );\n\n          --wui-color-success-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-success-base-100)\n          );\n          --wui-color-success-125: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-success-base-125)\n          );\n\n          --wui-color-warning-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-warning-base-100)\n          );\n\n          --wui-color-error-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-error-base-100)\n          );\n          --wui-color-blue-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-blue-base-100)\n          );\n          --wui-color-blue-90: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-blue-base-90)\n          );\n          --wui-color-error-125: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-color-error-base-125)\n          );\n\n          --wui-icon-box-bg-error-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-icon-box-bg-error-base-100)\n          );\n          --wui-icon-box-bg-accent-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-icon-box-bg-blue-base-100)\n          );\n          --wui-icon-box-bg-success-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-icon-box-bg-success-base-100)\n          );\n          --wui-icon-box-bg-inverse-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-icon-box-bg-inverse-base-100)\n          );\n\n          --wui-all-wallets-bg-100: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-all-wallets-bg-100)\n          );\n\n          --wui-avatar-border: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-avatar-border-base)\n          );\n\n          --wui-thumbnail-border: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-thumbnail-border-base)\n          );\n\n          --wui-wallet-button-bg: color-mix(\n            in srgb,\n            var(--w3m-color-mix) var(--w3m-color-mix-strength),\n            var(--wui-wallet-button-bg-base)\n          );\n        }\n      }\n    ",
          ]);
          return (
            (s = function () {
              return e;
            }),
            e
          );
        }
        function l() {
          let e = (0, o._)([
            "\n      :root {\n        --w3m-color-mix: ",
            ";\n        --w3m-accent: ",
            ";\n        --w3m-default: #fff;\n\n        --wui-color-modal-bg-base: ",
            ";\n        --wui-color-accent-base-100: var(--w3m-accent);\n\n        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);\n        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);\n        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);\n        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);\n\n        --wui-color-fg-100: #e4e7e7;\n        --wui-color-fg-125: #d0d5d5;\n        --wui-color-fg-150: #a8b1b1;\n        --wui-color-fg-175: #a8b0b0;\n        --wui-color-fg-200: #949e9e;\n        --wui-color-fg-225: #868f8f;\n        --wui-color-fg-250: #788080;\n        --wui-color-fg-275: #788181;\n        --wui-color-fg-300: #6e7777;\n        --wui-color-fg-325: #9a9a9a;\n        --wui-color-fg-350: #363636;\n\n        --wui-color-bg-100: #141414;\n        --wui-color-bg-125: #191a1a;\n        --wui-color-bg-150: #1e1f1f;\n        --wui-color-bg-175: #222525;\n        --wui-color-bg-200: #272a2a;\n        --wui-color-bg-225: #2c3030;\n        --wui-color-bg-250: #313535;\n        --wui-color-bg-275: #363b3b;\n        --wui-color-bg-300: #3b4040;\n        --wui-color-bg-325: #252525;\n        --wui-color-bg-350: #ffffff;\n\n        --wui-color-success-base-100: #26d962;\n        --wui-color-success-base-125: #30a46b;\n\n        --wui-color-warning-base-100: #f3a13f;\n\n        --wui-color-error-base-100: #f25a67;\n        --wui-color-error-base-125: #df4a34;\n\n        --wui-color-blue-base-100: rgba(102, 125, 255, 1);\n        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);\n\n        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);\n        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);\n        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);\n        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);\n        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);\n        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);\n        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);\n        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);\n        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);\n        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);\n\n        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);\n\n        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);\n\n        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);\n        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);\n        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);\n        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);\n        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);\n        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);\n        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);\n        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);\n        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);\n        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);\n\n        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);\n\n        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);\n        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);\n        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);\n        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);\n        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);\n        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);\n        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);\n        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);\n        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);\n        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);\n        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);\n\n        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);\n\n        --wui-icon-box-bg-error-base-100: #3c2426;\n        --wui-icon-box-bg-blue-base-100: #20303f;\n        --wui-icon-box-bg-success-base-100: #1f3a28;\n        --wui-icon-box-bg-inverse-base-100: #243240;\n\n        --wui-all-wallets-bg-100: #222b35;\n\n        --wui-avatar-border-base: #252525;\n\n        --wui-thumbnail-border-base: #252525;\n\n        --wui-wallet-button-bg-base: var(--wui-color-bg-125);\n\n        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);\n      }\n    ",
          ]);
          return (
            (l = function () {
              return e;
            }),
            e
          );
        }
        function c() {
          let e = (0, o._)([
            "\n      :root {\n        --w3m-color-mix: ",
            ";\n        --w3m-accent: ",
            ";\n        --w3m-default: #000;\n\n        --wui-color-modal-bg-base: ",
            ";\n        --wui-color-accent-base-100: var(--w3m-accent);\n\n        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);\n        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);\n        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);\n\n        --wui-color-fg-100: #141414;\n        --wui-color-fg-125: #2d3131;\n        --wui-color-fg-150: #474d4d;\n        --wui-color-fg-175: #636d6d;\n        --wui-color-fg-200: #798686;\n        --wui-color-fg-225: #828f8f;\n        --wui-color-fg-250: #8b9797;\n        --wui-color-fg-275: #95a0a0;\n        --wui-color-fg-300: #9ea9a9;\n        --wui-color-fg-325: #9a9a9a;\n        --wui-color-fg-350: #d0d0d0;\n\n        --wui-color-bg-100: #ffffff;\n        --wui-color-bg-125: #f5fafa;\n        --wui-color-bg-150: #f3f8f8;\n        --wui-color-bg-175: #eef4f4;\n        --wui-color-bg-200: #eaf1f1;\n        --wui-color-bg-225: #e5eded;\n        --wui-color-bg-250: #e1e9e9;\n        --wui-color-bg-275: #dce7e7;\n        --wui-color-bg-300: #d8e3e3;\n        --wui-color-bg-325: #f3f3f3;\n        --wui-color-bg-350: #202020;\n\n        --wui-color-success-base-100: #26b562;\n        --wui-color-success-base-125: #30a46b;\n\n        --wui-color-warning-base-100: #f3a13f;\n\n        --wui-color-error-base-100: #f05142;\n        --wui-color-error-base-125: #df4a34;\n\n        --wui-color-blue-base-100: rgba(102, 125, 255, 1);\n        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);\n\n        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);\n        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);\n        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);\n        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);\n        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);\n        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);\n        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);\n        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);\n        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);\n        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);\n\n        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);\n\n        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);\n\n        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);\n        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);\n        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);\n        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);\n        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);\n        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);\n        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);\n        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);\n        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);\n        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);\n\n        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);\n\n        --wui-icon-box-bg-error-base-100: #f4dfdd;\n        --wui-icon-box-bg-blue-base-100: #d9ecfb;\n        --wui-icon-box-bg-success-base-100: #daf0e4;\n        --wui-icon-box-bg-inverse-base-100: #dcecfc;\n\n        --wui-all-wallets-bg-100: #e8f1fa;\n\n        --wui-avatar-border-base: #f3f4f4;\n\n        --wui-thumbnail-border-base: #eaefef;\n\n        --wui-wallet-button-bg-base: var(--wui-color-bg-125);\n\n        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);\n        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);\n        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);\n        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);\n        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);\n        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);\n        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);\n        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);\n        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);\n        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);\n        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);\n\n        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);\n\n        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);\n      }\n    ",
          ]);
          return (
            (c = function () {
              return e;
            }),
            e
          );
        }
        function u() {
          let e = (0, o._)([
            "\n  *,\n  *::after,\n  *::before,\n  :host {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-style: normal;\n    text-rendering: optimizeSpeed;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-tap-highlight-color: transparent;\n    font-family: var(--wui-font-family);\n    backface-visibility: hidden;\n  }\n",
          ]);
          return (
            (u = function () {
              return e;
            }),
            e
          );
        }
        function d() {
          let e = (0, o._)([
            "\n  button,\n  a {\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    transition:\n      color var(--wui-duration-lg) var(--wui-ease-out-power-1),\n      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),\n      border var(--wui-duration-lg) var(--wui-ease-out-power-1),\n      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),\n      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);\n    will-change: background-color, color, border, box-shadow, border-radius;\n    outline: none;\n    border: none;\n    column-gap: var(--wui-spacing-3xs);\n    background-color: transparent;\n    text-decoration: none;\n  }\n\n  wui-flex {\n    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);\n    will-change: border-radius;\n  }\n\n  button:disabled > wui-wallet-image,\n  button:disabled > wui-all-wallets-image,\n  button:disabled > wui-network-image,\n  button:disabled > wui-image,\n  button:disabled > wui-transaction-visual,\n  button:disabled > wui-logo {\n    filter: grayscale(1);\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    button:hover:enabled {\n      background-color: var(--wui-color-gray-glass-005);\n    }\n\n    button:active:enabled {\n      background-color: var(--wui-color-gray-glass-010);\n    }\n  }\n\n  button:disabled > wui-icon-box {\n    opacity: 0.5;\n  }\n\n  input {\n    border: none;\n    outline: none;\n    appearance: none;\n  }\n",
          ]);
          return (
            (d = function () {
              return e;
            }),
            e
          );
        }
        function p() {
          let e = (0, o._)([
            "\n  .wui-color-inherit {\n    color: var(--wui-color-inherit);\n  }\n\n  .wui-color-accent-100 {\n    color: var(--wui-color-accent-100);\n  }\n\n  .wui-color-error-100 {\n    color: var(--wui-color-error-100);\n  }\n\n  .wui-color-blue-100 {\n    color: var(--wui-color-blue-100);\n  }\n\n  .wui-color-blue-90 {\n    color: var(--wui-color-blue-90);\n  }\n\n  .wui-color-error-125 {\n    color: var(--wui-color-error-125);\n  }\n\n  .wui-color-success-100 {\n    color: var(--wui-color-success-100);\n  }\n\n  .wui-color-success-125 {\n    color: var(--wui-color-success-125);\n  }\n\n  .wui-color-inverse-100 {\n    color: var(--wui-color-inverse-100);\n  }\n\n  .wui-color-inverse-000 {\n    color: var(--wui-color-inverse-000);\n  }\n\n  .wui-color-fg-100 {\n    color: var(--wui-color-fg-100);\n  }\n\n  .wui-color-fg-200 {\n    color: var(--wui-color-fg-200);\n  }\n\n  .wui-color-fg-300 {\n    color: var(--wui-color-fg-300);\n  }\n\n  .wui-color-fg-325 {\n    color: var(--wui-color-fg-325);\n  }\n\n  .wui-color-fg-350 {\n    color: var(--wui-color-fg-350);\n  }\n\n  .wui-bg-color-inherit {\n    background-color: var(--wui-color-inherit);\n  }\n\n  .wui-bg-color-blue-100 {\n    background-color: var(--wui-color-accent-100);\n  }\n\n  .wui-bg-color-error-100 {\n    background-color: var(--wui-color-error-100);\n  }\n\n  .wui-bg-color-error-125 {\n    background-color: var(--wui-color-error-125);\n  }\n\n  .wui-bg-color-success-100 {\n    background-color: var(--wui-color-success-100);\n  }\n\n  .wui-bg-color-success-125 {\n    background-color: var(--wui-color-success-100);\n  }\n\n  .wui-bg-color-inverse-100 {\n    background-color: var(--wui-color-inverse-100);\n  }\n\n  .wui-bg-color-inverse-000 {\n    background-color: var(--wui-color-inverse-000);\n  }\n\n  .wui-bg-color-fg-100 {\n    background-color: var(--wui-color-fg-100);\n  }\n\n  .wui-bg-color-fg-200 {\n    background-color: var(--wui-color-fg-200);\n  }\n\n  .wui-bg-color-fg-300 {\n    background-color: var(--wui-color-fg-300);\n  }\n\n  .wui-color-fg-325 {\n    background-color: var(--wui-color-fg-325);\n  }\n\n  .wui-color-fg-350 {\n    background-color: var(--wui-color-fg-350);\n  }\n",
          ]);
          return (
            (p = function () {
              return e;
            }),
            e
          );
        }
        function C(e, o) {
          (t = document.createElement("style")),
            (r = document.createElement("style")),
            (n = document.createElement("style")),
            (t.textContent = g(e).core.cssText),
            (r.textContent = g(e).dark.cssText),
            (n.textContent = g(e).light.cssText),
            document.head.appendChild(t),
            document.head.appendChild(r),
            document.head.appendChild(n),
            m(o);
        }
        function m(e) {
          r &&
            n &&
            ("light" === e
              ? (r.removeAttribute("media"), (n.media = "enabled"))
              : (n.removeAttribute("media"), (r.media = "enabled")));
        }
        function w(e) {
          t &&
            r &&
            n &&
            ((t.textContent = g(e).core.cssText),
            (r.textContent = g(e).dark.cssText),
            (n.textContent = g(e).light.cssText));
        }
        function g(e) {
          return {
            core: (0, a.css)(
              s(),
              (0, a.unsafeCSS)(
                (null == e ? void 0 : e["--w3m-color-mix-strength"])
                  ? "".concat(e["--w3m-color-mix-strength"], "%")
                  : "0%"
              ),
              (0, a.unsafeCSS)(
                (null == e ? void 0 : e["--w3m-font-family"]) ||
                  "Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;"
              ),
              (0, a.unsafeCSS)(
                (null == e ? void 0 : e["--w3m-font-size-master"]) || "10px"
              ),
              (0, a.unsafeCSS)(
                (null == e ? void 0 : e["--w3m-border-radius-master"]) || "4px"
              ),
              (0, a.unsafeCSS)((null == e ? void 0 : e["--w3m-z-index"]) || 999)
            ),
            light: (0, a.css)(
              l(),
              (0, a.unsafeCSS)(
                (null == e ? void 0 : e["--w3m-color-mix"]) || "#fff"
              ),
              (0, a.unsafeCSS)(
                (0, i.getW3mThemeVariables)(e, "dark")["--w3m-accent"]
              ),
              (0, a.unsafeCSS)(
                (0, i.getW3mThemeVariables)(e, "dark")["--w3m-background"]
              )
            ),
            dark: (0, a.css)(
              c(),
              (0, a.unsafeCSS)(
                (null == e ? void 0 : e["--w3m-color-mix"]) || "#000"
              ),
              (0, a.unsafeCSS)(
                (0, i.getW3mThemeVariables)(e, "light")["--w3m-accent"]
              ),
              (0, a.unsafeCSS)(
                (0, i.getW3mThemeVariables)(e, "light")["--w3m-background"]
              )
            ),
          };
        }
        let h = (0, a.css)(u()),
          f = (0, a.css)(d()),
          v = (0, a.css)(p());
        e.s({ UiHelperUtil: () => E }, 39451);
        let E = {
          getSpacingStyles: (e, t) =>
            Array.isArray(e)
              ? e[t]
                ? "var(--wui-spacing-".concat(e[t], ")")
                : void 0
              : "string" == typeof e
              ? "var(--wui-spacing-".concat(e, ")")
              : void 0,
          getFormattedDate: (e) =>
            new Intl.DateTimeFormat("en-US", {
              month: "short",
              day: "numeric",
            }).format(e),
          getHostName(e) {
            try {
              return new URL(e).hostname;
            } catch (e) {
              return "";
            }
          },
          getTruncateString(e) {
            let { string: t, charsStart: r, charsEnd: n, truncate: o } = e;
            return t.length <= r + n
              ? t
              : "end" === o
              ? "".concat(t.substring(0, r), "...")
              : "start" === o
              ? "...".concat(t.substring(t.length - n))
              : ""
                  .concat(t.substring(0, Math.floor(r)), "...")
                  .concat(t.substring(t.length - Math.floor(n)));
          },
          generateAvatarColors(e) {
            let t = e
                .toLowerCase()
                .replace(/^0x/iu, "")
                .replace(/[^a-f0-9]/gu, "")
                .substring(0, 6)
                .padEnd(6, "0"),
              r = this.hexToRgb(t),
              n = getComputedStyle(document.documentElement).getPropertyValue(
                "--w3m-border-radius-master"
              ),
              o = 100 - 3 * Number(null == n ? void 0 : n.replace("px", "")),
              a = "".concat(o, "% ").concat(o, "% at 65% 40%"),
              i = [];
            for (let e = 0; e < 5; e += 1) {
              let t = this.tintColor(r, 0.15 * e);
              i.push(
                "rgb(".concat(t[0], ", ").concat(t[1], ", ").concat(t[2], ")")
              );
            }
            return "\n    --local-color-1: "
              .concat(i[0], ";\n    --local-color-2: ")
              .concat(i[1], ";\n    --local-color-3: ")
              .concat(i[2], ";\n    --local-color-4: ")
              .concat(i[3], ";\n    --local-color-5: ")
              .concat(i[4], ";\n    --local-radial-circle: ")
              .concat(a, "\n   ");
          },
          hexToRgb(e) {
            let t = parseInt(e, 16);
            return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
          },
          tintColor(e, t) {
            let [r, n, o] = e;
            return [
              Math.round(r + (255 - r) * t),
              Math.round(n + (255 - n) * t),
              Math.round(o + (255 - o) * t),
            ];
          },
          isNumber: (e) => /^[0-9]+$/u.test(e),
          getColorTheme(e) {
            if (e) return e;
            if (
              "undefined" != typeof window &&
              window.matchMedia &&
              "function" == typeof window.matchMedia
            ) {
              var t;
              return (
                null == (t = window.matchMedia("(prefers-color-scheme: dark)"))
                  ? void 0
                  : t.matches
              )
                ? "dark"
                : "light";
            }
            return "dark";
          },
          splitBalance(e) {
            let t = e.split(".");
            return 2 === t.length ? [t[0], t[1]] : ["0", "00"];
          },
          roundNumber: (e, t, r) =>
            e.toString().length >= t ? Number(e).toFixed(r) : e,
          formatNumberToLocalString(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2;
            return void 0 === e
              ? "0.00"
              : "number" == typeof e
              ? e.toLocaleString("en-US", {
                  maximumFractionDigits: t,
                  minimumFractionDigits: t,
                })
              : parseFloat(e).toLocaleString("en-US", {
                  maximumFractionDigits: t,
                  minimumFractionDigits: t,
                });
          },
        };
        e.s({ TransactionUtil: () => k }, 181858),
          e.s({ DateUtil: () => I }, 779652);
        var A = e.i(294891),
          b = e.i(260227),
          _ = e.i(652504),
          S = e.i(207584);
        A.default.extend(_.default), A.default.extend(S.default);
        let N = {
            ...b.default,
            name: "en-web3-modal",
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "%d sec",
              m: "1 min",
              mm: "%d min",
              h: "1 hr",
              hh: "%d hrs",
              d: "1 d",
              dd: "%d d",
              M: "1 mo",
              MM: "%d mo",
              y: "1 yr",
              yy: "%d yr",
            },
          },
          y = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
        A.default.locale("en-web3-modal", N);
        let I = {
            getMonthNameByIndex: (e) => y[e],
            getYear() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : new Date().toISOString();
              return (0, A.default)(e).year();
            },
            getRelativeDateFromNow: (e) =>
              (0, A.default)(e).locale("en-web3-modal").fromNow(!0),
            formatDate(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "DD MMM";
              return (0, A.default)(e).format(t);
            },
          },
          T = ["receive", "deposit", "borrow", "claim"],
          R = ["withdraw", "repay", "burn"],
          k = {
            getTransactionGroupTitle(e, t) {
              let r = I.getYear(),
                n = I.getMonthNameByIndex(t);
              return e === r ? n : "".concat(n, " ").concat(e);
            },
            getTransactionImages(e) {
              let [t, r] = e,
                n = !!t && (null == e ? void 0 : e.every((e) => !!e.nft_info)),
                o = (null == e ? void 0 : e.length) > 1;
              return (null == e ? void 0 : e.length) !== 2 || n
                ? o
                  ? e.map((e) => this.getTransactionImage(e))
                  : [this.getTransactionImage(t)]
                : [this.getTransactionImage(r), this.getTransactionImage(t)];
            },
            getTransactionImage: (e) => ({
              type: k.getTransactionTransferTokenType(e),
              url: k.getTransactionImageURL(e),
            }),
            getTransactionImageURL(e) {
              var t, r, n, o, a;
              let i,
                s = !!(null == e ? void 0 : e.nft_info),
                l = !!(null == e ? void 0 : e.fungible_info);
              return (
                e && s
                  ? (i =
                      null == e ||
                      null == (n = e.nft_info) ||
                      null == (r = n.content) ||
                      null == (t = r.preview)
                        ? void 0
                        : t.url)
                  : e &&
                    l &&
                    (i =
                      null == e ||
                      null == (a = e.fungible_info) ||
                      null == (o = a.icon)
                        ? void 0
                        : o.url),
                i
              );
            },
            getTransactionTransferTokenType: (e) =>
              (null == e ? void 0 : e.fungible_info)
                ? "FUNGIBLE"
                : (null == e ? void 0 : e.nft_info)
                ? "NFT"
                : void 0,
            getTransactionDescriptions(e) {
              var t, r, n;
              let o =
                  null == e || null == (t = e.metadata)
                    ? void 0
                    : t.operationType,
                a = null == e ? void 0 : e.transfers,
                i =
                  (null == e || null == (r = e.transfers) ? void 0 : r.length) >
                  0,
                s =
                  (null == e || null == (n = e.transfers) ? void 0 : n.length) >
                  1,
                l =
                  i &&
                  (null == a
                    ? void 0
                    : a.every((e) => !!(null == e ? void 0 : e.fungible_info))),
                [c, u] = a,
                d = this.getTransferDescription(c),
                p = this.getTransferDescription(u);
              if (!i)
                return ("send" === o || "receive" === o) && l
                  ? [
                      (d = E.getTruncateString({
                        string: null == e ? void 0 : e.metadata.sentFrom,
                        charsStart: 4,
                        charsEnd: 6,
                        truncate: "middle",
                      })),
                      E.getTruncateString({
                        string: null == e ? void 0 : e.metadata.sentTo,
                        charsStart: 4,
                        charsEnd: 6,
                        truncate: "middle",
                      }),
                    ]
                  : [e.metadata.status];
              if (s)
                return a.map((e) => this.getTransferDescription(e)).reverse();
              let C = "";
              return (
                T.includes(o) ? (C = "+") : R.includes(o) && (C = "-"),
                [(d = C.concat(d))]
              );
            },
            getTransferDescription(e) {
              let t = "";
              if (!e) return t;
              if (null == e ? void 0 : e.nft_info) {
                var r;
                t =
                  (null == e || null == (r = e.nft_info) ? void 0 : r.name) ||
                  "-";
              } else
                (null == e ? void 0 : e.fungible_info) &&
                  (t = this.getFungibleTransferDescription(e) || "-");
              return t;
            },
            getFungibleTransferDescription(e) {
              var t;
              return e
                ? [
                    this.getQuantityFixedValue(
                      null == e ? void 0 : e.quantity.numeric
                    ),
                    null == e || null == (t = e.fungible_info)
                      ? void 0
                      : t.symbol,
                  ]
                    .join(" ")
                    .trim()
                : null;
            },
            getQuantityFixedValue: (e) => (e ? parseFloat(e).toFixed(3) : null),
          };
        function O(e) {
          return function (t) {
            return "function" == typeof t
              ? (customElements.get(e) || customElements.define(e, t), t)
              : (function (e, t) {
                  let { kind: r, elements: n } = t;
                  return {
                    kind: r,
                    elements: n,
                    finisher(t) {
                      customElements.get(e) || customElements.define(e, t);
                    },
                  };
                })(e, t);
          };
        }
        e.s({ customElement: () => O }, 928951);
      },
      [83728, 39451, 779652, 181858, 928951],
    ],
  },
]);

//# sourceMappingURL=eaadafab9fbd7759.js.map
