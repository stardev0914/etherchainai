(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    128375: (e) => {
      "use strict";
      e.s({ default: () => f }, 128375);
      var t = e.i(731636),
        r = e.i(838653),
        a = e.i(12448);
      function s(e) {
        let { title: r, value: s, icon: l } = e;
        return (0, t.jsxs)("div", {
          className:
            "bg-white dark:bg-[#0B101C] rounded-xl p-6 shadow-sm border-2 border-gray-200 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:border-[#d02fc2] dark:hover:border-[#d02fc2]",
          children: [
            (0, t.jsx)("div", {
              className: "flex items-center justify-between mb-4",
              children: (0, t.jsx)("div", {
                className:
                  "w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center",
                children: (0, t.jsx)(a.FontAwesomeIcon, {
                  icon: l,
                  className: "w-6 h-6 text-white",
                }),
              }),
            }),
            (0, t.jsx)("div", {
              className: "flex items-center justify-between",
              children: (0, t.jsxs)("div", {
                children: [
                  (0, t.jsxs)("p", {
                    className:
                      "text-2xl font-bold text-gray-900 dark:text-white",
                    children: [s, " ETHAI"],
                  }),
                  (0, t.jsx)("p", {
                    className: "text-sm text-gray-600 dark:text-gray-400 mb-1",
                    children: r,
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var l = e.i(55157);
      function i() {
        return (0, t.jsx)("div", {
          className:
            "bg-white dark:bg-[#0B101C] rounded-xl p-6 shadow-sm border-2 border-gray-200 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:border-[#d02fc2] dark:hover:border-[#d02fc2]",
          children: (0, t.jsxs)("div", {
            className: "flex flex-row gap-4 items-center",
            children: [
              (0, t.jsx)("div", {
                children: (0, t.jsx)(a.FontAwesomeIcon, {
                  icon: l.faMedal,
                  className: "w-12 h-12 text-gray-900 dark:text-white",
                }),
              }),
              (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("h2", {
                    className:
                      "text-2xl font-semibold text-gray-900 dark:text-white mb-4",
                    children: "Chain Scout",
                  }),
                  (0, t.jsx)("span", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: "My rank",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      let n = (e) => {
        let {
            percentage: r,
            size: a = 128,
            strokeWidth: s = 8,
            className: l = "",
          } = e,
          i = (a - s) / 2,
          n = 2 * Math.PI * i;
        return (0, t.jsxs)("div", {
          className: "relative inline-flex ".concat(l),
          style: { width: a, height: a },
          children: [
            (0, t.jsxs)("svg", {
              className: "transform -rotate-90 w-full h-full",
              children: [
                (0, t.jsx)("circle", {
                  className: "text-gray-300 dark:text-gray-600",
                  strokeWidth: s,
                  stroke: "currentColor",
                  fill: "transparent",
                  r: i,
                  cx: a / 2,
                  cy: a / 2,
                }),
                (0, t.jsx)("circle", {
                  className: "text-ethai dark:text-purple-700",
                  strokeWidth: s,
                  strokeLinecap: "round",
                  stroke: "currentColor",
                  fill: "transparent",
                  r: i,
                  cx: a / 2,
                  cy: a / 2,
                  strokeDasharray: n,
                  strokeDashoffset: n * (1 - r / 100),
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className:
                "absolute inset-0 flex items-center justify-center text-xl font-semibold text-gray-900 dark:text-white",
              children: [r, "%"],
            }),
          ],
        });
      };
      function d() {
        let [e, s] = (0, r.useState)(0),
          [i, d] = (0, r.useState)(0);
        return (0, t.jsxs)("div", {
          className:
            "bg-white dark:bg-[#0B101C] rounded-xl p-6 shadow-sm  border-gray-200 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:border-[#d02fc2] border-2 dark:hover:border-[#d02fc2]",
          children: [
            (0, t.jsx)("div", {
              className: "mb-5",
              children: (0, t.jsx)(a.FontAwesomeIcon, {
                icon: l.faMedal,
                className: "w-12 h-12 text-gray-900 dark:text-white",
              }),
            }),
            (0, t.jsx)("div", {
              className: "flex flex-row gap-4 items-center",
              children: (0, t.jsxs)("div", {
                children: [
                  (0, t.jsx)("h2", {
                    className:
                      "text-3xl font-semibold text-gray-900 dark:text-white mb-4",
                    children: "My Rewards",
                  }),
                  (0, t.jsxs)("span", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: [e, " Points"],
                  }),
                ],
              }),
            }),
            (0, t.jsx)("div", {
              className: "flex flex-row gap-4 items-center mb-5",
              children: (0, t.jsxs)("div", {
                children: [
                  (0, t.jsxs)("h2", {
                    className:
                      "text-3xl font-semibold text-gray-900 dark:text-white mb-4",
                    children: ["Reward ", e, " points"],
                  }),
                  (0, t.jsxs)("span", {
                    className: "text-sm text-gray-600 dark:text-gray-400",
                    children: ["Next Rank Reward: ~", i, " points"],
                  }),
                ],
              }),
            }),
            (0, t.jsx)("div", {
              className: "mb-5 flex justify-center",
              children: (0, t.jsx)(n, { percentage: 0 }),
            }),
          ],
        });
      }
      e.i(435187);
      var c = e.i(266119),
        o = e.i(171096),
        x = e.i(693667),
        h = e.i(815751),
        m = e.i(918142),
        g = e.i(978895),
        u = e.i(744232),
        p = e.i(288041);
      function j() {
        let [e, a] = (0, r.useState)([]),
          [s, l] = (0, r.useState)(!1),
          [i, n] = (0, r.useState)(null),
          { isConnected: d, address: m } = (0, c.useAppKitAccount)(),
          { walletProvider: j } = (0, o.useAppKitProvider)("eip155"),
          { chainId: y } = (0, c.useAppKitNetworkCore)();
        return (
          (0, r.useEffect)(() => {
            (async () => {
              if (!d) {
                a([]), n(null);
                return;
              }
              l(!0), n(null);
              try {
                let e = new h.BrowserProvider(j),
                  t = new x.Contract(u.presaleAddr[1], u.presaleAbi, e),
                  r = (await e.getBlockNumber()) - 1e4,
                  s = await t.queryFilter(t.filters.BuyTokenETH(), r, "latest"),
                  l = await t.queryFilter(
                    t.filters.BuyTokenUSDT(),
                    r,
                    "latest"
                  ),
                  i = [...s, ...l],
                  n = [];
                for (let t of i)
                  if (t.args[0] === (0, g.getAddress)(m)) {
                    let r = await e.getBlock(t.blockNumber);
                    n.push({
                      amount: t.args[2],
                      txHash: t.transactionHash,
                      time: r.timestamp,
                    });
                  }
                a(n);
              } catch (e) {
                console.error(e),
                  n("Failed to load transaction history"),
                  a([]);
              } finally {
                l(!1);
              }
            })();
          }, [d, m, y, j]),
          (0, t.jsxs)("div", {
            className:
              "bg-white dark:bg-[#0B101C] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700",
            children: [
              (0, t.jsxs)("h2", {
                className:
                  "text-xl font-semibold text-gray-900 dark:text-white mb-4 flex gap-2 items-center",
                children: [
                  (0, t.jsx)("img", {
                    src: "/reciept.svg",
                    className: "pb-1 table-heading-icon",
                    alt: "Timestamp",
                  }),
                  "Recent Transactions",
                ],
              }),
              !s &&
                !i &&
                e.length > 0 &&
                (0, t.jsxs)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "text-center",
                      children: [
                        (0, t.jsx)("div", {
                          className: "text-sm text-gray-600 dark:text-gray-400",
                          children: "Total Transactions",
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "text-2xl font-bold text-blue-600 dark:text-blue-400",
                          children: e.length,
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "text-center",
                      children: [
                        (0, t.jsx)("div", {
                          className: "text-sm text-gray-600 dark:text-gray-400",
                          children: "Total Purchased",
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "text-2xl font-bold text-green-600 dark:text-green-400",
                          children: [
                            e
                              .reduce(
                                (e, t) =>
                                  e +
                                  parseFloat(
                                    new p.default(t.amount).div(1e18).toString()
                                  ),
                                0
                              )
                              .toLocaleString("fr-FR"),
                            " ETHAI",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              (0, t.jsx)("div", {
                className:
                  "space-y-4 border-t border-gray-300 dark:border-gray-700 pt-4",
                children: (0, t.jsx)("div", {
                  className: "text-center overflow-x-scroll",
                  children: (0, t.jsxs)("table", {
                    className: "w-full min-w-[450px] text-left",
                    children: [
                      (0, t.jsx)("thead", {
                        children: (0, t.jsxs)("tr", {
                          children: [
                            (0, t.jsx)("th", {
                              className:
                                "text-[#0B101C] dark:text-gray-300 py-2 px-4",
                              children: "$ Amount",
                            }),
                            (0, t.jsx)("th", {
                              className:
                                "text-[#0B101C] dark:text-gray-300 py-2 px-4",
                              children: "# Transaction Hash",
                            }),
                            (0, t.jsxs)("th", {
                              className:
                                "flex gap-2 items-top text-[#0B101C] dark:text-gray-300 py-2 px-4",
                              children: [
                                (0, t.jsx)("img", {
                                  src: "/timer.svg",
                                  className: "pb-1 table-heading-icon",
                                  alt: "Timestamp",
                                }),
                                "Timestamp",
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsxs)("tbody", {
                        children: [
                          s &&
                            (0, t.jsx)("tr", {
                              children: (0, t.jsxs)("td", {
                                colSpan: "3",
                                className: "py-8 text-center",
                                children: [
                                  (0, t.jsx)("svg", {
                                    className:
                                      "w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4 animate-spin",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, t.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M13 10V3L4 14h7v7l9-11h-7V3l-9 10z",
                                    }),
                                  }),
                                  (0, t.jsx)("p", {
                                    className:
                                      "text-gray-600 dark:text-gray-400",
                                    children: "Loading transaction history...",
                                  }),
                                ],
                              }),
                            }),
                          i &&
                            (0, t.jsx)("tr", {
                              children: (0, t.jsxs)("td", {
                                colSpan: "3",
                                className: "py-8 text-center",
                                children: [
                                  (0, t.jsx)("svg", {
                                    className:
                                      "w-12 h-12 text-red-400 dark:text-red-500 mx-auto mb-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, t.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                                    }),
                                  }),
                                  (0, t.jsx)("p", {
                                    className: "text-red-600 dark:text-red-400",
                                    children: i,
                                  }),
                                ],
                              }),
                            }),
                          !s &&
                            !i &&
                            0 === e.length &&
                            (0, t.jsx)("tr", {
                              children: (0, t.jsxs)("td", {
                                colSpan: "3",
                                className: "py-8 text-center",
                                children: [
                                  (0, t.jsx)("svg", {
                                    className:
                                      "w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, t.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                                    }),
                                  }),
                                  (0, t.jsx)("p", {
                                    className:
                                      "text-gray-600 dark:text-gray-400",
                                    children: "No transactions yet",
                                  }),
                                  (0, t.jsx)("p", {
                                    className:
                                      "text-sm text-gray-500 dark:text-gray-500",
                                    children:
                                      "Connect your wallet to see transaction history",
                                  }),
                                ],
                              }),
                            }),
                          !s &&
                            !i &&
                            e.length > 0 &&
                            e.map((e, r) => {
                              let a;
                              return (0, t.jsxs)(
                                "tr",
                                {
                                  className:
                                    "hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
                                  children: [
                                    (0, t.jsxs)("td", {
                                      className:
                                        "py-2 px-4 text-green-600 dark:text-green-400 font-medium",
                                      children: [
                                        new p.default(e.amount)
                                          .div(1e18)
                                          .toNumber()
                                          .toLocaleString("fr-FR"),
                                        " ETHAI",
                                      ],
                                    }),
                                    (0, t.jsx)("td", {
                                      className: "py-2 px-4",
                                      children: (0, t.jsx)("button", {
                                        onClick: () => {
                                          var t;
                                          return (
                                            (t = e.txHash),
                                            void window.open(
                                              "https://etherscan.io/tx/".concat(
                                                t
                                              ),
                                              "_blank"
                                            )
                                          );
                                        },
                                        className:
                                          "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline",
                                        title: "View on Etherscan",
                                        children:
                                          ((a = e.txHash),
                                          ""
                                            .concat(a.slice(0, 6), "...")
                                            .concat(a.slice(-4))),
                                      }),
                                    }),
                                    (0, t.jsx)("td", {
                                      className:
                                        "py-2 px-4 text-gray-600 dark:text-gray-400",
                                      children: ((e) => {
                                        let t = new Date(1e3 * e);
                                        return (
                                          t.toLocaleDateString() +
                                          " " +
                                          t.toLocaleTimeString()
                                        );
                                      })(e.time),
                                    }),
                                  ],
                                },
                                r
                              );
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
      function y() {
        let [e, s] = (0, r.useState)([]),
          [i, n] = (0, r.useState)(0),
          [d, g] = (0, r.useState)(!1),
          [j, y] = (0, r.useState)(null),
          { isConnected: f, address: k } = (0, c.useAppKitAccount)(),
          { walletProvider: b } = (0, o.useAppKitProvider)("eip155"),
          { chainId: N } = (0, c.useAppKitNetworkCore)();
        return (
          (0, r.useEffect)(() => {
            (async () => {
              if (!f) {
                s([]), y(null);
                return;
              }
              g(!0), y(null);
              try {
                let e = new h.BrowserProvider(b),
                  t = new x.Contract(u.presaleAddr[1], u.presaleAbi, e),
                  r = await t.addressToRefCode(k),
                  a = await t.refEarnings(k),
                  l = (await e.getBlockNumber()) - 1e4,
                  i = await t.queryFilter(t.filters.BuyTokenETH(), l, "latest"),
                  d = await t.queryFilter(
                    t.filters.BuyTokenUSDT(),
                    l,
                    "latest"
                  ),
                  c = [...i, ...d],
                  o = [];
                for (let t of c)
                  if (t.args[3] === r) {
                    let r = await e.getBlock(t.blockNumber);
                    o.push({
                      wallet: t.args[0],
                      amount: t.args[2],
                      time: r.timestamp,
                      status: "completed",
                    });
                  }
                s(o), n(a);
              } catch (e) {
                y("Failed to load referral history"), s([]);
              } finally {
                g(!1);
              }
            })();
          }, [f, k, N, b]),
          (0, t.jsxs)("div", {
            className:
              "bg-white dark:bg-[#0B101C] rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700",
            children: [
              (0, t.jsxs)("h2", {
                className:
                  "text-xl font-semibold text-gray-900 dark:text-white mb-4 flex gap-2 items-center",
                children: [
                  (0, t.jsx)("img", {
                    src: "/table2-title-icon.svg",
                    className: "pb-1 table-heading-icon",
                    alt: "Timestamp",
                  }),
                  "Referral History",
                ],
              }),
              !d &&
                !j &&
                e.length > 0 &&
                (0, t.jsxs)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "text-center",
                      children: [
                        (0, t.jsx)("div", {
                          className: "text-sm text-gray-600 dark:text-gray-100",
                          children: "Total Referrals",
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "text-2xl font-bold text-blue-600 dark:text-blue-400",
                          children: e.length,
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "text-center",
                      children: [
                        (0, t.jsx)("div", {
                          className: "text-sm text-gray-600 dark:text-gray-100",
                          children: "Total Volume",
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "text-2xl font-bold text-green-600 dark:text-green-400",
                          children: [
                            "$",
                            parseFloat(
                              new p.default(i).div(1e18).toString()
                            ).toLocaleString("fr-FR"),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "text-center",
                      children: [
                        (0, t.jsx)("div", {
                          className: "text-sm text-gray-600 dark:text-gray-100",
                          children: "Avg. Amount",
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "text-2xl font-bold text-ethai dark:text-ethai",
                          children:
                            e.length > 0
                              ? (
                                  e.reduce(
                                    (e, t) =>
                                      e +
                                      parseFloat(
                                        new p.default(t.amount)
                                          .div(1e18)
                                          .toString()
                                      ),
                                    0
                                  ) / e.length
                                ).toLocaleString("fr-FR") + " ETHAI"
                              : "0",
                        }),
                      ],
                    }),
                  ],
                }),
              (0, t.jsx)("div", {
                className:
                  "space-y-4 border-t border-gray-300 dark:border-gray-700 pt-4",
                children: (0, t.jsx)("div", {
                  className: "text-center overflow-x-scroll",
                  children: (0, t.jsxs)("table", {
                    className: "w-full min-w-[450px] text-left",
                    children: [
                      (0, t.jsx)("thead", {
                        children: (0, t.jsxs)("tr", {
                          children: [
                            (0, t.jsxs)("th", {
                              className: "text-[#0B101C] dark:text-gray-300",
                              children: [
                                (0, t.jsx)(a.FontAwesomeIcon, {
                                  icon: l.faWallet,
                                }),
                                " Wallet",
                              ],
                            }),
                            (0, t.jsxs)("th", {
                              className: "text-[#0B101C] dark:text-gray-300",
                              children: [
                                (0, t.jsx)(a.FontAwesomeIcon, {
                                  icon: l.faDollarSign,
                                }),
                                " Bought Amount",
                              ],
                            }),
                            (0, t.jsxs)("th", {
                              className: "text-[#0B101C] dark:text-gray-300",
                              children: [
                                (0, t.jsx)(a.FontAwesomeIcon, {
                                  icon: l.faCalendar,
                                }),
                                " Time and Date",
                              ],
                            }),
                            (0, t.jsxs)("th", {
                              className: "text-[#0B101C] dark:text-gray-300",
                              children: [
                                (0, t.jsx)(a.FontAwesomeIcon, {
                                  icon: l.faSignal,
                                }),
                                " Status",
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsxs)("tbody", {
                        children: [
                          d &&
                            (0, t.jsx)("tr", {
                              children: (0, t.jsxs)("td", {
                                colSpan: "4",
                                className: "py-8 text-center",
                                children: [
                                  (0, t.jsx)("svg", {
                                    className:
                                      "w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, t.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M13 10V3L4 14h7v7l9-11h-7V3l-9 10z",
                                    }),
                                  }),
                                  (0, t.jsx)("p", {
                                    className:
                                      "text-gray-600 dark:text-gray-400",
                                    children: "Loading referral history...",
                                  }),
                                ],
                              }),
                            }),
                          j &&
                            (0, t.jsx)("tr", {
                              children: (0, t.jsxs)("td", {
                                colSpan: "4",
                                className: "py-8 text-center",
                                children: [
                                  (0, t.jsx)("svg", {
                                    className:
                                      "w-12 h-12 text-red-400 dark:text-red-500 mx-auto mb-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, t.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                                    }),
                                  }),
                                  (0, t.jsx)("p", {
                                    className: "text-red-600 dark:text-red-400",
                                    children: j,
                                  }),
                                ],
                              }),
                            }),
                          !d &&
                            !j &&
                            0 === e.length &&
                            (0, t.jsx)("tr", {
                              children: (0, t.jsxs)("td", {
                                colSpan: "4",
                                className: "py-8 text-center",
                                children: [
                                  (0, t.jsx)("svg", {
                                    className:
                                      "w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, t.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                                    }),
                                  }),
                                  (0, t.jsx)("p", {
                                    className:
                                      "text-gray-600 dark:text-gray-400",
                                    children: "No transactions yet",
                                  }),
                                  (0, t.jsx)("p", {
                                    className:
                                      "text-sm text-gray-500 dark:text-gray-500",
                                    children:
                                      "Connect your wallet to see transaction history",
                                  }),
                                ],
                              }),
                            }),
                          !d &&
                            !j &&
                            e.length > 0 &&
                            e.map((e, r) => {
                              var a;
                              let s;
                              return (0, t.jsxs)(
                                "tr",
                                {
                                  className:
                                    "hover:bg-gray-100 dark:hover:bg-gray-800",
                                  children: [
                                    (0, t.jsx)("td", {
                                      className: "py-2 px-4",
                                      children:
                                        ((s = e.wallet),
                                        ""
                                          .concat(s.slice(0, 6), "...")
                                          .concat(s.slice(-4))),
                                    }),
                                    (0, t.jsx)("td", {
                                      className: "py-2 px-4",
                                      children:
                                        ((a = e.amount),
                                        parseFloat(
                                          m.ethers.formatEther(a)
                                        ).toFixed(4)),
                                    }),
                                    (0, t.jsx)("td", {
                                      className: "py-2 px-4",
                                      children: ((e) => {
                                        let t = new Date(1e3 * e);
                                        return (
                                          t.toLocaleDateString() +
                                          " " +
                                          t.toLocaleTimeString()
                                        );
                                      })(e.time),
                                    }),
                                    (0, t.jsx)("td", {
                                      className:
                                        "py-2 px-4 text-green-600 dark:text-green-400",
                                      children: "Completed",
                                    }),
                                  ],
                                },
                                r
                              );
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
      function f() {
        let [e, a] = (0, r.useState)(0),
          [n, m] = (0, r.useState)(0),
          { isConnected: g, address: f } = (0, c.useAppKitAccount)(),
          { walletProvider: k } = (0, o.useAppKitProvider)("eip155"),
          { chainId: b } = (0, c.useAppKitNetworkCore)();
        return (
          (0, r.useEffect)(() => {
            (async () => {
              if (f) {
                let e = new h.BrowserProvider(k),
                  t = new x.Contract(u.tokenAddress[1], u.tokenAbi, e),
                  r = new x.Contract(u.presaleAddr[1], u.presaleAbi, e),
                  s = await t.balanceOf(f),
                  l = await r.refBonus(f);
                a(s), m(l);
              }
            })();
          }, [g, f, b, k]),
          (0, t.jsx)("div", {
            className: "min-h-screen bg-white dark:bg-gray-950 pt-8",
            children: (0, t.jsxs)("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: [
                (0, t.jsxs)("div", {
                  className:
                    "dashboard_header mb-8 text-center p-20 rounded-lg",
                  children: [
                    (0, t.jsx)("h1", {
                      className:
                        "text-3xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 from-[30%] via-pink-600 via-[60%] to-pink-600 to-[70%] text-transparent bg-clip-text mb-2",
                      children: "Dashboard",
                    }),
                    (0, t.jsx)("p", {
                      className: "text-gray-600 dark:text-gray-300",
                      children:
                        "Monitor your ETHAI tokens and participate in the ecosystem",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "lg:col-span-2 space-y-6",
                      children: [
                        (0, t.jsxs)("div", {
                          className:
                            "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
                          children: [
                            (0, t.jsx)(s, {
                              title: "ETHAI Balance",
                              value: parseFloat(
                                new p.default(e).div(1e18).toString()
                              ).toLocaleString("fr-FR"),
                              icon: l.faWallet,
                            }),
                            (0, t.jsx)(s, {
                              title: "Refferal rewards",
                              value: parseFloat(
                                new p.default(n).div(1e18).toString()
                              ).toLocaleString("fr-FR"),
                              icon: l.faGift,
                            }),
                          ],
                        }),
                        (0, t.jsx)(i, {}),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: "space-y-6",
                      children: (0, t.jsx)(d, {}),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "grid grid-cols-1 gap-8 mt-8",
                  children: [(0, t.jsx)(j, {}), (0, t.jsx)(y, {})],
                }),
              ],
            }),
          })
        );
      }
    },
  },
]);

//# sourceMappingURL=b3350261690f5e60.js.map
