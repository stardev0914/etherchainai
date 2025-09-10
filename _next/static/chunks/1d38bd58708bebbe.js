(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    435187: [
      (e) => {
        "use strict";
        let t, n;
        e.s({}, 435187), e.s({}, 198049);
        var r = e.i(816367);
        class i {
          static getInstance(e) {
            let {
              projectId: t,
              chainId: n,
              enableLogger: o,
              onTimeout: a,
              abortController: s,
              getActiveCaipNetwork: l,
            } = e;
            return (
              i.instance ||
                (i.instance = new r.W3mFrameProvider({
                  projectId: t,
                  chainId: n,
                  enableLogger: o,
                  onTimeout: a,
                  abortController: s,
                  getActiveCaipNetwork: l,
                })),
              i.instance
            );
          }
          constructor() {}
        }
        var o = e.i(105009),
          a = e.i(850524),
          s = e.i(337733),
          l = e.i(308080),
          c = e.i(868263),
          d = e.i(830607),
          C = e.i(592787),
          h = e.i(984892),
          p = e.i(834245),
          u = e.i(17038),
          v = e.i(659863),
          m = e.i(260276),
          g = e.i(936598),
          N = e.i(940462),
          w = e.i(775078),
          A = e.i(354),
          E = e.i(962949),
          f = e.i(935148),
          U = e.i(590537),
          T = e.i(610411),
          I = e.i(907421),
          y = e.i(981824),
          O = e.i(983222),
          k = e.i(952504),
          _ = e.i(663296),
          P = e.i(55931),
          S = e.i(289579),
          b = e.i(864510),
          R = e.i(366293);
        e.i(597304);
        var L = e.i(589851);
        e.i(487245);
        var D = e.i(83728),
          W = e.i(781883),
          M = e.i(392816),
          F = e.i(162966);
        e.i(959658);
        var H = e.i(500006);
        let x = {
          createLogger(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "error",
              n = (0, H.getDefaultLoggerOptions)({ level: t }),
              { logger: r } = (0, H.generatePlatformLogger)({ opts: n });
            return (
              (r.error = function () {
                for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                  n[r] = arguments[r];
                for (let t of n) if (t instanceof Error) return void e(t, ...n);
                e(void 0, ...n);
              }),
              r
            );
          },
        };
        var B = e.i(674571),
          j = e.i(932710),
          q = e.i(321620),
          V = e.i(960803);
        e.s({ AdapterBlueprint: () => ei }, 640815);
        var K = e.i(808439);
        e.s({ EthersHelpersUtil: () => z }, 76598);
        let z = {
            hexStringToNumber: (e) =>
              parseInt(e.startsWith("0x") ? e.slice(2) : e, 16),
            numberToHexString: (e) => "0x".concat(e.toString(16)),
            async getUserInfo(e) {
              let [t, n] = await Promise.all([
                z.getAddresses(e),
                z.getChainId(e),
              ]);
              return { chainId: n, addresses: t };
            },
            getChainId: async (e) =>
              Number(await e.request({ method: "eth_chainId" })),
            async getAddress(e) {
              let [t] = await e.request({ method: "eth_accounts" });
              return t;
            },
            getAddresses: async (e) =>
              await e.request({ method: "eth_accounts" }),
            async addEthereumChain(e, t) {
              var n, r;
              let i =
                (null == (n = t.rpcUrls.chainDefault) ? void 0 : n.http) || [];
              await e.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: z.numberToHexString(t.id),
                    rpcUrls: [...i],
                    chainName: t.name,
                    nativeCurrency: {
                      name: t.nativeCurrency.name,
                      decimals: t.nativeCurrency.decimals,
                      symbol: t.nativeCurrency.symbol,
                    },
                    blockExplorerUrls: [
                      null == (r = t.blockExplorers) ? void 0 : r.default.url,
                    ],
                    iconUrls: [K.PresetsUtil.NetworkImageIds[t.id]],
                  },
                ],
              });
            },
          },
          G = { ACCOUNT_INDEXES: { PAYMENT: 0, ORDINAL: 1 } };
        function Y(e) {
          return {
            formatters: void 0,
            fees: void 0,
            serializers: void 0,
            ...e,
          };
        }
        e.s({ WcHelpersUtil: () => Q }, 386192),
          e.s({}, 954248),
          e.s({ defineChain: () => Y }, 968347);
        let X = Y({
            id: "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
            name: "Solana",
            network: "solana-mainnet",
            nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 },
            rpcUrls: {
              default: { http: ["https://rpc.walletconnect.org/v1"] },
            },
            blockExplorers: {
              default: { name: "Solscan", url: "https://solscan.io" },
            },
            testnet: !1,
            chainNamespace: "solana",
            caipNetworkId: "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
            deprecatedCaipNetworkId: "solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ",
          }),
          J = Y({
            id: "EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
            name: "Solana Devnet",
            network: "solana-devnet",
            nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 },
            rpcUrls: {
              default: { http: ["https://rpc.walletconnect.org/v1"] },
            },
            blockExplorers: {
              default: { name: "Solscan", url: "https://solscan.io" },
            },
            testnet: !0,
            chainNamespace: "solana",
            caipNetworkId: "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
            deprecatedCaipNetworkId: "solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K",
          });
        Y({
          id: "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
          name: "Solana Testnet",
          network: "solana-testnet",
          nativeCurrency: { name: "Solana", symbol: "SOL", decimals: 9 },
          rpcUrls: { default: { http: ["https://rpc.walletconnect.org/v1"] } },
          blockExplorers: {
            default: { name: "Solscan", url: "https://solscan.io" },
          },
          testnet: !0,
          chainNamespace: "solana",
          caipNetworkId: "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
        }),
          Y({
            id: "000000000019d6689c085ae165831e93",
            caipNetworkId: "bip122:000000000019d6689c085ae165831e93",
            chainNamespace: "bip122",
            name: "Bitcoin",
            nativeCurrency: { name: "Bitcoin", symbol: "BTC", decimals: 8 },
            rpcUrls: {
              default: { http: ["https://rpc.walletconnect.org/v1"] },
            },
          }),
          Y({
            id: "000000000933ea01ad0ee984209779ba",
            caipNetworkId: "bip122:000000000933ea01ad0ee984209779ba",
            chainNamespace: "bip122",
            name: "Bitcoin Testnet",
            nativeCurrency: { name: "Bitcoin", symbol: "BTC", decimals: 8 },
            rpcUrls: {
              default: { http: ["https://rpc.walletconnect.org/v1"] },
            },
            testnet: !0,
          });
        let Z = {
            solana: [
              "solana_signMessage",
              "solana_signTransaction",
              "solana_requestAccounts",
              "solana_getAccounts",
              "solana_signAllTransactions",
              "solana_signAndSendTransaction",
            ],
            eip155: [
              "eth_accounts",
              "eth_requestAccounts",
              "eth_sendRawTransaction",
              "eth_sign",
              "eth_signTransaction",
              "eth_signTypedData",
              "eth_signTypedData_v3",
              "eth_signTypedData_v4",
              "eth_sendTransaction",
              "personal_sign",
              "wallet_switchEthereumChain",
              "wallet_addEthereumChain",
              "wallet_getPermissions",
              "wallet_requestPermissions",
              "wallet_registerOnboarding",
              "wallet_watchAsset",
              "wallet_scanQRCode",
              "wallet_getCallsStatus",
              "wallet_showCallsStatus",
              "wallet_sendCalls",
              "wallet_getCapabilities",
              "wallet_grantPermissions",
              "wallet_revokePermissions",
              "wallet_getAssets",
            ],
            bip122: [
              "sendTransfer",
              "signMessage",
              "signPsbt",
              "getAccountAddresses",
            ],
          },
          Q = {
            getMethodsByChainNamespace: (e) => Z[e] || [],
            createDefaultNamespace(e) {
              return {
                methods: this.getMethodsByChainNamespace(e),
                events: ["accountsChanged", "chainChanged"],
                chains: [],
                rpcMap: {},
              };
            },
            applyNamespaceOverrides(e, t) {
              if (!t) return { ...e };
              let n = { ...e },
                r = new Set();
              if (
                (t.methods && Object.keys(t.methods).forEach((e) => r.add(e)),
                t.chains && Object.keys(t.chains).forEach((e) => r.add(e)),
                t.events && Object.keys(t.events).forEach((e) => r.add(e)),
                t.rpcMap &&
                  Object.keys(t.rpcMap).forEach((e) => {
                    let [t] = e.split(":");
                    t && r.add(t);
                  }),
                r.forEach((e) => {
                  n[e] || (n[e] = this.createDefaultNamespace(e));
                }),
                t.methods &&
                  Object.entries(t.methods).forEach((e) => {
                    let [t, r] = e;
                    n[t] && (n[t].methods = r);
                  }),
                t.chains &&
                  Object.entries(t.chains).forEach((e) => {
                    let [t, r] = e;
                    n[t] && (n[t].chains = r);
                  }),
                t.events &&
                  Object.entries(t.events).forEach((e) => {
                    let [t, r] = e;
                    n[t] && (n[t].events = r);
                  }),
                t.rpcMap)
              ) {
                let e = new Set();
                Object.entries(t.rpcMap).forEach((t) => {
                  let [r, i] = t,
                    [o, a] = r.split(":");
                  o &&
                    a &&
                    n[o] &&
                    (n[o].rpcMap || (n[o].rpcMap = {}),
                    e.has(o) || ((n[o].rpcMap = {}), e.add(o)),
                    (n[o].rpcMap[a] = i));
                });
              }
              return n;
            },
            createNamespaces(e, t) {
              let n = e.reduce((e, t) => {
                let { id: n, chainNamespace: r, rpcUrls: i } = t,
                  o = i.default.http[0];
                e[r] || (e[r] = this.createDefaultNamespace(r));
                let a = "".concat(r, ":").concat(n),
                  s = e[r];
                switch ((s.chains.push(a), a)) {
                  case X.caipNetworkId:
                    s.chains.push(X.deprecatedCaipNetworkId);
                    break;
                  case J.caipNetworkId:
                    s.chains.push(J.deprecatedCaipNetworkId);
                }
                return (
                  (null == s ? void 0 : s.rpcMap) && o && (s.rpcMap[n] = o), e
                );
              }, {});
              return this.applyNamespaceOverrides(n, t);
            },
            resolveReownName: async (e) => {
              var t;
              let n = await A.EnsController.resolveName(e);
              return (
                (null ==
                (t = (Object.values(null == n ? void 0 : n.addresses) || [])[0])
                  ? void 0
                  : t.address) || !1
              );
            },
            getChainsFromNamespaces() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return Object.values(e).flatMap((e) =>
                Array.from(
                  new Set([
                    ...(e.chains || []),
                    ...e.accounts.map((e) => {
                      let [t, n] = e.split(":");
                      return "".concat(t, ":").concat(n);
                    }),
                  ])
                )
              );
            },
            isSessionEventData: (e) =>
              "object" == typeof e &&
              null !== e &&
              "id" in e &&
              "topic" in e &&
              "params" in e &&
              "object" == typeof e.params &&
              null !== e.params &&
              "chainId" in e.params &&
              "event" in e.params &&
              "object" == typeof e.params.event &&
              null !== e.params.event,
            isOriginAllowed(e, t, n) {
              for (let r of [...t, ...n])
                if (r.includes("*")) {
                  let t = r.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
                  if (
                    RegExp(
                      "^".concat(t.replace(/\\\*/gu, ".*"), "$"),
                      "u"
                    ).test(e)
                  )
                    return !0;
                } else
                  try {
                    if (new URL(r).origin === e) return !0;
                  } catch (t) {
                    if (r === e) return !0;
                  }
              return !1;
            },
            listenWcProvider(e) {
              let {
                universalProvider: t,
                namespace: n,
                onConnect: r,
                onDisconnect: i,
                onAccountsChanged: o,
                onChainChanged: a,
                onDisplayUri: s,
              } = e;
              r &&
                t.on("connect", () => {
                  r(Q.getWalletConnectAccounts(t, n));
                }),
                i &&
                  t.on("disconnect", () => {
                    i();
                  }),
                o &&
                  t.on("session_event", (e) => {
                    if (Q.isSessionEventData(e)) {
                      let { name: t, data: r } = e.params.event;
                      "accountsChanged" === t &&
                        Array.isArray(r) &&
                        o(
                          r
                            .filter((e) => w.CoreHelperUtil.isCaipAddress(e))
                            .map((e) => l.ParseUtil.parseCaipAddress(e))
                            .filter((e) => e.chainNamespace === n)
                        );
                    }
                  }),
                a &&
                  t.on("chainChanged", (e) => {
                    a(e);
                  }),
                s &&
                  t.on("display_uri", (e) => {
                    s(e);
                  });
            },
            getWalletConnectAccounts(e, t) {
              var n, r, i, o;
              let a = new Set(),
                s =
                  null == e ||
                  null == (o = e.session) ||
                  null == (i = o.namespaces) ||
                  null == (r = i[t]) ||
                  null == (n = r.accounts)
                    ? void 0
                    : n
                        .map((e) => l.ParseUtil.parseCaipAddress(e))
                        .filter((e) => {
                          let { address: t } = e;
                          return (
                            !a.has(t.toLowerCase()) &&
                            (a.add(t.toLowerCase()), !0)
                          );
                        });
              return s && s.length > 0 ? s : [];
            },
          };
        class $ {
          async syncConnections(e) {
            switch (this.namespace) {
              case a.ConstantsUtil.CHAIN.EVM:
                await this.syncEVMConnections(e);
                break;
              case a.ConstantsUtil.CHAIN.SOLANA:
                await this.syncSolanaConnections(e);
                break;
              case a.ConstantsUtil.CHAIN.BITCOIN:
                await this.syncBitcoinConnections(e);
                break;
              default:
                throw Error(
                  "Unsupported chain namespace: ".concat(this.namespace)
                );
            }
          }
          async syncEVMConnections(e) {
            let {
              connectors: t,
              caipNetworks: n,
              universalProvider: r,
              getConnectionStatusInfo: i,
              onConnection: o,
              onListenProvider: s,
            } = e;
            await Promise.all(
              t
                .filter((e) => {
                  let { hasDisconnected: t, hasConnected: n } = i(e.id);
                  return !t && n;
                })
                .map(async (e) => {
                  if (e.id === a.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT) {
                    let t = Q.getWalletConnectAccounts(r, this.namespace),
                      i = n.find((e) => {
                        var n, r;
                        return (
                          e.chainNamespace === this.namespace &&
                          e.id.toString() ===
                            (null == (r = t[0]) || null == (n = r.chainId)
                              ? void 0
                              : n.toString())
                        );
                      });
                    t.length > 0 &&
                      o({
                        connectorId: e.id,
                        accounts: t.map((e) => ({ address: e.address })),
                        caipNetwork: i,
                      });
                  } else {
                    let { accounts: t, chainId: r } =
                      await R.ConnectorUtil.fetchProviderData(e);
                    if (t.length > 0 && r) {
                      let i = n.find(
                        (e) =>
                          e.chainNamespace === this.namespace &&
                          e.id.toString() === r.toString()
                      );
                      o({
                        connectorId: e.id,
                        accounts: t.map((e) => ({ address: e })),
                        caipNetwork: i,
                      }),
                        e.provider &&
                          e.id !== a.ConstantsUtil.CONNECTOR_ID.AUTH &&
                          e.id !==
                            a.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT &&
                          s(e.id, e.provider);
                    }
                  }
                })
            );
          }
          async syncSolanaConnections(e) {
            let {
              connectors: t,
              caipNetwork: n,
              universalProvider: r,
              getConnectionStatusInfo: i,
              onConnection: o,
              onListenProvider: s,
            } = e;
            await Promise.all(
              t
                .filter((e) => {
                  let { hasDisconnected: t, hasConnected: n } = i(e.id);
                  return !t && n;
                })
                .map(async (e) => {
                  if (e.id === a.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT) {
                    let t = Q.getWalletConnectAccounts(r, this.namespace);
                    t.length > 0 &&
                      o({
                        connectorId: e.id,
                        accounts: t.map((e) => ({ address: e.address })),
                        caipNetwork: n,
                      });
                  } else {
                    let t = await e.connect({
                      chainId: null == n ? void 0 : n.id,
                    });
                    t &&
                      (o({
                        connectorId: e.id,
                        accounts: [{ address: t }],
                        caipNetwork: n,
                      }),
                      s(e.id, e.provider));
                  }
                })
            );
          }
          async syncBitcoinConnections(e) {
            let {
              connectors: t,
              caipNetwork: n,
              universalProvider: r,
              getConnectionStatusInfo: i,
              onConnection: o,
              onListenProvider: s,
            } = e;
            await Promise.all(
              t
                .filter((e) => {
                  let { hasDisconnected: t, hasConnected: n } = i(e.id);
                  return !t && n;
                })
                .map(async (e) => {
                  if (e.id === a.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT) {
                    let t = Q.getWalletConnectAccounts(r, this.namespace);
                    t.length > 0 &&
                      o({
                        connectorId: e.id,
                        accounts: t.map((e) => ({ address: e.address })),
                        caipNetwork: n,
                      });
                    return;
                  }
                  let t = await e.connect(),
                    i = await e.getAccountAddresses(),
                    l =
                      null == i
                        ? void 0
                        : i.map((e) =>
                            w.CoreHelperUtil.createAccount(
                              a.ConstantsUtil.CHAIN.BITCOIN,
                              e.address,
                              e.purpose || "payment",
                              e.publicKey,
                              e.path
                            )
                          );
                  if (l && l.length > 1) {
                    var c, d, C, h, p, u, v, m, g, N, A, E;
                    l = [
                      {
                        namespace: a.ConstantsUtil.CHAIN.BITCOIN,
                        publicKey:
                          null !=
                          (v =
                            null == (c = l[G.ACCOUNT_INDEXES.PAYMENT])
                              ? void 0
                              : c.publicKey)
                            ? v
                            : "",
                        path:
                          null !=
                          (m =
                            null == (d = l[G.ACCOUNT_INDEXES.PAYMENT])
                              ? void 0
                              : d.path)
                            ? m
                            : "",
                        address:
                          null !=
                          (g =
                            null == (C = l[G.ACCOUNT_INDEXES.PAYMENT])
                              ? void 0
                              : C.address)
                            ? g
                            : "",
                        type: "payment",
                      },
                      {
                        namespace: a.ConstantsUtil.CHAIN.BITCOIN,
                        publicKey:
                          null !=
                          (N =
                            null == (h = l[G.ACCOUNT_INDEXES.ORDINAL])
                              ? void 0
                              : h.publicKey)
                            ? N
                            : "",
                        path:
                          null !=
                          (A =
                            null == (p = l[G.ACCOUNT_INDEXES.ORDINAL])
                              ? void 0
                              : p.path)
                            ? A
                            : "",
                        address:
                          null !=
                          (E =
                            null == (u = l[G.ACCOUNT_INDEXES.ORDINAL])
                              ? void 0
                              : u.address)
                            ? E
                            : "",
                        type: "ordinal",
                      },
                    ];
                  }
                  if (
                    !(
                      e.chains.find(
                        (e) => e.id === (null == n ? void 0 : n.id)
                      ) || e.chains[0]
                    )
                  )
                    throw Error(
                      "The connector does not support any of the requested chains"
                    );
                  t &&
                    (s(e.id, e.provider),
                    o({
                      connectorId: e.id,
                      accounts: l.map((e) => ({
                        address: e.address,
                        type: e.type,
                      })),
                      caipNetwork: n,
                    }));
                })
            );
          }
          getConnection(e) {
            let {
              address: t,
              connectorId: n,
              connections: r,
              connectors: i,
            } = e;
            if (n) {
              let e = r.find((e) =>
                F.HelpersUtil.isLowerCaseMatch(e.connectorId, n)
              );
              if (!e) return null;
              let o = i.find((t) =>
                  F.HelpersUtil.isLowerCaseMatch(t.id, e.connectorId)
                ),
                a = t
                  ? e.accounts.find((e) =>
                      F.HelpersUtil.isLowerCaseMatch(e.address, t)
                    )
                  : e.accounts[0];
              return { ...e, account: a, connector: o };
            }
            let o = r.find(
              (e) =>
                e.accounts.length > 0 &&
                i.some((t) =>
                  F.HelpersUtil.isLowerCaseMatch(t.id, e.connectorId)
                )
            );
            if (o) {
              let [e] = o.accounts,
                t = i.find((e) =>
                  F.HelpersUtil.isLowerCaseMatch(e.id, o.connectorId)
                );
              return { ...o, account: e, connector: t };
            }
            return null;
          }
          constructor(e) {
            this.namespace = e.namespace;
          }
        }
        e.s({ WalletConnectConnector: () => et }, 488064),
          e.s({}, 938794),
          e.s({ WcConstantsUtil: () => ee }, 446322);
        let ee = {
          ERROR_CODE_UNRECOGNIZED_CHAIN_ID: 4902,
          ERROR_CODE_DEFAULT: 5e3,
          ERROR_INVALID_CHAIN_ID: 32603,
          DEFAULT_ALLOWED_ANCESTORS: [
            "http://localhost:*",
            "https://localhost:*",
            "http://127.0.0.1:*",
            "https://127.0.0.1:*",
            "https://*.pages.dev",
            "https://*.vercel.app",
            "https://*.ngrok-free.app",
            "https://secure-mobile.walletconnect.com",
            "https://secure-mobile.walletconnect.org",
          ],
        };
        class et {
          get chains() {
            return this.getCaipNetworks();
          }
          async connectWalletConnect() {
            if (!(await this.authenticate())) {
              let e = this.getCaipNetworks(),
                t = T.OptionsController.state.universalProviderConfigOverride,
                n = Q.createNamespaces(e, t);
              await this.provider.connect({ optionalNamespaces: n });
            }
            return {
              clientId: await this.provider.client.core.crypto.getClientId(),
              session: this.provider.session,
            };
          }
          async disconnect() {
            await this.provider.disconnect();
          }
          async authenticate() {
            let e = this.chains.map((e) => e.caipNetworkId);
            return O.SIWXUtil.universalProviderAuthenticate({
              universalProvider: this.provider,
              chains: e,
              methods: en,
            });
          }
          constructor({ provider: e, namespace: t }) {
            (this.id = a.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT),
              (this.name =
                K.PresetsUtil.ConnectorNamesMap[
                  a.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT
                ]),
              (this.type = "WALLET_CONNECT"),
              (this.imageId =
                K.PresetsUtil.ConnectorImageIds[
                  a.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT
                ]),
              (this.getCaipNetworks = u.ChainController.getCaipNetworks.bind(
                u.ChainController
              )),
              (this.caipNetworks = this.getCaipNetworks()),
              (this.provider = e),
              (this.chain = t);
          }
        }
        let en = [
            "eth_accounts",
            "eth_requestAccounts",
            "eth_sendRawTransaction",
            "eth_sign",
            "eth_signTransaction",
            "eth_signTypedData",
            "eth_signTypedData_v3",
            "eth_signTypedData_v4",
            "eth_sendTransaction",
            "personal_sign",
            "wallet_switchEthereumChain",
            "wallet_addEthereumChain",
            "wallet_getPermissions",
            "wallet_requestPermissions",
            "wallet_registerOnboarding",
            "wallet_watchAsset",
            "wallet_scanQRCode",
            "wallet_getCallsStatus",
            "wallet_sendCalls",
            "wallet_getCapabilities",
            "wallet_grantPermissions",
            "wallet_revokePermissions",
            "wallet_getAssets",
          ],
          er = [
            a.ConstantsUtil.CONNECTOR_ID.AUTH,
            a.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT,
          ];
        class ei {
          construct(e) {
            (this.projectId = e.projectId),
              (this.namespace = e.namespace),
              (this.adapterType = e.adapterType);
          }
          get connectors() {
            return this.availableConnectors;
          }
          get connections() {
            return this.availableConnections;
          }
          get networks() {
            return this.getCaipNetworks(this.namespace);
          }
          onAuthConnected(e) {
            let { accounts: t, chainId: n } = e,
              r = this.getCaipNetworks()
                .filter((e) => e.chainNamespace === this.namespace)
                .find(
                  (e) => e.id.toString() === (null == n ? void 0 : n.toString())
                );
            t &&
              r &&
              this.addConnection({
                connectorId: a.ConstantsUtil.CONNECTOR_ID.AUTH,
                accounts: t,
                caipNetwork: r,
              });
          }
          setAuthProvider(e) {
            e.onConnect(this.onAuthConnected.bind(this)),
              e.onSocialConnected(this.onAuthConnected.bind(this)),
              this.addConnector({
                id: a.ConstantsUtil.CONNECTOR_ID.AUTH,
                type: "AUTH",
                name: a.ConstantsUtil.CONNECTOR_NAMES.AUTH,
                provider: e,
                imageId:
                  K.PresetsUtil.ConnectorImageIds[
                    a.ConstantsUtil.CONNECTOR_ID.AUTH
                  ],
                chain: this.namespace,
                chains: [],
              });
          }
          addConnector() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            let r = new Set();
            (this.availableConnectors = [
              ...t,
              ...this.availableConnectors,
            ].filter((e) => !r.has(e.id) && (r.add(e.id), !0))),
              this.emit("connectors", this.availableConnectors);
          }
          addConnection() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            let r = new Set();
            (this.availableConnections = [
              ...t,
              ...this.availableConnections,
            ].filter(
              (e) =>
                !r.has(e.connectorId.toLowerCase()) &&
                (r.add(e.connectorId.toLowerCase()), !0)
            )),
              this.emit("connections", this.availableConnections);
          }
          deleteConnection(e) {
            (this.availableConnections = this.availableConnections.filter(
              (t) => !F.HelpersUtil.isLowerCaseMatch(t.connectorId, e)
            )),
              this.emit("connections", this.availableConnections);
          }
          clearConnections() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            (this.availableConnections = []),
              e && this.emit("connections", this.availableConnections);
          }
          setStatus(e, t) {
            c.AccountController.setStatus(e, t);
          }
          on(e, t) {
            var n;
            this.eventListeners.has(e) || this.eventListeners.set(e, new Set()),
              null == (n = this.eventListeners.get(e)) || n.add(t);
          }
          off(e, t) {
            let n = this.eventListeners.get(e);
            n && n.delete(t);
          }
          removeAllEventListeners() {
            this.eventListeners.forEach((e) => {
              e.clear();
            });
          }
          emit(e, t) {
            let n = this.eventListeners.get(e);
            n && n.forEach((e) => e(t));
          }
          async connectWalletConnect(e) {
            let t = this.getWalletConnectConnector();
            return { clientId: (await t.connectWalletConnect()).clientId };
          }
          async switchNetwork(e) {
            let { caipNetwork: t, providerType: n } = e;
            if (!e.provider) return;
            let r = "provider" in e.provider ? e.provider.provider : e.provider;
            if ("WALLET_CONNECT" === n)
              return void r.setDefaultChain(t.caipNetworkId);
            if (r && "AUTH" === n) {
              let e = (0, b.getPreferredAccountType)(t.chainNamespace);
              await r.switchNetwork({ chainId: t.caipNetworkId });
              let n = await r.getUser({
                chainId: t.caipNetworkId,
                preferredAccountType: e,
              });
              this.emit("switchNetwork", n);
            }
          }
          getWalletConnectConnector() {
            let e = this.connectors.find((e) => e instanceof et);
            if (!e) throw Error("WalletConnectConnector not found");
            return e;
          }
          onConnect(e, t) {
            if (e.length > 0) {
              let { address: n, chainId: r } = w.CoreHelperUtil.getAccount(
                  e[0]
                ),
                i = this.getCaipNetworks()
                  .filter((e) => e.chainNamespace === this.namespace)
                  .find(
                    (e) =>
                      e.id.toString() === (null == r ? void 0 : r.toString())
                  ),
                o = this.connectors.find((e) => e.id === t);
              n &&
                (this.emit("accountChanged", {
                  address: n,
                  chainId: r,
                  connector: o,
                }),
                this.addConnection({
                  connectorId: t,
                  accounts: e.map((e) => {
                    let { address: t } = w.CoreHelperUtil.getAccount(e);
                    return { address: t };
                  }),
                  caipNetwork: i,
                }));
            }
          }
          onAccountsChanged(e, t) {
            let n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
            if (e.length > 0) {
              var r, i;
              let { address: n } = w.CoreHelperUtil.getAccount(e[0]),
                o =
                  null == (r = this.connectionManager)
                    ? void 0
                    : r.getConnection({
                        connectorId: t,
                        connections: this.connections,
                        connectors: this.connectors,
                      });
              n &&
                F.HelpersUtil.isLowerCaseMatch(
                  this.getConnectorId(a.ConstantsUtil.CHAIN.EVM),
                  t
                ) &&
                this.emit("accountChanged", {
                  address: n,
                  chainId:
                    null == o || null == (i = o.caipNetwork) ? void 0 : i.id,
                  connector: null == o ? void 0 : o.connector,
                }),
                this.addConnection({
                  connectorId: t,
                  accounts: e.map((e) => {
                    let { address: t } = w.CoreHelperUtil.getAccount(e);
                    return { address: t };
                  }),
                  caipNetwork: null == o ? void 0 : o.caipNetwork,
                });
            } else n && this.onDisconnect(t);
          }
          onDisconnect(e) {
            this.removeProviderListeners(e),
              this.deleteConnection(e),
              F.HelpersUtil.isLowerCaseMatch(
                this.getConnectorId(a.ConstantsUtil.CHAIN.EVM),
                e
              ) && this.emitFirstAvailableConnection(),
              0 === this.connections.length && this.emit("disconnect");
          }
          onChainChanged(e, t) {
            var n;
            let r =
                "string" == typeof e && e.startsWith("0x")
                  ? z.hexStringToNumber(e).toString()
                  : e.toString(),
              i =
                null == (n = this.connectionManager)
                  ? void 0
                  : n.getConnection({
                      connectorId: t,
                      connections: this.connections,
                      connectors: this.connectors,
                    }),
              o = this.getCaipNetworks()
                .filter((e) => e.chainNamespace === this.namespace)
                .find((e) => e.id.toString() === r);
            i &&
              this.addConnection({
                connectorId: t,
                accounts: i.accounts,
                caipNetwork: o,
              }),
              F.HelpersUtil.isLowerCaseMatch(
                this.getConnectorId(a.ConstantsUtil.CHAIN.EVM),
                t
              ) && this.emit("switchNetwork", { chainId: r });
          }
          listenProviderEvents(e, t) {
            if (er.includes(e)) return;
            let n = (t) => this.onAccountsChanged(t, e),
              r = (t) => this.onChainChanged(t, e),
              i = () => this.onDisconnect(e);
            this.providerHandlers[e] ||
              (t.on("disconnect", i),
              t.on("accountsChanged", n),
              t.on("chainChanged", r),
              (this.providerHandlers[e] = {
                provider: t,
                disconnect: i,
                accountsChanged: n,
                chainChanged: r,
              }));
          }
          removeProviderListeners(e) {
            if (this.providerHandlers[e]) {
              let {
                provider: t,
                disconnect: n,
                accountsChanged: r,
                chainChanged: i,
              } = this.providerHandlers[e];
              t.removeListener("disconnect", n),
                t.removeListener("accountsChanged", r),
                t.removeListener("chainChanged", i),
                (this.providerHandlers[e] = null);
            }
          }
          emitFirstAvailableConnection() {
            var e, t;
            let n =
              null == (e = this.connectionManager)
                ? void 0
                : e.getConnection({
                    connections: this.connections,
                    connectors: this.connectors,
                  });
            if (n) {
              let [e] = n.accounts;
              this.emit("accountChanged", {
                address: null == e ? void 0 : e.address,
                chainId: null == (t = n.caipNetwork) ? void 0 : t.id,
                connector: n.connector,
              });
            }
          }
          constructor(e) {
            (this.availableConnectors = []),
              (this.availableConnections = []),
              (this.providerHandlers = {}),
              (this.eventListeners = new Map()),
              (this.getCaipNetworks = (e) =>
                u.ChainController.getCaipNetworks(e)),
              (this.getConnectorId = (e) =>
                g.ConnectorController.getConnectorId(e)),
              e && this.construct(e),
              (null == e ? void 0 : e.namespace) &&
                (this.connectionManager = new $({ namespace: e.namespace }));
          }
        }
        class eo extends ei {
          async setUniversalProvider(e) {
            if (!this.namespace)
              throw Error(
                "UniversalAdapter:setUniversalProvider - namespace is required"
              );
            return (
              this.addConnector(
                new et({
                  provider: e,
                  caipNetworks: this.getCaipNetworks(),
                  namespace: this.namespace,
                })
              ),
              Promise.resolve()
            );
          }
          async connect(e) {
            return Promise.resolve({
              id: "WALLET_CONNECT",
              type: "WALLET_CONNECT",
              chainId: Number(e.chainId),
              provider: this.provider,
              address: "",
            });
          }
          async disconnect() {
            try {
              let e = this.getWalletConnectConnector();
              await e.disconnect(), this.emit("disconnect");
            } catch (e) {
              console.warn("UniversalAdapter:disconnect - error", e);
            }
            return { connections: [] };
          }
          syncConnections() {
            return Promise.resolve();
          }
          async getAccounts(e) {
            var t, n, r, i;
            let { namespace: o } = e,
              a = this.provider;
            return Promise.resolve({
              accounts: (
                (null == a ||
                null == (i = a.session) ||
                null == (r = i.namespaces) ||
                null == (n = r[o]) ||
                null == (t = n.accounts)
                  ? void 0
                  : t
                      .map((e) => {
                        let [, , t] = e.split(":");
                        return t;
                      })
                      .filter((e, t, n) => n.indexOf(e) === t)) || []
              ).map((e) =>
                w.CoreHelperUtil.createAccount(
                  o,
                  e,
                  "bip122" === o ? "payment" : "eoa"
                )
              ),
            });
          }
          async syncConnectors() {
            return Promise.resolve();
          }
          async getBalance(e) {
            var t, n, r, i, o;
            if (
              !(
                e.caipNetwork &&
                N.ConstantsUtil.BALANCE_SUPPORTED_CHAINS.includes(
                  null == (t = e.caipNetwork) ? void 0 : t.chainNamespace
                )
              ) ||
              (null == (n = e.caipNetwork) ? void 0 : n.testnet)
            )
              return {
                balance: "0.00",
                symbol:
                  (null == (o = e.caipNetwork)
                    ? void 0
                    : o.nativeCurrency.symbol) || "",
              };
            if (
              c.AccountController.state.balanceLoading &&
              e.chainId ===
                (null == (r = u.ChainController.state.activeCaipNetwork)
                  ? void 0
                  : r.id)
            )
              return {
                balance: c.AccountController.state.balance || "0.00",
                symbol: c.AccountController.state.balanceSymbol || "",
              };
            let a = (await c.AccountController.fetchTokenBalance()).find(
              (t) => {
                var n, r;
                return (
                  t.chainId ===
                    ""
                      .concat(
                        null == (n = e.caipNetwork) ? void 0 : n.chainNamespace,
                        ":"
                      )
                      .concat(e.chainId) &&
                  t.symbol ===
                    (null == (r = e.caipNetwork)
                      ? void 0
                      : r.nativeCurrency.symbol)
                );
              }
            );
            return {
              balance: (null == a ? void 0 : a.quantity.numeric) || "0.00",
              symbol:
                (null == a ? void 0 : a.symbol) ||
                (null == (i = e.caipNetwork)
                  ? void 0
                  : i.nativeCurrency.symbol) ||
                "",
            };
          }
          async signMessage(e) {
            var t, n, r;
            let { provider: i, message: o, address: s } = e;
            if (!i)
              throw Error(
                "UniversalAdapter:signMessage - provider is undefined"
              );
            return {
              signature:
                (null == (t = u.ChainController.state.activeCaipNetwork)
                  ? void 0
                  : t.chainNamespace) === a.ConstantsUtil.CHAIN.SOLANA
                  ? (
                      await i.request(
                        {
                          method: "solana_signMessage",
                          params: {
                            message: q.default.encode(
                              new TextEncoder().encode(o)
                            ),
                            pubkey: s,
                          },
                        },
                        null == (n = u.ChainController.state.activeCaipNetwork)
                          ? void 0
                          : n.caipNetworkId
                      )
                    ).signature
                  : await i.request(
                      { method: "personal_sign", params: [o, s] },
                      null == (r = u.ChainController.state.activeCaipNetwork)
                        ? void 0
                        : r.caipNetworkId
                    ),
            };
          }
          async estimateGas() {
            return Promise.resolve({ gas: BigInt(0) });
          }
          async sendTransaction() {
            return Promise.resolve({ hash: "" });
          }
          walletGetAssets(e) {
            return Promise.resolve({});
          }
          async writeContract() {
            return Promise.resolve({ hash: "" });
          }
          emitFirstAvailableConnection() {}
          parseUnits() {
            return 0n;
          }
          formatUnits() {
            return "0";
          }
          async getCapabilities() {
            return Promise.resolve({});
          }
          async grantPermissions() {
            return Promise.resolve({});
          }
          async revokePermissions() {
            return Promise.resolve("0x");
          }
          async syncConnection() {
            return Promise.resolve({
              id: "WALLET_CONNECT",
              type: "WALLET_CONNECT",
              chainId: 1,
              provider: this.provider,
              address: "",
            });
          }
          async switchNetwork(e) {
            let { caipNetwork: t } = e,
              n = this.getWalletConnectConnector();
            if (t.chainNamespace === a.ConstantsUtil.CHAIN.EVM) {
              var r, i, o, s, l, c;
              try {
                await (null == (r = n.provider)
                  ? void 0
                  : r.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: (0, V.toHex)(t.id) }],
                    }));
              } catch (e) {
                if (
                  e.code === ee.ERROR_CODE_UNRECOGNIZED_CHAIN_ID ||
                  e.code === ee.ERROR_INVALID_CHAIN_ID ||
                  e.code === ee.ERROR_CODE_DEFAULT ||
                  (null == e ||
                  null == (o = e.data) ||
                  null == (i = o.originalError)
                    ? void 0
                    : i.code) === ee.ERROR_CODE_UNRECOGNIZED_CHAIN_ID
                )
                  try {
                    await (null == (c = n.provider)
                      ? void 0
                      : c.request({
                          method: "wallet_addEthereumChain",
                          params: [
                            {
                              chainId: (0, V.toHex)(t.id),
                              rpcUrls: [
                                null == t ||
                                null == (s = t.rpcUrls.chainDefault)
                                  ? void 0
                                  : s.http,
                              ],
                              chainName: t.name,
                              nativeCurrency: t.nativeCurrency,
                              blockExplorerUrls: [
                                null == (l = t.blockExplorers)
                                  ? void 0
                                  : l.default.url,
                              ],
                            },
                          ],
                        }));
                  } catch (e) {
                    throw Error("Chain is not supported");
                  }
              }
            }
            n.provider.setDefaultChain(t.caipNetworkId);
          }
          getWalletConnectProvider() {
            let e = this.connectors.find((e) => "WALLET_CONNECT" === e.type);
            return null == e ? void 0 : e.provider;
          }
        }
        let ea = [
            "email",
            "socials",
            "swaps",
            "onramp",
            "activity",
            "reownBranding",
            "multiWallet",
          ],
          es = {
            email: {
              apiFeatureName: "social_login",
              localFeatureName: "email",
              returnType: !1,
              isLegacy: !1,
              isAvailableOnBasic: !1,
              processApi: (e) => {
                if (!(null == e ? void 0 : e.config)) return !1;
                let t = e.config;
                return !!e.isEnabled && t.includes("email");
              },
              processFallback: (e) =>
                void 0 === e
                  ? N.ConstantsUtil.DEFAULT_REMOTE_FEATURES.email
                  : !!e,
            },
            socials: {
              apiFeatureName: "social_login",
              localFeatureName: "socials",
              returnType: !1,
              isLegacy: !1,
              isAvailableOnBasic: !1,
              processApi: (e) => {
                if (!(null == e ? void 0 : e.config)) return !1;
                let t = e.config;
                return (
                  !!e.isEnabled &&
                  t.length > 0 &&
                  t.filter((e) => "email" !== e)
                );
              },
              processFallback: (e) =>
                void 0 === e
                  ? N.ConstantsUtil.DEFAULT_REMOTE_FEATURES.socials
                  : "boolean" == typeof e
                  ? !!e && N.ConstantsUtil.DEFAULT_REMOTE_FEATURES.socials
                  : e,
            },
            swaps: {
              apiFeatureName: "swap",
              localFeatureName: "swaps",
              returnType: !1,
              isLegacy: !1,
              isAvailableOnBasic: !1,
              processApi: (e) => {
                if (!(null == e ? void 0 : e.config)) return !1;
                let t = e.config;
                return !!e.isEnabled && t.length > 0 && t;
              },
              processFallback: (e) =>
                void 0 === e
                  ? N.ConstantsUtil.DEFAULT_REMOTE_FEATURES.swaps
                  : "boolean" == typeof e
                  ? !!e && N.ConstantsUtil.DEFAULT_REMOTE_FEATURES.swaps
                  : e,
            },
            onramp: {
              apiFeatureName: "onramp",
              localFeatureName: "onramp",
              returnType: !1,
              isLegacy: !1,
              isAvailableOnBasic: !1,
              processApi: (e) => {
                if (!(null == e ? void 0 : e.config)) return !1;
                let t = e.config;
                return !!e.isEnabled && t.length > 0 && t;
              },
              processFallback: (e) =>
                void 0 === e
                  ? N.ConstantsUtil.DEFAULT_REMOTE_FEATURES.onramp
                  : "boolean" == typeof e
                  ? !!e && N.ConstantsUtil.DEFAULT_REMOTE_FEATURES.onramp
                  : e,
            },
            activity: {
              apiFeatureName: "activity",
              localFeatureName: "history",
              returnType: !1,
              isLegacy: !0,
              isAvailableOnBasic: !1,
              processApi: (e) => !!e.isEnabled,
              processFallback: (e) =>
                void 0 === e
                  ? N.ConstantsUtil.DEFAULT_REMOTE_FEATURES.activity
                  : !!e,
            },
            reownBranding: {
              apiFeatureName: "reown_branding",
              localFeatureName: "reownBranding",
              returnType: !1,
              isLegacy: !1,
              isAvailableOnBasic: !1,
              processApi: (e) => !!e.isEnabled,
              processFallback: (e) =>
                void 0 === e
                  ? N.ConstantsUtil.DEFAULT_REMOTE_FEATURES.reownBranding
                  : !!e,
            },
            multiWallet: {
              apiFeatureName: "multi_wallet",
              localFeatureName: "multiWallet",
              returnType: !1,
              isLegacy: !1,
              isAvailableOnBasic: !1,
              processApi: (e) => !!e.isEnabled,
              processFallback: () =>
                N.ConstantsUtil.DEFAULT_REMOTE_FEATURES.multiWallet,
            },
          },
          el = {
            localSettingsOverridden: new Set(),
            getApiConfig: (e, t) =>
              null == t ? void 0 : t.find((t) => t.id === e),
            addWarning(e, t) {
              if (void 0 !== e) {
                let e = es[t],
                  n = e.isLegacy
                    ? '"features.'
                        .concat(e.localFeatureName, '" (now "')
                        .concat(t, '")')
                    : '"features.'.concat(t, '"');
                this.localSettingsOverridden.add(n);
              }
            },
            processFeature(e, t, n, r, i) {
              let o = es[e],
                a = t[o.localFeatureName];
              if (i && !o.isAvailableOnBasic) return !1;
              if (r) {
                let t = this.getApiConfig(o.apiFeatureName, n);
                return (null == t ? void 0 : t.config) === null
                  ? this.processFallbackFeature(e, a)
                  : !!(null == t ? void 0 : t.config) &&
                      (void 0 !== a && this.addWarning(a, e),
                      this.processApiFeature(e, t));
              }
              return this.processFallbackFeature(e, a);
            },
            processApiFeature: (e, t) => es[e].processApi(t),
            processFallbackFeature: (e, t) => es[e].processFallback(t),
            async fetchRemoteFeatures(e) {
              var t;
              let n = null != (t = e.basic) && t,
                r = e.features || {};
              this.localSettingsOverridden.clear();
              let i = null,
                o = !1;
              try {
                o = null != (i = await C.ApiController.fetchProjectConfig());
              } catch (e) {
                console.warn(
                  "[Reown Config] Failed to fetch remote project configuration. Using local/default values.",
                  e
                );
              }
              let a =
                o && !n
                  ? N.ConstantsUtil.DEFAULT_REMOTE_FEATURES
                  : N.ConstantsUtil.DEFAULT_REMOTE_FEATURES_DISABLED;
              try {
                for (let e of ea) {
                  let t = this.processFeature(e, r, i, o, n);
                  Object.assign(a, { [e]: t });
                }
              } catch (e) {
                return (
                  console.warn(
                    "[Reown Config] Failed to process the configuration from Cloud. Using default values.",
                    e
                  ),
                  N.ConstantsUtil.DEFAULT_REMOTE_FEATURES
                );
              }
              if (o && this.localSettingsOverridden.size > 0) {
                let e = "Your local configuration for ".concat(
                  Array.from(this.localSettingsOverridden).join(", "),
                  " was ignored because a remote configuration was successfully fetched. Please manage these features via your project dashboard on dashboard.reown.com."
                );
                d.AlertController.open(
                  {
                    shortMessage: "Local configuration ignored",
                    longMessage: "[Reown Config Notice] ".concat(e),
                  },
                  "warning"
                );
              }
              return a;
            },
          };
        class ec {
          getChainNamespacesSet(e, t) {
            let n =
              null == e ? void 0 : e.map((e) => e.namespace).filter((e) => !!e);
            return (null == n ? void 0 : n.length)
              ? [...new Set(n)]
              : [
                  ...new Set(
                    null == t ? void 0 : t.map((e) => e.chainNamespace)
                  ),
                ];
          }
          async initialize(e) {
            var t, n, r;
            this.initializeProjectSettings(e),
              this.initControllers(e),
              await this.initChainAdapters(),
              this.sendInitializeEvent(e),
              T.OptionsController.state.enableReconnect
                ? (await this.syncExistingConnection(),
                  await this.syncAdapterConnections())
                : await this.unSyncExistingConnection(),
              (this.remoteFeatures = await el.fetchRemoteFeatures(e)),
              T.OptionsController.setRemoteFeatures(this.remoteFeatures),
              this.remoteFeatures.onramp &&
                U.OnRampController.setOnrampProviders(
                  this.remoteFeatures.onramp
                ),
              ((null == (t = T.OptionsController.state.remoteFeatures)
                ? void 0
                : t.email) ||
                (Array.isArray(
                  null == (n = T.OptionsController.state.remoteFeatures)
                    ? void 0
                    : n.socials
                ) &&
                  (null == (r = T.OptionsController.state.remoteFeatures)
                    ? void 0
                    : r.socials.length) > 0)) &&
                (await this.checkAllowedOrigins());
          }
          async checkAllowedOrigins() {
            try {
              let e = await C.ApiController.fetchAllowedOrigins();
              if (!e || !w.CoreHelperUtil.isClient())
                return void d.AlertController.open(
                  M.ErrorUtil.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED,
                  "error"
                );
              let t = window.location.origin;
              Q.isOriginAllowed(t, e, ee.DEFAULT_ALLOWED_ANCESTORS) ||
                d.AlertController.open(
                  M.ErrorUtil.ALERT_ERRORS.ORIGIN_NOT_ALLOWED,
                  "error"
                );
            } catch (e) {
              if (!(e instanceof Error))
                return void d.AlertController.open(
                  M.ErrorUtil.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED,
                  "error"
                );
              switch (e.message) {
                case "RATE_LIMITED":
                  d.AlertController.open(
                    M.ErrorUtil.ALERT_ERRORS.RATE_LIMITED_APP_CONFIGURATION,
                    "error"
                  );
                  break;
                case "SERVER_ERROR": {
                  let t = e.cause instanceof Error ? e.cause : e;
                  d.AlertController.open(
                    {
                      shortMessage:
                        M.ErrorUtil.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION
                          .shortMessage,
                      longMessage:
                        M.ErrorUtil.ALERT_ERRORS.SERVER_ERROR_APP_CONFIGURATION.longMessage(
                          t.message
                        ),
                    },
                    "error"
                  );
                  break;
                }
                default:
                  d.AlertController.open(
                    M.ErrorUtil.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED,
                    "error"
                  );
              }
            }
          }
          sendInitializeEvent(e) {
            var t;
            let { ...n } = e;
            delete n.adapters,
              delete n.universalProvider,
              E.EventsController.sendEvent({
                type: "track",
                event: "INITIALIZE",
                properties: {
                  ...n,
                  networks: e.networks.map((e) => e.id),
                  siweConfig: {
                    options:
                      (null == (t = e.siweConfig) ? void 0 : t.options) || {},
                  },
                },
              });
          }
          initControllers(e) {
            this.initializeOptionsController(e),
              this.initializeChainController(e),
              this.initializeThemeController(e),
              this.initializeConnectionController(e),
              this.initializeConnectorController();
          }
          initializeThemeController(e) {
            e.themeMode && S.ThemeController.setThemeMode(e.themeMode),
              e.themeVariables &&
                S.ThemeController.setThemeVariables(e.themeVariables);
          }
          initializeChainController(e) {
            var t;
            if (
              !this.connectionControllerClient ||
              !this.networkControllerClient
            )
              throw Error(
                "ConnectionControllerClient and NetworkControllerClient must be set"
              );
            u.ChainController.initialize(
              null != (t = e.adapters) ? t : [],
              this.caipNetworks,
              {
                connectionControllerClient: this.connectionControllerClient,
                networkControllerClient: this.networkControllerClient,
              }
            );
            let n = this.getDefaultNetwork();
            n && u.ChainController.setActiveCaipNetwork(n);
          }
          initializeConnectionController(e) {
            var t, n;
            v.ConnectionController.initialize(
              null != (t = e.adapters) ? t : []
            ),
              v.ConnectionController.setWcBasic(null != (n = e.basic) && n);
          }
          initializeConnectorController() {
            g.ConnectorController.initialize(this.chainNamespaces);
          }
          initializeProjectSettings(e) {
            T.OptionsController.setProjectId(e.projectId),
              T.OptionsController.setSdkVersion(e.sdkVersion);
          }
          initializeOptionsController(e) {
            var t;
            T.OptionsController.setDebug(!1 !== e.debug),
              T.OptionsController.setEnableWalletConnect(
                !1 !== e.enableWalletConnect
              ),
              T.OptionsController.setEnableWalletGuide(
                !1 !== e.enableWalletGuide
              ),
              T.OptionsController.setEnableWallets(!1 !== e.enableWallets),
              T.OptionsController.setEIP6963Enabled(!1 !== e.enableEIP6963),
              T.OptionsController.setEnableNetworkSwitch(
                !1 !== e.enableNetworkSwitch
              ),
              T.OptionsController.setEnableReconnect(!1 !== e.enableReconnect),
              T.OptionsController.setEnableAuthLogger(
                !1 !== e.enableAuthLogger
              ),
              T.OptionsController.setCustomRpcUrls(e.customRpcUrls),
              T.OptionsController.setEnableEmbedded(e.enableEmbedded),
              T.OptionsController.setAllWallets(e.allWallets),
              T.OptionsController.setIncludeWalletIds(e.includeWalletIds),
              T.OptionsController.setExcludeWalletIds(e.excludeWalletIds),
              T.OptionsController.setFeaturedWalletIds(e.featuredWalletIds),
              T.OptionsController.setTokens(e.tokens),
              T.OptionsController.setTermsConditionsUrl(e.termsConditionsUrl),
              T.OptionsController.setPrivacyPolicyUrl(e.privacyPolicyUrl),
              T.OptionsController.setCustomWallets(e.customWallets),
              T.OptionsController.setFeatures(e.features),
              T.OptionsController.setAllowUnsupportedChain(
                e.allowUnsupportedChain
              ),
              T.OptionsController.setUniversalProviderConfigOverride(
                e.universalProviderConfigOverride
              ),
              T.OptionsController.setPreferUniversalLinks(
                e.experimental_preferUniversalLinks
              ),
              T.OptionsController.setDefaultAccountTypes(e.defaultAccountTypes);
            let n = this.getDefaultMetaData();
            if (
              (!e.metadata && n && (e.metadata = n),
              T.OptionsController.setMetadata(e.metadata),
              T.OptionsController.setDisableAppend(e.disableAppend),
              T.OptionsController.setEnableEmbedded(e.enableEmbedded),
              T.OptionsController.setSIWX(e.siwx),
              !e.projectId)
            )
              return void d.AlertController.open(
                M.ErrorUtil.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED,
                "error"
              );
            if (
              (null == (t = e.adapters)
                ? void 0
                : t.find((e) => e.namespace === a.ConstantsUtil.CHAIN.EVM)) &&
              e.siweConfig
            ) {
              if (e.siwx)
                throw Error("Cannot set both `siweConfig` and `siwx` options");
              T.OptionsController.setSIWX(e.siweConfig.mapToSIWX());
            }
          }
          getDefaultMetaData() {
            if (w.CoreHelperUtil.isClient()) {
              var e, t, n, r;
              return {
                name:
                  (null == (t = document.getElementsByTagName("title")) ||
                  null == (e = t[0])
                    ? void 0
                    : e.textContent) || "",
                description:
                  (null ==
                  (n = document.querySelector(
                    'meta[property="og:description"]'
                  ))
                    ? void 0
                    : n.content) || "",
                url: window.location.origin,
                icons: [
                  (null == (r = document.querySelector('link[rel~="icon"]'))
                    ? void 0
                    : r.href) || "",
                ],
              };
            }
            return null;
          }
          setUnsupportedNetwork(e) {
            let t = this.getActiveChainNamespace();
            if (t) {
              let n = W.CaipNetworksUtil.getUnsupportedNetwork(
                "".concat(t, ":").concat(e)
              );
              u.ChainController.setActiveCaipNetwork(n);
            }
          }
          getDefaultNetwork() {
            return W.CaipNetworksUtil.getCaipNetworkFromStorage(
              this.defaultCaipNetwork
            );
          }
          extendCaipNetwork(e, t) {
            return W.CaipNetworksUtil.extendCaipNetwork(e, {
              customNetworkImageUrls: t.chainImages,
              projectId: t.projectId,
            });
          }
          extendCaipNetworks(e) {
            return W.CaipNetworksUtil.extendCaipNetworks(e.networks, {
              customNetworkImageUrls: e.chainImages,
              customRpcUrls: e.customRpcUrls,
              projectId: e.projectId,
            });
          }
          extendDefaultCaipNetwork(e) {
            let t = e.networks.find((t) => {
              var n;
              return t.id === (null == (n = e.defaultNetwork) ? void 0 : n.id);
            });
            return t
              ? W.CaipNetworksUtil.extendCaipNetwork(t, {
                  customNetworkImageUrls: e.chainImages,
                  customRpcUrls: e.customRpcUrls,
                  projectId: e.projectId,
                })
              : void 0;
          }
          async disconnectNamespace(e, t) {
            try {
              this.setLoading(!0, e);
              let n = { connections: [] },
                r = this.getAdapter(e),
                { caipAddress: i } = u.ChainController.getAccountData(e) || {};
              return (
                (i || !T.OptionsController.state.enableReconnect) &&
                  (null == r ? void 0 : r.disconnect) &&
                  (n = await r.disconnect({ id: t })),
                this.setLoading(!1, e),
                n
              );
            } catch (t) {
              throw (
                (this.setLoading(!1, e),
                Error("Failed to disconnect chains: ".concat(t.message)))
              );
            }
          }
          createClients() {
            (this.connectionControllerClient = {
              connectWalletConnect: async () => {
                var e;
                let t = u.ChainController.state.activeChain,
                  n = this.getAdapter(t),
                  r = null == (e = this.getCaipNetwork(t)) ? void 0 : e.id,
                  i = v.ConnectionController.getConnections(t),
                  o = this.remoteFeatures.multiWallet,
                  a = i.length > 0;
                if (!n) throw Error("Adapter not found");
                let s = await n.connectWalletConnect(r);
                (a && o) || this.close(),
                  this.setClientId((null == s ? void 0 : s.clientId) || null),
                  P.StorageUtil.setConnectedNamespaces([
                    ...u.ChainController.state.chains.keys(),
                  ]),
                  await this.syncWalletConnectAccount(),
                  await O.SIWXUtil.initializeIfEnabled();
              },
              connectExternal: async (e) => {
                var t, n, r, i, o, a;
                let {
                    id: s,
                    address: l,
                    info: c,
                    type: d,
                    provider: C,
                    chain: h,
                    caipNetwork: p,
                    socialUri: v,
                  } = e,
                  m = u.ChainController.state.activeChain,
                  g = h || m,
                  N = this.getAdapter(g);
                if (h && h !== m && !p) {
                  let e = this.getCaipNetworks().find(
                    (e) => e.chainNamespace === h
                  );
                  e && this.setCaipNetwork(e);
                }
                if (!g) throw Error("connectExternal: namespace not found");
                if (!N) throw Error("connectExternal: adapter not found");
                let w = this.getCaipNetwork(g),
                  A = await N.connect({
                    id: s,
                    address: l,
                    info: c,
                    type: d,
                    provider: C,
                    socialUri: v,
                    chainId:
                      (null == p ? void 0 : p.id) ||
                      (null == w ? void 0 : w.id),
                    rpcUrl:
                      (null == p ||
                      null == (r = p.rpcUrls) ||
                      null == (n = r.default) ||
                      null == (t = n.http)
                        ? void 0
                        : t[0]) ||
                      (null == w ||
                      null == (a = w.rpcUrls) ||
                      null == (o = a.default) ||
                      null == (i = o.http)
                        ? void 0
                        : i[0]),
                  });
                if (A)
                  return (
                    P.StorageUtil.addConnectedNamespace(g),
                    this.syncProvider({ ...A, chainNamespace: g }),
                    this.setStatus("connected", g),
                    this.syncConnectedWalletInfo(g),
                    P.StorageUtil.removeDisconnectedConnectorId(s, g),
                    { address: A.address }
                  );
              },
              reconnectExternal: async (e) => {
                let { id: t, info: n, type: r, provider: i } = e,
                  o = u.ChainController.state.activeChain,
                  a = this.getAdapter(o);
                if (!o) throw Error("reconnectExternal: namespace not found");
                if (!a) throw Error("reconnectExternal: adapter not found");
                if (null == a ? void 0 : a.reconnect) {
                  var s;
                  await (null == a
                    ? void 0
                    : a.reconnect({
                        id: t,
                        info: n,
                        type: r,
                        provider: i,
                        chainId:
                          null == (s = this.getCaipNetwork()) ? void 0 : s.id,
                      })),
                    P.StorageUtil.addConnectedNamespace(o),
                    this.syncConnectedWalletInfo(o);
                }
              },
              disconnect: async (e) => {
                let {
                    id: t,
                    chainNamespace: n,
                    initialDisconnect: r,
                  } = e || {},
                  i = n || u.ChainController.state.activeChain,
                  o = g.ConnectorController.getConnectorId(i),
                  s =
                    t === a.ConstantsUtil.CONNECTOR_ID.AUTH ||
                    o === a.ConstantsUtil.CONNECTOR_ID.AUTH,
                  l =
                    t === a.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT ||
                    o === a.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT;
                try {
                  var c;
                  let e = Array.from(u.ChainController.state.chains.keys()),
                    i = n ? [n] : e;
                  (l || s) && (i = e);
                  let o = i.map(async (e) => {
                      let n = g.ConnectorController.getConnectorId(e),
                        i = await this.disconnectNamespace(e, t || n);
                      i &&
                        (s && P.StorageUtil.deleteConnectedSocialProvider(),
                        i.connections.forEach((t) => {
                          P.StorageUtil.addDisconnectedConnectorId(
                            t.connectorId,
                            e
                          );
                        })),
                        r &&
                          this.onDisconnectNamespace({
                            chainNamespace: e,
                            closeModal: !1,
                          });
                    }),
                    a = await Promise.allSettled(o);
                  k.SendController.resetSend(),
                    v.ConnectionController.resetWcConnection(),
                    (null == (c = O.SIWXUtil.getSIWX())
                      ? void 0
                      : c.signOutOnDisconnect) &&
                      (await O.SIWXUtil.clearSessions()),
                    g.ConnectorController.setFilterByNamespace(void 0),
                    v.ConnectionController.syncStorageConnections();
                  let d = a.filter((e) => "rejected" === e.status);
                  if (d.length > 0)
                    throw Error(d.map((e) => e.reason.message).join(", "));
                  E.EventsController.sendEvent({
                    type: "track",
                    event: "DISCONNECT_SUCCESS",
                    properties: { namespace: n || "all" },
                  });
                } catch (e) {
                  throw Error(
                    "Failed to disconnect chains: ".concat(e.message)
                  );
                }
              },
              checkInstalled: (e) =>
                e
                  ? e.some((e) => {
                      var t;
                      return !!(null == (t = window.ethereum)
                        ? void 0
                        : t[String(e)]);
                    })
                  : !!window.ethereum,
              signMessage: async (e) => {
                let t = u.ChainController.state.activeChain,
                  n = this.getAdapter(u.ChainController.state.activeChain);
                if (!t) throw Error("signMessage: namespace not found");
                if (!n) throw Error("signMessage: adapter not found");
                let r = await (null == n
                  ? void 0
                  : n.signMessage({
                      message: e,
                      address: c.AccountController.state.address,
                      provider: j.ProviderUtil.getProvider(t),
                    }));
                return (null == r ? void 0 : r.signature) || "";
              },
              sendTransaction: async (e) => {
                let t = e.chainNamespace;
                if (!t) throw Error("sendTransaction: namespace not found");
                if (N.ConstantsUtil.SEND_SUPPORTED_NAMESPACES.includes(t)) {
                  let n = this.getAdapter(t);
                  if (!n) throw Error("sendTransaction: adapter not found");
                  let r = j.ProviderUtil.getProvider(t),
                    i = await (null == n
                      ? void 0
                      : n.sendTransaction({
                          ...e,
                          caipNetwork: this.getCaipNetwork(),
                          provider: r,
                        }));
                  return (null == i ? void 0 : i.hash) || "";
                }
                return "";
              },
              estimateGas: async (e) => {
                let t = e.chainNamespace;
                if (t === a.ConstantsUtil.CHAIN.EVM) {
                  let n = this.getAdapter(t);
                  if (!n)
                    throw Error(
                      "estimateGas: adapter is required but got undefined"
                    );
                  let r = j.ProviderUtil.getProvider(t),
                    i = this.getCaipNetwork();
                  if (!i)
                    throw Error(
                      "estimateGas: caipNetwork is required but got undefined"
                    );
                  let o = await (null == n
                    ? void 0
                    : n.estimateGas({ ...e, provider: r, caipNetwork: i }));
                  return (null == o ? void 0 : o.gas) || 0n;
                }
                return 0n;
              },
              getEnsAvatar: async () => {
                var e;
                let t = u.ChainController.state.activeChain;
                if (!t)
                  throw Error(
                    "getEnsAvatar: namespace is required but got undefined"
                  );
                return (
                  await this.syncIdentity({
                    address: c.AccountController.state.address,
                    chainId: Number(
                      null == (e = this.getCaipNetwork()) ? void 0 : e.id
                    ),
                    chainNamespace: t,
                  }),
                  c.AccountController.state.profileImage || !1
                );
              },
              getEnsAddress: async (e) => await Q.resolveReownName(e),
              writeContract: async (e) => {
                let t = u.ChainController.state.activeChain,
                  n = this.getAdapter(t);
                if (!t)
                  throw Error(
                    "writeContract: namespace is required but got undefined"
                  );
                if (!n)
                  throw Error(
                    "writeContract: adapter is required but got undefined"
                  );
                let r = this.getCaipNetwork(),
                  i = this.getCaipAddress(),
                  o = j.ProviderUtil.getProvider(t);
                if (!r || !i)
                  throw Error(
                    "writeContract: caipNetwork or caipAddress is required but got undefined"
                  );
                let a = await (null == n
                  ? void 0
                  : n.writeContract({
                      ...e,
                      caipNetwork: r,
                      provider: o,
                      caipAddress: i,
                    }));
                return null == a ? void 0 : a.hash;
              },
              parseUnits: (e, t) => {
                var n;
                let r = this.getAdapter(u.ChainController.state.activeChain);
                if (!r)
                  throw Error(
                    "parseUnits: adapter is required but got undefined"
                  );
                return null !=
                  (n =
                    null == r
                      ? void 0
                      : r.parseUnits({ value: e, decimals: t }))
                  ? n
                  : 0n;
              },
              formatUnits: (e, t) => {
                var n;
                let r = this.getAdapter(u.ChainController.state.activeChain);
                if (!r)
                  throw Error(
                    "formatUnits: adapter is required but got undefined"
                  );
                return null !=
                  (n =
                    null == r
                      ? void 0
                      : r.formatUnits({ value: e, decimals: t }))
                  ? n
                  : "0";
              },
              getCapabilities: async (e) => {
                let t = this.getAdapter(u.ChainController.state.activeChain);
                if (!t)
                  throw Error(
                    "getCapabilities: adapter is required but got undefined"
                  );
                return await (null == t ? void 0 : t.getCapabilities(e));
              },
              grantPermissions: async (e) => {
                let t = this.getAdapter(u.ChainController.state.activeChain);
                if (!t)
                  throw Error(
                    "grantPermissions: adapter is required but got undefined"
                  );
                return await (null == t ? void 0 : t.grantPermissions(e));
              },
              revokePermissions: async (e) => {
                let t = this.getAdapter(u.ChainController.state.activeChain);
                if (!t)
                  throw Error(
                    "revokePermissions: adapter is required but got undefined"
                  );
                return (null == t ? void 0 : t.revokePermissions)
                  ? await t.revokePermissions(e)
                  : "0x";
              },
              walletGetAssets: async (e) => {
                var t;
                let n = this.getAdapter(u.ChainController.state.activeChain);
                if (!n)
                  throw Error(
                    "walletGetAssets: adapter is required but got undefined"
                  );
                return null !=
                  (t = await (null == n ? void 0 : n.walletGetAssets(e)))
                  ? t
                  : {};
              },
              updateBalance: (e) => {
                let t = this.getCaipNetwork(e);
                t &&
                  c.AccountController.state.address &&
                  this.updateNativeBalance(
                    c.AccountController.state.address,
                    null == t ? void 0 : t.id,
                    e
                  );
              },
            }),
              (this.networkControllerClient = {
                switchCaipNetwork: async (e) => await this.switchCaipNetwork(e),
                getApprovedCaipNetworksData: async () =>
                  this.getApprovedCaipNetworksData(),
              }),
              v.ConnectionController.setClient(this.connectionControllerClient);
          }
          getApprovedCaipNetworksData() {
            if (
              j.ProviderUtil.getProviderId(
                u.ChainController.state.activeChain
              ) === B.ConstantsUtil.CONNECTOR_TYPE_WALLET_CONNECT
            ) {
              var e, t, n, r, i;
              let o =
                null == (t = this.universalProvider) || null == (e = t.session)
                  ? void 0
                  : e.namespaces;
              return {
                supportsAllNetworks:
                  (null == (i = this.universalProvider) ||
                  null == (r = i.session) ||
                  null == (n = r.peer)
                    ? void 0
                    : n.metadata.name) === "MetaMask Wallet",
                approvedCaipNetworkIds: this.getChainsFromNamespaces(o),
              };
            }
            return { supportsAllNetworks: !0, approvedCaipNetworkIds: [] };
          }
          async switchCaipNetwork(e) {
            if (!e) return;
            let t = e.chainNamespace;
            if (this.getAddressByChainNamespace(e.chainNamespace)) {
              let n = j.ProviderUtil.getProvider(t),
                r = j.ProviderUtil.getProviderId(t);
              if (e.chainNamespace === u.ChainController.state.activeChain) {
                let i = this.getAdapter(t);
                await (null == i
                  ? void 0
                  : i.switchNetwork({
                      caipNetwork: e,
                      provider: n,
                      providerType: r,
                    }));
              } else if (
                (this.setCaipNetwork(e),
                r === B.ConstantsUtil.CONNECTOR_TYPE_WALLET_CONNECT)
              )
                this.syncWalletConnectAccount();
              else {
                let n = this.getAddressByChainNamespace(t);
                n &&
                  this.syncAccount({
                    address: n,
                    chainId: e.id,
                    chainNamespace: t,
                  });
              }
            } else this.setCaipNetwork(e);
          }
          getChainsFromNamespaces() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return Object.values(e).flatMap((e) =>
              Array.from(
                new Set([
                  ...(e.chains || []),
                  ...e.accounts.map((e) => {
                    let { chainId: t, chainNamespace: n } =
                      l.ParseUtil.parseCaipAddress(e);
                    return "".concat(n, ":").concat(t);
                  }),
                ])
              )
            );
          }
          createAdapters(e) {
            return (
              this.createClients(),
              this.chainNamespaces.reduce((t, n) => {
                let r = null == e ? void 0 : e.find((e) => e.namespace === n);
                if (r) {
                  var i;
                  r.construct({
                    namespace: n,
                    projectId:
                      null == (i = this.options) ? void 0 : i.projectId,
                    networks: this.getCaipNetworks(),
                  }),
                    (t[n] = r);
                } else
                  t[n] = new eo({
                    namespace: n,
                    networks: this.getCaipNetworks(),
                  });
                return t;
              }, {})
            );
          }
          async initChainAdapter(e) {
            var t;
            this.onConnectors(e),
              this.listenAdapter(e),
              await (null == (t = this.chainAdapters)
                ? void 0
                : t[e].syncConnectors(this.options, this)),
              await this.createUniversalProviderForAdapter(e);
          }
          async initChainAdapters() {
            await Promise.all(
              this.chainNamespaces.map(async (e) => {
                await this.initChainAdapter(e);
              })
            );
          }
          onConnectors(e) {
            let t = this.getAdapter(e);
            null == t || t.on("connectors", this.setConnectors.bind(this));
          }
          listenAdapter(e) {
            let t = this.getAdapter(e);
            if (!t) return;
            let n = P.StorageUtil.getConnectionStatus();
            !1 === T.OptionsController.state.enableReconnect
              ? this.setStatus("disconnected", e)
              : "connected" === n
              ? this.setStatus("connecting", e)
              : ("disconnected" === n && P.StorageUtil.clearAddressCache(),
                this.setStatus(n, e)),
              t.on("switchNetwork", (t) => {
                let { address: n, chainId: r } = t,
                  i = this.getCaipNetworks().find(
                    (e) =>
                      e.id.toString() === r.toString() ||
                      e.caipNetworkId.toString() === r.toString()
                  ),
                  o = u.ChainController.state.activeChain === e,
                  a = u.ChainController.getAccountProp("address", e);
                if (i) {
                  let t = o && n ? n : a;
                  t &&
                    this.syncAccount({
                      address: t,
                      chainId: i.id,
                      chainNamespace: e,
                    });
                } else this.setUnsupportedNetwork(r);
              }),
              t.on("disconnect", () => {
                this.onDisconnectNamespace({ chainNamespace: e });
              }),
              t.on("connections", (t) => {
                this.setConnections(t, e);
              }),
              t.on("pendingTransactions", () => {
                let e = c.AccountController.state.address,
                  t = u.ChainController.state.activeCaipNetwork;
                e &&
                  (null == t ? void 0 : t.id) &&
                  this.updateNativeBalance(e, t.id, t.chainNamespace);
              }),
              t.on("accountChanged", (t) => {
                var n, r;
                let { address: i, chainId: o, connector: a } = t,
                  s = u.ChainController.state.activeChain === e;
                (null == a ? void 0 : a.provider) &&
                  (this.syncProvider({
                    id: a.id,
                    type: a.type,
                    provider: a.provider,
                    chainNamespace: e,
                  }),
                  this.syncConnectedWalletInfo(e)),
                  s && o
                    ? this.syncAccount({
                        address: i,
                        chainId: o,
                        chainNamespace: e,
                      })
                    : s &&
                      (null == (n = u.ChainController.state.activeCaipNetwork)
                        ? void 0
                        : n.id)
                    ? this.syncAccount({
                        address: i,
                        chainId:
                          null ==
                          (r = u.ChainController.state.activeCaipNetwork)
                            ? void 0
                            : r.id,
                        chainNamespace: e,
                      })
                    : this.syncAccountInfo(i, o, e),
                  P.StorageUtil.addConnectedNamespace(e);
              });
          }
          async createUniversalProviderForAdapter(e) {
            if ((await this.getUniversalProvider(), this.universalProvider)) {
              var t, n, r;
              await (null == (r = this.chainAdapters) ||
              null == (n = r[e]) ||
              null == (t = n.setUniversalProvider)
                ? void 0
                : t.call(n, this.universalProvider));
            }
          }
          async syncExistingConnection() {
            await Promise.allSettled(
              this.chainNamespaces.map((e) => this.syncNamespaceConnection(e))
            );
          }
          async unSyncExistingConnection() {
            try {
              await Promise.allSettled(
                this.chainNamespaces.map((e) =>
                  v.ConnectionController.disconnect({
                    namespace: e,
                    initialDisconnect: !0,
                  })
                )
              );
            } catch (e) {
              console.error("Error disconnecting existing connections:", e);
            }
          }
          async syncNamespaceConnection(e) {
            try {
              e === a.ConstantsUtil.CHAIN.EVM &&
                w.CoreHelperUtil.isSafeApp() &&
                g.ConnectorController.setConnectorId(
                  a.ConstantsUtil.CONNECTOR_ID.SAFE,
                  e
                );
              let t = g.ConnectorController.getConnectorId(e);
              switch ((this.setStatus("connecting", e), t)) {
                case a.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT:
                  await this.syncWalletConnectAccount();
                  break;
                case a.ConstantsUtil.CONNECTOR_ID.AUTH:
                  break;
                default:
                  await this.syncAdapterConnection(e);
              }
            } catch (t) {
              console.warn("AppKit couldn't sync existing connection", t),
                this.setStatus("disconnected", e);
            }
          }
          onDisconnectNamespace(e) {
            let { chainNamespace: t, closeModal: n } = e || {};
            u.ChainController.resetAccount(t),
              u.ChainController.resetNetwork(t),
              P.StorageUtil.removeConnectedNamespace(t);
            let r = Array.from(u.ChainController.state.chains.keys());
            (t ? [t] : r).forEach((e) =>
              P.StorageUtil.addDisconnectedConnectorId(
                g.ConnectorController.getConnectorId(e) || "",
                e
              )
            ),
              g.ConnectorController.removeConnectorId(t),
              j.ProviderUtil.resetChain(t),
              this.setUser(void 0, t),
              this.setStatus("disconnected", t),
              this.setConnectedWalletInfo(void 0, t),
              !1 !== n && f.ModalController.close();
          }
          async syncAdapterConnections() {
            await Promise.allSettled(
              this.chainNamespaces.map((e) => {
                var t;
                let n = this.getCaipAddress(e),
                  r = this.getCaipNetwork(e);
                return null == (t = this.chainAdapters)
                  ? void 0
                  : t[e].syncConnections({
                      connectToFirstConnector: !n,
                      caipNetwork: r,
                      getConnectorStorageInfo(t) {
                        var n;
                        let r =
                          null != (n = P.StorageUtil.getConnections()[e])
                            ? n
                            : [];
                        return {
                          hasDisconnected:
                            P.StorageUtil.isConnectorDisconnected(t, e),
                          hasConnected: r.some((e) =>
                            F.HelpersUtil.isLowerCaseMatch(e.connectorId, t)
                          ),
                        };
                      },
                    });
              })
            );
          }
          async syncAdapterConnection(e) {
            let t = this.getAdapter(e),
              n = g.ConnectorController.getConnectorId(e),
              r = this.getCaipNetwork(e),
              i = g.ConnectorController.getConnectors(e).find(
                (e) => e.id === n
              );
            try {
              var o, a, s;
              if (!t || !i)
                throw Error(
                  "Adapter or connector not found for namespace ".concat(e)
                );
              if (!(null == r ? void 0 : r.id))
                throw Error("CaipNetwork not found");
              let n = await (null == t
                ? void 0
                : t.syncConnection({
                    namespace: e,
                    id: i.id,
                    chainId: r.id,
                    rpcUrl:
                      null == r ||
                      null == (s = r.rpcUrls) ||
                      null == (a = s.default) ||
                      null == (o = a.http)
                        ? void 0
                        : o[0],
                  }));
              n
                ? (this.syncProvider({ ...n, chainNamespace: e }),
                  await this.syncAccount({ ...n, chainNamespace: e }),
                  this.setStatus("connected", e))
                : this.setStatus("disconnected", e);
            } catch (t) {
              this.onDisconnectNamespace({ chainNamespace: e, closeModal: !1 });
            }
          }
          async syncWalletConnectAccount() {
            var e, t;
            let n = Object.keys(
                (null == (t = this.universalProvider) || null == (e = t.session)
                  ? void 0
                  : e.namespaces) || {}
              ),
              r = this.chainNamespaces.map(async (e) => {
                var t, r, i, o, s;
                let c = this.getAdapter(e);
                if (!c) return;
                let d =
                    (null == (o = this.universalProvider) ||
                    null == (i = o.session) ||
                    null == (r = i.namespaces) ||
                    null == (t = r[e])
                      ? void 0
                      : t.accounts) || [],
                  C =
                    null == (s = u.ChainController.state.activeCaipNetwork)
                      ? void 0
                      : s.id,
                  h =
                    d.find((e) => {
                      let { chainId: t } = l.ParseUtil.parseCaipAddress(e);
                      return t === (null == C ? void 0 : C.toString());
                    }) || d[0];
                if (h) {
                  let t = l.ParseUtil.validateCaipAddress(h),
                    { chainId: n, address: r } =
                      l.ParseUtil.parseCaipAddress(t);
                  if (
                    (j.ProviderUtil.setProviderId(
                      e,
                      B.ConstantsUtil.CONNECTOR_TYPE_WALLET_CONNECT
                    ),
                    this.caipNetworks &&
                      u.ChainController.state.activeCaipNetwork &&
                      c.namespace !== a.ConstantsUtil.CHAIN.EVM)
                  ) {
                    let t = c.getWalletConnectProvider({
                      caipNetworks: this.getCaipNetworks(),
                      provider: this.universalProvider,
                      activeCaipNetwork:
                        u.ChainController.state.activeCaipNetwork,
                    });
                    j.ProviderUtil.setProvider(e, t);
                  } else j.ProviderUtil.setProvider(e, this.universalProvider);
                  g.ConnectorController.setConnectorId(
                    a.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT,
                    e
                  ),
                    P.StorageUtil.addConnectedNamespace(e),
                    await this.syncAccount({
                      address: r,
                      chainId: n,
                      chainNamespace: e,
                    });
                } else n.includes(e) && this.setStatus("disconnected", e);
                this.syncConnectedWalletInfo(e),
                  await u.ChainController.setApprovedCaipNetworksData(e);
              });
            await Promise.all(r);
          }
          syncProvider(e) {
            let { type: t, provider: n, id: r, chainNamespace: i } = e;
            j.ProviderUtil.setProviderId(i, t),
              j.ProviderUtil.setProvider(i, n),
              g.ConnectorController.setConnectorId(r, i);
          }
          async syncAccount(e) {
            var t, n;
            let r = e.chainNamespace === u.ChainController.state.activeChain,
              i = u.ChainController.getCaipNetworkByNamespace(
                e.chainNamespace,
                e.chainId
              ),
              { address: o, chainId: s, chainNamespace: d } = e,
              { chainId: C } = P.StorageUtil.getActiveNetworkProps(),
              h = s || C,
              p =
                (null == (t = u.ChainController.state.activeCaipNetwork)
                  ? void 0
                  : t.name) === a.ConstantsUtil.UNSUPPORTED_NETWORK_NAME,
              v = u.ChainController.getNetworkProp("supportsAllNetworks", d);
            if ((this.setStatus("connected", d), (!p || v) && h)) {
              let e = this.getCaipNetworks().find(
                  (e) => e.id.toString() === h.toString()
                ),
                t = this.getCaipNetworks().find((e) => e.chainNamespace === d);
              if (!v && !e && !t) {
                let n = this.getApprovedCaipNetworkIds() || [],
                  r = n.find((e) => {
                    var t;
                    return (
                      (null == (t = l.ParseUtil.parseCaipNetworkId(e))
                        ? void 0
                        : t.chainId) === h.toString()
                    );
                  }),
                  i = n.find((e) => {
                    var t;
                    return (
                      (null == (t = l.ParseUtil.parseCaipNetworkId(e))
                        ? void 0
                        : t.chainNamespace) === d
                    );
                  });
                (e = this.getCaipNetworks().find((e) => e.caipNetworkId === r)),
                  (t = this.getCaipNetworks().find(
                    (e) =>
                      e.caipNetworkId === i ||
                      ("deprecatedCaipNetworkId" in e &&
                        e.deprecatedCaipNetworkId === i)
                  ));
              }
              let s = e || t;
              (null == s ? void 0 : s.chainNamespace) ===
              u.ChainController.state.activeChain
                ? T.OptionsController.state.enableNetworkSwitch &&
                  !T.OptionsController.state.allowUnsupportedChain &&
                  (null == (n = u.ChainController.state.activeCaipNetwork)
                    ? void 0
                    : n.name) === a.ConstantsUtil.UNSUPPORTED_NETWORK_NAME
                  ? u.ChainController.showUnsupportedChainUI()
                  : this.setCaipNetwork(s)
                : !r && i && this.setCaipNetworkOfNamespace(i, d),
                this.syncConnectedWalletInfo(d),
                F.HelpersUtil.isLowerCaseMatch(
                  o,
                  c.AccountController.state.address
                ) || this.syncAccountInfo(o, null == s ? void 0 : s.id, d),
                r
                  ? await this.syncBalance({
                      address: o,
                      chainId: null == s ? void 0 : s.id,
                      chainNamespace: d,
                    })
                  : await this.syncBalance({
                      address: o,
                      chainId: null == i ? void 0 : i.id,
                      chainNamespace: d,
                    });
            }
          }
          async syncAccountInfo(e, t, n) {
            let r = this.getCaipAddress(n),
              i = t || (null == r ? void 0 : r.split(":")[1]);
            if (!i) return;
            let o = "".concat(n, ":").concat(i, ":").concat(e);
            this.setCaipAddress(o, n),
              await this.syncIdentity({
                address: e,
                chainId: i,
                chainNamespace: n,
              });
          }
          async syncReownName(e, t) {
            try {
              let n = await this.getReownName(e);
              if (n[0]) {
                let e = n[0];
                this.setProfileName(e.name, t);
              } else this.setProfileName(null, t);
            } catch (e) {
              this.setProfileName(null, t);
            }
          }
          syncConnectedWalletInfo(e) {
            let t = g.ConnectorController.getConnectorId(e),
              n = j.ProviderUtil.getProviderId(e);
            if (
              n === B.ConstantsUtil.CONNECTOR_TYPE_ANNOUNCED ||
              n === B.ConstantsUtil.CONNECTOR_TYPE_INJECTED
            ) {
              if (t) {
                let n = this.getConnectors().find((e) => {
                  var n, r;
                  let i = e.id === t,
                    o = (null == (n = e.info) ? void 0 : n.rdns) === t,
                    a =
                      null == (r = e.connectors)
                        ? void 0
                        : r.some((e) => {
                            var n;
                            return (
                              e.id === t ||
                              (null == (n = e.info) ? void 0 : n.rdns) === t
                            );
                          });
                  return i || o || !!a;
                });
                if (n) {
                  let { info: t, name: r, imageUrl: i } = n,
                    o = i || this.getConnectorImage(n);
                  this.setConnectedWalletInfo({ name: r, icon: o, ...t }, e);
                }
              }
            } else if (n === B.ConstantsUtil.CONNECTOR_TYPE_WALLET_CONNECT) {
              let t = j.ProviderUtil.getProvider(e);
              if (null == t ? void 0 : t.session) {
                var r;
                this.setConnectedWalletInfo(
                  {
                    ...t.session.peer.metadata,
                    name: t.session.peer.metadata.name,
                    icon:
                      null == (r = t.session.peer.metadata.icons)
                        ? void 0
                        : r[0],
                  },
                  e
                );
              }
            } else if (t && t === a.ConstantsUtil.CONNECTOR_ID.COINBASE) {
              let t = this.getConnectors().find(
                (e) => e.id === a.ConstantsUtil.CONNECTOR_ID.COINBASE
              );
              this.setConnectedWalletInfo(
                { name: "Coinbase Wallet", icon: this.getConnectorImage(t) },
                e
              );
            }
          }
          async syncBalance(e) {
            s.NetworkUtil.getNetworksByNamespace(
              this.getCaipNetworks(),
              e.chainNamespace
            ).find((t) => {
              var n;
              return (
                t.id.toString() ===
                (null == (n = e.chainId) ? void 0 : n.toString())
              );
            }) &&
              e.chainId &&
              (await this.updateNativeBalance(
                e.address,
                e.chainId,
                e.chainNamespace
              ));
          }
          async ready() {
            await this.readyPromise;
          }
          async updateNativeBalance(e, t, n) {
            let r = this.getAdapter(n),
              i = u.ChainController.getCaipNetworkByNamespace(n, t);
            if (r) {
              let o = await r.getBalance({
                address: e,
                chainId: t,
                caipNetwork: i,
                tokens: this.options.tokens,
              });
              return this.setBalance(o.balance, o.symbol, n), o;
            }
          }
          async initializeUniversalAdapter() {
            var e,
              t,
              n,
              r,
              i,
              a,
              s,
              l,
              c,
              d,
              C,
              h = this;
            let p = x.createLogger(function (e) {
                for (
                  var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
                  r < t;
                  r++
                )
                  n[r - 1] = arguments[r];
                e && h.handleAlertError(e), console.error(...n);
              }),
              u = {
                projectId: null == (e = this.options) ? void 0 : e.projectId,
                metadata: {
                  name: (null == (t = this.options) ? void 0 : t.metadata)
                    ? null == (n = this.options)
                      ? void 0
                      : n.metadata.name
                    : "",
                  description: (
                    null == (r = this.options) ? void 0 : r.metadata
                  )
                    ? null == (i = this.options)
                      ? void 0
                      : i.metadata.description
                    : "",
                  url: (null == (a = this.options) ? void 0 : a.metadata)
                    ? null == (s = this.options)
                      ? void 0
                      : s.metadata.url
                    : "",
                  icons: (null == (l = this.options) ? void 0 : l.metadata)
                    ? null == (c = this.options)
                      ? void 0
                      : c.metadata.icons
                    : [""],
                },
                logger: p,
              };
            T.OptionsController.setManualWCControl(
              !!(null == (d = this.options) ? void 0 : d.manualWCControl)
            ),
              (this.universalProvider =
                null != (C = this.options.universalProvider)
                  ? C
                  : await o.default.init(u)),
              !1 === T.OptionsController.state.enableReconnect &&
                this.universalProvider.session &&
                (await this.universalProvider.disconnect()),
              this.listenWalletConnect();
          }
          listenWalletConnect() {
            this.universalProvider &&
              this.chainNamespaces.forEach((e) => {
                Q.listenWcProvider({
                  universalProvider: this.universalProvider,
                  namespace: e,
                  onDisplayUri: (e) => {
                    v.ConnectionController.setUri(e);
                  },
                  onConnect: () => {
                    v.ConnectionController.finalizeWcConnection();
                  },
                  onDisconnect: () => {
                    u.ChainController.state.noAdapters && this.resetAccount(e),
                      v.ConnectionController.resetWcConnection();
                  },
                  onChainChanged: (t) => {
                    let n = u.ChainController.state.activeChain,
                      r =
                        n &&
                        g.ConnectorController.state.activeConnectorIds[n] ===
                          a.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT;
                    if (n === e && (u.ChainController.state.noAdapters || r)) {
                      let e = this.getCaipNetworks().find(
                          (e) =>
                            e.id.toString() === t.toString() ||
                            e.caipNetworkId.toString() === t.toString()
                        ),
                        n = this.getCaipNetwork();
                      if (!e) return void this.setUnsupportedNetwork(t);
                      (null == n ? void 0 : n.id.toString()) !==
                        (null == e ? void 0 : e.id.toString()) &&
                        (null == n ? void 0 : n.chainNamespace) ===
                          (null == e ? void 0 : e.chainNamespace) &&
                        this.setCaipNetwork(e);
                    }
                  },
                  onAccountsChanged: (t) => {
                    let n = u.ChainController.state.activeChain,
                      r =
                        n &&
                        g.ConnectorController.state.activeConnectorIds[n] ===
                          a.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT;
                    if (
                      n === e &&
                      (u.ChainController.state.noAdapters || r) &&
                      t.length > 0
                    ) {
                      let e = t[0];
                      this.syncAccount({
                        address: e.address,
                        chainId: e.chainId,
                        chainNamespace: e.chainNamespace,
                      });
                    }
                  },
                });
              });
          }
          createUniversalProvider() {
            var e;
            return (
              !this.universalProviderInitPromise &&
                w.CoreHelperUtil.isClient() &&
                (null == (e = this.options) ? void 0 : e.projectId) &&
                (this.universalProviderInitPromise =
                  this.initializeUniversalAdapter()),
              this.universalProviderInitPromise
            );
          }
          async getUniversalProvider() {
            if (!this.universalProvider)
              try {
                await this.createUniversalProvider();
              } catch (e) {
                E.EventsController.sendEvent({
                  type: "error",
                  event: "INTERNAL_SDK_ERROR",
                  properties: {
                    errorType: "UniversalProviderInitError",
                    errorMessage: e instanceof Error ? e.message : "Unknown",
                    uncaught: !1,
                  },
                }),
                  console.error(
                    "AppKit:getUniversalProvider - Cannot create provider",
                    e
                  );
              }
            return this.universalProvider;
          }
          handleAlertError(e) {
            let t = Object.entries(M.ErrorUtil.UniversalProviderErrors).find(
                (t) => {
                  let [, { message: n }] = t;
                  return e.message.includes(n);
                }
              ),
              [n, r] = null != t ? t : [],
              { message: i, alertErrorKey: o } = null != r ? r : {};
            if (n && i && !this.reportedAlertErrors[n]) {
              let e = M.ErrorUtil.ALERT_ERRORS[o];
              e &&
                (d.AlertController.open(e, "error"),
                (this.reportedAlertErrors[n] = !0));
            }
          }
          getAdapter(e) {
            var t;
            if (e) return null == (t = this.chainAdapters) ? void 0 : t[e];
          }
          createAdapter(e) {
            var t;
            if (!e) return;
            let n = e.namespace;
            n &&
              (this.createClients(),
              (e.namespace = n),
              e.construct({
                namespace: n,
                projectId: null == (t = this.options) ? void 0 : t.projectId,
                networks: this.getCaipNetworks(),
              }),
              this.chainNamespaces.includes(n) || this.chainNamespaces.push(n),
              this.chainAdapters && (this.chainAdapters[n] = e));
          }
          async open(e) {
            return (await this.injectModalUi(),
            (null == e ? void 0 : e.uri) &&
              v.ConnectionController.setUri(e.uri),
            (null == e ? void 0 : e.arguments) &&
              (null == e ? void 0 : e.view) === "Swap")
              ? f.ModalController.open({ ...e, data: { swap: e.arguments } })
              : f.ModalController.open(e);
          }
          async close() {
            await this.injectModalUi(), f.ModalController.close();
          }
          setLoading(e, t) {
            f.ModalController.setLoading(e, t);
          }
          async disconnect(e) {
            await v.ConnectionController.disconnect({ namespace: e });
          }
          getSIWX() {
            return T.OptionsController.state.siwx;
          }
          getError() {
            return "";
          }
          getChainId() {
            var e;
            return null == (e = u.ChainController.state.activeCaipNetwork)
              ? void 0
              : e.id;
          }
          async switchNetwork(e) {
            let t = this.getCaipNetworks().find((t) => t.id === e.id);
            if (!t)
              return void d.AlertController.open(
                M.ErrorUtil.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND,
                "error"
              );
            await u.ChainController.switchActiveNetwork(t);
          }
          getWalletProvider() {
            return u.ChainController.state.activeChain
              ? j.ProviderUtil.state.providers[
                  u.ChainController.state.activeChain
                ]
              : null;
          }
          getWalletProviderType() {
            return j.ProviderUtil.getProviderId(
              u.ChainController.state.activeChain
            );
          }
          subscribeProviders(e) {
            return j.ProviderUtil.subscribeProviders(e);
          }
          getThemeMode() {
            return S.ThemeController.state.themeMode;
          }
          getThemeVariables() {
            return S.ThemeController.state.themeVariables;
          }
          setThemeMode(e) {
            S.ThemeController.setThemeMode(e),
              (0, D.setColorTheme)(S.ThemeController.state.themeMode);
          }
          setTermsConditionsUrl(e) {
            T.OptionsController.setTermsConditionsUrl(e);
          }
          setPrivacyPolicyUrl(e) {
            T.OptionsController.setPrivacyPolicyUrl(e);
          }
          setThemeVariables(e) {
            S.ThemeController.setThemeVariables(e),
              (0, D.setThemeVariables)(S.ThemeController.state.themeVariables);
          }
          subscribeTheme(e) {
            return S.ThemeController.subscribe(e);
          }
          subscribeConnections(e) {
            return this.remoteFeatures.multiWallet
              ? v.ConnectionController.subscribe(e)
              : (d.AlertController.open(
                  a.ConstantsUtil.REMOTE_FEATURES_ALERTS
                    .MULTI_WALLET_NOT_ENABLED.DEFAULT,
                  "info"
                ),
                () => void 0);
          }
          getWalletInfo(e) {
            return e
              ? u.ChainController.getAccountProp("connectedWalletInfo", e)
              : c.AccountController.state.connectedWalletInfo;
          }
          getAccount(e) {
            let t = e || u.ChainController.state.activeChain,
              n = g.ConnectorController.getAuthConnector(t),
              r = u.ChainController.getAccountData(t),
              i = P.StorageUtil.getConnectedConnectorId(
                u.ChainController.state.activeChain
              ),
              o = v.ConnectionController.getConnections(t);
            if (!t) throw Error("AppKit:getAccount - namespace is required");
            let s = o.flatMap((e) =>
              e.accounts.map((e) => {
                let { address: n, type: r } = e;
                return w.CoreHelperUtil.createAccount(t, n, r || "eoa");
              })
            );
            if (r)
              return {
                allAccounts: s,
                caipAddress: r.caipAddress,
                address: w.CoreHelperUtil.getPlainAddress(r.caipAddress),
                isConnected: !!r.caipAddress,
                status: r.status,
                embeddedWalletInfo:
                  n && i === a.ConstantsUtil.CONNECTOR_ID.AUTH
                    ? {
                        user: r.user
                          ? {
                              ...r.user,
                              username:
                                P.StorageUtil.getConnectedSocialUsername(),
                            }
                          : void 0,
                        authProvider: r.socialProvider || "email",
                        accountType: (0, b.getPreferredAccountType)(t),
                        isSmartAccountDeployed: !!r.smartAccountDeployed,
                      }
                    : void 0,
              };
          }
          subscribeAccount(e, t) {
            let n = () => {
              let n = this.getAccount(t);
              n && e(n);
            };
            t
              ? u.ChainController.subscribeChainProp("accountState", n, t)
              : u.ChainController.subscribe(n),
              g.ConnectorController.subscribe(n);
          }
          subscribeNetwork(e) {
            return u.ChainController.subscribe((t) => {
              let { activeCaipNetwork: n } = t;
              e({
                caipNetwork: n,
                chainId: null == n ? void 0 : n.id,
                caipNetworkId: null == n ? void 0 : n.caipNetworkId,
              });
            });
          }
          subscribeWalletInfo(e, t) {
            return t
              ? c.AccountController.subscribeKey("connectedWalletInfo", e, t)
              : c.AccountController.subscribeKey("connectedWalletInfo", e);
          }
          subscribeShouldUpdateToAddress(e) {
            c.AccountController.subscribeKey("shouldUpdateToAddress", e);
          }
          subscribeCaipNetworkChange(e) {
            u.ChainController.subscribeKey("activeCaipNetwork", e);
          }
          getState() {
            return I.PublicStateController.state;
          }
          getRemoteFeatures() {
            return T.OptionsController.state.remoteFeatures;
          }
          subscribeState(e) {
            return I.PublicStateController.subscribe(e);
          }
          subscribeRemoteFeatures(e) {
            return T.OptionsController.subscribeKey("remoteFeatures", e);
          }
          showErrorMessage(e) {
            _.SnackController.showError(e);
          }
          showSuccessMessage(e) {
            _.SnackController.showSuccess(e);
          }
          getEvent() {
            return { ...E.EventsController.state };
          }
          subscribeEvents(e) {
            return E.EventsController.subscribe(e);
          }
          replace(e) {
            y.RouterController.replace(e);
          }
          redirect(e) {
            y.RouterController.push(e);
          }
          popTransactionStack(e) {
            y.RouterController.popTransactionStack(e);
          }
          isOpen() {
            return f.ModalController.state.open;
          }
          isTransactionStackEmpty() {
            return 0 === y.RouterController.state.transactionStack.length;
          }
          static getInstance() {
            return this.instance;
          }
          updateFeatures(e) {
            T.OptionsController.setFeatures(e);
          }
          updateRemoteFeatures(e) {
            T.OptionsController.setRemoteFeatures(e);
          }
          updateOptions(e) {
            let t = { ...(T.OptionsController.state || {}), ...e };
            T.OptionsController.setOptions(t);
          }
          setConnectMethodsOrder(e) {
            T.OptionsController.setConnectMethodsOrder(e);
          }
          setWalletFeaturesOrder(e) {
            T.OptionsController.setWalletFeaturesOrder(e);
          }
          setCollapseWallets(e) {
            T.OptionsController.setCollapseWallets(e);
          }
          setSocialsOrder(e) {
            T.OptionsController.setSocialsOrder(e);
          }
          getConnectMethodsOrder() {
            return L.WalletUtil.getConnectOrderMethod(
              T.OptionsController.state.features,
              g.ConnectorController.getConnectors()
            );
          }
          addNetwork(e, t) {
            if (this.chainAdapters && !this.chainAdapters[e])
              throw Error("Adapter for namespace ".concat(e, " doesn't exist"));
            let n = this.extendCaipNetwork(t, this.options);
            this.getCaipNetworks().find((e) => e.id === n.id) ||
              u.ChainController.addNetwork(n);
          }
          removeNetwork(e, t) {
            if (this.chainAdapters && !this.chainAdapters[e])
              throw Error("Adapter for namespace ".concat(e, " doesn't exist"));
            this.getCaipNetworks().find((e) => e.id === t) &&
              u.ChainController.removeNetwork(e, t);
          }
          constructor(e) {
            (this.chainNamespaces = []),
              (this.remoteFeatures = {}),
              (this.reportedAlertErrors = {}),
              (this.getCaipNetwork = (e, t) => {
                if (e) {
                  var n, r, i;
                  let o =
                    null == (n = u.ChainController.getCaipNetworks(e))
                      ? void 0
                      : n.find((e) => e.id === t);
                  if (o) return o;
                  let a =
                    null == (r = u.ChainController.getNetworkData(e))
                      ? void 0
                      : r.caipNetwork;
                  return (
                    a ||
                    (null ==
                    (i = u.ChainController.getRequestedCaipNetworks(e).filter(
                      (t) => t.chainNamespace === e
                    ))
                      ? void 0
                      : i[0])
                  );
                }
                return (
                  u.ChainController.state.activeCaipNetwork ||
                  this.defaultCaipNetwork
                );
              }),
              (this.getCaipNetworkId = () => {
                let e = this.getCaipNetwork();
                if (e) return e.id;
              }),
              (this.getCaipNetworks = (e) =>
                u.ChainController.getCaipNetworks(e)),
              (this.getActiveChainNamespace = () =>
                u.ChainController.state.activeChain),
              (this.setRequestedCaipNetworks = (e, t) => {
                u.ChainController.setRequestedCaipNetworks(e, t);
              }),
              (this.getApprovedCaipNetworkIds = () =>
                u.ChainController.getAllApprovedCaipNetworkIds()),
              (this.getCaipAddress = (e) =>
                u.ChainController.state.activeChain !== e && e
                  ? u.ChainController.getAccountProp("caipAddress", e)
                  : u.ChainController.state.activeCaipAddress),
              (this.setClientId = (e) => {
                p.BlockchainApiController.setClientId(e);
              }),
              (this.getProvider = (e) => j.ProviderUtil.getProvider(e)),
              (this.getProviderType = (e) => j.ProviderUtil.getProviderId(e)),
              (this.getPreferredAccountType = (e) =>
                (0, b.getPreferredAccountType)(e)),
              (this.setCaipAddress = (e, t) => {
                c.AccountController.setCaipAddress(e, t);
              }),
              (this.setBalance = (e, t, n) => {
                c.AccountController.setBalance(e, t, n);
              }),
              (this.setProfileName = (e, t) => {
                c.AccountController.setProfileName(e, t);
              }),
              (this.setProfileImage = (e, t) => {
                c.AccountController.setProfileImage(e, t);
              }),
              (this.setUser = (e, t) => {
                c.AccountController.setUser(e, t);
              }),
              (this.resetAccount = (e) => {
                c.AccountController.resetAccount(e);
              }),
              (this.setCaipNetwork = (e) => {
                u.ChainController.setActiveCaipNetwork(e);
              }),
              (this.setCaipNetworkOfNamespace = (e, t) => {
                u.ChainController.setChainNetworkData(t, { caipNetwork: e });
              }),
              (this.setStatus = (e, t) => {
                c.AccountController.setStatus(e, t),
                  g.ConnectorController.isConnected()
                    ? P.StorageUtil.setConnectionStatus("connected")
                    : P.StorageUtil.setConnectionStatus("disconnected");
              }),
              (this.getAddressByChainNamespace = (e) =>
                u.ChainController.getAccountProp("address", e)),
              (this.setConnectors = (e) => {
                let t = [...g.ConnectorController.state.allConnectors, ...e];
                g.ConnectorController.setConnectors(t);
              }),
              (this.setConnections = (e, t) => {
                P.StorageUtil.setConnections(e, t),
                  v.ConnectionController.setConnections(e, t);
              }),
              (this.fetchIdentity = (e) =>
                p.BlockchainApiController.fetchIdentity(e)),
              (this.getReownName = (e) =>
                A.EnsController.getNamesForAddress(e)),
              (this.getConnectors = () =>
                g.ConnectorController.getConnectors()),
              (this.getConnectorImage = (e) =>
                h.AssetUtil.getConnectorImage(e)),
              (this.getConnections = (e) =>
                this.remoteFeatures.multiWallet
                  ? m.ConnectionControllerUtil.getConnectionsData(e).connections
                  : (d.AlertController.open(
                      a.ConstantsUtil.REMOTE_FEATURES_ALERTS
                        .MULTI_WALLET_NOT_ENABLED.DEFAULT,
                      "info"
                    ),
                    [])),
              (this.getRecentConnections = (e) =>
                this.remoteFeatures.multiWallet
                  ? m.ConnectionControllerUtil.getConnectionsData(e)
                      .recentConnections
                  : (d.AlertController.open(
                      a.ConstantsUtil.REMOTE_FEATURES_ALERTS
                        .MULTI_WALLET_NOT_ENABLED.DEFAULT,
                      "info"
                    ),
                    [])),
              (this.switchConnection = async (e) => {
                if (!this.remoteFeatures.multiWallet)
                  return void d.AlertController.open(
                    a.ConstantsUtil.REMOTE_FEATURES_ALERTS
                      .MULTI_WALLET_NOT_ENABLED.DEFAULT,
                    "info"
                  );
                await v.ConnectionController.switchConnection(e);
              }),
              (this.deleteConnection = (e) => {
                if (!this.remoteFeatures.multiWallet)
                  return void d.AlertController.open(
                    a.ConstantsUtil.REMOTE_FEATURES_ALERTS
                      .MULTI_WALLET_NOT_ENABLED.DEFAULT,
                    "info"
                  );
                P.StorageUtil.deleteAddressFromConnection(e),
                  v.ConnectionController.syncStorageConnections();
              }),
              (this.setConnectedWalletInfo = (e, t) => {
                let n = j.ProviderUtil.getProviderId(t),
                  r = e ? { ...e, type: n } : void 0;
                c.AccountController.setConnectedWalletInfo(r, t);
              }),
              (this.getIsConnectedState = () =>
                !!u.ChainController.state.activeCaipAddress),
              (this.addAddressLabel = (e, t, n) => {
                c.AccountController.addAddressLabel(e, t, n);
              }),
              (this.removeAddressLabel = (e, t) => {
                c.AccountController.removeAddressLabel(e, t);
              }),
              (this.getAddress = (e) =>
                u.ChainController.state.activeChain !== e && e
                  ? u.ChainController.getAccountProp("address", e)
                  : c.AccountController.state.address),
              (this.setApprovedCaipNetworksData = (e) =>
                u.ChainController.setApprovedCaipNetworksData(e)),
              (this.resetNetwork = (e) => {
                u.ChainController.resetNetwork(e);
              }),
              (this.addConnector = (e) => {
                g.ConnectorController.addConnector(e);
              }),
              (this.resetWcConnection = () => {
                v.ConnectionController.resetWcConnection();
              }),
              (this.setAddressExplorerUrl = (e, t) => {
                c.AccountController.setAddressExplorerUrl(e, t);
              }),
              (this.setSmartAccountDeployed = (e, t) => {
                c.AccountController.setSmartAccountDeployed(e, t);
              }),
              (this.setPreferredAccountType = (e, t) => {
                u.ChainController.setAccountProp("preferredAccountType", e, t);
              }),
              (this.setEIP6963Enabled = (e) => {
                T.OptionsController.setEIP6963Enabled(e);
              }),
              (this.handleUnsafeRPCRequest = () => {
                this.isOpen()
                  ? this.isTransactionStackEmpty() ||
                    this.redirect("ApproveTransaction")
                  : this.open({ view: "ApproveTransaction" });
              }),
              (this.options = e),
              (this.version = e.sdkVersion),
              (this.caipNetworks = this.extendCaipNetworks(e)),
              (this.chainNamespaces = this.getChainNamespacesSet(
                e.adapters,
                this.caipNetworks
              )),
              (this.defaultCaipNetwork = this.extendDefaultCaipNetwork(e)),
              (this.chainAdapters = this.createAdapters(e.adapters)),
              (this.readyPromise = this.initialize(e));
          }
        }
        e.s({ AppKit: () => eu }, 931951);
        var ed = e.i(586196),
          eC = e.i(196779),
          eh = e.i(664572);
        let ep = !1;
        class eu extends ec {
          async onAuthProviderConnected(e) {
            e.message &&
              e.signature &&
              e.siwxMessage &&
              (await O.SIWXUtil.addEmbeddedWalletSession(
                {
                  chainId: e.siwxMessage.chainId,
                  accountAddress: e.address,
                  notBefore: e.siwxMessage.notBefore,
                  statement: e.siwxMessage.statement,
                  resources: e.siwxMessage.resources,
                  requestId: e.siwxMessage.requestId,
                  issuedAt: e.siwxMessage.issuedAt,
                  domain: e.siwxMessage.domain,
                  uri: e.siwxMessage.uri,
                  version: e.siwxMessage.version,
                  nonce: e.siwxMessage.nonce,
                },
                e.message,
                e.signature
              ));
            let t = u.ChainController.state.activeChain;
            if (!t)
              throw Error(
                "AppKit:onAuthProviderConnected - namespace is required"
              );
            let n =
                t === a.ConstantsUtil.CHAIN.EVM
                  ? "eip155:".concat(e.chainId, ":").concat(e.address)
                  : "".concat(e.chainId, ":").concat(e.address),
              r = T.OptionsController.state.defaultAccountTypes[t],
              i = (0, b.getPreferredAccountType)(t),
              o = e.preferredAccountType || i || r;
            F.HelpersUtil.isLowerCaseMatch(
              e.address,
              c.AccountController.state.address
            ) ||
              this.syncIdentity({
                address: e.address,
                chainId: e.chainId,
                chainNamespace: t,
              }),
              this.setCaipAddress(n, t);
            let { signature: s, siwxMessage: l, message: d, ...C } = e;
            this.setUser(
              { ...(c.AccountController.state.user || {}), ...C },
              t
            ),
              this.setSmartAccountDeployed(!!e.smartAccountDeployed, t),
              this.setPreferredAccountType(o, t),
              this.setLoading(!1, t);
          }
          setupAuthConnectorListeners(e) {
            e.onRpcRequest((t) => {
              eC.W3mFrameHelpers.checkIfRequestExists(t)
                ? eC.W3mFrameHelpers.checkIfRequestIsSafe(t) ||
                  this.handleUnsafeRPCRequest()
                : (this.open(),
                  console.error(
                    eh.W3mFrameRpcConstants.RPC_METHOD_NOT_ALLOWED_MESSAGE,
                    { method: t.method }
                  ),
                  setTimeout(() => {
                    this.showErrorMessage(
                      eh.W3mFrameRpcConstants.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE
                    );
                  }, 300),
                  e.rejectRpcRequests());
            }),
              e.onRpcError(() => {
                this.isOpen() &&
                  (this.isTransactionStackEmpty()
                    ? this.close()
                    : this.popTransactionStack("error"));
              }),
              e.onRpcSuccess((e, t) => {
                let n = eC.W3mFrameHelpers.checkIfRequestIsSafe(t),
                  r = c.AccountController.state.address,
                  i = u.ChainController.state.activeCaipNetwork;
                n ||
                  (r &&
                    (null == i ? void 0 : i.id) &&
                    this.updateNativeBalance(r, i.id, i.chainNamespace),
                  this.isTransactionStackEmpty()
                    ? this.close()
                    : this.popTransactionStack("success"));
              }),
              e.onNotConnected(() => {
                let e = u.ChainController.state.activeChain;
                if (!e)
                  throw Error("AppKit:onNotConnected - namespace is required");
                g.ConnectorController.getConnectorId(e) ===
                  a.ConstantsUtil.CONNECTOR_ID.AUTH &&
                  (this.setCaipAddress(void 0, e), this.setLoading(!1, e));
              }),
              e.onConnect(this.onAuthProviderConnected.bind(this)),
              e.onSocialConnected(this.onAuthProviderConnected.bind(this)),
              e.onSetPreferredAccount((e) => {
                let { address: t, type: n } = e,
                  r = u.ChainController.state.activeChain;
                if (!r)
                  throw Error(
                    "AppKit:onSetPreferredAccount - namespace is required"
                  );
                t && this.setPreferredAccountType(n, r);
              });
          }
          async syncAuthConnectorTheme(e) {
            if (!e) return;
            let t = S.ThemeController.getSnapshot(),
              n = T.OptionsController.getSnapshot();
            await Promise.all([
              e.syncDappData({
                metadata: n.metadata,
                sdkVersion: n.sdkVersion,
                projectId: n.projectId,
                sdkType: n.sdkType,
              }),
              e.syncTheme({
                themeMode: t.themeMode,
                themeVariables: t.themeVariables,
                w3mThemeVariables: (0, ed.getW3mThemeVariables)(
                  t.themeVariables,
                  t.themeMode
                ),
              }),
            ]);
          }
          async syncAuthConnector(e, t) {
            var n, r, i, o;
            let s = a.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(t),
              l = t === u.ChainController.state.activeChain;
            if (!s) return;
            this.setLoading(!0, t);
            let d = e.getLoginEmailUsed();
            this.setLoading(d, t), d && this.setStatus("connecting", t);
            let C = e.getEmail(),
              h = e.getUsername();
            this.setUser(
              {
                ...((null == (n = c.AccountController.state)
                  ? void 0
                  : n.user) || {}),
                username: h,
                email: C,
              },
              t
            ),
              this.setupAuthConnectorListeners(e);
            let { isConnected: p } = await e.isConnected();
            if ((await this.syncAuthConnectorTheme(e), t && s && l)) {
              let n = await e.getSmartAccountEnabledNetworks();
              u.ChainController.setSmartAccountEnabledNetworks(
                (null == n ? void 0 : n.smartAccountEnabledNetworks) || [],
                t
              ),
                p &&
                (null == (r = this.connectionControllerClient)
                  ? void 0
                  : r.connectExternal)
                  ? (await (null == (o = this.connectionControllerClient)
                      ? void 0
                      : o.connectExternal({
                          id: a.ConstantsUtil.CONNECTOR_ID.AUTH,
                          info: { name: a.ConstantsUtil.CONNECTOR_ID.AUTH },
                          type: B.ConstantsUtil.CONNECTOR_TYPE_AUTH,
                          provider: e,
                          chainId:
                            null ==
                            (i = u.ChainController.state.activeCaipNetwork)
                              ? void 0
                              : i.id,
                          chain: t,
                        })),
                    this.setStatus("connected", t))
                  : g.ConnectorController.getConnectorId(t) ===
                      a.ConstantsUtil.CONNECTOR_ID.AUTH &&
                    (this.setStatus("disconnected", t),
                    P.StorageUtil.removeConnectedNamespace(t));
            }
            this.setLoading(!1, t);
          }
          async checkExistingTelegramSocialConnection(e) {
            try {
              var t, n;
              if (!w.CoreHelperUtil.isTelegram()) return;
              let r = P.StorageUtil.getTelegramSocialProvider();
              if (!r || !w.CoreHelperUtil.isClient()) return;
              let i = new URL(window.location.href).searchParams.get(
                "result_uri"
              );
              if (!i) return;
              c.AccountController.setSocialProvider(r, e),
                await (null == (t = this.authProvider) ? void 0 : t.init());
              let o = g.ConnectorController.getAuthConnector();
              r &&
                o &&
                (this.setLoading(!0, e),
                await v.ConnectionController.connectExternal(
                  { id: o.id, type: o.type, socialUri: i },
                  o.chain
                ),
                P.StorageUtil.setConnectedSocialProvider(r),
                P.StorageUtil.removeTelegramSocialProvider(),
                E.EventsController.sendEvent({
                  type: "track",
                  event: "SOCIAL_LOGIN_SUCCESS",
                  properties: {
                    provider: r,
                    caipNetworkId:
                      null == (n = u.ChainController.getActiveCaipNetwork())
                        ? void 0
                        : n.caipNetworkId,
                  },
                }));
            } catch (t) {
              this.setLoading(!1, e),
                console.error("checkExistingSTelegramocialConnection error", t);
            }
            try {
              let e = new URL(window.location.href);
              e.searchParams.delete("result_uri"),
                window.history.replaceState({}, document.title, e.toString());
            } catch (e) {
              console.error("tma social login failed", e);
            }
          }
          createAuthProvider(e) {
            var t, n, r, o;
            if (!a.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(e))
              return;
            let s = null == (t = this.remoteFeatures) ? void 0 : t.email,
              l =
                Array.isArray(
                  null == (n = this.remoteFeatures) ? void 0 : n.socials
                ) && this.remoteFeatures.socials.length > 0,
              c = F.HelpersUtil.getActiveNamespaceConnectedToAuth() || e;
            !this.authProvider &&
              (null == (r = this.options) ? void 0 : r.projectId) &&
              (s || l) &&
              ((this.authProvider = i.getInstance({
                projectId: this.options.projectId,
                enableLogger: this.options.enableAuthLogger,
                chainId:
                  null == (o = this.getCaipNetwork(c))
                    ? void 0
                    : o.caipNetworkId,
                abortController: M.ErrorUtil.EmbeddedWalletAbortController,
                onTimeout: (e) => {
                  "iframe_load_failed" === e
                    ? d.AlertController.open(
                        M.ErrorUtil.ALERT_ERRORS.IFRAME_LOAD_FAILED,
                        "error"
                      )
                    : "iframe_request_timeout" === e
                    ? d.AlertController.open(
                        M.ErrorUtil.ALERT_ERRORS.IFRAME_REQUEST_TIMEOUT,
                        "error"
                      )
                    : "unverified_domain" === e &&
                      d.AlertController.open(
                        M.ErrorUtil.ALERT_ERRORS.UNVERIFIED_DOMAIN,
                        "error"
                      );
                },
                getActiveCaipNetwork: (e) =>
                  u.ChainController.getActiveCaipNetwork(e),
              })),
              I.PublicStateController.subscribeOpen((e) => {
                if (!e && this.isTransactionStackEmpty()) {
                  var t;
                  null == (t = this.authProvider) || t.rejectRpcRequests();
                }
              }));
            let C =
              e === u.ChainController.state.activeChain &&
              T.OptionsController.state.enableReconnect;
            !1 === T.OptionsController.state.enableReconnect
              ? this.syncAuthConnectorTheme(this.authProvider)
              : this.authProvider &&
                C &&
                (this.syncAuthConnector(this.authProvider, e),
                this.checkExistingTelegramSocialConnection(e));
          }
          createAuthProviderForAdapter(e) {
            if ((this.createAuthProvider(e), this.authProvider)) {
              var t, n, r;
              null == (r = this.chainAdapters) ||
                null == (n = r[e]) ||
                null == (t = n.setAuthProvider) ||
                t.call(n, this.authProvider);
            }
          }
          initControllers(e) {
            super.initControllers(e),
              this.options.excludeWalletIds &&
                C.ApiController.initializeExcludedWallets({
                  ids: this.options.excludeWalletIds,
                });
          }
          async switchCaipNetwork(e) {
            if (!e) return;
            let t = u.ChainController.state.activeChain,
              n = e.chainNamespace,
              r = this.getAddressByChainNamespace(n);
            if (n === t && r) {
              let t = this.getAdapter(n),
                r = j.ProviderUtil.getProvider(n),
                i = j.ProviderUtil.getProviderId(n);
              await (null == t
                ? void 0
                : t.switchNetwork({
                    caipNetwork: e,
                    provider: r,
                    providerType: i,
                  })),
                this.setCaipNetwork(e);
            } else {
              let s =
                  j.ProviderUtil.getProviderId(t) ===
                  B.ConstantsUtil.CONNECTOR_TYPE_AUTH,
                l = j.ProviderUtil.getProviderId(n),
                c = l === B.ConstantsUtil.CONNECTOR_TYPE_AUTH,
                d = a.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(n);
              if (!n)
                throw Error(
                  "AppKit:switchCaipNetwork - networkNamespace is required"
                );
              if (((s && void 0 === l) || c) && d)
                try {
                  if (
                    ((u.ChainController.state.activeChain = e.chainNamespace),
                    r)
                  ) {
                    let t = this.getAdapter(n);
                    await (null == t
                      ? void 0
                      : t.switchNetwork({
                          caipNetwork: e,
                          provider: this.authProvider,
                          providerType: l,
                        }));
                  } else {
                    var i, o;
                    await (null == (o = this.connectionControllerClient) ||
                    null == (i = o.connectExternal)
                      ? void 0
                      : i.call(o, {
                          id: a.ConstantsUtil.CONNECTOR_ID.AUTH,
                          provider: this.authProvider,
                          chain: n,
                          chainId: e.id,
                          type: B.ConstantsUtil.CONNECTOR_TYPE_AUTH,
                          caipNetwork: e,
                        }));
                  }
                  this.setCaipNetwork(e);
                } catch (r) {
                  let t = this.getAdapter(n);
                  await (null == t
                    ? void 0
                    : t.switchNetwork({
                        caipNetwork: e,
                        provider: this.authProvider,
                        providerType: l,
                      }));
                }
              else if (l === B.ConstantsUtil.CONNECTOR_TYPE_WALLET_CONNECT) {
                if (!u.ChainController.state.noAdapters) {
                  let t = this.getAdapter(n),
                    r = j.ProviderUtil.getProvider(n),
                    i = j.ProviderUtil.getProviderId(n);
                  await (null == t
                    ? void 0
                    : t.switchNetwork({
                        caipNetwork: e,
                        provider: r,
                        providerType: i,
                      }));
                }
                this.setCaipNetwork(e), this.syncWalletConnectAccount();
              } else
                this.setCaipNetwork(e),
                  r &&
                    this.syncAccount({
                      address: r,
                      chainId: e.id,
                      chainNamespace: n,
                    });
            }
          }
          async initialize(e) {
            var t;
            await super.initialize(e),
              null == (t = this.chainNamespaces) ||
                t.forEach((e) => {
                  this.createAuthProviderForAdapter(e);
                }),
              await this.injectModalUi(),
              I.PublicStateController.set({ initialized: !0 });
          }
          async syncIdentity(e) {
            var t;
            let { address: n, chainId: r, chainNamespace: i } = e,
              o = "".concat(i, ":").concat(r),
              s =
                null == (t = this.caipNetworks)
                  ? void 0
                  : t.find((e) => e.caipNetworkId === o);
            if (
              i !== a.ConstantsUtil.CHAIN.EVM ||
              (null == s ? void 0 : s.testnet)
            ) {
              this.setProfileName(null, i), this.setProfileImage(null, i);
              return;
            }
            try {
              let { name: e, avatar: t } = await this.fetchIdentity({
                address: n,
                caipNetworkId: o,
              });
              this.setProfileName(e, i), this.setProfileImage(t, i);
            } catch (e) {
              await this.syncReownName(n, i),
                1 !== r && this.setProfileImage(null, i);
            }
          }
          syncConnectedWalletInfo(e) {
            let t = j.ProviderUtil.getProviderId(e);
            if (t === B.ConstantsUtil.CONNECTOR_TYPE_AUTH) {
              let i = this.authProvider;
              if (i) {
                var n, r;
                let o =
                    null != (n = P.StorageUtil.getConnectedSocialProvider())
                      ? n
                      : "email",
                  a = null != (r = i.getEmail()) ? r : i.getUsername();
                this.setConnectedWalletInfo(
                  { name: t, identifier: a, social: o },
                  e
                );
              }
            } else super.syncConnectedWalletInfo(e);
          }
          async injectModalUi() {
            if (w.CoreHelperUtil.isClient() && !ep)
              try {
                let e = {
                    ...N.ConstantsUtil.DEFAULT_FEATURES,
                    ...this.options.features,
                  },
                  t = this.remoteFeatures;
                if (
                  (await this.loadModalComponents(e, t),
                  w.CoreHelperUtil.isClient() &&
                    !document.querySelector("w3m-modal"))
                ) {
                  let e = document.createElement("w3m-modal");
                  T.OptionsController.state.disableAppend ||
                    T.OptionsController.state.enableEmbedded ||
                    document.body.insertAdjacentElement("beforeend", e);
                }
                ep = !0;
              } catch (e) {
                console.error("Error injecting modal UI:", e);
              }
          }
          async loadModalComponents(t, n) {
            if (!w.CoreHelperUtil.isClient()) return;
            let r = [];
            (n.email || (n.socials && n.socials.length > 0)) &&
              r.push(e.r(263400)(e.i)),
              n.email && r.push(e.r(471814)(e.i)),
              n.socials && r.push(e.r(487920)(e.i)),
              n.swaps && n.swaps.length > 0 && r.push(e.r(304594)(e.i)),
              t.send && r.push(e.r(808543)(e.i)),
              t.receive && r.push(e.r(712742)(e.i)),
              n.onramp && n.onramp.length > 0 && r.push(e.r(766409)(e.i)),
              n.activity && r.push(e.r(237538)(e.i)),
              t.pay && r.push(e.r(240747)(e.i)),
              await Promise.all([...r, e.r(23402)(e.i), e.r(540014)(e.i)]);
          }
        }
        var ev = e.i(838653);
        e.s(
          {
            getAppKit: () => eE,
            useAppKit: () => eU,
            useAppKitProvider: () => ef,
          },
          171096
        );
        var em = e.i(799145),
          eg = e.i(724233);
        let eN = {
            get url() {
              return `file://${e.P("node_modules/valtio/esm/react.mjs")}`;
            },
          },
          ew = new WeakMap();
        function eA(e, t) {
          let n = null == t ? void 0 : t.sync,
            r = (0, ev.useMemo)(() => e && new WeakMap(), [e]),
            i = (0, ev.useRef)(void 0),
            o = !0,
            a = (0, ev.useSyncExternalStore)(
              (0, ev.useCallback)(
                (t) => {
                  let r = (0, eg.subscribe)(e, t, n);
                  return t(), r;
                },
                [e, n]
              ),
              () => {
                let t = (0, eg.snapshot)(e);
                try {
                  if (
                    !o &&
                    i.current &&
                    !(0, em.isChanged)(i.current, t, r, new WeakMap())
                  )
                    return i.current;
                } catch (e) {}
                return t;
              },
              () => (0, eg.snapshot)(e)
            );
          (o = !1),
            (0, ev.useLayoutEffect)(() => {
              i.current = a;
            }),
            (eN.env ? eN.env.MODE : void 0) !== "production" &&
              ((e, t) => {
                let n = (0, ev.useRef)(void 0);
                (0, ev.useEffect)(() => {
                  n.current = (0, em.affectedToPathList)(e, t, !0);
                }),
                  (0, ev.useDebugValue)(n.current);
              })(a, r);
          let s = (0, ev.useMemo)(() => new WeakMap(), []);
          return (0, em.createProxy)(a, r, s, ew);
        }
        function eE(e) {
          e && (t = e);
        }
        function ef(e) {
          let { providers: t, providerIds: n } = eA(j.ProviderUtil.state);
          return { walletProvider: t[e], walletProviderType: n[e] };
        }
        function eU() {
          if (!t)
            throw Error(
              'Please call "createAppKit" before using "useAppKit" hook'
            );
          return {
            open: async function (e) {
              await (null == t ? void 0 : t.open(e));
            },
            close: async function () {
              await (null == t ? void 0 : t.close());
            },
          };
        }
        async function eT(e) {
          if (!e)
            throw Error(
              "AppKit not initialized when  fetchBalance was called."
            );
          return await eI(e);
        }
        async function eI(e) {
          var t;
          let n = e.getAddress(),
            r = e.getActiveChainNamespace(),
            i = null == (t = e.getCaipNetwork()) ? void 0 : t.id;
          if (!n || !r || !i)
            return {
              data: void 0,
              error: "Not able to retrieve balance",
              isSuccess: !1,
              isError: !0,
            };
          let o = await e.updateNativeBalance(n, i, r);
          return {
            data: o,
            error: o ? null : "No balance found",
            isSuccess: !!o,
            isError: !o,
          };
        }
        e.s({ PACKAGE_VERSION: () => ey }, 747496);
        let ey = "1.7.15";
        function eO() {
          let { activeCaipNetwork: e } = eA(u.ChainController.state);
          return {
            caipNetwork: e,
            chainId: null == e ? void 0 : e.id,
            caipNetworkId: null == e ? void 0 : e.caipNetworkId,
          };
        }
        function ek(e) {
          var t;
          let n = eA(u.ChainController.state),
            { activeConnectorIds: r } = eA(g.ConnectorController.state),
            i = (null == e ? void 0 : e.namespace) || n.activeChain;
          if (!i)
            return {
              allAccounts: [],
              address: void 0,
              caipAddress: void 0,
              status: void 0,
              isConnected: !1,
              embeddedWalletInfo: void 0,
            };
          let o = null == (t = n.chains.get(i)) ? void 0 : t.accountState,
            s = g.ConnectorController.getAuthConnector(i),
            l = r[i];
          return {
            allAccounts: v.ConnectionController.getConnections(i).flatMap((e) =>
              e.accounts.map((e) => {
                let { address: t } = e;
                return w.CoreHelperUtil.createAccount(i, t, "eoa");
              })
            ),
            caipAddress: null == o ? void 0 : o.caipAddress,
            address: w.CoreHelperUtil.getPlainAddress(
              null == o ? void 0 : o.caipAddress
            ),
            isConnected: !!(null == o ? void 0 : o.caipAddress),
            status: null == o ? void 0 : o.status,
            embeddedWalletInfo:
              s && l === a.ConstantsUtil.CONNECTOR_ID.AUTH
                ? {
                    user: (null == o ? void 0 : o.user)
                      ? {
                          ...o.user,
                          username: P.StorageUtil.getConnectedSocialUsername(),
                        }
                      : void 0,
                    authProvider:
                      (null == o ? void 0 : o.socialProvider) || "email",
                    accountType: null == o ? void 0 : o.preferredAccountType,
                    isSmartAccountDeployed: !!(null == o
                      ? void 0
                      : o.smartAccountDeployed),
                  }
                : void 0,
          };
        }
        function e_() {
          return {
            disconnect: async function (e) {
              await v.ConnectionController.disconnect(e);
            },
          };
        }
        function eP(e) {
          if (!n) {
            var t;
            eE(
              (n = new eu({
                ...e,
                sdkVersion: w.CoreHelperUtil.generateSdkVersion(
                  null != (t = e.adapters) ? t : [],
                  "react",
                  ey
                ),
              }))
            );
          }
          return n;
        }
        function eS() {
          let { caipNetwork: e, caipNetworkId: t, chainId: r } = eO();
          return {
            caipNetwork: e,
            caipNetworkId: t,
            chainId: r,
            switchNetwork: function (e) {
              null == n || n.switchNetwork(e);
            },
          };
        }
        function eb() {
          return {
            fetchBalance: async function () {
              return await eT(n);
            },
          };
        }
        e.s(
          {
            createAppKit: () => eP,
            useAppKitBalance: () => eb,
            useAppKitNetwork: () => eS,
          },
          100615
        ),
          e.s(
            {
              useAppKitAccount: () => ek,
              useAppKitNetworkCore: () => eO,
              useDisconnect: () => e_,
            },
            266119
          ),
          e.i(245429);
      },
      [
        76598, 968347, 954248, 386192, 446322, 938794, 488064, 640815, 931951,
        198049, 171096, 747496, 266119, 100615,
      ],
    ],
  },
]);

//# sourceMappingURL=33bf61d26d5a08b3.js.map
