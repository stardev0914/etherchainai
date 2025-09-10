(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    590569: (e) => {
      "use strict";
      e.s({ default: () => d });
      var r = e.i(731636),
        a = e.i(838653),
        s = e.i(12448),
        t = e.i(55157);
      function d() {
        var e, d, i, l, n, o;
        let [c, x] = (0, a.useState)("ethereum"),
          [m, g] = (0, a.useState)("etherchain"),
          [h, u] = (0, a.useState)(""),
          [b, y] = (0, a.useState)(""),
          [j, k] = (0, a.useState)(!1),
          [f, p] = (0, a.useState)(!1),
          [N, v] = (0, a.useState)(""),
          w = [
            { id: "ethereum", name: "Ethereum", icon: "🔵", chainId: 1 },
            { id: "etherchain", name: "Etherchain", icon: "🟣", chainId: 1337 },
            { id: "polygon", name: "Polygon", icon: "🟣", chainId: 137 },
            { id: "bsc", name: "BSC", icon: "🟡", chainId: 56 },
          ],
          I = async (e) =>
            (e.preventDefault(), h && b)
              ? 0 >= parseFloat(h)
                ? void v("Amount must be greater than 0")
                : b.startsWith("0x") && 42 === b.length
                ? void (k(!0),
                  v(""),
                  setTimeout(() => {
                    k(!1),
                      p(!0),
                      u(""),
                      y(""),
                      setTimeout(() => {
                        p(!1);
                      }, 5e3);
                  }, 3e3))
                : void v("Please enter a valid Ethereum address")
              : void v("Please fill in all fields"),
          A = (e) => w.find((r) => r.id === e);
        return (0, r.jsxs)("div", {
          className:
            "min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white ",
          children: [
            (0, r.jsx)("div", {
              className:
                "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-b border-gray-200 dark:border-gray-800",
              children: (0, r.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
                children: (0, r.jsx)("div", {
                  className: "flex items-center justify-between",
                  children: (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsxs)("h1", {
                        className:
                          "text-3xl font-bold text-gray-900 dark:text-white mb-2",
                        children: [
                          (0, r.jsx)(s.FontAwesomeIcon, {
                            icon: t.faExchangeAlt,
                            className: "mr-3 text-blue-600 dark:text-blue-400",
                          }),
                          "Token Bridge",
                        ],
                      }),
                      (0, r.jsx)("p", {
                        className: "text-gray-600 dark:text-gray-400",
                        children:
                          "Transfer tokens between Ethereum and Etherchain networks securely",
                      }),
                    ],
                  }),
                }),
              }),
            }),
            (0, r.jsxs)("div", {
              className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-8",
                  children: (0, r.jsxs)("form", {
                    onSubmit: I,
                    className: "space-y-6",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "space-y-3",
                        children: [
                          (0, r.jsxs)("label", {
                            className:
                              "text-sm font-medium flex items-center text-gray-900 dark:text-white",
                            children: [
                              (0, r.jsx)(s.FontAwesomeIcon, {
                                icon: t.faNetworkWired,
                                className:
                                  "mr-2 text-gray-500 dark:text-gray-400",
                              }),
                              "From Network",
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg p-4",
                            children: (0, r.jsxs)("div", {
                              className: "flex items-center justify-between",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "flex items-center",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "text-2xl mr-3",
                                      children:
                                        null == (e = A(c)) ? void 0 : e.icon,
                                    }),
                                    (0, r.jsxs)("div", {
                                      children: [
                                        (0, r.jsx)("div", {
                                          className:
                                            "font-semibold text-gray-900 dark:text-white",
                                          children:
                                            null == (d = A(c))
                                              ? void 0
                                              : d.name,
                                        }),
                                        (0, r.jsxs)("div", {
                                          className:
                                            "text-sm text-gray-600 dark:text-gray-400",
                                          children: [
                                            "Chain ID: ",
                                            null == (i = A(c))
                                              ? void 0
                                              : i.chainId,
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("select", {
                                  value: c,
                                  onChange: (e) => x(e.target.value),
                                  className:
                                    "bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500",
                                  children: w.map((e) =>
                                    (0, r.jsx)(
                                      "option",
                                      { value: e.id, children: e.name },
                                      e.id
                                    )
                                  ),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "flex justify-center",
                        children: (0, r.jsx)("button", {
                          type: "button",
                          onClick: () => {
                            x(m), g(c);
                          },
                          className:
                            "bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full p-3 transition-colors",
                          children: (0, r.jsx)(s.FontAwesomeIcon, {
                            icon: t.faArrowRight,
                            className: "text-blue-600 dark:text-blue-400",
                          }),
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "space-y-3",
                        children: [
                          (0, r.jsxs)("label", {
                            className:
                              "text-sm font-medium flex items-center text-gray-900 dark:text-white",
                            children: [
                              (0, r.jsx)(s.FontAwesomeIcon, {
                                icon: t.faNetworkWired,
                                className:
                                  "mr-2 text-gray-500 dark:text-gray-400",
                              }),
                              "To Network",
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg p-4",
                            children: (0, r.jsxs)("div", {
                              className: "flex items-center justify-between",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "flex items-center",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "text-2xl mr-3",
                                      children:
                                        null == (l = A(m)) ? void 0 : l.icon,
                                    }),
                                    (0, r.jsxs)("div", {
                                      children: [
                                        (0, r.jsx)("div", {
                                          className:
                                            "font-semibold text-gray-900 dark:text-white",
                                          children:
                                            null == (n = A(m))
                                              ? void 0
                                              : n.name,
                                        }),
                                        (0, r.jsxs)("div", {
                                          className:
                                            "text-sm text-gray-600 dark:text-gray-400",
                                          children: [
                                            "Chain ID: ",
                                            null == (o = A(m))
                                              ? void 0
                                              : o.chainId,
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("select", {
                                  value: m,
                                  onChange: (e) => g(e.target.value),
                                  className:
                                    "bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500",
                                  children: w.map((e) =>
                                    (0, r.jsx)(
                                      "option",
                                      { value: e.id, children: e.name },
                                      e.id
                                    )
                                  ),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "space-y-3",
                        children: [
                          (0, r.jsxs)("label", {
                            className:
                              "text-sm font-medium flex items-center text-gray-900 dark:text-white",
                            children: [
                              (0, r.jsx)(s.FontAwesomeIcon, {
                                icon: t.faCoins,
                                className:
                                  "mr-2 text-gray-500 dark:text-gray-400",
                              }),
                              "Amount",
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, r.jsx)("input", {
                                type: "number",
                                placeholder: "0.0",
                                value: h,
                                onChange: (e) => u(e.target.value),
                                className:
                                  "w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
                                step: "0.000001",
                                min: "0",
                              }),
                              (0, r.jsx)("div", {
                                className:
                                  "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400",
                                children: "ETH",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "space-y-3",
                        children: [
                          (0, r.jsxs)("label", {
                            className:
                              "text-sm font-medium flex items-center text-gray-900 dark:text-white",
                            children: [
                              (0, r.jsx)(s.FontAwesomeIcon, {
                                icon: t.faWallet,
                                className:
                                  "mr-2 text-gray-500 dark:text-gray-400",
                              }),
                              "Recipient Address",
                            ],
                          }),
                          (0, r.jsx)("input", {
                            type: "text",
                            placeholder: "0x...",
                            value: b,
                            onChange: (e) => y(e.target.value),
                            className:
                              "w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
                          }),
                        ],
                      }),
                      N &&
                        (0, r.jsxs)("div", {
                          className:
                            "flex items-center text-red-600 dark:text-red-400 text-sm",
                          children: [
                            (0, r.jsx)(s.FontAwesomeIcon, {
                              icon: t.faExclamationTriangle,
                              className: "mr-2",
                            }),
                            N,
                          ],
                        }),
                      f &&
                        (0, r.jsxs)("div", {
                          className:
                            "flex items-center text-green-600 dark:text-green-400 text-sm",
                          children: [
                            (0, r.jsx)(s.FontAwesomeIcon, {
                              icon: t.faCheckCircle,
                              className: "mr-2",
                            }),
                            "Bridge transaction initiated successfully! Your tokens will be transferred shortly.",
                          ],
                        }),
                      (0, r.jsx)("button", {
                        type: "submit",
                        disabled: j,
                        className:
                          "w-full py-4 px-6 rounded-lg font-semibold transition-colors ".concat(
                            j
                              ? "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                              : "bg-blue-600 text-white hover:bg-blue-700"
                          ),
                        children: j
                          ? (0, r.jsxs)("div", {
                              className: "flex items-center justify-center",
                              children: [
                                (0, r.jsx)(s.FontAwesomeIcon, {
                                  icon: t.faSpinner,
                                  className: "animate-spin mr-2",
                                }),
                                "Processing Bridge...",
                              ],
                            })
                          : (0, r.jsxs)("div", {
                              className: "flex items-center justify-center",
                              children: [
                                (0, r.jsx)(s.FontAwesomeIcon, {
                                  icon: t.faExchangeAlt,
                                  className: "mr-2",
                                }),
                                "Bridge Tokens",
                              ],
                            }),
                      }),
                    ],
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: "mt-8 grid md:grid-cols-2 gap-6",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm",
                      children: [
                        (0, r.jsx)("h3", {
                          className:
                            "text-lg font-semibold text-gray-900 dark:text-white mb-4",
                          children: "How Bridge Works",
                        }),
                        (0, r.jsxs)("ul", {
                          className:
                            "space-y-2 text-gray-600 dark:text-gray-400",
                          children: [
                            (0, r.jsx)("li", {
                              children:
                                "• Select source and destination networks",
                            }),
                            (0, r.jsx)("li", {
                              children: "• Enter amount and recipient address",
                            }),
                            (0, r.jsx)("li", {
                              children:
                                "• Confirm transaction on source network",
                            }),
                            (0, r.jsx)("li", {
                              children: "• Wait for bridge confirmation",
                            }),
                            (0, r.jsx)("li", {
                              children:
                                "• Receive tokens on destination network",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm",
                      children: [
                        (0, r.jsx)("h3", {
                          className:
                            "text-lg font-semibold text-gray-900 dark:text-white mb-4",
                          children: "Bridge Fees",
                        }),
                        (0, r.jsxs)("ul", {
                          className:
                            "space-y-2 text-gray-600 dark:text-gray-400",
                          children: [
                            (0, r.jsx)("li", {
                              children: "• Network gas fees on source chain",
                            }),
                            (0, r.jsx)("li", {
                              children: "• Bridge processing fee: 0.1%",
                            }),
                            (0, r.jsx)("li", {
                              children:
                                "• Network gas fees on destination chain",
                            }),
                            (0, r.jsx)("li", {
                              children: "• Estimated time: 5-15 minutes",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "mt-8",
                  children: [
                    (0, r.jsx)("h3", {
                      className:
                        "text-xl font-semibold text-gray-900 dark:text-white mb-6",
                      children: "Supported Networks",
                    }),
                    (0, r.jsx)("div", {
                      className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4",
                      children: w.map((e) =>
                        (0, r.jsx)(
                          "div",
                          {
                            className:
                              "bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm",
                            children: (0, r.jsxs)("div", {
                              className: "flex items-center",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "text-2xl mr-3",
                                  children: e.icon,
                                }),
                                (0, r.jsxs)("div", {
                                  children: [
                                    (0, r.jsx)("div", {
                                      className:
                                        "font-semibold text-gray-900 dark:text-white",
                                      children: e.name,
                                    }),
                                    (0, r.jsxs)("div", {
                                      className:
                                        "text-sm text-gray-600 dark:text-gray-400",
                                      children: ["Chain ID: ", e.chainId],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          e.id
                        )
                      ),
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

//# sourceMappingURL=9e50a053ddc91b24.js.map
