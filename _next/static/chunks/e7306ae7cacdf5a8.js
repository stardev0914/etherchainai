(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    109871: (e) => {
      "use strict";
      e.s({ default: () => a });
      var t = e.i(731636),
        r = e.i(838653);
      function a() {
        let [e, a] = (0, r.useState)({
          blocks: 2657819,
          transactions: 5663316,
        });
        (0, r.useEffect)(() => {
          try {
            let e = localStorage.getItem("etherchain_metrics"),
              t = localStorage.getItem("etherchain_metrics_timestamp");
            if (e && t) {
              let r = JSON.parse(e),
                s = parseInt(t),
                o = Date.now() - s,
                i = 15 * Math.floor(o / 5e3),
                l = 45 * Math.floor(o / 5e3);
              a({ blocks: r.blocks + i, transactions: r.transactions + l });
            }
          } catch (e) {
            console.error("Error loading metrics from localStorage:", e);
          }
        }, []),
          (0, r.useEffect)(() => {
            let t,
              r = Date.now(),
              s = () => {
                let o = Date.now() - r,
                  i = 15 * Math.floor(o / 5e3),
                  l = 45 * Math.floor(o / 5e3),
                  c = {
                    blocks: e.blocks + i,
                    transactions: e.transactions + l,
                  };
                if ((a(c), o % 3e4 < 16))
                  try {
                    localStorage.setItem(
                      "etherchain_metrics",
                      JSON.stringify(c)
                    ),
                      localStorage.setItem(
                        "etherchain_metrics_timestamp",
                        Date.now().toString()
                      );
                  } catch (e) {
                    console.error("Error saving metrics to localStorage:", e);
                  }
                t = requestAnimationFrame(s);
              };
            return (
              (t = requestAnimationFrame(s)),
              () => {
                t && cancelAnimationFrame(t);
              }
            );
          }, [e.blocks, e.transactions]);
        let s = (e) => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return (0, t.jsx)("section", {
          className: "relative py-20 bg-white dark:bg-gray-950 overflow-hidden",
          children: (0, t.jsxs)("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              (0, t.jsxs)("div", {
                className: "text-center mb-16",
                children: [
                  (0, t.jsx)("h2", {
                    className:
                      "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4",
                    children: "Network Statistics",
                  }),
                  (0, t.jsx)("p", {
                    className:
                      "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                    children:
                      "Real-time metrics showing the power and efficiency of the Etherchain network",
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8",
                children: [
                  {
                    icon: "/images/Blocks.webp",
                    value: "2,657,819",
                    title: "Blocks Produced",
                    description: "Total blocks created",
                  },
                  {
                    icon: "images/Chain.webp",
                    value: "5,663,316",
                    title: "On-Chain Transactions",
                    description: "Total transactions processed",
                  },
                  {
                    icon: "images/Time.webp",
                    value: "0.5s",
                    title: "Block Time",
                    description: "Average block generation time",
                  },
                  {
                    icon: "images/Fee.webp",
                    value: "< $0.0001",
                    title: "Average Transaction Cost",
                    description: "Cost per transaction",
                  },
                ].map((r, a) =>
                  (0, t.jsxs)(
                    "div",
                    {
                      className:
                        "group flex flex-col items-center bg-white dark:bg-[#0B101C] rounded-2xl p-6 lg:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 dark:hover:border-[#d02fc2] overflow-hidden backdrop-blur-sm hover:shadow-purple-500/10 hover:border-[#d02fc2]",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "w-[40px] h-[40px]  rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
                          children: (0, t.jsx)("div", {
                            className: "text-white",
                            children: (0, t.jsx)("img", { src: r.icon }),
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className: "mb-4",
                          children: (0, t.jsx)("div", {
                            className:
                              "text-3xl lg:text-[24px] font-bold text-gray-900 dark:text-white ",
                            children:
                              0 === a
                                ? s(e.blocks)
                                : 1 === a
                                ? s(e.transactions)
                                : r.value,
                          }),
                        }),
                        (0, t.jsx)("h3", {
                          className:
                            "text-[16px] text-center font-semibold text-[#b2bccb] font-mono dark:text-[#b2bccb] mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300",
                          children: r.title,
                        }),
                      ],
                    },
                    a
                  )
                ),
              }),
              (0, t.jsx)("div", {
                className: "text-center mt-12",
                children: (0, t.jsxs)("div", {
                  className:
                    "inline-flex items-center space-x-2 bg-white dark:bg-gray-900 rounded-full px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-700",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "w-3 h-3 bg-green-500 rounded-full animate-pulse",
                    }),
                    (0, t.jsx)("span", {
                      className:
                        "text-sm font-medium text-[#0B101C] dark:text-gray-300",
                      children: "Live Network Data • Updated Every 5 Seconds",
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
    335699: (e) => {
      e.n(e.i(109871));
    },
  },
]);

//# sourceMappingURL=5057094c95027205.js.map
