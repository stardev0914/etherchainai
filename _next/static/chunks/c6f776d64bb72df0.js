(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    799246: (e) => {
      "use strict";
      e.s({ default: () => b });
      var a = e.i(731636),
        s = e.i(688814),
        t = e.i(838653),
        d = e.i(12448),
        r = e.i(55157),
        i = e.i(744232);
      e.i(435187);
      var n = e.i(266119),
        l = e.i(100615),
        o = e.i(171096),
        c = e.i(693667),
        x = e.i(815751);
      function b() {
        let [e, b] = (0, t.useState)(!1),
          [f, m] = (0, t.useState)(!1),
          [h, j] = (0, t.useState)(""),
          [u, g] = (0, t.useState)(!1),
          { walletProvider: p } = (0, o.useAppKitProvider)("eip155"),
          { chainId: y } = (0, l.useAppKitNetwork)(),
          { address: w, isConnected: N } = (0, n.useAppKitAccount)(),
          k = async (e) => {
            if ((e.preventDefault(), !N))
              return void j("Please connect your wallet");
            if (!w.startsWith("0x") || 42 !== w.length)
              return void j("Please enter a valid Ethereum address (0x...)");
            b(!0), j("");
            try {
              let e = new x.BrowserProvider(p),
                a = await e.getSigner(),
                s = new c.Contract(i.faucetAddress[1], i.faucetAbi, a),
                t = await s.requestTokens();
              await t.wait();
            } catch (e) {
              j(e.message);
            } finally {
              b(!1);
            }
          },
          v = async () => {
            if (!N) return !1;
            let e = new x.BrowserProvider(p),
              a = new c.Contract(i.faucetAddress[1], i.faucetAbi, e);
            g(await a.claimed(w));
          };
        return (
          (0, t.useEffect)(() => {
            v();
          }, [N, y, w]),
          (0, a.jsxs)("div", {
            className:
              "jsx-8b04d616504dfbaf min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white  flex justify-center items-center",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "jsx-8b04d616504dfbaf grid items-center mx-auto max-w-2xl gap-6 p-6 position-relative",
                children: [
                  (0, a.jsxs)("h1", {
                    className:
                      "jsx-8b04d616504dfbaf text-center font-semibold text-5xl",
                    children: [
                      "Etherchain",
                      " ",
                      (0, a.jsx)("span", {
                        className:
                          "jsx-8b04d616504dfbaf bg-blue-600 text-white uppercase px-2 rounded",
                        children: "Faucet",
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "jsx-8b04d616504dfbaf rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50 shadow-lg",
                    children: (0, a.jsxs)("div", {
                      className: "jsx-8b04d616504dfbaf p-6 space-y-4",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "jsx-8b04d616504dfbaf flex items-center mb-4",
                          children: [
                            (0, a.jsx)(d.FontAwesomeIcon, {
                              icon: r.faCoins,
                              className:
                                "text-blue-600 dark:text-blue-400 text-xl mr-3",
                            }),
                            (0, a.jsx)("p", {
                              className:
                                "jsx-8b04d616504dfbaf text-xl font-semibold text-gray-900 dark:text-white",
                              children: "Get Real Tokens",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("ul", {
                          className:
                            "jsx-8b04d616504dfbaf text-sm text-gray-600 dark:text-gray-400 space-y-2 [&>li]:ml-4 list-disc",
                          children: [
                            (0, a.jsx)("li", {
                              className: "jsx-8b04d616504dfbaf",
                              children:
                                "Etherchain Real Tokens can be claimed.",
                            }),
                            (0, a.jsx)("li", {
                              className: "jsx-8b04d616504dfbaf",
                              children: "Maximum 5 ETHAI tokens per Wallet.",
                            }),
                            (0, a.jsx)("li", {
                              className: "jsx-8b04d616504dfbaf",
                              children:
                                "Tokens are sent directly to your wallet address.",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("form", {
                          onSubmit: k,
                          className: "jsx-8b04d616504dfbaf space-y-4",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "jsx-8b04d616504dfbaf space-y-2",
                              children: [
                                (0, a.jsxs)("label", {
                                  htmlFor: "address",
                                  className:
                                    "jsx-8b04d616504dfbaf text-sm font-medium flex items-center text-gray-900 dark:text-white",
                                  children: [
                                    (0, a.jsx)(d.FontAwesomeIcon, {
                                      icon: r.faWallet,
                                      className:
                                        "mr-2 text-gray-500 dark:text-gray-400",
                                    }),
                                    "Wallet Address",
                                  ],
                                }),
                                (0, a.jsx)("input", {
                                  id: "address",
                                  placeholder:
                                    "Enter Your Wallet Address (0x...)",
                                  value: w,
                                  onChange: (e) => setAddress(e.target.value),
                                  disabled: e || !v(),
                                  className:
                                    "jsx-8b04d616504dfbaf flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-3 py-2 text-base shadow-sm transition-colors placeholder:text-gray-500 dark:placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 text-gray-900 dark:text-white",
                                }),
                              ],
                            }),
                            h &&
                              (0, a.jsxs)("div", {
                                className:
                                  "jsx-8b04d616504dfbaf flex items-center text-red-600 dark:text-red-400 text-sm",
                                children: [
                                  (0, a.jsx)(d.FontAwesomeIcon, {
                                    icon: r.faExclamationTriangle,
                                    className: "mr-2",
                                  }),
                                  h,
                                ],
                              }),
                            f &&
                              (0, a.jsxs)("div", {
                                className:
                                  "jsx-8b04d616504dfbaf flex items-center text-green-600 dark:text-green-400 text-sm",
                                children: [
                                  (0, a.jsx)(d.FontAwesomeIcon, {
                                    icon: r.faCheckCircle,
                                    className: "mr-2",
                                  }),
                                  "Success! 5 ETHAI tokens have been sent to your wallet.",
                                ],
                              }),
                            (0, a.jsx)("button", {
                              disabled: e || u,
                              type: "submit",
                              className:
                                "jsx-8b04d616504dfbaf " +
                                "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 h-10 rounded-md px-8 w-full ".concat(
                                  e || !v()
                                    ? "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                                    : "TURBOPACK unreachable"
                                ),
                              children: u
                                ? "You already claimed your tokens"
                                : e
                                ? (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsx)(d.FontAwesomeIcon, {
                                        icon: r.faSpinner,
                                        className: "animate-spin",
                                      }),
                                      "Processing...",
                                    ],
                                  })
                                : (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsx)(d.FontAwesomeIcon, {
                                        icon: r.faCoins,
                                      }),
                                      "Send 5 ETHAI",
                                    ],
                                  }),
                            }),
                          ],
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "jsx-8b04d616504dfbaf text-sm text-gray-600 dark:text-gray-400",
                          children:
                            "You can use real ETHAI tokens to conduct  transactions, deploy smart contracts, or perform other on-chain activities.",
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "jsx-8b04d616504dfbaf grid md:grid-cols-2 gap-4 mt-6",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "jsx-8b04d616504dfbaf bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm",
                        children: [
                          (0, a.jsx)("h3", {
                            className:
                              "jsx-8b04d616504dfbaf text-lg font-semibold text-gray-900 dark:text-white mb-2",
                            children: "How to Use",
                          }),
                          (0, a.jsxs)("ul", {
                            className:
                              "jsx-8b04d616504dfbaf text-sm text-gray-600 dark:text-gray-400 space-y-1",
                            children: [
                              (0, a.jsx)("li", {
                                className: "jsx-8b04d616504dfbaf",
                                children:
                                  "• Connect your wallet to the website",
                              }),
                              (0, a.jsx)("li", {
                                className: "jsx-8b04d616504dfbaf",
                                children: '• Click "Send 5 ETHAI"',
                              }),
                              (0, a.jsx)("li", {
                                className: "jsx-8b04d616504dfbaf",
                                children: "• Approve the transaction",
                              }),
                              (0, a.jsx)("li", {
                                className: "jsx-8b04d616504dfbaf",
                                children: "• Wait for confirmation",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "jsx-8b04d616504dfbaf bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm",
                        children: [
                          (0, a.jsx)("h3", {
                            className:
                              "jsx-8b04d616504dfbaf text-lg font-semibold text-gray-900 dark:text-white mb-2",
                            children: "Testnet Info",
                          }),
                          (0, a.jsxs)("ul", {
                            className:
                              "jsx-8b04d616504dfbaf text-sm text-gray-600 dark:text-gray-400 space-y-1",
                            children: [
                              (0, a.jsx)("li", {
                                className: "jsx-8b04d616504dfbaf",
                                children: "• Network: Etherchain Ai",
                              }),
                              (0, a.jsx)("li", {
                                className: "jsx-8b04d616504dfbaf",
                                children:
                                  "• RPC URL: https://testnet.rpc.etherchain.com",
                              }),
                              (0, a.jsx)("li", {
                                className: "jsx-8b04d616504dfbaf",
                                children: "• Chain ID: 1337",
                              }),
                              (0, a.jsx)("li", {
                                className: "jsx-8b04d616504dfbaf",
                                children: "• Currency: ETHAI",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "jsx-8b04d616504dfbaf animation-wrapper",
                    children: (0, a.jsx)("div", {
                      className: "jsx-8b04d616504dfbaf animation-dot",
                    }),
                  }),
                ],
              }),
              (0, a.jsx)(s.default, {
                id: "8b04d616504dfbaf",
                children:
                  ".animation-wrapper.jsx-8b04d616504dfbaf{pointer-events:none;z-index:-1;width:100%;height:100%;position:absolute;top:0;left:0}.animation-dot.jsx-8b04d616504dfbaf{background:rgba(59,130,246,.5);border-radius:50%;width:4px;height:4px;animation:6s ease-in-out infinite float;position:absolute}@keyframes float{0%,to{opacity:0;transform:translateY(0)translate(0)}10%{opacity:1}90%{opacity:1}to{opacity:0;transform:translateY(-100px)translate(100px)}}.animation-dot.jsx-8b04d616504dfbaf:first-child{animation-delay:0s;top:20%;left:10%}.animation-dot.jsx-8b04d616504dfbaf:nth-child(2){animation-delay:2s;top:60%;left:80%}.animation-dot.jsx-8b04d616504dfbaf:nth-child(3){animation-delay:4s;top:80%;left:20%}",
              }),
            ],
          })
        );
      }
    },
  },
]);

//# sourceMappingURL=6589d5fd3a36ade0.js.map
