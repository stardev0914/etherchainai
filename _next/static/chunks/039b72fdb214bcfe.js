(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    715024: (e) => {
      "use strict";
      e.s({ default: () => l });
      var a = e.i(731636),
        t = e.i(838653),
        r = e.i(12448),
        s = e.i(55157);
      function l() {
        var e, l;
        let [n, d] = (0, t.useState)("ETH"),
          [o, i] = (0, t.useState)("ETHAI"),
          [c, x] = (0, t.useState)(""),
          [m, b] = (0, t.useState)(""),
          [g, h] = (0, t.useState)(0.5),
          [u, y] = (0, t.useState)(!1),
          [p, j] = (0, t.useState)(!1),
          [w, f] = (0, t.useState)(""),
          [k, N] = (0, t.useState)(!1),
          v = [
            { symbol: "ETH", name: "Ethereum", icon: "🔵", balance: "0.0" },
            {
              symbol: "ETHAI",
              name: "Etherchain AI",
              icon: "🟣",
              balance: "0.0",
            },
            { symbol: "USDC", name: "USD Coin", icon: "🔵", balance: "0.0" },
            { symbol: "USDT", name: "Tether", icon: "🟢", balance: "0.0" },
            {
              symbol: "WBTC",
              name: "Wrapped Bitcoin",
              icon: "🟠",
              balance: "0.0",
            },
          ],
          S = async (e) =>
            (e.preventDefault(), k)
              ? !c || 0 >= parseFloat(c)
                ? void f("Please enter a valid amount")
                : void (y(!0),
                  f(""),
                  setTimeout(() => {
                    y(!1),
                      j(!0),
                      x(""),
                      b(""),
                      setTimeout(() => {
                        j(!1);
                      }, 5e3);
                  }, 2e3))
              : void f("Please connect your wallet first"),
          A = (e) => v.find((a) => a.symbol === e);
        return (0, a.jsxs)("div", {
          className:
            "min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white ",
          children: [
            (0, a.jsx)("div", {
              className:
                "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-b border-gray-200 dark:border-gray-800",
              children: (0, a.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
                children: (0, a.jsx)("div", {
                  className: "flex items-center justify-between",
                  children: (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsxs)("h1", {
                        className:
                          "text-3xl font-bold text-gray-900 dark:text-white mb-2",
                        children: [
                          (0, a.jsx)(r.FontAwesomeIcon, {
                            icon: s.faExchangeAlt,
                            className: "mr-3 text-blue-600 dark:text-blue-400",
                          }),
                          "Token Swap",
                        ],
                      }),
                      (0, a.jsx)("p", {
                        className: "text-gray-600 dark:text-gray-400",
                        children:
                          "Swap tokens instantly on Etherchain with the best rates",
                      }),
                    ],
                  }),
                }),
              }),
            }),
            (0, a.jsxs)("div", {
              className: "container py-12 max-w-lg mx-auto",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "bg-white dark:bg-gray-900/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "px-6 py-6 bg-white dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700",
                      children: (0, a.jsxs)("h2", {
                        className:
                          "text-2xl font-bold text-center text-gray-900 dark:text-white",
                        children: [
                          "Swap ",
                          (0, a.jsx)("span", {
                            className:
                              "bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent",
                            children: "ETH",
                          }),
                          " Anywhere",
                        ],
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "p-4",
                      children: (0, a.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "space-y-2 pt-4 px-4 pb-4 rounded-lg bg-white dark:bg-gray-900/50 border-2 border-blue-200 dark:border-blue-500/20",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "flex flex-wrap items-center justify-between gap-4",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "text-sm text-gray-700 dark:text-gray-300 font-semibold",
                                    children: "You Pay",
                                  }),
                                  (0, a.jsxs)("button", {
                                    className:
                                      "inline-flex items-center font-medium transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 text-sm gap-2 justify-between border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-transparent text-gray-900 dark:text-white",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "text-sm",
                                        children: "Select a token",
                                      }),
                                      (0, a.jsx)(r.FontAwesomeIcon, {
                                        icon: s.faAngleDown,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)("input", {
                                type: "number",
                                min: "0",
                                placeholder: "0.0",
                                value: c,
                                onChange: (e) => {
                                  var a;
                                  x((a = e.target.value)),
                                    a && parseFloat(a) > 0
                                      ? b((1.5 * parseFloat(a)).toFixed(6))
                                      : b("");
                                },
                                className:
                                  "w-full px-2 py-3 text-2xl outline-none text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 border-b border-blue-200 dark:border-blue-500/20 bg-transparent",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "mt-4 flex items-center justify-between",
                                children: (0, a.jsxs)("span", {
                                  className:
                                    "text-sm text-gray-600 dark:text-gray-400",
                                  children: [
                                    "Balance: ",
                                    null == (e = A(n)) ? void 0 : e.balance,
                                    " ",
                                    n,
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsx)("div", {
                            className: "relative py-2",
                            children: (0, a.jsx)("div", {
                              className:
                                "absolute top-1/2 left-0 right-0 -translate-y-1/2 flex items-center justify-center bg-white dark:bg-gray-900 size-15 mx-auto rounded-lg",
                              children: (0, a.jsx)("button", {
                                onClick: () => {
                                  d(o), i(n), x(m), b(c);
                                },
                                className:
                                  "size-12 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors",
                                children: (0, a.jsx)(r.FontAwesomeIcon, {
                                  icon: s.faArrowsUpDown,
                                  className: "text-blue-600 dark:text-blue-400",
                                }),
                              }),
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "space-y-2 pt-4 px-4 pb-4 rounded-lg bg-white dark:bg-gray-900/50 border-2 border-blue-200 dark:border-blue-500/20",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "flex flex-wrap items-center justify-between gap-4",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "text-sm text-gray-700 dark:text-gray-300 font-semibold",
                                    children: "You Get",
                                  }),
                                  (0, a.jsxs)("button", {
                                    className:
                                      "inline-flex items-center font-medium transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 text-sm gap-2 justify-between border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-transparent text-gray-900 dark:text-white",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "text-sm",
                                        children: "Select a token",
                                      }),
                                      (0, a.jsx)(r.FontAwesomeIcon, {
                                        icon: s.faAngleDown,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)("input", {
                                type: "number",
                                placeholder: "0.0",
                                value: m,
                                readOnly: !0,
                                className:
                                  "w-full px-2 py-3 text-2xl outline-none text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 border-b border-blue-200 dark:border-blue-500/20 bg-transparent",
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "mt-4 flex items-center justify-between",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "text-sm font-medium text-gray-600 dark:text-gray-400",
                                    children: (0, a.jsxs)("button", {
                                      className:
                                        "flex items-center gap-2 hover:text-gray-700 dark:hover:text-gray-300 transition-colors",
                                      children: [
                                        (0, a.jsx)(r.FontAwesomeIcon, {
                                          icon: s.faPencilRuler,
                                        }),
                                        (0, a.jsxs)("span", {
                                          children: [g, "%"],
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, a.jsxs)("span", {
                                    className:
                                      "text-sm text-gray-600 dark:text-gray-400",
                                    children: [
                                      "Balance: ",
                                      null == (l = A(o)) ? void 0 : l.balance,
                                      " ",
                                      o,
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          k
                            ? (0, a.jsxs)(a.Fragment, {
                                children: [
                                  w &&
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex items-center text-red-600 dark:text-red-400 text-sm",
                                      children: [
                                        (0, a.jsx)(r.FontAwesomeIcon, {
                                          icon: s.faExclamationTriangle,
                                          className: "mr-2",
                                        }),
                                        w,
                                      ],
                                    }),
                                  p &&
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex items-center text-green-600 dark:text-green-400 text-sm",
                                      children: [
                                        (0, a.jsx)(r.FontAwesomeIcon, {
                                          icon: s.faCheckCircle,
                                          className: "mr-2",
                                        }),
                                        "Swap completed successfully!",
                                      ],
                                    }),
                                  (0, a.jsx)("button", {
                                    onClick: S,
                                    disabled: u || !c || 0 >= parseFloat(c),
                                    className:
                                      "w-full py-4 px-6 rounded-lg font-semibold transition-colors h-12 ".concat(
                                        u || !c || 0 >= parseFloat(c)
                                          ? "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                                          : "bg-blue-600 text-white hover:bg-blue-700"
                                      ),
                                    children: u
                                      ? (0, a.jsxs)("div", {
                                          className:
                                            "flex items-center justify-center",
                                          children: [
                                            (0, a.jsx)(r.FontAwesomeIcon, {
                                              icon: s.faSpinner,
                                              className: "animate-spin mr-2",
                                            }),
                                            "Swapping...",
                                          ],
                                        })
                                      : (0, a.jsxs)("div", {
                                          className:
                                            "flex items-center justify-center",
                                          children: [
                                            (0, a.jsx)(r.FontAwesomeIcon, {
                                              icon: s.faExchangeAlt,
                                              className: "mr-2",
                                            }),
                                            "Swap Tokens",
                                          ],
                                        }),
                                  }),
                                ],
                              })
                            : (0, a.jsxs)("button", {
                                onClick: () => {
                                  N(!0),
                                    setTimeout(() => {
                                      v.map((e) => ({
                                        ...e,
                                        balance: (10 * Math.random()).toFixed(
                                          4
                                        ),
                                      }));
                                    }, 1e3);
                                },
                                className:
                                  "w-full py-4 px-6 rounded-lg font-semibold transition-colors bg-blue-600 text-white hover:bg-blue-700 h-12",
                                children: [
                                  (0, a.jsx)(r.FontAwesomeIcon, {
                                    icon: s.faWallet,
                                    className: "mr-2",
                                  }),
                                  "Connect Wallet",
                                ],
                              }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "mt-8 grid md:grid-cols-2 gap-6",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm",
                      children: [
                        (0, a.jsx)("h3", {
                          className:
                            "text-lg font-semibold text-gray-900 dark:text-white mb-4",
                          children: "How to Swap",
                        }),
                        (0, a.jsxs)("ul", {
                          className:
                            "space-y-2 text-gray-600 dark:text-gray-400",
                          children: [
                            (0, a.jsx)("li", {
                              children: "• Connect your wallet",
                            }),
                            (0, a.jsx)("li", {
                              children: "• Select tokens to swap",
                            }),
                            (0, a.jsx)("li", { children: "• Enter amount" }),
                            (0, a.jsx)("li", {
                              children: "• Review and confirm",
                            }),
                            (0, a.jsx)("li", {
                              children: "• Wait for transaction",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm",
                      children: [
                        (0, a.jsx)("h3", {
                          className:
                            "text-lg font-semibold text-gray-900 dark:text-white mb-4",
                          children: "Supported Tokens",
                        }),
                        (0, a.jsx)("div", {
                          className: "grid grid-cols-2 gap-2",
                          children: v.map((e) =>
                            (0, a.jsxs)(
                              "div",
                              {
                                className:
                                  "flex items-center text-gray-600 dark:text-gray-400",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "mr-2",
                                    children: e.icon,
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "text-sm",
                                    children: e.symbol,
                                  }),
                                ],
                              },
                              e.symbol
                            )
                          ),
                        }),
                      ],
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

//# sourceMappingURL=3608ff104a0f0472.js.map
