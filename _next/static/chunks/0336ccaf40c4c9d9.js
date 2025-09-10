(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    429622: (e) => {
      "use strict";
      e.s({ default: () => c }, 429622);
      var t = e.i(731636),
        a = e.i(838653),
        r = e.i(12448),
        s = e.i(55157),
        l = e.i(693667),
        d = e.i(487568),
        i = e.i(744232),
        n = e.i(288041);
      function c() {
        let [e, c] = (0, a.useState)(""),
          [x, o] = (0, a.useState)([]),
          [m, h] = (0, a.useState)("timestamp"),
          [g, u] = (0, a.useState)("desc"),
          [p, y] = (0, a.useState)("all"),
          {
            withdrawls: w,
            isLoading: b,
            error: k,
          } = (function (e) {
            let { rpcUrl: t, chainId: r } = e,
              [s, n] = (0, a.useState)([]),
              [c, x] = (0, a.useState)(!0),
              [o, m] = (0, a.useState)(null);
            return (
              (0, a.useEffect)(() => {
                (async () => {
                  x(!0), m(null);
                  try {
                    let e = new d.JsonRpcProvider(t),
                      a = new l.Contract(i.presaleAddr[1], i.presaleAbi, e),
                      r = (await e.getBlockNumber()) - 1e5,
                      s = await a.queryFilter(
                        a.filters.BuyTokenETH(),
                        r,
                        "latest"
                      ),
                      c = await a.queryFilter(
                        a.filters.BuyTokenUSDT(),
                        r,
                        "latest"
                      ),
                      x = [],
                      o = s.map(async (t) => {
                        let {
                            user: a,
                            ethAmount: r,
                            tokenAmount: s,
                            refcode: l,
                          } = t.args,
                          d = (await e.getBlock(t.blockNumber)).timestamp;
                        return {
                          txHash: t.transactionHash,
                          user: a,
                          ethAmount: r,
                          tokenAmount: s,
                          refcode: l,
                          status: "completed",
                          timestamp: d,
                        };
                      }),
                      m = c.map(async (t) => {
                        let {
                            user: a,
                            usdtAmount: r,
                            tokenAmount: s,
                            refcode: l,
                          } = t.args,
                          d = (await e.getBlock(t.blockNumber)).timestamp;
                        return {
                          txHash: t.transactionHash,
                          user: a,
                          usdtAmount: r,
                          tokenAmount: s,
                          refcode: l,
                          status: "completed",
                          timestamp: d,
                        };
                      }),
                      [h, g] = await Promise.all([
                        Promise.all(o),
                        Promise.all(m),
                      ]);
                    x.push(...h, ...g), n(x);
                  } catch (e) {
                    console.error("error", e), m(e);
                  } finally {
                    x(!1);
                  }
                })();
              }, [t, r]),
              { withdrawls: s, isLoading: c, error: o }
            );
          })({ rpcUrl: i.rpcUrls[1], chainId: 1 }),
          f = (e) => {
            switch (e) {
              case "completed":
                return "text-green-400";
              case "pending":
                return "text-yellow-400";
              case "failed":
                return "text-red-400";
              default:
                return "text-gray-400";
            }
          },
          j = (e) => {
            if (!e) return "";
            let t = e.length;
            return t < 10
              ? e
              : "".concat(e.substring(0, 6), "...").concat(e.substring(t - 4));
          };
        return (
          (0, a.useEffect)(() => {
            o(
              w.filter((t) => {
                if ("all" !== p && t.status !== p) return !1;
                if (e) {
                  var a, r, s;
                  let l = e.toLowerCase();
                  return (
                    t.user.toLowerCase().includes(l) ||
                    (null == (a = t.ethAmount)
                      ? void 0
                      : a.toString().includes(l)) ||
                    (null == (r = t.usdtAmount)
                      ? void 0
                      : r.toString().includes(l)) ||
                    (null == (s = t.tokenAmount)
                      ? void 0
                      : s.toString().includes(l))
                  );
                }
                return !0;
              })
            );
          }, [p, e, b, w]),
          (0, t.jsxs)("div", {
            className:
              "min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white ",
            children: [
              (0, t.jsx)("div", {
                className:
                  "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-b border-gray-200 dark:border-gray-800",
                children: (0, t.jsx)("div", {
                  className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                  children: (0, t.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, t.jsx)("h1", {
                        className:
                          "text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent",
                        children: "Withdrawals",
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto",
                        children:
                          "Track withdrawal requests and their status on Etherchain",
                      }),
                    ],
                  }),
                }),
              }),
              (0, t.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
                children: (0, t.jsx)("div", {
                  className:
                    "bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 shadow-sm",
                  children: (0, t.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0",
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("h2", {
                            className:
                              "text-xl font-semibold text-gray-900 dark:text-white",
                            children: "Search Withdrawals",
                          }),
                          (0, t.jsx)("p", {
                            className: "text-gray-600 dark:text-gray-400",
                            children:
                              "Find withdrawals by address or transaction hash",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "w-full md:w-96",
                        children: (0, t.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                              children: (0, t.jsx)(r.FontAwesomeIcon, {
                                icon: s.faSearch,
                                className: "h-5 w-5 text-gray-400",
                              }),
                            }),
                            (0, t.jsx)("input", {
                              type: "text",
                              value: e,
                              onChange: (e) => c(e.target.value),
                              placeholder: "Search withdrawals...",
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
              (0, t.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8",
                children: (0, t.jsxs)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 shadow-sm",
                      children: (0, t.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, t.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, t.jsx)(r.FontAwesomeIcon, {
                              icon: s.faArrowUp,
                              className:
                                "h-8 w-8 text-blue-600 dark:text-blue-400",
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className: "ml-4",
                            children: [
                              (0, t.jsx)("p", {
                                className:
                                  "text-sm font-medium text-gray-600 dark:text-gray-400",
                                children: "Total Withdrawals",
                              }),
                              (0, t.jsx)("p", {
                                className:
                                  "text-2xl font-bold text-gray-900 dark:text-white",
                                children: w.length,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 shadow-sm",
                      children: (0, t.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, t.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, t.jsx)(r.FontAwesomeIcon, {
                              icon: s.faCheckCircle,
                              className:
                                "h-8 w-8 text-green-600 dark:text-green-400",
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className: "ml-4",
                            children: [
                              (0, t.jsx)("p", {
                                className:
                                  "text-sm font-medium text-gray-600 dark:text-gray-400",
                                children: "Completed",
                              }),
                              (0, t.jsx)("p", {
                                className:
                                  "text-2xl font-bold text-gray-900 dark:text-white",
                                children: x.length,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 shadow-sm",
                      children: (0, t.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, t.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, t.jsx)(r.FontAwesomeIcon, {
                              icon: s.faClock,
                              className:
                                "h-8 w-8 text-yellow-600 dark:text-yellow-400",
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className: "ml-4",
                            children: [
                              (0, t.jsx)("p", {
                                className:
                                  "text-sm font-medium text-gray-600 dark:text-gray-400",
                                children: "Pending",
                              }),
                              (0, t.jsx)("p", {
                                className:
                                  "text-2xl font-bold text-gray-900 dark:text-white",
                                children: "0",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 shadow-sm",
                      children: (0, t.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, t.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, t.jsx)(r.FontAwesomeIcon, {
                              icon: s.faCoins,
                              className: "h-8 w-8 text-ethai dark:text-ethai",
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className: "ml-4",
                            children: [
                              (0, t.jsx)("p", {
                                className:
                                  "text-sm font-medium text-gray-600 dark:text-gray-400",
                                children: "Total Value",
                              }),
                              (0, t.jsx)("p", {
                                className:
                                  "text-2xl font-bold text-gray-900 dark:text-white",
                                children: "$12.5M",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, t.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6",
                children: (0, t.jsx)("div", {
                  className:
                    "bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4 shadow-sm",
                  children: (0, t.jsxs)("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                      (0, t.jsx)("button", {
                        onClick: () => y("all"),
                        className:
                          "px-4 py-2 rounded-lg font-medium transition-colors ".concat(
                            "all" === p
                              ? "bg-blue-600 text-white"
                              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                          ),
                        children: "All",
                      }),
                      (0, t.jsx)("button", {
                        onClick: () => y("completed"),
                        className:
                          "px-4 py-2 rounded-lg font-medium transition-colors ".concat(
                            "completed" === p
                              ? "bg-green-600 text-white"
                              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                          ),
                        children: "Completed",
                      }),
                      (0, t.jsx)("button", {
                        onClick: () => y("pending"),
                        className:
                          "px-4 py-2 rounded-lg font-medium transition-colors ".concat(
                            "pending" === p
                              ? "bg-yellow-600 text-white"
                              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                          ),
                        children: "Pending",
                      }),
                      (0, t.jsx)("button", {
                        onClick: () => y("failed"),
                        className:
                          "px-4 py-2 rounded-lg font-medium transition-colors ".concat(
                            "failed" === p
                              ? "bg-red-600 text-white"
                              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                          ),
                        children: "Failed",
                      }),
                    ],
                  }),
                }),
              }),
              (0, t.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: (0, t.jsxs)("div", {
                  className:
                    "bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "px-6 py-4 border-b border-gray-200 dark:border-gray-800",
                      children: (0, t.jsx)("h2", {
                        className:
                          "text-lg font-semibold text-gray-900 dark:text-white",
                        children: "Recent Withdrawals",
                      }),
                    }),
                    b
                      ? (0, t.jsxs)("div", {
                          className: "flex justify-center items-center py-12",
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400",
                            }),
                            (0, t.jsx)("span", {
                              className:
                                "ml-3 text-gray-600 dark:text-gray-400",
                              children: "Loading withdrawals...",
                            }),
                          ],
                        })
                      : (0, t.jsx)("div", {
                          className: "overflow-x-auto",
                          children: (0, t.jsxs)("table", {
                            className:
                              "min-w-full divide-y divide-gray-200 dark:divide-gray-800",
                            children: [
                              (0, t.jsx)("thead", {
                                className: "bg-white dark:bg-gray-900",
                                children: (0, t.jsxs)("tr", {
                                  children: [
                                    (0, t.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Withdrawal",
                                    }),
                                    (0, t.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "From",
                                    }),
                                    (0, t.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "To",
                                    }),
                                    (0, t.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Amount",
                                    }),
                                    (0, t.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Status",
                                    }),
                                    (0, t.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Time",
                                    }),
                                  ],
                                }),
                              }),
                              (0, t.jsx)("tbody", {
                                className:
                                  "bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800",
                                children: x.map((e, a) =>
                                  (0, t.jsxs)(
                                    "tr",
                                    {
                                      className:
                                        "hover:bg-white dark:hover:bg-gray-800 transition-colors",
                                      children: [
                                        (0, t.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, t.jsx)("div", {
                                            className:
                                              "text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 cursor-pointer",
                                            children: j(e.txHash),
                                          }),
                                        }),
                                        (0, t.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, t.jsx)("div", {
                                            className:
                                              "text-sm text-gray-900 dark:text-gray-300",
                                            children: j(i.presaleAddr[1]),
                                          }),
                                        }),
                                        (0, t.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, t.jsx)("div", {
                                            className:
                                              "text-sm text-gray-900 dark:text-gray-300",
                                            children: j(e.user),
                                          }),
                                        }),
                                        (0, t.jsxs)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: [
                                            (0, t.jsx)("div", {
                                              className:
                                                "text-sm text-gray-900 dark:text-gray-300",
                                              children: e.tokenAmount
                                                ? "".concat(
                                                    new n.default(e.tokenAmount)
                                                      .div(1e18)
                                                      .toString(),
                                                    " ETHAI"
                                                  )
                                                : "N/A",
                                            }),
                                            (0, t.jsxs)("div", {
                                              className:
                                                "text-xs text-gray-500 dark:text-gray-400",
                                              children: [
                                                e.ethAmount
                                                  ? "".concat(
                                                      new n.default(e.ethAmount)
                                                        .div(1e18)
                                                        .toString(),
                                                      " ETH"
                                                    )
                                                  : "",
                                                e.usdtAmount
                                                  ? "".concat(
                                                      new n.default(
                                                        e.usdtAmount
                                                      )
                                                        .div(1e6)
                                                        .toString(),
                                                      " USDT"
                                                    )
                                                  : "",
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, t.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, t.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                              (0, t.jsx)(r.FontAwesomeIcon, {
                                                icon: ((e) => {
                                                  switch (e) {
                                                    case "completed":
                                                      return s.faCheckCircle;
                                                    case "pending":
                                                      return s.faClock;
                                                    case "failed":
                                                      return s.faTimesCircle;
                                                    default:
                                                      return s.faSpinner;
                                                  }
                                                })(e.status),
                                                className:
                                                  "h-4 w-4 mr-2 ".concat(
                                                    f(e.status)
                                                  ),
                                              }),
                                              (0, t.jsx)("span", {
                                                className:
                                                  "text-sm font-medium ".concat(
                                                    f(e.status)
                                                  ),
                                                children: e.status,
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, t.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300",
                                          children: new Date(
                                            1e3 * e.timestamp
                                          ).toLocaleString(),
                                        }),
                                      ],
                                    },
                                    a
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
  },
]);

//# sourceMappingURL=6e7dcb60e1011d1f.js.map
