(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    430396: (e) => {
      "use strict";
      e.s({ default: () => r });
      var s = e.i(731636),
        t = e.i(838653);
      function r() {
        let [e, r] = (0, t.useState)(!1),
          a = (0, t.useRef)(null);
        return (
          (0, t.useEffect)(
            () => (
              e &&
                (a.current && clearTimeout(a.current),
                (a.current = setTimeout(() => {
                  r(!1);
                }, 2e3))),
              () => a.current && clearTimeout(a.current)
            ),
            [e]
          ),
          (0, s.jsx)("section", {
            className:
              "relative py-20 light:bg-gray-100 dark:bg-gray-950 overflow-hidden w-full",
            children: (0, s.jsxs)("div", {
              className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: [
                (0, s.jsxs)("div", {
                  className: "text-center mb-16",
                  children: [
                    (0, s.jsx)("h2", {
                      className:
                        "text-sm font-semibold text-ethai dark:text-ethai mb-2 uppercase tracking-wide",
                      children: "Presale Token Allocation",
                    }),
                    (0, s.jsx)("h3", {
                      className:
                        "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6",
                      children: "Tokenomics",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "text-lg text-gray-600 dark:text-gray-300 mb-8",
                      children: "Etherchain AI Tokenomics",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "grid lg:grid-cols-2 gap-12 items-center",
                  children: [
                    (0, s.jsx)("div", {
                      className: "flex justify-center",
                      children: (0, s.jsxs)("div", {
                        className: "relative w-80 h-80",
                        children: [
                          (0, s.jsxs)("svg", {
                            className: "w-full h-full transform -rotate-90",
                            viewBox: "0 0 100 100",
                            children: [
                              (0, s.jsx)("circle", {
                                cx: "50",
                                cy: "50",
                                r: "40",
                                fill: "none",
                                stroke: "gray-300 dark:stroke-gray-600",
                                strokeWidth: "8",
                              }),
                              (0, s.jsx)("circle", {
                                cx: "50",
                                cy: "50",
                                r: "40",
                                fill: "none",
                                stroke: "url(#tokenomicsGradient)",
                                strokeWidth: "8",
                                strokeDasharray: "50 50",
                                strokeLinecap: "round",
                              }),
                              (0, s.jsx)("circle", {
                                cx: "50",
                                cy: "50",
                                r: "40",
                                fill: "none",
                                stroke: "url(#tokenomicsGradient2)",
                                strokeWidth: "8",
                                strokeDasharray: "25 75",
                                strokeDashoffset: "-50",
                                strokeLinecap: "round",
                              }),
                              (0, s.jsx)("circle", {
                                cx: "50",
                                cy: "50",
                                r: "40",
                                fill: "none",
                                stroke: "url(#tokenomicsGradient3)",
                                strokeWidth: "8",
                                strokeDasharray: "10 90",
                                strokeDashoffset: "-75",
                                strokeLinecap: "round",
                              }),
                              (0, s.jsx)("circle", {
                                cx: "50",
                                cy: "50",
                                r: "40",
                                fill: "none",
                                stroke: "url(#tokenomicsGradient4)",
                                strokeWidth: "8",
                                strokeDasharray: "8 92",
                                strokeDashoffset: "-85",
                                strokeLinecap: "round",
                              }),
                              (0, s.jsx)("circle", {
                                cx: "50",
                                cy: "50",
                                r: "40",
                                fill: "none",
                                stroke: "url(#tokenomicsGradient5)",
                                strokeWidth: "8",
                                strokeDasharray: "5 95",
                                strokeDashoffset: "-93",
                                strokeLinecap: "round",
                              }),
                              (0, s.jsx)("circle", {
                                cx: "50",
                                cy: "50",
                                r: "40",
                                fill: "none",
                                stroke: "url(#tokenomicsGradient6)",
                                strokeWidth: "8",
                                strokeDasharray: "2 98",
                                strokeDashoffset: "-98",
                                strokeLinecap: "round",
                              }),
                              (0, s.jsxs)("defs", {
                                children: [
                                  (0, s.jsxs)("linearGradient", {
                                    id: "tokenomicsGradient",
                                    children: [
                                      (0, s.jsx)("stop", {
                                        offset: "0%",
                                        stopColor: "#512da8",
                                      }),
                                      (0, s.jsx)("stop", {
                                        offset: "100%",
                                        stopColor: "#673ab7",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("linearGradient", {
                                    id: "tokenomicsGradient2",
                                    children: [
                                      (0, s.jsx)("stop", {
                                        offset: "0%",
                                        stopColor: "#673ab7",
                                      }),
                                      (0, s.jsx)("stop", {
                                        offset: "100%",
                                        stopColor: "#e91e63",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("linearGradient", {
                                    id: "tokenomicsGradient3",
                                    children: [
                                      (0, s.jsx)("stop", {
                                        offset: "0%",
                                        stopColor: "#e91e63",
                                      }),
                                      (0, s.jsx)("stop", {
                                        offset: "100%",
                                        stopColor: "#9333ea",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("linearGradient", {
                                    id: "tokenomicsGradient4",
                                    children: [
                                      (0, s.jsx)("stop", {
                                        offset: "0%",
                                        stopColor: "#9333ea",
                                      }),
                                      (0, s.jsx)("stop", {
                                        offset: "100%",
                                        stopColor: "#3b82f6",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("linearGradient", {
                                    id: "tokenomicsGradient5",
                                    children: [
                                      (0, s.jsx)("stop", {
                                        offset: "0%",
                                        stopColor: "#3b82f6",
                                      }),
                                      (0, s.jsx)("stop", {
                                        offset: "100%",
                                        stopColor: "#10b981",
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("linearGradient", {
                                    id: "tokenomicsGradient6",
                                    children: [
                                      (0, s.jsx)("stop", {
                                        offset: "0%",
                                        stopColor: "#10b981",
                                      }),
                                      (0, s.jsx)("stop", {
                                        offset: "100%",
                                        stopColor: "#f59e0b",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "absolute inset-0 flex items-center justify-center",
                            children: (0, s.jsxs)("div", {
                              className: "text-center",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "text-2xl font-bold text-gray-900 dark:text-white",
                                  children: "ETHAI",
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "text-sm text-gray-600 dark:text-gray-300",
                                  children: "Token",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "space-y-4 w-full max-w-[400px] mx-auto lg:max-w-none lg:mx-0",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "flex items-center justify-between p-4 bg-white dark:bg-[#0B101C] rounded-lg shadow-sm border border-gray-200 dark:border-gray-600",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex items-center space-x-3",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "w-4 h-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full",
                                }),
                                (0, s.jsx)("span", {
                                  className:
                                    "text-gray-900 dark:text-white font-medium",
                                  children: "Presale",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "text-right",
                              children: [
                                (0, s.jsx)("span", {
                                  className:
                                    "text-[#0B101C] dark:text-gray-300 font-semibold",
                                  children: "50%",
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400",
                                  children: "25,000,000 tokens",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex items-center justify-between p-4 bg-white dark:bg-[#0B101C] rounded-lg shadow-sm border border-gray-200 dark:border-gray-600",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex items-center space-x-3",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "w-4 h-4 bg-gradient-to-r from-purple-700 to-pink-600 rounded-full",
                                }),
                                (0, s.jsx)("span", {
                                  className:
                                    "text-gray-900 dark:text-white font-medium",
                                  children: "Liquidity",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "text-right",
                              children: [
                                (0, s.jsx)("span", {
                                  className:
                                    "text-[#0B101C] dark:text-gray-300 font-semibold",
                                  children: "25%",
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400",
                                  children: "12,500,000 tokens",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex items-center justify-between p-4 bg-white dark:bg-[#0B101C] rounded-lg shadow-sm border border-gray-200 dark:border-gray-600",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex items-center space-x-3",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "w-4 h-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full",
                                }),
                                (0, s.jsx)("span", {
                                  className:
                                    "text-gray-900 dark:text-white font-medium",
                                  children: "Marketing",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "text-right",
                              children: [
                                (0, s.jsx)("span", {
                                  className:
                                    "text-[#0B101C] dark:text-gray-300 font-semibold",
                                  children: "10%",
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400",
                                  children: "5,000,000 tokens",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex items-center justify-between p-4 bg-white dark:bg-[#0B101C] rounded-lg shadow-sm border border-gray-200 dark:border-gray-600",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex items-center space-x-3",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full",
                                }),
                                (0, s.jsx)("span", {
                                  className:
                                    "text-gray-900 dark:text-white font-medium",
                                  children: "Investors",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "text-right",
                              children: [
                                (0, s.jsx)("span", {
                                  className:
                                    "text-[#0B101C] dark:text-gray-300 font-semibold",
                                  children: "8%",
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400",
                                  children: "4,000,000 tokens",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex items-center justify-between p-4 bg-white dark:bg-[#0B101C] rounded-lg shadow-sm border border-gray-200 dark:border-gray-600",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex items-center space-x-3",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "w-4 h-4 bg-gradient-to-r from-blue-600 to-green-500 rounded-full",
                                }),
                                (0, s.jsx)("span", {
                                  className:
                                    "text-gray-900 dark:text-white font-medium",
                                  children: "Giveaway & Airdrops",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "text-right",
                              children: [
                                (0, s.jsx)("span", {
                                  className:
                                    "text-[#0B101C] dark:text-gray-300 font-semibold",
                                  children: "5%",
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400",
                                  children: "2,500,000 tokens",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "flex items-center justify-between p-4 bg-white dark:bg-[#0B101C] rounded-lg shadow-sm border border-gray-200 dark:border-gray-600",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex items-center space-x-3",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "w-4 h-4 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full",
                                }),
                                (0, s.jsx)("span", {
                                  className:
                                    "text-gray-900 dark:text-white font-medium",
                                  children: "Buyback & Burn",
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "text-right",
                              children: [
                                (0, s.jsx)("span", {
                                  className:
                                    "text-[#0B101C] dark:text-gray-300 font-semibold",
                                  children: "2%",
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400",
                                  children: "1,000,000 tokens",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "mt-8 p-6 bg-white dark:bg-[#0B101C] rounded-lg shadow-sm border border-gray-200 dark:border-gray-600",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "mb-4",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "text-sm text-gray-500 dark:text-gray-400 mb-2",
                                  children: "Total Supply:",
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "text-2xl font-bold text-ethai dark:text-ethai",
                                  children: "50,000,000 ETHAI",
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "text-sm text-gray-400 dark:text-gray-600 mb-2",
                              children: "Contract Address:",
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "flex sm:flex-row flex-col items-center space-x-2",
                              children: (0, s.jsx)("code", {
                                className:
                                  "text-xs bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded font-mono text-[#0B101C] dark:text-gray-200 flex-1 overflow-clip",
                                children:
                                  "0xE8AA1AD793ed17C9115DB1eEb9998Ea80c72f380",
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "flex flex-col-reverse items-center lg:flex-row justify-between",
                              children: [
                                (0, s.jsxs)("button", {
                                  href: "#",
                                  className:
                                    "inline-flex items-start mt-3 text-ethai dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium",
                                  children: [
                                    (0, s.jsx)("svg", {
                                      className:
                                        "w-5 h-5 mr-2 text-red-600 dark:text-red-600",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      children: (0, s.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z",
                                      }),
                                    }),
                                    "Note: Do not send any money to this contract address.",
                                  ],
                                }),
                                (0, s.jsxs)("a", {
                                  role: "button",
                                  onClick: () => {
                                    navigator.clipboard.writeText(
                                      "0xE8AA1AD793ed17C9115DB1eEb9998Ea80c72f380"
                                    ),
                                      r(!1),
                                      requestAnimationFrame(() => {
                                        r(!0);
                                      });
                                  },
                                  className:
                                    "inline-flex items-center mt-3 text-ethai dark:text-ethai hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 text-center rounded",
                                  children: [
                                    "Click to Copy",
                                    (0, s.jsx)("svg", {
                                      className: "w-4 h-4 ml-1",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24",
                                      children: (0, s.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14",
                                      }),
                                    }),
                                  ],
                                }),
                                e &&
                                  (0, s.jsxs)("div", {
                                    role: "status",
                                    "aria-live": "polite",
                                    className:
                                      "fixed z-[999] bottom-6 right-6 w-[280px] pointer-events-auto animate-toast-enter bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 rounded-xl shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25)] px-4 py-3 flex items-start gap-3 text-sm font-medium text-gray-800 dark:text-gray-100",
                                    children: [
                                      (0, s.jsx)("div", {
                                        className:
                                          "mt-0.5 flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-sm",
                                        children: (0, s.jsx)("svg", {
                                          className: "w-4 h-4",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          stroke: "currentColor",
                                          strokeWidth: "2",
                                          children: (0, s.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M5 13l4 4L19 7",
                                          }),
                                        }),
                                      }),
                                      (0, s.jsxs)("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                          (0, s.jsx)("p", {
                                            className:
                                              "leading-snug tracking-tight",
                                            children:
                                              "Address copied to clipboard.",
                                          }),
                                          (0, s.jsx)("div", {
                                            className:
                                              "relative mt-2 h-1 w-full rounded-full overflow-hidden bg-gray-300/40 dark:bg-gray-700/50",
                                            children: (0, s.jsx)("span", {
                                              className:
                                                "absolute inset-0 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 animate-progress-bar",
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, s.jsx)("button", {
                                        onClick: () => r(!1),
                                        className:
                                          "shrink-0 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded",
                                        "aria-label": "Close",
                                        children: (0, s.jsx)("svg", {
                                          className: "w-4 h-4",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor",
                                          strokeWidth: "2",
                                          fill: "none",
                                          children: (0, s.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M6 6l12 12M6 18L18 6",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      e.i(435187);
    },
    631730: (e) => {
      e.n(e.i(430396));
    },
  },
]);

//# sourceMappingURL=2ee5d739a183a0c6.js.map
