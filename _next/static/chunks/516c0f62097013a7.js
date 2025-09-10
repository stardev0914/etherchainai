(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    232509: (e) => {
      "use strict";
      e.s({ default: () => c });
      var t = e.i(838653),
        a = e.i(918142),
        r = e.i(487568),
        s = e.i(693667),
        l = e.i(744232),
        d = e.i(288041);
      function c(e) {
        let {
            rpcUrl: c,
            tokenAddress: i,
            fromBlock: n = 0,
            toBlock: o = "latest",
          } = e,
          [x, m] = (0, t.useState)(null),
          [h, g] = (0, t.useState)(!1),
          [p, u] = (0, t.useState)(null);
        return (
          (0, t.useEffect)(() => {
            let e = !1;
            return (
              (async function () {
                g(!0), u(null);
                try {
                  let t = new r.JsonRpcProvider(c),
                    x = new s.Contract(i, l.tokenAbi, t);
                  "latest" === o && (n = (await t.getBlockNumber()) - 1e4);
                  let h = await x.queryFilter(x.filters.Transfer(), n, o),
                    g = new Map(),
                    p = new Map(),
                    u = (e, t) => {
                      var a;
                      let r = null != (a = g.get(e)) ? a : (0, d.default)(0);
                      g.set(e, r.plus(t));
                    },
                    y = (e) => {
                      var t;
                      let a = null != (t = p.get(e)) ? t : 0;
                      p.set(e, a + 1);
                    },
                    k = (e, t) => {
                      var a;
                      let r = null != (a = g.get(e)) ? a : (0, d.default)(0);
                      g.set(e, r.minus(t));
                    };
                  for (let e of h) {
                    let [t, r, s] = e.args;
                    t !== a.ethers.ZeroAddress && k(t, s),
                      r !== a.ethers.ZeroAddress && u(r, s),
                      r !== a.ethers.ZeroAddress && y(r);
                  }
                  let b = [];
                  g.forEach((e, t) => {
                    if (e.gt(0)) {
                      var a;
                      b.push({
                        address: t,
                        balance: e.toString(),
                        count: null != (a = p.get(t)) ? a : 0,
                      });
                    }
                  }),
                    e || m(b);
                } catch (t) {
                  e || u(t);
                } finally {
                  e || g(!1);
                }
              })(),
              () => {
                e = !0;
              }
            );
          }, [c, i, n, o]),
          { snapshot: x, isLoading: h, error: p }
        );
      }
    },
    8291: (e) => {
      "use strict";
      e.s({ default: () => n }, 8291);
      var t = e.i(731636),
        a = e.i(838653),
        r = e.i(12448),
        s = e.i(55157),
        l = e.i(712568);
      e.i(186240);
      var d = e.i(288041),
        c = e.i(232509),
        i = e.i(744232);
      function n() {
        let [e, n] = (0, a.useState)(""),
          [o, x] = (0, a.useState)("market_cap"),
          [m, h] = (0, a.useState)("desc"),
          { snapshot: g, isLoading: p } = (0, c.default)({
            rpcUrl: i.rpcUrls[1],
            tokenAddress: i.tokenAddress[1],
            fromBlock: 0,
            toBlock: "latest",
          }),
          {
            data: u,
            loading: y,
            error: k,
          } = (function () {
            let {
                vsCurrency: e = "usd",
                perPage: t = 20,
                page: r = 1,
              } = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
              [s, l] = (0, a.useState)([]),
              [d, c] = (0, a.useState)(!0),
              [i, n] = (0, a.useState)(null);
            return (
              (0, a.useEffect)(() => {
                let a = new AbortController(),
                  { signal: s } = a;
                return (
                  (async function () {
                    c(!0), n(null);
                    try {
                      let a = await fetch(
                        "https://api.coingecko.com/api/v3/coins/markets?vs_currency="
                          .concat(e, "&order=market_cap_desc&per_page=")
                          .concat(t, "&page=")
                          .concat(r, "&sparkline=false"),
                        { signal: s }
                      );
                      if (!a.ok)
                        throw Error(
                          "Error fetching data: "
                            .concat(a.status, " ")
                            .concat(a.statusText)
                        );
                      let d = await a.json();
                      l(d);
                    } catch (e) {
                      "AbortError" !== e.name && n(e);
                    } finally {
                      c(!1);
                    }
                  })(),
                  () => a.abort()
                );
              }, [e, t, r]),
              { data: s, loading: d, error: i }
            );
          })({ perPage: 100 }),
          b = u.map((e, t) => ({
            id: t + 1,
            name: e.name,
            symbol: e.symbol.toUpperCase(),
            address: e.id,
            decimals: 18,
            totalSupply: e.total_supply ? e.total_supply.toString() : "N/A",
            holders: Math.floor(5e4 * Math.random()) + 1e3,
            marketCap: e.market_cap
              ? "$".concat((e.market_cap / 1e6).toFixed(1), "M")
              : "N/A",
            price: e.current_price
              ? "$".concat(e.current_price.toFixed(6))
              : "N/A",
            priceChange24h: e.price_change_percentage_24h
              ? ""
                  .concat(e.price_change_percentage_24h > 0 ? "+" : "")
                  .concat(e.price_change_percentage_24h.toFixed(2), "%")
              : "N/A",
            volume24h: e.total_volume
              ? "$".concat((e.total_volume / 1e6).toFixed(1), "M")
              : "N/A",
            verified: !0,
            type: "ERC-20",
            image: e.image,
            market_cap: e.market_cap,
            current_price: e.current_price,
            total_volume: e.total_volume,
            price_change_percentage_24h: e.price_change_percentage_24h,
          })),
          w = [
            ...b.filter(
              (t) =>
                t.name.toLowerCase().includes(e.toLowerCase()) ||
                t.symbol.toLowerCase().includes(e.toLowerCase()) ||
                t.address.toLowerCase().includes(e.toLowerCase())
            ),
          ].sort((e, t) => {
            let a, r;
            switch (o) {
              case "market_cap":
                (a = e.market_cap || 0), (r = t.market_cap || 0);
                break;
              case "current_price":
                (a = e.current_price || 0), (r = t.current_price || 0);
                break;
              case "holders":
                (a = e.holders), (r = t.holders);
                break;
              case "total_volume":
                (a = e.total_volume || 0), (r = t.total_volume || 0);
                break;
              case "price_change_percentage_24h":
                (a = e.price_change_percentage_24h || 0),
                  (r = t.price_change_percentage_24h || 0);
                break;
              default:
                (a = e[o]), (r = t[o]);
            }
            return "asc" === m ? (a > r ? 1 : -1) : a < r ? 1 : -1;
          }),
          f = u.reduce((e, t) => e + (t.market_cap || 0), 0),
          j = u.reduce((e, t) => e + (t.total_volume || 0), 0),
          N = b.reduce((e, t) => e + t.holders, 0);
        return (0, t.jsxs)("div", {
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
                      children: "Tokens",
                    }),
                    (0, t.jsx)("p", {
                      className:
                        "text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto",
                      children:
                        "Explore tokens on Etherchain. Track prices, market caps, and trading volumes.",
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
                          children: "Search Tokens",
                        }),
                        (0, t.jsx)("p", {
                          className: "text-gray-600 dark:text-gray-400",
                          children:
                            "Find tokens by name, symbol, or contract address",
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
                            onChange: (e) => n(e.target.value),
                            placeholder: "Search tokens...",
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
                            icon: s.faCoins,
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
                              children: "Total Tokens",
                            }),
                            (0, t.jsx)("p", {
                              className:
                                "text-2xl font-bold text-gray-900 dark:text-white",
                              children: u.length,
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
                            icon: s.faExchangeAlt,
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
                              children: "Total Volume",
                            }),
                            (0, t.jsxs)("p", {
                              className:
                                "text-2xl font-bold text-gray-900 dark:text-white",
                              children: ["$", (j / 1e9).toFixed(1), "B"],
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
                            icon: s.faChartLine,
                            className: "h-8 w-8 text-ethai dark:text-ethai",
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          className: "ml-4",
                          children: [
                            (0, t.jsx)("p", {
                              className:
                                "text-sm font-medium text-gray-600 dark:text-gray-400",
                              children: "Market Cap",
                            }),
                            (0, t.jsxs)("p", {
                              className:
                                "text-2xl font-bold text-gray-900 dark:text-white",
                              children: ["$", (f / 1e9).toFixed(1), "B"],
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
                            icon: s.faUsers,
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
                              children: "Holders",
                            }),
                            (0, t.jsxs)("p", {
                              className:
                                "text-2xl font-bold text-gray-900 dark:text-white",
                              children: [(N / 1e3).toFixed(1), "K"],
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
                      children: "Top Tokens by Market Cap",
                    }),
                  }),
                  y
                    ? (0, t.jsxs)("div", {
                        className: "flex justify-center items-center py-12",
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400",
                          }),
                          (0, t.jsx)("span", {
                            className: "ml-3 text-gray-600 dark:text-gray-400",
                            children: "Loading tokens...",
                          }),
                        ],
                      })
                    : k
                    ? (0, t.jsx)("div", {
                        className: "flex justify-center items-center py-12",
                        children: (0, t.jsxs)("div", {
                          className: "text-center",
                          children: [
                            (0, t.jsx)(r.FontAwesomeIcon, {
                              icon: s.faSpinner,
                              className:
                                "h-8 w-8 text-red-600 dark:text-red-400 mb-4",
                            }),
                            (0, t.jsx)("p", {
                              className: "text-red-600 dark:text-red-400",
                              children:
                                "Error loading tokens. Please try again later.",
                            }),
                          ],
                        }),
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
                                    children: "Token",
                                  }),
                                  (0, t.jsx)("th", {
                                    className:
                                      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "Price",
                                  }),
                                  (0, t.jsx)("th", {
                                    className:
                                      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "Change",
                                  }),
                                  (0, t.jsx)("th", {
                                    className:
                                      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "Market Cap",
                                  }),
                                  (0, t.jsx)("th", {
                                    className:
                                      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "Volume",
                                  }),
                                  (0, t.jsx)("th", {
                                    className:
                                      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                    children: "Holders",
                                  }),
                                ],
                              }),
                            }),
                            (0, t.jsxs)("tbody", {
                              className:
                                "bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800",
                              children: [
                                (0, t.jsxs)(
                                  "tr",
                                  {
                                    className:
                                      "hover:bg-white dark:hover:bg-gray-800 transition-colors",
                                    children: [
                                      (0, t.jsx)("td", {
                                        className:
                                          "px-6 py-4 whitespace-nowrap",
                                        children: (0, t.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, t.jsx)("div", {
                                              className:
                                                "flex-shrink-0 h-10 w-10",
                                              children: (0, t.jsx)(l.default, {
                                                src: "/logo_alpha.webp",
                                                alt: "Etherchain Logo",
                                                width: 40,
                                                height: 40,
                                              }),
                                            }),
                                            (0, t.jsxs)("div", {
                                              className: "ml-4",
                                              children: [
                                                (0, t.jsx)("div", {
                                                  className:
                                                    "text-sm font-medium text-gray-900 dark:text-white",
                                                  children: "Etherchain AI",
                                                }),
                                                (0, t.jsx)("div", {
                                                  className:
                                                    "text-sm text-gray-500 dark:text-gray-400",
                                                  children: "$ETHAI",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, t.jsx)("td", {
                                        className:
                                          "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white",
                                        children: "$0.005",
                                      }),
                                      (0, t.jsx)("td", {
                                        className:
                                          "px-6 py-4 whitespace-nowrap",
                                        children: (0, t.jsx)("span", {
                                          className:
                                            "inline-flex px-2 py-1 text-xs font-semibold rounded-full text-green-800 bg-green-100 dark:text-green-400 dark:bg-green-900/20",
                                          children: "+1.42%",
                                        }),
                                      }),
                                      (0, t.jsxs)("td", {
                                        className:
                                          "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white",
                                        children: [
                                          "$",
                                          parseFloat(
                                            new d.default(5e7)
                                              .multipliedBy(0.0051202)
                                              .toFixed(2)
                                          ).toLocaleString("fr-FR"),
                                        ],
                                      }),
                                      (0, t.jsxs)("td", {
                                        className:
                                          "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white",
                                        children: [
                                          "$",
                                          parseFloat(
                                            new d.default(5e7)
                                              .multipliedBy(0.001501)
                                              .toFixed(2)
                                          ).toLocaleString(),
                                        ],
                                      }),
                                      (0, t.jsx)("td", {
                                        className:
                                          "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white",
                                        children: g ? g.length : 0,
                                      }),
                                    ],
                                  },
                                  -1
                                ),
                                w.map((e) =>
                                  (0, t.jsxs)(
                                    "tr",
                                    {
                                      className:
                                        "hover:bg-white dark:hover:bg-gray-800 transition-colors",
                                      children: [
                                        (0, t.jsx)("td", {
                                          className: "px-6 whitespace-nowrap",
                                          children: (0, t.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                              (0, t.jsx)("div", {
                                                className:
                                                  "flex-shrink-0 h-10 w-10",
                                                children: e.image
                                                  ? (0, t.jsx)("img", {
                                                      src: e.image,
                                                      alt: e.name,
                                                      className:
                                                        "h-10 w-10 rounded-full",
                                                    })
                                                  : (0, t.jsx)("div", {
                                                      className:
                                                        "h-10 w-10 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center",
                                                      children: (0, t.jsx)(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-white font-bold text-sm",
                                                          children:
                                                            e.symbol.charAt(0),
                                                        }
                                                      ),
                                                    }),
                                              }),
                                              (0, t.jsxs)("div", {
                                                className: "ml-4",
                                                children: [
                                                  (0, t.jsx)("div", {
                                                    className:
                                                      "text-sm font-medium text-gray-900 dark:text-white",
                                                    children: e.name,
                                                  }),
                                                  (0, t.jsx)("div", {
                                                    className:
                                                      "text-sm text-gray-500 dark:text-gray-400",
                                                    children: e.symbol,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, t.jsxs)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white",
                                          children: [
                                            "$",
                                            parseFloat(
                                              e.price.slice(
                                                1,
                                                e.price.length - 1
                                              )
                                            ).toFixed(2),
                                          ],
                                        }),
                                        (0, t.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, t.jsx)("span", {
                                            className:
                                              "inline-flex px-2 py-1 text-xs font-semibold rounded-full ".concat(
                                                "N/A" !== e.priceChange24h &&
                                                  e.priceChange24h.startsWith(
                                                    "+"
                                                  )
                                                  ? "text-green-800 bg-green-100 dark:text-green-400 dark:bg-green-900/20"
                                                  : "N/A" !==
                                                      e.priceChange24h &&
                                                    e.priceChange24h.startsWith(
                                                      "-"
                                                    )
                                                  ? "text-red-800 bg-red-100 dark:text-red-400 dark:bg-red-900/20"
                                                  : "text-gray-800 bg-gray-100 dark:text-gray-400 dark:bg-gray-900/20"
                                              ),
                                            children: e.priceChange24h,
                                          }),
                                        }),
                                        (0, t.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white",
                                          children: e.marketCap,
                                        }),
                                        (0, t.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white",
                                          children: e.volume24h,
                                        }),
                                        (0, t.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white",
                                          children: e.holders.toLocaleString(),
                                        }),
                                      ],
                                    },
                                    e.id
                                  )
                                ),
                              ],
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

//# sourceMappingURL=fe2a32b940bfbda8.js.map
