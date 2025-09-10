(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    84909: (e) => {
      "use strict";
      e.s({ default: () => o });
      var a = e.i(731636),
        t = e.i(838653),
        s = e.i(12448),
        r = e.i(55157),
        l = e.i(744232),
        d = e.i(693667),
        i = e.i(487568),
        c = e.i(288041),
        n = e.i(43471);
      function o() {
        let [e, o] = (0, t.useState)(""),
          [x, m] = (0, t.useState)([]),
          [h, g] = (0, t.useState)(!0),
          [p, u] = (0, t.useState)(null);
        (0, t.useEffect)(() => {
          (async () => {
            g(!0), u(null);
            try {
              let e = new i.JsonRpcProvider(l.rpcUrls[1]),
                a = new d.Contract(l.presaleAddr[1], l.presaleAbi, e),
                t = new d.Contract(l.faucetAddress[1], l.faucetAbi, e),
                s = await a.receiver(),
                r = (await e.getBlockNumber()) - 1e4,
                n = await a.queryFilter(a.filters.BuyTokenETH(), r, "latest"),
                o = await a.queryFilter(a.filters.BuyTokenUSDT(), r, "latest"),
                x = await t.queryFilter(t.filters.TokensClaimed(), r, "latest"),
                h = [],
                g = [],
                p = [];
              for (let a of n) {
                let t = await e.getBlock(a.blockNumber),
                  r = await e.getTransaction(a.transactionHash),
                  l = t.timestamp,
                  d = t.gasUsed;
                h.push({
                  hash: a.transactionHash,
                  from: r.from,
                  to: s,
                  value: parseFloat(
                    new c.default(a.args[1])
                      .shiftedBy(-18)
                      .toFixed(2)
                      .toString()
                  ),
                  gas: d,
                  status: "success",
                  timestamp: l,
                  blockNumber: a.blockNumber,
                  type: "ETH",
                });
              }
              for (let a of o) {
                let t = await e.getBlock(a.blockNumber),
                  r = await e.getTransaction(a.transactionHash),
                  l = t.timestamp,
                  d = t.gasUsed;
                g.push({
                  hash: a.transactionHash,
                  from: r.from,
                  to: s,
                  value: parseFloat(
                    new c.default(a.args[1]).shiftedBy(-6).toFixed(2).toString()
                  ),
                  gas: d,
                  status: "success",
                  timestamp: l,
                  blockNumber: a.blockNumber,
                  type: "USDT",
                });
              }
              for (let a of x) {
                let t = await e.getBlock(a.blockNumber),
                  s = await e.getTransaction(a.transactionHash),
                  r = t.timestamp,
                  l = t.gasUsed;
                p.push({
                  hash: a.transactionHash,
                  from: s.from,
                  to: a.args[0],
                  value: parseFloat(
                    new c.default(a.args[1])
                      .shiftedBy(-18)
                      .toFixed(2)
                      .toString()
                  ),
                  gas: l,
                  status: "success",
                  timestamp: r,
                  blockNumber: a.blockNumber,
                  type: "ETHAI",
                });
              }
              let u = [...h, ...g, ...p];
              u.sort((e, a) => a.timestamp - e.timestamp), m(u);
            } catch (e) {
              u("Failed to load recent transactions"), console.error(e), m([]);
            } finally {
              g(!1);
            }
          })();
        }, []);
        let y = (e) =>
          e ? "".concat(e.slice(0, 6), "...").concat(e.slice(-4)) : "N/A";
        return (0, a.jsxs)("div", {
          className:
            "min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white ",
          children: [
            (0, a.jsx)("div", {
              className:
                "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-b border-gray-200 dark:border-gray-800",
              children: (0, a.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: (0, a.jsxs)("div", {
                  className: "flex justify-between items-center h-20",
                  children: [
                    (0, a.jsx)("div", {
                      className: "flex items-center",
                      children: (0, a.jsx)("h1", {
                        className:
                          "text-2xl font-bold text-blue-600 dark:text-blue-400",
                        children: "Etherchain Explorer",
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "flex-1 max-w-2xl mx-8",
                      children: (0, a.jsx)("form", {
                        onSubmit: (e) => {
                          e.preventDefault();
                        },
                        className: "relative",
                        children: (0, a.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                              children: (0, a.jsx)(s.FontAwesomeIcon, {
                                icon: r.faSearch,
                                className: "h-5 w-5 text-gray-400",
                              }),
                            }),
                            (0, a.jsx)("input", {
                              type: "text",
                              value: e,
                              onChange: (e) => o(e.target.value),
                              placeholder:
                                "Search transactions, blocks, programs and tokens",
                              className:
                                "block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 dark:focus:placeholder-gray-500 focus:ring-1 focus:ring-blue-500 focus:border-blue-500",
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, a.jsxs)("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 shadow-sm",
                      children: (0, a.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, a.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, a.jsx)(s.FontAwesomeIcon, {
                              icon: r.faExchangeAlt,
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
                                children: "Total Transactions",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-2xl font-semibold text-gray-900 dark:text-white",
                                children: h ? "..." : x.length.toLocaleString(),
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
                            children: (0, a.jsx)(s.FontAwesomeIcon, {
                              icon: r.faCube,
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
                                children: "Latest Block",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-2xl font-semibold text-gray-900 dark:text-white",
                                children: h
                                  ? "..."
                                  : x.length > 0
                                  ? "#".concat(
                                      x[x.length - 1].blockNumber || "N/A"
                                    )
                                  : "N/A",
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
                            children: (0, a.jsx)(s.FontAwesomeIcon, {
                              icon: r.faUsers,
                              className: "h-8 w-8 text-ethai dark:text-ethai",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "ml-4",
                            children: [
                              (0, a.jsx)("p", {
                                className:
                                  "text-sm font-medium text-gray-600 dark:text-gray-400",
                                children: "Unique Addresses",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-2xl font-semibold text-gray-900 dark:text-white",
                                children: h
                                  ? "..."
                                  : new Set(
                                      x.map((e) => e.from)
                                    ).size.toLocaleString(),
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
                            children: (0, a.jsx)(s.FontAwesomeIcon, {
                              icon: r.faGasPump,
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
                                children: "Total Gas Used",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-2xl font-semibold text-gray-900 dark:text-white",
                                children: h
                                  ? "..."
                                  : parseInt(
                                      x.reduce(
                                        (e, a) => new c.default(e).plus(a.gas),
                                        0
                                      )
                                    ).toLocaleString("fr-FR"),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "px-6 py-4 border-b border-gray-200 dark:border-gray-800",
                      children: (0, a.jsx)("h2", {
                        className:
                          "text-xl font-semibold text-gray-900 dark:text-white",
                        children: "Recent Transactions",
                      }),
                    }),
                    h
                      ? (0, a.jsx)("div", {
                          className: "p-6",
                          children: (0, a.jsx)("div", {
                            className: "animate-pulse space-y-4",
                            children: [1, 2, 3].map((e) =>
                              (0, a.jsxs)(
                                "div",
                                {
                                  className: "flex items-center space-x-4",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4",
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/6",
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/6",
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/6",
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/6",
                                    }),
                                  ],
                                },
                                e
                              )
                            ),
                          }),
                        })
                      : p
                      ? (0, a.jsxs)("div", {
                          className: "p-6 text-center",
                          children: [
                            (0, a.jsx)("svg", {
                              className:
                                "w-12 h-12 text-red-400 dark:text-red-500 mx-auto mb-4",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: (0, a.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                              }),
                            }),
                            (0, a.jsx)("p", {
                              className: "text-red-600 dark:text-red-400",
                              children: p,
                            }),
                          ],
                        })
                      : 0 === x.length
                      ? (0, a.jsxs)("div", {
                          className: "p-6 text-center",
                          children: [
                            (0, a.jsx)("svg", {
                              className:
                                "w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: (0, a.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                              }),
                            }),
                            (0, a.jsx)("p", {
                              className: "text-gray-600 dark:text-gray-400",
                              children: "No transactions found",
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "text-sm text-gray-500 dark:text-gray-500",
                              children: "No recent transactions available",
                            }),
                          ],
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
                                      children: "Transaction Hash",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "From",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "To",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Value",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Gas",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Status",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Time",
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("tbody", {
                                className:
                                  "bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800",
                                children: x.map((e, t) =>
                                  (0, a.jsxs)(
                                    "tr",
                                    {
                                      className:
                                        "hover:bg-white dark:hover:bg-gray-800 transition-colors",
                                      children: [
                                        (0, a.jsxs)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: [
                                            (0, a.jsx)("button", {
                                              onClick: () => {
                                                var a;
                                                return (
                                                  (a = e.hash),
                                                  void window.open(
                                                    "https://etherscan.io/tx/".concat(
                                                      a
                                                    ),
                                                    "_blank"
                                                  )
                                                );
                                              },
                                              className:
                                                "text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 cursor-pointer underline",
                                              title: "View on Etherscan",
                                              children: y(e.hash),
                                            }),
                                            (0, a.jsx)(s.FontAwesomeIcon, {
                                              icon: r.faCopy,
                                              onClick: () => {
                                                var a;
                                                return (
                                                  (a =
                                                    "https://etherscan.io/tx/".concat(
                                                      e.hash
                                                    )),
                                                  void (navigator.clipboard.writeText(
                                                    a
                                                  ),
                                                  n.toast.success(
                                                    "Copied to clipboard"
                                                  ))
                                                );
                                              },
                                              className:
                                                "h-4 w-4 ml-1 cursor-pointer",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, a.jsx)("div", {
                                            className:
                                              "text-sm text-gray-900 dark:text-gray-300",
                                            children: y(e.from),
                                          }),
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, a.jsx)("div", {
                                            className:
                                              "text-sm text-gray-900 dark:text-gray-300",
                                            children: y(e.to),
                                          }),
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, a.jsxs)("div", {
                                            className:
                                              "text-sm text-gray-900 dark:text-gray-300",
                                            children: [e.value, " ", e.type],
                                          }),
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, a.jsx)("div", {
                                            className:
                                              "text-sm text-gray-900 dark:text-gray-300",
                                            children: e.gas.toLocaleString(),
                                          }),
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, a.jsx)("span", {
                                            className:
                                              "inline-flex px-2 py-1 text-xs font-semibold rounded-full ".concat(
                                                "success" === e.status
                                                  ? "text-green-500"
                                                  : "text-red-500"
                                              ),
                                            children: e.status,
                                          }),
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300",
                                          children: ((e) => {
                                            let a = new Date(1e3 * e);
                                            return (
                                              a.toLocaleDateString() +
                                              " " +
                                              a.toLocaleTimeString()
                                            );
                                          })(e.timestamp),
                                        }),
                                      ],
                                    },
                                    t
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);

//# sourceMappingURL=5bc5fd86ea3b0a6c.js.map
