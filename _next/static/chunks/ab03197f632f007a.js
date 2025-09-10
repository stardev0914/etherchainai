(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    814140: (e) => {
      "use strict";
      e.s({ default: () => t });
      var a = e.i(731636),
        s = e.i(838653);
      let t = (0, s.memo)(function (e) {
        let { ...t } = e,
          [l, d] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            let e = () => {
              d(document.documentElement.classList.contains("dark"));
            };
            e();
            let a = new MutationObserver(e);
            return (
              a.observe(document.documentElement, {
                attributes: !0,
                attributeFilter: ["class"],
              }),
              () => a.disconnect()
            );
          }, []),
          (0, a.jsx)("div", {
            className: "w-full ".concat(t.className),
            children: (0, a.jsx)("img", {
              className: "w-full",
              src: l ? "/images/divider-dark.svg" : "/images/divider-light.svg",
              alt: "divider",
            }),
          })
        );
      });
    },
    478645: (e) => {
      "use strict";
      e.s({ default: () => p });
      var a = e.i(731636),
        s = e.i(838653),
        t = e.i(347791),
        l = e.i(722759),
        d = e.i(814140),
        i = e.i(766325);
      let r = (0, t.default)(() => e.r(732117)(e.i), {
          loadableGenerated: { modules: [335699] },
          ssr: !1,
        }),
        n = (0, t.default)(() => e.r(244084)(e.i), {
          loadableGenerated: { modules: [585117] },
          ssr: !1,
        }),
        c = (0, t.default)(() => e.r(968937)(e.i), {
          loadableGenerated: { modules: [605619] },
          ssr: !1,
        }),
        o = (0, t.default)(() => e.r(926914)(e.i), {
          loadableGenerated: { modules: [660699] },
          ssr: !1,
        }),
        m = (0, t.default)(() => e.r(388957)(e.i), {
          loadableGenerated: { modules: [21135] },
          ssr: !1,
        }),
        h = (0, t.default)(() => e.r(142643)(e.i), {
          loadableGenerated: { modules: [683838] },
          ssr: !1,
        }),
        u = (0, t.default)(() => e.r(65063)(e.i), {
          loadableGenerated: { modules: [742582] },
          ssr: !1,
        }),
        x = (0, t.default)(() => e.r(446026)(e.i), {
          loadableGenerated: { modules: [631730] },
          ssr: !1,
        }),
        j = (0, t.default)(() => e.r(556664)(e.i), {
          loadableGenerated: { modules: [626894] },
          ssr: !1,
        }),
        f = (0, t.default)(() => e.r(986668)(e.i), {
          loadableGenerated: { modules: [720021] },
          ssr: !1,
        }),
        v = (0, t.default)(() => e.r(98541)(e.i), {
          loadableGenerated: { modules: [829128] },
          ssr: !1,
        }),
        b = (0, t.default)(() => e.r(275188)(e.i), {
          loadableGenerated: { modules: [976196] },
          ssr: !1,
        }),
        g = (e) => {
          let { className: s = "" } = e;
          return (0, a.jsx)("div", {
            className: "flex justify-center items-center py-20 ".concat(s),
            children: (0, a.jsx)("div", {
              className:
                "animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600",
            }),
          });
        };
      function p() {
        let e = (0, i.default)({ threshold: 0.1, rootMargin: "50px 0px" });
        return (0, a.jsxs)("div", {
          className: "min-h-screen bg-white dark:bg-gray-950",
          children: [
            (0, a.jsxs)("div", {
              className:
                "fixed left-4 z-50 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col space-y-4",
              children: [
                (0, a.jsx)("a", {
                  href: "https://x.com/EtherchainAi",
                  className:
                    "w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-gray-700",
                  children: (0, a.jsx)("svg", {
                    className: "w-5 h-5 text-gray-600 dark:text-gray-300",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                      d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                    }),
                  }),
                }),
                (0, a.jsx)("a", {
                  href: "https://t.me/+lRBI5QAnotZiNDA1",
                  className:
                    "w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-gray-700",
                  children: (0, a.jsx)("svg", {
                    className: "w-7 h-7 text-gray-600 dark:text-gray-300",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                      d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                    }),
                  }),
                }),
                (0, a.jsx)("a", {
                  href: "https://discord.gg/yWTHYKeeYb",
                  className:
                    "w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-gray-700",
                  children: (0, a.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 512 512",
                    fill: "#D1D5DB",
                    className: "w-8 h-8",
                    children: (0, a.jsx)("path", {
                      d: "M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm84.42 350.71s-7.98-9.51-14.61-17.89c28.96-8.2 39.94-26.18 39.94-26.18-9.12 5.98-17.8 10.2-25.63 13.11-11.14 4.72-21.84 7.88-32.36 9.7-21.46 3.99-41.07 2.93-58.04.17-12.74-2-23.8-4.99-33.02-8.09-5.16-1.94-10.77-4.27-16.51-7.02-.7-.36-1.4-.72-2.1-1.09-.45-.23-.9-.48-1.34-.72-6.03-3.33-9.4-5.67-9.4-5.67s10.66 17.76 38.83 26.03c-6.65 8.39-14.7 18.32-14.7 18.32-48.58-1.54-66.98-33.4-66.98-33.4 0-70.73 31.65-128.12 31.65-128.12 31.65-23.72 61.71-23.08 61.71-23.08l2.22 2.57c-39.59 11.36-57.94 28.52-57.94 28.52s4.86-2.69 13.03-6.52c23.67-10.4 42.39-13.18 50.1-13.84 1.26-.14 2.35-.25 3.25-.31 11.7-1.57 24.89-1.81 38.12-.35 17.9 2.03 37.39 7.1 57.27 17.45 0 0-17.14-16.31-54.29-27.72l3.06-3.45s30.06-.64 61.71 23.08c0 0 31.65 57.39 31.65 128.12 0 0-18.55 31.86-67.14 33.4zM210.12 227.24c-11.8 0-21.41 10.34-21.41 23.08s9.55 23.08 21.41 23.08c11.85 0 21.41-10.34 21.41-23.08.05-12.74-9.56-23.08-21.41-23.08zm91.76 0c-11.8 0-21.41 10.34-21.41 23.08s9.55 23.08 21.41 23.08c11.85 0 21.41-10.34 21.41-23.08s-9.56-23.08-21.41-23.08z",
                    }),
                  }),
                }),
                (0, a.jsx)("a", {
                  href: "https://linktr.ee/Etherchain.Ai",
                  className:
                    "w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-200 dark:border-gray-700",
                  children: (0, a.jsx)("svg", {
                    className: "w-6 h-6 text-gray-600 dark:text-gray-300",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                      d: "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z",
                    }),
                  }),
                }),
              ],
            }),
            (0, a.jsx)(l.default, {}),
            (0, a.jsx)("div", {
              "data-section": "metrics",
              children: e.metrics
                ? (0, a.jsxs)("div", {
                    className: "animate-fade-in-up",
                    children: [(0, a.jsx)(d.default, {}), (0, a.jsx)(r, {})],
                  })
                : (0, a.jsx)(g, {}),
            }),
            (0, a.jsx)("div", {
              "data-section": "brandSlider",
              children: e.brandSlider
                ? (0, a.jsx)("div", {
                    className: "animate-fade-in-up [animation-delay:0.1s]",
                    children: (0, a.jsx)(n, {}),
                  })
                : (0, a.jsx)(g, {}),
            }),
            (0, a.jsx)("div", {
              "data-section": "poi",
              children: e.poi
                ? (0, a.jsxs)("div", {
                    className: "animate-fade-in-up [animation-delay:0.2s]",
                    children: [(0, a.jsx)(d.default, {}), (0, a.jsx)(c, {})],
                  })
                : (0, a.jsx)(g, {}),
            }),
            (0, a.jsx)("div", {
              "data-section": "aivm",
              children: e.aivm
                ? (0, a.jsxs)("div", {
                    className: "animate-fade-in-up [animation-delay:0.1s]",
                    children: [(0, a.jsx)(d.default, {}), (0, a.jsx)(o, {})],
                  })
                : (0, a.jsx)(g, {}),
            }),
            (0, a.jsx)("div", {
              "data-section": "features",
              children: e.features
                ? (0, a.jsxs)("div", {
                    className: "animate-fade-in-up [animation-delay:0.2s]",
                    children: [(0, a.jsx)(d.default, {}), (0, a.jsx)(m, {})],
                  })
                : (0, a.jsx)(g, {}),
            }),
            (0, a.jsx)("div", {
              "data-section": "gasData",
              children: e.gasData
                ? (0, a.jsx)("div", {
                    className: "animate-fade-in-up [animation-delay:0.1s]",
                    children: (0, a.jsxs)(s.Suspense, {
                      fallback: (0, a.jsx)(g, {}),
                      children: [(0, a.jsx)(d.default, {}), (0, a.jsx)(h, {})],
                    }),
                  })
                : (0, a.jsx)(g, {}),
            }),
            (0, a.jsx)("div", {
              "data-section": "roadmap",
              children: e.roadmap
                ? (0, a.jsxs)("div", {
                    className: "animate-fade-in-up [animation-delay:0.3s]",
                    children: [(0, a.jsx)(d.default, {}), (0, a.jsx)(u, {})],
                  })
                : (0, a.jsx)(g, {}),
            }),
            (0, a.jsx)("div", {
              "data-section": "tokenomics",
              children: e.tokenomics
                ? (0, a.jsxs)("div", {
                    className: "animate-fade-in-up [animation-delay:0.2s]",
                    children: [(0, a.jsx)(d.default, {}), (0, a.jsx)(x, {})],
                  })
                : (0, a.jsx)(g, {}),
            }),
            (0, a.jsx)("div", {
              "data-section": "blog",
              children: e.blog
                ? (0, a.jsx)("div", {
                    className: "animate-fade-in-up [animation-delay:0.1s]",
                    children: (0, a.jsx)(j, {}),
                  })
                : (0, a.jsx)(g, {}),
            }),
            (0, a.jsx)("div", {
              "data-section": "community",
              children: e.community
                ? (0, a.jsxs)("div", {
                    className: "animate-fade-in-up [animation-delay:0.2s]",
                    children: [(0, a.jsx)(d.default, {}), (0, a.jsx)(f, {})],
                  })
                : (0, a.jsx)(g, {}),
            }),
            (0, a.jsx)("div", {
              "data-section": "faq",
              children: e.faq
                ? (0, a.jsx)("div", {
                    className: "animate-fade-in-up [animation-delay:0.1s]",
                    children: (0, a.jsx)(v, {}),
                  })
                : (0, a.jsx)(g, {}),
            }),
            (0, a.jsx)("div", {
              "data-section": "cta",
              children: e.cta
                ? (0, a.jsxs)("div", {
                    className: "animate-fade-in-up [animation-delay:0.3s]",
                    children: [(0, a.jsx)(d.default, {}), (0, a.jsx)(b, {})],
                  })
                : (0, a.jsx)(g, {}),
            }),
          ],
        });
      }
    },
    732117: (e) => {
      e.v((a) =>
        Promise.all(
          ["static/chunks/e7306ae7cacdf5a8.js"].map((a) => e.l(a))
        ).then(() => a(335699))
      );
    },
    244084: (e) => {
      e.v((a) =>
        Promise.all(
          ["static/chunks/af4046ae27ffc79f.js"].map((a) => e.l(a))
        ).then(() => a(585117))
      );
    },
    968937: (e) => {
      e.v((a) =>
        Promise.all(
          ["static/chunks/90919fc0e73b3639.js"].map((a) => e.l(a))
        ).then(() => a(605619))
      );
    },
    926914: (e) => {
      e.v((a) =>
        Promise.all(
          ["static/chunks/e70df9609d0c820c.js"].map((a) => e.l(a))
        ).then(() => a(660699))
      );
    },
    388957: (e) => {
      e.v((a) =>
        Promise.all(
          [
            "static/chunks/307758bd415655a1.css",
            "static/chunks/92dc58d8d1a54207.js",
          ].map((a) => e.l(a))
        ).then(() => a(21135))
      );
    },
    142643: (e) => {
      e.v((a) =>
        Promise.all(
          [
            "static/chunks/0079de1364fd6042.js",
            "static/chunks/78f753b77ade3515.js",
          ].map((a) => e.l(a))
        ).then(() => a(683838))
      );
    },
    65063: (e) => {
      e.v((a) =>
        Promise.all(
          ["static/chunks/1db5a837d90ab4ff.js"].map((a) => e.l(a))
        ).then(() => a(742582))
      );
    },
    446026: (e) => {
      e.v((a) =>
        Promise.all(
          ["static/chunks/27e0df963baa3087.js"].map((a) => e.l(a))
        ).then(() => a(631730))
      );
    },
    556664: (e) => {
      e.v((a) =>
        Promise.all(
          ["static/chunks/95c175dd72fc6245.js"].map((a) => e.l(a))
        ).then(() => a(626894))
      );
    },
    986668: (e) => {
      e.v((a) =>
        Promise.all(
          ["static/chunks/100ade49c1631b4c.js"].map((a) => e.l(a))
        ).then(() => a(720021))
      );
    },
    98541: (e) => {
      e.v((a) =>
        Promise.all(
          ["static/chunks/8582c402d29336f6.js"].map((a) => e.l(a))
        ).then(() => a(829128))
      );
    },
    275188: (e) => {
      e.v((a) =>
        Promise.all(
          ["static/chunks/6590967517c966ed.js"].map((a) => e.l(a))
        ).then(() => a(976196))
      );
    },
  },
]);

//# sourceMappingURL=49b7e43204a3f4ef.js.map
