(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    203225: (e) => {
      "use strict";
      e.s({ default: () => r });
      var t = e.i(731636),
        s = e.i(838653);
      function r() {
        var e;
        let [r, i] = (0, s.useState)("all"),
          [a, l] = (0, s.useState)(""),
          [o, n] = (0, s.useState)(!1),
          d = [
            {
              id: "general",
              name: "General Discussion",
              description:
                "General topics about Etherchain and blockchain technology",
              icon: "💬",
              color: "bg-blue-500",
              topics: 24,
              posts: 156,
            },
            {
              id: "technical",
              name: "Technical Support",
              description: "Technical questions and support for developers",
              icon: "⚙️",
              color: "bg-green-500",
              topics: 18,
              posts: 89,
            },
            {
              id: "development",
              name: "Development",
              description: "Discussion about building on Etherchain",
              icon: "🚀",
              color: "bg-purple-500",
              topics: 32,
              posts: 203,
            },
            {
              id: "trading",
              name: "Trading & Markets",
              description: "Trading discussions and market analysis",
              icon: "📈",
              color: "bg-yellow-500",
              topics: 15,
              posts: 67,
            },
            {
              id: "community",
              name: "Community",
              description: "Community events and meetups",
              icon: "👥",
              color: "bg-indigo-500",
              topics: 12,
              posts: 78,
            },
          ],
          c = [
            {
              id: 1,
              title: "How to integrate Etherchain into my dApp?",
              author: "CryptoDev",
              category: "development",
              replies: 12,
              views: 234,
              lastActivity: "2 hours ago",
              isSticky: !1,
              isLocked: !1,
            },
            {
              id: 3,
              title: "Best practices for smart contract development",
              author: "BlockchainGuru",
              category: "technical",
              replies: 28,
              views: 567,
              lastActivity: "3 days ago",
              isSticky: !1,
              isLocked: !1,
            },
            {
              id: 4,
              title: "Token price discussion and predictions",
              author: "TraderPro",
              category: "trading",
              replies: 67,
              views: 892,
              lastActivity: "5 days ago",
              isSticky: !1,
              isLocked: !1,
            },
            {
              id: 5,
              title: "Which exchanges will ETHAI tokens be listed on?",
              author: "Community Manager",
              category: "community",
              replies: 15,
              views: 234,
              lastActivity: "6 days ago",
              isSticky: !1,
              isLocked: !1,
            },
          ].filter((e) => "all" === r || e.category === r),
          x = [{ id: "all", name: "All Categories" }, ...d];
        return (0, t.jsxs)("div", {
          className:
            "min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 ",
          children: [
            (0, t.jsxs)("div", {
              className:
                "relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700",
              children: [
                (0, t.jsx)("div", {
                  className: "absolute inset-0 bg-black/20",
                }),
                (0, t.jsx)("div", {
                  className:
                    "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
                  children: (0, t.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, t.jsx)("h1", {
                        className:
                          "text-4xl md:text-6xl font-bold text-white mb-6",
                        children: "Etherchain Community Forum",
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "text-xl text-purple-100 mb-8 max-w-3xl mx-auto",
                        children:
                          "Join the conversation with developers, traders, and enthusiasts. Share ideas, get support, and stay updated with the latest developments.",
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "flex flex-col sm:flex-row gap-4 justify-center",
                        children: [
                          (0, t.jsx)("button", {
                            className:
                              "bg-white text-ethai px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors duration-300",
                            children: "Start New Discussion",
                          }),
                          (0, t.jsx)("button", {
                            className:
                              "border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-ethai transition-colors duration-300",
                            children: "Browse Categories",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-8",
                  children: (0, t.jsxs)("div", {
                    className: "flex flex-col lg:flex-row gap-4 items-center",
                    children: [
                      (0, t.jsx)("div", {
                        className: "flex-1 w-full",
                        children: (0, t.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, t.jsx)("input", {
                              type: "text",
                              placeholder: "Search discussions...",
                              value: a,
                              onChange: (e) => l(e.target.value),
                              className:
                                "w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                            }),
                            (0, t.jsx)("svg", {
                              className:
                                "absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400",
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: (0, t.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "hidden sm:flex gap-2",
                        children: [
                          (0, t.jsx)("button", {
                            onClick: () => i("all"),
                            className:
                              "px-4 py-2 rounded-lg font-medium transition-colors ".concat(
                                "all" === r
                                  ? "bg-purple-600 text-white"
                                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                              ),
                            children: "All",
                          }),
                          d.map((e) =>
                            (0, t.jsx)(
                              "button",
                              {
                                onClick: () => i(e.id),
                                className:
                                  "px-4 py-2 rounded-lg font-medium transition-colors ".concat(
                                    r === e.id
                                      ? "bg-purple-600 text-white"
                                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                                  ),
                                children: e.name,
                              },
                              e.id
                            )
                          ),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "sm:hidden w-full",
                        children: (0, t.jsxs)("button", {
                          onClick: () => n(!o),
                          className:
                            "w-full bg-purple-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-between",
                          children: [
                            (0, t.jsx)("span", {
                              children:
                                null == (e = x.find((e) => e.id === r))
                                  ? void 0
                                  : e.name,
                            }),
                            (0, t.jsx)("svg", {
                              className: "w-5 h-5 transition-transform ".concat(
                                o ? "rotate-180" : ""
                              ),
                              fill: "none",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24",
                              children: (0, t.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 9l-7 7-7-7",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                o &&
                  (0, t.jsxs)("div", {
                    className: "sm:hidden fixed inset-0 z-50",
                    children: [
                      (0, t.jsx)("div", {
                        className: "absolute inset-0 bg-black/50",
                        onClick: () => n(!1),
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-900 rounded-t-2xl transform transition-transform duration-300 ease-out",
                        style: { height: "33.333%" },
                        children: (0, t.jsxs)("div", {
                          className: "p-6",
                          children: [
                            (0, t.jsxs)("div", {
                              className:
                                "flex items-center justify-between mb-6",
                              children: [
                                (0, t.jsx)("h3", {
                                  className:
                                    "text-lg font-semibold text-gray-900 dark:text-white",
                                  children: "Filter Categories",
                                }),
                                (0, t.jsx)("button", {
                                  onClick: () => n(!1),
                                  className:
                                    "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
                                  children: (0, t.jsx)("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, t.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M6 18L18 6M6 6l12 12",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: "space-y-3 max-h-48 overflow-y-auto",
                              children: x.map((e) =>
                                (0, t.jsx)(
                                  "button",
                                  {
                                    onClick: () => {
                                      i(e.id), n(!1);
                                    },
                                    className:
                                      "w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ".concat(
                                        r === e.id
                                          ? "bg-purple-600 text-white"
                                          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                                      ),
                                    children: e.name,
                                  },
                                  e.id
                                )
                              ),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                (0, t.jsx)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",
                  children: d.map((e) =>
                    (0, t.jsxs)(
                      "div",
                      {
                        className:
                          "bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "flex items-center mb-4",
                            children: [
                              (0, t.jsx)("div", {
                                className: "w-12 h-12 rounded-lg ".concat(
                                  e.color,
                                  " flex items-center justify-center text-2xl mr-4"
                                ),
                                children: e.icon,
                              }),
                              (0, t.jsxs)("div", {
                                children: [
                                  (0, t.jsx)("h3", {
                                    className:
                                      "text-lg font-semibold text-gray-900 dark:text-white",
                                    children: e.name,
                                  }),
                                  (0, t.jsxs)("p", {
                                    className:
                                      "text-sm text-gray-600 dark:text-gray-400",
                                    children: [
                                      e.topics,
                                      " topics, ",
                                      e.posts,
                                      " posts",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "text-gray-600 dark:text-gray-400 text-sm mb-4",
                            children: e.description,
                          }),
                          (0, t.jsx)("button", {
                            className:
                              "w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300",
                            children: "View Category",
                          }),
                        ],
                      },
                      e.id
                    )
                  ),
                }),
                (0, t.jsxs)("div", {
                  className:
                    "bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "px-6 py-4 border-b border-gray-200 dark:border-gray-700",
                      children: (0, t.jsx)("h2", {
                        className:
                          "text-xl font-semibold text-gray-900 dark:text-white",
                        children: "Recent Discussions",
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "divide-y divide-gray-200 dark:divide-gray-700",
                      children: c.map((e) => {
                        var s;
                        return (0, t.jsx)(
                          "div",
                          {
                            className:
                              "p-6 hover:bg-white dark:hover:bg-gray-700 transition-colors duration-200",
                            children: (0, t.jsxs)("div", {
                              className: "flex items-start space-x-4",
                              children: [
                                (0, t.jsx)("div", {
                                  className: "flex-shrink-0",
                                  children: (0, t.jsx)("div", {
                                    className:
                                      "w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold",
                                    children: e.author.charAt(0),
                                  }),
                                }),
                                (0, t.jsxs)("div", {
                                  className: "flex-1 min-w-0",
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className:
                                        "flex items-center space-x-2 mb-2",
                                      children: [
                                        e.isSticky &&
                                          (0, t.jsx)("span", {
                                            className:
                                              "bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium",
                                            children: "Sticky",
                                          }),
                                        e.isLocked &&
                                          (0, t.jsx)("span", {
                                            className:
                                              "bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium",
                                            children: "Locked",
                                          }),
                                        (0, t.jsx)("span", {
                                          className:
                                            "text-xs px-2 py-1 rounded-full font-medium ".concat(
                                              "announcements" === e.category
                                                ? "bg-red-100 text-red-800"
                                                : "development" === e.category
                                                ? "bg-purple-100 text-purple-800"
                                                : "technical" === e.category
                                                ? "bg-green-100 text-green-800"
                                                : "trading" === e.category
                                                ? "bg-yellow-100 text-yellow-800"
                                                : "bg-blue-100 text-blue-800"
                                            ),
                                          children:
                                            null ==
                                            (s = d.find(
                                              (t) => t.id === e.category
                                            ))
                                              ? void 0
                                              : s.name,
                                        }),
                                      ],
                                    }),
                                    (0, t.jsx)("h3", {
                                      className:
                                        "text-lg font-medium text-gray-900 dark:text-white hover:text-ethai dark:hover:text-ethai cursor-pointer",
                                      children: e.title,
                                    }),
                                    (0, t.jsxs)("div", {
                                      className:
                                        "flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400",
                                      children: [
                                        (0, t.jsxs)("span", {
                                          children: ["by ", e.author],
                                        }),
                                        (0, t.jsxs)("span", {
                                          children: [e.replies, " replies"],
                                        }),
                                        (0, t.jsxs)("span", {
                                          children: [e.views, " views"],
                                        }),
                                        (0, t.jsx)("span", {
                                          children: e.lastActivity,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          e.id
                        );
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "mt-12 grid grid-cols-1 md:grid-cols-4 gap-6",
                  children: [
                    (0, t.jsxs)("div", {
                      className:
                        "bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white",
                      children: [
                        (0, t.jsx)("div", {
                          className: "text-3xl font-bold mb-2",
                          children: "2,847",
                        }),
                        (0, t.jsx)("div", {
                          className: "text-purple-100",
                          children: "Total Members",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white",
                      children: [
                        (0, t.jsx)("div", {
                          className: "text-3xl font-bold mb-2",
                          children: "1,234",
                        }),
                        (0, t.jsx)("div", {
                          className: "text-green-100",
                          children: "Total Topics",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl p-6 text-white",
                      children: [
                        (0, t.jsx)("div", {
                          className: "text-3xl font-bold mb-2",
                          children: "5,678",
                        }),
                        (0, t.jsx)("div", {
                          className: "text-yellow-100",
                          children: "Total Posts",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-6 text-white",
                      children: [
                        (0, t.jsx)("div", {
                          className: "text-3xl font-bold mb-2",
                          children: "156",
                        }),
                        (0, t.jsx)("div", {
                          className: "text-red-100",
                          children: "Online Now",
                        }),
                      ],
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

//# sourceMappingURL=11384df6bea4f2e8.js.map
