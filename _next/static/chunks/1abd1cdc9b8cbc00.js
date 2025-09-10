(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    255949: (e) => {
      "use strict";
      e.s({ default: () => i });
      var a = e.i(731636),
        t = e.i(838653),
        r = e.i(12448),
        s = e.i(55157);
      function i() {
        let [e, i] = (0, t.useState)(""),
          [d, l] = (0, t.useState)([]),
          [c, n] = (0, t.useState)(!0),
          [x, o] = (0, t.useState)("all");
        (0, t.useEffect)(() => {
          let e = [
            {
              hash: "0x1234567890abcdef1234567890abcdef12345678",
              sender: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
              target: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
              nonce: "1",
              callData: "0x...",
              callGasLimit: "100,000",
              verificationGasLimit: "500,000",
              preVerificationGas: "21,000",
              maxFeePerGas: "15 Gwei",
              maxPriorityFeePerGas: "1.5 Gwei",
              paymasterAndData: "0x...",
              signature: "0x...",
              status: "success",
              timestamp: "2 minutes ago",
              blockNumber: "12,345,678",
            },
            {
              hash: "0xabcdef1234567890abcdef1234567890abcdef12",
              sender: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
              target: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
              nonce: "2",
              callData: "0x...",
              callGasLimit: "150,000",
              verificationGasLimit: "600,000",
              preVerificationGas: "21,000",
              maxFeePerGas: "18 Gwei",
              maxPriorityFeePerGas: "2 Gwei",
              paymasterAndData: "0x...",
              signature: "0x...",
              status: "pending",
              timestamp: "5 minutes ago",
              blockNumber: "12,345,679",
            },
            {
              hash: "0x567890abcdef1234567890abcdef1234567890ab",
              sender: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
              target: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
              nonce: "3",
              callData: "0x...",
              callGasLimit: "80,000",
              verificationGasLimit: "400,000",
              preVerificationGas: "21,000",
              maxFeePerGas: "12 Gwei",
              maxPriorityFeePerGas: "1 Gwei",
              paymasterAndData: "0x...",
              signature: "0x...",
              status: "failed",
              timestamp: "8 minutes ago",
              blockNumber: "12,345,680",
            },
          ];
          setTimeout(() => {
            l(e), n(!1);
          }, 1e3);
        }, []);
        let m = (e) => "".concat(e.slice(0, 6), "...").concat(e.slice(-4)),
          h = (e) => {
            switch (e) {
              case "success":
                return "text-green-600 dark:text-green-500";
              case "pending":
                return "text-yellow-600 dark:text-yellow-500";
              case "failed":
                return "text-red-600 dark:text-red-500";
              default:
                return "text-gray-600 dark:text-gray-500";
            }
          },
          g = d.filter((e) => "all" === x || e.status === x);
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
                        children: "Etherchain User Operations",
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
                              children: (0, a.jsx)(r.FontAwesomeIcon, {
                                icon: s.faSearch,
                                className: "h-5 w-5 text-gray-400",
                              }),
                            }),
                            (0, a.jsx)("input", {
                              type: "text",
                              value: e,
                              onChange: (e) => i(e.target.value),
                              placeholder:
                                "Search user operations, addresses, and transaction hashes",
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
                            children: (0, a.jsx)(r.FontAwesomeIcon, {
                              icon: s.faUserCog,
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
                                children: "Total User Operations",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-2xl font-semibold text-gray-900 dark:text-white",
                                children: "45,678",
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
                              icon: s.faCheckCircle,
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
                                children: "Successful",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-2xl font-semibold text-gray-900 dark:text-white",
                                children: "42,123",
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
                              icon: s.faSpinner,
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
                                children: "Pending",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-2xl font-semibold text-gray-900 dark:text-white",
                                children: "2,345",
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
                              icon: s.faTimesCircle,
                              className:
                                "h-8 w-8 text-red-600 dark:text-red-400",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "ml-4",
                            children: [
                              (0, a.jsx)("p", {
                                className:
                                  "text-sm font-medium text-gray-600 dark:text-gray-400",
                                children: "Failed",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-2xl font-semibold text-gray-900 dark:text-white",
                                children: "1,210",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className:
                    "bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4 mb-6 shadow-sm",
                  children: (0, a.jsxs)("div", {
                    className: "flex space-x-4",
                    children: [
                      (0, a.jsx)("button", {
                        onClick: () => o("all"),
                        className:
                          "px-4 py-2 rounded-md text-sm font-medium transition-colors ".concat(
                            "all" === x
                              ? "bg-blue-600 text-white"
                              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                          ),
                        children: "All Operations",
                      }),
                      (0, a.jsx)("button", {
                        onClick: () => o("success"),
                        className:
                          "px-4 py-2 rounded-md text-sm font-medium transition-colors ".concat(
                            "success" === x
                              ? "bg-green-600 text-white"
                              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                          ),
                        children: "Successful",
                      }),
                      (0, a.jsx)("button", {
                        onClick: () => o("pending"),
                        className:
                          "px-4 py-2 rounded-md text-sm font-medium transition-colors ".concat(
                            "pending" === x
                              ? "bg-yellow-600 text-white"
                              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                          ),
                        children: "Pending",
                      }),
                      (0, a.jsx)("button", {
                        onClick: () => o("failed"),
                        className:
                          "px-4 py-2 rounded-md text-sm font-medium transition-colors ".concat(
                            "failed" === x
                              ? "bg-red-600 text-white"
                              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                          ),
                        children: "Failed",
                      }),
                    ],
                  }),
                }),
                (0, a.jsxs)("div", {
                  className:
                    "bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "px-6 py-4 border-b border-gray-200 dark:border-gray-800",
                      children: (0, a.jsx)("h2", {
                        className:
                          "text-lg font-semibold text-gray-900 dark:text-white",
                        children: "Recent User Operations",
                      }),
                    }),
                    c
                      ? (0, a.jsxs)("div", {
                          className: "flex justify-center items-center py-12",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400",
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "ml-3 text-gray-600 dark:text-gray-400",
                              children: "Loading user operations...",
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
                                      children: "Hash",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Sender",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Target",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Nonce",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Gas Limits",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Gas Price",
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
                                children: g.map((e, t) =>
                                  (0, a.jsxs)(
                                    "tr",
                                    {
                                      className:
                                        "hover:bg-white dark:hover:bg-gray-800 transition-colors",
                                      children: [
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, a.jsx)("div", {
                                            className:
                                              "text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 cursor-pointer",
                                            children: m(e.hash),
                                          }),
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, a.jsx)("div", {
                                            className:
                                              "text-sm text-gray-900 dark:text-gray-300",
                                            children: m(e.sender),
                                          }),
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, a.jsx)("div", {
                                            className:
                                              "text-sm text-gray-900 dark:text-gray-300",
                                            children: m(e.target),
                                          }),
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300",
                                          children: e.nonce,
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, a.jsxs)("div", {
                                            className:
                                              "text-sm text-gray-900 dark:text-gray-300",
                                            children: [
                                              (0, a.jsxs)("div", {
                                                children: [
                                                  "Call: ",
                                                  e.callGasLimit,
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                children: [
                                                  "Verif: ",
                                                  e.verificationGasLimit,
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, a.jsxs)("div", {
                                            className:
                                              "text-sm text-gray-900 dark:text-gray-300",
                                            children: [
                                              (0, a.jsxs)("div", {
                                                children: [
                                                  "Max: ",
                                                  e.maxFeePerGas,
                                                ],
                                              }),
                                              (0, a.jsxs)("div", {
                                                children: [
                                                  "Priority: ",
                                                  e.maxPriorityFeePerGas,
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, a.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                              (0, a.jsx)(r.FontAwesomeIcon, {
                                                icon: ((e) => {
                                                  switch (e) {
                                                    case "success":
                                                      return s.faCheckCircle;
                                                    case "pending":
                                                      return s.faSpinner;
                                                    case "failed":
                                                      return s.faTimesCircle;
                                                    default:
                                                      return s.faClock;
                                                  }
                                                })(e.status),
                                                className:
                                                  "h-4 w-4 mr-2 ".concat(
                                                    h(e.status)
                                                  ),
                                              }),
                                              (0, a.jsx)("span", {
                                                className:
                                                  "text-sm font-medium ".concat(
                                                    h(e.status)
                                                  ),
                                                children: e.status,
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300",
                                          children: e.timestamp,
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
                (0, a.jsx)("div", {
                  className: "mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6",
                  children: (0, a.jsxs)("div", {
                    className:
                      "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800",
                    children: [
                      (0, a.jsx)("h3", {
                        className:
                          "text-lg font-semibold text-gray-900 dark:text-white mb-4",
                        children: "About User Operations",
                      }),
                      (0, a.jsxs)("div", {
                        className: "space-y-3 text-gray-600 dark:text-gray-400",
                        children: [
                          (0, a.jsx)("p", {
                            children:
                              "User Operations are the core of Account Abstraction (ERC-4337), allowing users to interact with smart contracts without needing to manage private keys directly.",
                          }),
                          (0, a.jsx)("p", {
                            children:
                              "Each operation contains sender, target, call data, gas limits, and signature information that enables flexible transaction execution.",
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "mt-4 p-4 bg-white dark:bg-gray-900 rounded-lg",
                            children: [
                              (0, a.jsx)("h4", {
                                className:
                                  "font-medium text-gray-900 dark:text-white mb-2",
                                children: "Key Components:",
                              }),
                              (0, a.jsxs)("ul", {
                                className: "space-y-1 text-sm",
                                children: [
                                  (0, a.jsxs)("li", {
                                    children: [
                                      "• ",
                                      (0, a.jsx)("strong", {
                                        children: "Sender:",
                                      }),
                                      " The account initiating the operation",
                                    ],
                                  }),
                                  (0, a.jsxs)("li", {
                                    children: [
                                      "• ",
                                      (0, a.jsx)("strong", {
                                        children: "Target:",
                                      }),
                                      " The contract being called",
                                    ],
                                  }),
                                  (0, a.jsxs)("li", {
                                    children: [
                                      "• ",
                                      (0, a.jsx)("strong", {
                                        children: "Call Data:",
                                      }),
                                      " The function call data",
                                    ],
                                  }),
                                  (0, a.jsxs)("li", {
                                    children: [
                                      "• ",
                                      (0, a.jsx)("strong", {
                                        children: "Gas Limits:",
                                      }),
                                      " Call, verification, and pre-verification gas",
                                    ],
                                  }),
                                  (0, a.jsxs)("li", {
                                    children: [
                                      "• ",
                                      (0, a.jsx)("strong", {
                                        children: "Signature:",
                                      }),
                                      " Cryptographic proof of authorization",
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
                }),
              ],
            }),
          ],
        });
      }
    },
  },
]);

//# sourceMappingURL=d7f41aca82621739.js.map
