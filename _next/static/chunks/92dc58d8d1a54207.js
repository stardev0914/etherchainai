(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  "object" == typeof document ? document.currentScript : void 0,
  {
    349232: (e) => {
      "use strict";
      let t, i, s;
      e.s({ default: () => ef }, 349232);
      var r = e.i(731636),
        a = e.i(688814),
        l = e.i(838653);
      function n(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function o(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {});
        let i = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => 0 > i.indexOf(e))
          .forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : n(t[i]) &&
                n(e[i]) &&
                Object.keys(t[i]).length > 0 &&
                o(e[i], t[i]);
          });
      }
      let d = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function c() {
        let e = "undefined" != typeof document ? document : {};
        return o(e, d), e;
      }
      let p = {
        document: d,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function u() {
        let e = "undefined" != typeof window ? window : {};
        return o(e, p), e;
      }
      function h(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function m() {
        return Date.now();
      }
      function f(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function g() {
        let e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < arguments.length; i += 1) {
          let s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          if (
            null != s &&
            ("undefined" != typeof window && void 0 !== window.HTMLElement
              ? !(s instanceof HTMLElement)
              : !s || (1 !== s.nodeType && 11 !== s.nodeType))
          ) {
            let i = Object.keys(Object(s)).filter((e) => 0 > t.indexOf(e));
            for (let t = 0, r = i.length; t < r; t += 1) {
              let r = i[t],
                a = Object.getOwnPropertyDescriptor(s, r);
              void 0 !== a &&
                a.enumerable &&
                (f(e[r]) && f(s[r])
                  ? s[r].__swiper__
                    ? (e[r] = s[r])
                    : g(e[r], s[r])
                  : !f(e[r]) && f(s[r])
                  ? ((e[r] = {}),
                    s[r].__swiper__ ? (e[r] = s[r]) : g(e[r], s[r]))
                  : (e[r] = s[r]));
            }
          }
        }
        return e;
      }
      function v(e, t, i) {
        e.style.setProperty(t, i);
      }
      function w(e) {
        let t,
          { swiper: i, targetPosition: s, side: r } = e,
          a = u(),
          l = -i.translate,
          n = null,
          o = i.params.speed;
        (i.wrapperEl.style.scrollSnapType = "none"),
          a.cancelAnimationFrame(i.cssModeFrameID);
        let d = s > l ? "next" : "prev",
          c = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
          p = () => {
            (t = new Date().getTime()), null === n && (n = t);
            let e =
              l +
              (0.5 -
                Math.cos(Math.max(Math.min((t - n) / o, 1), 0) * Math.PI) / 2) *
                (s - l);
            if (
              (c(e, s) && (e = s), i.wrapperEl.scrollTo({ [r]: e }), c(e, s))
            ) {
              (i.wrapperEl.style.overflow = "hidden"),
                (i.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (i.wrapperEl.style.overflow = ""),
                    i.wrapperEl.scrollTo({ [r]: e });
                }),
                a.cancelAnimationFrame(i.cssModeFrameID);
              return;
            }
            i.cssModeFrameID = a.requestAnimationFrame(p);
          };
        p();
      }
      function b(e, t) {
        void 0 === t && (t = "");
        let i = u(),
          s = [...e.children];
        return (i.HTMLSlotElement &&
          e instanceof HTMLSlotElement &&
          s.push(...e.assignedElements()),
        t)
          ? s.filter((e) => e.matches(t))
          : s;
      }
      function y(e) {
        try {
          console.warn(e);
          return;
        } catch (e) {}
      }
      function x(e, t) {
        var i;
        void 0 === t && (t = []);
        let s = document.createElement(e);
        return (
          s.classList.add(
            ...(Array.isArray(t)
              ? t
              : (void 0 === (i = t) && (i = ""),
                i
                  .trim()
                  .split(" ")
                  .filter((e) => !!e.trim())))
          ),
          s
        );
      }
      function S(e, t) {
        return u().getComputedStyle(e, null).getPropertyValue(t);
      }
      function T(e) {
        let t,
          i = e;
        if (i) {
          for (t = 0; null !== (i = i.previousSibling); )
            1 === i.nodeType && (t += 1);
          return t;
        }
      }
      function E(e, t) {
        let i = [],
          s = e.parentElement;
        for (; s; )
          t ? s.matches(t) && i.push(s) : i.push(s), (s = s.parentElement);
        return i;
      }
      function C(e, t, i) {
        let s = u();
        return i
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                s
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-right" : "margin-top"
                  )
              ) +
              parseFloat(
                s
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-left" : "margin-bottom"
                  )
              )
          : e.offsetWidth;
      }
      function M(e) {
        return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      }
      function P(e, t) {
        void 0 === t && (t = ""),
          "undefined" != typeof trustedTypes
            ? (e.innerHTML = trustedTypes
                .createPolicy("html", { createHTML: (e) => e })
                .createHTML(t))
            : (e.innerHTML = t);
      }
      function k() {
        return (
          t ||
            (t = (function () {
              let e = u(),
                t = c();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              };
            })()),
          t
        );
      }
      function L(e) {
        return (
          void 0 === e && (e = {}),
          i ||
            (i = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e,
                i = k(),
                s = u(),
                r = s.navigator.platform,
                a = t || s.navigator.userAgent,
                l = { ios: !1, android: !1 },
                n = s.screen.width,
                o = s.screen.height,
                d = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                c = a.match(/(iPad).*OS\s([\d_]+)/),
                p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                h = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                m = "MacIntel" === r;
              return (
                !c &&
                  m &&
                  i.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf("".concat(n, "x").concat(o)) >= 0 &&
                  ((c = a.match(/(Version)\/([\d.]+)/)) ||
                    (c = [0, 1, "13_0_0"]),
                  (m = !1)),
                d && "Win32" !== r && ((l.os = "android"), (l.android = !0)),
                (c || h || p) && ((l.os = "ios"), (l.ios = !0)),
                l
              );
            })(e)),
          i
        );
      }
      function O() {
        return (
          s ||
            (s = (function () {
              let e = u(),
                t = L(),
                i = !1;
              function s() {
                let t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  0 > t.indexOf("chrome") &&
                  0 > t.indexOf("android")
                );
              }
              if (s()) {
                let t = String(e.navigator.userAgent);
                if (t.includes("Version/")) {
                  let [e, s] = t
                    .split("Version/")[1]
                    .split(" ")[0]
                    .split(".")
                    .map((e) => Number(e));
                  i = e < 16 || (16 === e && s < 2);
                }
              }
              let r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
                a = s(),
                l = a || (r && t.ios);
              return {
                isSafari: i || a,
                needPerspectiveFix: i,
                need3dFix: l,
                isWebView: r,
              };
            })()),
          s
        );
      }
      let A = (e, t, i) => {
          t && !e.classList.contains(i)
            ? e.classList.add(i)
            : !t && e.classList.contains(i) && e.classList.remove(i);
        },
        I = (e, t, i) => {
          t && !e.classList.contains(i)
            ? e.classList.add(i)
            : !t && e.classList.contains(i) && e.classList.remove(i);
        },
        z = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          let i = t.closest(
            e.isElement ? "swiper-slide" : ".".concat(e.params.slideClass)
          );
          if (i) {
            let t = i.querySelector(".".concat(e.params.lazyPreloaderClass));
            !t &&
              e.isElement &&
              (i.shadowRoot
                ? (t = i.shadowRoot.querySelector(
                    ".".concat(e.params.lazyPreloaderClass)
                  ))
                : requestAnimationFrame(() => {
                    i.shadowRoot &&
                      (t = i.shadowRoot.querySelector(
                        ".".concat(e.params.lazyPreloaderClass)
                      )) &&
                      t.remove();
                  })),
              t && t.remove();
          }
        },
        _ = (e, t) => {
          if (!e.slides[t]) return;
          let i = e.slides[t].querySelector('[loading="lazy"]');
          i && i.removeAttribute("loading");
        },
        j = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext,
            i = e.slides.length;
          if (!i || !t || t < 0) return;
          t = Math.min(t, i);
          let s =
              "auto" === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            r = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            let i = [r - t];
            i.push(...Array.from({ length: t }).map((e, t) => r + s + t)),
              e.slides.forEach((t, s) => {
                i.includes(t.column) && _(e, s);
              });
            return;
          }
          let a = r + s - 1;
          if (e.params.rewind || e.params.loop)
            for (let s = r - t; s <= a + t; s += 1) {
              let t = ((s % i) + i) % i;
              (t < r || t > a) && _(e, t);
            }
          else
            for (
              let s = Math.max(r - t, 0);
              s <= Math.min(a + t, i - 1);
              s += 1
            )
              s !== r && (s > a || s < r) && _(e, s);
        };
      function N(e) {
        let { swiper: t, runCallbacks: i, direction: s, step: r } = e,
          { activeIndex: a, previousIndex: l } = t,
          n = s;
        n || (n = a > l ? "next" : a < l ? "prev" : "reset"),
          t.emit("transition".concat(r)),
          i && "reset" === n
            ? t.emit("slideResetTransition".concat(r))
            : i &&
              a !== l &&
              (t.emit("slideChangeTransition".concat(r)),
              "next" === n
                ? t.emit("slideNextTransition".concat(r))
                : t.emit("slidePrevTransition".concat(r)));
      }
      function D(e, t, i) {
        let s = u(),
          { params: r } = e,
          a = r.edgeSwipeDetection,
          l = r.edgeSwipeThreshold;
        return (
          !a ||
          (!(i <= l) && !(i >= s.innerWidth - l)) ||
          ("prevent" === a && (t.preventDefault(), !0))
        );
      }
      function B(e) {
        let t = c(),
          i = e;
        i.originalEvent && (i = i.originalEvent);
        let s = this.touchEventsData;
        if ("pointerdown" === i.type) {
          if (null !== s.pointerId && s.pointerId !== i.pointerId) return;
          s.pointerId = i.pointerId;
        } else
          "touchstart" === i.type &&
            1 === i.targetTouches.length &&
            (s.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type)
          return void D(this, i, i.targetTouches[0].pageX);
        let { params: r, touches: a, enabled: l } = this;
        if (
          !l ||
          (!r.simulateTouch && "mouse" === i.pointerType) ||
          (this.animating && r.preventInteractionOnTransition)
        )
          return;
        !this.animating && r.cssMode && r.loop && this.loopFix();
        let n = i.target;
        if (
          ("wrapper" === r.touchEventsTarget &&
            !(function (e, t) {
              let i = u(),
                s = t.contains(e);
              return (
                !s &&
                  i.HTMLSlotElement &&
                  t instanceof HTMLSlotElement &&
                  ((s = [...t.assignedElements()].includes(e)) ||
                    (s = (function (e, t) {
                      let i = [t];
                      for (; i.length > 0; ) {
                        let t = i.shift();
                        if (e === t) return !0;
                        i.push(
                          ...t.children,
                          ...(t.shadowRoot ? t.shadowRoot.children : []),
                          ...(t.assignedElements ? t.assignedElements() : [])
                        );
                      }
                    })(e, t))),
                s
              );
            })(n, this.wrapperEl)) ||
          ("which" in i && 3 === i.which) ||
          ("button" in i && i.button > 0) ||
          (s.isTouched && s.isMoved)
        )
          return;
        let o = !!r.noSwipingClass && "" !== r.noSwipingClass,
          d = i.composedPath ? i.composedPath() : i.path;
        o && i.target && i.target.shadowRoot && d && (n = d[0]);
        let p = r.noSwipingSelector
            ? r.noSwipingSelector
            : ".".concat(r.noSwipingClass),
          h = !!(i.target && i.target.shadowRoot);
        if (
          r.noSwiping &&
          (h
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(i) {
                    if (!i || i === c() || i === u()) return null;
                    i.assignedSlot && (i = i.assignedSlot);
                    let s = i.closest(e);
                    return s || i.getRootNode
                      ? s || t(i.getRootNode().host)
                      : null;
                  })(t)
                );
              })(p, n)
            : n.closest(p))
        ) {
          this.allowClick = !0;
          return;
        }
        if (r.swipeHandler && !n.closest(r.swipeHandler)) return;
        (a.currentX = i.pageX), (a.currentY = i.pageY);
        let f = a.currentX,
          g = a.currentY;
        if (!D(this, i, f)) return;
        Object.assign(s, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (a.startX = f),
          (a.startY = g),
          (s.touchStartTime = m()),
          (this.allowClick = !0),
          this.updateSize(),
          (this.swipeDirection = void 0),
          r.threshold > 0 && (s.allowThresholdMove = !1);
        let v = !0;
        n.matches(s.focusableElements) &&
          ((v = !1), "SELECT" === n.nodeName && (s.isTouched = !1)),
          t.activeElement &&
            t.activeElement.matches(s.focusableElements) &&
            t.activeElement !== n &&
            ("mouse" === i.pointerType ||
              ("mouse" !== i.pointerType && !n.matches(s.focusableElements))) &&
            t.activeElement.blur();
        let w = v && this.allowTouchMove && r.touchStartPreventDefault;
        (r.touchStartForcePreventDefault || w) &&
          !n.isContentEditable &&
          i.preventDefault(),
          r.freeMode &&
            r.freeMode.enabled &&
            this.freeMode &&
            this.animating &&
            !r.cssMode &&
            this.freeMode.onTouchStart(),
          this.emit("touchStart", i);
      }
      function G(e) {
        let t,
          i,
          s = c(),
          r = this.touchEventsData,
          { params: a, touches: l, rtlTranslate: n, enabled: o } = this;
        if (!o || (!a.simulateTouch && "mouse" === e.pointerType)) return;
        let d = e;
        if (
          (d.originalEvent && (d = d.originalEvent),
          "pointermove" === d.type &&
            (null !== r.touchId || d.pointerId !== r.pointerId))
        )
          return;
        if ("touchmove" === d.type) {
          if (
            !(t = [...d.changedTouches].find(
              (e) => e.identifier === r.touchId
            )) ||
            t.identifier !== r.touchId
          )
            return;
        } else t = d;
        if (!r.isTouched) {
          r.startMoving && r.isScrolling && this.emit("touchMoveOpposite", d);
          return;
        }
        let p = t.pageX,
          u = t.pageY;
        if (d.preventedByNestedSwiper) {
          (l.startX = p), (l.startY = u);
          return;
        }
        if (!this.allowTouchMove) {
          d.target.matches(r.focusableElements) || (this.allowClick = !1),
            r.isTouched &&
              (Object.assign(l, {
                startX: p,
                startY: u,
                currentX: p,
                currentY: u,
              }),
              (r.touchStartTime = m()));
          return;
        }
        if (a.touchReleaseOnEdges && !a.loop) {
          if (this.isVertical()) {
            if (
              (u < l.startY && this.translate <= this.maxTranslate()) ||
              (u > l.startY && this.translate >= this.minTranslate())
            ) {
              (r.isTouched = !1), (r.isMoved = !1);
              return;
            }
          } else if (
            n &&
            ((p > l.startX && -this.translate <= this.maxTranslate()) ||
              (p < l.startX && -this.translate >= this.minTranslate()))
          )
            return;
          else if (
            !n &&
            ((p < l.startX && this.translate <= this.maxTranslate()) ||
              (p > l.startX && this.translate >= this.minTranslate()))
          )
            return;
        }
        if (
          (s.activeElement &&
            s.activeElement.matches(r.focusableElements) &&
            s.activeElement !== d.target &&
            "mouse" !== d.pointerType &&
            s.activeElement.blur(),
          s.activeElement &&
            d.target === s.activeElement &&
            d.target.matches(r.focusableElements))
        ) {
          (r.isMoved = !0), (this.allowClick = !1);
          return;
        }
        r.allowTouchCallbacks && this.emit("touchMove", d),
          (l.previousX = l.currentX),
          (l.previousY = l.currentY),
          (l.currentX = p),
          (l.currentY = u);
        let h = l.currentX - l.startX,
          f = l.currentY - l.startY;
        if (
          this.params.threshold &&
          Math.sqrt(h ** 2 + f ** 2) < this.params.threshold
        )
          return;
        if (void 0 === r.isScrolling) {
          let e;
          (this.isHorizontal() && l.currentY === l.startY) ||
          (this.isVertical() && l.currentX === l.startX)
            ? (r.isScrolling = !1)
            : h * h + f * f >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(f), Math.abs(h))) / Math.PI),
              (r.isScrolling = this.isHorizontal()
                ? e > a.touchAngle
                : 90 - e > a.touchAngle));
        }
        if (
          (r.isScrolling && this.emit("touchMoveOpposite", d),
          void 0 === r.startMoving &&
            (l.currentX !== l.startX || l.currentY !== l.startY) &&
            (r.startMoving = !0),
          r.isScrolling ||
            ("touchmove" === d.type && r.preventTouchMoveFromPointerMove))
        ) {
          r.isTouched = !1;
          return;
        }
        if (!r.startMoving) return;
        (this.allowClick = !1),
          !a.cssMode && d.cancelable && d.preventDefault(),
          a.touchMoveStopPropagation && !a.nested && d.stopPropagation();
        let g = this.isHorizontal() ? h : f,
          v = this.isHorizontal()
            ? l.currentX - l.previousX
            : l.currentY - l.previousY;
        a.oneWayMovement &&
          ((g = Math.abs(g) * (n ? 1 : -1)), (v = Math.abs(v) * (n ? 1 : -1))),
          (l.diff = g),
          (g *= a.touchRatio),
          n && ((g = -g), (v = -v));
        let w = this.touchesDirection;
        (this.swipeDirection = g > 0 ? "prev" : "next"),
          (this.touchesDirection = v > 0 ? "prev" : "next");
        let b = this.params.loop && !a.cssMode,
          y =
            ("next" === this.touchesDirection && this.allowSlideNext) ||
            ("prev" === this.touchesDirection && this.allowSlidePrev);
        if (!r.isMoved) {
          if (
            (b && y && this.loopFix({ direction: this.swipeDirection }),
            (r.startTranslate = this.getTranslate()),
            this.setTransition(0),
            this.animating)
          ) {
            let e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
              detail: { bySwiperTouchMove: !0 },
            });
            this.wrapperEl.dispatchEvent(e);
          }
          (r.allowMomentumBounce = !1),
            a.grabCursor &&
              (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) &&
              this.setGrabCursor(!0),
            this.emit("sliderFirstMove", d);
        }
        if (
          (new Date().getTime(),
          !1 !== a._loopSwapReset &&
            r.isMoved &&
            r.allowThresholdMove &&
            w !== this.touchesDirection &&
            b &&
            y &&
            Math.abs(g) >= 1)
        ) {
          Object.assign(l, {
            startX: p,
            startY: u,
            currentX: p,
            currentY: u,
            startTranslate: r.currentTranslate,
          }),
            (r.loopSwapReset = !0),
            (r.startTranslate = r.currentTranslate);
          return;
        }
        this.emit("sliderMove", d),
          (r.isMoved = !0),
          (r.currentTranslate = g + r.startTranslate);
        let x = !0,
          S = a.resistanceRatio;
        if (
          (a.touchReleaseOnEdges && (S = 0),
          g > 0
            ? (b &&
                y &&
                !i &&
                r.allowThresholdMove &&
                r.currentTranslate >
                  (a.centeredSlides
                    ? this.minTranslate() -
                      this.slidesSizesGrid[this.activeIndex + 1] -
                      ("auto" !== a.slidesPerView &&
                      this.slides.length - a.slidesPerView >= 2
                        ? this.slidesSizesGrid[this.activeIndex + 1] +
                          this.params.spaceBetween
                        : 0) -
                      this.params.spaceBetween
                    : this.minTranslate()) &&
                this.loopFix({
                  direction: "prev",
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              r.currentTranslate > this.minTranslate() &&
                ((x = !1),
                a.resistance &&
                  (r.currentTranslate =
                    this.minTranslate() -
                    1 +
                    (-this.minTranslate() + r.startTranslate + g) ** S)))
            : g < 0 &&
              (b &&
                y &&
                !i &&
                r.allowThresholdMove &&
                r.currentTranslate <
                  (a.centeredSlides
                    ? this.maxTranslate() +
                      this.slidesSizesGrid[this.slidesSizesGrid.length - 1] +
                      this.params.spaceBetween +
                      ("auto" !== a.slidesPerView &&
                      this.slides.length - a.slidesPerView >= 2
                        ? this.slidesSizesGrid[
                            this.slidesSizesGrid.length - 1
                          ] + this.params.spaceBetween
                        : 0)
                    : this.maxTranslate()) &&
                this.loopFix({
                  direction: "next",
                  setTranslate: !0,
                  activeSlideIndex:
                    this.slides.length -
                    ("auto" === a.slidesPerView
                      ? this.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(a.slidesPerView, 10))),
                }),
              r.currentTranslate < this.maxTranslate() &&
                ((x = !1),
                a.resistance &&
                  (r.currentTranslate =
                    this.maxTranslate() +
                    1 -
                    (this.maxTranslate() - r.startTranslate - g) ** S))),
          x && (d.preventedByNestedSwiper = !0),
          !this.allowSlideNext &&
            "next" === this.swipeDirection &&
            r.currentTranslate < r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          !this.allowSlidePrev &&
            "prev" === this.swipeDirection &&
            r.currentTranslate > r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          this.allowSlidePrev ||
            this.allowSlideNext ||
            (r.currentTranslate = r.startTranslate),
          a.threshold > 0)
        )
          if (Math.abs(g) > a.threshold || r.allowThresholdMove) {
            if (!r.allowThresholdMove) {
              (r.allowThresholdMove = !0),
                (l.startX = l.currentX),
                (l.startY = l.currentY),
                (r.currentTranslate = r.startTranslate),
                (l.diff = this.isHorizontal()
                  ? l.currentX - l.startX
                  : l.currentY - l.startY);
              return;
            }
          } else {
            r.currentTranslate = r.startTranslate;
            return;
          }
        a.followFinger &&
          !a.cssMode &&
          (((a.freeMode && a.freeMode.enabled && this.freeMode) ||
            a.watchSlidesProgress) &&
            (this.updateActiveIndex(), this.updateSlidesClasses()),
          a.freeMode &&
            a.freeMode.enabled &&
            this.freeMode &&
            this.freeMode.onTouchMove(),
          this.updateProgress(r.currentTranslate),
          this.setTranslate(r.currentTranslate));
      }
      function V(e) {
        let t,
          i,
          s = this,
          r = s.touchEventsData,
          a = e;
        if (
          (a.originalEvent && (a = a.originalEvent),
          "touchend" === a.type || "touchcancel" === a.type)
        ) {
          if (
            !(t = [...a.changedTouches].find(
              (e) => e.identifier === r.touchId
            )) ||
            t.identifier !== r.touchId
          )
            return;
        } else {
          if (null !== r.touchId || a.pointerId !== r.pointerId) return;
          t = a;
        }
        if (
          [
            "pointercancel",
            "pointerout",
            "pointerleave",
            "contextmenu",
          ].includes(a.type) &&
          !(
            ["pointercancel", "contextmenu"].includes(a.type) &&
            (s.browser.isSafari || s.browser.isWebView)
          )
        )
          return;
        (r.pointerId = null), (r.touchId = null);
        let {
          params: l,
          touches: n,
          rtlTranslate: o,
          slidesGrid: d,
          enabled: c,
        } = s;
        if (!c || (!l.simulateTouch && "mouse" === a.pointerType)) return;
        if (
          (r.allowTouchCallbacks && s.emit("touchEnd", a),
          (r.allowTouchCallbacks = !1),
          !r.isTouched)
        ) {
          r.isMoved && l.grabCursor && s.setGrabCursor(!1),
            (r.isMoved = !1),
            (r.startMoving = !1);
          return;
        }
        l.grabCursor &&
          r.isMoved &&
          r.isTouched &&
          (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) &&
          s.setGrabCursor(!1);
        let p = m(),
          u = p - r.touchStartTime;
        if (s.allowClick) {
          let e = a.path || (a.composedPath && a.composedPath());
          s.updateClickedSlide((e && e[0]) || a.target, e),
            s.emit("tap click", a),
            u < 300 &&
              p - r.lastClickTime < 300 &&
              s.emit("doubleTap doubleClick", a);
        }
        if (
          ((r.lastClickTime = m()),
          h(() => {
            s.destroyed || (s.allowClick = !0);
          }),
          !r.isTouched ||
            !r.isMoved ||
            !s.swipeDirection ||
            (0 === n.diff && !r.loopSwapReset) ||
            (r.currentTranslate === r.startTranslate && !r.loopSwapReset))
        ) {
          (r.isTouched = !1), (r.isMoved = !1), (r.startMoving = !1);
          return;
        }
        if (
          ((r.isTouched = !1),
          (r.isMoved = !1),
          (r.startMoving = !1),
          (i = l.followFinger
            ? o
              ? s.translate
              : -s.translate
            : -r.currentTranslate),
          l.cssMode)
        )
          return;
        if (l.freeMode && l.freeMode.enabled)
          return void s.freeMode.onTouchEnd({ currentPos: i });
        let f = i >= -s.maxTranslate() && !s.params.loop,
          g = 0,
          v = s.slidesSizesGrid[0];
        for (
          let e = 0;
          e < d.length;
          e += e < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup
        ) {
          let t = e < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
          void 0 !== d[e + t]
            ? (f || (i >= d[e] && i < d[e + t])) &&
              ((g = e), (v = d[e + t] - d[e]))
            : (f || i >= d[e]) &&
              ((g = e), (v = d[d.length - 1] - d[d.length - 2]));
        }
        let w = null,
          b = null;
        l.rewind &&
          (s.isBeginning
            ? (b =
                l.virtual && l.virtual.enabled && s.virtual
                  ? s.virtual.slides.length - 1
                  : s.slides.length - 1)
            : s.isEnd && (w = 0));
        let y = (i - d[g]) / v,
          x = g < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
        if (u > l.longSwipesMs) {
          if (!l.longSwipes) return void s.slideTo(s.activeIndex);
          "next" === s.swipeDirection &&
            (y >= l.longSwipesRatio
              ? s.slideTo(l.rewind && s.isEnd ? w : g + x)
              : s.slideTo(g)),
            "prev" === s.swipeDirection &&
              (y > 1 - l.longSwipesRatio
                ? s.slideTo(g + x)
                : null !== b && y < 0 && Math.abs(y) > l.longSwipesRatio
                ? s.slideTo(b)
                : s.slideTo(g));
        } else {
          if (!l.shortSwipes) return void s.slideTo(s.activeIndex);
          s.navigation &&
          (a.target === s.navigation.nextEl || a.target === s.navigation.prevEl)
            ? a.target === s.navigation.nextEl
              ? s.slideTo(g + x)
              : s.slideTo(g)
            : ("next" === s.swipeDirection && s.slideTo(null !== w ? w : g + x),
              "prev" === s.swipeDirection && s.slideTo(null !== b ? b : g));
        }
      }
      function F() {
        let e = this,
          { params: t, el: i } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        let { allowSlideNext: s, allowSlidePrev: r, snapGrid: a } = e,
          l = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        let n = l && t.loop;
        ("auto" !== t.slidesPerView && !(t.slidesPerView > 1)) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        n
          ? e.params.loop && !l
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = r),
          (e.allowSlideNext = s),
          e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
      }
      function H(e) {
        this.enabled &&
          !this.allowClick &&
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation &&
            this.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function R() {
        let { wrapperEl: e, rtlTranslate: t, enabled: i } = this;
        if (!i) return;
        (this.previousTranslate = this.translate),
          this.isHorizontal()
            ? (this.translate = -e.scrollLeft)
            : (this.translate = -e.scrollTop),
          0 === this.translate && (this.translate = 0),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
        let s = this.maxTranslate() - this.minTranslate();
        (0 === s ? 0 : (this.translate - this.minTranslate()) / s) !==
          this.progress &&
          this.updateProgress(t ? -this.translate : this.translate),
          this.emit("setTranslate", this.translate, !1);
      }
      function W(e) {
        z(this, e.target),
          !this.params.cssMode &&
            ("auto" === this.params.slidesPerView || this.params.autoHeight) &&
            this.update();
      }
      function q() {
        !this.documentTouchHandlerProceeded &&
          ((this.documentTouchHandlerProceeded = !0),
          this.params.touchReleaseOnEdges &&
            (this.el.style.touchAction = "auto"));
      }
      let X = (e, t) => {
          let i = c(),
            { params: s, el: r, wrapperEl: a, device: l } = e,
            n = !!s.nested,
            o = "on" === t ? "addEventListener" : "removeEventListener";
          r &&
            "string" != typeof r &&
            (i[o]("touchstart", e.onDocumentTouchStart, {
              passive: !1,
              capture: n,
            }),
            r[o]("touchstart", e.onTouchStart, { passive: !1 }),
            r[o]("pointerdown", e.onTouchStart, { passive: !1 }),
            i[o]("touchmove", e.onTouchMove, { passive: !1, capture: n }),
            i[o]("pointermove", e.onTouchMove, { passive: !1, capture: n }),
            i[o]("touchend", e.onTouchEnd, { passive: !0 }),
            i[o]("pointerup", e.onTouchEnd, { passive: !0 }),
            i[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
            i[o]("touchcancel", e.onTouchEnd, { passive: !0 }),
            i[o]("pointerout", e.onTouchEnd, { passive: !0 }),
            i[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
            i[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
            (s.preventClicks || s.preventClicksPropagation) &&
              r[o]("click", e.onClick, !0),
            s.cssMode && a[o]("scroll", e.onScroll),
            s.updateOnWindowResize
              ? e[t](
                  l.ios || l.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  F,
                  !0
                )
              : e[t]("observerUpdate", F, !0),
            r[o]("load", e.onLoad, { capture: !0 }));
        },
        Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var U = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      let K = {
          eventsEmitter: {
            on(e, t, i) {
              let s = this;
              if (!s.eventsListeners || s.destroyed || "function" != typeof t)
                return s;
              let r = i ? "unshift" : "push";
              return (
                e.split(" ").forEach((e) => {
                  s.eventsListeners[e] || (s.eventsListeners[e] = []),
                    s.eventsListeners[e][r](t);
                }),
                s
              );
            },
            once(e, t, i) {
              let s = this;
              if (!s.eventsListeners || s.destroyed || "function" != typeof t)
                return s;
              function r() {
                s.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
                for (var i = arguments.length, a = Array(i), l = 0; l < i; l++)
                  a[l] = arguments[l];
                t.apply(s, a);
              }
              return (r.__emitterProxy = t), s.on(e, r, i);
            },
            onAny(e, t) {
              return (
                !this.eventsListeners ||
                  this.destroyed ||
                  "function" != typeof e ||
                  (0 > this.eventsAnyListeners.indexOf(e) &&
                    this.eventsAnyListeners[t ? "unshift" : "push"](e)),
                this
              );
            },
            offAny(e) {
              if (
                !this.eventsListeners ||
                this.destroyed ||
                !this.eventsAnyListeners
              )
                return this;
              let t = this.eventsAnyListeners.indexOf(e);
              return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
            },
            off(e, t) {
              let i = this;
              return (
                i.eventsListeners &&
                  !i.destroyed &&
                  i.eventsListeners &&
                  e.split(" ").forEach((e) => {
                    void 0 === t
                      ? (i.eventsListeners[e] = [])
                      : i.eventsListeners[e] &&
                        i.eventsListeners[e].forEach((s, r) => {
                          (s === t ||
                            (s.__emitterProxy && s.__emitterProxy === t)) &&
                            i.eventsListeners[e].splice(r, 1);
                        });
                  }),
                i
              );
            },
            emit() {
              let e,
                t,
                i,
                s = this;
              if (!s.eventsListeners || s.destroyed || !s.eventsListeners)
                return s;
              for (var r = arguments.length, a = Array(r), l = 0; l < r; l++)
                a[l] = arguments[l];
              return (
                "string" == typeof a[0] || Array.isArray(a[0])
                  ? ((e = a[0]), (t = a.slice(1, a.length)), (i = s))
                  : ((e = a[0].events),
                    (t = a[0].data),
                    (i = a[0].context || s)),
                t.unshift(i),
                (Array.isArray(e) ? e : e.split(" ")).forEach((e) => {
                  s.eventsAnyListeners &&
                    s.eventsAnyListeners.length &&
                    s.eventsAnyListeners.forEach((s) => {
                      s.apply(i, [e, ...t]);
                    }),
                    s.eventsListeners &&
                      s.eventsListeners[e] &&
                      s.eventsListeners[e].forEach((e) => {
                        e.apply(i, t);
                      });
                }),
                s
              );
            },
          },
          update: {
            updateSize: function () {
              let e,
                t,
                i = this.el;
              (e =
                void 0 !== this.params.width && null !== this.params.width
                  ? this.params.width
                  : i.clientWidth),
                (t =
                  void 0 !== this.params.height && null !== this.params.height
                    ? this.params.height
                    : i.clientHeight),
                (0 === e && this.isHorizontal()) ||
                  (0 === t && this.isVertical()) ||
                  ((e =
                    e -
                    parseInt(S(i, "padding-left") || 0, 10) -
                    parseInt(S(i, "padding-right") || 0, 10)),
                  (t =
                    t -
                    parseInt(S(i, "padding-top") || 0, 10) -
                    parseInt(S(i, "padding-bottom") || 0, 10)),
                  Number.isNaN(e) && (e = 0),
                  Number.isNaN(t) && (t = 0),
                  Object.assign(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t,
                  }));
            },
            updateSlides: function () {
              let e,
                t = this;
              function i(e, i) {
                return parseFloat(
                  e.getPropertyValue(t.getDirectionLabel(i)) || 0
                );
              }
              let s = t.params,
                {
                  wrapperEl: r,
                  slidesEl: a,
                  size: l,
                  rtlTranslate: n,
                  wrongRTL: o,
                } = t,
                d = t.virtual && s.virtual.enabled,
                c = d ? t.virtual.slides.length : t.slides.length,
                p = b(a, ".".concat(t.params.slideClass, ", swiper-slide")),
                u = d ? t.virtual.slides.length : p.length,
                h = [],
                m = [],
                f = [],
                g = s.slidesOffsetBefore;
              "function" == typeof g && (g = s.slidesOffsetBefore.call(t));
              let w = s.slidesOffsetAfter;
              "function" == typeof w && (w = s.slidesOffsetAfter.call(t));
              let y = t.snapGrid.length,
                x = t.slidesGrid.length,
                T = s.spaceBetween,
                E = -g,
                M = 0,
                P = 0;
              if (void 0 === l) return;
              "string" == typeof T && T.indexOf("%") >= 0
                ? (T = (parseFloat(T.replace("%", "")) / 100) * l)
                : "string" == typeof T && (T = parseFloat(T)),
                (t.virtualSize = -T),
                p.forEach((e) => {
                  n ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                    (e.style.marginBottom = ""),
                    (e.style.marginTop = "");
                }),
                s.centeredSlides &&
                  s.cssMode &&
                  (v(r, "--swiper-centered-offset-before", ""),
                  v(r, "--swiper-centered-offset-after", ""));
              let k = s.grid && s.grid.rows > 1 && t.grid;
              k ? t.grid.initSlides(p) : t.grid && t.grid.unsetSlides();
              let L =
                "auto" === s.slidesPerView &&
                s.breakpoints &&
                Object.keys(s.breakpoints).filter(
                  (e) => void 0 !== s.breakpoints[e].slidesPerView
                ).length > 0;
              for (let r = 0; r < u; r += 1) {
                let a;
                if (
                  ((e = 0),
                  p[r] && (a = p[r]),
                  k && t.grid.updateSlide(r, a, p),
                  !p[r] || "none" !== S(a, "display"))
                ) {
                  if ("auto" === s.slidesPerView) {
                    L && (p[r].style[t.getDirectionLabel("width")] = "");
                    let l = getComputedStyle(a),
                      n = a.style.transform,
                      o = a.style.webkitTransform;
                    if (
                      (n && (a.style.transform = "none"),
                      o && (a.style.webkitTransform = "none"),
                      s.roundLengths)
                    )
                      e = t.isHorizontal()
                        ? C(a, "width", !0)
                        : C(a, "height", !0);
                    else {
                      let t = i(l, "width"),
                        s = i(l, "padding-left"),
                        r = i(l, "padding-right"),
                        n = i(l, "margin-left"),
                        o = i(l, "margin-right"),
                        d = l.getPropertyValue("box-sizing");
                      if (d && "border-box" === d) e = t + n + o;
                      else {
                        let { clientWidth: i, offsetWidth: l } = a;
                        e = t + s + r + n + o + (l - i);
                      }
                    }
                    n && (a.style.transform = n),
                      o && (a.style.webkitTransform = o),
                      s.roundLengths && (e = Math.floor(e));
                  } else
                    (e = (l - (s.slidesPerView - 1) * T) / s.slidesPerView),
                      s.roundLengths && (e = Math.floor(e)),
                      p[r] &&
                        (p[r].style[t.getDirectionLabel("width")] = "".concat(
                          e,
                          "px"
                        ));
                  p[r] && (p[r].swiperSlideSize = e),
                    f.push(e),
                    s.centeredSlides
                      ? ((E = E + e / 2 + M / 2 + T),
                        0 === M && 0 !== r && (E = E - l / 2 - T),
                        0 === r && (E = E - l / 2 - T),
                        0.001 > Math.abs(E) && (E = 0),
                        s.roundLengths && (E = Math.floor(E)),
                        P % s.slidesPerGroup == 0 && h.push(E),
                        m.push(E))
                      : (s.roundLengths && (E = Math.floor(E)),
                        (P - Math.min(t.params.slidesPerGroupSkip, P)) %
                          t.params.slidesPerGroup ==
                          0 && h.push(E),
                        m.push(E),
                        (E = E + e + T)),
                    (t.virtualSize += e + T),
                    (M = e),
                    (P += 1);
                }
              }
              if (
                ((t.virtualSize = Math.max(t.virtualSize, l) + w),
                n &&
                  o &&
                  ("slide" === s.effect || "coverflow" === s.effect) &&
                  (r.style.width = "".concat(t.virtualSize + T, "px")),
                s.setWrapperSize &&
                  (r.style[t.getDirectionLabel("width")] = "".concat(
                    t.virtualSize + T,
                    "px"
                  )),
                k && t.grid.updateWrapperSize(e, h),
                !s.centeredSlides)
              ) {
                let e = [];
                for (let i = 0; i < h.length; i += 1) {
                  let r = h[i];
                  s.roundLengths && (r = Math.floor(r)),
                    h[i] <= t.virtualSize - l && e.push(r);
                }
                (h = e),
                  Math.floor(t.virtualSize - l) - Math.floor(h[h.length - 1]) >
                    1 && h.push(t.virtualSize - l);
              }
              if (d && s.loop) {
                let e = f[0] + T;
                if (s.slidesPerGroup > 1) {
                  let i = Math.ceil(
                      (t.virtual.slidesBefore + t.virtual.slidesAfter) /
                        s.slidesPerGroup
                    ),
                    r = e * s.slidesPerGroup;
                  for (let e = 0; e < i; e += 1) h.push(h[h.length - 1] + r);
                }
                for (
                  let i = 0;
                  i < t.virtual.slidesBefore + t.virtual.slidesAfter;
                  i += 1
                )
                  1 === s.slidesPerGroup && h.push(h[h.length - 1] + e),
                    m.push(m[m.length - 1] + e),
                    (t.virtualSize += e);
              }
              if ((0 === h.length && (h = [0]), 0 !== T)) {
                let e =
                  t.isHorizontal() && n
                    ? "marginLeft"
                    : t.getDirectionLabel("marginRight");
                p.filter(
                  (e, t) => !s.cssMode || !!s.loop || t !== p.length - 1
                ).forEach((t) => {
                  t.style[e] = "".concat(T, "px");
                });
              }
              if (s.centeredSlides && s.centeredSlidesBounds) {
                let e = 0;
                f.forEach((t) => {
                  e += t + (T || 0);
                });
                let t = (e -= T) > l ? e - l : 0;
                h = h.map((e) => (e <= 0 ? -g : e > t ? t + w : e));
              }
              if (s.centerInsufficientSlides) {
                let e = 0;
                f.forEach((t) => {
                  e += t + (T || 0);
                }),
                  (e -= T);
                let t =
                  (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
                if (e + t < l) {
                  let i = (l - e - t) / 2;
                  h.forEach((e, t) => {
                    h[t] = e - i;
                  }),
                    m.forEach((e, t) => {
                      m[t] = e + i;
                    });
                }
              }
              if (
                (Object.assign(t, {
                  slides: p,
                  snapGrid: h,
                  slidesGrid: m,
                  slidesSizesGrid: f,
                }),
                s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
              ) {
                v(r, "--swiper-centered-offset-before", "".concat(-h[0], "px")),
                  v(
                    r,
                    "--swiper-centered-offset-after",
                    "".concat(t.size / 2 - f[f.length - 1] / 2, "px")
                  );
                let e = -t.snapGrid[0],
                  i = -t.slidesGrid[0];
                (t.snapGrid = t.snapGrid.map((t) => t + e)),
                  (t.slidesGrid = t.slidesGrid.map((e) => e + i));
              }
              if (
                (u !== c && t.emit("slidesLengthChange"),
                h.length !== y &&
                  (t.params.watchOverflow && t.checkOverflow(),
                  t.emit("snapGridLengthChange")),
                m.length !== x && t.emit("slidesGridLengthChange"),
                s.watchSlidesProgress && t.updateSlidesOffset(),
                t.emit("slidesUpdated"),
                !d &&
                  !s.cssMode &&
                  ("slide" === s.effect || "fade" === s.effect))
              ) {
                let e = "".concat(s.containerModifierClass, "backface-hidden"),
                  i = t.el.classList.contains(e);
                u <= s.maxBackfaceHiddenSlides
                  ? i || t.el.classList.add(e)
                  : i && t.el.classList.remove(e);
              }
            },
            updateAutoHeight: function (e) {
              let t,
                i = this,
                s = [],
                r = i.virtual && i.params.virtual.enabled,
                a = 0;
              "number" == typeof e
                ? i.setTransition(e)
                : !0 === e && i.setTransition(i.params.speed);
              let l = (e) =>
                r ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
              if (
                "auto" !== i.params.slidesPerView &&
                i.params.slidesPerView > 1
              )
                if (i.params.centeredSlides)
                  (i.visibleSlides || []).forEach((e) => {
                    s.push(e);
                  });
                else
                  for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                    let e = i.activeIndex + t;
                    if (e > i.slides.length && !r) break;
                    s.push(l(e));
                  }
              else s.push(l(i.activeIndex));
              for (t = 0; t < s.length; t += 1)
                if (void 0 !== s[t]) {
                  let e = s[t].offsetHeight;
                  a = e > a ? e : a;
                }
              (a || 0 === a) && (i.wrapperEl.style.height = "".concat(a, "px"));
            },
            updateSlidesOffset: function () {
              let e = this.slides,
                t = this.isElement
                  ? this.isHorizontal()
                    ? this.wrapperEl.offsetLeft
                    : this.wrapperEl.offsetTop
                  : 0;
              for (let i = 0; i < e.length; i += 1)
                e[i].swiperSlideOffset =
                  (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
                  t -
                  this.cssOverflowAdjustment();
            },
            updateSlidesProgress: function (e) {
              void 0 === e && (e = (this && this.translate) || 0);
              let t = this.params,
                { slides: i, rtlTranslate: s, snapGrid: r } = this;
              if (0 === i.length) return;
              void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
              let a = -e;
              s && (a = e),
                (this.visibleSlidesIndexes = []),
                (this.visibleSlides = []);
              let l = t.spaceBetween;
              "string" == typeof l && l.indexOf("%") >= 0
                ? (l = (parseFloat(l.replace("%", "")) / 100) * this.size)
                : "string" == typeof l && (l = parseFloat(l));
              for (let e = 0; e < i.length; e += 1) {
                let n = i[e],
                  o = n.swiperSlideOffset;
                t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                let d =
                    (a + (t.centeredSlides ? this.minTranslate() : 0) - o) /
                    (n.swiperSlideSize + l),
                  c =
                    (a -
                      r[0] +
                      (t.centeredSlides ? this.minTranslate() : 0) -
                      o) /
                    (n.swiperSlideSize + l),
                  p = -(a - o),
                  u = p + this.slidesSizesGrid[e],
                  h = p >= 0 && p <= this.size - this.slidesSizesGrid[e],
                  m =
                    (p >= 0 && p < this.size - 1) ||
                    (u > 1 && u <= this.size) ||
                    (p <= 0 && u >= this.size);
                m &&
                  (this.visibleSlides.push(n),
                  this.visibleSlidesIndexes.push(e)),
                  A(n, m, t.slideVisibleClass),
                  A(n, h, t.slideFullyVisibleClass),
                  (n.progress = s ? -d : d),
                  (n.originalProgress = s ? -c : c);
              }
            },
            updateProgress: function (e) {
              if (void 0 === e) {
                let t = this.rtlTranslate ? -1 : 1;
                e = (this && this.translate && this.translate * t) || 0;
              }
              let t = this.params,
                i = this.maxTranslate() - this.minTranslate(),
                {
                  progress: s,
                  isBeginning: r,
                  isEnd: a,
                  progressLoop: l,
                } = this,
                n = r,
                o = a;
              if (0 === i) (s = 0), (r = !0), (a = !0);
              else {
                s = (e - this.minTranslate()) / i;
                let t = 1 > Math.abs(e - this.minTranslate()),
                  l = 1 > Math.abs(e - this.maxTranslate());
                (r = t || s <= 0),
                  (a = l || s >= 1),
                  t && (s = 0),
                  l && (s = 1);
              }
              if (t.loop) {
                let t = this.getSlideIndexByData(0),
                  i = this.getSlideIndexByData(this.slides.length - 1),
                  s = this.slidesGrid[t],
                  r = this.slidesGrid[i],
                  a = this.slidesGrid[this.slidesGrid.length - 1],
                  n = Math.abs(e);
                (l = n >= s ? (n - s) / a : (n + a - r) / a) > 1 && (l -= 1);
              }
              Object.assign(this, {
                progress: s,
                progressLoop: l,
                isBeginning: r,
                isEnd: a,
              }),
                (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
                  this.updateSlidesProgress(e),
                r && !n && this.emit("reachBeginning toEdge"),
                a && !o && this.emit("reachEnd toEdge"),
                ((n && !r) || (o && !a)) && this.emit("fromEdge"),
                this.emit("progress", s);
            },
            updateSlidesClasses: function () {
              let e,
                t,
                i,
                { slides: s, params: r, slidesEl: a, activeIndex: l } = this,
                n = this.virtual && r.virtual.enabled,
                o = this.grid && r.grid && r.grid.rows > 1,
                d = (e) =>
                  b(
                    a,
                    "."
                      .concat(r.slideClass)
                      .concat(e, ", swiper-slide")
                      .concat(e)
                  )[0];
              if (n)
                if (r.loop) {
                  let t = l - this.virtual.slidesBefore;
                  t < 0 && (t = this.virtual.slides.length + t),
                    t >= this.virtual.slides.length &&
                      (t -= this.virtual.slides.length),
                    (e = d('[data-swiper-slide-index="'.concat(t, '"]')));
                } else e = d('[data-swiper-slide-index="'.concat(l, '"]'));
              else
                o
                  ? ((e = s.find((e) => e.column === l)),
                    (i = s.find((e) => e.column === l + 1)),
                    (t = s.find((e) => e.column === l - 1)))
                  : (e = s[l]);
              e &&
                !o &&
                ((i = (function (e, t) {
                  let i = [];
                  for (; e.nextElementSibling; ) {
                    let s = e.nextElementSibling;
                    t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
                  }
                  return i;
                })(e, ".".concat(r.slideClass, ", swiper-slide"))[0]),
                r.loop && !i && (i = s[0]),
                (t = (function (e, t) {
                  let i = [];
                  for (; e.previousElementSibling; ) {
                    let s = e.previousElementSibling;
                    t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
                  }
                  return i;
                })(e, ".".concat(r.slideClass, ", swiper-slide"))[0]),
                r.loop),
                s.forEach((s) => {
                  I(s, s === e, r.slideActiveClass),
                    I(s, s === i, r.slideNextClass),
                    I(s, s === t, r.slidePrevClass);
                }),
                this.emitSlidesClasses();
            },
            updateActiveIndex: function (e) {
              let t,
                i,
                s = this,
                r = s.rtlTranslate ? s.translate : -s.translate,
                {
                  snapGrid: a,
                  params: l,
                  activeIndex: n,
                  realIndex: o,
                  snapIndex: d,
                } = s,
                c = e,
                p = (e) => {
                  let t = e - s.virtual.slidesBefore;
                  return (
                    t < 0 && (t = s.virtual.slides.length + t),
                    t >= s.virtual.slides.length &&
                      (t -= s.virtual.slides.length),
                    t
                  );
                };
              if (
                (void 0 === c &&
                  (c = (function (e) {
                    let t,
                      { slidesGrid: i, params: s } = e,
                      r = e.rtlTranslate ? e.translate : -e.translate;
                    for (let e = 0; e < i.length; e += 1)
                      void 0 !== i[e + 1]
                        ? r >= i[e] && r < i[e + 1] - (i[e + 1] - i[e]) / 2
                          ? (t = e)
                          : r >= i[e] && r < i[e + 1] && (t = e + 1)
                        : r >= i[e] && (t = e);
                    return (
                      s.normalizeSlideIndex &&
                        (t < 0 || void 0 === t) &&
                        (t = 0),
                      t
                    );
                  })(s)),
                a.indexOf(r) >= 0)
              )
                t = a.indexOf(r);
              else {
                let e = Math.min(l.slidesPerGroupSkip, c);
                t = e + Math.floor((c - e) / l.slidesPerGroup);
              }
              if (
                (t >= a.length && (t = a.length - 1), c === n && !s.params.loop)
              ) {
                t !== d && ((s.snapIndex = t), s.emit("snapIndexChange"));
                return;
              }
              if (
                c === n &&
                s.params.loop &&
                s.virtual &&
                s.params.virtual.enabled
              ) {
                s.realIndex = p(c);
                return;
              }
              let u = s.grid && l.grid && l.grid.rows > 1;
              if (s.virtual && l.virtual.enabled && l.loop) i = p(c);
              else if (u) {
                let e = s.slides.find((e) => e.column === c),
                  t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(t) && (t = Math.max(s.slides.indexOf(e), 0)),
                  (i = Math.floor(t / l.grid.rows));
              } else if (s.slides[c]) {
                let e = s.slides[c].getAttribute("data-swiper-slide-index");
                i = e ? parseInt(e, 10) : c;
              } else i = c;
              Object.assign(s, {
                previousSnapIndex: d,
                snapIndex: t,
                previousRealIndex: o,
                realIndex: i,
                previousIndex: n,
                activeIndex: c,
              }),
                s.initialized && j(s),
                s.emit("activeIndexChange"),
                s.emit("snapIndexChange"),
                (s.initialized || s.params.runCallbacksOnInit) &&
                  (o !== i && s.emit("realIndexChange"), s.emit("slideChange"));
            },
            updateClickedSlide: function (e, t) {
              let i,
                s = this.params,
                r = e.closest(".".concat(s.slideClass, ", swiper-slide"));
              !r &&
                this.isElement &&
                t &&
                t.length > 1 &&
                t.includes(e) &&
                [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
                  !r &&
                    e.matches &&
                    e.matches(".".concat(s.slideClass, ", swiper-slide")) &&
                    (r = e);
                });
              let a = !1;
              if (r) {
                for (let e = 0; e < this.slides.length; e += 1)
                  if (this.slides[e] === r) {
                    (a = !0), (i = e);
                    break;
                  }
              }
              if (r && a)
                (this.clickedSlide = r),
                  this.virtual && this.params.virtual.enabled
                    ? (this.clickedIndex = parseInt(
                        r.getAttribute("data-swiper-slide-index"),
                        10
                      ))
                    : (this.clickedIndex = i);
              else {
                (this.clickedSlide = void 0), (this.clickedIndex = void 0);
                return;
              }
              s.slideToClickedSlide &&
                void 0 !== this.clickedIndex &&
                this.clickedIndex !== this.activeIndex &&
                this.slideToClickedSlide();
            },
          },
          translate: {
            getTranslate: function (e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              let {
                params: t,
                rtlTranslate: i,
                translate: s,
                wrapperEl: r,
              } = this;
              if (t.virtualTranslate) return i ? -s : s;
              if (t.cssMode) return s;
              let a = (function (e, t) {
                let i, s, r;
                void 0 === t && (t = "x");
                let a = u(),
                  l = (function (e) {
                    let t,
                      i = u();
                    return (
                      i.getComputedStyle && (t = i.getComputedStyle(e, null)),
                      !t && e.currentStyle && (t = e.currentStyle),
                      t || (t = e.style),
                      t
                    );
                  })(e);
                return (
                  a.WebKitCSSMatrix
                    ? ((s = l.transform || l.webkitTransform).split(",")
                        .length > 6 &&
                        (s = s
                          .split(", ")
                          .map((e) => e.replace(",", "."))
                          .join(", ")),
                      (r = new a.WebKitCSSMatrix("none" === s ? "" : s)))
                    : (i = (r =
                        l.MozTransform ||
                        l.OTransform ||
                        l.MsTransform ||
                        l.msTransform ||
                        l.transform ||
                        l
                          .getPropertyValue("transform")
                          .replace("translate(", "matrix(1, 0, 0, 1,"))
                        .toString()
                        .split(",")),
                  "x" === t &&
                    (s = a.WebKitCSSMatrix
                      ? r.m41
                      : 16 === i.length
                      ? parseFloat(i[12])
                      : parseFloat(i[4])),
                  "y" === t &&
                    (s = a.WebKitCSSMatrix
                      ? r.m42
                      : 16 === i.length
                      ? parseFloat(i[13])
                      : parseFloat(i[5])),
                  s || 0
                );
              })(r, e);
              return (a += this.cssOverflowAdjustment()), i && (a = -a), a || 0;
            },
            setTranslate: function (e, t) {
              let {
                  rtlTranslate: i,
                  params: s,
                  wrapperEl: r,
                  progress: a,
                } = this,
                l = 0,
                n = 0;
              this.isHorizontal() ? (l = i ? -e : e) : (n = e),
                s.roundLengths && ((l = Math.floor(l)), (n = Math.floor(n))),
                (this.previousTranslate = this.translate),
                (this.translate = this.isHorizontal() ? l : n),
                s.cssMode
                  ? (r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      this.isHorizontal() ? -l : -n)
                  : s.virtualTranslate ||
                    (this.isHorizontal()
                      ? (l -= this.cssOverflowAdjustment())
                      : (n -= this.cssOverflowAdjustment()),
                    (r.style.transform = "translate3d("
                      .concat(l, "px, ")
                      .concat(n, "px, ")
                      .concat(0, "px)")));
              let o = this.maxTranslate() - this.minTranslate();
              (0 === o ? 0 : (e - this.minTranslate()) / o) !== a &&
                this.updateProgress(e),
                this.emit("setTranslate", this.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e, t, i, s, r) {
              let a;
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                void 0 === s && (s = !0);
              let l = this,
                { params: n, wrapperEl: o } = l;
              if (l.animating && n.preventInteractionOnTransition) return !1;
              let d = l.minTranslate(),
                c = l.maxTranslate();
              if (
                ((a = s && e > d ? d : s && e < c ? c : e),
                l.updateProgress(a),
                n.cssMode)
              ) {
                let e = l.isHorizontal();
                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -a;
                else {
                  if (!l.support.smoothScroll)
                    return (
                      w({
                        swiper: l,
                        targetPosition: -a,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  o.scrollTo({ [e ? "left" : "top"]: -a, behavior: "smooth" });
                }
                return !0;
              }
              return (
                0 === t
                  ? (l.setTransition(0),
                    l.setTranslate(a),
                    i &&
                      (l.emit("beforeTransitionStart", t, r),
                      l.emit("transitionEnd")))
                  : (l.setTransition(t),
                    l.setTranslate(a),
                    i &&
                      (l.emit("beforeTransitionStart", t, r),
                      l.emit("transitionStart")),
                    l.animating ||
                      ((l.animating = !0),
                      l.onTranslateToWrapperTransitionEnd ||
                        (l.onTranslateToWrapperTransitionEnd = function (e) {
                          l &&
                            !l.destroyed &&
                            e.target === this &&
                            (l.wrapperEl.removeEventListener(
                              "transitionend",
                              l.onTranslateToWrapperTransitionEnd
                            ),
                            (l.onTranslateToWrapperTransitionEnd = null),
                            delete l.onTranslateToWrapperTransitionEnd,
                            (l.animating = !1),
                            i && l.emit("transitionEnd"));
                        }),
                      l.wrapperEl.addEventListener(
                        "transitionend",
                        l.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              this.params.cssMode ||
                ((this.wrapperEl.style.transitionDuration = "".concat(e, "ms")),
                (this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
                this.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              let { params: i } = this;
              i.cssMode ||
                (i.autoHeight && this.updateAutoHeight(),
                N({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              let { params: i } = this;
              (this.animating = !1),
                i.cssMode ||
                  (this.setTransition(0),
                  N({
                    swiper: this,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: {
            slideTo: function (e, t, i, s, r) {
              let a;
              void 0 === e && (e = 0),
                void 0 === i && (i = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let l = this,
                n = e;
              n < 0 && (n = 0);
              let {
                params: o,
                snapGrid: d,
                slidesGrid: c,
                previousIndex: p,
                activeIndex: u,
                rtlTranslate: h,
                wrapperEl: m,
                enabled: f,
              } = l;
              if (
                (!f && !s && !r) ||
                l.destroyed ||
                (l.animating && o.preventInteractionOnTransition)
              )
                return !1;
              void 0 === t && (t = l.params.speed);
              let g = Math.min(l.params.slidesPerGroupSkip, n),
                v = g + Math.floor((n - g) / l.params.slidesPerGroup);
              v >= d.length && (v = d.length - 1);
              let b = -d[v];
              if (o.normalizeSlideIndex)
                for (let e = 0; e < c.length; e += 1) {
                  let t = -Math.floor(100 * b),
                    i = Math.floor(100 * c[e]),
                    s = Math.floor(100 * c[e + 1]);
                  void 0 !== c[e + 1]
                    ? t >= i && t < s - (s - i) / 2
                      ? (n = e)
                      : t >= i && t < s && (n = e + 1)
                    : t >= i && (n = e);
                }
              if (
                l.initialized &&
                n !== u &&
                ((!l.allowSlideNext &&
                  (h
                    ? b > l.translate && b > l.minTranslate()
                    : b < l.translate && b < l.minTranslate())) ||
                  (!l.allowSlidePrev &&
                    b > l.translate &&
                    b > l.maxTranslate() &&
                    (u || 0) !== n))
              )
                return !1;
              n !== (p || 0) && i && l.emit("beforeSlideChangeStart"),
                l.updateProgress(b),
                (a = n > u ? "next" : n < u ? "prev" : "reset");
              let y = l.virtual && l.params.virtual.enabled;
              if (
                !(y && r) &&
                ((h && -b === l.translate) || (!h && b === l.translate))
              )
                return (
                  l.updateActiveIndex(n),
                  o.autoHeight && l.updateAutoHeight(),
                  l.updateSlidesClasses(),
                  "slide" !== o.effect && l.setTranslate(b),
                  "reset" !== a &&
                    (l.transitionStart(i, a), l.transitionEnd(i, a)),
                  !1
                );
              if (o.cssMode) {
                let e = l.isHorizontal(),
                  i = h ? b : -b;
                if (0 === t)
                  y &&
                    ((l.wrapperEl.style.scrollSnapType = "none"),
                    (l._immediateVirtual = !0)),
                    y &&
                    !l._cssModeVirtualInitialSet &&
                    l.params.initialSlide > 0
                      ? ((l._cssModeVirtualInitialSet = !0),
                        requestAnimationFrame(() => {
                          m[e ? "scrollLeft" : "scrollTop"] = i;
                        }))
                      : (m[e ? "scrollLeft" : "scrollTop"] = i),
                    y &&
                      requestAnimationFrame(() => {
                        (l.wrapperEl.style.scrollSnapType = ""),
                          (l._immediateVirtual = !1);
                      });
                else {
                  if (!l.support.smoothScroll)
                    return (
                      w({
                        swiper: l,
                        targetPosition: i,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  m.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
                }
                return !0;
              }
              let x = O().isSafari;
              return (
                y && !r && x && l.isElement && l.virtual.update(!1, !1, n),
                l.setTransition(t),
                l.setTranslate(b),
                l.updateActiveIndex(n),
                l.updateSlidesClasses(),
                l.emit("beforeTransitionStart", t, s),
                l.transitionStart(i, a),
                0 === t
                  ? l.transitionEnd(i, a)
                  : l.animating ||
                    ((l.animating = !0),
                    l.onSlideToWrapperTransitionEnd ||
                      (l.onSlideToWrapperTransitionEnd = function (e) {
                        l &&
                          !l.destroyed &&
                          e.target === this &&
                          (l.wrapperEl.removeEventListener(
                            "transitionend",
                            l.onSlideToWrapperTransitionEnd
                          ),
                          (l.onSlideToWrapperTransitionEnd = null),
                          delete l.onSlideToWrapperTransitionEnd,
                          l.transitionEnd(i, a));
                      }),
                    l.wrapperEl.addEventListener(
                      "transitionend",
                      l.onSlideToWrapperTransitionEnd
                    )),
                !0
              );
            },
            slideToLoop: function (e, t, i, s) {
              void 0 === e && (e = 0),
                void 0 === i && (i = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let r = this;
              if (r.destroyed) return;
              void 0 === t && (t = r.params.speed);
              let a = r.grid && r.params.grid && r.params.grid.rows > 1,
                l = e;
              if (r.params.loop)
                if (r.virtual && r.params.virtual.enabled)
                  l += r.virtual.slidesBefore;
                else {
                  let e;
                  if (a) {
                    let t = l * r.params.grid.rows;
                    e = r.slides.find(
                      (e) => +e.getAttribute("data-swiper-slide-index") === t
                    ).column;
                  } else e = r.getSlideIndexByData(l);
                  let t = a
                      ? Math.ceil(r.slides.length / r.params.grid.rows)
                      : r.slides.length,
                    { centeredSlides: i } = r.params,
                    n = r.params.slidesPerView;
                  "auto" === n
                    ? (n = r.slidesPerViewDynamic())
                    : ((n = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
                      i && n % 2 == 0 && (n += 1));
                  let o = t - e < n;
                  if (
                    (i && (o = o || e < Math.ceil(n / 2)),
                    s &&
                      i &&
                      "auto" !== r.params.slidesPerView &&
                      !a &&
                      (o = !1),
                    o)
                  ) {
                    let s = i
                      ? e < r.activeIndex
                        ? "prev"
                        : "next"
                      : e - r.activeIndex - 1 < r.params.slidesPerView
                      ? "next"
                      : "prev";
                    r.loopFix({
                      direction: s,
                      slideTo: !0,
                      activeSlideIndex: "next" === s ? e + 1 : e - t + 1,
                      slideRealIndex: "next" === s ? r.realIndex : void 0,
                    });
                  }
                  if (a) {
                    let e = l * r.params.grid.rows;
                    l = r.slides.find(
                      (t) => +t.getAttribute("data-swiper-slide-index") === e
                    ).column;
                  } else l = r.getSlideIndexByData(l);
                }
              return (
                requestAnimationFrame(() => {
                  r.slideTo(l, t, i, s);
                }),
                r
              );
            },
            slideNext: function (e, t, i) {
              void 0 === t && (t = !0);
              let s = this,
                { enabled: r, params: a, animating: l } = s;
              if (!r || s.destroyed) return s;
              void 0 === e && (e = s.params.speed);
              let n = a.slidesPerGroup;
              "auto" === a.slidesPerView &&
                1 === a.slidesPerGroup &&
                a.slidesPerGroupAuto &&
                (n = Math.max(s.slidesPerViewDynamic("current", !0), 1));
              let o = s.activeIndex < a.slidesPerGroupSkip ? 1 : n,
                d = s.virtual && a.virtual.enabled;
              if (a.loop) {
                if (l && !d && a.loopPreventsSliding) return !1;
                if (
                  (s.loopFix({ direction: "next" }),
                  (s._clientLeft = s.wrapperEl.clientLeft),
                  s.activeIndex === s.slides.length - 1 && a.cssMode)
                )
                  return (
                    requestAnimationFrame(() => {
                      s.slideTo(s.activeIndex + o, e, t, i);
                    }),
                    !0
                  );
              }
              return a.rewind && s.isEnd
                ? s.slideTo(0, e, t, i)
                : s.slideTo(s.activeIndex + o, e, t, i);
            },
            slidePrev: function (e, t, i) {
              void 0 === t && (t = !0);
              let s = this,
                {
                  params: r,
                  snapGrid: a,
                  slidesGrid: l,
                  rtlTranslate: n,
                  enabled: o,
                  animating: d,
                } = s;
              if (!o || s.destroyed) return s;
              void 0 === e && (e = s.params.speed);
              let c = s.virtual && r.virtual.enabled;
              if (r.loop) {
                if (d && !c && r.loopPreventsSliding) return !1;
                s.loopFix({ direction: "prev" }),
                  (s._clientLeft = s.wrapperEl.clientLeft);
              }
              function p(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              let u = p(n ? s.translate : -s.translate),
                h = a.map((e) => p(e)),
                m = r.freeMode && r.freeMode.enabled,
                f = a[h.indexOf(u) - 1];
              if (void 0 === f && (r.cssMode || m)) {
                let e;
                a.forEach((t, i) => {
                  u >= t && (e = i);
                }),
                  void 0 !== e && (f = m ? a[e] : a[e > 0 ? e - 1 : e]);
              }
              let g = 0;
              if (
                (void 0 !== f &&
                  ((g = l.indexOf(f)) < 0 && (g = s.activeIndex - 1),
                  "auto" === r.slidesPerView &&
                    1 === r.slidesPerGroup &&
                    r.slidesPerGroupAuto &&
                    (g = Math.max(
                      (g = g - s.slidesPerViewDynamic("previous", !0) + 1),
                      0
                    ))),
                r.rewind && s.isBeginning)
              ) {
                let r =
                  s.params.virtual && s.params.virtual.enabled && s.virtual
                    ? s.virtual.slides.length - 1
                    : s.slides.length - 1;
                return s.slideTo(r, e, t, i);
              }
              return r.loop && 0 === s.activeIndex && r.cssMode
                ? (requestAnimationFrame(() => {
                    s.slideTo(g, e, t, i);
                  }),
                  !0)
                : s.slideTo(g, e, t, i);
            },
            slideReset: function (e, t, i) {
              if ((void 0 === t && (t = !0), !this.destroyed))
                return (
                  void 0 === e && (e = this.params.speed),
                  this.slideTo(this.activeIndex, e, t, i)
                );
            },
            slideToClosest: function (e, t, i, s) {
              if (
                (void 0 === t && (t = !0),
                void 0 === s && (s = 0.5),
                this.destroyed)
              )
                return;
              void 0 === e && (e = this.params.speed);
              let r = this.activeIndex,
                a = Math.min(this.params.slidesPerGroupSkip, r),
                l = a + Math.floor((r - a) / this.params.slidesPerGroup),
                n = this.rtlTranslate ? this.translate : -this.translate;
              if (n >= this.snapGrid[l]) {
                let e = this.snapGrid[l];
                n - e > (this.snapGrid[l + 1] - e) * s &&
                  (r += this.params.slidesPerGroup);
              } else {
                let e = this.snapGrid[l - 1];
                n - e <= (this.snapGrid[l] - e) * s &&
                  (r -= this.params.slidesPerGroup);
              }
              return (
                (r = Math.min(
                  (r = Math.max(r, 0)),
                  this.slidesGrid.length - 1
                )),
                this.slideTo(r, e, t, i)
              );
            },
            slideToClickedSlide: function () {
              let e,
                t = this;
              if (t.destroyed) return;
              let { params: i, slidesEl: s } = t,
                r =
                  "auto" === i.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : i.slidesPerView,
                a = t.getSlideIndexWhenGrid(t.clickedIndex),
                l = t.isElement ? "swiper-slide" : ".".concat(i.slideClass),
                n = t.grid && t.params.grid && t.params.grid.rows > 1;
              if (i.loop) {
                if (t.animating) return;
                (e = parseInt(
                  t.clickedSlide.getAttribute("data-swiper-slide-index"),
                  10
                )),
                  i.centeredSlides
                    ? t.slideToLoop(e)
                    : a >
                      (n
                        ? (t.slides.length - r) / 2 - (t.params.grid.rows - 1)
                        : t.slides.length - r)
                    ? (t.loopFix(),
                      (a = t.getSlideIndex(
                        b(
                          s,
                          ""
                            .concat(l, '[data-swiper-slide-index="')
                            .concat(e, '"]')
                        )[0]
                      )),
                      h(() => {
                        t.slideTo(a);
                      }))
                    : t.slideTo(a);
              } else t.slideTo(a);
            },
          },
          loop: {
            loopCreate: function (e, t) {
              let i = this,
                { params: s, slidesEl: r } = i;
              if (!s.loop || (i.virtual && i.params.virtual.enabled)) return;
              let a = i.grid && s.grid && s.grid.rows > 1;
              s.loopAddBlankSlides &&
                (s.slidesPerGroup > 1 || a) &&
                (() => {
                  let e = b(r, ".".concat(s.slideBlankClass));
                  e.forEach((e) => {
                    e.remove();
                  }),
                    e.length > 0 && (i.recalcSlides(), i.updateSlides());
                })();
              let l = s.slidesPerGroup * (a ? s.grid.rows : 1),
                n = i.slides.length % l != 0,
                o = a && i.slides.length % s.grid.rows != 0,
                d = (e) => {
                  for (let t = 0; t < e; t += 1) {
                    let e = i.isElement
                      ? x("swiper-slide", [s.slideBlankClass])
                      : x("div", [s.slideClass, s.slideBlankClass]);
                    i.slidesEl.append(e);
                  }
                };
              n
                ? s.loopAddBlankSlides
                  ? (d(l - (i.slides.length % l)),
                    i.recalcSlides(),
                    i.updateSlides())
                  : y(
                      "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                    )
                : o &&
                  (s.loopAddBlankSlides
                    ? (d(s.grid.rows - (i.slides.length % s.grid.rows)),
                      i.recalcSlides(),
                      i.updateSlides())
                    : y(
                        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                      )),
                b(r, ".".concat(s.slideClass, ", swiper-slide")).forEach(
                  (e, t) => {
                    e.setAttribute("data-swiper-slide-index", t);
                  }
                ),
                i.loopFix({
                  slideRealIndex: e,
                  direction: s.centeredSlides ? void 0 : "next",
                  initial: t,
                });
            },
            loopFix: function (e) {
              let {
                  slideRealIndex: t,
                  slideTo: i = !0,
                  direction: s,
                  setTranslate: r,
                  activeSlideIndex: a,
                  initial: l,
                  byController: n,
                  byMousewheel: o,
                } = void 0 === e ? {} : e,
                d = this;
              if (!d.params.loop) return;
              d.emit("beforeLoopFix");
              let {
                  slides: c,
                  allowSlidePrev: p,
                  allowSlideNext: u,
                  slidesEl: h,
                  params: m,
                } = d,
                { centeredSlides: f, initialSlide: g } = m;
              if (
                ((d.allowSlidePrev = !0),
                (d.allowSlideNext = !0),
                d.virtual && m.virtual.enabled)
              ) {
                i &&
                  (m.centeredSlides || 0 !== d.snapIndex
                    ? m.centeredSlides && d.snapIndex < m.slidesPerView
                      ? d.slideTo(
                          d.virtual.slides.length + d.snapIndex,
                          0,
                          !1,
                          !0
                        )
                      : d.snapIndex === d.snapGrid.length - 1 &&
                        d.slideTo(d.virtual.slidesBefore, 0, !1, !0)
                    : d.slideTo(d.virtual.slides.length, 0, !1, !0)),
                  (d.allowSlidePrev = p),
                  (d.allowSlideNext = u),
                  d.emit("loopFix");
                return;
              }
              let v = m.slidesPerView;
              "auto" === v
                ? (v = d.slidesPerViewDynamic())
                : ((v = Math.ceil(parseFloat(m.slidesPerView, 10))),
                  f && v % 2 == 0 && (v += 1));
              let w = m.slidesPerGroupAuto ? v : m.slidesPerGroup,
                b = f ? Math.max(w, Math.ceil(v / 2)) : w;
              b % w != 0 && (b += w - (b % w)),
                (d.loopedSlides = b += m.loopAdditionalSlides);
              let x = d.grid && m.grid && m.grid.rows > 1;
              c.length < v + b ||
              ("cards" === d.params.effect && c.length < v + 2 * b)
                ? y(
                    "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
                  )
                : x &&
                  "row" === m.grid.fill &&
                  y(
                    "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
                  );
              let S = [],
                T = [],
                E = x ? Math.ceil(c.length / m.grid.rows) : c.length,
                C = l && E - g < v && !f,
                M = C ? g : d.activeIndex;
              void 0 === a
                ? (a = d.getSlideIndex(
                    c.find((e) => e.classList.contains(m.slideActiveClass))
                  ))
                : (M = a);
              let P = "next" === s || !s,
                k = "prev" === s || !s,
                L = 0,
                O = 0,
                A =
                  (x ? c[a].column : a) +
                  (f && void 0 === r ? -v / 2 + 0.5 : 0);
              if (A < b) {
                L = Math.max(b - A, w);
                for (let e = 0; e < b - A; e += 1) {
                  let t = e - Math.floor(e / E) * E;
                  if (x) {
                    let e = E - t - 1;
                    for (let t = c.length - 1; t >= 0; t -= 1)
                      c[t].column === e && S.push(t);
                  } else S.push(E - t - 1);
                }
              } else if (A + v > E - b) {
                (O = Math.max(A - (E - 2 * b), w)),
                  C && (O = Math.max(O, v - E + g + 1));
                for (let e = 0; e < O; e += 1) {
                  let t = e - Math.floor(e / E) * E;
                  x
                    ? c.forEach((e, i) => {
                        e.column === t && T.push(i);
                      })
                    : T.push(t);
                }
              }
              if (
                ((d.__preventObserver__ = !0),
                requestAnimationFrame(() => {
                  d.__preventObserver__ = !1;
                }),
                "cards" === d.params.effect &&
                  c.length < v + 2 * b &&
                  (T.includes(a) && T.splice(T.indexOf(a), 1),
                  S.includes(a) && S.splice(S.indexOf(a), 1)),
                k &&
                  S.forEach((e) => {
                    (c[e].swiperLoopMoveDOM = !0),
                      h.prepend(c[e]),
                      (c[e].swiperLoopMoveDOM = !1);
                  }),
                P &&
                  T.forEach((e) => {
                    (c[e].swiperLoopMoveDOM = !0),
                      h.append(c[e]),
                      (c[e].swiperLoopMoveDOM = !1);
                  }),
                d.recalcSlides(),
                "auto" === m.slidesPerView
                  ? d.updateSlides()
                  : x &&
                    ((S.length > 0 && k) || (T.length > 0 && P)) &&
                    d.slides.forEach((e, t) => {
                      d.grid.updateSlide(t, e, d.slides);
                    }),
                m.watchSlidesProgress && d.updateSlidesOffset(),
                i)
              ) {
                if (S.length > 0 && k) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[M],
                      t = d.slidesGrid[M + L] - e;
                    o
                      ? d.setTranslate(d.translate - t)
                      : (d.slideTo(M + Math.ceil(L), 0, !1, !0),
                        r &&
                          ((d.touchEventsData.startTranslate =
                            d.touchEventsData.startTranslate - t),
                          (d.touchEventsData.currentTranslate =
                            d.touchEventsData.currentTranslate - t)));
                  } else if (r) {
                    let e = x ? S.length / m.grid.rows : S.length;
                    d.slideTo(d.activeIndex + e, 0, !1, !0),
                      (d.touchEventsData.currentTranslate = d.translate);
                  }
                } else if (T.length > 0 && P)
                  if (void 0 === t) {
                    let e = d.slidesGrid[M],
                      t = d.slidesGrid[M - O] - e;
                    o
                      ? d.setTranslate(d.translate - t)
                      : (d.slideTo(M - O, 0, !1, !0),
                        r &&
                          ((d.touchEventsData.startTranslate =
                            d.touchEventsData.startTranslate - t),
                          (d.touchEventsData.currentTranslate =
                            d.touchEventsData.currentTranslate - t)));
                  } else {
                    let e = x ? T.length / m.grid.rows : T.length;
                    d.slideTo(d.activeIndex - e, 0, !1, !0);
                  }
              }
              if (
                ((d.allowSlidePrev = p),
                (d.allowSlideNext = u),
                d.controller && d.controller.control && !n)
              ) {
                let e = {
                  slideRealIndex: t,
                  direction: s,
                  setTranslate: r,
                  activeSlideIndex: a,
                  byController: !0,
                };
                Array.isArray(d.controller.control)
                  ? d.controller.control.forEach((t) => {
                      !t.destroyed &&
                        t.params.loop &&
                        t.loopFix({
                          ...e,
                          slideTo:
                            t.params.slidesPerView === m.slidesPerView && i,
                        });
                    })
                  : d.controller.control instanceof d.constructor &&
                    d.controller.control.params.loop &&
                    d.controller.control.loopFix({
                      ...e,
                      slideTo:
                        d.controller.control.params.slidesPerView ===
                          m.slidesPerView && i,
                    });
              }
              d.emit("loopFix");
            },
            loopDestroy: function () {
              let { params: e, slidesEl: t } = this;
              if (
                !e.loop ||
                !t ||
                (this.virtual && this.params.virtual.enabled)
              )
                return;
              this.recalcSlides();
              let i = [];
              this.slides.forEach((e) => {
                i[
                  void 0 === e.swiperSlideIndex
                    ? +e.getAttribute("data-swiper-slide-index")
                    : e.swiperSlideIndex
                ] = e;
              }),
                this.slides.forEach((e) => {
                  e.removeAttribute("data-swiper-slide-index");
                }),
                i.forEach((e) => {
                  t.append(e);
                }),
                this.recalcSlides(),
                this.slideTo(this.realIndex, 0);
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              let t = this;
              if (
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              let i =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0),
                (i.style.cursor = "move"),
                (i.style.cursor = e ? "grabbing" : "grab"),
                t.isElement &&
                  requestAnimationFrame(() => {
                    t.__preventObserver__ = !1;
                  });
            },
            unsetGrabCursor: function () {
              let e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = ""),
                e.isElement &&
                  requestAnimationFrame(() => {
                    e.__preventObserver__ = !1;
                  }));
            },
          },
          events: {
            attachEvents: function () {
              let { params: e } = this;
              (this.onTouchStart = B.bind(this)),
                (this.onTouchMove = G.bind(this)),
                (this.onTouchEnd = V.bind(this)),
                (this.onDocumentTouchStart = q.bind(this)),
                e.cssMode && (this.onScroll = R.bind(this)),
                (this.onClick = H.bind(this)),
                (this.onLoad = W.bind(this)),
                X(this, "on");
            },
            detachEvents: function () {
              X(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              let e = this,
                { realIndex: t, initialized: i, params: s, el: r } = e,
                a = s.breakpoints;
              if (!a || (a && 0 === Object.keys(a).length)) return;
              let l = c(),
                n =
                  "window" !== s.breakpointsBase && s.breakpointsBase
                    ? "container"
                    : s.breakpointsBase,
                o =
                  ["window", "container"].includes(s.breakpointsBase) ||
                  !s.breakpointsBase
                    ? e.el
                    : l.querySelector(s.breakpointsBase),
                d = e.getBreakpoint(a, n, o);
              if (!d || e.currentBreakpoint === d) return;
              let p = (d in a ? a[d] : void 0) || e.originalParams,
                u = Y(e, s),
                h = Y(e, p),
                m = e.params.grabCursor,
                f = p.grabCursor,
                v = s.enabled;
              u && !h
                ? (r.classList.remove(
                    "".concat(s.containerModifierClass, "grid"),
                    "".concat(s.containerModifierClass, "grid-column")
                  ),
                  e.emitContainerClasses())
                : !u &&
                  h &&
                  (r.classList.add("".concat(s.containerModifierClass, "grid")),
                  ((p.grid.fill && "column" === p.grid.fill) ||
                    (!p.grid.fill && "column" === s.grid.fill)) &&
                    r.classList.add(
                      "".concat(s.containerModifierClass, "grid-column")
                    ),
                  e.emitContainerClasses()),
                m && !f ? e.unsetGrabCursor() : !m && f && e.setGrabCursor(),
                ["navigation", "pagination", "scrollbar"].forEach((t) => {
                  if (void 0 === p[t]) return;
                  let i = s[t] && s[t].enabled,
                    r = p[t] && p[t].enabled;
                  i && !r && e[t].disable(), !i && r && e[t].enable();
                });
              let w = p.direction && p.direction !== s.direction,
                b = s.loop && (p.slidesPerView !== s.slidesPerView || w),
                y = s.loop;
              w && i && e.changeDirection(), g(e.params, p);
              let x = e.params.enabled,
                S = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                v && !x ? e.disable() : !v && x && e.enable(),
                (e.currentBreakpoint = d),
                e.emit("_beforeBreakpoint", p),
                i &&
                  (b
                    ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                    : !y && S
                    ? (e.loopCreate(t), e.updateSlides())
                    : y && !S && e.loopDestroy()),
                e.emit("breakpoint", p);
            },
            getBreakpoint: function (e, t, i) {
              if (
                (void 0 === t && (t = "window"),
                !e || ("container" === t && !i))
              )
                return;
              let s = !1,
                r = u(),
                a = "window" === t ? r.innerHeight : i.clientHeight,
                l = Object.keys(e).map((e) =>
                  "string" == typeof e && 0 === e.indexOf("@")
                    ? { value: a * parseFloat(e.substr(1)), point: e }
                    : { value: e, point: e }
                );
              l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < l.length; e += 1) {
                let { point: a, value: n } = l[e];
                "window" === t
                  ? r.matchMedia("(min-width: ".concat(n, "px)")).matches &&
                    (s = a)
                  : n <= i.clientWidth && (s = a);
              }
              return s || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              let { isLocked: e, params: t } = this,
                { slidesOffsetBefore: i } = t;
              if (i) {
                let e = this.slides.length - 1,
                  t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                this.isLocked = this.size > t;
              } else this.isLocked = 1 === this.snapGrid.length;
              !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked),
                !0 === t.allowSlidePrev &&
                  (this.allowSlidePrev = !this.isLocked),
                e && e !== this.isLocked && (this.isEnd = !1),
                e !== this.isLocked &&
                  this.emit(this.isLocked ? "lock" : "unlock");
            },
          },
          classes: {
            addClasses: function () {
              let { classNames: e, params: t, rtl: i, el: s, device: r } = this,
                a = (function (e, t) {
                  let i = [];
                  return (
                    e.forEach((e) => {
                      "object" == typeof e
                        ? Object.keys(e).forEach((s) => {
                            e[s] && i.push(t + s);
                          })
                        : "string" == typeof e && i.push(t + e);
                    }),
                    i
                  );
                })(
                  [
                    "initialized",
                    t.direction,
                    { "free-mode": this.params.freeMode && t.freeMode.enabled },
                    { autoheight: t.autoHeight },
                    { rtl: i },
                    { grid: t.grid && t.grid.rows > 1 },
                    {
                      "grid-column":
                        t.grid && t.grid.rows > 1 && "column" === t.grid.fill,
                    },
                    { android: r.android },
                    { ios: r.ios },
                    { "css-mode": t.cssMode },
                    { centered: t.cssMode && t.centeredSlides },
                    { "watch-progress": t.watchSlidesProgress },
                  ],
                  t.containerModifierClass
                );
              e.push(...a), s.classList.add(...e), this.emitContainerClasses();
            },
            removeClasses: function () {
              let { el: e, classNames: t } = this;
              e &&
                "string" != typeof e &&
                (e.classList.remove(...t), this.emitContainerClasses());
            },
          },
        },
        Z = {};
      class $ {
        getDirectionLabel(e) {
          return this.isHorizontal()
            ? e
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[e];
        }
        getSlideIndex(e) {
          let { slidesEl: t, params: i } = this,
            s = T(b(t, ".".concat(i.slideClass, ", swiper-slide"))[0]);
          return T(e) - s;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.find(
              (t) => +t.getAttribute("data-swiper-slide-index") === e
            )
          );
        }
        getSlideIndexWhenGrid(e) {
          return (
            this.grid &&
              this.params.grid &&
              this.params.grid.rows > 1 &&
              ("column" === this.params.grid.fill
                ? (e = Math.floor(e / this.params.grid.rows))
                : "row" === this.params.grid.fill &&
                  (e %= Math.ceil(this.slides.length / this.params.grid.rows))),
            e
          );
        }
        recalcSlides() {
          let { slidesEl: e, params: t } = this;
          this.slides = b(e, ".".concat(t.slideClass, ", swiper-slide"));
        }
        enable() {
          this.enabled ||
            ((this.enabled = !0),
            this.params.grabCursor && this.setGrabCursor(),
            this.emit("enable"));
        }
        disable() {
          this.enabled &&
            ((this.enabled = !1),
            this.params.grabCursor && this.unsetGrabCursor(),
            this.emit("disable"));
        }
        setProgress(e, t) {
          e = Math.min(Math.max(e, 0), 1);
          let i = this.minTranslate(),
            s = (this.maxTranslate() - i) * e + i;
          this.translateTo(s, void 0 === t ? 0 : t),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        }
        emitContainerClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          let t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = [];
          e.slides.forEach((i) => {
            let s = e.getSlideClasses(i);
            t.push({ slideEl: i, classNames: s }), e.emit("_slideClass", i, s);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          let {
              params: i,
              slides: s,
              slidesGrid: r,
              slidesSizesGrid: a,
              size: l,
              activeIndex: n,
            } = this,
            o = 1;
          if ("number" == typeof i.slidesPerView) return i.slidesPerView;
          if (i.centeredSlides) {
            let e,
              t = s[n] ? Math.ceil(s[n].swiperSlideSize) : 0;
            for (let i = n + 1; i < s.length; i += 1)
              s[i] &&
                !e &&
                ((t += Math.ceil(s[i].swiperSlideSize)),
                (o += 1),
                t > l && (e = !0));
            for (let i = n - 1; i >= 0; i -= 1)
              s[i] &&
                !e &&
                ((t += s[i].swiperSlideSize), (o += 1), t > l && (e = !0));
          } else if ("current" === e)
            for (let e = n + 1; e < s.length; e += 1)
              (t ? r[e] + a[e] - r[n] < l : r[e] - r[n] < l) && (o += 1);
          else for (let e = n - 1; e >= 0; e -= 1) r[n] - r[e] < l && (o += 1);
          return o;
        }
        update() {
          let e,
            t = this;
          if (!t || t.destroyed) return;
          let { snapGrid: i, params: s } = t;
          function r() {
            let e = Math.min(
              Math.max(
                t.rtlTranslate ? -1 * t.translate : t.translate,
                t.maxTranslate()
              ),
              t.minTranslate()
            );
            t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
          }
          if (
            (s.breakpoints && t.setBreakpoint(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete && z(t, e);
            }),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            s.freeMode && s.freeMode.enabled && !s.cssMode)
          )
            r(), s.autoHeight && t.updateAutoHeight();
          else {
            if (
              ("auto" === s.slidesPerView || s.slidesPerView > 1) &&
              t.isEnd &&
              !s.centeredSlides
            ) {
              let i =
                t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
              e = t.slideTo(i.length - 1, 0, !1, !0);
            } else e = t.slideTo(t.activeIndex, 0, !1, !0);
            e || r();
          }
          s.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
            t.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          let i = this.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (this.el.classList.remove(
                "".concat(this.params.containerModifierClass).concat(i)
              ),
              this.el.classList.add(
                "".concat(this.params.containerModifierClass).concat(e)
              ),
              this.emitContainerClasses(),
              (this.params.direction = e),
              this.slides.forEach((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              this.emit("changeDirection"),
              t && this.update()),
            this
          );
        }
        changeLanguageDirection(e) {
          (!this.rtl || "rtl" !== e) &&
            (this.rtl || "ltr" !== e) &&
            ((this.rtl = "rtl" === e),
            (this.rtlTranslate =
              "horizontal" === this.params.direction && this.rtl),
            this.rtl
              ? (this.el.classList.add(
                  "".concat(this.params.containerModifierClass, "rtl")
                ),
                (this.el.dir = "rtl"))
              : (this.el.classList.remove(
                  "".concat(this.params.containerModifierClass, "rtl")
                ),
                (this.el.dir = "ltr")),
            this.update());
        }
        mount(e) {
          let t = this;
          if (t.mounted) return !0;
          let i = e || t.params.el;
          if (("string" == typeof i && (i = document.querySelector(i)), !i))
            return !1;
          (i.swiper = t),
            i.parentNode &&
              i.parentNode.host &&
              i.parentNode.host.nodeName ===
                t.params.swiperElementNodeName.toUpperCase() &&
              (t.isElement = !0);
          let s = () =>
              ".".concat(
                (t.params.wrapperClass || "").trim().split(" ").join(".")
              ),
            r =
              i && i.shadowRoot && i.shadowRoot.querySelector
                ? i.shadowRoot.querySelector(s())
                : b(i, s())[0];
          return (
            !r &&
              t.params.createElements &&
              ((r = x("div", t.params.wrapperClass)),
              i.append(r),
              b(i, ".".concat(t.params.slideClass)).forEach((e) => {
                r.append(e);
              })),
            Object.assign(t, {
              el: i,
              wrapperEl: r,
              slidesEl:
                t.isElement && !i.parentNode.host.slideSlots
                  ? i.parentNode.host
                  : r,
              hostEl: t.isElement ? i.parentNode.host : i,
              mounted: !0,
              rtl: "rtl" === i.dir.toLowerCase() || "rtl" === S(i, "direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === i.dir.toLowerCase() || "rtl" === S(i, "direction")),
              wrongRTL: "-webkit-box" === S(r, "display"),
            }),
            !0
          );
        }
        init(e) {
          let t = this;
          if (t.initialized || !1 === t.mount(e)) return t;
          t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(void 0, !0),
            t.attachEvents();
          let i = [...t.el.querySelectorAll('[loading="lazy"]')];
          return (
            t.isElement &&
              i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            i.forEach((e) => {
              e.complete
                ? z(t, e)
                : e.addEventListener("load", (e) => {
                    z(t, e.target);
                  });
            }),
            j(t),
            (t.initialized = !0),
            j(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          let i = this,
            { params: s, el: r, wrapperEl: a, slides: l } = i;
          if (void 0 === i.params || i.destroyed) return null;
          (i.emit("beforeDestroy"),
          (i.initialized = !1),
          i.detachEvents(),
          s.loop && i.loopDestroy(),
          t &&
            (i.removeClasses(),
            r && "string" != typeof r && r.removeAttribute("style"),
            a && a.removeAttribute("style"),
            l &&
              l.length &&
              l.forEach((e) => {
                e.classList.remove(
                  s.slideVisibleClass,
                  s.slideFullyVisibleClass,
                  s.slideActiveClass,
                  s.slideNextClass,
                  s.slidePrevClass
                ),
                  e.removeAttribute("style"),
                  e.removeAttribute("data-swiper-slide-index");
              })),
          i.emit("destroy"),
          Object.keys(i.eventsListeners).forEach((e) => {
            i.off(e);
          }),
          !1 !== e) &&
            (i.el && "string" != typeof i.el && (i.el.swiper = null),
            Object.keys(i).forEach((e) => {
              try {
                i[e] = null;
              } catch (e) {}
              try {
                delete i[e];
              } catch (e) {}
            }));
          return (i.destroyed = !0), null;
        }
        static extendDefaults(e) {
          g(Z, e);
        }
        static get extendedDefaults() {
          return Z;
        }
        static get defaults() {
          return U;
        }
        static installModule(e) {
          $.prototype.__modules__ || ($.prototype.__modules__ = []);
          let t = $.prototype.__modules__;
          "function" == typeof e && 0 > t.indexOf(e) && t.push(e);
        }
        static use(e) {
          return (
            Array.isArray(e)
              ? e.forEach((e) => $.installModule(e))
              : $.installModule(e),
            $
          );
        }
        constructor() {
          let e, t;
          for (var i = arguments.length, s = Array(i), r = 0; r < i; r++)
            s[r] = arguments[r];
          1 === s.length &&
          s[0].constructor &&
          "Object" === Object.prototype.toString.call(s[0]).slice(8, -1)
            ? (t = s[0])
            : ([e, t] = s),
            t || (t = {}),
            (t = g({}, t)),
            e && !t.el && (t.el = e);
          let a = c();
          if (
            t.el &&
            "string" == typeof t.el &&
            a.querySelectorAll(t.el).length > 1
          ) {
            let e = [];
            return (
              a.querySelectorAll(t.el).forEach((i) => {
                let s = g({}, t, { el: i });
                e.push(new $(s));
              }),
              e
            );
          }
          let l = this;
          (l.__swiper__ = !0),
            (l.support = k()),
            (l.device = L({ userAgent: t.userAgent })),
            (l.browser = O()),
            (l.eventsListeners = {}),
            (l.eventsAnyListeners = []),
            (l.modules = [...l.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              l.modules.push(...t.modules);
          let n = {};
          l.modules.forEach((e) => {
            e({
              params: t,
              swiper: l,
              extendParams: (function (e, t) {
                return function (i) {
                  void 0 === i && (i = {});
                  let s = Object.keys(i)[0],
                    r = i[s];
                  return "object" != typeof r || null === r
                    ? void g(t, i)
                    : (!0 === e[s] && (e[s] = { enabled: !0 }),
                      "navigation" === s &&
                        e[s] &&
                        e[s].enabled &&
                        !e[s].prevEl &&
                        !e[s].nextEl &&
                        (e[s].auto = !0),
                      ["pagination", "scrollbar"].indexOf(s) >= 0 &&
                        e[s] &&
                        e[s].enabled &&
                        !e[s].el &&
                        (e[s].auto = !0),
                      s in e && "enabled" in r)
                    ? void ("object" == typeof e[s] &&
                        !("enabled" in e[s]) &&
                        (e[s].enabled = !0),
                      !e[s] && (e[s] = { enabled: !1 }),
                      g(t, i))
                    : void g(t, i);
                };
              })(t, n),
              on: l.on.bind(l),
              once: l.once.bind(l),
              off: l.off.bind(l),
              emit: l.emit.bind(l),
            });
          });
          let o = g({}, U, n);
          return (
            (l.params = g({}, o, Z, t)),
            (l.originalParams = g({}, l.params)),
            (l.passedParams = g({}, t)),
            l.params &&
              l.params.on &&
              Object.keys(l.params.on).forEach((e) => {
                l.on(e, l.params.on[e]);
              }),
            l.params && l.params.onAny && l.onAny(l.params.onAny),
            Object.assign(l, {
              enabled: l.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === l.params.direction,
              isVertical: () => "vertical" === l.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return 8388608 * Math.trunc(this.translate / 8388608);
              },
              allowSlideNext: l.params.allowSlideNext,
              allowSlidePrev: l.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: l.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null,
              },
              allowClick: !0,
              allowTouchMove: l.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            l.emit("_swiper"),
            l.params.init && l.init(),
            l
          );
        }
      }
      Object.keys(K).forEach((e) => {
        Object.keys(K[e]).forEach((t) => {
          $.prototype[t] = K[e][t];
        });
      }),
        $.use([
          function (e) {
            let { swiper: t, on: i, emit: s } = e,
              r = u(),
              a = null,
              l = null,
              n = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (s("beforeResize"), s("resize"));
              },
              o = () => {
                t && !t.destroyed && t.initialized && s("orientationchange");
              };
            i("init", () => {
              if (t.params.resizeObserver && void 0 !== r.ResizeObserver)
                return void (
                  t &&
                  !t.destroyed &&
                  t.initialized &&
                  (a = new ResizeObserver((e) => {
                    l = r.requestAnimationFrame(() => {
                      let { width: i, height: s } = t,
                        r = i,
                        a = s;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: i,
                          contentRect: s,
                          target: l,
                        } = e;
                        (l && l !== t.el) ||
                          ((r = s ? s.width : (i[0] || i).inlineSize),
                          (a = s ? s.height : (i[0] || i).blockSize));
                      }),
                        (r !== i || a !== s) && n();
                    });
                  })).observe(t.el)
                );
              r.addEventListener("resize", n),
                r.addEventListener("orientationchange", o);
            }),
              i("destroy", () => {
                l && r.cancelAnimationFrame(l),
                  a && a.unobserve && t.el && (a.unobserve(t.el), (a = null)),
                  r.removeEventListener("resize", n),
                  r.removeEventListener("orientationchange", o);
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s, emit: r } = e,
              a = [],
              l = u(),
              n = function (e, i) {
                void 0 === i && (i = {});
                let s = new (l.MutationObserver || l.WebkitMutationObserver)(
                  (e) => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) return void r("observerUpdate", e[0]);
                    let i = function () {
                      r("observerUpdate", e[0]);
                    };
                    l.requestAnimationFrame
                      ? l.requestAnimationFrame(i)
                      : l.setTimeout(i, 0);
                  }
                );
                s.observe(e, {
                  attributes: void 0 === i.attributes || i.attributes,
                  childList:
                    t.isElement || (void 0 === i.childList || i).childList,
                  characterData: void 0 === i.characterData || i.characterData,
                }),
                  a.push(s);
              };
            i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              s("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    let e = E(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) n(e[t]);
                  }
                  n(t.hostEl, { childList: t.params.observeSlideChildren }),
                    n(t.wrapperEl, { attributes: !1 });
                }
              }),
              s("destroy", () => {
                a.forEach((e) => {
                  e.disconnect();
                }),
                  a.splice(0, a.length);
              });
          },
        ]);
      let J = [
        "eventsPrefix",
        "injectStyles",
        "injectStylesUrls",
        "modules",
        "init",
        "_direction",
        "oneWayMovement",
        "swiperElementNodeName",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "breakpointsBase",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_loop",
        "loopAdditionalSlides",
        "loopAddBlankSlides",
        "loopPreventsSliding",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideActiveClass",
        "slideVisibleClass",
        "slideFullyVisibleClass",
        "slideNextClass",
        "slidePrevClass",
        "slideBlankClass",
        "wrapperClass",
        "lazyPreloaderClass",
        "lazyPreloadPrevNext",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
        "control",
      ];
      function Q(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1) &&
          !e.__swiper__
        );
      }
      function ee(e, t) {
        let i = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => 0 > i.indexOf(e))
          .forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : Q(t[i]) && Q(e[i]) && Object.keys(t[i]).length > 0
              ? t[i].__swiper__
                ? (e[i] = t[i])
                : ee(e[i], t[i])
              : (e[i] = t[i]);
          });
      }
      function et(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            void 0 === e.navigation.nextEl &&
            void 0 === e.navigation.prevEl
        );
      }
      function ei(e) {
        return (
          void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
        );
      }
      function es(e) {
        return (
          void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
        );
      }
      function er(e) {
        void 0 === e && (e = "");
        let t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          i = [];
        return (
          t.forEach((e) => {
            0 > i.indexOf(e) && i.push(e);
          }),
          i.join(" ")
        );
      }
      function ea() {
        return (ea = Object.assign.bind()).apply(this, arguments);
      }
      function el(e) {
        return (
          e.type &&
          e.type.displayName &&
          e.type.displayName.includes("SwiperSlide")
        );
      }
      function en(e, t) {
        return "undefined" == typeof window
          ? (0, l.useEffect)(e, t)
          : (0, l.useLayoutEffect)(e, t);
      }
      let eo = (0, l.createContext)(null),
        ed = (0, l.createContext)(null),
        ec = (0, l.forwardRef)(function (e, t) {
          var i;
          let {
              className: s,
              tag: r = "div",
              wrapperTag: a = "div",
              children: n,
              onSwiper: o,
              ...d
            } = void 0 === e ? {} : e,
            c = !1,
            [p, u] = (0, l.useState)("swiper"),
            [h, m] = (0, l.useState)(null),
            [f, g] = (0, l.useState)(!1),
            v = (0, l.useRef)(!1),
            w = (0, l.useRef)(null),
            b = (0, l.useRef)(null),
            y = (0, l.useRef)(null),
            x = (0, l.useRef)(null),
            S = (0, l.useRef)(null),
            T = (0, l.useRef)(null),
            E = (0, l.useRef)(null),
            C = (0, l.useRef)(null),
            {
              params: M,
              passedParams: k,
              rest: L,
              events: O,
            } = (function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = !0);
              let i = { on: {} },
                s = {},
                r = {};
              ee(i, U), (i._emitClasses = !0), (i.init = !1);
              let a = {},
                l = J.map((e) => e.replace(/_/, ""));
              return (
                Object.keys(Object.assign({}, e)).forEach((n) => {
                  void 0 !== e[n] &&
                    (l.indexOf(n) >= 0
                      ? Q(e[n])
                        ? ((i[n] = {}),
                          (r[n] = {}),
                          ee(i[n], e[n]),
                          ee(r[n], e[n]))
                        : ((i[n] = e[n]), (r[n] = e[n]))
                      : 0 === n.search(/on[A-Z]/) && "function" == typeof e[n]
                      ? t
                        ? (s[
                            "".concat(n[2].toLowerCase()).concat(n.substr(3))
                          ] = e[n])
                        : (i.on[
                            "".concat(n[2].toLowerCase()).concat(n.substr(3))
                          ] = e[n])
                      : (a[n] = e[n]));
                }),
                ["navigation", "pagination", "scrollbar"].forEach((e) => {
                  !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e];
                }),
                { params: i, passedParams: r, rest: a, events: s }
              );
            })(d),
            { slides: A, slots: I } = (function (e) {
              let t = [],
                i = {
                  "container-start": [],
                  "container-end": [],
                  "wrapper-start": [],
                  "wrapper-end": [],
                };
              return (
                l.default.Children.toArray(e).forEach((e) => {
                  if (el(e)) t.push(e);
                  else if (e.props && e.props.slot && i[e.props.slot])
                    i[e.props.slot].push(e);
                  else if (e.props && e.props.children) {
                    let s = (function e(t) {
                      let i = [];
                      return (
                        l.default.Children.toArray(t).forEach((t) => {
                          el(t)
                            ? i.push(t)
                            : t.props &&
                              t.props.children &&
                              e(t.props.children).forEach((e) => i.push(e));
                        }),
                        i
                      );
                    })(e.props.children);
                    s.length > 0
                      ? s.forEach((e) => t.push(e))
                      : i["container-end"].push(e);
                  } else i["container-end"].push(e);
                }),
                { slides: t, slots: i }
              );
            })(n),
            z = () => {
              g(!f);
            };
          Object.assign(M.on, {
            _containerClasses(e, t) {
              u(t);
            },
          });
          let _ = () => {
            Object.assign(M.on, O), (c = !0);
            let e = { ...M };
            if (
              (delete e.wrapperClass,
              (b.current = new $(e)),
              b.current.virtual && b.current.params.virtual.enabled)
            ) {
              b.current.virtual.slides = A;
              let e = {
                cache: !1,
                slides: A,
                renderExternal: m,
                renderExternalUpdate: !1,
              };
              ee(b.current.params.virtual, e),
                ee(b.current.originalParams.virtual, e);
            }
          };
          return (
            w.current || _(),
            b.current && b.current.on("_beforeBreakpoint", z),
            (0, l.useEffect)(() => () => {
              b.current && b.current.off("_beforeBreakpoint", z);
            }),
            (0, l.useEffect)(() => {
              !v.current &&
                b.current &&
                (b.current.emitSlidesClasses(), (v.current = !0));
            }),
            en(() => {
              if ((t && (t.current = w.current), w.current))
                return (
                  b.current.destroyed && _(),
                  !(function (e, t) {
                    let {
                      el: i,
                      nextEl: s,
                      prevEl: r,
                      paginationEl: a,
                      scrollbarEl: l,
                      swiper: n,
                    } = e;
                    et(t) &&
                      s &&
                      r &&
                      ((n.params.navigation.nextEl = s),
                      (n.originalParams.navigation.nextEl = s),
                      (n.params.navigation.prevEl = r),
                      (n.originalParams.navigation.prevEl = r)),
                      ei(t) &&
                        a &&
                        ((n.params.pagination.el = a),
                        (n.originalParams.pagination.el = a)),
                      es(t) &&
                        l &&
                        ((n.params.scrollbar.el = l),
                        (n.originalParams.scrollbar.el = l)),
                      n.init(i);
                  })(
                    {
                      el: w.current,
                      nextEl: S.current,
                      prevEl: T.current,
                      paginationEl: E.current,
                      scrollbarEl: C.current,
                      swiper: b.current,
                    },
                    M
                  ),
                  o && !b.current.destroyed && o(b.current),
                  () => {
                    b.current &&
                      !b.current.destroyed &&
                      b.current.destroy(!0, !1);
                  }
                );
            }, []),
            en(() => {
              !c &&
                O &&
                b.current &&
                Object.keys(O).forEach((e) => {
                  b.current.on(e, O[e]);
                });
              let e = (function (e, t, i, s, r) {
                let a = [];
                if (!t) return a;
                let l = (e) => {
                  0 > a.indexOf(e) && a.push(e);
                };
                if (i && s) {
                  let e = s.map(r),
                    t = i.map(r);
                  e.join("") !== t.join("") && l("children"),
                    s.length !== i.length && l("children");
                }
                return (
                  J.filter((e) => "_" === e[0])
                    .map((e) => e.replace(/_/, ""))
                    .forEach((i) => {
                      if (i in e && i in t)
                        if (Q(e[i]) && Q(t[i])) {
                          let s = Object.keys(e[i]),
                            r = Object.keys(t[i]);
                          s.length !== r.length
                            ? l(i)
                            : (s.forEach((s) => {
                                e[i][s] !== t[i][s] && l(i);
                              }),
                              r.forEach((s) => {
                                e[i][s] !== t[i][s] && l(i);
                              }));
                        } else e[i] !== t[i] && l(i);
                    }),
                  a
                );
              })(k, y.current, A, x.current, (e) => e.key);
              return (
                (y.current = k),
                (x.current = A),
                e.length &&
                  b.current &&
                  !b.current.destroyed &&
                  (function (e) {
                    let t,
                      i,
                      s,
                      r,
                      a,
                      l,
                      n,
                      o,
                      {
                        swiper: d,
                        slides: c,
                        passedParams: p,
                        changedParams: u,
                        nextEl: h,
                        prevEl: m,
                        scrollbarEl: f,
                        paginationEl: g,
                      } = e,
                      v = u.filter(
                        (e) =>
                          "children" !== e &&
                          "direction" !== e &&
                          "wrapperClass" !== e
                      ),
                      {
                        params: w,
                        pagination: b,
                        navigation: y,
                        scrollbar: x,
                        virtual: S,
                        thumbs: T,
                      } = d;
                    u.includes("thumbs") &&
                      p.thumbs &&
                      p.thumbs.swiper &&
                      !p.thumbs.swiper.destroyed &&
                      w.thumbs &&
                      (!w.thumbs.swiper || w.thumbs.swiper.destroyed) &&
                      (t = !0),
                      u.includes("controller") &&
                        p.controller &&
                        p.controller.control &&
                        w.controller &&
                        !w.controller.control &&
                        (i = !0),
                      u.includes("pagination") &&
                        p.pagination &&
                        (p.pagination.el || g) &&
                        (w.pagination || !1 === w.pagination) &&
                        b &&
                        !b.el &&
                        (s = !0),
                      u.includes("scrollbar") &&
                        p.scrollbar &&
                        (p.scrollbar.el || f) &&
                        (w.scrollbar || !1 === w.scrollbar) &&
                        x &&
                        !x.el &&
                        (r = !0),
                      u.includes("navigation") &&
                        p.navigation &&
                        (p.navigation.prevEl || m) &&
                        (p.navigation.nextEl || h) &&
                        (w.navigation || !1 === w.navigation) &&
                        y &&
                        !y.prevEl &&
                        !y.nextEl &&
                        (a = !0);
                    let E = (e) => {
                      d[e] &&
                        (d[e].destroy(),
                        "navigation" === e
                          ? (d.isElement &&
                              (d[e].prevEl.remove(), d[e].nextEl.remove()),
                            (w[e].prevEl = void 0),
                            (w[e].nextEl = void 0),
                            (d[e].prevEl = void 0),
                            (d[e].nextEl = void 0))
                          : (d.isElement && d[e].el.remove(),
                            (w[e].el = void 0),
                            (d[e].el = void 0)));
                    };
                    u.includes("loop") &&
                      d.isElement &&
                      (w.loop && !p.loop
                        ? (l = !0)
                        : !w.loop && p.loop
                        ? (n = !0)
                        : (o = !0)),
                      v.forEach((e) => {
                        if (Q(w[e]) && Q(p[e]))
                          Object.assign(w[e], p[e]),
                            ("navigation" === e ||
                              "pagination" === e ||
                              "scrollbar" === e) &&
                              "enabled" in p[e] &&
                              !p[e].enabled &&
                              E(e);
                        else {
                          let t = p[e];
                          (!0 === t || !1 === t) &&
                          ("navigation" === e ||
                            "pagination" === e ||
                            "scrollbar" === e)
                            ? !1 === t && E(e)
                            : (w[e] = p[e]);
                        }
                      }),
                      v.includes("controller") &&
                        !i &&
                        d.controller &&
                        d.controller.control &&
                        w.controller &&
                        w.controller.control &&
                        (d.controller.control = w.controller.control),
                      u.includes("children") && c && S && w.virtual.enabled
                        ? ((S.slides = c), S.update(!0))
                        : u.includes("virtual") &&
                          S &&
                          w.virtual.enabled &&
                          (c && (S.slides = c), S.update(!0)),
                      u.includes("children") && c && w.loop && (o = !0),
                      t && T.init() && T.update(!0),
                      i && (d.controller.control = w.controller.control),
                      s &&
                        (d.isElement &&
                          (!g || "string" == typeof g) &&
                          ((g = document.createElement("div")).classList.add(
                            "swiper-pagination"
                          ),
                          g.part.add("pagination"),
                          d.el.appendChild(g)),
                        g && (w.pagination.el = g),
                        b.init(),
                        b.render(),
                        b.update()),
                      r &&
                        (d.isElement &&
                          (!f || "string" == typeof f) &&
                          ((f = document.createElement("div")).classList.add(
                            "swiper-scrollbar"
                          ),
                          f.part.add("scrollbar"),
                          d.el.appendChild(f)),
                        f && (w.scrollbar.el = f),
                        x.init(),
                        x.updateSize(),
                        x.setTranslate()),
                      a &&
                        (d.isElement &&
                          ((h && "string" != typeof h) ||
                            ((h = document.createElement("div")).classList.add(
                              "swiper-button-next"
                            ),
                            P(h, d.hostEl.constructor.nextButtonSvg),
                            h.part.add("button-next"),
                            d.el.appendChild(h)),
                          (m && "string" != typeof m) ||
                            ((m = document.createElement("div")).classList.add(
                              "swiper-button-prev"
                            ),
                            P(m, d.hostEl.constructor.prevButtonSvg),
                            m.part.add("button-prev"),
                            d.el.appendChild(m))),
                        h && (w.navigation.nextEl = h),
                        m && (w.navigation.prevEl = m),
                        y.init(),
                        y.update()),
                      u.includes("allowSlideNext") &&
                        (d.allowSlideNext = p.allowSlideNext),
                      u.includes("allowSlidePrev") &&
                        (d.allowSlidePrev = p.allowSlidePrev),
                      u.includes("direction") &&
                        d.changeDirection(p.direction, !1),
                      (l || o) && d.loopDestroy(),
                      (n || o) && d.loopCreate(),
                      d.update();
                  })({
                    swiper: b.current,
                    slides: A,
                    passedParams: k,
                    changedParams: e,
                    nextEl: S.current,
                    prevEl: T.current,
                    scrollbarEl: C.current,
                    paginationEl: E.current,
                  }),
                () => {
                  O &&
                    b.current &&
                    Object.keys(O).forEach((e) => {
                      b.current.off(e, O[e]);
                    });
                }
              );
            }),
            en(() => {
              var e;
              (e = b.current) &&
                !e.destroyed &&
                e.params.virtual &&
                (!e.params.virtual || e.params.virtual.enabled) &&
                (e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.emit("_virtualUpdated"),
                e.parallax &&
                  e.params.parallax &&
                  e.params.parallax.enabled &&
                  e.parallax.setTranslate());
            }, [h]),
            l.default.createElement(
              r,
              ea(
                {
                  ref: w,
                  className: er("".concat(p).concat(s ? " ".concat(s) : "")),
                },
                L
              ),
              l.default.createElement(
                ed.Provider,
                { value: b.current },
                I["container-start"],
                l.default.createElement(
                  a,
                  {
                    className: (void 0 === (i = M.wrapperClass) && (i = ""), i)
                      ? i.includes("swiper-wrapper")
                        ? i
                        : "swiper-wrapper ".concat(i)
                      : "swiper-wrapper",
                  },
                  I["wrapper-start"],
                  M.virtual
                    ? (function (e, t, i) {
                        if (!i) return null;
                        let s = (e) => {
                            let i = e;
                            return (
                              e < 0
                                ? (i = t.length + e)
                                : i >= t.length && (i -= t.length),
                              i
                            );
                          },
                          r = e.isHorizontal()
                            ? {
                                [e.rtlTranslate ? "right" : "left"]: "".concat(
                                  i.offset,
                                  "px"
                                ),
                              }
                            : { top: "".concat(i.offset, "px") },
                          { from: a, to: n } = i,
                          o = e.params.loop ? -t.length : 0,
                          d = e.params.loop ? 2 * t.length : t.length,
                          c = [];
                        for (let e = o; e < d; e += 1)
                          e >= a && e <= n && c.push(t[s(e)]);
                        return c.map((t, i) =>
                          l.default.cloneElement(t, {
                            swiper: e,
                            style: r,
                            key:
                              t.props.virtualIndex ||
                              t.key ||
                              "slide-".concat(i),
                          })
                        );
                      })(b.current, A, h)
                    : A.map((e, t) =>
                        l.default.cloneElement(e, {
                          swiper: b.current,
                          swiperSlideIndex: t,
                        })
                      ),
                  I["wrapper-end"]
                ),
                et(M) &&
                  l.default.createElement(
                    l.default.Fragment,
                    null,
                    l.default.createElement("div", {
                      ref: T,
                      className: "swiper-button-prev",
                    }),
                    l.default.createElement("div", {
                      ref: S,
                      className: "swiper-button-next",
                    })
                  ),
                es(M) &&
                  l.default.createElement("div", {
                    ref: C,
                    className: "swiper-scrollbar",
                  }),
                ei(M) &&
                  l.default.createElement("div", {
                    ref: E,
                    className: "swiper-pagination",
                  }),
                I["container-end"]
              )
            )
          );
        });
      ec.displayName = "Swiper";
      let ep = (0, l.forwardRef)(function (e, t) {
        let {
            tag: i = "div",
            children: s,
            className: r = "",
            swiper: a,
            zoom: n,
            lazy: o,
            virtualIndex: d,
            swiperSlideIndex: c,
            ...p
          } = void 0 === e ? {} : e,
          u = (0, l.useRef)(null),
          [h, m] = (0, l.useState)("swiper-slide"),
          [f, g] = (0, l.useState)(!1);
        function v(e, t, i) {
          t === u.current && m(i);
        }
        en(() => {
          if (
            (void 0 !== c && (u.current.swiperSlideIndex = c),
            t && (t.current = u.current),
            u.current && a)
          ) {
            if (a.destroyed) {
              "swiper-slide" !== h && m("swiper-slide");
              return;
            }
            return (
              a.on("_slideClass", v),
              () => {
                a && a.off("_slideClass", v);
              }
            );
          }
        }),
          en(() => {
            a && u.current && !a.destroyed && m(a.getSlideClasses(u.current));
          }, [a]);
        let w = {
            isActive: h.indexOf("swiper-slide-active") >= 0,
            isVisible: h.indexOf("swiper-slide-visible") >= 0,
            isPrev: h.indexOf("swiper-slide-prev") >= 0,
            isNext: h.indexOf("swiper-slide-next") >= 0,
          },
          b = () => ("function" == typeof s ? s(w) : s);
        return l.default.createElement(
          i,
          ea(
            {
              ref: u,
              className: er("".concat(h).concat(r ? " ".concat(r) : "")),
              "data-swiper-slide-index": d,
              onLoad: () => {
                g(!0);
              },
            },
            p
          ),
          n &&
            l.default.createElement(
              eo.Provider,
              { value: w },
              l.default.createElement(
                "div",
                {
                  className: "swiper-zoom-container",
                  "data-swiper-zoom": "number" == typeof n ? n : void 0,
                },
                b(),
                o &&
                  !f &&
                  l.default.createElement("div", {
                    className: "swiper-lazy-preloader",
                  })
              )
            ),
          !n &&
            l.default.createElement(
              eo.Provider,
              { value: w },
              b(),
              o &&
                !f &&
                l.default.createElement("div", {
                  className: "swiper-lazy-preloader",
                })
            )
        );
      });
      function eu(e) {
        return (
          void 0 === e && (e = ""),
          ".".concat(
            e
              .trim()
              .replace(/([\.:!+\/()[\]])/g, "\\$1")
              .replace(/ /g, ".")
          )
        );
      }
      function eh(e) {
        let t,
          { swiper: i, extendParams: s, on: r, emit: a } = e,
          l = "swiper-pagination";
        s({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: "".concat(l, "-bullet"),
            bulletActiveClass: "".concat(l, "-bullet-active"),
            modifierClass: "".concat(l, "-"),
            currentClass: "".concat(l, "-current"),
            totalClass: "".concat(l, "-total"),
            hiddenClass: "".concat(l, "-hidden"),
            progressbarFillClass: "".concat(l, "-progressbar-fill"),
            progressbarOppositeClass: "".concat(l, "-progressbar-opposite"),
            clickableClass: "".concat(l, "-clickable"),
            lockClass: "".concat(l, "-lock"),
            horizontalClass: "".concat(l, "-horizontal"),
            verticalClass: "".concat(l, "-vertical"),
            paginationDisabledClass: "".concat(l, "-disabled"),
          },
        }),
          (i.pagination = { el: null, bullets: [] });
        let n = 0;
        function o() {
          return (
            !i.params.pagination.el ||
            !i.pagination.el ||
            (Array.isArray(i.pagination.el) && 0 === i.pagination.el.length)
          );
        }
        function d(e, t) {
          let { bulletActiveClass: s } = i.params.pagination;
          e &&
            (e =
              e[
                "".concat("prev" === t ? "previous" : "next", "ElementSibling")
              ]) &&
            (e.classList.add("".concat(s, "-").concat(t)),
            (e =
              e[
                "".concat("prev" === t ? "previous" : "next", "ElementSibling")
              ]) &&
              e.classList.add("".concat(s, "-").concat(t, "-").concat(t)));
        }
        function c(e) {
          let t = e.target.closest(eu(i.params.pagination.bulletClass));
          if (!t) return;
          e.preventDefault();
          let s = T(t) * i.params.slidesPerGroup;
          if (i.params.loop) {
            var r, a, l;
            if (i.realIndex === s) return;
            let e =
              ((r = i.realIndex),
              (a = s),
              ((r %= l = i.slides.length), (a %= l) === r + 1)
                ? "next"
                : a === r - 1
                ? "previous"
                : void 0);
            "next" === e
              ? i.slideNext()
              : "previous" === e
              ? i.slidePrev()
              : i.slideToLoop(s);
          } else i.slideTo(s);
        }
        function p() {
          let e,
            s,
            r = i.rtl,
            l = i.params.pagination;
          if (o()) return;
          let c = i.pagination.el;
          c = M(c);
          let p =
              i.virtual && i.params.virtual.enabled
                ? i.virtual.slides.length
                : i.slides.length,
            u = i.params.loop
              ? Math.ceil(p / i.params.slidesPerGroup)
              : i.snapGrid.length;
          if (
            (i.params.loop
              ? ((s = i.previousRealIndex || 0),
                (e =
                  i.params.slidesPerGroup > 1
                    ? Math.floor(i.realIndex / i.params.slidesPerGroup)
                    : i.realIndex))
              : void 0 !== i.snapIndex
              ? ((e = i.snapIndex), (s = i.previousSnapIndex))
              : ((s = i.previousIndex || 0), (e = i.activeIndex || 0)),
            "bullets" === l.type &&
              i.pagination.bullets &&
              i.pagination.bullets.length > 0)
          ) {
            let a,
              o,
              p,
              u = i.pagination.bullets;
            if (
              (l.dynamicBullets &&
                ((t = C(u[0], i.isHorizontal() ? "width" : "height", !0)),
                c.forEach((e) => {
                  e.style[i.isHorizontal() ? "width" : "height"] = "".concat(
                    t * (l.dynamicMainBullets + 4),
                    "px"
                  );
                }),
                l.dynamicMainBullets > 1 &&
                  void 0 !== s &&
                  ((n += e - (s || 0)) > l.dynamicMainBullets - 1
                    ? (n = l.dynamicMainBullets - 1)
                    : n < 0 && (n = 0)),
                (p =
                  ((o =
                    (a = Math.max(e - n, 0)) +
                    (Math.min(u.length, l.dynamicMainBullets) - 1)) +
                    a) /
                  2)),
              u.forEach((e) => {
                let t = [
                  ...[
                    "",
                    "-next",
                    "-next-next",
                    "-prev",
                    "-prev-prev",
                    "-main",
                  ].map((e) => "".concat(l.bulletActiveClass).concat(e)),
                ]
                  .map((e) =>
                    "string" == typeof e && e.includes(" ") ? e.split(" ") : e
                  )
                  .flat();
                e.classList.remove(...t);
              }),
              c.length > 1)
            )
              u.forEach((t) => {
                let s = T(t);
                s === e
                  ? t.classList.add(...l.bulletActiveClass.split(" "))
                  : i.isElement && t.setAttribute("part", "bullet"),
                  l.dynamicBullets &&
                    (s >= a &&
                      s <= o &&
                      t.classList.add(
                        ..."".concat(l.bulletActiveClass, "-main").split(" ")
                      ),
                    s === a && d(t, "prev"),
                    s === o && d(t, "next"));
              });
            else {
              let t = u[e];
              if (
                (t && t.classList.add(...l.bulletActiveClass.split(" ")),
                i.isElement &&
                  u.forEach((t, i) => {
                    t.setAttribute(
                      "part",
                      i === e ? "bullet-active" : "bullet"
                    );
                  }),
                l.dynamicBullets)
              ) {
                let e = u[a],
                  t = u[o];
                for (let e = a; e <= o; e += 1)
                  u[e] &&
                    u[e].classList.add(
                      ..."".concat(l.bulletActiveClass, "-main").split(" ")
                    );
                d(e, "prev"), d(t, "next");
              }
            }
            if (l.dynamicBullets) {
              let e = Math.min(u.length, l.dynamicMainBullets + 4),
                s = (t * e - t) / 2 - p * t,
                a = r ? "right" : "left";
              u.forEach((e) => {
                e.style[i.isHorizontal() ? a : "top"] = "".concat(s, "px");
              });
            }
          }
          c.forEach((t, s) => {
            if (
              ("fraction" === l.type &&
                (t.querySelectorAll(eu(l.currentClass)).forEach((t) => {
                  t.textContent = l.formatFractionCurrent(e + 1);
                }),
                t.querySelectorAll(eu(l.totalClass)).forEach((e) => {
                  e.textContent = l.formatFractionTotal(u);
                })),
              "progressbar" === l.type)
            ) {
              let s;
              s = l.progressbarOpposite
                ? i.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : i.isHorizontal()
                ? "horizontal"
                : "vertical";
              let r = (e + 1) / u,
                a = 1,
                n = 1;
              "horizontal" === s ? (a = r) : (n = r),
                t.querySelectorAll(eu(l.progressbarFillClass)).forEach((e) => {
                  (e.style.transform = "translate3d(0,0,0) scaleX("
                    .concat(a, ") scaleY(")
                    .concat(n, ")")),
                    (e.style.transitionDuration = "".concat(
                      i.params.speed,
                      "ms"
                    ));
                });
            }
            "custom" === l.type && l.renderCustom
              ? (P(t, l.renderCustom(i, e + 1, u)),
                0 === s && a("paginationRender", t))
              : (0 === s && a("paginationRender", t), a("paginationUpdate", t)),
              i.params.watchOverflow &&
                i.enabled &&
                t.classList[i.isLocked ? "add" : "remove"](l.lockClass);
          });
        }
        function u() {
          let e = i.params.pagination;
          if (o()) return;
          let t =
              i.virtual && i.params.virtual.enabled
                ? i.virtual.slides.length
                : i.grid && i.params.grid.rows > 1
                ? i.slides.length / Math.ceil(i.params.grid.rows)
                : i.slides.length,
            s = i.pagination.el;
          s = M(s);
          let r = "";
          if ("bullets" === e.type) {
            let s = i.params.loop
              ? Math.ceil(t / i.params.slidesPerGroup)
              : i.snapGrid.length;
            i.params.freeMode && i.params.freeMode.enabled && s > t && (s = t);
            for (let t = 0; t < s; t += 1)
              e.renderBullet
                ? (r += e.renderBullet.call(i, t, e.bulletClass))
                : (r += "<"
                    .concat(e.bulletElement, " ")
                    .concat(i.isElement ? 'part="bullet"' : "", ' class="')
                    .concat(e.bulletClass, '"></')
                    .concat(e.bulletElement, ">"));
          }
          "fraction" === e.type &&
            (r = e.renderFraction
              ? e.renderFraction.call(i, e.currentClass, e.totalClass)
              : '<span class="'.concat(e.currentClass, '"></span>') +
                " / " +
                '<span class="'.concat(e.totalClass, '"></span>')),
            "progressbar" === e.type &&
              (r = e.renderProgressbar
                ? e.renderProgressbar.call(i, e.progressbarFillClass)
                : '<span class="'.concat(e.progressbarFillClass, '"></span>')),
            (i.pagination.bullets = []),
            s.forEach((t) => {
              "custom" !== e.type && P(t, r || ""),
                "bullets" === e.type &&
                  i.pagination.bullets.push(
                    ...t.querySelectorAll(eu(e.bulletClass))
                  );
            }),
            "custom" !== e.type && a("paginationRender", s[0]);
        }
        function h() {
          var e, t, s;
          let r;
          i.params.pagination =
            ((e = i.originalParams.pagination),
            (t = i.params.pagination),
            (s = { el: "swiper-pagination" }),
            i.params.createElements &&
              Object.keys(s).forEach((r) => {
                if (!t[r] && !0 === t.auto) {
                  let a = b(i.el, ".".concat(s[r]))[0];
                  a ||
                    (((a = x("div", s[r])).className = s[r]), i.el.append(a)),
                    (t[r] = a),
                    (e[r] = a);
                }
              }),
            t);
          let a = i.params.pagination;
          a.el &&
            ("string" == typeof a.el &&
              i.isElement &&
              (r = i.el.querySelector(a.el)),
            r ||
              "string" != typeof a.el ||
              (r = [...document.querySelectorAll(a.el)]),
            r || (r = a.el),
            r &&
              0 !== r.length &&
              (i.params.uniqueNavElements &&
                "string" == typeof a.el &&
                Array.isArray(r) &&
                r.length > 1 &&
                (r = [...i.el.querySelectorAll(a.el)]).length > 1 &&
                (r = r.find((e) => E(e, ".swiper")[0] === i.el)),
              Array.isArray(r) && 1 === r.length && (r = r[0]),
              Object.assign(i.pagination, { el: r }),
              (r = M(r)).forEach((e) => {
                "bullets" === a.type &&
                  a.clickable &&
                  e.classList.add(...(a.clickableClass || "").split(" ")),
                  e.classList.add(a.modifierClass + a.type),
                  e.classList.add(
                    i.isHorizontal() ? a.horizontalClass : a.verticalClass
                  ),
                  "bullets" === a.type &&
                    a.dynamicBullets &&
                    (e.classList.add(
                      "".concat(a.modifierClass).concat(a.type, "-dynamic")
                    ),
                    (n = 0),
                    a.dynamicMainBullets < 1 && (a.dynamicMainBullets = 1)),
                  "progressbar" === a.type &&
                    a.progressbarOpposite &&
                    e.classList.add(a.progressbarOppositeClass),
                  a.clickable && e.addEventListener("click", c),
                  i.enabled || e.classList.add(a.lockClass);
              })));
        }
        function m() {
          let e = i.params.pagination;
          if (o()) return;
          let t = i.pagination.el;
          t &&
            (t = M(t)).forEach((t) => {
              t.classList.remove(e.hiddenClass),
                t.classList.remove(e.modifierClass + e.type),
                t.classList.remove(
                  i.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                e.clickable &&
                  (t.classList.remove(...(e.clickableClass || "").split(" ")),
                  t.removeEventListener("click", c));
            }),
            i.pagination.bullets &&
              i.pagination.bullets.forEach((t) =>
                t.classList.remove(...e.bulletActiveClass.split(" "))
              );
        }
        r("changeDirection", () => {
          if (!i.pagination || !i.pagination.el) return;
          let e = i.params.pagination,
            { el: t } = i.pagination;
          (t = M(t)).forEach((t) => {
            t.classList.remove(e.horizontalClass, e.verticalClass),
              t.classList.add(
                i.isHorizontal() ? e.horizontalClass : e.verticalClass
              );
          });
        }),
          r("init", () => {
            !1 === i.params.pagination.enabled ? f() : (h(), u(), p());
          }),
          r("activeIndexChange", () => {
            void 0 === i.snapIndex && p();
          }),
          r("snapIndexChange", () => {
            p();
          }),
          r("snapGridLengthChange", () => {
            u(), p();
          }),
          r("destroy", () => {
            m();
          }),
          r("enable disable", () => {
            let { el: e } = i.pagination;
            e &&
              (e = M(e)).forEach((e) =>
                e.classList[i.enabled ? "remove" : "add"](
                  i.params.pagination.lockClass
                )
              );
          }),
          r("lock unlock", () => {
            p();
          }),
          r("click", (e, t) => {
            let s = t.target,
              r = M(i.pagination.el);
            if (
              i.params.pagination.el &&
              i.params.pagination.hideOnClick &&
              r &&
              r.length > 0 &&
              !s.classList.contains(i.params.pagination.bulletClass)
            ) {
              if (
                i.navigation &&
                ((i.navigation.nextEl && s === i.navigation.nextEl) ||
                  (i.navigation.prevEl && s === i.navigation.prevEl))
              )
                return;
              !0 === r[0].classList.contains(i.params.pagination.hiddenClass)
                ? a("paginationShow")
                : a("paginationHide"),
                r.forEach((e) =>
                  e.classList.toggle(i.params.pagination.hiddenClass)
                );
            }
          });
        let f = () => {
          i.el.classList.add(i.params.pagination.paginationDisabledClass);
          let { el: e } = i.pagination;
          e &&
            (e = M(e)).forEach((e) =>
              e.classList.add(i.params.pagination.paginationDisabledClass)
            ),
            m();
        };
        Object.assign(i.pagination, {
          enable: () => {
            i.el.classList.remove(i.params.pagination.paginationDisabledClass);
            let { el: e } = i.pagination;
            e &&
              (e = M(e)).forEach((e) =>
                e.classList.remove(i.params.pagination.paginationDisabledClass)
              ),
              h(),
              u(),
              p();
          },
          disable: f,
          render: u,
          update: p,
          init: h,
          destroy: m,
        });
      }
      function em(e) {
        let t,
          i,
          s,
          r,
          a,
          l,
          n,
          o,
          d,
          p,
          { swiper: u, extendParams: h, on: m, emit: f, params: g } = e;
        (u.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
          h({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !1,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          });
        let v = g && g.autoplay ? g.autoplay.delay : 3e3,
          w = g && g.autoplay ? g.autoplay.delay : 3e3,
          b = new Date().getTime();
        function y(e) {
          u &&
            !u.destroyed &&
            u.wrapperEl &&
            e.target === u.wrapperEl &&
            (u.wrapperEl.removeEventListener("transitionend", y),
            p || (e.detail && e.detail.bySwiperTouchMove) || M());
        }
        let x = () => {
            if (u.destroyed || !u.autoplay.running) return;
            u.autoplay.paused ? (r = !0) : r && ((w = s), (r = !1));
            let e = u.autoplay.paused ? s : b + w - new Date().getTime();
            (u.autoplay.timeLeft = e),
              f("autoplayTimeLeft", e, e / v),
              (i = requestAnimationFrame(() => {
                x();
              }));
          },
          S = (e) => {
            if (u.destroyed || !u.autoplay.running) return;
            cancelAnimationFrame(i), x();
            let r = void 0 === e ? u.params.autoplay.delay : e;
            (v = u.params.autoplay.delay), (w = u.params.autoplay.delay);
            let a = (() => {
              let e;
              if (
                (e =
                  u.virtual && u.params.virtual.enabled
                    ? u.slides.find((e) =>
                        e.classList.contains("swiper-slide-active")
                      )
                    : u.slides[u.activeIndex])
              )
                return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
            })();
            !Number.isNaN(a) &&
              a > 0 &&
              void 0 === e &&
              ((r = a), (v = a), (w = a)),
              (s = r);
            let l = u.params.speed,
              n = () => {
                u &&
                  !u.destroyed &&
                  (u.params.autoplay.reverseDirection
                    ? !u.isBeginning || u.params.loop || u.params.rewind
                      ? (u.slidePrev(l, !0, !0), f("autoplay"))
                      : u.params.autoplay.stopOnLastSlide ||
                        (u.slideTo(u.slides.length - 1, l, !0, !0),
                        f("autoplay"))
                    : !u.isEnd || u.params.loop || u.params.rewind
                    ? (u.slideNext(l, !0, !0), f("autoplay"))
                    : u.params.autoplay.stopOnLastSlide ||
                      (u.slideTo(0, l, !0, !0), f("autoplay")),
                  u.params.cssMode &&
                    ((b = new Date().getTime()),
                    requestAnimationFrame(() => {
                      S();
                    })));
              };
            return (
              r > 0
                ? (clearTimeout(t),
                  (t = setTimeout(() => {
                    n();
                  }, r)))
                : requestAnimationFrame(() => {
                    n();
                  }),
              r
            );
          },
          T = () => {
            (b = new Date().getTime()),
              (u.autoplay.running = !0),
              S(),
              f("autoplayStart");
          },
          E = () => {
            (u.autoplay.running = !1),
              clearTimeout(t),
              cancelAnimationFrame(i),
              f("autoplayStop");
          },
          C = (e, i) => {
            if (u.destroyed || !u.autoplay.running) return;
            clearTimeout(t), e || (d = !0);
            let r = () => {
              f("autoplayPause"),
                u.params.autoplay.waitForTransition
                  ? u.wrapperEl.addEventListener("transitionend", y)
                  : M();
            };
            if (((u.autoplay.paused = !0), i)) {
              o && (s = u.params.autoplay.delay), (o = !1), r();
              return;
            }
            (s = (s || u.params.autoplay.delay) - (new Date().getTime() - b)),
              (u.isEnd && s < 0 && !u.params.loop) || (s < 0 && (s = 0), r());
          },
          M = () => {
            (u.isEnd && s < 0 && !u.params.loop) ||
              u.destroyed ||
              !u.autoplay.running ||
              ((b = new Date().getTime()),
              d ? ((d = !1), S(s)) : S(),
              (u.autoplay.paused = !1),
              f("autoplayResume"));
          },
          P = () => {
            if (u.destroyed || !u.autoplay.running) return;
            let e = c();
            "hidden" === e.visibilityState && ((d = !0), C(!0)),
              "visible" === e.visibilityState && M();
          },
          k = (e) => {
            "mouse" === e.pointerType &&
              ((d = !0), (p = !0), u.animating || u.autoplay.paused || C(!0));
          },
          L = (e) => {
            "mouse" === e.pointerType && ((p = !1), u.autoplay.paused && M());
          };
        m("init", () => {
          u.params.autoplay.enabled &&
            (u.params.autoplay.pauseOnMouseEnter &&
              (u.el.addEventListener("pointerenter", k),
              u.el.addEventListener("pointerleave", L)),
            c().addEventListener("visibilitychange", P),
            T());
        }),
          m("destroy", () => {
            u.el &&
              "string" != typeof u.el &&
              (u.el.removeEventListener("pointerenter", k),
              u.el.removeEventListener("pointerleave", L)),
              c().removeEventListener("visibilitychange", P),
              u.autoplay.running && E();
          }),
          m("_freeModeStaticRelease", () => {
            (l || d) && M();
          }),
          m("_freeModeNoMomentumRelease", () => {
            u.params.autoplay.disableOnInteraction ? E() : C(!0, !0);
          }),
          m("beforeTransitionStart", (e, t, i) => {
            !u.destroyed &&
              u.autoplay.running &&
              (i || !u.params.autoplay.disableOnInteraction ? C(!0, !0) : E());
          }),
          m("sliderFirstMove", () => {
            if (!u.destroyed && u.autoplay.running) {
              if (u.params.autoplay.disableOnInteraction) return void E();
              (a = !0),
                (l = !1),
                (d = !1),
                (n = setTimeout(() => {
                  (d = !0), (l = !0), C(!0);
                }, 200));
            }
          }),
          m("touchEnd", () => {
            if (!u.destroyed && u.autoplay.running && a) {
              if (
                (clearTimeout(n),
                clearTimeout(t),
                u.params.autoplay.disableOnInteraction)
              ) {
                (l = !1), (a = !1);
                return;
              }
              l && u.params.cssMode && M(), (l = !1), (a = !1);
            }
          }),
          m("slideChange", () => {
            !u.destroyed && u.autoplay.running && (o = !0);
          }),
          Object.assign(u.autoplay, { start: T, stop: E, pause: C, resume: M });
      }
      function ef() {
        let [e, t] = (0, l.useState)(!1);
        (0, l.useEffect)(() => {
          let e = () => {
            t(window.innerWidth < 768);
          };
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []);
        let i = [
            {
              icon: (0, r.jsx)("svg", {
                className: "w-6 h-6 text-white",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, r.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M13 10V3L4 14h7v7l9-11h-7z",
                }),
              }),
              title: "PoI Consensus",
              description:
                "Revolutionizing consensus with Proof-of-Intelligence, a logical leap in secure and efficient decision-making.",
            },
            {
              icon: (0, r.jsx)("svg", {
                className: "w-6 h-6 text-white",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, r.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                }),
              }),
              title: "Artificial Intelligence Virtual Machine",
              description:
                "Empowering developers with futuristic, AI-driven computation for smarter decentralized applications.",
            },
            {
              icon: (0, r.jsx)("svg", {
                className: "w-6 h-6 text-white",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, r.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                }),
              }),
              title: "Transparent AI Framework",
              description:
                "Redefining trust with an open, auditable, and accountable AI system for intelligent operations.",
            },
            {
              icon: (0, r.jsx)("svg", {
                className: "w-6 h-6 text-white",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, r.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                }),
              }),
              title: "Governance Integration",
              description:
                "Seamless fusion of decentralized governance and AI for smarter, community-driven decision-making.",
            },
            {
              icon: (0, r.jsx)("svg", {
                className: "w-6 h-6 text-white",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, r.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                }),
              }),
              title: "Memecoin Launchpad",
              description:
                "Elevating the meme economy with a secure, AI-enhanced platform for creativity and monetization.",
            },
            {
              icon: (0, r.jsx)("svg", {
                className: "w-6 h-6 text-white",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: (0, r.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                }),
              }),
              title: "Decentralized Governance",
              description:
                "Pioneering equitable, transparent decision-making powered by advanced AI and blockchain technologies.",
            },
          ],
          s = (e) => {
            let { feature: t } = e;
            return (0, r.jsx)("div", {
              className:
                "group bg-white dark:bg-[#0B101C] min-h-[300px] sm:min-h-0 rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border lg:border-gray-200 lg:hover:border-[#d02fc2] border-[#d02fc2] lg:dark:border-gray-700 h-full flex flex-col lg:dark:hover:border-[#d02fc2] mt-6",
              children: (0, r.jsxs)("div", {
                className:
                  "flex flex-col md:flex-1 justify-center items-center text-center md:text-start",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "w-12 h-12 bg-gradient-to-r from-ethai-from -from-20% via-ethai-via via-30% to-ethai-to to-85% rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300",
                    children: t.icon,
                  }),
                  (0, r.jsx)("h4", {
                    className:
                      "text-xl font-semibold text-center text-ethai dark:text-ethai mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300",
                    children: t.title,
                  }),
                  (0, r.jsx)("p", {
                    className:
                      "text-gray-500 dark:text-gray-300 leading-relaxed text-center",
                    children: t.description,
                  }),
                ],
              }),
            });
          };
        return (0, r.jsxs)("section", {
          className:
            "jsx-a90fa4a6ef890d3 relative py-20 bg-white dark:bg-gray-950 overflow-hidden",
          children: [
            (0, r.jsxs)("div", {
              className:
                "jsx-a90fa4a6ef890d3 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: [
                (0, r.jsxs)("div", {
                  className: "jsx-a90fa4a6ef890d3 text-center mb-16",
                  children: [
                    (0, r.jsx)("div", {
                      className: "jsx-a90fa4a6ef890d3 mb-8",
                      children: (0, r.jsx)("svg", {
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        className:
                          "jsx-a90fa4a6ef890d3 w-16 h-16 mx-auto text-ethai mb-4",
                        children: (0, r.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 1,
                          d: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
                          className: "jsx-a90fa4a6ef890d3",
                        }),
                      }),
                    }),
                    (0, r.jsx)("h2", {
                      className:
                        "jsx-a90fa4a6ef890d3 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4",
                      children: "Etherchain Protocol AI",
                    }),
                    (0, r.jsx)("h3", {
                      className:
                        "jsx-a90fa4a6ef890d3 text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 bg-clip-text text-transparent mb-6",
                      children: "Transforming Blockchain & AIVM",
                    }),
                    (0, r.jsx)("p", {
                      className:
                        "jsx-a90fa4a6ef890d3 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                      children:
                        "Transforming Tomorrow with AI-Driven Blockchain",
                    }),
                  ],
                }),
                e
                  ? (0, r.jsx)("div", {
                      className: "jsx-a90fa4a6ef890d3 md:hidden",
                      children: (0, r.jsx)(ec, {
                        modules: [eh, em],
                        spaceBetween: 20,
                        slidesPerView: 1.2,
                        centeredSlides: !0,
                        loop: !0,
                        autoplay: { delay: 3e3, disableOnInteraction: !1 },
                        pagination: { clickable: !0, dynamicBullets: !0 },
                        className: "features-swiper",
                        style: {
                          "--swiper-pagination-color": "#d02fc2",
                          "--swiper-pagination-bullet-inactive-color":
                            "#6b7280",
                          "--swiper-pagination-bullet-inactive-opacity": "0.3",
                        },
                        children: i.map((e, t) =>
                          (0, r.jsx)(
                            ep,
                            { children: (0, r.jsx)(s, { feature: e }) },
                            t
                          )
                        ),
                      }),
                    })
                  : (0, r.jsx)("div", {
                      className:
                        "jsx-a90fa4a6ef890d3 hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto",
                      children: i.map((e, t) =>
                        (0, r.jsx)(s, { feature: e }, t)
                      ),
                    }),
              ],
            }),
            (0, r.jsx)(a.default, {
              id: "a90fa4a6ef890d3",
              children:
                ".features-swiper .swiper-pagination{bottom:-40px}.features-swiper .swiper-pagination-bullet{background:var(--swiper-pagination-bullet-inactive-color);width:8px;height:8px;opacity:var(--swiper-pagination-bullet-inactive-opacity)}.features-swiper .swiper-pagination-bullet-active{background:var(--swiper-pagination-color);opacity:1}",
            }),
          ],
        });
      }
      ep.displayName = "SwiperSlide";
    },
    21135: (e) => {
      e.n(e.i(349232));
    },
  },
]);

//# sourceMappingURL=af8474a88934d716.js.map
