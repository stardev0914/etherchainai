(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    232509: (e) => {
      "use strict";
      e.s({ default: () => c });
      var a = e.i(838653),
        t = e.i(918142),
        r = e.i(487568),
        s = e.i(693667),
        d = e.i(744232),
        l = e.i(288041);
      function c(e) {
        let {
            rpcUrl: c,
            tokenAddress: i,
            fromBlock: n = 0,
            toBlock: x = "latest",
          } = e,
          [o, m] = (0, a.useState)(null),
          [g, h] = (0, a.useState)(!1),
          [p, b] = (0, a.useState)(null);
        return (
          (0, a.useEffect)(() => {
            let e = !1;
            return (
              (async function () {
                h(!0), b(null);
                try {
                  let a = new r.JsonRpcProvider(c),
                    o = new s.Contract(i, d.tokenAbi, a);
                  "latest" === x && (n = (await a.getBlockNumber()) - 1e4);
                  let g = await o.queryFilter(o.filters.Transfer(), n, x),
                    h = new Map(),
                    p = new Map(),
                    b = (e, a) => {
                      var t;
                      let r = null != (t = h.get(e)) ? t : (0, l.default)(0);
                      h.set(e, r.plus(a));
                    },
                    u = (e) => {
                      var a;
                      let t = null != (a = p.get(e)) ? a : 0;
                      p.set(e, t + 1);
                    },
                    f = (e, a) => {
                      var t;
                      let r = null != (t = h.get(e)) ? t : (0, l.default)(0);
                      h.set(e, r.minus(a));
                    };
                  for (let e of g) {
                    let [a, r, s] = e.args;
                    a !== t.ethers.ZeroAddress && f(a, s),
                      r !== t.ethers.ZeroAddress && b(r, s),
                      r !== t.ethers.ZeroAddress && u(r);
                  }
                  let y = [];
                  h.forEach((e, a) => {
                    if (e.gt(0)) {
                      var t;
                      y.push({
                        address: a,
                        balance: e.toString(),
                        count: null != (t = p.get(a)) ? t : 0,
                      });
                    }
                  }),
                    e || m(y);
                } catch (a) {
                  e || b(a);
                } finally {
                  e || h(!1);
                }
              })(),
              () => {
                e = !0;
              }
            );
          }, [c, i, n, x]),
          { snapshot: o, isLoading: g, error: p }
        );
      }
    },
    684187: (e) => {
      "use strict";
      e.s({ default: () => n });
      var a = e.i(731636),
        t = e.i(838653),
        r = e.i(12448),
        s = e.i(55157),
        d = e.i(232509),
        l = e.i(744232);
      e.i(435187);
      var c = e.i(266119),
        i = e.i(288041);
      function n() {
        let [e, n] = (0, t.useState)(""),
          { chainId: x } = (0, c.useAppKitNetworkCore)(),
          [o, m] = (0, t.useState)([]),
          [g, h] = (0, t.useState)("balance"),
          [p, b] = (0, t.useState)("desc"),
          {
            snapshot: u,
            isLoading: f,
            error: y,
          } = (0, d.default)({
            rpcUrl: l.rpcUrls[1],
            tokenAddress: l.tokenAddress[1],
            fromBlock: 0,
            toBlock: "latest",
          });
        (0, t.useEffect)(() => {
          u &&
            u.length > 0 &&
            m(
              u
                .sort((e, a) => {
                  let t = parseFloat(
                    new i.default(e.balance).shiftedBy(-18).toString()
                  );
                  return (
                    parseFloat(
                      new i.default(a.balance).shiftedBy(-18).toString()
                    ) - t
                  );
                })
                .slice(0, 100)
                .map((e, a) => {
                  let t = parseFloat(
                      new i.default(e.balance).shiftedBy(-18).toString()
                    ),
                    r = (2 * t).toFixed(2);
                  return {
                    rank: a + 1,
                    address: e.address,
                    name: k(e.address),
                    balance: t.toLocaleString("fr-FR", {
                      maximumFractionDigits: 2,
                    }),
                    balanceValue: "$".concat(
                      parseFloat(r).toLocaleString("fr-FR", {
                        maximumFractionDigits: 2,
                      })
                    ),
                    percentage: j(t, u),
                    txCount: e.count,
                    type: w(e.address),
                  };
                })
            );
        }, [u]);
        let k = (e) =>
            ({
              "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6":
                "Binance Hot Wallet",
              "0x28C6c06298d514Db089934071355E5743bf21d60": "Binance 14",
              "0x21a31Ee1afC51d94C2eFcCAa2092aD1028285549": "Kraken Wallet",
              "0xdfd5293d8e347dfe59e90efd55b2956a1343963d": "Uniswap V3",
              "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8": "Binance 14",
              "0x47ac0FcbF2F2d5968675584456aB3Ce6F61f1db1": "Gnosis Safe",
              "0x876eabf441b2ee5b5b0554fd502a8e0600950cfa": "Gemini Exchange",
              "0x4e5b2e1dc63f6b91cb6cd759936495434c7e972f": "Bitfinex Wallet",
              "0x80CD3ABFdF698cc6B979f1f0380f1109165767C2": "ETHAI Presale",
            }[e] || "Unknown"),
          w = (e) =>
            [
              "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
              "0x28C6c06298d514Db089934071355E5743bf21d60",
              "0x21a31Ee1afC51d94C2eFcCAa2092aD1028285549",
              "0xbe0eb53f46cd790cd13851d5eff43d12404d33e8",
              "0x876eabf441b2ee5b5b0554fd502a8e0600950cfa",
              "0x4e5b2e1dc63f6b91cb6cd759936495434c7e972f",
            ].includes(e)
              ? "Exchange"
              : [
                  "0xdfd5293d8e347dfe59e90efd55b2956a1343963d",
                  "0x47ac0FcbF2F2d5968675584456aB3Ce6F61f1db1",
                ].includes(e)
              ? "Contract"
              : "Wallet",
          j = (e, a) => "".concat(((e / 5e7) * 100).toFixed(2), "%"),
          N = u ? u.length : 0,
          v = "100000000.00",
          C = u ? 50 * u.length : 0;
        return (0, a.jsxs)("div", {
          className:
            "min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white ",
          children: [
            (0, a.jsx)("div", {
              className:
                "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-b border-gray-200 dark:border-gray-800",
              children: (0, a.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: (0, a.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, a.jsx)("h1", {
                      className:
                        "text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent",
                      children: "Top Token Holders",
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto",
                      children:
                        "Explore the largest token holders on Etherchain. Track balances, transaction counts, and holder types.",
                    }),
                  ],
                }),
              }),
            }),
            (0, a.jsx)("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
              children: (0, a.jsx)("div", {
                className:
                  "bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 shadow-sm",
                children: (0, a.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0",
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("h2", {
                          className:
                            "text-xl font-semibold text-gray-900 dark:text-white",
                          children: "Search Holders",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-gray-600 dark:text-gray-400",
                          children: "Find holders by address or name",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "w-full md:w-96",
                      children: (0, a.jsxs)("div", {
                        className: "relative",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                            children: (0, a.jsx)(r.FontAwesomeIcon, {
                              icon: s.faSearch,
                              className: "h-5 w-5 text-gray-400",
                            }),
                          }),
                          (0, a.jsx)("input", {
                            type: "text",
                            value: e,
                            onChange: (e) => n(e.target.value),
                            placeholder: "Search by address or name...",
                            className:
                              "block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 dark:focus:placeholder-gray-500 focus:ring-1 focus:ring-blue-500 focus:border-blue-500",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, a.jsx)("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8",
              children: (0, a.jsxs)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 shadow-sm",
                    children: (0, a.jsxs)("div", {
                      className: "flex items-center",
                      children: [
                        (0, a.jsx)("div", {
                          className: "flex-shrink-0",
                          children: (0, a.jsx)(r.FontAwesomeIcon, {
                            icon: s.faUsers,
                            className:
                              "h-8 w-8 text-blue-600 dark:text-blue-400",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "ml-4",
                          children: [
                            (0, a.jsx)("p", {
                              className:
                                "text-sm font-medium text-gray-600 dark:text-gray-400",
                              children: "Total Holders",
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "text-2xl font-bold text-gray-900 dark:text-white",
                              children: N ? N.toLocaleString() : "0",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 shadow-sm",
                    children: (0, a.jsxs)("div", {
                      className: "flex items-center",
                      children: [
                        (0, a.jsx)("div", {
                          className: "flex-shrink-0",
                          children: (0, a.jsx)(r.FontAwesomeIcon, {
                            icon: s.faCoins,
                            className:
                              "h-8 w-8 text-green-600 dark:text-green-400",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "ml-4",
                          children: [
                            (0, a.jsx)("p", {
                              className:
                                "text-sm font-medium text-gray-600 dark:text-gray-400",
                              children: "Total Supply",
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "text-2xl font-bold text-gray-900 dark:text-white",
                              children: (5e7).toLocaleString("fr-FR", {
                                maximumFractionDigits: 2,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 shadow-sm",
                    children: (0, a.jsxs)("div", {
                      className: "flex items-center",
                      children: [
                        (0, a.jsx)("div", {
                          className: "flex-shrink-0",
                          children: (0, a.jsx)(r.FontAwesomeIcon, {
                            icon: s.faExchangeAlt,
                            className: "h-8 w-8 text-ethai dark:text-ethai",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "ml-4",
                          children: [
                            (0, a.jsx)("p", {
                              className:
                                "text-sm font-medium text-gray-600 dark:text-gray-400",
                              children: "Total Transactions",
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "text-2xl font-bold text-gray-900 dark:text-white",
                              children: C ? C.toLocaleString() : "0",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 shadow-sm",
                    children: (0, a.jsxs)("div", {
                      className: "flex items-center",
                      children: [
                        (0, a.jsx)("div", {
                          className: "flex-shrink-0",
                          children: (0, a.jsx)(r.FontAwesomeIcon, {
                            icon: s.faChartLine,
                            className:
                              "h-8 w-8 text-yellow-600 dark:text-yellow-400",
                          }),
                        }),
                        (0, a.jsxs)("div", {
                          className: "ml-4",
                          children: [
                            (0, a.jsx)("p", {
                              className:
                                "text-sm font-medium text-gray-600 dark:text-gray-400",
                              children: "Market Value",
                            }),
                            (0, a.jsxs)("p", {
                              className:
                                "text-2xl font-bold text-gray-900 dark:text-white",
                              children: [
                                "$",
                                v
                                  ? parseFloat(v).toLocaleString("fr-FR", {
                                      maximumFractionDigits: 2,
                                    })
                                  : "0",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, a.jsx)("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: (0, a.jsxs)("div", {
                className:
                  "bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "px-6 py-4 border-b border-gray-200 dark:border-gray-800",
                    children: (0, a.jsx)("h2", {
                      className:
                        "text-lg font-semibold text-gray-900 dark:text-white",
                      children: "Top Token Holders by Balance",
                    }),
                  }),
                  f
                    ? (0, a.jsxs)("div", {
                        className: "flex justify-center items-center py-12",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400",
                          }),
                          (0, a.jsx)("span", {
                            className: "ml-3 text-gray-600 dark:text-gray-400",
                            children: "Loading holders...",
                          }),
                        ],
                      })
                    : y
                    ? (0, a.jsx)("div", {
                        className: "flex justify-center items-center py-12",
                        children: (0, a.jsxs)("span", {
                          className: "text-red-600 dark:text-red-400",
                          children: ["Error loading data: ", y.message],
                        }),
                      })
                    : (0, a.jsx)("div", {
                        className: "overflow-x-auto",
                        children: (0, a.jsxs)("table", {
                          className:
                            "min-w-full divide-y divide-gray-200 dark:divide-gray-800",
                          children: [
                            (0, a.jsx)("thead", {
                              className: "bg-white dark:bg-gray-900",
                              children: (0, a.jsxs)("tr", {
                                children: [
                                  (0, a.jsx)("th", {
                                    className:
                                      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "Rank",
                                  }),
                                  (0, a.jsx)("th", {
                                    className:
                                      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "Address",
                                  }),
                                  (0, a.jsx)("th", {
                                    className:
                                      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "Name",
                                  }),
                                  (0, a.jsx)("th", {
                                    className:
                                      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "Balance",
                                  }),
                                  (0, a.jsx)("th", {
                                    className:
                                      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "Percentage",
                                  }),
                                  (0, a.jsx)("th", {
                                    className:
                                      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "Txn Count",
                                  }),
                                  (0, a.jsx)("th", {
                                    className:
                                      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "Type",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("tbody", {
                              className:
                                "bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800",
                              children: o
                                .filter(
                                  (a) =>
                                    "" === e ||
                                    a.address
                                      .toLowerCase()
                                      .includes(e.toLowerCase()) ||
                                    a.name
                                      .toLowerCase()
                                      .includes(e.toLowerCase())
                                )
                                .map((e) => {
                                  let t;
                                  return (0, a.jsxs)(
                                    "tr",
                                    {
                                      className:
                                        "hover:bg-white dark:hover:bg-gray-800 transition-colors",
                                      children: [
                                        (0, a.jsxs)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white",
                                          children: ["#", e.rank],
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, a.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                              (0, a.jsx)(r.FontAwesomeIcon, {
                                                icon: s.faWallet,
                                                className:
                                                  "h-4 w-4 text-blue-600 dark:text-blue-400 mr-2",
                                              }),
                                              (0, a.jsxs)("div", {
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className:
                                                      "text-sm font-medium text-gray-900 dark:text-white",
                                                    children:
                                                      ((t = e.address),
                                                      ""
                                                        .concat(
                                                          t.slice(0, 6),
                                                          "..."
                                                        )
                                                        .concat(t.slice(-4))),
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className:
                                                      "text-xs text-gray-500 dark:text-gray-400",
                                                    children: e.address,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white",
                                          children: e.name,
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, a.jsxs)("div", {
                                            children: [
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "text-sm font-medium text-gray-900 dark:text-white",
                                                children: [e.balance, " ETHAI"],
                                              }),
                                              (0, a.jsx)("div", {
                                                className:
                                                  "text-xs text-gray-500 dark:text-gray-400",
                                                children: e.balanceValue,
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white",
                                          children: e.percentage,
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white",
                                          children: e.txCount.toLocaleString(),
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, a.jsx)("span", {
                                            className:
                                              "inline-flex px-2 py-1 text-xs font-semibold rounded-full ".concat(
                                                ((e) => {
                                                  switch (e) {
                                                    case "Exchange":
                                                      return "text-blue-600 dark:text-blue-400";
                                                    case "Contract":
                                                      return "text-green-600 dark:text-green-400";
                                                    case "Wallet":
                                                      return "text-ethai dark:text-ethai";
                                                    default:
                                                      return "text-gray-600 dark:text-gray-400";
                                                  }
                                                })(e.type)
                                              ),
                                            children: e.type,
                                          }),
                                        }),
                                      ],
                                    },
                                    e.rank
                                  );
                                }),
                            }),
                          ],
                        }),
                      }),
                ],
              }),
            }),
          ],
        });
      }
    },
  },
]);

//# sourceMappingURL=5b1a6e30f69aaea0.js.map
