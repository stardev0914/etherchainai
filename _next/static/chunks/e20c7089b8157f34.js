(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    856334: (e) => {
      "use strict";
      e.s({ default: () => g });
      var r = e.i(731636),
        t = e.i(838653),
        a = e.i(186240),
        s = e.i(712568),
        o = e.i(66815),
        n = e.i(368871);
      e.i(435187);
      var l = e.i(266119),
        i = e.i(171096),
        d = e.i(747047),
        x = e.i(744232),
        h = e.i(815751),
        c = e.i(693667),
        u = e.i(288041);
      function g(e) {
        let { children: g } = e,
          [m, k] = (0, t.useState)(!0),
          [v, p] = (0, t.useState)(!1),
          [f, j] = (0, t.useState)(null),
          [y, b] = (0, t.useState)("about"),
          [w, N] = (0, t.useState)(0),
          [L, M] = (0, t.useState)(1),
          { walletProvider: C } = (0, i.useAppKitProvider)("eip155"),
          { isConnected: B } = (0, l.useAppKitAccount)(),
          { disconnect: W } = (0, l.useDisconnect)(),
          { open: z } = (0, i.useAppKit)(),
          { address: A } = (0, l.useAppKitAccount)();
        (0, t.useEffect)(() => {
          (async () => {
            if (A) {
              console.log("address", A);
              let e = new h.BrowserProvider(C),
                r = await e.getSigner(),
                t = new c.Contract(x.tokenAddress[1], x.tokenAbi, r);
              N(await t.balanceOf(A));
            } else N(0);
          })();
        }, [B, A, C]);
        let H = () => {
            k(!m);
          },
          V = () => {
            p(!1);
          },
          T = (e) => {
            j(f === e ? null : e);
          },
          E = () => {
            j(null);
          },
          S = (e) => {
            b(y === e ? null : e);
          };
        return (0, r.jsxs)("div", {
          className:
            "page-wrapper lcai-dashboard-page min-h-screen flex flex-col",
          children: [
            (0, r.jsxs)("nav", {
              className:
                "sticky top-0 left-0 right-0 z-50 bg-white dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 px-1",
              children: [
                (0, r.jsx)("div", {
                  className: "hidden lg:block mx-auto px-2",
                  children: (0, r.jsxs)("div", {
                    className: "flex items-center justify-between h-[81px]",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex items-center space-x-3 sm:space-x-4",
                        children: [
                          (0, r.jsx)("button", {
                            onClick: H,
                            className:
                              "p-2 rounded-full bg-gray-100 dark:bg-gray-950 hover:bg-purple-100 dark:hover:bg-purple-900/40 text-gray-600 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai transition-colors duration-300",
                            "aria-label": "Toggle Sidebar",
                            children: (0, r.jsxs)("svg", {
                              className: "w-6 h-6",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              viewBox: "0 0 24 24",
                              children: [
                                (0, r.jsx)("rect", {
                                  x: "3",
                                  y: "3",
                                  width: "18",
                                  height: "18",
                                  rx: "2",
                                  ry: "2",
                                }),
                                (0, r.jsx)("line", {
                                  x1: "9",
                                  y1: "3",
                                  x2: "9",
                                  y2: "21",
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsxs)(a.default, {
                            className:
                              "flex items-center space-x-3 sm:space-x-4 logo-container",
                            href: "/",
                            children: [
                              (0, r.jsx)("div", {
                                className:
                                  "w-11 h-11 sm:w-11 sm:h-11 md:w-11 md:h-11 flex items-center justify-center logo-image",
                                children: (0, r.jsx)(s.default, {
                                  src: "/logo_alpha.webp",
                                  alt: "Etherchain Logo",
                                  className: "etherchain-logo",
                                  width: 56,
                                  height: 56,
                                }),
                              }),
                              (0, r.jsx)("span", {
                                className:
                                  "text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-wide ",
                                children: "ETHERCHAIN",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "hidden md:flex items-center space-x-4 h-full",
                        children: [
                          (0, r.jsxs)("div", {
                            className: "relative h-full",
                            children: [
                              (0, r.jsxs)("button", {
                                onClick: () => T("about"),
                                onMouseEnter: () => j("about"),
                                onMouseLeave: E,
                                className:
                                  "flex items-center h-full p-2 rounded-lg  text-[#0B101C] dark:text-gray-300 hover:text-ethai dark:hover:text-ethai transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                                children: [
                                  (0, r.jsx)("svg", {
                                    className: "w-4 h-4 mr-2",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                    }),
                                  }),
                                  "About",
                                  (0, r.jsx)("svg", {
                                    className: "w-4 h-4 ml-1",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M19 9l-7 7-7-7",
                                    }),
                                  }),
                                ],
                              }),
                              "about" === f &&
                                (0, r.jsxs)("div", {
                                  className:
                                    "absolute top-full left-0 min-w-[298px] bg-white dark:bg-[#0B101C] rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2",
                                  onMouseLeave: E,
                                  onMouseEnter: () => j("about"),
                                  children: [
                                    (0, r.jsxs)(a.default, {
                                      href: "/roadmap",
                                      className:
                                        "flex items-center justify-between px-4 py-3 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("div", {
                                              className:
                                                "w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors",
                                              children: (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-ethai dark:text-ethai",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: "2",
                                                  d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                                                }),
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "font-medium",
                                                  children: "Roadmap",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children:
                                                    "Development timeline",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)(a.default, {
                                      href: "/images/EtherchainAi_Whitepaper.pdf",
                                      className:
                                        "flex items-center justify-between px-4 py-3 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("div", {
                                              className:
                                                "w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors",
                                              children: (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-blue-600 dark:text-blue-400",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: "2",
                                                  d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                                                }),
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "font-medium",
                                                  children: "Whitepaper",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children:
                                                    "Technical documentation",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)(a.default, {
                                      href: "/blogs",
                                      className:
                                        "flex items-center justify-between px-4 py-3 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("div", {
                                              className:
                                                "w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors",
                                              children: (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-green-600 dark:text-green-400",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: "2",
                                                  d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
                                                }),
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "font-medium",
                                                  children: "Announcements",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children:
                                                    "Latest updates & news",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)(a.default, {
                                      href: "/audit",
                                      className:
                                        "flex items-center justify-between px-4 py-3 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("div", {
                                              className:
                                                "w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mr-3 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/50 transition-colors",
                                              children: (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-yellow-600 dark:text-yellow-400",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: "2",
                                                  d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                                                }),
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "font-medium",
                                                  children: "Audits & KYC",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children: "Security reports",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "relative h-full",
                            children: [
                              (0, r.jsxs)("button", {
                                onClick: () => T("blockchain"),
                                onMouseEnter: () => j("blockchain"),
                                onMouseLeave: E,
                                className:
                                  "flex items-center p-2 rounded-lg h-full  text-[#0B101C] dark:text-gray-300 hover:text-ethai dark:hover:text-ethai transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                                children: [
                                  (0, r.jsx)("svg", {
                                    className: "w-4 h-4 mr-2",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                    }),
                                  }),
                                  "Blockchain",
                                  (0, r.jsx)("svg", {
                                    className: "w-4 h-4 ml-1",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M19 9l-7 7-7-7",
                                    }),
                                  }),
                                ],
                              }),
                              "blockchain" === f &&
                                (0, r.jsx)("div", {
                                  className:
                                    "absolute top-full left-0 md:left-[calc(50%-190px)] min-w-[900px] bg-white dark:bg-[#0B101C] rounded-lg shadow-xl border border-gray-200 dark:border-gray-700",
                                  onMouseLeave: E,
                                  onMouseEnter: () => j("blockchain"),
                                  children: (0, r.jsxs)("div", {
                                    className: "grid grid-cols-3",
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className:
                                          "border-r border-gray-200 dark:border-gray-700 min-w-[294.66px] p-4",
                                        children: [
                                          (0, r.jsx)("h3", {
                                            className:
                                              "text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide",
                                            children: "Explorer",
                                          }),
                                          (0, r.jsxs)("div", {
                                            className: "space-y-2",
                                            children: [
                                              (0, r.jsxs)(a.default, {
                                                href: "/explorer/txs",
                                                className:
                                                  "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                                children: [
                                                  (0, r.jsxs)("div", {
                                                    className:
                                                      "flex items-center",
                                                    children: [
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors",
                                                        children: (0, r.jsx)(
                                                          "svg",
                                                          {
                                                            className:
                                                              "w-4 h-4 text-blue-600 dark:text-blue-400",
                                                            fill: "none",
                                                            stroke:
                                                              "currentColor",
                                                            viewBox:
                                                              "0 0 24 24",
                                                            children: (0,
                                                            r.jsx)("path", {
                                                              strokeLinecap:
                                                                "round",
                                                              strokeLinejoin:
                                                                "round",
                                                              strokeWidth: "2",
                                                              d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                        className:
                                                          "flex flex-col",
                                                        children: [
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "font-medium",
                                                            children:
                                                              "Transactions",
                                                          }),
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "text-xs text-gray-500 dark:text-gray-400",
                                                            children:
                                                              "View all transactions",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, r.jsx)("svg", {
                                                    className:
                                                      "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: (0, r.jsx)(
                                                      "path",
                                                      {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M9 5l7 7-7 7",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsxs)(a.default, {
                                                href: "/explorer/ops",
                                                className:
                                                  "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                                children: [
                                                  (0, r.jsxs)("div", {
                                                    className:
                                                      "flex items-center",
                                                    children: [
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors",
                                                        children: (0, r.jsx)(
                                                          "svg",
                                                          {
                                                            className:
                                                              "w-4 h-4 text-green-600 dark:text-green-400",
                                                            fill: "none",
                                                            stroke:
                                                              "currentColor",
                                                            viewBox:
                                                              "0 0 24 24",
                                                            children: (0,
                                                            r.jsx)("path", {
                                                              strokeLinecap:
                                                                "round",
                                                              strokeLinejoin:
                                                                "round",
                                                              strokeWidth: "2",
                                                              d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                        className:
                                                          "flex flex-col",
                                                        children: [
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "font-medium",
                                                            children:
                                                              "User Operations",
                                                          }),
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "text-xs text-gray-500 dark:text-gray-400",
                                                            children:
                                                              "Account abstraction ops",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, r.jsx)("svg", {
                                                    className:
                                                      "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: (0, r.jsx)(
                                                      "path",
                                                      {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M9 5l7 7-7 7",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsxs)(a.default, {
                                                href: "/explorer/blocks",
                                                className:
                                                  "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                                children: [
                                                  (0, r.jsxs)("div", {
                                                    className:
                                                      "flex items-center",
                                                    children: [
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors",
                                                        children: (0, r.jsx)(
                                                          "svg",
                                                          {
                                                            className:
                                                              "w-4 h-4 text-ethai dark:text-ethai",
                                                            fill: "none",
                                                            stroke:
                                                              "currentColor",
                                                            viewBox:
                                                              "0 0 24 24",
                                                            children: (0,
                                                            r.jsx)("path", {
                                                              strokeLinecap:
                                                                "round",
                                                              strokeLinejoin:
                                                                "round",
                                                              strokeWidth: "2",
                                                              d: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                        className:
                                                          "flex flex-col",
                                                        children: [
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "font-medium",
                                                            children: "Blocks",
                                                          }),
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "text-xs text-gray-500 dark:text-gray-400",
                                                            children:
                                                              "Blockchain blocks",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, r.jsx)("svg", {
                                                    className:
                                                      "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: (0, r.jsx)(
                                                      "path",
                                                      {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M9 5l7 7-7 7",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsxs)(a.default, {
                                                href: "/explorer/accounts",
                                                className:
                                                  "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                                children: [
                                                  (0, r.jsxs)("div", {
                                                    className:
                                                      "flex items-center",
                                                    children: [
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mr-3 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/50 transition-colors",
                                                        children: (0, r.jsx)(
                                                          "svg",
                                                          {
                                                            className:
                                                              "w-4 h-4 text-yellow-600 dark:text-yellow-400",
                                                            fill: "none",
                                                            stroke:
                                                              "currentColor",
                                                            viewBox:
                                                              "0 0 24 24",
                                                            children: (0,
                                                            r.jsx)("path", {
                                                              strokeLinecap:
                                                                "round",
                                                              strokeLinejoin:
                                                                "round",
                                                              strokeWidth: "2",
                                                              d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                        className:
                                                          "flex flex-col",
                                                        children: [
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "font-medium",
                                                            children:
                                                              "Top Accounts",
                                                          }),
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "text-xs text-gray-500 dark:text-gray-400",
                                                            children:
                                                              "Richest addresses",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, r.jsx)("svg", {
                                                    className:
                                                      "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: (0, r.jsx)(
                                                      "path",
                                                      {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M9 5l7 7-7 7",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsxs)(a.default, {
                                                href: "/explorer/withdrawls",
                                                className:
                                                  "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                                children: [
                                                  (0, r.jsxs)("div", {
                                                    className:
                                                      "flex items-center",
                                                    children: [
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3 group-hover:bg-red-200 dark:group-hover:bg-red-800/50 transition-colors",
                                                        children: (0, r.jsx)(
                                                          "svg",
                                                          {
                                                            className:
                                                              "w-4 h-4 text-red-600 dark:text-red-400",
                                                            fill: "none",
                                                            stroke:
                                                              "currentColor",
                                                            viewBox:
                                                              "0 0 24 24",
                                                            children: (0,
                                                            r.jsx)("path", {
                                                              strokeLinecap:
                                                                "round",
                                                              strokeLinejoin:
                                                                "round",
                                                              strokeWidth: "2",
                                                              d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                        className:
                                                          "flex flex-col",
                                                        children: [
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "font-medium",
                                                            children:
                                                              "Withdrawals",
                                                          }),
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "text-xs text-gray-500 dark:text-gray-400",
                                                            children:
                                                              "Staking withdrawals",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, r.jsx)("svg", {
                                                    className:
                                                      "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: (0, r.jsx)(
                                                      "path",
                                                      {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M9 5l7 7-7 7",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsxs)(a.default, {
                                                href: "/explorer/contracts",
                                                className:
                                                  "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                                children: [
                                                  (0, r.jsxs)("div", {
                                                    className:
                                                      "flex items-center",
                                                    children: [
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors",
                                                        children: (0, r.jsx)(
                                                          "svg",
                                                          {
                                                            className:
                                                              "w-4 h-4 text-indigo-600 dark:text-indigo-400",
                                                            fill: "none",
                                                            stroke:
                                                              "currentColor",
                                                            viewBox:
                                                              "0 0 24 24",
                                                            children: (0,
                                                            r.jsx)("path", {
                                                              strokeLinecap:
                                                                "round",
                                                              strokeLinejoin:
                                                                "round",
                                                              strokeWidth: "2",
                                                              d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                        className:
                                                          "flex flex-col",
                                                        children: [
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "font-medium",
                                                            children:
                                                              "Verified Contracts",
                                                          }),
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "text-xs text-gray-500 dark:text-gray-400",
                                                            children:
                                                              "Smart contracts",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, r.jsx)("svg", {
                                                    className:
                                                      "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: (0, r.jsx)(
                                                      "path",
                                                      {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M9 5l7 7-7 7",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsxs)(a.default, {
                                                href: "/explorer/tokens",
                                                className:
                                                  "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                                children: [
                                                  (0, r.jsxs)("div", {
                                                    className:
                                                      "flex items-center",
                                                    children: [
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mr-3 group-hover:bg-pink-200 dark:group-hover:bg-pink-800/50 transition-colors",
                                                        children: (0, r.jsx)(
                                                          "svg",
                                                          {
                                                            className:
                                                              "w-4 h-4 text-pink-600 dark:text-pink-400",
                                                            fill: "none",
                                                            stroke:
                                                              "currentColor",
                                                            viewBox:
                                                              "0 0 24 24",
                                                            children: (0,
                                                            r.jsx)("path", {
                                                              strokeLinecap:
                                                                "round",
                                                              strokeLinejoin:
                                                                "round",
                                                              strokeWidth: "2",
                                                              d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                        className:
                                                          "flex flex-col",
                                                        children: [
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "font-medium",
                                                            children: "Tokens",
                                                          }),
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "text-xs text-gray-500 dark:text-gray-400",
                                                            children:
                                                              "ERC-20 tokens",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, r.jsx)("svg", {
                                                    className:
                                                      "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: (0, r.jsx)(
                                                      "path",
                                                      {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M9 5l7 7-7 7",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsxs)(a.default, {
                                                href: "/explorer/tokens/transfers",
                                                className:
                                                  "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                                children: [
                                                  (0, r.jsxs)("div", {
                                                    className:
                                                      "flex items-center",
                                                    children: [
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3 group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors",
                                                        children: (0, r.jsx)(
                                                          "svg",
                                                          {
                                                            className:
                                                              "w-4 h-4 text-teal-600 dark:text-teal-400",
                                                            fill: "none",
                                                            stroke:
                                                              "currentColor",
                                                            viewBox:
                                                              "0 0 24 24",
                                                            children: (0,
                                                            r.jsx)("path", {
                                                              strokeLinecap:
                                                                "round",
                                                              strokeLinejoin:
                                                                "round",
                                                              strokeWidth: "2",
                                                              d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                        className:
                                                          "flex flex-col",
                                                        children: [
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "font-medium",
                                                            children:
                                                              "Token Transfers",
                                                          }),
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "text-xs text-gray-500 dark:text-gray-400",
                                                            children:
                                                              "Token movements",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, r.jsx)("svg", {
                                                    className:
                                                      "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: (0, r.jsx)(
                                                      "path",
                                                      {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M9 5l7 7-7 7",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsxs)(a.default, {
                                                href: "/explorer/gas-tracker",
                                                className:
                                                  "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                                children: [
                                                  (0, r.jsxs)("div", {
                                                    className:
                                                      "flex items-center",
                                                    children: [
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-3 group-hover:bg-orange-200 dark:group-hover:bg-orange-800/50 transition-colors",
                                                        children: (0, r.jsx)(
                                                          "svg",
                                                          {
                                                            className:
                                                              "w-4 h-4 text-orange-600 dark:text-orange-400",
                                                            fill: "none",
                                                            stroke:
                                                              "currentColor",
                                                            viewBox:
                                                              "0 0 24 24",
                                                            children: (0,
                                                            r.jsx)("path", {
                                                              strokeLinecap:
                                                                "round",
                                                              strokeLinejoin:
                                                                "round",
                                                              strokeWidth: "2",
                                                              d: "M13 10V3L4 14h7v7l9-11h-7z",
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                        className:
                                                          "flex flex-col",
                                                        children: [
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "font-medium",
                                                            children:
                                                              "Gas Tracker",
                                                          }),
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "text-xs text-gray-500 dark:text-gray-400",
                                                            children:
                                                              "Network fees",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, r.jsx)("svg", {
                                                    className:
                                                      "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: (0, r.jsx)(
                                                      "path",
                                                      {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M9 5l7 7-7 7",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsxs)(a.default, {
                                                href: "/explorer/contracts/verifier",
                                                className:
                                                  "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                                children: [
                                                  (0, r.jsxs)("div", {
                                                    className:
                                                      "flex items-center",
                                                    children: [
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mr-3 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800/50 transition-colors",
                                                        children: (0, r.jsxs)(
                                                          "svg",
                                                          {
                                                            className:
                                                              "w-4 h-4 text-cyan-600 dark:text-cyan-400",
                                                            fill: "none",
                                                            stroke:
                                                              "currentColor",
                                                            viewBox:
                                                              "0 0 24 24",
                                                            children: [
                                                              (0, r.jsx)(
                                                                "path",
                                                                {
                                                                  strokeLinecap:
                                                                    "round",
                                                                  strokeLinejoin:
                                                                    "round",
                                                                  strokeWidth:
                                                                    "2",
                                                                  d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                                                                }
                                                              ),
                                                              (0, r.jsx)(
                                                                "path",
                                                                {
                                                                  strokeLinecap:
                                                                    "round",
                                                                  strokeLinejoin:
                                                                    "round",
                                                                  strokeWidth:
                                                                    "2",
                                                                  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                                                                }
                                                              ),
                                                            ],
                                                          }
                                                        ),
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                        className:
                                                          "flex flex-col",
                                                        children: [
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "font-medium",
                                                            children:
                                                              "Contract Verifier",
                                                          }),
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "text-xs text-gray-500 dark:text-gray-400",
                                                            children:
                                                              "Verify source code",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, r.jsx)("svg", {
                                                    className:
                                                      "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: (0, r.jsx)(
                                                      "path",
                                                      {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M9 5l7 7-7 7",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, r.jsxs)("div", {
                                        className:
                                          "border-r border-gray-200 dark:border-gray-700 min-w-[294.66px] p-4",
                                        children: [
                                          (0, r.jsx)("h3", {
                                            className:
                                              "text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide",
                                            children: "APIs",
                                          }),
                                          (0, r.jsxs)("div", {
                                            className: "space-y-2",
                                            children: [
                                              (0, r.jsxs)(a.default, {
                                                href: "/api-docs",
                                                className:
                                                  "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                                children: [
                                                  (0, r.jsxs)("div", {
                                                    className:
                                                      "flex items-center",
                                                    children: [
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors",
                                                        children: (0, r.jsx)(
                                                          "svg",
                                                          {
                                                            className:
                                                              "w-4 h-4 text-blue-600 dark:text-blue-400",
                                                            fill: "none",
                                                            stroke:
                                                              "currentColor",
                                                            viewBox:
                                                              "0 0 24 24",
                                                            children: (0,
                                                            r.jsx)("path", {
                                                              strokeLinecap:
                                                                "round",
                                                              strokeLinejoin:
                                                                "round",
                                                              strokeWidth: "2",
                                                              d: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                        className:
                                                          "flex flex-col",
                                                        children: [
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "font-medium",
                                                            children:
                                                              "REST API",
                                                          }),
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "text-xs text-gray-500 dark:text-gray-400",
                                                            children:
                                                              "HTTP endpoints",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, r.jsx)("svg", {
                                                    className:
                                                      "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: (0, r.jsx)(
                                                      "path",
                                                      {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M9 5l7 7-7 7",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsxs)(a.default, {
                                                href: "/graphql",
                                                className:
                                                  "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                                children: [
                                                  (0, r.jsxs)("div", {
                                                    className:
                                                      "flex items-center",
                                                    children: [
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors",
                                                        children: (0, r.jsx)(
                                                          "svg",
                                                          {
                                                            className:
                                                              "w-4 h-4 text-ethai dark:text-ethai",
                                                            fill: "none",
                                                            stroke:
                                                              "currentColor",
                                                            viewBox:
                                                              "0 0 24 24",
                                                            children: (0,
                                                            r.jsx)("path", {
                                                              strokeLinecap:
                                                                "round",
                                                              strokeLinejoin:
                                                                "round",
                                                              strokeWidth: "2",
                                                              d: "M4 6h16M4 10h16M4 14h16M4 18h16",
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                        className:
                                                          "flex flex-col",
                                                        children: [
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "font-medium",
                                                            children: "GraphQL",
                                                          }),
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "text-xs text-gray-500 dark:text-gray-400",
                                                            children:
                                                              "Query language",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, r.jsx)("svg", {
                                                    className:
                                                      "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: (0, r.jsx)(
                                                      "path",
                                                      {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M9 5l7 7-7 7",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsxs)(a.default, {
                                                href: "/api-docs",
                                                className:
                                                  "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                                children: [
                                                  (0, r.jsxs)("div", {
                                                    className:
                                                      "flex items-center",
                                                    children: [
                                                      (0, r.jsx)("div", {
                                                        className:
                                                          "w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors",
                                                        children: (0, r.jsx)(
                                                          "svg",
                                                          {
                                                            className:
                                                              "w-4 h-4 text-green-600 dark:text-green-400",
                                                            fill: "none",
                                                            stroke:
                                                              "currentColor",
                                                            viewBox:
                                                              "0 0 24 24",
                                                            children: (0,
                                                            r.jsx)("path", {
                                                              strokeLinecap:
                                                                "round",
                                                              strokeLinejoin:
                                                                "round",
                                                              strokeWidth: "2",
                                                              d: "M13 10V3L4 14h7v7l9-11h-7z",
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                        className:
                                                          "flex flex-col",
                                                        children: [
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "font-medium",
                                                            children: "RPC API",
                                                          }),
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "text-xs text-gray-500 dark:text-gray-400",
                                                            children:
                                                              "Remote procedure calls",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, r.jsx)("svg", {
                                                    className:
                                                      "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: (0, r.jsx)(
                                                      "path",
                                                      {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M9 5l7 7-7 7",
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)("div", {
                                        className: "min-w-[294.66px] p-4",
                                        children: (0, r.jsxs)("div", {
                                          className: "space-y-2",
                                          children: [
                                            (0, r.jsxs)(a.default, {
                                              href: "/faucet",
                                              className:
                                                "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                              children: [
                                                (0, r.jsxs)("div", {
                                                  className:
                                                    "flex items-center",
                                                  children: [
                                                    (0, r.jsx)("div", {
                                                      className:
                                                        "w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mr-3 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/50 transition-colors",
                                                      children: (0, r.jsx)(
                                                        "svg",
                                                        {
                                                          className:
                                                            "w-4 h-4 text-yellow-600 dark:text-yellow-400",
                                                          fill: "none",
                                                          stroke:
                                                            "currentColor",
                                                          viewBox: "0 0 24 24",
                                                          children: (0, r.jsx)(
                                                            "path",
                                                            {
                                                              strokeLinecap:
                                                                "round",
                                                              strokeLinejoin:
                                                                "round",
                                                              strokeWidth: "2",
                                                              d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "flex flex-col",
                                                      children: [
                                                        (0, r.jsx)("span", {
                                                          className:
                                                            "font-medium",
                                                          children: "Faucet",
                                                        }),
                                                        (0, r.jsx)("span", {
                                                          className:
                                                            "text-xs text-gray-500 dark:text-gray-400",
                                                          children:
                                                            "Get real tokens",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, r.jsx)("svg", {
                                                  className:
                                                    "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                  fill: "none",
                                                  stroke: "currentColor",
                                                  viewBox: "0 0 24 24",
                                                  children: (0, r.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M9 5l7 7-7 7",
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, r.jsxs)(a.default, {
                                              href: "/",
                                              className:
                                                "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                              children: [
                                                (0, r.jsxs)("div", {
                                                  className:
                                                    "flex items-center",
                                                  children: [
                                                    (0, r.jsx)("div", {
                                                      className:
                                                        "w-8 h-8 rounded-full bg-gray-100 dark:bg-[#0B101C]/30 flex items-center justify-center mr-3 group-hover:bg-gray-200 dark:group-hover:bg-gray-900/50 transition-colors",
                                                      children: (0, r.jsx)(
                                                        "svg",
                                                        {
                                                          className:
                                                            "w-4 h-4 text-gray-600 dark:text-gray-400",
                                                          fill: "none",
                                                          stroke:
                                                            "currentColor",
                                                          viewBox: "0 0 24 24",
                                                          children: (0, r.jsx)(
                                                            "path",
                                                            {
                                                              strokeLinecap:
                                                                "round",
                                                              strokeLinejoin:
                                                                "round",
                                                              strokeWidth: "2",
                                                              d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "flex flex-col",
                                                      children: [
                                                        (0, r.jsxs)("span", {
                                                          className:
                                                            "font-medium",
                                                          children: [
                                                            "External Wallet ",
                                                            (0, r.jsx)("span", {
                                                              className:
                                                                "text-xs text-gray-500",
                                                              children:
                                                                "(soon)",
                                                            }),
                                                          ],
                                                        }),
                                                        (0, r.jsx)("span", {
                                                          className:
                                                            "text-xs text-gray-500 dark:text-gray-400",
                                                          children:
                                                            "Connect external wallets",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, r.jsx)("svg", {
                                                  className:
                                                    "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                  fill: "none",
                                                  stroke: "currentColor",
                                                  viewBox: "0 0 24 24",
                                                  children: (0, r.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M9 5l7 7-7 7",
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, r.jsxs)(a.default, {
                                              href: "/bridge",
                                              className:
                                                "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                              children: [
                                                (0, r.jsxs)("div", {
                                                  className:
                                                    "flex items-center",
                                                  children: [
                                                    (0, r.jsx)("div", {
                                                      className:
                                                        "w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors",
                                                      children: (0, r.jsx)(
                                                        "svg",
                                                        {
                                                          className:
                                                            "w-4 h-4 text-indigo-600 dark:text-indigo-400",
                                                          fill: "none",
                                                          stroke:
                                                            "currentColor",
                                                          viewBox: "0 0 24 24",
                                                          children: (0, r.jsx)(
                                                            "path",
                                                            {
                                                              strokeLinecap:
                                                                "round",
                                                              strokeLinejoin:
                                                                "round",
                                                              strokeWidth: "2",
                                                              d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "flex flex-col",
                                                      children: [
                                                        (0, r.jsx)("span", {
                                                          className:
                                                            "font-medium",
                                                          children: "Bridge",
                                                        }),
                                                        (0, r.jsx)("span", {
                                                          className:
                                                            "text-xs text-gray-500 dark:text-gray-400",
                                                          children:
                                                            "Cross-chain transfers",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, r.jsx)("svg", {
                                                  className:
                                                    "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                  fill: "none",
                                                  stroke: "currentColor",
                                                  viewBox: "0 0 24 24",
                                                  children: (0, r.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M9 5l7 7-7 7",
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, r.jsxs)(a.default, {
                                              href: "/swap",
                                              className:
                                                "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                              children: [
                                                (0, r.jsxs)("div", {
                                                  className:
                                                    "flex items-center",
                                                  children: [
                                                    (0, r.jsx)("div", {
                                                      className:
                                                        "w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors",
                                                      children: (0, r.jsx)(
                                                        "svg",
                                                        {
                                                          className:
                                                            "w-4 h-4 text-green-600 dark:text-green-400",
                                                          fill: "none",
                                                          stroke:
                                                            "currentColor",
                                                          viewBox: "0 0 24 24",
                                                          children: (0, r.jsx)(
                                                            "path",
                                                            {
                                                              strokeLinecap:
                                                                "round",
                                                              strokeLinejoin:
                                                                "round",
                                                              strokeWidth: "2",
                                                              d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    }),
                                                    (0, r.jsxs)("div", {
                                                      className:
                                                        "flex flex-col",
                                                      children: [
                                                        (0, r.jsx)("span", {
                                                          className:
                                                            "font-medium",
                                                          children: "Swap",
                                                        }),
                                                        (0, r.jsx)("span", {
                                                          className:
                                                            "text-xs text-gray-500 dark:text-gray-400",
                                                          children:
                                                            "Token exchange",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, r.jsx)("svg", {
                                                  className:
                                                    "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                  fill: "none",
                                                  stroke: "currentColor",
                                                  viewBox: "0 0 24 24",
                                                  children: (0, r.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M9 5l7 7-7 7",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "relative h-full",
                            children: [
                              (0, r.jsxs)("button", {
                                onClick: () => T("etherchain"),
                                onMouseEnter: () => j("etherchain"),
                                onMouseLeave: E,
                                className:
                                  "flex items-center p-2 rounded-lg h-full   text-[#0B101C] dark:text-gray-300 hover:text-ethai dark:hover:text-ethai transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                                children: [
                                  (0, r.jsx)("svg", {
                                    className: "w-4 h-4 mr-2",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
                                    }),
                                  }),
                                  "Etherchain",
                                  (0, r.jsx)("svg", {
                                    className: "w-4 h-4 ml-1",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M19 9l-7 7-7-7",
                                    }),
                                  }),
                                ],
                              }),
                              "etherchain" === f &&
                                (0, r.jsx)("div", {
                                  className:
                                    "absolute top-full left-0 w-[36rem] bg-white dark:bg-[#0B101C] rounded-lg shadow-xl border border-gray-200 dark:border-gray-700",
                                  onMouseLeave: E,
                                  onMouseEnter: () => j("etherchain"),
                                  children: (0, r.jsxs)("div", {
                                    className: "grid grid-cols-2",
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className:
                                          "space-y-2 mb-4 border-r border-gray-200 dark:border-gray-700 min-w-[298px] p-4",
                                        children: [
                                          (0, r.jsx)("h3", {
                                            className:
                                              "text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide",
                                            children: "Get started",
                                          }),
                                          (0, r.jsxs)(a.default, {
                                            href: "/how-to-buy",
                                            className:
                                              "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                            children: [
                                              (0, r.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                  (0, r.jsx)("div", {
                                                    className:
                                                      "w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors",
                                                    children: (0, r.jsx)(
                                                      "svg",
                                                      {
                                                        className:
                                                          "w-4 h-4 text-green-600 dark:text-green-400",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: (0, r.jsx)(
                                                          "path",
                                                          {
                                                            strokeLinecap:
                                                              "round",
                                                            strokeLinejoin:
                                                              "round",
                                                            strokeWidth: "2",
                                                            d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                      (0, r.jsx)("span", {
                                                        className:
                                                          "font-medium",
                                                        children: "How-To-Buy",
                                                      }),
                                                      (0, r.jsx)("span", {
                                                        className:
                                                          "text-xs text-gray-500 dark:text-gray-400",
                                                        children:
                                                          "Purchase guide",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: "2",
                                                  d: "M9 5l7 7-7 7",
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, r.jsxs)(a.default, {
                                            href: "/affiliate",
                                            className:
                                              "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                            children: [
                                              (0, r.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                  (0, r.jsx)("div", {
                                                    className:
                                                      "w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-3 group-hover:bg-orange-200 dark:group-hover:bg-orange-800/50 transition-colors",
                                                    children: (0, r.jsx)(
                                                      "svg",
                                                      {
                                                        className:
                                                          "w-4 h-4 text-orange-600 dark:text-orange-400",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        viewBox: "0 0 24 24",
                                                        children: (0, r.jsx)(
                                                          "path",
                                                          {
                                                            strokeLinecap:
                                                              "round",
                                                            strokeLinejoin:
                                                              "round",
                                                            d: "M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4m0 0L8 6m4-4v16",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                      (0, r.jsx)("span", {
                                                        className:
                                                          "font-medium",
                                                        children:
                                                          "Affiliate Program",
                                                      }),
                                                      (0, r.jsx)("span", {
                                                        className:
                                                          "text-xs text-gray-500 dark:text-gray-400",
                                                        children:
                                                          "Earn rewards",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: "2",
                                                  d: "M9 5l7 7-7 7",
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, r.jsxs)(a.default, {
                                            href: "/win-100k",
                                            className:
                                              "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                            children: [
                                              (0, r.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                  (0, r.jsx)("div", {
                                                    className:
                                                      "w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mr-3 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/50 transition-colors",
                                                    children: (0, r.jsx)(
                                                      "svg",
                                                      {
                                                        className:
                                                          "w-4 h-4 text-yellow-600 dark:text-yellow-400",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: (0, r.jsx)(
                                                          "path",
                                                          {
                                                            strokeLinecap:
                                                              "round",
                                                            strokeLinejoin:
                                                              "round",
                                                            strokeWidth: "2",
                                                            d: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                      (0, r.jsx)("span", {
                                                        className:
                                                          "font-medium",
                                                        children: "Win $200k",
                                                      }),
                                                      (0, r.jsx)("span", {
                                                        className:
                                                          "text-xs text-gray-500 dark:text-gray-400",
                                                        children:
                                                          "Contest & prizes",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: "2",
                                                  d: "M9 5l7 7-7 7",
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, r.jsxs)(a.default, {
                                            href: "/",
                                            className:
                                              "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                            children: [
                                              (0, r.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                  (0, r.jsx)("div", {
                                                    className:
                                                      "w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors",
                                                    children: (0, r.jsx)(
                                                      "svg",
                                                      {
                                                        className:
                                                          "w-4 h-4 text-blue-600 dark:text-blue-400",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: (0, r.jsx)(
                                                          "path",
                                                          {
                                                            strokeLinecap:
                                                              "round",
                                                            strokeLinejoin:
                                                              "round",
                                                            strokeWidth: "2",
                                                            d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                      (0, r.jsxs)("span", {
                                                        className:
                                                          "font-medium",
                                                        children: [
                                                          "Developer Docs ",
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "text-xs text-gray-500",
                                                            children: "(soon)",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, r.jsx)("span", {
                                                        className:
                                                          "text-xs text-gray-500 dark:text-gray-400",
                                                        children:
                                                          "All development information",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: "2",
                                                  d: "M9 5l7 7-7 7",
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, r.jsxs)(a.default, {
                                            href: "/",
                                            className:
                                              "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                            children: [
                                              (0, r.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                  (0, r.jsx)("div", {
                                                    className:
                                                      "w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors",
                                                    children: (0, r.jsx)(
                                                      "svg",
                                                      {
                                                        className:
                                                          "w-4 h-4 text-ethai dark:text-ethai",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: (0, r.jsx)(
                                                          "path",
                                                          {
                                                            strokeLinecap:
                                                              "round",
                                                            strokeLinejoin:
                                                              "round",
                                                            strokeWidth: "2",
                                                            d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                      (0, r.jsxs)("span", {
                                                        className:
                                                          "font-medium",
                                                        children: [
                                                          "IDE ",
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "text-xs text-gray-500",
                                                            children: "(soon)",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, r.jsx)("span", {
                                                        className:
                                                          "text-xs text-gray-500 dark:text-gray-400",
                                                        children:
                                                          "code directly in the browser",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: "2",
                                                  d: "M9 5l7 7-7 7",
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, r.jsxs)(a.default, {
                                            href: "/",
                                            className:
                                              "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                            children: [
                                              (0, r.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                  (0, r.jsx)("div", {
                                                    className:
                                                      "w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors",
                                                    children: (0, r.jsx)(
                                                      "svg",
                                                      {
                                                        className:
                                                          "w-4 h-4 text-indigo-600 dark:text-indigo-400",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: (0, r.jsx)(
                                                          "path",
                                                          {
                                                            strokeLinecap:
                                                              "round",
                                                            strokeLinejoin:
                                                              "round",
                                                            strokeWidth: "2",
                                                            d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                      (0, r.jsxs)("span", {
                                                        className:
                                                          "font-medium",
                                                        children: [
                                                          "SDKs ",
                                                          (0, r.jsx)("span", {
                                                            className:
                                                              "text-xs text-gray-500",
                                                            children: "(soon)",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, r.jsx)("span", {
                                                        className:
                                                          "text-xs text-gray-500 dark:text-gray-400",
                                                        children:
                                                          "For rapid dapp development",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: "2",
                                                  d: "M9 5l7 7-7 7",
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, r.jsxs)(a.default, {
                                            href: "/grant",
                                            className:
                                              "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                            children: [
                                              (0, r.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                  (0, r.jsx)("div", {
                                                    className:
                                                      "w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mr-3 group-hover:bg-pink-200 dark:group-hover:bg-pink-800/50 transition-colors",
                                                    children: (0, r.jsx)(
                                                      "svg",
                                                      {
                                                        className:
                                                          "w-4 h-4 text-pink-600 dark:text-pink-400",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: (0, r.jsx)(
                                                          "path",
                                                          {
                                                            strokeLinecap:
                                                              "round",
                                                            strokeLinejoin:
                                                              "round",
                                                            strokeWidth: "2",
                                                            d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                  (0, r.jsxs)("div", {
                                                    className: "flex flex-col",
                                                    children: [
                                                      (0, r.jsx)("span", {
                                                        className:
                                                          "font-medium",
                                                        children: "Grants",
                                                      }),
                                                      (0, r.jsx)("span", {
                                                        className:
                                                          "text-xs text-gray-500 dark:text-gray-400",
                                                        children:
                                                          "Developer funding",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: "2",
                                                  d: "M9 5l7 7-7 7",
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)("div", {
                                        className: "min-w-[298px] p-1",
                                        children: (0, r.jsx)(a.default, {
                                          href: "/blogs",
                                          className:
                                            "flex flex-col justify-center items-center  text-gray-900 space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-950 transition-colors h-full",
                                          children: (0, r.jsx)("div", {
                                            className:
                                              "flex items-center justify-center",
                                            children: (0, r.jsx)("img", {
                                              className: "rounded-[10px]",
                                              src: "/images/portal.webp",
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "relative h-full",
                            children: [
                              (0, r.jsxs)("button", {
                                onClick: () => T("community"),
                                onMouseEnter: () => j("community"),
                                onMouseLeave: E,
                                className:
                                  "flex items-center p-2 rounded-lg h-full   text-[#0B101C] dark:text-gray-300 hover:text-ethai dark:hover:text-ethai transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                                children: [
                                  (0, r.jsx)("svg", {
                                    className: "w-4 h-4 mr-2",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                                    }),
                                  }),
                                  "Community",
                                  (0, r.jsx)("svg", {
                                    className: "w-4 h-4 ml-1",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M19 9l-7 7-7-7",
                                    }),
                                  }),
                                ],
                              }),
                              "community" === f &&
                                (0, r.jsxs)("div", {
                                  className:
                                    "absolute top-full left-0 w-[298px] bg-white dark:bg-[#0B101C] rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2",
                                  onMouseLeave: E,
                                  onMouseEnter: () => j("community"),
                                  children: [
                                    (0, r.jsxs)(a.default, {
                                      href: "/forum",
                                      className:
                                        "flex items-center justify-between px-4 py-3 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("div", {
                                              className:
                                                "w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors",
                                              children: (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-blue-600 dark:text-blue-400",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: "2",
                                                  d: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
                                                }),
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "font-medium",
                                                  children: "Forum",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children:
                                                    "Community discussions",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)(a.default, {
                                      href: "https://t.me/+lRBI5QAnotZiNDA1",
                                      className:
                                        "flex items-center justify-between px-4 py-3 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("div", {
                                              className:
                                                "w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors",
                                              children: (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-green-600 dark:text-green-400",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: "2",
                                                  d: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z",
                                                }),
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "font-medium",
                                                  children: "Support",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children: "Get help",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)(a.default, {
                                      href: "/#faq",
                                      className:
                                        "flex items-center justify-between px-4 py-3 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("div", {
                                              className:
                                                "w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mr-3 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/50 transition-colors",
                                              children: (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-yellow-600 dark:text-yellow-400",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: "2",
                                                  d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                                }),
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "font-medium",
                                                  children: "FAQs",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children: "Common questions",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)(a.default, {
                                      href: "/grant",
                                      className:
                                        "flex items-center justify-between px-4 py-3 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("div", {
                                              className:
                                                "w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors",
                                              children: (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-ethai dark:text-ethai",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: "2",
                                                  d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                                }),
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "font-medium",
                                                  children:
                                                    "Developer Grant Portal",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children: "Apply for funding",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)(a.default, {
                                      href: "/dashboard/voting",
                                      className:
                                        "flex items-center justify-between px-4 py-3 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("div", {
                                              className:
                                                "w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors",
                                              children: (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-indigo-600 dark:text-indigo-400",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: "2",
                                                  d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                                }),
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "font-medium",
                                                  children: "Governance Voting",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children: "DAO decisions",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "relative h-full",
                            children: [
                              (0, r.jsxs)("button", {
                                onClick: () => T("social"),
                                onMouseEnter: () => j("social"),
                                onMouseLeave: E,
                                className:
                                  "flex items-center p-2 rounded-lg h-full   text-[#0B101C] dark:text-gray-300 hover:text-ethai dark:hover:text-ethai transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                                children: [
                                  (0, r.jsx)("svg", {
                                    className: "w-4 h-4 mr-2",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                    }),
                                  }),
                                  "Social",
                                  (0, r.jsx)("svg", {
                                    className: "w-4 h-4 ml-1",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M19 9l-7 7-7-7",
                                    }),
                                  }),
                                ],
                              }),
                              "social" === f &&
                                (0, r.jsxs)("div", {
                                  className:
                                    "absolute top-full left-0 w-[298px] bg-white dark:bg-[#0B101C] rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2",
                                  onMouseLeave: E,
                                  onMouseEnter: () => j("social"),
                                  children: [
                                    (0, r.jsxs)(a.default, {
                                      href: "https://x.com/EtherchainAi",
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      className:
                                        "flex items-center justify-between px-4 py-3 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("div", {
                                              className:
                                                "w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors",
                                              children: (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-blue-600 dark:text-blue-400",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                                                }),
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "font-medium",
                                                  children: "X (Twitter)",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children:
                                                    "Follow us on X (Twitter)",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)(a.default, {
                                      href: "https://t.me/+lRBI5QAnotZiNDA1",
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      className:
                                        "flex items-center justify-between px-4 py-3 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("div", {
                                              className:
                                                "w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors",
                                              children: (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-green-600 dark:text-green-400",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                                                }),
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "font-medium",
                                                  children: "Telegram",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children:
                                                    "Join our Telegram channel",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)(a.default, {
                                      href: "https://discord.gg/yWTHYKeeYb",
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      className:
                                        "flex items-center justify-between px-4 py-3 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group rounded-[10px]",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("div", {
                                              className:
                                                "w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mr-3 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/50 transition-colors",
                                              children: (0, r.jsx)("svg", {
                                                xmlns:
                                                  "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 512 512",
                                                fill: "currentColor",
                                                className:
                                                  "w-4 h-4 text-yellow-600 dark:text-yellow-400",
                                                children: (0, r.jsx)("path", {
                                                  d: "M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm84.42 350.71s-7.98-9.51-14.61-17.89c28.96-8.2 39.94-26.18 39.94-26.18-9.12 5.98-17.8 10.2-25.63 13.11-11.14 4.72-21.84 7.88-32.36 9.7-21.46 3.99-41.07 2.93-58.04.17-12.74-2-23.8-4.99-33.02-8.09-5.16-1.94-10.77-4.27-16.51-7.02-.7-.36-1.4-.72-2.1-1.09-.45-.23-.9-.48-1.34-.72-6.03-3.33-9.4-5.67-9.4-5.67s10.66 17.76 38.83 26.03c-6.65 8.39-14.7 18.32-14.7 18.32-48.58-1.54-66.98-33.4-66.98-33.4 0-70.73 31.65-128.12 31.65-128.12 31.65-23.72 61.71-23.08 61.71-23.08l2.22 2.57c-39.59 11.36-57.94 28.52-57.94 28.52s4.86-2.69 13.03-6.52c23.67-10.4 42.39-13.18 50.1-13.84 1.26-.14 2.35-.25 3.25-.31 11.7-1.57 24.89-1.81 38.12-.35 17.9 2.03 37.39 7.1 57.27 17.45 0 0-17.14-16.31-54.29-27.72l3.06-3.45s30.06-.64 61.71 23.08c0 0 31.65 57.39 31.65 128.12 0 0-18.55 31.86-67.14 33.4zM210.12 227.24c-11.8 0-21.41 10.34-21.41 23.08s9.55 23.08 21.41 23.08c11.85 0 21.41-10.34 21.41-23.08.05-12.74-9.56-23.08-21.41-23.08zm91.76 0c-11.8 0-21.41 10.34-21.41 23.08s9.55 23.08 21.41 23.08c11.85 0 21.41-10.34 21.41-23.08s-9.56-23.08-21.41-23.08z",
                                                }),
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "font-medium",
                                                  children: "Discord",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children:
                                                    "Join our Discord community",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)(a.default, {
                                      href: "ttps://linktr.ee/Etherchain.Ai",
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      className:
                                        "flex items-center justify-between px-4 py-3 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("div", {
                                              className:
                                                "w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors",
                                              children: (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-ethai dark:text-ethai",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                                                }),
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "font-medium",
                                                  children: "Linktree",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children:
                                                    "Follow us on Linktree",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)(a.default, {
                                      href: "/forum",
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      className:
                                        "flex items-center justify-between px-4 py-3 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("div", {
                                              className:
                                                "w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors",
                                              children: (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-indigo-600 dark:text-indigo-400",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: "2",
                                                  d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                                                }),
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "font-medium",
                                                  children: "Community Hub",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children:
                                                    "Join our community",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokelineajoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "relative h-full",
                            children: [
                              (0, r.jsxs)("button", {
                                onClick: () => T("contact"),
                                onMouseEnter: () => j("contact"),
                                onMouseLeave: E,
                                className:
                                  "flex items-center p-2 rounded-lg h-full   text-[#0B101C] dark:text-gray-300 hover:text-ethai dark:hover:text-ethai transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                                children: [
                                  (0, r.jsx)("svg", {
                                    className: "w-4 h-4 mr-2",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                    }),
                                  }),
                                  "Contact",
                                  (0, r.jsx)("svg", {
                                    className: "w-4 h-4 ml-1",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M19 9l-7 7-7-7",
                                    }),
                                  }),
                                ],
                              }),
                              "contact" === f &&
                                (0, r.jsxs)("div", {
                                  className:
                                    "absolute top-full left-0 w-[298px] bg-white dark:bg-[#0B101C] rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2",
                                  onMouseLeave: E,
                                  onMouseEnter: () => j("contact"),
                                  children: [
                                    (0, r.jsxs)(a.default, {
                                      href: "/contact",
                                      className:
                                        "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("div", {
                                              className:
                                                "w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors",
                                              children: (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-blue-600 dark:text-blue-400",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: "2",
                                                  d: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                                }),
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "font-medium",
                                                  children: "Contact Form",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children: "Send message",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)(a.default, {
                                      href: "/dashboard/voting",
                                      className:
                                        "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 hover:text-ethai dark:hover:text-ethai transition-all duration-300 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("div", {
                                              className:
                                                "w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors",
                                              children: (0, r.jsx)("svg", {
                                                className:
                                                  "w-4 h-4 text-ethai dark:text-ethai",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, r.jsx)("path", {
                                                  strokeLinecap: "round",
                                                  strokeLinejoin: "round",
                                                  strokeWidth: "2",
                                                  d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                                                }),
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsxs)("span", {
                                                  className: "font-medium",
                                                  children: [
                                                    "Team ",
                                                    (0, r.jsx)("span", {
                                                      className:
                                                        "text-xs text-gray-500",
                                                      children: "(DAO only)",
                                                    }),
                                                  ],
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children: "Meet the team",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-300",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
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
                      (0, r.jsxs)("div", {
                        className: "flex items-center space-x-4",
                        children: [
                          (0, r.jsx)(o.default, {}),
                          (0, r.jsx)(n.default, { className: "py-2" }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)("div", {
                  className: "lg:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                  children: (0, r.jsxs)("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                      (0, r.jsx)("button", {
                        onClick: H,
                        className:
                          "p-2 rounded-full bg-gray-100 dark:bg-gray-950 hover:bg-purple-100 dark:hover:bg-purple-900/40 text-gray-600 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai transition-colors duration-300",
                        "aria-label": "Toggle Sidebar",
                        children: (0, r.jsxs)("svg", {
                          className: "w-6 h-6",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          viewBox: "0 0 24 24",
                          children: [
                            (0, r.jsx)("rect", {
                              x: "3",
                              y: "3",
                              width: "18",
                              height: "18",
                              rx: "2",
                              ry: "2",
                            }),
                            (0, r.jsx)("line", {
                              x1: "9",
                              y1: "3",
                              x2: "9",
                              y2: "21",
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsxs)(a.default, {
                        className:
                          "flex items-center space-x-3 sm:space-x-4 logo-container",
                        href: "/",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "w-9 h-9 sm:w-13 sm:h-13 md:w-14 md:h-14 flex items-center justify-center logo-image",
                            children: (0, r.jsx)(s.default, {
                              src: "/logo_alpha.webp",
                              alt: "Etherchain Logo",
                              className: "w-full h-full etherchain-logo",
                              width: 56,
                              height: 56,
                            }),
                          }),
                          (0, r.jsx)("span", {
                            className:
                              "text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-wide ",
                            children: "ETHERCHAIN",
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "flex items-center space-x-2",
                        children: (0, r.jsx)("button", {
                          onClick: () => {
                            p(!v);
                          },
                          className:
                            "p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors",
                          "aria-label": "Toggle mobile menu",
                          children: (0, r.jsx)("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: (0, r.jsx)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: "2",
                              d: "M4 6h16M4 12h16M4 18h16",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className:
                "fixed inset-0 z-50 transition-opacity duration-300 ".concat(
                  v ? "opacity-100" : "opacity-0 pointer-events-none"
                ),
              onClick: V,
              children: (0, r.jsx)("div", {
                className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
              }),
            }),
            (0, r.jsxs)("div", {
              className:
                "lg:hidden fixed top-0 left-0 h-full w-80 max-w-[85vw] z-[150] bg-white dark:bg-gray-950 shadow-2xl transform transition-transform duration-300 ease-in-out ".concat(
                  v ? "translate-x-0" : "-translate-x-full"
                ),
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",
                  children: [
                    (0, r.jsxs)(a.default, {
                      className: "flex items-center space-x-3 logo-container",
                      href: "/",
                      onClick: V,
                      children: [
                        (0, r.jsx)("div", {
                          className:
                            "w-10 h-10 flex items-center justify-center logo-image",
                          children: (0, r.jsx)(s.default, {
                            src: "/logo_alpha.webp",
                            alt: "Etherchain Logo",
                            className: "w-full h-full etherchain-logo",
                            width: 150,
                            height: 150,
                          }),
                        }),
                        (0, r.jsx)("span", {
                          className:
                            "text-xl font-bold text-gray-900 dark:text-white tracking-wide ",
                          children: "ETHERCHAIN",
                        }),
                      ],
                    }),
                    (0, r.jsx)("button", {
                      onClick: V,
                      className:
                        "lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-ethai dark:hover:text-ethai transition-colors duration-300",
                      "aria-label": "Close mobile menu",
                      children: (0, r.jsx)("svg", {
                        className: "w-6 h-6",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M6 18L18 6M6 6l12 12",
                        }),
                      }),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col pt-2 p-6 space-y-2 overflow-y-auto h-[calc(100%-80px)]",
                  children: [
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsxs)("button", {
                          className:
                            "w-full flex justify-between items-center py-3 px-2 text-left font-semibold text-gray-900 dark:text-white focus:outline-none border-b border-gray-200 dark:border-gray-700",
                          onClick: () => S("about"),
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex items-center",
                              children: [
                                (0, r.jsx)("svg", {
                                  className: "w-4 h-4 mr-2",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: (0, r.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                  }),
                                }),
                                (0, r.jsx)("span", { children: "About" }),
                              ],
                            }),
                            (0, r.jsx)("svg", {
                              className:
                                "w-5 h-5 transform transition-transform ".concat(
                                  "about" === y ? "rotate-180" : ""
                                ),
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: (0, r.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M19 9l-7 7-7-7",
                              }),
                            }),
                          ],
                        }),
                        "about" === y &&
                          (0, r.jsxs)("div", {
                            className: "pl-4 py-2 space-y-2",
                            children: [
                              (0, r.jsxs)(a.default, {
                                href: "/roadmap",
                                className:
                                  "flex items-center py-2 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-ethai dark:text-ethai",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                                    }),
                                  }),
                                  "Roadmap",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/images/EtherchainAi_Whitepaper.pdf",
                                className:
                                  "flex items-center py-2 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-blue-600 dark:text-blue-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                                    }),
                                  }),
                                  "Whitepaper",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/blogs",
                                className:
                                  "flex items-center py-2 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-green-600 dark:text-green-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
                                    }),
                                  }),
                                  "Announcements",
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsxs)("button", {
                          className:
                            "w-full flex justify-between items-center py-3 px-2 text-left font-semibold text-gray-900 dark:text-white focus:outline-none border-b border-gray-200 dark:border-gray-700",
                          onClick: () => S("blockchain"),
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex items-center",
                              children: [
                                (0, r.jsx)("svg", {
                                  className: "w-4 h-4 mr-2",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: (0, r.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                  }),
                                }),
                                (0, r.jsx)("span", { children: "Blockchain" }),
                              ],
                            }),
                            (0, r.jsx)("svg", {
                              className:
                                "w-5 h-5 transform transition-transform ".concat(
                                  "blockchain" === y ? "rotate-180" : ""
                                ),
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: (0, r.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M19 9l-7 7-7-7",
                              }),
                            }),
                          ],
                        }),
                        "blockchain" === y &&
                          (0, r.jsxs)("div", {
                            className: "pl-4 py-2 space-y-2",
                            children: [
                              (0, r.jsx)("h4", {
                                className:
                                  "text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 border-b border-gray-200 dark:border-gray-700",
                                children: "Explorer ",
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/explorer/txs",
                                className:
                                  "flex items-center py-1 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-blue-600 dark:text-blue-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                                    }),
                                  }),
                                  "Transactions",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/explorer/ops",
                                className:
                                  "flex items-center py-1 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-green-600 dark:text-green-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                                    }),
                                  }),
                                  "User Operations",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/explorer/blocks",
                                className:
                                  "flex items-center py-1 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-ethai dark:text-ethai",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                                    }),
                                  }),
                                  "Blocks",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/explorer/accounts",
                                className:
                                  "flex items-center py-1 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-yellow-600 dark:text-yellow-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M13 7h8m0 0v8m0-8l-4-4-6 6",
                                    }),
                                  }),
                                  "Top Accounts",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/explorer/withdrawls",
                                className:
                                  "flex items-center py-1 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-red-600 dark:text-red-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
                                    }),
                                  }),
                                  "Withdrawals",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/explorer/contracts",
                                className:
                                  "flex items-center py-1 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                                    }),
                                  }),
                                  "Verified Contracts",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/explorer/tokens",
                                className:
                                  "flex items-center py-1 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-pink-600 dark:text-pink-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
                                    }),
                                  }),
                                  "Tokens",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/explorer/tokens/transfers",
                                className:
                                  "flex items-center py-1 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-teal-600 dark:text-teal-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
                                    }),
                                  }),
                                  "Token Transfers",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/explorer/gas-tracker",
                                className:
                                  "flex items-center py-1 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-orange-600 dark:text-orange-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M13 10V3L4 14h7v7l9-11h-7z",
                                    }),
                                  }),
                                  "Gas Tracker",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/explorer/contracts/verifier",
                                className:
                                  "flex items-center py-1 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsxs)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-cyan-600 dark:text-cyan-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: [
                                      (0, r.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                                      }),
                                      (0, r.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                                      }),
                                    ],
                                  }),
                                  "Contract Verifier",
                                ],
                              }),
                              (0, r.jsx)("h4", {
                                className:
                                  "text-xs font-medium text-gray-600 dark:text-gray-400 pt-5 mb-1 border-b border-gray-200 dark:border-gray-700",
                                children: "APIs",
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/api-docs",
                                className:
                                  "flex items-center py-1 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-blue-600 dark:text-blue-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                                    }),
                                  }),
                                  "REST API",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/graphql",
                                className:
                                  "flex items-center py-1 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-ethai dark:text-ethai",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M4 6h16M4 10h16M4 14h16M4 18h16",
                                    }),
                                  }),
                                  "GraphQL",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/api-docs",
                                className:
                                  "flex items-center py-1 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-green-600 dark:text-green-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M13 10V3L4 14h7v7l9-11h-7z",
                                    }),
                                  }),
                                  "RPC API",
                                ],
                              }),
                              (0, r.jsx)("h4", {
                                className:
                                  "text-xs font-medium text-gray-600 dark:text-gray-400 pt-5 mb-1 border-b border-gray-200 dark:border-gray-700",
                                children: "Tools",
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/faucet",
                                className:
                                  "flex items-center py-1 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-yellow-600 dark:text-yellow-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
                                    }),
                                  }),
                                  "Faucet",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/",
                                className:
                                  "flex items-center py-1 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-gray-600 dark:text-gray-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                                    }),
                                  }),
                                  "External Wallet ",
                                  (0, r.jsx)("span", {
                                    className: "text-xs text-gray-500",
                                    children: "(soon)",
                                  }),
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/bridge",
                                className:
                                  "flex items-center py-1 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
                                    }),
                                  }),
                                  "Bridge",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/swap",
                                className:
                                  "flex items-center py-1 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-green-600 dark:text-green-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
                                    }),
                                  }),
                                  "Swap",
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsxs)("button", {
                          className:
                            "w-full flex justify-between items-center py-3 px-2 text-left font-semibold text-gray-900 dark:text-white focus:outline-none border-b border-gray-200 dark:border-gray-700",
                          onClick: () => S("etherchain"),
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex items-center",
                              children: [
                                (0, r.jsx)("svg", {
                                  className: "w-4 h-4 mr-2",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: (0, r.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M12 2C6.48 2 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
                                  }),
                                }),
                                (0, r.jsx)("span", { children: "Etherchain" }),
                              ],
                            }),
                            (0, r.jsx)("svg", {
                              className:
                                "w-5 h-5 transform transition-transform ".concat(
                                  "etherchain" === y ? "rotate-180" : ""
                                ),
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: (0, r.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M19 9l-7 7-7-7",
                              }),
                            }),
                          ],
                        }),
                        "etherchain" === y &&
                          (0, r.jsxs)("div", {
                            className: "pl-4 py-2 space-y-2",
                            children: [
                              (0, r.jsxs)(a.default, {
                                href: "/how-to-buy",
                                className:
                                  "flex items-center py-2 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-green-600 dark:text-green-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
                                    }),
                                  }),
                                  "How to Buy",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/affiliate",
                                className:
                                  "flex items-center py-2 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 text-orange-600 dark:text-orange-400 mr-2",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      d: "M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4m0 0L8 6m4-4v16",
                                    }),
                                  }),
                                  "Affiliate Program",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/win-100k",
                                className:
                                  "flex items-center py-2 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-yellow-600 dark:text-yellow-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7",
                                    }),
                                  }),
                                  "Win $200k",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/developer-docs",
                                className:
                                  "flex items-center py-2 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-blue-600 dark:text-blue-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                                    }),
                                  }),
                                  "Developer Docs",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/grant",
                                className:
                                  "flex items-center py-2 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-pink-600 dark:text-pink-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                    }),
                                  }),
                                  "Grants",
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsxs)("button", {
                          className:
                            "w-full flex justify-between items-center py-3 px-2 text-left font-semibold text-gray-900 dark:text-white focus:outline-none border-b border-gray-200 dark:border-gray-700",
                          onClick: () => S("community"),
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex items-center",
                              children: [
                                (0, r.jsx)("svg", {
                                  className: "w-4 h-4 mr-2",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: (0, r.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                                  }),
                                }),
                                (0, r.jsx)("span", { children: "Community" }),
                              ],
                            }),
                            (0, r.jsx)("svg", {
                              className:
                                "w-5 h-5 transform transition-transform ".concat(
                                  "community" === y ? "rotate-180" : ""
                                ),
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: (0, r.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M19 9l-7 7-7-7",
                              }),
                            }),
                          ],
                        }),
                        "community" === y &&
                          (0, r.jsxs)("div", {
                            className: "pl-4 py-2 space-y-2",
                            children: [
                              (0, r.jsxs)(a.default, {
                                href: "/forum",
                                className:
                                  "flex items-center py-2 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-blue-600 dark:text-blue-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
                                    }),
                                  }),
                                  "Forum",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "https://t.me/+lRBI5QAnotZiNDA1",
                                className:
                                  "flex items-center py-2 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-green-600 dark:text-green-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z",
                                    }),
                                  }),
                                  "Support",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/#faq",
                                className:
                                  "flex items-center py-2 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-yellow-600 dark:text-yellow-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                    }),
                                  }),
                                  "FAQs",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/grant",
                                className:
                                  "flex items-center py-2 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-ethai dark:text-ethai",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                    }),
                                  }),
                                  "Developer Grant Portal",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/dashboard/voting",
                                className:
                                  "flex items-center py-2 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                    }),
                                  }),
                                  "Governance Voting",
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsxs)("button", {
                          className:
                            "w-full flex justify-between items-center py-3 px-2 text-left font-semibold text-gray-900 dark:text-white focus:outline-none border-b border-gray-200 dark:border-gray-700",
                          onClick: () => S("social"),
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex items-center",
                              children: [
                                (0, r.jsx)("svg", {
                                  className: "w-4 h-4 mr-2",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: (0, r.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                  }),
                                }),
                                (0, r.jsx)("span", { children: "Social" }),
                              ],
                            }),
                            (0, r.jsx)("svg", {
                              className:
                                "w-5 h-5 transform transition-transform ".concat(
                                  "social" === y ? "rotate-180" : ""
                                ),
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: (0, r.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M19 9l-7 7-7-7",
                              }),
                            }),
                          ],
                        }),
                        "social" === y &&
                          (0, r.jsxs)("div", {
                            className: "pl-4 py-2 space-y-2",
                            children: [
                              (0, r.jsxs)(a.default, {
                                href: "https://x.com/EtherchainAi",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "flex items-center py-2 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-blue-600 dark:text-blue-400",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                                    }),
                                  }),
                                  "Twitter (X)",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "https://t.me/+lRBI5QAnotZiNDA1",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "flex items-center py-2 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 text-green-600 dark:text-green-400",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                                    }),
                                  }),
                                  "Telegram",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "https://discord.gg/yWTHYKeeYb",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "flex items-center py-2 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 512 512",
                                    fill: "currentColor",
                                    className:
                                      "w-4 h-4 mr-2 text-yellow-600 dark:text-yellow-400",
                                    children: (0, r.jsx)("path", {
                                      d: "M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm84.42 350.71s-7.98-9.51-14.61-17.89c28.96-8.2 39.94-26.18 39.94-26.18-9.12 5.98-17.8 10.2-25.63 13.11-11.14 4.72-21.84 7.88-32.36 9.7-21.46 3.99-41.07 2.93-58.04.17-12.74-2-23.8-4.99-33.02-8.09-5.16-1.94-10.77-4.27-16.51-7.02-.7-.36-1.4-.72-2.1-1.09-.45-.23-.9-.48-1.34-.72-6.03-3.33-9.4-5.67-9.4-5.67s10.66 17.76 38.83 26.03c-6.65 8.39-14.7 18.32-14.7 18.32-48.58-1.54-66.98-33.4-66.98-33.4 0-70.73 31.65-128.12 31.65-128.12 31.65-23.72 61.71-23.08 61.71-23.08l2.22 2.57c-39.59 11.36-57.94 28.52-57.94 28.52s4.86-2.69 13.03-6.52c23.67-10.4 42.39-13.18 50.1-13.84 1.26-.14 2.35-.25 3.25-.31 11.7-1.57 24.89-1.81 38.12-.35 17.9 2.03 37.39 7.1 57.27 17.45 0 0-17.14-16.31-54.29-27.72l3.06-3.45s30.06-.64 61.71 23.08c0 0 31.65 57.39 31.65 128.12 0 0-18.55 31.86-67.14 33.4zM210.12 227.24c-11.8 0-21.41 10.34-21.41 23.08s9.55 23.08 21.41 23.08c11.85 0 21.41-10.34 21.41-23.08.05-12.74-9.56-23.08-21.41-23.08zm91.76 0c-11.8 0-21.41 10.34-21.41 23.08s9.55 23.08 21.41 23.08c11.85 0 21.41-10.34 21.41-23.08s-9.56-23.08-21.41-23.08z",
                                    }),
                                  }),
                                  "Discord",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "https://linktr.ee/Etherchain.Ai",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "flex items-center py-2 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-ethai dark:text-ethai",
                                    fill: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                                    }),
                                  }),
                                  "Linktree",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/forum",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "flex items-center py-2 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-indigo-600 dark:text-indigo-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                                    }),
                                  }),
                                  "Community Hub",
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsxs)("button", {
                          className:
                            "w-full flex justify-between items-center py-3 px-2 text-left font-semibold text-gray-900 dark:text-white focus:outline-none border-b border-gray-200 dark:border-gray-700",
                          onClick: () => S("contact"),
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex items-center",
                              children: [
                                (0, r.jsx)("svg", {
                                  className: "w-4 h-4 mr-2",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: (0, r.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                  }),
                                }),
                                (0, r.jsx)("span", { children: "Contact" }),
                              ],
                            }),
                            (0, r.jsx)("svg", {
                              className:
                                "w-5 h-5 transform transition-transform ".concat(
                                  "contact" === y ? "rotate-180" : ""
                                ),
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: (0, r.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M19 9l-7 7-7-7",
                              }),
                            }),
                          ],
                        }),
                        "contact" === y &&
                          (0, r.jsxs)("div", {
                            className: "pl-4 py-2 space-y-2",
                            children: [
                              (0, r.jsxs)(a.default, {
                                href: "/contact",
                                className:
                                  "flex items-center py-2 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-blue-600 dark:text-blue-400",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                    }),
                                  }),
                                  "Contact Form",
                                ],
                              }),
                              (0, r.jsxs)(a.default, {
                                href: "/dashboard/voting",
                                className:
                                  "flex items-center py-2 text-gray-900 dark:text-gray-300 hover:text-ethai dark:hover:text-ethai",
                                onClick: V,
                                children: [
                                  (0, r.jsx)("svg", {
                                    className:
                                      "w-4 h-4 mr-2 text-ethai dark:text-ethai",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, r.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: "2",
                                      d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                                    }),
                                  }),
                                  "Team ",
                                  (0, r.jsx)("span", {
                                    className: "text-xs text-gray-500 ml-1",
                                    children: "(DAO only)",
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "py-4",
                      children: (0, r.jsx)("div", {
                        className: "space-y-3",
                        children: (0, r.jsx)("div", {
                          className: "",
                          children: (0, r.jsx)(n.default, {
                            className: "w-full",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "flex-1 flex",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "fixed inset-0 z-30 transition-opacity duration-300 md:hidden ".concat(
                      m ? "opacity-100" : "opacity-0 pointer-events-none"
                    ),
                  onClick: () => {
                    k(!1);
                  },
                  children: (0, r.jsx)("div", {
                    className: "absolute inset-0 bg-black/50",
                  }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "fixed left-0 h-[calc(100%-64px)] w-80 bg-white dark:bg-gray-950 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 border-r-2 border-gray-200 dark:border-gray-700 ".concat(
                      m ? "translate-x-0" : "-translate-x-full"
                    ),
                  children: (0, r.jsx)("div", {
                    className: "lcai-default-sidebar h-full",
                    children: (0, r.jsxs)("div", {
                      className: "inner h-full flex flex-col",
                      children: [
                        (0, r.jsx)("div", {
                          className: "content-item-content flex-1",
                          children: (0, r.jsx)("div", {
                            className: "lcai-default-sidebar-wrapper",
                            children: (0, r.jsx)("nav", {
                              className: "mainmenu-nav h-fit",
                              children: (0, r.jsxs)("ul", {
                                className:
                                  "dashboard-mainmenu lcai-default-sidebar-list space-y-2 p-6",
                                children: [
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsxs)(a.default, {
                                      href: "/dashboard",
                                      className:
                                        "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900/50 rounded-lg transition-all duration-200 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("svg", {
                                              className:
                                                "w-5 h-5 mr-3 text-ethai dark:text-ethai",
                                              fill: "none",
                                              stroke: "currentColor",
                                              viewBox: "0 0 24 24",
                                              children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  children: "Dashboard",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children:
                                                    "Overview & Analytics",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-ethai dark:group-hover:text-ethai transform group-hover:translate-x-1 transition-all duration-200",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsxs)(a.default, {
                                      href: "/how-to-buy/import-token",
                                      target: "_blank",
                                      className:
                                        "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900/50 rounded-lg transition-all duration-200 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("svg", {
                                              className:
                                                "w-5 h-5 mr-3 text-blue-600 dark:text-blue-400",
                                              fill: "none",
                                              stroke: "currentColor",
                                              viewBox: "0 0 24 24",
                                              children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10",
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  children: "Import Token",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children:
                                                    "Add ETHAI to Wallet",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all duration-200",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsxs)(a.default, {
                                      href: "/#presale-form",
                                      className:
                                        "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900/50 rounded-lg transition-all duration-200 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("svg", {
                                              className:
                                                "w-5 h-5 mr-3 text-green-600 dark:text-green-400",
                                              fill: "none",
                                              stroke: "currentColor",
                                              viewBox: "0 0 24 24",
                                              children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  children: "BUY $ETHAI",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children: "Presale Purchase",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-green-600 dark:group-hover:text-green-400 transform group-hover:translate-x-1 transition-all duration-200",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsxs)(a.default, {
                                      href: "/dashboard/voting",
                                      className:
                                        "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900/50 rounded-lg transition-all duration-200 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("svg", {
                                              className:
                                                "w-5 h-5 mr-3 text-yellow-600 dark:text-yellow-400",
                                              fill: "none",
                                              stroke: "currentColor",
                                              viewBox: "0 0 24 24",
                                              children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  children: "DAO",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children: "Governance Voting",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transform group-hover:translate-x-1 transition-all duration-200",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsxs)(a.default, {
                                      href: "/dashboard/staking",
                                      className:
                                        "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900/50 rounded-lg transition-all duration-200 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("svg", {
                                              className:
                                                "w-5 h-5 mr-3 text-pink-600 dark:text-pink-400",
                                              fill: "none",
                                              stroke: "currentColor",
                                              viewBox: "0 0 24 24",
                                              children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  children: "Staking",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children: "Earn Rewards",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-pink-600 dark:group-hover:text-pink-400 transform group-hover:translate-x-1 transition-all duration-200",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsxs)(a.default, {
                                      href: "/explorer/txs",
                                      target: "_blank",
                                      className:
                                        "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900/50 rounded-lg transition-all duration-200 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("svg", {
                                              className:
                                                "w-5 h-5 mr-3 text-cyan-600 dark:text-cyan-400",
                                              fill: "none",
                                              stroke: "currentColor",
                                              viewBox: "0 0 24 24",
                                              children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  children: "Explorer",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children: "Blockchain Data",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transform group-hover:translate-x-1 transition-all duration-200",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    children: (0, r.jsxs)(a.default, {
                                      href: "/faucet",
                                      target: "_blank",
                                      className:
                                        "flex items-center justify-between px-4 py-1 text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900/50 rounded-lg transition-all duration-200 group",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, r.jsx)("svg", {
                                              className:
                                                "w-5 h-5 mr-3 text-orange-600 dark:text-orange-400",
                                              fill: "none",
                                              stroke: "currentColor",
                                              viewBox: "0 0 24 24",
                                              children: (0, r.jsx)("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                                              }),
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "flex flex-col",
                                              children: [
                                                (0, r.jsx)("span", {
                                                  children: "Faucet",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className:
                                                    "text-xs text-gray-500 dark:text-gray-400",
                                                  children: "Get Real Tokens",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("svg", {
                                          className:
                                            "w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-orange-600 dark:group-hover:text-orange-400 transform group-hover:translate-x-1 transition-all duration-200",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24",
                                          children: (0, r.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M9 5l7 7-7 7",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "border-t border-gray-200 dark:border-gray-700 p-6 md:mb-6",
                          children: (0, r.jsxs)("div", {
                            className: "inner",
                            children: [
                              (0, r.jsx)("div", {
                                className: "mb-3 mt-3",
                                children: (0, r.jsxs)("div", {
                                  className: "flex items-center space-x-3",
                                  children: [
                                    (0, r.jsx)("div", {
                                      className: "avatar-image active",
                                      children: (0, r.jsx)(s.default, {
                                        src: "/images/avatar.avif",
                                        alt: "Avatar",
                                        width: 70,
                                        height: 70,
                                        className: "rounded-full",
                                      }),
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "avater-info",
                                      children: [
                                        (0, r.jsx)("div", {
                                          className:
                                            "avatar-name text-semi-white font-medium lg:text-lg text-gray-900 dark:text-white",
                                          children: B
                                            ? A.slice(0, 4) +
                                              "..." +
                                              A.slice(-4)
                                            : "User",
                                        }),
                                        (0, r.jsxs)("div", {
                                          className:
                                            "avatar-balance text-sm text-gray-600 dark:text-gray-400 ",
                                          children: [
                                            parseFloat(
                                              new u.default(w).div(1e18)
                                            ).toLocaleString("fr-FR", {
                                              minimumFractionDigits: 2,
                                              maximumFractionDigits: 3,
                                            }),
                                            " ETHAI",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, r.jsxs)("div", {
                                className: "flex flex-col gap-2",
                                children: [
                                  (0, r.jsx)(n.default, {
                                    className: "px-3",
                                    onClick: () => {
                                      H(), z();
                                    },
                                  }),
                                  B
                                    ? (0, r.jsx)(d.default, {
                                        variant: 2,
                                        className:
                                          "inline-flex items-center justify-center w-full",
                                        onClick: () => W(),
                                        children: "Disconnect",
                                      })
                                    : "",
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "bg-gradient-to-b from-gray-50 to-gray-100  dark:from-gray-950 dark:to-gray-900 transition-all duration-300 flex-1 ".concat(
                      m ? "sm:ml-80" : "sm:ml-0"
                    ),
                  children: (0, r.jsx)("div", {
                    className: "min-h-[calc(100vh)]",
                    children: g,
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

//# sourceMappingURL=90a3d1a9ebe0a4a2.js.map
