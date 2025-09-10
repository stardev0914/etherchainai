(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    324857: (e) => {
      "use strict";
      e.s({ default: () => m });
      var a = e.i(731636),
        t = e.i(688814),
        s = e.i(838653),
        d = e.i(12448),
        r = e.i(55157),
        l = e.i(747047),
        i = e.i(288041),
        n = e.i(744232);
      e.i(435187);
      var c = e.i(266119),
        o = e.i(487568),
        x = e.i(693667);
      function m() {
        let { chainId: e } = (0, c.useAppKitNetworkCore)(),
          [m, h] = (0, s.useState)(1),
          j = (e) => {
            h(m === e ? null : e);
          },
          f = [
            25e3, 18e3, 13e3, 1e4, 8e3, 7e3, 6e3, 5e3, 4e3, 4e3, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0,
          ],
          [u, y] = (0, s.useState)([
            {
              address: "0x1234567890123456789012345678901234567890",
              referrals: 156,
              earnings: 2340.5,
            },
            {
              address: "0x9876543210987654321098765432109876543210",
              referrals: 142,
              earnings: 2130,
            },
            {
              address: "0xabcdef1234567890abcdef1234567890abcdef12",
              referrals: 128,
              earnings: 1920.75,
            },
            {
              address: "0xfedcba0987654321fedcba0987654321fedcba09",
              referrals: 115,
              earnings: 1725.25,
            },
            {
              address: "0x1111111111111111111111111111111111111111",
              referrals: 98,
              earnings: 1470,
            },
            {
              address: "0x2222222222222222222222222222222222222222",
              referrals: 87,
              earnings: 1305.5,
            },
            {
              address: "0x3333333333333333333333333333333333333333",
              referrals: 76,
              earnings: 1140,
            },
            {
              address: "0x4444444444444444444444444444444444444444",
              referrals: 65,
              earnings: 975.25,
            },
            {
              address: "0x5555555555555555555555555555555555555555",
              referrals: 54,
              earnings: 810.75,
            },
            {
              address: "0x6666666666666666666666666666666666666666",
              referrals: 43,
              earnings: 645,
            },
            {
              address: "0x0000000000000000000000000000000000000000",
              referrals: null,
              earnings: null,
            },
            {
              address: "0x0000000000000000000000000000000000000000",
              referrals: null,
              earnings: null,
            },
            {
              address: "0x0000000000000000000000000000000000000000",
              referrals: null,
              earnings: null,
            },
            {
              address: "0x0000000000000000000000000000000000000000",
              referrals: null,
              earnings: null,
            },
            {
              address: "0x0000000000000000000000000000000000000000",
              referrals: null,
              earnings: null,
            },
            {
              address: "0x0000000000000000000000000000000000000000",
              referrals: null,
              earnings: null,
            },
            {
              address: "0x0000000000000000000000000000000000000000",
              referrals: null,
              earnings: null,
            },
            {
              address: "0x0000000000000000000000000000000000000000",
              referrals: null,
              earnings: null,
            },
            {
              address: "0x0000000000000000000000000000000000000000",
              referrals: null,
              earnings: null,
            },
            {
              address: "0x0000000000000000000000000000000000000000",
              referrals: null,
              earnings: null,
            },
          ]);
        r.faCoins,
          r.faShare,
          r.faChartLine,
          r.faGift,
          r.faTrophy,
          r.faRocket,
          r.faShieldAlt,
          r.faUsers;
        let g = async () => {
          let e = new o.JsonRpcProvider(n.rpcUrls[1], 1),
            a = new x.Contract(n.presaleAddr[1], n.presaleAbi, e),
            t = await a.getPresaleUsers(),
            s = [];
          for (let e of t) {
            let t = await a.refCount(e),
              d = await a.refEarnings(e),
              r = {
                address: e,
                referrals: parseInt(new i.BigNumber(t).toString()),
                earnings: parseFloat(
                  new i.BigNumber(d).shiftedBy(-18).toString()
                ),
                isVacant: !1,
              };
            s.push(r);
          }
          if ((s.sort((e, a) => a.referrals - e.referrals), s.length < 20))
            for (let e = s.length; e < 20; e++)
              s.push({
                address: "0x0000000000000000000000000000000000000000",
                referrals: null,
                earnings: null,
                isVacant: !0,
              });
          y(s.slice(0, 19));
        };
        return (
          (0, s.useEffect)(() => {
            g();
          }, [e]),
          (0, a.jsxs)("div", {
            className:
              "jsx-ad943c1d0ad19ec6 min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white ",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "jsx-ad943c1d0ad19ec6 relative overflow-hidden bg-gradient-to-r from-purple-600 from-20% via-blue-600 via-50% to-indigo-700 to-80% dark:from-purple-700 dark:via-blue-700 dark:to-indigo-800",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "jsx-ad943c1d0ad19ec6 absolute inset-0 bg-black/20",
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "jsx-ad943c1d0ad19ec6 relative z-10 container mx-auto px-4 py-20",
                    children: (0, a.jsxs)("div", {
                      className:
                        "jsx-ad943c1d0ad19ec6 text-center max-w-4xl mx-auto",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "jsx-ad943c1d0ad19ec6 flex justify-center mb-6",
                          children: (0, a.jsx)("div", {
                            className:
                              "jsx-ad943c1d0ad19ec6 bg-gradient-to-r from-purple-400 to-pink-400 p-1 rounded-full",
                            children: (0, a.jsx)("div", {
                              className:
                                "jsx-ad943c1d0ad19ec6 bg-white dark:bg-gray-900 px-6 py-2 rounded-full",
                              children: (0, a.jsx)("span", {
                                className:
                                  "jsx-ad943c1d0ad19ec6 text-ethai dark:text-ethai font-bold text-sm",
                                children: "🎯 AFFILIATE PROGRAM 🎯",
                              }),
                            }),
                          }),
                        }),
                        (0, a.jsx)("h3", {
                          className:
                            "jsx-ad943c1d0ad19ec6 text-xl font-semibold mb-4 text-purple-100 dark:text-purple-200",
                          children: "Become an Ambassador",
                        }),
                        (0, a.jsxs)("h1", {
                          className:
                            "jsx-ad943c1d0ad19ec6 text-4xl md:text-6xl font-bold mb-8 text-white",
                          children: [
                            "Earn 10% by Referring Friends to",
                            (0, a.jsx)("span", {
                              className:
                                "jsx-ad943c1d0ad19ec6 block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent",
                              children: "Etherchain",
                            }),
                          ],
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "jsx-ad943c1d0ad19ec6 text-xl text-purple-100 dark:text-purple-200 mb-8 max-w-3xl mx-auto",
                          children:
                            "Join our affiliate program and earn generous commissions for every friend you bring to the Etherchain ecosystem.",
                        }),
                        (0, a.jsx)("a", {
                          href: "/?showref=true",
                          className: "jsx-ad943c1d0ad19ec6",
                          children: (0, a.jsxs)("button", {
                            className:
                              "jsx-ad943c1d0ad19ec6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg",
                            children: [
                              (0, a.jsx)(d.FontAwesomeIcon, {
                                icon: r.faShare,
                                className: "mr-2",
                              }),
                              "GET MY REFERRAL LINK",
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "jsx-ad943c1d0ad19ec6 py-20 bg-white dark:bg-gray-950",
                children: (0, a.jsxs)("div", {
                  className: "jsx-ad943c1d0ad19ec6 container mx-auto px-4",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "jsx-ad943c1d0ad19ec6 text-center mb-16",
                      children: [
                        (0, a.jsx)("h2", {
                          className:
                            "jsx-ad943c1d0ad19ec6 text-4xl font-bold mb-4 text-gray-900 dark:text-white",
                          children: "How to Start Earning",
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "jsx-ad943c1d0ad19ec6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                          children:
                            "Follow these simple steps to start earning commissions with Etherchain",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "jsx-ad943c1d0ad19ec6 max-w-4xl mx-auto",
                      children: (0, a.jsxs)("div", {
                        className:
                          "jsx-ad943c1d0ad19ec6 grid md:grid-cols-3 gap-8",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "jsx-ad943c1d0ad19ec6 bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all duration-300 group shadow-lg relative",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "jsx-ad943c1d0ad19ec6 absolute -top-4 left-8",
                                children: (0, a.jsx)("div", {
                                  className:
                                    "jsx-ad943c1d0ad19ec6 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm",
                                  children: "1",
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "jsx-ad943c1d0ad19ec6 w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
                                children: (0, a.jsx)(d.FontAwesomeIcon, {
                                  icon: r.faShieldAlt,
                                  className: "text-3xl text-white",
                                }),
                              }),
                              (0, a.jsx)("h3", {
                                className:
                                  "jsx-ad943c1d0ad19ec6 text-xl font-bold mb-3 text-gray-900 dark:text-white",
                                children: "Connect Your Wallet",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "jsx-ad943c1d0ad19ec6 text-gray-600 dark:text-gray-400",
                                children:
                                  "Securely connect your crypto wallet to activate your referral dashboard.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "jsx-ad943c1d0ad19ec6 bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all duration-300 group shadow-lg relative",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "jsx-ad943c1d0ad19ec6 absolute -top-4 left-8",
                                children: (0, a.jsx)("div", {
                                  className:
                                    "jsx-ad943c1d0ad19ec6 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm",
                                  children: "2",
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "jsx-ad943c1d0ad19ec6 w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
                                children: (0, a.jsx)(d.FontAwesomeIcon, {
                                  icon: r.faShare,
                                  className: "text-3xl text-white",
                                }),
                              }),
                              (0, a.jsx)("h3", {
                                className:
                                  "jsx-ad943c1d0ad19ec6 text-xl font-bold mb-3 text-gray-900 dark:text-white",
                                children: "Share Your Unique Link",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "jsx-ad943c1d0ad19ec6 text-gray-600 dark:text-gray-400",
                                children:
                                  "Copy your personal referral link and share it with your friends, followers, or community.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "jsx-ad943c1d0ad19ec6 bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all duration-300 group shadow-lg relative",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "jsx-ad943c1d0ad19ec6 absolute -top-4 left-8",
                                children: (0, a.jsx)("div", {
                                  className:
                                    "jsx-ad943c1d0ad19ec6 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm",
                                  children: "3",
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "jsx-ad943c1d0ad19ec6 w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300",
                                children: (0, a.jsx)(d.FontAwesomeIcon, {
                                  icon: r.faCoins,
                                  className: "text-3xl text-white",
                                }),
                              }),
                              (0, a.jsx)("h3", {
                                className:
                                  "jsx-ad943c1d0ad19ec6 text-xl font-bold mb-3 text-gray-900 dark:text-white",
                                children: "Get Paid Instantly",
                              }),
                              (0, a.jsx)("p", {
                                className:
                                  "jsx-ad943c1d0ad19ec6 text-gray-600 dark:text-gray-400",
                                children:
                                  "Earn 10% commission per referral and receive payments directly to your wallet.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "jsx-ad943c1d0ad19ec6 py-20 bg-white dark:bg-gray-950 relative overflow-hidden",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "jsx-ad943c1d0ad19ec6 absolute inset-0 overflow-hidden w-full",
                    children: [
                      (0, a.jsx)("div", {
                        style: {
                          animationDelay: "0s",
                          animationDuration: "3s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute top-10 left-10 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-20",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animationDelay: "1s",
                          animationDuration: "2.5s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute top-20 right-20 w-6 h-6 bg-yellow-400 rounded-full animate-bounce opacity-20",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animationDelay: "2s",
                          animationDuration: "3.5s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute bottom-20 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-bounce opacity-20",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animationDelay: "0.5s",
                          animationDuration: "2.8s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute top-1/3 right-1/3 w-5 h-5 bg-yellow-400 rounded-full animate-bounce opacity-20",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animationDelay: "1.5s",
                          animationDuration: "4s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute top-1/4 left-1/3 text-2xl animate-bounce opacity-10",
                        children: "🏆",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animationDelay: "2.5s",
                          animationDuration: "3.2s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute bottom-1/4 right-1/4 text-xl animate-bounce opacity-10",
                        children: "🥇",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animationDelay: "0.8s",
                          animationDuration: "3.8s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute top-1/2 left-1/6 text-lg animate-bounce opacity-10",
                        children: "🥈",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animationDelay: "0s",
                          animationDuration: "2s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute top-16 left-1/2 text-lg animate-pulse opacity-15",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animationDelay: "1s",
                          animationDuration: "2.5s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute bottom-16 right-1/6 text-sm animate-pulse opacity-15",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animationDelay: "2s",
                          animationDuration: "1.8s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute top-1/3 right-1/6 text-base animate-pulse opacity-15",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animationDelay: "0.5s",
                          animationDuration: "3s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute top-1/2 right-1/3 text-xl animate-pulse opacity-10",
                        children: "📈",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animationDelay: "1.8s",
                          animationDuration: "2.2s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute bottom-1/3 left-1/2 text-lg animate-pulse opacity-10",
                        children: "📊",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full animate-pulse blur-xl",
                      }),
                      (0, a.jsx)("div", {
                        style: { animationDelay: "1s" },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-pulse blur-xl",
                      }),
                      (0, a.jsx)("div", {
                        style: { animationDelay: "2s" },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-r from-pink-400/10 to-yellow-400/10 rounded-full animate-pulse blur-xl",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse",
                      }),
                      (0, a.jsx)("div", {
                        style: { animationDelay: "1s" },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400/20 to-transparent animate-pulse",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animation: "fallStar 8s linear infinite",
                          animationDelay: "0s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute -top-4 left-[5%] text-lg text-yellow-400 opacity-60",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animation: "fallStar 10s linear infinite",
                          animationDelay: "2s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute -top-8 left-[15%] text-sm text-yellow-300 opacity-50",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animation: "fallStar 12s linear infinite",
                          animationDelay: "4s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute -top-12 left-[25%] text-base text-yellow-500 opacity-70",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animation: "fallStar 9s linear infinite",
                          animationDelay: "6s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute -top-6 left-[35%] text-lg text-yellow-400 opacity-60",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animation: "fallStar 11s linear infinite",
                          animationDelay: "1s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute -top-10 left-[45%] text-sm text-yellow-300 opacity-50",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animation: "fallStar 13s linear infinite",
                          animationDelay: "3s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute -top-14 left-[55%] text-base text-yellow-500 opacity-70",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animation: "fallStar 7s linear infinite",
                          animationDelay: "5s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute -top-16 left-[65%] text-lg text-yellow-400 opacity-60",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animation: "fallStar 14s linear infinite",
                          animationDelay: "7s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute -top-20 left-[75%] text-sm text-yellow-300 opacity-50",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animation: "fallStar 8.5s linear infinite",
                          animationDelay: "1.5s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute -top-4 left-[85%] text-lg text-yellow-400 opacity-60",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animation: "fallStar 11.5s linear infinite",
                          animationDelay: "3.5s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute -top-8 left-[95%] text-sm text-yellow-300 opacity-50",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animation: "fallStar 9.5s linear infinite",
                          animationDelay: "5.5s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute -top-12 left-[10%] text-base text-yellow-500 opacity-70",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animation: "fallStar 10.5s linear infinite",
                          animationDelay: "0.5s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute -top-6 left-[20%] text-lg text-yellow-400 opacity-60",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animation: "fallStar 12.5s linear infinite",
                          animationDelay: "2.5s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute -top-10 left-[30%] text-sm text-yellow-300 opacity-50",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animation: "fallStar 8.8s linear infinite",
                          animationDelay: "4.5s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute -top-14 left-[40%] text-base text-yellow-500 opacity-70",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animation: "fallStar 11.8s linear infinite",
                          animationDelay: "6.5s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute -top-16 left-[50%] text-lg text-yellow-400 opacity-60",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animation: "fallStar 9.2s linear infinite",
                          animationDelay: "1.2s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute -top-4 left-[60%] text-base text-yellow-500 opacity-70",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animation: "fallStar 10.8s linear infinite",
                          animationDelay: "3.8s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute -top-8 left-[70%] text-lg text-yellow-400 opacity-60",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animation: "fallStar 12.2s linear infinite",
                          animationDelay: "5.8s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute -top-12 left-[80%] text-sm text-yellow-300 opacity-50",
                        children: "⭐",
                      }),
                      (0, a.jsx)("div", {
                        style: {
                          animation: "fallStar 8.2s linear infinite",
                          animationDelay: "7.2s",
                        },
                        className:
                          "jsx-ad943c1d0ad19ec6 absolute -top-6 left-[90%] text-base text-yellow-500 opacity-70",
                        children: "⭐",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "jsx-ad943c1d0ad19ec6 container mx-auto px-4 relative z-10",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "jsx-ad943c1d0ad19ec6 text-center mb-16",
                        children: [
                          (0, a.jsx)("h2", {
                            className:
                              "jsx-ad943c1d0ad19ec6 text-4xl font-bold mb-4 text-gray-900 dark:text-white",
                            children: "Leaderboard",
                          }),
                          (0, a.jsx)("p", {
                            className:
                              "jsx-ad943c1d0ad19ec6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                            children:
                              "See how you stack up against other affiliates",
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "jsx-ad943c1d0ad19ec6 max-w-7xl lg:max-w-4xl mx-auto overflow-x-scroll lg:overflow-x-hidden",
                        children: (0, a.jsxs)("div", {
                          className:
                            "jsx-ad943c1d0ad19ec6 bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "jsx-ad943c1d0ad19ec6 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4",
                              children: (0, a.jsxs)("div", {
                                className:
                                  "jsx-ad943c1d0ad19ec6 grid grid-cols-5 gap-4 text-white font-semibold",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "jsx-ad943c1d0ad19ec6 text-xs",
                                    children: "Rank",
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "jsx-ad943c1d0ad19ec6 text-xs",
                                    children: "Address",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "jsx-ad943c1d0ad19ec6 text-center text-xs",
                                    children: "Referrals",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "jsx-ad943c1d0ad19ec6 text-center text-xs",
                                    children: "Earnings",
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "jsx-ad943c1d0ad19ec6 text-right text-xs",
                                    children: "Prize",
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "jsx-ad943c1d0ad19ec6 divide-y divide-gray-200 dark:divide-gray-700 overflow-x-auto",
                              children: u.map((e, t) => {
                                let s;
                                return (0, a.jsx)(
                                  "div",
                                  {
                                    className:
                                      "jsx-ad943c1d0ad19ec6 px-4 py-4 transition-all duration-200 hover:bg-white dark:hover:bg-gray-800",
                                    children: (0, a.jsxs)("div", {
                                      className:
                                        "jsx-ad943c1d0ad19ec6 grid grid-cols-5 gap-2 min-w-[600px] lg:min-w-0 lg:gap-4 items-center",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className:
                                            "jsx-ad943c1d0ad19ec6 flex items-center",
                                          children: (0, a.jsx)("span", {
                                            className:
                                              "jsx-ad943c1d0ad19ec6 text-2xl",
                                            children: ((e) => {
                                              switch (e) {
                                                case 1:
                                                  return "🥇";
                                                case 2:
                                                  return "🥈";
                                                case 3:
                                                  return "🥉";
                                                default:
                                                  return "#".concat(e);
                                              }
                                            })(t + 1),
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          className:
                                            "jsx-ad943c1d0ad19ec6 flex items-center",
                                          children: (0, a.jsx)("div", {
                                            className: "jsx-ad943c1d0ad19ec6",
                                            children: (0, a.jsx)("div", {
                                              className:
                                                "jsx-ad943c1d0ad19ec6 " +
                                                "font-mono text-sm ".concat(
                                                  e.isVacant
                                                    ? "text-gray-400 dark:text-gray-500 italic"
                                                    : "text-gray-900 dark:text-white"
                                                ),
                                              children:
                                                ((s = e.address),
                                                ""
                                                  .concat(s.slice(0, 5), "...")
                                                  .concat(s.slice(-4))),
                                            }),
                                          }),
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "jsx-ad943c1d0ad19ec6 text-center",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "jsx-ad943c1d0ad19ec6 " +
                                                "text-lg font-bold ".concat(
                                                  e.isVacant
                                                    ? "text-gray-400 dark:text-gray-500"
                                                    : "text-gray-900 dark:text-white"
                                                ),
                                              children:
                                                null === e.referrals
                                                  ? "-"
                                                  : e.referrals,
                                            }),
                                            (0, a.jsx)("div", {
                                              className:
                                                "jsx-ad943c1d0ad19ec6 text-xs text-gray-500 dark:text-gray-400",
                                              children: "referrals",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "jsx-ad943c1d0ad19ec6 text-center",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "jsx-ad943c1d0ad19ec6 " +
                                                "text-lg font-bold ".concat(
                                                  e.isVacant
                                                    ? "text-gray-400 dark:text-gray-500"
                                                    : "text-green-600 dark:text-green-400"
                                                ),
                                              children:
                                                null === e.earnings
                                                  ? "-"
                                                  : "$".concat(
                                                      e.earnings
                                                        .toFixed(2)
                                                        .toLocaleString()
                                                    ),
                                            }),
                                            (0, a.jsx)("div", {
                                              className:
                                                "jsx-ad943c1d0ad19ec6 text-xs text-gray-500 dark:text-gray-400",
                                              children: "earnings",
                                            }),
                                          ],
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "jsx-ad943c1d0ad19ec6 text-right mr-4",
                                          children: [
                                            (0, a.jsxs)("div", {
                                              className:
                                                "jsx-ad943c1d0ad19ec6 " +
                                                "text-lg font-bold ".concat(
                                                  e.isVacant
                                                    ? "text-gray-400 dark:text-gray-500"
                                                    : "text-green-600 dark:text-green-400"
                                                ),
                                              children: [
                                                "$",
                                                f[t].toLocaleString(),
                                              ],
                                            }),
                                            (0, a.jsx)("div", {
                                              className:
                                                "jsx-ad943c1d0ad19ec6 text-xs text-gray-500 dark:text-gray-400",
                                              children: "prize",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  },
                                  t
                                );
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "jsx-ad943c1d0ad19ec6 bg-white dark:bg-gray-800 px-6 py-4 border-t border-gray-200 dark:border-gray-700",
                              children: (0, a.jsx)("div", {
                                className:
                                  "jsx-ad943c1d0ad19ec6 text-center text-sm text-gray-600 dark:text-gray-400",
                                children:
                                  "Top 20 affiliates this month • Updated every hour",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "jsx-ad943c1d0ad19ec6 py-20 bg-white dark:bg-gray-950",
                children: (0, a.jsxs)("div", {
                  className: "jsx-ad943c1d0ad19ec6 container mx-auto px-4",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "jsx-ad943c1d0ad19ec6 text-center mb-16",
                      children: [
                        (0, a.jsx)("h2", {
                          className:
                            "jsx-ad943c1d0ad19ec6 text-4xl font-bold mb-4 text-gray-900 dark:text-white",
                          children: "Frequently Asked Questions",
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "jsx-ad943c1d0ad19ec6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                          children:
                            "Everything you need to know about the Etherchain affiliate program",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "jsx-ad943c1d0ad19ec6 max-w-4xl mx-auto",
                      children: (0, a.jsxs)("div", {
                        className:
                          "jsx-ad943c1d0ad19ec6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "jsx-ad943c1d0ad19ec6 border-b border-gray-200 dark:border-gray-700",
                            children: [
                              (0, a.jsxs)("button", {
                                onClick: () => j(1),
                                className:
                                  "jsx-ad943c1d0ad19ec6 w-full flex justify-between items-center p-6 text-left hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "jsx-ad943c1d0ad19ec6 text-lg font-semibold text-gray-900 dark:text-white",
                                    children:
                                      "How do I earn from the Etherchain affiliate program?",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "jsx-ad943c1d0ad19ec6 text-2xl font-bold text-ethai dark:text-ethai transition-transform duration-200",
                                    children: 1 === m ? "−" : "+",
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "jsx-ad943c1d0ad19ec6 " +
                                  "overflow-hidden transition-all duration-300 ".concat(
                                    1 === m ? "max-h-96" : "max-h-0"
                                  ),
                                children: (0, a.jsx)("div", {
                                  className: "jsx-ad943c1d0ad19ec6 p-6 pt-0",
                                  children: (0, a.jsx)("p", {
                                    className:
                                      "jsx-ad943c1d0ad19ec6 text-gray-600 dark:text-gray-400 leading-relaxed",
                                    children:
                                      "As an Etherchain affiliate, you'll earn a solid 10% commission paid out in ETH,USDT and ETHAI from every presale purchase made through your referral link. We sweeten the deal even more by offering monetary rewards to our top 10 affiliates each month, with a total reward pool of $50,000. The top performer alone claims an impressive $25,000!",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "jsx-ad943c1d0ad19ec6 border-b border-gray-200 dark:border-gray-700",
                            children: [
                              (0, a.jsxs)("button", {
                                onClick: () => j(2),
                                className:
                                  "jsx-ad943c1d0ad19ec6 w-full flex justify-between items-center p-6 text-left hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "jsx-ad943c1d0ad19ec6 text-lg font-semibold text-gray-900 dark:text-white",
                                    children:
                                      "When and how do I receive my commissions?",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "jsx-ad943c1d0ad19ec6 text-2xl font-bold text-ethai dark:text-ethai transition-transform duration-200",
                                    children: 2 === m ? "−" : "+",
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "jsx-ad943c1d0ad19ec6 " +
                                  "overflow-hidden transition-all duration-300 ".concat(
                                    2 === m ? "max-h-96" : "max-h-0"
                                  ),
                                children: (0, a.jsx)("div", {
                                  className: "jsx-ad943c1d0ad19ec6 p-6 pt-0",
                                  children: (0, a.jsx)("p", {
                                    className:
                                      "jsx-ad943c1d0ad19ec6 text-gray-600 dark:text-gray-400 leading-relaxed",
                                    children:
                                      "Receive your earnings (Referral Bonuses) instantly for each referral. The leaderboard bonus will be paid out after Mainnet Launch. You'll receive commissions 5% in ETH and USDT. Another 5% in ETHAI paid directly to your wallet.",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "jsx-ad943c1d0ad19ec6 border-b border-gray-200 dark:border-gray-700",
                            children: [
                              (0, a.jsxs)("button", {
                                onClick: () => j(3),
                                className:
                                  "jsx-ad943c1d0ad19ec6 w-full flex justify-between items-center p-6 text-left hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "jsx-ad943c1d0ad19ec6 text-lg font-semibold text-gray-900 dark:text-white",
                                    children:
                                      "Is there a limit to the number of referrals I can make?",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "jsx-ad943c1d0ad19ec6 text-2xl font-bold text-ethai dark:text-ethai transition-transform duration-200",
                                    children: 3 === m ? "−" : "+",
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "jsx-ad943c1d0ad19ec6 " +
                                  "overflow-hidden transition-all duration-300 ".concat(
                                    3 === m ? "max-h-96" : "max-h-0"
                                  ),
                                children: (0, a.jsx)("div", {
                                  className: "jsx-ad943c1d0ad19ec6 p-6 pt-0",
                                  children: (0, a.jsxs)("div", {
                                    className:
                                      "jsx-ad943c1d0ad19ec6 text-gray-600 dark:text-gray-400 leading-relaxed space-y-3",
                                    children: [
                                      (0, a.jsx)("p", {
                                        className: "jsx-ad943c1d0ad19ec6",
                                        children:
                                          "Absolutely not - the sky's the limit!",
                                      }),
                                      (0, a.jsx)("p", {
                                        className: "jsx-ad943c1d0ad19ec6",
                                        children:
                                          "We encourage you to share your referral link with as many people as you're connected with.",
                                      }),
                                      (0, a.jsx)("p", {
                                        className: "jsx-ad943c1d0ad19ec6",
                                        children:
                                          "Whether it's friends, family, or colleagues, the more you refer, the more potential rewards you can earn.",
                                      }),
                                      (0, a.jsx)("p", {
                                        className: "jsx-ad943c1d0ad19ec6",
                                        children:
                                          "It's important to note, however, that using your referral link for your own purchases is not permitted.",
                                      }),
                                      (0, a.jsx)("p", {
                                        className: "jsx-ad943c1d0ad19ec6",
                                        children:
                                          "Doing so would result in the forfeiture of any commissions earned from such actions.",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "jsx-ad943c1d0ad19ec6 border-b border-gray-200 dark:border-gray-700",
                            children: [
                              (0, a.jsxs)("button", {
                                onClick: () => j(4),
                                className:
                                  "jsx-ad943c1d0ad19ec6 w-full flex justify-between items-center p-6 text-left hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200",
                                children: [
                                  (0, a.jsx)("span", {
                                    className:
                                      "jsx-ad943c1d0ad19ec6 text-lg font-semibold text-gray-900 dark:text-white",
                                    children: "How do I track my referrals?",
                                  }),
                                  (0, a.jsx)("span", {
                                    className:
                                      "jsx-ad943c1d0ad19ec6 text-2xl font-bold text-ethai dark:text-ethai transition-transform duration-200",
                                    children: 4 === m ? "−" : "+",
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "jsx-ad943c1d0ad19ec6 " +
                                  "overflow-hidden transition-all duration-300 ".concat(
                                    4 === m ? "max-h-96" : "max-h-0"
                                  ),
                                children: (0, a.jsx)("div", {
                                  className: "jsx-ad943c1d0ad19ec6 p-6 pt-0",
                                  children: (0, a.jsx)("p", {
                                    className:
                                      "jsx-ad943c1d0ad19ec6 text-gray-600 dark:text-gray-400 leading-relaxed",
                                    children:
                                      "You're able to track your referrals in our referral dashboard. Connect your wallet to access real-time statistics and earnings.",
                                  }),
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
              (0, a.jsx)("div", {
                className:
                  "jsx-ad943c1d0ad19ec6 py-20 bg-white dark:bg-gray-950",
                children: (0, a.jsxs)("div", {
                  className:
                    "jsx-ad943c1d0ad19ec6 container mx-auto px-4 text-center",
                  children: [
                    (0, a.jsx)("h2", {
                      className:
                        "jsx-ad943c1d0ad19ec6 text-4xl font-bold mb-6 text-gray-900 dark:text-white",
                      children: "Ready to Start Earning?",
                    }),
                    (0, a.jsx)("p", {
                      className:
                        "jsx-ad943c1d0ad19ec6 text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto",
                      children:
                        "Join thousands of successful affiliates who are already earning with Etherchain. Start your journey today!",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "jsx-ad943c1d0ad19ec6 flex flex-col sm:flex-row gap-4 justify-center",
                      children: [
                        (0, a.jsx)("a", {
                          href: "/?showref=true",
                          className: "jsx-ad943c1d0ad19ec6",
                          children: (0, a.jsxs)(l.default, {
                            variant: 1,
                            className:
                              " text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg",
                            children: [
                              (0, a.jsx)(d.FontAwesomeIcon, {
                                icon: r.faShare,
                                className: "mr-2",
                              }),
                              "Get Started Now",
                            ],
                          }),
                        }),
                        (0, a.jsxs)(l.default, {
                          variant: 2,
                          className:
                            "bg-white dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-800 text-gray-900 dark:text-white font-bold py-4 px-8 rounded-xl border border-gray-200 dark:border-gray-600 transition-all duration-300 shadow-lg",
                          children: [
                            (0, a.jsx)(d.FontAwesomeIcon, {
                              icon: r.faUsers,
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
              (0, a.jsx)(t.default, {
                id: "ad943c1d0ad19ec6",
                children:
                  "@keyframes fallStar{0%{opacity:0;transform:translateY(-50px)rotate(0)}10%{opacity:.6}90%{opacity:.6}to{opacity:0;transform:translateY(calc(100vh + 50px))rotate(360deg)}}",
              }),
            ],
          })
        );
      }
    },
  },
]);

//# sourceMappingURL=87f0b89fe347ac21.js.map
