(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    293983: (e) => {
      "use strict";
      e.s({ default: () => l });
      var s = e.i(731636),
        t = e.i(838653),
        a = e.i(12448),
        r = e.i(55157);
      function l() {
        let [e, l] = (0, t.useState)(""),
          [c, o] = (0, t.useState)([]),
          [n, i] = (0, t.useState)(!0),
          [d, x] = (0, t.useState)("timestamp"),
          [m, h] = (0, t.useState)("desc");
        (0, t.useEffect)(() => {
          let e = [
            {
              id: 1,
              txHash:
                "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
              tokenName: "Etherchain Token",
              tokenSymbol: "wETHAI",
              from: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b6",
              to: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b7",
              amount: "1,000,000",
              value: "$2,500.00",
              timestamp: "2 minutes ago",
              block: 0xbc614e,
              status: "success",
            },
            {
              id: 2,
              txHash:
                "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
              tokenName: "Solana AI",
              tokenSymbol: "SAI",
              from: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b8",
              to: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b9",
              amount: "500,000",
              value: "$1,250.00",
              timestamp: "5 minutes ago",
              block: 0xbc614d,
              status: "success",
            },
            {
              id: 3,
              txHash:
                "0x567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234",
              tokenName: "Test Token",
              tokenSymbol: "TEST",
              from: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b0",
              to: "0x742d35Cc6634C0532925a3b8D4C9db96C4b4d8b1",
              amount: "100,000",
              value: "$250.00",
              timestamp: "10 minutes ago",
              block: 0xbc614c,
              status: "success",
            },
          ];
          setTimeout(() => {
            o(e), i(!1);
          }, 1e3);
        }, []);
        let g = (e) => "".concat(e.slice(0, 6), "...").concat(e.slice(-4)),
          p = (e) => {
            navigator.clipboard.writeText(e);
          },
          b = (e) => {
            d === e ? h("asc" === m ? "desc" : "asc") : (x(e), h("desc"));
          },
          f = [
            ...c.filter(
              (s) =>
                s.tokenName.toLowerCase().includes(e.toLowerCase()) ||
                s.tokenSymbol.toLowerCase().includes(e.toLowerCase()) ||
                s.txHash.toLowerCase().includes(e.toLowerCase()) ||
                s.from.toLowerCase().includes(e.toLowerCase()) ||
                s.to.toLowerCase().includes(e.toLowerCase())
            ),
          ].sort((e, s) => {
            let t = e[d],
              a = s[d];
            return ("amount" === d
              ? ((t = parseFloat(t.replace(/,/g, ""))),
                (a = parseFloat(a.replace(/,/g, ""))))
              : "value" === d &&
                ((t = parseFloat(t.replace(/[$,]/g, ""))),
                (a = parseFloat(a.replace(/[$,]/g, "")))),
            "asc" === m)
              ? t > a
                ? 1
                : -1
              : t < a
              ? 1
              : -1;
          });
        return (0, s.jsxs)("div", {
          className:
            "min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white ",
          children: [
            (0, s.jsx)("div", {
              className:
                "bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-b border-gray-200 dark:border-gray-800",
              children: (0, s.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: (0, s.jsx)("div", {
                  className: "flex items-center justify-between",
                  children: (0, s.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                      (0, s.jsx)("div", {
                        className: "flex-shrink-0",
                        children: (0, s.jsx)(a.FontAwesomeIcon, {
                          icon: r.faArrowsAltH,
                          className: "h-8 w-8 text-blue-400",
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "ml-5 flex-1 w-full",
                        children: [
                          (0, s.jsx)("h1", {
                            className:
                              "text-2xl font-bold text-gray-900 dark:text-white",
                            children: "Token Transfers",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-gray-600 dark:text-gray-400",
                            children: "Track all token transfers on Etherchain",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
            (0, s.jsx)("div", {
              className:
                "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800",
              children: (0, s.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
                children: (0, s.jsxs)("div", {
                  className: "relative",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                      children: (0, s.jsx)(a.FontAwesomeIcon, {
                        icon: r.faSearch,
                        className: "h-5 w-5 text-gray-400",
                      }),
                    }),
                    (0, s.jsx)("input", {
                      type: "text",
                      className:
                        "block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 dark:focus:placeholder-gray-500 focus:ring-1 focus:ring-blue-500 focus:border-blue-500",
                      placeholder:
                        "Search by token name, symbol, transaction hash, or address...",
                      value: e,
                      onChange: (e) => l(e.target.value),
                    }),
                  ],
                }),
              }),
            }),
            (0, s.jsxs)("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800",
                      children: (0, s.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, s.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, s.jsx)(a.FontAwesomeIcon, {
                              icon: r.faArrowsAltH,
                              className: "h-6 w-6 text-blue-400",
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className: "ml-4",
                            children: [
                              (0, s.jsx)("p", {
                                className:
                                  "text-sm font-medium text-gray-600 dark:text-gray-400",
                                children: "Total Transfers",
                              }),
                              (0, s.jsx)("p", {
                                className:
                                  "text-2xl font-bold text-gray-900 dark:text-white",
                                children: c.length,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800",
                      children: (0, s.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, s.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, s.jsx)(a.FontAwesomeIcon, {
                              icon: r.faCoins,
                              className: "h-6 w-6 text-green-400",
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className: "ml-4",
                            children: [
                              (0, s.jsx)("p", {
                                className:
                                  "text-sm font-medium text-gray-600 dark:text-gray-400",
                                children: "Unique Tokens",
                              }),
                              (0, s.jsx)("p", {
                                className:
                                  "text-2xl font-bold text-gray-900 dark:text-white",
                                children: "3",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800",
                      children: (0, s.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, s.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, s.jsx)(a.FontAwesomeIcon, {
                              icon: r.faUsers,
                              className: "h-6 w-6 text-ethai",
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className: "ml-4",
                            children: [
                              (0, s.jsx)("p", {
                                className:
                                  "text-sm font-medium text-gray-600 dark:text-gray-400",
                                children: "Active Addresses",
                              }),
                              (0, s.jsx)("p", {
                                className:
                                  "text-2xl font-bold text-gray-900 dark:text-white",
                                children: "12",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800",
                      children: (0, s.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, s.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, s.jsx)(a.FontAwesomeIcon, {
                              icon: r.faClock,
                              className: "h-6 w-6 text-yellow-400",
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className: "ml-4",
                            children: [
                              (0, s.jsx)("p", {
                                className:
                                  "text-sm font-medium text-gray-600 dark:text-gray-400",
                                children: "Last 24h",
                              }),
                              (0, s.jsx)("p", {
                                className:
                                  "text-2xl font-bold text-gray-900 dark:text-white",
                                children: "156",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "px-6 py-4 border-b border-gray-200 dark:border-gray-800",
                      children: (0, s.jsx)("h3", {
                        className:
                          "text-lg font-medium text-gray-900 dark:text-white",
                        children: "Recent Token Transfers",
                      }),
                    }),
                    n
                      ? (0, s.jsxs)("div", {
                          className: "flex items-center justify-center py-12",
                          children: [
                            (0, s.jsx)(a.FontAwesomeIcon, {
                              icon: r.faSpinner,
                              className: "h-8 w-8 text-blue-400 animate-spin",
                            }),
                            (0, s.jsx)("span", {
                              className: "ml-3 text-gray-400",
                              children: "Loading token transfers...",
                            }),
                          ],
                        })
                      : (0, s.jsx)("div", {
                          className: "overflow-x-auto",
                          children: (0, s.jsxs)("table", {
                            className:
                              "min-w-full divide-y divide-gray-200 dark:divide-gray-800",
                            children: [
                              (0, s.jsx)("thead", {
                                className: "bg-white dark:bg-gray-900",
                                children: (0, s.jsxs)("tr", {
                                  children: [
                                    (0, s.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-850 uppercase tracking-wider cursor-pointer hover:text-white",
                                      onClick: () => b("txHash"),
                                      children: (0, s.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                          "Transaction Hash",
                                          (0, s.jsx)(a.FontAwesomeIcon, {
                                            icon:
                                              "txHash" === d
                                                ? "asc" === m
                                                  ? r.faSortUp
                                                  : r.faSortDown
                                                : r.faSort,
                                            className: "ml-2 h-3 w-3",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, s.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-850 uppercase tracking-wider cursor-pointer hover:text-white",
                                      onClick: () => b("tokenName"),
                                      children: (0, s.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                          "Token",
                                          (0, s.jsx)(a.FontAwesomeIcon, {
                                            icon:
                                              "tokenName" === d
                                                ? "asc" === m
                                                  ? r.faSortUp
                                                  : r.faSortDown
                                                : r.faSort,
                                            className: "ml-2 h-3 w-3",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, s.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-850 uppercase tracking-wider",
                                      children: "From",
                                    }),
                                    (0, s.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-850 uppercase tracking-wider",
                                      children: "To",
                                    }),
                                    (0, s.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-850 uppercase tracking-wider cursor-pointer hover:text-white",
                                      onClick: () => b("amount"),
                                      children: (0, s.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                          "Amount",
                                          (0, s.jsx)(a.FontAwesomeIcon, {
                                            icon:
                                              "amount" === d
                                                ? "asc" === m
                                                  ? r.faSortUp
                                                  : r.faSortDown
                                                : r.faSort,
                                            className: "ml-2 h-3 w-3",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, s.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-850 uppercase tracking-wider cursor-pointer hover:text-white",
                                      onClick: () => b("value"),
                                      children: (0, s.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                          "Value",
                                          (0, s.jsx)(a.FontAwesomeIcon, {
                                            icon:
                                              "value" === d
                                                ? "asc" === m
                                                  ? r.faSortUp
                                                  : r.faSortDown
                                                : r.faSort,
                                            className: "ml-2 h-3 w-3",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, s.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-850 uppercase tracking-wider cursor-pointer hover:text-white",
                                      onClick: () => b("timestamp"),
                                      children: (0, s.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                          "Time",
                                          (0, s.jsx)(a.FontAwesomeIcon, {
                                            icon:
                                              "timestamp" === d
                                                ? "asc" === m
                                                  ? r.faSortUp
                                                  : r.faSortDown
                                                : r.faSort,
                                            className: "ml-2 h-3 w-3",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, s.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-850 uppercase tracking-wider",
                                      children: "Status",
                                    }),
                                  ],
                                }),
                              }),
                              (0, s.jsx)("tbody", {
                                className:
                                  "bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800",
                                children:
                                  f.length > 0
                                    ? f.map((e) =>
                                        (0, s.jsxs)(
                                          "tr",
                                          {
                                            className:
                                              "hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                                            children: [
                                              (0, s.jsx)("td", {
                                                className:
                                                  "px-6 py-4 whitespace-nowrap",
                                                children: (0, s.jsxs)("div", {
                                                  className:
                                                    "flex items-center space-x-2",
                                                  children: [
                                                    (0, s.jsx)("span", {
                                                      className:
                                                        "text-sm text-blue-400 font-mono",
                                                      children: g(e.txHash),
                                                    }),
                                                    (0, s.jsx)("button", {
                                                      onClick: () =>
                                                        p(e.txHash),
                                                      className:
                                                        "text-gray-850 dark:text-gray-200 hover:text-white dark:hover:text-white transition-colors",
                                                      children: (0, s.jsx)(
                                                        a.FontAwesomeIcon,
                                                        {
                                                          icon: r.faCopy,
                                                          className: "text-xs",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              (0, s.jsx)("td", {
                                                className:
                                                  "px-6 py-4 whitespace-nowrap",
                                                children: (0, s.jsxs)("div", {
                                                  className:
                                                    "flex items-center",
                                                  children: [
                                                    (0, s.jsx)("div", {
                                                      className:
                                                        "flex-shrink-0 h-8 w-8",
                                                      children: (0, s.jsx)(
                                                        "div",
                                                        {
                                                          className:
                                                            "h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center",
                                                          children: (0, s.jsx)(
                                                            a.FontAwesomeIcon,
                                                            {
                                                              icon: r.faCoins,
                                                              className:
                                                                "h-4 w-4 text-white",
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                    (0, s.jsxs)("div", {
                                                      className: "ml-3",
                                                      children: [
                                                        (0, s.jsx)("div", {
                                                          className:
                                                            "text-sm font-medium text-gray-900 dark:text-white",
                                                          children: e.tokenName,
                                                        }),
                                                        (0, s.jsx)("div", {
                                                          className:
                                                            "text-sm text-gray-600 dark:text-gray-400",
                                                          children:
                                                            e.tokenSymbol,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              (0, s.jsx)("td", {
                                                className:
                                                  "px-6 py-4 whitespace-nowrap",
                                                children: (0, s.jsxs)("div", {
                                                  className:
                                                    "flex items-center space-x-2",
                                                  children: [
                                                    (0, s.jsx)("span", {
                                                      className:
                                                        "text-sm text-gray-850 dark:text-gray-200 font-mono",
                                                      children: g(e.from),
                                                    }),
                                                    (0, s.jsx)("button", {
                                                      onClick: () => p(e.from),
                                                      className:
                                                        "text-gray-850 dark:text-gray-200 hover:text-white dark:hover:text-white transition-colors",
                                                      children: (0, s.jsx)(
                                                        a.FontAwesomeIcon,
                                                        {
                                                          icon: r.faCopy,
                                                          className: "text-xs",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              (0, s.jsx)("td", {
                                                className:
                                                  "px-6 py-4 whitespace-nowrap",
                                                children: (0, s.jsxs)("div", {
                                                  className:
                                                    "flex items-center space-x-2",
                                                  children: [
                                                    (0, s.jsx)(
                                                      a.FontAwesomeIcon,
                                                      {
                                                        icon: r.faArrowRight,
                                                        className:
                                                          "text-gray-400 text-xs",
                                                      }
                                                    ),
                                                    (0, s.jsx)("span", {
                                                      className:
                                                        "text-sm text-gray-850 dark:text-gray-200 font-mono",
                                                      children: g(e.to),
                                                    }),
                                                    (0, s.jsx)("button", {
                                                      onClick: () => p(e.to),
                                                      className:
                                                        "text-gray-850 dark:text-gray-200 hover:text-white dark:hover:text-white transition-colors",
                                                      children: (0, s.jsx)(
                                                        a.FontAwesomeIcon,
                                                        {
                                                          icon: r.faCopy,
                                                          className: "text-xs",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              (0, s.jsx)("td", {
                                                className:
                                                  "px-6 py-4 whitespace-nowrap",
                                                children: (0, s.jsx)("div", {
                                                  className:
                                                    "text-sm text-gray-850 dark:text-gray-200",
                                                  children: e.amount,
                                                }),
                                              }),
                                              (0, s.jsx)("td", {
                                                className:
                                                  "px-6 py-4 whitespace-nowrap text-sm text-gray-850 dark:text-gray-200",
                                                children: e.timestamp,
                                              }),
                                              (0, s.jsx)("td", {
                                                className:
                                                  "px-6 py-4 whitespace-nowrap",
                                                children: (0, s.jsxs)("span", {
                                                  className:
                                                    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
                                                  children: [
                                                    (0, s.jsx)(
                                                      a.FontAwesomeIcon,
                                                      {
                                                        icon: r.faCheckCircle,
                                                        className: "mr-1",
                                                      }
                                                    ),
                                                    "Success",
                                                  ],
                                                }),
                                              }),
                                              (0, s.jsx)("td", {
                                                className:
                                                  "px-6 py-4 whitespace-nowrap text-sm font-medium",
                                                children: (0, s.jsxs)("div", {
                                                  className:
                                                    "flex items-center space-x-2",
                                                  children: [
                                                    (0, s.jsx)("button", {
                                                      className:
                                                        "text-blue-400 dark:text-blue-300 hover:text-blue-300 dark:hover:text-blue-200 transition-colors",
                                                      children: (0, s.jsx)(
                                                        a.FontAwesomeIcon,
                                                        {
                                                          icon: r.faEye,
                                                          className: "text-sm",
                                                        }
                                                      ),
                                                    }),
                                                    (0, s.jsx)("button", {
                                                      className:
                                                        "text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors",
                                                      children: (0, s.jsx)(
                                                        a.FontAwesomeIcon,
                                                        {
                                                          icon: r.faExternalLinkAlt,
                                                          className: "text-sm",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            ],
                                          },
                                          e.id
                                        )
                                      )
                                    : (0, s.jsx)("tr", {
                                        children: (0, s.jsx)("td", {
                                          colSpan: "9",
                                          className: "px-6 py-12 text-center",
                                          children: (0, s.jsxs)("div", {
                                            className:
                                              "flex flex-col items-center",
                                            children: [
                                              (0, s.jsx)(a.FontAwesomeIcon, {
                                                icon: r.faArrowsAltH,
                                                className:
                                                  "h-12 w-12 text-gray-500 mb-4",
                                              }),
                                              (0, s.jsx)("h3", {
                                                className:
                                                  "text-lg font-medium text-gray-300 mb-2",
                                                children:
                                                  "No token transfers found",
                                              }),
                                              (0, s.jsx)("p", {
                                                className: "text-gray-500",
                                                children:
                                                  "Token transfers will appear here once they are processed",
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                              }),
                            ],
                          }),
                        }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                  children: [
                    (0, s.jsx)("a", {
                      href: "/tokens",
                      className:
                        "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-colors group",
                      children: (0, s.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, s.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, s.jsx)(a.FontAwesomeIcon, {
                              icon: r.faCoins,
                              className:
                                "h-8 w-8 text-blue-400 group-hover:text-blue-300",
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className: "ml-4",
                            children: [
                              (0, s.jsx)("h3", {
                                className:
                                  "text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-300",
                                children: "Tokens",
                              }),
                              (0, s.jsx)("p", {
                                className: "text-gray-600 dark:text-gray-400",
                                children: "Browse all tokens",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)("a", {
                      href: "/txs",
                      className:
                        "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-colors group",
                      children: (0, s.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, s.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, s.jsx)(a.FontAwesomeIcon, {
                              icon: r.faExchangeAlt,
                              className:
                                "h-8 w-8 text-green-400 group-hover:text-green-300",
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className: "ml-4",
                            children: [
                              (0, s.jsx)("h3", {
                                className:
                                  "text-lg font-medium text-gray-900 dark:text-white group-hover:text-green-300",
                                children: "Transactions",
                              }),
                              (0, s.jsx)("p", {
                                className: "text-gray-600 dark:text-gray-400",
                                children: "View all transactions",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)("a", {
                      href: "/blocks",
                      className:
                        "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-colors group",
                      children: (0, s.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, s.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, s.jsx)(a.FontAwesomeIcon, {
                              icon: r.faCube,
                              className:
                                "h-8 w-8 text-ethai group-hover:text-purple-300",
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className: "ml-4",
                            children: [
                              (0, s.jsx)("h3", {
                                className:
                                  "text-lg font-medium text-gray-900 dark:text-white group-hover:text-purple-300",
                                children: "Blocks",
                              }),
                              (0, s.jsx)("p", {
                                className: "text-gray-600 dark:text-gray-400",
                                children: "Explore blocks",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)("a", {
                      href: "/accounts",
                      className:
                        "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-colors group",
                      children: (0, s.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, s.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, s.jsx)(a.FontAwesomeIcon, {
                              icon: r.faUsers,
                              className:
                                "h-8 w-8 text-yellow-400 group-hover:text-yellow-300",
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className: "ml-4",
                            children: [
                              (0, s.jsx)("h3", {
                                className:
                                  "text-lg font-medium text-gray-900 dark:text-white group-hover:text-yellow-300",
                                children: "Accounts",
                              }),
                              (0, s.jsx)("p", {
                                className: "text-gray-600 dark:text-gray-400",
                                children: "Top accounts",
                              }),
                            ],
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

//# sourceMappingURL=bdefc9e0168d15be.js.map
