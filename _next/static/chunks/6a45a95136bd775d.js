(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    893931: (e) => {
      "use strict";
      e.s({ default: () => a });
      var t = e.i(731636),
        s = e.i(838653);
      function a() {
        let [e, a] = (0, s.useState)(null),
          [r, l] = (0, s.useState)(1250),
          [i, d] = (0, s.useState)(!1),
          o = (e, t) => {
            d(!0),
              setTimeout(() => {
                d(!1), a(null);
              }, 2e3);
          },
          n = (e, t) => (t > 0 ? Math.round((e / t) * 100) : 0);
        return (0, t.jsx)("div", {
          className: "container mx-auto max-w-[100vw]",
          children: (0, t.jsxs)("div", {
            className:
              "min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-950 dark:to-purple-900 pt-16",
            children: [
              (0, t.jsxs)("div", {
                className: "relative dark:bg-gray-950",
                children: [
                  (0, t.jsx)("div", {
                    className: "absolute inset-0 bg-black/20",
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "relative mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16",
                    children: (0, t.jsxs)("div", {
                      className: "text-center",
                      children: [
                        (0, t.jsx)("h1", {
                          className:
                            "text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6",
                          children: "Governance Voting",
                        }),
                        (0, t.jsx)("p", {
                          className:
                            "text-lg sm:text-xl text-purple-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-2",
                          children:
                            "Shape the future of Etherchain through decentralized governance. Vote on proposals and participate in key decisions.",
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2",
                          children: [
                            (0, t.jsxs)("div", {
                              className:
                                "bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "text-xl sm:text-2xl font-bold text-white",
                                  children: r,
                                }),
                                (0, t.jsx)("div", {
                                  className:
                                    "text-sm sm:text-base text-purple-100",
                                  children: "Your Voting Power",
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "text-xl sm:text-2xl font-bold text-white",
                                  children: "3",
                                }),
                                (0, t.jsx)("div", {
                                  className:
                                    "text-sm sm:text-base text-purple-100",
                                  children: "Active Proposals",
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "text-xl sm:text-2xl font-bold text-white",
                                  children: "12",
                                }),
                                (0, t.jsx)("div", {
                                  className:
                                    "text-sm sm:text-base text-purple-100",
                                  children: "Total Votes Cast",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8",
                children: [
                  (0, t.jsxs)("div", {
                    className: "mb-8 sm:mb-12",
                    children: [
                      (0, t.jsxs)("div", {
                        className:
                          "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6",
                        children: [
                          (0, t.jsx)("h2", {
                            className:
                              "text-xl sm:text-2xl font-bold text-gray-900 dark:text-white",
                            children: "Active Proposals",
                          }),
                          (0, t.jsx)("button", {
                            className:
                              "bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors w-full sm:w-auto",
                            children: "Create Proposal",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6",
                        children: [
                          {
                            id: 1,
                            title: "Implement AI-Powered Governance Features",
                            description:
                              "Proposal to integrate AI-driven decision making tools into the governance system, including automated proposal analysis and community sentiment tracking.",
                            category: "Governance",
                            status: "Active",
                            endDate: "2024-02-15",
                            votesFor: 1250,
                            votesAgainst: 320,
                            votesAbstain: 45,
                            totalVotes: 1615,
                            quorum: 2e3,
                            creator: "EtherchainDAO",
                            createdDate: "2024-01-15",
                          },
                          {
                            id: 2,
                            title: "Increase Staking Rewards by 15%",
                            description:
                              "Proposal to boost staking rewards from 8% to 9.2% APY to incentivize more token holders to participate in network security.",
                            category: "Economics",
                            status: "Active",
                            endDate: "2024-02-20",
                            votesFor: 890,
                            votesAgainst: 650,
                            votesAbstain: 120,
                            totalVotes: 1660,
                            quorum: 2e3,
                            creator: "StakingCommittee",
                            createdDate: "2024-01-18",
                          },
                          {
                            id: 3,
                            title: "Launch Cross-Chain Bridge to Polygon",
                            description:
                              "Proposal to deploy a cross-chain bridge connecting Etherchain to Polygon network for improved interoperability and liquidity.",
                            category: "Infrastructure",
                            status: "Active",
                            endDate: "2024-02-25",
                            votesFor: 2100,
                            votesAgainst: 180,
                            votesAbstain: 95,
                            totalVotes: 2375,
                            quorum: 2e3,
                            creator: "BridgeTeam",
                            createdDate: "2024-01-20",
                          },
                        ].map((e) =>
                          (0, t.jsx)(
                            "div",
                            {
                              className:
                                "bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow",
                              children: (0, t.jsxs)("div", {
                                className: "p-4 sm:p-6",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className:
                                      "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "px-3 py-1 rounded-full text-xs font-medium w-fit ".concat(
                                            ((e) => {
                                              switch (e) {
                                                case "Active":
                                                  return "text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-400";
                                                case "Executed":
                                                  return "text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-400";
                                                case "Rejected":
                                                  return "text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-400";
                                                default:
                                                  return "text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-400";
                                              }
                                            })(e.status)
                                          ),
                                        children: e.status,
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "text-sm text-gray-500 dark:text-gray-400",
                                        children: e.category,
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("h3", {
                                    className:
                                      "text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2",
                                    children: e.title,
                                  }),
                                  (0, t.jsx)("p", {
                                    className:
                                      "text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3",
                                    children: e.description,
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "mb-4",
                                    children: [
                                      (0, t.jsxs)("div", {
                                        className:
                                          "flex justify-between text-sm mb-2",
                                        children: [
                                          (0, t.jsx)("span", {
                                            className:
                                              "text-gray-600 dark:text-gray-400",
                                            children: "Progress",
                                          }),
                                          (0, t.jsxs)("span", {
                                            className:
                                              "text-gray-900 dark:text-white font-medium",
                                            children: [
                                              e.totalVotes,
                                              " / ",
                                              e.quorum,
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, t.jsx)("div", {
                                        className:
                                          "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2",
                                        children: (0, t.jsx)("div", {
                                          className:
                                            "bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300",
                                          style: {
                                            width: "".concat(
                                              Math.min(
                                                (e.totalVotes / e.quorum) * 100,
                                                100
                                              ),
                                              "%"
                                            ),
                                          },
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "grid grid-cols-3 gap-2 mb-4",
                                    children: [
                                      (0, t.jsxs)("div", {
                                        className: "text-center",
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className:
                                              "text-green-600 dark:text-green-400 font-semibold text-sm sm:text-base",
                                            children: [
                                              n(e.votesFor, e.totalVotes),
                                              "%",
                                            ],
                                          }),
                                          (0, t.jsx)("div", {
                                            className:
                                              "text-xs text-gray-500 dark:text-gray-400",
                                            children: "For",
                                          }),
                                        ],
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: "text-center",
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className:
                                              "text-red-600 dark:text-red-400 font-semibold text-sm sm:text-base",
                                            children: [
                                              n(e.votesAgainst, e.totalVotes),
                                              "%",
                                            ],
                                          }),
                                          (0, t.jsx)("div", {
                                            className:
                                              "text-xs text-gray-500 dark:text-gray-400",
                                            children: "Against",
                                          }),
                                        ],
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: "text-center",
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className:
                                              "text-yellow-600 dark:text-yellow-400 font-semibold text-sm sm:text-base",
                                            children: [
                                              n(e.votesAbstain, e.totalVotes),
                                              "%",
                                            ],
                                          }),
                                          (0, t.jsx)("div", {
                                            className:
                                              "text-xs text-gray-500 dark:text-gray-400",
                                            children: "Abstain",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className:
                                      "flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 dark:text-gray-400 mb-4 gap-1 sm:gap-0",
                                    children: [
                                      (0, t.jsxs)("span", {
                                        children: ["by ", e.creator],
                                      }),
                                      (0, t.jsxs)("span", {
                                        children: ["Ends ", e.endDate],
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("button", {
                                    onClick: () => a(e),
                                    className:
                                      "w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors",
                                    children: "Vote Now",
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
                  (0, t.jsxs)("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6",
                    children: [
                      (0, t.jsxs)("div", {
                        className:
                          "bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-4 sm:p-6 text-white",
                        children: [
                          (0, t.jsx)("div", {
                            className: "text-2xl sm:text-3xl font-bold mb-2",
                            children: "15",
                          }),
                          (0, t.jsx)("div", {
                            className: "text-sm sm:text-base text-purple-100",
                            children: "Total Proposals",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-4 sm:p-6 text-white",
                        children: [
                          (0, t.jsx)("div", {
                            className: "text-2xl sm:text-3xl font-bold mb-2",
                            children: "8",
                          }),
                          (0, t.jsx)("div", {
                            className: "text-sm sm:text-base text-green-100",
                            children: "Executed",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl p-4 sm:p-6 text-white",
                        children: [
                          (0, t.jsx)("div", {
                            className: "text-2xl sm:text-3xl font-bold mb-2",
                            children: "3",
                          }),
                          (0, t.jsx)("div", {
                            className: "text-sm sm:text-base text-yellow-100",
                            children: "Active",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-4 sm:p-6 text-white",
                        children: [
                          (0, t.jsx)("div", {
                            className: "text-2xl sm:text-3xl font-bold mb-2",
                            children: "4",
                          }),
                          (0, t.jsx)("div", {
                            className: "text-sm sm:text-base text-red-100",
                            children: "Rejected",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e &&
                (0, t.jsx)("div", {
                  className:
                    "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
                  children: (0, t.jsxs)("div", {
                    className:
                      "bg-white dark:bg-gray-900 rounded-xl max-w-md w-full p-4 sm:p-6 mx-4",
                    children: [
                      (0, t.jsx)("h3", {
                        className:
                          "text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4",
                        children: "Vote on Proposal",
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6",
                        children: e.title,
                      }),
                      (0, t.jsxs)("div", {
                        className: "space-y-3 mb-6",
                        children: [
                          (0, t.jsx)("button", {
                            onClick: () => o(e.id, "for"),
                            disabled: i,
                            className:
                              "w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50",
                            children: i ? "Voting..." : "Vote For",
                          }),
                          (0, t.jsx)("button", {
                            onClick: () => o(e.id, "against"),
                            disabled: i,
                            className:
                              "w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50",
                            children: i ? "Voting..." : "Vote Against",
                          }),
                          (0, t.jsx)("button", {
                            onClick: () => o(e.id, "abstain"),
                            disabled: i,
                            className:
                              "w-full bg-yellow-600 text-white py-3 rounded-lg font-medium hover:bg-yellow-700 transition-colors disabled:opacity-50",
                            children: i ? "Voting..." : "Abstain",
                          }),
                        ],
                      }),
                      (0, t.jsx)("button", {
                        onClick: () => a(null),
                        disabled: i,
                        className:
                          "w-full bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded-lg font-medium hover:bg-gray-400 dark:hover:bg-white0 transition-colors disabled:opacity-50",
                        children: "Cancel",
                      }),
                    ],
                  }),
                }),
            ],
          }),
        });
      }
    },
  },
]);

//# sourceMappingURL=029b7cf94b7f6a71.js.map
