(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    723455: (e) => {
      "use strict";
      e.s({ default: () => x });
      var a = e.i(731636),
        t = e.i(95437),
        r = e.i(838653),
        s = e.i(12448),
        l = e.i(55157),
        d = e.i(288041),
        n = e.i(763674),
        i = e.i(180009),
        o = e.i(747047),
        c = e.i(555366);
      function x() {
        let [e, n] = (0, r.useState)([]),
          [x, g] = (0, r.useState)({ labels: [], datasets: [] }),
          b = (0, c.useRouter)(),
          {
            data: m,
            loading: h,
            error: u,
          } = (0, t.useGasData)({
            rpcUrl: "https://eth.llamarpc.com",
            blockCount: 30,
            percentiles: [10, 50, 90],
          });
        (0, r.useEffect)(() => {
          if (h || !m || !m.baseFeePerGas || 0 === m.baseFeePerGas.length)
            return;
          let e = m.baseFeePerGas[m.baseFeePerGas.length - 1];
          parseFloat(new d.default(e).div(1e9).toString()),
            n(
              m.baseFeePerGas
                .slice(-10)
                .map((e, a) => {
                  let t = m.reward[m.reward.length - 10 + a],
                    r = parseFloat(new d.default(e).div(1e9).toString()),
                    s = r + parseFloat(new d.default(t[0]).div(1e9).toString()),
                    l = r + parseFloat(new d.default(t[1]).div(1e9).toString()),
                    n = r + parseFloat(new d.default(t[2]).div(1e9).toString()),
                    i = Math.round(
                      ((m.baseFeePerGas.length - 10 + a) * 12) / 60
                    );
                  return {
                    time: "".concat(i, " min ago"),
                    slow: Math.round(s),
                    standard: Math.round(l),
                    fast: Math.round(n),
                    baseFee: Math.round(r),
                  };
                })
                .reverse()
            );
          let a = m.baseFeePerGas
              .map((e, a) => {
                let t = Math.round(
                  ((m.baseFeePerGas.length - a - 1) * 12) / 60
                );
                return "".concat(t, "m ago");
              })
              .reverse(),
            t = m.baseFeePerGas
              .map((e) => parseFloat(new d.default(e).div(1e9).toString()))
              .reverse(),
            r = m.baseFeePerGas
              .map((e, a) => {
                if (a > 29) return 0;
                let t = m.reward[a];
                return (
                  parseFloat(new d.default(e).div(1e9).toString()) +
                  parseFloat(new d.default(t[0]).div(1e9).toString())
                );
              })
              .reverse();
          g({
            labels: a,
            datasets: [
              {
                label: "Base Fee",
                data: t,
                borderColor: "rgb(59, 130, 246)",
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                borderWidth: 2,
                fill: !1,
                tension: 0.4,
                pointRadius: 3,
                pointHoverRadius: 5,
              },
              {
                label: "Slow",
                data: r,
                borderColor: "rgb(34, 197, 94)",
                backgroundColor: "rgba(34, 197, 94, 0.1)",
                borderWidth: 2,
                fill: !1,
                tension: 0.4,
                pointRadius: 3,
                pointHoverRadius: 5,
              },
              {
                label: "Standard",
                data: m.baseFeePerGas
                  .map((e, a) => {
                    if (a > 29) return 0;
                    let t = m.reward[a];
                    return (
                      parseFloat(new d.default(e).div(1e9).toString()) +
                      parseFloat(new d.default(t[1]).div(1e9).toString())
                    );
                  })
                  .reverse(),
                borderColor: "rgb(234, 179, 8)",
                backgroundColor: "rgba(234, 179, 8, 0.1)",
                borderWidth: 2,
                fill: !1,
                tension: 0.4,
                pointRadius: 3,
                pointHoverRadius: 5,
              },
              {
                label: "Fast",
                data: m.baseFeePerGas
                  .map((e, a) => {
                    if (a > 29) return 0;
                    let t = m.reward[a];
                    return (
                      parseFloat(new d.default(e).div(1e9).toString()) +
                      parseFloat(new d.default(t[2]).div(1e9).toString())
                    );
                  })
                  .reverse(),
                borderColor: "rgb(249, 115, 22)",
                backgroundColor: "rgba(249, 115, 22, 0.1)",
                borderWidth: 2,
                fill: !1,
                tension: 0.4,
                pointRadius: 3,
                pointHoverRadius: 5,
              },
            ],
          });
        }, [m, h]);
        let p = document.documentElement.classList.contains("dark"),
          f = (e) => "$".concat(e.toFixed(2));
        return (0, a.jsx)("section", {
          className: "py-20 bg-white dark:bg-gray-950",
          children: (0, a.jsxs)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              (0, a.jsxs)("div", {
                className: "text-center mb-12",
                children: [
                  (0, a.jsxs)("h2", {
                    className:
                      "text-4xl font-bold text-gray-900 dark:text-white mb-4",
                    children: [
                      "Etherchain ",
                      (0, a.jsx)("span", {
                        className:
                          "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
                        children: "Gas",
                      }),
                      " Analytics",
                    ],
                  }),
                  (0, a.jsx)("p", {
                    className:
                      "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                    children:
                      "Monitor Ethereum gas prices in real-time and optimize your transactions with our advanced analytics dashboard.",
                  }),
                ],
              }),
              h
                ? (0, a.jsxs)("div", {
                    className: "flex justify-center items-center py-12 mb-8",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400",
                      }),
                      (0, a.jsx)("span", {
                        className: "ml-3 text-gray-600 dark:text-gray-400",
                        children: "Loading gas data...",
                      }),
                    ],
                  })
                : u
                ? (0, a.jsx)("div", {
                    className: "flex justify-center items-center py-12 mb-8",
                    children: (0, a.jsxs)("div", {
                      className: "text-center",
                      children: [
                        (0, a.jsx)(s.FontAwesomeIcon, {
                          icon: l.faSpinner,
                          className:
                            "h-8 w-8 text-red-600 dark:text-red-400 mb-4",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-red-600 dark:text-red-400",
                          children:
                            "Error loading gas data. Please try again later.",
                        }),
                      ],
                    }),
                  })
                : (0, a.jsxs)("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 shadow-sm",
                        children: (0, a.jsxs)("div", {
                          className: "flex items-center justify-between",
                          children: [
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("h3", {
                                  className:
                                    "text-lg font-semibold text-gray-900 dark:text-white",
                                  children: "Slow",
                                }),
                                (0, a.jsxs)("p", {
                                  className:
                                    "text-2xl font-bold text-green-600 dark:text-green-400",
                                  children: [
                                    e.length > 0 ? e[e.length - 1].slow : 0,
                                    " Gwei",
                                  ],
                                }),
                                (0, a.jsxs)("p", {
                                  className:
                                    "text-sm text-gray-600 dark:text-gray-400",
                                  children: [
                                    "~",
                                    f(
                                      (e.length > 0
                                        ? e[e.length - 1].slow
                                        : 0) * 0.063
                                    ),
                                  ],
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400",
                                  children: "~5 min",
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "bg-green-100 dark:bg-green-900/20 p-3 rounded-lg",
                              children: (0, a.jsx)(s.FontAwesomeIcon, {
                                icon: l.faGaugeHigh,
                                className:
                                  "h-6 w-6 text-green-600 dark:text-green-400",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 shadow-sm",
                        children: (0, a.jsxs)("div", {
                          className: "flex items-center justify-between",
                          children: [
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("h3", {
                                  className:
                                    "text-lg font-semibold text-gray-900 dark:text-white",
                                  children: "Standard",
                                }),
                                (0, a.jsxs)("p", {
                                  className:
                                    "text-2xl font-bold text-yellow-600 dark:text-yellow-400",
                                  children: [
                                    e.length > 0 ? e[e.length - 1].standard : 0,
                                    " Gwei",
                                  ],
                                }),
                                (0, a.jsxs)("p", {
                                  className:
                                    "text-sm text-gray-600 dark:text-gray-400",
                                  children: [
                                    "~",
                                    f(
                                      (e.length > 0
                                        ? e[e.length - 1].standard
                                        : 0) * 0.063
                                    ),
                                  ],
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400",
                                  children: "~2 min",
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded-lg",
                              children: (0, a.jsx)(s.FontAwesomeIcon, {
                                icon: l.faGaugeHigh,
                                className:
                                  "h-6 w-6 text-yellow-600 dark:text-yellow-400",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 shadow-sm",
                        children: (0, a.jsxs)("div", {
                          className: "flex items-center justify-between",
                          children: [
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("h3", {
                                  className:
                                    "text-lg font-semibold text-gray-900 dark:text-white",
                                  children: "Fast",
                                }),
                                (0, a.jsxs)("p", {
                                  className:
                                    "text-2xl font-bold text-orange-600 dark:text-orange-400",
                                  children: [
                                    e.length > 0 ? e[e.length - 1].fast : 0,
                                    " Gwei",
                                  ],
                                }),
                                (0, a.jsxs)("p", {
                                  className:
                                    "text-sm text-gray-600 dark:text-gray-400",
                                  children: [
                                    "~",
                                    f(
                                      (e.length > 0
                                        ? e[e.length - 1].fast
                                        : 0) * 0.063
                                    ),
                                  ],
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400",
                                  children: "~30 sec",
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "bg-orange-100 dark:bg-orange-900/20 p-3 rounded-lg",
                              children: (0, a.jsx)(s.FontAwesomeIcon, {
                                icon: l.faGaugeHigh,
                                className:
                                  "h-6 w-6 text-orange-600 dark:text-orange-400",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-800 shadow-sm",
                        children: (0, a.jsxs)("div", {
                          className: "flex items-center justify-between",
                          children: [
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("h3", {
                                  className:
                                    "text-lg font-semibold text-gray-900 dark:text-white",
                                  children: "Base Fee",
                                }),
                                (0, a.jsxs)("p", {
                                  className:
                                    "text-2xl font-bold text-blue-600 dark:text-blue-400",
                                  children: [
                                    e.length > 0 ? e[e.length - 1].baseFee : 0,
                                    " Gwei",
                                  ],
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "text-sm text-gray-600 dark:text-gray-400",
                                  children: "Current",
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "text-xs text-gray-500 dark:text-gray-400",
                                  children: "Network",
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg",
                              children: (0, a.jsx)(s.FontAwesomeIcon, {
                                icon: l.faCube,
                                className:
                                  "h-6 w-6 text-blue-600 dark:text-blue-400",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
              (0, a.jsxs)("div", {
                className:
                  "bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm p-6 mb-8",
                children: [
                  (0, a.jsx)("h2", {
                    className:
                      "text-xl font-semibold text-gray-900 dark:text-white mb-4",
                    children: "Gas Price History (Last 30 Blocks)",
                  }),
                  h
                    ? (0, a.jsx)("div", {
                        className:
                          "h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center",
                        children: (0, a.jsxs)("div", {
                          className: "text-center",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400 mx-auto mb-4",
                            }),
                            (0, a.jsx)("p", {
                              className: "text-gray-600 dark:text-gray-400",
                              children: "Loading chart data...",
                            }),
                          ],
                        }),
                      })
                    : u
                    ? (0, a.jsx)("div", {
                        className:
                          "h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center",
                        children: (0, a.jsxs)("div", {
                          className: "text-center",
                          children: [
                            (0, a.jsx)(s.FontAwesomeIcon, {
                              icon: l.faSpinner,
                              className:
                                "h-12 w-12 text-red-600 dark:text-red-400 mb-4",
                            }),
                            (0, a.jsx)("p", {
                              className: "text-red-600 dark:text-red-400",
                              children: "Error loading chart data.",
                            }),
                          ],
                        }),
                      })
                    : 0 === x.labels.length
                    ? (0, a.jsx)("div", {
                        className:
                          "h-64 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center",
                        children: (0, a.jsxs)("div", {
                          className: "text-center",
                          children: [
                            (0, a.jsx)(s.FontAwesomeIcon, {
                              icon: l.faChartLine,
                              className: "h-12 w-12 text-gray-400 mb-4",
                            }),
                            (0, a.jsx)("p", {
                              className: "text-gray-600 dark:text-gray-400",
                              children: "No chart data available.",
                            }),
                          ],
                        }),
                      })
                    : (0, a.jsx)("div", {
                        className: "h-64",
                        children: (0, a.jsx)(i.Line, {
                          data: x,
                          options: {
                            responsive: !0,
                            maintainAspectRatio: !1,
                            plugins: {
                              legend: {
                                position: "top",
                                labels: {
                                  usePointStyle: !0,
                                  padding: 20,
                                  color: p ? "#f3f4f6" : "#374151",
                                },
                              },
                              tooltip: {
                                mode: "index",
                                intersect: !1,
                                backgroundColor: p ? "#1f2937" : "#ffffff",
                                titleColor: p ? "#f3f4f6" : "#374151",
                                bodyColor: p ? "#f3f4f6" : "#374151",
                                borderColor: p ? "#374151" : "#d1d5db",
                                borderWidth: 1,
                                callbacks: {
                                  label: function (e) {
                                    return ""
                                      .concat(e.dataset.label, ": ")
                                      .concat(e.parsed.y.toFixed(1), " Gwei");
                                  },
                                },
                              },
                            },
                            scales: {
                              x: {
                                grid: { color: p ? "#374151" : "#e5e7eb" },
                                ticks: {
                                  color: p ? "#9ca3af" : "#6b7280",
                                  maxTicksLimit: 8,
                                },
                              },
                              y: {
                                grid: { color: p ? "#374151" : "#e5e7eb" },
                                ticks: {
                                  color: p ? "#9ca3af" : "#6b7280",
                                  callback: function (e) {
                                    return "".concat(e, " Gwei");
                                  },
                                },
                              },
                            },
                            interaction: {
                              mode: "nearest",
                              axis: "x",
                              intersect: !1,
                            },
                          },
                        }),
                      }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "text-center",
                children: (0, a.jsxs)(o.default, {
                  variant: 1,
                  onClick: () => b.push("/explorer/gas-tracker"),
                  className: "px-8 py-4 text-lg font-semibold",
                  children: [
                    (0, a.jsx)(s.FontAwesomeIcon, {
                      icon: l.faChartLine,
                      className: "mr-2",
                    }),
                    "View Detailed Gas Tracker",
                  ],
                }),
              }),
            ],
          }),
        });
      }
      n.Chart.register(
        n.CategoryScale,
        n.LinearScale,
        n.PointElement,
        n.LineElement,
        n.Title,
        n.Tooltip,
        n.Legend,
        n.Filler
      );
    },
    683838: (e) => {
      e.n(e.i(723455));
    },
  },
]);

//# sourceMappingURL=7ee68b51a98a702b.js.map
