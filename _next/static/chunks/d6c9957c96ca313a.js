(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    366293: [
      (e) => {
        "use strict";
        let t;
        e.s({ ConnectorUtil: () => m }, 366293);
        var r,
          a,
          n = e.i(850524),
          o = e.i(592787),
          s = e.i(17038),
          c = e.i(659863),
          l = e.i(936598),
          i = e.i(775078),
          d = e.i(610411),
          u = e.i(55931);
        e.s({ HelpersUtil: () => f }, 162966);
        var p = e.i(674571);
        let f = {
          getCaipTokens(e) {
            if (!e) return;
            let t = {};
            return (
              Object.entries(e).forEach((e) => {
                let [r, a] = e;
                t["".concat(p.ConstantsUtil.EIP155, ":").concat(r)] = a;
              }),
              t
            );
          },
          isLowerCaseMatch: (e, t) =>
            (null == e ? void 0 : e.toLowerCase()) ===
            (null == t ? void 0 : t.toLowerCase()),
          getActiveNamespaceConnectedToAuth() {
            let e = s.ChainController.state.activeChain;
            return n.ConstantsUtil.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(
              (t) =>
                l.ConnectorController.getConnectorId(t) ===
                  n.ConstantsUtil.CONNECTOR_ID.AUTH && t === e
            );
          },
          withRetry(e) {
            let { conditionFn: t, intervalMs: r, maxRetries: a } = e,
              n = 0;
            return new Promise((e) => {
              async function o() {
                return ((n += 1), await t())
                  ? e(!0)
                  : n >= a
                  ? e(!1)
                  : (setTimeout(o, r), null);
              }
              o();
            });
          },
        };
        e.s({ WalletUtil: () => h }, 589851);
        var b = e.i(597304);
        let h = {
            filterOutDuplicatesByRDNS(e) {
              let t = d.OptionsController.state.enableEIP6963
                  ? l.ConnectorController.state.connectors
                  : [],
                r = u.StorageUtil.getRecentWallets(),
                a = t
                  .map((e) => {
                    var t;
                    return null == (t = e.info) ? void 0 : t.rdns;
                  })
                  .filter(Boolean),
                n = r.map((e) => e.rdns).filter(Boolean),
                o = a.concat(n);
              if (
                o.includes("io.metamask.mobile") &&
                i.CoreHelperUtil.isMobile()
              ) {
                let e = o.indexOf("io.metamask.mobile");
                o[e] = "io.metamask";
              }
              return e.filter(
                (e) =>
                  !(
                    ((null == e ? void 0 : e.rdns) &&
                      o.includes(String(e.rdns))) ||
                    (!(null == e ? void 0 : e.rdns) &&
                      t.some((t) => t.name === e.name))
                  ) && !0
              );
            },
            filterOutDuplicatesByIds(e) {
              let t = l.ConnectorController.state.connectors.filter(
                  (e) => "ANNOUNCED" === e.type || "INJECTED" === e.type
                ),
                r = u.StorageUtil.getRecentWallets(),
                a = t.map((e) => e.explorerId),
                n = r.map((e) => e.id),
                o = a.concat(n);
              return e.filter((e) => !o.includes(null == e ? void 0 : e.id));
            },
            filterOutDuplicateWallets(e) {
              let t = this.filterOutDuplicatesByRDNS(e);
              return this.filterOutDuplicatesByIds(t);
            },
            markWalletsAsInstalled(e) {
              let { connectors: t } = l.ConnectorController.state,
                { featuredWalletIds: r } = d.OptionsController.state,
                a = t
                  .filter((e) => "ANNOUNCED" === e.type)
                  .reduce((e, t) => {
                    var r;
                    return (
                      (null == (r = t.info) ? void 0 : r.rdns) &&
                        (e[t.info.rdns] = !0),
                      e
                    );
                  }, {});
              return e
                .map((e) => {
                  var t;
                  return {
                    ...e,
                    installed: !!e.rdns && !!a[null != (t = e.rdns) ? t : ""],
                  };
                })
                .sort((e, t) => {
                  let a = Number(t.installed) - Number(e.installed);
                  if (0 !== a) return a;
                  if (null == r ? void 0 : r.length) {
                    let a = r.indexOf(e.id),
                      n = r.indexOf(t.id);
                    if (-1 !== a && -1 !== n) return a - n;
                    if (-1 !== a) return -1;
                    if (-1 !== n) return 1;
                  }
                  return 0;
                });
            },
            getConnectOrderMethod(e, t) {
              var r;
              let a =
                  (null == e ? void 0 : e.connectMethodsOrder) ||
                  (null == (r = d.OptionsController.state.features)
                    ? void 0
                    : r.connectMethodsOrder),
                n = t || l.ConnectorController.state.connectors;
              if (a) return a;
              let { injected: s, announced: c } = m.getConnectorsByType(
                  n,
                  o.ApiController.state.recommended,
                  o.ApiController.state.featured
                ),
                i = s.filter(m.showConnector),
                u = c.filter(m.showConnector);
              return i.length || u.length
                ? ["wallet", "email", "social"]
                : b.ConstantsUtil.DEFAULT_CONNECT_METHOD_ORDER;
            },
            isExcluded(e) {
              let t =
                  !!e.rdns &&
                  o.ApiController.state.excludedWallets.some(
                    (t) => t.rdns === e.rdns
                  ),
                r =
                  !!e.name &&
                  o.ApiController.state.excludedWallets.some((t) =>
                    f.isLowerCaseMatch(t.name, e.name)
                  );
              return t || r;
            },
          },
          m = {
            getConnectorsByType(e, t, r) {
              let { customWallets: a } = d.OptionsController.state,
                n = u.StorageUtil.getRecentWallets(),
                o = h.filterOutDuplicateWallets(t),
                s = h.filterOutDuplicateWallets(r),
                c = e.filter((e) => "MULTI_CHAIN" === e.type),
                l = e.filter((e) => "ANNOUNCED" === e.type),
                i = e.filter((e) => "INJECTED" === e.type);
              return {
                custom: a,
                recent: n,
                external: e.filter((e) => "EXTERNAL" === e.type),
                multiChain: c,
                announced: l,
                injected: i,
                recommended: o,
                featured: s,
              };
            },
            showConnector(e) {
              var t;
              let r = null == (t = e.info) ? void 0 : t.rdns,
                a =
                  !!r &&
                  o.ApiController.state.excludedWallets.some(
                    (e) => !!e.rdns && e.rdns === r
                  ),
                n =
                  !!e.name &&
                  o.ApiController.state.excludedWallets.some((t) =>
                    f.isLowerCaseMatch(t.name, e.name)
                  );
              if (
                "INJECTED" === e.type &&
                (("Browser Wallet" === e.name &&
                  (!i.CoreHelperUtil.isMobile() ||
                    (i.CoreHelperUtil.isMobile() &&
                      !r &&
                      !c.ConnectionController.checkInstalled()))) ||
                  a ||
                  n)
              )
                return !1;
              return (
                ("ANNOUNCED" !== e.type && "EXTERNAL" !== e.type) || (!a && !n)
              );
            },
            getIsConnectedWithWC: () =>
              Array.from(s.ChainController.state.chains.values()).some(
                (e) =>
                  l.ConnectorController.getConnectorId(e.namespace) ===
                  n.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT
              ),
            getConnectorTypeOrder(e) {
              let {
                  recommended: t,
                  featured: n,
                  custom: o,
                  recent: s,
                  announced: c,
                  injected: l,
                  multiChain: i,
                  external: u,
                  overriddenConnectors: p = null !=
                  (a =
                    null == (r = d.OptionsController.state.features)
                      ? void 0
                      : r.connectorTypeOrder)
                    ? a
                    : [],
                } = e,
                f = [
                  {
                    type: "walletConnect",
                    isEnabled: d.OptionsController.state.enableWalletConnect,
                  },
                  { type: "recent", isEnabled: s.length > 0 },
                  {
                    type: "injected",
                    isEnabled: [...l, ...c, ...i].length > 0,
                  },
                  { type: "featured", isEnabled: n.length > 0 },
                  { type: "custom", isEnabled: o && o.length > 0 },
                  { type: "external", isEnabled: u.length > 0 },
                  { type: "recommended", isEnabled: t.length > 0 },
                ].filter((e) => e.isEnabled),
                b = new Set(f.map((e) => e.type)),
                h = p
                  .filter((e) => b.has(e))
                  .map((e) => ({ type: e, isEnabled: !0 })),
                m = f.filter((e) => {
                  let { type: t } = e;
                  return !h.some((e) => {
                    let { type: r } = e;
                    return r === t;
                  });
                });
              return Array.from(
                new Set(
                  [...h, ...m].map((e) => {
                    let { type: t } = e;
                    return t;
                  })
                )
              );
            },
            getAuthName(e) {
              let { email: t, socialUsername: r, socialProvider: a } = e;
              return r
                ? a && "discord" === a && r.endsWith("0")
                  ? r.slice(0, -1)
                  : r
                : t.length > 30
                ? "".concat(t.slice(0, -3), "...")
                : t;
            },
            async fetchProviderData(e) {
              try {
                var t, r;
                if (
                  ("Browser Wallet" === e.name &&
                    !i.CoreHelperUtil.isMobile()) ||
                  e.id === n.ConstantsUtil.CONNECTOR_ID.AUTH
                )
                  return { accounts: [], chainId: void 0 };
                let [a, o] = await Promise.all([
                  null == (t = e.provider)
                    ? void 0
                    : t.request({ method: "eth_accounts" }),
                  null == (r = e.provider)
                    ? void 0
                    : r
                        .request({ method: "eth_chainId" })
                        .then((e) => Number(e)),
                ]);
                return { accounts: a, chainId: o };
              } catch (t) {
                return (
                  console.warn(
                    "Failed to fetch provider data for ".concat(e.name),
                    t
                  ),
                  { accounts: [], chainId: void 0 }
                );
              }
            },
          };
        e.s({ CaipNetworksUtil: () => eU }, 781883);
        let C = { ether: -9, wei: 9 };
        var g = e.i(399432);
        function w(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "wei";
          return (0, g.formatUnits)(e, C[t]);
        }
        var E = e.i(547982);
        class v extends E.BaseError {
          constructor({ cause: e, message: t } = {}) {
            var r;
            let a =
              null == t || null == (r = t.replace("execution reverted: ", ""))
                ? void 0
                : r.replace("execution reverted", "");
            super(
              "Execution reverted ".concat(
                a ? "with reason: ".concat(a) : "for an unknown reason",
                "."
              ),
              { cause: e, name: "ExecutionRevertedError" }
            );
          }
        }
        Object.defineProperty(v, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 3,
        }),
          Object.defineProperty(v, "nodeMessage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: /execution reverted/,
          });
        class N extends E.BaseError {
          constructor({ cause: e, maxFeePerGas: t } = {}) {
            super(
              "The fee cap (`maxFeePerGas`".concat(
                t ? " = ".concat(w(t), " gwei") : "",
                ") cannot be higher than the maximum allowed value (2^256-1)."
              ),
              { cause: e, name: "FeeCapTooHighError" }
            );
          }
        }
        Object.defineProperty(N, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value:
            /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/,
        });
        class y extends E.BaseError {
          constructor({ cause: e, maxFeePerGas: t } = {}) {
            super(
              "The fee cap (`maxFeePerGas`".concat(
                t ? " = ".concat(w(t)) : "",
                " gwei) cannot be lower than the block base fee."
              ),
              { cause: e, name: "FeeCapTooLowError" }
            );
          }
        }
        Object.defineProperty(y, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value:
            /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/,
        });
        class O extends E.BaseError {
          constructor({ cause: e, nonce: t } = {}) {
            super(
              "Nonce provided for the transaction ".concat(
                t ? "(".concat(t, ") ") : "",
                "is higher than the next one expected."
              ),
              { cause: e, name: "NonceTooHighError" }
            );
          }
        }
        Object.defineProperty(O, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /nonce too high/,
        });
        class T extends E.BaseError {
          constructor({ cause: e, nonce: t } = {}) {
            super(
              [
                "Nonce provided for the transaction ".concat(
                  t ? "(".concat(t, ") ") : "",
                  "is lower than the current nonce of the account."
                ),
                "Try increasing the nonce or find the latest nonce with `getTransactionCount`.",
              ].join("\n"),
              { cause: e, name: "NonceTooLowError" }
            );
          }
        }
        Object.defineProperty(T, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /nonce too low|transaction already imported|already known/,
        });
        class R extends E.BaseError {
          constructor({ cause: e, nonce: t } = {}) {
            super(
              "Nonce provided for the transaction ".concat(
                t ? "(".concat(t, ") ") : "",
                "exceeds the maximum allowed nonce."
              ),
              { cause: e, name: "NonceMaxValueError" }
            );
          }
        }
        Object.defineProperty(R, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /nonce has max value/,
        });
        class U extends E.BaseError {
          constructor({ cause: e } = {}) {
            super(
              "The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",
              {
                cause: e,
                metaMessages: [
                  "This error could arise when the account does not have enough funds to:",
                  " - pay for the total gas fee,",
                  " - pay for the value to send.",
                  " ",
                  "The cost of the transaction is calculated as `gas * gas fee + value`, where:",
                  " - `gas` is the amount of gas needed for transaction to execute,",
                  " - `gas fee` is the gas fee,",
                  " - `value` is the amount of ether to send to the recipient.",
                ],
                name: "InsufficientFundsError",
              }
            );
          }
        }
        Object.defineProperty(U, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value:
            /insufficient funds|exceeds transaction sender account balance/,
        });
        class x extends E.BaseError {
          constructor({ cause: e, gas: t } = {}) {
            super(
              "The amount of gas ".concat(
                t ? "(".concat(t, ") ") : "",
                "provided for the transaction exceeds the limit allowed for the block."
              ),
              { cause: e, name: "IntrinsicGasTooHighError" }
            );
          }
        }
        Object.defineProperty(x, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /intrinsic gas too high|gas limit reached/,
        });
        class I extends E.BaseError {
          constructor({ cause: e, gas: t } = {}) {
            super(
              "The amount of gas ".concat(
                t ? "(".concat(t, ") ") : "",
                "provided for the transaction is too low."
              ),
              { cause: e, name: "IntrinsicGasTooLowError" }
            );
          }
        }
        Object.defineProperty(I, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /intrinsic gas too low/,
        });
        class P extends E.BaseError {
          constructor({ cause: e }) {
            super("The transaction type is not supported for this chain.", {
              cause: e,
              name: "TransactionTypeNotSupportedError",
            });
          }
        }
        Object.defineProperty(P, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: /transaction type not valid/,
        });
        class M extends E.BaseError {
          constructor({
            cause: e,
            maxPriorityFeePerGas: t,
            maxFeePerGas: r,
          } = {}) {
            super(
              [
                "The provided tip (`maxPriorityFeePerGas`"
                  .concat(
                    t ? " = ".concat(w(t), " gwei") : "",
                    ") cannot be higher than the fee cap (`maxFeePerGas`"
                  )
                  .concat(r ? " = ".concat(w(r), " gwei") : "", ")."),
              ].join("\n"),
              { cause: e, name: "TipAboveFeeCapError" }
            );
          }
        }
        Object.defineProperty(M, "nodeMessage", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value:
            /max priority fee per gas higher than max fee per gas|tip higher than fee cap/,
        }),
          E.BaseError;
        var A = E,
          D = e.i(650312),
          j = E;
        class _ extends j.BaseError {
          constructor({
            body: e,
            cause: t,
            details: r,
            headers: a,
            status: n,
            url: o,
          }) {
            super("HTTP request failed.", {
              cause: t,
              details: r,
              metaMessages: [
                n && "Status: ".concat(n),
                "URL: ".concat(o),
                e && "Request body: ".concat((0, D.stringify)(e)),
              ].filter(Boolean),
              name: "HttpRequestError",
            }),
              Object.defineProperty(this, "body", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "headers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "status", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "url", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.body = e),
              (this.headers = a),
              (this.status = n),
              (this.url = o);
          }
        }
        j.BaseError;
        class k extends j.BaseError {
          constructor({ body: e, error: t, url: r }) {
            super("RPC Request failed.", {
              cause: t,
              details: t.message,
              metaMessages: [
                "URL: ".concat(r),
                "Request body: ".concat((0, D.stringify)(e)),
              ],
              name: "RpcRequestError",
            }),
              Object.defineProperty(this, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "data", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.code = t.code),
              (this.data = t.data);
          }
        }
        j.BaseError;
        class S extends j.BaseError {
          constructor({ body: e, url: t }) {
            super("The request took too long to respond.", {
              details: "The request timed out.",
              metaMessages: [
                "URL: ".concat(t),
                "Request body: ".concat((0, D.stringify)(e)),
              ],
              name: "TimeoutError",
            });
          }
        }
        class B extends A.BaseError {
          constructor(
            e,
            { code: t, docsPath: r, metaMessages: a, name: n, shortMessage: o }
          ) {
            super(o, {
              cause: e,
              docsPath: r,
              metaMessages: a || (null == e ? void 0 : e.metaMessages),
              name: n || "RpcError",
            }),
              Object.defineProperty(this, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.name = n || e.name),
              (this.code = e instanceof k ? e.code : null != t ? t : -1);
          }
        }
        class q extends B {
          constructor(e, t) {
            super(e, t),
              Object.defineProperty(this, "data", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              (this.data = t.data);
          }
        }
        class L extends B {
          constructor(e) {
            super(e, {
              code: L.code,
              name: "ParseRpcError",
              shortMessage:
                "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
            });
          }
        }
        Object.defineProperty(L, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32700,
        });
        class W extends B {
          constructor(e) {
            super(e, {
              code: W.code,
              name: "InvalidRequestRpcError",
              shortMessage: "JSON is not a valid request object.",
            });
          }
        }
        Object.defineProperty(W, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32600,
        });
        class H extends B {
          constructor(e, { method: t } = {}) {
            super(e, {
              code: H.code,
              name: "MethodNotFoundRpcError",
              shortMessage: "The method".concat(
                t ? ' "'.concat(t, '"') : "",
                " does not exist / is not available."
              ),
            });
          }
        }
        Object.defineProperty(H, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32601,
        });
        class F extends B {
          constructor(e) {
            super(e, {
              code: F.code,
              name: "InvalidParamsRpcError",
              shortMessage:
                "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters.",
            });
          }
        }
        Object.defineProperty(F, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32602,
        });
        class J extends B {
          constructor(e) {
            super(e, {
              code: J.code,
              name: "InternalRpcError",
              shortMessage: "An internal error was received.",
            });
          }
        }
        Object.defineProperty(J, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32603,
        });
        class K extends B {
          constructor(e) {
            super(e, {
              code: K.code,
              name: "InvalidInputRpcError",
              shortMessage:
                "Missing or invalid parameters.\nDouble check you have provided the correct parameters.",
            });
          }
        }
        Object.defineProperty(K, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32e3,
        });
        class G extends B {
          constructor(e) {
            super(e, {
              code: G.code,
              name: "ResourceNotFoundRpcError",
              shortMessage: "Requested resource not found.",
            }),
              Object.defineProperty(this, "name", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "ResourceNotFoundRpcError",
              });
          }
        }
        Object.defineProperty(G, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32001,
        });
        class V extends B {
          constructor(e) {
            super(e, {
              code: V.code,
              name: "ResourceUnavailableRpcError",
              shortMessage: "Requested resource not available.",
            });
          }
        }
        Object.defineProperty(V, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32002,
        });
        class Y extends B {
          constructor(e) {
            super(e, {
              code: Y.code,
              name: "TransactionRejectedRpcError",
              shortMessage: "Transaction creation failed.",
            });
          }
        }
        Object.defineProperty(Y, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32003,
        });
        class z extends B {
          constructor(e, { method: t } = {}) {
            super(e, {
              code: z.code,
              name: "MethodNotSupportedRpcError",
              shortMessage: "Method".concat(
                t ? ' "'.concat(t, '"') : "",
                " is not supported."
              ),
            });
          }
        }
        Object.defineProperty(z, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32004,
        });
        class X extends B {
          constructor(e) {
            super(e, {
              code: X.code,
              name: "LimitExceededRpcError",
              shortMessage: "Request exceeds defined limit.",
            });
          }
        }
        Object.defineProperty(X, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32005,
        });
        class Z extends B {
          constructor(e) {
            super(e, {
              code: Z.code,
              name: "JsonRpcVersionUnsupportedError",
              shortMessage: "Version of JSON-RPC protocol is not supported.",
            });
          }
        }
        Object.defineProperty(Z, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: -32006,
        });
        class Q extends q {
          constructor(e) {
            super(e, {
              code: Q.code,
              name: "UserRejectedRequestError",
              shortMessage: "User rejected the request.",
            });
          }
        }
        Object.defineProperty(Q, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 4001,
        });
        class $ extends q {
          constructor(e) {
            super(e, {
              code: $.code,
              name: "UnauthorizedProviderError",
              shortMessage:
                "The requested method and/or account has not been authorized by the user.",
            });
          }
        }
        Object.defineProperty($, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 4100,
        });
        class ee extends q {
          constructor(e, { method: t } = {}) {
            super(e, {
              code: ee.code,
              name: "UnsupportedProviderMethodError",
              shortMessage:
                "The Provider does not support the requested method".concat(
                  t ? ' " '.concat(t, '"') : "",
                  "."
                ),
            });
          }
        }
        Object.defineProperty(ee, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 4200,
        });
        class et extends q {
          constructor(e) {
            super(e, {
              code: et.code,
              name: "ProviderDisconnectedError",
              shortMessage: "The Provider is disconnected from all chains.",
            });
          }
        }
        Object.defineProperty(et, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 4900,
        });
        class er extends q {
          constructor(e) {
            super(e, {
              code: er.code,
              name: "ChainDisconnectedError",
              shortMessage:
                "The Provider is not connected to the requested chain.",
            });
          }
        }
        Object.defineProperty(er, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 4901,
        });
        class ea extends q {
          constructor(e) {
            super(e, {
              code: ea.code,
              name: "SwitchChainError",
              shortMessage:
                "An error occurred when attempting to switch chain.",
            });
          }
        }
        Object.defineProperty(ea, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 4902,
        });
        class en extends q {
          constructor(e) {
            super(e, {
              code: en.code,
              name: "UnsupportedNonOptionalCapabilityError",
              shortMessage:
                "This Wallet does not support a capability that was not marked as optional.",
            });
          }
        }
        Object.defineProperty(en, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 5700,
        });
        class eo extends q {
          constructor(e) {
            super(e, {
              code: eo.code,
              name: "UnsupportedChainIdError",
              shortMessage:
                "This Wallet does not support the requested chain ID.",
            });
          }
        }
        Object.defineProperty(eo, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 5710,
        });
        class es extends q {
          constructor(e) {
            super(e, {
              code: es.code,
              name: "DuplicateIdError",
              shortMessage: "There is already a bundle submitted with this ID.",
            });
          }
        }
        Object.defineProperty(es, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 5720,
        });
        class ec extends q {
          constructor(e) {
            super(e, {
              code: ec.code,
              name: "UnknownBundleIdError",
              shortMessage:
                "This bundle id is unknown / has not been submitted",
            });
          }
        }
        Object.defineProperty(ec, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 5730,
        });
        class el extends q {
          constructor(e) {
            super(e, {
              code: el.code,
              name: "BundleTooLargeError",
              shortMessage:
                "The call bundle is too large for the Wallet to process.",
            });
          }
        }
        Object.defineProperty(el, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 5740,
        });
        class ei extends q {
          constructor(e) {
            super(e, {
              code: ei.code,
              name: "AtomicReadyWalletRejectedUpgradeError",
              shortMessage:
                "The Wallet can support atomicity after an upgrade, but the user rejected the upgrade.",
            });
          }
        }
        Object.defineProperty(ei, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 5750,
        });
        class ed extends q {
          constructor(e) {
            super(e, {
              code: ed.code,
              name: "AtomicityNotSupportedError",
              shortMessage:
                "The wallet does not support atomic execution but the request requires it.",
            });
          }
        }
        Object.defineProperty(ed, "code", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 5760,
        });
        class eu extends B {
          constructor(e) {
            super(e, {
              name: "UnknownRpcError",
              shortMessage: "An unknown RPC error occurred.",
            });
          }
        }
        async function ep(e) {
          return new Promise((t) => setTimeout(t, e));
        }
        var ef = e.i(960803);
        let eb = new (e.i(480037).LruMap)(8192),
          eh = 256;
        function em(e, r) {
          let {
            key: a,
            methods: n,
            name: o,
            request: s,
            retryCount: c = 3,
            retryDelay: l = 150,
            timeout: i,
            type: d,
          } = e;
          return {
            config: {
              key: a,
              methods: n,
              name: o,
              request: s,
              retryCount: c,
              retryDelay: l,
              timeout: i,
              type: d,
            },
            request: (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return async function (r) {
                var a;
                let n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  {
                    dedupe: o = !1,
                    methods: s,
                    retryDelay: c = 150,
                    retryCount: l = 3,
                    uid: i,
                  } = { ...t, ...n },
                  { method: d } = r;
                if (
                  (null == s || null == (a = s.exclude)
                    ? void 0
                    : a.includes(d)) ||
                  ((null == s ? void 0 : s.include) && !s.include.includes(d))
                )
                  throw new z(Error("method not supported"), { method: d });
                let u = o
                  ? (0, ef.stringToHex)(
                      "".concat(i, ".").concat((0, D.stringify)(r))
                    )
                  : void 0;
                return (function (e, t) {
                  let { enabled: r = !0, id: a } = t;
                  if (!r || !a) return e();
                  if (eb.get(a)) return eb.get(a);
                  let n = e().finally(() => eb.delete(a));
                  return eb.set(a, n), n;
                })(
                  () =>
                    (function (e) {
                      let {
                        delay: t = 100,
                        retryCount: r = 2,
                        shouldRetry: a = () => !0,
                      } = arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                      return new Promise((n, o) => {
                        let s = async function () {
                          let { count: c = 0 } =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            l = async (e) => {
                              let { error: r } = e,
                                a =
                                  "function" == typeof t
                                    ? t({ count: c, error: r })
                                    : t;
                              a && (await ep(a)), s({ count: c + 1 });
                            };
                          try {
                            let t = await e();
                            n(t);
                          } catch (e) {
                            if (c < r && (await a({ count: c, error: e })))
                              return l({ error: e });
                            o(e);
                          }
                        };
                        s();
                      });
                    })(
                      async () => {
                        try {
                          return await e(r);
                        } catch (e) {
                          switch (e.code) {
                            case L.code:
                              throw new L(e);
                            case W.code:
                              throw new W(e);
                            case H.code:
                              throw new H(e, { method: r.method });
                            case F.code:
                              throw new F(e);
                            case J.code:
                              throw new J(e);
                            case K.code:
                              throw new K(e);
                            case G.code:
                              throw new G(e);
                            case V.code:
                              throw new V(e);
                            case Y.code:
                              throw new Y(e);
                            case z.code:
                              throw new z(e, { method: r.method });
                            case X.code:
                              throw new X(e);
                            case Z.code:
                              throw new Z(e);
                            case Q.code:
                              throw new Q(e);
                            case $.code:
                              throw new $(e);
                            case ee.code:
                              throw new ee(e);
                            case et.code:
                              throw new et(e);
                            case er.code:
                              throw new er(e);
                            case ea.code:
                              throw new ea(e);
                            case en.code:
                              throw new en(e);
                            case eo.code:
                              throw new eo(e);
                            case es.code:
                              throw new es(e);
                            case ec.code:
                              throw new ec(e);
                            case el.code:
                              throw new el(e);
                            case ei.code:
                              throw new ei(e);
                            case ed.code:
                              throw new ed(e);
                            case 5e3:
                              throw new Q(e);
                            default:
                              if (e instanceof E.BaseError) throw e;
                              throw new eu(e);
                          }
                        }
                      },
                      {
                        delay: (e) => {
                          let { count: t, error: r } = e;
                          if (r && r instanceof _) {
                            var a;
                            let e =
                              null == r || null == (a = r.headers)
                                ? void 0
                                : a.get("Retry-After");
                            if (null == e ? void 0 : e.match(/\d/))
                              return 1e3 * Number.parseInt(e);
                          }
                          return ~~(1 << t) * c;
                        },
                        retryCount: l,
                        shouldRetry: (e) => {
                          var t;
                          let { error: r } = e;
                          return "code" in (t = r) && "number" == typeof t.code
                            ? -1 === t.code ||
                                t.code === X.code ||
                                t.code === J.code
                            : !(t instanceof _) ||
                                !t.status ||
                                403 === t.status ||
                                408 === t.status ||
                                413 === t.status ||
                                429 === t.status ||
                                500 === t.status ||
                                502 === t.status ||
                                503 === t.status ||
                                504 === t.status ||
                                !1;
                        },
                      }
                    ),
                  { enabled: o, id: u }
                );
              };
            })(s, {
              methods: n,
              retryCount: c,
              retryDelay: l,
              uid: (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 11;
                if (!t || eh + e > 512) {
                  (t = ""), (eh = 0);
                  for (let e = 0; e < 256; e++)
                    t += ((256 + 256 * Math.random()) | 0)
                      .toString(16)
                      .substring(1);
                }
                return t.substring(eh, eh++ + e);
              })(),
            }),
            value: r,
          };
        }
        function eC(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            {
              key: r = "fallback",
              name: a = "Fallback",
              rank: n = !1,
              shouldThrow: o = eg,
              retryCount: s,
              retryDelay: c,
            } = t;
          return (t) => {
            let { chain: l, pollingInterval: i = 4e3, timeout: d, ...u } = t,
              p = e,
              f = () => {},
              b = em(
                {
                  key: r,
                  name: a,
                  async request(e) {
                    let t,
                      { method: r, params: a } = e,
                      n = async function () {
                        let e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 0,
                          s = p[e]({
                            ...u,
                            chain: l,
                            retryCount: 0,
                            timeout: d,
                          });
                        try {
                          let e = await s.request({ method: r, params: a });
                          return (
                            f({
                              method: r,
                              params: a,
                              response: e,
                              transport: s,
                              status: "success",
                            }),
                            e
                          );
                        } catch (c) {
                          if (
                            (f({
                              error: c,
                              method: r,
                              params: a,
                              transport: s,
                              status: "error",
                            }),
                            o(c) ||
                              e === p.length - 1 ||
                              (null != t ||
                                (t = p.slice(e + 1).some((e) => {
                                  let { include: t, exclude: a } =
                                    e({ chain: l }).config.methods || {};
                                  return t
                                    ? t.includes(r)
                                    : !a || !a.includes(r);
                                })),
                              !t))
                          )
                            throw c;
                          return n(e + 1);
                        }
                      };
                    return n();
                  },
                  retryCount: s,
                  retryDelay: c,
                  type: "fallback",
                },
                {
                  onResponse: (e) => (f = e),
                  transports: p.map((e) => e({ chain: l, retryCount: 0 })),
                }
              );
            if (n) {
              var h;
              let e = "object" == typeof n ? n : {};
              !(function (e) {
                let {
                    chain: t,
                    interval: r = 4e3,
                    onTransports: a,
                    ping: n,
                    sampleCount: o = 10,
                    timeout: s = 1e3,
                    transports: c,
                    weights: l = {},
                  } = e,
                  { stability: i = 0.7, latency: d = 0.3 } = l,
                  u = [],
                  p = async () => {
                    let e = await Promise.all(
                      c.map(async (e) => {
                        let r,
                          a,
                          o = e({ chain: t, retryCount: 0, timeout: s }),
                          c = Date.now();
                        try {
                          await (n
                            ? n({ transport: o })
                            : o.request({ method: "net_listening" })),
                            (a = 1);
                        } catch (e) {
                          a = 0;
                        } finally {
                          r = Date.now();
                        }
                        return { latency: r - c, success: a };
                      })
                    );
                    u.push(e), u.length > o && u.shift();
                    let l = Math.max(
                      ...u.map((e) =>
                        Math.max(
                          ...e.map((e) => {
                            let { latency: t } = e;
                            return t;
                          })
                        )
                      )
                    );
                    a(
                      c
                        .map((e, t) => {
                          let r = u.map((e) => e[t].latency),
                            a = r.reduce((e, t) => e + t, 0) / r.length,
                            n = u.map((e) => e[t].success),
                            o = n.reduce((e, t) => e + t, 0) / n.length;
                          return 0 === o
                            ? [0, t]
                            : [d * (1 - a / l) + i * o, t];
                        })
                        .sort((e, t) => t[0] - e[0])
                        .map((e) => {
                          let [, t] = e;
                          return c[t];
                        })
                    ),
                      await ep(r),
                      p();
                  };
                p();
              })({
                chain: l,
                interval: null != (h = e.interval) ? h : i,
                onTransports: (e) => (p = e),
                ping: e.ping,
                sampleCount: e.sampleCount,
                timeout: e.timeout,
                transports: p,
                weights: e.weights,
              });
            }
            return b;
          };
        }
        function eg(e) {
          return !!(
            "code" in e &&
            "number" == typeof e.code &&
            (e.code === Y.code ||
              e.code === Q.code ||
              v.nodeMessage.test(e.message) ||
              5e3 === e.code)
          );
        }
        var ew = E;
        class eE extends ew.BaseError {
          constructor() {
            super(
              "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
              { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
            );
          }
        }
        let ev = new Map(),
          eN = {
            current: 0,
            take() {
              return this.current++;
            },
            reset() {
              this.current = 0;
            },
          };
        function ey(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            {
              batch: r,
              fetchOptions: a,
              key: n = "http",
              methods: o,
              name: s = "HTTP JSON-RPC",
              onFetchRequest: c,
              onFetchResponse: l,
              retryDelay: i,
              raw: d,
            } = t;
          return (u) => {
            var p, f;
            let { chain: b, retryCount: h, timeout: m } = u,
              { batchSize: C = 1e3, wait: g = 0 } =
                "object" == typeof r ? r : {},
              w = null != (p = t.retryCount) ? p : h,
              E = null != (f = null != m ? m : t.timeout) ? f : 1e4,
              v = e || (null == b ? void 0 : b.rpcUrls.default.http[0]);
            if (!v) throw new eE();
            let N = (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return {
                async request(r) {
                  var a, n, o, s;
                  let {
                      body: c,
                      onRequest: l = t.onRequest,
                      onResponse: i = t.onResponse,
                      timeout: d = null != (a = t.timeout) ? a : 1e4,
                    } = r,
                    u = {
                      ...(null != (n = t.fetchOptions) ? n : {}),
                      ...(null != (o = r.fetchOptions) ? o : {}),
                    },
                    { headers: p, method: f, signal: b } = u;
                  try {
                    let t,
                      r = await (function (e, t) {
                        let {
                          errorInstance: r = Error("timed out"),
                          timeout: a,
                          signal: n,
                        } = t;
                        return new Promise((t, o) => {
                          (async () => {
                            let s;
                            try {
                              let c = new AbortController();
                              a > 0 &&
                                (s = setTimeout(() => {
                                  n ? c.abort() : o(r);
                                }, a)),
                                t(
                                  await e({
                                    signal:
                                      (null == c ? void 0 : c.signal) || null,
                                  })
                                );
                            } catch (e) {
                              (null == e ? void 0 : e.name) === "AbortError" &&
                                o(r),
                                o(e);
                            } finally {
                              clearTimeout(s);
                            }
                          })();
                        });
                      })(
                        async (t) => {
                          var r, a, n;
                          let { signal: o } = t,
                            s = {
                              ...u,
                              body: Array.isArray(c)
                                ? (0, D.stringify)(
                                    c.map((e) => {
                                      var t;
                                      return {
                                        jsonrpc: "2.0",
                                        id: null != (t = e.id) ? t : eN.take(),
                                        ...e,
                                      };
                                    })
                                  )
                                : (0, D.stringify)({
                                    jsonrpc: "2.0",
                                    id: null != (r = c.id) ? r : eN.take(),
                                    ...c,
                                  }),
                              headers: {
                                "Content-Type": "application/json",
                                ...p,
                              },
                              method: f || "POST",
                              signal: b || (d > 0 ? o : null),
                            },
                            i = new Request(e, s),
                            h =
                              null != (a = await (null == l ? void 0 : l(i, s)))
                                ? a
                                : { ...s, url: e };
                          return await fetch(null != (n = h.url) ? n : e, h);
                        },
                        {
                          errorInstance: new S({ body: c, url: e }),
                          timeout: d,
                          signal: !0,
                        }
                      );
                    if (
                      (i && (await i(r)),
                      null == (s = r.headers.get("Content-Type"))
                        ? void 0
                        : s.startsWith("application/json"))
                    )
                      t = await r.json();
                    else {
                      t = await r.text();
                      try {
                        t = JSON.parse(t || "{}");
                      } catch (e) {
                        if (r.ok) throw e;
                        t = { error: t };
                      }
                    }
                    if (!r.ok)
                      throw new _({
                        body: c,
                        details: (0, D.stringify)(t.error) || r.statusText,
                        headers: r.headers,
                        status: r.status,
                        url: e,
                      });
                    return t;
                  } catch (t) {
                    if (t instanceof _ || t instanceof S) throw t;
                    throw new _({ body: c, cause: t, url: e });
                  }
                },
              };
            })(v, { fetchOptions: a, onRequest: c, onResponse: l, timeout: E });
            return em(
              {
                key: n,
                methods: o,
                name: s,
                async request(e) {
                  let { method: t, params: a } = e,
                    n = { method: t, params: a },
                    { schedule: o } = (function (e) {
                      let {
                          fn: t,
                          id: r,
                          shouldSplitBatch: a,
                          wait: n = 0,
                          sort: o,
                        } = e,
                        s = async () => {
                          let e = l();
                          c();
                          let r = e.map((e) => {
                            let { args: t } = e;
                            return t;
                          });
                          0 !== r.length &&
                            t(r)
                              .then((t) => {
                                o && Array.isArray(t) && t.sort(o);
                                for (let r = 0; r < e.length; r++) {
                                  let { resolve: a } = e[r];
                                  null == a || a([t[r], t]);
                                }
                              })
                              .catch((t) => {
                                for (let r = 0; r < e.length; r++) {
                                  let { reject: a } = e[r];
                                  null == a || a(t);
                                }
                              });
                        },
                        c = () => ev.delete(r),
                        l = () => ev.get(r) || [],
                        i = (e) => ev.set(r, [...l(), e]);
                      return {
                        flush: c,
                        async schedule(e) {
                          let t,
                            r,
                            {
                              promise: o,
                              resolve: c,
                              reject: d,
                            } = ((t = () => void 0),
                            (r = () => void 0),
                            {
                              promise: new Promise((e, a) => {
                                (t = e), (r = a);
                              }),
                              resolve: t,
                              reject: r,
                            });
                          return (
                            ((null == a
                              ? void 0
                              : a([
                                  ...l().map((e) => {
                                    let { args: t } = e;
                                    return t;
                                  }),
                                  e,
                                ])) && s(),
                            l().length > 0)
                              ? i({ args: e, resolve: c, reject: d })
                              : (i({ args: e, resolve: c, reject: d }),
                                setTimeout(s, n)),
                            o
                          );
                        },
                      };
                    })({
                      id: v,
                      wait: g,
                      shouldSplitBatch: (e) => e.length > C,
                      fn: (e) => N.request({ body: e }),
                      sort: (e, t) => e.id - t.id,
                    }),
                    s = async (e) =>
                      r ? o(e) : [await N.request({ body: e })],
                    [{ error: c, result: l }] = await s(n);
                  if (d) return { error: c, result: l };
                  if (c) throw new k({ body: n, error: c, url: v });
                  return l;
                },
                retryCount: w,
                retryDelay: i,
                timeout: E,
                type: "http",
              },
              { fetchOptions: a, url: v }
            );
          };
        }
        e.s({ PresetsUtil: () => eO }, 808439);
        let eO = {
          ConnectorExplorerIds: {
            [n.ConstantsUtil.CONNECTOR_ID.COINBASE]:
              "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
            [n.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]:
              "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
            [n.ConstantsUtil.CONNECTOR_ID.SAFE]:
              "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
            [n.ConstantsUtil.CONNECTOR_ID.LEDGER]:
              "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",
            [n.ConstantsUtil.CONNECTOR_ID.OKX]:
              "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
            [p.ConstantsUtil.METMASK_CONNECTOR_NAME]:
              "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
            [p.ConstantsUtil.TRUST_CONNECTOR_NAME]:
              "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
            [p.ConstantsUtil.SOLFLARE_CONNECTOR_NAME]:
              "1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",
            [p.ConstantsUtil.PHANTOM_CONNECTOR_NAME]:
              "a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",
            [p.ConstantsUtil.COIN98_CONNECTOR_NAME]:
              "2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",
            [p.ConstantsUtil.MAGIC_EDEN_CONNECTOR_NAME]:
              "8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",
            [p.ConstantsUtil.BACKPACK_CONNECTOR_NAME]:
              "2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",
            [p.ConstantsUtil.BITGET_CONNECTOR_NAME]:
              "38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",
            [p.ConstantsUtil.FRONTIER_CONNECTOR_NAME]:
              "85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",
            [p.ConstantsUtil.XVERSE_CONNECTOR_NAME]:
              "2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",
            [p.ConstantsUtil.LEATHER_CONNECTOR_NAME]:
              "483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",
          },
          NetworkImageIds: {
            1: "ba0ba0cd-17c6-4806-ad93-f9d174f17900",
            42161: "3bff954d-5cb0-47a0-9a23-d20192e74600",
            43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
            56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
            250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
            10: "ab9c186a-c52f-464b-2906-ca59d760a400",
            137: "41d04d42-da3b-4453-8506-668cc0727900",
            5e3: "e86fae9b-b770-4eea-e520-150e12c81100",
            295: "6a97d510-cac8-4e58-c7ce-e8681b044c00",
            0xaa36a7: "e909ea0a-f92a-4512-c8fc-748044ea6800",
            84532: "a18a7ecd-e307-4360-4746-283182228e00",
            1301: "4eeea7ef-0014-4649-5d1d-07271a80f600",
            130: "2257980a-3463-48c6-cbac-a42d2a956e00",
            10143: "0a728e83-bacb-46db-7844-948f05434900",
            100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
            9001: "f926ff41-260d-4028-635e-91913fc28e00",
            324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
            314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
            4689: "34e68754-e536-40da-c153-6ef2e7188a00",
            1088: "3897a66d-40b9-4833-162f-a2c90531c900",
            1284: "161038da-44ae-4ec7-1208-0ea569454b00",
            1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
            7777777: "845c60df-d429-4991-e687-91ae45791600",
            42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
            8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
            0x4e454152: "3ff73439-a619-4894-9262-4470c773a100",
            2020: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
            2021: "b8101fc0-9c19-4b6f-ec65-f6dfff106e00",
            80094: "e329c2c9-59b0-4a02-83e4-212ff3779900",
            2741: "fc2427d1-5af9-4a9c-8da5-6f94627cd900",
            "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":
              "a1b58899-f671-4276-6a5e-56ca5bd59700",
            "4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":
              "a1b58899-f671-4276-6a5e-56ca5bd59700",
            EtWTRABZaYq6iMfeYKouRu166VU2xqa1:
              "a1b58899-f671-4276-6a5e-56ca5bd59700",
            "000000000019d6689c085ae165831e93":
              "0b4838db-0161-4ffe-022d-532bf03dba00",
            "000000000933ea01ad0ee984209779ba":
              "39354064-d79b-420b-065d-f980c4b78200",
          },
          ConnectorImageIds: {
            [n.ConstantsUtil.CONNECTOR_ID.COINBASE]:
              "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
            [n.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]:
              "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
            [n.ConstantsUtil.CONNECTOR_ID.SAFE]:
              "461db637-8616-43ce-035a-d89b8a1d5800",
            [n.ConstantsUtil.CONNECTOR_ID.LEDGER]:
              "54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",
            [n.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]:
              "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",
            [n.ConstantsUtil.CONNECTOR_ID.INJECTED]:
              "07ba87ed-43aa-4adf-4540-9e6a2b9cae00",
          },
          ConnectorNamesMap: {
            [n.ConstantsUtil.CONNECTOR_ID.INJECTED]: "Browser Wallet",
            [n.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]: "WalletConnect",
            [n.ConstantsUtil.CONNECTOR_ID.COINBASE]: "Coinbase",
            [n.ConstantsUtil.CONNECTOR_ID.COINBASE_SDK]: "Coinbase",
            [n.ConstantsUtil.CONNECTOR_ID.LEDGER]: "Ledger",
            [n.ConstantsUtil.CONNECTOR_ID.SAFE]: "Safe",
          },
          ConnectorTypesMap: {
            [n.ConstantsUtil.CONNECTOR_ID.INJECTED]: "INJECTED",
            [n.ConstantsUtil.CONNECTOR_ID.WALLET_CONNECT]: "WALLET_CONNECT",
            [n.ConstantsUtil.CONNECTOR_ID.EIP6963]: "ANNOUNCED",
            [n.ConstantsUtil.CONNECTOR_ID.AUTH]: "AUTH",
            [p.ConstantsUtil.CONNECTOR_TYPE_AUTH]: "AUTH",
          },
          WalletConnectRpcChainIds: [
            1, 5, 0xaa36a7, 10, 420, 42161, 421613, 137, 80001, 42220,
            0x4e454152, 0x4e454153, 56, 97, 43114, 43113, 100, 8453, 84531,
            7777777, 999, 324, 280,
          ],
        };
        function eT(e, t) {
          let r = new URL("https://rpc.walletconnect.org/v1/");
          return (
            r.searchParams.set("chainId", e),
            r.searchParams.set("projectId", t),
            r.toString()
          );
        }
        let eR = [
            "near:mainnet",
            "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",
            "eip155:1101",
            "eip155:56",
            "eip155:42161",
            "eip155:7777777",
            "eip155:59144",
            "eip155:324",
            "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
            "eip155:5000",
            "solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz",
            "eip155:80084",
            "eip155:5003",
            "eip155:100",
            "eip155:8453",
            "eip155:42220",
            "eip155:1313161555",
            "eip155:17000",
            "eip155:1",
            "eip155:300",
            "eip155:1313161554",
            "eip155:1329",
            "eip155:84532",
            "eip155:421614",
            "eip155:11155111",
            "eip155:8217",
            "eip155:43114",
            "solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",
            "eip155:999999999",
            "eip155:11155420",
            "eip155:80002",
            "eip155:97",
            "eip155:43113",
            "eip155:137",
            "eip155:10",
            "eip155:1301",
            "bip122:000000000019d6689c085ae165831e93",
            "bip122:000000000933ea01ad0ee984209779ba",
          ],
          eU = {
            extendRpcUrlWithProjectId(e, t) {
              let r = !1;
              try {
                r = "rpc.walletconnect.org" === new URL(e).host;
              } catch (e) {
                r = !1;
              }
              if (r) {
                let r = new URL(e);
                return (
                  r.searchParams.has("projectId") ||
                    r.searchParams.set("projectId", t),
                  r.toString()
                );
              }
              return e;
            },
            isCaipNetwork: (e) => "chainNamespace" in e && "caipNetworkId" in e,
            getChainNamespace(e) {
              return this.isCaipNetwork(e)
                ? e.chainNamespace
                : n.ConstantsUtil.CHAIN.EVM;
            },
            getCaipNetworkId(e) {
              return this.isCaipNetwork(e)
                ? e.caipNetworkId
                : "".concat(n.ConstantsUtil.CHAIN.EVM, ":").concat(e.id);
            },
            getDefaultRpcUrl(e, t, r) {
              var a, n, o;
              let s =
                null == (o = e.rpcUrls) ||
                null == (n = o.default) ||
                null == (a = n.http)
                  ? void 0
                  : a[0];
              return eR.includes(t) ? eT(t, r) : s || "";
            },
            extendCaipNetwork(e, t) {
              var r, a, n, o, s, c, l;
              let {
                  customNetworkImageUrls: i,
                  projectId: d,
                  customRpcUrls: u,
                } = t,
                p = this.getChainNamespace(e),
                f = this.getCaipNetworkId(e),
                b =
                  null == (n = e.rpcUrls) ||
                  null == (a = n.default) ||
                  null == (r = a.http)
                    ? void 0
                    : r[0],
                h = this.getDefaultRpcUrl(e, f, d),
                m =
                  (null == e ||
                  null == (c = e.rpcUrls) ||
                  null == (s = c.chainDefault) ||
                  null == (o = s.http)
                    ? void 0
                    : o[0]) || b,
                C =
                  (null == u || null == (l = u[f])
                    ? void 0
                    : l.map((e) => e.url)) || [],
                g = [...C, ...(h ? [h] : [])],
                w = [...C];
              return (
                m && !w.includes(m) && w.push(m),
                {
                  ...e,
                  chainNamespace: p,
                  caipNetworkId: f,
                  assets: {
                    imageId: eO.NetworkImageIds[e.id],
                    imageUrl: null == i ? void 0 : i[e.id],
                  },
                  rpcUrls: {
                    ...e.rpcUrls,
                    default: { http: g },
                    chainDefault: { http: w },
                  },
                }
              );
            },
            extendCaipNetworks(e, t) {
              let {
                customNetworkImageUrls: r,
                projectId: a,
                customRpcUrls: n,
              } = t;
              return e.map((e) =>
                eU.extendCaipNetwork(e, {
                  customNetworkImageUrls: r,
                  customRpcUrls: n,
                  projectId: a,
                })
              );
            },
            getViemTransport(e, t, r) {
              var a, n, o;
              let s = [];
              return (
                null == r ||
                  r.forEach((e) => {
                    s.push(ey(e.url, e.config));
                  }),
                eR.includes(e.caipNetworkId) &&
                  s.push(
                    ey(eT(e.caipNetworkId, t), {
                      fetchOptions: {
                        headers: { "Content-Type": "text/plain" },
                      },
                    })
                  ),
                null == e ||
                  null == (o = e.rpcUrls) ||
                  null == (n = o.default) ||
                  null == (a = n.http) ||
                  a.forEach((e) => {
                    s.push(ey(e));
                  }),
                eC(s)
              );
            },
            extendWagmiTransports(e, t, r) {
              return eR.includes(e.caipNetworkId)
                ? eC([r, ey(this.getDefaultRpcUrl(e, e.caipNetworkId, t))])
                : r;
            },
            getUnsupportedNetwork: (e) => ({
              id: e.split(":")[1],
              caipNetworkId: e,
              name: n.ConstantsUtil.UNSUPPORTED_NETWORK_NAME,
              chainNamespace: e.split(":")[0],
              nativeCurrency: { name: "", decimals: 0, symbol: "" },
              rpcUrls: { default: { http: [] } },
            }),
            getCaipNetworkFromStorage(e) {
              var t;
              let r = u.StorageUtil.getActiveCaipNetworkId(),
                a = s.ChainController.getAllRequestedCaipNetworks(),
                n = Array.from(
                  (null == (t = s.ChainController.state.chains)
                    ? void 0
                    : t.keys()) || []
                ),
                o = null == r ? void 0 : r.split(":")[0],
                c = !!o && n.includes(o),
                l = null == a ? void 0 : a.find((e) => e.caipNetworkId === r);
              return c && !l && r
                ? this.getUnsupportedNetwork(r)
                : l || e || (null == a ? void 0 : a[0]);
            },
          };
      },
      [162966, 589851, 808439, 781883],
    ],
  },
]);

//# sourceMappingURL=c5c2a1bfb848f977.js.map
