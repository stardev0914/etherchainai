(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    822518: (e) => {
      "use strict";
      e.s({ default: () => d });
      var a = e.i(731636),
        t = e.i(838653),
        r = e.i(12448),
        s = e.i(55157);
      function d() {
        let [e, d] = (0, t.useState)(""),
          [i, c] = (0, t.useState)([]),
          [l, n] = (0, t.useState)(!0),
          [x, o] = (0, t.useState)("name"),
          [m, h] = (0, t.useState)("asc");
        (0, t.useEffect)(() => {
          let e = [
            {
              id: 1,
              name: "Etherchain Token",
              address: "0x1234567890abcdef1234567890abcdef12345678",
              compiler: "Solidity 0.8.19",
              optimization: "Yes",
              runs: 200,
              verifiedAt: "2024-01-15T10:30:00Z",
              txCount: 1250,
              balance: "1,250.50 ETHAI",
              creator: "0xabcdef1234567890abcdef1234567890abcdef12",
              license: "MIT",
              verified: !0,
            },
            {
              id: 2,
              name: "Staking Contract",
              address: "0xabcdef1234567890abcdef1234567890abcdef12",
              compiler: "Solidity 0.8.20",
              optimization: "Yes",
              runs: 500,
              verifiedAt: "2024-01-10T14:20:00Z",
              txCount: 890,
              balance: "5,750.25 ETHAI",
              creator: "0x1234567890abcdef1234567890abcdef12345678",
              license: "GPL-3.0",
              verified: !0,
            },
            {
              id: 3,
              name: "DAO Governance",
              address: "0x9876543210fedcba9876543210fedcba98765432",
              compiler: "Solidity 0.8.18",
              optimization: "No",
              runs: 0,
              verifiedAt: "2024-01-05T09:15:00Z",
              txCount: 456,
              balance: "2,100.75 ETHAI",
              creator: "0xabcdef1234567890abcdef1234567890abcdef12",
              license: "MIT",
              verified: !0,
            },
            {
              id: 4,
              name: "NFT Marketplace",
              address: "0xfedcba0987654321fedcba0987654321fedcba09",
              compiler: "Solidity 0.8.21",
              optimization: "Yes",
              runs: 1e3,
              verifiedAt: "2024-01-20T16:45:00Z",
              txCount: 2340,
              balance: "8,900.00 ETHAI",
              creator: "0x1234567890abcdef1234567890abcdef12345678",
              license: "Apache-2.0",
              verified: !0,
            },
            {
              id: 5,
              name: "DeFi Protocol",
              address: "0xba9876543210fedcba9876543210fedcba987654",
              compiler: "Solidity 0.8.19",
              optimization: "Yes",
              runs: 300,
              verifiedAt: "2024-01-12T11:30:00Z",
              txCount: 1678,
              balance: "12,500.50 ETHAI",
              creator: "0xabcdef1234567890abcdef1234567890abcdef12",
              license: "MIT",
              verified: !0,
            },
          ];
          setTimeout(() => {
            c(e), n(!1);
          }, 1e3);
        }, []);
        let g = [
          ...i.filter(
            (a) =>
              a.name.toLowerCase().includes(e.toLowerCase()) ||
              a.address.toLowerCase().includes(e.toLowerCase())
          ),
        ].sort((e, a) => {
          let t = e[x],
            r = a[x];
          return ("verifiedAt" === x && ((t = new Date(t)), (r = new Date(r))),
          t < r)
            ? "asc" === m
              ? -1
              : 1
            : t > r
            ? "asc" === m
              ? 1
              : -1
            : 0;
        });
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
                  className:
                    "flex flex-col lg:flex-row lg:items-center lg:justify-between",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "mb-6 lg:mb-0",
                      children: [
                        (0, a.jsx)("h1", {
                          className:
                            "text-3xl font-bold text-gray-900 dark:text-white mb-2",
                          children: "Verified Contracts",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-gray-600 dark:text-gray-400",
                          children:
                            "Browse and interact with verified smart contracts on Etherchain",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "relative w-full lg:w-96",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                          children: (0, a.jsx)(r.FontAwesomeIcon, {
                            icon: s.faSearch,
                            className: "text-gray-400",
                          }),
                        }),
                        (0, a.jsx)("input", {
                          type: "text",
                          value: e,
                          onChange: (e) => {
                            d(e.target.value);
                          },
                          placeholder: "Search contracts by name or address...",
                          className:
                            "block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 dark:focus:placeholder-gray-500 focus:ring-1 focus:ring-blue-500 focus:border-blue-500",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, a.jsxs)("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",
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
                              icon: s.faFileContract,
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
                                children: "Total Contracts",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-2xl font-bold text-gray-900 dark:text-white",
                                children: "1,234",
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
                                children: "Verified",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-2xl font-bold text-gray-900 dark:text-white",
                                children: "987",
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
                                children: "45.2M",
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
                                "h-8 w-8 text-yellow-600 dark:text-yellow-400",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "ml-4",
                            children: [
                              (0, a.jsx)("p", {
                                className:
                                  "text-sm font-medium text-gray-600 dark:text-gray-400",
                                children: "Total Balance",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "text-2xl font-bold text-gray-900 dark:text-white",
                                children: "$2.1B",
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
                    "bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "px-6 py-4 border-b border-gray-200 dark:border-gray-800",
                      children: (0, a.jsx)("h2", {
                        className:
                          "text-lg font-semibold text-gray-900 dark:text-white",
                        children: "Verified Smart Contracts",
                      }),
                    }),
                    l
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
                              children: "Loading contracts...",
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
                                      children: "Contract",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Address",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Compiler",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Balance",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Tx Count",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Verified",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Actions",
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("tbody", {
                                className:
                                  "bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800",
                                children: g.map((e) => {
                                  let t;
                                  return (0, a.jsxs)(
                                    "tr",
                                    {
                                      className:
                                        "hover:bg-white dark:hover:bg-gray-800 transition-colors",
                                      children: [
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, a.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                              (0, a.jsx)(r.FontAwesomeIcon, {
                                                icon: s.faFileContract,
                                                className:
                                                  "h-5 w-5 text-blue-600 dark:text-blue-400 mr-3",
                                              }),
                                              (0, a.jsxs)("div", {
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className:
                                                      "text-sm font-medium text-gray-900 dark:text-white",
                                                    children: e.name,
                                                  }),
                                                  (0, a.jsx)("div", {
                                                    className:
                                                      "text-xs text-gray-500 dark:text-gray-400",
                                                    children: e.license,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, a.jsx)("div", {
                                            className:
                                              "text-sm text-gray-900 dark:text-gray-300 font-mono",
                                            children:
                                              ((t = e.address),
                                              ""
                                                .concat(t.slice(0, 6), "...")
                                                .concat(t.slice(-4))),
                                          }),
                                        }),
                                        (0, a.jsxs)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "text-sm text-gray-900 dark:text-gray-300",
                                              children: e.compiler,
                                            }),
                                            (0, a.jsx)("div", {
                                              className:
                                                "text-xs text-gray-500 dark:text-gray-400",
                                              children: e.optimization
                                                ? "Optimized (".concat(
                                                    e.runs,
                                                    " runs)"
                                                  )
                                                : "Not optimized",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300",
                                          children: e.balance,
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300",
                                          children: e.txCount.toLocaleString(),
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap",
                                          children: (0, a.jsxs)("div", {
                                            className: "flex items-center",
                                            children: [
                                              (0, a.jsx)(r.FontAwesomeIcon, {
                                                icon: e.verified
                                                  ? s.faCheckCircle
                                                  : s.faTimesCircle,
                                                className:
                                                  "h-4 w-4 mr-2 ".concat(
                                                    e.verified
                                                      ? "text-green-600 dark:text-green-400"
                                                      : "text-red-600 dark:text-red-400"
                                                  ),
                                              }),
                                              (0, a.jsx)("span", {
                                                className:
                                                  "text-sm font-medium ".concat(
                                                    e.verified
                                                      ? "text-green-600 dark:text-green-400"
                                                      : "text-red-600 dark:text-red-400"
                                                  ),
                                                children: e.verified
                                                  ? "Verified"
                                                  : "Not Verified",
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap text-sm font-medium",
                                          children: (0, a.jsxs)("div", {
                                            className: "flex space-x-2",
                                            children: [
                                              (0, a.jsx)("button", {
                                                onClick: () => {
                                                  var a;
                                                  return (
                                                    (a = e.address),
                                                    void navigator.clipboard.writeText(
                                                      a
                                                    )
                                                  );
                                                },
                                                className:
                                                  "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300",
                                                title: "Copy address",
                                                children: (0, a.jsx)(
                                                  r.FontAwesomeIcon,
                                                  {
                                                    icon: s.faCopy,
                                                    className: "h-4 w-4",
                                                  }
                                                ),
                                              }),
                                              (0, a.jsx)("a", {
                                                href: "/contract/".concat(
                                                  e.address
                                                ),
                                                className:
                                                  "text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300",
                                                title: "View contract",
                                                children: (0, a.jsx)(
                                                  r.FontAwesomeIcon,
                                                  {
                                                    icon: s.faEye,
                                                    className: "h-4 w-4",
                                                  }
                                                ),
                                              }),
                                              (0, a.jsx)("a", {
                                                href: "/contract/".concat(
                                                  e.address,
                                                  "/code"
                                                ),
                                                className:
                                                  "text-ethai dark:text-ethai hover:text-purple-800 dark:hover:text-purple-300",
                                                title: "View source code",
                                                children: (0, a.jsx)(
                                                  r.FontAwesomeIcon,
                                                  {
                                                    icon: s.faCode,
                                                    className: "h-4 w-4",
                                                  }
                                                ),
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    },
                                    e.id
                                  );
                                }),
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

//# sourceMappingURL=ebdf52b804505998.js.map
