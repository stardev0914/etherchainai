(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    227233: (e) => {
      "use strict";
      var { m: t, e: a } = e;
      {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "BailoutToCSR", {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
        let t = e.r(301789);
        function r(e) {
          let { reason: a, children: r } = e;
          if ("undefined" == typeof window)
            throw Object.defineProperty(
              new t.BailoutToCSRError(a),
              "__NEXT_ERROR_CODE",
              { value: "E394", enumerable: !1, configurable: !0 }
            );
          return r;
        }
      }
    },
    868093: (e) => {
      "use strict";
      var { m: t, e: a } = e;
      function r(e) {
        return e
          .split("/")
          .map((e) => encodeURIComponent(e))
          .join("/");
      }
      Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "encodeURIPath", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    308445: (e) => {
      "use strict";
      var { m: t, e: a } = e;
      {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "PreloadChunks", {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
        let t = e.r(731636),
          s = e.r(795168),
          l = e.r(351599),
          i = e.r(868093);
        function r(e) {
          let { moduleIds: a } = e;
          if ("undefined" != typeof window) return null;
          let r = l.workAsyncStorage.getStore();
          if (void 0 === r) return null;
          let o = [];
          if (r.reactLoadableManifest && a) {
            let e = r.reactLoadableManifest;
            for (let t of a) {
              if (!e[t]) continue;
              let a = e[t].files;
              o.push(...a);
            }
          }
          return 0 === o.length
            ? null
            : (0, t.jsx)(t.Fragment, {
                children: o.map((e) => {
                  let a = r.assetPrefix + "/_next/" + (0, i.encodeURIPath)(e);
                  return e.endsWith(".css")
                    ? (0, t.jsx)(
                        "link",
                        {
                          precedence: "dynamic",
                          href: a,
                          rel: "stylesheet",
                          as: "style",
                        },
                        e
                      )
                    : ((0, s.preload)(a, {
                        as: "script",
                        fetchPriority: "low",
                      }),
                      null);
                }),
              });
        }
      }
    },
    23109: (e) => {
      "use strict";
      var { m: t, e: a } = e;
      {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "default", {
            enumerable: !0,
            get: function () {
              return n;
            },
          });
        let t = e.r(731636),
          s = e.r(838653),
          l = e.r(227233),
          i = e.r(308445);
        function r(e) {
          return { default: e && "default" in e ? e.default : e };
        }
        let o = {
            loader: () => Promise.resolve(r(() => null)),
            loading: null,
            ssr: !0,
          },
          n = function (e) {
            let a = { ...o, ...e },
              n = (0, s.lazy)(() => a.loader().then(r)),
              d = a.loading;
            function c(e) {
              let r = d
                  ? (0, t.jsx)(d, { isLoading: !0, pastDelay: !0, error: null })
                  : null,
                o = !a.ssr || !!a.loading,
                c = o ? s.Suspense : s.Fragment,
                x = a.ssr
                  ? (0, t.jsxs)(t.Fragment, {
                      children: [
                        "undefined" == typeof window
                          ? (0, t.jsx)(i.PreloadChunks, {
                              moduleIds: a.modules,
                            })
                          : null,
                        (0, t.jsx)(n, { ...e }),
                      ],
                    })
                  : (0, t.jsx)(l.BailoutToCSR, {
                      reason: "next/dynamic",
                      children: (0, t.jsx)(n, { ...e }),
                    });
              return (0, t.jsx)(c, {
                ...(o ? { fallback: r } : {}),
                children: x,
              });
            }
            return (c.displayName = "LoadableComponent"), c;
          };
      }
    },
    347791: (e) => {
      "use strict";
      var { m: t, e: a } = e;
      {
        Object.defineProperty(a, "__esModule", { value: !0 }),
          Object.defineProperty(a, "default", {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
        let s = e.r(313314)._(e.r(23109));
        function r(e, t) {
          var a;
          let r = {};
          "function" == typeof e && (r.loader = e);
          let l = { ...r, ...t };
          return (0, s.default)({
            ...l,
            modules: null == (a = l.loadableGenerated) ? void 0 : a.modules,
          });
        }
        ("function" == typeof a.default ||
          ("object" == typeof a.default && null !== a.default)) &&
          void 0 === a.default.__esModule &&
          (Object.defineProperty(a.default, "__esModule", { value: !0 }),
          Object.assign(a.default, a),
          (t.exports = a.default));
      }
    },
    547306: (e) => {
      e.v({ className: "space_grotesk_68f5e9aa-module__FBFZca__className" });
    },
    722759: [
      (e) => {
        "use strict";
        e.s({ default: () => T }, 722759);
        var t = e.i(731636),
          a = e.i(688814),
          r = e.i(838653),
          s = e.i(547306);
        let l = {
          className: s.default.className,
          style: {
            fontFamily: "'Space Grotesk', 'Space Grotesk Fallback'",
            fontStyle: "normal",
          },
        };
        function i(e) {
          let { progressPercentage: a } = e;
          return (0, t.jsx)("div", {
            className:
              "w-full h-4 bg-gray-200 dark:bg-gray-900 rounded-full overflow-hidden",
            children: (0, t.jsx)("div", {
              className:
                "h-full bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 rounded-full",
              style: { width: "".concat(a, "%") },
            }),
          });
        }
        null != s.default.variable && (l.variable = s.default.variable);
        var o = e.i(368871);
        e.i(435187);
        var n = e.i(266119),
          d = e.i(744232),
          c = e.i(487568),
          x = e.i(693667),
          f = e.i(288041);
        function u() {
          let { chainId: e } = (0, n.useAppKitNetworkCore)(),
            [s, l] = (0, r.useState)(0),
            [i, o] = (0, r.useState)(1),
            [u, m] = (0, r.useState)({
              days: 0,
              hours: 0,
              minutes: 0,
              seconds: 0,
            }),
            p = async () => {
              let e = new c.JsonRpcProvider(d.rpcUrls[1], 1),
                t = new x.Contract(d.presaleAddr[1], d.presaleAbi, e);
              l(await t.presaleStartTime());
            };
          return (
            (0, r.useEffect)(() => {
              o(1), p();
            }, [e]),
            (0, r.useEffect)(() => {
              let e = () => {
                let e = new Date();
                if (!s || 0 === s) return;
                let t = new Date(1e3 * (0, f.BigNumber)(s).toNumber()),
                  a = Math.floor((e.getTime() - t.getTime()) / 36e5 / 24),
                  r = new Date(t.getTime() + (a + 1) * 864e5) - e;
                if (r > 0) {
                  let e = Math.floor(r / 864e5),
                    t = Math.floor((r / 36e5) % 24);
                  m({
                    days: e,
                    hours: t,
                    minutes: Math.floor((r / 1e3 / 60) % 60),
                    seconds: Math.floor((r / 1e3) % 60),
                  });
                } else m({ days: 0, hours: 0, minutes: 0, seconds: 0 });
              };
              e();
              let t = setInterval(e, 1e3);
              return () => clearInterval(t);
            }, [s, e]),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsxs)("div", {
                  className: "jsx-da3b7c068b79a9b6 ethai-countdown-container",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "jsx-da3b7c068b79a9b6 ethai-countdown-box",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "jsx-da3b7c068b79a9b6 ethai-countdown-time",
                          children: u.days,
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "jsx-da3b7c068b79a9b6 ethai-countdown-label",
                          children: "Days",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "jsx-da3b7c068b79a9b6 ethai-countdown-box",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "jsx-da3b7c068b79a9b6 ethai-countdown-time",
                          children: u.hours,
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "jsx-da3b7c068b79a9b6 ethai-countdown-label",
                          children: "Hours",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "jsx-da3b7c068b79a9b6 ethai-countdown-box",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "jsx-da3b7c068b79a9b6 ethai-countdown-time",
                          children: u.minutes,
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "jsx-da3b7c068b79a9b6 ethai-countdown-label",
                          children: "Minutes",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "jsx-da3b7c068b79a9b6 ethai-countdown-box",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "jsx-da3b7c068b79a9b6 ethai-countdown-time",
                          children: u.seconds,
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "jsx-da3b7c068b79a9b6 ethai-countdown-label",
                          children: "Seconds",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)(a.default, {
                  id: "da3b7c068b79a9b6",
                  children:
                    '.ethai-countdown-container.jsx-da3b7c068b79a9b6{justify-content:center;align-items:center;gap:5px;margin-top:20px;display:flex}.ethai-countdown-box.jsx-da3b7c068b79a9b6{text-align:center;color:#0f1021;border-radius:12px;min-width:50px;min-height:50px;padding:5px 8px;position:relative}.ethai-countdown-box.jsx-da3b7c068b79a9b6:after,.ethai-countdown-box.jsx-da3b7c068b79a9b6:before{content:"";z-index:-1;background:#7376aa;width:100%;height:50%;position:absolute;left:0}.ethai-countdown-box.jsx-da3b7c068b79a9b6:before{border:1px solid #7375a6;border-bottom:0;border-radius:10px 10px 3px 3px;top:0;box-shadow:inset 0 2px 4px rgba(0,0,0,.27)}.ethai-countdown-box.jsx-da3b7c068b79a9b6:after{border:1px solid #7375a6;border-top:0;border-radius:3px 3px 10px 10px;top:50%;box-shadow:inset 0 -2px 2px rgba(0,0,0,.18)}.ethai-countdown-time.jsx-da3b7c068b79a9b6{padding:0;font-family:Bebas Neue,sans-serif;font-size:24px;font-weight:700}.ethai-countdown-label.jsx-da3b7c068b79a9b6{opacity:.8;text-align:center;width:100%;margin-top:4px;font-size:10px;position:absolute;bottom:5px;left:0}',
                }),
              ],
            })
          );
        }
        e.i(922271);
        var m = e.i(795168);
        function p(e) {
          let { isOpen: a, onClose: s, referralCode: l = "GvUWmC" } = e,
            [i, o] = (0, r.useState)(!1),
            [n, d] = (0, r.useState)(!1),
            c = "".concat("https://etherchain.ai/").concat(l);
          (0, r.useEffect)(() => {
            d(!0);
          }, []),
            (0, r.useEffect)(() => {
              let e = (e) => {
                "Escape" === e.key && a && s();
              };
              return (
                a &&
                  (document.addEventListener("keydown", e),
                  (document.body.style.overflow = "hidden")),
                () => {
                  document.removeEventListener("keydown", e),
                    (document.body.style.overflow = "unset");
                }
              );
            }, [a, s]);
          let x = async () => {
            try {
              await navigator.clipboard.writeText(c),
                o(!0),
                setTimeout(() => o(!1), 2e3);
            } catch (e) {
              console.error("Failed to copy: ", e);
            }
          };
          if (!a || !n) return null;
          let f = (0, t.jsx)("div", {
            style: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 99999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              backdropFilter: "blur(4px)",
            },
            onClick: (e) => {
              e.target === e.currentTarget && s();
            },
            "data-referral-modal": "true",
            "data-testid": "referral-modal-overlay",
            children: (0, t.jsx)("div", {
              style: { position: "relative", width: "100%", maxWidth: "28rem" },
              children: (0, t.jsxs)("div", {
                className:
                  "relative bg-white dark:bg-gray-950 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden backdrop-blur-sm",
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "absolute inset-0 pointer-events-none overflow-hidden",
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/5 to-pink-900/10",
                      }),
                      (0, t.jsxs)("svg", {
                        className:
                          "absolute -top-6 -right-6 w-24 h-24 text-purple-800 opacity-20 animate-float",
                        fill: "currentColor",
                        viewBox: "0 0 96 96",
                        children: [
                          (0, t.jsx)("circle", {
                            cx: "48",
                            cy: "48",
                            r: "36",
                            opacity: "0.3",
                          }),
                          (0, t.jsx)("path", {
                            d: "M48,12 Q84,24 84,48 Q72,84 48,84 Q12,72 12,48 Q24,12 48,12 Z",
                            opacity: "0.5",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("svg", {
                        className:
                          "absolute -bottom-4 -left-4 w-20 h-20 text-blue-800 opacity-25 animate-float-reverse",
                        fill: "currentColor",
                        viewBox: "0 0 80 80",
                        children: [
                          (0, t.jsx)("polygon", {
                            points: "40,6 74,20 74,60 40,74 6,60 6,20",
                            opacity: "0.6",
                          }),
                          (0, t.jsx)("circle", {
                            cx: "40",
                            cy: "40",
                            r: "12",
                            opacity: "0.4",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "absolute top-6 right-8 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-pulse",
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "absolute bottom-6 left-8 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50 animate-pulse",
                        style: { animationDelay: "1s" },
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "relative bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 px-6 py-4 overflow-hidden",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "absolute inset-0 pointer-events-none",
                        children: [
                          (0, t.jsxs)("svg", {
                            className:
                              "absolute -top-2 -right-2 w-12 h-12 text-white opacity-10",
                            fill: "currentColor",
                            viewBox: "0 0 48 48",
                            children: [
                              (0, t.jsx)("circle", {
                                cx: "24",
                                cy: "24",
                                r: "18",
                              }),
                              (0, t.jsx)("path", {
                                d: "M24,6 L42,18 L42,30 L24,42 L6,30 L6,18 Z",
                                opacity: "0.6",
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "relative z-10",
                        children: (0, t.jsx)("h5", {
                          className:
                            "text-lg font-semibold text-white text-center",
                          children: "Your referral link",
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: "relative p-6 z-10",
                    children: [
                      (0, t.jsx)("p", {
                        className:
                          "text-sm text-gray-600 dark:text-gray-300 text-center mb-6",
                        children:
                          "Share your link to your friends to receive 10% bonus!",
                      }),
                      (0, t.jsx)("div", {
                        className: "mb-6",
                        children: (0, t.jsxs)("div", {
                          className:
                            "relative flex items-center border-2 border-gradient-to-r from-purple-500 from-20% to-pink-500 to-80% dark:from-gray-700 dark:to-gray-600 rounded-lg overflow-hidden shadow-inner",
                          children: [
                            (0, t.jsx)("input", {
                              type: "text",
                              readOnly: !0,
                              value: c,
                              className:
                                "flex-1 px-4 py-3 bg-transparent text-gray-900 dark:text-white text-sm font-medium focus:outline-none",
                            }),
                            (0, t.jsx)("button", {
                              onClick: x,
                              className:
                                "px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-sm transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl",
                              children: i
                                ? (0, t.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, t.jsx)("svg", {
                                        className: "w-4 h-4",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        children: (0, t.jsx)("path", {
                                          fillRule: "evenodd",
                                          d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                          clipRule: "evenodd",
                                        }),
                                      }),
                                      "Copied!",
                                    ],
                                  })
                                : "Copy",
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-700",
                        children: (0, t.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center",
                              children: (0, t.jsx)("svg", {
                                className: "w-4 h-4 text-white",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: (0, t.jsx)("path", {
                                  d: "M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z",
                                }),
                              }),
                            }),
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("p", {
                                  className:
                                    "text-sm font-semibold text-gray-900 dark:text-white",
                                  children: "Earn Rewards",
                                }),
                                (0, t.jsx)("p", {
                                  className:
                                    "text-xs text-gray-600 dark:text-gray-300",
                                  children:
                                    "Get bonus ETHAI tokens for each successful referral",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)("button", {
                    onClick: s,
                    className:
                      "absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 dark:bg-gray-900/50 dark:hover:bg-gray-900/70 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 z-20 cursor-pointer referral-modal-close-button",
                    style: { zIndex: 100001, pointerEvents: "auto" },
                    type: "button",
                    children: (0, t.jsx)("svg", {
                      className: "w-5 h-5",
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
            }),
          });
          return (0, m.createPortal)(f, document.body);
        }
        var h = e.i(747047),
          g = e.i(12448),
          b = e.i(55157);
        function j(e) {
          let { referralCode: a = "GvUWmC" } = e,
            [s, l] = (0, r.useState)(!1);
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(h.default, {
                onClick: () => l(!0),
                variant: 2,
                "data-testid": "referral-button",
                children: (0, t.jsxs)("span", {
                  children: [
                    (0, t.jsx)(g.FontAwesomeIcon, {
                      icon: b.faShareFromSquare,
                      width: 16,
                      height: 16,
                    }),
                    " Share Referral Link",
                  ],
                }),
              }),
              (0, t.jsx)(p, {
                isOpen: s,
                onClose: () => l(!1),
                referralCode: a,
              }),
            ],
          });
        }
        var y = e.i(100615),
          v = e.i(171096),
          w = e.i(815751),
          N = e.i(918142),
          k = e.i(555366),
          S = e.i(43471),
          L = e.i(712568);
        function C() {
          let e = (0, k.useParams)().ref,
            { fetchBalance: a } = (0, y.useAppKitBalance)(),
            { address: s, isConnected: m } = (0, n.useAppKitAccount)(),
            { chainId: p } = (0, n.useAppKitNetworkCore)(),
            { walletProvider: C } = (0, v.useAppKitProvider)("eip155"),
            [A, T] = (0, r.useState)("ETH"),
            [E, B] = (0, r.useState)(0),
            [D, F] = (0, r.useState)(0),
            [P, U] = (0, r.useState)(0),
            [I, M] = (0, r.useState)(""),
            [H, _] = (0, r.useState)(""),
            [R, O] = (0, r.useState)(""),
            [W, z] = (0, r.useState)(0),
            [Z, Q] = (0, r.useState)(0),
            [G, Y] = (0, r.useState)(
              "0x0000000000000000000000000000000000000000000000000000000000000000"
            ),
            [K, $] = (0, r.useState)(!1),
            [q, J] = (0, r.useState)(0),
            [V, X] = (0, r.useState)(!1),
            [ee, et] = (0, r.useState)(1),
            [ea, er] = (0, r.useState)(0),
            {
              presaleData: es,
              isLoading: el,
              error: ei,
            } = (function (e) {
              let { presaleAddress: t, rpcUrl: a, chainId: s } = e,
                [l, i] = (0, r.useState)(null),
                [o, n] = (0, r.useState)(!0),
                [u, m] = (0, r.useState)(null);
              return (
                (0, r.useEffect)(() => {
                  let e = async () => {
                    n(!0), m(null);
                    try {
                      let e = new c.JsonRpcProvider(a, 1),
                        r = new x.Contract(t, d.presaleAbi, e),
                        s = await r.getTokenPriceUSDT(),
                        l = await r.getTokenPriceETH(),
                        o = await r.totalSoldUSDT(),
                        n = await r.getETHPrice(),
                        u = await r.totalSold(),
                        m = await r.SELL_SUPPLY(),
                        p = new f.default(m).minus(u);
                      i({
                        tokenPrice: s,
                        tokenPriceETH: l,
                        totalSoldUSDT: o,
                        ethPrice: n,
                        tokensLeft: p,
                      });
                    } catch (e) {
                      m(e);
                    } finally {
                      n(!1);
                    }
                  };
                  e();
                  let r = setInterval(() => {
                    e();
                  }, 1e4);
                  return () => {
                    clearInterval(r);
                  };
                }, []),
                { presaleData: l, isLoading: o, error: u }
              );
            })({
              presaleAddress: d.presaleAddr[1],
              rpcUrl: d.rpcUrls[1],
              chainId: 1,
            });
          (0, r.useEffect)(() => {
            (async () => {
              p ? et(p) : et(1);
            })(),
              (async () => {
                let e = new c.JsonRpcProvider(d.rpcUrls[1], 1),
                  t = new x.Contract(d.presaleAddr[1], d.presaleAbi, e),
                  a = new x.Contract(d.tokenAddress[1], d.tokenAbi, e),
                  r = new x.Contract(d.usdtAddress, d.tokenAbi, e),
                  l = await a.balanceOf(d.presaleAddr[1]);
                if ((er(new f.BigNumber(l).shiftedBy(-18).toString()), s)) {
                  let e = await r.allowance(s, d.presaleAddr[1]);
                  J(new f.BigNumber(e).shiftedBy(-6).toString());
                }
                if (I && !isNaN(I))
                  switch (A) {
                    case "ETH":
                      let i = await t.getTokenAmountETH(N.ethers.parseEther(I));
                      _(N.ethers.formatUnits(i, 18));
                      break;
                    case "USDT":
                      let o = await t.getTokenAmountUSDT(
                        N.ethers.parseUnits(I, 6)
                      );
                      _(N.ethers.formatUnits(o, 18));
                  }
                else _("");
              })();
          }, [I, A, s, V]);
          let eo = (e) => {
              T(e), M(""), _("");
            },
            en = async () => {
              let e = new w.BrowserProvider(C),
                t = await e.getSigner(),
                r = new x.Contract(d.usdtAddress, d.tokenAbi, t);
              F(await r.balanceOf(s));
              let l = await a();
              l.data && B(l.data.balance);
            },
            ed = async () => {
              let t = new w.BrowserProvider(C),
                a = await t.getSigner(),
                r = new x.Contract(d.presaleAddr[1], d.presaleAbi, a);
              O(await r.addressToRefCode(s)),
                null == e
                  ? Y(
                      "0x0000000000000000000000000000000000000000000000000000000000000000"
                    )
                  : Y(e);
            },
            ec = async () => {
              if (s)
                try {
                  $(!0);
                  let e = new w.BrowserProvider(C),
                    t = await e.getSigner(),
                    a = new x.Contract(d.presaleAddr[1], d.presaleAbi, t);
                  switch (A) {
                    case "ETH":
                      let r = await a.buyTokenETH(s, G, {
                        value: N.ethers.parseEther(I),
                      });
                      await r.wait(),
                        S.toast.success("Token purchase successful");
                      break;
                    case "USDT":
                      let l = await a.buyTokenUSDT(
                        N.ethers.parseUnits(I, 6),
                        s,
                        G
                      );
                      await l.wait(),
                        S.toast.success("Token purchase successful");
                  }
                } catch (e) {
                  console.error("error", e),
                    S.toast.error("Token purchase failed"),
                    $(!1);
                } finally {
                  $(!1), M("0");
                }
            },
            ex = async () => {
              es &&
                (U(
                  new f.BigNumber(es.totalSoldUSDT)
                    .shiftedBy(-18)
                    .plus(2531425.35)
                    .toString()
                ),
                z(
                  new f.BigNumber(es.totalSoldUSDT)
                    .shiftedBy(-18)
                    .plus(2531425.35)
                    .dividedBy(1e7)
                    .multipliedBy(100)
                    .toString()
                ),
                Q(new f.BigNumber(es.tokensLeft).shiftedBy(-18).toString()));
            },
            ef = async () => {
              X(!0);
              let e = new w.BrowserProvider(C),
                t = await e.getSigner(),
                a = new x.Contract(d.usdtAddress, d.tokenAbi, t),
                r = await a.approve(
                  d.presaleAddr[1],
                  N.ethers.parseUnits(I, 6)
                );
              await r.wait(),
                S.toast.success("Token approval successful"),
                X(!1);
            };
          return (
            (0, r.useEffect)(() => {
              en(), ed(), ex();
            }, [s, ee, A, E, I, K, m, es]),
            (0, t.jsx)("div", {
              className:
                "lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end mt-7 lg:mt-2",
              children: (0, t.jsx)("div", {
                className:
                  "bg-gradient-to-r from-purple-600 from-20% via-purple-700 via-50% to-pink-600 to-80% rounded-2xl p-[1px]",
                children: (0, t.jsx)("div", {
                  className: "w-full max-w-sm lg:max-w-md xl:max-w-lg",
                  children: (0, t.jsxs)("div", {
                    className:
                      "relative bg-white dark:bg-gray-950 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden backdrop-blur-sm hover:shadow-purple-500/10 hover:border-purple-600 transition-all duration-300 group",
                    children: [
                      (0, t.jsx)("iframe", {
                        src: "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xcomingsoon&theme=light",
                        style: { width: "400px", height: "890px", border: "none", outline: "none" },
                        className: "".concat(l.className, " font-[900]"),
                      }),
                    ],
                  })
                }),
              }),
            })
          );
        }
        function A(e) {
          let { title: a, value: r, icon: s } = e;
          return (0, t.jsxs)("div", {
            className:
              "flex flex-col pt-[25px] pb-[25px] pl-[55px] pr-[55px] items-center justify-center bg-white dark:bg-[#0B101C] rounded-2xl shadow-2xl border border-gray-200 dark:hover:border-[#d02fc2] dark:border-gray-700 overflow-hidden backdrop-blur-sm hover:shadow-purple-500/10 hover:border-[#d02fc2] transition-all duration-300 group",
            children: [
              (0, t.jsx)("div", {
                className: "text-[#ff3bd4] text-3xl font-bold p-[7px]",
                children: (0, t.jsx)(g.FontAwesomeIcon, { icon: s }),
              }),
              (0, t.jsx)("div", {
                className: "text-gray-900 dark:text-white text-3xl font-bold ",
                children: r,
              }),
              (0, t.jsx)("div", {
                className:
                  "text-gray-600 dark:text-white text-sm text-center pt-2",
                children: a,
              }),
            ],
          });
        }
        function T() {
          let [e, s] = (0, r.useState)(0),
            [l, i] = (0, r.useState)(!1),
            [o, n] = (0, r.useState)([]);
          return (
            (0, r.useEffect)(() => {
              let e = ["Blockchain", "Community", "Decentralization"],
                t = setInterval(() => {
                  i(!0),
                    setTimeout(() => {
                      s((t) => (t + 1) % e.length), i(!1);
                    }, 500);
                }, 2250);
              return () => clearInterval(t);
            }, []),
            (0, r.useEffect)(() => {
              n(
                Array.from({ length: 15 }).map(() => ({
                  top: "-".concat(50 * Math.random(), "%"),
                  left: "".concat(100 * Math.random(), "%"),
                  delay: "".concat(5 * Math.random(), "s"),
                  duration: "".concat(5 + 10 * Math.random(), "s"),
                }))
              );
            }, []),
            (0, t.jsxs)("section", {
              className:
                "jsx-77093f95e6f59e37 relative min-h-screen light:bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:bg-gray-950 overflow-hidden mt-4",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "jsx-77093f95e6f59e37 absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none",
                }),
                (0, t.jsx)("div", {
                  className:
                    "jsx-77093f95e6f59e37 absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none",
                }),
                (0, t.jsx)("div", {
                  className:
                    "jsx-77093f95e6f59e37 absolute inset-0 pointer-events-none",
                  children: o.map((e, a) =>
                    (0, t.jsx)(
                      "div",
                      {
                        style: {
                          left: e.left,
                          animationDelay: e.delay,
                          animationDuration: e.duration,
                          animationIterationCount: "infinite",
                          animationName: "rainfall",
                        },
                        className:
                          "jsx-77093f95e6f59e37 opacity-0 absolute w-0.5 h-8 bg-gradient-to-b from-pink-500/60 to-pink-300/40 rounded-full",
                      },
                      a
                    )
                  ),
                }),
                (0, t.jsx)(a.default, {
                  id: "77093f95e6f59e37",
                  children:
                    "@keyframes rainfall{0%{opacity:0;transform:translateY(-100vh)}10%{opacity:1}90%{opacity:1}to{opacity:0;transform:translateY(100vh)}}.slide.jsx-77093f95e6f59e37 .cd-words-wrapper.jsx-77093f95e6f59e37{text-align:left;display:inline-block;position:relative}.slide.jsx-77093f95e6f59e37 .cd-words-wrapper.jsx-77093f95e6f59e37 .item-text.jsx-77093f95e6f59e37{white-space:nowrap;padding-bottom:1.5%;display:inline-block;position:absolute;top:0;left:0}.slide.jsx-77093f95e6f59e37 .cd-words-wrapper.jsx-77093f95e6f59e37 .item-text.is-visible.jsx-77093f95e6f59e37{position:relative}.slide.jsx-77093f95e6f59e37 .cd-words-wrapper.jsx-77093f95e6f59e37 .item-text.is-hidden.jsx-77093f95e6f59e37{visibility:hidden;animation:.6s slide-out}.slide.jsx-77093f95e6f59e37 .cd-words-wrapper.jsx-77093f95e6f59e37 .item-text.is-visible.jsx-77093f95e6f59e37{animation:.6s slide-in}@keyframes slide-in{0%{opacity:0;transform:translateY(-100%)}60%{transform:translateY(20%)}to{opacity:1;transform:translateY(0)}}@keyframes slide-out{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(100%)}}",
                }),
                (0, t.jsxs)("div", {
                  className:
                    "jsx-77093f95e6f59e37 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16",
                  children: [
                    (0, t.jsxs)("div", {
                      className:
                        "jsx-77093f95e6f59e37 lg:grid lg:grid-cols-12 gap-8 lg:gap-12",
                      children: [
                        (0, t.jsxs)("div", {
                          className:
                            "jsx-77093f95e6f59e37 lg:col-span-7 xl:col-span-8 text-center lg:text-left lg:pt-16 mt-3 lg:mt-0",
                          children: [
                            (0, t.jsxs)("h1", {
                              className:
                                "jsx-77093f95e6f59e37 text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 lg:mb-8 leading-tight",
                              children: [
                                (0, t.jsx)("span", {
                                  className:
                                    "jsx-77093f95e6f59e37 block bg-gradient-to-r from-purple-600 from-[10%] via-pink-600 via-[40%] to-pink-600 to-[85%] text-transparent bg-clip-text pb-[1%]",
                                  children: "Etherchain Ecosystem",
                                }),
                                (0, t.jsx)("span", {
                                  className: "jsx-77093f95e6f59e37 block",
                                  children: "Advancing AI with ",
                                }),
                                (0, t.jsx)("span", {
                                  className:
                                    "jsx-77093f95e6f59e37 color-off animationtext slide",
                                  children: (0, t.jsxs)("span", {
                                    className:
                                      "jsx-77093f95e6f59e37 s1 cd-words-wrapper",
                                    children: [
                                      (0, t.jsx)("span", {
                                        className:
                                          "jsx-77093f95e6f59e37 " +
                                          "item-text bg-gradient-to-r from-purple-600 from-[10%] via-pink-600 via-[40%] to-pink-600 to-[85%] text-transparent bg-clip-text ".concat(
                                            0 === e ? "is-visible" : "is-hidden"
                                          ),
                                        children: "Blockchain",
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "jsx-77093f95e6f59e37 " +
                                          "item-text bg-gradient-to-r from-purple-600 from-[10%] via-pink-600 via-[40%] to-pink-600 to-[85%] text-transparent bg-clip-text ".concat(
                                            1 === e ? "is-visible" : "is-hidden"
                                          ),
                                        children: "Governance",
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "jsx-77093f95e6f59e37 " +
                                          "item-text bg-gradient-to-r from-purple-600 from-[10%] via-pink-600 via-[40%] to-pink-600 to-[85%] text-transparent bg-clip-text ".concat(
                                            2 === e ? "is-visible" : "is-hidden"
                                          ),
                                        children: "Intelligence",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsx)("p", {
                              className:
                                "jsx-77093f95e6f59e37 text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-2 lg:mb-12 max-w-2xl mx-auto lg:mx-0",
                              children:
                                "Etherchain AI, Next-generation Blockchain ecosystem",
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "jsx-77093f95e6f59e37 hidden lg:flex justify-center items-center gap-4 w-[95%] mb-7 ml-3 mt-7",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "jsx-77093f95e6f59e37 h-[2px] w-60 bg-gradient-to-r from-[#2f9ed0] via-transparent to-[#d02fc2] opacity-60",
                                }),
                                (0, t.jsx)("a", {
                                  href: "https://app.solidproof.io/projects/etherchain-ai",
                                  className: "jsx-77093f95e6f59e37 w-[35%]",
                                  children: (0, t.jsx)("img", {
                                    src: "/images/solid-proof.png",
                                    alt: "Solid Proof",
                                    className:
                                      "jsx-77093f95e6f59e37  bg-gray-950 dark:bg-transparent rounded-[10px] p-1 border-2 border-transparent transition-all duration-300 transform hover:-translate-y-2 hover:border-[#2f9ed0]",
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className:
                                    "jsx-77093f95e6f59e37 h-[2px] w-60 bg-gradient-to-r from-[#2f9ed0] via-transparent to-[#d02fc2] opacity-60",
                                }),
                                (0, t.jsx)("a", {
                                  href: "https://spywolf.co/audits/EtherChainAI_0xE8AA1AD793ed17C9115DB1eEb9998Ea80c72f380.pdf",
                                  className: "jsx-77093f95e6f59e37 w-[35%]",
                                  children: (0, t.jsx)("img", {
                                    src: "/images/spywolf.png",
                                    alt: "Spywolf",
                                    className:
                                      "jsx-77093f95e6f59e37  bg-gray-950 dark:bg-transparent rounded-[10px] p-1 border-2 border-transparent transition-all duration-300 transform hover:-translate-y-2 hover:border-[#d02fc2]",
                                  }),
                                }),
                                (0, t.jsx)("div", {
                                  className:
                                    "jsx-77093f95e6f59e37 h-[2px] w-60 bg-gradient-to-r from-[#2f9ed0] via-transparent to-[#d02fc2] opacity-60",
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                "jsx-77093f95e6f59e37 hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 max-w-3xl",
                              children: [
                                (0, t.jsx)(A, {
                                  title: "Raised",
                                  value: "$2.5M+",
                                  icon: b.faDollarSign,
                                }),
                                (0, t.jsx)(A, {
                                  title: "Holders",
                                  value: "250+",
                                  icon: b.faUser,
                                }),
                                (0, t.jsx)(A, {
                                  title: "Partners",
                                  value: "50+",
                                  icon: b.faHandshake,
                                }),
                                (0, t.jsx)(A, {
                                  title: "Support",
                                  value: "24/7",
                                  icon: b.faHeadset,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsx)(C, {}),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "jsx-77093f95e6f59e37 lg:hidden flex justify-center items-center gap-4 w-[95%] mb-7 ml-3 mt-7",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "jsx-77093f95e6f59e37 h-[2px] w-60 bg-gradient-to-r from-[#2f9ed0] via-transparent to-[#d02fc2] opacity-60",
                        }),
                        (0, t.jsx)("a", {
                          href: "https://app.solidproof.io/projects/etherchain-ai",
                          className: "jsx-77093f95e6f59e37 w-[100%]",
                          children: (0, t.jsx)("img", {
                            src: "/images/solid-proof.png",
                            alt: "Solid Proof",
                            className:
                              "jsx-77093f95e6f59e37  bg-gray-950 dark:bg-transparent rounded-[10px] p-1 border-2 border-transparent transition-all duration-300 transform -translate-y-2 border-[#2f9ed0]",
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "jsx-77093f95e6f59e37 h-[2px] w-60 bg-gradient-to-r from-[#2f9ed0] via-transparent to-[#d02fc2] opacity-60",
                        }),
                        (0, t.jsx)("a", {
                          href: "https://spywolf.co/audits/EtherChainAI_0xE8AA1AD793ed17C9115DB1eEb9998Ea80c72f380.pdf",
                          className: "jsx-77093f95e6f59e37 w-[100%]",
                          children: (0, t.jsx)("img", {
                            src: "/images/spywolf.png",
                            alt: "Spywolf",
                            className:
                              "jsx-77093f95e6f59e37  bg-gray-950 dark:bg-transparent rounded-[10px] p-1 border-2 border-transparent transition-all duration-300 transform -translate-y-2 border-[#2f9ed0]",
                          }),
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "jsx-77093f95e6f59e37 h-[2px] w-60 bg-gradient-to-r from-[#2f9ed0] via-transparent to-[#d02fc2] opacity-60",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className:
                        "jsx-77093f95e6f59e37 lg:hidden grid grid-cols-2 gap-6 mt-12 max-w-sm mx-auto",
                      children: [
                        (0, t.jsx)(A, {
                          title: "Raised",
                          value: "$2.5M+",
                          icon: b.faDollarSign,
                        }),
                        (0, t.jsx)(A, {
                          title: "Holders",
                          value: "250+",
                          icon: b.faUser,
                        }),
                        (0, t.jsx)(A, {
                          title: "Partners",
                          value: "50+",
                          icon: b.faHandshake,
                        }),
                        (0, t.jsx)(A, {
                          title: "Support",
                          value: "24/7",
                          icon: b.faHeadset,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }
        e.s({ default: () => E }, 766325);
        let E = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            [t, a] = (0, r.useState)({}),
            s = (0, r.useRef)(null),
            l = { threshold: 0.1, rootMargin: "50px 0px", ...e },
            i = (0, r.useCallback)((e, t) => {
              a((a) => ({ ...a, [e]: t }));
            }, []);
          return (
            (0, r.useEffect)(() => {
              s.current = new IntersectionObserver((e) => {
                e.forEach((e) => {
                  if (e.isIntersecting) {
                    let a = e.target.dataset.section;
                    if (a) {
                      var t;
                      i(a, !0),
                        null == (t = s.current) || t.unobserve(e.target);
                    }
                  }
                });
              }, l);
              let e = requestAnimationFrame(() => {
                document.querySelectorAll("[data-section]").forEach((e) => {
                  var t;
                  null == (t = s.current) || t.observe(e);
                });
              });
              return () => {
                var t;
                null == (t = s.current) || t.disconnect(),
                  cancelAnimationFrame(e);
              };
            }, [i, l.threshold, l.rootMargin]),
            t
          );
        };
      },
      [766325],
    ],
  },
]);

//# sourceMappingURL=2523670a78d5e226.js.map
