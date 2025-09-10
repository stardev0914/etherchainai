(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    320972: (e) => {
      "use strict";
      e.s({ default: () => d });
      var t = e.i(731636),
        a = e.i(838653),
        r = e.i(12448),
        s = e.i(55157),
        l = e.i(747047);
      function d() {
        let [e, d] = (0, a.useState)(!0),
          [i, o] = (0, a.useState)(() => {
            {
              let e = localStorage.getItem("etherchain_participants");
              return e ? parseInt(e, 10) : 15420;
            }
          }),
          [n, c] = (0, a.useState)({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          });
        (0, a.useEffect)(() => {
          let e = setTimeout(() => {
              d(!1);
            }, 2e3),
            t = setInterval(() => {
              let e = new Date().getTime(),
                t = new Date("2025-12-01T00:00:00").getTime() - e;
              t > 0
                ? c({
                    days: Math.floor(t / 864e5),
                    hours: Math.floor((t % 864e5) / 36e5),
                    minutes: Math.floor((t % 36e5) / 6e4),
                    seconds: Math.floor((t % 6e4) / 1e3),
                  })
                : c({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }, 1e3),
            a = setInterval(() => {
              o((e) => {
                let t = e + Math.floor(3 * Math.random()) + 1;
                return (
                  localStorage.setItem("etherchain_participants", t.toString()),
                  t
                );
              });
            }, 5e3);
          return () => {
            clearTimeout(e), clearInterval(t), clearInterval(a);
          };
        }, []);
        let x = [
          {
            icon: s.faTrophy,
            title: "$200,000 Prize",
            description: "The main prize is $200,000 in Etherchain tokens",
          },
          {
            icon: s.faUsers,
            title: "Community",
            description:
              "Join the Etherchain community and benefit from the revolution",
          },
          {
            icon: s.faRocket,
            title: "Early Access",
            description: "Exclusive access to new features and beta tests",
          },
          {
            icon: s.faShieldAlt,
            title: "Secure & Fair",
            description:
              "Transparent and fair drawing with blockchain verification",
          },
        ];
        return (0, t.jsxs)("div", {
          className:
            "min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white ",
          children: [
            (0, t.jsxs)("div", {
              className: "relative overflow-hidden",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-br from-blue-100/50 via-purple-100/50 to-indigo-100/50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-indigo-900/20",
                }),
                (0, t.jsx)("div", {
                  className: "absolute inset-0 opacity-30",
                  style: {
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                  },
                }),
                (0, t.jsx)("div", {
                  className: "relative z-10 container mx-auto px-4 py-20",
                  children: (0, t.jsxs)("div", {
                    className: "text-center max-w-4xl mx-auto",
                    children: [
                      (0, t.jsx)("div", {
                        className: "flex justify-center mb-6",
                        children: (0, t.jsx)("div", {
                          className:
                            "bg-gradient-to-r from-yellow-400 to-orange-500 p-1 rounded-full",
                          children: (0, t.jsx)("div", {
                            className:
                              "bg-white dark:bg-gray-900 px-6 py-2 rounded-full",
                            children: (0, t.jsx)("span", {
                              className:
                                "text-yellow-600 dark:text-yellow-400 font-bold text-sm",
                              children: "🎉 GIVEAWAY ACTIVE 🎉",
                            }),
                          }),
                        }),
                      }),
                      (0, t.jsx)("h1", {
                        className:
                          "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 dark:from-yellow-400 dark:via-orange-500 dark:to-red-500 bg-clip-text text-transparent",
                        children: "Win $200,000",
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "text-xl md:text-2xl text-gray-900 dark:text-gray-300 mb-8 max-w-3xl mx-auto",
                        children:
                          "Join the biggest Etherchain giveaway of all time! Be part of the decentralized AI and blockchain technology revolution.",
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "grid grid-cols-4 gap-4 max-w-md mx-auto mb-8",
                        children: Object.entries(n).map((e) => {
                          let [a, r] = e;
                          return (0, t.jsxs)(
                            "div",
                            {
                              className:
                                "bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow-lg",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "text-2xl font-bold text-yellow-600 dark:text-yellow-400",
                                  children: r.toString().padStart(2, "0"),
                                }),
                                (0, t.jsx)("div", {
                                  className:
                                    "text-xs text-gray-600 dark:text-gray-400 uppercase",
                                  children: a,
                                }),
                              ],
                            },
                            a
                          );
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "flex justify-center items-center gap-8 mb-12",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "text-center",
                            children: [
                              (0, t.jsx)("div", {
                                className:
                                  "text-3xl font-bold text-blue-600 dark:text-blue-400",
                                children: i.toLocaleString(),
                              }),
                              (0, t.jsx)("div", {
                                className:
                                  "text-sm text-gray-600 dark:text-gray-400",
                                children: "Participants",
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: "w-px h-12 bg-gray-300 dark:bg-gray-600",
                          }),
                          (0, t.jsxs)("div", {
                            className: "text-center",
                            children: [
                              (0, t.jsx)("div", {
                                className:
                                  "text-3xl font-bold text-green-600 dark:text-green-400",
                                children: "$200,000",
                              }),
                              (0, t.jsx)("div", {
                                className:
                                  "text-sm text-gray-600 dark:text-gray-400",
                                children: "Grand Prize",
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: "w-px h-12 bg-gray-300 dark:bg-gray-600",
                          }),
                          (0, t.jsxs)("div", {
                            className: "text-center",
                            children: [
                              (0, t.jsx)("div", {
                                className:
                                  "text-3xl font-bold text-ethai dark:text-ethai",
                                children: "100",
                              }),
                              (0, t.jsx)("div", {
                                className:
                                  "text-sm text-gray-600 dark:text-gray-400",
                                children: "Winners",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("button", {
                        className:
                          "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg",
                        children: [
                          (0, t.jsx)(r.FontAwesomeIcon, {
                            icon: s.faGift,
                            className: "mr-2",
                          }),
                          "Enter Now",
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "py-20 bg-gray-100/50 dark:bg-gray-900/30",
              children: (0, t.jsxs)("div", {
                className: "container mx-auto px-4",
                children: [
                  (0, t.jsxs)("div", {
                    className: "text-center mb-16",
                    children: [
                      (0, t.jsx)("h2", {
                        className:
                          "text-4xl font-bold mb-4 text-gray-900 dark:text-white",
                        children: "Why Etherchain?",
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "text-xl text-gray-900 dark:text-gray-400 max-w-3xl mx-auto",
                        children:
                          "Discover the future of decentralized AI and become part of a revolutionary technology",
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: x.map((e, a) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          className:
                            "bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all duration-300 group shadow-lg",
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300",
                              children: (0, t.jsx)(r.FontAwesomeIcon, {
                                icon: e.icon,
                                className: "text-2xl text-white",
                              }),
                            }),
                            (0, t.jsx)("h3", {
                              className:
                                "text-xl font-bold mb-2 text-gray-900 dark:text-white",
                              children: e.title,
                            }),
                            (0, t.jsx)("p", {
                              className: "text-gray-600 dark:text-gray-300",
                              children: e.description,
                            }),
                          ],
                        },
                        a
                      )
                    ),
                  }),
                ],
              }),
            }),
            (0, t.jsx)("div", {
              className: "py-20",
              children: (0, t.jsxs)("div", {
                className: "container mx-auto px-4",
                children: [
                  (0, t.jsxs)("div", {
                    className: "text-center mb-16",
                    children: [
                      (0, t.jsx)("h2", {
                        className:
                          "text-4xl font-bold mb-4 text-gray-900 dark:text-white",
                        children: "Prizes",
                      }),
                      (0, t.jsx)("p", {
                        className: "text-xl text-gray-900 dark:text-gray-300",
                        children: "Over $200,000 in prizes to win",
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto",
                    children: [
                      {
                        place: "1.",
                        amount: "$100,000",
                        description: "Grand Prize",
                      },
                      {
                        place: "2.",
                        amount: "$25,000",
                        description: "Second Place",
                      },
                      {
                        place: "3.",
                        amount: "$10,000",
                        description: "Third Place",
                      },
                      {
                        place: "4-10",
                        amount: "$1,000",
                        description: "Top 10 Winners",
                      },
                      {
                        place: "11-100",
                        amount: "$100",
                        description: "Top 100 Winners",
                      },
                    ].map((e, a) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          className:
                            "bg-gradient-to-br rounded-xl p-6 text-center border shadow-lg ".concat(
                              0 === a
                                ? "from-yellow-100/80 to-orange-100/80 border-yellow-300 dark:from-yellow-400/20 dark:to-orange-500/20 dark:border-yellow-500/50"
                                : "from-white/80 to-gray-50/80 border-gray-200 dark:from-gray-800/50 dark:to-gray-700/50 dark:border-gray-600"
                            ),
                          children: [
                            (0, t.jsx)("div", {
                              className: "text-4xl font-bold mb-2 ".concat(
                                0 === a
                                  ? "text-yellow-600 dark:text-yellow-400"
                                  : "text-blue-600 dark:text-blue-400"
                              ),
                              children: e.place,
                            }),
                            (0, t.jsx)("div", {
                              className: "text-2xl font-bold mb-2 ".concat(
                                0 === a
                                  ? "text-yellow-600 dark:text-yellow-400"
                                  : "text-gray-900 dark:text-white"
                              ),
                              children: e.amount,
                            }),
                            (0, t.jsx)("div", {
                              className: "text-gray-600 dark:text-gray-400",
                              children: e.description,
                            }),
                            0 === a &&
                              (0, t.jsx)("div", {
                                className: "mt-4",
                                children: (0, t.jsx)(r.FontAwesomeIcon, {
                                  icon: s.faStar,
                                  className:
                                    "text-yellow-500 dark:text-yellow-400 text-xl",
                                }),
                              }),
                          ],
                        },
                        a
                      )
                    ),
                  }),
                ],
              }),
            }),
            (0, t.jsx)("div", {
              className: "py-20 bg-gray-100/50 dark:bg-gray-900/30",
              children: (0, t.jsxs)("div", {
                className: "container mx-auto px-4",
                children: [
                  (0, t.jsxs)("div", {
                    className: "text-center mb-12",
                    children: [
                      (0, t.jsx)("h2", {
                        className:
                          "text-4xl font-bold mb-4 text-gray-900 dark:text-white",
                        children: "How to Enter",
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "text-xl text-gray-900 dark:text-gray-300 mb-8",
                        children:
                          "Fill out the form and increase your chances of winning through various actions",
                      }),
                      (0, t.jsxs)("div", {
                        className: "flex flex-wrap justify-center gap-4 mb-8",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "flex items-center gap-2 bg-white/80 dark:bg-gray-900/50 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm",
                            children: [
                              (0, t.jsx)(r.FontAwesomeIcon, {
                                icon: s.faCheckCircle,
                                className: "text-green-500 dark:text-green-400",
                              }),
                              (0, t.jsx)("span", {
                                className:
                                  "text-sm text-gray-900 dark:text-gray-300",
                                children: "Connect Wallet",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "flex items-center gap-2 bg-white/80 dark:bg-gray-900/50 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm",
                            children: [
                              (0, t.jsx)(r.FontAwesomeIcon, {
                                icon: s.faCheckCircle,
                                className: "text-green-500 dark:text-green-400",
                              }),
                              (0, t.jsx)("span", {
                                className:
                                  "text-sm text-gray-900 dark:text-gray-300",
                                children: "Follow Social Media",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "flex items-center gap-2 bg-white/80 dark:bg-gray-900/50 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm",
                            children: [
                              (0, t.jsx)(r.FontAwesomeIcon, {
                                icon: s.faCheckCircle,
                                className: "text-green-500 dark:text-green-400",
                              }),
                              (0, t.jsx)("span", {
                                className:
                                  "text-sm text-gray-900 dark:text-gray-300",
                                children: "Join Community",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "max-w-4xl mx-auto",
                    children: e
                      ? (0, t.jsxs)("div", {
                          className:
                            "bg-white/80 dark:bg-gray-900/50 rounded-xl p-12 text-center border border-gray-200 dark:border-gray-700 shadow-lg",
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4",
                            }),
                            (0, t.jsx)("p", {
                              className: "text-gray-600 dark:text-gray-400",
                              children: "Loading giveaway...",
                            }),
                          ],
                        })
                      : (0, t.jsxs)("div", {
                          className:
                            "bg-white/80 dark:bg-gray-900/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl",
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "bg-gradient-to-r from-blue-600 to-purple-600 p-4",
                              children: (0, t.jsxs)("h3", {
                                className:
                                  "text-xl font-bold text-center text-white",
                                children: [
                                  (0, t.jsx)(r.FontAwesomeIcon, {
                                    icon: s.faGift,
                                    className: "mr-2",
                                  }),
                                  "Etherchain 200K Giveaway",
                                ],
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: "h-[600px]",
                              children: (0, t.jsx)("iframe", {
                                src: "https://gleam.io/9f42w/etherchain-100000-giveaway",
                                frameBorder: "0",
                                allowFullScreen: !0,
                                className: "w-full h-full",
                                title: "Etherchain Giveaway",
                              }),
                            }),
                          ],
                        }),
                  }),
                ],
              }),
            }),
            (0, t.jsx)("div", {
              className:
                "py-20 bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-900/20 dark:to-purple-900/20",
              children: (0, t.jsxs)("div", {
                className: "container mx-auto px-4 text-center",
                children: [
                  (0, t.jsx)("h2", {
                    className:
                      "text-4xl font-bold mb-6 text-gray-900 dark:text-white",
                    children: "Ready for the Future?",
                  }),
                  (0, t.jsx)("p", {
                    className:
                      "text-xl text-gray-900 dark:text-gray-300 mb-8 max-w-2xl mx-auto",
                    children:
                      "Become part of the Etherchain revolution and win your share of $200,000! The future of decentralized AI awaits you.",
                  }),
                  (0, t.jsxs)("div", {
                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                    children: [
                      (0, t.jsxs)(l.default, {
                        variant: 1,
                        className:
                          "text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg",
                        children: [
                          (0, t.jsx)(r.FontAwesomeIcon, {
                            icon: s.faGift,
                            className: "mr-2",
                          }),
                          "Enter Now",
                        ],
                      }),
                      (0, t.jsxs)(l.default, {
                        variant: 2,
                        className:
                          "bg-white/80 dark:bg-gray-900/50 hover:bg-gray-100/80 dark:hover:bg-gray-700/50 text-gray-900 dark:text-white font-bold py-4 px-8 rounded-full border border-gray-200 dark:border-gray-600 transition-all duration-300 shadow-lg",
                        children: [
                          (0, t.jsx)(r.FontAwesomeIcon, {
                            icon: s.faPlay,
                            className: "mr-2",
                          }),
                          "Learn More",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, t.jsx)("div", {
              className:
                "py-12 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800",
              children: (0, t.jsx)("div", {
                className: "container mx-auto px-4 text-center",
                children: (0, t.jsxs)("div", {
                  className: "grid md:grid-cols-3 gap-8 max-w-4xl mx-auto",
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("h4", {
                          className:
                            "text-lg font-bold mb-2 text-gray-900 dark:text-white",
                          children: "Terms & Conditions",
                        }),
                        (0, t.jsx)("p", {
                          className: "text-sm text-gray-600 dark:text-gray-400",
                          children:
                            "Must be 18+ to enter. Winners will be notified via email.",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("h4", {
                          className:
                            "text-lg font-bold mb-2 text-gray-900 dark:text-white",
                          children: "Fair & Transparent",
                        }),
                        (0, t.jsx)("p", {
                          className: "text-sm text-gray-600 dark:text-gray-400",
                          children:
                            "All winners are selected through blockchain verification.",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("h4", {
                          className:
                            "text-lg font-bold mb-2 text-gray-900 dark:text-white",
                          children: "Support",
                        }),
                        (0, t.jsx)("p", {
                          className: "text-sm text-gray-600 dark:text-gray-400",
                          children:
                            "Questions? Contact us via Telegram or Discord.",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
  },
]);

//# sourceMappingURL=bce10a14315c39bf.js.map
