(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    863233: (e) => {
      "use strict";
      e.s({ default: () => s });
      var t = e.i(731636),
        a = e.i(838653),
        r = e.i(186240);
      function s() {
        let [e, s] = (0, a.useState)(""),
          [i, l] = (0, a.useState)("all"),
          o = [
            {
              id: 1,
              title:
                "Etherchain AI Official Presale Launch — Official Announcement",
              description:
                "Etherchain AI officially launches its presale, offering early access to the ETHAI token — the core asset powering a next-generation AI-integrated blockchain ecosystem. This presale marks a strategic entry point for early supporters to participate in a transformative platform designed to accelerate decentralized intelligence, innovation, and cross-industry adoption.",
              image: "/images/Space1.webp",
              date: "1 August, 2025",
              slug: "etherchain-ai-moves-to-discord-official-community-announcement",
              author: "CEO, Etherchain AI",
              category: "Discord",
              featured: !0,
            },
            {
              id: 2,
              title: "AI and Blockchain Technology: How They Work Together",
              description:
                "The combination of AI and blockchain technology enhances the strengths of both systems. Blockchain provides an immutable environment in which algorithms can safely perform their operations. At the same time, AI allows blockchain to adapt to new conditions, analyze the behavior of participants, and optimize processes.",
              image: "/images/News2.webp",
              date: "1 August, 2025",
              slug: "etherchain-ai-completes-stage-15-launches-bonus-round-to-accelerate-mainnet",
              author: "CEO, Etherchain AI",
              category: "Crypto",
            },
            {
              id: 3,
              title:
                "Etherchain AI Unleashes AIVM & PoI — Ushering in the Era of Permissionless Intelligence",
              description:
                "Etherchain AI introduces the Artificial Intelligence Virtual Machine (AIVM) and Proof of Intelligence (PoI), establishing the foundation for a permissionless, decentralized AI infrastructure. In contrast to the current landscape of closed APIs and centralized gatekeeping, Etherchain empowers global developers with unrestricted access to AI execution, training, and deployment on-chain.",
              image: "/images/Space2.webp",
              date: "1 August, 2025",
              slug: "etherchain-ai-unleashes-aivm-poi-the-dawn-of-permissionless-intelligence",
              author: "CEO, Etherchain AI",
              category: "AIVM",
            },
            {
              id: 4,
              title:
                "Etherchain AI Launches Strategic Developer Grant Program to Power the Future of Decentralized Intelligence",
              description:
                "Etherchain AI officially rolls out its multi-million dollar Developer Grant Program, designed to accelerate innovation within its AI-optimized Layer 1 ecosystem. By empowering elite developers, AI researchers, and Web3 builders...",
              image: "/images/News3.webp",
              date: "1 August, 2025",
              slug: "etherchain-protocol-ai-launches-massive-developer-grant-program-to",
              author: "CEO, Etherchain AI",
              category: "Crypto",
            },
            {
              id: 5,
              title:
                "Etherchain AI Set to Launch This June— Get Ready for the Meme Coin Revolution",
              description:
                "We're excited to share a major milestone with the Etherchain AI community — Etherchain AI will officially be launching in June! While we're...",
              image: "/images/Space3.webp",
              date: "1 August, 2025",
              slug: "etherchain-ai-set-to-launch-this-june-get-ready-for-the-meme-coin-revolution",
              author: "CEO, Etherchain AI",
              category: "Crypto",
            },
            {
              id: 7,
              title:
                "Etherchain Protocol AI Launches Highly Anticipated ECAI Token Presale",
              description:
                "The future of blockchain and artificial intelligence integration begins today as Etherchain Protocol AI officially announces the presale launch of its groundbreaking...",
              image: "/images/News.webp",
              date: "1 August, 2025",
              slug: "etherchain-protocol-ai-launches-highly-anticipated-ecai-token-presale",
              author: "CEO, Etherchain AI",
              category: "Crypto",
            },
          ],
          n = o.find((e) => e.featured),
          d = o.filter((e) => !e.featured),
          c = o.slice(0, 3),
          h = d.filter((t) => {
            let a =
                t.title.toLowerCase().includes(e.toLowerCase()) ||
                t.description.toLowerCase().includes(e.toLowerCase()),
              r = "all" === i || t.category === i;
            return a && r;
          });
        return (0, t.jsxs)("div", {
          className: "min-h-screen bg-white dark:bg-gray-950 pt-16",
          children: [
            (0, t.jsxs)("section", {
              className:
                "relative py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 overflow-hidden",
              children: [
                (0, t.jsx)("div", {
                  className: "absolute inset-0 bg-black/20",
                }),
                (0, t.jsx)("div", {
                  className:
                    "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                  children: (0, t.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, t.jsxs)("h1", {
                        className:
                          "text-4xl md:text-6xl font-bold text-white mb-6",
                        children: [
                          "Latest ",
                          (0, t.jsx)("span", {
                            className:
                              "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent",
                            children: "News",
                          }),
                        ],
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "text-xl text-gray-200 mb-8 max-w-3xl mx-auto",
                        children:
                          "Stay Updated with the Latest Insights from Etherchain AI",
                      }),
                      (0, t.jsx)("form", {
                        className: "max-w-2xl mx-auto mb-8",
                        children: (0, t.jsxs)("div", {
                          className: "flex gap-4",
                          children: [
                            (0, t.jsx)("input", {
                              type: "text",
                              placeholder: "Search ...",
                              value: e,
                              onChange: (e) => s(e.target.value),
                              className:
                                "flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent",
                            }),
                            (0, t.jsxs)("button", {
                              type: "submit",
                              className:
                                "px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300",
                              children: [
                                "Search",
                                (0, t.jsx)("svg", {
                                  className: "w-4 h-4 ml-2 inline",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: (0, t.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex flex-wrap justify-center gap-3",
                        children: [
                          (0, t.jsx)("span", {
                            className: "text-gray-300 font-medium",
                            children: "Trending Searches:",
                          }),
                          [
                            "Discord",
                            "Telegram",
                            "Etherchain Launch",
                            "AIVM",
                            "Crypto",
                          ].map((e) =>
                            (0, t.jsx)(
                              r.default,
                              {
                                href: "/blogs",
                                className:
                                  "px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 text-sm",
                                children: e,
                              },
                              e
                            )
                          ),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            n &&
              (0, t.jsx)("section", {
                className: "py-20 bg-white dark:bg-gray-950",
                children: (0, t.jsx)("div", {
                  className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                  children: (0, t.jsx)("div", {
                    className:
                      "bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700",
                    children: (0, t.jsxs)("div", {
                      className: "grid grid-cols-1 lg:grid-cols-2",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, t.jsx)("img", {
                              src: n.image,
                              alt: n.title,
                              className: "w-full h-full object-cover",
                            }),
                            (0, t.jsx)("div", {
                              className: "absolute top-4 left-4",
                              children: (0, t.jsx)("span", {
                                className:
                                  "bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg",
                                children: n.date,
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "p-8 lg:p-12",
                          children: [
                            (0, t.jsx)("div", {
                              className: "mb-4",
                              children: (0, t.jsx)("span", {
                                className:
                                  "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold",
                                children: "FEATURED",
                              }),
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex items-center mb-4",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-3",
                                  children: (0, t.jsx)("svg", {
                                    className: "w-4 h-4 text-white",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    children: (0, t.jsx)("path", {
                                      fillRule: "evenodd",
                                      d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                                      clipRule: "evenodd",
                                    }),
                                  }),
                                }),
                                (0, t.jsx)("span", {
                                  className:
                                    "text-gray-600 dark:text-gray-400 font-medium",
                                  children: n.author,
                                }),
                              ],
                            }),
                            (0, t.jsx)("h2", {
                              className:
                                "text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4",
                              children: (0, t.jsx)(r.default, {
                                href: "/blog",
                                className:
                                  "hover:text-ethai dark:hover:text-ethai transition-colors duration-300",
                                children: n.title,
                              }),
                            }),
                            (0, t.jsx)("p", {
                              className:
                                "text-gray-600 dark:text-gray-300 mb-6 leading-relaxed",
                              children: n.description,
                            }),
                            (0, t.jsxs)(r.default, {
                              href: "/blog",
                              className:
                                "inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300",
                              children: [
                                "Continue Reading",
                                (0, t.jsx)("svg", {
                                  className: "w-4 h-4 ml-2",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: (0, t.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M17 8l4 4m0 0l-4 4m4-4H3",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            (0, t.jsx)("section", {
              className: "py-20 bg-white dark:bg-gray-950",
              children: (0, t.jsxs)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                  (0, t.jsxs)("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-8",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "lg:col-span-8",
                        children: [
                          (0, t.jsx)("div", {
                            className: "mb-8",
                            children: (0, t.jsxs)("h3", {
                              className:
                                "text-2xl font-bold text-gray-900 dark:text-white mb-2",
                              children: [
                                "Latest ",
                                (0, t.jsx)("span", {
                                  className:
                                    "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
                                  children: "Blog",
                                }),
                              ],
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: h
                              .slice(0, 2)
                              .map((e) =>
                                (0, t.jsxs)(
                                  "article",
                                  {
                                    className:
                                      "bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden",
                                    children: [
                                      (0, t.jsxs)("div", {
                                        className: "relative",
                                        children: [
                                          (0, t.jsx)("img", {
                                            src: e.image,
                                            alt: e.title,
                                            className:
                                              "w-full h-48 object-cover",
                                          }),
                                          (0, t.jsx)("div", {
                                            className: "absolute top-4 left-4",
                                            children: (0, t.jsx)("span", {
                                              className:
                                                "bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg",
                                              children: e.date,
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: "p-6",
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className: "flex items-center mb-4",
                                            children: [
                                              (0, t.jsx)("div", {
                                                className:
                                                  "w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-2",
                                                children: (0, t.jsx)("svg", {
                                                  className:
                                                    "w-3 h-3 text-white",
                                                  fill: "currentColor",
                                                  viewBox: "0 0 20 20",
                                                  children: (0, t.jsx)("path", {
                                                    fillRule: "evenodd",
                                                    d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                                                    clipRule: "evenodd",
                                                  }),
                                                }),
                                              }),
                                              (0, t.jsx)("span", {
                                                className:
                                                  "text-sm text-gray-600 dark:text-gray-400 font-medium",
                                                children: e.author,
                                              }),
                                            ],
                                          }),
                                          (0, t.jsx)("h4", {
                                            className:
                                              "text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2",
                                            children: (0, t.jsx)(r.default, {
                                              href: "/blog",
                                              className:
                                                "hover:text-ethai dark:hover:text-ethai transition-colors duration-300",
                                              children: e.title,
                                            }),
                                          }),
                                          (0, t.jsx)("p", {
                                            className:
                                              "text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3",
                                            children: e.description,
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  e.id
                                )
                              ),
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8",
                            children: h
                              .slice(2)
                              .map((e) =>
                                (0, t.jsxs)(
                                  "article",
                                  {
                                    className:
                                      "bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden",
                                    children: [
                                      (0, t.jsxs)("div", {
                                        className: "relative",
                                        children: [
                                          (0, t.jsx)("img", {
                                            src: e.image,
                                            alt: e.title,
                                            className:
                                              "w-full h-48 object-cover",
                                          }),
                                          (0, t.jsx)("div", {
                                            className: "absolute top-4 left-4",
                                            children: (0, t.jsx)("span", {
                                              className:
                                                "bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg",
                                              children: e.date,
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: "p-6",
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className: "flex items-center mb-4",
                                            children: [
                                              (0, t.jsx)("div", {
                                                className:
                                                  "w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-2",
                                                children: (0, t.jsx)("svg", {
                                                  className:
                                                    "w-3 h-3 text-white",
                                                  fill: "currentColor",
                                                  viewBox: "0 0 20 20",
                                                  children: (0, t.jsx)("path", {
                                                    fillRule: "evenodd",
                                                    d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                                                    clipRule: "evenodd",
                                                  }),
                                                }),
                                              }),
                                              (0, t.jsx)("span", {
                                                className:
                                                  "text-sm text-gray-600 dark:text-gray-400 font-medium",
                                                children: e.author,
                                              }),
                                            ],
                                          }),
                                          (0, t.jsx)("h4", {
                                            className:
                                              "text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2",
                                            children: (0, t.jsx)(r.default, {
                                              href: "/blog",
                                              className:
                                                "hover:text-ethai dark:hover:text-ethai transition-colors duration-300",
                                              children: e.title,
                                            }),
                                          }),
                                          (0, t.jsx)("p", {
                                            className:
                                              "text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3",
                                            children: e.description,
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  e.id
                                )
                              ),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "lg:col-span-4",
                        children: [
                          (0, t.jsx)("div", {
                            className: "mb-8",
                            children: (0, t.jsxs)("h3", {
                              className:
                                "text-2xl font-bold text-gray-900 dark:text-white mb-2",
                              children: [
                                "Most ",
                                (0, t.jsx)("span", {
                                  className:
                                    "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
                                  children: "Popular",
                                }),
                              ],
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className: "space-y-6",
                            children: c.map((e) =>
                              (0, t.jsx)(
                                "article",
                                {
                                  className:
                                    "bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden",
                                  children: (0, t.jsxs)("div", {
                                    className: "flex",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className: "w-24 h-24 flex-shrink-0",
                                        children: (0, t.jsx)("img", {
                                          src: e.image,
                                          alt: e.title,
                                          className:
                                            "w-full h-full object-cover",
                                        }),
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: "flex-1 p-4",
                                        children: [
                                          (0, t.jsx)("h4", {
                                            className:
                                              "text-sm font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2",
                                            children: (0, t.jsx)(r.default, {
                                              href: "/blog",
                                              className:
                                                "hover:text-ethai dark:hover:text-ethai transition-colors duration-300",
                                              children: e.title,
                                            }),
                                          }),
                                          (0, t.jsxs)("div", {
                                            className:
                                              "flex items-center text-xs text-gray-600 dark:text-gray-400",
                                            children: [
                                              (0, t.jsxs)("span", {
                                                className:
                                                  "flex items-center mr-4",
                                                children: [
                                                  (0, t.jsx)("svg", {
                                                    className: "w-3 h-3 mr-1",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    children: (0, t.jsx)(
                                                      "path",
                                                      {
                                                        fillRule: "evenodd",
                                                        d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                                                        clipRule: "evenodd",
                                                      }
                                                    ),
                                                  }),
                                                  e.author,
                                                ],
                                              }),
                                              (0, t.jsxs)("span", {
                                                className: "flex items-center",
                                                children: [
                                                  (0, t.jsx)("svg", {
                                                    className: "w-3 h-3 mr-1",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    children: (0, t.jsx)(
                                                      "path",
                                                      {
                                                        fillRule: "evenodd",
                                                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
                                                        clipRule: "evenodd",
                                                      }
                                                    ),
                                                  }),
                                                  "4 days ago",
                                                ],
                                              }),
                                            ],
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
                  (0, t.jsx)("div", {
                    className: "text-center mt-16",
                    children: (0, t.jsxs)(r.default, {
                      href: "/blog",
                      className:
                        "inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-purple-500 hover:border-purple-600",
                      children: [
                        "View All Post",
                        (0, t.jsx)("svg", {
                          className: "w-5 h-5 ml-2",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M17 8l4 4m0 0l-4 4m4-4H3",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
  },
]);

//# sourceMappingURL=e752ebc933aa62e9.js.map
