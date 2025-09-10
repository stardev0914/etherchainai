(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    701933: [
      (e) => {
        "use strict";
        e.s({}, 701933), e.s({ createRef: () => i, ref: () => s }, 964482);
        var t = e.i(898287);
        e.i(237944);
        var n = e.i(471759),
          o = e.i(204549);
        let i = () => new r();
        class r {}
        let a = new WeakMap(),
          s = (0, o.directive)(
            class extends n.AsyncDirective {
              render(e) {
                return t.nothing;
              }
              update(e, n) {
                var o;
                let [i] = n,
                  r = i !== this.G;
                return (
                  r && void 0 !== this.G && this.rt(void 0),
                  (r || this.lt !== this.ct) &&
                    ((this.G = i),
                    (this.ht = null == (o = e.options) ? void 0 : o.host),
                    this.rt((this.ct = e.element))),
                  t.nothing
                );
              }
              rt(e) {
                if (
                  (this.isConnected || (e = void 0),
                  "function" == typeof this.G)
                ) {
                  var t;
                  let n = null != (t = this.ht) ? t : globalThis,
                    o = a.get(n);
                  void 0 === o && ((o = new WeakMap()), a.set(n, o)),
                    void 0 !== o.get(this.G) && this.G.call(this.ht, void 0),
                    o.set(this.G, e),
                    void 0 !== e && this.G.call(this.ht, e);
                } else this.G.value = e;
              }
              get lt() {
                var e, t, n;
                return "function" == typeof this.G
                  ? null == (e = a.get(null != (n = this.ht) ? n : globalThis))
                    ? void 0
                    : e.get(this.G)
                  : null == (t = this.G)
                  ? void 0
                  : t.value;
              }
              disconnected() {
                this.lt === this.ct && this.rt(void 0);
              }
              reconnected() {
                this.rt(this.ct);
              }
            }
          );
      },
      [964482],
    ],
    543615: (e) => {
      "use strict";
      e.s({}, 543615), e.i(51422);
    },
    703918: (e) => {
      "use strict";
      e.s({}, 703918);
      var t = e.i(431006);
      e.i(561791);
      var n = e.i(645501),
        o = e.i(898287);
      e.i(203870);
      var i = e.i(961527);
      e.i(700477);
      var r = e.i(129293);
      e.i(463617);
      var a = e.i(83728),
        s = e.i(928951);
      function l() {
        let e = (0, t._)([
          "\n  button {\n    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);\n    border-radius: var(--wui-border-radius-3xs);\n    background-color: transparent;\n    color: var(--wui-color-accent-100);\n  }\n\n  button:disabled {\n    background-color: transparent;\n    color: var(--wui-color-gray-glass-015);\n  }\n\n  button:hover {\n    background-color: var(--wui-color-gray-glass-005);\n  }\n",
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      let c = (0, e.i(505625).css)(l());
      function u() {
        let e = (0, t._)([
          "\n      <button ?disabled=",
          " tabindex=",
          '>\n        <slot name="iconLeft"></slot>\n        <wui-text variant="small-600" color=',
          '>\n          <slot></slot>\n        </wui-text>\n        <slot name="iconRight"></slot>\n      </button>\n    ',
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      var d = function (e, t, n, o) {
        var i,
          r = arguments.length,
          a =
            r < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, n))
              : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) &&
              (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
        return r > 3 && a && Object.defineProperty(t, n, a), a;
      };
      let p = class extends n.LitElement {
        render() {
          return (0, o.html)(
            u(),
            this.disabled,
            (0, r.ifDefined)(this.tabIdx),
            this.color
          );
        }
        constructor() {
          super(...arguments),
            (this.tabIdx = void 0),
            (this.disabled = !1),
            (this.color = "inherit");
        }
      };
      (p.styles = [a.resetStyles, a.elementStyles, c]),
        d([(0, i.property)()], p.prototype, "tabIdx", void 0),
        d(
          [(0, i.property)({ type: Boolean })],
          p.prototype,
          "disabled",
          void 0
        ),
        d([(0, i.property)()], p.prototype, "color", void 0),
        (p = d([(0, s.customElement)("wui-link")], p));
    },
    887582: (e) => {
      "use strict";
      e.s({}, 887582);
      var t = e.i(431006);
      e.i(561791);
      var n = e.i(645501),
        o = e.i(898287);
      e.i(203870);
      var i = e.i(961527);
      e.i(782035);
      var r = e.i(163170);
      e.i(700477);
      var a = e.i(129293);
      e.i(701933);
      var s = e.i(964482);
      e.i(558170);
      var l = e.i(83728),
        c = e.i(928951);
      function u() {
        let e = (0, t._)([
          "\n  :host {\n    position: relative;\n    width: 100%;\n    display: inline-block;\n    color: var(--wui-color-fg-275);\n  }\n\n  input {\n    width: 100%;\n    border-radius: var(--wui-border-radius-xs);\n    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);\n    background: var(--wui-color-gray-glass-002);\n    font-size: var(--wui-font-size-paragraph);\n    letter-spacing: var(--wui-letter-spacing-paragraph);\n    color: var(--wui-color-fg-100);\n    transition:\n      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),\n      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),\n      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);\n    will-change: background-color, border-color, box-shadow;\n    caret-color: var(--wui-color-accent-100);\n  }\n\n  input:disabled {\n    cursor: not-allowed;\n    border: 1px solid var(--wui-color-gray-glass-010);\n  }\n\n  input:disabled::placeholder,\n  input:disabled + wui-icon {\n    color: var(--wui-color-fg-300);\n  }\n\n  input::placeholder {\n    color: var(--wui-color-fg-275);\n  }\n\n  input:focus:enabled {\n    background-color: var(--wui-color-gray-glass-005);\n    -webkit-box-shadow:\n      inset 0 0 0 1px var(--wui-color-accent-100),\n      0px 0px 0px 4px var(--wui-box-shadow-blue);\n    -moz-box-shadow:\n      inset 0 0 0 1px var(--wui-color-accent-100),\n      0px 0px 0px 4px var(--wui-box-shadow-blue);\n    box-shadow:\n      inset 0 0 0 1px var(--wui-color-accent-100),\n      0px 0px 0px 4px var(--wui-box-shadow-blue);\n  }\n\n  input:hover:enabled {\n    background-color: var(--wui-color-gray-glass-005);\n  }\n\n  wui-icon {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    pointer-events: none;\n  }\n\n  .wui-size-sm {\n    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);\n  }\n\n  wui-icon + .wui-size-sm {\n    padding: 9px var(--wui-spacing-m) 10px 36px;\n  }\n\n  wui-icon[data-input='sm'] {\n    left: var(--wui-spacing-s);\n  }\n\n  .wui-size-md {\n    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);\n  }\n\n  wui-icon + .wui-size-md,\n  wui-loading-spinner + .wui-size-md {\n    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);\n  }\n\n  wui-icon[data-input='md'] {\n    left: var(--wui-spacing-l);\n  }\n\n  .wui-size-lg {\n    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);\n    letter-spacing: var(--wui-letter-spacing-medium-title);\n    font-size: var(--wui-font-size-medium-title);\n    font-weight: var(--wui-font-weight-light);\n    line-height: 130%;\n    color: var(--wui-color-fg-100);\n    height: 64px;\n  }\n\n  .wui-padding-right-xs {\n    padding-right: var(--wui-spacing-xs);\n  }\n\n  .wui-padding-right-s {\n    padding-right: var(--wui-spacing-s);\n  }\n\n  .wui-padding-right-m {\n    padding-right: var(--wui-spacing-m);\n  }\n\n  .wui-padding-right-l {\n    padding-right: var(--wui-spacing-l);\n  }\n\n  .wui-padding-right-xl {\n    padding-right: var(--wui-spacing-xl);\n  }\n\n  .wui-padding-right-2xl {\n    padding-right: var(--wui-spacing-2xl);\n  }\n\n  .wui-padding-right-3xl {\n    padding-right: var(--wui-spacing-3xl);\n  }\n\n  .wui-padding-right-4xl {\n    padding-right: var(--wui-spacing-4xl);\n  }\n\n  .wui-padding-right-5xl {\n    padding-right: var(--wui-spacing-5xl);\n  }\n\n  wui-icon + .wui-size-lg,\n  wui-loading-spinner + .wui-size-lg {\n    padding-left: 50px;\n  }\n\n  wui-icon[data-input='lg'] {\n    left: var(--wui-spacing-l);\n  }\n\n  .wui-size-mdl {\n    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);\n  }\n  wui-icon + .wui-size-mdl,\n  wui-loading-spinner + .wui-size-mdl {\n    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;\n  }\n  wui-icon[data-input='mdl'] {\n    left: var(--wui-spacing-m);\n  }\n\n  input:placeholder-shown ~ ::slotted(wui-input-element),\n  input:placeholder-shown ~ ::slotted(wui-icon) {\n    opacity: 0;\n    pointer-events: none;\n  }\n\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  input[type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::slotted(wui-input-element),\n  ::slotted(wui-icon) {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  ::slotted(wui-input-element) {\n    right: var(--wui-spacing-m);\n  }\n\n  ::slotted(wui-icon) {\n    right: 0px;\n  }\n",
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      let d = (0, e.i(505625).css)(u());
      function p() {
        let e = (0, t._)([
          "",
          '\n      <input\n        data-testid="wui-input-text"\n        ',
          "\n        class=",
          "\n        type=",
          "\n        enterkeyhint=",
          "\n        ?disabled=",
          "\n        placeholder=",
          "\n        @input=",
          "\n        .value=",
          "\n        tabindex=",
          "\n      />\n      <slot></slot>",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function m() {
        let e = (0, t._)([
          "<wui-icon\n        data-input=",
          "\n        size=",
          '\n        color="inherit"\n        name=',
          "\n      ></wui-icon>",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      var h = function (e, t, n, o) {
        var i,
          r = arguments.length,
          a =
            r < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, n))
              : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) &&
              (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
        return r > 3 && a && Object.defineProperty(t, n, a), a;
      };
      let v = class extends n.LitElement {
        render() {
          let e = "wui-padding-right-".concat(this.inputRightPadding),
            t = {
              ["wui-size-".concat(this.size)]: !0,
              [e]: !!this.inputRightPadding,
            };
          return (0, o.html)(
            p(),
            this.templateIcon(),
            (0, s.ref)(this.inputElementRef),
            (0, r.classMap)(t),
            this.type,
            (0, a.ifDefined)(this.enterKeyHint),
            this.disabled,
            this.placeholder,
            this.dispatchInputChangeEvent.bind(this),
            this.value || "",
            (0, a.ifDefined)(this.tabIdx)
          );
        }
        templateIcon() {
          return this.icon
            ? (0, o.html)(m(), this.size, this.size, this.icon)
            : null;
        }
        dispatchInputChangeEvent() {
          var e;
          this.dispatchEvent(
            new CustomEvent("inputChange", {
              detail:
                null == (e = this.inputElementRef.value) ? void 0 : e.value,
              bubbles: !0,
              composed: !0,
            })
          );
        }
        constructor() {
          super(...arguments),
            (this.inputElementRef = (0, s.createRef)()),
            (this.size = "md"),
            (this.disabled = !1),
            (this.placeholder = ""),
            (this.type = "text"),
            (this.value = "");
        }
      };
      (v.styles = [l.resetStyles, l.elementStyles, d]),
        h([(0, i.property)()], v.prototype, "size", void 0),
        h([(0, i.property)()], v.prototype, "icon", void 0),
        h(
          [(0, i.property)({ type: Boolean })],
          v.prototype,
          "disabled",
          void 0
        ),
        h([(0, i.property)()], v.prototype, "placeholder", void 0),
        h([(0, i.property)()], v.prototype, "type", void 0),
        h([(0, i.property)()], v.prototype, "keyHint", void 0),
        h([(0, i.property)()], v.prototype, "value", void 0),
        h([(0, i.property)()], v.prototype, "inputRightPadding", void 0),
        h([(0, i.property)()], v.prototype, "tabIdx", void 0),
        (v = h([(0, c.customElement)("wui-input-text")], v));
    },
    128597: (e) => {
      "use strict";
      e.s({}, 128597), e.i(887582);
    },
    911270: (e) => {
      "use strict";
      e.s({
        REOWN_URL: () => o,
        numbersRegex: () => n,
        specialCharactersRegex: () => t,
      });
      let t = /[.*+?^${}()|[\]\\]/gu,
        n = /[0-9,.]/u,
        o = "https://reown.com";
    },
    562772: (e) => {
      "use strict";
      e.s({}, 562772);
      var t = e.i(431006);
      e.i(561791);
      var n = e.i(645501),
        o = e.i(898287);
      e.i(203870);
      var i = e.i(961527);
      e.i(463617);
      var r = e.i(83728),
        a = e.i(928951);
      function s() {
        let e = (0, t._)([
          "\n  :host {\n    position: relative;\n    display: flex;\n    width: 100%;\n    height: 1px;\n    background-color: var(--wui-color-gray-glass-005);\n    justify-content: center;\n    align-items: center;\n  }\n\n  :host > wui-text {\n    position: absolute;\n    padding: 0px 10px;\n    background-color: var(--wui-color-modal-bg);\n    transition: background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);\n    will-change: background-color;\n  }\n",
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      let l = (0, e.i(505625).css)(s());
      function c() {
        let e = (0, t._)(["", ""]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function u() {
        let e = (0, t._)([
          '<wui-text variant="small-500" color="fg-200">',
          "</wui-text>",
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      var d = function (e, t, n, o) {
        var i,
          r = arguments.length,
          a =
            r < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, n))
              : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) &&
              (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
        return r > 3 && a && Object.defineProperty(t, n, a), a;
      };
      let p = class extends n.LitElement {
        render() {
          return (0, o.html)(c(), this.template());
        }
        template() {
          return this.text ? (0, o.html)(u(), this.text) : null;
        }
        constructor() {
          super(...arguments), (this.text = "");
        }
      };
      (p.styles = [r.resetStyles, l]),
        d([(0, i.property)()], p.prototype, "text", void 0),
        (p = d([(0, a.customElement)("wui-separator")], p));
    },
    713189: (e) => {
      "use strict";
      e.s({}, 713189);
      var t = e.i(431006);
      e.i(561791);
      var n = e.i(645501),
        o = e.i(898287);
      e.i(203870);
      var i = e.i(961527);
      e.i(558170), e.i(888956), e.i(463617), e.i(281624);
      var r = e.i(83728),
        a = e.i(39451),
        s = e.i(928951);
      function l() {
        let e = (0, t._)([
          "\n  button {\n    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    border-radius: var(--wui-border-radius-xs);\n    background-color: var(--wui-color-gray-glass-002);\n  }\n\n  button[data-clickable='false'] {\n    pointer-events: none;\n    background-color: transparent;\n  }\n\n  wui-image,\n  wui-icon {\n    width: var(--wui-spacing-3xl);\n    height: var(--wui-spacing-3xl);\n  }\n\n  wui-image {\n    border-radius: var(--wui-border-radius-3xl);\n  }\n",
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      let c = (0, e.i(505625).css)(l());
      function u() {
        let e = (0, t._)([
          "\n      <button data-clickable=",
          '>\n        <wui-flex gap="s" alignItems="center">\n          ',
          '\n          <wui-flex flexDirection="column" justifyContent="spaceBetween">\n            <wui-text variant="paragraph-500" color="fg-100">',
          '</wui-text>\n            <wui-text variant="small-400" color="fg-200">\n              ',
          " ",
          '\n            </wui-text>\n          </wui-flex>\n        </wui-flex>\n        <wui-text variant="paragraph-500" color="fg-100">$',
          "</wui-text>\n      </button>\n    ",
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        let e = (0, t._)(["<wui-image alt=", " src=", "></wui-image>"]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        let e = (0, t._)([
          '<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>',
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      var m = function (e, t, n, o) {
        var i,
          r = arguments.length,
          a =
            r < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, n))
              : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) &&
              (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
        return r > 3 && a && Object.defineProperty(t, n, a), a;
      };
      let h = class extends n.LitElement {
        render() {
          return (0, o.html)(
            u(),
            String(this.clickable),
            this.visualTemplate(),
            this.tokenName,
            a.UiHelperUtil.formatNumberToLocalString(this.tokenAmount, 4),
            this.tokenCurrency,
            this.tokenValue.toFixed(2)
          );
        }
        visualTemplate() {
          return this.tokenName && this.tokenImageUrl
            ? (0, o.html)(d(), this.tokenName, this.tokenImageUrl)
            : (0, o.html)(p());
        }
        constructor() {
          super(...arguments),
            (this.tokenName = ""),
            (this.tokenImageUrl = ""),
            (this.tokenValue = 0),
            (this.tokenAmount = "0.0"),
            (this.tokenCurrency = ""),
            (this.clickable = !1);
        }
      };
      (h.styles = [r.resetStyles, r.elementStyles, c]),
        m([(0, i.property)()], h.prototype, "tokenName", void 0),
        m([(0, i.property)()], h.prototype, "tokenImageUrl", void 0),
        m(
          [(0, i.property)({ type: Number })],
          h.prototype,
          "tokenValue",
          void 0
        ),
        m([(0, i.property)()], h.prototype, "tokenAmount", void 0),
        m([(0, i.property)()], h.prototype, "tokenCurrency", void 0),
        m(
          [(0, i.property)({ type: Boolean })],
          h.prototype,
          "clickable",
          void 0
        ),
        (h = m([(0, s.customElement)("wui-list-token")], h));
    },
    476811: (e) => {
      "use strict";
      e.s({}, 476811);
      var t = e.i(431006);
      e.i(561791);
      var n = e.i(645501),
        o = e.i(898287);
      e.i(203870);
      var i = e.i(961527);
      e.i(888956);
      var r = e.i(83728),
        a = e.i(39451),
        s = e.i(928951);
      function l() {
        let e = (0, t._)([
          "\n  :host {\n    display: block;\n    width: var(--local-width);\n    height: var(--local-height);\n    border-radius: var(--wui-border-radius-3xl);\n    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);\n    overflow: hidden;\n    position: relative;\n  }\n\n  :host([data-variant='generated']) {\n    --mixed-local-color-1: var(--local-color-1);\n    --mixed-local-color-2: var(--local-color-2);\n    --mixed-local-color-3: var(--local-color-3);\n    --mixed-local-color-4: var(--local-color-4);\n    --mixed-local-color-5: var(--local-color-5);\n  }\n\n  @supports (background: color-mix(in srgb, white 50%, black)) {\n    :host([data-variant='generated']) {\n      --mixed-local-color-1: color-mix(\n        in srgb,\n        var(--w3m-color-mix) var(--w3m-color-mix-strength),\n        var(--local-color-1)\n      );\n      --mixed-local-color-2: color-mix(\n        in srgb,\n        var(--w3m-color-mix) var(--w3m-color-mix-strength),\n        var(--local-color-2)\n      );\n      --mixed-local-color-3: color-mix(\n        in srgb,\n        var(--w3m-color-mix) var(--w3m-color-mix-strength),\n        var(--local-color-3)\n      );\n      --mixed-local-color-4: color-mix(\n        in srgb,\n        var(--w3m-color-mix) var(--w3m-color-mix-strength),\n        var(--local-color-4)\n      );\n      --mixed-local-color-5: color-mix(\n        in srgb,\n        var(--w3m-color-mix) var(--w3m-color-mix-strength),\n        var(--local-color-5)\n      );\n    }\n  }\n\n  :host([data-variant='generated']) {\n    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);\n    background: radial-gradient(\n      var(--local-radial-circle),\n      #fff 0.52%,\n      var(--mixed-local-color-5) 31.25%,\n      var(--mixed-local-color-3) 51.56%,\n      var(--mixed-local-color-2) 65.63%,\n      var(--mixed-local-color-1) 82.29%,\n      var(--mixed-local-color-4) 100%\n    );\n  }\n\n  :host([data-variant='default']) {\n    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);\n    background: radial-gradient(\n      75.29% 75.29% at 64.96% 24.36%,\n      #fff 0.52%,\n      #f5ccfc 31.25%,\n      #dba4f5 51.56%,\n      #9a8ee8 65.63%,\n      #6493da 82.29%,\n      #6ebdea 100%\n    );\n  }\n",
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      let c = (0, e.i(505625).css)(l());
      function u() {
        let e = (0, t._)(["", ""]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        let e = (0, t._)(["<wui-image src=", " alt=", "></wui-image>"]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      var p = function (e, t, n, o) {
        var i,
          r = arguments.length,
          a =
            r < 3
              ? t
              : null === o
              ? (o = Object.getOwnPropertyDescriptor(t, n))
              : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, o);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) &&
              (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
        return r > 3 && a && Object.defineProperty(t, n, a), a;
      };
      let m = class extends n.LitElement {
        render() {
          return (
            (this.style.cssText =
              "\n    --local-width: var(--wui-icon-box-size-"
                .concat(
                  this.size,
                  ");\n    --local-height: var(--wui-icon-box-size-"
                )
                .concat(this.size, ");\n    ")),
            (0, o.html)(u(), this.visualTemplate())
          );
        }
        visualTemplate() {
          if (this.imageSrc) {
            var e;
            return (
              (this.dataset.variant = "image"),
              (0, o.html)(
                d(),
                this.imageSrc,
                null != (e = this.alt) ? e : "avatar"
              )
            );
          }
          if (this.address) {
            this.dataset.variant = "generated";
            let e = a.UiHelperUtil.generateAvatarColors(this.address);
            return (this.style.cssText += "\n ".concat(e)), null;
          }
          return (this.dataset.variant = "default"), null;
        }
        constructor() {
          super(...arguments),
            (this.imageSrc = void 0),
            (this.alt = void 0),
            (this.address = void 0),
            (this.size = "xl");
        }
      };
      (m.styles = [r.resetStyles, c]),
        p([(0, i.property)()], m.prototype, "imageSrc", void 0),
        p([(0, i.property)()], m.prototype, "alt", void 0),
        p([(0, i.property)()], m.prototype, "address", void 0),
        p([(0, i.property)()], m.prototype, "size", void 0),
        (m = p([(0, s.customElement)("wui-avatar")], m));
    },
    228715: [
      (e) => {
        "use strict";
        e.s({ SwapController: () => S }, 228715);
        var t = e.i(724233),
          n = e.i(873206),
          o = e.i(976065),
          i = e.i(850524),
          r = e.i(664572),
          a = e.i(600711),
          s = e.i(864510),
          l = e.i(940462),
          c = e.i(775078),
          u = e.i(422765);
        let d = {
          getGasPriceInEther: (e, t) => Number(t * e) / 1e18,
          getGasPriceInUSD(e, t, n) {
            let i = d.getGasPriceInEther(t, n);
            return o.NumberUtil.bigNumber(e).times(i).toNumber();
          },
          getPriceImpact(e) {
            let {
                sourceTokenAmount: t,
                sourceTokenPriceInUSD: n,
                toTokenPriceInUSD: i,
                toTokenAmount: r,
              } = e,
              a = o.NumberUtil.bigNumber(t).times(n),
              s = o.NumberUtil.bigNumber(r).times(i);
            return a.minus(s).div(a).times(100).toNumber();
          },
          getMaxSlippage(e, t) {
            let n = o.NumberUtil.bigNumber(e).div(100);
            return o.NumberUtil.multiply(t, n).toNumber();
          },
          getProviderFee(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0.0085;
            return o.NumberUtil.bigNumber(e).times(t).toString();
          },
          isInsufficientNetworkTokenForGas: (e, t) =>
            !!o.NumberUtil.bigNumber(e).eq(0) ||
            o.NumberUtil.bigNumber(o.NumberUtil.bigNumber(t || "0")).gt(e),
          isInsufficientSourceTokenForSwap(e, t, n) {
            var i, r;
            let a =
              null == n ||
              null == (r = n.find((e) => e.address === t)) ||
              null == (i = r.quantity)
                ? void 0
                : i.numeric;
            return o.NumberUtil.bigNumber(a || "0").lt(e);
          },
          getToTokenAmount(e) {
            let {
              sourceToken: t,
              toToken: n,
              sourceTokenPrice: i,
              toTokenPrice: r,
              sourceTokenAmount: a,
            } = e;
            if ("0" === a || !t || !n) return "0";
            let s = t.decimals,
              l = n.decimals;
            if (r <= 0) return "0";
            let c = o.NumberUtil.bigNumber(a).times(0.0085),
              u = o.NumberUtil.bigNumber(a)
                .minus(c)
                .times(o.NumberUtil.bigNumber(10).pow(s)),
              d = o.NumberUtil.bigNumber(i).div(r),
              p = s - l;
            return u
              .times(d)
              .div(o.NumberUtil.bigNumber(10).pow(p))
              .div(o.NumberUtil.bigNumber(10).pow(l))
              .toFixed(l)
              .toString();
          },
        };
        var p = e.i(317687),
          m = e.i(868263),
          h = e.i(830607),
          v = e.i(834245),
          g = e.i(17038),
          k = e.i(659863),
          w = e.i(936598),
          b = e.i(962949),
          f = e.i(981824),
          T = e.i(663296);
        let y = {
            initializing: !1,
            initialized: !1,
            loadingPrices: !1,
            loadingQuote: !1,
            loadingApprovalTransaction: !1,
            loadingBuildTransaction: !1,
            loadingTransaction: !1,
            fetchError: !1,
            approvalTransaction: void 0,
            swapTransaction: void 0,
            transactionError: void 0,
            sourceToken: void 0,
            sourceTokenAmount: "",
            sourceTokenPriceInUSD: 0,
            toToken: void 0,
            toTokenAmount: "",
            toTokenPriceInUSD: 0,
            networkPrice: "0",
            networkBalanceInUSD: "0",
            networkTokenSymbol: "",
            inputError: void 0,
            slippage: l.ConstantsUtil.CONVERT_SLIPPAGE_TOLERANCE,
            tokens: void 0,
            popularTokens: void 0,
            suggestedTokens: void 0,
            foundTokens: void 0,
            myTokensWithBalance: void 0,
            tokensPriceMap: {},
            gasFee: "0",
            gasPriceInUSD: 0,
            priceImpact: void 0,
            maxSlippage: void 0,
            providerFee: void 0,
          },
          P = (0, t.proxy)(y),
          x = {
            state: P,
            subscribe: (e) => (0, t.subscribe)(P, () => e(P)),
            subscribeKey: (e, t) => (0, n.subscribeKey)(P, e, t),
            getParams() {
              var e, t, n, r, a, l, u, d;
              let p = g.ChainController.state.activeCaipAddress,
                m = c.CoreHelperUtil.getPlainAddress(p),
                h = (0, s.getActiveNetworkTokenAddress)(),
                v = w.ConnectorController.getConnectorId(
                  g.ChainController.state.activeChain
                );
              if (!m) throw Error("No address found to swap the tokens from.");
              let k =
                  !(null == (e = P.toToken) ? void 0 : e.address) ||
                  !(null == (t = P.toToken) ? void 0 : t.decimals),
                b =
                  !(null == (n = P.sourceToken) ? void 0 : n.address) ||
                  !(null == (r = P.sourceToken) ? void 0 : r.decimals) ||
                  !o.NumberUtil.bigNumber(P.sourceTokenAmount).gt(0),
                f = !P.sourceTokenAmount;
              return {
                networkAddress: h,
                fromAddress: m,
                fromCaipAddress: p,
                sourceTokenAddress:
                  null == (a = P.sourceToken) ? void 0 : a.address,
                toTokenAddress: null == (l = P.toToken) ? void 0 : l.address,
                toTokenAmount: P.toTokenAmount,
                toTokenDecimals: null == (u = P.toToken) ? void 0 : u.decimals,
                sourceTokenAmount: P.sourceTokenAmount,
                sourceTokenDecimals:
                  null == (d = P.sourceToken) ? void 0 : d.decimals,
                invalidToToken: k,
                invalidSourceToken: b,
                invalidSourceTokenAmount: f,
                availableToSwap: p && !k && !b && !f,
                isAuthConnector: v === i.ConstantsUtil.CONNECTOR_ID.AUTH,
              };
            },
            setSourceToken(e) {
              if (!e) {
                (P.sourceToken = e),
                  (P.sourceTokenAmount = ""),
                  (P.sourceTokenPriceInUSD = 0);
                return;
              }
              (P.sourceToken = e), S.setTokenPrice(e.address, "sourceToken");
            },
            setSourceTokenAmount(e) {
              P.sourceTokenAmount = e;
            },
            setToToken(e) {
              if (!e) {
                (P.toToken = e),
                  (P.toTokenAmount = ""),
                  (P.toTokenPriceInUSD = 0);
                return;
              }
              (P.toToken = e), S.setTokenPrice(e.address, "toToken");
            },
            setToTokenAmount(e) {
              P.toTokenAmount = e
                ? o.NumberUtil.formatNumberToLocalString(e, 6)
                : "";
            },
            async setTokenPrice(e, t) {
              let n = P.tokensPriceMap[e] || 0;
              n || ((P.loadingPrices = !0), (n = await S.getAddressPrice(e))),
                "sourceToken" === t
                  ? (P.sourceTokenPriceInUSD = n)
                  : "toToken" === t && (P.toTokenPriceInUSD = n),
                P.loadingPrices && (P.loadingPrices = !1),
                S.getParams().availableToSwap && S.swapTokens();
            },
            switchTokens() {
              if (P.initializing || !P.initialized) return;
              let e = P.toToken ? { ...P.toToken } : void 0,
                t = P.sourceToken ? { ...P.sourceToken } : void 0,
                n = e && "" === P.toTokenAmount ? "1" : P.toTokenAmount;
              S.setSourceToken(e),
                S.setToToken(t),
                S.setSourceTokenAmount(n),
                S.setToTokenAmount(""),
                S.swapTokens();
            },
            resetState() {
              (P.myTokensWithBalance = y.myTokensWithBalance),
                (P.tokensPriceMap = y.tokensPriceMap),
                (P.initialized = y.initialized),
                (P.sourceToken = y.sourceToken),
                (P.sourceTokenAmount = y.sourceTokenAmount),
                (P.sourceTokenPriceInUSD = y.sourceTokenPriceInUSD),
                (P.toToken = y.toToken),
                (P.toTokenAmount = y.toTokenAmount),
                (P.toTokenPriceInUSD = y.toTokenPriceInUSD),
                (P.networkPrice = y.networkPrice),
                (P.networkTokenSymbol = y.networkTokenSymbol),
                (P.networkBalanceInUSD = y.networkBalanceInUSD),
                (P.inputError = y.inputError),
                (P.myTokensWithBalance = y.myTokensWithBalance);
            },
            resetValues() {
              var e;
              let { networkAddress: t } = S.getParams(),
                n =
                  null == (e = P.tokens)
                    ? void 0
                    : e.find((e) => e.address === t);
              S.setSourceToken(n), S.setToToken(void 0);
            },
            getApprovalLoadingState: () => P.loadingApprovalTransaction,
            clearError() {
              P.transactionError = void 0;
            },
            async initializeState() {
              if (!P.initializing) {
                if (((P.initializing = !0), !P.initialized))
                  try {
                    await S.fetchTokens(), (P.initialized = !0);
                  } catch (e) {
                    (P.initialized = !1),
                      T.SnackController.showError("Failed to initialize swap"),
                      f.RouterController.goBack();
                  }
                P.initializing = !1;
              }
            },
            async fetchTokens() {
              var e;
              let { networkAddress: t } = S.getParams();
              await S.getTokenList(),
                await S.getNetworkTokenPrice(),
                await S.getMyTokensWithBalance();
              let n =
                null == (e = P.tokens)
                  ? void 0
                  : e.find((e) => e.address === t);
              n &&
                ((P.networkTokenSymbol = n.symbol),
                S.setSourceToken(n),
                S.setSourceTokenAmount("1"));
            },
            async getTokenList() {
              let e = await u.SwapApiUtil.getTokenList();
              (P.tokens = e),
                (P.popularTokens = e.sort((e, t) =>
                  e.symbol < t.symbol ? -1 : +(e.symbol > t.symbol)
                )),
                (P.suggestedTokens = e.filter(
                  (e) =>
                    !!l.ConstantsUtil.SWAP_SUGGESTED_TOKENS.includes(e.symbol),
                  {}
                ));
            },
            async getAddressPrice(e) {
              var t, n;
              let o = P.tokensPriceMap[e];
              if (o) return o;
              let i = await v.BlockchainApiController.fetchTokenPrice({
                  addresses: [e],
                }),
                r = (null == i ? void 0 : i.fungibles) || [],
                a = [...(P.tokens || []), ...(P.myTokensWithBalance || [])],
                s =
                  null == a || null == (t = a.find((t) => t.address === e))
                    ? void 0
                    : t.symbol,
                l = parseFloat(
                  (
                    (null ==
                    (n = r.find(
                      (e) =>
                        e.symbol.toLowerCase() ===
                        (null == s ? void 0 : s.toLowerCase())
                    ))
                      ? void 0
                      : n.price) || 0
                  ).toString()
                );
              return (P.tokensPriceMap[e] = l), l;
            },
            async getNetworkTokenPrice() {
              var e;
              let { networkAddress: t } = S.getParams(),
                n =
                  null ==
                  (e = (
                    await v.BlockchainApiController.fetchTokenPrice({
                      addresses: [t],
                    }).catch(
                      () => (
                        T.SnackController.showError(
                          "Failed to fetch network token price"
                        ),
                        { fungibles: [] }
                      )
                    )
                  ).fungibles)
                    ? void 0
                    : e[0],
                o = (null == n ? void 0 : n.price.toString()) || "0";
              (P.tokensPriceMap[t] = parseFloat(o)),
                (P.networkTokenSymbol = (null == n ? void 0 : n.symbol) || ""),
                (P.networkPrice = o);
            },
            async getMyTokensWithBalance(e) {
              let t = await a.BalanceUtil.getMyTokensWithBalance(e),
                n = u.SwapApiUtil.mapBalancesToSwapTokens(t);
              n && (await S.getInitialGasPrice(), S.setBalances(n));
            },
            setBalances(e) {
              let { networkAddress: t } = S.getParams(),
                n = g.ChainController.state.activeCaipNetwork;
              if (!n) return;
              let i = e.find((e) => e.address === t);
              e.forEach((e) => {
                P.tokensPriceMap[e.address] = e.price || 0;
              }),
                (P.myTokensWithBalance = e.filter((e) =>
                  e.address.startsWith(n.caipNetworkId)
                )),
                (P.networkBalanceInUSD = i
                  ? o.NumberUtil.multiply(
                      i.quantity.numeric,
                      i.price
                    ).toString()
                  : "0");
            },
            async getInitialGasPrice() {
              var e, t, n, r;
              let a = await u.SwapApiUtil.fetchGasPrice();
              if (!a) return { gasPrice: null, gasPriceInUSD: null };
              switch (
                null == (t = g.ChainController.state) ||
                null == (e = t.activeCaipNetwork)
                  ? void 0
                  : e.chainNamespace
              ) {
                case i.ConstantsUtil.CHAIN.SOLANA:
                  return (
                    (P.gasFee = null != (n = a.standard) ? n : "0"),
                    (P.gasPriceInUSD = o.NumberUtil.multiply(
                      a.standard,
                      P.networkPrice
                    )
                      .div(1e9)
                      .toNumber()),
                    {
                      gasPrice: BigInt(P.gasFee),
                      gasPriceInUSD: Number(P.gasPriceInUSD),
                    }
                  );
                case i.ConstantsUtil.CHAIN.EVM:
                default:
                  let s = null != (r = a.standard) ? r : "0",
                    l = BigInt(s),
                    c = BigInt(15e4),
                    p = d.getGasPriceInUSD(P.networkPrice, c, l);
                  return (
                    (P.gasFee = s),
                    (P.gasPriceInUSD = p),
                    { gasPrice: l, gasPriceInUSD: p }
                  );
              }
            },
            async swapTokens() {
              let e = m.AccountController.state.address,
                t = P.sourceToken,
                n = P.toToken,
                i = o.NumberUtil.bigNumber(P.sourceTokenAmount).gt(0);
              if (
                (i || S.setToTokenAmount(""), !n || !t || P.loadingPrices || !i)
              )
                return;
              P.loadingQuote = !0;
              let r = o.NumberUtil.bigNumber(P.sourceTokenAmount)
                .times(10 ** t.decimals)
                .round(0);
              try {
                var a, s;
                let i = await v.BlockchainApiController.fetchSwapQuote({
                  userAddress: e,
                  from: t.address,
                  to: n.address,
                  gasPrice: P.gasFee,
                  amount: r.toString(),
                });
                P.loadingQuote = !1;
                let l =
                  null == i || null == (s = i.quotes) || null == (a = s[0])
                    ? void 0
                    : a.toAmount;
                if (!l)
                  return void h.AlertController.open(
                    {
                      shortMessage: "Incorrect amount",
                      longMessage: "Please enter a valid amount",
                    },
                    "error"
                  );
                let c = o.NumberUtil.bigNumber(l)
                  .div(10 ** n.decimals)
                  .toString();
                S.setToTokenAmount(c),
                  S.hasInsufficientToken(P.sourceTokenAmount, t.address)
                    ? (P.inputError = "Insufficient balance")
                    : ((P.inputError = void 0), S.setTransactionDetails());
              } catch (e) {
                (P.loadingQuote = !1), (P.inputError = "Insufficient balance");
              }
            },
            async getTransaction() {
              let { fromCaipAddress: e, availableToSwap: t } = S.getParams(),
                n = P.sourceToken,
                o = P.toToken;
              if (e && t && n && o && !P.loadingQuote)
                try {
                  let t;
                  return (
                    (P.loadingBuildTransaction = !0),
                    (t = (await u.SwapApiUtil.fetchSwapAllowance({
                      userAddress: e,
                      tokenAddress: n.address,
                      sourceTokenAmount: P.sourceTokenAmount,
                      sourceTokenDecimals: n.decimals,
                    }))
                      ? await S.createSwapTransaction()
                      : await S.createAllowanceTransaction()),
                    (P.loadingBuildTransaction = !1),
                    (P.fetchError = !1),
                    t
                  );
                } catch (e) {
                  f.RouterController.goBack(),
                    T.SnackController.showError("Failed to check allowance"),
                    (P.loadingBuildTransaction = !1),
                    (P.approvalTransaction = void 0),
                    (P.swapTransaction = void 0),
                    (P.fetchError = !0);
                  return;
                }
            },
            async createAllowanceTransaction() {
              let {
                fromCaipAddress: e,
                sourceTokenAddress: t,
                toTokenAddress: n,
              } = S.getParams();
              if (e && n) {
                if (!t)
                  throw Error(
                    "createAllowanceTransaction - No source token address found."
                  );
                try {
                  let o =
                      await v.BlockchainApiController.generateApproveCalldata({
                        from: t,
                        to: n,
                        userAddress: e,
                      }),
                    i = c.CoreHelperUtil.getPlainAddress(o.tx.from);
                  if (!i)
                    throw Error(
                      "SwapController:createAllowanceTransaction - address is required"
                    );
                  let r = {
                    data: o.tx.data,
                    to: i,
                    gasPrice: BigInt(o.tx.eip155.gasPrice),
                    value: BigInt(o.tx.value),
                    toAmount: P.toTokenAmount,
                  };
                  return (
                    (P.swapTransaction = void 0),
                    (P.approvalTransaction = {
                      data: r.data,
                      to: r.to,
                      gasPrice: r.gasPrice,
                      value: r.value,
                      toAmount: r.toAmount,
                    }),
                    {
                      data: r.data,
                      to: r.to,
                      gasPrice: r.gasPrice,
                      value: r.value,
                      toAmount: r.toAmount,
                    }
                  );
                } catch (e) {
                  f.RouterController.goBack(),
                    T.SnackController.showError(
                      "Failed to create approval transaction"
                    ),
                    (P.approvalTransaction = void 0),
                    (P.swapTransaction = void 0),
                    (P.fetchError = !0);
                  return;
                }
              }
            },
            async createSwapTransaction() {
              var e;
              let {
                  networkAddress: t,
                  fromCaipAddress: n,
                  sourceTokenAmount: o,
                } = S.getParams(),
                i = P.sourceToken,
                r = P.toToken;
              if (!n || !o || !i || !r) return;
              let a =
                null == (e = k.ConnectionController.parseUnits(o, i.decimals))
                  ? void 0
                  : e.toString();
              try {
                let e = await v.BlockchainApiController.generateSwapCalldata({
                    userAddress: n,
                    from: i.address,
                    to: r.address,
                    amount: a,
                    disableEstimate: !0,
                  }),
                  o = i.address === t,
                  s = BigInt(e.tx.eip155.gas),
                  l = BigInt(e.tx.eip155.gasPrice),
                  u = c.CoreHelperUtil.getPlainAddress(e.tx.to);
                if (!u)
                  throw Error(
                    "SwapController:createSwapTransaction - address is required"
                  );
                let p = {
                  data: e.tx.data,
                  to: u,
                  gas: s,
                  gasPrice: l,
                  value: o ? BigInt(null != a ? a : "0") : BigInt("0"),
                  toAmount: P.toTokenAmount,
                };
                return (
                  (P.gasPriceInUSD = d.getGasPriceInUSD(P.networkPrice, s, l)),
                  (P.approvalTransaction = void 0),
                  (P.swapTransaction = p),
                  p
                );
              } catch (e) {
                f.RouterController.goBack(),
                  T.SnackController.showError("Failed to create transaction"),
                  (P.approvalTransaction = void 0),
                  (P.swapTransaction = void 0),
                  (P.fetchError = !0);
                return;
              }
            },
            onEmbeddedWalletApprovalSuccess() {
              T.SnackController.showLoading(
                "Approve limit increase in your wallet"
              ),
                f.RouterController.replace("SwapPreview");
            },
            async sendTransactionForApproval(e) {
              let { fromAddress: t, isAuthConnector: n } = S.getParams();
              (P.loadingApprovalTransaction = !0),
                n
                  ? f.RouterController.pushTransactionStack({
                      onSuccess: S.onEmbeddedWalletApprovalSuccess,
                    })
                  : T.SnackController.showLoading(
                      "Approve limit increase in your wallet"
                    );
              try {
                await k.ConnectionController.sendTransaction({
                  address: t,
                  to: e.to,
                  data: e.data,
                  value: e.value,
                  chainNamespace: i.ConstantsUtil.CHAIN.EVM,
                }),
                  await S.swapTokens(),
                  await S.getTransaction(),
                  (P.approvalTransaction = void 0),
                  (P.loadingApprovalTransaction = !1);
              } catch (e) {
                var o, a, l;
                (P.transactionError = null == e ? void 0 : e.shortMessage),
                  (P.loadingApprovalTransaction = !1),
                  T.SnackController.showError(
                    (null == e ? void 0 : e.shortMessage) || "Transaction error"
                  ),
                  b.EventsController.sendEvent({
                    type: "track",
                    event: "SWAP_APPROVAL_ERROR",
                    properties: {
                      message:
                        (null == e ? void 0 : e.shortMessage) ||
                        (null == e ? void 0 : e.message) ||
                        "Unknown",
                      network:
                        (null == (o = g.ChainController.state.activeCaipNetwork)
                          ? void 0
                          : o.caipNetworkId) || "",
                      swapFromToken:
                        (null == (a = S.state.sourceToken)
                          ? void 0
                          : a.symbol) || "",
                      swapToToken:
                        (null == (l = S.state.toToken) ? void 0 : l.symbol) ||
                        "",
                      swapFromAmount: S.state.sourceTokenAmount || "",
                      swapToAmount: S.state.toTokenAmount || "",
                      isSmartAccount:
                        (0, s.getPreferredAccountType)(
                          i.ConstantsUtil.CHAIN.EVM
                        ) ===
                        r.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                    },
                  });
              }
            },
            async sendTransactionForSwap(e) {
              var t, n, a, l, c, u, d, p, m, h, v, w;
              if (!e) return;
              let {
                fromAddress: y,
                toTokenAmount: A,
                isAuthConnector: C,
              } = S.getParams();
              P.loadingTransaction = !0;
              let j = "Swapping "
                  .concat(
                    null == (t = P.sourceToken) ? void 0 : t.symbol,
                    " to "
                  )
                  .concat(o.NumberUtil.formatNumberToLocalString(A, 3), " ")
                  .concat(null == (n = P.toToken) ? void 0 : n.symbol),
                N = "Swapped "
                  .concat(
                    null == (a = P.sourceToken) ? void 0 : a.symbol,
                    " to "
                  )
                  .concat(o.NumberUtil.formatNumberToLocalString(A, 3), " ")
                  .concat(null == (l = P.toToken) ? void 0 : l.symbol);
              C
                ? f.RouterController.pushTransactionStack({
                    onSuccess() {
                      f.RouterController.replace("Account"),
                        T.SnackController.showLoading(j),
                        x.resetState();
                    },
                  })
                : T.SnackController.showLoading(
                    "Confirm transaction in your wallet"
                  );
              try {
                let t = [
                    null == (c = P.sourceToken) ? void 0 : c.address,
                    null == (u = P.toToken) ? void 0 : u.address,
                  ].join(","),
                  n = await k.ConnectionController.sendTransaction({
                    address: y,
                    to: e.to,
                    data: e.data,
                    value: e.value,
                    chainNamespace: i.ConstantsUtil.CHAIN.EVM,
                  });
                return (
                  (P.loadingTransaction = !1),
                  T.SnackController.showSuccess(N),
                  b.EventsController.sendEvent({
                    type: "track",
                    event: "SWAP_SUCCESS",
                    properties: {
                      network:
                        (null == (d = g.ChainController.state.activeCaipNetwork)
                          ? void 0
                          : d.caipNetworkId) || "",
                      swapFromToken:
                        (null == (p = S.state.sourceToken)
                          ? void 0
                          : p.symbol) || "",
                      swapToToken:
                        (null == (m = S.state.toToken) ? void 0 : m.symbol) ||
                        "",
                      swapFromAmount: S.state.sourceTokenAmount || "",
                      swapToAmount: S.state.toTokenAmount || "",
                      isSmartAccount:
                        (0, s.getPreferredAccountType)(
                          i.ConstantsUtil.CHAIN.EVM
                        ) ===
                        r.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                    },
                  }),
                  x.resetState(),
                  C || f.RouterController.replace("Account"),
                  x.getMyTokensWithBalance(t),
                  n
                );
              } catch (e) {
                (P.transactionError = null == e ? void 0 : e.shortMessage),
                  (P.loadingTransaction = !1),
                  T.SnackController.showError(
                    (null == e ? void 0 : e.shortMessage) || "Transaction error"
                  ),
                  b.EventsController.sendEvent({
                    type: "track",
                    event: "SWAP_ERROR",
                    properties: {
                      message:
                        (null == e ? void 0 : e.shortMessage) ||
                        (null == e ? void 0 : e.message) ||
                        "Unknown",
                      network:
                        (null == (h = g.ChainController.state.activeCaipNetwork)
                          ? void 0
                          : h.caipNetworkId) || "",
                      swapFromToken:
                        (null == (v = S.state.sourceToken)
                          ? void 0
                          : v.symbol) || "",
                      swapToToken:
                        (null == (w = S.state.toToken) ? void 0 : w.symbol) ||
                        "",
                      swapFromAmount: S.state.sourceTokenAmount || "",
                      swapToAmount: S.state.toTokenAmount || "",
                      isSmartAccount:
                        (0, s.getPreferredAccountType)(
                          i.ConstantsUtil.CHAIN.EVM
                        ) ===
                        r.W3mFrameRpcConstants.ACCOUNT_TYPES.SMART_ACCOUNT,
                    },
                  });
                return;
              }
            },
            hasInsufficientToken: (e, t) =>
              d.isInsufficientSourceTokenForSwap(e, t, P.myTokensWithBalance),
            setTransactionDetails() {
              let { toTokenAddress: e, toTokenDecimals: t } = S.getParams();
              e &&
                t &&
                ((P.gasPriceInUSD = d.getGasPriceInUSD(
                  P.networkPrice,
                  BigInt(P.gasFee),
                  BigInt(15e4)
                )),
                (P.priceImpact = d.getPriceImpact({
                  sourceTokenAmount: P.sourceTokenAmount,
                  sourceTokenPriceInUSD: P.sourceTokenPriceInUSD,
                  toTokenPriceInUSD: P.toTokenPriceInUSD,
                  toTokenAmount: P.toTokenAmount,
                })),
                (P.maxSlippage = d.getMaxSlippage(P.slippage, P.toTokenAmount)),
                (P.providerFee = d.getProviderFee(P.sourceTokenAmount)));
            },
          },
          S = (0, p.withErrorBoundary)(x);
        e.s({}, 94729);
        var A = e.i(431006);
        e.i(561791);
        var C = e.i(645501),
          j = e.i(898287);
        e.i(203870);
        var N = e.i(961527);
        e.i(888956), e.i(463617);
        var U = e.i(83728),
          I = e.i(928951);
        function E() {
          let e = (0, A._)([
            "\n  :host {\n    display: block;\n  }\n\n  :host > button {\n    gap: var(--wui-spacing-xxs);\n    padding: var(--wui-spacing-xs);\n    padding-right: var(--wui-spacing-1xs);\n    height: 40px;\n    border-radius: var(--wui-border-radius-l);\n    background: var(--wui-color-gray-glass-002);\n    border-width: 0px;\n    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);\n  }\n\n  :host > button wui-image {\n    width: 24px;\n    height: 24px;\n    border-radius: var(--wui-border-radius-s);\n    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);\n  }\n",
          ]);
          return (
            (E = function () {
              return e;
            }),
            e
          );
        }
        e.i(51422);
        let R = (0, e.i(505625).css)(E());
        function B() {
          let e = (0, A._)([
            "\n      <button>\n        ",
            '\n        <wui-text variant="paragraph-600" color="fg-100">',
            "</wui-text>\n      </button>\n    ",
          ]);
          return (
            (B = function () {
              return e;
            }),
            e
          );
        }
        function D() {
          let e = (0, A._)(["<wui-image src=", "></wui-image>"]);
          return (
            (D = function () {
              return e;
            }),
            e
          );
        }
        function z() {
          let e = (0, A._)([
            '\n      <wui-icon-box\n        size="sm"\n        iconColor="fg-200"\n        backgroundColor="fg-300"\n        icon="networkPlaceholder"\n      ></wui-icon-box>\n    ',
          ]);
          return (
            (z = function () {
              return e;
            }),
            e
          );
        }
        var O = function (e, t, n, o) {
          var i,
            r = arguments.length,
            a =
              r < 3
                ? t
                : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, n))
                : o;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, n, o);
          else
            for (var s = e.length - 1; s >= 0; s--)
              (i = e[s]) &&
                (a = (r < 3 ? i(a) : r > 3 ? i(t, n, a) : i(t, n)) || a);
          return r > 3 && a && Object.defineProperty(t, n, a), a;
        };
        let _ = class extends C.LitElement {
          render() {
            return (0, j.html)(B(), this.tokenTemplate(), this.text);
          }
          tokenTemplate() {
            return this.imageSrc
              ? (0, j.html)(D(), this.imageSrc)
              : (0, j.html)(z());
          }
          constructor() {
            super(...arguments), (this.text = "");
          }
        };
        (_.styles = [U.resetStyles, U.elementStyles, R]),
          O([(0, N.property)()], _.prototype, "imageSrc", void 0),
          O([(0, N.property)()], _.prototype, "text", void 0),
          (_ = O([(0, I.customElement)("wui-token-button")], _));
      },
      [94729],
    ],
    182940: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/39527ecb646ebfd6.js"].map((t) => e.l(t))
        ).then(() => t(552419))
      );
    },
    349839: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/f8c5abde559eabad.js"].map((t) => e.l(t))
        ).then(() => t(993374))
      );
    },
    789287: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/5ecdd0e262540573.js"].map((t) => e.l(t))
        ).then(() => t(677236))
      );
    },
    772611: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/6f2f0c85eb258282.js"].map((t) => e.l(t))
        ).then(() => t(625788))
      );
    },
    596469: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/5e76d4f106e90bf0.js"].map((t) => e.l(t))
        ).then(() => t(159077))
      );
    },
    357263: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/76cf5f4af08fccd2.js"].map((t) => e.l(t))
        ).then(() => t(309571))
      );
    },
    34539: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/384705b0d08bb362.js"].map((t) => e.l(t))
        ).then(() => t(725648))
      );
    },
    914916: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/8ee0a88148ebb456.js"].map((t) => e.l(t))
        ).then(() => t(717998))
      );
    },
    384907: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/289b4efeb8e9ee74.js"].map((t) => e.l(t))
        ).then(() => t(690496))
      );
    },
    989484: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/155742c236e7bf8b.js"].map((t) => e.l(t))
        ).then(() => t(226155))
      );
    },
    399025: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/264d0721c96982cc.js"].map((t) => e.l(t))
        ).then(() => t(532029))
      );
    },
    724885: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/b821456f579228b2.js"].map((t) => e.l(t))
        ).then(() => t(55943))
      );
    },
    570703: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/b1d98869207b2f94.js"].map((t) => e.l(t))
        ).then(() => t(107622))
      );
    },
    236292: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/d568d9fea10c3886.js"].map((t) => e.l(t))
        ).then(() => t(457477))
      );
    },
    315233: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/d95895c66c0fa908.js"].map((t) => e.l(t))
        ).then(() => t(206464))
      );
    },
    443202: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/18034ee291d3bdde.js"].map((t) => e.l(t))
        ).then(() => t(989197))
      );
    },
    805968: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/cb3c5c4e320f5675.js"].map((t) => e.l(t))
        ).then(() => t(986064))
      );
    },
    719855: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/2367fa80960c5127.js"].map((t) => e.l(t))
        ).then(() => t(697510))
      );
    },
    694281: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/571674570ae82092.js"].map((t) => e.l(t))
        ).then(() => t(410379))
      );
    },
    92534: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/f0f253f9b16f12cc.js"].map((t) => e.l(t))
        ).then(() => t(329429))
      );
    },
    785239: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/2dec2dc1ec01e40b.js"].map((t) => e.l(t))
        ).then(() => t(601338))
      );
    },
    967146: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/eb1e02daef677fa0.js"].map((t) => e.l(t))
        ).then(() => t(442084))
      );
    },
    627782: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/f25f3b4e3da23e3c.js"].map((t) => e.l(t))
        ).then(() => t(282711))
      );
    },
    566282: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/a3dea1acbdfc4d22.js"].map((t) => e.l(t))
        ).then(() => t(237780))
      );
    },
    22314: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/d569c819140e0372.js"].map((t) => e.l(t))
        ).then(() => t(114652))
      );
    },
    587107: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/f80e6d50452b09be.js"].map((t) => e.l(t))
        ).then(() => t(76643))
      );
    },
    179003: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/a651fdad02a29f51.js"].map((t) => e.l(t))
        ).then(() => t(63434))
      );
    },
    632596: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/a41bbd2359c578ae.js"].map((t) => e.l(t))
        ).then(() => t(824221))
      );
    },
    292348: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/db95f5377bf8c0c3.js"].map((t) => e.l(t))
        ).then(() => t(945193))
      );
    },
    180840: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/873303902704f45b.js"].map((t) => e.l(t))
        ).then(() => t(969699))
      );
    },
    68925: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/d239cf840cf7398d.js"].map((t) => e.l(t))
        ).then(() => t(581121))
      );
    },
    429078: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/7ffd59361c45fc30.js"].map((t) => e.l(t))
        ).then(() => t(752911))
      );
    },
    460441: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/a4b6c2db5b69cc11.js"].map((t) => e.l(t))
        ).then(() => t(3706))
      );
    },
    203683: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/37b3912f37b827ea.js"].map((t) => e.l(t))
        ).then(() => t(882504))
      );
    },
    2387: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/adff1e3e8d875033.js"].map((t) => e.l(t))
        ).then(() => t(265643))
      );
    },
    811064: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/7376f6140ea6c6c7.js"].map((t) => e.l(t))
        ).then(() => t(246131))
      );
    },
    259217: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/00678a8a64d04681.js"].map((t) => e.l(t))
        ).then(() => t(943571))
      );
    },
    690417: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/b9013d2d66f92c84.js"].map((t) => e.l(t))
        ).then(() => t(769076))
      );
    },
    784242: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/6a20274c9712f994.js"].map((t) => e.l(t))
        ).then(() => t(585493))
      );
    },
    803439: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/43e55c7d1dba2bd0.js"].map((t) => e.l(t))
        ).then(() => t(982696))
      );
    },
    790398: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/f95cdd71e334ff47.js"].map((t) => e.l(t))
        ).then(() => t(978517))
      );
    },
    31966: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/90212ae03f1caf1c.js"].map((t) => e.l(t))
        ).then(() => t(423813))
      );
    },
    124470: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/184c29e55d91154d.js"].map((t) => e.l(t))
        ).then(() => t(937046))
      );
    },
    396753: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/d76ef9f8e74033f7.js"].map((t) => e.l(t))
        ).then(() => t(378980))
      );
    },
    794264: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/efe2cdd356e76929.js"].map((t) => e.l(t))
        ).then(() => t(119891))
      );
    },
    888479: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/354f882de8eb6d22.js"].map((t) => e.l(t))
        ).then(() => t(498094))
      );
    },
    852820: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/e4fb48f2881e06c7.js"].map((t) => e.l(t))
        ).then(() => t(58056))
      );
    },
    686520: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/280dfe413d813202.js"].map((t) => e.l(t))
        ).then(() => t(837477))
      );
    },
    130569: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/09cc9d51c67f0265.js"].map((t) => e.l(t))
        ).then(() => t(838332))
      );
    },
    23453: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/cceb2f2e1dc6d4d9.js"].map((t) => e.l(t))
        ).then(() => t(810959))
      );
    },
    230824: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/2e6d26d4353787ec.js"].map((t) => e.l(t))
        ).then(() => t(627725))
      );
    },
    519147: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/448531ca6669d864.js"].map((t) => e.l(t))
        ).then(() => t(139295))
      );
    },
    924829: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/83a4c231ceb092cc.js"].map((t) => e.l(t))
        ).then(() => t(349834))
      );
    },
    308306: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/dc7602e045101b01.js"].map((t) => e.l(t))
        ).then(() => t(237349))
      );
    },
    70064: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/815e9f908e8d96b0.js"].map((t) => e.l(t))
        ).then(() => t(583645))
      );
    },
    548886: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/1c7311660ed56edf.js"].map((t) => e.l(t))
        ).then(() => t(886337))
      );
    },
    377276: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/cb30368c05b83a70.js"].map((t) => e.l(t))
        ).then(() => t(97078))
      );
    },
    825737: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/93909f8ec0baecd9.js"].map((t) => e.l(t))
        ).then(() => t(220413))
      );
    },
    930584: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/d279804822a87a9b.js"].map((t) => e.l(t))
        ).then(() => t(340151))
      );
    },
    173407: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/e98de7a3cb9bd1e6.js"].map((t) => e.l(t))
        ).then(() => t(989192))
      );
    },
    66767: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/edd0a488fe87ca92.js"].map((t) => e.l(t))
        ).then(() => t(207837))
      );
    },
    737839: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/4898018122be2e23.js"].map((t) => e.l(t))
        ).then(() => t(583183))
      );
    },
    733612: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/1541c35300ef774b.js"].map((t) => e.l(t))
        ).then(() => t(459476))
      );
    },
    594908: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/e35d1169cf9ed094.js"].map((t) => e.l(t))
        ).then(() => t(481426))
      );
    },
    77682: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/d262f94e675eba05.js"].map((t) => e.l(t))
        ).then(() => t(204260))
      );
    },
    928189: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/3691d58b9e1dd476.js"].map((t) => e.l(t))
        ).then(() => t(89907))
      );
    },
    239460: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/97ceebee27992729.js"].map((t) => e.l(t))
        ).then(() => t(739064))
      );
    },
    410556: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/b419545fafdd2f27.js"].map((t) => e.l(t))
        ).then(() => t(892647))
      );
    },
    452951: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/602be82f1342acee.js"].map((t) => e.l(t))
        ).then(() => t(965574))
      );
    },
    969279: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/d2d925036d0b2702.js"].map((t) => e.l(t))
        ).then(() => t(344807))
      );
    },
    542554: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/b6afc0df2f1d819b.js"].map((t) => e.l(t))
        ).then(() => t(670617))
      );
    },
    271944: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/086efa7e9388dbe9.js"].map((t) => e.l(t))
        ).then(() => t(831565))
      );
    },
    535373: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/d1576167018c7efe.js"].map((t) => e.l(t))
        ).then(() => t(775784))
      );
    },
    489973: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/3ecc3b5e55f012a2.js"].map((t) => e.l(t))
        ).then(() => t(831622))
      );
    },
    200638: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/ee3c60dcf5652dc2.js"].map((t) => e.l(t))
        ).then(() => t(353268))
      );
    },
    376798: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/1a258b8a2d3edbd3.js"].map((t) => e.l(t))
        ).then(() => t(397969))
      );
    },
    222770: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/44868f20b11a615c.js"].map((t) => e.l(t))
        ).then(() => t(219299))
      );
    },
    185661: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/2d24b13793a40d70.js"].map((t) => e.l(t))
        ).then(() => t(714415))
      );
    },
    937677: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/e463f880b63e992a.js"].map((t) => e.l(t))
        ).then(() => t(867199))
      );
    },
    820241: (e) => {
      e.v((t) =>
        Promise.all(
          ["static/chunks/679724c5fd9bfcef.js"].map((t) => e.l(t))
        ).then(() => t(398463))
      );
    },
  },
]);

//# sourceMappingURL=565c8615effc8907.js.map
