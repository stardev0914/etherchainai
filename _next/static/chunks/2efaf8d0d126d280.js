(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    255137: (e) => {
      "use strict";
      e.s({ default: () => o });
      var a = e.i(731636),
        t = e.i(838653),
        r = e.i(12448),
        s = e.i(55157),
        d = e.i(95437),
        l = e.i(288041),
        i = e.i(763674),
        n = e.i(180009);
      function o() {
        let [e, i] = (0, t.useState)({
            slow: { gwei: 0, usd: 0, time: "~5 min" },
            standard: { gwei: 0, usd: 0, time: "~2 min" },
            fast: { gwei: 0, usd: 0, time: "~30 sec" },
            instant: { gwei: 0, usd: 0, time: "~15 sec" },
          }),
          [o, c] = (0, t.useState)([]),
          [x, g] = (0, t.useState)({ labels: [], datasets: [] }),
          [m, h] = (0, t.useState)(null),
          {
            data: b,
            loading: p,
            error: u,
          } = (0, d.useGasData)({
            rpcUrl: "https://eth.llamarpc.com",
            blockCount: 30,
            percentiles: [10, 50, 90],
          });
        (0, t.useEffect)(() => {
          if (
            p ||
            (console.log(b),
            !b || !b.baseFeePerGas || 0 === b.baseFeePerGas.length)
          )
            return;
          let e = b.baseFeePerGas[b.baseFeePerGas.length - 1],
            a = b.reward[b.reward.length - 1],
            t = parseFloat(new l.default(e).div(1e9).toString()),
            r = t + parseFloat(new l.default(a[0]).div(1e9).toString()),
            s = t + parseFloat(new l.default(a[1]).div(1e9).toString()),
            d = t + parseFloat(new l.default(a[2]).div(1e9).toString()),
            n = 1.5 * d;
          i({
            slow: {
              gwei: Math.round(r),
              usd: (21e3 * r * 3e3) / 1e9,
              time: "~5 min",
            },
            standard: {
              gwei: Math.round(s),
              usd: (21e3 * s * 3e3) / 1e9,
              time: "~2 min",
            },
            fast: {
              gwei: Math.round(d),
              usd: (21e3 * d * 3e3) / 1e9,
              time: "~30 sec",
            },
            instant: {
              gwei: Math.round(n),
              usd: (21e3 * n * 3e3) / 1e9,
              time: "~15 sec",
            },
          }),
            c(
              b.baseFeePerGas
                .slice(-10)
                .map((e, a) => {
                  let t = b.reward[b.reward.length - 10 + a],
                    r = parseFloat(new l.default(e).div(1e9).toString()),
                    s = r + parseFloat(new l.default(t[0]).div(1e9).toString()),
                    d = r + parseFloat(new l.default(t[1]).div(1e9).toString()),
                    i = r + parseFloat(new l.default(t[2]).div(1e9).toString()),
                    n = Math.round(
                      ((b.baseFeePerGas.length - 10 + a) * 12) / 60
                    );
                  return {
                    time: "".concat(n, " min ago"),
                    slow: Math.round(s),
                    standard: Math.round(d),
                    fast: Math.round(i),
                    baseFee: Math.round(r),
                  };
                })
                .reverse()
            );
          let o = b.baseFeePerGas
              .map((e, a) => {
                let t = Math.round(
                  ((b.baseFeePerGas.length - a - 1) * 12) / 60
                );
                return "".concat(t, "m ago");
              })
              .reverse(),
            x = b.baseFeePerGas
              .map((e) => parseFloat(new l.default(e).div(1e9).toString()))
              .reverse(),
            m = b.baseFeePerGas
              .map((e, a) => {
                if (a > 29) return 0;
                let t = b.reward[a];
                return (
                  parseFloat(new l.default(e).div(1e9).toString()) +
                  parseFloat(new l.default(t[0]).div(1e9).toString())
                );
              })
              .reverse();
          g({
            labels: o,
            datasets: [
              {
                label: "Base Fee",
                data: x,
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
                data: m,
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
                data: b.baseFeePerGas
                  .map((e, a) => {
                    if (a > 29) return 0;
                    let t = b.reward[a];
                    return (
                      parseFloat(new l.default(e).div(1e9).toString()) +
                      parseFloat(new l.default(t[1]).div(1e9).toString())
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
                data: b.baseFeePerGas
                  .map((e, a) => {
                    if (a > 29) return 0;
                    let t = b.reward[a];
                    return (
                      parseFloat(new l.default(e).div(1e9).toString()) +
                      parseFloat(new l.default(t[2]).div(1e9).toString())
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
          }),
            h(new Date());
        }, [b]);
        let y = document.documentElement.classList.contains("dark"),
          w = (e) => "$".concat(e.toFixed(2));
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
                  className: "text-center",
                  children: [
                    (0, a.jsx)("h1", {
                      className:
                        "text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent",
                      children: "Gas Tracker",
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto",
                      children:
                        "Monitor gas prices and optimize your transactions on Etherchain",
                    }),
                  ],
                }),
              }),
            }),
            (0, a.jsxs)("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
              children: [
                p
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
                          (0, a.jsx)(r.FontAwesomeIcon, {
                            icon: s.faSpinner,
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
                                    children: [e.slow.gwei, " Gwei"],
                                  }),
                                  (0, a.jsxs)("p", {
                                    className:
                                      "text-sm text-gray-600 dark:text-gray-400",
                                    children: ["~", w(e.slow.usd)],
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "text-xs text-gray-500 dark:text-gray-400",
                                    children: e.slow.time,
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "bg-green-100 dark:bg-green-900/20 p-3 rounded-lg",
                                children: (0, a.jsx)(r.FontAwesomeIcon, {
                                  icon: s.faGasPump,
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
                                    children: [e.standard.gwei, " Gwei"],
                                  }),
                                  (0, a.jsxs)("p", {
                                    className:
                                      "text-sm text-gray-600 dark:text-gray-400",
                                    children: ["~", w(e.standard.usd)],
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "text-xs text-gray-500 dark:text-gray-400",
                                    children: e.standard.time,
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded-lg",
                                children: (0, a.jsx)(r.FontAwesomeIcon, {
                                  icon: s.faGasPump,
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
                                    children: [e.fast.gwei, " Gwei"],
                                  }),
                                  (0, a.jsxs)("p", {
                                    className:
                                      "text-sm text-gray-600 dark:text-gray-400",
                                    children: ["~", w(e.fast.usd)],
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "text-xs text-gray-500 dark:text-gray-400",
                                    children: e.fast.time,
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "bg-orange-100 dark:bg-orange-900/20 p-3 rounded-lg",
                                children: (0, a.jsx)(r.FontAwesomeIcon, {
                                  icon: s.faGasPump,
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
                                    children: "Instant",
                                  }),
                                  (0, a.jsxs)("p", {
                                    className:
                                      "text-2xl font-bold text-red-600 dark:text-red-400",
                                    children: [e.instant.gwei, " Gwei"],
                                  }),
                                  (0, a.jsxs)("p", {
                                    className:
                                      "text-sm text-gray-600 dark:text-gray-400",
                                    children: ["~", w(e.instant.usd)],
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "text-xs text-gray-500 dark:text-gray-400",
                                    children: e.instant.time,
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "bg-red-100 dark:bg-red-900/20 p-3 rounded-lg",
                                children: (0, a.jsx)(r.FontAwesomeIcon, {
                                  icon: s.faGasPump,
                                  className:
                                    "h-6 w-6 text-red-600 dark:text-red-400",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                !p &&
                  !u &&
                  b &&
                  (0, a.jsxs)("div", {
                    className: "mb-4 flex justify-between items-center",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "w-2 h-2 bg-green-500 rounded-full animate-pulse",
                          }),
                          (0, a.jsx)("span", {
                            className:
                              "text-sm text-gray-600 dark:text-gray-400",
                            children: "Live Data",
                          }),
                        ],
                      }),
                      m &&
                        (0, a.jsxs)("span", {
                          className: "text-sm text-gray-600 dark:text-gray-400",
                          children: ["Last updated: ", m.toLocaleTimeString()],
                        }),
                    ],
                  }),
                !p &&
                  !u &&
                  b &&
                  (0, a.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",
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
                                icon: s.faGaugeHigh,
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
                                  children: "Current Base Fee",
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "text-2xl font-bold text-gray-900 dark:text-white",
                                  children:
                                    b.baseFeePerGas &&
                                    b.baseFeePerGas.length > 0
                                      ? "".concat(
                                          Math.round(
                                            parseFloat(
                                              new l.default(
                                                b.baseFeePerGas[
                                                  b.baseFeePerGas.length - 1
                                                ]
                                              )
                                                .div(1e9)
                                                .toString()
                                            )
                                          ),
                                          " Gwei"
                                        )
                                      : "N/A",
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
                                icon: s.faCube,
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
                                  children: "Blocks Analyzed",
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "text-2xl font-bold text-gray-900 dark:text-white",
                                  children: b.baseFeePerGas
                                    ? b.baseFeePerGas.length
                                    : 0,
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
                                icon: s.faCalculator,
                                className: "h-8 w-8 text-ethai dark:text-ethai",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "ml-4",
                              children: [
                                (0, a.jsx)("p", {
                                  className:
                                    "text-sm font-medium text-gray-600 dark:text-gray-400",
                                  children: "Avg Gas Used",
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "text-2xl font-bold text-gray-900 dark:text-white",
                                  children: b.gasUsedRatio
                                    ? "".concat(
                                        (
                                          (b.gasUsedRatio.reduce(
                                            (e, a) => e + a,
                                            0
                                          ) /
                                            b.gasUsedRatio.length) *
                                          100
                                        ).toFixed(1),
                                        "%"
                                      )
                                    : "N/A",
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
                    "bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm p-6 mb-8",
                  children: [
                    (0, a.jsx)("h2", {
                      className:
                        "text-xl font-semibold text-gray-900 dark:text-white mb-4",
                      children: "Gas Price History (Last 30 Blocks)",
                    }),
                    p
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
                              (0, a.jsx)(r.FontAwesomeIcon, {
                                icon: s.faSpinner,
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
                              (0, a.jsx)(r.FontAwesomeIcon, {
                                icon: s.faChartLine,
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
                          children: (0, a.jsx)(n.Line, {
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
                                    color: y ? "#f3f4f6" : "#374151",
                                  },
                                },
                                tooltip: {
                                  mode: "index",
                                  intersect: !1,
                                  backgroundColor: y ? "#1f2937" : "#ffffff",
                                  titleColor: y ? "#f3f4f6" : "#374151",
                                  bodyColor: y ? "#f3f4f6" : "#374151",
                                  borderColor: y ? "#374151" : "#d1d5db",
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
                                  grid: { color: y ? "#374151" : "#e5e7eb" },
                                  ticks: {
                                    color: y ? "#9ca3af" : "#6b7280",
                                    maxTicksLimit: 8,
                                  },
                                },
                                y: {
                                  grid: { color: y ? "#374151" : "#e5e7eb" },
                                  ticks: {
                                    color: y ? "#9ca3af" : "#6b7280",
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
                        children: "Recent Gas Prices",
                      }),
                    }),
                    p
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
                              children: "Loading gas history...",
                            }),
                          ],
                        })
                      : u
                      ? (0, a.jsx)("div", {
                          className: "flex justify-center items-center py-12",
                          children: (0, a.jsxs)("div", {
                            className: "text-center",
                            children: [
                              (0, a.jsx)(r.FontAwesomeIcon, {
                                icon: s.faSpinner,
                                className:
                                  "h-8 w-8 text-red-600 dark:text-red-400 mb-4",
                              }),
                              (0, a.jsx)("p", {
                                className: "text-red-600 dark:text-red-400",
                                children: "Error loading gas history.",
                              }),
                            ],
                          }),
                        })
                      : 0 === o.length
                      ? (0, a.jsx)("div", {
                          className: "flex justify-center items-center py-12",
                          children: (0, a.jsxs)("div", {
                            className: "text-center",
                            children: [
                              (0, a.jsx)(r.FontAwesomeIcon, {
                                icon: s.faGasPump,
                                className: "h-8 w-8 text-gray-400 mb-4",
                              }),
                              (0, a.jsx)("p", {
                                className: "text-gray-600 dark:text-gray-400",
                                children: "No gas history available.",
                              }),
                            ],
                          }),
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
                                      children: "Time",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Slow",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Standard",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Fast",
                                    }),
                                    (0, a.jsx)("th", {
                                      className:
                                        "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                      children: "Base Fee",
                                    }),
                                  ],
                                }),
                              }),
                              (0, a.jsx)("tbody", {
                                className:
                                  "bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800",
                                children: o.map((e, t) =>
                                  (0, a.jsxs)(
                                    "tr",
                                    {
                                      className:
                                        "hover:bg-white dark:hover:bg-gray-800 transition-colors",
                                      children: [
                                        (0, a.jsx)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white",
                                          children: e.time,
                                        }),
                                        (0, a.jsxs)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap text-sm text-green-600 dark:text-green-400",
                                          children: [e.slow, " Gwei"],
                                        }),
                                        (0, a.jsxs)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap text-sm text-yellow-600 dark:text-yellow-400",
                                          children: [e.standard, " Gwei"],
                                        }),
                                        (0, a.jsxs)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap text-sm text-orange-600 dark:text-orange-400",
                                          children: [e.fast, " Gwei"],
                                        }),
                                        (0, a.jsxs)("td", {
                                          className:
                                            "px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white",
                                          children: [e.baseFee, " Gwei"],
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
              ],
            }),
          ],
        });
      }
      i.Chart.register(
        i.CategoryScale,
        i.LinearScale,
        i.PointElement,
        i.LineElement,
        i.Title,
        i.Tooltip,
        i.Legend,
        i.Filler
      );
    },
  },
]);

//# sourceMappingURL=eaa4af00895ce642.js.map
