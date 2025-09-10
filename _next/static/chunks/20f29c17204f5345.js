(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    199394: (t) => {
      "use strict";
      t.s({}, 199394), t.i(558170);
    },
    759963: (t) => {
      "use strict";
      t.s({}, 759963);
      var e = t.i(431006);
      t.i(561791);
      var i = t.i(645501),
        n = t.i(898287);
      t.i(203870);
      var r = t.i(961527),
        o = t.i(83728),
        a = t.i(928951);
      function s() {
        let t = (0, e._)([
          "\n  :host {\n    display: flex;\n  }\n\n  :host([data-size='sm']) > svg {\n    width: 12px;\n    height: 12px;\n  }\n\n  :host([data-size='md']) > svg {\n    width: 16px;\n    height: 16px;\n  }\n\n  :host([data-size='lg']) > svg {\n    width: 24px;\n    height: 24px;\n  }\n\n  :host([data-size='xl']) > svg {\n    width: 32px;\n    height: 32px;\n  }\n\n  svg {\n    animation: rotate 2s linear infinite;\n  }\n\n  circle {\n    fill: none;\n    stroke: var(--local-color);\n    stroke-width: 4px;\n    stroke-dasharray: 1, 124;\n    stroke-dashoffset: 0;\n    stroke-linecap: round;\n    animation: dash 1.5s ease-in-out infinite;\n  }\n\n  :host([data-size='md']) > svg > circle {\n    stroke-width: 6px;\n  }\n\n  :host([data-size='sm']) > svg > circle {\n    stroke-width: 8px;\n  }\n\n  @keyframes rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes dash {\n    0% {\n      stroke-dasharray: 1, 124;\n      stroke-dashoffset: 0;\n    }\n\n    50% {\n      stroke-dasharray: 90, 124;\n      stroke-dashoffset: -35;\n    }\n\n    100% {\n      stroke-dashoffset: -125;\n    }\n  }\n",
        ]);
        return (
          (s = function () {
            return t;
          }),
          t
        );
      }
      let c = (0, t.i(505625).css)(s());
      function l() {
        let t = (0, e._)([
          '<svg viewBox="25 25 50 50">\n      <circle r="20" cy="50" cx="50"></circle>\n    </svg>',
        ]);
        return (
          (l = function () {
            return t;
          }),
          t
        );
      }
      var p = function (t, e, i, n) {
        var r,
          o = arguments.length,
          a =
            o < 3
              ? e
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(e, i))
              : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(t, e, i, n);
        else
          for (var s = t.length - 1; s >= 0; s--)
            (r = t[s]) &&
              (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
        return o > 3 && a && Object.defineProperty(e, i, a), a;
      };
      let h = class extends i.LitElement {
        render() {
          return (
            (this.style.cssText = "--local-color: ".concat(
              "inherit" === this.color
                ? "inherit"
                : "var(--wui-color-".concat(this.color, ")")
            )),
            (this.dataset.size = this.size),
            (0, n.html)(l())
          );
        }
        constructor() {
          super(...arguments), (this.color = "accent-100"), (this.size = "lg");
        }
      };
      (h.styles = [o.resetStyles, c]),
        p([(0, r.property)()], h.prototype, "color", void 0),
        p([(0, r.property)()], h.prototype, "size", void 0),
        (h = p([(0, a.customElement)("wui-loading-spinner")], h));
    },
    51422: (t) => {
      "use strict";
      t.s({}, 51422);
      var e = t.i(431006);
      t.i(561791);
      var i = t.i(645501),
        n = t.i(898287);
      t.i(203870);
      var r = t.i(961527);
      t.i(558170);
      var o = t.i(83728),
        a = t.i(928951);
      function s() {
        let t = (0, e._)([
          "\n  :host {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    overflow: hidden;\n    background-color: var(--wui-color-gray-glass-020);\n    border-radius: var(--local-border-radius);\n    border: var(--local-border);\n    box-sizing: content-box;\n    width: var(--local-size);\n    height: var(--local-size);\n    min-height: var(--local-size);\n    min-width: var(--local-size);\n  }\n\n  @supports (background: color-mix(in srgb, white 50%, black)) {\n    :host {\n      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);\n    }\n  }\n",
        ]);
        return (
          (s = function () {
            return t;
          }),
          t
        );
      }
      let c = (0, t.i(505625).css)(s());
      function l() {
        let t = (0, e._)([
          " <wui-icon color=",
          " size=",
          " name=",
          "></wui-icon> ",
        ]);
        return (
          (l = function () {
            return t;
          }),
          t
        );
      }
      var p = function (t, e, i, n) {
        var r,
          o = arguments.length,
          a =
            o < 3
              ? e
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(e, i))
              : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(t, e, i, n);
        else
          for (var s = t.length - 1; s >= 0; s--)
            (r = t[s]) &&
              (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
        return o > 3 && a && Object.defineProperty(e, i, a), a;
      };
      let h = class extends i.LitElement {
        render() {
          let t = this.iconSize || this.size,
            e = "lg" === this.size,
            i = "xl" === this.size,
            r = "gray" === this.background,
            o = "opaque" === this.background,
            a =
              ("accent-100" === this.backgroundColor && o) ||
              ("success-100" === this.backgroundColor && o) ||
              ("error-100" === this.backgroundColor && o) ||
              ("inverse-100" === this.backgroundColor && o),
            s = "var(--wui-color-".concat(this.backgroundColor, ")");
          return (
            a
              ? (s = "var(--wui-icon-box-bg-".concat(this.backgroundColor, ")"))
              : r &&
                (s = "var(--wui-color-gray-".concat(this.backgroundColor, ")")),
            (this.style.cssText = "\n       --local-bg-value: "
              .concat(s, ";\n       --local-bg-mix: ")
              .concat(
                a || r ? "100%" : e ? "12%" : "16%",
                ";\n       --local-border-radius: var(--wui-border-radius-"
              )
              .concat(
                e ? "xxs" : i ? "s" : "3xl",
                ");\n       --local-size: var(--wui-icon-box-size-"
              )
              .concat(this.size, ");\n       --local-border: ")
              .concat(
                "wui-color-bg-125" === this.borderColor ? "2px" : "1px",
                " solid "
              )
              .concat(
                this.border
                  ? "var(--".concat(this.borderColor, ")")
                  : "transparent",
                "\n   "
              )),
            (0, n.html)(l(), this.iconColor, t, this.icon)
          );
        }
        constructor() {
          super(...arguments),
            (this.size = "md"),
            (this.backgroundColor = "accent-100"),
            (this.iconColor = "accent-100"),
            (this.background = "transparent"),
            (this.border = !1),
            (this.borderColor = "wui-color-bg-125"),
            (this.icon = "copy");
        }
      };
      (h.styles = [o.resetStyles, o.elementStyles, c]),
        p([(0, r.property)()], h.prototype, "size", void 0),
        p([(0, r.property)()], h.prototype, "backgroundColor", void 0),
        p([(0, r.property)()], h.prototype, "iconColor", void 0),
        p([(0, r.property)()], h.prototype, "iconSize", void 0),
        p([(0, r.property)()], h.prototype, "background", void 0),
        p([(0, r.property)({ type: Boolean })], h.prototype, "border", void 0),
        p([(0, r.property)()], h.prototype, "borderColor", void 0),
        p([(0, r.property)()], h.prototype, "icon", void 0),
        (h = p([(0, a.customElement)("wui-icon-box")], h));
    },
    203870: [
      (t) => {
        "use strict";
        t.s({}, 203870), t.s({ property: () => r }, 961527), t.i(957940);
        var e = t.i(513779);
        let i = {
            attribute: !0,
            type: String,
            converter: e.defaultConverter,
            reflect: !1,
            hasChanged: e.notEqual,
          },
          n = function () {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : i,
              e = arguments.length > 1 ? arguments[1] : void 0,
              n = arguments.length > 2 ? arguments[2] : void 0,
              { kind: r, metadata: o } = n,
              a = globalThis.litPropertyMetadata.get(o);
            if (
              (void 0 === a &&
                globalThis.litPropertyMetadata.set(o, (a = new Map())),
              "setter" === r && ((t = Object.create(t)).wrapped = !0),
              a.set(n.name, t),
              "accessor" === r)
            ) {
              let { name: i } = n;
              return {
                set(n) {
                  let r = e.get.call(this);
                  e.set.call(this, n), this.requestUpdate(i, r, t);
                },
                init(e) {
                  return void 0 !== e && this.C(i, void 0, t, e), e;
                },
              };
            }
            if ("setter" === r) {
              let { name: i } = n;
              return function (n) {
                let r = this[i];
                e.call(this, n), this.requestUpdate(i, r, t);
              };
            }
            throw Error("Unsupported decorator location: " + r);
          };
        function r(t) {
          return (e, i) =>
            "object" == typeof i
              ? n(t, e, i)
              : ((t, e, i) => {
                  let n = e.hasOwnProperty(i);
                  return (
                    e.constructor.createProperty(i, t),
                    n ? Object.getOwnPropertyDescriptor(e, i) : void 0
                  );
                })(t, e, i);
        }
        function o(t) {
          return r({ ...t, state: !0, attribute: !1 });
        }
        t.s({ state: () => o }, 408766);
      },
      [961527, 408766],
    ],
    700477: [
      (t) => {
        "use strict";
        t.s({}, 700477), t.s({ ifDefined: () => i }, 129293);
        var e = t.i(898287);
        let i = (t) => (null != t ? t : e.nothing);
      },
      [129293],
    ],
    281624: (t) => {
      "use strict";
      t.s({}, 281624);
      var e = t.i(431006);
      t.i(561791);
      var i = t.i(645501),
        n = t.i(898287);
      t.i(203870);
      var r = t.i(961527),
        o = t.i(83728),
        a = t.i(39451),
        s = t.i(928951);
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
      function p() {
        let t = (0, e._)(["<slot></slot>"]);
        return (
          (p = function () {
            return t;
          }),
          t
        );
      }
      var h = function (t, e, i, n) {
        var r,
          o = arguments.length,
          a =
            o < 3
              ? e
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(e, i))
              : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(t, e, i, n);
        else
          for (var s = t.length - 1; s >= 0; s--)
            (r = t[s]) &&
              (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
        return o > 3 && a && Object.defineProperty(e, i, a), a;
      };
      let u = class extends i.LitElement {
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
                  a.UiHelperUtil.getSpacingStyles(this.padding, 0),
                ";\n      padding-right: "
              )
              .concat(
                this.padding &&
                  a.UiHelperUtil.getSpacingStyles(this.padding, 1),
                ";\n      padding-bottom: "
              )
              .concat(
                this.padding &&
                  a.UiHelperUtil.getSpacingStyles(this.padding, 2),
                ";\n      padding-left: "
              )
              .concat(
                this.padding &&
                  a.UiHelperUtil.getSpacingStyles(this.padding, 3),
                ";\n      margin-top: "
              )
              .concat(
                this.margin && a.UiHelperUtil.getSpacingStyles(this.margin, 0),
                ";\n      margin-right: "
              )
              .concat(
                this.margin && a.UiHelperUtil.getSpacingStyles(this.margin, 1),
                ";\n      margin-bottom: "
              )
              .concat(
                this.margin && a.UiHelperUtil.getSpacingStyles(this.margin, 2),
                ";\n      margin-left: "
              )
              .concat(
                this.margin && a.UiHelperUtil.getSpacingStyles(this.margin, 3),
                ";\n    "
              )),
            (0, n.html)(p())
          );
        }
      };
      (u.styles = [o.resetStyles, l]),
        h([(0, r.property)()], u.prototype, "flexDirection", void 0),
        h([(0, r.property)()], u.prototype, "flexWrap", void 0),
        h([(0, r.property)()], u.prototype, "flexBasis", void 0),
        h([(0, r.property)()], u.prototype, "flexGrow", void 0),
        h([(0, r.property)()], u.prototype, "flexShrink", void 0),
        h([(0, r.property)()], u.prototype, "alignItems", void 0),
        h([(0, r.property)()], u.prototype, "justifyContent", void 0),
        h([(0, r.property)()], u.prototype, "columnGap", void 0),
        h([(0, r.property)()], u.prototype, "rowGap", void 0),
        h([(0, r.property)()], u.prototype, "gap", void 0),
        h([(0, r.property)()], u.prototype, "padding", void 0),
        h([(0, r.property)()], u.prototype, "margin", void 0),
        (u = h([(0, s.customElement)("wui-flex")], u));
    },
    968469: (t) => {
      "use strict";
      t.s({}, 968469), t.i(281624);
    },
    302499: (t) => {
      "use strict";
      t.s({ isPrimitive: () => i, isSingleExpression: () => n });
      let { I: e } = t.i(898287)._$LH,
        i = (t) =>
          null === t || ("object" != typeof t && "function" != typeof t),
        n = (t) => void 0 === t.strings;
    },
    204549: (t) => {
      "use strict";
      t.s({ Directive: () => n, PartType: () => e, directive: () => i });
      let e = {
          ATTRIBUTE: 1,
          CHILD: 2,
          PROPERTY: 3,
          BOOLEAN_ATTRIBUTE: 4,
          EVENT: 5,
          ELEMENT: 6,
        },
        i = (t) =>
          function () {
            for (var e = arguments.length, i = Array(e), n = 0; n < e; n++)
              i[n] = arguments[n];
            return { _$litDirective$: t, values: i };
          };
      class n {
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AT(t, e, i) {
          (this._$Ct = t), (this._$AM = e), (this._$Ci = i);
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
        var i = t.i(645501),
          n = t.i(898287);
        t.i(203870);
        var r = t.i(961527),
          o = t.i(302499);
        t.s({}, 237944);
        var a = t.i(204549);
        t.s({ AsyncDirective: () => g }, 471759);
        var s = a;
        let c = (t, e) => {
            var i;
            let n = t._$AN;
            if (void 0 === n) return !1;
            for (let t of n) null == (i = t._$AO) || i.call(t, e, !1), c(t, e);
            return !0;
          },
          l = (t) => {
            let e, i;
            do {
              if (void 0 === (e = t._$AM)) break;
              (i = e._$AN).delete(t), (t = e);
            } while (0 === (null == i ? void 0 : i.size));
          },
          p = (t) => {
            for (let e; (e = t._$AM); t = e) {
              let i = e._$AN;
              if (void 0 === i) e._$AN = i = new Set();
              else if (i.has(t)) break;
              i.add(t), d(e);
            }
          };
        function h(t) {
          void 0 !== this._$AN
            ? (l(this), (this._$AM = t), p(this))
            : (this._$AM = t);
        }
        function u(t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0,
            n = this._$AH,
            r = this._$AN;
          if (void 0 !== r && 0 !== r.size)
            if (e)
              if (Array.isArray(n))
                for (let t = i; t < n.length; t++) c(n[t], !1), l(n[t]);
              else null != n && (c(n, !1), l(n));
            else c(this, t);
        }
        let d = (t) => {
          t.type == s.PartType.CHILD &&
            (null != t._$AP || (t._$AP = u), null != t._$AQ || (t._$AQ = h));
        };
        class g extends s.Directive {
          _$AT(t, e, i) {
            super._$AT(t, e, i), p(this), (this.isConnected = t._$AU);
          }
          _$AO(t) {
            var e, i;
            let n =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1];
            t !== this.isConnected &&
              ((this.isConnected = t),
              t
                ? null == (e = this.reconnected) || e.call(this)
                : null == (i = this.disconnected) || i.call(this)),
              n && (c(this, t), l(this));
          }
          setValue(t) {
            if ((0, o.isSingleExpression)(this._$Ct)) this._$Ct._$AI(t, this);
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
        class v {
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
        class f {
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
        let w = (t) => !(0, o.isPrimitive)(t) && "function" == typeof t.then,
          y = (0, a.directive)(
            class extends g {
              render() {
                for (
                  var t, e = arguments.length, i = Array(e), r = 0;
                  r < e;
                  r++
                )
                  i[r] = arguments[r];
                return null != (t = i.find((t) => !w(t))) ? t : n.noChange;
              }
              update(t, e) {
                let i = this._$Cbt,
                  r = i.length;
                this._$Cbt = e;
                let o = this._$CK,
                  a = this._$CX;
                this.isConnected || this.disconnected();
                for (let t = 0; t < e.length && !(t > this._$Cwt); t++) {
                  let n = e[t];
                  if (!w(n)) return (this._$Cwt = t), n;
                  (t < r && n === i[t]) ||
                    ((this._$Cwt = 0x3fffffff),
                    (r = 0),
                    Promise.resolve(n).then(async (t) => {
                      for (; a.get(); ) await a.get();
                      let e = o.deref();
                      if (void 0 !== e) {
                        let i = e._$Cbt.indexOf(n);
                        i > -1 && i < e._$Cwt && ((e._$Cwt = i), e.setValue(t));
                      }
                    }));
                }
                return n.noChange;
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
                  (this._$CK = new v(this)),
                  (this._$CX = new f());
              }
            }
          ),
          m = new (class {
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
          S = t.i(928951);
        function x() {
          let t = (0, e._)([
            "\n  :host {\n    display: flex;\n    aspect-ratio: var(--local-aspect-ratio);\n    color: var(--local-color);\n    width: var(--local-width);\n  }\n\n  svg {\n    width: inherit;\n    height: inherit;\n    object-fit: contain;\n    object-position: center;\n  }\n\n  .fallback {\n    width: var(--local-width);\n    height: var(--local-height);\n  }\n",
          ]);
          return (
            (x = function () {
              return t;
            }),
            t
          );
        }
        let C = (0, t.i(505625).css)(x());
        function z() {
          let t = (0, e._)(['<div class="fallback"></div>']);
          return (
            (z = function () {
              return t;
            }),
            t
          );
        }
        function k() {
          let t = (0, e._)(["", ""]);
          return (
            (k = function () {
              return t;
            }),
            t
          );
        }
        var _ = function (t, e, i, n) {
          var r,
            o = arguments.length,
            a =
              o < 3
                ? e
                : null === n
                ? (n = Object.getOwnPropertyDescriptor(e, i))
                : n;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(t, e, i, n);
          else
            for (var s = t.length - 1; s >= 0; s--)
              (r = t[s]) &&
                (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
          return o > 3 && a && Object.defineProperty(e, i, a), a;
        };
        let $ = {
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
        async function j(t) {
          var e;
          if (m.has(t)) return m.get(t);
          let i = (null != (e = $[t]) ? e : $.copy)();
          return m.set(t, i), i;
        }
        let A = class extends i.LitElement {
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
              (0, n.html)(k(), y(j(this.name), (0, n.html)(z())))
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
        (A.styles = [b.resetStyles, b.colorStyles, C]),
          _([(0, r.property)()], A.prototype, "size", void 0),
          _([(0, r.property)()], A.prototype, "name", void 0),
          _([(0, r.property)()], A.prototype, "color", void 0),
          _([(0, r.property)()], A.prototype, "aspectRatio", void 0),
          (A = _([(0, S.customElement)("wui-icon")], A));
      },
      [471759, 237944],
    ],
    463617: [
      (t) => {
        "use strict";
        t.s({}, 463617);
        var e = t.i(431006);
        t.i(561791);
        var i = t.i(645501),
          n = t.i(898287);
        t.i(203870);
        var r = t.i(961527);
        t.s({}, 782035), t.s({ classMap: () => a }, 163170);
        var o = t.i(204549);
        let a = (0, o.directive)(
          class extends o.Directive {
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
              var i, r;
              let [o] = e;
              if (void 0 === this.st) {
                for (let e in ((this.st = new Set()),
                void 0 !== t.strings &&
                  (this.nt = new Set(
                    t.strings
                      .join(" ")
                      .split(/\s/)
                      .filter((t) => "" !== t)
                  )),
                o))
                  !o[e] ||
                    (null == (i = this.nt) ? void 0 : i.has(e)) ||
                    this.st.add(e);
                return this.render(o);
              }
              let a = t.element.classList;
              for (let t of this.st) t in o || (a.remove(t), this.st.delete(t));
              for (let t in o) {
                let e = !!o[t];
                e === this.st.has(t) ||
                  (null == (r = this.nt) ? void 0 : r.has(t)) ||
                  (e
                    ? (a.add(t), this.st.add(t))
                    : (a.remove(t), this.st.delete(t)));
              }
              return n.noChange;
            }
            constructor(t) {
              var e;
              if (
                (super(t),
                t.type !== o.PartType.ATTRIBUTE ||
                  "class" !== t.name ||
                  (null == (e = t.strings) ? void 0 : e.length) > 2)
              )
                throw Error(
                  "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
                );
            }
          }
        );
        var s = t.i(83728),
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
        let p = (0, t.i(505625).css)(l());
        function h() {
          let t = (0, e._)(["<slot class=", "></slot>"]);
          return (
            (h = function () {
              return t;
            }),
            t
          );
        }
        var u = function (t, e, i, n) {
          var r,
            o = arguments.length,
            a =
              o < 3
                ? e
                : null === n
                ? (n = Object.getOwnPropertyDescriptor(e, i))
                : n;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(t, e, i, n);
          else
            for (var s = t.length - 1; s >= 0; s--)
              (r = t[s]) &&
                (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
          return o > 3 && a && Object.defineProperty(e, i, a), a;
        };
        let d = class extends i.LitElement {
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
              (0, n.html)(h(), a(t))
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
        (d.styles = [s.resetStyles, p]),
          u([(0, r.property)()], d.prototype, "variant", void 0),
          u([(0, r.property)()], d.prototype, "color", void 0),
          u([(0, r.property)()], d.prototype, "align", void 0),
          u([(0, r.property)()], d.prototype, "lineClamp", void 0),
          (d = u([(0, c.customElement)("wui-text")], d));
      },
      [163170, 782035],
    ],
    8573: (t) => {
      "use strict";
      t.s({}, 8573), t.i(463617);
    },
    888956: (t) => {
      "use strict";
      t.s({}, 888956);
      var e = t.i(431006);
      t.i(561791);
      var i = t.i(645501),
        n = t.i(898287);
      t.i(203870);
      var r = t.i(961527),
        o = t.i(83728),
        a = t.i(928951);
      function s() {
        let t = (0, e._)([
          "\n  :host {\n    display: block;\n    width: var(--local-width);\n    height: var(--local-height);\n  }\n\n  :host([data-object-fit='cover']) img {\n    object-fit: cover;\n    object-position: center center;\n  }\n\n  :host([data-object-fit='contain']) img {\n    object-fit: contain;\n    object-position: center center;\n  }\n\n  img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: inherit;\n  }\n",
        ]);
        return (
          (s = function () {
            return t;
          }),
          t
        );
      }
      let c = (0, t.i(505625).css)(s());
      function l() {
        let t = (0, e._)(["<img src=", " alt=", " @error=", " />"]);
        return (
          (l = function () {
            return t;
          }),
          t
        );
      }
      var p = function (t, e, i, n) {
        var r,
          o = arguments.length,
          a =
            o < 3
              ? e
              : null === n
              ? (n = Object.getOwnPropertyDescriptor(e, i))
              : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(t, e, i, n);
        else
          for (var s = t.length - 1; s >= 0; s--)
            (r = t[s]) &&
              (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
        return o > 3 && a && Object.defineProperty(e, i, a), a;
      };
      let h = class extends i.LitElement {
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
            (0, n.html)(l(), this.src, this.alt, this.handleImageError)
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
      (h.styles = [o.resetStyles, o.colorStyles, c]),
        p([(0, r.property)()], h.prototype, "src", void 0),
        p([(0, r.property)()], h.prototype, "alt", void 0),
        p([(0, r.property)()], h.prototype, "size", void 0),
        p([(0, r.property)()], h.prototype, "objectFit", void 0),
        (h = p([(0, a.customElement)("wui-image")], h));
    },
    566500: [
      (t) => {
        "use strict";
        t.s({}, 566500), t.s({}, 810945);
        var e = t.i(431006);
        t.i(561791);
        var i = t.i(645501),
          n = t.i(898287);
        t.i(203870);
        var r = t.i(961527);
        t.i(558170);
        var o = t.i(83728),
          a = t.i(928951);
        function s() {
          let t = (0, e._)([
            "\n  button {\n    border-radius: var(--local-border-radius);\n    color: var(--wui-color-fg-100);\n    padding: var(--local-padding);\n  }\n\n  @media (max-width: 700px) {\n    :host(:not([size='sm'])) button {\n      padding: var(--wui-spacing-s);\n    }\n  }\n\n  button > wui-icon {\n    pointer-events: none;\n  }\n\n  button:disabled > wui-icon {\n    color: var(--wui-color-bg-300) !important;\n  }\n\n  button:disabled {\n    background-color: transparent;\n  }\n",
          ]);
          return (
            (s = function () {
              return t;
            }),
            t
          );
        }
        let c = (0, t.i(505625).css)(s());
        function l() {
          let t = (0, e._)([
            "\n      <button ?disabled=",
            ">\n        <wui-icon color=",
            " size=",
            " name=",
            "></wui-icon>\n      </button>\n    ",
          ]);
          return (
            (l = function () {
              return t;
            }),
            t
          );
        }
        var p = function (t, e, i, n) {
          var r,
            o = arguments.length,
            a =
              o < 3
                ? e
                : null === n
                ? (n = Object.getOwnPropertyDescriptor(e, i))
                : n;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(t, e, i, n);
          else
            for (var s = t.length - 1; s >= 0; s--)
              (r = t[s]) &&
                (a = (o < 3 ? r(a) : o > 3 ? r(e, i, a) : r(e, i)) || a);
          return o > 3 && a && Object.defineProperty(e, i, a), a;
        };
        let h = class extends i.LitElement {
          render() {
            this.dataset.size = this.size;
            let t = "",
              e = "";
            switch (this.size) {
              case "lg":
                (t = "--wui-border-radius-xs"), (e = "--wui-spacing-1xs");
                break;
              case "sm":
                (t = "--wui-border-radius-3xs"), (e = "--wui-spacing-xxs");
                break;
              default:
                (t = "--wui-border-radius-xxs"), (e = "--wui-spacing-2xs");
            }
            return (
              (this.style.cssText = "\n    --local-border-radius: var("
                .concat(t, ");\n    --local-padding: var(")
                .concat(e, ");\n    ")),
              (0, n.html)(
                l(),
                this.disabled,
                this.iconColor,
                this.size,
                this.icon
              )
            );
          }
          constructor() {
            super(...arguments),
              (this.size = "md"),
              (this.disabled = !1),
              (this.icon = "copy"),
              (this.iconColor = "inherit");
          }
        };
        (h.styles = [o.resetStyles, o.elementStyles, o.colorStyles, c]),
          p([(0, r.property)()], h.prototype, "size", void 0),
          p(
            [(0, r.property)({ type: Boolean })],
            h.prototype,
            "disabled",
            void 0
          ),
          p([(0, r.property)()], h.prototype, "icon", void 0),
          p([(0, r.property)()], h.prototype, "iconColor", void 0),
          (h = p([(0, a.customElement)("wui-icon-link")], h));
      },
      [810945],
    ],
  },
]);

//# sourceMappingURL=6b2ac5b5facf0c5d.js.map
