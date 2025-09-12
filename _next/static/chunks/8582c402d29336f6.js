(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    679431: (e) => {
      "use strict";
      e.s({ default: () => d }, 679431);
      var n = e.i(731636),
        t = e.i(838653),
        i = e.i(747047);
      let a = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 768,
          [n, i] = (0, t.useState)(!1);
        return (
          (0, t.useEffect)(() => {
            let n = () => {
              i(window.innerWidth < e);
            };
            return (
              n(),
              window.addEventListener("resize", n),
              () => window.removeEventListener("resize", n)
            );
          }, [e]),
          n
        );
      };
      var s = e.i(712568),
        o = e.i(12448),
        r = e.i(55157);
      function l(e) {
        let { index: i, question: a, answer: l, open: c, onToggle: d } = e,
          [h, u] = (0, t.useState)(!1);
        (0, t.useEffect)(() => {
          u(c === i);
        }, [c, i]);
        let m = () => {
          d ? d(i) : u(!h);
        };
        return (0, n.jsxs)("div", {
          className: "flex flex-row w-full",
          children: [
            (0, n.jsx)("div", {
              className: "hidden lg:flex items-start mr-1 w-1/12",
              children: (0, n.jsx)("div", {
                className:
                  "bg-white dark:bg-gray-900 rounded-lg shadow-md p-2 border border-gray-200 dark:border-gray-700",
                children: (0, n.jsx)(s.default, {
                  src: "/logo_alpha.webp",
                  className: "rounded-full",
                  alt: "FAQ",
                  width: 150,
                  height: 150,
                }),
              }),
            }),
            (0, n.jsx)("div", {
              className:
                "bg-white dark:bg-[#0B101C] p-4 md:p-6 rounded-lg shadow-md flex flex-row w-full lg:w-11/12 border border-gray-200 dark:border-gray-700",
              children: h
                ? (0, n.jsxs)("div", {
                    className:
                      "flex flex-row items-center justify-between w-full",
                    children: [
                      (0, n.jsxs)("div", {
                        children: [
                          (0, n.jsx)("h3", {
                            className:
                              "text-lg md:text-xl font-semibold mb-4 text-gray-900 dark:text-white",
                            children: a,
                          }),
                          (0, n.jsx)("p", {
                            className: "text-gray-600 dark:text-gray-300",
                            children: l,
                          }),
                        ],
                      }),
                      (0, n.jsx)(o.FontAwesomeIcon, {
                        icon: r.faChevronUp,
                        className:
                          "text-gray-600 dark:text-gray-300 self-end cursor-pointer",
                        size: "lg",
                        onClick: m,
                        role: "button",
                      }),
                    ],
                  })
                : (0, n.jsxs)("div", {
                    className:
                      "flex flex-row items-center justify-between w-full",
                    children: [
                      (0, n.jsx)("h3", {
                        className:
                          "text-base md:text-lg text-gray-900 dark:text-white",
                        children: a,
                      }),
                      (0, n.jsx)(o.FontAwesomeIcon, {
                        icon: r.faChevronDown,
                        className:
                          "text-gray-600 dark:text-gray-300 self-end cursor-pointer",
                        size: "lg",
                        onClick: m,
                        role: "button",
                      }),
                    ],
                  }),
            }),
          ],
        });
      }
      function c() {
        let e = a(),
          [s, o] = (0, t.useState)("General"),
          [r, c] = (0, t.useState)(-1);
        (0, t.useEffect)(() => {
          c(e ? -1 : 0);
        }, [e]);
        let d = (e) => {
          c(r === e ? null : e);
        };
        return (0, n.jsxs)("div", {
          className: "w-full",
          children: [
            (0, n.jsx)("div", {
              className: "flex flex-row justify-center space-x-1 mb-5 w-full",
              children: [
                { id: "General", label: "General" },
                { id: "Dashboard", label: "Dashboard" },
                { id: "Other", label: "Other" },
              ].map((t) =>
                (0, n.jsx)(
                  i.default,
                  {
                    variant: 2,
                    className:
                      "text-xs md:text-sm lg:text-lg sm:mr-2 mr-0 py-2 md:py-4 px-2 md:px-4 lg:px-8 font-bold ".concat(
                        s === t.id
                          ? "bg-purple-600 dark:bg-white dark:text-white text-purple-900"
                          : "text-ethai dark:text-ethai hover:text-purple-700 dark:hover:text-purple-300"
                      ),
                    onClick: () => {
                      var n;
                      return (n = t.id), void (o(n), c(e ? -1 : 0));
                    },
                    children: t.label,
                  },
                  t.id
                )
              ),
            }),
            (0, n.jsxs)("div", {
              className: "flex flex-col justify-between",
              children: [
                (0, n.jsxs)("div", {
                  className: "".concat("General" === s ? "contents" : "hidden"),
                  children: [
                    (0, n.jsx)(l, {
                      index: 0,
                      question:
                        "What is Etherchain AI, and what is the strategic mission behind its development?",
                      answer:
                        "Etherchain AI is a next-generation blockchain ecosystem seamlessly integrated with artificial intelligence. Its core mission is to transform decentralized applications, governance, and infrastructure through groundbreaking innovations such as the Proof of Intelligence (PoI) consensus mechanism, the Artificial Intelligence Virtual Machine (AIVM), and a transparent, verifiable AI execution framework. Etherchain AI is committed to building a smarter, more secure, and equitable decentralized future.",
                      open: r,
                      onToggle: d,
                    }),
                    (0, n.jsx)(l, {
                      index: 1,
                      question:
                        "What distinguishes Etherchain AI's PoI consensus from conventional mechanisms?",
                      answer:
                        "Proof-of-Intelligence (PoI) is a next-generation consensus mechanism that utilizes AI-driven computation to validate transactions. It replaces resource-heavy models with intelligent validation, enhancing network scalability, security, and speed—while significantly reducing energy usage and enabling real-time adaptability within decentralized systems.",
                      open: r,
                      onToggle: d,
                    }),
                    (0, n.jsx)(l, {
                      index: 2,
                      question:
                        "How does the AIVM operate within Etherchain AI's decentralized infrastructure?",
                      answer:
                        "The Artificial Intelligence Virtual Machine (AIVM) serves as a dynamic on-chain execution layer for AI-enhanced decentralized applications. By embedding intelligent computation into the blockchain, it empowers developers to build autonomous, data-responsive dApps with elevated efficiency, scalability, and real-time performance.",
                      open: r,
                      onToggle: d,
                    }),
                    (0, n.jsx)(l, {
                      index: 3,
                      question:
                        "What is the function of decentralized governance within the Etherchain AI ecosystem?",
                      answer:
                        "Decentralized governance forms the core of Etherchain AI's operational model. ETHAI token holders gain direct influence over protocol evolution by proposing and voting on key initiatives. This community-driven framework ensures alignment with collective values, while AI enhances transparency, efficiency, and responsiveness in governance processes.",
                      open: r,
                      onToggle: d,
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "".concat("Dashboard" === s ? "block" : "hidden"),
                  children: [
                    (0, n.jsx)(l, {
                      index: 0,
                      question:
                        "How can I see how many tokens I have purchased?",
                      answer:
                        "You can view your purchased tokens by connecting your wallet to the site and accessing your personal dashboard. All your holdings and transaction history will be displayed securely in one place.  ",
                      open: r,
                      onToggle: d,
                    }),
                    (0, n.jsx)(l, {
                      index: 1,
                      question: "Can I stake my ETHAI tokens?",
                      answer:
                        "Staking will be available after the mainnet launch and presale conclusion. By staking your ETHAI tokens, you'll be able to earn rewards ranging from 4% to 18%, depending on the amount you hold.",
                      open: r,
                      onToggle: d,
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "".concat("Other" === s ? "block" : "hidden"),
                  children: [
                    (0, n.jsx)(l, {
                      index: 0,
                      question: "How do I contact the EtherChainAI team?",
                      answer:
                        "You can reach the Etherchain AI team directly through our official Telegram Support Channel or via email at support@etherchain.ai.",
                      open: r,
                      onToggle: d,
                    }),
                    (0, n.jsx)(l, {
                      index: 1,
                      question: "How can i enter the $250,000 giveaway?",
                      answer:
                        "You can secure your access by completing all the required tasks outlined in the participation process. This ensures fair entry and verifies genuine community engagement.",
                      open: r,
                      onToggle: d,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function d() {
        return (0, n.jsx)("section", {
          id: "faq",
          className: "relative py-20 bg-white dark:bg-gray-950 min-h-[75vh]",
          children: (0, n.jsxs)("div", {
            className:
              "relative z-10 w-[95%] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              (0, n.jsxs)("div", {
                className: "text-center mb-16",
                children: [
                  (0, n.jsx)("h2", {
                    className:
                      "text-[16px] font-semibold text-ethai dark:text-ethai mb-2 uppercase tracking-wide",
                    children: "FAQ",
                  }),
                  (0, n.jsx)("h3", {
                    className:
                      "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6",
                    children: "Frequently Asked Questions",
                  }),
                ],
              }),
              (0, n.jsx)(c, { className: "z-[2]" }),
            ],
          }),
        });
      }
    },
    829128: (e) => {
      e.n(e.i(679431));
    },
  },
]);

//# sourceMappingURL=97824e063cddd7eb.js.map
