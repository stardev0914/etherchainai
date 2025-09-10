(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    129981: (e) => {
      "use strict";
      var { m: t, e: n } = e;
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    493892: (e) => {
      "use strict";
      var { m: t, e: n } = e,
        a = e.r(129981);
      function r() {}
      function i() {}
      (i.resetWarningCache = r),
        (t.exports = function () {
          function e(e, t, n, r, i, o) {
            if (o !== a) {
              var c = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((c.name = "Invariant Violation"), c);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: r,
          };
          return (n.PropTypes = n), n;
        });
    },
    14481: (e) => {
      var { m: t, e: n } = e;
      t.exports = e.r(493892)();
    },
    12448: [
      (e) => {
        "use strict";
        function t(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, a);
          }
          return n;
        }
        function n(e) {
          for (var n = 1; n < arguments.length; n++) {
            var a = null != arguments[n] ? arguments[n] : {};
            n % 2
              ? t(Object(a), !0).forEach(function (t) {
                  var n, r;
                  (n = t),
                    (r = a[t]),
                    (n = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var a = n.call(e, t || "default");
                          if ("object" != typeof a) return a;
                          throw TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : t + "";
                    })(n)) in e
                      ? Object.defineProperty(e, n, {
                          value: r,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[n] = r);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
              : t(Object(a)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(a, t)
                  );
                });
          }
          return e;
        }
        e.s({ FontAwesomeIcon: () => tK }, 12448), e.i(922271);
        let a = () => {},
          r = {},
          i = {},
          o = null,
          c = { mark: a, measure: a };
        try {
          "undefined" != typeof window && (r = window),
            "undefined" != typeof document && (i = document),
            "undefined" != typeof MutationObserver && (o = MutationObserver),
            "undefined" != typeof performance && (c = performance);
        } catch (e) {}
        let { userAgent: l = "" } = r.navigator || {},
          s = r,
          f = i,
          u = o,
          d = c;
        s.document;
        let m =
            !!f.documentElement &&
            !!f.head &&
            "function" == typeof f.addEventListener &&
            "function" == typeof f.createElement,
          p = ~l.indexOf("MSIE") || ~l.indexOf("Trident/");
        var h = {
            classic: {
              fa: "solid",
              fas: "solid",
              "fa-solid": "solid",
              far: "regular",
              "fa-regular": "regular",
              fal: "light",
              "fa-light": "light",
              fat: "thin",
              "fa-thin": "thin",
              fab: "brands",
              "fa-brands": "brands",
            },
            duotone: {
              fa: "solid",
              fad: "solid",
              "fa-solid": "solid",
              "fa-duotone": "solid",
              fadr: "regular",
              "fa-regular": "regular",
              fadl: "light",
              "fa-light": "light",
              fadt: "thin",
              "fa-thin": "thin",
            },
            sharp: {
              fa: "solid",
              fass: "solid",
              "fa-solid": "solid",
              fasr: "regular",
              "fa-regular": "regular",
              fasl: "light",
              "fa-light": "light",
              fast: "thin",
              "fa-thin": "thin",
            },
            "sharp-duotone": {
              fa: "solid",
              fasds: "solid",
              "fa-solid": "solid",
              fasdr: "regular",
              "fa-regular": "regular",
              fasdl: "light",
              "fa-light": "light",
              fasdt: "thin",
              "fa-thin": "thin",
            },
          },
          g = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"],
          b = "classic",
          y = "duotone",
          v = [b, y, "sharp", "sharp-duotone"],
          x = new Map([
            [
              "classic",
              {
                defaultShortPrefixId: "fas",
                defaultStyleId: "solid",
                styleIds: ["solid", "regular", "light", "thin", "brands"],
                futureStyleIds: [],
                defaultFontWeight: 900,
              },
            ],
            [
              "sharp",
              {
                defaultShortPrefixId: "fass",
                defaultStyleId: "solid",
                styleIds: ["solid", "regular", "light", "thin"],
                futureStyleIds: [],
                defaultFontWeight: 900,
              },
            ],
            [
              "duotone",
              {
                defaultShortPrefixId: "fad",
                defaultStyleId: "solid",
                styleIds: ["solid", "regular", "light", "thin"],
                futureStyleIds: [],
                defaultFontWeight: 900,
              },
            ],
            [
              "sharp-duotone",
              {
                defaultShortPrefixId: "fasds",
                defaultStyleId: "solid",
                styleIds: ["solid", "regular", "light", "thin"],
                futureStyleIds: [],
                defaultFontWeight: 900,
              },
            ],
          ]),
          z = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
          k = {
            kit: { fak: "kit", "fa-kit": "kit" },
            "kit-duotone": {
              fakd: "kit-duotone",
              "fa-kit-duotone": "kit-duotone",
            },
          },
          w = ["fak", "fakd"],
          M = { kit: { kit: "fak" }, "kit-duotone": { "kit-duotone": "fakd" } },
          C = {
            GROUP: "duotone-group",
            SWAP_OPACITY: "swap-opacity",
            PRIMARY: "primary",
            SECONDARY: "secondary",
          },
          L = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
          A = {
            classic: {
              fab: "fa-brands",
              fad: "fa-duotone",
              fal: "fa-light",
              far: "fa-regular",
              fas: "fa-solid",
              fat: "fa-thin",
            },
            duotone: { fadr: "fa-regular", fadl: "fa-light", fadt: "fa-thin" },
            sharp: {
              fass: "fa-solid",
              fasr: "fa-regular",
              fasl: "fa-light",
              fast: "fa-thin",
            },
            "sharp-duotone": {
              fasds: "fa-solid",
              fasdr: "fa-regular",
              fasdl: "fa-light",
              fasdt: "fa-thin",
            },
          },
          O = [
            "fa",
            "fas",
            "far",
            "fal",
            "fat",
            "fad",
            "fadr",
            "fadl",
            "fadt",
            "fab",
            "fass",
            "fasr",
            "fasl",
            "fast",
            "fasds",
            "fasdr",
            "fasdl",
            "fasdt",
            "fa-classic",
            "fa-duotone",
            "fa-sharp",
            "fa-sharp-duotone",
            "fa-solid",
            "fa-regular",
            "fa-light",
            "fa-thin",
            "fa-duotone",
            "fa-brands",
          ],
          N = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          S = N.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
          P = [
            "classic",
            "duotone",
            "sharp",
            "sharp-duotone",
            "solid",
            "regular",
            "light",
            "thin",
            "duotone",
            "brands",
            "2xs",
            "xs",
            "sm",
            "lg",
            "xl",
            "2xl",
            "beat",
            "border",
            "fade",
            "beat-fade",
            "bounce",
            "flip-both",
            "flip-horizontal",
            "flip-vertical",
            "flip",
            "fw",
            "inverse",
            "layers-counter",
            "layers-text",
            "layers",
            "li",
            "pull-left",
            "pull-right",
            "pulse",
            "rotate-180",
            "rotate-270",
            "rotate-90",
            "rotate-by",
            "shake",
            "spin-pulse",
            "spin-reverse",
            "spin",
            "stack-1x",
            "stack-2x",
            "stack",
            "ul",
            C.GROUP,
            C.SWAP_OPACITY,
            C.PRIMARY,
            C.SECONDARY,
          ]
            .concat(N.map((e) => "".concat(e, "x")))
            .concat(S.map((e) => "w-".concat(e)));
        let j = "___FONT_AWESOME___",
          E = "svg-inline--fa",
          I = "data-fa-i2svg",
          F = "data-fa-pseudo-element",
          D = "data-prefix",
          T = "data-icon",
          R = "fontawesome-i2svg",
          Y = ["HTML", "HEAD", "STYLE", "SCRIPT"],
          U = (() => {
            try {
              return !0;
            } catch (e) {
              return !1;
            }
          })();
        function W(e) {
          return new Proxy(e, { get: (e, t) => (t in e ? e[t] : e[b]) });
        }
        let _ = n({}, h);
        _[b] = n(
          n(n(n({}, { "fa-duotone": "duotone" }), h[b]), k.kit),
          k["kit-duotone"]
        );
        let H = W(_),
          q = n(
            {},
            {
              classic: {
                solid: "fas",
                regular: "far",
                light: "fal",
                thin: "fat",
                brands: "fab",
              },
              duotone: {
                solid: "fad",
                regular: "fadr",
                light: "fadl",
                thin: "fadt",
              },
              sharp: {
                solid: "fass",
                regular: "fasr",
                light: "fasl",
                thin: "fast",
              },
              "sharp-duotone": {
                solid: "fasds",
                regular: "fasdr",
                light: "fasdl",
                thin: "fasdt",
              },
            }
          );
        q[b] = n(
          n(n(n({}, { duotone: "fad" }), q[b]), M.kit),
          M["kit-duotone"]
        );
        let B = W(q),
          G = n({}, A);
        G[b] = n(n({}, G[b]), { fak: "fa-kit" });
        let X = W(G),
          V = n(
            {},
            {
              classic: {
                "fa-brands": "fab",
                "fa-duotone": "fad",
                "fa-light": "fal",
                "fa-regular": "far",
                "fa-solid": "fas",
                "fa-thin": "fat",
              },
              duotone: {
                "fa-regular": "fadr",
                "fa-light": "fadl",
                "fa-thin": "fadt",
              },
              sharp: {
                "fa-solid": "fass",
                "fa-regular": "fasr",
                "fa-light": "fasl",
                "fa-thin": "fast",
              },
              "sharp-duotone": {
                "fa-solid": "fasds",
                "fa-regular": "fasdr",
                "fa-light": "fasdl",
                "fa-thin": "fasdt",
              },
            }
          );
        (V[b] = n(n({}, V[b]), { "fa-kit": "fak" })), W(V);
        let K =
            /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
          Q = "fa-layers-text",
          $ =
            /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i;
        W(
          n(
            {},
            {
              classic: {
                900: "fas",
                400: "far",
                normal: "far",
                300: "fal",
                100: "fat",
              },
              duotone: { 900: "fad", 400: "fadr", 300: "fadl", 100: "fadt" },
              sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" },
              "sharp-duotone": {
                900: "fasds",
                400: "fasdr",
                300: "fasdl",
                100: "fasdt",
              },
            }
          )
        );
        let J = [
            "class",
            "data-prefix",
            "data-icon",
            "data-fa-transform",
            "data-fa-mask",
          ],
          Z = {
            GROUP: "duotone-group",
            PRIMARY: "primary",
            SECONDARY: "secondary",
          },
          ee = ["kit", ...P],
          et = s.FontAwesomeConfig || {};
        f &&
          "function" == typeof f.querySelector &&
          [
            ["data-family-prefix", "familyPrefix"],
            ["data-css-prefix", "cssPrefix"],
            ["data-family-default", "familyDefault"],
            ["data-style-default", "styleDefault"],
            ["data-replacement-class", "replacementClass"],
            ["data-auto-replace-svg", "autoReplaceSvg"],
            ["data-auto-add-css", "autoAddCss"],
            ["data-auto-a11y", "autoA11y"],
            ["data-search-pseudo-elements", "searchPseudoElements"],
            ["data-observe-mutations", "observeMutations"],
            ["data-mutate-approach", "mutateApproach"],
            ["data-keep-original-source", "keepOriginalSource"],
            ["data-measure-performance", "measurePerformance"],
            ["data-show-missing-icons", "showMissingIcons"],
          ].forEach((e) => {
            let [t, n] = e,
              a = (function (e) {
                return "" === e || ("false" !== e && ("true" === e || e));
              })(
                (function (e) {
                  var t = f.querySelector("script[" + e + "]");
                  if (t) return t.getAttribute(e);
                })(t)
              );
            null != a && (et[n] = a);
          });
        let en = {
          styleDefault: "solid",
          familyDefault: b,
          cssPrefix: "fa",
          replacementClass: E,
          autoReplaceSvg: !0,
          autoAddCss: !0,
          autoA11y: !0,
          searchPseudoElements: !1,
          observeMutations: !0,
          mutateApproach: "async",
          keepOriginalSource: !0,
          measurePerformance: !1,
          showMissingIcons: !0,
        };
        et.familyPrefix && (et.cssPrefix = et.familyPrefix);
        let ea = n(n({}, en), et);
        ea.autoReplaceSvg || (ea.observeMutations = !1);
        let er = {};
        Object.keys(en).forEach((e) => {
          Object.defineProperty(er, e, {
            enumerable: !0,
            set: function (t) {
              (ea[e] = t), ei.forEach((e) => e(er));
            },
            get: function () {
              return ea[e];
            },
          });
        }),
          Object.defineProperty(er, "familyPrefix", {
            enumerable: !0,
            set: function (e) {
              (ea.cssPrefix = e), ei.forEach((e) => e(er));
            },
            get: function () {
              return ea.cssPrefix;
            },
          }),
          (s.FontAwesomeConfig = er);
        let ei = [],
          eo = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
        function ec() {
          let e = 12,
            t = "";
          for (; e-- > 0; )
            t +=
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[
                (62 * Math.random()) | 0
              ];
          return t;
        }
        function el(e) {
          let t = [];
          for (let n = (e || []).length >>> 0; n--; ) t[n] = e[n];
          return t;
        }
        function es(e) {
          return e.classList
            ? el(e.classList)
            : (e.getAttribute("class") || "").split(" ").filter((e) => e);
        }
        function ef(e) {
          return ""
            .concat(e)
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        }
        function eu(e) {
          return Object.keys(e || {}).reduce(
            (t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"),
            ""
          );
        }
        function ed(e) {
          return (
            e.size !== eo.size ||
            e.x !== eo.x ||
            e.y !== eo.y ||
            e.rotate !== eo.rotate ||
            e.flipX ||
            e.flipY
          );
        }
        function em() {
          let e = er.cssPrefix,
            t = er.replacementClass,
            n =
              ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}';
          if ("fa" !== e || t !== E) {
            let a = RegExp("\\.".concat("fa", "\\-"), "g"),
              r = RegExp("\\--".concat("fa", "\\-"), "g"),
              i = RegExp("\\.".concat(E), "g");
            n = n
              .replace(a, ".".concat(e, "-"))
              .replace(r, "--".concat(e, "-"))
              .replace(i, ".".concat(t));
          }
          return n;
        }
        let ep = !1;
        function eh() {
          er.autoAddCss &&
            !ep &&
            (!(function (e) {
              if (!e || !m) return;
              let t = f.createElement("style");
              t.setAttribute("type", "text/css"), (t.innerHTML = e);
              let n = f.head.childNodes,
                a = null;
              for (let e = n.length - 1; e > -1; e--) {
                let t = n[e];
                ["STYLE", "LINK"].indexOf((t.tagName || "").toUpperCase()) >
                  -1 && (a = t);
              }
              f.head.insertBefore(t, a);
            })(em()),
            (ep = !0));
        }
        let eg = s || {};
        eg[j] || (eg[j] = {}),
          eg[j].styles || (eg[j].styles = {}),
          eg[j].hooks || (eg[j].hooks = {}),
          eg[j].shims || (eg[j].shims = []);
        var eb = eg[j];
        let ey = [],
          ev = function () {
            f.removeEventListener("DOMContentLoaded", ev),
              (ex = 1),
              ey.map((e) => e());
          },
          ex = !1;
        function ez(e) {
          let { tag: t, attributes: n = {}, children: a = [] } = e;
          return "string" == typeof e
            ? ef(e)
            : "<"
                .concat(t, " ")
                .concat(
                  Object.keys(n || {})
                    .reduce(
                      (e, t) => e + "".concat(t, '="').concat(ef(n[t]), '" '),
                      ""
                    )
                    .trim(),
                  ">"
                )
                .concat(a.map(ez).join(""), "</")
                .concat(t, ">");
        }
        function ek(e, t, n) {
          if (e && e[t] && e[t][n])
            return { prefix: t, iconName: n, icon: e[t][n] };
        }
        m &&
          ((ex = (
            f.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/
          ).test(f.readyState)) ||
            f.addEventListener("DOMContentLoaded", ev));
        var ew = function (e, t, n, a) {
          var r,
            i,
            o,
            c = Object.keys(e),
            l = c.length,
            s =
              void 0 !== a
                ? function (e, n, r, i) {
                    return t.call(a, e, n, r, i);
                  }
                : t;
          for (
            void 0 === n ? ((r = 1), (o = e[c[0]])) : ((r = 0), (o = n));
            r < l;
            r++
          )
            o = s(o, e[(i = c[r])], i, e);
          return o;
        };
        function eM(e) {
          let t = (function (e) {
            let t = [],
              n = 0,
              a = e.length;
            for (; n < a; ) {
              let r = e.charCodeAt(n++);
              if (r >= 55296 && r <= 56319 && n < a) {
                let a = e.charCodeAt(n++);
                (64512 & a) == 56320
                  ? t.push(((1023 & r) << 10) + (1023 & a) + 65536)
                  : (t.push(r), n--);
              } else t.push(r);
            }
            return t;
          })(e);
          return 1 === t.length ? t[0].toString(16) : null;
        }
        function eC(e) {
          return Object.keys(e).reduce((t, n) => {
            let a = e[n];
            return a.icon ? (t[a.iconName] = a.icon) : (t[n] = a), t;
          }, {});
        }
        function eL(e, t) {
          let a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            { skipHooks: r = !1 } = a,
            i = eC(t);
          "function" != typeof eb.hooks.addPack || r
            ? (eb.styles[e] = n(n({}, eb.styles[e] || {}), i))
            : eb.hooks.addPack(e, eC(t)),
            "fas" === e && eL("fa", t);
        }
        let { styles: eA, shims: eO } = eb,
          eN = Object.keys(X),
          eS = eN.reduce((e, t) => ((e[t] = Object.keys(X[t])), e), {}),
          eP = null,
          ej = {},
          eE = {},
          eI = {},
          eF = {},
          eD = {},
          eT = () => {
            let e = (e) => ew(eA, (t, n, a) => ((t[a] = ew(n, e, {})), t), {});
            (ej = e(
              (e, t, n) => (
                t[3] && (e[t[3]] = n),
                t[2] &&
                  t[2]
                    .filter((e) => "number" == typeof e)
                    .forEach((t) => {
                      e[t.toString(16)] = n;
                    }),
                e
              )
            )),
              (eE = e(
                (e, t, n) => (
                  (e[n] = n),
                  t[2] &&
                    t[2]
                      .filter((e) => "string" == typeof e)
                      .forEach((t) => {
                        e[t] = n;
                      }),
                  e
                )
              )),
              (eD = e((e, t, n) => {
                let a = t[2];
                return (
                  (e[n] = n),
                  a.forEach((t) => {
                    e[t] = n;
                  }),
                  e
                );
              }));
            let t = "far" in eA || er.autoFetchSvg,
              n = ew(
                eO,
                (e, n) => {
                  let a = n[0],
                    r = n[1],
                    i = n[2];
                  return (
                    "far" !== r || t || (r = "fas"),
                    "string" == typeof a &&
                      (e.names[a] = { prefix: r, iconName: i }),
                    "number" == typeof a &&
                      (e.unicodes[a.toString(16)] = { prefix: r, iconName: i }),
                    e
                  );
                },
                { names: {}, unicodes: {} }
              );
            (eI = n.names),
              (eF = n.unicodes),
              (eP = e_(er.styleDefault, { family: er.familyDefault }));
          };
        function eR(e, t) {
          return (ej[e] || {})[t];
        }
        function eY(e, t) {
          return (eD[e] || {})[t];
        }
        function eU(e) {
          return eI[e] || { prefix: null, iconName: null };
        }
        !(function (e) {
          ei.push(e),
            () => {
              ei.splice(ei.indexOf(e), 1);
            };
        })((e) => {
          eP = e_(e.styleDefault, { family: er.familyDefault });
        }),
          eT();
        let eW = () => ({ prefix: null, iconName: null, rest: [] });
        function e_(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { family: n = b } = t,
            a = H[n][e];
          if (n === y && !e) return "fad";
          let r = B[n][e] || B[n][a],
            i = e in eb.styles ? e : null;
          return r || i || null;
        }
        function eH(e) {
          return e.sort().filter((e, t, n) => n.indexOf(e) === t);
        }
        function eq(e) {
          let t,
            a,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { skipLookups: i = !1 } = r,
            o = null,
            c = O.concat(L),
            l = eH(e.filter((e) => c.includes(e))),
            s = eH(e.filter((e) => !O.includes(e))),
            [f = null] = l.filter((e) => ((o = e), !g.includes(e))),
            u = (function (e) {
              let t = b,
                n = eN.reduce(
                  (e, t) => (
                    (e[t] = "".concat(er.cssPrefix, "-").concat(t)), e
                  ),
                  {}
                );
              return (
                v.forEach((a) => {
                  (e.includes(n[a]) || e.some((e) => eS[a].includes(e))) &&
                    (t = a);
                }),
                t
              );
            })(l),
            d = n(
              n(
                {},
                ((t = []),
                (a = null),
                s.forEach((e) => {
                  let n = (function (e, t) {
                    let n = t.split("-"),
                      a = n[0],
                      r = n.slice(1).join("-");
                    return a !== e || "" === r || ~ee.indexOf(r) ? null : r;
                  })(er.cssPrefix, e);
                  n ? (a = n) : e && t.push(e);
                }),
                { iconName: a, rest: t })
              ),
              {},
              { prefix: e_(f, { family: u }) }
            );
          return n(
            n(
              n({}, d),
              (function (e) {
                let {
                    values: t,
                    family: n,
                    canonical: a,
                    givenPrefix: r = "",
                    styles: i = {},
                    config: o = {},
                  } = e,
                  c = n === y,
                  l = t.includes("fa-duotone") || t.includes("fad"),
                  s = "duotone" === o.familyDefault,
                  f = "fad" === a.prefix || "fa-duotone" === a.prefix;
                return (
                  !c && (l || s || f) && (a.prefix = "fad"),
                  (t.includes("fa-brands") || t.includes("fab")) &&
                    (a.prefix = "fab"),
                  !a.prefix &&
                    eB.includes(n) &&
                    (Object.keys(i).find((e) => eG.includes(e)) ||
                      o.autoFetchSvg) &&
                    ((a.prefix = x.get(n).defaultShortPrefixId),
                    (a.iconName = eY(a.prefix, a.iconName) || a.iconName)),
                  ("fa" === a.prefix || "fa" === r) && (a.prefix = eP || "fas"),
                  a
                );
              })({
                values: e,
                family: u,
                styles: eA,
                config: er,
                canonical: d,
                givenPrefix: o,
              })
            ),
            (function (e, t, n) {
              let { prefix: a, iconName: r } = n;
              if (e || !a || !r) return { prefix: a, iconName: r };
              let i = "fa" === t ? eU(r) : {},
                o = eY(a, r);
              return (
                (r = i.iconName || o || r),
                "far" !== (a = i.prefix || a) ||
                  eA.far ||
                  !eA.fas ||
                  er.autoFetchSvg ||
                  (a = "fas"),
                { prefix: a, iconName: r }
              );
            })(i, o, d)
          );
        }
        let eB = v.filter((e) => e !== b || e !== y),
          eG = Object.keys(A)
            .filter((e) => e !== b)
            .map((e) => Object.keys(A[e]))
            .flat(),
          eX = [],
          eV = {},
          eK = {},
          eQ = Object.keys(eK);
        function e$(e, t) {
          for (
            var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), r = 2;
            r < n;
            r++
          )
            a[r - 2] = arguments[r];
          return (
            (eV[e] || []).forEach((e) => {
              t = e.apply(null, [t, ...a]);
            }),
            t
          );
        }
        function eJ(e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), a = 1;
            a < t;
            a++
          )
            n[a - 1] = arguments[a];
          (eV[e] || []).forEach((e) => {
            e.apply(null, n);
          });
        }
        function eZ() {
          let e = arguments[0],
            t = Array.prototype.slice.call(arguments, 1);
          return eK[e] ? eK[e].apply(null, t) : void 0;
        }
        function e1(e) {
          "fa" === e.prefix && (e.prefix = "fas");
          let { iconName: t } = e,
            n = e.prefix || eP;
          if (t)
            return (
              (t = eY(n, t) || t),
              ek(e2.definitions, n, t) || ek(eb.styles, n, t)
            );
        }
        let e2 = new (class {
            add() {
              for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
                t[a] = arguments[a];
              let r = t.reduce(this._pullDefinitions, {});
              Object.keys(r).forEach((e) => {
                (this.definitions[e] = n(
                  n({}, this.definitions[e] || {}),
                  r[e]
                )),
                  eL(e, r[e]);
                let t = X[b][e];
                t && eL(t, r[e]), eT();
              });
            }
            reset() {
              this.definitions = {};
            }
            _pullDefinitions(e, t) {
              let n = t.prefix && t.iconName && t.icon ? { 0: t } : t;
              return (
                Object.keys(n).map((t) => {
                  let { prefix: a, iconName: r, icon: i } = n[t],
                    o = i[2];
                  e[a] || (e[a] = {}),
                    o.length > 0 &&
                      o.forEach((t) => {
                        "string" == typeof t && (e[a][t] = i);
                      }),
                    (e[a][r] = i);
                }),
                e
              );
            }
            constructor() {
              this.definitions = {};
            }
          })(),
          e0 = {
            noAuto: () => {
              (er.autoReplaceSvg = !1),
                (er.observeMutations = !1),
                eJ("noAuto");
            },
            config: er,
            dom: {
              i2svg: function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return m
                  ? (eJ("beforeI2svg", e),
                    eZ("pseudoElements2svg", e),
                    eZ("i2svg", e))
                  : Promise.reject(
                      Error("Operation requires a DOM of some kind.")
                    );
              },
              watch: function () {
                var e;
                let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  { autoReplaceSvgRoot: n } = t;
                !1 === er.autoReplaceSvg && (er.autoReplaceSvg = !0),
                  (er.observeMutations = !0),
                  (e = () => {
                    e4({ autoReplaceSvgRoot: n }), eJ("watch", t);
                  }),
                  m && (ex ? setTimeout(e, 0) : ey.push(e));
              },
            },
            parse: {
              icon: (e) => {
                if (null === e) return null;
                if ("object" == typeof e && e.prefix && e.iconName)
                  return {
                    prefix: e.prefix,
                    iconName: eY(e.prefix, e.iconName) || e.iconName,
                  };
                if (Array.isArray(e) && 2 === e.length) {
                  let t = 0 === e[1].indexOf("fa-") ? e[1].slice(3) : e[1],
                    n = e_(e[0]);
                  return { prefix: n, iconName: eY(n, t) || t };
                }
                if (
                  "string" == typeof e &&
                  (e.indexOf("".concat(er.cssPrefix, "-")) > -1 || e.match(K))
                ) {
                  let t = eq(e.split(" "), { skipLookups: !0 });
                  return {
                    prefix: t.prefix || eP,
                    iconName: eY(t.prefix, t.iconName) || t.iconName,
                  };
                }
                if ("string" == typeof e) {
                  let t = eP;
                  return { prefix: t, iconName: eY(t, e) || e };
                }
              },
            },
            library: e2,
            findIconDefinition: e1,
            toHtml: ez,
          },
          e4 = function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              { autoReplaceSvgRoot: t = f } = e;
            (Object.keys(eb.styles).length > 0 || er.autoFetchSvg) &&
              m &&
              er.autoReplaceSvg &&
              e0.dom.i2svg({ node: t });
          };
        function e3(e, t) {
          return (
            Object.defineProperty(e, "abstract", { get: t }),
            Object.defineProperty(e, "html", {
              get: function () {
                return e.abstract.map((e) => ez(e));
              },
            }),
            Object.defineProperty(e, "node", {
              get: function () {
                if (!m) return;
                let t = f.createElement("div");
                return (t.innerHTML = e.html), t.children;
              },
            }),
            e
          );
        }
        function e6(e) {
          let {
              icons: { main: t, mask: a },
              prefix: r,
              iconName: i,
              transform: o,
              symbol: c,
              title: l,
              maskId: s,
              titleId: f,
              extra: u,
              watchable: d = !1,
            } = e,
            { width: m, height: p } = a.found ? a : t,
            h = w.includes(r),
            g = [
              er.replacementClass,
              i ? "".concat(er.cssPrefix, "-").concat(i) : "",
            ]
              .filter((e) => -1 === u.classes.indexOf(e))
              .filter((e) => "" !== e || !!e)
              .concat(u.classes)
              .join(" "),
            b = {
              children: [],
              attributes: n(
                n({}, u.attributes),
                {},
                {
                  "data-prefix": r,
                  "data-icon": i,
                  class: g,
                  role: u.attributes.role || "img",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 ".concat(m, " ").concat(p),
                }
              ),
            },
            y =
              h && !~u.classes.indexOf("fa-fw")
                ? { width: "".concat((m / p) * 1, "em") }
                : {};
          d && (b.attributes[I] = ""),
            l &&
              (b.children.push({
                tag: "title",
                attributes: {
                  id:
                    b.attributes["aria-labelledby"] ||
                    "title-".concat(f || ec()),
                },
                children: [l],
              }),
              delete b.attributes.title);
          let v = n(
              n({}, b),
              {},
              {
                prefix: r,
                iconName: i,
                main: t,
                mask: a,
                maskId: s,
                transform: o,
                symbol: c,
                styles: n(n({}, y), u.styles),
              }
            ),
            { children: x, attributes: z } =
              a.found && t.found
                ? eZ("generateAbstractMask", v) || {
                    children: [],
                    attributes: {},
                  }
                : eZ("generateAbstractIcon", v) || {
                    children: [],
                    attributes: {},
                  };
          return ((v.children = x), (v.attributes = z), c)
            ? (function (e) {
                let {
                    prefix: t,
                    iconName: a,
                    children: r,
                    attributes: i,
                    symbol: o,
                  } = e,
                  c =
                    !0 === o
                      ? "".concat(t, "-").concat(er.cssPrefix, "-").concat(a)
                      : o;
                return [
                  {
                    tag: "svg",
                    attributes: { style: "display: none;" },
                    children: [
                      {
                        tag: "symbol",
                        attributes: n(n({}, i), {}, { id: c }),
                        children: r,
                      },
                    ],
                  },
                ];
              })(v)
            : (function (e) {
                let {
                  children: t,
                  main: a,
                  mask: r,
                  attributes: i,
                  styles: o,
                  transform: c,
                } = e;
                if (ed(c) && a.found && !r.found) {
                  let { width: e, height: t } = a,
                    r = { x: e / t / 2, y: 0.5 };
                  i.style = eu(
                    n(
                      n({}, o),
                      {},
                      {
                        "transform-origin": ""
                          .concat(r.x + c.x / 16, "em ")
                          .concat(r.y + c.y / 16, "em"),
                      }
                    )
                  );
                }
                return [{ tag: "svg", attributes: i, children: t }];
              })(v);
        }
        function e5(e) {
          let {
              content: t,
              width: a,
              height: r,
              transform: i,
              title: o,
              extra: c,
              watchable: l = !1,
            } = e,
            s = n(
              n(n({}, c.attributes), o ? { title: o } : {}),
              {},
              { class: c.classes.join(" ") }
            );
          l && (s[I] = "");
          let f = n({}, c.styles);
          ed(i) &&
            ((f.transform = (function (e) {
              let {
                  transform: t,
                  width: n = 16,
                  height: a = 16,
                  startCentered: r = !1,
                } = e,
                i = "";
              return (
                r && p
                  ? (i += "translate("
                      .concat(t.x / 16 - n / 2, "em, ")
                      .concat(t.y / 16 - a / 2, "em) "))
                  : r
                  ? (i += "translate(calc(-50% + "
                      .concat(t.x / 16, "em), calc(-50% + ")
                      .concat(t.y / 16, "em)) "))
                  : (i += "translate("
                      .concat(t.x / 16, "em, ")
                      .concat(t.y / 16, "em) ")),
                (i += "scale("
                  .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
                  .concat((t.size / 16) * (t.flipY ? -1 : 1), ") ")),
                (i += "rotate(".concat(t.rotate, "deg) "))
              );
            })({ transform: i, startCentered: !0, width: a, height: r })),
            (f["-webkit-transform"] = f.transform));
          let u = eu(f);
          u.length > 0 && (s.style = u);
          let d = [];
          return (
            d.push({ tag: "span", attributes: s, children: [t] }),
            o &&
              d.push({
                tag: "span",
                attributes: { class: "sr-only" },
                children: [o],
              }),
            d
          );
        }
        let { styles: e8 } = eb;
        function e7(e) {
          let t = e[0],
            n = e[1],
            [a] = e.slice(4);
          return {
            found: !0,
            width: t,
            height: n,
            icon: Array.isArray(a)
              ? {
                  tag: "g",
                  attributes: {
                    class: "".concat(er.cssPrefix, "-").concat(Z.GROUP),
                  },
                  children: [
                    {
                      tag: "path",
                      attributes: {
                        class: "".concat(er.cssPrefix, "-").concat(Z.SECONDARY),
                        fill: "currentColor",
                        d: a[0],
                      },
                    },
                    {
                      tag: "path",
                      attributes: {
                        class: "".concat(er.cssPrefix, "-").concat(Z.PRIMARY),
                        fill: "currentColor",
                        d: a[1],
                      },
                    },
                  ],
                }
              : { tag: "path", attributes: { fill: "currentColor", d: a } },
          };
        }
        let e9 = { found: !1, width: 512, height: 512 };
        function te(e, t) {
          let a = t;
          return (
            "fa" === t && null !== er.styleDefault && (t = eP),
            new Promise((r, i) => {
              var o, c;
              if ("fa" === a) {
                let n = eU(e) || {};
                (e = n.iconName || e), (t = n.prefix || t);
              }
              if (e && t && e8[t] && e8[t][e]) return r(e7(e8[t][e]));
              (o = e),
                (c = t),
                U ||
                  er.showMissingIcons ||
                  !o ||
                  console.error(
                    'Icon with name "'
                      .concat(o, '" and prefix "')
                      .concat(c, '" is missing.')
                  ),
                r(
                  n(
                    n({}, e9),
                    {},
                    {
                      icon:
                        (er.showMissingIcons &&
                          e &&
                          eZ("missingIconAbstract")) ||
                        {},
                    }
                  )
                );
            })
          );
        }
        let tt = () => {},
          tn =
            er.measurePerformance && d && d.mark && d.measure
              ? d
              : { mark: tt, measure: tt },
          ta = 'FA "6.7.2"';
        var tr = {
          begin: (e) => (
            tn.mark("".concat(ta, " ").concat(e, " begins")),
            () =>
              ((e) => {
                tn.mark("".concat(ta, " ").concat(e, " ends")),
                  tn.measure(
                    "".concat(ta, " ").concat(e),
                    "".concat(ta, " ").concat(e, " begins"),
                    "".concat(ta, " ").concat(e, " ends")
                  );
              })(e)
          ),
        };
        let ti = () => {};
        function to(e) {
          return "string" == typeof (e.getAttribute ? e.getAttribute(I) : null);
        }
        function tc(e) {
          return f.createElementNS("http://www.w3.org/2000/svg", e);
        }
        function tl(e) {
          return f.createElement(e);
        }
        let ts = {
          replace: function (e) {
            let t = e[0];
            if (t.parentNode)
              if (
                (e[1].forEach((e) => {
                  t.parentNode.insertBefore(
                    (function e(t) {
                      let n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        { ceFn: a = "svg" === t.tag ? tc : tl } = n;
                      if ("string" == typeof t) return f.createTextNode(t);
                      let r = a(t.tag);
                      return (
                        Object.keys(t.attributes || []).forEach(function (e) {
                          r.setAttribute(e, t.attributes[e]);
                        }),
                        (t.children || []).forEach(function (t) {
                          r.appendChild(e(t, { ceFn: a }));
                        }),
                        r
                      );
                    })(e),
                    t
                  );
                }),
                null === t.getAttribute(I) && er.keepOriginalSource)
              ) {
                let e,
                  n = f.createComment(
                    ((e = " ".concat(t.outerHTML, " ")),
                    (e = "".concat(e, "Font Awesome fontawesome.com ")))
                  );
                t.parentNode.replaceChild(n, t);
              } else t.remove();
          },
          nest: function (e) {
            let t = e[0],
              n = e[1];
            if (~es(t).indexOf(er.replacementClass)) return ts.replace(e);
            let a = new RegExp("".concat(er.cssPrefix, "-.*"));
            if ((delete n[0].attributes.id, n[0].attributes.class)) {
              let e = n[0].attributes.class
                .split(" ")
                .reduce(
                  (e, t) => (
                    t === er.replacementClass || t.match(a)
                      ? e.toSvg.push(t)
                      : e.toNode.push(t),
                    e
                  ),
                  { toNode: [], toSvg: [] }
                );
              (n[0].attributes.class = e.toSvg.join(" ")),
                0 === e.toNode.length
                  ? t.removeAttribute("class")
                  : t.setAttribute("class", e.toNode.join(" "));
            }
            let r = n.map((e) => ez(e)).join("\n");
            t.setAttribute(I, ""), (t.innerHTML = r);
          },
        };
        function tf(e) {
          e();
        }
        function tu(e, t) {
          let n = "function" == typeof t ? t : ti;
          if (0 === e.length) n();
          else {
            let t = tf;
            "async" === er.mutateApproach &&
              (t = s.requestAnimationFrame || tf),
              t(() => {
                let t =
                    !0 === er.autoReplaceSvg
                      ? ts.replace
                      : ts[er.autoReplaceSvg] || ts.replace,
                  a = tr.begin("mutate");
                e.map(t), a(), n();
              });
          }
        }
        let td = !1,
          tm = null;
        function tp(e) {
          if (!u || !er.observeMutations) return;
          let {
            treeCallback: t = ti,
            nodeCallback: n = ti,
            pseudoElementsCallback: a = ti,
            observeMutationsRoot: r = f,
          } = e;
          (tm = new u((e) => {
            if (td) return;
            let r = eP;
            el(e).forEach((e) => {
              if (
                ("childList" === e.type &&
                  e.addedNodes.length > 0 &&
                  !to(e.addedNodes[0]) &&
                  (er.searchPseudoElements && a(e.target), t(e.target)),
                "attributes" === e.type &&
                  e.target.parentNode &&
                  er.searchPseudoElements &&
                  a(e.target.parentNode),
                "attributes" === e.type &&
                  to(e.target) &&
                  ~J.indexOf(e.attributeName))
              )
                if (
                  "class" === e.attributeName &&
                  (function (e) {
                    let t = e.getAttribute ? e.getAttribute(D) : null,
                      n = e.getAttribute ? e.getAttribute(T) : null;
                    return t && n;
                  })(e.target)
                ) {
                  let { prefix: t, iconName: n } = eq(es(e.target));
                  e.target.setAttribute(D, t || r),
                    n && e.target.setAttribute(T, n);
                } else {
                  var i;
                  (i = e.target) &&
                    i.classList &&
                    i.classList.contains &&
                    i.classList.contains(er.replacementClass) &&
                    n(e.target);
                }
            });
          })),
            m &&
              tm.observe(r, {
                childList: !0,
                attributes: !0,
                characterData: !0,
                subtree: !0,
              });
        }
        function th(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { styleParser: !0 },
            {
              iconName: a,
              prefix: r,
              rest: i,
            } = (function (e) {
              var t, n;
              let a = e.getAttribute("data-prefix"),
                r = e.getAttribute("data-icon"),
                i = void 0 !== e.innerText ? e.innerText.trim() : "",
                o = eq(es(e));
              return (o.prefix || (o.prefix = eP),
              a && r && ((o.prefix = a), (o.iconName = r)),
              o.iconName && o.prefix)
                ? o
                : (o.prefix &&
                    i.length > 0 &&
                    ((t = o.prefix),
                    (n = e.innerText),
                    (o.iconName =
                      (eE[t] || {})[n] || eR(o.prefix, eM(e.innerText)))),
                  !o.iconName &&
                    er.autoFetchSvg &&
                    e.firstChild &&
                    e.firstChild.nodeType === Node.TEXT_NODE &&
                    (o.iconName = e.firstChild.data),
                  o);
            })(e),
            o = (function (e) {
              let t = el(e.attributes).reduce(
                  (e, t) => (
                    "class" !== e.name &&
                      "style" !== e.name &&
                      (e[t.name] = t.value),
                    e
                  ),
                  {}
                ),
                n = e.getAttribute("title"),
                a = e.getAttribute("data-fa-title-id");
              return (
                er.autoA11y &&
                  (n
                    ? (t["aria-labelledby"] = ""
                        .concat(er.replacementClass, "-title-")
                        .concat(a || ec()))
                    : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
                t
              );
            })(e),
            c = e$("parseNodeAttributes", {}, e),
            l = t.styleParser
              ? (function (e) {
                  let t = e.getAttribute("style"),
                    n = [];
                  return (
                    t &&
                      (n = t.split(";").reduce((e, t) => {
                        let n = t.split(":"),
                          a = n[0],
                          r = n.slice(1);
                        return (
                          a && r.length > 0 && (e[a] = r.join(":").trim()), e
                        );
                      }, {})),
                    n
                  );
                })(e)
              : [];
          return n(
            {
              iconName: a,
              title: e.getAttribute("title"),
              titleId: e.getAttribute("data-fa-title-id"),
              prefix: r,
              transform: eo,
              mask: { iconName: null, prefix: null, rest: [] },
              maskId: null,
              symbol: !1,
              extra: { classes: i, styles: l, attributes: o },
            },
            c
          );
        }
        let { styles: tg } = eb;
        function tb(e) {
          let t =
            "nest" === er.autoReplaceSvg ? th(e, { styleParser: !1 }) : th(e);
          return ~t.extra.classes.indexOf(Q)
            ? eZ("generateLayersText", e, t)
            : eZ("generateSvgReplacementMutation", e, t);
        }
        function ty(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          if (!m) return Promise.resolve();
          let n = f.documentElement.classList,
            a = (e) => n.add("".concat(R, "-").concat(e)),
            r = (e) => n.remove("".concat(R, "-").concat(e)),
            i = er.autoFetchSvg ? [...z, ...O] : g.concat(Object.keys(tg));
          i.includes("fa") || i.push("fa");
          let o = [".".concat(Q, ":not([").concat(I, "])")]
            .concat(i.map((e) => ".".concat(e, ":not([").concat(I, "])")))
            .join(", ");
          if (0 === o.length) return Promise.resolve();
          let c = [];
          try {
            c = el(e.querySelectorAll(o));
          } catch (e) {}
          if (!(c.length > 0)) return Promise.resolve();
          a("pending"), r("complete");
          let l = tr.begin("onTree"),
            s = c.reduce((e, t) => {
              try {
                let n = tb(t);
                n && e.push(n);
              } catch (e) {
                U || "MissingIcon" !== e.name || console.error(e);
              }
              return e;
            }, []);
          return new Promise((e, n) => {
            Promise.all(s)
              .then((n) => {
                tu(n, () => {
                  a("active"),
                    a("complete"),
                    r("pending"),
                    "function" == typeof t && t(),
                    l(),
                    e();
                });
              })
              .catch((e) => {
                l(), n(e);
              });
          });
        }
        function tv(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          tb(e).then((e) => {
            e && tu([e], t);
          });
        }
        let tx = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                transform: a = eo,
                symbol: r = !1,
                mask: i = null,
                maskId: o = null,
                title: c = null,
                titleId: l = null,
                classes: s = [],
                attributes: f = {},
                styles: u = {},
              } = t;
            if (!e) return;
            let { prefix: d, iconName: m, icon: p } = e;
            return e3(
              n({ type: "icon" }, e),
              () => (
                eJ("beforeDOMElementCreation", {
                  iconDefinition: e,
                  params: t,
                }),
                er.autoA11y &&
                  (c
                    ? (f["aria-labelledby"] = ""
                        .concat(er.replacementClass, "-title-")
                        .concat(l || ec()))
                    : ((f["aria-hidden"] = "true"), (f.focusable = "false"))),
                e6({
                  icons: {
                    main: e7(p),
                    mask: i
                      ? e7(i.icon)
                      : { found: !1, width: null, height: null, icon: {} },
                  },
                  prefix: d,
                  iconName: m,
                  transform: n(n({}, eo), a),
                  symbol: r,
                  title: c,
                  maskId: o,
                  titleId: l,
                  extra: { attributes: f, styles: u, classes: s },
                })
              )
            );
          },
          tz = RegExp('"', "ug"),
          tk = n(
            n(
              n(n({}, { FontAwesome: { normal: "fas", 400: "fas" } }), {
                "Font Awesome 6 Free": { 900: "fas", 400: "far" },
                "Font Awesome 6 Pro": {
                  900: "fas",
                  400: "far",
                  normal: "far",
                  300: "fal",
                  100: "fat",
                },
                "Font Awesome 6 Brands": { 400: "fab", normal: "fab" },
                "Font Awesome 6 Duotone": {
                  900: "fad",
                  400: "fadr",
                  normal: "fadr",
                  300: "fadl",
                  100: "fadt",
                },
                "Font Awesome 6 Sharp": {
                  900: "fass",
                  400: "fasr",
                  normal: "fasr",
                  300: "fasl",
                  100: "fast",
                },
                "Font Awesome 6 Sharp Duotone": {
                  900: "fasds",
                  400: "fasdr",
                  normal: "fasdr",
                  300: "fasdl",
                  100: "fasdt",
                },
              }),
              {
                "Font Awesome 5 Free": { 900: "fas", 400: "far" },
                "Font Awesome 5 Pro": {
                  900: "fas",
                  400: "far",
                  normal: "far",
                  300: "fal",
                },
                "Font Awesome 5 Brands": { 400: "fab", normal: "fab" },
                "Font Awesome 5 Duotone": { 900: "fad" },
              }
            ),
            {
              "Font Awesome Kit": { 400: "fak", normal: "fak" },
              "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" },
            }
          ),
          tw = Object.keys(tk).reduce(
            (e, t) => ((e[t.toLowerCase()] = tk[t]), e),
            {}
          ),
          tM = Object.keys(tw).reduce((e, t) => {
            let n = tw[t];
            return (e[t] = n[900] || [...Object.entries(n)][0][1]), e;
          }, {});
        function tC(e, t) {
          let a = ""
            .concat("data-fa-pseudo-element-pending")
            .concat(t.replace(":", "-"));
          return new Promise((r, i) => {
            if (null !== e.getAttribute(a)) return r();
            let o = el(e.children).filter((e) => e.getAttribute(F) === t)[0],
              c = s.getComputedStyle(e, t),
              l = c.getPropertyValue("font-family"),
              u = l.match($),
              d = c.getPropertyValue("font-weight"),
              m = c.getPropertyValue("content");
            if (o && !u) return e.removeChild(o), r();
            if (u && "none" !== m && "" !== m) {
              let s = c.getPropertyValue("content"),
                m = (function (e, t) {
                  let n = e.replace(/^['"]|['"]$/g, "").toLowerCase(),
                    a = parseInt(t),
                    r = isNaN(a) ? "normal" : a;
                  return (tw[n] || {})[r] || tM[n];
                })(l, d),
                { value: p, isSecondary: h } = (function (e) {
                  let t = e.replace(tz, ""),
                    n = (function (e, t) {
                      let n,
                        a = e.length,
                        r = e.charCodeAt(0);
                      return r >= 55296 &&
                        r <= 56319 &&
                        a > 1 &&
                        (n = e.charCodeAt(t + 1)) >= 56320 &&
                        n <= 57343
                        ? (r - 55296) * 1024 + n - 56320 + 65536
                        : r;
                    })(t, 0),
                    a = 2 === t.length && t[0] === t[1];
                  return {
                    value: a ? eM(t[0]) : eM(t),
                    isSecondary: (n >= 1105920 && n <= 1112319) || a,
                  };
                })(s),
                g = u[0].startsWith("FontAwesome"),
                b = eR(m, p),
                y = b;
              if (g) {
                let e = (function (e) {
                  let t = eF[e],
                    n = eR("fas", e);
                  return (
                    t ||
                    (n ? { prefix: "fas", iconName: n } : null) || {
                      prefix: null,
                      iconName: null,
                    }
                  );
                })(p);
                e.iconName && e.prefix && ((b = e.iconName), (m = e.prefix));
              }
              if (
                !b ||
                h ||
                (o && o.getAttribute(D) === m && o.getAttribute(T) === y)
              )
                r();
              else {
                e.setAttribute(a, y), o && e.removeChild(o);
                let c = {
                    iconName: null,
                    title: null,
                    titleId: null,
                    prefix: null,
                    transform: eo,
                    symbol: !1,
                    mask: { iconName: null, prefix: null, rest: [] },
                    maskId: null,
                    extra: { classes: [], styles: {}, attributes: {} },
                  },
                  { extra: l } = c;
                (l.attributes[F] = t),
                  te(b, m)
                    .then((i) => {
                      let o = e6(
                          n(
                            n({}, c),
                            {},
                            {
                              icons: { main: i, mask: eW() },
                              prefix: m,
                              iconName: y,
                              extra: l,
                              watchable: !0,
                            }
                          )
                        ),
                        s = f.createElementNS(
                          "http://www.w3.org/2000/svg",
                          "svg"
                        );
                      "::before" === t
                        ? e.insertBefore(s, e.firstChild)
                        : e.appendChild(s),
                        (s.outerHTML = o.map((e) => ez(e)).join("\n")),
                        e.removeAttribute(a),
                        r();
                    })
                    .catch(i);
              }
            } else r();
          });
        }
        function tL(e) {
          return Promise.all([tC(e, "::before"), tC(e, "::after")]);
        }
        function tA(e) {
          return (
            e.parentNode !== document.head &&
            !~Y.indexOf(e.tagName.toUpperCase()) &&
            !e.getAttribute(F) &&
            (!e.parentNode || "svg" !== e.parentNode.tagName)
          );
        }
        function tO(e) {
          if (m)
            return new Promise((t, n) => {
              let a = el(e.querySelectorAll("*")).filter(tA).map(tL),
                r = tr.begin("searchPseudoElements");
              (td = !0),
                Promise.all(a)
                  .then(() => {
                    r(), (td = !1), t();
                  })
                  .catch(() => {
                    r(), (td = !1), n();
                  });
            });
        }
        let tN = !1,
          tS = (e) =>
            e
              .toLowerCase()
              .split(" ")
              .reduce(
                (e, t) => {
                  let n = t.toLowerCase().split("-"),
                    a = n[0],
                    r = n.slice(1).join("-");
                  if (a && "h" === r) return (e.flipX = !0), e;
                  if (a && "v" === r) return (e.flipY = !0), e;
                  if (isNaN((r = parseFloat(r)))) return e;
                  switch (a) {
                    case "grow":
                      e.size = e.size + r;
                      break;
                    case "shrink":
                      e.size = e.size - r;
                      break;
                    case "left":
                      e.x = e.x - r;
                      break;
                    case "right":
                      e.x = e.x + r;
                      break;
                    case "up":
                      e.y = e.y - r;
                      break;
                    case "down":
                      e.y = e.y + r;
                      break;
                    case "rotate":
                      e.rotate = e.rotate + r;
                  }
                  return e;
                },
                { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }
              ),
          tP = { x: 0, y: 0, width: "100%", height: "100%" };
        function tj(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return (
            e.attributes &&
              (e.attributes.fill || t) &&
              (e.attributes.fill = "black"),
            e
          );
        }
        !(function (e, t) {
          let { mixoutsTo: n } = t;
          (eX = e),
            (eV = {}),
            Object.keys(eK).forEach((e) => {
              -1 === eQ.indexOf(e) && delete eK[e];
            }),
            eX.forEach((e) => {
              let t = e.mixout ? e.mixout() : {};
              if (
                (Object.keys(t).forEach((e) => {
                  "function" == typeof t[e] && (n[e] = t[e]),
                    "object" == typeof t[e] &&
                      Object.keys(t[e]).forEach((a) => {
                        n[e] || (n[e] = {}), (n[e][a] = t[e][a]);
                      });
                }),
                e.hooks)
              ) {
                let t = e.hooks();
                Object.keys(t).forEach((e) => {
                  eV[e] || (eV[e] = []), eV[e].push(t[e]);
                });
              }
              e.provides && e.provides(eK);
            });
        })(
          [
            {
              mixout: () => ({ dom: { css: em, insertCss: eh } }),
              hooks: () => ({
                beforeDOMElementCreation() {
                  eh();
                },
                beforeI2svg() {
                  eh();
                },
              }),
            },
            {
              mixout: () => ({
                icon: function (e) {
                  let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    a = (e || {}).icon ? e : e1(e || {}),
                    { mask: r } = t;
                  return (
                    r && (r = (r || {}).icon ? r : e1(r || {})),
                    tx(a, n(n({}, t), {}, { mask: r }))
                  );
                },
              }),
              hooks: () => ({
                mutationObserverCallbacks: (e) => (
                  (e.treeCallback = ty), (e.nodeCallback = tv), e
                ),
              }),
              provides(e) {
                (e.i2svg = function (e) {
                  let { node: t = f, callback: n = () => {} } = e;
                  return ty(t, n);
                }),
                  (e.generateSvgReplacementMutation = function (e, t) {
                    let {
                      iconName: n,
                      title: a,
                      titleId: r,
                      prefix: i,
                      transform: o,
                      symbol: c,
                      mask: l,
                      maskId: s,
                      extra: f,
                    } = t;
                    return new Promise((t, u) => {
                      Promise.all([
                        te(n, i),
                        l.iconName
                          ? te(l.iconName, l.prefix)
                          : Promise.resolve({
                              found: !1,
                              width: 512,
                              height: 512,
                              icon: {},
                            }),
                      ])
                        .then((l) => {
                          let [u, d] = l;
                          t([
                            e,
                            e6({
                              icons: { main: u, mask: d },
                              prefix: i,
                              iconName: n,
                              transform: o,
                              symbol: c,
                              maskId: s,
                              title: a,
                              titleId: r,
                              extra: f,
                              watchable: !0,
                            }),
                          ]);
                        })
                        .catch(u);
                    });
                  }),
                  (e.generateAbstractIcon = function (e) {
                    let t,
                      {
                        children: n,
                        attributes: a,
                        main: r,
                        transform: i,
                        styles: o,
                      } = e,
                      c = eu(o);
                    return (
                      c.length > 0 && (a.style = c),
                      ed(i) &&
                        (t = eZ("generateAbstractTransformGrouping", {
                          main: r,
                          transform: i,
                          containerWidth: r.width,
                          iconWidth: r.width,
                        })),
                      n.push(t || r.icon),
                      { children: n, attributes: a }
                    );
                  });
              },
            },
            {
              mixout: () => ({
                layer(e) {
                  let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    { classes: n = [] } = t;
                  return e3({ type: "layer" }, () => {
                    eJ("beforeDOMElementCreation", { assembler: e, params: t });
                    let a = [];
                    return (
                      e((e) => {
                        Array.isArray(e)
                          ? e.map((e) => {
                              a = a.concat(e.abstract);
                            })
                          : (a = a.concat(e.abstract));
                      }),
                      [
                        {
                          tag: "span",
                          attributes: {
                            class: [
                              "".concat(er.cssPrefix, "-layers"),
                              ...n,
                            ].join(" "),
                          },
                          children: a,
                        },
                      ]
                    );
                  });
                },
              }),
            },
            {
              mixout: () => ({
                counter(e) {
                  let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    {
                      title: a = null,
                      classes: r = [],
                      attributes: i = {},
                      styles: o = {},
                    } = t;
                  return e3(
                    { type: "counter", content: e },
                    () => (
                      eJ("beforeDOMElementCreation", { content: e, params: t }),
                      (function (e) {
                        let { content: t, title: a, extra: r } = e,
                          i = n(
                            n(n({}, r.attributes), a ? { title: a } : {}),
                            {},
                            { class: r.classes.join(" ") }
                          ),
                          o = eu(r.styles);
                        o.length > 0 && (i.style = o);
                        let c = [];
                        return (
                          c.push({ tag: "span", attributes: i, children: [t] }),
                          a &&
                            c.push({
                              tag: "span",
                              attributes: { class: "sr-only" },
                              children: [a],
                            }),
                          c
                        );
                      })({
                        content: e.toString(),
                        title: a,
                        extra: {
                          attributes: i,
                          styles: o,
                          classes: [
                            "".concat(er.cssPrefix, "-layers-counter"),
                            ...r,
                          ],
                        },
                      })
                    )
                  );
                },
              }),
            },
            {
              mixout: () => ({
                text(e) {
                  let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    {
                      transform: a = eo,
                      title: r = null,
                      classes: i = [],
                      attributes: o = {},
                      styles: c = {},
                    } = t;
                  return e3(
                    { type: "text", content: e },
                    () => (
                      eJ("beforeDOMElementCreation", { content: e, params: t }),
                      e5({
                        content: e,
                        transform: n(n({}, eo), a),
                        title: r,
                        extra: {
                          attributes: o,
                          styles: c,
                          classes: [
                            "".concat(er.cssPrefix, "-layers-text"),
                            ...i,
                          ],
                        },
                      })
                    )
                  );
                },
              }),
              provides(e) {
                e.generateLayersText = function (e, t) {
                  let { title: n, transform: a, extra: r } = t,
                    i = null,
                    o = null;
                  if (p) {
                    let t = parseInt(getComputedStyle(e).fontSize, 10),
                      n = e.getBoundingClientRect();
                    (i = n.width / t), (o = n.height / t);
                  }
                  return (
                    er.autoA11y && !n && (r.attributes["aria-hidden"] = "true"),
                    Promise.resolve([
                      e,
                      e5({
                        content: e.innerHTML,
                        width: i,
                        height: o,
                        transform: a,
                        title: n,
                        extra: r,
                        watchable: !0,
                      }),
                    ])
                  );
                };
              },
            },
            {
              hooks: () => ({
                mutationObserverCallbacks: (e) => (
                  (e.pseudoElementsCallback = tO), e
                ),
              }),
              provides(e) {
                e.pseudoElements2svg = function (e) {
                  let { node: t = f } = e;
                  er.searchPseudoElements && tO(t);
                };
              },
            },
            {
              mixout: () => ({
                dom: {
                  unwatch() {
                    (td = !0), (tN = !0);
                  },
                },
              }),
              hooks: () => ({
                bootstrap() {
                  tp(e$("mutationObserverCallbacks", {}));
                },
                noAuto() {
                  tm && tm.disconnect();
                },
                watch(e) {
                  let { observeMutationsRoot: t } = e;
                  tN
                    ? (td = !1)
                    : tp(
                        e$("mutationObserverCallbacks", {
                          observeMutationsRoot: t,
                        })
                      );
                },
              }),
            },
            {
              mixout: () => ({ parse: { transform: (e) => tS(e) } }),
              hooks: () => ({
                parseNodeAttributes(e, t) {
                  let n = t.getAttribute("data-fa-transform");
                  return n && (e.transform = tS(n)), e;
                },
              }),
              provides(e) {
                e.generateAbstractTransformGrouping = function (e) {
                  let {
                      main: t,
                      transform: a,
                      containerWidth: r,
                      iconWidth: i,
                    } = e,
                    o = "translate("
                      .concat(32 * a.x, ", ")
                      .concat(32 * a.y, ") "),
                    c = "scale("
                      .concat((a.size / 16) * (a.flipX ? -1 : 1), ", ")
                      .concat((a.size / 16) * (a.flipY ? -1 : 1), ") "),
                    l = "rotate(".concat(a.rotate, " 0 0)"),
                    s = {
                      transform: "".concat(o, " ").concat(c, " ").concat(l),
                    };
                  return {
                    tag: "g",
                    attributes: n(
                      {},
                      { transform: "translate(".concat(r / 2, " 256)") }
                    ),
                    children: [
                      {
                        tag: "g",
                        attributes: n({}, s),
                        children: [
                          {
                            tag: t.icon.tag,
                            children: t.icon.children,
                            attributes: n(n({}, t.icon.attributes), {
                              transform: "translate(".concat(
                                -((i / 2) * 1),
                                " -256)"
                              ),
                            }),
                          },
                        ],
                      },
                    ],
                  };
                };
              },
            },
            {
              hooks: () => ({
                parseNodeAttributes(e, t) {
                  let n = t.getAttribute("data-fa-mask"),
                    a = n ? eq(n.split(" ").map((e) => e.trim())) : eW();
                  return (
                    a.prefix || (a.prefix = eP),
                    (e.mask = a),
                    (e.maskId = t.getAttribute("data-fa-mask-id")),
                    e
                  );
                },
              }),
              provides(e) {
                e.generateAbstractMask = function (e) {
                  let {
                      children: t,
                      attributes: a,
                      main: r,
                      mask: i,
                      maskId: o,
                      transform: c,
                    } = e,
                    { width: l, icon: s } = r,
                    { width: f, icon: u } = i,
                    d = (function (e) {
                      let { transform: t, containerWidth: n, iconWidth: a } = e,
                        r = "translate("
                          .concat(32 * t.x, ", ")
                          .concat(32 * t.y, ") "),
                        i = "scale("
                          .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
                          .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
                        o = "rotate(".concat(t.rotate, " 0 0)"),
                        c = {
                          transform: "".concat(r, " ").concat(i, " ").concat(o),
                        };
                      return {
                        outer: {
                          transform: "translate(".concat(n / 2, " 256)"),
                        },
                        inner: c,
                        path: {
                          transform: "translate(".concat(
                            -((a / 2) * 1),
                            " -256)"
                          ),
                        },
                      };
                    })({ transform: c, containerWidth: f, iconWidth: l }),
                    m = {
                      tag: "rect",
                      attributes: n(n({}, tP), {}, { fill: "white" }),
                    },
                    p = s.children ? { children: s.children.map(tj) } : {},
                    h = {
                      tag: "g",
                      attributes: n({}, d.inner),
                      children: [
                        tj(
                          n(
                            {
                              tag: s.tag,
                              attributes: n(n({}, s.attributes), d.path),
                            },
                            p
                          )
                        ),
                      ],
                    },
                    g = { tag: "g", attributes: n({}, d.outer), children: [h] },
                    b = "mask-".concat(o || ec()),
                    y = "clip-".concat(o || ec()),
                    v = {
                      tag: "mask",
                      attributes: n(
                        n({}, tP),
                        {},
                        {
                          id: b,
                          maskUnits: "userSpaceOnUse",
                          maskContentUnits: "userSpaceOnUse",
                        }
                      ),
                      children: [m, g],
                    },
                    x = {
                      tag: "defs",
                      children: [
                        {
                          tag: "clipPath",
                          attributes: { id: y },
                          children: "g" === u.tag ? u.children : [u],
                        },
                        v,
                      ],
                    };
                  return (
                    t.push(x, {
                      tag: "rect",
                      attributes: n(
                        {
                          fill: "currentColor",
                          "clip-path": "url(#".concat(y, ")"),
                          mask: "url(#".concat(b, ")"),
                        },
                        tP
                      ),
                    }),
                    { children: t, attributes: a }
                  );
                };
              },
            },
            {
              provides(e) {
                let t = !1;
                s.matchMedia &&
                  (t = s.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                  ).matches),
                  (e.missingIconAbstract = function () {
                    let e = [],
                      a = { fill: "currentColor" },
                      r = {
                        attributeType: "XML",
                        repeatCount: "indefinite",
                        dur: "2s",
                      };
                    e.push({
                      tag: "path",
                      attributes: n(
                        n({}, a),
                        {},
                        {
                          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
                        }
                      ),
                    });
                    let i = n(n({}, r), {}, { attributeName: "opacity" }),
                      o = {
                        tag: "circle",
                        attributes: n(
                          n({}, a),
                          {},
                          { cx: "256", cy: "364", r: "28" }
                        ),
                        children: [],
                      };
                    return (
                      t ||
                        o.children.push(
                          {
                            tag: "animate",
                            attributes: n(
                              n({}, r),
                              {},
                              {
                                attributeName: "r",
                                values: "28;14;28;28;14;28;",
                              }
                            ),
                          },
                          {
                            tag: "animate",
                            attributes: n(
                              n({}, i),
                              {},
                              { values: "1;0;1;1;0;1;" }
                            ),
                          }
                        ),
                      e.push(o),
                      e.push({
                        tag: "path",
                        attributes: n(
                          n({}, a),
                          {},
                          {
                            opacity: "1",
                            d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                          }
                        ),
                        children: t
                          ? []
                          : [
                              {
                                tag: "animate",
                                attributes: n(
                                  n({}, i),
                                  {},
                                  { values: "1;0;0;0;0;1;" }
                                ),
                              },
                            ],
                      }),
                      t ||
                        e.push({
                          tag: "path",
                          attributes: n(
                            n({}, a),
                            {},
                            {
                              opacity: "0",
                              d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                            }
                          ),
                          children: [
                            {
                              tag: "animate",
                              attributes: n(
                                n({}, i),
                                {},
                                { values: "0;0;1;1;0;0;" }
                              ),
                            },
                          ],
                        }),
                      {
                        tag: "g",
                        attributes: { class: "missing" },
                        children: e,
                      }
                    );
                  });
              },
            },
            {
              hooks: () => ({
                parseNodeAttributes(e, t) {
                  let n = t.getAttribute("data-fa-symbol");
                  return (e.symbol = null !== n && ("" === n || n)), e;
                },
              }),
            },
          ],
          { mixoutsTo: e0 }
        ),
          e0.noAuto,
          e0.config,
          e0.library,
          e0.dom;
        let tE = e0.parse;
        e0.findIconDefinition, e0.toHtml;
        let tI = e0.icon;
        e0.layer, e0.text, e0.counter;
        var tF = e.i(14481),
          tD = e.i(838653);
        function tT(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t &&
              (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, a);
          }
          return n;
        }
        function tR(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? tT(Object(n), !0).forEach(function (t) {
                  tU(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tT(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function tY(e) {
          return (tY =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function tU(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function tW(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return t_(e);
            })(e) ||
            (function (e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return t_(e, void 0);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n)
                )
                  return Array.from(e);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return t_(e, t);
              }
            })(e) ||
            (function () {
              throw TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function t_(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
          return a;
        }
        function tH(e) {
          var t;
          return (t = e - 0) == t
            ? e
            : (e = e.replace(/[\-_\s]+(.)?/g, function (e, t) {
                return t ? t.toUpperCase() : "";
              }))
                .substr(0, 1)
                .toLowerCase() + e.substr(1);
        }
        var tq = ["style"],
          tB = !1;
        try {
          tB = !0;
        } catch (e) {}
        function tG(e) {
          return e && "object" === tY(e) && e.prefix && e.iconName && e.icon
            ? e
            : tE.icon
            ? tE.icon(e)
            : null === e
            ? null
            : e && "object" === tY(e) && e.prefix && e.iconName
            ? e
            : Array.isArray(e) && 2 === e.length
            ? { prefix: e[0], iconName: e[1] }
            : "string" == typeof e
            ? { prefix: "fas", iconName: e }
            : void 0;
        }
        function tX(e, t) {
          return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
            ? tU({}, e, t)
            : {};
        }
        var tV = {
            border: !1,
            className: "",
            mask: null,
            maskId: null,
            fixedWidth: !1,
            inverse: !1,
            flip: !1,
            icon: null,
            listItem: !1,
            pull: null,
            pulse: !1,
            rotation: null,
            size: null,
            spin: !1,
            spinPulse: !1,
            spinReverse: !1,
            beat: !1,
            fade: !1,
            beatFade: !1,
            bounce: !1,
            shake: !1,
            symbol: !1,
            title: "",
            titleId: null,
            transform: null,
            swapOpacity: !1,
          },
          tK = tD.default.forwardRef(function (e, t) {
            var n,
              a,
              r,
              i,
              o,
              c,
              l,
              s,
              f,
              u,
              d,
              m,
              p,
              h,
              g,
              b,
              y,
              v,
              x,
              z,
              k = tR(tR({}, tV), e),
              w = k.icon,
              M = k.mask,
              C = k.symbol,
              L = k.className,
              A = k.title,
              O = k.titleId,
              N = k.maskId,
              S = tG(w),
              P = tX(
                "classes",
                [].concat(
                  tW(
                    ((a = k.beat),
                    (r = k.fade),
                    (i = k.beatFade),
                    (o = k.bounce),
                    (c = k.shake),
                    (l = k.flash),
                    (s = k.spin),
                    (f = k.spinPulse),
                    (u = k.spinReverse),
                    (d = k.pulse),
                    (m = k.fixedWidth),
                    (p = k.inverse),
                    (h = k.border),
                    (g = k.listItem),
                    (b = k.flip),
                    (y = k.size),
                    (v = k.rotation),
                    (x = k.pull),
                    Object.keys(
                      (tU(
                        (n = {
                          "fa-beat": a,
                          "fa-fade": r,
                          "fa-beat-fade": i,
                          "fa-bounce": o,
                          "fa-shake": c,
                          "fa-flash": l,
                          "fa-spin": s,
                          "fa-spin-reverse": u,
                          "fa-spin-pulse": f,
                          "fa-pulse": d,
                          "fa-fw": m,
                          "fa-inverse": p,
                          "fa-border": h,
                          "fa-li": g,
                          "fa-flip": !0 === b,
                          "fa-flip-horizontal":
                            "horizontal" === b || "both" === b,
                          "fa-flip-vertical": "vertical" === b || "both" === b,
                        }),
                        "fa-".concat(y),
                        null != y
                      ),
                      tU(n, "fa-rotate-".concat(v), null != v && 0 !== v),
                      tU(n, "fa-pull-".concat(x), null != x),
                      tU(n, "fa-swap-opacity", k.swapOpacity),
                      (z = n))
                    )
                      .map(function (e) {
                        return z[e] ? e : null;
                      })
                      .filter(function (e) {
                        return e;
                      }))
                  ),
                  tW((L || "").split(" "))
                )
              ),
              j = tX(
                "transform",
                "string" == typeof k.transform
                  ? tE.transform(k.transform)
                  : k.transform
              ),
              E = tX("mask", tG(M)),
              I = tI(
                S,
                tR(
                  tR(tR(tR({}, P), j), E),
                  {},
                  { symbol: C, title: A, titleId: O, maskId: N }
                )
              );
            if (!I)
              return (
                !(function () {
                  if (!tB && console && "function" == typeof console.error) {
                    var e;
                    (e = console).error.apply(e, arguments);
                  }
                })("Could not find icon", S),
                null
              );
            var F = I.abstract,
              D = { ref: t };
            return (
              Object.keys(k).forEach(function (e) {
                tV.hasOwnProperty(e) || (D[e] = k[e]);
              }),
              tQ(F[0], D)
            );
          });
        (tK.displayName = "FontAwesomeIcon"),
          (tK.propTypes = {
            beat: tF.default.bool,
            border: tF.default.bool,
            beatFade: tF.default.bool,
            bounce: tF.default.bool,
            className: tF.default.string,
            fade: tF.default.bool,
            flash: tF.default.bool,
            mask: tF.default.oneOfType([
              tF.default.object,
              tF.default.array,
              tF.default.string,
            ]),
            maskId: tF.default.string,
            fixedWidth: tF.default.bool,
            inverse: tF.default.bool,
            flip: tF.default.oneOf([!0, !1, "horizontal", "vertical", "both"]),
            icon: tF.default.oneOfType([
              tF.default.object,
              tF.default.array,
              tF.default.string,
            ]),
            listItem: tF.default.bool,
            pull: tF.default.oneOf(["right", "left"]),
            pulse: tF.default.bool,
            rotation: tF.default.oneOf([0, 90, 180, 270]),
            shake: tF.default.bool,
            size: tF.default.oneOf([
              "2xs",
              "xs",
              "sm",
              "lg",
              "xl",
              "2xl",
              "1x",
              "2x",
              "3x",
              "4x",
              "5x",
              "6x",
              "7x",
              "8x",
              "9x",
              "10x",
            ]),
            spin: tF.default.bool,
            spinPulse: tF.default.bool,
            spinReverse: tF.default.bool,
            symbol: tF.default.oneOfType([tF.default.bool, tF.default.string]),
            title: tF.default.string,
            titleId: tF.default.string,
            transform: tF.default.oneOfType([
              tF.default.string,
              tF.default.object,
            ]),
            swapOpacity: tF.default.bool,
          });
        var tQ = function e(t, n) {
          var a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if ("string" == typeof n) return n;
          var r = (n.children || []).map(function (n) {
              return e(t, n);
            }),
            i = Object.keys(n.attributes || {}).reduce(
              function (e, t) {
                var a = n.attributes[t];
                switch (t) {
                  case "class":
                    (e.attrs.className = a), delete n.attributes.class;
                    break;
                  case "style":
                    e.attrs.style = a
                      .split(";")
                      .map(function (e) {
                        return e.trim();
                      })
                      .filter(function (e) {
                        return e;
                      })
                      .reduce(function (e, t) {
                        var n = t.indexOf(":"),
                          a = tH(t.slice(0, n)),
                          r = t.slice(n + 1).trim();
                        return (
                          a.startsWith("webkit")
                            ? (e[a.charAt(0).toUpperCase() + a.slice(1)] = r)
                            : (e[a] = r),
                          e
                        );
                      }, {});
                    break;
                  default:
                    0 === t.indexOf("aria-") || 0 === t.indexOf("data-")
                      ? (e.attrs[t.toLowerCase()] = a)
                      : (e.attrs[tH(t)] = a);
                }
                return e;
              },
              { attrs: {} }
            ),
            o = a.style,
            c = (function (e, t) {
              if (null == e) return {};
              var n,
                a,
                r = (function (e, t) {
                  if (null == e) return {};
                  var n,
                    a,
                    r = {},
                    i = Object.keys(e);
                  for (a = 0; a < i.length; a++)
                    (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++)
                  (n = i[a]),
                    !(t.indexOf(n) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, n) &&
                      (r[n] = e[n]);
              }
              return r;
            })(a, tq);
          return (
            (i.attrs.style = tR(tR({}, i.attrs.style), void 0 === o ? {} : o)),
            t.apply(void 0, [n.tag, tR(tR({}, i.attrs), c)].concat(tW(r)))
          );
        }.bind(null, tD.default.createElement);
        e.s(
          {
            faAngleDown: () => nk,
            faArrowRight: () => no,
            faArrowUp: () => nO,
            faArrowsAltH: () => ne,
            faArrowsUpDown: () => n_,
            faBook: () => nD,
            faCalculator: () => nz,
            faCalendar: () => nF,
            faChartLine: () => ni,
            faCheckCircle: () => t9,
            faChevronDown: () => nA,
            faChevronUp: () => t4,
            faClock: () => ny,
            faCode: () => na,
            faCoins: () => nv,
            faComments: () => tJ,
            faCopy: () => nN,
            faCube: () => nc,
            faDatabase: () => nR,
            faDollarSign: () => nq,
            faEnvelope: () => ng,
            faExchangeAlt: () => nU,
            faExclamationTriangle: () => nT,
            faExternalLinkAlt: () => nh,
            faEye: () => nu,
            faFileContract: () => nr,
            faGasPump: () => t2,
            faGaugeHigh: () => nM,
            faGift: () => t8,
            faHandshake: () => t7,
            faHeadset: () => t5,
            faInfoCircle: () => nb,
            faLightbulb: () => t1,
            faMedal: () => nw,
            faNetworkWired: () => nx,
            faPaperPlane: () => nW,
            faPencilRuler: () => tZ,
            faPlay: () => nC,
            faQuestionCircle: () => ns,
            faRocket: () => nP,
            faSearch: () => nL,
            faShare: () => nY,
            faShareFromSquare: () => nS,
            faShield: () => nI,
            faShieldAlt: () => nt,
            faSignal: () => nd,
            faSort: () => nn,
            faSortDown: () => t$,
            faSortUp: () => nm,
            faSpinner: () => nE,
            faStar: () => t6,
            faTerminal: () => nf,
            faTimesCircle: () => nH,
            faTrophy: () => nj,
            faUser: () => t3,
            faUserCog: () => np,
            faUsers: () => t0,
            faWallet: () => nl,
          },
          55157
        );
        let t$ = {
            prefix: "fas",
            iconName: "sort-down",
            icon: [
              320,
              512,
              ["sort-desc"],
              "f0dd",
              "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z",
            ],
          },
          tJ = {
            prefix: "fas",
            iconName: "comments",
            icon: [
              640,
              512,
              [128490, 61670],
              "f086",
              "M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2s0 0 0 0s0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.2-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9c0 0 0 0 0 0s0 0 0 0l-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z",
            ],
          },
          tZ = {
            prefix: "fas",
            iconName: "pen-ruler",
            icon: [
              512,
              512,
              ["pencil-ruler"],
              "f5ae",
              "M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z",
            ],
          },
          t1 = {
            prefix: "fas",
            iconName: "lightbulb",
            icon: [
              384,
              512,
              [128161],
              "f0eb",
              "M272 384c9.6-31.9 29.5-59.1 49.2-86.2c0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c0 0 0 0 0 0c19.8 27.1 39.7 54.4 49.2 86.2l160 0zM192 512c44.2 0 80-35.8 80-80l0-16-160 0 0 16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z",
            ],
          },
          t2 = {
            prefix: "fas",
            iconName: "gas-pump",
            icon: [
              512,
              512,
              [9981],
              "f52f",
              "M32 64C32 28.7 60.7 0 96 0L256 0c35.3 0 64 28.7 64 64l0 192 8 0c48.6 0 88 39.4 88 88l0 32c0 13.3 10.7 24 24 24s24-10.7 24-24l0-154c-27.6-7.1-48-32.2-48-62l0-64L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3l0 13.5 0 24 0 32 0 152c0 39.8-32.2 72-72 72s-72-32.2-72-72l0-32c0-22.1-17.9-40-40-40l-8 0 0 144c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 64zM96 80l0 96c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16L112 64c-8.8 0-16 7.2-16 16z",
            ],
          },
          t0 = {
            prefix: "fas",
            iconName: "users",
            icon: [
              640,
              512,
              [],
              "f0c0",
              "M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z",
            ],
          },
          t4 = {
            prefix: "fas",
            iconName: "chevron-up",
            icon: [
              512,
              512,
              [],
              "f077",
              "M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z",
            ],
          },
          t3 = {
            prefix: "fas",
            iconName: "user",
            icon: [
              448,
              512,
              [128100, 62144],
              "f007",
              "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z",
            ],
          },
          t6 = {
            prefix: "fas",
            iconName: "star",
            icon: [
              576,
              512,
              [11088, 61446],
              "f005",
              "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z",
            ],
          },
          t5 = {
            prefix: "fas",
            iconName: "headset",
            icon: [
              512,
              512,
              [],
              "f590",
              "M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z",
            ],
          },
          t8 = {
            prefix: "fas",
            iconName: "gift",
            icon: [
              512,
              512,
              [127873],
              "f06b",
              "M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z",
            ],
          },
          t7 = {
            prefix: "fas",
            iconName: "handshake",
            icon: [
              640,
              512,
              [],
              "f2b5",
              "M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8 512 128l-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48 0 224 28.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16L0 352c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-224-80 0zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128l0 224c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-208c0-8.8-7.2-16-16-16l-80 0zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z",
            ],
          },
          t9 = {
            prefix: "fas",
            iconName: "circle-check",
            icon: [
              512,
              512,
              [61533, "check-circle"],
              "f058",
              "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z",
            ],
          },
          ne = {
            prefix: "fas",
            iconName: "left-right",
            icon: [
              512,
              512,
              [8596, "arrows-alt-h"],
              "f337",
              "M504.3 273.6c4.9-4.5 7.7-10.9 7.7-17.6s-2.8-13-7.7-17.6l-112-104c-7-6.5-17.2-8.2-25.9-4.4s-14.4 12.5-14.4 22l0 56-192 0 0-56c0-9.5-5.7-18.2-14.4-22s-18.9-2.1-25.9 4.4l-112 104C2.8 243 0 249.3 0 256s2.8 13 7.7 17.6l112 104c7 6.5 17.2 8.2 25.9 4.4s14.4-12.5 14.4-22l0-56 192 0 0 56c0 9.5 5.7 18.2 14.4 22s18.9 2.1 25.9-4.4l112-104z",
            ],
          },
          nt = {
            prefix: "fas",
            iconName: "shield-halved",
            icon: [
              512,
              512,
              ["shield-alt"],
              "f3ed",
              "M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z",
            ],
          },
          nn = {
            prefix: "fas",
            iconName: "sort",
            icon: [
              320,
              512,
              ["unsorted"],
              "f0dc",
              "M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8L32 224c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z",
            ],
          },
          na = {
            prefix: "fas",
            iconName: "code",
            icon: [
              640,
              512,
              [],
              "f121",
              "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z",
            ],
          },
          nr = {
            prefix: "fas",
            iconName: "file-contract",
            icon: [
              384,
              512,
              [],
              "f56c",
              "M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM80 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm54.2 253.8c-6.1 20.3-24.8 34.2-46 34.2L80 416c-8.8 0-16-7.2-16-16s7.2-16 16-16l8.2 0c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.7 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8 54.1 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 349l-9.8 32.8z",
            ],
          },
          ni = {
            prefix: "fas",
            iconName: "chart-line",
            icon: [
              512,
              512,
              ["line-chart"],
              "f201",
              "M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z",
            ],
          },
          no = {
            prefix: "fas",
            iconName: "arrow-right",
            icon: [
              448,
              512,
              [8594],
              "f061",
              "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z",
            ],
          },
          nc = {
            prefix: "fas",
            iconName: "cube",
            icon: [
              512,
              512,
              [],
              "f1b2",
              "M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6l0 242.9c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4L0 134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1 0-188L288 246.6l0 188z",
            ],
          },
          nl = {
            prefix: "fas",
            iconName: "wallet",
            icon: [
              512,
              512,
              [],
              "f555",
              "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L80 128c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",
            ],
          },
          ns = {
            prefix: "fas",
            iconName: "circle-question",
            icon: [
              512,
              512,
              [62108, "question-circle"],
              "f059",
              "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z",
            ],
          },
          nf = {
            prefix: "fas",
            iconName: "terminal",
            icon: [
              576,
              512,
              [],
              "f120",
              "M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416l288 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z",
            ],
          },
          nu = {
            prefix: "fas",
            iconName: "eye",
            icon: [
              576,
              512,
              [128065],
              "f06e",
              "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z",
            ],
          },
          nd = {
            prefix: "fas",
            iconName: "signal",
            icon: [
              640,
              512,
              [128246, "signal-5", "signal-perfect"],
              "f012",
              "M576 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-448c0-17.7 14.3-32 32-32zM448 96c17.7 0 32 14.3 32 32l0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352c0-17.7 14.3-32 32-32zM352 224l0 256c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32s32 14.3 32 32zM192 288c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32zM96 416l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32z",
            ],
          },
          nm = {
            prefix: "fas",
            iconName: "sort-up",
            icon: [
              320,
              512,
              ["sort-asc"],
              "f0de",
              "M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z",
            ],
          },
          np = {
            prefix: "fas",
            iconName: "user-gear",
            icon: [
              640,
              512,
              ["user-cog"],
              "f4fe",
              "M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304l91.4 0c11.8 0 23.4 1.2 34.5 3.3c-2.1 18.5 7.4 35.6 21.8 44.8c-16.6 10.6-26.7 31.6-20 53.3c4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7l0 .9c0 9.2 2.7 18.5 7.9 26.3L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM436 218.2c0-7 4.5-13.3 11.3-14.8c10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8l0 30.6c7.9 3.4 15.4 7.7 22.3 12.8l24.9-14.3c6.1-3.5 13.7-2.7 18.5 2.4c7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-25 14.4c.4 4 .7 8.1 .7 12.3s-.2 8.2-.7 12.3l25 14.4c6.1 3.5 9.2 10.5 7.2 17.2c-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4l-24.9-14.3c-6.9 5.1-14.3 9.4-22.3 12.8l0 30.6c0 7-4.5 13.3-11.3 14.8c-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8l0-30.5c-8-3.4-15.6-7.7-22.5-12.9l-24.7 14.3c-6.1 3.5-13.7 2.7-18.5-2.4c-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l24.8-14.3c-.4-4.1-.7-8.2-.7-12.4s.2-8.3 .7-12.4L343.8 325c-6.1-3.5-9.2-10.5-7.2-17.2c3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l24.8 14.3c6.9-5.1 14.5-9.4 22.5-12.9l0-30.5zm92.1 133.5a48.1 48.1 0 1 0 -96.1 0 48.1 48.1 0 1 0 96.1 0z",
            ],
          },
          nh = {
            prefix: "fas",
            iconName: "up-right-from-square",
            icon: [
              512,
              512,
              ["external-link-alt"],
              "f35d",
              "M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z",
            ],
          },
          ng = {
            prefix: "fas",
            iconName: "envelope",
            icon: [
              512,
              512,
              [128386, 9993, 61443],
              "f0e0",
              "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z",
            ],
          },
          nb = {
            prefix: "fas",
            iconName: "circle-info",
            icon: [
              512,
              512,
              ["info-circle"],
              "f05a",
              "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",
            ],
          },
          ny = {
            prefix: "fas",
            iconName: "clock",
            icon: [
              512,
              512,
              [128339, "clock-four"],
              "f017",
              "M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z",
            ],
          },
          nv = {
            prefix: "fas",
            iconName: "coins",
            icon: [
              512,
              512,
              [],
              "f51e",
              "M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2c0 0 0 0 0 0s0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4l0 3.4 0 5.7 0 26.3zm32 0l0-32 0-25.9c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 44.2-86 80-192 80S0 476.2 0 432l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z",
            ],
          },
          nx = {
            prefix: "fas",
            iconName: "network-wired",
            icon: [
              640,
              512,
              [],
              "f6ff",
              "M256 64l128 0 0 64-128 0 0-64zM240 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l48 0 0 32L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 256 0 0 32-48 0c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l160 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0-32 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-256 0 0-32 48 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48L240 0zM96 448l0-64 128 0 0 64L96 448zm320-64l128 0 0 64-128 0 0-64z",
            ],
          },
          nz = {
            prefix: "fas",
            iconName: "calculator",
            icon: [
              384,
              512,
              [128425],
              "f1ec",
              "M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM96 64l192 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L96 160c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z",
            ],
          },
          nk = {
            prefix: "fas",
            iconName: "angle-down",
            icon: [
              448,
              512,
              [8964],
              "f107",
              "M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z",
            ],
          },
          nw = {
            prefix: "fas",
            iconName: "medal",
            icon: [
              512,
              512,
              [127941],
              "f5a2",
              "M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z",
            ],
          },
          nM = {
            prefix: "fas",
            iconName: "gauge-high",
            icon: [
              512,
              512,
              [62461, "tachometer-alt", "tachometer-alt-fast"],
              "f625",
              "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z",
            ],
          },
          nC = {
            prefix: "fas",
            iconName: "play",
            icon: [
              384,
              512,
              [9654],
              "f04b",
              "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z",
            ],
          },
          nL = {
            prefix: "fas",
            iconName: "magnifying-glass",
            icon: [
              512,
              512,
              [128269, "search"],
              "f002",
              "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z",
            ],
          },
          nA = {
            prefix: "fas",
            iconName: "chevron-down",
            icon: [
              512,
              512,
              [],
              "f078",
              "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z",
            ],
          },
          nO = {
            prefix: "fas",
            iconName: "arrow-up",
            icon: [
              384,
              512,
              [8593],
              "f062",
              "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z",
            ],
          },
          nN = {
            prefix: "fas",
            iconName: "copy",
            icon: [
              448,
              512,
              [],
              "f0c5",
              "M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z",
            ],
          },
          nS = {
            prefix: "fas",
            iconName: "share-from-square",
            icon: [
              576,
              512,
              [61509, "share-square"],
              "f14d",
              "M352 224l-46.5 0c-45 0-81.5 36.5-81.5 81.5c0 22.3 10.3 34.3 19.2 40.5c6.8 4.7 12.8 12 12.8 20.3c0 9.8-8 17.8-17.8 17.8l-2.5 0c-2.4 0-4.8-.4-7.1-1.4C210.8 374.8 128 333.4 128 240c0-79.5 64.5-144 144-144l80 0 0-61.3C352 15.5 367.5 0 386.7 0c8.6 0 16.8 3.2 23.2 8.9L548.1 133.3c7.6 6.8 11.9 16.5 11.9 26.7s-4.3 19.9-11.9 26.7l-139 125.1c-5.9 5.3-13.5 8.2-21.4 8.2l-3.7 0c-17.7 0-32-14.3-32-32l0-64zM80 96c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-48c0-17.7 14.3-32 32-32s32 14.3 32 32l0 48c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 112C0 67.8 35.8 32 80 32l48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 96z",
            ],
          },
          nP = {
            prefix: "fas",
            iconName: "rocket",
            icon: [
              512,
              512,
              [],
              "f135",
              "M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z",
            ],
          },
          nj = {
            prefix: "fas",
            iconName: "trophy",
            icon: [
              576,
              512,
              [127942],
              "f091",
              "M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z",
            ],
          },
          nE = {
            prefix: "fas",
            iconName: "spinner",
            icon: [
              512,
              512,
              [],
              "f110",
              "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z",
            ],
          },
          nI = {
            prefix: "fas",
            iconName: "shield",
            icon: [
              512,
              512,
              [128737, "shield-blank"],
              "f132",
              "M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z",
            ],
          },
          nF = {
            prefix: "fas",
            iconName: "calendar",
            icon: [
              448,
              512,
              [128197, 128198],
              "f133",
              "M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z",
            ],
          },
          nD = {
            prefix: "fas",
            iconName: "book",
            icon: [
              448,
              512,
              [128212],
              "f02d",
              "M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z",
            ],
          },
          nT = {
            prefix: "fas",
            iconName: "triangle-exclamation",
            icon: [
              512,
              512,
              [9888, "exclamation-triangle", "warning"],
              "f071",
              "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z",
            ],
          },
          nR = {
            prefix: "fas",
            iconName: "database",
            icon: [
              448,
              512,
              [],
              "f1c0",
              "M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z",
            ],
          },
          nY = {
            prefix: "fas",
            iconName: "share",
            icon: [
              512,
              512,
              ["mail-forward"],
              "f064",
              "M307 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-112 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l96 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z",
            ],
          },
          nU = {
            prefix: "fas",
            iconName: "right-left",
            icon: [
              512,
              512,
              ["exchange-alt"],
              "f362",
              "M32 96l320 0 0-64c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-64L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32l-320 0 0 64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64 320 0z",
            ],
          },
          nW = {
            prefix: "fas",
            iconName: "paper-plane",
            icon: [
              512,
              512,
              [61913],
              "f1d8",
              "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z",
            ],
          },
          n_ = {
            prefix: "fas",
            iconName: "arrows-up-down",
            icon: [
              320,
              512,
              ["arrows-v"],
              "f07d",
              "M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3l0 293.5L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7l0-293.5 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z",
            ],
          },
          nH = {
            prefix: "fas",
            iconName: "circle-xmark",
            icon: [
              512,
              512,
              [61532, "times-circle", "xmark-circle"],
              "f057",
              "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z",
            ],
          },
          nq = {
            prefix: "fas",
            iconName: "dollar-sign",
            icon: [
              320,
              512,
              [128178, 61781, "dollar", "usd"],
              "24",
              "M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z",
            ],
          };
      },
      [55157],
    ],
  },
]);

//# sourceMappingURL=66dfc98ea899100c.js.map
