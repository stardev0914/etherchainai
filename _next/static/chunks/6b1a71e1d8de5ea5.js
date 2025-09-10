(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    203870: [
      (t) => {
        "use strict";
        t.s({}, 203870), t.s({ property: () => a }, 961527), t.i(957940);
        var e = t.i(513779);
        let n = {
            attribute: !0,
            type: String,
            converter: e.defaultConverter,
            reflect: !1,
            hasChanged: e.notEqual,
          },
          i = function () {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : n,
              e = arguments.length > 1 ? arguments[1] : void 0,
              i = arguments.length > 2 ? arguments[2] : void 0,
              { kind: a, metadata: r } = i,
              s = globalThis.litPropertyMetadata.get(r);
            if (
              (void 0 === s &&
                globalThis.litPropertyMetadata.set(r, (s = new Map())),
              "setter" === a && ((t = Object.create(t)).wrapped = !0),
              s.set(i.name, t),
              "accessor" === a)
            ) {
              let { name: n } = i;
              return {
                set(i) {
                  let a = e.get.call(this);
                  e.set.call(this, i), this.requestUpdate(n, a, t);
                },
                init(e) {
                  return void 0 !== e && this.C(n, void 0, t, e), e;
                },
              };
            }
            if ("setter" === a) {
              let { name: n } = i;
              return function (i) {
                let a = this[n];
                e.call(this, i), this.requestUpdate(n, a, t);
              };
            }
            throw Error("Unsupported decorator location: " + a);
          };
        function a(t) {
          return (e, n) =>
            "object" == typeof n
              ? i(t, e, n)
              : ((t, e, n) => {
                  let i = e.hasOwnProperty(n);
                  return (
                    e.constructor.createProperty(n, t),
                    i ? Object.getOwnPropertyDescriptor(e, n) : void 0
                  );
                })(t, e, n);
        }
        function r(t) {
          return a({ ...t, state: !0, attribute: !1 });
        }
        t.s({ state: () => r }, 408766);
      },
      [961527, 408766],
    ],
    700477: [
      (t) => {
        "use strict";
        t.s({}, 700477), t.s({ ifDefined: () => n }, 129293);
        var e = t.i(898287);
        let n = (t) => (null != t ? t : e.nothing);
      },
      [129293],
    ],
    302499: (t) => {
      "use strict";
      t.s({ isPrimitive: () => n, isSingleExpression: () => i });
      let { I: e } = t.i(898287)._$LH,
        n = (t) =>
          null === t || ("object" != typeof t && "function" != typeof t),
        i = (t) => void 0 === t.strings;
    },
    204549: (t) => {
      "use strict";
      t.s({ Directive: () => i, PartType: () => e, directive: () => n });
      let e = {
          ATTRIBUTE: 1,
          CHILD: 2,
          PROPERTY: 3,
          BOOLEAN_ATTRIBUTE: 4,
          EVENT: 5,
          ELEMENT: 6,
        },
        n = (t) =>
          function () {
            for (var e = arguments.length, n = Array(e), i = 0; i < e; i++)
              n[i] = arguments[i];
            return { _$litDirective$: t, values: n };
          };
      class i {
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AT(t, e, n) {
          (this._$Ct = t), (this._$AM = e), (this._$Ci = n);
        }
        _$AS(t, e) {
          return this.update(t, e);
        }
        update(t, e) {
          return this.render(...e);
        }
        constructor(t) {}
      }
    },
    558170: [
      (t) => {
        "use strict";
        t.s({}, 558170);
        var e = t.i(431006);
        t.i(561791);
        var n = t.i(645501),
          i = t.i(898287);
        t.i(203870);
        var a = t.i(961527),
          r = t.i(302499);
        t.s({}, 237944);
        var s = t.i(204549);
        t.s({ AsyncDirective: () => v }, 471759);
        var o = s;
        let c = (t, e) => {
            var n;
            let i = t._$AN;
            if (void 0 === i) return !1;
            for (let t of i) null == (n = t._$AO) || n.call(t, e, !1), c(t, e);
            return !0;
          },
          l = (t) => {
            let e, n;
            do {
              if (void 0 === (e = t._$AM)) break;
              (n = e._$AN).delete(t), (t = e);
            } while (0 === (null == n ? void 0 : n.size));
          },
          h = (t) => {
            for (let e; (e = t._$AM); t = e) {
              let n = e._$AN;
              if (void 0 === n) e._$AN = n = new Set();
              else if (n.has(t)) break;
              n.add(t), d(e);
            }
          };
        function u(t) {
          void 0 !== this._$AN
            ? (l(this), (this._$AM = t), h(this))
            : (this._$AM = t);
        }
        function p(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            i = this._$AH,
            a = this._$AN;
          if (void 0 !== a && 0 !== a.size)
            if (e)
              if (Array.isArray(i))
                for (let t = n; t < i.length; t++) c(i[t], !1), l(i[t]);
              else null != i && (c(i, !1), l(i));
            else c(this, t);
        }
        let d = (t) => {
          t.type == o.PartType.CHILD &&
            (null != t._$AP || (t._$AP = p), null != t._$AQ || (t._$AQ = u));
        };
        class v extends o.Directive {
          _$AT(t, e, n) {
            super._$AT(t, e, n), h(this), (this.isConnected = t._$AU);
          }
          _$AO(t) {
            var e, n;
            let i =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1];
            t !== this.isConnected &&
              ((this.isConnected = t),
              t
                ? null == (e = this.reconnected) || e.call(this)
                : null == (n = this.disconnected) || n.call(this)),
              i && (c(this, t), l(this));
          }
          setValue(t) {
            if ((0, r.isSingleExpression)(this._$Ct)) this._$Ct._$AI(t, this);
            else {
              let e = [...this._$Ct._$AH];
              (e[this._$Ci] = t), this._$Ct._$AI(e, this, 0);
            }
          }
          disconnected() {}
          reconnected() {}
          constructor() {
            super(...arguments), (this._$AN = void 0);
          }
        }
        class f {
          disconnect() {
            this.G = void 0;
          }
          reconnect(t) {
            this.G = t;
          }
          deref() {
            return this.G;
          }
          constructor(t) {
            this.G = t;
          }
        }
        class w {
          get() {
            return this.Y;
          }
          pause() {
            null != this.Y || (this.Y = new Promise((t) => (this.Z = t)));
          }
          resume() {
            var t;
            null == (t = this.Z) || t.call(this), (this.Y = this.Z = void 0);
          }
          constructor() {
            (this.Y = void 0), (this.Z = void 0);
          }
        }
        let m = (t) => !(0, r.isPrimitive)(t) && "function" == typeof t.then,
          g = (0, s.directive)(
            class extends v {
              render() {
                for (
                  var t, e = arguments.length, n = Array(e), a = 0;
                  a < e;
                  a++
                )
                  n[a] = arguments[a];
                return null != (t = n.find((t) => !m(t))) ? t : i.noChange;
              }
              update(t, e) {
                let n = this._$Cbt,
                  a = n.length;
                this._$Cbt = e;
                let r = this._$CK,
                  s = this._$CX;
                this.isConnected || this.disconnected();
                for (let t = 0; t < e.length && !(t > this._$Cwt); t++) {
                  let i = e[t];
                  if (!m(i)) return (this._$Cwt = t), i;
                  (t < a && i === n[t]) ||
                    ((this._$Cwt = 0x3fffffff),
                    (a = 0),
                    Promise.resolve(i).then(async (t) => {
                      for (; s.get(); ) await s.get();
                      let e = r.deref();
                      if (void 0 !== e) {
                        let n = e._$Cbt.indexOf(i);
                        n > -1 && n < e._$Cwt && ((e._$Cwt = n), e.setValue(t));
                      }
                    }));
                }
                return i.noChange;
              }
              disconnected() {
                this._$CK.disconnect(), this._$CX.pause();
              }
              reconnected() {
                this._$CK.reconnect(this), this._$CX.resume();
              }
              constructor() {
                super(...arguments),
                  (this._$Cwt = 0x3fffffff),
                  (this._$Cbt = []),
                  (this._$CK = new f(this)),
                  (this._$CX = new w());
              }
            }
          ),
          y = new (class {
            set(t, e) {
              this.cache.set(t, e);
            }
            get(t) {
              return this.cache.get(t);
            }
            has(t) {
              return this.cache.has(t);
            }
            delete(t) {
              this.cache.delete(t);
            }
            clear() {
              this.cache.clear();
            }
            constructor() {
              this.cache = new Map();
            }
          })();
        var b = t.i(83728),
          k = t.i(928951);
        function S() {
          let t = (0, e._)([
            "\n  :host {\n    display: flex;\n    aspect-ratio: var(--local-aspect-ratio);\n    color: var(--local-color);\n    width: var(--local-width);\n  }\n\n  svg {\n    width: inherit;\n    height: inherit;\n    object-fit: contain;\n    object-position: center;\n  }\n\n  .fallback {\n    width: var(--local-width);\n    height: var(--local-height);\n  }\n",
          ]);
          return (
            (S = function () {
              return t;
            }),
            t
          );
        }
        let x = (0, t.i(505625).css)(S());
        function j() {
          let t = (0, e._)(['<div class="fallback"></div>']);
          return (
            (j = function () {
              return t;
            }),
            t
          );
        }
        function P() {
          let t = (0, e._)(["", ""]);
          return (
            (P = function () {
              return t;
            }),
            t
          );
        }
        var C = function (t, e, n, i) {
          var a,
            r = arguments.length,
            s =
              r < 3
                ? e
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(e, n))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(t, e, n, i);
          else
            for (var o = t.length - 1; o >= 0; o--)
              (a = t[o]) &&
                (s = (r < 3 ? a(s) : r > 3 ? a(e, n, s) : a(e, n)) || s);
          return r > 3 && s && Object.defineProperty(e, n, s), s;
        };
        let _ = {
          add: async () => (await t.r(182940)(t.i)).addSvg,
          allWallets: async () => (await t.r(349839)(t.i)).allWalletsSvg,
          arrowBottomCircle: async () =>
            (await t.r(789287)(t.i)).arrowBottomCircleSvg,
          appStore: async () => (await t.r(772611)(t.i)).appStoreSvg,
          apple: async () => (await t.r(596469)(t.i)).appleSvg,
          arrowBottom: async () => (await t.r(357263)(t.i)).arrowBottomSvg,
          arrowLeft: async () => (await t.r(34539)(t.i)).arrowLeftSvg,
          arrowRight: async () => (await t.r(914916)(t.i)).arrowRightSvg,
          arrowTop: async () => (await t.r(384907)(t.i)).arrowTopSvg,
          bank: async () => (await t.r(989484)(t.i)).bankSvg,
          browser: async () => (await t.r(399025)(t.i)).browserSvg,
          bin: async () => (await t.r(724885)(t.i)).binSvg,
          bitcoin: async () => (await t.r(570703)(t.i)).bitcoinSvg,
          card: async () => (await t.r(236292)(t.i)).cardSvg,
          checkmark: async () => (await t.r(315233)(t.i)).checkmarkSvg,
          checkmarkBold: async () => (await t.r(443202)(t.i)).checkmarkBoldSvg,
          chevronBottom: async () => (await t.r(805968)(t.i)).chevronBottomSvg,
          chevronLeft: async () => (await t.r(719855)(t.i)).chevronLeftSvg,
          chevronRight: async () => (await t.r(694281)(t.i)).chevronRightSvg,
          chevronTop: async () => (await t.r(92534)(t.i)).chevronTopSvg,
          chromeStore: async () => (await t.r(785239)(t.i)).chromeStoreSvg,
          clock: async () => (await t.r(967146)(t.i)).clockSvg,
          close: async () => (await t.r(627782)(t.i)).closeSvg,
          compass: async () => (await t.r(566282)(t.i)).compassSvg,
          coinPlaceholder: async () =>
            (await t.r(22314)(t.i)).coinPlaceholderSvg,
          copy: async () => (await t.r(587107)(t.i)).copySvg,
          cursor: async () => (await t.r(179003)(t.i)).cursorSvg,
          cursorTransparent: async () =>
            (await t.r(632596)(t.i)).cursorTransparentSvg,
          circle: async () => (await t.r(292348)(t.i)).circleSvg,
          desktop: async () => (await t.r(180840)(t.i)).desktopSvg,
          disconnect: async () => (await t.r(68925)(t.i)).disconnectSvg,
          discord: async () => (await t.r(429078)(t.i)).discordSvg,
          ethereum: async () => (await t.r(460441)(t.i)).ethereumSvg,
          etherscan: async () => (await t.r(203683)(t.i)).etherscanSvg,
          extension: async () => (await t.r(2387)(t.i)).extensionSvg,
          externalLink: async () => (await t.r(811064)(t.i)).externalLinkSvg,
          facebook: async () => (await t.r(259217)(t.i)).facebookSvg,
          farcaster: async () => (await t.r(690417)(t.i)).farcasterSvg,
          filters: async () => (await t.r(784242)(t.i)).filtersSvg,
          github: async () => (await t.r(803439)(t.i)).githubSvg,
          google: async () => (await t.r(790398)(t.i)).googleSvg,
          helpCircle: async () => (await t.r(31966)(t.i)).helpCircleSvg,
          image: async () => (await t.r(124470)(t.i)).imageSvg,
          id: async () => (await t.r(396753)(t.i)).idSvg,
          infoCircle: async () => (await t.r(794264)(t.i)).infoCircleSvg,
          lightbulb: async () => (await t.r(888479)(t.i)).lightbulbSvg,
          mail: async () => (await t.r(852820)(t.i)).mailSvg,
          mobile: async () => (await t.r(686520)(t.i)).mobileSvg,
          more: async () => (await t.r(130569)(t.i)).moreSvg,
          networkPlaceholder: async () =>
            (await t.r(23453)(t.i)).networkPlaceholderSvg,
          nftPlaceholder: async () =>
            (await t.r(230824)(t.i)).nftPlaceholderSvg,
          off: async () => (await t.r(519147)(t.i)).offSvg,
          playStore: async () => (await t.r(924829)(t.i)).playStoreSvg,
          plus: async () => (await t.r(308306)(t.i)).plusSvg,
          qrCode: async () => (await t.r(70064)(t.i)).qrCodeIcon,
          recycleHorizontal: async () =>
            (await t.r(548886)(t.i)).recycleHorizontalSvg,
          refresh: async () => (await t.r(377276)(t.i)).refreshSvg,
          search: async () => (await t.r(825737)(t.i)).searchSvg,
          send: async () => (await t.r(930584)(t.i)).sendSvg,
          swapHorizontal: async () =>
            (await t.r(173407)(t.i)).swapHorizontalSvg,
          swapHorizontalMedium: async () =>
            (await t.r(66767)(t.i)).swapHorizontalMediumSvg,
          swapHorizontalBold: async () =>
            (await t.r(737839)(t.i)).swapHorizontalBoldSvg,
          swapHorizontalRoundedBold: async () =>
            (await t.r(733612)(t.i)).swapHorizontalRoundedBoldSvg,
          swapVertical: async () => (await t.r(594908)(t.i)).swapVerticalSvg,
          solana: async () => (await t.r(77682)(t.i)).solanaSvg,
          telegram: async () => (await t.r(928189)(t.i)).telegramSvg,
          threeDots: async () => (await t.r(239460)(t.i)).threeDotsSvg,
          twitch: async () => (await t.r(410556)(t.i)).twitchSvg,
          twitter: async () => (await t.r(452951)(t.i)).xSvg,
          twitterIcon: async () => (await t.r(969279)(t.i)).twitterIconSvg,
          verify: async () => (await t.r(542554)(t.i)).verifySvg,
          verifyFilled: async () => (await t.r(271944)(t.i)).verifyFilledSvg,
          wallet: async () => (await t.r(535373)(t.i)).walletSvg,
          walletConnect: async () => (await t.r(489973)(t.i)).walletConnectSvg,
          walletConnectLightBrown: async () =>
            (await t.r(489973)(t.i)).walletConnectLightBrownSvg,
          walletConnectBrown: async () =>
            (await t.r(489973)(t.i)).walletConnectBrownSvg,
          walletPlaceholder: async () =>
            (await t.r(200638)(t.i)).walletPlaceholderSvg,
          warningCircle: async () => (await t.r(376798)(t.i)).warningCircleSvg,
          x: async () => (await t.r(452951)(t.i)).xSvg,
          info: async () => (await t.r(222770)(t.i)).infoSvg,
          exclamationTriangle: async () =>
            (await t.r(185661)(t.i)).exclamationTriangleSvg,
          reown: async () => (await t.r(937677)(t.i)).reownSvg,
          "x-mark": async () => (await t.r(820241)(t.i)).xMarkSvg,
        };
        async function z(t) {
          var e;
          if (y.has(t)) return y.get(t);
          let n = (null != (e = _[t]) ? e : _.copy)();
          return y.set(t, n), n;
        }
        let $ = class extends n.LitElement {
          render() {
            return (
              (this.style.cssText = "\n      --local-color: "
                .concat(
                  "var(--wui-color-".concat(this.color, ");"),
                  "\n      --local-width: "
                )
                .concat(
                  "var(--wui-icon-size-".concat(this.size, ");"),
                  "\n      --local-aspect-ratio: "
                )
                .concat(this.aspectRatio, "\n    ")),
              (0, i.html)(P(), g(z(this.name), (0, i.html)(j())))
            );
          }
          constructor() {
            super(...arguments),
              (this.size = "md"),
              (this.name = "copy"),
              (this.color = "fg-300"),
              (this.aspectRatio = "1 / 1");
          }
        };
        ($.styles = [b.resetStyles, b.colorStyles, x]),
          C([(0, a.property)()], $.prototype, "size", void 0),
          C([(0, a.property)()], $.prototype, "name", void 0),
          C([(0, a.property)()], $.prototype, "color", void 0),
          C([(0, a.property)()], $.prototype, "aspectRatio", void 0),
          ($ = C([(0, k.customElement)("wui-icon")], $));
      },
      [471759, 237944],
    ],
    463617: [
      (t) => {
        "use strict";
        t.s({}, 463617);
        var e = t.i(431006);
        t.i(561791);
        var n = t.i(645501),
          i = t.i(898287);
        t.i(203870);
        var a = t.i(961527);
        t.s({}, 782035), t.s({ classMap: () => s }, 163170);
        var r = t.i(204549);
        let s = (0, r.directive)(
          class extends r.Directive {
            render(t) {
              return (
                " " +
                Object.keys(t)
                  .filter((e) => t[e])
                  .join(" ") +
                " "
              );
            }
            update(t, e) {
              var n, a;
              let [r] = e;
              if (void 0 === this.st) {
                for (let e in ((this.st = new Set()),
                void 0 !== t.strings &&
                  (this.nt = new Set(
                    t.strings
                      .join(" ")
                      .split(/\s/)
                      .filter((t) => "" !== t)
                  )),
                r))
                  !r[e] ||
                    (null == (n = this.nt) ? void 0 : n.has(e)) ||
                    this.st.add(e);
                return this.render(r);
              }
              let s = t.element.classList;
              for (let t of this.st) t in r || (s.remove(t), this.st.delete(t));
              for (let t in r) {
                let e = !!r[t];
                e === this.st.has(t) ||
                  (null == (a = this.nt) ? void 0 : a.has(t)) ||
                  (e
                    ? (s.add(t), this.st.add(t))
                    : (s.remove(t), this.st.delete(t)));
              }
              return i.noChange;
            }
            constructor(t) {
              var e;
              if (
                (super(t),
                t.type !== r.PartType.ATTRIBUTE ||
                  "class" !== t.name ||
                  (null == (e = t.strings) ? void 0 : e.length) > 2)
              )
                throw Error(
                  "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
                );
            }
          }
        );
        var o = t.i(83728),
          c = t.i(928951);
        function l() {
          let t = (0, e._)([
            "\n  :host {\n    display: inline-flex !important;\n  }\n\n  slot {\n    width: 100%;\n    display: inline-block;\n    font-style: normal;\n    font-family: var(--wui-font-family);\n    font-feature-settings:\n      'tnum' on,\n      'lnum' on,\n      'case' on;\n    line-height: 130%;\n    font-weight: var(--wui-font-weight-regular);\n    overflow: inherit;\n    text-overflow: inherit;\n    text-align: var(--local-align);\n    color: var(--local-color);\n  }\n\n  .wui-line-clamp-1 {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 1;\n  }\n\n  .wui-line-clamp-2 {\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 2;\n  }\n\n  .wui-font-medium-400 {\n    font-size: var(--wui-font-size-medium);\n    font-weight: var(--wui-font-weight-light);\n    letter-spacing: var(--wui-letter-spacing-medium);\n  }\n\n  .wui-font-medium-600 {\n    font-size: var(--wui-font-size-medium);\n    letter-spacing: var(--wui-letter-spacing-medium);\n  }\n\n  .wui-font-title-600 {\n    font-size: var(--wui-font-size-title);\n    letter-spacing: var(--wui-letter-spacing-title);\n  }\n\n  .wui-font-title-6-600 {\n    font-size: var(--wui-font-size-title-6);\n    letter-spacing: var(--wui-letter-spacing-title-6);\n  }\n\n  .wui-font-mini-700 {\n    font-size: var(--wui-font-size-mini);\n    letter-spacing: var(--wui-letter-spacing-mini);\n    text-transform: uppercase;\n  }\n\n  .wui-font-large-500,\n  .wui-font-large-600,\n  .wui-font-large-700 {\n    font-size: var(--wui-font-size-large);\n    letter-spacing: var(--wui-letter-spacing-large);\n  }\n\n  .wui-font-2xl-500,\n  .wui-font-2xl-600,\n  .wui-font-2xl-700 {\n    font-size: var(--wui-font-size-2xl);\n    letter-spacing: var(--wui-letter-spacing-2xl);\n  }\n\n  .wui-font-paragraph-400,\n  .wui-font-paragraph-500,\n  .wui-font-paragraph-600,\n  .wui-font-paragraph-700 {\n    font-size: var(--wui-font-size-paragraph);\n    letter-spacing: var(--wui-letter-spacing-paragraph);\n  }\n\n  .wui-font-small-400,\n  .wui-font-small-500,\n  .wui-font-small-600 {\n    font-size: var(--wui-font-size-small);\n    letter-spacing: var(--wui-letter-spacing-small);\n  }\n\n  .wui-font-tiny-400,\n  .wui-font-tiny-500,\n  .wui-font-tiny-600 {\n    font-size: var(--wui-font-size-tiny);\n    letter-spacing: var(--wui-letter-spacing-tiny);\n  }\n\n  .wui-font-micro-700,\n  .wui-font-micro-600,\n  .wui-font-micro-500 {\n    font-size: var(--wui-font-size-micro);\n    letter-spacing: var(--wui-letter-spacing-micro);\n    text-transform: uppercase;\n  }\n\n  .wui-font-tiny-400,\n  .wui-font-small-400,\n  .wui-font-medium-400,\n  .wui-font-paragraph-400 {\n    font-weight: var(--wui-font-weight-light);\n  }\n\n  .wui-font-large-700,\n  .wui-font-paragraph-700,\n  .wui-font-micro-700,\n  .wui-font-mini-700 {\n    font-weight: var(--wui-font-weight-bold);\n  }\n\n  .wui-font-medium-600,\n  .wui-font-medium-title-600,\n  .wui-font-title-6-600,\n  .wui-font-large-600,\n  .wui-font-paragraph-600,\n  .wui-font-small-600,\n  .wui-font-tiny-600,\n  .wui-font-micro-600 {\n    font-weight: var(--wui-font-weight-medium);\n  }\n\n  :host([disabled]) {\n    opacity: 0.4;\n  }\n",
          ]);
          return (
            (l = function () {
              return t;
            }),
            t
          );
        }
        let h = (0, t.i(505625).css)(l());
        function u() {
          let t = (0, e._)(["<slot class=", "></slot>"]);
          return (
            (u = function () {
              return t;
            }),
            t
          );
        }
        var p = function (t, e, n, i) {
          var a,
            r = arguments.length,
            s =
              r < 3
                ? e
                : null === i
                ? (i = Object.getOwnPropertyDescriptor(e, n))
                : i;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            s = Reflect.decorate(t, e, n, i);
          else
            for (var o = t.length - 1; o >= 0; o--)
              (a = t[o]) &&
                (s = (r < 3 ? a(s) : r > 3 ? a(e, n, s) : a(e, n)) || s);
          return r > 3 && s && Object.defineProperty(e, n, s), s;
        };
        let d = class extends n.LitElement {
          render() {
            let t = {
              ["wui-font-".concat(this.variant)]: !0,
              ["wui-color-".concat(this.color)]: !0,
              ["wui-line-clamp-".concat(this.lineClamp)]: !!this.lineClamp,
            };
            return (
              (this.style.cssText = "\n      --local-align: "
                .concat(this.align, ";\n      --local-color: var(--wui-color-")
                .concat(this.color, ");\n    ")),
              (0, i.html)(u(), s(t))
            );
          }
          constructor() {
            super(...arguments),
              (this.variant = "paragraph-500"),
              (this.color = "fg-300"),
              (this.align = "left"),
              (this.lineClamp = void 0);
          }
        };
        (d.styles = [o.resetStyles, h]),
          p([(0, a.property)()], d.prototype, "variant", void 0),
          p([(0, a.property)()], d.prototype, "color", void 0),
          p([(0, a.property)()], d.prototype, "align", void 0),
          p([(0, a.property)()], d.prototype, "lineClamp", void 0),
          (d = p([(0, c.customElement)("wui-text")], d));
      },
      [163170, 782035],
    ],
    281624: (t) => {
      "use strict";
      t.s({}, 281624);
      var e = t.i(431006);
      t.i(561791);
      var n = t.i(645501),
        i = t.i(898287);
      t.i(203870);
      var a = t.i(961527),
        r = t.i(83728),
        s = t.i(39451),
        o = t.i(928951);
      function c() {
        let t = (0, e._)([
          "\n  :host {\n    display: flex;\n    width: inherit;\n    height: inherit;\n  }\n",
        ]);
        return (
          (c = function () {
            return t;
          }),
          t
        );
      }
      let l = (0, t.i(505625).css)(c());
      function h() {
        let t = (0, e._)(["<slot></slot>"]);
        return (
          (h = function () {
            return t;
          }),
          t
        );
      }
      var u = function (t, e, n, i) {
        var a,
          r = arguments.length,
          s =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(t, e, n, i);
        else
          for (var o = t.length - 1; o >= 0; o--)
            (a = t[o]) &&
              (s = (r < 3 ? a(s) : r > 3 ? a(e, n, s) : a(e, n)) || s);
        return r > 3 && s && Object.defineProperty(e, n, s), s;
      };
      let p = class extends n.LitElement {
        render() {
          return (
            (this.style.cssText = "\n      flex-direction: "
              .concat(this.flexDirection, ";\n      flex-wrap: ")
              .concat(this.flexWrap, ";\n      flex-basis: ")
              .concat(this.flexBasis, ";\n      flex-grow: ")
              .concat(this.flexGrow, ";\n      flex-shrink: ")
              .concat(this.flexShrink, ";\n      align-items: ")
              .concat(this.alignItems, ";\n      justify-content: ")
              .concat(this.justifyContent, ";\n      column-gap: ")
              .concat(
                this.columnGap &&
                  "var(--wui-spacing-".concat(this.columnGap, ")"),
                ";\n      row-gap: "
              )
              .concat(
                this.rowGap && "var(--wui-spacing-".concat(this.rowGap, ")"),
                ";\n      gap: "
              )
              .concat(
                this.gap && "var(--wui-spacing-".concat(this.gap, ")"),
                ";\n      padding-top: "
              )
              .concat(
                this.padding &&
                  s.UiHelperUtil.getSpacingStyles(this.padding, 0),
                ";\n      padding-right: "
              )
              .concat(
                this.padding &&
                  s.UiHelperUtil.getSpacingStyles(this.padding, 1),
                ";\n      padding-bottom: "
              )
              .concat(
                this.padding &&
                  s.UiHelperUtil.getSpacingStyles(this.padding, 2),
                ";\n      padding-left: "
              )
              .concat(
                this.padding &&
                  s.UiHelperUtil.getSpacingStyles(this.padding, 3),
                ";\n      margin-top: "
              )
              .concat(
                this.margin && s.UiHelperUtil.getSpacingStyles(this.margin, 0),
                ";\n      margin-right: "
              )
              .concat(
                this.margin && s.UiHelperUtil.getSpacingStyles(this.margin, 1),
                ";\n      margin-bottom: "
              )
              .concat(
                this.margin && s.UiHelperUtil.getSpacingStyles(this.margin, 2),
                ";\n      margin-left: "
              )
              .concat(
                this.margin && s.UiHelperUtil.getSpacingStyles(this.margin, 3),
                ";\n    "
              )),
            (0, i.html)(h())
          );
        }
      };
      (p.styles = [r.resetStyles, l]),
        u([(0, a.property)()], p.prototype, "flexDirection", void 0),
        u([(0, a.property)()], p.prototype, "flexWrap", void 0),
        u([(0, a.property)()], p.prototype, "flexBasis", void 0),
        u([(0, a.property)()], p.prototype, "flexGrow", void 0),
        u([(0, a.property)()], p.prototype, "flexShrink", void 0),
        u([(0, a.property)()], p.prototype, "alignItems", void 0),
        u([(0, a.property)()], p.prototype, "justifyContent", void 0),
        u([(0, a.property)()], p.prototype, "columnGap", void 0),
        u([(0, a.property)()], p.prototype, "rowGap", void 0),
        u([(0, a.property)()], p.prototype, "gap", void 0),
        u([(0, a.property)()], p.prototype, "padding", void 0),
        u([(0, a.property)()], p.prototype, "margin", void 0),
        (p = u([(0, o.customElement)("wui-flex")], p));
    },
    968469: (t) => {
      "use strict";
      t.s({}, 968469), t.i(281624);
    },
    8573: (t) => {
      "use strict";
      t.s({}, 8573), t.i(463617);
    },
    888956: (t) => {
      "use strict";
      t.s({}, 888956);
      var e = t.i(431006);
      t.i(561791);
      var n = t.i(645501),
        i = t.i(898287);
      t.i(203870);
      var a = t.i(961527),
        r = t.i(83728),
        s = t.i(928951);
      function o() {
        let t = (0, e._)([
          "\n  :host {\n    display: block;\n    width: var(--local-width);\n    height: var(--local-height);\n  }\n\n  :host([data-object-fit='cover']) img {\n    object-fit: cover;\n    object-position: center center;\n  }\n\n  :host([data-object-fit='contain']) img {\n    object-fit: contain;\n    object-position: center center;\n  }\n\n  img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: inherit;\n  }\n",
        ]);
        return (
          (o = function () {
            return t;
          }),
          t
        );
      }
      let c = (0, t.i(505625).css)(o());
      function l() {
        let t = (0, e._)(["<img src=", " alt=", " @error=", " />"]);
        return (
          (l = function () {
            return t;
          }),
          t
        );
      }
      var h = function (t, e, n, i) {
        var a,
          r = arguments.length,
          s =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(t, e, n, i);
        else
          for (var o = t.length - 1; o >= 0; o--)
            (a = t[o]) &&
              (s = (r < 3 ? a(s) : r > 3 ? a(e, n, s) : a(e, n)) || s);
        return r > 3 && s && Object.defineProperty(e, n, s), s;
      };
      let u = class extends n.LitElement {
        render() {
          return (
            this.objectFit && (this.dataset.objectFit = this.objectFit),
            (this.style.cssText = "\n      --local-width: "
              .concat(
                this.size
                  ? "var(--wui-icon-size-".concat(this.size, ");")
                  : "100%",
                ";\n      --local-height: "
              )
              .concat(
                this.size
                  ? "var(--wui-icon-size-".concat(this.size, ");")
                  : "100%",
                ";\n      "
              )),
            (0, i.html)(l(), this.src, this.alt, this.handleImageError)
          );
        }
        handleImageError() {
          this.dispatchEvent(
            new CustomEvent("onLoadError", { bubbles: !0, composed: !0 })
          );
        }
        constructor() {
          super(...arguments),
            (this.src = "./path/to/image.jpg"),
            (this.alt = "Image"),
            (this.size = void 0),
            (this.objectFit = "cover");
        }
      };
      (u.styles = [r.resetStyles, r.colorStyles, c]),
        h([(0, a.property)()], u.prototype, "src", void 0),
        h([(0, a.property)()], u.prototype, "alt", void 0),
        h([(0, a.property)()], u.prototype, "size", void 0),
        h([(0, a.property)()], u.prototype, "objectFit", void 0),
        (u = h([(0, s.customElement)("wui-image")], u));
    },
    909838: (t) => {
      "use strict";
      t.s({}, 909838);
      var e = t.i(431006);
      t.i(561791);
      var n = t.i(645501),
        i = t.i(898287);
      t.i(203870);
      var a = t.i(961527);
      t.i(558170), t.i(888956), t.i(463617);
      var r = t.i(83728),
        s = t.i(928951);
      function o() {
        let t = (0, e._)([
          "\n  button {\n    border: none;\n    border-radius: var(--wui-border-radius-3xl);\n  }\n\n  button[data-variant='main'] {\n    background-color: var(--wui-color-accent-100);\n    color: var(--wui-color-inverse-100);\n    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);\n  }\n\n  button[data-variant='accent'] {\n    background-color: var(--wui-color-accent-glass-010);\n    color: var(--wui-color-accent-100);\n    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);\n  }\n\n  button[data-variant='gray'] {\n    background-color: transparent;\n    color: var(--wui-color-fg-200);\n    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);\n  }\n\n  button[data-variant='shade'] {\n    background-color: transparent;\n    color: var(--wui-color-accent-100);\n    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);\n  }\n\n  button[data-size='sm'] {\n    height: 32px;\n    padding: 0 var(--wui-spacing-s);\n  }\n\n  button[data-size='md'] {\n    height: 40px;\n    padding: 0 var(--wui-spacing-l);\n  }\n\n  button[data-size='sm'] > wui-image {\n    width: 16px;\n    height: 16px;\n  }\n\n  button[data-size='md'] > wui-image {\n    width: 24px;\n    height: 24px;\n  }\n\n  button[data-size='sm'] > wui-icon {\n    width: 12px;\n    height: 12px;\n  }\n\n  button[data-size='md'] > wui-icon {\n    width: 14px;\n    height: 14px;\n  }\n\n  wui-image {\n    border-radius: var(--wui-border-radius-3xl);\n    overflow: hidden;\n  }\n\n  button.disabled > wui-icon,\n  button.disabled > wui-image {\n    filter: grayscale(1);\n  }\n\n  button[data-variant='main'] > wui-image {\n    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);\n  }\n\n  button[data-variant='shade'] > wui-image,\n  button[data-variant='gray'] > wui-image {\n    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);\n  }\n\n  @media (hover: hover) and (pointer: fine) {\n    button[data-variant='main']:focus-visible {\n      background-color: var(--wui-color-accent-090);\n    }\n\n    button[data-variant='main']:hover:enabled {\n      background-color: var(--wui-color-accent-090);\n    }\n\n    button[data-variant='main']:active:enabled {\n      background-color: var(--wui-color-accent-080);\n    }\n\n    button[data-variant='accent']:hover:enabled {\n      background-color: var(--wui-color-accent-glass-015);\n    }\n\n    button[data-variant='accent']:active:enabled {\n      background-color: var(--wui-color-accent-glass-020);\n    }\n\n    button[data-variant='shade']:focus-visible,\n    button[data-variant='gray']:focus-visible,\n    button[data-variant='shade']:hover,\n    button[data-variant='gray']:hover {\n      background-color: var(--wui-color-gray-glass-002);\n    }\n\n    button[data-variant='gray']:active,\n    button[data-variant='shade']:active {\n      background-color: var(--wui-color-gray-glass-005);\n    }\n  }\n\n  button.disabled {\n    color: var(--wui-color-gray-glass-020);\n    background-color: var(--wui-color-gray-glass-002);\n    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);\n    pointer-events: none;\n  }\n",
        ]);
        return (
          (o = function () {
            return t;
          }),
          t
        );
      }
      let c = (0, t.i(505625).css)(o());
      function l() {
        let t = (0, e._)(["<wui-image src=", "></wui-image>"]);
        return (
          (l = function () {
            return t;
          }),
          t
        );
      }
      function h() {
        let t = (0, e._)([
          "\n      <button\n        class=",
          "\n        data-variant=",
          "\n        data-size=",
          "\n      >\n        ",
          "\n        <wui-text variant=",
          ' color="inherit"> ',
          " </wui-text>\n        <wui-icon name=",
          ' color="inherit" size="inherit"></wui-icon>\n      </button>\n    ',
        ]);
        return (
          (h = function () {
            return t;
          }),
          t
        );
      }
      var u = function (t, e, n, i) {
        var a,
          r = arguments.length,
          s =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(t, e, n, i);
        else
          for (var o = t.length - 1; o >= 0; o--)
            (a = t[o]) &&
              (s = (r < 3 ? a(s) : r > 3 ? a(e, n, s) : a(e, n)) || s);
        return r > 3 && s && Object.defineProperty(e, n, s), s;
      };
      let p = class extends n.LitElement {
        render() {
          let t = "sm" === this.size ? "small-600" : "paragraph-600";
          return (0, i.html)(
            h(),
            this.disabled ? "disabled" : "",
            this.variant,
            this.size,
            this.imageSrc ? (0, i.html)(l(), this.imageSrc) : null,
            t,
            this.text,
            this.icon
          );
        }
        constructor() {
          super(...arguments),
            (this.variant = "accent"),
            (this.imageSrc = ""),
            (this.disabled = !1),
            (this.icon = "externalLink"),
            (this.size = "md"),
            (this.text = "");
        }
      };
      (p.styles = [r.resetStyles, r.elementStyles, c]),
        u([(0, a.property)()], p.prototype, "variant", void 0),
        u([(0, a.property)()], p.prototype, "imageSrc", void 0),
        u(
          [(0, a.property)({ type: Boolean })],
          p.prototype,
          "disabled",
          void 0
        ),
        u([(0, a.property)()], p.prototype, "icon", void 0),
        u([(0, a.property)()], p.prototype, "size", void 0),
        u([(0, a.property)()], p.prototype, "text", void 0),
        (p = u([(0, s.customElement)("wui-chip-button")], p));
    },
    959556: (t) => {
      "use strict";
      t.s({ W3mWalletReceiveView: () => O }, 959556),
        t.s({ W3mWalletReceiveView: () => O }, 735629);
      var e = t.i(431006);
      t.i(561791);
      var n = t.i(645501),
        i = t.i(898287);
      t.i(203870);
      var a = t.i(408766);
      t.i(700477);
      var r = t.i(129293),
        s = t.i(868263),
        o = t.i(984892),
        c = t.i(17038),
        l = t.i(775078),
        h = t.i(981824),
        u = t.i(663296),
        p = t.i(289579),
        d = t.i(864510);
      t.i(487245);
      var v = t.i(39451),
        f = t.i(928951);
      t.i(909838);
      var w = n,
        m = t.i(961527);
      t.i(558170), t.i(888956), t.i(463617), t.i(281624);
      var g = t.i(83728),
        y = t.i(505625);
      function b() {
        let t = (0, e._)([
          "\n  button {\n    display: flex;\n    gap: var(--wui-spacing-xl);\n    width: 100%;\n    background-color: var(--wui-color-gray-glass-002);\n    border-radius: var(--wui-border-radius-xxs);\n    padding: var(--wui-spacing-m) var(--wui-spacing-s);\n  }\n\n  wui-text {\n    width: 100%;\n  }\n\n  wui-flex {\n    width: auto;\n  }\n\n  .network-icon {\n    width: var(--wui-spacing-2l);\n    height: var(--wui-spacing-2l);\n    border-radius: calc(var(--wui-spacing-2l) / 2);\n    overflow: hidden;\n    box-shadow:\n      0 0 0 3px var(--wui-color-gray-glass-002),\n      0 0 0 3px var(--wui-color-modal-bg);\n  }\n",
        ]);
        return (
          (b = function () {
            return t;
          }),
          t
        );
      }
      let k = (0, y.css)(b());
      function S() {
        let t = (0, e._)([
          '\n      <button>\n        <wui-text variant="small-400" color="fg-200">',
          '</wui-text>\n        <wui-flex gap="3xs" alignItems="center">\n          ',
          '\n          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>\n        </wui-flex>\n      </button>\n    ',
        ]);
        return (
          (S = function () {
            return t;
          }),
          t
        );
      }
      function x() {
        let t = (0, e._)([
          ' <wui-flex class="network-icon"> <wui-image src=',
          "></wui-image> </wui-flex>",
        ]);
        return (
          (x = function () {
            return t;
          }),
          t
        );
      }
      function j() {
        let t = (0, e._)([
          ' <wui-flex class="networks">\n      ',
          "\n    </wui-flex>",
        ]);
        return (
          (j = function () {
            return t;
          }),
          t
        );
      }
      var P = function (t, e, n, i) {
        var a,
          r = arguments.length,
          s =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(t, e, n, i);
        else
          for (var o = t.length - 1; o >= 0; o--)
            (a = t[o]) &&
              (s = (r < 3 ? a(s) : r > 3 ? a(e, n, s) : a(e, n)) || s);
        return r > 3 && s && Object.defineProperty(e, n, s), s;
      };
      let C = class extends w.LitElement {
        render() {
          return (0, i.html)(S(), this.text, this.networksTemplate());
        }
        networksTemplate() {
          let t = this.networkImages.slice(0, 5);
          return (0, i.html)(
            j(),
            null == t ? void 0 : t.map((t) => (0, i.html)(x(), t))
          );
        }
        constructor() {
          super(...arguments), (this.networkImages = [""]), (this.text = "");
        }
      };
      (C.styles = [g.resetStyles, g.elementStyles, k]),
        P(
          [(0, m.property)({ type: Array })],
          C.prototype,
          "networkImages",
          void 0
        ),
        P([(0, m.property)()], C.prototype, "text", void 0),
        (C = P([(0, f.customElement)("wui-compatible-network")], C)),
        t.i(968469),
        t.i(250454),
        t.i(8573);
      var _ = t.i(664572);
      function z() {
        let t = (0, e._)([
          "\n  wui-compatible-network {\n    margin-top: var(--wui-spacing-l);\n  }\n",
        ]);
        return (
          (z = function () {
            return t;
          }),
          t
        );
      }
      let $ = (0, y.css)(z());
      function A() {
        let t = (0, e._)([
          ' <wui-flex\n      flexDirection="column"\n      .padding=',
          '\n      alignItems="center"\n    >\n      <wui-chip-button\n        data-testid="receive-address-copy-button"\n        @click=',
          "\n        text=",
          '\n        icon="copy"\n        size="sm"\n        imageSrc=',
          '\n        variant="gray"\n      ></wui-chip-button>\n      <wui-flex\n        flexDirection="column"\n        .padding=',
          '\n        alignItems="center"\n        gap="s"\n      >\n        <wui-qr-code\n          size=',
          "\n          theme=",
          "\n          uri=",
          "\n          ?arenaClear=",
          "\n          color=",
          '\n          data-testid="wui-qr-code"\n        ></wui-qr-code>\n        <wui-text variant="paragraph-500" color="fg-100" align="center">\n          Copy your address or scan this QR code\n        </wui-text>\n      </wui-flex>\n      ',
          "\n    </wui-flex>",
        ]);
        return (
          (A = function () {
            return t;
          }),
          t
        );
      }
      function R() {
        let t = (0, e._)([
          "<wui-compatible-network\n        @click=",
          '\n        text="Only receive assets on this network"\n        .networkImages=',
          "\n      ></wui-compatible-network>",
        ]);
        return (
          (R = function () {
            return t;
          }),
          t
        );
      }
      function T() {
        let t = (0, e._)([
          "<wui-compatible-network\n      @click=",
          '\n      text="Only receive assets on these networks"\n      .networkImages=',
          "\n    ></wui-compatible-network>",
        ]);
        return (
          (T = function () {
            return t;
          }),
          t
        );
      }
      var E = function (t, e, n, i) {
        var a,
          r = arguments.length,
          s =
            r < 3
              ? e
              : null === i
              ? (i = Object.getOwnPropertyDescriptor(e, n))
              : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(t, e, n, i);
        else
          for (var o = t.length - 1; o >= 0; o--)
            (a = t[o]) &&
              (s = (r < 3 ? a(s) : r > 3 ? a(e, n, s) : a(e, n)) || s);
        return r > 3 && s && Object.defineProperty(e, n, s), s;
      };
      let O = class extends n.LitElement {
        disconnectedCallback() {
          this.unsubscribe.forEach((t) => t());
        }
        render() {
          if (!this.address)
            throw Error("w3m-wallet-receive-view: No account provided");
          let t = o.AssetUtil.getNetworkImage(this.network);
          return (0, i.html)(
            A(),
            ["0", "l", "l", "l"],
            this.onCopyClick.bind(this),
            v.UiHelperUtil.getTruncateString({
              string: this.profileName || this.address || "",
              charsStart: this.profileName ? 18 : 4,
              charsEnd: 4 * !this.profileName,
              truncate: this.profileName ? "end" : "middle",
            }),
            t || "",
            ["l", "0", "0", "0"],
            232,
            p.ThemeController.state.themeMode,
            this.address,
            !0,
            (0, r.ifDefined)(
              p.ThemeController.state.themeVariables["--w3m-qr-color"]
            ),
            this.networkTemplate()
          );
        }
        networkTemplate() {
          var t, e;
          let n = c.ChainController.getAllRequestedCaipNetworks(),
            a = c.ChainController.checkIfSmartAccountEnabled(),
            r = c.ChainController.state.activeCaipNetwork,
            s = n.filter(
              (t) =>
                (null == t ? void 0 : t.chainNamespace) ===
                (null == r ? void 0 : r.chainNamespace)
            );
          if (
            (0, d.getPreferredAccountType)(
              null == r ? void 0 : r.chainNamespace
            ) === _.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT &&
            a
          )
            return r
              ? (0, i.html)(R(), this.onReceiveClick.bind(this), [
                  null != (e = o.AssetUtil.getNetworkImage(r)) ? e : "",
                ])
              : null;
          let l = (
            null == s ||
            null ==
              (t = s.filter((t) => {
                var e;
                return null == t || null == (e = t.assets) ? void 0 : e.imageId;
              }))
              ? void 0
              : t.slice(0, 5)
          )
            .map(o.AssetUtil.getNetworkImage)
            .filter(Boolean);
          return (0, i.html)(T(), this.onReceiveClick.bind(this), l);
        }
        onReceiveClick() {
          h.RouterController.push("WalletCompatibleNetworks");
        }
        onCopyClick() {
          try {
            this.address &&
              (l.CoreHelperUtil.copyToClopboard(this.address),
              u.SnackController.showSuccess("Address copied"));
          } catch (t) {
            u.SnackController.showError("Failed to copy");
          }
        }
        constructor() {
          super(),
            (this.unsubscribe = []),
            (this.address = s.AccountController.state.address),
            (this.profileName = s.AccountController.state.profileName),
            (this.network = c.ChainController.state.activeCaipNetwork),
            this.unsubscribe.push(
              s.AccountController.subscribe((t) => {
                t.address
                  ? ((this.address = t.address),
                    (this.profileName = t.profileName))
                  : u.SnackController.showError("Account not found");
              }),
              c.ChainController.subscribeKey("activeCaipNetwork", (t) => {
                (null == t ? void 0 : t.id) && (this.network = t);
              })
            );
        }
      };
      (O.styles = $),
        E([(0, a.state)()], O.prototype, "address", void 0),
        E([(0, a.state)()], O.prototype, "profileName", void 0),
        E([(0, a.state)()], O.prototype, "network", void 0),
        (O = E([(0, f.customElement)("w3m-wallet-receive-view")], O)),
        t.s({}, 305920),
        t.s({ W3mWalletReceiveView: () => O }, 69932),
        t.i(735629),
        t.i(305920),
        t.i(69932);
    },
    182940: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/39527ecb646ebfd6.js"].map((e) => t.l(e))
        ).then(() => e(552419))
      );
    },
    349839: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/f8c5abde559eabad.js"].map((e) => t.l(e))
        ).then(() => e(993374))
      );
    },
    789287: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/5ecdd0e262540573.js"].map((e) => t.l(e))
        ).then(() => e(677236))
      );
    },
    772611: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/6f2f0c85eb258282.js"].map((e) => t.l(e))
        ).then(() => e(625788))
      );
    },
    596469: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/5e76d4f106e90bf0.js"].map((e) => t.l(e))
        ).then(() => e(159077))
      );
    },
    357263: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/76cf5f4af08fccd2.js"].map((e) => t.l(e))
        ).then(() => e(309571))
      );
    },
    34539: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/384705b0d08bb362.js"].map((e) => t.l(e))
        ).then(() => e(725648))
      );
    },
    914916: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/8ee0a88148ebb456.js"].map((e) => t.l(e))
        ).then(() => e(717998))
      );
    },
    384907: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/289b4efeb8e9ee74.js"].map((e) => t.l(e))
        ).then(() => e(690496))
      );
    },
    989484: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/155742c236e7bf8b.js"].map((e) => t.l(e))
        ).then(() => e(226155))
      );
    },
    399025: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/264d0721c96982cc.js"].map((e) => t.l(e))
        ).then(() => e(532029))
      );
    },
    724885: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/b821456f579228b2.js"].map((e) => t.l(e))
        ).then(() => e(55943))
      );
    },
    570703: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/b1d98869207b2f94.js"].map((e) => t.l(e))
        ).then(() => e(107622))
      );
    },
    236292: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/d568d9fea10c3886.js"].map((e) => t.l(e))
        ).then(() => e(457477))
      );
    },
    315233: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/d95895c66c0fa908.js"].map((e) => t.l(e))
        ).then(() => e(206464))
      );
    },
    443202: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/18034ee291d3bdde.js"].map((e) => t.l(e))
        ).then(() => e(989197))
      );
    },
    805968: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/cb3c5c4e320f5675.js"].map((e) => t.l(e))
        ).then(() => e(986064))
      );
    },
    719855: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/2367fa80960c5127.js"].map((e) => t.l(e))
        ).then(() => e(697510))
      );
    },
    694281: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/571674570ae82092.js"].map((e) => t.l(e))
        ).then(() => e(410379))
      );
    },
    92534: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/f0f253f9b16f12cc.js"].map((e) => t.l(e))
        ).then(() => e(329429))
      );
    },
    785239: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/2dec2dc1ec01e40b.js"].map((e) => t.l(e))
        ).then(() => e(601338))
      );
    },
    967146: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/eb1e02daef677fa0.js"].map((e) => t.l(e))
        ).then(() => e(442084))
      );
    },
    627782: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/f25f3b4e3da23e3c.js"].map((e) => t.l(e))
        ).then(() => e(282711))
      );
    },
    566282: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/a3dea1acbdfc4d22.js"].map((e) => t.l(e))
        ).then(() => e(237780))
      );
    },
    22314: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/d569c819140e0372.js"].map((e) => t.l(e))
        ).then(() => e(114652))
      );
    },
    587107: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/f80e6d50452b09be.js"].map((e) => t.l(e))
        ).then(() => e(76643))
      );
    },
    179003: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/a651fdad02a29f51.js"].map((e) => t.l(e))
        ).then(() => e(63434))
      );
    },
    632596: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/a41bbd2359c578ae.js"].map((e) => t.l(e))
        ).then(() => e(824221))
      );
    },
    292348: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/db95f5377bf8c0c3.js"].map((e) => t.l(e))
        ).then(() => e(945193))
      );
    },
    180840: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/873303902704f45b.js"].map((e) => t.l(e))
        ).then(() => e(969699))
      );
    },
    68925: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/d239cf840cf7398d.js"].map((e) => t.l(e))
        ).then(() => e(581121))
      );
    },
    429078: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/7ffd59361c45fc30.js"].map((e) => t.l(e))
        ).then(() => e(752911))
      );
    },
    460441: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/a4b6c2db5b69cc11.js"].map((e) => t.l(e))
        ).then(() => e(3706))
      );
    },
    203683: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/37b3912f37b827ea.js"].map((e) => t.l(e))
        ).then(() => e(882504))
      );
    },
    2387: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/adff1e3e8d875033.js"].map((e) => t.l(e))
        ).then(() => e(265643))
      );
    },
    811064: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/7376f6140ea6c6c7.js"].map((e) => t.l(e))
        ).then(() => e(246131))
      );
    },
    259217: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/00678a8a64d04681.js"].map((e) => t.l(e))
        ).then(() => e(943571))
      );
    },
    690417: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/b9013d2d66f92c84.js"].map((e) => t.l(e))
        ).then(() => e(769076))
      );
    },
    784242: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/6a20274c9712f994.js"].map((e) => t.l(e))
        ).then(() => e(585493))
      );
    },
    803439: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/43e55c7d1dba2bd0.js"].map((e) => t.l(e))
        ).then(() => e(982696))
      );
    },
    790398: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/f95cdd71e334ff47.js"].map((e) => t.l(e))
        ).then(() => e(978517))
      );
    },
    31966: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/90212ae03f1caf1c.js"].map((e) => t.l(e))
        ).then(() => e(423813))
      );
    },
    124470: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/184c29e55d91154d.js"].map((e) => t.l(e))
        ).then(() => e(937046))
      );
    },
    396753: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/d76ef9f8e74033f7.js"].map((e) => t.l(e))
        ).then(() => e(378980))
      );
    },
    794264: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/efe2cdd356e76929.js"].map((e) => t.l(e))
        ).then(() => e(119891))
      );
    },
    888479: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/354f882de8eb6d22.js"].map((e) => t.l(e))
        ).then(() => e(498094))
      );
    },
    852820: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/e4fb48f2881e06c7.js"].map((e) => t.l(e))
        ).then(() => e(58056))
      );
    },
    686520: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/280dfe413d813202.js"].map((e) => t.l(e))
        ).then(() => e(837477))
      );
    },
    130569: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/09cc9d51c67f0265.js"].map((e) => t.l(e))
        ).then(() => e(838332))
      );
    },
    23453: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/cceb2f2e1dc6d4d9.js"].map((e) => t.l(e))
        ).then(() => e(810959))
      );
    },
    230824: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/2e6d26d4353787ec.js"].map((e) => t.l(e))
        ).then(() => e(627725))
      );
    },
    519147: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/448531ca6669d864.js"].map((e) => t.l(e))
        ).then(() => e(139295))
      );
    },
    924829: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/83a4c231ceb092cc.js"].map((e) => t.l(e))
        ).then(() => e(349834))
      );
    },
    308306: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/dc7602e045101b01.js"].map((e) => t.l(e))
        ).then(() => e(237349))
      );
    },
    70064: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/815e9f908e8d96b0.js"].map((e) => t.l(e))
        ).then(() => e(583645))
      );
    },
    548886: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/1c7311660ed56edf.js"].map((e) => t.l(e))
        ).then(() => e(886337))
      );
    },
    377276: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/cb30368c05b83a70.js"].map((e) => t.l(e))
        ).then(() => e(97078))
      );
    },
    825737: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/93909f8ec0baecd9.js"].map((e) => t.l(e))
        ).then(() => e(220413))
      );
    },
    930584: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/d279804822a87a9b.js"].map((e) => t.l(e))
        ).then(() => e(340151))
      );
    },
    173407: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/e98de7a3cb9bd1e6.js"].map((e) => t.l(e))
        ).then(() => e(989192))
      );
    },
    66767: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/edd0a488fe87ca92.js"].map((e) => t.l(e))
        ).then(() => e(207837))
      );
    },
    737839: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/4898018122be2e23.js"].map((e) => t.l(e))
        ).then(() => e(583183))
      );
    },
    733612: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/1541c35300ef774b.js"].map((e) => t.l(e))
        ).then(() => e(459476))
      );
    },
    594908: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/e35d1169cf9ed094.js"].map((e) => t.l(e))
        ).then(() => e(481426))
      );
    },
    77682: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/d262f94e675eba05.js"].map((e) => t.l(e))
        ).then(() => e(204260))
      );
    },
    928189: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/3691d58b9e1dd476.js"].map((e) => t.l(e))
        ).then(() => e(89907))
      );
    },
    239460: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/97ceebee27992729.js"].map((e) => t.l(e))
        ).then(() => e(739064))
      );
    },
    410556: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/b419545fafdd2f27.js"].map((e) => t.l(e))
        ).then(() => e(892647))
      );
    },
    452951: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/602be82f1342acee.js"].map((e) => t.l(e))
        ).then(() => e(965574))
      );
    },
    969279: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/d2d925036d0b2702.js"].map((e) => t.l(e))
        ).then(() => e(344807))
      );
    },
    542554: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/b6afc0df2f1d819b.js"].map((e) => t.l(e))
        ).then(() => e(670617))
      );
    },
    271944: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/086efa7e9388dbe9.js"].map((e) => t.l(e))
        ).then(() => e(831565))
      );
    },
    535373: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/d1576167018c7efe.js"].map((e) => t.l(e))
        ).then(() => e(775784))
      );
    },
    489973: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/3ecc3b5e55f012a2.js"].map((e) => t.l(e))
        ).then(() => e(831622))
      );
    },
    200638: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/ee3c60dcf5652dc2.js"].map((e) => t.l(e))
        ).then(() => e(353268))
      );
    },
    376798: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/1a258b8a2d3edbd3.js"].map((e) => t.l(e))
        ).then(() => e(397969))
      );
    },
    222770: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/44868f20b11a615c.js"].map((e) => t.l(e))
        ).then(() => e(219299))
      );
    },
    185661: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/2d24b13793a40d70.js"].map((e) => t.l(e))
        ).then(() => e(714415))
      );
    },
    937677: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/e463f880b63e992a.js"].map((e) => t.l(e))
        ).then(() => e(867199))
      );
    },
    820241: (t) => {
      t.v((e) =>
        Promise.all(
          ["static/chunks/679724c5fd9bfcef.js"].map((e) => t.l(e))
        ).then(() => e(398463))
      );
    },
  },
]);

//# sourceMappingURL=0b297e6120a437a6.js.map
