(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    879380: (e) => {
      "use strict";
      e.s({ default: () => i });
      var t = e.i(731636),
        r = e.i(747047),
        l = e.i(814140),
        a = e.i(555366),
        s = e.i(712568);
      function i() {
        let e = (0, a.useRouter)();
        return (0, t.jsxs)("section", {
          className: "relative py-5 bg-white dark:bg-gray-950 overflow-hidden",
          children: [
            (0, t.jsx)("div", {
              className: "relative z-10 max-w-7xl mx-auto px-4 sm:py-6 lg:py-8",
              children: (0, t.jsx)("div", {
                className: "text-center",
                children: (0, t.jsxs)("div", {
                  className:
                    "bg-white dark:bg-gray-950 rounded-2xl py-8 lg:py-12 shadow-xl",
                  children: [
                    (0, t.jsx)("h2", {
                      className:
                        "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6",
                      children: (0, t.jsx)("span", {
                        className:
                          "block bg-gradient-to-r from-purple-600 from-[10%]  via-[40%] to-pink-600 to-[80%] bg-clip-text text-transparent mb-2",
                        children: "Secure the Future",
                      }),
                    }),
                    (0, t.jsx)("p", {
                      className:
                        "text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto",
                      children:
                        "Join thousands of developers, investors, and enthusiasts building the future of AI-powered blockchain technology.",
                    }),
                    (0, t.jsx)("h3", {
                      className:
                        "text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 bg-clip-text text-transparent",
                      children: "Support",
                    }),
                  ],
                }),
              }),
            }),
            (0, t.jsx)("div", {
              className: "lg:w-[100vw] flex justify-center mt-3",
              children: (0, t.jsx)("div", {
                className: "container",
                children: (0, t.jsx)("ul", {
                  className:
                    "flex flex-col sm:flex-row justify-center items-center sm:items-stretch -z-10 mb-4 sm:-mb-20 gap-4",
                  children: [
                    {
                      title: "Developer Grant",
                      description: "Apply for development funding",
                      icon: "/images/developer-grant.webp",
                      href: "/grant",
                      buttonText: "Visit Now",
                      className: "lg:mx-0 lg:h-[300px] lg:mt-[5rem]",
                    },
                    {
                      title: "Join Telegram  ",
                      description: "Learn about our protocol",
                      icon: "/images/text_line.webp",
                      href: "https://t.me/+lRBI5QAnotZiNDA1",
                      buttonText: "Follow now",
                      className: "lg:mx-0 lg:mt-[2.5rem]",
                    },
                    {
                      title: "Join Discord Community",
                      description: "Connect with developers",
                      icon: "/images/discord.webp",
                      href: "https://discord.gg/yWTHYKeeYb",
                      buttonText: "Join now",
                      external: !0,
                      className: "",
                    },
                    {
                      title: "Whitepaper",
                      description: "Read our technical paper",
                      icon: "/images/whitepaper.webp",
                      href: "/images/EtherchainAi_Whitepaper.pdf",
                      buttonText: "Download PDF",
                      className: "lg:mx-0 lg:mt-[2.5rem]",
                    },
                    {
                      title: "Block Explorer",
                      description: "View blockchain data",
                      icon: "/images/explorer.webp",
                      href: "/explorer/txs",
                      buttonText: "Visit Now",
                      className: "lg:mx-0 lg:h-[300px] lg:mt-[5rem]",
                    },
                  ].map((l, a) =>
                    (0, t.jsx)(
                      "li",
                      {
                        className:
                          "group bg-white dark:bg-[#0B101C] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2  lg:border-gray-200 lg:hover:border-[#d02fc2] border-[2px] border-[#d02fc2] dark:border-[2px] dark:border-[#d02fc2] lg:dark:border-gray-700  lg:dark:hover:border-[#d02fc2] flex flex-col w-[90%] sm:min-w-[250px] sm:max-w-[250px] ".concat(
                            l.className
                          ),
                        children: (0, t.jsxs)("div", {
                          className: "flex-1 items-center text-center",
                          children: [
                            (0, t.jsx)("div", {
                              className: "w-full flex flex-row justify-center",
                              children: (0, t.jsx)("div", {
                                className:
                                  "w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300",
                                children: (0, t.jsx)("div", {
                                  className: "text-white",
                                  children: (0, t.jsx)(s.default, {
                                    src: "".concat(l.icon),
                                    alt: l.title,
                                    width: 64,
                                    height: 64,
                                  }),
                                }),
                              }),
                            }),
                            (0, t.jsx)("h4", {
                              className:
                                "text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300",
                              children: l.title,
                            }),
                            (0, t.jsx)("div", {
                              className: "mt-4",
                              children: (0, t.jsx)(r.default, {
                                variant: 3,
                                onClick: () => e.push(l.href),
                                style: { backgroundColor: "transparent" },
                                className:
                                  "bg-opacity-100 border-[1px] border-[#7376aa] text-[#0B101C] text-[14px]",
                                children: l.buttonText,
                              }),
                            }),
                          ],
                        }),
                      },
                      a
                    )
                  ),
                }),
              }),
            }),
            (0, t.jsx)(l.default, { className: "absolute bottom-0 z-40" }),
          ],
        });
      }
    },
    720021: (e) => {
      e.n(e.i(879380));
    },
  },
]);

//# sourceMappingURL=b9666c85d3846560.js.map
