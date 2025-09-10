(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    231023: (e) => {
      "use strict";
      e.s({ default: () => n });
      var a = e.i(731636),
        t = e.i(838653),
        i = e.i(712568);
      function n() {
        let e = (0, t.useRef)(null);
        (0, t.useEffect)(() => {
          let a,
            t = e.current;
          if (!t) return;
          let i = 0,
            n = () => {
              (i -= 1) <= -t.scrollWidth / 2 && (i = 0),
                (t.style.transform = "translateX(".concat(i, "px)")),
                (a = requestAnimationFrame(n));
            };
          return (
            n(),
            () => {
              a && cancelAnimationFrame(a);
            }
          );
        }, []);
        let n = [
          {
            id: 1,
            name: "Partner 1",
            lightImage: "/images/download.png",
            link: "#",
          },
          {
            id: 2,
            name: "Partner 2",
            lightImage: "/images/download1.png",
            link: "#",
          },
          {
            id: 3,
            name: "Partner 3",
            lightImage: "/images/download2.png",
            link: "#",
          },
          {
            id: 4,
            name: "Partner 4",
            lightImage: "/images/download3.png",
            link: "#",
          },
          {
            id: 5,
            name: "Partner 5",
            lightImage: "/images/part2.png",
            link: "#",
          },
          {
            id: 6,
            name: "Partner 6",
            lightImage: "/images/part5.png",
            link: "#",
          },
          {
            id: 7,
            name: "Partner 7",
            lightImage: "/images/part7.png",
            link: "#",
          },
          {
            id: 8,
            name: "Partner 8",
            lightImage: "/images/part9.png",
            link: "#",
          },
          {
            id: 9,
            name: "Partner 9",
            lightImage: "/images/part10.png",
            link: "#",
          },
          {
            id: 10,
            name: "Partner 10",
            lightImage: "/images/part11.png",
            link: "#",
          },
          {
            id: 11,
            name: "Partner 11",
            lightImage: "/images/part12.png",
            link: "#",
          },
          {
            id: 12,
            name: "Partner 12",
            lightImage: "/images/part13.png",
            link: "#",
          },
          {
            id: 13,
            name: "Partner 13",
            lightImage: "/images/part14.png",
            link: "#",
          },
          {
            id: 14,
            name: "Partner 14",
            lightImage: "/images/part16.png",
            link: "#",
          },
          {
            id: 15,
            name: "Crypto.com",
            lightImage: "/images/crypto.png",
            link: "#",
          },
        ];
        return (0, a.jsx)("div", {
          className: "w-full overflow-hidden bg-white dark:bg-gray-950 py-12",
          children: (0, a.jsxs)("div", {
            className: "mx-auto px-4",
            children: [
              (0, a.jsxs)("div", {
                className: "text-center mb-8",
                children: [
                  (0, a.jsx)("h2", {
                    className:
                      "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4",
                    children: "Trusted by Industry Leaders",
                  }),
                  (0, a.jsx)("p", {
                    className:
                      "text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto",
                    children:
                      "Partnering with leading companies and platforms to revolutionize the blockchain ecosystem",
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "relative py-12 md:py-24",
                children: (0, a.jsx)("div", {
                  className: "flex items-center overflow-hidden",
                  children: (0, a.jsxs)("div", {
                    ref: e,
                    className:
                      "flex items-center space-x-4 md:space-x-20 transition-transform duration-1000 ease-linear",
                    style: { minWidth: "max-content" },
                    children: [
                      n.map((e) =>
                        (0, a.jsx)(
                          "div",
                          {
                            className: "flex-shrink-0",
                            children: (0, a.jsx)("a", {
                              href: e.link,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "block group",
                              children: (0, a.jsx)("div", {
                                className:
                                  "relative flex items-center justify-center transition-all duration-300 transform hover:scale-105",
                                children: (0, a.jsx)(i.default, {
                                  src: e.lightImage,
                                  alt: e.name,
                                  width: 150,
                                  height: 60,
                                  className:
                                    "max-w-full max-h-full object-contain group-hover:opacity-80 transition-opacity duration-300 bg-gray-950 p-2 rounded-lg",
                                }),
                              }),
                            }),
                          },
                          e.id
                        )
                      ),
                      n.map((e) =>
                        (0, a.jsx)(
                          "div",
                          {
                            className: "flex-shrink-0",
                            children: (0, a.jsx)("a", {
                              href: e.link,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "block group",
                              children: (0, a.jsx)("div", {
                                className:
                                  "relative flex items-center justify-center transition-all duration-300 transform hover:scale-105",
                                children: (0, a.jsx)(i.default, {
                                  src: e.lightImage,
                                  alt: e.name,
                                  width: 200,
                                  height: 80,
                                  className:
                                    "max-w-full max-h-full object-contain group-hover:opacity-80 transition-opacity duration-300 bg-gray-950",
                                }),
                              }),
                            }),
                          },
                          "duplicate-".concat(e.id)
                        )
                      ),
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
      }
    },
    585117: (e) => {
      e.n(e.i(231023));
    },
  },
]);

//# sourceMappingURL=d19fcf8851feed8d.js.map
