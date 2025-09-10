(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    817390: (e) => {
      "use strict";
      e.s({ default: () => a });
      var t = e.i(731636),
        r = e.i(186240);
      function a() {
        return (0, t.jsx)("section", {
          className: "relative py-20 bg-white dark:bg-gray-950 overflow-hidden",
          children: (0, t.jsxs)("div", {
            className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              (0, t.jsxs)("div", {
                className: "text-center mb-16",
                children: [
                  (0, t.jsx)("h4", {
                    className:
                      "text-lg font-semibold bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 bg-clip-text text-transparent mb-4",
                    children: "Etherchain Protocol AI",
                  }),
                  (0, t.jsx)("h2", {
                    className:
                      "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4",
                    children: "Transforming Blockchain & AIVM",
                  }),
                  (0, t.jsx)("p", {
                    className:
                      "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                    children: "Powering Tomorrow with AI-First Blockchain",
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12",
                children: [
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
                  },
                  {
                    id: 2,
                    title:
                      "AI and Blockchain Technology: How They Work Together",
                    description:
                      "The combination of AI and blockchain technology enhances the strengths of both systems. Blockchain provides an immutable environment in which algorithms can safely perform their operations. At the same time, AI allows blockchain to adapt to new conditions, analyze the behavior of participants, and optimize processes.",
                    image: "/images/News2.webp",
                    date: "1 August, 2025",
                    slug: "etherchain-ai-completes-stage-15-launches-bonus-round-to-accelerate-mainnet",
                    author: "CEO, Etherchain AI",
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
                  },
                ].map((e) =>
                  (0, t.jsxs)(
                    "article",
                    {
                      className:
                        "group bg-white dark:bg-[#0B101C] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "relative",
                          children: [
                            (0, t.jsx)("div", {
                              className: "aspect-video overflow-hidden",
                              children: (0, t.jsx)("img", {
                                src: e.image,
                                alt: e.title,
                                className:
                                  "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                              }),
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
                                    className: "w-3 h-3 text-white",
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
                            (0, t.jsx)("h3", {
                              className:
                                "text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-ethai dark:group-hover:text-ethai transition-colors duration-300 line-clamp-2",
                              children: (0, t.jsx)(r.default, {
                                href: "/blogs",
                                className: "hover:underline",
                                children: e.title,
                              }),
                            }),
                            (0, t.jsx)("p", {
                              className:
                                "text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3",
                              children: e.description,
                            }),
                            (0, t.jsx)("div", {
                              className: "mt-4",
                              children: (0, t.jsxs)(r.default, {
                                href: "/blogs",
                                className:
                                  "inline-flex items-center text-ethai dark:text-ethai hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm transition-colors duration-300",
                                children: [
                                  "Read More",
                                  (0, t.jsx)("svg", {
                                    className:
                                      "w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: (0, t.jsx)("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2,
                                      d: "M9 5l7 7-7 7",
                                    }),
                                  }),
                                ],
                              }),
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
                className: "text-center",
                children: (0, t.jsxs)(r.default, {
                  href: "/blogs",
                  className:
                    "inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-purple-500 hover:border-purple-600",
                  children: [
                    "View All Updates",
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
        });
      }
    },
    626894: (e) => {
      e.n(e.i(817390));
    },
  },
]);

//# sourceMappingURL=f383dfa468a43cde.js.map
